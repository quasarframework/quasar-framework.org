title: CLI Commands
---
## Version
Displays version information.
``` bash
$ quasar -V
$ quasar version
```

## Help
Displays list of all commands and options.
``` bash
$ quasar
$ quasar -h
```


## Create Project Folder

Initializes a project folder with everything necessary.
``` bash
$ quasar new [folder-name]
```

## Build

### For development
Generates a folder called `/build` which contains sourcemaps and everything needed to debug.
``` bash
$ quasar build
```

### For production
Generates a folder called `/dist`. Everything is compiled, minified, ...
``` bash
$ quasar dist
```

### Cleaning
Cleans development and production builds.
``` bash
$ quasar clean
```

## Monitoring & Auto-Build
Monitors source code files (Javascript files, CSS files, assets, ...) for changes and when change is detected it auto-rebuilds.
``` bash
$ quasar monitor
```

## Live Preview
You can even live preview the build in your browser(s). Whenever you modify anything in the source code (Javascript files, CSS files, assets, ...), it gets rebuilt and the browser(s) refreshed.

> **NOTE**: CSS is injected into the browser(s) so the page is not required to reload, which is really cool.


## Pages

### Create Page
``` bash
$ quasar new:page [page-name]
```

### Rename Page
``` bash
$ quasar rename:page [page-name]
```

### Remove Page
``` bash
$ quasar remove:page [page-name]
```



## Making a Release

> **NOTE** This is not yet available.

Versioning takes into account the Angular commit style.
See [Commit Message Format](commit-message-format.html).


### release:recommend
Recommends the type of version bump, which can be: `patch`, `minor` or `major`.
The recommendation is based on the commit message style. See [Commit Message Format](commit-message-format.html).
``` bash
$ quasar release:recommend
```



### release *&lt;type&gt;*
`type` can be: prepatch, path, preminor, minor, premajor, major, prerelease
``` bash
$ quasar release minor
```

What it does is:
* Bumps package version according to the *type*
* Generates changelog from GIT
* Commits to GIT with commit message "[release] `VERSION`"
* Generates a GIT tag named "v`VERSION`"
* Pushes commit and tag to GIT



### release:version *&lt;version&gt;*
If however you want to release a specific version, use this command:
``` bash
$ quasar release:version 1.2.3
```
