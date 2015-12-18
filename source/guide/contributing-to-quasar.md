title: Quasar Framework Contributing Guide
---
I’m really excited if you are interested in contributing to Quasar Framework. Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.

You can also help with the documentation if you catch a mistake or want to add a few lines to a page or write new pages. Use the link at the end of each page of this website (specifically the *Suggest an edit on Github*).

## Github Repositories

* <a href="https://github.com/rstoenescu/quasar-framework" target="_blank">Quasar Framework</a>
* <a href="https://github.com/rstoenescu/quasar-cli" target="_blank">Quasar CLI</a>

## Issue Reporting Guidelines

- The issue list of the repository is **exclusively** for bug reports and feature requests.

- Try to search for your issue, it may have already been fixed in the development branch or it may have a resolution.

- Check if the issue is reproducible with the latest stable version of Quasar. If you are using a pre-release, please indicate the specific version you are using.

- It is **required** that you clearly describe the steps necessary to reproduce the issue you are running into. Issues with no clear repro steps will not be triaged. If an issue labeled "need repro" receives no further input from the issue author for more than 5 days, it will be closed.

- If your issue is resolved but still open, don’t hesitate to close it. In case you found a solution by yourself, it could be helpful to explain how you fixed it.

## Pull Request Guidelines

- Checkout a topic branch from `master` and merge back against `master`.

- Work in the `src` folder and **DO NOT** checkin `/dist` in the commits.

- Squash the commit if there are too many small ones.

- Follow the [code style](#Code_Style).

- Make sure that running "npm test" passes all tests.

- If adding new feature:
    - Add accompanying test case.
    - Provide convincing reason to add this feature. Ideally you should open a suggestion issue first and have it greenlighted before working on it.

- If fixing a bug:
    - Provide detailed description of the bug in the PR. Live demo preferred. Use <a href="http://http://plnkr.co" target="_blank">Plunker</a>.
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
- Notice the spaces when declaring a `function`:
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

## Development Setup

You will need [Node.js](http://nodejs.org) along NPM.

Fork Quasar Framework Github repository. Then install all other dependencies.
``` bash
$ npm install
```

To monitor source code for changes and rebuild automatically:
``` bash
# for Development
$ gulp monitor

# for Production
$ gulp monitor:prod
```

To watch source code and rebuild automatically while previewing the UI:
``` bash
# multiple browsers opened to the indicated link will
# have clicks/scrolls/form input events synchronized

# for Development
$ gulp preview

# for Production
$ gulp preview:prod
```

There's a `/preview` folder containing a demo Quasar App which gets previewed in the browser. Change its source to make use of a feature that's of interest to you.

There's also another type of previewing -- with a Responsive View (browsers won't be synchronized). Its purpose is for you to view the UI in a desktop browser and be able to quickly switch between different device screen sizes and orientation.
``` bash
# for Development
$ gulp responsive

# for Production
$ gulp responsive:prod
```

To make a build (will create `/dist` folder):
``` bash
# Development:
$ gulp dev

# Production:
$ gulp prod
```

By default, you can create both development and production builds -- this is the official Production build:
``` bash
$ gulp
# or
$ gulp dist
```
After you build the demo App (from `/preview`) you can see it in action as a native App. Make sure you add a platform to the demo App first.
``` bash
$ gulp wrap

# Adding a platform to the demo App
$ cd preview
$ quasar wrap platform add android
```

To clean folder from build artifacts:
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

## Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

#### Revert
If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

#### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation

#### Scope
The scope could be anything specifying place of the commit change. For example use modules as scope name: `xhr`, `router`, `view` etc...

#### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

#### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

#### Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.
