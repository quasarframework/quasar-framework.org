title: CLI Commands
---
## Options

### Version
Displays version information.
``` bash
$ quasar -V
$ quasar version
```

### Help
Displays list of all commands and options.
``` bash
$ quasar
$ quasar -h
```

### Verbose Mode
If you want to get more information on what's going on (for example when building App), turn on the debug flag (`-d` option):
``` bash
$ quasar -d ..........
```



## Create App Folder

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
For more details to see what this does go to [Build Process](/guide/quasar-build-process.html) and [App Structure](/guide/quasar-app-structure.html).

### For production
Generates a folder called `/dist`. Everything is compiled, minified, ...
``` bash
$ quasar dist
```
For more details to see what this does go to [Build Process](/guide/quasar-build-process.html) and [App Structure](/guide/quasar-app-structure.html).

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
For more details to see what this does go to [Build Process](/guide/quasar-build-process.html) and [App Structure](/guide/quasar-app-structure.html).

## Live Preview
You can even live preview the build in your browser(s). Whenever you modify anything in the source code (Javascript files, CSS files, assets, ...), it gets rebuilt and the browser(s) refreshed.

Furthermore, clicks, scroll and form input are automatically synchronized between all opened browsers.
``` bash
$ quasar preview
```
For more details to see what this does go to [Build Process](/guide/quasar-build-process.html) and [App Structure](/guide/quasar-app-structure.html).

> **NOTE**: CSS is injected into the browser(s) so the page is not required to reload, which is really cool.

## Live Preview with Responsive View
Want to quickly see how your App handles different device screen sizes? This is the command that you should use. Recommended (and designed) to be viewed from a desktop browser.

Watches the source code (and reloads if necessary or injects CSS without page reload) but clicks, scroll and form input are *NOT* automatically synchronized between all opened browsers as for previous command.

``` bash
$ quasar rpreview
```
<img src="/images/screenshot-live-preview-2.png">

## Running Test Suites
Write tests and run them with the out of the box test-pack which includes Karma, Mocha, Chai & Sinon.
``` bash
$ quasar test
```
For more details on how to tweak testing see [App Structure - quasar.build.yml](/guide/quasar-app-configuration.html#quasar-build-yml) and look for `test` property description.

## Pages

Pages are the core of any Quasar App. Think of a Quasar Page as a webpage which has its own View, Controller and Model.

### Create Page
``` bash
$ quasar new:page [page-name]
```

### Rename Page
``` bash
$ quasar rename:page [old-page-name] [new-page-name]
```

### Remove Page
``` bash
$ quasar remove:page [page-name]
```



## Making a Release

> **NOTE**: This is not yet available.

Versioning takes into account the Angular commit style.
See [Commit Message Format](commit-message-format.html).


### Recommend Release Type
Recommends the type of version bump, which can be: `patch`, `minor` or `major`.
The recommendation is based on the commit message style. See [Commit Message Format](commit-message-format.html).
``` bash
$ quasar release:recommend
```



### Release Version Type
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



### Release a Specific Version
If however you want to release a specific version, use this command:
``` bash
$ quasar release:version 1.2.3
```
