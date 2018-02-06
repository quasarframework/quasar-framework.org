title: Alert
---
QAlert is a component that allows you to display an informational message to the users, with optional action buttons.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QAlert']
}
```

## Basic Usage

```html
<q-alert color="primary">
  Some cool message
</q-alert>

<q-alert
  type="positive"
  icon="cloud"
  :actions="[{label: 'Snooze', handler () {}}]"
>
  Some cool message for your users.
</q-alert>
```

As a tip, you can also add an animation to it. Make sure you [specify the animation](/components/transition.html#Installation) in `/quasar.conf.js`.
```html
<transition
  enter-active-class="animated bounceInLeft"
  leave-active-class="animated bounceOutRight"
  appear
>
  <q-alert
    v-if="visible"
    color="secondary"
    icon="cloud"
    appear
    :actions="[{ label: 'Dismiss', handler: () => { visible = false } }]"
    class="q-mb-sm"
  >
    Lorem ipsum dolor sit amet.
  </q-alert>
</transition>
```

### Vue Properties
Here are the available properties, when using Alert as a component:

| Property | Type | Description |
| --- | --- | --- | --- |
| `type` | String | One of 'positive', 'negative', 'warning', 'info'. Applies the respective color and icon, so you can skip specifying those props too. |
| `color` | String | This can be any color set up under the [Quasar Color Palette](/components/color-palette.html). |
| `text-color` | String | This can be any color (for the text) set up under the [Quasar Color Palette](/components/color-palette.html). |
| `message` | String | Alert's content message, if you don't add it as a children of QAlert. |
| `detail` | String | Alert's sub-message, as a detail. |
| `icon` | String | Icon to use. See [Icons](/components/icons.html). |
| `avatar` | String | Image file (use statics folder for it). |
| `actions` | Array of Objects | Place one or more buttons within the alert, like "Snooze" or "Abort". Each Object from Array must have `label` (String) and `handler` (Function) props.|
