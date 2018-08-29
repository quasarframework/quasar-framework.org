title: Tree
----
Quasar Tree represents a highly configurable component that displays hierarchical data, such as a table of contents in a tree structure.
<input type="hidden" data-fullpage-demo="grouping/tree">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QTree']
}
```

## Basic Usage
This is the simplest Tree that you can write:
``` html
<template>
  <q-tree
    :nodes="simple"
    node-key="label"
  />
</template>

<script>
export default {
  data: () => ({
    simple: [
      {
        label: 'Satisfied customers',
        children: [
          {
            label: 'Good food',
            children: [
              { label: 'Quality ingredients' },
              { label: 'Good recipe' }
            ]
          },
          {
            label: 'Good service (disabled node)',
            disabled: true,
            children: [
              { label: 'Prompt attention' },
              { label: 'Professional waiter' }
            ]
          },
          {
            label: 'Pleasant surroundings',
            children: [
              { label: 'Happy atmosphere' },
              { label: 'Good table presentation' },
              { label: 'Pleasing decor' }
            ]
          }
        ]
      }
    ]
  })
}
</script>
```

Notice that nodes must have a unique key defined by a property of each key. In the example above, labels are unique so we're using `label` prop to define these keys. However, you can add any property to the nodes (like 'id' or anything you want) and then use that property (like `node-key="id"`).

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `nodes` | Array | Vue model for the Tree |
| `node-key` | String | Property of node to use as unique key. |
| `label-key` | String | (v0.17.11+) Property of node to use as label. |
| `color` | String | Color of the connector lines. |
| `control-color` | String | Color of checkboxes. |
| `text-color` | String | Color of text. |
| `dark` | Boolean | When rendering on a dark background. |
| `icon` | String | Connector icon for each node. |
| `selected` | Any | **Use .sync**. The unique key value of the selected node. |
| `tick-strategy` | String | One of 'leaf', 'leaf-filtered', 'strict', 'none'. |
| `ticked` | Array | **Use .sync**. Node unique keys of ticked nodes. |
| `expanded` | Array | **Use .sync**. Node unique keys of expanded nodes. |
| `default-expand-all` | Boolean | Expan all nodes on first render. |
| `accordion` | Boolean | Expanding a node closes its siblings. |
| `filter` | String | String to be used when filtering nodes. |
| `filter-method` | Function | Custom filtering method. |
| `no-nodes-label` | String | Override default i18n of message when no nodes are available. |
| `no-results-label` | String | Override default i18n of message when no nodes are available after filtering. |

### Nodes model structure
The following describes a node's properties that are taken into account by QTree's v-model.

| Node Property | Type | Description |
| --- | --- | --- |
| `label` | String | Node's label |
| `icon` | String | Node's icon |
| `iconColor` | String | (v0.17.9+) Node's icon color. One from Quasar Color Palette. |
| `img` | String | Node's image. Use statics folder. Example: 'statics/mountains.png' |
| `avatar` | String | Node's avatar. Use statics folder. Example: 'statics/boy-avatar.png' |
| `children` | Array | Array of nodes as children. |
| `disabled` | Boolean | Is node disabled? |
| `expandable` | Boolean | Is node expandable? |
| `tickable` | Boolean | When using a tick strategy, each node shows a checkbox. Should a node's checkbox be disabled? |
| `noTick` | Boolean | When using a tick strategy, should node display a checkbox? |
| `tickStrategy` | String | Override global tick strategy for this node only. One of 'leaf', 'leaf-filtered', 'strict', 'none'. |
| `lazy` | Boolean | Should children be lazy loaded? In this case also don't specify 'children' prop. |
| `header` | String | Node header scoped slot name, without the required 'header-' prefix. Example: 'story' refers to 'header-story' scoped slot. |
| `body` | String | Node body scoped slot name, without the required 'body-' prefix. Example: 'story' refers to 'body-story' scoped slot. |

### Selection vs Ticking, Expansion
* Selection (through QTree `selected` prop) refers to the currently selected node (gets highlighted with different background).
* Ticking (through QTree `ticked` prop) refers to the checkbox associated with each node.
* Expansion (through QTree `expanded` prop) refers to the nodes that are expanded.

All properties above require the `.sync` modifier in order for them to work correctly. Example:
```html
<!-- DO NOT forget about adding ".sync" -->
<q-tree selected.sync="selection" ...
```

### Tick Strategy
There are three ticking strategy: 'leaf', 'leaf-filtered', 'strict' with an additional (and default) 'none' which disables ticking.

| Strategy | Description |
| --- | --- |
| `leaf` | Ticked nodes are only the leaves. Ticking a node influences the parent's ticked state too (parent becomes partially ticked or ticked), as well as its children (all tickable children become ticked). |
| `leaf-filtered` | Same concept as `leaf`, only that this strategy applies only to filtered nodes (the nodes that remain visible after filtering). |
| `strict` | Ticked nodes are independent of parent or children tick state. |

You can apply a global tick strategy for a QTree and locally change the ticking strategy for a certain node by specifying the `tickStrategy` in the `nodes` model.

### Custom Filter Method
You can customize the filtering method by specifying the `filter-method` prop. The method below is actually the default filtering strategy:
```html
<template>
  <q-tree :filter-method="myFilterMethod" ...>
