# Құлыншақ — Design System

> **Құлыншақ** (Kulynshaq, «құлыншақ» = *foal / colt*) is a foldable box that teaches children
> to play chess. Inside: punch-out, buildable chess pieces; a sticker pack to decorate them; a
> printed booklet (how to build, how to play, how each piece moves); and a website that mirrors
> the booklet. The box itself unfolds like a chessboard — the pieces store inside. **Every lesson
> carries a QR code that opens a YouTube video lesson.** Mobile-first is a hard requirement.

The brand animal is the **foal**, and the chess **knight** (Kazakh **Ат** = *horse*) is its
mascot tie-in — a colt that grows into a *тұлпар* (steed). That single idea threads the whole
system: the ♞ glyph in the wordmark, amber as the "coat" colour, and the encouraging voice.

## Sources
This system was built **from a written brief only** — no Figma file, codebase, logo, or brand
assets were provided. All visual and verbal direction here is an original proposal for the brand
and is meant to be iterated on. The brief (paraphrased): a Kazakh-language, buildable chess-kit
box for kids, with website, sticker pack, booklet/instructions, foldable board-box, mobile
adaptation, and QR-per-lesson linking to YouTube videos.

> **No logo was supplied, so none was invented.** The wordmark is simply the name set in Rubik
> Black, optionally paired with the ♞ glyph (see Brand → Wordmark card). Replace with a real mark
> when available.

---

## CONTENT FUNDAMENTALS
How Құлыншақ writes.

- **Language:** Kazakh (Cyrillic, with the full extended set: ә ғ қ ң ө ұ ү һ і). A Russian gloss
  may appear beside piece names (e.g. *Ат · Конь*). Fonts are chosen for complete Kazakh coverage.
- **Address the child directly as «сен»** (informal *you*), never «сіз». It's a friend teaching a
  friend. e.g. «Енді атты сынап көр.» ("Now try the knight.")
- **Short, warm, encouraging.** One idea per sentence. Praise first, instruct second:
  «Тамаша! Ат «Г» әрпімен секіреді.» Avoid textbook/technical register
  («траектория», «фигура қозғалады») — say «секіреді», «жүреді», «ұрады».
- **Kazakh piece names are canonical:** Патша (King), Уәзір (Queen), Тұра (Rook), Піл (Bishop),
  **Ат** (Knight), Сарбаз (Pawn).
- **Verbs of the product, in threes:** «Құрастыр · Жапсыр · Ойна» (Build · Stick · Play). This
  rhythmic triad is a recurring headline device.
- **Numbers stay friendly:** «Сабақ 03», «6 видео сабақ», «4+ жас», price in ₸ («7 900 ₸»).
- **Emoji:** used sparingly and purposefully (✓ ✂ ▶ ★ 🙂) — accents, never decoration-by-default.
  Unicode chess glyphs (♞♟♜♝♛♚) are treated as brand icons, not emoji.
- **Casing:** eyebrows/labels are UPPERCASE with wide tracking; headlines are sentence case.
  Never ALL-CAPS a full sentence.

Do / Don't:
- ✓ «Патшаны қорға! Оны жоғалтсаң — ойын бітеді.»
- ✕ «Король является наиболее важной фигурой, которую необходимо защищать.»

---

## VISUAL FOUNDATIONS
The "steppe craft" look — warm, tactile, handmade, kid-first, chess-literate.

- **Palette.** A warm paper base (`--paper #F5EEDD`) and chess ink (`--ink #211D1A`) do most of
  the work. Three brand hues: **Foal Amber** (`--amber-400 #E7A13F`, PRIMARY — coat/knight/board
  light squares), **Steppe Teal** (`--teal-400 #2F8394`, SECONDARY — sky/board dark squares),
  **Ornament Clay** (`--clay-400 #CB5340`, ACCENT — highlights, play buttons, move markers).
  Steppe **Olive** is the tertiary/success family. Semantic colours are drawn from these, not
  invented. No bluish-purple, no neon.
