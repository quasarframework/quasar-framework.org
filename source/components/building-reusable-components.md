title: Building Reusable Components with Quasar
---

Vue greatly encourages the use of components to encapsulate reusable code and therefore [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) up your code. Quasar also follows this practice and distributes all its components encapsulated. This guide should help you to build new components by either using existing Quasar components or starting from scratch.

Before you read this guide, please make sure you understand the concepts behind [Vue components](https://vuejs.org/v2/guide/components.html) and also read up on [Single File Components](https://vuejs.org/v2/guide/single-file-components.html).


## Using existing components

Quasar is a framework and therefore provides building blocks to build your own apps on top of it. But often the question arises how one could use the already existing Quasar components to build own components.

**The first thing to notice is that Vue favors composition over inheritance**.

Inheritance is a concept know from object oriented programming, where classes are able to extend another class to reuse its methods and attributes to build a new but similar class. Composition, on the other hand, is also known from object oriented programming, but instead of extending or overwriting an existing class, the class uses other classes to provide some common services.

### Compose components to build a new one

Most of the times you want to take existing Quasar components and build new components on top of them.
You can refer to this as the [Decorator pattern / Wrapper](https://en.wikipedia.org/wiki/Decorator_pattern) known from object oriented programming. This pattern allows to create new versions of an object and altering/extending its behavior by wrapping the existing object and giving it a new name, therefore not affecting the base object.

Let's take a look at a simple example:

### Custom select component

Let's assume we want to build a component that hides some of the props passed to `QSelect`. Specifically, we want to build a select component which always has the `filter` prop set to true and always apply a default `filter-placeholder`.

A simple implementation of this component could look like this:

```
<template>
    <q-select :value="value" :options="options" @change="handleChange" filter filter-placeholder="select"/>
</template>

<script>
  import { QSelect } from 'quasar'

  export default {
    props: ['value', 'options'],
    methods: {
      handleChange (newVal) {
        this.$emit('input', newVal)
      }
    },
    components: {
      QSelect
    }
  }
</script>
```

Because `v-model="foo"` is just syntactic sugar for `:value="foo" @input="foo = $event.target.the value"` we can define a property `value` on our new component, which is then passed as `value` to the inner `QSelect`. Then we can listen to the `change` event on the `QSelect` to trigger a method when the input has changed. If we receive such an event, we are emitting an `input` event from our new component and pass the new value as a parameter, so it can again be used with `vmodel`.

Now we can use the component like this:

```
<template>
  <my-select v-model="selected" :options="myOptions" />
</template>

<script>
  import MySelect from './MySelect'

  export default {
    data () {
      return {
        selected: null,
        myOptions: []
      }
    },

    components: { MySelect }
  }
</script>
```

This would render a `QSelect` with `filter` set to true and `filter-placeholder` set to "select". A great way to inspect this is by using [vue-devtools](https://github.com/vuejs/vue-devtools)

Note that we now can not use all the standard `QSelect` properties. If we wanted to set other properties on the internal `QSelect` we would have to define all of them on our own component and pass them to `QSelect`.

### Pinpad component

Now let's assume we do not want to wrap an existing component to simply it, but instead, we want to build an entirely new component which is not included with Quasar. This example is taken from a forum post, where a user wanted to build a pin pad component.

If you think about pin pads for a minute, you will quickly come to the conclusion that pin pads most of the time are made up of a matrix of buttons.

That's great, we already have the existing `QBtn` component included with Quasar, so these could be used to build our pin pad component.

Next thing we need for a pin pad is to order a set of buttons in a matrix. For this the CSS [flexbox layout](https://developer.mozilla.org/en/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) is great. Gladly Quasar also has you covered here and already includes a [flexbox grid](/components/flex-css.html).

If we throw this two thing together, building our pin pad is easy.

```
<template>
    <div>
        <div v-for="row in 3" class="row justify-center">
            <div v-for="col in 3" class="col-auto">
                <q-btn @click="handleClick((row-1)*3 + col)">
                    {{ (row-1)*3 + col }}
                </q-btn>
            </div>
        </div>
    </div>
</template>

<script>
  import { QBtn } from 'quasar'

  export default {
    data () {
      return {
        pin: ''
      }
    },
    methods: {
      handleClick (digit) {
        this.pin += digit
      }
    },
    components: { QBtn }
  }
</script>
```

This gives us a whole new component by using existing components.

We could now even extend this component with other Quasar components like a `QInput` to allow for manually entered pins.

Of course, this is just a minimal example, we miss styling of the buttons and all the logic that goes behind a pin pad.

### Mixins

Mixins allow re-using certain features that you need in a set of components to not repeat yourself writing that code over and over.

To define a mixin one has to export an object that looks similar to a normal component. Other components now can use this mixin to implement the mixin functionality.

For example, lets we need to call a `register` method on a lot of different components. This method calls an API and returns some identifier that should be stored in the data object of the component.

First, let us define the RegisterMixin:

```js
export const RegisterMixin = {
  data () => {
    return {
      id: ''
    }
  },

  methods: {
    register () {
      // Lets assume we extracted the AJAX call to the Registration class
      new Registration()
        .register()
        .then(response => {
          this.id = response.id
        })
    }
  },

  created () {
    this.register()
  }
}
```

Now that we have defined the mixin, we can use it on any other component and it will be mixed in the component attributes.

```
import { RegisterMixin } from './registerMixin'

export default {
  mixins: [RegisterMixin]
}
```

A component can use as many mixins as it likes.
But be aware how Vue merges the options. You can read more about mixins [in the Vue docs](https://vuejs.org/v2/guide/mixins.html).

Quasar uses mixins for some of its internal functionality. For example, the [RouterLinkMixin](https://github.com/quasarframework/quasar/blob/dev/src/utils/router-link.js) which allows adding link functionality to different components.

But as great as mixins are, you can not really use another single file component as mixin because only the JavaScript parts are mixed into your component and not the template or style definition.

Let's assume we want to build the `MySelect` component from above, using mixins.

If we would write the following code

```
import { QSelect } from 'quasar'

export default {
  mixin: [QSelect]
}
```

we would end up with a component that has all the internal methods and data from `QSelect` but no template at all. So we would have to get to the source of `QSelect` and copy the whole template definition. This would work as long as `QSelect` gets updated and you forget to update the template as well. Even if you only update minor versions it could break, because you are not relying on the external interface of `QSelect` which is described in the docs, but also on the internal code, which normally one shouldn't have to care about.

So mixins are great to simplify your own components and if you want to build an entirely new component on top of existing Quasar logic.


## How to style custom components

Styling custom components is easy, just declare your styles in the `<style>` section of your single file component or import a external style definition by using `<style src="/path/to/your/stlye"></style>`

But what if we want our styles to be consistent and be able to change them in a single place?

Quasar uses Stylus variables for that purpose.
If you want to use some of the variables in your own components you can just import them like so:

```
<template>
  ...
</template>

<script>
  ...
</script>

<style lang="stylus">
  @import '~variables'
</style>
```

Now you can use all the [Stylus variables](/components/stylus-variables.html) like colors or breakpoints in your own component.

```stylus
@import '~variables'

h1
  color $primary
```

## Inter-component communication

Vue provides various ways to allow two or more components to communicate with each other.

### Props

[Props](https://vuejs.org/v2/guide/components.html#Props) are used to pass data from a parent component to a child component.

Almost all Quasar components use props to allow you to pass data or set options on them.

### Events

For more complex communication events are used.

One particulary interesting thing about events is that `v-model="foo"` is just syntactic sugar for `:value="foo" @input="foo = $event.target.the value"`. If you want to build a custom component you can use `v-model` on, just emit an `input` event with the payload somewhere in your code.

## Directives

Another form of reusable code in Vue are [directives](https://vuejs.org/v2/guide/custom-directive.html).

Quasar provides a set of directives out of the box you can use.

### Swiping, Panning and Hold 

The [`v-touch-pan`](/components/panning.html), [`v-touch-swipe`](/components/swiping.html) and [`v-touch-hold`](/components/touch-hold.html) directives allow you to add gesture and touch interactions to your custom components.

### Ripple

The [Material Ripple](/components/material-ripples.html) directive allows you add the well know ripple effect to your custom components.

## Utils

In addition to components and directives Quasar also offers a set of JavaScript Utils to simplify your component development, check them out in the Utils section.
