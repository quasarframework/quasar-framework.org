title: Button Group
---

You can conveniently group [QBtn](/components/button) and [QBtnDropdown](/components/button-dropdown) using QBtnGroup. Be sure to check those component's respective pages to see their props and methods.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: [
    'QBtnGroup',
    'QBtn', // if using q-btn
    'QBtnDropdown' // if using q-btn-dropdown
  ]
}
```

## Basic usage

Simple group of three buttons

```html
<q-btn-group>
  <q-btn label="One" @click="clicHandler1"/>
  <q-btn label="Two" @click="clicHandler2"/>
  <q-btn label="Three" @click="clicHandler3"/>
</q-btn-group>
```

Simple group of three push buttons

```html
<q-btn-group push>
  <q-btn push label="One" @click="clicHandler1" />
  <q-btn push label="Two" @click="clicHandler2" />
  <q-btn push label="Three" @click="clicHandler3" />
</q-btn-group>
```

Simple group of three outlined buttons

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

> You must use these props on both the parent QBtnGroup and the children QBtn/QBtnDropdown


## More examples

Simple group of three rounded buttons

```html
<q-btn-group rounded>
  <q-btn rounded label="One" @click="clicHandler1" />
  <q-btn rounded label="Two" @click="clicHandler2" />
  <q-btn rounded label="Three" @click="clicHandler3" />
</q-btn-group>
```

Simple group of three flat buttons

```html
<q-btn-group flat>
  <q-btn flat label="One" @click="clicHandler1" />
  <q-btn flat label="Two" @click="clicHandler2" />
  <q-btn flat label="Three" @click="clicHandler3" />
</q-btn-group>
```

Simple group of two ouline buttons and one ouline dropdown button

```html
<q-btn-group outline>
  <q-btn outline label="One" @click="clicHandler1" />
  <q-btn outline label="Two" @click="clicHandler2" />
  <q-btn-dropdown outline label="Three" split @click="clicHandler3">
    <!-- dropdown content goes here -->
    <q-list link>
      <q-item v-close-overlay @click.native="handler">
        <q-item-side icon="folder" inverted color="primary" />
        <q-item-main>
          <q-item-tile label>Photos</q-item-tile>
          <q-item-tile sublabel>February 22, 2016</q-item-tile>
        </q-item-main>
        <q-item-side right icon="info" color="amber" />
      </q-item>
      <q-item-separator inset />
      <q-list-header inset>Files</q-list-header>
      <q-item v-close-overlay @click.native="handler">
        <q-item-side icon="folder" inverted color="primary" />
        <q-item-main>
          <q-item-tile label>Photos</q-item-tile>
          <q-item-tile sublabel>February 22, 2016</q-item-tile>
        </q-item-main>
        <q-item-side right icon="info" color="amber" />
      </q-item>
    </q-list>
  </q-btn-dropdown>
</q-btn-group>
```