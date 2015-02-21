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
          _classCallCheck(this, NetWorth);
        }

        _prototypeProperties(NetWorth, null, {
          activate: {
            value: function activate() {
              var _this = this;

              this.update();
              this.timer = setInterval(function () {
                return _this.update();
              }, 1000);
            },
            writable: true,
            configurable: true
          },
          deactivate: {
            value: function deactivate() {
              clearInterval(this.timer);
              this.timer = 0;
            },
            writable: true,
            configurable: true
          },
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
//# sourceMappingURL=viewmodel.js.map
