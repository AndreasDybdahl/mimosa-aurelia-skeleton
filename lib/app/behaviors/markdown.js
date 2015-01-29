System.register(["aurelia-framework", "showdown"], function (_export) {
  "use strict";

  var Behavior, Showdown, _prototypeProperties, MarkdownBehaviour;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_showdown) {
      Showdown = _showdown["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      MarkdownBehaviour = (function () {
        function MarkdownBehaviour(element) {
          this.element = element;
          this.converter = new Showdown.converter();
        }

        _prototypeProperties(MarkdownBehaviour, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("markdown").withProperty("value", "valueChanged", "markdown");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          valueChanged: {
            value: function valueChanged(value) {
              this.element.innerHTML = this.converter.makeHtml(value.split(/\r\n|\n/g).map(function (l) {
                return l.trim();
              }).join("\n"));
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return MarkdownBehaviour;
      })();
      _export("MarkdownBehaviour", MarkdownBehaviour);
    }
  };
});
//# sourceMappingURL=markdown.js.map
