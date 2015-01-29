System.register(["../../services/blog", "moment"], function (_export) {
  "use strict";

  var BlogService, moment, _prototypeProperties, Index;
  return {
    setters: [function (_servicesBlog) {
      BlogService = _servicesBlog.BlogService;
    }, function (_moment) {
      moment = _moment["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Index = (function () {
        function Index(blogService) {
          this.blogService = blogService;
        }

        _prototypeProperties(Index, {
          inject: {
            value: function inject() {
              return [BlogService];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              var _this = this;
              return this.blogService.getLatest().then(function (result) {
                _this.posts = result.posts;
                _this.total = result.total;
                _this.page = result.page;
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          url: {
            value: function url(post) {
              var date = moment(post.date);
              return "#/blog/" + date.format("YYYY/MM/DD") + "/" + post.slug + "/";
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          date: {
            value: function date(post) {
              return moment(post.date).format("MMM D");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Index;
      })();
      _export("Index", Index);
    }
  };
});
//# sourceMappingURL=list.js.map
