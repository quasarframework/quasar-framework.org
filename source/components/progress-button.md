title: Progress Button
---
Show user a process is happening in the background when clicking/tapping on a Progress Button. There are two outcomes that this component can show the user: success or error. Also, there are two ways you can display the progress: determined and indetermined.

<input type="hidden" data-fullpage-demo="web-components/progress-button">

## Basic Usage
Two examples below. Read about Vue properties in the next section.

``` html
<!-- Determined Progress Button -->
<quasar-progress-button
  class="primary"
  :percentage="model"
  @click.native="startWorking()"
>
  Work it!
</quasar-progress-button>

<!-- Indetermined Progress Button -->
<quasar-progress-button
  indeterminate
  class="yellow"
  dark-filler
  :percentage="model"
  @click.native="startWorking()"
>
  Work it!
</quasar-progress-button>
```

## Vue Properties

| Vue Property | Type | Default Value | Description |
| --- | --- | --- | --- |
| `percentage` | Number | | (**Required**) Model to use to determine Progress Button's state. |
| `error-icon` | String | `warning` | Icon to use in case the outcome is an error. |
| `success-icon` | String | `done` | Icon to use in case the outcome is a success. |
| `dark-filler` | Boolean | `false` | In case your button has a light color, the filler should be darkened. |
| `indeterminate` | Boolean | `false` | Should we display an indeterminate state? |

## Handling Outcome
The outcome is determined by the `percentage` property value. Changing the property will make the Progress Button change its state accordingly.

| Percentage value | Outcome |
| --- | --- |
| 0 | Default state. The label you've specified for your button is displayed. |
| 1-99 | Working state. The background filler is displayed. |
| &gt;= 100 | Success state. The `successIcon` is displayed. |
| &lt; 0 | Error state. The `errorIcon` is displayed. |
