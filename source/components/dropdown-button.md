title: Dropdown Button
---

QBtnDropdown is very convenient dropdown button. Goes very well with [QList](/components/lists-and-list-items.html)


## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: [
    'QBtnDropdown'
  ]
}
```

## Basic usage

Simple dropdown menu

```html
<q-btn-dropdown label="Button">
  <!-- dropdown content -->
  <q-list link>
    <q-item>
      <q-item-main>
        <q-item-tile label>Item</q-item-tile>
      </q-item-main>
    </q-item>
  </q-list>
</q-btn-dropdown>
```

Use the `split` prop to separate target areas for opening dropdown and triggering `@click` event

```html
<q-btn-dropdown split label="Button" @click="handlerFunction">
  <!-- dropdown content -->
  <q-list link>
    <q-item>
      <q-item-main>
        <q-item-tile label>Item</q-item-tile>
      </q-item-main>
    </q-item>
  </q-list>
</q-btn-dropdown>
```

## Vue Properties

All props except `split` are shared with [QBtn](/components/button.html)

| Vue Property | Type    | Description |
| ---          | ---     | --- |
| `split`      | Boolean | Use a split QBtnDropdown |
| `icon`       | String  | Name of the icon to use. |
| `icon-right` | String  | Name of the icon to place on right side of button. |
| `loader`     | Boolean | Display a spinner, if true. Can be optionally used along `v-model`. Check [Button with Progress](#Button-with-Progress) section. |
| `percentage` | Number | Optional property for displaying a determinate progress. Use along `loader`. |
| `dark-percentage` | Boolean | Optional property for displaying a determinate progress on a light button color. Use along `loader` and `percentage`. |
| `disable`    | Boolean | The button is disabled, if true. `@click` event won't be triggered while in this state. |
| `label`      | String/Number | Button label. |
| `tabindex`   | Number | Set explicit tab index. See [here](/components/material-ripples.html). |
| `repeat-timeout` | Number/Function | Sets delay and enables multiple `@click` events on click and hold. Function gets `repeated` (Number) parameter |
| `wait-for-ripple` | Boolean | Wait for ripple then before emitting `@click` event. Mat theme only. |

#### Apearance
| Vue Property | Type    | Description |
| ---          | ---     | --- |
| `size`       | String | Button size. One of `xs`, `sm`, `md`, `lg`, `xl`, or a css string size eg. `25px`, `2rem`, `3vw`. |
| `color`      | String  | A color from [Quasar Color Palette](/components/color-palette.html). |
| `text-color` | String  | A color from [Quasar Color Palette](/components/color-palette.html). |
| `align`      | String  | Label/Content alignment. One of `left`, `center`, `right`, `around`, `between`. |
| `dense`      | Boolean | Dense Button. |
| `round`      | Boolean | Set true, if you want a round button. |
| `outline`    | Boolean | Set true, if you want an outlined button. |
| `flat`       | Boolean | Set true, if you want a flat button. |
| `push`       | Boolean | Set true, if the button should have a push effect. |
| `rounded`    | Boolean | Set true, if the square button should have rounded corners. |
| `glossy`     | Boolean | Set true, if the button should be glossy. |
| `fab`        | Boolean | Floating Action Button. [See](/components/floating-action-button.html) |
| `fab-mini`   | Boolean | Smaller Floating Action Button. |
| `no-wrap`    | Boolean | Prevent text wrapping |
| `no-caps`    | Boolean | Set true, if you don't want button content/label to be transformed to uppercase letter on Material Theme. |
| `no-ripple`  | Boolean | Disable [Material Ripple](/components/material-ripples.html). Mat theme only. |



## Vue Events
| Vue Event | Description |
| --- | --- |
| `@click` | Triggered on button click/tap, if button is not disabled. |

## More examples

Complete example with [QList](/components/lists-and-list-items.html)

> Note the use of the `CloseOverlay` directive to close the dropdown on click. Don't forget to register it in `quasar.conf.js`

```html
<q-btn-dropdown
  color="primary"
  label="Dropdown"
>
  <q-list link>
    <q-item v-for="n in 2" :key="`1.${n}`" v-close-overlay @click.native="handlerFunction">
      <q-item-side icon="folder" inverted color="primary" />
      <q-item-main>
        <q-item-tile label>Photos</q-item-tile>
        <q-item-tile sublabel>February 22, 2016</q-item-tile>
      </q-item-main>
      <q-item-side right icon="info" color="amber" />
    </q-item>
    <q-item-separator inset />
    <q-list-header inset>Files</q-list-header>
    <q-item v-close-overlay @click.native="handlerFunction">
      <q-item-side icon="assignment" inverted color="secondary" />
      <q-item-main>
        <q-item-tile label>Vacation</q-item-tile>
        <q-item-tile sublabel>February 22, 2016</q-item-tile>
      </q-item-main>
      <q-item-side right icon="info" color="amber" />
    </q-item>
  </q-list>
</q-btn-dropdown>
```