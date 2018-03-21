title: Deployment for SPA
---

There exist lots of services which allow deploying applications with ease.
To list all of them would not be possible so we will focus on the general deployment process and some specifics for common services.

If your favorite deployment tool is missing feel free to create a pull request on GitHub to add it to the list.

# General deployment

The first step in deploying you Quasar SPA is alway to build a production-ready bundle of your files,
which gets rid of development statements and minifies your source.

To produce such a build use Quasar CLI with the following command
```bash
$ quasar build
```
For possible build options please refer to the [Quasar CLI docs](/guide/quasar-cli).

This command will build your project in SPA mode and output you production ready bundle to a newly created folder `/dist/spa-<theme>` were `<theme>` is replaced by your apps theme choice.

To serve your production files it is *required*  to use a web server.
Simply opening the `index.html` file from within your Browser will not work.

Common choices for web server are [nginx](https://www.nginx.com/) and [caddy](https://caddyserver.com/) but you should be able to use whatever web server you want.

The web server requires no special setup it only must be able to serve static files from a directory,
so consult the documentation of your web server on how to set up static file serving.

## Deploying with Now
Deploying your Quasar application with [now](https://zeit.co) is really easy.
All you have to do is to download the [now-cli](https://zeit.co/download#now-cli) and log in by running
```bash
$ now
```

Then proceed to build your Quasar application using the steps described in [general deployment](#general-deployment).

After the build is finished change directory into your deploy root and run
```bash
$ now
```

You should now be presented with information regarding your deploy
and that's all you have to do to deploy your Quasar application.

## Deploying with Heroku

Unfortunately, Heroku does not support static sites out of the box.
But don't worry, we just need to add an HTTP server to our project so Heroku can serve our Quasar application.

In this example, we will use [Express](https://expressjs.com/) to create a minimal server which Heroku can use.

First, we need to install the required dependencies to our project
```bash
$ npm install express serve-static connect-history-api-fallback
```

Now that we have installed the required dependencies we can add our server.
Create a file called `server.js` in the root directory of your project.
```js
const
  express = require('express'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  port = process.env.PORT || 5000

const app = express()

app.use(history())
app.use(serveStatic(__dirname + '/dist/spa-<theme>'))
app.listen(port)

```
Make sure to exchange `<theme>` to the theme you use.

Heroku assumes a set of npm scripts to be availabe, so we have to alter our `package.json` and add the following under the `script` section:
```js
"build": "quasar build",
"start": "node server.js",
"heroku-postbuild": "npm install --only=dev --no-shrinkwrap && npm run build"
```

Now it is time to create an app on Heroku by running 
```bash
$ heroku create
```

and deploy to Heroku using
```bash
$ heroku deploy
```

## Deploying with Surge

[Surge](https://surge.sh/) is a popular tool to host and deploy static sites.

If you want to deploy your application with Surge you first need to install the Surge CLI tool
```bash
$ npm install -g surge
```

Next, we will use Quasar CLI to build our app
```bash
$ quasar build
```

This will generate you production ready bundle as described above.

Now we can deploy our application using Surge by calling
```bash
$ surge dist/spa-<theme>
```

Make sure to replace `<theme>` with your actual theme.

Now your application should be successfully deployed using Surge.

You should be able to adapt this guide to any other static site deployment tool.

## Deploying on Github Pages
