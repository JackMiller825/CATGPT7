# Feature coverage and maintenance

Update this file whenever a feature is added, changed, or removed.

## Edit points

| Task | Where |
|---|---|
| Token name, ticker, supply, tax, contract, social URLs | `lib/config.ts` → `tokenConfig` |
| Hero, mind, treasury, and program copy | `lib/config.ts` |
| Image paths | `lib/assets.ts` |
| Gallery order, captions, filters, ASCII, lore | `lib/gallery.ts` |
| Colors, spacing, type, motion | `app/globals.css` (`:root` tokens) |
| Boot timing | `bootDelays` in `lib/config.ts` and the 9s fallback in `components/sections/BootScreen.tsx` |

## Contract address

`contractAddress` is `null` until a verified Ethereum address exists. The header, hero, and footer then show `Coming Soon..`. The Copy button still works and copies that status text. After a valid `0x` address is set, Copy copies the full address.

When you set a valid `0x` address:

- the header shows the shortened form
- the hero and footer show the full address
- copy writes the full address and shows a toast
- keyboard users can tab to the button

Do not paste a Solana mint here.

## Social and market links

`twitter`, `telegram`, `dextools`, `dexscreener`, `uniswap`, and `etherscan` start empty. Empty links render as inactive labels, not as anchors. The Buy button uses `uniswap` only. X in the header uses `twitter` only.

## Assets

`npm run` does not move images. The page uses:

- `/assets/logo.png` for the round black-cat mark
- `/assets/banner.png` inside the hero frame
- `/assets/gallery/01.png` through `22.png` in that order
- `/icon.png` as the favicon

`alternate-logo.png`, `alternate-banner.png`, `alternate-telegram.png`, and `alternate-mascot.png` are kept in `public/assets` and listed on `alternateAssets` in `lib/assets.ts`. They are not the page defaults. Swap a path in `lib/assets.ts` if a newer export should replace one.

To add a gallery image: place `23.png` (or any filename) in `public/assets/gallery`, add an object to the meme list in `lib/gallery.ts` with `kind`, `title`, `caption`, `alt`, and `src`, then rebuild. Filters read `kind`.

## Boot screen

`components/sections/BootScreen.tsx` shows the ASCII cat, four timed lines, a blinking cursor, and **OPEN THE BOX**. The button is focused on arrival and works with click or keyboard. After 9 seconds the page opens on its own so the intro cannot trap anyone. `prefers-reduced-motion: reduce` shows every line at once and disables the blink. `?nb=1` skips the intro for layout checks.

## Navigation

`components/layout/Header.tsx` links to `#mind`, `#treasury`, `#programs`, `#box`, and `#made`. `scroll-padding-top: 80px` keeps headings clear of the sticky bar. Below 880px the text links hide behind a round menu button so the closed header stays one row. Desktop does not show that button.

## Biscuit Compiler

`components/sections/BiscuitCompiler.tsx` picks a random box after mount (not during render, so hydration stays stable). Three buttons accept mouse and keyboard. An opened box stays open: empty boxes turn lighter and show ∅, the cursor box turns green and shows the red cursor. Clicking an inspected box does not change the result. **recompile** shuffles the cursor and clears the inspected state. The status line is an `aria-live` region.

## Gallery

`components/sections/Gallery.tsx` renders every item from `lib/gallery.ts`. Filters are **all**, **memes**, **ascii**, and **lore**. The 22 supplied scenes are memes. ASCII and lore are text cards because those reference categories are not photographs. The piece count follows the active filter.

The lightbox opens the clicked tile, keeps aspect ratio, moves with previous/next and arrow keys, closes on Escape, the close button, or the backdrop, locks background scroll, and returns focus to the tile that opened it.

## Motion

CSS handles cursor blink, boot line fade, button press, box lids, tile hover, and the toast. `app/globals.css` includes `prefers-reduced-motion: reduce`, which cuts animation and smooth scrolling. No extra animation library is installed.

## Metadata

Title: `CatGPT 7.0 ($CATGPT7) — Ethereum's Next-Generation Cat`. Icons and Open Graph use `/icon.png` and `/assets/banner.png`. The description does not claim a live contract or market.

## Build and Pages

`next.config.ts` sets `output: 'export'` and `images.unoptimized`. Local builds have no `basePath`. GitHub Actions sets `PAGES_BASE_PATH=/CATGPT7`. `publicPath()` in `lib/assets.ts` prefixes image URLs with that path, because `next/image` leaves public files unprefixed when optimization is off. The live site is `https://jackmiller825.github.io/CATGPT7/`.

## Current limitations

- Contract, liquidity burn, ownership renounce, and every external URL are unverified. The treasury bar is an even, faded placeholder, not a 10/10/75/5 allocation and not a wallet balance.
- Programs show the configured contest, drop, and paid-quest states, including the ETH amounts in `lib/config.ts`. Paid cards use the faded reference treatment.
- Gallery images are the supplied full-size PNGs. They are large.
- The mobile menu button is an addition so small screens can reach sections. The reference hides those links.
- `alternate-*` artwork is unused on the page.
- The hero uses `banner.png` (the cat on cardboard beside monitors), not a crop of gallery `01.png`.

## Verification checklist

| Feature | File | How to verify |
|---|---|---|
| Boot terminal and OPEN THE BOX | `components/sections/BootScreen.tsx` | Load `/`, read the lines, press the button and also reload and press Enter |
| Reduced motion | `app/globals.css`, boot | OS reduced-motion: lines appear together, no blink |
| Same-page navigation | `components/layout/Header.tsx` | Each link scrolls with the heading below the bar |
| Mobile navigation | header, max-width 880px | Open the round menu, follow a section |
| Contract copy | `CopyAddress.tsx`, `lib/config.ts` | Copy works on Coming Soon.. and on a real `0x` address |
| Treasury facts | `Treasury.tsx` | 10/10/75/5 split, LP: Burn, Ownership: Renounce |
| Programs | `Programs.tsx` | Active contest and drop, two paid cards with the faded style |
| Biscuit Compiler | `BiscuitCompiler.tsx` | Inspect all three, see persistent state, recompile |
| Gallery filters and lightbox | `Gallery.tsx` | 22 images, ascii, lore, Escape, arrows, backdrop |
| Footer links | `Footer.tsx` | X, Telegram, DexTools, DexScreener only |
| Static export | `next.config.ts` | `npm run build` writes `out/` |
| Docs coverage | `scripts/check-docs.mjs` | `npm run check:docs` |
