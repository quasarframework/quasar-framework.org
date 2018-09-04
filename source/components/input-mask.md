title: Directive "v-mask"
---
This directives can take an String or an Array of tokens, to be used as a masked input.

When the directive is applied all the response of the Input will be the masked value.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  directives: ['Mask']
}
```

## Basic Usage
``` html
<!-- Template for VueModel below -->
...
<q-input v-model="text" v-mask="'##/##/####'" />
<q-input v-model="text" v-mask="['+## ###-###-###', '+## ### ###-###-###']" />
...
```

### Mask Tokens
 
##### Numeric
```
'#' => [0-9] or '*'
'0' => [0-9]
'9' => [0-9]
``` 

##### Alphanumeric
```
'X' => [0-9a-zA-Z]
'S' => [a-zA-Z]
'A' => [a-zA-Z] Uppercased
'a' => [a-zA-Z] Lowercased
``` 

##### Escaped Token
```
'!' => Escape a Token
``` 
