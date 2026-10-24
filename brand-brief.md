# Pryvo — Brand Brief

Date: 2026-10-21. Decision: name stays **Pryvo** (Samuel, 2026-10-21).
Produced with the `ckm:brand` framework. Source of truth for naming, positioning,
tagline, and icon direction until a full `brand-guidelines.md` replaces it.

## 1. Positioning

**What the product promises** (from its own onboarding copy):
"Calculate exactly what to charge for every event type to cover your expenses and
stay profitable."

- **Audience:** solo and very small service businesses that sell by the job or event:
  planners, photographers, caterers, decorators, trades. They quote per project.
- **Pain:** they undercharge because they don't know their true cost per job
  (overhead, salary target, per-event costs). Invoicing is downstream of that.
- **Promise:** know your number, charge it with confidence, keep the profit.
- **Category gap:** Invoice Simple, Bookipi, Joist, HoneyBook, Bonsai all lead with
  "invoice". None lead with pricing. Pryvo owns that position, and the tagline names the audience: small business.

**Positioning statement**
Pryvo is the pricing-first business app for solo service providers who want to stop
guessing what to charge, because it works out the true cost of every job before the
invoice exists.

**Value proposition**
For event and project businesses who quote by the job, Pryvo is a pricing, invoicing
and bookkeeping app that shows the real cost and margin of every job before you send
the quote. Unlike invoice-first apps, it starts from what you need to earn.

## 2. Name

**Pryvo.** Invented, two syllables, spells itself after one hearing. No app, company
or trademark found under the exact name (nearest: Pryv, Swiss health-data middleware;
Pryvio, a cosplay video app). The name carries no meaning on its own, so the tagline
and subtitle do that work and must ship with it everywhere.

**Locked tagline (2026-10-21):** Pryvo — The small business toolkit.

Replaced "Know what to charge" because the line has to say who the app is for, not only
what it does. "Toolkit" covers pricing, invoicing and bookkeeping without listing them,
and avoids "solutions", which is generic and matches no App Store search. Considered and
set aside: "Pricing for small business", "Price, invoice, get paid", "Small business,
priced right", "Run your small business".

**App Store name:** `Pryvo: Pricing & Invoices`
**App Store subtitle:** `The small business toolkit`
**Alternates for campaigns:** "Know what to charge." / "Price it right. Keep the profit." / "Every job, priced to pay you."

Considered and set aside: Worthly, Chargewell, Quotely, Worth, Slate, Priceful.
Worthly scored highest on meaning and ownability; Pryvo was chosen for brand distinctiveness, with the tagline carrying the meaning.

## 3. Voice

- **Plain and certain.** Short sentences. Numbers, not adjectives. "This job costs you
  $412 before you earn anything" beats "Smart insights for your business".
- **On the user's side against undercharging.** Never scold; show the gap and the fix.
- **Trade, not finance.** Say "job", "quote", "what to charge". Avoid "revenue
  optimisation", "insights", "empower", "seamless".
- **Confident, not loud.** No exclamation marks in product copy.

## 4. Visual identity

### Icon (chosen 2026-10-21): the Receipt mark
A green receipt card on warm off-white, with a torn bottom edge, the P reversed out of
the card, and a single amber "total" line under the P with the tagline knocked out of
it: a bar at icon size, readable text up close. Chosen over Tag, Coin, Ledger,
Angular and the v1 ledger-line P after review at 1024, 60, 40 and 29 px.

Geometry lives only in `docs/brand/build-icon.py` (constants `CARD`, `TEETH`, `P_SCALE`,
`P_TOP_INSET`, `LINE_*`). The rules behind the numbers:
- Torn edge: 13 teeth. Fewer, larger teeth read as a crown; more read as fuzz.
- P: the v1 letterform at 90%, horizontally centred on the card, top a fixed inset below the
  card top, so it clears the card on every side.
- Total line: the solid amber bar, exactly as wide as the P and left-aligned with it, its own
  height below the P so it reads as tied to the P rather than to the torn edge, with
  near-square ends (a pill read as too round and too thin once the text went in), and the
  tagline knocked out of it in the card colour (SF Pro Rounded capitals, fitted inside the bar
  with a little bar around it; the bar is tall enough that the P's width, not the bar's height,
  sets the text size). At icon sizes it is the bar it always was; up close the words
  show inside it. `tagline-path.swift` emits the outlines so the SVGs carry no font.

Appearances:
- Light: card `#0E5A3A` on `#F6F1E7`, P `#F6F1E7`, line `#E8A33D`. Opaque.
- Dark: card `#F6F1E7`, P `#0E5A3A`, line `#E8A33D`, transparent background. iOS draws its
  own dark gradient behind it (preview on `#101512`).
- Tinted: card `#F2F2F7`, P `#1C1C1E`, line `#A8A8AD`, transparent background, greyscale.
  iOS applies the user's tint (preview on `#1C1C1E`).
- macOS: the same art inside an 824 px rounded square with transparent corners.

Rules: the card is always the light-on-dark or dark-on-light element, never outlined.
The line is always amber in light and dark, and always carries the tagline. Nothing else goes on the card.

