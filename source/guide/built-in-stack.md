title: Built-in Technology Stack
---
You can take full advantage of the following dependencies that are provided by default:

## Vue
Two-way data binding technology. Reactive Components for Modern Web Interfaces. A *must-use*. Read more <a href="http://vuejs.org" target="_blank">here</a>.

Example:
``` html
<div id="demo">
  <p>{{message}}</p>
  <input v-model="message">
</div>
```

``` js
var demo = new Vue({
  el: '#demo',
  data: {
    message: 'Hello Vue.js!'
  }
});
```

Changing the *input* element content automatically updates `data.message` (called *scope*). Works the other way around too if you programmatically change `data.message` property. But this is just the tip of the iceberg.

## jQuery
No need for an introduction. Mind that you should not be required to use it though due to Vue. It is included by default just because Quasar Framework uses it under the cover.

> **NOTE**
> A good Quasar App uses NO jQuery code and it does NOT touch DOM elements directly under any way. Vue should handle the DOM update for you through the scope.

## Lodash
Inspired by Underscore (& even has compatible API), but better. You have the global object `_` (underscore character) you can use.

Read more <a href="https://lodash.com/" target="_blank">here</a>.

## Fastclick
FastClick is a simple, easy-to-use library for eliminating the 300ms delay between a physical tap and the firing of a click event on mobile browsers. The aim is to make your Quasar App feel less laggy and more responsive while avoiding any interference with your current logic.

Read more <a href="https://ftlabs.github.io/fastclick/" target="_blank">here</a>.

## Semantic UI
Inspired by Bootstrap & Foundation, but way better. Semantic is a development framework that helps create beautiful, responsive layouts using human-friendly HTML. Semantic UI treats words and classes as exchangeable concepts. Classes use syntax from natural languages like noun/modifier relationships, word order, and plurality to link concepts intuitively.

Read more <a href="http://semantic-ui.com/" target="_blank">here</a>.
