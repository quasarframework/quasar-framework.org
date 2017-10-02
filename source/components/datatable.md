title: Data Table
---
Quasar Grid is a Vue Component which allows you to display data in a tabular manner. Features:
  * Responsive (changes design when width is smaller than 600px to best accommodate small screens)
  * Sticky columns
  * Sticky headers
  * Filter (by all columns or by one column)
  * Sorting by columns
  * Cell formatter methods
  * Cell component renderer (through Vue scoped slots)
  * Pagination
  * Columns picker
  * Row selection (single or multiple)
  * Refresh functionality

**Data Table is highly optimized to support a large number of rows**, but its good to check "Performance" section below to make the most of it.

_Best way to display a Grid is on a desktop so you might want to check that first_. Resize the browser window to see sticky columns and the responsiveness.
<input type="hidden" data-fullpage-demo="grouping/data-table">

## Basic Usage

``` html
<q-data-table
  :data="table"
  :config="config"
  :columns="columns"
  @refresh="refresh"
>
  <!-- Custom renderer for "message" column -->
  <template slot="col-message" scope="cell">
    <span class="light-paragraph">{{cell.data}}</span>
  </template>

  <!-- Custom renderer for "source" column -->
  <template slot="col-source" scope="cell">
    <span v-if="cell.data === 'Audit'" class="label text-white bg-primary">
      Audit
      <q-tooltip>Some data</q-tooltip>
    </span>
    <span v-else class="label text-white bg-negative">{{cell.data}}</span>
  </template>

  <!-- Custom renderer for "action" column with button for custom action -->
  <template slot='col-action' scope='cell'>
    <q-btn color="primary" @click='doSomethingMethod(cell.row.id)'>View</q-btn>
  </template>

  <!-- Custom renderer when user selected one or more rows -->
  <template slot="selection" scope="selection">
    <q-btn color="primary" @click="changeMessage(selection)">
      <i>edit</i>
    </q-btn>
    <q-btn color="primary" @click="deleteRow(selection)">
      <i>delete</i>
    </q-btn>
  </template>
</q-data-table>
```

## Vue Properties
All Vue properties are **required**.

