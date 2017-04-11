title: Ajax Requests
---
Quasar recommends using `Vue Resource` plugin for VueJs or `Axios`. These package are not provided by default so you will have to npm install them and import them from `src/main.js`.

## Quickstart with axios
Installation: `npm install axios --save`

Then in your component:
```
 import axios from 'axios'
  export default {
    data () {
    },
    mounted () {
      this.fetchUser()
    },
    methods: {
      fetchUser () {
        axios.get('https://randomuser.me/api/?results=1&noinfo/').then(response => {
          this.user = response.data.results[0]
        }).catch(e => {
          console.log(e)
        })
      }
    }
  }
```

Get started with the documentation for [vue-resource](https://github.com/pagekit/vue-resource) or [axios](https://github.com/mzabriskie/axios).
