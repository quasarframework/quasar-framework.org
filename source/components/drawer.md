title: Drawer
---
The Quasar Drawer (also known as a Sidebar) is the element on the left side or right side of your screen, usually used for Navigation, which gets hidden on smaller screens (and can be activated by swiping them into view from the edge of the screen or by clicking/tapping on menu buttons) and is shown alongside the page content on wide enough screens.

There are two types of Drawers: left-side or right-side. Check the HTML markup to learn how to declare each of them.

<input type="hidden" data-fullpage-demo="layout/drawer">

## Basic Usage
In your Layout template, you can declare up to two drawers, but they must differ in type (one must be left-side and one right-side) otherwise they'll be one on top of each other.

``` html
<quasar-layout>
  ...

  <!-- Left side Drawer -->
  <quasar-drawer>
    <div class="list platform-delimiter">
      <div class="list-header">
        Left Side Drawer
      </div>
      <quasar-drawer-link icon="mail" to="/account" exact>Account</quasar-drawer-link>
      <quasar-drawer-link icon="alarm" to="/alarms" exact>Alarms</quasar-drawer-link>
    </div>
  </quasar-drawer>

  <router-view class="layout-view"></router-view>

  <!--
    Right side Drawer;
    Notice the HTML Attributes on <drawer> element
  -->
  <quasar-drawer right-side>
    <div class="list platform-delimiter">
      <div class="list-header">
        Right Side Drawer
      </div>
      <quasar-drawer-link icon="mail" to="/shopping-cart" exact>Shopping Cart</quasar-drawer-link>
      <quasar-drawer-link icon="mail" to="/weather" exact>Weather</quasar-drawer-link>
    </div>
  </quasar-drawer>
</quasar-layout>
```

Specifying `right-side` attribute only places the Drawer in the right side of screen when it is hidden and can be swiped in. If the window is wide enough your Drawer will be displayed along your page view, depending on where you've included `<quasar-drawer>` besides `<router-view>` or `<div class="layout-view">`, which is before or after (which translates to left or right to the page view). So it is possible to place Drawer content on the left side on wide enough windows and on right-side (waiting to be swiped in) on smaller windows.

## Vue Properties
| Property | Description |
| --- | --- |
| `right-side` | User can swipe the Drawer into view from the right side of the screen. |
| `swipe-only` | By default, Drawers get hidden on smaller screens but they get displayed on wide enough ones. Adding `swipe-only` attribute makes the Drawer hidden on bigger screens too. Rest assured, in this case the user can still bring them into view by swiping on the edge of the screen or by clicking/tapping on menu buttons. |

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

There's also a helper Web Component called `<quasar-drawer-link>` which generates under the covers the HTML for a List item that represents a link. Handle click/tap events with `v-link` Vue Router directive.

Best use `<quasar-drawer-link>` inside of a List. Use it just like you would with a `<router-link>` component, except you can also specify an `icon` as property.

``` html
<quasar-drawer-link
  icon="help"
  to="/home/help"
  exact
>
  Help!
</quasar-drawer-link>
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

<quasar-drawer ref="drawer">
  ...
</quasar-drawer>
```

> Notice the CSS class `hide-on-drawer-visible` which automatically hides the button when Drawer is already visible on screen (like on wide enough windows) and hides it back when screen is narrow.

From a user's perspective, it's best to put those DOM elements that open up drawers in a Layout header Toolbar. Quick example below.
``` html
<quasar-layout>
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
</quasar-layout>
```
