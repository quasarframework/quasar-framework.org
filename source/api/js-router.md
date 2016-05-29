title: Quasar Router
---

Quasar Framwork takes care of your routes automatically so you don't have to manage Page switching yourself. But in case you need to do something fancy, here's the API.

## Getting Started
Each route is an object defined like below:
``` js
var route = {
  hash: '#/'
  trigger: function() { ... }
};
```
Adding a route:
``` js
quasar.add.route({...});
```
Initialize router to start listening to hash changes:
``` js
quasar.start.router();
```

## Route Definition
A more detailed explanation of a route:
``` js
var route = {
  // hash that gets matched
  hash: '#/',

  // method to run when hash is matched
  trigger: function() {
    //The [this] object is a copy of the [route] object plus:
    //this.params containing the hash tokens
    //this.url containing the original url hash
    //this.query containing the query string parameters
  }
};
```
The `hash` property can be a normal static hash like #/page/books or a parametrized string like #/article/:category/:date, in this case the route parameters will be completed with hash tokens.

For example, for [http://domain.com/#/article/science/20151010]() you will have:
``` js
var route = {
  hash: '#/article/:category/:date',
  trigger: function() {
    // this.params.category contains 'science'
    // this.params.date contains '20151010'
  }
};
```

## Events
You can hook into some Router events easily. See [Quasar Events List](/api/js-events-list.html#Router-Events).

Example:
``` js
quasar.events.on('app:route:notfound', function(Array hashParts) {
  // hey, user navigated to a route, but we don't have
  // any route with such hash matched...
});
```

## Router Management

### Initializing the Router
``` js
quasar.start.router();
```
Once the router is initialized it will start listening for hash changes.

### Stopping the Router
The router can be stopped so it won't listen for hash changes:
``` js
quasar.stop.router();
```

### Checking if Router is running
``` js
(boolean) quasar.router.is.running();
```

### Adding Route
``` js
quasar.add.route({...});
```

### Overwriting a Route
Sometimes you may need to overwrite a route.
``` js
quasar.overwrite.route({...new_route_obj...});
```
It will look for the `hash` from new_route_obj and replace the current route with this new one.

### Removing Route
``` js
quasar.remove.route(hash);
Example: quasar.remove.route('#/article');
```

### Retrieving All Routes
``` js
var routes = quasar.get.all.routes();
```

### Checking if Route Exists
``` js
(boolean) quasar.has.route(hash);
Example: quasar.has.route('#/article');
```

### Retrieving Current Route
``` js
(route_obj) quasar.get.current.route();
```

### Get Route By Path
``` js
(route_obj) quasar.get.route(hash);
Example: quasar.get.route('#/article');
```

### Reloading Current Route
This will trigger the route methods once again.
``` js
quasar.reload.current.route();
```

### Navigating to a Route
``` js
quasar.navigate.to.route(hash);
Example: quasar.navigate.to.route('#/article');
```
