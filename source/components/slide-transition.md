title: Slide Transition
---
QSlideTransitions slides the DOM element (or component) up or down, based on its visibility: works alongside `v-show` and `v-if` on a single element, similar to Vue's Transition component with the only difference being that it's not a group transition too (it only applies to one DOM element or component).
<input type="hidden" data-fullpage-demo="animation/slide-transition">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QSlideTransition']
}
```

## Basic Usage
```html
<template>
  <div>
    <q-slide-transition>
      <img
        v-show="visible"
        src="~assets/quasar.jpg"
      >
    </q-slide-transition>

    <q-btn @click="toggleVisibility">
      Toggle
    </q-btn>
  </div>
</template>

<script>
export default {
  ...,
  data: {
    ...,
    visible: true
  },
  methods: {
    ...,
    toggleVisibility () {
      this.visible = !this.visible
    }
  }
}
</script>
```

You can also trigger the animation when rendering the component for first time (on appearance) too, by specifying the `appear` Boolean prop:
```html
<q-slide-transition appear>
  ...
</q-slide-transition>
```

(v0.15.13+) You can also use `@show` and `@hide` Vue events if you want to trigger something after animation is over.
