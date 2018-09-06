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
<q-input v-model="text" v-mask="AAA-SSS-XX99" />
...
```
### String Mask
If you want to have a simple mask, the directive can be called with a `string of tokens.

``` html
<!-- Template for VueModel below -->
...
<q-input v-model="text" v-mask="'##/##/####'" />
...
```

### Array Mask
If you need to have a dynamic mask, that need to be placed on the length of the string. You can pass to the directive an `array` of token `trings`.

``` html
<!-- Template for VueModel below -->
...
<q-input v-model="text" v-mask="['+## ###-###-###', '+## ### ###-###-###']" />
...
```

### Object Mask
If you mask need to have a custom rule, or an custom settings, you can pass an `object` as a value.

The object need to have two properties, `mask` and `tokens`. 
`mask` can be an `string` or an `array` of `strings`.

`tokens` need to be an `object` with each key being a regex pattern.
 
```html
<q-input v-model="text" v-mask="{mask: '##-@@-SS', tokens: {'@': { pattern: /[0-9a-zA-Z]/ }}}" />
```

```JS
{
  mask: '##-@@-SS',
  tokens: {
    '@': { 
      pattern: /[0-9a-zA-Z]/ 
    }
  }
}
```
 
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
