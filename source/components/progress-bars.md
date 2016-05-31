title: Quasar Progress Bar
---
A progress bar is used to show a user how far along he/she is in a process.

<input type="hidden" data-fullpage-demo="progress-bar">

## Basic usage
``` html
<progress-bar :model="progressModel"></progress-bar>
```

## Options
Configure how your progress bar is shown. Add one of these CSS classes:

| CSS Class | Description |
| --- | --- |
| `indeterminate` | Make its state as indeterminate. |
| `stripe` | Make it striped. Optionally use in conjunction with `animate` |
| `animate` | Works only along `stripe`. It makes a nice animated stripe. |

For color, use one of the main colors. See [API &gt; CSS &gt; Color Palette](/api/css-color-palette.html).

Examples:
``` html
<progress-bar :model="progress" class="positive"></progress-bar>
<progress-bar :model="progress" class="info"></progress-bar>
<progress-bar :model="progress" class="warning"></progress-bar>
<progress-bar :model="progress" class="secondary"></progress-bar>
<progress-bar :model="progress" class="tertiary"></progress-bar>
<progress-bar :model="progress" class="dark"></progress-bar>

<progress-bar :model="progress" class="orange"></progress-bar>
<progress-bar :model="progress" class="red"></progress-bar>
<progress-bar :model="progress" class="light-blue"></progress-bar>
```
