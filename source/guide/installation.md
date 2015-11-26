title: Installation
---
Use the `Quasar CLI` to generate or manage a Quasar App.

Make sure you have at least NodeJS 4.2.0 (latest always recommended) and latest NPM.
``` bash
$ npm install -g quasar-cli
```

Now you can create your first App. Let's initialize a folder (for this example: *qApp*, but you can name it whatever you want) with all the boilerplating necessary:
``` bash
$ quasar new qApp
$ cd qApp
```

You're all set now. Read about the Quasar CLI [here](/guide/cli-commands.html). Get to know how powerful it is so you can leverage it.

## Generating Native Mobile Apps
If you want to be able to wrap your Quasar App into a native mobile app, then you should install one more dependency:
``` bash
$ npm install -g cordova
```
Now head on to a section from the Quasar CLI guide called [Native Mobile App Wrapper](/guide/cli-commands.html#Native_Mobile_App_Wrapper) to see more details on how to manage the native app wrapper.
