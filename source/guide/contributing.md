title: Quasar Framework Contributing Guide
---
I’m really excited if you are interested in contributing to Quasar Framework. There are [lots of features waiting](https://github.com/rstoenescu/quasar-framework/issues?q=is%3Aissue+is%3Aopen+label%3Aproposal) for someone to write them. Check [Github](https://github.com/rstoenescu/quasar-framework) or contact [Razvan Stoenescu](https://github.com/rstoenescu) through email.

Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.

You can also help with the documentation if you catch a mistake or want to add a few lines to a page or write new pages. Use the link at the end of each page of this website (specifically the *Suggest an edit on Github*).

> <i class="fa fa-usd" style="font-size: 2rem; float: left; margin-right: 10px;"></i> Finally, if you want, you can leave a buck for coffee from time to time. Quasar needs some financial backing to evolve. [Read more here](/support-quasar-framework.html).

## Github Repositories

* [Quasar Framework](https://github.com/rstoenescu/quasar-framework)
* [Quasar CLI](https://github.com/rstoenescu/quasar-cli)
* [Quasar App Templates](https://github.com/rstoenescu/quasar-templates)

## Issue Reporting Guidelines

- The issue list of the repository is **exclusively** for bug reports and feature requests.

- Try to search for your issue, it may have already been fixed in the development branch or it may have a resolution.

- Check if the issue is reproducible with the latest stable version of Quasar. If you are using a pre-release, please indicate the specific version you are using.

- It is **required** that you clearly describe the steps necessary to reproduce the issue you are running into. Issues with no clear repro steps will not be triaged. If an issue labeled "need repro" receives no further input from the issue author for more than 5 days, it will be closed.

- If your issue is resolved but still open, don’t hesitate to close it. In case you found a solution by yourself, it could be helpful to explain how you fixed it.

## Pull Request Guidelines

- Checkout a topic branch from `dev` and merge back against `dev`.

- Work in the `src` folder and **DO NOT** checkin `/dist` in the commits or any other file or folder described in `.gitignore`.

- Squash the commit if there are too many small ones.

- Follow the [code style](#Code-Style) in next section.

- Make sure that running "npm test" passes all tests.

- If adding new feature, provide convincing reason to add this feature. Ideally you should open a suggestion issue first and have it greenlighted before working on it.

- If fixing a bug:
    - Provide detailed description of the bug in the PR. Live demo preferred. Use [jsFiddle](https://jsfiddle.net/), [Plunker](https://plnkr.co/), or [JsBin](http://jsbin.com/) with standalone Quasar version.
    - Add appropriate test coverage if applicable.

## Code Style

- Follow [Google JavaScript Style Guide](https://google.github.io/styleguide/javascriptguide.xml)
- 2 spaces indentation (*NO* tabs).
- Stroustrup brace style.
- Multiple var declarations like this:
  ``` js
  let
    first,
    second,
    ...,
    last
  ```
- Omit ending semi-colons when not necessary.
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

## Development Setup

You will need [Node.js](http://nodejs.org) along NPM. Read `package.json` and take notice of the scripts you can use.

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
