title: Chip
---

The Quasar Chip component is basically a simple UI block entity, which represents more advanced underlying data. Quasar chips can also be used as labels too.

The chip component has a number of features, like the ability to be closed or removed and the ability to add an image or an icon. 

A good example of using chips is to show "contact" chips in the `To:` area of an email form, with a picture of the user and their name, instead of just the text of an email address. 

<!-- Todo! Usually touching or clicking on (or hovering over) a chip will show the full details behind the data the chip represents. For instance, if the chip is showing a contact, then the full details or a list of partial details could be shown to the user for information or selection. This kind of feature, however, is left up to userland to create, as there are many, many possibilities. Chips can be used for any abbreviated visual representation of any kind of data. --> 

<input type="hidden" data-fullpage-demo="components/chip">

## Basic Usage

Below is a simple chip with an icon. Notice you can `slot` the icon to the left.

``` html
<q-chip class="bg-primary text-white">
  <q-icon name="alarm" slot="left" />
  q-chip
</q-chip>
```

If you'd like the icon on the right, you can use CSS to do this.

``` html
<q-chip class="bg-tertiary text-white">
  10
  <q-icon class="on-right" name="mail" />
</q-chip>
```

## Vue Properties
There are a number of properties available:

| Vue Property | Type | Description |
| --- | --- | --- |
|`small` | Boolean | Reduces the size of the chip. |
|`tag` | Boolean |  |
|`outline` | Boolean | Creates a chip with only an outlined edge. |
|`square` | Boolean | Gives the chip right-angled corners. Rounded corners are default. |
|`floating` | Boolean | Allows the chip to float over other elements. |
|`pointing` | String | Adds a carat to the chip, pointing either `up`, `right`, `down` or `up`.  |
| `color` | String | The color the chip should be. | 
|`closable` | Boolean | Adds a close button to the right of the chip, which when clicked, will remove the chip. |
|`detail` | Boolean | Highlights the area of the icon, should there be one. |

## More Uses

You can add the ability to close the chip too.

``` html
<q-chip closable class="bg-red text-white">
  <img slot="left" src="~assets/boy-avatar.png">Joe
</q-chip>
```
You can also use a chip to label a button.

```html
<q-btn class="light relative-position">
  Inbox
  <q-chip label floating  class="bg-primary text-white">22</q-chip>
</q-btn>
```

You can also use chips as pointing labels.

```html
  <q-chip pointing="up" class="pointing-up bg-primary text-white">
    Pointing Up
  </q-chip>
```

You can create advanced label chips, with an avatar/ image and a closeable button to delete the chip. 

```html
  <q-chip closable color="light" class="text-black">
    <img slot="left" src="~assets/boy-avatar.png">John
  </q-chip>
```

You can also create chips that look like tags.

```html
<q-chip tag color="light" class="text-black">
  New <q-icon class="on-right" name="mail" />
</q-chip>
```

## CSS

Much like [the button component](/components/buttons.html), you can add other CSS styling attribute to chips too. Below is an example of a chip, but with shadowing.

```html
<q-chip square class="bg-secondary text-white shadow-1">10k</q-chip>
```

For more on styling elements, please refer to [the JavaScript and CSS API section](/api).  


 