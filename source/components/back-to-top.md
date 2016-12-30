title: Back to Top
---

This is actually a directive and not a component. It allows to make visible any DOM elements (like buttons) which appear after a certain scroll offset. When clicked/tapped they take the user to the top of the page.

<input type="hidden" data-fullpage-demo="web-components/back-to-top">

## Basic Usage
``` html
<!-- Bare bones example -->
<button
  v-back-to-top
  class="fixed-bottom-right"
  style="margin: 0 15px 15px 0"
>
  <i>keyboard_arrow_up</i>
</button>

<!--
  With animation, custom scroll offset (after which button is visible)
  and animation duration.

  Use "animate-*" CSS classes for effects when buttons/elements
  become visible. In this case, we'll use "animate-pop":
-->
<button
  v-back-to-top.animate="{offset: 500, duration: 200}"
  class="primary circular fixed-bottom-right animate-pop"
  style="margin: 0 15px 15px 0"
>
  <i>keyboard_arrow_up</i>
</button>
```

## Vue Modifiers
| Vue Modifier | Description |
| --- | --- |
| `animate` | Adds scrolling animation |

## Vue Binding Value
You can use the binding value in 3 forms:

1. **No value**. Defaults will apply.
2. **As a Number**. This will be the scroll offset after which DOM element will be made visible.
3. **As an Object** with `offset` and/or `duration` as props. Duration is ignored if `animate` modifier is not used.
