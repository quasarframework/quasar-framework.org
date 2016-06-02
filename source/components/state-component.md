title: Quasar State Component
---
Quasar State Component helps you when you have two states (called "default" and "active") to display using the same real estate of a Page. Look at the demo which presents a button that when clicked it shifts to the "active" state and shows a spinner.

<input type="hidden" data-fullpage-demo="state-component">

## Basic Usage

``` html
<!-- Template for VueModel below -->
<state :model.sync="state">
  <div slot="active">
    <spinner :size="51"></spinner> Active State
  </div>

  <!--
    any component outside of slot="active"
    is displayed for the default state
  -->
  <button class="primary" @click="changeState()">
    Default State - Hit me!
  </button>
</state>
```

``` js
// VueModel for template above

module.exports = {
  ...,
  data: {
    ...,
    state: false
  },
  methods: {
    ...,
    changeState: function() {
      this.state = true;
      setTimeout(function() {
        this.state = false;
      }.bind(this), 2000);
    }
  }
};
```
