title: Alert
---
Quasar Alerts are like a mix between the dialog and toast components. They offer more options for appearance and control than toasts do and they can have a dismissal action and other behaviors, similar to the dialog component. The Alert component is built however, to be more specific to alerting the users of events happening in your app. It can be used either as a component or as a method.  

<input type="hidden" data-fullpage-demo="global/alert">

## Basic Usage as a Method
Below is an example of a simple Alert as a method containing only a message:

``` js
import { Alert } from 'quasar'

Alert.create({html: 'Warning, warning Will Robinson!'})
```

You can see this alert at the top right of the play app to the right. Please notice the defaults. 

1. The alert is red.
2. The alert needs an options object with the `html` property for adding text.
3. The icon on the left is the warning icon.
4. The alert floats above all content and at top right position.
5. The alert can be dismissed.
6. There are no transitional animations, when appearing or after dismissal.

Go ahead and dismiss this alert. 
   
From a UI perspective, these are fairly standard expectations for the looks of a simple warning alert. 

However, obviously not all alerts should look or even behave like this. Quasar allows us to do a good bit of customization of alerts.

## Alert Options as a Method
Let's go deeper and analyze the different optional properties available for the alert component created and used as a method.

Here is a more involved example:


``` js
import { Alert } from 'quasar'

Alert.create({
        enter: 'zoomIn',
        leave: 'zoomOut',
        color: 'positive',
        icon: 'wifi',
        html: 'A text with your alert\'s awesome message',
        position: 'top',
        buttons: [
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
To see this in action, click on the "Show Alert As Method" button in the example app to the right.

**Note**
If you do not define any buttons, the alert method will automatically be dismissible i.e. there will be the "X" button available to dismiss the alert. 

### Vue Properties
Here are all of the properties of the Alert component, when used as a method:

| Property | Type | Description |
| --- | --- | --- | --- |
| `enter` | String | The transition animation for displaying the warning. |
| `leave` | String | The transition animation for dismissing the warning. |
| `duration` | Number | The time in milliseconds any transition should take.|
| `color` | String | This can be any color set up under the [Q Color Palette](/api/css-color-palette.html).  |
| `name` | String | A given identifying name for the alert.  |
| `html` | String | HTML to display as the message text. |
| `icon` | String | Icon to use. See [Icons](/api/css-icons.html). |
| `position` | String | Controls the position of the alerts, when it is displayed. The available positions are `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left`, `left` and `top-left`|
| `button` | Array of Objects | Place one or more buttons within the alert, like "Snooze" or "Abort". Specify `label` (String) and `handler` (Function).|


## Basic Usage as a Component

An alert can also be created as a component. 
 

``` js
<q-alert
 color="green"
 ref="greenAlert"
 style="margin-bottom: 1.5rem"
 dismissible
 v-show="greenAlertVisible"
 v-model="greenAlertVisible"
 position="top-right"
>
 <q-icon name="cloud" slot="left" />
 {{ greenAlertText }}
</q-alert>

<script>
import { Alert } from 'quasar'

export default {
  data () {
    return {
      greenAlertVisible: true,
      greenAlertText: 'This is a green Alert!'
    }
  }
}

```
Creating an alert like this isn't very pragmatic, because it will be shown directly on the screen, once the component is first rendered, similar to the examples shown in the play app. 

However, you can also wrap the alert in [a transition](/components/transition.html). This will add the necessary behavior to your Alert's appearance and dismissal. Before we get into that, let's look at the options available in a Quasar's alert component. 

### Vue Properties
Here are the available properties, when using Alert as a component:

| Property | Type | Description |
| --- | --- | --- | --- |
| `color` | String | This can be any color set up under the [Q Color Palette](/api/css-color-palette.html).  |
| `v-show` | Boolean | Needs to be true, when using inside the transition component, for the alert to be shown. |
| `v-model` | Boolean | Needs to be true, when using inside the transition component, for the alert to be shown. |
| `position` | String | Controls the position of the alerts, when it is displayed. The available positions are `top`, `top-right`, `right`, `bottom-right`, `bottom`, `bottom-left`, `left` and `top-left`|
| `button` | Array of Objects | Place one or more buttons within the alert, like "Snooze" or "Abort". Specify `label` (String) and `handler` (Function).|
| `dismissible` | boolean | When used, the "X" button is added to the right to allow the dismissal of the alert. |
 
## An Alert Component Wrapped in a Transition

To make your component alert work more like a proper alert, you can wrap it within a [transition component](/components/transition.html) and add some simple logic to it for it to appear, when you want it to. 

``` html
<template>
  <div v-if="showGreenAlert">
    <q-transition
      enter="bounceInRight"
      leave="bounceOutRight"
      appear
      @after-leave="greenAlertDissmissed"
    >
      <q-alert
        color="green"
        ref="greenAlert"
        style="margin-bottom: 1.5rem"
        dismissible
        v-show="greenAlertVisible"
        v-model="greenAlertVisible"
        position="top-right"
      >
        <q-icon name="thumb_up" slot="left" />
        {{ greenAlertText }}
      </q-alert>
    </q-transition>
  </div>
</template>

```
``` js
<script>
import { Alert } from 'quasar'

export default {
  data () {
    return {
      showGreenAlert = true
      greenAlertVisible: true,
      greenAlertText: 'Excellent!'
    }
  },
  methods: {
    alertAsComponent () {
      this.showGreenAlert = true
    },
    greenAlertDissmissed () {
      this.showGreenAlert = false
      this.greenAlertVisible = true
    } 
  }
}
</script>
```

If you'd like to see how this actually behaves, click on the "Show Alert as Component" button in the example app to the right. Please also notice we are using the `q-icon` component in this example too. 

**Note**
The positioning of the alert method and alert component are different. This is normal behavior. 




