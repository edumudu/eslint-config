// Config for vue 3 and vite + typescript
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    extraFileExtensions: ['.vue'],
    parser: {
      // Script parser for `<script>`
      // This need to be set to `@typescript-eslint/parser` for not throw unexpected character for vue files
      js: '@typescript-eslint/parser',

      // Script parser for `<script lang="ts">`
      ts: '@typescript-eslint/parser',

      // Script parser for vue directives (e.g. `v-if=` or `:attribute=`)
      // and vue interpolations (e.g. `{{variable}}`).
      // If not specified, the parser determined by `<script lang ="...">` is used.
      '<template>': 'espree',
    },
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: '.',
      },
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false,
      ignores: [],
    }],

    'vue/custom-event-name-casing': ['error', 'camelCase'],

    'vue/new-line-between-multi-line-property': ['error', {
      minLineOfMultilineProperty: 2,
    }],

    'vue/no-boolean-default': ['error', 'no-default'],
    'vue/no-deprecated-v-is': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',

    'vue/no-reserved-component-names': ['error', {
      disallowVueBuiltInComponents: true,
      disallowVue3BuiltInComponents: true,
    }],

    'vue/no-static-inline-styles': ['error', {
      allowBinding: false,
    }],

    'vue/no-template-target-blank': ['error', {
      allowReferrer: true,
      enforceDynamicLinks: 'always',
    }],

    'vue/no-this-in-before-route-enter': 'error',

    'vue/no-unsupported-features': ['error', {
      version: '^3.1.0',
      ignores: [],
    }],

    'vue/no-unused-properties': ['error', {
      groups: ['props', 'data', 'computed', 'methods', 'setup'],
      deepData: true,
      ignorePublicMembers: false,
    }],

    'vue/no-useless-mustaches': ['error', {
      ignoreIncludesComment: false,
      ignoreStringEscape: false,
    }],

    'vue/no-useless-v-bind': ['error', {
      ignoreIncludesComment: false,
      ignoreStringEscape: false,
    }],

    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/require-name-property': 'error',

    'vue/v-on-event-hyphenation': ['error', 'always', {
      autofix: true,
      ignore: [],
    }],

    'vue/v-on-function-call': ['error', 'never'],
    'vue/valid-next-tick': 'error',
    'vue/array-bracket-newline': 'error',
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/comma-dangle': 'error',
    'vue/comma-spacing': 'error',
    'vue/dot-notation': 'error',
    'vue/eqeqeq': 'error',
    'vue/func-call-spacing': ['error', 'never'],

    'vue/key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    }],

    'vue/no-extra-parens': 'error',
    'vue/no-irregular-whitespace': 'error',
    'vue/no-useless-concat': 'error',
    'vue/prefer-template': 'error',

    'no-use-before-define': 'off',
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      { groups: [['builtin', 'external', 'internal']], 'newlines-between': 'always' },
    ],
  },
  overrides: [
    {
      files: ['**/*.spec.{j,t}s?(x)'],
      extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/vue'],
      rules: {
        // Conflict with the createRenderComponentFactory util
        'testing-library/render-result-naming-convention': 'off',
      },
    },
    {
      files: ['**/*.spec.{j,t}s?(x)', 'vite.config.{j,t}s'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
