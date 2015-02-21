"use strict";

System.register(["./date-format", "./number-format"], function (_export) {
  var DateFormatValueConverter, NumberFormatValueConverter;

  _export("install", install);

  function install(aurelia) {
    // register the value converters globally.
    aurelia.withResources(DateFormatValueConverter, NumberFormatValueConverter);
  }
  return {
    setters: [function (_dateFormat) {
      DateFormatValueConverter = _dateFormat.DateFormatValueConverter;
    }, function (_numberFormat) {
      NumberFormatValueConverter = _numberFormat.NumberFormatValueConverter;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=index.js.map
