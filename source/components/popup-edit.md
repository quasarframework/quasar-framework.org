title: Popup Edit
---
QPopupEdit is a component that can be used to edit a value "in place", like for example a cell in a QTable. By default, a cell is displayed as a String, then if you are using QPopupEdit and user clicks/taps on the table cell, a popup will open where user will be able to edit the value using a textfield.

This component injects a QPopover into its parent DOM element and enables the behavior described above, so it can be used anywhere, not only in QTable.
<input type="hidden" data-fullpage-demo="popups/popup-edit">

## Installation
*Quasar v0.17.10+*

Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QPopupEdit']
}
```

## Basic Usage
Below is an example with a QTable. Please note that we are using the "body" scoped slot. **QPopupEdit won't work with cell scoped slots.**
``` html
<q-table
  :data="data"
  :columns="columns"
  :filter="filter"
  :title="title"
  row-key="name"
>
  <q-tr slot="body" slot-scope="props" :props="props">
    <q-td key="desc" :props="props">
      {{ props.row.name }}
      <q-popup-edit v-model="props.row.name">
        <q-field count>
          <q-input v-model="props.row.name" />
        </q-field>
      </q-popup-edit>
    </q-td>
    <q-td key="calories" :props="props">
      {{ props.row.calories }}
      <q-popup-edit v-model="props.row.calories" title="Update calories" buttons>
        <q-input type="number" v-model="props.row.calories" />
      </q-popup-edit>
    </q-td>
    <q-td key="fat" :props="props">{{ props.row.fat }}</q-td>
    <q-td key="carbs" :props="props">{{ props.row.carbs }}</q-td>
    <q-td key="protein" :props="props">{{ props.row.protein }}</q-td>
    <q-td key="sodium" :props="props">{{ props.row.sodium }}</q-td>
    <q-td key="calcium" :props="props">{{ props.row.calcium }}</q-td>
    <q-td key="iron" :props="props">{{ props.row.iron }}</q-td>
  </q-tr>
</q-table>
```

## Vue Properties
Supports `v-model` which should be bound to a String or Number (depending on `type` property used) in your scope.

| Vue Property | Type | Description |
| --- | --- | --- |
| `title` | String | (Optional) Title to display |
| `buttons` | Boolean | (Optional) Show Set & Cancel buttons |
| `label-set` | String | Override label for "Set" button |
| `label-cancel` | String | Override label for "Cancel" button |
| `color` | String | One from [Quasar Color Palette](/components/color-palette.html) to apply for inner input and buttons |
| `validate(val)` | Function | Function to determine if input is correct, and in such case the value is saved, otherwise the edit is cancelled |
| `persistent` | Boolean | Do not close popup if clicking outside of it |
| `disable` | Boolean | Disable popup |

## Vue Events

| Vue Method | Description |
| --- | --- |
| `@show` | Triggered after opening popup. |
| `@hide` | Triggered after closing popup. |
| `@save(val, initialValue)` | Edit is successful and the value gets saved |
| `@cancel(val, initialValue)` | Edit has been cancelled and the value gets reverted to its original form |

