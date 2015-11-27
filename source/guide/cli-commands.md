title: CLI Commands
---
## Options

#### Version
Displays version information.
``` bash
$ quasar -V
$ quasar version
```

#### Help
Displays list of all commands and options.
``` bash
$ quasar
$ quasar -h
```

#### Verbose Mode
If you want to get more information on what's going on (for example when building App), turn on the debug flag (`-d` option):
``` bash
$ quasar -d ..........
```

## Create App

Initializes a project folder with everything necessary.
``` bash
$ quasar new [folder-name]
```

## Build App

### For Development
Generates a folder called `/dist` which contains sourcemaps and everything needed to debug.
``` bash
$ quasar build
```
For more details to see what this does go to [Build System](/guide/quasar-build-system.html) and [App Structure](/guide/quasar-app-structure.html).

### For Production
Generates a folder called `/dist`. Everything is compiled, minified, ...
``` bash
$ quasar build -p
# or
$ quasar build --production
```
For more details to see what this does go to [Build System](/guide/quasar-build-system.html) and [App Structure](/guide/quasar-app-structure.html).

### Cleaning
Cleans App folder from build artifacts.
``` bash
$ quasar clean
```

### Monitoring & Auto-Rebuild
Monitors source code files (Javascript files, CSS files, assets, ...) for changes and when that happens it auto-rebuilds to update the end-user code.
``` bash
$ quasar monitor
```
For more details to see what this does go to [Build System](/guide/quasar-build-system.html) and [App Structure](/guide/quasar-app-structure.html).

## Live Preview
You can even live preview the build in your browser(s). Whenever you modify anything in the source code (Javascript files, CSS files, assets, ...), it gets rebuilt and the browser(s) refreshed.

Furthermore, clicks, scroll and form input are automatically synchronized between all opened browsers.
``` bash
$ quasar preview
```
For more details to see what this does go to [Build System](/guide/quasar-build-system.html) and [App Structure](/guide/quasar-app-structure.html).

> **NOTE**
> CSS is injected into the browser(s) so the page is not required to reload, which is really cool.

### Responsive View
Want to quickly see how your App handles different device screen sizes? This is the command that you should use. Recommended (and designed) to be viewed from a desktop browser.

Watches the source code (and reloads if necessary or injects CSS without page reload) but clicks, scroll and form input are *NOT* automatically synchronized between all opened browsers as for previous command.

``` bash
$ quasar preview -r
# or
$ quasar preview --responsive
```
![Responsive Preview Screen](/images/preview-2.png "Responsive Preview Screen")

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
$ quasar page [page-name]
```

### Rename Page
``` bash
$ quasar page [current-page-name] [new-page-name]
```

## Native Mobile App Wrapper
You can use Cordova to wrap your Quasar App into a native mobile App.

### Wrap your App
So you want to be able to produce native apps for the mobile platforms:
``` bash
$ quasar wrap
```
This command generates a folder inside your App called `/wrapper`. It contains the assets of a Cordova project mapped to your Quasar App's source code.

### Execute Cordova Command
You surely want to add a platform or perform useful Cordova commands:
``` bash
$ quasar wrap [Cordova command arguments]

# examples:
$ quasar wrap platform add android
$ quasar wrap run
$ quasar wrap build
```

> **TIP**
> Use it in conjunction with `quasar build` when you frequently test on your mobile: `quasar build && quasar wrap run`

## Runtime Information
Display information about your runtime, including operating system, nodejs version, Quasar CLI version and more.

``` bash
$ quasar info
```

Output example:
``` bash
$ quasar info

 Runtime
 Quasar CLI:	 v0.0.17
 Node JS:	 v4.2.0

 Operating System
 Architecture:	 x64
 Platform:	 linux
 Release:	 3.19.0-33-generic

```