</template>

<script>
export default {
  methods: {
    myFilterMethod (node, filter) {
      const filt = filter.toLowerCase()
      return node.label && node.label.toLowerCase().indexOf(filt) > -1
    }
  }
}
</script>
```

## Vue Methods

| Vue Property | Description |
| --- | --- |
| `getNodeByKey(key)` | Get a node by specifying its unique key. |
| `collapseAll()` | Collapses all nodes. Useful if not using a synched `expanded` bind, otherwise just set `expanded` to an empty array. |
| `expandAll()` | Expands all nodes. Useful if not using a synched `expanded` bind. |
| `isTicked(key)` | Returns a boolean specifying if node with key is ticked. |
| `isExpanded(key)` | Returns a boolean specifying if node with key is expanded. |
| `getTickedNodes()` | Returns an array with keys of nodes that are ticked. Useful if not using a synched `ticked` bind. |
| `getExpandedNodes()` | Returns an array with keys of nodes that are expanded. Useful if not using a synched `expanded` bind. |

## Examples

### Node icon/avatar/image, controlling expansion and colored
```html
<template>
  <div>
    <q-btn
      color="secondary"
      @click="togglePropsGoodServiceExpand"
      label="Toggle 'Good service' expansion"
    />
    <q-tree
      :nodes="props"
      :expanded.sync="propsExpanded"
      color="red"
      node-key="label"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    propsExpanded: ['Satisfied customers', 'Pleasant surroundings'],
    props: [
      {
        label: 'Satisfied customers',
        avatar: 'statics/boy-avatar.png',
        children: [
          {
            label: 'Good food',
            icon: 'restaurant_menu',
            children: [
              { label: 'Quality ingredients' },
              { label: 'Good recipe' }
            ]
          },
          {
            label: 'Good service',
            icon: 'room_service',
            children: [
              { label: 'Prompt attention' },
              { label: 'Professional waiter' }
            ]
          },
          {
            label: 'Pleasant surroundings',
            icon: 'photo',
            children: [
              {
                label: 'Happy atmosphere',
                img: 'statics/parallax1.jpg'
              },
              {
                label: 'Good table presentation',
                img: 'statics/parallax2.jpg'
              },
              {
                label: 'Pleasing decor',
                img: 'statics/mountains.jpg'
              }
            ]
          }
        ]
      }
    ]
  }),
  methods: {
    togglePropsGoodServiceExpand () {
      const index = this.propsExpanded.indexOf('Good service')
      if (index > -1) {
        this.propsExpanded.splice(index, 1)
      }
      else {
        this.propsExpanded.push('Good service')
      }
    }
  }
}
</script>
```

### Customizing nodes (header and body slots)
```html
<template>
  <q-tree
    :nodes="customize"
    node-key="label"
    default-expand-all
  >
    <div slot="header-root" slot-scope="prop" class="row items-center">
      <img src="~assets/quasar-logo.svg" class="avatar q-mr-sm">
      <div>
        {{ prop.node.label }} <q-chip color="orange" small>New!</q-chip>
      </div>
    </div>

    <div slot="header-generic" slot-scope="prop" class="row items-center">
      <q-icon :name="prop.node.icon || 'star'" color="orange" size="28px" class="q-mr-sm" />
      <div class="text-weight-bold text-primary">{{ prop.node.label }}</div>
    </div>

    <div slot="body-story" slot-scope="prop">
      <span class="text-weight-thin">The story is:</span> {{ prop.node.story }}
    </div>

    <div slot="body-toggle" slot-scope="prop">
      <p class="caption">{{ prop.node.caption }}</p>
      <q-toggle v-model="prop.node.enabled" label="I agree to the terms and conditions" />
    </div>
  </q-tree>
</template>

