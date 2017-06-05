title: Collapsible (+ Accordion)
---
Quasar Collapsibles allow the hiding of content that is not immediately relevant to the user. Think of them as accordion elements that expand when clicked on.

<input type="hidden" data-fullpage-demo="web-components/collapsible">

## Basic Usage
``` html
<div class="list">
  <q-collapsible icon="explore" label="First">
    <div>
      Content
    </div>
  </q-collapsible>
  <q-collapsible icon="perm_identity" label="Second">
    <div>
      Content
    </div>
  </q-collapsible>
  <q-collapsible icon="shopping_cart" label="Third">
    <div>
      Content
    </div>
  </q-collapsible>
</div>
```

### Accordion
You can group multiple Collapsibles to act as an Accordion, which is to open only one Collapsible at a time while closing the others automatically. For this, use `group` Vue property and specify a unique name within the Vue parent container of the Collapsibles.
``` html
<div class="list">
  <q-collapsible group="somegroup" icon="explore" label="First">
    <div>
      Content
    </div>
  </q-collapsible>
  <q-collapsible group="somegroup" icon="perm_identity" label="Second">
    <div>
      Content
    </div>
  </q-collapsible>
  <q-collapsible group="somegroup" icon="shopping_cart" label="Third">
    <div>
      Content
    </div>
  </q-collapsible>
</div>
```

You can add `item-delimiter` class on the list `<div>` element if you want separators between Collapsibles.

## Preselecting Items
Collapsible items can be opened by default:

``` html
<q-collapsible opened icon="explore" label="First">
  <div>
    Content
  </div>
</q-collapsible>

<!-- or -->
<q-collapsible :opened="boolean_variable" icon="explore" label="First">
  <div>
    Content
  </div>
</q-collapsible>
```

## Indenting Content
When you are building a complex menu (with sub-menus), like for example on a Left or Right side of QLayout, it's useful to also have some kind of left-side indentation on the Collapsible content:

```html
<q-collapsible indent icon="explore" label="First">
  <div class="item link" ...>...</div>
  <div class="item link" ...>...</div>
  <div class="item link" ...>...</div>
</q-collapsible>
```

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `opened` | Boolean | Control if Collapsible is opened or not. |
| `group` | String | Unique name which allows to group multiple Collapsible so they work as an Accordion. |
| `indent` | Boolean | Indent Collapsible content. Useful when building a menu with it. |
| `icon` | String | Icon to use. Either use an icon, image or avatar. |
| `img` | String | URL to image to use (point to statics). Either use an icon, image or avatar. |
| `avatar` | String | URL to avatar to use (point to statics). Either use an icon, image or avatar. |
| `label` | String | Label besides icon, image or avatar. |
| `icon-toggle` | Boolean | Allows user to toggle open/close state by clicking/tapping only on the Collapsible icon on the right. |
| `arrow-icon` | String | Icon on the right signaling if Collapsible is opened or closed. |

## Vue Methods
| Vue Methods | Description |
| --- | --- |
| `toggle()` | Toggle open/close state. |
| `open()` | Open it. |
| `close()` | Close it. |

## Vue Events

| Vue Method | Description |
| --- | --- |
| `@open` | Triggered after opening Collapsible. |
| `@close` | Triggered after closing Collapsible. |

## Ubiquity
Be creative. In the example below we're using a Card as Collapsible content.

``` html
<q-collapsible icon="explore" label="First Card">
  <q-card>
    <q-card-title>
      Card Title
    </q-card-title>
    <q-card-main>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </q-card-main>
  </q-card>
</q-collapsible>
```
