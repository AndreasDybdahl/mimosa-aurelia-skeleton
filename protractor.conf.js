// Protractor configuration
// Generated on Tue Jan 27 2015 23:37:28 GMT+0100 (W. Europe Standard Time)

var Promise = require('bluebird');

function exchange(obj, newProps) {
  var proto = Object.getPrototypeOf(obj);
  for (var key in newProps) {
    if(newProps.hasOwnProperty(key)) {
      obj[key] = proto[key] = newProps[key](proto[key] || obj[key]);
    }
  }
}

function remix(name) {
  return function(old) {
    return function() {
      console.log('Running ' + name);
      browser.waitForAngular();

      return old.apply(this, Array.prototype.slice.call(arguments, 0));
    };
  };
}

var server, serverStarted, sauceConnect;

exports.config = {
  //directConnect: true,
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  beforeLaunch: function() {
    global.expect = require('chai').expect;
    var serverStart = require('./server').startServer;

    return new Promise(function(resolve) {
      if(process.env.SAUCE_BIN) {
        var child_process = require('child_process');
        sauceConnect = child_process.spawn(process.env.SAUCE_BIN, ['-u', process.env.SAUCE_USERNAME, '-k', process.env.SAUCE_ACCESS_KEY, '-i', exports.config.capabilities.build], { stdio: 'inherit' });
        console.log('Waiting 20 seconds for sauce connect');
        setTimeout(resolve, 20000);
      } else {
        resolve();
      }
    }).then(function() {
      return new Promise(function(resolve) {
        serverStart({
          server: {
            port: 9000
          }
        }, function(s) {
          server = s;
          resolve();
        });
      });
    });
  },

  afterLaunch: function() {
    if(sauceConnect) {
      sauceConnect.kill();
    }

    server.close();
  },

  onPrepare: function() {
    browser.ignoreSynchronization = true;
    exchange(browser, {
      waitForAngular: function(old) {
        return function waitForAurelia(opt_description) {
          console.log('wait for aurelia');
          return  browser.executeAsyncScript("var cb = arguments[arguments.length - 1];" + "document.addEventListener(\"aurelia-composed\", function (e) {" + "  setTimeout(function() { cb(\"Aurelia App composed\") }, 50);" + "}, false);").then(function (result) {
            console.log(result);
          });
        };
      },

      getCurrentUrl: remix('getCurrentUrl'),
      getPageSource: remix('getPageSource'),
      getTitle: remix('getTitle')
    });
  },

  specs: ['lib/test/e2e/**/*.spec.js'],

  // Options to be passed to Jasmine-node.
  framework: 'mocha',

  mochaOpts: {
    ui: 'bdd',
    reporter: 'list',
    timeout: 20000
  }
};

if (process.env.SNAP_CI) {
  exports.config.chromeDriver = '/usr/local/bin/chromedriver';
  exports.config.capabilities.build = 'Build #' + process.env.SNAP_PIPELINE_COUNTER;
  exports.config.capabilities.testName = 'Mimosa Aurelia Skeleton Tests';
}