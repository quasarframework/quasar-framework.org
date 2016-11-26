title: Image Gallery
---
All Components below are responsive. They accommodate to the width of their container.

<input type="hidden" data-fullpage-demo="web-components/image-gallery">

## Responsive Images
Just add the `responsive` CSS class to it.

``` html
<img src="assets/quasar.jpg" class="responsive">
```

## Avatar Images
Just add the `avatar` CSS class to it.

``` html
<img src="assets/q-avatar.jpg" class="avatar">
```

## Image Gallery
Use this Web Component when you want to display multiple images together.

``` html
<!-- Template for VueModel below -->
<q-gallery :src="gallery"></q-gallery>
```

``` js
// VueModel for template above
{
  ...,
  data: {
    ...,
    gallery: [
      'assets/mountains.jpg',
      'assets/parallax1.jpg',
      'assets/parallax2.jpg'
    ]
  }
}
```

## Image Gallery Slider
When the real estate of the Page is an issue, use this Web Component which displays multiple images using a Slider Component. Read more about Sliders [here](/components/slider.html).

Gallery Slider has two control buttons available: one which when clicked displays a list of thumbnails of all images in the gallery, and the other which can bring the slider to fullscreen.

User can switch between images using the arrow buttons or through swipe actions. When on desktop, user can also drag on images to left or right.

``` html
<!-- Template for VueModel below -->
<q-gallery-slider :src="gallery"></q-gallery-slider>
```

``` js
// VueModel for template above
{
  ...,
  data: {
    ...,
    gallery: [
      'assets/mountains.jpg',
      'assets/parallax1.jpg',
      'assets/parallax2.jpg'
    ]
  }
};
```
