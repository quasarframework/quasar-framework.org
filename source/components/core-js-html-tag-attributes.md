title: Quasar HTML Tag Attributes
---
Quasar has an API to deal with HTML Tag Attributes. Sometimes you want to write Web Components which take into account the HTML Tag Attributes.

Example:

``` html
<!-- Notice "scroll" as attribute -->
<quasar-layout scroll>...</quasar-layout>
```

Normally, you'd have to write quite a few lines of code to take into account that your component has this attribute. Quasar makes it easy with `$(selector).getAttributesManager()`.

Example:

``` js
Vue.component('quasar-layout', {
  //...
  ready: function() {
    var
      el = $(this.$el),
      manager = el.getAttributesManager()
      ;

    // withEmpty() ensures "scroll" attribute has no value attributed to it
    manager.withEmpty('scroll', function() {
      el.addClass('scroll');
    });
  }
});
```

**This is just the tip of the iceberg.** Full API below.
For all the examples below, take into account:

1. "Empty" attributes refer to HTML Tag attributes which have no value assigned (`scroll` as opposed to `scroll="false"`)
2. When you see that the parameter of the API method is `String/Array` you should know that having a String with space delimited multiple attribute names works too (`scroll shadow-scroll` is equivalent to `['scroll', 'shadow-scroll']`).

## Checking Presence

#### has()

* (Boolean) `has(String/Array list)`
* Checks presence for at least one of the attributes in `list`
* Example:
``` js
var manager = el.getAttributesManager();
(Boolean) manager.has('scroll');
```

#### hasEmpty()
* Same as `has()` but works only with *empty attributes*

#### hasWithPrefix()
* (Boolean) `hasWithPrefix(String prefix)`
* Checks presence for at least one of the attributes that have a name starting with `prefix`
* Example:
``` js
var manager = el.getAttributesManager();

// checks if it has at least one attribute starting with 'quasar-'
// some examples that would generate a hit: 'quasar-rocks', 'quasar-awesomeness'
(Boolean) manager.hasWithPrefix('quasar-');
```

#### hasEmptyWithPrefix()
* Same as `hasWithPrefix()` but works only with *empty attributes*

#### getAll()
* (Object) `getAll()`
* Retrieve all attributes in an object
* Example:
``` js
var manager = el.getAttributesManager();
var attribs = manager.getAll();
```

#### getEmpty()
* (Object) `getEmpty()`
* Retrieve all *empty-only* attributes in an object
* Example:
``` js
var manager = el.getAttributesManager();
var attribs = manager.getEmpty();
```

#### getWithPrefix()
* (Object) `getWithPrefix(String prefix)`
* Retrieve all attributes in an object that have a name starting with `prefix`
* Example:
``` js
var manager = el.getAttributesManager();
var attribs = manager.getWithPrefix('quasar-');
```

#### getEmptyWithPrefix()
* Same as `getWithPrefix()` but works only with *empty attributes*

## Taking Action based on Presence

#### with()
* (Manager Object) `with(String/Array list, Function fn[, String defaultName)]`
* Take an action if (and only if) one attribute is `list` is present. Calls `fn()` with that attribute name. If no attribute is present, the `defaultName` is used. If no `defaultName` is specified, it does NOT call `fn()`.
* **If action is taken, then attribute is automatically removed from DOM node.**
* Example:
``` js
var manager = el.getAttributesManager();

manager.with('scroll shadow-scroll', function(name, value) {
  // name is the attribute name, which can be:
  // 'scroll' or 'shadow-scroll' if at least one of these are present
  // or 'keep-marginals' (the default name)
}, 'keep-marginals');

// or
manager.with('scroll shadow-scroll', function(name, value) {
  // this function is called only if either (not both)
  // 'scroll' or 'shadow-scroll' attributes are present
});
```

#### withEmpty()
* Same as `with()`, but works only with *empty attributes*


## Removing Attribute(s)

#### remove()
* (Manager Object) `remove([String/Array list])`
* Removes attribute(s) from `list` from DOM node.
* Example:
``` js
var manager = el.getAttributesManager();
manager.remove('scroll shadow-scroll');
// now it is ensured that the node doesn't have either attributes
```

#### removeEmpty()
* Same as `remove()`, but works only with *empty attributes*

#### removeWithPrefix()
* (Manager Object) `removeWithPrefix(String prefix)`
* Removes attribute(s) that have a name starting with `prefix` from DOM node.
* Example:
``` js
var manager = el.getAttributesManager();
manager.removeWithPrefix('quasar-');
// now it is ensured that the node doesn't have any 'quasar-*' named attributes
```

#### removeEmptyWithPrefix()
* Same as `removeWithPrefix()`, but works only with *empty attributes*

## Adding Attribute(s)

* (Manager Object) `add(String name, String value)`
* Adds an attribute with value.
* Example:
``` js
var manager = el.getAttributesManager();

// Example - before: <quasar-layout></quasar-layout>
manager.add('quasar', 'rocks');
// Example - after: <quasar-layout quasar="rocks"></quasar-layout>
```

## Updating Attribute List
Sometimes there are external factors that change the attribute list after you call `getAttributesManager()`. The internal list of attributes needs to be updated, so simply call:
``` js
var manager = el.getAttributesManager();
// ... some actions take place that change attributes list
// ... then we need to call:
manager.update();
```

## Handling CSS Classes
You may need to handle CSS Classes, but in a slight and important different fashion than jQuery.

#### getClass()
* (String) `getClass()`
* Returns a space delimited String containing all classes of the node

#### hasClass()
* (Boolean) `hasClass(String/Array list)`
* Return `true` if at least one of the CSS classes from `list` is present

#### hasClassWithPrefix()
* (Boolean) `hasClassWithPrefix(String prefix)`
* Return `true` if at least one of the CSS classes from `list` that have a name that starts with `prefix`

#### removeClass()
* (Manager Object) `removeClass(String/Array list)`
* Removes all CSS classes in `list`

#### removeClassWithPrefix()
* (Manager Object) `removeClassWithPrefix(String prefix)`
* Removes all CSS classes in `list` that have a name that starts with `prefix`

#### addClass()
* (Manager Object) `addClass(String/Array list)`
* Adds CSS classes from `list`
