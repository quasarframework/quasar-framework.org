title: Progress Bar (QProgress)
---
A Progress bar is used to show a process is being worked on, so the user isn't staring at a static page, even though the system is working in the background. It is a good visual indicator (i.e. good UX) for the user, when waiting for longer term operations to be accomplished.
<input type="hidden" data-fullpage-demo="progress/progress">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QProgress']
}
```

## Basic usage
``` html
<q-progress :percentage="progressModel" />

<!-- with buffering; 4px height looks best -->
<q-progress
  :percentage="progressBuffer"
  :buffer="buffer"
  style="height: 4px"
/>
```

## Vue Properties
| Property | Type | Description |
| --- | --- | --- |
| `percentage` | Number | Progress (in percentage). |
| `buffer` | Number | Buffer (in percentage). |
| `color` | String | The Quasar CSS color value the bar should be. |
| `stripe` | Boolen | If set to `true`, the progress bar will be striped. |
| `animate` | Boolean | If set to `true`, the progress bar will be animated. |
| `indeterminate` | Boolean | If set to `true`, the state is indeterminate, meaning it is unknown when the progress will stop. |
| `height` | String | CSS unit for height of QProgress. |

Percentage and buffer, being percentage values, must be between 0 and 100, and `percentage` + `buffer` must be lower or equal to 100. If `percentage` is outside this interval the component will parse it and make it be within the interval.

For color, use one from the [Quasar Color Palette](/components/color-palette.html).

Examples:
``` html
<q-progress :percentage="progress" color="teal-4" />
<q-progress :percentage="progress" color="positive" />
<q-progress :percentage="progress" color="info" />
<q-progress :percentage="progress" color="warning" />
```

For stripes, just add the `stripe` prop.

Examples:
``` html
<q-progress :percentage="progress" color="positive" stripe />
<q-progress :percentage="progress" color="info" stripe />
<q-progress :percentage="progress" color="warning" stripe />
```

For buffering, use the buffer prop.

``` html
<q-progress :percentage="progress" color="positive" stripe :buffer="buffer" />
<q-progress :percentage="progress" color="info" stripe :buffer="buffer" />
<q-progress :percentage="progress" color="warning" stripe :buffer="buffer" />
```

If you cannot calculate the progress in percent, use the indeterminate prop.

``` html
<q-progress indeterminate />
<q-progress indeterminate color="positive" />
<q-progress indeterminate color="warning" />
<q-progress indeterminate color="negative" />
```

If you'd like to set a specific height of the progress bar, add inline styling to the component:
``` html
<q-progress
  :percentage="progress"
  stripe
  animate
  height="45px"
/>
```
