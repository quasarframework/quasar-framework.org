title: Page Sticky
---

The PageSticky component helps in placing DOM elements / components wrapped by it into a static position within the content area of your Layout, no matter where the user scrolls. A good example of this would be a "Back to top" button, which would first appear at the bottom of the screen, once the user scrolls down to a certain level on the screen.

The great advantage of this is that the elements wrapped by this component will never overlap the layout header, footer or left/right sides, even if those are not configured to be fixed. In the latter case, the position will be offsetted so that the overlap won't occur.
Try it out with a non fixed footer for example. When user reaches bottom of screen and footer comes into view, the component will shift up so it won't overlap with the footer.
<input type="hidden" data-fullpage-demo="layout/fixed-positioning">

> **Important!**
> In order for QPageSticky to work, it must be placed within a QLayout component.

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
  <q-page-sticky position="top-right" :offset="[18, 18]">
    <q-btn round color="primary" @click="alert" icon="alarm" />
  </q-page-sticky>
  ...
</q-layout>
```

The above would position a circular button at the top right corner of the content area of a layout. It would also pad the button with 18 pixels from the top and right edges of the layout.

### Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `position` | String | Check below for valid values. |
| `offset` | Array (2 integers) | Optional. The offset of the content, relative to the corner. First is offset on X axis, then on Y axis.<br>Example: `[0, 18]` (offset 0 on X axis and 18px on Y axis). |

Valid values for "position" property: `top-right`, `top-left`, `bottom-right`, `bottom-left`, `top`, `right`, `bottom`, `left`.
