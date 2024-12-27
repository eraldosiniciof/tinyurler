import pluginJs from '@eslint/js'
import importHelpersPlugin from 'eslint-plugin-import-helpers'
import jestPlugin from 'eslint-plugin-jest'
import prettierPlugin from 'eslint-plugin-prettier'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      }
    }
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      jest: jestPlugin,
      prettier: prettierPlugin,
      'import-helpers': importHelpersPlugin
    },
    rules: {
      'import-helpers/order-imports': [
        'error',
        {
          newlinesBetween: 'always',
          groups: [
            'module',
            '/^@knex/',
            '/^@config/',
            '/^@providers/',
            '/^@modules/',
            ['parent', 'sibling', 'index']
          ]
        }
      ],
      'prettier/prettier': ['error']
    }
  }
]
