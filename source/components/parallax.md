title: Parallax
---
Parallax scrolling is a technique in computer graphics and web design, where background images move by the camera slower than foreground images, creating an illusion of depth in a 2D scene and adding to the immersion.

Quasar provides an out of the box Vue Component you can use. It takes care of a lot of quirks, including image size which can actually be smaller than the window width/height.

<input type="hidden" data-fullpage-demo="web-components/parallax">

## Basic Usage

``` html
<quasar-parallax src="assets/mountains.jpg">
  <!-- Dom elements to display while loading image -->
  <div slot="loading">Loading...</div>

  <!--
    The rest of Dom elements get displayed on
    top of the Parallax image after it's loaded
  -->
  <h1>Parallax</h1>
</quasar-parallax>
```

While the underlying image is being loaded you can display a specific message through `<div slot="loading">...</div>`. After image has loaded, you can also display some content on top of the Parallax image (in the example above an `<h1>` tag).

## Vue Properties

| Param Attributes | Type | Description |
| --- | --- | --- |
| `src` | String | Source for the image. |
| `height` | Number | Height of Parallax in pixels. Default value is 500. |
| `speed` | Number | Float between 0 and 1. |

Example:
``` html
<!-- VueModel contains data property "imageURL" -->
<quasar-parallax :src="imageURL" :height="300">
  <div slot="loading">Loading...</div>
  <h1>Parallax</h1>
</quasar-parallax>
```
