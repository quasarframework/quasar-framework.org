title: Quasar Input Textbox
---
<input type="hidden" data-fullpage-demo="form/text-input/textbox">

## Basic Usage

``` html
<input v-model="username">
```

Vue DOM attribute properties you can use:

| Param Attributes | Type | Description |
| --- | --- | --- |
| `lazy` | Empty Attribute | Change model after Web Component loses focus |
| `debounce` | Number | Change model with a debouncing timing |

## Fixed Label Usage

``` html
<div class="list inner-delimiter bordered">
  <div class="list-header">Fixed</div>
  <div class="item fixed-label">
    <div class="item-content">
      <label for="user1" class="item-label">Username</label>
      <input id="user1" v-model="username">
    </div>
  </div>
  <div class="item fixed-label">
    <div class="item-content">
      <label for="pass1" class="item-label">Password</label>
      <input id="pass1" v-model="password" type="password">
    </div>
  </div>
</div>
```

## Floating Label Usage

``` html
<div class="list inner-delimiter bordered">
  <div class="list-header">Floating</div>
  <div class="item floating-label">
    <div class="item-content">
      <input v-model="username" required>
      <label>Username</label>
    </div>
  </div>
  <div class="item floating-label">
    <div class="item-content">
      <input v-model="password" type="password" required>
      <label>Password</label>
    </div>
  </div>
</div>
```

## Inline Label Usage

``` html
<div class="list inner-delimiter bordered">
  <div class="list-header">Inline</div>
  <div class="item inline-label">
    <label class="item-content">
      Username
      <input v-model="username">
    </label>
  </div>
  <div class="item inline-label">
    <label class="item-content">
      Password
      <input v-model="password" type="password">
    </label>
  </div>
</div>
```

## Placeholder Usage

``` html
<div class="list inner-delimiter bordered">
  <div class="list-header">Placeholder</div>
  <div class="item">
    <div class="item-content">
      <input v-model="username" placeholder="Username">
    </div>
  </div>
  <div class="item">
    <div class="item-content">
      <input v-model="password" type="password" placeholder="Password">
    </div>
  </div>
</div>
```

## Stacked Usage

``` html
<div class="list inner-delimiter bordered">
  <div class="list-header">Stacked</div>
  <div class="item stacked-label">
    <div class="item-content">
      <input id="user4" v-model="username" required>
      <label for="user4">Username</label>
    </div>
  </div>
  <div class="item stacked-label">
    <div class="item-content">
      <input id="pass4" v-model="password" type="password" required>
      <label for="pass4">Password</label>
    </div>
  </div>
</div>
```
