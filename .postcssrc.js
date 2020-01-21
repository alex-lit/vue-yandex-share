module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 0,
      importFrom: ['./node_modules/@alexlit/css-material-color-palette-variables/index.css'],
      insertBefore: {
        'postcss-import': require('postcss-import')({ path: './src/' }),
        'cq-prolyfill/postcss-plugin': require('cq-prolyfill/postcss-plugin'),
        'postcss-color-mod-function': require('postcss-color-mod-function'),
        'postcss-nested': require('postcss-nested'),
        'postcss-for': require('postcss-for'),
        'postcss-each': require('postcss-each'),
        'postcss-object-fit-images': require('postcss-object-fit-images'),
        'css-has-pseudo/postcss': require('css-has-pseudo/postcss'),
      },
    },
  },
};
