title: Page Sticky
---

The PageSticky component helps in placing DOM elements / components wrapped by it into a static position within the content area of your Layout, no matter where the user scrolls. A good example of this would be a "Back to top" button, which would first appear at the bottom of the screen, once the user scrolls down to a certain level on the screen.

The great advantage of this is that the elements wrapped by this component will never overlap the layout header, footer or left/right sides, even if those are not configured to be fixed. In the latter case, the position will be offsetted so that the overlap won't occur.
Try it out with a non fixed footer for example. When user reaches bottom of screen and footer comes into view, the component will shift up so it won't overlap with the footer.
<input type="hidden" data-fullpage-demo="layout-demo/page-sticky" data-source="../layout-demo/page-sticky.vue">

> **Important!**
> In order for QPageSticky to work, it must be placed within a QLayout component

> **Note**
> QPageSticky must be the last child element within it's parent, so it can display on top of other content

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QPageSticky']
}
```

## Basic Usage

```html
<q-layout>
  ...
  <!--
    Place QPageSticky as the last child element of your page.
    This is important for it to be displayed on top of the other page content.
  -->
  <q-page-sticky position="top-right" :offset="[18, 18]">
    <q-btn round color="primary" @click="alert" icon="alarm" />
  </q-page-sticky>
</q-layout>
```

The above would position a circular button at the top right corner of the content area of a layout. It would also pad the button with 18 pixels from the top and right edges of the layout.

### Expand mode
> Needs Quasar v0.15.4+
> Beware that you need to manually set the according padding to your QPage element so that your sticky elements won't overlap page content.

By default, QPageSticky shrinks to the size of its content. In case you want to place something like a QToolbar (works with any element/component) in a QPageSticky with position set to "top" (works for top/right/bottom/left), you can use the `expand` Boolean property:

```html
<!-- Example of a toolbar placed at top of the page -->
<q-page-sticky expand position="top">
  <q-toolbar>
    <q-btn flat round dense icon="menu" />
    <q-toolbar-title>Title</q-toolbar-title>
  </q-toolbar>
</q-page-sticky>

<!-- Example of placing something on the right side of the page -->
<q-page-sticky expand position="left">
  <div class="fit bg-tertiary">
    ....content...
  </div>
</q-page-sticky>
```

**Tip**: For left/right positions you can use the Quasar [Flex CSS](/components/flex-css.html) classes to center content.

### Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `position` | String | Check below for valid values. |
| `expand` | Boolean | (v0.15.4+) Expand mode. Overrides default "shrinking" mode where Page Sticky shrinks to the size of content. |
| `offset` | Array (2 integers) | Optional. The offset of the content, relative to the corner. First is offset on X axis, then on Y axis.<br>Example: `[0, 18]` (offset 0 on X axis and 18px on Y axis). |

Valid values for "position" property: `top-right`, `top-left`, `bottom-right`, `bottom-left`, `top`, `right`, `bottom`, `left`.
