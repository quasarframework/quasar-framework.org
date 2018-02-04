title: Breadcrumbs
---
Quasar Breadcrumbs is a component used as a navigational aid in UI. It allows users to keep track of their location within programs, documents, or websites.
<input type="hidden" data-fullpage-demo="navigation/breadcrumbs">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: [
    'QBreadcrumbs',
    'QBreadcrumbsEl'
  ]
}
```

## Basic Usage

``` html
<q-breadcrumbs>
  <q-breadcrumbs-el label="Home" icon="home" />
  <q-breadcrumbs-el label="Components" icon="widgets" />
  <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
</q-breadcrumbs>
```

With route links and custom separator:
```html
<q-breadcrumbs
  separator="->"
  active-color="secondary"
  color="light"
>
  <q-breadcrumbs-el label="Home" to="/" />
  <q-breadcrumbs-el label="Components" to="/components" />
  <q-breadcrumbs-el label="Breadcrumbs" to="/components/breadcrums" />
  <q-breadcrumbs-el label="Bogus" to="/components/breadcrums/bogus" />
</q-breadcrumbs>
```

With separator as scoped slot (in this case an icon, but can be anything):
```html
<q-breadcrumbs>
  <q-icon name="trending_flat" slot="separator" slot-scope="props" />

  <q-breadcrumbs-el active>Home</q-breadcrumbs-el>
  <q-breadcrumbs-el>Components</q-breadcrumbs-el>
  <q-breadcrumbs-el>Breadcrumbs</q-breadcrumbs-el>
</q-breadcrumbs>
```

With different alignment:
```html
<q-breadcrumbs align="center">
  <q-icon name="arrow_forward" slot="separator" slot-scope="props" />

  <q-breadcrumbs-el>Home</q-breadcrumbs-el>
  <q-breadcrumbs-el>Components</q-breadcrumbs-el>
  <q-breadcrumbs-el>Breadcrumbs</q-breadcrumbs-el>
</q-breadcrumbs>
```

## QBreadcrumbs Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `color` | String | A color from [Quasar Color Palette](/components/color-palette.html) |
| `active-color` | String | Active color, one from [Quasar Color Palette](/components/color-palette.html)|
| `separator` | String | Separator text between breadcrumb elements |
| `align` | String | One of 'left', 'right', 'center', 'between', 'around'. |

## QBreadcrumbsEl Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `label` | String | Label of element |
| `icon` | String | Icon for element |
| `color` | String | A color from [Quasar Color Palette](/components/color-palette.html) |

### Using QBreadcrumbsEl as a Router Link
If you want your QBreadcrumbsEl to act the same as Vue's `<router-link>`, then you can use these additional properties (which work exactly the same as `<router-link>`):

| Property | Type | Description |
| --- | --- | --- | --- |
| `to` | String / Object | Route to navigate to |
| `exact` | Boolean | Match the exact route specified (and not also its children) when adding `router-link-active` CSS class. |
| `append` | Boolean | Append route definition to current route when navigating. |
| `replace` | Boolean | Replaces current route with the new one instead of adding it to the window history queue. |

For more details on these properties, please refer to the [Vue Router documentation](http://router.vuejs.org/en/api/router-link.html).
