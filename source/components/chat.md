title: Chat
---
Quasar supplies a chat component called QChatMessage which is really a chat entry that renders the data given by the props.
<input type="hidden" data-fullpage-demo="other-components/chat">

## Basic Usage
This show a simple chat between two parties, and a to label

```html
  <q-chat-message
    label='Sunday, 19th'
  />

  <q-chat-message
    name="me"
    avatar="statics/boy-avatar.png"
    :text="['hunter2']"
    stamp="4 minutes ago"
    sent
  />

  <q-chat-message
    name="Jane"
    avatar="statics/linux-avatar.png"
    :text="['hey, if you type in your pw', 'it will show as stars']"
    stamp="7 minutes ago"
  />
```

## Vue Properties
| Vue Property | Type    | Description                            |
| ---          | ---     | ---                                    |
| `sent`       | Boolean | Render as a sent message (so from current user) |
| `label`      | String  | Label of message                       |
| `name`       | String  | Name of the message creator            |
| `avatar`     | String  | URL to the avatar image of the creator (use a static resource) |
| `text`       | Array   | Array of strings that are the message body |
| `stamp`      | String  | Creation timestamp string             |
| `text-color` | String  | Color of the text |
| `bg-color`   | String  | Color of the chat message bubble |

> **Note** that `text` property is an Array of Strings. This is useful when two or more messages share the same (or very close) timestamp. They will be displayed on separate bubbles, but grouped together more closely so that the name of the creator and timestamp are displayed only once for this kind of group.

Please refer to the demo source for a more complete set of examples.
