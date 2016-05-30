title: Quasar Typography
---
See how headings, blockquotes, definitions lists and more are displayed in the demo.
<input type="hidden" data-fullpage-demo="typography">

### Default Font
The default font embedded in any Quasar App is the latest iteration of Roboto Google has released. It comes with 5 different font weights you can use: 200, 300, 400, 500, 600. Below is an image from Google's Roboto Specimen document displaying the different font weights:

<div style="max-width: 550px">
![Roboto Font](/images/roboto.png "Roboto Font")
</div>

### Text Types
You can display text in a variety of ways.

``` html
<!-- Small text -->
<small>Text</small>

<!-- Big text -->
<big>Text</big>

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

<blockquote class="pull-right">
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
