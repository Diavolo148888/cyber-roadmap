# Cyber Road

Interactive cybersecurity learning roadmap styled as a stage-based game map.

## What this is

- 6 zones, 17 stages, 780 estimated hours
- Candy-crush style winding stage map with lock, current and cleared states
- Coach panel that decides what to do next and updates itself as you progress
- Progress saves to `localStorage` on every click. No account, no login, no manual editing.

## Deploy

GitHub Pages serves this repo automatically:

    https://diavolo148888.github.io/cyber-roadmap/

Enable it in the repo settings under Pages, source `main` branch, root folder.

## Local preview

Open `index.html` directly in a browser. No build step and no dependencies.

## Data

All stage data, tips and links live in one inline `DATA`/`M` block in `index.html`.
Resource tiles load each site's real favicon from Google's favicon service, so they need
network access; there is an inline SVG fallback if the icon fails to load.

## Verification

The page was driven headlessly with Playwright before publishing:
stage map geometry, lock/current/cleared node states, Coach panel transitions,
`localStorage` persistence across reload, resource tile marking, stage clearing,
automatic logbook entries, and zero console errors.

## Notes

Progress lives in one browser only. Use Export Save before clearing cache or
switching machines.

Every resource URL was checked on 2026-10-02. `crt.sh` intermittently returns nginx 502
from its own upstream; it is not a dead link.