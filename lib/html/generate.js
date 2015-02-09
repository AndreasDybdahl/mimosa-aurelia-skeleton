System.register(["aurelia-logging", "aurelia-templating", "aurelia-metadata", "aurelia-path"], function (_export) {
  "use strict";

  var LogManager, ViewStrategy, ViewResources, CustomElement, AttachedBehavior, TemplateController, Metadata, ResourceType, Origin, relativeToFile, _prototypeProperties, _inherits, _classCallCheck, hasTemplateElement, logger, InlineViewStrategy;
  _export("default", generate);

  function generate(path, html, deps) {
    var doc = document.createDocumentFragment();
    var div = document.createElement("div");
    div.innerHTML = html;
    while (div.firstChild) {
      doc.appendChild(div.firstChild);
    }

    if (!hasTemplateElement) {
      HTMLTemplateElement.bootstrap(doc);
    }

    var template = doc.querySelector("template");

    if (!template) {
      throw new Error("There was no template element found");
    }

    return new InlineViewStrategy(path, template, deps);
  }return {
    setters: [function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }, function (_aureliaTemplating) {
      ViewStrategy = _aureliaTemplating.ViewStrategy;
      ViewResources = _aureliaTemplating.ViewResources;
      CustomElement = _aureliaTemplating.CustomElement;
      AttachedBehavior = _aureliaTemplating.AttachedBehavior;
      TemplateController = _aureliaTemplating.TemplateController;
    }, function (_aureliaMetadata) {
      Metadata = _aureliaMetadata.Metadata;
      ResourceType = _aureliaMetadata.ResourceType;
      Origin = _aureliaMetadata.Origin;
    }, function (_aureliaPath) {
      relativeToFile = _aureliaPath.relativeToFile;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      hasTemplateElement = "content" in document.createElement("template");
      logger = LogManager.getLogger("systemjs-html-import");
      InlineViewStrategy = (function (ViewStrategy) {
        function InlineViewStrategy(path, template, deps) {
          _classCallCheck(this, InlineViewStrategy);

          this.path = path;
          this.template = template;
          this.deps = deps;
        }

        _inherits(InlineViewStrategy, ViewStrategy);

        _prototypeProperties(InlineViewStrategy, null, {
          loadViewFactory: {
            value: function loadViewFactory(viewEngine, options) {
              var _this = this;
              var existing = viewEngine.importedViews[this.path];
              if (existing) {
                return Promise.resolve(existing);
              }

              return this.loadResources(viewEngine).then(function (resources) {
                var existing = viewEngine.importedViews[_this.path];
                if (existing) {
                  return Promise.resolve(existing);
                }

                var factory = viewEngine.viewCompiler.compile(_this.template, resources, options);
                viewEngine.importedViews[_this.path] = factory;
                return factory;
              });
            },
            writable: true,
            configurable: true
          },
          loadResources: {
            value: function loadResources(_ref) {
              var _this = this;
              var appResources = _ref.appResources;
              var resourceCoordinator = _ref.resourceCoordinator;
              var i, l;
              var registry = new ViewResources(appResources, this.path),
                  dxImportElements = this.template.content.querySelectorAll("import");

              if (dxImportElements.length === 0) {
                return Promise.resolve(registry);
              }

              var importIds = new Array(dxImportElements.length);
              var names = new Array(dxImportElements.length);

              for (i = 0, l = dxImportElements.length; i < l; ++i) {
                var current = dxImportElements[i];
                var src = current.getAttribute("from");

                if (!src) {
                  throw new Error("Import element in " + this.path + " has no \"from\" attribute.");
                }

                importIds[i] = src;
                names[i] = current.getAttribute("as");

                if (current.parentNode) {
                  current.parentNode.removeChild(current);
                }
              }

              importIds = importIds.map(function (x) {
                return relativeToFile(x, _this.path);
              });
              logger.debug("importing resources for " + this.path, importIds);

              return resourceCoordinator.importResourcesFromModuleIds(importIds).then(function (toRegister) {
                for (i = 0, l = toRegister.length; i < l; ++i) {
                  toRegister[i].register(registry, names[i]);
                }

                return registry;
              });
            },
            writable: true,
            configurable: true
          }
        });

        return InlineViewStrategy;
      })(ViewStrategy);
    }
  };
});
//# sourceMappingURL=generate.js.map
