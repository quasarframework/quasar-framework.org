title: Managing Google Analytics
---
Getting to know your users and measuring user behavior is an important step in App Development. Unfortunately, it's take a bit of non-standard work to get Google Analytics to work after wrapping your mobile app with Cordova. Setting up Google Analytics in a pure web application is quite easy, but Cordova somehow prevents pageviews and events from being sent to Google Analytics.

Follow this guide to implement Google Analytics into your Cordova App.

## Prerequisites
> - Make sure all your routes have a name and path parameter specified. Otherwise, they cannot be posted to the `ga.logPage` function. Please refer to [the router docs](/guide/router.html) for more info on routing.
> - Have Basic knowledge of Google Analytics

## Preparation
Before we can start implementing Google Analytics into your application, you'll need an account for [Google Analytics](https://analytics.google.com) and [Google Tagmanager](https://tagmanager.google.com/). So let's do that first. When you have these accounts, it's time to configure Tag manager. Follow the steps in this [Multiminds article](http://www.multiminds.eu/2016/12/06/google-analytics-tag-manager-ionic-cordova/) to do so.

## Implementing this into application
> For this guide, we'll assume you have a fixed sessionId that you send to Google Analytics. Google Analytics uses a sessionId to distinquish different users from each other. If you want to create an anonymous sessionId, see [Analytics Documentation on user id](https://developers.google.com/analytics/devguides/collection/analyticsjs/cookies-user-id).

Place the Tag Manager snippet into head of your `index.html` file (if you've followed the [Multiminds article](http://www.multiminds.eu/2016/12/06/google-analytics-tag-manager-ionic-cordova/), you already have this.) Create a new file in your codebase called `analytics.js` with the following contents:

```javascript
export default {

    logEvent(category, action, label, sessionId = null) {
        dataLayer.push({
            'appEventCategory': category,
            'appEventAction': action,
            'appEventLabel': label,
            'sessionId': sessionId
        });
        dataLayer.push({ 'event': 'appEvent' });
    },

    logPage(path, name, sessionId = null) {
        dataLayer.push({
            'screenPath': path,
            'screenName': name,
            'sessionId': sessionId
        });
        dataLayer.push({ 'event': 'appScreenView' });
    }

}
```
To make sure all the pages in your application are automatically posted towards Google Analytics, import the newly created `analytics.js` file into `main.js` and add the following in `main.js`.

> If you are not using Vue-router, you can log clicks manualy by calling the logPage function at any place you like.

```javascript
import ga from 'analytics.js'

router.afterEach((to, from) => {
    ga.logPage(to.path, to.name, sessionId)
})
```
Let's add some event logging into a component, by calling the `logEvent` function with the correct parameters. Import the `analytics.js` in your component as `ga`.

```javascript
import ga from 'analytics.js'
// in the Vue instance:
methods: {
    clickRedButton function(){
        ga.logEvent("Buttons", "Click", "Red Button", sessionId)
    }
}
```
> More information about events can be found in the [Analytics documentation on events](https://developers.google.com/analytics/devguides/collection/analyticsjs/events).

## Wrapping up
Now, when you build your application with Cordova and test it out on the emulator.

```bash
$ quasar build
$ cd cordova
$ cordova run
```

You'll see the events and pageviews coming in. It usually takes around 5 to 10 seconds for a pageview to be registered in the realtime view.
