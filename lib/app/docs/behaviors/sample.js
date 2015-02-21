"use strict";

System.register(["aurelia-framework", "aurelia-templating", "app/resource-pool/services/resource-pool", "prism", "srcref.json!"], function (_export) {
  var Behavior, Container, ViewCompiler, ViewResources, ViewSlot, ResourcePool, Prism, srcref, _prototypeProperties, _classCallCheck, hasTemplateElement, SampleBehavior;

  function empty(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  function resolvepath(path) {
    for (var prefix in System.paths) {
      var test = prefix.replace("*", "");
      if (test.length === 0) continue;

      var matches = path.substring(0, test.length) === test;
      if (matches) {
        return System.paths[prefix].replace("*.js", path.substring(test.length));
      }
    }

    return path;
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
    }, function (_prism) {
      Prism = _prism["default"];
    }, function (_srcrefJson) {
      srcref = _srcrefJson["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      System.config({
        paths: {
          "src:*": "" + srcref.src + "/*.js",
          "preview:*": "" + srcref.view + "/*.js"
        }
      });

      hasTemplateElement = "content" in document.createElement("template");
      SampleBehavior = _export("SampleBehavior", (function () {
        function SampleBehavior(element, resourcePool, viewCompiler, viewResources, viewSlot, container) {
          _classCallCheck(this, SampleBehavior);

          this.element = element;
          this.resourcePool = resourcePool;
          this.viewCompiler = viewCompiler;
          this.viewResources = viewResources;
          this.viewSlot = viewSlot;
          this.container = container;
          this.files = [{ id: "./viewmodel", ext: ".js", name: "viewmodel", model: true }, { id: "./template", ext: ".html", name: "template", view: true }];

          empty(this.element);
        }

        _prototypeProperties(SampleBehavior, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("sample").withProperty("dir").skipContentProcessing().noView();
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

              var viewUrl, dir, factory, view;
              return regeneratorRuntime.async(function bind$(context$2$0) {
                while (1) switch (context$2$0.prev = context$2$0.next) {
                  case 0:
                    if (!_this.viewSlot.children.length) {
                      context$2$0.next = 2;
                      break;
                    }

                    return context$2$0.abrupt("return");

                  case 2:
                    viewUrl = _this.viewResources.viewUrl;

                    if (!_this.dir) {
                      context$2$0.next = 9;
                      break;
                    }

                    context$2$0.next = 6;
                    return System.normalize(_this.dir + "/index", viewUrl);

                  case 6:
                    context$2$0.t1 = context$2$0.sent;
                    context$2$0.next = 10;
                    break;

                  case 9:
                    context$2$0.t1 = viewUrl;

                  case 10:
                    dir = context$2$0.t1;
                    context$2$0.next = 13;
                    return _this.resourcePool.getAndFree(dir, "sample", function () {
                      console.log("loading files");
                      return Promise.all(_this.files.map(function callee$3$0(_ref) {
                        var id = _ref.id;
                        var ext = _ref.ext;
                        var name = _ref.name;
                        var model = _ref.model;
                        var view = _ref.view;
                        var mod, src, url, lang, highlight;
                        return regeneratorRuntime.async(function callee$3$0$(context$4$0) {
                          while (1) switch (context$4$0.prev = context$4$0.next) {
                            case 0:
                              model = !!model;
                              view = !!view;

                              context$4$0.next = 4;
                              return System.normalize(id, dir);

                            case 4:
                              mod = context$4$0.sent;
                              context$4$0.next = 7;
                              return System["import"]("src:" + mod + "" + ext + "!text");

                            case 7:
                              src = context$4$0.sent;
                              url = resolvepath("preview:" + mod + "" + ext);
                              lang = undefined;
                              context$4$0.t0 = ext;
                              context$4$0.next = context$4$0.t0 === ".js" ? 13 : context$4$0.t0 === ".html" ? 15 : 17;
                              break;

                            case 13:
                              lang = Prism.languages.javascript;return context$4$0.abrupt("break", 18);

                            case 15:
                              lang = Prism.languages.markup;return context$4$0.abrupt("break", 18);

                            case 17:
                              throw new Error("Unknown extension: " + ext);

                            case 18:
                              highlight = Prism.highlight(src, lang);
                              return context$4$0.abrupt("return", { name: name, mod: mod, ext: ext, src: src, highlight: highlight, url: url, model: model, view: view });

                            case 20:
                            case "end":
                              return context$4$0.stop();
                          }
                        }, null, _this);
                      })).then(function (files) {
                        // Create HTML string
                        var html = files.map(function (file) {
                          return "\n            <div class=\"col-md-12\">\n              <a href=\"" + file.url + "\" target=\"_blank\">" + file.name + "</a>:\n              <pre class=\"language-" + file.ext.substring(1) + "\"><code>" + file.highlight + "</code></pre>\n            </div>\n          ";
                        }).join("");

                        var viewmodel = files.filter(function (f) {
                          return f.model;
                        })[0].mod;
                        var template = resolvepath(files.filter(function (f) {
                          return f.view;
                        })[0].mod);
                        var compose = document.createElement("compose");
                        compose.setAttribute("view-model", viewmodel);
                        compose.setAttribute("view", template + ".html");

                        var wrap = document.createElement("div");
                        wrap.className = "row preview";

                        var innerWrap = document.createElement("div");
                        innerWrap.className = "col-md-24";
                        wrap.appendChild(innerWrap);

                        var resultText = document.createElement("strong");
                        resultText.innerText = "result:";
                        innerWrap.appendChild(resultText);

                        var well = document.createElement("div");
                        well.className = "well";
                        innerWrap.appendChild(well);
                        well.appendChild(compose);

                        var fragment = document.createDocumentFragment();
                        fragment.appendChild(wrap);
                        var viewFactory = _this.viewCompiler.compile(fragment, _this.viewResources);
                        var div = document.createElement("div");
                        div.innerHTML = html;
                        div.className = "row";
                        fragment.insertBefore(div, wrap);
                        return viewFactory;
                      });
                    });

                  case 13:
                    factory = context$2$0.sent;
                    view = factory.create(_this.container, ctx);

                    _this.viewSlot.add(view);

                  case 16:
                  case "end":
                    return context$2$0.stop();
                }
              }, null, this);
            },
            writable: true,
            configurable: true
          }
        });

        return SampleBehavior;
      })());
    }
  };
});
//# sourceMappingURL=sample.js.map
