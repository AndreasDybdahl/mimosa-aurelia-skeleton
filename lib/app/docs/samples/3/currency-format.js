"use strict";

System.register(["numeral"], function (_export) {
  var numeral, _prototypeProperties, _classCallCheck, CurrencyFormatValueConverter;

  return {
    setters: [function (_numeral) {
      numeral = _numeral["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      CurrencyFormatValueConverter = _export("CurrencyFormatValueConverter", (function () {
        function CurrencyFormatValueConverter() {
          _classCallCheck(this, CurrencyFormatValueConverter);
        }

        _prototypeProperties(CurrencyFormatValueConverter, null, {
          toView: {
            value: function toView(value) {
              return numeral(value).format("($0,0.00)");
            },
            writable: true,
            configurable: true
          }
        });

        return CurrencyFormatValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=currency-format.js.map
