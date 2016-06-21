title: Context Dropdown
---
This component allows you (currently only on a desktop) to display a context menu (popup) instead of the default one when user performs a right-click.

<input type="hidden" data-fullpage-demo="context-dropdown">

## Basic Usage
``` html
<context-dropdown>
  <!--
    The DOM element(s) that make up the context menu,
    in this case a list, but you can use whatever you like
  -->
  <div class="list item-delimiter highlight">
    <div class="item item-link" v-for="n in 30">
      <div class="item-content">
        <div class="item-label">Label</div>
        <div class="item-value">Value</div>
      </div>
    </div>
  </div>
</context-dropdown>
```

The position of the menu/popup is calculated so that it will be displayed on the available screen real estate, switching to right-side and/or top-side when necessary.

## Attributes
There is also one DOM element attribute you can specify:

| Element Property | Optional | Type | Description |
| --- | --- | --- | --- |
| `duration` | *Yes* | Number | Milliseconds the animation takes to display or hide the popup. |

``` html
<context-dropdown :duration="500">
  ...
</context-dropdown>
```
