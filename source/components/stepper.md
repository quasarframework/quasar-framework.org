title: Quasar Stepper
---
Quasar Stepper conveys progress through numbered steps. Steppers display progress through a sequence of logical and numbered steps. They may also be used for navigation. It's usually useful when the user has to follow steps to complete a process, like in a [wizard](https://en.wikipedia.org/wiki/Wizard_(software).

<input type="hidden" data-fullpage-demo="web-components/stepper">

The stepper component is built from three different child components:

- **QStepper** - main Stepper encapsulating component
- **QStep** - individual steps
- **QStepperNavigation** - helper for encapsulating Stepper navigation buttons (within QStep or globally for the stepper as direct child of QStepper)

## Basic Usage

Here's a small example showcasing a very basic Stepper to understand how components fit together.
```html
<q-stepper ref="stepper">
  <!-- Step: -->
  <q-step default title="First Step" subtitle="Here we go">
    ...Step content, components, ...
  </q-step>

  <!-- Step: -->
  <q-step title="Step 2">...</q-step>

  <!-- Step: -->
  <q-step title="Step 3" subtitle="Review and submit">...</q-step>

  <!--
    Optional.

    "Globally" available Stepper navigation which means
    that it will be visible regardless of the current step.
    If we'd put QStepperNavigation under a QStep then we'd
    be using it for that step only.
  -->
  <q-stepper-navigation>
    <q-btn flat @click="$refs.stepper.previous()">Back</q-btn>
    <q-btn @click="$refs.stepper.next()">Next</q-btn>
  </q-stepper-navigation>
</q-stepper>
```

A more involved example. This one doesn't uses QStepperNavigation as direct child of QStepper because each step has navigation configured. Notice the additional attributes on each component below. They will be detailed in next sections.
``` html
<q-stepper color="secondary" ref="stepper" alternative-labels>
  <q-step default name="first" title="Ad style">
    <div v-for="n in 10">Step 1</div>

    <!-- Navigation for this step at the end of QStep-->
    <q-stepper-navigation>
      <q-btn color="secondary" @click="$refs.stepper.next()">Continue</q-btn>
    </q-stepper-navigation>
  </q-step>

  <q-step error name="second" title="Custom channels" subtitle="Alert message">
    <div v-for="n in 10">Step 2</div>
    <q-stepper-navigation>
      <q-btn color="secondary" @click="$refs.stepper.next()">Next</q-btn>
      <q-btn color="secondary" flat @click="$refs.stepper.previous()">Back</q-btn>
    </q-stepper-navigation>
  </q-step>
  <q-step name="third" title="Get code">
    <div v-for="n in 3">Step 3</div>
    <q-stepper-navigation>
      <q-btn color="secondary" @click="$refs.stepper.next()">Next</q-btn>
      <q-btn color="secondary" flat @click="$refs.stepper.previous()">Back</q-btn>
    </q-stepper-navigation>
  </q-step>
  <q-step name="fifth" disable title="Disabled">
    <div v-for="n in 3">Step 4</div>
    <q-stepper-navigation>
      <q-btn color="secondary" @click="$refs.stepper.next()">Next</q-btn>
      <q-btn color="secondary" flat @click="$refs.stepper.previous()">Back</q-btn>
    </q-stepper-navigation>
  </q-step>
  <q-step name="fourth" title="Review and Finalize">
    <div v-for="n in 3">Step 5</div>
    <q-stepper-navigation>
      <q-btn color="secondary" @click="$refs.stepper.goToStep('first')">Restart</q-btn>
      <q-btn color="secondary" flat @click="$refs.stepper.previous()">Back</q-btn>
    </q-stepper-navigation>
  </q-step>
</q-stepper>
```

## QStepper (Parent)

| Vue Property | Type | Description |
| --- | --- | --- |
| `color` | String | Main color of Stepper, from [Quasar Color Palette](/components/color-palette.html). |
| `vertical` | Boolean | Set Stepper as vertical instead of default horizontal. |
| `alternative-labels` | Boolean | Use alternative labels (applies only to horizontal Stepper). |
| `contractable` | Boolean | Labels are hidden on narrow windows. |
| `order` | Number / String | If you add/remove Steps dynamically, it's good to use this prop to specify the order in which Steps should be displayed. |
| `doneIcon` | String, Boolean | Used to change the display of the Step icon, when the step is finished. Default is the "check" icon. |
| `selectedIcon` | String, Boolean | Used to change the icon, when a Step is selected. Default is the "edit" icon. |
| `errorIcon` | String / Boolean | Used to change the icon, when there is an error in a Step. Default is the "warning" icon. |

