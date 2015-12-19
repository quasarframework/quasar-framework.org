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

## Apache Cordova
Wrap your App in Cordova so it can be installed on a mobile phone. It offers access to native device APIs, which is awesome. It integrates perfectly with Quasar Framework.

Read more about it <a href="https://cordova.apache.org/" target="_blank">here</a>.

## Lodash
Inspired by Underscore (& even has compatible API), but better. You have the global object `_` (underscore character) you can use.

Read more about it <a href="https://lodash.com/" target="_blank">here</a>.

## HammerJS
Add touch gestures to your App. Hammer is a open-source library that can recognize gestures made by touch, mouse and pointer events. It doesn't have any dependencies, and it's small.

Read more about it <a href="http://hammerjs.github.io/" target="_blank">here</a>.

## VelocityJS
Add complex Javascript animations which make good use of `requestAnimationFrame()` under the hood. Note that requestAnimationFrame() is a browser API which enables for faster than CSS animations.

It's incredibly fast, and it features color animation, transforms, loops, easings, SVG support, and scrolling. It is the best of jQuery and CSS transitions combined.

The Velocity UI pack is included too. Read more about it <a href="http://julian.com/research/velocity/" target="_blank">here</a>.

## jQuery
No need for an introduction. Mind that you should not be required to use it though due to Vue. It is included by default just because Quasar Framework uses it under the cover.

> **IMPORTANT**
> Good Quasar App code uses jQuery or touches DOM elements directly in extreme cases only. Vue should (and it does so efficiently) handle the DOM update for you through the data scope. If you're using too much jQuery it means you missed the point with Quasar Framework and Vue.

## Fastclick
FastClick is a simple, easy-to-use library for eliminating the 300ms delay between a physical tap and the firing of a click event on mobile browsers. The aim is to make your Quasar App feel less laggy and more responsive while avoiding any interference with your current logic.

Read more about it <a href="https://ftlabs.github.io/fastclick/" target="_blank">here</a>.
