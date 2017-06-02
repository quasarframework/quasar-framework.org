title: Cards
---
Quasar Cards are a great way to display important pieces of content, and are quickly emerging as a core design pattern for Apps. They're a great way to contain and organize information, while also setting up predictable expectations for the user. With so much content to display at once, and often so little screen real-estate, Cards have fast become the design pattern of choice for many companies, including the likes of Google and Twitter.

Quasar Cards are a collection of components that you can use, based on the needs. It's all about being creative. Experiment with different Web Components by embedding them in Card components to create awesome results.

## Basic Usage
<input type="hidden" data-demo="css/card/basic">

Familiarize yourself with Card components with the examples below. The only requirement is that QCard needs to wrap all the other ones. Everything else is optional and can be inserted into your template anywhere as long as they are direct children of QCard.

Following are Vue properties of QCard component:

| Vue Property | Type | Description |
| --- | --- | --- | --- |
| `square` | Boolean | Squared borders instead of round ones. |
| `flat` | Boolean | Remove shadow. |
| `inline` | Boolean | Make it inline. Also set a CSS width to work. Take a look at Grid example on the "More Examples" section. |
| `color` | String | One color from [Quasar Color Palette](/components/color-palette.html). |

``` html
<!-- An basic example -->
<q-card>
  <q-card-title>
    Card Title
  </q-card-title>
  <q-card-separator />
  <q-card-main>
    Card Content
  </q-card-main>
</q-card>
```

A more complex example:
```html
<q-card inline style="width: 500px">
  <q-card-media>
    <img src="~assets/donuts.png">
  </q-card-media>
  <q-card-title>
    Cafe Basilico
    <q-rating slot="subtitle" v-model="stars" :max="5" />
    <div slot="right" class="row items-center">
      <q-icon name="place" /> 250 ft
    </div>
  </q-card-title>
  <q-card-main>
    <p>$・Italian, Cafe</p>
    <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.</p>
  </q-card-main>
  <q-card-separator />
  <q-card-actions>
    <q-btn flat round small><q-icon name="event" /></q-btn>
    <q-btn flat>5:30PM</q-btn>
    <q-btn flat>7:30PM</q-btn>
    <q-btn flat>9:00PM</q-btn>
    <q-btn flat color="primary">Reserve</q-btn>
  </q-card-actions>
</q-card>
```

### Card Title (QCardTitle)
QCardTitle has three main areas (all are optional): title, subtitle ("subtitle" slot) and right side ("right" slot).

Note that you can set title and subtitle as overlay on an image or video through a QCardMedia component too (see QCardMedia section).

``` html
<q-card-title>
  <!--
    Optional. Anything that goes here without specifying "slot"
    is considered the main title
  -->
  Title

  <!-- Optional. Adding the subtitle. Notice slot="subtitle" -->
  <span slot="subtitle">Subtitle</span>

  <!--
    Optional. Adding something on the right side,
    like an icon triggering a Popover with a menu.
    Notice the slot="right"
  -->
  <q-icon slot="right" name="more_vert">
    <q-popover ref="popover">
      <div class="list link no-border">
        <div class="item" @click="$refs.popover.close()">
          <div class="item-content">Remove Card</div>
        </div>
        <div class="item" @click="$refs.popover.close()">
          <div class="item-content">Send Feedback</div>
        </div>
        <div class="item" @click="$refs.popover.close()">
          <div class="item-content">Share</div>
        </div>
      </div>
    </q-popover>
  </q-icon>
</q-card-title>
```
### Card Main Content (QCardMain)
QCardMain defines an area containing the main Card content, like description, details or anything you need outside of the other Card component's purpose.

```html
<q-card-main>
  Card main content.
</q-card-main>

<q-card-main>
  <p>$・Italian, Cafe</p>
  <p class="text-faded">
    Small plates, salads & sandwiches in an intimate setting.
  </p>
</q-card-main>
```

### Card Actions (QCardActions)
Cards can have some actions (buttons) attached to them.

| Vue Property | Type | Description |
| --- | --- | --- | --- |
| `vertical` | Boolean | Stack actions vertically |
| `align` | String | One of 'start', 'center', 'end', 'around' which aligns buttons in respect to the actions container |

```html
<!-- Horizontal actions -->
<q-card-actions>
  <!--
    Define the buttons to your liking,
    these are just examples
  -->
  <q-btn flat round small><q-icon name="event" /></q-btn>
  <q-btn flat>5:30PM</q-btn>
  <q-btn flat>7:30PM</q-btn>
  <q-btn flat>9:00PM</q-btn>
  <q-btn flat color="primary">Reserve</q-btn>
</q-card-actions>

<!-- Vertical actions -->
<q-card-actions vertical>
  <q-btn flat>Action 1</q-btn>
  <q-btn flat>Action 2</q-btn>
</q-card-actions>
```

