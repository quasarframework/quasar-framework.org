title: Building Reusable Components with Quasar
---

Vue greatly encourages the use of components to encapsulate reusable code. Following this practice can [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) up your code, saving tons of developer time and effort. Quasar also follows this same practice and distributes all its components encapsulated. This guide should help you build new components by either using existing Quasar components or by building your own from scratch.

Before you read this guide, please make sure you understand the concepts behind [Vue components](https://vuejs.org/v2/guide/components.html) and also read up on [Single File Components](https://vuejs.org/v2/guide/single-file-components.html) (SFC).


## Using existing components

Quasar as a framework provides the building blocks to build your own apps. But, often the question arises as to how one can use the already existing Quasar components to build their own components.

**The first thing to notice is that Vue favors composition over inheritance**.

Inheritance is a concept known from Object Oriented Programming, where classes are able to extend other classes in order to reuse their methods and attributes to build a new, but in some ways different, classes. Composition, on the other hand, is also a known concept from Object Oriented Programming. With composition, instead of extending or overwriting an existing class, the composed objects are built from the classes through interfaces or mixins, et. al. The main difference being inheritance builds an "is a" relationship between the objects and composition builds a "has a" relationship. Think about a page for a login, for example. It "has a" username field and "has a" password field. 

Being able to compose components together to make more intricate components, is a powerful concept of SFCs. 

### Compose components to build a new one

Most of the time you'll want to take existing Quasar components and build new components from them.
You can refer to this as the [Decorator / Wrapper Pattern](https://en.wikipedia.org/wiki/Decorator_pattern), also known from Object Oriented Programming. This pattern allows the developer to create new versions of an object by altering/extending its behavior through a wrapper object, which is given a new name. This new object can have any added methods or properties, but they do not affect the base object.

Let's take a look at a simple example:

### Custom select component

Let's assume we want to build a component that hides some of the props passed to `QSelect`. Specifically, we want to build a select component, which always has the `filter` prop set to true and always apply a default `filter-placeholder`.

A simple implementation of this wrapper component could look like this:

`MySelect.vue`
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

Because `v-model="foo"` is just syntactic sugar for `:value="foo" @input="foo = $event.target.the value"`, we can define a property `value` on our new component. This is then passed as `value` to the inner `QSelect`. Next, we can listen to the `change` event on the `QSelect` to trigger a method, as soon as the input has changed. If we receive such an event, we are emitting an `input` event from our new component and this new value is passed as a parameter, so it can again be used with `v-model`.

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

This would render a `QSelect` with `filter` set to true and `filter-placeholder` set to "select". A great way to inspect this is by using [vue-devtools](https://github.com/vuejs/vue-devtools).

Note that it is now no longer possible to use the standard `QSelect` properties. If we wanted to set other properties on the internal `QSelect`, we would have to define all of them on our own component and pass them to `QSelect`.

### Pinpad component

Now let's assume we do not want to wrap an existing component to simplify it, but instead, we want to build an entirely new component, which is not included with Quasar. This example is taken from a forum post, where a user wanted to build a pin pad component.

If you think about pin pads for a minute, you will quickly come to the conclusion that pin pads, in most cases, are made up of a matrix of buttons.

That's great, we already have the existing `QBtn` component included with Quasar, so these could be used to build our pin pad component.

The next thing we need for a pin pad is to order a set of buttons in a matrix. The CSS [flexbox layout](https://developer.mozilla.org/en/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) could be an easy solution. Thankfully, Quasar also has you covered here, since it has a [flexbox grid system](/components/flex-css.html) already built in.

If we throw these two thing together, building our pin pad is easy.

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

The above code gives us a whole new component by using existing components.

We could now even extend this component with other Quasar components like a `QInput` to allow for manually entered pins.

Of course, this is just a minimal example. We're missing styling of the buttons and all the logic that goes behind a pin pad.

### Mixins

Mixins allow for the re-use of code, by holding certain methods or properties, which set of components may need. Mixins are a great way avoid code duplication.

To define a mixin, one has to export an object that looks similar to a normal component. Other components now can use this mixin to implement the mixin functionality.

For example, lets say we need to call a `register` method on a lot of different components. This method calls an API and returns some identifier that should be stored in the data object of the component.

First, let us define the RegisterMixin:

```js
export const RegisterMixin = {
  data () {
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

Now that we have defined the mixin, we can use it with any other component and it will be "mixed in" the component's attributes.

```
import { RegisterMixin } from './registerMixin'

export default {
  mixins: [RegisterMixin]
}
```

A component can use any number of mixins. But, be aware of how Vue merges the options. You can read more about mixins [in the Vue docs](https://vuejs.org/v2/guide/mixins.html).

Quasar uses mixins for some of its internal functionality. For example the [RouterLinkMixin](https://github.com/quasarframework/quasar/blob/dev/src/utils/router-link.js). It allows the adding of link functionality to different components.

There is a caveat. As great as mixins are, you cannot really use another single file component as a mixin, because only the JavaScript parts are mixed into your component and not the template or style definitions.

Let's assume we want to build the `MySelect` component from above, using mixins.

If we would write the following code

```
import { QSelect } from 'quasar'

export default {
  mixin: [QSelect]
}
```

we would end up with a component that has all the internal methods, properties and data from `QSelect`, but no template at all. So we would have to get to the source of `QSelect` and copy the whole template definition. This would work up until `QSelect` gets updated and you forget to update the template as well. Even if you only update minor versions, it could still break, because you are not relying on the external interface of `QSelect`, which is described in the docs, nor the internal code, which normally one should never have to care about.

So mixins are great to share methods and properties between your own components.

## How to style custom components

Styling custom components is easy. Just declare your styles in the `<style>` section of your single file component or import an external style definition by using `<style src="/path/to/your/stlye"></style>`

But, what if we want our styles to be consistent and be able to change them in a single place?

Quasar uses Stylus variables for that purpose. if you want to use some of the variables in your own components you can just import them like so:

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

One particulary interesting thing about events is that `v-model="foo"` is just syntactic sugar for `:value="foo" @input="foo = $event.target.the value"`. If you want to build a custom component you can use `v-model`. Just emit an `input` event with the payload somewhere in your code.

## Directives

Another form of reusable code in Vue are [directives](https://vuejs.org/v2/guide/custom-directive.html).

Quasar provides a set of directives out of the box you can use.

### Swiping, Panning and Hold

The [`v-touch-pan`](/components/touch-pan.html), [`v-touch-swipe`](/components/touch-swipe.html) and [`v-touch-hold`](/components/touch-hold.html) directives allow you to add gesture and touch interactions to your custom components.

### Ripple

The [Material Ripple](/components/material-ripples.html) directive allows you add the well know ripple effect to your custom components.

## Utils

In addition to components and directives Quasar also offers a set of JavaScript Utils to simplify your component development, check them out in the Components > Utils section.
