title: Button Group
---
You can conveniently group [QBtn](/components/button.html) and [QBtnDropdown](/components/button-dropdown.html) using QBtnGroup. Be sure to check those component's respective pages to see their props and methods.
<input type="hidden" data-fullpage-demo="buttons/btn-group">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: [
    'QBtnGroup',
    'QBtn',        // if using QBtn
    'QBtnDropdown' // if using QBtnDropdown
  ]
}
```

## Basic usage
Simple group of three buttons:
```html
<q-btn-group>
  <q-btn label="One" @click="clickHandler1"/>
  <q-btn label="Two" @click="clickHandler2"/>
  <q-btn label="Three" @click="clickHandler3"/>
</q-btn-group>
```

Simple group of three push buttons:
```html
<q-btn-group push>
  <q-btn push label="One" @click="clickHandler1" />
  <q-btn push label="Two" @click="clickHandler2" />
  <q-btn push label="Three" @click="clickHandler3" />
</q-btn-group>
```

Simple group of three outlined buttons:
```html
<q-btn-group outline>
  <q-btn outline label="One" @click="clicHandler1" />
  <q-btn outline label="Two" @click="clicHandler2" />
  <q-btn outline label="Three" @click="clicHandler3" />
</q-btn-group>
```

## Vue Properties

| Vue Property | Type    | Description |
| ---          | ---     | --- |
| `outline`    | Boolean | Set true, if you want an outlined button. |
| `flat`       | Boolean | Set true, if you want a flat button. |
| `push`       | Boolean | Set true, if the button should have a push effect. |
| `rounded`    | Boolean | Set true, if the square button should have rounded corners. |

> You must use these props on both the parent QBtnGroup and the children QBtn/QBtnDropdown.


## More examples
Simple group of three rounded buttons
```html
<q-btn-group rounded>
  <q-btn rounded label="One" @click="clickHandler1" />
  <q-btn rounded label="Two" @click="clickHandler2" />
  <q-btn rounded label="Three" @click="clickHandler3" />
</q-btn-group>
```

Simple group of three flat buttons
```html
<q-btn-group flat>
  <q-btn flat label="One" @click="clickHandler1" />
  <q-btn flat label="Two" @click="clickHandler2" />
  <q-btn flat label="Three" @click="clickHandler3" />
</q-btn-group>
```

Simple group of two rounded buttons and one rounded dropdown button:
> Note the use of the `v-close-overlay` directive to close the dropdown on click. Don't forget to register it in `quasar.conf.js`:<br>
> `directives: ['CloseOverlay'],`
```html
<q-btn-group rounded>
  <q-btn rounded color="primary" label="One" />
  <q-btn rounded color="primary" label="Two" />
  <q-btn-dropdown rounded color="primary" label="Three" split>
    <!-- dropdown content goes here -->
    <q-list link>
      <q-item v-close-overlay>
        <q-item-side icon="folder" inverted color="primary" />
        <q-item-main>
          <q-item-tile label>Photos</q-item-tile>
          <q-item-tile sublabel>February 22, 2016</q-item-tile>
        </q-item-main>
        <q-item-side right icon="info" color="amber" />
      </q-item>
      <q-item-separator inset />
      <q-list-header inset>Files</q-list-header>
      <q-item v-close-overlay>
        <q-item-side icon="assignment" inverted />
        <q-item-main>
          <q-item-tile label>Vacation</q-item-tile>
          <q-item-tile sublabel>February 22, 2016</q-item-tile>
        </q-item-main>
        <q-item-side right icon="info" color="amber" />
      </q-item>
    </q-list>
  </q-btn-dropdown>
</q-btn-group>
```
