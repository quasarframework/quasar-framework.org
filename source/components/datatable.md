title: Data Table
---
QTable is a Component that allows you to display data in a tabular manner. Features:
  * Filtering
  * Sorting
  * Single / Multiple rows selection with custom selection actions
  * Pagination (including server-side if required)
  * Total customization of rows and cells through scoped slots
  * Ability to add additional row(s) at top or bottom of data rows
  * Column picker (through QTableColumns component described in one of the sections)
  * Custom top and/or bottom Table controls
  * Responsive design ("dense" mode for narrow windows)
<input type="hidden" data-fullpage-demo="grouping/table/table-features" data-source="grouping/table">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: [
    'QTable',

    // pick only what you are using from:
    'QTh',
    'QTr',
    'QTd',
    'QTableColumns'
  ]
}
```

## Basic Usage
This is the most basic QTable:
``` html
<template>
  <q-table
    title="Table Title"
    :data="tableData"
    :columns="columns"
    row-key="name"
  />
</template>

<script>
export default {
  data: () => ({
    columns: [
      {
        name: 'desc',
        required: true,
        label: 'Dessert (100g serving)',
        align: 'left',
        field: 'name',
        sortable: true,
        classes: 'my-class',
        style: 'width: 500px'
      },
      ...
    ],
    tableData: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
      },
      ...
    ]
  })
}
</script>
```

## Internationalization
The default values of the different QTable labels are taken care of by default through [Quasar I18n](/components/internationalization.html). If your desired language pack is missing, please provide a PR for it.

## QTable Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `grid` | Boolean | (v0.17+) Use "grid mode". See example below. |
| `data` | Array of Objects | Data containing Array of rows to display. |
| `columns` | Array of Objects | (**Required**) Defining each column's properties. |
| `row-key` | String | (**Required**) Property name of each row defining a unique **data** key for the respective rows. |
| `pagination` | Object | **Use with .sync**. Control of the pagination and sorting. Can enable Table "server-mode" by containing `rowsNumber` property. See next sections for details. |
| `rows-per-page-options` | Array | Array of Numbers representing options for user to select how many rows per page should be shown. Example: '[3, 5, 7, 0]'. Notice value 0 means "All" and empty array hides the selection. |
| `selection` | String | Set selection mode. One of 'single', 'multiple' or (default) 'none'. |
| `selected` | Array | **Use with .sync**. Array of unique keys for selected row(s). |
| `visible-columns` | Array | Array of Strings containing the 'name' column property value of the visible columns. |
| `loading` | Boolean | Show a background process is in progress (like fetching data and so on). |
| `color` | String | Color of the default Table controls (pagination, checkboxes, ...). |
| `dark` | Boolean | When using Table on a dark background. |
| `dense` | Boolean | Dense Table, when you want to display more data using the same real estate on window. Gets activated by default on narrow windows. |
| `title` | String | Title of Table. |
| `hide-header` | Boolean | Hide Table header. |
| `hide-bottom` | Boolean | Hide Table bottom (usually containing pagination controls). |
| `separator` | String | Sets separator for rows/columns/cell. One of 'horizontal', 'vertical', 'cell', 'none'. |
| `table-style` | String/Array/Object | Style for the `<table>` tag itself. |
| `table-class` | String/Array/Object | Classes for the `<table>` tag itself. |
| `filter` | String | Filter String for Table used by `filter-method()`. |
| `filter-method` | Function | When you want a custom filtering method. See next sections for details. |
| `sort-method` | Function | When you want a custom sorting method. See next sections for details. |
| `binary-state-sort` | Boolean | (v0.17.11+) By default, sorting a column has 3 states (no sort, ascending, descending). By using this property it only allows 2 states (ascending, descending). |

Label properties are by default defined in Quasar's i18n, but you can override them:

| Vue Property | Type | Description |
| --- | --- | --- |
| `no-data-label` | String | Message to display when no rows are available. |
| `no-results-label` | String | Message to display when no rows match the filter. |
| `loading-label` | String | Message to display when Table currently has no rows but is in the process of fetching them. |
| `selected-rows-label(rowsNumber)` | Function | Function that returns a message (String) to display how many rows are selected. Takes a Number parameter which is the actual rows number that are selected. |
| `rows-per-page-label` | String | Override 'Rows per page:' message. |
| `pagination-label(start,end,total)` | Function | Override default 'x-y of z' pagination label. |

> **IMPORTANT**
> Initial sorted column, sorting direction & page is configured through the `pagination` prop. Check the Pagination section below.

## QTableColumns Vue Properties

Supports `v-model` which should be the String for single selection and Array for multiple selection.

| Vue Property | Type | Description |
| --- | --- | --- |
| `columns` | Array of Objects | (**Required**) Defining each column's properties. |
| `label` | String | Overrides text displayed in input frame. See "Working with Display Value" section below. |
| `color` | String | One from [Quasar Color Palette](/components/color-palette.html). |
| `dark` | Boolean | Is it rendered on a dark background? |

### Defining the Columns
Let's take an example of configuring the `columns` property. Let's assume we are telling QTable that row-key is 'name'.
```js
columns: /* array of Objects */ [
  // column Object definition
  {
    // unique id (used by row-key, pagination.sortBy, ...)
    name: 'desc',

    // label for header
    label: 'Dessert (100g serving)',

    // row Object property to determine value for this column
    field: 'name',
    // OR field: row => row.some.nested.prop

    // (optional) if we use visible-columns, this col will always be visible
    required: true,

    // (optional) alignment
    align: 'left',

    // (optional) tell QTable you want this column sortable
    sortable: true,

    // (optional) compare function if you have
    // some custom data or want a specific way to compare two rows
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
    // function return value:
    //   * is less than 0 then sort a to an index lower than b, i.e. a comes first
    //   * is 0 then leave a and b unchanged with respect to each other, but sorted with respect to all different elements
    //   * is greater than 0 then sort b to an index lower than a, i.e. b comes first

    // (optional) you can format the data with a function
    format: val => `${val}%`

    // v0.17.9+; if using scoped slots, apply this yourself instead
    style: 'width: 500px',
    classes: 'my-special-class'
  },
  { name: 'calories', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
  { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
  { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]
```
> **IMPORTANT**
If your data is nested and you need to fill a column with a certain value in the nested objects, you can grab a property value within the nested objects like so: `field: obj => obj.some.nested.prop`

### Pagination
When you want to control Table's pagination, use `pagination` prop, but don't forget to add the `.sync` modifier:

```html
<template>
  <div>
    <q-table :pagination.sync="pagination" ... />
    <q-btn @click="pagination.page++" label="Next page" ... />
  </div>
</template>

<script>
export default {
  data: () => ({
    pagination: {
      sortBy: null, // String, column "name" property value
      descending: false,
      page: 1,
      rowsPerPage: 5 // current rows per page being displayed
    }
  })
}
```

> When pagination has a property named `rowsNumber`, then this means that you'll be configuring Table for server-side pagination (& sorting & filtering).

### Custom Filter Method
```html
<template>
  <q-table
    :filter="terms"
    :filter-method="myFilter"
    ...
</template>

<script>
export default {
  data: () => ({ filter: '' }),
  methods: {
    // this is actually the default filtering method:
    myFilter (rows, terms, cols, cellValue) {
      const lowerTerms = terms ? terms.toLowerCase() : ''
      return rows.filter(
        row => cols.some(col => (cellValue(col, row) + '').toLowerCase().indexOf(lowerTerms) !== -1)
      )
    }
  }
}
</script>
```

### Custom Sort Method
```html
<template>
  <q-table
    :sort-method="mySort"
    ...
</template>

<script>
export default {
  methods: {
    // this is actually the default filtering method:
    mySort (data, sortBy, descending) {
      const col = this.computedCols.find(def => def.name === sortBy)
      if (col === null || col.field === void 0) {
        return data
      }

      const
        dir = descending ? -1 : 1,
        val = typeof col.field === 'function'
          ? v => col.field(v)
          : v => v[col.field]

      return data.sort((a, b) => {
        let
          A = val(a),
          B = val(b)

        if (A === null || A === void 0) {
          return -1 * dir
        }
        if (B === null || B === void 0) {
          return 1 * dir
        }
        if (col.sort) {
          return col.sort(A, B) * dir
        }
        if (isNumber(A) && isNumber(B)) {
          return (A - B) * dir
        }
        if (isDate(A) && isDate(B)) {
          return sortDate(A, B) * dir
        }
        if (typeof A === 'boolean' && typeof B === 'boolean') {
          return (a - b) * dir
        }

        [A, B] = [A, B].map(s => (s + '').toLowerCase())

        return A < B
          ? -1 * dir
          : (A === B ? 0 : dir)
      })
    }
  }
}
</script>
```

### Popup Edit
*Quasar v0.17.10+*

Below is an example with the user being able to edit "in place" with the help of [QPopupEdit](/components/popup-edit.html) component. Please note that we are using the "body" scoped slot. **QPopupEdit won't work with cell scoped slots.**
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

### QTable Vue Events
| Vue Event | Parameters | Description |
| --- | --- | --- |
| `@request` | Object { pagination, filter, getCellValue } | Gets triggered when using server-side pagination (`pagination` property Object contains `rowsNumber`) |
| `@fullscreen` | Boolean (`true`/`false`) | (v0.17.7+) Emitted when Fullscreen state gets toggled. |

## Server-side Pagination, Filtering, Sorting
When your database contains a big number of rows for a Table, obviously it's not feasible to load them all for multiple reasons (memory, UI rendering performance, ...). Instead, you can load only a Table page. Whenever the user wants to navigate to another Table page, or wants to sort by a column or wants to filter the Table, a request is sent to the server to fetch the partial data.

1. First step to enable this behavior is to specify `pagination` prop, which MUST contain `rowsNumber`. QTable needs to know the total number of rows available in order to correctly render the pagination links.

2. Second step is to listen for `@request` event on QTable. This event is triggered when data needs to be fetched from the server because either page number or sorting or filtering changed.

3. It's best that you also specify the `loading` prop in order to notify the user that a background process is in progress.

```html
<template>
  <q-table
    ref="table"
    :data="serverData"
    :columns="columns"
    :filter="filter"
    row-key="name"
    :pagination.sync="serverPagination"
    :loading="loading"
    @request="request"
  >
    <template slot="top-right" slot-scope="props">
      <q-search hide-underline v-model="filter" />
    </template>
  </q-table>
</template>

<script>
import tableData from 'assets/table-data'

export default {
  data () {
    return {
      filter: '',
      loading: false,
      serverPagination: {
        page: 1,
        rowsNumber: 10 // specifying this determines pagination is server-side
      },

      serverData: [],
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: 'name',
          sortable: true
        },
        { name: 'calories', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ]
    }
  },
  methods: {
    request ({ pagination, filter }) {
      // we set QTable to "loading" state
      this.loading = true

      // we do the server data fetch, based on pagination and filter received
      // (using Axios here, but can be anything; parameters vary based on backend implementation)

      axios
      .get(`/data/${pagination.page}?sortBy=${pagination.sortBy}&descending=${pagination.descending}&filter=${filter}`)
      .then(({ data }) => {
        // updating pagination to reflect in the UI
        this.serverPagination = pagination

        // we also set (or update) rowsNumber
        this.serverPagination.rowsNumber = data.rowsNumber

        // then we update the rows with the fetched ones
        this.serverData = data.rows

        // finally we tell QTable to exit the "loading" state
        this.loading = false
      })
      .catch(error => {
        // there's an error... do SOMETHING

        // we tell QTable to exit the "loading" state
        this.loading = false
      })
    }
  },
  mounted () {
    // once mounted, we need to trigger the initial server data fetch
    this.request({
      pagination: this.serverPagination,
      filter: this.filter
    })
  }
}
</script>
```

## Examples - Features

### Filter, Column selection, Separators, Toggle Fullscreen
```html
<template>
  <q-table
    :data="tableData"
    :columns="columns"
    :filter="filter"
    :visible-columns="visibleColumns"
    :separator="separator"
    row-key="name"
    color="secondary"
  >
    <template slot="top-left" slot-scope="props">
      <q-search
        hide-underline
        color="secondary"
        v-model="filter"
        class="col-6"
      />
    </template>
    <template slot="top-right" slot-scope="props">
      <q-table-columns
        color="secondary"
        class="q-mr-sm"
        v-model="visibleColumns"
        :columns="columns"
      />
      <q-select
        color="secondary"
        v-model="separator"
        :options="[
          { label: 'Horizontal', value: 'horizontal' },
          { label: 'Vertical', value: 'vertical' },
          { label: 'Cell', value: 'cell' },
          { label: 'None', value: 'none' }
        ]"
        hide-underline
      />
      <q-btn
        flat round dense
        :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
        @click="props.toggleFullscreen"
      />
    </template>
  </q-table>
</template>

<script>
export default {
  data: () => ({
    tableData: [ ... ],
    columns: [ ... ],
    visibleColumns: ['desc', 'fat', 'carbs', 'protein', 'sodium', 'calcium', 'iron'],
    separator: 'horizontal',
    filter: ''
  })
}
</script>
```

### Grid Mode
*Requires Quasar v0.17+*

Notice we'll be using a Vue scoped slot called `item` to define how each record (the equivalent of a row in non-grid mode) should look. This allows you total freedom.

The code below is the equivalent of the demo. Feel free to tweak however you want as all the QTable features are available in grid mode too. In the example below, we hide the header, but you can show it should you want -- the user will be able to sort the data by columns etc.

```html
<q-table
  grid
  hide-header
  :data="data"
  :columns="columns"
  :filter="filter"
  :selection="selection"
  :selected.sync="selected"
  :visible-columns="visibleColumns"
  row-key="name"
>
  <template slot="top-right" slot-scope="props">
    <q-search hide-underline v-model="filter" />
  </template>

  <div
    slot="item"
    slot-scope="props"
    class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 transition-generic"
    :style="props.selected ? 'transform: scale(0.95);' : ''"
  >
    <q-card class="transition-generic" :class="props.selected ? 'bg-grey-2' : ''">
      <q-card-title class="relative-position">
        <q-checkbox v-model="props.selected" :label="props.row.name" />
      </q-card-title>
      <q-card-separator />
      <q-card-main class="q-pa-none">
        <q-list no-border>
          <q-item v-for="col in props.cols.filter(col => col.name !== 'desc')" :key="col.name">
            <q-item-main>
              <q-item-tile label>{{ col.label }}</q-item-tile>
            </q-item-main>
            <q-item-side right>
              <q-item-tile>{{ col.value }}</q-item-tile>
            </q-item-side>
          </q-item>
        </q-list>
      </q-card-main>
    </q-card>
  </div>
</q-table>
```

### Row selection, Extra top/bottom rows, Loading state
```html
<template>
  <q-table
    :data="tableData"
    :columns="columns"
    :selection="selection"
    :selected.sync="selected"
    :loading="loading"
    row-key="name"
    color="secondary"
    :class="tableClass"
  >
    <q-tr slot="top-row" slot-scope="props">
      <q-td colspan="100%">
        <strong>Extra top row</strong>
      </q-td>
    </q-tr>

    <q-tr slot="bottom-row" slot-scope="props">
      <q-td colspan="100%">
        <strong>Extra bottom row</strong>
      </q-td>
    </q-tr>

    <template slot="top-left" slot-scope="props">
      <q-select
        v-model="selection"
        stack-label="Selection"
        hide-underline
        :options="[
          { label: 'Single', value: 'single' },
          { label: 'Multiple', value: 'multiple' },
          { label: 'None', value: 'none' }
        ]"
        color="secondary"
        style="min-width: 100px"
      />
    </template>
    <div slot="top-right" slot-scope="props" class="column">
      <q-toggle
        v-model="loading"
        label="Loading state"
        color="secondary"
        class="q-mb-sm"
      />
      <q-toggle
        v-model="dark"
        label="On dark background"
        color="secondary"
      />
    </div>
  </q-table>
