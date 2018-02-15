title: Configuring Cordova
---
We'll be using Quasar CLI (and Cordova CLI) to develop and build a Mobile App. The difference between building a SPA, PWA, Electron App or a Mobile App is simply determined by the "mode" parameter in "quasar dev" and "quasar build" commands.

We'll go over installing Cordova mode then we'll cover the two configuration files for your mobile apps.

## Installation
1. First step is to make sure you got the Cordova CLI installed and the necessary SDKs.
  ```bash
  $ npm install -g cordova
  ```

  * After this step you will need to install the Android platform SDK on your machine. You can [download the Android Studio here](https://developer.android.com/studio/index.html) and follow these [installation steps](https://developer.android.com/studio/install.html) afterwards.

  * Update your ~/.bashrc file to contain the correct paths to your installation of Android Studio:

  ``` bash
  export ANDROID_HOME="$HOME/Android/Sdk"
  PATH=$PATH:$ANDROID_HOME/tools; PATH=$PATH:$ANDROID_HOME/platform-tools
  ```

  * Start Android studio by changing into the folder you installed it in and run `./studio.sh`. Next step is to install the individual SDKs:

    Open the "Configure" menu at the bottom of the window:

    ![SDK manager](/images/Android-Studio-SDK-Menu.png "SDK manager")

    Select the desired SDKs. As per May 2017 Cordova supports 4.4 and up and click on "Apply" to install the SDKs.

    ![SDK selection](/images/Android-Studio-SDK-selection.png "SDK selection")

2. In order to develop/build a Mobile app, we need to add the Cordova mode to our Quasar project. What this does is that it uses Cordova CLI to generate a Cordova project in `/src-cordova` folder which will its `/src-cordova/www` folder overwritten each time you build.
  ```bash
  $ quasar mode -a cordova
  ```

  You can now verify if everything is in order. "cd" into `/src-cordova` and type:
  ```bash
  $ cordova requirements
  ```
  > On some newer Debian-based operating systems you might face a very persistent problem when running `cordova requiremets`. Please see the ["Android SDK not found" after installation](/guide/cordova-troubleshoot-and-tips.html#Android-SDK-not-found-after-installation-of-the-SDK) section for assistance.

3. If you want to jump right in and start developing, you can skip the "quasar mode" command and issue:
  ```bash
  $ quasar dev -m cordova -T [android|ios]
  ```
  This will add Cordova mode automatically, if it is missing.

## Config.xml
The most important config file for your mobile app is `/src-cordova/config.xml`. Like mentioned above, `/src-cordova` is a Cordova project folder, so please refer to [Cordova documentation](https://cordova.apache.org/docs/en/latest/) in order to understand what each file from there does. But for now, have a few moments to read about [config.xml](https://cordova.apache.org/docs/en/latest/config_ref/).

Some properties from this file will get overwritten as we'll see in next section.

## Quasar.conf.js
Quasar CLI helps you in setting some properties of the mobile Apps automatically (from config.xml): the Cordova "id", app version and description. This is for convenience so you'll be able to have a single point where, for example, you change the version of your app, not multiple files that you need to simultaneously touch which is error prone.

For determining the values for each of the properties mentioned above, Quasar CLI:
1. Looks in `/quasar.conf.js` for a "cordova" Object. Does it has "id", "version" and/or "description"? If yes, it'll use it/them.
2. If not, then it looks into your `/package.json` for "cordovaId", "version" and "description" fields.
