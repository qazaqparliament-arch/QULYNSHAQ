# Құлыншақ — Website UI kit

A high-fidelity, click-through recreation of the **Құлыншақ** marketing + learning site: the
public face of a foldable, buildable chess-teaching box for kids. It composes the design
system's primitives (`Button`, `Card`, `Badge`, `Callout`, `ChessBoard`, `ChessPiece`, `QRTag`,
`Sticker`, `StepList`, form controls) — it does not re-implement them.

## Run it
Open `index.html` over http (it loads the compiled `_ds_bundle.js` and the screen files).
The layout is responsive: below 768px the site switches to the mobile adaptation —
compact header and a fixed bottom tab bar (`matchMedia`, no manual toggle).

## Screens
- **HomeScreen.jsx** — hero (the box "opened like a board", built in CSS), what's-in-the-box,
  how-it-works, and a peek at the Knight lesson.
- **LearnScreen.jsx** — grid of six lesson cards (one per piece), each with piece token, level
  badge and minutes; `LessonCard` is defined here.
- **LessonScreen.jsx** — lesson detail: a mock YouTube player, the scan-for-video `QRTag`, a
  `ChessBoard` showing that piece's legal moves, a rule `Callout`, practice `StepList`, and
  prev/next lesson nav.
- **AssemblyScreen.jsx** — the booklet on screen: how to build the box (`StepList` + fold motif)
  plus **OrderScreen** (order form with validation-style states).
- **Chrome.jsx** — `Header` (sticky nav) and `Footer`.
- **data.js** — the six lessons (Kazakh names, move squares, rules) on `window.KU_DATA`.

## Flow demonstrated
Home → Сабақтар (Learn) → open a lesson → scan/play video, read moves → next lesson;
Header/Тапсырыс → Order form → success state; Құрастыру → Assembly steps.

## Notes
- The QR codes are **placeholders** (`QRTag`) — wire real QR generation to each lesson's YouTube
  URL in production.
- Chess move squares in `data.js` are illustrative for a piece on d4 (pawn on d2), for teaching
  clarity — not a full legal-move engine.
- All copy is Kazakh, addressing the child as «сен» (see the Brand → Voice card).
