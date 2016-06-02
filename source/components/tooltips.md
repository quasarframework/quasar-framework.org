title: Quasar Tooltips
---
Quasar Tooltips offer additional information to the user that otherwise would be hidden. The implementation is through a Quasar directive called `v-tooltip`.

<input type="hidden" data-fullpage-demo="tooltips">

## Basic Usage

``` html
<!-- Some examples -->
<div v-tooltip.literal="Quasar Rulz!">...</div>
<button class="indigo" v-tooltip.wrap.inline.literal="Tooltip">...</button>
<button class="red" v-tooltip.wrap.literal="Tooltip for the user">...</button>
<div v-tooltip="vmProperty">...</div>
<div v-tooltip.inline.literal="Lorem Ipsum...">...</div>
```

Tooltips use `:before` and `:after` CSS pseudo-elements. When used on a DOM element that already has these pseudo-elements, then add the `wrap` directive modifier so they won't be overriden. If you need that wrapped element to be inline, then also add the `inline` directive modifier.

| Directive Modifier | Description |
| --- | --- |
| `literal` | Use the literal string instead of interpreting it as a variable name from VueModel. |
| `inline` | Make the element inline. |
| `wrap` | Wrap the element so the `:before` and `:after` CSS pseudo-elements won't be overriden. |
