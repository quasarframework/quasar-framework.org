title: Quasar App Starting Point
---

Starting a Quasar App is simple. The code is embedded in `index.html` under a &lt;script&gt; tag.
``` html
<script type="text/javascript">
  @@appManifest
  quasar.boot(function() {
    quasar.start.app();
  });
</script>
```

1. The `@@appManifest` part is replaced by the Build System with the App Manifest definition. Example:
``` js
quasar.global.manifest = {
    "pages": {
        "index": {
            "layout": "main",
            "css": "pages/index/style.index.css"
        },
        "second": {
            "layout": "main",
            "css": "pages/second/style.second.css"
        }
    },
    "layouts": {
        "main": {
            "css": "layouts/main/layout.main.css"
        }
    }
};
```

2. `quasar.boot()` call injects Cordova if necessary then runs the callback. Finally, `quasar.start.app()` registers routes, loads the required layout then page.

The first Quasar Page that gets loaded (if no hash in URL exists) is the one called `index`.

### Study Case
Hey, I know there's the '/js' folder in my App that I can use. I want to put the starting code for my App there. Then what you should do is make a little change to `index.html`:

``` html
<script type="text/javascript">
  @@appManifest
  quasar.boot(function() {
    quasar.require.script('js/app');
  });
</script>
```

Just make sure that you create `/js/app.js` file and you call `quasar.start.app()` from there at some point.
