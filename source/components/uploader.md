title: Uploader
---
Quasar supplies a way for you to upload files.

> The documentation website only allows static content, so a demo with Uploader is not possible as this assumes a server script running. As a result you can only see some screenshots (may be out of date) below:

* Picking files:
![Uploader Picking Files](/images/uploader-picking-files.png)

* Uploading files:
![Uploader in progress](/images/uploader-progress.png)

* Error reporting:
![Uploader error](/images/uploader-error.png)

## Basic Usage
``` html
<q-uploader :url="url"></q-uploader>
```

## Vue Properties
| Vue Property | Type | Default Value | Description |
| --- | --- | --- | --- |
| `url` | String | (**Required**) URL or path to the server which handles the upload |
| `headers` | Object | Specify what headers need to be added to the XHR request |
| `buttonClass` | String | CSS classes used for "Add" and "Upload" buttons |
| `method` | String | HTTP method to use (POST/PUT). Defaults to POST |
| `extensions` | String | Extensions to allow for uploading. Example: `'.gif,.jpg,.jpeg,.png'` |
| `multiple` | Boolean | Allow multiple file uploads |
| `hide-upload-button` | Boolean | Hides the Upload button. You can then trigger it manually by calling `upload()` on the Vue ref |
| `icons` | Object | You can overwrite default `add`, `remove`, `upload` and `failed` icons. Specify which prop to overwrite. |
| `labels` | Object | You can overwrite default `add`, `remove`, `upload`, `failed` and `uploading` labels. Specify which prop to overwrite. |
| `additionalFields` | Array | **Additional fields to send along the upload request.** Useful for authentication and so on. Array of Objects containing `name` and `value` props. |

## Vue Methods
| Vue Method | Description |
| --- | --- |
| `upload()` | Start file(s) upload. |

## Vue Events
| Vue Event | Description |
| --- | --- |
| `@add(files)` | Triggered when file is picked for upload |
| `@remove(file)` | Triggered when file is removed from upload queue |
| `@upload(file, xhr)` | Triggered individually for each file that has just been uploaded |
| `@fail(file, xhr)` | Triggered individually for each file that has encountered error while uploading |
| `@start` | Triggered when upload has started |
| `@finish` | Triggered when upload of file(s) has ended (with success or failure) |
