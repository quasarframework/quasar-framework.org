title: Handling JS Date
---

Quasar provides a set of useful functions to manipulate JS Date easily in most use cases, without the high additional cost of integrating dedicated libraries like [moment](https://momentjs.com).

Most Quasar date functions take as parameter either a Unix timestamp or a String representing a date which needs to be parsable by the native JS [Date constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date). Some examples: `1497159857411`, `Sun Jun 11 2017 08:44:42 GMT+0300`, `2017-06-16`.

Returned values are all JS Dates.

Get familiar with JS native Date class, which is very powerful, and remember that you don't need solutions like Momentjs which add hundreds of minified KB to your bundle.

### Helping Tree-Shake
You will notice all examples import `date` Object from Quasar. However, if you need only one method from it, then you can use ES6 destructuring to help Tree Shaking embed only that method and not all of `date`.

Example with `addToDate()`:
```js
// we import all of `date`
import { date } from 'quasar'
// destructuring to keep only what is needed
const { addToDate } = date

let date = addToDate(new Date(), { days: 7, months: 1 })
```

## Format for display

It takes a string of tokens and replaces them with their corresponding date values:
``` js
import { date } from 'quasar'

let timeStamp = Date.now()
let formattedString = date.formatDate(timeStamp, 'YYYY-MM-DDTHH:mm:ss.SSSZ')
```

Available format tokens:

| Unit | Formats available |
| --- | --- |
| Year | <ul><li>**YY**: 70 71 ... 29 30</li><li>**YYYY**: 1970 1971 ... 2029 2030</li></ul> |
| Month | <ul><li>**M**: 1 2 ... 11 12</li><li>**MM**: 01 02 ... 11 12</li><li>**MMM**: Jan Feb ... Nov Dec</li><li>**MMMM**: January February ... November December</li><li>**Q**: Quarter number 1 2 3 4</li></ul> |
| Day of Month | <ul><li>**D**: 1 2 ... 30 31</li><li>**DD**: 01 02 ... 30 31</li></ul> |
| Day of Year | <ul><li>**DDD**: 1 2 ... 364 365</li><li>**DDDD**: 001 002 ... 364 365</li></ul> |
| Day of Week | <ul><li>**d**: 0 1 ... 5 6</li><li>**dd**: Su Mo ... Fr Sa</li><li>**ddd**: Sun Mon ... Fri Sat</li><li>**dddd**: Sunday Monday ... Friday Saturday</li></ul> |
| Day of Week (ISO) | <ul><li>**E**: 1 2 ... 6 7</li></ul> |
| Week of Year | <ul><li>**w**: 1 2 ... 52 53</li><li>**ww**: 01 02 ... 52 53</li></ul> |
| Hour | <ul><li>**H**: 0 1 ... 22 23</li><li>**HH**: 00 01 ... 22 23</li><li>**h**: 0 ... 11 12</li><li>**hh**: 01 02 ... 11 12</li></ul> |
| Minute | <ul><li>**m**: 0 1 ... 58 59</li><li>**mm**: 00 01 ... 58 59</li></ul> |
| Second | <ul><li>**s**: 0 1 ... 58 59</li><li>**ss**: 00 01 ... 58 59</li></ul> |
| Fractional Second | <ul><li>**S**: 0 1 ... 8 9</li><li>**SS**: 00 01 ... 98 99</li><li>**SSS**: 000 001 ... 998 999</li></ul> |
| Timezone offset | <ul><li>**Z**: -07:00 -06:00 ... +06:00 +07:00</li><li>**ZZ**: -0700 -0600 ... +0600 +0700</li></ul> |
| Unix Timestamp | <ul><li>**X**: 1360013296</li><li>**x** (ms): 1360013296123</li></ul> |

## Manipulate dates

### Create
**Try to create dates with native JS Date class**. The following method is just a wrapper to help you in cases where you just need current time but with a different year, or month, or second etc.

``` js
import { date } from 'quasar'

let date = date.buildDate({ year:2010, date:5, hours:15, milliseconds:123})
```
You can pass a third argument (a boolean) for setting UTC time (true) instead of local time.

The object literal provided can contain the following keys (all are optional):

| Key | Description |
| --- | --- |
| `milliseconds` | for the milliseconds component of the date/time |
| `seconds` | for the seconds component of the date/time |
| `minutes` | for the minutes component of the date/time |
| `hours` | for the hours component of the date/time |
| `date` | for the day component of the date/time |
| `month` | for the month component of the date/time |
| `year` | for the year component of the date/time |

### Validate
To check if a date string is valid use:
``` js
import { date } from 'quasar'

let dateString = 'Wed, 09 Aug 1995 00:00:00 GMT'
if (date.isValid(dateString)) {
  // Do something with date string
}
```

### Add/Subtract
To add/subtract some duration to/from a date use:
``` js
import { date } from 'quasar'

let date = new Date(2017, 2, 7)

date = date.addToDate(date, { days: 7, months: 1 })
// `date` is now 2017-3-14 00:00:00

date = date.subtractFromDate(date, { hours: 24, milliseconds: 10000 })
// `date` is now 2017-3-12 23:59:50
```
The object literal provided can contain the following keys (all are optional):

| Key | Description |
| --- | --- |
| `milliseconds` | for a duration in milliseconds |
| `seconds` | for a duration in seconds |
| `minutes` | for a duration in minutes |
| `hours` | for a duration in hours |
| `days` | for a duration in days |
| `month` | for a duration in months |
| `year` | for a duration in years |

### Set date/time
To set a specified unit(s) of date/time:
``` js
import { date } from 'quasar'

let date = new Date(2017, 10, 2)
let adjustedDate = date.adjustDate(date, { year: 2010, month: 2 })
// `adjustedDate` is 2010-2-2
```
You can pass a third argument (a Boolean) for setting UTC time (`true`) instead of local time.

The object literal provided can contain the following keys (all are optional):

| Key | Description |
| --- | --- |
| `milliseconds` | for the milliseconds component of the date/time |
| `seconds` | for the seconds component of the date/time |
| `minutes` | for the minutes component of the date/time |
| `hours` | for the hours component of the date/time |
| `date` | for the day component of the date/time |
| `month` | for the month component of the date/time |
| `year` | for the year component of the date/time |

## Query dates

### Minimum/Maximum
To get the minimum/maximum date of a date set (i.e. array) use:
``` js
import { date } from 'quasar'

let dates = [ new Date(2017, 6, 24), new Date(2017, 5, 20), new Date(2017, 6, 26) ]
let min = date.getMinDate(dates) // `min` is 2017-5-20
let max = date.getMaxDate(dates) // `max` is 2017-6-26

// Or simply use multiple parameters:

let min = date.getMinDate(new Date(2017, 6, 24), new Date(2017, 5, 20), new Date(2017, 6, 26))
// `min` is 2017-5-20
let max = date.getMaxDate(new Date(2017, 6, 24), new Date(2017, 5, 20), new Date(2017, 6, 26))
// `max` is 2017-6-26
```

### Time range
To check if a date is **strictly** (i.e. exclusive range) in a given date/time range use:
``` js
import { date } from 'quasar'

let date = new Date()
let dateFrom = new Date()
let dateTo = new Date()
if (date.isBetweenDates(date, dateFrom, dateTo)) {
  // Do something with date
}
```

To normalize a date in a given date/time range use:
``` js
import { date } from 'quasar'

let date = new Date()
let dateMin = new Date(2010, 2, 23)
let dateMax = new Date(2012, 4, 12)
let dateNormalized = date.getDateBetween(date, dateMin, dateMax)
// Returns `date` if it's between 2010-2-23 and 2012-4-12; `dateMin` if it's lower; `dateMax` if it's greater
```

### Equality
To check if two dates' unit are **equal** use:
``` js
import { date } from 'quasar'

let date1 = new Date(2017, 2, 5)
let date2 = new Date(2017, 3, 8)
let unit = 'year'

if (date.isSameDate(date1, date2, /* optional */ unit)) {
  // true because date1 and date2's year is the same
}

```
Unit parameter can be omitted, in which case a full date/time comparison will occur, otherwise it allows to perform partial comparison:

| Unit | Description |
| --- | --- |
| `second` | test if same second only |
| `minute` | test if same minute only |
| `hour` | test if same hour only |
| `day` | test if same day only |
| `month` | test if same month only |
| `year` | test if same year only |

### Difference
To compute the difference between two dates use:
``` js
import { date } from 'quasar'

let date1 = new Date(2017, 4, 12)
let date2 = new Date(2017, 3, 8)
let unit = 'days'

let diff = date.getDateDiff(date1, date2, unit)
// `diff` is 34 (days)
```
The unit parameter indicates the unit of measurement, if not specified then it is `days` by default:

| Unit | Description |
| --- | --- |
| `seconds` | distance in seconds |
| `minutes` | distance in minutes |
| `hours` | distance in hours |
| `days` | distance in days |
| `months` | distance in months |
| `years` | distance in years |

### Calendar
To get the week number in year for a given date object use:
``` js
import { date } from 'quasar'

let date = new Date(2017, 0, 4)
let week = date.getWeekOfYear(date) // `week` is 1
```

To get the day number in year for a given date object use:
``` js
import { date } from 'quasar'

let date = new Date(2017, 1, 4)
let day = date.getDayOfYear(date) // `day` is 35
```

To get the day number in week for a given date object use:
``` js
import { date } from 'quasar'

let date = new Date(2017, 1, 9)
let day = date.getDayOfWeek(date) // `day` is 4
```

To get the number of days in the month for the specified date:
``` js
import { date } from 'quasar'

let date = new Date()
let days = date.daysInMonth(date) // e.g. 30
```

### Start/End of time
To mutate the original date object by setting it to the start of a unit of time use:
``` js
import { date } from 'quasar'

let date = new Date(2000)
// set to beginning of year 2000 (January 1st, 2000, 00:00:00.000)
date = date.startOfDate(date, 'year')
// set to end of year 2000 (December 31st, 2000, 23:59:59.999)
date = date.endOfDate(date, 'year')
```

The second parameter indicates a unit to reset to (beginning of it or end of it):

| Unit | Description |
| --- | --- |
| `second` | reset seconds |
| `minute` | reset minutes |
| `hour` | reset hours |
| `day` | reset days |
| `month` | reset months |
| `year` | reset years |
