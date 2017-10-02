title: Field
---
Field component allows you to easily build your responsive Forms UI by wrapping each Form component (QInput, QSelect, QDatetime, QChipsInput and so on) to enrich it with a main label, an icon, error placeholder and error state, helper placeholder and/or item/character counter.
<input type="hidden" data-fullpage-demo="forms/field">

On small windows, label and content will stack vertically, while on bigger windows label will be placed on the left of QField content. Icons are always placed at the left of label and content, regardless of window width.

Works with ANY component, not only Form ones.

## Basic Usage

```html
<q-field
  icon="cloud"
  label="Your Gmail"
  helper="Helper"
  :error="mailHasError"
  error-label="We need a valid email"
  :count="10"
>
  <q-input suffix="@gmail.com" v-model="model" />
</q-field>
```

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `label` | String | Main label to use. |
| `icon` | String | An icon to use on left of label. |
| `helper` | String | Helper text which gets placed below your wrapped form component. |
| `error` | Boolean | Highlight field and wrapped form component has an error. |
| `error-label` | String | If `error` is specified and `true`, then field helper is replaced by this prop. Doesn't depends on field helper existance. |
| `count` | Number/Boolean | Add a counter of characters or items (like Chips) in your wrapped form component. If Boolean, it just counts them. If Number, it also adds a maximum number to it, but doesn't acts as a restraint. |
| `inset` | String | Inset you field to align with other fields when current one is missing an icon and/or label. One of 'icon', 'label' or 'full' (inset for both icon and label). |
| `dark` | Boolean | Is your field used on a dark background? |
| `labelWidth` | Number | Out of 12 grid points, how much should the label take? Default is 5. Minimum is 1 and maximum is 11. |

## Examples
The following are just a glimpse of what QField can do for you.

### Using Counter
```html
<!--
  16 characters max.
  Notice "count" property (and optional max-length
  to enforce max number of characters)
-->
<q-field
  :count="16"
>
  <q-input type="password" max-length="16" v-model="model" />
</q-field>

<!-- Counting Chips. Notice "count" property -->
<q-field
  count
  icon="account_box"
  helper="Some helper here"
  :label-width="3"
>
  <q-chips-input float-label="Float Label" v-model="model" />
</q-field>

<!-- Counting selected options -->
<q-field
  count
>
  <q-select
    v-model="select"
    :options="[
      {
        label: 'Google',
        icon: 'email',
        value: 'goog'
      },
      {
        label: 'Facebook',
        description: 'Enables communication',
        value: 'fb'
      },
      {
        label: 'Twitter',
        secondIcon: 'alarm',
        value: 'twtr'
      }
    ]"
  />
</q-field>
```

### Validations with Vuelidate
Quasar's recommendation for doing form components validations is  [Vuelidate](https://monterail.github.io/vuelidate/) as it fits great with the overall architecture. It's simple, lightweight and **model-based**.

```html
<template>
  <q-field
    icon="mail"
    label="Email"
    helper="Type the email we can use to contact you"
    :error="$v.email.$error"
    error-label="Please type a valid email"
    count
  >
    <q-input
      type="email"
      v-model="email"
      @blur="$v.email.$touch"
    />
  </q-field>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: ''
    }
  },
  validations: {
    email: { required, email }
  }
}
</script>
```

### Stacked Label QInput
```html
<q-field
  icon="cloud"
  helper="Helper"
>
  <q-input v-model="model" float-label="Float Label" />
</q-field>
```

### Custom Label Width
If you customize label width for one QField then it's best to apply it to all its sibling QFields for UI consistency.
Since Quasar is using a 12 point grid system, assign a number >= 1 and < 12 for the label width. Default is `5`.

```html
<q-field
  helper="Helper"
  :label-width="3"
  label="Label"
>
  <q-input v-model="model" />
</q-field>
```

### Using Inset
Inset is useful to perfectly align all QFields when some have icons and labels and some are missing either or both of them.

If, for example, no QField uses icon, then it makes sense to not add inset for any of the QFields. Same goes for label.

```html
<!--
  This example has icon and label. Since having
  both of them, it gets set as reference for
  the other QFields when adding inset to them.
-->
<q-field
  icon="cloud"
  helper="Helper"
  label="Horizontal"
>
  <q-input v-model="model" />
</q-field>

<!--
  This example has only label, so
  we inset for the icon (because there
  is at least one QField having icon too)
-->
<q-field
  helper="Helper"
  label="Label"
  inset="icon"
>
  <q-input v-model="model" />
</q-field>

<!--
  This example has no icon or label, so
  we inset for them both (as there is a
  sibling QField with both icon and label).
-->
<q-field
  helper="Helper"
  inset="full"
>
  <q-input v-model="model" />
</q-field>
```

### Wrapping Side by Side QInputs
We use Quasar CSS Flex to create a non wrappable row where we place two QInputs.

When more than one Form component is wrapped by QField, avoid adding a counter to QField because only one will end up synching its length to it. Each Form component has its own length and there's only one placeholder for the counter, so in the end you will only confuse the user.

```html
<q-field
  icon="security"
  helper="Helper"
  label="Label"
>
  <!-- We create a row -->
  <div class="row no-wrap">
    <q-input class="col" v-model="model" stack-label="Input 1" />
    <q-input class="col" v-model="model" stack-label="Input 2" />
  </div>
</q-field>
```

### Dark Background
When placing a QField on a dark background, use `dark` property to inform QField it needs to adjust colors.

```html
<!--
  This example has a wrapping <div> with a dark
  background associated with it.
-->
<div class="bg-grey-9" style="padding: 10px">
  <!-- Notice "dark" property -->
  <q-field
    dark
    label="Knob"
    helper="Touch to change"
    icon="cake"
    :error="error"
  >
    <q-knob
      v-model="knob"
      :min="knobMin"
      :max="knobMax"
    >
      <q-icon class="on-left" name="volume_up" /> {{knob}}
    </q-knob>
  </q-field>
</div>
```

### Option Group
Here's an example with an Option Group component.

```html
<q-field
  icon="flight_takeoff"
  label="Flight"
  helper="Pick the day when you want to go"
>
  <q-option-group
    type="radio"
    v-model="option"
    :options="[
      { label: 'Monday', value: 'monday' },
      { label: 'Tuesday', value: 'tuesday' },
      { label: 'Friday', value: 'friday' }
    ]"
  />
</q-field>
```
