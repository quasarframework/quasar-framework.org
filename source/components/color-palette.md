title: Color Palette
---
Quasar Framework offers a wide selection of colors out of the box. You can use them both as Stylus variables in your CSS code or directly as CSS classes in your HTML templates.

<input type="hidden" data-fullpage-demo="css/colors">

This page comes really handy after reading [Quasar Theming](/guide/quasar-theming.html).

## Brand Colors
There can be three main colors used throughout your App, called `primary`, `secondary` and `tertiary`.

Most of the colors that Quasar Components use are strongly linked with these three colors that you can change. Choosing these colors is the first step one should take when differentiating the design of its own App. You'll notice immediately on changing their default values that Quasar Components follow these colors as a guideline.

## Color List

Here's the list of colors provided out of the box. Use them as CSS classes or as Stylus variables (preceded by `$` character) in files directly required by `themes/app.*theme*.styl`.

> **IMPORTANT**
> **Do not use them in Vue components `<style>` tags** as they are not available there. Use CSS classes described in the next section instead.

`primary`, `secondary`, `tertiary`
`positive`, `negative`, `info`, `warning`, `white`, `light`, `dark`, `faded`

On the following colors there are variations available:
`red`, `pink`, `purple`, `deep-purple`, `indigo`, `blue`, `light-blue`, `cyan`, `teal`, `green`, `light-green`, `lime`, `yellow`, `amber`, `orange`, `deep-orange`, `brown`, `grey`, `blue-grey`

Example of color variation: `red`, `red-1`, `red-2`, ..., `red-14`. See the demo to make a good picture of what variations are. Variation 11 to 14 are color accents.

## CSS Classes
Use `text-` or `bg-` prefixes as class names to change the color of text or the color of the background.

``` html
<!-- changing text color -->
<p class="text-primary">....</p>

<!-- changing background color -->
<p class="bg-positive">...</p>
```

## Stylus Color Variables
In your Stylus App code you can use them as `$primary`, `$red-1`, and so on.

``` stylus
div
  color $red-1
  background-color $grey-5
```

The full list of colors is stored in the `$colors` array. You can change it to add/remove/change colors and all Quasar Components will generate CSS according to those colors.

``` stylus
$colors ?= {
  primary: $primary,
  secondary: $secondary,
  tertiary: $tertiary,
  positive: $positive,
  negative: $negative,
  warning: $warning,
  info: $info,
  light: $light,
  dark: $dark,
  white: $white,

  red: $red,
  pink: $pink,
  purple: $purple,
  deep-purple: $deep-purple,
  indigo: $indigo,
  blue: $blue,
  light-blue: $light-blue,
  cyan: $cyan,
  teal: $teal,
  green: $green,
  light-green: $light-green,
  lime: $lime,
  yellow: $yellow,
  amber: $amber,
  orange: $orange,
  deep-orange: $deep-orange,
  brown: $brown,
  grey: $grey,
  blue-grey: $blue-grey
}
```
