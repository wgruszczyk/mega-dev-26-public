# mega-dev-26-public

Work on MEGA.dev Challenge S01E03, *what it shows*.

The support desk merged 412 reports about wrong dates into one ticket, #4471, and marked it
known with one fix queued. The incident page's own `CauseTable` is built from the reports at
render time, and it has been showing **two** causes since April. The prose above it was
written once and never re-read.

## Tickets

| ticket | cause | reports |
|---|---|---|
| [#1](https://github.com/wgruszczyk/mega-dev-26-public/issues/1) | `parser` — the shared parser reads every date month first | 379 |
| [#2](https://github.com/wgruszczyk/mega-dev-26-public/issues/2) | `hint` — `booking-v3` prints `MM/DD/YYYY` under its date field | 33 |

Both counts come from the kb's own `groupByCause` in `src/lib/kb/causes.ts`, run over
`reports-4471.json` after `uniqueById`. The export holds 427 rows for 412 reports, and intake's
`meta.intakeTag` disagrees with the real cause in both directions, so neither the row count nor
the tag gives these numbers.

## The kb page

- [`+page.svx`](kb/incidents/4471-two-causes/+page.svx) — the source, as it goes into the kb
- [`page.html`](kb/incidents/4471-two-causes/page.html) — the page as the desk will see it,
  prerendered with the desk's own components and stylesheets inlined

The page is signed, so it carries a desk ref: `DR-KS04-G0PE`.
