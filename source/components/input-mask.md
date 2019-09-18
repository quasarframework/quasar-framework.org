title: Directive "v-mask"
---
This directives can take a String or an Array of tokens and can use them to create a specialized masked input.

When the directive is applied, the value of the input will be kept in line with the masked value. This is great for adding, for instance, a mask for a telephone number input.  

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
If you want to have a simple mask, the directive can be called with a `string of tokens`.

``` html
<!-- Template for VueModel below -->
...
<q-input v-model="text" v-mask="'##/##/####'" />
...
```

### Array Mask
If you need to have a dynamic mask that needs to be placed on the length of the string. You can pass an `array` of token `strings` to the directive.

``` html
<!-- Template for VueModel below -->
...
<q-input v-model="text" v-mask="['+## ###-###-###', '+## ### ###-###-###']" />
...
```

### Object Mask
If your mask needs to have a custom rule, or a custom setting, you can pass an `object` as the masking value.

The object needs to have two properties, `mask` and `tokens`. 
`mask` can be a `string` or an `array` of `strings`.

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
