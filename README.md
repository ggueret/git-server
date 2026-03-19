# git-server

Dependency-free smart HTTP Git server for local testing.

A standalone server that serves bare Git repositories over HTTP for `git clone` and `git fetch`, without requiring the `git` binary at runtime. Built with [gitoxide](https://github.com/GitoxideLabs/gitoxide) for native Git operations and [Axum](https://github.com/tokio-rs/axum) / [Tokio](https://tokio.rs) for asynchronous HTTP.

## Features

- **Single binary, no git required** -- all Git operations are handled natively, no runtime dependencies
- **Multi-repository** -- serves all bare repos under a root directory with configurable scan depth
- **JSON API** -- repository listing endpoint for programmatic discovery
- **Structured logging** -- text or JSON log output via tracing

## Quick start

```sh
cargo install --path crates/git-server

# Serve all bare repos under ./repos
git-server ./repos

# Clone from the server
git clone http://127.0.0.1:3000/my-project.git
```

## Usage

```
git-server [OPTIONS] <ROOT>

Arguments:
  <ROOT>  Root directory containing bare Git repositories

Options:
  -b, --bind <ADDR>              Bind address [default: 127.0.0.1]
  -p, --port <PORT>              Port number [default: 3000]
  -l, --log-level <LEVEL>        Log level [default: info]
      --log-format <FORMAT>      Log format: text or json [default: text]
  -w, --workers <N>              Number of Tokio worker threads
      --max-depth <N>            Max directory depth for repo discovery [default: 3]
```

## API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | JSON array of discovered repositories |
| GET | `/{repo}/info/refs?service=git-upload-pack` | Git ref advertisement |
| POST | `/{repo}/git-upload-pack` | Git pack negotiation |

Repository listing response:

```json
[
  {
    "name": "my-project.git",
    "relative_path": "my-project.git",
    "absolute_path": "/srv/repos/my-project.git",
    "description": "My project"
  }
]
```

## Architecture

The project is organized as a Cargo workspace with three crates:

- **git-server-core** -- Git protocol operations (ref advertisement, pack generation), repository discovery, path security
- **git-server-http** -- Axum HTTP routing, handlers, error responses
- **git-server** -- CLI binary, tracing setup, server assembly

## Building from source

```sh
git clone https://github.com/ggueret/git-server.git
cd git-server
cargo build --release
```

The binary is at `target/release/git-server`.

## Running tests

```sh
cargo test --workspace
```

The test suite includes unit tests, integration tests (`git clone`/`git fetch` against a running server), and load tests (concurrent clones).
