title: Modal
---
Quasar Modals slide in off screen to display a temporary UI, often used for login or signup pages, message composition, and option selection.

<input type="hidden" data-fullpage-demo="web-components/modal">

## Basic Usage
``` html
<quasar-modal ref="basicModal">
  <h4>Basic Modal</h4>
  <button class="primary" @click="$refs.basicModal.close()">Close</button>
</quasar-modal>
```

Modals are responsive to the width of the window (see demo on a desktop and resize browser window). Sometimes you need to always have a Modal maximized or always minimized. For this case, add `minimized` or `maximized` CSS class:
``` html
<quasar-modal class="maximized">
  ...
</quasar-modal>
```

## Vue Properties
| Property | Type | Description |
| --- | --- | --- |
| `position-classes` | String | Space delimited CSS classes that overwrite the default 'items-center justify-center' classes. |
| `content-css` | Object | Applies CSS style Object to Modal container. |
| `transition` | String | Vue transition to use. Quasar comes with `quasar-modal` out of the box. But you can write your own Vue transitions using CSS and use them. |

## Vue Methods
| Method | Description |
| --- | --- |
| `open` | Open Modal. Takes one optional Function parameter to trigger after Modal is opened. |
| `close` | Close Modal. Takes one optional Function parameter to trigger after Modal is closed. |

## Vue Events
| Event Name | Description |
| --- | --- |
| `@open` | Triggered right after Modal is opened. |
| `@close` | Triggered right after Modal is closed. |
| `@escape-key` | Triggered if Modal is dismissed with Escape key on desktops. |

## Examples

### Capturing Events
``` html
<quasar-modal
  @open="notify('open')"
  @escape-key="notify('escape-key')"
  @close="notify('close')"
>
  ...
</quasar-modal>
```
### Styling Modal
``` html
<quasar-modal :content-css="{padding: '50px'}">
  ...
</quasar-modal>
```

### Modal with Layout
``` html
<quasar-modal
  ref="layoutModal"
  :content-css="{minWidth: '80vw', minHeight: '80vh'}"
>
  <quasar-layout>
    <div slot="header" class="toolbar">
      <button @click="$refs.layoutModal.close()">
        <i>keyboard_arrow_left</i>
      </button>
      <quasar-toolbar-title :padding="1">
        Header
      </quasar-toolbar-title>
    </div>

    <div slot="header" class="toolbar primary">
      <quasar-search class="primary"></quasar-search>
    </div>

    <div slot="footer" class="toolbar">
      <quasar-toolbar-title :padding="1">
        Footer
      </quasar-toolbar-title>
    </div>

    <div class="layout-view">
      <div class="layout-padding">
        <h1>Modal</h1>
        <button class="primary" @click="$refs.layoutModal.close()">Close</button>
        <p class="caption" v-for="n in 15">This is a Modal presenting a Layout.</p>
      </div>
    </div>
  </quasar-layout>
</quasar-modal>
```
