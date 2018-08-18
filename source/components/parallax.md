title: Parallax
---
Parallax scrolling is a technique in computer graphics and web design, where background images move by the camera slower than foreground images, creating an illusion of depth in a 2D scene and adding to the immersion.

Quasar provides an out of the box Vue Component you can use. It takes care of a lot of quirks, including image size which can actually be smaller than the window width/height.

Starting with Quasar v0.17.9+, you can also use videos as background content.
<input type="hidden" data-fullpage-demo="media/parallax">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: ['QParallax']
}
```

## Basic Usage

Specifying image with `src` property. Notice we are referencing an image from `statics` folder.
``` html
<q-parallax src="statics/mountains.jpg">
  <!--
    The rest of DOM elements get displayed on
    top of the Parallax image after it's loaded
  -->
  <h1>Parallax</h1>
</q-parallax>
```

Specifying an image through `media` slot. This way you can have more control on the image and also reference it from `assets` folder which is handled directly by Webpack.
``` html
<q-parallax>
  <img slot="media" src="assets/parallax2.jpg">
  <h1>Slot</h1>
</q-parallax>
```

Specifying a video with `media` slot. This way you can have more control on the video tag and also reference it from `assets` folder which is handled directly by Webpack.
``` html
<q-parallax>
  <video slot="media" poster="http://www.markhillard.com/sandbox/media/polina.jpg" autoplay loop muted>
    <source type="video/webm" src="http://www.markhillard.com/sandbox/media/polina.webm">
    <source type="video/mp4" src="http://www.markhillard.com/sandbox/media/polina.mp4">
  </video>

  <h1>Video</h1>
</q-parallax>
```

> **Warning**
> On some iOS platforms there may be problems regarding the autoplay feature of the native `<video>` tag. [Reference](https://webkit.org/blog/6784/new-video-policies-for-ios/). QParallax and Quasar are not interfering in any way with the client browser's ability/restrictions on the `<video>` tag.

As you noticed in the examples above, you can display some content on top of the Parallax image/video (in the example above an `<h1>` tag).

## Vue Properties

| Param Attributes | Type | Description |
| --- | --- | --- |
| `src` | String | (Optional) Source for the image. |
| `height` | Number | Height of Parallax in pixels. Default value is 500. |
| `speed` | Number | Float between 0 and 1. |

Another example:
``` html
<!-- VueModel contains data property "imageURL" -->
<q-parallax :src="imageURL" :height="300">
  <h1>Parallax</h1>
</q-parallax>
```
