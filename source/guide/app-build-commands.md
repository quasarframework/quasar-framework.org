title: App Build Commands
---

### Development
> Starts a Node.js local development server. See [API Proxying For Dev](/guide/app-api-proxying-for-dev.html) for more details.

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

While developing with Dev Server you will have:
* Ability to develop on phone with [Quasar Play](/guide/quasar-play-app.html) App
* Webbpack + vue-loader for single file Vue components
* State preserving hot-reload
* State preserving compilation error overlay
* Lint-on-save with ESLint
* Source maps

#### Generate .vue Components
After creating an App folder with the CLI, inside your App you'll have a folder named `/templates` that contains templates for: `layout`, `view` (page), or a generic Vue `component`.

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

#### Serve Static-Content Folder
You are able to create an ad-hoc web server to serve static-content web files from a folder. Browser sessions are automatically refreshed when content changes. User click/scroll can be synchronized.

This command comes in really handy after building your Quasar App for production. The `/dist` folder contains files that are meant to be served with a webserver. So here you go:

``` bash
# Serve current folder:
$ quasar serve

# ..or serve a full or relative path
$ quasar serve dist
$ quasar serve ./dist
$ quasar serve /work/quasar-app/dist
```

This command does not rely on Quasar Framework. Any folder with any web content can be served.

### Production
> Build assets for production.

``` bash
# build for production
$ quasar build

# build for production with specific theme
$ quasar build mat
$ quasar build ios
```

* Javascript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2)
* HTML minified with [html-minifier](https://github.com/kangax/html-minifier)
* CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano)
* All static assets compiled with version hashes for efficient long-term caching, and a production index.html is auto-generated with proper URLs to these generated assets
