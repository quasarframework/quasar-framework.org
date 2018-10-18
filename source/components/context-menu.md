title: Context Menu
---
This component allows you to display a context menu (popup) instead of the default browser one when user performs a right-click (or long tap on touch capable devices).
<input type="hidden" data-fullpage-demo="navigation/context-menu">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QContextMenu'],
  directives: ['CloseOverlay']
}
```

## Basic Usage
Context menus can contain anything. In the example below, we display a menu.

``` html
<q-context-menu>
  <q-list link separator style="min-width: 150px; max-height: 300px;">
    <q-item v-close-overlay @click.native="showToast()">
      <q-item-main label="Label" sublabel="Value" />
    </q-item>

    <q-item v-close-overlay @click.native="showOtherToast()">
      <q-item-main label="Other Label" sublabel="Other Value" />
    </q-item>
  </q-list>
</q-context-menu>
```

The position of the popup is calculated so that it will be displayed on the available screen real estate, switching sides (right/left and/or top/bottom) when necessary.
Clicking/Tapping outside of the popup will close the Context Menu.

> Notice the "v-close-overlay" directive. When applied to any element within a popup (Popover, Modal) like in this case, it closes it.

> **IMPORTANT**
> When on a mobile app and user hits the phone/tablet back button, the Context Menu will get closed automatically.
> When on a desktop browser and user hits the &lt;ESCAPE&gt; key, the Context Menu will get close automatically.

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `disable` | Boolean | Disabled or not |

QContextMenu also supports a Boolean 'v-model' which controls the open/close state.

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `show()` | Open Context Menu |
| `hide()` | Close Context Menu |

Note that you need to pass the original DOM event to the show() method as the first argument to have the context menu show  correctly.

## Vue Events
| Vue Method | Description |
| --- | --- |
| `@show` | Triggered when showing up. |
| `@hide` | Triggered when closing/hiding. |
