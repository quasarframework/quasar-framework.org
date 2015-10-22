title: Quasar Cookies
type: api
order: 6
---
This is a wrapper over the standardized `document.cookie`.

> **NOTE**
> In addition, you can read and write cookies using JSON objects.

# Read a Cookie
```
var value = quasar.get.cookie('cookie_name');
```
When cookie is not set, the return value is `undefined`.

# Read All Cookies
```
var cookies = quasar.get.all.cookies();
```
`cookies` variable will be an object with key-value pairs (cookie_name : cookie_value).

# Verify if Cookie is Set
```
(Boolean) quasar.has.cookie('cookie_name');
```

# Write a Cookie
```
quasar.set.cookie('cookie_name', cookie_value, options);
```

`options` is an Object which can have the following properties: `expire`, `path`, `domain`, `secure`. They are explained below.

```
quasar.set.cookie('quasar', 'framework', {
  secure: true
});
```

## Option `expires`
```
expires: 10
```
Define lifetime of the cookie. Value can be a Number which will be interpreted as days from time of creation or a Date object. If omitted, the cookie becomes a session cookie.

## Option `path`
```
path: '/'
```
Define the path where the cookie is valid. By default the path of the cookie is the path of the page where the cookie was created (standard browser behavior). If you want to make it available for instance across the entire domain use path: '/'. Default: path of page where the cookie was created.

## Option `domain`
```
domain: 'quasar-framework.org'
```
Define the domain where the cookie is valid. Default: domain of page where the cookie was created.

## Option `secure`
```
secure: true
```
If true, the cookie transmission requires a secure protocol (HTTPS) and will NOT be sent over HTTP. Default value is `false`.

# Remove a Cookie
```
quasar.remove.cookie('cookie_name');
```