<script>
export default {
  data: () => ({
    customize: [
      {
        label: 'Satisfied customers',
        header: 'root',
        children: [
          {
            label: 'Good food',
            icon: 'restaurant_menu',
            header: 'generic',
            children: [
              {
                label: 'Quality ingredients',
                header: 'generic',
                body: 'story',
                story: 'Lorem ipsum dolor sit amet.'
              },
              {
                label: 'Good recipe',
                body: 'story',
                story: 'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.'
              }
            ]
          },
          {
            label: 'Good service',
            header: 'generic',
            body: 'toggle',
            caption: 'Why are we as consumers so captivated by stories of great customer service? Perhaps it is because...',
            enabled: false,
            children: [
              { label: 'Prompt attention' },
              { label: 'Professional waiter' }
            ]
          },
          {
            label: 'Pleasant surroundings',
            children: [
              { label: 'Happy atmosphere' },
              { label: 'Good table presentation', header: 'generic' },
              { label: 'Pleasing decor' }
            ]
          }
        ]
      }
    ]
  })
}
</script>
```

### Applying a default header and body slot
```html
<template>
  <q-tree
    :nodes="customize"
    node-key="label"
    default-expand-all
  >
    <div slot="default-header" slot-scope="prop" class="row items-center">
      <q-icon :name="prop.node.icon || 'share'" color="orange" size="28px" class="q-mr-sm" />
      <div class="text-weight-bold text-primary">{{ prop.node.label }}</div>
    </div>

    <div slot="default-body" slot-scope="prop">
      <div v-if="prop.node.story">
        <span class="text-weight-thin">This node has a story</span>: {{ prop.node.story }}
      </div>
      <span v-else class="text-weight-thin">This is some default content.</span>
    </div>
  </q-tree>
</template>

<script>
export default {
  data: () => ({
    customize: [
      {
        label: 'Satisfied customers',
        header: 'root',
        children: [
          {
            label: 'Good food',
            icon: 'restaurant_menu',
            header: 'generic',
            children: [
              {
                label: 'Quality ingredients',
                header: 'generic',
                body: 'story',
                story: 'Lorem ipsum dolor sit amet.'
              },
              {
                label: 'Good recipe',
                body: 'story',
                story: 'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.'
              }
            ]
          },
          {
            label: 'Good service',
            header: 'generic',
            body: 'toggle',
            caption: 'Why are we as consumers so captivated by stories of great customer service? Perhaps it is because...',
            enabled: false,
            children: [
              { label: 'Prompt attention' },
              { label: 'Professional waiter' }
            ]
          },
          {
            label: 'Pleasant surroundings',
            children: [
              { label: 'Happy atmosphere' },
              { label: 'Good table presentation', header: 'generic' },
              { label: 'Pleasing decor' }
            ]
          }
        ]
      }
    ]
  })
}
</script>
```

### Filtering nodes
```html
<template>
  <div>
    <q-input
      v-model="filter"
      stack-label="Filter"
      clearable
      class="q-mb-sm"
    />
    <q-tree
      :nodes="simple"
      :filter="filter"
      default-expand-all
      node-key="label"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    filter: '',
    simple: [
      {
        label: 'Satisfied customers',
        children: [
          {
            label: 'Good food',
            children: [
              { label: 'Quality ingredients' },
              { label: 'Good recipe' }
            ]
          },
          {
            label: 'Good service (disabled node)',
            disabled: true,
            children: [
              { label: 'Prompt attention' },
              { label: 'Professional waiter' }
            ]
          },
          {
            label: 'Pleasant surroundings',
            children: [
              { label: 'Happy atmosphere' },
              { label: 'Good table presentation' },
              { label: 'Pleasing decor' }
            ]
          }
        ]
      }
    ]
  })
}
</script>
```

### Accordion mode (sibling nodes get contracted when one gets expanded)
```html
<q-tree
  :nodes="simple"
  accordion
  node-key="label"