Rejected colourways, kept for reference in the Figma file and
`docs/brand/concepts/`: cream paper on green, navy, charcoal, teal with coral, burgundy
with gold, forest with mint.

### Palette
Move off default blue so the icon stops reading as a generic fintech tile.

| Role | Hex | Use |
|---|---|---|
| Primary (ink) | `#0E5A3A` deep green | Mark, headings, primary buttons |
| Surface | `#F6F1E7` warm off-white | Light icon background, dark icon card, app canvas |
| Accent | `#E8A33D` amber | The one device on the icon, highlights, margin-positive numbers |
| Negative | `#B3402F` brick | Loss, overdue, margin-negative numbers |
| Dark surface | `#101512` near-black | Dark-mode canvas, dark lockup background |

Applied to the icon: see "Icon (chosen)" above. Green and off-white swap roles between the
light and dark appearances; amber is the only accent on the mark.

Contrast: green on off-white is about 7.6:1, passes AA for text and AAA for large text.

### Typography
- **Wordmark:** SF Pro Rounded Semibold, lowercase "pryvo", tracking -1.5% of the point size
  (-3 px at 210 px). Rendered from CoreText in `docs/brand/render-lockups.swift`. In the Figma file the
  stand-in is Nunito SemiBold, because Figma's server renderer cannot embed Apple's SF
  fonts; export final wordmark PNGs from the Swift renderer, not from Figma.
- **In app:** SF Pro, default Dynamic Type. Tabular figures everywhere a number appears.

### Lockup rules
- The wordmark and tagline form one block, and the tagline is the icon's bar: the same amber bar
  with the tagline cut out of it so what is behind shows through (the card on the icon, the page
  here). The bar's height is a small fraction of the wordmark size so the tagline stays second
  to the name; its padding, corner radius and weight are the icon's bar at that scale. It sits
  to the right of the p's tail, starting a small gap off it, ends at the o's right edge, and
  sits a little below the y's tail. The words sit at the bar's right end, letterspaced a little
  wider than on the icon. The p itself is never altered: beneath its tail sits a foot block of
  the stem's width in the ink colour, from the bar's bottom edge up to a cradle that is the
  negative of the tail's end (the p's own outline, shifted down by a small gap), its tips
  rounded off, its bottom corners the bar's, so the p reads as reaching down to the bar. The
  build refuses a foot with no block left below its cradle. The foot belongs to the lockup only;
  the wordmark on its own has none. `build-icon.py` hands the bar geometry to
  `render-lockups.swift`, which derives the layout from the glyph outlines.
- Clear space: one mark-height on every side.
- Minimum: icon 24 px, wordmark 100 px wide.
- Never stretch, outline, add drop shadow, or put the mark on a photo.

## 5. Asset locations

- One command builds everything: `python3 docs/brand/build-icon.py`. It owns the palette,
  tagline and icon geometry (lockup layout lives in `render-lockups.swift`); writes `docs/brand/svg/` (pure paths, no font); renders every slot
  listed in `AppIcon.appiconset/Contents.json` into the asset catalog; writes the marks and
  a review sheet to `docs/brand/png/`; then runs `render-lockups.swift` with the palette,
  tagline and line geometry for the lockups and wordmark.
- Previous icon (v1 ledger-line P) archived at `docs/brand/archive/v1-ledger-line/`.
- Icon concepts under evaluation: `docs/brand/concepts/` (generator `build-concepts.py`,
  SVG sources in `svg/`, PNG sheet `png/developed-sheet.png`). Five candidates: Coin, Tag,
  Receipt, Ledger, Angular, each in light/dark/tinted. Receipt was chosen on 2026-10-21; the
  others are kept for reference.
- Figma: "Pryvo Brand" file, https://www.figma.com/design/AK6phFCt9P2x2L6cXA5ltc with the
  five colours as variables in the "Pryvo" collection, icon variants and the mark as
  components, light/dark lockups bound to those variables, an "Icon concepts" section
  holding the five candidates as `Concept / {Name} / {Light|Dark|Tinted}` components,
  and a "Final icon (Receipt)" section with `Icon v2 / {Light|Dark|Tinted}` and `Mark v2`
  (brand colours bound to variables; the tinted greys are literal, by design). The
  "App icon" section still holds the v1 components for history.
- Review page with every candidate, sizes and colourways:
  https://claude.ai/artifact/GAe8mtqk1VtMfE88zKWaks

## 6. What this brief does not change

Bundle ID `Samuel-Price-calculator-App`, StoreKit product IDs `com.pryvo.pro.*`,
Firebase project `pryvo-d110a`, and the `Pryvo*` Swift file prefixes all stay.

## 7. Checklist before launch

- [ ] App Store Connect: `Pryvo` name and subtitle reserved
- [ ] Domain: `pryvo.app` or `pryvo.com` (check both)
- [ ] Trademark search: USPTO and EUIPO, Classes 9 and 42, "Pryvo" exact and near
- [ ] Google Play: name not taken (Android on the roadmap)
- [x] New icon set exported: light, dark, tinted at 1024 px plus the mac sizes (2026-10-21)
- [ ] Icon checked on a device in light, dark and tinted home-screen modes
- [ ] Tagline present on App Store listing, onboarding first screen, and sign-in screen
