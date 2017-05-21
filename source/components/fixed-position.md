title: Fixed Position
---

The Quasar Fixed Position component helps to fix HTML elements wrapped by it to a static position within the content area of your application. The HTML elements will also stay in that fixed position, no matter where the user scrolls. A good example of this would be a "Back to top" button, which would first appear at the bottom of the screen, once the user scrolls down to a certain level on the screen.
 
>**Important!**
In order for `<q-fixed-position>` to work, it must be within a `<q-layout>` component.

## Basic Usage

```html
<q-layout>
  ...
  <q-fixed-position corner="top-right" :offset="{top: '18px', right: '18px'}">
    <q-btn round color="primary" @click="alert" icon="alarm" />
  </q-fixed-position>
  ...
</q-layout>
```

The above would position a circular button at the top right corner of the content area of a layout. It would also pad the button with 18 pixels from the top and right edges of the layout.


If you have a header or footer in your layout, the HTML elements wrapped by `<q-fixed-position>` will automatically stay within those header and footer areas. 

### Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `corner` | String | The corner of the element where the content should be places. The choices are `top-right`, `top-left`, `bottom-right` or `bottom-left`. |
| `offset` | Object | The offset of the content, relative to the corner. <br/>               Example: `{right: '18px', bottom: '18px'}`. |