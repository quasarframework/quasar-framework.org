title: Lists and List Items
---
Quasar Lists and List Items are a group of components which can work together to present multiple line items vertically as a single continuous element. They are best suited for displaying similar data types as rows of information, such as a contact list, a playlist, or menu. Each row is called an Item. Items can also be used outside of a List.
<input type="hidden" data-fullpage-demo="grouping/list/email" data-source="grouping/list">

Lists can encapsulate Items or Item-like components, for example [QCollapsible](/components/collapsible.html).

List Items have following content areas:
* **left side** and **right side** (usually equipped for supplemental actions represented by icons, avatars, images or letters, but not limited to only these)
* **main content** which usually is filled with a label (title) and sublabel (subtitle), form components, or anything else for that matter.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: [
    'QList',
    'QListHeader',
    'QItem',
    'QItemMain',
    'QItemSeparator',
    'QItemSide',
    'QItemTile'
  ],

  // if you use v-close-overlay:
  directives: ['CloseOverlay']
}
```

## Basic Usage
We'll cover each component on its own section later on, but for now, take a look to get a glimpse of how to structure your templates when using Lists.

``` html
<q-list highlight>
  <q-list-header>Recent chats</q-list-header>
  <q-item>
    <q-item-side>
      <q-item-tile avatar>
        <img src="statics/boy-avatar.png">
      </q-item-tile>
    </q-item-side>
    <q-item-main label="John Doe" />
    <q-item-side right>
      <q-item-tile icon="chat_bubble" color="green" />
    </q-item-side>
  </q-item>
  <q-item>
    <q-item-side avatar="statics/linux-avatar.png" />
    <q-item-main label="Jim Doe" />
    <q-item-side right icon="chat_bubble" />
  </q-item>
  <q-item-separator />
  <q-list-header>Previous chats</q-list-header>
  <q-item>
    <q-item-side avatar="statics/guy-avatar.png" />
    <q-item-main label="Jack Doe" />
  </q-item>
</q-list>
```

Notice that QItemMain and QItemSide can contain QItemTiles, or for convenience, you can use their own properties to define the content.

Due to how Webpack works in creating the bundle for your App, in some cases you may need to use QItemTile, like for avatars or images. The reason is simple: if you use QItemSide `avatar` property, you must supply the path to the statics folder and cannot use the `assets` folder or relative paths. Instead, the latter two can be used with a QItemTile wrapping an `<img>` HTML tag. Look closely at image paths in the example above (`statics/guy-avatar.png` vs `~assets/boy-avatar.png`). Also read about [App Handling Static Assets](/guide/app-handling-static-assets.html) to understand how Webpack includes assets into the bundle.

## Components

Below is a list of Quasar components that you can use to define lists and list items:
* QList (encapsulating QItems and all other List related components)
* QListHeader (header of a section in QList)
* QItemSeparator (external Item separator/separator)
* QItem (encapsulating everything an Item contains)
* QItemSide (left or right side)
* QItemMain (for main content of an Item)
* QItemTile (for individual parts of QItemSide and QItemMain, like label, icon, avatar, image, …)

![Quasar List and List Items](/images/list-and-list-items.svg "Quasar List and List Items")

### QList
QList encapsulates all other components mentioned. It's not mandatory, but does help with maintaining a good design and can also define some properties that will be applied to all QItems (or QItem-like components) like multiline, separator, link, highlight and so on.

| Vue Property | Type | Description |
| --- | --- | --- | --- |
| `striped` | Boolean | Apply highlight to QItems intermittently, starting with second QItem. |
| `striped-odd` | Boolean | Apply highlight to QItems intermittently, starting with first QItem. |
| `highlight` | Boolean | Apply highlight to all QItems. This works only on desktop when user hovers QItems. |
| `link` | Boolean | Apply highlight and a pointer cursor to all QItems. |
| `dense` | Boolean | Make QItems dense. |
| `sparse` | Boolean | Make QItems sparse. |
| `multiline` | Boolean | Make QItems multiline. |
| `separator` | Boolean | Make QItems have a separator between them. |
| `inset-separator` | Boolean | Make QItems have an inset separator between them. |
| `dark` | Boolean | When you component is rendered on a dark background |
| `no-border` | Boolean | Remove the default border around QList. |

### QListHeader
Within QList, you can display a section header / title.

| Vue Property | Type | Description |
| --- | --- | --- | --- |
| `inset` | Boolean | Place an inset separator. |

```html
<q-list>
  <q-list-header>Folders</q-list-header>
  <!-- insert QItems... -->

  <q-list-header>Files</q-list-header>
  <!-- insert QItems... -->
