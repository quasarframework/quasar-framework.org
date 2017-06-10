title: Modal
---
The Quasar Modal component is a UI overlay, which offers extended screen space to allow the user to get more work done. Modals are used for such things as login or signup dialogs, for message composition windows or extended option selections, like offering a list of users to be friends with.

<input type="hidden" data-fullpage-demo="web-components/modal">

## Basic Usage
Below you'll find the code to a very basic modal:

``` html
<q-modal ref="basicModal">
  <h4>Basic Modal</h4>
  <button class="primary" @click="$refs.basicModal.close()">Close</button>
</q-modal>
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
| `content-css` | Object | Applies CSS style Object to Modal container. |
| `content-classes` | Object or String | Classes to apply to Modal inner content. |
| `transition` | String | Vue transition to use. Quasar comes with a `q-modal` transition out of the box. But you can write your own Vue transitions using CSS and use them. |
| `noBackdropDismiss` | Boolean | Disable Modal dismissal by clicking/tapping on backdrop. |
| `noEscDismiss` | Boolean | Disable Modal dismissal by hitting Escape key. |
| `position` | String | Stick Modal to one of the screen edges (`top`, `right`, `bottom`, `left`). |
| `position-classes` | String | Space delimited CSS classes that overwrite the default 'items-center justify-center' classes. Gets overridden by `position` if present. |
| `minimized` | Boolean | Always minimized regardless of screen width. |
| `maximized` | Boolean | Always maximized regardless of screen width. |
| `enterClass` | String | enter transition class name |
| `leaveClass` | String | leave transition class name |

## Vue Methods

| Method | Description |
| --- | --- |
| `open` | Open Modal. Takes one optional Function parameter to trigger after Modal is opened. |
| `close` | Close Modal. Takes one optional Function parameter to trigger after Modal is closed. |
| `toggle` | Toggle open/close Modal state. Takes one optional Function parameter to trigger after Modal is toggled. |

## Vue Events

| Event Name | Description |
| --- | --- |
| `@open` | Triggered right after Modal is opened. |
| `@close` | Triggered right after Modal is closed. |
| `@escape-key` | Triggered if the Modal is dismissed with the Escape key on desktops. |

## Examples

### Capturing Events
``` html
<q-modal
  @open="notify('open')"
  @escape-key="notify('escape-key')"
  @close="notify('close')"
>
  ...
</q-modal>
```
### Styling Modal
``` html
<q-modal :content-css="{padding: '50px'}">
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
> Do **NOT** use QLayout inside a QModal. Instead, use the simplified QMoadlLayout.

``` html
<q-modal ref="layoutModal" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
  <q-modal-layout>
    <q-toolbar slot="header">
      <q-btn flat @click="$refs.layoutModal.close()">
        <q-icon name="keyboard_arrow_left" />
      </q-btn>
      <div class="q-toolbar-title">
        Header
      </div>
    </q-toolbar>

    <q-toolbar slot="header">
      <q-search inverted v-model="search" color="none" />
    </q-toolbar>

    <q-toolbar slot="footer">
      <div class="q-toolbar-title">
        Footer
      </div>
    </q-toolbar>

    <div class="layout-padding">
      <h1>Modal</h1>

      <q-btn color="primary" @click="$refs.layoutModal.close()">Close</q-btn>
      <p class="caption" v-for="n in 15">This is a Modal presenting a Layout.</p>
    </div>
  </q-modal-layout>
</q-modal>
```

## QModalLayout

QModalLayout has two slots (`header` and `footer`) and the following properties which can be either String, Object or Array:

| Property | Description |
| --- | --- | --- |
| `header-style` | Style applied to header. |
| `header-class` | CSS classes applied to header. |
| `content-style` | Style applied to content (between header and footer). |
| `content-class` | CSS classes applied to content (between header and footer). |
| `footer-style` | Style applied to footer. |
| `footer-class` | CSS classes applied to footer. |

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
