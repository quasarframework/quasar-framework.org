title: Floating Action Buttons
---
A Quasar Floating Action Button (FAB) represents the primary action in an App Page. But, it's not limited to only a single action. It can contain any number of sub-actions too. And more importantly, it can also be used inline in your Pages or Layouts.

<input type="hidden" data-fullpage-demo="web-components/fab">

## Basic Usage

There are two types of FABs: expandable (has sub-actions) and non-expandable. **If you want a non-expandable FAB, [all you need is a circular button](/components/buttons.html)**. 


``` html
<!-- Non-expandable -->
<button round color="primary" @click="method()">
  Button label
</button>

<!-- Expandable -->
<q-fab
  classNames="purple"
  icon="keyboard_arrow_up"
  direction="up"
>
  <q-small-fab
    class="white"
    @click.native="someMethod()"
    icon="mail"
  ></q-small-fab>

  <q-small-fab
    class="white"
    @click.native="someMethod()"
    icon="alarm"
  ></q-small-fab>
</q-fab>
```

We'll continue describing only the expandable FAB, as the non-expandable FAB is, as mentioned above, a simple [round button](/components/buttons.html).

## Vue Properties
> These properties and methods apply to `<q-fab>` only.

| Vue Property | Type | Default Value | Description |
| --- | --- | --- |
| `icon` | String | "add" | Icon to use when not expanded |
| `direction` | String | "right" | The direction in which to expand; one of the following values: "up", "down", "left", "right". |
| `active-icon` | String | "close" | The icon to change to when expanded. |
| `outline` | Boolean | n/a | Set true, for an outlined button. |
| `push` | Boolean | n/a | Set true, for a push styled button. |
| `flat` | Boolean | n/a | Set true, for a flat styled button. |
| `color` | String | n/a | The color of the button. |

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

## Fixed Positioning

In order to position the FAB, you can use the [Quasar CSS Fixed Positioning](/api/css-positioning.html) classes.

``` html
<!-- button positioned bottom right -->
<button
  color="primary" round class="fixed-bottom-right"
  @click="method()"
>
  Button label
</button>

<q-fab
  class="fixed"
  style="right: 18px; bottom: 18px;"
  @click="alert()"
  color="primary"
  active-icon="alarm"
  direction="up"
>
  <q-small-fab
    class="white"
    @click="someMethod()"
    icon="mail"
  ></q-small-fab>

  <q-small-fab
    class="white"
    @click="someMethod()"
    icon="alarm"
  ></q-small-fab>
</q-fab>
```
**Note**
Also notice additions like `style="right: 18px; bottom: 10px"` in the example above. This is adding padding to the button, so it isn't directly in the bottom left corner of the screen. 

If you are using `q-layout` you can also wrap the FAB in a `q-fixed-position` component to get the same positioning effect. 

## The Sub-Actions `<q-small-fab>`
The cool bit about FABs is, they give the user the ability to select from a number of actions. These actions can be offered through a list of `q-small-fab` components witin the FAB component. 

## Basic Usage

``` html
<!-- a q-fab with two actions -->
<q-fab
  color="purple"
  icon="keyboard_arrow_up"
  direction="up"
>
  <q-small-fab
    class="white"
    @click="someMethod()"
    icon="mail"
  ></q-small-fab>

  <q-small-fab
    class="white"
    @click="someMethod()"
    icon="alarm"
  ></q-small-fab>
</q-fab>

```

## Vue Properties
> These properties and methods apply to `<q-small-fab>` only.

| Vue Property | Type | Default Value | Description |
| --- | --- | --- |
| `icon` | String | "add" | Icon to use when not expanded |
| `outline` | Boolean | n/a | Set true, for an outlined button. |
| `push` | Boolean | n/a | Set true, for a push styled button. |
| `flat` | Boolean | n/a | Set true, for a flat styled button. |
| `color` | String | n/a | The color of the button. |

## Vue Events
| Vue Method | Description |
| --- | --- |
| `@click` | Triggered when clicking/tapping on the small fab. |

**Note**
Clicking on a `q-small-fab' will automatically close the list of sub-actions and return the FAB to its original state.

## Labeling the FAB Actions with Tooltips
You can also add labels to the actions with a Tooltip. Below is an example of how to do this.

```HTML
<q-fab
  color="primary"
  active-icon="alarm"
  direction="right"
  class="fixed"
  style="top: 10px; left: 10px"
>
  <q-small-fab color="purple" @click="toast('mail')" icon="mail">
    <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">Mail</q-tooltip>
  </q-small-fab>
  <q-small-fab color="secondary" @click="toast('alarm')" icon="alarm">
    <q-tooltip anchor="center left" self="center right" :offset="[20, 0]">Alarm</q-tooltip>
  </q-small-fab>
</q-fab>
```

For more information about Tooltips, please refer to the [Tooltip documentation](/components/tooltip.html).
