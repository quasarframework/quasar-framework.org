title: Carousel
---
Quasar Carousel is a Vue Component which you can use to display more information with less real estate, using slides. Useful for creating Wizards too.
<input type="hidden" data-fullpage-demo="media/carousel">

The Carousel height is determined by the slide with biggest height, unless the `height` prop is used.

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: [
    'QCarousel',
    'QCarouselSlide',
    'QCarouselControl'
  ],
}
```

## Basic Usage
Here is a very basic example:
```html
<q-carousel class="text-white">
  <q-carousel-slide class="bg-primary">
    Slide 1
  </q-carousel-slide>
  <q-carousel-slide class="bg-secondary">
    Slide 2
  </q-carousel-slide>
  <q-carousel-slide class="bg-tertiary">
    Slide 3
  </q-carousel-slide>
</q-carousel>
```

## QCarousel (Parent)

### QCarousel Vue Properties
Supports `v-model` which determines the slide number.

| Vue Property | Type | Description |
| --- | --- | --- |
| `color` | String | One from [Quasar Color Palette](/components/color-palette.html). It determines the color of the out of the box Carousel controls (arrows, quick nav). |
| `arrows` | Boolean | Show navigation arrows. |
| `infinite` | Boolean | Infinite slides scrolling. |
| `autoplay` | Boolean/Number | Auto scrolls between slides. Works great along `infinite` prop (but `infinite` is not required). If used as a number, it represents the number of milliseconds between scrolls. |
| `quick-nav` | Boolean | Shows navigational dots at bottom. |
| `quick-nav-icon` | String | Icon to use instead of the navigational dots at bottom. |
| `no-swipe` | Boolean | Disable navigation by touch/mouse actions. |
| `handle-arrow-keys` | Boolean | Allow navigation with left and right arrow key. In this case, it's best to render only one such Carousel at a time. |
| `easing` | Function | Easing function used when changing slide from autoplay or button press. |
| `swipe-easing` | Function | Easing function used when changing slide with a swipe. |
| `thumbnails` | Array | (v0.15.11+) Array of thumbnails pointing to "statics" folder. Check examples. |

### QCarousel Vue Methods
| Vue Method | Description |
| --- | --- |
| `next()` | Goes to next slide. |
| `previous()` | Goes to previous slide. |
| `goToSlide(slideNumber)` | Go to the desired slide. `slideNumber` is 0-based. |

### QCarousel Vue Events
| Vue Event | Description |
| --- | --- |
| `@input(index)` | Emits the index of the current slide. |
| `@slide-trigger(oldIndex, newIndex, direction)` | Emitted before animating to the new slide. |
| `@slide(index, direction)` | Emits the index of the current slide and the direction of the slide after the transition animation finishes. Emits even if navigating to the same slide. |
| `@slide-direction('next'/'previous')` | Emitted when navigating to a slide, describing direction (next / previous). |

## QCarouselSlide (Child)
| Vue Property | Type | Description |
| --- | --- | --- |
| `img-src` | String | An image from statics folder. Example: 'statics/mountaings.png'. |

## QCarouselControl (Child)
| Vue Property | Type | Description |
| --- | --- | --- |
| `position` | String | Position of the control: 'top', 'top-right', 'top-left', 'bottom-right', etc |
| `offset` | Array of 2 Numbers | Offset on horizontal and vertical (in pixels). Example (default value): `[18, 18]`. |

## Examples

### Carousel with a base color, Arrows, Quick Navigation, and slides with images
``` html
<template>
  <q-carousel
    color="white"
    arrows
    height="400px"
  >
    <q-carousel-slide img-src="statics/mountains.jpg">
      <div class="absolute-bottom custom-caption">
        <div class="q-display-1">First stop</div>
        <div class="q-headline">Mountains</div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide img-src="statics/parallax1.jpg">
      <div class="absolute-bottom custom-caption">
        <div class="q-display-1">Second stop</div>
        <div class="q-headline">Famous City</div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide img-src="statics/parallax2.jpg">
      <div class="absolute-bottom custom-caption">
        <div class="q-display-1">Third stop</div>
        <div class="q-headline">Famous Bridge</div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<style>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: $grey-4;
  background: rgba(0, 0, 0, 0.5);
}
</style>
```

### Carousel with image slides and thumbnails
> Requires Quasar v0.15.11+

```html
<q-carousel
  color="white"
  arrows
  quick-nav
  height="300px"
  :thumbnails="[
    'statics/mountains.jpg',
    'statics/parallax1.jpg',
    'statics/parallax2.jpg'
  ]"
>
  <q-carousel-slide img-src="statics/mountains.jpg" />
  <q-carousel-slide img-src="statics/parallax1.jpg" />
  <q-carousel-slide img-src="statics/parallax2.jpg" />
</q-carousel>
```

### Infinite scroll, auto-play and custom Quick Navigation icon. Second slide has a Youtube video.
Use `infinite` Vue prop.

``` html
<q-carousel
  color="white"
  arrows
  quick-nav
  quick-nav-icon="favorite"
  infinite
  autoplay
  height="300px"
>
  <q-carousel-slide img-src="statics/mountains.jpg" />
  <q-carousel-slide>
    <q-video
      class="absolute-full"
      src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
    />
  </q-carousel-slide>
  <q-carousel-slide img-src="statics/parallax1.jpg" />
  <q-carousel-slide img-src="statics/parallax2.jpg" />
