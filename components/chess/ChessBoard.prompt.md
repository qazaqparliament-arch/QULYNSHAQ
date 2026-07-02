**ChessBoard** — a teaching board for the "how each piece moves" lessons.

```jsx
<ChessBoard
  pieces={[{ square:'d4', type:'knight', color:'black' }]}
  origin="d4"
  moves={['b3','b5','c2','c6','e2','e6','f3','f5']}
/>
```

`pieces` places glyphs by square (`a1`–`h8`); `moves` shows clay dots (rings on captures); `origin` puts an amber ring on the moving piece. Use `size={5}` + `cell` for compact mini-lessons. Coordinates show by default.
