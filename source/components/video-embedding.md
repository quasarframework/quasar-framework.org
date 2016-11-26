title: Video Embedding
---
Embedding a video like Youtube is easy. It also resizes to fit the container by default.

<input type="hidden" data-fullpage-demo="web-components/video-embedding">

``` html
<q-video
  :src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
  style="width: 853px; height: 480px"
></q-video>
```

Or, if you prefer the "raw" version:
``` html
<div class="video">
  <iframe
    width="853"
    height="480"
    src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>
```
