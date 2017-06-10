title: Spinners
---
A Spinner is used to show the user a timely process is currently taking place. It is an important UX feature, which gives the user the feeling the system is continuing to work for longer term activities, like grabbing data from the server or some heavy calculations.   

<input type="hidden" data-fullpage-demo="web-components/spinner">

## Basic Usage
``` html
<!-- Default platform spinner-->
<q-spinner />

<!-- Spinner with options -->
<q-spinner color="secondary" :size="30" />
<q-spinner color="teal-4" size="40px" />

<!--
  Alternatively, you can set CSS colo prop on
  a container or directly with `style` attribute on spinner
-->
<q-spinner style="color: #e2aa6f" />
```

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `size` | Number / String | Number (defining the size in pixels) or String (CSS size with unit). |
| `color` | String | CSS color from [Quasar Color Palette](/components/color-palette.html). |

You can change the spinner's size without a loss of quality, because SVGs are used.

## Using Specific Spinners
If you'd like to use a different spinner than the default, use a specific spinner component, which inherits the [same props as specified above](#Vue-Properties).

The following specific spinners components are available. The name of these components is `q-spinner-*name*`, where `name` is one of 'audio', 'ball', 'bars', 'circles', 'comment', 'cube', 'dots', 'grid', 'hearts', 'ios', 'mat', 'oval', 'puff', 'rings', 'tail', 'facebook', 'gears', 'hourglass', 'infinity', 'pie', 'radio'.

Example:

```html
<!-- Specific spinner icon -->
<q-spinner-audio />

<!-- Specific spinner icon with options -->
<q-spinner-audio color="primary" :size="30" />

```

> **Note**
> Having to use an extra component to identify specific spinners might seem like extra work, however, the goal is to be able to remove all other spinner components in your final build, in order to keep the overall package size of your application down to a minimum.  

The spinners are used in components such as the [QInnerLoading](/components/inner-loading.html) and [QBtn](/components/button.html) components or within the [Loading](/components/loading.html) feature, just to name a few examples.
