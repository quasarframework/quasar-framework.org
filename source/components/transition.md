title: Transition
---

The Quasar Transition component gives transitional animation behavior to any components or HTML elements, which are wrapped by it. It is basically a simplification of [the Vue Transition Effect](https://vuejs.org/v2/guide/transitions.html). The transitions are used for entering (appearing) or leaving (disappearing) animations. There are 12 general, 32 entering (In) and 32 leaving (Out) animation types currently available for you to use. 

<input type="hidden" data-fullpage-demo="css/transition">
 

## Basic Usage

To use the transition component, simply wrap a component or HTML element with the transition component and add the necessary properties to it. 

``` html

<div>
  <q-transition
    appear
    :enter="'fadeIn'"
    :leave="'fadeOut'"
  >
    <q-btn class="secondary" icon="mail">Email</q-btn>
  </q-transition>
</div>

```

You can also group components or HTML elements in a transition component.

``` html  
<div>
  <q-transition
    appear
    group
    :enter="'fadeIn'"
    :leave="'fadeOut'"
  >
    <p key="text">
       Lorum Ipsum
    </p>
    <q-btn key="email-button" class="secondary" icon="mail">Email</q-btn>
  </q-transition>
</div>
```

Please note two things in the above example. 

1. The `group` property must be added to animate a group of components and/or HTML elements.
2. The components and HTML elements must be keyed, like `key="text"` or `key="email-button"` in the example above.

## Vue Properties
There are several properties within the transition component.

| Property | Type | Description |
| --- | --- | --- | --- |
| `appear` | Boolean | Without appear, the entering (In) transition will not happen. |
| `name` | String | To give the transition a CSS class name. |
| `enter` | String | (mandatory) The animation for transitioning into the screen. |
| `leave` | String | (mandatory) The animation for transitioning out of the screen. | 
| `group` | Boolean | For transitions on a group of components or HTML elements. |
| `duration` | Number | The time in milliseconds the transition should take. |

**Note** 
The `enter` and `leave` properties are necessary, for the transition to work properly.

## Vue Events
| Event |
| --- | --- | --- |
| `before-enter` | 
| `before-leave` | 
| `before-appear` | 
| `leave` | 
| `appear` | 
| `after-enter` | 
| `after-leave` | 
| `after-appear` | 


You can use the events to control state, which controls the display logic. Check out [the Alert component documentation](/components/alert.html#An-Alert-Component-Wrapped-in-a-Transition) for an example. 

 