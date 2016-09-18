title: Collapsibles
---
Quasar Collapsibles allow the hiding of content that is not immediately relevant to the user. Think of them as accordion elements that expand when clicked on.

<input type="hidden" data-fullpage-demo="web-components/collapsible">

## Basic Usage
``` html
<div class="list">
  <quasar-collapsible icon="explore" label="First">
    <div>
      Content
    </div>
  </quasar-collapsible>
  <quasar-collapsible icon="perm_identity" label="Second">
    <div>
      Content
    </div>
  </quasar-collapsible>
  <quasar-collapsible icon="shopping_cart" label="Third">
    <div>
      Content
    </div>
  </quasar-collapsible>
</div>
```

You can add `item-delimiter` class on the list `<div>` element if you want separators between Collapsibles.

## Preselecting Items
Collapsible items can be opened by default:

``` html
<quasar-collapsible active icon="explore" label="First">
  <div>
    Content
  </div>
</quasar-collapsible>

<!-- or -->
<quasar-collapsible :active="boolean_variable" icon="explore" label="First">
  <div>
    Content
  </div>
</quasar-collapsible>
```

## Properties & Methods

Properties:

| Vue Property | Type | Description |
| --- | --- | --- |
| `active` | Boolean | Control if Collapsible is opened or not. |
| `icon` | String | Icon to use. Either use an icon, image or avatar. |
| `img` | String | URL to image to use. Either use an icon, image or avatar. |
| `avatar` | String | URL to avatar to use. Either use an icon, image or avatar. |
| `label` | String | Label besides icon, image or avatar. |

Methods:

| Vue Methods | Description |
| --- | --- |
| `toggle` | Toggle open/close state. |

## Ubiquity
Be creative. In the example below we're using a Card as Collapsible content.

``` html
<quasar-collapsible icon="explore" label="First Card">
  <div class="card bg-primary text-white">
    <div class="card-title">
      Card Title
    </div>
    <div class="card-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
  </div>
</quasar-collapsible>
```
