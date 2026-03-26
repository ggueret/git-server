window.BENCHMARK_DATA = {
  "lastUpdate": 1774488374261,
  "repoUrl": "https://github.com/ggueret/git-server",
  "entries": {
    "git-server Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "ggueret@users.noreply.github.com",
            "name": "Geoffrey Guéret",
            "username": "ggueret"
          },
          "committer": {
            "email": "g.gueret@gmail.com",
            "name": "Geoffrey Guéret",
            "username": "ggueret"
          },
          "distinct": true,
          "id": "04101a4c6cd38f826e6a153ebb3a22161de60850",
          "message": "fix(bench): disable lib bench target to avoid harness conflict\n\ncargo bench passes --output-format bencher to all targets\nincluding the default lib harness which does not support it.\nSetting bench = false on [lib] prevents the lib target from\nrunning during cargo bench.",
          "timestamp": "2026-03-24T22:22:05+01:00",
          "tree_id": "b1f5ef9f278d99685163dfb30a9f09fe2494cad1",
          "url": "https://github.com/ggueret/git-server/commit/04101a4c6cd38f826e6a153ebb3a22161de60850"
        },
        "date": 1774388692037,
        "tool": "cargo",
        "benches": [
          {
            "name": "concurrent_clones/clones/1",
            "value": 71128683,
            "range": "± 3504604",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/2",
            "value": 108118514,
            "range": "± 35987820",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/4",
            "value": 220874520,
            "range": "± 6682542",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/8",
            "value": 431082717,
            "range": "± 5629624",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/16",
            "value": 862019307,
            "range": "± 9594079",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/32",
            "value": 1738077216,
            "range": "± 23395275",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/small",
            "value": 65269410,
            "range": "± 548090",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/medium",
            "value": 71700594,
            "range": "± 3111447",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/large",
            "value": 1847728224,
            "range": "± 13053574",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/small",
            "value": 84986136,
            "range": "± 2036837",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/medium",
            "value": 70956714,
            "range": "± 976224",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/large",
            "value": 1371115224,
            "range": "± 17542224",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/small",
            "value": 790814,
            "range": "± 9143",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/medium",
            "value": 24553760,
            "range": "± 420702",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/large",
            "value": 1237736124,
            "range": "± 11705984",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/small",
            "value": 239058,
            "range": "± 2885",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/medium",
            "value": 304695,
            "range": "± 7593",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/large",
            "value": 414734,
            "range": "± 48176",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ggueret@users.noreply.github.com",
            "name": "Geoffrey Guéret",
            "username": "ggueret"
          },
          "committer": {
            "email": "g.gueret@gmail.com",
            "name": "Geoffrey Guéret",
            "username": "ggueret"
          },
          "distinct": true,
          "id": "6ff09abd6f05998bd74112900b0c9362c9184b70",
          "message": "ci: add release workflow with multi-target build\n\nBuilds for linux (x86_64/aarch64, gnu/musl) and macOS\n(x86_64/aarch64). Publishes to crates.io and creates GitHub\nreleases with git-cliff release notes and SHA256 checksums.",
          "timestamp": "2026-03-25T00:43:22+01:00",
          "tree_id": "b8bd0c2385f02ce383cbc669fc83bd767e252d95",
          "url": "https://github.com/ggueret/git-server/commit/6ff09abd6f05998bd74112900b0c9362c9184b70"
        },
        "date": 1774396982227,
        "tool": "cargo",
        "benches": [
          {
            "name": "concurrent_clones/clones/1",
            "value": 74110930,
            "range": "± 900783",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/2",
            "value": 110386726,
            "range": "± 30309275",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/4",
            "value": 219418165,
            "range": "± 3143799",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/8",
            "value": 438911753,
            "range": "± 25917230",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/16",
            "value": 877143204,
            "range": "± 14989203",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/32",
            "value": 1769167061,
            "range": "± 16268467",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/small",
            "value": 66767914,
            "range": "± 715121",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/medium",
            "value": 73709607,
            "range": "± 1398135",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/large",
            "value": 1875158062,
            "range": "± 15414466",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/small",
            "value": 85809663,
            "range": "± 1486886",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/medium",
            "value": 72287959,
            "range": "± 1083727",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/large",
            "value": 1382734455,
            "range": "± 13511942",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/small",
            "value": 783292,
            "range": "± 19729",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/medium",
            "value": 24570797,
            "range": "± 359551",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/large",
            "value": 1239080418,
            "range": "± 11477105",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/small",
            "value": 238810,
            "range": "± 9018",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/medium",
            "value": 305038,
            "range": "± 5074",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/large",
            "value": 407638,
            "range": "± 30480",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ggueret@users.noreply.github.com",
            "name": "Geoffrey Guéret",
            "username": "ggueret"
          },
          "committer": {
            "email": "g.gueret@gmail.com",
            "name": "Geoffrey Guéret",
            "username": "ggueret"
          },
          "distinct": true,
          "id": "071075ac1b6e7d8b15db1b6d5f5e7a78e677e6cb",
          "message": "fix(core): add Error::Protocol variant for parse errors\n\nReplace Error::InvalidRepo(PathBuf::new(), ...) misuse in\nUploadPackRequest::parse with a dedicated Error::Protocol\nvariant. Map it to HTTP 400 in the error conversion layer\nand remove the manual .map_err() workaround in the handler.\n\nCloses #7",
          "timestamp": "2026-03-25T03:38:39+01:00",
          "tree_id": "1da1b3e34730e81b6003f49984a2ab029983daa5",
          "url": "https://github.com/ggueret/git-server/commit/071075ac1b6e7d8b15db1b6d5f5e7a78e677e6cb"
        },
        "date": 1774407510447,
        "tool": "cargo",
        "benches": [
          {
            "name": "concurrent_clones/clones/1",
            "value": 73872935,
            "range": "± 1359044",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/2",
            "value": 111024271,
            "range": "± 29580128",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/4",
            "value": 220027200,
            "range": "± 5954594",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/8",
            "value": 441342248,
            "range": "± 10047060",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/16",
            "value": 869178919,
            "range": "± 9583011",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/32",
            "value": 1761884061,
            "range": "± 22464346",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/small",
            "value": 66424174,
            "range": "± 1198674",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/medium",
            "value": 72332897,
            "range": "± 2343333",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/large",
            "value": 1856945421,
            "range": "± 14056482",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/small",
            "value": 85942337,
            "range": "± 1024410",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/medium",
            "value": 71899946,
            "range": "± 3150971",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/large",
            "value": 1386556409,
            "range": "± 17031551",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/small",
            "value": 786498,
            "range": "± 19073",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/medium",
            "value": 24667035,
            "range": "± 429730",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/large",
            "value": 1241504114,
            "range": "± 7303342",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/small",
            "value": 238138,
            "range": "± 3898",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/medium",
            "value": 303610,
            "range": "± 3384",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/large",
            "value": 405108,
            "range": "± 3707",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ggueret@users.noreply.github.com",
            "name": "Geoffrey Guéret",
            "username": "ggueret"
          },
          "committer": {
            "email": "g.gueret@gmail.com",
            "name": "Geoffrey Guéret",
            "username": "ggueret"
          },
          "distinct": true,
          "id": "0758b94347da1c0940955da2081f09e3b64ce818",
          "message": "ci(bench): only fail on regression alert for main, not PRs\n\nCI runners have variable performance, causing false positive\nregression alerts on PRs. Keep comment-on-alert for visibility\nbut only fail the build on push to main where sequential runs\non the same runner type make comparisons meaningful.",
          "timestamp": "2026-03-25T12:54:39+01:00",
          "tree_id": "c3580602a63d7ec76f7a811ce0c6373bca0bb3e2",
          "url": "https://github.com/ggueret/git-server/commit/0758b94347da1c0940955da2081f09e3b64ce818"
        },
        "date": 1774440793090,
        "tool": "cargo",
        "benches": [
          {
            "name": "concurrent_clones/clones/1",
            "value": 99162293,
            "range": "± 7037579",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/2",
            "value": 140314535,
            "range": "± 38498804",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/4",
            "value": 231592785,
            "range": "± 6395461",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/8",
            "value": 405845297,
            "range": "± 4704739",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/16",
            "value": 807056343,
            "range": "± 11565297",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/32",
            "value": 1629184613,
            "range": "± 21063763",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/small",
            "value": 37828154,
            "range": "± 10974971",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/medium",
            "value": 99287257,
            "range": "± 6706985",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/large",
            "value": 1610126024,
            "range": "± 17479453",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/small",
            "value": 46254476,
            "range": "± 7351816",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/medium",
            "value": 119119640,
            "range": "± 9199070",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/large",
            "value": 1296425007,
            "range": "± 10196212",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/small",
            "value": 687286,
            "range": "± 15326",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/medium",
            "value": 28432215,
            "range": "± 807054",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/large",
            "value": 1173598472,
            "range": "± 2166856",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/small",
            "value": 118414,
            "range": "± 1086",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/medium",
            "value": 159325,
            "range": "± 14019",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/large",
            "value": 211176,
            "range": "± 3797",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ggueret@users.noreply.github.com",
            "name": "Geoffrey Guéret",
            "username": "ggueret"
          },
          "committer": {
            "email": "ggueret@users.noreply.github.com",
            "name": "Geoffrey Guéret",
            "username": "ggueret"
          },
          "distinct": true,
          "id": "95ace4f42d074410d008b755f1236f73439888df",
          "message": "docs: mark benchmarks as complete in ROADMAP",
          "timestamp": "2026-03-25T21:46:27+01:00",
          "tree_id": "b234facfc351c54b301f14d99c0388415e26950c",
          "url": "https://github.com/ggueret/git-server/commit/95ace4f42d074410d008b755f1236f73439888df"
        },
        "date": 1774472795223,
        "tool": "cargo",
        "benches": [
          {
            "name": "concurrent_clones/clones/1",
            "value": 110479673,
            "range": "± 11796170",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/2",
            "value": 156119583,
            "range": "± 37431937",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/4",
            "value": 257373605,
            "range": "± 8596257",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/8",
            "value": 457000875,
            "range": "± 7919346",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/16",
            "value": 893501442,
            "range": "± 12868332",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/32",
            "value": 1810798869,
            "range": "± 29191754",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/small",
            "value": 63970024,
            "range": "± 605819",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/medium",
            "value": 110029518,
            "range": "± 11003295",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/large",
            "value": 1731239662,
            "range": "± 19039047",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/small",
            "value": 85151174,
            "range": "± 4132782",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/medium",
            "value": 123921959,
            "range": "± 15259737",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/large",
            "value": 1476839422,
            "range": "± 7704746",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/small",
            "value": 1043936,
            "range": "± 24731",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/medium",
            "value": 34799813,
            "range": "± 1621511",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/large",
            "value": 1343836696,
            "range": "± 5525731",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/small",
            "value": 208893,
            "range": "± 14608",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/medium",
            "value": 271739,
            "range": "± 4142",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/large",
            "value": 355727,
            "range": "± 3510",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ggueret@users.noreply.github.com",
            "name": "Geoffrey Guéret",
            "username": "ggueret"
          },
          "committer": {
            "email": "g.gueret@gmail.com",
            "name": "Geoffrey Guéret",
            "username": "ggueret"
          },
          "distinct": true,
          "id": "afa68f4fdad88157f7eccf391b363e77951ea674",
          "message": "style: apply cargo fmt",
          "timestamp": "2026-03-25T22:23:48+01:00",
          "tree_id": "c7c5377aca6eb9093d7bca21237915b8c2968b21",
          "url": "https://github.com/ggueret/git-server/commit/afa68f4fdad88157f7eccf391b363e77951ea674"
        },
        "date": 1774475072786,
        "tool": "cargo",
        "benches": [
          {
            "name": "concurrent_clones/clones/1",
            "value": 111027227,
            "range": "± 15444162",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/2",
            "value": 159595778,
            "range": "± 32350565",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/4",
            "value": 261343406,
            "range": "± 6419977",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/8",
            "value": 475256694,
            "range": "± 9881916",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/16",
            "value": 948732350,
            "range": "± 14421880",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/32",
            "value": 1907745895,
            "range": "± 23068865",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/small",
            "value": 66412476,
            "range": "± 4098283",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/medium",
            "value": 113369649,
            "range": "± 12751131",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/large",
            "value": 1762121010,
            "range": "± 21164554",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/small",
            "value": 86045088,
            "range": "± 4058000",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/medium",
            "value": 130196158,
            "range": "± 12042980",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/large",
            "value": 1499721432,
            "range": "± 17708105",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/small",
            "value": 1166667,
            "range": "± 15496",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/medium",
            "value": 35353218,
            "range": "± 1576589",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/large",
            "value": 1356140097,
            "range": "± 10038188",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/small",
            "value": 240111,
            "range": "± 2891",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/medium",
            "value": 304578,
            "range": "± 9183",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/large",
            "value": 413300,
            "range": "± 5431",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ggueret@users.noreply.github.com",
            "name": "Geoffrey Guéret",
            "username": "ggueret"
          },
          "committer": {
            "email": "ggueret@users.noreply.github.com",
            "name": "Geoffrey Guéret",
            "username": "ggueret"
          },
          "distinct": true,
          "id": "96f8e99cb2fe5fc9b2a50929fefbbc13d9d61b1a",
          "message": "fix: correct author name in LICENSE",
          "timestamp": "2026-03-25T22:34:11+01:00",
          "tree_id": "8b42bb840bd2b54215e40728ba029dff7f7d90bd",
          "url": "https://github.com/ggueret/git-server/commit/96f8e99cb2fe5fc9b2a50929fefbbc13d9d61b1a"
        },
        "date": 1774475685543,
        "tool": "cargo",
        "benches": [
          {
            "name": "concurrent_clones/clones/1",
            "value": 111880498,
            "range": "± 14333751",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/2",
            "value": 158465615,
            "range": "± 27503214",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/4",
            "value": 261187951,
            "range": "± 8486353",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/8",
            "value": 467168056,
            "range": "± 7973524",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/16",
            "value": 922441308,
            "range": "± 23874706",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/32",
            "value": 1853525919,
            "range": "± 19984365",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/small",
            "value": 65094236,
            "range": "± 598854",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/medium",
            "value": 110953964,
            "range": "± 15389275",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/large",
            "value": 1754197292,
            "range": "± 20456728",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/small",
            "value": 85888836,
            "range": "± 4077703",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/medium",
            "value": 127553950,
            "range": "± 9403111",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/large",
            "value": 1507888399,
            "range": "± 9998147",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/small",
            "value": 1163577,
            "range": "± 27172",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/medium",
            "value": 35496151,
            "range": "± 1603081",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/large",
            "value": 1345536681,
            "range": "± 6182728",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/small",
            "value": 234566,
            "range": "± 19445",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/medium",
            "value": 302378,
            "range": "± 5508",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/large",
            "value": 405044,
            "range": "± 3338",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ggueret@users.noreply.github.com",
            "name": "Geoffrey Guéret",
            "username": "ggueret"
          },
          "committer": {
            "email": "ggueret@users.noreply.github.com",
            "name": "Geoffrey Guéret",
            "username": "ggueret"
          },
          "distinct": true,
          "id": "ba71ea36c825bdef620d147ac9a38e509f561fc7",
          "message": "fix(ci): target git-server package in release build\n\nBuild only the git-server binary crate instead of the whole\nworkspace to avoid openssl-sys cross-compilation failure from\nthe bench crate's reqwest dependency.",
          "timestamp": "2026-03-25T22:51:35+01:00",
          "tree_id": "0152e8f63c8fe8122e4da856044273c65d19e33e",
          "url": "https://github.com/ggueret/git-server/commit/ba71ea36c825bdef620d147ac9a38e509f561fc7"
        },
        "date": 1774476473044,
        "tool": "cargo",
        "benches": [
          {
            "name": "concurrent_clones/clones/1",
            "value": 104758103,
            "range": "± 4485791",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/2",
            "value": 117791207,
            "range": "± 5243150",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/4",
            "value": 165658481,
            "range": "± 3261374",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/8",
            "value": 271222705,
            "range": "± 9022570",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/16",
            "value": 495148282,
            "range": "± 3578546",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/32",
            "value": 986039004,
            "range": "± 6690746",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/small",
            "value": 65007445,
            "range": "± 630007",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/medium",
            "value": 104329183,
            "range": "± 8162137",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/large",
            "value": 1533649621,
            "range": "± 17652750",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/small",
            "value": 85067290,
            "range": "± 801672",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/medium",
            "value": 120861798,
            "range": "± 7892204",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/large",
            "value": 1487474389,
            "range": "± 3308152",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/small",
            "value": 1000539,
            "range": "± 17209",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/medium",
            "value": 29770925,
            "range": "± 2912436",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/large",
            "value": 1279270346,
            "range": "± 18911155",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/small",
            "value": 238660,
            "range": "± 1523",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/medium",
            "value": 300547,
            "range": "± 2726",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/large",
            "value": 404141,
            "range": "± 2129",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ggueret@users.noreply.github.com",
            "name": "Geoffrey Guéret",
            "username": "ggueret"
          },
          "committer": {
            "email": "ggueret@users.noreply.github.com",
            "name": "Geoffrey Guéret",
            "username": "ggueret"
          },
          "distinct": true,
          "id": "b3e31fb805fffde6d11fd867909c991df76ee3c4",
          "message": "fix: add description and repository to crate manifests",
          "timestamp": "2026-03-26T02:09:45+01:00",
          "tree_id": "d06e46591577d204779d92877b0e1a07f4f00201",
          "url": "https://github.com/ggueret/git-server/commit/b3e31fb805fffde6d11fd867909c991df76ee3c4"
        },
        "date": 1774488373839,
        "tool": "cargo",
        "benches": [
          {
            "name": "concurrent_clones/clones/1",
            "value": 106025324,
            "range": "± 10991347",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/2",
            "value": 118938878,
            "range": "± 8899920",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/4",
            "value": 166705240,
            "range": "± 2950210",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/8",
            "value": 274230958,
            "range": "± 9387921",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/16",
            "value": 498978205,
            "range": "± 5660670",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_clones/clones/32",
            "value": 995384637,
            "range": "± 8337972",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/small",
            "value": 66108998,
            "range": "± 647695",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/medium",
            "value": 106060351,
            "range": "± 5879612",
            "unit": "ns/iter"
          },
          {
            "name": "git_clone/clone/large",
            "value": 1550811615,
            "range": "± 18527949",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/small",
            "value": 86320636,
            "range": "± 689696",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/medium",
            "value": 121555286,
            "range": "± 9617519",
            "unit": "ns/iter"
          },
          {
            "name": "http_clone/clone/large",
            "value": 1491891144,
            "range": "± 5088817",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/small",
            "value": 998080,
            "range": "± 30214",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/medium",
            "value": 32400715,
            "range": "± 2955901",
            "unit": "ns/iter"
          },
          {
            "name": "pack_generation/clone/large",
            "value": 1281575909,
            "range": "± 18354148",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/small",
            "value": 238625,
            "range": "± 2567",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/medium",
            "value": 302259,
            "range": "± 1565",
            "unit": "ns/iter"
          },
          {
            "name": "ref_advertisement/advertise/large",
            "value": 405008,
            "range": "± 3922",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}