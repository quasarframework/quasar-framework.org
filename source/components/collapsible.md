title: Collapsible (+ Accordion)
---
Quasar Collapsibles allow the hiding of content that is not immediately relevant to the user. Think of them as accordion elements that expand when clicked on.

They are basically QItem components wrapped with additional functionality. So they can be included in QLists and inherit QItem component properties.

<input type="hidden" data-fullpage-demo="web-components/collapsible">

## Basic Usage
``` html
<q-list>
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
</q-list>
```

### Accordion
You can group multiple Collapsibles to act as an Accordion, which is to open only one Collapsible at a time while closing the others automatically. For this, use `group` Vue property and specify a unique name within the Vue parent container of the Collapsibles.
``` html
<q-list>
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
</q-list>
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
  <q-item link ...>...</q-item>
  <q-item link ...>...</q-item>
  <q-item link ...>...</q-item>
</q-collapsible>
```

## Vue Properties
Since QCollapsible is a wrapper over QItem components, it inherits some of their properties as you can see below.

| Own Property | Type | Description |
| --- | --- | --- |
| `opened` | Boolean | Control if Collapsible is opened or not. |
| `group` | String | Unique name which allows to group multiple Collapsible so they work as an Accordion. |
| `indent` | Boolean | Indent Collapsible content. Useful when building a menu with it. |
| `icon-toggle` | Boolean | Expand/Contract only by clicking/tapping on the arrow on the right. |

QItem components inherited properties:

| Inherited Property | Type | Description |
| --- | --- | --- |
| `icon` | String | Icon to use. Either use an icon, image or avatar. |
| `image` | String | URL to image to use (point to statics). Either use an icon, image, avatar or letter. |
| `avatar` | String | URL to avatar to use (point to statics). Either use an icon, image, avatar or letter. |
| `letter` | String | One character String to define a letter.  Either use an icon, image, avatar or letter. |
| `label` | String | Label to use as title. |
| `sublabel` | String | Label to use as subtitle. |
| `label-lines` | String / Number | Number of lines the label can span to. |
| `sublabel-lines` | String / Number | Number of lines the sublabel can span to. |
| `dense` | Boolean | Use a dense QItem. |
| `sparse` | Boolean | Use a sparse QItem. |
| `multiline` | Boolean | Use a multiline QItem. Useful in cases where you use label and sublabel that spans multiple lines, but even then it's optional. |
| `delimiter` | Boolean | Use a delimiter from other QItems or QCollapsibles, just like on QItem. |
| `inset-delimiter` | Boolean | Inset delimiter, same behavior as `delimiter`. |

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
