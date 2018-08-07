title: Editor (WYSIWYG)
---
QEditor is a WYSIWYG ("what you see is what you get") editor component.
<input type="hidden" data-fullpage-demo="forms/editor">

> WARNING
Using [v-html](https://vuejs.org/v2/api/#v-html) on the resulting v-model renders you vulnerable to Cross Site Scripting attacks.
If the content is user generated, be sure to [sanitize](https://github.com/punkave/sanitize-html) it either on render or server side.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QEditor']
}
```

## Basic Usage
```html
<q-editor v-model="model" />
```

## Internationalization
The tooltips content of QEditor are part of [Quasar I18n](/components/internationalization.html). If your desired language pack is missing, please provide a PR for it.

## Vue Properties
Supports `v-model` which you should bind to a String in your scope, which is essentially HTML code.

| Vue Property | Type | Description |
| --- | --- | --- |
| `readonly` | Boolean | Sets editor in readonly mode. |
| `disable` | Boolean | Sets editor in disable mode. |
| `min-height` | String | CSS unit for minimum height of the input area. |
| `max-height` | String | CSS unit for maximum height of the input area. |
| `height` | String | CSS unit for height of the input area. |
| `definitions` | Object | Object with definitions (see next sections). |
| `fonts` | Object | Object with fonts definitions (see next sections). |
| `toolbar` | Array | Array of Arrays of Objects/Strings with toolbar commands (see next sections). |
| `toolbar-color` | String | Color (from Quasar Palette) of toolbar commands. |
| `toolbar-text-color` | String | Text color (from Quasar Palette) of toolbar commands. |
| `toolbar-toggle-color` | String | Color (from Quasar Palette) of toolbar commands when in "active" state. |
| `toolbar-bg` | String | Toolbar background color (from Quasar Palette). |
| `toolbar-flat` | Boolean | Toolbar buttons become of "flat" type. |
| `toolbar-outline` | Boolean | Toolbar buttons become of "outline" type. |
| `toolbar-push` | Boolean | Toolbar buttons become of "push" type. |
| `toolbar-rounded` | Boolean | Toolbar buttons become of "rounded" type. |
| `content-style` | Object | CSS Style in Object format for the input area. |
| `content-class` | Object/Array/String | CSS classes for the input area. |

### Definitions
By default, QEditor offers most if not all the commands you'd need in a WYSIWYG editor: bold, italic, strike, underline, unordered (list), ordered (list), subscript, superscript, link, fullscreen, quote, left (align), center (align), right (align), justify (align), print, outdent, indent, removeFormat, hr, undo, redo, h1 to h6, p (paragraph), code (code paragraph), size-1 to size-7.

Each of these commands are pre-configured with icons with tooltips. However, if you want to override some of their settings you can do so with the help of `definitions` Object property.

```html
<!--
  overriding "bold" command to include a label instead of an icon
  and also changing its tooltip
-->
:definitions="{
  bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}
}"
```

Example adding your own definition. In this case make sure you don't overlap the default commands:
```html
<!-- we can later use "save" and "upload" in "toolbar" prop -->
:definitions="{
  save: {
    tip: 'Save your work',
    icon: 'save',
    label: 'Save',
    handler: saveWork
  },
  upload: {
    tip: 'Upload to cloud',
    icon: 'cloud_upload',
    label: 'Upload',
    handler: uploadIt
  }
}"
<!--
  Notice the handlers. It references methods in your Vue scope
  for when toolbar commands using these definitions are clicked/tapped.
-->
```

Command definitions properties:

| Property Name | Type | Description |
| --- | --- | --- |
| `label` | String | Label of button |
| `icon` | String | Icon of button |
| `tip` | String | Tooltip of button |
| `cmd` | String | Either this or "handler" is required. One of the commands described at the beginning of this section. |
| `handler` | Function | Either this or "cmd" is required. Function for when button gets clicked/tapped. |
| `disable` | Boolean/Function | Is button disabled? If specifying a function, return a Boolean value. |

Another example of adding a definition using a QEditor command:
```html
:definitions="{
  customItalic: {
    cmd: 'italic',
    icon: 'camera_enhance',
    tip: 'Italic'
  }
}"
```

### Fonts
Example of specifying fonts so that you can later use them as options in the toolbar. These become "commands" themselves, so make sure you don't overlap any of the default commands.
```html
:fonts="{
  arial: 'Arial',
  arial_black: 'Arial Black',
  comic_sans: 'Comic Sans MS'
}"
```

Then in toolbar, you can reference them. The example below creates a dropdown.
```html
:toolbar="[
  ...,
  [{
    label: $q.i18n.editor.defaultFont,
    icon: $q.icon.editor.font,
    fixedIcon: true,
    list: 'no-icons',
    options: ['default_font', 'arial', 'arial_black', 'comic_sans']
  }]
]"
```

### Toolbar
The `toolbar` property is the place where you configure how your toolbar looks like, based on your own commands and the default ones. **It's an Array of Arrays of Object/Strings**. Each sub-array represents a Button Group.

```js
[ // array of button groups
  [ ... ], // button group
  [ ... ], // button group
  ...
]
```

```html
:toolbar="[
  ['bold', 'italic', 'strike', 'underline'],
  ['token', 'hr', 'link', 'custom_btn'],
  ['print', 'fullscreen']
]"
```

Take a look at the demo and the examples below to see how you can also specify dropdowns. You can make dropdowns as single selection, meaning only one command from its list can have an "active" state.
```html
<!-- Example of a dropdown with text alignment commands -->
:toolbar="[
  [
    {
      label: $q.i18n.editor.align,
      icon: $q.icon.editor.align,
      fixedLabel: true,
      list: 'only-icons',
      options: ['left', 'center', 'right', 'justify']
    }
  ]
]"
```

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input` | Triggered when input area content changes. |
| `@fullscreen(true/false)` | (v0.17.7+) Emitted when Fullscreen state gets toggled. |

