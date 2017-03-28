title: Cordova App Wrapper
---
You can use Cordova to wrap your Quasar App into a native mobile App. We'll be using Quasar CLI to manage this.

First install Cordova globally on your machine:
``` bash
$ npm install -g cordova
```

Then make sure you have the platform SDK installed on your machine, like [Android SDK](https://developer.android.com/studio/index.html#download).
``` bash
$ cordova requirements
```

## Wrap your App
Now let's create the Wrapper for your App.
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

After making the wrapper and making sure you have the platform's SDK installed on your machine, you need to add at least a platform to your App, like this:
``` bash
$ cd cordova
$ cordova platform add android

# need to be on running a Mac OS for iOS:
$ cordova platform add ios
```

> **IMPORTANT**
> Remember all Cordova commands must be issued from within the `/cordova` subfolder.

## Cordova Plugins
There are lots of Cordova plugins available which enables to you access the Camera, NFC, Battery Status, Contacts, Geolocation, Device motion and orientation and many more.

Check out Cordova's website. Example for Battery Status: [here](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-battery-status/index.html).

## Tips

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
