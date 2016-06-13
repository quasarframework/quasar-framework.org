title: Create Quasar App
---

After [installing Quasar CLI](/guide/installation.html) you can create your first Quasar App. Let's initialize a folder (for this example: *quasarApp*, but you can name it whatever you want) with all the boilerplating necessary:
``` bash
$ quasar new quasarApp
$ cd quasarApp
```

The boilerplating generates the `index` Page which is the first to get loaded if no other registered hash route is specified. Add other Quasar Pages with:
``` bash
$ quasar page <pageName>
```

You can also add a Layout (think of it as a wrapper of Pages with common content) with:
``` bash
$ quasar layout <layoutName>
```

Preview your App in as many browsers you like with:
``` bash
$ quasar preview
```

You're mostly set now. Make a thorough reading about the Quasar CLI [here](/guide/cli-commands.html). The Quasar CLI is the primary tool used during the process of developing a Quasar App. It's like a Swiss Army Knife as it brings together a bunch of miscellaneous tools under a single interface. Get to know how powerful it is so you can leverage it.

> You can check what Quasar Framework version it is being currently used by accessing the browser console and looking at `quasar.VERSION` property.

Continue reading the **App** section of the Guide to understand how Quasar works and how you can use it.

## Generating Native Mobile Apps
If you want to be able to wrap your Quasar App into a native mobile app, then you should head to [Native Mobile App Wrapper](/guide/native-mobile-app-wrapper.html) section to see how easily to do it.
