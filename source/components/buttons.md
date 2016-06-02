title: Quasar Buttons
---
Quasar buttons are of two shapes: rectangle (regular) and circular. They come in three sizes: small, medium (default) and big. As for the colors, use the ones from [Quasar CSS Color Palette](/api/css-color-palette.html). There are some more CSS classes that you can use to enhance the appearance of a button.

<input type="hidden" data-fullpage-demo="buttons">

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
There are also the `glossy`, `raised`, `clear`, `outline` and `round` CSS classes that you can use.
