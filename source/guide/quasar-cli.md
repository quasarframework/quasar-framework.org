title: Quasar CLI
---
The Quasar CLI allows you to create new projects in no time, by generating a base application, filled with everything you need to begin working on your application. It does most of the heavy-lifting, so you need not concern yourself with the redundant tasks of building a base application. 

``` bash
$ npm install -g quasar-cli
```

Familiarize yourself with the list of commands:
``` bash
$ quasar
```

See help for any command:
``` bash
$ quasar [command name] --help
```

## Version
Check the CLI version and, if on a Quasar app folder, also output Quasar version being used.

``` bash
$ quasar version
```

## Create App

Initializes an App folder with a starter boilerplate.
``` bash
$ quasar init [template name] <folder-name>
```

> By omitting the `template name` parameter the CLI will detect latest App template and generate the App folder with it.

You can check available App templates, by listing them at any time with:

``` bash
$ quasar list
```

> **Tip** - You can also install your own base template from Github with the `@` indicator.
<br>
>`quasar init @myrepo/my-quasar-template my-new-app`
<br>
> If you want to refer to a specific branch, use a hash `#` and then the branch name.
<br>
> `quasar init @myrepo/my-quasar-template#my-branch my-new-app`

## Development Server
The Quasar development server allows you to develop your App by compiling and maintaining code in-memory. A web server will serve your App while offering hot-reload out of the box. Running in-memory offers faster rebuilds when you change your code.

> Hot Reload is much more than just refreshing your browser when code changes. It skips the refresh and updates your code on the fly, while maintaining your App's state (like your VueModel's data). Please note that there are cases when this is impossible, so the dev webserver will simply refresh your browser. (Always ensure you are running only one instance of quasar-cli at once, otherwise Hot-Reload and other stuff will break!)

Furthermore, you can develop your App directly on a phone and still benefit from Hot-Reload. Download and install the Quasar Play App (currently only on Google Play Store) to achieve this functionality.

``` bash
# run development server (with default theme)
$ quasar dev

# run development server with specific theme
$ quasar dev mat
$ quasar dev ios

# dev server with QR code
# scan QR code with Quasar Play app
$ quasar dev -p
$ quasar dev --play
$ quasar dev mat --play
```

If you wish to change the port serving your App you have 2 options:
* Open up `/config/index.js` file and change `dev.port` property.
* If this is a one time thing, specify the port as an environment variable:
  ``` bash
  $ PORT=3000 quasar dev
  ```

If there appears to be an issue with hot reload, you can try two fixes:
* Change the permissions for the project folder with

  ``` bash
  sudo chown -R username: .
  ```
* or run the dev server with root privileges
  
  ``` bash
  sudo quasar dev
  ```

## Build App for Production
The Quasar CLI can pack everything together and optimize your App for production. It minifies source code, extracts vendor components and leverages browser cache, and much more.

``` bash
# build for production
$ quasar build

# build for production with specific theme
$ quasar build mat
$ quasar build ios
```

You can also clean up the build assets with:
``` bash
$ quasar clean
```

## Generating Components
After creating an App folder with the CLI, you'll have a folder named `/templates` inside your App, which contains templates for: `layout`, `page`, or a generic Vue `component`.

You can generate components for your App in your `/src` folder:
```
# get available Component templates
$ quasar new -l
$ quasar new --list

# generate .vue file from a Component template
$ quasar new component Hello

# generate .vue file from a template to a subfolder
$ quasar new layout layout/about/help/Hello
# the above creates src/components/layout/about/help/Hello.vue
```
> Add your own component templates. Quasar will be able to handle them.

> The command `quasar new templateName vueFileName` simply copy the file from `/templates` to `/src/components` with given names.
```
# will copy file from `/template/myView.vue` to `/src/components/MyNewView.vue`
$ quasar new myView MyNewView
```

## App Wrappers
The currently available App Wrappers are for Cordova & Electron. More will be added in the future, to allow you to build a Google Chrome extension or a Progressive Web App, just to name a few.

The CLI wrap command is like this:
``` bash
$ quasar wrap <wrapper name>
```

Further reading on the **Cordova** wrapper is available [here](/guide/cordova-wrapper.html).
Further reading on the **Electron** wrapper is available [here](/guide/electron-wrapper.html).

## Lint App Code
ESlint is used to check your ES6 Javascript files.

``` bash
$ quasar lint
```

## Serve Static-Content Folder
You are able to create an ad-hoc web server to serve static-content web files from a folder. Browser sessions are automatically refreshed when content changes. User click/scroll can be synchronized.

This command comes in really handy after building your Quasar App for production. The `/dist` folder contains files that are meant to be served with a webserver. This is how:

``` bash
# Serve dist folder
# (must build app before that or else current folder will be served):
$ quasar serve

# ..or serve a full or relative path
$ quasar serve dist
$ quasar serve ./dist
$ quasar serve /work/quasar-app/dist
```

> This command does not rely on Quasar Framework. Any folder with any web content can be served.
