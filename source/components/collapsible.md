title: Collapsibles
---
Quasar Collapsibles allow the hiding of content that is not immediately relevant to the user. Think of them as accordion elements that expand when clicked on.

There are two types of Collapsibles: **Regular** and **Popout**. And two types of behavior: **Default** (only one opened accordion element at a time) and **Free** (user can open multiple accordion elements at a time). And also there are two ways of implementing a Collapsible: through a Vue Directive or through a Web Component.

<input type="hidden" data-fullpage-demo="web-components/collapsible">

## Basic Usage - Directive
The usage below implies you won't add or remove items from the Collapsibles. If this is the case though, use the Web Component in the next section (Advanced Usage).

``` html
<!-- Regular collapsible -->
<ul class="collapsible">
  <li v-collapsible>
    <div><i>assignment_ind</i>First</div>
    <div>
      Content 1
    </div>
  </li>
  <li v-collapsible>
    <div><i>explore</i>Second</div>
    <div>
      Content 2
    </div>
  </li>
  <li v-collapsible>
    <div><i>shopping_cart</i>Third</div>
    <div>
      Content 3
    </div>
  </li>
</ul>
```

For Popouts, add class `popout` to the `<ul>` DOM element.
``` html
<!-- Popout collapsible -->
<ul class="collapsible popout">...</ul>
```

For **Free** type (user can open multiple accordion elements at a time), use a slightly different version of the `v-collapsible` directive:

``` html
<ul class="collapsible">
  <li v-collapsible.free>...</li>
  <li v-collapsible.free>...</li>
</ul>
<ul class="collapsible popout">
  <li v-collapsible.free>...</li>
  <li v-collapsible.free>...</li>
</ul>
```

## Preselecting Items
Accordion items can be opened by default. For this, add CSS class `active` to them. If opening multiple items at once by default then make sure that the Collapsible is in *Freely* mode.

``` html
<ul class="collapsible">
  ...
  <li v-collapsible class="active">...</li>
  ...
</ul>

<ul class="collapsible">
  ...
  <li class="active" v-collapsible.free>...</li>
  <li class="active" v-collapsible.free>...</li>
  ...
</ul>
```

## Ubiquity - Use Cards As Content

``` html
<ul class="collapsible">
  <li v-collapsible>
    <div><i>explore</i>Second Card</div>
    <div class="card">
      <img src="assets/mountains.jpg">
      <div class="card-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
  </li>
</ul>
```
