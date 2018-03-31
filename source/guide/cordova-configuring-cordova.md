title: Configuring Cordova
---
We'll be using Quasar CLI (and Cordova CLI) to develop and build a Mobile App. The difference between building a SPA, PWA, Electron App or a Mobile App is simply determined by the "mode" parameter in "quasar dev" and "quasar build" commands.

There are two configuration files of great importance to your mobile apps. We'll go over each one.

## Config.xml
The most important config file for your mobile app is `/src-cordova/config.xml`. Like mentioned above, `/src-cordova` is a Cordova project folder, so please refer to [Cordova documentation](https://cordova.apache.org/docs/en/latest/) in order to understand what each file from there does. But for now, have a few moments to read about [config.xml](https://cordova.apache.org/docs/en/latest/config_ref/).

Some properties from this file will get overwritten as we'll see in next section.

## Quasar.conf.js
Quasar CLI helps you in setting some properties of the mobile Apps automatically (from config.xml): the Cordova "id", app version and description. This is for convenience so you'll be able to have a single point where, for example, you change the version of your app, not multiple files that you need to simultaneously touch which is error prone.

For determining the values for each of the properties mentioned above, Quasar CLI:
1. Looks in `/quasar.conf.js` for a "cordova" Object. Does it have "id", "version" and/or "description"? If yes, it will use it/them.
2. If not, then it looks into your `/package.json` for "cordovaId", "version" and "description" fields.
