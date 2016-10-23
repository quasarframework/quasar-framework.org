title: Tooltips
---
Quasar Tooltips offer additional information to the user that otherwise would be hidden. The implementation is through a Quasar directive called `v-tooltip`.

<input type="hidden" data-fullpage-demo="web-components/tooltip">

## Basic Usage

``` html
<!-- Some examples -->
<div v-tooltip="'Quasar Rulz!'">...</div>

<div v-tooltip.inline="'Tooltip'">
  <button class="indigo">Hover</button>
</div>
<div v-tooltip.inline="'Tooltip for the user'">
  <button class="red">Over</button>
</div>
<div v-tooltip.inline="'Lorem Ipsum... Some long tooltip...'">
  <button class="purple">These</button>
</div>
<div v-tooltip.inline="'Lorem Ipsum...'">
  <button class="amber">Buttons</button>
</div>
```

Tooltips use `:before` and `:after` CSS pseudo-elements. When used on a DOM element that already has these pseudo-elements, wrap it yourself and apply `v-tooltip` on the wrapper element.

If you need that wrapped element to be inline, then add the `inline` directive modifier.
