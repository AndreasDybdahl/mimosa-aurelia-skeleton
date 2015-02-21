import chai from 'chai';

export let expect = chai.expect;

export class RouterStub {
  configure(handler) {
    this.routes = [];
    this.steps = [];
    handler(this);
  }

  map(routes) {
    this.routes = this.routes.concat(routes);
  }

  addPipelineStep(name, step) {
    this.steps.push({name, step});
  }
}