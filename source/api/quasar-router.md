title: Quasar Router
---

# Getting Started
Each route is an object defined like below:
```
var route = {
  path: '#/'
  before: function() { ... } // can be omitted
  on: function() { ... }
  after: function() { ... } // can be omitted
};
```
Adding a route:
```
quasar.add.route({...});
```
Initialize router to start listening to hash changes:
```
quasar.start.router();
```

# Route Definition
You can easily customize your route. A complex example below:
```
var route = {
  path: '#/',
  before: function() {
    //The [this] object is a copy of the [route] object plus:
    //this.params containing the hash tokens
    //this.state containing state ('before', 'on', 'after')
    //this.next containing methods to pass parameters to the next state
    //this.url containing the original url hash
    //this.query containing the query string parameters
  },
  on: function(data) {
    //...same as above...
    //plus `data` which contains what is sent by this.next() from before()
  },
  after: function(data) {
    //...same as above...
    //plus `data` which contains what is sent by this.next() from before() OR on()
  }
};
```
The path property can be a normal static hash like #/page/books or a parametrized string like #/article/:category/:date, in this case the route parameters will be completed with hash tokens.

For example, for [http://domain.com/#/article/science/20151010]() you will have:
```
var route = {
  path: '#/article/:category/:date',
  on: function() {
    // this.params.category contains 'science'
    // this.params.date contains '20151010'
  }
};
```

## Using `this.next(data)`
Sometimes you may need to pass in data from one route method to the next. Even do a Ajax request.
```
var route = {
  path: '#/article',
  before: function() {
    quasar.get.request({
      path: '/users.php'
    }).success(function(data) {
      this.next(data);
    });
  },
  on: function(data) {
    // here we have `data` from the Ajax call from before()
    this.next(data);
  },
  after: function(data) {
    // here we have `data` from the Ajax call from on()

    // no need to call this.next() here too
  }
};
```
> **IMPORTANT**
> This is required when using multiple route methods. If this isn't called, the next route method NOT GOING to get called at all.

# Router Management

## Initializing the Router
Router can be initialized with a config object:
```
quasar.start.router({
  // can be omitted:
  onRouteChange: function(route) {
    // a route has been matched and `route` parameter is the actual route object
  },

  // can be omitted:
  onRouteNotFound: function(array) {
    // `array` parameter contains the hash components
    // Example for #/article/science array will be ['article', 'science']
  }
});
```
Once the router is initialized it will start listening for hash changes.

## Stopping the Router
The router can be stopped so it won't listen for hash changes:
```
quasar.stop.router();
```

## Checking if Router is running
```
(boolean) quasar.router.is.running();
```

## Adding Route
```
quasar.add.route({...});
```

## Overwriting a Route
Sometimes you may need to overwrite a route.
```
quasar.overwrite.route({...new_route_obj...});
```
It will look for the `path` from new_route_obj and replace the current route with this new one.

## Removing Route
```
quasar.remove.route(path);
Example: quasar.remove.route('#/article');
```

## Retrieving All Routes
```
var routes = quasar.get.all.routes();
```

## Checking if Route Exists
```
(boolean) quasar.has.route(path);
Example: quasar.has.route('#/article');
```

## Retrieving Current Route
```
(route_obj) quasar.get.current.route();
```

## Get Route By Path
```
(route_obj) quasar.get.route(path);
Example: quasar.get.route('#/article');
```

## Refreshing Current Route
This will trigger the route methods once again.
```
quasar.refresh.current.route();
```

## Navigating to a Route
```
quasar.navigate.to.route(path);
Example: quasar.navigate.to.route('#/article');
```
