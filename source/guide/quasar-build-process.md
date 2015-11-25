title: Quasar Build Process
---
The App must be built before deployment. Read more how to build (and test) in the [CLI Commands](/guide/cli-commands.html#Build) section.

Following lines will describe how everything is glued together.

## Source Files

### Javascript Files
Javascript files are glued together using <a href="http://webpack.github.io/docs/" target="_blank">Webpack</a>. So you can use *require()* -- and *require.resolve()* -- for modularity. You must adhere to the [CommonJS format](/guide/commonjs-format.html) because of its many advantages when writing *.js* files.

Take into consideration that the following files are taken as Webpack entry-points (take a good look at folders):
* /js/*file-name*.js
* /pages/*page-name*/js/*file-name*.js

So when writing a Quasar App Page script and you want to *require()* something, in the */pages/page-name/js/* folder, make a sub-folder and place it there. Otherwise any *.js* files directly under */pages/page-name/js/* folder are considered entry-points and will be built accordingly, which is not what you want. Same for the global */js* folder.

### CSS Files
Notice that all CSS files are built using <a href="https://learnboost.github.io/stylus/" target="_blank">Stylus</a>, so they have the *.styl* extension. The Stylus NIB extension is also available.

Take into consideration that the following files are taken as Stylus entry-points (take a good look at folders):
* /css/*file-name*.styl
* /pages/*page-name*/css/*file-name*.styl

So when writing a Quasar App Page CSS and you want to *import* something, in the */pages/page-name/css/* folder, make a sub-folder and place it there. Otherwise any *.styl* files directly under */pages/page-name/css/* folder are considered entry-points and will be built accordingly, which is not what you want. Same for the global */css* folder.

### HTML Files
> The Quasar App Pages' HTML is compiled into Vue instances, so yeah!, you can use **two-way data binding**. Read more about the two-way data binding Vue library and how to use it <a href="http://vuejs.org" target="_blank">here</a>.

To support code modularity inside your HTMLs you can include other HTML files/templates. Take into consideration that the following files are considered entry-points (take a good look at folders):
* /html/*file-name*.html
* /pages/*page-name*/html/*file-name*.html

So when writing a Quasar App Page HTML and you want to *include* something, in the */pages/page-name/html/* folder, make a sub-folder and place it there. Otherwise any *.html* files directly under */pages/page-name/html/* folder are considered entry-points and will be built accordingly, which is not what you want. Same for the global */html* folder.

``` html
// view.page-name.html:

@@include('./view.html')     <<<<<<<<<<<<
@@include('./var.html', {    <<<<<<<<<<<<
  "name": "rstoenescu",
  "age": 12345,
  "socials": {
    "fb": "facebook.com/include",
    "tw": "twitter.com/include"
  }
})
```

``` html
// view.html:

<h1>view</h1>
```

``` html
// var.html:

<label>@@name</label>
<label>@@age</label>
<strong>@@socials.fb</strong>
<strong>@@socials.tw</strong>
```

``` html
// ... and it gets compiled to:

<h1>view</h1>
<label>rstoenescu</label>
<label>12345</label>
<strong>facebook.com/include</strong>
<strong>twitter.com/include</strong>
```

### Image Files
Image files should be placed under `assets` folders. By default, on a production build, `GIF`, `JPEG`, `PNG` and `SVG` image files get "minified" without losing noticeable quality.
