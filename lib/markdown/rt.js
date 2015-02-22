"use strict";

System.register(["highlightjs"], function (_export) {
  var hljs, moveOutTags;

  _export("postfix", postfix);

  function postfix(inlineViewStrategy) {
    var template = inlineViewStrategy.template;
    if (template !== null) {
      for (var _iterator = template.content.querySelectorAll("pre > code")[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        var code = _step.value;

        //code.className = 'language-' + code.className.trim();
        hljs.highlightBlock(code);
        code.parentNode.className = "highlight";
      }

      for (var _iterator2 = moveOutTags[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
        var tag = _step2.value;

        for (var _iterator3 = template.content.querySelectorAll("p > " + tag + ":first-child:last-child")[Symbol.iterator](), _step3; !(_step3 = _iterator3.next()).done;) {
          var node = _step3.value;

          var p = node.parentNode;
          var _parent = p.parentNode;
          _parent.replaceChild(node, p);
        }
      }
    }
  }
  return {
    setters: [function (_highlightjs) {
      hljs = _highlightjs["default"];
    }],
    execute: function () {
      moveOutTags = ["import", "sample"];
    }
  };
});
//# sourceMappingURL=rt.js.map
