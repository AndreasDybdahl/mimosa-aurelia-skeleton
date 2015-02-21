"use strict";

System.register(["numeral"], function (_export) {
  var numeral, _prototypeProperties, _classCallCheck, NumberFormatValueConverter;

  return {
    setters: [function (_numeral) {
      numeral = _numeral["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NumberFormatValueConverter = _export("NumberFormatValueConverter", (function () {
        function NumberFormatValueConverter() {
          _classCallCheck(this, NumberFormatValueConverter);
        }

        _prototypeProperties(NumberFormatValueConverter, null, {
          toView: {
            value: function toView(value, format) {
              return numeral(value).format(format);
            },
            writable: true,
            configurable: true
          }
        });

        return NumberFormatValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=number-format.js.map
