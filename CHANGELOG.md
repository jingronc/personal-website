# Changelog

All changes to jingrongchen.com are logged here.

---

## 2026-07-28

### Added
- `scripts/sync_notion.py` — build-time script that pulls published essays from a Notion database and generates `thoughts/*.html` plus the card grid in `thoughts.html`. Supports bilingual (English/Chinese) essay pairs via a shared `Slug`, with a language-switch link on the essay page; auto-converts HEIC/HEIF photos to JPEG; auto-credits Unsplash cover photos where the photographer is known
- `thoughts/night-diving.html` — first real essay synced from Notion ("夜潜与海底星空")
- `CHANGELOG.md` itself, and a "Publishing a New Essay" workflow section in `CLAUDE.md`

### Changed
- Hero: merged the greeting and name onto one line ("Hi there, I'm Jingrong"), unbolded, matched font size to body text; rewrote both hero paragraphs
- Rewrote About / On My Mind / Procreate Art / Film Shots section copy on the homepage, with inline links to each corresponding page
- Reduced spacing between homepage sections
- Removed the underline beneath section titles site-wide
- Removed the essay category filter bar (All / Diving / Game Design / Book Review / Life) from `thoughts.html` — essays are diving-only for now
- Replaced profile photo
- Replaced an unattributed stock diving placeholder photo with a credited Unsplash photo (NEOM)

### Fixed
- Missing favicon on `procreate.html`
- Broken HEIC images in Notion-sourced essay content (now auto-converted to JPEG on sync)

### Removed
- `thoughts/neutral-buoyancy.html` and `thoughts/on-neutral-buoyancy.html` (dead placeholder pages, no longer referenced)
- Unused `.about-bullets` list styling (About section is now a prose paragraph) and `.filter-bar`/`.filter-btn` styling
- Unused raw photo assets sitting in the repo root

---

## 2026-04-18

### Added
- `thoughts.html` — "On My Mind" page with masonry image-card grid layout
- `thoughts/neutral-buoyancy.html` — placeholder post template for Diving category
- `thoughts/images/` — Unsplash cover photos for each essay category (diving, game design, book, life)
- "On My Mind" section added to homepage
- "On My Mind" added to nav across all pages
- Category filter bar on thoughts page (All / Diving / Game Design / Book Review / Life)

### Changed
- Switched site font from system fonts (SF Pro / Helvetica Neue) to **Lora** (Google Fonts) — serif, editorial feel
- Removed Zelda bullet point from About section

---

## 2026-04-17

### Added
- `film-shots.html` — Film Shots gallery page with masonry layout, lightbox, and bubble animation
- `Fuji xm5 photos/` — 10 photos from FUJI X-M5 (Singapore & Japan)
- Film Shots section added to homepage
- Film Shots added to nav across all pages

### Changed
- Film Shots gallery: max 2 columns on desktop, 1 column on mobile

---

## 2026-04-14

### Added
- 🐠 emoji favicon

### Changed
- Replaced "Say Hi" contact section with minimal LinkedIn + email icons in the footer
- Footer email updated to jingronc@gmail.com

### Fixed
- HTTPS enforced via GitHub Pages settings (was showing "Not Secure")

---

## Earlier

### Added
- Initial site launch — single-page personal website
- Hero section with ocean background photo
- About Me section with profile photo and bullet points
- Procreate Art section linking to `procreate.html` gallery
- `procreate.html` — masonry gallery with 5 watercolor food illustrations
- Google Analytics (G-7GHFT5PYBY)
- Custom domain `jingrongchen.com` via CNAME
