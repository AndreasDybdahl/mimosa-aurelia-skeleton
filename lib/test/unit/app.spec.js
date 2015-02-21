"use strict";

System.register(["app/app", "./utils"], function (_export) {
  var App, expect, RouterStub;
  return {
    setters: [function (_appApp) {
      App = _appApp.App;
    }, function (_utils) {
      expect = _utils.expect;
      RouterStub = _utils.RouterStub;
    }],
    execute: function () {

      describe("the App module", function () {
        var sut = undefined;

        beforeEach(function () {
          sut = new App(new RouterStub());
        });

        it("contains a router property", function () {
          expect(sut).to.have.property("router");
        });

        it("configures the routers title", function () {
          expect(sut.router.title).to.equal("Application Title");
        });

        it("configures an authorize step", function () {
          expect(sut.router.steps.length).to.equal(1);
          expect(sut.router.steps[0].name).to.equal("authorize");
        });
      });
    }
  };
});
//# sourceMappingURL=app.spec.js.map
