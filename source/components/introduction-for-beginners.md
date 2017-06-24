title: Introduction for Beginners
---
Before you begin with Quasar, it is a good idea to get acquainted with ES6 and have a fairly good knowledge about how Vue works. ([quick overview of ES6](https://github.com/lukehoban/es6features) and [full description](http://es6-features.org/#Constants) -- don't worry, you don't need to understand ALL of ES6). For devs experienced with reactive UIs, [the Vue documentation](https://vuejs.org/v2/guide/) itself takes half a day at most to read top-to-bottom and will help you understand how Quasar components can be used and configured.

If you are a total beginner to Vue and reactive UI libraries and want a good tutorial, we recommend you take a look at the [Udemy Course - Vue JS 2 - The Complete Guide](https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/overview).

After reading the Vue documentation, let's clear up some of the most frequently asked questions, like "How can I use Quasar components, Vue properties, methods and events".

## Single File Vue Components
You'll be building your Quasar app using `*.vue` files which contain multiple sections: 'template' (HTML), 'script' (Javascript) and 'style' (CSS).

```html
<template>
  <!-- you define your Vue template here -->
</template>

<script>
// This is where your Javascript goes
// to define your Vue component, which
// can be a Layout, a Page or your own
// component used throughout the app.

export default {
  //
}
</script>

<style>
/* This is where your CSS goes */
</style>
```

### CSS preprocessors
For the `<style>` tag, you can also use whatever CSS preprocessor you want. [Stylus](http://stylus-lang.com/) is available out of the box. For SCSS/SASS or LESS, you'll need to install their Webpack loaders (example: `npm install less-loader`).

After installing the loader you need (remember Stylus is already installed for you), you can specify you want your chosen preprocessor to handle the CSS code you're writing:

```html
<!-- notice lang="stylus" -->
<style lang="stylus">
.some-div
  font-size 15px
</style>
```

In the above example, you would replace `stylus` with the preprocessor you've chosen.

## Using Quasar Directive
Quasar comes with a few custom [Vue Directives](https://vuejs.org/v2/guide/custom-directive.html). In order to use them, you need to import them (globally or locally per Vue component where you use them).

Example importing Quasar directive locally:
```html
<template>
  <div>
    <div v-ripple>click me</div>
  </div>
</template>

<script>
import { Ripple } from 'quasar'

export default {
  directives: {
    Ripple
  },
  ...
}
</script>
```

> Notice how Ripple is used in the Vue HTML template as `v-ripple`. Vue directives are prefixed with `v-`.

Example importing Quasar directives globally. **This means you won't need to import the specified Quasar directive in every `*.vue` file where you are using them.**
```js
// We edit "src/main.js":
...
import Quasar, { Ripple } from 'quasar'
...
Vue.use(Quasar, {
  directives: {
    Ripple
  }
})
...
```

## Using Quasar Components
Quasar components have names beginning with "Q" like "QBtn" or "QElementResizeObservable". In order to use them, you need to import them (globally or locally per Vue component where you use them).

Example importing Quasar component locally:
```html
<template>
  <div>
    <q-btn @click="doSomething">Do something</q-btn>
    <q-icon name="alarm" />
  </div>
</template>

<script>
import { QBtn, QIcon } from 'quasar'

export default {
  components: {
    QBtn,
    QIcon
  },
  ...
}
</script>
```

> Notice how QBtn is used in the Vue HTML template as `<q-btn>`. If we'd import QElementResizeObservable, then we'd use it in template as `<q-element-resize-observable>`.

Example importing Quasar components globally. **This means you won't need to import the specified Quasar components in every `*.vue` file where you are using them.**
```js
// We edit "src/main.js":
...
import Quasar, { QBtn, QIcon } from 'quasar'
...
Vue.use(Quasar, {
  components: {
    QBtn,
    QIcon
  }
})
...
```

### Importing All Components and Directives for Development
You can import all Components and Directives globally.

> **IMPORTANT**
> This **will not** take advantage of tree shaking, causing your code to become bloated with unnescesary/unused code. **Not recommended for production.**. Use this only for quick testing purposes.

```js
// We edit "src/main.js":
...
import Quasar, * as All from 'quasar'
...
Vue.use(Quasar, {
  components: All,
  directives: All
})
...
```

### Self Closing Tags
Some Quasar components do not need you to include HTML content inside them. In this case, you can use them as self closing tags. One example with QIcon below:

```html
<q-icon name="cloud" />
```

Self-closing means the above template is the equivalent to:

```html
<q-icon name="cloud"></q-icon>
```

Both forms are valid and can be used.

## Handling Vue Properties
You will notice throughout the documentation that Quasar components have a section called "Vue Properties". These are often called **Props** in Vue documentation. Example:

| Vue Property | Type | Description |
| --- | --- | --- |
| `infinite` | Boolean | Infinite slides scrolling |
| `size` | String | Thickness of loading bar. |
| `speed` | Number | How fast should loading bar update its value (in milliseconds). |
| `columns` | Object | Object defining columns (see "Columns Definition" below). |
| `offset` | Array | Array with two numbers. Offset on horizontal and vertical (in pixels). |

Let's take some examples with a bogus Quasar component (we will call it QBogus) that supports the properties above. We will discuss each of the types of Vue properties in the below sections.

### Boolean Property
A boolean property means it only accepts a strictly Boolean value. The values will not be cast to Boolean, so you must ensure you are using a true Boolean.

If you are trying to control that property and change it dynamically at runtime, then bind it to a variable in your scope:
```html
<template>
  <q-bogus :infinite="myInfiniteVariable" />
</template>

<script>
export default {
  data () {
    return {
      myInfiniteVariable: false
    }
  }
}
</script>
```

If, on the other hand, you know this Boolean value is not going to change, you can use the shorthand version of the variable like a component attribute and just specify it. In other words, if you don't bind the variable to a variable in the component's scope, it will always be `true`:
```
<template>
  <q-bogus infinite />

  <!--
    the following is perfectly valid,
    but it's a longer version
  -->
  <q-bogus :infinite="true" />
</template>
```

### String Property
As you can imagine, Strings are required as a value for this type of property.
```html
<template>
  <!--
    direct assignment, no need for
    a variable in our scope
  -->
  <q-bogus size="24px" />

  <!--
    we can also bind it to a variable
    in our scope so we can dynamically
    change it
  -->
  <q-bogus :size="mySize" />
</template>

<script>
export default {
  data () {
    return {
      // notice String as value
      mySize: '16px'
    }
  }
}
</script>
```

### Number Property
```html
<template>
  <!--
    Case 1. Direct assignment.
    Notice the colon (":") before property name.
  -->
  <q-bogus :speed="50" />

  <!-- Case 2. Assignment through a scope variable -->
  <q-bogus :speed="myNumber" />
</template>

<script>
export default {
  data () {
    return {
      // notice Number as value
      myNumber: 50
    }
  }
}
</script>
```

### Object Property
```html
<template>
  <!-- Case 1. Direct assignment. -->
  <q-bogus :columns="{key: 'value', anotherKey: 'another value'}" />
  <!-- or a more elegant way for Case 1: -->
  <q-bogus
    :columns="{
      key: 'value',
      anotherKey: 'another value'
    }"
  />

  <!-- Case 2. Assignment through a scope variable -->
  <q-bogus :columns="myColumns" />
</template>

<script>
export default {
  data () {
    return {
      myColumns: {
        key: 'value',
        anotherKey: 'another value'
      }
    }
  }
}
</script>
```

### Array Property
```html
<template>
  <!-- Case 1. Direct assignment. -->
  <q-bogus :offset="[10, 20]" />

  <!-- Case 2. Assignment through a scope variable -->
  <q-bogus :offset="myOffset" />
</template>

<script>
export default {
  data () {
    return {
      myOffset: [10, 20]
    }
  }
}
</script>
```

## Handling Vue Methods
You will notice throughout the documentation that some Quasar components have a section called "Vue Methods". Example:

| Vue Method | Description |
| --- | --- |
| `next()` | Goes to next slide. |
| `previous(doneFn)` | Goes to previous slide. |
| `toggleFullscreen()` | Toggles fullscreen mode. |

In order for you to access these methods, you will need to set a Vue reference on the component first. Here's an example:

```html
<template>
  <!--
    Notice ref="myRef". We will use the name
    assigned to "ref" in the script part below
  -->
  <q-bogus ref="myRef" />
</template>

<script>
export default {
  // we can now access `this.$refs.myRef`
  // an example on the mounted() Vue component hook
  mounted () {
    // on next Vue tick, to ensure
    // our Vue reference exists
    this.$nextTick(() => {
      // calling "next()" method:
      this.$refs.myRef.next()
    })
  }
}
</script>
```

## Handling Vue Events
You will notice throughout the documentation that some Quasar components have a section called "Vue Events". **Do not confuse** these Vue events with the [Global Event Bus](/components/global-event-bus.html) as these two have nothing in common.

Example of "Vue Events" section in docs:

| Event Name | Description |
| --- | --- |
| `@open` | Triggered right after the Modal is opened. |
| `@close` | Triggered right after the Modal is closed. |

In order for you to catch these events, when they are triggered, you will need to add listeners for them on the component itself in the HTML template. Here's an example:

```html
<template>
  <q-bogus @open="doSomething" @close="doSomethingElse" />
</template>

<script>
export default {
  methods: {
    doSomething () {
      // this method has been called (in this case)
      // because @open event was triggered by QBogus component
    },
    doSomethingElse () {
      // this method has been called (in this case)
      // because @close event was triggered by QBogus component
    }
  }
}
</script>
```

There are times when you need to access native DOM events on a Quasar component too, like the native `@click`. Do not confuse native events with the Vue events emitted by the component. They are different things. Let's take an example: let's say we have a component (QBogus) that emits `@open` and `@close`, but doesn't emit a `@click` event. `@click` being a native DOM event, we can still catch it with the `.native` modifier:

```html
<!-- Notice "@click.native" -->
<q-bogus @click.native="myMethod" />
```
