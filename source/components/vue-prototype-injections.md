title: Vue Prototype Injections
---
Quasar injects Vue prototype with `$q` object:

| Injection | Type | Description |
| --- | --- | --- |
| `$q.version` | String | Quasar version. |
| `$q.theme` | String | Theme being used. Examples: mat, ios |
| `$q.platform` | Object | Same object as [Platform](/components/platform-detection.html) import from Quasar. |
| `$q.i18n` | Object | Internationalisation for Quasar, containing labels etc (one of [i18n files](https://github.com/quasarframework/quasar/tree/dev/i18n)). Designed for Quasar components, but you can use in your app components too. |
| `$q.cordova` | Object | Reference to Cordova global object. Available only when running under a Cordova app. |
| `$q.electron` | Object | Reference to Electron global object. Available only when running under an Electron app. |

You can use it globally inside a Vue context (component script or template) like this:

```html
<!-- inside a Vue template -->
<template>
  <div>
    <div v-if="$q.platform.is.ios">
      Gets rendered only on iOS platform.
    </div>
  </div>
</template>

<script>
// not availabel here outside
// of the export

export default {
  // inside a Vue component script
  ...,

  // showing an example on a method, but
  // can be any part of Vue script
  methods: {
    show () {
      // prints out Quasar version
      console.log(this.$q.version)
    }
  }
}
</script>
```
