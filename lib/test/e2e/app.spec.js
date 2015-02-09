"use strict";

describe("aurelia blog app", function () {
  beforeEach(function () {
    browser.get("http://localhost:9000");
  });

  it("should redirect to #blog", function () {
    return browser.getCurrentUrl().then(function (url) {
      expect(url).to.match(/#blog$/);
    });
  });

  it("should set the title", function () {
    return browser.getTitle().then(function (title) {
      console.log("title: " + title);
      expect(title).to.equal("Latest Posts | Blog | Application Title");
    });
  });
});
//# sourceMappingURL=app.spec.js.map
