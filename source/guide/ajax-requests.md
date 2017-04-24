title: Ajax Requests
---
Quasar recommends using `Vue Resource` plugin for VueJs or `Axios`. These package are not provided by default so you will have to npm install them and import them from `src/main.js`.


## Quickstart with axios
Installation: `npm install axios --save`

First make the package globally available within Vue(main.js):
```
import axios from 'axios';
Object.definePrototype(Vue.prototype, '$http', { value: axios });
```


Then to use the package in your components:
```
this.$http.get('/').then(res => {
  if (res.status !== 200) {
    this.$http.get('/') // etc
    // Only works in a fat arrow callback.
  }
});
```


Get started with the documentation for [axios](https://github.com/mzabriskie/axios).
Using libraries from npm with vue: (vuejsdevelopers.com)(http://vuejsdevelopers.com/2017/04/22/vue-js-libraries-plugins/)
