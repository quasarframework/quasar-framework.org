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

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `lazy` | Empty Attribute | Change model after textarea loses focus |
| `debounce` | Number | Change model with a debouncing timing |
| `disabled` | Boolean | Disables input. |

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
