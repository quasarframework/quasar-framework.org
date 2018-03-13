title: Chip
---

The Chip component is basically a simple UI block entity, representing for example more advanced underlying data, such as a contact, in a compact way.

Chips can contain entities such as an avatar, text or an icon, optionally having a pointer too. They can also be closed or removed if configured so.
<input type="hidden" data-fullpage-demo="other-components/chip">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QChip']
}
```

## Basic Usage

Some basic examples:

``` html
<!-- icon on left side -->
<q-chip icon="alarm" color="primary">
  q-chip
</q-chip>

<!-- icon on right side -->
<q-chip icon-right="alarm" color="primary">
  q-chip
</q-chip>

<!-- avatar on left side -->
<q-chip avatar="/statics/some.png" color="primary">
  q-chip
</q-chip>

<!-- floating chip applied to a button -->
<q-btn round dense color="dark" class="relative-position" icon="announcement">
  <q-chip floating color="red">1</q-chip>
</q-btn>
```

## Vue Properties
There are a number of properties available:

| Vue Property | Type | Description |
| --- | --- | --- |
| `floating` | Boolean | Allows the chip to float over other elements on top-right side of them. |
| `tag` | Boolean | Makes it a "tag" type. |
| `detail` | Boolean | Highlights the area on the right (icon or avatar), should there be one. |
| `icon` | String | Icon for left side. |
| `icon-right` | String | Icon for right side. |
| `avatar` | String | URL pointing to statics folder for an image which gets placed on left side. |
| `small` | Boolean | Reduces the size of the chip. Makes it compact. Use this or "dense", but not both. |
| `dense` | Boolean | Makes chip small, with minimum padding. Use this or "small", but not both. |
| `square` | Boolean | Gives the chip right-angled corners. Rounded corners are default. |
| `pointing` | String | Adds a carat to the chip, pointing either `up`, `right`, `down` or `left`.  |
| `color` | String | The color the chip should be. |
| `text-color` | String | Override the text color of the chip. |
| `closable` | Boolean | Adds a close button to the right of the chip, which when clicked, will emit `@close` event. |

## Vue Events
| Vue Property | Description |
| --- | --- |
| `@hide` | The close button has been clicked/tapped. |
| `@focus` | The chip has been focused. |
| `@click` | Chip has been clicked/tapped outside of close button. |

When using `closable` property a close button will be displayed on the right side. When clicking/tapping on the button the `@hide` event will be triggered. This does not removes the chip by itself. You will have to handle it yourself.

The two events fire independently but not both simultaneously, depending on where the user has clicked/tapped (on close button or anywhere else within the Chip).

## More Examples

You can add the ability to hide the chip too.
``` html
<q-chip closable color="red">
  Joe
</q-chip>
```

You can also use a chip to label a button. Notice the `relative-position` Quasar CSS class.
```html
<q-btn color="light" label="Inbox">
  <q-chip floating color="primary">22</q-chip>
</q-btn>
```

You can also use chips as pointing labels.
```html
<q-chip pointing="up" color="primary">
  Pointing Up
</q-chip>
```

You can create advanced label chips, with an avatar/image and a closeable button to delete the chip.
```html
<q-chip closable avatar="statics/some.png" color="red">
  Joe
</q-chip>
```

You can also create chips that look like tags.

```html
<q-chip tag color="secondary" icon-right="mail">
  New
</q-chip>
```

This chip highlights the icon by using the `detail` property.

```html
<q-chip tag color="secondary" detail icon="mail">
  10 emails
</q-chip>
```

One more example where we add a shadow to a chip:
```html
<q-chip class="shadow-1" square color="primary">10k</q-chip>
```
