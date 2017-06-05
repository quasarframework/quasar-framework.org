title: 起步
---
本文档网站上有3个部分将让您熟悉Quasar：
  * **指南** - 有关CLI，入门工具包的信息，如何让您开始使用项目文件夹
  * [**API**](/api) - 全局Javascript和CSS（框架）API
  * [**Components**](/components) -  Quasar 的组件列表

# 第一步
Quasar CLI允许您通过生成一个充满您需要的所有内容的启动器样板，随时启动新项目。它也做了大部分的繁重的工作，所以你不必担心冗余的任务。您必须安装它来生成和管理Quasar应用程序。

``` bash
$ npm install -g quasar-cli
```

## 创建你的第一个App

``` bash
# 创建启动器样板文件夹
$ quasar init <folder name>
$ cd <folder name>

# npm安装依赖
$ npm install
```

启动您的第一个应用程序的开发服务器，当前服务具备热重载功能：
``` bash
$ quasar dev [theme]

# 使用material主题启动
$ quasar dev
# 或者
$ quasar dev mat

# 使用IOS主题启动
$ quasar dev ios
```

准备在组件模板文件夹(`/templates`)创建`*.vue`组件

``` bash
$ quasar new [type] <你的组件名称和可选的子文件夹>
```

类型可以是`layout`, `view`（网页内容），`component` (通用的 `*.vue` 组件)。
您甚至可以制作自己的组件模板，并使用CLI在您的应用程序中生成它们

## Quasar Play App
如果您想 **直接在手机上开发热重新加载的移动应用**, 请安装 [Quasar Play](/guide/quasar-play-app.html) 应用, 目前仅在Google Play商店中可以下载。

``` bash
$ quasar dev --play
```

这可以产生QR码，您可以使用Quasar Play应用扫描，只要开发服务器正在运行，您的App就可以在手机上使用。

## 相关的工具/技术
您应该熟悉这些令人敬畏的工具/技术：

* [ES6 Javascript](http://www.2ality.com/2015/08/getting-started-es6.html)
* [Vue Js](http://vuejs.org) 和 [NPM](http://npmjs.org) 生态系统
* [Vue Router](http://router.vuejs.org/)
* 编写 [.vue files](http://vue-loader.vuejs.org/en/index.html)
* [可选的] [Vuex](http://vuex.vuejs.org/) 如果构建大规模应用程序
* [可选的] [Webpack](http://webpack.github.io/) 用于根据您的具体需求调整构建系统的构建工具
* [可选的] [Cordova](https://cordova.apache.org/) 在您的Quasar App中构建本地手机应用程序的工具

> 就这些. 你现在设置好了 继续阅读关于Quasar的指南，别忘了玩得开心:)
