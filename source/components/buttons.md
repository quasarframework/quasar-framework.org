title: Buttons
---
Quasar button is as button with a few extra useful functions. `q-btn` has two shapes: rectangle (regular) and circular. When not disabled or spinning it will always emit a `click` event. The first argument of the click event is the original HTML event, and second argument is a function used when the spinning, to stop this.

When using spinning button it will have a spinning animation when the user clicks the button, and this will not stop until the `done()` function are called, that is given by the `click` event.

The button come in three sizes: small, medium (default) and big. As for the colors, use the ones from [Quasar CSS Color Palette](/api/css-color-palette.html). There are some more CSS classes that you can use to enhance the appearance of a button.

<input type="hidden" data-fullpage-demo="css/button">

For circular buttons only use icons as content.


## Basic Usage

Plain simple button

``` html
<q-btn icon='create'>New item</q-btn>
```

Small primary button

``` html
<q-btn icon='edit' class='primary small'>Edit</q-btn>

```

Primary button and spinning

```html
<!-- Regular shaped -->
<q-btn class="primary" @click="clickMethod">
  Button Label
</q-btn>

<!-- Circular shaped; only use icon as content -->
<q-btn  circular class="primary" @click="clickMethod">
  <i>alarm</i>
</q-btn>
```

and the example javascript function could be something like this

```javascript
    ...

    clickMethod( e, done ) {
        setTimeout( () => {
            done()
        }, 1000 )
    }
```

## Vue Properties
| Vue Property | Type    | Description                            |
| ---          | ---     | ---                                    |
| `disable`    | boolean | disabled on true                       |
| `spinner`    | boolean | make a spinner if true                 |
| `circular`   | boolean | set true if circular shape is required |
| `icon`       | string  | name of the icon to use                |
| `iconRight`  | string  | name of the right icon to user         |

## Vue Events
| Vue Event | Description               |
| ---       | ---                       |
| `click`   | Triggered on button click |

It is also possible to use the html buttons and quasar classes.

## more examples

When adding an icon to a regular button there are really two ways, where the default is left :

```html
<q-btn icon='mail' class="primary">
  Button Label
</q-btn>

<q-btn iconRight='mail' class="teal">
  Button Label
</q-btn>
```

## Button Sizes

Use `small` or `big` CSS classes. You don't need to specify `medium` because that's the default size.

```html
<q-btn class="primary small">
  Small Button
</q-btn>

<q-btn class="primary big">
  Big Button
</q-btn>
```

## Button Colors
Use the ones from [Quasar CSS Color Palette](/api/css-color-palette.html). Examples: `primary`, `orange`, `lime`.

```html
<q-btn class="primary">Primary Button</q-btn>
<q-btn class="amber">Amber Button</q-btn>
```

## More Button CSS Classes
There are also the `raised`, `clear`, `outline`, `push`, `bordered`, `round` and `glossy` CSS classes that you can use.

Make use of globally available `disabled`, `block` (sets CSS `display` property to `block`) or `full-width`.

## Progress Buttons
There's also a type of button that has its own Quasar Component named `<q-progress-button>`. Check documentation [here](/components/progress-button.html).
