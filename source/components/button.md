title: Button
---
Quasar has a component called QBtn which is a button with a few extra useful features. For instance, it comes in two shapes: rectangle (default) and round. It also has the material ripple effect by default when building with Material theme.
<input type="hidden" data-fullpage-demo="forms/button">

The button component also comes with a spinner or loading effect. You would use this for times when app execution may cause a delay and you want to give the user some feedback about that delay. When used, the button will display a spinning animation as soon as the user clicks the button.

When not disabled or spinning, QBtn emits a `@click` event, as soon as it is clicked or tapped.
## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: [
    'QBtn'
  ]
}
```
## Basic Usage

Plain simple button with an icon and a label:

``` html
<q-btn icon="create" label="New item" />
```

Button with just an icon:
``` html
<q-btn>
  <q-icon name="map" />
</q-btn>
```

A standard round button.
```html
<!--
  Notice "round" specified and
  self-closing tag (as we don't need to specify any
  content for button -- the icon fills all available
  space anyway).
-->
<q-btn round color="secondary" icon="card_giftcard" />

<!-- Next is perfectly equivalent -->
<q-btn round color="secondary">
  <q-icon name="card_giftcard" />
</q-btn>
```
> **Note**
> For round buttons, only use an icon as content, through "icon" property or QIcon component as the only child. Do not add anything else besides the icon, unless you want a Popover or Tooltip.

Small primary button:

``` html
<q-btn icon="edit" color="primary" small>
  Edit
</q-btn>
```

Button with "loading" state (we'll go over these in more detail in its own section later):

```html
<!-- Regular shaped -->
<q-btn loader color="primary" @click="clickMethod">
  Button Label
</q-btn>

<!-- Round shaped; only use icon as content -->
<q-btn v-model="submit" loader round color="primary" @click="clickMethod">
  <q-spinner-oval slot="loading" />
</q-btn>
```

In the example above, the `clickMethod` would be a function to control the value of `submit`, which must be a Boolean.

## Vue Properties
| Vue Property | Type    | Description |
| ---          | ---     | --- |
| `icon`       | String  | Name of the icon to use. |
| `icon-right` | String  | Name of the icon to place on right side of button. |
| `loader`     | Boolean | Display a spinner, if true. Can be optionally used along `v-model`. Check [Button with Progress](#Button-with-Progress) section. |
| `percentage` | Number | Optional property for displaying a determinate progress. Use along `loader`. |
| `dark-percentage` | Boolean | Optional property for displaying a determinate progress on a light button color. Use along `loader` and `percentage`. |
| `round`      | Boolean | Set true, if you want a round button. |
| `outline`    | Boolean | Set true, if you want an outlined button. |
| `flat`       | Boolean | Set true, if you want a flat button. |
| `rounded`    | Boolean | Set true, if the square button should have rounded corners. |
| `push`       | Boolean | Set true, if the button should have a push effect. |
| `small`      | Boolean | Set true, if the button should be small. |
| `big`        | Boolean | Set true, if the button should be big. |
| `glossy`     | Boolean  | Set true, if the button should be glossy. |
| `disable`    | Boolean | The button is disabled, if true. `@click` event won't be triggered while in this state. |
| `color`      | String  | A color from [Quasar Color Palette](/components/color-palette.html). |
| `no-caps`    | Boolean | Set true, if you don't want button content/label to be transformed to uppercase letter on Material Theme. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@click` | Triggered on button click/tap, if button is not disabled. |

## More examples

When adding an icon to a regular button, there are two possibilities for its position. The default position is left. Use `icon-right` property instead to position the icon to the right:

``` html
<!-- icon will be placed on the left -->
<q-btn icon="mail" color="primary">
  Button Label
</q-btn>

<!-- icon will be placed on the right -->
<q-btn icon-right="mail" color="teal">
  Button Label
</q-btn>
```

## Button Sizes

Use `small` or `big` as attributes. You don't need to specify `standard`, because that's the default size.

``` html
<q-btn color="primary" small>
  Small Button
</q-btn>

<q-btn color="primary" big>
  Big Button
</q-btn>
```
You can also make use of globally available CSS helper class `block` (sets CSS `display` property to `block`) or `full-width` to expand the button.

## Button Colors
Use any color from the [Quasar Color Palette](/components/color-palette.html). Examples: `primary`, `orange`, `lime`, 'amber-8'.

``` html
<q-btn color="primary">Primary Button</q-btn>
<q-btn color="amber">Amber Button</q-btn>
```

## Button Style Types
There are also the `outline`, `push`, `round`, `flat`, `rounded` and `glossy` props for you to use to control some design aspects of the button.

