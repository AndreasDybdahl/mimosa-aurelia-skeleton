"use strict";

System.register(["aurelia-router"], function (_export) {
  var Redirect, _prototypeProperties, _classCallCheck, SIMULATE_LATENCY, user, User, AuthenticationService, AuthorizeStep;

  function returnData(fn) {
    if (SIMULATE_LATENCY) {
      return new Promise(function (resolve) {
        return setTimeout(function () {
          return resolve();
        }, 500);
      }).then(function () {
        return new Promise(fn);
      });
    } else {
      return new Promise(fn);
    }
  }

  return {
    setters: [function (_aureliaRouter) {
      Redirect = _aureliaRouter.Redirect;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      SIMULATE_LATENCY = true;
      user = null;

      User = function User(name) {
        _classCallCheck(this, User);

        this.name = name;
      };

      AuthenticationService = _export("AuthenticationService", (function () {
        function AuthenticationService() {
          _classCallCheck(this, AuthenticationService);
        }

        _prototypeProperties(AuthenticationService, null, {
          user: {
            get: function () {
              return user;
            },
            configurable: true
          },
          checkLogin: {
            value: function checkLogin() {
              // If ther is no local user, then there is no point in running
              // a request to the server.
              if (user === null) {
                return Promise.resolve(null);
              } // In a real world environment, where a user is signed in to a
              // server, using cookies or something similar, that login might
              // expire, without the client beeing notified.
              // This here is to simulate a request to the server,
              // to ensure we're still logged in.
              return returnData(function (resolve) {
                return resolve(true);
              }).then(function (status) {
                // true here could indicate we're still logged in,
                // whereas false would be not logged in.
                if (status === false) {
                  // if the login has expired on the server, delete the
                  // one on the client as well.
                  user = null;
                }

                // Return the user as a convenience, so we can just
                // use the value without having to reacquire it from
                // the service.
                return user;
              });
            },
            writable: true,
            configurable: true
          },
          hasGroups: {
            value: function hasGroups(username, groups) {
              // Check if user has admin rights.
              return returnData(function (resolve) {
                return resolve(true);
              });
            },
            writable: true,
            configurable: true
          },
          login: {
            value: function login(username, password) {
              // this is a demo, accept anyone with a password of "test"
              // in reality, there would also be more checks to prevent
              // sending off multiple login requests at once
              if (password === "test") {
                return returnData(function (resolve) {
                  user = new User(username);
                  resolve(true);
                });
              } else {
                return returnData(function (resolve) {
                  return resolve(false);
                });
              }
            },
            writable: true,
            configurable: true
          },
          logout: {
            value: function logout() {
              if (user === null) {
                // If there is no user, return success.
                return Promise.resolve(true);
              }

              return returnData(function (resolve) {
                user = null;
                resolve(true);
              });
            },
            writable: true,
            configurable: true
          }
        });

        return AuthenticationService;
      })());
      AuthorizeStep = _export("AuthorizeStep", (function () {
        function AuthorizeStep(authenticationService) {
          _classCallCheck(this, AuthorizeStep);

          this.auth = authenticationService;
        }

        _prototypeProperties(AuthorizeStep, {
          inject: {
            value: function inject() {
              return [AuthenticationService];
            },
            writable: true,
            configurable: true
          }
        }, {
          run: {
            value: function run(routingContext, next) {
              var _this = this;

              // Check for the routes "auth" key.
              var authRoutes = routingContext.nextInstructions.filter(function (i) {
                return i.config.auth;
              });
              if (authRoutes.length === 0) {
                return next();
              } // If any of the auth-keys are a string,
              // treat this as a group name.
              var groups = authRoutes.map(function (r) {
                return r.config.auth;
              }).filter(function (a) {
                return typeof a === "string";
              });

              // Check that the user is logged in.
              return this.auth.checkLogin().then(function (user) {
                if (user === null) return false;

                if (groups.length === 0) return true;

                return _this.auth.hasGroups(user.name, groups);
              }).then(function (authorized) {
                if (authorized) return next();

                return next.cancel(new Redirect("/blog/login"));
              });
            },
            writable: true,
            configurable: true
          }
        });

        return AuthorizeStep;
      })());
    }
  };
});
//# sourceMappingURL=auth.js.map