</template>

<script>
export default {
  data: () => ({
    tableData: [ ... ],
    columns: [ ... ],
    loading: false,
    dark: true,
    selection: 'multiple',
    selected: [
      // initial selection; notice we specify the
      // row-key prop of the selected row
      { name: 'Ice cream sandwich' }
    ]
  })
}
</script>
```

### Controlling pagination, custom controls & watching for page navigation
```html
<template>
  <q-table
    :data="tableData"
    :columns="columns"
    :pagination.sync="paginationControl"
    row-key="name"
    color="primary"
  >
    <div slot="pagination" slot-scope="props" class="row flex-center q-py-sm">
      <q-btn
        round dense size="sm" icon="undo" color="secondary" class="q-mr-sm"
        :disable="props.isFirstPage"
        @click="props.prevPage"
      />
      <div class="q-mr-sm" style="font-size: small">
        Page {{ props.pagination.page }} / {{ props.pagesNumber }}
      </div>
      <q-btn
        round dense size="sm" icon="redo" color="secondary"
        :disable="props.isLastPage"
        @click="props.nextPage"
      />
    </div>
  </q-table>
</template>

<script>
export default {
  data: () => ({
    tableData: [ ... ],
    columns: [ ... ],
    paginationControl: { rowsPerPage: 3, page: 1 },
  }),
  watch: {
    'paginationControl.page' (page) {
      this.$q.notify({
        color: 'secondary',
        message: `Navigated to page ${page}`,
        actions: page < 4
          ? [{
            label: 'Go to last page',
            handler: () => {
              this.paginationControl.page = 4
            }
          }]
          : null
      })
    }
  }
}
</script>
```

### Row selection actions
```html
<q-table
  :data="tableData"
  :columns="columns"
  selection="multiple"
  :selected.sync="selectedSecond"
  row-key="name"
  color="secondary"
  title="Select some rows"
