title: Quasar Badge
---
Quasar Badges are small graphical elements used to indicate something like the number of likes an article has, the new or unread messages in an inbox and so on.

This component only has CSS code, so you just have to follow the HTML structure in your templates for it.

<input type="hidden" data-fullpage-demo="badge">

## Basic Usage

``` html
<!-- Basic examples -->
<div class="badge bg-primary text-white">badge</div>
<div class="badge bg-secondary text-white shadow-1">10k</div>

<!-- With Icon as detail -->
<div class="badge bg-purple text-white">
  <i left-detail>mail</i> 10
</div>

<!-- With text as detail -->
<div class="badge bg-amber">
  <span class="left-detail">Quasar</span> Framework
</div>
<div class="badge bg-secondary text-white">
  Quasar <span class="right-detail">Framework</span>
</div>
```

Play with colors from Quasar [API &gt; CSS &gt; Color Palette](/api/css-color-palette.html).
