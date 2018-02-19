title: Button
---
Quasar has a component called QBtn which is a button with a few extra useful features. For instance, it comes in two shapes: rectangle (default) and round. It also has the material ripple effect by default when building with Material theme.
<input type="hidden" data-fullpage-demo="buttons/btn">

The button component also comes with a spinner or loading effect. You would use this for times when app execution may cause a delay and you want to give the user some feedback about that delay. When used, the button will display a spinning animation as soon as the user clicks the button.

When not disabled or spinning, QBtn emits a `@click` event, as soon as it is clicked or tapped.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QBtn']
}
```

## Basic Usage
``` html
<!-- Just label -->
<q-btn label="New item" />

<!-- Just icon -->
<q-btn icon="map" />

<!-- Icon & Label -->
<q-btn icon="create" label="New item" />
```

A standard round button.
```html
<!--
  Notice "round" specified and
  self-closing tag (as we don't need to specify any
  content for button -- the icon fills all available
  space anyway). The label is discarded.
-->
<q-btn round color="secondary" icon="card_giftcard" />

<!--
  Next is perfectly equivalent, but use "icon"
  property whenever you can.
-->
<q-btn round color="secondary">
  <q-icon name="card_giftcard" />
</q-btn>
```

> **IMPORTANTe**
> For round buttons, only use an icon as content, through "icon" property or QIcon component as the only child. Do not add anything else besides the icon, unless you want a Popover or Tooltip.

Primary colored button of small size:

``` html
<q-btn
  color="primary"
  size="sm"
  label="Edit"
/>
```

Button with "loading" state (we'll go over these in more detail in its own section later):

```html
<!-- Regular shaped -->
<q-btn
  loader
  color="primary"
  @click="clickMethod"
  label="Button Label"
/>
```

```html
<template>
  <!-- Round shaped (only use icon or spinner as content!) with loading state -->
  <q-btn
    :loading="loading"
    round
    icon="map"
    color="primary"
    @click="handler"
  >
    <q-spinner-oval slot="loading" />
  </q-btn>
</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    handler () {
      this.loading = true
      // we simulate a delay here:
      setTimeout(() => {
        this.loading = false
      }, 3000)
    }
  }
}
</script>
```

## Vue Properties

| Vue Property | Type    | Description |
| ---          | ---     | --- |
| `icon`       | String  | Name of the icon to use. |
| `icon-right` | String  | Name of the icon to place on right side of button. |
| `loading`    | Boolean | Display a spinner, if true. Check [Button with Progress](#Button-with-Progress). |
| `percentage` | Number | Optional property for displaying a determinate progress. Use along `loader`. |
| `dark-percentage` | Boolean | Optional property for displaying a determinate progress on a light button color. Use along `loader` and `percentage`. |
| `disable`    | Boolean | The button is disabled, if true. `@click` event won't be triggered while in this state. |
| `label`      | String/Number | Button label. |
| `tabindex`   | Number | Set explicit tab index. |
| `repeat-timeout` | Number/Function | Enables multiple `@click` events on click/tap and hold. Function gets a Number (timesTriggered) as parameter. |
| `wait-for-ripple` | Boolean | Wait for ripple then before emitting `@click` event. Mat theme only. |

#### Appearance
| Vue Property | Type    | Description |
| ---          | ---     | --- |
| `size`       | String | Button size. One of `xs`, `sm`, `md`, `lg`, `xl`, or a css string size eg. `25px`, `2rem`, `3vw`. More info below this table. |
| `color`      | String  | A color from [Quasar Color Palette](/components/color-palette.html). |
| `text-color` | String  | A color from [Quasar Color Palette](/components/color-palette.html). |
| `align`      | String  | Label/Content alignment. One of `left`, `center`, `right`, `around`, `between`. |
| `dense`      | Boolean | Dense Button. |
| `round`      | Boolean | Set true, if you want a round button. |
| `outline`    | Boolean | Set true, if you want an outlined button. |
| `flat`       | Boolean | Set true, if you want a flat button. |
| `push`       | Boolean | Set true, if the button should have a push effect. |
| `rounded`    | Boolean | Set true, if the square button should have rounded corners. |
| `glossy`     | Boolean | Set true, if the button should be glossy. |
| `fab`        | Boolean | Floating Action Button. [See](/components/floating-action-button.html) |
| `fab-mini`   | Boolean | Smaller Floating Action Button. |
| `no-wrap`    | Boolean | Prevent text wrapping |
| `no-caps`    | Boolean | Set true, if you don't want button content/label to be transformed to uppercase letter on Material Theme. |
| `no-ripple`  | Boolean | Disable [Material Ripple](/components/material-ripples.html). Mat theme only. |

Size property values:

| Size value | Description |
| --- | --- |
| xs, ..., xl | Predefined sizes |
| form | Same size as an input form component |
| form-label | Same size as an input form component with stack/float label |
| form-hide-underline | Same size as an input form component with no bottom border |
| form-label-hide-underline | Same size as an input form component with stack/float label and no bottom border |
| form-inverted | Same size as an inverted input form component |
| form-label-inverted | Same size as an inverted input form component with stack/float label |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@click` | Triggered on button click/tap, if button is not disabled. |