>
  <!-- gets displayed only when there's at least one row selected -->
  <template slot="top-selection" slot-scope="props">
    <q-btn color="secondary" flat label="Action 1" class="q-mr-sm" />
    <q-btn color="secondary" flat label="Action 2" />
    <div class="col" />
    <q-btn color="negative" flat round delete icon="delete" @click="deleteRow" />
  </template>
</q-table>
```

### Hide header & bottom
```html
<q-table
  :data="tableData"
  :columns="columns"
  :pagination="{rowsPerPage: 0}"
  row-key="name"
  color="primary"
  hide-header
  hide-bottom
/>
```
By hiding the bottom the pagination is not shown anymore. To ensure that all rows are displayed at once, the default row limitation should be deactivated by using the `pagination` property as shown in the example.

### Display a nested property or format a column
You can display the value of a nested property. For example:
```js
columns: [
  {
    name: 'author',
    label: 'Author',
    field: row => row.author.name
  }
]
```

Then you can go even further and format the value for a specific column in your column definition. Example:
```js
columns: [
  {
    name: 'author',
    label: 'Author',
    field: row => row.author.name,
    format: val => `${val}%`
  }
]
```

The value returned by `field` is used for sorting rows, while the `format` value is specifically meant for displaying a value to the user. This is very useful for cases where you need to sort by the initial value of your data. You can (if you want to), however, avoid the `format` and use custom scoped slots (row, column cell) for defining how Quasar should format the cell(s).

## Examples - Customization

### Custom table top & bottom
```html
<q-table
  :data="tableData"
  :columns="columns"
  row-key="name"
  color="primary"
