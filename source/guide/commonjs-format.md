title: CommonJS Format
---
CommonJS modules are at the core of Quasar Framework and are the format that Quasar expects every module to adhere to. As well as ensuring your code is encapsulated and modular, CommonJS modules give you dependency management, scope isolation, and namespacing. They should be used in any JavaScript application that spans more than a few files.

The format is remarkably straightforward, but is something you'll have to adhere to in every file to make it work. CommonJS uses explicit exporting, so to expose a property inside a module to other modules, you'll need to do something like this:

```js
module.exports.propName = ...;
// or export multiple props at once:
module.exports = {
  prop1: ...,
  prop2: ...
};
```

The module dependency is also easy by using `require`.
``` js
var _ = require('lodash');
```

One more example:
``` js
// moduleA.js
module.exports = 'world';
```
``` js
// moduleB.js
var text = require('./moduleA');
console.log('Hello ' + text + '!'); // Hello world!
```

You can export anything: Functions, Strings, Numbers, Objects, Regexps, ...
