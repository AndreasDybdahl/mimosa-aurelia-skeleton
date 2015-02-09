System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _slicedToArray, _toArray, _prototypeProperties, _classCallCheck, hasClass, addClass, removeClass, toggleClass, ClassesBehaviour;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } };

      _toArray = function (arr) { return Array.isArray(arr) ? arr : Array.from(arr); };

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      if ("classList" in document.createElement("_") && false) {
        hasClass = function (el, n) {
          return el.classList.contains(n);
        };
        addClass = function (el, n) {
          return el.classList.add(n);
        };
        removeClass = function (el, n) {
          return el.classList.remove(n);
        };
        toggleClass = function (el, n) {
          return el.classList.toggle(n);
        };
      } else {
        (function () {
          var getClassList = function (el) {
            return el.className.toString().split(" ");
          };
          var setClassList = function (el, list) {
            return el.className = list.join(" ");
          };
          var process = function (p) {
            return function (el) {
              for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }

              var classes = getClassList(el);
              var result = p.apply(undefined, [classes].concat(_toArray(args)));
              if (Array.isArray(result)) {
                setClassList(el, result);
              } else {
                return result;
              }
            };
          };
          var union = function (arr, itm) {
            if (arr.indexOf(itm) === -1) {
              arr.push(itm);
            }
            return arr;
          };
          var remove = function (arr, itm) {
            var index = arr.indexOf(itm);
            if (index !== -1) {
              arr.splice(index, 1);
            }
            return arr;
          };
          hasClass = process(function (classes, className) {
            return classes.indexOf(className) > -1;
          });
          addClass = process(function (classes, className) {
            return union(classes, className);
          });
          removeClass = process(function (classes, className) {
            return remove(classes, className);
          });
          toggleClass = process(function (classes, className) {
            return classes.indexOf(className) > -1 ? remove(classes, className) : union(classes, className);
          });
        })();
      }

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
              var classes = Object.keys(value).map(function (k) {
                return [k, value[k] ? true : false];
              });

              for (var _iterator = classes[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
                var _step$value = _slicedToArray(_step.value, 2);

                var _name = _step$value[0];
                var active = _step$value[1];
                if (active) {
                  addClass(this.element, _name);
                } else {
                  removeClass(this.element, _name);
                }
              }
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
