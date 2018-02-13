title: Sharing State Between Components
---
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

## Best Solution: Vuex

Vuex (see documentation [here](http://vuex.vuejs.org/) and Github page [here](https://github.com/vuejs/vuex)) is an application architecture for centralized state management in Vue.js applications. It is inspired by Flux and Redux, but with simplified concepts and an implementation that is designed specifically to take advantage of Vue.js' reactivity system.

> Vuex is not supplied by default with Quasar Framework. NPM install it and import it from `src/main.js` in order to use it.

### Why using Vuex

If your app is simple enough, you probably don't need Vuex. Don't apply it prematurely. But if you are building a medium-to-large-scale SPA, chances are you have run into situations that make you think about how to better structure things outside of your Vue components. This is where Vuex comes into play.

When using Vue.js alone, we often tend to store the state "inside" our components. That is, each component owns a piece of our application state, and as a result the state is scattered all over the place. However, sometimes a piece of state needs to be shared by multiple components. A commonly-seen practice is letting one component "send" some state to other components using the custom event system. The problem with this pattern is that the event flow inside large component trees can quickly become complex, and it's often difficult to reason about when something goes wrong.

To better deal with shared state in large applications, we need to differentiate between component local state and application level state. Application state does not belong to a specific component, but our components can still observe it for reactive DOM updates. By centralizing its management in a single place, we no longer need to pass events around, because everything that affects more than one component should belong there. In addition, this allows us to record and inspect every mutation for easier understanding of state changes, and even implement fancy stuff like time-travel debugging.

![Vuex](/images/vuex.png)

Vuex also enforces some opinions on how to split state management logic into different places, but still allows enough flexibility for the actual code structure.
