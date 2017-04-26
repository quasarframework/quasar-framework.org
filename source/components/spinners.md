title: Spinners
---
A Spinner is used to show the user a process is currently taking place. You can pick their size without a loss of quality due to the fact that SVGs are used.

<input type="hidden" data-fullpage-demo="web-components/spinner">

## Basic Usage
``` html
<!-- Default platform spinner-->
<q-spinner></q-spinner>

<!-- Spinner with options -->
<q-spinner color="#ff00ee" :size="30"></q-spinner>

<!-- Specific spinner icon -->
<q-spinner-audio></q-spinner-audio>

<!-- Specific spinner icon with options -->
<q-spinner-audio color="#ff00ee" :size="30"></q-spinner-audio>

```

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `size` | Number | Number defining the size in pixels. |
| `color` | String | CSS color string. |

Following spinners components are available: `q-spinner-audio`, `q-spinner-ball`, `q-spinner-bars`, `q-spinner-circles`, `q-spinner-dots`, `q-spinner-grid`, `q-spinner-hearts`, `q-spinner-ios`, `q-spinner-mat`, `q-spinner-oval`, `q-spinner-puff`, `q-spinner-rings`, `q-spinner-tail`, `q-spinner-facebook`, `q-spinner-gears`, `q-spinner-hourglass`, `q-spinner-infinity`, `q-spinner-pie`, `q-spinner-radio`.