</q-carousel>
```

### Custom Quick Navigation and different type of slides content
Third slide has a Youtube video.
``` html
<q-carousel
  color="white"
  quick-nav
  height="300px"
>
  <q-carousel-slide class="text-white bg-primary row flex-center">
    <div class="q-display-2">First Slide</div>
  </q-carousel-slide>
  <q-carousel-slide class="text-white bg-secondary row flex-center">
    <div class="q-display-2">Second Slide</div>
  </q-carousel-slide>
  <q-carousel-slide class="text-white bg-primary">
    <div v-for="n in 7" :key="`custom-${n}`" class="q-ma-sm">
      {{ lorem }}
    </div>
  </q-carousel-slide>
  <q-carousel-slide img-src="statics/mountains.jpg" />
  <q-carousel-slide>
    <q-video
      class="absolute-full"
      src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
    />
  </q-carousel-slide>
  <q-carousel-slide img-src="statics/parallax1.jpg" />
  <q-carousel-slide img-src="statics/parallax2.jpg" />

  <q-carousel-control slot="control-nav" slot-scope="carousel" :offset="[18, 52]">
    <q-btn
      @click="carousel.previous"
      :disable="!carousel.canGoToPrevious"
      color="amber" text-color="black"
      icon="keyboard_arrow_left"
      round dense
      class="q-mr-small"
    />
    <q-btn
      @click="carousel.next"
      :disable="!carousel.canGoToNext"
      color="amber" text-color="black"
      icon="keyboard_arrow_right"
      round dense
    />
  </q-carousel-control>

  <q-btn
    slot="quick-nav"
    slot-scope="props"
    color="white"
    flat
    dense
    :label="`${props.slide + 1}`"
    @click="props.goToSlide()"
    :class="{inactive: !props.current}"
  />
</q-carousel>
```

### Using v-model & some custom controls: autoplay button, progressbar, fullscreen toggle
``` html
Controlling from outside of Carousel:
<q-btn
  rounded
  color="primary"
  @click="slide = 1"
  icon="arrow_downward"
  label="Navigate to second slide"
  class="q-ml-sm"
/>

<q-carousel
  v-model="slide"
  color="amber"
  quick-nav
  infinite
  :autoplay="autoplay"
  height="400px"
>
  <q-carousel-slide
    v-for="n in 7" :key="`car-${n}`"
    class="flex flex-center"
    :class="`bg-${colors[n % 5]}`"
  >
    <div class="text-center">
      <div class="q-display-3">Slide {{ n }}</div>
      <div>Slides can contain any content.</div>
    </div>
  </q-carousel-slide>

  <q-carousel-control
    slot="control"
    position="top-right"
    :offset="[18, 18]"
    class="text-white"
    style="background: rgba(0, 0, 0, .3); padding: 4px; border-radius: 4px"
  >
    <q-toggle dark color="amber" v-model="autoplay" label="Auto Play" />
  </q-carousel-control>

  <q-carousel-control
    slot="control-button"
    slot-scope="carousel"
    position="bottom-right"
    :offset="[18, 22]"
  >
    <q-btn
      round dense push
      color="amber"
      :icon="carousel.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
      @click="carousel.toggleFullscreen()"
    />
  </q-carousel-control>

  <q-carousel-control slot="control-progress" slot-scope="carousel" position="bottom" :offset="[42, 100]">
    <q-progress :percentage="carousel.percentage" stripe color="amber" :animate="autoplay" />
  </q-carousel-control>
</q-carousel>
```

### Custom easing animation.
``` html
<template>
  <q-carousel
    class="text-white"
    :easing="overshoot"
    infinite
    autoplay
    arrows
    color="white"
    height="250px"
  >
    <q-carousel-slide
      v-for="n in 7" :key="`anim-${n}`"
      class="flex flex-center"
      :class="`bg-${colors[n % 5]}`"
    >
      <div class="q-display-3">Slide {{ n }}</div>
    </q-carousel-slide>
  </q-carouse>
</template>

<script>
import { easing } from 'quasar'
// easing is a collection;
// we're picking "overshoot" from it

export default {
  data () {
    return {
      overshoot: easing.overshoot
    }
  }
}
</script>
```

### Launching on Fullscreen
Useful for creating Wizards.

```html
<template>
  <div>
    <q-btn color="primary" class="glossy" @click="modal = true">
      Launch
    </q-btn>
    <q-modal v-model="modal" maximized>
      <q-carousel
        color="white"
        arrows
        quick-nav
        class="text-white full-height"
      >
        <q-carousel-slide
          v-for="n in 7" :key="`full-${n}`"
          class="flex flex-center"
          :class="`bg-${colors[n % 5]}`"
        >
          <div class="q-display-3">Step {{ n }}</div>
        </q-carousel-slide>

        <q-carousel-control
          slot="control-full"
          slot-scope="carousel"
          position="bottom-right"
          :offset="[18, 22]"
        >
          <q-btn
            rounded push
            color="amber"
            icon="close"
            label="Close me"
            @click="modal = false"
          />
        </q-carousel-control>
      </q-carousel>
    </q-modal>
  </div>
</template>

<script>
export default {
  data () {
    return { modal: false }
  }
}
</script>
```
