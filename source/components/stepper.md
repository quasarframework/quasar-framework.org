title: Quasar Stepper
---
A Stepper is an interface for users to show numbered steps or for navigation. It's usually useful when the user has to follow steps to complete a process, like in a [wizard](https://en.wikipedia.org/wiki/Wizard_(software).

<input type="hidden" data-fullpage-demo="web-components/stepper">

The navigation is handled by Quasar. The can be allowed to go forward, back and to finish the process.

The stepper component is built from four different child components.

- **The header** - this is where the visualization of the steps is placed.
- **The step** - this is the individual step in the header. There can be multiple steps.
- **The pane** - this is the area below the stepper header or the step in a [vertical stepper](stepper.html#Vertical-Stepper), where your info and/ or form input goes for each step.
- **The navigation** - this is the area, where you can add buttons to navigate the different steps. It is positioned at the bottom of the stepper or at the bottom of each step, when the stepper is [vertical](stepper.html#Vertical-Stepper). 


## Basic Usage

``` html
  <q-stepper v-model="step" ref="stepper1" :loading="loading">
        <q-stepper-header :alternative-labels="alternativeLabels">
          <q-step :step="1" icon="alarm">
            Step 1
          </q-step>

          <q-step :step="2">
            Step 2
            <small>Almost there</small>
          </q-step>

          <q-step :step="3" icon="bluetooth" error>
            Step 3
          </q-step>

          <q-step :step="4" icon="wifi">
            Step 4 Step 4 Step 4 Step 4 Step 4 Step 4
          </q-step>

        </q-stepper-header>

        <q-step-pane :step="1">
          <p>
            Some text for step 1.
          </p>
        </q-step-pane>
        <q-step-pane :step="2">
          <p>
            Some text for step 2.
          </p>
        </q-step-pane>
        <q-step-pane :step="3">
          <p>
            Some text for step 3.
          </p>
        </q-step-pane>
        <q-step-pane :step="4">
          <p>
            Some text for step 4.
          </p>
        </q-step-pane>

        <q-stepper-navigation>
          <q-btn slot="left" class="primary clear" :disabled="step < 2" @click="$refs.stepper1.previous()">Back</q-btn>
          <q-btn class="primary clear">Cancel</q-btn>
          <q-btn class="primary" @click="$refs.stepper1.next()">Continue</q-btn>
        </q-stepper-navigation>
      </q-stepper>
```

## Stepper Container Component

> The following Vue properties and methods apply only to `<q-stepper>` container component.

### Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `loading` | Boolean | A toggle to display a loading spinner, should switching between steps take some time. |
| `doneIcon` | String, Boolean | Used to change the display of the icon, when the step is finished. Default is the "check" icon |
| `selectedIcon` | String, Boolean | Used to change the icon, when the step is selected. Default is the "edit" icon. |
| `errorIcon` | String, Boolean | Used to change the icon, when there is an error in the step. Default is the "warning" icon. |


### Vue Methods
| Vue Method | Description |
| --- | --- |
| `goToStep()` | Moves the user to the given step. It takes a number or text number argument as the step number. |
| `nextStep()` | Stepper goes to the next step. |
| `previousStep()` | Stepper goes to the previous step. |
| `reset()` | Returns the stepper back to the first step. |


## The Header Child-Component
The header component holds the child step components. You can have any number of steps in the header. 

**Note**
If you are creating a [vertical stepper](stepper.html#Vertical-Stepper), you can leave out the header component. 

### Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `alternativeLabels` | Boolean | When set to false, it controls the step labels to be to the right of the step icons. When set to true, the labels are set below the icons. |


## The Step Child-Component

> Following Vue properties and methods apply only to `<q-step>` child component.

### Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `step` | Number, String | The step number value. |
| `editable` | Boolean | Allows the step to be clicked, when true. Or it disables the step when false. |
| `done` | Boolean | Used to change the step icon to the given "done" icon. |
| `icon` | String | The icon used within the step. |
| `error` | Boolean | When set to true, the error icon is displayed. |


### Vue Methods
| Vue Method | Description |
| --- | --- |
| `select()` | Stepper goes to step, which was clicked on by the user. |
| `setEditable()` | Sets the editable value of the step. Default is true. |
| `setDone()` | Stepper goes to "complete" state. |


## The Pane Child-Component
The pane contains either a form for user input or informational content. 

### Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `step` | Number, String | The step number value. |

## The Navigation Child-Component
This component allows you to place buttons within the `<q-stepper>` to navigate through the steps. It is up to you to add whatever [buttons](components/buttons.html) you require.

**Note**
Any buttons will float left by default. However, if you add buttons into a  `<div>` with the attribute `slot="left"`, you can also add additional buttons outside of that `<div>`, which will then float right in the navigation section of the stepper.

## Vertical Stepper

It is also possible to build a stepper, which presents itself in a vertical fashion. To do this, simply order the child components in a different order.

### Basic Usage

```html
      <q-stepper v-model="step" ref="stepper">
        <q-step :step="1">
          Step 1
        </q-step>

        <q-step-pane :step="1">
          
          Some text goes here for step 1.

          <div style="margin-top: 35px">
            <q-btn class="primary" @click="$refs.stepper.next()">Continue</q-btn>
          </div>
        </q-step-pane>

        <q-step :step="2">
          Step 2
        </q-step>

        <q-step-pane :step="2">
          
          Some text or form elements go here for step 2.

          <div style="margin-top: 35px">
            <q-btn class="primary" @click="$refs.stepper3.next()">Continue</q-btn>
            <q-btn class="primary clear" @click="$refs.stepper3.previous()">Back</q-btn>
          </div>
        </q-step-pane>

        <q-step :step="3" icon="bluetooth" error>
          Step 3
        </q-step>

        <q-step-pane :step="3">
          
          Some text or form elements go here for step 2.

          <div style="margin-top: 35px">
            <q-btn class="primary" @click="$refs.stepper3.next()">Finish</q-btn>
            <q-btn class="primary clear" @click="$refs.stepper3.previous()">Back</q-btn>
          </div>
        </q-step-pane>
      </q-stepper>

```

Check out the examples in the play app on the right!