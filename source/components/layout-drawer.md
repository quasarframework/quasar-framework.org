title: Quasar Layout Drawer
---
The Quasar Layout Drawer (also known as a Sidebar) is the element on the left side or right side of your screen, usually used for Navigation, which gets hidden on smaller screens (and can be activated by swiping them into view from the edge of the screen or by clicking/tapping on menu buttons) and is shown alongside the Page content on wide enough screens.

There are two types of Drawers: left-side or right-side. Check the HTML markup to learn how to declare each of them.

<input type="hidden" data-fullpage-demo="layout-drawer">

## Basic Usage
In your Layout template file, you can declare up to two drawers, but they must differ in type (one must be left-side and one right-side) otherwise they'll be one on top of each other.

``` html
<screen>
  ...

  <!-- Left side Drawer -->
  <drawer>
    <div class="list platform-delimiter">
      <div class="list-header">
        Left Side Drawer
      </div>
      <drawer-link page="my-account"></drawer-link>
      <drawer-link page="shopping-cart"></drawer-link>
    </div>
  </drawer>

  <!--
    Right side Drawer;
    Notice the HTML Attributes on <drawer> element
  -->
  <drawer right-side>
    <div class="list platform-delimiter">
      <div class="list-header">
        Right Side Drawer
      </div>
      <drawer-link page="index"></drawer-link>
      <drawer-link page="typography"></drawer-link>
    </div>
  </drawer>
</screen>
```

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

There's also a helper Web Component called `<drawer-link>` which generates a link to a Page of your App (defined with `page` HTML attribute). It automatically handles click/tap events so it navigates to the respective Page. Best use it within a Quasar List.

``` html
<drawer-link page="page-name"></drawer-link>
```

### Study Case
Let's build a Drawer with links to all available App Pages. We'll make use of the global `quasar.data.manifest.pages` Object and make Vue iterate through the list to generate `<drawer-link>` tags.

``` html
<!-- In your Layout template: -->
<drawer>
  <div class="list platform-delimiter">
    <drawer-link
      v-for="pageName in pages"
      :page="pageName"
    ></drawer-link>
  </div>
</drawer>
```

``` js
// In your Layout script:

module.exports = {
  ...,
  data: {
    ...,
    pages: Object.keys(quasar.data.manifest.pages)
  }
};
```

## Ways to Open the Drawer
As you read above, the Drawer can be brought into view by either swiping from the edge of the screen or by clicking on menu buttons. A menu button is automatically added a click/tap event to open the Drawer if it has either `left-drawer-toggle` or `right-drawer-toggle` CSS classes added to it.

From a user's perspective, it's best to put those buttons in the Layout Header. Quick example below. Notice the `<button>` tag has `left-drawer-toggle`.
``` html
<screen>
  ...

  <div slot="header" class="row items-center">
    <button class="left-drawer-toggle">
      <i>menu</i>
    </button>
  </div>

  ...
</screen>
```

The two CSS classes mentioned above can be used on any DOM element. Quasar will add click/tap events to them by default.
