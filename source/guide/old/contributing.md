title: Quasar Framework Contributing Guide
---
The Quasar team is really excited, when anyone helps by contributing to Quasar Framework. It's what OSS community is all about! 

There are [lots of features waiting](https://github.com/quasarframework/quasar/issues?q=is%3Aissue+is%3Aopen+label%3Aproposal) for someone to write them and make the Quasar experience even better. Check [Github](https://github.com/quasarframework/quasar) or contact [Razvan Stoenescu](https://github.com/rstoenescu) through Gitter/email.

> Before submitting your contribution though, please make sure to take a moment and read through [the contributing guidelines](https://github.com/quasarframework/quasar/blob/dev/.github/CONTRIBUTING.md) and also [the code of conduct](https://github.com/quasarframework/quasar/blob/dev/.github/CODE_OF_CONDUCT.md).

You can also help with the documentation. If you catch a mistake or want to add a few lines to a page or write new pages, use the link at the end of each page of this website (specifically the *Suggest an edit on Github* link).

> <i class="fa fa-usd" style="font-size: 2rem; float: left; margin-right: 10px;"></i> Finally, if you want, you can leave a buck for coffee from time to time. Quasar needs some financial backing to evolve more rapidly. [Read more here](/support-quasar-framework.html).

## Github Repositories

* [Quasar Framework](https://github.com/quasarframework/quasar)
* [Quasar CLI](https://github.com/quasarframework/quasar-cli)
* [Quasar Starter Kit (project folder template)](https://github.com/quasarframework/app-template-default)
* [Electron Wrapper](https://github.com/quasarframework/electron-wrapper)
* [Quasar Play](https://github.com/quasarframework/quasar-play)
* [Documentation Website](https://github.com/quasarframework/quasar-framework.org)

**Please use the appropriate Github repo to report issues. See "Github Repositories" above.** For example, a bug related to CLI should be reported to the CLI repo, one related to build issues to Quasar Starter Kit repo and so on.

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

## Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.

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
