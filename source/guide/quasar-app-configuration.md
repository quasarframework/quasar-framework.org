title: Configuring Quasar App
---
As you've seen in [App Structure](/guide/quasar-app-structure.html) page (read it if you haven't already), there is a build configuration file for your Quasar App: `quasar.build.yml`

This is the place where you configure how your App is built, what dependencies to inject, how your Quasar App is tested and more.

Example:
``` yml
deps:
  js:
    - 'node_modules/X/js/y.js'
    - 'node_modules/W/z.js'
  css:
    - 'node_modules/X/css/y.css'
preview:
  port: 3500
responsive:
  port: 3600
test:
  exclude: []
// forceTheme: 'mat' << optional
```

### 'deps' Object
Specify the dependencies of your App. You can use NPM to install different packages, or Bower, or just download some file from somewhere and store it inside the App's folder. In the end, all you need is a path. The Build System takes care of the rest. Mind the order as it may be important.

### 'preview' Object
[Live Preview](/guide/cli-commands.html#Live-Preview) configuration. Read more about configuration properties  [here](http://www.browsersync.io/docs/options/). Example of default configuration which is merged with user specific one:
``` yml
preview:
  port: 3000
  ui:
    port: 3001
  open: false
  reloadOnRestart: true
```

### 'responsive' Object
[Live Preview with Responsive View](/guide/cli-commands.html#Responsive-Live-Preview) configuration. Read more about configuration properties [here](http://www.browsersync.io/docs/options/). Example of default configuration which is merged with user specific one:
``` yml
responsive:
  port: 3100
  ui: false
  open: false
  ghostMode: true
  reloadOnRestart: true
```

### 'test' Object
This object's properties override any of the [default Karma configuration](https://github.com/rstoenescu/quasar-cli/blob/master/lib/gulp/gulp-config.js#L11-L97) options.
See the full list of [Karma configuration properties](http://karma-runner.github.io/0.8/config/configuration-file.html) that you can use.

### 'forceTheme' String
By default, Quasar builds all available themes for your App. This is costly while writing code, so you can force the build of only one theme to speed up your development. Works only for **development** builds. A production build will always contain both themes.
