title: Modal
---
Quasar Modals slide in off screen to display a temporary UI, often used for login or signup pages, message composition, and option selection.

<input type="hidden" data-fullpage-demo="web-components/modal">

## Basic Usage
``` html
<q-modal ref="basicModal">
  <h4>Basic Modal</h4>
  <button class="primary" @click="$refs.basicModal.close()">Close</button>
</q-modal>
```

Modals are responsive to the width of the window (see demo on a desktop and resize browser window). Sometimes you need to always have a Modal maximized or always minimized. For this case, add `minimized` or `maximized` CSS class:
``` html
<q-modal class="maximized">
  ...
</q-modal>
```

## Vue Properties
| Property | Type | Description |
| --- | --- | --- |
| `position-classes` | String | Space delimited CSS classes that overwrite the default 'items-center justify-center' classes. |
| `content-css` | Object | Applies CSS style Object to Modal container. |
| `content-classes` | Object or String | Classes to apply to Modal inner content. |
| `transition` | String | Vue transition to use. Quasar comes with `q-modal` out of the box. But you can write your own Vue transitions using CSS and use them. |
| `noBackdropDismiss` | Boolean | Disable Modal dismissal by clicking/tapping on backdrop. |
| `noEscDismiss` | Boolean | Disable Modal dismissal by hitting Escape key. |
| `position` | String | Stick Modal to one of the screen edges (`top`, `right`, `bottom`, `left`). |

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
| `@escape-key` | Triggered if Modal is dismissed with Escape key on desktops. |

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

### Modal with Layout
``` html
<q-modal
  ref="layoutModal"
  :content-css="{minWidth: '80vw', minHeight: '80vh'}"
>
  <q-layout>
    <div slot="header" class="toolbar">
      <button @click="$refs.layoutModal.close()">
        <i>keyboard_arrow_left</i>
      </button>
      <q-toolbar-title :padding="1">
        Header
      </q-toolbar-title>
    </div>

    <div slot="header" class="toolbar primary">
      <q-search class="primary"></q-search>
    </div>

    <div slot="footer" class="toolbar">
      <q-toolbar-title :padding="1">
        Footer
      </q-toolbar-title>
    </div>

    <div class="layout-view">
      <div class="layout-padding">
        <h1>Modal</h1>
        <button class="primary" @click="$refs.layoutModal.close()">Close</button>
        <p class="caption" v-for="n in 15">This is a Modal presenting a Layout.</p>
      </div>
    </div>
  </q-layout>
</q-modal>
```
