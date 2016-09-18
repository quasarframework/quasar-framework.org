title: Quasar Stepper
---
A Stepper is an interface for users to show numbered steps or for navigation. It's usually useful when user has to follow steps to complete a process.

<input type="hidden" data-fullpage-demo="web-components/stepper">

The navigation is handled by Quasar. User is able to go forward, back and to finish the process.

## Basic Usage

``` html
<quasar-stepper @finish="finish()" v-ref:stepper>
  <quasar-step title="Select campaign settings">
    Content, DOM Elements, Components, ...
  </quasar-step>

  <!-- Step specifying when user should be able to jump to next step -->
  <quasar-step title="Create an ad group" :ready="ready">
    Content, DOM Elements, Components, ...
    Do something and change 'ready' variable to boolean 'true'.
  </quasar-step>

  <quasar-step title="Create an ad">
    Content, DOM Elements, Components, ...
  </quasar-step>
</quasar-stepper>
```

## Container Vue Methods & Events

*Applies to `<quasar-stepper>` only:*

Methods:

| Vue Method | Description |
| --- | --- |
| `reset()` | Resets progress |
| `redraw()` | When adding/removing steps in DOM, this method is automatically called |
| `nextStep()` | Stepper goes to next step. |
| `previousStep()` | Stepper goes to previous step. |
| `finish()` | Stepper goes to "complete" state. |

Events:

| Vue Event | Type | Description |
| --- | --- | --- |
| `finish` | Function | Function to call when user completes all steps. |

## Step Vue Properties & Methods

*Applies to `<quasar-step>`:*

Properties:

| Vue Property | Type | Description |
| --- | --- | --- |
| `title` | String | Step title |
| `ready` | Boolean | Can user continue with next step? Default is `true`. |

Methods:

| Vue Method | Description |
| --- | --- |
| `nextStep()` | Stepper goes to next step. |
| `previousStep()` | Stepper goes to previous step. |
| `finish()` | Stepper goes to "complete" state. |

## Handling Jump to Next Step
Specifying the `ready` dom attribute property (Boolean) makes Stepper activate or deactivate the `Next` or `Finish` button. See step #2 in the demo.

``` html
<quasar-step title="Create an ad group" :ready="ready">
  Content, DOM Elements, Components, ...
  Do something and change 'ready' variable to boolean 'true'.
</quasar-step>
```

## Handling Stepper Finish
Use `@finish` event on `<quasar-stepper>` to execute a method when user hits the `Finish` button.
``` html
<quasar-stepper @finish="doSomething()">
  ...
</quasar-stepper>
```
