"use strict";

System.register([], function (_export) {
  var _prototypeProperties, _classCallCheck, RgbToHexValueConverter;

  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      RgbToHexValueConverter = _export("RgbToHexValueConverter", (function () {
        function RgbToHexValueConverter() {
          _classCallCheck(this, RgbToHexValueConverter);
        }

        _prototypeProperties(RgbToHexValueConverter, null, {
          toView: {
            value: function toView(rgb) {
              return "#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
            },
            writable: true,
            configurable: true
          },
          fromView: {
            value: function fromView(hex) {
              var exp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                  result = exp.exec(hex);
              return {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
              };
            },
            writable: true,
            configurable: true
          }
        });

        return RgbToHexValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=rgb-to-hex.js.map
