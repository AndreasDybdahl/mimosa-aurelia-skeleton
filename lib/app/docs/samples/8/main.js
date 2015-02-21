"use strict";

System.register([], function (_export) {
  _export("configure", configure);

  function configure(aurelia) {
    aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator().plugin("./resources/index"); // install our app's resources

    aurelia.start().then(function (a) {
      return a.setRoot("app", document.body);
    });
  }
  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=main.js.map
