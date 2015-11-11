title: Quasar App Structure
---
## Overview
This is what a new Quasar Framework App folder structure looks like. Some folders are creating after building the App.
``` bash
.
├── build
│   ├── css
│   │   ├── app.css
│   │   └── app-dependencies.css
│   ├── html
│   │   └── app.html
│   ├── js
│   │   ├── app-dependencies.js
│   │   └── app.js
│   ├── pages
│   │   └── index
│   │       ├── assets
│   │       ├── css
│   │       │   └── style.index.css
│   │       ├── html
│   │       │   └── view.index.html
│   │       └── js
│   │           └── script.index.js
│   ├── app.json
│   └── index.html
├── dist
│   ├── css
│   │   ├── app.css
│   │   └── app-dependencies.css
│   ├── html
│   │   └── app.html
│   ├── js
│   │   ├── app-dependencies.js
│   │   └── app.js
│   ├── pages
│   │   └── index
│   │       ├── assets
│   │       ├── css
│   │       │   └── style.index.css
│   │       ├── html
│   │       │   └── view.index.html
│   │       └── js
│   │           └── script.index.js
│   └── index.html
├── src
│   ├── css
│   │   └── app.styl
│   ├── html
│   │   └── app.html
│   ├── js
│   │   └── app.js
│   ├── pages
│   │   └── index
│   │       ├── assets
│   │       ├── css
│   │       │   └── style.index.styl
│   │       ├── html
│   │       │   └── view.index.html
│   │       ├── js
│   │       │   └── script.index.js
│   │       └── config.index.yml
│   └── index.html
├── test
├── CHANGELOG.md
├── karma.conf.js
├── package.json
├── quasar.build.yml
└── README.md

31 directories, 32 files
```

What each is used for:

| Asset | Description |
| --- | --- |
| /build | Development build folder |
| /dist | Production build folder |
| /src | App source files; see [Source Folder](#Source_Folder) |
| /test | Test source files |
| /quasar.build.yml | YAML file used to configure App build |

### quasar.build.yml
This is the place to include your own dependencies, or configure the banner that is automatically added when building for Production, and many more.

> Note that the format must be YAML.

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
banner: {}
```

#### 'preview' property
Browser-Sync configuration. Read more [here](http://www.browsersync.io/docs/options/). Example of default configuration which is merged with user specific one:
``` yml
preview:
  port: 3000
  ui:
    port: 3001
  open: false
  reloadOnRestart: true
```

#### 'banner' property
Read more how to configure [here](https://github.com/rstoenescu/gulp-pipes#banner). Example of configuration:
``` yml
banner:
  templatePath: '...'
  variables:
    ...
    ...
```

## Source Folder

| Asset | Description |
| --- | --- |
| /src/css | Folder to store global/common CSS files |
| /src/html | Folder to store global/common HTML files |
| /src/js | Folder to store global/common JS files |
| /src/pages | Folder to store assets for each page |
| /src/index.html | App starting point |

## Pages
An App's central working point is the Pages it is composed of. Each page has the following structure:

| Asset | Description |
| --- | --- |
| /src/pages/**&lt;page-name&gt;** | Page folder |
| /src/pages/**&lt;page-name&gt;**/assets | Folder to place images, fonts, ... specific to the page only |
| /src/pages/**&lt;page-name&gt;**/css | Folder to place CSS files specific to the page only |
| /src/pages/**&lt;page-name&gt;**/html | Folder to place HTML files specific to the page only |
| /src/pages/**&lt;page-name&gt;**/js | Folder to place JS files specific to the page only |
| /src/pages/**&lt;page-name&gt;**/config.**&lt;page-name&gt;**.yml | Folder to place CSS files specific to the page only |

Each page has a starting point for each type of asset:

| Asset | Description |
| --- | --- |
| style.**&lt;page-name&gt;**.styl | If it exists, it will automatically be included when page is loaded.<br>When user navigates away, it is removed. |
| view.**&lt;page-name&gt;**.html | If it exists, it will automatically be included when page is loaded. |
| script.**&lt;page-name&gt;**.js | **[Required]** Starting point of the page logic |
| config.**&lt;page-name&gt;**.yml | **[Required]** YAML file with page configuration (called *Manifest*). |

### config.page-name.yml
Provide page specific configuration, called *Manifest*.

Important properties below. These get computed by default if CSS and HTML main page files exists, but they can be overriden to point to other files. The path must start with the folder where root *index.html* file exists.
``` js
css: 'path/to/css'
html: 'path/to/html'
```
Any other property here will get into the page manifest. Read more in the [Writing a Page](/guide/writing-quasar-page.html) section.
