**Radio / RadioGroup** — pick exactly one (difficulty, delivery, plan).

```jsx
<RadioGroup value={val} onChange={setVal}
  options={['Бастауыш','Орта','Күрделі']} direction="row" />
```

Use `RadioGroup` for the common case; `Radio` alone when you need custom layout. Selected dot is amber with a bouncy scale-in.
