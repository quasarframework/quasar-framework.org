title: Layout Automatic Navigation Tabs
---
Quasar Automatic Navigation Tabs are links to Page Apps. They get displayed below the Layout Header with Material Theme and above the Layout Footer in iOS Theme.

<input type="hidden" data-fullpage-demo="layout-navigation">

The Automatic Navigation Tabs are defined by `<screen-tabs>` Web Component. This is how you include them in your Layout:

``` html
<screen>
  ...
  <screen-tabs slot="navigation"></screen-tabs>
  ...
</screen>
```

Their purpose is to create Tabs for the Layout to ease the navigation to Pages of your App. They are "automatic" because the only thing you have to do is to specify in your Page's Manifest files how these tabs should be handled.

Example of Page Manifest file:
``` yaml
label: 'Control Panel'
icon: 'dashboard'
layout: 'main'
navigation:
  group: 'typography'
  order: 2
  hide: 'icon'
```

So there you go. It's all about handling Page Manifest files. The Page described above will make Layout to display a Tab with the dashboard icon along 'Control Panel' String. It will link the Page to a Layout called 'main'. The `navigation` property actually enables the Page to be included in the Automatic Navigation Tabs. You must specify a `group` (mandatory) and optionally the `order` (of the Tab in the generated Tab list) or `hide` (which hides either `icon` or `label` on small windows but shows both icon and label on wide windows).

## Navigation Tab Groups
Navigation Tabs are organized by groups. Only one group can be displayed at a time. To better understand what groups are about, take this example:

You have four Pages: 'my-account', 'settings', 'shopping-cart' and 'store'. You can specify in the Page Manifests that the first two pages belong to the navigation group 'account' and the last two in the group 'shopping'. Now, when user navigates to either 'my-account' or 'settings' Pages, the Automatic Navigation Tabs will only show tabs for those two pages since they belong to the same group and no other Page is in this group. When user navigates to 'shopping-cart' or 'store' Pages, navigation group will switch to 'shopping' from 'account' and so the only Tabs displayed will be for these two last Pages.

You can also specify an order in which the tabs are displayed on the Automatic Navigation Tabs if you won't like the default order, through the `navigation.order` property.

> **NOTE**
> You can use Pages with different Layouts but same navigation group names. Only Pages linked to the current Layout being used will be taken into consideration when displaying them by the Automatic Navigation Tabs component.
