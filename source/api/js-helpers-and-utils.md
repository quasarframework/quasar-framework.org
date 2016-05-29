title: Quasar Helpers
---
## Open External URL

``` js
quasar.open.url('http://...');
```

It will take care of the quirks involved when running under Cordova or on a browser, including notifying the user he/she has to acknowledge opening popups.

## Debounce Function

If your App uses JavaScript to accomplish taxing tasks, a debounce function is essential to ensuring a given task doesn't fire so often that it bricks browser performance. Debouncing a function limits the rate at which the function can fire.

A quick example: you have a resize listener on the window which does some element dimension calculations and (possibly) repositions a few elements. That isn't a heavy task in itself but being repeatedly fired after numerous resizes will really slow your App down. So why not limit the rate at which the function can fire?

``` js
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

(Debounced Function) quasar.debounce(Function fn, Number milliseconds_to_wait, Boolean immediate);

// Example:
window.addEventListener(
  'resize',
  quasar.debounce(function() {
    .... things to do ...
  }, 300 /*ms to wait*/)
);
```

## Function Reflection

Retrieve in an array the formal name of a Function's parameters (NOT their effective value).

``` js
// 'fn' must be a reference to a Function
(Array) quasar.get.fn.param.names(Function fn);

// Example:
var parameters = quasar.get.fn.param.names(
  function testMe(a, b, c) { /* bla bla */ }
);

console.log(parameters); // ['a', 'b', 'c']
```

## Get Normalized Path

``` js
(String) quasar.get.normalized.path(String path);

// Example:
var normalizedPath = quasar.get.normalized.path(
  'images/singing/../folder/second/../../quasar.png'
);

console.log(normalizedPath); // "http://quasar-framework.org/images/quasar.png"
```

## Next Tick

``` js
// Alias for `setTimeout(fn, 1)`:
quasar.nextTick(Function fn);
```

Note that Vue also has a `nextTick()` method, but it differs than `quasar.nextTick()` in the sense that the specified Function will run on the next digest cycle:
``` js
Vue.nextTick(Function fn);
```

## Capitalize String

``` js
(Capitalized String) quasar.capitalize(String str);

// Example: 'title' becomes 'Title'
```

## Debug Helpers

The `quasar.debug` object has useful debugging methods.

### Javascript Stack
``` js
quasar.debug.printStack()
```
Useful when stuck somewhere in the code and you'd like to see the Javascript stack outputted to the console.

### Profiling

Sometimes you want to know how much time did something take to get executed. Example:
``` js
quasar.debug.profile('xyz');
//run some code... then to output results:
quasar.debug.profile('xyz');
```
You can have multiple profiles running at the same time.
