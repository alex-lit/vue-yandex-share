module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 0,
      importFrom: ['./node_modules/@alexlit/css-material-color-palette-variables/index.css'],
      insertBefore: {},
    },
  },
};
