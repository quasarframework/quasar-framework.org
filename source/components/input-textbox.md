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

### Error State
Add `has-error` CSS class:
``` html
<textarea class="has-error" v-model="model"></textarea>
```

## Modifiers for `v-model`

### `.lazy`

By default, `v-model` syncs the input with the data after each `input` event. You can add the `lazy` modifier to instead sync after `change` events:

``` html
<!-- synced after "change" instead of "input" -->
<input v-model.lazy="msg">
```

### `.number`

If you want user input to be automatically typecast as a number, you can add the `number` modifier to your `v-model` managed inputs:

``` html
<input v-model.number="age" type="number">
```

This is often useful, because even with `type="number"`, the value of HTML input elements always returns a string.

### `.trim`

If you want user input to be trimmed automatically, you can add the `trim` modifier to your `v-model` managed inputs:

```html
<input v-model.trim="msg">
```

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

> Note that "required" is mandatory. Don't think this will interfere with your validations. We're using Vue, so use something like Vuelidate instead of relying on the browser's form validations.

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
