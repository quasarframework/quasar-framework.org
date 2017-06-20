title: Tree
----
Quasar Tree represents a highly configurable component that displays hierarchical data, such as a table of contents in a tree structure.

Trees are stripped out of any design by default so you can
easily stylize and turn them into anything you want.
<input type="hidden" data-fullpage-demo="other-components/tree">

## Basic Usage

``` html
<q-tree
  :model="treeModel"
  contract-html="<i>remove_circle</i>"
  expand-html="<i>add_circle</i>"
></q-tree>
```

### Tree model structure

``` js
treeModel: [
  {
    title: 'Item 1',
    expanded: true,
    children: [
      {
        title: 'Item 1.1',
        expanded: false,
        children: [
          {
            title: 'Item 1.1.1',
            expanded: false,
            children: [
              {
                title: 'Item 1.1.1.1',
                expanded: false,
                children: []
              }
            ]
          },
          {
            title: 'Item 1.1.2',
            expanded: false,
            handler () { console.log('Tapped on Item 1.1.2') },
            children: []
          }
        ]
      },
      {
        title: 'Item 1.2',
        expanded: false,
        children: []
      }
    ]
  },
  {
    title: 'Item 2',
    expanded: false,
    children: []
  }
]
```

Items containing a `handler` method will make those items trigger the handler method when clicked/tapped.

### Vue Properties

| Vue Property | Description |
| --- | --- |
| `model` | Vue model for the Tree |
| `contract-html` | HTML to display at the end of each item; when user clicks on it its branch contracts |
| `expand-html` | HTML to display at the end of each item; when user clicks on it its branch expands |
