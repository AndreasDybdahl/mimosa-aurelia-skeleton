"use strict";

System.register(["../services/blog", "./list", "moment", "./tag.html!"], function (_export) {
  var BlogService, List, moment, view, _prototypeProperties, _inherits, _classCallCheck, Tag;

  return {
    setters: [function (_servicesBlog) {
      BlogService = _servicesBlog.BlogService;
    }, function (_list) {
      List = _list.List;
    }, function (_moment) {
      moment = _moment["default"];
    }, function (_tagHtml) {
      view = _tagHtml["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Tag = _export("Tag", (function (List) {
        function Tag(blogService) {
          _classCallCheck(this, Tag);

          this.blogService = blogService;
        }

        _inherits(Tag, List);

        _prototypeProperties(Tag, {
          inject: {
            value: function inject() {
              return [BlogService];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate(params, qs, config) {
              var _this = this;

              var tag = params.tag;

              this.tag = tag;
              return this.blogService.getPostsForTag(tag).then(function (_ref) {
                var posts = _ref.posts;
                var total = _ref.total;
                var page = _ref.page;

                _this.posts = posts;
                _this.total = total;
                _this.page = page;

                config.navModel.title = "Tag: " + tag;
              });
            },
            writable: true,
            configurable: true
          },
          getViewStrategy: {
            value: function getViewStrategy() {
              return view;
            },
            writable: true,
            configurable: true
          }
        });

        return Tag;
      })(List));
    }
  };
});
//# sourceMappingURL=tag.js.map
