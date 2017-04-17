title: Buttons
---
Quasar Buttons are of two shapes: rectangle (regular) and circular, and it may use a spinner if disabled instead of blurring the button.

Quasar has its own button component called `q-btn`

## Basic Usage
``` html
<q-btn icon='create'>New item</q-btn>
```

## Vue Properties
| Vue Property | Description |
| ---          | ---         | --- |
| `disable`    | disabled on true | 
| `spinner`    | make a spinner if true | 
| `circular`   | set true if circular shape is required |
| `icon`       | name of the icon to use |
| `iconRight`  | name of the right icon to user |

## Vue Events
| Vue Event | Description |
| ---       | ---         |
| `click`   | Triggered on button click |

It is also possible to use the html buttons and quasar classes, and these also has rectangle (regular) and circular shape. They come in three sizes: small, medium (default) and big. As for the colors, use the ones from [Quasar CSS Color Palette](/api/css-color-palette.html). There are some more CSS classes that you can use to enhance the appearance of a button.

<input type="hidden" data-fullpage-demo="css/button">

For circular buttons only use icons as content.

## Basic Usage

```html
<!-- Regular shaped -->
<button class="primary" @click="clickMethod()">
  Button Label
</button>

<!-- Circular shaped; only use icon as content -->
<button class="primary circular">
  <i>alarm</i>
</button>
```

When adding an icon to a regular button, use `on-left` or `on-right` CSS classes:
``` html
<button class="primary">
  <i class="on-left">mail</i> Button Label
</button>

<button class="teal">
  Button Label <i class="on-right">mail</i>
</button>
```

## Button Sizes
Use `small` or `big` CSS classes. You don't need to specify `medium` because that's the default size.

```html
<button class="primary small">
  Small Button
</button>

<button class="primary big">
  Big Button
</button>
```

## Button Colors
Use the ones from [Quasar CSS Color Palette](/api/css-color-palette.html). Examples: `primary`, `orange`, `lime`.

```html
<button class="primary">Primary Button</button>
<button class="amber">Amber Button</button>
```

## More Button CSS Classes
There are also the `raised`, `clear`, `outline`, `push`, `bordered`, `round` and `glossy` CSS classes that you can use.

Make use of globally available `disabled`, `block` (sets CSS `display` property to `block`) or `full-width`.

## Progress Buttons
There's also a type of button that has its own Quasar Component named `<q-progress-button>`. Check documentation [here](/components/progress-button.html).
