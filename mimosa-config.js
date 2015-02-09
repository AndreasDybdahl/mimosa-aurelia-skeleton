exports.config = {
  modules: [
    '6to5',
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

  to5: {
    options: {
      modules: 'system'
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