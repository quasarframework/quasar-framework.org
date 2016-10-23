title: Context Menu
---
This component allows you to display a context menu (popup) instead of the default one when user performs a right-click.

> On a real mobile device a minimized Modal is displayed trigger by a long tap.

<input type="hidden" data-fullpage-demo="web-components/context-menu">

## Basic Usage
``` html
<quasar-context-menu ref="context">
  <div
    class="list highlight"
    style="min-width: 150px; max-height: 300px;"
  >
    <div
      class="item item-link two-lines item-delimiter"
      v-for="n in 10"
      @click="showToast(), $refs.context.close()"
    >
      <div class="item-content">
        <div>Label</div>
        <div>Value</div>
      </div>
    </div>
  </div>
</quasar-context-menu>
```

The position of the menu/popup is calculated so that it will be displayed on the available screen real estate, switching to right-side and/or top-side when necessary.

On a mobile device, clicking outside of the minimized Modal will close the Context Menu.

> Use a Vue reference on `<quasar-context-menu>` to call `close()` method if you want an element to be able to close the Context Menu.

> **IMPORTANT**
> <br>When on a mobile device and user hits the phone/tablet back button, the Context Menu will get closed automatically.
> <br>When on a desktop browser and user hits the &lt;ESCAPE&gt; key, the Context Menu will get close automatically.

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `disable` | Boolean | Disabled or not |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `close()` | Close Context Menu |
