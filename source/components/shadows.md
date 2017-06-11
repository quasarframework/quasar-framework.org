title: CSS Shadows (Elevation)
---
Simple yet effective way to add shadows to create a depth/elevation effect.
The shadows are in accordance to Material Design speifications (24 levels of depth).

Don't forget to check the demo.
<input type="hidden" data-fullpage-demo="css/shadows">

| CSS Class Name | Description |
| --- | --- |
| `no-shadow` | Remove any shadow |
| `inset-shadow` | Set an inset shadow |
| `shadow-1` | Set a depth of 1 |
| `shadow-2` | Set a depth of 2 |
| `shadow-N` | Where `N` is an integer from 1 to 24. |
| `shadow-transition` | Apply a CSS transition on the shadow; best use in conjonction with `hoverable` classes |

Example:
``` html
<div class="shadow-1">...</div>
```

The shadows above point towards the bottom of the element. If you want them to point towards the top of the element, add `up` before the number:

| CSS Class Name | Description |
| --- | --- |
| `shadow-up-1` | Set a depth of 1 |
| `shadow-up-2` | Set a depth of 2 |
| `shadow-up-N` | Where `N` is an integer from 1 to 24. |
