System.register(["aurelia-framework", "aurelia-templating", "../services/resource-pool"], function (_export) {
  "use strict";

  var Behavior, Container, ViewCompiler, ViewResources, ViewSlot, ResourcePool, _prototypeProperties, _classCallCheck, hasTemplateElement, ResourcePooled;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
      Container = _aureliaFramework.Container;
    }, function (_aureliaTemplating) {
      ViewCompiler = _aureliaTemplating.ViewCompiler;
      ViewResources = _aureliaTemplating.ViewResources;
      ViewSlot = _aureliaTemplating.ViewSlot;
    }, function (_servicesResourcePool) {
      ResourcePool = _servicesResourcePool.ResourcePool;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      hasTemplateElement = "content" in document.createElement("template");
      ResourcePooled = _export("ResourcePooled", (function () {
        function ResourcePooled(element, resourcePool, viewCompiler, viewResources, viewSlot, container) {
          _classCallCheck(this, ResourcePooled);

          this.element = element;
          this.resourcePool = resourcePool;
          this.viewCompiler = viewCompiler;
          this.viewResources = viewResources;
          this.viewSlot = viewSlot;
          this.container = container;

          var template = document.createElement("template");
          if (hasTemplateElement) {
            template.content = document.createDocumentFragment();
          }

          while (element.firstChild) {
            template.content.appendChild(element.firstChild);
          }

          this.template = template;
        }

        _prototypeProperties(ResourcePooled, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("resource-pooled").withProperty("pool").skipContentProcessing().noView();
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
            value: function bind(context) {
              var _this = this;
              if (!this.pool) {
                this.pool = this.viewResources.viewUrl;
              }

              this.view = this.resourcePool.get(this.pool, "view", function () {
                var viewFactory = _this.resourcePool.get(_this.pool, "viewFactory", function () {
                  return _this.viewCompiler.compile(_this.template, _this.viewResources);
                });
                console.log("Creating pooled view: " + _this.pool);
                try {
                  return viewFactory.create(_this.container, null, { suppressBind: true });
                } finally {
                  _this.resourcePool.free(_this.pool, "viewFactory", viewFactory);
                }
              });
              this.view.bind(context);
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

        return ResourcePooled;
      })());
    }
  };
});
//# sourceMappingURL=resource-pooled.js.map
