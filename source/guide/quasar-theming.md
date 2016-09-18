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

## Build
Please note the following:

1. When building your App or starting the dev server you can only use one theme at a time. You can however start two dev servers on different ports, each server with a theme. This will obviously allow you to see the App with both themes simultaneously.
  ``` bash
  $ quasar dev mat
  $ PORT=3000 quasar dev ios
  ```

2. By default your App will include the compiled Quasar themes (`.css` files instead of `.styl` from `node_modules/quasar-framework`). The reason is the build speed. This is how your `src/app.js` file looks:
  ``` js
  /*
    If overriding Quasar style, leave uncommented
    just the first line.

    If NOT overriding Quasar style, leave uncommented
    just the second line. This option make compiling faster.

    WARNING!
    Leave just one of the two require() calls below
    uncommented.
   */
  // require('./themes/app.' + __THEME + '.styl')
  require('quasar/dist/quasar.' + __THEME + '.css')
  ```

  > If you want to override Quasar variables, comment the second line containing `.css` and uncomment the first one ending with `.styl`. The build speed will be slower. **DO NOT** leave both lines uncommented.

## Structure

`src/css` folder from a Quasar App will contain the following files:

``` bash
src
└── themes
    ├── app.ios.styl
    ├── app.mat.styl
    └── app.variables.styl
```

Open them. They are documented inside.

| File | Description |
| --- | --- |
| app.ios.styl | iOS entry point. It includes app.variables.styl and Quasar iOS theme. |
| app.mat.styl | Material Design entry point. It includes app.variables.styl and Quasar Material theme. |
| app.variables.styl | (Common code for all themes) Place to override Stylus variables which define the primary color, the secondary color, the list border radius and so many properties.. You can easily make good use of Quasar Themes and customize your App so it will have a distinct overall design. |

The Build System expects just `app.ios.styl` and `app.mat.styl` to exist, so feel free to dig in into the `src/themes` folder to understand how and what is rendered by Stylus and change whatever you like and best suits your needs. Just make sure you have those two files there.

## Theming Your App

You can easily theme your App by adding Stylus variable declarations in `src/themes/app.variables.styl`.

To customize the look and feel of this app, you can override the Stylus variables found in Quasar's source Stylus files. Setting variables before Quasar's Stylus will use these variables rather than Quasar's default Stylus variable values. Stylus variables specific to the themes belong in either the `app.ios.styl` or `app.mat.styl` files.

For example, change the primary color of your App:

``` stylus
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
> **All your Stylus variables need to be declared before the inclusion of Quasar Framework theme files (from NPM).** If you follow the default structure of files (and be care-free) then inject variable overrides in *src/themes/app.variables.styl*.

## Stylus Variables

Read a complete list of all [Stylus variables](/api/css-stylus-variables.html) that you can override.
