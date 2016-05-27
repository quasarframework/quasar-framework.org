title: Vue State Management
---

As you should know, Pages and Layouts are essentially Vue instances. So they have a data object. It is good to learn how to efficiently share parts of the data object between components.

*The following is an extract (and adaptation) from [VueJS official website](http://vuejs.org)*.

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
