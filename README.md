# mega-dev-26-public

Work on MEGA.dev Challenge S01E03, *what it shows*.

The support desk merged 412 reports about wrong dates into one ticket, #4471, and marked it
known with one fix queued. The incident page's own `CauseTable` is built from the reports at
render time, and it has been showing **two** causes since April. The prose above it was
written once and never re-read.

## Tickets

| ticket | cause | reports | outcome |
|---|---|---|---|
| [#1](https://github.com/wgruszczyk/mega-dev-26-public/issues/1) | `parser` — the shared parser reads every date month first | 379 | fixed: `fix(dates): parse dd/mm for eu locales` |
| [#2](https://github.com/wgruszczyk/mega-dev-26-public/issues/2) | `hint` — `booking-v3` prints `MM/DD/YYYY` under its date field | 33 | won't fix: `booking-v3` retired |

#4471 closed on 5 October. The parser fix covers the first cause. The second one left with the
form, not with a fix, and nothing on #4471 says so.

Both counts come from the kb's own `groupByCause` in `src/lib/kb/causes.ts`, run over
`reports-4471.json` after `uniqueById`. The export holds 427 rows for 412 reports, and intake's
`meta.intakeTag` disagrees with the real cause in both directions, so neither the row count nor
the tag gives these numbers.

## The kb page

This repo is the desk's kb export with one page added:
[`src/routes/kb/incidents/4471-two-causes/+page.svx`](src/routes/kb/incidents/4471-two-causes/+page.svx).

- [`page.svx`](page.svx) — the same page, under a plain file name
- [`page.html`](page.html) — the page as the desk will see it, prerendered with the desk's own
  components and stylesheets inlined

The page is signed, so it carries a desk ref: `DR-KS04-G0PE`.

The export ships only `src/`; the config here is the frame it was cut out of. To see the page
yourself:

```sh
npm install && npm run build
node flatten.mjs build/kb/incidents/4471-two-causes.html page.html
```
