# breakpoint strategies — Design System

## 1. Company & product context

**breakpoint strategies** is a luxury boutique agency for retail. The positioning, verbatim from the brief:

> Brands face a growing problem: traditional agencies lack retail expertise, while boutique shops can't scale. breakpoint bridges that gap.

That sentence is the whole system's centre of gravity. Everything here is built to express two things at once — **operator credibility** (retail is unglamorous, numeric, executional) and **boutique restraint** (few colours, generous space, no decoration). The design language is therefore editorial rather than SaaS: hairline rules instead of boxes, a flared serif logotype voice, one loud accent colour, and near-zero shadow.

### Sources given

| Source | What it was | Notes |
|---|---|---|
| `uploads/BP-Logo-*.png` (14 files) | Finished logo artwork — full lockup, wordmark, and the `bp` mark, each in black / white / citrus | Copied into `assets/logo/`. These are the **only** authoritative brand artefacts supplied. |
| `uploads/Asset 5.png` | Large citrus wordmark export | Copied as `assets/logo/bp-wordmark-citrus-xl.png`. |
| `uploads/BP-Logo-4x4_1.png` | 1080×1080 social lockup on a **#F2F2F2 "Fog"** field | The source of the neutral field colour. Copied as `assets/logo/bp-lockup-square-fog.png`. |
| `uploads/BP-Logos-WorkingFiles.ai` | Adobe Illustrator working file | **Not readable in this environment** — binary AI format. If it contains the real typeface names, swatch book, or icon set, please export those and re-attach (see Caveats). |
| — | No codebase, no Figma file, no website, no deck, no brand-guidelines PDF, no font binaries, no photography, no icon set | Everything beyond colour and logo geometry below is **derived**, and flagged where so. |

### Products / surfaces represented

Only one surface is evidenced by the sources: the **agency marketing site** (`ui_kits/website/`). No app, portal, or client-reporting product was supplied, and none has been invented — see Caveats.

---

## 2. Content fundamentals

**Voice: an operator talking to a peer, not an agency pitching.** Declarative sentences. Short. The brand earns trust by naming the unglamorous specifics of retail — resets, facings, ACV, planograms, buying cycles — rather than by claiming passion or partnership.

**Rules**

- **The brand name is always lowercase** — `breakpoint`, `breakpoint strategies`. Never "BreakPoint", never "Breakpoint" at the start of a sentence either; rewrite the sentence instead. The lockup pairs it with `STRATEGIES` in wide-tracked caps.
- **Sentence case for headlines and body.** Uppercase is reserved for eyebrows, buttons, nav and badges, where it is always tracked (`--ls-eyebrow` 0.22em).
- **"We" and "you", never "I", never "our clients".** Talk to the brand manager directly: *"Tell us where the shelf is going wrong."*
- **No exclamation marks. No emoji. Ever.** Not in UI, not in marketing copy, not in email.
- **Lead with the problem, not the capability.** Two-beat structure is the house move: state the broken thing, then the correction. *"Big agencies don't know retail. Boutiques can't scale."*
- **Numbers are specific or absent.** `+4.2× sell-through`, `92% ACV in 9 months`, `2,100 doors`. Never "significant growth" or "industry-leading". Metrics render in `--font-mono` at citrus so they read as measured, not marketed.
- **Em dashes, not colons, for the aside.** `Chicago — Bentonville`. `Retail strategy — boutique scale`.
- **Buttons are two or three words, imperative, uppercase.** `BOOK AN INTRO`, `SEE THE WORK`, `SEND BRIEF`. Never "Learn more", never "Get started".
- **Reassure by subtraction.** Microcopy names what *won't* happen: *"No sales sequence. One human reply."* / *"Thirty minutes, no deck."*
- **Length discipline.** Hero headline ≤ 8 words per line. Lede ≤ 2 sentences at `--measure-narrow` (44ch). Body at `--measure` (64ch). A card description is one sentence.

**On brand (do)**

> Traditional agencies lack retail expertise. Boutiques can't scale. We're the breakpoint.
> Weeks 7–12 — Deploy. Reset executed, field programme live.
> We report on units off shelf, not impressions.

