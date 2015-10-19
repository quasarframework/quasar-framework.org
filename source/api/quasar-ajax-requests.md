title: Quasar Ajax Requests
---

# Getting Started

## Making a Request
```
// GET request:
quasar.make.a.get.request({url: '...'})
  .done(function(jsonObject) {
    console.log('data received: ', jsonObject);
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    console.log('uh, oh... the request failed...', errorThrown);
  });
```
Same for PUT, POST, DELETE:
```
quasar.make.a.put.request({
  url: ...,
  data: {...}
});
quasar.make.a.post.request({
  url: ...,
  data: {...}
});

// Notice `del` instead of `delete`
quasar.make.a.del.request({...});
```

> **DATA FORMAT**
> By default, the response is treated as a JSON string and it's parsed, unless specified otherwise with `dataType` property (see [Request Properties](#Request_Properties)).

## Request Properties
When making a request, you can use the properties below:

| Name | Type | Description | |
| ---- | ---- | ----- |
| url | String | URL or relative path to base URL (see [Configuring Requests](#Configuring_Requests)) |
| query | String or Object | Query String |
| data | Object | Data to be sent along with the request |
| cachable | Boolean | Should the response be cached? *Only for GET requests* |
| requestName | String | See Request Name |
| persistent | Boolean | Cannot be aborted by `quasar.abort.all.requests()` |
| timeout | Number | Number of milliseconds before timeout |

... and any jQuery [$.ajax() properties](http://api.jquery.com/jquery.ajax/). Some examples: `dataFilter`, `dataType`, `headers`, `processData`, `xhrFields`, `converters`.

> **NOTE**
> Only the `url` property is mandatory.

## Request Outcome
There are multiple ways to see the request outcome, depending on the style that you prefer:

1. Inside the configuration object
```
quasar.make.a.get.request({
  url: '/articles.php',
  done: function(data, textStatus, jqXHR) {...},
  fail: function(jqXHR, textStatus, errorThrown) {...},
  always: function(data|jqXHR, textStatus, jqXHR|errorThrown) {...}
});
```
2. Outside the configuration object
```
quasar.make.a.get.request({url: '/articles.php'})
  .done(function(data, textStatus, jqXHR) {...})
  .fail(function(jqXHR, textStatus, errorThrown) {...})
  .always(function(data|jqXHR, textStatus, jqXHR|errorThrown) {...})
  .then(function(data,textStatus,jqXHR) {...}, function(jqXHR, textStatus, errorThrown) {...})
  .abort();
```
Explanation of the methods:

| Name | Parameters | Description |
| ---- | ---- | ---- |
| done | data, textStatus, jqXHR | Success handler |
| fail | jqXHR, textStatus, errorThrown | Failure handler |
| always | data/jqXHR, textStatus, jqXHR/errorThrown | Both success & failure handler; is triggered regardless of the outcome |
| then | Function, Function | Alternative way to specify success handler (first param) and failure handler (second param) |
| abort | | Halts the request before it is completed |

> **NOTE**
> All methods (including `quasar.make.a.<TYPE>.request`) return a Promise.

# Configuring Requests
There are global configuration properties that apply to all requests through `quasar.config.requests` object. Its configurable properties are:

| Name | Type | Description |
| --- | --- | --- |
| baseURL | String | Base URL for all requests. Example: "http://quasar-framework.org/api/" |
| failFnHandler | Function | Global failure handler. See [Global Failure Handler](#Global_Failure_Handler) |
| use.cache | Boolean | GET requests cache the response by default or not |

Example:
```
quasar.config.requests.baseURL = "http://quasar-framework.org/api/";
```

# Global Failure Handler
Specify a global failure handler for times when (as an example) you return a specific HTTP code if user is not authenticated.
```
quasar.config.requests.failFnHandler = function(jqXHR, textStatus, errorThrown) {
  if (jqXHR.status && jqXHR.status == 401) {
    // user is not authenticated... give the user a message or redirect the UI
    ......
  }
};
```
You can `return true;` if you want to override the request's own failure handler(s).

# Request Cache
Cache response for GET requests (only) using `cachable` property:
```
quasar.make.a.get.request({
  url: '/articles.php',
  cachable: true
});
```
You can also configure all GET requests to be cached by default, so you won't have to specify `cachable` property:
```
quasar.config.requests.use.cache = false;
```

At some point you may want to invalidate the cache for all requests:
```
quasar.reset.requests.cache();
```

> **NOTE**
> By default, all GET requests are configured to cache their response, because `quasar.config.requests.use.cache` is `true` by default.

# Group Requests
Sometimes you need to wait for multiple requests until you proceed further:
```
quasar.make.a.group.request(
  quasar.make.a.get.request({...}).done(...),
  quasar.make.a.del.request({...}).done(...),
  quasar.make.a.get.request({...}).done(...)
).done(function() {
  // all calls ended with success
}).fail(function() {
  // at least one call failed
});
```

# Request Store
Sometimes you need to make multiple calls using the same request properties:
```
var store = quasar.get.store({...common...request...properties...});

store.make.a.get.request({...override...some/all...of...the...common...request...properties...});
store.make.a.put.request({...override...some/all...of...the...common...request...properties...});
store.make.a.post.request({...override...some/all...of...the...common...request...properties...});
store.make.a.del.request({...override...some/all...of...the...common...request...properties...});
```

# Aborting Requests
Sometimes you need to halt a request before it is finished:
```
var request = quasar.make.a.get.request(...);
...
request.abort();
```

Or you may want to halt ALL requests in progress:
```
quasar.abort.all.requests();
```

> **NOTE**
> When aborting all requests, you may want to exclude some of them. For this, use the `persistent` property when making those particular requests.
