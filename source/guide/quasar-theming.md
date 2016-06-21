title: Quasar Theming
---
Every website or mobile app needs a specific design to differentiate from the competition. This is where Quasar Framework excels, because:

1. It offers two themes out of the box: Material and iOS
2. The two themes can be customized/extended easily from the App code. You can change the primary color, the secondary color, and most of the CSS. Customizing does not mean having multiple CSS files, one overriding properties from the other. No. You'll have one stylesheet with each CSS property declared only once.
3. You can create your own theme from scratch.
4. **All themes include a CSS reset (following latest standards) to eliminate quirks between platforms**.

Quasar CSS is a blank slate that you can easily customize and modify to fit your brand, while still following the standards of each platform. The best apps in the app stores are fully customized and Quasar makes it easy to do the same with your App.

Quasar is built on top of Stylus, which allows it to set some default styles for your App but makes it extremely easy for you to change the defaults in your App code.

Customizing a theme means overriding Stylus variables which can hold colors, sizes, border types and so on. After reading this intro you can go to [API &gt; Stylus Variables](/api/css-stylus-variables.html) for a list of all Stylus variables that you can override so you can theme your App.

## Structure

`src/css` folder from a Quasar App will contain the following files:

``` bash
src
└── css
    ├── app.ios.styl
    ├── app.mat.styl
    └── common
        ├── app.style.styl
        └── app.theme.styl


1 directory, 4 files
```

| File | Description |
| --- | --- |
| app.theme.styl | (Common code for all themes) Place to override Stylus variables which define the primary color, the secondary color, the list border radius and so many properties.. You can easily make good use of Quasar Themes and customize your App so it will have a distinct overall design. |
| app.style.styl | A starting point for your App's own CSS. |
| app.ios.styl | Used by Build System to create iOS specific theme for your App. It includes app.theme.styl, Quasar iOS theme and then app.style.styl |
| app.mat.styl | Used by Build System to create Material specific theme for your App. It includes app.theme.styl, Quasar Material theme and then app.style.styl |

The Build System expects just `app.ios.styl` and `app.mat.styl` to exist, so feel free to dig in into the `src/css` folder to understand how and what is rendered by Stylus and change whatever you like and best suits your needs. Just make sure you have those two files there.

## Theming Your App

You can easily them your App by adding Stylus variable declarations in `src/css/common/app.theme.styl`. For example, change the primary color of your App:

``` stylus
/*
 * Place here all your theme definition overrides
 * Example: $primary = #ff0000
 */

$primary = #00ffff
```

### Platform Specific Styles

The platform in which your App runs is automatically detected and the `<body>` tag gets following classes:

| Body Class Name | Description |
| --- | --- |
| `mat` | Default style; **Material Design theme**; Android platform |
| `ios` | Apple platform; **iOS theme** |
| `desktop` | App runs on a desktop browser |
| `mobile` | App runs on a mobile browser |
| `cordova` | Standalone Mobile App wrapped with Apache Cordova |
| `touch` | Touch capable platform |
| `no-touch` | Touch capability not present |
| `within-iframe` | For when entire website is under an IFRAME tag |

So you can write specific Stylus code for your App like this:

``` stylus
body
  &.cordova .tag
    color $primary
  &.desktop .tag
    color $secondary
  &.mobile .tag
    color $tertiary
```

> **Theme Specific CSS**
> Regarding themes, if you take a look at the Structure of Stylus files above, you'll notice there are two files (`app.ios.styl` and `app.mat.styl`). Inject code for the specific theme there after you get the hang of how things stand with those files. It's best to not clog all themes generated CSS with code specific to a certain theme only.
>
> **All your Stylus variables need to be declared before the inclusion of Quasar Framework theme files (from NPM).** If you follow the default structure of files (and be care-free) then inject variable overrides in *src/css/common/app.theme.styl*.

## Speed Up Build Time

By default, Quasar CLI builds your App with all available themes. You can speed up build time when developing by forcing only one theme build rather than building all of them. See [forceTheme](/guide/quasar-app-configuration.html#‘forceTheme’-String) property in [App Configuration](/guide/quasar-app-configuration.html).

## Forcing a Theme

You can also force Quasar use a specific theme regardless of the platform. In *index.html* replace the *class* attribute value from `@@theme` to `mat` or `ios`.

``` html
<!-- original index.html -->
...
<body class="@@theme">
...

<!-- theme forced App index.html -->
...
<body class="mat">
...
```

Combine this with building one theme only in the section above, [Speed Up Built Time](#Speed-Up-Build-Time).

## Stylus Variables

Read a complete list of all Stylus variables that you can override [here](/api/css-stylus-variables.html).
