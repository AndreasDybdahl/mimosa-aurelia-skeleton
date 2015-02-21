"use strict";

System.register(["aurelia-router", "./blog/services/auth", "./app.html!"], function (_export) {
  var Router, AuthorizeStep, view, _prototypeProperties, _classCallCheck, App;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_blogServicesAuth) {
      AuthorizeStep = _blogServicesAuth.AuthorizeStep;
    }, function (_appHtml) {
      view = _appHtml["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router) {
          _classCallCheck(this, App);

          this.router = router;
          this.router.configure(function (config) {
            config.title = "Application Title";
            config.addPipelineStep("authorize", AuthorizeStep);
            config.map([{ route: "blog", moduleId: "./blog/routes/index", nav: true, title: "Blog" }, { route: "docs", moduleId: "./docs/routes/index", nav: true, title: "Docs" }, { route: "", moduleId: "./redirect", redirect: "/blog" }]);
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