</q-list>
```

### QItemSeparator
If you want QItem external separators (there are internal ones too as you can see on QItem's description later on this page), use the QItemSeparator component. It's useful also to separate different sections of your QList, like for example, before a QListHeader.

| Vue Property | Type | Description |
| --- | --- | --- | --- |
| `inset` | Boolean | Place an inset separator. |

```html
<q-list>
  <q-list-header>Folders</q-list-header>
  <!-- insert QItems... -->

  <q-item-separator />

  <q-list-header>Files</q-list-header>
  <!-- insert QItems... -->
</q-list>

<!-- and/or -->
<q-list>
  <q-item ...>...</q-item>

  <!-- Inset separator example -->
  <q-item-separator inset />

  <q-item ...>...</q-item>
  <q-item-separator />
  <q-item ...>...</q-item>
  <q-item-separator />
  <q-list-header>Files</q-list-header>
  <q-item ...>...</q-item>
</q-list>
```

### QItem

| Vue Property | Type | Description |
| --- | --- | --- | --- |
| `dense` | Boolean | Make QItem dense (narrow paddings). |
| `sparse` | Boolean | Make QItem sparse (large paddings). |
| `separator` | Boolean | Make QItem have a separator between it and previous QItem. |
| `inset-separator` | Boolean | Make QItem have an inset separator between it and previous QItem. |
| `multiline` | Boolean | Make QItem multiline. Vertically aligns QItem sides to top. Useful for more than 2-3 lines QItem content. |
| `highlight` | Boolean | Apply highlight to QItem. Works only on desktop when user hovers it. |
| `link` | Boolean | Apply highlight and a pointer cursor to QItem. |
| `tag` | String | Default HTML tag used is 'div', but this can be any HTML tag if you need to. Read below for more information. |
| `dark` | Boolean | When rendered on a dark background |

Also check the next section for more properties and to learn about how you can use your QItem as a Router Link.

#### Using QItem as a Router Link
If you want your QItem to act the same as Vue's `<router-link>`, then you can use these additional properties (which work exactly the same as `<router-link>`):

| Property | Type | Description |
| --- | --- | --- | --- |
| `to` | String / Object | Route to navigate to |
| `exact` | Boolean | Match the exact route specified (and not also its children) when adding `router-link-active` CSS class. |
| `append` | Boolean | Append route definition to current route when navigating. |
| `replace` | Boolean | Replaces current route with the new one instead of adding it to the window history queue. |

For more details on these properties, please refer to the [Vue Router documentation](http://router.vuejs.org/en/api/router-link.html).

#### Render with specific HTML tag
Please refer to the example on how to use the `tag` property shown below. In this example, we take advantage of the `<label>` tag that browsers automatically connect to checkboxes (QCheckbox, QToggle) or radio inputs (QRadio). When a `<label>` is clicked/tapped, then the wrapped checkboxes toggle their state (check / uncheck) and wrapped radios are being selected.
```html
<!--
  We want a click/tap on the whole QItem
  to toggle the checkbox, so we use tag="label"
  to make QItem render with <label> tag.
-->
<q-item tag="label">
  <q-item-side>
    <q-checkbox v-model="checkboxModel" />
  </q-item-side>
  <q-item-main>
    <q-item-tile label>Notifications</q-item-tile>
    <q-item-tile sublabel>Notify me about updates to apps or games that I downloaded</q-item-tile>
  </q-item-main>
