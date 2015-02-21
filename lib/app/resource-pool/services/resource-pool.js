"use strict";

System.register(["aurelia-framework"], function (_export) {
  var Behavior, _prototypeProperties, _classCallCheck, ResourcePool;

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ResourcePool = _export("ResourcePool", (function () {
        function ResourcePool() {
          _classCallCheck(this, ResourcePool);

          this.pools = {};
        }

        _prototypeProperties(ResourcePool, null, {
          get: {
            value: function get(poolName, name, create) {
              var resources = this._getResources(poolName, name);
              if (resources.length === 0) {
                return create ? create() : null;
              } else {
                return resources.shift();
              }
            },
            writable: true,
            configurable: true
          },
          getAndFree: {
            value: function getAndFree(poolName, name, create) {
              var resource = this.get(poolName, name, create);
              this.free(poolName, name, resource);
              return resource;
            },
            writable: true,
            configurable: true
          },
          free: {
            value: function free(poolName, name, resource) {
              var resources = this._getResources(poolName, name);
              resources.push(resource);
            },
            writable: true,
            configurable: true
          },
          _getResources: {
            value: function _getResources(poolName, name) {
              var pool = this.pools[poolName];
              if (!pool) {
                pool = this.pools[poolName] = {};
              }

              var resources = pool[name];
              if (!resources) {
                resources = pool[name] = [];
              }

              return resources;
            },
            writable: true,
            configurable: true
          }
        });

        return ResourcePool;
      })());
    }
  };
});
//# sourceMappingURL=resource-pool.js.map
