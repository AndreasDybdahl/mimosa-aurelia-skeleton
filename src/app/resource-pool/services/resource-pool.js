import {Behavior} from 'aurelia-framework';

export class ResourcePool {
  constructor() {
    this.pools = {};
  }

  get(poolName, name, create) {
    const resources = this._getResources(poolName, name);
    if (resources.length === 0) {
      return create ? create() : null;
    } else {
      return resources.shift();
    }
  }

  getAndFree(poolName, name, create) {
    const resource = this.get(poolName, name, create);
    this.free(poolName, name, resource);
    return resource;
  }

  free(poolName, name, resource) {
    const resources = this._getResources(poolName, name);
    resources.push(resource);
  }

  _getResources(poolName, name) {
    let pool = this.pools[poolName];
    if (!pool) {
      pool = this.pools[poolName] = {};
    }

    let resources = pool[name];
    if (!resources) {
      resources = pool[name] = [];
    }

    return resources;
  }
}