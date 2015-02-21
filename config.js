System.config({
  "paths": {
    "*": "*.js",
    "app/*": "lib/app/*.js",
    "style/*": "lib/style/*.js",
    "plugin-html/*": "lib/html/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "bundles": {
    "lib/app": [
      "npm:process@0.10.0/browser",
      "npm:process@0.10.0",
      "github:jspm/nodelibs-process@0.1.1/index",
      "github:jspm/nodelibs-process@0.1.1",
      "npm:core-js@0.4.10/index",
      "npm:core-js@0.4.10",
      "github:aurelia/metadata@0.3.1/system/origin",
      "github:aurelia/metadata@0.3.1/system/resource-type",
      "github:aurelia/metadata@0.3.1/system/metadata",
      "github:aurelia/loader@0.3.3/system/index",
      "github:aurelia/path@0.4.3/system/index",
      "github:aurelia/logging@0.2.3/system/index",
      "github:aurelia/dependency-injection@0.4.3/system/metadata",
      "github:aurelia/dependency-injection@0.4.3/system/util",
      "github:aurelia/templating@0.8.12/system/util",
      "github:aurelia/binding@0.3.5/system/value-converter",
      "github:aurelia/binding@0.3.5/system/event-manager",
      "github:aurelia/task-queue@0.2.3/system/index",
      "github:aurelia/binding@0.3.5/system/array-change-records",
      "github:aurelia/binding@0.3.5/system/map-change-records",
      "github:aurelia/binding@0.3.5/system/dirty-checking",
      "github:aurelia/binding@0.3.5/system/property-observation",
      "github:aurelia/binding@0.3.5/system/binding-modes",
      "github:aurelia/binding@0.3.5/system/lexer",
      "github:aurelia/binding@0.3.5/system/path-observer",
      "github:aurelia/binding@0.3.5/system/composite-observer",
      "github:aurelia/binding@0.3.5/system/binding-expression",
      "github:aurelia/binding@0.3.5/system/listener-expression",
      "github:aurelia/binding@0.3.5/system/name-expression",
      "github:aurelia/binding@0.3.5/system/call-expression",
      "github:aurelia/templating@0.8.12/system/behavior-instance",
      "github:aurelia/templating@0.8.12/system/children",
      "github:aurelia/templating@0.8.12/system/content-selector",
      "github:aurelia/templating@0.8.12/system/resource-registry",
      "github:aurelia/templating@0.8.12/system/view",
      "github:aurelia/templating@0.8.12/system/view-slot",
      "github:aurelia/templating@0.8.12/system/binding-language",
      "github:aurelia/templating@0.8.12/system/view-strategy",
      "github:aurelia/templating@0.8.12/system/element-config",
      "github:aurelia/templating@0.8.12/system/template-controller",
      "github:aurelia/templating@0.8.12/system/resource-coordinator",
      "github:aurelia/templating@0.8.12/system/composition-engine",
      "github:aurelia/framework@0.8.6/system/plugins",
      "github:aurelia/logging-console@0.2.2/system/index",
      "github:aurelia/templating-binding@0.8.5/system/syntax-interpreter",
      "github:aurelia/route-recognizer@0.2.2/system/dsl",
      "github:aurelia/router@0.5.6/system/navigation-commands",
      "github:aurelia/router@0.5.6/system/navigation-instruction",
      "github:aurelia/router@0.5.6/system/route-filters",
      "github:aurelia/router@0.5.6/system/util",
      "github:aurelia/history@0.2.2/system/index",
      "github:aurelia/router@0.5.6/system/pipeline",
      "github:aurelia/router@0.5.6/system/model-binding",
      "github:aurelia/router@0.5.6/system/route-loading",
      "github:aurelia/router@0.5.6/system/activation",
      "github:aurelia/templating-router@0.9.2/system/route-loader",
      "github:aurelia/templating-router@0.9.2/system/router-view",
      "github:aurelia/templating-resources@0.8.8/system/compose",
      "github:aurelia/templating-resources@0.8.8/system/if",
      "github:aurelia/templating-resources@0.8.8/system/with",
      "github:aurelia/templating-resources@0.8.8/system/repeat",
      "github:aurelia/templating-resources@0.8.8/system/show",
      "github:aurelia/templating-resources@0.8.8/system/selected-item",
      "github:aurelia/templating-resources@0.8.8/system/global-behavior",
      "github:aurelia/templating-resources@0.8.8/system/inner-html",
      "github:aurelia/event-aggregator@0.2.2/system/index",
      "github:aurelia/history-browser@0.2.3/system/index",
      "github:moment/moment@2.9.0/moment",
      "github:showdownjs/showdown@0.3.4/src/showdown",
      "app/blog/services/auth",
      "plugin-html/generate",
      "app/css-classes/behaviors/classes",
      "app/redirect",
      "app/markdown/behaviors/markdown",
      "app/css-classes/bundle",
      "app/resource-pool/services/resource-pool",
      "app/resource-pool/behaviors/resource-pooled",
      "app/blog/services/blog",
      "app/blog/routes/index.html!plugin-html/html",
      "app/blog/routes/list.html!plugin-html/html",
      "app/blog/routes/post.html!plugin-html/html",
      "app/blog/routes/tag.html!plugin-html/html",
      "app/blog/routes/login.html!plugin-html/html",
      "app/docs/behaviors/doc",
      "github:LeaVerou/prism@gh-pages/prism",
      "srcref.json!github:systemjs/plugin-json@0.1.0",
      "app/docs/routes/index.html!plugin-html/html",
      "app/docs/samples/1/viewmodel",
      "github:aurelia/metadata@0.3.1/system/index",
      "github:aurelia/loader@0.3.3",
      "github:aurelia/path@0.4.3",
      "github:aurelia/logging@0.2.3",
      "github:aurelia/dependency-injection@0.4.3/system/container",
      "github:aurelia/task-queue@0.2.3",
      "github:aurelia/binding@0.3.5/system/array-observation",
      "github:aurelia/binding@0.3.5/system/map-observation",
      "github:aurelia/binding@0.3.5/system/ast",
      "github:aurelia/templating@0.8.12/system/behaviors",
      "github:aurelia/templating@0.8.12/system/view-factory",
      "github:aurelia/logging-console@0.2.2",
      "github:aurelia/templating-binding@0.8.5/system/binding-language",
      "github:aurelia/route-recognizer@0.2.2/system/index",
      "github:aurelia/router@0.5.6/system/navigation-plan",
      "github:aurelia/router@0.5.6/system/router-configuration",
      "github:aurelia/history@0.2.2",
      "github:aurelia/router@0.5.6/system/pipeline-provider",
      "github:aurelia/templating-resources@0.8.8/system/index",
      "github:aurelia/event-aggregator@0.2.2",
      "github:aurelia/history-browser@0.2.3",
      "github:moment/moment@2.9.0",
      "github:showdownjs/showdown@0.3.4",
      "app/app.html!plugin-html/html",
      "app/markdown/bundle",
      "app/resource-pool/bundle",
      "app/blog/routes/index",
      "app/blog/routes/list",
      "app/blog/routes/post",
      "app/blog/routes/tag",
      "app/blog/routes/login",
      "github:LeaVerou/prism@gh-pages",
      "app/docs/routes/index",
      "github:aurelia/metadata@0.3.1",
      "github:aurelia/dependency-injection@0.4.3/system/index",
      "github:aurelia/binding@0.3.5/system/observer-locator",
      "github:aurelia/binding@0.3.5/system/parser",
      "github:aurelia/templating@0.8.12/system/attached-behavior",
      "github:aurelia/templating@0.8.12/system/view-compiler",
      "github:aurelia/templating-binding@0.8.5/system/index",
      "github:aurelia/route-recognizer@0.2.2",
      "github:aurelia/router@0.5.6/system/navigation-context",
      "github:aurelia/router@0.5.6/system/app-router",
      "github:aurelia/templating-resources@0.8.8",
      "app/app",
      "app/blog/bundle",
      "app/docs/behaviors/sample",
      "github:aurelia/loader-default@0.4.1/system/index",
      "github:aurelia/dependency-injection@0.4.3",
      "github:aurelia/binding@0.3.5/system/index",
      "github:aurelia/templating@0.8.12/system/view-engine",
      "github:aurelia/templating-binding@0.8.5",
      "github:aurelia/router@0.5.6/system/router",
      "app/docs/bundle",
      "github:aurelia/loader-default@0.4.1",
      "github:aurelia/binding@0.3.5",
      "github:aurelia/templating@0.8.12/system/custom-element",
      "github:aurelia/router@0.5.6/system/index",
      "github:aurelia/templating@0.8.12/system/property",
      "github:aurelia/router@0.5.6",
      "github:aurelia/templating@0.8.12/system/index",
      "github:aurelia/templating-router@0.9.2/system/index",
      "github:aurelia/templating@0.8.12",
      "github:aurelia/templating-router@0.9.2",
      "github:aurelia/framework@0.8.6/system/aurelia",
      "github:aurelia/framework@0.8.6/system/index",
      "github:aurelia/framework@0.8.6",
      "github:aurelia/bootstrapper@0.9.3/system/index",
      "github:aurelia/bootstrapper@0.9.3",
      "app/bundle",
      "github:YoloDev/BootFunk@1.0.0-build.28/css/bootfunk.css!github:systemjs/plugin-css@0.1.6",
      "github:YoloDev/BootFunk@1.0.0-build.28/js/utils",
      "npm:font-awesome@4.3.0/css/font-awesome.css!github:systemjs/plugin-css@0.1.6",
      "github:LeaVerou/prism@gh-pages/themes/prism-okaidia.css!github:systemjs/plugin-css@0.1.6",
      "style/site.css!github:systemjs/plugin-css@0.1.6",
      "npm:regenerator-babel@0.8.10-2/runtime",
      "github:YoloDev/BootFunk@1.0.0-build.28/js/toggle",
      "github:YoloDev/BootFunk@1.0.0-build.28/js/bootfunk",
      "github:YoloDev/BootFunk@1.0.0-build.28/index",
      "github:YoloDev/BootFunk@1.0.0-build.28",
      "app/main"
    ]
  }
});

