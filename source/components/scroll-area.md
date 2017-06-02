title: Scroll Area
---
Quasar offers a neat way of customizing the scrollbars with the help of QScrollArea component which can encapsulate your content. Think of it as a DOM element which has `overflow: auto`, but with your own custom styled scrollbar instead of browser's default one and a few nice features on top.

This is especially useful for desktop as scrollbars are hidden on a mobile device. When on a mobile device, QScrollArea simply wraps the content in a `<div>` configured for default browser scrolling.

## Basic Usage

QScrollArea supports scrolling by user dragging the custom scrollbars or by using the mousewheel. If on a desktop that has a touch screen then scrolling will work with touch actions too.

```html
<!--
  In this example we set a height to force
  custom scrollbars to appear
-->
<q-scroll-area style="width: 400px; height: 100px;">
  <div v-for="n in 10">
    Lorem ipsum dolor sit amet, consectetur adipisicing
    elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua.
  </div>
</q-scroll-area>
```

## Vue Properties

| Property | Type | Description |
| --- | --- | --- | --- |
| `thumb-style` | Object with CSS properties and values for styling the thumb of custom scrollbar. |
| `content-style` | Object with CSS properties and values for styling the container of QScrollArea. |
| `content-active-style` | Object with CSS properties and values for styling the container of QScrollArea when scroll area becomes active (is mouse hovered). |
| `delay` | Number (in milliseconds, default is 1000) defining a delay before custom scrollbars become visible after mouse is hovering the container. |

## Custom Scrollbar Example

```html
<!--
  Custom scrollbar thumb with a delay of
  1.5 seconds before appearing after hovering
  the mouse over the scrollable content
-->
<q-scroll-area
  style="height: 200px"
  :thumb-style="{
    right: '4px',
    borderRadius: '5px',
    background: 'red',
    width: '10px',
    opacity: 1
  }"
  :delay="1500"
>
  ...Scrollable.Content...
</q-scroll-area>
```
