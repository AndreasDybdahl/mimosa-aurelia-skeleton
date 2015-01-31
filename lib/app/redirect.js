System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Redirect, _prototypeProperties, RedirectRoute;
  return {
    setters: [function (_aureliaRouter) {
      Redirect = _aureliaRouter.Redirect;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      RedirectRoute = _export("RedirectRoute", (function () {
        function RedirectRoute() {}

        _prototypeProperties(RedirectRoute, null, {
          canActivate: {
            value: function canActivate(params, _, route) {
              return new Redirect(route.redirect);
            },
            writable: true,
            configurable: true
          }
        });

        return RedirectRoute;
      })());
    }
  };
});
//# sourceMappingURL=redirect.js.map
