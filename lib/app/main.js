"use strict";

System.register(["BootFunk", "font-awesome/css/font-awesome.css!", "style/site.css!", "aurelia-framework", "aurelia-logging-console", "aurelia-bootstrapper"], function (_export) {
  var LogManager, ConsoleAppender, bootstrap;
  return {
    setters: [function (_BootFunk) {}, function (_fontAwesomeCssFontAwesomeCss) {}, function (_styleSiteCss) {}, function (_aureliaFramework) {
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
        aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator();

        aurelia.start().then(function (a) {
          return a.setRoot("app/app", document.body);
        });
      });
    }
  };
});
//# sourceMappingURL=main.js.map