``` html
<!-- an outlined button -->
<q-btn outline color="teal">Outlined Button</q-btn>

<!-- a rounded push button -->
<q-btn rounded push color="secondary">Rounded Push Button</q-btn>

<!-- a glossy button -->
<q-btn glossy color="primary">Glossy</q-btn>
```

If you'd like a rectangular button with just an icon and not text, you should use the QIcon component inside the button.

```
<q-btn>
  <q-icon name="mail" />
</q-btn>
```

## Button with Progress
Some button actions involve contacting a server, so an asynchronous response. It's best that you inform the user about a background process taking place until the asynchronous response is ready. QBtn offers this possibility through the `loader` prop. This property will display a QSpinner (by default) instead of the icon and/or label of the button. Custom loading content can also be used.

Here is a full example highlighting what you can do with the `loader` property.
```html
<template>
  <!-- Notice `loader` prop -->
  <q-btn loader @click="simulateProgress">
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
  methods: {
    // notice parameter "done" (Function)
    simulateProgress (event, done) {
      // simulate a delay, like in
      // waiting for an Ajax call
      setTimeout(() => {
        // delay is over, now we call
        // done() function to inform button
        // it must go to its initial state
        done()
        // DON't forget to call done() otherwise
        // the button will keep on being in
        // "loading" state
      }, 3000)
    }
  }
}
</script>
```

If you'd like to add a different spinner than the default one of the theme you are building your website/app with, you can do so by slotting in the [Spinner](/components/spinner.html) component you'd like.

```html
<q-btn icon="mail" color="orange" @click="simulateProgress">
  Get Mail
  <q-spinner-facebook slot="loading" size="20px" />
</q-btn>
```

> The "loading" slot can contain anything. It's not reduced to text or spinners only. You can use whatever DOM elements or components you want. The end result is that while in "loading" state, the Button content will be replaced by whatever the "loading" slot contains. Also, while in this state, the button gets disabled so no further click events are unnecessarily triggered.

We'll learn how you can use the `loader` prop along with `v-model` on buttons later on this page.

### Handling Deterministic Progress
Should you wish, you can also display a deterministic progress within the button by using the additional "percentage" property along with what you've already learned about buttons with progress:
```html
<template>
  <q-btn
    :percentage="percentage"
    loader
    color="primary"
    @click="startComputing"
  >
    Compute PI
    <span slot="loading">
      <q-spinner-gears class="on-left" />
      Computing...
    </span>
  </q-btn>
</template>

<script>
// remember to also import necessary
// Quasar components (not added here)
export default {
  data () {
    return {
      percentage: 0
    }
  },
  methods: {
    startComputing (e, done) {
      this.percentage = 0

      // we simulate progress here
      this.interval = setInterval(() => {
        // adding a random amount of percentage
        this.percentage += Math.floor(Math.random() * 8 + 10)

        // and when we are done...
        if (this.percentage >= 100) {
          clearInterval(this.interval)
          // DON'T forget to call "done()" (the second param of handler)
          done()
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
    <q-input v-model="test" @keyup.enter="simulateSubmit"></q-input>

    <!--
      A button with v-model set to submit.
      v-model scope variable must be a strict Boolean
    -->
    <q-btn v-model="submit" loader @click="simulateSubmit">
      Save
      <q-spinner-facebook slot="loading"></q-spinner-facebook>
    </q-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: '',
      submit: false
    }
  },
  methods: {
    simulateSubmit () {
      // if clicking/tapping on the button,
      // due to using `v-model`, "submit" will already
      // be `true`, but we also want to handle QInput triggering
      // this method, so we need to manually set `submit` to `true`
      // in this case.
      this.submit = true

      // Simulating a delay here.
      // When we are done, we reset "submit"
      // Boolean to false to restore the
      // initial state.
      setTimeout(() => {
        // delay simulated, we are done,
        // now restoring submit to its initial state
        this.submit = false
      }, 3000)
    }
  }
}
</script>
```

## Disabling a Button
To disable the button, use the `disable` prop. Along with a small fade applied to the Button, the `@click` event will no longer be triggered.

``` html
<q-btn color="primary" disabled>Primary Button</q-btn>
<q-btn color="amber" :disabled="booleanVar">Amber Button</q-btn>
```

## Using a Button with Vue Router

If you want to use a button to navigate to a new page you don't need to use a wrapping `<router-link>` tag. Instead, you can use the `@click` event to handle the route change.

```html
<q-btn @click="$router.push('/path/to/new/page')" color="primary" />
```