**Off brand (don't)**

> We're a passionate, full-service partner unlocking synergies for your brand!
> Let's take your retail journey to the next level 🚀
> Our team of experts leverages best-in-class methodologies.

---

## 3. Visual foundations

### Colour

One accent, one ink, one warm neutral ramp. **Citrus `#FB3C1F`** (sampled directly from the supplied artwork) is the brand — it appears as CTA fills, eyebrow text, the active-tab rule, metric figures, and occasionally as a full-bleed field. It is never a surface for body copy at length. **Ink `#000000`/`#141210`** carries the logotype and the inverse sections. Neutrals are deliberately **warm** (`#FAF9F8 → #141210`) so the palette reads paper-and-print, not screen-grey; **Fog `#F2F2F2`** comes straight from the social lockup and is the default off-white section field.

Three editorial secondaries — **Sand `#EDE6DC`**, **Clay `#C9A18C`**, **Slate `#37423F`** — exist for background variation and data series only. They are **never** used for interactive elements. Semantics (`--success` green, `--warning` ochre, `--info` blue, `--danger` `#C42B12`) are muted and slightly desaturated so citrus stays the loudest thing on any screen; note `--danger` is deliberately *off*-citrus to avoid reading as a CTA.

**Four legal field pairings only:** Paper/Ink, Fog/Ink, Ink/Paper, Citrus/Paper. Any other combination is off-system. **Max two background colours per page** beyond white.

### Typography

Three faces, three jobs:

- **Display — Alegreya** (`--font-display`): the logotype voice. A flared humanist serif with real calligraphic stress. Used for every headline, statistic and pull quote. Tight: `--lh-display` 0.98 at hero size, `--ls-display` -0.02em. **Italic is the pull-quote and emphasis mode** — it does a lot of the brand's emotional work.
- **Eyebrow — Jost** (`--font-eyebrow`): geometric caps at `0.22em` tracking, lifted straight from `S T R A T E G I E S` in the lockup. Eyebrows, buttons (`0.10em`), nav, badges, table headers, form labels. Always uppercase, always ≤ 4 words.
- **Body — Work Sans** (`--font-body`): 17px base, 1.62 leading, 64ch measure. Neutral by design so the serif carries the personality.
- **Mono — JetBrains Mono** (`--font-mono`): metrics, SKUs, counts, token references. Nothing else.

Scale: `--text-d1` (clamp 56→104), `--text-d2`, `--text-d3`, then fixed `--text-h1` 40 / `h2` 32 / `h3` 24 / `h4` 20, and body `--text-lead` 21 / `--text-body` 17 / `--text-sm` 15 / `--text-xs` 13 / `--text-2xs` 11.

### Space & layout

4px base, thirteen steps to 176px. Page max `1280px`, gutters `24px`. Sections stack on `--section-y` **128px** (`--section-y-tight` 72px for bands). The **section rhythm is fixed**: hairline rule → 16 → tracked eyebrow → 16 → display headline → 12 → lede. Asymmetric two-column splits (1.15fr / 0.85fr) are preferred over centred layouts; centring is reserved for full-bleed statement bands. Only one element is fixed: the **sticky header** at 76px.

### Borders, rules & radii

**breakpoint is a square-cornered brand.** `--radius-2` is 4px and that is the maximum for any panel; `--radius-1` is 2px; cards, images and inputs use them. The single exception is **controls, which are fully round pills** (`--radius-pill`) — buttons, icon buttons, tags, badges, toasts, switches. That contrast (rectilinear surfaces, capsule actions) is the structural signature.

**The 1px hairline is the primary structural device.** Columns are separated by `border-top`, not by boxes; stats sit under rules; section headers open with one. Reach for a rule before you reach for a card.

### Elevation & shadow

Essentially none at rest. `--shadow-none` is the default for cards. `--shadow-pop` (`0 8px 24px -8px`) appears **only on hover of interactive cards**, alongside a `translateY(-2px)` lift. `--shadow-modal` is the one heavy shadow, on dialogs. Depth otherwise comes from colour blocking (ink and citrus bands) and rules.

### Animation & easing

Short, flat, no personality-by-bounce. `--dur-fast` 140ms for colour/border transitions, `--dur-base` 220ms for transform and toggle movement, `--dur-reveal` 700ms for scroll reveals. Easing is `--ease-standard` `cubic-bezier(.2,0,.2,1)` and `--ease-out` `cubic-bezier(.16,1,.3,1)`. **No spring, no bounce, no overshoot, no scale-up-on-hover, no parallax.** Entrances, when used, are a 16px rise plus a fade.

### Interaction states

- **Hover** — primary button darkens to `--citrus-press` `#D62C11`; secondary (ink hairline outline) *inverts to solid ink*; ghost picks up a 4% ink wash and citrus text; links move to `--citrus-press`; cards gain the pop shadow and 2px lift.
- **Press** — a 1px downward nudge (`translateY(1px)`). Never a scale-down.
- **Focus** — citrus. Inputs take a 1px citrus border plus a 3px `--citrus-tint` halo; other controls use `--shadow-focus` (2px white gap, 4px citrus ring).
- **Selected** — fills **ink**, not citrus (tags, pill tabs). Citrus marks the *active* underline on tabs and nav.
- **Disabled** — 38% opacity, `not-allowed`. No colour change.

### Transparency & blur

Used in exactly two places: the **sticky header** (`--alpha-white-70` + `blur(12px)`) and the **dialog scrim** (`rgba(20,18,16,.72)` + `blur(2px)`). Nowhere else — no frosted cards, no glassmorphism. Ink-on-ink layering uses `--alpha-white-12` hairlines instead.

### Imagery

No photography was supplied, so no photographic direction can be claimed as fact. Every image slot in the UI kit is an explicit labelled placeholder. The **intended** direction, consistent with the palette and the retail subject: warm-neutral, natural light, documentary rather than styled — aisles, resets, pallets, hands on product, people at work — full-bleed or in 4:5 / 16:10 frames at `--radius-2`. No duotones, no citrus colour-wash over photos, no gradient scrims; where text must sit on an image, use a solid ink block beside it rather than a protection gradient. **Protection capsules over gradients** is the house rule.

### Explicitly off-system

Bluish-purple gradients. Aggressive gradient backgrounds of any kind. Rounded cards with a coloured left border. Emoji. Drop shadows at rest. Icon-in-a-tinted-circle. Glassmorphism. Multiple accent colours. Centre-aligned body copy.

---

## 4. Iconography

**No icon set was supplied with the brand assets.** Nothing in the uploads contains iconography of any kind — the files are logo artwork only, and the `.ai` working file could not be read.

- **Substitution (flagged):** **Lucide** `lucide-static@0.446.0`, loaded from CDN, outline set only. Chosen for its 1.5px stroke and square-ish terminals, which sit closest to the geometric caps of the lockup. **This is a stand-in and should be replaced or confirmed by the brand owner.**
- **Delivery:** the `Icon` component renders each glyph as a **CSS mask** rather than an `<img>`, so icons inherit `currentColor` and can be tinted citrus, ink or white without new assets. There is no icon font, no sprite sheet, and no bundled SVG files.
- **Sizing:** 16px inline with `--text-sm`, 18px default (inside buttons), 20px in list rows, 24px standalone as a section marker. Stroke is never thickened to compensate for size.
- **Colour:** ink or muted grey by default; citrus for the single accent glyph in a card or list; white on ink and citrus fields.
- **Preferred vocabulary** (retail-native, concrete): `store`, `package`, `trending-up`, `chart-no-axes-column`, `users`, `calendar`, `search`, `mail`, `arrow-right`, `arrow-up-right`, `chevron-down`, `check`, `x`, `plus`.
- **Not used:** emoji, Unicode dingbats or arrow characters (`→`, `✓`, `★`) as icons, filled/duotone icon styles, illustrated or isometric spot graphics, and hand-drawn SVG one-offs. Numerals in mono (`01`, `02`, `03`) are the brand's preferred alternative to decorative bullets.
- **Logo is not an icon.** The `bp` mark (`assets/logo/bp-mark-*.png`) is for favicons, avatars and social only; never inline in a sentence or as a list bullet.

---

## 5. Index

### Root

| File | Purpose |
|---|---|
| `styles.css` | Global entry point — `@import` list only. Consumers link this one file. |
| `readme.md` | This document. |
| `SKILL.md` | Agent Skills front-matter so this folder works as a portable Claude Code skill. |
| `thumbnail.html` | Homepage tile for the design system. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `motion.css`, `semantic.css` |
| `guidelines/` | 21 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `assets/logo/` | All supplied logo artwork — lockups, wordmarks, marks, favicon, Fog social tile |
| `components/` | React primitives, grouped by concern |
| `ui_kits/website/` | Marketing-site recreation, five click-through views |
| `templates/marketing-page/` | "Marketing page" template — the canonical section stack, ready to copy into a consuming project |

### Components

**`components/brand/`** — `Logo`, `Eyebrow`, `SectionHeading`, `Stat`, `Quote`
**`components/core/`** — `Icon`, `Button`, `IconButton`, `Card`, `Badge`, `Tag`
**`components/forms/`** — `Field`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
**`components/navigation/`** — `Tabs`, `NavLink`
**`components/feedback/`** — `Dialog`, `Toast`, `Tooltip`

Each directory carries a `@dsCard` HTML showing its states, and each component has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when, usage example, variants).

