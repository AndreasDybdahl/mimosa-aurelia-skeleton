"use strict";

System.register([], function (_export) {
  var _prototypeProperties, _classCallCheck, SortValueConverter;

  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      SortValueConverter = _export("SortValueConverter", (function () {
        function SortValueConverter() {
          _classCallCheck(this, SortValueConverter);
        }

        _prototypeProperties(SortValueConverter, null, {
          toView: {
            value: function toView(array, propertyName, direction) {
              var factor = direction === "ascending" ? 1 : -1;
              return array.slice(0).sort(function (a, b) {
                return (a[propertyName] - b[propertyName]) * factor;
              });
            },
            writable: true,
            configurable: true
          }
        });

        return SortValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=sort.js.map
