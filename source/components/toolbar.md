title: Toolbar
---
Quasar Toolbars are non-wrappable DOM elements which usually contain buttons and text.

A Quasar Layout can have have headers and/or footers (also called "marginals"), which will always be visible to the user at all times as long as the Layout is being used. This is a great place to use Toolbars, but you can also place Toolbars anywhere else you want.

<input type="hidden" data-fullpage-demo="layout/toolbar">

## Basic Usage
Standalone example (within a page template, not on a Layout):
``` html
<div slot="header" class="toolbar">
  <!-- Toolbar title -->
  <quasar-toolbar-title :padding="1">
    Title
  </quasar-toolbar-title>

  <button>
    <i>mail</i>
  </button>
</div>
```

Example on using a Toolbar on Layout header:

``` html
<quasar-layout>
  ...
  <div slot="header" class="toolbar">
    <!-- opens drawer using its ref -->
    <button
      class="hide-on-drawer-visible"
      @click="$refs.drawer.open()"
    >
      <i>menu</i>
    </button>

    <quasar-toolbar-title :padding="2">
      Title
    </quasar-toolbar-title>

    <button>
      <i>mail</i>
    </button>
    <button>
      <i>alarm</i>
    </button>
  </div>
  ...
</quasar-layout>
```

## Toolbar Title/Text
As you've seen in the examples above, there's the `<quasar-toolbar-title>` component which wraps the title/text of a Toolbar.

In order to successfully place it in the horizontal middle of your Toolbar on iOS theme (which is specific for iOS Apps), then you need to specify the maximum number of buttons on the left or right side of the title through the `padding` attribute.

## Coloring
Use one of the Quasar colors from the Color Palette, like `primary`, `secondary`, `orange`, `teal` as CSS class:

``` html
<div class="toolbar orange">...</div>
```

You can also invert the colors (see demo for example) by adding the color and `inverted` as CSS classes:

``` html
<div class="toolbar inverted orange">...</div>
```
