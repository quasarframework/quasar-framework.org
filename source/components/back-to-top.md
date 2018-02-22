title: Back to Top
---

This is actually a directive and not a component. It allows to make visible any DOM elements (like buttons) which appear after a certain scroll offset. When clicked/tapped they take the user to the top of the page.
<input type="hidden" data-fullpage-demo="scrolling/back-to-top">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  directives: ['BackToTop']
}
```

## Basic Usage
``` html
<!-- Bare bones example -->
<q-btn
  v-back-to-top
  round
  color="teal-5"
  class="fixed-bottom-right"
  style="margin: 0 15px 15px 0"
>
  <q-icon name="keyboard_arrow_up" />
</q-btn>

<!--
  With animation, custom scroll offset (after which button is visible)
  and animation duration.

  Use "animate-*" CSS classes for effects when buttons/elements
  become visible. In this case, we'll use "animate-pop":
-->
<q-btn
  v-back-to-top.animate="{offset: 500, duration: 200}"
  round
  color="primary"
  class="fixed-bottom-right animate-pop"
  style="margin: 0 15px 15px 0"
>
  <q-icon name="keyboard_arrow_up" />
</q-btn>
```

When using a [Layout](/components/layout.html) then you can take advantage of the [Fixed Positioning on Layout](/components/fixed-positioning-on-layout.html) component too and wrap your element with it, like this:

```html
<q-page-sticky position="top-right" :offset="[18, 18]">
  <q-btn
    v-back-to-top
    round
    color="primary"
    @click="alert"
    icon="keyboard_arrow_up"
  />
</q-page-sticky>
```

## Vue Modifiers
| Vue Modifier | Description |
| --- | --- |
| `animate` | Adds scrolling animation |

## Vue Binding Value
You can use the binding value in 3 forms:

1. **No value**. Defaults will apply.
2. **As a Number**. This will be the scroll offset after which DOM element will be made visible.
3. **As an Object** with `offset` and/or `duration` as props. Duration is ignored if `animate` modifier is not used.

## Determining Scrolling Container
Please read [here](/components/scroll-observable.html#Determining-Scrolling-Container) about how Quasar determines the container to attach scrolling events to.
