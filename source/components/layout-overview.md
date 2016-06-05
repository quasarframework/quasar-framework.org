title: Quasar Layout Components Overview
---
Layouts are the elements that wrap page content, like navigational bar or drawer. Multiple pages can share the same Layout, which is one of the main reason for their existence.

<input type="hidden" data-fullpage-demo="layout-overview">

## Basic Usage
A Layout is constructed by `<screen>` Web Component. It is mandatory unless you really know what you are doing.

An example of Layout, containing all possible elements: a header, a footer, automatic navigational tabs, a drawer on the left side (which is shown alongside Page content on wide screens) and a drawer on the right side (which is always hidden regardless of the screen width):

``` html
<screen>

  <!-- Automatic Navigational Tabs -->
  <screen-tabs slot="navigation"></screen-tabs>

  <!-- Header -->
  <div slot="header" class="row items-center">
    <button class="left-drawer-toggle"><i>menu</i></button>
    <p>Title</p>
    <div class="group">
      <button class="small" v-exit-app><i>power_settings_new</i></button>
      <button class="small right-drawer-toggle"><i>menu</i></button>
    </div>
  </div>

  <!-- Footer -->
  <div slot="footer" class="row items-center">
    <p>Footer</p>
  </div>

  <!-- Left-side Drawer -->
  <drawer>
    <div class="list platform-delimiter">
      <div class="list-header">
        Left Side Drawer
      </div>
      <drawer-link page="my-account"></drawer-link>
      <drawer-link page="shopping-cart"></drawer-link>
    </div>
  </drawer>

  <!-- Page Contents will be placed here -->
  <page class="smart-container"></page>

  <!-- Right-side Drawer -->
  <drawer right-side swipe-only>
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

## Tips

1. Make sure that your Layout template DOM elements are wrapped by one (and **only one**) DOM element, like for example `<screen>`. Do not add more than one DOM element at the highest hierarchical level of your Layout template.

2. The `<screen>` Web Component uses the following slots: `header`, `footer` and `navigation`. You can specify your content for these slots with the `slot` HTML attribute: `slot="footer"`.
  ``` html
  <div slot="footer">
    ...Your Content...
  </div>
  ```

  Note that you can use define multiple headers, footers and navigation elements.

3. The order of inclusion of the drawers and `<page>` tag matters on a desktop view (and even on wide screen tablets) where if the window is wide enough, drawers are displayed side by side with Page content. For example, you can actually decide that your left-side drawer should be displayed on the right-side of your Page content on a wide window by including `<page>` tag before the `<drawer>` one.
  ``` html
  <screen>
    ...
    <page></page>
    <drawer>
      ...Drawer Content...
    </drawer>
  ```

4. It's best to use Quasar Lists for the Drawer links, but this is not mandatory.

5. You can include automatic navigation tabs (through `<screen-tabs>` Web Component) or simply use a [Quasar Tab](/components/tabs.html) (through `<tabs>` and `<tab>`).

6. The component which dictates where the App Pages' content goes on the Layout is `<page>`. If you want your Page content to have margins and padding calculated automatically (responsive) add CSS class `smart-container`.
  ``` html
  <page class="smart-container"></page>
  ```

## Linking a Page to a Layout
Make sure you read the Quasar App Pages documentation (from Guide) first, especially the section regarding [Page Manifest](/guide/quasar-pages.html#Page-Manifest). You will notice there that a Page manifest contains `layout` property, which specifies which (if any) Layout to use for the respective page.

## Layout Components
You learned the basics, now let's go deeper and study each Layout Web Component in detail. See next documentation pages for each Layout Component available.

> Also make sure you read about how to communicate between Pages and Layouts VueModels [here](/guide/vue-model-communication.html).
