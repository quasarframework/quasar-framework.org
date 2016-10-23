title: Getting Started
---
There are 3 sections on this documentation website that will get you familiarized with Quasar:
  * **Guide** - Information about CLI, starter kits, how to get you started working on a project folder
  * [**API**](/api) - Global Javascript and CSS (framework) API
  * [**Components**](/components) - List of Quasar components

# First steps
Quasar CLI allows you to start new projects in no time by generating a starter boilerplate filled with everything that you need. It also does most of the heavy-lifting so you don't have to take care of the redundant tasks. You must install it to generate and manage a Quasar App.

``` bash
$ npm install -g quasar-cli
```

## Create your first App

``` bash
# create starter boilerplate folder
$ quasar init <folder name>
$ cd <folder name>

# npm install deps
$ npm install
```

Start a development server of your first App, equipped with hot reload:

``` bash
$ quasar dev [theme]

# start with 'mat' theme
$ quasar dev
# or
$ quasar dev mat

# start with 'ios' theme
$ quasar dev ios
```

Create `*.vue` components from ready to use component templates folder (`/templates`):

``` bash
$ quasar new [type] <name of your component with optional subfolder>
```

Type can be `layout`, `view` (page content), `component` (generic `*.vue` component).
You can even make your own component templates and use CLI to generate them in your App.

## Quasar Play App
If you want to **develop mobile Apps with hot reload directly on your mobile phone**, install [Quasar Play](/guide/quasar-play-app.html) app, currently only on Google Play Store.

``` bash
$ quasar dev --play
```

This generates a QR code that you can scan with Quasar Play app and you'll have your App on the phone as long as the development server is running.

## Things to read about
You should be familiar with these awesome tools/technologies:

* [ES6 Javascript](http://www.2ality.com/2015/08/getting-started-es6.html)
* [Vue Js](http://vuejs.org) and [NPM](http://npmjs.org) ecosystems
* [Vue Router](http://router.vuejs.org/)
* Writing [.vue files](http://vue-loader.vuejs.org/en/index.html)
* [Optional] [Vuex](http://vuex.vuejs.org/) if building large scale Apps.
* [Optional] [Webpack](http://webpack.github.io/) for tweaking the build system to your specific needs
* [Optional] [Cordova](https://cordova.apache.org/) for building native mobile phone Apps out of your Quasar App

> That's it. You're set now. Continue to read the guide about Quasar and don't forget to have fun :)
