System.register(["./utils"], function (_export) {
  "use strict";

  var domready, matches, toggleClass, toggles;
  _export("registerToggle", registerToggle);

  _export("toggleClassHandler", toggleClassHandler);

  function registerToggle(name, handler) {
    toggles[name] = handler;
  }

  function toggleClassHandler(className) {
    return function doToggle(evt) {
      var target = this.getAttribute("data-target");
      if (target !== null) {
        var elms = document.querySelectorAll(target);
        for (var i = 0, l = elms.length; i < l; i++) {
          toggleClass(elms[i], className);
        }
        evt.preventDefault();
        if (this.blur) {
          this.blur();
        }
      }
    };
  }

  return {
    setters: [function (_utils) {
      domready = _utils.domready;
      matches = _utils.matches;
      toggleClass = _utils.toggleClass;
    }],
    execute: function () {
      toggles = {};
      domready(function () {
        document.addEventListener("click", function (evt) {
          var match = matches(evt, "[data-toggle]");
          if (match !== null) {
            var value = match.getAttribute("data-toggle");
            if (value !== null && toggles[value]) {
              return toggles[value].apply(match, [evt]);
            }
          }
        });
      });

      registerToggle("collapse", toggleClassHandler("collapse"));
    }
  };
});
//# sourceMappingURL=toggle.js.map
