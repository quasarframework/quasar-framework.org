title: Quasar Icons
---
What would an App be without icons? A default set of (hundreds of) icons is included in any Quasar App.
These are the [Material Design Icons](https://design.google.com/icons/). You can you can read (and search for them) in the previous link.

![Material Icons Example](/images/material-icons.png)

It just differs the way you use them in a Quasar App:
``` html
<!--
  On Material Design Icons website you check for an icon and it says:
  "<i class="material-icons">account_circle</i>"

  On Quasar App you simply use it like this:
-->

  <i>account_circle</i>
```

No need for extra markup. Note the "underscore" character instead of a space character... this is mandatory, as Material Icons are displayed using a ligature font.
