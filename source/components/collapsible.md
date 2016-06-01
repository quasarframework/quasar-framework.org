title: Quasar Collapsibles
---
Quasar Collapsibles allow the hiding of content that is not immediately relevant to the user. Think of them as accordion elements that expand when clicked on.

There are two types of Collapsibles: **Regular** and **Popout**. And two types of behavior: **Default** (only one opened accordion element at a time) and **Freely** (user can open multiple accordion elements at a time). And also there are two ways of implementing a Collapsible: through a Vue Directive or through a Web Component.

<input type="hidden" data-fullpage-demo="collapsible">

## Basic Usage - Directive
The usage below implies you won't add or remove items from the Collapsibles. If this is the case though, use the Web Component in the next section (Advanced Usage).

``` html
<!-- Regular collapsible -->
<ul v-collapsible>
  <li>
    <div><i>assignment_ind</i>First</div>
    <div>
      Content 1
    </div>
  </li>
  <li>
    <div><i>explore</i>Second</div>
    <div>
      Content 2
    </div>
  </li>
  <li>
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
<ul class="popout" v-collapsible>...</ul>
```

For Freely type (user can open multiple accordion elements at a time), use a slightly different version of the `v-collapsible` directive:

``` html
<ul v-collapsible="true">...</ul>
<ul class="popout" v-collapsible="true">...</ul>
```

## Advanced Usage - Web Component
This usage allows you to add or remove accordion items at any time, but it comes with a small price on performance. So avoid it if you can.

``` html
<quasar-collapsible>
  <quasar-collapsible-item>
    <div><i>assignment_ind</i>First</div>
    <div>
      Content 1
    </div>
  </quasar-collapsible-item>
  <quasar-collapsible-item>
    <div><i>shopping_basket</i>Second</div>
    <div>
      Content 2
    </div>
  </quasar-collapsible-item>
  <quasar-collapsible-item>
    <div><i>loyalty</i>Third</div>
    <div>
      Content 3
    </div>
  </quasar-collapsible-item>
</quasar-collapsible>
```

For Popouts, add class `popout` to the `<quasar-collapsible>` DOM element.
``` html
<!-- Popout collapsible -->
<quasar-collapsible class="popout">...</quasar-collapsible>
```

For Freely type (user can open multiple accordion elements at a time), add `freely` DOM element empty attribute:

``` html
<quasar-collapsible freely>...</quasar-collapsible>
<quasar-collapsible class="popout" freely>...</quasar-collapsible>
```

## Preselecting Items
Accordion items can be opened by default. For this, add CSS class `active` to them. If opening multiple items at once by default then make sure that the Collapsible is in *Freely* mode.

``` html
<ul v-collapsible>
  ...
  <li class="active">...</li>
  ...
</ul>

<ul v-collapsible="true">
  ...
  <li class="active">...</li>
  <li class="active">...</li>
  ...
</ul>

<quasar-collapsible freely>
  ...
  <quasar-collapsible-item class="active">...</quasar-collapsible-item>
  <quasar-collapsible-item class="active">...</quasar-collapsible-item>
  ...
</quasar-collapsible>
```

## Ubiquity - Use Cards As Content

``` html
<ul v-collapsible>
  <li>
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
