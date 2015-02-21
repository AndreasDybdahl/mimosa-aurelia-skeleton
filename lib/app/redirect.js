"use strict";

System.register(["aurelia-router"], function (_export) {
  var Redirect, _prototypeProperties, _classCallCheck, RedirectRoute;

  return {
    setters: [function (_aureliaRouter) {
      Redirect = _aureliaRouter.Redirect;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      RedirectRoute = _export("RedirectRoute", (function () {
        function RedirectRoute() {
          _classCallCheck(this, RedirectRoute);
        }

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
