title: Buttons
---
The Quasar button component is a button with a few extra useful features. For instance, `q-btn` comes in two shapes: rectangle (default) and circular.

The button component also comes with a spinner effect, for times when app execution may cause a delay, and you want to give the user some feedback about that delay. The button will display a spinning animation, when the user clicks the button, and this will not stop until the `done()` function is called, which is available through the `click` event.

 When not disabled or spinning, a button component will always emit a `click` event, as soon as it is clicked or tapped. The first argument of the click event is the original HTML event. The second argument is a function used to end the spinner effect.

The button comes in three different sizes: small, medium (default) and big. As for colors, all the colors available in the [Quasar CSS Color Palette](/api/css-color-palette.html) are at your disposal. There are some more CSS classes that you can use to enhance the appearance of a button too.

<input type="hidden" data-fullpage-demo="css/button">

**Note**
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
  <q-icon name="alarm"/>
</q-btn>
```

and an example JavaScript function could be something like this

``` js
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

It is also possible to use html buttons and Quasar classes.

## more examples

When adding an icon to a rectangular button, there are two possibilities for its position. The left position is the default. Use `iconRight` to position the icon to the right:

``` html
<q-btn icon='mail' class="primary">
  Button Label
</q-btn>

<q-btn iconRight='mail' class="teal">
  Button Label
</q-btn>
```

## Button Sizes

To set the size of a button, use the `small` or `big` CSS classes. You don't need to specify `medium`, as that's the default size.

``` html
<q-btn class="primary small">
  Small Button
</q-btn>

<q-btn class="primary big">
  Big Button
</q-btn>
```

## Button Colors
Use any color from the [Quasar CSS Color Palette](/api/css-color-palette.html). Examples: `primary`, `orange`, `lime`.

``` html
<q-btn class="primary">Primary Button</q-btn>
<q-btn class="amber">Amber Button</q-btn>
```

## More Button CSS Classes
There are also the `raised`, `clear`, `outline`, `push`, `bordered`, `round` and `glossy` CSS classes available for you to use.

Make use of globally available `disabled`, `block` (sets CSS `display` property to `block`) or `full-width`.

## Progress Buttons
There is also another type of button that has its own Quasar Component called `<q-progress-button>`. For reference, check [the q-progress-button documentation](/components/progress-button.html).
