import {Behavior, Container} from 'aurelia-framework';
import {ViewCompiler, ViewResources, ViewSlot} from 'aurelia-templating';
import {ResourcePool} from 'app/resource-pool/services/resource-pool';
import Prism from 'prism';

import Showdown from 'showdown';

const hasTemplateElement = ('content' in document.createElement('template'));
const interpolationRegex = /\${(.*?)}/g;

function empty(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

export class DocBehaviour {
  static metadata() {
    return Behavior
      .customElement('doc')
      .withProperty('title')
      .skipContentProcessing()
      .noView();
  }

  static inject() { return [Element, ResourcePool, ViewCompiler, ViewResources, ViewSlot, Container]; }
  constructor(element, resourcePool, viewCompiler, viewResources, viewSlot, container) {
    this.converter = new Showdown.converter();
    this.element = element;
    this.resourcePool = resourcePool;
    this.viewCompiler = viewCompiler;
    this.viewResources = viewResources;
    this.viewSlot = viewSlot;
    this.container = container;
    this.textContent = this.element.innerHTML;

    empty(this.element);
  }

  bind(ctx) {
    if (!this.title) {
      throw new Error('docs cannot have empty titles');
    }

    const pool = this.pool = `${this.viewResources.viewUrl}#${this.title}`;

    this.view = this.resourcePool.get(pool, 'view', () => {
      const viewFactory = this.resourcePool.get(pool, 'viewFactory', () => {
        const markdown = this.textContent.replace(interpolationRegex, '$\u200B{$1}')
          .replace(/(```|`(?!`))([^]*?)\1/g, (match, tics, content) => {
            return `${tics}${content.replace(/&lt;/g, '<').replace(/&gt;/g, '>')}${tics}`;
          });
        const html = this.converter.makeHtml(
          markdown.split(/\r\n|\n/g).map(l => l.trim()).join('\n')
        );

        const template = document.createElement('template');
        template.innerHTML = html;
        if (!hasTemplateElement) {
          template.content = document.createDocumentFragment();
          while (template.firstChild) {
            template.content.appendChild(template.firstChild);
          }
        }

        for (let sample of template.content.querySelectorAll('p > sample:first-child:last-child')) {
          const p = sample.parentNode;
          const parent = p.parentNode;
          parent.replaceChild(sample, p);
        }

        for (let code of template.content.querySelectorAll('pre > code')) {
          code.className = 'language-' + code.className.trim();
          Prism.highlightElement(code, false, () => {
            console.log('highlighted');
          });
          console.log('should be highlighted');
        }

        return this.viewCompiler.compile(template, this.viewResources)
      });

      try {
        return viewFactory.create(this.container, null, {suppressBind: true});
      } finally {
        this.resourcePool.free(pool, 'viewFactory', viewFactory);
      }
    });
    this.view.bind(ctx);
    this.viewSlot.add(this.view);
  }

  unbind() {
    this.viewSlot.remove(this.view);
    this.view.unbind();
    this.resourcePool.free(this.pool, 'view', this.view);
    this.view = null;
  }
}