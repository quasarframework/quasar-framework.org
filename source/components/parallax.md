title: Quasar Parallax
---
Parallax scrolling is a technique in computer graphics and web design, where background images move by the camera slower than foreground images, creating an illusion of depth in a 2D scene and adding to the immersion.

Quasar provides an out of the box Web Component you can use. It takes care of a lot of quirks, including image size which can actually be smaller than the window width/height.

<input type="hidden" data-fullpage-demo="parallax">

## Basic Usage

``` html
<parallax src="assets/mountains.jpg">
  <div slot="loading">Loading...</div>
  <h1>Parallax</h1>
</parallax>
```

While the underlying image is being loaded you can display a specific message through `<div slot="loading">...</div>`. After image has loaded, you can also display some content on top of the Parallax image (in the example above an H1 tag).

## Vue Properties

| Vue Property | Type | Description |
| --- | --- | --- |
| `src` | String | Source for the image. |
| `height` | Number | Height of Parallax in pixels. Default value is 500. |

Example:
``` html
<!-- VueModel contains data property "imageURL" -->
<parallax :src="imageURL" :height="300">
  <div slot="loading">Loading...</div>
  <h1>Parallax</h1>
</parallax>
```
