title: Toast
---
Quasar Toasts appear on top of the screen above any other components to signal the user with a message and sometimes with an action too. They can be dismissed by clicking on the right side button.

> Toasts are displayed one at a time, but you can build up a queue of them.

<input type="hidden" data-fullpage-demo="global/toast">

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
  },
  vm: {
    // VueModel for the Toast
  }
})
```

| Property | Type | Description |
| --- | --- | --- | --- |
| `html` | String | (**Required**) HTML to display. |
| `icon` | String | Icon to use. See [Icons](/api/css-icons.html). |
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
