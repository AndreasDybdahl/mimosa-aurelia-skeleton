"use strict";

System.register(["BootFunk", "font-awesome/css/font-awesome.css!", "style/site.css!", "regenerator-babel/runtime", "aurelia-framework", "aurelia-logging-console", "aurelia-bootstrapper"], function (_export) {
  var LogManager, ConsoleAppender, bootstrap;

  function preventActionlessFormSubmit() {
    document.body.addEventListener("submit", function (evt) {
      var target = evt.target;
      var action = target.action;
      if (target.tagName.toLowerCase() === "form" && !action) evt.preventDefault();
    });
  }
  return {
    setters: [function (_BootFunk) {}, function (_fontAwesomeCssFontAwesomeCss) {}, function (_styleSiteCss) {}, function (_regeneratorBabelRuntime) {}, function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_aureliaLoggingConsole) {
      ConsoleAppender = _aureliaLoggingConsole.ConsoleAppender;
    }, function (_aureliaBootstrapper) {
      bootstrap = _aureliaBootstrapper.bootstrap;
    }],
    execute: function () {

      LogManager.addAppender(new ConsoleAppender());
      LogManager.setLevel(LogManager.levels.debug);

      bootstrap(function (aurelia) {
        preventActionlessFormSubmit();

        aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator();

        aurelia.start().then(function (a) {
          return a.setRoot("app/app", document.body);
        });
      });
    }
  };
});

//import 'highlightjs/styles/monokai_sublime.css!';

// Regenerator runtime
//# sourceMappingURL=main.js.map
