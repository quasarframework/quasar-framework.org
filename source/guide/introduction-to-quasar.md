title: Introduction
---



There are 2 sections on this documentation website that will get you familiarized with Quasar:
  * **Guide** - Information about CLI, starter kits, how to get you started working on a project folder
  * [**Components**](/components) - Quasar components

It will help you a lot if you are familiar with these awesome tools/technologies:

* [ES6 Javascript](http://www.2ality.com/2015/08/getting-started-es6.html)
* [Vue JS](http://vuejs.org) and [NPM](http://npmjs.org) ecosystems
* [Vue Router](http://router.vuejs.org/)
* Writing [.vue files](http://vue-loader.vuejs.org/en/index.html)
* [Optional] [Vuex](http://vuex.vuejs.org/) if building large scale Apps.
* [Optional] [Webpack](http://webpack.github.io/) for tweaking the build system to your specific needs
* [Optional] [Cordova](https://cordova.apache.org/) for building native mobile phone Apps out of your Quasar App

# First steps

Before you begin your awesome journey with Quasar, if you aren't yet a very experienced JavaScript and Vue developer, we recommend you [read through this article first](/components/introduction-for-beginners.html). In that article we clarify simple prerequisites and basic knowledge needed to work with Quasar, which expands on the list above.

After reading that article, or if you have JavaScript and Vue experience, you can start with the Quasar CLI. The CLI allows you to create new projects in no time, by generating a base application, filled with everything you need to begin working on your application. It does most of the heavy-lifting, so you need not concern yourself with the redundant tasks of building a base application. You should install the CLI globally, in order to generate and manage Quasar apps.

``` bash
# installing Quasar CLI
$ npm install -g quasar-cli
```

## Quasar Starter Kits
Quasar offers multiple starter kits which you can check out:

``` bash
$ quasar list
```

Example of output:
```
Official Quasar App starter kits:

 ★ default ($ quasar init default <folder_name>)
   Boilerplate for website (with optional Cordova and Electron wrappers) with Quasar v0.14+

 ★ pwa ($ quasar init pwa <folder_name>)
   Boilerplate for PWA with Quasar v0.14+
```

## Create your first App
Depending on what you want to build, choose a starter kit then use `quasar init` command like this:

``` bash
# create starter boilerplate folder
$ quasar init <starter_kit_name> <folder_name>
# example: quasar init default my-project

$ cd <folder_name>

# npm install deps
$ npm install
```

## The Dev Server
Quasar also comes with a development server, which is equipped with [hot reload](https://www.youtube.com/watch?v=zSnL5W1RVkA). It makes your development process significantly easier. To get the server started:

``` bash
$ quasar dev [theme]

# start with 'mat' theme
$ quasar dev
# or
$ quasar dev mat

# start with 'ios' theme
$ quasar dev ios
```

## Vue Component Boilerplate
Although it isn't all that inconvenient, there is still some boilerplate involved with creating Vue's single file components, which Quasar makes great use of. So, to help you with the boilerplate code creation, Quasar offers a component creation process in the CLI. To create `*.vue` components from ready to use component templates folder (`/templates`):

``` bash
$ quasar new [type] <name of your component with optional subfolder>
```

The type can be `layout`, `page`, `component` (generic `*.vue` component).
You can even make your own component templates and use the CLI to generate them in your App.

## Quasar Play App
If you want to **develop mobile Apps with hot reload directly on your mobile phone**, install the [Quasar Play](/guide/quasar-play-app.html) app, currently only on Google Play Store.

``` bash
$ quasar dev --play
```

This generates a QR code that you can scan with the Quasar Play app and you'll have your App on the phone as long as the development server is running.

> That's it. You're all set now. Continue to read the guide about Quasar and don't forget to have fun! :)
