title: Floating Action Buttons
---
A Quasar Floating Action Button (FAB) represents the primary action in an App Page. But it's not limited to only that. It can contain sub-actions too, and more importantly it can also be used inline into your Pages or Layouts.

<input type="hidden" data-fullpage-demo="web-components/fab">

## Getting Started

So there are two types: expandable (has sub-actions) and non-expandable. **If not expandable, a simple circular button will suffice**. Otherwise check the HTML tags below.

``` html
<!-- Non-expandable -->
<button class="primary circular" @click="method()">
  Button label
</button>

<!-- Expandable -->
<quasar-fab>
  <quasar-small-fab class="primary" @click="someMethod()">mail</quasar-small-fab>
  <quasar-small-fab class="secondary">alarm</quasar-small-fab>
</quasar-fab>
```

We'll continue describing only the expandable ones, as the non-expandable are simple circular buttons and you can read about them in the Buttons documentation page.

FABs are Web Components defined by `<quasar-fab>` and `<quasar-small-fab>` HTML tags with the following Vue properties:

| Param Attributes | Default Value | Description |
| --- | --- | --- |
| `type` | "primary" | One of the main colors in Quasar Color Palette; can also be an array of colors or CSS classes. Check second inline usage example below. |
| `icon` | "add" | Icon to use when not expanded |
| `click` | *none* | The method from VM to call when clicked/tapped. |
| `direction` | "right" | The direction in which to expand; one of the following values: "up", "down", "left", "right". |
| `activeIcon` | "close" | The icon to change to when expanded. |
| `backdrop` | *none* | Empty attribute; Use a backdrop behind it when expanded. |


## Inline Usage

``` html
<quasar-fab
  type="primary"
  icon="keyboard_arrow_right"
  direction="up"
>
  <quasar-small-fab class="primary">mail</quasar-small-fab>
  <quasar-small-fab class="orange">alarm</quasar-small-fab>
</quasar-fab>

<quasar-fab
  :type="['primary', 'glossy']"
  icon="keyboard_arrow_right"
  active-icon="mail"
  direction="right"
>
  <quasar-small-fab class="light-blue">mail</quasar-small-fab>
  <quasar-small-fab class="purple">alarm</quasar-small-fab>
</quasar-fab>
```

## Absolute Positioning Usage

Simply use the [Quasar CSS Positioning](/api/css-positioning.html) classes.

``` html
<button
  class="primary circular absolute-bottom-right"
  @click="method()"
>
  Button label
</button>

<quasar-fab
  class="absolute-bottom-right"
  direction="up"
  style="right: 20px; bottom: 20px;"
  :click="vmActionMethod"
>
  <quasar-small-fab class="primary">mail</quasar-small-fab>
  <quasar-small-fab class="green">alarm</quasar-small-fab>
</quasar-fab>
```
