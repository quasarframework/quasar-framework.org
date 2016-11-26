title: State Component
---
Quasar State Component helps you when you have two states (called "default" and "active") to display using the same real estate of a page. Look at the demo which presents a button that when clicked it shifts to the "active" state and shows a spinner.

<input type="hidden" data-fullpage-demo="web-components/state">

## Basic Usage

``` html
<!-- Template for VueModel below -->
<q-state :active="state">
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
</q-state>
```

``` js
// VueModel for template above
{
  ...,
  data () {
    return {
      ...,
      state: false
    }
  },
  methods: {
    ...,
    changeState () {
      this.state = true

      setTimeout(() => {
        this.state = false
      }, 2000)
    }
  }
}
```

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `model` | Boolean | Show default (when `false`) or "active" state (when `true`) |
