title: JS Dates
---

Quasar provides a set of useful functions to manipulate JS Date easily in most use cases, without the additional cost of integrating dedicated libraries like [moment](https://momentjs.com). Most Quasar date functions take as date input either a time value or a string because calling the native JS [Date constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) under the hood. When a date object is required this is indicated in the example.

## Format for display

It takes a string of tokens and replaces them with their corresponding date values:
``` js
import { date } from 'quasar'

let timeInMs = Date.now()
let formattedString = date.formatDate(timeInMs, 'YYYY-MM-DDTHH:mm:ss.SSSZ')
```

Available format tokens:
* Month
  * **M**: 1 2 ... 11 12
  * **MM**: 01 02 ... 11 12
  * **MMM**: Jan Feb ... Nov Dec
  * **MMMM**: January February ... November December
  * **Q**: Quarter number 1 2 3 4
* Day of Month
  * **D**: 1 2 ... 30 31
  * **DD**: 01 02 ... 30 31
* Day of Year
	* **DDD**: 1 2 ... 364 365
	* **DDDD**: 001 002 ... 364 365
* Day of Week
	* **d**: 0 1 ... 5 6
	* **dd**: Su Mo ... Fr Sa
	* **ddd**: Sun Mon ... Fri Sat
	* **dddd**: Sunday Monday ... Friday Saturday
* Day of Week (ISO)
  * **E**: 1 2 ... 6 7
* Week of Year
	* **w**: 1 2 ... 52 53
	* **ww**: 01 02 ... 52 53
* Year
	* **YY**: 70 71 ... 29 30
	* **YYYY**: 1970 1971 ... 2029 2030
* Hour
	* **H**: 0 1 ... 22 23
	* **HH**: 00 01 ... 22 23
	* **h**:  2 ... 11 12
	* **hh**: 01 02 ... 11 12
* Minute
	* **m**: 0 1 ... 58 59
	* **mm**: 00 01 ... 58 59
* Second
	* **s**: 0 1 ... 58 59
	* **ss**: 00 01 ... 58 59
* Fractional Second
	* **S**: 0 1 ... 8 9
	* **SS**: 00 01 ... 98 99
	* **SSS**: 000 001 ... 998 999
	* **SSSS ... SSSSSSSSS**: 000[0..] 001[0..] ... 998[0..] 999[0..]
* Timezone offset
	* **Z**: -07:00 -06:00 ... +06:00 +07:00
	* **ZZ**: -0700 -0600 ... +0600 +0700
* Unix Timestamp
	* **X**: 1360013296
	* **x** (ms): 1360013296123

## Manipulate dates

### Create
To create a date use:
``` js
import { date } from 'quasar'

const isUTC = true // or false
let date = date.buildDate({ year:2010, month:3, date:5, hours:15, minutes:10, seconds:3, milliseconds:123}, isUTC)
```
The object literal provided can contain the following keys:
* `milliseconds`: for the milliseconds component of the date/time
* `seconds`: for the seconds component of the date/time
* `minutes`: for the minutes component of the date/time
* `hours`: for the hours component of the date/time
* `date`: for the day component of the date/time
* `month`: for the month component of the date/time
* `year`: for the year component of the date/time

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

let date = new Date()
date = date.addToDate(date, { days: 7, months: 1 })
date = date.subtractFromDate(date, { hours: 24, milliseconds: 1000000 })
```
The object literal provided can contain the following keys:
* `milliseconds`: for a duration in milliseconds
* `seconds`: for a duration in seconds
* `minutes`: for a duration in minutes
* `hours`: for a duration in hours
* `days`: for a duration in days
* `month`: for a duration in months
* `year`: for a duration in years

### Start/End of time
To mutate the original date object by setting it to the start of a unit of time use:
``` js
import { date } from 'quasar'

let date = new Date()
date = date.startOfDate(date, 'year') // e.g. set to January 1st, 12:00 am this year
date = date.endOfDate(date, 'year') // e.g. set to 12-31 23:59:59.999 this year
```
The second parameter indicates which component of the date to reset to start (i.e. set to zero):
* `second`: reset seconds
* `minute`: reset minutes
* `hour`: reset hours
* `day`: reset days
* `month`: reset months
* `year`: reset years

## Query dates

### Minimum/Maximum
To get the minimum/maximum date of a date set (i.e. array) use:
``` js
import { date } from 'quasar'

let dates = [ new Date(), new Date(), new Date() ]
let min = date.getMinDate(dates)
let max = date.getMaxDate(dates)
```

### Time range
To check if a date is **strictly** (i.e. exclusive range) in a given date/time range use:
``` js
import { date } from 'quasar'

let date = new Date()
if (date.isBetweenDates(date, from, to)) {
	// Do something with date
}
```

### Equality
To check if two dates are **equal** use:
``` js
import { date } from 'quasar'

if (date.isSameDate(date1, date2, unit)) {
	// Do something with date
}
```
If `undefined` the unit parameter allows to perform the complete date/time comparison, otherwise it allows to perform partial comparison:
* `second`: test if same second only
* `minute`: test if same minute only
* `hour`: test if same hour only
* `day`: test if same day only
* `month`: test if same month only
* `year`: test if same year only

### Difference
To compute the difference between two dates use:
``` js
import { date } from 'quasar'

let diff = date.getDateDiff(date1, date2, unit)
```
The unit parameter indicates the unit of measurement:
* `seconds`: distance in seconds
* `minutes`: distance in minutes
* `hours`: distance in hours
* `days`: distance in days
* `months`: distance in months
* `years`: distance in years

**Take care that numbers are rounded towards zero**

### Calendar
To get the week number in year for a given date object use:
``` js
import { date } from 'quasar'

let date = new Date()
let week = date.getWeekOfYear(date) // e.g. 5
```

To get the day number in year for a given date object use:
``` js
import { date } from 'quasar'

let date = new Date()
let day = date.getDayOfYear(date) // e.g. 128
```

To get the number of days in the month for the specified date:
``` js
import { date } from 'quasar'

let date = new Date()
let days = date.daysInMonth(date) // e.g. 30
```
