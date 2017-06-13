title: Datetime Range
---

The Quasar Datetime Range component offers the users the ability to input a date, time or datetime interval. It is based off of the [Datetime component](/components/datetime.html). Before diving in, make sure you know how to use the [Datetime component](/components/datetime.html), since they share a lot of the same properties.

<input type="hidden" data-fullpage-demo="form/datetime/range">

## Basic Usage
``` html
<!-- Date Range -->
<q-datetime-range 
  type="date" 
  v-model="first.range" 
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
>**Note**
>The properties below are only special to the Datetime Range component. This component also shares all of the properties of the [Datetime component](/components/datetime.html). 


| Vue Property | Type | Description |
| --- | --- | --- |
| `value` | Object | (**Required**) Supports the v-model of the component and must contain `to` and `from` properties. See below for more. |
| `default-from` | String, Number, Date | (**Required**) Supports the v-model of the component and must contain `to` and `from` properties. See below for more. |


> **IMPORTANT**
> The model needs to be an Object with `{to, from}` properties, which hold the same types `String`, `Number` and `Date` as the model used for [Datetime component](/components/datetime.html). In effect, these are the models for each datetime component used to create the range.

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@input` | Triggered when model (Object with `to` and `from` props) changes |

