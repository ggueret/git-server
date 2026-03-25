window.BENCHMARK_DATA = {
  "lastUpdate": 1774407510906,
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
      }
    ]
  }
}