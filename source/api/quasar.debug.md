title: Debug
---

The `quasar.debug` object has useful debugging methods:

### quasar.debug.printStack()
Useful when stuck somewhere in the code and you'd like to see the Javascript stack.
It outputs the stack to the console.

### quasar.debug.profile(`profile_name`)
Use it when you want to know how much time did something take to get executed. Example:

```
quasar.debug.profile('xyz');
//run some code... then to output results:
quasar.debug.profile('xyz');
```

You can have multiple profiles running at the same time.