</q-item>
```

### QItemSide

| Vue Property | Type | Description |
| --- | --- | --- | --- |
| `color` | String | Use a color from [Quasar Color Palette](/components/color-palette.html). |
| `text-color` | String | Override text color, one from [Quasar Color Palette](/components/color-palette.html). |
| `inverted` | Boolean | Invert colors. |
| `right` | Boolean | Applies necessary design tweaks for right side of QItem. |
| `icon` | String | Icon to use. Either use an icon, image, avatar or letter. |
| `image` | String | URL to image to use (point to statics). Either use an icon, image, avatar or letter. |
| `avatar` | String | URL to avatar to use (point to statics). Either use an icon, image, avatar or letter. |
| `letter` | String | One character String to define a letter. Either use an icon, image, avatar or letter. |
| `stamp` | String | For right side only. One character String to define a letter. Either use an icon, image, avatar or letter. |
| `tag` | String | Default HTML tag that QItemTile gets rendered with is 'div', but this can be any HTML tag if you need to. |

Use the icon, image, avatar, letter or stamp properties or, for more control, insert QItemTiles instead. Use only one method or the other.

### QItemMain

| Vue Property | Type | Description |
| --- | --- | --- | --- |
| `label` | String | Label to use as title. |
| `sublabel` | String | Label to use as subtitle. |
| `label-lines` | String / Number | Number of lines the label can span to. |
| `sublabel-lines` | String / Number | Number of lines the sublabel can span to. |
| `inset` | Boolean | Useful when QItem has no left side, but you want to align your content as if it had a left side. |
| `tag` | String | Default HTML tag that QItemTile gets rendered with is 'div', but this can be any HTML tag if you need to. |

Use the label properties or, for more control, insert QItemTiles to define the label and sublabel. Use only one method or the other.

### QItemTile
QItemTile can be used for more control over the content of the left, right side or main content of QItem.

| Vue Property | Type | Description |
| --- | --- | --- | --- |
| `color` | String | Use a color from [Quasar Color Palette](/components/color-palette.html). |
| `text-color` | String | Override text color, one from [Quasar Color Palette](/components/color-palette.html). |
| `inverted` | Boolean | Invert colors. |
| `icon` | String | Icon to use. Either use an icon, image, avatar or letter as props. |
| `image` | Boolean | Encapsulates an image. Its content must be an `<img>` with `src` attribute pointing to statics. Either use an icon, image, avatar or letter as props. |
| `avatar` | Boolean | Encapsulates an avatar image. Its content must be an `<img>` with `src` attribute pointing to statics. Either use an icon, image, avatar or letter as props. |
| `letter` | String | One character String to define a letter. Either use an icon, image, avatar or letter as props. |
| `tag` | String | Default HTML tag that QItemTile gets rendered with is 'div', but this can be any HTML tag if you need to. |

There are more props available for QItemTile, but only use the following when QItemTile is wrapped with QItemMain:

| Vue Property | Type | Description |
| --- | --- | --- | --- |
| `label` | String | Encapsulates the label / title of QItem. |
| `sublabel` | String | Encapsulates the sub-label / sub-title of QItem. |
| `lines` | String / Number | Number of lines the label/sublabel can span to. Ellipsis are used when overflowing. Use only in conjunction with `label` and `sublabel`. |


## Using QCollapsible with QItems
[QCollapsible](/components/collapsible.html) is a QItem wrapper, so you can use them as (and along) QItems within a QList. Here are two examples:

```html
<!--
  Notice we use QCollapsibles and QItems
  as direct children of QList.

  We are basically building a menu.