**Intentional additions.** No source defined a component inventory, so this is the standard set sized to a marketing-led brand. Five additions are brand-specific rather than generic and are listed here for transparency:

- `Logo` — wraps the supplied PNG artwork so no one ever retypes or redraws the mark.
- `Eyebrow` — the 0.22em tracked-caps kicker is the brand's most repeated typographic gesture; it deserved a primitive.
- `SectionHeading` — encodes the fixed rule→eyebrow→headline→lede rhythm.
- `Stat` — proof numbers under a hairline rule; the brand argues with metrics.
- `Quote` — italic-serif pull quote with ruled attribution.

`Icon` is a thin wrapper over the substituted Lucide set (see §4).

### Templates

- **`templates/marketing-page/MarketingPage.dc.html`** — the canonical breakpoint page stack (hero → channel strip → capability trio → ink proof band → sand quote → citrus CTA → ink footer), composed from `SectionHeading`, `Card`, `Stat`, `Quote`, `Button` and `NavLink`. `ds-base.js` alongside it is the one line a consuming project edits to point at the bound design system.

### UI kits

- **`ui_kits/website/`** — `index.html` (router + shell), `Chrome.jsx`, `Home.jsx`, `Work.jsx`, `Capabilities.jsx`, `About.jsx`, `Contact.jsx`, plus its own `README.md`. Working interactions: nav routing, work filters (channel × service with live count), capability pillar tabs, contact-form validation and success toast, card hover lift.

---

## 6. Caveats — please read

1. **Fonts are substitutions.** No font binaries or typeface names were supplied. Alegreya (display), Jost (eyebrow/UI caps) and Work Sans (body) are Google Fonts chosen to match the logotype's flared humanist serif and its wide-tracked geometric caps. **Please send the real font files or names.**
2. **Icons are substitutions.** Lucide stands in for a set that was never supplied. **Please confirm or replace.**
3. **`BP-Logos-WorkingFiles.ai` could not be read.** If it holds the true swatch book, typefaces or icon artwork, please export them (PDF, SVG, or a screenshot of the swatch/character panels) and re-attach.
4. **No photography, illustration or texture library was supplied.** Every image in the UI kit is a labelled placeholder; §3's imagery direction is a proposal, not documentation.
5. **The marketing site is a construction, not a recreation.** No website, Figma file or codebase was provided, so its copy, case studies, team names and metrics are plausible placeholders written in the brand voice — not real breakpoint content.
6. **Only one product surface exists.** A second UI kit (client reporting portal, pitch-deck template) was deliberately *not* invented. Say the word and I'll build one.
7. **Secondary colours (Sand, Clay, Slate) are proposals.** Only citrus, ink and the Fog neutral were sampled from real artwork.