/>
```

### Selectable nodes
```html
<template>
  <div>
    <div class="q-mb-sm">
      <q-btn size="sm" color="primary" @click="selectGoodService" label="Select 'Good service'" />
      <q-btn v-if="selected" size="sm" color="red" @click="unselectNode" label="Unselect node" />
    </div>
    <q-tree
      :nodes="props"
      default-expand-all
      :selected.sync="selected"
      node-key="label"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    selected: null,
    props: [
      {
        label: 'Satisfied customers',
        avatar: 'statics/boy-avatar.png',
        children: [
          {
            label: 'Good food',
            icon: 'restaurant_menu',
            children: [
              { label: 'Quality ingredients' },
              { label: 'Good recipe' }
            ]
          },
          {
            label: 'Good service',
            icon: 'room_service',
            children: [
              { label: 'Prompt attention' },
              { label: 'Professional waiter' }
            ]
          },
          {
            label: 'Pleasant surroundings',
            icon: 'photo',
            children: [
              {
                label: 'Happy atmosphere',
                img: 'statics/parallax1.jpg'
              },
              {
                label: 'Good table presentation',
                img: 'statics/parallax2.jpg'
              },
              {
                label: 'Pleasing decor',
                img: 'statics/mountains.jpg'
              }
            ]
          }
        ]
      }
    ]
  }),
  methods: {
    selectGoodService () {
      if (this.selected !== 'Good service') {
        this.selected = 'Good service'
      }
    },
    unselectNode () {
      this.selected = null
    },
  }
}
</script>
```

### Tickable nodes & strategies
```html
<template>
  <div>
    <div class="q-mb-sm row no-wrap items-center">
      <q-select
        v-model="tickStrategy"
        color="secondary"
        stack-label="Tick Strategy"
        :options="[
          {label: 'None', value: 'none'},
          {label: 'Leaf', value: 'leaf'},
          {label: 'Leaf Filtered', value: 'leaf-filtered'},
          {label: 'Strict', value: 'strict'}
        ]"
        class="q-ma-none q-mr-sm"
        style="width: 150px"
      />
      <q-input
        v-if="tickStrategy === 'leaf-filtered'"
        color="secondary"
        stack-label="Filter"
        v-model="tickFilter"
        class="q-ma-none"
        clearable
      />
    </div>
    <q-tree
      :nodes="tickable"
      color="secondary"
      default-expand-all
      :ticked.sync="ticked"
      :tick-strategy="tickStrategy"
      :filter="tickFilter"
      node-key="label"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    ticked: [],
    tickStrategy: 'leaf',
    tickFilter: null,
    tickable: [
      {
        label: 'Satisfied customers',
        avatar: 'statics/boy-avatar.png',
        children: [
          {
            label: 'Good food',
            icon: 'restaurant_menu',
            children: [
              { label: 'Quality ingredients' },
              { label: 'Good recipe' }
            ]
          },
          {
            label: 'Good service',
            icon: 'room_service',
            children: [
              { label: 'Prompt attention' },
              { label: 'Professional waiter' }
            ]
          },
          {
            label: 'Pleasant surroundings',
            icon: 'photo',
            children: [
              {
                label: 'Happy atmosphere (not tickable)',
                tickable: false,
                img: 'statics/parallax1.jpg'
              },
              {
                label: 'Good table presentation (disabled node)',
                disabled: true,
                img: 'statics/parallax2.jpg'
              },
              {
                label: 'Pleasing decor',
                img: 'statics/mountains.jpg'
              }
            ]
          },
          {
            label: 'Extra information (has no tick)',
            noTick: true,
            icon: 'photo'
          },
          {
            label: 'Forced tick strategy (to "strict" in this case)',
            tickStrategy: 'strict',
            icon: 'school',
            children: [
              {
                label: 'Happy atmosphere',
                img: 'statics/parallax1.jpg'
              },
              {
                label: 'Good table presentation',
                img: 'statics/parallax2.jpg'
              },
              {
                label: 'Very pleasing decor',
                img: 'statics/mountains.jpg'
              }
            ]
          }
        ]
      }
    ]
  })
}
</script>
```

### Lazy loading nodes
```html
<template>
  <q-tree
    :nodes="lazy"
    default-expand-all
    node-key="label"
    @lazy-load="onLazyLoad"
  />
</template>

<script>
export default {
  data: () => ({
    lazy: [
      {
        label: 'Node 1',
        children: [
          { label: 'Node 1.1', lazy: true },
          { label: 'Node 1.2', lazy: true }
        ]
      },
      {
        label: 'Node 2',
        lazy: true
      },
      {
        label: 'Lazy load empty',
        lazy: true
      },
      {
        label: 'Node is not expandable',
        expandable: false,
        children: [
          { label: 'Some node' }
        ]
      }
    ]
  }),
  methods: {
    onLazyLoad ({ node, key, done, fail }) {
      // call fail() if any error occurs

      setTimeout(() => {
        // simulate loading and setting an empty node
        if (key.indexOf('Lazy load empty') > -1) {
          done([])
          return
        }

        const label = node.label
        done([
          { label: `${label}.1` },
          { label: `${label}.2`, lazy: true },
          {
            label: `${label}.3`,
            children: [
              { label: `${label}.3.1`, lazy: true },
              { label: `${label}.3.2`, lazy: true }
            ]
          }
        ])
      }, 1000)
    }
  }
}
</script>
```
