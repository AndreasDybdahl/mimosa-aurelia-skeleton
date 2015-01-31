System.register(["chai"], function (_export) {
  "use strict";

  var chai, _prototypeProperties, expect, RouterStub;
  return {
    setters: [function (_chai) {
      chai = _chai["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      expect = _export("expect", chai.expect);
      RouterStub = _export("RouterStub", (function () {
        function RouterStub() {}

        _prototypeProperties(RouterStub, null, {
          configure: {
            value: function configure(handler) {
              this.routes = [];
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
          }
        });

        return RouterStub;
      })());
    }
  };
});
//# sourceMappingURL=utils.js.map
