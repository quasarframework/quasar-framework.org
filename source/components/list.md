title: Lists
---
Quasar Lists are used to display rows of information, such as a contact list, a playlist, or menu. Each row is called an item. Items can also be used outside of a list.

Lists can also be used (and it's also recommended) on Quasar Drawers.

Scroll down to see the demos if on desktop.

## Basic Usage
<input type="hidden" data-demo="css/list/basic">

``` html
<!-- Default List -->
<div class="list">
  <div class="item">Quasar Framework</div>
  <div class="item">Quasar Framework</div>
  <div class="item">Quasar Framework</div>
</div>
```
``` html
<!-- Striped List -->
<div class="list striped">
  <div class="item">Quasar Framework</div>
  <div class="item">Quasar Framework</div>
  <div class="item">Quasar Framework</div>
</div>
```

``` html
<!-- Inset List -->
<div class="list inset">
  <div class="item">Quasar Framework</div>
  <div class="item">Quasar Framework</div>
  <div class="item">Quasar Framework</div>
</div>
```

``` html
<!-- Highlight List (Hover over Items) -->
<div class="list highlight">
  <div class="item">Quasar Framework</div>
  <div class="item">Quasar Framework</div>
  <div class="item">Quasar Framework</div>
</div>
```

``` html
<!-- List with a Divider -->
<div class="list">
  <div class="item">Quasar Framework</div>
  <div class="item">Quasar Framework</div>
  <div class="list-divider"></div>
  <div class="item">Quasar Framework</div>
</div>
```

``` html
<!-- List with Item Delimiters -->
<div class="list item-delimiter">
  <div class="item">Quasar Framework</div>
  <div class="item">Quasar Framework</div>
  <div class="item">Quasar Framework</div>
</div>
```

``` html
<!-- List with Border (and Item Delimiters) -->
<div class="list bordered item-delimiter">
  <div class="item">Quasar Framework</div>
  <div class="item">Quasar Framework</div>
  <div class="item">Quasar Framework</div>
</div>
```

## Complex Usage
<input type="hidden" data-demo="css/list/complex">

Quasar Lists are able to carry items with labels and values, icons and more, all these in many forms of display it.

``` html
<!-- List with Item Label and Item Value -->
<div class="list">
  <div class="item">
    <div class="item-content">
      <div class="item-label">Label</div>
      <div class="item-value">Value</div>
    </div>
  </div>
  <div class="item">
    <div class="item-content">
      <div class="item-label">Label</div>
      <div class="item-value">
        <i>pages</i>
      </div>
    </div>
  </div>
  <div class="item">
    <div class="item-content">
      <div class="item-label">Label</div>
      <div class="item-value">
        <i>perm_identity</i>
      </div>
    </div>
  </div>
</div>
```

``` html
<!-- List with Inner Delimiters -->
<div class="list inner-delimiter">
  <div class="item">
    <div class="item-content">
      <div class="item-label">Label</div>
      <div class="item-value">Value</div>
    </div>
  </div>
  <div class="item">
    <div class="item-content">
      <div class="item-label">Label</div>
      <div class="item-value">Value</div>
    </div>
  </div>
  <div class="item">
    <div class="item-content">
      <div class="item-label">Label</div>
      <div class="item-value">
        <button class="primary clear">View</button>
      </div>
    </div>
  </div>
</div>
```

``` html
<!-- List with Icons -->

<div class="list bordered inner-delimiter">
  <div class="item">
    <i>mail</i>
    <div class="item-content">
      Quasar Framework
    </div>
  </div>
  <div class="item">
    <i>perm_identity</i>
    <div class="item-content">
      Quasar Framework
    </div>
  </div>
  <div class="item">
    <i>query_builder</i>
    <div class="item-content">
      <div class="item-label">Quasar Framework</div>
      <div class="item-value">
        <button class="primary clear">View</button>
      </div>
    </div>
    </div>
  </div>
</div>

<div class="list bordered inner-delimiter">
  <div class="item">
    <div class="item-content">
      <div class="item-label">Label</div>
      <i>explore</i>
    </div>
  </div>
  <div class="item">
    <div class="item-content">
      <div class="item-label">Label</div>
      <i>alarm</i>
    </div>
  </div>
  <div class="item">
    <div class="item-content">
      <div class="item-label">Label</div>
      <i>shopping_cart</i>
    </div>
  </div>
</div>
```

## List Headers
<input type="hidden" data-demo="css/list/headers">

Quasar Lists can also have headers (default or inverted) to better separate contents.

``` html
<!-- Default Header -->
<div class="list item-delimiter">
  <div class="list-header">
    <h3>H3 Header</h3>
  </div>
  <div class="item">Quasar Framework</div>
  <div class="item">Quasar Framework</div>
  <div class="list-header">
    Normal Text Header
  </div>
  <div class="item">Quasar Framework</div>
  <div class="item">Quasar Framework</div>
</div>
```

``` html
<!-- Inverted Header -->
<div class="list item-delimiter">
  <div class="list-header inverted">
    <h3>H3 Header</h3>
  </div>
  <div class="item">Quasar Framework</div>
  <div class="item">Quasar Framework</div>
  <div class="list-header inverted">
    Normal Text Header
  </div>
  <div class="item">Quasar Framework</div>
  <div class="item">Quasar Framework</div>
</div>
```

## List Multiline
<input type="hidden" data-demo="css/list/multiline">

Quasar Labels are able to support multi-line labels, with possible a line as title of the item.

``` html
<div class="list inner-delimiter">
  <div class="item">
    <i>perm_identity</i>
    <div class="item-content">
      <div class="item-label">
        <p class="item-title">Jack</p>
        <p>Linux Lover</p>
      </div>
    </div>
  </div>
  <div class="item">
    <i>perm_identity</i>
    <div class="item-content">
      <div class="item-label">
        <p class="item-title">John</p>
        <p>Web Developer</p>
        <p>Quasar Framework</p>
      </div>
      <i>mail</i>
    </div>
  </div>
  <div class="item">
    <i>perm_identity</i>
    <div class="item-content">
      <div class="item-label">
        <p class="item-title">Joe</p>
        <p>Newbie</p>
      </div>
    </div>
  </div>
  <div class="item">
    <i>perm_identity</i>
    <div class="item-content">
      <div class="item-label">
        <p class="item-title">Linux Lover</p>
        <p>Linux rulz!</p>
        <p>Quasar rulz!</p>
      </div>
      <i>mail</i>
    </div>
  </div>
</div>
```

## List with Images
<input type="hidden" data-demo="css/list/with-images">

Quasar List items can also contain an avatar or a thumbnail.

``` html
<!-- List with Avatars -->
<div class="list inner-delimiter">
  <div class="item">
    <img class="avatar" src="assets/linux-avatar.png">
    <div class="item-content">
      <div class="item-label">
        <p class="item-title">Jack</p>
        <p>Linux Lover</p>
      </div>
    </div>
  </div>
  <div class="list-header">Header</div>
  <div class="item">
    <img class="avatar" src="assets/guy-avatar.png">
    <div class="item-content">
      <div class="item-label">
        <p class="item-title">John</p>
        <p>Web Developer</p>
        <p>Quasar Framework enthusiast</p>
      </div>
      <i>supervisor_account</i>
    </div>
  </div>
  <div class="item">
    <img class="avatar" src="assets/boy-avatar.png">
    <div class="item-content">
      <div class="item-label">
        <p class="item-title">Joe</p>
        <p>Newbie</p>
      </div>
      <i>supervisor_account</i>
    </div>
  </div>
  <div class="item">
    <img class="avatar" src="assets/linux-avatar-2.png">
    <div class="item-content">
      <div class="item-label">
        <p class="item-title">Linux Lover</p>
        <p>Linux rulz!</p>
        <p>Quasar rulz!</p>
      </div>
      <i>supervisor_account</i>
    </div>
  </div>
</div>
```

``` html
<!-- List with Thumbnails -->
<div class="list inner-delimiter">
  <div class="item">
    <img class="thumbnail" src="assets/linux-avatar.png">
    <div class="item-content">
      <div class="item-label">
        <p class="item-title">Jack</p>
        <p>Linux Lover</p>
      </div>
    </div>
  </div>
  <div class="list-header">Header</div>
  <div class="item">
    <img class="thumbnail" src="assets/guy-avatar.png">
    <div class="item-content">
      <div class="item-label">
        <p class="item-title">John</p>
        <p>Web Developer</p>
        <p>Quasar Framework enthusiast</p>
      </div>
      <i>supervisor_account</i>
    </div>
  </div>
  <div class="item">
    <img class="thumbnail" src="assets/boy-avatar.png">
    <div class="item-content">
      <div class="item-label">
        <p class="item-title">Joe</p>
        <p>Newbie</p>
      </div>
      <i>supervisor_account</i>
    </div>
  </div>
  <div class="item">
    <img class="thumbnail" src="assets/linux-avatar-2.png">
    <div class="item-content">
      <div class="item-label">
        <p class="item-title">Linux Lover</p>
        <p>Linux rulz!</p>
        <p>Quasar rulz!</p>
      </div>
      <i>supervisor_account</i>
    </div>
  </div>
</div>
```

## List with Form Web Components
<input type="hidden" data-demo="css/list/with-form-components">

Quasar Lists can contain Web Components such as Checkboxes, Radios, Toggles, Ranges and more. Good for using them on a settings menu, for example.

``` html
<!-- List with Radios -->
<div class="list inner-delimiter bordered">
  <label class="item">
    <i>mail</i>
    <div class="item-content">
      <div class="item-label">Option 1</div>
      <quasar-radio :model.sync="radioModel" value="opt1"></quasar-radio>
    </div>
  </label>
  <label class="item">
    <i>mail</i>
    <div class="item-content">
      <div class="item-label">Option 2</div>
      <quasar-radio :model.sync="radioModel" value="opt2"></quasar-radio>
    </div>
  </label>
</div>

<div class="list inner-delimiter bordered">
  <label class="item">
    <quasar-radio :model.sync="radioModel" value="opt1"></quasar-radio>
    <div class="item-content">
      Option 1
    </div>
  </label>
  <label class="item">
    <quasar-radio :model.sync="radioModel" value="opt2"></quasar-radio>
    <div class="item-content">
      Option 2
    </div>
  </label>
</div>
```

``` html
<!-- List with Checkboxes -->
<div class="list inner-delimiter bordered">
  <label class="item">
    <i>mail</i>
    <div class="item-content">
      <div class="item-label">Quasar Framework</div>
      <quasar-checkbox :model.sync="checkboxModel"></quasar-checkbox>
    </div>
  </label>
  <label class="item">
    <i>mail</i>
    <div class="item-content">
      <div class="item-label">Quasar Framework</div>
      <quasar-checkbox :model.sync="checkboxModel"></quasar-checkbox>
    </div>
  </label>
</div>

<div class="list inner-delimiter bordered">
  <label class="item">
    <quasar-checkbox :model.sync="checkboxModel"></quasar-checkbox>
    <div class="item-content">
      Quasar Framework
    </div>
  </label>
  <label class="item">
    <quasar-checkbox :model.sync="checkboxModel"></quasar-checkbox>
    <div class="item-content">
      Quasar Framework
    </div>
  </label>
</div>
```

``` html
<!-- List with Toggles -->
<div class="list inner-delimiter bordered">
  <label class="item">
    <i>mail</i>
    <div class="item-content">
      <div class="item-label">Quasar Framework</div>
      <quasar-toggle :model.sync="toggleModel"></quasar-toggle>
    </div>
  </label>
  <label class="item">
    <i>mail</i>
    <div class="item-content">
      <div class="item-label">Quasar Framework</div>
      <quasar-toggle :model.sync="toggleModel"></quasar-toggle>
    </div>
  </label>
</div>

<div class="list inner-delimiter bordered">
  <label class="item">
    <quasar-toggle :model.sync="toggleModel"></quasar-toggle>
    <div class="item-content">
      Quasar Framework
    </div>
  </label>
  <label class="item">
    <quasar-toggle :model.sync="toggleModel"></quasar-toggle>
    <div class="item-content">
      Quasar Framework
    </div>
  </label>
</div>
```

``` html
<!-- List with Ranges -->
<div class="list item-delimiter bordered">
  <div class="item">
    <i>volume_up</i>
    <div class="item-content">
      <span class="item-value item-right-margin">1</span>
      <quasar-range :model.sync="rangeModel" :min="1" :max="10"></quasar-range>
      <span class="item-value item-left-margin">10</span>
      <div class="item-left-margin" style="font-weight: bold">{{rangeModel}}</div>
    </div>
  </div>
  <div class="item">
    <i class="item-right-margin">volume_down</i>
    <quasar-range :model.sync="rangeModel" :min="1" :max="10"></quasar-range>
    <i class="item-left-margin">volume_up</i>
  </div>
</div>
```
