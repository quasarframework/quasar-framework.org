title: PWA Build Commands
---
[Quasar CLI](/guide/quasar-cli.html) makes it incredibly simple to develop or build the final distributables from your source code.

## Developing
```bash
$ quasar dev -m pwa

# ..or the longer form:
$ quasar dev --mode pwa

# with a specific Quasar theme:
$ quasar dev -m pwa -t ios
```

> **IMPORTANT**
> Do not run [Lighthouse](https://developers.google.com/web/tools/lighthouse/) on your development build. It is not optimized and does not contain a true Service Worker.

## Building for Production
```bash
$ quasar build -m pwa

# ..or the longer form:
$ quasar build --mode pwa

# with a specific Quasar theme:
$ quasar build -m pwa -t ios
```

## PWA Checklist
https://developers.google.com/web/progressive-web-apps/checklist

> **IMPORTANT**
> Do not run [Lighthouse](https://developers.google.com/web/tools/lighthouse/) on your development build. It is not optimized and does not contain a true Service Worker.
