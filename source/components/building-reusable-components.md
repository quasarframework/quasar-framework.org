title: Building Reusable Components
---

Vue.js greatly encourages the use of components to encapsulate reusable code and therefore [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) up your code.

Most of the time Vue components are distributed as so called "Single File Components". Single file components have the `.vue` file extension and allow to write the JS code, template, and style in the same file. These files are then put into a build system like [webpack](https://webpack.js.org/) and [vue-loader](https://github.com/vuejs/vue-loader) which will transform the template into a [render function](https://vuejs.org/v2/guide/render-function.html) and extract the styles into a CSS file.

Most of Quasars components are also distributed as single file components, you can check out their source [here](https://github.com/quasarframework/quasar/tree/dev/src/components).

## Extending components

Quasar is a framework and therefore provides building blocks to build your own Apps on top of it. But often the question arises how one could use the already existing Quasar components to build own components.

**The first thing to notice it that Vue.js favors composition over inheritance**.

Inheritance is a concept know from object oriented programming, where classes are able to extend another class to reuse its methods and attributes to build a new but similar class. Composition, on the other hand, is also known from object oriented programming, but instead of extending or overwriting an existing class, the class uses other classes to provide some common services.

### Mixins

Mixins allow reusing certain features that you need in a set of components to not repeat yourself writing that code over and over.

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

But as great as mixins are, you can not use another single file component as mixin because only the attributes are mixed in and not the template or style definition.

Let's assume we want to build a component called `MySelect` which behaves a bit different from `QSelect`.

If we would write the following code:

```
import { QSelect } from 'quasar'

export default {
  mixin: [QSelect]
}
```

We would end up with a component that has all the internal methods and data from `QSelect` but no template at all. So we would have to get to the source of `QSelect` and copy the whole template definition. This would work as long as `QSelect` gets updated and you forget to update the template as well. Even if you only update minor versions it could break, because you are not relying on the external interface of `QSelect` which is described in the docs, but also on the internal code, which normally one shouldn't have to care about.

But how do we build or own `MySelect` component?

### Custom select component

Let's take an example from the forum. Someone asked how to build a component that hides some of the props passed to `QSelect`. Specifically, he wanted to build a select component which always had the `filter` prop set to true and always apply a default `filter-placeholder`.
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

Because `v-model="foo"` is just syntactic sugar for `:value="foo" @input="foo = $event.target.the value"` we can define a property `value` on our new component, which is then passed as `value` to the inner `QSelect`. We are then listening to the `change` event on the `QSelect` which indicates that the value has changed. If we receive such an event, we are emiting an `input` event from our new component and pass the new value as parameter.

Now we can use the component like this:

```
<template>
  <my-select v-model="selected" :options="myOptions" />
</template>

<script>
  import MySelect from './MySelect'

  export default {
    data () => {
      return {
        selected: null,
        myOptions: []
      }
    },

    components: { MySelect }
  }
</script>
```


And this would render a `QSelect` with `filter` set to true and `filter-placeholder` set to "select".

But if we wanted to set other properties on the internal `QSelect` we would have to define all of them on our own component und pass them to `QSelect`.

### Pinpad component

Another user also asked how to build a custom component which is again a good example on how to use composition to create new components. He wanted to build a `Pinpad` component.

We can simply achieve that by using `QBtn`s which are aligned on a flexbox grid:

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
We could now even extend this component with other Quasar components like an `QInput` to allow for manually entered pins.

## How to style custom components

Styling custom components is easy, just declare your styles in the `<style></style>` section of your component.

But what if we want our styles to be consistent and be able to change them in a single place?

Quasar uses Stylus variables for that purpose.
If you want to use some of the variables in your own components you can just import them like so:

```
<template>...</template>

<script>...</script>

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

# Todos
* [ ] Explain slots
* [ ] Explain component communication
* [ ] Static components
* [ ] Directives
* [ ] Quasar Utils