-->
<q-list separator>
  <!-- collapsible to hide sub-level menu entries -->
  <q-collapsible icon="inbox" label="Inbox" label="Where your email is">
    <q-item link to="/inbox/1">
      <q-item-side icon="mail" />
      <q-item-main label="Email 1" />
    </q-item>
    <q-item link to="/inbox/2">
      <q-item-side icon="mail" />
      <q-item-main label="Email 2" />
    </q-item>
    <q-collapsible icon="favorite" label="Favorites">
      <q-item link to="/inbox/favorites/1">
        <q-item-side icon="mail" />
        <q-item-main :label="Favorite 1" />
      </q-item>
      <q-item to="/inbox/favorites/2">
        <q-item-side icon="mail" />
        <q-item-main :label="Favorite 2" />
      </q-item>
    </q-collapsible>
    <q-item to="/inbox/3">
      <q-item-side icon="mail" />
      <q-item-main label="Email 3" />
    </q-item>
  </q-collapsible>

  <!-- menu link -->
  <q-item link to="/snoozed">
    <q-item-side icon="schedule" />
    <q-item-main>
      <q-item-tile label>Snoozed</q-item-tile>
    </q-item-main>
  </q-item>

  <!-- collapsible to hide sub-level menu entries -->
  <q-collapsible icon="send" label="Sent">
    <q-item to="/sent/1">
      <q-item-side icon="mail" />
      <q-item-main label="Email 1" />
    </q-item>
  </q-collapsible>

  <!-- menu link -->
  <q-item link to="/trash">
    <q-item-side icon="delete" />
    <q-item-main>
      <q-item-tile label>Trash</q-item-tile>
    </q-item-main>
  </q-item>
</q-list>
```

## More Examples

### Email list
```html
<q-list highlight inset-separator>
  <q-item>
    <q-item-side avatar="statics/boy-avatar.png" />
    <q-item-main label="Brunch this weekend? Brunch this weekend? Brunch this weekend?" label-lines="1" />
    <q-item-side right stamp="1 min" />
  </q-item>
  <q-item multiline>
    <q-item-side avatar="statics/boy-avatar.png" />
    <q-item-main
      label="Brunch this weekend? Brunch this weekend? Brunch this weekend?"
      label-lines="1"
      sublabel="John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe"
      sublabel-lines="2"
    />
    <q-item-side right>
      <q-item-tile stamp>1 week ago</q-item-tile>
    </q-item-side>
  </q-item>
  <q-item multiline>
    <q-item-side avatar="statics/boy-avatar.png" />
    <q-item-main
      label="Brunch this weekend? Brunch this weekend? Brunch this weekend?"
      label-lines="2"
      sublabel="John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe"
    />
    <q-item-side right stamp="10 min" />
  </q-item>
  <q-item multiline>
    <q-item-side>
      <q-item-tile avatar>
        <img src="statics/boy-avatar.png">
      </q-item-tile>
    </q-item-side>
    <q-item-main>
      <q-item-tile label>Brunch <span>5</span></q-item-tile>
      <q-item-tile sublabel lines="2">
        John Doe John Doe John Doe John Doe John Doe John Doe
        John Doe John Doe John Doe John Doe John Doe John Doe
        John Doe John Doe John Doe John Doe
      </q-item-tile>
    </q-item-main>
    <q-item-side right>
      <q-item-tile stamp>10 min</q-item-tile>
      <q-item-tile icon="star" color="yellow" />
    </q-item-side>
  </q-item>
  <q-item multiline>
    <q-item-side avatar="statics/boy-avatar.png" />
    <q-item-main>
      <q-item-tile label lines="1">Brunch this weekend? Yeah, this weekend. Really. This one.</q-item-tile>
      <q-item-tile sublabel lines="2">
        <span>John Doe</span>
        -- I'll be in your neighborhood doing errands this
        weekend. Do you want to grab brunch?
      </q-item-tile>
    </q-item-main>
    <q-item-side right>
      <q-item-tile stamp>2 years</q-item-tile>
      <q-item-tile icon="mail" color="primary" />
    </q-item-side>
  </q-item>
</q-list>

