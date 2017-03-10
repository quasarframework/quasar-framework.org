title: Cards
---
Quasar Cards are a great way to display important pieces of content, and are quickly emerging as a core design pattern for Apps. They're a great way to contain and organize information, while also setting up predictable expectations for the user. With so much content to display at once, and often so little screen real-estate, Cards have fast become the design pattern of choice for many companies, including the likes of Google and Twitter.

Quasar Cards are all about HTML markup with some exception where some Quasar Vue directives need to be used. It's all about being creative. Experiment with different Web Components by embedding them in Cards to create awesome results.

> **NOTE**
> Quasar Cards have by default a width set to 100%, so make sure you either set them a `max-width` or wrap them in DOM element with maximum width.

Scroll down to check out how to use Cards HTML syntax and if on desktop see the demos.

## Basic Cards
<input type="hidden" data-demo="css/card/basic">

Familiarize yourself with Cards with these basic examples of card with only content and title.

``` html
<div class="card">
  <div class="card-content">
    Card Content
  </div>
</div>
```

``` html
<div class="card">
  <div class="card-title">
    Card Title
  </div>
  <div class="card-content">
    Card Content
  </div>
</div>
```

## Coloring Cards
<input type="hidden" data-demo="css/card/coloring">

Use [Quasar CSS color classes](/api/css-color-palette.html) to set color for text and background.

``` html
<div class="card">
  <div class="card-title bg-primary text-white">
    Colored Card Title
  </div>
  <div class="card-content card-force-top-padding">
    Card Content
  </div>
</div>
```

``` html
<div class="card bg-teal text-white">
  <div class="card-title">
    Background Colored Card
  </div>
  <div class="card-content">
    Card Content
  </div>
</div>
```

## Embedding Other Web Components into Cards
See how to embed images, maps, Collapsibles, Lists or how to write code for a Social Card, and many more. Just be creative! Experiment with different Web Components to achieve awesome Cards.

### Card with List
<input type="hidden" data-demo="css/card/with-list">

``` html
<div class="card">
  <div class="card-title">
    Card with List
  </div>
  <div class="list bordered inner-delimiter highlight">
    <div class="item" v-for="n in 4">
      <i>mail</i>
      <div class="item-content">
        <div class="item-label">
          Quasar Framework
        </div>
        <button class="item-value">
          <i>keyboard_arrow_right</i>
        </button>
      </div>
    </div>
  </div>
</div>
```

### Card with Images
<input type="hidden" data-demo="css/card/with-images">

``` html
<div class="card">
  <img src="assets/mountains.jpg">
  <div class="card-content">
    Card Content
  </div>
</div>
```

Be creative. You can embed a Parallax Web Component:

``` html
<div class="card">
  <div class="card-title">
    Card with Parallax Image
  </div>
  <parallax src="assets/parallax2.jpg" :height="150">
    <div slot="loading">Loading...</div>
  </parallax>
  <div class="card-content">
    Card Content
  </div>
</div>
```

### Card with Videos
<input type="hidden" data-demo="css/card/with-videos">

``` html
<div class="card">
  <q-video
    :src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
  ></q-video>
  <div class="card-content">
    Card Content
  </div>
</div>
```

### Social Cards
<input type="hidden" data-demo="css/card/social">

Use social cards to present posts on a wall like on Facebook or Twitter.

``` html
<div class="card">
  <div class="item">
    <img class="avatar" src="assets/linux-avatar.png">
    <div class="item-content">
      <div class="item-label">
        <p class="item-title">Joe</p>
        <p>Web Developer</p>
      </div>
    </div>
  </div>
  <img src="assets/mountains.jpg">
  <div class="card-content">
    Card Content
  </div>
  <div class="card-actions">
    <div class="text-primary">
      <i>thumb_up</i> 11k likes
    </div>
    <div class="text-primary">
      <i>mode_comment</i> 8 comments
    </div>
    <div class="auto"></div>
    <div class="text-grey-6">
      23 minutes ago.
    </div>
  </div>
</div>
```

### Card with Map
<input type="hidden" data-demo="css/card/map">

Offer directions or present places with a nice Card.

``` html
<div class="card">
  <div class="card-media">
    <img src="assets/map.png">
    <button class="primary circular"><i>place</i></button>
  </div>
  <div class="card-content">
    <div class="item">
      <i>local_bar</i>
      <div class="item-content">
        <div class="item-label">
          <p class="item-title">Bar XYZ</p>
          <p>Have a drink.</p>
        </div>
      </div>
    </div>
    <div class="item">
      <i>local_gas_station</i>
      <div class="item-content">
        <div class="item-label">
          <p class="item-title">Gas Station</p>
          <p>Fill your gas tank.</p>
        </div>
      </div>
    </div>
    <div class="item">
      <i>local_movies</i>
      <div class="item-content">
        <div class="item-label">
          <p class="item-title">Cinema XYZ</p>
          <p>Watch a movie.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="card-actions card-no-top-padding">
    <div class="text-lime">
      13 minutes
    </div>
    <div>
      (1 mile)
    </div>
    <div class="auto"></div>
    <button class="primary clear small"><i class="on-left">directions</i> Start</button>
  </div>
</div>
```

### Card with Collapsible
<input type="hidden" data-demo="css/card/with-collapsible">

Imagine a Card with Collapsibles containing Cards. Inception :)

``` html
<div class="card" style="margin-top: 25px;">
  <div class="card-title">
    Card with Collapsible List
  </div>
  <div class="list item-delimiter">
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
  </div>
</div>
```

### Card with FAB
<input type="hidden" data-demo="css/card/with-fab">

In the example below we include a circular button which the user can tap/click for additional actions on the Card.

``` html
<div class="card">
  <div class="card-title">
    Card with FAB
  </div>
  <div class="card-media">
    <q-video
      :src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
    ></q-video>
    <button class="primary circular">
      <i>share</i>
    </button>
  </div>
  <div class="card-content">
    Card Content
  </div>
</div>
```