## Examples

### Complex Example
```html
<q-editor
  v-model="model"
  :toolbar="[
    ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
    ['token', 'hr', 'link', 'custom_btn'],
    ['print', 'fullscreen'],
    [
      {
        label: $q.i18n.editor.formatting,
        icon: $q.icon.editor.formatting,
        list: 'no-icons',
        options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code']
      },
      {
        label: $q.i18n.editor.fontSize,
        icon: $q.icon.editor.fontSize,
        fixedLabel: true,
        fixedIcon: true,
        list: 'no-icons',
        options: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5', 'size-6', 'size-7']
      },
      {
        label: $q.i18n.editor.defaultFont,
        icon: $q.icon.editor.font,
        fixedIcon: true,
        list: 'no-icons',
        options: ['default_font', 'arial', 'arial_black', 'comic_sans', 'courier_new', 'impact', 'lucida_grande', 'times_new_roman', 'verdana']
      },
      'removeFormat'
    ],
    ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
    [
      {
        label: $q.i18n.editor.align,
        icon: $q.icon.editor.align,
        fixedLabel: true,
        list: 'only-icons',
        options: ['left', 'center', 'right', 'justify']
      },
      {
        label: $q.i18n.editor.align,
        icon: $q.icon.editor.align,
        fixedLabel: true,
        options: ['left', 'center', 'right', 'justify']
      }
    ],
    ['undo', 'redo']
  ]"
  :fonts="{
    arial: 'Arial',
    arial_black: 'Arial Black',
    comic_sans: 'Comic Sans MS',
    courier_new: 'Courier New',
    impact: 'Impact',
    lucida_grande: 'Lucida Grande',
    times_new_roman: 'Times New Roman',
    verdana: 'Verdana'
  }"
/>
```

### Overriding & extending default toolbar buttons definitions
This particular case:
  * overrides bold & italic default definitions (label, icon, their tooltips)
  * adds a new custom command which basically is same as "italic"
  * adds "save", "upload" & "spellcheck" commands
  * adds a disabled button
  * adds a custom "Import" button

```html
<q-editor
  v-model="model"
  :toolbar="[
    ['bold', 'italic'],
    ['customItalic'],
    ['save', 'upload'],
    ['spellcheck'],
    ['disabledButton'],
    ['custom_btn']
  ]"
  :definitions="{
    bold: {cmd: 'bold', label: 'Bold', icon: null, tip: 'My bold tooltip'},
    italic: {cmd: 'italic', icon: 'border_color', tip: 'My italic tooltip'},
    customItalic: {cmd: 'italic', icon: 'camera_enhance', tip: 'Italic'},
    save: {tip: 'Save your work', icon: 'save', label: 'Save', handler: saveWork},
    upload: {tip: 'Upload to cloud', icon: 'cloud_upload', label: 'Upload', handler: upload},
    spellcheck: {tip: 'Run spell-check', icon: 'spellcheck', handler: spellCheck},
    disabledButton: {tip: 'I am disabled...', disable: true, icon: 'cloud_off'}
  }"
>
  <q-btn
    slot="custom_btn"
    dense
    color="secondary"
    icon="import_contacts"
    label="Import"
    @click="importSomething"
  />
</q-editor>
```

### Custom Style
```html
<q-editor
  v-model="model"
  toolbar-text-color="white"
  toolbar-toggle-color="yellow-8"
  toolbar-flat
  toolbar-bg="primary"
  :toolbar="[
    ['bold', 'italic', 'underline'],
    [{
      label: $q.i18n.editor.formatting,
      icon: $q.icon.editor.formatting,
      list: 'no-icons',
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code']
    }]
  ]"
/>
```

### Types of dropdowns
```html
<q-editor
  v-model="model"
  :toolbar="[
    [
      {
        label: 'Icons & Label',
        icon: 'filter_1',
        fixedLabel: true,
        fixedIcon: true,
        options: ['bold', 'italic', 'strike', 'underline']
      }
    ],
    [
      {
        label: 'Only label',
        icon: 'filter_2',
        fixedLabel: true,
        fixedIcon: true,
        list: 'no-icons',
        options: ['bold', 'italic', 'strike', 'underline']
      }
    ],
    [
      {
        label: 'Only icons',
        icon: 'filter_3',
        fixedLabel: true,
        fixedIcon: true,
        list: 'only-icons',
        options: ['bold', 'italic', 'strike', 'underline']
      }
    ]
  ]"
/>
```

### Dropdowns with exclusive options
User can pick only one option from each dropdown.
  * First has icon and label changing based on current selection
  * Second has fixed label but dynamic icon
  * Third has fixed icon but dynamic label

```html
<q-editor
  v-model="model"
  :toolbar="[
    [
      {
        label: 'Dynamic label',
        icon: 'help_outline',
        options: ['left', 'center', 'right', 'justify']
      }
    ],
    [
      {
        label: 'Static label',
        fixedLabel: true,
        options: ['left', 'center', 'right', 'justify']
      }
    ],
    [
      {
        label: 'Some label',
        icon: 'account_balance',
        fixedIcon: true,
        options: ['left', 'center', 'right', 'justify']
      }
    ]
  ]"
/>
```
