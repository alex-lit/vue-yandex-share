module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
    '@vue/typescript',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/vue',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: 'off',
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
