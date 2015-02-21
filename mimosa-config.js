exports.config = {
  modules: [
    'babel',
    'jade',
    'copy',
    'server',
    'stylus',
    'jshint',
    'minify-js',
    'minify-css',
    'live-reload'
  ],

  watch: {
    sourceDir: 'src',
    compiledDir: 'lib',
    javascriptDir: null
  },

  server: {
    views: {
      compileWith: 'html',
      extension: 'html',
      path: '.'
    },

    packageJSONDir: __dirname
  },

  liveReload: {
    additionalDirs: ['lib']
  },

  babel: {
    options: {
      modules: 'system',
      experimental: true
    },

    overrides: {
      'src[\\/\\\\]test[\\/\\\\]e2e': {
        options: {
          modules: 'common'
        }
      }
    }
  }
};