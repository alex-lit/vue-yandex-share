module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/vue-yandex-share/' : '/',

  outputDir: process.env.OUTPUT_DIR || 'dist',

  assetsDir: 'assets',

  css: {
    sourceMap: false,
    extract: false,
  },
};
