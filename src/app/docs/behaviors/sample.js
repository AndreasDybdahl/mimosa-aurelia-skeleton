import {Behavior, Container} from 'aurelia-framework';
import {ViewCompiler, ViewResources, ViewSlot} from 'aurelia-templating';
import {ResourcePool} from 'app/resource-pool/services/resource-pool';
import Prism from 'prism';

const hasTemplateElement = ('content' in document.createElement('template'));

function empty(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

export class SampleBehavior {
  static metadata() {
    return Behavior
      .customElement('sample')
      .withProperty('dir')
      .skipContentProcessing()
      .noView();
  }

  static inject() { return [Element, ResourcePool, ViewCompiler, ViewResources, ViewSlot, Container]; }
  constructor(element, resourcePool, viewCompiler, viewResources, viewSlot, container) {
    this.element = element;
    this.resourcePool = resourcePool;
    this.viewCompiler = viewCompiler;
    this.viewResources = viewResources;
    this.viewSlot = viewSlot;
    this.container = container;
    this.files = [
      { id: './viewmodel',    ext: '.js',    name: 'viewmodel' },
      { id: './template',     ext: '.html',  name: 'template'  }
    ];

    empty(this.element);
  }

  async bind(ctx) {
    const viewUrl = this.viewResources.viewUrl;
    const dir = this.dir ? (await System.normalize(this.dir + '/index', viewUrl)) : viewUrl;
    const html = await this.resourcePool.getAndFree(dir, 'sample', () => {
      console.log('loading files');
      return Promise.all(this.files.map(async ({id, ext, name}) => {
        const mod = await System.normalize(id, dir);
        const src = await System.import(`${mod}${ext}!text`);

        let lang;
        switch (ext) {
          case '.js':   lang = Prism.languages.javascript; break;
          case '.html': lang = Prism.languages.markup; break;
          default: throw new Error(`Unknown extension: ${ext}`);
        }

        const highlight = Prism.highlight(src, lang);

        return {name, mod, ext, src, highlight};
      })).then(files => {
        return files.map(file => {
          return `
            <div class="col-md-12">
              <a href="#">${file.name}</a>
              <pre class="language-${file.ext.substring(1)}"><code>${file.highlight}</code></pre>
            </div>
          `;
        }).join('');
      });
    });

    this.element.innerHTML = html;
  }
}