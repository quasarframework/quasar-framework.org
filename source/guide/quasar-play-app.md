title: Quasar Play App
---
We have the dev server which offers hot-reload. We can build and test Apps on a desktop machine. If we want to release a native App we can use emulators directly in the browser (read about debugging methods [here](http://localhost:4000/guide/cordova-wrapper.html#Tips)). It's cool. But what if we want to develop our Apps directly on phone, tap, swipe items on it. Wouldn't it be way cooler to have hot-reload working on a phone too?

**Well, now you can.** Download and install Quasar Play App (currently available only on the Google Play Store). This App (written with Quasar) will get you working in no time.

1. Start Dev Server
  ``` bash
  $ quasar dev --play
  ```

  Notice the `--play` parameter. This makes Quasar CLI generate a QR code on your console that will point Quasar Play to the newly created server.

  > You can skip generating a QR code and manually add the development URL (displayed in the console) to Quasar Play app.

2. Open up Quasar Play on your phone. Tap on `Play URL`. Click the FAB button which will pop out two small buttons. Tap on the green one and scan the QR code from your console.

That's it. You're done. Wait for your App to load, usually really fast. You'll have your App running as if it replaces Quasar Play.

> You can refresh your App if something goes wrong or close it and go back to Quasar Play at any time. A toolbar on top of the screen will slide down into view if you click on a small `+` button. To close the toolbar click on the small `+` button again.

Give it a try! It will change how you develop your Apps.
