title: List Item
---
Quasar ListItem is a component which wraps the HTML syntax described in the [CSS > List](/components/list.html) section. Make sure you read about Lists on the previous link before diving into this component.

## Basic Usage

``` html
<q-list-item
  :item="item"
  link
  :active="itemIsSelected"
  @click.native="clickedOnItem()"
></q-list-item>
```

Example of `item` definition:
``` js
{
  icon: 'alarm',
  label: 'Set your alarm'
}
```

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- | --- |
| `item` | Object | Information about the item being displayed. |
| `active` | Boolean | Should the list item be "active"/"highlighted" ? |
| `link` | Boolean | Is our list item a link? Works great with specifying a @click event. |

List `item` Object prop has the following properties:

| Prop Name | Place | Description |
| --- | --- | --- |
| `icon` | left | Icon to display |
| `img` | left | Image to display from the statics folder (specify if so!) or an external URL |
| `label` | center | Label to display (first line) |
| `secondLabel` | center | Label to display (starting with second line) |
| `stamp` | right | Stamp to display |
| `secondIcon` | right | Icon to display |
| `secondImg` | right | Image to display from the statics folder (specify if so!) or an external URL |
| `multiline` | - | Specifies if this is a multiline list item (more than 2 lines), otherwise the component infers by itself if it's one or two lines from the other props. |
