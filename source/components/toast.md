title: Toast
---
Quasar Toasts appear on top of the screen above any other components to signal the user with a message and sometimes with an action too. They can be dismissed by clicking on the right side button or by swiping to left or right. On desktop, they can be dragged with the mouse.

On mobile platforms they show up at the bottom edge of the screen and on desktop platforms they are shown on the top right edge of the screen.

<input type="hidden" data-fullpage-demo="global/toast">

Toasts are:

| Property | Description |
| --- | --- |
| Stackable | Multiple can be displayed simultaneous, but not more than 5 at a time. Only the last 5 will remain on screen and the rest are automatically dismissed. |
| Controllable | When a Toast is built you can control it completely. See *Toast Object Properties* above |

## Basic Usage
A Quasar App Toast is a message displayed to the user. Below is an example of a simple Toast containing only a message:
``` js
import { Toast } from 'quasar'

(Toast Object) Toast.create(String or Object)
```

When creating a Toast with a String, that String is the actual message going to be displayed. For more complex cases (like also displaying an icon or an image, or controlling the Toast's color), use an Object instead of String and read below on [Toast Options](#Toast-Options).

The *Toast Object* returned is an instantiation of your Toast and has the following properties:

| Toast Object Property | Type | Description |
| --- | --- |
| `dismiss` | Function | Dismisses the Toast |
| `node` | DomElement | DOM node of the Toast |

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
  button: {
    label: 'Undo',
    handler () {
      // Specify what to do when button is clicked/tapped
    }
  },
  vm: {
    // VueModel for the Toast
  }
})
```

| Property | Mandatory | Default Value | Description |
| --- | --- | --- | --- |
| `html` | Yes | *none* | HTML to display. |
| `icon` | | *none* | Icon to use. See [Icons](/api/css-icons.html). |
| `image` | | *none* | Image to include. |
| `timeout` | | 7000 | Timeout in milliseconds until being automatically dissmissed. Disable automatic dismissal with value "0". |
| `button` | | *none* | Place a button with an action, like "Undo". Specify `label` (String) and `handler` (Function). |
| `color` | String | One of the Quasar Colors from the Color Palette. Examples: `primary`, `orange`, `dark` |

## Controlling a Toast
``` js
import { Toast } from 'quasar'

var toast = Toaste.create('Some message')

toast.node.css('background-color', '#f0a3a3')
toast.vm.someDataVariable = 'quasar'
toast.dismiss()
```

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
