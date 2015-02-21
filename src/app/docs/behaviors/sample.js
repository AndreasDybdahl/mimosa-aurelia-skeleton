import {Behavior, Container} from 'aurelia-framework';
import {ViewCompiler, ViewResources, ViewSlot} from 'aurelia-templating';
import {ResourcePool} from 'app/resource-pool/services/resource-pool';
import Prism from 'prism';
import srcref from 'srcref.json!';

System.config({
  paths: {
    'src:*': `${srcref.src}/*.js`,
    'preview:*': `${srcref.view}/*.js`
  }
});

const hasTemplateElement = ('content' in document.createElement('template'));

function empty(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function resolvepath(path) {
  for (let prefix in System.paths) {
    const test = prefix.replace('*', '');
    if (test.length === 0)
      continue;
    
    const matches = path.substring(0, test.length) === test;
    if (matches) {
      return System.paths[prefix].replace('*.js', path.substring(test.length));
    }
  }

  return path;
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
    if (this.viewSlot.children.length)
      return;

    const viewUrl = this.viewResources.viewUrl;
    const dir = this.dir ? (await System.normalize(this.dir + '/index', viewUrl)) : viewUrl;
    const factory = await this.resourcePool.getAndFree(dir, 'sample', () => {
      console.log('loading files');
      return Promise.all(this.files.map(async ({id, ext, name}) => {
        const mod = await System.normalize(id, dir);
        const qsrc = await System.import(`src:${mod}${ext}!text`);
        // response comes in string form
        const src = JSON.parse(qsrc);
        const url = resolvepath(`preview:${mod}${ext}`);

        let lang;
        switch (ext) {
          case '.js':   lang = Prism.languages.javascript; break;
          case '.html': lang = Prism.languages.markup; break;
          default: throw new Error(`Unknown extension: ${ext}`);
        }

        const highlight = Prism.highlight(src, lang);

        return {name, mod, ext, src, highlight, url};
      })).then(files => {
        // Create HTML string
        const html = files.map(file => {
          return `
            <div class="col-md-12">
              <a href="${file.url}" target="_blank">${file.name}</a>:
              <pre class="language-${file.ext.substring(1)}"><code>${file.highlight}</code></pre>
            </div>
          `;
        }).join('');

        const viewmodel = files.filter(f => f.name === 'viewmodel')[0].mod;
        const template  = resolvepath(files.filter(f => f.name === 'template')[0].mod);
        const compose = document.createElement('compose');
        compose.setAttribute('view-model', viewmodel);
        compose.setAttribute('view', template + '.html');

        const wrap = document.createElement('div');
        wrap.className = 'row preview';

        const innerWrap = document.createElement('div');
        innerWrap.className = 'col-md-24';
        wrap.appendChild(innerWrap);

        const resultText = document.createElement('strong');
        resultText.innerText = 'result:';
        innerWrap.appendChild(resultText);

        const well = document.createElement('div');
        well.className = 'well';
        innerWrap.appendChild(well);
        well.appendChild(compose);

        const fragment = document.createDocumentFragment();
        fragment.appendChild(wrap);
        const viewFactory = this.viewCompiler.compile(fragment, this.viewResources);
        const div = document.createElement('div');
        div.innerHTML = html;
        div.className = 'row';
        fragment.insertBefore(div, wrap);
        return viewFactory;
      });
    });

    const view = factory.create(this.container, ctx);
    this.viewSlot.add(view);
  }
}