title: Quasar Stepper
---
A Stepper is an interface for users to show numbered steps or for navigation. It's usually useful when user has to follow steps to complete a process.

<input type="hidden" data-fullpage-demo="web-components/stepper">

The navigation is handled by Quasar. User is able to go forward, back and to finish the process.

## Basic Usage

``` html
<q-stepper @finish="finish()" ref="stepper">
  <q-step title="Select campaign settings">
    Content, DOM Elements, Components, ...
  </q-step>

  <!-- Step specifying when user should be able to jump to next step -->
  <q-step title="Create an ad group" :ready="ready">
    Content, DOM Elements, Components, ...
    Do something and change 'ready' variable to boolean 'true'.
  </q-step>

  <q-step title="Create an ad">
    Content, DOM Elements, Components, ...
  </q-step>
</q-stepper>
```

## Stepper Container Component
> Following Vue methods and events apply only to `<q-stepper>` container component.

### Vue Methods
| Vue Method | Description |
| --- | --- |
| `reset()` | Resets progress |
| `nextStep()` | Stepper goes to next step. |
| `previousStep()` | Stepper goes to previous step. |
| `finish()` | Stepper goes to "complete" state. |

### Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `back-label` | String | Text to display instead of default 'Back' |
| `next-label` | String | Text to display instead of default 'Continue' |
| `finish-label` | String | Text to display instead of default 'Finish' |

### Vue Events
| Vue Event | Description |
| --- | --- |
| `@finish` | Stepper has finished all steps. |


## Step Vue Properties & Methods
> Following Vue properties and methods apply only to `<q-step>` child component.

### Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `title` | String | Step title |
| `ready` | Boolean | Can user continue with next step? Default is `true`. |

### Vue Methods
| Vue Method | Description |
| --- | --- |
| `nextStep()` | Stepper goes to next step. |
| `previousStep()` | Stepper goes to previous step. |
| `finish()` | Stepper goes to "complete" state. |

## Handling Jump to Next Step
Specifying the `ready` dom attribute property (Boolean) makes Stepper activate or deactivate the `Next` or `Finish` button. See step #2 in the demo.

``` html
<q-step title="Create an ad group" :ready="ready">
  Content, DOM Elements, Components, ...
  Do something and change 'ready' variable to boolean 'true'.
</q-step>
```

## Handling Stepper Finish
Use `@finish` event on `<q-stepper>` to execute a method when user hits the `Finish` button.
``` html
<q-stepper @finish="doSomething()">
  ...
</q-stepper>
```
