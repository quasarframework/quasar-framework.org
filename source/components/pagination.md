title: Pagination
---
Quasar Pagination is a Web Component ready to use where a pagination system is needed.

<input type="hidden" data-fullpage-demo="web-components/pagination">

## Basic Usage

``` html
<quasar-pagination :model.sync="page" :max="17"></quasar-pagination>
```

| Param Attributes | Required | Description |
| --- | --- | --- |
| `model` | Yes | The model (a Number) used for Pagination |
| `min` | | Number of the first page; Default: "1" |
| `max` | Yes | Number of last page |