## More examples

When adding an icon to a regular button, there are two possibilities for its position. The default position is left. Use `icon-right` property instead to position the icon to the right:

``` html
<!-- icon will be placed on the left -->
<q-btn icon="mail" color="primary" label="Button Label" />

<!-- icon will be placed on the right -->
<q-btn icon-right="mail" color="teal" label="Button Label" />

<!-- icons will be placed on both sides -->
<q-btn icon="mail" icon-right="mail" color="teal" label="Button Label" />
```

## Button Sizes

Use `size` attribute with one of the following values: `xs`, `sm`, `md`, `lg`, `xl`. You don't need to specify `md`, because that's the default size.
``` html
<q-btn color="primary" size="xs" label="Extra Small Button" />

<q-btn color="primary" size="sm" label="Small Button" />

<q-btn color="primary" size="md" label="Medium Button" />

<q-btn color="primary" size="lg" label="Large Button" />

<q-btn color="primary" size="xl" label="Extra Large Button" />

```

You can also use a CSS unit as size:
``` html
<q-btn color="primary" size="25px" label="25 Pixels" />

<q-btn color="primary" size="2rem" label="2 Rem" />

<q-btn color="primary" size="3vh" label="3 View Height" />
```

You can also make use of globally available CSS helper class `block` (sets CSS `display` property to `block`) or `full-width` to expand the button.

## Button Colors
Use any color from the [Quasar Color Palette](/components/color-palette.html). Examples: `primary`, `orange`, `lime`, 'amber-8'.

``` html
<q-btn color="primary" label="Primary Button"/>
<q-btn color="amber" label="Amber Button"/>
<q-btn color="primary" text-color="amber" label="Primary Button with Amber text" />
```

## Button Style Types
There are also the `outline`, `push`, `round`, `flat`, `rounded` and `glossy` props for you to use to control some design aspects of the button.

``` html
<!-- an outlined button -->
<q-btn outline color="teal" label="Outlined Button" />

<!-- a rounded push button -->
<q-btn rounded push color="secondary" label="Rounded Push Button"/>

<!-- a glossy button -->
<q-btn glossy color="primary" label="Glossy" />

<!-- a flat dense round button -->
<q-btn flat dense round icon="menu" color="primary" />
```

## Button with Progress
Some button actions involve contacting a server, so an asynchronous response. It's best that you inform the user about a background process taking place until the asynchronous response is ready. QBtn offers this possibility through the `loading` prop. This property will display a QSpinner (by default) instead of the icon and/or label of the button. Custom loading content can also be used.

Here is a full example highlighting what you can do with the `loading` property.
```html
<template>
  <!-- Notice `loader` prop -->
  <q-btn :loading="loading" @click="simulateProgress">
    Button Label
    <!--
      Notice slot="loading". This is optional.
      If missing, the default theme spinner will be used.
    -->
    <span slot="loading">Loading...</span>
  </q-btn>
</template>

<script>
export default {
  data () {
    return { loading: false }
  },
  methods: {
    simulateProgress () {
      // we set loading state
      this.loading = true

      // simulate a delay, like in
      // waiting for an Ajax call
      setTimeout(() => {
        // delay is over, now we reset loading state
        this.loading = false
        // DON't forget to reset loading state
        // otherwise the button will keep on
        // being in "loading" state
      }, 3000)
    }
  }
}
</script>
```

If you'd like to add a different spinner than the default one of the theme you are building your website/app with, you can do so by slotting in the [Spinner](/components/spinner.html) component that you'd like.

```html
<q-btn
  icon="mail"
  label="Get Mail"
  color="orange"
  @click="simulateProgress"
>
  <q-spinner-facebook slot="loading" size="20px" />
</q-btn>
```

> The "loading" slot can contain anything. It's not limited to text or spinners only. You can use whatever DOM elements or components you want. The end result is that while in "loading" state, the Button content will be replaced by whatever the "loading" slot contains. Also, while in this state, the button gets disabled so no further click events are unnecessarily triggered.

