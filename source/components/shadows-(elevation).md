title: Quasar CSS Shadows
---
Simple yet effective way to add shadows to create a depth effect.
The shadows are in accordance to Material Design speifications.
Don't forget to check the demo.
<input type="hidden" data-fullpage-demo="css/shadows">

| CSS Class Name | Description |
| --- | --- |
| `no-shadow` | Remove any shadow |
| `inset-shadow` | Set an inset shadow |
| `shadow-1`, `hoverable`, `hoverable-1` | Set a depth of 1 - always or on element hover |
| `shadow-2`, `hoverable-2` | Set a depth of 2 - always or on element hover |
| `shadow-3`, `hoverable-3` | Set a depth of 3 - always or on element hover |
| `shadow-4`, `hoverable-4` | Set a depth of 4 - always or on element hover |
| `shadow-5`, `hoverable-5` | Set a depth of 5 - always or on element hover |
| `shadow-transition` | Apply a CSS transition on the shadow; best use in conjonction with `hoverable` classes |

Example:
``` html
<div class="shadow-1">...</div>
```

The shadows above point towards the bottom of the element. If you want them to point towards the top of the element, add `up` before the number:

| CSS Class Name | Description |
| --- | --- |
| `shadow-up-1`, `hoverable-up`, `hoverable-up-1` | Set a depth of 1 - always or on element hover |
| `shadow-up-2`, `hoverable-up-2` | Set a depth of 2 - always or on element hover |
| `shadow-up-3`, `hoverable-up-3` | Set a depth of 3 - always or on element hover |
| `shadow-up-4`, `hoverable-up-4` | Set a depth of 4 - always or on element hover |
| `shadow-up-5`, `hoverable-up-5` | Set a depth of 5 - always or on element hover |
