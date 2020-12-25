module.exports = {
  ignoreFiles: [
    '.git/**',
    '.nuxt-storybook/**',
    '.nuxt/**',
    'build/**',
    'dist/**',
    'docs/**',
    'node_modules/**',
    'storybook-static/**',
  ],

  plugins: ['stylelint-prettier', 'stylelint-use-nesting', 'stylelint-scss'],

  extends: [
    'stylelint-config-standard',
    'stylelint-config-idiomatic-order',
    'stylelint-config-prettier',
  ],

  rules: {
    'property-no-unknown': [true, { ignoreProperties: ['content-visibility'] }],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['for', 'each', 'extend', 'include', 'at-root', 'mixin'],
      },
    ],
    'media-feature-name-no-unknown': [
      true,
      { ignoreMediaFeatureNames: ['prefers-reduced-motion'] },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      { ignorePseudoElements: ['range-thumb', 'v-deep'] },
    ],
    'block-no-empty': null,
    'rule-empty-line-before': ['always', { except: 'first-nested' }],
    'at-rule-empty-line-before': ['always', { except: 'first-nested' }],
    'no-descending-specificity': null,
    'string-no-newline': null,
    indentation: null,
    'color-no-hex': null,
    'custom-property-empty-line-before': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'selector-type-no-unknown': [true, { ignoreTypes: ['ymaps'] }],
    'function-url-quotes': 'always',
    'number-leading-zero': 'always',
    'no-missing-end-of-source-newline': null,

    // prettier
    'prettier/prettier': true,

    // scss
    'scss/selector-nest-combinators': 'always',
    'scss/selector-no-redundant-nesting-selector': null,

    // use-nesting
    'csstools/use-nesting': 'always',
  },
};
