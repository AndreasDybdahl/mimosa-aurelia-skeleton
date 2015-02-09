System.register([], function (_export) {
  "use strict";

  var _toArray, elementMatches, hasClass, addClass, removeClass, toggleClass;
  _export("domready", domready);

  _export("matches", matches);

  /*!
   * contentloaded.js
   *
   * Author: Diego Perini (diego.perini at gmail.com)
   * Summary: cross-browser wrapper for DOMContentLoaded
   * Updated: 20101020
   * License: MIT
   * Version: 1.2
   *
   * URL:
   * http://javascript.nwbox.com/ContentLoaded/
   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
   *
   */

  // @win window reference
  // @fn function reference
  function contentLoaded(win, fn) {
    var done = false,
        top = true,
        doc = win.document,
        root = doc.documentElement,
        modern = doc.addEventListener,
        add = modern ? "addEventListener" : "attachEvent",
        rem = modern ? "removeEventListener" : "detachEvent",
        pre = modern ? "" : "on",
        init = function (e) {
      if (e.type == "readystatechange" && doc.readyState != "complete") return;
      (e.type == "load" ? win : doc)[rem](pre + e.type, init, false);
      if (!done && (done = true)) fn.call(win, e.type || e);
    },
        poll = function () {
      try {
        root.doScroll("left");
      } catch (e) {
        setTimeout(poll, 50);return;
      }
      init("poll");
    };

    if (doc.readyState == "complete") fn.call(win, "lazy");else {
      if (!modern && root.doScroll) {
        try {
          top = !win.frameElement;
        } catch (e) {}
        if (top) poll();
      }
      doc[add](pre + "DOMContentLoaded", init, false);
      doc[add](pre + "readystatechange", init, false);
      win[add](pre + "load", init, false);
    }
  }

  function domready(callback) {
    contentLoaded(window, callback);
  }

  function matches(evt, selector) {
    var el = evt.target;
    while (el && el instanceof Element) {
      if (elementMatches(el, selector)) {
        return el;
      }

      el = el.parentNode;
    }

    return null;
  }

  return {
    setters: [],
    execute: function () {
      _toArray = function (arr) { return Array.isArray(arr) ? arr : Array.from(arr); };

      if (Element.prototype.matches) elementMatches = function (el, str) {
        return el.matches(str);
      };else if (Element.prototype.webkitMatchesSelector) elementMatches = function (el, str) {
        return el.webkitMatchesSelector(str);
      };else if (Element.prototype.mozMatchesSelector) elementMatches = function (el, str) {
        return el.mozMatchesSelector(str);
      };else if (Element.prototype.msMatchesSelector) elementMatches = function (el, str) {
        return el.msMatchesSelector(str);
      };else elementMatches = function (el, str) {
        var matches = (el.document || el.ownerDocument).querySelectorAll(str);
        var i = 0;

        while (matches[i] && matches[i] !== el) {
          i++;
        }

        return matches[i] ? true : false;
      };

      hasClass = _export("hasClass", undefined);
      addClass = _export("addClass", undefined);
      removeClass = _export("removeClass", undefined);
      toggleClass = _export("toggleClass", undefined);


      if ("classList" in document.createElement("_") && false) {
        _export("hasClass", hasClass = function (el, n) {
          return el.classList.contains(n);
        });
        _export("addClass", addClass = function (el, n) {
          return el.classList.add(n);
        });
        _export("removeClass", removeClass = function (el, n) {
          return el.classList.remove(n);
        });
        _export("toggleClass", toggleClass = function (el, n) {
          return el.classList.toggle(n);
        });
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
          _export("hasClass", hasClass = process(function (classes, className) {
            return classes.indexOf(className) > -1;
          }));
          _export("addClass", addClass = process(function (classes, className) {
            return union(classes, className);
          }));
          _export("removeClass", removeClass = process(function (classes, className) {
            return remove(classes, className);
          }));
          _export("toggleClass", toggleClass = process(function (classes, className) {
            return classes.indexOf(className) > -1 ? remove(classes, className) : union(classes, className);
          }));
        })();
      }
    }
  };
});
//# sourceMappingURL=utils.js.map
