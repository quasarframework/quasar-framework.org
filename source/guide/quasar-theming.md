title: Quasar Theming
---
Every website/app needs a specific design to differentiate from the competition. This is where Quasar Framework excels, because:

1. It offers two themes out of the box: Material and iOS
2. The two themes can be customized/extended easily from the App code. You can change the primary color, the secondary color, and most of the CSS. Customizing does not mean having multiple CSS files, one overriding properties from the other. No. You'll have one stylesheet with each CSS property declared only once.
3. **All themes include a CSS reset (following latest standards) to eliminate quirks between platforms**.

Quasar CSS is a blank slate that you can easily customize and modify to fit your brand, while still following the standards of each platform. The best apps in the app stores are fully customized and Quasar makes it easy to do the same with your App.

Quasar is built on top of Stylus, which allows it to set some default styles for your App but makes it extremely easy for you to change the defaults in your App code.

Customizing a theme means overriding Stylus variables which can hold colors, sizes, border types and so on. After reading this intro you can go to [Components &gt; Stylus Variables](/components/stylus-variables.html) for a list of all Stylus variables that you can override so you can theme your App.

Please note the following:

1. When building your App or starting the dev server you can only use one theme at a time.
2. Quasar themes can be configured in `/src/css/themes` folder, which contains three files, as you'll see in the next section.

## Structure
`src/css/themes` folder from a Quasar App will contain the following files:

``` bash
src
└── css
    └── themes
        ├── common.variables.styl # Theme Shared Quasar Variables
        ├── variables.mat.styl    # Quasar Variables that apply to Material only
        └── variables.ios.styl    # Quasar Variables that apply to iOS only
```

You will find more documentation and steps in these files.

## Using Stylus variables in Vue files
In your app's `*.vue` files you can use the core Quasar Stylus variables (examples - colors: `$primary`, `$red-1`, media breakpoints: `$breakpoint-md`, `$breakpoint-md-min` and so on).

```html
<!-- Notice lang="stylus" -->
<style lang="stylus">
// "variables" is a Webpack alias (provided out of the box by Quasar CLI)
@import '~variables'

div
  color $red-1
  background-color $grey-5
</style>
```

**NOTE:** You must add `@import '~variables'` within your `<style>` tags, in order for Quasar to parse any Stylus variables you may add. If you don't, Quasar will literally pass the variables as text and any theming changes using Stylus variables won't work.

**NOTE:** The `<style>` tag uses Stylus code. You can't use any other CSS pre-processor.

## Theming Your App

You can easily theme your App by adding Stylus variable declarations in `src/css/themes/common.variables.styl` or the other two files (in the latter case if you want different looks for each Quasar theme).

To customize the look and feel of this app, you can override the Stylus variables found in Quasar's source Stylus files. Setting variables before Quasar's Stylus will use these variables rather than Quasar's default Stylus variable values. Stylus variables specific to the themes belong in either the `variables.ios.styl` or `variables.mat.styl` files.

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
| `electron` | App runs under Electron |
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

## Stylus Variables

Read a complete list of all [Stylus variables](/components/stylus-variables.html) that you can override.
