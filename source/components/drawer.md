title: Drawer
---
The Quasar Drawer (also known as a Sidebar) is the element on the left side or right side of your screen, usually used for Navigation, which gets hidden on smaller screens (and can be activated by swiping them into view from the edge of the screen or by clicking/tapping on menu buttons) and is shown alongside the page content on wide enough screens.

There are two types of Drawers: left-side or right-side. Check the HTML markup to learn how to declare each of them.

<input type="hidden" data-fullpage-demo="layout/drawer">

## Basic Usage
In your Layout template, you can declare up to two drawers, but they must differ in type (one must be left-side and one right-side) otherwise they'll be one on top of each other.

``` html
<q-layout>
  ...

  <!-- Left side Drawer -->
  <q-drawer>
    <div class="list platform-delimiter">
      <div class="list-header">
        Left Side Drawer
      </div>
      <q-drawer-link icon="mail" to="/account">Account</q-drawer-link>
      <q-drawer-link icon="alarm" to="/alarms">Alarms</q-drawer-link>
    </div>
  </q-drawer>

  <router-view class="layout-view"></router-view>

  <!--
    Right side Drawer;
    Notice the HTML Attributes on <drawer> element
  -->
  <q-drawer right-side>
    <div class="list platform-delimiter">
      <div class="list-header">
        Right Side Drawer
      </div>
      <q-drawer-link icon="mail" to="/shopping-cart">Shopping Cart</q-drawer-link>
      <q-drawer-link icon="mail" to="/weather">Weather</q-drawer-link>
    </div>
  </q-drawer>
</q-layout>
```

Specifying `right-side` attribute only places the Drawer in the right side of screen when it is hidden and can be swiped in. If the window is wide enough your Drawer will be displayed along your page view, depending on where you've included `<q-drawer>` besides `<router-view>` or `<div class="layout-view">`, which is before or after (which translates to left or right to the page view). So it is possible to place Drawer content on the left side on wide enough windows and on right-side (waiting to be swiped in) on smaller windows.

## Vue Properties
| Property | Type | Description |
| --- | --- | --- |
| `right-side` | Boolean | (Optional) User can swipe the Drawer into view from the right side of the screen. |
| `swipe-only` | Boolean | (Optional) By default, Drawers get hidden on smaller screens but they get displayed on wide enough ones. Adding `swipe-only` attribute makes the Drawer hidden on bigger screens too. Rest assured, in this case the user can still bring them into view by swiping on the edge of the screen or by clicking/tapping on menu buttons. |
| `backdrop-opacity` | Number | Specify opacity for the backdrop as a floating Number between 0 and 1. |

## Vue Methods
| Method | Params | Description |
| --- | --- | --- |
| `open()` | Optional Func `done` | Open Drawer (when on narrow window). |
| `close()` | Optional Func `done` | Close Drawer (when on narrow window). |
| `toggle()` | Optional Func `done`| Toggle open/close Drawer (when on narrow window). |
| `setState` | Boolean `state`, Func `done` | Open or close (based on truthiness of `state`) Drawer and execute optional `done` method. |

## Drawer Content
The Drawer component gets along very well with [Quasar Lists](/components/list.html). You can use Lists to define the contents of the Drawer. To differentiate how a Drawer List looks like, use the special CSS class `platform-delimiter` on the list DOM node.

``` html
<div class="list platform-delimiter">
  ...
</div>
```

There's also a helper Web Component called `<q-drawer-link>` which generates under the covers the HTML for a List item that represents a link. Handle click/tap events with `v-link` Vue Router directive.

Best use `<q-drawer-link>` inside of a List. It has two Vue props: `icon` and `to` (which can be used as you would with a `v-link`; documentation on `v-link` can be read [here](/api/js-other-directives.html#Directive-“v-link”)).

``` html
<q-drawer-link
  icon="help"
  :to="{path: '/home/help', exact: true}"
>
  Help!
</q-drawer-link>
```

Notice the `icon` attribute which also adds an icon to your link list item.

## Ways to Open the Drawer
As you read above, the Drawer can be brought into view by either swiping from the edge of the screen or by clicking on menu buttons.

You can make DOM elements open a drawer. Place a reference on the Drawer and then call "open()" method on a DOM element (usually a button) which will open it.

``` html
<button
  class="hide-on-drawer-visible"
  @click="$refs.drawer.open()"
>
  <i>menu</i>
</button>

<q-drawer ref="drawer">
  ...
</q-drawer>
```

> Notice the CSS class `hide-on-drawer-visible` which automatically hides the button when Drawer is already visible on screen (like on wide enough windows) and hides it back when screen is narrow.

From a user's perspective, it's best to put those DOM elements that open up drawers in a Layout header Toolbar. Quick example below.
``` html
<q-layout>
  ...
  <div slot="header" class="toolbar">
    <button
      class="hide-on-drawer-visible"
      @click="$refs.drawer.open()"
    >
      <i>menu</i>
    </button>
  </div>
  ...
</q-layout>
```
