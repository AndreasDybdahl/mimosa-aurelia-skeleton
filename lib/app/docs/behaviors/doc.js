"use strict";

System.register(["aurelia-framework", "aurelia-templating", "app/resource-pool/services/resource-pool", "showdown"], function (_export) {
  var Behavior, Container, ViewCompiler, ViewResources, ViewSlot, ResourcePool, Showdown, _prototypeProperties, _classCallCheck, hasTemplateElement, interpolationRegex, DocBehaviour;

  function empty(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
      Container = _aureliaFramework.Container;
    }, function (_aureliaTemplating) {
      ViewCompiler = _aureliaTemplating.ViewCompiler;
      ViewResources = _aureliaTemplating.ViewResources;
      ViewSlot = _aureliaTemplating.ViewSlot;
    }, function (_appResourcePoolServicesResourcePool) {
      ResourcePool = _appResourcePoolServicesResourcePool.ResourcePool;
    }, function (_showdown) {
      Showdown = _showdown["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      hasTemplateElement = "content" in document.createElement("template");
      interpolationRegex = /\${(.*?)}/g;
      DocBehaviour = _export("DocBehaviour", (function () {
        function DocBehaviour(element, resourcePool, viewCompiler, viewResources, viewSlot, container) {
          _classCallCheck(this, DocBehaviour);

          this.converter = new Showdown.converter();
          this.element = element;
          this.resourcePool = resourcePool;
          this.viewCompiler = viewCompiler;
          this.viewResources = viewResources;
          this.viewSlot = viewSlot;
          this.container = container;

          var markdown = this.element.innerHTML.replace(interpolationRegex, "$​{$1}");
          var html = this.converter.makeHtml(markdown.split(/\r\n|\n/g).map(function (l) {
            return l.trim();
          }).join("\n"));

          var template = document.createElement("template");
          template.innerHTML = html;
          if (!hasTemplateElement) {
            template.content = document.createDocumentFragment();
            while (template.firstChild) {
              template.content.appendChild(template.firstChild);
            }
          }

          for (var _iterator = template.content.querySelectorAll("p > sample:first-child:last-child")[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
            var sample = _step.value;

            var p = sample.parentNode;
            var _parent = p.parentNode;
            _parent.replaceChild(sample, p);
          }

          this.template = template;
          empty(this.element);
        }

        _prototypeProperties(DocBehaviour, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("doc").withProperty("title").skipContentProcessing().noView();
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element, ResourcePool, ViewCompiler, ViewResources, ViewSlot, Container];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind(ctx) {
              var _this = this;

              if (!this.title) {
                throw new Error("docs cannot have empty titles");
              }

              var pool = this.pool = "" + this.viewResources.viewUrl + "#" + this.title;

              this.view = this.resourcePool.get(pool, "view", function () {
                var viewFactory = _this.resourcePool.get(pool, "viewFactory", function () {
                  return _this.viewCompiler.compile(_this.template, _this.viewResources);
                });
                console.log("Creating pooled view: " + pool);
                try {
                  return viewFactory.create(_this.container, null, { suppressBind: true });
                } finally {
                  _this.resourcePool.free(pool, "viewFactory", viewFactory);
                }
              });
              this.view.bind(ctx);
              this.viewSlot.add(this.view);
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              this.viewSlot.remove(this.view);
              this.view.unbind();
              this.resourcePool.free(this.pool, "view", this.view);
              this.view = null;
            },
            writable: true,
            configurable: true
          }
        });

        return DocBehaviour;
      })());
    }
  };
});
//# sourceMappingURL=doc.js.map
