title: Notify
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
import 'quasar-extras/animate/bounceInRight.css'
import 'quasar-extras/animate/bounceOutRight.css'

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
| `position` | String | Controls the position of the alerts, when it is displayed. The available positions are `top`, `top-center`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-center`, `bottom-left`, `left` and `top-left`|
| `actions` | Array of Objects | Place one or more buttons within the alert, like "Snooze" or "Abort". Specify `label` (String) and `handler` (Function).|
| `enter` | String | The transition animation for displaying the alert. |
| `leave` | String | The transition animation for dismissing the alert. |
| `name` | String | A custom transition name that will override `enter` and `leave` props. Read about `name` prop of [QTransition](/components/transition.html).  |

> `enter`, `leave` and `name` props work same as for [QTransition](/components/transition.html), so it might be a good idea to get a reading on them.

---


Quasar Toasts appear on top of the screen above any other components to signal the user with a message and sometimes with an action too. They can be dismissed by clicking on the right side button or waiting for them to timeout. Toasts are displayed one at a time, but you can build up a queue of them.

Check the sibling [Alert](/components/alert.html) too.
<input type="hidden" data-fullpage-demo="popups/toast">

## Basic Usage
A Quasar App Toast is a message displayed to the user. Below is an example of a simple Toast containing only a message:
``` js
import { Toast } from 'quasar'

Toast.create(String or Object)
```

When creating a Toast with a String, that String is the actual message going to be displayed. For more complex cases (like also displaying an icon or an image, or controlling the Toast's color), use an Object instead of String and read below on [Toast Options](#Toast-Options).

## Toast Options
We saw how to display a Toast, but let's go deeper and analize the required parameter at instantiation, which can be a String or an Object.

When a String, it simply displays that String as the content of your Toast.
When an Object, you can specify more options:

``` js
import { Toast } from 'quasar'

Toast.create({
  html: 'Message to display',
  icon: 'alarm_add',
  timeout: 2500,
  color: '#f8c1c1',
  bgColor: 'white',
  button: {
    label: 'Undo',
    handler () {
      // Specify what to do when button is clicked/tapped
    },
    color: '#000'
  }
})
```

| Property | Type | Description |
| --- | --- | --- | --- |
| `html` | String | (**Required**) HTML to display. |
| `icon` | String | Icon to use. See [Icons](/components/icons.html). |
| `image` | String | Image to include. |
| `timeout` | 2500 | Timeout in milliseconds until being automatically dissmissed. |
| `button` | Object | Place a button with an action, like "Undo". Specify `label` (String) and `handler` (Function). Optionally, specify `color` with a CSS color. |
| `color` | String | CSS color of Toast text |
| `bgColor` | String | CSS color of Toast background |
| `onDismiss` | Function | Function to execute when Toast gets dismissed. |

## Types of Toasts
Quasar offers the possibility to create out of the box Toasts for different types of success or failure messages. The Toast types have specific icons and colors.

The types of Toasts we are talking about are: `positive` (for success), `negative` (for errors), `warning` and `info`. Here's how to create them:

``` js
import { Toast } from 'quasar'

Toast.create.positive({...})
Toast.create.negative({...})
Toast.create.warning({...})
Toast.create.info({...})
```

## Setting Up Defaults
If you like to change the default Toast's settings, like color of text, color of background or timeout, you can easily do so:

``` js
import { Toast } from 'quasar'

// Call this only AFTER Vue.use(Quasar):
Toast.setDefaults({
  // props from above
  color: '#eee',
  timeout: 10000,
  ...
})
```

Now all of the default Toasts will inherit these properties.
