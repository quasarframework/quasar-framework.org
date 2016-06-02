title: Quasar Slider
---
Quasar Slider is a Web Component which you can use to display more information with less real estate, using slides.

The Slider height is determined by the slide with biggest height.

<input type="hidden" data-fullpage-demo="slider">

## Basic Slider
Basic Slider. No controls. Just swipe between slides or
use you mouse to drag slides to left or right.

``` html
<slider class="text-white">
  <div slot="slide" class="bg-primary">
    Slide 1
  </div>
  <div slot="slide" class="bg-secondary">
    Slide 2
  </div>
  <div slot="slide" class="bg-tertiary">
    Slide 3
  </div>
</slider>
```

## Slider with Arrows, Dots and Fullscreen Controls
Sliders can contain button controls, like:
* Arrows so user can switch between slides if swipe actions are not enough.
* Clickable small dots to also quickly switch between slides and give a hint on the number of current slide.
* Fullscreen button so Slider can be displayed over all screen real-estate.

To show these controls simply add `arrows`, `dots` and/or `fullscreen` DOM node attributes.

``` html
<slider arrows dots fullscreen class="text-white">
  <div slot="slide" class="bg-primary">
    Slide 1
  </div>
  <div slot="slide" class="bg-secondary">
    Slide 2
  </div>
</slider>
```

## Slider with Centered Content
Add CSS class `centered` to the slide that you want to center its content.

``` html
<slider arrows dots class="text-white">
  <div slot="slide" class="bg-primary centered">
    Slide 1
  </div>
  <div slot="slide" class="bg-secondary centered">
    Slide 2
  </div>
</slider>
```

## Slider with Custom Actions
Put icons on the same DOM hierarchical level as the slides.

``` html
<slider arrows dots actions class="text-white">
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
</slider>
```

## Launch Slider in Fullscreen
You can launch a Slider in Fullscreen by using [Modals](/components/modal.html):

``` js
new quasar.Modal({
  template: modalTemplate
}).set({
  maximized: true
}).show();
```

Your modal template should only contain a slider like ones above.
