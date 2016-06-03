title: VueModel Communication
---

As you should know, Pages and Layouts are essentially Vue instances. So they have a data object. It is good to learn how to efficiently share parts of the data object between components.

We'll start with an example of how to communicate between a Page and a Layout and then explaining how things work in the subsequent section.

## Page-Layout Communication Example
You can make use of the `quasar.current.page` and `quasar.current.layout` globals.

``` js
// Page Script file (defining its VueModel):
module.exports = function(done) {
  done({
    ...,
    data: {
      ...,
      checkboxModel: quasar.current.layout.vm.$data.checkboxModel
    }
  });

// Layout Script file (defining its VueModel):
module.exports = function(done) {
  done({
    ...,
    data: {
      ...,
      checkboxModel: false
    }
  });
};
```

> **IMPORTANT**
> Please note that we are using a Function to define the Page's VueModel. This allows us to connect Layout's VM to Page's VM each time the respective Page is loaded.
> -
> If we wouldn't have used a Function in Page's script file, then the link would have been made only when the Page is first loaded. Subsequent loads of the Page would maintain previous connections, which would render the functionality useless.
> -
> When defining a Layout or a Page through a Function, that Function is being run every time the Layout/Page is loaded.

## Explaining the Communication Design

*The following is an extract (and adaptation) from [VueJS official website &gt; State Management](http://vuejs.org/guide/application.html#State-Management)*.

In large applications, state management often becomes complex due to multiple pieces of state scattered across many components and the interactions between them. It is often overlooked that the source of truth in Vue instances is the raw data object - a Vue instances simply proxies access to it. Therefore, if you have a piece of state that should be shared by multiple instances, you should avoid duplicating it and share it by identity:

``` js
var sourceOfTruth = {}

var vmA = new Vue({
  data: sourceOfTruth
})

var vmB = new Vue({
  data: sourceOfTruth
})
```

Now whenever `sourceOfTruth` is mutated, both `vmA` and `vmB` will update their views automatically. Extending this idea further, we would arrive at the **store pattern**:

``` js
var store = {
  state: {
    message: 'Hello!'
  },
  actionA: function () {
    this.state.message = 'action A triggered'
  },
  actionB: function () {
    this.state.message = 'action B triggered'
  }
}

var vmA = new Vue({
  data: {
    privateState: {},
    sharedState: store.state
  }
})

var vmB = new Vue({
  data: {
    privateState: {},
    sharedState: store.state
  }
})
```

Notice we are putting all actions that mutate the store's state inside the store itself. This type of centralized state management makes it easier to understand what type of mutations could happen to the state, and how are they triggered. Each component can still own and manage its private state.

![Vue State Management](/images/vue-state-management.png)

One thing to take note is that you should never replace the original state object in your actions - the components and the store need to share reference to the same object in order for the mutations to be observed.

If we enforce a convention where components are never allowed to directly mutate state that belongs to a store, but should instead dispatch events that notify the store to perform actions, we've essentially arrived at the [Flux](https://facebook.github.io/flux/) architecture. The benefits of this convention is we can record all state mutations happening to the store, and on top of that we can implement advanced debugging helpers such as mutation logs, snapshots, history re-rolls etc.

The Flux architecture is commonly used in React applications. Turns out the core idea behind Flux can be quite simply achieved in Vue.js, thanks to the unobtrusive reactivity system. Do note what we demonstrated here is just an example to introduce the concept - you may not need it at all for simple scenarios, and you should adapt the pattern to fit the real needs of your application.
