title: Modal
---
The Quasar Modal component is a UI overlay, which offers extended screen space to allow the user to get more work done. Modals are used for such things as login or signup dialogs, for message composition windows or extended option selections, like offering a list of users to be friends with.
<input type="hidden" data-fullpage-demo="popups/modal">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QModal'],

  // optional if you want to use
  // directive `v-close-overlay`
  directives: ['CloseOverlay']
}
```

## Basic Usage
Below you'll find the code to a very basic modal:

``` html
<template>
  <q-modal v-model="opened">
    <h4>Basic Modal</h4>
    <q-btn
      color="primary"
      @click="opened = false"
      label="Close"
    />
  </q-modal>
</template>

<script>
export default {
  data () {
    return {
      opened: false
    }
  }
}
</script>
```

Modals are responsive to the width of the window (see demo on a desktop and resize browser window). Sometimes you need to always have a Modal maximized or minimized regardless of window width, so to do this, Quasar offers the `minimized` and `maximized` props:

``` html
<q-modal maximized>
  ...
</q-modal>
```

## Vue Properties

| Property | Type | Description |
| --- | --- | --- |
| `minimized` | Boolean | Always minimized regardless of screen width. |
| `maximized` | Boolean | Always maximized regardless of screen width. |
| `no-route-dismiss` | Boolean | By default, when route changes, the modal gets closed. This prop inhibits the behavior. |
| `no-esc-dismiss` | Boolean | Disable Modal dismissal by hitting Escape key. |
| `no-backdrop-dismiss` | Boolean | Disable Modal dismissal by clicking/tapping on backdrop. |
| `content-css` | Object/Array/String | Applies CSS style to Modal container. Use Object or Array of Object when also specifying `position` prop. |
| `content-classes` | Object/Array/String | Classes to apply to Modal inner content. |
| `position` | String | Stick Modal to one of the screen edges (`top`, `right`, `bottom`, `left`). |
| `position-classes` | String | Space delimited CSS classes that overwrite the default 'items-center justify-center' classes. Gets overridden by `position` if present. |
| `transition` | String | Vue transition to use. Quasar comes with a `q-modal` transition out of the box. But you can write your own Vue transitions using CSS and use them. |
| `enter-class` | String | enter transition class name |
| `leave-class` | String | leave transition class name |
| `no-refocus` | Boolean | (v0.17+) By default, when closing the Modal, the previous focused element gets focused again. When property is set to `true` it disables this behaviour. |

## Vue Methods
| Method | Description |
| --- | --- |
| `show` | Open Modal. Takes one optional Function parameter to trigger after Modal is opened. |
| `hide` | Close Modal. Takes one optional Function parameter to trigger after Modal is closed. |
| `toggle` | Toggle open/close Modal state. Takes one optional Function parameter to trigger after Modal is toggled. |

## Vue Events

| Event Name | Description |
| --- | --- |
| `@show` | Triggered right after Modal is opened. |
| `@hide` | Triggered right after Modal is closed. |
| `@escape-key` | Triggered if the Modal is dismissed with the Escape key on desktops. |

## Examples

### Styling Modal
``` html
<q-modal content-css="padding: 50px">
  ...
</q-modal>
```

### Sticking Modal to an Edge
``` html
<q-modal position="left">
  ...
</q-modal>
```

### Modal with Layout

When making layout inside a modal, Quasar has a special component called **QModalLayout** (described in next section), which takes care of any needed structure.
> Do **NOT** use QLayout inside a QModal. Instead, use the simplified QModalLayout.

``` html
<q-modal v-model="opened" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
  <q-modal-layout>
    <q-toolbar slot="header">
      <q-btn
        flat
        round
        dense
        v-close-overlay
        icon="keyboard_arrow_left"
      />
      <q-toolbar-title>
        Header
      </q-toolbar-title>
    </q-toolbar>

    <q-toolbar slot="header">
      <q-search inverted v-model="search" color="none" />
    </q-toolbar>

    <q-toolbar slot="footer">
      <q-toolbar-title>
        Footer
      </q-toolbar-title>
    </q-toolbar>

    <div class="layout-padding">
      <h1>Modal</h1>

      <q-btn
        color="primary"
        v-close-overlay
        label="Close"
      />

      <p>This is a Modal presenting a Layout.</p>
    </div>
  </q-modal-layout>
</q-modal>
```

## QModalLayout

QModalLayout has two slots (`header` and `footer`) and the following properties which can be either String, Object or Array:

| Property | Type | Description |
| --- | --- | --- |
| `header-style` | String/Object/Array | Style applied to header. |
| `header-class` | String/Object/Array | CSS classes applied to header. |
| `content-style` | String/Object/Array | Style applied to content (between header and footer). |
| `content-class` | String/Object/Array | CSS classes applied to content (between header and footer). |
| `footer-style` | String/Object/Array | Style applied to footer. |
| `footer-class` | String/Object/Array | CSS classes applied to footer. |

Example:

```html
<q-modal .....>
  <q-modal-layout
    header-style="min-height: 100px"
    content-class="{'bg-primary': isPrimary, 'some-class': someBoolean}"
    footer-class="bg-primary some-class"
    footer-style="{fontSize: '24px', fontWeight: 'bold'}"
  >
    <!--
      inject header and/or footer slots here
      examples:
          1. <div slot="header">...</div>
          2. <q-toolbar slot="header">...</q-toolbar>
    -->
    ...

    <!--
      all other elements not using header or footer slot
      is considered content
    -->
    ....
  </q-modal-layout>
</q-modal>
```
