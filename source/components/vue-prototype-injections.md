title: Vue Prototype Injections
---
Quasar injects Vue prototype with `$q` object:

| Injection | Type | Description |
| --- | --- | --- |
| `$q.version` | String | Quasar version. |
| `$q.theme` | String | Theme being used. Examples: mat, ios |
| `$q.platform` | Object | Same object as [Platform](/components/platform-detection.html) import from Quasar. |
| `$q.events` | Object | Same object as [Events](/components/global-event-bus.html) import from Quasar. |

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

### Mobile Apps
When running under Cordova, you'll be able to use `$cordova` injection too (`this.$cordova` in Vue components script, `$cordova` in Vue templates).
