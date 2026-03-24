window.BENCHMARK_DATA = {
  "lastUpdate": 1774388692602,
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
      }
    ]
  }
}