title: Inner Loading
---

The QInnerLoading component allows you to add a progress animation within a component. Much like the [Loading feature](loading.html), it's purpose is to offer visual confirmation to the user that some process is happening in the background, which takes an excessive amount of time. QInnerLoading will add an opaque overlay over the delayed element along with a [Spinner](/components/spinner.html).
<input type="hidden" data-fullpage-demo="progress/inner-loading">

> **Note**
> In order for the spinner to be properly placed in the center of the element you want the loading display to show over, that element must have the `relative-position` CSS class declared.

## Basic Usage

```html
<div class="layout-padding relative-position"
  style="height: 450px; width: 600px; background-color: lightgrey; padding: 15px;">
  <div v-show="showSimulatedReturnData">
    <h4>Lorem Ipsum</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
  </div>
  <q-inner-loading :visible="visible" />
</div>
```

View the source of the demo for the full example.

Use `v-show` or `v-if` and the Inner Loading component's `:visible` prop to toggle between the animation and your content.

## Vue Properties
| Vue Property | Type    | Description                            |
| ---          | ---     | ---                                    |
| `dark`    | Boolean | Darkens the color of the opaque overlay for darker designs |
| `visible` | Boolean | The loading effect becomes visible when true |
| `size`    | Number, String | Changes the default size of the default spinner. The default is 42 pixels. |
| `color`   | String | Specify color of the default spinner. |

> **Note**
> If you add your own spinner, use the spinner's own `size` and `color` prop to change the size and color.

To change the spinner, you can add your own as a child of QInnerLoading component. The below code would add a `teal`-variation gear spinner with the size of 50 pixels.

```html
<q-inner-loading :visible="visible">
  <q-spinner-gears size="50px" color="teal-4" />
</q-inner-loading>
```

In most cases, you'll probably want to add your own spinner, color and size. For more information on spinner control, please refer to the [Spinner section](/components/spinner.html) of the docs.
