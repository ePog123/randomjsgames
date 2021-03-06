/* */ 
"format global";
// Karma configuration
// Generated on Sun Feb 22 2015 07:41:35 GMT+0900 (JST)

module.exports = function(config) {
  var configuration = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      'src/**/*.js',
      'test/bootstrap.js',
      'test/**/*.js',
      { pattern: 'examples/**/*.js', served: true }
    ],

    proxies: {
      '/examples/': '/base/examples/'
    },


    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': 'browserify',
      'test/**/*.js': 'browserify'
    },

    browserify: {
      debug: true,
      transform: [
        "babelify",
      ]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox'],

    customLaunchers: {
      Chrome_TravisCI: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
  };

  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_TravisCI', 'Firefox'];
    configuration.singleRun = true;
  }

  config.set(configuration);
};
