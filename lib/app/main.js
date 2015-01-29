System.register(["bootstrap/css/bootstrap.css!", "style/site.css!", "aurelia-templating-binding", "aurelia-templating-router", "aurelia-templating-resources", "aurelia-event-aggregator", "aurelia-router", "aurelia-history", "aurelia-history-browser", "moment", "showdown", "aurelia-framework", "aurelia-logging-console", "aurelia-bootstrapper"], function (_export) {
  "use strict";

  var LogManager, ConsoleAppender, bootstrap;
  return {
    setters: [function (_bootstrapCssBootstrapCss) {}, function (_styleSiteCss) {}, function (_aureliaTemplatingBinding) {}, function (_aureliaTemplatingRouter) {}, function (_aureliaTemplatingResources) {}, function (_aureliaEventAggregator) {}, function (_aureliaRouter) {}, function (_aureliaHistory) {}, function (_aureliaHistoryBrowser) {}, function (_moment) {}, function (_showdown) {}, function (_aureliaFramework) {
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

/* The following imports are only to include the frameworks when bundeling */
/* End of bundle only imports */
//# sourceMappingURL=main.js.map
