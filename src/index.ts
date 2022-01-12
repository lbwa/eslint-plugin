import { Linter, Rule } from 'eslint'
import { config as typescript } from './configs/typescript'
import { config as javascript } from './configs/javascript'
import { config as jest } from './configs/jest'

const plugin: Plugin = {
  rules: {
    // Only include all customizable rules from rules folder.
  },

  configs: {
    /**
     * @usage
     * ```js
     * {
     *    extends: ['plugin:@lbwa/recommended']
     * }
     * ```
     */
    recommended: {
      plugins: ['@lbwa'],
      // order related
      extends: ['plugin:@lbwa/javascript', 'plugin:@lbwa/typescript']
    },
    typescript,
    javascript,
    jest
  }
}

module.exports = plugin

interface Plugin {
  /**
   * @description  the rules of @lbwa/eslint-plugin included
   * @usage
   * ```js
   * {
   *    plugins: ["@lbw"]
   * }
   * ```
   */
  rules: Record<string, Rule.RuleModule>
  /**
   * @see https://eslint.org/docs/developer-guide/working-with-plugins#configs-in-plugins
   */
  configs: Record<
    'recommended' | 'typescript' | 'javascript' | 'jest',
    Linter.Config
  >
}
