title: Chat CSS
---
Quasar supplies CSS classes for making a chat. Loot at the syntax below.

<input type="hidden" data-fullpage-demo="chat">

## Basic Usage
``` html
<div>
  <!-- Message received from peer -->
  <div class="chat-other">
    <div class="chat-user">
      <img src="assets/linux-avatar.png">
    </div>
    <div class="chat-date">
      7 minutes ago
    </div>
    <div class="chat-message">
      <p>
        hey, if you type in your pw, it will show as stars
      </p>
    </div>
  </div>

  <!-- Message sent by you -->
  <div class="chat-you">
    <div class="chat-user">
      <img src="assets/boy-avatar.png">
    </div>
    <div class="chat-date">
      4 minutes ago
    </div>
    <div class="chat-message">
      <p>
        hunter2
      </p>
    </div>
  </div>
</div>
```
