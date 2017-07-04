title: Alert
---
Quasar Alerts are like a mix between the Dialog and Toast components. They offer more options for appearance and control than Toasts do and they can have custom dismissal action(s) and other behaviors, similar to the dialog component. The Alert component is built however, to be more specific to alerting the users of events happening within your app. The alert will also not timeout like a toast, unless the user hits one of the Alert action buttons. The Alert can be used either as a component or as a method (so globally, even outside of Vue components, much like Toasts).
<input type="hidden" data-fullpage-demo="popups/alert">

Check the sibling [Toast](/components/toast.html) too.

## Basic Usage as a Method
Below is an example of a simple Alert as a method containing only a message:

``` js
import { Alert } from 'quasar'

Alert.create({html: 'Warning, warning, Will Robinson!'})
```

You can see this alert at the top right of the demo on this page. Please notice the defaults.

1. The alert is red.
2. The alert needs an options object with the `html` property for adding text.
3. The icon on the left is the warning icon.
4. The alert floats above all content and at top right position.
5. The alert can be dismissed.
6. There are no transitional animations, when appearing or after dismissal.

Go ahead and dismiss this alert.
From a UI perspective, these are fairly standard expectations for the looks of a simple warning alert.
However, obviously not all alerts should look or even behave like this. Quasar allows us to do a good bit of customization of alerts.

### Options as a Method
Let's go deeper and analyze the different optional properties available for the alert component created and used as a method.

Here is a more involved example:

``` js
import { Alert } from 'quasar'

// using some animations along `enter` and `leave` props
// so don't forget to import them too!
// Read about them in Animation > Transition page
import 'quasar-extras/animate/fadeIn.css'
import 'quasar-extras/animate/fadeOut.css'

Alert.create({
  enter: 'bounceInRight',
  leave: 'bounceOutRight',
  color: 'positive',
  icon: 'wifi',
  html: `A text with your alert's awesome message`,
  position: 'top-right',
  actions: [
    {
      label: 'Snooze',
      handler () {
        console.log('acting')
      }
    },
    {
      label: 'Abort',
      handler () {
        console.log('aborting')
      }
    }
  ]
})
```
To see this in action, click on the "Show Alert As Method" buttons in the example app to the right.

> **Note**
> If you do not define any actions, the alert method will automatically be dismissible i.e. there will be an "X" button available for the user to dismiss the alert.

### Programmatically Closing Alert
Quasar Alerts are meant to be dismissed only by the user, however for exceptional cases you can do it programmatically.

```js
const alert = Alert({...})
...
alert.dismiss()
```

### Instantiation Properties
Here are all of the properties of the Alert component, when used as a method:

| Property | Type | Description |
| --- | --- | --- |
| `duration` | Number | The time in milliseconds any transition should take.|
| `inline` | Boolean | Use inline instead of taking up entire row. |
| `color` | String | This can be any color set up under the [Quasar Color Palette](/components/color-palette.html).  |
| `html` | String | HTML to display as the message text. |
| `icon` | String | Icon to use. See [Icons](/components/icons.html). |
| `position` | String | Controls the position of the alerts, when it is displayed. The available positions are `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left`, `left` and `top-left`|
| `actions` | Array of Objects | Place one or more buttons within the alert, like "Snooze" or "Abort". Specify `label` (String) and `handler` (Function).|
| `enter` | String | The transition animation for displaying the alert. |
| `leave` | String | The transition animation for dismissing the alert. |
| `name` | String | A custom transition name that will override `enter` and `leave` props. Read about `name` prop of [QTransition](/components/transition.html).  |

> `enter`, `leave` and `name` props work same as for [QTransition](/components/transition.html), so it might be a good idea to get a reading on them.

## Basic Usage as a Component (QAlert)

Alerts can be created also as a component when you don't need the alert to be on top of the website/app content in a fixed position, waiting to be dismissed.

```html
<!-- remember to also import animations! -->
<q-alert
  color="green"
  icon="cloud"
  enter="bounceInLeft"
  leave="bounceOutRight"
  appear
  dismissible
>
  Some cool message for your users.
</q-alert>

<!-- no animations -->
<q-alert
  color="positive"
  icon="cloud"
  :actions="[{label: 'Snooze', handler () {}}]"
>
  Some cool message for your users.
</q-alert>

<!-- positioned on top right corner of screen -->
<q-alert
  color="positive"
  icon="cloud"
  enter="bounceInLeft"
  leave="bounceOutRight"
  position="top-right"
  :actions="[{label: 'Snooze', handler () {}}]"
>
  Some cool message for your users.
</q-alert>
```

### Vue Properties
Here are the available properties, when using Alert as a component:

| Property | Type | Description |
| --- | --- | --- | --- |
| `color` | String | This can be any color set up under the [Q Color Palette](/api/css-color-palette.html).  |
| `position` | String | Controls the position of the alerts, when it is displayed. The available positions are `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left`, `left` and `top-left`|
| `icon` | String | Icon to use. See [Icons](/components/icons.html). |
| `actions` | Array of Objects | Place one or more buttons within the alert, like "Snooze" or "Abort". Each Object from Array must have `label` (String) and `handler` (Function) props.|
| `dismissible` | boolean | When used, the "X" button is added to the right to allow the dismissal of the alert. |
| `enter` | String | The transition animation for displaying the alert. |
| `leave` | String | The transition animation for dismissing the alert. |
| `name` | String | A custom transition name that will override `enter` and `leave` props. Read about `name` prop of [QTransition](/components/transition.html).  |

> The alert component also makes use of the ´q-transition` component, so you see the `appear`, `enter`, `leave` and `name` props from the [QTransition](/components/transition.html). Please refer to the `q-transition` docs for more information about working with transitions.

Alert also supports the `v-model` directive to receive a Boolean as a property. This determines the visibility of the QAlert (`true` means it's visible).
