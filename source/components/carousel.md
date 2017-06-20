title: Carousel
---
Quasar Carousel is a Vue Component which you can use to display more information with less real estate, using slides.
<input type="hidden" data-fullpage-demo="grouping/carousel">

The Carousel height is determined by the slide with biggest height.

## Basic Carousel
Basic Carousel. No controls. Just swipe between slides or
use you mouse to drag slides to left or right.

``` html
<q-carousel class="text-white">
  <div slot="slide" class="bg-primary">
    Slide 1
  </div>
  <div slot="slide" class="bg-secondary">
    Slide 2
  </div>
  <div slot="slide" class="bg-tertiary">
    Slide 3
  </div>
</q-carousel>
```

## Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `infinite` | Boolean | Infinite slides scrolling |
| `autoplay` | Boolean/Number | Auto scrolls between slides. Works great along `infinite` prop (but `infinite` is not required). If used as a number, it represents the number of milliseconds between scrolls. |
| `arrows` | Boolean | Show arrows |
| `dots` | Boolean | Show dots at bottom |
| `fullscreen` | Boolean | Shows Fullscreen button |
| `actions` | Boolean | Show Actions slot |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `next(doneFn)` | Goes to next slide. |
| `previous(doneFn)` | Goes to previous slide. |
| `goToSlide(slideNumber, doneFn)` | Go to the desired slide. `slideNumber` is 0-based. |
| `toggleFullscreen()` | Toggles fullscreen mode. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@slide(index, direction)` | Emits the index of the current slide and the direction of the slide when the transition animation finishes. Emits even if navigating to the same slide. |

## Carousel with Arrows, Dots and Fullscreen Controls
Carousels can contain button controls, like:
* Arrows so user can switch between slides if swipe actions are not enough.
* Clickable small dots to also quickly switch between slides and give a hint on the number of current slide.
* Fullscreen button so Carousel can be displayed over all screen real-estate.

To show these controls simply add `arrows`, `dots` and/or `fullscreen` DOM node attributes.

``` html
<q-carousel arrows dots fullscreen class="text-white">
  <div slot="slide" class="bg-primary">
    Slide 1
  </div>
  <div slot="slide" class="bg-secondary">
    Slide 2
  </div>
</q-carousel>
```

## Carousel with Centered Content
Add CSS class `centered` to the slide that you want to center its content.

``` html
<q-carousel arrows dots class="text-white">
  <div slot="slide" class="bg-primary centered">
    Slide 1
  </div>
  <div slot="slide" class="bg-secondary centered">
    Slide 2
  </div>
</q-carousel>
```

## Carousel with Infinite Scrolling
Use `infinite` Vue prop.

``` html
<q-carousel infinite class="text-white">
  <div slot="slide" class="bg-primary centered">
    Slide 1
  </div>
  <div slot="slide" class="bg-secondary centered">
    Slide 2
  </div>
</q-carousel>
```

## Carousel with Autoplay
Use `autoplay` Vue prop. Works great with `infinite` prop too (but `infinite` is not required).

``` html
<q-carousel autoplay class="text-white">
  <div slot="slide" class="bg-primary centered">
    Slide 1
  </div>
  <div slot="slide" class="bg-secondary centered">
    Slide 2
  </div>
</q-carousel>
```

## Carousel with Custom Actions
Put icons on the same DOM hierarchical level as the slides.

``` html
<q-carousel arrows dots actions class="text-white">
  <div slot="slide" class="bg-primary">
    Slide 1
  </div>
  <div slot="slide" class="bg-secondary">
    Slide 2
  </div>
  <div slot="slide" class="bg-tertiary">
    Slide 3
  </div>

  <q-icon slot="action" @click="someMethod" name="camera_enhance" />
  <q-icon slot="action" @click="someOtherMethod" name="bookmark_border" />
  <q-icon slot="action" @click="thirdMethod" name="add_shopping_cart" />
</q-carousel>
```

## Launch Carousel in Fullscreen
You can launch a Carousel in Fullscreen by using a [Modal](/components/modal.html) component:

``` html
<q-btn color="primary" glossy @click="$refs.modal.open()">
  Launch
</q-btn>
<q-modal ref="modal" class="maximized">
  <q-carousel arrows dots class="text-white full-height">
    <div slot="slide" class="bg-primary centered">
      <h1>Slide 1</h1>
      <q-btn color="dark" glossy @click="$refs.modal.close()">Close Me</q-btn>
    </div>
    <div slot="slide" class="bg-secondary centered">
      <h1>Slide 2</h1>
      <q-btn color="dark" glossy @click="$refs.modal.close()">Close Me</q-btn>
    </div>
    <div slot="slide" class="bg-tertiary centered">
      <h1>Slide 3</h1>
      <q-btn color="dark" glossy @click="$refs.modal.close()">Close Me</q-btn>
    </div>
  </q-carousel>
</q-modal>
```
