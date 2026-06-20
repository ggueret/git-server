use std::fs;
use std::path::{Path, PathBuf};

use serde::Serialize;

use crate::error::{Error, Result};

const DEFAULT_GIT_DESCRIPTION: &str =
    "Unnamed repository; edit this file 'description' to name the repository.";

/// Information about a discovered git repository (bare or with a working tree).
#[derive(Debug, Clone, Serialize)]
pub struct RepoInfo {
    pub name: String,
    pub relative_path: String,
    #[serde(skip)]
    pub absolute_path: PathBuf,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,
}

/// A store of discovered repositories under a root directory.
#[derive(Debug)]
pub struct RepoStore {
    root: PathBuf,
    repos: Vec<RepoInfo>,
}

impl RepoStore {
    /// Scan `root` recursively up to `max_depth` levels for git repositories.
    ///
    /// `max_depth = 0` means only repositories directly inside `root`.
    /// `max_depth = 3` means up to 3 levels of subdirectories below `root`.
    ///
    /// When `bare_only` is true, only bare repositories are recorded and a
    /// directory with a working tree is descended into as an ordinary
    /// directory. When false, any repository (bare or with a working tree) is
    /// recorded.
    pub fn discover(root: PathBuf, max_depth: u32, bare_only: bool) -> Result<Self> {
        let root = root.canonicalize()?;
        let mut repos = Vec::new();

        // Walk starts at depth 0 (root itself). We scan children of root at depth 1,
        // and allow descending up to max_depth subdirectory levels below root.
        walk_dir(&root, &root, 0, max_depth, bare_only, &mut repos)?;

        repos.sort_by(|a, b| a.relative_path.cmp(&b.relative_path));

        Ok(Self { root, repos })
    }

    /// Resolve a relative path to a `RepoInfo`.
    ///
    /// Uses `crate::path::resolve_repo_path` for validation, then matches by
    /// canonical absolute path.
    pub fn resolve(&self, relative: &str) -> Result<&RepoInfo> {
        let canonical = crate::path::resolve_repo_path(&self.root, relative)?;
        self.repos
            .iter()
            .find(|r| r.absolute_path == canonical)
            .ok_or_else(|| Error::RepoNotFound(relative.to_string()))
    }

    /// Returns all discovered repositories, sorted by relative path.
    pub fn list(&self) -> &[RepoInfo] {
        &self.repos
    }

    /// Returns the root directory used for discovery.
    pub fn root(&self) -> &Path {
        &self.root
    }
}

/// Recursively walk `dir`, recording git repositories.
///
/// A recorded repository is not descended into, so repositories nested inside
/// another repository's working tree are not exposed. When `bare_only` is true,
/// only bare repositories are recorded; a working-tree repository is then
/// treated as an ordinary directory and descended into.
///
/// `depth` is the current depth relative to `root` (root itself is depth 0).
/// Entries *inside* root are at depth 1. We descend while `depth <= max_depth`.
fn walk_dir(
    root: &Path,
    dir: &Path,
    depth: u32,
    max_depth: u32,
    bare_only: bool,
    repos: &mut Vec<RepoInfo>,
) -> Result<()> {
    let read = match fs::read_dir(dir) {
        Ok(r) => r,
        Err(e) if e.kind() == std::io::ErrorKind::PermissionDenied => return Ok(()),
        Err(e) => return Err(Error::Io(e)),
    };

    for entry in read {
        let entry = entry?;
        let path = entry.path();

        let metadata = match fs::metadata(&path) {
            Ok(m) => m,
            Err(_) => continue,
        };

        if !metadata.is_dir() {
            continue;
        }

        // Try to open as a git repository. In bare-only mode, skip repositories
        // that have a working tree.
        match gix::open(&path) {
            Ok(repo) if !bare_only || repo.is_bare() => {
                let absolute_path = path.canonicalize()?;
                let relative_path = absolute_path
                    .strip_prefix(root)
                    .expect("discovered path must be inside root")
                    .to_string_lossy()
                    .into_owned();
                let name = absolute_path
                    .file_name()
                    .map(|n| n.to_string_lossy().into_owned())
                    .unwrap_or_else(|| relative_path.clone());
                let description = read_description(&absolute_path);

                repos.push(RepoInfo {
                    name,
                    relative_path,
                    absolute_path,
                    description,
                });
                // Do not descend into a repository directory.
            }
            _ => {
                // Not a repository to record here (open failed, or a working-tree
                // repo in bare-only mode). Descend if within max_depth.
                if depth < max_depth {
                    walk_dir(root, &path, depth + 1, max_depth, bare_only, repos)?;
                }
            }
        }
    }

    Ok(())
}

/// Read the `description` file from a bare repository directory.
///
/// Returns `None` if the file is absent, unreadable, or contains the default
/// git placeholder text.
fn read_description(repo_path: &Path) -> Option<String> {
    let desc_path = repo_path.join("description");
    let content = fs::read_to_string(&desc_path).ok()?;
    let trimmed = content.trim().to_string();
    if trimmed.is_empty() || trimmed == DEFAULT_GIT_DESCRIPTION {
        None
    } else {
        Some(trimmed)
    }
}

#[cfg(test)]
mod tests {
    use std::path::Path;
    use std::process::Command;

    use tempfile::TempDir;

    use super::*;

    fn create_bare_repo(path: &Path) {
        Command::new("git")
            .args(["init", "--bare", path.to_str().unwrap()])
            .output()
            .expect("git init --bare failed");
    }

