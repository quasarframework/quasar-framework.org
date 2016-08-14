title: Progress Bar
---
A Progress bar is used to show a user how far along he/she is in a process.

<input type="hidden" data-fullpage-demo="web-components/progress">

## Basic usage
``` html
<quasar-progress :model="progressModel"></quasar-progress>
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
<quasar-progress :model="progress" class="positive"></quasar-progress>
<quasar-progress :model="progress" class="info"></quasar-progress>
<quasar-progress :model="progress" class="warning"></quasar-progress>
<quasar-progress :model="progress" class="secondary"></quasar-progress>
<quasar-progress :model="progress" class="tertiary"></quasar-progress>
<quasar-progress :model="progress" class="dark"></quasar-progress>

<quasar-progress :model="progress" class="orange"></quasar-progress>
<quasar-progress :model="progress" class="red"></quasar-progress>
<quasar-progress :model="progress" class="light-blue"></quasar-progress>
```

Specific height:
``` html
<quasar-progress
  style="height: 45px"
  class="indeterminate stripe"
  :model="progress"
></quasar-progress>
```
