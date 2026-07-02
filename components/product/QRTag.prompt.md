**QRTag** — the scan-for-video tag on every lesson. Placeholder pattern; wire a real QR in production.

```jsx
<QRTag seed="lesson-03-knight" href="https://youtu.be/…" caption="Ат қалай жүреді?" />
```

Renders a deterministic faux-QR (same `seed` → same pattern) in the brand tag frame with a clay play badge. In production, replace the module grid with a real QR generated from `href`.