<q-list inset-separator class="q-mt-md">
  <q-item>
    <q-item-side avatar="statics/boy-avatar.png" />
    <q-item-main label="Brunch this weekend?" />
    <q-item-side right>
      <q-btn flat round dense icon="more_vert">
        <q-popover>
          <q-list link>
            <q-item v-close-overlay>
              <q-item-main label="Reply" />
            </q-item>
            <q-item v-close-overlay>
              <q-item-main label="Forward" />
            </q-item>
            <q-item v-close-overlay>
              <q-item-main label="Delete" />
            </q-item>
          </q-list>
        </q-popover>
      </q-btn>
    </q-item-side>
  </q-item>
  <q-item>
    <q-item-side avatar="statics/boy-avatar.png" />
    <q-item-main label="Brunch this weekend?" />
    <q-item-side right>
      <q-chip square color="primary" class="shadow-2">10k</q-chip>
    </q-item-side>
  </q-item>
  <q-item>
    <q-item-side avatar="statics/boy-avatar.png" />
    <q-item-main label="Brunch this weekend?" />
    <q-item-side right>
      <q-item-tile stamp>10 min ago</q-item-tile>
      <span class="text-amber">
        <q-item-tile icon="star" v-for="n in 2" :key="n" />
      </span>
    </q-item-side>
  </q-item>
</q-list>
```

### Chat List
```html
<q-list highlight>
  <q-list-header>Recent chats</q-list-header>
  <q-item>
    <q-item-side>
      <q-item-tile avatar>
        <img src="statics/boy-avatar.png">
      </q-item-tile>
    </q-item-side>
    <q-item-main label="John Doe" />
    <q-item-side right>
      <q-item-tile icon="chat_bubble" color="green" />
    </q-item-side>
  </q-item>
  <q-item>
    <q-item-side avatar="statics/linux-avatar.png" />
    <q-item-main label="Jim Doe" />
    <q-item-side right icon="chat_bubble" />
  </q-item>
  <q-item-separator />
  <q-list-header>Previous chats</q-list-header>
  <q-item>
    <q-item-side avatar="statics/guy-avatar.png" />
    <q-item-main label="Jack Doe" />
  </q-item>
</q-list>
```

One more example:
```html
<q-list inset-separator>
  <q-item>
    <q-item-side icon="voice_chat" color="secondary" />
    <q-item-main label="Voice Chat with Joe" />
    <q-item-side right icon="voice_chat" color="secondary" />
  </q-item>
  <q-item>
    <q-item-side inverted icon="voice_chat" color="secondary" />
    <q-item-main label="Voice Chat with Joe" />
    <q-item-side right inverted icon="voice_chat" color="secondary" />
  </q-item>
  <q-item>
    <q-item-side inverted icon="voice_chat" color="amber" text-color="black" />
    <q-item-main label="Voice Chat with Joe" />
    <q-item-side right inverted icon="voice_chat" color="amber" text-color="black" />
  </q-item>
  <q-item>
    <q-item-side letter="J" color="secondary" />
    <q-item-main label="John Doe" />
    <q-item-side right letter="J" color="secondary" />
  </q-item>
  <q-item>
    <q-item-side inverted letter="J" color="secondary" />
    <q-item-main label="John Doe" />
    <q-item-side right inverted letter="J" color="secondary" />
  </q-item>
  <q-item>
    <q-item-side inverted letter="J" color="amber" text-color="black" />
    <q-item-main label="John Doe" />
    <q-item-side right inverted letter="J" color="amber" text-color="black" />
  </q-item>
</q-list>
```

### Folders and Files
```html
<q-list>
  <q-list-header inset>Folders</q-list-header>
  <q-item>
    <q-item-side icon="folder" inverted color="primary" />
    <q-item-main>
      <q-item-tile label>Photos</q-item-tile>
      <q-item-tile sublabel>February 22, 2016</q-item-tile>
    </q-item-main>
    <q-item-side right icon="info" color="green" />
  </q-item>
  <q-item-separator inset />
  <q-list-header inset>Files</q-list-header>
  <q-item>
    <q-item-side icon="assignment" inverted color="grey-6" />
    <q-item-main>
      <q-item-tile label>Expenses spreadsheet</q-item-tile>
      <q-item-tile sublabel>March 2nd, 2016</q-item-tile>
    </q-item-main>
    <q-item-side right icon="info" />
  </q-item>
