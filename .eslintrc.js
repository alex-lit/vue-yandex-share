module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:import/typescript',
    'plugin:jsdoc/recommended',
    'plugin:sonarjs/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/vue',
  ],

  plugins: ['vue', 'prettier', 'sonarjs', 'jsdoc', 'simple-import-sort'],

  ignorePatterns: ['sw.js'],

  rules: {
    'no-console': 'off',
    'no-use-before-define': 'off',

    // jsdoc
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-returns-type': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/require-jsdoc': [
      'warn',
      {
        require: {
          ArrowFunctionExpression: false,
          ClassDeclaration: false,
          ClassExpression: false,
          FunctionDeclaration: true,
          FunctionExpression: false,
          MethodDefinition: true,
        },
      },
    ],

    // prettier
    'prettier/prettier': 'error',

    // simple-import-sort
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',

    // typescript
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        default: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',

          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',

          'public-field',
          'protected-field',
          'private-field',

          'static-field',
          'instance-field',

          'field',

          'constructor',

          'public-static-method',
          'protected-static-method',
          'private-static-method',

          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',

          'public-method',
          'protected-method',
          'private-method',

          'static-method',
          'instance-method',

          'method',
        ],
      },
    ],

    // vue
    'vue/attributes-order': [
      'error',
      {
        alphabetical: true,
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    'vue/component-tags-order': ['error'],
    'vue/eqeqeq': ['error'],
    'vue/html-comment-content-newline': ['warn'],
    'vue/html-comment-content-spacing': ['warn'],
    'vue/html-comment-indent': ['warn'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'never',
          component: 'never',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/match-component-file-name': ['error'],
    'vue/no-deprecated-scope-attribute': ['error'],
    'vue/no-deprecated-slot-attribute': ['error'],
    'vue/no-deprecated-slot-scope-attribute': ['error'],
    'vue/no-irregular-whitespace': ['error'],
    'vue/no-multiple-objects-in-class': ['error'],
    'vue/no-potential-component-option-typo': ['error'],
    'vue/no-reserved-component-names': ['error'],
    'vue/no-unsupported-features': ['error'],
    'vue/no-unused-components': ['error'],
    'vue/no-v-html': 'off',
    'vue/static-class-names-order': 'off',
    'vue/this-in-template': ['error', 'never'],
    'vue/v-for-delimiter-style': ['error'],
    'vue/v-on-function-call': ['error', 'always'],
    'vue/valid-v-bind-sync': ['error'],
    'vue/valid-v-slot': ['error'],
  },
};
