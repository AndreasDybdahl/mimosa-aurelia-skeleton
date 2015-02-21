"use strict";

System.register([], function (_export) {
  var _prototypeProperties, _classCallCheck, NetWorth;

  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NetWorth = _export("NetWorth", (function () {
        function NetWorth() {
          var _this = this;

          _classCallCheck(this, NetWorth);

          this.update();
          setInterval(function () {
            return _this.update();
          }, 1000);
        }

        _prototypeProperties(NetWorth, null, {
          update: {
            value: function update() {
              this.currentDate = new Date();
              this.netWorth = Math.random() * 1000000000;
            },
            writable: true,
            configurable: true
          }
        });

        return NetWorth;
      })());
    }
  };
});
//# sourceMappingURL=view-model.js.map
