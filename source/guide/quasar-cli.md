title: Quasar CLI（Quasar 命令行工具）
---
Quasar CLI允许您通过生成一个充满您需要的所有内容的启动器样板，随时启动新项目。它也做了大部分的繁重的工作，所以你不必担心冗余的任务。您必须安装它来生成和管理Quasar应用程序。

``` bash
$ npm install -g quasar-cli
```

熟悉的命令列表:
``` bash
$ quasar
```

请参阅任何命令的帮助：
``` bash
$ quasar [command name] --help
```

## 版本

检查CLI版本，是否在Quasar应用程序文件夹中输出正在使用的Quasar版本。

``` bash
$ quasar version
```

## 创建App

使用入门模板初始化App文件夹
``` bash
$ quasar init [template name] <folder-name>
```

> 通过省略`template name`参数，命令行将检测最新的App模板并生成App文件夹

你可以随时查看可以使用的应用程序的模板列表：

``` bash
$ quasar list
```

## 开发服务器
通过编译和维护内存中的代码来开发您的应用程序。Web服务器将为您的应用程序提供服务，同时提供开箱即用的热重新加载。当您更改代码时，运行内存可提供更快的重建。

> 热重载不仅仅是在代码更改时刷新浏览器，它还会跳过刷新，并在保持App的状态（如VueModule的数据）的同时更新您的代码。请注意，有的情况下这是不能完成的，这时开发者网站服务器将只是简单的刷新您的浏览器

此外，您可以直接在手机上开发应用程序，并依然受益于Hot-Reload,下载并安装Quasar Play应用程序（目前仅在Google Play商店中可以下载到）。

``` bash
# 运行开发服务器（默认主题）
$ quasar dev

# 运行具有特定主题的开发服务器
$ quasar dev mat
$ quasar dev ios

# 使用开发服务器生成二维码
# 使用Quasar Play应用扫描QR码
$ quasar dev -p
$ quasar dev --play
$ quasar dev mat --play
```

如果您想更改服务您的应用程序的端口，您有两个选项：
* 打开 `/config/index.js` 文件修改 `dev.port` 属性.
* 如果只想一次性的，请将端口指定为环境变量：
  ``` bash
  $ PORT=3000 quasar dev
  ```

## 为生产环境编译应用程序
Quasar CLI可以将所有内容打包在一起，并优化您的应用程序进行生产。减少源代码，提取供应商组件并利用浏览器缓存等等。

``` bash
# 编译生产环境应用程序
$ quasar build

# 使用指定主题编译生产环境应用程序
$ quasar build mat
$ quasar build ios
```

您还可以通过以下方式清除构建资源：
``` bash
$ quasar clean
```

## 生成组件
创建与CLI的应用程序文件夹后，你的应用程序里面，你将有一个名为文件夹`/templates`包含模板：`layout`, `view` (页面), 或一个通用的Vue`component`

您可以在您的`/src`文件夹中为您的应用程序生成组件：
```
# 获取可用的组件模板
$ quasar new -l
$ quasar new --list

# 从组件模板生成.vue文件
$ quasar new component Hello

# 将.vue文件从模板生成到子文件夹
$ quasar new layout layout/about/help/Hello
# 上面将创建 src/components/layout/about/help/Hello.vue
```

> 添加您自己的组件模板，Quasar将能够处理它们。 

## 应用程序包装器
目前的App Wrapers可用于Cordova＆Electron。将来还会添加更多内容，以便您制作Google Chrome扩展程序或逐行Web应用程序，仅举几个例子。

CLI命令是这样的：
``` bash
$ quasar wrap <wrapper name>
```

有关 **Cordova** 包装器的更多信息，请点击[这里](/guide/cordova-wrapper.html).
有关 **Electron** 包装器的更多信息，请点击 [这里](/guide/electron-wrapper.html).

## 检测 App Code
ESlint 用于检查您的ES6 Javascript文件

``` bash
$ quasar lint
```

## 服务静态内容文件夹
您可以创建一个临时Web服务器来从文件夹中提供静态内容Web文件。内容更改时，浏览器会话会自动刷新。用户点击/滚动可以同步。

在构建您的Quasar App进行生产后，该命令非常方便。该`/dist`文件夹包含旨在与Web服务器一起提供的文件。所以这里你去

``` bash
# Serve current folder:
$ quasar serve

# ..or serve a full or relative path
$ quasar serve dist
$ quasar serve ./dist
$ quasar serve /work/quasar-app/dist
```

> 该命令不依赖于Quasar Framework。任何具有任何网页内容的文件夹都可以提供。