- **Type.** Four voices: **Rubik** (display — playful geometric, headings + wordmark), **Nunito**
  (body — warm rounded humanist, 17px base / 1.6), **Lora** (serif — storybook prose, booklet
  intros, pull-quotes), **JetBrains Mono** (chess notation, coordinates, technical labels).
- **Backgrounds.** Flat warm paper with a *very* subtle dot grain (`base.css`). One soft
  amber→paper gradient is allowed on the hero; otherwise solid colour blocks (teal section, ink
  footer). No photographic backgrounds, no busy patterns. Recurring **craft motifs** instead:
  the checkerboard, perforated/dashed **fold & cut lines**, and peel **stickers**.
- **Corner radii.** Generous and tactile: cards `--radius-xl (24)`, controls `--radius-md (14)`,
  pills for badges/nav. Nothing sharp — it's for kids and it's paper.
- **Cards.** Warm `--surface` fill, 1px `--line` border, soft `--shadow-md`; hover lifts −3px to
  `--shadow-lg`. A **`cut` variant** swaps the shadow for a thick 3px ink border — a "punch-out
  piece" look echoing the physical kit. A **`sunk` variant** recesses with an inset shadow.
- **Shadows** are always **warm ink-tinted** (`rgba(33,29,26,…)`), never neutral grey. Elevation
  ramp sm→md→lg→xl, plus a dedicated `--shadow-sticker`.
- **The chunky pressable edge.** Primary/secondary/accent buttons render a solid bottom edge
  (`box-shadow: 0 4px 0 <deep>`) that **compresses on press** (translateY + edge shrink) — a
  physical, toy-like button. This is the signature interaction.
- **Buttons — states.** Hover: subtle lift/shadow. Press: the button drops onto its edge
  (scale/translate, not colour). Disabled: 45% opacity. Ghost is flat (no edge).
- **Borders.** Default hairline `--line` on paper; `--bw-1 (2px)` is the standard "cut-line"
  weight; ink borders (`--border-ink`) denote a printed/punch-out object.
- **Motion.** Playful but restrained. `--ease-out` for most transitions; `--ease-bounce`
  (overshoot) for toggles, checks, sticker straighten, and number pops. Durations 120–340ms. **No
  infinite/looping decorative animation.** Stickers rest at a slight tilt and straighten + scale
  up on hover.
- **Transparency & blur.** Reserved: the sticky header uses `rgba(paper)` + `backdrop-filter:
  blur`. Move highlights use translucent clay over squares. Otherwise surfaces are opaque.
- **Imagery vibe.** Warm and handmade. There is no stock photography in the kit — imagery is
  built from CSS motifs (the folded board-box, checkerboard, discs) and Unicode chess glyphs.
  When photos are added, keep them warm-toned and craft-lit.
- **Layout.** `--container 1160px`, `--container-prose 680px` for booklet reading. Sticky header;
  ink footer. Chunky hit targets (`--control-h-md 46px`) — never below 44px, since children tap.

---

## ICONOGRAPHY
- **Unicode chess glyphs are the primary icon set** — ♚ ♛ ♜ ♝ ♞ ♟ (filled/black) and their
  outline counterparts. They're universal, need no assets, and carry the brand (the ♞ knight is
  the mascot). The `ChessPiece` component wraps them with Kazakh names and an optional token disc.
- **UI glyphs** in the kit currently use a small set of **Unicode symbols** as lightweight icons
  (▶ ❚❚ ✓ ✕ + → ← ☎ ✂ ★ ⌂ 🛒 ▾). This keeps the system dependency-free.
