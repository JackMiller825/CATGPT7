# CatGPT 7.0

Single-page site for **CatGPT 7.0 / $CATGPT7**, an independent Ethereum memecoin. The layout follows the cardboard-and-terminal structure of [catgptcoin.lol](https://www.catgptcoin.lol/): boot screen, sticky header, hero, mind, treasury, programs, Biscuit Compiler, gallery, and footer.

This is not the Solana project. It does not use that contract, those wallets, or those payout figures.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000. Add `?nb=1` to skip the boot screen while checking layout.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Next.js dev server |
| `npm run build` | Static export into `out/` |
| `npm run start` | Serves a non-export build only. Pages hosting uses `out/` |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | Next.js lint |
| `npm run check:docs` | Confirms HELP.md still mentions the live features |

## Where to edit the token

All project facts live in `lib/config.ts` as `tokenConfig`.

- Set `contractAddress` to a real `0x` + 40 hex characters. Until then the site shows **CA: Coming Soon..** and the copy button stays disabled.
- Paste full official URLs into `twitter`, `telegram`, `dextools`, `dexscreener`, `uniswap`, and `etherscan`. Empty strings stay inactive. They are never filled with the Solana token's links.
- `uniswap` is the Buy button. Empty means the button explains that no market is linked.
- `totalSupply`, `taxBuy`, and `taxSell` are the figures shown in Treasury.
- `liquidityStatus` and `ownershipStatus` stay `unverified` until those actions are actually confirmed. Do not mark them verified in copy alone.

## Assets

Mapped in `lib/assets.ts`:

```text
public/assets/logo.png              header, mind card, footer
public/assets/banner.png            hero frame
public/assets/telegram.png          telegram banner (not placed in the page frame)
public/assets/mascot.png            full mascot render
public/assets/gallery/01.png–22.png gallery, in numeric order
public/icon.png                     favicon
public/assets/alternate-*.png       newer wordmark variants, not used in the page
```

Gallery captions and the two ASCII cards plus two lore cards live in `lib/gallery.ts`. To add an image, drop the file in `public/assets/gallery/`, append an entry, and keep `id` stable.

## Deployment

The site is a static export (`output: 'export'`). GitHub Pages for this repository is a project site, so the workflow sets `PAGES_BASE_PATH=/CATGPT7`. Local `npm run build` leaves the base path empty and writes `out/` for the domain root.

Live site, after Pages is enabled: `https://jackmiller825.github.io/CATGPT7/`

Pushing to `main` runs `.github/workflows/pages.yml`.

## Stack

Next.js 15, React 19, TypeScript. Styling is the measured stylesheet in `app/globals.css` (Fraunces, Inter, JetBrains Mono). No second HTML implementation.
