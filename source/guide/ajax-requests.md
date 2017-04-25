title: Ajax Requests
---
Quasar recommends using `Axios` or `Vue-Ressource`.
These packages are not provided by default so you will have to npm install them and import from `src/main.js`.


## Quickstart with axios
Installation: `npm install axios --save`

First make the package globally available within Vue(main.js):
```
import axios from 'axios';
Vue.prototype.$http = axios
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
Get started with the documentation for [vue-ressource](https://github.com/pagekit/vue-resource).
Vue Cookbook topic [vuejs-cookbook](https://vuejs.org/v2/cookbook/adding-instance-properties.html)
Using libraries from npm with vue: [vuejsdevelopers.com](http://vuejsdevelopers.com/2017/04/22/vue-js-libraries-plugins/)
