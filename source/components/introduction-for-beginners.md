title: Introduction for Beginners
---
It's a good idea to get acquainted with ES6 (quick overview [here](https://github.com/lukehoban/es6features) and full description [here](http://es6-features.org/#Constants) -- don't worry, you don't need to understand ALL of it) and Vue before jumping in and using Quasar. [Vue documentation](https://vuejs.org/v2/guide/) takes half a day at most to read top-bottom and will help you understand how Quasar components can be used and configured.

After reading Vue documentation, let's clear up some of the most frequently asked questions, like "How can I use Quasar components Vue properties, methods and events".

## Single File Vue Components
You'll be building your Quasar app using `*.vue` files which contain multiple sections: 'template' (HTML), 'script' (Javascript) and 'style' (CSS).

```html
<template>
  <!-- you define your Vue template here -->
</template>

<script>
// This is where your Javascript goes
// to define your Vue component, which
// can be a Layout, a Page or your own
// component used throughout the app.

export default {
  //
}
</script>

<style>
/* This is where your CSS goes */
</style>
```

### CSS preprocessors
For the `<style>` tag, you can also use whatever CSS preprocessor you want. [Stylus](http://stylus-lang.com/) is available out of the box. For SCSS/SASS or LESS, you'll need to install their Webpack loaders (example: `npm install less-loader`).

After installing loaders you need (remember Stylus does not need install), you can specify you want preprocessor to be used to handle the CSS code you're writing:

```html
<!-- notice lang="stylus" -->
<style lang="stylus">
.some-div
  font-size 15px
</style>
```

## Using Quasar Components
Quasar components have names beginning with "Q" like "QBtn" or "QElementResizeObservable". In order to use them, you need to import them (globally or locally per Vue component where you use them).

Example importing Quasar component locally:
```html
<template>
  <div>
    <q-btn @click="doSomething">Do something</q-btn>
    <q-icon name="alarm" />
  </div>
</template>

<script>
import { QBtn, QIcon } from 'quasar'

export default {
  components: {
    QBtn,
    QIcon
  },
  ...
}
</script>
```

> Notice how QBtn is used in Vue HTML template as `<q-btn>`. If we'd import QElementResizeObservable then we'd use it in template as `<q-element-resize-observable>`.

Example importing Quasar components globally. **This means you won't need to import the specified Quasar components in every `*.vue` file where you are using them.**
```js
// We edit "src/main.js":
...
import Quasar, { QBtn, Ripple } from 'quasar'
...
Vue.use(Quasar, {
  components: {
    QBtn
  },
  directives: {
    Ripple
  }
})
...
```

### Self Closing Tags
Some Quasar components do not need you to include HTML content inside them. In this case, you can use them as self closing tags. One example with QIcon below:

```html
<q-icon name="cloud" />
```

Self-closing means the above template is equivalent with:

```html
<q-icon name="cloud"></q-icon>
```

Both forms are accepted and can be used.

## Handling Vue Properties
You will notice throughout the documentation that Quasar components have a section called "Vue Properties". Example:

| Vue Property | Type | Description |
| --- | --- | --- |
| `infinite` | Boolean | Infinite slides scrolling |
| `size` | String | Thickness of loading bar. |
| `speed` | Number | How fast should loading bar update its value (in milliseconds). |

## Handling Vue Methods
You will notice throughout the documentation that Quasar components have a section called "Vue Methods". Example:

| Vue Method | Description |
| --- | --- |
| `next(doneFn)` | Goes to next slide. |
| `previous(doneFn)` | Goes to previous slide. |
| `toggleFullscreen()` | Toggles fullscreen mode. |


## Handling Vue Events
You will notice throughout the documentation that Quasar components have a section called "Vue Events". Example:

| Event Name | Description |
| --- | --- |
| `@open` | Triggered right after Modal is opened. |
| `@close` | Triggered right after Modal is closed. |
