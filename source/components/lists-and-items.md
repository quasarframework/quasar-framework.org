title: Lists
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


Quasar Lists are used to display rows of information, such as a contact list, a playlist, or menu. Each row is called an item. Items can also be used outside of a list.

Lists can also be used (and it's also recommended) on Quasar Drawers. There's even a `<q-drawer-link>` component based on List Items.

If you have some basic lists that you wish to diplay, you can also use the [ListItem component](/components/list-item.html).

> We'll learn to use Lists and List Items gradually. Make sure you don't skip steps and follow this page.

Scroll down to see the demos if on desktop.

## List Basics
<input type="hidden" data-demo="css/list/basic">

``` html
<p class="caption">Basic List</p>
  <div class="list">
    <div class="item" v-for="n in 2">
      <div class="item-content">
        List Item
      </div>
    </div>
  </div>

  <p class="caption">Dense List</p>
  <div class="list dense">
    <div class="item dense" v-for="n in 3">
      <div class="item-content">
        List Item
      </div>
    </div>
  </div>

  <p class="caption">Large List</p>
  <div class="list">
    <div class="item large" v-for="n in 3">
      <div class="item-content">
        List Item
      </div>
    </div>
  </div>

  <p class="caption">No Border</p>
  <div class="list no-border">
    <div class="item" v-for="n in 2">
      <div class="item-content">
        List Item
      </div>
    </div>
  </div>

  <p class="caption">Striped</p>
  <div class="list striped">
    <div class="item" v-for="n in 6">
      <div class="item-content">
        List Item
      </div>
    </div>
  </div>

  <p class="caption">Delimiter Between Items</p>
  <div class="list">
    <template v-for="n in 3">
      <div class="item">
        <div class="item-content">
          List Item
        </div>
      </div>
      <hr>
    </template>
  </div>

  <p class="caption">Delimiter within Items</p>
  <div class="list item-delimiter">
    <div class="item" v-for="n in 2">
      <div class="item-content">
        List Item
      </div>
    </div>
    <div class="item delimiter">
      <div class="item-content">
        List Item
      </div>
    </div>
  </div>

  <p class="caption">Platform Delimiter - changes based on Theme</p>
  <div class="list platform-delimiter">
    <div class="item" v-for="n in 3">
      <div class="item-content">
        List Item
      </div>
    </div>
  </div>

  <p class="caption">Inset Delimiter within Items</p>
  <div class="list inset-delimiter">
    <div class="item" v-for="n in 3">
      <div class="item-content inset">
        List Item
      </div>
    </div>
  </div>

  <p class="caption">List Labels</p>
  <div class="list">
    <div class="list-label">List Label</div>
    <div class="item" v-for="n in 2">
      <div class="item-content">
        List Item
      </div>
    </div>
    <hr>
    <div class="list-label">Another List Label</div>
    <div class="item" v-for="n in 3">
      <div class="item-content">
        List Item
      </div>
    </div>
  </div>

  <p class="caption">Inset: Items, Delimiters and Labels</p>
  <div class="list">
    <div class="item">
      <div class="item-content inset">
        List Item
      </div>
    </div>
    <hr class="inset">
    <div class="list-label inset">Inset List Label</div>
    <div class="item" v-for="n in 2">
      <div class="item-content inset">
        List Item
      </div>
    </div>
    <hr class="inset">
    <div class="item">
      <div class="item-content inset">
        List Item
      </div>
    </div>
  </div>

  <p class="caption">
    Highlight (Desktop only)
    <small>
      <br>
      <span class="mobile-only">
        On desktop, hovering the list items will change their background color temporarily.
      </span>
      <span class="desktop-only">
        Hover the list items to change their background color temporarily.
      </span>
    </small>
  </p>
  <div class="list highlight">
    <div class="item" v-for="n in 2">
      <div class="item-content">
        List Item
      </div>
    </div>
  </div>

  <p class="caption">
    Link Items (Desktop only)
    <small>
      <br>
      <span class="mobile-only">
        On desktop, hovering the list items will change their background color temporarily and the cursor will be a pointer.
      </span>
      <span class="desktop-only">
        Hover the list items to change their background color temporarily and change cursor to pointer.
      </span>
    </small>
  </p>
  <div class="list link">
    <div class="item" v-for="n in 2">
      <div class="item-content">
        List Item
      </div>
    </div>
  </div>
```

## List Items
<input type="hidden" data-demo="css/list/item">

``` html
<p class="caption">Primary</p>
<div class="list item-inset-delimiter">
  <div class="item">
    <div class="item-primary"><q-icon name="assignment_ind" /></div>
    <div class="item-content">Icon as Primary</div>
  </div>
  <div class="item">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content">Avatar as Primary</div>
  </div>
  <div class="item">
    <div class="item-primary"><span class="item-letter">Q</span></div>
    <div class="item-content">One character as Primary</div>
  </div>
</div>
<div class="list item-inset-delimiter">
  <div class="item">
    <div class="item-primary"><q-icon name="assignment_ind" /></div>
    <div class="item-content">Icon as Primary</div>
  </div>
  <div class="item">
    <div class="item-primary"><q-icon name="cloud" /></div>
    <div class="item-content">Icon as Primary</div>
  </div>

<div class="list item-inset-delimiter big-inset">
  <div class="item">
    <div class="item-primary big"><q-icon name="assignment_ind" /></div>
    <div class="item-content">Icon as Primary</div>
  </div>
  <div class="item">
    <div class="item-primary big"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content">Avatar as Primary</div>
  </div>
  <div class="item">
    <div class="item-primary big"><span class="item-letter">Q</span></div>
    <div class="item-content">One character as Primary</div>
  </div>
</div>

<p class="caption">Secondary</p>
<div class="list">
  <div class="item">
    <div class="item-content">Icon as Secondary</div>
    <div class="item-secondary"><q-icon name="info" /></div>
  </div>
  <hr>
  <div class="item">
    <div class="item-content">Avatar as Secondary</div>
    <div class="item-secondary"><img src="/statics/boy-avatar.png"></div>
  </div>
  <hr>
  <div class="item">
    <div class="item-content">One character as Secondary</div>
    <div class="item-secondary"><span class="item-letter">Q</span></div>
  </div>
</div>

<div class="list">
  <div class="item">
    <div class="item-content">Icon as Secondary</div>
    <div class="big item-secondary"><q-icon name="info" /></div>
  </div>
  <hr>
  <div class="item">
    <div class="item-content">Avatar as Secondary</div>
    <div class="big item-secondary"><img src="/statics/boy-avatar.png"></div>
  </div>
  <hr>
  <div class="item">
    <div class="item-content">One character as Secondary</div>
    <div class="big item-secondary"><span class="item-letter">Q</span></div>
  </div>
</div>

<p class="caption">Example Items with Primary and Secondary</p>
<div class="list item-inset-delimiter">
  <div class="item">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content">Jack</div>
    <div class="item-secondary"><q-icon name="chat_bubble" /></div>
  </div>
  <div class="item">
    <div class="item-primary"><img src="/statics/linux-avatar.png"></div>
    <div class="item-content">Jim's Photos</div>
    <div class="item-secondary"><img src="/statics/mountains.jpg"></div>
  </div>
  <div class="item">
    <div class="item-primary"><q-icon name="voice_chat" /></div>
    <div class="item-content">Voice Chat with Joe</div>
    <div class="item-secondary"><img src="/statics/boy-avatar.png"></div>
  </div>
  <div class="item">
    <div class="item-primary"><q-icon name="voice_chat" class="inverted bg-primary" /></div>
    <div class="item-content">Voice Chat with Joe</div>
    <div class="item-secondary"><img src="/statics/boy-avatar.png"></div>
  </div>
  <div class="item">
    <div class="item-primary"><div class="item-letter">J</div></div>
    <div class="item-content">John Doe</div>
    <div class="item-secondary"><img src="/statics/guy-avatar.png"></div>
  </div>
</div>

<!-- Note this creates 3 lists with dense and large classes! -->
<p class="caption">Stamp and Truncated Content</p>
<div class="list highlight" style="max-width: 400px" v-for="n in ['', 'dense', 'large']" :class="n">
  <div class="list-label capitalize" v-if="n !== ''">{{ n }}</div>
  <div class="item">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content ellipsis">
      Brunch this weekend? Brunch this weekend? Brunch this weekend?
    </div>
    <div class="item-secondary">
      <div class="item-stamp">1 week<br>ago</div>
    </div>
  </div>
  <div class="item multiple-lines">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content text">
      <div class="ellipsis">Brunch this weekend? Brunch this weekend? Brunch this weekend?</div>
      <div>John Doe</div>
    </div>
    <div class="item-secondary">
      <div class="item-stamp">10 min</div>
    </div>
  </div>

  <div class="item multiple-lines">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content text">
      <div class="ellipsis">Brunch <span>5</span></div>
      <div class="ellipsis">John Doe</div>
    </div>
    <div class="item-secondary">
      <div class="item-stamp">10 min</div>
    </div>
  </div>

  <div class="item multiple-lines">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content text">
      <div>Brunch this weekend? Yeah, this weekend. Really. This one.</div>
      <div>
        <span>John Doe</span>
        -- I'll be in your neighborhood doing errands this
        weekend. Do you want to grab brunch?
      </div>
    </div>
    <div class="item-secondary">
      <div class="item-stamp">2 years</div>
      <q-icon name="mail" />
    </div>
  </div>
  <div class="item multiple-lines">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content text">
      <div class="ellipsis">Brunch this weekend? Yeah, this weekend. Really. This one.</div>
      <div class="ellipsis-2-lines">
        <span>John Doe</span>
        -- I'll be in your neighborhood doing errands this
        weekend. Do you want to grab brunch?
      </div>
    </div>
    <div class="item-secondary">
      <div class="item-stamp">2 years</div>
      <q-icon name="mail" />
    </div>
  </div>
</div>

<p class="caption">List Item with Secondary Actions</p>
<div class="list inset-delimiter">
  <div class="item">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content">
      <div class="ellipsis">Brunch this weekend?</div>
    </div>
    <div class="item-secondary">
      <q-icon name="more_vert">
        <q-popover ref="popover">
          <div class="list">
            <div class="item link" @click="$refs.popover.close()">
              <div class="item-content">Reply</div>
            </div>
            <div class="item link" @click="$refs.popover.close()">
              <div class="item-content">Forward</div>
            </div>
            <div class="item link" @click="$refs.popover.close()">
              <div class="item-content">Delete</div>
            </div>
          </div>
        </q-popover>
      </q-icon>
    </div>
  </div>
</div>

<p class="caption">Item with different secondaries</p>
<div class="list inset-delimiter">
  <div class="item">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content">
      <div class="ellipsis">Brunch this weekend?</div>
    </div>
    <div class="item-secondary">
      <q-icon name="more_vert">
        <q-popover ref="popover">
          <div class="list">
            <div class="item link" @click="$refs.popover.close()">
              <div class="item-content">Reply</div>
            </div>
            <div class="item link" @click="$refs.popover.close()">
              <div class="item-content">Forward</div>
            </div>
            <div class="item link" @click="$refs.popover.close()">
              <div class="item-content">Delete</div>
            </div>
          </div>
        </q-popover>
      </q-icon>
    </div>
  </div>
  <div class="item">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content">
      <div class="ellipsis">Brunch this weekend?</div>
    </div>
    <div class="item-secondary">
      <q-chip color="secondary" class="shadow-1">10k</q-chip>
    </div>
  </div>
  <div class="item">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content">
      <div class="ellipsis">Brunch this weekend?</div>
    </div>
    <div class="item-secondary">
      <div class="item-stamp">10 min ago</div>
      <span class="text-amber">
        <q-icon name="star" />
        <q-icon name="star" />
      </span>
    </div>
  </div>
</div>
```

### Router-Link with List Items

``` html
<div class="list link item-inset-delimiter">
  <router-link
    tag="div"
    class="item"
    to="/some/path/in/your/app"
  >
    <div class="item-primary"><q-icon name="cloud"/></div>
    <div class="item-content">Go to the cloud!</div>
    <div class="item-secondary">
      <q-icon name="info" />
      <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
        <strong>Click here to go to the cloud! And yes, Quasar is like living on Cloud 9! Isn't it?</strong>
      </q-tooltip>
    </div>
  </router-link>
</div>
```

## Multi-line Items
<input type="hidden" data-demo="css/list/multiline">

Multiple line items are usually for some Form components that exceed the height of a predefined one, two or three lines item.

``` html
<div class="list">
  <div class="list-label">People</div>
  <div class="item">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content text">
      John
    </div>
    <div class="item-secondary"><q-icon name="chat_bubble" /></div>
  </div>
  <div class="item two-lines">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content text">
      <div>Jim</div>
      <div>Javascript wiz kid</div>
    </div>
    <div class="item-secondary"><q-icon name="chat_bubble" /></div>
  </div>
  <div class="item three-lines">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content text">
      <div>Jake</div>
      <div>Passionate about Quasar</div>
    </div>
    <div class="item-secondary"><q-icon name="chat_bubble" /></div>
  </div>
</div>
```

## Collapsible Items
<input type="hidden" data-demo="css/list/collapsible">

Collapsible Items make use of the Collapsible Component. Read more about it [here](/components/collapsible.html).

You can nest collapsibles within collapsibles within collapsibles within...
``` html
<div class="list">
<div class="list">
  <q-collapsible icon="inbox" label="Inbox" description="Where your email is">
    <div class="item" v-for="n in 3">
      <div class="item-primary"><q-icon name="mail" /></div>
      <div class="item-content">
        Email {{ n + 1 }}
      </div>
    </div>
    <q-collapsible icon="favorite" label="Favorites">
      <div class="item" v-for="n in 3">
        <div class="item-primary"><q-icon name="mail" /></div>
        <div class="item-content">
          Favorite {{ n + 1 }}
        </div>
      </div>
    </q-collapsible>
    <div class="item">
      <div class="item-primary"><q-icon name="mail" /></div>
      <div class="item-content">
        Email
      </div>
    </div>
  </q-collapsible>
  <q-collapsible icon="send" label="Sent">
    <div class="item" v-for="n in 3">
      <div class="item-primary"><q-icon name="mail" /></div>
      <div class="item-content">
        Email {{ n + 1 }}
      </div>
    </div>
  </q-collapsible>
  <q-collapsible icon="delete" label="Trash">
    <div class="item" v-for="n in 3">
      <div class="item-primary"><q-icon name="mail" /></div>
      <div class="item-content">
        Email {{ n + 1 }}
      </div>
    </div>
  </q-collapsible>
</div>
</div>
```

## List with Text Chips
<input type="hidden" data-demo="css/list/example-textfields">

``` html
<div class="list">
  <div class="list-label">Chips Textbox</div>
  <div class="item multiple-lines">
    <div class="item-primary"><q-icon name="edit" /></div>
    <div class="item-content">
      <q-chips-input v-model="chips" placeholder="Type names" />
    </div>
  </div>
</div>
```

## List with Form Components
<input type="hidden" data-demo="css/list/example-form">

Some predefined formulas you can use to nest Form Components within List Items.

**Note**
Also check out [q-option-group](/components/option-group.md) for grouping toggles, checkboxes and radios.

``` html
<p class="caption">Checkboxes</p>
<div class="list">
<label class="item">
  <div class="item-primary">
    <q-checkbox v-model="checked"></q-checkbox>
  </div>
  <div class="item-content">
    Notifications
  </div>
</label>
<label class="item multiple-lines">
  <div class="item-primary">
    <q-checkbox v-model="checked"></q-checkbox>
  </div>
  <div class="item-content text">
    <div>Notifications</div>
    <div>Allow notifications</div>
  </div>
</label>
<label class="item multiple-lines">
  <div class="item-primary">
    <q-checkbox v-model="checked"></q-checkbox>
  </div>
  <div class="item-content text">
    <div>Notifications</div>
    <div class="ellipsis-2-lines">Allow notifications Allow notifications Allow notifications Allow notifications Allow notifications </div>
  </div>
</label>
</div>

<p class="caption">Radios</p>
<div class="list">
<label class="item">
  <div class="item-primary">
    <q-radio v-model="option" val="opt1"></q-radio>
  </div>
  <div class="item-content">
    Option 1
  </div>
</label>
<label class="item multiple-lines">
  <div class="item-primary">
    <q-radio v-model="option" val="opt2"></q-radio>
  </div>
  <div class="item-content text">
    <div>Option 2</div>
    <div>Allows notifications</div>
  </div>
</label>
<label class="item multiple-lines">
  <div class="item-primary">
    <q-radio v-model="option" val="opt3"></q-radio>
  </div>
  <div class="item-content text">
    <div>Option 3</div>
    <div class="ellipsis-3-lines">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </div>
</label>
</div>

<p class="caption">Toggles</p>
<div class="list">
<label class="item">
  <div class="item-content">
    Events and reminders
  </div>
  <div class="item-secondary">
    <q-toggle v-model="checked"></q-toggle>
  </div>
</label>
<label class="item multiple-lines">
  <div class="item-content text">
    <div>Events and reminders</div>
    <div>Lorem ipsum</div>
  </div>
  <div class="item-secondary">
    <q-toggle v-model="checked" class="purple"></q-toggle>
  </div>
</label>
<label class="item multiple-lines">
  <div class="item-content text">
    <div>Events and reminders</div>
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </div>
  <div class="item-secondary">
    <q-toggle v-model="checked" class="red"></q-toggle>
  </div>
</label>
</div>

<p class="caption">Select</p>
<div class="list">
<div class="list-label">Single Selection</div>
<div class="item">
  <div class="item-primary"><q-icon name="supervisor_account" /></div>
  <div class="item-content">
    <q-select class="full-width" v-model="select" :options="selectOptions" ok-label="Pick" cancel-label="Neah" title="Company"></q-select>
  </div>
</div>
<hr>
<div class="list-label">Multiple Selection</div>
<div class="item">
  <div class="item-primary"><q-icon name="supervisor_account" /></div>
  <div class="item-content">
    <q-select class="full-width" multiple checkbox v-model="multipleSelect" :options="selectOptions" ok-label="Pick" title="Companies"></q-select>
  </div>
</div>
<div class="item">
  <div class="item-primary"><q-icon name="supervisor_account" /></div>
  <div class="item-content">
    <q-select class="full-width" multiple toggle v-model="multipleSelect" :options="selectOptions" ok-label="Pick" title="Companies"></q-select>
  </div>
</div>
</div>

<p class="caption">Ranges</p>
<div class="list">
<div class="item two-lines">
  <div class="item-primary"><q-icon name="volume_up" /></div>
  <div class="item-content">
    <q-range v-model="range" :min="0" :max="50" label></q-range>
  </div>
</div>
<div class="item two-lines">
  <div class="item-primary"><q-icon name="brightness_medium" /></div>
  <div class="item-content">
    <q-range v-model="range" :min="0" :max="50" label></q-range>
  </div>
</div>
<hr>
<div class="list-label">Double Range</div>
<div class="item two-lines">
  <div class="item-primary"><q-icon name="local_atm" /></div>
  <div class="item-content">
    <q-double-range v-model="doubleRange" :min="0" :max="50" label></q-double-range>
  </div>
</div>
<div class="item two-lines">
  <div class="item-primary"><q-icon name="euro_symbol" /></div>
  <div class="item-content">
    <q-double-range v-model="doubleRange" :min="0" :max="50" label></q-double-range>
  </div>
</div>
</div>

<p class="caption">Date and Time</p>
<div class="list">
<div class="list-label">Date or Time</div>
<div class="item two-lines">
  <div class="item-primary"><q-icon name="access_time" /></div>
  <div class="item-content">
    <q-datetime class="full-width" v-model="timestamp" type="time"></q-datetime>
  </div>
</div>
<div class="item two-lines">
  <div class="item-primary"><q-icon name="update" /></div>
  <div class="item-content row items-baseline">
    <q-datetime class="full-width" v-model="timestamp" type="date"></q-datetime>
  </div>
</div>
<hr>
<div class="list-label">Date & Time</div>
<div class="item two-lines">
  <div class="item-primary"><q-icon name="notifications" /></div>
  <div class="item-content row items-baseline">
    <q-datetime class="full-width" v-model="timestamp" type="datetime"></q-datetime>
  </div>
</div>
</div>
```

## Examples
Let's explore some ready to use templates using what we've learned above.

### Simple List
<input type="hidden" data-demo="css/list/example-simple">

``` html
<div class="list">
  <div class="item">
    <div class="item-primary"><q-icon name="inbox" /></div>
    <div class="item-content">
      Inbox
    </div>
  </div>
  <div class="item">
    <div class="item-primary"><q-icon name="send" /></div>
    <div class="item-content">
      Sent
    </div>
  </div>
  <div class="item">
    <div class="item-primary"><q-icon name="delete" /></div>
    <div class="item-content">
      Trash
    </div>
  </div>
  <hr>
  <div class="item">
    <div class="item-content">
      Inbox
    </div>
    <div class="item-secondary"><q-icon name="inbox" /></div>
  </div>
  <div class="item">
    <div class="item-content">
      Sent
    </div>
    <div class="item-secondary"><q-icon name="send" /></div>
  </div>
  <div class="item">
    <div class="item-content">
      Trash
    </div>
    <div class="item-secondary"><q-icon name="delete" /></div>
  </div>
</div>
```

### Persons List
<input type="hidden" data-demo="css/list/example-persons">

``` html
<div class="list">
  <div class="list-label">People</div>
  <div class="item">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content text">
      John
    </div>
    <div class="item-secondary"><q-icon name="chat_bubble" /></div>
  </div>
  <div class="item two-lines">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content text">
      <div>Jim</div>
      <div>Javascript wiz kid</div>
    </div>
    <div class="item-secondary"><q-icon name="chat_bubble" /></div>
  </div>
  <div class="item three-lines">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content text">
      <div>Jake</div>
      <div>Passionate about Quasar</div>
    </div>
    <div class="item-secondary"><q-icon name="chat_bubble" /></div>
  </div>
</div>
```

### Chat List
<input type="hidden" data-demo="css/list/example-chat">

``` html
<div class="list">
  <div class="list-label">Recent chats</div>
  <div class="item" v-for="n in 3">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content">
      John Doe
    </div>
    <div class="item-secondary"><q-icon name="chat_bubble" /></div>
  </div>
  <hr>
  <div class="list-label">Previous chats</div>
  <div class="item" v-for="n in 3">
    <div class="item-primary"><img src="/statics/guy-avatar.png"></div>
    <div class="item-content">
      Jack Doe
    </div>
  </div>
</div>
```

### Movies List
<input type="hidden" data-demo="css/list/example-movies">

``` html
<div class="list">
  <div class="list-label">Movies</div>
  <div class="item">
    <img src="/statics/mountains.jpg">
    <div class="item-content text">
      <div>Mountains Documentary</div>
    </div>
    <div class="item-secondary"><q-icon name="movie" /></div>
  </div>
  <div class="item">
    <img src="/statics/mountains.jpg">
    <div class="item-content text">
      <div>Mountains Documentary</div>
      <div>For passionates only</div>
    </div>
    <div class="item-secondary"><q-icon name="movie" /></div>
  </div>
  <div class="item multiple-lines">
    <img src="/statics/mountains.jpg">
    <div class="item-content text">
      <div>Mountains Documentary</div>
      <div>For passionates only For passionates only For passionates only For passionates only For passionates only </div>
    </div>
    <div class="item-secondary"><q-icon name="movie" /></div>
  </div>
</div>
```

### Contact List
<input type="hidden" data-demo="css/list/example-contacts">

``` html
<div class="list">
  <div class="item" v-for="n in 3">
    <div class="item-primary" v-if="n === 1"><q-icon name="star" class="text-pink" /></div>
    <div class="item-content inset">
      John Joe
    </div>
    <div class="item-secondary"><img src="/statics/boy-avatar.png"></div>
  </div>
  <hr class="inset">
  <div class="item" v-for="n in 3">
    <div class="item-primary" v-if="n === 0">A</div>
    <div class="item-content inset">
      John Joe
    </div>
    <div class="item-secondary"><img src="/statics/boy-avatar.png"></div>
  </div>
</div>
```

### Folder List
<input type="hidden" data-demo="css/list/example-folders">

``` html
<div class="list">
  <div class="list-label inset">Folders</div>
  <div class="item" v-for="n in 3">
    <div class="item-primary">
      <q-icon name="folder" class="bg-grey-6 inverted" />
    </div>
    <div class="item-content text">
      <div>Photos</div>
      <div>February 22, 2016</div>
    </div>
    <div class="item-secondary"><q-icon name="info" /></div>
  </div>
  <hr class="inset">
  <div class="list-label inset">Files</div>
  <div class="item" v-for="n in 3">
    <div class="item-primary">
      <q-icon name="assignment" class="bg-primary inverted" />
    </div>
    <div class="item-content text">
      <div>Vacation</div>
      <div>February 22, 2016</div>
    </div>
    <div class="item-secondary"><q-icon name="info" /></div>
  </div>
</div>
```

### Phonebook List
<input type="hidden" data-demo="css/list/example-phonebook">

``` html
<div class="list">
  <div class="item" v-for="n in 3">
    <q-icon name="phone" class="item-primary" v-if="n === 0" />
    <div class="item-content inset text">
      <div>(650) 555 - 1234</div>
      <div>Mobile</div>
    </div>
    <div class="item-secondary"><q-icon name="chat_bubble" /></div>
  </div>
  <hr class="inset">
  <div class="item" v-for="n in 3">
    <div class="item-primary"><q-icon name="mail" /></div>
    <div class="item-content text">
      <div>john@doe.com</div>
      <div>Personal</div>
    </div>
  </div>
</div>
```

### Messages List
<input type="hidden" data-demo="css/list/example-messages">

``` html
<div class="list">
  <div class="list-label">Today</div>
  <div class="item inset-delimiter">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content text">
      <div>Brunch this weekend?</div>
      <div class="ellipsis-2-lines">
        <span>John Doe</span>
        -- I'll be in your neighborhood doing errands this
        weekend. Do you want to grab brunch?
      </div>
    </div>
    <div class="item-secondary">
      <div class="item-stamp">1 week</div>
    </div>
  </div>
  <hr class="inset">
  <div class="item inset-delimiter">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content text">
      <div>Brunch this weekend?</div>
      <div class="ellipsis-2-lines">
        <span>John Doe</span>
        -- I'll be in your neighborhood doing errands this
        weekend. Do you want to grab brunch?
      </div>
    </div>
    <div class="item-secondary">
      <div class="item-stamp">1 week</div>
      <q-icon name="info" />
    </div>
  </div>
  <hr>
  <div class="list-label">Yesterday</div>
  <div class="item inset-delimiter">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content text">
      <div>Brunch this weekend?</div>
      <div class="ellipsis-2-lines">
        <span>John Doe</span>
        -- I'll be in your neighborhood doing errands this
        weekend. Do you want to grab brunch?
      </div>
    </div>
    <div class="item-secondary">
      <div class="item-stamp">1 week</div>
      <q-icon name="info" />
    </div>
  </div>
  <div class="item inset-delimiter">
    <div class="item-primary"><img src="/statics/boy-avatar.png"></div>
    <div class="item-content text">
      <div>Brunch this weekend?</div>
      <div class="ellipsis-2-lines">
        <span>John Doe</span>
        <br>
        I'll be in your neighborhood doing errands this
        weekend. Do you want to grab brunch?
      </div>
    </div>
    <div class="item-secondary">
      <div class="item-stamp">1 week</div>
      <q-icon name="more_vert" />
    </div>
  </div>
</div>
```
