System.register(["aurelia-router", "./app.html!"], function (_export) {
  "use strict";

  var Router, view, _prototypeProperties, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_appHtml) {
      view = _appHtml["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      App = _export("App", (function () {
        function App(router) {
          this.router = router;
          this.router.configure(function (config) {
            config.title = "Application Title";
            config.map([{ route: "blog", moduleId: "./blog/index", nav: true, title: "Blog" }, { route: "", moduleId: "./redirect", redirect: "/blog" }]);
          });
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [Router];
            },
            writable: true,
            configurable: true
          }
        }, {
          getViewStrategy: {
            value: function getViewStrategy() {
              return view;
            },
            writable: true,
            configurable: true
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=app.js.map
