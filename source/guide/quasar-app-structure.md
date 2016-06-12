title: Quasar App Structure
---
## Overview
This is what a new Quasar Framework App folder structure looks like. Some folders are creating after building the App.
``` bash
$ tree -I 'node_modules|wrapper' -a --dirsfirst
.
├── coverage
│   ├── lcov-report
│   │   ├── ...
│   │   ├── index.html
│   │   └── ...
│   └── lcov.info
├── dist
│   ├── assets
│   │   ├── fonts
│   │   │   ├── icons
│   │   │   │   ├── ...
│   │   │   │   └── ...
│   │   │   └── roboto
│   │   │       ├── ...
│   │   │       └── ...
│   │   └── favicon.ico
│   ├── css
│   │   ├── app.mat.css
│   │   └── app.ios.css
│   ├── js
│   │   └── deps.js
│   ├── layouts
│   │   └── main
│   │       ├── layout.main.css
│   │       └── layout.main.js
│   ├── pages
│   │   └── index
│   │       ├── assets
│   │       │   └── assets-README.txt
│   │       ├── style.index.css
│   │       └── script.index.js
│   └── index.html
├── src
│   ├── assets
│   │   └── favicon.ico
│   ├── css
│   │   ├── common
│   │   │   ├── app.style.styl
│   │   │   └── app.theme.styl
│   │   ├── app.ios.styl
│   │   └── app.mat.styl
│   ├── html
│   │   └── html-README.txt
│   ├── js
│   │   └── ...
│   ├── layouts
│   │   └── main
│   │       ├── layout.main.yml
│   │       ├── layout.main.styl
│   │       ├── layout.main.html
│   │       └── layout.main.js
│   ├── pages
│   │   └── index
│   │       ├── assets
│   │       │   └── assets-README.txt
│   │       ├── config.index.yml
│   │       ├── style.index.styl
│   │       ├── script.index.js
│   │       └── view.index.html
│   └── index.html
├── test
│   ├── .eslintrc
│   ├── setup.js
│   └── test.spec.js
├── wrapper
│   ├── ....
│   ├── ....
│   └── ....
├── .eslintrc
├── .gitignore
├── package.json
├── quasar.build.yml
├── README.md
└── .stylintrc
```

What each is used for:

| Asset | Description |
| --- | --- |
| /dist | Production build folder |
| /coverage | Code coverage after [running tests with CLI](/guide/cli-commands.html#Running-Test-Suites) |
| /src | App source files; see [Source Folder](#Source-Folder) |
| /test | Test source files used for [running tests with CLI](/guide/cli-commands.html#Running-Test-Suites) |
| /wrapper | Native mobile app wrapper; see [Native Mobile App Wrapper](/guide/native-mobile-app-wrapper.html) |
| /.eslintrc | Default ESLINT config for linting Javascript files |
| /.gitignore | Tells GIT what files to ignore |
| /package.json | App's NPM management file |
| /quasar.build.yml | YAML file used to [configure App build](/guide/quasar-app-configuration.html#quasar-build-yml) |
| /.stylintrc | Default Stylus lint config for linting Stylus files |

## Source Folder

This is where you'll spend most of your time writing code for your App.

| Asset | Description |
| --- | --- |
| /src/css | Folder to store global/common CSS files |
| /src/html | Folder to store global/common HTML files |
| /src/js | Folder to store global/common JS files |
| /src/pages | Folder to store assets for each page; see [Pages](/guide/quasar-pages.html) |
| /src/layouts | Folder to store assets for each layout; see [Layouts](/guide/quasar-layouts.html) |
| /src/index.html | App starting point |
