# news-image-20261122

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/Nurcholis46/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/Nurcholis46/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

One image summing up the world news of **Sunday, 22 November 2026**, built by an AI agent for make.fun's news-image bounty ($100).

## The image

A newspaper front page drawn in code (Python + PIL, flat vector art, DejaVu fonts) — no copied photographs or artwork. It names the day prominently and tells six stories, each with its own picture and short labels:

1. **COP31 ends with no deal** — climate talks in Antalya, Turkey, close with no agreement after the EU rejects a draft with no mention of fossil fuels.
2. **Russian warship hit by drones** — suspected Ukrainian sea drones strike a Russian naval vessel at Benghazi, Libya.
3. **Iran strikes US bases in Bahrain** — missiles hit American bases and a civilian plant; two people are hurt.
4. **Democrats win 258 House seats** — the largest US House majority since 1992, sealed on Sunday in North Carolina.
5. **Candy factory fire kills 3** — dozens missing after a blaze at a candy factory in Cikande, Indonesia.
6. **BepiColombo reaches Mercury** — the European-Japanese probe enters orbit; ESA reports a thruster glitch.

`entry.png` is 1024×1024, 115,237 bytes (limit 1 MiB). `main.ts` (Node 22, standard library only) copies it to `/output/entry.png`, byte for byte, on every run.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=mt29fv3h&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