>
  <div slot="top" slot-scope="props" class="row flex-center fit">
    <img src="~assets/quasar-logo-full.svg">
  </div>
  <div slot="bottom" slot-scope="props" class="row flex-center fit">
    <q-btn
      round dense icon="chevron_left" color="primary" class="q-mr-md"
      :disable="props.isFirstPage"
      @click="props.prevPage"
    />
    <q-btn
      round dense icon="chevron_right" color="primary"
      :disable="props.isLastPage"
      @click="props.nextPage"
    />
  </div>
</q-table>
```

### Custom column cell
```html
<q-table
  :data="tableData"
  :columns="columns"
  row-key="name"
  color="secondary"
>
  <!-- slot name syntax: body-cell-<column_name> -->
  <q-td slot="body-cell-desc" slot-scope="props" :props="props">
    <q-chip small color="secondary">{{ props.value }}</q-chip>
  </q-td>
</q-table>
```

### Custom rows
```html
<q-table
  :data="tableData"
  :columns="columns"
  row-key="name"
>
  <q-tr slot="body" slot-scope="props" :props="props">
    <q-td key="desc" :props="props">
      <span class="text-italic">{{ props.row.name }}</span>
      <q-tooltip>I'd like to eat "{{ props.row.name }}"</q-tooltip>
    </q-td>
    <q-td key="calories" :props="props">
      <div class="row items-center justify-between no-wrap">
        <q-btn size="sm" round dense color="secondary" icon="remove" @click="props.row.calories--" class="q-mr-xs" />
        <q-btn size="sm" round dense color="tertiary" icon="add" @click="props.row.calories++" class="q-mr-sm" />
        <div>{{ props.row.calories }}</div>
      </div>
    </q-td>
    <q-td key="fat" :props="props">{{ props.row.fat }}</q-td>
    <q-td key="carbs" :props="props">
      <q-chip small square color="amber">{{ props.row.carbs }}</q-chip>
    </q-td>
    <q-td key="protein" :props="props">{{ props.row.protein }}</q-td>
    <q-td key="sodium" :props="props">{{ props.row.sodium }}</q-td>
    <q-td key="calcium" :props="props">{{ props.row.calcium }}</q-td>
    <q-td key="iron" :props="props">
      {{ props.row.iron }}
    </q-td>
  </q-tr>