    fn create_working_repo(path: &Path) {
        Command::new("git")
            .args(["init", path.to_str().unwrap()])
            .output()
            .expect("git init failed");
    }

    #[test]
    fn discover_finds_bare_repos() {
        let dir = TempDir::new().unwrap();
        create_bare_repo(&dir.path().join("alpha.git"));
        create_bare_repo(&dir.path().join("beta.git"));

        let store = RepoStore::discover(dir.path().to_path_buf(), 0, false).unwrap();
        assert_eq!(store.list().len(), 2);
    }

    #[test]
    fn discover_finds_nested_repos() {
        let dir = TempDir::new().unwrap();
        let repo_path = dir.path().join("org").join("project.git");
        std::fs::create_dir_all(&repo_path).unwrap();
        create_bare_repo(&repo_path);

        let store = RepoStore::discover(dir.path().to_path_buf(), 1, false).unwrap();
        assert_eq!(store.list().len(), 1);
        assert_eq!(store.list()[0].relative_path, "org/project.git");
    }

    #[test]
    fn discover_respects_max_depth() {
        let dir = TempDir::new().unwrap();
        let deep = dir.path().join("a").join("b").join("c").join("deep.git");
        std::fs::create_dir_all(&deep).unwrap();
        create_bare_repo(&deep);

        // max_depth 2 should not find it (it is 3 levels below root)
        let store_shallow = RepoStore::discover(dir.path().to_path_buf(), 2, false).unwrap();
        assert_eq!(store_shallow.list().len(), 0);

        // max_depth 3 should find it
        let store_deep = RepoStore::discover(dir.path().to_path_buf(), 3, false).unwrap();
        assert_eq!(store_deep.list().len(), 1);
    }

    #[test]
    fn discover_max_depth_zero_only_root_level() {
        let dir = TempDir::new().unwrap();
        create_bare_repo(&dir.path().join("root-level.git"));
        let nested = dir.path().join("nested").join("deep.git");
        std::fs::create_dir_all(&nested).unwrap();
        create_bare_repo(&nested);

        let store = RepoStore::discover(dir.path().to_path_buf(), 0, false).unwrap();
        assert_eq!(store.list().len(), 1);
        assert_eq!(store.list()[0].relative_path, "root-level.git");
    }

    #[test]
    fn discover_ignores_non_bare_dirs() {
        let dir = TempDir::new().unwrap();
        // A plain directory -- not a git repo
        std::fs::create_dir(dir.path().join("just-a-dir")).unwrap();

        let store = RepoStore::discover(dir.path().to_path_buf(), 0, false).unwrap();
        assert_eq!(store.list().len(), 0);
    }

    #[test]
    fn discover_finds_non_bare_repos() {
        let dir = TempDir::new().unwrap();
        create_working_repo(&dir.path().join("myproject"));

        let store = RepoStore::discover(dir.path().to_path_buf(), 0, false).unwrap();
        assert_eq!(store.list().len(), 1);
        assert_eq!(store.list()[0].relative_path, "myproject");
        assert_eq!(store.list()[0].name, "myproject");
    }

    #[test]
    fn discover_does_not_descend_into_working_tree() {
        // A bare repo nested inside a working repo's tree must not be exposed:
        // discovery stops at the repository boundary.
        let dir = TempDir::new().unwrap();
        let project = dir.path().join("project");
        create_working_repo(&project);
        create_bare_repo(&project.join("vendor").join("inner.git"));

        let store = RepoStore::discover(dir.path().to_path_buf(), 3, false).unwrap();
        assert_eq!(store.list().len(), 1);
        assert_eq!(store.list()[0].relative_path, "project");
    }

    #[test]
    fn discover_bare_only_skips_non_bare_repos() {
        let dir = TempDir::new().unwrap();
        create_bare_repo(&dir.path().join("served.git"));
        create_working_repo(&dir.path().join("ignored"));

        let store = RepoStore::discover(dir.path().to_path_buf(), 0, true).unwrap();
        assert_eq!(store.list().len(), 1);
        assert_eq!(store.list()[0].relative_path, "served.git");
    }

    #[test]
    fn resolve_existing_repo() {
        let dir = TempDir::new().unwrap();
        create_bare_repo(&dir.path().join("myrepo.git"));

        let store = RepoStore::discover(dir.path().to_path_buf(), 0, false).unwrap();
        let info = store.resolve("myrepo.git").unwrap();
        assert_eq!(info.relative_path, "myrepo.git");
        assert_eq!(info.name, "myrepo.git");
    }

    #[test]
    fn resolve_missing_repo() {
        let dir = TempDir::new().unwrap();
        create_bare_repo(&dir.path().join("exists.git"));

        let store = RepoStore::discover(dir.path().to_path_buf(), 0, false).unwrap();
        let err = store.resolve("nope.git").unwrap_err();
        assert!(matches!(err, Error::RepoNotFound(_)));
    }

    #[test]
    fn reads_description_file() {
        let dir = TempDir::new().unwrap();
        let repo_path = dir.path().join("described.git");
        create_bare_repo(&repo_path);
        std::fs::write(repo_path.join("description"), "A test repository\n").unwrap();

        let store = RepoStore::discover(dir.path().to_path_buf(), 0, false).unwrap();
        assert_eq!(store.list().len(), 1);
        assert_eq!(
            store.list()[0].description.as_deref(),
            Some("A test repository")
        );
    }
}
