title: App Structure
---
``` bash
.
├── build/                        # webpack config files
│   └── ...
├── config/                       # main project config
│   ├── index.js
│   └── ...
├── cordova/                      # where cordova boilerplate goes if you wrap app
├── dist/                         # where production build will go
├── src/
│   ├── assets/                   # dynamic assets (processed by webpack)
│   ├── components/               # .vue components
│   ├── statics/                  # pure static assets (directly copied)
│   ├── themes/                   # themes entry points for you to tweak
│   │   ├── app.ios.styl
│   │   ├── app.mat.styl
│   │   └── app.variables.styl
│   ├── app.js                    # app entry file
│   ├── index.html                # boilerplate for webpack to inject deps
│   └── router.js                 # app router logic
├── templates/                    # templates for quickly generating components
│   ├── component.vue             # generic .vue component file
│   ├── layout.vue                # generic .vue for a Layout
│   └── view.vue                  # generic .vue for a Page
├── test
│   ├── e2e                       # e2e testing
│   │   ├── custom-assertions/    # e2e custom assertions
│   │   ├── specs/                # test spec files
│   │   ├── nightwatch.conf.js    # test runner config file
│   │   └── runner.js             # test runner script
│   └── unit                      # unit testing
│       ├── coverage/             # where coverage report will go
│       ├── specs/                # unit test spec files
│       ├── .eslintrc             # eslint for test files
│       ├── index.js              # test build entry file
│       └── karma.conf.js         # test runner config file
├── .babelrc                      # babel config
├── .editorconfig                 # editor config
├── .eslintignore                 # ESlint ignore paths
├── .eslintrc.js                  # ESlint config
├── .gitignore                    # GIT ignore paths
├── package.json                  # npm scripts and dependencies
├── README.md                     # readme for your App
└── .stylintrc                    # Stylus lint config
```

### build/
This directory holds the actual configurations for both the development server and the production webpack build. Normally you don't need to touch these files unless you want to customize Webpack loaders, in which case you should probably look at `build/webpack.base.conf.js`.

### config/index.js
This is the main configuration file that exposes some of the most common configuration options for the build setup.

### src/
This is where most of your application code will live in. How to structure everything inside this directory is largely up to you; if you are using Vuex, you can consult the [recommendations for Vuex applications](http://vuex.vuejs.org/en/structure.html).

### src/index.html
This is the **template** index.html for our single page application. During development and builds, Webpack will generate assets, and the URLs for those generated assets will automatically injected into this template to render the final HTML.

### src/statics/
This directory is an escape hatch for static assets that you do not want to process with Webpack. They will be directly copied into the same directory where webpack-built assets are generated.

See [Handling Static Assets](/guide/app-handling-static-assets.html) for more details.

### templates/
Component templates that you can use along Quasar CLI to generate `*.vue` files for your App. See [Generating Components](/guide/quasar-cli.html#Generating-Components).

### test/unit/
Contains unit test related files. See [Unit Testing](/guide/app-unit-testing.html) for more details.

### test/e2e/
Contains e2e test related files. See [End-to-end Testing](/guide/app-end-to-end-testing.html) for more details.

### package.json
The NPM package meta file that contains all the build dependencies and scripts (including build scripts used by Quasar CLI).
