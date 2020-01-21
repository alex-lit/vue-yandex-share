module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
    '@vue/typescript',
    'plugin:import/recommended',
    'plugin:jsdoc/recommended',
    'plugin:sonarjs/recommended',

    'prettier',
    'plugin:prettier/recommended',
    'prettier/vue',
  ],
  plugins: ['import', 'simple-import-sort', '@typescript-eslint', 'jsdoc', 'sonarjs', 'prettier'],
  rules: {
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-shadow': 'off',
    'global-require': 'off',
    'class-methods-use-this': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-param-reassign': 'off',
    'simple-import-sort/sort': 'error',
    'standard/computed-property-even-spacing': 'off',
    'standard/no-callback-literal': 'off',
    'prettier/prettier': ['error'],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-dynamic-require': 'off',
    'import/extensions': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-returns-type': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/require-jsdoc': [
      1,
      {
        require: {
          ClassDeclaration: false,
          ClassExpression: false,
          FunctionDeclaration: true,
          FunctionExpression: false,
          MethodDefinition: false,
        },
      },
    ],
    // '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    '@typescript-eslint/member-ordering': [
      2,
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
    'vue/component-tags-order': ['error'],
    'vue/no-deprecated-scope-attribute': ['error'],
    'vue/no-deprecated-slot-attribute': ['warn'],
    'vue/no-deprecated-slot-scope-attribute': ['error'],
    'vue/match-component-file-name': ['error'],
    'vue/no-reserved-component-names': ['error'],
    'vue/no-unsupported-features': ['error'],
    'vue/static-class-names-order': ['error'],
    'vue/valid-v-bind-sync': ['error'],
    'vue/valid-v-slot': ['error'],
    'vue/eqeqeq': ['error'],
    'vue/no-irregular-whitespace': ['error'],
    'vue/no-unused-components': ['error'],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
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
    'vue/no-v-html': 'off',
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['~', './src'],
        ],
        extensions: ['.js', '.ts', '.d.ts', '.vue', '.yaml', '.json', '.md', '.txt'],
      },
    },
  },
};
