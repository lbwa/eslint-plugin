import type { Linter } from 'eslint'

const IS_PROD = process.env.NODE_ENV === 'production'
export const javascriptExtensions = ['.js', '.jsx', '.cjs', '.mjs']

export const config: Linter.Config = {
  root: true,
  env: {
    browser: true,
    node: true,
    // add all ECMACScript 2021 globals and automatically sets the ecmaVersion parser option to 12
    es2021: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    // include enable eslint-plugin-prettier,
    // see https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    // and https://github.com/prettier/eslint-plugin-prettier/blob/v3.3.1/eslint-plugin-prettier.js#L109-L117
    'plugin:prettier/recommended'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: javascriptExtensions
      }
    }
  },
  rules: {
    'import/order': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',

    'no-debugger': IS_PROD ? 'error' : 'warn',
    'no-console': IS_PROD ? 'error' : 'warn',
    'no-var': 'error',
    'no-use-before-define': 'error',
    // https://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            message: 'Please use `lodash/*` or `lodash-es` instead.'
          }
        ]
      }
    ]
  }
}
