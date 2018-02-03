title: Fixed Positioning on Layout
---

The Quasar Fixed Position component helps to fix HTML elements wrapped by it to a static position within the content area of your application. The HTML elements will also stay in that fixed position, no matter where the user scrolls. A good example of this would be a "Back to top" button, which would first appear at the bottom of the screen, once the user scrolls down to a certain level on the screen.

The great advantage of this is that the elements wrapped by this component will never overlap the layout header, footer or left/right sides, even if those are not configured to be fixed. In the latter case, the position will be offsetted so that the overlap won't occur.
Try it out with a non fixed footer for example. When user reaches bottom of screen and footer comes into view, the component will shift up so it won't overlap with the footer.
<input type="hidden" data-fullpage-demo="layout/fixed-positioning">

>**Important!**
In order for `<q-fixed-position>` to work, it must be within a `<q-layout>` component.

## Basic Usage

```html
<q-layout>
  ...
  <q-fixed-position corner="top-right" :offset="[18, 18]">
    <q-btn round color="primary" @click="alert" icon="alarm" />
  </q-fixed-position>
  ...
</q-layout>
```

The above would position a circular button at the top right corner of the content area of a layout. It would also pad the button with 18 pixels from the top and right edges of the layout.


If you have a header or footer in your layout, the HTML elements wrapped by `<q-fixed-position>` will automatically stay within the area delimited by those header and footer.

### Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `corner` | String | The corner of the element where the content should be places. The choices are `top-right`, `top-left`, `bottom-right` or `bottom-left`. |
| `offset` | Array (2 integers) | Optional. The offset of the content, relative to the corner. First is offset on X axis, then on Y axis.<br>Example: `[0, 18]` (offset 0 on X axis and 18px on Y axis). |
