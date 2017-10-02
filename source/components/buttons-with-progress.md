title: Button with Progress
---

The Quasar button component also comes with a spinner or loading effect. You would use this for times when app execution may cause a delay and you want to give the user some feedback about that delay. When used, the button will display a spinning animation as soon as the user clicks the button.


## Basic Usage
```html
<q-btn loader color="orange" @click="simulateProgress">Button</q-btn>
```
You'll notice, you need to work with a method on the `@click` event, in order to control the actions requiring the progress indication. 

```javascript
  methods: {
    simulateProgress (e, done) {
      this.done.push(done)
    },
    stopProgress () {
      if (this.done.length) {
        this.done.forEach(d => d())
      }
      this.done = []
    }
  }
```

The `stopProgress()` method above shows how to stop the progress.


**NOTE**
While the progress effect is showing, the button's `click` event is disabled and the disabled effect is turned on automatically. The ripple effect of clicking the button is, however, still working. 


### Custom Spinner

If you'd like to add a different spinner than the default, you can do so by slotting in the spinner component you'd like.

```html
<q-btn icon="mail" color="orange" @click="simulateProgress">
  <q-spinner-facebook slot="loading" size="20" />
  Get Mail
</q-btn>
```

[See the q-spinner section](components/spinners.html) of the documentation for more details.