You can also control the current step by using `v-model` on QStep. More details in next section.

| Vue Method | Description |
| --- | --- |
| `goToStep(String)` | Moves the user to the given Step, defined by Step's "name" property. |
| `next()` | Stepper goes to the next step. |
| `previous()` | Stepper goes to the previous step. |
| `reset()` | Returns the stepper back to the first step. |

### Using `v-model`
Each QStep has a `name` prop (which is optional). Use this prop along with `v-model` to control the current step.

The example below shows how you can use `v-model` alone to control navigation. Notice the `@click` events. If you dynamically insert/remove Steps it's better to use a Vue reference on QStepper and call `next()` or `previous()` methods since these methods are not binded to specific Step names.

```html
<template>
  <q-stepper v-model="currentStep">
    <q-step name="first">
      ...
      <q-stepper-navigation>
        <q-btn color="primary" @click="currentStep = 'second'">Go to Step 2</q-btn>
      </q-stepper-navigation>
    </q-step>

    <q-step name="second">
      ...
      <q-stepper-navigation>
        <q-btn color="primary" @click="currentStep = 'first'">Go Back</q-btn>
      </q-stepper-navigation>
    </q-step>
  </q-stepper>
</template>

<script>
export default {
  data () {
    return {
      // we initialize it with first step's name
      currentStep: 'first'
    }
  }
}
</script>
```

## QStep (Child)

| Vue Property | Type | Description |
| --- | --- | --- |
| `name` | Number, String | Step name, used by QStepper's `v-model` or `goToStep()` method. |
| `error` | Boolean | Mark Step as having an error. |
| `default` | Boolean | Use on only one Step to make it be the active one by default. Previous steps will be marked as `done`. Useful when refreshing page. |
| `title` | String | Step title. |
| `subtitle` | String | Step's additional information along the title. |
| `icon` | String | Step's icon when Step isn't finished yet. If no `active-icon` is specified, then this icon will be used when Step is currently active too. |
| `active-icon` | String | The icon used for the Step when it's currently active. Defaults to `icon` prop value when `active-icon` isn't specified. |
| `done-icon` | String | The icon to use for Step when it's finished. |
| `error-icon` | String | The icon to use for Step when it's marked as having an error. |

Methods for this component:

| Vue Method | Description |
| --- | --- |
| `select()` | Stepper selects this step as current one. |

## QStepperNavigation (Child of QStepper or QStep)
This component allows you to place buttons within QStepper or QStep to navigate through the steps. It is up to you to add whatever [buttons](components/buttons.html) you require.

```html
<q-stepper ref="myStepper">
  ...
  <q-stepper-navigation>
    <q-btn color="secondary" @click="$refs.myStepper.next()">Next</q-btn>
    <q-btn color="secondary" flat @click="$refs.myStepper.previous()">Back</q-btn>
  </q-stepper-navigation>
</q-stepper>
```

## More Examples

### Vertical Stepper

It is also possible to build a stepper, which presents itself in a vertical fashion. To do this, simply use `vertical` property on QStepper:

```html
<q-stepper vertical>
  <q-step>..</q-step>
  <q-step>..</q-step>
  ...
</q-stepper>
```

When using a vertical Stepper, it doesn't really make sense to use a "global" QStepper navigation. Instead, use navigation within each QStep.

### Displaying Progress
A common case is where you need to take an asynchronouse action (like an Ajax call) before going to next step. Make use of [QInnerLoading](/components/inner-loading.html) component for this:

```html
<q-stepper>
  <!-- Steps... -->
  ........

  <!--
    Create a Boolean scope variable (here it's "inProgress")
    and binded to "visible" prop.
    Then toggle it whenever you need to display
    that the Stepper has a background process going.
  -->
  <q-inner-loading :visible="inProgress" />
</q-stepper>
```

### Specific Steps Order
If you dynamically add/remove Steps, then you need to specify the `order` property (for ALL QSteps) so that the Stepper will know the actual order of Steps. By using `v-if` or `v-for` directives, Vue & Quasar can't ensure Steps will be registered in the order they are placed in DOM.

> **IMPORTANT**
> Just make sure that when you use `order` you apply it to **all** QSteps and don't leave out any step without it. Either use `order` for all QSteps or don't use it at all.

```html
<q-stepper>
  <!-- Will come as second step -->
  <q-step :order="2">..</q-step>

  <!-- Will come as first step -->
  <q-step :order="1">..</q-step>

  <!-- Will come as third step -->
  <q-step :order="3">..</q-step>
</q-stepper>
```

The `order` property applied to all QStep doesn't has to be strictly growing consecutively. Setting `order` as `10`, `100` and `52` will work too.
