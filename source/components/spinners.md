title: Spinners
---
A Spinner is used to show the user a process is currently taking place. You can pick their size without a loss of quality due to the fact that SVGs are used.

<input type="hidden" data-fullpage-demo="web-components/spinner">

## Basic Usage
``` html
<!-- Default platform spinner with no options-->
<spinner></spinner>

<!-- Specific spinner -->
<spinner name="bars"></spinner>

<!-- Spinner with options -->
<spinner color="#ff00ee" :size="30"></spinner>
```

Following types are available: `audio`, `ball`, `bars`, `circles`, `dots`, `grid`, `hearts`, `ios`, `oval`, `puff`, `rings`, `tail`, `facebook`, `gears`, `hourglass`, `infinity`, `pie`, `radio`.

The size is in pixels.
