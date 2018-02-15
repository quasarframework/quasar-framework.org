title: Electron Build Commands
---
[Quasar CLI](/guide/quasar-cli.html) makes it incredibly simple to develop or build the final distributables from your source code.

## Developing
```bash
$ quasar dev -m electron

# ..or the longer form:
$ quasar dev --mode electron

# with a specific Quasar theme, for iOS platform:
$ quasar dev -m electron -t ios

# with a specific Quasar theme, for Android platform:
$ quasar dev -m electron -t mat
```


## Building for Production
```bash
$ quasar build -m electron

# ..or the longer form:
$ quasar build --mode electron

# with a specific Quasar theme, for iOS platform:
$ quasar build -m electron -t ios

# with a specific Quasar theme, for Android platform:
$ quasar build -m electron -t mat
```