### Card Lists (QCardList)
QCardList is simply creating a `<div>` with the appropriate List classes attached to it. So any CSS class available for Lists works for this too.

```html
<q-card-list>
    <div class="item">
      <div class="item-primary">
        <q-icon class="text-primary" name="local bar" />
      </div>
      <div class="item-content text">
        <div>Bar XYZ</div>
        <div>Have a drink.</div>
      </div>
    </div>
    <div class="item">
      <div class="item-primary">
        <q-icon class="text-red" name="local gas station" />
      </div>
      <div class="item-content text">
        <div>Gas Station</div>
        <div>Fill your gas tank.</div>
      </div>
    </div>
  </q-card-list>
</q-card>
```

There's also the possibility to create a nice header for your Cards with an image / avatar, a person name and some quick details. In this example, we skip using QCardList:

```html
<q-card>
  <div class="item">
    <div class="item-primary">
      <img src="~assets/boy-avatar.png">
    </div>
    <div class="item-content text">
      <div>Jim</div>
      <div>Quasar enthusiast</div>
    </div>
  </div>
</q-card>
```

### Card Media (QCardMedia)
Cards can also contain media elements: images, videos (through [QVideo](/components/video-embedding.html)) or a parallax (through [QParallax](/components/parallax.html)). This can be done through QCardMedia component, which supports an optional overlay too (for things like title and/or subtitle).


| Vue Property | Type | Description |
| --- | --- | --- | --- |
| `overlay-position` | String | One of 'top', 'bottom' or 'full' which sets the position of overlay on top of media element. |

```html
<!-- Displaying an image -->
<q-card-media>
  <img src="~assets/some-image.jpg">
</q-card-media>

<!-- Display a video (with help of QVideo component) -->
<q-card-media>
  <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />
</q-card-media>

<!-- Displaying a Parallax (with help of QParallax) -->
<q-card-media>
  <q-parallax :src="'statics/parallax1.jpg'" :height="150">
    <div slot="loading">Loading...</div>
  </q-parallax>
</q-card-media>
```

Now let's see how we can add overlays too (through "overlay" slot):
```html
<q-card-media>
  <img src="~assets/mountains.jpg">

  <!-- Notice the slot="overlay" -->
  <q-card-title slot="overlay">
    Title
    <span slot="subtitle">Subtitle</span>
  </q-card-title>
</q-card-media>

<!--
  Overlay at top of media elements.
  Notice overlay-position="top"
-->
<q-card-media overlay-position="top">
  <img src="~assets/mountains.jpg">

  <!-- Notice the slot="overlay" -->
  <q-card-title slot="overlay">
    Title
    <span slot="subtitle">Subtitle</span>
  </q-card-title>
</q-card-media>

<!--
  Overlay on full area of media elements
  Notice overlay-position="full"
-->
<q-card-media overlay-position="full">
  <img src="~assets/mountains.jpg">

  <!-- Notice the slot="overlay" -->
  <q-card-title slot="overlay">
    Title
    <span slot="subtitle">Subtitle</span>
  </q-card-title>
</q-card-media>
```

### Card Inner Separator
You can choose to add a separator between Card components, which is basically a horizontal thin line, by adding QCardSeparator:

```html
<q-card>
  <q-card-title>
    ...
  </q-card-title>

  <!-- Here is the separator -->
  <q-card-separator />

  <q-card-actions>
    ...
  </q-card-actions>
</q-card>
```

## Some More Examples

### Coloring Cards
<input type="hidden" data-demo="css/card/coloring">

Use colors from [Quasar Color Palette](/components/color-palette.html) to set a color for your Cards.

``` html
<q-card color="primary">
  ...
</q-card>

<q-card color="amber-8">
  ...
</q-card>
```

### Making a Grid of Cards
In order to make a grid of Cards you need to use the `inline` property of QCard component and set a width for your Cards.

```html
<div>
  <!--
    In this example every card has a "style" tag with a width.
    Consider defining a CSS class instead to ease the template syntax.
  -->
  <q-card inline style="width: 300px">...</q-card>
  <q-card inline style="width: 300px">...</q-card>
  <q-card inline style="width: 300px">...</q-card>
  ...
  <q-card inline style="width: 300px">...</q-card>
</div>
```

### Card with Collapsibles
<input type="hidden" data-demo="css/card/with-collapsible">

Since Collapsibles are List items too, it makes sense to use a QCardList component to encapsulate them. Also, imagine a Card with Collapsibles containing Cards. Inception :)

``` html
<q-card>
  <q-card-title>
    Card with Collapsible List
  </q-card-title>

  <q-card-separator />

  <q-card-list>
    <q-collapsible icon="explore" label="First">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="perm_identity" label="Second">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>

    <q-collapsible icon="shopping_cart" label="Third">
      <div>
        Lorem ipsum dolor sit amet...
      </div>
    </q-collapsible>
  </q-card-list>
</q-card>
```
