title: Transition (QTransition)
---

The Quasar Transition component (called QTransition) gives transitional animation behavior to any components or HTML elements, which are wrapped by it. It is basically a simplification of [the Vue Transition Component](https://vuejs.org/v2/guide/transitions.html). The transitions are used for entering (appearing) or leaving (disappearing) animations.

The animation effects are borrowed from [Animate.css](https://daneden.github.io/animate.css/).  So there are 12 general, 32 entering (In) and 32 leaving (Out) animation types currently available for you to use out of the box. Check the list either on Animate.css website or on the demo available for this page.

<input type="hidden" data-fullpage-demo="css/transition">


## Basic Usage

To use QTransition component, simply wrap a component or HTML element with the transition component and add the necessary properties to it.

It's also important that you import the CSS animation from Quasar's package as none will be supplied by default in order to reduce the footprint of your website/app.

### Adding an Animation to the Bundle
In you Vue component where the template contains a QTransition or in `src/main.js` or `src/App.vue` (if you are using in multiple places), import the animations like this:

```js
import 'quasar/animations/fadeIn.css'
import 'quasar/animations/fadeOut.css'
```

### Wrapping a Single Element
``` html
<!-- Example with wrapping only one DOM element / component -->
<div>
  <q-transition
    appear
    enter="fadeIn"
    leave="fadeOut"
  >
    <q-btn color="secondary" icon="mail">
      Email
    </q-btn>
  </q-transition>
</div>
```

### Wrapping Multiple Elements
You can also group components or DOM elements in a QTransition so that the same effects are applied to all of them simultaneously.

``` html
<!-- Example with wrapping multiple DOM elements / components -->
<div>
  <q-transition
    appear
    group
    enter="fadeIn"
    leave="fadeOut"
  >
    <p key="text">
       Lorum Ipsum
    </p>
    <q-btn
      key="email-button"
      color="secondary"
      icon="mail"
    >
      Email
    </q-btn>
  </q-transition>
</div>
```

Please note two things in the above example.

1. The `group` property must be added to animate a group of components and/or DOM elements.
2. The components and DOM elements must be keyed, like `key="text"` or `key="email-button"` in the example above.
3. Both examples above have the Boolean property `appear` specified, which makes the entering animation kick in right after component(s) have been rendered. This property is optional.

## Vue Properties
There are several properties within the transition component.

| Property | Type | Description |
| --- | --- | --- | --- |
| `appear` | Boolean | Should the entering (In) animation occur right after rendering DOM / component? |
| `enter` | String | The animation for transitioning into the screen. |
| `leave` | String | The animation for transitioning out of the screen. |
| `group` | Boolean | For transitions on a group of components or DOM elements. |
| `duration` | Number | The time in milliseconds the transition should take. |
| `name` | String | Used for custom animations, just like on the Vue Transition component. |

> **Note**
> The `enter` and `leave` properties are necessary, for the transition to work properly, unless you specify `name` property which tells QTransition to use a [custom animation](#Custom-Animations) defined by your own CSS classes.

## Vue Events
| Event |
| --- |
| `before-enter` |
| `before-leave` |
| `before-appear` |
| `leave` |
| `appear` |
| `after-enter` |
| `after-leave` |
| `after-appear` |

You can use the events to control state, which controls the display logic. Check out [the Alert component documentation](/components/alert.html#An-Alert-Component-Wrapped-in-a-Transition) for an example.

## Custom Animations
If the default animations supplied with Quasar are not enough, QTransition also allows you to specify custom animations defined by CSS classes in your website/app. This works much like Vue's Transition component (which it wraps) when specifying the `name` property.

> If you are only interested in using a custom transition, then it's more efficient to use Vue's internal `<transition>` component. Adding this feature for QTransition is just for convenience so you can dynamically switch from and to an Animate.css animation to a custom one if you like.

### Transition CSS Classes

**Note**. The following information (including the image) is taken from Vuejs official documentation for convenience, since QTransition is a wrapper for Vue's internal Transition component.

There are six CSS classes applied for enter/leave transitions. Replace `v` with the name of your custom animation (which you will supply QTransition as `name` property).

1. `v-enter`: Starting state for enter. Added before element is inserted, removed one frame after element is inserted.

2. `v-enter-active`: Active state for enter. Applied during the entire entering phase. Added before element is inserted, removed when transition/animation finishes. This class can be used to define the duration, delay and easing curve for the entering transition.

3. `v-enter-to`: Ending state for enter. Added one frame after element is inserted (at the same time `v-enter` is removed), removed when transition/animation finishes.

4. `v-leave`: Starting state for leave. Added immediately when a leaving transition is triggered, removed after one frame.

5. `v-leave-active`: Active state for leave. Applied during the entire leaving phase. Added immediately when leave transition is triggered, removed when the transition/animation finishes. This class can be used to define the duration, delay and easing curve for the leaving transition.

6. `v-leave-to`: Ending state for leave. Added one frame after a leaving transition is triggered (at the same time `v-leave` is removed), removed when the transition/animation finishes.

![Transition Diagram](/images/transition.png)

Each of the classes mentioned above are prefixed with `v-`, but if for example you are defining a custom transition named `custom-anim` then `v-enter` class would instead be `custom-anim-enter` (and so on for all others).

`v-enter-active` and `v-leave-active` give you the ability to specify different easing curves for enter/leave transitions.

### Example of Custom Animation

```html
<template>
  <div>
    <q-transition name="custom">
      <q-btn color="primary">Button</q-btn>
    </q-transition>
  </div>
</template>

<script>
// ...
</script>

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.custom-enter-active {
  transition: all .3s ease;
}
.custom-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.custom-enter, .custom-leave-to
  transform: translateX(10px);
  opacity: 0;
}
</style>
```
