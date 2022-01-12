import type { Linter } from 'eslint'

export const config: Linter.Config = {
  overrides: [
    {
      files: ['**/__tests__/**', '**/*.{spec,test}.[jt]s?(x)'],
      env: {
        jest: true
      },
      settings: {
        jest: {
          version: 26
        }
      },
      extends: [
        // include enable eslint-plugin-jest
        // see https://github.com/jest-community/eslint-plugin-jest/tree/v24.3.6#recommended
        // and https://github.com/jest-community/eslint-plugin-jest/blob/v24.3.6/src/index.ts#L61-L65
        'plugin:jest/recommended'
      ]
    }
  ]
}
