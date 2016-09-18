title: Grid Component
---
Quasar Grid is a Vue Component which allows you to display data in a tabular manner. Best way to display a Grid is on a desktop so you might want to check that first.

<input type="hidden" data-fullpage-demo="web-components/grid">

## Basic Usage

``` html
<quasar-grid
  :columns="columns"
  :data="data"
  :rows-per-page="rowsPerPage"
  :selection-mode="selectionMode"
  :selection-actions="selectionActions"
  :sortable="sortable"
  id-property="unique_id"
></quasar-grid>
```

``` js
data () {
  return {
    data,
    rowsPerPage: 5,
    sortable: true,
    columns: [
      {
        label: 'Date',
        field: 'isodate',
        style: 'width: 100px',
        formatter (value) {
          return new Date(value).toLocaleString()
        }
      },
      {
        label: 'Source',
        field: 'source',
        style: 'width: 100px'
      },
      {
        label: 'Service',
        field: 'serviceable',
        formatter (value) {
          if (value === 'Informational') {
            return '<i>info</i>'
          }
          return value
        },
        style: 'color: green; width: 100px',
        classes: 'text-center'
      }
    ],
    selectionMode: 'single',
    selectionActions: [
      {
        label: 'View 1',
        handler (selectedRows) {
          console.dir(selectedRows)
        }
      },
      {
        label: 'View 2',
        handler (selectedRows) {
          console.dir(selectedRows)
        }
      }
    ]
  }
}
```

## Vue Properties

| Vue Property | Default Value | Description |
| --- | --- | --- | --- |
| `columns` | *none* | *(required)* Configure columns to be displayed. |
| `data` | *none* | *(required)*  Data to display on Grid. |
| `rows-per-page` | 5 | Self explanatory. Value "0" disables pagination. |
| `sortable` | true | Data can or cannot be sorted by columns. |
| `id-property` | *none* | Help improve rendering performance when each row has a unique id as property. The value must be the name of that property in your data Object/Array. |
| `selection-mode` | 'none' | No selection ('none'), single selection ('single') or multiple selection ('multiple'). |
| `selection-actions` | *none* | Array of Objects (with `label` and `handler` properties) from which the user can choose with his/her selection. |
| `no-data-label` | 'No data to display.' | String to display when there's no data or the selection is empty. |