</q-list>
```

### Settings (Embedding Form Components)
```html
<q-list link>
  <q-list-header>User controls</q-list-header>
  <q-item>
    <q-item-main>
      <q-item-tile label>Content filtering</q-item-tile>
      <q-item-tile sublabel>Set the content filtering level to restrict apps that can be downloaded</q-item-tile>
    </q-item-main>
  </q-item>
  <q-item>
    <q-item-main>
      <q-item-tile label>Password</q-item-tile>
      <q-item-tile sublabel>Require password for purchase or use password to restrict purchase</q-item-tile>
    </q-item-main>
  </q-item>
  <q-item-separator />
  <q-list-header>General</q-list-header>
  <q-item tag="label">
    <q-item-side>
      <q-checkbox v-model="checked_one" />
    </q-item-side>
    <q-item-main>
      <q-item-tile label>Notifications</q-item-tile>
      <q-item-tile sublabel>Notify me about updates to apps or games that I downloaded</q-item-tile>
    </q-item-main>
  </q-item>
  <q-item tag="label">
    <q-item-side>
      <q-checkbox v-model="checked_two" color="secondary" />
    </q-item-side>
    <q-item-main>
      <q-item-tile label>Sound</q-item-tile>
      <q-item-tile sublabel>Auto-update apps at anytime. Data charges may apply</q-item-tile>
    </q-item-main>
  </q-item>
  <q-item tag="label">
    <q-item-side>
      <q-checkbox v-model="checked_three" color="red" />
    </q-item-side>
    <q-item-main>
      <q-item-tile label>Auto-add widgets</q-item-tile>
      <q-item-tile sublabel>Automatically add home screen widgets</q-item-tile>
    </q-item-main>
  </q-item>
</q-list>

<q-list class="q-mt-md">
  <q-list-header>Radios</q-list-header>
  <q-item link tag="label">
    <q-item-side>
      <q-radio v-model="option" val="opt1" />
    </q-item-side>
    <q-item-main label="Option 1" />
  </q-item>
  <q-item link tag="label">
    <q-item-side>
      <q-radio color="secondary" v-model="option" val="opt2" />
    </q-item-side>
    <q-item-main>
      <q-item-tile label>Option 2</q-item-tile>
      <q-item-tile sublabel>Allows notifications</q-item-tile>
    </q-item-main>
  </q-item>
  <q-item link tag="label">
    <q-item-side>
      <q-radio color="amber" v-model="option" val="opt3" />
    </q-item-side>
    <q-item-main>
      <q-item-tile label>Option 3</q-item-tile>
      <q-item-tile sublabel lines="3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</q-item-tile>
    </q-item-main>
  </q-item>

  <q-item-separator />

  <q-list-header>Toggles</q-list-header>
  <q-item link tag="label">
    <q-item-main label="Events and reminders" />
    <q-item-side right>
      <q-toggle v-model="checked_one" />
    </q-item-side>
  </q-item>
  <q-item link tag="label" multiline>
    <q-item-main>
      <q-item-tile label>Events and reminders</q-item-tile>
      <q-item-tile sublabel>Lorem ipsum</q-item-tile>
    </q-item-main>
    <q-item-side right>
      <q-toggle v-model="checked_two" color="secondary" />
    </q-item-side>
  </q-item>
  <q-item link tag="label" multiline>
    <q-item-main>
      <q-item-tile label>Events and reminders</q-item-tile>
      <q-item-tile sublabel lines="3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      </q-item-tile>
    </q-item-main>
    <q-item-side right>
      <q-toggle v-model="checked_three" color="amber" />
    </q-item-side>
  </q-item>

  <q-item-separator />

  <q-list-header>Selects</q-list-header>
  <q-item>
    <q-item-side icon="supervisor_account" />
    <q-item-main>
      <q-select hide-underline class="q-ma-none full-width" v-model="select" :options="selectOptions" />
    </q-item-main>
  </q-item>
  <q-item>
    <q-item-side icon="supervisor_account" />
    <q-item-main>
      <q-select hide-underline class="q-ma-none full-width" multiple toggle v-model="multipleSelect" :options="selectOptions" />
    </q-item-main>
  </q-item>

  <q-item-separator />

  <q-list-header>Ranges</q-list-header>
  <q-item>
    <q-item-side icon="volume_down" />
    <q-item-main>
      <q-slider v-model="range" :min="0" :max="50" label />
    </q-item-main>
    <q-item-side right icon="volume_up" />
  </q-item>
  <q-item>
    <q-item-side icon="volume_down" />
    <q-item-main>
      <q-slider v-model="range" :min="0" :max="50" label color="amber" />
    </q-item-main>
    <q-item-side right icon="volume_up" />
  </q-item>
  <q-item>
    <q-item-side icon="monetization_on" />
    <q-item-main>
      <q-range v-model="doubleRange" :min="0" :max="50" label color="secondary" />
    </q-item-main>
  </q-item>
