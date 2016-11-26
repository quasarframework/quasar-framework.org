title: Quasar Typography
---
<input type="hidden" data-fullpage-demo="css/typography">
See how headings, blockquotes, definitions lists and more are displayed in the demo. At the end of this page you can read about CSS helper classes.

### Default MD Font
The default font embedded in Quasar App *when built with Material Design Theme* is Roboto. It comes with 5 different font weights you can use: 200, 300, 400, 500, 600. Below is an image from Google's Roboto Specimen document displaying the different font weights:

<div style="max-width: 550px">
![Roboto Font](/images/roboto.png "Roboto Font")
</div>

> **NOTE**
> You can embed it for iOS theme too by copying font related code from `themes/app.mat.styl` to `themes/app.ios.styl` and requiring the `.styl` version of CSS in `src/App.vue`

### Text Types
You can display text in a variety of ways.

``` html
<!-- Token (as CSS class) -->
<span class="token">blue</span>

<!-- Small and Big text -->
<small>Text</small>
<big>Text</big>

<!-- sub and sup -->
<sub>Subtext</sub>
<sup>Supertext</sup>

<!-- Paragraphs -->
<p>Default Paragraph</p>
<p class="caption">Caption Paragraph</p>
<p class="light-paragraph">Light Paragraph</p>
<p class="thin-paragraph">Thin Paragraph</p>

<!-- Bold or italic -->
<p class="text-bold">Bold text</p>
<!-- or: --><strong>Bold text</strong>
<p class="text-italic">Italic text</p>
<!-- or: --><em>Italic text</em>

<!-- Quotes -->
<div class="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
</div>

<div class="quote text-right">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
</div>

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

<!-- Tokens; alternative: Chips -->
<span class="token">Some token</span>
```

### CSS Helper Classes
| Class Name | Description |
| --- | --- |
| `text-right` | Align text to the right |
| `text-left` | Align text to the left |
| `text-center` | Align text to the center |
| `text-justify` | Text will be justified |
| `text-truncate` | Applies all CSS tweaks to truncate text when container is too small |
| `text-bold` | Text will be in bold |
| `text-italic` | Text will be in italic |
| `caption` | For use on caption parapgraphs |
| `light-paragraph` | Applies a font-weight of 300 |
| `thin-paragraph` | Applies a font-weight of 200 |
| `uppercase` | Transform text to uppercase |
| `lowercase` | Transform text to lowercase |
| `capitalize` | Capitalize first letter of the text |
| `strong` | DOM element's font becomes **bold** |
| `emphasize` | DOM element's font becomes *italic* |
| `round-borders` | Every Quasar Theme has a generic border radius. This radius is applied to the DOM node |
| `block` | `display` property set to `block` |
| `no-margin` | Margins are set to 0 |
| `no-padding` | Padding is set to 0 |
