title: Jumbotron
---
Quasar Jumbotron is similar to the one introduced by Bootstrap. It's a big box for calling extra attention to some special content or information.

Works great by using [Quasar Typography](/components/typography.html) CSS classes.
<input type="hidden" data-fullpage-demo="other-components/jumbotron">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QJumbotron']
}
```

## Examples

Basic:
``` html
<q-jumbotron>
  <div class="q-display-3">Hello, world!</div>
  <div class="q-subheading">
    This is a simple hero unit, a simple jumbotron-style component for calling extra
    attention to featured content or information.
  </div>
  <hr class="q-hr q-my-lg">
  <div class="q-title q-mb-md">Check out Quasar Framework components.</div>
  <q-btn color="primary" class="q-py-sm q-px-xl" label="Learn more" />
</q-jumbotron>
```

Coloring, with a dark background:
```html
<q-jumbotron class="bg-primary" dark>
  <div class="q-display-3">Hello, world!</div>
  <div class="q-subheading">
    This is a simple hero unit, a simple jumbotron-style component for calling extra
    attention to featured content or information.
  </div>
  <hr class="q-hr q-my-lg">
  <div class="q-title q-mb-md">Check out Quasar Framework components.</div>
  <q-btn color="white" text-color="primary" class="q-py-sm q-px-xl" label="Learn more" />
</q-jumbotron>
```

Using a CSS gradient for background:
```html
<q-jumbotron gradient="circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%">
  <div class="q-display-3">Hello, world!</div>
  <div class="q-subheading">
    This is a simple hero unit, a simple jumbotron-style component for calling extra
    attention to featured content or information.
  </div>
  <hr class="q-hr q-my-lg">
  <div class="q-title q-mb-md">Check out Quasar Framework components.</div>
  <q-btn color="primary" class="q-py-sm q-px-xl" label="Learn more" />
</q-jumbotron>
```

Using an image for background:
```html
<q-jumbotron dark img-src="statics/mountains.jpg">
  <div class="q-display-3">Hello, world!</div>
  <div class="q-subheading">
    This is a simple hero unit, a simple jumbotron-style component for calling extra
    attention to featured content or information.
  </div>
  <hr class="q-hr q-my-lg">
  <div class="q-title q-mb-md">Check out Quasar Framework components.</div>
  <q-btn color="primary" class="q-py-sm q-px-xl" label="Learn more" />
</q-jumbotron>
```

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `dark` | Boolean | Are we displaying it on a dark background? |
| `tag` | String | HTML tag to use to render the component. Default: 'div' |
| `img-src` | String | Background image URL to statics folder. |
| `gradient` | String | CSS gradient value |
