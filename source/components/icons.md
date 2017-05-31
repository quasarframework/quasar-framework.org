title: Icon
---

The Quasar Icon component allows you to easily insert icons within other components or any other area of your pages, as you'd like.

You can also choose which icon set you'd like to use, simply by including them in a source tag in your `index.html` file. Currently [Font Awesome](http://fontawesome.io/icons/) and [Ionicons](http://ionicons.com/) are supported. This means that you can mix and match standard iOS or Material icons with these other two icon libraries.

The example link tag below would include Font Awesome icons.

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
```
Add this to the `index.html` page of your app.

> **Note** that you can include more than one set too, if you'd like.

<input type="hidden" data-fullpage-demo="components/button">

## Basic Usage

```html
<q-icon name="thumb_up"/>

```

The above would display a rather small Material design "thumbs-up" icon, since the Material style is Quasar's default.

```html
<q-icon mat="map" ios="map" ios="/>

```

The above would display a map icon, depending on which style is currently in use. This is practical for cross-platform application development.


### Vue Properties
| Vue Property | Type | Description |
| --- | --- | --- |
| `name` | String | The name of the icon to be used. |
| `ios` | String | The name of the icon to be used for iOS. |
| `mat` | String | The name of the icon to be used for Material. |

**Note**
If you add the `name` prop, it overrides the `ios` and `mat` props.

## More Examples

With style attribute:

```html
<q-icon name="thumb_up" style="font-size: 5rem;" />

```

With class attribute:


```html
<q-icon name="thumb_up" class="big-btn" />

```

**Note**
To create the necessary CSS class, you would need to define the class within your component's style section as below.

```html

<style lang="stylus">
.big-btn
  font-size: 5rem
</style>

```