</q-table>
```

### Alternative custom rows
```html
<q-table
  :data="tableData"
  :columns="columns"
  title="Click on a row"
  dark
  class="bg-black"
  color="amber"
  row-key="name"
>
  <q-tr slot="body" slot-scope="props" :props="props" @click.native="rowClick(props.row)" class="cursor-pointer">
    <q-td v-for="col in props.cols" :key="col.name" :props="props">
      # {{ col.value }} #
    </q-td>
  </q-tr>
</q-table>
```

### Custom header (has tooltips)
```html
<q-table
  :data="tableData"
  :columns="columns"
  row-key="name"
>
  <tr slot="header" slot-scope="props">
    <q-th key="desc" :props="props">
      Dessert
      <q-tooltip>Pick a desert</q-tooltip>
    </q-th>
    <q-th key="calories" :props="props">
      Calories
      <q-tooltip>These are the calories</q-tooltip>
    </q-th>
    <q-th key="fat" :props="props">
      Fat
      <q-tooltip>This is the fat</q-tooltip>
    </q-th>
    <q-th key="carbs" :props="props">
      Carbs
      <q-tooltip>These are the carbohydrates</q-tooltip>
    </q-th>
    <q-th key="protein" :props="props">
      Protein
      <q-tooltip>These are the proteins</q-tooltip>
    </q-th>
    <q-th key="sodium" :props="props">
      Sodium
      <q-tooltip>This is the sodium</q-tooltip>
    </q-th>
    <q-th key="calcium" :props="props">
      Calcium
      <q-tooltip>This is the calcium</q-tooltip>
    </q-th>
    <q-th key="iron" :props="props">
      Iron
      <q-tooltip>This is the iron</q-tooltip>
    </q-th>
  </tr>
