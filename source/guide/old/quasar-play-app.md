title: Quasar Play App
---
We have the dev server which offers hot-reload. We can build and test Apps on a desktop machine. If we want to release a native App, we can use emulators directly in the browser (read about debugging methods [here](/guide/cordova-wrapper.html#Tips-and-Troubleshooting)). It's cool. But, what if we want to develop our Apps directly on the phone, to tap and swipe items on it? Wouldn't it be way cooler to have hot-reload working on a phone too?

**Well, now you can.** 

Download and install the Quasar Play App (currently available only on the Google Play Store -- App Store will follow soon). This App (written with Quasar) will get you working in no time.

<a class="playstore" href='https://play.google.com/store/apps/details?id=com.quasarframework.quasarplay&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>

1. Make sure your phone and development machine can ping each other. In other words, they must be in the same network.

2. Start Dev Server
  ``` bash
  $ quasar dev --play
  ```

  Notice the `--play` parameter. This instructs the Quasar CLI to generate a QR code on your console, which will point Quasar Play to the newly created server.

  > You can skip generating a QR code and manually add the development URL (displayed in the console) to Quasar Play app.

3. Open up Quasar Play on your phone. Tap on `Play URL`. Click the FAB button which will pop out two small buttons. Tap on the green one and scan the QR code from your console.

That's it. You're done. Wait for your App to load. It should be really fast. You'll have your App running, as if it replaces Quasar Play.

> You can refresh your App if something goes wrong or close it and go back to Quasar Play at any time. A toolbar on top of the screen will slide down into view if you click on a small `+` button. To close the toolbar click on the small `+` button again.

> **IMPORTANT**
> While playing with your App in Quasar Play, Cordova functionality will currently not be available. This is due to Cordova Javascript code causing a crash in its Java container.

Give it a try! It will change how you develop your Apps.
