System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, ClassesBehaviour;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ClassesBehaviour = _export("ClassesBehaviour", (function () {
        function ClassesBehaviour(element) {
          _classCallCheck(this, ClassesBehaviour);

          this.element = element;
        }

        _prototypeProperties(ClassesBehaviour, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("classes").withProperty("value", "valueChanged", "classes");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          valueChanged: {
            value: function valueChanged(value) {
              var classString = Object.keys(value).map(function (k) {
                return value[k] ? k : null;
              }).filter(function (k) {
                return k !== null;
              }).join(" ");

              this.element.className = classString;
            },
            writable: true,
            configurable: true
          }
        });

        return ClassesBehaviour;
      })());
    }
  };
});
//# sourceMappingURL=classes.js.map
