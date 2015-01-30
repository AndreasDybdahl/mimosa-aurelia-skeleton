System.register(["aurelia-router", "../../services/blog"], function (_export) {
  "use strict";

  var Router, BlogService, _prototypeProperties, Index;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_servicesBlog) {
      BlogService = _servicesBlog.BlogService;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Index = (function () {
        function Index(router, blogService) {
          this.router = router;
          this.blogService = blogService;

          router.configure(function (config) {
            config.map([{ route: ["", "page/:page"], moduleId: "./list", nav: true, title: "Latest Posts" }, { route: ":year/:month/:date/:slug", moduleId: "./post" }, { route: "tags/:tag", moduleId: "./tag" }]);
          });
        }

        _prototypeProperties(Index, {
          inject: {
            value: function inject() {
              return [Router, BlogService];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Index;
      })();
      _export("Index", Index);
    }
  };
});
//# sourceMappingURL=index.js.map
