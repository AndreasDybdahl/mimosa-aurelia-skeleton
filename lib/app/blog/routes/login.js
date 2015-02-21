"use strict";

System.register(["../services/auth", "aurelia-router", "./login.html!"], function (_export) {
  var AuthenticationService, AppRouter, view, _prototypeProperties, _classCallCheck, Login;

  return {
    setters: [function (_servicesAuth) {
      AuthenticationService = _servicesAuth.AuthenticationService;
    }, function (_aureliaRouter) {
      AppRouter = _aureliaRouter.AppRouter;
    }, function (_loginHtml) {
      view = _loginHtml["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Login = _export("Login", (function () {
        function Login(authService) {
          _classCallCheck(this, Login);

          this.authService = authService;
          this.running = false;
        }

        _prototypeProperties(Login, {
          inject: {
            value: function inject() {
              return [AuthenticationService];
            },
            writable: true,
            configurable: true
          }
        }, {
          canActivate: {
            value: function canActivate() {
              return this.authService.user === null;
            },
            writable: true,
            configurable: true
          },
          activate: {
            value: function activate(params, query, route) {
              if (query.redirectTo) {
                this.redirectTo = query.redirectTo;
              } else {
                this.redirectTo = "/";
              }
            },
            writable: true,
            configurable: true
          },
          getViewStrategy: {
            value: function getViewStrategy() {
              return view;
            },
            writable: true,
            configurable: true
          },
          login: {
            value: function login() {
              var _this = this;

              if (this.running) {
                return;
              }this.running = true;
              this.authService.login(this.username.value, this.password.value).then(function (success) {
                _this.running = false;
                if (success) {
                  _this.router.navigate(_this.redirectTo);
                } else {}
              }, function (e) {
                _this.running = false;
                return Promise.reject(e);
              });
            },
            writable: true,
            configurable: true
          }
        });

        return Login;
      })());
    }
  };
});

// TODO: Display error
//# sourceMappingURL=login.js.map
