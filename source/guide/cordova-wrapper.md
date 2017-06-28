title: Cordova App Wrapper
---
Cordova allows you to wrap your Quasar App into a native mobile App. In the following examples we'll be using Quasar CLI to manage this. After the initial setup you will need to wrap each project individually and add the desired platforms (Android and/or iOS).


## Initial setup steps

There are some initial steps you need to take before you can wrap your apps using Cordova:

1. First install Cordova globally on your machine:
	``` bash
	$ npm install -g cordova
	```

2. After this step you will need to install the Android platform SDK on your machine. You can [download the Android Studio here](https://developer.android.com/studio/index.html#download) and follow these [installation steps](https://developer.android.com/studio/install.html) afterwards.

3. Update your ~/.bashrc file to contain the correct paths to your installation of Android Studio:

	``` bash
	export ANDROID_HOME="$HOME/Android/Sdk"
	PATH=$PATH:$ANDROID_HOME/tools; PATH=$PATH:$ANDROID_HOME/platform-tools
	```

4. Start Android studio by changing into the folder you installed it in and run `./studio.sh`. Next step is to install the individual SDKs:

	Open the "Configure" menu at the bottom of the window:

	![SDK manager](/images/Android-Studio-SDK-Menu.png "SDK manager")

	Select the desired SDKs. As per May 2017 Cordova supports 4.4 and up and click on "Apply" to install the SDKs.

	![SDK selection](/images/Android-Studio-SDK-selection.png "SDK selection")


## Wrapping and configuration of your App

To transform a Quasar project into a working Cordova app, you need to wrap it initially. The following steps explain how to wrap your app and add the desired platforms.


### Wrapping

Run the following command to wrap your app in your project folder:
``` bash
$ quasar wrap cordova
```

This command generates a subfolder inside your App named `/cordova`. It contains the assets of a Cordova project mapped to your Quasar App's production ready code (`/dist`).

It will ask you if you want to install the Crosswalk plugin which applies to Android apps only. Crosswalk ensures that your App will have the same browser runtime (which is also the latest and greatest) on all Android platforms. The downside is that it will also make your native App package file bigger. Read more [here](https://crosswalk-project.org/documentation/about.html) about Crosswalk.

> **It is highly recommended that you opt for the Crosswalk plugin to be installed.** Otherwise your App might experience unexpected behavior on older platforms.

If however you don't wrap your App with Crosswalk from the CLI you can add it later with:
``` bash
$ cd cordova
$ cordova plugin add cordova-plugin-crosswalk-webview
```

> **NOTE for Windows Developers**
> It is possible that you get `Error: EPERM: operation not permitted, symlink '..\dist'`, in which case you need to add privileges for your user to be able to create symlinks. Read [here](http://superuser.com/questions/104845/permission-to-make-symbolic-links-in-windows-7).

> Another work-around and a quick solution is creating the symlink manually (after running `quasar wrap cordova`). To do so, start a command line as Administrator, change directory (`cd`) to the newly created `cordova` directory, run `mklink www ..\dist\`.

### Adding platforms

> **IMPORTANT**
> Change into the `/cordova` subfolder in your Quasar project before you run any `cordova` commands.

After making the wrapper and making sure you have the platform's SDK installed on your machine, you need to add at least a platform to your App, like this:
``` bash
$ cd cordova
$ cordova platform add android

# need to be on running a Mac OS for iOS:
$ cordova platform add ios
```

To verify if you fulfill all requirements run the follow command:

``` bash
$ cordova requirements
```

> On some newer Debian-based operating systems you might face a very persistent problem when running `cordova requiremets`. Please see the ["Android SDK not found" after installation](#android-sdk-not-found-after-installation-of-the-sdk) section for assistance.

### Running iOS simulator

To run your wrapped app on an ios simulator, you need to be on running a Mac OS for iOS and excecute the following command:
``` bash
$ cordova run ios
```
In case you run into the bug described here:
> Cannot read property 'replace' of undefined

Please follow the steps here: [phonegap/ios-sim#210](https://github.com/phonegap/ios-sim/issues/210).

For other cordova related bugs please try to look into the [official Cordova documentation](https://cordova.apache.org/) first.

## Cordova Plugins
There are lots of Cordova plugins available which enables to you access the Camera, NFC, Battery Status, Contacts, Geolocation, Device motion and orientation and many more.

Check out Cordova's website. Example for Battery Status: [here](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-battery-status/index.html).

## Tips and Troubleshooting

### Browser Simulator
Use Google Chrome's emulator from Developer Tools. It's a fantastic tool. You can select which device to emulate, but keep in mind that it's an *emulator* and not the real deal.

![Google Chrome emulator](/images/browser-simulator.png "Google Chrome emulator")

### Disabling iOS rubber band effect

When building an iOS app with Cordova and you want to disable the rubber band effect (https://www.youtube.com/watch?v=UjuNGpU29Mk), add this to your `config.xml` from the `cordova` wrapper folder inside your project:

``` xml
<Preference name = "DisallowOverscroll" value = "true" />
```

### Remote Debugging
If you are debugging Android Apps, you can use Google Chrome [Remote Debugging](https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/remote-debugging?hl=en) through a USB cable attached to your Android phone. Combine this with [Quasar Play](/guide/quasar-play-app.html) App and you get an excellent debugging environment.

> This way you have Chrome Dev Tools directly for your App running on the phone. Inspect elements, check console output, and so on and so forth.

![Android Remote Debugging](/images/remote-debug.png "Android Remote Debugging")
![Android Remote Debugging](/images/remote-debug-2.png "Android Remote Debugging")

### "Android SDK not found." after installation of the SDK

Some newer Debian-based OS (e.g. ubuntu, elementary OS) might leave you with a `Android SDK not found.` after you installed and (correctly) configured the environment. The output might look similar to this:

``` bash
$ cordova requirements

Requirements check results for android:
Java JDK: installed 1.8.0
Android SDK: installed true
Android target: not installed
Android SDK not found. Make sure that it is installed. If it is not at the default location, set the ANDROID_HOME environment variable.
Gradle: not installed
Could not find gradle wrapper within Android SDK. Might need to update your Android SDK.
Looked here: /home/your_user/Android/Sdk/tools/templates/gradle/wrapper
Error: Some of requirements check failed
```

This could have two different reasons: Usually the paths aren't configured correctly. The first step is to verify if your paths are set correctly. This can be done by running the following commands:

``` bash
$ echo $ANDROID_HOME
```

The expected output should be a path similar to this `$HOME/Android/Sdk`. After this run:


``` bash
$ ls -la $ANDROID_HOME
```

To ensure the folder contains the SDK. The expected output should contain folders like 'tools', 'sources', 'platform-tools', etc.


``` bash
$ echo $PATH
```

The output should contain each one entry for the Android SDK 'tools'-folder and 'platform-tools'-tools. This could look like this:

``` bash
/home/your_user/bin:/home/your_user/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/home/your_user/Android/Sdk/tools:/home/your_user/Android/Sdk/platform-tools
```

> If you ensured your paths are set correctly and still get the error on `cordova requirements` you can try the following fix: [Replacing the Android Studio 'tools' folder manually](https://github.com/meteor/meteor/issues/8464#issuecomment-288112504)


### Setting Up Device on Linux

You may bump into `?????? no permissions` problem when trying to run your App directly on an Android phone/tablet.

Here's how you fix this:

``` bash
# create the .rules file and insert the content
# from below this example
sudo vim /etc/udev/rules.d/51-android.rules
sudo chmod 644   /etc/udev/rules.d/51-android.rules
sudo chown root. /etc/udev/rules.d/51-android.rules
sudo service udev restart
sudo killall adb
```

The content for `51-android.rules`:
```
SUBSYSTEM=="usb", ATTRS{idVendor}=="0bb4", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0e79", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0502", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0b05", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="413c", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0489", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="091e", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="18d1", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0bb4", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="12d1", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="24e3", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="2116", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0482", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="17ef", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="1004", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="22b8", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0409", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="2080", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0955", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="2257", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="10a9", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="1d4d", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0471", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="04da", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="05c6", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="1f53", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="04e8", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="04dd", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0fce", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0930", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="19d2", MODE="0666"
SUBSYSTEM=="usb", ATTRS{idVendor}=="1bbb", MODE="0666"
```

Now running `adb devices` should discover your device.
