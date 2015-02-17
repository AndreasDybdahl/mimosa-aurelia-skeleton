"format register";




System.register("npm:process@0.10.0/browser", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  function drainQueue() {
    if (draining) {
      return ;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      var i = -1;
      while (++i < len) {
        currentQueue[i]();
      }
      len = queue.length;
    }
    draining = false;
  }
  process.nextTick = function(fun) {
    queue.push(fun);
    if (!draining) {
      setTimeout(drainQueue, 0);
    }
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  global.define = __define;
  return module.exports;
});



System.register("npm:process@0.10.0", ["npm:process@0.10.0/browser"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:process@0.10.0/browser");
  global.define = __define;
  return module.exports;
});



System.register("github:jspm/nodelibs-process@0.1.1/index", ["process"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = System._nodeRequire ? process : require('process');
  global.define = __define;
  return module.exports;
});



System.register("github:jspm/nodelibs-process@0.1.1", ["github:jspm/nodelibs-process@0.1.1/index"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:jspm/nodelibs-process@0.1.1/index");
  global.define = __define;
  return module.exports;
});



System.register("npm:core-js@0.4.10/index", ["process"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  (function(process) {
    !function(global, framework, undefined) {
      'use strict';
      var OBJECT = 'Object',
          FUNCTION = 'Function',
          ARRAY = 'Array',
          STRING = 'String',
          NUMBER = 'Number',
          REGEXP = 'RegExp',
          DATE = 'Date',
          MAP = 'Map',
          SET = 'Set',
          WEAKMAP = 'WeakMap',
          WEAKSET = 'WeakSet',
          SYMBOL = 'Symbol',
          PROMISE = 'Promise',
          MATH = 'Math',
          ARGUMENTS = 'Arguments',
          PROTOTYPE = 'prototype',
          CONSTRUCTOR = 'constructor',
          TO_STRING = 'toString',
          TO_STRING_TAG = TO_STRING + 'Tag',
          TO_LOCALE = 'toLocaleString',
          HAS_OWN = 'hasOwnProperty',
          FOR_EACH = 'forEach',
          ITERATOR = 'iterator',
          FF_ITERATOR = '@@' + ITERATOR,
          PROCESS = 'process',
          CREATE_ELEMENT = 'createElement',
          Function = global[FUNCTION],
          Object = global[OBJECT],
          Array = global[ARRAY],
          String = global[STRING],
          Number = global[NUMBER],
          RegExp = global[REGEXP],
          Date = global[DATE],
          Map = global[MAP],
          Set = global[SET],
          WeakMap = global[WEAKMAP],
          WeakSet = global[WEAKSET],
          Symbol = global[SYMBOL],
          Math = global[MATH],
          TypeError = global.TypeError,
          setTimeout = global.setTimeout,
          setImmediate = global.setImmediate,
          clearImmediate = global.clearImmediate,
          process = global[PROCESS],
          nextTick = process && process.nextTick,
          document = global.document,
          html = document && document.documentElement,
          navigator = global.navigator,
          define = global.define,
          ArrayProto = Array[PROTOTYPE],
          ObjectProto = Object[PROTOTYPE],
          FunctionProto = Function[PROTOTYPE],
          Infinity = 1 / 0,
          DOT = '.';
      function isObject(it) {
        return it != null && (typeof it == 'object' || typeof it == 'function');
      }
      function isFunction(it) {
        return typeof it == 'function';
      }
      var isNative = ctx(/./.test, /\[native code\]\s*\}\s*$/, 1);
      var buildIn = {
        Undefined: 1,
        Null: 1,
        Array: 1,
        String: 1,
        Arguments: 1,
        Function: 1,
        Error: 1,
        Boolean: 1,
        Number: 1,
        Date: 1,
        RegExp: 1
      },
          toString = ObjectProto[TO_STRING];
      function setToStringTag(it, tag, stat) {
        if (it && !has(it = stat ? it : it[PROTOTYPE], SYMBOL_TAG))
          hidden(it, SYMBOL_TAG, tag);
      }
      function cof(it) {
        return it == undefined ? it === undefined ? 'Undefined' : 'Null' : toString.call(it).slice(8, -1);
      }
      function classof(it) {
        var klass = cof(it),
            tag;
        return klass == OBJECT && (tag = it[SYMBOL_TAG]) ? has(buildIn, tag) ? '~' + tag : tag : klass;
      }
      var call = FunctionProto.call,
          apply = FunctionProto.apply,
          REFERENCE_GET;
      function part() {
        var fn = assertFunction(this),
            length = arguments.length,
            args = Array(length),
            i = 0,
            _ = path._,
            holder = false;
        while (length > i)
          if ((args[i] = arguments[i++]) === _)
            holder = true;
        return function() {
          var that = this,
              _length = arguments.length,
              i = 0,
              j = 0,
              _args;
          if (!holder && !_length)
            return invoke(fn, args, that);
          _args = args.slice();
          if (holder)
            for (; length > i; i++)
              if (_args[i] === _)
                _args[i] = arguments[j++];
          while (_length > j)
            _args.push(arguments[j++]);
          return invoke(fn, _args, that);
        };
      }
      function ctx(fn, that, length) {
        assertFunction(fn);
        if (~length && that === undefined)
          return fn;
        switch (length) {
          case 1:
            return function(a) {
              return fn.call(that, a);
            };
          case 2:
            return function(a, b) {
              return fn.call(that, a, b);
            };
          case 3:
            return function(a, b, c) {
              return fn.call(that, a, b, c);
            };
        }
        return function() {
          return fn.apply(that, arguments);
        };
      }
      function invoke(fn, args, that) {
        var un = that === undefined;
        switch (args.length | 0) {
          case 0:
            return un ? fn() : fn.call(that);
          case 1:
            return un ? fn(args[0]) : fn.call(that, args[0]);
          case 2:
            return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
          case 3:
            return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
          case 4:
            return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
          case 5:
            return un ? fn(args[0], args[1], args[2], args[3], args[4]) : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
        }
        return fn.apply(that, args);
      }
      function construct(target, argumentsList) {
        var proto = assertFunction(arguments.length < 3 ? target : arguments[2])[PROTOTYPE],
            instance = create(isObject(proto) ? proto : ObjectProto),
            result = apply.call(target, instance, argumentsList);
        return isObject(result) ? result : instance;
      }
      var create = Object.create,
          getPrototypeOf = Object.getPrototypeOf,
          setPrototypeOf = Object.setPrototypeOf,
          defineProperty = Object.defineProperty,
          defineProperties = Object.defineProperties,
          getOwnDescriptor = Object.getOwnPropertyDescriptor,
          getKeys = Object.keys,
          getNames = Object.getOwnPropertyNames,
          getSymbols = Object.getOwnPropertySymbols,
          isFrozen = Object.isFrozen,
          has = ctx(call, ObjectProto[HAS_OWN], 2),
          ES5Object = Object,
          Dict;
      function toObject(it) {
        return ES5Object(assertDefined(it));
      }
      function returnIt(it) {
        return it;
      }
      function returnThis() {
        return this;
      }
      function get(object, key) {
        if (has(object, key))
          return object[key];
      }
      function ownKeys(it) {
        assertObject(it);
        return getSymbols ? getNames(it).concat(getSymbols(it)) : getNames(it);
      }
      var assign = Object.assign || function(target, source) {
        var T = Object(assertDefined(target)),
            l = arguments.length,
            i = 1;
        while (l > i) {
          var S = ES5Object(arguments[i++]),
              keys = getKeys(S),
              length = keys.length,
              j = 0,
              key;
          while (length > j)
            T[key = keys[j++]] = S[key];
        }
        return T;
      };
      function keyOf(object, el) {
        var O = toObject(object),
            keys = getKeys(O),
            length = keys.length,
            index = 0,
            key;
        while (length > index)
          if (O[key = keys[index++]] === el)
            return key;
      }
      function array(it) {
        return String(it).split(',');
      }
      var push = ArrayProto.push,
          unshift = ArrayProto.unshift,
          slice = ArrayProto.slice,
          splice = ArrayProto.splice,
          indexOf = ArrayProto.indexOf,
          forEach = ArrayProto[FOR_EACH];
      function createArrayMethod(type) {
        var isMap = type == 1,
            isFilter = type == 2,
            isSome = type == 3,
            isEvery = type == 4,
            isFindIndex = type == 6,
            noholes = type == 5 || isFindIndex;
        return function(callbackfn) {
          var O = Object(assertDefined(this)),
              that = arguments[1],
              self = ES5Object(O),
              f = ctx(callbackfn, that, 3),
              length = toLength(self.length),
              index = 0,
              result = isMap ? Array(length) : isFilter ? [] : undefined,
              val,
              res;
          for (; length > index; index++)
            if (noholes || index in self) {
              val = self[index];
              res = f(val, index, O);
              if (type) {
                if (isMap)
                  result[index] = res;
                else if (res)
                  switch (type) {
                    case 3:
                      return true;
                    case 5:
                      return val;
                    case 6:
                      return index;
                    case 2:
                      result.push(val);
                  }
                else if (isEvery)
                  return false;
              }
            }
          return isFindIndex ? -1 : isSome || isEvery ? isEvery : result;
        };
      }
      function createArrayContains(isContains) {
        return function(el) {
          var O = toObject(this),
              length = toLength(O.length),
              index = toIndex(arguments[1], length);
          if (isContains && el != el) {
            for (; length > index; index++)
              if (sameNaN(O[index]))
                return isContains || index;
          } else
            for (; length > index; index++)
              if (isContains || index in O) {
                if (O[index] === el)
                  return isContains || index;
              }
          return !isContains && -1;
        };
      }
      function generic(A, B) {
        return typeof A == 'function' ? A : B;
      }
      var MAX_SAFE_INTEGER = 0x1fffffffffffff,
          ceil = Math.ceil,
          floor = Math.floor,
          max = Math.max,
          min = Math.min,
          random = Math.random,
          trunc = Math.trunc || function(it) {
            return (it > 0 ? floor : ceil)(it);
          };
      function sameNaN(number) {
        return number != number;
      }
      function toInteger(it) {
        return isNaN(it) ? 0 : trunc(it);
      }
      function toLength(it) {
        return it > 0 ? min(toInteger(it), MAX_SAFE_INTEGER) : 0;
      }
      function toIndex(index, length) {
        var index = toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
      }
      function createReplacer(regExp, replace, isStatic) {
        var replacer = isObject(replace) ? function(part) {
          return replace[part];
        } : replace;
        return function(it) {
          return String(isStatic ? it : this).replace(regExp, replacer);
        };
      }
      function createPointAt(toString) {
        return function(pos) {
          var s = String(assertDefined(this)),
              i = toInteger(pos),
              l = s.length,
              a,
              b;
          if (i < 0 || i >= l)
            return toString ? '' : undefined;
          a = s.charCodeAt(i);
          return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? toString ? s.charAt(i) : a : toString ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
        };
      }
      var REDUCE_ERROR = 'Reduce of empty object with no initial value';
      function assert(condition, msg1, msg2) {
        if (!condition)
          throw TypeError(msg2 ? msg1 + msg2 : msg1);
      }
      function assertDefined(it) {
        if (it == undefined)
          throw TypeError('Function called on null or undefined');
        return it;
      }
      function assertFunction(it) {
        assert(isFunction(it), it, ' is not a function!');
        return it;
      }
      function assertObject(it) {
        assert(isObject(it), it, ' is not an object!');
        return it;
      }
      function assertInstance(it, Constructor, name) {
        assert(it instanceof Constructor, name, ": use the 'new' operator!");
      }
      function descriptor(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        };
      }
      function simpleSet(object, key, value) {
        object[key] = value;
        return object;
      }
      function createDefiner(bitmap) {
        return DESC ? function(object, key, value) {
          return defineProperty(object, key, descriptor(bitmap, value));
        } : simpleSet;
      }
      function uid(key) {
        return SYMBOL + '(' + key + ')_' + (++sid + random())[TO_STRING](36);
      }
      function getWellKnownSymbol(name, setter) {
        return (Symbol && Symbol[name]) || (setter ? Symbol : safeSymbol)(SYMBOL + DOT + name);
      }
      var DESC = !!function() {
        try {
          return defineProperty({}, DOT, ObjectProto);
        } catch (e) {}
      }(),
          sid = 0,
          hidden = createDefiner(1),
          set = Symbol ? simpleSet : hidden,
          safeSymbol = Symbol || uid;
      function assignHidden(target, src) {
        for (var key in src)
          hidden(target, key, src[key]);
        return target;
      }
      var SYMBOL_UNSCOPABLES = getWellKnownSymbol('unscopables'),
          ArrayUnscopables = ArrayProto[SYMBOL_UNSCOPABLES] || {},
          SYMBOL_SPECIES = getWellKnownSymbol('species');
      function setSpecies(C) {
        if (framework || !isNative(C))
          defineProperty(C, SYMBOL_SPECIES, {
            configurable: true,
            get: returnThis
          });
      }
      var SYMBOL_ITERATOR = getWellKnownSymbol(ITERATOR),
          SYMBOL_TAG = getWellKnownSymbol(TO_STRING_TAG),
          SUPPORT_FF_ITER = FF_ITERATOR in ArrayProto,
          ITER = safeSymbol('iter'),
          KEY = 1,
          VALUE = 2,
          Iterators = {},
          IteratorPrototype = {},
          NATIVE_ITERATORS = SYMBOL_ITERATOR in ArrayProto,
          BUGGY_ITERATORS = 'keys' in ArrayProto && !('next' in [].keys());
      setIterator(IteratorPrototype, returnThis);
      function setIterator(O, value) {
        hidden(O, SYMBOL_ITERATOR, value);
        SUPPORT_FF_ITER && hidden(O, FF_ITERATOR, value);
      }
      function createIterator(Constructor, NAME, next, proto) {
        Constructor[PROTOTYPE] = create(proto || IteratorPrototype, {next: descriptor(1, next)});
        setToStringTag(Constructor, NAME + ' Iterator');
      }
      function defineIterator(Constructor, NAME, value, DEFAULT) {
        var proto = Constructor[PROTOTYPE],
            iter = get(proto, SYMBOL_ITERATOR) || get(proto, FF_ITERATOR) || (DEFAULT && get(proto, DEFAULT)) || value;
        if (framework) {
          setIterator(proto, iter);
          if (iter !== value) {
            var iterProto = getPrototypeOf(iter.call(new Constructor));
            setToStringTag(iterProto, NAME + ' Iterator', true);
            has(proto, FF_ITERATOR) && setIterator(iterProto, returnThis);
          }
        }
        Iterators[NAME] = iter;
        Iterators[NAME + ' Iterator'] = returnThis;
        return iter;
      }
      function defineStdIterators(Base, NAME, Constructor, next, DEFAULT, IS_SET) {
        function createIter(kind) {
          return function() {
            return new Constructor(this, kind);
          };
        }
        createIterator(Constructor, NAME, next);
        var entries = createIter(KEY + VALUE),
            values = createIter(VALUE);
        if (DEFAULT == VALUE)
          values = defineIterator(Base, NAME, values, 'values');
        else
          entries = defineIterator(Base, NAME, entries, 'entries');
        if (DEFAULT) {
          $define(PROTO + FORCED * BUGGY_ITERATORS, NAME, {
            entries: entries,
            keys: IS_SET ? values : createIter(KEY),
            values: values
          });
        }
      }
      function iterResult(done, value) {
        return {
          value: value,
          done: !!done
        };
      }
      function isIterable(it) {
        var O = Object(it),
            Symbol = global[SYMBOL],
            hasExt = (Symbol && Symbol[ITERATOR] || FF_ITERATOR) in O;
        return hasExt || SYMBOL_ITERATOR in O || has(Iterators, classof(O));
      }
      function getIterator(it) {
        var Symbol = global[SYMBOL],
            ext = it[Symbol && Symbol[ITERATOR] || FF_ITERATOR],
            getIter = ext || it[SYMBOL_ITERATOR] || Iterators[classof(it)];
        return assertObject(getIter.call(it));
      }
      function stepCall(fn, value, entries) {
        return entries ? invoke(fn, value) : fn(value);
      }
      function forOf(iterable, entries, fn, that) {
        var iterator = getIterator(iterable),
            f = ctx(fn, that, entries ? 2 : 1),
            step;
        while (!(step = iterator.next()).done)
          if (stepCall(f, step.value, entries) === false)
            return ;
      }
      var NODE = cof(process) == PROCESS,
          core = {},
          path = framework ? global : core,
          old = global.core,
          exportGlobal,
          FORCED = 1,
          GLOBAL = 2,
          STATIC = 4,
          PROTO = 8,
          BIND = 16,
          WRAP = 32;
      function $define(type, name, source) {
        var key,
            own,
            out,
            exp,
            isGlobal = type & GLOBAL,
            target = isGlobal ? global : (type & STATIC) ? global[name] : (global[name] || ObjectProto)[PROTOTYPE],
            exports = isGlobal ? core : core[name] || (core[name] = {});
        if (isGlobal)
          source = name;
        for (key in source) {
          own = !(type & FORCED) && target && key in target && (!isFunction(target[key]) || isNative(target[key]));
          out = (own ? target : source)[key];
          if (type & BIND && own)
            exp = ctx(out, global);
          else if (type & WRAP && !framework && target[key] == out) {
            exp = function(param) {
              return this instanceof out ? new out(param) : out(param);
            };
            exp[PROTOTYPE] = out[PROTOTYPE];
          } else
            exp = type & PROTO && isFunction(out) ? ctx(call, out) : out;
          if (exports[key] != out)
            hidden(exports, key, exp);
          if (framework && target && !own) {
            if (isGlobal)
              target[key] = out;
            else
              delete target[key] && hidden(target, key, out);
          }
        }
      }
      if (typeof module != 'undefined' && module.exports)
        module.exports = core;
      else if (isFunction(define) && define.amd)
        define(function() {
          return core;
        });
      else
        exportGlobal = true;
      if (exportGlobal || framework) {
        core.noConflict = function() {
          global.core = old;
          return core;
        };
        global.core = core;
      }
      $define(GLOBAL + FORCED, {global: global});
      !function(TAG, SymbolRegistry, AllSymbols, setter) {
        if (!isNative(Symbol)) {
          Symbol = function(description) {
            assert(!(this instanceof Symbol), SYMBOL + ' is not a ' + CONSTRUCTOR);
            var tag = uid(description),
                sym = set(create(Symbol[PROTOTYPE]), TAG, tag);
            AllSymbols[tag] = sym;
            DESC && setter && defineProperty(ObjectProto, tag, {
              configurable: true,
              set: function(value) {
                hidden(this, tag, value);
              }
            });
            return sym;
          };
          hidden(Symbol[PROTOTYPE], TO_STRING, function() {
            return this[TAG];
          });
        }
        $define(GLOBAL + WRAP, {Symbol: Symbol});
        var symbolStatics = {
          'for': function(key) {
            return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = Symbol(key);
          },
          iterator: SYMBOL_ITERATOR,
          keyFor: part.call(keyOf, SymbolRegistry),
          species: SYMBOL_SPECIES,
          toStringTag: SYMBOL_TAG = getWellKnownSymbol(TO_STRING_TAG, true),
          unscopables: SYMBOL_UNSCOPABLES,
          pure: safeSymbol,
          set: set,
          useSetter: function() {
            setter = true;
          },
          useSimple: function() {
            setter = false;
          }
        };
        forEach.call(array('hasInstance,isConcatSpreadable,match,replace,search,split,toPrimitive'), function(it) {
          symbolStatics[it] = getWellKnownSymbol(it);
        });
        $define(STATIC, SYMBOL, symbolStatics);
        setToStringTag(Symbol, SYMBOL);
        $define(STATIC + FORCED * !isNative(Symbol), OBJECT, {
          getOwnPropertyNames: function(it) {
            var names = getNames(toObject(it)),
                result = [],
                key,
                i = 0;
            while (names.length > i)
              has(AllSymbols, key = names[i++]) || result.push(key);
            return result;
          },
          getOwnPropertySymbols: function(it) {
            var names = getNames(toObject(it)),
                result = [],
                key,
                i = 0;
            while (names.length > i)
              has(AllSymbols, key = names[i++]) && result.push(AllSymbols[key]);
            return result;
          }
        });
      }(safeSymbol('tag'), {}, {}, true);
      !function(RegExpProto, isFinite, tmp, NAME) {
        var RangeError = global.RangeError,
            isInteger = Number.isInteger || function(it) {
              return !isObject(it) && isFinite(it) && floor(it) === it;
            },
            sign = Math.sign || function sign(x) {
              return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
            },
            E = Math.E,
            pow = Math.pow,
            abs = Math.abs,
            exp = Math.exp,
            log = Math.log,
            sqrt = Math.sqrt,
            fcc = String.fromCharCode,
            at = createPointAt(true);
        var objectStatic = {
          assign: assign,
          is: function(x, y) {
            return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
          }
        };
        '__proto__' in ObjectProto && function(buggy, set) {
          try {
            set = ctx(call, getOwnDescriptor(ObjectProto, '__proto__').set, 2);
            set({}, ArrayProto);
          } catch (e) {
            buggy = true;
          }
          objectStatic.setPrototypeOf = setPrototypeOf = setPrototypeOf || function(O, proto) {
            assertObject(O);
            assert(proto === null || isObject(proto), proto, ": can't set as prototype!");
            if (buggy)
              O.__proto__ = proto;
            else
              set(O, proto);
            return O;
          };
        }();
        $define(STATIC, OBJECT, objectStatic);
        function asinh(x) {
          return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
        }
        function expm1(x) {
          return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp(x) - 1;
        }
        $define(STATIC, NUMBER, {
          EPSILON: pow(2, -52),
          isFinite: function(it) {
            return typeof it == 'number' && isFinite(it);
          },
          isInteger: isInteger,
          isNaN: sameNaN,
          isSafeInteger: function(number) {
            return isInteger(number) && abs(number) <= MAX_SAFE_INTEGER;
          },
          MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
          MIN_SAFE_INTEGER: -MAX_SAFE_INTEGER,
          parseFloat: parseFloat,
          parseInt: parseInt
        });
        $define(STATIC, MATH, {
          acosh: function(x) {
            return (x = +x) < 1 ? NaN : isFinite(x) ? log(x / E + sqrt(x + 1) * sqrt(x - 1) / E) + 1 : x;
          },
          asinh: asinh,
          atanh: function(x) {
            return (x = +x) == 0 ? x : log((1 + x) / (1 - x)) / 2;
          },
          cbrt: function(x) {
            return sign(x = +x) * pow(abs(x), 1 / 3);
          },
          clz32: function(x) {
            return (x >>>= 0) ? 32 - x[TO_STRING](2).length : 32;
          },
          cosh: function(x) {
            return (exp(x = +x) + exp(-x)) / 2;
          },
          expm1: expm1,
          fround: function(x) {
            return new Float32Array([x])[0];
          },
          hypot: function(value1, value2) {
            var sum = 0,
                len1 = arguments.length,
                len2 = len1,
                args = Array(len1),
                larg = -Infinity,
                arg;
            while (len1--) {
              arg = args[len1] = +arguments[len1];
              if (arg == Infinity || arg == -Infinity)
                return Infinity;
              if (arg > larg)
                larg = arg;
            }
            larg = arg || 1;
            while (len2--)
              sum += pow(args[len2] / larg, 2);
            return larg * sqrt(sum);
          },
          imul: function(x, y) {
            var UInt16 = 0xffff,
                xn = +x,
                yn = +y,
                xl = UInt16 & xn,
                yl = UInt16 & yn;
            return 0 | xl * yl + ((UInt16 & xn >>> 16) * yl + xl * (UInt16 & yn >>> 16) << 16 >>> 0);
          },
          log1p: function(x) {
            return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + x);
          },
          log10: function(x) {
            return log(x) / Math.LN10;
          },
          log2: function(x) {
            return log(x) / Math.LN2;
          },
          sign: sign,
          sinh: function(x) {
            return (abs(x = +x) < 1) ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2);
          },
          tanh: function(x) {
            var a = expm1(x = +x),
                b = expm1(-x);
            return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
          },
          trunc: trunc
        });
        setToStringTag(Math, MATH, true);
        function assertNotRegExp(it) {
          if (cof(it) == REGEXP)
            throw TypeError();
        }
        $define(STATIC, STRING, {
          fromCodePoint: function(x) {
            var res = [],
                len = arguments.length,
                i = 0,
                code;
            while (len > i) {
              code = +arguments[i++];
              if (toIndex(code, 0x10ffff) !== code)
                throw RangeError(code + ' is not a valid code point');
              res.push(code < 0x10000 ? fcc(code) : fcc(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
            }
            return res.join('');
          },
          raw: function(callSite) {
            var raw = toObject(callSite.raw),
                len = toLength(raw.length),
                sln = arguments.length,
                res = [],
                i = 0;
            while (len > i) {
              res.push(String(raw[i++]));
              if (i < sln)
                res.push(String(arguments[i]));
            }
            return res.join('');
          }
        });
        $define(PROTO, STRING, {
          codePointAt: createPointAt(false),
          endsWith: function(searchString) {
            assertNotRegExp(searchString);
            var that = String(assertDefined(this)),
                endPosition = arguments[1],
                len = toLength(that.length),
                end = endPosition === undefined ? len : min(toLength(endPosition), len);
            searchString += '';
            return that.slice(end - searchString.length, end) === searchString;
          },
          includes: function(searchString) {
            assertNotRegExp(searchString);
            return !!~String(assertDefined(this)).indexOf(searchString, arguments[1]);
          },
          repeat: function(count) {
            var str = String(assertDefined(this)),
                res = '',
                n = toInteger(count);
            if (0 > n || n == Infinity)
              throw RangeError("Count can't be negative");
            for (; n > 0; (n >>>= 1) && (str += str))
              if (n & 1)
                res += str;
            return res;
          },
          startsWith: function(searchString) {
            assertNotRegExp(searchString);
            var that = String(assertDefined(this)),
                index = toLength(min(arguments[1], that.length));
            searchString += '';
            return that.slice(index, index + searchString.length) === searchString;
          }
        });
        defineStdIterators(String, STRING, function(iterated) {
          set(this, ITER, {
            o: String(iterated),
            i: 0
          });
        }, function() {
          var iter = this[ITER],
              O = iter.o,
              index = iter.i,
              point;
          if (index >= O.length)
            return iterResult(1);
          point = at.call(O, index);
          iter.i += point.length;
          return iterResult(0, point);
        });
        $define(STATIC, ARRAY, {
          from: function(arrayLike) {
            var O = Object(assertDefined(arrayLike)),
                result = new (generic(this, Array)),
                mapfn = arguments[1],
                that = arguments[2],
                mapping = mapfn !== undefined,
                f = mapping ? ctx(mapfn, that, 2) : undefined,
                index = 0,
                length;
            if (isIterable(O))
              for (var iter = getIterator(O),
                  step; !(step = iter.next()).done; index++) {
                result[index] = mapping ? f(step.value, index) : step.value;
              }
            else
              for (length = toLength(O.length); length > index; index++) {
                result[index] = mapping ? f(O[index], index) : O[index];
              }
            result.length = index;
            return result;
          },
          of: function() {
            var index = 0,
                length = arguments.length,
                result = new (generic(this, Array))(length);
            while (length > index)
              result[index] = arguments[index++];
            result.length = length;
            return result;
          }
        });
        $define(PROTO, ARRAY, {
          copyWithin: function(target, start) {
            var O = Object(assertDefined(this)),
                len = toLength(O.length),
                to = toIndex(target, len),
                from = toIndex(start, len),
                end = arguments[2],
                fin = end === undefined ? len : toIndex(end, len),
                count = min(fin - from, len - to),
                inc = 1;
            if (from < to && to < from + count) {
              inc = -1;
              from = from + count - 1;
              to = to + count - 1;
            }
            while (count-- > 0) {
              if (from in O)
                O[to] = O[from];
              else
                delete O[to];
              to += inc;
              from += inc;
            }
            return O;
          },
          fill: function(value) {
            var O = Object(assertDefined(this)),
                length = toLength(O.length),
                index = toIndex(arguments[1], length),
                end = arguments[2],
                endPos = end === undefined ? length : toIndex(end, length);
            while (endPos > index)
              O[index++] = value;
            return O;
          },
          find: createArrayMethod(5),
          findIndex: createArrayMethod(6)
        });
        defineStdIterators(Array, ARRAY, function(iterated, kind) {
          set(this, ITER, {
            o: toObject(iterated),
            i: 0,
            k: kind
          });
        }, function() {
          var iter = this[ITER],
              O = iter.o,
              kind = iter.k,
              index = iter.i++;
          if (!O || index >= O.length)
            return iter.o = undefined, iterResult(1);
          if (kind == KEY)
            return iterResult(0, index);
          if (kind == VALUE)
            return iterResult(0, O[index]);
          return iterResult(0, [index, O[index]]);
        }, VALUE);
        Iterators[ARGUMENTS] = Iterators[ARRAY];
        setToStringTag(global.JSON, 'JSON', true);
        function wrapObjectMethod(key, MODE) {
          var fn = Object[key],
              exp = core[OBJECT][key],
              f = 0,
              o = {};
          if (!exp || isNative(exp)) {
            o[key] = MODE == 1 ? function(it) {
              return isObject(it) ? fn(it) : it;
            } : MODE == 2 ? function(it) {
              return isObject(it) ? fn(it) : true;
            } : MODE == 3 ? function(it) {
              return isObject(it) ? fn(it) : false;
            } : MODE == 4 ? function(it, key) {
              return fn(toObject(it), key);
            } : function(it) {
              return fn(toObject(it));
            };
            try {
              fn(DOT);
            } catch (e) {
              f = 1;
            }
            $define(STATIC + FORCED * f, OBJECT, o);
          }
        }
        wrapObjectMethod('freeze', 1);
        wrapObjectMethod('seal', 1);
        wrapObjectMethod('preventExtensions', 1);
        wrapObjectMethod('isFrozen', 2);
        wrapObjectMethod('isSealed', 2);
        wrapObjectMethod('isExtensible', 3);
        wrapObjectMethod('getOwnPropertyDescriptor', 4);
        wrapObjectMethod('getPrototypeOf');
        wrapObjectMethod('keys');
        wrapObjectMethod('getOwnPropertyNames');
        if (framework) {
          tmp[SYMBOL_TAG] = DOT;
          if (cof(tmp) != DOT)
            hidden(ObjectProto, TO_STRING, function() {
              return '[object ' + classof(this) + ']';
            });
          NAME in FunctionProto || defineProperty(FunctionProto, NAME, {
            configurable: true,
            get: function() {
              var match = String(this).match(/^\s*function ([^ (]*)/),
                  name = match ? match[1] : '';
              has(this, NAME) || defineProperty(this, NAME, descriptor(5, name));
              return name;
            },
            set: function(value) {
              has(this, NAME) || defineProperty(this, NAME, descriptor(0, value));
            }
          });
          if (DESC && !function() {
            try {
              return RegExp(/a/g, 'i') == '/a/i';
            } catch (e) {}
          }()) {
            var _RegExp = RegExp;
            RegExp = function RegExp(pattern, flags) {
              return new _RegExp(cof(pattern) == REGEXP && flags !== undefined ? pattern.source : pattern, flags);
            };
            forEach.call(getNames(_RegExp), function(key) {
              key in RegExp || defineProperty(RegExp, key, {
                configurable: true,
                get: function() {
                  return _RegExp[key];
                },
                set: function(it) {
                  _RegExp[key] = it;
                }
              });
            });
            RegExpProto[CONSTRUCTOR] = RegExp;
            RegExp[PROTOTYPE] = RegExpProto;
            hidden(global, REGEXP, RegExp);
          }
          if (/./g.flags != 'g')
            defineProperty(RegExpProto, 'flags', {
              configurable: true,
              get: createReplacer(/^.*\/(\w*)$/, '$1')
            });
          forEach.call(array('find,findIndex,fill,copyWithin,entries,keys,values'), function(it) {
            ArrayUnscopables[it] = true;
          });
          SYMBOL_UNSCOPABLES in ArrayProto || hidden(ArrayProto, SYMBOL_UNSCOPABLES, ArrayUnscopables);
        }
        setSpecies(RegExp);
        setSpecies(Array);
      }(RegExp[PROTOTYPE], isFinite, {}, 'name');
      isFunction(setImmediate) && isFunction(clearImmediate) || function(ONREADYSTATECHANGE) {
        var postMessage = global.postMessage,
            addEventListener = global.addEventListener,
            MessageChannel = global.MessageChannel,
            counter = 0,
            queue = {},
            defer,
            channel,
            port;
        setImmediate = function(fn) {
          var args = [],
              i = 1;
          while (arguments.length > i)
            args.push(arguments[i++]);
          queue[++counter] = function() {
            invoke(isFunction(fn) ? fn : Function(fn), args);
          };
          defer(counter);
          return counter;
        };
        clearImmediate = function(id) {
          delete queue[id];
        };
        function run(id) {
          if (has(queue, id)) {
            var fn = queue[id];
            delete queue[id];
            fn();
          }
        }
        function listner(event) {
          run(event.data);
        }
        if (NODE) {
          defer = function(id) {
            nextTick(part.call(run, id));
          };
        } else if (addEventListener && isFunction(postMessage) && !global.importScripts) {
          defer = function(id) {
            postMessage(id, '*');
          };
          addEventListener('message', listner, false);
        } else if (isFunction(MessageChannel)) {
          channel = new MessageChannel;
          port = channel.port2;
          channel.port1.onmessage = listner;
          defer = ctx(port.postMessage, port, 1);
        } else if (document && ONREADYSTATECHANGE in document[CREATE_ELEMENT]('script')) {
          defer = function(id) {
            html.appendChild(document[CREATE_ELEMENT]('script'))[ONREADYSTATECHANGE] = function() {
              html.removeChild(this);
              run(id);
            };
          };
        } else {
          defer = function(id) {
            setTimeout(part.call(run, id), 0);
          };
        }
      }('onreadystatechange');
      $define(GLOBAL + BIND, {
        setImmediate: setImmediate,
        clearImmediate: clearImmediate
      });
      !function(Promise, test) {
        isFunction(Promise) && isFunction(Promise.resolve) && Promise.resolve(test = new Promise(function() {})) == test || function(asap, DEF) {
          function isThenable(o) {
            var then;
            if (isObject(o))
              then = o.then;
            return isFunction(then) ? then : false;
          }
          function notify(def) {
            var chain = def.chain;
            chain.length && asap(function() {
              var msg = def.msg,
                  ok = def.state == 1,
                  i = 0;
              while (chain.length > i)
                !function(react) {
                  var cb = ok ? react.ok : react.fail,
                      ret,
                      then;
                  try {
                    if (cb) {
                      ret = cb === true ? msg : cb(msg);
                      if (ret === react.P) {
                        react.rej(TypeError(PROMISE + '-chain cycle'));
                      } else if (then = isThenable(ret)) {
                        then.call(ret, react.res, react.rej);
                      } else
                        react.res(ret);
                    } else
                      react.rej(msg);
                  } catch (err) {
                    react.rej(err);
                  }
                }(chain[i++]);
              chain.length = 0;
            });
          }
          function resolve(msg) {
            var def = this,
                then,
                wrapper;
            if (def.done)
              return ;
            def.done = true;
            def = def.def || def;
            try {
              if (then = isThenable(msg)) {
                wrapper = {
                  def: def,
                  done: false
                };
                then.call(msg, ctx(resolve, wrapper, 1), ctx(reject, wrapper, 1));
              } else {
                def.msg = msg;
                def.state = 1;
                notify(def);
              }
            } catch (err) {
              reject.call(wrapper || {
                def: def,
                done: false
              }, err);
            }
          }
          function reject(msg) {
            var def = this;
            if (def.done)
              return ;
            def.done = true;
            def = def.def || def;
            def.msg = msg;
            def.state = 2;
            notify(def);
          }
          function getConstructor(C) {
            var S = assertObject(C)[SYMBOL_SPECIES];
            return S != undefined ? S : C;
          }
          Promise = function(executor) {
            assertFunction(executor);
            assertInstance(this, Promise, PROMISE);
            var def = {
              chain: [],
              state: 0,
              done: false,
              msg: undefined
            };
            hidden(this, DEF, def);
            try {
              executor(ctx(resolve, def, 1), ctx(reject, def, 1));
            } catch (err) {
              reject.call(def, err);
            }
          };
          assignHidden(Promise[PROTOTYPE], {
            then: function(onFulfilled, onRejected) {
              var S = assertObject(assertObject(this)[CONSTRUCTOR])[SYMBOL_SPECIES];
              var react = {
                ok: isFunction(onFulfilled) ? onFulfilled : true,
                fail: isFunction(onRejected) ? onRejected : false
              },
                  P = react.P = new (S != undefined ? S : Promise)(function(resolve, reject) {
                    react.res = assertFunction(resolve);
                    react.rej = assertFunction(reject);
                  }),
                  def = this[DEF];
              def.chain.push(react);
              def.state && notify(def);
              return P;
            },
            'catch': function(onRejected) {
              return this.then(undefined, onRejected);
            }
          });
          assignHidden(Promise, {
            all: function(iterable) {
              var Promise = getConstructor(this),
                  values = [];
              return new Promise(function(resolve, reject) {
                forOf(iterable, false, push, values);
                var remaining = values.length,
                    results = Array(remaining);
                if (remaining)
                  forEach.call(values, function(promise, index) {
                    Promise.resolve(promise).then(function(value) {
                      results[index] = value;
                      --remaining || resolve(results);
                    }, reject);
                  });
                else
                  resolve(results);
              });
            },
            race: function(iterable) {
              var Promise = getConstructor(this);
              return new Promise(function(resolve, reject) {
                forOf(iterable, false, function(promise) {
                  Promise.resolve(promise).then(resolve, reject);
                });
              });
            },
            reject: function(r) {
              return new (getConstructor(this))(function(resolve, reject) {
                reject(r);
              });
            },
            resolve: function(x) {
              return isObject(x) && DEF in x && getPrototypeOf(x) === this[PROTOTYPE] ? x : new (getConstructor(this))(function(resolve, reject) {
                resolve(x);
              });
            }
          });
        }(nextTick || setImmediate, safeSymbol('def'));
        setToStringTag(Promise, PROMISE);
        setSpecies(Promise);
        $define(GLOBAL + FORCED * !isNative(Promise), {Promise: Promise});
      }(global[PROMISE]);
      !function() {
        var UID = safeSymbol('uid'),
            O1 = safeSymbol('O1'),
            WEAK = safeSymbol('weak'),
            LEAK = safeSymbol('leak'),
            LAST = safeSymbol('last'),
            FIRST = safeSymbol('first'),
            SIZE = DESC ? safeSymbol('size') : 'size',
            uid = 0,
            tmp = {};
        function getCollection(C, NAME, methods, commonMethods, isMap, isWeak) {
          var ADDER = isMap ? 'set' : 'add',
              proto = C && C[PROTOTYPE],
              O = {};
          function initFromIterable(that, iterable) {
            if (iterable != undefined)
              forOf(iterable, isMap, that[ADDER], that);
            return that;
          }
          function fixSVZ(key, chain) {
            var method = proto[key];
            if (framework)
              proto[key] = function(a, b) {
                var result = method.call(this, a === 0 ? 0 : a, b);
                return chain ? this : result;
              };
          }
          if (!isNative(C) || !(isWeak || (!BUGGY_ITERATORS && has(proto, FOR_EACH) && has(proto, 'entries')))) {
            C = isWeak ? function(iterable) {
              assertInstance(this, C, NAME);
              set(this, UID, uid++);
              initFromIterable(this, iterable);
            } : function(iterable) {
              var that = this;
              assertInstance(that, C, NAME);
              set(that, O1, create(null));
              set(that, SIZE, 0);
              set(that, LAST, undefined);
              set(that, FIRST, undefined);
              initFromIterable(that, iterable);
            };
            assignHidden(assignHidden(C[PROTOTYPE], methods), commonMethods);
            isWeak || defineProperty(C[PROTOTYPE], 'size', {get: function() {
                return assertDefined(this[SIZE]);
              }});
          } else {
            var Native = C,
                inst = new C,
                chain = inst[ADDER](isWeak ? {} : -0, 1),
                buggyZero;
            if (!NATIVE_ITERATORS || !C.length) {
              C = function(iterable) {
                assertInstance(this, C, NAME);
                return initFromIterable(new Native, iterable);
              };
              C[PROTOTYPE] = proto;
              if (framework)
                proto[CONSTRUCTOR] = C;
            }
            isWeak || inst[FOR_EACH](function(val, key) {
              buggyZero = 1 / key === -Infinity;
            });
            if (buggyZero) {
              fixSVZ('delete');
              fixSVZ('has');
              isMap && fixSVZ('get');
            }
            if (buggyZero || chain !== inst)
              fixSVZ(ADDER, true);
          }
          setToStringTag(C, NAME);
          setSpecies(C);
          O[NAME] = C;
          $define(GLOBAL + WRAP + FORCED * !isNative(C), O);
          isWeak || defineStdIterators(C, NAME, function(iterated, kind) {
            set(this, ITER, {
              o: iterated,
              k: kind
            });
          }, function() {
            var iter = this[ITER],
                kind = iter.k,
                entry = iter.l;
            while (entry && entry.r)
              entry = entry.p;
            if (!iter.o || !(iter.l = entry = entry ? entry.n : iter.o[FIRST])) {
              return iter.o = undefined, iterResult(1);
            }
            if (kind == KEY)
              return iterResult(0, entry.k);
            if (kind == VALUE)
              return iterResult(0, entry.v);
            return iterResult(0, [entry.k, entry.v]);
          }, isMap ? KEY + VALUE : VALUE, !isMap);
          return C;
        }
        function fastKey(it, create) {
          if (!isObject(it))
            return (typeof it == 'string' ? 'S' : 'P') + it;
          if (isFrozen(it))
            return 'F';
          if (!has(it, UID)) {
            if (!create)
              return 'E';
            hidden(it, UID, ++uid);
          }
          return 'O' + it[UID];
        }
        function getEntry(that, key) {
          var index = fastKey(key),
              entry;
          if (index != 'F')
            return that[O1][index];
          for (entry = that[FIRST]; entry; entry = entry.n) {
            if (entry.k == key)
              return entry;
          }
        }
        function def(that, key, value) {
          var entry = getEntry(that, key),
              prev,
              index;
          if (entry)
            entry.v = value;
          else {
            that[LAST] = entry = {
              i: index = fastKey(key, true),
              k: key,
              v: value,
              p: prev = that[LAST],
              n: undefined,
              r: false
            };
            if (!that[FIRST])
              that[FIRST] = entry;
            if (prev)
              prev.n = entry;
            that[SIZE]++;
            if (index != 'F')
              that[O1][index] = entry;
          }
          return that;
        }
        var collectionMethods = {
          clear: function() {
            for (var that = this,
                data = that[O1],
                entry = that[FIRST]; entry; entry = entry.n) {
              entry.r = true;
              entry.p = entry.n = undefined;
              delete data[entry.i];
            }
            that[FIRST] = that[LAST] = undefined;
            that[SIZE] = 0;
          },
          'delete': function(key) {
            var that = this,
                entry = getEntry(that, key);
            if (entry) {
              var next = entry.n,
                  prev = entry.p;
              delete that[O1][entry.i];
              entry.r = true;
              if (prev)
                prev.n = next;
              if (next)
                next.p = prev;
              if (that[FIRST] == entry)
                that[FIRST] = next;
              if (that[LAST] == entry)
                that[LAST] = prev;
              that[SIZE]--;
            }
            return !!entry;
          },
          forEach: function(callbackfn) {
            var f = ctx(callbackfn, arguments[1], 3),
                entry;
            while (entry = entry ? entry.n : this[FIRST]) {
              f(entry.v, entry.k, this);
              while (entry && entry.r)
                entry = entry.p;
            }
          },
          has: function(key) {
            return !!getEntry(this, key);
          }
        };
        Map = getCollection(Map, MAP, {
          get: function(key) {
            var entry = getEntry(this, key);
            return entry && entry.v;
          },
          set: function(key, value) {
            return def(this, key === 0 ? 0 : key, value);
          }
        }, collectionMethods, true);
        Set = getCollection(Set, SET, {add: function(value) {
            return def(this, value = value === 0 ? 0 : value, value);
          }}, collectionMethods);
        function defWeak(that, key, value) {
          if (isFrozen(assertObject(key)))
            leakStore(that).set(key, value);
          else {
            has(key, WEAK) || hidden(key, WEAK, {});
            key[WEAK][that[UID]] = value;
          }
          return that;
        }
        function leakStore(that) {
          return that[LEAK] || hidden(that, LEAK, new Map)[LEAK];
        }
        var weakMethods = {
          'delete': function(key) {
            if (!isObject(key))
              return false;
            if (isFrozen(key))
              return leakStore(this)['delete'](key);
            return has(key, WEAK) && has(key[WEAK], this[UID]) && delete key[WEAK][this[UID]];
          },
          has: function(key) {
            if (!isObject(key))
              return false;
            if (isFrozen(key))
              return leakStore(this).has(key);
            return has(key, WEAK) && has(key[WEAK], this[UID]);
          }
        };
        WeakMap = getCollection(WeakMap, WEAKMAP, {
          get: function(key) {
            if (isObject(key)) {
              if (isFrozen(key))
                return leakStore(this).get(key);
              if (has(key, WEAK))
                return key[WEAK][this[UID]];
            }
          },
          set: function(key, value) {
            return defWeak(this, key, value);
          }
        }, weakMethods, true, true);
        if (framework && DESC && new WeakMap([[Object.freeze(tmp), 7]]).get(tmp) != 7) {
          forEach.call(array('delete,has,get,set'), function(key) {
            var method = WeakMap[PROTOTYPE][key];
            WeakMap[PROTOTYPE][key] = function(a, b) {
              if (isObject(a) && isFrozen(a)) {
                var result = leakStore(this)[key](a, b);
                return key == 'set' ? this : result;
              }
              return method.call(this, a, b);
            };
          });
        }
        WeakSet = getCollection(WeakSet, WEAKSET, {add: function(value) {
            return defWeak(this, value, true);
          }}, weakMethods, false, true);
      }();
      !function() {
        function Enumerate(iterated) {
          var keys = [],
              key;
          for (key in iterated)
            keys.push(key);
          set(this, ITER, {
            o: iterated,
            a: keys,
            i: 0
          });
        }
        createIterator(Enumerate, OBJECT, function() {
          var iter = this[ITER],
              keys = iter.a,
              key;
          do {
            if (iter.i >= keys.length)
              return iterResult(1);
          } while (!((key = keys[iter.i++]) in iter.o));
          return iterResult(0, key);
        });
        function wrap(fn) {
          return function(it) {
            assertObject(it);
            try {
              return fn.apply(undefined, arguments), true;
            } catch (e) {
              return false;
            }
          };
        }
        function reflectGet(target, propertyKey) {
          var receiver = arguments.length < 3 ? target : arguments[2],
              desc = getOwnDescriptor(assertObject(target), propertyKey),
              proto;
          if (desc)
            return desc.get ? desc.get.call(receiver) : desc.value;
          return isObject(proto = getPrototypeOf(target)) ? reflectGet(proto, propertyKey, receiver) : undefined;
        }
        function reflectSet(target, propertyKey, V) {
          var receiver = arguments.length < 4 ? target : arguments[3],
              desc = getOwnDescriptor(assertObject(target), propertyKey),
              proto;
          if (desc) {
            if (desc.writable === false)
              return false;
            if (desc.set)
              return desc.set.call(receiver, V), true;
          }
          if (isObject(proto = getPrototypeOf(target)))
            return reflectSet(proto, propertyKey, V, receiver);
          desc = getOwnDescriptor(receiver, propertyKey) || descriptor(0);
          desc.value = V;
          return defineProperty(receiver, propertyKey, desc), true;
        }
        var isExtensible = Object.isExtensible || returnIt;
        var reflect = {
          apply: ctx(call, apply, 3),
          construct: construct,
          defineProperty: wrap(defineProperty),
          deleteProperty: function(target, propertyKey) {
            var desc = getOwnDescriptor(assertObject(target), propertyKey);
            return desc && !desc.configurable ? false : delete target[propertyKey];
          },
          enumerate: function(target) {
            return new Enumerate(assertObject(target));
          },
          get: reflectGet,
          getOwnPropertyDescriptor: function(target, propertyKey) {
            return getOwnDescriptor(assertObject(target), propertyKey);
          },
          getPrototypeOf: function(target) {
            return getPrototypeOf(assertObject(target));
          },
          has: function(target, propertyKey) {
            return propertyKey in target;
          },
          isExtensible: function(target) {
            return !!isExtensible(assertObject(target));
          },
          ownKeys: ownKeys,
          preventExtensions: wrap(Object.preventExtensions || returnIt),
          set: reflectSet
        };
        if (setPrototypeOf)
          reflect.setPrototypeOf = function(target, proto) {
            return setPrototypeOf(assertObject(target), proto), true;
          };
        $define(GLOBAL, {Reflect: {}});
        $define(STATIC, 'Reflect', reflect);
      }();
      !function() {
        $define(PROTO, ARRAY, {includes: createArrayContains(true)});
        $define(PROTO, STRING, {at: createPointAt(true)});
        function createObjectToArray(isEntries) {
          return function(object) {
            var O = toObject(object),
                keys = getKeys(object),
                length = keys.length,
                i = 0,
                result = Array(length),
                key;
            if (isEntries)
              while (length > i)
                result[i] = [key = keys[i++], O[key]];
            else
              while (length > i)
                result[i] = O[keys[i++]];
            return result;
          };
        }
        $define(STATIC, OBJECT, {
          values: createObjectToArray(false),
          entries: createObjectToArray(true)
        });
        $define(STATIC, REGEXP, {escape: createReplacer(/([\\\-[\]{}()*+?.,^$|])/g, '\\$1', true)});
      }();
      !function(REFERENCE) {
        REFERENCE_GET = getWellKnownSymbol(REFERENCE + 'Get', true);
        var REFERENCE_SET = getWellKnownSymbol(REFERENCE + SET, true),
            REFERENCE_DELETE = getWellKnownSymbol(REFERENCE + 'Delete', true);
        $define(STATIC, SYMBOL, {
          referenceGet: REFERENCE_GET,
          referenceSet: REFERENCE_SET,
          referenceDelete: REFERENCE_DELETE
        });
        hidden(FunctionProto, REFERENCE_GET, returnThis);
        function setMapMethods(Constructor) {
          if (Constructor) {
            var MapProto = Constructor[PROTOTYPE];
            hidden(MapProto, REFERENCE_GET, MapProto.get);
            hidden(MapProto, REFERENCE_SET, MapProto.set);
            hidden(MapProto, REFERENCE_DELETE, MapProto['delete']);
          }
        }
        setMapMethods(Map);
        setMapMethods(WeakMap);
      }('reference');
      !function(NodeList) {
        if (framework && NodeList && !(SYMBOL_ITERATOR in NodeList[PROTOTYPE])) {
          hidden(NodeList[PROTOTYPE], SYMBOL_ITERATOR, Iterators[ARRAY]);
        }
        Iterators.NodeList = Iterators[ARRAY];
      }(global.NodeList);
      !function(DICT) {
        Dict = function(iterable) {
          var dict = create(null);
          if (iterable != undefined) {
            if (isIterable(iterable)) {
              for (var iter = getIterator(iterable),
                  step,
                  value; !(step = iter.next()).done; ) {
                value = step.value;
                dict[value[0]] = value[1];
              }
            } else
              assign(dict, iterable);
          }
          return dict;
        };
        Dict[PROTOTYPE] = null;
        function DictIterator(iterated, kind) {
          set(this, ITER, {
            o: toObject(iterated),
            a: getKeys(iterated),
            i: 0,
            k: kind
          });
        }
        createIterator(DictIterator, DICT, function() {
          var iter = this[ITER],
              O = iter.o,
              keys = iter.a,
              kind = iter.k,
              key;
          do {
            if (iter.i >= keys.length)
              return iterResult(1);
          } while (!has(O, key = keys[iter.i++]));
          if (kind == KEY)
            return iterResult(0, key);
          if (kind == VALUE)
            return iterResult(0, O[key]);
          return iterResult(0, [key, O[key]]);
        });
        function createDictIter(kind) {
          return function(it) {
            return new DictIterator(it, kind);
          };
        }
        function createDictMethod(type) {
          var isMap = type == 1,
              isEvery = type == 4;
          return function(object, callbackfn, that) {
            var f = ctx(callbackfn, that, 3),
                O = toObject(object),
                result = isMap || type == 7 || type == 2 ? new (generic(this, Dict)) : undefined,
                key,
                val,
                res;
            for (key in O)
              if (has(O, key)) {
                val = O[key];
                res = f(val, key, object);
                if (type) {
                  if (isMap)
                    result[key] = res;
                  else if (res)
                    switch (type) {
                      case 2:
                        result[key] = val;
                        break;
                      case 3:
                        return true;
                      case 5:
                        return val;
                      case 6:
                        return key;
                      case 7:
                        result[res[0]] = res[1];
                    }
                  else if (isEvery)
                    return false;
                }
              }
            return type == 3 || isEvery ? isEvery : result;
          };
        }
        function createDictReduce(isTurn) {
          return function(object, mapfn, init) {
            assertFunction(mapfn);
            var O = toObject(object),
                keys = getKeys(O),
                length = keys.length,
                i = 0,
                memo,
                key,
                result;
            if (isTurn)
              memo = init == undefined ? new (generic(this, Dict)) : Object(init);
            else if (arguments.length < 3) {
              assert(length, REDUCE_ERROR);
              memo = O[keys[i++]];
            } else
              memo = Object(init);
            while (length > i)
              if (has(O, key = keys[i++])) {
                result = mapfn(memo, O[key], key, object);
                if (isTurn) {
                  if (result === false)
                    break;
                } else
                  memo = result;
              }
            return memo;
          };
        }
        var findKey = createDictMethod(6);
        function includes(object, el) {
          return (el == el ? keyOf(object, el) : findKey(object, sameNaN)) !== undefined;
        }
        var dictMethods = {
          keys: createDictIter(KEY),
          values: createDictIter(VALUE),
          entries: createDictIter(KEY + VALUE),
          forEach: createDictMethod(0),
          map: createDictMethod(1),
          filter: createDictMethod(2),
          some: createDictMethod(3),
          every: createDictMethod(4),
          find: createDictMethod(5),
          findKey: findKey,
          mapPairs: createDictMethod(7),
          reduce: createDictReduce(false),
          turn: createDictReduce(true),
          keyOf: keyOf,
          includes: includes,
          has: has,
          get: get,
          set: createDefiner(0),
          isDict: function(it) {
            return isObject(it) && getPrototypeOf(it) === Dict[PROTOTYPE];
          }
        };
        if (REFERENCE_GET)
          for (var key in dictMethods)
            !function(fn) {
              function method() {
                for (var args = [this],
                    i = 0; i < arguments.length; )
                  args.push(arguments[i++]);
                return invoke(fn, args);
              }
              fn[REFERENCE_GET] = function() {
                return method;
              };
            }(dictMethods[key]);
        $define(GLOBAL + FORCED, {Dict: assignHidden(Dict, dictMethods)});
      }('Dict');
      !function(ENTRIES, FN) {
        function $for(iterable, entries) {
          if (!(this instanceof $for))
            return new $for(iterable, entries);
          this[ITER] = getIterator(iterable);
          this[ENTRIES] = !!entries;
        }
        createIterator($for, 'Wrapper', function() {
          return this[ITER].next();
        });
        var $forProto = $for[PROTOTYPE];
        setIterator($forProto, function() {
          return this[ITER];
        });
        function createChainIterator(next) {
          function Iter(I, fn, that) {
            this[ITER] = getIterator(I);
            this[ENTRIES] = I[ENTRIES];
            this[FN] = ctx(fn, that, I[ENTRIES] ? 2 : 1);
          }
          createIterator(Iter, 'Chain', next, $forProto);
          setIterator(Iter[PROTOTYPE], returnThis);
          return Iter;
        }
        var MapIter = createChainIterator(function() {
          var step = this[ITER].next();
          return step.done ? step : iterResult(0, stepCall(this[FN], step.value, this[ENTRIES]));
        });
        var FilterIter = createChainIterator(function() {
          for (; ; ) {
            var step = this[ITER].next();
            if (step.done || stepCall(this[FN], step.value, this[ENTRIES]))
              return step;
          }
        });
        assignHidden($forProto, {
          of: function(fn, that) {
            forOf(this, this[ENTRIES], fn, that);
          },
          array: function(fn, that) {
            var result = [];
            forOf(fn != undefined ? this.map(fn, that) : this, false, push, result);
            return result;
          },
          filter: function(fn, that) {
            return new FilterIter(this, fn, that);
          },
          map: function(fn, that) {
            return new MapIter(this, fn, that);
          }
        });
        $for.isIterable = isIterable;
        $for.getIterator = getIterator;
        $define(GLOBAL + FORCED, {$for: $for});
      }('entries', safeSymbol('fn'));
      !function(_, toLocaleString) {
        core._ = path._ = path._ || {};
        $define(PROTO + FORCED, FUNCTION, {
          part: part,
          only: function(numberArguments, that) {
            var fn = assertFunction(this),
                n = toLength(numberArguments),
                isThat = arguments.length > 1;
            return function() {
              var length = min(n, arguments.length),
                  args = Array(length),
                  i = 0;
              while (length > i)
                args[i] = arguments[i++];
              return invoke(fn, args, isThat ? that : this);
            };
          }
        });
        function tie(key) {
          var that = this,
              bound = {};
          return hidden(that, _, function(key) {
            if (key === undefined || !(key in that))
              return toLocaleString.call(that);
            return has(bound, key) ? bound[key] : (bound[key] = ctx(that[key], that, -1));
          })[_](key);
        }
        hidden(path._, TO_STRING, function() {
          return _;
        });
        hidden(ObjectProto, _, tie);
        DESC || hidden(ArrayProto, _, tie);
      }(DESC ? uid('tie') : TO_LOCALE, ObjectProto[TO_LOCALE]);
      !function() {
        function define(target, mixin) {
          var keys = ownKeys(toObject(mixin)),
              length = keys.length,
              i = 0,
              key;
          while (length > i)
            defineProperty(target, key = keys[i++], getOwnDescriptor(mixin, key));
          return target;
        }
        ;
        $define(STATIC + FORCED, OBJECT, {
          isObject: isObject,
          classof: classof,
          define: define,
          make: function(proto, mixin) {
            return define(create(proto), mixin);
          }
        });
      }();
      $define(PROTO + FORCED, ARRAY, {turn: function(fn, target) {
          assertFunction(fn);
          var memo = target == undefined ? [] : Object(target),
              O = ES5Object(this),
              length = toLength(O.length),
              index = 0;
          while (length > index)
            if (fn(memo, O[index], index++, this) === false)
              break;
          return memo;
        }});
      if (framework)
        ArrayUnscopables.turn = true;
      !function(arrayStatics) {
        function setArrayStatics(keys, length) {
          forEach.call(array(keys), function(key) {
            if (key in ArrayProto)
              arrayStatics[key] = ctx(call, ArrayProto[key], length);
          });
        }
        setArrayStatics('pop,reverse,shift,keys,values,entries', 1);
        setArrayStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
        setArrayStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' + 'reduce,reduceRight,copyWithin,fill,turn');
        $define(STATIC, ARRAY, arrayStatics);
      }({});
      !function(numberMethods) {
        function NumberIterator(iterated) {
          set(this, ITER, {
            l: toLength(iterated),
            i: 0
          });
        }
        createIterator(NumberIterator, NUMBER, function() {
          var iter = this[ITER],
              i = iter.i++;
          return i < iter.l ? iterResult(0, i) : iterResult(1);
        });
        defineIterator(Number, NUMBER, function() {
          return new NumberIterator(this);
        });
        numberMethods.random = function(lim) {
          var a = +this,
              b = lim == undefined ? 0 : +lim,
              m = min(a, b);
          return random() * (max(a, b) - m) + m;
        };
        forEach.call(array('round,floor,ceil,abs,sin,asin,cos,acos,tan,atan,exp,sqrt,max,min,pow,atan2,' + 'acosh,asinh,atanh,cbrt,clz32,cosh,expm1,hypot,imul,log1p,log10,log2,sign,sinh,tanh,trunc'), function(key) {
          var fn = Math[key];
          if (fn)
            numberMethods[key] = function() {
              var args = [+this],
                  i = 0;
              while (arguments.length > i)
                args.push(arguments[i++]);
              return invoke(fn, args);
            };
        });
        $define(PROTO + FORCED, NUMBER, numberMethods);
      }({});
      !function() {
        var escapeHTMLDict = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&apos;'
        },
            unescapeHTMLDict = {},
            key;
        for (key in escapeHTMLDict)
          unescapeHTMLDict[escapeHTMLDict[key]] = key;
        $define(PROTO + FORCED, STRING, {
          escapeHTML: createReplacer(/[&<>"']/g, escapeHTMLDict),
          unescapeHTML: createReplacer(/&(?:amp|lt|gt|quot|apos);/g, unescapeHTMLDict)
        });
      }();
      !function(formatRegExp, flexioRegExp, locales, current, SECONDS, MINUTES, HOURS, MONTH, YEAR) {
        function createFormat(prefix) {
          return function(template, locale) {
            var that = this,
                dict = locales[has(locales, locale) ? locale : current];
            function get(unit) {
              return that[prefix + unit]();
            }
            return String(template).replace(formatRegExp, function(part) {
              switch (part) {
                case 's':
                  return get(SECONDS);
                case 'ss':
                  return lz(get(SECONDS));
                case 'm':
                  return get(MINUTES);
                case 'mm':
                  return lz(get(MINUTES));
                case 'h':
                  return get(HOURS);
                case 'hh':
                  return lz(get(HOURS));
                case 'D':
                  return get(DATE);
                case 'DD':
                  return lz(get(DATE));
                case 'W':
                  return dict[0][get('Day')];
                case 'N':
                  return get(MONTH) + 1;
                case 'NN':
                  return lz(get(MONTH) + 1);
                case 'M':
                  return dict[2][get(MONTH)];
                case 'MM':
                  return dict[1][get(MONTH)];
                case 'Y':
                  return get(YEAR);
                case 'YY':
                  return lz(get(YEAR) % 100);
              }
              return part;
            });
          };
        }
        function lz(num) {
          return num > 9 ? num : '0' + num;
        }
        function addLocale(lang, locale) {
          function split(index) {
            var result = [];
            forEach.call(array(locale.months), function(it) {
              result.push(it.replace(flexioRegExp, '$' + index));
            });
            return result;
          }
          locales[lang] = [array(locale.weekdays), split(1), split(2)];
          return core;
        }
        $define(PROTO + FORCED, DATE, {
          format: createFormat('get'),
          formatUTC: createFormat('getUTC')
        });
        addLocale(current, {
          weekdays: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday',
          months: 'January,February,March,April,May,June,July,August,September,October,November,December'
        });
        addLocale('ru', {
          weekdays: 'Воскресенье,Понедельник,Вторник,Среда,Четверг,Пятница,Суббота',
          months: 'Январ:я|ь,Феврал:я|ь,Март:а|,Апрел:я|ь,Ма:я|й,Июн:я|ь,' + 'Июл:я|ь,Август:а|,Сентябр:я|ь,Октябр:я|ь,Ноябр:я|ь,Декабр:я|ь'
        });
        core.locale = function(locale) {
          return has(locales, locale) ? current = locale : current;
        };
        core.addLocale = addLocale;
      }(/\b\w\w?\b/g, /:(.*)\|(.*)$/, {}, 'en', 'Seconds', 'Minutes', 'Hours', 'Month', 'FullYear');
    }(typeof self != 'undefined' && self.Math === Math ? self : Function('return this')(), true);
  })(require("process"));
  global.define = __define;
  return module.exports;
});



System.register("npm:core-js@0.4.10", ["npm:core-js@0.4.10/index"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:core-js@0.4.10/index");
  global.define = __define;
  return module.exports;
});



System.register("github:aurelia/metadata@0.3.1/system/origin", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      originStorage,
      Origin;
  function ensureType(value) {
    if (value instanceof Origin) {
      return value;
    }
    return new Origin(value);
  }
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      originStorage = new Map();
      Origin = (function() {
        function Origin(moduleId, moduleMember) {
          this.moduleId = moduleId;
          this.moduleMember = moduleMember;
        }
        _prototypeProperties(Origin, {
          get: {
            value: function get(fn) {
              var origin = originStorage.get(fn);
              if (origin !== undefined) {
                return origin;
              }
              if (typeof fn.origin === "function") {
                originStorage.set(fn, origin = ensureType(fn.origin()));
              } else if (fn.origin !== undefined) {
                originStorage.set(fn, origin = ensureType(fn.origin));
              }
              return origin;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          set: {
            value: function set(fn, origin) {
              if (Origin.get(fn) === undefined) {
                originStorage.set(fn, origin);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return Origin;
      })();
      _export("Origin", Origin);
    }
  };
});



System.register("github:aurelia/metadata@0.3.1/system/resource-type", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      ResourceType;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      ResourceType = (function() {
        function ResourceType() {}
        _prototypeProperties(ResourceType, null, {
          load: {
            value: function load(container, target) {
              return this;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          register: {
            value: function register(registry, name) {
              throw new Error("All descendents of \"ResourceType\" must implement the \"register\" method.");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ResourceType;
      })();
      _export("ResourceType", ResourceType);
    }
  };
});



System.register("github:aurelia/metadata@0.3.1/system/metadata", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      functionMetadataStorage,
      emptyArray,
      locateFunctionMetadataElsewhere,
      MetadataStorage,
      Metadata;
  function normalize(metadata, fn, replace) {
    if (metadata instanceof MetadataStorage) {
      if (replace) {
        fn.metadata = function() {
          return metadata;
        };
      }
      metadata.owner = fn;
      return metadata;
    }
    if (Array.isArray(metadata)) {
      return new MetadataStorage(metadata, fn);
    }
    throw new Error("Incorrect metadata format for " + metadata + ".");
  }
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      functionMetadataStorage = new Map();
      emptyArray = Object.freeze([]);
      MetadataStorage = (function() {
        function MetadataStorage(metadata, owner) {
          this.metadata = metadata;
          this.owner = owner;
        }
        _prototypeProperties(MetadataStorage, null, {
          first: {
            value: function first(type, searchPrototype) {
              var metadata = this.metadata,
                  i,
                  ii,
                  potential;
              if (metadata === undefined || metadata.length === 0) {
                if (searchPrototype && this.owner !== undefined) {
                  return Metadata.on(Object.getPrototypeOf(this.owner)).first(type, searchPrototype);
                }
                return null;
              }
              for (i = 0, ii = metadata.length; i < ii; ++i) {
                potential = metadata[i];
                if (potential instanceof type) {
                  return potential;
                }
              }
              if (searchPrototype && this.owner !== undefined) {
                return Metadata.on(Object.getPrototypeOf(this.owner)).first(type, searchPrototype);
              }
              return null;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          has: {
            value: function has(type, searchPrototype) {
              return this.first(type, searchPrototype) !== null;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          all: {
            value: function all(type, searchPrototype) {
              var metadata = this.metadata,
                  i,
                  ii,
                  found,
                  potential;
              if (metadata === undefined || metadata.length === 0) {
                if (searchPrototype && this.owner !== undefined) {
                  return Metadata.on(Object.getPrototypeOf(this.owner)).all(type, searchPrototype);
                }
                return emptyArray;
              }
              found = [];
              for (i = 0, ii = metadata.length; i < ii; ++i) {
                potential = metadata[i];
                if (potential instanceof type) {
                  found.push(potential);
                }
              }
              if (searchPrototype && this.owner !== undefined) {
                found = found.concat(Metadata.on(Object.getPrototypeOf(this.owner)).all(type, searchPrototype));
              }
              return found;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          add: {
            value: function add(instance) {
              if (this.metadata === undefined) {
                this.metadata = [];
              }
              this.last = instance;
              this.metadata.push(instance);
              return this;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          and: {
            value: function and(func) {
              func(this.last);
              return this;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return MetadataStorage;
      })();
      MetadataStorage.empty = Object.freeze(new MetadataStorage());
      Metadata = _export("Metadata", {
        on: function on(owner) {
          var metadata;
          if (!owner) {
            return MetadataStorage.empty;
          }
          metadata = functionMetadataStorage.get(owner);
          if (metadata === undefined) {
            if ("metadata" in owner) {
              if (typeof owner.metadata === "function") {
                functionMetadataStorage.set(owner, metadata = normalize(owner.metadata(), owner, true));
              } else {
                functionMetadataStorage.set(owner, metadata = normalize(owner.metadata, owner));
              }
            } else if (locateFunctionMetadataElsewhere !== undefined) {
              metadata = locateFunctionMetadataElsewhere(owner);
              if (metadata === undefined) {
                functionMetadataStorage.set(owner, metadata = new MetadataStorage(undefined, owner));
              } else {
                functionMetadataStorage.set(owner, metadata = normalize(metadata, owner));
              }
            } else {
              functionMetadataStorage.set(owner, metadata = new MetadataStorage(undefined, owner));
            }
          }
          return metadata;
        },
        configure: {
          location: function location(staticPropertyName) {
            this.locator(function(fn) {
              return fn[staticPropertyName];
            });
          },
          locator: function locator(loc) {
            if (locateFunctionMetadataElsewhere === undefined) {
              locateFunctionMetadataElsewhere = loc;
              return ;
            }
            var original = locateFunctionMetadataElsewhere;
            locateFunctionMetadataElsewhere = function(fn) {
              return original(fn) || loc(fn);
            };
          },
          classHelper: function classHelper(name, fn) {
            MetadataStorage.prototype[name] = function() {
              var context = Object.create(fn.prototype);
              var metadata = fn.apply(context, arguments) || context;
              this.add(metadata);
              return this;
            };
            Metadata[name] = function() {
              var storage = new MetadataStorage([]);
              return storage[name].apply(storage, arguments);
            };
          },
          functionHelper: function functionHelper(name, fn) {
            MetadataStorage.prototype[name] = function() {
              fn.apply(this, arguments);
              return this;
            };
            Metadata[name] = function() {
              var storage = new MetadataStorage([]);
              return storage[name].apply(storage, arguments);
            };
          }
        }
      });
    }
  };
});



System.register("github:aurelia/loader@0.3.3/system/index", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      hasTemplateElement,
      Loader;
  function importElements(frag, link, callback) {
    document.head.appendChild(frag);
    if (window.Polymer && Polymer.whenReady) {
      Polymer.whenReady(callback);
    } else {
      link.addEventListener("load", callback);
    }
  }
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      hasTemplateElement = "content" in document.createElement("template");
      Loader = (function() {
        function Loader() {}
        _prototypeProperties(Loader, {createDefaultLoader: {
            value: function createDefaultLoader() {
              throw new Error("No default loader module imported.");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {
          loadModule: {
            value: function loadModule(id) {
              throw new Error("Loaders must implement loadModule(id).");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          loadAllModules: {
            value: function loadAllModules(ids) {
              throw new Error("Loader must implement loadAllModules(ids).");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          loadTemplate: {
            value: function loadTemplate(url) {
              throw new Error("Loader must implement loadTemplate(url).");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          importDocument: {
            value: function importDocument(url) {
              return new Promise(function(resolve, reject) {
                var frag = document.createDocumentFragment();
                var link = document.createElement("link");
                link.rel = "import";
                link.href = url;
                frag.appendChild(link);
                importElements(frag, link, function() {
                  return resolve(link["import"]);
                });
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          importTemplate: {
            value: function importTemplate(url) {
              var _this = this;
              return this.importDocument(url).then(function(doc) {
                return _this.findTemplate(doc, url);
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          findTemplate: {
            value: function findTemplate(doc, url) {
              if (!hasTemplateElement) {
                HTMLTemplateElement.bootstrap(doc);
              }
              var template = doc.querySelector("template");
              if (!template) {
                throw new Error("There was no template element found in '" + url + "'.");
              }
              return template;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return Loader;
      })();
      _export("Loader", Loader);
    }
  };
});



System.register("github:aurelia/path@0.4.3/system/index", [], function(_export) {
  "use strict";
  var r20,
      rbracket,
      class2type;
  _export("relativeToFile", relativeToFile);
  _export("join", join);
  _export("buildQueryString", buildQueryString);
  function trimDots(ary) {
    var i,
        part;
    for (i = 0; i < ary.length; ++i) {
      part = ary[i];
      if (part === ".") {
        ary.splice(i, 1);
        i -= 1;
      } else if (part === "..") {
        if (i === 0 || i == 1 && ary[2] === ".." || ary[i - 1] === "..") {
          continue;
        } else if (i > 0) {
          ary.splice(i - 1, 2);
          i -= 2;
        }
      }
    }
  }
  function relativeToFile(name, file) {
    var lastIndex,
        normalizedBaseParts,
        fileParts = file && file.split("/");
    name = name.trim();
    name = name.split("/");
    if (name[0].charAt(0) === "." && fileParts) {
      normalizedBaseParts = fileParts.slice(0, fileParts.length - 1);
      name = normalizedBaseParts.concat(name);
    }
    trimDots(name);
    return name.join("/");
  }
  function join(path1, path2) {
    var url1,
        url2,
        url3,
        i,
        ii,
        urlPrefix;
    if (!path1) {
      return path2;
    }
    if (!path2) {
      return path1;
    }
    urlPrefix = path1.indexOf("/") === 0 ? "/" : "";
    url1 = path1.split("/");
    url2 = path2.split("/");
    url3 = [];
    for (i = 0, ii = url1.length; i < ii; ++i) {
      if (url1[i] == "..") {
        url3.pop();
      } else if (url1[i] == "." || url1[i] == "") {
        continue;
      } else {
        url3.push(url1[i]);
      }
    }
    for (i = 0, ii = url2.length; i < ii; ++i) {
      if (url2[i] == "..") {
        url3.pop();
      } else if (url2[i] == "." || url2[i] == "") {
        continue;
      } else {
        url3.push(url2[i]);
      }
    }
    return urlPrefix + url3.join("/").replace(/\:\//g, "://");
    ;
  }
  function type(obj) {
    if (obj == null) {
      return obj + "";
    }
    return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
  }
  function buildQueryString(a, traditional) {
    var prefix,
        s = [],
        add = function(key, value) {
          value = typeof value === "function" ? value() : value == null ? "" : value;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
    for (prefix in a) {
      _buildQueryString(prefix, a[prefix], traditional, add);
    }
    return s.join("&").replace(r20, "+");
  }
  function _buildQueryString(prefix, obj, traditional, add) {
    var name;
    if (Array.isArray(obj)) {
      obj.forEach(function(v, i) {
        if (traditional || rbracket.test(prefix)) {
          add(prefix, v);
        } else {
          _buildQueryString(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && type(obj) === "object") {
      for (name in obj) {
        _buildQueryString(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      add(prefix, obj);
    }
  }
  return {
    setters: [],
    execute: function() {
      r20 = /%20/g;
      rbracket = /\[\]$/;
      class2type = {};
      "Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function(name, i) {
        class2type["[object " + name + "]"] = name.toLowerCase();
      });
    }
  };
});



System.register("github:aurelia/logging@0.2.2/system/index", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      levels,
      loggers,
      logLevel,
      appenders,
      slice,
      loggerConstructionKey,
      Logger;
  _export("getLogger", getLogger);
  _export("addAppender", addAppender);
  _export("setLevel", setLevel);
  function log(logger, level, args) {
    var i = appenders.length,
        current;
    args = slice.call(args);
    args.unshift(logger);
    while (i--) {
      current = appenders[i];
      current[level].apply(current, args);
    }
  }
  function debug() {
    if (logLevel < 4) {
      return ;
    }
    log(this, "debug", arguments);
  }
  function info() {
    if (logLevel < 3) {
      return ;
    }
    log(this, "info", arguments);
  }
  function warn() {
    if (logLevel < 2) {
      return ;
    }
    log(this, "warn", arguments);
  }
  function error() {
    if (logLevel < 1) {
      return ;
    }
    log(this, "error", arguments);
  }
  function connectLogger(logger) {
    logger.debug = debug;
    logger.info = info;
    logger.warn = warn;
    logger.error = error;
  }
  function createLogger(id) {
    var logger = new Logger(id, loggerConstructionKey);
    if (appenders.length) {
      connectLogger(logger);
    }
    return logger;
  }
  function getLogger(id) {
    return loggers[id] || (loggers[id] = createLogger(id));
  }
  function addAppender(appender) {
    appenders.push(appender);
    if (appenders.length === 1) {
      for (var key in loggers) {
        connectLogger(loggers[key]);
      }
    }
  }
  function setLevel(level) {
    logLevel = level;
  }
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      levels = _export("levels", {
        none: 0,
        error: 1,
        warn: 2,
        info: 3,
        debug: 4
      });
      loggers = {};
      logLevel = levels.none;
      appenders = [];
      slice = Array.prototype.slice;
      loggerConstructionKey = {};
      Logger = (function() {
        function Logger(id, key) {
          if (key !== loggerConstructionKey) {
            throw new Error("You cannot instantiate \"Logger\". Use the \"getLogger\" API instead.");
          }
          this.id = id;
        }
        _prototypeProperties(Logger, null, {
          debug: {
            value: function debug() {},
            writable: true,
            enumerable: true,
            configurable: true
          },
          info: {
            value: function info() {},
            writable: true,
            enumerable: true,
            configurable: true
          },
          warn: {
            value: function warn() {},
            writable: true,
            enumerable: true,
            configurable: true
          },
          error: {
            value: function error() {},
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return Logger;
      })();
      _export("Logger", Logger);
    }
  };
});



System.register("github:aurelia/dependency-injection@0.4.2/system/metadata", [], function(_export) {
  "use strict";
  var _inherits,
      _prototypeProperties,
      Registration,
      Transient,
      Singleton,
      Resolver,
      Lazy,
      All,
      Optional,
      Parent;
  return {
    setters: [],
    execute: function() {
      _inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          subClass.__proto__ = superClass;
      };
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      Registration = _export("Registration", (function() {
        function Registration() {}
        _prototypeProperties(Registration, null, {register: {
            value: function register(container, key, fn) {
              throw new Error("A custom Registration must implement register(container, key, fn).");
            },
            writable: true,
            configurable: true
          }});
        return Registration;
      })());
      Transient = _export("Transient", (function(Registration) {
        function Transient(key) {
          this.key = key;
        }
        _inherits(Transient, Registration);
        _prototypeProperties(Transient, null, {register: {
            value: function register(container, key, fn) {
              container.registerTransient(this.key || key, fn);
            },
            writable: true,
            configurable: true
          }});
        return Transient;
      })(Registration));
      Singleton = _export("Singleton", (function(Registration) {
        function Singleton(key) {
          this.key = key;
        }
        _inherits(Singleton, Registration);
        _prototypeProperties(Singleton, null, {register: {
            value: function register(container, key, fn) {
              container.registerSingleton(this.key || key, fn);
            },
            writable: true,
            configurable: true
          }});
        return Singleton;
      })(Registration));
      Resolver = _export("Resolver", (function() {
        function Resolver() {}
        _prototypeProperties(Resolver, null, {get: {
            value: function get(container) {
              throw new Error("A custom Resolver must implement get(container) and return the resolved instance(s).");
            },
            writable: true,
            configurable: true
          }});
        return Resolver;
      })());
      Lazy = _export("Lazy", (function(Resolver) {
        function Lazy(key) {
          this.key = key;
        }
        _inherits(Lazy, Resolver);
        _prototypeProperties(Lazy, {of: {
            value: function of(key) {
              return new Lazy(key);
            },
            writable: true,
            configurable: true
          }}, {get: {
            value: function get(container) {
              var _this = this;
              return function() {
                return container.get(_this.key);
              };
            },
            writable: true,
            configurable: true
          }});
        return Lazy;
      })(Resolver));
      All = _export("All", (function(Resolver) {
        function All(key) {
          this.key = key;
        }
        _inherits(All, Resolver);
        _prototypeProperties(All, {of: {
            value: function of(key) {
              return new All(key);
            },
            writable: true,
            configurable: true
          }}, {get: {
            value: function get(container) {
              return container.getAll(this.key);
            },
            writable: true,
            configurable: true
          }});
        return All;
      })(Resolver));
      Optional = _export("Optional", (function(Resolver) {
        function Optional(key) {
          var checkParent = arguments[1] === undefined ? false : arguments[1];
          this.key = key;
          this.checkParent = checkParent;
        }
        _inherits(Optional, Resolver);
        _prototypeProperties(Optional, {of: {
            value: function of(key) {
              var checkParent = arguments[1] === undefined ? false : arguments[1];
              return new Optional(key, checkParent);
            },
            writable: true,
            configurable: true
          }}, {get: {
            value: function get(container) {
              if (container.hasHandler(this.key, this.checkParent)) {
                return container.get(this.key);
              }
              return null;
            },
            writable: true,
            configurable: true
          }});
        return Optional;
      })(Resolver));
      Parent = _export("Parent", (function(Resolver) {
        function Parent(key) {
          this.key = key;
        }
        _inherits(Parent, Resolver);
        _prototypeProperties(Parent, {of: {
            value: function of(key) {
              return new Parent(key);
            },
            writable: true,
            configurable: true
          }}, {get: {
            value: function get(container) {
              return container.parent ? container.parent.get(this.key) : null;
            },
            writable: true,
            configurable: true
          }});
        return Parent;
      })(Resolver));
    }
  };
});



System.register("github:aurelia/dependency-injection@0.4.2/system/util", [], function(_export) {
  "use strict";
  _export("isClass", isClass);
  function test() {}
  function isUpperCase(char) {
    return char.toUpperCase() === char;
  }
  function isClass(clsOrFunction) {
    if (clsOrFunction.name) {
      return isUpperCase(clsOrFunction.name.charAt(0));
    }
    return Object.keys(clsOrFunction.prototype).length > 0;
  }
  return {
    setters: [],
    execute: function() {
      if (!test.name) {
        Object.defineProperty(Function.prototype, "name", {get: function() {
            var name = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];
            Object.defineProperty(this, "name", {value: name});
            return name;
          }});
      }
    }
  };
});



System.register("github:aurelia/templating@0.8.11/system/util", [], function(_export) {
  "use strict";
  var capitalMatcher;
  _export("hyphenate", hyphenate);
  function addHyphenAndLower(char) {
    return "-" + char.toLowerCase();
  }
  function hyphenate(name) {
    return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, addHyphenAndLower);
  }
  return {
    setters: [],
    execute: function() {
      capitalMatcher = /([A-Z])/g;
    }
  };
});



System.register("github:aurelia/binding@0.3.4/system/value-converter", ["aurelia-metadata"], function(_export) {
  "use strict";
  var ResourceType,
      _prototypeProperties,
      _inherits,
      capitalMatcher,
      ValueConverter;
  function addHyphenAndLower(char) {
    return "-" + char.toLowerCase();
  }
  function hyphenate(name) {
    return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, addHyphenAndLower);
  }
  return {
    setters: [function(_aureliaMetadata) {
      ResourceType = _aureliaMetadata.ResourceType;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          subClass.__proto__ = superClass;
      };
      capitalMatcher = /([A-Z])/g;
      ValueConverter = _export("ValueConverter", (function(ResourceType) {
        function ValueConverter(name) {
          this.name = name;
        }
        _inherits(ValueConverter, ResourceType);
        _prototypeProperties(ValueConverter, {convention: {
            value: function convention(name) {
              if (name.endsWith("ValueConverter")) {
                return new ValueConverter(hyphenate(name.substring(0, name.length - 14)));
              }
            },
            writable: true,
            configurable: true
          }}, {
          load: {
            value: function load(container, target) {
              this.instance = container.get(target);
              return Promise.resolve(this);
            },
            writable: true,
            configurable: true
          },
          register: {
            value: function register(registry, name) {
              registry.registerValueConverter(name || this.name, this.instance);
            },
            writable: true,
            configurable: true
          }
        });
        return ValueConverter;
      })(ResourceType));
    }
  };
});



System.register("github:aurelia/binding@0.3.4/system/event-manager", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      DefaultEventStrategy,
      EventManager;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      DefaultEventStrategy = (function() {
        function DefaultEventStrategy() {
          this.delegatedEvents = {};
        }
        _prototypeProperties(DefaultEventStrategy, null, {
          ensureDelegatedEvent: {
            value: function ensureDelegatedEvent(eventName) {
              if (this.delegatedEvents[eventName]) {
                return ;
              }
              this.delegatedEvents[eventName] = true;
              document.addEventListener(eventName, this.handleDelegatedEvent.bind(this), false);
            },
            writable: true,
            configurable: true
          },
          handleCallbackResult: {
            value: function handleCallbackResult(result) {},
            writable: true,
            configurable: true
          },
          handleDelegatedEvent: {
            value: function handleDelegatedEvent(event) {
              event = event || window.event;
              var target = event.target || event.srcElement,
                  callback;
              while (target && !callback) {
                if (target.delegatedEvents) {
                  callback = target.delegatedEvents[event.type];
                }
                if (!callback) {
                  target = target.parentNode;
                }
              }
              if (callback) {
                this.handleCallbackResult(callback(event));
              }
            },
            writable: true,
            configurable: true
          },
          createDirectEventCallback: {
            value: function createDirectEventCallback(callback) {
              var _this = this;
              return function(event) {
                _this.handleCallbackResult(callback(event));
              };
            },
            writable: true,
            configurable: true
          },
          subscribeToDelegatedEvent: {
            value: function subscribeToDelegatedEvent(target, targetEvent, callback) {
              var lookup = target.delegatedEvents || (target.delegatedEvents = {});
              this.ensureDelegatedEvent(targetEvent);
              lookup[targetEvent] = callback;
              return function() {
                lookup[targetEvent] = null;
              };
            },
            writable: true,
            configurable: true
          },
          subscribeToDirectEvent: {
            value: function subscribeToDirectEvent(target, targetEvent, callback) {
              var directEventCallback = this.createDirectEventCallback(callback);
              target.addEventListener(targetEvent, directEventCallback, false);
              return function() {
                target.removeEventListener(targetEvent, directEventCallback);
              };
            },
            writable: true,
            configurable: true
          },
          subscribe: {
            value: function subscribe(target, targetEvent, callback, delegate) {
              if (delegate) {
                return this.subscribeToDirectEvent(target, targetEvent, callback);
              } else {
                return this.subscribeToDelegatedEvent(target, targetEvent, callback);
              }
            },
            writable: true,
            configurable: true
          }
        });
        return DefaultEventStrategy;
      })();
      EventManager = _export("EventManager", (function() {
        function EventManager() {
          this.elementHandlerLookup = {};
          this.eventStrategyLookup = {};
          this.registerElementConfig({
            tagName: "input",
            properties: {
              value: ["change", "input"],
              checked: ["change", "input"]
            }
          });
          this.registerElementConfig({
            tagName: "textarea",
            properties: {value: ["change", "input"]}
          });
          this.registerElementConfig({
            tagName: "select",
            properties: {value: ["change"]}
          });
          this.defaultEventStrategy = new DefaultEventStrategy();
        }
        _prototypeProperties(EventManager, null, {
          registerElementConfig: {
            value: function registerElementConfig(config) {
              this.elementHandlerLookup[config.tagName.toLowerCase()] = {subscribe: function subscribe(target, property, callback) {
                  var events = config.properties[property];
                  if (events) {
                    events.forEach(function(changeEvent) {
                      target.addEventListener(changeEvent, callback, false);
                    });
                    return function() {
                      events.forEach(function(changeEvent) {
                        target.removeEventListener(changeEvent, callback);
                      });
                    };
                  } else {
                    throw new Error("Cannot observe property " + property + " of " + config.tagName + ". No events found.");
                  }
                }};
            },
            writable: true,
            configurable: true
          },
          registerElementHandler: {
            value: function registerElementHandler(tagName, handler) {
              this.elementHandlerLookup[tagName.toLowerCase()] = handler;
            },
            writable: true,
            configurable: true
          },
          registerEventStrategy: {
            value: function registerEventStrategy(eventName, strategy) {
              this.eventStrategyLookup[eventName] = strategy;
            },
            writable: true,
            configurable: true
          },
          getElementHandler: {
            value: function getElementHandler(target) {
              if (target.tagName) {
                var handler = this.elementHandlerLookup[target.tagName.toLowerCase()];
                if (handler) {
                  return handler;
                }
              }
              return null;
            },
            writable: true,
            configurable: true
          },
          addEventListener: {
            value: function addEventListener(target, targetEvent, callback, delegate) {
              return (this.eventStrategyLookup[targetEvent] || this.defaultEventStrategy).subscribe(target, targetEvent, callback, delegate);
            },
            writable: true,
            configurable: true
          }
        });
        return EventManager;
      })());
    }
  };
});



System.register("github:aurelia/task-queue@0.2.3/system/index", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      BrowserMutationObserver,
      hasSetImmediate,
      TaskQueue;
  function makeRequestFlushFromMutationObserver(flush) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(flush);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestFlush() {
      toggle = -toggle;
      node.data = toggle;
    };
  }
  function makeRequestFlushFromTimer(flush) {
    return function requestFlush() {
      var timeoutHandle = setTimeout(handleFlushTimer, 0);
      var intervalHandle = setInterval(handleFlushTimer, 50);
      function handleFlushTimer() {
        clearTimeout(timeoutHandle);
        clearInterval(intervalHandle);
        flush();
      }
    };
  }
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      BrowserMutationObserver = window.MutationObserver || window.WebKitMutationObserver;
      hasSetImmediate = typeof setImmediate === "function";
      TaskQueue = _export("TaskQueue", (function() {
        function TaskQueue() {
          var _this = this;
          this.microTaskQueue = [];
          this.microTaskQueueCapacity = 1024;
          this.taskQueue = [];
          if (typeof BrowserMutationObserver === "function") {
            this.requestFlushMicroTaskQueue = makeRequestFlushFromMutationObserver(function() {
              return _this.flushMicroTaskQueue();
            });
          } else {
            this.requestFlushMicroTaskQueue = makeRequestFlushFromTimer(function() {
              return _this.flushMicroTaskQueue();
            });
          }
          this.requestFlushTaskQueue = makeRequestFlushFromTimer(function() {
            return _this.flushTaskQueue();
          });
        }
        _prototypeProperties(TaskQueue, null, {
          queueMicroTask: {
            value: function queueMicroTask(task) {
              if (this.microTaskQueue.length < 1) {
                this.requestFlushMicroTaskQueue();
              }
              this.microTaskQueue.push(task);
            },
            writable: true,
            configurable: true
          },
          queueTask: {
            value: function queueTask(task) {
              if (this.taskQueue.length < 1) {
                this.requestFlushTaskQueue();
              }
              this.taskQueue.push(task);
            },
            writable: true,
            configurable: true
          },
          flushTaskQueue: {
            value: function flushTaskQueue() {
              var queue = this.taskQueue,
                  index = 0,
                  task;
              this.taskQueue = [];
              while (index < queue.length) {
                task = queue[index];
                try {
                  task.call();
                } catch (error) {
                  this.onError(error, task);
                }
                index++;
              }
            },
            writable: true,
            configurable: true
          },
          flushMicroTaskQueue: {
            value: function flushMicroTaskQueue() {
              var queue = this.microTaskQueue,
                  capacity = this.microTaskQueueCapacity,
                  index = 0,
                  task;
              while (index < queue.length) {
                task = queue[index];
                try {
                  task.call();
                } catch (error) {
                  this.onError(error, task);
                }
                index++;
                if (index > capacity) {
                  for (var scan = 0; scan < index; scan++) {
                    queue[scan] = queue[scan + index];
                  }
                  queue.length -= index;
                  index = 0;
                }
              }
              queue.length = 0;
            },
            writable: true,
            configurable: true
          },
          onError: {
            value: function onError(error, task) {
              if ("onError" in task) {
                task.onError(error);
              } else if (hasSetImmediate) {
                setImmediate(function() {
                  throw error;
                });
              } else {
                setTimeout(function() {
                  throw error;
                }, 0);
              }
            },
            writable: true,
            configurable: true
          }
        });
        return TaskQueue;
      })());
    }
  };
});



System.register("github:aurelia/binding@0.3.4/system/array-change-records", [], function(_export) {
  "use strict";
  var EDIT_LEAVE,
      EDIT_UPDATE,
      EDIT_ADD,
      EDIT_DELETE,
      arraySplice;
  _export("calcSplices", calcSplices);
  _export("projectArraySplices", projectArraySplices);
  function isIndex(s) {
    return +s === s >>> 0;
  }
  function toNumber(s) {
    return +s;
  }
  function newSplice(index, removed, addedCount) {
    return {
      index: index,
      removed: removed,
      addedCount: addedCount
    };
  }
  function ArraySplice() {}
  function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    return arraySplice.calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd);
  }
  function intersect(start1, end1, start2, end2) {
    if (end1 < start2 || end2 < start1)
      return -1;
    if (end1 == start2 || end2 == start1)
      return 0;
    if (start1 < start2) {
      if (end1 < end2)
        return end1 - start2;
      else
        return end2 - start2;
    } else {
      if (end2 < end1)
        return end2 - start1;
      else
        return end1 - start1;
    }
  }
  function mergeSplice(splices, index, removed, addedCount) {
    var splice = newSplice(index, removed, addedCount);
    var inserted = false;
    var insertionOffset = 0;
    for (var i = 0; i < splices.length; i++) {
      var current = splices[i];
      current.index += insertionOffset;
      if (inserted)
        continue;
      var intersectCount = intersect(splice.index, splice.index + splice.removed.length, current.index, current.index + current.addedCount);
      if (intersectCount >= 0) {
        splices.splice(i, 1);
        i--;
        insertionOffset -= current.addedCount - current.removed.length;
        splice.addedCount += current.addedCount - intersectCount;
        var deleteCount = splice.removed.length + current.removed.length - intersectCount;
        if (!splice.addedCount && !deleteCount) {
          inserted = true;
        } else {
          var removed = current.removed;
          if (splice.index < current.index) {
            var prepend = splice.removed.slice(0, current.index - splice.index);
            Array.prototype.push.apply(prepend, removed);
            removed = prepend;
          }
          if (splice.index + splice.removed.length > current.index + current.addedCount) {
            var append = splice.removed.slice(current.index + current.addedCount - splice.index);
            Array.prototype.push.apply(removed, append);
          }
          splice.removed = removed;
          if (current.index < splice.index) {
            splice.index = current.index;
          }
        }
      } else if (splice.index < current.index) {
        inserted = true;
        splices.splice(i, 0, splice);
        i++;
        var offset = splice.addedCount - splice.removed.length;
        current.index += offset;
        insertionOffset += offset;
      }
    }
    if (!inserted)
      splices.push(splice);
  }
  function createInitialSplices(array, changeRecords) {
    var splices = [];
    for (var i = 0; i < changeRecords.length; i++) {
      var record = changeRecords[i];
      switch (record.type) {
        case "splice":
          mergeSplice(splices, record.index, record.removed.slice(), record.addedCount);
          break;
        case "add":
        case "update":
        case "delete":
          if (!isIndex(record.name))
            continue;
          var index = toNumber(record.name);
          if (index < 0)
            continue;
          mergeSplice(splices, index, [record.oldValue], 1);
          break;
        default:
          console.error("Unexpected record type: " + JSON.stringify(record));
          break;
      }
    }
    return splices;
  }
  function projectArraySplices(array, changeRecords) {
    var splices = [];
    createInitialSplices(array, changeRecords).forEach(function(splice) {
      if (splice.addedCount == 1 && splice.removed.length == 1) {
        if (splice.removed[0] !== array[splice.index])
          splices.push(splice);
        return ;
      }
      ;
      splices = splices.concat(calcSplices(array, splice.index, splice.index + splice.addedCount, splice.removed, 0, splice.removed.length));
    });
    return splices;
  }
  return {
    setters: [],
    execute: function() {
      EDIT_LEAVE = 0;
      EDIT_UPDATE = 1;
      EDIT_ADD = 2;
      EDIT_DELETE = 3;
      ArraySplice.prototype = {
        calcEditDistances: function(current, currentStart, currentEnd, old, oldStart, oldEnd) {
          var rowCount = oldEnd - oldStart + 1;
          var columnCount = currentEnd - currentStart + 1;
          var distances = new Array(rowCount);
          var i,
              j,
              north,
              west;
          for (i = 0; i < rowCount; ++i) {
            distances[i] = new Array(columnCount);
            distances[i][0] = i;
          }
          for (j = 0; j < columnCount; ++j) {
            distances[0][j] = j;
          }
          for (i = 1; i < rowCount; ++i) {
            for (j = 1; j < columnCount; ++j) {
              if (this.equals(current[currentStart + j - 1], old[oldStart + i - 1]))
                distances[i][j] = distances[i - 1][j - 1];
              else {
                north = distances[i - 1][j] + 1;
                west = distances[i][j - 1] + 1;
                distances[i][j] = north < west ? north : west;
              }
            }
          }
          return distances;
        },
        spliceOperationsFromEditDistances: function(distances) {
          var i = distances.length - 1;
          var j = distances[0].length - 1;
          var current = distances[i][j];
          var edits = [];
          while (i > 0 || j > 0) {
            if (i == 0) {
              edits.push(EDIT_ADD);
              j--;
              continue;
            }
            if (j == 0) {
              edits.push(EDIT_DELETE);
              i--;
              continue;
            }
            var northWest = distances[i - 1][j - 1];
            var west = distances[i - 1][j];
            var north = distances[i][j - 1];
            var min;
            if (west < north)
              min = west < northWest ? west : northWest;
            else
              min = north < northWest ? north : northWest;
            if (min == northWest) {
              if (northWest == current) {
                edits.push(EDIT_LEAVE);
              } else {
                edits.push(EDIT_UPDATE);
                current = northWest;
              }
              i--;
              j--;
            } else if (min == west) {
              edits.push(EDIT_DELETE);
              i--;
              current = west;
            } else {
              edits.push(EDIT_ADD);
              j--;
              current = north;
            }
          }
          edits.reverse();
          return edits;
        },
        calcSplices: function(current, currentStart, currentEnd, old, oldStart, oldEnd) {
          var prefixCount = 0;
          var suffixCount = 0;
          var minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
          if (currentStart == 0 && oldStart == 0)
            prefixCount = this.sharedPrefix(current, old, minLength);
          if (currentEnd == current.length && oldEnd == old.length)
            suffixCount = this.sharedSuffix(current, old, minLength - prefixCount);
          currentStart += prefixCount;
          oldStart += prefixCount;
          currentEnd -= suffixCount;
          oldEnd -= suffixCount;
          if (currentEnd - currentStart == 0 && oldEnd - oldStart == 0)
            return [];
          if (currentStart == currentEnd) {
            var splice = newSplice(currentStart, [], 0);
            while (oldStart < oldEnd)
              splice.removed.push(old[oldStart++]);
            return [splice];
          } else if (oldStart == oldEnd)
            return [newSplice(currentStart, [], currentEnd - currentStart)];
          var ops = this.spliceOperationsFromEditDistances(this.calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));
          var splice = undefined;
          var splices = [];
          var index = currentStart;
          var oldIndex = oldStart;
          for (var i = 0; i < ops.length; ++i) {
            switch (ops[i]) {
              case EDIT_LEAVE:
                if (splice) {
                  splices.push(splice);
                  splice = undefined;
                }
                index++;
                oldIndex++;
                break;
              case EDIT_UPDATE:
                if (!splice)
                  splice = newSplice(index, [], 0);
                splice.addedCount++;
                index++;
                splice.removed.push(old[oldIndex]);
                oldIndex++;
                break;
              case EDIT_ADD:
                if (!splice)
                  splice = newSplice(index, [], 0);
                splice.addedCount++;
                index++;
                break;
              case EDIT_DELETE:
                if (!splice)
                  splice = newSplice(index, [], 0);
                splice.removed.push(old[oldIndex]);
                oldIndex++;
                break;
            }
          }
          if (splice) {
            splices.push(splice);
          }
          return splices;
        },
        sharedPrefix: function(current, old, searchLength) {
          for (var i = 0; i < searchLength; ++i)
            if (!this.equals(current[i], old[i]))
              return i;
          return searchLength;
        },
        sharedSuffix: function(current, old, searchLength) {
          var index1 = current.length;
          var index2 = old.length;
          var count = 0;
          while (count < searchLength && this.equals(current[--index1], old[--index2]))
            count++;
          return count;
        },
        calculateSplices: function(current, previous) {
          return this.calcSplices(current, 0, current.length, previous, 0, previous.length);
        },
        equals: function(currentValue, previousValue) {
          return currentValue === previousValue;
        }
      };
      arraySplice = new ArraySplice();
    }
  };
});



System.register("github:aurelia/binding@0.3.4/system/dirty-checking", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      DirtyChecker,
      DirtyCheckProperty;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      DirtyChecker = _export("DirtyChecker", (function() {
        function DirtyChecker() {
          this.tracked = [];
          this.checkDelay = 120;
        }
        _prototypeProperties(DirtyChecker, null, {
          addProperty: {
            value: function addProperty(property) {
              var tracked = this.tracked;
              tracked.push(property);
              if (tracked.length === 1) {
                this.scheduleDirtyCheck();
              }
            },
            writable: true,
            configurable: true
          },
          removeProperty: {
            value: function removeProperty(property) {
              var tracked = this.tracked;
              tracked.splice(tracked.indexOf(property), 1);
            },
            writable: true,
            configurable: true
          },
          scheduleDirtyCheck: {
            value: function scheduleDirtyCheck() {
              var _this = this;
              setTimeout(function() {
                return _this.check();
              }, this.checkDelay);
            },
            writable: true,
            configurable: true
          },
          check: {
            value: function check() {
              var tracked = this.tracked,
                  i = tracked.length;
              while (i--) {
                var current = tracked[i];
                if (current.isDirty()) {
                  current.call();
                }
              }
              if (tracked.length) {
                this.scheduleDirtyCheck();
              }
            },
            writable: true,
            configurable: true
          }
        });
        return DirtyChecker;
      })());
      DirtyCheckProperty = _export("DirtyCheckProperty", (function() {
        function DirtyCheckProperty(dirtyChecker, obj, propertyName) {
          this.dirtyChecker = dirtyChecker;
          this.obj = obj;
          this.propertyName = propertyName;
          this.callbacks = [];
          this.isSVG = obj instanceof SVGElement;
        }
        _prototypeProperties(DirtyCheckProperty, null, {
          getValue: {
            value: function getValue() {
              return this.obj[this.propertyName];
            },
            writable: true,
            configurable: true
          },
          setValue: {
            value: function setValue(newValue) {
              if (this.isSVG) {
                this.obj.setAttributeNS(null, this.propertyName, newValue);
              } else {
                this.obj[this.propertyName] = newValue;
              }
            },
            writable: true,
            configurable: true
          },
          call: {
            value: function call() {
              var callbacks = this.callbacks,
                  i = callbacks.length,
                  oldValue = this.oldValue,
                  newValue = this.getValue();
              while (i--) {
                callbacks[i](newValue, oldValue);
              }
              this.oldValue = newValue;
            },
            writable: true,
            configurable: true
          },
          isDirty: {
            value: function isDirty() {
              return this.oldValue !== this.getValue();
            },
            writable: true,
            configurable: true
          },
          beginTracking: {
            value: function beginTracking() {
              this.tracking = true;
              this.oldValue = this.newValue = this.getValue();
              this.dirtyChecker.addProperty(this);
            },
            writable: true,
            configurable: true
          },
          endTracking: {
            value: function endTracking() {
              this.tracking = false;
              this.dirtyChecker.removeProperty(this);
            },
            writable: true,
            configurable: true
          },
          subscribe: {
            value: function subscribe(callback) {
              var callbacks = this.callbacks,
                  that = this;
              callbacks.push(callback);
              if (!this.tracking) {
                this.beginTracking();
              }
              return function() {
                callbacks.splice(callbacks.indexOf(callback), 1);
                if (callbacks.length === 0) {
                  that.endTracking();
                }
              };
            },
            writable: true,
            configurable: true
          }
        });
        return DirtyCheckProperty;
      })());
    }
  };
});



System.register("github:aurelia/binding@0.3.4/system/property-observation", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      SetterObserver,
      OoObjectObserver,
      OoPropertyObserver,
      ElementObserver;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      SetterObserver = _export("SetterObserver", (function() {
        function SetterObserver(taskQueue, obj, propertyName) {
          this.taskQueue = taskQueue;
          this.obj = obj;
          this.propertyName = propertyName;
          this.callbacks = [];
          this.queued = false;
          this.observing = false;
          this.isSVG = obj instanceof SVGElement;
        }
        _prototypeProperties(SetterObserver, null, {
          getValue: {
            value: function getValue() {
              return this.obj[this.propertyName];
            },
            writable: true,
            configurable: true
          },
          setValue: {
            value: function setValue(newValue) {
              if (this.isSVG) {
                this.obj.setAttributeNS(null, this.propertyName, newValue);
              } else {
                this.obj[this.propertyName] = newValue;
              }
            },
            writable: true,
            configurable: true
          },
          getterValue: {
            value: function getterValue() {
              return this.currentValue;
            },
            writable: true,
            configurable: true
          },
          setterValue: {
            value: function setterValue(newValue) {
              var oldValue = this.currentValue;
              if (oldValue != newValue) {
                if (!this.queued) {
                  this.oldValue = oldValue;
                  this.queued = true;
                  this.taskQueue.queueMicroTask(this);
                }
                this.currentValue = newValue;
              }
            },
            writable: true,
            configurable: true
          },
          call: {
            value: function call() {
              var callbacks = this.callbacks,
                  i = callbacks.length,
                  oldValue = this.oldValue,
                  newValue = this.currentValue;
              this.queued = false;
              while (i--) {
                callbacks[i](newValue, oldValue);
              }
            },
            writable: true,
            configurable: true
          },
          subscribe: {
            value: function subscribe(callback) {
              var callbacks = this.callbacks;
              callbacks.push(callback);
              if (!this.observing) {
                this.convertProperty();
              }
              return function() {
                callbacks.splice(callbacks.indexOf(callback), 1);
              };
            },
            writable: true,
            configurable: true
          },
          convertProperty: {
            value: function convertProperty() {
              this.observing = true;
              this.currentValue = this.obj[this.propertyName];
              this.setValue = this.setterValue;
              this.getValue = this.getterValue;
              try {
                Object.defineProperty(this.obj, this.propertyName, {
                  configurable: true,
                  enumerable: true,
                  get: this.getValue.bind(this),
                  set: this.setValue.bind(this)
                });
              } catch (_) {}
            },
            writable: true,
            configurable: true
          }
        });
        return SetterObserver;
      })());
      OoObjectObserver = _export("OoObjectObserver", (function() {
        function OoObjectObserver(obj) {
          this.obj = obj;
          this.observers = {};
        }
        _prototypeProperties(OoObjectObserver, null, {
          subscribe: {
            value: function subscribe(propertyObserver, callback) {
              var _this = this;
              var callbacks = propertyObserver.callbacks;
              callbacks.push(callback);
              if (!this.observing) {
                this.observing = true;
                try {
                  Object.observe(this.obj, function(changes) {
                    return _this.handleChanges(changes);
                  }, ["update", "add"]);
                } catch (_) {}
              }
              return function() {
                callbacks.splice(callbacks.indexOf(callback), 1);
              };
            },
            writable: true,
            configurable: true
          },
          getObserver: {
            value: function getObserver(propertyName) {
              var propertyObserver = this.observers[propertyName] || (this.observers[propertyName] = new OoPropertyObserver(this, this.obj, propertyName));
              return propertyObserver;
            },
            writable: true,
            configurable: true
          },
          handleChanges: {
            value: function handleChanges(changeRecords) {
              var updates = {},
                  observers = this.observers,
                  i = changeRecords.length;
              while (i--) {
                var change = changeRecords[i],
                    name = change.name;
                if (!(name in updates)) {
                  var observer = observers[name];
                  updates[name] = true;
                  if (observer) {
                    observer.trigger(change.object[name], change.oldValue);
                  }
                }
              }
            },
            writable: true,
            configurable: true
          }
        });
        return OoObjectObserver;
      })());
      OoPropertyObserver = _export("OoPropertyObserver", (function() {
        function OoPropertyObserver(owner, obj, propertyName) {
          this.owner = owner;
          this.obj = obj;
          this.propertyName = propertyName;
          this.callbacks = [];
          this.isSVG = obj instanceof SVGElement;
        }
        _prototypeProperties(OoPropertyObserver, null, {
          getValue: {
            value: function getValue() {
              return this.obj[this.propertyName];
            },
            writable: true,
            configurable: true
          },
          setValue: {
            value: function setValue(newValue) {
              if (this.isSVG) {
                this.obj.setAttributeNS(null, this.propertyName, newValue);
              } else {
                this.obj[this.propertyName] = newValue;
              }
            },
            writable: true,
            configurable: true
          },
          trigger: {
            value: function trigger(newValue, oldValue) {
              var callbacks = this.callbacks,
                  i = callbacks.length;
              while (i--) {
                callbacks[i](newValue, oldValue);
              }
            },
            writable: true,
            configurable: true
          },
          subscribe: {
            value: function subscribe(callback) {
              return this.owner.subscribe(this, callback);
            },
            writable: true,
            configurable: true
          }
        });
        return OoPropertyObserver;
      })());
      ElementObserver = _export("ElementObserver", (function() {
        function ElementObserver(handler, element, propertyName) {
          this.element = element;
          this.propertyName = propertyName;
          this.callbacks = [];
          this.oldValue = element[propertyName];
          this.handler = handler;
        }
        _prototypeProperties(ElementObserver, null, {
          getValue: {
            value: function getValue() {
              return this.element[this.propertyName];
            },
            writable: true,
            configurable: true
          },
          setValue: {
            value: function setValue(newValue) {
              this.element[this.propertyName] = newValue;
              this.call();
            },
            writable: true,
            configurable: true
          },
          call: {
            value: function call() {
              var callbacks = this.callbacks,
                  i = callbacks.length,
                  oldValue = this.oldValue,
                  newValue = this.getValue();
              while (i--) {
                callbacks[i](newValue, oldValue);
              }
              this.oldValue = newValue;
            },
            writable: true,
            configurable: true
          },
          subscribe: {
            value: function subscribe(callback) {
              var that = this;
              if (!this.disposeHandler) {
                this.disposeHandler = this.handler.subscribe(this.element, this.propertyName, this.call.bind(this));
              }
              var callbacks = this.callbacks;
              callbacks.push(callback);
              return function() {
                callbacks.splice(callbacks.indexOf(callback), 1);
                if (callback.length === 0) {
                  that.disposeHandler();
                  that.disposeHandler = null;
                }
              };
            },
            writable: true,
            configurable: true
          }
        });
        return ElementObserver;
      })());
    }
  };
});



System.register("github:aurelia/binding@0.3.4/system/binding-modes", [], function(_export) {
  "use strict";
  var ONE_WAY,
      TWO_WAY,
      ONE_TIME;
  return {
    setters: [],
    execute: function() {
      ONE_WAY = _export("ONE_WAY", 1);
      TWO_WAY = _export("TWO_WAY", 2);
      ONE_TIME = _export("ONE_TIME", 3);
    }
  };
});



System.register("github:aurelia/binding@0.3.4/system/lexer", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      Token,
      Lexer,
      Scanner,
      OPERATORS,
      $EOF,
      $TAB,
      $LF,
      $VTAB,
      $FF,
      $CR,
      $SPACE,
      $BANG,
      $DQ,
      $$,
      $PERCENT,
      $AMPERSAND,
      $SQ,
      $LPAREN,
      $RPAREN,
      $STAR,
      $PLUS,
      $COMMA,
      $MINUS,
      $PERIOD,
      $SLASH,
      $COLON,
      $SEMICOLON,
      $LT,
      $EQ,
      $GT,
      $QUESTION,
      $0,
      $9,
      $A,
      $E,
      $Z,
      $LBRACKET,
      $BACKSLASH,
      $RBRACKET,
      $CARET,
      $_,
      $a,
      $e,
      $f,
      $n,
      $r,
      $t,
      $u,
      $v,
      $z,
      $LBRACE,
      $BAR,
      $RBRACE,
      $NBSP;
  function isWhitespace(code) {
    return code >= $TAB && code <= $SPACE || code === $NBSP;
  }
  function isIdentifierStart(code) {
    return $a <= code && code <= $z || $A <= code && code <= $Z || code === $_ || code === $$;
  }
  function isIdentifierPart(code) {
    return $a <= code && code <= $z || $A <= code && code <= $Z || $0 <= code && code <= $9 || code === $_ || code === $$;
  }
  function isDigit(code) {
    return $0 <= code && code <= $9;
  }
  function isExponentStart(code) {
    return code === $e || code === $E;
  }
  function isExponentSign(code) {
    return code === $MINUS || code === $PLUS;
  }
  function unescape(code) {
    switch (code) {
      case $n:
        return $LF;
      case $f:
        return $FF;
      case $r:
        return $CR;
      case $t:
        return $TAB;
      case $v:
        return $VTAB;
      default:
        return code;
    }
  }
  function assert(condition, message) {
    if (!condition) {
      throw message || "Assertion failed";
    }
  }
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      Token = _export("Token", (function() {
        function Token(index, text) {
          this.index = index;
          this.text = text;
        }
        _prototypeProperties(Token, null, {
          withOp: {
            value: function withOp(op) {
              this.opKey = op;
              return this;
            },
            writable: true,
            configurable: true
          },
          withGetterSetter: {
            value: function withGetterSetter(key) {
              this.key = key;
              return this;
            },
            writable: true,
            configurable: true
          },
          withValue: {
            value: function withValue(value) {
              this.value = value;
              return this;
            },
            writable: true,
            configurable: true
          },
          toString: {
            value: function toString() {
              return "Token(" + this.text + ")";
            },
            writable: true,
            configurable: true
          }
        });
        return Token;
      })());
      Lexer = _export("Lexer", (function() {
        function Lexer() {}
        _prototypeProperties(Lexer, null, {lex: {
            value: function lex(text) {
              var scanner = new Scanner(text);
              var tokens = [];
              var token = scanner.scanToken();
              while (token) {
                tokens.push(token);
                token = scanner.scanToken();
              }
              return tokens;
            },
            writable: true,
            configurable: true
          }});
        return Lexer;
      })());
      Scanner = _export("Scanner", (function() {
        function Scanner(input) {
          this.input = input;
          this.length = input.length;
          this.peek = 0;
          this.index = -1;
          this.advance();
        }
        _prototypeProperties(Scanner, null, {
          scanToken: {
            value: function scanToken() {
              while (this.peek <= $SPACE) {
                if (++this.index >= this.length) {
                  this.peek = $EOF;
                  return null;
                } else {
                  this.peek = this.input.charCodeAt(this.index);
                }
              }
              if (isIdentifierStart(this.peek)) {
                return this.scanIdentifier();
              }
              if (isDigit(this.peek)) {
                return this.scanNumber(this.index);
              }
              var start = this.index;
              switch (this.peek) {
                case $PERIOD:
                  this.advance();
                  return isDigit(this.peek) ? this.scanNumber(start) : new Token(start, ".");
                case $LPAREN:
                case $RPAREN:
                case $LBRACE:
                case $RBRACE:
                case $LBRACKET:
                case $RBRACKET:
                case $COMMA:
                case $COLON:
                case $SEMICOLON:
                  return this.scanCharacter(start, String.fromCharCode(this.peek));
                case $SQ:
                case $DQ:
                  return this.scanString();
                case $PLUS:
                case $MINUS:
                case $STAR:
                case $SLASH:
                case $PERCENT:
                case $CARET:
                case $QUESTION:
                  return this.scanOperator(start, String.fromCharCode(this.peek));
                case $LT:
                case $GT:
                case $BANG:
                case $EQ:
                  return this.scanComplexOperator(start, $EQ, String.fromCharCode(this.peek), "=");
                case $AMPERSAND:
                  return this.scanComplexOperator(start, $AMPERSAND, "&", "&");
                case $BAR:
                  return this.scanComplexOperator(start, $BAR, "|", "|");
                case $NBSP:
                  while (isWhitespace(this.peek)) {
                    this.advance();
                  }
                  return this.scanToken();
              }
              var character = String.fromCharCode(this.peek);
              this.error("Unexpected character [" + character + "]");
              return null;
            },
            writable: true,
            configurable: true
          },
          scanCharacter: {
            value: function scanCharacter(start, text) {
              assert(this.peek === text.charCodeAt(0));
              this.advance();
              return new Token(start, text);
            },
            writable: true,
            configurable: true
          },
          scanOperator: {
            value: function scanOperator(start, text) {
              assert(this.peek === text.charCodeAt(0));
              assert(OPERATORS.indexOf(text) !== -1);
              this.advance();
              return new Token(start, text).withOp(text);
            },
            writable: true,
            configurable: true
          },
          scanComplexOperator: {
            value: function scanComplexOperator(start, code, one, two) {
              assert(this.peek === one.charCodeAt(0));
              this.advance();
              var text = one;
              if (this.peek === code) {
                this.advance();
                text += two;
              }
              if (this.peek === code) {
                this.advance();
                text += two;
              }
              assert(OPERATORS.indexOf(text) != -1);
              return new Token(start, text).withOp(text);
            },
            writable: true,
            configurable: true
          },
          scanIdentifier: {
            value: function scanIdentifier() {
              assert(isIdentifierStart(this.peek));
              var start = this.index;
              this.advance();
              while (isIdentifierPart(this.peek)) {
                this.advance();
              }
              var text = this.input.substring(start, this.index);
              var result = new Token(start, text);
              if (OPERATORS.indexOf(text) !== -1) {
                result.withOp(text);
              } else {
                result.withGetterSetter(text);
              }
              return result;
            },
            writable: true,
            configurable: true
          },
          scanNumber: {
            value: function scanNumber(start) {
              assert(isDigit(this.peek));
              var simple = this.index === start;
              this.advance();
              while (true) {
                if (isDigit(this.peek)) {} else if (this.peek === $PERIOD) {
                  simple = false;
                } else if (isExponentStart(this.peek)) {
                  this.advance();
                  if (isExponentSign(this.peek)) {
                    this.advance();
                  }
                  if (!isDigit(this.peek)) {
                    this.error("Invalid exponent", -1);
                  }
                  simple = false;
                } else {
                  break;
                }
                this.advance();
              }
              var text = this.input.substring(start, this.index);
              var value = simple ? parseInt(text) : parseFloat(text);
              return new Token(start, text).withValue(value);
            },
            writable: true,
            configurable: true
          },
          scanString: {
            value: function scanString() {
              assert(this.peek === $SQ || this.peek === $DQ);
              var start = this.index;
              var quote = this.peek;
              this.advance();
              var buffer;
              var marker = this.index;
              while (this.peek !== quote) {
                if (this.peek === $BACKSLASH) {
                  if (buffer === null) {
                    buffer = [];
                  }
                  buffer.push(this.input.substring(marker, this.index));
                  this.advance();
                  var unescaped;
                  if (this.peek === $u) {
                    var hex = this.input.substring(this.index + 1, this.index + 5);
                    if (!/[A-Z0-9]{4}/.test(hex)) {
                      this.error("Invalid unicode escape [\\u" + hex + "]");
                    }
                    unescaped = parseInt(hex, 16);
                    for (var i = 0; i < 5; ++i) {
                      this.advance();
                    }
                  } else {
                    unescaped = decodeURIComponent(this.peek);
                    this.advance();
                  }
                  buffer.push(String.fromCharCode(unescaped));
                  marker = this.index;
                } else if (this.peek === $EOF) {
                  this.error("Unterminated quote");
                } else {
                  this.advance();
                }
              }
              var last = this.input.substring(marker, this.index);
              this.advance();
              var text = this.input.substring(start, this.index);
              var unescaped = last;
              if (buffer != null) {
                buffer.push(last);
                unescaped = buffer.join("");
              }
              return new Token(start, text).withValue(unescaped);
            },
            writable: true,
            configurable: true
          },
          advance: {
            value: function advance() {
              if (++this.index >= this.length) {
                this.peek = $EOF;
              } else {
                this.peek = this.input.charCodeAt(this.index);
              }
            },
            writable: true,
            configurable: true
          },
          error: {
            value: function error(message) {
              var offset = arguments[1] === undefined ? 0 : arguments[1];
              var position = this.index + offset;
              throw new Error("Lexer Error: " + message + " at column " + position + " in expression [" + this.input + "]");
            },
            writable: true,
            configurable: true
          }
        });
        return Scanner;
      })());
      OPERATORS = ["undefined", "null", "true", "false", "+", "-", "*", "/", "%", "^", "=", "==", "===", "!=", "!==", "<", ">", "<=", ">=", "&&", "||", "&", "|", "!", "?"];
      $EOF = 0;
      $TAB = 9;
      $LF = 10;
      $VTAB = 11;
      $FF = 12;
      $CR = 13;
      $SPACE = 32;
      $BANG = 33;
      $DQ = 34;
      $$ = 36;
      $PERCENT = 37;
      $AMPERSAND = 38;
      $SQ = 39;
      $LPAREN = 40;
      $RPAREN = 41;
      $STAR = 42;
      $PLUS = 43;
      $COMMA = 44;
      $MINUS = 45;
      $PERIOD = 46;
      $SLASH = 47;
      $COLON = 58;
      $SEMICOLON = 59;
      $LT = 60;
      $EQ = 61;
      $GT = 62;
      $QUESTION = 63;
      $0 = 48;
      $9 = 57;
      $A = 65;
      $E = 69;
      $Z = 90;
      $LBRACKET = 91;
      $BACKSLASH = 92;
      $RBRACKET = 93;
      $CARET = 94;
      $_ = 95;
      $a = 97;
      $e = 101;
      $f = 102;
      $n = 110;
      $r = 114;
      $t = 116;
      $u = 117;
      $v = 118;
      $z = 122;
      $LBRACE = 123;
      $BAR = 124;
      $RBRACE = 125;
      $NBSP = 160;
    }
  };
});



System.register("github:aurelia/binding@0.3.4/system/path-observer", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      PathObserver;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      PathObserver = _export("PathObserver", (function() {
        function PathObserver(leftObserver, getRightObserver, value) {
          var _this = this;
          this.leftObserver = leftObserver;
          this.disposeLeft = leftObserver.subscribe(function(newValue) {
            var newRightValue = _this.updateRight(getRightObserver(newValue));
            _this.notify(newRightValue);
          });
          this.updateRight(getRightObserver(value));
        }
        _prototypeProperties(PathObserver, null, {
          updateRight: {
            value: function updateRight(observer) {
              var _this = this;
              this.rightObserver = observer;
              if (this.disposeRight) {
                this.disposeRight();
              }
              if (!observer) {
                return null;
              }
              this.disposeRight = observer.subscribe(function(newValue) {
                return _this.notify(newValue);
              });
              return observer.getValue();
            },
            writable: true,
            configurable: true
          },
          subscribe: {
            value: function subscribe(callback) {
              var that = this;
              that.callback = callback;
              return function() {
                that.callback = null;
              };
            },
            writable: true,
            configurable: true
          },
          notify: {
            value: function notify(newValue) {
              var callback = this.callback;
              if (callback) {
                callback(newValue);
              }
            },
            writable: true,
            configurable: true
          },
          dispose: {
            value: function dispose() {
              if (this.disposeLeft) {
                this.disposeLeft();
              }
              if (this.disposeRight) {
                this.disposeRight();
              }
            },
            writable: true,
            configurable: true
          }
        });
        return PathObserver;
      })());
    }
  };
});



System.register("github:aurelia/binding@0.3.4/system/composite-observer", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      CompositeObserver;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      CompositeObserver = _export("CompositeObserver", (function() {
        function CompositeObserver(observers, evaluate) {
          var _this = this;
          this.subscriptions = new Array(observers.length);
          this.evaluate = evaluate;
          for (var i = 0,
              ii = observers.length; i < ii; i++) {
            this.subscriptions[i] = observers[i].subscribe(function(newValue) {
              _this.notify(_this.evaluate());
            });
          }
        }
        _prototypeProperties(CompositeObserver, null, {
          subscribe: {
            value: function subscribe(callback) {
              var that = this;
              that.callback = callback;
              return function() {
                that.callback = null;
              };
            },
            writable: true,
            configurable: true
          },
          notify: {
            value: function notify(newValue) {
              var callback = this.callback;
              if (callback) {
                callback(newValue);
              }
            },
            writable: true,
            configurable: true
          },
          dispose: {
            value: function dispose() {
              var subscriptions = this.subscriptions;
              while (i--) {
                subscriptions[i]();
              }
            },
            writable: true,
            configurable: true
          }
        });
        return CompositeObserver;
      })());
    }
  };
});



System.register("github:aurelia/binding@0.3.4/system/binding-expression", ["./binding-modes"], function(_export) {
  "use strict";
  var ONE_WAY,
      TWO_WAY,
      _prototypeProperties,
      BindingExpression,
      Binding;
  return {
    setters: [function(_bindingModes) {
      ONE_WAY = _bindingModes.ONE_WAY;
      TWO_WAY = _bindingModes.TWO_WAY;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      BindingExpression = _export("BindingExpression", (function() {
        function BindingExpression(observerLocator, targetProperty, sourceExpression, mode, valueConverterLookupFunction, attribute) {
          this.observerLocator = observerLocator;
          this.targetProperty = targetProperty;
          this.sourceExpression = sourceExpression;
          this.mode = mode;
          this.valueConverterLookupFunction = valueConverterLookupFunction;
          this.attribute = attribute;
          this.discrete = false;
        }
        _prototypeProperties(BindingExpression, null, {createBinding: {
            value: function createBinding(target) {
              return new Binding(this.observerLocator, this.sourceExpression, target, this.targetProperty, this.mode, this.valueConverterLookupFunction);
            },
            writable: true,
            configurable: true
          }});
        return BindingExpression;
      })());
      Binding = (function() {
        function Binding(observerLocator, sourceExpression, target, targetProperty, mode, valueConverterLookupFunction) {
          this.observerLocator = observerLocator;
          this.sourceExpression = sourceExpression;
          this.targetProperty = observerLocator.getObserver(target, targetProperty);
          this.mode = mode;
          this.valueConverterLookupFunction = valueConverterLookupFunction;
        }
        _prototypeProperties(Binding, null, {
          getObserver: {
            value: function getObserver(obj, propertyName) {
              return this.observerLocator.getObserver(obj, propertyName);
            },
            writable: true,
            configurable: true
          },
          bind: {
            value: function bind(source) {
              var _this = this;
              var targetProperty = this.targetProperty,
                  info;
              if (this.mode == ONE_WAY || this.mode == TWO_WAY) {
                if (this._disposeObserver) {
                  if (this.source === source) {
                    return ;
                  }
                  this.unbind();
                }
                info = this.sourceExpression.connect(this, source);
                if (info.observer) {
                  this._disposeObserver = info.observer.subscribe(function(newValue) {
                    var existing = targetProperty.getValue();
                    if (newValue !== existing) {
                      targetProperty.setValue(newValue);
                    }
                  });
                }
                if (info.value !== undefined) {
                  targetProperty.setValue(info.value);
                }
                if (this.mode == TWO_WAY) {
                  this._disposeListener = targetProperty.subscribe(function(newValue) {
                    _this.sourceExpression.assign(source, newValue, _this.valueConverterLookupFunction);
                  });
                }
                this.source = source;
              } else {
                var value = this.sourceExpression.evaluate(source, this.valueConverterLookupFunction);
                if (value !== undefined) {
                  targetProperty.setValue(value);
                }
              }
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              if (this._disposeObserver) {
                this._disposeObserver();
                this._disposeObserver = null;
              }
              if (this._disposeListener) {
                this._disposeListener();
                this._disposeListener = null;
              }
            },
            writable: true,
            configurable: true
          }
        });
        return Binding;
      })();
    }
  };
});



System.register("github:aurelia/binding@0.3.4/system/listener-expression", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      ListenerExpression,
      Listener;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      ListenerExpression = _export("ListenerExpression", (function() {
        function ListenerExpression(eventManager, targetEvent, sourceExpression, delegate, preventDefault) {
          this.eventManager = eventManager;
          this.targetEvent = targetEvent;
          this.sourceExpression = sourceExpression;
          this.delegate = delegate;
          this.discrete = true;
          this.preventDefault = preventDefault;
        }
        _prototypeProperties(ListenerExpression, null, {createBinding: {
            value: function createBinding(target) {
              return new Listener(this.eventManager, this.targetEvent, this.delegate, this.sourceExpression, target, this.preventDefault);
            },
            writable: true,
            configurable: true
          }});
        return ListenerExpression;
      })());
      Listener = (function() {
        function Listener(eventManager, targetEvent, delegate, sourceExpression, target, preventDefault) {
          this.eventManager = eventManager;
          this.targetEvent = targetEvent;
          this.delegate = delegate;
          this.sourceExpression = sourceExpression;
          this.target = target;
          this.preventDefault = preventDefault;
        }
        _prototypeProperties(Listener, null, {
          bind: {
            value: function bind(source) {
              var _this = this;
              if (this._disposeListener) {
                if (this.source === source) {
                  return ;
                }
                this.unbind();
              }
              this.source = source;
              this._disposeListener = this.eventManager.addEventListener(this.target, this.targetEvent, function(event) {
                var prevEvent = source.$event;
                source.$event = event;
                var result = _this.sourceExpression.evaluate(source);
                source.$event = prevEvent;
                if (_this.preventDefault) {
                  event.preventDefault();
                }
                return result;
              }, this.delegate);
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              if (this._disposeListener) {
                this._disposeListener();
                this._disposeListener = null;
              }
            },
            writable: true,
            configurable: true
          }
        });
        return Listener;
      })();
    }
  };
});



System.register("github:aurelia/binding@0.3.4/system/name-expression", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      NameExpression,
      NameBinder;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      NameExpression = _export("NameExpression", (function() {
        function NameExpression(name, mode) {
          this.property = name;
          this.discrete = true;
          this.mode = (mode || "view-model").toLowerCase();
        }
        _prototypeProperties(NameExpression, null, {createBinding: {
            value: function createBinding(target) {
              return new NameBinder(this.property, target, this.mode);
            },
            writable: true,
            configurable: true
          }});
        return NameExpression;
      })());
      NameBinder = (function() {
        function NameBinder(property, target, mode) {
          this.property = property;
          switch (mode) {
            case "element":
              this.target = target;
              break;
            case "view-model":
              this.target = target.primaryBehavior ? target.primaryBehavior.executionContext : target;
              break;
            default:
              throw new Error("Name expressions do not support mode: " + mode);
          }
        }
        _prototypeProperties(NameBinder, null, {
          bind: {
            value: function bind(source) {
              if (this.source) {
                if (this.source === source) {
                  return ;
                }
                this.unbind();
              }
              this.source = source;
              source[this.property] = this.target;
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              this.source[this.property] = null;
            },
            writable: true,
            configurable: true
          }
        });
        return NameBinder;
      })();
    }
  };
});



System.register("github:aurelia/binding@0.3.4/system/call-expression", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      CallExpression,
      Call;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      CallExpression = _export("CallExpression", (function() {
        function CallExpression(observerLocator, targetProperty, sourceExpression, valueConverterLookupFunction) {
          this.observerLocator = observerLocator;
          this.targetProperty = targetProperty;
          this.sourceExpression = sourceExpression;
          this.valueConverterLookupFunction = valueConverterLookupFunction;
        }
        _prototypeProperties(CallExpression, null, {createBinding: {
            value: function createBinding(target) {
              return new Call(this.observerLocator, this.sourceExpression, target, this.targetProperty, this.valueConverterLookupFunction);
            },
            writable: true,
            configurable: true
          }});
        return CallExpression;
      })());
      Call = (function() {
        function Call(observerLocator, sourceExpression, target, targetProperty, valueConverterLookupFunction) {
          this.sourceExpression = sourceExpression;
          this.target = target;
          this.targetProperty = observerLocator.getObserver(target, targetProperty);
          this.valueConverterLookupFunction = valueConverterLookupFunction;
        }
        _prototypeProperties(Call, null, {
          bind: {
            value: function bind(source) {
              var _this = this;
              if (this.source === source) {
                return ;
              }
              if (this.source) {
                this.unbind();
              }
              this.source = source;
              this.targetProperty.setValue(function() {
                for (var _len = arguments.length,
                    rest = Array(_len),
                    _key = 0; _key < _len; _key++) {
                  rest[_key] = arguments[_key];
                }
                return _this.sourceExpression.evaluate(source, _this.valueConverterLookupFunction, rest);
              });
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              this.targetProperty.setValue(null);
            },
            writable: true,
            configurable: true
          }
        });
        return Call;
      })();
    }
  };
});



System.register("github:aurelia/templating@0.8.11/system/behavior-instance", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      BehaviorInstance;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      BehaviorInstance = _export("BehaviorInstance", (function() {
        function BehaviorInstance(behavior, executionContext, instruction) {
          this.behavior = behavior;
          this.executionContext = executionContext;
          var observerLookup = behavior.observerLocator.getObserversLookup(executionContext),
              handlesBind = behavior.handlesBind,
              attributes = instruction.attributes,
              boundProperties = this.boundProperties = [],
              properties = behavior.properties,
              i,
              ii;
          for (i = 0, ii = properties.length; i < ii; ++i) {
            properties[i].initialize(executionContext, observerLookup, attributes, handlesBind, boundProperties);
          }
        }
        _prototypeProperties(BehaviorInstance, null, {
          created: {
            value: function created(context) {
              if (this.behavior.handlesCreated) {
                this.executionContext.created(context);
              }
            },
            writable: true,
            configurable: true
          },
          bind: {
            value: function bind(context) {
              var skipSelfSubscriber = this.behavior.handlesBind,
                  boundProperties = this.boundProperties,
                  i,
                  ii,
                  x,
                  observer,
                  selfSubscriber;
              for (i = 0, ii = boundProperties.length; i < ii; ++i) {
                x = boundProperties[i];
                observer = x.observer;
                selfSubscriber = observer.selfSubscriber;
                observer.publishing = false;
                if (skipSelfSubscriber) {
                  observer.selfSubscriber = null;
                }
                x.binding.bind(context);
                observer.call();
                observer.publishing = true;
                observer.selfSubscriber = selfSubscriber;
              }
              if (skipSelfSubscriber) {
                this.executionContext.bind(context);
              }
              if (this.view) {
                this.view.bind(this.executionContext);
              }
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              var boundProperties = this.boundProperties,
                  i,
                  ii;
              if (this.view) {
                this.view.unbind();
              }
              if (this.behavior.handlesUnbind) {
                this.executionContext.unbind();
              }
              for (i = 0, ii = boundProperties.length; i < ii; ++i) {
                boundProperties[i].binding.unbind();
              }
            },
            writable: true,
            configurable: true
          },
          attached: {
            value: function attached() {
              if (this.behavior.handlesAttached) {
                this.executionContext.attached();
              }
            },
            writable: true,
            configurable: true
          },
          detached: {
            value: function detached() {
              if (this.behavior.handlesDetached) {
                this.executionContext.detached();
              }
            },
            writable: true,
            configurable: true
          }
        });
        return BehaviorInstance;
      })());
    }
  };
});



System.register("github:aurelia/templating@0.8.11/system/children", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      noMutations,
      ChildObserver,
      ChildObserverBinder;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      noMutations = [];
      ChildObserver = _export("ChildObserver", (function() {
        function ChildObserver(property, changeHandler, selector) {
          this.selector = selector;
          this.changeHandler = changeHandler;
          this.property = property;
        }
        _prototypeProperties(ChildObserver, null, {createBinding: {
            value: function createBinding(target, behavior) {
              return new ChildObserverBinder(this.selector, target, this.property, behavior, this.changeHandler);
            },
            writable: true,
            configurable: true
          }});
        return ChildObserver;
      })());
      ChildObserverBinder = _export("ChildObserverBinder", (function() {
        function ChildObserverBinder(selector, target, property, behavior, changeHandler) {
          this.selector = selector;
          this.target = target;
          this.property = property;
          this.target = target;
          this.behavior = behavior;
          this.changeHandler = changeHandler;
          this.observer = new MutationObserver(this.onChange.bind(this));
        }
        _prototypeProperties(ChildObserverBinder, null, {
          bind: {
            value: function bind(source) {
              var items,
                  results,
                  i,
                  ii,
                  node,
                  behavior = this.behavior;
              this.observer.observe(this.target, {
                childList: true,
                subtree: true
              });
              items = behavior[this.property];
              if (!items) {
                items = behavior[this.property] = [];
              } else {
                items.length = 0;
              }
              results = this.target.querySelectorAll(this.selector);
              for (i = 0, ii = results.length; i < ii; ++i) {
                node = results[i];
                items.push(node.primaryBehavior ? node.primaryBehavior.executionContext : node);
              }
              if (this.changeHandler) {
                this.behavior[this.changeHandler](noMutations);
              }
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              this.observer.disconnect();
            },
            writable: true,
            configurable: true
          },
          onChange: {
            value: function onChange(mutations) {
              var items = this.behavior[this.property],
                  selector = this.selector;
              mutations.forEach(function(record) {
                var added = record.addedNodes,
                    removed = record.removedNodes,
                    prev = record.previousSibling,
                    i,
                    ii,
                    primary,
                    index,
                    node;
                for (i = 0, ii = removed.length; i < ii; ++i) {
                  node = removed[i];
                  if (node.nodeType === 1 && node.matches(selector)) {
                    primary = node.primaryBehavior ? node.primaryBehavior.executionContext : node;
                    index = items.indexOf(primary);
                    if (index != -1) {
                      items.splice(index, 1);
                    }
                  }
                }
                for (i = 0, ii = added.length; i < ii; ++i) {
                  node = added[i];
                  if (node.nodeType === 1 && node.matches(selector)) {
                    primary = node.primaryBehavior ? node.primaryBehavior.executionContext : node;
                    index = 0;
                    while (prev) {
                      if (prev.nodeType === 1 && prev.matches(selector)) {
                        index++;
                      }
                      prev = prev.previousSibling;
                    }
                    items.splice(index, 0, primary);
                  }
                }
              });
              if (this.changeHandler) {
                this.behavior[this.changeHandler](mutations);
              }
            },
            writable: true,
            configurable: true
          }
        });
        return ChildObserverBinder;
      })());
    }
  };
});



System.register("github:aurelia/templating@0.8.11/system/content-selector", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      proto,
      placeholder,
      ContentSelector;
  function findInsertionPoint(groups, index) {
    var insertionPoint;
    while (!insertionPoint && index >= 0) {
      insertionPoint = groups[index][0];
      index--;
    }
    return insertionPoint || anchor;
  }
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      if (Element && !Element.prototype.matches) {
        proto = Element.prototype;
        proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
      }
      placeholder = [];
      ContentSelector = _export("ContentSelector", (function() {
        function ContentSelector(anchor, selector) {
          this.anchor = anchor;
          this.selector = selector;
          this.all = !this.selector;
          this.groups = [];
        }
        _prototypeProperties(ContentSelector, {applySelectors: {
            value: function applySelectors(view, contentSelectors, callback) {
              var currentChild = view.fragment.firstChild,
                  contentMap = new Map(),
                  nextSibling,
                  i,
                  ii,
                  contentSelector;
              while (currentChild) {
                nextSibling = currentChild.nextSibling;
                if (currentChild.viewSlot) {
                  var viewSlotSelectors = contentSelectors.map(function(x) {
                    return x.copyForViewSlot();
                  });
                  currentChild.viewSlot.installContentSelectors(viewSlotSelectors);
                } else {
                  for (i = 0, ii = contentSelectors.length; i < ii; i++) {
                    contentSelector = contentSelectors[i];
                    if (contentSelector.matches(currentChild)) {
                      var elements = contentMap.get(contentSelector);
                      if (!elements) {
                        elements = [];
                        contentMap.set(contentSelector, elements);
                      }
                      elements.push(currentChild);
                      break;
                    }
                  }
                }
                currentChild = nextSibling;
              }
              for (i = 0, ii = contentSelectors.length; i < ii; ++i) {
                contentSelector = contentSelectors[i];
                callback(contentSelector, contentMap.get(contentSelector) || placeholder);
              }
            },
            writable: true,
            configurable: true
          }}, {
          copyForViewSlot: {
            value: function copyForViewSlot() {
              return new ContentSelector(this.anchor, this.selector);
            },
            writable: true,
            configurable: true
          },
          matches: {
            value: function matches(node) {
              return this.all || node.nodeType === 1 && node.matches(this.selector);
            },
            writable: true,
            configurable: true
          },
          add: {
            value: function add(group) {
              var anchor = this.anchor,
                  parent = anchor.parentNode,
                  i,
                  ii;
              for (i = 0, ii = group.length; i < ii; ++i) {
                parent.insertBefore(group[i], anchor);
              }
              this.groups.push(group);
            },
            writable: true,
            configurable: true
          },
          insert: {
            value: function insert(index, group) {
              if (group.length) {
                var anchor = findInsertionPoint(this.groups, index) || this.anchor,
                    parent = anchor.parentNode,
                    i,
                    ii;
                for (i = 0, ii = group.length; i < ii; ++i) {
                  parent.insertBefore(group[i], anchor);
                }
              }
              this.groups.splice(index, 0, group);
            },
            writable: true,
            configurable: true
          },
          removeAt: {
            value: function removeAt(index, fragment) {
              var group = this.groups[index],
                  i,
                  ii;
              for (i = 0, ii = group.length; i < ii; ++i) {
                fragment.appendChild(group[i]);
              }
              this.groups.splice(index, 1);
            },
            writable: true,
            configurable: true
          }
        });
        return ContentSelector;
      })());
    }
  };
});



System.register("github:aurelia/templating@0.8.11/system/resource-registry", ["aurelia-path"], function(_export) {
  "use strict";
  var relativeToFile,
      _get,
      _inherits,
      _prototypeProperties,
      ResourceRegistry,
      ViewResources;
  function register(lookup, name, resource, type) {
    if (!name) {
      return ;
    }
    var existing = lookup[name];
    if (existing) {
      if (existing != resource) {
        throw new Error("Attempted to register " + type + " when one with the same name already exists. Name: " + name + ".");
      }
      return ;
    }
    lookup[name] = resource;
  }
  return {
    setters: [function(_aureliaPath) {
      relativeToFile = _aureliaPath.relativeToFile;
    }],
    execute: function() {
      _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);
          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;
          if (getter === undefined) {
            return undefined;
          }
          return getter.call(receiver);
        }
      };
      _inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          subClass.__proto__ = superClass;
      };
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      ResourceRegistry = _export("ResourceRegistry", (function() {
        function ResourceRegistry() {
          this.attributes = {};
          this.elements = {};
          this.valueConverters = {};
          this.attributeMap = {};
          this.baseResourceUrl = "";
        }
        _prototypeProperties(ResourceRegistry, null, {
          registerElement: {
            value: function registerElement(tagName, behavior) {
              register(this.elements, tagName, behavior, "an Element");
            },
            writable: true,
            configurable: true
          },
          getElement: {
            value: function getElement(tagName) {
              return this.elements[tagName];
            },
            writable: true,
            configurable: true
          },
          registerAttribute: {
            value: function registerAttribute(attribute, behavior, knownAttribute) {
              this.attributeMap[attribute] = knownAttribute;
              register(this.attributes, attribute, behavior, "an Attribute");
            },
            writable: true,
            configurable: true
          },
          getAttribute: {
            value: function getAttribute(attribute) {
              return this.attributes[attribute];
            },
            writable: true,
            configurable: true
          },
          registerValueConverter: {
            value: function registerValueConverter(name, valueConverter) {
              register(this.valueConverters, name, valueConverter, "a ValueConverter");
            },
            writable: true,
            configurable: true
          },
          getValueConverter: {
            value: function getValueConverter(name) {
              return this.valueConverters[name];
            },
            writable: true,
            configurable: true
          }
        });
        return ResourceRegistry;
      })());
      ViewResources = _export("ViewResources", (function(ResourceRegistry) {
        function ViewResources(parent, viewUrl) {
          _get(Object.getPrototypeOf(ViewResources.prototype), "constructor", this).call(this);
          this.parent = parent;
          this.viewUrl = viewUrl;
          this.valueConverterLookupFunction = this.getValueConverter.bind(this);
        }
        _inherits(ViewResources, ResourceRegistry);
        _prototypeProperties(ViewResources, null, {
          relativeToView: {
            value: function relativeToView(path) {
              return relativeToFile(path, this.viewUrl);
            },
            writable: true,
            configurable: true
          },
          getElement: {
            value: function getElement(tagName) {
              return this.elements[tagName] || this.parent.getElement(tagName);
            },
            writable: true,
            configurable: true
          },
          mapAttribute: {
            value: function mapAttribute(attribute) {
              return this.attributeMap[attribute] || this.parent.attributeMap[attribute];
            },
            writable: true,
            configurable: true
          },
          getAttribute: {
            value: function getAttribute(attribute) {
              return this.attributes[attribute] || this.parent.getAttribute(attribute);
            },
            writable: true,
            configurable: true
          },
          getValueConverter: {
            value: function getValueConverter(name) {
              return this.valueConverters[name] || this.parent.getValueConverter(name);
            },
            writable: true,
            configurable: true
          }
        });
        return ViewResources;
      })(ResourceRegistry));
    }
  };
});



System.register("github:aurelia/templating@0.8.11/system/view", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      View;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      View = _export("View", (function() {
        function View(fragment, behaviors, bindings, children, systemControlled, contentSelectors) {
          this.fragment = fragment;
          this.behaviors = behaviors;
          this.bindings = bindings;
          this.children = children;
          this.systemControlled = systemControlled;
          this.contentSelectors = contentSelectors;
          this.firstChild = fragment.firstChild;
          this.lastChild = fragment.lastChild;
          this.isBound = false;
          this.isAttached = false;
        }
        _prototypeProperties(View, null, {
          created: {
            value: function created(executionContext) {
              var i,
                  ii,
                  behaviors = this.behaviors;
              for (i = 0, ii = behaviors.length; i < ii; ++i) {
                behaviors[i].created(executionContext);
              }
            },
            writable: true,
            configurable: true
          },
          bind: {
            value: function bind(executionContext, systemUpdate) {
              var context,
                  behaviors,
                  bindings,
                  children,
                  i,
                  ii;
              if (systemUpdate && !this.systemControlled) {
                context = this.executionContext || executionContext;
              } else {
                context = executionContext || this.executionContext;
              }
              if (this.isBound) {
                if (this.executionContext === context) {
                  return ;
                }
                this.unbind();
              }
              this.isBound = true;
              this.executionContext = context;
              if (this.owner) {
                this.owner.bind(context);
              }
              bindings = this.bindings;
              for (i = 0, ii = bindings.length; i < ii; ++i) {
                bindings[i].bind(context);
              }
              behaviors = this.behaviors;
              for (i = 0, ii = behaviors.length; i < ii; ++i) {
                behaviors[i].bind(context);
              }
              children = this.children;
              for (i = 0, ii = children.length; i < ii; ++i) {
                children[i].bind(context, true);
              }
            },
            writable: true,
            configurable: true
          },
          addBinding: {
            value: function addBinding(binding) {
              this.bindings.push(binding);
              if (this.isBound) {
                binding.bind(this.executionContext);
              }
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              var behaviors,
                  bindings,
                  children,
                  i,
                  ii;
              if (this.isBound) {
                this.isBound = false;
                if (this.owner) {
                  this.owner.unbind();
                }
                bindings = this.bindings;
                for (i = 0, ii = bindings.length; i < ii; ++i) {
                  bindings[i].unbind();
                }
                behaviors = this.behaviors;
                for (i = 0, ii = behaviors.length; i < ii; ++i) {
                  behaviors[i].unbind();
                }
                children = this.children;
                for (i = 0, ii = children.length; i < ii; ++i) {
                  children[i].unbind();
                }
              }
            },
            writable: true,
            configurable: true
          },
          insertNodesBefore: {
            value: function insertNodesBefore(refNode) {
              var parent = refNode.parentNode;
              parent.insertBefore(this.fragment, refNode);
            },
            writable: true,
            configurable: true
          },
          appendNodesTo: {
            value: function appendNodesTo(parent) {
              parent.appendChild(this.fragment);
            },
            writable: true,
            configurable: true
          },
          removeNodes: {
            value: function removeNodes() {
              var start = this.firstChild,
                  end = this.lastChild,
                  fragment = this.fragment,
                  next;
              var current = start,
                  loop = true,
                  nodes = [];
              while (loop) {
                if (current === end) {
                  loop = false;
                }
                next = current.nextSibling;
                this.fragment.appendChild(current);
                current = next;
              }
            },
            writable: true,
            configurable: true
          },
          attached: {
            value: function attached() {
              var behaviors,
                  children,
                  i,
                  ii;
              if (this.isAttached) {
                return ;
              }
              this.isAttached = true;
              if (this.owner) {
                this.owner.attached();
              }
              behaviors = this.behaviors;
              for (i = 0, ii = behaviors.length; i < ii; ++i) {
                behaviors[i].attached();
              }
              children = this.children;
              for (i = 0, ii = children.length; i < ii; ++i) {
                children[i].attached();
              }
            },
            writable: true,
            configurable: true
          },
          detached: {
            value: function detached() {
              var behaviors,
                  children,
                  i,
                  ii;
              if (this.isAttached) {
                this.isAttached = false;
                if (this.owner) {
                  this.owner.detached();
                }
                behaviors = this.behaviors;
                for (i = 0, ii = behaviors.length; i < ii; ++i) {
                  behaviors[i].detached();
                }
                children = this.children;
                for (i = 0, ii = children.length; i < ii; ++i) {
                  children[i].detached();
                }
              }
            },
            writable: true,
            configurable: true
          }
        });
        return View;
      })());
    }
  };
});



System.register("github:aurelia/templating@0.8.11/system/view-slot", ["./content-selector"], function(_export) {
  "use strict";
  var ContentSelector,
      _prototypeProperties,
      ViewSlot;
  return {
    setters: [function(_contentSelector) {
      ContentSelector = _contentSelector.ContentSelector;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      ViewSlot = _export("ViewSlot", (function() {
        function ViewSlot(anchor, anchorIsContainer, executionContext) {
          this.anchor = anchor;
          this.viewAddMethod = anchorIsContainer ? "appendNodesTo" : "insertNodesBefore";
          this.executionContext = executionContext;
          this.children = [];
          this.isBound = false;
          this.isAttached = false;
          anchor.viewSlot = this;
        }
        _prototypeProperties(ViewSlot, null, {
          transformChildNodesIntoView: {
            value: function transformChildNodesIntoView() {
              var parent = this.anchor;
              this.children.push({
                removeNodes: function removeNodes() {
                  var last;
                  while (last = parent.lastChild) {
                    parent.removeChild(last);
                  }
                },
                created: function created() {},
                bind: function bind() {},
                unbind: function unbind() {},
                attached: function attached() {},
                detached: function detached() {}
              });
            },
            writable: true,
            configurable: true
          },
          bind: {
            value: function bind(executionContext) {
              var i,
                  ii,
                  children;
              if (this.isBound) {
                if (this.executionContext === executionContext) {
                  return ;
                }
                this.unbind();
              }
              this.isBound = true;
              this.executionContext = executionContext = executionContext || this.executionContext;
              children = this.children;
              for (i = 0, ii = children.length; i < ii; ++i) {
                children[i].bind(executionContext, true);
              }
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              var i,
                  ii,
                  children = this.children;
              this.isBound = false;
              for (i = 0, ii = children.length; i < ii; ++i) {
                children[i].unbind();
              }
            },
            writable: true,
            configurable: true
          },
          add: {
            value: function add(view) {
              view[this.viewAddMethod](this.anchor);
              this.children.push(view);
              if (this.isAttached) {
                view.attached();
              }
            },
            writable: true,
            configurable: true
          },
          insert: {
            value: function insert(index, view) {
              if (index === 0 && !this.children.length || index >= this.children.length) {
                this.add(view);
              } else {
                view.insertNodesBefore(this.children[index].firstChild);
                this.children.splice(index, 0, view);
                if (this.isAttached) {
                  view.attached();
                }
              }
            },
            writable: true,
            configurable: true
          },
          remove: {
            value: function remove(view) {
              view.removeNodes();
              this.children.splice(this.children.indexOf(view), 1);
              if (this.isAttached) {
                view.detached();
              }
            },
            writable: true,
            configurable: true
          },
          removeAt: {
            value: function removeAt(index) {
              var view = this.children[index];
              view.removeNodes();
              this.children.splice(index, 1);
              if (this.isAttached) {
                view.detached();
              }
              return view;
            },
            writable: true,
            configurable: true
          },
          removeAll: {
            value: function removeAll() {
              var children = this.children,
                  ii = children.length,
                  i;
              for (i = 0; i < ii; ++i) {
                children[i].removeNodes();
              }
              if (this.isAttached) {
                for (i = 0; i < ii; ++i) {
                  children[i].detached();
                }
              }
              this.children = [];
            },
            writable: true,
            configurable: true
          },
          swap: {
            value: function swap(view) {
              this.removeAll();
              this.add(view);
            },
            writable: true,
            configurable: true
          },
          attached: {
            value: function attached() {
              var i,
                  ii,
                  children;
              if (this.isAttached) {
                return ;
              }
              this.isAttached = true;
              children = this.children;
              for (i = 0, ii = children.length; i < ii; ++i) {
                children[i].attached();
              }
            },
            writable: true,
            configurable: true
          },
          detached: {
            value: function detached() {
              var i,
                  ii,
                  children;
              if (this.isAttached) {
                this.isAttached = false;
                children = this.children;
                for (i = 0, ii = children.length; i < ii; ++i) {
                  children[i].detached();
                }
              }
            },
            writable: true,
            configurable: true
          },
          installContentSelectors: {
            value: function installContentSelectors(contentSelectors) {
              this.contentSelectors = contentSelectors;
              this.add = this.contentSelectorAdd;
              this.insert = this.contentSelectorInsert;
              this.remove = this.contentSelectorRemove;
              this.removeAt = this.contentSelectorRemoveAt;
              this.removeAll = this.contentSelectorRemoveAll;
            },
            writable: true,
            configurable: true
          },
          contentSelectorAdd: {
            value: function contentSelectorAdd(view) {
              ContentSelector.applySelectors(view, this.contentSelectors, function(contentSelector, group) {
                return contentSelector.add(group);
              });
              this.children.push(view);
              if (this.isAttached) {
                view.attached();
              }
            },
            writable: true,
            configurable: true
          },
          contentSelectorInsert: {
            value: function contentSelectorInsert(index, view) {
              if (index === 0 && !this.children.length || index >= this.children.length) {
                this.add(view);
              } else {
                ContentSelector.applySelectors(view, this.contentSelectors, function(contentSelector, group) {
                  return contentSelector.insert(index, group);
                });
                this.children.splice(index, 0, view);
                if (this.isAttached) {
                  view.attached();
                }
              }
            },
            writable: true,
            configurable: true
          },
          contentSelectorRemove: {
            value: function contentSelectorRemove(view) {
              var index = this.children.indexOf(view),
                  contentSelectors = this.contentSelectors,
                  i,
                  ii;
              for (i = 0, ii = contentSelectors.length; i < ii; ++i) {
                contentSelectors[i].removeAt(index, view.fragment);
              }
              this.children.splice(index, 1);
              if (this.isAttached) {
                view.detached();
              }
            },
            writable: true,
            configurable: true
          },
          contentSelectorRemoveAt: {
            value: function contentSelectorRemoveAt(index) {
              var view = this.children[index],
                  contentSelectors = this.contentSelectors,
                  i,
                  ii;
              for (i = 0, ii = contentSelectors.length; i < ii; ++i) {
                contentSelectors[i].removeAt(index, view.fragment);
              }
              this.children.splice(index, 1);
              if (this.isAttached) {
                view.detached();
              }
              return view;
            },
            writable: true,
            configurable: true
          },
          contentSelectorRemoveAll: {
            value: function contentSelectorRemoveAll() {
              var children = this.children,
                  contentSelectors = this.contentSelectors,
                  ii = children.length,
                  jj = contentSelectors.length,
                  i,
                  j,
                  view;
              for (i = 0; i < ii; ++i) {
                view = children[i];
                for (j = 0; j < jj; ++j) {
                  contentSelectors[j].removeAt(i, view.fragment);
                }
              }
              if (this.isAttached) {
                for (i = 0; i < ii; ++i) {
                  children[i].detached();
                }
              }
              this.children = [];
            },
            writable: true,
            configurable: true
          }
        });
        return ViewSlot;
      })());
    }
  };
});



System.register("github:aurelia/templating@0.8.11/system/binding-language", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      BindingLanguage;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      BindingLanguage = _export("BindingLanguage", (function() {
        function BindingLanguage() {}
        _prototypeProperties(BindingLanguage, null, {
          inspectAttribute: {
            value: function inspectAttribute(resources, attrName, attrValue) {
              throw new Error("A BindingLanguage must implement inspectAttribute(...)");
            },
            writable: true,
            configurable: true
          },
          createAttributeInstruction: {
            value: function createAttributeInstruction(resources, element, info, existingInstruction) {
              throw new Error("A BindingLanguage must implement createAttributeInstruction(...)");
            },
            writable: true,
            configurable: true
          },
          parseText: {
            value: function parseText(resources, value) {
              throw new Error("A BindingLanguage must implement parseText(...)");
            },
            writable: true,
            configurable: true
          }
        });
        return BindingLanguage;
      })());
    }
  };
});



System.register("github:aurelia/templating@0.8.11/system/view-strategy", ["aurelia-metadata", "aurelia-path"], function(_export) {
  "use strict";
  var Metadata,
      Origin,
      relativeToFile,
      _inherits,
      _prototypeProperties,
      ViewStrategy,
      UseView,
      ConventionalView,
      NoView;
  return {
    setters: [function(_aureliaMetadata) {
      Metadata = _aureliaMetadata.Metadata;
      Origin = _aureliaMetadata.Origin;
    }, function(_aureliaPath) {
      relativeToFile = _aureliaPath.relativeToFile;
    }],
    execute: function() {
      _inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          subClass.__proto__ = superClass;
      };
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      ViewStrategy = _export("ViewStrategy", (function() {
        function ViewStrategy() {}
        _prototypeProperties(ViewStrategy, {
          normalize: {
            value: function normalize(value) {
              if (typeof value === "string") {
                value = new UseView(value);
              }
              if (value && !(value instanceof ViewStrategy)) {
                throw new Error("The view must be a string or an instance of ViewStrategy.");
              }
              return value;
            },
            writable: true,
            configurable: true
          },
          getDefault: {
            value: function getDefault(target) {
              var strategy,
                  annotation;
              if (typeof target !== "function") {
                target = target.constructor;
              }
              annotation = Origin.get(target);
              strategy = Metadata.on(target).first(ViewStrategy);
              if (!strategy) {
                if (!annotation) {
                  throw new Error("Cannot determinte default view strategy for object.", target);
                }
                strategy = new ConventionalView(annotation.moduleId);
              } else if (annotation) {
                strategy.moduleId = annotation.moduleId;
              }
              return strategy;
            },
            writable: true,
            configurable: true
          }
        }, {
          makeRelativeTo: {
            value: function makeRelativeTo(baseUrl) {},
            writable: true,
            configurable: true
          },
          loadViewFactory: {
            value: function loadViewFactory(viewEngine, options) {
              throw new Error("A ViewStrategy must implement loadViewFactory(viewEngine, options).");
            },
            writable: true,
            configurable: true
          }
        });
        return ViewStrategy;
      })());
      UseView = _export("UseView", (function(ViewStrategy) {
        function UseView(path) {
          this.path = path;
        }
        _inherits(UseView, ViewStrategy);
        _prototypeProperties(UseView, null, {
          loadViewFactory: {
            value: function loadViewFactory(viewEngine, options) {
              if (!this.absolutePath && this.moduleId) {
                this.absolutePath = relativeToFile(this.path, this.moduleId);
              }
              return viewEngine.loadViewFactory(this.absolutePath || this.path, options, this.moduleId);
            },
            writable: true,
            configurable: true
          },
          makeRelativeTo: {
            value: function makeRelativeTo(file) {
              this.absolutePath = relativeToFile(this.path, file);
            },
            writable: true,
            configurable: true
          }
        });
        return UseView;
      })(ViewStrategy));
      ConventionalView = _export("ConventionalView", (function(ViewStrategy) {
        function ConventionalView(moduleId) {
          this.moduleId = moduleId;
          this.viewUrl = ConventionalView.convertModuleIdToViewUrl(moduleId);
        }
        _inherits(ConventionalView, ViewStrategy);
        _prototypeProperties(ConventionalView, {convertModuleIdToViewUrl: {
            value: function convertModuleIdToViewUrl(moduleId) {
              return moduleId + ".html";
            },
            writable: true,
            configurable: true
          }}, {loadViewFactory: {
            value: function loadViewFactory(viewEngine, options) {
              return viewEngine.loadViewFactory(this.viewUrl, options, this.moduleId);
            },
            writable: true,
            configurable: true
          }});
        return ConventionalView;
      })(ViewStrategy));
      NoView = _export("NoView", (function(ViewStrategy) {
        function NoView() {
          if (Object.getPrototypeOf(NoView) !== null) {
            Object.getPrototypeOf(NoView).apply(this, arguments);
          }
        }
        _inherits(NoView, ViewStrategy);
        _prototypeProperties(NoView, null, {loadViewFactory: {
            value: function loadViewFactory() {
              return Promise.resolve(null);
            },
            writable: true,
            configurable: true
          }});
        return NoView;
      })(ViewStrategy));
    }
  };
});



System.register("github:aurelia/templating@0.8.11/system/element-config", ["aurelia-metadata", "aurelia-binding"], function(_export) {
  "use strict";
  var ResourceType,
      EventManager,
      _prototypeProperties,
      _inherits,
      ElementConfig;
  return {
    setters: [function(_aureliaMetadata) {
      ResourceType = _aureliaMetadata.ResourceType;
    }, function(_aureliaBinding) {
      EventManager = _aureliaBinding.EventManager;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          subClass.__proto__ = superClass;
      };
      ElementConfig = _export("ElementConfig", (function(ResourceType) {
        function ElementConfig() {
          if (Object.getPrototypeOf(ElementConfig) !== null) {
            Object.getPrototypeOf(ElementConfig).apply(this, arguments);
          }
        }
        _inherits(ElementConfig, ResourceType);
        _prototypeProperties(ElementConfig, null, {
          load: {
            value: function load(container, target) {
              var config = new target(),
                  eventManager = container.get(EventManager);
              eventManager.registerElementConfig(config);
            },
            writable: true,
            configurable: true
          },
          register: {
            value: function register() {},
            writable: true,
            configurable: true
          }
        });
        return ElementConfig;
      })(ResourceType));
    }
  };
});



System.register("github:aurelia/templating@0.8.11/system/template-controller", ["aurelia-metadata", "./behavior-instance", "./behaviors", "./util"], function(_export) {
  "use strict";
  var ResourceType,
      BehaviorInstance,
      configureBehavior,
      hyphenate,
      _prototypeProperties,
      _inherits,
      TemplateController;
  return {
    setters: [function(_aureliaMetadata) {
      ResourceType = _aureliaMetadata.ResourceType;
    }, function(_behaviorInstance) {
      BehaviorInstance = _behaviorInstance.BehaviorInstance;
    }, function(_behaviors) {
      configureBehavior = _behaviors.configureBehavior;
    }, function(_util) {
      hyphenate = _util.hyphenate;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          subClass.__proto__ = superClass;
      };
      TemplateController = _export("TemplateController", (function(ResourceType) {
        function TemplateController(attribute) {
          this.name = attribute;
          this.properties = [];
          this.attributes = {};
          this.liftsContent = true;
        }
        _inherits(TemplateController, ResourceType);
        _prototypeProperties(TemplateController, {convention: {
            value: function convention(name) {
              if (name.endsWith("TemplateController")) {
                return new TemplateController(hyphenate(name.substring(0, name.length - 18)));
              }
            },
            writable: true,
            configurable: true
          }}, {
          analyze: {
            value: function analyze(container, target) {
              configureBehavior(container, this, target);
            },
            writable: true,
            configurable: true
          },
          load: {
            value: function load(container, target) {
              return Promise.resolve(this);
            },
            writable: true,
            configurable: true
          },
          register: {
            value: function register(registry, name) {
              registry.registerAttribute(name || this.name, this, this.name);
            },
            writable: true,
            configurable: true
          },
          compile: {
            value: function compile(compiler, resources, node, instruction, parentNode) {
              if (!instruction.viewFactory) {
                var template = document.createElement("template"),
                    fragment = document.createDocumentFragment();
                node.removeAttribute(instruction.originalAttrName);
                if (node.parentNode) {
                  node.parentNode.replaceChild(template, node);
                } else if (window.ShadowDOMPolyfill) {
                  ShadowDOMPolyfill.unwrap(parentNode).replaceChild(ShadowDOMPolyfill.unwrap(template), ShadowDOMPolyfill.unwrap(node));
                } else {
                  parentNode.replaceChild(template, node);
                }
                fragment.appendChild(node);
                instruction.viewFactory = compiler.compile(fragment, resources);
                node = template;
              }
              instruction.suppressBind = true;
              return node;
            },
            writable: true,
            configurable: true
          },
          create: {
            value: function create(container, instruction, element) {
              var executionContext = instruction.executionContext || container.get(this.target),
                  behaviorInstance = new BehaviorInstance(this, executionContext, instruction);
              element.primaryBehavior = behaviorInstance;
              if (!(this.apiName in element)) {
                element[this.apiName] = behaviorInstance.executionContext;
              }
              return behaviorInstance;
            },
            writable: true,
            configurable: true
          }
        });
        return TemplateController;
      })(ResourceType));
    }
  };
});



System.register("github:aurelia/templating@0.8.11/system/resource-coordinator", ["aurelia-loader", "aurelia-path", "aurelia-dependency-injection", "aurelia-metadata", "aurelia-binding", "./custom-element", "./attached-behavior", "./template-controller", "./view-engine", "./resource-registry"], function(_export) {
  "use strict";
  var Loader,
      relativeToFile,
      join,
      Container,
      Metadata,
      ResourceType,
      Origin,
      ValueConverter,
      CustomElement,
      AttachedBehavior,
      TemplateController,
      ViewEngine,
      ResourceRegistry,
      _prototypeProperties,
      id,
      ResourceCoordinator,
      ResourceModule;
  function nextId() {
    return ++id;
  }
  function analyzeModule(moduleInstance, viewModelMember) {
    var viewModelType,
        fallback,
        annotation,
        key,
        meta,
        exportedValue,
        resources = [],
        name,
        conventional;
    if (typeof moduleInstance === "function") {
      moduleInstance = {"default": moduleInstance};
    }
    if (viewModelMember) {
      viewModelType = moduleInstance[viewModelMember];
    }
    for (key in moduleInstance) {
      exportedValue = moduleInstance[key];
      if (key === viewModelMember || typeof exportedValue !== "function") {
        continue;
      }
      meta = Metadata.on(exportedValue);
      annotation = meta.first(ResourceType);
      if (annotation) {
        if (!viewModelType && annotation instanceof CustomElement) {
          viewModelType = exportedValue;
        } else {
          resources.push({
            type: annotation,
            value: exportedValue
          });
        }
      } else {
        name = exportedValue.name;
        if (conventional = CustomElement.convention(name)) {
          if (!viewModelType) {
            meta.add(conventional);
            viewModelType = exportedValue;
          } else {
            resources.push({
              type: conventional,
              value: exportedValue
            });
          }
        } else if (conventional = AttachedBehavior.convention(name)) {
          resources.push({
            type: conventional,
            value: exportedValue
          });
        } else if (conventional = TemplateController.convention(name)) {
          resources.push({
            type: conventional,
            value: exportedValue
          });
        } else if (conventional = ValueConverter.convention(name)) {
          resources.push({
            type: conventional,
            value: exportedValue
          });
        } else if (!fallback) {
          fallback = exportedValue;
        }
      }
    }
    viewModelType = viewModelType || fallback;
    return new ResourceModule(moduleInstance, viewModelType ? {
      value: viewModelType,
      type: Metadata.on(viewModelType).first(CustomElement) || new CustomElement()
    } : null, resources);
  }
  return {
    setters: [function(_aureliaLoader) {
      Loader = _aureliaLoader.Loader;
    }, function(_aureliaPath) {
      relativeToFile = _aureliaPath.relativeToFile;
      join = _aureliaPath.join;
    }, function(_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
    }, function(_aureliaMetadata) {
      Metadata = _aureliaMetadata.Metadata;
      ResourceType = _aureliaMetadata.ResourceType;
      Origin = _aureliaMetadata.Origin;
    }, function(_aureliaBinding) {
      ValueConverter = _aureliaBinding.ValueConverter;
    }, function(_customElement) {
      CustomElement = _customElement.CustomElement;
    }, function(_attachedBehavior) {
      AttachedBehavior = _attachedBehavior.AttachedBehavior;
    }, function(_templateController) {
      TemplateController = _templateController.TemplateController;
    }, function(_viewEngine) {
      ViewEngine = _viewEngine.ViewEngine;
    }, function(_resourceRegistry) {
      ResourceRegistry = _resourceRegistry.ResourceRegistry;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      id = 0;
      ResourceCoordinator = _export("ResourceCoordinator", (function() {
        function ResourceCoordinator(loader, container, viewEngine, appResources) {
          this.loader = loader;
          this.container = container;
          this.viewEngine = viewEngine;
          this.importedModules = {};
          this.importedAnonymous = {};
          this.appResources = appResources;
          viewEngine.resourceCoordinator = this;
        }
        _prototypeProperties(ResourceCoordinator, {inject: {
            value: function inject() {
              return [Loader, Container, ViewEngine, ResourceRegistry];
            },
            writable: true,
            configurable: true
          }}, {
          getExistingModuleAnalysis: {
            value: function getExistingModuleAnalysis(id) {
              return this.importedModules[id] || this.importedAnonymous[id];
            },
            writable: true,
            configurable: true
          },
          loadViewModelInfo: {
            value: function loadViewModelInfo(moduleImport, moduleMember) {
              return this._loadAndAnalyzeModuleForElement(moduleImport, moduleMember, this.importedAnonymous, true);
            },
            writable: true,
            configurable: true
          },
          loadElement: {
            value: function loadElement(moduleImport, moduleMember, viewStategy) {
              var _this = this;
              return this._loadAndAnalyzeModuleForElement(moduleImport, moduleMember, this.importedModules, false).then(function(info) {
                var type = info.type;
                if (type.isLoaded) {
                  return type;
                }
                type.isLoaded = true;
                return type.load(_this.container, info.value, viewStategy);
              });
            },
            writable: true,
            configurable: true
          },
          _loadAndAnalyzeModuleForElement: {
            value: function _loadAndAnalyzeModuleForElement(moduleImport, moduleMember, cache, skipCacheLookup) {
              var _this = this;
              var existing = !skipCacheLookup && cache[moduleImport];
              if (existing) {
                return Promise.resolve(existing.element);
              }
              return this.loader.loadModule(moduleImport).then(function(elementModule) {
                var analysis = analyzeModule(elementModule, moduleMember),
                    resources = analysis.resources,
                    container = _this.container,
                    loads = [],
                    type,
                    current,
                    i,
                    ii;
                if (!analysis.element) {
                  throw new Error("No element found in module \"" + moduleImport + "\".");
                }
                analysis.analyze(container);
                for (i = 0, ii = resources.length; i < ii; ++i) {
                  current = resources[i];
                  type = current.type;
                  if (!type.isLoaded) {
                    type.isLoaded = true;
                    loads.push(type.load(container, current.value));
                  }
                }
                cache[analysis.id] = analysis;
                return Promise.all(loads).then(function() {
                  return analysis.element;
                });
              });
            },
            writable: true,
            configurable: true
          },
          importResources: {
            value: function importResources(imports, resourceManifestUrl) {
              var i,
                  ii,
                  current,
                  annotation,
                  existing,
                  lookup = {},
                  finalModules = [],
                  importIds = [],
                  analysis,
                  type;
              var container = this.container;
              for (i = 0, ii = imports.length; i < ii; ++i) {
                current = imports[i];
                annotation = Origin.get(current);
                if (!annotation) {
                  analysis = analyzeModule({"default": current});
                  analysis.analyze(container);
                  type = (analysis.element || analysis.resources[0]).type;
                  if (resourceManifestUrl) {
                    annotation = new Origin(relativeToFile("./" + type.name, resourceManifestUrl));
                  } else {
                    annotation = new Origin(join(this.appResources.baseResourceUrl, type.name));
                  }
                  Origin.set(current, annotation);
                }
                existing = lookup[annotation.moduleId];
                if (!existing) {
                  existing = {};
                  importIds.push(annotation.moduleId);
                  finalModules.push(existing);
                  lookup[annotation.moduleId] = existing;
                }
                existing[nextId()] = current;
              }
              return this.importResourcesFromModules(finalModules, importIds);
            },
            writable: true,
            configurable: true
          },
          importResourcesFromModuleIds: {
            value: function importResourcesFromModuleIds(importIds) {
              var _this = this;
              return this.loader.loadAllModules(importIds).then(function(imports) {
                return _this.importResourcesFromModules(imports, importIds);
              });
            },
            writable: true,
            configurable: true
          },
          importResourcesFromModules: {
            value: function importResourcesFromModules(imports, importIds) {
              var loads = [],
                  i,
                  ii,
                  analysis,
                  type,
                  key,
                  annotation,
                  j,
                  jj,
                  resources,
                  current,
                  existing = this.importedModules,
                  container = this.container,
                  allAnalysis = new Array(imports.length);
              if (!importIds) {
                importIds = new Array(imports.length);
                for (i = 0, ii = imports.length; i < ii; ++i) {
                  current = imports[i];
                  for (key in current) {
                    type = current[key];
                    annotation = Origin.get(type);
                    if (annotation) {
                      importIds[i] = annotation.moduleId;
                      break;
                    }
                  }
                }
              }
              for (i = 0, ii = imports.length; i < ii; ++i) {
                analysis = existing[importIds[i]];
                if (analysis) {
                  allAnalysis[i] = analysis;
                  continue;
                }
                analysis = analyzeModule(imports[i]);
                analysis.analyze(container);
                existing[analysis.id] = analysis;
                allAnalysis[i] = analysis;
                resources = analysis.resources;
                for (j = 0, jj = resources.length; j < jj; ++j) {
                  current = resources[j];
                  type = current.type;
                  if (!type.isLoaded) {
                    type.isLoaded = true;
                    loads.push(type.load(container, current.value));
                  }
                }
                if (analysis.element) {
                  type = analysis.element.type;
                  if (!type.isLoaded) {
                    type.isLoaded = true;
                    loads.push(type.load(container, analysis.element.value));
                  }
                }
              }
              return Promise.all(loads).then(function() {
                return allAnalysis;
              });
            },
            writable: true,
            configurable: true
          }
        });
        return ResourceCoordinator;
      })());
      ResourceModule = (function() {
        function ResourceModule(source, element, resources) {
          var i,
              ii,
              org;
          this.source = source;
          this.element = element;
          this.resources = resources;
          if (element) {
            org = Origin.get(element.value);
          } else if (resources.length) {
            org = Origin.get(resources[0].value);
          } else {
            org = Origin.get(source);
          }
          if (org) {
            this.id = org.moduleId;
          }
        }
        _prototypeProperties(ResourceModule, null, {
          analyze: {
            value: function analyze(container) {
              var current = this.element,
                  resources = this.resources,
                  i,
                  ii;
              if (current) {
                if (!current.type.isAnalyzed) {
                  current.type.isAnalyzed = true;
                  current.type.analyze(container, current.value);
                }
              }
              for (i = 0, ii = resources.length; i < ii; ++i) {
                current = resources[i];
                if ("analyze" in current.type && !current.type.isAnalyzed) {
                  current.type.isAnalyzed = true;
                  current.type.analyze(container, current.value);
                }
              }
            },
            writable: true,
            configurable: true
          },
          register: {
            value: function register(registry, name) {
              var i,
                  ii,
                  resources = this.resources;
              if (this.element) {
                this.element.type.register(registry, name);
                name = null;
              }
              for (i = 0, ii = resources.length; i < ii; ++i) {
                resources[i].type.register(registry, name);
                name = null;
              }
            },
            writable: true,
            configurable: true
          }
        });
        return ResourceModule;
      })();
    }
  };
});



System.register("github:aurelia/templating@0.8.11/system/composition-engine", ["aurelia-metadata", "./view-strategy", "./resource-coordinator", "./view-engine", "./custom-element"], function(_export) {
  "use strict";
  var Origin,
      ViewStrategy,
      UseView,
      ResourceCoordinator,
      ViewEngine,
      CustomElement,
      _prototypeProperties,
      CompositionEngine;
  return {
    setters: [function(_aureliaMetadata) {
      Origin = _aureliaMetadata.Origin;
    }, function(_viewStrategy) {
      ViewStrategy = _viewStrategy.ViewStrategy;
      UseView = _viewStrategy.UseView;
    }, function(_resourceCoordinator) {
      ResourceCoordinator = _resourceCoordinator.ResourceCoordinator;
    }, function(_viewEngine) {
      ViewEngine = _viewEngine.ViewEngine;
    }, function(_customElement) {
      CustomElement = _customElement.CustomElement;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      CompositionEngine = _export("CompositionEngine", (function() {
        function CompositionEngine(resourceCoordinator, viewEngine) {
          this.resourceCoordinator = resourceCoordinator;
          this.viewEngine = viewEngine;
        }
        _prototypeProperties(CompositionEngine, {inject: {
            value: function inject() {
              return [ResourceCoordinator, ViewEngine];
            },
            writable: true,
            configurable: true
          }}, {
          activate: {
            value: function activate(instruction) {
              if (instruction.skipActivation || typeof instruction.viewModel.activate !== "function") {
                return Promise.resolve();
              }
              return instruction.viewModel.activate(instruction.model) || Promise.resolve();
            },
            writable: true,
            configurable: true
          },
          createBehaviorAndSwap: {
            value: function createBehaviorAndSwap(instruction) {
              return this.createBehavior(instruction).then(function(behavior) {
                behavior.view.bind(behavior.executionContext);
                instruction.viewSlot.swap(behavior.view);
                if (instruction.currentBehavior) {
                  instruction.currentBehavior.unbind();
                }
                return behavior;
              });
            },
            writable: true,
            configurable: true
          },
          createBehavior: {
            value: function createBehavior(instruction) {
              var childContainer = instruction.childContainer,
                  viewModelInfo = instruction.viewModelInfo,
                  viewModel = instruction.viewModel;
              return this.activate(instruction).then(function() {
                var doneLoading,
                    viewStrategyFromViewModel,
                    origin;
                if ("getViewStrategy" in viewModel && !instruction.view) {
                  viewStrategyFromViewModel = true;
                  instruction.view = ViewStrategy.normalize(viewModel.getViewStrategy());
                }
                if (instruction.view) {
                  if (viewStrategyFromViewModel) {
                    origin = Origin.get(viewModel.constructor);
                    if (origin) {
                      instruction.view.makeRelativeTo(origin.moduleId);
                    }
                  } else if (instruction.viewResources) {
                    instruction.view.makeRelativeTo(instruction.viewResources.viewUrl);
                  }
                }
                if (viewModelInfo) {
                  doneLoading = viewModelInfo.type.load(childContainer, viewModelInfo.value, instruction.view);
                } else {
                  doneLoading = new CustomElement().load(childContainer, viewModel.constructor, instruction.view);
                }
                return doneLoading.then(function(behaviorType) {
                  return behaviorType.create(childContainer, {
                    executionContext: viewModel,
                    suppressBind: true
                  });
                });
              });
            },
            writable: true,
            configurable: true
          },
          createViewModel: {
            value: function createViewModel(instruction) {
              var childContainer = instruction.childContainer || instruction.container.createChild();
              instruction.viewModel = instruction.viewResources ? instruction.viewResources.relativeToView(instruction.viewModel) : instruction.viewModel;
              return this.resourceCoordinator.loadViewModelInfo(instruction.viewModel).then(function(viewModelInfo) {
                childContainer.autoRegister(viewModelInfo.value);
                instruction.viewModel = childContainer.viewModel = childContainer.get(viewModelInfo.value);
                instruction.viewModelInfo = viewModelInfo;
                return instruction;
              });
            },
            writable: true,
            configurable: true
          },
          compose: {
            value: function compose(instruction) {
              var _this = this;
              instruction.childContainer = instruction.childContainer || instruction.container.createChild();
              instruction.view = ViewStrategy.normalize(instruction.view);
              if (instruction.viewModel) {
                if (typeof instruction.viewModel === "string") {
                  return this.createViewModel(instruction).then(function(instruction) {
                    return _this.createBehaviorAndSwap(instruction);
                  });
                } else {
                  return this.createBehaviorAndSwap(instruction);
                }
              } else if (instruction.view) {
                if (instruction.viewResources) {
                  instruction.view.makeRelativeTo(instruction.viewResources.viewUrl);
                }
                return instruction.view.loadViewFactory(this.viewEngine).then(function(viewFactory) {
                  var result = viewFactory.create(instruction.childContainer, instruction.executionContext);
                  instruction.viewSlot.swap(result);
                  return result;
                });
              } else if (instruction.viewSlot) {
                instruction.viewSlot.removeAll();
                return Promise.resolve(null);
              }
            },
            writable: true,
            configurable: true
          }
        });
        return CompositionEngine;
      })());
    }
  };
});



System.register("github:aurelia/framework@0.8.6/system/plugins", ["aurelia-logging", "aurelia-metadata"], function(_export) {
  "use strict";
  var LogManager,
      Metadata,
      _prototypeProperties,
      logger,
      Plugins;
  function loadPlugin(aurelia, loader, info) {
    logger.debug("Loading plugin " + info.moduleId + ".");
    aurelia.currentPluginId = info.moduleId;
    var baseUrl = info.moduleId.startsWith("./") ? undefined : "";
    return loader.loadModule(info.moduleId, baseUrl).then(function(exportedValue) {
      if ("install" in exportedValue) {
        var result = exportedValue.install(aurelia, info.config || {});
        if (result) {
          return result.then(function() {
            aurelia.currentPluginId = null;
            logger.debug("Installed plugin " + info.moduleId + ".");
          });
        } else {
          logger.debug("Installed plugin " + info.moduleId + ".");
        }
      } else {
        logger.debug("Loaded plugin " + info.moduleId + ".");
      }
      aurelia.currentPluginId = null;
    });
  }
  return {
    setters: [function(_aureliaLogging) {
      LogManager = _aureliaLogging;
    }, function(_aureliaMetadata) {
      Metadata = _aureliaMetadata.Metadata;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      logger = LogManager.getLogger("aurelia");
      Plugins = _export("Plugins", (function() {
        function Plugins(aurelia) {
          this.aurelia = aurelia;
          this.info = [];
          this.processed = false;
        }
        _prototypeProperties(Plugins, null, {
          plugin: {
            value: function plugin(moduleId, config) {
              var plugin = {
                moduleId: moduleId,
                config: config || {}
              };
              if (this.processed) {
                loadPlugin(this.aurelia, this.aurelia.loader, plugin);
              } else {
                this.info.push(plugin);
              }
              return this;
            },
            writable: true,
            configurable: true
          },
          es5: {
            value: function es5() {
              Function.prototype.computed = function(computedProperties) {
                for (var key in computedProperties) {
                  if (computedProperties.hasOwnProperty(key)) {
                    Object.defineProperty(this.prototype, key, {
                      get: computedProperties[key],
                      enumerable: true
                    });
                  }
                }
              };
              return this;
            },
            writable: true,
            configurable: true
          },
          atscript: {
            value: function atscript() {
              this.aurelia.container.supportAtScript();
              Metadata.configure.locator(function(fn) {
                return fn.annotate || fn.annotations;
              });
              return this;
            },
            writable: true,
            configurable: true
          },
          _process: {
            value: function _process() {
              var _this = this;
              var aurelia = this.aurelia,
                  loader = aurelia.loader,
                  info = this.info,
                  current;
              if (this.processed) {
                return ;
              }
              var next = function() {
                if (current = info.shift()) {
                  return loadPlugin(aurelia, loader, current).then(next);
                }
                _this.processed = true;
                return Promise.resolve();
              };
              return next();
            },
            writable: true,
            configurable: true
          }
        });
        return Plugins;
      })());
    }
  };
});



System.register("github:aurelia/logging-console@0.2.2/system/index", [], function(_export) {
  "use strict";
  var _toArray,
      _prototypeProperties,
      ConsoleAppender;
  return {
    setters: [],
    execute: function() {
      _toArray = function(arr) {
        return Array.isArray(arr) ? arr : Array.from(arr);
      };
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      ConsoleAppender = (function() {
        function ConsoleAppender() {}
        _prototypeProperties(ConsoleAppender, null, {
          debug: {
            value: function debug(logger, message) {
              for (var _len = arguments.length,
                  rest = Array(_len > 2 ? _len - 2 : 0),
                  _key = 2; _key < _len; _key++) {
                rest[_key - 2] = arguments[_key];
              }
              console.debug.apply(console, ["DEBUG [" + logger.id + "] " + message].concat(_toArray(rest)));
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          info: {
            value: function info(logger, message) {
              for (var _len2 = arguments.length,
                  rest = Array(_len2 > 2 ? _len2 - 2 : 0),
                  _key2 = 2; _key2 < _len2; _key2++) {
                rest[_key2 - 2] = arguments[_key2];
              }
              console.info.apply(console, ["INFO [" + logger.id + "] " + message].concat(_toArray(rest)));
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          warn: {
            value: function warn(logger, message) {
              for (var _len3 = arguments.length,
                  rest = Array(_len3 > 2 ? _len3 - 2 : 0),
                  _key3 = 2; _key3 < _len3; _key3++) {
                rest[_key3 - 2] = arguments[_key3];
              }
              console.warn.apply(console, ["WARN [" + logger.id + "] " + message].concat(_toArray(rest)));
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          error: {
            value: function error(logger, message) {
              for (var _len4 = arguments.length,
                  rest = Array(_len4 > 2 ? _len4 - 2 : 0),
                  _key4 = 2; _key4 < _len4; _key4++) {
                rest[_key4 - 2] = arguments[_key4];
              }
              console.error.apply(console, ["ERROR [" + logger.id + "] " + message].concat(_toArray(rest)));
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return ConsoleAppender;
      })();
      _export("ConsoleAppender", ConsoleAppender);
    }
  };
});



System.register("github:aurelia/templating-binding@0.8.4/system/syntax-interpreter", ["aurelia-binding"], function(_export) {
  "use strict";
  var Parser,
      ObserverLocator,
      EventManager,
      ListenerExpression,
      BindingExpression,
      NameExpression,
      CallExpression,
      ONE_WAY,
      TWO_WAY,
      ONE_TIME,
      _prototypeProperties,
      SyntaxInterpreter;
  return {
    setters: [function(_aureliaBinding) {
      Parser = _aureliaBinding.Parser;
      ObserverLocator = _aureliaBinding.ObserverLocator;
      EventManager = _aureliaBinding.EventManager;
      ListenerExpression = _aureliaBinding.ListenerExpression;
      BindingExpression = _aureliaBinding.BindingExpression;
      NameExpression = _aureliaBinding.NameExpression;
      CallExpression = _aureliaBinding.CallExpression;
      ONE_WAY = _aureliaBinding.ONE_WAY;
      TWO_WAY = _aureliaBinding.TWO_WAY;
      ONE_TIME = _aureliaBinding.ONE_TIME;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      SyntaxInterpreter = (function() {
        function SyntaxInterpreter(parser, observerLocator, eventManager) {
          this.parser = parser;
          this.observerLocator = observerLocator;
          this.eventManager = eventManager;
        }
        _prototypeProperties(SyntaxInterpreter, {inject: {
            value: function inject() {
              return [Parser, ObserverLocator, EventManager];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {
          interpret: {
            value: function interpret(resources, element, info, existingInstruction) {
              if (info.command in this) {
                return this[info.command](resources, element, info, existingInstruction);
              }
              return this.handleUnknownCommand(resources, element, info, existingInstruction);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          handleUnknownCommand: {
            value: function handleUnknownCommand(resources, element, info, existingInstruction) {
              var attrName = info.attrName,
                  command = info.command;
              var instruction = this.options(resources, element, info, existingInstruction);
              instruction.alteredAttr = true;
              instruction.attrName = "global-behavior";
              instruction.attributes.aureliaAttrName = attrName;
              instruction.attributes.aureliaCommand = command;
              return instruction;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          determineDefaultBindingMode: {
            value: function determineDefaultBindingMode(element, attrName) {
              var tagName = element.tagName.toLowerCase();
              if (tagName === "input") {
                return attrName === "value" || attrName === "checked" ? TWO_WAY : ONE_WAY;
              } else if (tagName == "textarea" || tagName == "select") {
                return attrName == "value" ? TWO_WAY : ONE_WAY;
              }
              return ONE_WAY;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          bind: {
            value: function bind(resources, element, info, existingInstruction) {
              var instruction = existingInstruction || {
                attrName: info.attrName,
                attributes: {}
              };
              instruction.attributes[info.attrName] = new BindingExpression(this.observerLocator, this.attributeMap[info.attrName] || info.attrName, this.parser.parse(info.attrValue), info.defaultBindingMode || this.determineDefaultBindingMode(element, info.attrName), resources.valueConverterLookupFunction);
              return instruction;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          trigger: {
            value: function trigger(resources, element, info) {
              return new ListenerExpression(this.eventManager, info.attrName, this.parser.parse(info.attrValue), false, true);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          delegate: {
            value: function delegate(resources, element, info) {
              return new ListenerExpression(this.eventManager, info.attrName, this.parser.parse(info.attrValue), true, true);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          call: {
            value: function call(resources, element, info, existingInstruction) {
              var instruction = existingInstruction || {
                attrName: info.attrName,
                attributes: {}
              };
              instruction.attributes[info.attrName] = new CallExpression(this.observerLocator, info.attrName, this.parser.parse(info.attrValue), resources.valueConverterLookupFunction);
              return instruction;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          options: {
            value: function options(resources, element, info, existingInstruction) {
              var instruction = existingInstruction || {
                attrName: info.attrName,
                attributes: {}
              },
                  attrValue = info.attrValue,
                  language = this.language,
                  name = null,
                  target = "",
                  current,
                  i,
                  ii;
              for (i = 0, ii = attrValue.length; i < ii; ++i) {
                current = attrValue[i];
                if (current === ";") {
                  info = language.inspectAttribute(resources, name, target.trim());
                  language.createAttributeInstruction(resources, element, info, instruction);
                  if (!instruction.attributes[info.attrName]) {
                    instruction.attributes[info.attrName] = info.attrValue;
                  }
                  target = "";
                  name = null;
                } else if (current === ":" && name === null) {
                  name = target.trim();
                  target = "";
                } else {
                  target += current;
                }
              }
              if (name !== null) {
                info = language.inspectAttribute(resources, name, target.trim());
                language.createAttributeInstruction(resources, element, info, instruction);
                if (!instruction.attributes[info.attrName]) {
                  instruction.attributes[info.attrName] = info.attrValue;
                }
              }
              return instruction;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return SyntaxInterpreter;
      })();
      _export("SyntaxInterpreter", SyntaxInterpreter);
      SyntaxInterpreter.prototype["for"] = function(resources, element, info, existingInstruction) {
        var parts = info.attrValue.split(" of ");
        if (parts.length !== 2) {
          throw new Error("Incorrect syntax for \"for\". The form is: \"$local of $items\".");
        }
        var instruction = existingInstruction || {
          attrName: info.attrName,
          attributes: {}
        };
        instruction.attributes.local = parts[0];
        instruction.attributes[info.attrName] = new BindingExpression(this.observerLocator, info.attrName, this.parser.parse(parts[1]), ONE_WAY, resources.valueConverterLookupFunction);
        return instruction;
      };
      SyntaxInterpreter.prototype["two-way"] = function(resources, element, info, existingInstruction) {
        var instruction = existingInstruction || {
          attrName: info.attrName,
          attributes: {}
        };
        instruction.attributes[info.attrName] = new BindingExpression(this.observerLocator, info.attrName, this.parser.parse(info.attrValue), TWO_WAY, resources.valueConverterLookupFunction);
        return instruction;
      };
      SyntaxInterpreter.prototype["one-way"] = function(resources, element, info, existingInstruction) {
        var instruction = existingInstruction || {
          attrName: info.attrName,
          attributes: {}
        };
        instruction.attributes[info.attrName] = new BindingExpression(this.observerLocator, this.attributeMap[info.attrName] || info.attrName, this.parser.parse(info.attrValue), ONE_WAY, resources.valueConverterLookupFunction);
        return instruction;
      };
      SyntaxInterpreter.prototype["one-time"] = function(resources, element, info, existingInstruction) {
        var instruction = existingInstruction || {
          attrName: info.attrName,
          attributes: {}
        };
        instruction.attributes[info.attrName] = new BindingExpression(this.observerLocator, this.attributeMap[info.attrName] || info.attrName, this.parser.parse(info.attrValue), ONE_TIME, resources.valueConverterLookupFunction);
        return instruction;
      };
      SyntaxInterpreter.prototype["view-model"] = function(resources, element, info) {
        return new NameExpression(info.attrValue, "view-model");
      };
    }
  };
});



System.register("github:aurelia/route-recognizer@0.2.2/system/dsl", [], function(_export) {
  "use strict";
  _export("map", map);
  function Target(path, matcher, delegate) {
    this.path = path;
    this.matcher = matcher;
    this.delegate = delegate;
  }
  function Matcher(target) {
    this.routes = {};
    this.children = {};
    this.target = target;
  }
  function generateMatch(startingPath, matcher, delegate) {
    return function(path, nestedCallback) {
      var fullPath = startingPath + path;
      if (nestedCallback) {
        nestedCallback(generateMatch(fullPath, matcher, delegate));
      } else {
        return new Target(startingPath + path, matcher, delegate);
      }
    };
  }
  function addRoute(routeArray, path, handler) {
    var len = 0;
    for (var i = 0,
        l = routeArray.length; i < l; i++) {
      len += routeArray[i].path.length;
    }
    path = path.substr(len);
    var route = {
      path: path,
      handler: handler
    };
    routeArray.push(route);
  }
  function eachRoute(baseRoute, matcher, callback, binding) {
    var routes = matcher.routes;
    for (var path in routes) {
      if (routes.hasOwnProperty(path)) {
        var routeArray = baseRoute.slice();
        addRoute(routeArray, path, routes[path]);
        if (matcher.children[path]) {
          eachRoute(routeArray, matcher.children[path], callback, binding);
        } else {
          callback.call(binding, routeArray);
        }
      }
    }
  }
  function map(callback, addRouteCallback) {
    var matcher = new Matcher();
    callback(generateMatch("", matcher, this.delegate));
    eachRoute([], matcher, function(route) {
      if (addRouteCallback) {
        addRouteCallback(this, route);
      } else {
        this.add(route);
      }
    }, this);
  }
  return {
    setters: [],
    execute: function() {
      Target.prototype = {to: function(target, callback) {
          var delegate = this.delegate;
          if (delegate && delegate.willAddRoute) {
            target = delegate.willAddRoute(this.matcher.target, target);
          }
          this.matcher.add(this.path, target);
          if (callback) {
            if (callback.length === 0) {
              throw new Error("You must have an argument in the function passed to `to`");
            }
            this.matcher.addChild(this.path, target, callback, this.delegate);
          }
          return this;
        }};
      Matcher.prototype = {
        add: function(path, handler) {
          this.routes[path] = handler;
        },
        addChild: function(path, target, callback, delegate) {
          var matcher = new Matcher(target);
          this.children[path] = matcher;
          var match = generateMatch(path, matcher, delegate);
          if (delegate && delegate.contextEntered) {
            delegate.contextEntered(target, match);
          }
          callback(match);
        }
      };
    }
  };
});



System.register("github:aurelia/router@0.5.5/system/navigation-plan", [], function(_export) {
  "use strict";
  var _toArray,
      _prototypeProperties,
      NO_CHANGE,
      INVOKE_LIFECYCLE,
      REPLACE,
      BuildNavigationPlanStep;
  _export("buildNavigationPlan", buildNavigationPlan);
  function buildNavigationPlan(navigationContext, forceLifecycleMinimum) {
    var prev = navigationContext.prevInstruction;
    var next = navigationContext.nextInstruction;
    var plan = {},
        viewPortName;
    if (prev) {
      var newParams = hasDifferentParameterValues(prev, next);
      var pending = [];
      for (viewPortName in prev.viewPortInstructions) {
        var prevViewPortInstruction = prev.viewPortInstructions[viewPortName];
        var nextViewPortConfig = next.config.viewPorts[viewPortName];
        var viewPortPlan = plan[viewPortName] = {
          name: viewPortName,
          config: nextViewPortConfig,
          prevComponent: prevViewPortInstruction.component,
          prevModuleId: prevViewPortInstruction.moduleId
        };
        if (prevViewPortInstruction.moduleId != nextViewPortConfig.moduleId) {
          viewPortPlan.strategy = REPLACE;
        } else if ("determineActivationStrategy" in prevViewPortInstruction.component.executionContext) {
          var _prevViewPortInstruction$component$executionContext;
          viewPortPlan.strategy = (_prevViewPortInstruction$component$executionContext = prevViewPortInstruction.component.executionContext).determineActivationStrategy.apply(_prevViewPortInstruction$component$executionContext, _toArray(next.lifecycleArgs));
        } else if (newParams || forceLifecycleMinimum) {
          viewPortPlan.strategy = INVOKE_LIFECYCLE;
        } else {
          viewPortPlan.strategy = NO_CHANGE;
        }
        if (viewPortPlan.strategy !== REPLACE && prevViewPortInstruction.childRouter) {
          var path = next.getWildcardPath();
          var task = prevViewPortInstruction.childRouter.createNavigationInstruction(path, next).then(function(childInstruction) {
            viewPortPlan.childNavigationContext = prevViewPortInstruction.childRouter.createNavigationContext(childInstruction);
            return buildNavigationPlan(viewPortPlan.childNavigationContext, viewPortPlan.strategy == INVOKE_LIFECYCLE).then(function(childPlan) {
              viewPortPlan.childNavigationContext.plan = childPlan;
            });
          });
          pending.push(task);
        }
      }
      return Promise.all(pending).then(function() {
        return plan;
      });
    } else {
      for (viewPortName in next.config.viewPorts) {
        plan[viewPortName] = {
          name: viewPortName,
          strategy: REPLACE,
          config: next.config.viewPorts[viewPortName]
        };
      }
      return Promise.resolve(plan);
    }
  }
  function hasDifferentParameterValues(prev, next) {
    var prevParams = prev.params,
        nextParams = next.params,
        nextWildCardName = next.config.hasChildRouter ? next.getWildCardName() : null;
    for (var key in nextParams) {
      if (key == nextWildCardName) {
        continue;
      }
      if (prevParams[key] != nextParams[key]) {
        return true;
      }
    }
    return false;
  }
  return {
    setters: [],
    execute: function() {
      _toArray = function(arr) {
        return Array.isArray(arr) ? arr : Array.from(arr);
      };
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      NO_CHANGE = _export("NO_CHANGE", "no-change");
      INVOKE_LIFECYCLE = _export("INVOKE_LIFECYCLE", "invoke-lifecycle");
      REPLACE = _export("REPLACE", "replace");
      BuildNavigationPlanStep = _export("BuildNavigationPlanStep", (function() {
        function BuildNavigationPlanStep() {}
        _prototypeProperties(BuildNavigationPlanStep, null, {run: {
            value: function run(navigationContext, next) {
              return buildNavigationPlan(navigationContext).then(function(plan) {
                navigationContext.plan = plan;
                return next();
              })["catch"](next.cancel);
            },
            writable: true,
            configurable: true
          }});
        return BuildNavigationPlanStep;
      })());
    }
  };
});



System.register("github:aurelia/router@0.5.5/system/navigation-instruction", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      NavigationInstruction;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      NavigationInstruction = _export("NavigationInstruction", (function() {
        function NavigationInstruction(fragment, queryString, params, queryParams, config, parentInstruction) {
          this.fragment = fragment;
          this.queryString = queryString;
          this.params = params || {};
          this.queryParams = queryParams;
          this.config = config;
          this.lifecycleArgs = [params, queryParams, config];
          this.viewPortInstructions = {};
          if (parentInstruction) {
            this.params.$parent = parentInstruction.params;
          }
        }
        _prototypeProperties(NavigationInstruction, null, {
          addViewPortInstruction: {
            value: function addViewPortInstruction(viewPortName, strategy, moduleId, component) {
              return this.viewPortInstructions[viewPortName] = {
                name: viewPortName,
                strategy: strategy,
                moduleId: moduleId,
                component: component,
                childRouter: component.executionContext.router,
                lifecycleArgs: this.lifecycleArgs.slice()
              };
            },
            writable: true,
            configurable: true
          },
          getWildCardName: {
            value: function getWildCardName() {
              var wildcardIndex = this.config.route.lastIndexOf("*");
              return this.config.route.substr(wildcardIndex + 1);
            },
            writable: true,
            configurable: true
          },
          getWildcardPath: {
            value: function getWildcardPath() {
              var wildcardName = this.getWildCardName(),
                  path = this.params[wildcardName];
              if (this.queryString) {
                path += "?" + this.queryString;
              }
              return path;
            },
            writable: true,
            configurable: true
          },
          getBaseUrl: {
            value: function getBaseUrl() {
              if (!this.params) {
                return this.fragment;
              }
              var wildcardName = this.getWildCardName(),
                  path = this.params[wildcardName];
              if (!path) {
                return this.fragment;
              }
              return this.fragment.substr(0, this.fragment.lastIndexOf(path));
            },
            writable: true,
            configurable: true
          }
        });
        return NavigationInstruction;
      })());
    }
  };
});



System.register("github:aurelia/router@0.5.5/system/router-configuration", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      RouterConfiguration;
  function ensureConfigValue(config, property, getter) {
    var value = config[property];
    if (value || value === "") {
      return value;
    }
    return getter(config);
  }
  function stripParametersFromRoute(route) {
    var colonIndex = route.indexOf(":");
    var length = colonIndex > 0 ? colonIndex - 1 : route.length;
    return route.substr(0, length);
  }
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      RouterConfiguration = _export("RouterConfiguration", (function() {
        function RouterConfiguration() {
          this.instructions = [];
          this.options = {};
        }
        _prototypeProperties(RouterConfiguration, null, {
          map: {
            value: function map(route, config) {
              if (Array.isArray(route)) {
                for (var i = 0; i < route.length; i++) {
                  this.map(route[i]);
                }
                return this;
              }
              if (typeof route == "string") {
                if (!config) {
                  config = {};
                } else if (typeof config == "string") {
                  config = {moduleId: config};
                }
                config.route = route;
              } else {
                config = route;
              }
              return this.mapRoute(config);
            },
            writable: true,
            configurable: true
          },
          mapRoute: {
            value: function mapRoute(config) {
              var _this = this;
              this.instructions.push(function(router) {
                if (Array.isArray(config.route)) {
                  var navModel = {},
                      i,
                      ii,
                      current;
                  for (i = 0, ii = config.route.length; i < ii; ++i) {
                    current = Object.assign({}, config);
                    current.route = config.route[i];
                    _this.configureRoute(router, current, navModel);
                  }
                } else {
                  _this.configureRoute(router, Object.assign({}, config));
                }
              });
              return this;
            },
            writable: true,
            configurable: true
          },
          mapUnknownRoutes: {
            value: function mapUnknownRoutes(config) {
              this.unknownRouteConfig = config;
              return this;
            },
            writable: true,
            configurable: true
          },
          exportToRouter: {
            value: function exportToRouter(router) {
              var instructions = this.instructions,
                  i,
                  ii;
              for (i = 0, ii = instructions.length; i < ii; ++i) {
                instructions[i](router);
              }
              if (this.title) {
                router.title = this.title;
              }
              if (this.unknownRouteConfig) {
                router.handleUnknownRoutes(this.unknownRouteConfig);
              }
              router.options = this.options;
            },
            writable: true,
            configurable: true
          },
          configureRoute: {
            value: function configureRoute(router, config, navModel) {
              this.ensureDefaultsForRouteConfig(config);
              router.addRoute(config, navModel);
            },
            writable: true,
            configurable: true
          },
          ensureDefaultsForRouteConfig: {
            value: function ensureDefaultsForRouteConfig(config) {
              config.name = ensureConfigValue(config, "name", this.deriveName);
              config.route = ensureConfigValue(config, "route", this.deriveRoute);
              config.title = ensureConfigValue(config, "title", this.deriveTitle);
              config.moduleId = ensureConfigValue(config, "moduleId", this.deriveModuleId);
            },
            writable: true,
            configurable: true
          },
          deriveName: {
            value: function deriveName(config) {
              return config.title || (config.route ? stripParametersFromRoute(config.route) : config.moduleId);
            },
            writable: true,
            configurable: true
          },
          deriveRoute: {
            value: function deriveRoute(config) {
              return config.moduleId || config.name;
            },
            writable: true,
            configurable: true
          },
          deriveTitle: {
            value: function deriveTitle(config) {
              var value = config.name;
              return value.substr(0, 1).toUpperCase() + value.substr(1);
            },
            writable: true,
            configurable: true
          },
          deriveModuleId: {
            value: function deriveModuleId(config) {
              return stripParametersFromRoute(config.route);
            },
            writable: true,
            configurable: true
          }
        });
        return RouterConfiguration;
      })());
    }
  };
});



System.register("github:aurelia/router@0.5.5/system/util", [], function(_export) {
  "use strict";
  _export("processPotential", processPotential);
  function processPotential(obj, resolve, reject) {
    if (obj && typeof obj.then === "function") {
      var dfd = obj.then(resolve);
      if (typeof dfd["catch"] === "function") {
        return dfd["catch"](reject);
      } else if (typeof dfd.fail === "function") {
        return dfd.fail(reject);
      }
      return dfd;
    } else {
      try {
        return resolve(obj);
      } catch (error) {
        return reject(error);
      }
    }
  }
  return {
    setters: [],
    execute: function() {}
  };
});



System.register("github:aurelia/history@0.2.2/system/index", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      History;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      History = (function() {
        function History() {}
        _prototypeProperties(History, null, {
          activate: {
            value: function activate() {
              throw new Error("History must implement activate().");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          deactivate: {
            value: function deactivate() {
              throw new Error("History must implement deactivate().");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          navigate: {
            value: function navigate() {
              throw new Error("History must implement navigate().");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          navigateBack: {
            value: function navigateBack() {
              throw new Error("History must implement navigateBack().");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return History;
      })();
      _export("History", History);
    }
  };
});



System.register("github:aurelia/router@0.5.5/system/pipeline", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      COMPLETED,
      CANCELLED,
      REJECTED,
      RUNNING,
      Pipeline;
  function createResult(ctx, next) {
    return {
      status: next.status,
      context: ctx,
      output: next.output,
      completed: next.status == COMPLETED
    };
  }
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      COMPLETED = _export("COMPLETED", "completed");
      CANCELLED = _export("CANCELLED", "cancelled");
      REJECTED = _export("REJECTED", "rejected");
      RUNNING = _export("RUNNING", "running");
      Pipeline = _export("Pipeline", (function() {
        function Pipeline() {
          this.steps = [];
        }
        _prototypeProperties(Pipeline, null, {
          withStep: {
            value: function withStep(step) {
              var run;
              if (typeof step == "function") {
                run = step;
              } else {
                run = step.run.bind(step);
              }
              this.steps.push(run);
              return this;
            },
            writable: true,
            configurable: true
          },
          run: {
            value: function run(ctx) {
              var index = -1,
                  steps = this.steps,
                  next,
                  currentStep;
              next = function() {
                index++;
                if (index < steps.length) {
                  currentStep = steps[index];
                  try {
                    return currentStep(ctx, next);
                  } catch (e) {
                    return next.reject(e);
                  }
                } else {
                  return next.complete();
                }
              };
              next.complete = function(output) {
                next.status = COMPLETED;
                next.output = output;
                return Promise.resolve(createResult(ctx, next));
              };
              next.cancel = function(reason) {
                next.status = CANCELLED;
                next.output = reason;
                return Promise.resolve(createResult(ctx, next));
              };
              next.reject = function(error) {
                next.status = REJECTED;
                next.output = error;
                return Promise.reject(createResult(ctx, next));
              };
              next.status = RUNNING;
              return next();
            },
            writable: true,
            configurable: true
          }
        });
        return Pipeline;
      })());
    }
  };
});



System.register("github:aurelia/router@0.5.5/system/model-binding", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      ApplyModelBindersStep;
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      ApplyModelBindersStep = _export("ApplyModelBindersStep", (function() {
        function ApplyModelBindersStep() {}
        _prototypeProperties(ApplyModelBindersStep, null, {run: {
            value: function run(navigationContext, next) {
              return next();
            },
            writable: true,
            configurable: true
          }});
        return ApplyModelBindersStep;
      })());
    }
  };
});



System.register("github:aurelia/router@0.5.5/system/route-loading", ["./navigation-plan"], function(_export) {
  "use strict";
  var REPLACE,
      buildNavigationPlan,
      _prototypeProperties,
      RouteLoader,
      LoadRouteStep;
  _export("loadNewRoute", loadNewRoute);
  function loadNewRoute(routers, routeLoader, navigationContext) {
    var toLoad = determineWhatToLoad(navigationContext);
    var loadPromises = toLoad.map(function(current) {
      return loadRoute(routers, routeLoader, current.navigationContext, current.viewPortPlan);
    });
    return Promise.all(loadPromises);
  }
  function determineWhatToLoad(navigationContext, toLoad) {
    var plan = navigationContext.plan;
    var next = navigationContext.nextInstruction;
    toLoad = toLoad || [];
    for (var viewPortName in plan) {
      var viewPortPlan = plan[viewPortName];
      if (viewPortPlan.strategy == REPLACE) {
        toLoad.push({
          viewPortPlan: viewPortPlan,
          navigationContext: navigationContext
        });
        if (viewPortPlan.childNavigationContext) {
          determineWhatToLoad(viewPortPlan.childNavigationContext, toLoad);
        }
      } else {
        var viewPortInstruction = next.addViewPortInstruction(viewPortName, viewPortPlan.strategy, viewPortPlan.prevModuleId, viewPortPlan.prevComponent);
        if (viewPortPlan.childNavigationContext) {
          viewPortInstruction.childNavigationContext = viewPortPlan.childNavigationContext;
          determineWhatToLoad(viewPortPlan.childNavigationContext, toLoad);
        }
      }
    }
    return toLoad;
  }
  function loadRoute(routers, routeLoader, navigationContext, viewPortPlan) {
    var moduleId = viewPortPlan.config.moduleId;
    var next = navigationContext.nextInstruction;
    routers.push(navigationContext.router);
    return loadComponent(routeLoader, navigationContext.router, viewPortPlan.config).then(function(component) {
      var viewPortInstruction = next.addViewPortInstruction(viewPortPlan.name, viewPortPlan.strategy, moduleId, component);
      var controller = component.executionContext;
      if (controller.router && routers.indexOf(controller.router) === -1) {
        var path = next.getWildcardPath();
        return controller.router.createNavigationInstruction(path, next).then(function(childInstruction) {
          viewPortPlan.childNavigationContext = controller.router.createNavigationContext(childInstruction);
          return buildNavigationPlan(viewPortPlan.childNavigationContext).then(function(childPlan) {
            viewPortPlan.childNavigationContext.plan = childPlan;
            viewPortInstruction.childNavigationContext = viewPortPlan.childNavigationContext;
            return loadNewRoute(routers, routeLoader, viewPortPlan.childNavigationContext);
          });
        });
      }
    });
  }
  function loadComponent(routeLoader, router, config) {
    return routeLoader.loadRoute(router, config).then(function(component) {
      if ("configureRouter" in component.executionContext) {
        var result = component.executionContext.configureRouter() || Promise.resolve();
        return result.then(function() {
          return component;
        });
      }
      component.router = router;
      component.config = config;
      return component;
    });
  }
  return {
    setters: [function(_navigationPlan) {
      REPLACE = _navigationPlan.REPLACE;
      buildNavigationPlan = _navigationPlan.buildNavigationPlan;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      RouteLoader = _export("RouteLoader", (function() {
        function RouteLoader() {}
        _prototypeProperties(RouteLoader, null, {loadRoute: {
            value: function loadRoute(router, config) {
              throw Error("Route loaders must implment \"loadRoute(router, config)\".");
            },
            writable: true,
            configurable: true
          }});
        return RouteLoader;
      })());
      LoadRouteStep = _export("LoadRouteStep", (function() {
        function LoadRouteStep(routeLoader) {
          this.routeLoader = routeLoader;
        }
        _prototypeProperties(LoadRouteStep, {inject: {
            value: function inject() {
              return [RouteLoader];
            },
            writable: true,
            configurable: true
          }}, {run: {
            value: function run(navigationContext, next) {
              return loadNewRoute([], this.routeLoader, navigationContext).then(next)["catch"](next.cancel);
            },
            writable: true,
            configurable: true
          }});
        return LoadRouteStep;
      })());
    }
  };
});



System.register("github:aurelia/router@0.5.5/system/navigation-commands", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      Redirect;
  _export("isNavigationCommand", isNavigationCommand);
  function isNavigationCommand(obj) {
    return obj && typeof obj.navigate === "function";
  }
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      Redirect = _export("Redirect", (function() {
        function Redirect(url) {
          this.url = url;
          this.shouldContinueProcessing = false;
        }
        _prototypeProperties(Redirect, null, {navigate: {
            value: function navigate(appRouter) {
              (this.router || appRouter).navigate(this.url, {
                trigger: true,
                replace: true
              });
            },
            writable: true,
            configurable: true
          }});
        return Redirect;
      })());
    }
  };
});



System.register("github:aurelia/templating-router@0.9.2/system/route-loader", ["aurelia-templating", "aurelia-router", "aurelia-path", "aurelia-metadata"], function(_export) {
  "use strict";
  var CompositionEngine,
      RouteLoader,
      Router,
      relativeToFile,
      Origin,
      _prototypeProperties,
      _inherits,
      TemplatingRouteLoader;
  return {
    setters: [function(_aureliaTemplating) {
      CompositionEngine = _aureliaTemplating.CompositionEngine;
    }, function(_aureliaRouter) {
      RouteLoader = _aureliaRouter.RouteLoader;
      Router = _aureliaRouter.Router;
    }, function(_aureliaPath) {
      relativeToFile = _aureliaPath.relativeToFile;
    }, function(_aureliaMetadata) {
      Origin = _aureliaMetadata.Origin;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          subClass.__proto__ = superClass;
      };
      TemplatingRouteLoader = (function(RouteLoader) {
        function TemplatingRouteLoader(compositionEngine) {
          this.compositionEngine = compositionEngine;
        }
        _inherits(TemplatingRouteLoader, RouteLoader);
        _prototypeProperties(TemplatingRouteLoader, {inject: {
            value: function inject() {
              return [CompositionEngine];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {loadRoute: {
            value: function loadRoute(router, config) {
              var childContainer = router.container.createChild(),
                  instruction = {
                    viewModel: relativeToFile(config.moduleId, Origin.get(router.container.viewModel.constructor).moduleId),
                    childContainer: childContainer,
                    view: config.view
                  },
                  childRouter;
              childContainer.registerHandler(Router, function(c) {
                return childRouter || (childRouter = router.createChild(childContainer));
              });
              return this.compositionEngine.createViewModel(instruction).then(function(instruction) {
                instruction.executionContext = instruction.viewModel;
                instruction.router = router;
                return instruction;
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return TemplatingRouteLoader;
      })(RouteLoader);
      _export("TemplatingRouteLoader", TemplatingRouteLoader);
    }
  };
});



System.register("github:aurelia/templating-router@0.9.2/system/router-view", ["aurelia-dependency-injection", "aurelia-templating", "aurelia-router", "aurelia-metadata"], function(_export) {
  "use strict";
  var Container,
      ViewSlot,
      ViewStrategy,
      Router,
      Metadata,
      Origin,
      _prototypeProperties,
      RouterView;
  return {
    setters: [function(_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
    }, function(_aureliaTemplating) {
      ViewSlot = _aureliaTemplating.ViewSlot;
      ViewStrategy = _aureliaTemplating.ViewStrategy;
    }, function(_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function(_aureliaMetadata) {
      Metadata = _aureliaMetadata.Metadata;
      Origin = _aureliaMetadata.Origin;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      RouterView = (function() {
        function RouterView(element, container, viewSlot, router) {
          this.element = element;
          this.container = container;
          this.viewSlot = viewSlot;
          this.router = router;
          router.registerViewPort(this, element.getAttribute("name"));
        }
        _prototypeProperties(RouterView, {
          metadata: {
            value: function metadata() {
              return Metadata.customElement("router-view").noView();
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element, Container, ViewSlot, Router];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          process: {
            value: function process(viewPortInstruction, waitToSwap) {
              var _this = this;
              var component = viewPortInstruction.component,
                  viewStrategy = component.view,
                  viewModelInfo = component.viewModelInfo,
                  childContainer = component.childContainer,
                  viewModel = component.executionContext;
              if (!viewStrategy && "getViewStrategy" in viewModel) {
                viewStrategy = viewModel.getViewStrategy();
              }
              if (viewStrategy) {
                viewStrategy = ViewStrategy.normalize(viewStrategy);
                viewStrategy.makeRelativeTo(Origin.get(component.router.container.viewModel.constructor).moduleId);
              }
              return viewModelInfo.type.load(childContainer, viewModelInfo.value, viewStrategy).then(function(behaviorType) {
                viewPortInstruction.behavior = behaviorType.create(childContainer, {
                  executionContext: viewModel,
                  suppressBind: true
                });
                if (waitToSwap) {
                  return ;
                }
                _this.swap(viewPortInstruction);
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          swap: {
            value: function swap(viewPortInstruction) {
              viewPortInstruction.behavior.view.bind(viewPortInstruction.behavior.executionContext);
              this.viewSlot.swap(viewPortInstruction.behavior.view);
              if (this.view) {
                this.view.unbind();
              }
              this.view = viewPortInstruction.behavior.view;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return RouterView;
      })();
      _export("RouterView", RouterView);
    }
  };
});



System.register("github:aurelia/templating-resources@0.8.7/system/compose", ["aurelia-dependency-injection", "aurelia-templating"], function(_export) {
  "use strict";
  var Container,
      Behavior,
      CompositionEngine,
      ViewSlot,
      ViewResources,
      _prototypeProperties,
      Compose;
  function processInstruction(composer, instruction) {
    composer.compositionEngine.compose(Object.assign(instruction, {
      executionContext: composer.executionContext,
      container: composer.container,
      viewSlot: composer.viewSlot,
      viewResources: composer.viewResources,
      currentBehavior: composer.current
    })).then(function(next) {
      composer.current = next;
    });
  }
  return {
    setters: [function(_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
    }, function(_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
      CompositionEngine = _aureliaTemplating.CompositionEngine;
      ViewSlot = _aureliaTemplating.ViewSlot;
      ViewResources = _aureliaTemplating.ViewResources;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      Compose = _export("Compose", (function() {
        function Compose(container, compositionEngine, viewSlot, viewResources) {
          this.container = container;
          this.compositionEngine = compositionEngine;
          this.viewSlot = viewSlot;
          this.viewResources = viewResources;
        }
        _prototypeProperties(Compose, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("compose").withProperty("model").withProperty("view").withProperty("viewModel").noView();
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Container, CompositionEngine, ViewSlot, ViewResources];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind(executionContext) {
              this.executionContext = executionContext;
              processInstruction(this, {
                view: this.view,
                viewModel: this.viewModel,
                model: this.model
              });
            },
            writable: true,
            configurable: true
          },
          modelChanged: {
            value: function modelChanged(newValue, oldValue) {
              if (this.viewModel && typeof this.viewModel.activate === "function") {
                this.viewModel.activate(newValue);
              }
            },
            writable: true,
            configurable: true
          },
          viewChanged: {
            value: function viewChanged(newValue, oldValue) {
              processInstruction(this, {
                view: newValue,
                viewModel: this.viewModel,
                model: this.model
              });
            },
            writable: true,
            configurable: true
          },
          viewModelChanged: {
            value: function viewModelChanged(newValue, oldValue) {
              processInstruction(this, {
                viewModel: newValue,
                view: this.view,
                model: this.model
              });
            },
            writable: true,
            configurable: true
          }
        });
        return Compose;
      })());
    }
  };
});



System.register("github:aurelia/templating-resources@0.8.7/system/if", ["aurelia-templating"], function(_export) {
  "use strict";
  var Behavior,
      BoundViewFactory,
      ViewSlot,
      _prototypeProperties,
      If;
  return {
    setters: [function(_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
      BoundViewFactory = _aureliaTemplating.BoundViewFactory;
      ViewSlot = _aureliaTemplating.ViewSlot;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      If = _export("If", (function() {
        function If(viewFactory, viewSlot) {
          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
          this.showing = false;
        }
        _prototypeProperties(If, {
          metadata: {
            value: function metadata() {
              return Behavior.templateController("if").withProperty("value", "valueChanged", "if");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [BoundViewFactory, ViewSlot];
            },
            writable: true,
            configurable: true
          }
        }, {valueChanged: {
            value: function valueChanged(newValue) {
              if (!newValue) {
                if (this.view) {
                  this.viewSlot.remove(this.view);
                  this.view.unbind();
                }
                this.showing = false;
                return ;
              }
              if (!this.view) {
                this.view = this.viewFactory.create();
              }
              if (!this.showing) {
                this.showing = true;
                if (!this.view.bound) {
                  this.view.bind();
                }
                this.viewSlot.add(this.view);
              }
            },
            writable: true,
            configurable: true
          }});
        return If;
      })());
    }
  };
});



System.register("github:aurelia/templating-resources@0.8.7/system/repeat", ["aurelia-binding", "aurelia-templating"], function(_export) {
  "use strict";
  var ObserverLocator,
      calcSplices,
      Behavior,
      BoundViewFactory,
      ViewSlot,
      _prototypeProperties,
      Repeat;
  return {
    setters: [function(_aureliaBinding) {
      ObserverLocator = _aureliaBinding.ObserverLocator;
      calcSplices = _aureliaBinding.calcSplices;
    }, function(_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
      BoundViewFactory = _aureliaTemplating.BoundViewFactory;
      ViewSlot = _aureliaTemplating.ViewSlot;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      Repeat = _export("Repeat", (function() {
        function Repeat(viewFactory, viewSlot, observerLocator) {
          this.viewFactory = viewFactory;
          this.viewSlot = viewSlot;
          this.observerLocator = observerLocator;
          this.local = "item";
        }
        _prototypeProperties(Repeat, {
          metadata: {
            value: function metadata() {
              return Behavior.templateController("repeat").withProperty("items", "itemsChanged", "repeat").withProperty("local");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [BoundViewFactory, ViewSlot, ObserverLocator];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind(executionContext) {
              var _this = this;
              var items = this.items;
              this.executionContext = executionContext;
              if (!items) {
                if (this.oldItems) {
                  this.viewSlot.removeAll();
                }
                return ;
              }
              if (this.oldItems === items) {
                var splices = calcSplices(items, 0, items.length, this.lastBoundItems, 0, this.lastBoundItems.length);
                var observer = this.observerLocator.getArrayObserver(items);
                this.handleSplices(items, splices);
                this.lastBoundItems = this.oldItems = null;
                this.disposeArraySubscription = observer.subscribe(function(splices) {
                  _this.handleSplices(items, splices);
                });
              } else {
                this.processItems();
              }
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              this.oldItems = this.items;
              if (this.items) {
                this.lastBoundItems = this.items.slice(0);
              }
              if (this.disposeArraySubscription) {
                this.disposeArraySubscription();
                this.disposeArraySubscription = null;
              }
            },
            writable: true,
            configurable: true
          },
          itemsChanged: {
            value: function itemsChanged() {
              this.processItems();
            },
            writable: true,
            configurable: true
          },
          processItems: {
            value: function processItems() {
              var _this = this;
              var items = this.items,
                  viewSlot = this.viewSlot,
                  viewFactory = this.viewFactory,
                  i,
                  ii,
                  row,
                  view,
                  observer;
              if (this.disposeArraySubscription) {
                this.disposeArraySubscription();
                viewSlot.removeAll();
              }
              if (!items) {
                return ;
              }
              observer = this.observerLocator.getArrayObserver(items);
              for (i = 0, ii = items.length; i < ii; ++i) {
                row = this.createFullExecutionContext(items[i], i, ii);
                view = viewFactory.create(row);
                viewSlot.add(view);
              }
              this.disposeArraySubscription = observer.subscribe(function(splices) {
                _this.handleSplices(items, splices);
              });
            },
            writable: true,
            configurable: true
          },
          createBaseExecutionContext: {
            value: function createBaseExecutionContext(data) {
              var context = {};
              context[this.local] = data;
              return context;
            },
            writable: true,
            configurable: true
          },
          createFullExecutionContext: {
            value: function createFullExecutionContext(data, index, length) {
              var context = this.createBaseExecutionContext(data);
              return this.updateExecutionContext(context, index, length);
            },
            writable: true,
            configurable: true
          },
          updateExecutionContext: {
            value: function updateExecutionContext(context, index, length) {
              var first = index === 0,
                  last = index === length - 1,
                  even = index % 2 === 0;
              context.$parent = this.executionContext;
              context.$index = index;
              context.$first = first;
              context.$last = last;
              context.$middle = !(first || last);
              context.$odd = !even;
              context.$even = even;
              return context;
            },
            writable: true,
            configurable: true
          },
          handleSplices: {
            value: function handleSplices(array, splices) {
              var viewLookup = new Map(),
                  removeDelta = 0,
                  arrayLength = array.length,
                  viewSlot = this.viewSlot,
                  viewFactory = this.viewFactory,
                  i,
                  ii,
                  j,
                  jj,
                  splice,
                  removed,
                  addIndex,
                  end,
                  model,
                  view,
                  children,
                  length,
                  row;
              for (i = 0, ii = splices.length; i < ii; ++i) {
                splice = splices[i];
                removed = splice.removed;
                for (j = 0, jj = removed.length; j < jj; ++j) {
                  model = removed[j];
                  view = viewSlot.removeAt(splice.index + removeDelta);
                  if (view) {
                    viewLookup.set(model, view);
                  }
                }
                removeDelta -= splice.addedCount;
              }
              for (i = 0, ii = splices.length; i < ii; ++i) {
                splice = splices[i];
                addIndex = splice.index;
                end = splice.index + splice.addedCount;
                for (; addIndex < end; ++addIndex) {
                  model = array[addIndex];
                  view = viewLookup.get(model);
                  if (view) {
                    viewLookup["delete"](model);
                    viewSlot.insert(addIndex, view);
                  } else {
                    row = this.createBaseExecutionContext(model);
                    view = this.viewFactory.create(row);
                    viewSlot.insert(addIndex, view);
                  }
                }
              }
              children = viewSlot.children;
              length = children.length;
              for (i = 0; i < length; i++) {
                this.updateExecutionContext(children[i].executionContext, i, length);
              }
              viewLookup.forEach(function(x) {
                return x.unbind();
              });
            },
            writable: true,
            configurable: true
          }
        });
        return Repeat;
      })());
    }
  };
});



System.register("github:aurelia/templating-resources@0.8.7/system/show", ["aurelia-templating"], function(_export) {
  "use strict";
  var Behavior,
      _prototypeProperties,
      Show;
  function addStyleString(str) {
    var node = document.createElement("style");
    node.innerHTML = str;
    node.type = "text/css";
    document.head.appendChild(node);
  }
  return {
    setters: [function(_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      addStyleString(".aurelia-hide { display:none !important; }");
      Show = _export("Show", (function() {
        function Show(element) {
          this.element = element;
        }
        _prototypeProperties(Show, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("show").withProperty("value", "valueChanged", "show");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {valueChanged: {
            value: function valueChanged(newValue) {
              if (newValue) {
                this.element.classList.remove("aurelia-hide");
              } else {
                this.element.classList.add("aurelia-hide");
              }
            },
            writable: true,
            configurable: true
          }});
        return Show;
      })());
    }
  };
});



System.register("github:aurelia/templating-resources@0.8.7/system/selected-item", ["aurelia-templating"], function(_export) {
  "use strict";
  var Behavior,
      _prototypeProperties,
      SelectedItem;
  return {
    setters: [function(_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      SelectedItem = _export("SelectedItem", (function() {
        function SelectedItem(element) {
          this.element = element;
          this.options = [];
          this.callback = this.selectedIndexChanged.bind(this);
        }
        _prototypeProperties(SelectedItem, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("selected-item").withProperty("value", "valueChanged", "selected-item").and(function(x) {
                return x.bindingIsTwoWay();
              }).syncChildren("options", "optionsChanged", "option");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              this.element.addEventListener("change", this.callback, false);
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              this.element.removeEventListener("change", this.callback);
            },
            writable: true,
            configurable: true
          },
          valueChanged: {
            value: function valueChanged(newValue) {
              this.optionsChanged();
            },
            writable: true,
            configurable: true
          },
          selectedIndexChanged: {
            value: function selectedIndexChanged() {
              var index = this.element.selectedIndex,
                  option = this.options[index];
              this.value = option ? option.model : null;
            },
            writable: true,
            configurable: true
          },
          optionsChanged: {
            value: function optionsChanged(mutations) {
              var value = this.value,
                  options = this.options,
                  option,
                  i,
                  ii;
              for (i = 0, ii = options.length; i < ii; ++i) {
                option = options[i];
                if (option.model === value) {
                  if (this.element.selectedIndex !== i) {
                    this.element.selectedIndex = i;
                  }
                  return ;
                }
              }
              this.element.selectedIndex = 0;
            },
            writable: true,
            configurable: true
          }
        });
        return SelectedItem;
      })());
    }
  };
});



System.register("github:aurelia/templating-resources@0.8.7/system/global-behavior", ["aurelia-templating"], function(_export) {
  "use strict";
  var Behavior,
      _prototypeProperties,
      GlobalBehavior;
  return {
    setters: [function(_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      GlobalBehavior = _export("GlobalBehavior", (function() {
        function GlobalBehavior(element) {
          this.element = element;
        }
        _prototypeProperties(GlobalBehavior, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("global-behavior").withOptions().and(function(x) {
                return x.dynamic();
              });
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              var handler = GlobalBehavior.handlers[this.aureliaAttrName];
              if (!handler) {
                throw new Error("Conventional binding handler not found for " + this.aureliaAttrName + ".");
              }
              try {
                this.handler = handler.bind(this, this.element, this.aureliaCommand) || handler;
              } catch (error) {
                throw new Error("Conventional binding handler failed.", error);
              }
            },
            writable: true,
            configurable: true
          },
          attached: {
            value: function attached() {
              if (this.handler && "attached" in this.handler) {
                this.handler.attached(this, this.element);
              }
            },
            writable: true,
            configurable: true
          },
          detached: {
            value: function detached() {
              if (this.handler && "detached" in this.handler) {
                this.handler.detached(this, this.element);
              }
            },
            writable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              if (this.handler && "unbind" in this.handler) {
                this.handler.unbind(this, this.element);
              }
              this.handler = null;
            },
            writable: true,
            configurable: true
          }
        });
        return GlobalBehavior;
      })());
      GlobalBehavior.createSettingsFromBehavior = function(behavior) {
        var settings = {};
        for (var key in behavior) {
          if (key === "aureliaAttrName" || key === "aureliaCommand" || !behavior.hasOwnProperty(key)) {
            continue;
          }
          settings[key] = behavior[key];
        }
        return settings;
      };
      GlobalBehavior.jQueryPlugins = {};
      GlobalBehavior.handlers = {jquery: {
          bind: function bind(behavior, element, command) {
            var settings = GlobalBehavior.createSettingsFromBehavior(behavior);
            var pluginName = GlobalBehavior.jQueryPlugins[command] || command;
            behavior.plugin = window.jQuery(element)[pluginName](settings);
          },
          unbind: function unbind(behavior, element) {
            if (typeof behavior.plugin.destroy === "function") {
              behavior.plugin.destroy();
              behavior.plugin = null;
            }
          }
        }};
    }
  };
});



System.register("github:aurelia/event-aggregator@0.2.2/system/index", [], function(_export) {
  "use strict";
  var _prototypeProperties,
      Handler,
      EventAggregator;
  _export("includeEventsIn", includeEventsIn);
  _export("install", install);
  function includeEventsIn(obj) {
    var ea = new EventAggregator();
    obj.subscribe = function(event, callback) {
      return ea.subscribe(event, callback);
    };
    obj.publish = function(event, data) {
      ea.publish(event, data);
    };
    return ea;
  }
  function install(aurelia) {
    aurelia.withInstance(EventAggregator, includeEventsIn(aurelia));
  }
  return {
    setters: [],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      Handler = (function() {
        function Handler(messageType, callback) {
          this.messageType = messageType;
          this.callback = callback;
        }
        _prototypeProperties(Handler, null, {handle: {
            value: function handle(message) {
              if (message instanceof this.messageType) {
                this.callback.call(null, message);
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return Handler;
      })();
      EventAggregator = (function() {
        function EventAggregator() {
          this.eventLookup = {};
          this.messageHandlers = [];
        }
        _prototypeProperties(EventAggregator, null, {
          publish: {
            value: function publish(event, data) {
              var subscribers,
                  i,
                  handler;
              if (typeof event === "string") {
                subscribers = this.eventLookup[event];
                if (subscribers) {
                  subscribers = subscribers.slice();
                  i = subscribers.length;
                  while (i--) {
                    subscribers[i](data, event);
                  }
                }
              } else {
                subscribers = this.messageHandlers.slice();
                i = subscribers.length;
                while (i--) {
                  subscribers[i].handle(event);
                }
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          subscribe: {
            value: function subscribe(event, callback) {
              var subscribers,
                  handler;
              if (typeof event === "string") {
                subscribers = this.eventLookup[event] || (this.eventLookup[event] = []);
                subscribers.push(callback);
                return function() {
                  subscribers.splice(subscribers.indexOf(callback), 1);
                };
              } else {
                handler = new Handler(event, callback);
                subscribers = this.messageHandlers;
                subscribers.push(handler);
                return function() {
                  subscribers.splice(subscribers.indexOf(handler), 1);
                };
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return EventAggregator;
      })();
      _export("EventAggregator", EventAggregator);
    }
  };
});



System.register("github:aurelia/history-browser@0.2.3/system/index", ["aurelia-history"], function(_export) {
  "use strict";
  var History,
      _prototypeProperties,
      _inherits,
      routeStripper,
      rootStripper,
      isExplorer,
      trailingSlash,
      BrowserHistory;
  function updateHash(location, fragment, replace) {
    if (replace) {
      var href = location.href.replace(/(javascript:|#).*$/, "");
      location.replace(href + "#" + fragment);
    } else {
      location.hash = "#" + fragment;
    }
  }
  function install(aurelia) {
    aurelia.withSingleton(History, BrowserHistory);
  }
  return {
    setters: [function(_aureliaHistory) {
      History = _aureliaHistory.History;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          subClass.__proto__ = superClass;
      };
      routeStripper = /^[#\/]|\s+$/g;
      rootStripper = /^\/+|\/+$/g;
      isExplorer = /msie [\w.]+/;
      trailingSlash = /\/$/;
      BrowserHistory = (function(History) {
        function BrowserHistory() {
          this.interval = 50;
          this.active = false;
          this.previousFragment = "";
          this._checkUrlCallback = this.checkUrl.bind(this);
          if (typeof window !== "undefined") {
            this.location = window.location;
            this.history = window.history;
          }
        }
        _inherits(BrowserHistory, History);
        _prototypeProperties(BrowserHistory, null, {
          getHash: {
            value: function getHash(window) {
              var match = (window || this).location.href.match(/#(.*)$/);
              return match ? match[1] : "";
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getFragment: {
            value: function getFragment(fragment, forcePushState) {
              var root;
              if (!fragment) {
                if (this._hasPushState || !this._wantsHashChange || forcePushState) {
                  fragment = this.location.pathname + this.location.search;
                  root = this.root.replace(trailingSlash, "");
                  if (!fragment.indexOf(root)) {
                    fragment = fragment.substr(root.length);
                  }
                } else {
                  fragment = this.getHash();
                }
              }
              return fragment.replace(routeStripper, "");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          activate: {
            value: function activate(options) {
              if (this.active) {
                throw new Error("History has already been activated.");
              }
              this.active = true;
              this.options = Object.assign({}, {root: "/"}, this.options, options);
              this.root = this.options.root;
              this._wantsHashChange = this.options.hashChange !== false;
              this._wantsPushState = !!this.options.pushState;
              this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
              var fragment = this.getFragment();
              this.root = ("/" + this.root + "/").replace(rootStripper, "/");
              if (this._hasPushState) {
                window.onpopstate = this._checkUrlCallback;
              } else if (this._wantsHashChange && "onhashchange" in window) {
                window.addEventListener("hashchange", this._checkUrlCallback);
              } else if (this._wantsHashChange) {
                this._checkUrlInterval = setInterval(this._checkUrlCallback, this.interval);
              }
              this.fragment = fragment;
              var loc = this.location;
              var atRoot = loc.pathname.replace(/[^\/]$/, "$&/") === this.root;
              if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !atRoot) {
                  this.fragment = this.getFragment(null, true);
                  this.location.replace(this.root + this.location.search + "#" + this.fragment);
                  return true;
                } else if (this._hasPushState && atRoot && loc.hash) {
                  this.fragment = this.getHash().replace(routeStripper, "");
                  this["this"].replaceState({}, document.title, this.root + this.fragment + loc.search);
                }
              }
              if (!this.options.silent) {
                return this.loadUrl();
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          deactivate: {
            value: function deactivate() {
              window.onpopstate = null;
              window.removeEventListener("hashchange", this._checkUrlCallback);
              clearInterval(this._checkUrlInterval);
              this.active = false;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          checkUrl: {
            value: function checkUrl() {
              var current = this.getFragment();
              if (current === this.fragment && this.iframe) {
                current = this.getFragment(this.getHash(this.iframe));
              }
              if (current === this.fragment) {
                return false;
              }
              if (this.iframe) {
                this.navigate(current, false);
              }
              this.loadUrl();
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          loadUrl: {
            value: function loadUrl(fragmentOverride) {
              var fragment = this.fragment = this.getFragment(fragmentOverride);
              return this.options.routeHandler ? this.options.routeHandler(fragment) : false;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          navigate: {
            value: function navigate(fragment, options) {
              if (fragment && fragment.indexOf("://") != -1) {
                window.location.href = fragment;
                return true;
              }
              if (!this.active) {
                return false;
              }
              if (options === undefined) {
                options = {trigger: true};
              } else if (typeof options === "boolean") {
                options = {trigger: options};
              }
              fragment = this.getFragment(fragment || "");
              if (this.fragment === fragment) {
                return ;
              }
              this.fragment = fragment;
              var url = this.root + fragment;
              if (fragment === "" && url !== "/") {
                url = url.slice(0, -1);
              }
              if (this._hasPushState) {
                this.history[options.replace ? "replaceState" : "pushState"]({}, document.title, url);
              } else if (this._wantsHashChange) {
                updateHash(this.location, fragment, options.replace);
                if (this.iframe && fragment !== this.getFragment(this.getHash(this.iframe))) {
                  if (!options.replace) {
                    this.iframe.document.open().close();
                  }
                  updateHash(this.iframe.location, fragment, options.replace);
                }
              } else {
                return this.location.assign(url);
              }
              if (options.trigger) {
                return this.loadUrl(fragment);
              } else {
                this.previousFragment = fragment;
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          navigateBack: {
            value: function navigateBack() {
              this.history.back();
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return BrowserHistory;
      })(History);
      _export("BrowserHistory", BrowserHistory);
      _export("install", install);
    }
  };
});



(function() {
function define(){};  define.amd = {};
"format amd";
(function(undefined) {
  var moment,
      VERSION = '2.9.0',
      globalScope = (typeof global !== 'undefined' && (typeof window === 'undefined' || window === global.window)) ? global : this,
      oldGlobalMoment,
      round = Math.round,
      hasOwnProperty = Object.prototype.hasOwnProperty,
      i,
      YEAR = 0,
      MONTH = 1,
      DATE = 2,
      HOUR = 3,
      MINUTE = 4,
      SECOND = 5,
      MILLISECOND = 6,
      locales = {},
      momentProperties = [],
      hasModule = (typeof module !== 'undefined' && module && module.exports),
      aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
      aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
      isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,
      formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
      localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      parseTokenOneOrTwoDigits = /\d\d?/,
      parseTokenOneToThreeDigits = /\d{1,3}/,
      parseTokenOneToFourDigits = /\d{1,4}/,
      parseTokenOneToSixDigits = /[+\-]?\d{1,6}/,
      parseTokenDigits = /\d+/,
      parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
      parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi,
      parseTokenT = /T/i,
      parseTokenOffsetMs = /[\+\-]?\d+/,
      parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/,
      parseTokenOneDigit = /\d/,
      parseTokenTwoDigits = /\d\d/,
      parseTokenThreeDigits = /\d{3}/,
      parseTokenFourDigits = /\d{4}/,
      parseTokenSixDigits = /[+-]?\d{6}/,
      parseTokenSignedNumber = /[+-]?\d+/,
      isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',
      isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/], ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/], ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/], ['GGGG-[W]WW', /\d{4}-W\d{2}/], ['YYYY-DDD', /\d{4}-\d{3}/]],
      isoTimes = [['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/], ['HH:mm', /(T| )\d\d:\d\d/], ['HH', /(T| )\d\d/]],
      parseTimezoneChunker = /([\+\-]|\d\d)/gi,
      proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
      unitMillisecondFactors = {
        'Milliseconds': 1,
        'Seconds': 1e3,
        'Minutes': 6e4,
        'Hours': 36e5,
        'Days': 864e5,
        'Months': 2592e6,
        'Years': 31536e6
      },
      unitAliases = {
        ms: 'millisecond',
        s: 'second',
        m: 'minute',
        h: 'hour',
        d: 'day',
        D: 'date',
        w: 'week',
        W: 'isoWeek',
        M: 'month',
        Q: 'quarter',
        y: 'year',
        DDD: 'dayOfYear',
        e: 'weekday',
        E: 'isoWeekday',
        gg: 'weekYear',
        GG: 'isoWeekYear'
      },
      camelFunctions = {
        dayofyear: 'dayOfYear',
        isoweekday: 'isoWeekday',
        isoweek: 'isoWeek',
        weekyear: 'weekYear',
        isoweekyear: 'isoWeekYear'
      },
      formatFunctions = {},
      relativeTimeThresholds = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
      },
      ordinalizeTokens = 'DDD w W M D d'.split(' '),
      paddedTokens = 'M D H h m s w W'.split(' '),
      formatTokenFunctions = {
        M: function() {
          return this.month() + 1;
        },
        MMM: function(format) {
          return this.localeData().monthsShort(this, format);
        },
        MMMM: function(format) {
          return this.localeData().months(this, format);
        },
        D: function() {
          return this.date();
        },
        DDD: function() {
          return this.dayOfYear();
        },
        d: function() {
          return this.day();
        },
        dd: function(format) {
          return this.localeData().weekdaysMin(this, format);
        },
        ddd: function(format) {
          return this.localeData().weekdaysShort(this, format);
        },
        dddd: function(format) {
          return this.localeData().weekdays(this, format);
        },
        w: function() {
          return this.week();
        },
        W: function() {
          return this.isoWeek();
        },
        YY: function() {
          return leftZeroFill(this.year() % 100, 2);
        },
        YYYY: function() {
          return leftZeroFill(this.year(), 4);
        },
        YYYYY: function() {
          return leftZeroFill(this.year(), 5);
        },
        YYYYYY: function() {
          var y = this.year(),
              sign = y >= 0 ? '+' : '-';
          return sign + leftZeroFill(Math.abs(y), 6);
        },
        gg: function() {
          return leftZeroFill(this.weekYear() % 100, 2);
        },
        gggg: function() {
          return leftZeroFill(this.weekYear(), 4);
        },
        ggggg: function() {
          return leftZeroFill(this.weekYear(), 5);
        },
        GG: function() {
          return leftZeroFill(this.isoWeekYear() % 100, 2);
        },
        GGGG: function() {
          return leftZeroFill(this.isoWeekYear(), 4);
        },
        GGGGG: function() {
          return leftZeroFill(this.isoWeekYear(), 5);
        },
        e: function() {
          return this.weekday();
        },
        E: function() {
          return this.isoWeekday();
        },
        a: function() {
          return this.localeData().meridiem(this.hours(), this.minutes(), true);
        },
        A: function() {
          return this.localeData().meridiem(this.hours(), this.minutes(), false);
        },
        H: function() {
          return this.hours();
        },
        h: function() {
          return this.hours() % 12 || 12;
        },
        m: function() {
          return this.minutes();
        },
        s: function() {
          return this.seconds();
        },
        S: function() {
          return toInt(this.milliseconds() / 100);
        },
        SS: function() {
          return leftZeroFill(toInt(this.milliseconds() / 10), 2);
        },
        SSS: function() {
          return leftZeroFill(this.milliseconds(), 3);
        },
        SSSS: function() {
          return leftZeroFill(this.milliseconds(), 3);
        },
        Z: function() {
          var a = this.utcOffset(),
              b = '+';
          if (a < 0) {
            a = -a;
            b = '-';
          }
          return b + leftZeroFill(toInt(a / 60), 2) + ':' + leftZeroFill(toInt(a) % 60, 2);
        },
        ZZ: function() {
          var a = this.utcOffset(),
              b = '+';
          if (a < 0) {
            a = -a;
            b = '-';
          }
          return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
        },
        z: function() {
          return this.zoneAbbr();
        },
        zz: function() {
          return this.zoneName();
        },
        x: function() {
          return this.valueOf();
        },
        X: function() {
          return this.unix();
        },
        Q: function() {
          return this.quarter();
        }
      },
      deprecations = {},
      lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'],
      updateInProgress = false;
  function dfl(a, b, c) {
    switch (arguments.length) {
      case 2:
        return a != null ? a : b;
      case 3:
        return a != null ? a : b != null ? b : c;
      default:
        throw new Error('Implement me');
    }
  }
  function hasOwnProp(a, b) {
    return hasOwnProperty.call(a, b);
  }
  function defaultParsingFlags() {
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false
    };
  }
  function printMsg(msg) {
    if (moment.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
      console.warn('Deprecation warning: ' + msg);
    }
  }
  function deprecate(msg, fn) {
    var firstTime = true;
    return extend(function() {
      if (firstTime) {
        printMsg(msg);
        firstTime = false;
      }
      return fn.apply(this, arguments);
    }, fn);
  }
  function deprecateSimple(name, msg) {
    if (!deprecations[name]) {
      printMsg(msg);
      deprecations[name] = true;
    }
  }
  function padToken(func, count) {
    return function(a) {
      return leftZeroFill(func.call(this, a), count);
    };
  }
  function ordinalizeToken(func, period) {
    return function(a) {
      return this.localeData().ordinal(func.call(this, a), period);
    };
  }
  function monthDiff(a, b) {
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2,
        adjust;
    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
      adjust = (b - anchor) / (anchor2 - anchor);
    }
    return -(wholeMonthDiff + adjust);
  }
  while (ordinalizeTokens.length) {
    i = ordinalizeTokens.pop();
    formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
  }
  while (paddedTokens.length) {
    i = paddedTokens.pop();
    formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
  }
  formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);
  function meridiemFixWrap(locale, hour, meridiem) {
    var isPm;
    if (meridiem == null) {
      return hour;
    }
    if (locale.meridiemHour != null) {
      return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
      isPm = locale.isPM(meridiem);
      if (isPm && hour < 12) {
        hour += 12;
      }
      if (!isPm && hour === 12) {
        hour = 0;
      }
      return hour;
    } else {
      return hour;
    }
  }
  function Locale() {}
  function Moment(config, skipOverflow) {
    if (skipOverflow !== false) {
      checkOverflow(config);
    }
    copyConfig(this, config);
    this._d = new Date(+config._d);
    if (updateInProgress === false) {
      updateInProgress = true;
      moment.updateOffset(this);
      updateInProgress = false;
    }
  }
  function Duration(duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;
    this._milliseconds = +milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 36e5;
    this._days = +days + weeks * 7;
    this._months = +months + quarters * 3 + years * 12;
    this._data = {};
    this._locale = moment.localeData();
    this._bubble();
  }
  function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }
    if (hasOwnProp(b, 'toString')) {
      a.toString = b.toString;
    }
    if (hasOwnProp(b, 'valueOf')) {
      a.valueOf = b.valueOf;
    }
    return a;
  }
  function copyConfig(to, from) {
    var i,
        prop,
        val;
    if (typeof from._isAMomentObject !== 'undefined') {
      to._isAMomentObject = from._isAMomentObject;
    }
    if (typeof from._i !== 'undefined') {
      to._i = from._i;
    }
    if (typeof from._f !== 'undefined') {
      to._f = from._f;
    }
    if (typeof from._l !== 'undefined') {
      to._l = from._l;
    }
    if (typeof from._strict !== 'undefined') {
      to._strict = from._strict;
    }
    if (typeof from._tzm !== 'undefined') {
      to._tzm = from._tzm;
    }
    if (typeof from._isUTC !== 'undefined') {
      to._isUTC = from._isUTC;
    }
    if (typeof from._offset !== 'undefined') {
      to._offset = from._offset;
    }
    if (typeof from._pf !== 'undefined') {
      to._pf = from._pf;
    }
    if (typeof from._locale !== 'undefined') {
      to._locale = from._locale;
    }
    if (momentProperties.length > 0) {
      for (i in momentProperties) {
        prop = momentProperties[i];
        val = from[prop];
        if (typeof val !== 'undefined') {
          to[prop] = val;
        }
      }
    }
    return to;
  }
  function absRound(number) {
    if (number < 0) {
      return Math.ceil(number);
    } else {
      return Math.floor(number);
    }
  }
  function leftZeroFill(number, targetLength, forceSign) {
    var output = '' + Math.abs(number),
        sign = number >= 0;
    while (output.length < targetLength) {
      output = '0' + output;
    }
    return (sign ? (forceSign ? '+' : '') : '-') + output;
  }
  function positiveMomentsDifference(base, other) {
    var res = {
      milliseconds: 0,
      months: 0
    };
    res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
      --res.months;
    }
    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));
    return res;
  }
  function momentsDifference(base, other) {
    var res;
    other = makeAs(other, base);
    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }
    return res;
  }
  function createAdder(direction, name) {
    return function(val, period) {
      var dur,
          tmp;
      if (period !== null && !isNaN(+period)) {
        deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
        tmp = val;
        val = period;
        period = tmp;
      }
      val = typeof val === 'string' ? +val : val;
      dur = moment.duration(val, period);
      addOrSubtractDurationFromMoment(this, dur, direction);
      return this;
    };
  }
  function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = duration._days,
        months = duration._months;
    updateOffset = updateOffset == null ? true : updateOffset;
    if (milliseconds) {
      mom._d.setTime(+mom._d + milliseconds * isAdding);
    }
    if (days) {
      rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
    }
    if (months) {
      rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
      moment.updateOffset(mom, days || months);
    }
  }
  function isArray(input) {
    return Object.prototype.toString.call(input) === '[object Array]';
  }
  function isDate(input) {
    return Object.prototype.toString.call(input) === '[object Date]' || input instanceof Date;
  }
  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
      if ((dontConvert && array1[i] !== array2[i]) || (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
        diffs++;
      }
    }
    return diffs + lengthDiff;
  }
  function normalizeUnits(units) {
    if (units) {
      var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
      units = unitAliases[units] || camelFunctions[lowered] || lowered;
    }
    return units;
  }
  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;
    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);
        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }
    return normalizedInput;
  }
  function makeList(field) {
    var count,
        setter;
    if (field.indexOf('week') === 0) {
      count = 7;
      setter = 'day';
    } else if (field.indexOf('month') === 0) {
      count = 12;
      setter = 'month';
    } else {
      return ;
    }
    moment[field] = function(format, index) {
      var i,
          getter,
          method = moment._locale[field],
          results = [];
      if (typeof format === 'number') {
        index = format;
        format = undefined;
      }
      getter = function(i) {
        var m = moment().utc().set(setter, i);
        return method.call(moment._locale, m, format || '');
      };
      if (index != null) {
        return getter(index);
      } else {
        for (i = 0; i < count; i++) {
          results.push(getter(i));
        }
        return results;
      }
    };
  }
  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      if (coercedNumber >= 0) {
        value = Math.floor(coercedNumber);
      } else {
        value = Math.ceil(coercedNumber);
      }
    }
    return value;
  }
  function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  }
  function weeksInYear(year, dow, doy) {
    return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
  }
  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  function checkOverflow(m) {
    var overflow;
    if (m._a && m._pf.overflow === -2) {
      overflow = m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH : m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE : m._a[HOUR] < 0 || m._a[HOUR] > 24 || (m._a[HOUR] === 24 && (m._a[MINUTE] !== 0 || m._a[SECOND] !== 0 || m._a[MILLISECOND] !== 0)) ? HOUR : m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE : m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND : m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND : -1;
      if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
        overflow = DATE;
      }
      m._pf.overflow = overflow;
    }
  }
  function isValid(m) {
    if (m._isValid == null) {
      m._isValid = !isNaN(m._d.getTime()) && m._pf.overflow < 0 && !m._pf.empty && !m._pf.invalidMonth && !m._pf.nullInput && !m._pf.invalidFormat && !m._pf.userInvalidated;
      if (m._strict) {
        m._isValid = m._isValid && m._pf.charsLeftOver === 0 && m._pf.unusedTokens.length === 0 && m._pf.bigHour === undefined;
      }
    }
    return m._isValid;
  }
  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
  }
  function chooseLocale(names) {
    var i = 0,
        j,
        next,
        locale,
        split;
    while (i < names.length) {
      split = normalizeLocale(names[i]).split('-');
      j = split.length;
      next = normalizeLocale(names[i + 1]);
      next = next ? next.split('-') : null;
      while (j > 0) {
        locale = loadLocale(split.slice(0, j).join('-'));
        if (locale) {
          return locale;
        }
        if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
          break;
        }
        j--;
      }
      i++;
    }
    return null;
  }
  function loadLocale(name) {
    var oldLocale = null;
    if (!locales[name] && hasModule) {
      try {
        oldLocale = moment.locale();
        require('./locale/' + name);
        moment.locale(oldLocale);
      } catch (e) {}
    }
    return locales[name];
  }
  function makeAs(input, model) {
    var res,
        diff;
    if (model._isUTC) {
      res = model.clone();
      diff = (moment.isMoment(input) || isDate(input) ? +input : +moment(input)) - (+res);
      res._d.setTime(+res._d + diff);
      moment.updateOffset(res, false);
      return res;
    } else {
      return moment(input).local();
    }
  }
  extend(Locale.prototype, {
    set: function(config) {
      var prop,
          i;
      for (i in config) {
        prop = config[i];
        if (typeof prop === 'function') {
          this[i] = prop;
        } else {
          this['_' + i] = prop;
        }
      }
      this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source);
    },
    _months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    months: function(m) {
      return this._months[m.month()];
    },
    _monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    monthsShort: function(m) {
      return this._monthsShort[m.month()];
    },
    monthsParse: function(monthName, format, strict) {
      var i,
          mom,
          regex;
      if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
      }
      for (i = 0; i < 12; i++) {
        mom = moment.utc([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
          this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
          this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
          regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
          this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
          return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
          return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
          return i;
        }
      }
    },
    _weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdays: function(m) {
      return this._weekdays[m.day()];
    },
    _weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysShort: function(m) {
      return this._weekdaysShort[m.day()];
    },
    _weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    weekdaysMin: function(m) {
      return this._weekdaysMin[m.day()];
    },
    weekdaysParse: function(weekdayName) {
      var i,
          mom,
          regex;
      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
      }
      for (i = 0; i < 7; i++) {
        if (!this._weekdaysParse[i]) {
          mom = moment([2000, 1]).day(i);
          regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
          this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        if (this._weekdaysParse[i].test(weekdayName)) {
          return i;
        }
      }
    },
    _longDateFormat: {
      LTS: 'h:mm:ss A',
      LT: 'h:mm A',
      L: 'MM/DD/YYYY',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY LT',
      LLLL: 'dddd, MMMM D, YYYY LT'
    },
    longDateFormat: function(key) {
      var output = this._longDateFormat[key];
      if (!output && this._longDateFormat[key.toUpperCase()]) {
        output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(val) {
          return val.slice(1);
        });
        this._longDateFormat[key] = output;
      }
      return output;
    },
    isPM: function(input) {
      return ((input + '').toLowerCase().charAt(0) === 'p');
    },
    _meridiemParse: /[ap]\.?m?\.?/i,
    meridiem: function(hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? 'pm' : 'PM';
      } else {
        return isLower ? 'am' : 'AM';
      }
    },
    _calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    },
    calendar: function(key, mom, now) {
      var output = this._calendar[key];
      return typeof output === 'function' ? output.apply(mom, [now]) : output;
    },
    _relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    },
    relativeTime: function(number, withoutSuffix, string, isFuture) {
      var output = this._relativeTime[string];
      return (typeof output === 'function') ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    },
    pastFuture: function(diff, output) {
      var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
      return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
    },
    ordinal: function(number) {
      return this._ordinal.replace('%d', number);
    },
    _ordinal: '%d',
    _ordinalParse: /\d{1,2}/,
    preparse: function(string) {
      return string;
    },
    postformat: function(string) {
      return string;
    },
    week: function(mom) {
      return weekOfYear(mom, this._week.dow, this._week.doy).week;
    },
    _week: {
      dow: 0,
      doy: 6
    },
    firstDayOfWeek: function() {
      return this._week.dow;
    },
    firstDayOfYear: function() {
      return this._week.doy;
    },
    _invalidDate: 'Invalid date',
    invalidDate: function() {
      return this._invalidDate;
    }
  });
  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
  }
  function makeFormatFunction(format) {
    var array = format.match(formattingTokens),
        i,
        length;
    for (i = 0, length = array.length; i < length; i++) {
      if (formatTokenFunctions[array[i]]) {
        array[i] = formatTokenFunctions[array[i]];
      } else {
        array[i] = removeFormattingTokens(array[i]);
      }
    }
    return function(mom) {
      var output = '';
      for (i = 0; i < length; i++) {
        output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
      }
      return output;
    };
  }
  function formatMoment(m, format) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }
    format = expandFormat(format, m.localeData());
    if (!formatFunctions[format]) {
      formatFunctions[format] = makeFormatFunction(format);
    }
    return formatFunctions[format](m);
  }
  function expandFormat(format, locale) {
    var i = 5;
    function replaceLongDateFormatTokens(input) {
      return locale.longDateFormat(input) || input;
    }
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
      format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }
    return format;
  }
  function getParseRegexForToken(token, config) {
    var a,
        strict = config._strict;
    switch (token) {
      case 'Q':
        return parseTokenOneDigit;
      case 'DDDD':
        return parseTokenThreeDigits;
      case 'YYYY':
      case 'GGGG':
      case 'gggg':
        return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
      case 'Y':
      case 'G':
      case 'g':
        return parseTokenSignedNumber;
      case 'YYYYYY':
      case 'YYYYY':
      case 'GGGGG':
      case 'ggggg':
        return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
      case 'S':
        if (strict) {
          return parseTokenOneDigit;
        }
      case 'SS':
        if (strict) {
          return parseTokenTwoDigits;
        }
      case 'SSS':
        if (strict) {
          return parseTokenThreeDigits;
        }
      case 'DDD':
        return parseTokenOneToThreeDigits;
      case 'MMM':
      case 'MMMM':
      case 'dd':
      case 'ddd':
      case 'dddd':
        return parseTokenWord;
      case 'a':
      case 'A':
        return config._locale._meridiemParse;
      case 'x':
        return parseTokenOffsetMs;
      case 'X':
        return parseTokenTimestampMs;
      case 'Z':
      case 'ZZ':
        return parseTokenTimezone;
      case 'T':
        return parseTokenT;
      case 'SSSS':
        return parseTokenDigits;
      case 'MM':
      case 'DD':
      case 'YY':
      case 'GG':
      case 'gg':
      case 'HH':
      case 'hh':
      case 'mm':
      case 'ss':
      case 'ww':
      case 'WW':
        return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
      case 'M':
      case 'D':
      case 'd':
      case 'H':
      case 'h':
      case 'm':
      case 's':
      case 'w':
      case 'W':
      case 'e':
      case 'E':
        return parseTokenOneOrTwoDigits;
      case 'Do':
        return strict ? config._locale._ordinalParse : config._locale._ordinalParseLenient;
      default:
        a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), 'i'));
        return a;
    }
  }
  function utcOffsetFromString(string) {
    string = string || '';
    var possibleTzMatches = (string.match(parseTokenTimezone) || []),
        tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
        parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
        minutes = +(parts[1] * 60) + toInt(parts[2]);
    return parts[0] === '+' ? minutes : -minutes;
  }
  function addTimeToArrayFromToken(token, input, config) {
    var a,
        datePartArray = config._a;
    switch (token) {
      case 'Q':
        if (input != null) {
          datePartArray[MONTH] = (toInt(input) - 1) * 3;
        }
        break;
      case 'M':
      case 'MM':
        if (input != null) {
          datePartArray[MONTH] = toInt(input) - 1;
        }
        break;
      case 'MMM':
      case 'MMMM':
        a = config._locale.monthsParse(input, token, config._strict);
        if (a != null) {
          datePartArray[MONTH] = a;
        } else {
          config._pf.invalidMonth = input;
        }
        break;
      case 'D':
      case 'DD':
        if (input != null) {
          datePartArray[DATE] = toInt(input);
        }
        break;
      case 'Do':
        if (input != null) {
          datePartArray[DATE] = toInt(parseInt(input.match(/\d{1,2}/)[0], 10));
        }
        break;
      case 'DDD':
      case 'DDDD':
        if (input != null) {
          config._dayOfYear = toInt(input);
        }
        break;
      case 'YY':
        datePartArray[YEAR] = moment.parseTwoDigitYear(input);
        break;
      case 'YYYY':
      case 'YYYYY':
      case 'YYYYYY':
        datePartArray[YEAR] = toInt(input);
        break;
      case 'a':
      case 'A':
        config._meridiem = input;
        break;
      case 'h':
      case 'hh':
        config._pf.bigHour = true;
      case 'H':
      case 'HH':
        datePartArray[HOUR] = toInt(input);
        break;
      case 'm':
      case 'mm':
        datePartArray[MINUTE] = toInt(input);
        break;
      case 's':
      case 'ss':
        datePartArray[SECOND] = toInt(input);
        break;
      case 'S':
      case 'SS':
      case 'SSS':
      case 'SSSS':
        datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
        break;
      case 'x':
        config._d = new Date(toInt(input));
        break;
      case 'X':
        config._d = new Date(parseFloat(input) * 1000);
        break;
      case 'Z':
      case 'ZZ':
        config._useUTC = true;
        config._tzm = utcOffsetFromString(input);
        break;
      case 'dd':
      case 'ddd':
      case 'dddd':
        a = config._locale.weekdaysParse(input);
        if (a != null) {
          config._w = config._w || {};
          config._w['d'] = a;
        } else {
          config._pf.invalidWeekday = input;
        }
        break;
      case 'w':
      case 'ww':
      case 'W':
      case 'WW':
      case 'd':
      case 'e':
      case 'E':
        token = token.substr(0, 1);
      case 'gggg':
      case 'GGGG':
      case 'GGGGG':
        token = token.substr(0, 2);
        if (input) {
          config._w = config._w || {};
          config._w[token] = toInt(input);
        }
        break;
      case 'gg':
      case 'GG':
        config._w = config._w || {};
        config._w[token] = moment.parseTwoDigitYear(input);
    }
  }
  function dayOfYearFromWeekInfo(config) {
    var w,
        weekYear,
        week,
        weekday,
        dow,
        doy,
        temp;
    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4;
      weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
      week = dfl(w.W, 1);
      weekday = dfl(w.E, 1);
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;
      weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
      week = dfl(w.w, 1);
      if (w.d != null) {
        weekday = w.d;
        if (weekday < dow) {
          ++week;
        }
      } else if (w.e != null) {
        weekday = w.e + dow;
      } else {
        weekday = dow;
      }
    }
    temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);
    config._a[YEAR] = temp.year;
    config._dayOfYear = temp.dayOfYear;
  }
  function dateFromConfig(config) {
    var i,
        date,
        input = [],
        currentDate,
        yearToUse;
    if (config._d) {
      return ;
    }
    currentDate = currentDateArray(config);
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    }
    if (config._dayOfYear) {
      yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);
      if (config._dayOfYear > daysInYear(yearToUse)) {
        config._pf._overflowDayOfYear = true;
      }
      date = makeUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
    }
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
    }
    for (; i < 7; i++) {
      config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }
    if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }
    config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
    if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }
    if (config._nextDay) {
      config._a[HOUR] = 24;
    }
  }
  function dateFromObject(config) {
    var normalizedInput;
    if (config._d) {
      return ;
    }
    normalizedInput = normalizeObjectUnits(config._i);
    config._a = [normalizedInput.year, normalizedInput.month, normalizedInput.day || normalizedInput.date, normalizedInput.hour, normalizedInput.minute, normalizedInput.second, normalizedInput.millisecond];
    dateFromConfig(config);
  }
  function currentDateArray(config) {
    var now = new Date();
    if (config._useUTC) {
      return [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()];
    } else {
      return [now.getFullYear(), now.getMonth(), now.getDate()];
    }
  }
  function makeDateFromStringAndFormat(config) {
    if (config._f === moment.ISO_8601) {
      parseISO(config);
      return ;
    }
    config._a = [];
    config._pf.empty = true;
    var string = '' + config._i,
        i,
        parsedInput,
        tokens,
        token,
        skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;
    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];
      parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
      if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));
        if (skipped.length > 0) {
          config._pf.unusedInput.push(skipped);
        }
        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
        totalParsedInputLength += parsedInput.length;
      }
      if (formatTokenFunctions[token]) {
        if (parsedInput) {
          config._pf.empty = false;
        } else {
          config._pf.unusedTokens.push(token);
        }
        addTimeToArrayFromToken(token, parsedInput, config);
      } else if (config._strict && !parsedInput) {
        config._pf.unusedTokens.push(token);
      }
    }
    config._pf.charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
      config._pf.unusedInput.push(string);
    }
    if (config._pf.bigHour === true && config._a[HOUR] <= 12) {
      config._pf.bigHour = undefined;
    }
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
    dateFromConfig(config);
    checkOverflow(config);
  }
  function unescapeFormat(s) {
    return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
      return p1 || p2 || p3 || p4;
    });
  }
  function regexpEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
  function makeDateFromStringAndArray(config) {
    var tempConfig,
        bestMoment,
        scoreToBeat,
        i,
        currentScore;
    if (config._f.length === 0) {
      config._pf.invalidFormat = true;
      config._d = new Date(NaN);
      return ;
    }
    for (i = 0; i < config._f.length; i++) {
      currentScore = 0;
      tempConfig = copyConfig({}, config);
      if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }
      tempConfig._pf = defaultParsingFlags();
      tempConfig._f = config._f[i];
      makeDateFromStringAndFormat(tempConfig);
      if (!isValid(tempConfig)) {
        continue;
      }
      currentScore += tempConfig._pf.charsLeftOver;
      currentScore += tempConfig._pf.unusedTokens.length * 10;
      tempConfig._pf.score = currentScore;
      if (scoreToBeat == null || currentScore < scoreToBeat) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
      }
    }
    extend(config, bestMoment || tempConfig);
  }
  function parseISO(config) {
    var i,
        l,
        string = config._i,
        match = isoRegex.exec(string);
    if (match) {
      config._pf.iso = true;
      for (i = 0, l = isoDates.length; i < l; i++) {
        if (isoDates[i][1].exec(string)) {
          config._f = isoDates[i][0] + (match[6] || ' ');
          break;
        }
      }
      for (i = 0, l = isoTimes.length; i < l; i++) {
        if (isoTimes[i][1].exec(string)) {
          config._f += isoTimes[i][0];
          break;
        }
      }
      if (string.match(parseTokenTimezone)) {
        config._f += 'Z';
      }
      makeDateFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  }
  function makeDateFromString(config) {
    parseISO(config);
    if (config._isValid === false) {
      delete config._isValid;
      moment.createFromInputFallback(config);
    }
  }
  function map(arr, fn) {
    var res = [],
        i;
    for (i = 0; i < arr.length; ++i) {
      res.push(fn(arr[i], i));
    }
    return res;
  }
  function makeDateFromInput(config) {
    var input = config._i,
        matched;
    if (input === undefined) {
      config._d = new Date();
    } else if (isDate(input)) {
      config._d = new Date(+input);
    } else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
      config._d = new Date(+matched[1]);
    } else if (typeof input === 'string') {
      makeDateFromString(config);
    } else if (isArray(input)) {
      config._a = map(input.slice(0), function(obj) {
        return parseInt(obj, 10);
      });
      dateFromConfig(config);
    } else if (typeof(input) === 'object') {
      dateFromObject(config);
    } else if (typeof(input) === 'number') {
      config._d = new Date(input);
    } else {
      moment.createFromInputFallback(config);
    }
  }
  function makeDate(y, m, d, h, M, s, ms) {
    var date = new Date(y, m, d, h, M, s, ms);
    if (y < 1970) {
      date.setFullYear(y);
    }
    return date;
  }
  function makeUTCDate(y) {
    var date = new Date(Date.UTC.apply(null, arguments));
    if (y < 1970) {
      date.setUTCFullYear(y);
    }
    return date;
  }
  function parseWeekday(input, locale) {
    if (typeof input === 'string') {
      if (!isNaN(input)) {
        input = parseInt(input, 10);
      } else {
        input = locale.weekdaysParse(input);
        if (typeof input !== 'number') {
          return null;
        }
      }
    }
    return input;
  }
  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }
  function relativeTime(posNegDuration, withoutSuffix, locale) {
    var duration = moment.duration(posNegDuration).abs(),
        seconds = round(duration.as('s')),
        minutes = round(duration.as('m')),
        hours = round(duration.as('h')),
        days = round(duration.as('d')),
        months = round(duration.as('M')),
        years = round(duration.as('y')),
        args = seconds < relativeTimeThresholds.s && ['s', seconds] || minutes === 1 && ['m'] || minutes < relativeTimeThresholds.m && ['mm', minutes] || hours === 1 && ['h'] || hours < relativeTimeThresholds.h && ['hh', hours] || days === 1 && ['d'] || days < relativeTimeThresholds.d && ['dd', days] || months === 1 && ['M'] || months < relativeTimeThresholds.M && ['MM', months] || years === 1 && ['y'] || ['yy', years];
    args[2] = withoutSuffix;
    args[3] = +posNegDuration > 0;
    args[4] = locale;
    return substituteTimeAgo.apply({}, args);
  }
  function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
    var end = firstDayOfWeekOfYear - firstDayOfWeek,
        daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
        adjustedMoment;
    if (daysToDayOfWeek > end) {
      daysToDayOfWeek -= 7;
    }
    if (daysToDayOfWeek < end - 7) {
      daysToDayOfWeek += 7;
    }
    adjustedMoment = moment(mom).add(daysToDayOfWeek, 'd');
    return {
      week: Math.ceil(adjustedMoment.dayOfYear() / 7),
      year: adjustedMoment.year()
    };
  }
  function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
    var d = makeUTCDate(year, 0, 1).getUTCDay(),
        daysToAdd,
        dayOfYear;
    d = d === 0 ? 7 : d;
    weekday = weekday != null ? weekday : firstDayOfWeek;
    daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
    dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;
    return {
      year: dayOfYear > 0 ? year : year - 1,
      dayOfYear: dayOfYear > 0 ? dayOfYear : daysInYear(year - 1) + dayOfYear
    };
  }
  function makeMoment(config) {
    var input = config._i,
        format = config._f,
        res;
    config._locale = config._locale || moment.localeData(config._l);
    if (input === null || (format === undefined && input === '')) {
      return moment.invalid({nullInput: true});
    }
    if (typeof input === 'string') {
      config._i = input = config._locale.preparse(input);
    }
    if (moment.isMoment(input)) {
      return new Moment(input, true);
    } else if (format) {
      if (isArray(format)) {
        makeDateFromStringAndArray(config);
      } else {
        makeDateFromStringAndFormat(config);
      }
    } else {
      makeDateFromInput(config);
    }
    res = new Moment(config);
    if (res._nextDay) {
      res.add(1, 'd');
      res._nextDay = undefined;
    }
    return res;
  }
  moment = function(input, format, locale, strict) {
    var c;
    if (typeof(locale) === 'boolean') {
      strict = locale;
      locale = undefined;
    }
    c = {};
    c._isAMomentObject = true;
    c._i = input;
    c._f = format;
    c._l = locale;
    c._strict = strict;
    c._isUTC = false;
    c._pf = defaultParsingFlags();
    return makeMoment(c);
  };
  moment.suppressDeprecationWarnings = false;
  moment.createFromInputFallback = deprecate('moment construction falls back to js Date. This is ' + 'discouraged and will be removed in upcoming major ' + 'release. Please refer to ' + 'https://github.com/moment/moment/issues/1407 for more info.', function(config) {
    config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
  });
  function pickBy(fn, moments) {
    var res,
        i;
    if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
    }
    if (!moments.length) {
      return moment();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
      if (moments[i][fn](res)) {
        res = moments[i];
      }
    }
    return res;
  }
  moment.min = function() {
    var args = [].slice.call(arguments, 0);
    return pickBy('isBefore', args);
  };
  moment.max = function() {
    var args = [].slice.call(arguments, 0);
    return pickBy('isAfter', args);
  };
  moment.utc = function(input, format, locale, strict) {
    var c;
    if (typeof(locale) === 'boolean') {
      strict = locale;
      locale = undefined;
    }
    c = {};
    c._isAMomentObject = true;
    c._useUTC = true;
    c._isUTC = true;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;
    c._pf = defaultParsingFlags();
    return makeMoment(c).utc();
  };
  moment.unix = function(input) {
    return moment(input * 1000);
  };
  moment.duration = function(input, key) {
    var duration = input,
        match = null,
        sign,
        ret,
        parseIso,
        diffRes;
    if (moment.isDuration(input)) {
      duration = {
        ms: input._milliseconds,
        d: input._days,
        M: input._months
      };
    } else if (typeof input === 'number') {
      duration = {};
      if (key) {
        duration[key] = input;
      } else {
        duration.milliseconds = input;
      }
    } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
      sign = (match[1] === '-') ? -1 : 1;
      duration = {
        y: 0,
        d: toInt(match[DATE]) * sign,
        h: toInt(match[HOUR]) * sign,
        m: toInt(match[MINUTE]) * sign,
        s: toInt(match[SECOND]) * sign,
        ms: toInt(match[MILLISECOND]) * sign
      };
    } else if (!!(match = isoDurationRegex.exec(input))) {
      sign = (match[1] === '-') ? -1 : 1;
      parseIso = function(inp) {
        var res = inp && parseFloat(inp.replace(',', '.'));
        return (isNaN(res) ? 0 : res) * sign;
      };
      duration = {
        y: parseIso(match[2]),
        M: parseIso(match[3]),
        d: parseIso(match[4]),
        h: parseIso(match[5]),
        m: parseIso(match[6]),
        s: parseIso(match[7]),
        w: parseIso(match[8])
      };
    } else if (duration == null) {
      duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
      diffRes = momentsDifference(moment(duration.from), moment(duration.to));
      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }
    ret = new Duration(duration);
    if (moment.isDuration(input) && hasOwnProp(input, '_locale')) {
      ret._locale = input._locale;
    }
    return ret;
  };
  moment.version = VERSION;
  moment.defaultFormat = isoFormat;
  moment.ISO_8601 = function() {};
  moment.momentProperties = momentProperties;
  moment.updateOffset = function() {};
  moment.relativeTimeThreshold = function(threshold, limit) {
    if (relativeTimeThresholds[threshold] === undefined) {
      return false;
    }
    if (limit === undefined) {
      return relativeTimeThresholds[threshold];
    }
    relativeTimeThresholds[threshold] = limit;
    return true;
  };
  moment.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', function(key, value) {
    return moment.locale(key, value);
  });
  moment.locale = function(key, values) {
    var data;
    if (key) {
      if (typeof(values) !== 'undefined') {
        data = moment.defineLocale(key, values);
      } else {
        data = moment.localeData(key);
      }
      if (data) {
        moment.duration._locale = moment._locale = data;
      }
    }
    return moment._locale._abbr;
  };
  moment.defineLocale = function(name, values) {
    if (values !== null) {
      values.abbr = name;
      if (!locales[name]) {
        locales[name] = new Locale();
      }
      locales[name].set(values);
      moment.locale(name);
      return locales[name];
    } else {
      delete locales[name];
      return null;
    }
  };
  moment.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', function(key) {
    return moment.localeData(key);
  });
  moment.localeData = function(key) {
    var locale;
    if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }
    if (!key) {
      return moment._locale;
    }
    if (!isArray(key)) {
      locale = loadLocale(key);
      if (locale) {
        return locale;
      }
      key = [key];
    }
    return chooseLocale(key);
  };
  moment.isMoment = function(obj) {
    return obj instanceof Moment || (obj != null && hasOwnProp(obj, '_isAMomentObject'));
  };
  moment.isDuration = function(obj) {
    return obj instanceof Duration;
  };
  for (i = lists.length - 1; i >= 0; --i) {
    makeList(lists[i]);
  }
  moment.normalizeUnits = function(units) {
    return normalizeUnits(units);
  };
  moment.invalid = function(flags) {
    var m = moment.utc(NaN);
    if (flags != null) {
      extend(m._pf, flags);
    } else {
      m._pf.userInvalidated = true;
    }
    return m;
  };
  moment.parseZone = function() {
    return moment.apply(null, arguments).parseZone();
  };
  moment.parseTwoDigitYear = function(input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
  };
  moment.isDate = isDate;
  extend(moment.fn = Moment.prototype, {
    clone: function() {
      return moment(this);
    },
    valueOf: function() {
      return +this._d - ((this._offset || 0) * 60000);
    },
    unix: function() {
      return Math.floor(+this / 1000);
    },
    toString: function() {
      return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    },
    toDate: function() {
      return this._offset ? new Date(+this) : this._d;
    },
    toISOString: function() {
      var m = moment(this).utc();
      if (0 < m.year() && m.year() <= 9999) {
        if ('function' === typeof Date.prototype.toISOString) {
          return this.toDate().toISOString();
        } else {
          return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
      } else {
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
      }
    },
    toArray: function() {
      var m = this;
      return [m.year(), m.month(), m.date(), m.hours(), m.minutes(), m.seconds(), m.milliseconds()];
    },
    isValid: function() {
      return isValid(this);
    },
    isDSTShifted: function() {
      if (this._a) {
        return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
      }
      return false;
    },
    parsingFlags: function() {
      return extend({}, this._pf);
    },
    invalidAt: function() {
      return this._pf.overflow;
    },
    utc: function(keepLocalTime) {
      return this.utcOffset(0, keepLocalTime);
    },
    local: function(keepLocalTime) {
      if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;
        if (keepLocalTime) {
          this.subtract(this._dateUtcOffset(), 'm');
        }
      }
      return this;
    },
    format: function(inputString) {
      var output = formatMoment(this, inputString || moment.defaultFormat);
      return this.localeData().postformat(output);
    },
    add: createAdder(1, 'add'),
    subtract: createAdder(-1, 'subtract'),
    diff: function(input, units, asFloat) {
      var that = makeAs(input, this),
          zoneDiff = (that.utcOffset() - this.utcOffset()) * 6e4,
          anchor,
          diff,
          output,
          daysAdjust;
      units = normalizeUnits(units);
      if (units === 'year' || units === 'month' || units === 'quarter') {
        output = monthDiff(this, that);
        if (units === 'quarter') {
          output = output / 3;
        } else if (units === 'year') {
          output = output / 12;
        }
      } else {
        diff = this - that;
        output = units === 'second' ? diff / 1e3 : units === 'minute' ? diff / 6e4 : units === 'hour' ? diff / 36e5 : units === 'day' ? (diff - zoneDiff) / 864e5 : units === 'week' ? (diff - zoneDiff) / 6048e5 : diff;
      }
      return asFloat ? output : absRound(output);
    },
    from: function(time, withoutSuffix) {
      return moment.duration({
        to: this,
        from: time
      }).locale(this.locale()).humanize(!withoutSuffix);
    },
    fromNow: function(withoutSuffix) {
      return this.from(moment(), withoutSuffix);
    },
    calendar: function(time) {
      var now = time || moment(),
          sod = makeAs(now, this).startOf('day'),
          diff = this.diff(sod, 'days', true),
          format = diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
      return this.format(this.localeData().calendar(format, this, moment(now)));
    },
    isLeapYear: function() {
      return isLeapYear(this.year());
    },
    isDST: function() {
      return (this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset());
    },
    day: function(input) {
      var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
      } else {
        return day;
      }
    },
    month: makeAccessor('Month', true),
    startOf: function(units) {
      units = normalizeUnits(units);
      switch (units) {
        case 'year':
          this.month(0);
        case 'quarter':
        case 'month':
          this.date(1);
        case 'week':
        case 'isoWeek':
        case 'day':
          this.hours(0);
        case 'hour':
          this.minutes(0);
        case 'minute':
          this.seconds(0);
        case 'second':
          this.milliseconds(0);
      }
      if (units === 'week') {
        this.weekday(0);
      } else if (units === 'isoWeek') {
        this.isoWeekday(1);
      }
      if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
      }
      return this;
    },
    endOf: function(units) {
      units = normalizeUnits(units);
      if (units === undefined || units === 'millisecond') {
        return this;
      }
      return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
    },
    isAfter: function(input, units) {
      var inputMs;
      units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
      if (units === 'millisecond') {
        input = moment.isMoment(input) ? input : moment(input);
        return +this > +input;
      } else {
        inputMs = moment.isMoment(input) ? +input : +moment(input);
        return inputMs < +this.clone().startOf(units);
      }
    },
    isBefore: function(input, units) {
      var inputMs;
      units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
      if (units === 'millisecond') {
        input = moment.isMoment(input) ? input : moment(input);
        return +this < +input;
      } else {
        inputMs = moment.isMoment(input) ? +input : +moment(input);
        return +this.clone().endOf(units) < inputMs;
      }
    },
    isBetween: function(from, to, units) {
      return this.isAfter(from, units) && this.isBefore(to, units);
    },
    isSame: function(input, units) {
      var inputMs;
      units = normalizeUnits(units || 'millisecond');
      if (units === 'millisecond') {
        input = moment.isMoment(input) ? input : moment(input);
        return +this === +input;
      } else {
        inputMs = +moment(input);
        return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
      }
    },
    min: deprecate('moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548', function(other) {
      other = moment.apply(null, arguments);
      return other < this ? this : other;
    }),
    max: deprecate('moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548', function(other) {
      other = moment.apply(null, arguments);
      return other > this ? this : other;
    }),
    zone: deprecate('moment().zone is deprecated, use moment().utcOffset instead. ' + 'https://github.com/moment/moment/issues/1779', function(input, keepLocalTime) {
      if (input != null) {
        if (typeof input !== 'string') {
          input = -input;
        }
        this.utcOffset(input, keepLocalTime);
        return this;
      } else {
        return -this.utcOffset();
      }
    }),
    utcOffset: function(input, keepLocalTime) {
      var offset = this._offset || 0,
          localAdjust;
      if (input != null) {
        if (typeof input === 'string') {
          input = utcOffsetFromString(input);
        }
        if (Math.abs(input) < 16) {
          input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
          localAdjust = this._dateUtcOffset();
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
          this.add(localAdjust, 'm');
        }
        if (offset !== input) {
          if (!keepLocalTime || this._changeInProgress) {
            addOrSubtractDurationFromMoment(this, moment.duration(input - offset, 'm'), 1, false);
          } else if (!this._changeInProgress) {
            this._changeInProgress = true;
            moment.updateOffset(this, true);
            this._changeInProgress = null;
          }
        }
        return this;
      } else {
        return this._isUTC ? offset : this._dateUtcOffset();
      }
    },
    isLocal: function() {
      return !this._isUTC;
    },
    isUtcOffset: function() {
      return this._isUTC;
    },
    isUtc: function() {
      return this._isUTC && this._offset === 0;
    },
    zoneAbbr: function() {
      return this._isUTC ? 'UTC' : '';
    },
    zoneName: function() {
      return this._isUTC ? 'Coordinated Universal Time' : '';
    },
    parseZone: function() {
      if (this._tzm) {
        this.utcOffset(this._tzm);
      } else if (typeof this._i === 'string') {
        this.utcOffset(utcOffsetFromString(this._i));
      }
      return this;
    },
    hasAlignedHourOffset: function(input) {
      if (!input) {
        input = 0;
      } else {
        input = moment(input).utcOffset();
      }
      return (this.utcOffset() - input) % 60 === 0;
    },
    daysInMonth: function() {
      return daysInMonth(this.year(), this.month());
    },
    dayOfYear: function(input) {
      var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
      return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    },
    quarter: function(input) {
      return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    },
    weekYear: function(input) {
      var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
      return input == null ? year : this.add((input - year), 'y');
    },
    isoWeekYear: function(input) {
      var year = weekOfYear(this, 1, 4).year;
      return input == null ? year : this.add((input - year), 'y');
    },
    week: function(input) {
      var week = this.localeData().week(this);
      return input == null ? week : this.add((input - week) * 7, 'd');
    },
    isoWeek: function(input) {
      var week = weekOfYear(this, 1, 4).week;
      return input == null ? week : this.add((input - week) * 7, 'd');
    },
    weekday: function(input) {
      var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return input == null ? weekday : this.add(input - weekday, 'd');
    },
    isoWeekday: function(input) {
      return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
    },
    isoWeeksInYear: function() {
      return weeksInYear(this.year(), 1, 4);
    },
    weeksInYear: function() {
      var weekInfo = this.localeData()._week;
      return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    },
    get: function(units) {
      units = normalizeUnits(units);
      return this[units]();
    },
    set: function(units, value) {
      var unit;
      if (typeof units === 'object') {
        for (unit in units) {
          this.set(unit, units[unit]);
        }
      } else {
        units = normalizeUnits(units);
        if (typeof this[units] === 'function') {
          this[units](value);
        }
      }
      return this;
    },
    locale: function(key) {
      var newLocaleData;
      if (key === undefined) {
        return this._locale._abbr;
      } else {
        newLocaleData = moment.localeData(key);
        if (newLocaleData != null) {
          this._locale = newLocaleData;
        }
        return this;
      }
    },
    lang: deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function(key) {
      if (key === undefined) {
        return this.localeData();
      } else {
        return this.locale(key);
      }
    }),
    localeData: function() {
      return this._locale;
    },
    _dateUtcOffset: function() {
      return -Math.round(this._d.getTimezoneOffset() / 15) * 15;
    }
  });
  function rawMonthSetter(mom, value) {
    var dayOfMonth;
    if (typeof value === 'string') {
      value = mom.localeData().monthsParse(value);
      if (typeof value !== 'number') {
        return mom;
      }
    }
    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
  }
  function rawGetter(mom, unit) {
    return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
  }
  function rawSetter(mom, unit, value) {
    if (unit === 'Month') {
      return rawMonthSetter(mom, value);
    } else {
      return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
  }
  function makeAccessor(unit, keepTime) {
    return function(value) {
      if (value != null) {
        rawSetter(this, unit, value);
        moment.updateOffset(this, keepTime);
        return this;
      } else {
        return rawGetter(this, unit);
      }
    };
  }
  moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
  moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
  moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
  moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
  moment.fn.date = makeAccessor('Date', true);
  moment.fn.dates = deprecate('dates accessor is deprecated. Use date instead.', makeAccessor('Date', true));
  moment.fn.year = makeAccessor('FullYear', true);
  moment.fn.years = deprecate('years accessor is deprecated. Use year instead.', makeAccessor('FullYear', true));
  moment.fn.days = moment.fn.day;
  moment.fn.months = moment.fn.month;
  moment.fn.weeks = moment.fn.week;
  moment.fn.isoWeeks = moment.fn.isoWeek;
  moment.fn.quarters = moment.fn.quarter;
  moment.fn.toJSON = moment.fn.toISOString;
  moment.fn.isUTC = moment.fn.isUtc;
  function daysToYears(days) {
    return days * 400 / 146097;
  }
  function yearsToDays(years) {
    return years * 146097 / 400;
  }
  extend(moment.duration.fn = Duration.prototype, {
    _bubble: function() {
      var milliseconds = this._milliseconds,
          days = this._days,
          months = this._months,
          data = this._data,
          seconds,
          minutes,
          hours,
          years = 0;
      data.milliseconds = milliseconds % 1000;
      seconds = absRound(milliseconds / 1000);
      data.seconds = seconds % 60;
      minutes = absRound(seconds / 60);
      data.minutes = minutes % 60;
      hours = absRound(minutes / 60);
      data.hours = hours % 24;
      days += absRound(hours / 24);
      years = absRound(daysToYears(days));
      days -= absRound(yearsToDays(years));
      months += absRound(days / 30);
      days %= 30;
      years += absRound(months / 12);
      months %= 12;
      data.days = days;
      data.months = months;
      data.years = years;
    },
    abs: function() {
      this._milliseconds = Math.abs(this._milliseconds);
      this._days = Math.abs(this._days);
      this._months = Math.abs(this._months);
      this._data.milliseconds = Math.abs(this._data.milliseconds);
      this._data.seconds = Math.abs(this._data.seconds);
      this._data.minutes = Math.abs(this._data.minutes);
      this._data.hours = Math.abs(this._data.hours);
      this._data.months = Math.abs(this._data.months);
      this._data.years = Math.abs(this._data.years);
      return this;
    },
    weeks: function() {
      return absRound(this.days() / 7);
    },
    valueOf: function() {
      return this._milliseconds + this._days * 864e5 + (this._months % 12) * 2592e6 + toInt(this._months / 12) * 31536e6;
    },
    humanize: function(withSuffix) {
      var output = relativeTime(this, !withSuffix, this.localeData());
      if (withSuffix) {
        output = this.localeData().pastFuture(+this, output);
      }
      return this.localeData().postformat(output);
    },
    add: function(input, val) {
      var dur = moment.duration(input, val);
      this._milliseconds += dur._milliseconds;
      this._days += dur._days;
      this._months += dur._months;
      this._bubble();
      return this;
    },
    subtract: function(input, val) {
      var dur = moment.duration(input, val);
      this._milliseconds -= dur._milliseconds;
      this._days -= dur._days;
      this._months -= dur._months;
      this._bubble();
      return this;
    },
    get: function(units) {
      units = normalizeUnits(units);
      return this[units.toLowerCase() + 's']();
    },
    as: function(units) {
      var days,
          months;
      units = normalizeUnits(units);
      if (units === 'month' || units === 'year') {
        days = this._days + this._milliseconds / 864e5;
        months = this._months + daysToYears(days) * 12;
        return units === 'month' ? months : months / 12;
      } else {
        days = this._days + Math.round(yearsToDays(this._months / 12));
        switch (units) {
          case 'week':
            return days / 7 + this._milliseconds / 6048e5;
          case 'day':
            return days + this._milliseconds / 864e5;
          case 'hour':
            return days * 24 + this._milliseconds / 36e5;
          case 'minute':
            return days * 24 * 60 + this._milliseconds / 6e4;
          case 'second':
            return days * 24 * 60 * 60 + this._milliseconds / 1000;
          case 'millisecond':
            return Math.floor(days * 24 * 60 * 60 * 1000) + this._milliseconds;
          default:
            throw new Error('Unknown unit ' + units);
        }
      }
    },
    lang: moment.fn.lang,
    locale: moment.fn.locale,
    toIsoString: deprecate('toIsoString() is deprecated. Please use toISOString() instead ' + '(notice the capitals)', function() {
      return this.toISOString();
    }),
    toISOString: function() {
      var years = Math.abs(this.years()),
          months = Math.abs(this.months()),
          days = Math.abs(this.days()),
          hours = Math.abs(this.hours()),
          minutes = Math.abs(this.minutes()),
          seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);
      if (!this.asSeconds()) {
        return 'P0D';
      }
      return (this.asSeconds() < 0 ? '-' : '') + 'P' + (years ? years + 'Y' : '') + (months ? months + 'M' : '') + (days ? days + 'D' : '') + ((hours || minutes || seconds) ? 'T' : '') + (hours ? hours + 'H' : '') + (minutes ? minutes + 'M' : '') + (seconds ? seconds + 'S' : '');
    },
    localeData: function() {
      return this._locale;
    },
    toJSON: function() {
      return this.toISOString();
    }
  });
  moment.duration.fn.toString = moment.duration.fn.toISOString;
  function makeDurationGetter(name) {
    moment.duration.fn[name] = function() {
      return this._data[name];
    };
  }
  for (i in unitMillisecondFactors) {
    if (hasOwnProp(unitMillisecondFactors, i)) {
      makeDurationGetter(i.toLowerCase());
    }
  }
  moment.duration.fn.asMilliseconds = function() {
    return this.as('ms');
  };
  moment.duration.fn.asSeconds = function() {
    return this.as('s');
  };
  moment.duration.fn.asMinutes = function() {
    return this.as('m');
  };
  moment.duration.fn.asHours = function() {
    return this.as('h');
  };
  moment.duration.fn.asDays = function() {
    return this.as('d');
  };
  moment.duration.fn.asWeeks = function() {
    return this.as('weeks');
  };
  moment.duration.fn.asMonths = function() {
    return this.as('M');
  };
  moment.duration.fn.asYears = function() {
    return this.as('y');
  };
  moment.locale('en', {
    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(number) {
      var b = number % 10,
          output = (toInt(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2) ? 'nd' : (b === 3) ? 'rd' : 'th';
      return number + output;
    }
  });
  function makeGlobal(shouldDeprecate) {
    if (typeof ender !== 'undefined') {
      return ;
    }
    oldGlobalMoment = globalScope.moment;
    if (shouldDeprecate) {
      globalScope.moment = deprecate('Accessing Moment through the global scope is ' + 'deprecated, and will be removed in an upcoming ' + 'release.', moment);
    } else {
      globalScope.moment = moment;
    }
  }
  if (hasModule) {
    module.exports = moment;
  } else if (typeof define === 'function' && define.amd) {
    System.register("github:moment/moment@2.9.0/moment", [], false, function(__require, __exports, __module) {
      return (function(require, exports, module) {
        if (module.config && module.config() && module.config().noGlobal === true) {
          globalScope.moment = oldGlobalMoment;
        }
        return moment;
      }).call(__exports, __require, __exports, __module);
    });
    makeGlobal(true);
  } else {
    makeGlobal();
  }
}).call(this);


})();
(function() {
function define(){};  define.amd = {};
var Showdown = {extensions: {}};
var forEach = Showdown.forEach = function(obj, callback) {
  if (typeof obj.forEach === 'function') {
    obj.forEach(callback);
  } else {
    var i,
        len = obj.length;
    for (i = 0; i < len; i++) {
      callback(obj[i], i, obj);
    }
  }
};
var stdExtName = function(s) {
  return s.replace(/[_-]||\s/g, '').toLowerCase();
};
Showdown.converter = function(converter_options) {
  var g_urls;
  var g_titles;
  var g_html_blocks;
  var g_list_level = 0;
  var g_lang_extensions = [];
  var g_output_modifiers = [];
  if (typeof module !== 'undefined' && typeof exports !== 'undefined' && typeof require !== 'undefined') {
    var fs = require('fs');
    if (fs) {
      var extensions = fs.readdirSync((__dirname || '.') + '/extensions').filter(function(file) {
        return ~file.indexOf('.js');
      }).map(function(file) {
        return file.replace(/\.js$/, '');
      });
      Showdown.forEach(extensions, function(ext) {
        var name = stdExtName(ext);
        Showdown.extensions[name] = require('./extensions/' + ext);
      });
    }
  }
  this.makeHtml = function(text) {
    g_urls = {};
    g_titles = {};
    g_html_blocks = [];
    text = text.replace(/~/g, "~T");
    text = text.replace(/\$/g, "~D");
    text = text.replace(/\r\n/g, "\n");
    text = text.replace(/\r/g, "\n");
    text = "\n\n" + text + "\n\n";
    text = _Detab(text);
    text = text.replace(/^[ \t]+$/mg, "");
    Showdown.forEach(g_lang_extensions, function(x) {
      text = _ExecuteExtension(x, text);
    });
    text = _DoGithubCodeBlocks(text);
    text = _HashHTMLBlocks(text);
    text = _StripLinkDefinitions(text);
    text = _RunBlockGamut(text);
    text = _UnescapeSpecialChars(text);
    text = text.replace(/~D/g, "$$");
    text = text.replace(/~T/g, "~");
    Showdown.forEach(g_output_modifiers, function(x) {
      text = _ExecuteExtension(x, text);
    });
    return text;
  };
  if (converter_options && converter_options.extensions) {
    var self = this;
    Showdown.forEach(converter_options.extensions, function(plugin) {
      if (typeof plugin === 'string') {
        plugin = Showdown.extensions[stdExtName(plugin)];
      }
      if (typeof plugin === 'function') {
        Showdown.forEach(plugin(self), function(ext) {
          if (ext.type) {
            if (ext.type === 'language' || ext.type === 'lang') {
              g_lang_extensions.push(ext);
            } else if (ext.type === 'output' || ext.type === 'html') {
              g_output_modifiers.push(ext);
            }
          } else {
            g_output_modifiers.push(ext);
          }
        });
      } else {
        throw "Extension '" + plugin + "' could not be loaded.  It was either not found or is not a valid extension.";
      }
    });
  }
  var _ExecuteExtension = function(ext, text) {
    if (ext.regex) {
      var re = new RegExp(ext.regex, 'g');
      return text.replace(re, ext.replace);
    } else if (ext.filter) {
      return ext.filter(text);
    }
  };
  var _StripLinkDefinitions = function(text) {
    text += "~0";
    text = text.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|(?=~0))/gm, function(wholeMatch, m1, m2, m3, m4) {
      m1 = m1.toLowerCase();
      g_urls[m1] = _EncodeAmpsAndAngles(m2);
      if (m3) {
        return m3 + m4;
      } else if (m4) {
        g_titles[m1] = m4.replace(/"/g, "&quot;");
      }
      return "";
    });
    text = text.replace(/~0/, "");
    return text;
  };
  var _HashHTMLBlocks = function(text) {
    text = text.replace(/\n/g, "\n\n");
    var block_tags_a = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del|style|section|header|footer|nav|article|aside";
    var block_tags_b = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside";
    text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, hashElement);
    text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm, hashElement);
    text = text.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, hashElement);
    text = text.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g, hashElement);
    text = text.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, hashElement);
    text = text.replace(/\n\n/g, "\n");
    return text;
  };
  var hashElement = function(wholeMatch, m1) {
    var blockText = m1;
    blockText = blockText.replace(/\n\n/g, "\n");
    blockText = blockText.replace(/^\n/, "");
    blockText = blockText.replace(/\n+$/g, "");
    blockText = "\n\n~K" + (g_html_blocks.push(blockText) - 1) + "K\n\n";
    return blockText;
  };
  var _RunBlockGamut = function(text) {
    text = _DoHeaders(text);
    var key = hashBlock("<hr />");
    text = text.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, key);
    text = text.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm, key);
    text = text.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm, key);
    text = _DoLists(text);
    text = _DoCodeBlocks(text);
    text = _DoBlockQuotes(text);
    text = _HashHTMLBlocks(text);
    text = _FormParagraphs(text);
    return text;
  };
  var _RunSpanGamut = function(text) {
    text = _DoCodeSpans(text);
    text = _EscapeSpecialCharsWithinTagAttributes(text);
    text = _EncodeBackslashEscapes(text);
    text = _DoImages(text);
    text = _DoAnchors(text);
    text = _DoAutoLinks(text);
    text = _EncodeAmpsAndAngles(text);
    text = _DoItalicsAndBold(text);
    text = text.replace(/  +\n/g, " <br />\n");
    return text;
  };
  var _EscapeSpecialCharsWithinTagAttributes = function(text) {
    var regex = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;
    text = text.replace(regex, function(wholeMatch) {
      var tag = wholeMatch.replace(/(.)<\/?code>(?=.)/g, "$1`");
      tag = escapeCharacters(tag, "\\`*_");
      return tag;
    });
    return text;
  };
  var _DoAnchors = function(text) {
    text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, writeAnchorTag);
    text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, writeAnchorTag);
    text = text.replace(/(\[([^\[\]]+)\])()()()()()/g, writeAnchorTag);
    return text;
  };
  var writeAnchorTag = function(wholeMatch, m1, m2, m3, m4, m5, m6, m7) {
    if (m7 == undefined)
      m7 = "";
    var whole_match = m1;
    var link_text = m2;
    var link_id = m3.toLowerCase();
    var url = m4;
    var title = m7;
    if (url == "") {
      if (link_id == "") {
        link_id = link_text.toLowerCase().replace(/ ?\n/g, " ");
      }
      url = "#" + link_id;
      if (g_urls[link_id] != undefined) {
        url = g_urls[link_id];
        if (g_titles[link_id] != undefined) {
          title = g_titles[link_id];
        }
      } else {
        if (whole_match.search(/\(\s*\)$/m) > -1) {
          url = "";
        } else {
          return whole_match;
        }
      }
    }
    url = escapeCharacters(url, "*_");
    var result = "<a href=\"" + url + "\"";
    if (title != "") {
      title = title.replace(/"/g, "&quot;");
      title = escapeCharacters(title, "*_");
      result += " title=\"" + title + "\"";
    }
    result += ">" + link_text + "</a>";
    return result;
  };
  var _DoImages = function(text) {
    text = text.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, writeImageTag);
    text = text.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, writeImageTag);
    return text;
  };
  var writeImageTag = function(wholeMatch, m1, m2, m3, m4, m5, m6, m7) {
    var whole_match = m1;
    var alt_text = m2;
    var link_id = m3.toLowerCase();
    var url = m4;
    var title = m7;
    if (!title)
      title = "";
    if (url == "") {
      if (link_id == "") {
        link_id = alt_text.toLowerCase().replace(/ ?\n/g, " ");
      }
      url = "#" + link_id;
      if (g_urls[link_id] != undefined) {
        url = g_urls[link_id];
        if (g_titles[link_id] != undefined) {
          title = g_titles[link_id];
        }
      } else {
        return whole_match;
      }
    }
    alt_text = alt_text.replace(/"/g, "&quot;");
    url = escapeCharacters(url, "*_");
    var result = "<img src=\"" + url + "\" alt=\"" + alt_text + "\"";
    title = title.replace(/"/g, "&quot;");
    title = escapeCharacters(title, "*_");
    result += " title=\"" + title + "\"";
    result += " />";
    return result;
  };
  var _DoHeaders = function(text) {
    text = text.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm, function(wholeMatch, m1) {
      return hashBlock('<h1 id="' + headerId(m1) + '">' + _RunSpanGamut(m1) + "</h1>");
    });
    text = text.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm, function(matchFound, m1) {
      return hashBlock('<h2 id="' + headerId(m1) + '">' + _RunSpanGamut(m1) + "</h2>");
    });
    text = text.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm, function(wholeMatch, m1, m2) {
      var h_level = m1.length;
      return hashBlock("<h" + h_level + ' id="' + headerId(m2) + '">' + _RunSpanGamut(m2) + "</h" + h_level + ">");
    });
    function headerId(m) {
      return m.replace(/[^\w]/g, '').toLowerCase();
    }
    return text;
  };
  var _ProcessListItems;
  var _DoLists = function(text) {
    text += "~0";
    var whole_list = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
    if (g_list_level) {
      text = text.replace(whole_list, function(wholeMatch, m1, m2) {
        var list = m1;
        var list_type = (m2.search(/[*+-]/g) > -1) ? "ul" : "ol";
        list = list.replace(/\n{2,}/g, "\n\n\n");
        ;
        var result = _ProcessListItems(list);
        result = result.replace(/\s+$/, "");
        result = "<" + list_type + ">" + result + "</" + list_type + ">\n";
        return result;
      });
    } else {
      whole_list = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g;
      text = text.replace(whole_list, function(wholeMatch, m1, m2, m3) {
        var runup = m1;
        var list = m2;
        var list_type = (m3.search(/[*+-]/g) > -1) ? "ul" : "ol";
        var list = list.replace(/\n{2,}/g, "\n\n\n");
        ;
        var result = _ProcessListItems(list);
        result = runup + "<" + list_type + ">\n" + result + "</" + list_type + ">\n";
        return result;
      });
    }
    text = text.replace(/~0/, "");
    return text;
  };
  _ProcessListItems = function(list_str) {
    g_list_level++;
    list_str = list_str.replace(/\n{2,}$/, "\n");
    list_str += "~0";
    list_str = list_str.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm, function(wholeMatch, m1, m2, m3, m4) {
      var item = m4;
      var leading_line = m1;
      var leading_space = m2;
      if (leading_line || (item.search(/\n{2,}/) > -1)) {
        item = _RunBlockGamut(_Outdent(item));
      } else {
        item = _DoLists(_Outdent(item));
        item = item.replace(/\n$/, "");
        item = _RunSpanGamut(item);
      }
      return "<li>" + item + "</li>\n";
    });
    list_str = list_str.replace(/~0/g, "");
    g_list_level--;
    return list_str;
  };
  var _DoCodeBlocks = function(text) {
    text += "~0";
    text = text.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, function(wholeMatch, m1, m2) {
      var codeblock = m1;
      var nextChar = m2;
      codeblock = _EncodeCode(_Outdent(codeblock));
      codeblock = _Detab(codeblock);
      codeblock = codeblock.replace(/^\n+/g, "");
      codeblock = codeblock.replace(/\n+$/g, "");
      codeblock = "<pre><code>" + codeblock + "\n</code></pre>";
      return hashBlock(codeblock) + nextChar;
    });
    text = text.replace(/~0/, "");
    return text;
  };
  var _DoGithubCodeBlocks = function(text) {
    text += "~0";
    text = text.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, function(wholeMatch, m1, m2) {
      var language = m1;
      var codeblock = m2;
      codeblock = _EncodeCode(codeblock);
      codeblock = _Detab(codeblock);
      codeblock = codeblock.replace(/^\n+/g, "");
      codeblock = codeblock.replace(/\n+$/g, "");
      codeblock = "<pre><code" + (language ? " class=\"" + language + '"' : "") + ">" + codeblock + "\n</code></pre>";
      return hashBlock(codeblock);
    });
    text = text.replace(/~0/, "");
    return text;
  };
  var hashBlock = function(text) {
    text = text.replace(/(^\n+|\n+$)/g, "");
    return "\n\n~K" + (g_html_blocks.push(text) - 1) + "K\n\n";
  };
  var _DoCodeSpans = function(text) {
    text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(wholeMatch, m1, m2, m3, m4) {
      var c = m3;
      c = c.replace(/^([ \t]*)/g, "");
      c = c.replace(/[ \t]*$/g, "");
      c = _EncodeCode(c);
      return m1 + "<code>" + c + "</code>";
    });
    return text;
  };
  var _EncodeCode = function(text) {
    text = text.replace(/&/g, "&amp;");
    text = text.replace(/</g, "&lt;");
    text = text.replace(/>/g, "&gt;");
    text = escapeCharacters(text, "\*_{}[]\\", false);
    return text;
  };
  var _DoItalicsAndBold = function(text) {
    text = text.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g, "<strong>$2</strong>");
    text = text.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g, "<em>$2</em>");
    return text;
  };
  var _DoBlockQuotes = function(text) {
    text = text.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm, function(wholeMatch, m1) {
      var bq = m1;
      bq = bq.replace(/^[ \t]*>[ \t]?/gm, "~0");
      bq = bq.replace(/~0/g, "");
      bq = bq.replace(/^[ \t]+$/gm, "");
      bq = _RunBlockGamut(bq);
      bq = bq.replace(/(^|\n)/g, "$1  ");
      bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(wholeMatch, m1) {
        var pre = m1;
        pre = pre.replace(/^  /mg, "~0");
        pre = pre.replace(/~0/g, "");
        return pre;
      });
      return hashBlock("<blockquote>\n" + bq + "\n</blockquote>");
    });
    return text;
  };
  var _FormParagraphs = function(text) {
    text = text.replace(/^\n+/g, "");
    text = text.replace(/\n+$/g, "");
    var grafs = text.split(/\n{2,}/g);
    var grafsOut = [];
    var end = grafs.length;
    for (var i = 0; i < end; i++) {
      var str = grafs[i];
      if (str.search(/~K(\d+)K/g) >= 0) {
        grafsOut.push(str);
      } else if (str.search(/\S/) >= 0) {
        str = _RunSpanGamut(str);
        str = str.replace(/^([ \t]*)/g, "<p>");
        str += "</p>";
        grafsOut.push(str);
      }
    }
    end = grafsOut.length;
    for (var i = 0; i < end; i++) {
      while (grafsOut[i].search(/~K(\d+)K/) >= 0) {
        var blockText = g_html_blocks[RegExp.$1];
        blockText = blockText.replace(/\$/g, "$$$$");
        grafsOut[i] = grafsOut[i].replace(/~K\d+K/, blockText);
      }
    }
    return grafsOut.join("\n\n");
  };
  var _EncodeAmpsAndAngles = function(text) {
    text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;");
    text = text.replace(/<(?![a-z\/?\$!])/gi, "&lt;");
    return text;
  };
  var _EncodeBackslashEscapes = function(text) {
    text = text.replace(/\\(\\)/g, escapeCharacters_callback);
    text = text.replace(/\\([`*_{}\[\]()>#+-.!])/g, escapeCharacters_callback);
    return text;
  };
  var _DoAutoLinks = function(text) {
    text = text.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi, "<a href=\"$1\">$1</a>");
    text = text.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, function(wholeMatch, m1) {
      return _EncodeEmailAddress(_UnescapeSpecialChars(m1));
    });
    return text;
  };
  var _EncodeEmailAddress = function(addr) {
    var encode = [function(ch) {
      return "&#" + ch.charCodeAt(0) + ";";
    }, function(ch) {
      return "&#x" + ch.charCodeAt(0).toString(16) + ";";
    }, function(ch) {
      return ch;
    }];
    addr = "mailto:" + addr;
    addr = addr.replace(/./g, function(ch) {
      if (ch == "@") {
        ch = encode[Math.floor(Math.random() * 2)](ch);
      } else if (ch != ":") {
        var r = Math.random();
        ch = (r > .9 ? encode[2](ch) : r > .45 ? encode[1](ch) : encode[0](ch));
      }
      return ch;
    });
    addr = "<a href=\"" + addr + "\">" + addr + "</a>";
    addr = addr.replace(/">.+:/g, "\">");
    return addr;
  };
  var _UnescapeSpecialChars = function(text) {
    text = text.replace(/~E(\d+)E/g, function(wholeMatch, m1) {
      var charCodeToReplace = parseInt(m1);
      return String.fromCharCode(charCodeToReplace);
    });
    return text;
  };
  var _Outdent = function(text) {
    text = text.replace(/^(\t|[ ]{1,4})/gm, "~0");
    text = text.replace(/~0/g, "");
    return text;
  };
  var _Detab = function(text) {
    text = text.replace(/\t(?=\t)/g, "    ");
    text = text.replace(/\t/g, "~A~B");
    text = text.replace(/~B(.+?)~A/g, function(wholeMatch, m1, m2) {
      var leadingText = m1;
      var numSpaces = 4 - leadingText.length % 4;
      for (var i = 0; i < numSpaces; i++)
        leadingText += " ";
      return leadingText;
    });
    text = text.replace(/~A/g, "    ");
    text = text.replace(/~B/g, "");
    return text;
  };
  var escapeCharacters = function(text, charsToEscape, afterBackslash) {
    var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g, "\\$1") + "])";
    if (afterBackslash) {
      regexString = "\\\\" + regexString;
    }
    var regex = new RegExp(regexString, "g");
    text = text.replace(regex, escapeCharacters_callback);
    return text;
  };
  var escapeCharacters_callback = function(wholeMatch, m1) {
    var charCodeToEscape = m1.charCodeAt(0);
    return "~E" + charCodeToEscape + "E";
  };
};
if (typeof module !== 'undefined')
  module.exports = Showdown;
if (typeof define === 'function' && define.amd) {
  System.register("github:showdownjs/showdown@0.3.4/src/showdown", [], false, function() {
    return Showdown;
  });
}


})();
System.register("plugin-html/generate", ["aurelia-logging", "aurelia-templating", "aurelia-metadata", "aurelia-path"], function(_export) {
  "use strict";
  var LogManager,
      ViewStrategy,
      ViewResources,
      CustomElement,
      AttachedBehavior,
      TemplateController,
      Metadata,
      ResourceType,
      Origin,
      relativeToFile,
      _prototypeProperties,
      _inherits,
      _classCallCheck,
      hasTemplateElement,
      logger,
      InlineViewStrategy;
  _export("default", generate);
  function generate(path, html, deps) {
    var doc = document.createDocumentFragment();
    var div = document.createElement("div");
    div.innerHTML = html;
    while (div.firstChild) {
      doc.appendChild(div.firstChild);
    }
    if (!hasTemplateElement) {
      HTMLTemplateElement.bootstrap(doc);
    }
    var template = doc.querySelector("template");
    if (!template) {
      throw new Error("There was no template element found");
    }
    return new InlineViewStrategy(path, template, deps);
  }
  return {
    setters: [function(_aureliaLogging) {
      LogManager = _aureliaLogging;
    }, function(_aureliaTemplating) {
      ViewStrategy = _aureliaTemplating.ViewStrategy;
      ViewResources = _aureliaTemplating.ViewResources;
      CustomElement = _aureliaTemplating.CustomElement;
      AttachedBehavior = _aureliaTemplating.AttachedBehavior;
      TemplateController = _aureliaTemplating.TemplateController;
    }, function(_aureliaMetadata) {
      Metadata = _aureliaMetadata.Metadata;
      ResourceType = _aureliaMetadata.ResourceType;
      Origin = _aureliaMetadata.Origin;
    }, function(_aureliaPath) {
      relativeToFile = _aureliaPath.relativeToFile;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          subClass.__proto__ = superClass;
      };
      _classCallCheck = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
      hasTemplateElement = "content" in document.createElement("template");
      logger = LogManager.getLogger("systemjs-html-import");
      InlineViewStrategy = (function(ViewStrategy) {
        function InlineViewStrategy(path, template, deps) {
          _classCallCheck(this, InlineViewStrategy);
          this.path = path;
          this.template = template;
          this.deps = deps;
        }
        _inherits(InlineViewStrategy, ViewStrategy);
        _prototypeProperties(InlineViewStrategy, null, {
          loadViewFactory: {
            value: function loadViewFactory(viewEngine, options) {
              var _this = this;
              var existing = viewEngine.importedViews[this.path];
              if (existing) {
                return Promise.resolve(existing);
              }
              return this.loadResources(viewEngine).then(function(resources) {
                var existing = viewEngine.importedViews[_this.path];
                if (existing) {
                  return Promise.resolve(existing);
                }
                var factory = viewEngine.viewCompiler.compile(_this.template, resources, options);
                viewEngine.importedViews[_this.path] = factory;
                return factory;
              });
            },
            writable: true,
            configurable: true
          },
          loadResources: {
            value: function loadResources(_ref) {
              var _this = this;
              var appResources = _ref.appResources;
              var resourceCoordinator = _ref.resourceCoordinator;
              var i,
                  l;
              var registry = new ViewResources(appResources, this.path),
                  dxImportElements = this.template.content.querySelectorAll("import");
              if (dxImportElements.length === 0) {
                return Promise.resolve(registry);
              }
              var importIds = new Array(dxImportElements.length);
              var names = new Array(dxImportElements.length);
              for (i = 0, l = dxImportElements.length; i < l; ++i) {
                var current = dxImportElements[i];
                var src = current.getAttribute("from");
                if (!src) {
                  throw new Error("Import element in " + this.path + " has no \"from\" attribute.");
                }
                importIds[i] = src;
                names[i] = current.getAttribute("as");
                if (current.parentNode) {
                  current.parentNode.removeChild(current);
                }
              }
              importIds = importIds.map(function(x) {
                return relativeToFile(x, _this.path);
              });
              logger.debug("importing resources for " + this.path, importIds);
              return resourceCoordinator.importResourcesFromModuleIds(importIds).then(function(toRegister) {
                for (i = 0, l = toRegister.length; i < l; ++i) {
                  toRegister[i].register(registry, names[i]);
                }
                return registry;
              });
            },
            writable: true,
            configurable: true
          }
        });
        return InlineViewStrategy;
      })(ViewStrategy);
    }
  };
});



System.register("app/css-classes/behaviors/classes", ["aurelia-framework"], function(_export) {
  "use strict";
  var Behavior,
      _slicedToArray,
      _prototypeProperties,
      _classCallCheck,
      hasClass,
      addClass,
      removeClass,
      toggleClass,
      ClassesBehaviour;
  return {
    setters: [function(_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function() {
      _slicedToArray = function(arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          var _arr = [];
          for (var _iterator = arr[Symbol.iterator](),
              _step; !(_step = _iterator.next()).done; ) {
            _arr.push(_step.value);
            if (i && _arr.length === i)
              break;
          }
          return _arr;
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _classCallCheck = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
      if ("classList" in document.createElement("_") && false) {
        hasClass = function(el, n) {
          return el.classList.contains(n);
        };
        addClass = function(el, n) {
          return el.classList.add(n);
        };
        removeClass = function(el, n) {
          return el.classList.remove(n);
        };
        toggleClass = function(el, n) {
          return el.classList.toggle(n);
        };
      } else {
        (function() {
          var getClassList = function(el) {
            return el.className.toString().split(" ");
          };
          var setClassList = function(el, list) {
            return el.className = list.join(" ");
          };
          var process = function(p) {
            return function(el) {
              for (var _len = arguments.length,
                  args = Array(_len > 1 ? _len - 1 : 0),
                  _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              var classes = getClassList(el);
              var result = p.apply(undefined, [classes].concat(args));
              if (Array.isArray(result)) {
                setClassList(el, result);
              } else {
                return result;
              }
            };
          };
          var union = function(arr, itm) {
            if (arr.indexOf(itm) === -1) {
              arr.push(itm);
            }
            return arr;
          };
          var remove = function(arr, itm) {
            var index = arr.indexOf(itm);
            if (index !== -1) {
              arr.splice(index, 1);
            }
            return arr;
          };
          hasClass = process(function(classes, className) {
            return classes.indexOf(className) > -1;
          });
          addClass = process(function(classes, className) {
            return union(classes, className);
          });
          removeClass = process(function(classes, className) {
            return remove(classes, className);
          });
          toggleClass = process(function(classes, className) {
            return classes.indexOf(className) > -1 ? remove(classes, className) : union(classes, className);
          });
        })();
      }
      ClassesBehaviour = _export("ClassesBehaviour", (function() {
        function ClassesBehaviour(element) {
          _classCallCheck(this, ClassesBehaviour);
          this.element = element;
        }
        _prototypeProperties(ClassesBehaviour, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("classes").withProperty("value", "valueChanged", "classes");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {valueChanged: {
            value: function valueChanged(value) {
              var classes = Object.keys(value).map(function(k) {
                return [k, value[k] ? true : false];
              });
              for (var _iterator = classes[Symbol.iterator](),
                  _step; !(_step = _iterator.next()).done; ) {
                var _step$value = _slicedToArray(_step.value, 2);
                var _name = _step$value[0];
                var active = _step$value[1];
                if (active) {
                  addClass(this.element, _name);
                } else {
                  removeClass(this.element, _name);
                }
              }
            },
            writable: true,
            configurable: true
          }});
        return ClassesBehaviour;
      })());
    }
  };
});



System.register("app/redirect", ["aurelia-router"], function(_export) {
  "use strict";
  var Redirect,
      _prototypeProperties,
      _classCallCheck,
      RedirectRoute;
  return {
    setters: [function(_aureliaRouter) {
      Redirect = _aureliaRouter.Redirect;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _classCallCheck = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
      RedirectRoute = _export("RedirectRoute", (function() {
        function RedirectRoute() {
          _classCallCheck(this, RedirectRoute);
        }
        _prototypeProperties(RedirectRoute, null, {canActivate: {
            value: function canActivate(params, _, route) {
              return new Redirect(route.redirect);
            },
            writable: true,
            configurable: true
          }});
        return RedirectRoute;
      })());
    }
  };
});



System.register("app/markdown/behaviors/markdown", ["aurelia-framework", "showdown"], function(_export) {
  "use strict";
  var Behavior,
      Showdown,
      _prototypeProperties,
      _classCallCheck,
      MarkdownBehaviour;
  return {
    setters: [function(_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function(_showdown) {
      Showdown = _showdown["default"];
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _classCallCheck = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
      MarkdownBehaviour = _export("MarkdownBehaviour", (function() {
        function MarkdownBehaviour(element) {
          _classCallCheck(this, MarkdownBehaviour);
          this.element = element;
          this.converter = new Showdown.converter();
        }
        _prototypeProperties(MarkdownBehaviour, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("markdown").withProperty("value", "valueChanged", "markdown");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {valueChanged: {
            value: function valueChanged(value) {
              this.element.innerHTML = this.converter.makeHtml(value.split(/\r\n|\n/g).map(function(l) {
                return l.trim();
              }).join("\n"));
            },
            writable: true,
            configurable: true
          }});
        return MarkdownBehaviour;
      })());
    }
  };
});



System.register("app/css-classes/bundle", ["./behaviors/classes"], function(_export) {
  "use strict";
  return {
    setters: [function(_behaviorsClasses) {}],
    execute: function() {}
  };
});



System.register("app/blog/services/blog", ["aurelia-framework", "moment"], function(_export) {
  "use strict";
  var Metadata,
      moment,
      _prototypeProperties,
      _classCallCheck,
      PAGE_SIZE,
      SIMULATE_LATENCY,
      posts,
      BlogService;
  function unique(arr) {
    var obj = {};
    return arr.filter(function(itm) {
      if (obj.hasOwnProperty(itm))
        return false;
      return obj[itm] = true;
    });
  }
  function paginate(list, page, pageSize) {
    var pages = Math.ceil(list.length - 1 / pageSize);
    if (pages === 0)
      pages = 1;
    if (page > pages)
      throw new Error("There does not exist " + page + " pages");
    var result = list.slice((page - 1) * pageSize, pageSize);
    return {
      posts: result,
      page: page,
      total: pages
    };
  }
  function returnData(fn) {
    if (SIMULATE_LATENCY) {
      return new Promise(function(resolve) {
        return setTimeout(function() {
          return resolve();
        }, 500);
      }).then(function() {
        return new Promise(fn);
      });
    } else {
      return new Promise(fn);
    }
  }
  return {
    setters: [function(_aureliaFramework) {
      Metadata = _aureliaFramework.Metadata;
    }, function(_moment) {
      moment = _moment["default"];
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _classCallCheck = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
      PAGE_SIZE = 5;
      SIMULATE_LATENCY = true;
      posts = [{
        id: 2,
        title: "This is another test post",
        slug: "this-is-another-test-post",
        date: "2015-01-29T22:26:08.549Z",
        tags: ["test", "funky"],
        content: "\nThis post is a lot more funky than the other.\n\nIt has stuff that the other does not.\n\n* See\n* Here\n* Is\n* A\n* List\n\n#### And a heading\n    "
      }, {
        id: 1,
        title: "This is a test post",
        slug: "this-is-a-test-post",
        date: "2015-01-28T22:26:08.549Z",
        tags: ["test"],
        content: "\nSo I write a little *markdown*, and it just **works**!\n    "
      }];
      BlogService = _export("BlogService", (function() {
        function BlogService() {
          _classCallCheck(this, BlogService);
        }
        _prototypeProperties(BlogService, {metadata: {
            value: function metadata() {
              return Metadata.singleton();
            },
            writable: true,
            configurable: true
          }}, {
          getLatest: {
            value: function getLatest() {
              var page = arguments[0] === undefined ? 1 : arguments[0];
              return returnData(function(resolve) {
                resolve(paginate(posts, page, PAGE_SIZE));
              });
            },
            writable: true,
            configurable: true
          },
          getTags: {
            value: function getTags() {
              return returnData(function(resolve) {
                var tags = Array.prototype.concat.apply([], posts.map(function(p) {
                  return p.tags;
                }));
                tags = unique(tags);
                resolve(tags);
              });
            },
            writable: true,
            configurable: true
          },
          getPost: {
            value: function getPost(year, month, date, slug) {
              return returnData(function(resolve) {
                var dateMatch = "" + year + "-" + month + "-" + date;
                var post = posts.filter(function(p) {
                  var date = moment(p.date).format("YYYY-MM-DD");
                  return date === dateMatch && p.slug === slug;
                });
                if (post.length === 0)
                  return resolve(null);
                resolve(post[0]);
              });
            },
            writable: true,
            configurable: true
          },
          getPostsForTag: {
            value: function getPostsForTag(tag) {
              var page = arguments[1] === undefined ? 1 : arguments[1];
              return returnData(function(resolve) {
                var tagPosts = posts.filter(function(p) {
                  return p.tags.indexOf(tag) > -1;
                });
                resolve(paginate(tagPosts, page, PAGE_SIZE));
              });
            },
            writable: true,
            configurable: true
          }
        });
        return BlogService;
      })());
    }
  };
});



System.register("app/blog/routes/index.html!plugin-html/html", ["html/generate"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var generate = require('html/generate')['default'];
  var deps = [];
  module.exports = generate('app/blog/routes/index.html', '<template>\n  <router-view></router-view>\n</template>', deps);
  global.define = __define;
  return module.exports;
});



System.register("app/blog/routes/list.html!plugin-html/html", ["html/generate", "app/markdown/behaviors/markdown", "app/css-classes/behaviors/classes"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var generate = require('html/generate')['default'];
  var deps = [];
  deps[0] = {
    dep: require('app/markdown/behaviors/markdown'),
    path: 'app/markdown/behaviors/markdown'
  };
  deps[1] = {
    dep: require('app/css-classes/behaviors/classes'),
    path: 'app/css-classes/behaviors/classes'
  };
  module.exports = generate('app/blog/routes/list.html', '<template>\n  <import from=\'app/markdown/behaviors/markdown\'></import>\n  <import from="app/css-classes/behaviors/classes"></import>\n\n  <h1 classes.bind="{test: true, prod: false}">Recent posts</h1>\n\n  <article repeat.for="post of posts">\n    <h2><a href.bind="$parent.url(post)">${post.title}</a> <small class="date">${$parent.date(post)}</small></h2>\n    <div class="post-content" markdown.bind="post.content"></div>\n    <div class="tags">\n      Tagged in \n      <span repeat.for="tag of post.tags">\n        <a href.bind="$parent.$parent.tagUrl(tag)">${tag}</a><template if.bind="!$last">, </template>\n      </span>\n    </div>\n  </article>\n</template>', deps);
  global.define = __define;
  return module.exports;
});



System.register("app/blog/routes/post.html!plugin-html/html", ["html/generate", "app/markdown/behaviors/markdown"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var generate = require('html/generate')['default'];
  var deps = [];
  deps[0] = {
    dep: require('app/markdown/behaviors/markdown'),
    path: 'app/markdown/behaviors/markdown'
  };
  module.exports = generate('app/blog/routes/post.html', '<template>\n  <import from=\'app/markdown/behaviors/markdown\'></import>\n\n  <article>\n    <h1><a href.bind="url(post)">${post.title}</a></h1>\n    <div class="post-content" markdown.bind="post.content"></div>\n  </article>\n</template>', deps);
  global.define = __define;
  return module.exports;
});



System.register("app/blog/routes/tag.html!plugin-html/html", ["html/generate", "app/markdown/behaviors/markdown"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var generate = require('html/generate')['default'];
  var deps = [];
  deps[0] = {
    dep: require('app/markdown/behaviors/markdown'),
    path: 'app/markdown/behaviors/markdown'
  };
  module.exports = generate('app/blog/routes/tag.html', '<template>\n  <import from=\'app/markdown/behaviors/markdown\'></import>\n\n  <h1>Tag: ${tag}</h1>\n\n  <article repeat.for="post of posts">\n    <h2><a href.bind="$parent.url(post)">${post.title}</a> <small class="date">${$parent.date(post)}</small></h2>\n    <div class="post-content" markdown.bind="post.content"></div>\n    <div class="tags">\n      Tagged in \n      <span repeat.for="tag of post.tags">\n        <a href.bind="$parent.$parent.tagUrl(tag)">${tag}</a><template if.bind="!$last">, </template>\n      </span>\n    </div>\n  </article>\n</template>', deps);
  global.define = __define;
  return module.exports;
});



System.register("github:aurelia/metadata@0.3.1/system/index", ["./origin", "./resource-type", "./metadata"], function(_export) {
  "use strict";
  return {
    setters: [function(_origin) {
      _export("Origin", _origin.Origin);
    }, function(_resourceType) {
      _export("ResourceType", _resourceType.ResourceType);
    }, function(_metadata) {
      _export("Metadata", _metadata.Metadata);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/loader@0.3.3", ["github:aurelia/loader@0.3.3/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/path@0.4.3", ["github:aurelia/path@0.4.3/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/logging@0.2.2", ["github:aurelia/logging@0.2.2/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/dependency-injection@0.4.2/system/container", ["aurelia-metadata", "./metadata", "./util"], function(_export) {
  "use strict";
  var Metadata,
      Resolver,
      Registration,
      isClass,
      _prototypeProperties,
      emptyParameters,
      Container;
  return {
    setters: [function(_aureliaMetadata) {
      Metadata = _aureliaMetadata.Metadata;
    }, function(_metadata) {
      Resolver = _metadata.Resolver;
      Registration = _metadata.Registration;
    }, function(_util) {
      isClass = _util.isClass;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      emptyParameters = Object.freeze([]);
      Container = _export("Container", (function() {
        function Container(constructionInfo) {
          this.constructionInfo = constructionInfo || new Map();
          this.entries = new Map();
        }
        _prototypeProperties(Container, null, {
          supportAtScript: {
            value: function supportAtScript() {
              this.addParameterInfoLocator(function(fn) {
                var parameters = fn.parameters,
                    keys,
                    i,
                    ii;
                if (parameters) {
                  keys = new Array(parameters.length);
                  for (i = 0, ii = parameters.length; i < ii; ++i) {
                    keys[i] = parameters[i].is || parameters[i][0];
                  }
                }
                return keys;
              });
            },
            writable: true,
            configurable: true
          },
          addParameterInfoLocator: {
            value: function addParameterInfoLocator(locator) {
              if (this.locateParameterInfoElsewhere === undefined) {
                this.locateParameterInfoElsewhere = locator;
                return ;
              }
              var original = this.locateParameterInfoElsewhere;
              this.locateParameterInfoElsewhere = function(fn) {
                return original(fn) || locator(fn);
              };
            },
            writable: true,
            configurable: true
          },
          registerInstance: {
            value: function registerInstance(key, instance) {
              this.registerHandler(key, function(x) {
                return instance;
              });
            },
            writable: true,
            configurable: true
          },
          registerTransient: {
            value: function registerTransient(key, fn) {
              fn = fn || key;
              this.registerHandler(key, function(x) {
                return x.invoke(fn);
              });
            },
            writable: true,
            configurable: true
          },
          registerSingleton: {
            value: function registerSingleton(key, fn) {
              var singleton = null;
              fn = fn || key;
              this.registerHandler(key, function(x) {
                return singleton || (singleton = x.invoke(fn));
              });
            },
            writable: true,
            configurable: true
          },
          autoRegister: {
            value: function autoRegister(fn, key) {
              var registration = Metadata.on(fn).first(Registration, true);
              if (registration) {
                registration.register(this, key || fn, fn);
              } else {
                this.registerSingleton(key || fn, fn);
              }
            },
            writable: true,
            configurable: true
          },
          autoRegisterAll: {
            value: function autoRegisterAll(fns) {
              var i = fns.length;
              while (i--) {
                this.autoRegister(fns[i]);
              }
            },
            writable: true,
            configurable: true
          },
          registerHandler: {
            value: function registerHandler(key, handler) {
              this.getOrCreateEntry(key).push(handler);
            },
            writable: true,
            configurable: true
          },
          get: {
            value: function get(key) {
              var entry;
              if (key instanceof Resolver) {
                return key.get(this);
              }
              if (key === Container) {
                return this;
              }
              entry = this.entries.get(key);
              if (entry !== undefined) {
                return entry[0](this);
              }
              if (this.parent) {
                return this.parent.get(key);
              }
              this.autoRegister(key);
              entry = this.entries.get(key);
              return entry[0](this);
            },
            writable: true,
            configurable: true
          },
          getAll: {
            value: function getAll(key) {
              var _this = this;
              var entry = this.entries.get(key);
              if (entry !== undefined) {
                return entry.map(function(x) {
                  return x(_this);
                });
              }
              if (this.parent) {
                return this.parent.getAll(key);
              }
              return [];
            },
            writable: true,
            configurable: true
          },
          hasHandler: {
            value: function hasHandler(key) {
              var checkParent = arguments[1] === undefined ? false : arguments[1];
              return this.entries.has(key) || checkParent && this.parent && this.parent.hasHandler(key, checkParent);
            },
            writable: true,
            configurable: true
          },
          createChild: {
            value: function createChild() {
              var childContainer = new Container(this.constructionInfo);
              childContainer.parent = this;
              childContainer.locateParameterInfoElsewhere = this.locateParameterInfoElsewhere;
              return childContainer;
            },
            writable: true,
            configurable: true
          },
          invoke: {
            value: function invoke(fn) {
              var info = this.getOrCreateConstructionInfo(fn),
                  keys = info.keys,
                  args = new Array(keys.length),
                  context,
                  i,
                  ii;
              for (i = 0, ii = keys.length; i < ii; ++i) {
                args[i] = this.get(keys[i]);
              }
              if (info.isClass) {
                context = Object.create(fn.prototype);
                if ("initialize" in fn) {
                  fn.initialize(context);
                }
                return fn.apply(context, args) || context;
              } else {
                return fn.apply(undefined, args);
              }
            },
            writable: true,
            configurable: true
          },
          getOrCreateEntry: {
            value: function getOrCreateEntry(key) {
              var entry = this.entries.get(key);
              if (entry === undefined) {
                entry = [];
                this.entries.set(key, entry);
              }
              return entry;
            },
            writable: true,
            configurable: true
          },
          getOrCreateConstructionInfo: {
            value: function getOrCreateConstructionInfo(fn) {
              var info = this.constructionInfo.get(fn);
              if (info === undefined) {
                info = this.createConstructionInfo(fn);
                this.constructionInfo.set(fn, info);
              }
              return info;
            },
            writable: true,
            configurable: true
          },
          createConstructionInfo: {
            value: function createConstructionInfo(fn) {
              var info = {isClass: isClass(fn)};
              if (fn.inject !== undefined) {
                if (typeof fn.inject === "function") {
                  info.keys = fn.inject();
                } else {
                  info.keys = fn.inject;
                }
                return info;
              }
              if (this.locateParameterInfoElsewhere !== undefined) {
                info.keys = this.locateParameterInfoElsewhere(fn) || emptyParameters;
              } else {
                info.keys = emptyParameters;
              }
              return info;
            },
            writable: true,
            configurable: true
          }
        });
        return Container;
      })());
    }
  };
});



System.register("github:aurelia/task-queue@0.2.3", ["github:aurelia/task-queue@0.2.3/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/binding@0.3.4/system/array-observation", ["./array-change-records"], function(_export) {
  "use strict";
  var calcSplices,
      projectArraySplices,
      _prototypeProperties,
      arrayProto,
      hasArrayObserve,
      ModifyArrayObserver,
      ArrayObserveObserver,
      ArrayLengthObserver;
  _export("getArrayObserver", getArrayObserver);
  function getArrayObserver(taskQueue, array) {
    if (hasArrayObserve) {
      return new ArrayObserveObserver(array);
    } else {
      return ModifyArrayObserver.create(taskQueue, array);
    }
  }
  return {
    setters: [function(_arrayChangeRecords) {
      calcSplices = _arrayChangeRecords.calcSplices;
      projectArraySplices = _arrayChangeRecords.projectArraySplices;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      arrayProto = Array.prototype;
      hasArrayObserve = (function detectArrayObserve() {
        if (typeof Array.observe !== "function") {
          return false;
        }
        var records = [];
        function callback(recs) {
          records = recs;
        }
        var arr = [];
        Array.observe(arr, callback);
        arr.push(1, 2);
        arr.length = 0;
        Object.deliverChangeRecords(callback);
        if (records.length !== 2)
          return false;
        if (records[0].type != "splice" || records[1].type != "splice") {
          return false;
        }
        Array.unobserve(arr, callback);
        return true;
      })();
      ModifyArrayObserver = (function() {
        function ModifyArrayObserver(taskQueue, array) {
          this.taskQueue = taskQueue;
          this.callbacks = [];
          this.changeRecords = [];
          this.queued = false;
          this.array = array;
          this.oldArray = null;
        }
        _prototypeProperties(ModifyArrayObserver, {create: {
            value: function create(taskQueue, array) {
              var observer = new ModifyArrayObserver(taskQueue, array);
              array.pop = function() {
                var methodCallResult = arrayProto.pop.apply(array, arguments);
                observer.addChangeRecord({
                  type: "delete",
                  object: array,
                  name: array.length,
                  oldValue: methodCallResult
                });
                return methodCallResult;
              };
              array.push = function() {
                var methodCallResult = arrayProto.push.apply(array, arguments);
                observer.addChangeRecord({
                  type: "splice",
                  object: array,
                  index: array.length - arguments.length,
                  removed: [],
                  addedCount: arguments.length
                });
                return methodCallResult;
              };
              array.reverse = function() {
                var oldArray = array.slice();
                var methodCallResult = arrayProto.reverse.apply(array, arguments);
                observer.reset(oldArray);
                return methodCallResult;
              };
              array.shift = function() {
                var methodCallResult = arrayProto.shift.apply(array, arguments);
                observer.addChangeRecord({
                  type: "delete",
                  object: array,
                  name: 0,
                  oldValue: methodCallResult
                });
                return methodCallResult;
              };
              array.sort = function() {
                var oldArray = array.slice();
                var methodCallResult = arrayProto.sort.apply(array, arguments);
                observer.reset(oldArray);
                return methodCallResult;
              };
              array.splice = function() {
                var methodCallResult = arrayProto.splice.apply(array, arguments);
                observer.addChangeRecord({
                  type: "splice",
                  object: array,
                  index: arguments[0],
                  removed: methodCallResult,
                  addedCount: arguments.length > 2 ? arguments.length - 2 : 0
                });
                return methodCallResult;
              };
              array.unshift = function() {
                var methodCallResult = arrayProto.unshift.apply(array, arguments);
                observer.addChangeRecord({
                  type: "splice",
                  object: array,
                  index: 0,
                  removed: [],
                  addedCount: arguments.length
                });
                return methodCallResult;
              };
              return observer;
            },
            writable: true,
            configurable: true
          }}, {
          subscribe: {
            value: function subscribe(callback) {
              var callbacks = this.callbacks;
              callbacks.push(callback);
              return function() {
                callbacks.splice(callbacks.indexOf(callback), 1);
              };
            },
            writable: true,
            configurable: true
          },
          addChangeRecord: {
            value: function addChangeRecord(changeRecord) {
              if (!this.callbacks.length) {
                return ;
              }
              this.changeRecords.push(changeRecord);
              if (!this.queued) {
                this.queued = true;
                this.taskQueue.queueMicroTask(this);
              }
            },
            writable: true,
            configurable: true
          },
          reset: {
            value: function reset(oldArray) {
              if (!this.callbacks.length) {
                return ;
              }
              this.oldArray = oldArray;
              if (!this.queued) {
                this.queued = true;
                this.taskQueue.queueMicroTask(this);
              }
            },
            writable: true,
            configurable: true
          },
          getObserver: {
            value: function getObserver(propertyName) {
              if (propertyName == "length") {
                return this.lengthObserver || (this.lengthObserver = new ArrayLengthObserver(this.array));
              } else {
                throw new Error("You cannot observe the " + propertyName + " property of an array.");
              }
            },
            writable: true,
            configurable: true
          },
          call: {
            value: function call() {
              var callbacks = this.callbacks,
                  i = callbacks.length,
                  changeRecords = this.changeRecords,
                  oldArray = this.oldArray,
                  splices;
              this.queued = false;
              this.changeRecords = [];
              this.oldArray = null;
              if (i) {
                if (oldArray) {
                  splices = calcSplices(this.array, 0, this.array.length, oldArray, 0, oldArray.length);
                } else {
                  splices = projectArraySplices(this.array, changeRecords);
                }
                while (i--) {
                  callbacks[i](splices);
                }
              }
              if (this.lengthObserver) {
                this.lengthObserver(this.array.length);
              }
            },
            writable: true,
            configurable: true
          }
        });
        return ModifyArrayObserver;
      })();
      ArrayObserveObserver = (function() {
        function ArrayObserveObserver(array) {
          this.array = array;
          this.callbacks = [];
          this.observing = false;
        }
        _prototypeProperties(ArrayObserveObserver, null, {
          subscribe: {
            value: function subscribe(callback) {
              var _this = this;
              var callbacks = this.callbacks;
              callbacks.push(callback);
              if (!this.observing) {
                this.observing = true;
                Array.observe(this.array, function(changes) {
                  return _this.handleChanges(changes);
                });
              }
              return function() {
                callbacks.splice(callbacks.indexOf(callback), 1);
              };
            },
            writable: true,
            configurable: true
          },
          getObserver: {
            value: function getObserver(propertyName) {
              if (propertyName == "length") {
                return this.lengthObserver || (this.lengthObserver = new ArrayLengthObserver(this.array));
              } else {
                throw new Error("You cannot observe the " + propertyName + " property of an array.");
              }
            },
            writable: true,
            configurable: true
          },
          handleChanges: {
            value: function handleChanges(changeRecords) {
              var callbacks = this.callbacks,
                  i = callbacks.length,
                  splices;
              if (!i) {
                return ;
              }
              var splices = projectArraySplices(this.array, changeRecords);
              while (i--) {
                callbacks[i](splices);
              }
              if (this.lengthObserver) {
                this.lengthObserver.call(this.array.length);
              }
            },
            writable: true,
            configurable: true
          }
        });
        return ArrayObserveObserver;
      })();
      ArrayLengthObserver = (function() {
        function ArrayLengthObserver(array) {
          this.array = array;
          this.callbacks = [];
          this.currentValue = array.length;
        }
        _prototypeProperties(ArrayLengthObserver, null, {
          getValue: {
            value: function getValue() {
              return this.array.length;
            },
            writable: true,
            configurable: true
          },
          setValue: {
            value: function setValue(newValue) {
              this.array.length = newValue;
            },
            writable: true,
            configurable: true
          },
          subscribe: {
            value: function subscribe(callback) {
              var callbacks = this.callbacks;
              callbacks.push(callback);
              return function() {
                callbacks.splice(callbacks.indexOf(callback), 1);
              };
            },
            writable: true,
            configurable: true
          },
          call: {
            value: function call(newValue) {
              var callbacks = this.callbacks,
                  i = callbacks.length,
                  oldValue = this.currentValue;
              while (i--) {
                callbacks[i](newValue, oldValue);
              }
              this.currentValue = newValue;
            },
            writable: true,
            configurable: true
          }
        });
        return ArrayLengthObserver;
      })();
    }
  };
});



System.register("github:aurelia/binding@0.3.4/system/ast", ["./path-observer", "./composite-observer"], function(_export) {
  "use strict";
  var PathObserver,
      CompositeObserver,
      _get,
      _inherits,
      _prototypeProperties,
      Expression,
      Chain,
      ValueConverter,
      Assign,
      Conditional,
      AccessScope,
      AccessMember,
      AccessKeyed,
      CallScope,
      CallMember,
      CallFunction,
      Binary,
      PrefixNot,
      LiteralPrimitive,
      LiteralString,
      LiteralArray,
      LiteralObject,
      Unparser,
      evalListCache;
  function evalList(scope, list, valueConverters) {
    var length = list.length,
        cacheLength,
        i;
    for (cacheLength = evalListCache.length; cacheLength <= length; ++cacheLength) {
      _evalListCache.push([]);
    }
    var result = evalListCache[length];
    for (i = 0; i < length; ++i) {
      result[i] = list[i].evaluate(scope, valueConverters);
    }
    return result;
  }
  function autoConvertAdd(a, b) {
    if (a != null && b != null) {
      if (typeof a == "string" && typeof b != "string") {
        return a + b.toString();
      }
      if (typeof a != "string" && typeof b == "string") {
        return a.toString() + b;
      }
      return a + b;
    }
    if (a != null) {
      return a;
    }
    if (b != null) {
      return b;
    }
    return 0;
  }
  function ensureFunctionFromMap(obj, name) {
    var func = obj[name];
    if (typeof func === "function") {
      return func;
    }
    if (func === null) {
      throw new Error("Undefined function " + name);
    } else {
      throw new Error("" + name + " is not a function");
    }
  }
  function getKeyed(obj, key) {
    if (Array.isArray(obj)) {
      return obj[parseInt(key)];
    } else if (obj) {
      return obj[key];
    } else if (obj === null) {
      throw new Error("Accessing null object");
    } else {
      return obj[key];
    }
  }
  function setKeyed(obj, key, value) {
    if (Array.isArray(obj)) {
      var index = parseInt(key);
      if (obj.length <= index) {
        obj.length = index + 1;
      }
      obj[index] = value;
    } else {
      obj[key] = value;
    }
    return value;
  }
  return {
    setters: [function(_pathObserver) {
      PathObserver = _pathObserver.PathObserver;
    }, function(_compositeObserver) {
      CompositeObserver = _compositeObserver.CompositeObserver;
    }],
    execute: function() {
      _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);
          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;
          if (getter === undefined) {
            return undefined;
          }
          return getter.call(receiver);
        }
      };
      _inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          subClass.__proto__ = superClass;
      };
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      Expression = _export("Expression", (function() {
        function Expression() {
          this.isChain = false;
          this.isAssignable = false;
        }
        _prototypeProperties(Expression, null, {
          evaluate: {
            value: function evaluate() {
              throw new Error("Cannot evaluate " + this);
            },
            writable: true,
            configurable: true
          },
          assign: {
            value: function assign() {
              throw new Error("Cannot assign to " + this);
            },
            writable: true,
            configurable: true
          },
          toString: {
            value: function toString() {
              return Unparser.unparse(this);
            },
            writable: true,
            configurable: true
          }
        });
        return Expression;
      })());
      Chain = _export("Chain", (function(Expression) {
        function Chain(expressions) {
          _get(Object.getPrototypeOf(Chain.prototype), "constructor", this).call(this);
          this.expressions = expressions;
          this.isChain = true;
        }
        _inherits(Chain, Expression);
        _prototypeProperties(Chain, null, {
          evaluate: {
            value: function evaluate(scope, valueConverters) {
              var result,
                  expressions = this.expressions,
                  length = expressions.length,
                  i,
                  last;
              for (i = 0; i < length; ++i) {
                last = expressions[i].evaluate(scope, valueConverters);
                if (last !== null) {
                  result = last;
                }
              }
              return result;
            },
            writable: true,
            configurable: true
          },
          accept: {
            value: function accept(visitor) {
              visitor.visitChain(this);
            },
            writable: true,
            configurable: true
          }
        });
        return Chain;
      })(Expression));
      ValueConverter = _export("ValueConverter", (function(Expression) {
        function ValueConverter(expression, name, args, allArgs) {
          _get(Object.getPrototypeOf(ValueConverter.prototype), "constructor", this).call(this);
          this.expression = expression;
          this.name = name;
          this.args = args;
          this.allArgs = allArgs;
        }
        _inherits(ValueConverter, Expression);
        _prototypeProperties(ValueConverter, null, {
          evaluate: {
            value: function evaluate(scope, valueConverters) {
              var converter = valueConverters(this.name);
              if (!converter) {
                throw new Error("No ValueConverter named \"" + this.name + "\" was found!");
              }
              if ("toView" in converter) {
                return converter.toView.apply(converter, evalList(scope, this.allArgs, valueConverters));
              }
              return this.allArgs[0].evaluate(scope, valueConverters);
            },
            writable: true,
            configurable: true
          },
          assign: {
            value: function assign(scope, value, valueConverters) {
              var converter = valueConverters(this.name);
              if (!converter) {
                throw new Error("No ValueConverter named \"" + this.name + "\" was found!");
              }
              if ("fromView" in converter) {
                value = converter.fromView.apply(converter, [value].concat(evalList(scope, this.args, valueConverters)));
              }
              return this.allArgs[0].assign(scope, value, valueConverters);
            },
            writable: true,
            configurable: true
          },
          accept: {
            value: function accept(visitor) {
              visitor.visitValueConverter(this);
            },
            writable: true,
            configurable: true
          },
          connect: {
            value: function connect(binding, scope) {
              var _this = this;
              var observer,
                  childObservers = [],
                  i,
                  ii,
                  exp,
                  expInfo;
              for (i = 0, ii = this.allArgs.length; i < ii; ++i) {
                exp = this.allArgs[i];
                expInfo = exp.connect(binding, scope);
                if (expInfo.observer) {
                  childObservers.push(expInfo.observer);
                }
              }
              if (childObservers.length) {
                observer = new CompositeObserver(childObservers, function() {
                  return _this.evaluate(scope, binding.valueConverterLookupFunction);
                });
              }
              return {
                value: this.evaluate(scope, binding.valueConverterLookupFunction),
                observer: observer
              };
            },
            writable: true,
            configurable: true
          }
        });
        return ValueConverter;
      })(Expression));
      Assign = _export("Assign", (function(Expression) {
        function Assign(target, value) {
          _get(Object.getPrototypeOf(Assign.prototype), "constructor", this).call(this);
          this.target = target;
          this.value = value;
        }
        _inherits(Assign, Expression);
        _prototypeProperties(Assign, null, {
          evaluate: {
            value: function evaluate(scope, valueConverters) {
              return this.target.assign(scope, this.value.evaluate(scope, valueConverters));
            },
            writable: true,
            configurable: true
          },
          accept: {
            value: function accept(vistor) {
              vistor.visitAssign(this);
            },
            writable: true,
            configurable: true
          },
          connect: {
            value: function connect(binding, scope) {
              return {value: this.evaluate(scope, binding.valueConverterLookupFunction)};
            },
            writable: true,
            configurable: true
          }
        });
        return Assign;
      })(Expression));
      Conditional = _export("Conditional", (function(Expression) {
        function Conditional(condition, yes, no) {
          _get(Object.getPrototypeOf(Conditional.prototype), "constructor", this).call(this);
          this.condition = condition;
          this.yes = yes;
          this.no = no;
        }
        _inherits(Conditional, Expression);
        _prototypeProperties(Conditional, null, {
          evaluate: {
            value: function evaluate(scope, valueConverters) {
              return !!this.condition.evaluate(scope) ? this.yes.evaluate(scope) : this.no.evaluate(scope);
            },
            writable: true,
            configurable: true
          },
          accept: {
            value: function accept(visitor) {
              visitor.visitConditional(this);
            },
            writable: true,
            configurable: true
          },
          connect: {
            value: function connect(binding, scope) {
              var _this = this;
              var conditionInfo = this.condition.connect(binding, scope),
                  yesInfo = this.yes.connect(binding, scope),
                  noInfo = this.no.connect(binding, scope),
                  childObservers = [],
                  observer;
              if (conditionInfo.observer) {
                childObservers.push(conditionInfo.observer);
              }
              if (yesInfo.observer) {
                childObservers.push(yesInfo.observer);
              }
              if (noInfo.observer) {
                childObservers.push(noInfo.observer);
              }
              if (childObservers.length) {
                observer = new CompositeObserver(childObservers, function() {
                  return _this.evaluate(scope, binding.valueConverterLookupFunction);
                });
              }
              return {
                value: !!conditionInfo.value ? yesInfo.value : noInfo.value,
                observer: observer
              };
            },
            writable: true,
            configurable: true
          }
        });
        return Conditional;
      })(Expression));
      AccessScope = _export("AccessScope", (function(Expression) {
        function AccessScope(name) {
          _get(Object.getPrototypeOf(AccessScope.prototype), "constructor", this).call(this);
          this.name = name;
          this.isAssignable = true;
        }
        _inherits(AccessScope, Expression);
        _prototypeProperties(AccessScope, null, {
          evaluate: {
            value: function evaluate(scope, valueConverters) {
              return scope[this.name];
            },
            writable: true,
            configurable: true
          },
          assign: {
            value: function assign(scope, value) {
              return scope[this.name] = value;
            },
            writable: true,
            configurable: true
          },
          accept: {
            value: function accept(visitor) {
              visitor.visitAccessScope(this);
            },
            writable: true,
            configurable: true
          },
          connect: {
            value: function connect(binding, scope) {
              var observer = binding.getObserver(scope, this.name);
              return {
                value: observer.getValue(),
                observer: observer
              };
            },
            writable: true,
            configurable: true
          }
        });
        return AccessScope;
      })(Expression));
      AccessMember = _export("AccessMember", (function(Expression) {
        function AccessMember(object, name) {
          _get(Object.getPrototypeOf(AccessMember.prototype), "constructor", this).call(this);
          this.object = object;
          this.name = name;
          this.isAssignable = true;
        }
        _inherits(AccessMember, Expression);
        _prototypeProperties(AccessMember, null, {
          evaluate: {
            value: function evaluate(scope, valueConverters) {
              var instance = this.object.evaluate(scope, valueConverters);
              return instance === null || instance === undefined ? instance : instance[this.name];
            },
            writable: true,
            configurable: true
          },
          assign: {
            value: function assign(scope, value) {
              var instance = this.object.evaluate(scope);
              if (instance === null || instance === undefined) {
                instance = {};
                this.object.assign(scope, instance);
              }
              return instance[this.name] = value;
            },
            writable: true,
            configurable: true
          },
          accept: {
            value: function accept(visitor) {
              visitor.visitAccessMember(this);
            },
            writable: true,
            configurable: true
          },
          connect: {
            value: function connect(binding, scope) {
              var _this = this;
              var info = this.object.connect(binding, scope),
                  objectInstance = info.value,
                  objectObserver = info.observer,
                  observer;
              if (objectObserver) {
                observer = new PathObserver(objectObserver, function(value) {
                  if (value == null || value == undefined) {
                    return value;
                  }
                  return binding.getObserver(value, _this.name);
                }, objectInstance);
              } else {
                observer = binding.getObserver(objectInstance, this.name);
              }
              return {
                value: objectInstance == null ? null : objectInstance[this.name],
                observer: observer
              };
            },
            writable: true,
            configurable: true
          }
        });
        return AccessMember;
      })(Expression));
      AccessKeyed = _export("AccessKeyed", (function(Expression) {
        function AccessKeyed(object, key) {
          _get(Object.getPrototypeOf(AccessKeyed.prototype), "constructor", this).call(this);
          this.object = object;
          this.key = key;
          this.isAssignable = true;
        }
        _inherits(AccessKeyed, Expression);
        _prototypeProperties(AccessKeyed, null, {
          evaluate: {
            value: function evaluate(scope, valueConverters) {
              var instance = this.object.evaluate(scope, valueConverters);
              var lookup = this.key.evaluate(scope, valueConverters);
              return getKeyed(instance, lookup);
            },
            writable: true,
            configurable: true
          },
          assign: {
            value: function assign(scope, value) {
              var instance = this.object.evaluate(scope);
              var lookup = this.key.evaluate(scope);
              return setKeyed(instance, lookup, value);
            },
            writable: true,
            configurable: true
          },
          accept: {
            value: function accept(visitor) {
              visitor.visitAccessKeyed(this);
            },
            writable: true,
            configurable: true
          },
          connect: {
            value: function connect(binding, scope) {
              var _this = this;
              var objectInfo = this.object.connect(binding, scope),
                  keyInfo = this.key.connect(binding, scope),
                  childObservers = [],
                  observer;
              if (objectInfo.observer) {
                childObservers.push(objectInfo.observer);
              }
              if (keyInfo.observer) {
                childObservers.push(keyInfo.observer);
              }
              if (childObservers.length) {
                observer = new CompositeObserver(childObservers, function() {
                  return _this.evaluate(scope, binding.valueConverterLookupFunction);
                });
              }
              return {
                value: this.evaluate(scope, binding.valueConverterLookupFunction),
                observer: observer
              };
            },
            writable: true,
            configurable: true
          }
        });
        return AccessKeyed;
      })(Expression));
      CallScope = _export("CallScope", (function(Expression) {
        function CallScope(name, args) {
          _get(Object.getPrototypeOf(CallScope.prototype), "constructor", this).call(this);
          this.name = name;
          this.args = args;
        }
        _inherits(CallScope, Expression);
        _prototypeProperties(CallScope, null, {
          evaluate: {
            value: function evaluate(scope, valueConverters, args) {
              args = args || evalList(scope, this.args, valueConverters);
              return ensureFunctionFromMap(scope, this.name).apply(scope, args);
            },
            writable: true,
            configurable: true
          },
          accept: {
            value: function accept(visitor) {
              visitor.visitCallScope(this);
            },
            writable: true,
            configurable: true
          },
          connect: {
            value: function connect(binding, scope) {
              var _this = this;
              var observer,
                  childObservers = [],
                  i,
                  ii,
                  exp,
                  expInfo;
              for (i = 0, ii = this.args.length; i < ii; ++i) {
                exp = this.args[i];
                expInfo = exp.connect(binding, scope);
                if (expInfo.observer) {
                  childObservers.push(expInfo.observer);
                }
              }
              if (childObservers.length) {
                observer = new CompositeObserver(childObservers, function() {
                  return _this.evaluate(scope, binding.valueConverterLookupFunction);
                });
              }
              return {
                value: this.evaluate(scope, binding.valueConverterLookupFunction),
                observer: observer
              };
            },
            writable: true,
            configurable: true
          }
        });
        return CallScope;
      })(Expression));
      CallMember = _export("CallMember", (function(Expression) {
        function CallMember(object, name, args) {
          _get(Object.getPrototypeOf(CallMember.prototype), "constructor", this).call(this);
          this.object = object;
          this.name = name;
          this.args = args;
        }
        _inherits(CallMember, Expression);
        _prototypeProperties(CallMember, null, {
          evaluate: {
            value: function evaluate(scope, valueConverters, args) {
              var instance = this.object.evaluate(scope, valueConverters);
              args = args || evalList(scope, this.args, valueConverters);
              return ensureFunctionFromMap(instance, this.name).apply(instance, args);
            },
            writable: true,
            configurable: true
          },
          accept: {
            value: function accept(visitor) {
              visitor.visitCallMember(this);
            },
            writable: true,
            configurable: true
          },
          connect: {
            value: function connect(binding, scope) {
              var _this = this;
              var observer,
                  objectInfo = this.object.connect(binding, scope),
                  childObservers = [],
                  i,
                  ii,
                  exp,
                  expInfo;
              if (objectInfo.observer) {
                childObservers.push(objectInfo.observer);
              }
              for (i = 0, ii = this.args.length; i < ii; ++i) {
                exp = this.args[i];
                expInfo = exp.connect(binding, scope);
                if (expInfo.observer) {
                  childObservers.push(expInfo.observer);
                }
              }
              if (childObservers.length) {
                observer = new CompositeObserver(childObservers, function() {
                  return _this.evaluate(scope, binding.valueConverterLookupFunction);
                });
              }
              return {
                value: this.evaluate(scope, binding.valueConverterLookupFunction),
                observer: observer
              };
            },
            writable: true,
            configurable: true
          }
        });
        return CallMember;
      })(Expression));
      CallFunction = _export("CallFunction", (function(Expression) {
        function CallFunction(func, args) {
          _get(Object.getPrototypeOf(CallFunction.prototype), "constructor", this).call(this);
          this.func = func;
          this.args = args;
        }
        _inherits(CallFunction, Expression);
        _prototypeProperties(CallFunction, null, {
          evaluate: {
            value: function evaluate(scope, valueConverters, args) {
              var func = this.func.evaluate(scope, valueConverters);
              if (typeof func !== "function") {
                throw new Error("" + this.func + " is not a function");
              } else {
                return func.apply(null, args || evalList(scope, this.args, valueConverters));
              }
            },
            writable: true,
            configurable: true
          },
          accept: {
            value: function accept(visitor) {
              visitor.visitCallFunction(this);
            },
            writable: true,
            configurable: true
          },
          connect: {
            value: function connect(binding, scope) {
              var _this = this;
              var observer,
                  funcInfo = this.func.connect(binding, scope),
                  childObservers = [],
                  i,
                  ii,
                  exp,
                  expInfo;
              if (funcInfo.observer) {
                childObservers.push(funcInfo.observer);
              }
              for (i = 0, ii = this.args.length; i < ii; ++i) {
                exp = this.args[i];
                expInfo = exp.connect(binding, scope);
                if (expInfo.observer) {
                  childObservers.push(expInfo.observer);
                }
              }
              if (childObservers.length) {
                observer = new CompositeObserver(childObservers, function() {
                  return _this.evaluate(scope, binding.valueConverterLookupFunction);
                });
              }
              return {
                value: this.evaluate(scope, binding.valueConverterLookupFunction),
                observer: observer
              };
            },
            writable: true,
            configurable: true
          }
        });
        return CallFunction;
      })(Expression));
      Binary = _export("Binary", (function(Expression) {
        function Binary(operation, left, right) {
          _get(Object.getPrototypeOf(Binary.prototype), "constructor", this).call(this);
          this.operation = operation;
          this.left = left;
          this.right = right;
        }
        _inherits(Binary, Expression);
        _prototypeProperties(Binary, null, {
          evaluate: {
            value: function evaluate(scope, valueConverters) {
              var left = this.left.evaluate(scope);
              switch (this.operation) {
                case "&&":
                  return !!left && !!this.right.evaluate(scope);
                case "||":
                  return !!left || !!this.right.evaluate(scope);
              }
              var right = this.right.evaluate(scope);
              switch (this.operation) {
                case "==":
                  return left == right;
                case "===":
                  return left === right;
                case "!=":
                  return left != right;
                case "!==":
                  return left !== right;
              }
              if (left === null || right === null) {
                switch (this.operation) {
                  case "+":
                    if (left != null)
                      return left;
                    if (right != null)
                      return right;
                    return 0;
                  case "-":
                    if (left != null)
                      return left;
                    if (right != null)
                      return 0 - right;
                    return 0;
                }
                return null;
              }
              switch (this.operation) {
                case "+":
                  return autoConvertAdd(left, right);
                case "-":
                  return left - right;
                case "*":
                  return left * right;
                case "/":
                  return left / right;
                case "%":
                  return left % right;
                case "<":
                  return left < right;
                case ">":
                  return left > right;
                case "<=":
                  return left <= right;
                case ">=":
                  return left >= right;
                case "^":
                  return left ^ right;
                case "&":
                  return left & right;
              }
              throw new Error("Internal error [" + this.operation + "] not handled");
            },
            writable: true,
            configurable: true
          },
          accept: {
            value: function accept(visitor) {
              visitor.visitBinary(this);
            },
            writable: true,
            configurable: true
          },
          connect: {
            value: function connect(binding, scope) {
              var _this = this;
              var leftInfo = this.left.connect(binding, scope),
                  rightInfo = this.right.connect(binding, scope),
                  childObservers = [],
                  observer;
              if (leftInfo.observer) {
                childObservers.push(leftInfo.observer);
              }
              if (rightInfo.observer) {
                childObservers.push(rightInfo.observer);
              }
              if (childObservers.length) {
                observer = new CompositeObserver(childObservers, function() {
                  return _this.evaluate(scope, binding.valueConverterLookupFunction);
                });
              }
              return {
                value: this.evaluate(scope, binding.valueConverterLookupFunction),
                observer: observer
              };
            },
            writable: true,
            configurable: true
          }
        });
        return Binary;
      })(Expression));
      PrefixNot = _export("PrefixNot", (function(Expression) {
        function PrefixNot(operation, expression) {
          _get(Object.getPrototypeOf(PrefixNot.prototype), "constructor", this).call(this);
          this.operation = operation;
          this.expression = expression;
        }
        _inherits(PrefixNot, Expression);
        _prototypeProperties(PrefixNot, null, {
          evaluate: {
            value: function evaluate(scope, valueConverters) {
              return !this.expression.evaluate(scope);
            },
            writable: true,
            configurable: true
          },
          accept: {
            value: function accept(visitor) {
              visitor.visitPrefix(this);
            },
            writable: true,
            configurable: true
          },
          connect: {
            value: function connect(binding, scope) {
              var _this = this;
              var info = this.expression.connect(binding, scope),
                  observer;
              if (info.observer) {
                observer = new CompositeObserver([info.observer], function() {
                  return _this.evaluate(scope, binding.valueConverterLookupFunction);
                });
              }
              return {
                value: !info.value,
                observer: observer
              };
            },
            writable: true,
            configurable: true
          }
        });
        return PrefixNot;
      })(Expression));
      LiteralPrimitive = _export("LiteralPrimitive", (function(Expression) {
        function LiteralPrimitive(value) {
          _get(Object.getPrototypeOf(LiteralPrimitive.prototype), "constructor", this).call(this);
          this.value = value;
        }
        _inherits(LiteralPrimitive, Expression);
        _prototypeProperties(LiteralPrimitive, null, {
          evaluate: {
            value: function evaluate(scope, valueConverters) {
              return this.value;
            },
            writable: true,
            configurable: true
          },
          accept: {
            value: function accept(visitor) {
              visitor.visitLiteralPrimitive(this);
            },
            writable: true,
            configurable: true
          },
          connect: {
            value: function connect(binding, scope) {
              return {value: this.value};
            },
            writable: true,
            configurable: true
          }
        });
        return LiteralPrimitive;
      })(Expression));
      LiteralString = _export("LiteralString", (function(Expression) {
        function LiteralString(value) {
          _get(Object.getPrototypeOf(LiteralString.prototype), "constructor", this).call(this);
          this.value = value;
        }
        _inherits(LiteralString, Expression);
        _prototypeProperties(LiteralString, null, {
          evaluate: {
            value: function evaluate(scope, valueConverters) {
              return this.value;
            },
            writable: true,
            configurable: true
          },
          accept: {
            value: function accept(visitor) {
              visitor.visitLiteralString(this);
            },
            writable: true,
            configurable: true
          },
          connect: {
            value: function connect(binding, scope) {
              return {value: this.value};
            },
            writable: true,
            configurable: true
          }
        });
        return LiteralString;
      })(Expression));
      LiteralArray = _export("LiteralArray", (function(Expression) {
        function LiteralArray(elements) {
          _get(Object.getPrototypeOf(LiteralArray.prototype), "constructor", this).call(this);
          this.elements = elements;
        }
        _inherits(LiteralArray, Expression);
        _prototypeProperties(LiteralArray, null, {
          evaluate: {
            value: function evaluate(scope, valueConverters) {
              var elements = this.elements,
                  length = elements.length,
                  result = [],
                  i;
              for (i = 0; i < length; ++i) {
                result[i] = elements[i].evaluate(scope, valueConverters);
              }
              return result;
            },
            writable: true,
            configurable: true
          },
          accept: {
            value: function accept(visitor) {
              visitor.visitLiteralArray(this);
            },
            writable: true,
            configurable: true
          },
          connect: {
            value: function connect(binding, scope) {
              var _this = this;
              var observer,
                  childObservers = [],
                  results = [],
                  i,
                  ii,
                  exp,
                  expInfo;
              for (i = 0, ii = this.elements.length; i < ii; ++i) {
                exp = this.elements[i];
                expInfo = exp.connect(binding, scope);
                if (expInfo.observer) {
                  childObservers.push(expInfo.observer);
                }
                results[i] = expInfo.value;
              }
              if (childObservers.length) {
                observer = new CompositeObserver(childObservers, function() {
                  return _this.evaluate(scope, binding.valueConverterLookupFunction);
                });
              }
              return {
                value: results,
                observer: observer
              };
            },
            writable: true,
            configurable: true
          }
        });
        return LiteralArray;
      })(Expression));
      LiteralObject = _export("LiteralObject", (function(Expression) {
        function LiteralObject(keys, values) {
          _get(Object.getPrototypeOf(LiteralObject.prototype), "constructor", this).call(this);
          this.keys = keys;
          this.values = values;
        }
        _inherits(LiteralObject, Expression);
        _prototypeProperties(LiteralObject, null, {
          evaluate: {
            value: function evaluate(scope, valueConverters) {
              var instance = {},
                  keys = this.keys,
                  values = this.values,
                  length = keys.length,
                  i;
              for (i = 0; i < length; ++i) {
                instance[keys[i]] = values[i].evaluate(scope, valueConverters);
              }
              return instance;
            },
            writable: true,
            configurable: true
          },
          accept: {
            value: function accept(visitor) {
              visitor.visitLiteralObject(this);
            },
            writable: true,
            configurable: true
          },
          connect: {
            value: function connect(binding, scope) {
              var _this = this;
              var observer,
                  childObservers = [],
                  instance = {},
                  keys = this.keys,
                  values = this.values,
                  length = keys.length,
                  i,
                  valueInfo;
              for (i = 0; i < length; ++i) {
                valueInfo = values[i].connect(binding, scope);
                if (valueInfo.observer) {
                  childObservers.push(valueInfo.observer);
                }
                instance[keys[i]] = valueInfo.value;
              }
              if (childObservers.length) {
                observer = new CompositeObserver(childObservers, function() {
                  return _this.evaluate(scope, binding.valueConverterLookupFunction);
                });
              }
              return {
                value: instance,
                observer: observer
              };
            },
            writable: true,
            configurable: true
          }
        });
        return LiteralObject;
      })(Expression));
      Unparser = _export("Unparser", (function() {
        function Unparser(buffer) {
          this.buffer = buffer;
        }
        _prototypeProperties(Unparser, {unparse: {
            value: function unparse(expression) {
              var buffer = [],
                  visitor = new Unparser(buffer);
              expression.accept(visitor);
              return buffer.join("");
            },
            writable: true,
            configurable: true
          }}, {
          write: {
            value: function write(text) {
              this.buffer.push(text);
            },
            writable: true,
            configurable: true
          },
          writeArgs: {
            value: function writeArgs(args) {
              var i,
                  length;
              this.write("(");
              for (i = 0, length = args.length; i < length; ++i) {
                if (i !== 0) {
                  this.write(",");
                }
                args[i].accept(this);
              }
              this.write(")");
            },
            writable: true,
            configurable: true
          },
          visitChain: {
            value: function visitChain(chain) {
              var expressions = chain.expressions,
                  length = expressions.length,
                  i;
              for (i = 0; i < length; ++i) {
                if (i !== 0) {
                  this.write(";");
                }
                expressions[i].accept(this);
              }
            },
            writable: true,
            configurable: true
          },
          visitValueConverter: {
            value: function visitValueConverter(converter) {
              var args = converter.args,
                  length = args.length,
                  i;
              this.write("(");
              converter.expression.accept(this);
              this.write("|" + converter.name);
              for (i = 0; i < length; ++i) {
                this.write(" :");
                args[i].accept(this);
              }
              this.write(")");
            },
            writable: true,
            configurable: true
          },
          visitAssign: {
            value: function visitAssign(assign) {
              assign.target.accept(this);
              this.write("=");
              assign.value.accept(this);
            },
            writable: true,
            configurable: true
          },
          visitConditional: {
            value: function visitConditional(conditional) {
              conditional.condition.accept(this);
              this.write("?");
              conditional.yes.accept(this);
              this.write(":");
              conditional.no.accept(this);
            },
            writable: true,
            configurable: true
          },
          visitAccessScope: {
            value: function visitAccessScope(access) {
              this.write(access.name);
            },
            writable: true,
            configurable: true
          },
          visitAccessMember: {
            value: function visitAccessMember(access) {
              access.object.accept(this);
              this.write("." + access.name);
            },
            writable: true,
            configurable: true
          },
          visitAccessKeyed: {
            value: function visitAccessKeyed(access) {
              access.object.accept(this);
              this.write("[");
              access.key.accept(this);
              this.write("]");
            },
            writable: true,
            configurable: true
          },
          visitCallScope: {
            value: function visitCallScope(call) {
              this.write(call.name);
              this.writeArgs(call.args);
            },
            writable: true,
            configurable: true
          },
          visitCallFunction: {
            value: function visitCallFunction(call) {
              call.func.accept(this);
              this.writeArgs(call.args);
            },
            writable: true,
            configurable: true
          },
          visitCallMember: {
            value: function visitCallMember(call) {
              call.object.accept(this);
              this.write("." + call.name);
              this.writeArgs(call.args);
            },
            writable: true,
            configurable: true
          },
          visitPrefix: {
            value: function visitPrefix(prefix) {
              this.write("(" + prefix.operation);
              prefix.expression.accept(this);
              this.write(")");
            },
            writable: true,
            configurable: true
          },
          visitBinary: {
            value: function visitBinary(binary) {
              this.write("(");
              binary.left.accept(this);
              this.write(binary.operation);
              binary.right.accept(this);
              this.write(")");
            },
            writable: true,
            configurable: true
          },
          visitLiteralPrimitive: {
            value: function visitLiteralPrimitive(literal) {
              this.write("" + literal.value);
            },
            writable: true,
            configurable: true
          },
          visitLiteralArray: {
            value: function visitLiteralArray(literal) {
              var elements = literal.elements,
                  length = elements.length,
                  i;
              this.write("[");
              for (i = 0; i < length; ++i) {
                if (i !== 0) {
                  this.write(",");
                }
                elements[i].accept(this);
              }
              this.write("]");
            },
            writable: true,
            configurable: true
          },
          visitLiteralObject: {
            value: function visitLiteralObject(literal) {
              var keys = literal.keys,
                  values = literal.values,
                  length = keys.length,
                  i;
              this.write("{");
              for (i = 0; i < length; ++i) {
                if (i !== 0) {
                  this.write(",");
                }
                this.write("'" + keys[i] + "':");
                values[i].accept(this);
              }
              this.write("}");
            },
            writable: true,
            configurable: true
          },
          visitLiteralString: {
            value: function visitLiteralString(literal) {
              var escaped = literal.value.replace(/'/g, "'");
              this.write("'" + escaped + "'");
            },
            writable: true,
            configurable: true
          }
        });
        return Unparser;
      })());
      evalListCache = [[], [0], [0, 0], [0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0]];
    }
  };
});



System.register("github:aurelia/templating@0.8.11/system/behaviors", ["aurelia-metadata", "aurelia-task-queue", "aurelia-binding", "./children", "./property", "./util"], function(_export) {
  "use strict";
  var Metadata,
      TaskQueue,
      ObserverLocator,
      ChildObserver,
      BehaviorProperty,
      hyphenate;
  _export("configureBehavior", configureBehavior);
  function configureBehavior(container, behavior, target, valuePropertyName) {
    var proto = target.prototype,
        taskQueue = container.get(TaskQueue),
        meta = Metadata.on(target),
        observerLocator = container.get(ObserverLocator),
        i,
        ii,
        properties;
    if (!behavior.name) {
      behavior.name = hyphenate(target.name);
    }
    behavior.target = target;
    behavior.observerLocator = observerLocator;
    behavior.handlesCreated = "created" in proto;
    behavior.handlesBind = "bind" in proto;
    behavior.handlesUnbind = "unbind" in proto;
    behavior.handlesAttached = "attached" in proto;
    behavior.handlesDetached = "detached" in proto;
    behavior.apiName = behavior.name.replace(/-([a-z])/g, function(m, w) {
      return w.toUpperCase();
    });
    properties = meta.all(BehaviorProperty);
    for (i = 0, ii = properties.length; i < ii; ++i) {
      properties[i].define(taskQueue, behavior);
    }
    properties = behavior.properties;
    if (properties.length === 0 && "valueChanged" in target.prototype) {
      new BehaviorProperty("value", "valueChanged", valuePropertyName || behavior.name).define(taskQueue, behavior);
    }
    if (properties.length !== 0) {
      target.initialize = function(executionContext) {
        var observerLookup = observerLocator.getObserversLookup(executionContext),
            i,
            ii,
            observer;
        for (i = 0, ii = properties.length; i < ii; ++i) {
          observer = properties[i].createObserver(executionContext);
          if (observer !== undefined) {
            observerLookup[observer.propertyName] = observer;
          }
        }
      };
    }
    behavior.childExpression = meta.first(ChildObserver);
  }
  return {
    setters: [function(_aureliaMetadata) {
      Metadata = _aureliaMetadata.Metadata;
    }, function(_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }, function(_aureliaBinding) {
      ObserverLocator = _aureliaBinding.ObserverLocator;
    }, function(_children) {
      ChildObserver = _children.ChildObserver;
    }, function(_property) {
      BehaviorProperty = _property.BehaviorProperty;
    }, function(_util) {
      hyphenate = _util.hyphenate;
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/templating@0.8.11/system/view-factory", ["aurelia-dependency-injection", "./view", "./view-slot", "./content-selector", "./resource-registry"], function(_export) {
  "use strict";
  var Container,
      View,
      ViewSlot,
      ContentSelector,
      ViewResources,
      _prototypeProperties,
      BoundViewFactory,
      defaultFactoryOptions,
      ViewFactory;
  function elementContainerGet(key) {
    if (key === Element) {
      return this.element;
    }
    if (key === BoundViewFactory) {
      return this.boundViewFactory || (this.boundViewFactory = new BoundViewFactory(this, this.instruction.viewFactory, this.executionContext));
    }
    if (key === ViewSlot) {
      if (this.viewSlot === undefined) {
        this.viewSlot = new ViewSlot(this.element, this.instruction.anchorIsContainer, this.executionContext);
        this.children.push(this.viewSlot);
      }
      return this.viewSlot;
    }
    if (key === ViewResources) {
      return this.viewResources;
    }
    return this.superGet(key);
  }
  function createElementContainer(parent, element, instruction, executionContext, children, resources) {
    var container = parent.createChild(),
        providers,
        i;
    container.element = element;
    container.instruction = instruction;
    container.executionContext = executionContext;
    container.children = children;
    container.viewResources = resources;
    providers = instruction.providers;
    i = providers.length;
    while (i--) {
      container.registerSingleton(providers[i]);
    }
    container.superGet = container.get;
    container.get = elementContainerGet;
    return container;
  }
  function applyInstructions(containers, executionContext, element, instruction, behaviors, bindings, children, contentSelectors, resources) {
    var behaviorInstructions = instruction.behaviorInstructions,
        expressions = instruction.expressions,
        elementContainer,
        i,
        ii,
        current,
        instance;
    if (instruction.contentExpression) {
      bindings.push(instruction.contentExpression.createBinding(element.nextSibling));
      element.parentNode.removeChild(element);
      return ;
    }
    if (instruction.contentSelector) {
      contentSelectors.push(new ContentSelector(element, instruction.selector));
      return ;
    }
    if (behaviorInstructions.length) {
      containers[instruction.injectorId] = elementContainer = createElementContainer(containers[instruction.parentInjectorId], element, instruction, executionContext, children, resources);
      for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
        current = behaviorInstructions[i];
        instance = current.type.create(elementContainer, current, element, bindings);
        if (instance.contentView) {
          children.push(instance.contentView);
        }
        behaviors.push(instance);
      }
    }
    for (i = 0, ii = expressions.length; i < ii; ++i) {
      bindings.push(expressions[i].createBinding(element));
    }
  }
  return {
    setters: [function(_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
    }, function(_view) {
      View = _view.View;
    }, function(_viewSlot) {
      ViewSlot = _viewSlot.ViewSlot;
    }, function(_contentSelector) {
      ContentSelector = _contentSelector.ContentSelector;
    }, function(_resourceRegistry) {
      ViewResources = _resourceRegistry.ViewResources;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      BoundViewFactory = _export("BoundViewFactory", (function() {
        function BoundViewFactory(parentContainer, viewFactory, executionContext) {
          this.parentContainer = parentContainer;
          this.viewFactory = viewFactory;
          this.executionContext = executionContext;
          this.factoryOptions = {behaviorInstance: false};
        }
        _prototypeProperties(BoundViewFactory, null, {create: {
            value: function create(executionContext) {
              var childContainer = this.parentContainer.createChild(),
                  context = executionContext || this.executionContext;
              this.factoryOptions.systemControlled = !executionContext;
              return this.viewFactory.create(childContainer, context, this.factoryOptions);
            },
            writable: true,
            configurable: true
          }});
        return BoundViewFactory;
      })());
      defaultFactoryOptions = {
        systemControlled: false,
        suppressBind: false
      };
      ViewFactory = _export("ViewFactory", (function() {
        function ViewFactory(template, instructions, resources) {
          this.template = template;
          this.instructions = instructions;
          this.resources = resources;
        }
        _prototypeProperties(ViewFactory, null, {create: {
            value: function create(container, executionContext) {
              var options = arguments[2] === undefined ? defaultFactoryOptions : arguments[2];
              var fragment = this.template.cloneNode(true),
                  instructables = fragment.querySelectorAll(".au-target"),
                  instructions = this.instructions,
                  resources = this.resources,
                  behaviors = [],
                  bindings = [],
                  children = [],
                  contentSelectors = [],
                  containers = {root: container},
                  i,
                  ii,
                  view;
              for (i = 0, ii = instructables.length; i < ii; ++i) {
                applyInstructions(containers, executionContext, instructables[i], instructions[i], behaviors, bindings, children, contentSelectors, resources);
              }
              view = new View(fragment, behaviors, bindings, children, options.systemControlled, contentSelectors);
              view.created(executionContext);
              if (!options.suppressBind) {
                view.bind(executionContext);
              }
              return view;
            },
            writable: true,
            configurable: true
          }});
        return ViewFactory;
      })());
    }
  };
});



System.register("github:aurelia/logging-console@0.2.2", ["github:aurelia/logging-console@0.2.2/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/templating-binding@0.8.4/system/binding-language", ["aurelia-templating", "aurelia-binding", "./syntax-interpreter"], function(_export) {
  "use strict";
  var BindingLanguage,
      Parser,
      ObserverLocator,
      BindingExpression,
      NameExpression,
      ONE_WAY,
      SyntaxInterpreter,
      _prototypeProperties,
      _inherits,
      info,
      TemplatingBindingLanguage,
      InterpolationBindingExpression,
      InterpolationBinding;
  return {
    setters: [function(_aureliaTemplating) {
      BindingLanguage = _aureliaTemplating.BindingLanguage;
    }, function(_aureliaBinding) {
      Parser = _aureliaBinding.Parser;
      ObserverLocator = _aureliaBinding.ObserverLocator;
      BindingExpression = _aureliaBinding.BindingExpression;
      NameExpression = _aureliaBinding.NameExpression;
      ONE_WAY = _aureliaBinding.ONE_WAY;
    }, function(_syntaxInterpreter) {
      SyntaxInterpreter = _syntaxInterpreter.SyntaxInterpreter;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          subClass.__proto__ = superClass;
      };
      info = {};
      TemplatingBindingLanguage = (function(BindingLanguage) {
        function TemplatingBindingLanguage(parser, observerLocator, syntaxInterpreter) {
          this.parser = parser;
          this.observerLocator = observerLocator;
          this.syntaxInterpreter = syntaxInterpreter;
          this.interpolationRegex = /\${(.*?)}/g;
          syntaxInterpreter.language = this;
          this.attributeMap = syntaxInterpreter.attributeMap = {
            "class": "className",
            "for": "htmlFor"
          };
        }
        _inherits(TemplatingBindingLanguage, BindingLanguage);
        _prototypeProperties(TemplatingBindingLanguage, {inject: {
            value: function inject() {
              return [Parser, ObserverLocator, SyntaxInterpreter];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }}, {
          inspectAttribute: {
            value: function inspectAttribute(resources, attrName, attrValue) {
              var parts = attrName.split(".");
              info.defaultBindingMode = null;
              if (parts.length == 2) {
                info.attrName = parts[0].trim();
                info.attrValue = attrValue;
                info.command = parts[1].trim();
                info.expression = null;
              } else if (attrName == "ref") {
                info.attrName = attrName;
                info.attrValue = attrValue;
                info.command = null;
                info.expression = new NameExpression(attrValue, "element");
              } else {
                info.attrName = attrName;
                info.attrValue = attrValue;
                info.command = null;
                info.expression = this.parseContent(resources, attrName, attrValue);
              }
              return info;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          createAttributeInstruction: {
            value: function createAttributeInstruction(resources, element, info, existingInstruction) {
              var instruction;
              if (info.expression) {
                if (info.attrName === "ref") {
                  return info.expression;
                }
                instruction = existingInstruction || {
                  attrName: info.attrName,
                  attributes: {}
                };
                instruction.attributes[info.attrName] = info.expression;
              } else if (info.command) {
                instruction = this.syntaxInterpreter.interpret(resources, element, info, existingInstruction);
              }
              return instruction;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          parseText: {
            value: function parseText(resources, value) {
              return this.parseContent(resources, "textContent", value);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          parseContent: {
            value: function parseContent(resources, attrName, attrValue) {
              var parts = attrValue.split(this.interpolationRegex),
                  i,
                  ii;
              if (parts.length <= 1) {
                return null;
              }
              for (i = 0, ii = parts.length; i < ii; ++i) {
                if (i % 2 === 0) {} else {
                  parts[i] = this.parser.parse(parts[i]);
                }
              }
              return new InterpolationBindingExpression(this.observerLocator, this.attributeMap[attrName] || attrName, parts, ONE_WAY, resources.valueConverterLookupFunction, attrName);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return TemplatingBindingLanguage;
      })(BindingLanguage);
      _export("TemplatingBindingLanguage", TemplatingBindingLanguage);
      InterpolationBindingExpression = (function() {
        function InterpolationBindingExpression(observerLocator, targetProperty, parts, mode, valueConverterLookupFunction, attribute) {
          this.observerLocator = observerLocator;
          this.targetProperty = targetProperty;
          this.parts = parts;
          this.mode = mode;
          this.valueConverterLookupFunction = valueConverterLookupFunction;
          this.attribute = attribute;
          this.discrete = false;
        }
        _prototypeProperties(InterpolationBindingExpression, null, {createBinding: {
            value: function createBinding(target) {
              return new InterpolationBinding(this.observerLocator, this.parts, target, this.targetProperty, this.mode, this.valueConverterLookupFunction);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }});
        return InterpolationBindingExpression;
      })();
      _export("InterpolationBindingExpression", InterpolationBindingExpression);
      InterpolationBinding = (function() {
        function InterpolationBinding(observerLocator, parts, target, targetProperty, mode, valueConverterLookupFunction) {
          this.observerLocator = observerLocator;
          this.parts = parts;
          this.targetProperty = observerLocator.getObserver(target, targetProperty);
          this.mode = mode;
          this.valueConverterLookupFunction = valueConverterLookupFunction;
          this.toDispose = [];
        }
        _prototypeProperties(InterpolationBinding, null, {
          getObserver: {
            value: function getObserver(obj, propertyName) {
              return this.observerLocator.getObserver(obj, propertyName);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          bind: {
            value: function bind(source) {
              this.source = source;
              if (this.mode == ONE_WAY) {
                this.unbind();
                this.connect();
                this.setValue();
              } else {
                this.setValue();
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          setValue: {
            value: function setValue() {
              var value = this.interpolate();
              this.targetProperty.setValue(value);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          connect: {
            value: function connect() {
              var _this = this;
              var info,
                  parts = this.parts,
                  source = this.source,
                  toDispose = this.toDispose = [],
                  i,
                  ii;
              for (i = 0, ii = parts.length; i < ii; ++i) {
                if (i % 2 === 0) {} else {
                  info = parts[i].connect(this, source);
                  if (info.observer) {
                    toDispose.push(info.observer.subscribe(function(newValue) {
                      _this.setValue();
                    }));
                  }
                }
              }
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          interpolate: {
            value: function interpolate() {
              var value = "",
                  parts = this.parts,
                  source = this.source,
                  valueConverterLookupFunction = this.valueConverterLookupFunction,
                  i,
                  ii,
                  temp;
              for (i = 0, ii = parts.length; i < ii; ++i) {
                if (i % 2 === 0) {
                  value += parts[i];
                } else {
                  temp = parts[i].evaluate(source, valueConverterLookupFunction);
                  value += typeof temp !== "undefined" && temp !== null ? temp.toString() : "";
                }
              }
              return value;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          unbind: {
            value: function unbind() {
              var i,
                  ii,
                  toDispose = this.toDispose;
              if (toDispose) {
                for (i = 0, ii = toDispose.length; i < ii; ++i) {
                  toDispose[i]();
                }
              }
              this.toDispose = null;
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return InterpolationBinding;
      })();
    }
  };
});



System.register("github:aurelia/route-recognizer@0.2.2/system/index", ["./dsl"], function(_export) {
  "use strict";
  var map,
      specials,
      escapeRegex,
      oCreate,
      RouteRecognizer;
  function isArray(test) {
    return Object.prototype.toString.call(test) === "[object Array]";
  }
  function StaticSegment(string) {
    this.string = string;
  }
  function DynamicSegment(name) {
    this.name = name;
  }
  function StarSegment(name) {
    this.name = name;
  }
  function EpsilonSegment() {}
  function parse(route, names, types) {
    if (route.charAt(0) === "/") {
      route = route.substr(1);
    }
    var segments = route.split("/"),
        results = [];
    for (var i = 0,
        l = segments.length; i < l; i++) {
      var segment = segments[i],
          match;
      if (match = segment.match(/^:([^\/]+)$/)) {
        results.push(new DynamicSegment(match[1]));
        names.push(match[1]);
        types.dynamics++;
      } else if (match = segment.match(/^\*([^\/]+)$/)) {
        results.push(new StarSegment(match[1]));
        names.push(match[1]);
        types.stars++;
      } else if (segment === "") {
        results.push(new EpsilonSegment());
      } else {
        results.push(new StaticSegment(segment));
        types.statics++;
      }
    }
    return results;
  }
  function State(charSpec) {
    this.charSpec = charSpec;
    this.nextStates = [];
  }
  function sortSolutions(states) {
    return states.sort(function(a, b) {
      if (a.types.stars !== b.types.stars) {
        return a.types.stars - b.types.stars;
      }
      if (a.types.stars) {
        if (a.types.statics !== b.types.statics) {
          return b.types.statics - a.types.statics;
        }
        if (a.types.dynamics !== b.types.dynamics) {
          return b.types.dynamics - a.types.dynamics;
        }
      }
      if (a.types.dynamics !== b.types.dynamics) {
        return a.types.dynamics - b.types.dynamics;
      }
      if (a.types.statics !== b.types.statics) {
        return b.types.statics - a.types.statics;
      }
      return 0;
    });
  }
  function recognizeChar(states, ch) {
    var nextStates = [];
    for (var i = 0,
        l = states.length; i < l; i++) {
      var state = states[i];
      nextStates = nextStates.concat(state.match(ch));
    }
    return nextStates;
  }
  function RecognizeResults(queryParams) {
    this.queryParams = queryParams || {};
  }
  function findHandler(state, path, queryParams) {
    var handlers = state.handlers,
        regex = state.regex;
    var captures = path.match(regex),
        currentCapture = 1;
    var result = new RecognizeResults(queryParams);
    for (var i = 0,
        l = handlers.length; i < l; i++) {
      var handler = handlers[i],
          names = handler.names,
          params = {};
      for (var j = 0,
          m = names.length; j < m; j++) {
        params[names[j]] = captures[currentCapture++];
      }
      result.push({
        handler: handler.handler,
        params: params,
        isDynamic: !!names.length
      });
    }
    return result;
  }
  function addSegment(currentState, segment) {
    segment.eachChar(function(ch) {
      var state;
      currentState = currentState.put(ch);
    });
    return currentState;
  }
  return {
    setters: [function(_dsl) {
      map = _dsl.map;
    }],
    execute: function() {
      specials = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"];
      escapeRegex = new RegExp("(\\" + specials.join("|\\") + ")", "g");
      StaticSegment.prototype = {
        eachChar: function(callback) {
          var string = this.string,
              ch;
          for (var i = 0,
              l = string.length; i < l; i++) {
            ch = string.charAt(i);
            callback({validChars: ch});
          }
        },
        regex: function() {
          return this.string.replace(escapeRegex, "\\$1");
        },
        generate: function() {
          return this.string;
        }
      };
      DynamicSegment.prototype = {
        eachChar: function(callback) {
          callback({
            invalidChars: "/",
            repeat: true
          });
        },
        regex: function() {
          return "([^/]+)";
        },
        generate: function(params) {
          return params[this.name];
        }
      };
      StarSegment.prototype = {
        eachChar: function(callback) {
          callback({
            invalidChars: "",
            repeat: true
          });
        },
        regex: function() {
          return "(.+)";
        },
        generate: function(params) {
          return params[this.name];
        }
      };
      EpsilonSegment.prototype = {
        eachChar: function() {},
        regex: function() {
          return "";
        },
        generate: function() {
          return "";
        }
      };
      State.prototype = {
        get: function(charSpec) {
          var nextStates = this.nextStates;
          for (var i = 0,
              l = nextStates.length; i < l; i++) {
            var child = nextStates[i];
            var isEqual = child.charSpec.validChars === charSpec.validChars;
            isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;
            if (isEqual) {
              return child;
            }
          }
        },
        put: function(charSpec) {
          var state;
          if (state = this.get(charSpec)) {
            return state;
          }
          state = new State(charSpec);
          this.nextStates.push(state);
          if (charSpec.repeat) {
            state.nextStates.push(state);
          }
          return state;
        },
        match: function(ch) {
          var nextStates = this.nextStates,
              child,
              charSpec,
              chars;
          var returned = [];
          for (var i = 0,
              l = nextStates.length; i < l; i++) {
            child = nextStates[i];
            charSpec = child.charSpec;
            if (typeof(chars = charSpec.validChars) !== "undefined") {
              if (chars.indexOf(ch) !== -1) {
                returned.push(child);
              }
            } else if (typeof(chars = charSpec.invalidChars) !== "undefined") {
              if (chars.indexOf(ch) === -1) {
                returned.push(child);
              }
            }
          }
          return returned;
        }
      };
      oCreate = Object.create || function(proto) {
        var F = function() {};
        F.prototype = proto;
        return new F();
      };
      RecognizeResults.prototype = oCreate({
        splice: Array.prototype.splice,
        slice: Array.prototype.slice,
        push: Array.prototype.push,
        length: 0,
        queryParams: null
      });
      RouteRecognizer = _export("RouteRecognizer", function() {
        this.rootState = new State();
        this.names = {};
      });
      RouteRecognizer.prototype = {
        add: function(routes, options) {
          var currentState = this.rootState,
              regex = "^",
              types = {
                statics: 0,
                dynamics: 0,
                stars: 0
              },
              handlers = [],
              allSegments = [],
              name;
          var isEmpty = true;
          for (var i = 0,
              l = routes.length; i < l; i++) {
            var route = routes[i],
                names = [];
            var segments = parse(route.path, names, types);
            allSegments = allSegments.concat(segments);
            for (var j = 0,
                m = segments.length; j < m; j++) {
              var segment = segments[j];
              if (segment instanceof EpsilonSegment) {
                continue;
              }
              isEmpty = false;
              currentState = currentState.put({validChars: "/"});
              regex += "/";
              currentState = addSegment(currentState, segment);
              regex += segment.regex();
            }
            var handler = {
              handler: route.handler,
              names: names
            };
            handlers.push(handler);
          }
          if (isEmpty) {
            currentState = currentState.put({validChars: "/"});
            regex += "/";
          }
          currentState.handlers = handlers;
          currentState.regex = new RegExp(regex + "$");
          currentState.types = types;
          if (name = options && options.as) {
            this.names[name] = {
              segments: allSegments,
              handlers: handlers
            };
          }
        },
        handlersFor: function(name) {
          var route = this.names[name],
              result = [];
          if (!route) {
            throw new Error("There is no route named " + name);
          }
          for (var i = 0,
              l = route.handlers.length; i < l; i++) {
            result.push(route.handlers[i]);
          }
          return result;
        },
        hasRoute: function(name) {
          return !!this.names[name];
        },
        generate: function(name, params) {
          var route = this.names[name],
              output = "";
          if (!route) {
            throw new Error("There is no route named " + name);
          }
          var segments = route.segments;
          for (var i = 0,
              l = segments.length; i < l; i++) {
            var segment = segments[i];
            if (segment instanceof EpsilonSegment) {
              continue;
            }
            output += "/";
            output += segment.generate(params);
          }
          if (output.charAt(0) !== "/") {
            output = "/" + output;
          }
          if (params && params.queryParams) {
            output += this.generateQueryString(params.queryParams, route.handlers);
          }
          return output;
        },
        generateQueryString: function(params, handlers) {
          var pairs = [];
          var keys = [];
          for (var key in params) {
            if (params.hasOwnProperty(key)) {
              keys.push(key);
            }
          }
          keys.sort();
          for (var i = 0,
              len = keys.length; i < len; i++) {
            key = keys[i];
            var value = params[key];
            if (value === null) {
              continue;
            }
            var pair = encodeURIComponent(key);
            if (isArray(value)) {
              for (var j = 0,
                  l = value.length; j < l; j++) {
                var arrayPair = key + "[]" + "=" + encodeURIComponent(value[j]);
                pairs.push(arrayPair);
              }
            } else {
              pair += "=" + encodeURIComponent(value);
              pairs.push(pair);
            }
          }
          if (pairs.length === 0) {
            return "";
          }
          return "?" + pairs.join("&");
        },
        parseQueryString: function(queryString) {
          var pairs = queryString.split("&"),
              queryParams = {};
          for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split("="),
                key = decodeURIComponent(pair[0]),
                keyLength = key.length,
                isArray = false,
                value;
            if (pair.length === 1) {
              value = "true";
            } else {
              if (keyLength > 2 && key.slice(keyLength - 2) === "[]") {
                isArray = true;
                key = key.slice(0, keyLength - 2);
                if (!queryParams[key]) {
                  queryParams[key] = [];
                }
              }
              value = pair[1] ? decodeURIComponent(pair[1]) : "";
            }
            if (isArray) {
              queryParams[key].push(value);
            } else {
              queryParams[key] = value;
            }
          }
          return queryParams;
        },
        recognize: function(path) {
          var states = [this.rootState],
              pathLen,
              i,
              l,
              queryStart,
              queryParams = {},
              isSlashDropped = false;
          queryStart = path.indexOf("?");
          if (queryStart !== -1) {
            var queryString = path.substr(queryStart + 1, path.length);
            path = path.substr(0, queryStart);
            queryParams = this.parseQueryString(queryString);
          }
          path = decodeURI(path);
          if (path.charAt(0) !== "/") {
            path = "/" + path;
          }
          pathLen = path.length;
          if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
            path = path.substr(0, pathLen - 1);
            isSlashDropped = true;
          }
          for (i = 0, l = path.length; i < l; i++) {
            states = recognizeChar(states, path.charAt(i));
            if (!states.length) {
              break;
            }
          }
          var solutions = [];
          for (i = 0, l = states.length; i < l; i++) {
            if (states[i].handlers) {
              solutions.push(states[i]);
            }
          }
          states = sortSolutions(solutions);
          var state = solutions[0];
          if (state && state.handlers) {
            if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
              path = path + "/";
            }
            return findHandler(state, path, queryParams);
          }
        }
      };
      RouteRecognizer.prototype.map = map;
    }
  };
});



System.register("github:aurelia/router@0.5.5/system/navigation-context", ["./navigation-plan"], function(_export) {
  "use strict";
  var REPLACE,
      _prototypeProperties,
      NavigationContext,
      CommitChangesStep;
  return {
    setters: [function(_navigationPlan) {
      REPLACE = _navigationPlan.REPLACE;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      NavigationContext = _export("NavigationContext", (function() {
        function NavigationContext(router, nextInstruction) {
          this.router = router;
          this.nextInstruction = nextInstruction;
          this.currentInstruction = router.currentInstruction;
          this.prevInstruction = router.currentInstruction;
        }
        _prototypeProperties(NavigationContext, null, {
          commitChanges: {
            value: function commitChanges(waitToSwap) {
              var next = this.nextInstruction,
                  prev = this.prevInstruction,
                  viewPortInstructions = next.viewPortInstructions,
                  router = this.router,
                  loads = [],
                  delaySwaps = [];
              router.currentInstruction = next;
              if (prev) {
                prev.config.navModel.isActive = false;
              }
              next.config.navModel.isActive = true;
              router.refreshBaseUrl();
              router.refreshNavigation();
              for (var viewPortName in viewPortInstructions) {
                var viewPortInstruction = viewPortInstructions[viewPortName];
                var viewPort = router.viewPorts[viewPortName];
                if (!viewPort) {
                  throw new Error("There was no router-view found in the view for " + viewPortInstruction.moduleId + ".");
                }
                if (viewPortInstruction.strategy === REPLACE) {
                  if (waitToSwap) {
                    delaySwaps.push({
                      viewPort: viewPort,
                      viewPortInstruction: viewPortInstruction
                    });
                  }
                  loads.push(viewPort.process(viewPortInstruction, waitToSwap).then(function(x) {
                    if ("childNavigationContext" in viewPortInstruction) {
                      return viewPortInstruction.childNavigationContext.commitChanges();
                    }
                  }));
                } else {
                  if ("childNavigationContext" in viewPortInstruction) {
                    loads.push(viewPortInstruction.childNavigationContext.commitChanges(waitToSwap));
                  }
                }
              }
              return Promise.all(loads).then(function() {
                delaySwaps.forEach(function(x) {
                  return x.viewPort.swap(x.viewPortInstruction);
                });
              });
            },
            writable: true,
            configurable: true
          },
          buildTitle: {
            value: function buildTitle() {
              var separator = arguments[0] === undefined ? " | " : arguments[0];
              var next = this.nextInstruction,
                  title = next.config.navModel.title || "",
                  viewPortInstructions = next.viewPortInstructions,
                  childTitles = [];
              for (var viewPortName in viewPortInstructions) {
                var viewPortInstruction = viewPortInstructions[viewPortName];
                if ("childNavigationContext" in viewPortInstruction) {
                  var childTitle = viewPortInstruction.childNavigationContext.buildTitle(separator);
                  if (childTitle) {
                    childTitles.push(childTitle);
                  }
                }
              }
              if (childTitles.length) {
                title = childTitles.join(separator) + (title ? separator : "") + title;
              }
              if (this.router.title) {
                title += (title ? separator : "") + this.router.title;
              }
              return title;
            },
            writable: true,
            configurable: true
          }
        });
        return NavigationContext;
      })());
      CommitChangesStep = _export("CommitChangesStep", (function() {
        function CommitChangesStep() {}
        _prototypeProperties(CommitChangesStep, null, {run: {
            value: function run(navigationContext, next) {
              navigationContext.commitChanges(true);
              var title = navigationContext.buildTitle();
              if (title) {
                document.title = title;
              }
              return next();
            },
            writable: true,
            configurable: true
          }});
        return CommitChangesStep;
      })());
    }
  };
});



System.register("github:aurelia/history@0.2.2", ["github:aurelia/history@0.2.2/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/router@0.5.5/system/activation", ["./navigation-plan", "./navigation-commands", "./util"], function(_export) {
  "use strict";
  var INVOKE_LIFECYCLE,
      REPLACE,
      isNavigationCommand,
      processPotential,
      _toArray,
      _prototypeProperties,
      affirmations,
      CanDeactivatePreviousStep,
      CanActivateNextStep,
      DeactivatePreviousStep,
      ActivateNextStep;
  function processDeactivatable(plan, callbackName, next, ignoreResult) {
    var infos = findDeactivatable(plan, callbackName),
        i = infos.length;
    function inspect(val) {
      if (ignoreResult || shouldContinue(val)) {
        return iterate();
      } else {
        return next.cancel(val);
      }
    }
    function iterate() {
      if (i--) {
        try {
          var controller = infos[i];
          var result = controller[callbackName]();
          return processPotential(result, inspect, next.cancel);
        } catch (error) {
          return next.cancel(error);
        }
      } else {
        return next();
      }
    }
    return iterate();
  }
  function findDeactivatable(plan, callbackName, list) {
    list = list || [];
    for (var viewPortName in plan) {
      var viewPortPlan = plan[viewPortName];
      var prevComponent = viewPortPlan.prevComponent;
      if ((viewPortPlan.strategy == INVOKE_LIFECYCLE || viewPortPlan.strategy == REPLACE) && prevComponent) {
        var controller = prevComponent.executionContext;
        if (callbackName in controller) {
          list.push(controller);
        }
      }
      if (viewPortPlan.childNavigationContext) {
        findDeactivatable(viewPortPlan.childNavigationContext.plan, callbackName, list);
      } else if (prevComponent) {
        addPreviousDeactivatable(prevComponent, callbackName, list);
      }
    }
    return list;
  }
  function addPreviousDeactivatable(component, callbackName, list) {
    var controller = component.executionContext;
    if (controller.router && controller.router.currentInstruction) {
      var viewPortInstructions = controller.router.currentInstruction.viewPortInstructions;
      for (var viewPortName in viewPortInstructions) {
        var viewPortInstruction = viewPortInstructions[viewPortName];
        var prevComponent = viewPortInstruction.component;
        var prevController = prevComponent.executionContext;
        if (callbackName in prevController) {
          list.push(prevController);
        }
        addPreviousDeactivatable(prevComponent, callbackName, list);
      }
    }
  }
  function processActivatable(navigationContext, callbackName, next, ignoreResult) {
    var infos = findActivatable(navigationContext, callbackName),
        length = infos.length,
        i = -1;
    function inspect(val, router) {
      if (ignoreResult || shouldContinue(val, router)) {
        return iterate();
      } else {
        return next.cancel(val);
      }
    }
    function iterate() {
      i++;
      if (i < length) {
        try {
          var _current$controller;
          var current = infos[i];
          var result = (_current$controller = current.controller)[callbackName].apply(_current$controller, _toArray(current.lifecycleArgs));
          return processPotential(result, function(val) {
            return inspect(val, current.router);
          }, next.cancel);
        } catch (error) {
          return next.cancel(error);
        }
      } else {
        return next();
      }
    }
    return iterate();
  }
  function findActivatable(navigationContext, callbackName, list, router) {
    var plan = navigationContext.plan;
    var next = navigationContext.nextInstruction;
    list = list || [];
    Object.keys(plan).filter(function(viewPortName) {
      var viewPortPlan = plan[viewPortName];
      var viewPortInstruction = next.viewPortInstructions[viewPortName];
      var controller = viewPortInstruction.component.executionContext;
      if ((viewPortPlan.strategy === INVOKE_LIFECYCLE || viewPortPlan.strategy === REPLACE) && callbackName in controller) {
        list.push({
          controller: controller,
          lifecycleArgs: viewPortInstruction.lifecycleArgs,
          router: router
        });
      }
      if (viewPortPlan.childNavigationContext) {
        findActivatable(viewPortPlan.childNavigationContext, callbackName, list, controller.router || router);
      }
    });
    return list;
  }
  function shouldContinue(output, router) {
    if (output instanceof Error) {
      return false;
    }
    if (isNavigationCommand(output)) {
      output.router = router;
      return !!output.shouldContinueProcessing;
    }
    if (typeof output == "string") {
      return affirmations.indexOf(value.toLowerCase()) !== -1;
    }
    if (typeof output == "undefined") {
      return true;
    }
    return output;
  }
  return {
    setters: [function(_navigationPlan) {
      INVOKE_LIFECYCLE = _navigationPlan.INVOKE_LIFECYCLE;
      REPLACE = _navigationPlan.REPLACE;
    }, function(_navigationCommands) {
      isNavigationCommand = _navigationCommands.isNavigationCommand;
    }, function(_util) {
      processPotential = _util.processPotential;
    }],
    execute: function() {
      _toArray = function(arr) {
        return Array.isArray(arr) ? arr : Array.from(arr);
      };
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      affirmations = _export("affirmations", ["yes", "ok", "true"]);
      CanDeactivatePreviousStep = _export("CanDeactivatePreviousStep", (function() {
        function CanDeactivatePreviousStep() {}
        _prototypeProperties(CanDeactivatePreviousStep, null, {run: {
            value: function run(navigationContext, next) {
              return processDeactivatable(navigationContext.plan, "canDeactivate", next);
            },
            writable: true,
            configurable: true
          }});
        return CanDeactivatePreviousStep;
      })());
      CanActivateNextStep = _export("CanActivateNextStep", (function() {
        function CanActivateNextStep() {}
        _prototypeProperties(CanActivateNextStep, null, {run: {
            value: function run(navigationContext, next) {
              return processActivatable(navigationContext, "canActivate", next);
            },
            writable: true,
            configurable: true
          }});
        return CanActivateNextStep;
      })());
      DeactivatePreviousStep = _export("DeactivatePreviousStep", (function() {
        function DeactivatePreviousStep() {}
        _prototypeProperties(DeactivatePreviousStep, null, {run: {
            value: function run(navigationContext, next) {
              return processDeactivatable(navigationContext.plan, "deactivate", next, true);
            },
            writable: true,
            configurable: true
          }});
        return DeactivatePreviousStep;
      })());
      ActivateNextStep = _export("ActivateNextStep", (function() {
        function ActivateNextStep() {}
        _prototypeProperties(ActivateNextStep, null, {run: {
            value: function run(navigationContext, next) {
              return processActivatable(navigationContext, "activate", next, true);
            },
            writable: true,
            configurable: true
          }});
        return ActivateNextStep;
      })());
    }
  };
});



System.register("github:aurelia/templating-resources@0.8.7/system/index", ["./compose", "./if", "./repeat", "./show", "./selected-item", "./global-behavior"], function(_export) {
  "use strict";
  var Compose,
      If,
      Repeat,
      Show,
      SelectedItem,
      GlobalBehavior;
  function install(aurelia) {
    aurelia.withResources([Show, If, Repeat, Compose, SelectedItem, GlobalBehavior]);
  }
  return {
    setters: [function(_compose) {
      Compose = _compose.Compose;
    }, function(_if) {
      If = _if.If;
    }, function(_repeat) {
      Repeat = _repeat.Repeat;
    }, function(_show) {
      Show = _show.Show;
    }, function(_selectedItem) {
      SelectedItem = _selectedItem.SelectedItem;
    }, function(_globalBehavior) {
      GlobalBehavior = _globalBehavior.GlobalBehavior;
    }],
    execute: function() {
      _export("Compose", Compose);
      _export("If", If);
      _export("Repeat", Repeat);
      _export("Show", Show);
      _export("SelectedItem", SelectedItem);
      _export("GlobalBehavior", GlobalBehavior);
      _export("install", install);
    }
  };
});



System.register("github:aurelia/event-aggregator@0.2.2", ["github:aurelia/event-aggregator@0.2.2/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/history-browser@0.2.3", ["github:aurelia/history-browser@0.2.3/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



(function() {
function define(){};  define.amd = {};
System.register("github:moment/moment@2.9.0", ["github:moment/moment@2.9.0/moment"], false, function(__require, __exports, __module) {
  return (function(main) {
    return main;
  }).call(this, __require('github:moment/moment@2.9.0/moment'));
});


})();
(function() {
function define(){};  define.amd = {};
System.register("github:showdownjs/showdown@0.3.4", ["github:showdownjs/showdown@0.3.4/src/showdown"], false, function(__require, __exports, __module) {
  return (function(main) {
    return main;
  }).call(this, __require('github:showdownjs/showdown@0.3.4/src/showdown'));
});


})();
System.register("app/app.html!plugin-html/html", ["html/generate", "app/css-classes/behaviors/classes"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var generate = require('html/generate')['default'];
  var deps = [];
  deps[0] = {
    dep: require('app/css-classes/behaviors/classes'),
    path: 'app/css-classes/behaviors/classes'
  };
  module.exports = generate('app/app.html', '<template>\n  <import from="app/css-classes/behaviors/classes"></import>\n\n  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">\n    <div class="container">\n      <div class="navbar-header">\n        <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".bf-navbar-collapse">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href="#">\n          <span>${router.title}</span>\n        </a>\n      </div>\n\n      <div class="collapse navbar-collapse bf-navbar-collapse">\n        <ul class="nav navbar-nav">\n          <li repeat.for="row of router.navigation" classes.bind="{active: row.isActive}">\n            <a href.bind="row.href">${row.title}</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class="navbar-collapse app-bar-upper-right"> \n        <ul class="nav navbar-nav navbar-right" classes.bind="{\'fade-hidden\': !router.isNavigating}">\n          <li class="loader" >\n            <a><i class="fa fa-spinner fa-spin fa-2x"></i></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  <div class="page-host container">\n    <router-view></router-view>\n  </div>\n</template>', deps);
  global.define = __define;
  return module.exports;
});



System.register("app/markdown/bundle", ["./behaviors/markdown"], function(_export) {
  "use strict";
  return {
    setters: [function(_behaviorsMarkdown) {}],
    execute: function() {}
  };
});



System.register("app/blog/routes/index", ["aurelia-router", "../services/blog", "./index.html!"], function(_export) {
  "use strict";
  var Router,
      BlogService,
      view,
      _prototypeProperties,
      _classCallCheck,
      Index;
  return {
    setters: [function(_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function(_servicesBlog) {
      BlogService = _servicesBlog.BlogService;
    }, function(_indexHtml) {
      view = _indexHtml["default"];
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _classCallCheck = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
      Index = _export("Index", (function() {
        function Index(router, blogService) {
          _classCallCheck(this, Index);
          this.router = router;
          this.blogService = blogService;
          router.configure(function(config) {
            config.map([{
              route: ["", "page/:page"],
              moduleId: "./list",
              nav: true,
              title: "Latest Posts"
            }, {
              route: ":year/:month/:date/:slug",
              moduleId: "./post"
            }, {
              route: "tags/:tag",
              moduleId: "./tag"
            }]);
          });
        }
        _prototypeProperties(Index, {inject: {
            value: function inject() {
              return [Router, BlogService];
            },
            writable: true,
            configurable: true
          }}, {getViewStrategy: {
            value: function getViewStrategy() {
              return view;
            },
            writable: true,
            configurable: true
          }});
        return Index;
      })());
    }
  };
});



System.register("app/blog/routes/list", ["../services/blog", "moment", "./list.html!"], function(_export) {
  "use strict";
  var BlogService,
      moment,
      view,
      _prototypeProperties,
      _classCallCheck,
      List;
  return {
    setters: [function(_servicesBlog) {
      BlogService = _servicesBlog.BlogService;
    }, function(_moment) {
      moment = _moment["default"];
    }, function(_listHtml) {
      view = _listHtml["default"];
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _classCallCheck = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
      List = _export("List", (function() {
        function List(blogService) {
          _classCallCheck(this, List);
          this.blogService = blogService;
        }
        _prototypeProperties(List, {inject: {
            value: function inject() {
              return [BlogService];
            },
            writable: true,
            configurable: true
          }}, {
          activate: {
            value: function activate() {
              var _this = this;
              return this.blogService.getLatest().then(function(_ref) {
                var posts = _ref.posts;
                var total = _ref.total;
                var page = _ref.page;
                _this.posts = posts;
                _this.total = total;
                _this.page = page;
                _this.md = "*this is markdown!*";
              });
            },
            writable: true,
            configurable: true
          },
          url: {
            value: function url(post) {
              var date = moment(post.date);
              return "#/blog/" + date.format("YYYY/MM/DD") + "/" + post.slug + "/";
            },
            writable: true,
            configurable: true
          },
          tagUrl: {
            value: function tagUrl(tag) {
              return "#/blog/tags/" + tag + "/";
            },
            writable: true,
            configurable: true
          },
          date: {
            value: function date(post) {
              return moment(post.date).format("MMM D");
            },
            writable: true,
            configurable: true
          },
          getViewStrategy: {
            value: function getViewStrategy() {
              return view;
            },
            writable: true,
            configurable: true
          }
        });
        return List;
      })());
    }
  };
});



System.register("app/blog/routes/post", ["../services/blog", "moment", "./post.html!"], function(_export) {
  "use strict";
  var BlogService,
      moment,
      view,
      _prototypeProperties,
      _classCallCheck,
      Index;
  return {
    setters: [function(_servicesBlog) {
      BlogService = _servicesBlog.BlogService;
    }, function(_moment) {
      moment = _moment["default"];
    }, function(_postHtml) {
      view = _postHtml["default"];
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _classCallCheck = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
      Index = _export("Index", (function() {
        function Index(blogService) {
          _classCallCheck(this, Index);
          this.blogService = blogService;
        }
        _prototypeProperties(Index, {inject: {
            value: function inject() {
              return [BlogService];
            },
            writable: true,
            configurable: true
          }}, {
          canActivate: {
            value: function canActivate(params, qs, config) {
              var _this = this;
              var date = params.date;
              var month = params.month;
              var year = params.year;
              var slug = params.slug;
              return this.blogService.getPost(year, month, date, slug).then(function(post) {
                if (post === null)
                  return false;
                _this.post = post;
                config.navModel.title = post.title;
                return true;
              });
            },
            writable: true,
            configurable: true
          },
          url: {
            value: function url(post) {
              var date = moment(post.date);
              return "#/blog/" + date.format("YYYY/MM/DD") + "/" + post.slug + "/";
            },
            writable: true,
            configurable: true
          },
          date: {
            value: function date(post) {
              return moment(post.date).format("MMM D");
            },
            writable: true,
            configurable: true
          },
          getViewStrategy: {
            value: function getViewStrategy() {
              return view;
            },
            writable: true,
            configurable: true
          }
        });
        return Index;
      })());
    }
  };
});



System.register("app/blog/routes/tag", ["../services/blog", "./list", "moment", "./tag.html!"], function(_export) {
  "use strict";
  var BlogService,
      List,
      moment,
      view,
      _prototypeProperties,
      _inherits,
      _classCallCheck,
      Tag;
  return {
    setters: [function(_servicesBlog) {
      BlogService = _servicesBlog.BlogService;
    }, function(_list) {
      List = _list.List;
    }, function(_moment) {
      moment = _moment["default"];
    }, function(_tagHtml) {
      view = _tagHtml["default"];
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          subClass.__proto__ = superClass;
      };
      _classCallCheck = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
      Tag = _export("Tag", (function(List) {
        function Tag(blogService) {
          _classCallCheck(this, Tag);
          this.blogService = blogService;
        }
        _inherits(Tag, List);
        _prototypeProperties(Tag, {inject: {
            value: function inject() {
              return [BlogService];
            },
            writable: true,
            configurable: true
          }}, {
          activate: {
            value: function activate(params, qs, config) {
              var _this = this;
              var tag = params.tag;
              this.tag = tag;
              return this.blogService.getPostsForTag(tag).then(function(_ref) {
                var posts = _ref.posts;
                var total = _ref.total;
                var page = _ref.page;
                _this.posts = posts;
                _this.total = total;
                _this.page = page;
                config.navModel.title = "Tag: " + tag;
              });
            },
            writable: true,
            configurable: true
          },
          getViewStrategy: {
            value: function getViewStrategy() {
              return view;
            },
            writable: true,
            configurable: true
          }
        });
        return Tag;
      })(List));
    }
  };
});



System.register("github:aurelia/metadata@0.3.1", ["github:aurelia/metadata@0.3.1/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/dependency-injection@0.4.2/system/index", ["aurelia-metadata", "./metadata", "./container"], function(_export) {
  "use strict";
  var Metadata,
      Transient,
      Singleton;
  return {
    setters: [function(_aureliaMetadata) {
      Metadata = _aureliaMetadata.Metadata;
    }, function(_metadata) {
      Transient = _metadata.Transient;
      Singleton = _metadata.Singleton;
      _export("Registration", _metadata.Registration);
      _export("Transient", _metadata.Transient);
      _export("Singleton", _metadata.Singleton);
      _export("Resolver", _metadata.Resolver);
      _export("Lazy", _metadata.Lazy);
      _export("All", _metadata.All);
      _export("Optional", _metadata.Optional);
      _export("Parent", _metadata.Parent);
    }, function(_container) {
      _export("Container", _container.Container);
    }],
    execute: function() {
      Metadata.configure.classHelper("transient", Transient);
      Metadata.configure.classHelper("singleton", Singleton);
    }
  };
});



System.register("github:aurelia/binding@0.3.4/system/observer-locator", ["aurelia-task-queue", "./array-observation", "./event-manager", "./dirty-checking", "./property-observation", "aurelia-dependency-injection"], function(_export) {
  "use strict";
  var TaskQueue,
      getArrayObserver,
      EventManager,
      DirtyChecker,
      DirtyCheckProperty,
      SetterObserver,
      OoObjectObserver,
      OoPropertyObserver,
      ElementObserver,
      All,
      _prototypeProperties,
      hasObjectObserve,
      ObserverLocator,
      ObjectObservationAdapter;
  function createObserversLookup(obj) {
    var value = {};
    try {
      Object.defineProperty(obj, "__observers__", {
        enumerable: false,
        configurable: false,
        writable: false,
        value: value
      });
    } catch (_) {}
    return value;
  }
  function createObserverLookup(obj) {
    var value = new OoObjectObserver(obj);
    try {
      Object.defineProperty(obj, "__observer__", {
        enumerable: false,
        configurable: false,
        writable: false,
        value: value
      });
    } catch (_) {}
    return value;
  }
  return {
    setters: [function(_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }, function(_arrayObservation) {
      getArrayObserver = _arrayObservation.getArrayObserver;
    }, function(_eventManager) {
      EventManager = _eventManager.EventManager;
    }, function(_dirtyChecking) {
      DirtyChecker = _dirtyChecking.DirtyChecker;
      DirtyCheckProperty = _dirtyChecking.DirtyCheckProperty;
    }, function(_propertyObservation) {
      SetterObserver = _propertyObservation.SetterObserver;
      OoObjectObserver = _propertyObservation.OoObjectObserver;
      OoPropertyObserver = _propertyObservation.OoPropertyObserver;
      ElementObserver = _propertyObservation.ElementObserver;
    }, function(_aureliaDependencyInjection) {
      All = _aureliaDependencyInjection.All;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      if (typeof Object.getPropertyDescriptor !== "function") {
        Object.getPropertyDescriptor = function(subject, name) {
          var pd = Object.getOwnPropertyDescriptor(subject, name);
          var proto = Object.getPrototypeOf(subject);
          while (typeof pd === "undefined" && proto !== null) {
            pd = Object.getOwnPropertyDescriptor(proto, name);
            proto = Object.getPrototypeOf(proto);
          }
          return pd;
        };
      }
      hasObjectObserve = (function detectObjectObserve() {
        if (typeof Object.observe !== "function") {
          return false;
        }
        var records = [];
        function callback(recs) {
          records = recs;
        }
        var test = {};
        Object.observe(test, callback);
        test.id = 1;
        test.id = 2;
        delete test.id;
        Object.deliverChangeRecords(callback);
        if (records.length !== 3)
          return false;
        if (records[0].type != "add" || records[1].type != "update" || records[2].type != "delete") {
          return false;
        }
        Object.unobserve(test, callback);
        return true;
      })();
      ObserverLocator = _export("ObserverLocator", (function() {
        function ObserverLocator(taskQueue, eventManager, dirtyChecker, observationAdapters) {
          this.taskQueue = taskQueue;
          this.eventManager = eventManager;
          this.dirtyChecker = dirtyChecker;
          this.observationAdapters = observationAdapters;
        }
        _prototypeProperties(ObserverLocator, {inject: {
            value: function inject() {
              return [TaskQueue, EventManager, DirtyChecker, All.of(ObjectObservationAdapter)];
            },
            writable: true,
            configurable: true
          }}, {
          getObserversLookup: {
            value: function getObserversLookup(obj) {
              return obj.__observers__ || createObserversLookup(obj);
            },
            writable: true,
            configurable: true
          },
          getObserver: {
            value: function getObserver(obj, propertyName) {
              var observersLookup = this.getObserversLookup(obj);
              if (propertyName in observersLookup) {
                return observersLookup[propertyName];
              }
              return observersLookup[propertyName] = this.createPropertyObserver(obj, propertyName);
            },
            writable: true,
            configurable: true
          },
          getObservationAdapter: {
            value: function getObservationAdapter(obj, propertyName) {
              var i,
                  ii,
                  observationAdapter;
              for (i = 0, ii = this.observationAdapters.length; i < ii; i++) {
                observationAdapter = this.observationAdapters[i];
                if (observationAdapter.handlesProperty(obj, propertyName))
                  return observationAdapter;
              }
              return null;
            },
            writable: true,
            configurable: true
          },
          createPropertyObserver: {
            value: function createPropertyObserver(obj, propertyName) {
              var observerLookup,
                  descriptor,
                  handler,
                  observationAdapter;
              if (obj instanceof Element) {
                handler = this.eventManager.getElementHandler(obj);
                if (handler) {
                  return new ElementObserver(handler, obj, propertyName);
                }
              }
              descriptor = Object.getPropertyDescriptor(obj, propertyName);
              if (descriptor && (descriptor.get || descriptor.set)) {
                observationAdapter = this.getObservationAdapter(obj, propertyName);
                if (observationAdapter)
                  return observationAdapter.getObserver(obj, propertyName);
                return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
              }
              if (hasObjectObserve) {
                observerLookup = obj.__observer__ || createObserverLookup(obj);
                return observerLookup.getObserver(propertyName);
              }
              if (obj instanceof Array) {
                observerLookup = this.getArrayObserver(obj);
                return observerLookup.getObserver(propertyName);
              }
              return new SetterObserver(this.taskQueue, obj, propertyName);
            },
            writable: true,
            configurable: true
          },
          getArrayObserver: {
            value: (function(_getArrayObserver) {
              var _getArrayObserverWrapper = function getArrayObserver() {
                return _getArrayObserver.apply(this, arguments);
              };
              _getArrayObserverWrapper.toString = function() {
                return _getArrayObserver.toString();
              };
              return _getArrayObserverWrapper;
            })(function(array) {
              if ("__array_observer__" in array) {
                return array.__array_observer__;
              }
              return array.__array_observer__ = getArrayObserver(this.taskQueue, array);
            }),
            writable: true,
            configurable: true
          }
        });
        return ObserverLocator;
      })());
      ObjectObservationAdapter = _export("ObjectObservationAdapter", (function() {
        function ObjectObservationAdapter() {}
        _prototypeProperties(ObjectObservationAdapter, null, {
          handlesProperty: {
            value: function handlesProperty(object, propertyName) {
              throw new Error("BindingAdapters must implement handlesProperty(object, propertyName).");
            },
            writable: true,
            configurable: true
          },
          getObserver: {
            value: function getObserver(object, propertyName) {
              throw new Error("BindingAdapters must implement createObserver(object, propertyName).");
            },
            writable: true,
            configurable: true
          }
        });
        return ObjectObservationAdapter;
      })());
    }
  };
});



System.register("github:aurelia/binding@0.3.4/system/parser", ["./lexer", "./ast"], function(_export) {
  "use strict";
  var Lexer,
      Token,
      Expression,
      ArrayOfExpression,
      Chain,
      ValueConverter,
      Assign,
      Conditional,
      AccessScope,
      AccessMember,
      AccessKeyed,
      CallScope,
      CallFunction,
      CallMember,
      PrefixNot,
      Binary,
      LiteralPrimitive,
      LiteralArray,
      LiteralObject,
      LiteralString,
      _prototypeProperties,
      EOF,
      Parser,
      ParserImplementation;
  return {
    setters: [function(_lexer) {
      Lexer = _lexer.Lexer;
      Token = _lexer.Token;
    }, function(_ast) {
      Expression = _ast.Expression;
      ArrayOfExpression = _ast.ArrayOfExpression;
      Chain = _ast.Chain;
      ValueConverter = _ast.ValueConverter;
      Assign = _ast.Assign;
      Conditional = _ast.Conditional;
      AccessScope = _ast.AccessScope;
      AccessMember = _ast.AccessMember;
      AccessKeyed = _ast.AccessKeyed;
      CallScope = _ast.CallScope;
      CallFunction = _ast.CallFunction;
      CallMember = _ast.CallMember;
      PrefixNot = _ast.PrefixNot;
      Binary = _ast.Binary;
      LiteralPrimitive = _ast.LiteralPrimitive;
      LiteralArray = _ast.LiteralArray;
      LiteralObject = _ast.LiteralObject;
      LiteralString = _ast.LiteralString;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      EOF = new Token(-1, null);
      Parser = _export("Parser", (function() {
        function Parser() {
          this.cache = {};
          this.lexer = new Lexer();
        }
        _prototypeProperties(Parser, null, {parse: {
            value: function parse(input) {
              input = input || "";
              return this.cache[input] || (this.cache[input] = new ParserImplementation(this.lexer, input).parseChain());
            },
            writable: true,
            configurable: true
          }});
        return Parser;
      })());
      ParserImplementation = _export("ParserImplementation", (function() {
        function ParserImplementation(lexer, input) {
          this.index = 0;
          this.input = input;
          this.tokens = lexer.lex(input);
        }
        _prototypeProperties(ParserImplementation, null, {
          peek: {
            get: function() {
              return this.index < this.tokens.length ? this.tokens[this.index] : EOF;
            },
            configurable: true
          },
          parseChain: {
            value: function parseChain() {
              var isChain = false,
                  expressions = [];
              while (this.optional(";")) {
                isChain = true;
              }
              while (this.index < this.tokens.length) {
                if (this.peek.text === ")" || this.peek.text === "}" || this.peek.text === "]") {
                  this.error("Unconsumed token " + this.peek.text);
                }
                var expr = this.parseValueConverter();
                expressions.push(expr);
                while (this.optional(";")) {
                  isChain = true;
                }
                if (isChain && expr instanceof ValueConverter) {
                  this.error("cannot have a value converter in a chain");
                }
              }
              return expressions.length === 1 ? expressions[0] : new Chain(expressions);
            },
            writable: true,
            configurable: true
          },
          parseValueConverter: {
            value: function parseValueConverter() {
              var result = this.parseExpression();
              while (this.optional("|")) {
                var name = this.peek.text,
                    args = [];
                this.advance();
                while (this.optional(":")) {
                  args.push(this.parseExpression());
                }
                result = new ValueConverter(result, name, args, [result].concat(args));
              }
              return result;
            },
            writable: true,
            configurable: true
          },
          parseExpression: {
            value: function parseExpression() {
              var start = this.peek.index,
                  result = this.parseConditional();
              while (this.peek.text === "=") {
                if (!result.isAssignable) {
                  var end = this.index < this.tokens.length ? this.peek.index : this.input.length;
                  var expression = this.input.substring(start, end);
                  this.error("Expression " + expression + " is not assignable");
                }
                this.expect("=");
                result = new Assign(result, this.parseConditional());
              }
              return result;
            },
            writable: true,
            configurable: true
          },
          parseConditional: {
            value: function parseConditional() {
              var start = this.peek.index,
                  result = this.parseLogicalOr();
              if (this.optional("?")) {
                var yes = this.parseExpression();
                if (!this.optional(":")) {
                  var end = this.index < this.tokens.length ? this.peek.index : this.input.length;
                  var expression = this.input.substring(start, end);
                  this.error("Conditional expression " + expression + " requires all 3 expressions");
                }
                var no = this.parseExpression();
                result = new Conditional(result, yes, no);
              }
              return result;
            },
            writable: true,
            configurable: true
          },
          parseLogicalOr: {
            value: function parseLogicalOr() {
              var result = this.parseLogicalAnd();
              while (this.optional("||")) {
                result = new Binary("||", result, this.parseLogicalAnd());
              }
              return result;
            },
            writable: true,
            configurable: true
          },
          parseLogicalAnd: {
            value: function parseLogicalAnd() {
              var result = this.parseEquality();
              while (this.optional("&&")) {
                result = new Binary("&&", result, this.parseEquality());
              }
              return result;
            },
            writable: true,
            configurable: true
          },
          parseEquality: {
            value: function parseEquality() {
              var result = this.parseRelational();
              while (true) {
                if (this.optional("==")) {
                  result = new Binary("==", result, this.parseRelational());
                } else if (this.optional("!=")) {
                  result = new Binary("!=", result, this.parseRelational());
                } else if (this.optional("===")) {
                  result = new Binary("===", result, this.parseRelational());
                } else if (this.optional("!==")) {
                  result = new Binary("!==", result, this.parseRelational());
                } else {
                  return result;
                }
              }
            },
            writable: true,
            configurable: true
          },
          parseRelational: {
            value: function parseRelational() {
              var result = this.parseAdditive();
              while (true) {
                if (this.optional("<")) {
                  result = new Binary("<", result, this.parseAdditive());
                } else if (this.optional(">")) {
                  result = new Binary(">", result, this.parseAdditive());
                } else if (this.optional("<=")) {
                  result = new Binary("<=", result, this.parseAdditive());
                } else if (this.optional(">=")) {
                  result = new Binary(">=", result, this.parseAdditive());
                } else {
                  return result;
                }
              }
            },
            writable: true,
            configurable: true
          },
          parseAdditive: {
            value: function parseAdditive() {
              var result = this.parseMultiplicative();
              while (true) {
                if (this.optional("+")) {
                  result = new Binary("+", result, this.parseMultiplicative());
                } else if (this.optional("-")) {
                  result = new Binary("-", result, this.parseMultiplicative());
                } else {
                  return result;
                }
              }
            },
            writable: true,
            configurable: true
          },
          parseMultiplicative: {
            value: function parseMultiplicative() {
              var result = this.parsePrefix();
              while (true) {
                if (this.optional("*")) {
                  result = new Binary("*", result, this.parsePrefix());
                } else if (this.optional("%")) {
                  result = new Binary("%", result, this.parsePrefix());
                } else if (this.optional("/")) {
                  result = new Binary("/", result, this.parsePrefix());
                } else {
                  return result;
                }
              }
            },
            writable: true,
            configurable: true
          },
          parsePrefix: {
            value: function parsePrefix() {
              if (this.optional("+")) {
                return this.parsePrefix();
              } else if (this.optional("-")) {
                return new Binary("-", new LiteralPrimitive(0), this.parsePrefix());
              } else if (this.optional("!")) {
                return new PrefixNot("!", this.parsePrefix());
              } else {
                return this.parseAccessOrCallMember();
              }
            },
            writable: true,
            configurable: true
          },
          parseAccessOrCallMember: {
            value: function parseAccessOrCallMember() {
              var result = this.parsePrimary();
              while (true) {
                if (this.optional(".")) {
                  var name = this.peek.text;
                  this.advance();
                  if (this.optional("(")) {
                    var args = this.parseExpressionList(")");
                    this.expect(")");
                    result = new CallMember(result, name, args);
                  } else {
                    result = new AccessMember(result, name);
                  }
                } else if (this.optional("[")) {
                  var key = this.parseExpression();
                  this.expect("]");
                  result = new AccessKeyed(result, key);
                } else if (this.optional("(")) {
                  var args = this.parseExpressionList(")");
                  this.expect(")");
                  result = new CallFunction(result, args);
                } else {
                  return result;
                }
              }
            },
            writable: true,
            configurable: true
          },
          parsePrimary: {
            value: function parsePrimary() {
              if (this.optional("(")) {
                var result = this.parseExpression();
                this.expect(")");
                return result;
              } else if (this.optional("null") || this.optional("undefined")) {
                return new LiteralPrimitive(null);
              } else if (this.optional("true")) {
                return new LiteralPrimitive(true);
              } else if (this.optional("false")) {
                return new LiteralPrimitive(false);
              } else if (this.optional("[")) {
                var elements = this.parseExpressionList("]");
                this.expect("]");
                return new LiteralArray(elements);
              } else if (this.peek.text == "{") {
                return this.parseObject();
              } else if (this.peek.key != null) {
                return this.parseAccessOrCallScope();
              } else if (this.peek.value != null) {
                var value = this.peek.value;
                this.advance();
                return isNaN(value) ? new LiteralString(value) : new LiteralPrimitive(value);
              } else if (this.index >= this.tokens.length) {
                throw new Error("Unexpected end of expression: " + this.input);
              } else {
                this.error("Unexpected token " + this.peek.text);
              }
            },
            writable: true,
            configurable: true
          },
          parseAccessOrCallScope: {
            value: function parseAccessOrCallScope() {
              var name = this.peek.key;
              this.advance();
              if (!this.optional("(")) {
                return new AccessScope(name);
              }
              var args = this.parseExpressionList(")");
              this.expect(")");
              return new CallScope(name, args);
            },
            writable: true,
            configurable: true
          },
          parseObject: {
            value: function parseObject() {
              var keys = [],
                  values = [];
              this.expect("{");
              if (this.peek.text !== "}") {
                do {
                  var value = this.peek.value;
                  keys.push(typeof value === "string" ? value : this.peek.text);
                  this.advance();
                  this.expect(":");
                  values.push(this.parseExpression());
                } while (this.optional(","));
              }
              this.expect("}");
              return new LiteralObject(keys, values);
            },
            writable: true,
            configurable: true
          },
          parseExpressionList: {
            value: function parseExpressionList(terminator) {
              var result = [];
              if (this.peek.text != terminator) {
                do {
                  result.push(this.parseExpression());
                } while (this.optional(","));
              }
              return result;
            },
            writable: true,
            configurable: true
          },
          optional: {
            value: function optional(text) {
              if (this.peek.text === text) {
                this.advance();
                return true;
              }
              return false;
            },
            writable: true,
            configurable: true
          },
          expect: {
            value: function expect(text) {
              if (this.peek.text === text) {
                this.advance();
              } else {
                this.error("Missing expected " + text);
              }
            },
            writable: true,
            configurable: true
          },
          advance: {
            value: function advance() {
              this.index++;
            },
            writable: true,
            configurable: true
          },
          error: {
            value: function error(message) {
              var location = this.index < this.tokens.length ? "at column " + (this.tokens[this.index].index + 1) + " in" : "at the end of the expression";
              throw new Error("Parser Error: " + message + " " + location + " [" + this.input + "]");
            },
            writable: true,
            configurable: true
          }
        });
        return ParserImplementation;
      })());
    }
  };
});



System.register("github:aurelia/templating@0.8.11/system/attached-behavior", ["aurelia-metadata", "./behavior-instance", "./behaviors", "./util"], function(_export) {
  "use strict";
  var ResourceType,
      BehaviorInstance,
      configureBehavior,
      hyphenate,
      _prototypeProperties,
      _inherits,
      AttachedBehavior;
  return {
    setters: [function(_aureliaMetadata) {
      ResourceType = _aureliaMetadata.ResourceType;
    }, function(_behaviorInstance) {
      BehaviorInstance = _behaviorInstance.BehaviorInstance;
    }, function(_behaviors) {
      configureBehavior = _behaviors.configureBehavior;
    }, function(_util) {
      hyphenate = _util.hyphenate;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          subClass.__proto__ = superClass;
      };
      AttachedBehavior = _export("AttachedBehavior", (function(ResourceType) {
        function AttachedBehavior(attribute) {
          this.name = attribute;
          this.properties = [];
          this.attributes = {};
        }
        _inherits(AttachedBehavior, ResourceType);
        _prototypeProperties(AttachedBehavior, {convention: {
            value: function convention(name) {
              if (name.endsWith("AttachedBehavior")) {
                return new AttachedBehavior(hyphenate(name.substring(0, name.length - 16)));
              }
            },
            writable: true,
            configurable: true
          }}, {
          analyze: {
            value: function analyze(container, target) {
              configureBehavior(container, this, target);
            },
            writable: true,
            configurable: true
          },
          load: {
            value: function load(container, target) {
              return Promise.resolve(this);
            },
            writable: true,
            configurable: true
          },
          register: {
            value: function register(registry, name) {
              registry.registerAttribute(name || this.name, this, this.name);
            },
            writable: true,
            configurable: true
          },
          compile: {
            value: function compile(compiler, resources, node, instruction) {
              instruction.suppressBind = true;
              return node;
            },
            writable: true,
            configurable: true
          },
          create: {
            value: function create(container, instruction, element, bindings) {
              var executionContext = instruction.executionContext || container.get(this.target),
                  behaviorInstance = new BehaviorInstance(this, executionContext, instruction);
              if (!(this.apiName in element)) {
                element[this.apiName] = behaviorInstance.executionContext;
              }
              if (this.childExpression) {
                bindings.push(this.childExpression.createBinding(element, behaviorInstance.executionContext));
              }
              return behaviorInstance;
            },
            writable: true,
            configurable: true
          }
        });
        return AttachedBehavior;
      })(ResourceType));
    }
  };
});



System.register("github:aurelia/templating@0.8.11/system/view-compiler", ["./resource-registry", "./view-factory", "./binding-language"], function(_export) {
  "use strict";
  var ResourceRegistry,
      ViewFactory,
      BindingLanguage,
      _prototypeProperties,
      nextInjectorId,
      defaultCompileOptions,
      hasShadowDOM,
      ViewCompiler;
  function getNextInjectorId() {
    return ++nextInjectorId;
  }
  function configureProperties(instruction, resources) {
    var type = instruction.type,
        attrName = instruction.attrName,
        attributes = instruction.attributes,
        property,
        key,
        value;
    var knownAttribute = resources.mapAttribute(attrName);
    if (knownAttribute && attrName in attributes && knownAttribute !== attrName) {
      attributes[knownAttribute] = attributes[attrName];
      delete attributes[attrName];
    }
    for (key in attributes) {
      value = attributes[key];
      if (typeof value !== "string") {
        property = type.attributes[key];
        if (property !== undefined) {
          value.targetProperty = property.name;
        } else {
          value.targetProperty = key;
        }
      }
    }
  }
  function makeIntoInstructionTarget(element) {
    var value = element.getAttribute("class");
    element.setAttribute("class", value ? value += " au-target" : "au-target");
  }
  return {
    setters: [function(_resourceRegistry) {
      ResourceRegistry = _resourceRegistry.ResourceRegistry;
    }, function(_viewFactory) {
      ViewFactory = _viewFactory.ViewFactory;
    }, function(_bindingLanguage) {
      BindingLanguage = _bindingLanguage.BindingLanguage;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      nextInjectorId = 0;
      defaultCompileOptions = {targetShadowDOM: false};
      hasShadowDOM = !!HTMLElement.prototype.createShadowRoot;
      ViewCompiler = _export("ViewCompiler", (function() {
        function ViewCompiler(bindingLanguage) {
          this.bindingLanguage = bindingLanguage;
        }
        _prototypeProperties(ViewCompiler, {inject: {
            value: function inject() {
              return [BindingLanguage];
            },
            writable: true,
            configurable: true
          }}, {
          compile: {
            value: function compile(templateOrFragment, resources) {
              var options = arguments[2] === undefined ? defaultCompileOptions : arguments[2];
              var instructions = [],
                  targetShadowDOM = options.targetShadowDOM,
                  content;
              targetShadowDOM = targetShadowDOM && hasShadowDOM;
              if (options.beforeCompile) {
                options.beforeCompile(templateOrFragment);
              }
              if (templateOrFragment.content) {
                content = document.adoptNode(templateOrFragment.content, true);
              } else {
                content = templateOrFragment;
              }
              this.compileNode(content, resources, instructions, templateOrFragment, "root", !targetShadowDOM);
              content.insertBefore(document.createComment("<view>"), content.firstChild);
              content.appendChild(document.createComment("</view>"));
              return new ViewFactory(content, instructions, resources);
            },
            writable: true,
            configurable: true
          },
          compileNode: {
            value: function compileNode(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM) {
              switch (node.nodeType) {
                case 1:
                  return this.compileElement(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM);
                case 3:
                  var expression = this.bindingLanguage.parseText(resources, node.textContent);
                  if (expression) {
                    var marker = document.createElement("au-marker");
                    marker.className = "au-target";
                    node.parentNode.insertBefore(marker, node);
                    node.textContent = " ";
                    instructions.push({contentExpression: expression});
                  }
                  return node.nextSibling;
                case 11:
                  var currentChild = node.firstChild;
                  while (currentChild) {
                    currentChild = this.compileNode(currentChild, resources, instructions, node, parentInjectorId, targetLightDOM);
                  }
                  break;
              }
              return node.nextSibling;
            },
            writable: true,
            configurable: true
          },
          compileElement: {
            value: function compileElement(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM) {
              var tagName = node.tagName.toLowerCase(),
                  attributes = node.attributes,
                  expressions = [],
                  behaviorInstructions = [],
                  providers = [],
                  bindingLanguage = this.bindingLanguage,
                  liftingInstruction,
                  viewFactory,
                  type,
                  elementInstruction,
                  elementProperty,
                  i,
                  ii,
                  attr,
                  attrName,
                  attrValue,
                  instruction,
                  info,
                  property,
                  knownAttribute;
              if (tagName === "content") {
                if (targetLightDOM) {
                  instructions.push({
                    parentInjectorId: parentInjectorId,
                    contentSelector: true,
                    selector: node.getAttribute("select"),
                    suppressBind: true
                  });
                  makeIntoInstructionTarget(node);
                }
                return node.nextSibling;
              } else if (tagName === "template") {
                viewFactory = this.compile(node, resources);
              } else {
                type = resources.getElement(tagName);
                if (type) {
                  elementInstruction = {
                    type: type,
                    attributes: {}
                  };
                  behaviorInstructions.push(elementInstruction);
                }
              }
              for (i = 0, ii = attributes.length; i < ii; ++i) {
                attr = attributes[i];
                attrName = attr.name;
                attrValue = attr.value;
                info = bindingLanguage.inspectAttribute(resources, attrName, attrValue);
                type = resources.getAttribute(info.attrName);
                elementProperty = null;
                if (type) {
                  knownAttribute = resources.mapAttribute(info.attrName);
                  if (knownAttribute) {
                    property = type.attributes[knownAttribute];
                    if (property) {
                      info.defaultBindingMode = property.defaultBindingMode;
                      if (!info.command && !info.expression) {
                        info.command = property.hasOptions ? "options" : null;
                      }
                    }
                  }
                } else if (elementInstruction) {
                  elementProperty = elementInstruction.type.attributes[info.attrName];
                  if (elementProperty) {
                    info.defaultBindingMode = elementProperty.defaultBindingMode;
                    if (!info.command && !info.expression) {
                      info.command = elementProperty.hasOptions ? "options" : null;
                    }
                  }
                }
                if (elementProperty) {
                  instruction = bindingLanguage.createAttributeInstruction(resources, node, info, elementInstruction);
                } else {
                  instruction = bindingLanguage.createAttributeInstruction(resources, node, info);
                }
                if (instruction) {
                  if (instruction.alteredAttr) {
                    type = resources.getAttribute(instruction.attrName);
                  }
                  if (instruction.discrete) {
                    expressions.push(instruction);
                  } else {
                    if (type) {
                      instruction.type = type;
                      configureProperties(instruction, resources);
                      if (type.liftsContent) {
                        instruction.originalAttrName = attrName;
                        liftingInstruction = instruction;
                        break;
                      } else {
                        behaviorInstructions.push(instruction);
                      }
                    } else if (elementProperty) {
                      elementInstruction.attributes[info.attrName].targetProperty = elementProperty.name;
                    } else {
                      expressions.push(instruction.attributes[instruction.attrName]);
                    }
                  }
                } else {
                  if (type) {
                    instruction = {
                      attrName: attrName,
                      type: type,
                      attributes: {}
                    };
                    instruction.attributes[resources.mapAttribute(attrName)] = attrValue;
                    if (type.liftsContent) {
                      instruction.originalAttrName = attrName;
                      liftingInstruction = instruction;
                      break;
                    } else {
                      behaviorInstructions.push(instruction);
                    }
                  } else if (elementProperty) {
                    elementInstruction.attributes[attrName] = attrValue;
                  }
                }
              }
              if (liftingInstruction) {
                liftingInstruction.viewFactory = viewFactory;
                node = liftingInstruction.type.compile(this, resources, node, liftingInstruction, parentNode);
                makeIntoInstructionTarget(node);
                instructions.push({
                  anchorIsContainer: false,
                  parentInjectorId: parentInjectorId,
                  expressions: [],
                  behaviorInstructions: [liftingInstruction],
                  viewFactory: liftingInstruction.viewFactory,
                  providers: [liftingInstruction.type.target]
                });
              } else {
                for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
                  instruction = behaviorInstructions[i];
                  instruction.type.compile(this, resources, node, instruction, parentNode);
                  providers.push(instruction.type.target);
                }
                var injectorId = behaviorInstructions.length ? getNextInjectorId() : false;
                if (expressions.length || behaviorInstructions.length) {
                  makeIntoInstructionTarget(node);
                  instructions.push({
                    anchorIsContainer: true,
                    injectorId: injectorId,
                    parentInjectorId: parentInjectorId,
                    expressions: expressions,
                    behaviorInstructions: behaviorInstructions,
                    providers: providers
                  });
                }
                var currentChild = node.firstChild;
                while (currentChild) {
                  currentChild = this.compileNode(currentChild, resources, instructions, node, injectorId || parentInjectorId, targetLightDOM);
                }
              }
              return node.nextSibling;
            },
            writable: true,
            configurable: true
          }
        });
        return ViewCompiler;
      })());
    }
  };
});



System.register("github:aurelia/templating-binding@0.8.4/system/index", ["aurelia-templating", "./binding-language", "./syntax-interpreter"], function(_export) {
  "use strict";
  var BindingLanguage,
      TemplatingBindingLanguage,
      SyntaxInterpreter;
  function install(aurelia) {
    var instance,
        getInstance = function(c) {
          return instance || (instance = c.invoke(TemplatingBindingLanguage));
        };
    if (aurelia.container.hasHandler(TemplatingBindingLanguage)) {
      instance = aurelia.container.get(TemplatingBindingLanguage);
    } else {
      aurelia.container.registerHandler(TemplatingBindingLanguage, getInstance);
    }
    aurelia.container.registerHandler(BindingLanguage, getInstance);
  }
  return {
    setters: [function(_aureliaTemplating) {
      BindingLanguage = _aureliaTemplating.BindingLanguage;
    }, function(_bindingLanguage) {
      TemplatingBindingLanguage = _bindingLanguage.TemplatingBindingLanguage;
    }, function(_syntaxInterpreter) {
      SyntaxInterpreter = _syntaxInterpreter.SyntaxInterpreter;
    }],
    execute: function() {
      _export("TemplatingBindingLanguage", TemplatingBindingLanguage);
      _export("SyntaxInterpreter", SyntaxInterpreter);
      _export("install", install);
    }
  };
});



System.register("github:aurelia/route-recognizer@0.2.2", ["github:aurelia/route-recognizer@0.2.2/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/router@0.5.5/system/pipeline-provider", ["aurelia-dependency-injection", "./pipeline", "./navigation-plan", "./model-binding", "./route-loading", "./navigation-context", "./activation"], function(_export) {
  "use strict";
  var Container,
      Pipeline,
      BuildNavigationPlanStep,
      ApplyModelBindersStep,
      LoadRouteStep,
      CommitChangesStep,
      CanDeactivatePreviousStep,
      CanActivateNextStep,
      DeactivatePreviousStep,
      ActivateNextStep,
      _prototypeProperties,
      PipelineProvider;
  return {
    setters: [function(_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
    }, function(_pipeline) {
      Pipeline = _pipeline.Pipeline;
    }, function(_navigationPlan) {
      BuildNavigationPlanStep = _navigationPlan.BuildNavigationPlanStep;
    }, function(_modelBinding) {
      ApplyModelBindersStep = _modelBinding.ApplyModelBindersStep;
    }, function(_routeLoading) {
      LoadRouteStep = _routeLoading.LoadRouteStep;
    }, function(_navigationContext) {
      CommitChangesStep = _navigationContext.CommitChangesStep;
    }, function(_activation) {
      CanDeactivatePreviousStep = _activation.CanDeactivatePreviousStep;
      CanActivateNextStep = _activation.CanActivateNextStep;
      DeactivatePreviousStep = _activation.DeactivatePreviousStep;
      ActivateNextStep = _activation.ActivateNextStep;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      PipelineProvider = _export("PipelineProvider", (function() {
        function PipelineProvider(container) {
          this.container = container;
          this.steps = [BuildNavigationPlanStep, CanDeactivatePreviousStep, LoadRouteStep, ApplyModelBindersStep, CanActivateNextStep, DeactivatePreviousStep, ActivateNextStep, CommitChangesStep];
        }
        _prototypeProperties(PipelineProvider, {inject: {
            value: function inject() {
              return [Container];
            },
            writable: true,
            configurable: true
          }}, {createPipeline: {
            value: function createPipeline(navigationContext) {
              var _this = this;
              var pipeline = new Pipeline();
              this.steps.forEach(function(step) {
                return pipeline.withStep(_this.container.get(step));
              });
              return pipeline;
            },
            writable: true,
            configurable: true
          }});
        return PipelineProvider;
      })());
    }
  };
});



System.register("github:aurelia/templating-resources@0.8.7", ["github:aurelia/templating-resources@0.8.7/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("app/app", ["aurelia-router", "./app.html!"], function(_export) {
  "use strict";
  var Router,
      view,
      _prototypeProperties,
      _classCallCheck,
      App;
  return {
    setters: [function(_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function(_appHtml) {
      view = _appHtml["default"];
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _classCallCheck = function(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };
      App = _export("App", (function() {
        function App(router) {
          _classCallCheck(this, App);
          this.router = router;
          this.router.configure(function(config) {
            config.title = "Application Title";
            config.map([{
              route: "blog",
              moduleId: "./blog/routes/index",
              nav: true,
              title: "Blog"
            }, {
              route: "",
              moduleId: "./redirect",
              redirect: "/blog"
            }]);
          });
        }
        _prototypeProperties(App, {inject: {
            value: function inject() {
              return [Router];
            },
            writable: true,
            configurable: true
          }}, {getViewStrategy: {
            value: function getViewStrategy() {
              return view;
            },
            writable: true,
            configurable: true
          }});
        return App;
      })());
    }
  };
});



System.register("app/blog/bundle", ["./services/blog", "./routes/index", "./routes/list", "./routes/post", "./routes/tag"], function(_export) {
  "use strict";
  return {
    setters: [function(_servicesBlog) {}, function(_routesIndex) {}, function(_routesList) {}, function(_routesPost) {}, function(_routesTag) {}],
    execute: function() {}
  };
});



System.register("github:aurelia/loader-default@0.4.1/system/index", ["aurelia-metadata", "aurelia-loader", "aurelia-path"], function(_export) {
  "use strict";
  var Origin,
      Loader,
      join,
      _prototypeProperties,
      _inherits,
      sys,
      DefaultLoader;
  function ensureOriginOnExports(executed, name) {
    var target = executed,
        key,
        exportedValue;
    if (target.__useDefault) {
      target = target["default"];
    }
    Origin.set(target, new Origin(name, "default"));
    for (key in target) {
      exportedValue = target[key];
      if (typeof exportedValue === "function") {
        Origin.set(exportedValue, new Origin(name, key));
      }
    }
    return executed;
  }
  return {
    setters: [function(_aureliaMetadata) {
      Origin = _aureliaMetadata.Origin;
    }, function(_aureliaLoader) {
      Loader = _aureliaLoader.Loader;
    }, function(_aureliaPath) {
      join = _aureliaPath.join;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          subClass.__proto__ = superClass;
      };
      if (!window.System || !window.System["import"]) {
        sys = window.System = window.System || {};
        sys.polyfilled = true;
        sys.map = {};
        sys["import"] = function(moduleId) {
          return new Promise(function(resolve, reject) {
            require([moduleId], resolve, reject);
          });
        };
        sys.normalize = function(url) {
          return Promise.resolve(url);
        };
      }
      Loader.createDefaultLoader = function() {
        return new DefaultLoader();
      };
      DefaultLoader = (function(Loader) {
        function DefaultLoader() {
          this.baseUrl = System.baseUrl;
          this.baseViewUrl = System.baseViewUrl || System.baseUrl;
          this.registry = {};
        }
        _inherits(DefaultLoader, Loader);
        _prototypeProperties(DefaultLoader, null, {
          loadModule: {
            value: function loadModule(id, baseUrl) {
              var _this = this;
              baseUrl = baseUrl === undefined ? this.baseUrl : baseUrl;
              if (baseUrl && !id.startsWith(baseUrl)) {
                id = join(baseUrl, id);
              }
              return System.normalize(id).then(function(newId) {
                var existing = _this.registry[newId];
                if (existing) {
                  return existing;
                }
                return System["import"](newId).then(function(m) {
                  _this.registry[newId] = m;
                  return ensureOriginOnExports(m, newId);
                });
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          loadAllModules: {
            value: function loadAllModules(ids) {
              var loads = [],
                  i,
                  ii,
                  loader = this.loader;
              for (i = 0, ii = ids.length; i < ii; ++i) {
                loads.push(this.loadModule(ids[i]));
              }
              return Promise.all(loads);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          loadTemplate: {
            value: function loadTemplate(url) {
              if (this.baseViewUrl && !url.startsWith(this.baseViewUrl)) {
                url = join(this.baseViewUrl, url);
              }
              return this.importTemplate(url);
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });
        return DefaultLoader;
      })(Loader);
      _export("DefaultLoader", DefaultLoader);
    }
  };
});



System.register("github:aurelia/dependency-injection@0.4.2", ["github:aurelia/dependency-injection@0.4.2/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/binding@0.3.4/system/index", ["aurelia-metadata", "./value-converter", "./event-manager", "./observer-locator", "./array-change-records", "./binding-modes", "./parser", "./binding-expression", "./listener-expression", "./name-expression", "./call-expression", "./dirty-checking"], function(_export) {
  "use strict";
  var Metadata,
      ValueConverter;
  return {
    setters: [function(_aureliaMetadata) {
      Metadata = _aureliaMetadata.Metadata;
    }, function(_valueConverter) {
      ValueConverter = _valueConverter.ValueConverter;
      _export("ValueConverter", _valueConverter.ValueConverter);
    }, function(_eventManager) {
      _export("EventManager", _eventManager.EventManager);
    }, function(_observerLocator) {
      _export("ObserverLocator", _observerLocator.ObserverLocator);
    }, function(_arrayChangeRecords) {
      _export("calcSplices", _arrayChangeRecords.calcSplices);
    }, function(_bindingModes) {
      for (var _key in _bindingModes) {
        _export(_key, _bindingModes[_key]);
      }
    }, function(_parser) {
      _export("Parser", _parser.Parser);
    }, function(_bindingExpression) {
      _export("BindingExpression", _bindingExpression.BindingExpression);
    }, function(_listenerExpression) {
      _export("ListenerExpression", _listenerExpression.ListenerExpression);
    }, function(_nameExpression) {
      _export("NameExpression", _nameExpression.NameExpression);
    }, function(_callExpression) {
      _export("CallExpression", _callExpression.CallExpression);
    }, function(_dirtyChecking) {
      _export("DirtyChecker", _dirtyChecking.DirtyChecker);
    }],
    execute: function() {
      Metadata.configure.classHelper("valueConverter", ValueConverter);
    }
  };
});



System.register("github:aurelia/templating@0.8.11/system/view-engine", ["aurelia-logging", "aurelia-loader", "aurelia-path", "./view-compiler", "./resource-registry"], function(_export) {
  "use strict";
  var LogManager,
      Loader,
      relativeToFile,
      ViewCompiler,
      ResourceRegistry,
      ViewResources,
      _prototypeProperties,
      importSplitter,
      logger,
      ViewEngine;
  return {
    setters: [function(_aureliaLogging) {
      LogManager = _aureliaLogging;
    }, function(_aureliaLoader) {
      Loader = _aureliaLoader.Loader;
    }, function(_aureliaPath) {
      relativeToFile = _aureliaPath.relativeToFile;
    }, function(_viewCompiler) {
      ViewCompiler = _viewCompiler.ViewCompiler;
    }, function(_resourceRegistry) {
      ResourceRegistry = _resourceRegistry.ResourceRegistry;
      ViewResources = _resourceRegistry.ViewResources;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      importSplitter = /\s*,\s*/;
      logger = LogManager.getLogger("templating");
      ViewEngine = _export("ViewEngine", (function() {
        function ViewEngine(loader, viewCompiler, appResources) {
          this.loader = loader;
          this.viewCompiler = viewCompiler;
          this.appResources = appResources;
          this.importedViews = {};
        }
        _prototypeProperties(ViewEngine, {inject: {
            value: function inject() {
              return [Loader, ViewCompiler, ResourceRegistry];
            },
            writable: true,
            configurable: true
          }}, {
          loadViewFactory: {
            value: function loadViewFactory(url, compileOptions, associatedModuleId) {
              var _this = this;
              var existing = this.importedViews[url];
              if (existing) {
                return Promise.resolve(existing);
              }
              return this.loader.loadTemplate(url).then(function(template) {
                return _this.loadTemplateResources(url, template, associatedModuleId).then(function(resources) {
                  existing = _this.importedViews[url];
                  if (existing) {
                    return existing;
                  }
                  var viewFactory = _this.viewCompiler.compile(template, resources, compileOptions);
                  _this.importedViews[url] = viewFactory;
                  return viewFactory;
                });
              });
            },
            writable: true,
            configurable: true
          },
          loadTemplateResources: {
            value: function loadTemplateResources(templateUrl, template, associatedModuleId) {
              var _this = this;
              var importIds,
                  names,
                  i,
                  ii,
                  src,
                  current,
                  registry = new ViewResources(this.appResources, templateUrl),
                  dxImportElements = template.content.querySelectorAll("import"),
                  associatedModule;
              if (dxImportElements.length === 0 && !associatedModuleId) {
                return Promise.resolve(registry);
              }
              importIds = new Array(dxImportElements.length);
              names = new Array(dxImportElements.length);
              for (i = 0, ii = dxImportElements.length; i < ii; ++i) {
                current = dxImportElements[i];
                src = current.getAttribute("from");
                if (!src) {
                  throw new Error("Import element in " + templateUrl + " has no \"from\" attribute.");
                }
                importIds[i] = src;
                names[i] = current.getAttribute("as");
                if (current.parentNode) {
                  current.parentNode.removeChild(current);
                }
              }
              importIds = importIds.map(function(x) {
                return relativeToFile(x, templateUrl);
              });
              logger.debug("importing resources for " + templateUrl, importIds);
              return this.resourceCoordinator.importResourcesFromModuleIds(importIds).then(function(toRegister) {
                for (i = 0, ii = toRegister.length; i < ii; ++i) {
                  toRegister[i].register(registry, names[i]);
                }
                if (associatedModuleId) {
                  associatedModule = _this.resourceCoordinator.getExistingModuleAnalysis(associatedModuleId);
                  if (associatedModule) {
                    associatedModule.register(registry);
                  }
                }
                return registry;
              });
            },
            writable: true,
            configurable: true
          }
        });
        return ViewEngine;
      })());
    }
  };
});



System.register("github:aurelia/templating-binding@0.8.4", ["github:aurelia/templating-binding@0.8.4/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/router@0.5.5/system/router", ["aurelia-route-recognizer", "aurelia-path", "./navigation-context", "./navigation-instruction", "./router-configuration", "./util"], function(_export) {
  "use strict";
  var RouteRecognizer,
      join,
      NavigationContext,
      NavigationInstruction,
      RouterConfiguration,
      processPotential,
      _prototypeProperties,
      Router;
  return {
    setters: [function(_aureliaRouteRecognizer) {
      RouteRecognizer = _aureliaRouteRecognizer.RouteRecognizer;
    }, function(_aureliaPath) {
      join = _aureliaPath.join;
    }, function(_navigationContext) {
      NavigationContext = _navigationContext.NavigationContext;
    }, function(_navigationInstruction) {
      NavigationInstruction = _navigationInstruction.NavigationInstruction;
    }, function(_routerConfiguration) {
      RouterConfiguration = _routerConfiguration.RouterConfiguration;
    }, function(_util) {
      processPotential = _util.processPotential;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      Router = _export("Router", (function() {
        function Router(container, history) {
          this.container = container;
          this.history = history;
          this.viewPorts = {};
          this.reset();
          this.baseUrl = "";
        }
        _prototypeProperties(Router, null, {
          registerViewPort: {
            value: function registerViewPort(viewPort, name) {
              name = name || "default";
              this.viewPorts[name] = viewPort;
            },
            writable: true,
            configurable: true
          },
          refreshBaseUrl: {
            value: function refreshBaseUrl() {
              if (this.parent) {
                var baseUrl = this.parent.currentInstruction.getBaseUrl();
                this.baseUrl = this.parent.baseUrl + baseUrl;
              }
            },
            writable: true,
            configurable: true
          },
          refreshNavigation: {
            value: function refreshNavigation() {
              var nav = this.navigation;
              for (var i = 0,
                  length = nav.length; i < length; i++) {
                var current = nav[i];
                if (!this.history._hasPushState) {
                  if (this.baseUrl[0] == "/") {
                    current.href = "#" + this.baseUrl;
                  } else {
                    current.href = "#/" + this.baseUrl;
                  }
                } else {
                  current.href = "/" + this.baseUrl;
                }
                if (current.href[current.href.length - 1] != "/") {
                  current.href += "/";
                }
                current.href += current.relativeHref;
              }
            },
            writable: true,
            configurable: true
          },
          configure: {
            value: function configure(callbackOrConfig) {
              if (typeof callbackOrConfig == "function") {
                var config = new RouterConfiguration();
                callbackOrConfig(config);
                config.exportToRouter(this);
              } else {
                callbackOrConfig.exportToRouter(this);
              }
              return this;
            },
            writable: true,
            configurable: true
          },
          navigate: {
            value: function navigate(fragment, options) {
              fragment = join(this.baseUrl, fragment);
              if (fragment === "")
                fragment = "/";
              return this.history.navigate(fragment, options);
            },
            writable: true,
            configurable: true
          },
          navigateBack: {
            value: function navigateBack() {
              this.history.navigateBack();
            },
            writable: true,
            configurable: true
          },
          createChild: {
            value: function createChild(container) {
              var childRouter = new Router(container || this.container.createChild(), this.history);
              childRouter.parent = this;
              return childRouter;
            },
            writable: true,
            configurable: true
          },
          createNavigationInstruction: {
            value: function createNavigationInstruction() {
              var url = arguments[0] === undefined ? "" : arguments[0];
              var parentInstruction = arguments[1] === undefined ? null : arguments[1];
              var results = this.recognizer.recognize(url);
              var fragment,
                  queryIndex,
                  queryString;
              if (!results || !results.length) {
                results = this.childRecognizer.recognize(url);
              }
              fragment = url;
              queryIndex = fragment.indexOf("?");
              if (queryIndex != -1) {
                fragment = url.substr(0, queryIndex);
                queryString = url.substr(queryIndex + 1);
              }
              if ((!results || !results.length) && this.catchAllHandler) {
                results = [{
                  config: {navModel: {}},
                  handler: this.catchAllHandler,
                  params: {path: fragment}
                }];
              }
              if (results && results.length) {
                var first = results[0],
                    fragment = url,
                    queryIndex = fragment.indexOf("?"),
                    queryString;
                if (queryIndex != -1) {
                  fragment = url.substr(0, queryIndex);
                  queryString = url.substr(queryIndex + 1);
                }
                var instruction = new NavigationInstruction(fragment, queryString, first.params, first.queryParams || results.queryParams, first.config || first.handler, parentInstruction);
                if (typeof first.handler == "function") {
                  return first.handler(instruction).then(function(instruction) {
                    if (!("viewPorts" in instruction.config)) {
                      instruction.config.viewPorts = {"default": {moduleId: instruction.config.moduleId}};
                    }
                    return instruction;
                  });
                }
                return Promise.resolve(instruction);
              } else {
                return Promise.reject(new Error("Route Not Found: " + url));
              }
            },
            writable: true,
            configurable: true
          },
          createNavigationContext: {
            value: function createNavigationContext(instruction) {
              return new NavigationContext(this, instruction);
            },
            writable: true,
            configurable: true
          },
          generate: {
            value: function generate(name, params) {
              return this.recognizer.generate(name, params);
            },
            writable: true,
            configurable: true
          },
          addRoute: {
            value: function addRoute(config) {
              var navModel = arguments[1] === undefined ? {} : arguments[1];
              if (!("viewPorts" in config)) {
                config.viewPorts = {"default": {
                    moduleId: config.moduleId,
                    view: config.view
                  }};
              }
              navModel.title = navModel.title || config.title;
              navModel.settings = config.settings || (config.settings = {});
              this.routes.push(config);
              this.recognizer.add([{
                path: config.route,
                handler: config
              }]);
              if (config.route) {
                var withChild = JSON.parse(JSON.stringify(config));
                withChild.route += "/*childRoute";
                withChild.hasChildRouter = true;
                this.childRecognizer.add([{
                  path: withChild.route,
                  handler: withChild
                }]);
                withChild.navModel = navModel;
                withChild.settings = config.settings;
              }
              config.navModel = navModel;
              if ((config.nav || "order" in navModel) && this.navigation.indexOf(navModel) === -1) {
                navModel.order = navModel.order || config.nav;
                navModel.href = navModel.href || config.href;
                navModel.isActive = false;
                navModel.config = config;
                if (!config.href) {
                  navModel.relativeHref = config.route;
                  navModel.href = "";
                }
                if (typeof navModel.order != "number") {
                  navModel.order = ++this.fallbackOrder;
                }
                this.navigation.push(navModel);
                this.navigation = this.navigation.sort(function(a, b) {
                  return a.order - b.order;
                });
              }
            },
            writable: true,
            configurable: true
          },
          handleUnknownRoutes: {
            value: function handleUnknownRoutes(config) {
              var callback = function(instruction) {
                return new Promise(function(resolve, reject) {
                  function done(inst) {
                    inst = inst || instruction;
                    inst.config.route = inst.params.path;
                    resolve(inst);
                  }
                  if (!config) {
                    instruction.config.moduleId = instruction.fragment;
                    done(instruction);
                  } else if (typeof config == "string") {
                    instruction.config.moduleId = config;
                    done(instruction);
                  } else if (typeof config == "function") {
                    processPotential(config(instruction), done, reject);
                  } else {
                    instruction.config = config;
                    done(instruction);
                  }
                });
              };
              this.catchAllHandler = callback;
            },
            writable: true,
            configurable: true
          },
          reset: {
            value: function reset() {
              this.fallbackOrder = 100;
              this.recognizer = new RouteRecognizer();
              this.childRecognizer = new RouteRecognizer();
              this.routes = [];
              this.isNavigating = false;
              this.navigation = [];
            },
            writable: true,
            configurable: true
          }
        });
        return Router;
      })());
    }
  };
});



System.register("github:aurelia/router@0.5.5/system/app-router", ["aurelia-dependency-injection", "aurelia-history", "./router", "./pipeline-provider", "./navigation-commands"], function(_export) {
  "use strict";
  var Container,
      History,
      Router,
      PipelineProvider,
      isNavigationCommand,
      _prototypeProperties,
      _get,
      _inherits,
      AppRouter;
  function findAnchor(el) {
    while (el) {
      if (el.tagName === "A")
        return el;
      el = el.parentNode;
    }
  }
  function handleLinkClick(evt) {
    if (!this.isActive) {
      return ;
    }
    var target = findAnchor(evt.target);
    if (!target) {
      return ;
    }
    if (this.history._hasPushState) {
      if (!evt.altKey && !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && targetIsThisWindow(target)) {
        var href = target.getAttribute("href");
        if (href !== null && !(href.charAt(0) === "#" || /^[a-z]+:/i.test(href))) {
          evt.preventDefault();
          this.history.navigate(href);
        }
      }
    }
  }
  function targetIsThisWindow(target) {
    var targetWindow = target.getAttribute("target");
    return !targetWindow || targetWindow === window.name || targetWindow === "_self" || targetWindow === "top" && window === window.top;
  }
  return {
    setters: [function(_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
    }, function(_aureliaHistory) {
      History = _aureliaHistory.History;
    }, function(_router) {
      Router = _router.Router;
    }, function(_pipelineProvider) {
      PipelineProvider = _pipelineProvider.PipelineProvider;
    }, function(_navigationCommands) {
      isNavigationCommand = _navigationCommands.isNavigationCommand;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _get = function get(object, property, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);
          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc && desc.writable) {
          return desc.value;
        } else {
          var getter = desc.get;
          if (getter === undefined) {
            return undefined;
          }
          return getter.call(receiver);
        }
      };
      _inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          subClass.__proto__ = superClass;
      };
      AppRouter = _export("AppRouter", (function(Router) {
        function AppRouter(container, history, pipelineProvider) {
          _get(Object.getPrototypeOf(AppRouter.prototype), "constructor", this).call(this, container, history);
          this.pipelineProvider = pipelineProvider;
          document.addEventListener("click", handleLinkClick.bind(this), true);
        }
        _inherits(AppRouter, Router);
        _prototypeProperties(AppRouter, {inject: {
            value: function inject() {
              return [Container, History, PipelineProvider];
            },
            writable: true,
            configurable: true
          }}, {
          loadUrl: {
            value: function loadUrl(url) {
              var _this = this;
              return this.createNavigationInstruction(url).then(function(instruction) {
                return _this.queueInstruction(instruction);
              })["catch"](function(error) {
                console.error(error);
                if (_this.history.previousFragment) {
                  _this.navigate(_this.history.previousFragment, false);
                }
              });
            },
            writable: true,
            configurable: true
          },
          queueInstruction: {
            value: function queueInstruction(instruction) {
              var _this = this;
              return new Promise(function(resolve) {
                instruction.resolve = resolve;
                _this.queue.unshift(instruction);
                _this.dequeueInstruction();
              });
            },
            writable: true,
            configurable: true
          },
          dequeueInstruction: {
            value: function dequeueInstruction() {
              var _this = this;
              if (this.isNavigating) {
                return ;
              }
              var instruction = this.queue.shift();
              this.queue = [];
              if (!instruction) {
                return ;
              }
              this.isNavigating = true;
              var context = this.createNavigationContext(instruction);
              var pipeline = this.pipelineProvider.createPipeline(context);
              pipeline.run(context).then(function(result) {
                _this.isNavigating = false;
                if (result.completed) {
                  _this.history.previousFragment = instruction.fragment;
                }
                if (result.output instanceof Error) {
                  console.error(result.output);
                }
                if (isNavigationCommand(result.output)) {
                  result.output.navigate(_this);
                } else if (!result.completed) {
                  _this.navigate(_this.history.previousFragment || "", false);
                }
                instruction.resolve(result);
                _this.dequeueInstruction();
              })["catch"](function(error) {
                console.error(error);
              });
            },
            writable: true,
            configurable: true
          },
          registerViewPort: {
            value: function registerViewPort(viewPort, name) {
              var _this = this;
              _get(Object.getPrototypeOf(AppRouter.prototype), "registerViewPort", this).call(this, viewPort, name);
              if (!this.isActive) {
                if ("configureRouter" in this.container.viewModel) {
                  var result = this.container.viewModel.configureRouter() || Promise.resolve();
                  return result.then(function() {
                    return _this.activate();
                  });
                } else {
                  this.activate();
                }
              } else {
                this.dequeueInstruction();
              }
            },
            writable: true,
            configurable: true
          },
          activate: {
            value: function activate(options) {
              if (this.isActive) {
                return ;
              }
              this.isActive = true;
              this.options = Object.assign({routeHandler: this.loadUrl.bind(this)}, this.options, options);
              this.history.activate(this.options);
              this.dequeueInstruction();
            },
            writable: true,
            configurable: true
          },
          deactivate: {
            value: function deactivate() {
              this.isActive = false;
              this.history.deactivate();
            },
            writable: true,
            configurable: true
          },
          reset: {
            value: function reset() {
              _get(Object.getPrototypeOf(AppRouter.prototype), "reset", this).call(this);
              this.queue = [];
              this.options = null;
            },
            writable: true,
            configurable: true
          }
        });
        return AppRouter;
      })(Router));
    }
  };
});



System.register("github:aurelia/loader-default@0.4.1", ["github:aurelia/loader-default@0.4.1/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/binding@0.3.4", ["github:aurelia/binding@0.3.4/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/templating@0.8.11/system/custom-element", ["aurelia-metadata", "./behavior-instance", "./behaviors", "./content-selector", "./view-engine", "./view-strategy", "./util"], function(_export) {
  "use strict";
  var Metadata,
      Origin,
      ResourceType,
      BehaviorInstance,
      configureBehavior,
      ContentSelector,
      ViewEngine,
      ViewStrategy,
      hyphenate,
      _prototypeProperties,
      _inherits,
      defaultInstruction,
      contentSelectorFactoryOptions,
      hasShadowDOM,
      valuePropertyName,
      UseShadowDOM,
      SkipContentProcessing,
      CustomElement;
  return {
    setters: [function(_aureliaMetadata) {
      Metadata = _aureliaMetadata.Metadata;
      Origin = _aureliaMetadata.Origin;
      ResourceType = _aureliaMetadata.ResourceType;
    }, function(_behaviorInstance) {
      BehaviorInstance = _behaviorInstance.BehaviorInstance;
    }, function(_behaviors) {
      configureBehavior = _behaviors.configureBehavior;
    }, function(_contentSelector) {
      ContentSelector = _contentSelector.ContentSelector;
    }, function(_viewEngine) {
      ViewEngine = _viewEngine.ViewEngine;
    }, function(_viewStrategy) {
      ViewStrategy = _viewStrategy.ViewStrategy;
    }, function(_util) {
      hyphenate = _util.hyphenate;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      _inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          subClass.__proto__ = superClass;
      };
      defaultInstruction = {suppressBind: false};
      contentSelectorFactoryOptions = {suppressBind: true};
      hasShadowDOM = !!HTMLElement.prototype.createShadowRoot;
      valuePropertyName = "value";
      UseShadowDOM = _export("UseShadowDOM", function UseShadowDOM() {});
      SkipContentProcessing = _export("SkipContentProcessing", function SkipContentProcessing() {});
      CustomElement = _export("CustomElement", (function(ResourceType) {
        function CustomElement(tagName) {
          this.name = tagName;
          this.properties = [];
          this.attributes = {};
        }
        _inherits(CustomElement, ResourceType);
        _prototypeProperties(CustomElement, {convention: {
            value: function convention(name) {
              if (name.endsWith("CustomElement")) {
                return new CustomElement(hyphenate(name.substring(0, name.length - 13)));
              }
            },
            writable: true,
            configurable: true
          }}, {
          analyze: {
            value: function analyze(container, target) {
              var meta = Metadata.on(target);
              configureBehavior(container, this, target, valuePropertyName);
              this.configured = true;
              this.targetShadowDOM = meta.has(UseShadowDOM);
              this.skipContentProcessing = meta.has(SkipContentProcessing);
              this.usesShadowDOM = this.targetShadowDOM && hasShadowDOM;
            },
            writable: true,
            configurable: true
          },
          load: {
            value: function load(container, target, viewStrategy) {
              var _this = this;
              var options;
              viewStrategy = viewStrategy || ViewStrategy.getDefault(target);
              options = {
                targetShadowDOM: this.targetShadowDOM,
                beforeCompile: target.beforeCompile
              };
              if (!viewStrategy.moduleId) {
                viewStrategy.moduleId = Origin.get(target).moduleId;
              }
              return viewStrategy.loadViewFactory(container.get(ViewEngine), options).then(function(viewFactory) {
                _this.viewFactory = viewFactory;
                return _this;
              });
            },
            writable: true,
            configurable: true
          },
          register: {
            value: function register(registry, name) {
              registry.registerElement(name || this.name, this);
            },
            writable: true,
            configurable: true
          },
          compile: {
            value: function compile(compiler, resources, node, instruction) {
              if (!this.usesShadowDOM && !this.skipContentProcessing && node.hasChildNodes()) {
                var fragment = document.createDocumentFragment(),
                    currentChild = node.firstChild,
                    nextSibling;
                while (currentChild) {
                  nextSibling = currentChild.nextSibling;
                  fragment.appendChild(currentChild);
                  currentChild = nextSibling;
                }
                instruction.contentFactory = compiler.compile(fragment, resources);
              }
              instruction.suppressBind = true;
              return node;
            },
            writable: true,
            configurable: true
          },
          create: {
            value: function create(container) {
              var instruction = arguments[1] === undefined ? defaultInstruction : arguments[1];
              var element = arguments[2] === undefined ? null : arguments[2];
              var executionContext = instruction.executionContext || container.get(this.target),
                  behaviorInstance = new BehaviorInstance(this, executionContext, instruction),
                  host;
              if (this.viewFactory) {
                behaviorInstance.view = this.viewFactory.create(container, behaviorInstance.executionContext, instruction);
              }
              if (element) {
                element.primaryBehavior = behaviorInstance;
                if (!(this.apiName in element)) {
                  element[this.apiName] = behaviorInstance.executionContext;
                }
                if (behaviorInstance.view) {
                  if (this.usesShadowDOM) {
                    host = element.createShadowRoot();
                  } else {
                    host = element;
                    if (instruction.contentFactory) {
                      var contentView = instruction.contentFactory.create(container, null, contentSelectorFactoryOptions);
                      ContentSelector.applySelectors(contentView, behaviorInstance.view.contentSelectors, function(contentSelector, group) {
                        return contentSelector.add(group);
                      });
                      behaviorInstance.contentView = contentView;
                    }
                  }
                  if (this.childExpression) {
                    behaviorInstance.view.addBinding(this.childExpression.createBinding(host, behaviorInstance.executionContext));
                  }
                  behaviorInstance.view.appendNodesTo(host);
                }
              } else if (behaviorInstance.view) {
                behaviorInstance.view.owner = behaviorInstance;
              }
              return behaviorInstance;
            },
            writable: true,
            configurable: true
          }
        });
        return CustomElement;
      })(ResourceType));
    }
  };
});



System.register("github:aurelia/router@0.5.5/system/index", ["./router", "./app-router", "./pipeline-provider", "./navigation-commands", "./route-loading", "./router-configuration", "./navigation-plan"], function(_export) {
  "use strict";
  return {
    setters: [function(_router) {
      _export("Router", _router.Router);
    }, function(_appRouter) {
      _export("AppRouter", _appRouter.AppRouter);
    }, function(_pipelineProvider) {
      _export("PipelineProvider", _pipelineProvider.PipelineProvider);
    }, function(_navigationCommands) {
      _export("Redirect", _navigationCommands.Redirect);
    }, function(_routeLoading) {
      _export("RouteLoader", _routeLoading.RouteLoader);
    }, function(_routerConfiguration) {
      _export("RouterConfiguration", _routerConfiguration.RouterConfiguration);
    }, function(_navigationPlan) {
      _export("NO_CHANGE", _navigationPlan.NO_CHANGE);
      _export("INVOKE_LIFECYCLE", _navigationPlan.INVOKE_LIFECYCLE);
      _export("REPLACE", _navigationPlan.REPLACE);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/templating@0.8.11/system/property", ["./util", "aurelia-binding"], function(_export) {
  "use strict";
  var hyphenate,
      ONE_WAY,
      TWO_WAY,
      ONE_TIME,
      _inherits,
      _prototypeProperties,
      BehaviorProperty,
      OptionsProperty,
      BehaviorPropertyObserver;
  return {
    setters: [function(_util) {
      hyphenate = _util.hyphenate;
    }, function(_aureliaBinding) {
      ONE_WAY = _aureliaBinding.ONE_WAY;
      TWO_WAY = _aureliaBinding.TWO_WAY;
      ONE_TIME = _aureliaBinding.ONE_TIME;
    }],
    execute: function() {
      _inherits = function(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          subClass.__proto__ = superClass;
      };
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      BehaviorProperty = _export("BehaviorProperty", (function() {
        function BehaviorProperty(name, changeHandler, attribute, defaultValue, defaultBindingMode) {
          this.name = name;
          this.changeHandler = changeHandler;
          this.attribute = attribute || hyphenate(name);
          this.defaultValue = defaultValue;
          this.defaultBindingMode = defaultBindingMode || ONE_WAY;
        }
        _prototypeProperties(BehaviorProperty, null, {
          bindingIsTwoWay: {
            value: function bindingIsTwoWay() {
              this.defaultBindingMode = TWO_WAY;
              return this;
            },
            writable: true,
            configurable: true
          },
          bindingIsOneWay: {
            value: function bindingIsOneWay() {
              this.defaultBindingMode = ONE_WAY;
              return this;
            },
            writable: true,
            configurable: true
          },
          bindingIsOneTime: {
            value: function bindingIsOneTime() {
              this.defaultBindingMode = ONE_TIME;
              return this;
            },
            writable: true,
            configurable: true
          },
          define: {
            value: function define(taskQueue, behavior) {
              var that = this,
                  handlerName;
              this.taskQueue = taskQueue;
              if (!this.changeHandler) {
                handlerName = this.name + "Changed";
                if (handlerName in behavior.target.prototype) {
                  this.changeHandler = handlerName;
                }
              }
              behavior.properties.push(this);
              behavior.attributes[this.attribute] = this;
              Object.defineProperty(behavior.target.prototype, this.name, {
                configurable: true,
                enumerable: true,
                get: function() {
                  return this.__observers__[that.name].getValue();
                },
                set: function(value) {
                  this.__observers__[that.name].setValue(value);
                }
              });
            },
            writable: true,
            configurable: true
          },
          createObserver: {
            value: function createObserver(executionContext) {
              var _this = this;
              var selfSubscriber = null;
              if (this.changeHandler) {
                selfSubscriber = function(newValue, oldValue) {
                  return executionContext[_this.changeHandler](newValue, oldValue);
                };
              }
              return new BehaviorPropertyObserver(this.taskQueue, executionContext, this.name, selfSubscriber);
            },
            writable: true,
            configurable: true
          },
          initialize: {
            value: function initialize(executionContext, observerLookup, attributes, behaviorHandlesBind, boundProperties) {
              var selfSubscriber,
                  observer,
                  attribute;
              observer = observerLookup[this.name];
              if (attributes !== undefined) {
                selfSubscriber = observer.selfSubscriber;
                attribute = attributes[this.attribute];
                if (behaviorHandlesBind) {
                  observer.selfSubscriber = null;
                }
                if (typeof attribute === "string") {
                  executionContext[this.name] = attribute;
                  observer.call();
                } else if (attribute) {
                  boundProperties.push({
                    observer: observer,
                    binding: attribute.createBinding(executionContext)
                  });
                } else if (this.defaultValue) {
                  executionContext[this.name] = this.defaultValue;
                  observer.call();
                }
                observer.selfSubscriber = selfSubscriber;
              }
              observer.publishing = true;
            },
            writable: true,
            configurable: true
          }
        });
        return BehaviorProperty;
      })());
      OptionsProperty = _export("OptionsProperty", (function(BehaviorProperty) {
        function OptionsProperty(attribute) {
          for (var _len = arguments.length,
              rest = Array(_len > 1 ? _len - 1 : 0),
              _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
          }
          if (typeof attribute === "string") {
            this.attribute = attribute;
          } else if (attribute) {
            rest.unshift(attribute);
          }
          this.properties = rest;
          this.hasOptions = true;
        }
        _inherits(OptionsProperty, BehaviorProperty);
        _prototypeProperties(OptionsProperty, null, {
          dynamic: {
            value: function dynamic() {
              this.isDynamic = true;
              return this;
            },
            writable: true,
            configurable: true
          },
          withProperty: {
            value: function withProperty(name, changeHandler, attribute, defaultValue, defaultBindingMode) {
              this.properties.push(new BehaviorProperty(name, changeHandler, attribute, defaultValue, defaultBindingMode));
              return this;
            },
            writable: true,
            configurable: true
          },
          define: {
            value: function define(taskQueue, behavior) {
              var i,
                  ii,
                  properties = this.properties;
              this.attribute = this.attribute || behavior.name;
              behavior.properties.push(this);
              behavior.attributes[this.attribute] = this;
              for (i = 0, ii = properties.length; i < ii; ++i) {
                properties[i].define(taskQueue, behavior);
              }
            },
            writable: true,
            configurable: true
          },
          createObserver: {
            value: function createObserver(executionContext) {},
            writable: true,
            configurable: true
          },
          initialize: {
            value: function initialize(executionContext, observerLookup, attributes, behaviorHandlesBind, boundProperties) {
              var value,
                  key,
                  info;
              if (!this.isDynamic) {
                return ;
              }
              for (key in attributes) {
                this.createDynamicProperty(executionContext, observerLookup, behaviorHandlesBind, key, attributes[key], boundProperties);
              }
            },
            writable: true,
            configurable: true
          },
          createDynamicProperty: {
            value: function createDynamicProperty(executionContext, observerLookup, behaviorHandlesBind, name, attribute, boundProperties) {
              var changeHandlerName = name + "Changed",
                  selfSubscriber = null,
                  observer,
                  info;
              if (changeHandlerName in executionContext) {
                selfSubscriber = function(newValue, oldValue) {
                  return executionContext[changeHandlerName](newValue, oldValue);
                };
              }
              observer = observerLookup[name] = new BehaviorPropertyObserver(this.taskQueue, executionContext, name, selfSubscriber);
              Object.defineProperty(executionContext, name, {
                configurable: true,
                enumerable: true,
                get: observer.getValue.bind(observer),
                set: observer.setValue.bind(observer)
              });
              if (behaviorHandlesBind) {
                observer.selfSubscriber = null;
              }
              if (typeof attribute === "string") {
                executionContext[name] = attribute;
                observer.call();
              } else if (attribute) {
                info = {
                  observer: observer,
                  binding: attribute.createBinding(executionContext)
                };
                boundProperties.push(info);
              }
              observer.publishing = true;
              observer.selfSubscriber = selfSubscriber;
            },
            writable: true,
            configurable: true
          }
        });
        return OptionsProperty;
      })(BehaviorProperty));
      BehaviorPropertyObserver = (function() {
        function BehaviorPropertyObserver(taskQueue, obj, propertyName, selfSubscriber) {
          this.taskQueue = taskQueue;
          this.obj = obj;
          this.propertyName = propertyName;
          this.callbacks = [];
          this.notqueued = true;
          this.publishing = false;
          this.selfSubscriber = selfSubscriber;
        }
        _prototypeProperties(BehaviorPropertyObserver, null, {
          getValue: {
            value: function getValue() {
              return this.currentValue;
            },
            writable: true,
            configurable: true
          },
          setValue: {
            value: function setValue(newValue) {
              var oldValue = this.currentValue;
              if (oldValue != newValue) {
                if (this.publishing && this.notqueued) {
                  this.notqueued = false;
                  this.taskQueue.queueMicroTask(this);
                }
                this.oldValue = oldValue;
                this.currentValue = newValue;
              }
            },
            writable: true,
            configurable: true
          },
          call: {
            value: function call() {
              var callbacks = this.callbacks,
                  i = callbacks.length,
                  oldValue = this.oldValue,
                  newValue = this.currentValue;
              this.notqueued = true;
              if (newValue != oldValue) {
                if (this.selfSubscriber !== null) {
                  this.selfSubscriber(newValue, oldValue);
                }
                while (i--) {
                  callbacks[i](newValue, oldValue);
                }
                this.oldValue = newValue;
              }
            },
            writable: true,
            configurable: true
          },
          subscribe: {
            value: function subscribe(callback) {
              var callbacks = this.callbacks;
              callbacks.push(callback);
              return function() {
                callbacks.splice(callbacks.indexOf(callback), 1);
              };
            },
            writable: true,
            configurable: true
          }
        });
        return BehaviorPropertyObserver;
      })();
    }
  };
});



System.register("github:aurelia/router@0.5.5", ["github:aurelia/router@0.5.5/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/templating@0.8.11/system/index", ["aurelia-metadata", "./property", "./attached-behavior", "./children", "./custom-element", "./element-config", "./template-controller", "./view-strategy", "./resource-coordinator", "./resource-registry", "./view-compiler", "./view-engine", "./view-factory", "./view-slot", "./binding-language", "./composition-engine"], function(_export) {
  "use strict";
  var Metadata,
      BehaviorProperty,
      OptionsProperty,
      AttachedBehavior,
      ChildObserver,
      CustomElement,
      UseShadowDOM,
      SkipContentProcessing,
      ElementConfig,
      TemplateController,
      UseView,
      NoView,
      Behavior;
  return {
    setters: [function(_aureliaMetadata) {
      Metadata = _aureliaMetadata.Metadata;
    }, function(_property) {
      BehaviorProperty = _property.BehaviorProperty;
      OptionsProperty = _property.OptionsProperty;
      _export("BehaviorProperty", _property.BehaviorProperty);
      _export("OptionsProperty", _property.OptionsProperty);
    }, function(_attachedBehavior) {
      AttachedBehavior = _attachedBehavior.AttachedBehavior;
      _export("AttachedBehavior", _attachedBehavior.AttachedBehavior);
    }, function(_children) {
      ChildObserver = _children.ChildObserver;
      _export("ChildObserver", _children.ChildObserver);
    }, function(_customElement) {
      CustomElement = _customElement.CustomElement;
      UseShadowDOM = _customElement.UseShadowDOM;
      SkipContentProcessing = _customElement.SkipContentProcessing;
      _export("CustomElement", _customElement.CustomElement);
      _export("UseShadowDOM", _customElement.UseShadowDOM);
      _export("SkipContentProcessing", _customElement.SkipContentProcessing);
    }, function(_elementConfig) {
      ElementConfig = _elementConfig.ElementConfig;
      _export("ElementConfig", _elementConfig.ElementConfig);
    }, function(_templateController) {
      TemplateController = _templateController.TemplateController;
      _export("TemplateController", _templateController.TemplateController);
    }, function(_viewStrategy) {
      UseView = _viewStrategy.UseView;
      NoView = _viewStrategy.NoView;
      _export("ViewStrategy", _viewStrategy.ViewStrategy);
      _export("UseView", _viewStrategy.UseView);
      _export("ConventionalView", _viewStrategy.ConventionalView);
      _export("NoView", _viewStrategy.NoView);
    }, function(_resourceCoordinator) {
      _export("ResourceCoordinator", _resourceCoordinator.ResourceCoordinator);
    }, function(_resourceRegistry) {
      _export("ResourceRegistry", _resourceRegistry.ResourceRegistry);
      _export("ViewResources", _resourceRegistry.ViewResources);
    }, function(_viewCompiler) {
      _export("ViewCompiler", _viewCompiler.ViewCompiler);
    }, function(_viewEngine) {
      _export("ViewEngine", _viewEngine.ViewEngine);
    }, function(_viewFactory) {
      _export("ViewFactory", _viewFactory.ViewFactory);
      _export("BoundViewFactory", _viewFactory.BoundViewFactory);
    }, function(_viewSlot) {
      _export("ViewSlot", _viewSlot.ViewSlot);
    }, function(_bindingLanguage) {
      _export("BindingLanguage", _bindingLanguage.BindingLanguage);
    }, function(_compositionEngine) {
      _export("CompositionEngine", _compositionEngine.CompositionEngine);
    }],
    execute: function() {
      Behavior = _export("Behavior", Metadata);
      Metadata.configure.classHelper("withProperty", BehaviorProperty);
      Metadata.configure.classHelper("withOptions", OptionsProperty);
      Metadata.configure.classHelper("attachedBehavior", AttachedBehavior);
      Metadata.configure.classHelper("syncChildren", ChildObserver);
      Metadata.configure.classHelper("customElement", CustomElement);
      Metadata.configure.classHelper("useShadowDOM", UseShadowDOM);
      Metadata.configure.classHelper("elementConfig", ElementConfig);
      Metadata.configure.classHelper("templateController", TemplateController);
      Metadata.configure.classHelper("useView", UseView);
      Metadata.configure.classHelper("noView", NoView);
      Metadata.configure.classHelper("skipContentProcessing", SkipContentProcessing);
    }
  };
});



System.register("github:aurelia/templating-router@0.9.2/system/index", ["aurelia-router", "./route-loader", "./router-view"], function(_export) {
  "use strict";
  var Router,
      AppRouter,
      RouteLoader,
      TemplatingRouteLoader,
      RouterView;
  function install(aurelia) {
    aurelia.withSingleton(RouteLoader, TemplatingRouteLoader).withSingleton(Router, AppRouter).withResources(RouterView);
  }
  return {
    setters: [function(_aureliaRouter) {
      Router = _aureliaRouter.Router;
      AppRouter = _aureliaRouter.AppRouter;
      RouteLoader = _aureliaRouter.RouteLoader;
    }, function(_routeLoader) {
      TemplatingRouteLoader = _routeLoader.TemplatingRouteLoader;
    }, function(_routerView) {
      RouterView = _routerView.RouterView;
    }],
    execute: function() {
      _export("TemplatingRouteLoader", TemplatingRouteLoader);
      _export("RouterView", RouterView);
      _export("install", install);
    }
  };
});



System.register("github:aurelia/templating@0.8.11", ["github:aurelia/templating@0.8.11/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/templating-router@0.9.2", ["github:aurelia/templating-router@0.9.2/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/framework@0.8.6/system/aurelia", ["aurelia-logging", "aurelia-dependency-injection", "aurelia-loader", "aurelia-templating", "./plugins"], function(_export) {
  "use strict";
  var LogManager,
      Container,
      Loader,
      BindingLanguage,
      ResourceCoordinator,
      ViewSlot,
      ResourceRegistry,
      CompositionEngine,
      Plugins,
      _prototypeProperties,
      logger,
      slice,
      CustomEvent,
      Aurelia;
  function loadResources(container, resourcesToLoad, appResources) {
    var resourceCoordinator = container.get(ResourceCoordinator),
        current;
    function next() {
      if (current = resourcesToLoad.shift()) {
        return resourceCoordinator.importResources(current, current.resourceManifestUrl).then(function(resources) {
          resources.forEach(function(x) {
            return x.register(appResources);
          });
          return next();
        });
      }
      return Promise.resolve();
    }
    return next();
  }
  return {
    setters: [function(_aureliaLogging) {
      LogManager = _aureliaLogging;
    }, function(_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
    }, function(_aureliaLoader) {
      Loader = _aureliaLoader.Loader;
    }, function(_aureliaTemplating) {
      BindingLanguage = _aureliaTemplating.BindingLanguage;
      ResourceCoordinator = _aureliaTemplating.ResourceCoordinator;
      ViewSlot = _aureliaTemplating.ViewSlot;
      ResourceRegistry = _aureliaTemplating.ResourceRegistry;
      CompositionEngine = _aureliaTemplating.CompositionEngine;
    }, function(_plugins) {
      Plugins = _plugins.Plugins;
    }],
    execute: function() {
      _prototypeProperties = function(child, staticProps, instanceProps) {
        if (staticProps)
          Object.defineProperties(child, staticProps);
        if (instanceProps)
          Object.defineProperties(child.prototype, instanceProps);
      };
      logger = LogManager.getLogger("aurelia");
      slice = Array.prototype.slice;
      if (!window.CustomEvent || typeof window.CustomEvent !== "function") {
        CustomEvent = function(event, params) {
          var params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
          };
          var evt = document.createEvent("CustomEvent");
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };
        CustomEvent.prototype = window.Event.prototype;
        window.CustomEvent = CustomEvent;
      }
      Aurelia = _export("Aurelia", (function() {
        function Aurelia(loader, container, resources) {
          this.loader = loader || Loader.createDefaultLoader();
          this.container = container || new Container();
          this.resources = resources || new ResourceRegistry();
          this.resourcesToLoad = [];
          this.use = new Plugins(this);
          if (!this.resources.baseResourcePath) {
            this.resources.baseResourcePath = System.baseUrl || "";
          }
          this.withInstance(Aurelia, this);
          this.withInstance(Loader, this.loader);
          this.withInstance(ResourceRegistry, this.resources);
        }
        _prototypeProperties(Aurelia, null, {
          withInstance: {
            value: function withInstance(type, instance) {
              this.container.registerInstance(type, instance);
              return this;
            },
            writable: true,
            configurable: true
          },
          withSingleton: {
            value: function withSingleton(type, implementation) {
              this.container.registerSingleton(type, implementation);
              return this;
            },
            writable: true,
            configurable: true
          },
          withResources: {
            value: function withResources(resources) {
              var toAdd = Array.isArray(resources) ? resources : slice.call(arguments);
              toAdd.resourceManifestUrl = this.currentPluginId;
              this.resourcesToLoad.push(toAdd);
              return this;
            },
            writable: true,
            configurable: true
          },
          start: {
            value: function start() {
              var _this = this;
              if (this.started) {
                return Promise.resolve(this);
              }
              this.started = true;
              logger.info("Aurelia Starting");
              var resourcesToLoad = this.resourcesToLoad;
              this.resourcesToLoad = [];
              return this.use._process().then(function() {
                if (!_this.container.hasHandler(BindingLanguage)) {
                  logger.error("You must configure Aurelia with a BindingLanguage implementation.");
                }
                _this.resourcesToLoad = _this.resourcesToLoad.concat(resourcesToLoad);
                return loadResources(_this.container, _this.resourcesToLoad, _this.resources).then(function() {
                  logger.info("Aurelia Started");
                  var evt = new window.CustomEvent("aurelia-started", {
                    bubbles: true,
                    cancelable: true
                  });
                  document.dispatchEvent(evt);
                  return _this;
                });
              });
            },
            writable: true,
            configurable: true
          },
          setRoot: {
            value: function setRoot(root, applicationHost) {
              var _this = this;
              var compositionEngine,
                  instruction = {};
              if (!applicationHost || typeof applicationHost == "string") {
                this.host = document.getElementById(applicationHost || "applicationHost") || document.body;
              } else {
                this.host = applicationHost;
              }
              this.host.aurelia = this;
              this.container.registerInstance(Element, this.host);
              compositionEngine = this.container.get(CompositionEngine);
              instruction.viewModel = root;
              instruction.container = instruction.childContainer = this.container;
              instruction.viewSlot = new ViewSlot(this.host, true);
              instruction.viewSlot.transformChildNodesIntoView();
              return compositionEngine.compose(instruction).then(function(root) {
                _this.root = root;
                instruction.viewSlot.attached();
                var evt = new window.CustomEvent("aurelia-composed", {
                  bubbles: true,
                  cancelable: true
                });
                setTimeout(function() {
                  return document.dispatchEvent(evt);
                }, 1);
                return _this;
              });
            },
            writable: true,
            configurable: true
          }
        });
        return Aurelia;
      })());
    }
  };
});



System.register("github:aurelia/framework@0.8.6/system/index", ["./aurelia", "aurelia-dependency-injection", "aurelia-binding", "aurelia-metadata", "aurelia-templating", "aurelia-loader", "aurelia-task-queue", "aurelia-logging"], function(_export) {
  "use strict";
  var TheLogManager,
      LogManager;
  return {
    setters: [function(_aurelia) {
      _export("Aurelia", _aurelia.Aurelia);
    }, function(_aureliaDependencyInjection) {
      for (var _key in _aureliaDependencyInjection) {
        _export(_key, _aureliaDependencyInjection[_key]);
      }
    }, function(_aureliaBinding) {
      for (var _key2 in _aureliaBinding) {
        _export(_key2, _aureliaBinding[_key2]);
      }
    }, function(_aureliaMetadata) {
      for (var _key3 in _aureliaMetadata) {
        _export(_key3, _aureliaMetadata[_key3]);
      }
    }, function(_aureliaTemplating) {
      for (var _key4 in _aureliaTemplating) {
        _export(_key4, _aureliaTemplating[_key4]);
      }
    }, function(_aureliaLoader) {
      for (var _key5 in _aureliaLoader) {
        _export(_key5, _aureliaLoader[_key5]);
      }
    }, function(_aureliaTaskQueue) {
      for (var _key6 in _aureliaTaskQueue) {
        _export(_key6, _aureliaTaskQueue[_key6]);
      }
    }, function(_aureliaLogging) {
      TheLogManager = _aureliaLogging;
    }],
    execute: function() {
      LogManager = _export("LogManager", TheLogManager);
    }
  };
});



System.register("github:aurelia/framework@0.8.6", ["github:aurelia/framework@0.8.6/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("github:aurelia/bootstrapper@0.9.3/system/index", ["aurelia-loader-default", "aurelia-framework", "aurelia-logging-console"], function(_export) {
  "use strict";
  var DefaultLoader,
      Aurelia,
      LogManager,
      ConsoleAppender,
      logger,
      readyQueue,
      isReady;
  _export("bootstrap", bootstrap);
  function onReady(callback) {
    return new Promise(function(resolve, reject) {
      if (!isReady) {
        readyQueue.push(function() {
          try {
            resolve(callback());
          } catch (e) {
            reject(e);
          }
        });
      } else {
        resolve(callback());
      }
    });
  }
  function bootstrap(configure) {
    return onReady(function() {
      var loader = new DefaultLoader(),
          aurelia = new Aurelia(loader);
      return configureAurelia(aurelia).then(function() {
        return configure(aurelia);
      });
    });
  }
  function ready(global) {
    return new Promise(function(resolve, reject) {
      var completed = function() {
        global.document.removeEventListener("DOMContentLoaded", completed, false);
        global.removeEventListener("load", completed, false);
        resolve(global.document);
      };
      if (global.document.readyState === "complete") {
        resolve(global.document);
      } else {
        global.document.addEventListener("DOMContentLoaded", completed, false);
        global.addEventListener("load", completed, false);
      }
    });
  }
  function loadPolyfills() {
    return System.normalize("aurelia-bootstrapper").then(function(bootstrapperName) {
      return System.normalize("aurelia-framework", bootstrapperName).then(function(frameworkName) {
        System.map["aurelia-framework"] = frameworkName;
        return System.normalize("aurelia-loader", frameworkName).then(function(loaderName) {
          var toLoad = [];
          if (!System.polyfilled) {
            logger.debug("loading core-js");
            toLoad.push(System.normalize("core-js", loaderName).then(function(name) {
              return System["import"](name);
            }));
          }
          toLoad.push(System.normalize("aurelia-depedency-injection", frameworkName).then(function(name) {
            System.map["aurelia-depedency-injection"] = name;
          }));
          toLoad.push(System.normalize("aurelia-router", bootstrapperName).then(function(name) {
            System.map["aurelia-router"] = name;
          }));
          toLoad.push(System.normalize("aurelia-logging-console", bootstrapperName).then(function(name) {
            System.map["aurelia-logging-console"] = name;
          }));
          if (!("import" in document.createElement("link"))) {
            logger.debug("loading the HTMLImports polyfill");
            toLoad.push(System.normalize("webcomponentsjs/HTMLImports.min", loaderName).then(function(name) {
              return System["import"](name);
            }));
          }
          if (!("content" in document.createElement("template"))) {
            logger.debug("loading the HTMLTemplateElement polyfill");
            toLoad.push(System.normalize("aurelia-html-template-element", loaderName).then(function(name) {
              return System["import"](name);
            }));
          }
          return Promise.all(toLoad);
        });
      });
    });
  }
  function configureAurelia(aurelia) {
    return System.normalize("aurelia-bootstrapper").then(function(bName) {
      var toLoad = [];
      toLoad.push(System.normalize("aurelia-templating-binding", bName).then(function(templatingBinding) {
        aurelia.use.defaultBindingLanguage = function() {
          aurelia.use.plugin(templatingBinding);
          return this;
        };
      }));
      toLoad.push(System.normalize("aurelia-history-browser", bName).then(function(historyBrowser) {
        return System.normalize("aurelia-templating-router", bName).then(function(templatingRouter) {
          aurelia.use.router = function() {
            aurelia.use.plugin(historyBrowser);
            aurelia.use.plugin(templatingRouter);
            return this;
          };
        });
      }));
      toLoad.push(System.normalize("aurelia-templating-resources", bName).then(function(name) {
        System.map["aurelia-templating-resources"] = name;
        aurelia.use.defaultResources = function() {
          aurelia.use.plugin(name);
          return this;
        };
      }));
      toLoad.push(System.normalize("aurelia-event-aggregator", bName).then(function(eventAggregator) {
        System.map["aurelia-event-aggregator"] = eventAggregator;
        aurelia.use.eventAggregator = function() {
          aurelia.use.plugin(eventAggregator);
          return this;
        };
      }));
      return Promise.all(toLoad);
    });
  }
  function handleMain(mainHost) {
    var mainModuleId = mainHost.getAttribute("aurelia-main") || "main",
        loader = new DefaultLoader();
    return loader.loadModule(mainModuleId).then(function(m) {
      var aurelia = new Aurelia(loader);
      return configureAurelia(aurelia).then(function() {
        return m.configure(aurelia);
      });
    })["catch"](function(e) {
      setTimeout(function() {
        throw e;
      }, 0);
    });
  }
  function handleApp(appHost) {
    var appModuleId = appHost.getAttribute("aurelia-app") || "app",
        aurelia = new Aurelia();
    return configureAurelia(aurelia).then(function() {
      aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator();
      if (appHost.hasAttribute("es5")) {
        aurelia.use.es5();
      } else if (appHost.hasAttribute("atscript")) {
        aurelia.use.atscript();
      }
      return aurelia.start().then(function(a) {
        return a.setRoot(appModuleId, appHost);
      });
    })["catch"](function(e) {
      setTimeout(function() {
        throw e;
      }, 0);
    });
  }
  function runningLocally() {
    return window.location.protocol !== "http" && window.location.protocol !== "https";
  }
  function run() {
    return ready(window).then(function(doc) {
      var mainHost = doc.querySelectorAll("[aurelia-main]"),
          appHost = doc.querySelectorAll("[aurelia-app]"),
          i,
          ii;
      if (appHost.length && !mainHost.length && runningLocally()) {
        LogManager.addAppender(new ConsoleAppender());
        LogManager.setLevel(LogManager.levels.debug);
      }
      return loadPolyfills().then(function() {
        for (i = 0, ii = mainHost.length; i < ii; ++i) {
          handleMain(mainHost[i]);
        }
        for (i = 0, ii = appHost.length; i < ii; ++i) {
          handleApp(appHost[i]);
        }
        isReady = true;
        for (i = 0, ii = readyQueue.length; i < ii; ++i) {
          readyQueue[i]();
        }
        readyQueue = [];
      });
    });
  }
  return {
    setters: [function(_aureliaLoaderDefault) {
      DefaultLoader = _aureliaLoaderDefault.DefaultLoader;
    }, function(_aureliaFramework) {
      Aurelia = _aureliaFramework.Aurelia;
      LogManager = _aureliaFramework.LogManager;
    }, function(_aureliaLoggingConsole) {
      ConsoleAppender = _aureliaLoggingConsole.ConsoleAppender;
    }],
    execute: function() {
      logger = LogManager.getLogger("bootstrapper");
      readyQueue = [];
      isReady = false;
      run();
    }
  };
});



System.register("github:aurelia/bootstrapper@0.9.3", ["github:aurelia/bootstrapper@0.9.3/system/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("app/bundle", ["aurelia-bootstrapper", "aurelia-templating-binding", "aurelia-templating-router", "aurelia-templating-resources", "aurelia-event-aggregator", "aurelia-router", "aurelia-history", "aurelia-history-browser", "moment", "showdown", "./app", "./redirect", "./markdown/bundle", "./css-classes/bundle", "./blog/bundle"], function(_export) {
  "use strict";
  return {
    setters: [function(_aureliaBootstrapper) {}, function(_aureliaTemplatingBinding) {}, function(_aureliaTemplatingRouter) {}, function(_aureliaTemplatingResources) {}, function(_aureliaEventAggregator) {}, function(_aureliaRouter) {}, function(_aureliaHistory) {}, function(_aureliaHistoryBrowser) {}, function(_moment) {}, function(_showdown) {}, function(_app) {}, function(_redirect) {}, function(_markdownBundle) {}, function(_cssClassesBundle) {}, function(_blogBundle) {}],
    execute: function() {}
  };
});



System.register("github:YoloDev/BootFunk@1.0.0-build.28/js/utils", [], function(_export) {
  "use strict";
  var _toArray,
      elementMatches,
      hasClass,
      addClass,
      removeClass,
      toggleClass;
  _export("domready", domready);
  _export("matches", matches);
  function contentLoaded(win, fn) {
    var done = false,
        top = true,
        doc = win.document,
        root = doc.documentElement,
        modern = doc.addEventListener,
        add = modern ? "addEventListener" : "attachEvent",
        rem = modern ? "removeEventListener" : "detachEvent",
        pre = modern ? "" : "on",
        init = function(e) {
          if (e.type == "readystatechange" && doc.readyState != "complete")
            return ;
          (e.type == "load" ? win : doc)[rem](pre + e.type, init, false);
          if (!done && (done = true))
            fn.call(win, e.type || e);
        },
        poll = function() {
          try {
            root.doScroll("left");
          } catch (e) {
            setTimeout(poll, 50);
            return ;
          }
          init("poll");
        };
    if (doc.readyState == "complete")
      fn.call(win, "lazy");
    else {
      if (!modern && root.doScroll) {
        try {
          top = !win.frameElement;
        } catch (e) {}
        if (top)
          poll();
      }
      doc[add](pre + "DOMContentLoaded", init, false);
      doc[add](pre + "readystatechange", init, false);
      win[add](pre + "load", init, false);
    }
  }
  function domready(callback) {
    contentLoaded(window, callback);
  }
  function matches(evt, selector) {
    var el = evt.target;
    while (el && el instanceof Element) {
      if (elementMatches(el, selector)) {
        return el;
      }
      el = el.parentNode;
    }
    return null;
  }
  return {
    setters: [],
    execute: function() {
      _toArray = function(arr) {
        return Array.isArray(arr) ? arr : Array.from(arr);
      };
      if (Element.prototype.matches)
        elementMatches = function(el, str) {
          return el.matches(str);
        };
      else if (Element.prototype.webkitMatchesSelector)
        elementMatches = function(el, str) {
          return el.webkitMatchesSelector(str);
        };
      else if (Element.prototype.mozMatchesSelector)
        elementMatches = function(el, str) {
          return el.mozMatchesSelector(str);
        };
      else if (Element.prototype.msMatchesSelector)
        elementMatches = function(el, str) {
          return el.msMatchesSelector(str);
        };
      else
        elementMatches = function(el, str) {
          var matches = (el.document || el.ownerDocument).querySelectorAll(str);
          var i = 0;
          while (matches[i] && matches[i] !== el) {
            i++;
          }
          return matches[i] ? true : false;
        };
      hasClass = _export("hasClass", undefined);
      addClass = _export("addClass", undefined);
      removeClass = _export("removeClass", undefined);
      toggleClass = _export("toggleClass", undefined);
      if ("classList" in document.createElement("_") && false) {
        _export("hasClass", hasClass = function(el, n) {
          return el.classList.contains(n);
        });
        _export("addClass", addClass = function(el, n) {
          return el.classList.add(n);
        });
        _export("removeClass", removeClass = function(el, n) {
          return el.classList.remove(n);
        });
        _export("toggleClass", toggleClass = function(el, n) {
          return el.classList.toggle(n);
        });
      } else {
        (function() {
          var getClassList = function(el) {
            return el.className.toString().split(" ");
          };
          var setClassList = function(el, list) {
            return el.className = list.join(" ");
          };
          var process = function(p) {
            return function(el) {
              for (var _len = arguments.length,
                  args = Array(_len > 1 ? _len - 1 : 0),
                  _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              var classes = getClassList(el);
              var result = p.apply(undefined, [classes].concat(_toArray(args)));
              if (Array.isArray(result)) {
                setClassList(el, result);
              } else {
                return result;
              }
            };
          };
          var union = function(arr, itm) {
            if (arr.indexOf(itm) === -1) {
              arr.push(itm);
            }
            return arr;
          };
          var remove = function(arr, itm) {
            var index = arr.indexOf(itm);
            if (index !== -1) {
              arr.splice(index, 1);
            }
            return arr;
          };
          _export("hasClass", hasClass = process(function(classes, className) {
            return classes.indexOf(className) > -1;
          }));
          _export("addClass", addClass = process(function(classes, className) {
            return union(classes, className);
          }));
          _export("removeClass", removeClass = process(function(classes, className) {
            return remove(classes, className);
          }));
          _export("toggleClass", toggleClass = process(function(classes, className) {
            return classes.indexOf(className) > -1 ? remove(classes, className) : union(classes, className);
          }));
        })();
      }
    }
  };
});



System.register("github:YoloDev/BootFunk@1.0.0-build.28/js/toggle", ["./utils"], function(_export) {
  "use strict";
  var domready,
      matches,
      toggleClass,
      toggles;
  _export("registerToggle", registerToggle);
  _export("toggleClassHandler", toggleClassHandler);
  function registerToggle(name, handler) {
    toggles[name] = handler;
  }
  function toggleClassHandler(className) {
    return function doToggle(evt) {
      var target = this.getAttribute("data-target");
      if (target !== null) {
        var elms = document.querySelectorAll(target);
        for (var i = 0,
            l = elms.length; i < l; i++) {
          toggleClass(elms[i], className);
        }
        evt.preventDefault();
        if (this.blur) {
          this.blur();
        }
      }
    };
  }
  return {
    setters: [function(_utils) {
      domready = _utils.domready;
      matches = _utils.matches;
      toggleClass = _utils.toggleClass;
    }],
    execute: function() {
      toggles = {};
      domready(function() {
        document.addEventListener("click", function(evt) {
          var match = matches(evt, "[data-toggle]");
          if (match !== null) {
            var value = match.getAttribute("data-toggle");
            if (value !== null && toggles[value]) {
              return toggles[value].apply(match, [evt]);
            }
          }
        });
      });
      registerToggle("collapse", toggleClassHandler("collapse"));
    }
  };
});



System.register("github:YoloDev/BootFunk@1.0.0-build.28/js/bootfunk", ["./toggle"], function(_export) {
  "use strict";
  return {
    setters: [function(_toggle) {}],
    execute: function() {}
  };
});



System.register("github:YoloDev/BootFunk@1.0.0-build.28/index", ["./css/bootfunk.css!", "./js/bootfunk"], function(_export) {
  "use strict";
  return {
    setters: [function(_cssBootfunkCss) {}, function(_jsBootfunk) {}],
    execute: function() {}
  };
});



System.register("github:YoloDev/BootFunk@1.0.0-build.28", ["github:YoloDev/BootFunk@1.0.0-build.28/index"], function($__export) {
  return {
    setters: [function(m) {
      for (var p in m)
        $__export(p, m[p]);
    }],
    execute: function() {}
  };
});



System.register("app/main", ["BootFunk", "font-awesome/css/font-awesome.css!", "style/site.css!", "aurelia-framework", "aurelia-logging-console", "aurelia-bootstrapper"], function(_export) {
  "use strict";
  var LogManager,
      ConsoleAppender,
      bootstrap;
  return {
    setters: [function(_BootFunk) {}, function(_fontAwesomeCssFontAwesomeCss) {}, function(_styleSiteCss) {}, function(_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function(_aureliaLoggingConsole) {
      ConsoleAppender = _aureliaLoggingConsole.ConsoleAppender;
    }, function(_aureliaBootstrapper) {
      bootstrap = _aureliaBootstrapper.bootstrap;
    }],
    execute: function() {
      LogManager.addAppender(new ConsoleAppender());
      LogManager.setLevel(LogManager.levels.debug);
      bootstrap(function(aurelia) {
        aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator();
        aurelia.start().then(function(a) {
          return a.setRoot("app/app", document.body);
        });
      });
    }
  };
});



System.register('github:YoloDev/BootFunk@1.0.0-build.28/css/bootfunk.css!github:Alxandr/plugin-css@master', [], false, function() {});
System.register('npm:font-awesome@4.3.0/css/font-awesome.css!github:Alxandr/plugin-css@master', [], false, function() {});
System.register('style/site.css!github:Alxandr/plugin-css@master', [], false, function() {});
(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
("html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}b,strong{font-weight:700}dfn{font-style:italic}h1{margin:.67em 0}mark{background:#ff0;color:#000}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{top:-.5em}sup{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}@media print{*,:after,:before{background:0 0!important;color:#000!important;-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"javascript:\"]:after,a[href^=\"#\"]:after{display:none}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000!important}.label{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}@font-face{font-family:Symbols;src:url(../jspm_packages/github/YoloDev/BootFunk@1.0.0-build.28/css/font/Symbols.eot);src:url(../jspm_packages/github/YoloDev/BootFunk@1.0.0-build.28/css/font/Symbols.eot?#iefix) format(\"embedded-opentype\"),url(../jspm_packages/github/YoloDev/BootFunk@1.0.0-build.28/css/font/Symbols.woff) format(\"woff\"),url(../jspm_packages/github/YoloDev/BootFunk@1.0.0-build.28/css/font/Symbols.ttf) format(\"truetype\"),url(../jspm_packages/github/YoloDev/BootFunk@1.0.0-build.28/css/font/Symbols.svg#Symbols) format(\"svg\");font-weight:400;font-style:normal}.s-back-arrow,.s-checkbox,.s-scrollbar-arrow-down,.s-scrollbar-arrow-up,.s-search,.s-star,.s-star-empty,.symbol{position:relative;top:1px;display:inline-block;font-family:Symbols;font-style:normal;font-weight:400;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.s-scrollbar-arrow-down:before{content:'\\E018'}.s-scrollbar-arrow-up:before{content:'\\E019'}.s-checkbox:before{content:'\\E081'}.s-star:before{content:'\\E082'}.s-star-empty:before{content:'\\E224'}.s-search:before{content:'\\E094'}.s-back-arrow:before{content:'\\E0D5'}*,:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:transparent}body{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.428571428571429;color:#333;background-color:#fff}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#3782c4;text-decoration:none}a:focus,a:hover{color:#2f6ea7;text-decoration:underline}a:focus{outline:dotted thin;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}img{vertical-align:middle}img.responsive{display:block;max-width:100%;height:auto}img.rounded{-webkit-border-radius:6px;border-radius:6px}img.thumbnail{padding:4px;line-height:1.428571428571429;background-color:#fff;border:1px solid #ddd;-webkit-border-radius:4px;border-radius:4px;-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;-ms-transition:all .2s ease-in-out;transition:all .2s ease-in-out;display:inline-block;max-width:100%;height:auto}img.circle{-webkit-border-radius:50%;border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only.sr-only-focusable:active,.sr-only.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}.h1,h1{font-size:36px;font-family:inherit;font-weight:500;line-height:1.1;color:inherit;margin-top:20px;margin-bottom:10px}.h1 .small,.h1 small,h1 .small,h1 small{font-weight:400;line-height:1;color:#777;font-size:65%}.h2,h2{font-size:30px;font-family:inherit;font-weight:500;line-height:1.1;color:inherit;margin-top:20px;margin-bottom:10px}.h2 .small,.h2 small,h2 .small,h2 small{font-weight:400;line-height:1;color:#777;font-size:65%}.h3,h3{font-size:24px;font-family:inherit;font-weight:500;line-height:1.1;color:inherit;margin-top:20px;margin-bottom:10px}.h3 .small,.h3 small,h3 .small,h3 small{font-weight:400;line-height:1;color:#777;font-size:65%}.h4,h4{font-size:18px;font-family:inherit;font-weight:500;line-height:1.1;color:inherit;margin-top:10px;margin-bottom:10px}.h4 .small,.h4 small,h4 .small,h4 small{font-weight:400;line-height:1;color:#777;font-size:75%}.h5,h5{font-size:14px;font-family:inherit;font-weight:500;line-height:1.1;color:inherit;margin-top:10px;margin-bottom:10px}.h5 .small,.h5 small,h5 .small,h5 small{font-weight:400;line-height:1;color:#777;font-size:75%}.h6,h6{font-size:12px;font-family:inherit;font-weight:500;line-height:1.1;color:inherit;margin-top:10px;margin-bottom:10px}.h6 .small,.h6 small,h6 .small,h6 small{font-weight:400;line-height:1;color:#777;font-size:75%}p{margin:0 0 10px}.lead{margin-bottom:20px;font-size:16px;font-weight:300;line-height:1.4}@media (min-width:768px){.lead{font-size:21px}}.small,small{font-size:85%}.mark,mark{background-color:#fcf8e3;padding:.2em}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.text-nowrap{white-space:nowrap}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.text-muted{color:#777}.text-primary{color:#3782c4}a.text-primary:hover{color:#3275b0}.text-success{color:#3c763d}a.text-success:hover{color:#366a37}.text-info{color:#31708f}a.text-info:hover{color:#2c6581}.text-warning{color:#8a6d3b}a.text-warning:hover{color:#7c6235}.text-danger{color:#a94442}a.text-danger:hover{color:#983d3b}.bg-primary{color:#fff;background-color:#3782c4}a.bg-primary:hover{background-color:#3275b0}.bg-success{background-color:#dff0d8}a.bg-success:hover{background-color:#c4e3b7}.bg-info{background-color:#d9edf7}a.bg-info:hover{background-color:#b3dbef}.bg-warning{background-color:#fcf8e3}a.bg-warning:hover{background-color:#f7edb8}.bg-danger{background-color:#f2dede}a.bg-danger:hover{background-color:#e5bdbd}.page-header{padding-bottom:9px;maring:40px 0 20px;border-bottom:1px solid #eee}ol,ul{margin-top:0;margin-bottom:10px}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}.list-inline,.list-unstyled{padding-left:0;list-style:none}.list-inline{margin-left:-5px}.list-inline>li{display:inline-block;padding-left:5px;padding-right:5px}dl{margin-top:0;margin-bottom:20px}dd,dt{line-height:1.428571428571429}dt{font-weight:700}dd{margin-left:0}abbr[title]{cursor:help;border-bottom:1px dotted abbr-border-color}.initialism{font-size:90%;text-transform:uppercase}blockquote{padding:10px 20px;margin:0 0 20px;font-size:17.5px;border-left:5px solid #eee}blockquote ol:last-child,blockquote p:last-child,blockquote ul:last-child{margin-bottom:0}blockquote .small,blockquote footer,blockquote small{display:block;font-size:80%;line-height:1.428571428571429;color:#777}blockquote .small:before,blockquote footer:before,blockquote small:before{content:'\\2014 \\00A0'}blockquote.reverse{padding-right:15px;padding-left:0;border-right:5px solid #eee;border-left:0;text-align:right}blockquote.reverse .small:before,blockquote.reverse footer:before,blockquote.reverse small:before{content:''}blockquote.reverse .small:after,blockquote.reverse footer:after,blockquote.reverse small:after{content:'\\00A0 \\2014'}address{margin-bottom:20px;font-style:normal;line-height:1.428571428571429}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,\"Courier New\",monospace}code{padding:2px 4px;font-size:90%;color:#c7254e;background-color:#f9f2f4;-webkit-border-radius:4px;border-radius:4px}kbd{padding:2px 4px;font-size:90%;color:#fff;background-color:#333;-webkit-border-radius:3px;border-radius:3px;-webkit-box-shadow:inset 0 -1px rgba(0,0,0,.25);box-shadow:inset 0 -1px rgba(0,0,0,.25)}kbd kbd{padding:0;font-size:100%;font-weight:700;-webkit-box-shadow:none;box-shadow:none}pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.428571428571429;word-break:break-all;word-wrap:break-word;color:#333;background-color:#f5f5f5;border:1px solid #ccc;-webkit-border-radius:4px;border-radius:4px}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;-webkit-border-radius:0;border-radius:0}pre .scrollable{max-height:340px;overflow-y:scroll}.btn-group-vertical>.btn-group:after,.btn-group-vertical>.btn-group:before,.btn-toolbar:after,.btn-toolbar:before,.container-fluid:after,.container-fluid:before,.container:after,.container:before,.form-horizontal .form-group:after,.form-horizontal .form-group:before,.nav:after,.nav:before,.navbar-collapse:after,.navbar-collapse:before,.navbar-header:after,.navbar-header:before,.navbar:after,.navbar:before,.row:after,.row:before{content:\" \";display:table}.btn-group-vertical>.btn-group:after,.btn-toolbar:after,.container-fluid:after,.container:after,.form-horizontal .form-group:after,.nav:after,.navbar-collapse:after,.navbar-header:after,.navbar:after,.row:after{clear:both}.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-13,.col-lg-14,.col-lg-15,.col-lg-16,.col-lg-17,.col-lg-18,.col-lg-19,.col-lg-2,.col-lg-20,.col-lg-21,.col-lg-22,.col-lg-23,.col-lg-24,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-13,.col-md-14,.col-md-15,.col-md-16,.col-md-17,.col-md-18,.col-md-19,.col-md-2,.col-md-20,.col-md-21,.col-md-22,.col-md-23,.col-md-24,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-13,.col-sm-14,.col-sm-15,.col-sm-16,.col-sm-17,.col-sm-18,.col-sm-19,.col-sm-2,.col-sm-20,.col-sm-21,.col-sm-22,.col-sm-23,.col-sm-24,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-13,.col-xs-14,.col-xs-15,.col-xs-16,.col-xs-17,.col-xs-18,.col-xs-19,.col-xs-2,.col-xs-20,.col-xs-21,.col-xs-22,.col-xs-23,.col-xs-24,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{position:relative;min-height:1px;padding-right:7.5px;padding-left:7.5px;float:left}.container,.container-fluid{margin-right:auto;margin-left:auto;padding-left:7.5px;padding-right:7.5px}@media (min-width:768px){.container{width:735px}}@media (min-width:992px){.container{width:955px}}@media (min-width:1200px){.container{width:1155px}}.row{margin-left:7.5px;margin-right:7.5px}.col-xs-24{width:100%}.col-xs-23{width:95.8333333333333%}.col-xs-22{width:91.6666666666667%}.col-xs-21{width:87.5%}.col-xs-20{width:83.3333333333333%}.col-xs-19{width:79.1666666666667%}.col-xs-18{width:75%}.col-xs-17{width:70.8333333333333%}.col-xs-16{width:66.6666666666667%}.col-xs-15{width:62.5%}.col-xs-14{width:58.3333333333333%}.col-xs-13{width:54.1666666666667%}.col-xs-12{width:50%}.col-xs-11{width:45.8333333333333%}.col-xs-10{width:41.6666666666667%}.col-xs-9{width:37.5%}.col-xs-8{width:33.3333333333333%}.col-xs-7{width:29.166666666666703%}.col-xs-6{width:25%}.col-xs-5{width:20.8333333333333%}.col-xs-4{width:16.6666666666667%}.col-xs-3{width:12.5%}.col-xs-2{width:8.3333333333333%}.col-xs-1{width:4.1666666666667%}.col-xs-pull-24{right:100%}.col-xs-pull-23{right:95.8333333333333%}.col-xs-pull-22{right:91.6666666666667%}.col-xs-pull-21{right:87.5%}.col-xs-pull-20{right:83.3333333333333%}.col-xs-pull-19{right:79.1666666666667%}.col-xs-pull-18{right:75%}.col-xs-pull-17{right:70.8333333333333%}.col-xs-pull-16{right:66.6666666666667%}.col-xs-pull-15{right:62.5%}.col-xs-pull-14{right:58.3333333333333%}.col-xs-pull-13{right:54.1666666666667%}.col-xs-pull-12{right:50%}.col-xs-pull-11{right:45.8333333333333%}.col-xs-pull-10{right:41.6666666666667%}.col-xs-pull-9{right:37.5%}.col-xs-pull-8{right:33.3333333333333%}.col-xs-pull-7{right:29.166666666666703%}.col-xs-pull-6{right:25%}.col-xs-pull-5{right:20.8333333333333%}.col-xs-pull-4{right:16.6666666666667%}.col-xs-pull-3{right:12.5%}.col-xs-pull-2{right:8.3333333333333%}.col-xs-pull-1{right:4.1666666666667%}.col-xs-pull-0{right:auto}.col-xs-push-24{left:100%}.col-xs-push-23{left:95.8333333333333%}.col-xs-push-22{left:91.6666666666667%}.col-xs-push-21{left:87.5%}.col-xs-push-20{left:83.3333333333333%}.col-xs-push-19{left:79.1666666666667%}.col-xs-push-18{left:75%}.col-xs-push-17{left:70.8333333333333%}.col-xs-push-16{left:66.6666666666667%}.col-xs-push-15{left:62.5%}.col-xs-push-14{left:58.3333333333333%}.col-xs-push-13{left:54.1666666666667%}.col-xs-push-12{left:50%}.col-xs-push-11{left:45.8333333333333%}.col-xs-push-10{left:41.6666666666667%}.col-xs-push-9{left:37.5%}.col-xs-push-8{left:33.3333333333333%}.col-xs-push-7{left:29.166666666666703%}.col-xs-push-6{left:25%}.col-xs-push-5{left:20.8333333333333%}.col-xs-push-4{left:16.6666666666667%}.col-xs-push-3{left:12.5%}.col-xs-push-2{left:8.3333333333333%}.col-xs-push-1{left:4.1666666666667%}.col-xs-push-0{left:auto}.col-xs-offset-24{margin-left:100%}.col-xs-offset-23{margin-left:95.8333333333333%}.col-xs-offset-22{margin-left:91.6666666666667%}.col-xs-offset-21{margin-left:87.5%}.col-xs-offset-20{margin-left:83.3333333333333%}.col-xs-offset-19{margin-left:79.1666666666667%}.col-xs-offset-18{margin-left:75%}.col-xs-offset-17{margin-left:70.8333333333333%}.col-xs-offset-16{margin-left:66.6666666666667%}.col-xs-offset-15{margin-left:62.5%}.col-xs-offset-14{margin-left:58.3333333333333%}.col-xs-offset-13{margin-left:54.1666666666667%}.col-xs-offset-12{margin-left:50%}.col-xs-offset-11{margin-left:45.8333333333333%}.col-xs-offset-10{margin-left:41.6666666666667%}.col-xs-offset-9{margin-left:37.5%}.col-xs-offset-8{margin-left:33.3333333333333%}.col-xs-offset-7{margin-left:29.166666666666703%}.col-xs-offset-6{margin-left:25%}.col-xs-offset-5{margin-left:20.8333333333333%}.col-xs-offset-4{margin-left:16.6666666666667%}.col-xs-offset-3{margin-left:12.5%}.col-xs-offset-2{margin-left:8.3333333333333%}.col-xs-offset-1{margin-left:4.1666666666667%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-24{width:100%}.col-sm-23{width:95.8333333333333%}.col-sm-22{width:91.6666666666667%}.col-sm-21{width:87.5%}.col-sm-20{width:83.3333333333333%}.col-sm-19{width:79.1666666666667%}.col-sm-18{width:75%}.col-sm-17{width:70.8333333333333%}.col-sm-16{width:66.6666666666667%}.col-sm-15{width:62.5%}.col-sm-14{width:58.3333333333333%}.col-sm-13{width:54.1666666666667%}.col-sm-12{width:50%}.col-sm-11{width:45.8333333333333%}.col-sm-10{width:41.6666666666667%}.col-sm-9{width:37.5%}.col-sm-8{width:33.3333333333333%}.col-sm-7{width:29.166666666666703%}.col-sm-6{width:25%}.col-sm-5{width:20.8333333333333%}.col-sm-4{width:16.6666666666667%}.col-sm-3{width:12.5%}.col-sm-2{width:8.3333333333333%}.col-sm-1{width:4.1666666666667%}.col-sm-pull-24{right:100%}.col-sm-pull-23{right:95.8333333333333%}.col-sm-pull-22{right:91.6666666666667%}.col-sm-pull-21{right:87.5%}.col-sm-pull-20{right:83.3333333333333%}.col-sm-pull-19{right:79.1666666666667%}.col-sm-pull-18{right:75%}.col-sm-pull-17{right:70.8333333333333%}.col-sm-pull-16{right:66.6666666666667%}.col-sm-pull-15{right:62.5%}.col-sm-pull-14{right:58.3333333333333%}.col-sm-pull-13{right:54.1666666666667%}.col-sm-pull-12{right:50%}.col-sm-pull-11{right:45.8333333333333%}.col-sm-pull-10{right:41.6666666666667%}.col-sm-pull-9{right:37.5%}.col-sm-pull-8{right:33.3333333333333%}.col-sm-pull-7{right:29.166666666666703%}.col-sm-pull-6{right:25%}.col-sm-pull-5{right:20.8333333333333%}.col-sm-pull-4{right:16.6666666666667%}.col-sm-pull-3{right:12.5%}.col-sm-pull-2{right:8.3333333333333%}.col-sm-pull-1{right:4.1666666666667%}.col-sm-pull-0{right:auto}.col-sm-push-24{left:100%}.col-sm-push-23{left:95.8333333333333%}.col-sm-push-22{left:91.6666666666667%}.col-sm-push-21{left:87.5%}.col-sm-push-20{left:83.3333333333333%}.col-sm-push-19{left:79.1666666666667%}.col-sm-push-18{left:75%}.col-sm-push-17{left:70.8333333333333%}.col-sm-push-16{left:66.6666666666667%}.col-sm-push-15{left:62.5%}.col-sm-push-14{left:58.3333333333333%}.col-sm-push-13{left:54.1666666666667%}.col-sm-push-12{left:50%}.col-sm-push-11{left:45.8333333333333%}.col-sm-push-10{left:41.6666666666667%}.col-sm-push-9{left:37.5%}.col-sm-push-8{left:33.3333333333333%}.col-sm-push-7{left:29.166666666666703%}.col-sm-push-6{left:25%}.col-sm-push-5{left:20.8333333333333%}.col-sm-push-4{left:16.6666666666667%}.col-sm-push-3{left:12.5%}.col-sm-push-2{left:8.3333333333333%}.col-sm-push-1{left:4.1666666666667%}.col-sm-push-0{left:auto}.col-sm-offset-24{margin-left:100%}.col-sm-offset-23{margin-left:95.8333333333333%}.col-sm-offset-22{margin-left:91.6666666666667%}.col-sm-offset-21{margin-left:87.5%}.col-sm-offset-20{margin-left:83.3333333333333%}.col-sm-offset-19{margin-left:79.1666666666667%}.col-sm-offset-18{margin-left:75%}.col-sm-offset-17{margin-left:70.8333333333333%}.col-sm-offset-16{margin-left:66.6666666666667%}.col-sm-offset-15{margin-left:62.5%}.col-sm-offset-14{margin-left:58.3333333333333%}.col-sm-offset-13{margin-left:54.1666666666667%}.col-sm-offset-12{margin-left:50%}.col-sm-offset-11{margin-left:45.8333333333333%}.col-sm-offset-10{margin-left:41.6666666666667%}.col-sm-offset-9{margin-left:37.5%}.col-sm-offset-8{margin-left:33.3333333333333%}.col-sm-offset-7{margin-left:29.166666666666703%}.col-sm-offset-6{margin-left:25%}.col-sm-offset-5{margin-left:20.8333333333333%}.col-sm-offset-4{margin-left:16.6666666666667%}.col-sm-offset-3{margin-left:12.5%}.col-sm-offset-2{margin-left:8.3333333333333%}.col-sm-offset-1{margin-left:4.1666666666667%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-24{width:100%}.col-md-23{width:95.8333333333333%}.col-md-22{width:91.6666666666667%}.col-md-21{width:87.5%}.col-md-20{width:83.3333333333333%}.col-md-19{width:79.1666666666667%}.col-md-18{width:75%}.col-md-17{width:70.8333333333333%}.col-md-16{width:66.6666666666667%}.col-md-15{width:62.5%}.col-md-14{width:58.3333333333333%}.col-md-13{width:54.1666666666667%}.col-md-12{width:50%}.col-md-11{width:45.8333333333333%}.col-md-10{width:41.6666666666667%}.col-md-9{width:37.5%}.col-md-8{width:33.3333333333333%}.col-md-7{width:29.166666666666703%}.col-md-6{width:25%}.col-md-5{width:20.8333333333333%}.col-md-4{width:16.6666666666667%}.col-md-3{width:12.5%}.col-md-2{width:8.3333333333333%}.col-md-1{width:4.1666666666667%}.col-md-pull-24{right:100%}.col-md-pull-23{right:95.8333333333333%}.col-md-pull-22{right:91.6666666666667%}.col-md-pull-21{right:87.5%}.col-md-pull-20{right:83.3333333333333%}.col-md-pull-19{right:79.1666666666667%}.col-md-pull-18{right:75%}.col-md-pull-17{right:70.8333333333333%}.col-md-pull-16{right:66.6666666666667%}.col-md-pull-15{right:62.5%}.col-md-pull-14{right:58.3333333333333%}.col-md-pull-13{right:54.1666666666667%}.col-md-pull-12{right:50%}.col-md-pull-11{right:45.8333333333333%}.col-md-pull-10{right:41.6666666666667%}.col-md-pull-9{right:37.5%}.col-md-pull-8{right:33.3333333333333%}.col-md-pull-7{right:29.166666666666703%}.col-md-pull-6{right:25%}.col-md-pull-5{right:20.8333333333333%}.col-md-pull-4{right:16.6666666666667%}.col-md-pull-3{right:12.5%}.col-md-pull-2{right:8.3333333333333%}.col-md-pull-1{right:4.1666666666667%}.col-md-pull-0{right:auto}.col-md-push-24{left:100%}.col-md-push-23{left:95.8333333333333%}.col-md-push-22{left:91.6666666666667%}.col-md-push-21{left:87.5%}.col-md-push-20{left:83.3333333333333%}.col-md-push-19{left:79.1666666666667%}.col-md-push-18{left:75%}.col-md-push-17{left:70.8333333333333%}.col-md-push-16{left:66.6666666666667%}.col-md-push-15{left:62.5%}.col-md-push-14{left:58.3333333333333%}.col-md-push-13{left:54.1666666666667%}.col-md-push-12{left:50%}.col-md-push-11{left:45.8333333333333%}.col-md-push-10{left:41.6666666666667%}.col-md-push-9{left:37.5%}.col-md-push-8{left:33.3333333333333%}.col-md-push-7{left:29.166666666666703%}.col-md-push-6{left:25%}.col-md-push-5{left:20.8333333333333%}.col-md-push-4{left:16.6666666666667%}.col-md-push-3{left:12.5%}.col-md-push-2{left:8.3333333333333%}.col-md-push-1{left:4.1666666666667%}.col-md-push-0{left:auto}.col-md-offset-24{margin-left:100%}.col-md-offset-23{margin-left:95.8333333333333%}.col-md-offset-22{margin-left:91.6666666666667%}.col-md-offset-21{margin-left:87.5%}.col-md-offset-20{margin-left:83.3333333333333%}.col-md-offset-19{margin-left:79.1666666666667%}.col-md-offset-18{margin-left:75%}.col-md-offset-17{margin-left:70.8333333333333%}.col-md-offset-16{margin-left:66.6666666666667%}.col-md-offset-15{margin-left:62.5%}.col-md-offset-14{margin-left:58.3333333333333%}.col-md-offset-13{margin-left:54.1666666666667%}.col-md-offset-12{margin-left:50%}.col-md-offset-11{margin-left:45.8333333333333%}.col-md-offset-10{margin-left:41.6666666666667%}.col-md-offset-9{margin-left:37.5%}.col-md-offset-8{margin-left:33.3333333333333%}.col-md-offset-7{margin-left:29.166666666666703%}.col-md-offset-6{margin-left:25%}.col-md-offset-5{margin-left:20.8333333333333%}.col-md-offset-4{margin-left:16.6666666666667%}.col-md-offset-3{margin-left:12.5%}.col-md-offset-2{margin-left:8.3333333333333%}.col-md-offset-1{margin-left:4.1666666666667%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-24{width:100%}.col-lg-23{width:95.8333333333333%}.col-lg-22{width:91.6666666666667%}.col-lg-21{width:87.5%}.col-lg-20{width:83.3333333333333%}.col-lg-19{width:79.1666666666667%}.col-lg-18{width:75%}.col-lg-17{width:70.8333333333333%}.col-lg-16{width:66.6666666666667%}.col-lg-15{width:62.5%}.col-lg-14{width:58.3333333333333%}.col-lg-13{width:54.1666666666667%}.col-lg-12{width:50%}.col-lg-11{width:45.8333333333333%}.col-lg-10{width:41.6666666666667%}.col-lg-9{width:37.5%}.col-lg-8{width:33.3333333333333%}.col-lg-7{width:29.166666666666703%}.col-lg-6{width:25%}.col-lg-5{width:20.8333333333333%}.col-lg-4{width:16.6666666666667%}.col-lg-3{width:12.5%}.col-lg-2{width:8.3333333333333%}.col-lg-1{width:4.1666666666667%}.col-lg-pull-24{right:100%}.col-lg-pull-23{right:95.8333333333333%}.col-lg-pull-22{right:91.6666666666667%}.col-lg-pull-21{right:87.5%}.col-lg-pull-20{right:83.3333333333333%}.col-lg-pull-19{right:79.1666666666667%}.col-lg-pull-18{right:75%}.col-lg-pull-17{right:70.8333333333333%}.col-lg-pull-16{right:66.6666666666667%}.col-lg-pull-15{right:62.5%}.col-lg-pull-14{right:58.3333333333333%}.col-lg-pull-13{right:54.1666666666667%}.col-lg-pull-12{right:50%}.col-lg-pull-11{right:45.8333333333333%}.col-lg-pull-10{right:41.6666666666667%}.col-lg-pull-9{right:37.5%}.col-lg-pull-8{right:33.3333333333333%}.col-lg-pull-7{right:29.166666666666703%}.col-lg-pull-6{right:25%}.col-lg-pull-5{right:20.8333333333333%}.col-lg-pull-4{right:16.6666666666667%}.col-lg-pull-3{right:12.5%}.col-lg-pull-2{right:8.3333333333333%}.col-lg-pull-1{right:4.1666666666667%}.col-lg-pull-0{right:auto}.col-lg-push-24{left:100%}.col-lg-push-23{left:95.8333333333333%}.col-lg-push-22{left:91.6666666666667%}.col-lg-push-21{left:87.5%}.col-lg-push-20{left:83.3333333333333%}.col-lg-push-19{left:79.1666666666667%}.col-lg-push-18{left:75%}.col-lg-push-17{left:70.8333333333333%}.col-lg-push-16{left:66.6666666666667%}.col-lg-push-15{left:62.5%}.col-lg-push-14{left:58.3333333333333%}.col-lg-push-13{left:54.1666666666667%}.col-lg-push-12{left:50%}.col-lg-push-11{left:45.8333333333333%}.col-lg-push-10{left:41.6666666666667%}.col-lg-push-9{left:37.5%}.col-lg-push-8{left:33.3333333333333%}.col-lg-push-7{left:29.166666666666703%}.col-lg-push-6{left:25%}.col-lg-push-5{left:20.8333333333333%}.col-lg-push-4{left:16.6666666666667%}.col-lg-push-3{left:12.5%}.col-lg-push-2{left:8.3333333333333%}.col-lg-push-1{left:4.1666666666667%}.col-lg-push-0{left:auto}.col-lg-offset-24{margin-left:100%}.col-lg-offset-23{margin-left:95.8333333333333%}.col-lg-offset-22{margin-left:91.6666666666667%}.col-lg-offset-21{margin-left:87.5%}.col-lg-offset-20{margin-left:83.3333333333333%}.col-lg-offset-19{margin-left:79.1666666666667%}.col-lg-offset-18{margin-left:75%}.col-lg-offset-17{margin-left:70.8333333333333%}.col-lg-offset-16{margin-left:66.6666666666667%}.col-lg-offset-15{margin-left:62.5%}.col-lg-offset-14{margin-left:58.3333333333333%}.col-lg-offset-13{margin-left:54.1666666666667%}.col-lg-offset-12{margin-left:50%}.col-lg-offset-11{margin-left:45.8333333333333%}.col-lg-offset-10{margin-left:41.6666666666667%}.col-lg-offset-9{margin-left:37.5%}.col-lg-offset-8{margin-left:33.3333333333333%}.col-lg-offset-7{margin-left:29.166666666666703%}.col-lg-offset-6{margin-left:25%}.col-lg-offset-5{margin-left:20.8333333333333%}.col-lg-offset-4{margin-left:16.6666666666667%}.col-lg-offset-3{margin-left:12.5%}.col-lg-offset-2{margin-left:8.3333333333333%}.col-lg-offset-1{margin-left:4.1666666666667%}.col-lg-offset-0{margin-left:0}}table{background-color:transparent}caption{padding-top:8px;padding-bottom:8px;color:#777;text-align:left}th{text-align:left}.table{width:100%;max-width:100%;margin-bottom:20px}.table>tbody>tr>td,.table>tbody>tr>th,.table>tfoot>tr>td,.table>tfoot>tr>th,.table>thead>tr>td,.table>thead>tr>th{padding:8px;line-height:1.428571428571429;vertical-align:top;border-top:1px solid #ddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>caption+thead>tr:first-child>td,.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>td,.table>thead:first-child>tr:first-child>th{border-top:0}.table>tbody+tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}.table.condensed>tbody>tr>td,.table.condensed>tbody>tr>th,.table.condensed>tfoot>tr>td,.table.condensed>tfoot>tr>th,.table.condensed>thead>tr>td,.table.condensed>thead>tr>th{padding:4px}.table.bordered,.table.bordered>tbody>tr>td,.table.bordered>tbody>tr>th,.table.bordered>tfoot>tr>td,.table.bordered>tfoot>tr>th,.table.bordered>thead>tr>td,.table.bordered>thead>tr>th{border:1px solid #ddd}.table.bordered>thead>tr>td,.table.bordered>thead>tr>th{border-bottom-width:2px}.table.striped>tbody>tr:nth-child(odd){background-color:#f9f9f9}.table.hover>tbody>tr:hover,.table>tbody>tr.active>td,.table>tbody>tr.active>th,.table>tbody>tr>td.active,.table>tbody>tr>th.active,.table>tfoot>tr.active>td,.table>tfoot>tr.active>th,.table>tfoot>tr>td.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>thead>tr.active>th,.table>thead>tr>td.active,.table>thead>tr>th.active{background-color:#f5f5f5}.table.hover>tbody>tr.active:hover>td,.table.hover>tbody>tr.active:hover>th,.table.hover>tbody>tr:hover>.active,.table.hover>tbody>tr>td.active:hover,.table.hover>tbody>tr>th.active:hover{background-color:#e9e9e9}.table>tbody>tr.success>td,.table>tbody>tr.success>th,.table>tbody>tr>td.success,.table>tbody>tr>th.success,.table>tfoot>tr.success>td,.table>tfoot>tr.success>th,.table>tfoot>tr>td.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>thead>tr.success>th,.table>thead>tr>td.success,.table>thead>tr>th.success{background-color:#dff0d8}.table.hover>tbody>tr.success:hover>td,.table.hover>tbody>tr.success:hover>th,.table.hover>tbody>tr:hover>.success,.table.hover>tbody>tr>td.success:hover,.table.hover>tbody>tr>th.success:hover{background-color:#d1eac8}.table>tbody>tr.info>td,.table>tbody>tr.info>th,.table>tbody>tr>td.info,.table>tbody>tr>th.info,.table>tfoot>tr.info>td,.table>tfoot>tr.info>th,.table>tfoot>tr>td.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>thead>tr.info>th,.table>thead>tr>td.info,.table>thead>tr>th.info{background-color:#d9edf7}.table.hover>tbody>tr.info:hover>td,.table.hover>tbody>tr.info:hover>th,.table.hover>tbody>tr:hover>.info,.table.hover>tbody>tr>td.info:hover,.table.hover>tbody>tr>th.info:hover{background-color:#c6e4f3}.table>tbody>tr.warning>td,.table>tbody>tr.warning>th,.table>tbody>tr>td.warning,.table>tbody>tr>th.warning,.table>tfoot>tr.warning>td,.table>tfoot>tr.warning>th,.table>tfoot>tr>td.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>thead>tr.warning>th,.table>thead>tr>td.warning,.table>thead>tr>th.warning{background-color:#fcf8e3}.table.hover>tbody>tr.warning:hover>td,.table.hover>tbody>tr.warning:hover>th,.table.hover>tbody>tr:hover>.warning,.table.hover>tbody>tr>td.warning:hover,.table.hover>tbody>tr>th.warning:hover{background-color:#faf3cd}.table>tbody>tr.danger>td,.table>tbody>tr.danger>th,.table>tbody>tr>td.danger,.table>tbody>tr>th.danger,.table>tfoot>tr.danger>td,.table>tfoot>tr.danger>th,.table>tfoot>tr>td.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>thead>tr.danger>th,.table>thead>tr>td.danger,.table>thead>tr>th.danger{background-color:#f2dede}.table.hover>tbody>tr.danger:hover>td,.table.hover>tbody>tr.danger:hover>th,.table.hover>tbody>tr:hover>.danger,.table.hover>tbody>tr>td.danger:hover,.table.hover>tbody>tr>th.danger:hover{background-color:#ebcdcd}table col[class*=col-],table td[class*=col-],table th[class*=col-]{position:static;float:none;display:table-column}.table-responsive{overflow-x:auto;min-height:.01%}@media screen and (max-width:767px){.table-responsive{width:100%;margin-bottom:15px;overflow-y:hidden;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd}.table-responsive>.table{margin-bottom:0}.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tfoot>tr>td,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>thead>tr>th{white-space:nowrap}.table-responsive>.table.bordered{border:0}.table-responsive>.table.bordered>tbody>tr>td:first-child,.table-responsive>.table.bordered>tbody>tr>th:first-child,.table-responsive>.table.bordered>tfoot>tr>td:first-child,.table-responsive>.table.bordered>tfoot>tr>th:first-child,.table-responsive>.table.bordered>thead>tr>td:first-child,.table-responsive>.table.bordered>thead>tr>th:first-child{border-left:0}.table-responsive>.table.bordered>tbody>tr>td:last-child,.table-responsive>.table.bordered>tbody>tr>th:last-child,.table-responsive>.table.bordered>tfoot>tr>td:last-child,.table-responsive>.table.bordered>tfoot>tr>th:last-child,.table-responsive>.table.bordered>thead>tr>td:last-child,.table-responsive>.table.bordered>thead>tr>th:last-child{border-right:0}.table-responsive>.table.bordered>tbody>tr:last-child>td,.table-responsive>.table.bordered>tbody>tr:last-child>th,.table-responsive>.table.bordered>tfoot>tr:last-child>td,.table-responsive>.table.bordered>tfoot>tr:last-child>th{border-bottom:0}}fieldset{padding:0;margin:0;border:0;min-width:0}legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}input[type=search]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}input[type=checkbox],input[type=radio]{margin:4px 0 0;line-height:normal}input[type=file]{display:block}input[type=range]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type=file]:hover,input[type=checkbox]:hover,input[type=radio]:hover{outline:dotted thin;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}output{display:block;padding-top:7px;font-size:14px;line-height:1.428571428571429;color:grey}.form-control{display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.428571428571429;color:grey;background-color:#fff;background-image:none;border:1px solid #ccc;-webkit-border-radius:4px;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;-moz-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;-ms-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s}.form-control:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.form-control::-moz-placeholder{color:#999;opacity:1;-ms-filter:none;filter:none}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{cursor:not-allowed;background-color:#eee;opacity:1;-ms-filter:none;filter:none}textarea.form-control{height:auto}input[type=search]{-webkit-appearance:none}@media screen and (-webkit-min-device-pixel-ratio:0){input[type=date],input[type=time],input[type=datetime-local],input[type=month]{line-height:34px}input[type=date].input.sm,input[type=time].input.sm,input[type=datetime-local].input.sm,input[type=month].input.sm{line-height:30px}input[type=date].input.lg,input[type=time].input.lg,input[type=datetime-local].input.lg,input[type=month].input.lg{line-height:46px}}.form-group{margin-bottom:15px}.checkbox,.radio{position:relative;display:block;margin-top:10px;margin-bottom:10px}.checkbox label,.radio label{min-height:20px;padding-left:20px;margin-bottom:0;font-wright:normal;cursor:pointer}.checkbox input[type=checkbox],.checkbox-inline input[type=checkbox],.radio input[type=radio],.radio-inline input[type=radio]{position:absolute;margin-left:-20px}.checkbox+.checkbox,.radio+.radio{margin-top:-5px}.checkbox-inline,.radio-inline{display:inline-block;padding-left:20px;margin-bottom:0;vertical-align:middle;font-weight:400;cursor:pointer}.checkbox-inline+.checkbox-inline,.radio-inline+.radio-inline{margin-top:0;margin-left:10px}.checkbox-inline.disabled,.checkbox.disabled label,.radio-inline.disabled,.radio.disabled label,fieldset[disabled] .checkbox label,fieldset[disabled] .checkbox-inline,fieldset[disabled] .radio label,fieldset[disabled] .radio-inline,fieldset[disabled] input[type=checkbox],fieldset[disabled] input[type=radio],input[type=checkbox].disabled,input[type=checkbox][disabled],input[type=radio].disabled,input[type=radio][disabled]{cursor:not-allowed}.form-control-static{padding-top:7px;padding-bottom:7px;margin-bottom:0}.form-control-static.input.lg,.form-control-static.input.sm{padding-left:0;padding-right:0}.form-group-sm .form-control,.input-group.sm>.form-control,.input-group.sm>.input-group-addon,.input-group.sm>.input-group-btn>.btn,.input.sm{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.form-group-sm .form-control,select.input-group.sm>.form-control,select.input-group.sm>.input-group-addon,select.input-group.sm>.input-group-btn>.btn,select.input.sm{height:30px;line-height:30px}select[multiple].form-group-sm .form-control,select[multiple].input-group.sm>.form-control,select[multiple].input-group.sm>.input-group-addon,select[multiple].input-group.sm>.input-group-btn>.btn,select[multiple].input.sm,textarea.form-group-sm .form-control,textarea.input-group.sm>.form-control,textarea.input-group.sm>.input-group-addon,textarea.input-group.sm>.input-group-btn>.btn,textarea.input.sm{height:auto}.form-group-lg .form-control,.input-group.lg>.form-control,.input-group.lg>.input-group-addon,.input-group.lg>.input-group-btn>.btn,.input.lg{height:46px;padding:10px 16px;font-size:18px;line-height:1.33;border-radius:6px}select.form-group-lg .form-control,select.input-group.lg>.form-control,select.input-group.lg>.input-group-addon,select.input-group.lg>.input-group-btn>.btn,select.input.lg{height:46px;line-height:46px}select[multiple].form-group-lg .form-control,select[multiple].input-group.lg>.form-control,select[multiple].input-group.lg>.input-group-addon,select[multiple].input-group.lg>.input-group-btn>.btn,select[multiple].input.lg,textarea.form-group-lg .form-control,textarea.input-group.lg>.form-control,textarea.input-group.lg>.input-group-addon,textarea.input-group.lg>.input-group-btn>.btn,textarea.input.lg{height:auto}.has-feedback{position:absolute}.has-feedback .form-control{padding-right:42.5px}.form-control-feedback{position:absolute;top:0;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center;pointer-events:none}.input.lg+.form-control-feedback{width:46px;height:46px;line-height:46px}.input.sm+.form-control-feedback{width:30px;height:30px;line-height:30px}.has-success .checkbox,.has-success .checkbox-inline,.has-success .control-label,.has-success .help-block,.has-success .radio,.has-success .radio-inline,.has-success.checkbox label,.has-success.checkbox-inline label,.has-success.radio label,.has-success.radio-inline label{color:#3c763d}.has-success .form-control{border-color:#3c763d;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-success .form-control:focus{border-color:#366a37;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #52a254;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #52a254}.has-success .input-group-addon{color:#3c763d;border-color:#3c763d;background-color:#dff0d8}.has-success .form-control-feedback{color:#3c763d}.has-warning .checkbox,.has-warning .checkbox-inline,.has-warning .control-label,.has-warning .help-block,.has-warning .radio,.has-warning .radio-inline,.has-warning.checkbox label,.has-warning.checkbox-inline label,.has-warning.radio label,.has-warning.radio-inline label{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-warning .form-control:focus{border-color:#7c6235;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #b48f50;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #b48f50}.has-warning .input-group-addon{color:#8a6d3b;border-color:#8a6d3b;background-color:#fcf8e3}.has-warning .form-control-feedback{color:#8a6d3b}.has-error .checkbox,.has-error .checkbox-inline,.has-error .control-label,.has-error .help-block,.has-error .radio,.has-error .radio-inline,.has-error.checkbox label,.has-error.checkbox-inline label,.has-error.radio label,.has-error.radio-inline label{color:#a94442}.has-error .form-control{border-color:#a94442;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075);box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-error .form-control:focus{border-color:#983d3b;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c16361;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c16361}.has-error .input-group-addon{color:#a94442;border-color:#a94442;background-color:#f2dede}.has-error .form-control-feedback{color:#a94442}.has-feedback label~.form-control-feedback{top:25px}.has-feedback label.sr-only~.form-control-feedback{top:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#666}@media (min-width:768px){.form-inline .form-group,.navbar-form .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control,.navbar-form .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-static,.navbar-form .form-control-static{display:inline-block}.form-inline .input-group,.navbar-form .input-group{display:inline-table;vertical-align:middle}.form-inline .input-group .form-control,.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn,.navbar-form .input-group .form-control,.navbar-form .input-group .input-group-addon,.navbar-form .input-group .input-group-btn{with:auto}.form-inline .input-group>.form-control,.navbar-form .input-group>.form-control{width:100%}.form-inline .control-label,.navbar-form .control-label{margin-bottom:0;vertical-align:middle}.form-inline .checkbox,.form-inline .radio,.navbar-form .checkbox,.navbar-form .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .checkbox label,.form-inline .radio label,.navbar-form .checkbox label,.navbar-form .radio label{padding-left:0}.form-inline .checkbox input[type=checkbox],.form-inline .radio input[type=radio],.navbar-form .checkbox input[type=checkbox],.navbar-form .radio input[type=radio]{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback,.navbar-form .has-feedback .form-control-feedback{top:0}}.form-horizontal .checkbox,.form-horizontal .checkbox-inline,.form-horizontal .radio,.form-horizontal .radio-inline{margin-top:0;margin-bottom:0;padding-top:7px}.form-horizontal .checkbox,.form-horizontal .radio{min-height:27px}.form-horizontal .form-group{margin-left:7.5px;margin-right:7.5px}@media (min-width:768px){.form-horizontal .control-label{text-align:right;margin-bottom:0;padding-top:7px}}.form-horizontal .has-feedback .form-control-feedback{right:7.5px}@media (min-width:768px){.form-horizontal .form-group-lg .control-label{padding-top:14.3px}.form-horizontal .form-group-sm .control-label{padding-top:6px}}.btn{display:inline-block;margin-bottom:0;font-weight:400;text-align:center;vertical-align:middle;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;padding:6px 12px;font-size:14px;line-height:1.428571428571429;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn.active.focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn:active:focus,.btn:focus{outline:dotted thin;outline:-webkit-focus-ring-color auto 5px;outline-offset:-2px}.btn.focus,.btn:focus,.btn:hover{color:#333;text-decoration:none}.btn.active,.btn:active{outline:0;background-image:none;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn.disabled,.btn[disabled],fieldset[disabled] .btn{cursor:not-allowed;pointer-events:none;opacity:.65;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=65)\";filter:alpha(opacity=65);-webkit-box-shadow:none;box-shadow:none}.btn.default{color:#333;background-color:#fff;border-color:#ccc}.btn.default.active,.btn.default.focus,.btn.default:active,.btn.default:focus,.btn.default:hover,.open>.dropdown-toggle.btn.default{color:#333;background-color:#e6e6e6;border-color:#b4b4b4}.btn.default.active,.btn.default:active,.open>.dropdown-toggle.btn.default{background-image:none}.btn.default.disabled,.btn.default.disabled.active,.btn.default.disabled.focus,.btn.default.disabled:active,.btn.default.disabled:focus,.btn.default.disabled:hover,.btn.default[disabled],.btn.default[disabled].active,.btn.default[disabled].focus,.btn.default[disabled]:active,.btn.default[disabled]:focus,.btn.default[disabled]:hover,fieldset[disabled] .btn.default,fieldset[disabled] .btn.default.active,fieldset[disabled] .btn.default.focus,fieldset[disabled] .btn.default:active,fieldset[disabled] .btn.default:focus,fieldset[disabled] .btn.default:hover{background-color:#fff;border-color:#ccc}.btn.default .badge{color:#fff;background-color:#333}.btn.primary{color:#fff;background-color:#3782c4;border-color:#347bba}.btn.primary.active,.btn.primary.focus,.btn.primary:active,.btn.primary:focus,.btn.primary:hover,.open>.dropdown-toggle.btn.primary{color:#fff;background-color:#3275b0;border-color:#2e6ca4}.btn.primary.active,.btn.primary:active,.open>.dropdown-toggle.btn.primary{background-image:none}.btn.primary.disabled,.btn.primary.disabled.active,.btn.primary.disabled.focus,.btn.primary.disabled:active,.btn.primary.disabled:focus,.btn.primary.disabled:hover,.btn.primary[disabled],.btn.primary[disabled].active,.btn.primary[disabled].focus,.btn.primary[disabled]:active,.btn.primary[disabled]:focus,.btn.primary[disabled]:hover,fieldset[disabled] .btn.primary,fieldset[disabled] .btn.primary.active,fieldset[disabled] .btn.primary.focus,fieldset[disabled] .btn.primary:active,fieldset[disabled] .btn.primary:focus,fieldset[disabled] .btn.primary:hover{background-color:#3782c4;border-color:#347bba}.btn.primary .badge{color:#3782c4;background-color:#fff}.btn.success{color:#fff;background-color:#5cb85c;border-color:#52b452}.btn.success.active,.btn.success.focus,.btn.success:active,.btn.success:focus,.btn.success:hover,.open>.dropdown-toggle.btn.success{color:#fff;background-color:#4bad4b;border-color:#46a146}.btn.success.active,.btn.success:active,.open>.dropdown-toggle.btn.success{background-image:none}.btn.success.disabled,.btn.success.disabled.active,.btn.success.disabled.focus,.btn.success.disabled:active,.btn.success.disabled:focus,.btn.success.disabled:hover,.btn.success[disabled],.btn.success[disabled].active,.btn.success[disabled].focus,.btn.success[disabled]:active,.btn.success[disabled]:focus,.btn.success[disabled]:hover,fieldset[disabled] .btn.success,fieldset[disabled] .btn.success.active,fieldset[disabled] .btn.success.focus,fieldset[disabled] .btn.success:active,fieldset[disabled] .btn.success:focus,fieldset[disabled] .btn.success:hover{background-color:#5cb85c;border-color:#52b452}.btn.success .badge{color:#5cb85c;background-color:#fff}.btn.info{color:#fff;background-color:#5bc0de;border-color:#4ebbdb}.btn.info.active,.btn.info.focus,.btn.info:active,.btn.info:focus,.btn.info:hover,.open>.dropdown-toggle.btn.info{color:#fff;background-color:#41b6d9;border-color:#30b0d5}.btn.info.active,.btn.info:active,.open>.dropdown-toggle.btn.info{background-image:none}.btn.info.disabled,.btn.info.disabled.active,.btn.info.disabled.focus,.btn.info.disabled:active,.btn.info.disabled:focus,.btn.info.disabled:hover,.btn.info[disabled],.btn.info[disabled].active,.btn.info[disabled].focus,.btn.info[disabled]:active,.btn.info[disabled]:focus,.btn.info[disabled]:hover,fieldset[disabled] .btn.info,fieldset[disabled] .btn.info.active,fieldset[disabled] .btn.info.focus,fieldset[disabled] .btn.info:active,fieldset[disabled] .btn.info:focus,fieldset[disabled] .btn.info:hover{background-color:#5bc0de;border-color:#4ebbdb}.btn.info .badge{color:#5bc0de;background-color:#fff}.btn.warning{color:#fff;background-color:#f0ad4e;border-color:#efa63f}.btn.warning.active,.btn.warning.focus,.btn.warning:active,.btn.warning:focus,.btn.warning:hover,.open>.dropdown-toggle.btn.warning{color:#fff;background-color:#ee9f31;border-color:#ec961e}.btn.warning.active,.btn.warning:active,.open>.dropdown-toggle.btn.warning{background-image:none}.btn.warning.disabled,.btn.warning.disabled.active,.btn.warning.disabled.focus,.btn.warning.disabled:active,.btn.warning.disabled:focus,.btn.warning.disabled:hover,.btn.warning[disabled],.btn.warning[disabled].active,.btn.warning[disabled].focus,.btn.warning[disabled]:active,.btn.warning[disabled]:focus,.btn.warning[disabled]:hover,fieldset[disabled] .btn.warning,fieldset[disabled] .btn.warning.active,fieldset[disabled] .btn.warning.focus,fieldset[disabled] .btn.warning:active,fieldset[disabled] .btn.warning:focus,fieldset[disabled] .btn.warning:hover{background-color:#f0ad4e;border-color:#efa63f}.btn.warning .badge{color:#f0ad4e;background-color:#fff}.btn.danger{color:#fff;background-color:#d9534f;border-color:#d64743}.btn.danger.active,.btn.danger.focus,.btn.danger:active,.btn.danger:focus,.btn.danger:hover,.open>.dropdown-toggle.btn.danger{color:#fff;background-color:#d43b37;border-color:#cb312c}.btn.danger.active,.btn.danger:active,.open>.dropdown-toggle.btn.danger{background-image:none}.btn.danger.disabled,.btn.danger.disabled.active,.btn.danger.disabled.focus,.btn.danger.disabled:active,.btn.danger.disabled:focus,.btn.danger.disabled:hover,.btn.danger[disabled],.btn.danger[disabled].active,.btn.danger[disabled].focus,.btn.danger[disabled]:active,.btn.danger[disabled]:focus,.btn.danger[disabled]:hover,fieldset[disabled] .btn.danger,fieldset[disabled] .btn.danger.active,fieldset[disabled] .btn.danger.focus,fieldset[disabled] .btn.danger:active,fieldset[disabled] .btn.danger:focus,fieldset[disabled] .btn.danger:hover{background-color:#d9534f;border-color:#d64743}.btn.danger .badge{color:#d9534f;background-color:#fff}.btn.link{color:#3782c4;font-weight:400;-webkit-border-radius:0;border-radius:0}.btn.link,.btn.link.active,.btn.link:active,.btn.link[disabled],fieldset[disabled] .btn.link{background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.btn.link,.btn.link:active,.btn.link:focus,.btn.link:hover{border-color:transparent}.btn.link:focus,.btn.link:hover{color:#2f6ea7;text-decoration:underline;background-color:transparent}.btn.link[disabled]:focus,.btn.link[disabled]:hover,fieldset[disabled] .btn.link:focus,fieldset[disabled] .btn.link:hover{color:#777;text-decoration:none}.btn-group.lg,.btn.lg{padding:10px 16px;font-size:18px;line-height:1.33;border-radius:6px}.btn-group.sm,.btn.sm{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.btn-group.xs,.btn.xs{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.btn.block{display:block;width:100%}.btn.block+.btn.block{margin-top:5px}input[type=button].btn.block,input[type=reset].btn.block,input[type=submit].btn.block{width:100%}.btn .caret{margin-left:0}.btn.lg .caret{border-width:5px 5px 0}.dropup .btn.lg .caret{border-width:0 5px 5px}.fade{opacity:0;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";filter:alpha(opacity=0);-webkit-transition:opacity .15s linear;-moz-transition:opacity .15s linear;-o-transition:opacity .15s linear;-ms-transition:opacity .15s linear;transition:opacity .15s linear}.fade.in{opacity:1;-ms-filter:none;filter:none}.collapse{display:none;visibility:hidden}.collapse.in{display:block;visibility:visible}tr.collapse.in{display:table-row}tbody.collapse.in{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition-property:height,visibility;-moz-transition-property:height,visibility;-o-transition-property:height,visibility;-ms-transition-property:height,visibility;transition-property:height,visibility;-webkit-transition-duration:.35s;-moz-transition-duration:.35s;-o-transition-duration:.35s;-ms-transition-duration:.35s;transition-duration:.35s;-webkit-transition-timing-function:ease;-moz-transition-timing-function:ease;-o-transition-timing-function:ease;-ms-transition-timing-function:ease;transition-timing-function:ease}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px solid;border-right:4px solid transparent;border-left:4px solid transparent}.dropdown-toggle:focus{outline:0}.dropdown,.dropup,.navbar-fixed-bottom .dropdown{position:relative}.dropdown>.menu,.dropup>.menu,.navbar-fixed-bottom .dropdown>.menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;list-style:none;font-size:14px;text-align:left;background-color:#fff;border:1px solid rgba(0,0,0,.15);-webkit-border-radius:4px;border-radius:4px;-webkit-box-shadow:0 6px 12px rgba(0,0,0,.175);box-shadow:0 6px 12px rgba(0,0,0,.175);-webkit-background-clip:padding;-moz-background-clip:padding;background-clip:padding-box}.dropdown>.menu .divider,.dropup>.menu .divider,.navbar-fixed-bottom .dropdown>.menu .divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.dropdown>.menu>li>a,.dropup>.menu>li>a,.navbar-fixed-bottom .dropdown>.menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.428571428571429;color:#333;white-space:nowrap}.dropdown>.menu>li>a:focus,.dropdown>.menu>li>a:hover,.dropup>.menu>li>a:focus,.dropup>.menu>li>a:hover,.navbar-fixed-bottom .dropdown>.menu>li>a:focus,.navbar-fixed-bottom .dropdown>.menu>li>a:hover{text-decoration:none;color:#303030;background-color:#f5f5f5}.dropdown>.menu>li.active>a,.dropdown>.menu>li.active>a:focus,.dropdown>.menu>li.active>a:hover,.dropup>.menu>li.active>a,.dropup>.menu>li.active>a:focus,.dropup>.menu>li.active>a:hover,.navbar-fixed-bottom .dropdown>.menu>li.active>a,.navbar-fixed-bottom .dropdown>.menu>li.active>a:focus,.navbar-fixed-bottom .dropdown>.menu>li.active>a:hover{color:#fff;text-decoration:none;outline:0;background-color:#3782c4}.dropdown>.menu>li.disabled>a,.dropdown>.menu>li.disabled>a:focus,.dropdown>.menu>li.disabled>a:hover,.dropup>.menu>li.disabled>a,.dropup>.menu>li.disabled>a:focus,.dropup>.menu>li.disabled>a:hover,.navbar-fixed-bottom .dropdown>.menu>li.disabled>a,.navbar-fixed-bottom .dropdown>.menu>li.disabled>a:focus,.navbar-fixed-bottom .dropdown>.menu>li.disabled>a:hover{color:#777}.dropdown>.menu>li.disabled>a:focus,.dropdown>.menu>li.disabled>a:hover,.dropup>.menu>li.disabled>a:focus,.dropup>.menu>li.disabled>a:hover,.navbar-fixed-bottom .dropdown>.menu>li.disabled>a:focus,.navbar-fixed-bottom .dropdown>.menu>li.disabled>a:hover{text-decoration:none;background-color:transparent;background-image:none;cursor:not-allowed;-ms-filter:\"progid:DXImageTransform.Microsoft.gradient(enabled = false)\"}.dropdown.open>.menu,.dropup.open>.menu,.navbar-fixed-bottom .dropdown.open>.menu{display:block}.dropdown.open>a,.dropup.open>a,.navbar-fixed-bottom .dropdown.open>a{outline:0}.dropdown .menu.right,.dropup .menu.right,.navbar-fixed-bottom .dropdown .menu.right{left:auto;right:0}.dropdown .menu.left,.dropup .menu.left,.navbar-fixed-bottom .dropdown .menu.left{left:0;right:auto}.dropdown .menu .section-header,.dropup .menu .section-header,.navbar-fixed-bottom .dropdown .menu .section-header{display:block;padding:3px 20px;font-size:12px;line-height:1.428571428571429;color:#777;white-space:nowrap}.dropdown .menu .backdrop,.dropup .menu .backdrop,.navbar-fixed-bottom .dropdown .menu .backdrop{position:fixed;left:0;right:0;bottom:0;top:0;z-index:990}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{border-top:0;border-bottom:4px solid;content:\"\"}.dropup>.menu,.navbar-fixed-bottom .dropdown>.menu{top:auto;bottom:100%;margin-bottom:2px}.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;float:left}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:2}.btn+.btn-group,.btn-group .btn+.btn,.btn-group+.btn,.btn-group+.btn-group{margin-left:-1px}.btn-toolbar{margin-left:-5px}.btn-toolbar .btn-group,.btn-toolbar .input-group{float:left}.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group{margin-left:5px}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){-webkit-border-radius:0;border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{-webkit-border-radius:0;border-radius:0}.btn-group>.btn-group:first-child>.btn:last-child,.btn-group>.btn-group:first-child>.dropdown-toggle{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:last-child>.btn:first-child{border-top-left-radius:0;border-bottom-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group>.btn+.dropdown-toggle{padding-left:8px;padding-right:8px}.btn-group>.btn.lg+.dropdown-toggle{padding-left:12px;padding-right:12px}.btn-group .btn-group.open .dropdown-toggle{-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,.125);box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn-group .btn-group.open .dropdown-toggle.btn.link{-webkit-box-shadow:none;box-shadow:none}.btn-group.justified{display:table;width:100%;table-layout:fixed;border-collapse:separate}.btn-group.justified>.btn,.btn-group.justified>.btn-group{float:none;display:table-cell;width:1%}.btn-group.justified>.btn-group .btn{width:100%}.btn-group.justified>.btn-group .dropdown-menu{left:auto}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn{display:block;float:none;width:100%;max-width:100%}.btn-group-vertical>.btn-group>.btn{float:none}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){-webkit-border-radius:0;border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-top-right-radius:4px;border-bottom-left-radius:0;border-bottom-right-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-bottom-left-radius:4px;border-top-left-radius:0;border-top-right-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle,.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child,.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{-webkit-border-radius:0;border-radius:0}[data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn input[type=radio],[data-toggle=buttons]>.btn-group>.btn input[type=checkbox],[data-toggle=buttons]>.btn-group>.btn input[type=radio]{position:auto;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:table;border-collapse:separate}.input-group[class*=col-]{float:none;padding-left:0;padding-right:0}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group .form-control,.input-group-addon,.input-group-btn{display:table-cell}.input-group .form-control:not(:first-child):not(:last-child),.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child){-webkit-border-radius:0;border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:6px 12px;font-size:14px;font-weight:400;line-height:1;color:grey;text-align:center;background-color:#eee;border:1px solid #ccc;-webkit-border-radius:4px;border-radius:4px}.input-group-addon.input.sm{padding:5px 10px;font-size:12px;-webkit-border-radius:3px;border-radius:3px}.input-group-addon.input.lg{padding:10px 16px;font-size:18px;-webkit-border-radius:6px;border-radius:6px}.input-group-addon input[type=checkbox],.input-group-addon input[type=radio]{margin-top:0}.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn-group:not(:last-child)>.btn,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.input-group-addon:first-child{border-right:0}.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-addon:last-child{border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:active,.input-group-btn>.btn:focus,.input-group-btn>.btn:hover{z-index:2}.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group{margin-right:-1px}.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group{margin-left:-1px}.nav{margin-bottom:0;padding-left:0;list-style:none}.nav>li{position:relative;display:block}.nav>li>a{position:relative;display:block;padding:10px 15px}.nav>li>a:focus,.nav>li>a:hover{text-decoration:none;background-color:#eee}.nav.disabled>a{color:#777}.nav.disabled>a:focus,.nav.disabled>a:hover{color:#777;text-decoration:none;background-color:transparent;cursor:not-allowed}.nav .open>a,.nav .open>a:focus,.nav .open>a:hover{background-color:#eee;border-color:#3782c4}.nav>li>a>img{max-width:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{float:left;margin-bottom:-1px}.nav-tabs>li>a{margin-right:2px;line-height:1.428571428571429;border:1px solid transparent;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0}.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover{color:grey;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent;cursor:default}.nav-pills>li{float:left}.nav-pills>li>a{-webkit-border-radius:4px;border-radius:4px}.nav-pills>li+li{margin-left:2px}.nav-pills>li.active>a,.nav-pills>li.active>a:focus,.nav-pills>li.active>a:hover{color:#fff;background-color:#3782c4}.nav-pills.stacked>li{float:none}.nav-pills.stacked>li+li{margin-top:2px;margin-left:0}.nav.justified{width:100%}.nav.justified>li{float:none}.nav.justified>li>a{text-align:center;margin-bottom:5px}.nav.justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav.justified>li{display:table-cell;width:1%}.nav.justified>li>a{margin-bottom:0}}.nav-tabs.justified{border-bottom:0}.nav-tabs.justified>li>a{margin-right:0;-webkit-border-radius:4px;border-radius:4px}.nav-tabs.justified>.active>a,.nav-tabs.justified>.active>a:focus,.nav-tabs.justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs.justified>li>a{border-bottom:1px solid #ddd;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0}.nav-tabs.justified>.active>a,.nav-tabs.justified>.active>a:focus,.nav-tabs.justified>.active>a:hover{border-bottom-color:#fff}}.tab-content>.tab-pane{display:none;visibility:hidden}.tab-content>.active{display:block;visibility:visible}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.navbar{position:relative;min-height:50px;margin-bottom:20px;border:1px solid transparent}.navbar.navbar-fixed-bottom,.navbar.navbar-fixed-top{height:50px}@media (min-width:768px){.navbar{-webkit-border-radius:4px;border-radius:4px}}@media (min-width:768px){.navbar-header{float:left}}.navbar-collapse{overflow-x:visible;padding-right:7px;padding-left:7px;-webkit-overflow-scrolling:touch}.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse{background-color:#fff;border-right:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.1);box-shadow:inset 0 1px 0 rgba(255,255,255,.1);width:70%}@media (orientation:landscape){.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse{width:42%}}.navbar-collapse.in{overflow-y:auto}@media (min-width:768px){.navbar-collapse{width:auto;border-top:0;-webkit-box-shadow:none;box-shadow:none}.navbar-collapse.collapse{display:block!important;visibility:visible!important;height:auto!important;padding-bottom:0;overflow:visible!important;left:0!important}.navbar-collapse.in{overflow-y:visible}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse{padding-left:0;padding-right:0;border-right:0;-webkit-box-shadow:none;box-shadow:none;width:auto;background-color:inherit}}.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:-7px;margin-left:-7px}@media (min-width:768px){.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:0;margin-left:0}}.navbar-static-top{z-index:1000;border-width:0 0 1px}@media (min-width:768px){.navbar-static-top{-webkit-border-radius:0;border-radius:0}}.navbar-fixed-bottom,.navbar-fixed-top{position:fixed;right:0;left:0;z-index:1030}@media (min-width:768px){.navbar-fixed-bottom,.navbar-fixed-top{margin-right:0;margin-left:0}}.navbar-fixed-top{top:0;border-width:0 0 1px}.navbar-fixed-top,.navbar-fixed-top>.container,.navbar-fixed-top>.navbar-collapse{height:50px}@media (min-width:768px){.navbar-fixed-top,.navbar-fixed-top>.container,.navbar-fixed-top>.navbar-collapse{height:auto}}.navbar-fixed-top .navbar-collapse{z-index:1029;display:block;left:0;visibility:visible;position:relative;-webkit-transition:left .2s ease-out;-moz-transition:left .2s ease-out;-o-transition:left .2s ease-out;-ms-transition:left .2s ease-out;transition:left .2s ease-out;height:100vh;padding-bottom:51px}.navbar-fixed-top .navbar-collapse>ul{margin-top:0;overflow-y:auto;height:100%}@media (orientation:landscape){.navbar-fixed-top .navbar-collapse>ul{overflow-y:inherit}}.navbar-fixed-top .navbar-collapse.collapse{left:-71%}@media (orientation:landscape){.navbar-fixed-top .navbar-collapse.collapse{left:-43%}}@media (min-width:768px){.navbar-fixed-top .navbar-collapse{-webkit-transition:none;-moz-transition:none;-o-transition:none;-ms-transition:none;transition:none}}.navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}.navbar-brand{float:left;padding:15px 7px;font-size:18px;line-height:20px;height:50px}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-brand>img{display:block}@media (min-width:768px){.navbar>.container .navbar-brand,.navbar>.container-fluid .navbar-brand{margin-left:-7px}}.navbar-toggle{position:relative;float:left;margin-left:7px;padding:9px 10px;margin-top:8px;margin-bottom:8px;background-color:transparent;background-image:none;border:none}.navbar-toggle:focus{outline:0}.navbar-toggle .icon-bar{display:block;width:22px;height:2px;-webkit-border-radius:1px;border-radius:1px}.navbar-toggle .icon-bar+.icon-bar{margin-top:4px}@media (min-width:768px){.navbar-toggle{display:none}}.navbar-nav{margin:7.5px -7px}.navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:20px}@media (max-width:767px){.navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;-webkit-box-shadow:none;box-shadow:none}.navbar-nav .open .dropdown-menu .dropdown-header,.navbar-nav .open .dropdown-menu>li>a{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a{line-height:20px}.navbar-nav .open .dropdown-menu>li>a:focus,.navbar-nav .open .dropdown-menu>li>a:hover{background-image:none}}@media (min-width:768px){.navbar-nav{float:left;margin:0}.navbar-nav>li{float:left}.navbar-nav>li>a{padding-top:15px;padding-bottom:15px}}.navbar-form{margin:8px -7px;padding:10px 7px;border-top:1px solid transparent;border-bottom:1px solid transparent;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1);box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1)}@media (max-width:767px){.navbar-form .form-group{margin-bottom:5px}.navbar-form .form-group:last-child{margin-bottom:0}}@media (min-width:768px){.navbar-form{width:auto;border:0;margin-left:0;margin-right:0;padding-top:0;padding-bottom:0;-webkit-box-shadow:none;box-shadow:none}}.navbar-nav>li>.dropdown-menu{margin-top:0;border-top-left-radius:0;border-top-right-radius:0}.navbar-fixed-bottom .navbar-nav>li>.dropdown-menu{margin-bottom:0;border-radius:4px 4px 0 0}.navbar-btn{margin-top:8px;margin-bottom:8px}.navbar-btn.btn.sm{margin-top:10px;margin-bottom:10px}.navbar-btn.btn.xs{margin-top:14px;margin-bottom:14px}.navbar-text{margin-top:15px;margin-bottom:15px}@media (min-width:768px){.navbar-text{float:left;margin-left:7px;margin-right:7px}}@media (min-width:768px){.navbar-left{float:left!important}.navbar-right{float:right!important;margin-right:-7px}.navbar-right~.navbar-right{margin-right:0}}.navbar-default .navbar-header{background-color:#f8f8f8;border-color:#e8e8e8;border-bottom-width:1px;border-bottom-style:solid}@media (min-width:768px){.navbar-default{background-color:#f8f8f8;border-color:#e8e8e8}.navbar-default .navbar-header{background-color:transparent;border-width:0}}.navbar-default .navbar-brand{color:#777}.navbar-default .navbar-brand:focus,.navbar-default .navbar-brand:hover{color:#6b6b6b;background-color:transparent}.navbar-default .navbar-nav>li>a,.navbar-default .navbar-text{color:#777}.navbar-default .navbar-nav>li>a:focus,.navbar-default .navbar-nav>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:focus,.navbar-default .navbar-nav>.active>a:hover{color:#555;background-color:#e8e8e8}.navbar-default .navbar-nav>.disabled>a,.navbar-default .navbar-nav>.disabled>a:focus,.navbar-default .navbar-nav>.disabled>a:hover{color:#ccc;background-color:transparent}.navbar-default .navbar-toggle{border-color:#ddd}.navbar-default .navbar-toggle:focus,.navbar-default .navbar-toggle:hover{background-color:#ddd}.navbar-default .navbar-toggle .icon-bar{background-color:#888}.navbar-default .navbar-collapse,.navbar-default .navbar-form{border-color:#e8e8e8}.navbar-default .navbar-nav>.open>a,.navbar-default .navbar-nav>.open>a:focus,.navbar-default .navbar-nav>.open>a:hover{background-color:#e8e8e8;color:#555}@media (max-width:767px){.navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#777}.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover{color:#555;background-color:#e8e8e8}.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#ccc;background-color:transparent}}.navbar-default .navbar-link{color:#777}.navbar-default .navbar-link:hover{color:#333}.navbar-default .btn-link{color:#777}.navbar-default .btn-link:focus,.navbar-default .btn-link:hover{color:#333}.navbar-default .btn-link[disabled]:focus,.navbar-default .btn-link[disabled]:hover,fieldset[disabled] .navbar-default .btn-link:focus,fieldset[disabled] .navbar-default .btn-link:hover{color:#ccc}.navbar-inverse{background-color:#222;border-color:#1f1f1f}.navbar-inverse .navbar-brand{color:#8b8b8b}.navbar-inverse .navbar-brand:focus,.navbar-inverse .navbar-brand:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>li>a,.navbar-inverse .navbar-text{color:#8b8b8b}.navbar-inverse .navbar-nav>li>a:focus,.navbar-inverse .navbar-nav>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>.active>a,.navbar-inverse .navbar-nav>.active>a:focus,.navbar-inverse .navbar-nav>.active>a:hover{color:#fff;background-color:#1f1f1f}.navbar-inverse .navbar-nav>.disabled>a,.navbar-inverse .navbar-nav>.disabled>a:focus,.navbar-inverse .navbar-nav>.disabled>a:hover{color:#444;background-color:transparent}.navbar-inverse .navbar-toggle{border-color:#333}.navbar-inverse .navbar-toggle:focus,.navbar-inverse .navbar-toggle:hover{background-color:#333}.navbar-inverse .navbar-toggle .icon-bar{background-color:#fff}.navbar-inverse .navbar-collapse,.navbar-inverse .navbar-form{border-color:#202020}.navbar-inverse .navbar-nav>.open>a,.navbar-inverse .navbar-nav>.open>a:focus,.navbar-inverse .navbar-nav>.open>a:hover{background-color:#1f1f1f;color:#fff}@media (max-width:767px){.navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header{border-color:#1f1f1f}.navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#1f1f1f}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a{color:#8b8b8b}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover{color:#fff;background-color:#1f1f1f}.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#444;background-color:transparent}}.navbar-inverse .navbar-link{color:#8b8b8b}.navbar-inverse .navbar-link:hover{color:#fff}.navbar-inverse .btn-link{color:#8b8b8b}.navbar-inverse .btn-link:focus,.navbar-inverse .btn-link:hover{color:#fff}.navbar-inverse .btn-link[disabled]:focus,.navbar-inverse .btn-link[disabled]:hover,fieldset[disabled] .navbar-inverse .btn-link:focus,fieldset[disabled] .navbar-inverse .btn-link:hover{color:#444}/*!\n *  Font Awesome 4.3.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(../jspm_packages/npm/font-awesome@4.3.0/css/fonts/fontawesome-webfont.eot?v=4.3.0);src:url(../jspm_packages/npm/font-awesome@4.3.0/css/fonts/fontawesome-webfont.eot?#iefix&v=4.3.0) format('embedded-opentype'),url(../jspm_packages/npm/font-awesome@4.3.0/css/fonts/fontawesome-webfont.woff2?v=4.3.0) format('woff2'),url(../jspm_packages/npm/font-awesome@4.3.0/css/fonts/fontawesome-webfont.woff?v=4.3.0) format('woff'),url(../jspm_packages/npm/font-awesome@4.3.0/css/fonts/fontawesome-webfont.ttf?v=4.3.0) format('truetype'),url(../jspm_packages/npm/font-awesome@4.3.0/css/fonts/fontawesome-webfont.svg?v=4.3.0#fontawesomeregular) format('svg');font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translate(0,0)}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);-webkit-transform:scale(-1,1);-ms-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);-webkit-transform:scale(1,-1);-ms-transform:scale(1,-1);transform:scale(1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\f000\"}.fa-music:before{content:\"\\f001\"}.fa-search:before{content:\"\\f002\"}.fa-envelope-o:before{content:\"\\f003\"}.fa-heart:before{content:\"\\f004\"}.fa-star:before{content:\"\\f005\"}.fa-star-o:before{content:\"\\f006\"}.fa-user:before{content:\"\\f007\"}.fa-film:before{content:\"\\f008\"}.fa-th-large:before{content:\"\\f009\"}.fa-th:before{content:\"\\f00a\"}.fa-th-list:before{content:\"\\f00b\"}.fa-check:before{content:\"\\f00c\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\\f00d\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-search-minus:before{content:\"\\f010\"}.fa-power-off:before{content:\"\\f011\"}.fa-signal:before{content:\"\\f012\"}.fa-cog:before,.fa-gear:before{content:\"\\f013\"}.fa-trash-o:before{content:\"\\f014\"}.fa-home:before{content:\"\\f015\"}.fa-file-o:before{content:\"\\f016\"}.fa-clock-o:before{content:\"\\f017\"}.fa-road:before{content:\"\\f018\"}.fa-download:before{content:\"\\f019\"}.fa-arrow-circle-o-down:before{content:\"\\f01a\"}.fa-arrow-circle-o-up:before{content:\"\\f01b\"}.fa-inbox:before{content:\"\\f01c\"}.fa-play-circle-o:before{content:\"\\f01d\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\\f01e\"}.fa-refresh:before{content:\"\\f021\"}.fa-list-alt:before{content:\"\\f022\"}.fa-lock:before{content:\"\\f023\"}.fa-flag:before{content:\"\\f024\"}.fa-headphones:before{content:\"\\f025\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-up:before{content:\"\\f028\"}.fa-qrcode:before{content:\"\\f029\"}.fa-barcode:before{content:\"\\f02a\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-book:before{content:\"\\f02d\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-print:before{content:\"\\f02f\"}.fa-camera:before{content:\"\\f030\"}.fa-font:before{content:\"\\f031\"}.fa-bold:before{content:\"\\f032\"}.fa-italic:before{content:\"\\f033\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-right:before{content:\"\\f038\"}.fa-align-justify:before{content:\"\\f039\"}.fa-list:before{content:\"\\f03a\"}.fa-dedent:before,.fa-outdent:before{content:\"\\f03b\"}.fa-indent:before{content:\"\\f03c\"}.fa-video-camera:before{content:\"\\f03d\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\\f03e\"}.fa-pencil:before{content:\"\\f040\"}.fa-map-marker:before{content:\"\\f041\"}.fa-adjust:before{content:\"\\f042\"}.fa-tint:before{content:\"\\f043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\f044\"}.fa-share-square-o:before{content:\"\\f045\"}.fa-check-square-o:before{content:\"\\f046\"}.fa-arrows:before{content:\"\\f047\"}.fa-step-backward:before{content:\"\\f048\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-backward:before{content:\"\\f04a\"}.fa-play:before{content:\"\\f04b\"}.fa-pause:before{content:\"\\f04c\"}.fa-stop:before{content:\"\\f04d\"}.fa-forward:before{content:\"\\f04e\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-step-forward:before{content:\"\\f051\"}.fa-eject:before{content:\"\\f052\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-times-circle:before{content:\"\\f057\"}.fa-check-circle:before{content:\"\\f058\"}.fa-question-circle:before{content:\"\\f059\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-times-circle-o:before{content:\"\\f05c\"}.fa-check-circle-o:before{content:\"\\f05d\"}.fa-ban:before{content:\"\\f05e\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\f064\"}.fa-expand:before{content:\"\\f065\"}.fa-compress:before{content:\"\\f066\"}.fa-plus:before{content:\"\\f067\"}.fa-minus:before{content:\"\\f068\"}.fa-asterisk:before{content:\"\\f069\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-gift:before{content:\"\\f06b\"}.fa-leaf:before{content:\"\\f06c\"}.fa-fire:before{content:\"\\f06d\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\\f071\"}.fa-plane:before{content:\"\\f072\"}.fa-calendar:before{content:\"\\f073\"}.fa-random:before{content:\"\\f074\"}.fa-comment:before{content:\"\\f075\"}.fa-magnet:before{content:\"\\f076\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-retweet:before{content:\"\\f079\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-arrows-v:before{content:\"\\f07d\"}.fa-arrows-h:before{content:\"\\f07e\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\f080\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-key:before{content:\"\\f084\"}.fa-cogs:before,.fa-gears:before{content:\"\\f085\"}.fa-comments:before{content:\"\\f086\"}.fa-thumbs-o-up:before{content:\"\\f087\"}.fa-thumbs-o-down:before{content:\"\\f088\"}.fa-star-half:before{content:\"\\f089\"}.fa-heart-o:before{content:\"\\f08a\"}.fa-sign-out:before{content:\"\\f08b\"}.fa-linkedin-square:before{content:\"\\f08c\"}.fa-thumb-tack:before{content:\"\\f08d\"}.fa-external-link:before{content:\"\\f08e\"}.fa-sign-in:before{content:\"\\f090\"}.fa-trophy:before{content:\"\\f091\"}.fa-github-square:before{content:\"\\f092\"}.fa-upload:before{content:\"\\f093\"}.fa-lemon-o:before{content:\"\\f094\"}.fa-phone:before{content:\"\\f095\"}.fa-square-o:before{content:\"\\f096\"}.fa-bookmark-o:before{content:\"\\f097\"}.fa-phone-square:before{content:\"\\f098\"}.fa-twitter:before{content:\"\\f099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\f09a\"}.fa-github:before{content:\"\\f09b\"}.fa-unlock:before{content:\"\\f09c\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-rss:before{content:\"\\f09e\"}.fa-hdd-o:before{content:\"\\f0a0\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bell:before{content:\"\\f0f3\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-hand-o-right:before{content:\"\\f0a4\"}.fa-hand-o-left:before{content:\"\\f0a5\"}.fa-hand-o-up:before{content:\"\\f0a6\"}.fa-hand-o-down:before{content:\"\\f0a7\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-globe:before{content:\"\\f0ac\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-filter:before{content:\"\\f0b0\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-group:before,.fa-users:before{content:\"\\f0c0\"}.fa-chain:before,.fa-link:before{content:\"\\f0c1\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-flask:before{content:\"\\f0c3\"}.fa-cut:before,.fa-scissors:before{content:\"\\f0c4\"}.fa-copy:before,.fa-files-o:before{content:\"\\f0c5\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-floppy-o:before,.fa-save:before{content:\"\\f0c7\"}.fa-square:before{content:\"\\f0c8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\\f0c9\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-underline:before{content:\"\\f0cd\"}.fa-table:before{content:\"\\f0ce\"}.fa-magic:before{content:\"\\f0d0\"}.fa-truck:before{content:\"\\f0d1\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-plus:before{content:\"\\f0d5\"}.fa-money:before{content:\"\\f0d6\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-columns:before{content:\"\\f0db\"}.fa-sort:before,.fa-unsorted:before{content:\"\\f0dc\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\\f0dd\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\\f0de\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-linkedin:before{content:\"\\f0e1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\f0e2\"}.fa-gavel:before,.fa-legal:before{content:\"\\f0e3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\f0e4\"}.fa-comment-o:before{content:\"\\f0e5\"}.fa-comments-o:before{content:\"\\f0e6\"}.fa-bolt:before,.fa-flash:before{content:\"\\f0e7\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-clipboard:before,.fa-paste:before{content:\"\\f0ea\"}.fa-lightbulb-o:before{content:\"\\f0eb\"}.fa-exchange:before{content:\"\\f0ec\"}.fa-cloud-download:before{content:\"\\f0ed\"}.fa-cloud-upload:before{content:\"\\f0ee\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-bell-o:before{content:\"\\f0a2\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cutlery:before{content:\"\\f0f5\"}.fa-file-text-o:before{content:\"\\f0f6\"}.fa-building-o:before{content:\"\\f0f7\"}.fa-hospital-o:before{content:\"\\f0f8\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-beer:before{content:\"\\f0fc\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angle-down:before{content:\"\\f107\"}.fa-desktop:before{content:\"\\f108\"}.fa-laptop:before{content:\"\\f109\"}.fa-tablet:before{content:\"\\f10a\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\f10b\"}.fa-circle-o:before{content:\"\\f10c\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-spinner:before{content:\"\\f110\"}.fa-circle:before{content:\"\\f111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\f112\"}.fa-github-alt:before{content:\"\\f113\"}.fa-folder-o:before{content:\"\\f114\"}.fa-folder-open-o:before{content:\"\\f115\"}.fa-smile-o:before{content:\"\\f118\"}.fa-frown-o:before{content:\"\\f119\"}.fa-meh-o:before{content:\"\\f11a\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-keyboard-o:before{content:\"\\f11c\"}.fa-flag-o:before{content:\"\\f11d\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-terminal:before{content:\"\\f120\"}.fa-code:before{content:\"\\f121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\f122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\f123\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-crop:before{content:\"\\f125\"}.fa-code-fork:before{content:\"\\f126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\\f127\"}.fa-question:before{content:\"\\f128\"}.fa-info:before{content:\"\\f129\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-superscript:before{content:\"\\f12b\"}.fa-subscript:before{content:\"\\f12c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-shield:before{content:\"\\f132\"}.fa-calendar-o:before{content:\"\\f133\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-rocket:before{content:\"\\f135\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-html5:before{content:\"\\f13b\"}.fa-css3:before{content:\"\\f13c\"}.fa-anchor:before{content:\"\\f13d\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-bullseye:before{content:\"\\f140\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-rss-square:before{content:\"\\f143\"}.fa-play-circle:before{content:\"\\f144\"}.fa-ticket:before{content:\"\\f145\"}.fa-minus-square:before{content:\"\\f146\"}.fa-minus-square-o:before{content:\"\\f147\"}.fa-level-up:before{content:\"\\f148\"}.fa-level-down:before{content:\"\\f149\"}.fa-check-square:before{content:\"\\f14a\"}.fa-pencil-square:before{content:\"\\f14b\"}.fa-external-link-square:before{content:\"\\f14c\"}.fa-share-square:before{content:\"\\f14d\"}.fa-compass:before{content:\"\\f14e\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\\f150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\\f151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\\f152\"}.fa-eur:before,.fa-euro:before{content:\"\\f153\"}.fa-gbp:before{content:\"\\f154\"}.fa-dollar:before,.fa-usd:before{content:\"\\f155\"}.fa-inr:before,.fa-rupee:before{content:\"\\f156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\\f157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\\f158\"}.fa-krw:before,.fa-won:before{content:\"\\f159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\f15a\"}.fa-file:before{content:\"\\f15b\"}.fa-file-text:before{content:\"\\f15c\"}.fa-sort-alpha-asc:before{content:\"\\f15d\"}.fa-sort-alpha-desc:before{content:\"\\f15e\"}.fa-sort-amount-asc:before{content:\"\\f160\"}.fa-sort-amount-desc:before{content:\"\\f161\"}.fa-sort-numeric-asc:before{content:\"\\f162\"}.fa-sort-numeric-desc:before{content:\"\\f163\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-youtube-square:before{content:\"\\f166\"}.fa-youtube:before{content:\"\\f167\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-youtube-play:before{content:\"\\f16a\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-instagram:before{content:\"\\f16d\"}.fa-flickr:before{content:\"\\f16e\"}.fa-adn:before{content:\"\\f170\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitbucket-square:before{content:\"\\f172\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-long-arrow-down:before{content:\"\\f175\"}.fa-long-arrow-up:before{content:\"\\f176\"}.fa-long-arrow-left:before{content:\"\\f177\"}.fa-long-arrow-right:before{content:\"\\f178\"}.fa-apple:before{content:\"\\f179\"}.fa-windows:before{content:\"\\f17a\"}.fa-android:before{content:\"\\f17b\"}.fa-linux:before{content:\"\\f17c\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-skype:before{content:\"\\f17e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-trello:before{content:\"\\f181\"}.fa-female:before{content:\"\\f182\"}.fa-male:before{content:\"\\f183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\f184\"}.fa-sun-o:before{content:\"\\f185\"}.fa-moon-o:before{content:\"\\f186\"}.fa-archive:before{content:\"\\f187\"}.fa-bug:before{content:\"\\f188\"}.fa-vk:before{content:\"\\f189\"}.fa-weibo:before{content:\"\\f18a\"}.fa-renren:before{content:\"\\f18b\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-arrow-circle-o-right:before{content:\"\\f18e\"}.fa-arrow-circle-o-left:before{content:\"\\f190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\\f191\"}.fa-dot-circle-o:before{content:\"\\f192\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\\f195\"}.fa-plus-square-o:before{content:\"\\f196\"}.fa-space-shuttle:before{content:\"\\f197\"}.fa-slack:before{content:\"\\f198\"}.fa-envelope-square:before{content:\"\\f199\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-openid:before{content:\"\\f19b\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\\f19c\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\\f19d\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-google:before{content:\"\\f1a0\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-reddit-square:before{content:\"\\f1a2\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-digg:before{content:\"\\f1a6\"}.fa-pied-piper:before{content:\"\\f1a7\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-language:before{content:\"\\f1ab\"}.fa-fax:before{content:\"\\f1ac\"}.fa-building:before{content:\"\\f1ad\"}.fa-child:before{content:\"\\f1ae\"}.fa-paw:before{content:\"\\f1b0\"}.fa-spoon:before{content:\"\\f1b1\"}.fa-cube:before{content:\"\\f1b2\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-behance:before{content:\"\\f1b4\"}.fa-behance-square:before{content:\"\\f1b5\"}.fa-steam:before{content:\"\\f1b6\"}.fa-steam-square:before{content:\"\\f1b7\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-automobile:before,.fa-car:before{content:\"\\f1b9\"}.fa-cab:before,.fa-taxi:before{content:\"\\f1ba\"}.fa-tree:before{content:\"\\f1bb\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-database:before{content:\"\\f1c0\"}.fa-file-pdf-o:before{content:\"\\f1c1\"}.fa-file-word-o:before{content:\"\\f1c2\"}.fa-file-excel-o:before{content:\"\\f1c3\"}.fa-file-powerpoint-o:before{content:\"\\f1c4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\\f1c5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\\f1c6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\\f1c7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\f1c8\"}.fa-file-code-o:before{content:\"\\f1c9\"}.fa-vine:before{content:\"\\f1ca\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\\f1cd\"}.fa-circle-o-notch:before{content:\"\\f1ce\"}.fa-ra:before,.fa-rebel:before{content:\"\\f1d0\"}.fa-empire:before,.fa-ge:before{content:\"\\f1d1\"}.fa-git-square:before{content:\"\\f1d2\"}.fa-git:before{content:\"\\f1d3\"}.fa-hacker-news:before{content:\"\\f1d4\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-qq:before{content:\"\\f1d6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\f1d7\"}.fa-paper-plane:before,.fa-send:before{content:\"\\f1d8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\\f1d9\"}.fa-history:before{content:\"\\f1da\"}.fa-circle-thin:before,.fa-genderless:before{content:\"\\f1db\"}.fa-header:before{content:\"\\f1dc\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-sliders:before{content:\"\\f1de\"}.fa-share-alt:before{content:\"\\f1e0\"}.fa-share-alt-square:before{content:\"\\f1e1\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\\f1e3\"}.fa-tty:before{content:\"\\f1e4\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-plug:before{content:\"\\f1e6\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-newspaper-o:before{content:\"\\f1ea\"}.fa-wifi:before{content:\"\\f1eb\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-bell-slash-o:before{content:\"\\f1f7\"}.fa-trash:before{content:\"\\f1f8\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-at:before{content:\"\\f1fa\"}.fa-eyedropper:before{content:\"\\f1fb\"}.fa-paint-brush:before{content:\"\\f1fc\"}.fa-birthday-cake:before{content:\"\\f1fd\"}.fa-area-chart:before{content:\"\\f1fe\"}.fa-pie-chart:before{content:\"\\f200\"}.fa-line-chart:before{content:\"\\f201\"}.fa-lastfm:before{content:\"\\f202\"}.fa-lastfm-square:before{content:\"\\f203\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-bicycle:before{content:\"\\f206\"}.fa-bus:before{content:\"\\f207\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-angellist:before{content:\"\\f209\"}.fa-cc:before{content:\"\\f20a\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\\f20b\"}.fa-meanpath:before{content:\"\\f20c\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-dashcube:before{content:\"\\f210\"}.fa-forumbee:before{content:\"\\f211\"}.fa-leanpub:before{content:\"\\f212\"}.fa-sellsy:before{content:\"\\f213\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-diamond:before{content:\"\\f219\"}.fa-ship:before{content:\"\\f21a\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-street-view:before{content:\"\\f21d\"}.fa-heartbeat:before{content:\"\\f21e\"}.fa-venus:before{content:\"\\f221\"}.fa-mars:before{content:\"\\f222\"}.fa-mercury:before{content:\"\\f223\"}.fa-transgender:before{content:\"\\f224\"}.fa-transgender-alt:before{content:\"\\f225\"}.fa-venus-double:before{content:\"\\f226\"}.fa-mars-double:before{content:\"\\f227\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-mars-stroke-h:before{content:\"\\f22b\"}.fa-neuter:before{content:\"\\f22c\"}.fa-facebook-official:before{content:\"\\f230\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-server:before{content:\"\\f233\"}.fa-user-plus:before{content:\"\\f234\"}.fa-user-times:before{content:\"\\f235\"}.fa-bed:before,.fa-hotel:before{content:\"\\f236\"}.fa-viacoin:before{content:\"\\f237\"}.fa-train:before{content:\"\\f238\"}.fa-subway:before{content:\"\\f239\"}.fa-medium:before{content:\"\\f23a\"}.page-host{margin-top:60px}small.date{float:right}div.container{position:relative}div.app-bar-upper-right{position:absolute!important;top:-7px;right:0;border:none!important;left:auto!important;background-color:transparent!important;height:auto!important;width:auto!important}@media (min-width:768px){div.app-bar-upper-right{top:-3px}}.fade-visible{opacity:1;-ms-filter:none;filter:none;-webkit-transition:opacity .2s ease-in;-moz-transition:opacity .2s ease-in;-o-transition:opacity .2s ease-in;-ms-transition:opacity .2s ease-in;transition:opacity .2s ease-in}.fade-hidden{opacity:0;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";filter:alpha(opacity=0);-webkit-transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-o-transition:opacity .2s ease-out;-ms-transition:opacity .2s ease-out;transition:opacity .2s ease-out}");
//# sourceMappingURL=app.js.map