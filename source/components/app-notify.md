title: Quasar App Notify
---
Quasar App Notifiers appear on top of the screen above any other components to signal the user with a message and sometimes with an action too.
On mobile platforms they show up at the bottom edge of the screen and on desktop platforms they are shown on the top right edge of the screen.

<input type="hidden" data-fullpage-demo="app-notify">

Quasar App Notifiers are:

| Property | Description |
| --- | --- |
| Stackable | Multiple can be displayed simultaneous, but not more than 5 at a time. Only the last 5 will remain on screen and the rest are automatically dismissed. |
| Controllable | When a Notify is built you can control it completely. See *Notify Object Properties* above |
| Page or Layout Agnostic | App Notify do not depend on a Page or Layout |

## Basic Usage
A Quasar App Notify is a message displayed to the user. Below is an example of a simple notify containing only a message:
``` js
(Notify Object) quasar.notify(String or Object);
```
The *Notify Object* returned is an instantiation of your notify and has the following properties:

| Notify Object Property | Type | Description |
| --- | --- |
| `dismiss` | Function | Dismisses the Notify |
| `node` | jQuery Node | DOM node of the notify |
| `vm` | Object | VueModel of the Notify |

## Notify Options
We saw how to display a notify, but let's go deeper and analize the required parameter at instantiation, which can be a String or an Object.

When a String, it simply displays that String as the content of your Notify.
When an Object, you can specify more options:

``` js
quasar.notify({
  html: 'Message to display',
  icon: 'alarm_add',
  timeout: 2500,
  button: {
    label: 'Undo',
    handler: function() {
      // Specify what to do when button is clicked/tapped
    }
  },
  vm: {
    // VueModel for the Notify
  }
})
```

| Property | Mandatory | Default Value | Description |
| --- | --- | --- | --- |
| `html` | Yes | *none* | HTML to display. |
| `icon` | | *none* | Icon to use. See [Icons](/api/css-icons.html). |
| `timeout` | | 7000 | Timeout in milliseconds until being automatically dissmissed. Disable automatic dismissal with value "0". |
| `button` | | *none* | Place a button with an action, like "Undo". Specify `label` (String) and `handler` (Function). |
| `vm` | | {methods: ___pan} | VueModel for your Notify if necessary. Do not override the injected *___pan* method. |

## Controlling a Notify
``` js
var notify = quasar.notify('Some message');

notify.node.css('background-color', '#f0a3a3');
notify.vm.someDataVariable = 'quasar';
notify.dismiss();
```
