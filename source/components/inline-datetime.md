title: Inline Datetime
---
The Quasar Inline Datetime component provides a method to input dates and time or both and is shown directly on the page or element you are dispaying. There are also a [Datetime field version](/components/datetime.html), which also uses a modal/popup, as well as a [Datetime Range](/components/datetime-range.html) version.

You'll notice in the examples to the right, the iOS and Material Datetime pickers look and act totally different, just like their native counterparts.

<input type="hidden" data-fullpage-demo="form/datetime/inline">

## Basic Usage

``` html
<q-inline-datetime v-model="model" type="date" />

<!-- Only Time -->
<q-inline-datetime v-model="model" type="time" />

<!-- Date & Time -->
<q-inline-datetime v-model="model" type="datetime" />

<!-- Date - Monday as First -->
<q-inline-datetime v-model="model" monday-first type="date" />

<!-- Disabled State -->
<q-inline-datetime disable v-model="model" type="datetime" />

<!-- Readonly State -->
<q-inline-datetime readonly v-model="model" type="datetime" />

<!-- Min & Max -->
<q-inline-datetime type="datetime" v-model="minMaxModel" :min="min" :max="max" />

<!-- Adding color -->
<q-inline-datetime color="secondary" v-model="model" type="datetime" />

<!-- Time 24hr Format -->
<q-inline-datetime v-model="model" type="time" format24h />
```

> **IMPORTANT**
> Please refer to the [Datetime Component documentation]([Datetime component](/components/datetime.html) about the properties, methods and model and how to use them. The only props not used by Inline Datetime are the button props, as there are no buttons.   



