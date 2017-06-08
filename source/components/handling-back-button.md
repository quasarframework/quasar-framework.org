title: Handling Back Button
---
When writing same code for building a mobile App and a website simultaneously, it's important to know how to handle the "Back" button. More specifically, how to manage buttons on your layout/page that should make your App "go back" to the previous screen.

> It would probably be better if you read and understand how [Vue Router](http://router.vuejs.org/) works first.

## Navigation Scenario
Analyze this situation: We have an App with two pages (so two routes): a login one (route "/") and another one with a list of items on multiple layout tabs (let's call it "List page" from now on; each tab has a route like "/list/shoes", "/list/hats"). Login page redirects to List page and List page has a "Logout" button which redirects the user to the Login page.

How would you handle this situation? Normally, you'd write code like below for Login and Logout button (won't go into details of handling the login information and communicating with a server as this is outside of our point here):

> Please note that Quasar support its own `v-link` directive, since this was dropped in Vue 2. Alternatively you can use `<router-link>`:
``` html
<!-- Login button -->
<q-btn @click="$router.push('/list')">Login</q-btn>

<!-- Logout button -->
<q-btn @click="$router.push('/list')">Logout</q-btn>
```

Now you build your App and install it on a phone. You open up the App, hit login then logout. Then the phone's back button. What you most likely want is for your App to exit at this point... but it doesn't! It goes to "/list" route instead.. It's kind of obvious why. Web history builds up as you hit the buttons:
```
# Start App
--> window.history.length is 1

# Hit Login button
--> window.history.length is 2

# Hit Logout button
--> window.history.length is 3!
```

What you'd like instead is when you hit the Logout button the `window.history.length` to be 1 again. Quasar can handle this automatically for you. Read about the `v-go-back` Vue directive.

## Directive "v-go-back"
Let's rewrite the Logout button to act as we actually want it to work, which is to make `window.history.length` be 1 again:
``` html
<!-- Logout button -->
<button class="primary" v-go-back=" '/' ">Logout</button>
```

This directive determines if the Platform is Cordova, and if so, it performs a `window.history.back()` call instead of a `$router.push('/')`.

## Quirks
Now you think everything will work smoothly, but you must be careful on how you build up window history. Remember we started by saying that the List page has a layout with multiple tabs, each one with its own route ("/list/shoes", "/list/hats").

If we'd use `to="/list/shoes"` and `to="/list/hats'"` on your Tabs (read more about Tabs [here](/components/tabs.html)), then window history will build up when switching between the tabs, simply because Vue Router pushes routes to the history. What you'd like instead is for your window history length to stay the same, even if routes change. Fortunately, Vue Router comes to the rescue with the `replace` property which essentially replaces current route instead of pushing it further.

So, besides `to=" '...route...' "` you should add the `replace` attribute (becoming `to=" '...route...' " replace`). This will replace the current route in window history rather than pushing it.

Same applies obviously to `<router-link>`s.

> Always **think** on how you redirect your App to a new route, depending on what you want to achieve. Think if you really want to push a new route to window history or you want to "replace" the current route. Otherwise the phone/tablet/browser "Back" button won't work quite as expected and instead of finally exiting the App it will make you go through all routes in the reverse order they were visited. So when you hit back and go to Login page you'd expect another back to make the App exit, but it might make your App go to one of the List tabs, depending on how user navigation history.
