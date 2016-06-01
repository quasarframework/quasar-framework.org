title: Quasar Floating Action Buttons
---
A Quasar Floating Action Button (FAB) represents the primary action in an App Page. But it's not limited to only that. It can contain sub-actions too, and more importantly it can also be used inline into your Pages or Layouts.

<input type="hidden" data-fullpage-demo="floating-action-button">

## Getting Started

So there are two types: expandable (has sub-actions) and non-expandable. If not expandable, a simple circular button will suffice. Otherwise check the HTML tags below.

``` html
<!-- Non-expandable -->
<button class="primary circular" @click="method()">
  Button label
</button>

<!-- Expandable -->
<fab>
  <small-fab class="primary" @click="someMethod()">mail</small-fab>
  <small-fab class="secondary">alarm</small-fab>
</fab>
```

We'll continue describing only the expandable ones, as the non-expandable are simple circular buttons and you can read about them in the Buttons documentation page.

FABs are Web Components defined by `<fab>` and `<small-fab>` HTML tags with the following Vue properties:

| Vue Property | Default Value | Description |
| --- | --- | --- |
| `type` | "primary" | One of the main colors in Quasar Color Palette; can also be an array of colors or CSS classes. Check second inline usage example below. |
| `icon` | "add" | Icon to use when not expanded |
| `click` | *none* | The method from VM to call when clicked/tapped. |
| `direction` | "right" | The direction in which to expand; one of the following values: "up", "down", "left", "right". |
| `activeIcon` | "close" | The icon to change to when expanded. |
| `backdrop` | *none* | Empty attribute; Use a backdrop behind it when expanded. |


## Inline Usage

``` html
<fab
  type="primary"
  icon="keyboard_arrow_right"
  direction="up"
>
  <small-fab class="primary">mail</small-fab>
  <small-fab class="orange">alarm</small-fab>
</fab>

<fab
  :type="['primary', 'glossy']"
  icon="keyboard_arrow_right"
  active-icon="mail"
  direction="right"
>
  <small-fab class="light-blue">mail</small-fab>
  <small-fab class="purple">alarm</small-fab>
</fab>
```

## Fixed Positioning Usage

When used on a Page with **no** Layout, you can use the [CSS Quasar Positioning](/api/css-positioning.html) classes.

``` html
<fab
  class="fixed-bottom-right"
  direction="up"
  style="right: 20px;"
  :click="vmActionMethod"
>
  <small-fab class="primary">mail</small-fab>
  <small-fab class="green">alarm</small-fab>
</fab>
```

When used on a Page with a Layout, in order to make the FAB fixed positioned you need to make use of the `v-layout-page-sticky` Vue directive embedded in Quasar and add an absolute (not fixed) CSS Quasar Positioning class.

``` html
<fab
  v-layout-page-sticky
  class="absolute-bottom-right"
  direction="up"
  icon="add"
  active-icon="alarm"
  :click="vmActionMethod"
>
  <small-fab class="primary">mail</small-fab>
  <small-fab class="red">alarm</small-fab>
</fab>
```
