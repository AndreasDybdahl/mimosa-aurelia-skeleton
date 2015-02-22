"use strict";

System.register(["./index.md!"], function (_export) {
  var view, _prototypeProperties, _classCallCheck, Doc;

  return {
    setters: [function (_indexMd) {
      view = _indexMd["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Doc = _export("Doc", (function () {
        function Doc() {
          _classCallCheck(this, Doc);
        }

        _prototypeProperties(Doc, null, {
          getViewStrategy: {
            value: function getViewStrategy() {
              return view;
            },
            writable: true,
            configurable: true
          }
        });

        return Doc;
      })());
    }
  };
});
//# sourceMappingURL=index.js.map
