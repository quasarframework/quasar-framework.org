title: Uploader
---
Quasar supplies a way for you to upload files through QUploader component.

Works well with [QField](/components/field.html) for additional functionality such as a helper, error message placeholder and many others.

> The documentation website only allows static content, so a demo with QUploader is not possible as this assumes a server script running. As a result you can only see some screenshots (may be out of date) below:

![Uploader Screenshot 1](/images/uploader-1.png)
![Uploader Screenshot 2](/images/uploader-2.png)

## Basic Usage
``` html
<q-uploader :url="url" />
```

## Vue Properties
| Vue Property | Type | Default Value | Description |
| --- | --- | --- | --- |
| `url` | String | (**Required**) URL or path to the server which handles the upload |
| `name` | String | Name of the file, if it should be different than the file's name. |
| `headers` | Object | Specify what headers need to be added to the XHR request |
| `url-factory` | Function | Function (with `file` object received as parameter) which returns a Promise that resolves to a URL. |
| `method` | String | HTTP method to use (POST/PUT). Defaults to POST. |
| `extensions` | String | Extensions to allow for uploading. Example: `'.gif,.jpg,.jpeg,.png'` |
| `multiple` | Boolean | Allow multiple file uploads |
| `hide-upload-button` | Boolean | Hides the Upload button. You can then trigger it manually by calling `upload()` on the Vue ref |
| `hide-upload-progress` | Boolean | Hides the upload progress. Useful when you want some other means of signaling upload progress to the user. |
| `additionalFields` | Array | **Additional fields to send along the upload request.** Useful for authentication and so on. Array of Objects containing `name` and `value` props. |
| `color` | String | One color from [Quasar Color Palette](/components/color-palette.html). |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `upload()` | Start file(s) upload. |
| `abort()` | Abort uploading file(s). |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@add(files)` | Triggered when file is picked for upload |
| `@remove:abort(file)` | Triggered when file is removed from upload queue while uploading. |
| `@remove:cancel(file)` | Triggered when file is removed from upload queue before uploading. |
| `@remove:done(file)` | Triggered when file is removed from upload list after it has been  uploaded. |
| `@uploaded(file, xhr)` | Triggered individually for each file that has just been uploaded |
| `@fail(file, xhr)` | Triggered individually for each file that has encountered error while uploading |
| `@start` | Triggered when upload has started |
| `@finish` | Triggered when upload of file(s) has ended (with success or failure) |
