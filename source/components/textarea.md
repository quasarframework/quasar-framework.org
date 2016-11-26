title: Textarea
---
<input type="hidden" data-fullpage-demo="form/text-input/textarea">

## Basic Usage
This is not a component per say. It's the HTML `<textarea>` element.

``` html
<textarea v-model="model"></textarea>

<!-- With placeholder -->
<textarea placeholder="Placeholder"></textarea>
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
<textarea v-model.lazy="msg"></textarea>
```

### `.number`

If you want user input to be automatically typecast as a number, you can add the `number` modifier to your `v-model` managed inputs:

``` html
<textarea v-model.number="age" type="number"></textarea>
```

This is often useful, because even with `type="number"`, the value of HTML input elements always returns a string.

### `.trim`

If you want user input to be trimmed automatically, you can add the `trim` modifier to your `v-model` managed inputs:

```html
<textarea v-model.trim="msg"></textarea>
```

## Stacked Label

``` html
<div class="stacked-label">
  <textarea class="full-width"></textarea>
  <label>Stacked Label</label>
</div>
```

## Floating Label

``` html
<div class="floating-label">
  <textarea required class="full-width"></textarea>
  <label>Floating Label</label>
</div>
```

## Inside of a List Usage

``` html
<div class="list">
  <div class="item multiple-lines">
    <i class="item-primary">edit</i>
    <div class="item-content">
      <textarea class="full-width"></textarea>
    </div>
  </div>

  <hr>
  <div class="item multiple-lines">
    <i class="item-primary">edit</i>
    <div class="item-content">
      <div style="margin-right: 10px;" class="item-label">Label:</div>
      <textarea class="full-width"></textarea>
    </div>
  </div>

  <hr>
  <div class="item multiple-lines">
    <i class="item-primary">edit</i>
    <div class="item-content">
      <div class="stacked-label">
        <textarea class="full-width"></textarea>
        <label>Stacked Label</label>
      </div>
    </div>
  </div>

  <hr>
  <div class="item multiple-lines">
    <i class="item-primary">edit</i>
    <div class="item-content">
      <div class="floating-label">
        <textarea required class="full-width"></textarea>
        <label>Floating Label</label>
      </div>
    </div>
  </div>
</div>

<p class="caption">Textbox and Textarea with No Borders</p>
<div class="list">
  <div class="item multiple-lines item-delimiter">
    <div class="item-content">
      <!-- Notice the "no-border" CSS class -->
      <textarea class="full-width no-border">
        Textarea here with no border and full width.
      </textarea>
    </div>
  </div>
</div>
```
