import {App} from 'app/app';
import {expect, RouterStub} from './utils';

describe('the App module', () => {
  let sut;

  beforeEach(() => { sut = new App(new RouterStub()); });

  it('contains a router property', () => {
    expect(sut).to.have.property('router');
  });

  it('configures the routers title', () => {
    expect(sut.router.title).to.equal('Application Title');
  });

  it('configures an authorize step', () => {
    expect(sut.router.steps.length).to.equal(1);
    expect(sut.router.steps[0].name).to.equal('authorize');
  });
});