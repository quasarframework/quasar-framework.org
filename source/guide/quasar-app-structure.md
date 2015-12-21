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
│   │   ├── app.css
│   │   └── app-dependencies.css
│   ├── js
│   │   ├── app-dependencies.js
│   │   └── app.js
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
│   │   └── app.styl
│   ├── html
│   │   └── html-README.txt
│   ├── js
│   │   └── app.js
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

29 directories, 58 files
```

What each is used for:

| Asset | Description |
| --- | --- |
| /dist | Production build folder |
| /coverage | Code coverage after [running tests with CLI](/guide/cli-commands.html#Running_Test_Suites) |
| /src | App source files; see [Source Folder](#Source_Folder) |
| /test | Test source files used for [running tests with CLI](/guide/cli-commands.html#Running_Test_Suites) |
| /wrapper | Native mobile app wrapper; see [Native_Mobile_App_Wrapper](/guide/cli-commands.html#Native_Mobile_App_Wrapper) |
| /.eslintrc | Default ESLINT config for linting Javascript files |
| /.gitignore | Tells GIT what files to ignore |
| /package.json | App's NPM management file |
| /quasar.build.yml | YAML file used to [configure App build](/guide/quasar-app-configuration.html#quasar-build-yml) |
| /.stylintrc | Default Stylus lint config for linting Stylus files |

## Source Folder

| Asset | Description |
| --- | --- |
| /src/css | Folder to store global/common CSS files |
| /src/html | Folder to store global/common HTML files |
| /src/js | Folder to store global/common JS files |
| /src/pages | Folder to store assets for each page |
| /src/layouts | Folder to store assets for each layout |
| /src/index.html | App starting point |
