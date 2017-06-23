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
// Make a get request
this.$http.get('/user')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```


- Get started with [axios](https://github.com/mzabriskie/axios)
- Get started with [vue-ressource](https://github.com/pagekit/vue-resource)
- Vue Cookbook topic [vuejs-cookbook](https://vuejs.org/v2/cookbook/adding-instance-properties.html)
- Using libraries from npm with vue: [vuejsdevelopers.com](http://vuejsdevelopers.com/2017/04/22/vue-js-libraries-plugins/)
