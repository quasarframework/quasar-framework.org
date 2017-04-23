title: Chat CSS
---
Quasar supplies a chat component called `q-chat-message`, that really is a chat entry that renders
the data given by the arguments

<input type="hidden" data-fullpage-demo="css/chat">

## Basic Usage
This show a simple chat between two parties, and a to label

```html
  <q-chat-message
    label='Sunday, 19th'
  />

  <q-chat-message
    name="Jane"
    avatar="assets/linux-avatar.png"
    :text="['hey, if you type in your pw, it will show as stars']"
    stamp="7 minutes ago"
  />

  <q-chat-message
    name="me"
    avatar="assets/boy-avatar.png"
    :text="['hunter2']"
    stamp="4 minutes ago"
    :send="true"
  />
```

## Vue Properties
| Vue Property | Type    | Description                            |
| ---          | ---     | ---                                    |
| `sent`       | boolean | render as a send message               |
| `label`      | string  | Label of message                       |
| `name`       | string  | name of the message creator            |
| `avatar`     | string  | url to the avatar image of the creator |
| `text`       | array   | array of text strings that is the message body |
| `stamp`      | string  | creation time stamp string             |

## Coloring
Apply `bg-*` or `text-*` CSS classes (from [Quasar CSS Color Palette](/api/css-color-palette.html)) to color a Chat like this:

``` html
  <q-chat-message
    class="bg-orange text-black"
    name="Jane"
    avatar="assets/linux-avatar.png"
    :text="['hey, if you type in your pw, it will show as stars']"
    stamp="7 minutes ago"
  />
```
