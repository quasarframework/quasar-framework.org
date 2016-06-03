title: Quasar Layout Header and Footer
---
A Quasar Layout can have have a Header and/or a Footer (also called Marginals), which will always be visible to the user at all times as long as the Layout gets being used.

## Basic Usage
The marginals are DOM elements that must be defined inside the `<screen>` tag of your Layout template, and they must contain the `slot` HTML attribute with either `header` or `footer` as value.

``` html
<screen>
  ...

  <!-- Header -->
  <div slot="header" class="row items-center">
    <button class="left-drawer-toggle"><i>menu</i></button>
    <p>Title</p>
    <div class="group">
      <button class="small" v-exit-app><i>power_settings_new</i></button>
      <button class="small"><i>settings</i></button>
    </div>
  </div>

  ...

  <!-- Footer -->
  <div slot="footer" class="row items-center">
    <p>Footer</p>
  </div>

  ...
</screen>
```

## Tips

1. As you can see from the example above, it's best to inject [Grid Layout](/api/css-grid-layout.html) CSS classes (like `row`, `items-center`, `justify-center`, `auto`) to manage how marginals look.

2. Make sure the title is wrapped in a paragraph tag (`<p>`).

3. It's best to use small buttons in the marginals (`<button class="small">`) and no colors on them.

4. You can include multiple headers or footers. They will be stacked in the order that they appear in your Layout template. Think of each `<div slot="header">...</div>` and `<div slot="header">...</div>` as rows in your Header/Footer.