</q-table>
```

### Alternative custom header
```html
<q-table
  :data="tableData"
  :columns="columns"
  row-key="name"
>
  <q-tr slot="header" slot-scope="props" :props="props">
    <q-th v-for="col in props.cols" :key="col.name" :props="props">
      # {{ col.label }} #
    </q-th>
  </q-tr>
</q-table>
```

### Custom header & rows with selection & expandable rows
```html
<q-table
  :data="tableData"
  :columns="columns"
  selection="multiple"
  :selected.sync="selected"
  row-key="name"
>
  <q-tr slot="header" slot-scope="props">
    <q-th auto-width>
      <q-checkbox
        v-if="props.multipleSelect"
        v-model="props.selected"
        indeterminate-value="some"
      />
    </q-th>
    <q-th v-for="col in props.cols" :key="col.name" :props="props">
      {{ col.label }}
    </q-th>
  </q-tr>

  <template slot="body" slot-scope="props">
    <q-tr :props="props">
      <q-td auto-width>
        <q-checkbox color="primary" v-model="props.selected" />
      </q-td>
      <q-td key="desc" :props="props">
        <q-checkbox color="primary" v-model="props.expand" checked-icon="remove" unchecked-icon="add" class="q-mr-md" />
        {{ props.row.name }}
      </q-td>
      <q-td key="calories" :props="props">{{ props.row.calories }}</q-td>
      <q-td key="fat" :props="props">{{ props.row.fat }}</q-td>
      <q-td key="carbs" :props="props">{{ props.row.carbs }}</q-td>
      <q-td key="protein" :props="props">{{ props.row.protein }}</q-td>
      <q-td key="sodium" :props="props">{{ props.row.sodium }}</q-td>
      <q-td key="calcium" :props="props">{{ props.row.calcium }}</q-td>
      <q-td key="iron" :props="props">
        <q-chip small square color="amber">{{ props.row.iron }}</q-chip>
      </q-td>
    </q-tr>
    <q-tr v-show="props.expand" :props="props">
      <q-td colspan="100%">
        <div class="text-left">This is expand slot for row above: {{ props.row.name }}.</div>
      </q-td>
    </q-tr>
  </template>
</q-table>
```
