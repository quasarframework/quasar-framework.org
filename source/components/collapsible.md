title: Collapsibles
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

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `opened` | Boolean | Control if Collapsible is opened or not. |
| `icon` | String | Icon to use. Either use an icon, image or avatar. |
| `img` | String | URL to image to use. Either use an icon, image or avatar. |
| `avatar` | String | URL to avatar to use. Either use an icon, image or avatar. |
| `label` | String | Label besides icon, image or avatar. |
| `icon-toggle` | Boolean | Allows user to toggle open/close state by clicking/tapping only on the Collapsible icon on the right. |

## Vue Methods
| Vue Methods | Description |
| --- | --- |
| `toggle()` | Toggle open/close state. |
| `open()` | Open it. |
| `close()` | Close it. |

## Ubiquity
Be creative. In the example below we're using a Card as Collapsible content.

``` html
<q-collapsible icon="explore" label="First Card">
  <div class="card bg-primary text-white">
    <div class="card-title">
      Card Title
    </div>
    <div class="card-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
  </div>
</q-collapsible>
```
