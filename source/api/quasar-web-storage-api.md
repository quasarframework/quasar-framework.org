title: Quasar Web Storage
---

Quasar provides a wrapper over Web Storage API.

> **NOTE**
> Web Storage API only retrieves strings. **Quasar retrieves data with its original data type.** You tell it to store a number then to retrieve it and it will still be a number, not a string representation of the number as with Web Storage API. Same for JSON, Regular Expressions, Dates, Booleans and so on. Read below.

## Getting Started

Quasar supports both Local and Session Storage.

``` js
quasar.set.local.storage.item(key, value);
var value = quasar.get.local.storage.item(key);

quasar.set.session.storage.item(key, value);
var value = quasar.get.session.storage.item(key);
```

Before we jump to discuss on the API, let's see what data types are supported out of the box.

## Data Types

Quasar Storage supports (but not limited to) the following data types out of the box. If you store one of these types, the retrieved data will have the same data type.

* Dates
* Regular Expressions
* Numbers
* Booleans
* Strings
* Plain Javascript Objects

If you store any *other* data type, the returned value will be a String.

So you can even store functions, but be careful that you need to eval() the returned value (which is a String representation of the function).

## Methods

### Storing Data
``` js
quasar.set.local.storage.item(key, value);
quasar.set.session.storage.item(key, value);
```

### Retrieving Data
One item:
``` js
var item = quasar.get.local.storage.item(key);
var item = quasar.get.session.storage.item(key);
```
All items:
``` js
var store = quasar.get.all.local.storage.items();
var store = quasar.get.all.session.storage.items();
```

### Iterating through Store
Getting length of store:
``` js
var length = quasar.get.local.storage.length();
var length = quasar.get.session.storage.length();
```
Getting item at index:
``` js
var item = quasar.get.local.storage.at.index(index);
var item = quasar.get.session.storage.at.index(index);
```
Now you know how to loop through the store.

### Removing Data
One item:
``` js
quasar.remove.local.storage.item(key);
quasar.remove.session.storage.item(key);
```
All items (clear the store):
``` js
quasar.clear.local.storage();
quasar.clear.session.storage();
```

### Is Store Empty?
``` js
(boolean) quasar.local.storage.is.empty()
(boolean) quasar.session.storage.is.empty()
```

### Is Key in Store?
``` js
(boolean) quasar.has.local.storage.item()
(boolean) quasar.has.session.storage.item()
```
