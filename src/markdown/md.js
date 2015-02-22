import {translate as html} from 'html';
import Showdown from 'showdown';
import hljs from 'highlightjs';

const interpolationRegex = /\${(.*?)}/g;
const moveOutTags = ['import', 'sample'];

export function translate(load) {
  const converter = new Showdown.converter();
  const source = load.source
    .replace(interpolationRegex, '$\u200B{$1}');

  load.source = `<template>${converter.makeHtml(source)}</template>`;

  return Promise.resolve(html(load)).then(code => {
    code += `
require('md').postfix(module.exports);`;
    return code;
  });
}

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