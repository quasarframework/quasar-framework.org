title: Context Menu
---
This component allows you to display a context menu (popup) instead of the default one when user performs a right-click.

> On a real mobile device a minimized Modal is displayed trigger by a long tap.

<input type="hidden" data-fullpage-demo="web-components/context-menu">

## Basic Usage
``` html
<quasar-context-menu v-ref:context>
  <div class="list item-delimiter highlight">
    <div
      class="item item-link"
      v-for="n in 30"
      @click="yourMethod(), $refs.context.close()"
    >
      <div class="item-content">
        <div class="item-label">Label</div>
        <div class="item-value">Value</div>
      </div>
    </div>
  </div>
</quasar-context-menu>
```

The position of the menu/popup is calculated so that it will be displayed on the available screen real estate, switching to right-side and/or top-side when necessary.

On a mobile device, clicking outside of the minimized Modal will close the Context Menu.

> Use a Vue reference on `<quasar-context-menu>` to call `close()` method if you want an element to be able to close the Context Menu.

> **IMPORTANT**
> When on a mobile device and user hits the phone/tablet back button, the Context Menu will get closed automatically.
