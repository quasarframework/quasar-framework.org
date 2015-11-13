title: Quasar Ajax Requests
---

Quasar Ajax Requests are a wrapper over jQuery's `$.ajax()` method. There are many features added on top of it.

## Getting Started

### Making a Request
``` js
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
``` js
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

### Request Properties
When making a request, you can use the properties below:

| Name | Type | Description |
| ---- | ---- | ----- |
| url | String | URL or relative path to base URL (see [Configuring Requests](#Configuring_Requests)) |
| query | String or Object | Query String |
| data | Object | Data to be sent along with the request |
| cachable | Boolean | Should the response be cached? *Only for GET requests* |
| requestName | String | See Request Name |
| persistent | Boolean | Cannot be aborted by `quasar.abort.all.requests()` |
| local | Boolean | Ignore baseURL and make a request from App folder (see [Configuring Requests](#Configuring_Requests)) |
| timeout | Number | Number of milliseconds before timeout |

... and any jQuery [$.ajax() properties](http://api.jquery.com/jquery.ajax/). Some examples: `dataFilter`, `dataType`, `converters`, `contentType`, `headers`, `processData`, `xhrFields`. See [More Request Properties](#More_Request_Properties).

> **NOTE**
> Only the `url` property is mandatory.

### Request Outcome
There are multiple ways to see the request outcome, depending on the style that you prefer:

1. Inside the configuration object
``` js
quasar.make.a.get.request({
  url: '/articles.php',
  done: function(data, textStatus, jqXHR) {...},
  fail: function(jqXHR, textStatus, errorThrown) {...},
  always: function(data|jqXHR, textStatus, jqXHR|errorThrown) {...}
});
```
2. Through `statusCode` property
`statusCode` is an object of numeric HTTP codes and functions to be called when the response has the corresponding code. For example, the following will alert when the response status is a 404:
``` js
quasar.make.a.get.request({
  statusCode: {
    404: function() {
      // Page not found handler
    }
  }
});
```
If the request is successful, the status code functions take the same parameters as the success callback (`done`); if it results in an error (including 3xx redirect), they take the same parameters as the failure callback (`fail`).

3. Using Promises *(recommended)*
``` js
quasar.make.a.get.request({url: '/articles.php'})
  .done(function(data, textStatus, jqXHR) {...})
  .fail(function(jqXHR, textStatus, errorThrown) {...})
  .always(function(data|jqXHR, textStatus, jqXHR|errorThrown) {...})
  .then(function(data,textStatus,jqXHR) {...}, function(jqXHR, textStatus, errorThrown) {...})
  .abort();
```
Explanation of the methods are below:

| Method | Parameters | Description |
| ---- | ---- | ---- |
| done | data, textStatus, jqXHR | Success handler |
| fail | jqXHR, textStatus, errorThrown | Failure handler |
| always | data/jqXHR, textStatus, jqXHR/errorThrown | Both success & failure handler; is triggered regardless of the outcome |
| then | Function, Function | Alternative way to specify success handler (first param) and failure handler (second param) |
| abort | *None* | Halts the request before it is completed |

> **NOTE**
> All methods (including `quasar.make.a.<TYPE>.request`) return a Promise.

## Configuring Requests
There are global configuration properties that apply to all requests through `quasar.config.requests` object. Its configurable properties are:

| Name | Type | Description |
| --- | --- | --- |
| baseURL | String | Base URL for all requests. Example: "http://quasar-framework.org/api/" |
| failFnHandler | Function | Global failure handler. See [Global Failure Handler](#Global_Failure_Handler) |
| use.cache | Boolean | GET requests cache the response by default or not. See [Request Cache](#Request_Cache) |

Example:
``` js
quasar.config.requests.baseURL = "http://quasar-framework.org/api/";
```

When wrapping your App with Cordova this provides very useful as your App may use a server somewhere on the Internet to get data. So in order to avoid specifying the host for each request, set the `baseURL` property.

If a request is made with *local* property set to `true` then baseURL is ignored.

### More Request Properties

The properties below are additions to [Request Properties](#Request_Properties).

#### Filtering Received Data
Sometime you need to sanitize the received data with `dataFilter` method, which takes a function to be used to handle the raw response data of XMLHttpRequest. This is a pre-filtering function to sanitize the response. You should return the sanitized data. The function accepts two arguments: The raw data returned from the server and the `dataType` parameter.

``` js
quasar.make.a.get.request({
  url: ...,
  dataFilter: function(data, type) {
    //include any conditions to filter data here...
    //some examples below...

    //example 1 - remove all commas from returned data
    return data.replace(",", "");

    //example 2 - if data is JSON process it in some way
    if (type === 'json') {
        var parsed_data = JSON.parse(data);
        $.each(parsed_data, function(i, item) {
            //process the JSON data
        });
        return JSON.stringify(parsed_data);
    }
  }
})
```

#### Data Type
By default, the response is considered to be a JSON string, but you can specify other data types if necessary through the `dataType` property.

| Value | Description |
| --- | --- |
| json | Evaluates the response as JSON and returns a JavaScript object |
| xml | Returns an XML document |
| html | Return HTML as plain-text |
| script | Evaluates the response as JavaScript and returns it as plain text |
| text | Returns a plain text string |

``` js
quasar.make.a.get.request({
  url: ...,
  dataType: "text"
}).done(function(plainText) {
  //
});
```

#### Converters
Converters support mapping data types to other data types. If, however, you want to map a custom data type to a known type (e.g JSON), you must add a correspondence between the response Content-Type and the actual data type using the contents option:
``` js
$.ajaxSetup({
  contents: {
    mycustomtype: /mycustomtype/
  },
  converters: {
    "mycustomtype json": function( result ) {
      // Do stuff
      return newresult;
    }
  }
});
```

This extra object is necessary because the response Content-Types and data types never have a strict one-to-one correspondence (hence the regular expression).

To convert from a supported type (e.g text, JSON) to a custom data type and back again, use another pass-through converter:
``` js
$.ajaxSetup({
  contents: {
    mycustomtype: /mycustomtype/
  },
  converters: {
    "text mycustomtype": true,
    "mycustomtype json": function( result ) {
      // Do stuff
      return newresult;
    }
  }
});
```
The above now allows passing from text to mycustomtype and then mycustomtype to json.

#### Content Type
When sending data to the server, use `contentType` to specify Content Type.

Default is **application/x-www-form-urlencoded; charset=UTF-8**, which is fine for most cases. If you explicitly pass in a `contentType`, then it is always sent to the server (even if no data is sent). If set to `false` it will not set any content type header.

> Note: The W3C XMLHttpRequest specification dictates that the charset is always UTF-8; specifying another charset will not force the browser to change the encoding.

#### Headers
`headers` is an object of additional header key/value pairs to send along with requests using the XMLHttpRequest transport. The header X-Requested-With: XMLHttpRequest is always added, but its default XMLHttpRequest value can be changed here. Values in the headers setting can also be overwritten from within the beforeSend function.

#### Process Data
This refers to the boolean `processData`. By default, data passed in to the data option as an object (technically, anything other than a string) will be processed and transformed into a query string, fitting to the default content-type "application/x-www-form-urlencoded". If you want to send a DOMDocument, or other non-processed data, set this option to false.

#### XHR Fields
This refers to `xhrFields` which is an object of fieldName-fieldValue pairs to set on the native XHR object.

For example, you can use it to set withCredentials to true for cross-domain requests if needed, *which is the default behavior for Quasar out of the box*.
``` js
quasar.make.a.get.request({
   url: a_cross_domain_url,
   xhrFields: {
      withCredentials: true
   }
});
```

## Global Failure Handler
Specify a global failure handler for times when (as an example) you return a specific HTTP code if user is not authenticated.
``` js
quasar.config.requests.failFnHandler = function(jqXHR, textStatus, errorThrown) {
  if (jqXHR.status && jqXHR.status == 401) {
    // user is not authenticated... give the user a message or redirect the UI
    ......
  }
};
```
You can `return true;` if you want to override the request's own failure handler(s).

## Request Cache
Cache response for GET requests (only) using `cachable` property:
``` js
quasar.make.a.get.request({
  url: '/articles.php',
  cachable: true
});
```
You can also configure all GET requests to be cached by default, so you won't have to specify `cachable` property:
``` js
quasar.config.requests.use.cache = false;
```

At some point you may want to clear the cache for all requests:
``` js
quasar.clear.requests.cache();
```

> **NOTE**
> All GET requests are configured by default to cache their response, because `quasar.config.requests.use.cache` is by default set to `true`.

## Group Requests
Sometimes you need to wait for multiple requests until you proceed further:
``` js
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

## Request Store
Sometimes you need to make multiple calls using the same request properties:
``` js
var store = quasar.get.store({...common...request...properties...});

store.make.a.get.request({...override...some/all...of...the...common...request...properties...});
store.make.a.put.request({...override...some/all...of...the...common...request...properties...});
store.make.a.post.request({...override...some/all...of...the...common...request...properties...});
store.make.a.del.request({...override...some/all...of...the...common...request...properties...});
```

## Aborting Requests
Sometimes you need to halt a request before it is finished:
``` js
var request = quasar.make.a.get.request(...);
...
request.abort();
```

Or you may want to halt ALL requests in progress:
``` js
quasar.abort.all.requests();
```

> **NOTE**
> When aborting all requests, you may want to exclude some of them. For this, use the `persistent` property when making those particular requests.
