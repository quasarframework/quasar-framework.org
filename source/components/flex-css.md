title: Flex CSS
---
Quasar provides lots of CSS classes to help you build your UI easily with the help of [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). Think of it like operating with rows and columns with many options at hand.

> The final section of this page will show you how to create responsive UIs. Also take a look at the demo (best viewed by clicking "Desktop View" when on a desktop, because that's where you can resize the window width to see helper classes in action). Click on "View Source" too to see the demo's source code.
<input type="hidden" data-fullpage-demo="css/grid-layout">

## Background on Flexbox
The Flexbox Layout (Flexible Box) module (currently a W3C Last Call Working Draft) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word "flex").

The main idea behind the flex layout is to give the container the ability to alter its items' width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes). A flex container expands items to fill available free space, or shrinks them to prevent overflow.

Most importantly, the flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based). While those work well for pages, they lack flexibility (no pun intended) to support large or complex applications (especially when it comes to orientation changing, resizing, stretching, shrinking, etc.).

## Getting Started
Quasar Flex CSS classes apply to either the Container (Parent) or the Container's items (Children).

![Flexbox Container](/images/flexbox-container.svg)
![Flexbox Items](/images/flexbox-items.svg)

## Parent Classes

### Setting Direction
One of the following CSS classes is mandatory for the parent in order for the children ones (described in next sections) to have any effect.

![Flexbox Direction](/images/flexbox-direction.svg)

| Class Name | Description |
| --- | --- |
| `row` | Flex row |
| `row inline` | Inline Flex row |
| `column` | Flex column |
| `column inline` | Inline Flex column |
| `row reverse` | Flex row with `flex-direction` set to `row-reverse` |
| `column reverse` | Flex column with `flex-direction` set to `column-reverse` |

Example:
``` html
<div class="row">
  <div>First column</div>
  <div>Second column</div>
  <div>Third column</div>
</div>
```

### Wrapping by default
By default, all rows and columns are wrapping content.

![Flexbox Direction](/images/flexbox-wrap.svg)

However if you explicitly do not want to wrap and by so doing you want to fit all content into one line, then add `no-wrap` CSS helper class.

Also, if you want to wrap in reverse order, then `reverse-wrap` is available.

| Class Name | Description |
| --- | --- |
| `wrap` | Wrap if necessary ("on" by default, no need to specify it) |
| `no-wrap` | Do NOT wrap even if necessary |
| `reverse-wrap` | Wrap backwards if necessary |

### Alignment

**For alignment along the main axis**, use classes below. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

![Flexbox Justify Content](/images/flexbox-main-axis-align.svg)

**For alignment perpendicular to the main axis**, use classes below. This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the horizontal-* version for the cross-axis (perpendicular to the main-axis).

![Flexbox Items Align](/images/flexbox-cross-axis-align.svg)

The next classes **align a flex container's lines** within when there is extra space in the cross-axis, similar to how horizontal-* aligns individual items within the main-axis.

![Flexbox Content Align](/images/flexbox-content-align.svg)

## Children Classes

### Distribution of Size
Quasar uses a 12 point column system for distributing size of row children. Here are some examples of the CSS helper classes available:


``` html
<div class="row">
  <div class="col-8">two thirds</div>
  <div class="col-2">one sixth</div>
  <div class="col-auto">auto size based on content and available space</div>
  <div class="col">fills remaining available space</div>
</div>
```

In the example above, `col-8` fills two thirds (2/3) of the row width, because 8/12 = 2/3 = 66%, while `col-2` occupies one sixth (2/12 = 1/6 ~ 16.67%).

CSS helper class `col-auto` makes the cell fill only the space it needs to be rendered, with the possibility to shrink when not enough space is available. `col`, on the other hand, tries to fill all space available while also shrinking if needed.

Another example with a visual representation below it:
```html
<div class="row">
  <div class="col">1</div>
  <div class="col">1</div>
  <div class="col">1</div>
  <!--
     we have 3 children, so equivalent
     to above would be to use `col-4`
     on each of the children
  -->
</div>

<div class="row">
  <div class="col-3">1</div>
  <div class="col-6">2</div>
  <div class="col-3">1</div>
</div>
```
![Flexbox Grow](/images/flexbox-grow.svg)

There's also the possible to offset a cell. Example: `offset-4` which offsets a third of space (4/12 = 1/3 = 33%).

### Self Alignment
**An item can override the aligned specified on parent**. This allows alignment to be overridden for individual flex items. Please see the [Alignment](#Alignment) explanation from Parent Classes to understand the available values (`self-start`, `self-center`, `self-baseline`, `self-end`, `self-stretch`).

![Flexbox Grow](/images/flexbox-self.svg)

### Order
**You can set the order** of children elements by using `order-first` and `order-last` CSS helper classes.

By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container. If you need more granularity, use `order` CSS property and assign the desired value.

Example:
``` html
<div class="row">
  <div style="order: 2">Second column</div>
  <div class="order-last">Third column</div>
  <div class="order-first">First column</div>
</div>
```

Here is how the CSS `order` property works:

![Flexbox Order](/images/flexbox-order.svg)

## Responsive Design
Flex CSS Helper classes can be applied based on the width of the screen, to help you in making a responsive UI. The 12 points grid is inspired by Bootstrap's, so there are a lot of similarities.

What we've learned so far is that, for example, we can size the columns regardless of window width. If we are to create a response UI, we need to dynamically change the sizing while taking into account how wide the window is. First, let's learn about some tokens that you can inject at middle of `col-*`, `offset-*` and `col-auto` helper classes (look at table below for tokens).

| Token | Max window width | Description / When it applies |
| --- | --- |
| `xs` | 576px | Extra small sized window |
| `sm` | 768px | Small sized window |
| `md` | 992px | Medium-sized window |
| `lg` | 1200px | Large sized window |
| `xl` | 1201+ px | Extra large sized window |

Example: `col-md-7`, `offset-lg-3`, `col-xs-auto`.

A full example: let's say we have a row with three children. On extra small windows, we need to stack the children vertically, on small windows we need to display them side by side (each having equal width), and starting with medium windows we should display them all on same line:

``` html
<div class="row">
  <div class="col-xs-12 col-sm-6 col-md-4">
    col
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    col
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    col
  </div>
</div>
```

Notice in the above example that we used `col-xs-12` (12/12 = 100% of row, so each child will take full width of the container making all children stack vertically, since rows are wrapping content by default), `col-sm-6` (6/12 = 50% of row) and `col-md-4` (4/12 = 33% of row).

Like previously mentioned, rows wrap content by default, so when 12 (or more) grid points are used for a row, content is wrapped to the next line. If we have two `<div>`s and we use `col-8` on both, they will also stack, since 8 + 8 = 16 and we can only display 12 points on a single line.

```html
<div class="row">
  <!--
    more than 12 grid points together,
    so second <div> will wrap on next line
  -->
  <div class="col-8">col</div>
  <div class="col-8">col</div>
</div>
```

Also check [CSS Helpers &gt; Visibility](/components/visibility.html#Window-Width-Related) page to see thresholds on window width and these tokens (xs, sm, md, lg, xl) used on their own to hide or show DOM elements.
