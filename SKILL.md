---
name: kulynshaq-design
description: Use this skill to generate well-branded interfaces and assets for Кулыншақ (Kulynshaq) — a foldable, buildable chess-teaching box for kids (Kazakh-language, QR-video lessons, sticker pack, booklet) — for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and
create static HTML files for the user to view. If working on production code, you can copy assets
and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or
design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_
production code, depending on the need.

## Quick map
- `readme.md` — brand context, CONTENT FUNDAMENTALS (Kazakh voice, «сен», piece names),
  VISUAL FOUNDATIONS (steppe-craft palette, four type voices, chunky pressable buttons, craft
  motifs), ICONOGRAPHY (Unicode chess glyphs + suggested Lucide), and the full component index.
- `styles.css` — the single stylesheet to link; pulls in all tokens + Google Fonts.
- `tokens/` — colors, typography, spacing, effects, fonts (CSS custom properties).
- `components/<group>/` — React primitives: Button, IconButton, Badge, Card, Callout (core);
  Input, Select, Checkbox, Radio/RadioGroup, Switch (forms); ChessPiece, ChessBoard (chess);
  Sticker, QRTag, StepList (product). Each has a `.prompt.md` with usage.
- `guidelines/*.card.html` — foundation specimens (colours, type, spacing, brand).
- `ui_kits/website/` — full click-through website recreation (home / learn / lesson / assembly /
  order + mobile), composing the primitives.

## House rules (short)
- Kazakh copy; address the child as «сен»; short + encouraging; Kazakh piece names
  (Патша/Уәзір/Тұра/Піл/Ат/Сарбаз).
- Warm paper + ink base; amber primary, teal secondary, clay accent; warm-tinted shadows only.
- Chunky buttons with a pressable bottom edge; generous radii; bounce only on toggles/checks.
- Unicode chess glyphs as brand icons; emoji sparingly. No purple gradients, no neon, no
  hand-drawn decorative SVG.
- Mobile-first. Hit targets ≥ 44px. Every lesson gets a scan-for-video QR (`QRTag`).

## Consuming the components
Link `styles.css`, load the compiled `_ds_bundle.js`, then read primitives off the namespace:
`const { Button, ChessBoard, QRTag } = window.DesignSystem_d688da;`
