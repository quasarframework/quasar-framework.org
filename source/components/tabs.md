title: Quasar Tabs
---
Quasar Tabs are a way of displaying more information using less window real-estate. This Web Component can especially be used in Layouts.

<input type="hidden" data-fullpage-demo="tabs">

## Basic Usage

``` html
<!-- Template for VueModel below -->
<tabs>
  <tab
    v-for="tab in tabs"
    :hidden="tab.hidden"
    :disabled="tab.disabled"
    :icon="tab.icon"
    :target="tab.target"
  >
    {{tab.label}}
  </tab>
</tabs>

<div id="tab-1">
  <div v-for="n in 5">Tab 1</div>
</div>
<div id="tab-2">
  <div v-for="n in 10">Tab 2</div>
</div>
<div id="tab-3">
  <div v-for="n in 7">Tab 3</div>
</div>
```

``` js
module.exports = {
  ...,
  data: {
    ...,
    tabs: [
      {
        label: 'Tab 1',
        icon: 'message',
        target: '#tab-1'
      },
      {
        label: 'Disabled',
        icon: 'fingerprint',
        disabled: true
      },
      {
        label: 'Tab 2',
        icon: 'alarm',
        target: '#tab-2'
      },
      {
        label: 'Tab 3',
        icon: 'accessibility',
        target: '#tab-3'
      },
      {
        label: 'Tab 4',
        icon: 'accessibility',
        target: '#tab-4',
        hidden: true
      }
    ]
  }
};
```

## Layout Usage
You can use the Web Component above in a Layout as is, but if you want the Tabs to be filled in automatically, read [Layout Automatic Navigation Tabs](/components/layout-automatic-navigation-tabs.html) page.
