title: Installation
---

First, install  Quasar CLI:
``` bash
$ npm install -g quasar-cli
```

Make sure you are running NodeJS >= 4.1.1.

Now install some global dependencies.
``` bash
$ npm install -g gulp mocha testem
```

You will also need to install Ruby and scss-lint gem in order to be able to preprocess SCSS files. 
``` bash
$ gem install scss-lint
$ npm rebuild node-sass
```

You're all set now. You can start creating a Quasar Project. Head on to [Quick Start](quick-start.html).