### Handling Deterministic Progress
Should you wish, you can also display a deterministic progress within the button by using the additional "percentage" property along with what you've already learned about buttons with progress:
```html
<template>
  <q-btn
    :percentage="percentage"
    :loading="loading"
    label="Compute PI"
    color="primary"
    @click="startComputing"
  >
    <span slot="loading">
      <q-spinner-gears class="on-left" />
      Computing...
    </span>
  </q-btn>
</template>

<script>
// remember to also register necessary components in quasar.conf.js
export default {
  data () {
    return {
      loading: false
      percentage: 0
    }
  },
  methods: {
    startComputing () {
      this.loading = true
      this.percentage = 0

      // we simulate progress here
      this.interval = setInterval(() => {
        // adding a random amount of percentage
        this.percentage += Math.floor(Math.random() * 8 + 10)

        // and when we are done...
        if (this.percentage >= 100) {
          clearInterval(this.interval)
          // DON'T forget to reset loading state:
          this.loading = false
        }
      }, 700)
    }
  },
  beforeDestroy () {
    // we also take care of clearing interval
    // should the user navigate away before the progress has ended
    clearInterval(this.interval)
  }
}
</script>
```

You can also use the `dark-percentage` prop if your button has a light color.

### Controlling the Button for Form Submission
When you have a button to submit a form's input to the server, like a "Save" button, more often than not you will also want to give the user the ability to submit the form with a press of the enter key. If you would also like to give the user feedback of the saving process being in progress, and to prevent the user repeatedly pressing the button, you would need the button to show a loading spinner and be disabled from click events. QBtn allows this behavior if configured so.

To control this loading feature, all you need is logic in your form which sets the `v-model` of the button to `true`. Once it is set to `true`, the button displays the spinner. To stop the process, set the `v-model` value back to false.

The example below demonstrates this button control with the Enter key.

```html
<template>
  <div>
    <!-- a simple text field watching for the enter key release -->
    <q-input v-model="test" @keyup.enter="simulateSubmit" />

    <!--
      A button with v-model set to submit.
      v-model scope variable must be a strict Boolean
    -->
    <q-btn :loading="submitting" @click="simulateSubmit" label="Save">
      <q-spinner-facebook slot="loading" />
    </q-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: '',
      submitting: false
    }
  },
  methods: {
    simulateSubmit () {
      this.submitting = true

      // Simulating a delay here.
      // When we are done, we reset "submitting"
      // Boolean to false to restore the
      // initial state.
      setTimeout(() => {
        // delay simulated, we are done,
        // now restoring submit to its initial state
        this.submitting = false
      }, 3000)
    }
  }
}
</script>
```

## Disabling a Button
To disable the button, use the `disable` prop. Along with a small fade applied to the Button, the `@click` event will no longer be triggered.

``` html
<q-btn color="primary" disable label="Primary Button" />
<q-btn color="amber" :disable="booleanVar" label="Amber Button" />
```

## Using a Button with Vue Router
If you want to use a button to navigate to a new page you don't need to use a wrapping `<router-link>` tag. Instead, you can use the `@click` event to handle the route change.

```html
<q-btn
  @click="$router.push('/path/to/new/page')"
  color="primary"
  label="navigate"
/>
```

## Delaying button click event
On Material theme you can delay a button's `@click` until the material ripple has reached the edge of the button using the `wait-for-ripple` prop. Useful from a UI perspective as an example when you want a button to dismiss a Modal.

```html
<q-btn
  wait-for-ripple
  @click="clickHandler"
  label="Click Me"
/>
```

## Using a click and hold button
If you want to trigger a button's `@click` event multiple times on click and hold use the `repeat-timeout` prop. Accepts either a Number or a Function (returning a Number). The Number represents the time amount to wait until triggering `@click` event again.

```html
<template>
  <!-- Click and hold to trigger every second -->
  <q-btn @click="clickHandler" :repeat-timeout="1000" label="Click Me" />

  <!-- Click and hold to trigger faster over time -->
  <q-btn @click="clickHandler" :repeat-timeout="repeatFunction" label="Click Me" />
</template>
<script>
  export default {
    methods: {
      clickHandler () {
        console.log('Handler Triggered')
      },
      repeatFunction (timesTriggered) {
        // first time timesTriggered is 0, so we add 1
        // to be sure we don't divide by 0
        return 1000 / (timesTriggered + 1)
      }
    }
  }
</script>
```