- **Recommended icon library (substitution, please confirm):** for richer product UI use
  **[Lucide](https://lucide.dev)** via CDN — clean, rounded, consistent 2px stroke that matches
  the friendly geometry of Rubik. It was **not** specified in the brief, so it's a proposal:
  `<script src="https://unpkg.com/lucide@latest"></script>`. Swap in real brand icons if the
  client has them.
- **No custom SVG icon set was drawn.** Per the brand's craft ethos, avoid hand-rolling
  decorative SVGs; prefer the chess glyphs + a real icon font/library.
- **Emoji** appear only as occasional accents (see Content Fundamentals), never as a primary
  icon system.

---

## Foundation & fonts
- `styles.css` — the single entry point consumers link. Imports only.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, and `fonts.css`.
- `base.css` — light element defaults (paper background + grain, heading/body fonts, `.ku-eyebrow`).
- **Fonts load from Google Fonts** via `@import` in `tokens/fonts.css` (Rubik, Nunito, Lora,
  JetBrains Mono — all with Cyrillic/Kazakh subsets). ⚠️ **No local font binaries are bundled**;
  if you need offline/self-hosted fonts, download the `.woff2` files and replace the `@import`
  with local `@font-face` rules. Flag if you want me to do this.

---

## Components  (`window.DesignSystem_d688da.*`)
Reusable primitives. Mount from the compiled bundle; see each `*.prompt.md` for usage.

**Core** (`components/core/`)
- **Button** — chunky pressable CTA (primary / secondary / accent / outline / ghost).
- **IconButton** — single-glyph action (soft / solid / outline / ghost).
- **Badge** — label/status pill (lesson number, difficulty, count).
- **Card** — paper surface (paper / cut / sunk).
- **Callout** — boxed tip / rule / warning / fun for the teaching voice.

**Forms** (`components/forms/`)
- **Input** — labelled text field with hint/error + leading glyph.
- **Select** — styled native dropdown.
- **Checkbox** — chunky rounded checkbox with a bouncy check.
- **Radio** / **RadioGroup** — round selectors for exclusive choices.
- **Switch** — on/off toggle (teal track).

**Chess** (`components/chess/`)
- **ChessPiece** — a Unicode piece in brand style, Kazakh-named, optional token disc.
- **ChessBoard** — teaching board that places pieces and highlights legal moves.

**Product** (`components/product/`)
- **Sticker** — the peel-and-stick look from the sticker pack.
- **QRTag** — the scan-for-video QR tag (placeholder pattern; wire real QR in production).
- **StepList** — numbered assembly / how-to steps for the on-screen booklet.

### Intentional additions
Because no source component inventory was provided, this is a from-scratch standard set. Four
primitives are **brand-specific additions** justified by the product:
- **ChessPiece / ChessBoard** — the product teaches chess; the "how each piece moves" lessons need
  a board and piece tokens.
- **Sticker** — the kit literally ships a sticker pack; it's a first-class visual treatment.
- **QRTag** — every lesson requires a scan-for-video code (core brief requirement).
- **StepList** — the booklet's assembly/how-to steps rendered on screen.

## UI kits
- **`ui_kits/website/`** — the marketing + learning site. Screens: Home, Learn (all lessons),
  Lesson detail (video + QR + board + rules), Assembly (booklet) + Order. Includes a Desktop /
  Mobile toggle. See its `README.md`.

## Design System tab (specimen cards)
- **Colors:** Neutrals, Foal Amber, Steppe Teal, Ornament Clay, Semantic, Board Squares.
- **Type:** Display, Body, Serif, Mono, Type Scale.
- **Spacing:** Spacing Scale, Corner Radii, Shadows & Edges.
- **Brand:** Wordmark, Motifs, Voice.
- **Components:** Core, Forms, Chess, Product cards.

## Root manifest
```
styles.css              global entry (imports only)
base.css                element defaults + .ku-eyebrow
tokens/                 colors · typography · spacing · effects · fonts
guidelines/*.card.html  foundation specimen cards
components/<group>/     Button, Card, … (.jsx + .d.ts + .prompt.md + *.card.html)
ui_kits/website/        website recreation (index.html + screens + README.md)
SKILL.md                Agent-Skills wrapper
readme.md               this file
```

## Caveats
- From-scratch brand: colours, type pairing, voice, and motifs are a **proposal**, not a supplied
  identity. Nothing here is locked.
- No logo → wordmark only. No local fonts → Google Fonts `@import`. Lucide is a **suggested**
  icon library, not specified. QR codes are placeholders. Board move-sets are illustrative.
