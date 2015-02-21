"use strict";

System.register(["aurelia-http-client"], function (_export) {
  var HttpClient, _prototypeProperties, _classCallCheck, AureliaRepositories;

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AureliaRepositories = _export("AureliaRepositories", (function () {
        function AureliaRepositories() {
          _classCallCheck(this, AureliaRepositories);

          this.repos = [];
        }

        _prototypeProperties(AureliaRepositories, null, {
          activate: {
            value: function activate() {
              var _this = this;

              return new HttpClient().get("https://api.github.com/orgs/aurelia/repos").then(function (response) {
                return _this.repos = response.content;
              });
            },
            writable: true,
            configurable: true
          }
        });

        return AureliaRepositories;
      })());
    }
  };
});
//# sourceMappingURL=view-model.js.map
