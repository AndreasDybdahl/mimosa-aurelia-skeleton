System.register(["bootstrap", "../style/site.css!", "aurelia-framework", "aurelia-logging-console"], function (_export) {
  "use strict";

  var LogManager, ConsoleAppender;
  _export("configure", configure);

  function configure(aurelia) {
    aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator();

    aurelia.start().then(function (a) {
      return a.setRoot("lib/app/app", document.body);
    });
  }
  return {
    setters: [function (_bootstrap) {}, function (_styleSiteCss) {}, function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_aureliaLoggingConsole) {
      ConsoleAppender = _aureliaLoggingConsole.ConsoleAppender;
    }],
    execute: function () {
      LogManager.addAppender(new ConsoleAppender());
      LogManager.setLevel(LogManager.levels.debug);
    }
  };
});
//# sourceMappingURL=main.js.map