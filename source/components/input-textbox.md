title: Quasar Input Textbox
---
<input type="hidden" data-fullpage-demo="form/text-input/textbox">

## Basic Usage
This is not a component per say. It's the HTML `<input>` element.

``` html
<input v-model="username">

<!-- With placeholder -->
<input v-model="username" placeholder="Type something">
```

Check next sections to see how you can use a stacked or floating label for it.

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `lazy` | Empty Attribute | Change model after input loses focus |
| `debounce` | Number | Change model with a debouncing timing |
| `disabled` | Boolean | Disables input. |

## Stacked Label

``` html
<div class="stacked-label">
  <input>
  <label>Stacked Label</label>
</div>
```

## Floating Label

``` html
<div class="floating-label">
  <input required class="full-width">
  <label>Floating Label</label>
</div>
```

## Inside of a List Usage

``` html
<div class="list">
  <div class="item two-lines">
    <i class="item-primary">edit</i>
    <div class="item-content">
      <input class="full-width">
    </div>
  </div>

  <hr>
  <div class="item two-lines">
    <i class="item-primary">edit</i>
    <div class="item-content">
      <input placeholder="Placeholder" class="full-width">
    </div>
  </div>

  <hr>
  <div class="item two-lines">
    <i class="item-primary">edit</i>
    <div class="item-content row items-center wrap">
      <div style="margin-right: 10px;" class="item-label">Label:</div>
      <input class="auto">
    </div>
  </div>

  <hr>
  <div class="item multiple-lines">
    <i class="item-primary">edit</i>
    <div class="item-content">
      <div class="stacked-label">
        <input class="full-width">
        <label>Stacked Label</label>
      </div>
    </div>
  </div>

  <hr>
  <div class="item multiple-lines">
    <i class="item-primary">edit</i>
    <div class="item-content">
      <div class="floating-label">
        <input required class="full-width">
        <label>Floating Label</label>
      </div>
    </div>
  </div>
</div>

<p class="caption">Textbox and Textarea with No Borders</p>
<div class="list">
  <div class="item multiple-lines item-delimiter">
    <div class="item-content">
      <!-- Notice "no-border" CSS class -->
      <input class="full-width no-border">
    </div>
  </div>
</div>
```
