title: Ajax Requests
---

> Quasar recommends axios during project initialization: `Use Axios for Ajax calls? (Y/n)`

Then you should create a new plugin `axios.js` that looks like this:   
(Here you can also specifiy additional settings for your axios instance)
```
import axios from 'axios'

export default ({app, router, Vue}) => {
  Vue.prototype.$axios = axios
}
```

Usage in you single file components methods will be like:
```
methods: {
  loadData () {
    this.$axios.get('/api/backend')
      .then((response) => {
        this.data = response.data.data
      })
      .catch(() => {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem'
        })
      })
  }
}
```

Usage in Vuex Actions for globally adding headers to axios (like during authentication):
```
import axios from 'axios'

export function register ({commit}, form) {
  return axios.post('api/auth/register', form)
    .then(response => {
      commit('login', {token: response.data.token, user: response.data.user})
      LocalStorage.set('token', response.data.token)
      setAxiosHeaders(response.data.token)
    })
}

function setAxiosHeaders (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}
```

- Also look at axios docs for more information: [axios](https://github.com/axios/axios)
