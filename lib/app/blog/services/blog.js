System.register(["aurelia-framework", "moment"], function (_export) {
  "use strict";

  var Metadata, moment, _prototypeProperties, _classCallCheck, PAGE_SIZE, SIMULATE_LATENCY, posts, BlogService;


  function unique(arr) {
    var obj = {};
    return arr.filter(function (itm) {
      if (obj.hasOwnProperty(itm)) return false;

      return obj[itm] = true;
    });
  }

  function paginate(list, page, pageSize) {
    var pages = Math.ceil(list.length - 1 / pageSize);
    if (pages === 0) pages = 1;

    if (page > pages) throw new Error("There does not exist " + page + " pages");

    var result = list.slice((page - 1) * pageSize, pageSize);
    return {
      posts: result,
      page: page,
      total: pages
    };
  }

  function returnData(fn) {
    if (SIMULATE_LATENCY) {
      return new Promise(function (resolve) {
        return setTimeout(function () {
          return resolve();
        }, 500);
      }).then(function () {
        return new Promise(fn);
      });
    } else {
      return new Promise(fn);
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      Metadata = _aureliaFramework.Metadata;
    }, function (_moment) {
      moment = _moment["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      PAGE_SIZE = 5;
      SIMULATE_LATENCY = true;
      posts = [{
        id: 2,
        title: "This is another test post",
        slug: "this-is-another-test-post",
        date: "2015-01-29T22:26:08.549Z",
        tags: ["test", "funky"],
        content: "\nThis post is a lot more funky than the other.\n\nIt has stuff that the other does not.\n\n* See\n* Here\n* Is\n* A\n* List\n\n#### And a heading\n    "
      }, {
        id: 1,
        title: "This is a test post",
        slug: "this-is-a-test-post",
        date: "2015-01-28T22:26:08.549Z",
        tags: ["test"],
        content: "\nSo I write a little *markdown*, and it just **works**!\n    "
      }];
      BlogService = _export("BlogService", (function () {
        function BlogService() {
          _classCallCheck(this, BlogService);
        }

        _prototypeProperties(BlogService, {
          metadata: {
            value: function metadata() {
              return Metadata.singleton();
            },
            writable: true,
            configurable: true
          }
        }, {
          getLatest: {
            value: function getLatest() {
              var page = arguments[0] === undefined ? 1 : arguments[0];
              return returnData(function (resolve) {
                resolve(paginate(posts, page, PAGE_SIZE));
              });
            },
            writable: true,
            configurable: true
          },
          getTags: {
            value: function getTags() {
              return returnData(function (resolve) {
                var tags = Array.prototype.concat.apply([], posts.map(function (p) {
                  return p.tags;
                }));
                tags = unique(tags);
                resolve(tags);
              });
            },
            writable: true,
            configurable: true
          },
          getPost: {
            value: function getPost(year, month, date, slug) {
              return returnData(function (resolve) {
                var dateMatch = "" + year + "-" + month + "-" + date;
                var post = posts.filter(function (p) {
                  var date = moment(p.date).format("YYYY-MM-DD");
                  return date === dateMatch && p.slug === slug;
                });

                if (post.length === 0) return resolve(null);

                resolve(post[0]);
              });
            },
            writable: true,
            configurable: true
          },
          getPostsForTag: {
            value: function getPostsForTag(tag) {
              var page = arguments[1] === undefined ? 1 : arguments[1];
              return returnData(function (resolve) {
                var tagPosts = posts.filter(function (p) {
                  return p.tags.indexOf(tag) > -1;
                });
                resolve(paginate(tagPosts, page, PAGE_SIZE));
              });
            },
            writable: true,
            configurable: true
          }
        });

        return BlogService;
      })());
    }
  };
});
//# sourceMappingURL=blog.js.map
