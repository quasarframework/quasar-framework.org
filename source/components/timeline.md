title: Timeline CSS
---
Quasar supplies CSS classes for displaying a timeline. Loot at the syntax below.

<input type="hidden" data-fullpage-demo="css/timeline">

## Basic Usage

``` html
<div class="timeline">
  <!-- label -->
  <div class="timeline-label">
    <h4 class="bg-white text-italic">
      Friday
    </h4>
  </div>

  <!-- item -->
  <div class="timeline-item">
    <div class="timeline-badge">
      <!-- badge with avatar -->
      <img src="/demo-app/assets/linux-avatar.png">

      <!-- ...or badge with icon -->
      <i>alarm</i>
    </div>

    <!-- title -->
    <div class="timeline-title">
      Trip to mountains
    </div>

    <!-- date timestamp -->
    <div class="timeline-date text-italic">
      <div>17:01</div>
      <div>June 16th, 2016</div>
    </div>

    <!--
      content; any Web component or DOM elements,
      in this particular case, a Card
    -->
    <div class="card">
      <div class="card-title">
        Card Title
      </div>
      <div class="card-content">
        Lorem ipsum dolor sit amet...
      </div>
    </div>
  </div>
</div>
```

## Positioning
On wide-enough windows, Timelines display items on the left-side and right-side, alternating the position. To override the default position, use `on-left` or `on-right` CSS classes:

``` html
<div class="timeline">
  <!-- item on left-side regardless of default position -->
  <div class="timeline-item on-left">
    ...
  </div>

  <!-- item on right-side regardless of default position -->
  <div class="timeline-item on-right">
    ...
  </div>
</div>
```

## Coloring
For overriding the default colors used on a Timeline, use [Quasar CSS color classes](/api/css-color-palette.html) like `red`, `primary`, `teal`:
``` html
<div class="timeline red">
  ...
</div>
```
