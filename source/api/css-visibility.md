title: Quasar CSS Visibility
---
There are some CSS classes that you can use out of the box for common functionality.

| Class Name | Description |
| --- | --- |
| `disabled` | Cursor is changed to notify a 'disable' and opacity is set to a lower value. |
| `hidden` | Set `display` to `none` |
| `invisible` | Set `visibility` to `none` |
| `transparent` | Background color is transparent |
| `dimmed` | Apply dark transparent overlay on top of your element. Do not use on elements which already have **:after** pseudoelement. |
| `light-dimmed` | Apply white transparent overlay on top of your element. Do not use on elements which already have **:after** pseudoelement. |
| `highlight-and-fade` | Adds a yellow background color and fades it away upon element is displayed. |
| `ellipsis` | Truncates text and shows ellipsis when not enough space available. |
| `z-absolute` | Positions your element on top of any other component (including Drawer, Modals, Toasts, Layout header/footer, ...) |

### Animating
| Class Name | Description |
| --- | --- |
| `animate-spin` | Applies a continously spin. |
| `animate-blink` | Makes your element blink - alternate between show/hide every 1s. |
| `animate-pop` | When element is rendered it will scale in with a nice bounce animation. |
| `animate-scale` | When element is rendered it will scale in. |
| `animate-fade` | When element is rendered it will fade it in. |

### Platform Related
Visible only on:

| Class Name | Description |
| --- | --- |
| `desktop-only` | Visible only on desktop |
| `mobile-only` | Visible only on mobile |
| `cordova-only` | Visible only on Cordova wrapped Apps |
| `electron-only` | Visible only on Electron wrapped Apps |
| `touch-only` | Visible only on touch capable platforms |
| `no-touch-only` | Visible only on non-touch platforms |
| `mat-only` | Visible only for Material Quasar Theme |
| `ios-only` | Visible only for iOS Quasar Theme |
| `platform-ios` | Visible only on an iOS platform |
| `platform-android` | Visible only on an Android platform |
| `within-iframe-only` | Visible only when entire website is under an IFRAME tag |

Hide on:

| Class Name | Description |
| --- | --- |
| `desktop-hide` | Hide on desktop |
| `mobile-hide` | Hide on mobile |
| `cordova-hide` | Hide on Cordova wrapped Apps |
| `electron-hide` | Hide on Electron wrapped Apps |
| `touch-hide` | Hide on touch capable platforms |
| `no-touch-hide` | Hide on non-touch platforms |
| `mat-hide` | Hide for Material Quasar Theme |
| `ios-hide` | Hide for iOS Quasar Theme |
| `platform-ios` | Hide on iOS platform |
| `platform-android` | Hide on Android platform |
| `within-iframe-hide` | Hide only when entire website is under an IFRAME tag |

Also check [Quasar Theming &gt; Platform Specific Styles](/guide/quasar-theming.html#Platform-Specific-Styles).

> **NOTE**
> There is also a non-recommended way to hide DOM elements through Javascript. Read more on [Javascript &gt; Environment](/api/js-platform-detection.html) page.

### Orientation Related
| Class Name | Description |
| --- | --- |
| `orientation-portrait` | Visible only when screen orientation is *Portrait* |
| `orientation-landscape` | Visible only when screen orientation is *Landscape* |

### Window Width Related
First of all, let's define what does a small, medium, big or large window means:

| Window Size | Width threshold in pixels |
| --- | --- |
| Small | Up to 600px |
| Medium | Up to 920px |
| Big | Up to 1280px |
| Large | Bigger than 1280px |

Now on to the window width related CSS classes:

| Class Name | Description |
| --- | --- |
| `sm` | Display only on small windows |
| `md` | Display only on medium-sized windows |
| `bg` | Display only on big windows |
| `lg` | Display only on large windows |
| `lt-md` | Display only on lower than medium windows |
| `lt-bg` | Display only on lower than big windows |
| `lt-lg` | Display only on lower than large windows |
| `gt-sm` | Display only on greater than small windows |
| `gt-md` | Display only on greater than medium windows |
| `gt-bg` | Display only on greater than big windows |
