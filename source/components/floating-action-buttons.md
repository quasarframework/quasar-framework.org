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
<quasar-fab
  classNames="purple"
  icon="keyboard_arrow_up"
  direction="up"
>
  <quasar-small-fab
    class="white"
    @click.native="someMethod()"
  >mail</quasar-small-fab>

  <quasar-small-fab
    class="white"
    @click.native="someMethod()"
  >alarm</quasar-small-fab>
</quasar-fab>
```

We'll continue describing only the expandable ones, as the non-expandable are simple circular buttons and you can read about them in the Buttons documentation page.

## Vue Properties
> These properties and methods apply to `<quasar-fab>` only.

| Vue Property | Default Value | Description |
| --- | --- | --- |
| `classNames` | "primary" | One of the main colors in Quasar Color Palette; can also be an array of colors or CSS classes. Also, any other CSS class. Space delimited String. |
| `icon` | "add" | Icon to use when not expanded |
| `direction` | "right" | The direction in which to expand; one of the following values: "up", "down", "left", "right". |
| `active-icon` | "close" | The icon to change to when expanded. |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `toggle()` | Toggle open/close state. |
| `open()` | Open FAB. |
| `close()` | Close FAB. |

## Vue Events
| Vue Method | Description |
| --- | --- |
| `@click` | Triggered when clicking/tapping on main FAB after it was already opened. |

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
  @click="alert()"
  classNames="primary"
  active-icon="alarm"
  direction="up"
  style="right: 18px; bottom: 18px;"
>
  <quasar-small-fab
    class="white"
    @click.native="someMethod()"
  >mail</quasar-small-fab>

  <quasar-small-fab
    class="white"
    @click.native="someMethod()"
  >alarm</quasar-small-fab>
</quasar-fab>
```
