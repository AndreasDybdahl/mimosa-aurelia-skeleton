import {Behavior} from 'aurelia-framework';

export class ResourcePool {
  constructor() {
    this.pools = {};
  }

  get(poolName, name, create) {
    let resources = this._getResources(poolName, name);
    if (resources.length === 0) {
      return create ? create() : null;
    } else {
      return resources.shift();
    }
  }

  free(poolName, name, resource) {
    let resources = this._getResources(poolName, name);
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