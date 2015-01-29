System.register(["bootstrap/css/bootstrap.css!", "style/site.css!", "./bundle", "aurelia-framework", "aurelia-logging-console", "aurelia-bootstrapper"], function (_export) {
  "use strict";

  var LogManager, ConsoleAppender, bootstrap;
  return {
    setters: [function (_bootstrapCssBootstrapCss) {}, function (_styleSiteCss) {}, function (_bundle) {}, function (_aureliaFramework) {
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
          return a.setRoot("lib/app/routes/app", document.body);
        });
      });
    }
  };
});
//# sourceMappingURL=main.js.map
