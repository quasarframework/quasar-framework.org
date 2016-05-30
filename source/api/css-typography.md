title: Quasar Typography
---
<input type="hidden" data-fullpage-demo="typography">
See how headings, blockquotes, definitions lists and more are displayed in the demo. At the end of this page you can read about CSS helper classes.

### Default Font
The default font embedded in any Quasar App is the latest iteration of Roboto Google has released. It comes with 5 different font weights you can use: 200, 300, 400, 500, 600. Below is an image from Google's Roboto Specimen document displaying the different font weights:

<div style="max-width: 550px">
![Roboto Font](/images/roboto.png "Roboto Font")
</div>

### Text Types
You can display text in a variety of ways.

``` html
<!-- Small and Big text -->
<small>Text</small>
<big>Text</big>

<!-- sub and sup -->
<sub>Subtext</sub>
<sup>Supertext</sup>

<!-- Paragraphs -->
<p><strong>Default Paragraph</strong></p>
<p class="caption"><strong>Caption Paragraph</strong></p>
<p class="text-light"><strong>Light Paragraph</strong></p>
<p class="text-thin"><strong>Thin Paragraph</strong></p>

<!-- Blockquotes -->
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <small>Someone famous for <cite title="Quasar Framework">Quasar Framework</cite></small>
</blockquote>

<blockquote class="text-right">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <small>Someone famous for <cite title="Quasar Framework">Quasar Framework</cite></small>
</blockquote>

<!-- Definition Lists -->
<dl>
  <dt>Description lists</dt>
  <dd>A description list is perfect for defining terms.</dd>
  <dt>Euismod</dt>
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
</dl>

<dl class="horizontal">
  <dt>Description lists</dt>
  <dd>A description list is perfect for defining terms.</dd>
  <dt>Euismod</dt>
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
</dl>
```

### CSS Helper Classes
| Class Name | Description |
| --- | --- |
| `text-right` | Align text to the right |
| `text-left` | Align text to the left |
| `text-center` | Align text to the center |
| `text-justify` | Text will be justified |
| `text-truncate` | Applies all CSS tweaks to truncate text when container is too small |
| `text-light` | Applies a font-weight of 300 |
| `text-thin` | Applies a font-weight of 200 |
| `uppercase` | Transform text to uppercase |
| `lowercase` | Transform text to lowercase |
| `capitalize` | Capitalize first letter of the text |
| `strong` | DOM element's font becomes **bold** |
| `emphasize` | DOM element's font becomes *italic* |
| `block` | Same as `full-width` and with `display` property set to `block` |
| `round-borders` | Every Quasar Theme has a generic border radius. This radius is applied to the DOM node |
| `no-margin` | Margins are set to 0 |
| `no-padding` | Padding is set to 0 |
