title: Handling Back Button
---
When writing reusable code for building a mobile App and a website, it's important to know how to handle the "Back" button. More specifically, how to manage buttons on your layout/page that should make your App "go back" to the previous screen.

> If you have no knowledge of [Vue Router](http://router.vuejs.org/), we highly recommend you read and understand how it works first.

## Navigation Scenario
Consider this situation: We have an App with two pages (so two routes): a login page (route "/") and another page with a list of items on multiple layout tabs-  Let's call this page "List page" from now on, where each tab has a route like "/list/shoes", "/list/hats". The Login page redirects to List page and List page has a "Logout" button, which redirects the user to the Login page.

How would you handle this situation? Normally, you'd write code like below for the Login and Logout button (we won't go into details of handling the login information and communicating with a server as this is outside of our point here):

> Please note that Quasar supports its own `v-link` directive, since this was dropped in Vue 2. Alternatively, you can use `<router-link>`:
``` html
<!-- Login button -->
<q-btn @click="$router.push('/list')">Login</q-btn>

<!-- Logout button -->
<q-btn @click="$router.push('/list')">Logout</q-btn>
```

Now you build your App and install it on a phone. You open up the App, hit login then logout, then the phone's back button. What you most likely want is for your App to exit at this point... but it doesn't! It goes to the "/list" route instead. It's kind of obvious why. Web history builds up as you hit the buttons:
```
# Start App
--> window.history.length is 1

# Hit Login button
--> window.history.length is 2

# Hit Logout button
--> window.history.length is 3!
```

What you'd like instead, is when you hit the Logout button, the `window.history.length` to be 1 again. Quasar can handle this automatically for you. Read about the `v-go-back` Vue directive.

## Directive "v-go-back"
Let's rewrite the Logout button to act as we would actually want it to work, which is to make `window.history.length` be 1 again:
``` html
<!-- Logout button -->
<button class="primary" v-go-back=" '/' ">Logout</button>
```

This directive determines if the Platform is Cordova, and if so, it performs a `window.history.back()` call instead of a `$router.push('/')`.

## Quirks
Now you may think everything will work smoothly, but you must be careful about how your app is stacking up the window history. Remember, we started out by saying that the List page has a layout with multiple tabs, each one with its own route ("/list/shoes", "/list/hats"). If we'd use `to="/list/shoes"` and `to="/list/hats'"` on your Tabs (read more about Tabs [here](/components/tabs.html)), then window history will build up when switching between the tabs. 

This incorrect behavior for apps is due to Vue Router pushing routes to the history by default. What you'd like instead, is for your window history length to stay the same, even if routes change. Fortunately, Vue Router comes to the rescue with the `replace` property, which essentially replaces current route instead of pushing it as a new route.

So, besides `to=" '...route...' "` you should add the `replace` attribute (becoming `to=" '...route...' " replace`). This will replace the current route in the window history rather than pushing it.

The same applies to `<router-link>`s.

> Always **think** about how you redirect your App to a new route, depending on what you want to achieve. Think if you really want to push a new route to window history or if you want to "replace" the current route. Otherwise the phone/tablet/browser "Back" button won't work quite as expected. Instead of finally exiting the App, it will make you go through all the routes in the reverse order they were visited. So when you hit back and go to the Login page, you'd expect another back to make the App exit, but it might make your App go to one of the List tabs, depending on the user's navigation history.
