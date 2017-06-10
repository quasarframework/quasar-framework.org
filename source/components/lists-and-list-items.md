title: Lists and List Items
---
Quasar Lists and List Items are a group of components which can work together to present multiple line items vertically as a single continuous element. They are best suited for displaying similar data types as rows of information, such as a contact list, a playlist, or menu. Each row is called an Item. Items can also be used outside of a List.

Lists can encapsulate Items or Item-like components, for example [QCollapsible](/components/collapsible.html) or [QSideLink](/components/layout-side-links.html) (latter if setting `item` property).

List Items have three areas of interest:
* **left side** and **right side** (usually equipped for supplemental actions represented by icons, avatars, images or letters, but not limited to only these)
* **main content** which usually is filled with a label (title) and sublabel (subtitle), form components, or anything else for that matter.

<input type="hidden" data-fullpage-demo="css/list/item">

## Basic Usage
We'll cover each component on its own section later on, but for now, take a look to get a glimpse of how to structure your templates when using Lists.

``` html
<q-list highlight>
  <q-list-header>Recent chats</q-list-header>
  <q-item>
    <q-item-side avatar="/statics/boy-avatar.png" />
    <q-item-main>
      <q-item-tile label>John Doe</q-item-tile>
      <q-item-tile sublabel>Quasar enthusiast</q-item-tile>
    </q-item-main>
    <q-item-side right>
      <q-item-tile icon="chat_bubble" color="green" />
    </q-item-side>
  </q-item>
  <q-item>
    <q-item-side>
      <q-item-tile avatar>
        <img src="~assets/boy-avatar.png" />
      </q-item-tile>
    </q-item-side>
    <q-item-main label="John Doe" sublabel="Quasar enthusiast" />
    <q-item-side right icon="chat_bubble" />
  </q-item>
  <q-item-delimiter />
  <q-list-header>Previous chats</q-list-header>
  <q-item>
    <q-item-side avatar="/statics/guy-avatar.png" />
    <q-item-main label="Jack Doe" />
  </q-item>
</q-list>
```

Notice that QItemMain and QItemSide can contain QItemTiles or for convenience you can use their own properties to define the content.

Due to how Webpack works in creating the bundle for your App, in some cases you may need to use QItemTile like for examples on avatars or images. The reason is simple: if you use QItemSide `avatar` property, you must supply the path to the statics folder and cannot use `assets` folder or relative paths. The latter two can instead be used with a QItemTile wrapping an `<img>` HTML tag. Look closely at image paths in the example above (`/statics/guy-avata.png` vs `~assets/boy-avatar.png`). Also read about [App Handling Static Assets](/guide/app-handling-static-assets.html) to understand how Webpack includes assets into the bundle.

## Components

These are the Quasar components that you can use to define lists and list items:
* QList (encapsulating QItems and all other List related components)
* QListHeader (header of a section in QList)
* QItemDelimiter (external Item delimiter/separator)
* QItem (encapsulating everything an Item contains)
* QItemSide (left or right side)
* QItemMain (for main content of an Item)
* QItemTile (for individual parts of QItemSide and QItemMain, like label, icon, avatar, image, …)

![Quasar List and List Items](/images/list-and-list-items.svg "Quasar List and List Items")

### QList
QList encapsulates all other components mentioned. It's not mandatory but helps with keeping a good design and can also define some properties that will be applied to all QItems (or QItem-like) like multiline, delimiter, link, highlight and so on.

| Vue Property | Type | Description |
| --- | --- | --- | --- |
| `striped` | Boolean | Apply highlight to QItems intermitently, starting with second QItem. |
| `striped-odd` | Boolean | Apply highlight to QItems intermitently, starting with first QItem. |
| `highlight` | Boolean | Apply highlight to all QItems. This works only on desktop when user hovers QItems. |
| `link` | Boolean | Apply highlight and a pointer cursor to all QItems. |
| `dense` | Boolean | Make QItems dense. |
| `sparse` | Boolean | Make QItems sparse. |
| `multiline` | Boolean | Make QItems multiline. |
| `delimiter` | Boolean | Make QItems have a delimiter between them. |
| `inset-delimiter` | Boolean | Make QItems have an inset delimiter between them. |
| `no-border` | Boolean | Remove the default border around QList. |

### QListHeader
Within QList, you can display a section header / title.

| Vue Property | Type | Description |
| --- | --- | --- | --- |
| `inset` | Boolean | Place an inset delimiter. |

```html
<q-list>
  <q-list-header>Folders</q-list-header>
  <!-- insert QItems... -->

  <q-list-header>Files</q-list-header>
  <!-- insert QItems... -->
</q-list>
```

