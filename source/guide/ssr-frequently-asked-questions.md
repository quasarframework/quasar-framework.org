title: SSR FAQ
---

## Why am I getting hydration errors?
Take a look at our [Client Side Hydration](/guide/ssr-client-side-hydration.html) page. When you get hydration errors, it means the HTML rendered on the server does not match the equivalent HTML rendered on client-side. This error will appear only when developing (and NOT on production) and it definitely needs to be addressed, before you release your app. Is there some content that you can only generate on client-side? Then use [QNoSSR](/components/no-ssr.html).

## Why doesn't importing Platform and Cookies work?
When building for SSR, use only the `$q.platform`/`$q.cookies` form. If you need to use the `import { Platform, Cookies } from 'quasar'` (when on server-side), then you’ll need to do it like this:

```js
// example with Platform; same thing for Cookies
import { Platform } from 'quasar'

// you need access to `ssrContext`
function (ssrContext) {
  const platform = process.env.SERVER
    ? Platform.parseSSR(ssrContext)
    : Platform // otherwise we're on client

  // platform is equivalent to the global import as in non-SSR builds
}
```

The `ssrContext` is available in the App Plugins or the preFetch feature, where it is supplied as a parameter.

There is a good reason for this. In a client-only app, every user will be using a fresh instance of the app in their browser. For server-side rendering we want the same thing. Each request should have a fresh, isolated app instance so that there is no cross-request state pollution. So Platform and Cookies need to be bound to each request separately.

Also a good idea is to read the [Writing Universal Code](/guide/ssr-writing-universal-code.html) documentation page.

## Why isn't LocalStorage and SessionStorage working?
When running the code on server-side, the storage facilities can't work. Web Storage is a browser only API.
