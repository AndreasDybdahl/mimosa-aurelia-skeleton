"use strict";

System.register(["chai"], function (_export) {
  var chai, _prototypeProperties, _classCallCheck, expect, RouterStub;

  return {
    setters: [function (_chai) {
      chai = _chai["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      expect = _export("expect", chai.expect);
      RouterStub = _export("RouterStub", (function () {
        function RouterStub() {
          _classCallCheck(this, RouterStub);
        }

        _prototypeProperties(RouterStub, null, {
          configure: {
            value: function configure(handler) {
              this.routes = [];
              this.steps = [];
              handler(this);
            },
            writable: true,
            configurable: true
          },
          map: {
            value: function map(routes) {
              this.routes = this.routes.concat(routes);
            },
            writable: true,
            configurable: true
          },
          addPipelineStep: {
            value: function addPipelineStep(name, step) {
              this.steps.push({ name: name, step: step });
            },
            writable: true,
            configurable: true
          }
        });

        return RouterStub;
      })());
    }
  };
});
//# sourceMappingURL=utils.js.map
