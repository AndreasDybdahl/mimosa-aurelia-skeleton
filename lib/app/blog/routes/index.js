"use strict";

System.register(["aurelia-router", "../services/blog", "./index.html!"], function (_export) {
  var Router, BlogService, view, _prototypeProperties, _classCallCheck, Index;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_servicesBlog) {
      BlogService = _servicesBlog.BlogService;
    }, function (_indexHtml) {
      view = _indexHtml["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Index = _export("Index", (function () {
        function Index(router, blogService) {
          _classCallCheck(this, Index);

          this.router = router;
          this.blogService = blogService;

          router.configure(function (config) {
            config.map([{ route: ["", ":page"], moduleId: "./list", nav: true, title: "Latest Posts" }, { route: ":year/:month/:date/:slug", moduleId: "./post", auth: true }, { route: ["tags/:tag", "tags/:tag/:page"], moduleId: "./tag" }, { route: "login", moduleId: "./login", title: "Login" }, { route: "admin", moduleId: "./admin", title: "Admin", auth: "admin" }]);
          });
        }

        _prototypeProperties(Index, {
          inject: {
            value: function inject() {
              return [Router, BlogService];
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

        return Index;
      })());
    }
  };
});
//# sourceMappingURL=index.js.map
