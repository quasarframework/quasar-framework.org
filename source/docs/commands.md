title: Commands
---
## version
Displays version information.
``` bash
$ quasar -V
$ quasar version
```



# Create content

## create *&lt;folder&gt;*
Initializes a project folder with everything necessary.
``` bash
$ quasar create [folder]
```



# Making a release
Versioning takes into account the Angular commit style.
See [Commit Message Format](commit-message-format.html).


## release:recommend
Recommends the type of version bump, which can be: `patch`, `minor` or `major`.
The recommendation is based on the commit message style. See [Commit Message Format](commit-message-format.html).
``` bash
$ quasar release:recommend
```



## release *&lt;type&gt;*
`type` can be: prepatch, path, preminor, minor, premajor, major, prerelease
``` bash
$ quasar release minor
```

What it does is:
* Bumps package version according to the *type*
* Generates changelog from GIT
* Commits to GIT with commit message "[release] `VERSION`"
* Generates a GIT tag named "v`VERSION`"
* Pushes commit and tag to GIT



## release:version *&lt;version&gt;*
If however you want to release a specific version, use this command:
``` bash
$ quasar release:version 1.2.3
```

## Options

### TBD
Description
``` bash
$ quasar
```
