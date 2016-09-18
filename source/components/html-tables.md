title: HTML Tables
---
HTML tables don't need to look bad. Quasar takes care of them by default if you add `quasar-table` CSS class to them.
<input type="hidden" data-fullpage-demo="css/html-table">

If the default table style is not enough, also add the following CSS classes to best suit your needs: `bordered`, `row-delimiter`, `cell-delimiter`, `striped`, `highlight`, `compact`.

``` html
<table class="quasar-table">
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
