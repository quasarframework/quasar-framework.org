title: Icon
---

The Quasar Icon component allows you to easily insert icons within other components or any area of the screen you'd like. 

You can choose which icon set you'd like to use, simply by including them in a source tag in your `index.html` file. Currently [Material Icons](https://material.io/icons/) (default), [Font Awesome](http://fontawesome.io/icons/) and [Ionicons](http://ionicons.com/) are supported.

The example below would include font awesome icons.

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
```
**Note**
You can include more than one set too, if you'd like.

<input type="hidden" data-fullpage-demo="components/button">

## Basic Usage

```html
<q-icon name="thumb_up"/>

```

That would display a rather small thumbs-up icon. To change the size, you can use style or class attributes.  

```html
<q-icon name="thumb_up" class="big" />

```