title: Vue Transitions
---
At the moment, Quasar provides only one ready to use Vue transition. If you don't know what a transition is, read [here](http://vuejs.org/guide/transitions.html).
Quasar Vue transitions work alongside `v-show` and `v-if` on a single element. Not supporting group transitions yet.

<input type="hidden" data-fullpage-demo="other/vue-transitions">

### "slide" transition
Slide the DOM element up or down based on its visibility.

``` html
<!-- Template for VueModel below -->
<quasar-transition name="slide">
  <img
    v-show="visible" <<<<<<<<
    src="assets/quasar.jpg"
  >
</quasar-transition>
<button @click="toggleVisibility()">Toggle</button>
```
``` js
// VueModel for template above
module.exports = {
  ...,
  data: {
    ...,
    visible: true
  },
  methods: {
    ...,
    toggleVisibility: function() {
      this.visible = !this.visible;
    }
  }
}
```
