title: Quasar Grid Layout
---
<input type="hidden" data-fullpage-demo="layout/grid-layout">

Back in the ol' days web developers used HTML tables to style their web pages. Then came along powerful CSS features. Latest in the arena entered [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

Quasar provides lots of CSS classes to help you deal easily with managing a layout. Long story short, think of it like operating with rows and columns with many options at hand.

## Background on Flexbox
The Flexbox Layout (Flexible Box) module (currently a W3C Last Call Working Draft) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word "flex").

The main idea behind the flex layout is to give the container the ability to alter its items' width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes). A flex container expands items to fill available free space, or shrinks them to prevent overflow.

Most importantly, the flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based). While those work well for pages, they lack flexibility (no pun intended) to support large or complex applications (especially when it comes to orientation changing, resizing, stretching, shrinking, etc.).

## Getting Started
Quasar Grid Layout CSS classes apply to either the Container (Parent) or the Container's items (Children).

![Flexbox Container](/images/flexbox-container.svg)
![Flexbox Items](/images/flexbox-items.svg)

## Parent Classes

### Setting Direction
One of the following CSS classes is mandatory for the parent in order for the children ones (described in next sections) to have any effect.

![Flexbox Direction](/images/flexbox-direction.svg)

| Class Name | Description |
| --- | --- |
| `flex` | `display` is set to `flex` |
| `row` | Flex row |
| `row inline` | Inline Flex row |
| `column` | Flex column |
| `column inline` | Inline Flex column |
| `reverse-row` | Flex row with `flex-direction` set to `row-reverse` |
| `reverse-column` | Flex column with `flex-direction` set to `column-reverse` |

Example:
``` html
<div class="row">
  <div>First column</div>
  <div>Second column</div>
  <div>Third column</div>
</div>
```

### Wrap
**You can also wrap content**. Use `wrap` or `reverse-wrap` classes. By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property. Direction also plays a role here, determining the direction new lines are stacked in.

![Flexbox Direction](/images/flexbox-wrap.svg)

If you explicitly do not want to wrap, use `no-wrap` class.

| Class Name | Description |
| --- | --- |
| `wrap` | Wrap if necessary |
| `no-wrap` | Do NOT wrap even if necessary |
| `reverse-wrap` | Wrap backwards if necessary |

### Alignment

**For alignment along the main axis**, use classes below. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

![Flexbox Justify Content](/images/flexbox-main-axis-align.svg)

**For alignment perpendicular to the main axis**, use classes below. This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the horizontal-* version for the cross-axis (perpendicular to the main-axis).

![Flexbox Items Align](/images/flexbox-cross-axis-align.svg)

The next classes **align a flex container's lines** within when there is extra space in the cross-axis, similar to how horizontal-* aligns individual items within the main-axis.

![Flexbox Content Align](/images/flexbox-content-align.svg)

### Gutters
| Class Name | Description |
| --- | --- |
| `small-gutter` | Small gutter between cells |
| `medium-gutter` or `gutter` | Default gutter between cells |
| `big-gutter` | Big gutter between cells |
| `large-gutter` | Large gutter between cells |

Example:
``` html
<div class="row large-gutter">
  <div>First column</div>
  <div>Second column</div>
</div>
```

## Children Classes

### Order
**You can set the order** by using `order-i` classes, where *i* is between 1-10. By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container. If you need more granularity, use `order` CSS property and assign the desired value.

![Flexbox Order](/images/flexbox-order.svg)

Example:
``` html
<div class="row">
  <div class="order-2">Second column</div>
  <div class="order-3">Third column</div>
  <div class="order-1">First column</div>
</div>
```

### Size
The width of a column can be set as `width-XofY` (where *Y* is 1 to 5 and *X* is 1 to Y).
It's a wrapper over `flex 0 1 X%`.

Example: `width-1of3` for a 33% width for the cell.

``` html
<div class="row">
  <div class="width-2of3">2/3</div>
  <div class="width-1of5">1/5</div>
  <div class="auto">auto</div>
  <div class="auto">auto</div>
</div>
```

CSS class `auto` makes the cell expand to the remaining unused width.

There's also the possible to offset a cell with `offset-`

### Grow
**An item can grow if it's enough space available** by using `grow-i` classes, where *i* is between 1-10. This defines the ability for a flex item to grow if necessary. It accepts a unit-less value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.
If all items have `grow-1` class, the remaining space in the container will be distributed equally to all children. If one of the children has `grow-2`, the remaining space would take up twice as much space as the others (or it will try to, at least).

![Flexbox Grow](/images/flexbox-grow.svg)

### Shrink
**An item can shrink if necessary** by using `shrink-i` classes, where *i* is between 1-10.

### Self Alignment
**An item can override the aligned specified on parent**. This allows alignment to be overridden for individual flex items. Please see the [Alignment](#Alignment) explanation from Parent Classes to understand the available values (`self-start`, `self-center`, `self-baseline`, `self-end`, `self-stretch`).

![Flexbox Grow](/images/flexbox-self.svg)

## Visibility
**An item can be displayed or not based on the width of the screen**. The following list displays prefixes (can be used as standalone too!) that you can use for all of the above CSS classes.

| Prefix | Description |
| --- | --- |
| `sm` | Display only on small windows |
| `md` | Display only on medium-sized windows |
| `bg` | Display only on big windows |
| `lg` | Display only on large windows |
| `lt-md` | Display only on lower than medium windows |
| `lt-bg` | Display only on lower than big windows |
| `lt-lg` | Display only on lower than large windows |
| `gt-sm` | Display only on greater than small windows |
| `gt-md` | Display only on greater than medium windows |
| `gt-bg` | Display only on greater than big windows |

``` html
<!-- Also see the demo on this page and try a mobile and desktop view -->
<div class="row gutter">
  <div class="sm">SM</div>
  <div class="md">MD</div>
  <div class="bg">BG</div>
  <div class="lg">LG</div>
  <div class="lt-md">lt-MD</div>
  <div class="lt-bg">lt-BG</div>
  <div class="lt-lg">lt-LG</div>
  <div class="gt-sm">gt-SM</div>
  <div class="gt-md">gt-MD</div>
  <div class="gt-bg">gt-BG</div>
</div>
```

One more example:
``` html
<!-- Displayed as column on small windows and as rows the rest of the time -->
<div class="row gutter sm-column"> <<<<<<<<<<<<<<
  <div class="width-2of3"><div>2/3</div></div>
  <div class="width-1of5"><div>1/5</div></div>
  <div class="auto"><div>auto</div></div>
  <div class="auto"><div>auto</div></div>
</div>
```

Prefixes also work with `order-i`, `shrink-i`, `width-XofY`, on gutters and so on.

What does small, medium, big or large windows mean? Check [CSS &gt; Visibility](/api/css-visibility.html#Window-Width-Related) page to see thresholds on window width.
