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
Todo: from the docs on https://zeit.co/docs/getting-started/deployment it is not really clear which deploy strategy is right for Quasar.

Is it enough to just run `quasar build` and cd into dis and run `now`?

Or should we do the nodejs way (which would require us to add quasar build as an npm command)

## Deploying with Heroku

Unfortunately, Heroku does not support static sites out of the box.
But don't worry, due to the [heroku-buildpack-static](https://github.com/heroku/heroku-buildpack-static) you will still be able to deploy your Quasar application to Heroku in no time.

We will assume that you have installed the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed and are logged into Heroku as described in the Heroku CLI docs.

Next, you need to install the static CLI plugin for Heroku by running 
```bash
$ heroku plugins:install heroku-cli-static
```

This will provide us with a set of tool in the `static` namespace.

Now it is time to create an app on Heroku by running 
```bash
$ heroku create
```

You now have created a new Heroku app, but we still need to configure the buildpack.
To do this run

```bash
$ heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git
```

The last thing you have to do before you can start deploying your application is to configure how Heroku should serve your files.

So create a file called `static.json` in your application root with the following content:
```json
{
  "root": "dist/spa-<theme>",
  "clean_urls": "false",
  "routes": {
    "/**": "index.html"
  }
}
```
Remember to replace `<theme>` with your actual theme.

Now you can build your Quasar application with
```bash
$ quasar build
```

and deploy to Heroku using
```bash
$ heroku static:deploy
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

## Deploying on Dokku

Todo: Should be very similar to Heroku