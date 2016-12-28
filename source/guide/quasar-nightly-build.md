title: Quasar Nightly Build
---

For those that are adventurous enough, a bleeding edge version of Quasar is available for you to try. Please note that this version **may be unstable and may introduce breaking changes** that are not yet documented.

What you need to do to use it instead of the latest stable Quasar release is to use the [Github repo](https://github.com/quasarframework/quasar-edge) instead of the NPM name of the package.

``` bash
// remove node_modules/quasar-framework if it's there
$ rm -rf node_modules/quasar-framework

// then install edge version:
$ npm i --save git+https://git@github.com/quasarframework/quasar-edge.git
```
