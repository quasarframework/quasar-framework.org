title: Labels
---
Quasar Labels are small graphical elements used to indicate something like the number of likes an article has, the new or unread messages in an inbox and so on.

This component only has CSS code, so you just have to follow the below HTML syntax in your templates for it.

<input type="hidden" data-fullpage-demo="css/label">

## Basic Usage

``` html
<!-- Basic Labels -->
<span class="label bg-primary text-white">label</span>
<span class="label bg-secondary text-white shadow-1">10k</span>

<!-- Floating Labels -->
<button class="light relative-position">
  Inbox
  <span class="floating label circular bg-primary text-white">22</span>
</button>
<button class="red relative-position">
  Inbox
  <span class="floating label bg-dark">22</span>
</button>

<!-- Tag Labels -->
<span class="tag label tag bg-light">New <i class="on-right">mail</i></span>
<span class="tag label bg-red text-white">Upcoming</span>
<span class="tag label bg-primary text-white">Featured</span>

<!-- Pointing Labels -->
<span class="label pointing-up bg-primary text-white">up</span>
<span class="label pointing-down bg-primary text-white">down</span>
<span class="label pointing-right bg-primary text-white">right</span>
<span class="label pointing-left bg-primary text-white">left</span>

<!-- With Icons -->
<span class="label bg-primary text-white">
  <i class="on-left">mail</i>
  10
</span>
<span class="label bg-tertiary text-white">
  10
  <i class="on-right">mail</i>
</span>

<!-- With Text or Icon Detail -->
<span class="label bg-amber">
  <span class="left-detail">Left</span> Detail
</span>
<span class="label bg-secondary text-white">
  Right <span class="right-detail">Detail</span>
</span>
<span class="label bg-orange text-white">
  <i class="left-detail">mail</i> 10
</span>
<span class="label bg-orange text-white">
  10 <i class="right-detail">mail</i>
</span>

<!-- Circular/Oval Labels -->
<span class="circular label bg-primary text-white">2</span>
<span class="circular label bg-secondary text-white shadow-1">10</span>
```

Play with colors from Quasar [API &gt; CSS &gt; Color Palette](/api/css-color-palette.html).
