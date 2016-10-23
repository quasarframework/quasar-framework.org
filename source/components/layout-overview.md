title: Layout Overview
---
Layouts are the elements that wrap page content, like navigational bar or drawer. Multiple pages can share the same Layout, which is one of the main reason for their existence.

<input type="hidden" data-fullpage-demo="layout">

## Basic Usage
A Layout is constructed by `<quasar-layout>` Component. It is mandatory unless you really know what you are doing.

An example of Layout, containing all possible elements: toolbars (used on header and footer), navigational tabs, a drawer on the left side (which is shown alongside page content on wide screens) and a drawer on the right side (which is always hidden regardless of the screen width and can only be activated by swiping it into view or by clicking a button):

``` html
<quasar-layout>
  <!-- Header -->
  <div slot="header" class="toolbar">
    <!-- opens left-side drawer using its ref -->
    <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
      <i>menu</i>
    </button>
    <quasar-toolbar-title :padding="1">
      Title
    </quasar-toolbar-title>
    <!-- opens right-side drawer using its ref -->
    <button class="hide-on-drawer-visible" @click="$refs.rightDrawer.open()">
        <i>menu</i>
      </button>
  </div>

  <!-- Navigation Tabs -->
  <quasar-tabs slot="navigation">
    <quasar-tab icon="mail" route="/layout" exact replace>Mails</quasar-tab>
    <quasar-tab icon="alarm" route="/layout/alarm" exact replace>Alarms</quasar-tab>
    <quasar-tab icon="help" route="/layout/help" exact replace>Help</quasar-tab>
  </quasar-tabs>

  <!-- Left-side Drawer -->
  <quasar-drawer ref="leftDrawer">
    <div class="toolbar">
      <quasar-toolbar-title>
        Drawer Title
      </quasar-toolbar-title>
    </div>

    <div class="list no-border platform-delimiter">
      <quasar-drawer-link icon="mail" to="/" exact>
        Link
      </quasar-drawer-link>
    </div>
  </quasar-drawer>

  <!-- IF USING subRoutes only: -->
  <router-view class="layout-view"></router-view>
  <!-- OR ELSE, IF NOT USING subRoutes: -->
  <div class="layout-view"></div>

  <!-- Right-side Drawer -->
  <quasar-drawer ref="rightDrawer">
    ...
  </quasar-drawer>

  <!-- Footer -->
  <div slot="footer" class="toolbar">
    ....
  </div>
</quasar-layout>
```

## Understanding Layouts

1. Make sure that your Layout template DOM elements are wrapped by one (and **only one**) DOM element, like for example `<quasar-layout>`. Do not add more than one DOM element at the highest hierarchical level of your Layout template.

2. If your layout uses subRoutes, then it makes sense to use `<router-view>` component (but with `layout-view` CSS class). Else use whatever element you want, as long as you also specify `layout-view` CSS class.

3. The `<quasar-layout>` Component uses the following slots: `header`, `footer` and `navigation`. You can specify your content for these slots with the `slot` HTML attribute: `slot="footer"`.
  ``` html
  <div slot="footer">
    ...Your Content...
  </div>
  ```

  Note that you can use define multiple headers, footers and navigation elements. Specify `slot="header"` or `slot="footer"` multiple times if you need. The order in which you specify these DOM elements matter.

  The `navigation` slot will be placed after header and before page view on Material Design theme, and after page view and before footer on iOS theme.

4. The place where the App pages' content goes on the Layout is the one having `layout-view` CSS class. If you want your page content to have margins and padding calculated automatically (responsive) use CSS class `layout-padding`:
  ``` html
  <div class="layout-view">
    <div class="layout-padding">
      ...page content...
    </div>
  </div>
  ```
  Or with `<router-view>`:
  ``` html
  <!-- in the Layout: -->
  <router-view class="layout-view"></router-view>

  <!-- in each page -->
  <div> <!-- root node required for subRoutes -->
    <div class="layout-padding">
      ...page content...
    </div>
    <!--
      You can have as many <div>s with
      "layout-padding" CSS class as you want
    -->
    <!--
      Also, anything placed outside of these <div>s with "layout-padding"
      (so direct children of the root node) will have width 100% of your
      page view
    -->
  </div>
  ```

  The reason why each subRoute template needs a root node is that `<router-view>` component gets replaced with DOM elements of the subRoute template. If you
  have more than one node, Vue will treat this as a Document Fragment and
  cannot add `layout-view` CSS class, which is required.

5. The order of inclusion of the drawers and `layout-view` classed DOM element matters on a desktop view (and even on wide screen tablets) where if the window is wide enough, drawers are displayed side by side with layout view content. For example, you can actually decide that your left-side drawer should be displayed on the right-side of your page content on a wide window by manipulating the order of
components:
  ``` html
  <quasar-layout>
    ...
    <router-view class="layout-view"></router-view>
    <quasar-drawer>
      ...Drawer Content...
    </quasar-drawer>
  ```

6. A great place to use [Toolbars](/components/toolbar.html) is for header and footer slots.
  ``` html
  <div slot="header" class="toolbar">
    ... toolbar content ...
  </div>
  ```

7. You can create Modals with Layout templates for great effect. Read about [Modals](/components/modal.html).

8. You can make navigation Tabs work great with Vue Router if you register the routes correctly and specify `v-link` directive on each Tab. Read more about Tabs [here](/components/tabs.html).

9. Example of placing a Search bar on header:
  ``` html
  <quasar-layout>
    ...
    <div slot="header" class="toolbar primary">
      <quasar-search v-model="searchModel" class="primary"></quasar-search>
    </div>
    ...
  </quasar-layout>
  ```
