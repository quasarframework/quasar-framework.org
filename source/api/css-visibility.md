title: Quasar CSS Visibility
---
There are some CSS classes that you can use out of the box for common functionality.

| Class Name | Description |
| --- | --- |
| `disabled` | Cursor is changed to notify a 'disable' and opacity is set to a lower value. |
| `hidden` | Set `display` to `none` |
| `invisible` | Set `visibility` to `none` |
| `transparent` | Background color is transparent |

### Platform Related
| Class Name | Description |
| --- | --- |
| `desktop-only` | Visible only on desktop |
| `mobile-only` | Visible only on mobile |
| `cordova-only` | Visible only on Cordova wrapped Apps |
| `touch-only` | Visible only on touch capable platforms |
| `no-touch-only` | Visible only on non-touch platforms |
| `mat-only` | Visible only for Material Quasar Theme |
| `ios-only` | Visible only for iOS Quasar Theme |

Also check [Quasar Theming &gt; Platform Specific Styles](/guide/quasar-theming.html#Platform-Specific-Styles).

> **NOTE**
> There is also a non-recommended way to hide DOM elements through Javascript. Read more on [Javascript &gt; Environment](/api/js-environment.html) page.

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
