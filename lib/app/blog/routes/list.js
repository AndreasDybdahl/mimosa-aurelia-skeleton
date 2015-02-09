System.register(["../services/blog", "moment", "./list.html!"], function (_export) {
  "use strict";

  var BlogService, moment, view, _prototypeProperties, _classCallCheck, List;
  return {
    setters: [function (_servicesBlog) {
      BlogService = _servicesBlog.BlogService;
    }, function (_moment) {
      moment = _moment["default"];
    }, function (_listHtml) {
      view = _listHtml["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      List = _export("List", (function () {
        function List(blogService) {
          _classCallCheck(this, List);

          this.blogService = blogService;
        }

        _prototypeProperties(List, {
          inject: {
            value: function inject() {
              return [BlogService];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              var _this = this;
              return this.blogService.getLatest().then(function (_ref) {
                var posts = _ref.posts;
                var total = _ref.total;
                var page = _ref.page;
                _this.posts = posts;
                _this.total = total;
                _this.page = page;
                _this.md = "*this is markdown!*";
              });
            },
            writable: true,
            configurable: true
          },
          url: {
            value: function url(post) {
              var date = moment(post.date);
              return "#/blog/" + date.format("YYYY/MM/DD") + "/" + post.slug + "/";
            },
            writable: true,
            configurable: true
          },
          tagUrl: {
            value: function tagUrl(tag) {
              return "#/blog/tags/" + tag + "/";
            },
            writable: true,
            configurable: true
          },
          date: {
            value: function date(post) {
              return moment(post.date).format("MMM D");
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

        return List;
      })());
    }
  };
});
//# sourceMappingURL=list.js.map
