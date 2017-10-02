title: HTML Tables
---
HTML tables don't need to look bad. Quasar takes care of them by default if you add `q-table` CSS class to them.
<input type="hidden" data-fullpage-demo="grouping/html-table">

If the default table style is not enough, also add the following CSS classes to best suit your needs: `bordered`, `horizontal-separator`, `vertical-separator`, `cell-separator`, `striped`, `striped-even`, `striped-odd`, `highlight`, `compact`, `loose`, `flipped`, `responsive`.

``` html
<table class="q-table">
  <thead>
    <tr>
      <th class="text-left">Name</th>
      <th class="text-right">Price</th>
      <th class="text-right">In Stock</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td class="text-left">Item #1</td>
      <td class="text-right">$10.11</td>
      <td class="text-right">101</td>
    </tr>
    <tr>
      <td class="text-left">Item #2</td>
      <td class="text-right">$8.88</td>
      <td class="text-right">34</td>
    </tr>
    <tr>
      <td class="text-left">Item #3</td>
      <td class="text-right">$0.15</td>
      <td class="text-right">1670</td>
    </tr>
  </tbody>
</table>
```

If you're using `responsive` CSS class, then add `data-th="Column name"` to each `<td>`. Example:

``` html
<table class="q-table responsive">
  <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>In Stock</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td data-th="Name">Item #1</td>
      <td data-th="Price">$10.11</td>
      <td data-th="In Stock">101</td>
    </tr>
    <tr>
      <td data-th="Name">Item #2</td>
      <td data-th="Price">$8.88</td>
      <td class="text-right">34</td>
    </tr>
    <tr>
      <td data-th="Name">Item #3</td>
      <td data-th="Price">$0.15</td>
      <td data-th="In Stock">1670</td>
    </tr>
  </tbody>
</table>
```
