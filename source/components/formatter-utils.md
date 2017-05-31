title: Formatter Utils
---

## Capitalize
``` js
import { format } from 'quasar'
const { capitalize } = format

console.log( capitalize('some text') )
// Some text
```

## Format to Human Readable Size
``` js
import { format } from 'quasar'
const { humanStorageSize } = format

console.log( humanStorageSize(13087) )
// 12.78 kB
```

## Normalize Number to Interval
``` js
import { format } from 'quasar'
const { between } = format

// (Number) between(Number, Number min, Number max)
console.log( between(50, 10, 20) )
// 20
```

## Pad String
``` js
import { format } from 'quasar'
const { pad } = format

// (String) pad(String toPad, Number length, String paddingCharacter)
// length is default 2
// paddingCharacter is default '0'
console.log( pad('2', 4) )
// '0002'
```
