title: Video Embedding
---
Embedding a video like Youtube is easy. It also resizes to fit the container by default.
<input type="hidden" data-fullpage-demo="media/video">
## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: [
    'QVideo'
  ]
}
```
## Using QVideo
``` html
<q-video
  src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
  style="width: 853px; height: 480px"
/>
```

Or, if you prefer the "raw" version for more control:
``` html
<div class="q-video">
  <iframe
    width="853"
    height="480"
    src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>
```
