title: Quasar Web Storage
---

Quasar provides a wrapper over [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API).

> **NOTE**
> Web Storage API only retrieves strings. **Quasar retrieves data with its original data type.** You tell it to store a Number then to retrieve it and it will still be a Number, not a string representation of the number as with Web Storage API. Same for JSON, Regular Expressions, Dates, Booleans and so on. Read below.

## Getting Started

Quasar supports both Local and Session Storage.

``` js
import { LocalStorage, SessionStorage } from 'quasar'

LocalStorage.set(key, value)
let value = LocalStorage.get.item(key)

SessionStorage.set(key, value)
let value = SessionStorage.get.item(key)
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
import { LocalStorage, SessionStorage } from 'quasar'

LocalStorage.set(key, value)
SessionStorage.set(key, value)
```

### Retrieving Data
One item:
``` js
import { LocalStorage, SessionStorage } from 'quasar'

let item = LocalStorage.get.item(key)
let item = SessionStorage.get.item(key)
```
All items:
``` js
import { LocalStorage, SessionStorage } from 'quasar'

let item = LocalStorage.get.all()
let item = SessionStorage.get.all()
```

### Iterating through Store
Getting length of store:
``` js
import { LocalStorage, SessionStorage } from 'quasar'

let length = LocalStorage.get.length()
let length = SessionStorage.get.length()
```
Getting item at index:
``` js
import { LocalStorage, SessionStorage } from 'quasar'

let item = LocalStorage.get.index(index)
let item = SessionStorage.get.index(index)
```
Now you know how to loop through the store.

### Removing Data
One item:
``` js
import { LocalStorage, SessionStorage } from 'quasar'

LocalStorage.remove(key)
SessionStorage.remove(key)
```
All items (clear the store):
``` js
import { LocalStorage, SessionStorage } from 'quasar'

LocalStorage.clear()
SessionStorage.clear()
```

### Is Store Empty?
``` js
import { LocalStorage, SessionStorage } from 'quasar'

(boolean) LocalStorage.isEmpty()
(boolean) SessionStorage.isEmpty()
```

### Is Key in Store?
``` js
import { LocalStorage, SessionStorage } from 'quasar'

(boolean) LocalStorage.has(key)
(boolean) SessionStorage.has(key)
```
