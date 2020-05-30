// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../src/views/Tool.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../store/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: "Tool",
  data: function data() {
    return {
      isOpen: false
    };
  },
  props: {
    slug: {
      type: String,
      required: true
    },
    toolSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    road: function road() {
      var _this = this;

      return _index.default.roadmap.find(function (road) {
        return road.slug === _this.slug;
      });
    },
    tool: function tool() {
      var _this2 = this;

      return this.road.tools.find(function (tool) {
        return tool.slug === _this2.toolSlug;
      });
    }
  }
};
exports.default = _default;
        var $d4ab6d = exports.default || module.exports;
      
      if (typeof $d4ab6d === 'function') {
        $d4ab6d = $d4ab6d.options;
      }
    
        /* template */
        Object.assign($d4ab6d, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "tool" } },
    [
      _c(
        "section",
        {
          staticClass: "section hero has-text-centered",
          attrs: { id: "hero" }
        },
        [
          _c("div", { staticClass: "hero-body" }, [
            _c("div", { staticClass: "container" }, [
              _c(
                "h2",
                { staticClass: "title is-2 text-secondary is-size-4-mobile" },
                [_vm._v(_vm._s(_vm.tool.name))]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _vm._l(_vm.tool.text, function(content) {
        return _c("section", { key: content.id, staticClass: "section" }, [
          _c("div", { staticClass: "container sub-section" }, [
            _c(
              "h3",
              {
                staticClass: "title is-spaced is-4 text-secondary content-title"
              },
              [_vm._v(_vm._s(content.title))]
            ),
            _vm._v(" "),
            _c(
              "p",
              { staticClass: "subtitle is-5 text-secondary content-paragraph" },
              [_vm._v(_vm._s(content.paragraph1))]
            ),
            _vm._v(" "),
            _c(
              "p",
              { staticClass: "subtitle is-5 text-secondary content-paragraph" },
              [_vm._v(_vm._s(content.paragraph2))]
            ),
            _vm._v(" "),
            _c(
              "p",
              { staticClass: "subtitle is-5 text-secondary content-paragraph" },
              [_vm._v(_vm._s(content.paragraph3))]
            )
          ])
        ])
      }),
      _vm._v(" "),
      _vm.tool.options !== undefined
        ? _c(
            "section",
            { staticClass: "section" },
            _vm._l(_vm.tool.options, function(option) {
              return _c(
                "div",
                { key: option.name, staticClass: "container sub-section-tool" },
                [
                  _c(
                    "h4",
                    {
                      staticClass:
                        "title is-spaced is-5 text-secondary content-title"
                    },
                    [_vm._v(_vm._s(option.name))]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "subtitle is-6 text-secondary content-paragraph",
                      attrs: { href: option.link, target: "_blank" }
                    },
                    [_vm._v(_vm._s(option.link))]
                  )
                ]
              )
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _c("section", { staticClass: "section" }, [
        _c("div", { staticClass: "container sub-section" }, [
          _c("div", { staticClass: "wrapper-video has-text-centered" }, [
            _c(
              "button",
              {
                staticClass: "btn violet-bg-primary",
                on: {
                  click: function($event) {
                    _vm.isOpen = true
                  }
                }
              },
              [_vm._v("Curso de " + _vm._s(_vm.tool.name))]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "modal", class: { "is-active": _vm.isOpen } }, [
        _c("div", {
          staticClass: "modal-background",
          on: {
            click: function($event) {
              _vm.isOpen = false
            }
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "modal-content" }, [
          _c("figure", { staticClass: "image is-16by9" }, [
            _vm.isOpen === true
              ? _c("iframe", {
                  staticClass: "has-ratio",
                  attrs: {
                    src: _vm.tool.video,
                    frameborder: "0",
                    allow:
                      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                    allowfullscreen: ""
                  }
                })
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("button", {
          staticClass: "modal-close is-large",
          on: {
            click: function($event) {
              _vm.isOpen = false
            }
          }
        })
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-d4ab6d",
            functional: undefined
          };
        })());
      
    /* hot reload */
    (function () {
      if (module.hot) {
        var api = require('vue-hot-reload-api');
        api.install(require('vue'));
        if (api.compatible) {
          module.hot.accept();
          if (!module.hot.data) {
            api.createRecord('$d4ab6d', $d4ab6d);
          } else {
            api.reload('$d4ab6d', $d4ab6d);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"../store/index.js":"../src/store/index.js","_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js","vue-hot-reload-api":"../node_modules/vue-hot-reload-api/dist/index.js","vue":"../node_modules/vue/dist/vue.common.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "41385" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/Tool.98dac4f9.js.map