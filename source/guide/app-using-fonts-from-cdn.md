title: Using Fonts from CDN
---
**If you're building just a website** with Quasar (so not using same basecode for an Android or iOS app or an Electron app), then it is even recommended that you use required fonts from a CDN instead of adding them to the app bundle (which is the default behavior).

What you need to do is to find the proper CDN for the `Material Icons` and `Roboto` fonts, like from https://fonts.google.com/?query=roboto.

In your `src/index.html` you need to add the `link` tag inside the `head` like this:

``` html
<head>
  <!-- ........ -->
  <link href="https://fonts.googleapis.com/css?family=Material+Icons|Roboto:100,300,400,500,700" rel="stylesheet">
</head>
```

And then in `src/themes/app.mat.styl` and `src/themes/app.ios.styl` to set a Stylus variable (`$quasar-dont-import-fonts`) to `true`. This informs Quasar not to import Fonts in the bundle:

``` styl
// ...
$quasar-dont-import-fonts = true // <----
// ...

@import '~quasar-framework/dist/quasar.mat.styl'
```

> **IMPORTANT**
> Make sure you declare the Stylus variable before the import statement, otherwise it won't work as intended.

If you like to not import only Material Icons or only Roboto font, then use:

``` styl
// ...
$quasar-dont-import-material-icons = true
$quasar-dont-import-roboto = true
// ...

@import '~quasar-framework/dist/quasar.mat.styl'
```
