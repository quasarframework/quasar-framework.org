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
      <quasar-drawer-link page="my-account"></quasar-drawer-link>
      <quasar-drawer-link page="shopping-cart"></quasar-drawer-link>
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
      <quasar-drawer-link page="index"></quasar-drawer-link>
      <quasar-drawer-link page="typography"></quasar-drawer-link>
    </div>
  </quasar-drawer>
</quasar-layout>
```

Specifying `right-side` attribute only places the Drawer in the right side of screen when it is hidden and can be swiped in. If the window is wide enough your Drawer will be displayed along your page view, depending on where you've included `<quasar-drawer>` besides `<router-view>` or `<div class="layout-view">`, which is before or after (which translates to left or right to the page view). So it is possible to place Drawer content on the left side on wide enough windows and on right-side (waiting to be swiped in) on smaller windows.

## Configuring Drawer
The `<drawer>` tag supports two HTML attributes (both optional) which changes its behavior:

| Drawer Attribute | Description |
| --- | --- |
| `right-side` | User can swipe the Drawer into view from the right side of the screen. |
| `swipe-only` | By default, Drawers get hidden on smaller screens but they get displayed on wide enough ones. Adding `swipe-only` attribute makes the Drawer hidden on bigger screens too. Rest assured, in this case the user can still bring them into view by swiping on the edge of the screen or by clicking/tapping on menu buttons. |

## Drawer Content
The Drawer component gets along very well with [Quasar Lists](/components/list.html). You can use Lists to define the contents of the Drawer. To differentiate how a Drawer List looks like, use the special CSS class `platform-delimiter` on the list DOM node.

``` html
<div class="list platform-delimiter">
  ...
</div>
```

There's also a helper Web Component called `<quasar-drawer-link>` which generates under the covers the HTML for a List item that represents a link. Handle click/tap events with `v-link` Vue Router directive.

Best use `<quasar-drawer-link>` inside of a List.

``` html
<quasar-drawer-link
  v-link="{path: '/home/help', exact: true}"
  icon="help"
>
  Help!
</quasar-drawer-link>
```

Notice the `icon` attribute which also adds an icon to your link list item.

## Ways to Open the Drawer
As you read above, the Drawer can be brought into view by either swiping from the edge of the screen or by clicking on menu buttons. A menu button is automatically added a click/tap event to open the Drawer if it has either `left-drawer-opener` or `right-drawer-opener` CSS classes added to it.

From a user's perspective, it's best to put those buttons in a Layout header Toolbar. Quick example below. Notice the `<button>` tag has `left-drawer-opener`.
``` html
<quasar-layout>
  ...
  <div slot="header" class="toolbar">
    <button class="left-drawer-opener">
      <i>menu</i>
    </button>
  </div>
  ...
</quasar-layout>
```

The two CSS classes mentioned above can be used on any DOM element. Quasar will add click/tap events to them by default.

If `right-side` attribute is specified, then that Drawer will look for `right-drawer-opener` class on Layout DOM elements. Otherwise, it will look for `left-drawer-opener`.

## Ways to Close the Drawer
Of course, user can swipe your Drawer out of view. But you also have the option to make specific DOM elements within your Drawer template to do this when clicked/tapped. Just add `drawer-closer` CSS class to them.

``` html
<quasar-drawer right-side>
  ...
  <button class="drawer-closer">
    Close Drawer
  </button>
  ...
</quasar-drawer>
```
