title: Dev vs Production Code
---

Quasar boilerplate has built-in functionality so you can differentiate between Development and Production code.

``` js
if (DEV) {
  // this code block gets executed only in Dev mode
}

if (PROD) {
  // this code block gets executed only in Production mode
}
```

Due to the way that this is implemented, for example when building for Production, the first block (dealing with Dev mode) is completely discarded from the bundle (gets removed for the production build).
