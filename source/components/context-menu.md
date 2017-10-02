title: Context Menu
---
This component allows you to display a context menu (popup) instead of the default browser one when user performs a right-click (or long tap on touch capable devices).

<input type="hidden" data-fullpage-demo="navigation/context-menu">

## Basic Usage
Context menus can contain anything. In the example below, we display a menu.

``` html
<q-context-menu ref="context">
  <q-list link separator style="min-width: 150px; max-height: 300px;">
    <q-item @click="showToast(), $refs.context.close()">
      <q-item-main label="Label" sublabel="Value" />
    </q-item>

    <q-item @click="showOtherToast(), $refs.context.close()">
      <q-item-main label="Other Label" sublabel="Other Value" />
    </q-item>
  </q-list>
</q-context-menu>
```

The position of the popup is calculated so that it will be displayed on the available screen real estate, switching sides (right/left and/or top/bottom) when necessary.
Clicking/Tapping outside of the popup will close the Context Menu.

> Use a Vue reference on `<q-context-menu>` to call `close()` method if you want an element to be able to close the Context Menu.

> **IMPORTANT**
> When on a mobile device and user hits the phone/tablet back button, the Context Menu will get closed automatically.
> When on a desktop browser and user hits the &lt;ESCAPE&gt; key, the Context Menu will get close automatically.

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `disable` | Boolean | Disabled or not |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `close()` | Close Context Menu |

## Vue Events
| Vue Method | Description |
| --- | --- |
| `@open` | Triggered when showing up. |
| `@close` | Triggered when closing/hiding. |
