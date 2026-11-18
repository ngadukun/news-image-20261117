[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/ngadukun/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/ngadukun/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

# The World in One Day — Tuesday 17 November 2026

Entry for the make.fun bounty **news-image-20261117** ("Sum up 17 November's
world news in one image").

`main.ts` (Node 22, standard library only) copies the finished front-page
image `entry.png` to `/output/entry.png`. The program is deterministic: two
runs write byte-identical output. Run it locally with:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The image

A one-page newspaper front page for **Tuesday 17 November 2026**: a masthead
and date band, one lead story, eight story blocks in a 2+3+3 grid, an
"In Brief" strip with four more stories, and a reporting credit line.
1024×1024 PNG, 172,925 bytes.

Stories, as reported on the day:

| Slot | Story | Reporting |
| --- | --- | --- |
| Lead | U.S. jets strike Iran's Qeshm Island as tanker war flares in Hormuz (Tara Gas evacuation, second tanker struck off Khasab) | Reuters · UKMTO |
| Grid | Ukraine strikes the Crimean Bridge; Russia hits Kyiv's Dnipro bridges; Zaporizhzhia industry strike kills 2, injures 38 | Reuters |
| Grid | Xi to host Trump and Putin in a first trilateral summit, Thursday in Shenzhen (APEC) | Le Monde · Reuters |
| Grid | COP31 draft urges fossil-fuel phase-out, $120bn in adaptation aid (Antalya) | Business Day |
| Grid | Britain, Canada, Australia and Italy urge Israel to open Gaza crossings; UN on winter rains flooding shelters | UN |
| Grid | Wall Street falls on tech sell-off (S&P −1.0%, Dow −1.6%, Nasdaq −0.7%); Nvidia beats after the bell | AP · Reuters |
| Grid | U.S. loses its measles elimination status | PAHO |
| Grid | Japan scrambles jets after Russian aircraft violate its airspace | wire reports |
| Grid | Yemen's army retreats to Aden as Houthis advance; drones claimed at Saudi pipeline stations | Reuters |
| In brief | Lebanon strikes · Depardieu drops appeal · Mongolia's president resigns · India edge Pakistan in the U-19 Asia Cup final | wire reports |

Full story notes, facts and sources: see `dossier.json`.
Screenshots of the page: see `screenshots/`.

## License

MIT — see `LICENSE`.
