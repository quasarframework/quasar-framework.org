title: Native Mobile App Wrapper
---
You can use Cordova to wrap your Quasar App into a native mobile App. We'll be using Quasar CLI to manage this, including issuing Cordova commands for your wrapped up App.

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
# With Crosswalk plugin
# which is the recommended way
$ quasar wrap

# Without Crosswalk plugin
$ quasar wrap -s
# or
$ quasar wrap --slim
```

This command generates a folder inside your App called `/wrapper`. It contains the assets of a Cordova project mapped to your Quasar App's source code.

Wrapping with Crosswalk ensures that your App will have the same runtime on all platforms (which is also the latest and greatest), but will also make your package file bigger. Read more [here](https://crosswalk-project.org/documentation/about.html) about Crosswalk. **It is recommended that you opt for the Crosswalk plugin to be installed.**

If however you opt for the slim (non-Crosswalk) wrapper, you can add it later with:
``` bash
$ quasar wrap plugin add cordova-plugin-crosswalk-webview
```

> **NOTE for Windows Developers**
> It is possible that you get `Error: EPERM: operation not permitted, symlink '..\dist'`, in which case you need to add privileges for your user to be able to create symlinks. Read [here](http://superuser.com/questions/104845/permission-to-make-symbolic-links-in-windows-7).

After making the wrapper and making sure you have the platform's SDK installed on your machine, you need to add at least a platform to your App, like this:
``` bash
$ quasar wrap platform add android
```

## Execute Cordova Command
You surely want to add a platform or perform useful Cordova commands:
``` bash
$ quasar wrap [Cordova command arguments]

# examples:
$ quasar wrap platform add android
$ quasar wrap run
$ quasar wrap build
```

> **TIP**
> Use it in conjunction with `quasar build` when you frequently test on your mobile: `quasar build && quasar wrap run`

## Cordova Plugins
There are lots of Cordova plugins available which enables to you access the Camera, NFC, Battery Status, Contacts, Geolocation, Device motion and orientation and many more. Check out Cordova's website (example for Battery Status [here](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-battery-status/index.html)).

Remember all Cordova commands can be issued with `quasar wrap [cordova command]`.

## Tips

### Browser Simulator
Use Google Chrome's emulator from Developer Tools. It's a fantastic tool. You can select which device to emulate, but keep in mind that it's an *emulator* and not the real deal.

![Google Chrome emulator](/images/chrome.png "Google Chrome emulator")

### Debug on Android
When something goes wrong with your App when running on a mobile platform, what do you do? Write a bunch of `console.log()s`? Where should this be displayed? Use `alert()s`? This may interfere with the application's flow.

So what do you do? The solution is to make use of the `tools/monitor` tool from the SDK.

![tools/monitor screen](/images/monitor.png "tools/monitor screen")

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
