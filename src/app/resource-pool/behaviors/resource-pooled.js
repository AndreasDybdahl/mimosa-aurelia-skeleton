import {Behavior, Container} from 'aurelia-framework';
import {ViewCompiler, ViewResources, ViewSlot} from 'aurelia-templating';
import {ResourcePool} from '../services/resource-pool';

var hasTemplateElement = ('content' in document.createElement('template'));

export class ResourcePooled {
  static metadata() {
    return Behavior
      .customElement('resource-pooled')
      .withProperty('pool')
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

    let template = document.createElement('template');
    if (hasTemplateElement) {
      template.content = document.createDocumentFragment();
    }

    while (element.firstChild) {
      template.content.appendChild(element.firstChild);
    }

    this.template = template;
  }

  bind(context) {
    if (!this.pool) {
      this.pool = this.viewResources.viewUrl;
    }

    this.view = this.resourcePool.get(this.pool, 'view', () => {
      const viewFactory = this.resourcePool.get(this.pool, 'viewFactory', () => this.viewCompiler.compile(this.template, this.viewResources));    
      console.log(`Creating pooled view: ${this.pool}`);
      try {
        return viewFactory.create(this.container, null, {suppressBind: true});
      } finally {
        this.resourcePool.free(this.pool, 'viewFactory', viewFactory);
      }
    });
    this.view.bind(context);
    this.viewSlot.add(this.view);
  }

  unbind() {
    this.viewSlot.remove(this.view);
    this.view.unbind();
    this.resourcePool.free(this.pool, 'view', this.view);
    this.view = null;
  }
}