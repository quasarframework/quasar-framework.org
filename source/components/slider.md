title: Slider
---
Quasar Slider is a Vue Component which you can use to display more information with less real estate, using slides.

The Slider height is determined by the slide with biggest height.

<input type="hidden" data-fullpage-demo="web-components/slider">

## Basic Slider
Basic Slider. No controls. Just swipe between slides or
use you mouse to drag slides to left or right.

``` html
<q-slider class="text-white">
  <div slot="slide" class="bg-primary">
    Slide 1
  </div>
  <div slot="slide" class="bg-secondary">
    Slide 2
  </div>
  <div slot="slide" class="bg-tertiary">
    Slide 3
  </div>
</q-slider>
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

## Slider with Arrows, Dots and Fullscreen Controls
Sliders can contain button controls, like:
* Arrows so user can switch between slides if swipe actions are not enough.
* Clickable small dots to also quickly switch between slides and give a hint on the number of current slide.
* Fullscreen button so Slider can be displayed over all screen real-estate.

To show these controls simply add `arrows`, `dots` and/or `fullscreen` DOM node attributes.

``` html
<q-slider arrows dots fullscreen class="text-white">
  <div slot="slide" class="bg-primary">
    Slide 1
  </div>
  <div slot="slide" class="bg-secondary">
    Slide 2
  </div>
</q-slider>
```

## Slider with Centered Content
Add CSS class `centered` to the slide that you want to center its content.

``` html
<q-slider arrows dots class="text-white">
  <div slot="slide" class="bg-primary centered">
    Slide 1
  </div>
  <div slot="slide" class="bg-secondary centered">
    Slide 2
  </div>
</q-slider>
```

## Slider with Infinite Scrolling
Use `infinite` Vue prop.

``` html
<q-slider infinite class="text-white">
  <div slot="slide" class="bg-primary centered">
    Slide 1
  </div>
  <div slot="slide" class="bg-secondary centered">
    Slide 2
  </div>
</q-slider>
```

## Slider with Autoplay
Use `autoplay` Vue prop. Works great with `infinite` prop too (but `infinite` is not required).

``` html
<q-slider autoplay class="text-white">
  <div slot="slide" class="bg-primary centered">
    Slide 1
  </div>
  <div slot="slide" class="bg-secondary centered">
    Slide 2
  </div>
</q-slider>
```

## Slider with Custom Actions
Put icons on the same DOM hierarchical level as the slides.

``` html
<q-slider arrows dots actions class="text-white">
  <div slot="slide" class="bg-primary">
    Slide 1
  </div>
  <div slot="slide" class="bg-secondary">
    Slide 2
  </div>
  <div slot="slide" class="bg-tertiary">
    Slide 3
  </div>

  <i slot="action" @click="someMethod()">
    camera_enhance
  </i>
  <i slot="action" @click="someOtherMethod()">
    bookmark_border
  </i>
  <i slot="action" @click="thirdMethod()">
    add_shopping_cart
  </i>
</q-slider>
```

## Launch Slider in Fullscreen
You can launch a Slider in Fullscreen by using a [Modal](/components/modal.html) component:

``` html
<button class="primary glossy" @click="$refs.modal.open()">
  Launch
</button>
<q-modal ref="modal" class="maximized">
  <q-slider arrows dots class="text-white full-height">
    <div slot="slide" class="bg-primary centered">
      <h1>Slide 1</h1>
      <button class="dark glossy" @click="$refs.modal.close()">Close Me</button>
    </div>
    <div slot="slide" class="bg-secondary centered">
      <h1>Slide 2</h1>
      <button class="dark glossy" @click="$refs.modal.close()">Close Me</button>
    </div>
    <div slot="slide" class="bg-tertiary centered">
      <h1>Slide 3</h1>
      <button class="dark glossy" @click="$refs.modal.close()">Close Me</button>
    </div>
  </q-slider>
</q-modal>
```
