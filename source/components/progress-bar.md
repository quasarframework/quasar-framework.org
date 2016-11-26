title: Progress Bar
---
A Progress bar is used to show a user how far along he/she is in a process.

<input type="hidden" data-fullpage-demo="web-components/progress">

## Basic usage
``` html
<q-progress :percentage="progressModel"></q-progress>
```

Percentage must obviously be between 0 and 100. If it's outside this interval the component will parse it and make it be within interval.

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
<q-progress :percentage="progress" class="positive"></q-progress>
<q-progress :percentage="progress" class="info"></q-progress>
<q-progress :percentage="progress" class="warning"></q-progress>
<q-progress :percentage="progress" class="secondary"></q-progress>
<q-progress :percentage="progress" class="tertiary"></q-progress>
<q-progress :percentage="progress" class="dark"></q-progress>

<q-progress :percentage="progress" class="orange"></q-progress>
<q-progress :percentage="progress" class="red"></q-progress>
<q-progress :percentage="progress" class="light-blue"></q-progress>
```

Specific height:
``` html
<q-progress
  style="height: 45px"
  class="indeterminate stripe"
  :percentage="progress"
></q-progress>
```
