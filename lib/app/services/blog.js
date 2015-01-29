System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, PAGE_SIZE, posts, BlogService;


  function unique(arr) {
    var obj = {};
    return arr.filter(function (itm) {
      if (obj.hasOwnProperty(itm)) return false;

      return obj[itm] = true;
    });
  }

  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      PAGE_SIZE = 5;
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
      BlogService = (function () {
        function BlogService() {}

        _prototypeProperties(BlogService, null, {
          getLatest: {
            value: function getLatest() {
              var page = arguments[0] === undefined ? 1 : arguments[0];
              return new Promise(function (resolve) {
                var pages = Math.ceil(posts.length - 1 / PAGE_SIZE);
                if (pages === 0) pages = 1;

                if (page > pages) throw new Error("There does not exist " + page + " pages");

                var result = posts.slice((page - 1) * PAGE_SIZE, PAGE_SIZE);
                resolve({
                  posts: result,
                  page: page,
                  total: pages
                });
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getTags: {
            value: function getTags() {
              return new Promise(function (resolve) {
                var tags = Array.prototype.concat.apply([], posts.map(function (p) {
                  return p.tags;
                }));
                tags = unique(tags);
                resolve(tags);
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return BlogService;
      })();
      _export("BlogService", BlogService);
    }
  };
});
//# sourceMappingURL=blog.js.map
