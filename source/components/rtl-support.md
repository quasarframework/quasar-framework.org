title: RTL Support
---
RTL is referring to "right to left" UI for languages that need it. **You need Quasar v0.15.5+.**

## Enabling RTL support
To enable it, you need to edit `/quasar.conf.js`:
```js
build: {
  rtl: true
}
```

## How it works
RTL is tightly coupled to [Quasar I18n](/components/internationalization.html). **When Quasar is set to use an RTL language** (language pack has "rtl" prop set to "true") and **RTL support is enabled** (check step above for quasar.conf.js), then the UI will dynamically transform Quasar & your website/app code for RTL.

Let's discuss about each of these two requirements:

1. *Quasar needs to be set to use an RTL language*
  See [Internationalization](/components/internationalization.html) on how you can set a language. You can set a language as default or dynamically set one.

2. *RTL support needs to be enabled*
  You need to set "rtl" to "true" under quasar.conf.js > "build". What this does is it compiles CSS for both your website/app code and for Quasar components and add corresponding RTL CSS rules automatically. Your CSS bundle will slightly increase in size due to the addition of these CSS rules.

## Things to keep in mind
* Both RTL and non-RTL Quasar language packs will work together and dynamically switch to/from RTL. So only choosing an RTL Quasar language pack will trigger the RTL UI for you. You don't need separate builds of your app (one for non-RTL and one for RTL-only). The RTL is dynamical.
* You can dynamically detect if you are on RTL mode by taking a look at Boolean `this.$q.i18n.rtl`. More info on [Vue Prototype Injections](http://localhost:4000/components/vue-prototype-injections.html).
* You need to be careful when writing your own CSS. Like mentioned above, Quasar will automatically add RTL rules based on your CSS code. So writing:
  ```css
  .my-class {
    margin-left: 10px;
    right: 5px;
  }
  ```
  ...will add this rule for RTL:
  ```css
  [dir=rtl] .my-class {
    margin-right: 10px;
    left: 5px;
  }
  ```
  Any CSS rule that refers to "left" or "right" is automatically triggering an equivalent RTL CSS rule to be added.

### Marking CSS rules as exceptions
If you need an exception so your CSS code will not add a corresponding RTL rule, then add this comment:
```css
.my-class {
  margin-left: 10px /* rtl:ignore */;
}
```
Now both RTL and non-RTL UI mode will have `margin-left` prop.

Sometimes you'll need to make exceptions for whole DOM elements / components. In this case, add `dir="ltr"` or `dir="rtl"` HTML attribute to the outermost DOM element / component template:

```html
<div dir="ltr">
  <!--
    this DIV and all its content will use RTL mode
    regardless of Quasar language pack RTL settings
  -->
</div>
```

Or, if you need your RTL UI to use left-to-right (ltr) mode for a DOM element / component:
```html
<div dir="ltr">
  <!--
    this DIV and all its content will use non-RTL mode
    regardless of Quasar language pack RTL settings
  -->
</div>
```

## Handling Quasar UMD
To enable RTL UIs in UMD you need to include the RTL equivalent CSS tag for your Quasar version and also pack in a Quasar RTL language pack (like Hebrew or Farsi). Example:

```html
<html>
  <head>
    ...
    <link href="https://unpkg.com/quasar-framework@latest/dist/umd/quasar.mat.rtl.min.css" rel="stylesheet" type="text/css">
  </head>

  <body>
    ...

    <!--
      we also need an RTL Quasar language pack; let's take Hebrew as example;
      include this after Quasar JS tag
    -->
    <script src="https://unpkg.com/quasar-framework@latest/dist/umd/i18n.he.umd.min.js"></script>
    <script>
      Quasar.i18n.set(Quasar.i18n.he)
    </script>
  </body>
</html>
```

Check what tags you need to include in your HTML files by generating a sample with `$ vue init quasarframework/quasar-starter-kit-umd <folder>` and answering with "Yes" to the RTL question and specifying an RTL language for Quasar I18n.
Also notice the `<html dir="rtl">` tag at the beginning of the generated html file -- you'll need that too.

> **Caveat**
> Quasar CLI automatically adds equivalent RTL CSS rules for your website/app code, but this is not the case for UMD where Quasar CLI is not being used. You'll have to manage writing the RTL equivalent of your website/app CSS code by yourself. It's only Quasar components that will have this handled automatically.
