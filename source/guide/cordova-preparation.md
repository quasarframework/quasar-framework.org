title: Mobile App Preparation
---
Before we dive in to the actual development, we need to do some preparation work.

## 1. Installation
First step is to make sure you got the Cordova CLI installed and the necessary SDKs.
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

## 2. Add Cordova Quasar Mode
In order to develop/build a Mobile app, we need to add the Cordova mode to our Quasar project. What this does is that it uses Cordova CLI to generate a Cordova project in `/src-cordova` folder. `/src-cordova/www` folder will be overwritten each time you build.
```bash
$ quasar mode -a cordova
```

You can now verify if everything is in order. "cd" into `/src-cordova` and type:
```bash
$ cordova requirements
```
> On some newer Debian-based operating systems you might face a very persistent problem when running `cordova requiremets`. Please see the ["Android SDK not found" after installation](/guide/cordova-troubleshoot-and-tips.html#Android-SDK-not-found-after-installation-of-the-SDK) section for assistance.

## 3. Start Developing
If you want to jump right in and start developing, you can skip the previous step with "quasar mode" command and issue:
```bash
$ quasar dev -m cordova -T [android|ios]
```
This will add Cordova mode automatically, if it is missing.
