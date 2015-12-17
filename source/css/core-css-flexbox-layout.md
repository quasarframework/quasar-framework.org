title: Quasar CSS Flexbox Layout
---

The following is an extract (and adaptation for Quasar) from <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">A Guide to Flexbox</a>.

## Background
The Flexbox Layout (Flexible Box) module (currently a W3C Last Call Working Draft) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word "flex").

The main idea behind the flex layout is to give the container the ability to alter its items' width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes). A flex container expands items to fill available free space, or shrinks them to prevent overflow.

Most importantly, the flexbox layout is direction-agnostic as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based). While those work well for pages, they lack flexibility (no pun intended) to support large or complex applications (especially when it comes to orientation changing, resizing, stretching, shrinking, etc.).

## Getting Started
Flexbox applies to either the Container (Parent) or the Container's items (Children).
![Flexbox Container](/images/flexbox-container.svg)
![Flexbox Items](/images/flexbox-items.svg)

Following classes must be accompanied by the `layout` class, which adds the `display: flex` CSS property. If you'd like inline-flex, use `layout inline` class combo.

## Parent Classes

### Direction
**You need a direction**. Use `horizontal`, `horizontal-reverse`, `vertical` or `vertical-reverse` classes.
![Flexbox Direction](/images/flexbox-direction.svg)

### Wrap
**You can also wrap content**. Use `wrap` or `wrap-reverse` classes. By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property. Direction also plays a role here, determining the direction new lines are stacked in.
![Flexbox Direction](/images/flexbox-wrap.svg)

If you explicitly do not want to wrap, use `nowrap` class.

### Justify Alignment
**For alignment along the main axis**, use classes below. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.
![Flexbox Justify Content](/images/flexbox-justify.svg)

### Items Alignment
**For alignment perpendicular to the main axis**, use classes below. This defines the default behaviour for how flex items are laid out along the cross axis on the current line. Think of it as the justify-* version for the cross-axis (perpendicular to the main-axis).
![Flexbox Items Align](/images/flexbox-items-align.svg)

### Content Alignment
The next classes **align a flex container's lines** within when there is extra space in the cross-axis, similar to how justify-* aligns individual items within the main-axis.
![Flexbox Content Align](/images/flexbox-content-align.svg)

## Children Classes

### Order
**You can set the order** by using `order-i` classes, where *i* is between 1-12. By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container. If you need more granularity, use `order` CSS property and assign the desired value.
![Flexbox Order](/images/flexbox-order.svg)

### Grow
**An item can grow if it's enough space available** by using `grow-i` classes, where *i* is between 1-12. This defines the ability for a flex item to grow if necessary. It accepts a unit-less value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.
If all items have `grow-1` class, the remaining space in the container will be distributed equally to all children. If one of the children has `grow-2`, the remaining space would take up twice as much space as the others (or it will try to, at least).
![Flexbox Grow](/images/flexbox-grow.svg)

### Shrink
**An item can shrink if necessary** by using `shrink-i` classes, where *i* is between 1-12.

### Self Alignment
**An item can override the aligned specified on parent**. This allows alignment to be overridden for individual flex items. Please see the [Items Alignment](#Items_Alignment) explanation from Parent Classes to understand the available values.
![Flexbox Grow](/images/flexbox-self.svg)

### Flex Basis
This refers to the `flex-basis` CSS property (*Note: not a Quasar CSS class like the other ones*) and defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means "look at my width or height property" (which was temporarily done by the main-size keyword until deprecated). The content keyword means "size it based on the item's content" - this keyword isn't well supported yet, so it's hard to test and harder to know what it's brethren max-content, min-content, and fit-content do.

### Combo flex properties
This refers to the Quasar CSS class `flex-i` where *i* is between 1-12. It sets `flex` CSS property to the respective number (defined by *i*) and the flex-basis to near 0.
