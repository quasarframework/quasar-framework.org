title: App Linter Configuration
---

The boilerplate created by Quasar CLI uses [ESLint](http://eslint.org/) as the linter, and uses the [Standard](https://github.com/feross/standard/blob/master/RULES.md) preset with some small customizations.

If you are not happy with the default linting rules, you have several options:

1. Overwrite individual rules in .eslintrc.js. For example, you can add the following rule to enforce semicolons instead of omitting them:

  ``` js
  "semi": [2, "always"]
  ```

2. Remove linter by editing `/build/webpack.base.conf.js` and removing (or commenting) the lines below from `module/rules`:

  ``` js
      { // eslint
        enforce: 'pre',
        test: /\.(vue|js)$/,
        loader: 'eslint-loader',
        include: projectRoot,
        exclude: /node_modules/,
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
  ```
