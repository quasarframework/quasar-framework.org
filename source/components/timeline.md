title: Timeline
---
A Timeline is a display of a list of events in chronological order. It is typically a graphic design showing a long bar labelled with dates alongside itself and usually events. Timelines can use any time scale, depending on the subject and data.

QTimeline has 3 media breakpoints (if `responsive` property is used). View on a desktop and click the "View Desktop" link on the right side, then resize the browser window to see the media breakpoints in action.
<input type="hidden" data-fullpage-demo="other-components/timeline">

## Installation
Edit `/quasar.conf.js`:
```js
framework: {
  components: [
    'QTimeline',
    'QTimelineEntry'
  ]
}
```

## Basic Usage
```html
<q-timeline responsive color="secondary">
  <q-timeline-entry heading>
    Timeline Subject
  </q-timeline-entry>

  <q-timeline-entry
    title="Event Title"
    subtitle="February 22, 1986"
    side="left"
  >
    <div>
      Lorem ipsum dolor sit amet.
    </div>
  </q-timeline-entry>
</q-timeline>
```

## QTimeline (Parent) Vue Properties
| Vue Property | Type    | Description                            |
| ---          | ---     | ---                                    |
| `responsive` | Boolean | (v0.17.7+) Enable responsive mode |
| `color` | String  | Color of the timeline element |
| `dark` | Boolean | When rendering on a dark background. |

## QTimelineEntry (Child) Vue Properties
| Vue Property | Type    | Description |
| ---          | ---     | ---         |
| `heading` | Boolean | Display a timeline subject which helps group timeline entries into separate chunks. |
| `tag` | String | HTML tag to use to render the timeline entry DOM element. |
| `side` | String | On wider windows, you can choose on which side to display this entry (`left` or `right`). Default is on the right side. |
| `icon` | String | Icon to use. |
| `color` | String | Color to use for this entry. |
| `title` | String | Title of the entry. |
| `subtitle` | String | Addition to title of the entry. |
