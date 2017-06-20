title: Datetime Range
---

The Datetime Range component offers the users the ability to input a date, time or datetime interval. It is based off of the [Datetime component](/components/datetime.html). Before diving in, make sure you know how to use the Datetime component, since this component shares same properties.
<input type="hidden" data-fullpage-demo="forms/datetime/range-datetime">

In essense, Datetime Range is made up of two Datetime components, one for "from" and one for "to", making up a date interval together.

## Basic Usage
``` html
<!-- Date Range -->
<q-datetime-range
  type="date"
  v-model="range"
  :min="min"
  :max="max"
/>

<!-- Time Range -->
<q-datetime-range
  type="time"
  v-model="range"
  :min="min"
  :max="max"
/>

<!-- Datetime Range -->
<q-datetime-range
  type="datetime"
  v-model="range"
  :min="min"
  :max="max"
/>
```

## Vue Properties
> **Note**
> The properties below are only special to the Datetime Range component. This component also shares all of the properties of the [Datetime component](/components/datetime.html) which get applied to both inner Datetimes.

Supports `v-model` which must be an Object with `from` and `to` properties, which each holding the same types `String`, `Number` and `Date` as the model used for [Datetime component](/components/datetime.html). In effect, these are the models for each of the two datetime components used to create the range.

| Vue Property | Type | Description |
| --- | --- | --- |
| `default-from` | String, Number, Date | Used as "default-selection" for "from" model. |
| `default-to` | String, Number, Date | Used as "default-selection" for "to" model. |
| `css` | String/Object | CSS applied to each Datetime component

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@change(newVal)` | Triggered when model (Object with `to` and `from` props) changes. |
