title: Spinners
---
A Spinner is used to show the user a timely process is currently taking place. It is an important UX feature, which gives the user the feeling the system is continuing to work for longer term activities, like grabbing data from the server or some heavy calculations.   

The spinner is used in components such as the [QInnerLoading](inner-loading.html) and [Qbtn](buttons.html) components and within the `Loading` feature. We'll be covering the usage in components. 

<input type="hidden" data-fullpage-demo="web-components/spinner">

## Basic Usage
``` html
<!-- Default platform spinner-->
<q-spinner></q-spinner>

<!-- Spinner with options -->
<q-spinner color="#ff00ee" :size="30"></q-spinner>

```

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `size` | Number | Number defining the size in pixels. |
| `color` | String | CSS color string. |

You can change the spinner's size without a loss of quality, because SVGs are used.

If you'd like to use a different spinner than the default, use a specific spinner component. 

The following specific spinners components are available:

 `q-spinner-audio`, `q-spinner-ball`, `q-spinner-bars`, `q-spinner-circles`, `q-spinner-dots`, `q-spinner-grid`, `q-spinner-hearts`, `q-spinner-ios`, `q-spinner-mat`, `q-spinner-oval`, `q-spinner-puff`, `q-spinner-rings`, `q-spinner-tail`, `q-spinner-facebook`, `q-spinner-gears`, `q-spinner-hourglass`, `q-spinner-infinity`, `q-spinner-pie`, `q-spinner-radio`.


## Using Specific Spinners

```html
<!-- Specific spinner icon -->
<q-spinner-audio></q-spinner-audio>

<!-- Specific spinner icon with options -->
<q-spinner-audio color="#ff00ee" :size="30"></q-spinner-audio>

```

**Note**
Having to use an extra component to identify specific spinners might seem like extra work, however, the goal is to be able to remove all other spinner components in your final build, in order to keep the overall package size of your application down to a minimum.  

You can also see how spinners are used within the [QInnerLoading](inner-loading.html) and [Qbtn](buttons.html) components.