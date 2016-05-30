title: Quasar Vue Transitions
---
At the moment, Quasar provides only one ready to use Vue transition. If you don't know what a transition is, read [here](http://vuejs.org/guide/transitions.html).
Vue transitions work alongside `v-show`, `v-if` and `v-for` Vue directives.

<input type="hidden" data-fullpage-demo="transitions">

### "slide" transition
Slide the DOM element up or down based on its visibility.

``` html
<!-- Template for VueModel below -->
<img
  v-show="visible" <<<<<<<<
  transition="slide" <<<<<<
  src="assets/quasar.jpg"
>
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
