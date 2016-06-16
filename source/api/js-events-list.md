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

## Global Events

| Event Name | Description |
| --- | --- |
| app:error | Triggered for any Javascript error. See parameters below. |

### Parameter supplied by `app:error`
`app:error` event is triggerd with one parameter, an Object containing the following properties:

| Property Name | Type | Description |
| --- | --- | --- |
| message | String | Error message |
| source | String | URL of the script where the error was raised |
| lineno | Number | Line number where error was raised |
| colno | Number | Column number for the line where the error occurred |
| error | Object | Error Object containing amongst other things the stack trace |

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
quasar.events.on('app:page:ready', function(Object context) {
  // hey, app page is ready

  // `context` has the following properties:
  // `name`, `hash`, `manifest`
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

## App Visibility

| Event Name | Parameters | Description |
| --- | --- | --- |
| app:visibility | (String) state | App got focus if `state` is `visible` or lost focus if `state` is `hidden` |

Read more about it [here](/api/js-app-visibility.html).

## App Notify

| Event Name | Parameters | Description |
| --- | --- | --- |
| app:notify | (String) html | Is triggered when `quasar.notify()` is used. |

Read more about it [here](/components/app-notify.html).

## Global Progress

| Event Name | Parameters | Description |
| --- | --- | --- |
| app:global-progress | (Boolean) status | Triggered when Global Progress is displayed (with `true` as param) or hidden (with `false` as param). |

Read more about it [here](/api/js-global-progress.html).
