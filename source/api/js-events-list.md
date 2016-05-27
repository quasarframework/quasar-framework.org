title: Quasar Events List
---

There are global events registered for some key things in Quasar Framework.
See [Quasar Events API](/api/js-events.html) if you haven't already, to learn how to hook into these events and what they are.

Example:
``` js
quasar.events.on('Event-Name', function(Object/Array/String/Anything) {
  ...
});
```

## Page Events

| Event Name | Description |
| --- | --- |
| app:page:require | Triggered before requiring page JS file |
| app:page:post-require | Triggered after requiring page JS file |
| app:page:prepare | Triggered before solving page dependencies |
| app:page:post-prepare | Triggered after we have the page's Vue instantiation object |
| app:page:render | Triggered before rendering page on screen |
| app:page:post-render | Triggered after rendering page on screen |
| app:page:ready | Triggered when page has fully loaded |

Example:
``` js
quasar.events.on('app:route:notfound', function(Object RouteNotFound) {
  // hey, user navigated to a route, but we don't have
  // any route with such hash matched...

  // RouteNotFound has the following properties:
  // `params`, `query`, `name` (page name), `manifest`, `route`
});
```

## Layout Events

| Event Name | Description |
| --- | --- |
| app:layout:require | Triggered before requiring page JS file |
| app:layout:post-require | Triggered after requiring page JS file |
| app:layout:prepare | Triggered before solving page dependencies |
| app:layout:post-prepare | Triggered after we have the page's Vue instantiation object |
| app:layout:render | Triggered before rendering page on screen |
| app:layout:post-render | Triggered after rendering page on screen |
| app:layout:ready | Triggered when page has fully loaded |

## Router Events

| Event Name | Parameters | Description |
| --- | --- |
| app:route:change | (String) hash | Detected hash change |
| app:route:notfound | (Array) hash_parts | New hash does not match any route |
| app:route:trigger | (Object) route | Triggering execution of a route |
| app:router:started | *None* | Router has started listening |
| app:router:stopped | *None* | Router has stopped listening |

Example:
``` js
quasar.events.on('app:route:notfound', function(Array hashParts) {
  // hey, user navigated to a route, but we don't have
  // any route with such hash matched...
});
```
