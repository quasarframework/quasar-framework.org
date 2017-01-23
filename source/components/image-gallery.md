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

### Vue Properties
| Property | Type | Description |
| --- | --- | --- |
| `src` | Array | Strings represting URLs. Use images from statics folder. |

## Image Gallery Slider
When the real estate of the Page is an issue, use this Web Component which displays multiple images using a Slider Component. Read more about Sliders [here](/components/slider.html).

Gallery Slider has two control buttons available: one which when clicked displays a list of thumbnails of all images in the gallery, and the other which can bring the slider to fullscreen.

User can switch between images using the arrow buttons or through swipe actions. When on desktop, user can also drag on images to left or right.

``` html
<!-- Template for VueModel below -->
<q-gallery-slider :src="gallery"></q-gallery-slider>
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
