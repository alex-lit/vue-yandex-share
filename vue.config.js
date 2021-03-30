module.exports = {
  assetsDir: 'assets',

  css: {
    extract: false,
    sourceMap: false,
  },

  outputDir: process.env.OUTPUT_DIR || 'dist',

  publicPath:
    process.env.NODE_ENV === 'production' ? '/vue-yandex-share/' : '/',
};