</q-list>
```

### Movies List
```html
<q-list>
  <q-list-header>Documentaries</q-list-header>
  <q-item>
    <q-item-side image="statics/mountains.jpg" />
    <q-item-main label="Mountains Documentary" />
    <q-item-side right icon="movie" />
  </q-item>
  <q-item>
    <q-item-side image="statics/quasar-logo.png" />
    <q-item-main>
      <q-item-tile label>Quasar</q-item-tile>
      <q-item-tile sublabel>Empower your development skills</q-item-tile>
    </q-item-main>
    <q-item-side right icon="movie" />
  </q-item>

  <q-item-separator />

  <q-list-header>Movies</q-list-header>
  <q-item multiline>
    <q-item-side image="statics/parallax1.jpg" />
    <q-item-main>
      <q-item-tile label>Must-see places</q-item-tile>
      <q-item-tile sublabel lines="3">
        The world in which we live is full of wonderful places that most of us do not know
        they really exist. Here you can see some of those breathtaking places  around the world.
        Enjoy!
      </q-item-tile>
    </q-item-main>
    <q-item-side right icon="movie" />
  </q-item>
  <q-item multiline>
    <q-item-side image="statics/parallax2.jpg" />
    <q-item-main>
      <q-item-tile label>Building a Bridge</q-item-tile>
      <q-item-tile sublabel lines="5">
        A bridge is one of those things that are often taken for granted until you don’t have one,
        especially if you live on a rural property and there’s a creek between your house and the
        county road. John Doe had plans to build a new bridge along with building a new house on
        his property, but plans for the bridge were made top priority when a wayward truck carried
        too much weight over the old bridge and it collapsed.
      </q-item-tile>
    </q-item-main>
    <q-item-side right icon="movie" />
  </q-item>
</q-list>
```

### Phonebook List
```html
<q-list>
  <q-item>
    <q-item-side icon="phone" color="primary" />
    <q-item-main>
      <q-item-tile label>(650) 555 - 1234</q-item-tile>
      <q-item-tile sublabel>Mobile</q-item-tile>
    </q-item-main>
    <q-item-side right icon="chat_bubble" color="green" />
  </q-item>
  <q-item>
    <q-item-main inset>
      <q-item-tile label>(650) 555 - 2345</q-item-tile>
      <q-item-tile sublabel>Office</q-item-tile>
    </q-item-main>
    <q-item-side right icon="chat_bubble" />
  </q-item>
  <q-item>
    <q-item-main inset>
      <q-item-tile label>(650) 555 - 3456</q-item-tile>
      <q-item-tile sublabel>Home</q-item-tile>
    </q-item-main>
    <q-item-side right icon="chat_bubble" />
  </q-item>
  <q-item-separator inset />
  <q-item>
    <q-item-side icon="mail" color="primary" />
    <q-item-main>
      <q-item-tile label>john@doe.com</q-item-tile>
      <q-item-tile sublabel>Personal</q-item-tile>
    </q-item-main>
  </q-item>
  <q-item>
    <q-item-main inset>
      <q-item-tile label>john.doe@some-company.com</q-item-tile>
      <q-item-tile sublabel>Office</q-item-tile>
    </q-item-main>
  </q-item>
</q-list>
```
