title: SSR FAQ
---

## I get hydration errors
Take a look at our [Client Side Hydration](/guide/ssr-client-side-hydration.html) page. It means that the HTML rendered on server does not match the equivalent HTML rendered on client-side. This error will appear only when developing (and NOT on production) and it definitely needs to be addressed before you release your app. Is there some content that you can only generate on client-side? Then use [QNoSSR](components/no-ssr.html).

## Importing Platform and Cookies is not working?
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

The `ssrContext` is available in App Plugins or preFetch feature where it is supplied as parameter.

The reason for all this is that in a client-only app, every user will be using a fresh instance of the app in their browser. For server-side rendering we want the same: each request should have a fresh, isolated app instance so that there is no cross-request state pollution. So Platform and Cookies need to be bound to each request separately.

A good idea also is to read the [Writing Universal Code](/guide/ssr-writing-universal-code.html) documentation page.
