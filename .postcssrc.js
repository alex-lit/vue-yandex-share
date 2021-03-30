module.exports = {
  plugins: {
    'postcss-preset-env': {
      importFrom: [
        './node_modules/@alexlit/css-material-color-palette-variables/index.css',
      ],

      insertBefore: {},

      stage: 0,
    },
  },
};
