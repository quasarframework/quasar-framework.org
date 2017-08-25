title: Image Gallery
---
All Components below are responsive. They accommodate to the width of their container.
<input type="hidden" data-fullpage-demo="media/image-gallery">

## Responsive Images
Just add the `responsive` CSS class to it.

``` html
<img src="~assets/quasar.jpg" class="responsive">
```

## Avatar Images
Just add the `avatar` CSS class to it.

``` html
<img src="~assets/q-avatar.jpg" class="avatar">
```

## Image Gallery
Use this Web Component when you want to display multiple images together.

``` html
<q-gallery :src="gallery" />

<!-- With infinite scrolling and autoplay and dots and fullscreen -->
<q-gallery
  infinite
  autoplay
  dots
  fullscreen
  :src="gallery"
/>
```

### Vue Properties
| Property | Type | Description |
| --- | --- | --- |
| `src` | Array | Array of Strings represting URLs. Use images from statics folder. |
| `infinite` | Boolean | Infinite slides scrolling |
| `autoplay` | Boolean/Number | Auto scrolls between slides. Works great along `infinite` prop (but `infinite` is not required). If used as a number, it represents the number of milliseconds between scrolls. |
| `arrows` | Boolean | Show arrows |
| `dots` | Boolean | Show dots at bottom |
| `fullscreen` | Boolean | Shows Fullscreen button |
| `handle-arrow-keys` | Boolean | Allow navigation with left and right arrow key |
| `actions` | Boolean | Show Actions slot |

## Image Gallery Carousel
When the real estate of the Page is an issue, use this Web Component which displays multiple images using a [Carousel Component](/components/slider.html).

Gallery Carousel has two control buttons available: one which when clicked displays a list of thumbnails of all images in the gallery, and the other which can bring the slider to fullscreen.

User can switch between images using the arrow buttons or through swipe actions. When on desktop, user can also drag on images to left or right.

``` html
<!-- Template for VueModel below -->
<q-gallery-carousel :src="gallery" />
```

### Vue Properties
| Property | Type | Description |
| --- | --- | --- |
| `src` | Array | Strings represting URLs. Use images from statics folder. |

### Vue Methods
| Property | Description |
| --- | --- |
| `toggleQuickView()` | Toggle thumbnails view. |
| `goToSlide(Number index, Boolean animation)` | Go to a certain slide number (with animation or not). |

### Vue Events
| Property | Description |
| --- | --- |
| `@slide(slideNumber)` | Triggered when slide number changes. |
