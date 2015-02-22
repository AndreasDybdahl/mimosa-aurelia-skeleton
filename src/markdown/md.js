import {translate as html} from 'html';

let showdown;
if (typeof window !== 'undefined') {
  showdown = System.import('showdown') 
} else {
  const dir = process.cwd();
  const require = process.mainModule.require;
  const path = require('path');
  const mpath = path.join(dir, 'node_modules', 'showdown');
  showdown = Promise.resolve(require(mpath));
}

const interpolationRegex = /\${(.*?)}/g;

export function translate(load) {
  return showdown.then(Showdown => {
    const converter = new Showdown.converter();
    const source = load.source
      .replace(interpolationRegex, '$\u200B{$1}');

    load.source = `<template>${converter.makeHtml(source)}</template>`;

    return Promise.resolve(html(load)).then(code => {
      code += `
  require('md/rt').postfix(module.exports);`;
      return code;
    });
  });
}