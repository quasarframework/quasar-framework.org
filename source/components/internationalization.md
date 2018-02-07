title: Internationalization (I18n)
---
Internationalization is a design process that ensures a product (a website or application) can be adapted to various languages and regions without requiring engineering changes to the source code. Think of internationalization as readiness for localization.

Recommended package for handling website/app is [vue-i18n](https://github.com/kazupon/vue-i18n).

However, handling I18n in app-space is not enough. Quasar components have their own labels too. One option is to configure labels through label properties on each instance of Quasar components like QTable or QDatetime. This takes time and adds unnecessary complexity to your website/app. Instead, use the Quasar I18n (applies to Quasar components only!) system.

> For a complete list of available languages, check [Quasar I18n on Github](https://github.com/quasarframework/quasar/tree/dev/i18n).
> **If your desired language is not on that list**, then feel free to submit a PR to add it. It takes from 5 to 10 minutes at most. We kindly welcome any language!

## Configuring the Default Language
Edit `/quasar.conf.js`:
```js
framework: {
  i18n: 'de'
}
```

## Dynamically Changing Language
Example with a QSelect to dynamically change the Quasar components language:
```html
<template>
  <q-select
    stack-label="I18n"
    :options="[
      { label: 'English (US)',         value: 'en-us' },
      { label: 'English (UK)',         value: 'en-uk' },
      { label: 'Romanian',             value: 'ro' },
      { label: 'Chinese (Simplified)', value: 'zh-hans' },
      { label: 'Italian',              value: 'it' }
      { label: 'Spanish',              value: 'es' }
      { label: 'French',               value: 'fr' }
      { label: 'German',               value: 'de' },
      { label: 'Russian',              value: 'ru' },
      .......
    ]"
    v-model="lang"
  />
</template>

<script>
export default {
  data () {
    return {
      lang: this.$q.i18n.lang
    }
  },
  watch: {
    lang (lang) {
      // dynamic import, so loading on demand only
      import(`quasar-framework/i18n/${lang}`).then(lang => {
        this.$q.i18n.set(lang.default)
      })
    }
  }
}
</script>
```

## Using Quasar I18n in App Space
Although the Quasar I18n is designed only for Quasar components, you can still use it for your own website/app components too.

```html
"Close" label in current Quasar I18n language is:
{{ $q.i18n.label.close }}
```
