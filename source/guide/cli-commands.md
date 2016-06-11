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

### Make a Build
Generates a folder called `/dist` which contains sourcemaps and everything needed to debug for Development or compiled, minified, optimized for Production.

``` bash
# Make a Development build
$ quasar build

# Make a Production build
$ quasar build -p # or --production
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
# monitor and auto-rebuild for Development
$ quasar monitor

# monitor and auto-rebuild for Production
$ quasar monitor -p # or --production
```
For more details to see what this does go to [Build System](/guide/quasar-build-system.html) and [App Structure](/guide/quasar-app-structure.html).

## Live Preview
You can even live preview the build in your browser(s). Whenever you modify anything in the source code (Javascript files, CSS files, assets, ...), it gets rebuilt and the browser(s) refreshed.

Furthermore, clicks, scroll and form input are automatically synchronized between all opened browsers.
``` bash
# Live Preview Development build
$ quasar preview

# Live Preview Production build
$ quasar preview -p # or --production
```
For more details to see what this does go to [Build System](/guide/quasar-build-system.html) and [App Structure](/guide/quasar-app-structure.html).

> **NOTE**
> CSS is injected into the browser(s) so the page is not required to reload, which is really cool.

## Responsive Live Preview
Want to quickly see how your App handles different device screen sizes? This is the command that you should use. Recommended (and designed) to be viewed from a desktop browser.

Watches the source code (and reloads if necessary or injects CSS without page reload) but clicks, scroll and form input are *NOT* automatically synchronized between all opened browsers as for previous command.

``` bash
# Responsive Live Preview Development build
$ quasar responsive

# Responsive Live Preview Production build
$ quasar responsive -p # or --production
```
![Responsive Preview Screen](/images/preview.png "Responsive Preview Screen")

## Running Test Suites
Write tests and run them with the out of the box test-pack which includes Karma, Mocha, Chai & Sinon.
``` bash
$ quasar test
```
For more details on how to tweak testing see [Configuring Quasar App](/guide/quasar-app-configuration.html) and look for `test` property description.

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

### Copy Page
Create a new Page using another Page as template.
``` bash
$ quasar page -c [source-page-name] [new-page-name]
```

## Layouts

Layouts are the elements that wrap one or multiple pages (like navigational bar).

### Create Layout
``` bash
$ quasar layout [layout-name]
```

### Rename Layout
``` bash
$ quasar layout [current-layout-name] [new-layout-name]
```

### Copy Layout
Create a new Layout using another Layout as template.
``` bash
$ quasar layout -c [source-layout-name] [new-layout-name]
```

## Native Mobile App Wrapper
You can use Cordova to wrap your Quasar App into a native mobile App.

### Wrap your App
So you want to be able to produce native apps for the mobile platforms with Cordova (make sure you have it installed: `npm install -g cordova`):
``` bash
$ quasar wrap
```
This command generates a folder inside your App called `/wrapper`. It contains the assets of a Cordova project mapped to your Quasar App's source code.

It also installs the Crosswalk plugin `cordova-plugin-crosswalk-webview` which wraps your App with latest Chromium browser. This ensures that your App will have the same runtime on all platforms. Read more [here](https://crosswalk-project.org/documentation/about.html) about Crosswalk.

> **NOTE for Windows Developers**
> It is possible that you get `Error: EPERM: operation not permitted, symlink '..\dist'`, in which case you need to add privileges for your user to be able to create symlinks. Read [here](http://superuser.com/questions/104845/permission-to-make-symbolic-links-in-windows-7).

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
 Quasar CLI:	 v0.1.0
 Node JS:	 v4.2.0

 Operating System
 Architecture:	 x64
 Platform:	 linux
 Release:	 3.19.0-33-generic

```
