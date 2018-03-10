title: Color Utils
---

Quasar provides a set of useful functions to manipulate colors easily in most use cases, without the high additional cost of integrating dedicated libraries.

### Helping Tree-Shake
You will notice all examples import `colors` Object from Quasar. However, if you need only one method from it, then you can use ES6 destructuring to help Tree Shaking embed only that method and not all of `colors`.

Example with `setBrand()`:
```js
// we import all of `colors`
import { colors } from 'quasar'
// destructuring to keep only what is needed
const { setBrand } = colors

setBrand('primary', '#f33')
```

## Color Conversion
These functions take a color as string or Object and convert it to another format.

| Function | Source format | Destination format | Description |
| --- | --- | --- | --- |
| `rgbToHex` | `Object` | `String` | Converts a RGB/A color `object` (`{ r: [0-255], g: [0-255], b: [0-255}<,  a: [0-100]>}`) to it's HEX/A representation as a `string` (`#RRGGBB<AA>`). If Alpha channel is present in the original object it will be present also in the output. |
| `rgbToHsv` | `Object` | `Object` | Converts a RGB/A color `object` (`{ r: [0-255], g: [0-255], b: [0-255}<,  a: [0-100]>}`) to it's HSV/A representation as an `object` (`{ h: [0-360], s: [0-100], v: [0-100},  a: [0-100]}`). If Alpha channel is present in the original object it will be present also in the output. |
| `hexToRgb` | `String` | `Object` | Converts a HEX/A color `string` (`#RRGGBB<AA>`) to it's RGB/A representation as an `object` (`{ r: [0-255], g: [0-255], b: [0-255}<,  a: [0-100]>}`) to it's . If Alpha channel is present in the original object it will be present also in the output. |
| `textToRgb` | `String` | `Object` | Converts a HEX/A color `string` (`#RRGGBB<AA>`) or a RGB/A color `string`(`rgb(R, G, B<, A>)`) to it's RGB/A representation as an `object` (`{ r: [0-255], g: [0-255], b: [0-255}<,  a: [0-100]>}`) to it's . If Alpha channel is present in the original object it will be present also in the output. |
| `hsvToRgb` | `String` | `Object` | Converts a HSV/A color `object` (`{ h: [0-360], s: [0-100], v: [0-100},  a: [0-100]}`) to it's RGB/A representation as an `object` (`{ r: [0-255], g: [0-255], b: [0-255}<,  a: [0-100]>}`) to it's . If Alpha channel is present in the original object it will be present also in the output. |

## Color Processing
These functions perform changes on the color or extract specific information.

### lighten (color, percent)
Lighten the `color` (if `percent` is positive) or darken it (if `percent` is negative).

Accepts a HEX/A `string` or a RGB/A `string` as `color` and a `percent` of lighten/darken to be applied to the `color`.

Returns a HEX `string` representation of the calculated `color`.

### luminosity (color)
Calculates the [relative luminance](http://www.w3.org/TR/WCAG20/#relativeluminancedef) of the `color`.

Accepts a HEX/A `string`, a RGB/A `string` or a RGB/A `object` as `color`.

Returns a value between 0 and 1.

## Dynamic Change of Brand Colors (Dynamic Color Themes)

> **WARNING**
> This is only supported on [browsers that support CSS Variables](https://caniuse.com/#feat=css-variables) (Custom Properties).
> It is not going to work on IE11, but it will fall back to the brand colors from the CSS theme.
>
> This feature requires Quasar v0.15.7+

You can dynamically customize the brand colors during run-time: `primary`, `secondary`, `tertiary`, `positive`, `negative`, `info`, `warning`, `light`, `dark`, `faded`. That means you can have one build of your application with a default color theme but show it with a runtime selected one.

The main color configuration is done using CSS custom properties, stored on the root element (`:root`). Each property has a name of `--q-color-${name}` and should have a valid CSS color as value.

The CSS Custom properties use the same inheritance rules as normal CSS, so you can only redefine your desired colors and the rest will be inherited from the parent elements.

The recommended workflow is to set your customized color properties on the `html` (`document.documentElement`) or `body` (`document.body`) elements. This will allow you to revert to the default color by just deleting your custom one.

More info on CSS custom properties (variables): https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables

### setBrand (colorName, colorValue[, element])
| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `colorName` | String | *Yes* | One of `primary`, `secondary`, `tertiary`, `positive`, `negative`, `info`, `warning`, `light`, `dark`, `faded` |
| `colorValue` | String | *Yes* | Valid CSS color value |
| `element` | Element | - | (Default: `document.body`) Element where the custom property will be set. |

Example of setting brand colors using the helper:

```js
import { colors } from 'quasar'

colors.setBrand('light', '#DDD')
colors.setBrand('primary', '#33F')
colors.setBrand('primary', '#F33', document.getElementById('rebranded-section-id'))
```

> The helper function will also take care of setting dependent custom properties for some colors (`positive`, `negative`, `light`), so this is the recommended way of usage instead of the raw Javascript `setProperty()`.

### getBrand (colorName[, element])
| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `colorName` | String | *Yes* | One of `primary`, `secondary`, `tertiary`, `positive`, `negative`, `info`, `warning`, `light`, `dark`, `faded` |
| `element` | Element | - | (Default: `document.body`) Element where the custom property will be read. |

Example of getting brand colors using the helper:

```js
import { colors } from 'quasar'

colors.getBrand('primary') // '#33F'
colors.getBrand('primary', document.getElementById('rebranded-section-id'))
```

What this helper does is wrap the raw Javascript `getPropertyValue()` and it's available for convenience. Example of equivalent raw Javascript:

```js
// equivalent of colors.getBrand('primary') in raw Javascript:

getComputedStyle(document.documentElement)
  .getPropertyValue('--q-color-primary') // #0273d4
```
