"use strict";

System.register(["html"], function (_export) {
  var html, showdown, dir, _require, path, mpath, interpolationRegex;

  _export("translate", translate);

  function translate(load) {
    return showdown.then(function (Showdown) {
      var converter = new Showdown.converter();
      var source = load.source.replace(interpolationRegex, "$​{$1}");

      load.source = "<template>" + converter.makeHtml(source) + "</template>";

      return Promise.resolve(html(load)).then(function (code) {
        code += "\n  require('md/rt').postfix(module.exports);";
        return code;
      });
    });
  }
  return {
    setters: [function (_html) {
      html = _html.translate;
    }],
    execute: function () {
      showdown = undefined;

      if (typeof window !== "undefined") {
        showdown = System["import"]("showdown");
      } else {
        dir = process.cwd();
        _require = process.mainModule.require;
        path = _require("path");
        mpath = path.join(dir, "node_modules", "showdown");

        showdown = Promise.resolve(_require(mpath));
      }

      interpolationRegex = /\${(.*?)}/g;
    }
  };
});
//# sourceMappingURL=md.js.map
