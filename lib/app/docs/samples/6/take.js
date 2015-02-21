"use strict";

System.register([], function (_export) {
  var _prototypeProperties, _classCallCheck, TakeValueConverter;

  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      TakeValueConverter = _export("TakeValueConverter", (function () {
        function TakeValueConverter() {
          _classCallCheck(this, TakeValueConverter);
        }

        _prototypeProperties(TakeValueConverter, null, {
          toView: {
            value: function toView(array, count) {
              return array.slice(0, count);
            },
            writable: true,
            configurable: true
          }
        });

        return TakeValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=take.js.map
