title: Collapsible (+ Accordion)
---
Quasar Collapsibles allow the hiding of content that is not immediately relevant to the user. Think of them as accordion elements that expand when clicked on.
<input type="hidden" data-fullpage-demo="grouping/collapsible">

They are basically QItem components wrapped with additional functionality. So they can be included in QLists and inherit QItem component properties.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QCollapsible']
}
```

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

## Vue Properties
Since QCollapsible is a wrapper over QItem components, it inherits some of their properties as you can see below.

Supports `v-model` to control the state (open/close).

| Own Property | Type | Description |
| --- | --- | --- |
| `opened` | Boolean | Control if Collapsible is opened or not when first rendered. |
| `group` | String | Unique name which allows to group multiple Collapsible so they work as an Accordion. |
| `popup` | Boolean | "Popup" mode instead of default behavior. |
| `indent` | Boolean | Indent Collapsible content. Useful when building a menu with it. |
| `icon-toggle` | Boolean | Expand/Contract only by clicking/tapping on the arrow on the right. |
| `collapse-icon` | String | Icon used instead of default arrow on the right side. |
| `header-style` | Array/String/Object | Vue style binding for header. |
| `header-class` | Array/String/Object | Vue class binding for header. |
| `disable` | Boolean | Disable current Collapsible. |
| `duration` | Number | (v0.17.13+) Toggle animation duration in milliseconds. Default: 300 |
| `tag` | Boolean | Tag to use. Default is "div". |

QItem & QItem related components inherited properties:

| Inherited Property | Type | Description |
| --- | --- | --- |
| `dark` | Boolean | Set to `true` when background is dark. |
| `icon`, `right-icon` | String | Icon to use. Either use an icon, image, avatar or letter. |
| `image`, `right-image` | String | URL to image to use (point to statics). Either use an icon, image, avatar or letter. |
| `avatar`, `right-avatar` | String | URL to avatar to use (point to statics). Either use an icon, image, avatar or letter. |
| `letter`, `right-letter` | String | One character String to define a letter. Either use an icon, image, avatar or letter. |
| `label` | String | Label to use as title. |
| `sublabel` | String | Label to use as subtitle. |
| `label-lines` | String / Number | Number of lines the label can span to. Ellipsis are used when overflowing. |
| `sublabel-lines` | String / Number | Number of lines the sublabel can span to. Ellipsis are used when overflowing. |
| `dense` | Boolean | Use a dense QItem. |
| `sparse` | Boolean | Use a sparse QItem. |
| `multiline` | Boolean | Use a multiline QItem. Useful in cases where you use label and sublabel that spans multiple lines, but even then it's optional. |
| `separator` | Boolean | Use a separator from other QItems or QCollapsibles, just like on QItem. |
| `inset-separator` | Boolean | Inset separator, same behavior as `separator`. |

### Using QCollapsible as a Router Link
*v0.17.9+*

If you want your QCollapsible to act the same as Vue's `<router-link>`, then you can use these additional properties (which work exactly the same as `<router-link>`):

| Property | Type | Description |
| --- | --- | --- |
| `to` | String / Object | Route to navigate to |
| `exact` | Boolean | Match the exact route specified (and not also its children) when adding `router-link-active` CSS class. |
| `append` | Boolean | Append route definition to current route when navigating. |
| `replace` | Boolean | Replaces current route with the new one instead of adding it to the window history queue. |

For more details on these properties, please refer to the [Vue Router documentation](http://router.vuejs.org/en/api/router-link.html).

> **NOTE**
> When you use a QCollapsible as a Router Link then the user will be able to toggle it only by clicking on the right-side icon. The rest of QCollapsible space is used to trigger the navigation.

```html
<q-collapsible to="/some/page" icon="explore" label="First">
  <div>
    Content
  </div>
</q-collapsible>
```

## Vue Methods
| Vue Methods | Description |
| --- | --- |
| `toggle()` | Toggle open/close state. |
| `show()` | Open it. |
| `hide()` | Close it. |

## Vue Events

| Vue Method | Description |
| --- | --- |
| `@show` | Triggered after opening Collapsible. |
| `@hide` | Triggered after closing Collapsible. |

## Examples

### Using a v-model
```html
<template>
  <q-collapsible
    v-model="open"
    icon="perm_identity"
    label="With a model and events"
  >
    <div>...content...</div>
  </q-collapsible>
</template>

<script>
export default {
  data () {
    return { open: true }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
</script>
```

### Custom Header
```html
<q-collapsible>
  <template slot="header">
    <q-chip color="primary" small class="q-mr-sm">
      Custom header
    </q-chip>
    <q-item-main label="using slot" />
    <q-item-side right>
      <q-icon name="star" color="red" size="24px" />
    </q-item-side>
  </template>

  <div>Collapsible content</div>
</q-collapsible>
```

### Popup Mode
```html
<q-collapsible popup icon="mail" label="Inbox" sublabel="5 unread emails">
  <div>...content...</div>
</q-collapsible>
<q-collapsible popup icon="send" label="Outbox" sublabel="Empty">
  <div>...content...</div>
</q-collapsible>
```

### Creating a Menu
```html
<q-list separator>
  <q-collapsible indent icon="mail" label="Inbox" sublabel="5 unread emails" opened>

    <q-collapsible indent icon="receipt" label="Receipts">

      <q-collapsible label="Today">
        <div>...content...</div>
      </q-collapsible>
      <q-collapsible label="Yesterday">
        <div>...content...</div>
      </q-collapsible>

    </q-collapsible>

    <q-collapsible indent icon="schedule" label="Postponed">
      <div>...content...</div>
    </q-collapsible>

  </q-collapsible>

  <q-collapsible indent icon="send" label="Outbox" sublabel="Empty">
    <q-collapsible label="Today">
      <div>...content...</div>
    </q-collapsible>
    <q-collapsible label="Yesterday">
      <div>...content...</div>
    </q-collapsible>
  </q-collapsible>

  <q-collapsible indent icon="drafts" label="Draft" sublabel="Draft a new email">
    <div>...content...</div>
  </q-collapsible>
</q-list>
```

### Preselecting Items
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

### Indenting Content
When you are building a complex menu (with sub-menus), like for example on a Left or Right side of QLayout, it's useful to also have some kind of left-side indentation on the Collapsible content:

```html
<q-collapsible indent icon="explore" label="First">
  <q-item link ...>...</q-item>
  <q-item link ...>...</q-item>
  <q-item link ...>...</q-item>
</q-collapsible>
```

### Making Use of Events
```html
<template>
  <q-collapsible
    indent
    icon="explore"
    label="Counter"
    @show="startCounting"
    @hide="stopCounting"
  >
    <div>
      <q-chip color="secondary">
        Counting: {{ counter }}
      </q-chip>
    </div>
    <div class="q-mt-md">
      Will only count when opened, using the show/hide events to control count timer.
    </div>
  </q-collapsible>
</template>

<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    startCounting () {
      this.hndl = setInterval(() => {
        this.counter++
      }, 1000)
    },
    stopCounting () {
      clearInterval(this.hndl)
    }
  }
}
</script>
```

### Ubiquity
Be creative. In the example below we're using a Card as Collapsible content.

``` html
<q-collapsible icon="explore" label="First Card" sublabel="Contains a Card">
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
