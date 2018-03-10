title: Color Palette
---
Quasar Framework offers a wide selection of colors out of the box. You can use them both as Stylus variables in your CSS code or directly as CSS classes in your HTML templates.

<input type="hidden" data-fullpage-demo="style-and-identity/color-palette">

This page comes really handy after reading [Quasar Theming](/guide/quasar-theming.html).

## Brand Colors
There can be three main colors used throughout your App, called `primary`, `secondary` and `tertiary`.

Most of the colors that Quasar Components use are strongly linked with these three colors that you can change. Choosing these colors is the first step one should take when differentiating the design of its own App. You'll notice immediately on changing their default values that Quasar Components follow these colors as a guideline.

## Color List

Here's the list of colors provided out of the box. Use them as CSS classes (in HTML templates) or as Stylus variables (in `<style lang="stylus">` tags) within your app's `*.vue` files.

`primary`, `secondary`, `tertiary`
`positive`, `negative`, `info`, `warning`, `white`, `light`, `dark`, `faded`

On the following colors there are variations available:
`red`, `pink`, `purple`, `deep-purple`, `indigo`, `blue`, `light-blue`, `cyan`, `teal`, `green`, `light-green`, `lime`, `yellow`, `amber`, `orange`, `deep-orange`, `brown`, `grey`, `blue-grey`

Example of color variation: `red`, `red-1`, `red-2`, ..., `red-14`. See the demo to make a good picture of what variations are. Variation 11 to 14 are color accents.

## Using as CSS Classes
Use `text-` or `bg-` prefixes as class names to change the color of text or the color of the background.

``` html
<!-- changing text color -->
<p class="text-primary">....</p>

<!-- changing background color -->
<p class="bg-positive">...</p>
```

## Using Stylus Variables
In your app's `*.vue` files you can use the colors as `$primary`, `$red-1`, and so on.

```html
<!-- Notice lang="stylus" -->
<style lang="stylus">
// "variables" is a Webpack alias (defined in /config/index.js)
// which points to /src/themes/quasar.variables.styl
// in your starter kit
@import '~variables'

div
  color $red-1
  background-color $grey-5
</style>
```

## Adding Your Own Colors
If you want to use colors of your own for components, let's say we are adding a color named "brand", all you need to do is add the following CSS into your app:

```css
.text-brand {
  color: #a2aa33;
}
.bg-brand {
  background: #a2aa33;
}
```

Now we can use this color for Quasar components:
```html
<q-input color="brand" ... />
```


## Dynamic Change of Brand Colors (Dynamic Color Themes)

> **WARNING**
> This is only supported on [browsers that support CSS Variables (Custom Properties)](https://caniuse.com/#feat=css-variables).
> It is not going to work on IE11, but it will fall back to the brand colors from the CSS theme.

You can dynamically customize the full list of out of the box colors used by Quasar: `primary`, `secondary`, `tertiary`, `positive`, `negative`, `info`, `warning`, `light`, `dark`, `faded`. That means you can have one build of your application with a default color theme but show it with a runtime selected one.

The main color configuration is done using CSS custom properties, stored on the root element (`:root`). Each property has a name of `--q-color-${name}` and should have as value a valid color value.

The CSS Custom properties use the same inheritance rules as normal CSS, so you can only redefine your desired colors and the rest will be inherited from the parent elements.

The recommended workflow is to set your customized color properties on the `html` (`document.documentElement`) or `body` (`document.body`) elements. This will allow you to revert to the default color by just deleting your custom one.

Quasar offers a helper function for setting custom colors in the `colors` utils: `setBrand(colorName, colorValue, element)`

| Parameter | Type | Default Value | Description |
| --- | --- | --- | --- |
| `colorName` | String | *None* | One of `primary`, `secondary`, `tertiary`, `positive`, `negative`, `info`, `warning`, `light`, `dark`, `faded` |
| `colorValue` | String | *None* | Valid CSS color value |
| `element` | Element | `document.body` | Element where the custom property will be set. |

Example of setting brand colors using helper:

```js
import { colors } from 'quasar'

colors.setBrand('light', '#DDD')
colors.setBrand('primary', '#33F')
colors.setBrand('primary', '#F33', document.getElementById('rebranded-section-id'))
```

The helper function will also take care of setting dependent custom properties for some colors (`positive`, `negative`, `light`), so this is the recommended way of usage.

If you need to read or set the cutom properties you can use:

```js
document.body.style.setProperty(`--q-color-primary`, '#b37')

const
  colors = ['primary', 'secondary', 'tertiary', 'positive', 'negative', 'info', 'warning', 'faded', 'dark', 'light'],
  defaultStyle = getComputedStyle(document.documentElement),
  customStyle = getComputedStyle(document.body),
  defaultColors = colors.reduce((acc, color) => {
    acc[color] = defaultStyle.getPropertyValue(`--q-color-${color}`) || null
    return acc
  }, {}),
  customColors = colors.reduce((acc, color) => {
    acc[color] = customStyle.getPropertyValue(`--q-color-${color}`) || null
    return acc
  }, {})
```
