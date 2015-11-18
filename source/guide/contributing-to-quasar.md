title: Quasar Framework Contributing Guide
---
I’m really excited if you are interested in contributing to Quasar Framework. Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.

You can also help with the documentation if you catch a mistake or want to add a few lines to a page or write new pages. Use the link at the end of each page of this website (specifically the *Suggest an edit on Github*).

## Github Repositories

* <a href="https://github.com/rstoenescu/quasar-framework" target="_blank">Quasar Framework</a>
* <a href="https://github.com/rstoenescu/quasar-cli" target="_blank">Quasar CLI</a>
* <a href="https://github.com/rstoenescu/quasar-semantic" target="_blank">Quasar Semantic UI Build</a>

## Issue Reporting Guidelines

- The issue list of the repository is **exclusively** for bug reports and feature requests.

- Try to search for your issue, it may have already been fixed in the development branch or it may have a resolution.

- Check if the issue is reproducible with the latest stable version of Quasar. If you are using a pre-release, please indicate the specific version you are using.

- It is **required** that you clearly describe the steps necessary to reproduce the issue you are running into. Issues with no clear repro steps will not be triaged. If an issue labeled "need repro" receives no further input from the issue author for more than 5 days, it will be closed.

- If your issue is resolved but still open, don’t hesitate to close it. In case you found a solution by yourself, it could be helpful to explain how you fixed it.

## Pull Request Guidelines

- Checkout a topic branch from `dev` and merge back against `dev`.

- Work in the `src` folder and **DO NOT** checkin `/build` or `/dist` in the commits.

- Squash the commit if there are too many small ones.

- Follow the [code style](#Code_Style).

- Make sure that running "npm test" passes all tests.

- If adding new feature:
    - Add accompanying test case.
    - Provide convincing reason to add this feature. Ideally you should open a suggestion issue first and have it greenlighted before working on it.

- If fixing a bug:
    - Provide detailed description of the bug in the PR. Live demo preferred.
    - Add appropriate test coverage if applicable.

## Code Style

- Follow <a href="https://google.github.io/styleguide/javascriptguide.xml" target="_blank">Google JavaScript Style Guide</a>
- 2 spaces indentation (*NO* tabs).
- Stroustrup brace style.
- Multiple var declarations like this:
  ``` js
  var
    first,
    second,
    ...,
    last
    ;
  ```
- Return early.
- 1 space after `function`
  ``` js
  function fnName(param1, param2, ..., paramN) {
    ...
  }
  ```
- 1 space between arguments, but not between parentheses.
  ``` js
  if (conditions) {
    ...
  }
  if (a === 2 && b === 3) {
    ...
  }
  ```
- When in doubt, read the source code.
- Break long ternary conditionals like this:

  ``` js
  var a = superLongConditionalStatement
    ? 'yep'
    : 'nope'
  ```

## Commit Message format
See the [Commit Message Format](/guide/commit-message-format.html) section.

## Development Setup

You will need [Node.js](http://nodejs.org) along NPM.

Fork Quasar Framework Github repository. Then install all other dependencies.
``` bash
$ npm install
```

To monitor source code for changes and rebuild:
``` bash
$ gulp monitor
```

To watch source code and rebuild automatically while previewing the UI:
``` bash
# multiple browsers opened to the indicated link will
# have clicks/scrolls/form input events synchronized

$ gulp preview
```

There's also another type of previewing -- with a Responsive View (browsers won't be synchronized). Its purpose is for you to view the UI in a desktop browser and be able to quickly switch between different device screen sizes and orientation.
``` bash
$ gulp rpreview
```

To make a development build:
``` bash
# will create the /build folder
$ gulp build
```

To make a production build:
``` bash
# overwrites the /build folder and creates /dist
$ gulp dist
```

To clean builds folder:
``` bash
$ gulp clean
```

Testing (one single run only):
``` bash
# with all browsers:
$ npm test

# with PhantomJS only
$ npm run pjs

# with Chrome only
$ npm run chrome

# with Firefox only
$ npm run ff

# Then check the coverage in HTML coverage:
$ npm run coverage
# --This opens Chrome browser--
```

Watch source code and test on changes (browsers will remain opened):
``` bash
# with all browsers:
$ npm test

# with PhantomJS only
$ npm run pjs-live

# with Chrome only
$ npm run chrome-live

# with Firefox only
$ npm run ff-live
```