System.config({
  "map": {
    "BootFunk": "github:YoloDev/BootFunk@1.0.0-build.28",
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.9.3",
    "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.2.2",
    "aurelia-framework": "github:aurelia/framework@0.8.6",
    "aurelia-history": "github:aurelia/history@0.2.2",
    "aurelia-history-browser": "github:aurelia/history-browser@0.2.3",
    "aurelia-loader-default": "github:aurelia/loader-default@0.4.1",
    "aurelia-logging": "github:aurelia/logging@0.2.3",
    "aurelia-logging-console": "github:aurelia/logging-console@0.2.2",
    "aurelia-metadata": "github:aurelia/metadata@0.3.1",
    "aurelia-path": "github:aurelia/path@0.4.3",
    "aurelia-router": "github:aurelia/router@0.5.6",
    "aurelia-templating": "github:aurelia/templating@0.8.12",
    "aurelia-templating-binding": "github:aurelia/templating-binding@0.8.5",
    "aurelia-templating-resources": "github:aurelia/templating-resources@0.8.8",
    "aurelia-templating-router": "github:aurelia/templating-router@0.9.2",
    "chai": "github:Alxandr/chai@1.10.1",
    "core-js": "npm:core-js@0.4.10",
    "css": "github:systemjs/plugin-css@0.1.6",
    "font-awesome": "npm:font-awesome@4.3.0",
    "html": "plugin-html/html",
    "html/generate": "plugin-html/generate",
    "json": "github:systemjs/plugin-json@0.1.0",
    "moment": "github:moment/moment@2.9.0",
    "prism": "github:LeaVerou/prism@gh-pages",
    "regenerator-babel": "npm:regenerator-babel@0.8.10-2",
    "showdown": "github:showdownjs/showdown@0.3.4",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:YoloDev/BootFunk@1.0.0-build.28": {
      "css": "github:systemjs/plugin-css@0.1.6"
    },
    "github:aurelia/binding@0.3.5": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.3",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.3"
    },
    "github:aurelia/bootstrapper@0.9.3": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.2.2",
      "aurelia-framework": "github:aurelia/framework@0.8.6",
      "aurelia-history": "github:aurelia/history@0.2.2",
      "aurelia-history-browser": "github:aurelia/history-browser@0.2.3",
      "aurelia-loader-default": "github:aurelia/loader-default@0.4.1",
      "aurelia-logging-console": "github:aurelia/logging-console@0.2.2",
      "aurelia-router": "github:aurelia/router@0.5.6",
      "aurelia-templating": "github:aurelia/templating@0.8.12",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.8.5",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.8.8",
      "aurelia-templating-router": "github:aurelia/templating-router@0.9.2"
    },
    "github:aurelia/dependency-injection@0.4.3": {
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/framework@0.8.6": {
      "aurelia-binding": "github:aurelia/binding@0.3.5",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.3",
      "aurelia-loader": "github:aurelia/loader@0.3.3",
      "aurelia-logging": "github:aurelia/logging@0.2.3",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.3",
      "aurelia-templating": "github:aurelia/templating@0.8.12"
    },
    "github:aurelia/history-browser@0.2.3": {
      "aurelia-history": "github:aurelia/history@0.2.2",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/loader-default@0.4.1": {
      "aurelia-loader": "github:aurelia/loader@0.3.3",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-path": "github:aurelia/path@0.4.3"
    },
    "github:aurelia/loader@0.3.3": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.2",
      "core-js": "npm:core-js@0.4.10",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.5.5"
    },
    "github:aurelia/router@0.5.6": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.3",
      "aurelia-history": "github:aurelia/history@0.2.2",
      "aurelia-path": "github:aurelia/path@0.4.3",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.2.2",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/templating-binding@0.8.5": {
      "aurelia-binding": "github:aurelia/binding@0.3.5",
      "aurelia-templating": "github:aurelia/templating@0.8.12"
    },
    "github:aurelia/templating-resources@0.8.8": {
      "aurelia-binding": "github:aurelia/binding@0.3.5",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.3",
      "aurelia-logging": "github:aurelia/logging@0.2.3",
      "aurelia-templating": "github:aurelia/templating@0.8.12",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/templating-router@0.9.2": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.3",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-path": "github:aurelia/path@0.4.3",
      "aurelia-router": "github:aurelia/router@0.5.6",
      "aurelia-templating": "github:aurelia/templating@0.8.12"
    },
    "github:aurelia/templating@0.8.12": {
      "aurelia-binding": "github:aurelia/binding@0.3.5",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.3",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.2",
      "aurelia-loader": "github:aurelia/loader@0.3.3",
      "aurelia-logging": "github:aurelia/logging@0.2.3",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-path": "github:aurelia/path@0.4.3",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.3",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.0.3"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.9.12"
    },
    "github:jspm/nodelibs-events@0.1.0": {
      "events-browserify": "npm:events-browserify@0.0.1"
    },
    "github:jspm/nodelibs-http@1.7.0": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.0"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:systemjs/plugin-css@0.1.6": {
      "clean-css": "npm:clean-css@3.0.10",
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:amdefine@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:asn1.js-rfc3280@1.0.0": {
      "asn1.js": "npm:asn1.js@1.0.3"
    },
    "npm:asn1.js@1.0.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:ast-types@0.6.14": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:browserify-aes@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-rsa@1.1.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:browserify-sign@2.8.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "browserify-rsa": "npm:browserify-rsa@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@1.0.1",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@2.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer@3.0.3": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.4",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:clean-css@3.0.10": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.5.1",
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.43",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.5.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:commoner@0.10.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.5.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "glob": "npm:glob@4.2.2",
      "graceful-fs": "npm:graceful-fs@3.0.5",
      "iconv-lite": "npm:iconv-lite@0.4.7",
      "install": "npm:install@0.1.8",
      "mkdirp": "npm:mkdirp@0.5.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "q": "npm:q@1.1.2",
      "recast": "npm:recast@0.9.18",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@0.4.10": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@1.0.3": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@1.0.1"
    },
    "npm:create-hash@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.0",
      "sha.js": "npm:sha.js@2.3.6",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:create-hmac@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.9.12": {
      "browserify-aes": "npm:browserify-aes@1.0.0",
      "browserify-sign": "npm:browserify-sign@2.8.0",
      "create-ecdh": "npm:create-ecdh@1.0.3",
      "create-hash": "npm:create-hash@1.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "diffie-hellman": "npm:diffie-hellman@3.0.1",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2-compat": "npm:pbkdf2-compat@3.0.2",
      "public-encrypt": "npm:public-encrypt@1.1.2",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:diffie-hellman@3.0.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@1.1.5",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@1.0.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:esprima-fb@10001.1.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:events-browserify@0.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:glob@4.2.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@1.0.0",
      "once": "npm:once@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@3.0.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:hash.js@1.0.2": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.0"
    },
    "npm:iconv-lite@0.4.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:install@0.1.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:miller-rabin@1.1.5": {
      "bn.js": "npm:bn.js@1.3.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:minimatch@1.0.0": {
      "lru-cache": "npm:lru-cache@2.5.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sigmund": "npm:sigmund@1.0.0"
    },
    "npm:mkdirp@0.5.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:once@1.3.1": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@2.0.0": {
      "asn1.js": "npm:asn1.js@1.0.3",
      "asn1.js-rfc3280": "npm:asn1.js-rfc3280@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pemstrip": "npm:pemstrip@0.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:pbkdf2-compat@3.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:public-encrypt@1.1.2": {
      "bn.js": "npm:bn.js@1.3.0",
      "browserify-rsa": "npm:browserify-rsa@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@2.0.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:q@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:recast@0.9.18": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.6.14",
      "esprima-fb": "npm:esprima-fb@10001.1.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.43"
    },
    "npm:regenerator-babel@0.8.10-2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.6.14",
      "commoner": "npm:commoner@0.10.1",
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ripemd160@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sha.js@2.3.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sigmund@1.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.6": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:url@0.10.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});