| Vue Property | Description |
| --- | --- |
| `config` | Config object (see "Config Property" below). |
| `columns` | Object defining columns (see "Columns Definition" below). |
| `data` | Data containing Array of rows to display. |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `refresh([Boolean])` | If parameter is missing or `true` then it puts Data Table in refresh mode. If parameter is `false` then components gets out of refresh mode. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@refresh(Function done)` | Triggered when user clicks/taps on "Refresh" button. Call `done()` when refresh is over. |
| `@selection(Array selection)` | Triggered when user selects/deselects a row. Parameter has all selected rows. |
| `@rowclick` | Triggered when user clicks on a row. |

## Configuring Data Table
Some things worth mentioning before digging into how to configure Data Table:
* You must specify `rowHeight` property
* You must specify each columns' width

### Config Property
Below is an example enabling all features:

``` js
config = {
  // [REQUIRED] Set the row height
  rowHeight: '50px',

  // (optional) Title to display
  title: 'Data Table',

  // (optional) No columns header
  noHeader: true,

  // (optional) Display refresh button
  refresh: true,

  // (optional)
  // User will be able to choose which columns
  // should be displayed
  columnPicker: true,

  // (optional) How many columns from the left are sticky
  leftStickyColumns: 0,

  // (optional) How many columns from the right are sticky
  rightStickyColumns: 2,

  // (optional)
  // Styling the body of the data table;
  // "minHeight", "maxHeight" or "height" are important
  bodyStyle: {
    maxHeight: '500px'
  },

  // (optional) By default, Data Table is responsive,
  // but you can disable this by setting the property to "false"
  responsive: true,

  // (optional) Use pagination. Set how many rows per page
  // and also specify an additional optional parameter ("options")
  // which forces user to make a selection of how many rows per
  // page he wants from a specific list
  pagination: {
    rowsPerPage: 15,
    options: [5, 10, 15, 30, 50, 500]
  },

  // (optional) Select one or more rows for an action
  // "single" adds a column with radio buttons for single row selection
  // "multiple" adds a column with checkboxes for multiple row selection
  // omitting the property will result in no selection column at all
  selection: 'multiple',

  // (optional) Override default messages when no data is available
  // or the user filtering returned no results.
  messages: {
    noData: '<i>warning</i> No data available to show.',
    noDataAfterFiltering: '<i>warning</i> No results. Please refine your search terms.'
  },

  // (optional) Override default labels. Useful for I18n.
  labels: {
    columns: 'Coluuuuumns',
    allCols: 'Eeeeeeeeevery Cols',
    rows: 'Rooows',
    selected: {
      singular: 'item selected.',
      plural: 'items selected.'
    },
    clear: 'clear',
    search: 'Search',
    all: 'All'
  }
}
```

### Columns definition
``` js
columns = [
  {
    // [REQUIRED] Column name
    label: 'Date',

    // [REQUIRED] Row property name
    field: 'isodate',

    // [REQUIRED] Column width
    width: '100px',

    // (optional) Column CSS style
    style: {color: '#ff09fa'},
    // "style" can be a function too if you want to apply
    // certain CSS style based on cell value:
    // style (cell_value) { return .... }

    // (optional) Column CSS classes
    classes: 'bg-primary',
    // "classes" can be a function too if you want to apply
    // certain CSS class based on cell value:
    // classes (cell_value) { return .... }

    // (optional) Can filter/search be applied to this column?
    filter: true,

    // (optional) Sortable column?
    // If yes, then also specify `type` prop to know how to sort
    sort: true,
    // or you can specify a custom sorting method;
    // works same as Array.prototype.sort().
    // Return codes:
    //   < 0 --> "a" should be before "b"
    //   0   --> "a" is same as "b"
    //   > 0 --> "a" should be after "b"
    sort (a, b) {
      return (new Date(a)) - (new Date(b))
    },
    // Type required if using sort.
    // Available values: "string", "number", "date", "boolean"
    type: 'string',

    // (optional)
    // use a formatter for this column;
    // transforms original String in another String
    format (value, row) {
      return new Date(value).toLocaleString()
    }
  },
  ...
]
```

## Features
Describing below some of the features so it makes configuring more clear.

### Data Table Height
Use `config.bodyStyle` optional property to define the height of your Data Table component. This property of `config` should contain CSS props and values:
* If you want to have a maximum height, specify `maxHeight` CSS prop
* If you want to have a minimum height, specify `minHeight` CSS prop
* If you want to have a fixed height, specify `height` CSS prop

### Making a column sortable
In the columns definition array specify `sort: true` (and also `type`) for the Object defining that column.
```js
columns = [
  {
    label: '...',
    ...,
    sort: true, // <<<<

    // Available values: "string", "number", "date", "boolean"
    type: 'string' // <<< required to know how to sort
  }
]
```

### Formatting a Cell
There are two options to do this: use a formatter method or render cell through a component.

#### Formatter Method
In the columns definition array specify `format()` method for the Object defining that column.
```js
columns = [
  {
    label: '...',
    ...,
    format (value) { // <<<<
      return 'a' + value + 'b'
    }
  }
]
```

#### Rendering with Component
Sometimes you need to use a Tooltip or some specific component to render the cell. You can define a Vue component through a scoped slot:

``` html
<q-data-table ...>
  <!-- Custom renderer for "message" column -->
  <template slot="col-message" scope="cell">
    <span class="light-paragraph">{{cell.data}}</span>
  </template>
</q-data-table>
```

The `scope` property here (named `cell`) is an Object containing:

| Scope Property | Description |
| --- | --- |
| `row` | Object containing the row of the respective cell. |
| `col` | Object containing column definition for the respective cell. |
| `data` | Cell value. |

> Slot attribute must have a value of the following form: `col-[field_name]`.
Examples: "col-msg" (for field "msg"), "col-date" (for field "date").

A field is a property name of a row. Example of Data Table `data` Vue property (which is an Array of all rows):
``` js
data = [
  {
    id: 1,
    date: '21-10-2016',
    msg: 'Some message',
    ...
  },
  ...
]
```

## Performance
Performance is always important when dealing with a high number of rows. Data Table component is written to be as efficient as possible (with lots of optimizations behind the scenes -- **it's one of the fastest data table component out there!**), but it's a good thing to make an idea of what features are the most costly to have. So, in descending order:

* Rendering a cell with a component
* Rendering a cell with a formatter method. The formatter method must be really quick, so strip out whatever is not needed and avoid making complex computations.

The more rows you are displaying at a time the more time it will take for Data Table to render the cells. It's a good idea to force pagination when you're using lots of formatters or rendering with lots of components.