### QItemDelimiter
If you want QItem external delimiters (there are internal ones too as you can see on QItem's description later on this page), use QItemDelimiter component. Useful also to separate different sections of your QList, like for example before a QListHeader.

| Vue Property | Type | Description |
| --- | --- | --- | --- |
| `inset` | Boolean | Place an inset delimiter. |

```html
<q-list>
  <q-list-header>Folders</q-list-header>
  <!-- insert QItems... -->

  <q-item-delimiter />

  <q-list-header>Files</q-list-header>
  <!-- insert QItems... -->
</q-list>

<!-- and/or -->
<q-list>
  <q-item ...>...</q-item>

  <!-- Inset delimiter example -->
  <q-item-delimiter inset />

  <q-item ...>...</q-item>
  <q-item-delimiter />
  <q-item ...>...</q-item>
  <q-item-delimiter />
  <q-list-header>Files</q-list-header>
  <q-item ...>...</q-item>
</q-list>
```

### QItem

| Vue Property | Type | Description |
| --- | --- | --- | --- |
| `dense` | Boolean | Make QItem dense (narrow paddings). |
| `sparse` | Boolean | Make QItem sparse (large paddings). |
| `delimiter` | Boolean | Make QItem have a delimiter between it and previous QItem. |
| `inset-delimiter` | Boolean | Make QItem have an inset delimiter between it and previous QItem. |
| `multiline` | Boolean | Make QItem multiline. Vertically aligns QItem sides to top. Useful for more than 2-3 lines QItem content. |
| `highlight` | Boolean | Apply highlight to QItem. Works only on desktop when user hovers it. |
| `link` | Boolean | Apply highlight and a pointer cursor to QItem. |
| `tag` | String | Default HTML tag used is 'div', but this can be any HTML tag if you need to. Read below for more information. |

Also check next section for more properties and to learn how you can use your QItem as a Router Link.

#### Using QItem as a Router Link
If you want your QItem to act the same as Vue's `<router-link>`, then you can use these additional properties (which work exactly the same as `<router-link>`):

| Property | Type | Description |
| --- | --- | --- | --- |
| `to` | String / Object | Route to navigate to |
| `exact` | Boolean | Match the exact route specified (and not also its children) when adding `router-link-active` CSS class. |
| `append` | Boolean | Append route definition to current route when navigating. |
| `replace` | Boolean | Replaces current route with the new one instead of adding it to the window history queue. |

For more details on these properties, please refer to Vue Router documentation [here](http://router.vuejs.org/en/api/router-link.html).

#### Render with specific HTML tag
Example on `tag` property usage below. In this case, we take advantage of the `<label>` tag that browsers connect to checkboxes (QCheckbox, QToggle) or radio inputs (QRadio). When a `<label>` is clicked/tapped, then the wrapped checkboxes toggle their state (check / uncheck) and wrapped radios are being selected.
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
| `right` | Boolean | Applies necessary design tweaks for right side of QItem. |
| `icon` | String | Icon to use. Either use an icon, image, avatar or letter. |
| `image` | String | URL to image to use (point to statics). Either use an icon, image, avatar or letter. |
| `avatar` | String | URL to avatar to use (point to statics). Either use an icon, image, avatar or letter. |
| `letter` | String | One character String to define a letter. Either use an icon, image, avatar or letter. |
| `stamp` | String | For right side only. One character String to define a letter. Either use an icon, image, avatar or letter. |
| `tag` | String | Default HTML tag that QItemTile gets rendered with is 'div', but this can be any HTML tag if you need to. |

Use the icon, image, avatar, letter or stamp properties or, for more control, insert QItemTiles instead. Don't use both ways though.

### QItemMain

| Vue Property | Type | Description |
| --- | --- | --- | --- |
| `label` | String | Label to use as title. |
| `sublabel` | String | Label to use as subtitle. |
| `label-lines` | String / Number | Number of lines the label can span to. |
| `sublabel-lines` | String / Number | Number of lines the sublabel can span to. |
| `inset` | Boolean | Useful when QItem has no left side, but you want to align your content as if it had a left side. |
| `tag` | String | Default HTML tag that QItemTile gets rendered with is 'div', but this can be any HTML tag if you need to. |

Use the label properties or, for more control, insert QItemTiles instead to define the label and sublabel. Don't use both ways though.

### QItemTile
QItemTile can be used for more control over the contents of left/right side and main content of QItem.

| Vue Property | Type | Description |
| --- | --- | --- | --- |
| `color` | String | Use a color from [Quasar Color Palette](/components/color-palette.html). |
| `icon` | String | Icon to use. Either use an icon, image, avatar or letter as props. |
| `image` | Boolean | Encapsulates an image. Its content must be an `<img>` with `src` attribute pointing to statics. Either use an icon, image, avatar or letter as props. |
| `avatar` | Boolean | Encapsulates an avatar image. Its content must be an `<img>` with `src` attribute pointing to statics. Either use an icon, image, avatar or letter as props. |
| `letter` | String | One character String to define a letter. Either use an icon, image, avatar or letter as props. |
| `tag` | String | Default HTML tag that QItemTile gets rendered with is 'div', but this can be any HTML tag if you need to. |

More props available, but use these only within QItemMain:

| Vue Property | Type | Description |
| --- | --- | --- | --- |
| `label` | String | Encapsulates the label / title of QItem. |
| `sublabel` | String | Encapsulates the sub-label / sub-title of QItem. |
| `lines` | String / Number | Number of lines the label/sublacel can span to. Ellipsis are used when overflowing. Use only in conjunction with `label` and `sublabel`. |


## Using along QCollapsible & QSideLink
[QCollapsible](/components/collapsible.html) and [QSideLink](/components/layout-side-links.html) are QItem wrappers, so you can use them along QItems within a QList. Here are two examples:

```html
<!--
  Notice we use QCollapsibles and QItems
  as direct children of QList.

  We are basically building a menu.
-->
<q-list delimiter>
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

Another complex example used on one of the sides of a QLayout, describing a menu with QItems, QCollapsible and QSideLinks:

```html
<q-list delimiter no-border>
  <q-item>
    <q-item-side avatar="/statics/boy-avatar.png" />
    <q-item-main>
      <q-item-tile label>John Doe</q-item-tile>
      <q-item-tile sublabel>Administrator</q-item-tile>
    </q-item-main>
  </q-item-main>

  <q-item-delimiter />
  <q-list-header>Menu</q-list-header>

  <q-side-link item icon="content_paste" to="/app" exact>
    <q-item-main label="Dashboard" />
  </q-side-link>

  <q-side-link item icon="assignment" to="/app/registrations">
    <q-item-main label="Registrations" />
  </q-side-link>

  <!--
    Notice "indent" Boolean property on QCollapsible
    which will make the sub-menu be indented.
    Also, notice the "label" property which defines the
    name of the menu item which opens up the sub-menu.
  -->
  <q-collapsible indent icon="event" label="Event" opened>
    <q-side-link item to="/app/event">
      <q-item-main label="Competitions" />
    </q-side-link>
    <q-collapsible menu label="Competitions" opened>
      <div class="scroll" style="max-height: 400px">
        <q-side-link
          item
          v-for="competition in competitions"
          :key="competition"
          :to="`/app/competitions/${competition.id}`"
          exact
        >
          <q-item-main :label="competition.name" />
        </q-side-link>
      </div>
    </q-collapsible>

    <q-side-link item to="/app/other-info">
      <q-item-main label="Other Information" />
    </q-side-link>
  </q-collapsible>
</q-list>
```

## More Examples

### Email list
```html
<q-list highlight inset-delimiter style="max-width: 400px">
  <q-item>
    <q-item-side avatar="/statics/boy-avatar.png" />
    <q-item-main label="Brunch this weekend? Brunch this weekend? Brunch this weekend?" label-lines="1" />
    <q-item-side right stamp="1 min" />
  </q-item>
  <q-item multiline>
    <q-item-side avatar="/statics/boy-avatar.png" />
    <q-item-main
      label="Brunch this weekend? Brunch this weekend? Brunch this weekend?"
      label-lines="1"
      sublabel="John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe"
      sublabel-lines="2"
    />
    <q-item-side right stamp="1 week<br>ago" />
  </q-item>
  <q-item multiline>
    <q-item-side avatar="/statics/boy-avatar.png" />
    <q-item-main
      label="Brunch this weekend? Brunch this weekend? Brunch this weekend?"
      label-lines="1"
      sublabel="John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe"
    />
    <q-item-side right stamp="10 min" />
  </q-item>

  <q-item multiline>
    <q-item-side>
      <q-item-tile avatar>
        <img src="~assets/boy-avatar.png" />
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
    </q-item-side>
  </q-item>

  <q-item multiline>
    <q-item-side avatar="/statics/boy-avatar.png" />
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
      <q-item-tile icon="mail" />
    </q-item-side>
  </q-item>
</q-list>
```

### Embedding Components on Right Side
```html
<q-list inset-delimiter>
  <q-item>
    <q-item-side avatar="/statics/boy-avatar.png" />
    <q-item-main label="Brunch this weekend?" />
    <q-item-side right icon="more_vert">
      <q-popover ref="popover">
        <q-list link>
          <q-item @click="$refs.popover.close()">
            <q-item-main label="Reply" />
          </q-item>
          <q-item @click="$refs.popover.close()">
            <q-item-main label="Forward" />
          </q-item>
          <q-item @click="$refs.popover.close()">
            <q-item-main label="Delete" />
          </q-item>
        </q-list>
      </q-popover>
    </q-item-side>
  </q-item>
  <q-item>
    <q-item-side avatar="/statics/boy-avatar.png" />
    <q-item-main label="Brunch this weekend?" />
    <q-item-side right>
      <q-chip square color="primary" class="shadow-2">10k</q-chip>
    </q-item-side>
  </q-item>
  <q-item>
    <q-item-side avatar="/statics/boy-avatar.png" />
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
    <q-item-side avatar="/statics/boy-avatar.png" />
    <q-item-main label="John Doe" />
    <q-item-side right>
      <q-item-tile icon="chat_bubble" color="green" />
    </q-item-side>
  </q-item>
  <q-item>
    <q-item-side avatar="/statics/boy-avatar.png" />
    <q-item-main label="John Doe" />
    <q-item-side right icon="chat_bubble" />
  </q-item>
  <q-item-delimiter />
  <q-list-header>Previous chats</q-list-header>
  <q-item>
    <q-item-side avatar="/statics/guy-avatar.png" />
    <q-item-main label="Jack Doe" />
  </q-item>
</q-list>
```

One more example:
```html
<q-list>
  <q-item>
    <q-item-side icon="star" color="yellow" />
    <q-item-main label="John Joe" />
    <q-item-side right>
      <q-item-tile avatar>
        <img src="~assets/boy-avatar.png">
      </q-item-tile>
    </q-item-side>
  </q-item>
  <q-item-delimiter inset />
  <q-item>
    <q-item-side letter="D" />
    <q-item-main label="John Joe" />
    <q-item-side right avatar="/statics/boy-avatar.png" />
  </q-item>
  <q-item>
    <q-item-side letter="J" />
    <q-item-main label="Jim Jefferies" />
    <q-item-side right avatar="/statics/linux-avatar.png" />
  </q-item>
</q-list>
```

### Folders and Files
```html
<q-list>
  <q-list-header inset>Folders</q-list-header>
  <q-item v-for="n in 3" :key="n">
    <q-item-side icon="folder" inverted color="grey-6" />
    <q-item-main>
      <q-item-tile label>Photos</q-item-tile>
      <q-item-tile sublabel>February 22, 2016</q-item-tile>
    </q-item-main>
    </q-item-side right icon="info" />
  </q-item>
  <q-item-delimiter inset />
  <q-list-header inset>Files</q-list-header>
  <q-item v-for="n in 3" :key="n">
    <q-item-side icon="assignment" inverted color="grey-6" />
    <q-item-main>
      <q-item-tile label>Vacation</q-item-tile>
      <q-item-tile sublabel>February 22, 2016</q-item-tile>
    </q-item-main>
    </q-item-side right icon="info" />
  </q-item>
</q-list>
```

### Settings
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
  <q-item-delimiter />
  <q-list-header>General</q-list-header>
  <q-item tag="label">
    <q-item-side>
      <q-checkbox v-model="checked" />
    </q-item-side>
    <q-item-main>
      <q-item-tile label>Notifications</q-item-tile>
      <q-item-tile sublabel>Notify me about updates to apps or games that I downloaded</q-item-tile>
    </q-item-main>
  </q-item>
  <q-item tag="label">
    <q-item-side>
      <q-checkbox v-model="checked" />
    </q-item-side>
    <q-item-main>
      <q-item-tile label>Sound</q-item-tile>
      <q-item-tile sublabel>Auto-update apps at anytime. Data charges may apply</q-item-tile>
    </q-item-main>
  </q-item>
  <q-item tag="label">
    <q-item-side>
      <q-checkbox v-model="checked" />
    </q-item-side>
    <q-item-main>
      <q-item-tile label>Auto-add widgets</q-item-tile>
      <q-item-tile sublabel>Automatically add home screen widgets</q-item-tile>
    </q-item-main>
  </q-item>
</q-list>
```

### Embedding Form Components
```html
<q-list link>
  <q-list-header>Radios</q-list-header>
  <q-item tag="label">
    <q-item-side>
      <q-radio v-model="option" val="opt1"></q-radio>
    </q-item-side>
    <q-item-main label="Option 1" />
  </q-item>
  <q-item tag="label">
    <q-item-side>
      <q-radio color="purple" v-model="option" val="opt2"></q-radio>
    </q-item-side>
    <q-item-main>
      <q-item-tile label>Option 2</q-item-tile>
      <q-item-tile sublabel>Allows notifications</q-item-tile>
    </q-item-main>
  </q-item>
  <q-item tag="label">
    <q-item-side>
      <q-radio color="red" v-model="option" val="opt3"></q-radio>
    </q-item-side>
    <q-item-main>
      <q-item-tile label>Option 3</q-item-tile>
      <q-item-tile sublabel lines="3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</q-item-tile>
    </q-item-main>
  </q-item>

  <q-item-delimiter />
  <q-list-header>Toggles</q-list-header>
  <q-item tag="label">
    <q-item-main label="Events and reminders" />
    <q-item-side right>
      <q-toggle v-model="checked"></q-toggle>
    </q-item-side>
  </q-item>
  <q-item tag="label" multiline>
    <q-item-main>
      <q-item-tile label>Events and reminders</q-item-tile>
      <q-item-tile sublabel>Lorem ipsum</q-item-tile>
    </q-item-main>
    <q-item-side right>
      <q-toggle v-model="checked" color="purple"></q-toggle>
    </q-item-side>
  </q-item>
  <q-item tag="label" multiline>
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
      <q-toggle v-model="checked" color="red"></q-toggle>
    </q-item-side>
  </q-item>

  <q-item-delimiter />
  <q-list-header>Selects</q-list-header>
  <q-item>
    <q-item-side icon="supervisor_account" />
    <q-item-main>
      <q-select class="full-width" v-model="select" :options="selectOptions" />
    </q-item-main>
  </q-item>
  <q-item>
    <q-item-side icon="supervisor_account" />
    <q-item-main>
      <q-select class="full-width" multiple checkbox v-model="multipleSelect" :options="selectOptions" />
    </q-item-main>
  </q-item>

  <q-item-delimiter />
  <q-list-header>Ranges</q-list-header>
  <q-item>
    <q-item-side icon="volume_down" />
    <q-item-main>
      <q-range v-model="range" :min="0" :max="50" label />
    </q-item-main>
    <q-item-side right icon="volume_up" />
  </q-item>
  <q-item>
    <q-item-side icon="volume_down" />
    <q-item-main>
      <q-range v-model="range" :min="0" :max="50" label />
    </q-item-main>
    <q-item-side right icon="volume_up" />
  </q-item>
  <q-item>
    <q-item-side icon="euro_symbol" />
    <q-item-main>
      <q-double-range v-model="doubleRange" :min="0" :max="50" label />
    </q-item-main>
  </q-item>
</q-list>
```

### Movies List
```html
<q-list>
  <q-list-header>Movies</q-list-header>
  <q-item>
    <q-item-side image="/statics/mountains.jpg" />
    <q-item-main label="Mountains Documentary" />
    <q-item-side right icon="movie" />
  </q-item>
  <q-item>
    <q-item-side image="/statics/mountains.jpg" />
    <q-item-main>
      <q-item-tile label>Mountains Documentary</q-item-tile>
      <q-item-tile sublabel>For passionates only</q-item-tile>
    </q-item-main>
    <q-item-side right icon="movie" />
  </q-item>
  <q-item>
    <q-item-side image="/statics/mountains.jpg" />
    <q-item-main>
      <q-item-tile label>Mountains Documentary</q-item-tile>
      <q-item-tile sublabel lines="3">
        For passionates only For passionates only For passionates only For passionates only For passionates only
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
    <q-item-side right icon="chat_bubble" />
  </q-item>
  <q-item>
    <q-item-main inset>
      <q-item-tile label>(650) 555 - 1234</q-item-tile>
      <q-item-tile sublabel>Mobile</q-item-tile>
    </q-item-main>
    <q-item-side right icon="chat_bubble" />
  </q-item>
  <q-item-delimiter inset />
  <q-item>
    <q-item-side icon="mail" color="primary" />
    <q-item-main>
      <q-item-tile label>john@doe.com</q-item-tile>
      <q-item-tile sublabel>Personal</q-item-tile>
    </q-item-main>
  </q-item>
  <q-item>
    <q-item-main inset>
      <q-item-tile label>john@doe.com</q-item-tile>
      <q-item-tile sublabel>Personal</q-item-tile>
    </q-item-main>
  </q-item>
</q-list>
```
