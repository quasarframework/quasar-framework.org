title: Floating Action Buttons
---
A Quasar Floating Action Button (FAB) represents the primary action in an App Page. But, it's not limited to only a single action. It can contain any number of sub-actions too. And more importantly, it can also be used inline in your Pages or Layouts.
<input type="hidden" data-fullpage-demo="layout/floating-action-button">

Note that you don't need a QLayout to use FABs.

## Basic Usage

There are two types of FABs: expandable (has sub-actions) and non-expandable.

### Non-Expandable
If you want a non-expandable FAB, [all you need is a round button](/components/button.html) -- wrapped in [QFixedPosition](/components/fixed-positioning-on-layout.html) if used on a QLayout.

```html
<!-- Non-expandable without being on a QLayout -->
<q-btn
  round
  color="primary"
  @click="method"
  class="fixed"
  style="right: 18px; bottom: 18px"
>
  <q-icon name="mail" />
</q-btn>

<!-- Non-expandable on a QLayout -->
<q-fixed-position corner="bottom-right" :offset="[18, 18]">
  <q-btn round color="primary" @click="method">
    <q-icon name="mail" />
  </q-btn>
</q-fixed-position>
```

### Expandable
Expandable FABs are defined by two components: QFab (parent) and QFabAction (children).
```html
<!-- Expandable -->
<q-fab
  color="purple"
  icon="keyboard_arrow_up"
  direction="up"
>
  <q-fab-action
    color="primary"
    @click="someMethod"
    icon="mail"
  />

  <q-fab-action
    color="secondary"
    @click="someMethod"
    icon="alarm"
  />
</q-fab>

<!-- Expandable, fixed position without a QLayout -->
<q-fab
  class="fixed"
  style="right: 18px; bottom: 18px"
  color="primary"
  icon="wifi"
>....</q-fab>

<!-- Expandable, fixed position on a QLayout -->
<q-fixed-position corner="bottom-right" :offset="[18, 18]">
  <q-fab
    color="primary"
    icon="wifi"
  >....</q-fab>
</q-fixed-position>
```

We'll continue describing only the expandable FAB, as the non-expandable FAB is, as mentioned above, a simple [round button](/components/button.html).

## Toggle through v-model
``` html
<template>
  <div>
    <q-btn color="primary" @click="open = true" label="Show" />
    <q-btn color="primary" @close="open = false" label="Hide" />

    <q-fab
      v-model="open"
      color="primary"
      icon="wifi"
    >....</q-fab>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: false
    }
  }
}
</script>
```

## Labeling with Tooltips
Notice `slot="tooltip"` for the Tooltip on main button and where are the Tooltips placed for the Fab action buttons.
```html
<q-fab
  color="primary"
  active-icon="alarm"
  direction="up"
>
  <q-tooltip
    slot="tooltip"
    anchor="center left"
    self="center right"
    :offset="[20, 0]"
  >
    Tooltip in FAB
  </q-tooltip>

  <q-fab-action color="purple" @click="toast('mail')" icon="mail">
    <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">Mail</q-tooltip>
  </q-fab-action>
  <q-fab-action color="secondary" @click="toast('alarm')" icon="alarm">
    <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">Alarm</q-tooltip>
  </q-fab-action>
</q-fab>
```

For more information about Tooltips, please refer to the [Tooltip documentation](/components/tooltip.html).

## QFab (Parent)

### QFab Vue Properties

| Vue Property | Type | Default Value | Description |
| --- | --- | --- |
| `color` | String | n/a | The color of the button, from [Quasar Color Palette](/components/color-palette.html). |
| `direction` | String | "right" | The direction in which to expand; one of the following values: "up", "down", "left", "right". |
| `icon` | String | "add" | Icon to use when not expanded |
| `active-icon` | String | "close" | The icon to change to when expanded. |
| `outline` | Boolean | n/a | Set true, for an outlined button. |
| `push` | Boolean | n/a | Set true, for a push styled button. |
| `flat` | Boolean | n/a | Set true, for a flat styled button. |
| `glossy` | Boolean | n/a | Make button "glossy". |

### QFab Vue Methods
| Vue Method | Description |
| --- | --- |
| `toggle()` | Toggle open/close state. |
| `open()` | Open FAB. |
| `close()` | Close FAB. |

### QFab Vue Events
| Vue Method | Description |
| --- | --- |
| `@open` | Triggered when clicking/tapping on main FAB to open it. |
| `@close` | Triggered when clicking/tapping on main FAB to close it. |
| `@click` | Triggered when clicking/tapping on main FAB after it was already opened. |

## QFabAction (Child)
The cool bit about FABs is, they give the user the ability to select from a number of actions. These actions can be offered through a list of `q-fab-action` components witin the FAB component.

### Basic Usage

``` html
<!-- a q-fab with two actions -->
<q-fab
  color="purple"
  icon="keyboard_arrow_up"
  direction="up"
>
  <q-fab-action
    class="white"
    @click="someMethod()"
    icon="mail"
  />

  <q-fab-action
    class="white"
    @click="someMethod()"
    icon="alarm"
  />
</q-fab>
```

### QFabAction Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `color` | String | The color of the button. |
| `icon` | String | The icon of the button. |
| `outline` | Boolean | Set true, for an outlined button. |
| `push` | Boolean | Set true, for a push styled button. |
| `flat` | Boolean | Set true, for a flat styled button. |
| `glossy` | Boolean | Make button "glossy". |

### QFabAction Vue Events
| Vue Method | Description |
| --- | --- |
| `@click` | Triggered when clicking/tapping on the small fab. |

> **Note**
> Clicking on a QFabAction will automatically close the list of sub-actions and return the FAB to its original state.
