title: Form Validation
---
Recommended package for Form Validations is `Vuelidate`.
Get started with the [documentation](https://monterail.github.io/vuelidate/).

## Example

``` html
<input
  type="text"
  v-model="form.email"
  @input="$v.form.email.$touch()"
  class="full-width"
  :class="{'has-error': $v.form.email.$error}"
>

<button class="primary" @click="submit">Submit</button>
```

``` js
import { required, email } from 'vuelidate/lib/validators'
import { Toast } from 'quasar'

export default {
  data () {
    return {
      form: {
        email: ''
      }
    }
  },
  validations: {
    form: {
      email: { required, email  }
    }
  },
  methods: {
    submit () {
      this.$v.form.$touch()

      if (this.$v.form.$error) {
        Toast.create('Please review fields again.')
        return
      }

      // ...
    }
  }
}
```
