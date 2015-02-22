import hljs from 'highlightjs';

const moveOutTags = ['import', 'sample'];

export function postfix(inlineViewStrategy) {
  const template = inlineViewStrategy.template;
  if (template !== null) {
    for (let code of template.content.querySelectorAll('pre > code')) {
      //code.className = 'language-' + code.className.trim();
      hljs.highlightBlock(code);
      code.parentNode.className = 'highlight';
    }

    for (let tag of moveOutTags) {
      for (let node of template.content.querySelectorAll(`p > ${tag}:first-child:last-child`)) {
        const p = node.parentNode;
        const parent = p.parentNode;
        parent.replaceChild(node, p);
      }
    }
  }
}