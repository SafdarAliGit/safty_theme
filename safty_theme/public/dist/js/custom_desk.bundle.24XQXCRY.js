(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/@editorjs/editorjs/dist/editor.js
  var require_editor = __commonJS({
    "node_modules/@editorjs/editorjs/dist/editor.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.EditorJS = t() : e.EditorJS = t();
      }(window, function() {
        return function(e) {
          var t = {};
          function n(o) {
            if (t[o])
              return t[o].exports;
            var r = t[o] = { i: o, l: false, exports: {} };
            return e[o].call(r.exports, r, r.exports, n), r.l = true, r.exports;
          }
          return n.m = e, n.c = t, n.d = function(e2, t2, o) {
            n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: o });
          }, n.r = function(e2) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
          }, n.t = function(e2, t2) {
            if (1 & t2 && (e2 = n(e2)), 8 & t2)
              return e2;
            if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
              return e2;
            var o = /* @__PURE__ */ Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
              for (var r in e2)
                n.d(o, r, function(t3) {
                  return e2[t3];
                }.bind(null, r));
            return o;
          }, n.n = function(e2) {
            var t2 = e2 && e2.__esModule ? function() {
              return e2.default;
            } : function() {
              return e2;
            };
            return n.d(t2, "a", t2), t2;
          }, n.o = function(e2, t2) {
            return Object.prototype.hasOwnProperty.call(e2, t2);
          }, n.p = "", n(n.s = 187);
        }([function(e, t, n) {
          var o = n(10), r = n(16), i = n(27), a = n(23), s = n(31), l = function(e2, t2, n2) {
            var c, u, f, d, p = e2 & l.F, h = e2 & l.G, v = e2 & l.S, g = e2 & l.P, y = e2 & l.B, k = h ? o : v ? o[t2] || (o[t2] = {}) : (o[t2] || {}).prototype, b = h ? r : r[t2] || (r[t2] = {}), m = b.prototype || (b.prototype = {});
            for (c in h && (n2 = t2), n2)
              f = ((u = !p && k && void 0 !== k[c]) ? k : n2)[c], d = y && u ? s(f, o) : g && "function" == typeof f ? s(Function.call, f) : f, k && a(k, c, f, e2 & l.U), b[c] != f && i(b, c, d), g && m[c] != f && (m[c] = f);
          };
          o.core = r, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l;
        }, function(e, t) {
          e.exports = function(e2) {
            return e2 && e2.__esModule ? e2 : { default: e2 };
          }, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t) {
          e.exports = function(e2, t2) {
            if (!(e2 instanceof t2))
              throw new TypeError("Cannot call a class as a function");
          }, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t) {
          function n(e2, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var o = t2[n2];
              o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e2, o.key, o);
            }
          }
          e.exports = function(e2, t2, o) {
            return t2 && n(e2.prototype, t2), o && n(e2, o), Object.defineProperty(e2, "prototype", { writable: false }), e2;
          }, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t) {
          function n(t2) {
            return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e2) {
              return e2.__proto__ || Object.getPrototypeOf(e2);
            }, e.exports.__esModule = true, e.exports.default = e.exports, n(t2);
          }
          e.exports = n, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t, n) {
          var o = n(111);
          e.exports = function(e2, t2) {
            if ("function" != typeof t2 && null !== t2)
              throw new TypeError("Super expression must either be null or a function");
            e2.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e2, writable: true, configurable: true } }), Object.defineProperty(e2, "prototype", { writable: false }), t2 && o(e2, t2);
          }, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t, n) {
          var o = n(7).default, r = n(152);
          e.exports = function(e2, t2) {
            if (t2 && ("object" === o(t2) || "function" == typeof t2))
              return t2;
            if (void 0 !== t2)
              throw new TypeError("Derived constructors may only return object or undefined");
            return r(e2);
          }, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t) {
          function n(t2) {
            return e.exports = n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
              return typeof e2;
            } : function(e2) {
              return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
            }, e.exports.__esModule = true, e.exports.default = e.exports, n(t2);
          }
          e.exports = n, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(20), n(372), n(21), n(403), n(19)], void 0 === (i = "function" == typeof (o = function(e2, t2, o2, r2, i2, a) {
            "use strict";
            var s, l = n(1);
            function c(e3, t3) {
              var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "log", o3 = arguments.length > 3 ? arguments[3] : void 0, r3 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "color: inherit";
              if ("console" in window && window.console[n2]) {
                var i3 = ["info", "log", "warn", "error"].includes(n2), a2 = [];
                switch (c.logLevel) {
                  case s.ERROR:
                    if ("error" !== n2)
                      return;
                    break;
                  case s.WARN:
                    if (!["error", "warn"].includes(n2))
                      return;
                    break;
                  case s.INFO:
                    if (!i3 || e3)
                      return;
                }
                o3 && a2.push(o3);
                var l2 = "Editor.js ".concat("2.26.5"), u2 = "line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";
                e3 && (i3 ? (a2.unshift(u2, r3), t3 = "%c".concat(l2, "%c ").concat(t3)) : t3 = "( ".concat(l2, " )").concat(t3));
                try {
                  if (i3)
                    if (o3) {
                      var f2;
                      (f2 = console)[n2].apply(f2, ["".concat(t3, " %o")].concat(a2));
                    } else {
                      var d2;
                      (d2 = console)[n2].apply(d2, [t3].concat(a2));
                    }
                  else
                    console[n2](t3);
                } catch (e4) {
                }
              }
            }
            Object.defineProperty(e2, "__esModule", { value: true }), e2.LogLevels = void 0, e2.array = function(e3) {
              return Array.prototype.slice.call(e3);
            }, e2.beautifyShortcut = function(e3) {
              var t3 = y();
              return e3 = e3.replace(/shift/gi, "\u21E7").replace(/backspace/gi, "\u232B").replace(/enter/gi, "\u23CE").replace(/up/gi, "\u2191").replace(/left/gi, "\u2192").replace(/down/gi, "\u2193").replace(/right/gi, "\u2190").replace(/escape/gi, "\u238B").replace(/insert/gi, "Ins").replace(/delete/gi, "\u2421").replace(/\+/gi, " + "), e3 = t3.mac ? e3.replace(/ctrl|cmd/gi, "\u2318").replace(/alt/gi, "\u2325") : e3.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN");
            }, e2.cacheable = function(e3, t3, n2) {
              var o3 = n2.value ? "value" : "get", r3 = n2[o3], i3 = "#".concat(t3, "Cache");
              if (n2[o3] = function() {
                if (void 0 === this[i3]) {
                  for (var e4 = arguments.length, t4 = new Array(e4), n3 = 0; n3 < e4; n3++)
                    t4[n3] = arguments[n3];
                  this[i3] = r3.apply.apply(r3, [this].concat(t4));
                }
                return this[i3];
              }, "get" === o3 && n2.set) {
                var a2 = n2.set;
                n2.set = function(t4) {
                  delete e3[i3], a2.apply(this, t4);
                };
              }
              return n2;
            }, e2.capitalize = function(e3) {
              return e3[0].toUpperCase() + e3.slice(1);
            }, e2.copyTextToClipboard = function(e3) {
              var t3 = a.default.make("div", "codex-editor-clipboard", { innerHTML: e3 });
              document.body.appendChild(t3);
              var n2 = window.getSelection(), o3 = document.createRange();
              o3.selectNode(t3), window.getSelection().removeAllRanges(), n2.addRange(o3), document.execCommand("copy"), document.body.removeChild(t3);
            }, e2.debounce = function(e3, t3, n2) {
              var o3, r3 = this;
              return function() {
                for (var i3 = arguments.length, a2 = new Array(i3), s2 = 0; s2 < i3; s2++)
                  a2[s2] = arguments[s2];
                var l2 = r3, c2 = function() {
                  o3 = null, n2 || e3.apply(l2, a2);
                }, u2 = n2 && !o3;
                window.clearTimeout(o3), o3 = window.setTimeout(c2, t3), u2 && e3.apply(l2, a2);
              };
            }, e2.deepMerge = function e3(t3) {
              for (var n2 = arguments.length, r3 = new Array(n2 > 1 ? n2 - 1 : 0), i3 = 1; i3 < n2; i3++)
                r3[i3 - 1] = arguments[i3];
              if (!r3.length)
                return t3;
              var a2 = r3.shift();
              if (h(t3) && h(a2))
                for (var s2 in a2)
                  h(a2[s2]) ? (t3[s2] || Object.assign(t3, (0, o2.default)({}, s2, {})), e3(t3[s2], a2[s2])) : Object.assign(t3, (0, o2.default)({}, s2, a2[s2]));
              return e3.apply(void 0, [t3].concat(r3));
            }, e2.delay = function(e3, t3) {
              return function() {
                var n2 = this, o3 = arguments;
                window.setTimeout(function() {
                  return e3.apply(n2, o3);
                }, t3);
              };
            }, e2.deprecationAssert = function(e3, t3, n2) {
              var o3 = "\xAB".concat(t3, "\xBB is deprecated and will be removed in the next major release. Please use the \xAB").concat(n2, "\xBB instead.");
              e3 && f(o3, "warn");
            }, e2.equals = function(e3, t3) {
              var n2 = Array.isArray(e3) || h(e3), o3 = Array.isArray(t3) || h(t3);
              return n2 || o3 ? JSON.stringify(e3) === JSON.stringify(t3) : e3 === t3;
            }, e2.generateBlockId = function() {
              return (0, i2.nanoid)(10);
            }, e2.generateId = function() {
              var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
              return "".concat(e3).concat(Math.floor(1e8 * Math.random()).toString(16));
            }, e2.getFileExtension = function(e3) {
              return e3.name.split(".").pop();
            }, e2.getUserOS = y, e2.getValidUrl = function(e3) {
              try {
                return new URL(e3).href;
              } catch (e4) {
              }
              return "//" === e3.substring(0, 2) ? window.location.protocol + e3 : window.location.origin + e3;
            }, e2.isBoolean = function(e3) {
              return "boolean" === d(e3);
            }, e2.isClass = function(e3) {
              return p(e3) && /^\s*class\s+/.test(e3.toString());
            }, e2.isEmpty = function(e3) {
              return !e3 || 0 === Object.keys(e3).length && e3.constructor === Object;
            }, e2.isFunction = p, e2.isIosDevice = void 0, e2.isMobileScreen = function() {
              return window.matchMedia("(max-width: ".concat(650, "px)")).matches;
            }, e2.isNumber = function(e3) {
              return "number" === d(e3);
            }, e2.isObject = h, e2.isPrintableKey = function(e3) {
              return e3 > 47 && e3 < 58 || 32 === e3 || 13 === e3 || 229 === e3 || e3 > 64 && e3 < 91 || e3 > 95 && e3 < 112 || e3 > 185 && e3 < 193 || e3 > 218 && e3 < 223;
            }, e2.isPromise = function(e3) {
              return Promise.resolve(e3) === e3;
            }, e2.isString = function(e3) {
              return "string" === d(e3);
            }, e2.isTouchSupported = void 0, e2.isUndefined = v, e2.isValidMimeType = function(e3) {
              return /^[-\w]+\/([-+\w]+|\*)$/.test(e3);
            }, e2.mouseButtons = e2.mobileScreenBreakpoint = e2.logLabeled = e2.log = e2.keyCodes = void 0, e2.openTab = function(e3) {
              window.open(e3, "_blank");
            }, e2.sequence = function(e3) {
              return g.apply(this, arguments);
            }, e2.setLogLevel = function(e3) {
              c.logLevel = e3;
            }, e2.throttle = function(e3, t3) {
              var n2, o3, r3, i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a2 = null, s2 = 0;
              i3 || (i3 = {});
              var l2 = function() {
                s2 = false === i3.leading ? 0 : Date.now(), a2 = null, r3 = e3.apply(n2, o3), a2 || (n2 = o3 = null);
              };
              return function() {
                var c2 = Date.now();
                s2 || false !== i3.leading || (s2 = c2);
                var u2 = t3 - (c2 - s2);
                return n2 = this, o3 = arguments, u2 <= 0 || u2 > t3 ? (a2 && (clearTimeout(a2), a2 = null), s2 = c2, r3 = e3.apply(n2, o3), a2 || (n2 = o3 = null)) : a2 || false === i3.trailing || (a2 = setTimeout(l2, u2)), r3;
              };
            }, e2.typeOf = d, t2 = l(t2), o2 = l(o2), r2 = l(r2), a = l(a), e2.LogLevels = s, function(e3) {
              e3.VERBOSE = "VERBOSE", e3.INFO = "INFO", e3.WARN = "WARN", e3.ERROR = "ERROR";
            }(s || (e2.LogLevels = s = {})), e2.keyCodes = { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, LEFT: 37, UP: 38, DOWN: 40, RIGHT: 39, DELETE: 46, META: 91 }, e2.mouseButtons = { LEFT: 0, WHEEL: 1, RIGHT: 2, BACKWARD: 3, FORWARD: 4 }, c.logLevel = s.VERBOSE;
            var u = c.bind(window, false);
            e2.log = u;
            var f = c.bind(window, true);
            function d(e3) {
              return Object.prototype.toString.call(e3).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            }
            function p(e3) {
              return "function" === d(e3) || "asyncfunction" === d(e3);
            }
            function h(e3) {
              return "object" === d(e3);
            }
            function v(e3) {
              return "undefined" === d(e3);
            }
            function g() {
              return (g = (0, r2.default)(t2.default.mark(function e3(n2) {
                var o3, i3, a2, s2, l2 = arguments;
                return t2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        return s2 = function() {
                          return (s2 = (0, r2.default)(t2.default.mark(function e5(n3, o4, r3) {
                            return t2.default.wrap(function(e6) {
                              for (; ; )
                                switch (e6.prev = e6.next) {
                                  case 0:
                                    return e6.prev = 0, e6.next = 3, n3.function(n3.data);
                                  case 3:
                                    return e6.next = 5, o4(v(n3.data) ? {} : n3.data);
                                  case 5:
                                    e6.next = 10;
                                    break;
                                  case 7:
                                    e6.prev = 7, e6.t0 = e6.catch(0), r3(v(n3.data) ? {} : n3.data);
                                  case 10:
                                  case "end":
                                    return e6.stop();
                                }
                            }, e5, null, [[0, 7]]);
                          }))).apply(this, arguments);
                        }, a2 = function(e5, t3, n3) {
                          return s2.apply(this, arguments);
                        }, o3 = l2.length > 1 && void 0 !== l2[1] ? l2[1] : function() {
                        }, i3 = l2.length > 2 && void 0 !== l2[2] ? l2[2] : function() {
                        }, e4.abrupt("return", n2.reduce(function() {
                          var e5 = (0, r2.default)(t2.default.mark(function e6(n3, r3) {
                            return t2.default.wrap(function(e7) {
                              for (; ; )
                                switch (e7.prev = e7.next) {
                                  case 0:
                                    return e7.next = 2, n3;
                                  case 2:
                                    return e7.abrupt("return", a2(r3, o3, i3));
                                  case 3:
                                  case "end":
                                    return e7.stop();
                                }
                            }, e6);
                          }));
                          return function(t3, n3) {
                            return e5.apply(this, arguments);
                          };
                        }(), Promise.resolve()));
                      case 5:
                      case "end":
                        return e4.stop();
                    }
                }, e3);
              }))).apply(this, arguments);
            }
            function y() {
              var e3 = { win: false, mac: false, x11: false, linux: false }, t3 = Object.keys(e3).find(function(e4) {
                return -1 !== window.navigator.appVersion.toLowerCase().indexOf(e4);
              });
              return t3 ? (e3[t3] = true, e3) : e3;
            }
            e2.logLabeled = f;
            var k = "ontouchstart" in document.documentElement;
            e2.isTouchSupported = k, e2.mobileScreenBreakpoint = 650;
            var b = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1);
            e2.isIosDevice = b;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(112)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            function l(e2, t2) {
              var n2 = "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
              if (!n2) {
                if (Array.isArray(e2) || (n2 = function(e3, t3) {
                  if (e3) {
                    if ("string" == typeof e3)
                      return c(e3, t3);
                    var n3 = Object.prototype.toString.call(e3).slice(8, -1);
                    return "Object" === n3 && e3.constructor && (n3 = e3.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? c(e3, t3) : void 0;
                  }
                }(e2)) || t2 && e2 && "number" == typeof e2.length) {
                  n2 && (e2 = n2);
                  var o3 = 0, r3 = function() {
                  };
                  return { s: r3, n: function() {
                    return o3 >= e2.length ? { done: true } : { done: false, value: e2[o3++] };
                  }, e: function(e3) {
                    throw e3;
                  }, f: r3 };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var i3, a2 = true, s2 = false;
              return { s: function() {
                n2 = n2.call(e2);
              }, n: function() {
                var e3 = n2.next();
                return a2 = e3.done, e3;
              }, e: function(e3) {
                s2 = true, i3 = e3;
              }, f: function() {
                try {
                  a2 || null == n2.return || n2.return();
                } finally {
                  if (s2)
                    throw i3;
                }
              } };
            }
            function c(e2, t2) {
              (null == t2 || t2 > e2.length) && (t2 = e2.length);
              for (var n2 = 0, o3 = new Array(t2); n2 < t2; n2++)
                o3[n2] = e2[n2];
              return o3;
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var u = function() {
              function e2(t2) {
                var n2 = this, o3 = t2.config, i3 = t2.eventsDispatcher;
                if ((0, r2.default)(this, e2), this.nodes = {}, this.listeners = new a.default(), this.readOnlyMutableListeners = { on: function(e3, t3, o4) {
                  var r3 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                  n2.mutableListenerIds.push(n2.listeners.on(e3, t3, o4, r3));
                }, clearAll: function() {
                  var e3, t3 = l(n2.mutableListenerIds);
                  try {
                    for (t3.s(); !(e3 = t3.n()).done; ) {
                      var o4 = e3.value;
                      n2.listeners.offById(o4);
                    }
                  } catch (e4) {
                    t3.e(e4);
                  } finally {
                    t3.f();
                  }
                  n2.mutableListenerIds = [];
                } }, this.mutableListenerIds = [], (this instanceof e2 ? this.constructor : void 0) === e2)
                  throw new TypeError("Constructors for abstract class Module are not allowed.");
                this.config = o3, this.eventsDispatcher = i3;
              }
              return (0, i2.default)(e2, [{ key: "state", set: function(e3) {
                this.Editor = e3;
              } }, { key: "removeAllNodes", value: function() {
                for (var e3 in this.nodes) {
                  var t2 = this.nodes[e3];
                  t2 instanceof HTMLElement && t2.remove();
                }
              } }, { key: "isRtl", get: function() {
                return "rtl" === this.config.i18n.direction;
              } }]), e2;
            }();
            o2.default = u, u.displayName = "Module", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t) {
          var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
          "number" == typeof __g && (__g = n);
        }, function(e, t) {
          e.exports = function(e2) {
            try {
              return !!e2();
            } catch (e3) {
              return true;
            }
          };
        }, function(e, t, n) {
          var o = n(13);
          e.exports = function(e2) {
            if (!o(e2))
              throw TypeError(e2 + " is not an object!");
            return e2;
          };
        }, function(e, t) {
          e.exports = function(e2) {
            return "object" == typeof e2 ? null !== e2 : "function" == typeof e2;
          };
        }, function(e, t, n) {
          var o = n(70)("wks"), r = n(45), i = n(10).Symbol, a = "function" == typeof i;
          (e.exports = function(e2) {
            return o[e2] || (o[e2] = a && i[e2] || (a ? i : r)("Symbol." + e2));
          }).store = o;
        }, function(e, t, n) {
          var o = n(33), r = Math.min;
          e.exports = function(e2) {
            return e2 > 0 ? r(o(e2), 9007199254740991) : 0;
          };
        }, function(e, t) {
          var n = e.exports = { version: "2.6.12" };
          "number" == typeof __e && (__e = n);
        }, function(e, t, n) {
          e.exports = !n(11)(function() {
            return 7 != Object.defineProperty({}, "a", { get: function() {
              return 7;
            } }).a;
          });
        }, function(e, t, n) {
          var o = n(12), r = n(117), i = n(42), a = Object.defineProperty;
          t.f = n(17) ? Object.defineProperty : function(e2, t2, n2) {
            if (o(e2), t2 = i(t2, true), o(n2), r)
              try {
                return a(e2, t2, n2);
              } catch (e3) {
              }
            if ("get" in n2 || "set" in n2)
              throw TypeError("Accessors not supported!");
            return "value" in n2 && (e2[t2] = n2.value), e2;
          };
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(41), n(2), n(3), n(8)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l) {
            "use strict";
            var c = n(1);
            function u(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (u = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = c(r2), i2 = c(i2), s = c(s), l = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = u(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(l);
            var f = function() {
              function e2() {
                (0, i2.default)(this, e2);
              }
              return (0, s.default)(e2, null, [{ key: "isSingleTag", value: function(e3) {
                return e3.tagName && ["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"].includes(e3.tagName);
              } }, { key: "isLineBreakTag", value: function(e3) {
                return e3 && e3.tagName && ["BR", "WBR"].includes(e3.tagName);
              } }, { key: "make", value: function(e3) {
                var t2, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, o3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i3 = document.createElement(e3);
                for (var a2 in Array.isArray(n2) ? (t2 = i3.classList).add.apply(t2, (0, r2.default)(n2)) : n2 && i3.classList.add(n2), o3)
                  Object.prototype.hasOwnProperty.call(o3, a2) && (i3[a2] = o3[a2]);
                return i3;
              } }, { key: "text", value: function(e3) {
                return document.createTextNode(e3);
              } }, { key: "append", value: function(e3, t2) {
                Array.isArray(t2) ? t2.forEach(function(t3) {
                  return e3.appendChild(t3);
                }) : e3.appendChild(t2);
              } }, { key: "prepend", value: function(e3, t2) {
                Array.isArray(t2) ? (t2 = t2.reverse()).forEach(function(t3) {
                  return e3.prepend(t3);
                }) : e3.prepend(t2);
              } }, { key: "swap", value: function(e3, t2) {
                var n2 = document.createElement("div"), o3 = e3.parentNode;
                o3.insertBefore(n2, e3), o3.insertBefore(e3, t2), o3.insertBefore(t2, n2), o3.removeChild(n2);
              } }, { key: "find", value: function() {
                var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, t2 = arguments.length > 1 ? arguments[1] : void 0;
                return e3.querySelector(t2);
              } }, { key: "get", value: function(e3) {
                return document.getElementById(e3);
              } }, { key: "findAll", value: function() {
                var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document, t2 = arguments.length > 1 ? arguments[1] : void 0;
                return e3.querySelectorAll(t2);
              } }, { key: "allInputsSelector", get: function() {
                return "[contenteditable=true], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map(function(e3) {
                  return 'input[type="'.concat(e3, '"]');
                }).join(", ");
              } }, { key: "findAllInputs", value: function(t2) {
                return l.array(t2.querySelectorAll(e2.allInputsSelector)).reduce(function(t3, n2) {
                  return e2.isNativeInput(n2) || e2.containsOnlyInlineElements(n2) ? [].concat((0, r2.default)(t3), [n2]) : [].concat((0, r2.default)(t3), (0, r2.default)(e2.getDeepestBlockElements(n2)));
                }, []);
              } }, { key: "getDeepestNode", value: function(t2) {
                var n2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o3 = n2 ? "lastChild" : "firstChild", r3 = n2 ? "previousSibling" : "nextSibling";
                if (t2 && t2.nodeType === Node.ELEMENT_NODE && t2[o3]) {
                  var i3 = t2[o3];
                  if (e2.isSingleTag(i3) && !e2.isNativeInput(i3) && !e2.isLineBreakTag(i3))
                    if (i3[r3])
                      i3 = i3[r3];
                    else {
                      if (!i3.parentNode[r3])
                        return i3.parentNode;
                      i3 = i3.parentNode[r3];
                    }
                  return this.getDeepestNode(i3, n2);
                }
                return t2;
              } }, { key: "isElement", value: function(e3) {
                return !l.isNumber(e3) && e3 && e3.nodeType && e3.nodeType === Node.ELEMENT_NODE;
              } }, { key: "isFragment", value: function(e3) {
                return !l.isNumber(e3) && e3 && e3.nodeType && e3.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
              } }, { key: "isContentEditable", value: function(e3) {
                return "true" === e3.contentEditable;
              } }, { key: "isNativeInput", value: function(e3) {
                return !(!e3 || !e3.tagName) && ["INPUT", "TEXTAREA"].includes(e3.tagName);
              } }, { key: "canSetCaret", value: function(t2) {
                var n2 = true;
                if (e2.isNativeInput(t2))
                  switch (t2.type) {
                    case "file":
                    case "checkbox":
                    case "radio":
                    case "hidden":
                    case "submit":
                    case "button":
                    case "image":
                    case "reset":
                      n2 = false;
                  }
                else
                  n2 = e2.isContentEditable(t2);
                return n2;
              } }, { key: "isNodeEmpty", value: function(e3) {
                return !(this.isSingleTag(e3) && !this.isLineBreakTag(e3)) && 0 === (this.isElement(e3) && this.isNativeInput(e3) ? e3.value : e3.textContent.replace("\u200B", "")).trim().length;
              } }, { key: "isLeaf", value: function(e3) {
                return !!e3 && 0 === e3.childNodes.length;
              } }, { key: "isEmpty", value: function(e3) {
                e3.normalize();
                for (var t2 = [e3]; t2.length > 0; )
                  if (e3 = t2.shift()) {
                    if (this.isLeaf(e3) && !this.isNodeEmpty(e3))
                      return false;
                    e3.childNodes && t2.push.apply(t2, (0, r2.default)(Array.from(e3.childNodes)));
                  }
                return true;
              } }, { key: "isHTMLString", value: function(t2) {
                var n2 = e2.make("div");
                return n2.innerHTML = t2, n2.childElementCount > 0;
              } }, { key: "getContentLength", value: function(t2) {
                return e2.isNativeInput(t2) ? t2.value.length : t2.nodeType === Node.TEXT_NODE ? t2.length : t2.textContent.length;
              } }, { key: "blockElements", get: function() {
                return ["address", "article", "aside", "blockquote", "canvas", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "ruby", "section", "table", "tbody", "thead", "tr", "tfoot", "ul", "video"];
              } }, { key: "containsOnlyInlineElements", value: function(t2) {
                var n2;
                return l.isString(t2) ? (n2 = document.createElement("div")).innerHTML = t2 : n2 = t2, Array.from(n2.children).every(function t3(n3) {
                  return !e2.blockElements.includes(n3.tagName.toLowerCase()) && Array.from(n3.children).every(t3);
                });
              } }, { key: "getDeepestBlockElements", value: function(t2) {
                return e2.containsOnlyInlineElements(t2) ? [t2] : Array.from(t2.children).reduce(function(t3, n2) {
                  return [].concat((0, r2.default)(t3), (0, r2.default)(e2.getDeepestBlockElements(n2)));
                }, []);
              } }, { key: "getHolder", value: function(e3) {
                return l.isString(e3) ? document.getElementById(e3) : e3;
              } }, { key: "isExtensionNode", value: function(e3) {
                return e3 && ["GRAMMARLY-EXTENSION"].includes(e3.nodeName);
              } }, { key: "isAnchor", value: function(e3) {
                return "a" === e3.tagName.toLowerCase();
              } }, { key: "offset", value: function(e3) {
                var t2 = e3.getBoundingClientRect(), n2 = window.pageXOffset || document.documentElement.scrollLeft, o3 = window.pageYOffset || document.documentElement.scrollTop, r3 = t2.top + o3, i3 = t2.left + n2;
                return { top: r3, left: i3, bottom: r3 + t2.height, right: i3 + t2.width };
              } }]), e2;
            }();
            o2.default = f, f.displayName = "Dom", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o = n(368)();
          e.exports = o;
          try {
            regeneratorRuntime = o;
          } catch (e2) {
            "object" == typeof globalThis ? globalThis.regeneratorRuntime = o : Function("r", "regeneratorRuntime = r")(o);
          }
        }, function(e, t) {
          function n(e2, t2, n2, o, r, i, a) {
            try {
              var s = e2[i](a), l = s.value;
            } catch (e3) {
              return void n2(e3);
            }
            s.done ? t2(l) : Promise.resolve(l).then(o, r);
          }
          e.exports = function(e2) {
            return function() {
              var t2 = this, o = arguments;
              return new Promise(function(r, i) {
                var a = e2.apply(t2, o);
                function s(e3) {
                  n(a, r, i, s, l, "next", e3);
                }
                function l(e3) {
                  n(a, r, i, s, l, "throw", e3);
                }
                s(void 0);
              });
            };
          }, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t, n) {
          var o = n(39);
          e.exports = function(e2) {
            return Object(o(e2));
          };
        }, function(e, t, n) {
          var o = n(10), r = n(27), i = n(26), a = n(45)("src"), s = n(192), l = ("" + s).split("toString");
          n(16).inspectSource = function(e2) {
            return s.call(e2);
          }, (e.exports = function(e2, t2, n2, s2) {
            var c = "function" == typeof n2;
            c && (i(n2, "name") || r(n2, "name", t2)), e2[t2] !== n2 && (c && (i(n2, a) || r(n2, a, e2[t2] ? "" + e2[t2] : l.join(String(t2)))), e2 === o ? e2[t2] = n2 : s2 ? e2[t2] ? e2[t2] = n2 : r(e2, t2, n2) : (delete e2[t2], r(e2, t2, n2)));
          })(Function.prototype, "toString", function() {
            return "function" == typeof this && this[a] || s.call(this);
          });
        }, function(e, t, n) {
          var o = n(0), r = n(11), i = n(39), a = /"/g, s = function(e2, t2, n2, o2) {
            var r2 = String(i(e2)), s2 = "<" + t2;
            return "" !== n2 && (s2 += " " + n2 + '="' + String(o2).replace(a, "&quot;") + '"'), s2 + ">" + r2 + "</" + t2 + ">";
          };
          e.exports = function(e2, t2) {
            var n2 = {};
            n2[e2] = t2(s), o(o.P + o.F * r(function() {
              var t3 = ""[e2]('"');
              return t3 !== t3.toLowerCase() || t3.split('"').length > 3;
            }), "String", n2);
          };
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(8), n(19)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l) {
            "use strict";
            var c = n(1);
            function u(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (u = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = c(r2), i2 = c(i2), s = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = u(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(s), l = c(l);
            var f = function() {
              function e2() {
                (0, r2.default)(this, e2), this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = false, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
              }
              return (0, i2.default)(e2, [{ key: "removeFakeBackground", value: function() {
                this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = false, document.execCommand(this.commandRemoveFormat));
              } }, { key: "setFakeBackground", value: function() {
                document.execCommand(this.commandBackground, false, "#a8d6ff"), this.isFakeBackgroundEnabled = true;
              } }, { key: "save", value: function() {
                this.savedSelectionRange = e2.range;
              } }, { key: "restore", value: function() {
                if (this.savedSelectionRange) {
                  var e3 = window.getSelection();
                  e3.removeAllRanges(), e3.addRange(this.savedSelectionRange);
                }
              } }, { key: "clearSaved", value: function() {
                this.savedSelectionRange = null;
              } }, { key: "collapseToEnd", value: function() {
                var e3 = window.getSelection(), t2 = document.createRange();
                t2.selectNodeContents(e3.focusNode), t2.collapse(false), e3.removeAllRanges(), e3.addRange(t2);
              } }, { key: "findParentTag", value: function(e3, t2) {
                var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, o3 = window.getSelection(), r3 = null;
                if (!o3 || !o3.anchorNode || !o3.focusNode)
                  return null;
                var i3 = [o3.anchorNode, o3.focusNode];
                return i3.forEach(function(o4) {
                  for (var i4 = n2; i4 > 0 && o4.parentNode && (o4.tagName !== e3 || (r3 = o4, t2 && o4.classList && !o4.classList.contains(t2) && (r3 = null), !r3)); )
                    o4 = o4.parentNode, i4--;
                }), r3;
              } }, { key: "expandToTag", value: function(e3) {
                var t2 = window.getSelection();
                t2.removeAllRanges();
                var n2 = document.createRange();
                n2.selectNodeContents(e3), t2.addRange(n2);
              } }], [{ key: "CSS", get: function() {
                return { editorWrapper: "codex-editor", editorZone: "codex-editor__redactor" };
              } }, { key: "anchorNode", get: function() {
                var e3 = window.getSelection();
                return e3 ? e3.anchorNode : null;
              } }, { key: "anchorElement", get: function() {
                var e3 = window.getSelection();
                if (!e3)
                  return null;
                var t2 = e3.anchorNode;
                return t2 ? l.default.isElement(t2) ? t2 : t2.parentElement : null;
              } }, { key: "anchorOffset", get: function() {
                var e3 = window.getSelection();
                return e3 ? e3.anchorOffset : null;
              } }, { key: "isCollapsed", get: function() {
                var e3 = window.getSelection();
                return e3 ? e3.isCollapsed : null;
              } }, { key: "isAtEditor", get: function() {
                return this.isSelectionAtEditor(e2.get());
              } }, { key: "isSelectionAtEditor", value: function(t2) {
                if (!t2)
                  return false;
                var n2 = t2.anchorNode || t2.focusNode;
                n2 && n2.nodeType === Node.TEXT_NODE && (n2 = n2.parentNode);
                var o3 = null;
                return n2 && n2 instanceof Element && (o3 = n2.closest(".".concat(e2.CSS.editorZone))), !!o3 && o3.nodeType === Node.ELEMENT_NODE;
              } }, { key: "isRangeAtEditor", value: function(t2) {
                if (t2) {
                  var n2 = t2.startContainer;
                  n2 && n2.nodeType === Node.TEXT_NODE && (n2 = n2.parentNode);
                  var o3 = null;
                  return n2 && n2 instanceof Element && (o3 = n2.closest(".".concat(e2.CSS.editorZone))), !!o3 && o3.nodeType === Node.ELEMENT_NODE;
                }
              } }, { key: "isSelectionExists", get: function() {
                return !!e2.get().anchorNode;
              } }, { key: "range", get: function() {
                return this.getRangeFromSelection(this.get());
              } }, { key: "getRangeFromSelection", value: function(e3) {
                return e3 && e3.rangeCount ? e3.getRangeAt(0) : null;
              } }, { key: "rect", get: function() {
                var e3, t2 = document.selection, n2 = { x: 0, y: 0, width: 0, height: 0 };
                if (t2 && "Control" !== t2.type)
                  return e3 = (t2 = t2).createRange(), n2.x = e3.boundingLeft, n2.y = e3.boundingTop, n2.width = e3.boundingWidth, n2.height = e3.boundingHeight, n2;
                if (!window.getSelection)
                  return s.log("Method window.getSelection is not supported", "warn"), n2;
                if (null === (t2 = window.getSelection()).rangeCount || isNaN(t2.rangeCount))
                  return s.log("Method SelectionUtils.rangeCount is not supported", "warn"), n2;
                if (0 === t2.rangeCount)
                  return n2;
                if ((e3 = t2.getRangeAt(0).cloneRange()).getBoundingClientRect && (n2 = e3.getBoundingClientRect()), 0 === n2.x && 0 === n2.y) {
                  var o3 = document.createElement("span");
                  if (o3.getBoundingClientRect) {
                    o3.appendChild(document.createTextNode("\u200B")), e3.insertNode(o3), n2 = o3.getBoundingClientRect();
                    var r3 = o3.parentNode;
                    r3.removeChild(o3), r3.normalize();
                  }
                }
                return n2;
              } }, { key: "text", get: function() {
                return window.getSelection ? window.getSelection().toString() : "";
              } }, { key: "get", value: function() {
                return window.getSelection();
              } }, { key: "setCursor", value: function(e3) {
                var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n2 = document.createRange(), o3 = window.getSelection();
                if (l.default.isNativeInput(e3)) {
                  if (!l.default.canSetCaret(e3))
                    return;
                  return e3.focus(), e3.selectionStart = e3.selectionEnd = t2, e3.getBoundingClientRect();
                }
                return n2.setStart(e3, t2), n2.setEnd(e3, t2), o3.removeAllRanges(), o3.addRange(n2), n2.getBoundingClientRect();
              } }, { key: "addFakeCursor", value: function(t2) {
                var n2 = e2.range, o3 = l.default.make("span", "codex-editor__fake-cursor");
                o3.dataset.mutationFree = "true", !n2 || t2 && !t2.contains(n2.startContainer) || (n2.collapse(), n2.insertNode(o3));
              } }, { key: "removeFakeCursor", value: function() {
                var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body, t2 = l.default.find(e3, ".codex-editor__fake-cursor");
                t2 && t2.remove();
              } }]), e2;
            }();
            o2.default = f, f.displayName = "SelectionUtils", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t) {
          var n = {}.hasOwnProperty;
          e.exports = function(e2, t2) {
            return n.call(e2, t2);
          };
        }, function(e, t, n) {
          var o = n(18), r = n(44);
          e.exports = n(17) ? function(e2, t2, n2) {
            return o.f(e2, t2, r(1, n2));
          } : function(e2, t2, n2) {
            return e2[t2] = n2, e2;
          };
        }, function(e, t, n) {
          var o = n(62), r = n(39);
          e.exports = function(e2) {
            return o(r(e2));
          };
        }, function(e, t, n) {
          "use strict";
          var o = n(11);
          e.exports = function(e2, t2) {
            return !!e2 && o(function() {
              t2 ? e2.call(null, function() {
              }, 1) : e2.call(null);
            });
          };
        }, function(e, t, n) {
          var o = n(362), r = n(363), i = n(148), a = n(364);
          e.exports = function(e2, t2) {
            return o(e2) || r(e2, t2) || i(e2, t2) || a();
          }, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t, n) {
          var o = n(32);
          e.exports = function(e2, t2, n2) {
            if (o(e2), void 0 === t2)
              return e2;
            switch (n2) {
              case 1:
                return function(n3) {
                  return e2.call(t2, n3);
                };
              case 2:
                return function(n3, o2) {
                  return e2.call(t2, n3, o2);
                };
              case 3:
                return function(n3, o2, r) {
                  return e2.call(t2, n3, o2, r);
                };
            }
            return function() {
              return e2.apply(t2, arguments);
            };
          };
        }, function(e, t) {
          e.exports = function(e2) {
            if ("function" != typeof e2)
              throw TypeError(e2 + " is not a function!");
            return e2;
          };
        }, function(e, t) {
          var n = Math.ceil, o = Math.floor;
          e.exports = function(e2) {
            return isNaN(e2 = +e2) ? 0 : (e2 > 0 ? o : n)(e2);
          };
        }, function(e, t, n) {
          var o = n(63), r = n(44), i = n(28), a = n(42), s = n(26), l = n(117), c = Object.getOwnPropertyDescriptor;
          t.f = n(17) ? c : function(e2, t2) {
            if (e2 = i(e2), t2 = a(t2, true), l)
              try {
                return c(e2, t2);
              } catch (e3) {
              }
            if (s(e2, t2))
              return r(!o.f.call(e2, t2), e2[t2]);
          };
        }, function(e, t, n) {
          var o = n(0), r = n(16), i = n(11);
          e.exports = function(e2, t2) {
            var n2 = (r.Object || {})[e2] || Object[e2], a = {};
            a[e2] = t2(n2), o(o.S + o.F * i(function() {
              n2(1);
            }), "Object", a);
          };
        }, function(e, t, n) {
          var o = n(31), r = n(62), i = n(22), a = n(15), s = n(133);
          e.exports = function(e2, t2) {
            var n2 = 1 == e2, l = 2 == e2, c = 3 == e2, u = 4 == e2, f = 6 == e2, d = 5 == e2 || f, p = t2 || s;
            return function(t3, s2, h) {
              for (var v, g, y = i(t3), k = r(y), b = o(s2, h, 3), m = a(k.length), w = 0, x = n2 ? p(t3, m) : l ? p(t3, 0) : void 0; m > w; w++)
                if ((d || w in k) && (g = b(v = k[w], w, y), e2)) {
                  if (n2)
                    x[w] = g;
                  else if (g)
                    switch (e2) {
                      case 3:
                        return true;
                      case 5:
                        return v;
                      case 6:
                        return w;
                      case 2:
                        x.push(v);
                    }
                  else if (u)
                    return false;
                }
              return f ? -1 : c || u ? u : x;
            };
          };
        }, function(e, t, n) {
          "use strict";
          n.r(t), n.d(t, "IconAddBackground", function() {
            return c;
          }), n.d(t, "IconAddBorder", function() {
            return u;
          }), n.d(t, "IconAlignCenter", function() {
            return f;
          }), n.d(t, "IconAlignJustify", function() {
            return d;
          }), n.d(t, "IconAlignLeft", function() {
            return p;
          }), n.d(t, "IconAlignRight", function() {
            return h;
          }), n.d(t, "IconBold", function() {
            return v;
          }), n.d(t, "IconBrackets", function() {
            return g;
          }), n.d(t, "IconChecklist", function() {
            return y;
          }), n.d(t, "IconChevronDown", function() {
            return k;
          }), n.d(t, "IconChevronLeft", function() {
            return b;
          }), n.d(t, "IconChevronRight", function() {
            return m;
          }), n.d(t, "IconChevronUp", function() {
            return w;
          }), n.d(t, "IconClipboard", function() {
            return x;
          }), n.d(t, "IconCollapse", function() {
            return C;
          }), n.d(t, "IconColor", function() {
            return S;
          }), n.d(t, "IconCopy", function() {
            return T;
          }), n.d(t, "IconCross", function() {
            return E;
          }), n.d(t, "IconCurlyBrackets", function() {
            return B;
          }), n.d(t, "IconDelimiter", function() {
            return M;
          }), n.d(t, "IconDirectionDownRight", function() {
            return _;
          }), n.d(t, "IconDirectionLeftDown", function() {
            return O;
          }), n.d(t, "IconDirectionRightDown", function() {
            return I;
          }), n.d(t, "IconDirectionUpRight", function() {
            return L;
          }), n.d(t, "IconDotCircle", function() {
            return P;
          }), n.d(t, "IconEtcHorisontal", function() {
            return j;
          }), n.d(t, "IconEtcVertical", function() {
            return R;
          }), n.d(t, "IconFile", function() {
            return A;
          }), n.d(t, "IconGift", function() {
            return N;
          }), n.d(t, "IconGlobe", function() {
            return D;
          }), n.d(t, "IconH1", function() {
            return o;
          }), n.d(t, "IconH2", function() {
            return r;
          }), n.d(t, "IconH3", function() {
            return i;
          }), n.d(t, "IconH4", function() {
            return a;
          }), n.d(t, "IconH5", function() {
            return s;
          }), n.d(t, "IconH6", function() {
            return l;
          }), n.d(t, "IconHeading", function() {
            return F;
          }), n.d(t, "IconHeart", function() {
            return H;
          }), n.d(t, "IconHidden", function() {
            return W;
          }), n.d(t, "IconHtml", function() {
            return U;
          }), n.d(t, "IconInstagram", function() {
            return z;
          }), n.d(t, "IconItalic", function() {
            return V;
          }), n.d(t, "IconLink", function() {
            return Y;
          }), n.d(t, "IconLinkedin", function() {
            return X;
          }), n.d(t, "IconListBulleted", function() {
            return G;
          }), n.d(t, "IconListNumbered", function() {
            return K;
          }), n.d(t, "IconMarker", function() {
            return Z;
          }), n.d(t, "IconMenu", function() {
            return J;
          }), n.d(t, "IconMenuSmall", function() {
            return q;
          }), n.d(t, "IconPicture", function() {
            return $2;
          }), n.d(t, "IconPlay", function() {
            return Q;
          }), n.d(t, "IconPlus", function() {
            return ee;
          }), n.d(t, "IconQuestion", function() {
            return te;
          }), n.d(t, "IconQuote", function() {
            return ne;
          }), n.d(t, "IconRedo", function() {
            return oe;
          }), n.d(t, "IconRemoveBackground", function() {
            return re;
          }), n.d(t, "IconReplace", function() {
            return ie;
          }), n.d(t, "IconSave", function() {
            return ae;
          }), n.d(t, "IconSearch", function() {
            return se;
          }), n.d(t, "IconStar", function() {
            return le;
          }), n.d(t, "IconStretch", function() {
            return ce;
          }), n.d(t, "IconStrikethrough", function() {
            return ue;
          }), n.d(t, "IconTable", function() {
            return pe;
          }), n.d(t, "IconTableWithHeadings", function() {
            return fe;
          }), n.d(t, "IconTableWithoutHeadings", function() {
            return de;
          }), n.d(t, "IconText", function() {
            return he;
          }), n.d(t, "IconTranslate", function() {
            return ve;
          }), n.d(t, "IconTrash", function() {
            return ge;
          }), n.d(t, "IconTwitter", function() {
            return ye;
          }), n.d(t, "IconUnderline", function() {
            return ke;
          }), n.d(t, "IconUndo", function() {
            return be;
          }), n.d(t, "IconUnlink", function() {
            return me;
          }), n.d(t, "IconUser", function() {
            return we;
          }), n.d(t, "IconUsersGroup", function() {
            return xe;
          }), n.d(t, "IconWarning", function() {
            return Ce;
          });
          const o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>', r = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>', i = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>', a = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>', s = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>', l = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>', c = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', u = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', f = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 12L8 12"/></svg>', d = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 12L6 12"/></svg>', p = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7L5 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17H5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 12L5 12"/></svg>', h = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 7L7 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17H7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 12L11 12"/></svg>', v = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>', g = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>', y = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.2 12L11.0586 13.8586C11.1367 13.9367 11.2633 13.9367 11.3414 13.8586L14.7 10.5"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>', k = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>', b = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.5 17.5L9.64142 12.6414C9.56331 12.5633 9.56331 12.4367 9.64142 12.3586L14.5 7.5"/></svg>', m = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.58284 17.5L14.4414 12.6414C14.5195 12.5633 14.5195 12.4367 14.4414 12.3586L9.58284 7.5"/></svg>', w = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>', x = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.42857 7H7.71429C7.25963 7 6.82359 7.15804 6.5021 7.43934C6.18061 7.72064 6 8.10218 6 8.5V17.5C6 17.8978 6.18061 18.2794 6.5021 18.5607C6.82359 18.842 7.25963 19 7.71429 19H16.2857C16.7404 19 17.1764 18.842 17.4979 18.5607C17.8194 18.2794 18 17.8978 18 17.5V8.5C18 8.10218 17.8194 7.72064 17.4979 7.43934C17.1764 7.15804 16.7404 7 16.2857 7H14.5714"/><rect width="5.15789" height="3.36842" x="9.42105" y="5" stroke="currentColor" stroke-width="2" rx="1.5"/></svg>', C = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L10 12M10 12L7 15M10 12H4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L14 12M14 12L17 15M14 12H20"/></svg>', S = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M5.24296 11.4075C5.23167 10.6253 5.52446 9.8395 6.12132 9.24264L9.65686 5.70711C10.0474 5.31658 10.6809 5.31693 11.0714 5.70745L16.0205 10.6565C16.2268 10.8629 16.3243 11.1371 16.3126 11.4075M5.24296 11.4075C5.25382 12.1607 5.54661 12.9106 6.12132 13.4853L8 15.364M5.24296 11.4075H11.9565M16.3126 11.4075C16.3022 11.6487 16.205 11.8869 16.0208 12.0711L12.4853 15.6066C11.3137 16.7782 9.41421 16.7782 8.24264 15.6066L8 15.364M16.3126 11.4075H11.9565M8 15.364L11.9565 11.4075"/><path stroke="currentColor" stroke-width="2" d="M20 17.4615C20 18.3112 19.3284 19 18.5 19C17.6716 19 17 18.3112 17 17.4615C17 16.6119 17.9 15.6154 18.5 15C19.1 15.6154 20 16.6119 20 17.4615Z"/></svg>', T = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.25 8.5H10.25C9.2835 8.5 8.5 9.2835 8.5 10.25V17.25C8.5 18.2165 9.2835 19 10.25 19H17.25C18.2165 19 19 18.2165 19 17.25V10.25C19 9.2835 18.2165 8.5 17.25 8.5Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.5 8.5V6.75C15.5 6.28587 15.3156 5.84075 14.9874 5.51256C14.6592 5.18437 14.2141 5 13.75 5H6.75C6.28587 5 5.84075 5.18437 5.51256 5.51256C5.18437 5.84075 5 6.28587 5 6.75V13.75C5 14.2141 5.18437 14.6592 5.51256 14.9874C5.84075 15.3156 6.28587 15.5 6.75 15.5H8.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12L15.5 12"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15.5L15.5 15.5"/></svg>', E = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>', B = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17C7 17 7 15.2536 7 13.5L5.5 12L7 10.5C7 8.74644 7 7 9 7"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17C17 17 17 15.2536 17 13.5L18.5 12L17 10.5C17 8.74644 17 7 15 7"/></svg>', M = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="6" x2="10" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="14" x2="18" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', _ = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 9.16666L18.2167 12.5M18.2167 12.5L14.8833 15.8333M18.2167 12.5H10.05C9.16594 12.5 8.31809 12.1488 7.69297 11.5237C7.06785 10.8986 6.71666 10.0507 6.71666 9.16666"/></svg>', O = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.9167 14.9167L11.5833 18.25M11.5833 18.25L8.25 14.9167M11.5833 18.25L11.5833 10.0833C11.5833 9.19928 11.9345 8.35143 12.5596 7.72631C13.1848 7.10119 14.0326 6.75 14.9167 6.75"/></svg>', I = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.13333 14.9167L12.4667 18.25M12.4667 18.25L15.8 14.9167M12.4667 18.25L12.4667 10.0833C12.4667 9.19928 12.1155 8.35143 11.4904 7.72631C10.8652 7.10119 10.0174 6.75 9.13333 6.75"/></svg>', L = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 15.8333L18.2167 12.5M18.2167 12.5L14.8833 9.16667M18.2167 12.5L10.05 12.5C9.16595 12.5 8.31811 12.8512 7.69299 13.4763C7.06787 14.1014 6.71667 14.9493 6.71667 15.8333"/></svg>', P = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>', j = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M7.30499 11.995L7.30499 12.005M12.005 11.995V12.005M16.705 11.995L16.705 12.005"/></svg>', R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M12.01 7.29999H12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M12.01 12H12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M12.01 16.7H12"/></svg>', A = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.3236 8.43554L9.49533 12.1908C9.13119 12.5505 8.93118 13.043 8.9393 13.5598C8.94741 14.0767 9.163 14.5757 9.53862 14.947C9.91424 15.3182 10.4191 15.5314 10.9422 15.5397C11.4653 15.5479 11.9637 15.3504 12.3279 14.9908L16.1562 11.2355C16.8845 10.5161 17.2845 9.53123 17.2682 8.4975C17.252 7.46376 16.8208 6.46583 16.0696 5.72324C15.3184 4.98066 14.3086 4.55425 13.2624 4.53782C12.2162 4.52138 11.2193 4.91627 10.4911 5.63562L6.66277 9.39093C5.57035 10.4699 4.97032 11.9473 4.99467 13.4979C5.01903 15.0485 5.66578 16.5454 6.79264 17.6592C7.9195 18.7731 9.43417 19.4127 11.0034 19.4374C12.5727 19.462 14.068 18.8697 15.1604 17.7907L18.9887 14.0354"/></svg>', N = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="12" height="6" x="6" y="13" stroke="currentColor" stroke-width="2" rx="2"/><line x1="12" x2="12" y1="9" y2="19" stroke="currentColor" stroke-width="2"/><path stroke="currentColor" stroke-width="2" d="M5 11C5 9.89543 5.89543 9 7 9H17C18.1046 9 19 9.89543 19 11V11C19 12.1046 18.1046 13 17 13H7C5.89543 13 5 12.1046 5 11V11Z"/><path stroke="currentColor" stroke-width="2" d="M16 9C16 7.89543 16 6 14 6C12 6 12 7.89543 12 9C12 7.89543 12 6 10 6C8 6 8 7.89543 8 9"/></svg>', D = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12M18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12M18 12H6M11.7 6C11.7 6 9.7 7.63811 9.7 12C9.7 16.9 11.7 18 11.7 18M12.3 6C12.3 6 14.3 7.63811 14.3 12C14.3 16.9 12.3 18 12.3 18"/></svg>', F = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>', H = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M6.6 7.50001C5.27451 8.82549 5.19999 10.6 6.59999 12.3C8 14 12.2 17.9 12.2 17.9C12.2 17.9 16.5 14 17.8 12.3C19.1 10.6 19.1255 8.82549 17.8 7.5C16.4745 6.17452 14.3255 6.17452 13 7.5L12.2 8.30001L11.4 7.50001C10.0745 6.17453 7.92548 6.17453 6.6 7.50001Z"/></svg>', W = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.77778 6L18.5 17.7222"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.687 10C10.2473 10.4392 10.0002 11.035 10 11.6564C9.99978 12.2777 10.2465 12.8737 10.6858 13.3132C11.1251 13.7527 11.7211 13.9998 12.3427 14C12.9642 14.0002 13.5604 13.7536 14 13.3144"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7C17 11.1666 20 11.17 20 11.67C20 12.17 19 13.17 19 13.17M8.2424 8.80936C7.59317 9.22876 6.97961 9.76732 6.4017 10.4251C5.70398 11.2193 5.35512 11.6164 5.35513 12.3702C5.35514 13.124 5.70406 13.5211 6.40191 14.3154C7.99587 16.1297 9.8618 17.0367 12 17.0367C13.1102 17.0367 14.1466 16.7917 15.1111 16.3024"/></svg>', U = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.6954 5C17.912 5 18.8468 6.07716 18.6755 7.28165L17.426 16.0659C17.3183 16.8229 16.7885 17.4522 16.061 17.6873L12.6151 18.8012C12.2152 18.9304 11.7848 18.9304 11.3849 18.8012L7.93898 17.6873C7.21148 17.4522 6.6817 16.8229 6.57403 16.0659L5.32454 7.28165C5.15322 6.07716 6.088 5 7.30461 5H16.6954Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8.4H9L9.42857 11.7939H14.5714L14.3571 13.2788L14.1429 14.7636L12 15.4L9.85714 14.7636L9.77143 14.3394"/></svg>', z = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.9 8.1V8.11"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/></svg>', V = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>', Y = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>', X = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="9" x2="9" y1="11.4" y2="15.4" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 8.7V8.71"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 11.4V12M12 15.4V12M12 12C14 11.5 15 11.3611 15 12.5C15 13.5 15 15.4 15 15.4"/></svg>', G = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>', K = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>', Z = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M11.3535 9.31802L12.7678 7.90381C13.5488 7.12276 14.8151 7.12276 15.5962 7.90381C16.3772 8.68486 16.3772 9.95119 15.5962 10.7322L14.182 12.1464M11.3535 9.31802L7.96729 12.7043C7.40889 13.2627 7.02826 13.9739 6.87339 14.7482L6.69798 15.6253C6.55803 16.325 7.17495 16.942 7.87467 16.802L8.75175 16.6266C9.52612 16.4717 10.2373 16.0911 10.7957 15.5327L14.182 12.1464M11.3535 9.31802L14.182 12.1464"/><line x1="15" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', q = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.41 9.66H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 9.66H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.31 14.36H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 14.36H14.59"/></svg>', J = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>', $2 = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', Q = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 10.5606V13.4394C10 14.4777 11.1572 15.0971 12.0211 14.5211L14.1803 13.0817C14.9536 12.5661 14.9503 11.4317 14.18 10.9181L12.0214 9.47907C11.1591 8.9042 10 9.5203 10 10.5606Z"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>', ee = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>', te = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.52V15.51"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M10.0024 9.97655C10.1567 9.01858 11 8.5 12 8.5C13 8.5 13.6857 9.17188 13.8693 9.70703C14.0529 10.2422 14.0135 11.0514 13.5067 11.5159C13 11.9805 12.7344 11.832 12.2784 12.3168C12.1134 12.4923 12 12.7476 12 12.7476"/></svg>', ne = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>', oe = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.6667 13.6667L18 10.3333L14.6667 7M18 10.3333H8.83333C7.94928 10.3333 7.10143 10.6845 6.47631 11.3096C5.85119 11.9348 5.5 12.7826 5.5 13.6667C5.5 14.5507 5.85119 15.3986 6.47631 16.0237C7.10143 16.6488 7.94928 17 8.83333 17H9.66667"/></svg>', re = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.1187 14.8787L16.9974 17M14.876 19.1213L16.9974 17M19.1187 19.1213L16.9974 17M16.9974 17L14.876 14.8787"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', ie = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11.5 17.5L5 11M5 11V15.5M5 11H9.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12.5 6.5L19 13M19 13V8.5M19 13H14.5"/></svg>', ae = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M15.078 5.62637L15.6153 4.78296L15.078 5.62637C15.4261 5.84808 15.7393 6.15354 16.5711 6.98528L17.2782 6.27817L16.5711 6.98528L17.5251 7.93934C17.8347 8.2489 17.9496 8.36494 18.0489 8.48177C18.5907 9.11982 18.9188 9.91178 18.9868 10.7461C18.9992 10.8989 19 11.0622 19 11.5V12C19 13.4166 18.9992 14.419 18.9352 15.2026C18.8721 15.9745 18.7527 16.4457 18.564 16.816C18.1805 17.5686 17.5686 18.1805 16.816 18.564C16.4457 18.7527 15.9745 18.8721 15.2026 18.9352C14.419 18.9992 13.4166 19 12 19C10.5834 19 9.58104 18.9992 8.79744 18.9352C8.02552 18.8721 7.55435 18.7527 7.18404 18.564C6.43139 18.1805 5.81947 17.5686 5.43597 16.816C5.24729 16.4457 5.12787 15.9745 5.0648 15.2026C5.00078 14.419 5 13.4166 5 12V11.7782C5 10.4673 5.00067 9.53987 5.05572 8.81299C5.10998 8.09655 5.21284 7.65673 5.37487 7.3093C5.77229 6.45718 6.45718 5.77229 7.3093 5.37487C7.65673 5.21284 8.09655 5.10998 8.81299 5.05572C9.53986 5.00067 10.4673 5 11.7782 5C12.9544 5 13.3919 5.00552 13.7948 5.09484C14.2503 5.19583 14.6846 5.37572 15.078 5.62637Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5.5V7C14 7.55228 13.5523 8 13 8H11C10.4477 8 10 7.55228 10 7V5.2"/></svg>', se = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', le = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M11.8197 6.04369C11.8924 5.8925 12.1076 5.8925 12.1803 6.04369L13.9776 9.78496C14.0068 9.84564 14.0645 9.88759 14.1312 9.89657L18.2448 10.4498C18.411 10.4722 18.4776 10.6769 18.3562 10.7927L15.3535 13.6582C15.3048 13.7047 15.2827 13.7726 15.2948 13.8388L16.0398 17.922C16.0699 18.087 15.8957 18.2136 15.7481 18.1339L12 16.1124L8.25192 18.1339C8.10429 18.2136 7.93012 18.087 7.96022 17.922L8.7052 13.8388C8.71728 13.7726 8.69523 13.7047 8.64652 13.6582L5.64378 10.7927C5.52244 10.6769 5.58896 10.4722 5.7552 10.4498L9.86876 9.89657C9.93549 9.88759 9.99322 9.84564 10.0224 9.78496L11.8197 6.04369Z"/></svg>', ce = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>', ue = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 8.50001C13.5 7 10.935 6.66476 9.75315 7.79706C9.27092 8.25909 9 8.88574 9 9.53915C9 10.1926 9.27092 10.8192 9.75315 11.2812C10.9835 12.46 13.0165 11.5457 14.2468 12.7244C14.7291 13.1865 15 13.8131 15 14.4665C15 15.1199 14.7291 15.7466 14.2468 16.2086C12.8659 17.5317 10 17.5 9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12H18"/></svg>', fe = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>', de = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M14 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><path stroke="currentColor" stroke-width="2" d="M5 14H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>', pe = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>', he = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>', ve = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 17C8 14.5 12 12 13 9"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.5 11C8.5 11 10 14 12.5 15"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7.7H16M11 7.7V5.7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.5 18L15.2143 16M15.2143 16L16.9159 11.2354C16.9663 11.0942 17.1001 11 17.25 11C17.3999 11 17.5337 11.0942 17.5841 11.2354L19.2857 16M15.2143 16H19.2857M20 18L19.2857 16"/></svg>', ge = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.1328 7.7234C18.423 7.7634 18.7115 7.80571 19 7.85109M18.1328 7.7234L17.2267 17.4023C17.1897 17.8371 16.973 18.2432 16.62 18.5394C16.267 18.8356 15.8037 19.0001 15.3227 19H8.67733C8.19632 19.0001 7.73299 18.8356 7.37998 18.5394C7.02698 18.2432 6.81032 17.8371 6.77333 17.4023L5.86715 7.7234M18.1328 7.7234C17.1536 7.58919 16.1693 7.48733 15.1818 7.41803M5.86715 7.7234C5.57697 7.76263 5.28848 7.80494 5 7.85032M5.86715 7.7234C6.84642 7.58919 7.83074 7.48733 8.81818 7.41803M15.1818 7.41803C13.0638 7.26963 10.9362 7.26963 8.81818 7.41803M15.1818 7.41803C15.1818 5.30368 13.7266 4.34834 12 4.34834C10.2734 4.34834 8.81818 5.43945 8.81818 7.41803"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.5 15.5L10 11"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 11L13.5 15.5"/></svg>', ye = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M16.7893 7.87697C17.5 8 18.5 8 18.5 8C18.5 8 17.5 9.5 17.5 10C18.5 18.5 11.5 20.5 5.5 16.5C6.99996 16.6712 8.04617 16.5163 9.25234 15.6024C7.99546 15.58 5.36548 13.6033 5 12.5C6.5 13 8 12 8 12C6.52134 11.0446 4.93005 9.24114 5.97461 7.50832C7.39125 9.18838 9.50766 10.2939 11.8948 10.4097C11.2198 7.60755 14.9218 5.95341 16.7893 7.87697Z"/></svg>', ke = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7.5V11.5C9 12.2956 9.31607 13.0587 9.87868 13.6213C10.4413 14.1839 11.2044 14.5 12 14.5C12.7956 14.5 13.5587 14.1839 14.1213 13.6213C14.6839 13.0587 15 12.2956 15 11.5V7.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.71429 18H16.2857"/></svg>', be = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.33333 13.6667L6 10.3333L9.33333 7M6 10.3333H15.1667C16.0507 10.3333 16.8986 10.6845 17.5237 11.3096C18.1488 11.9348 18.5 12.7826 18.5 13.6667C18.5 14.5507 18.1488 15.3986 17.5237 16.0237C16.8986 16.6488 16.0507 17 15.1667 17H14.3333"/></svg>', me = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', we = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M12 10C12.7145 10 13.239 9.56559 13.5392 9.11536C13.844 8.65814 14 8.0841 14 7.5C14 6.9159 13.844 6.34186 13.5392 5.88464C13.239 5.43441 12.7145 5 12 5C11.2855 5 10.761 5.43441 10.4608 5.88464C10.156 6.34186 10 6.9159 10 7.5C10 8.0841 10.156 8.65814 10.4608 9.11536C10.761 9.56559 11.2855 10 12 10Z"/><ellipse cx="12" cy="16" stroke="currentColor" stroke-width="2" rx="3" ry="5" transform="rotate(-90 12 16)"/></svg>', xe = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 10C10.7145 10 11.239 9.56559 11.5392 9.11536C11.844 8.65814 12 8.0841 12 7.5C12 6.9159 11.844 6.34186 11.5392 5.88464C11.239 5.43441 10.7145 5 10 5C9.28547 5 8.761 5.43441 8.46084 5.88464C8.15603 6.34186 8 6.9159 8 7.5C8 8.0841 8.15603 8.65814 8.46084 9.11536C8.761 9.56559 9.28547 10 10 10Z"/><ellipse cx="10" cy="16" stroke="currentColor" stroke-width="2" rx="3" ry="5" transform="rotate(-90 10 16)"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.5555 10.2222C16.5374 10.2222 17.3333 9.42629 17.3333 8.44445C17.3333 7.46261 16.5374 6.66667 15.5555 6.66667"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.5 13C21 14.5 20.5 18 18 18.5"/></svg>', Ce = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>';
        }, function(e, t) {
          var n = {}.toString;
          e.exports = function(e2) {
            return n.call(e2).slice(8, -1);
          };
        }, function(e, t) {
          e.exports = function(e2) {
            if (null == e2)
              throw TypeError("Can't call method on  " + e2);
            return e2;
          };
        }, function(e, t, n) {
          "use strict";
          if (n(17)) {
            var o = n(46), r = n(10), i = n(11), a = n(0), s = n(81), l = n(110), c = n(31), u = n(59), f = n(44), d = n(27), p = n(60), h = n(33), v = n(15), g = n(144), y = n(48), k = n(42), b = n(26), m = n(64), w = n(13), x = n(22), C = n(102), S = n(49), T = n(51), E = n(50).f, B = n(104), M = n(45), _ = n(14), O = n(36), I = n(71), L = n(65), P = n(106), j = n(57), R = n(74), A = n(58), N = n(105), D = n(135), F = n(18), H = n(34), W = F.f, U = H.f, z = r.RangeError, V = r.TypeError, Y = r.Uint8Array, X = Array.prototype, G = l.ArrayBuffer, K = l.DataView, Z = O(0), q = O(2), J = O(3), $2 = O(4), Q = O(5), ee = O(6), te = I(true), ne = I(false), oe = P.values, re = P.keys, ie = P.entries, ae = X.lastIndexOf, se = X.reduce, le = X.reduceRight, ce = X.join, ue = X.sort, fe = X.slice, de = X.toString, pe = X.toLocaleString, he = _("iterator"), ve = _("toStringTag"), ge = M("typed_constructor"), ye = M("def_constructor"), ke = s.CONSTR, be = s.TYPED, me = s.VIEW, we = O(1, function(e2, t2) {
              return Ee(L(e2, e2[ye]), t2);
            }), xe = i(function() {
              return 1 === new Y(new Uint16Array([1]).buffer)[0];
            }), Ce = !!Y && !!Y.prototype.set && i(function() {
              new Y(1).set({});
            }), Se = function(e2, t2) {
              var n2 = h(e2);
              if (n2 < 0 || n2 % t2)
                throw z("Wrong offset!");
              return n2;
            }, Te = function(e2) {
              if (w(e2) && be in e2)
                return e2;
              throw V(e2 + " is not a typed array!");
            }, Ee = function(e2, t2) {
              if (!w(e2) || !(ge in e2))
                throw V("It is not a typed array constructor!");
              return new e2(t2);
            }, Be = function(e2, t2) {
              return Me(L(e2, e2[ye]), t2);
            }, Me = function(e2, t2) {
              for (var n2 = 0, o2 = t2.length, r2 = Ee(e2, o2); o2 > n2; )
                r2[n2] = t2[n2++];
              return r2;
            }, _e = function(e2, t2, n2) {
              W(e2, t2, { get: function() {
                return this._d[n2];
              } });
            }, Oe = function(e2) {
              var t2, n2, o2, r2, i2, a2, s2 = x(e2), l2 = arguments.length, u2 = l2 > 1 ? arguments[1] : void 0, f2 = void 0 !== u2, d2 = B(s2);
              if (null != d2 && !C(d2)) {
                for (a2 = d2.call(s2), o2 = [], t2 = 0; !(i2 = a2.next()).done; t2++)
                  o2.push(i2.value);
                s2 = o2;
              }
              for (f2 && l2 > 2 && (u2 = c(u2, arguments[2], 2)), t2 = 0, n2 = v(s2.length), r2 = Ee(this, n2); n2 > t2; t2++)
                r2[t2] = f2 ? u2(s2[t2], t2) : s2[t2];
              return r2;
            }, Ie = function() {
              for (var e2 = 0, t2 = arguments.length, n2 = Ee(this, t2); t2 > e2; )
                n2[e2] = arguments[e2++];
              return n2;
            }, Le = !!Y && i(function() {
              pe.call(new Y(1));
            }), Pe = function() {
              return pe.apply(Le ? fe.call(Te(this)) : Te(this), arguments);
            }, je = { copyWithin: function(e2, t2) {
              return D.call(Te(this), e2, t2, arguments.length > 2 ? arguments[2] : void 0);
            }, every: function(e2) {
              return $2(Te(this), e2, arguments.length > 1 ? arguments[1] : void 0);
            }, fill: function(e2) {
              return N.apply(Te(this), arguments);
            }, filter: function(e2) {
              return Be(this, q(Te(this), e2, arguments.length > 1 ? arguments[1] : void 0));
            }, find: function(e2) {
              return Q(Te(this), e2, arguments.length > 1 ? arguments[1] : void 0);
            }, findIndex: function(e2) {
              return ee(Te(this), e2, arguments.length > 1 ? arguments[1] : void 0);
            }, forEach: function(e2) {
              Z(Te(this), e2, arguments.length > 1 ? arguments[1] : void 0);
            }, indexOf: function(e2) {
              return ne(Te(this), e2, arguments.length > 1 ? arguments[1] : void 0);
            }, includes: function(e2) {
              return te(Te(this), e2, arguments.length > 1 ? arguments[1] : void 0);
            }, join: function(e2) {
              return ce.apply(Te(this), arguments);
            }, lastIndexOf: function(e2) {
              return ae.apply(Te(this), arguments);
            }, map: function(e2) {
              return we(Te(this), e2, arguments.length > 1 ? arguments[1] : void 0);
            }, reduce: function(e2) {
              return se.apply(Te(this), arguments);
            }, reduceRight: function(e2) {
              return le.apply(Te(this), arguments);
            }, reverse: function() {
              for (var e2, t2 = Te(this).length, n2 = Math.floor(t2 / 2), o2 = 0; o2 < n2; )
                e2 = this[o2], this[o2++] = this[--t2], this[t2] = e2;
              return this;
            }, some: function(e2) {
              return J(Te(this), e2, arguments.length > 1 ? arguments[1] : void 0);
            }, sort: function(e2) {
              return ue.call(Te(this), e2);
            }, subarray: function(e2, t2) {
              var n2 = Te(this), o2 = n2.length, r2 = y(e2, o2);
              return new (L(n2, n2[ye]))(n2.buffer, n2.byteOffset + r2 * n2.BYTES_PER_ELEMENT, v((void 0 === t2 ? o2 : y(t2, o2)) - r2));
            } }, Re = function(e2, t2) {
              return Be(this, fe.call(Te(this), e2, t2));
            }, Ae = function(e2) {
              Te(this);
              var t2 = Se(arguments[1], 1), n2 = this.length, o2 = x(e2), r2 = v(o2.length), i2 = 0;
              if (r2 + t2 > n2)
                throw z("Wrong length!");
              for (; i2 < r2; )
                this[t2 + i2] = o2[i2++];
            }, Ne = { entries: function() {
              return ie.call(Te(this));
            }, keys: function() {
              return re.call(Te(this));
            }, values: function() {
              return oe.call(Te(this));
            } }, De = function(e2, t2) {
              return w(e2) && e2[be] && "symbol" != typeof t2 && t2 in e2 && String(+t2) == String(t2);
            }, Fe = function(e2, t2) {
              return De(e2, t2 = k(t2, true)) ? f(2, e2[t2]) : U(e2, t2);
            }, He = function(e2, t2, n2) {
              return !(De(e2, t2 = k(t2, true)) && w(n2) && b(n2, "value")) || b(n2, "get") || b(n2, "set") || n2.configurable || b(n2, "writable") && !n2.writable || b(n2, "enumerable") && !n2.enumerable ? W(e2, t2, n2) : (e2[t2] = n2.value, e2);
            };
            ke || (H.f = Fe, F.f = He), a(a.S + a.F * !ke, "Object", { getOwnPropertyDescriptor: Fe, defineProperty: He }), i(function() {
              de.call({});
            }) && (de = pe = function() {
              return ce.call(this);
            });
            var We = p({}, je);
            p(We, Ne), d(We, he, Ne.values), p(We, { slice: Re, set: Ae, constructor: function() {
            }, toString: de, toLocaleString: Pe }), _e(We, "buffer", "b"), _e(We, "byteOffset", "o"), _e(We, "byteLength", "l"), _e(We, "length", "e"), W(We, ve, { get: function() {
              return this[be];
            } }), e.exports = function(e2, t2, n2, l2) {
              var c2 = e2 + ((l2 = !!l2) ? "Clamped" : "") + "Array", f2 = "get" + e2, p2 = "set" + e2, h2 = r[c2], y2 = h2 || {}, k2 = h2 && T(h2), b2 = !h2 || !s.ABV, x2 = {}, C2 = h2 && h2.prototype, B2 = function(e3, n3) {
                W(e3, n3, { get: function() {
                  return function(e4, n4) {
                    var o2 = e4._d;
                    return o2.v[f2](n4 * t2 + o2.o, xe);
                  }(this, n3);
                }, set: function(e4) {
                  return function(e5, n4, o2) {
                    var r2 = e5._d;
                    l2 && (o2 = (o2 = Math.round(o2)) < 0 ? 0 : o2 > 255 ? 255 : 255 & o2), r2.v[p2](n4 * t2 + r2.o, o2, xe);
                  }(this, n3, e4);
                }, enumerable: true });
              };
              b2 ? (h2 = n2(function(e3, n3, o2, r2) {
                u(e3, h2, c2, "_d");
                var i2, a2, s2, l3, f3 = 0, p3 = 0;
                if (w(n3)) {
                  if (!(n3 instanceof G || "ArrayBuffer" == (l3 = m(n3)) || "SharedArrayBuffer" == l3))
                    return be in n3 ? Me(h2, n3) : Oe.call(h2, n3);
                  i2 = n3, p3 = Se(o2, t2);
                  var y3 = n3.byteLength;
                  if (void 0 === r2) {
                    if (y3 % t2)
                      throw z("Wrong length!");
                    if ((a2 = y3 - p3) < 0)
                      throw z("Wrong length!");
                  } else if ((a2 = v(r2) * t2) + p3 > y3)
                    throw z("Wrong length!");
                  s2 = a2 / t2;
                } else
                  s2 = g(n3), i2 = new G(a2 = s2 * t2);
                for (d(e3, "_d", { b: i2, o: p3, l: a2, e: s2, v: new K(i2) }); f3 < s2; )
                  B2(e3, f3++);
              }), C2 = h2.prototype = S(We), d(C2, "constructor", h2)) : i(function() {
                h2(1);
              }) && i(function() {
                new h2(-1);
              }) && R(function(e3) {
                new h2(), new h2(null), new h2(1.5), new h2(e3);
              }, true) || (h2 = n2(function(e3, n3, o2, r2) {
                var i2;
                return u(e3, h2, c2), w(n3) ? n3 instanceof G || "ArrayBuffer" == (i2 = m(n3)) || "SharedArrayBuffer" == i2 ? void 0 !== r2 ? new y2(n3, Se(o2, t2), r2) : void 0 !== o2 ? new y2(n3, Se(o2, t2)) : new y2(n3) : be in n3 ? Me(h2, n3) : Oe.call(h2, n3) : new y2(g(n3));
              }), Z(k2 !== Function.prototype ? E(y2).concat(E(k2)) : E(y2), function(e3) {
                e3 in h2 || d(h2, e3, y2[e3]);
              }), h2.prototype = C2, o || (C2.constructor = h2));
              var M2 = C2[he], _2 = !!M2 && ("values" == M2.name || null == M2.name), O2 = Ne.values;
              d(h2, ge, true), d(C2, be, c2), d(C2, me, true), d(C2, ye, h2), (l2 ? new h2(1)[ve] == c2 : ve in C2) || W(C2, ve, { get: function() {
                return c2;
              } }), x2[c2] = h2, a(a.G + a.W + a.F * (h2 != y2), x2), a(a.S, c2, { BYTES_PER_ELEMENT: t2 }), a(a.S + a.F * i(function() {
                y2.of.call(h2, 1);
              }), c2, { from: Oe, of: Ie }), "BYTES_PER_ELEMENT" in C2 || d(C2, "BYTES_PER_ELEMENT", t2), a(a.P, c2, je), A(c2), a(a.P + a.F * Ce, c2, { set: Ae }), a(a.P + a.F * !_2, c2, Ne), o || C2.toString == de || (C2.toString = de), a(a.P + a.F * i(function() {
                new h2(1).slice();
              }), c2, { slice: Re }), a(a.P + a.F * (i(function() {
                return [1, 2].toLocaleString() != new h2([1, 2]).toLocaleString();
              }) || !i(function() {
                C2.toLocaleString.call([1, 2]);
              })), c2, { toLocaleString: Pe }), j[c2] = _2 ? M2 : O2, o || _2 || d(C2, he, O2);
            };
          } else
            e.exports = function() {
            };
        }, function(e, t, n) {
          var o = n(369), r = n(370), i = n(148), a = n(371);
          e.exports = function(e2) {
            return o(e2) || r(e2) || i(e2) || a();
          }, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t, n) {
          var o = n(13);
          e.exports = function(e2, t2) {
            if (!o(e2))
              return e2;
            var n2, r;
            if (t2 && "function" == typeof (n2 = e2.toString) && !o(r = n2.call(e2)))
              return r;
            if ("function" == typeof (n2 = e2.valueOf) && !o(r = n2.call(e2)))
              return r;
            if (!t2 && "function" == typeof (n2 = e2.toString) && !o(r = n2.call(e2)))
              return r;
            throw TypeError("Can't convert object to primitive value");
          };
        }, function(e, t, n) {
          var o = n(45)("meta"), r = n(13), i = n(26), a = n(18).f, s = 0, l = Object.isExtensible || function() {
            return true;
          }, c = !n(11)(function() {
            return l(Object.preventExtensions({}));
          }), u = function(e2) {
            a(e2, o, { value: { i: "O" + ++s, w: {} } });
          }, f = e.exports = { KEY: o, NEED: false, fastKey: function(e2, t2) {
            if (!r(e2))
              return "symbol" == typeof e2 ? e2 : ("string" == typeof e2 ? "S" : "P") + e2;
            if (!i(e2, o)) {
              if (!l(e2))
                return "F";
              if (!t2)
                return "E";
              u(e2);
            }
            return e2[o].i;
          }, getWeak: function(e2, t2) {
            if (!i(e2, o)) {
              if (!l(e2))
                return true;
              if (!t2)
                return false;
              u(e2);
            }
            return e2[o].w;
          }, onFreeze: function(e2) {
            return c && f.NEED && l(e2) && !i(e2, o) && u(e2), e2;
          } };
        }, function(e, t) {
          e.exports = function(e2, t2) {
            return { enumerable: !(1 & e2), configurable: !(2 & e2), writable: !(4 & e2), value: t2 };
          };
        }, function(e, t) {
          var n = 0, o = Math.random();
          e.exports = function(e2) {
            return "Symbol(".concat(void 0 === e2 ? "" : e2, ")_", (++n + o).toString(36));
          };
        }, function(e, t) {
          e.exports = false;
        }, function(e, t, n) {
          var o = n(119), r = n(89);
          e.exports = Object.keys || function(e2) {
            return o(e2, r);
          };
        }, function(e, t, n) {
          var o = n(33), r = Math.max, i = Math.min;
          e.exports = function(e2, t2) {
            return (e2 = o(e2)) < 0 ? r(e2 + t2, 0) : i(e2, t2);
          };
        }, function(e, t, n) {
          var o = n(12), r = n(120), i = n(89), a = n(88)("IE_PROTO"), s = function() {
          }, l = function() {
            var e2, t2 = n(86)("iframe"), o2 = i.length;
            for (t2.style.display = "none", n(90).appendChild(t2), t2.src = "javascript:", (e2 = t2.contentWindow.document).open(), e2.write("<script>document.F=Object<\/script>"), e2.close(), l = e2.F; o2--; )
              delete l.prototype[i[o2]];
            return l();
          };
          e.exports = Object.create || function(e2, t2) {
            var n2;
            return null !== e2 ? (s.prototype = o(e2), n2 = new s(), s.prototype = null, n2[a] = e2) : n2 = l(), void 0 === t2 ? n2 : r(n2, t2);
          };
        }, function(e, t, n) {
          var o = n(119), r = n(89).concat("length", "prototype");
          t.f = Object.getOwnPropertyNames || function(e2) {
            return o(e2, r);
          };
        }, function(e, t, n) {
          var o = n(26), r = n(22), i = n(88)("IE_PROTO"), a = Object.prototype;
          e.exports = Object.getPrototypeOf || function(e2) {
            return e2 = r(e2), o(e2, i) ? e2[i] : "function" == typeof e2.constructor && e2 instanceof e2.constructor ? e2.constructor.prototype : e2 instanceof Object ? a : null;
          };
        }, function(e, t, n) {
          var o = n(14)("unscopables"), r = Array.prototype;
          null == r[o] && n(27)(r, o, {}), e.exports = function(e2) {
            r[o][e2] = true;
          };
        }, function(e, t, n) {
          var o = n(13);
          e.exports = function(e2, t2) {
            if (!o(e2) || e2._t !== t2)
              throw TypeError("Incompatible receiver, " + t2 + " required!");
            return e2;
          };
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(150)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var l = function() {
              function e2() {
                (0, r2.default)(this, e2);
              }
              return (0, i2.default)(e2, null, [{ key: "ui", value: function(t2, n2) {
                return e2._t(t2, n2);
              } }, { key: "t", value: function(t2, n2) {
                return e2._t(t2, n2);
              } }, { key: "setDictionary", value: function(t2) {
                e2.currentDictionary = t2;
              } }, { key: "_t", value: function(t2, n2) {
                var o3 = e2.getNamespace(t2);
                return o3 && o3[n2] ? o3[n2] : n2;
              } }, { key: "getNamespace", value: function(t2) {
                return t2.split(".").reduce(function(e3, t3) {
                  return e3 && Object.keys(e3).length ? e3[t3] : {};
                }, e2.currentDictionary);
              } }]), e2;
            }();
            o2.default = l, l.displayName = "I18n", l.currentDictionary = a.default, e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o = n(18).f, r = n(26), i = n(14)("toStringTag");
          e.exports = function(e2, t2, n2) {
            e2 && !r(e2 = n2 ? e2 : e2.prototype, i) && o(e2, i, { configurable: true, value: t2 });
          };
        }, function(e, t, n) {
          var o = n(0), r = n(39), i = n(11), a = n(92), s = "[" + a + "]", l = RegExp("^" + s + s + "*"), c = RegExp(s + s + "*$"), u = function(e2, t2, n2) {
            var r2 = {}, s2 = i(function() {
              return !!a[e2]() || "\u200B\x85" != "\u200B\x85"[e2]();
            }), l2 = r2[e2] = s2 ? t2(f) : a[e2];
            n2 && (r2[n2] = l2), o(o.P + o.F * s2, "String", r2);
          }, f = u.trim = function(e2, t2) {
            return e2 = String(r(e2)), 1 & t2 && (e2 = e2.replace(l, "")), 2 & t2 && (e2 = e2.replace(c, "")), e2;
          };
          e.exports = u;
        }, function(e, t) {
          e.exports = {};
        }, function(e, t, n) {
          "use strict";
          var o = n(10), r = n(18), i = n(17), a = n(14)("species");
          e.exports = function(e2) {
            var t2 = o[e2];
            i && t2 && !t2[a] && r.f(t2, a, { configurable: true, get: function() {
              return this;
            } });
          };
        }, function(e, t) {
          e.exports = function(e2, t2, n, o) {
            if (!(e2 instanceof t2) || void 0 !== o && o in e2)
              throw TypeError(n + ": incorrect invocation!");
            return e2;
          };
        }, function(e, t, n) {
          var o = n(23);
          e.exports = function(e2, t2, n2) {
            for (var r in t2)
              o(e2, r, t2[r], n2);
            return e2;
          };
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(20), n(30), n(21), n(41), n(2), n(3), n(152), n(114), n(5), n(6), n(4), n(19), n(8), n(113), n(25), n(82)], void 0 === (i = "function" == typeof (o = function(e2, t2, o2, r2, i2, s, l, c, u, f, d, p, h, v, g, y, k) {
            "use strict";
            var b, m = n(1);
            function w(e3) {
              if ("function" != typeof WeakMap)
                return null;
              var t3 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (w = function(e4) {
                return e4 ? n2 : t3;
              })(e3);
            }
            function x(e3) {
              var t3 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e4) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, p.default)(e3);
                if (t3) {
                  var r3 = (0, p.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, d.default)(this, n2);
              };
            }
            Object.defineProperty(e2, "__esModule", { value: true }), e2.default = e2.BlockToolAPI = void 0, t2 = m(t2), o2 = m(o2), r2 = m(r2), i2 = m(i2), s = m(s), l = m(l), c = m(c), u = m(u), f = m(f), d = m(d), p = m(p), h = m(h), v = function(e3, t3) {
              if (!t3 && e3 && e3.__esModule)
                return e3;
              if (null === e3 || "object" !== a(e3) && "function" != typeof e3)
                return { default: e3 };
              var n2 = w(t3);
              if (n2 && n2.has(e3))
                return n2.get(e3);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e3)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e3, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e3, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e3[i3];
                }
              return o3.default = e3, n2 && n2.set(e3, o3), o3;
            }(v), g = m(g), y = m(y), k = m(k), e2.BlockToolAPI = b, function(e3) {
              e3.APPEND_CALLBACK = "appendCallback", e3.RENDERED = "rendered", e3.MOVED = "moved", e3.UPDATED = "updated", e3.REMOVED = "removed", e3.ON_PASTE = "onPaste";
            }(b || (e2.BlockToolAPI = b = {}));
            var C = function(e3) {
              (0, f.default)(w2, e3);
              var n2, a2, d2, k2, m2 = x(w2);
              function w2(e4) {
                var t3, n3 = e4.id, o3 = void 0 === n3 ? v.generateBlockId() : n3, r3 = e4.data, a3 = e4.tool, l2 = e4.api, u2 = e4.readOnly, f2 = e4.tunesData;
                return (0, s.default)(this, w2), (t3 = m2.call(this)).cachedInputs = [], t3.tunesInstances = /* @__PURE__ */ new Map(), t3.defaultTunesInstances = /* @__PURE__ */ new Map(), t3.unavailableTunesData = {}, t3.inputIndex = 0, t3.modificationDebounceTimer = 450, t3.didMutated = v.debounce(function() {
                  var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n4 = e5 instanceof InputEvent || !e5.some(function(e6) {
                    var t4 = e6.addedNodes, n5 = void 0 === t4 ? [] : t4, o4 = e6.removedNodes;
                    return [].concat((0, i2.default)(Array.from(n5)), (0, i2.default)(Array.from(o4))).some(function(e7) {
                      return h.default.isElement(e7) && "true" === e7.dataset.mutationFree;
                    });
                  });
                  n4 && (t3.cachedInputs = [], t3.updateCurrentInput(), t3.call(b.UPDATED), t3.emit("didMutated", (0, c.default)(t3)));
                }, t3.modificationDebounceTimer), t3.handleFocus = function() {
                  t3.cachedInputs = [], t3.updateCurrentInput();
                }, t3.name = a3.name, t3.id = o3, t3.settings = a3.settings, t3.config = a3.settings.config || {}, t3.api = l2, t3.blockAPI = new g.default((0, c.default)(t3)), t3.mutationObserver = new MutationObserver(t3.didMutated), t3.tool = a3, t3.toolInstance = a3.create(r3, t3.blockAPI, u2), t3.tunes = a3.tunes, t3.composeTunes(f2), t3.holder = t3.compose(), t3;
              }
              return (0, l.default)(w2, [{ key: "inputs", get: function() {
                if (0 !== this.cachedInputs.length)
                  return this.cachedInputs;
                var e4 = h.default.findAllInputs(this.holder);
                return this.inputIndex > e4.length - 1 && (this.inputIndex = e4.length - 1), this.cachedInputs = e4, e4;
              } }, { key: "currentInput", get: function() {
                return this.inputs[this.inputIndex];
              }, set: function(e4) {
                var t3 = this.inputs.findIndex(function(t4) {
                  return t4 === e4 || t4.contains(e4);
                });
                -1 !== t3 && (this.inputIndex = t3);
              } }, { key: "firstInput", get: function() {
                return this.inputs[0];
              } }, { key: "lastInput", get: function() {
                var e4 = this.inputs;
                return e4[e4.length - 1];
              } }, { key: "nextInput", get: function() {
                return this.inputs[this.inputIndex + 1];
              } }, { key: "previousInput", get: function() {
                return this.inputs[this.inputIndex - 1];
              } }, { key: "data", get: function() {
                return this.save().then(function(e4) {
                  return e4 && !v.isEmpty(e4.data) ? e4.data : {};
                });
              } }, { key: "sanitize", get: function() {
                return this.tool.sanitizeConfig;
              } }, { key: "mergeable", get: function() {
                return v.isFunction(this.toolInstance.merge);
              } }, { key: "isEmpty", get: function() {
                var e4 = h.default.isEmpty(this.pluginsContent), t3 = !this.hasMedia;
                return e4 && t3;
              } }, { key: "hasMedia", get: function() {
                return !!this.holder.querySelector(["img", "iframe", "video", "audio", "source", "input", "textarea", "twitterwidget"].join(","));
              } }, { key: "focused", get: function() {
                return this.holder.classList.contains(w2.CSS.focused);
              }, set: function(e4) {
                this.holder.classList.toggle(w2.CSS.focused, e4);
              } }, { key: "selected", get: function() {
                return this.holder.classList.contains(w2.CSS.selected);
              }, set: function(e4) {
                e4 ? (this.holder.classList.add(w2.CSS.selected), y.default.addFakeCursor(this.holder)) : (this.holder.classList.remove(w2.CSS.selected), y.default.removeFakeCursor(this.holder));
              } }, { key: "stretched", get: function() {
                return this.holder.classList.contains(w2.CSS.wrapperStretched);
              }, set: function(e4) {
                this.holder.classList.toggle(w2.CSS.wrapperStretched, e4);
              } }, { key: "dropTarget", set: function(e4) {
                this.holder.classList.toggle(w2.CSS.dropTarget, e4);
              } }, { key: "pluginsContent", get: function() {
                var e4 = this.holder.querySelector(".".concat(w2.CSS.content));
                if (e4 && e4.childNodes.length)
                  for (var t3 = e4.childNodes.length - 1; t3 >= 0; t3--) {
                    var n3 = e4.childNodes[t3];
                    if (!h.default.isExtensionNode(n3))
                      return n3;
                  }
                return null;
              } }, { key: "call", value: function(e4, t3) {
                if (v.isFunction(this.toolInstance[e4])) {
                  e4 === b.APPEND_CALLBACK && v.log("`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead", "warn");
                  try {
                    this.toolInstance[e4].call(this.toolInstance, t3);
                  } catch (t4) {
                    v.log("Error during '".concat(e4, "' call: ").concat(t4.message), "error");
                  }
                }
              } }, { key: "mergeWith", value: (k2 = (0, r2.default)(t2.default.mark(function e4(n3) {
                return t2.default.wrap(function(e5) {
                  for (; ; )
                    switch (e5.prev = e5.next) {
                      case 0:
                        return e5.next = 2, this.toolInstance.merge(n3);
                      case 2:
                      case "end":
                        return e5.stop();
                    }
                }, e4, this);
              })), function(e4) {
                return k2.apply(this, arguments);
              }) }, { key: "save", value: (d2 = (0, r2.default)(t2.default.mark(function e4() {
                var n3, r3, a3, s2, l2 = this;
                return t2.default.wrap(function(e5) {
                  for (; ; )
                    switch (e5.prev = e5.next) {
                      case 0:
                        return e5.next = 2, this.toolInstance.save(this.pluginsContent);
                      case 2:
                        return n3 = e5.sent, r3 = this.unavailableTunesData, [].concat((0, i2.default)(this.tunesInstances.entries()), (0, i2.default)(this.defaultTunesInstances.entries())).forEach(function(e6) {
                          var t3 = (0, o2.default)(e6, 2), n4 = t3[0], i3 = t3[1];
                          if (v.isFunction(i3.save))
                            try {
                              r3[n4] = i3.save();
                            } catch (e7) {
                              v.log("Tune ".concat(i3.constructor.name, " save method throws an Error %o"), "warn", e7);
                            }
                        }), a3 = window.performance.now(), e5.abrupt("return", Promise.resolve(n3).then(function(e6) {
                          return s2 = window.performance.now(), { id: l2.id, tool: l2.name, data: e6, tunes: r3, time: s2 - a3 };
                        }).catch(function(e6) {
                          v.log("Saving process for ".concat(l2.name, " tool failed due to the ").concat(e6), "log", "red");
                        }));
                      case 7:
                      case "end":
                        return e5.stop();
                    }
                }, e4, this);
              })), function() {
                return d2.apply(this, arguments);
              }) }, { key: "validate", value: (a2 = (0, r2.default)(t2.default.mark(function e4(n3) {
                var o3;
                return t2.default.wrap(function(e5) {
                  for (; ; )
                    switch (e5.prev = e5.next) {
                      case 0:
                        if (o3 = true, !(this.toolInstance.validate instanceof Function)) {
                          e5.next = 5;
                          break;
                        }
                        return e5.next = 4, this.toolInstance.validate(n3);
                      case 4:
                        o3 = e5.sent;
                      case 5:
                        return e5.abrupt("return", o3);
                      case 6:
                      case "end":
                        return e5.stop();
                    }
                }, e4, this);
              })), function(e4) {
                return a2.apply(this, arguments);
              }) }, { key: "getTunes", value: function() {
                var e4 = document.createElement("div"), t3 = [];
                return ["function" == typeof this.toolInstance.renderSettings ? this.toolInstance.renderSettings() : [], [].concat((0, i2.default)(this.tunesInstances.values()), (0, i2.default)(this.defaultTunesInstances.values())).map(function(e5) {
                  return e5.render();
                })].flat().forEach(function(n3) {
                  h.default.isElement(n3) ? e4.appendChild(n3) : Array.isArray(n3) ? t3.push.apply(t3, (0, i2.default)(n3)) : t3.push(n3);
                }), [t3, e4];
              } }, { key: "updateCurrentInput", value: function() {
                this.currentInput = h.default.isNativeInput(document.activeElement) || !y.default.anchorNode ? document.activeElement : y.default.anchorNode;
              } }, { key: "willSelect", value: function() {
                this.mutationObserver.observe(this.holder.firstElementChild, { childList: true, subtree: true, characterData: true, attributes: true }), this.addInputEvents();
              } }, { key: "willUnselect", value: function() {
                this.mutationObserver.disconnect(), this.removeInputEvents();
              } }, { key: "dispatchChange", value: function() {
                this.didMutated();
              } }, { key: "destroy", value: function() {
                (0, u.default)((0, p.default)(w2.prototype), "destroy", this).call(this), v.isFunction(this.toolInstance.destroy) && this.toolInstance.destroy();
              } }, { key: "getActiveToolboxEntry", value: (n2 = (0, r2.default)(t2.default.mark(function e4() {
                var n3, r3, i3;
                return t2.default.wrap(function(e5) {
                  for (; ; )
                    switch (e5.prev = e5.next) {
                      case 0:
                        if (1 !== (n3 = this.tool.toolbox).length) {
                          e5.next = 3;
                          break;
                        }
                        return e5.abrupt("return", Promise.resolve(this.tool.toolbox[0]));
                      case 3:
                        return e5.next = 5, this.data;
                      case 5:
                        return r3 = e5.sent, i3 = n3, e5.abrupt("return", i3.find(function(e6) {
                          return Object.entries(e6.data).some(function(e7) {
                            var t3 = (0, o2.default)(e7, 2), n4 = t3[0], i4 = t3[1];
                            return r3[n4] && v.equals(r3[n4], i4);
                          });
                        }));
                      case 8:
                      case "end":
                        return e5.stop();
                    }
                }, e4, this);
              })), function() {
                return n2.apply(this, arguments);
              }) }, { key: "compose", value: function() {
                var e4 = h.default.make("div", w2.CSS.wrapper), t3 = h.default.make("div", w2.CSS.content), n3 = this.toolInstance.render();
                t3.appendChild(n3);
                var o3 = t3;
                return [].concat((0, i2.default)(this.tunesInstances.values()), (0, i2.default)(this.defaultTunesInstances.values())).forEach(function(e5) {
                  if (v.isFunction(e5.wrap))
                    try {
                      o3 = e5.wrap(o3);
                    } catch (t4) {
                      v.log("Tune ".concat(e5.constructor.name, " wrap method throws an Error %o"), "warn", t4);
                    }
                }), e4.appendChild(o3), e4;
              } }, { key: "composeTunes", value: function(e4) {
                var t3 = this;
                Array.from(this.tunes.values()).forEach(function(n3) {
                  (n3.isInternal ? t3.defaultTunesInstances : t3.tunesInstances).set(n3.name, n3.create(e4[n3.name], t3.blockAPI));
                }), Object.entries(e4).forEach(function(e5) {
                  var n3 = (0, o2.default)(e5, 2), r3 = n3[0], i3 = n3[1];
                  t3.tunesInstances.has(r3) || (t3.unavailableTunesData[r3] = i3);
                });
              } }, { key: "addInputEvents", value: function() {
                var e4 = this;
                this.inputs.forEach(function(t3) {
                  t3.addEventListener("focus", e4.handleFocus), h.default.isNativeInput(t3) && t3.addEventListener("input", e4.didMutated);
                });
              } }, { key: "removeInputEvents", value: function() {
                var e4 = this;
                this.inputs.forEach(function(t3) {
                  t3.removeEventListener("focus", e4.handleFocus), h.default.isNativeInput(t3) && t3.removeEventListener("input", e4.didMutated);
                });
              } }], [{ key: "CSS", get: function() {
                return { wrapper: "ce-block", wrapperStretched: "ce-block--stretched", content: "ce-block__content", focused: "ce-block--focused", selected: "ce-block--selected", dropTarget: "ce-block--drop-target" };
              } }]), w2;
            }(k.default);
            e2.default = C, C.displayName = "Block";
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o = n(38);
          e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e2) {
            return "String" == o(e2) ? e2.split("") : Object(e2);
          };
        }, function(e, t) {
          t.f = {}.propertyIsEnumerable;
        }, function(e, t, n) {
          var o = n(38), r = n(14)("toStringTag"), i = "Arguments" == o(function() {
            return arguments;
          }());
          e.exports = function(e2) {
            var t2, n2, a;
            return void 0 === e2 ? "Undefined" : null === e2 ? "Null" : "string" == typeof (n2 = function(e3, t3) {
              try {
                return e3[t3];
              } catch (e4) {
              }
            }(t2 = Object(e2), r)) ? n2 : i ? o(t2) : "Object" == (a = o(t2)) && "function" == typeof t2.callee ? "Arguments" : a;
          };
        }, function(e, t, n) {
          var o = n(12), r = n(32), i = n(14)("species");
          e.exports = function(e2, t2) {
            var n2, a = o(e2).constructor;
            return void 0 === a || null == (n2 = o(a)[i]) ? t2 : r(n2);
          };
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(8), n(380)], void 0 === (i = "function" == typeof (o = function(e2, t2, o2) {
            "use strict";
            var r2 = n(1);
            function i2(e3) {
              if ("function" != typeof WeakMap)
                return null;
              var t3 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (i2 = function(e4) {
                return e4 ? n2 : t3;
              })(e3);
            }
            function s(e3) {
              var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = { tags: t3 }, r3 = new o2.default(n2);
              return r3.clean(e3);
            }
            function l(e3, n2) {
              return Array.isArray(e3) ? (i3 = n2, e3.map(function(e4) {
                return l(e4, i3);
              })) : t2.isObject(e3) ? function(e4, n3) {
                var o4, r4 = {};
                for (var i4 in e4)
                  if (Object.prototype.hasOwnProperty.call(e4, i4)) {
                    var a2 = e4[i4], s2 = (o4 = n3[i4], t2.isObject(o4) || t2.isBoolean(o4) || t2.isFunction(o4) ? n3[i4] : n3);
                    r4[i4] = l(a2, s2);
                  }
                return r4;
              }(e3, n2) : t2.isString(e3) ? (o3 = e3, r3 = n2, t2.isObject(r3) ? s(o3, r3) : false === r3 ? s(o3, {}) : o3) : e3;
              var o3, r3, i3;
            }
            Object.defineProperty(e2, "__esModule", { value: true }), e2.clean = s, e2.sanitizeBlocks = function(e3, n2) {
              return e3.map(function(e4) {
                var o3 = t2.isFunction(n2) ? n2(e4.tool) : n2;
                return t2.isEmpty(o3) || (e4.data = l(e4.data, o3)), e4;
              });
            }, t2 = function(e3, t3) {
              if (!t3 && e3 && e3.__esModule)
                return e3;
              if (null === e3 || "object" !== a(e3) && "function" != typeof e3)
                return { default: e3 };
              var n2 = i2(t3);
              if (n2 && n2.has(e3))
                return n2.get(e3);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var s2 in e3)
                if ("default" !== s2 && Object.prototype.hasOwnProperty.call(e3, s2)) {
                  var l2 = r3 ? Object.getOwnPropertyDescriptor(e3, s2) : null;
                  l2 && (l2.get || l2.set) ? Object.defineProperty(o3, s2, l2) : o3[s2] = e3[s2];
                }
              return o3.default = e3, n2 && n2.set(e3, o3), o3;
            }(t2), o2 = r2(o2);
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(382), n(8)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l) {
            "use strict";
            var c = n(1);
            function u(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (u = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = c(r2), i2 = c(i2), s = c(s), l = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = u(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(l);
            var f = function() {
              function e2(t2) {
                var n2 = this;
                (0, r2.default)(this, e2), this.iterator = null, this.activated = false, this.flipCallbacks = [], this.onKeyDown = function(t3) {
                  if (n2.isEventReadyForHandling(t3))
                    switch (e2.usedKeys.includes(t3.keyCode) && t3.preventDefault(), t3.keyCode) {
                      case l.keyCodes.TAB:
                        n2.handleTabPress(t3);
                        break;
                      case l.keyCodes.LEFT:
                      case l.keyCodes.UP:
                        n2.flipLeft();
                        break;
                      case l.keyCodes.RIGHT:
                      case l.keyCodes.DOWN:
                        n2.flipRight();
                        break;
                      case l.keyCodes.ENTER:
                        n2.handleEnterPress(t3);
                    }
                }, this.iterator = new s.default(t2.items, t2.focusedItemClass), this.activateCallback = t2.activateCallback, this.allowedKeys = t2.allowedKeys || e2.usedKeys;
              }
              return (0, i2.default)(e2, [{ key: "isActivated", get: function() {
                return this.activated;
              } }, { key: "activate", value: function(e3, t2) {
                this.activated = true, e3 && this.iterator.setItems(e3), void 0 !== t2 && this.iterator.setCursor(t2), document.addEventListener("keydown", this.onKeyDown, true);
              } }, { key: "deactivate", value: function() {
                this.activated = false, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
              } }, { key: "focusFirst", value: function() {
                this.dropCursor(), this.flipRight();
              } }, { key: "flipLeft", value: function() {
                this.iterator.previous(), this.flipCallback();
              } }, { key: "flipRight", value: function() {
                this.iterator.next(), this.flipCallback();
              } }, { key: "hasFocus", value: function() {
                return !!this.iterator.currentItem;
              } }, { key: "onFlip", value: function(e3) {
                this.flipCallbacks.push(e3);
              } }, { key: "removeOnFlip", value: function(e3) {
                this.flipCallbacks = this.flipCallbacks.filter(function(t2) {
                  return t2 !== e3;
                });
              } }, { key: "dropCursor", value: function() {
                this.iterator.dropCursor();
              } }, { key: "isEventReadyForHandling", value: function(e3) {
                return this.activated && this.allowedKeys.includes(e3.keyCode);
              } }, { key: "handleTabPress", value: function(e3) {
                switch (e3.shiftKey ? s.default.directions.LEFT : s.default.directions.RIGHT) {
                  case s.default.directions.RIGHT:
                    this.flipRight();
                    break;
                  case s.default.directions.LEFT:
                    this.flipLeft();
                }
              } }, { key: "handleEnterPress", value: function(e3) {
                this.activated && (this.iterator.currentItem && (e3.stopPropagation(), e3.preventDefault(), this.iterator.currentItem.click()), l.isFunction(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
              } }, { key: "flipCallback", value: function() {
                this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), this.flipCallbacks.forEach(function(e3) {
                  return e3();
                });
              } }], [{ key: "usedKeys", get: function() {
                return [l.keyCodes.TAB, l.keyCodes.LEFT, l.keyCodes.RIGHT, l.keyCodes.ENTER, l.keyCodes.UP, l.keyCodes.DOWN];
              } }]), e2;
            }();
            o2.default = f, f.displayName = "Flipper", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(30), n(150), n(8)], void 0 === (i = "function" == typeof (o = function(e2, t2, o2, r2) {
            "use strict";
            var i2 = n(1);
            Object.defineProperty(e2, "__esModule", { value: true }), e2.I18nInternalNS = void 0, t2 = i2(t2);
            var a = function e3(n2, o3) {
              var i3 = {};
              return Object.entries(n2).forEach(function(n3) {
                var a2 = (0, t2.default)(n3, 2), s = a2[0], l = a2[1];
                if ((0, r2.isObject)(l)) {
                  var c = o3 ? "".concat(o3, ".").concat(s) : s, u = Object.values(l).every(function(e4) {
                    return (0, r2.isString)(e4);
                  });
                  i3[s] = u ? c : e3(l, c);
                } else
                  i3[s] = l;
              }), i3;
            }((o2 = i2(o2)).default);
            e2.I18nInternalNS = a;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(8)], void 0 === (i = "function" == typeof (o = function(e2, t2, o2, r2) {
            "use strict";
            var i2, s, l, c, u, f, d = n(1);
            function p(e3) {
              if ("function" != typeof WeakMap)
                return null;
              var t3 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (p = function(e4) {
                return e4 ? n2 : t3;
              })(e3);
            }
            Object.defineProperty(e2, "__esModule", { value: true }), e2.default = e2.UserSettings = e2.ToolType = e2.InternalTuneSettings = e2.InternalInlineToolSettings = e2.InternalBlockToolSettings = e2.CommonInternalSettings = void 0, t2 = d(t2), o2 = d(o2), r2 = function(e3, t3) {
              if (!t3 && e3 && e3.__esModule)
                return e3;
              if (null === e3 || "object" !== a(e3) && "function" != typeof e3)
                return { default: e3 };
              var n2 = p(t3);
              if (n2 && n2.has(e3))
                return n2.get(e3);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e3)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e3, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e3, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e3[i3];
                }
              return o3.default = e3, n2 && n2.set(e3, o3), o3;
            }(r2), e2.ToolType = i2, function(e3) {
              e3[e3.Block = 0] = "Block", e3[e3.Inline = 1] = "Inline", e3[e3.Tune = 2] = "Tune";
            }(i2 || (e2.ToolType = i2 = {})), e2.UserSettings = s, function(e3) {
              e3.Shortcut = "shortcut", e3.Toolbox = "toolbox", e3.EnabledInlineTools = "inlineToolbar", e3.EnabledBlockTunes = "tunes", e3.Config = "config";
            }(s || (e2.UserSettings = s = {})), e2.CommonInternalSettings = l, function(e3) {
              e3.Shortcut = "shortcut", e3.SanitizeConfig = "sanitize";
            }(l || (e2.CommonInternalSettings = l = {})), e2.InternalBlockToolSettings = c, function(e3) {
              e3.IsEnabledLineBreaks = "enableLineBreaks", e3.Toolbox = "toolbox", e3.ConversionConfig = "conversionConfig", e3.IsReadOnlySupported = "isReadOnlySupported", e3.PasteConfig = "pasteConfig";
            }(c || (e2.InternalBlockToolSettings = c = {})), e2.InternalInlineToolSettings = u, function(e3) {
              e3.IsInline = "isInline", e3.Title = "title";
            }(u || (e2.InternalInlineToolSettings = u = {})), e2.InternalTuneSettings = f, function(e3) {
              e3.IsTune = "isTune";
            }(f || (e2.InternalTuneSettings = f = {}));
            var h = function() {
              function e3(n2) {
                var o3 = n2.name, r3 = n2.constructable, i3 = n2.config, a2 = n2.api, s2 = n2.isDefault, l2 = n2.isInternal, c2 = void 0 !== l2 && l2, u2 = n2.defaultPlaceholder;
                (0, t2.default)(this, e3), this.api = a2, this.name = o3, this.constructable = r3, this.config = i3, this.isDefault = s2, this.isInternal = c2, this.defaultPlaceholder = u2;
              }
              return (0, o2.default)(e3, [{ key: "settings", get: function() {
                var e4 = this.config[s.Config] || {};
                return this.isDefault && !("placeholder" in e4) && this.defaultPlaceholder && (e4.placeholder = this.defaultPlaceholder), e4;
              } }, { key: "reset", value: function() {
                if (r2.isFunction(this.constructable.reset))
                  return this.constructable.reset();
              } }, { key: "prepare", value: function() {
                if (r2.isFunction(this.constructable.prepare))
                  return this.constructable.prepare({ toolName: this.name, config: this.settings });
              } }, { key: "shortcut", get: function() {
                var e4 = this.constructable[l.Shortcut];
                return this.config[s.Shortcut] || e4;
              } }, { key: "sanitizeConfig", get: function() {
                return this.constructable[l.SanitizeConfig] || {};
              } }, { key: "isInline", value: function() {
                return this.type === i2.Inline;
              } }, { key: "isBlock", value: function() {
                return this.type === i2.Block;
              } }, { key: "isTune", value: function() {
                return this.type === i2.Tune;
              } }]), e3;
            }();
            e2.default = h, h.displayName = "BaseTool";
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o = n(16), r = n(10), i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
          (e.exports = function(e2, t2) {
            return i[e2] || (i[e2] = void 0 !== t2 ? t2 : {});
          })("versions", []).push({ version: o.version, mode: n(46) ? "pure" : "global", copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)" });
        }, function(e, t, n) {
          var o = n(28), r = n(15), i = n(48);
          e.exports = function(e2) {
            return function(t2, n2, a) {
              var s, l = o(t2), c = r(l.length), u = i(a, c);
              if (e2 && n2 != n2) {
                for (; c > u; )
                  if ((s = l[u++]) != s)
                    return true;
              } else
                for (; c > u; u++)
                  if ((e2 || u in l) && l[u] === n2)
                    return e2 || u || 0;
              return !e2 && -1;
            };
          };
        }, function(e, t) {
          t.f = Object.getOwnPropertySymbols;
        }, function(e, t, n) {
          var o = n(38);
          e.exports = Array.isArray || function(e2) {
            return "Array" == o(e2);
          };
        }, function(e, t, n) {
          var o = n(14)("iterator"), r = false;
          try {
            var i = [7][o]();
            i.return = function() {
              r = true;
            }, Array.from(i, function() {
              throw 2;
            });
          } catch (e2) {
          }
          e.exports = function(e2, t2) {
            if (!t2 && !r)
              return false;
            var n2 = false;
            try {
              var i2 = [7], a = i2[o]();
              a.next = function() {
                return { done: n2 = true };
              }, i2[o] = function() {
                return a;
              }, e2(i2);
            } catch (e3) {
            }
            return n2;
          };
        }, function(e, t, n) {
          "use strict";
          var o = n(12);
          e.exports = function() {
            var e2 = o(this), t2 = "";
            return e2.global && (t2 += "g"), e2.ignoreCase && (t2 += "i"), e2.multiline && (t2 += "m"), e2.unicode && (t2 += "u"), e2.sticky && (t2 += "y"), t2;
          };
        }, function(e, t, n) {
          "use strict";
          var o = n(64), r = RegExp.prototype.exec;
          e.exports = function(e2, t2) {
            var n2 = e2.exec;
            if ("function" == typeof n2) {
              var i = n2.call(e2, t2);
              if ("object" != typeof i)
                throw new TypeError("RegExp exec method returned something other than an Object or null");
              return i;
            }
            if ("RegExp" !== o(e2))
              throw new TypeError("RegExp#exec called on incompatible receiver");
            return r.call(e2, t2);
          };
        }, function(e, t, n) {
          "use strict";
          n(137);
          var o = n(23), r = n(27), i = n(11), a = n(39), s = n(14), l = n(107), c = s("species"), u = !i(function() {
            var e2 = /./;
            return e2.exec = function() {
              var e3 = [];
              return e3.groups = { a: "7" }, e3;
            }, "7" !== "".replace(e2, "$<a>");
          }), f = function() {
            var e2 = /(?:)/, t2 = e2.exec;
            e2.exec = function() {
              return t2.apply(this, arguments);
            };
            var n2 = "ab".split(e2);
            return 2 === n2.length && "a" === n2[0] && "b" === n2[1];
          }();
          e.exports = function(e2, t2, n2) {
            var d = s(e2), p = !i(function() {
              var t3 = {};
              return t3[d] = function() {
                return 7;
              }, 7 != ""[e2](t3);
            }), h = p ? !i(function() {
              var t3 = false, n3 = /a/;
              return n3.exec = function() {
                return t3 = true, null;
              }, "split" === e2 && (n3.constructor = {}, n3.constructor[c] = function() {
                return n3;
              }), n3[d](""), !t3;
            }) : void 0;
            if (!p || !h || "replace" === e2 && !u || "split" === e2 && !f) {
              var v = /./[d], g = n2(a, d, ""[e2], function(e3, t3, n3, o2, r2) {
                return t3.exec === l ? p && !r2 ? { done: true, value: v.call(t3, n3, o2) } : { done: true, value: e3.call(n3, t3, o2) } : { done: false };
              }), y = g[0], k = g[1];
              o(String.prototype, e2, y), r(RegExp.prototype, d, 2 == t2 ? function(e3, t3) {
                return k.call(e3, this, t3);
              } : function(e3) {
                return k.call(e3, this);
              });
            }
          };
        }, function(e, t, n) {
          var o = n(31), r = n(132), i = n(102), a = n(12), s = n(15), l = n(104), c = {}, u = {};
          (t = e.exports = function(e2, t2, n2, f, d) {
            var p, h, v, g, y = d ? function() {
              return e2;
            } : l(e2), k = o(n2, f, t2 ? 2 : 1), b = 0;
            if ("function" != typeof y)
              throw TypeError(e2 + " is not iterable!");
            if (i(y)) {
              for (p = s(e2.length); p > b; b++)
                if ((g = t2 ? k(a(h = e2[b])[0], h[1]) : k(e2[b])) === c || g === u)
                  return g;
            } else
              for (v = y.call(e2); !(h = v.next()).done; )
                if ((g = r(v, k, h.value, t2)) === c || g === u)
                  return g;
          }).BREAK = c, t.RETURN = u;
        }, function(e, t, n) {
          var o = n(10).navigator;
          e.exports = o && o.userAgent || "";
        }, function(e, t, n) {
          "use strict";
          var o = n(10), r = n(0), i = n(23), a = n(60), s = n(43), l = n(78), c = n(59), u = n(13), f = n(11), d = n(74), p = n(55), h = n(93);
          e.exports = function(e2, t2, n2, v, g, y) {
            var k = o[e2], b = k, m = g ? "set" : "add", w = b && b.prototype, x = {}, C = function(e3) {
              var t3 = w[e3];
              i(w, e3, "delete" == e3 || "has" == e3 ? function(e4) {
                return !(y && !u(e4)) && t3.call(this, 0 === e4 ? 0 : e4);
              } : "get" == e3 ? function(e4) {
                return y && !u(e4) ? void 0 : t3.call(this, 0 === e4 ? 0 : e4);
              } : "add" == e3 ? function(e4) {
                return t3.call(this, 0 === e4 ? 0 : e4), this;
              } : function(e4, n3) {
                return t3.call(this, 0 === e4 ? 0 : e4, n3), this;
              });
            };
            if ("function" == typeof b && (y || w.forEach && !f(function() {
              new b().entries().next();
            }))) {
              var S = new b(), T = S[m](y ? {} : -0, 1) != S, E = f(function() {
                S.has(1);
              }), B = d(function(e3) {
                new b(e3);
              }), M = !y && f(function() {
                for (var e3 = new b(), t3 = 5; t3--; )
                  e3[m](t3, t3);
                return !e3.has(-0);
              });
              B || ((b = t2(function(t3, n3) {
                c(t3, b, e2);
                var o2 = h(new k(), t3, b);
                return null != n3 && l(n3, g, o2[m], o2), o2;
              })).prototype = w, w.constructor = b), (E || M) && (C("delete"), C("has"), g && C("get")), (M || T) && C(m), y && w.clear && delete w.clear;
            } else
              b = v.getConstructor(t2, e2, g, m), a(b.prototype, n2), s.NEED = true;
            return p(b, e2), x[e2] = b, r(r.G + r.W + r.F * (b != k), x), y || v.setStrong(b, e2, g), b;
          };
        }, function(e, t, n) {
          for (var o, r = n(10), i = n(27), a = n(45), s = a("typed_array"), l = a("view"), c = !(!r.ArrayBuffer || !r.DataView), u = c, f = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9; )
            (o = r[d[f++]]) ? (i(o.prototype, s, true), i(o.prototype, l, true)) : u = false;
          e.exports = { ABV: c, CONSTR: u, TYPED: s, VIEW: l };
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(8)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2);
            var l = function() {
              function e2() {
                (0, r2.default)(this, e2), this.subscribers = {};
              }
              return (0, i2.default)(e2, [{ key: "on", value: function(e3, t2) {
                e3 in this.subscribers || (this.subscribers[e3] = []), this.subscribers[e3].push(t2);
              } }, { key: "once", value: function(e3, t2) {
                var n2 = this;
                e3 in this.subscribers || (this.subscribers[e3] = []), this.subscribers[e3].push(function o3(r3) {
                  var i3 = t2(r3), a2 = n2.subscribers[e3].indexOf(o3);
                  return -1 !== a2 && n2.subscribers[e3].splice(a2, 1), i3;
                });
              } }, { key: "emit", value: function(e3, t2) {
                !(0, a.isEmpty)(this.subscribers) && this.subscribers[e3] && this.subscribers[e3].reduce(function(e4, t3) {
                  return t3(e4) || e4;
                }, t2);
              } }, { key: "off", value: function(e3, t2) {
                for (var n2 = 0; n2 < this.subscribers[e3].length; n2++)
                  if (this.subscribers[e3][n2] === t2) {
                    delete this.subscribers[e3][n2];
                    break;
                  }
              } }, { key: "destroy", value: function() {
                this.subscribers = null;
              } }]), e2;
            }();
            o2.default = l, l.displayName = "EventsDispatcher", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c) {
            "use strict";
            var u = n(1);
            function f(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, l.default)(e2);
                if (t2) {
                  var r3 = (0, l.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, s.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), l = u(l);
            var d = function(e2) {
              (0, a.default)(n2, e2);
              var t2 = f(n2);
              function n2() {
                return (0, r2.default)(this, n2), t2.apply(this, arguments);
              }
              return (0, i2.default)(n2, [{ key: "methods", get: function() {
                return { blocks: this.Editor.BlocksAPI.methods, caret: this.Editor.CaretAPI.methods, events: this.Editor.EventsAPI.methods, listeners: this.Editor.ListenersAPI.methods, notifier: this.Editor.NotifierAPI.methods, sanitizer: this.Editor.SanitizerAPI.methods, saver: this.Editor.SaverAPI.methods, selection: this.Editor.SelectionAPI.methods, styles: this.Editor.StylesAPI.classes, toolbar: this.Editor.ToolbarAPI.methods, inlineToolbar: this.Editor.InlineToolbarAPI.methods, tooltip: this.Editor.TooltipAPI.methods, i18n: this.Editor.I18nAPI.methods, readOnly: this.Editor.ReadOnlyAPI.methods, ui: this.Editor.UiAPI.methods };
              } }, { key: "getMethodsForTool", value: function(e3) {
                return Object.assign(this.methods, { i18n: this.Editor.I18nAPI.getMethodsForTool(e3) });
              } }]), n2;
            }((c = u(c)).default);
            o2.default = d, d.displayName = "API", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(9), n(19), n(8), n(54), n(68), n(115), n(386), n(37)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f, d, p, h, v, g, y) {
            "use strict";
            var k = n(1);
            function b(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (b = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function m(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = b(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }
            function w(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, c.default)(e2);
                if (t2) {
                  var r3 = (0, c.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, l.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = k(r2), i2 = k(i2), s = k(s), l = k(l), c = k(c), u = k(u), f = k(f), d = m(d), p = k(p), v = k(v), g = m(g);
            var x = function(e2) {
              (0, s.default)(n2, e2);
              var t2 = w(n2);
              function n2(e3) {
                var o3, i3 = e3.config, a2 = e3.eventsDispatcher;
                return (0, r2.default)(this, n2), (o3 = t2.call(this, { config: i3, eventsDispatcher: a2 })).tooltip = new v.default(), o3;
              }
              return (0, i2.default)(n2, [{ key: "CSS", get: function() {
                return { toolbar: "ce-toolbar", content: "ce-toolbar__content", actions: "ce-toolbar__actions", actionsOpened: "ce-toolbar__actions--opened", toolbarOpened: "ce-toolbar--opened", openedToolboxHolderModifier: "codex-editor--toolbox-opened", plusButton: "ce-toolbar__plus", plusButtonShortcut: "ce-toolbar__plus-shortcut", settingsToggler: "ce-toolbar__settings-btn", settingsTogglerHidden: "ce-toolbar__settings-btn--hidden" };
              } }, { key: "opened", get: function() {
                return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
              } }, { key: "toolbox", get: function() {
                var e3 = this;
                return { opened: this.toolboxInstance.opened, close: function() {
                  e3.toolboxInstance.close();
                }, open: function() {
                  e3.Editor.BlockManager.currentBlock = e3.hoveredBlock, e3.toolboxInstance.open();
                }, toggle: function() {
                  return e3.toolboxInstance.toggle();
                }, hasFocus: function() {
                  return e3.toolboxInstance.hasFocus();
                } };
              } }, { key: "blockActions", get: function() {
                var e3 = this;
                return { hide: function() {
                  e3.nodes.actions.classList.remove(e3.CSS.actionsOpened);
                }, show: function() {
                  e3.nodes.actions.classList.add(e3.CSS.actionsOpened);
                } };
              } }, { key: "blockTunesToggler", get: function() {
                var e3 = this;
                return { hide: function() {
                  return e3.nodes.settingsToggler.classList.add(e3.CSS.settingsTogglerHidden);
                }, show: function() {
                  return e3.nodes.settingsToggler.classList.remove(e3.CSS.settingsTogglerHidden);
                } };
              } }, { key: "toggleReadOnly", value: function(e3) {
                e3 ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : (this.drawUI(), this.enableModuleBindings());
              } }, { key: "moveAndOpen", value: function() {
                var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Editor.BlockManager.currentBlock;
                if (this.toolboxInstance.close(), this.Editor.BlockSettings.close(), e3) {
                  this.hoveredBlock = e3;
                  var t3, n3 = e3.holder, o3 = this.Editor.UI.isMobile, r3 = e3.pluginsContent, i3 = window.getComputedStyle(r3), a2 = parseInt(i3.paddingTop, 10), s2 = n3.offsetHeight;
                  t3 = o3 ? n3.offsetTop + s2 : n3.offsetTop + a2, this.nodes.wrapper.style.top = "".concat(Math.floor(t3), "px"), 1 === this.Editor.BlockManager.blocks.length && e3.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open();
                }
              } }, { key: "close", value: function() {
                this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), this.toolboxInstance.close(), this.Editor.BlockSettings.close());
              } }, { key: "open", value: function() {
                var e3 = this, t3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                d.delay(function() {
                  e3.nodes.wrapper.classList.add(e3.CSS.toolbarOpened), t3 ? e3.blockActions.show() : e3.blockActions.hide();
                }, 50)();
              } }, { key: "make", value: function() {
                var e3 = this;
                this.nodes.wrapper = f.default.make("div", this.CSS.toolbar), ["content", "actions"].forEach(function(t4) {
                  e3.nodes[t4] = f.default.make("div", e3.CSS[t4]);
                }), f.default.append(this.nodes.wrapper, this.nodes.content), f.default.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = f.default.make("div", this.CSS.plusButton, { innerHTML: y.IconPlus }), f.default.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", function() {
                  e3.tooltip.hide(true), e3.plusButtonClicked();
                }, false);
                var t3 = f.default.make("div");
                t3.appendChild(document.createTextNode(p.default.ui(h.I18nInternalNS.ui.toolbar.toolbox, "Add"))), t3.appendChild(f.default.make("div", this.CSS.plusButtonShortcut, { textContent: "\u21E5 Tab" })), this.tooltip.onHover(this.nodes.plusButton, t3, { hidingDelay: 400 }), this.nodes.settingsToggler = f.default.make("span", this.CSS.settingsToggler, { innerHTML: y.IconMenu }), f.default.append(this.nodes.actions, this.nodes.settingsToggler), this.tooltip.onHover(this.nodes.settingsToggler, p.default.ui(h.I18nInternalNS.ui.blockTunes.toggler, "Click to tune"), { hidingDelay: 400 }), f.default.append(this.nodes.actions, this.makeToolbox()), f.default.append(this.nodes.actions, this.Editor.BlockSettings.getElement()), f.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
              } }, { key: "makeToolbox", value: function() {
                var e3 = this;
                return this.toolboxInstance = new g.default({ api: this.Editor.API.methods, tools: this.Editor.Tools.blockTools, i18nLabels: { filter: p.default.ui(h.I18nInternalNS.ui.popover, "Filter"), nothingFound: p.default.ui(h.I18nInternalNS.ui.popover, "Nothing found") } }), this.toolboxInstance.on(g.ToolboxEvent.Opened, function() {
                  e3.Editor.UI.nodes.wrapper.classList.add(e3.CSS.openedToolboxHolderModifier);
                }), this.toolboxInstance.on(g.ToolboxEvent.Closed, function() {
                  e3.Editor.UI.nodes.wrapper.classList.remove(e3.CSS.openedToolboxHolderModifier);
                }), this.toolboxInstance.on(g.ToolboxEvent.BlockAdded, function(t3) {
                  var n3 = t3.block, o3 = e3.Editor, r3 = o3.BlockManager, i3 = o3.Caret, a2 = r3.getBlockById(n3.id);
                  0 === a2.inputs.length && (a2 === r3.lastBlock ? (r3.insertAtEnd(), i3.setToBlock(r3.lastBlock)) : i3.setToBlock(r3.nextBlock));
                }), this.toolboxInstance.make();
              } }, { key: "plusButtonClicked", value: function() {
                this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.toggle();
              } }, { key: "enableModuleBindings", value: function() {
                var e3 = this;
                this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "mousedown", function(t3) {
                  t3.stopPropagation(), e3.settingsTogglerClicked(), e3.toolboxInstance.close(), e3.tooltip.hide(true);
                }, true), d.isMobileScreen() || this.eventsDispatcher.on(this.Editor.UI.events.blockHovered, function(t3) {
                  e3.Editor.BlockSettings.opened || e3.toolboxInstance.opened || e3.moveAndOpen(t3.block);
                });
              } }, { key: "disableModuleBindings", value: function() {
                this.readOnlyMutableListeners.clearAll();
              } }, { key: "settingsTogglerClicked", value: function() {
                this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(this.hoveredBlock);
              } }, { key: "drawUI", value: function() {
                this.Editor.BlockSettings.make(), this.make();
              } }, { key: "destroy", value: function() {
                this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy(), this.tooltip.destroy();
              } }]), n2;
            }(u.default);
            o2.default = x, x.displayName = "Toolbar", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(41), n(2), n(3), n(5), n(6), n(4), n(7), n(19), n(112), n(67), n(387), n(82), n(8), n(388), n(37)], void 0 === (i = "function" == typeof (o = function(e2, t2, o2, r2, i2, a, s, l, c, u, f, d, p, h, v, g) {
            "use strict";
            var y = n(1);
            function k(e3) {
              var t3 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e4) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, s.default)(e3);
                if (t3) {
                  var r3 = (0, s.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, a.default)(this, n2);
              };
            }
            Object.defineProperty(e2, "__esModule", { value: true }), e2.default = e2.PopoverEvent = void 0, t2 = y(t2), o2 = y(o2), r2 = y(r2), i2 = y(i2), a = y(a), s = y(s), l = y(l), c = y(c), u = y(u), f = y(f), d = y(d), p = y(p), v = y(v);
            var b, m = function(e3, t3, n2, o3) {
              var r3, i3 = arguments.length, a2 = i3 < 3 ? t3 : null === o3 ? o3 = Object.getOwnPropertyDescriptor(t3, n2) : o3;
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, l.default)(Reflect)) && "function" == typeof Reflect.decorate)
                a2 = Reflect.decorate(e3, t3, n2, o3);
              else
                for (var s2 = e3.length - 1; s2 >= 0; s2--)
                  (r3 = e3[s2]) && (a2 = (i3 < 3 ? r3(a2) : i3 > 3 ? r3(t3, n2, a2) : r3(t3, n2)) || a2);
              return i3 > 3 && a2 && Object.defineProperty(t3, n2, a2), a2;
            };
            e2.PopoverEvent = b, function(e3) {
              e3.OverlayClicked = "overlay-clicked", e3.Close = "close";
            }(b || (e2.PopoverEvent = b = {}));
            var w = function(e3) {
              (0, i2.default)(a2, e3);
              var n2 = k(a2);
              function a2(e4) {
                var t3, r3 = e4.items, i3 = e4.className, s2 = e4.searchable, l2 = e4.filterLabel, c2 = e4.nothingFoundLabel, f2 = e4.customContent, d2 = e4.customContentFlippableItems, p2 = e4.scopeElement;
                return (0, o2.default)(this, a2), (t3 = n2.call(this)).customContentFlippableItems = [], t3.isShown = false, t3.nodes = { wrapper: null, popover: null, items: null, nothingFound: null, overlay: null }, t3.scrollLocker = new v.default(), t3.itemsRequiringConfirmation = {}, t3.removeSpecialHoverBehavior = function() {
                  var e5 = t3.nodes.items.querySelector(".".concat(a2.CSS.itemNoHover));
                  e5 && e5.classList.remove(a2.CSS.itemNoHover);
                }, t3.onFlip = function() {
                  t3.disableSpecialHoverAndFocusBehavior();
                }, t3.items = r3, t3.customContent = f2, t3.customContentFlippableItems = d2, t3.className = i3 || "", t3.searchable = s2, t3.listeners = new u.default(), t3.scopeElement = p2, t3.filterLabel = l2, t3.nothingFoundLabel = c2, t3.render(), t3.enableFlipper(), t3;
              }
              return (0, r2.default)(a2, [{ key: "getElement", value: function() {
                return this.nodes.wrapper;
              } }, { key: "show", value: function() {
                var e4 = this;
                this.shouldOpenPopoverBottom || (this.nodes.wrapper.style.setProperty("--popover-height", this.calculateHeight() + "px"), this.nodes.wrapper.classList.add(this.className + "--opened-top")), this.search && this.search.clear(), this.nodes.items.scrollTop = 0, this.nodes.popover.classList.add(a2.CSS.popoverOpened), this.nodes.overlay.classList.remove(a2.CSS.popoverOverlayHidden), this.flipper.activate(this.flippableElements), this.searchable && setTimeout(function() {
                  e4.search.focus();
                }, 100), (0, h.isMobileScreen)() && this.scrollLocker.lock(), this.isShown = true;
              } }, { key: "hide", value: function() {
                var e4 = this;
                this.isShown && (this.nodes.popover.classList.remove(a2.CSS.popoverOpened), this.nodes.overlay.classList.add(a2.CSS.popoverOverlayHidden), this.flipper.deactivate(), (0, h.isMobileScreen)() && this.scrollLocker.unlock(), this.isShown = false, this.nodes.wrapper.classList.remove(this.className + "--opened-top"), Array.from(this.nodes.items.querySelectorAll(".".concat(a2.CSS.itemConfirmation))).forEach(function(t3) {
                  return e4.cleanUpConfirmationStateForItem(t3);
                }), this.disableSpecialHoverAndFocusBehavior(), this.emit(b.Close));
              } }, { key: "destroy", value: function() {
                this.flipper.deactivate(), this.listeners.removeAll(), this.disableSpecialHoverAndFocusBehavior(), (0, h.isMobileScreen)() && this.scrollLocker.unlock();
              } }, { key: "hasFocus", value: function() {
                return this.flipper.hasFocus();
              } }, { key: "calculateHeight", value: function() {
                var e4, t3 = this.nodes.popover.cloneNode(true);
                return t3.style.visibility = "hidden", t3.style.position = "absolute", t3.style.top = "-1000px", t3.classList.add(a2.CSS.popoverOpened), document.body.appendChild(t3), e4 = t3.offsetHeight, t3.remove(), e4;
              } }, { key: "render", value: function() {
                var e4 = this;
                this.nodes.wrapper = c.default.make("div", this.className), this.nodes.popover = c.default.make("div", a2.CSS.popover), this.nodes.wrapper.appendChild(this.nodes.popover), this.nodes.overlay = c.default.make("div", [a2.CSS.popoverOverlay, a2.CSS.popoverOverlayHidden]), this.nodes.wrapper.appendChild(this.nodes.overlay), this.searchable && this.addSearch(this.nodes.popover), this.customContent && (this.customContent.classList.add(a2.CSS.customContent), this.nodes.popover.appendChild(this.customContent)), this.nodes.items = c.default.make("div", a2.CSS.itemsWrapper), this.items.forEach(function(t3) {
                  e4.nodes.items.appendChild(e4.createItem(t3));
                }), this.nodes.popover.appendChild(this.nodes.items), this.nodes.nothingFound = c.default.make("div", [a2.CSS.noFoundMessage], { textContent: this.nothingFoundLabel }), this.nodes.popover.appendChild(this.nodes.nothingFound), this.listeners.on(this.nodes.popover, "click", function(t3) {
                  var n3 = t3.target.closest(".".concat(a2.CSS.item));
                  n3 && e4.itemClicked(n3, t3);
                }), this.listeners.on(this.nodes.overlay, "click", function() {
                  e4.emit(b.OverlayClicked);
                });
              } }, { key: "addSearch", value: function(e4) {
                var t3 = this;
                this.search = new d.default({ items: this.items, placeholder: this.filterLabel, onSearch: function(e5) {
                  var n4 = [];
                  t3.items.forEach(function(o4, r4) {
                    var i3 = t3.nodes.items.children[r4];
                    e5.includes(o4) ? (n4.push(i3), i3.classList.remove(a2.CSS.itemHidden)) : i3.classList.add(a2.CSS.itemHidden);
                  }), t3.nodes.nothingFound.classList.toggle(a2.CSS.noFoundMessageShown, 0 === n4.length);
                  var o3 = e5.length === t3.items.length, r3 = o3 ? t3.flippableElements : n4;
                  t3.customContent && t3.customContent.classList.toggle(a2.CSS.customContentHidden, !o3), t3.flipper.isActivated && (t3.reactivateFlipper(r3), t3.flipper.focusFirst());
                } });
                var n3 = this.search.getElement();
                e4.appendChild(n3);
              } }, { key: "createItem", value: function(e4) {
                var t3 = c.default.make("div", a2.CSS.item);
                e4.name && (t3.dataset.itemName = e4.name);
                var n3 = c.default.make("div", a2.CSS.itemLabel, { innerHTML: e4.title || "" });
                return t3.appendChild(c.default.make("div", a2.CSS.itemIcon, { innerHTML: e4.icon || g.IconDotCircle })), t3.appendChild(n3), e4.secondaryLabel && t3.appendChild(c.default.make("div", a2.CSS.itemSecondaryLabel, { textContent: e4.secondaryLabel })), e4.isActive && t3.classList.add(a2.CSS.itemActive), e4.isDisabled && t3.classList.add(a2.CSS.itemDisabled), t3;
              } }, { key: "itemClicked", value: function(e4, t3) {
                var n3 = this, o3 = Array.from(this.nodes.items.children), r3 = o3.indexOf(e4), i3 = this.items[r3];
                i3.isDisabled || (o3.filter(function(t4) {
                  return t4 !== e4;
                }).forEach(function(e5) {
                  n3.cleanUpConfirmationStateForItem(e5);
                }), i3.confirmation ? this.enableConfirmationStateForItem(i3, e4, r3) : (i3.onActivate(i3, t3), this.toggleIfNeeded(r3, o3), i3.closeOnActivate && this.hide()));
              } }, { key: "toggleIfNeeded", value: function(e4, t3) {
                var n3 = this, o3 = this.items[e4];
                if (true === o3.toggle)
                  return o3.isActive = !o3.isActive, void t3[e4].classList.toggle(a2.CSS.itemActive);
                if ("string" == typeof o3.toggle) {
                  var r3 = this.items.filter(function(e5) {
                    return e5.toggle === o3.toggle;
                  });
                  if (1 === r3.length)
                    return o3.isActive = !o3.isActive, void t3[e4].classList.toggle(a2.CSS.itemActive);
                  r3.forEach(function(e5) {
                    var r4 = n3.items.indexOf(e5), i3 = e5 === o3;
                    e5.isActive = i3, t3[r4].classList.toggle(a2.CSS.itemActive, i3);
                  });
                }
              } }, { key: "enableConfirmationStateForItem", value: function(e4, n3, o3) {
                var r3;
                void 0 === this.itemsRequiringConfirmation[o3] && (this.itemsRequiringConfirmation[o3] = e4);
                var i3 = Object.assign(Object.assign(Object.assign({}, e4), e4.confirmation), { confirmation: e4.confirmation.confirmation });
                this.items[o3] = i3;
                var s2 = this.createItem(i3);
                (r3 = s2.classList).add.apply(r3, [a2.CSS.itemConfirmation].concat((0, t2.default)(Array.from(n3.classList)))), n3.parentElement.replaceChild(s2, n3), this.enableSpecialHoverAndFocusBehavior(s2), this.reactivateFlipper(this.flippableElements, this.flippableElements.indexOf(s2));
              } }, { key: "cleanUpConfirmationStateForItem", value: function(e4) {
                var t3 = Array.from(this.nodes.items.children).indexOf(e4), n3 = this.itemsRequiringConfirmation[t3];
                if (void 0 !== n3) {
                  var o3 = this.createItem(n3);
                  e4.parentElement.replaceChild(o3, e4), this.items[t3] = n3, delete this.itemsRequiringConfirmation[t3], e4.removeEventListener("mouseleave", this.removeSpecialHoverBehavior), this.disableSpecialHoverAndFocusBehavior(), this.reactivateFlipper(this.flippableElements, this.flippableElements.indexOf(o3));
                }
              } }, { key: "enableSpecialHoverAndFocusBehavior", value: function(e4) {
                e4.classList.add(a2.CSS.itemNoHover), e4.classList.add(a2.CSS.itemNoFocus), e4.addEventListener("mouseleave", this.removeSpecialHoverBehavior, { once: true }), this.flipper.onFlip(this.onFlip);
              } }, { key: "disableSpecialHoverAndFocusBehavior", value: function() {
                this.removeSpecialFocusBehavior(), this.removeSpecialHoverBehavior(), this.flipper.removeOnFlip(this.onFlip);
              } }, { key: "removeSpecialFocusBehavior", value: function() {
                var e4 = this.nodes.items.querySelector(".".concat(a2.CSS.itemNoFocus));
                e4 && e4.classList.remove(a2.CSS.itemNoFocus);
              } }, { key: "reactivateFlipper", value: function(e4, t3) {
                this.flipper.deactivate(), this.flipper.activate(e4, t3);
              } }, { key: "enableFlipper", value: function() {
                this.flipper = new f.default({ items: this.flippableElements, focusedItemClass: a2.CSS.itemFocused, allowedKeys: [h.keyCodes.TAB, h.keyCodes.UP, h.keyCodes.DOWN, h.keyCodes.ENTER] });
              } }, { key: "flippableElements", get: function() {
                var e4 = Array.from(this.nodes.wrapper.querySelectorAll(".".concat(a2.CSS.item)));
                return (this.customContentFlippableItems || []).concat(e4);
              } }, { key: "shouldOpenPopoverBottom", get: function() {
                var e4 = this.nodes.wrapper.getBoundingClientRect(), t3 = this.scopeElement.getBoundingClientRect(), n3 = this.calculateHeight(), o3 = e4.top + n3, r3 = e4.top - n3, i3 = Math.min(window.innerHeight, t3.bottom);
                return r3 < t3.top || o3 <= i3;
              } }], [{ key: "CSS", get: function() {
                return { popover: "ce-popover", popoverOpened: "ce-popover--opened", itemsWrapper: "ce-popover__items", item: "ce-popover__item", itemHidden: "ce-popover__item--hidden", itemFocused: "ce-popover__item--focused", itemActive: "ce-popover__item--active", itemDisabled: "ce-popover__item--disabled", itemConfirmation: "ce-popover__item--confirmation", itemNoHover: "ce-popover__item--no-visible-hover", itemNoFocus: "ce-popover__item--no-visible-focus", itemLabel: "ce-popover__item-label", itemIcon: "ce-popover__item-icon", itemSecondaryLabel: "ce-popover__item-secondary-label", noFoundMessage: "ce-popover__no-found", noFoundMessageShown: "ce-popover__no-found--shown", popoverOverlay: "ce-popover__overlay", popoverOverlayHidden: "ce-popover__overlay--hidden", customContent: "ce-popover__custom-content", customContentHidden: "ce-popover__custom-content--hidden" };
              } }]), a2;
            }(p.default);
            e2.default = w, w.displayName = "Popover", m([h.cacheable], w.prototype, "calculateHeight", null);
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o = n(13), r = n(10).document, i = o(r) && o(r.createElement);
          e.exports = function(e2) {
            return i ? r.createElement(e2) : {};
          };
        }, function(e, t, n) {
          t.f = n(14);
        }, function(e, t, n) {
          var o = n(70)("keys"), r = n(45);
          e.exports = function(e2) {
            return o[e2] || (o[e2] = r(e2));
          };
        }, function(e, t) {
          e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        }, function(e, t, n) {
          var o = n(10).document;
          e.exports = o && o.documentElement;
        }, function(e, t, n) {
          var o = n(13), r = n(12), i = function(e2, t2) {
            if (r(e2), !o(t2) && null !== t2)
              throw TypeError(t2 + ": can't set as prototype!");
          };
          e.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(e2, t2, o2) {
            try {
              (o2 = n(31)(Function.call, n(34).f(Object.prototype, "__proto__").set, 2))(e2, []), t2 = !(e2 instanceof Array);
            } catch (e3) {
              t2 = true;
            }
            return function(e3, n2) {
              return i(e3, n2), t2 ? e3.__proto__ = n2 : o2(e3, n2), e3;
            };
          }({}, false) : void 0), check: i };
        }, function(e, t) {
          e.exports = "	\n\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
        }, function(e, t, n) {
          var o = n(13), r = n(91).set;
          e.exports = function(e2, t2, n2) {
            var i, a = t2.constructor;
            return a !== n2 && "function" == typeof a && (i = a.prototype) !== n2.prototype && o(i) && r && r(e2, i), e2;
          };
        }, function(e, t, n) {
          "use strict";
          var o = n(33), r = n(39);
          e.exports = function(e2) {
            var t2 = String(r(this)), n2 = "", i = o(e2);
            if (i < 0 || i == 1 / 0)
              throw RangeError("Count can't be negative");
            for (; i > 0; (i >>>= 1) && (t2 += t2))
              1 & i && (n2 += t2);
            return n2;
          };
        }, function(e, t) {
          e.exports = Math.sign || function(e2) {
            return 0 == (e2 = +e2) || e2 != e2 ? e2 : e2 < 0 ? -1 : 1;
          };
        }, function(e, t) {
          var n = Math.expm1;
          e.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function(e2) {
            return 0 == (e2 = +e2) ? e2 : e2 > -1e-6 && e2 < 1e-6 ? e2 + e2 * e2 / 2 : Math.exp(e2) - 1;
          } : n;
        }, function(e, t, n) {
          var o = n(33), r = n(39);
          e.exports = function(e2) {
            return function(t2, n2) {
              var i, a, s = String(r(t2)), l = o(n2), c = s.length;
              return l < 0 || l >= c ? e2 ? "" : void 0 : (i = s.charCodeAt(l)) < 55296 || i > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e2 ? s.charAt(l) : i : e2 ? s.slice(l, l + 2) : a - 56320 + (i - 55296 << 10) + 65536;
            };
          };
        }, function(e, t, n) {
          "use strict";
          var o = n(46), r = n(0), i = n(23), a = n(27), s = n(57), l = n(131), c = n(55), u = n(51), f = n(14)("iterator"), d = !([].keys && "next" in [].keys()), p = function() {
            return this;
          };
          e.exports = function(e2, t2, n2, h, v, g, y) {
            l(n2, t2, h);
            var k, b, m, w = function(e3) {
              if (!d && e3 in T)
                return T[e3];
              switch (e3) {
                case "keys":
                case "values":
                  return function() {
                    return new n2(this, e3);
                  };
              }
              return function() {
                return new n2(this, e3);
              };
            }, x = t2 + " Iterator", C = "values" == v, S = false, T = e2.prototype, E = T[f] || T["@@iterator"] || v && T[v], B = E || w(v), M = v ? C ? w("entries") : B : void 0, _ = "Array" == t2 && T.entries || E;
            if (_ && (m = u(_.call(new e2()))) !== Object.prototype && m.next && (c(m, x, true), o || "function" == typeof m[f] || a(m, f, p)), C && E && "values" !== E.name && (S = true, B = function() {
              return E.call(this);
            }), o && !y || !d && !S && T[f] || a(T, f, B), s[t2] = B, s[x] = p, v)
              if (k = { values: C ? B : w("values"), keys: g ? B : w("keys"), entries: M }, y)
                for (b in k)
                  b in T || i(T, b, k[b]);
              else
                r(r.P + r.F * (d || S), t2, k);
            return k;
          };
        }, function(e, t, n) {
          var o = n(100), r = n(39);
          e.exports = function(e2, t2, n2) {
            if (o(t2))
              throw TypeError("String#" + n2 + " doesn't accept regex!");
            return String(r(e2));
          };
        }, function(e, t, n) {
          var o = n(13), r = n(38), i = n(14)("match");
          e.exports = function(e2) {
            var t2;
            return o(e2) && (void 0 !== (t2 = e2[i]) ? !!t2 : "RegExp" == r(e2));
          };
        }, function(e, t, n) {
          var o = n(14)("match");
          e.exports = function(e2) {
            var t2 = /./;
            try {
              "/./"[e2](t2);
            } catch (n2) {
              try {
                return t2[o] = false, !"/./"[e2](t2);
              } catch (e3) {
              }
            }
            return true;
          };
        }, function(e, t, n) {
          var o = n(57), r = n(14)("iterator"), i = Array.prototype;
          e.exports = function(e2) {
            return void 0 !== e2 && (o.Array === e2 || i[r] === e2);
          };
        }, function(e, t, n) {
          "use strict";
          var o = n(18), r = n(44);
          e.exports = function(e2, t2, n2) {
            t2 in e2 ? o.f(e2, t2, r(0, n2)) : e2[t2] = n2;
          };
        }, function(e, t, n) {
          var o = n(64), r = n(14)("iterator"), i = n(57);
          e.exports = n(16).getIteratorMethod = function(e2) {
            if (null != e2)
              return e2[r] || e2["@@iterator"] || i[o(e2)];
          };
        }, function(e, t, n) {
          "use strict";
          var o = n(22), r = n(48), i = n(15);
          e.exports = function(e2) {
            for (var t2 = o(this), n2 = i(t2.length), a = arguments.length, s = r(a > 1 ? arguments[1] : void 0, n2), l = a > 2 ? arguments[2] : void 0, c = void 0 === l ? n2 : r(l, n2); c > s; )
              t2[s++] = e2;
            return t2;
          };
        }, function(e, t, n) {
          "use strict";
          var o = n(52), r = n(136), i = n(57), a = n(28);
          e.exports = n(98)(Array, "Array", function(e2, t2) {
            this._t = a(e2), this._i = 0, this._k = t2;
          }, function() {
            var e2 = this._t, t2 = this._k, n2 = this._i++;
            return !e2 || n2 >= e2.length ? (this._t = void 0, r(1)) : r(0, "keys" == t2 ? n2 : "values" == t2 ? e2[n2] : [n2, e2[n2]]);
          }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries");
        }, function(e, t, n) {
          "use strict";
          var o, r, i = n(75), a = RegExp.prototype.exec, s = String.prototype.replace, l = a, c = (o = /a/, r = /b*/g, a.call(o, "a"), a.call(r, "a"), 0 !== o.lastIndex || 0 !== r.lastIndex), u = void 0 !== /()??/.exec("")[1];
          (c || u) && (l = function(e2) {
            var t2, n2, o2, r2, l2 = this;
            return u && (n2 = new RegExp("^" + l2.source + "$(?!\\s)", i.call(l2))), c && (t2 = l2.lastIndex), o2 = a.call(l2, e2), c && o2 && (l2.lastIndex = l2.global ? o2.index + o2[0].length : t2), u && o2 && o2.length > 1 && s.call(o2[0], n2, function() {
              for (r2 = 1; r2 < arguments.length - 2; r2++)
                void 0 === arguments[r2] && (o2[r2] = void 0);
            }), o2;
          }), e.exports = l;
        }, function(e, t, n) {
          "use strict";
          var o = n(97)(true);
          e.exports = function(e2, t2, n2) {
            return t2 + (n2 ? o(e2, t2).length : 1);
          };
        }, function(e, t, n) {
          var o, r, i, a = n(31), s = n(125), l = n(90), c = n(86), u = n(10), f = u.process, d = u.setImmediate, p = u.clearImmediate, h = u.MessageChannel, v = u.Dispatch, g = 0, y = {}, k = function() {
            var e2 = +this;
            if (y.hasOwnProperty(e2)) {
              var t2 = y[e2];
              delete y[e2], t2();
            }
          }, b = function(e2) {
            k.call(e2.data);
          };
          d && p || (d = function(e2) {
            for (var t2 = [], n2 = 1; arguments.length > n2; )
              t2.push(arguments[n2++]);
            return y[++g] = function() {
              s("function" == typeof e2 ? e2 : Function(e2), t2);
            }, o(g), g;
          }, p = function(e2) {
            delete y[e2];
          }, "process" == n(38)(f) ? o = function(e2) {
            f.nextTick(a(k, e2, 1));
          } : v && v.now ? o = function(e2) {
            v.now(a(k, e2, 1));
          } : h ? (i = (r = new h()).port2, r.port1.onmessage = b, o = a(i.postMessage, i, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (o = function(e2) {
            u.postMessage(e2 + "", "*");
          }, u.addEventListener("message", b, false)) : o = "onreadystatechange" in c("script") ? function(e2) {
            l.appendChild(c("script")).onreadystatechange = function() {
              l.removeChild(this), k.call(e2);
            };
          } : function(e2) {
            setTimeout(a(k, e2, 1), 0);
          }), e.exports = { set: d, clear: p };
        }, function(e, t, n) {
          "use strict";
          var o = n(10), r = n(17), i = n(46), a = n(81), s = n(27), l = n(60), c = n(11), u = n(59), f = n(33), d = n(15), p = n(144), h = n(50).f, v = n(18).f, g = n(105), y = n(55), k = o.ArrayBuffer, b = o.DataView, m = o.Math, w = o.RangeError, x = o.Infinity, C = k, S = m.abs, T = m.pow, E = m.floor, B = m.log, M = m.LN2, _ = r ? "_b" : "buffer", O = r ? "_l" : "byteLength", I = r ? "_o" : "byteOffset";
          function L(e2, t2, n2) {
            var o2, r2, i2, a2 = new Array(n2), s2 = 8 * n2 - t2 - 1, l2 = (1 << s2) - 1, c2 = l2 >> 1, u2 = 23 === t2 ? T(2, -24) - T(2, -77) : 0, f2 = 0, d2 = e2 < 0 || 0 === e2 && 1 / e2 < 0 ? 1 : 0;
            for ((e2 = S(e2)) != e2 || e2 === x ? (r2 = e2 != e2 ? 1 : 0, o2 = l2) : (o2 = E(B(e2) / M), e2 * (i2 = T(2, -o2)) < 1 && (o2--, i2 *= 2), (e2 += o2 + c2 >= 1 ? u2 / i2 : u2 * T(2, 1 - c2)) * i2 >= 2 && (o2++, i2 /= 2), o2 + c2 >= l2 ? (r2 = 0, o2 = l2) : o2 + c2 >= 1 ? (r2 = (e2 * i2 - 1) * T(2, t2), o2 += c2) : (r2 = e2 * T(2, c2 - 1) * T(2, t2), o2 = 0)); t2 >= 8; a2[f2++] = 255 & r2, r2 /= 256, t2 -= 8)
              ;
            for (o2 = o2 << t2 | r2, s2 += t2; s2 > 0; a2[f2++] = 255 & o2, o2 /= 256, s2 -= 8)
              ;
            return a2[--f2] |= 128 * d2, a2;
          }
          function P(e2, t2, n2) {
            var o2, r2 = 8 * n2 - t2 - 1, i2 = (1 << r2) - 1, a2 = i2 >> 1, s2 = r2 - 7, l2 = n2 - 1, c2 = e2[l2--], u2 = 127 & c2;
            for (c2 >>= 7; s2 > 0; u2 = 256 * u2 + e2[l2], l2--, s2 -= 8)
              ;
            for (o2 = u2 & (1 << -s2) - 1, u2 >>= -s2, s2 += t2; s2 > 0; o2 = 256 * o2 + e2[l2], l2--, s2 -= 8)
              ;
            if (0 === u2)
              u2 = 1 - a2;
            else {
              if (u2 === i2)
                return o2 ? NaN : c2 ? -x : x;
              o2 += T(2, t2), u2 -= a2;
            }
            return (c2 ? -1 : 1) * o2 * T(2, u2 - t2);
          }
          function j(e2) {
            return e2[3] << 24 | e2[2] << 16 | e2[1] << 8 | e2[0];
          }
          function R(e2) {
            return [255 & e2];
          }
          function A(e2) {
            return [255 & e2, e2 >> 8 & 255];
          }
          function N(e2) {
            return [255 & e2, e2 >> 8 & 255, e2 >> 16 & 255, e2 >> 24 & 255];
          }
          function D(e2) {
            return L(e2, 52, 8);
          }
          function F(e2) {
            return L(e2, 23, 4);
          }
          function H(e2, t2, n2) {
            v(e2.prototype, t2, { get: function() {
              return this[n2];
            } });
          }
          function W(e2, t2, n2, o2) {
            var r2 = p(+n2);
            if (r2 + t2 > e2[O])
              throw w("Wrong index!");
            var i2 = e2[_]._b, a2 = r2 + e2[I], s2 = i2.slice(a2, a2 + t2);
            return o2 ? s2 : s2.reverse();
          }
          function U(e2, t2, n2, o2, r2, i2) {
            var a2 = p(+n2);
            if (a2 + t2 > e2[O])
              throw w("Wrong index!");
            for (var s2 = e2[_]._b, l2 = a2 + e2[I], c2 = o2(+r2), u2 = 0; u2 < t2; u2++)
              s2[l2 + u2] = c2[i2 ? u2 : t2 - u2 - 1];
          }
          if (a.ABV) {
            if (!c(function() {
              k(1);
            }) || !c(function() {
              new k(-1);
            }) || c(function() {
              return new k(), new k(1.5), new k(NaN), "ArrayBuffer" != k.name;
            })) {
              for (var z, V = (k = function(e2) {
                return u(this, k), new C(p(e2));
              }).prototype = C.prototype, Y = h(C), X = 0; Y.length > X; )
                (z = Y[X++]) in k || s(k, z, C[z]);
              i || (V.constructor = k);
            }
            var G = new b(new k(2)), K = b.prototype.setInt8;
            G.setInt8(0, 2147483648), G.setInt8(1, 2147483649), !G.getInt8(0) && G.getInt8(1) || l(b.prototype, { setInt8: function(e2, t2) {
              K.call(this, e2, t2 << 24 >> 24);
            }, setUint8: function(e2, t2) {
              K.call(this, e2, t2 << 24 >> 24);
            } }, true);
          } else
            k = function(e2) {
              u(this, k, "ArrayBuffer");
              var t2 = p(e2);
              this._b = g.call(new Array(t2), 0), this[O] = t2;
            }, b = function(e2, t2, n2) {
              u(this, b, "DataView"), u(e2, k, "DataView");
              var o2 = e2[O], r2 = f(t2);
              if (r2 < 0 || r2 > o2)
                throw w("Wrong offset!");
              if (r2 + (n2 = void 0 === n2 ? o2 - r2 : d(n2)) > o2)
                throw w("Wrong length!");
              this[_] = e2, this[I] = r2, this[O] = n2;
            }, r && (H(k, "byteLength", "_l"), H(b, "buffer", "_b"), H(b, "byteLength", "_l"), H(b, "byteOffset", "_o")), l(b.prototype, { getInt8: function(e2) {
              return W(this, 1, e2)[0] << 24 >> 24;
            }, getUint8: function(e2) {
              return W(this, 1, e2)[0];
            }, getInt16: function(e2) {
              var t2 = W(this, 2, e2, arguments[1]);
              return (t2[1] << 8 | t2[0]) << 16 >> 16;
            }, getUint16: function(e2) {
              var t2 = W(this, 2, e2, arguments[1]);
              return t2[1] << 8 | t2[0];
            }, getInt32: function(e2) {
              return j(W(this, 4, e2, arguments[1]));
            }, getUint32: function(e2) {
              return j(W(this, 4, e2, arguments[1])) >>> 0;
            }, getFloat32: function(e2) {
              return P(W(this, 4, e2, arguments[1]), 23, 4);
            }, getFloat64: function(e2) {
              return P(W(this, 8, e2, arguments[1]), 52, 8);
            }, setInt8: function(e2, t2) {
              U(this, 1, e2, R, t2);
            }, setUint8: function(e2, t2) {
              U(this, 1, e2, R, t2);
            }, setInt16: function(e2, t2) {
              U(this, 2, e2, A, t2, arguments[2]);
            }, setUint16: function(e2, t2) {
              U(this, 2, e2, A, t2, arguments[2]);
            }, setInt32: function(e2, t2) {
              U(this, 4, e2, N, t2, arguments[2]);
            }, setUint32: function(e2, t2) {
              U(this, 4, e2, N, t2, arguments[2]);
            }, setFloat32: function(e2, t2) {
              U(this, 4, e2, F, t2, arguments[2]);
            }, setFloat64: function(e2, t2) {
              U(this, 8, e2, D, t2, arguments[2]);
            } });
          y(k, "ArrayBuffer"), y(b, "DataView"), s(b.prototype, a.VIEW, true), t.ArrayBuffer = k, t.DataView = b;
        }, function(e, t) {
          function n(t2, o) {
            return e.exports = n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e2, t3) {
              return e2.__proto__ = t3, e2;
            }, e.exports.__esModule = true, e.exports.default = e.exports, n(t2, o);
          }
          e.exports = n, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(8)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s) {
            "use strict";
            var l = n(1);
            function c(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (c = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = l(r2), i2 = l(i2), s = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = c(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(s);
            var u = function() {
              function e2() {
                (0, r2.default)(this, e2), this.allListeners = [];
              }
              return (0, i2.default)(e2, [{ key: "on", value: function(e3, t2, n2) {
                var o3 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], r3 = s.generateId("l"), i3 = { id: r3, element: e3, eventType: t2, handler: n2, options: o3 }, a2 = this.findOne(e3, t2, n2);
                if (!a2)
                  return this.allListeners.push(i3), e3.addEventListener(t2, n2, o3), r3;
              } }, { key: "off", value: function(e3, t2, n2, o3) {
                var r3 = this, i3 = this.findAll(e3, t2, n2);
                i3.forEach(function(e4, t3) {
                  var n3 = r3.allListeners.indexOf(i3[t3]);
                  n3 > -1 && (r3.allListeners.splice(n3, 1), e4.element.removeEventListener(e4.eventType, e4.handler, e4.options));
                });
              } }, { key: "offById", value: function(e3) {
                var t2 = this.findById(e3);
                t2 && t2.element.removeEventListener(t2.eventType, t2.handler, t2.options);
              } }, { key: "findOne", value: function(e3, t2, n2) {
                var o3 = this.findAll(e3, t2, n2);
                return o3.length > 0 ? o3[0] : null;
              } }, { key: "findAll", value: function(e3, t2, n2) {
                var o3 = e3 ? this.findByEventTarget(e3) : [];
                return e3 && t2 && n2 ? o3.filter(function(e4) {
                  return e4.eventType === t2 && e4.handler === n2;
                }) : e3 && t2 ? o3.filter(function(e4) {
                  return e4.eventType === t2;
                }) : o3;
              } }, { key: "removeAll", value: function() {
                this.allListeners.map(function(e3) {
                  e3.element.removeEventListener(e3.eventType, e3.handler, e3.options);
                }), this.allListeners = [];
              } }, { key: "destroy", value: function() {
                this.removeAll();
              } }, { key: "findByEventTarget", value: function(e3) {
                return this.allListeners.filter(function(t2) {
                  if (t2.element === e3)
                    return t2;
                });
              } }, { key: "findByType", value: function(e3) {
                return this.allListeners.filter(function(t2) {
                  if (t2.eventType === e3)
                    return t2;
                });
              } }, { key: "findByHandler", value: function(e3) {
                return this.allListeners.filter(function(t2) {
                  if (t2.handler === e3)
                    return t2;
                });
              } }, { key: "findById", value: function(e3) {
                return this.allListeners.find(function(t2) {
                  return t2.id === e3;
                });
              } }]), e2;
            }();
            o2.default = u, u.displayName = "Listeners", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t], void 0 === (i = "function" == typeof (o = function(n2) {
            "use strict";
            Object.defineProperty(n2, "__esModule", { value: true }), n2.default = void 0;
            var o2 = function(e2) {
              var t2 = { get id() {
                return e2.id;
              }, get name() {
                return e2.name;
              }, get config() {
                return e2.config;
              }, get holder() {
                return e2.holder;
              }, get isEmpty() {
                return e2.isEmpty;
              }, get selected() {
                return e2.selected;
              }, set stretched(t3) {
                e2.stretched = t3;
              }, get stretched() {
                return e2.stretched;
              }, call: function(t3, n3) {
                return e2.call(t3, n3);
              }, save: function() {
                return e2.save();
              }, validate: function(t3) {
                return e2.validate(t3);
              }, dispatchChange: function() {
                e2.dispatchChange();
              } };
              Object.setPrototypeOf(this, t2);
            };
            n2.default = o2, e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o = n(377);
          function r() {
            return "undefined" != typeof Reflect && Reflect.get ? (e.exports = r = Reflect.get.bind(), e.exports.__esModule = true, e.exports.default = e.exports) : (e.exports = r = function(e2, t2, n2) {
              var r2 = o(e2, t2);
              if (r2) {
                var i = Object.getOwnPropertyDescriptor(r2, t2);
                return i.get ? i.get.call(arguments.length < 3 ? e2 : n2) : i.value;
              }
            }, e.exports.__esModule = true, e.exports.default = e.exports), r.apply(this, arguments);
          }
          e.exports = r, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(381)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var l = function() {
              function e2() {
                (0, r2.default)(this, e2), this.lib = new a.default();
              }
              return (0, i2.default)(e2, [{ key: "destroy", value: function() {
                this.lib.destroy();
              } }, { key: "show", value: function(e3, t2, n2) {
                this.lib.show(e3, t2, n2);
              } }, { key: "hide", value: function() {
                var e3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.lib.hide(e3);
              } }, { key: "onHover", value: function(e3, t2, n2) {
                this.lib.onHover(e3, t2, n2);
              } }]), e2;
            }();
            o2.default = l, l.displayName = "Tooltip", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(41), n(2), n(3), n(385)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s) {
            "use strict";
            var l = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = l(r2), i2 = l(i2), a = l(a), s = l(s);
            var c = function() {
              function e2() {
                (0, i2.default)(this, e2), this.registeredShortcuts = /* @__PURE__ */ new Map();
              }
              return (0, a.default)(e2, [{ key: "add", value: function(e3) {
                if (this.findShortcut(e3.on, e3.name))
                  throw Error("Shortcut ".concat(e3.name, " is already registered for ").concat(e3.on, ". Please remove it before add a new handler."));
                var t2 = new s.default({ name: e3.name, on: e3.on, callback: e3.handler }), n2 = this.registeredShortcuts.get(e3.on) || [];
                this.registeredShortcuts.set(e3.on, [].concat((0, r2.default)(n2), [t2]));
              } }, { key: "remove", value: function(e3, t2) {
                var n2 = this.findShortcut(e3, t2);
                if (n2) {
                  n2.remove();
                  var o3 = this.registeredShortcuts.get(e3);
                  this.registeredShortcuts.set(e3, o3.filter(function(e4) {
                    return e4 !== n2;
                  }));
                }
              } }, { key: "findShortcut", value: function(e3, t2) {
                return (this.registeredShortcuts.get(e3) || []).find(function(e4) {
                  return e4.name === t2;
                });
              } }]), e2;
            }();
            c.displayName = "Shortcuts";
            var u = new c();
            o2.default = u, e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          e.exports = !n(17) && !n(11)(function() {
            return 7 != Object.defineProperty(n(86)("div"), "a", { get: function() {
              return 7;
            } }).a;
          });
        }, function(e, t, n) {
          var o = n(10), r = n(16), i = n(46), a = n(87), s = n(18).f;
          e.exports = function(e2) {
            var t2 = r.Symbol || (r.Symbol = i ? {} : o.Symbol || {});
            "_" == e2.charAt(0) || e2 in t2 || s(t2, e2, { value: a.f(e2) });
          };
        }, function(e, t, n) {
          var o = n(26), r = n(28), i = n(71)(false), a = n(88)("IE_PROTO");
          e.exports = function(e2, t2) {
            var n2, s = r(e2), l = 0, c = [];
            for (n2 in s)
              n2 != a && o(s, n2) && c.push(n2);
            for (; t2.length > l; )
              o(s, n2 = t2[l++]) && (~i(c, n2) || c.push(n2));
            return c;
          };
        }, function(e, t, n) {
          var o = n(18), r = n(12), i = n(47);
          e.exports = n(17) ? Object.defineProperties : function(e2, t2) {
            r(e2);
            for (var n2, a = i(t2), s = a.length, l = 0; s > l; )
              o.f(e2, n2 = a[l++], t2[n2]);
            return e2;
          };
        }, function(e, t, n) {
          var o = n(28), r = n(50).f, i = {}.toString, a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
          e.exports.f = function(e2) {
            return a && "[object Window]" == i.call(e2) ? function(e3) {
              try {
                return r(e3);
              } catch (e4) {
                return a.slice();
              }
            }(e2) : r(o(e2));
          };
        }, function(e, t, n) {
          "use strict";
          var o = n(17), r = n(47), i = n(72), a = n(63), s = n(22), l = n(62), c = Object.assign;
          e.exports = !c || n(11)(function() {
            var e2 = {}, t2 = {}, n2 = Symbol(), o2 = "abcdefghijklmnopqrst";
            return e2[n2] = 7, o2.split("").forEach(function(e3) {
              t2[e3] = e3;
            }), 7 != c({}, e2)[n2] || Object.keys(c({}, t2)).join("") != o2;
          }) ? function(e2, t2) {
            for (var n2 = s(e2), c2 = arguments.length, u = 1, f = i.f, d = a.f; c2 > u; )
              for (var p, h = l(arguments[u++]), v = f ? r(h).concat(f(h)) : r(h), g = v.length, y = 0; g > y; )
                p = v[y++], o && !d.call(h, p) || (n2[p] = h[p]);
            return n2;
          } : c;
        }, function(e, t) {
          e.exports = Object.is || function(e2, t2) {
            return e2 === t2 ? 0 !== e2 || 1 / e2 == 1 / t2 : e2 != e2 && t2 != t2;
          };
        }, function(e, t, n) {
          "use strict";
          var o = n(32), r = n(13), i = n(125), a = [].slice, s = {}, l = function(e2, t2, n2) {
            if (!(t2 in s)) {
              for (var o2 = [], r2 = 0; r2 < t2; r2++)
                o2[r2] = "a[" + r2 + "]";
              s[t2] = Function("F,a", "return new F(" + o2.join(",") + ")");
            }
            return s[t2](e2, n2);
          };
          e.exports = Function.bind || function(e2) {
            var t2 = o(this), n2 = a.call(arguments, 1), s2 = function() {
              var o2 = n2.concat(a.call(arguments));
              return this instanceof s2 ? l(t2, o2.length, o2) : i(t2, o2, e2);
            };
            return r(t2.prototype) && (s2.prototype = t2.prototype), s2;
          };
        }, function(e, t) {
          e.exports = function(e2, t2, n) {
            var o = void 0 === n;
            switch (t2.length) {
              case 0:
                return o ? e2() : e2.call(n);
              case 1:
                return o ? e2(t2[0]) : e2.call(n, t2[0]);
              case 2:
                return o ? e2(t2[0], t2[1]) : e2.call(n, t2[0], t2[1]);
              case 3:
                return o ? e2(t2[0], t2[1], t2[2]) : e2.call(n, t2[0], t2[1], t2[2]);
              case 4:
                return o ? e2(t2[0], t2[1], t2[2], t2[3]) : e2.call(n, t2[0], t2[1], t2[2], t2[3]);
            }
            return e2.apply(n, t2);
          };
        }, function(e, t, n) {
          var o = n(10).parseInt, r = n(56).trim, i = n(92), a = /^[-+]?0[xX]/;
          e.exports = 8 !== o(i + "08") || 22 !== o(i + "0x16") ? function(e2, t2) {
            var n2 = r(String(e2), 3);
            return o(n2, t2 >>> 0 || (a.test(n2) ? 16 : 10));
          } : o;
        }, function(e, t, n) {
          var o = n(10).parseFloat, r = n(56).trim;
          e.exports = 1 / o(n(92) + "-0") != -1 / 0 ? function(e2) {
            var t2 = r(String(e2), 3), n2 = o(t2);
            return 0 === n2 && "-" == t2.charAt(0) ? -0 : n2;
          } : o;
        }, function(e, t, n) {
          var o = n(38);
          e.exports = function(e2, t2) {
            if ("number" != typeof e2 && "Number" != o(e2))
              throw TypeError(t2);
            return +e2;
          };
        }, function(e, t, n) {
          var o = n(13), r = Math.floor;
          e.exports = function(e2) {
            return !o(e2) && isFinite(e2) && r(e2) === e2;
          };
        }, function(e, t) {
          e.exports = Math.log1p || function(e2) {
            return (e2 = +e2) > -1e-8 && e2 < 1e-8 ? e2 - e2 * e2 / 2 : Math.log(1 + e2);
          };
        }, function(e, t, n) {
          "use strict";
          var o = n(49), r = n(44), i = n(55), a = {};
          n(27)(a, n(14)("iterator"), function() {
            return this;
          }), e.exports = function(e2, t2, n2) {
            e2.prototype = o(a, { next: r(1, n2) }), i(e2, t2 + " Iterator");
          };
        }, function(e, t, n) {
          var o = n(12);
          e.exports = function(e2, t2, n2, r) {
            try {
              return r ? t2(o(n2)[0], n2[1]) : t2(n2);
            } catch (t3) {
              var i = e2.return;
              throw void 0 !== i && o(i.call(e2)), t3;
            }
          };
        }, function(e, t, n) {
          var o = n(282);
          e.exports = function(e2, t2) {
            return new (o(e2))(t2);
          };
        }, function(e, t, n) {
          var o = n(32), r = n(22), i = n(62), a = n(15);
          e.exports = function(e2, t2, n2, s, l) {
            o(t2);
            var c = r(e2), u = i(c), f = a(c.length), d = l ? f - 1 : 0, p = l ? -1 : 1;
            if (n2 < 2)
              for (; ; ) {
                if (d in u) {
                  s = u[d], d += p;
                  break;
                }
                if (d += p, l ? d < 0 : f <= d)
                  throw TypeError("Reduce of empty array with no initial value");
              }
            for (; l ? d >= 0 : f > d; d += p)
              d in u && (s = t2(s, u[d], d, c));
            return s;
          };
        }, function(e, t, n) {
          "use strict";
          var o = n(22), r = n(48), i = n(15);
          e.exports = [].copyWithin || function(e2, t2) {
            var n2 = o(this), a = i(n2.length), s = r(e2, a), l = r(t2, a), c = arguments.length > 2 ? arguments[2] : void 0, u = Math.min((void 0 === c ? a : r(c, a)) - l, a - s), f = 1;
            for (l < s && s < l + u && (f = -1, l += u - 1, s += u - 1); u-- > 0; )
              l in n2 ? n2[s] = n2[l] : delete n2[s], s += f, l += f;
            return n2;
          };
        }, function(e, t) {
          e.exports = function(e2, t2) {
            return { value: t2, done: !!e2 };
          };
        }, function(e, t, n) {
          "use strict";
          var o = n(107);
          n(0)({ target: "RegExp", proto: true, forced: o !== /./.exec }, { exec: o });
        }, function(e, t, n) {
          n(17) && "g" != /./g.flags && n(18).f(RegExp.prototype, "flags", { configurable: true, get: n(75) });
        }, function(e, t, n) {
          "use strict";
          var o, r, i, a, s = n(46), l = n(10), c = n(31), u = n(64), f = n(0), d = n(13), p = n(32), h = n(59), v = n(78), g = n(65), y = n(109).set, k = n(302)(), b = n(140), m = n(303), w = n(79), x = n(141), C = l.TypeError, S = l.process, T = S && S.versions, E = T && T.v8 || "", B = l.Promise, M = "process" == u(S), _ = function() {
          }, O = r = b.f, I = !!function() {
            try {
              var e2 = B.resolve(1), t2 = (e2.constructor = {})[n(14)("species")] = function(e3) {
                e3(_, _);
              };
              return (M || "function" == typeof PromiseRejectionEvent) && e2.then(_) instanceof t2 && 0 !== E.indexOf("6.6") && -1 === w.indexOf("Chrome/66");
            } catch (e3) {
            }
          }(), L = function(e2) {
            var t2;
            return !(!d(e2) || "function" != typeof (t2 = e2.then)) && t2;
          }, P = function(e2, t2) {
            if (!e2._n) {
              e2._n = true;
              var n2 = e2._c;
              k(function() {
                for (var o2 = e2._v, r2 = 1 == e2._s, i2 = 0, a2 = function(t3) {
                  var n3, i3, a3, s2 = r2 ? t3.ok : t3.fail, l2 = t3.resolve, c2 = t3.reject, u2 = t3.domain;
                  try {
                    s2 ? (r2 || (2 == e2._h && A(e2), e2._h = 1), true === s2 ? n3 = o2 : (u2 && u2.enter(), n3 = s2(o2), u2 && (u2.exit(), a3 = true)), n3 === t3.promise ? c2(C("Promise-chain cycle")) : (i3 = L(n3)) ? i3.call(n3, l2, c2) : l2(n3)) : c2(o2);
                  } catch (e3) {
                    u2 && !a3 && u2.exit(), c2(e3);
                  }
                }; n2.length > i2; )
                  a2(n2[i2++]);
                e2._c = [], e2._n = false, t2 && !e2._h && j(e2);
              });
            }
          }, j = function(e2) {
            y.call(l, function() {
              var t2, n2, o2, r2 = e2._v, i2 = R(e2);
              if (i2 && (t2 = m(function() {
                M ? S.emit("unhandledRejection", r2, e2) : (n2 = l.onunhandledrejection) ? n2({ promise: e2, reason: r2 }) : (o2 = l.console) && o2.error && o2.error("Unhandled promise rejection", r2);
              }), e2._h = M || R(e2) ? 2 : 1), e2._a = void 0, i2 && t2.e)
                throw t2.v;
            });
          }, R = function(e2) {
            return 1 !== e2._h && 0 === (e2._a || e2._c).length;
          }, A = function(e2) {
            y.call(l, function() {
              var t2;
              M ? S.emit("rejectionHandled", e2) : (t2 = l.onrejectionhandled) && t2({ promise: e2, reason: e2._v });
            });
          }, N = function(e2) {
            var t2 = this;
            t2._d || (t2._d = true, (t2 = t2._w || t2)._v = e2, t2._s = 2, t2._a || (t2._a = t2._c.slice()), P(t2, true));
          }, D = function(e2) {
            var t2, n2 = this;
            if (!n2._d) {
              n2._d = true, n2 = n2._w || n2;
              try {
                if (n2 === e2)
                  throw C("Promise can't be resolved itself");
                (t2 = L(e2)) ? k(function() {
                  var o2 = { _w: n2, _d: false };
                  try {
                    t2.call(e2, c(D, o2, 1), c(N, o2, 1));
                  } catch (e3) {
                    N.call(o2, e3);
                  }
                }) : (n2._v = e2, n2._s = 1, P(n2, false));
              } catch (e3) {
                N.call({ _w: n2, _d: false }, e3);
              }
            }
          };
          I || (B = function(e2) {
            h(this, B, "Promise", "_h"), p(e2), o.call(this);
            try {
              e2(c(D, this, 1), c(N, this, 1));
            } catch (e3) {
              N.call(this, e3);
            }
          }, (o = function(e2) {
            this._c = [], this._a = void 0, this._s = 0, this._d = false, this._v = void 0, this._h = 0, this._n = false;
          }).prototype = n(60)(B.prototype, { then: function(e2, t2) {
            var n2 = O(g(this, B));
            return n2.ok = "function" != typeof e2 || e2, n2.fail = "function" == typeof t2 && t2, n2.domain = M ? S.domain : void 0, this._c.push(n2), this._a && this._a.push(n2), this._s && P(this, false), n2.promise;
          }, catch: function(e2) {
            return this.then(void 0, e2);
          } }), i = function() {
            var e2 = new o();
            this.promise = e2, this.resolve = c(D, e2, 1), this.reject = c(N, e2, 1);
          }, b.f = O = function(e2) {
            return e2 === B || e2 === a ? new i(e2) : r(e2);
          }), f(f.G + f.W + f.F * !I, { Promise: B }), n(55)(B, "Promise"), n(58)("Promise"), a = n(16).Promise, f(f.S + f.F * !I, "Promise", { reject: function(e2) {
            var t2 = O(this);
            return (0, t2.reject)(e2), t2.promise;
          } }), f(f.S + f.F * (s || !I), "Promise", { resolve: function(e2) {
            return x(s && this === a ? B : this, e2);
          } }), f(f.S + f.F * !(I && n(74)(function(e2) {
            B.all(e2).catch(_);
          })), "Promise", { all: function(e2) {
            var t2 = this, n2 = O(t2), o2 = n2.resolve, r2 = n2.reject, i2 = m(function() {
              var n3 = [], i3 = 0, a2 = 1;
              v(e2, false, function(e3) {
                var s2 = i3++, l2 = false;
                n3.push(void 0), a2++, t2.resolve(e3).then(function(e4) {
                  l2 || (l2 = true, n3[s2] = e4, --a2 || o2(n3));
                }, r2);
              }), --a2 || o2(n3);
            });
            return i2.e && r2(i2.v), n2.promise;
          }, race: function(e2) {
            var t2 = this, n2 = O(t2), o2 = n2.reject, r2 = m(function() {
              v(e2, false, function(e3) {
                t2.resolve(e3).then(n2.resolve, o2);
              });
            });
            return r2.e && o2(r2.v), n2.promise;
          } });
        }, function(e, t, n) {
          "use strict";
          var o = n(32);
          function r(e2) {
            var t2, n2;
            this.promise = new e2(function(e3, o2) {
              if (void 0 !== t2 || void 0 !== n2)
                throw TypeError("Bad Promise constructor");
              t2 = e3, n2 = o2;
            }), this.resolve = o(t2), this.reject = o(n2);
          }
          e.exports.f = function(e2) {
            return new r(e2);
          };
        }, function(e, t, n) {
          var o = n(12), r = n(13), i = n(140);
          e.exports = function(e2, t2) {
            if (o(e2), r(t2) && t2.constructor === e2)
              return t2;
            var n2 = i.f(e2);
            return (0, n2.resolve)(t2), n2.promise;
          };
        }, function(e, t, n) {
          "use strict";
          var o = n(18).f, r = n(49), i = n(60), a = n(31), s = n(59), l = n(78), c = n(98), u = n(136), f = n(58), d = n(17), p = n(43).fastKey, h = n(53), v = d ? "_s" : "size", g = function(e2, t2) {
            var n2, o2 = p(t2);
            if ("F" !== o2)
              return e2._i[o2];
            for (n2 = e2._f; n2; n2 = n2.n)
              if (n2.k == t2)
                return n2;
          };
          e.exports = { getConstructor: function(e2, t2, n2, c2) {
            var u2 = e2(function(e3, o2) {
              s(e3, u2, t2, "_i"), e3._t = t2, e3._i = r(null), e3._f = void 0, e3._l = void 0, e3[v] = 0, null != o2 && l(o2, n2, e3[c2], e3);
            });
            return i(u2.prototype, { clear: function() {
              for (var e3 = h(this, t2), n3 = e3._i, o2 = e3._f; o2; o2 = o2.n)
                o2.r = true, o2.p && (o2.p = o2.p.n = void 0), delete n3[o2.i];
              e3._f = e3._l = void 0, e3[v] = 0;
            }, delete: function(e3) {
              var n3 = h(this, t2), o2 = g(n3, e3);
              if (o2) {
                var r2 = o2.n, i2 = o2.p;
                delete n3._i[o2.i], o2.r = true, i2 && (i2.n = r2), r2 && (r2.p = i2), n3._f == o2 && (n3._f = r2), n3._l == o2 && (n3._l = i2), n3[v]--;
              }
              return !!o2;
            }, forEach: function(e3) {
              h(this, t2);
              for (var n3, o2 = a(e3, arguments.length > 1 ? arguments[1] : void 0, 3); n3 = n3 ? n3.n : this._f; )
                for (o2(n3.v, n3.k, this); n3 && n3.r; )
                  n3 = n3.p;
            }, has: function(e3) {
              return !!g(h(this, t2), e3);
            } }), d && o(u2.prototype, "size", { get: function() {
              return h(this, t2)[v];
            } }), u2;
          }, def: function(e2, t2, n2) {
            var o2, r2, i2 = g(e2, t2);
            return i2 ? i2.v = n2 : (e2._l = i2 = { i: r2 = p(t2, true), k: t2, v: n2, p: o2 = e2._l, n: void 0, r: false }, e2._f || (e2._f = i2), o2 && (o2.n = i2), e2[v]++, "F" !== r2 && (e2._i[r2] = i2)), e2;
          }, getEntry: g, setStrong: function(e2, t2, n2) {
            c(e2, t2, function(e3, n3) {
              this._t = h(e3, t2), this._k = n3, this._l = void 0;
            }, function() {
              for (var e3 = this._k, t3 = this._l; t3 && t3.r; )
                t3 = t3.p;
              return this._t && (this._l = t3 = t3 ? t3.n : this._t._f) ? u(0, "keys" == e3 ? t3.k : "values" == e3 ? t3.v : [t3.k, t3.v]) : (this._t = void 0, u(1));
            }, n2 ? "entries" : "values", !n2, true), f(t2);
          } };
        }, function(e, t, n) {
          "use strict";
          var o = n(60), r = n(43).getWeak, i = n(12), a = n(13), s = n(59), l = n(78), c = n(36), u = n(26), f = n(53), d = c(5), p = c(6), h = 0, v = function(e2) {
            return e2._l || (e2._l = new g());
          }, g = function() {
            this.a = [];
          }, y = function(e2, t2) {
            return d(e2.a, function(e3) {
              return e3[0] === t2;
            });
          };
          g.prototype = { get: function(e2) {
            var t2 = y(this, e2);
            if (t2)
              return t2[1];
          }, has: function(e2) {
            return !!y(this, e2);
          }, set: function(e2, t2) {
            var n2 = y(this, e2);
            n2 ? n2[1] = t2 : this.a.push([e2, t2]);
          }, delete: function(e2) {
            var t2 = p(this.a, function(t3) {
              return t3[0] === e2;
            });
            return ~t2 && this.a.splice(t2, 1), !!~t2;
          } }, e.exports = { getConstructor: function(e2, t2, n2, i2) {
            var c2 = e2(function(e3, o2) {
              s(e3, c2, t2, "_i"), e3._t = t2, e3._i = h++, e3._l = void 0, null != o2 && l(o2, n2, e3[i2], e3);
            });
            return o(c2.prototype, { delete: function(e3) {
              if (!a(e3))
                return false;
              var n3 = r(e3);
              return true === n3 ? v(f(this, t2)).delete(e3) : n3 && u(n3, this._i) && delete n3[this._i];
            }, has: function(e3) {
              if (!a(e3))
                return false;
              var n3 = r(e3);
              return true === n3 ? v(f(this, t2)).has(e3) : n3 && u(n3, this._i);
            } }), c2;
          }, def: function(e2, t2, n2) {
            var o2 = r(i(t2), true);
            return true === o2 ? v(e2).set(t2, n2) : o2[e2._i] = n2, e2;
          }, ufstore: v };
        }, function(e, t, n) {
          var o = n(33), r = n(15);
          e.exports = function(e2) {
            if (void 0 === e2)
              return 0;
            var t2 = o(e2), n2 = r(t2);
            if (t2 !== n2)
              throw RangeError("Wrong length!");
            return n2;
          };
        }, function(e, t, n) {
          var o = n(50), r = n(72), i = n(12), a = n(10).Reflect;
          e.exports = a && a.ownKeys || function(e2) {
            var t2 = o.f(i(e2)), n2 = r.f;
            return n2 ? t2.concat(n2(e2)) : t2;
          };
        }, function(e, t, n) {
          var o = n(15), r = n(94), i = n(39);
          e.exports = function(e2, t2, n2, a) {
            var s = String(i(e2)), l = s.length, c = void 0 === n2 ? " " : String(n2), u = o(t2);
            if (u <= l || "" == c)
              return s;
            var f = u - l, d = r.call(c, Math.ceil(f / c.length));
            return d.length > f && (d = d.slice(0, f)), a ? d + s : s + d;
          };
        }, function(e, t, n) {
          var o = n(17), r = n(47), i = n(28), a = n(63).f;
          e.exports = function(e2) {
            return function(t2) {
              for (var n2, s = i(t2), l = r(s), c = l.length, u = 0, f = []; c > u; )
                n2 = l[u++], o && !a.call(s, n2) || f.push(e2 ? [n2, s[n2]] : s[n2]);
              return f;
            };
          };
        }, function(e, t, n) {
          var o = n(149);
          e.exports = function(e2, t2) {
            if (e2) {
              if ("string" == typeof e2)
                return o(e2, t2);
              var n2 = Object.prototype.toString.call(e2).slice(8, -1);
              return "Object" === n2 && e2.constructor && (n2 = e2.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? o(e2, t2) : void 0;
            }
          }, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t) {
          e.exports = function(e2, t2) {
            (null == t2 || t2 > e2.length) && (t2 = e2.length);
            for (var n = 0, o = new Array(t2); n < t2; n++)
              o[n] = e2[n];
            return o;
          }, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e) {
          e.exports = JSON.parse('{"ui":{"blockTunes":{"toggler":{"Click to tune":"","or drag to move":""}},"inlineToolbar":{"converter":{"Convert to":""}},"toolbar":{"toolbox":{"Add":""}},"popover":{"Filter":"","Nothing found":""}},"toolNames":{"Text":"","Link":"","Bold":"","Italic":""},"tools":{"link":{"Add a link":""},"stub":{"The block can not be displayed correctly.":""}},"blockTunes":{"delete":{"Delete":"","Click to delete":""},"moveUp":{"Move up":""},"moveDown":{"Move down":""}}}');
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(3), n(2), n(5), n(6), n(4), n(153)], void 0 === (i = "function" == typeof (o = function(e2, t2, o2, r2, i2, a, s) {
            "use strict";
            var l = n(1);
            function c(e3) {
              var t3 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e4) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, a.default)(e3);
                if (t3) {
                  var r3 = (0, a.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, i2.default)(this, n2);
              };
            }
            Object.defineProperty(e2, "__esModule", { value: true }), e2.CriticalError = void 0, t2 = l(t2), o2 = l(o2), r2 = l(r2), i2 = l(i2), a = l(a);
            var u = function(e3) {
              (0, r2.default)(i3, e3);
              var n2 = c(i3);
              function i3() {
                return (0, o2.default)(this, i3), n2.apply(this, arguments);
              }
              return (0, t2.default)(i3);
            }((0, (s = l(s)).default)(Error));
            e2.CriticalError = u, u.displayName = "CriticalError";
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t) {
          e.exports = function(e2) {
            if (void 0 === e2)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e2;
          }, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t, n) {
          var o = n(4), r = n(111), i = n(373), a = n(374);
          function s(t2) {
            var n2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
            return e.exports = s = function(e2) {
              if (null === e2 || !i(e2))
                return e2;
              if ("function" != typeof e2)
                throw new TypeError("Super expression must either be null or a function");
              if (void 0 !== n2) {
                if (n2.has(e2))
                  return n2.get(e2);
                n2.set(e2, t3);
              }
              function t3() {
                return a(e2, arguments, o(this).constructor);
              }
              return t3.prototype = Object.create(e2.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }), r(t3, e2);
            }, e.exports.__esModule = true, e.exports.default = e.exports, s(t2);
          }
          e.exports = s, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(8), n(113), n(9), n(61)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f, d, p, h, v) {
            "use strict";
            var g = n(1);
            function y(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (y = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function k(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, f.default)(e2);
                if (t2) {
                  var r3 = (0, f.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, u.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = g(r2), i2 = g(i2), s = g(s), l = g(l), c = g(c), u = g(u), f = g(f), d = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = y(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(d), p = g(p), h = g(h), v = g(v);
            var b = function(e2) {
              (0, c.default)(n2, e2);
              var t2 = k(n2);
              function n2() {
                var e3;
                return (0, s.default)(this, n2), (e3 = t2.apply(this, arguments)).insert = function() {
                  var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e3.config.defaultBlock, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o3 = arguments.length > 3 ? arguments[3] : void 0, r3 = arguments.length > 4 ? arguments[4] : void 0, i3 = arguments.length > 5 ? arguments[5] : void 0, a2 = arguments.length > 6 ? arguments[6] : void 0, s2 = e3.Editor.BlockManager.insert({ id: a2, tool: t3, data: n3, index: o3, needToFocus: r3, replace: i3 });
                  return new p.default(s2);
                }, e3.composeBlockData = function() {
                  var t3 = (0, i2.default)(r2.default.mark(function t4(n3) {
                    var o3, i3;
                    return r2.default.wrap(function(t5) {
                      for (; ; )
                        switch (t5.prev = t5.next) {
                          case 0:
                            return o3 = e3.Editor.Tools.blockTools.get(n3), i3 = new v.default({ tool: o3, api: e3.Editor.API, readOnly: true, data: {}, tunesData: {} }), t5.abrupt("return", i3.data);
                          case 3:
                          case "end":
                            return t5.stop();
                        }
                    }, t4);
                  }));
                  return function(e4) {
                    return t3.apply(this, arguments);
                  };
                }(), e3.update = function(t3, n3) {
                  var o3 = e3.Editor.BlockManager, r3 = o3.getBlockById(t3);
                  if (r3) {
                    var i3 = o3.getBlockIndex(r3);
                    o3.insert({ id: r3.id, tool: r3.name, data: n3, index: i3, replace: true, tunes: r3.tunes });
                  } else
                    d.log("blocks.update(): Block with passed id was not found", "warn");
                }, e3;
              }
              return (0, l.default)(n2, [{ key: "methods", get: function() {
                var e3 = this;
                return { clear: function() {
                  return e3.clear();
                }, render: function(t3) {
                  return e3.render(t3);
                }, renderFromHTML: function(t3) {
                  return e3.renderFromHTML(t3);
                }, delete: function(t3) {
                  return e3.delete(t3);
                }, swap: function(t3, n3) {
                  return e3.swap(t3, n3);
                }, move: function(t3, n3) {
                  return e3.move(t3, n3);
                }, getBlockByIndex: function(t3) {
                  return e3.getBlockByIndex(t3);
                }, getById: function(t3) {
                  return e3.getById(t3);
                }, getCurrentBlockIndex: function() {
                  return e3.getCurrentBlockIndex();
                }, getBlockIndex: function(t3) {
                  return e3.getBlockIndex(t3);
                }, getBlocksCount: function() {
                  return e3.getBlocksCount();
                }, stretchBlock: function(t3) {
                  var n3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                  return e3.stretchBlock(t3, n3);
                }, insertNewBlock: function() {
                  return e3.insertNewBlock();
                }, insert: this.insert, update: this.update, composeBlockData: this.composeBlockData };
              } }, { key: "getBlocksCount", value: function() {
                return this.Editor.BlockManager.blocks.length;
              } }, { key: "getCurrentBlockIndex", value: function() {
                return this.Editor.BlockManager.currentBlockIndex;
              } }, { key: "getBlockIndex", value: function(e3) {
                var t3 = this.Editor.BlockManager.getBlockById(e3);
                if (t3)
                  return this.Editor.BlockManager.getBlockIndex(t3);
                d.logLabeled("There is no block with id `" + e3 + "`", "warn");
              } }, { key: "getBlockByIndex", value: function(e3) {
                var t3 = this.Editor.BlockManager.getBlockByIndex(e3);
                if (void 0 !== t3)
                  return new p.default(t3);
                d.logLabeled("There is no block at index `" + e3 + "`", "warn");
              } }, { key: "getById", value: function(e3) {
                var t3 = this.Editor.BlockManager.getBlockById(e3);
                return void 0 === t3 ? (d.logLabeled("There is no block with id `" + e3 + "`", "warn"), null) : new p.default(t3);
              } }, { key: "swap", value: function(e3, t3) {
                d.log("`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead", "info"), this.Editor.BlockManager.swap(e3, t3);
              } }, { key: "move", value: function(e3, t3) {
                this.Editor.BlockManager.move(e3, t3);
              } }, { key: "delete", value: function(e3) {
                try {
                  this.Editor.BlockManager.removeBlock(e3);
                } catch (e4) {
                  return void d.logLabeled(e4, "warn");
                }
                0 === this.Editor.BlockManager.blocks.length && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
              } }, { key: "clear", value: function() {
                this.Editor.BlockManager.clear(true), this.Editor.InlineToolbar.close();
              } }, { key: "render", value: function(e3) {
                return this.Editor.BlockManager.clear(), this.Editor.Renderer.render(e3.blocks);
              } }, { key: "renderFromHTML", value: function(e3) {
                return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(e3, true);
              } }, { key: "stretchBlock", value: function(e3) {
                var t3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                d.deprecationAssert(true, "blocks.stretchBlock()", "BlockAPI");
                var n3 = this.Editor.BlockManager.getBlockByIndex(e3);
                n3 && (n3.stretched = t3);
              } }, { key: "insertNewBlock", value: function() {
                d.log("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
              } }]), n2;
            }(h.default);
            o2.default = b, b.displayName = "BlocksAPI", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c) {
            "use strict";
            var u = n(1);
            function f(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, l.default)(e2);
                if (t2) {
                  var r3 = (0, l.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, s.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), l = u(l);
            var d = function(e2) {
              (0, a.default)(n2, e2);
              var t2 = f(n2);
              function n2() {
                var e3;
                return (0, r2.default)(this, n2), (e3 = t2.apply(this, arguments)).setToFirstBlock = function() {
                  var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e3.Editor.Caret.positions.DEFAULT, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                  return !!e3.Editor.BlockManager.firstBlock && (e3.Editor.Caret.setToBlock(e3.Editor.BlockManager.firstBlock, t3, n3), true);
                }, e3.setToLastBlock = function() {
                  var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e3.Editor.Caret.positions.DEFAULT, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                  return !!e3.Editor.BlockManager.lastBlock && (e3.Editor.Caret.setToBlock(e3.Editor.BlockManager.lastBlock, t3, n3), true);
                }, e3.setToPreviousBlock = function() {
                  var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e3.Editor.Caret.positions.DEFAULT, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                  return !!e3.Editor.BlockManager.previousBlock && (e3.Editor.Caret.setToBlock(e3.Editor.BlockManager.previousBlock, t3, n3), true);
                }, e3.setToNextBlock = function() {
                  var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e3.Editor.Caret.positions.DEFAULT, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                  return !!e3.Editor.BlockManager.nextBlock && (e3.Editor.Caret.setToBlock(e3.Editor.BlockManager.nextBlock, t3, n3), true);
                }, e3.setToBlock = function(t3) {
                  var n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e3.Editor.Caret.positions.DEFAULT, o3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                  return !!e3.Editor.BlockManager.blocks[t3] && (e3.Editor.Caret.setToBlock(e3.Editor.BlockManager.blocks[t3], n3, o3), true);
                }, e3.focus = function() {
                  var t3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  return t3 ? e3.setToLastBlock(e3.Editor.Caret.positions.END) : e3.setToFirstBlock(e3.Editor.Caret.positions.START);
                }, e3;
              }
              return (0, i2.default)(n2, [{ key: "methods", get: function() {
                return { setToFirstBlock: this.setToFirstBlock, setToLastBlock: this.setToLastBlock, setToPreviousBlock: this.setToPreviousBlock, setToNextBlock: this.setToNextBlock, setToBlock: this.setToBlock, focus: this.focus };
              } }]), n2;
            }((c = u(c)).default);
            o2.default = d, d.displayName = "CaretAPI", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c) {
            "use strict";
            var u = n(1);
            function f(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, l.default)(e2);
                if (t2) {
                  var r3 = (0, l.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, s.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), l = u(l);
            var d = function(e2) {
              (0, a.default)(n2, e2);
              var t2 = f(n2);
              function n2() {
                return (0, r2.default)(this, n2), t2.apply(this, arguments);
              }
              return (0, i2.default)(n2, [{ key: "methods", get: function() {
                var e3 = this;
                return { emit: function(t3, n3) {
                  return e3.emit(t3, n3);
                }, off: function(t3, n3) {
                  return e3.off(t3, n3);
                }, on: function(t3, n3) {
                  return e3.on(t3, n3);
                } };
              } }, { key: "on", value: function(e3, t3) {
                this.eventsDispatcher.on(e3, t3);
              } }, { key: "emit", value: function(e3, t3) {
                this.eventsDispatcher.emit(e3, t3);
              } }, { key: "off", value: function(e3, t3) {
                this.eventsDispatcher.off(e3, t3);
              } }]), n2;
            }((c = u(c)).default);
            o2.default = d, d.displayName = "EventsAPI", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(54), n(8), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f) {
            "use strict";
            var d = n(1);
            function p(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, l.default)(e2);
                if (t2) {
                  var r3 = (0, l.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, s.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = d(r2), i2 = d(i2), a = d(a), s = d(s), l = d(l), c = d(c);
            var h = function(e2) {
              (0, a.default)(n2, e2);
              var t2 = p(n2);
              function n2() {
                return (0, r2.default)(this, n2), t2.apply(this, arguments);
              }
              return (0, i2.default)(n2, [{ key: "methods", get: function() {
                return { t: function() {
                  (0, u.logLabeled)("I18n.t() method can be accessed only from Tools", "warn");
                } };
              } }, { key: "getMethodsForTool", value: function(e3) {
                return Object.assign(this.methods, { t: function(t3) {
                  return c.default.t(n2.getNamespace(e3), t3);
                } });
              } }], [{ key: "getNamespace", value: function(e3) {
                return e3.isTune() ? "blockTunes.".concat(e3.name) : "tools.".concat(e3.name);
              } }]), n2;
            }((f = d(f)).default);
            o2.default = h, h.displayName = "I18nAPI", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c) {
            "use strict";
            var u = n(1);
            function f(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, l.default)(e2);
                if (t2) {
                  var r3 = (0, l.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, s.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), l = u(l);
            var d = function(e2) {
              (0, a.default)(n2, e2);
              var t2 = f(n2);
              function n2() {
                return (0, r2.default)(this, n2), t2.apply(this, arguments);
              }
              return (0, i2.default)(n2, [{ key: "methods", get: function() {
                var e3 = this;
                return { close: function() {
                  return e3.close();
                }, open: function() {
                  return e3.open();
                } };
              } }, { key: "open", value: function() {
                this.Editor.InlineToolbar.tryToShow();
              } }, { key: "close", value: function() {
                this.Editor.InlineToolbar.close();
              } }]), n2;
            }((c = u(c)).default);
            o2.default = d, d.displayName = "InlineToolbarAPI", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c) {
            "use strict";
            var u = n(1);
            function f(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, l.default)(e2);
                if (t2) {
                  var r3 = (0, l.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, s.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), l = u(l);
            var d = function(e2) {
              (0, a.default)(n2, e2);
              var t2 = f(n2);
              function n2() {
                return (0, r2.default)(this, n2), t2.apply(this, arguments);
              }
              return (0, i2.default)(n2, [{ key: "methods", get: function() {
                var e3 = this;
                return { on: function(t3, n3, o3, r3) {
                  return e3.on(t3, n3, o3, r3);
                }, off: function(t3, n3, o3, r3) {
                  return e3.off(t3, n3, o3, r3);
                }, offById: function(t3) {
                  return e3.offById(t3);
                } };
              } }, { key: "on", value: function(e3, t3, n3, o3) {
                return this.listeners.on(e3, t3, n3, o3);
              } }, { key: "off", value: function(e3, t3, n3, o3) {
                this.listeners.off(e3, t3, n3, o3);
              } }, { key: "offById", value: function(e3) {
                this.listeners.offById(e3);
              } }]), n2;
            }((c = u(c)).default);
            o2.default = d, d.displayName = "ListenersAPI", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(378), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u) {
            "use strict";
            var f = n(1);
            function d(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, l.default)(e2);
                if (t2) {
                  var r3 = (0, l.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, s.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = f(r2), i2 = f(i2), a = f(a), s = f(s), l = f(l), c = f(c);
            var p = function(e2) {
              (0, a.default)(n2, e2);
              var t2 = d(n2);
              function n2(e3) {
                var o3, i3 = e3.config, a2 = e3.eventsDispatcher;
                return (0, r2.default)(this, n2), (o3 = t2.call(this, { config: i3, eventsDispatcher: a2 })).notifier = new c.default(), o3;
              }
              return (0, i2.default)(n2, [{ key: "methods", get: function() {
                var e3 = this;
                return { show: function(t3) {
                  return e3.show(t3);
                } };
              } }, { key: "show", value: function(e3) {
                return this.notifier.show(e3);
              } }]), n2;
            }((u = f(u)).default);
            o2.default = p, p.displayName = "NotifierAPI", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c) {
            "use strict";
            var u = n(1);
            function f(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, l.default)(e2);
                if (t2) {
                  var r3 = (0, l.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, s.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), l = u(l);
            var d = function(e2) {
              (0, a.default)(n2, e2);
              var t2 = f(n2);
              function n2() {
                return (0, r2.default)(this, n2), t2.apply(this, arguments);
              }
              return (0, i2.default)(n2, [{ key: "methods", get: function() {
                var e3 = this;
                return { toggle: function(t3) {
                  return e3.toggle(t3);
                }, get isEnabled() {
                  return e3.isEnabled;
                } };
              } }, { key: "toggle", value: function(e3) {
                return this.Editor.ReadOnly.toggle(e3);
              } }, { key: "isEnabled", get: function() {
                return this.Editor.ReadOnly.isEnabled;
              } }]), n2;
            }((c = u(c)).default);
            o2.default = d, d.displayName = "ReadOnlyAPI", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(9), n(66)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u) {
            "use strict";
            var f = n(1);
            function d(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, l.default)(e2);
                if (t2) {
                  var r3 = (0, l.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, s.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = f(r2), i2 = f(i2), a = f(a), s = f(s), l = f(l);
            var p = function(e2) {
              (0, a.default)(n2, e2);
              var t2 = d(n2);
              function n2() {
                return (0, r2.default)(this, n2), t2.apply(this, arguments);
              }
              return (0, i2.default)(n2, [{ key: "methods", get: function() {
                var e3 = this;
                return { clean: function(t3, n3) {
                  return e3.clean(t3, n3);
                } };
              } }, { key: "clean", value: function(e3, t3) {
                return (0, u.clean)(e3, t3);
              } }]), n2;
            }((c = f(c)).default);
            o2.default = p, p.displayName = "SanitizerAPI", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(8), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f) {
            "use strict";
            var d = n(1);
            function p(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (p = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function h(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, c.default)(e2);
                if (t2) {
                  var r3 = (0, c.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, l.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = d(r2), i2 = d(i2), s = d(s), l = d(l), c = d(c), u = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = p(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(u);
            var v = function(e2) {
              (0, s.default)(n2, e2);
              var t2 = h(n2);
              function n2() {
                return (0, r2.default)(this, n2), t2.apply(this, arguments);
              }
              return (0, i2.default)(n2, [{ key: "methods", get: function() {
                var e3 = this;
                return { save: function() {
                  return e3.save();
                } };
              } }, { key: "save", value: function() {
                var e3 = "Editor's content can not be saved in read-only mode";
                return this.Editor.ReadOnly.isEnabled ? (u.logLabeled(e3, "warn"), Promise.reject(new Error(e3))) : this.Editor.Saver.save();
              } }]), n2;
            }((f = d(f)).default);
            o2.default = v, v.displayName = "SaverAPI", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(25), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u) {
            "use strict";
            var f = n(1);
            function d(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, l.default)(e2);
                if (t2) {
                  var r3 = (0, l.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, s.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = f(r2), i2 = f(i2), a = f(a), s = f(s), l = f(l), c = f(c);
            var p = function(e2) {
              (0, a.default)(n2, e2);
              var t2 = d(n2);
              function n2() {
                return (0, r2.default)(this, n2), t2.apply(this, arguments);
              }
              return (0, i2.default)(n2, [{ key: "methods", get: function() {
                var e3 = this;
                return { findParentTag: function(t3, n3) {
                  return e3.findParentTag(t3, n3);
                }, expandToTag: function(t3) {
                  return e3.expandToTag(t3);
                } };
              } }, { key: "findParentTag", value: function(e3, t3) {
                return new c.default().findParentTag(e3, t3);
              } }, { key: "expandToTag", value: function(e3) {
                new c.default().expandToTag(e3);
              } }]), n2;
            }((u = f(u)).default);
            o2.default = p, p.displayName = "SelectionAPI", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c) {
            "use strict";
            var u = n(1);
            function f(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, l.default)(e2);
                if (t2) {
                  var r3 = (0, l.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, s.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), l = u(l);
            var d = function(e2) {
              (0, a.default)(n2, e2);
              var t2 = f(n2);
              function n2() {
                return (0, r2.default)(this, n2), t2.apply(this, arguments);
              }
              return (0, i2.default)(n2, [{ key: "classes", get: function() {
                return { block: "cdx-block", inlineToolButton: "ce-inline-tool", inlineToolButtonActive: "ce-inline-tool--active", input: "cdx-input", loader: "cdx-loader", button: "cdx-button", settingsButton: "cdx-settings-button", settingsButtonActive: "cdx-settings-button--active" };
              } }]), n2;
            }((c = u(c)).default);
            o2.default = d, d.displayName = "StylesAPI", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(9), n(8)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f) {
            "use strict";
            var d = n(1);
            function p(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (p = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function h(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, c.default)(e2);
                if (t2) {
                  var r3 = (0, c.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, l.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = d(r2), i2 = d(i2), s = d(s), l = d(l), c = d(c), u = d(u), f = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = p(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(f);
            var v = function(e2) {
              (0, s.default)(n2, e2);
              var t2 = h(n2);
              function n2() {
                return (0, r2.default)(this, n2), t2.apply(this, arguments);
              }
              return (0, i2.default)(n2, [{ key: "methods", get: function() {
                var e3 = this;
                return { close: function() {
                  return e3.close();
                }, open: function() {
                  return e3.open();
                }, toggleBlockSettings: function(t3) {
                  return e3.toggleBlockSettings(t3);
                } };
              } }, { key: "open", value: function() {
                this.Editor.Toolbar.moveAndOpen();
              } }, { key: "close", value: function() {
                this.Editor.Toolbar.close();
              } }, { key: "toggleBlockSettings", value: function(e3) {
                -1 !== this.Editor.BlockManager.currentBlockIndex ? (null != e3 ? e3 : !this.Editor.BlockSettings.opened) ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close() : f.logLabeled("Could't toggle the Toolbar because there is no block selected ", "warn");
              } }]), n2;
            }(u.default);
            o2.default = v, v.displayName = "ToolbarAPI", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(9), n(115)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u) {
            "use strict";
            var f = n(1);
            function d(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, l.default)(e2);
                if (t2) {
                  var r3 = (0, l.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, s.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = f(r2), i2 = f(i2), a = f(a), s = f(s), l = f(l), c = f(c), u = f(u);
            var p = function(e2) {
              (0, a.default)(n2, e2);
              var t2 = d(n2);
              function n2(e3) {
                var o3, i3 = e3.config, a2 = e3.eventsDispatcher;
                return (0, r2.default)(this, n2), (o3 = t2.call(this, { config: i3, eventsDispatcher: a2 })).tooltip = new u.default(), o3;
              }
              return (0, i2.default)(n2, [{ key: "destroy", value: function() {
                this.tooltip.destroy();
              } }, { key: "methods", get: function() {
                var e3 = this;
                return { show: function(t3, n3, o3) {
                  return e3.show(t3, n3, o3);
                }, hide: function() {
                  return e3.hide();
                }, onHover: function(t3, n3, o3) {
                  return e3.onHover(t3, n3, o3);
                } };
              } }, { key: "show", value: function(e3, t3, n3) {
                this.tooltip.show(e3, t3, n3);
              } }, { key: "hide", value: function() {
                this.tooltip.hide();
              } }, { key: "onHover", value: function(e3, t3, n3) {
                this.tooltip.onHover(e3, t3, n3);
              } }]), n2;
            }(c.default);
            o2.default = p, p.displayName = "TooltipAPI", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c) {
            "use strict";
            var u = n(1);
            function f(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, l.default)(e2);
                if (t2) {
                  var r3 = (0, l.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, s.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), a = u(a), s = u(s), l = u(l);
            var d = function(e2) {
              (0, a.default)(n2, e2);
              var t2 = f(n2);
              function n2() {
                return (0, r2.default)(this, n2), t2.apply(this, arguments);
              }
              return (0, i2.default)(n2, [{ key: "methods", get: function() {
                return { nodes: this.editorNodes };
              } }, { key: "editorNodes", get: function() {
                return { wrapper: this.Editor.UI.nodes.wrapper, redactor: this.Editor.UI.nodes.redactor };
              } }]), n2;
            }((c = u(c)).default);
            o2.default = d, d.displayName = "UiAPI", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(9), n(8), n(25), n(67)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f, d, p) {
            "use strict";
            var h = n(1);
            function v(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (v = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function g(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, c.default)(e2);
                if (t2) {
                  var r3 = (0, c.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, l.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = h(r2), i2 = h(i2), s = h(s), l = h(l), c = h(c), u = h(u), f = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = v(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(f), d = h(d), p = h(p);
            var y = function(e2) {
              (0, s.default)(n2, e2);
              var t2 = g(n2);
              function n2() {
                return (0, r2.default)(this, n2), t2.apply(this, arguments);
              }
              return (0, i2.default)(n2, [{ key: "keydown", value: function(e3) {
                switch (this.beforeKeydownProcessing(e3), e3.keyCode) {
                  case f.keyCodes.BACKSPACE:
                    this.backspace(e3);
                    break;
                  case f.keyCodes.ENTER:
                    this.enter(e3);
                    break;
                  case f.keyCodes.DOWN:
                  case f.keyCodes.RIGHT:
                    this.arrowRightAndDown(e3);
                    break;
                  case f.keyCodes.UP:
                  case f.keyCodes.LEFT:
                    this.arrowLeftAndUp(e3);
                    break;
                  case f.keyCodes.TAB:
                    this.tabPressed(e3);
                }
              } }, { key: "beforeKeydownProcessing", value: function(e3) {
                this.needToolbarClosing(e3) && f.isPrintableKey(e3.keyCode) && (this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close(), e3.ctrlKey || e3.metaKey || e3.altKey || e3.shiftKey || (this.Editor.BlockManager.clearFocused(), this.Editor.BlockSelection.clearSelection(e3)));
              } }, { key: "keyup", value: function(e3) {
                e3.shiftKey || this.Editor.UI.checkEmptiness();
              } }, { key: "tabPressed", value: function(e3) {
                this.Editor.BlockSelection.clearSelection(e3);
                var t3 = this.Editor, n3 = t3.BlockManager, o3 = t3.InlineToolbar, r3 = t3.ConversionToolbar, i3 = n3.currentBlock;
                if (i3) {
                  var a2 = i3.isEmpty, s2 = i3.tool.isDefault && a2, l2 = !a2 && r3.opened, c2 = !a2 && !d.default.isCollapsed && o3.opened, u2 = !l2 && !c2;
                  s2 ? this.activateToolbox() : u2 && this.activateBlockSettings();
                }
              } }, { key: "dragOver", value: function(e3) {
                this.Editor.BlockManager.getBlockByChildNode(e3.target).dropTarget = true;
              } }, { key: "dragLeave", value: function(e3) {
                this.Editor.BlockManager.getBlockByChildNode(e3.target).dropTarget = false;
              } }, { key: "handleCommandC", value: function(e3) {
                var t3 = this.Editor.BlockSelection;
                t3.anyBlockSelected && t3.copySelectedBlocks(e3);
              } }, { key: "handleCommandX", value: function(e3) {
                var t3 = this.Editor, n3 = t3.BlockSelection, o3 = t3.BlockManager, r3 = t3.Caret;
                n3.anyBlockSelected && n3.copySelectedBlocks(e3).then(function() {
                  var t4 = o3.removeSelectedBlocks(), i3 = o3.insertDefaultBlockAtIndex(t4, true);
                  r3.setToBlock(i3, r3.positions.START), n3.clearSelection(e3);
                });
              } }, { key: "enter", value: function(e3) {
                var t3 = this.Editor, n3 = t3.BlockManager, o3 = t3.UI;
                if (!n3.currentBlock.tool.isLineBreaksEnabled && !(o3.someToolbarOpened && o3.someFlipperButtonFocused || e3.shiftKey)) {
                  var r3 = this.Editor.BlockManager.currentBlock;
                  this.Editor.Caret.isAtStart && !this.Editor.BlockManager.currentBlock.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : r3 = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(r3), this.Editor.Toolbar.moveAndOpen(r3), e3.preventDefault();
                }
              } }, { key: "backspace", value: function(e3) {
                var t3 = this.Editor, n3 = t3.BlockManager, o3 = t3.BlockSelection, r3 = t3.Caret, i3 = n3.currentBlock, a2 = i3.tool;
                if (i3.selected || i3.isEmpty && i3.currentInput === i3.firstInput) {
                  e3.preventDefault();
                  var s2 = n3.currentBlockIndex;
                  return n3.previousBlock && 0 === n3.previousBlock.inputs.length ? n3.removeBlock(s2 - 1) : n3.removeBlock(), r3.setToBlock(n3.currentBlock, s2 ? r3.positions.END : r3.positions.START), this.Editor.Toolbar.close(), void o3.clearSelection(e3);
                }
                if (!a2.isLineBreaksEnabled || r3.isAtStart) {
                  var l2 = 0 === n3.currentBlockIndex;
                  r3.isAtStart && d.default.isCollapsed && i3.currentInput === i3.firstInput && !l2 && (e3.preventDefault(), this.mergeBlocks());
                }
              } }, { key: "mergeBlocks", value: function() {
                var e3 = this.Editor, t3 = e3.BlockManager, n3 = e3.Caret, o3 = e3.Toolbar, r3 = t3.previousBlock, i3 = t3.currentBlock;
                if (i3.name !== r3.name || !r3.mergeable)
                  return 0 === r3.inputs.length || r3.isEmpty ? (t3.removeBlock(t3.currentBlockIndex - 1), n3.setToBlock(t3.currentBlock), void o3.close()) : void (n3.navigatePrevious() && o3.close());
                n3.createShadow(r3.pluginsContent), t3.mergeBlocks(r3, i3).then(function() {
                  n3.restoreCaret(r3.pluginsContent), r3.pluginsContent.normalize(), o3.close();
                });
              } }, { key: "arrowRightAndDown", value: function(e3) {
                var t3 = this, n3 = p.default.usedKeys.includes(e3.keyCode) && (!e3.shiftKey || e3.keyCode === f.keyCodes.TAB);
                if (!this.Editor.UI.someToolbarOpened || !n3) {
                  this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
                  var o3 = this.Editor.Caret.isAtEnd || this.Editor.BlockSelection.anyBlockSelected;
                  e3.shiftKey && e3.keyCode === f.keyCodes.DOWN && o3 ? this.Editor.CrossBlockSelection.toggleBlockSelectedState() : ((e3.keyCode === f.keyCodes.DOWN || e3.keyCode === f.keyCodes.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) ? e3.preventDefault() : f.delay(function() {
                    t3.Editor.BlockManager.currentBlock && t3.Editor.BlockManager.currentBlock.updateCurrentInput();
                  }, 20)(), this.Editor.BlockSelection.clearSelection(e3));
                }
              } }, { key: "arrowLeftAndUp", value: function(e3) {
                var t3 = this;
                if (this.Editor.UI.someToolbarOpened) {
                  if (p.default.usedKeys.includes(e3.keyCode) && (!e3.shiftKey || e3.keyCode === f.keyCodes.TAB))
                    return;
                  this.Editor.UI.closeAllToolbars();
                }
                this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
                var n3 = this.Editor.Caret.isAtStart || this.Editor.BlockSelection.anyBlockSelected;
                e3.shiftKey && e3.keyCode === f.keyCodes.UP && n3 ? this.Editor.CrossBlockSelection.toggleBlockSelectedState(false) : ((e3.keyCode === f.keyCodes.UP || e3.keyCode === f.keyCodes.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) ? e3.preventDefault() : f.delay(function() {
                  t3.Editor.BlockManager.currentBlock && t3.Editor.BlockManager.currentBlock.updateCurrentInput();
                }, 20)(), this.Editor.BlockSelection.clearSelection(e3));
              } }, { key: "needToolbarClosing", value: function(e3) {
                var t3 = e3.keyCode === f.keyCodes.ENTER && this.Editor.Toolbar.toolbox.opened, n3 = e3.keyCode === f.keyCodes.ENTER && this.Editor.BlockSettings.opened, o3 = e3.keyCode === f.keyCodes.ENTER && this.Editor.InlineToolbar.opened, r3 = e3.keyCode === f.keyCodes.ENTER && this.Editor.ConversionToolbar.opened, i3 = e3.keyCode === f.keyCodes.TAB;
                return !(e3.shiftKey || i3 || t3 || n3 || o3 || r3);
              } }, { key: "activateToolbox", value: function() {
                this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open();
              } }, { key: "activateBlockSettings", value: function() {
                this.Editor.Toolbar.opened || (this.Editor.BlockManager.currentBlock.focused = true, this.Editor.Toolbar.moveAndOpen()), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
              } }]), n2;
            }(u.default);
            o2.default = y, y.displayName = "BlockEvents", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(61), n(9), n(19), n(8), n(383), n(113), n(384)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f, d, p, h, v, g, y, k) {
            "use strict";
            var b = n(1);
            function m(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (m = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function w(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = m(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }
            function x(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, f.default)(e2);
                if (t2) {
                  var r3 = (0, f.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, u.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = b(r2), i2 = b(i2), s = b(s), l = b(l), c = b(c), u = b(u), f = b(f), d = w(d), p = b(p), h = b(h), v = w(v), g = b(g), y = b(y);
            var C = function(e2) {
              (0, c.default)(a2, e2);
              var t2, n2, o3 = x(a2);
              function a2() {
                var e3;
                return (0, s.default)(this, a2), (e3 = o3.apply(this, arguments))._currentBlockIndex = -1, e3._blocks = null, e3;
              }
              return (0, l.default)(a2, [{ key: "currentBlockIndex", get: function() {
                return this._currentBlockIndex;
              }, set: function(e3) {
                this._blocks[this._currentBlockIndex] && this._blocks[this._currentBlockIndex].willUnselect(), this._blocks[e3] && this._blocks[e3].willSelect(), this._currentBlockIndex = e3;
              } }, { key: "firstBlock", get: function() {
                return this._blocks[0];
              } }, { key: "lastBlock", get: function() {
                return this._blocks[this._blocks.length - 1];
              } }, { key: "currentBlock", get: function() {
                return this._blocks[this.currentBlockIndex];
              }, set: function(e3) {
                this.currentBlockIndex = this.getBlockIndex(e3);
              } }, { key: "nextBlock", get: function() {
                return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
              } }, { key: "nextContentfulBlock", get: function() {
                return this.blocks.slice(this.currentBlockIndex + 1).find(function(e3) {
                  return !!e3.inputs.length;
                });
              } }, { key: "previousContentfulBlock", get: function() {
                return this.blocks.slice(0, this.currentBlockIndex).reverse().find(function(e3) {
                  return !!e3.inputs.length;
                });
              } }, { key: "previousBlock", get: function() {
                return 0 === this.currentBlockIndex ? null : this._blocks[this.currentBlockIndex - 1];
              } }, { key: "blocks", get: function() {
                return this._blocks.array;
              } }, { key: "isEditorEmpty", get: function() {
                return this.blocks.every(function(e3) {
                  return e3.isEmpty;
                });
              } }, { key: "prepare", value: function() {
                var e3 = this, t3 = new g.default(this.Editor.UI.nodes.redactor);
                this._blocks = new Proxy(t3, { set: g.default.set, get: g.default.get }), this.listeners.on(document, "copy", function(t4) {
                  return e3.Editor.BlockEvents.handleCommandC(t4);
                });
              } }, { key: "toggleReadOnly", value: function(e3) {
                e3 ? this.disableModuleBindings() : this.enableModuleBindings();
              } }, { key: "composeBlock", value: function(e3) {
                var t3 = e3.tool, n3 = e3.data, o4 = void 0 === n3 ? {} : n3, r3 = e3.id, i3 = void 0 === r3 ? void 0 : r3, a3 = e3.tunes, s2 = void 0 === a3 ? {} : a3, l2 = this.Editor.ReadOnly.isEnabled, c2 = this.Editor.Tools.blockTools.get(t3), u2 = new d.default({ id: i3, data: o4, tool: c2, api: this.Editor.API, readOnly: l2, tunesData: s2 });
                return l2 || this.bindBlockEvents(u2), u2;
              } }, { key: "insert", value: function() {
                var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t3 = e3.id, n3 = void 0 === t3 ? void 0 : t3, o4 = e3.tool, r3 = void 0 === o4 ? this.config.defaultBlock : o4, i3 = e3.data, a3 = void 0 === i3 ? {} : i3, s2 = e3.index, l2 = e3.needToFocus, c2 = void 0 === l2 || l2, u2 = e3.replace, f2 = void 0 !== u2 && u2, d2 = e3.tunes, p2 = void 0 === d2 ? {} : d2, h2 = s2;
                void 0 === h2 && (h2 = this.currentBlockIndex + (f2 ? 0 : 1));
                var v2 = this.composeBlock({ id: n3, tool: r3, data: a3, tunes: p2 });
                return f2 && this.blockDidMutated(k.BlockMutationType.Removed, this.getBlockByIndex(h2), { index: h2 }), this._blocks.insert(h2, v2, f2), this.blockDidMutated(k.BlockMutationType.Added, v2, { index: h2 }), c2 ? this.currentBlockIndex = h2 : h2 <= this.currentBlockIndex && this.currentBlockIndex++, v2;
              } }, { key: "replace", value: function(e3) {
                var t3 = e3.tool, n3 = void 0 === t3 ? this.config.defaultBlock : t3, o4 = e3.data, r3 = void 0 === o4 ? {} : o4;
                return this.insert({ tool: n3, data: r3, index: this.currentBlockIndex, replace: true });
              } }, { key: "paste", value: function(e3, t3) {
                var n3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o4 = this.insert({ tool: e3, replace: n3 });
                try {
                  o4.call(d.BlockToolAPI.ON_PASTE, t3);
                } catch (t4) {
                  v.log("".concat(e3, ": onPaste callback call is failed"), "error", t4);
                }
                return o4;
              } }, { key: "insertDefaultBlockAtIndex", value: function(e3) {
                var t3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n3 = this.composeBlock({ tool: this.config.defaultBlock });
                return this._blocks[e3] = n3, this.blockDidMutated(k.BlockMutationType.Added, n3, { index: e3 }), t3 ? this.currentBlockIndex = e3 : e3 <= this.currentBlockIndex && this.currentBlockIndex++, n3;
              } }, { key: "insertAtEnd", value: function() {
                return this.currentBlockIndex = this.blocks.length - 1, this.insert();
              } }, { key: "mergeBlocks", value: (n2 = (0, i2.default)(r2.default.mark(function e3(t3, n3) {
                var o4, i3;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        if (o4 = this._blocks.indexOf(n3), !n3.isEmpty) {
                          e4.next = 3;
                          break;
                        }
                        return e4.abrupt("return");
                      case 3:
                        return e4.next = 5, n3.data;
                      case 5:
                        if (i3 = e4.sent, v.isEmpty(i3)) {
                          e4.next = 9;
                          break;
                        }
                        return e4.next = 9, t3.mergeWith(i3);
                      case 9:
                        this.removeBlock(o4), this.currentBlockIndex = this._blocks.indexOf(t3);
                      case 11:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this);
              })), function(e3, t3) {
                return n2.apply(this, arguments);
              }) }, { key: "removeBlock", value: function() {
                var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentBlockIndex;
                if (!this.validateIndex(e3))
                  throw new Error("Can't find a Block to remove");
                var t3 = this._blocks[e3];
                t3.destroy(), this._blocks.remove(e3), this.blockDidMutated(k.BlockMutationType.Removed, t3, { index: e3 }), this.currentBlockIndex >= e3 && this.currentBlockIndex--, this.blocks.length ? 0 === e3 && (this.currentBlockIndex = 0) : (this.currentBlockIndex = -1, this.insert());
              } }, { key: "removeSelectedBlocks", value: function() {
                for (var e3, t3 = this.blocks.length - 1; t3 >= 0; t3--)
                  this.blocks[t3].selected && (this.removeBlock(t3), e3 = t3);
                return e3;
              } }, { key: "removeAllBlocks", value: function() {
                for (var e3 = this.blocks.length - 1; e3 >= 0; e3--)
                  this._blocks.remove(e3);
                this.currentBlockIndex = -1, this.insert(), this.currentBlock.firstInput.focus();
              } }, { key: "split", value: function() {
                var e3 = this.Editor.Caret.extractFragmentFromCaretPosition(), t3 = h.default.make("div");
                t3.appendChild(e3);
                var n3 = { text: h.default.isEmpty(t3) ? "" : t3.innerHTML };
                return this.insert({ data: n3 });
              } }, { key: "getBlockByIndex", value: function(e3) {
                return -1 === e3 && (e3 = this._blocks.length - 1), this._blocks[e3];
              } }, { key: "getBlockIndex", value: function(e3) {
                return this._blocks.indexOf(e3);
              } }, { key: "getBlockById", value: function(e3) {
                return this._blocks.array.find(function(t3) {
                  return t3.id === e3;
                });
              } }, { key: "getBlock", value: function(e3) {
                h.default.isElement(e3) || (e3 = e3.parentNode);
                var t3 = this._blocks.nodes, n3 = e3.closest(".".concat(d.default.CSS.wrapper)), o4 = t3.indexOf(n3);
                if (o4 >= 0)
                  return this._blocks[o4];
              } }, { key: "highlightCurrentNode", value: function() {
                this.clearFocused(), this.currentBlock.focused = true;
              } }, { key: "clearFocused", value: function() {
                this.blocks.forEach(function(e3) {
                  e3.focused = false;
                });
              } }, { key: "setCurrentBlockByChildNode", value: function(e3) {
                h.default.isElement(e3) || (e3 = e3.parentNode);
                var t3 = e3.closest(".".concat(d.default.CSS.wrapper));
                if (t3) {
                  var n3 = t3.closest(".".concat(this.Editor.UI.CSS.editorWrapper));
                  if (null == n3 ? void 0 : n3.isEqualNode(this.Editor.UI.nodes.wrapper))
                    return this.currentBlockIndex = this._blocks.nodes.indexOf(t3), this.currentBlock.updateCurrentInput(), this.currentBlock;
                }
              } }, { key: "getBlockByChildNode", value: function(e3) {
                h.default.isElement(e3) || (e3 = e3.parentNode);
                var t3 = e3.closest(".".concat(d.default.CSS.wrapper));
                return this.blocks.find(function(e4) {
                  return e4.holder === t3;
                });
              } }, { key: "swap", value: function(e3, t3) {
                this._blocks.swap(e3, t3), this.currentBlockIndex = t3;
              } }, { key: "move", value: function(e3) {
                var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.currentBlockIndex;
                isNaN(e3) || isNaN(t3) ? v.log("Warning during 'move' call: incorrect indices provided.", "warn") : this.validateIndex(e3) && this.validateIndex(t3) ? (this._blocks.move(e3, t3), this.currentBlockIndex = e3, this.blockDidMutated(k.BlockMutationType.Moved, this.currentBlock, { fromIndex: t3, toIndex: e3 })) : v.log("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
              } }, { key: "dropPointer", value: function() {
                this.currentBlockIndex = -1, this.clearFocused();
              } }, { key: "clear", value: function() {
                var e3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this._blocks.removeAll(), this.dropPointer(), e3 && this.insert(), this.Editor.UI.checkEmptiness();
              } }, { key: "destroy", value: (t2 = (0, i2.default)(r2.default.mark(function e3() {
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        return e4.next = 2, Promise.all(this.blocks.map(function(e5) {
                          return e5.destroy();
                        }));
                      case 2:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this);
              })), function() {
                return t2.apply(this, arguments);
              }) }, { key: "bindBlockEvents", value: function(e3) {
                var t3 = this, n3 = this.Editor.BlockEvents;
                this.readOnlyMutableListeners.on(e3.holder, "keydown", function(e4) {
                  n3.keydown(e4);
                }), this.readOnlyMutableListeners.on(e3.holder, "keyup", function(e4) {
                  n3.keyup(e4);
                }), this.readOnlyMutableListeners.on(e3.holder, "dragover", function(e4) {
                  n3.dragOver(e4);
                }), this.readOnlyMutableListeners.on(e3.holder, "dragleave", function(e4) {
                  n3.dragLeave(e4);
                }), e3.on("didMutated", function(e4) {
                  return t3.blockDidMutated(k.BlockMutationType.Changed, e4, { index: t3.getBlockIndex(e4) });
                });
              } }, { key: "disableModuleBindings", value: function() {
                this.readOnlyMutableListeners.clearAll();
              } }, { key: "enableModuleBindings", value: function() {
                var e3 = this;
                this.readOnlyMutableListeners.on(document, "cut", function(t3) {
                  return e3.Editor.BlockEvents.handleCommandX(t3);
                }), this.blocks.forEach(function(t3) {
                  e3.bindBlockEvents(t3);
                });
              } }, { key: "validateIndex", value: function(e3) {
                return !(e3 < 0 || e3 >= this._blocks.length);
              } }, { key: "blockDidMutated", value: function(e3, t3) {
                var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o4 = new CustomEvent(e3, { detail: Object.assign({ target: new y.default(t3) }, n3) });
                return this.Editor.ModificationsObserver.onChange(o4), t3;
              } }]), a2;
            }(p.default);
            o2.default = C, C.displayName = "BlockManager", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(9), n(8), n(19), n(116), n(25), n(66)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f, d, p, h, v) {
            "use strict";
            var g = n(1);
            function y(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (y = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function k(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, c.default)(e2);
                if (t2) {
                  var r3 = (0, c.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, l.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = g(r2), i2 = g(i2), s = g(s), l = g(l), c = g(c), u = g(u), f = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = y(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(f), d = g(d), p = g(p), h = g(h);
            var b = function(e2) {
              (0, s.default)(n2, e2);
              var t2 = k(n2);
              function n2() {
                var e3;
                return (0, r2.default)(this, n2), (e3 = t2.apply(this, arguments)).anyBlockSelectedCache = null, e3.needToSelectAll = false, e3.nativeInputSelected = false, e3.readyToBlockSelection = false, e3;
              }
              return (0, i2.default)(n2, [{ key: "sanitizerConfig", get: function() {
                return { p: {}, h1: {}, h2: {}, h3: {}, h4: {}, h5: {}, h6: {}, ol: {}, ul: {}, li: {}, br: true, img: { src: true, width: true, height: true }, a: { href: true }, b: {}, i: {}, u: {} };
              } }, { key: "allBlocksSelected", get: function() {
                return this.Editor.BlockManager.blocks.every(function(e3) {
                  return true === e3.selected;
                });
              }, set: function(e3) {
                this.Editor.BlockManager.blocks.forEach(function(t3) {
                  t3.selected = e3;
                }), this.clearCache();
              } }, { key: "anyBlockSelected", get: function() {
                var e3 = this.Editor.BlockManager;
                return null === this.anyBlockSelectedCache && (this.anyBlockSelectedCache = e3.blocks.some(function(e4) {
                  return true === e4.selected;
                })), this.anyBlockSelectedCache;
              } }, { key: "selectedBlocks", get: function() {
                return this.Editor.BlockManager.blocks.filter(function(e3) {
                  return e3.selected;
                });
              } }, { key: "prepare", value: function() {
                var e3 = this;
                this.selection = new h.default(), p.default.add({ name: "CMD+A", handler: function(t3) {
                  var n3 = e3.Editor, o3 = n3.BlockManager;
                  if (n3.ReadOnly.isEnabled)
                    return t3.preventDefault(), void e3.selectAllBlocks();
                  o3.currentBlock && e3.handleCommandA(t3);
                }, on: this.Editor.UI.nodes.redactor });
              } }, { key: "toggleReadOnly", value: function() {
                h.default.get().removeAllRanges(), this.allBlocksSelected = false;
              } }, { key: "unSelectBlockByIndex", value: function(e3) {
                var t3 = this.Editor.BlockManager;
                (isNaN(e3) ? t3.currentBlock : t3.getBlockByIndex(e3)).selected = false, this.clearCache();
              } }, { key: "clearSelection", value: function(e3) {
                var t3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n3 = this.Editor, o3 = n3.BlockManager, r3 = n3.Caret, i3 = n3.RectangleSelection;
                this.needToSelectAll = false, this.nativeInputSelected = false, this.readyToBlockSelection = false;
                var a2 = e3 && e3 instanceof KeyboardEvent, s2 = a2 && f.isPrintableKey(e3.keyCode);
                if (this.anyBlockSelected && a2 && s2 && !h.default.isSelectionExists) {
                  var l2 = o3.removeSelectedBlocks();
                  o3.insertDefaultBlockAtIndex(l2, true), r3.setToBlock(o3.currentBlock), f.delay(function() {
                    var t4 = e3.key;
                    r3.insertContentAtCaretPosition(t4.length > 1 ? "" : t4);
                  }, 20)();
                }
                this.Editor.CrossBlockSelection.clear(e3), this.anyBlockSelected && !i3.isRectActivated() ? (t3 && this.selection.restore(), this.allBlocksSelected = false) : this.Editor.RectangleSelection.clearSelection();
              } }, { key: "copySelectedBlocks", value: function(e3) {
                var t3 = this;
                e3.preventDefault();
                var n3 = d.default.make("div");
                this.selectedBlocks.forEach(function(e4) {
                  var o4 = (0, v.clean)(e4.holder.innerHTML, t3.sanitizerConfig), r4 = d.default.make("p");
                  r4.innerHTML = o4, n3.appendChild(r4);
                });
                var o3 = Array.from(n3.childNodes).map(function(e4) {
                  return e4.textContent;
                }).join("\n\n"), r3 = n3.innerHTML;
                return e3.clipboardData.setData("text/plain", o3), e3.clipboardData.setData("text/html", r3), Promise.all(this.selectedBlocks.map(function(e4) {
                  return e4.save();
                })).then(function(n4) {
                  try {
                    e3.clipboardData.setData(t3.Editor.Paste.MIME_TYPE, JSON.stringify(n4));
                  } catch (e4) {
                  }
                });
              } }, { key: "selectBlockByIndex", value: function(e3) {
                var t3, n3 = this.Editor.BlockManager;
                n3.clearFocused(), t3 = isNaN(e3) ? n3.currentBlock : n3.getBlockByIndex(e3), this.selection.save(), h.default.get().removeAllRanges(), t3.selected = true, this.clearCache(), this.Editor.InlineToolbar.close();
              } }, { key: "clearCache", value: function() {
                this.anyBlockSelectedCache = null;
              } }, { key: "destroy", value: function() {
                p.default.remove(this.Editor.UI.nodes.redactor, "CMD+A");
              } }, { key: "handleCommandA", value: function(e3) {
                if (this.Editor.RectangleSelection.clearSelection(), !d.default.isNativeInput(e3.target) || this.readyToBlockSelection) {
                  var t3 = this.Editor.BlockManager.getBlock(e3.target).inputs;
                  t3.length > 1 && !this.readyToBlockSelection ? this.readyToBlockSelection = true : 1 !== t3.length || this.needToSelectAll ? this.needToSelectAll ? (e3.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = false, this.readyToBlockSelection = false, this.Editor.ConversionToolbar.close()) : this.readyToBlockSelection && (e3.preventDefault(), this.selectBlockByIndex(), this.needToSelectAll = true) : this.needToSelectAll = true;
                } else
                  this.readyToBlockSelection = true;
              } }, { key: "selectAllBlocks", value: function() {
                this.selection.save(), h.default.get().removeAllRanges(), this.allBlocksSelected = true, this.Editor.InlineToolbar.close();
              } }]), n2;
            }(u.default);
            o2.default = b, b.displayName = "BlockSelection", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(25), n(9), n(19), n(8)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f, d, p) {
            "use strict";
            var h = n(1);
            function v(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (v = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function g(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, c.default)(e2);
                if (t2) {
                  var r3 = (0, c.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, l.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = h(r2), i2 = h(i2), s = h(s), l = h(l), c = h(c), u = h(u), f = h(f), d = h(d), p = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = v(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(p);
            var y = function(e2) {
              (0, s.default)(n2, e2);
              var t2 = g(n2);
              function n2() {
                return (0, r2.default)(this, n2), t2.apply(this, arguments);
              }
              return (0, i2.default)(n2, [{ key: "positions", get: function() {
                return { START: "start", END: "end", DEFAULT: "default" };
              } }, { key: "isAtStart", get: function() {
                var e3 = u.default.get(), t3 = d.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput), n3 = e3.focusNode;
                if (d.default.isNativeInput(t3))
                  return 0 === t3.selectionEnd;
                if (!e3.anchorNode)
                  return false;
                var o3 = n3.textContent.search(/\S/);
                -1 === o3 && (o3 = 0);
                var r3 = e3.focusOffset;
                return n3.nodeType !== Node.TEXT_NODE && n3.childNodes.length && (n3.childNodes[r3] ? (n3 = n3.childNodes[r3], r3 = 0) : r3 = (n3 = n3.childNodes[r3 - 1]).textContent.length), !(!d.default.isLineBreakTag(t3) && !d.default.isEmpty(t3) || !this.getHigherLevelSiblings(n3, "left").every(function(e4) {
                  var t4 = d.default.isLineBreakTag(e4), n4 = 1 === e4.children.length && d.default.isLineBreakTag(e4.children[0]), o4 = t4 || n4;
                  return d.default.isEmpty(e4) && !o4;
                }) || r3 !== o3) || (null === t3 || n3 === t3 && r3 <= o3);
              } }, { key: "isAtEnd", get: function() {
                var e3 = u.default.get(), t3 = e3.focusNode, n3 = d.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput, true);
                if (d.default.isNativeInput(n3))
                  return n3.selectionEnd === n3.value.length;
                if (!e3.focusNode)
                  return false;
                var o3 = e3.focusOffset;
                if (t3.nodeType !== Node.TEXT_NODE && t3.childNodes.length && (t3.childNodes[o3 - 1] ? o3 = (t3 = t3.childNodes[o3 - 1]).textContent.length : (t3 = t3.childNodes[0], o3 = 0)), d.default.isLineBreakTag(n3) || d.default.isEmpty(n3)) {
                  var r3 = this.getHigherLevelSiblings(t3, "right");
                  if (r3.every(function(e4, t4) {
                    return t4 === r3.length - 1 && d.default.isLineBreakTag(e4) || d.default.isEmpty(e4) && !d.default.isLineBreakTag(e4);
                  }) && o3 === t3.textContent.length)
                    return true;
                }
                var i3 = n3.textContent.replace(/\s+$/, "");
                return t3 === n3 && o3 >= i3.length;
              } }, { key: "setToBlock", value: function(e3) {
                var t3, n3 = this, o3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT, r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, i3 = this.Editor.BlockManager;
                switch (o3) {
                  case this.positions.START:
                    t3 = e3.firstInput;
                    break;
                  case this.positions.END:
                    t3 = e3.lastInput;
                    break;
                  default:
                    t3 = e3.currentInput;
                }
                if (t3) {
                  var a2 = d.default.getDeepestNode(t3, o3 === this.positions.END), s2 = d.default.getContentLength(a2);
                  switch (true) {
                    case o3 === this.positions.START:
                      r3 = 0;
                      break;
                    case o3 === this.positions.END:
                    case r3 > s2:
                      r3 = s2;
                  }
                  p.delay(function() {
                    n3.set(a2, r3);
                  }, 20)(), i3.setCurrentBlockByChildNode(e3.holder), i3.currentBlock.currentInput = t3;
                }
              } }, { key: "setToInput", value: function(e3) {
                var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT, n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o3 = this.Editor.BlockManager.currentBlock, r3 = d.default.getDeepestNode(e3);
                switch (t3) {
                  case this.positions.START:
                    this.set(r3, 0);
                    break;
                  case this.positions.END:
                    this.set(r3, d.default.getContentLength(r3));
                    break;
                  default:
                    n3 && this.set(r3, n3);
                }
                o3.currentInput = e3;
              } }, { key: "set", value: function(e3) {
                var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n3 = u.default.setCursor(e3, t3), o3 = n3.top, r3 = n3.bottom, i3 = window, a2 = i3.innerHeight;
                o3 < 0 && window.scrollBy(0, o3), r3 > a2 && window.scrollBy(0, r3 - a2);
              } }, { key: "setToTheLastBlock", value: function() {
                var e3 = this.Editor.BlockManager.lastBlock;
                if (e3)
                  if (e3.tool.isDefault && e3.isEmpty)
                    this.setToBlock(e3);
                  else {
                    var t3 = this.Editor.BlockManager.insertAtEnd();
                    this.setToBlock(t3);
                  }
              } }, { key: "extractFragmentFromCaretPosition", value: function() {
                var e3 = u.default.get();
                if (e3.rangeCount) {
                  var t3 = e3.getRangeAt(0), n3 = this.Editor.BlockManager.currentBlock.currentInput;
                  if (t3.deleteContents(), n3) {
                    if (d.default.isNativeInput(n3)) {
                      var o3 = n3, r3 = document.createDocumentFragment(), i3 = o3.value.substring(0, o3.selectionStart), a2 = o3.value.substring(o3.selectionStart);
                      return r3.textContent = a2, o3.value = i3, r3;
                    }
                    var s2 = t3.cloneRange();
                    return s2.selectNodeContents(n3), s2.setStart(t3.endContainer, t3.endOffset), s2.extractContents();
                  }
                }
              } }, { key: "navigateNext", value: function() {
                var e3 = this.Editor.BlockManager, t3 = e3.currentBlock, n3 = e3.nextContentfulBlock, o3 = t3.nextInput, r3 = this.isAtEnd, i3 = n3;
                if (!i3 && !o3) {
                  if (t3.tool.isDefault || !r3)
                    return false;
                  i3 = e3.insertAtEnd();
                }
                return !!r3 && (o3 ? this.setToInput(o3, this.positions.START) : this.setToBlock(i3, this.positions.START), true);
              } }, { key: "navigatePrevious", value: function() {
                var e3 = this.Editor.BlockManager, t3 = e3.currentBlock, n3 = e3.previousContentfulBlock;
                if (!t3)
                  return false;
                var o3 = t3.previousInput;
                return !(!n3 && !o3 || !this.isAtStart || (o3 ? this.setToInput(o3, this.positions.END) : this.setToBlock(n3, this.positions.END), 0));
              } }, { key: "createShadow", value: function(e3) {
                var t3 = document.createElement("span");
                t3.classList.add(n2.CSS.shadowCaret), e3.insertAdjacentElement("beforeend", t3);
              } }, { key: "restoreCaret", value: function(e3) {
                var t3 = e3.querySelector(".".concat(n2.CSS.shadowCaret));
                t3 && (new u.default().expandToTag(t3), setTimeout(function() {
                  var e4 = document.createRange();
                  e4.selectNode(t3), e4.extractContents();
                }, 50));
              } }, { key: "insertContentAtCaretPosition", value: function(e3) {
                var t3 = document.createDocumentFragment(), n3 = document.createElement("div"), o3 = u.default.get(), r3 = u.default.range;
                n3.innerHTML = e3, Array.from(n3.childNodes).forEach(function(e4) {
                  return t3.appendChild(e4);
                }), 0 === t3.childNodes.length && t3.appendChild(new Text());
                var i3 = t3.lastChild;
                r3.deleteContents(), r3.insertNode(t3);
                var a2 = document.createRange();
                a2.setStart(i3, i3.textContent.length), o3.removeAllRanges(), o3.addRange(a2);
              } }, { key: "getHigherLevelSiblings", value: function(e3, t3) {
                for (var n3 = e3, o3 = []; n3.parentNode && "true" !== n3.parentNode.contentEditable; )
                  n3 = n3.parentNode;
                for (var r3 = "left" === t3 ? "previousSibling" : "nextSibling"; n3[r3]; )
                  n3 = n3[r3], o3.push(n3);
                return o3;
              } }], [{ key: "CSS", get: function() {
                return { shadowCaret: "cdx-shadow-caret" };
              } }]), n2;
            }(f.default);
            o2.default = y, y.displayName = "Caret", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(9), n(25), n(8)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f, d, p, h) {
            "use strict";
            var v = n(1);
            function g(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (g = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function y(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, f.default)(e2);
                if (t2) {
                  var r3 = (0, f.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, u.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = v(r2), i2 = v(i2), s = v(s), l = v(l), c = v(c), u = v(u), f = v(f), d = v(d), p = v(p), h = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = g(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(h);
            var k = function(e2) {
              (0, c.default)(o3, e2);
              var t2, n2 = y(o3);
              function o3() {
                var e3;
                return (0, s.default)(this, o3), (e3 = n2.apply(this, arguments)).onMouseUp = function() {
                  e3.listeners.off(document, "mouseover", e3.onMouseOver), e3.listeners.off(document, "mouseup", e3.onMouseUp);
                }, e3.onMouseOver = function(t3) {
                  var n3 = e3.Editor, o4 = n3.BlockManager, r3 = n3.BlockSelection, i3 = o4.getBlockByChildNode(t3.relatedTarget) || e3.lastSelectedBlock, a2 = o4.getBlockByChildNode(t3.target);
                  if (i3 && a2 && a2 !== i3) {
                    if (i3 === e3.firstSelectedBlock)
                      return p.default.get().removeAllRanges(), i3.selected = true, a2.selected = true, void r3.clearCache();
                    if (a2 === e3.firstSelectedBlock)
                      return i3.selected = false, a2.selected = false, void r3.clearCache();
                    e3.Editor.InlineToolbar.close(), e3.toggleBlocksSelectedState(i3, a2), e3.lastSelectedBlock = a2;
                  }
                }, e3;
              }
              return (0, l.default)(o3, [{ key: "prepare", value: (t2 = (0, i2.default)(r2.default.mark(function e3() {
                var t3 = this;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        this.listeners.on(document, "mousedown", function(e5) {
                          t3.enableCrossBlockSelection(e5);
                        });
                      case 1:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this);
              })), function() {
                return t2.apply(this, arguments);
              }) }, { key: "watchSelection", value: function(e3) {
                if (e3.button === h.mouseButtons.LEFT) {
                  var t3 = this.Editor.BlockManager;
                  this.firstSelectedBlock = t3.getBlock(e3.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
                }
              } }, { key: "isCrossBlockSelectionStarted", get: function() {
                return !!this.firstSelectedBlock && !!this.lastSelectedBlock;
              } }, { key: "toggleBlockSelectedState", value: function() {
                var e3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], t3 = this.Editor, n3 = t3.BlockManager, o4 = t3.BlockSelection;
                this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = n3.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = true, o4.clearCache(), p.default.get().removeAllRanges());
                var r3 = n3.blocks.indexOf(this.lastSelectedBlock) + (e3 ? 1 : -1), i3 = n3.blocks[r3];
                i3 && (this.lastSelectedBlock.selected !== i3.selected ? (i3.selected = true, o4.clearCache()) : (this.lastSelectedBlock.selected = false, o4.clearCache()), this.lastSelectedBlock = i3, this.Editor.InlineToolbar.close(), i3.holder.scrollIntoView({ block: "nearest" }));
              } }, { key: "clear", value: function(e3) {
                var t3 = this.Editor, n3 = t3.BlockManager, o4 = t3.BlockSelection, r3 = t3.Caret, i3 = n3.blocks.indexOf(this.firstSelectedBlock), a2 = n3.blocks.indexOf(this.lastSelectedBlock);
                if (o4.anyBlockSelected && i3 > -1 && a2 > -1)
                  if (e3 && e3 instanceof KeyboardEvent)
                    switch (e3.keyCode) {
                      case h.keyCodes.DOWN:
                      case h.keyCodes.RIGHT:
                        r3.setToBlock(n3.blocks[Math.max(i3, a2)], r3.positions.END);
                        break;
                      case h.keyCodes.UP:
                      case h.keyCodes.LEFT:
                        r3.setToBlock(n3.blocks[Math.min(i3, a2)], r3.positions.START);
                        break;
                      default:
                        r3.setToBlock(n3.blocks[Math.max(i3, a2)], r3.positions.END);
                    }
                  else
                    r3.setToBlock(n3.blocks[Math.max(i3, a2)], r3.positions.END);
                this.firstSelectedBlock = this.lastSelectedBlock = null;
              } }, { key: "enableCrossBlockSelection", value: function(e3) {
                var t3 = this.Editor.UI;
                p.default.isCollapsed || this.Editor.BlockSelection.clearSelection(e3), t3.nodes.redactor.contains(e3.target) ? this.watchSelection(e3) : this.Editor.BlockSelection.clearSelection(e3);
              } }, { key: "toggleBlocksSelectedState", value: function(e3, t3) {
                for (var n3 = this.Editor, o4 = n3.BlockManager, r3 = n3.BlockSelection, i3 = o4.blocks.indexOf(e3), a2 = o4.blocks.indexOf(t3), s2 = e3.selected !== t3.selected, l2 = Math.min(i3, a2); l2 <= Math.max(i3, a2); l2++) {
                  var c2 = o4.blocks[l2];
                  c2 !== this.firstSelectedBlock && c2 !== (s2 ? e3 : t3) && (o4.blocks[l2].selected = !o4.blocks[l2].selected, r3.clearCache());
                }
              } }]), o3;
            }(d.default);
            o2.default = k, k.displayName = "CrossBlockSelection", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(25), n(9)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d) {
            "use strict";
            var p = n(1);
            function h(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, u.default)(e2);
                if (t2) {
                  var r3 = (0, u.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, c.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = p(r2), i2 = p(i2), a = p(a), s = p(s), l = p(l), c = p(c), u = p(u), f = p(f);
            var v = function(e2) {
              (0, l.default)(o3, e2);
              var t2, n2 = h(o3);
              function o3() {
                var e3;
                return (0, a.default)(this, o3), (e3 = n2.apply(this, arguments)).isStartedAtEditor = false, e3;
              }
              return (0, s.default)(o3, [{ key: "toggleReadOnly", value: function(e3) {
                e3 ? this.disableModuleBindings() : this.enableModuleBindings();
              } }, { key: "enableModuleBindings", value: function() {
                var e3 = this, t3 = this.Editor.UI;
                this.readOnlyMutableListeners.on(t3.nodes.holder, "drop", function() {
                  var t4 = (0, i2.default)(r2.default.mark(function t5(n3) {
                    return r2.default.wrap(function(t6) {
                      for (; ; )
                        switch (t6.prev = t6.next) {
                          case 0:
                            return t6.next = 2, e3.processDrop(n3);
                          case 2:
                          case "end":
                            return t6.stop();
                        }
                    }, t5);
                  }));
                  return function(e4) {
                    return t4.apply(this, arguments);
                  };
                }(), true), this.readOnlyMutableListeners.on(t3.nodes.holder, "dragstart", function() {
                  e3.processDragStart();
                }), this.readOnlyMutableListeners.on(t3.nodes.holder, "dragover", function(t4) {
                  e3.processDragOver(t4);
                }, true);
              } }, { key: "disableModuleBindings", value: function() {
                this.readOnlyMutableListeners.clearAll();
              } }, { key: "processDrop", value: (t2 = (0, i2.default)(r2.default.mark(function e3(t3) {
                var n3, o4, i3, a2, s2, l2;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        return n3 = this.Editor, o4 = n3.BlockManager, i3 = n3.Caret, a2 = n3.Paste, t3.preventDefault(), o4.blocks.forEach(function(e5) {
                          e5.dropTarget = false;
                        }), f.default.isAtEditor && !f.default.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = false, (s2 = o4.setCurrentBlockByChildNode(t3.target)) ? this.Editor.Caret.setToBlock(s2, i3.positions.END) : (l2 = o4.setCurrentBlockByChildNode(o4.lastBlock.holder), this.Editor.Caret.setToBlock(l2, i3.positions.END)), e4.next = 9, a2.processDataTransfer(t3.dataTransfer, true);
                      case 9:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this);
              })), function(e3) {
                return t2.apply(this, arguments);
              }) }, { key: "processDragStart", value: function() {
                f.default.isAtEditor && !f.default.isCollapsed && (this.isStartedAtEditor = true), this.Editor.InlineToolbar.close();
              } }, { key: "processDragOver", value: function(e3) {
                e3.preventDefault();
              } }]), o3;
            }((d = p(d)).default);
            o2.default = v, v.displayName = "DragNDrop", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(9), n(8)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f) {
            "use strict";
            var d = n(1);
            function p(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (p = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function h(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, c.default)(e2);
                if (t2) {
                  var r3 = (0, c.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, l.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = d(r2), i2 = d(i2), s = d(s), l = d(l), c = d(c), u = d(u), f = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = p(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(f);
            var v = function(e2) {
              (0, s.default)(n2, e2);
              var t2 = h(n2);
              function n2() {
                var e3;
                return (0, r2.default)(this, n2), (e3 = t2.apply(this, arguments)).disabled = false, e3;
              }
              return (0, i2.default)(n2, [{ key: "enable", value: function() {
                this.disabled = false;
              } }, { key: "disable", value: function() {
                this.disabled = true;
              } }, { key: "onChange", value: function(e3) {
                !this.disabled && f.isFunction(this.config.onChange) && this.config.onChange(this.Editor.API.methods, e3);
              } }]), n2;
            }(u.default);
            o2.default = v, v.displayName = "ModificationsObserver", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(20), n(30), n(41), n(21), n(2), n(3), n(5), n(6), n(4), n(9), n(19), n(8), n(66)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f, d, p, h, v, g, y) {
            "use strict";
            var k = n(1);
            function b(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (b = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function m(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, p.default)(e2);
                if (t2) {
                  var r3 = (0, p.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, d.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = k(r2), i2 = k(i2), s = k(s), l = k(l), c = k(c), u = k(u), f = k(f), d = k(d), p = k(p), h = k(h), v = k(v), g = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = b(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(g);
            var w = function(e2) {
              (0, f.default)(w2, e2);
              var t2, n2, o3, a2, d2, p2, h2, k2, b2 = m(w2);
              function w2() {
                var e3;
                return (0, c.default)(this, w2), (e3 = b2.apply(this, arguments)).MIME_TYPE = "application/x-editor-js", e3.toolsTags = {}, e3.tagsByTool = {}, e3.toolsPatterns = [], e3.toolsFiles = {}, e3.exceptionList = [], e3.processTool = function(t3) {
                  try {
                    var n3 = t3.create({}, {}, false);
                    if (false === t3.pasteConfig)
                      return void e3.exceptionList.push(t3.name);
                    if (!g.isFunction(n3.onPaste))
                      return;
                    e3.getTagsConfig(t3), e3.getFilesConfig(t3), e3.getPatternsConfig(t3);
                  } catch (e4) {
                    g.log("Paste handling for \xAB".concat(t3.name, "\xBB Tool hasn't been set up because of the error"), "warn", e4);
                  }
                }, e3.handlePasteEvent = function() {
                  var t3 = (0, l.default)(r2.default.mark(function t4(n3) {
                    var o4, i3, a3;
                    return r2.default.wrap(function(t5) {
                      for (; ; )
                        switch (t5.prev = t5.next) {
                          case 0:
                            if (o4 = e3.Editor, i3 = o4.BlockManager, a3 = o4.Toolbar, i3.currentBlock && (!e3.isNativeBehaviour(n3.target) || n3.clipboardData.types.includes("Files"))) {
                              t5.next = 3;
                              break;
                            }
                            return t5.abrupt("return");
                          case 3:
                            if (!i3.currentBlock || !e3.exceptionList.includes(i3.currentBlock.name)) {
                              t5.next = 5;
                              break;
                            }
                            return t5.abrupt("return");
                          case 5:
                            n3.preventDefault(), e3.processDataTransfer(n3.clipboardData), i3.clearFocused(), a3.close();
                          case 9:
                          case "end":
                            return t5.stop();
                        }
                    }, t4);
                  }));
                  return function(e4) {
                    return t3.apply(this, arguments);
                  };
                }(), e3;
              }
              return (0, u.default)(w2, [{ key: "prepare", value: (k2 = (0, l.default)(r2.default.mark(function e3() {
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        this.processTools();
                      case 1:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this);
              })), function() {
                return k2.apply(this, arguments);
              }) }, { key: "toggleReadOnly", value: function(e3) {
                e3 ? this.unsetCallback() : this.setCallback();
              } }, { key: "processDataTransfer", value: (h2 = (0, l.default)(r2.default.mark(function e3(t3) {
                var n3, o4, i3, a3, s2, l2, c2, u2, f2, d3 = this, p3 = arguments;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        if (n3 = p3.length > 1 && void 0 !== p3[1] && p3[1], o4 = this.Editor.Tools, !((i3 = t3.types).includes ? i3.includes("Files") : i3.contains("Files")) || g.isEmpty(this.toolsFiles)) {
                          e4.next = 8;
                          break;
                        }
                        return e4.next = 7, this.processFiles(t3.files);
                      case 7:
                        return e4.abrupt("return");
                      case 8:
                        if (a3 = t3.getData(this.MIME_TYPE), s2 = t3.getData("text/plain"), l2 = t3.getData("text/html"), !a3) {
                          e4.next = 19;
                          break;
                        }
                        return e4.prev = 12, this.insertEditorJSData(JSON.parse(a3)), e4.abrupt("return");
                      case 17:
                        e4.prev = 17, e4.t0 = e4.catch(12);
                      case 19:
                        if (n3 && s2.trim() && l2.trim() && (l2 = "<p>" + (l2.trim() ? l2 : s2) + "</p>"), c2 = Object.keys(this.toolsTags).reduce(function(e5, t4) {
                          var n4;
                          return e5[t4.toLowerCase()] = null !== (n4 = d3.toolsTags[t4].sanitizationConfig) && void 0 !== n4 ? n4 : {}, e5;
                        }, {}), u2 = Object.assign({}, c2, o4.getAllInlineToolsSanitizeConfig(), { br: {} }), (f2 = (0, y.clean)(l2, u2)).trim() && f2.trim() !== s2 && v.default.isHTMLString(f2)) {
                          e4.next = 28;
                          break;
                        }
                        return e4.next = 26, this.processText(s2);
                      case 26:
                        e4.next = 30;
                        break;
                      case 28:
                        return e4.next = 30, this.processText(f2, true);
                      case 30:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this, [[12, 17]]);
              })), function(e3) {
                return h2.apply(this, arguments);
              }) }, { key: "processText", value: (p2 = (0, l.default)(r2.default.mark(function e3(t3) {
                var n3, o4, i3, a3, s2, c2, u2, f2 = this, d3 = arguments;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        if (n3 = d3.length > 1 && void 0 !== d3[1] && d3[1], o4 = this.Editor, i3 = o4.Caret, a3 = o4.BlockManager, (s2 = n3 ? this.processHTML(t3) : this.processPlain(t3)).length) {
                          e4.next = 5;
                          break;
                        }
                        return e4.abrupt("return");
                      case 5:
                        if (1 !== s2.length) {
                          e4.next = 8;
                          break;
                        }
                        return s2[0].isBlock ? this.processSingleBlock(s2.pop()) : this.processInlinePaste(s2.pop()), e4.abrupt("return");
                      case 8:
                        c2 = a3.currentBlock && a3.currentBlock.tool.isDefault, u2 = c2 && a3.currentBlock.isEmpty, s2.map(function() {
                          var e5 = (0, l.default)(r2.default.mark(function e6(t4, n4) {
                            return r2.default.wrap(function(e7) {
                              for (; ; )
                                switch (e7.prev = e7.next) {
                                  case 0:
                                    return e7.abrupt("return", f2.insertBlock(t4, 0 === n4 && u2));
                                  case 1:
                                  case "end":
                                    return e7.stop();
                                }
                            }, e6);
                          }));
                          return function(t4, n4) {
                            return e5.apply(this, arguments);
                          };
                        }()), a3.currentBlock && i3.setToBlock(a3.currentBlock, i3.positions.END);
                      case 12:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this);
              })), function(e3) {
                return p2.apply(this, arguments);
              }) }, { key: "setCallback", value: function() {
                this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
              } }, { key: "unsetCallback", value: function() {
                this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
              } }, { key: "processTools", value: function() {
                var e3 = this.Editor.Tools.blockTools;
                Array.from(e3.values()).forEach(this.processTool);
              } }, { key: "collectTagNames", value: function(e3) {
                return g.isString(e3) ? [e3] : g.isObject(e3) ? Object.keys(e3) : [];
              } }, { key: "getTagsConfig", value: function(e3) {
                var t3 = this, n3 = e3.pasteConfig.tags || [], o4 = [];
                n3.forEach(function(n4) {
                  var r3 = t3.collectTagNames(n4);
                  o4.push.apply(o4, (0, s.default)(r3)), r3.forEach(function(o5) {
                    if (Object.prototype.hasOwnProperty.call(t3.toolsTags, o5))
                      g.log("Paste handler for \xAB".concat(e3.name, "\xBB Tool on \xAB").concat(o5, "\xBB tag is skipped ") + "because it is already used by \xAB".concat(t3.toolsTags[o5].tool.name, "\xBB Tool."), "warn");
                    else {
                      var r4 = g.isObject(n4) ? n4[o5] : null;
                      t3.toolsTags[o5.toUpperCase()] = { tool: e3, sanitizationConfig: r4 };
                    }
                  });
                }), this.tagsByTool[e3.name] = o4.map(function(e4) {
                  return e4.toUpperCase();
                });
              } }, { key: "getFilesConfig", value: function(e3) {
                var t3 = e3.pasteConfig.files, n3 = void 0 === t3 ? {} : t3, o4 = n3.extensions, r3 = n3.mimeTypes;
                (o4 || r3) && (o4 && !Array.isArray(o4) && (g.log("\xABextensions\xBB property of the onDrop config for \xAB".concat(e3.name, "\xBB Tool should be an array")), o4 = []), r3 && !Array.isArray(r3) && (g.log("\xABmimeTypes\xBB property of the onDrop config for \xAB".concat(e3.name, "\xBB Tool should be an array")), r3 = []), r3 && (r3 = r3.filter(function(t4) {
                  return !!g.isValidMimeType(t4) || (g.log("MIME type value \xAB".concat(t4, "\xBB for the \xAB").concat(e3.name, "\xBB Tool is not a valid MIME type"), "warn"), false);
                })), this.toolsFiles[e3.name] = { extensions: o4 || [], mimeTypes: r3 || [] });
              } }, { key: "getPatternsConfig", value: function(e3) {
                var t3 = this;
                e3.pasteConfig.patterns && !g.isEmpty(e3.pasteConfig.patterns) && Object.entries(e3.pasteConfig.patterns).forEach(function(n3) {
                  var o4 = (0, i2.default)(n3, 2), r3 = o4[0], a3 = o4[1];
                  a3 instanceof RegExp || g.log("Pattern ".concat(a3, " for \xAB").concat(e3.name, "\xBB Tool is skipped because it should be a Regexp instance."), "warn"), t3.toolsPatterns.push({ key: r3, pattern: a3, tool: e3 });
                });
              } }, { key: "isNativeBehaviour", value: function(e3) {
                return v.default.isNativeInput(e3);
              } }, { key: "processFiles", value: (d2 = (0, l.default)(r2.default.mark(function e3(t3) {
                var n3, o4, i3, a3, s2 = this;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        return n3 = this.Editor.BlockManager, e4.next = 3, Promise.all(Array.from(t3).map(function(e5) {
                          return s2.processFile(e5);
                        }));
                      case 3:
                        o4 = (o4 = e4.sent).filter(function(e5) {
                          return !!e5;
                        }), i3 = n3.currentBlock.tool.isDefault, a3 = i3 && n3.currentBlock.isEmpty, o4.forEach(function(e5, t4) {
                          n3.paste(e5.type, e5.event, 0 === t4 && a3);
                        });
                      case 8:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this);
              })), function(e3) {
                return d2.apply(this, arguments);
              }) }, { key: "processFile", value: (a2 = (0, l.default)(r2.default.mark(function e3(t3) {
                var n3, o4, a3, s2, l2;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        if (n3 = g.getFileExtension(t3), o4 = Object.entries(this.toolsFiles).find(function(e5) {
                          var o5 = (0, i2.default)(e5, 2), r3 = (o5[0], o5[1]), a4 = r3.mimeTypes, s3 = r3.extensions, l3 = t3.type.split("/"), c2 = (0, i2.default)(l3, 2), u2 = c2[0], f2 = c2[1], d3 = s3.find(function(e6) {
                            return e6.toLowerCase() === n3.toLowerCase();
                          }), p3 = a4.find(function(e6) {
                            var t4 = e6.split("/"), n4 = (0, i2.default)(t4, 2), o6 = n4[0], r4 = n4[1];
                            return o6 === u2 && (r4 === f2 || "*" === r4);
                          });
                          return !!d3 || !!p3;
                        })) {
                          e4.next = 4;
                          break;
                        }
                        return e4.abrupt("return");
                      case 4:
                        return a3 = (0, i2.default)(o4, 1), s2 = a3[0], l2 = this.composePasteEvent("file", { file: t3 }), e4.abrupt("return", { event: l2, type: s2 });
                      case 7:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this);
              })), function(e3) {
                return a2.apply(this, arguments);
              }) }, { key: "processHTML", value: function(e3) {
                var t3 = this, n3 = this.Editor.Tools, o4 = v.default.make("DIV");
                return o4.innerHTML = e3, this.getNodes(o4).map(function(e4) {
                  var o5, r3 = n3.defaultTool, i3 = false;
                  switch (e4.nodeType) {
                    case Node.DOCUMENT_FRAGMENT_NODE:
                      (o5 = v.default.make("div")).appendChild(e4);
                      break;
                    case Node.ELEMENT_NODE:
                      o5 = e4, i3 = true, t3.toolsTags[o5.tagName] && (r3 = t3.toolsTags[o5.tagName].tool);
                  }
                  var a3 = r3.pasteConfig.tags.reduce(function(e5, n4) {
                    return t3.collectTagNames(n4).forEach(function(t4) {
                      var o6 = g.isObject(n4) ? n4[t4] : null;
                      e5[t4.toLowerCase()] = o6 || {};
                    }), e5;
                  }, {}), s2 = Object.assign({}, a3, r3.baseSanitizeConfig);
                  if ("table" === o5.tagName.toLowerCase()) {
                    var l2 = (0, y.clean)(o5.outerHTML, s2);
                    o5 = v.default.make("div", void 0, { innerHTML: l2 }).firstChild;
                  } else
                    o5.innerHTML = (0, y.clean)(o5.innerHTML, s2);
                  var c2 = t3.composePasteEvent("tag", { data: o5 });
                  return { content: o5, isBlock: i3, tool: r3.name, event: c2 };
                }).filter(function(e4) {
                  var t4 = v.default.isEmpty(e4.content), n4 = v.default.isSingleTag(e4.content);
                  return !t4 || n4;
                });
              } }, { key: "processPlain", value: function(e3) {
                var t3 = this, n3 = this.config.defaultBlock;
                if (!e3)
                  return [];
                var o4 = n3;
                return e3.split(/\r?\n/).filter(function(e4) {
                  return e4.trim();
                }).map(function(e4) {
                  var n4 = v.default.make("div");
                  n4.textContent = e4;
                  var r3 = t3.composePasteEvent("tag", { data: n4 });
                  return { content: n4, tool: o4, isBlock: false, event: r3 };
                });
              } }, { key: "processSingleBlock", value: (o3 = (0, l.default)(r2.default.mark(function e3(t3) {
                var n3, o4, i3, a3;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        if (n3 = this.Editor, o4 = n3.Caret, i3 = n3.BlockManager, (a3 = i3.currentBlock) && t3.tool === a3.name && v.default.containsOnlyInlineElements(t3.content.innerHTML)) {
                          e4.next = 5;
                          break;
                        }
                        return this.insertBlock(t3, (null == a3 ? void 0 : a3.tool.isDefault) && a3.isEmpty), e4.abrupt("return");
                      case 5:
                        o4.insertContentAtCaretPosition(t3.content.innerHTML);
                      case 6:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this);
              })), function(e3) {
                return o3.apply(this, arguments);
              }) }, { key: "processInlinePaste", value: (n2 = (0, l.default)(r2.default.mark(function e3(t3) {
                var n3, o4, i3, a3, s2, l2, c2, u2;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        if (n3 = this.Editor, o4 = n3.BlockManager, i3 = n3.Caret, a3 = t3.content, !(o4.currentBlock && o4.currentBlock.tool.isDefault && a3.textContent.length < w2.PATTERN_PROCESSING_MAX_LENGTH)) {
                          e4.next = 12;
                          break;
                        }
                        return e4.next = 6, this.processPattern(a3.textContent);
                      case 6:
                        if (!(s2 = e4.sent)) {
                          e4.next = 12;
                          break;
                        }
                        return l2 = o4.currentBlock && o4.currentBlock.tool.isDefault && o4.currentBlock.isEmpty, c2 = o4.paste(s2.tool, s2.event, l2), i3.setToBlock(c2, i3.positions.END), e4.abrupt("return");
                      case 12:
                        o4.currentBlock && o4.currentBlock.currentInput ? (u2 = o4.currentBlock.tool.baseSanitizeConfig, document.execCommand("insertHTML", false, (0, y.clean)(a3.innerHTML, u2))) : this.insertBlock(t3);
                      case 13:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this);
              })), function(e3) {
                return n2.apply(this, arguments);
              }) }, { key: "processPattern", value: (t2 = (0, l.default)(r2.default.mark(function e3(t3) {
                var n3, o4;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        if (n3 = this.toolsPatterns.find(function(e5) {
                          var n4 = e5.pattern.exec(t3);
                          return !!n4 && t3 === n4.shift();
                        })) {
                          e4.next = 3;
                          break;
                        }
                        return e4.abrupt("return");
                      case 3:
                        return o4 = this.composePasteEvent("pattern", { key: n3.key, data: t3 }), e4.abrupt("return", { event: o4, tool: n3.tool.name });
                      case 5:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this);
              })), function(e3) {
                return t2.apply(this, arguments);
              }) }, { key: "insertBlock", value: function(e3) {
                var t3, n3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o4 = this.Editor, r3 = o4.BlockManager, i3 = o4.Caret, a3 = r3.currentBlock;
                if (n3 && a3 && a3.isEmpty)
                  return t3 = r3.paste(e3.tool, e3.event, true), void i3.setToBlock(t3, i3.positions.END);
                t3 = r3.paste(e3.tool, e3.event), i3.setToBlock(t3, i3.positions.END);
              } }, { key: "insertEditorJSData", value: function(e3) {
                var t3 = this.Editor, n3 = t3.BlockManager, o4 = t3.Caret, r3 = t3.Tools;
                (0, y.sanitizeBlocks)(e3, function(e4) {
                  return r3.blockTools.get(e4).sanitizeConfig;
                }).forEach(function(e4, t4) {
                  var r4 = e4.tool, i3 = e4.data, a3 = false;
                  0 === t4 && (a3 = n3.currentBlock && n3.currentBlock.tool.isDefault && n3.currentBlock.isEmpty);
                  var s2 = n3.insert({ tool: r4, data: i3, replace: a3 });
                  o4.setToBlock(s2, o4.positions.END);
                });
              } }, { key: "processElementNode", value: function(e3, t3, n3) {
                var o4 = Object.keys(this.toolsTags), r3 = e3, i3 = (this.toolsTags[r3.tagName] || {}).tool, a3 = this.tagsByTool[null == i3 ? void 0 : i3.name] || [], l2 = o4.includes(r3.tagName), c2 = v.default.blockElements.includes(r3.tagName.toLowerCase()), u2 = Array.from(r3.children).some(function(e4) {
                  var t4 = e4.tagName;
                  return o4.includes(t4) && !a3.includes(t4);
                }), f2 = Array.from(r3.children).some(function(e4) {
                  var t4 = e4.tagName;
                  return v.default.blockElements.includes(t4.toLowerCase());
                });
                return c2 || l2 || u2 ? l2 && !u2 || c2 && !f2 && !u2 ? [].concat((0, s.default)(t3), [n3, r3]) : void 0 : (n3.appendChild(r3), [].concat((0, s.default)(t3), [n3]));
              } }, { key: "getNodes", value: function(e3) {
                var t3, n3 = this;
                return Array.from(e3.childNodes).reduce(function e4(o4, r3) {
                  if (v.default.isEmpty(r3) && !v.default.isSingleTag(r3))
                    return o4;
                  var i3 = o4[o4.length - 1], a3 = new DocumentFragment();
                  switch (i3 && v.default.isFragment(i3) && (a3 = o4.pop()), r3.nodeType) {
                    case Node.ELEMENT_NODE:
                      if (t3 = n3.processElementNode(r3, o4, a3))
                        return t3;
                      break;
                    case Node.TEXT_NODE:
                      return a3.appendChild(r3), [].concat((0, s.default)(o4), [a3]);
                    default:
                      return [].concat((0, s.default)(o4), [a3]);
                  }
                  return [].concat((0, s.default)(o4), (0, s.default)(Array.from(r3.childNodes).reduce(e4, [])));
                }, []);
              } }, { key: "composePasteEvent", value: function(e3, t3) {
                return new CustomEvent(e3, { detail: t3 });
              } }]), w2;
            }(h.default);
            o2.default = w, w.displayName = "Paste", w.PATTERN_PROCESSING_MAX_LENGTH = 450, e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(20), n(30), n(21), n(2), n(3), n(5), n(6), n(4), n(9), n(151)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u, f, d, p) {
            "use strict";
            var h = n(1);
            function v(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, f.default)(e2);
                if (t2) {
                  var r3 = (0, f.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, u.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = h(r2), i2 = h(i2), a = h(a), s = h(s), l = h(l), c = h(c), u = h(u), f = h(f);
            var g = function(e2) {
              (0, c.default)(u2, e2);
              var t2, n2, o3 = v(u2);
              function u2() {
                var e3;
                return (0, s.default)(this, u2), (e3 = o3.apply(this, arguments)).toolsDontSupportReadOnly = [], e3.readOnlyEnabled = false, e3;
              }
              return (0, l.default)(u2, [{ key: "isEnabled", get: function() {
                return this.readOnlyEnabled;
              } }, { key: "prepare", value: (n2 = (0, a.default)(r2.default.mark(function e3() {
                var t3, n3, o4;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        t3 = this.Editor.Tools, n3 = t3.blockTools, o4 = [], Array.from(n3.entries()).forEach(function(e5) {
                          var t4 = (0, i2.default)(e5, 2), n4 = t4[0];
                          t4[1].isReadOnlySupported || o4.push(n4);
                        }), this.toolsDontSupportReadOnly = o4, this.config.readOnly && o4.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly);
                      case 7:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this);
              })), function() {
                return n2.apply(this, arguments);
              }) }, { key: "toggle", value: (t2 = (0, a.default)(r2.default.mark(function e3() {
                var t3, n3, o4, i3, a2 = arguments;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        (t3 = a2.length > 0 && void 0 !== a2[0] ? a2[0] : !this.readOnlyEnabled) && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError(), n3 = this.readOnlyEnabled, this.readOnlyEnabled = t3, e4.t0 = r2.default.keys(this.Editor);
                      case 5:
                        if ((e4.t1 = e4.t0()).done) {
                          e4.next = 12;
                          break;
                        }
                        if (o4 = e4.t1.value, this.Editor[o4].toggleReadOnly) {
                          e4.next = 9;
                          break;
                        }
                        return e4.abrupt("continue", 5);
                      case 9:
                        this.Editor[o4].toggleReadOnly(t3), e4.next = 5;
                        break;
                      case 12:
                        if (n3 !== t3) {
                          e4.next = 14;
                          break;
                        }
                        return e4.abrupt("return", this.readOnlyEnabled);
                      case 14:
                        return e4.next = 16, this.Editor.Saver.save();
                      case 16:
                        return i3 = e4.sent, e4.next = 19, this.Editor.BlockManager.clear();
                      case 19:
                        return e4.next = 21, this.Editor.Renderer.render(i3.blocks);
                      case 21:
                        return e4.abrupt("return", this.readOnlyEnabled);
                      case 22:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this);
              })), function() {
                return t2.apply(this, arguments);
              }) }, { key: "throwCriticalError", value: function() {
                throw new p.CriticalError("To enable read-only mode all connected tools should support it. Tools ".concat(this.toolsDontSupportReadOnly.join(", "), " don't support read-only mode."));
              } }]), u2;
            }((d = h(d)).default);
            o2.default = g, g.displayName = "ReadOnly", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(9), n(19), n(25), n(61), n(8)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f, d, p, h) {
            "use strict";
            var v = n(1);
            function g(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (g = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function y(e2, t2) {
              var n2 = "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
              if (!n2) {
                if (Array.isArray(e2) || (n2 = function(e3, t3) {
                  if (e3) {
                    if ("string" == typeof e3)
                      return k(e3, t3);
                    var n3 = Object.prototype.toString.call(e3).slice(8, -1);
                    return "Object" === n3 && e3.constructor && (n3 = e3.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e3) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? k(e3, t3) : void 0;
                  }
                }(e2)) || t2 && e2 && "number" == typeof e2.length) {
                  n2 && (e2 = n2);
                  var o3 = 0, r3 = function() {
                  };
                  return { s: r3, n: function() {
                    return o3 >= e2.length ? { done: true } : { done: false, value: e2[o3++] };
                  }, e: function(e3) {
                    throw e3;
                  }, f: r3 };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var i3, a2 = true, s2 = false;
              return { s: function() {
                n2 = n2.call(e2);
              }, n: function() {
                var e3 = n2.next();
                return a2 = e3.done, e3;
              }, e: function(e3) {
                s2 = true, i3 = e3;
              }, f: function() {
                try {
                  a2 || null == n2.return || n2.return();
                } finally {
                  if (s2)
                    throw i3;
                }
              } };
            }
            function k(e2, t2) {
              (null == t2 || t2 > e2.length) && (t2 = e2.length);
              for (var n2 = 0, o3 = new Array(t2); n2 < t2; n2++)
                o3[n2] = e2[n2];
              return o3;
            }
            function b(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, c.default)(e2);
                if (t2) {
                  var r3 = (0, c.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, l.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = v(r2), i2 = v(i2), s = v(s), l = v(l), c = v(c), u = v(u), f = v(f), d = v(d), p = v(p), h = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = g(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(h);
            var m = function(e2) {
              (0, s.default)(n2, e2);
              var t2 = b(n2);
              function n2() {
                var e3;
                return (0, r2.default)(this, n2), (e3 = t2.apply(this, arguments)).isRectSelectionActivated = false, e3.SCROLL_SPEED = 3, e3.HEIGHT_OF_SCROLL_ZONE = 40, e3.BOTTOM_SCROLL_ZONE = 1, e3.TOP_SCROLL_ZONE = 2, e3.MAIN_MOUSE_BUTTON = 0, e3.mousedown = false, e3.isScrolling = false, e3.inScrollZone = null, e3.startX = 0, e3.startY = 0, e3.mouseX = 0, e3.mouseY = 0, e3.stackOfSelected = [], e3.listenerIds = [], e3;
              }
              return (0, i2.default)(n2, [{ key: "prepare", value: function() {
                this.enableModuleBindings();
              } }, { key: "startSelection", value: function(e3, t3) {
                var n3 = document.elementFromPoint(e3 - window.pageXOffset, t3 - window.pageYOffset);
                n3.closest(".".concat(this.Editor.Toolbar.CSS.toolbar)) || (this.Editor.BlockSelection.allBlocksSelected = false, this.clearSelection(), this.stackOfSelected = []);
                var o3 = [".".concat(p.default.CSS.content), ".".concat(this.Editor.Toolbar.CSS.toolbar), ".".concat(this.Editor.InlineToolbar.CSS.inlineToolbar)], r3 = n3.closest("." + this.Editor.UI.CSS.editorWrapper), i3 = o3.some(function(e4) {
                  return !!n3.closest(e4);
                });
                r3 && !i3 && (this.mousedown = true, this.startX = e3, this.startY = t3);
              } }, { key: "endSelection", value: function() {
                this.mousedown = false, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
              } }, { key: "isRectActivated", value: function() {
                return this.isRectSelectionActivated;
              } }, { key: "clearSelection", value: function() {
                this.isRectSelectionActivated = false;
              } }, { key: "enableModuleBindings", value: function() {
                var e3 = this, t3 = this.genHTML().container;
                this.listeners.on(t3, "mousedown", function(t4) {
                  e3.processMouseDown(t4);
                }, false), this.listeners.on(document.body, "mousemove", h.throttle(function(t4) {
                  e3.processMouseMove(t4);
                }, 10), { passive: true }), this.listeners.on(document.body, "mouseleave", function() {
                  e3.processMouseLeave();
                }), this.listeners.on(window, "scroll", h.throttle(function(t4) {
                  e3.processScroll(t4);
                }, 10), { passive: true }), this.listeners.on(document.body, "mouseup", function() {
                  e3.processMouseUp();
                }, false);
              } }, { key: "processMouseDown", value: function(e3) {
                e3.button === this.MAIN_MOUSE_BUTTON && (null !== e3.target.closest(f.default.allInputsSelector) || this.startSelection(e3.pageX, e3.pageY));
              } }, { key: "processMouseMove", value: function(e3) {
                this.changingRectangle(e3), this.scrollByZones(e3.clientY);
              } }, { key: "processMouseLeave", value: function() {
                this.clearSelection(), this.endSelection();
              } }, { key: "processScroll", value: function(e3) {
                this.changingRectangle(e3);
              } }, { key: "processMouseUp", value: function() {
                this.clearSelection(), this.endSelection();
              } }, { key: "scrollByZones", value: function(e3) {
                this.inScrollZone = null, e3 <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - e3 <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), this.inScrollZone ? this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = true) : this.isScrolling = false;
              } }, { key: "genHTML", value: function() {
                var e3 = this.Editor.UI, t3 = e3.nodes.holder.querySelector("." + e3.CSS.editorWrapper), o3 = f.default.make("div", n2.CSS.overlay, {}), r3 = f.default.make("div", n2.CSS.overlayContainer, {}), i3 = f.default.make("div", n2.CSS.rect, {});
                return r3.appendChild(i3), o3.appendChild(r3), t3.appendChild(o3), this.overlayRectangle = i3, { container: t3, overlay: o3 };
              } }, { key: "scrollVertical", value: function(e3) {
                var t3 = this;
                if (this.inScrollZone && this.mousedown) {
                  var n3 = window.pageYOffset;
                  window.scrollBy(0, e3), this.mouseY += window.pageYOffset - n3, setTimeout(function() {
                    t3.scrollVertical(e3);
                  }, 0);
                }
              } }, { key: "changingRectangle", value: function(e3) {
                if (this.mousedown) {
                  void 0 !== e3.pageY && (this.mouseX = e3.pageX, this.mouseY = e3.pageY);
                  var t3 = this.genInfoForMouseSelection(), n3 = t3.rightPos, o3 = t3.leftPos, r3 = t3.index, i3 = this.startX > n3 && this.mouseX > n3, a2 = this.startX < o3 && this.mouseX < o3;
                  this.rectCrossesBlocks = !(i3 || a2), this.isRectSelectionActivated || (this.rectCrossesBlocks = false, this.isRectSelectionActivated = true, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), void 0 !== r3 && (this.trySelectNextBlock(r3), this.inverseSelection(), d.default.get().removeAllRanges());
                }
              } }, { key: "shrinkRectangleToPoint", value: function() {
                this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px");
              } }, { key: "inverseSelection", value: function() {
                var e3 = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
                if (this.rectCrossesBlocks && !e3) {
                  var t3, n3 = y(this.stackOfSelected);
                  try {
                    for (n3.s(); !(t3 = n3.n()).done; ) {
                      var o3 = t3.value;
                      this.Editor.BlockSelection.selectBlockByIndex(o3);
                    }
                  } catch (e4) {
                    n3.e(e4);
                  } finally {
                    n3.f();
                  }
                }
                if (!this.rectCrossesBlocks && e3) {
                  var r3, i3 = y(this.stackOfSelected);
                  try {
                    for (i3.s(); !(r3 = i3.n()).done; ) {
                      var a2 = r3.value;
                      this.Editor.BlockSelection.unSelectBlockByIndex(a2);
                    }
                  } catch (e4) {
                    i3.e(e4);
                  } finally {
                    i3.f();
                  }
                }
              } }, { key: "updateRectangleSize", value: function() {
                this.mouseY >= this.startY ? (this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.mouseY - window.pageYOffset, "px")) : (this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.top = "".concat(this.mouseY - window.pageYOffset, "px")), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.mouseX - window.pageXOffset, "px")) : (this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.left = "".concat(this.mouseX - window.pageXOffset, "px"));
              } }, { key: "genInfoForMouseSelection", value: function() {
                var e3, t3 = document.body.offsetWidth / 2, n3 = this.mouseY - window.pageYOffset, o3 = document.elementFromPoint(t3, n3), r3 = this.Editor.BlockManager.getBlockByChildNode(o3);
                void 0 !== r3 && (e3 = this.Editor.BlockManager.blocks.findIndex(function(e4) {
                  return e4.holder === r3.holder;
                }));
                var i3 = this.Editor.BlockManager.lastBlock.holder.querySelector("." + p.default.CSS.content), a2 = Number.parseInt(window.getComputedStyle(i3).width, 10) / 2;
                return { index: e3, leftPos: t3 - a2, rightPos: t3 + a2 };
              } }, { key: "addBlockInSelection", value: function(e3) {
                this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(e3), this.stackOfSelected.push(e3);
              } }, { key: "trySelectNextBlock", value: function(e3) {
                var t3 = this, n3 = this.stackOfSelected[this.stackOfSelected.length - 1] === e3, o3 = this.stackOfSelected.length;
                if (!n3) {
                  var r3 = this.stackOfSelected[o3 - 1] - this.stackOfSelected[o3 - 2] > 0, i3 = 0;
                  o3 > 1 && (i3 = r3 ? 1 : -1);
                  var a2 = e3 > this.stackOfSelected[o3 - 1] && 1 === i3, s2 = e3 < this.stackOfSelected[o3 - 1] && -1 === i3, l2 = !(a2 || s2 || 0 === i3);
                  if (l2 || !(e3 > this.stackOfSelected[o3 - 1] || void 0 === this.stackOfSelected[o3 - 1])) {
                    if (!l2 && e3 < this.stackOfSelected[o3 - 1])
                      for (var c2 = this.stackOfSelected[o3 - 1] - 1; c2 >= e3; c2--)
                        this.addBlockInSelection(c2);
                    else if (l2) {
                      var u2, f2 = o3 - 1;
                      for (u2 = e3 > this.stackOfSelected[o3 - 1] ? function() {
                        return e3 > t3.stackOfSelected[f2];
                      } : function() {
                        return e3 < t3.stackOfSelected[f2];
                      }; u2(); )
                        this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[f2]), this.stackOfSelected.pop(), f2--;
                    }
                  } else
                    for (var d2 = this.stackOfSelected[o3 - 1] + 1 || e3; d2 <= e3; d2++)
                      this.addBlockInSelection(d2);
                }
              } }], [{ key: "CSS", get: function() {
                return { overlay: "codex-editor-overlay", overlayContainer: "codex-editor-overlay__container", rect: "codex-editor-overlay__rectangle", topScrollZone: "codex-editor-overlay__scroll-zone--top", bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom" };
              } }]), n2;
            }(u.default);
            o2.default = m, m.displayName = "RectangleSelection", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(9), n(8)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f, d, p) {
            "use strict";
            var h = n(1);
            function v(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (v = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function g(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, f.default)(e2);
                if (t2) {
                  var r3 = (0, f.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, u.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = h(r2), i2 = h(i2), s = h(s), l = h(l), c = h(c), u = h(u), f = h(f), d = h(d), p = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = v(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(p);
            var y = function(e2) {
              (0, c.default)(a2, e2);
              var t2, n2, o3 = g(a2);
              function a2() {
                return (0, s.default)(this, a2), o3.apply(this, arguments);
              }
              return (0, l.default)(a2, [{ key: "render", value: (n2 = (0, i2.default)(r2.default.mark(function e3(t3) {
                var n3, o4, i3 = this;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        return n3 = t3.map(function(e5) {
                          return { function: function() {
                            return i3.insertBlock(e5);
                          } };
                        }), this.Editor.ModificationsObserver.disable(), e4.next = 4, p.sequence(n3);
                      case 4:
                        return o4 = e4.sent, this.Editor.ModificationsObserver.enable(), this.Editor.UI.checkEmptiness(), e4.abrupt("return", o4);
                      case 8:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this);
              })), function(e3) {
                return n2.apply(this, arguments);
              }) }, { key: "insertBlock", value: (t2 = (0, i2.default)(r2.default.mark(function e3(t3) {
                var n3, o4, i3, a3, s2, l2, c2, u2, f2, d2, h2;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        if (o4 = this.Editor, i3 = o4.Tools, a3 = o4.BlockManager, s2 = t3.type, l2 = t3.data, c2 = t3.tunes, u2 = t3.id, !i3.available.has(s2)) {
                          e4.next = 13;
                          break;
                        }
                        e4.prev = 3, a3.insert({ id: u2, tool: s2, data: l2, tunes: c2 }), e4.next = 11;
                        break;
                      case 7:
                        throw e4.prev = 7, e4.t0 = e4.catch(3), p.log("Block \xAB".concat(s2, "\xBB skipped because of plugins error"), "warn", l2), Error(e4.t0);
                      case 11:
                        e4.next = 18;
                        break;
                      case 13:
                        f2 = { savedData: { id: u2, type: s2, data: l2 }, title: s2 }, i3.unavailable.has(s2) && (d2 = i3.unavailable.get(s2).toolbox, h2 = null === (n3 = d2[0]) || void 0 === n3 ? void 0 : n3.title, f2.title = h2 || f2.title), a3.insert({ id: u2, tool: i3.stubTool, data: f2 }).stretched = true, p.log("Tool \xAB".concat(s2, "\xBB is not found. Check 'tools' property at your initial Editor.js config."), "warn");
                      case 18:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this, [[3, 7]]);
              })), function(e3) {
                return t2.apply(this, arguments);
              }) }]), a2;
            }(d.default);
            o2.default = y, y.displayName = "Renderer", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(20), n(21), n(2), n(3), n(5), n(6), n(4), n(9), n(8), n(66)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f, d, p, h) {
            "use strict";
            var v = n(1);
            function g(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (g = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function y(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, f.default)(e2);
                if (t2) {
                  var r3 = (0, f.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, u.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = v(r2), i2 = v(i2), s = v(s), l = v(l), c = v(c), u = v(u), f = v(f), d = v(d), p = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = g(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(p);
            var k = function(e2) {
              (0, c.default)(a2, e2);
              var t2, n2, o3 = y(a2);
              function a2() {
                return (0, s.default)(this, a2), o3.apply(this, arguments);
              }
              return (0, l.default)(a2, [{ key: "save", value: (n2 = (0, i2.default)(r2.default.mark(function e3() {
                var t3, n3, o4, i3, a3, s2, l2, c2 = this;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        return t3 = this.Editor, n3 = t3.BlockManager, o4 = t3.Tools, i3 = n3.blocks, a3 = [], e4.prev = 2, i3.forEach(function(e5) {
                          a3.push(c2.getSavedData(e5));
                        }), e4.next = 6, Promise.all(a3);
                      case 6:
                        return s2 = e4.sent, e4.next = 9, (0, h.sanitizeBlocks)(s2, function(e5) {
                          return o4.blockTools.get(e5).sanitizeConfig;
                        });
                      case 9:
                        return l2 = e4.sent, e4.abrupt("return", this.makeOutput(l2));
                      case 13:
                        e4.prev = 13, e4.t0 = e4.catch(2), p.logLabeled("Saving failed due to the Error %o", "error", e4.t0);
                      case 16:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this, [[2, 13]]);
              })), function() {
                return n2.apply(this, arguments);
              }) }, { key: "getSavedData", value: (t2 = (0, i2.default)(r2.default.mark(function e3(t3) {
                var n3, o4;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        return e4.next = 2, t3.save();
                      case 2:
                        if (n3 = e4.sent, e4.t0 = n3, !e4.t0) {
                          e4.next = 8;
                          break;
                        }
                        return e4.next = 7, t3.validate(n3.data);
                      case 7:
                        e4.t0 = e4.sent;
                      case 8:
                        return o4 = e4.t0, e4.abrupt("return", Object.assign(Object.assign({}, n3), { isValid: o4 }));
                      case 10:
                      case "end":
                        return e4.stop();
                    }
                }, e3);
              })), function(e3) {
                return t2.apply(this, arguments);
              }) }, { key: "makeOutput", value: function(e3) {
                var t3 = this, n3 = 0, o4 = [];
                return p.log("[Editor.js saving]:", "groupCollapsed"), e3.forEach(function(e4) {
                  var r3 = e4.id, i3 = e4.tool, a3 = e4.data, s2 = e4.tunes, l2 = e4.time, c2 = e4.isValid;
                  if (n3 += l2, p.log("".concat(i3.charAt(0).toUpperCase() + i3.slice(1)), "group"), !c2)
                    return p.log("Block \xAB".concat(i3, "\xBB skipped because saved data is invalid")), void p.log(void 0, "groupEnd");
                  if (p.log(a3), p.log(void 0, "groupEnd"), i3 !== t3.Editor.Tools.stubTool) {
                    var u2 = Object.assign({ id: r3, type: i3, data: a3 }, !p.isEmpty(s2) && { tunes: s2 });
                    o4.push(u2);
                  } else
                    o4.push(a3);
                }), p.log("Total", "log", n3), p.log(void 0, "groupEnd"), { time: +new Date(), blocks: o4, version: "2.26.5" };
              } }]), a2;
            }(d.default);
            o2.default = k, k.displayName = "Saver", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(30), n(2), n(3), n(5), n(6), n(4), n(9), n(19), n(25), n(85), n(54), n(68), n(389)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f, d, p, h, v, g, y) {
            "use strict";
            var k = n(1);
            function b(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (b = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function m(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, u.default)(e2);
                if (t2) {
                  var r3 = (0, u.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, c.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = k(r2), i2 = k(i2), s = k(s), l = k(l), c = k(c), u = k(u), f = k(f), d = k(d), p = k(p), h = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = b(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(h), v = k(v);
            var w = function(e2) {
              (0, l.default)(n2, e2);
              var t2 = m(n2);
              function n2() {
                var e3;
                return (0, i2.default)(this, n2), (e3 = t2.apply(this, arguments)).opened = false, e3.selection = new p.default(), e3.onOverlayClicked = function() {
                  e3.close();
                }, e3;
              }
              return (0, s.default)(n2, [{ key: "events", get: function() {
                return { opened: "block-settings-opened", closed: "block-settings-closed" };
              } }, { key: "CSS", get: function() {
                return { settings: "ce-settings" };
              } }, { key: "flipper", get: function() {
                var e3;
                return null === (e3 = this.popover) || void 0 === e3 ? void 0 : e3.flipper;
              } }, { key: "make", value: function() {
                this.nodes.wrapper = d.default.make("div");
              } }, { key: "destroy", value: function() {
                this.removeAllNodes();
              } }, { key: "open", value: function() {
                var e3 = this, t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Editor.BlockManager.currentBlock;
                this.opened = true, this.selection.save(), t3.selected = true, this.Editor.BlockSelection.clearCache();
                var n3 = t3.getTunes(), o3 = (0, r2.default)(n3, 2), i3 = o3[0], a2 = o3[1];
                this.eventsDispatcher.emit(this.events.opened), this.popover = new h.default({ className: this.CSS.settings, searchable: true, filterLabel: v.default.ui(g.I18nInternalNS.ui.popover, "Filter"), nothingFoundLabel: v.default.ui(g.I18nInternalNS.ui.popover, "Nothing found"), items: i3.map(function(t4) {
                  return e3.resolveTuneAliases(t4);
                }), customContent: a2, customContentFlippableItems: this.getControls(a2), scopeElement: this.Editor.API.methods.ui.nodes.redactor }), this.popover.on(h.PopoverEvent.OverlayClicked, this.onOverlayClicked), this.popover.on(h.PopoverEvent.Close, function() {
                  return e3.close();
                }), this.nodes.wrapper.append(this.popover.getElement()), this.popover.show();
              } }, { key: "getElement", value: function() {
                return this.nodes.wrapper;
              } }, { key: "close", value: function() {
                this.opened = false, p.default.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && (this.Editor.BlockManager.currentBlock.selected = false), this.eventsDispatcher.emit(this.events.closed), this.popover && (this.popover.off(h.PopoverEvent.OverlayClicked, this.onOverlayClicked), this.popover.destroy(), this.popover.getElement().remove(), this.popover = null);
              } }, { key: "getControls", value: function(e3) {
                var t3 = this.Editor.StylesAPI, n3 = e3.querySelectorAll(".".concat(t3.classes.settingsButton, ", ").concat(d.default.allInputsSelector));
                return Array.from(n3);
              } }, { key: "resolveTuneAliases", value: function(e3) {
                var t3 = (0, y.resolveAliases)(e3, { label: "title" });
                return e3.confirmation && (t3.confirmation = this.resolveTuneAliases(e3.confirmation)), t3;
              } }]), n2;
            }(f.default);
            o2.default = w, w.displayName = "BlockSettings", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(20), n(30), n(21), n(41), n(2), n(3), n(5), n(6), n(4), n(9), n(19), n(8), n(67), n(54), n(68), n(66)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f, d, p, h, v, g, y, k, b, m) {
            "use strict";
            var w = n(1);
            function x(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (x = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function C(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, p.default)(e2);
                if (t2) {
                  var r3 = (0, p.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, d.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = w(r2), i2 = w(i2), s = w(s), l = w(l), c = w(c), u = w(u), f = w(f), d = w(d), p = w(p), h = w(h), v = w(v), g = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = x(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(g), y = w(y), k = w(k);
            var S = function(e2) {
              (0, f.default)(a2, e2);
              var t2, n2, o3 = C(a2);
              function a2() {
                var e3;
                return (0, c.default)(this, a2), (e3 = o3.apply(this, arguments)).opened = false, e3.tools = [], e3.flipper = null, e3.togglingCallback = null, e3;
              }
              return (0, u.default)(a2, [{ key: "make", value: function() {
                this.nodes.wrapper = v.default.make("div", [a2.CSS.conversionToolbarWrapper].concat((0, l.default)(this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []))), this.nodes.tools = v.default.make("div", a2.CSS.conversionToolbarTools);
                var e3 = v.default.make("div", a2.CSS.conversionToolbarLabel, { textContent: k.default.ui(b.I18nInternalNS.ui.inlineToolbar.converter, "Convert to") });
                return this.addTools(), this.enableFlipper(), v.default.append(this.nodes.wrapper, e3), v.default.append(this.nodes.wrapper, this.nodes.tools), this.nodes.wrapper;
              } }, { key: "destroy", value: function() {
                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes();
              } }, { key: "toggle", value: function(e3) {
                this.opened ? this.close() : this.open(), g.isFunction(e3) && (this.togglingCallback = e3);
              } }, { key: "open", value: function() {
                var e3 = this;
                this.filterTools(), this.opened = true, this.nodes.wrapper.classList.add(a2.CSS.conversionToolbarShowed), window.requestAnimationFrame(function() {
                  e3.flipper.activate(e3.tools.map(function(e4) {
                    return e4.button;
                  }).filter(function(e4) {
                    return !e4.classList.contains(a2.CSS.conversionToolHidden);
                  })), e3.flipper.focusFirst(), g.isFunction(e3.togglingCallback) && e3.togglingCallback(true);
                });
              } }, { key: "close", value: function() {
                this.opened = false, this.flipper.deactivate(), this.nodes.wrapper.classList.remove(a2.CSS.conversionToolbarShowed), g.isFunction(this.togglingCallback) && this.togglingCallback(false);
              } }, { key: "hasTools", value: function() {
                return 1 !== this.tools.length || this.tools[0].name !== this.config.defaultBlock;
              } }, { key: "replaceWithBlock", value: (n2 = (0, s.default)(r2.default.mark(function e3(t3, n3) {
                var o4, i3, a3, s2, l2, c2, u2, f2, d2, p2 = this;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        return o4 = this.Editor.BlockManager.currentBlock.tool, e4.next = 3, this.Editor.BlockManager.currentBlock.save();
                      case 3:
                        if (i3 = e4.sent, a3 = i3.data, s2 = this.Editor.Tools.blockTools.get(t3), l2 = "", c2 = o4.conversionConfig.export, !g.isFunction(c2)) {
                          e4.next = 12;
                          break;
                        }
                        l2 = c2(a3), e4.next = 18;
                        break;
                      case 12:
                        if (!g.isString(c2)) {
                          e4.next = 16;
                          break;
                        }
                        l2 = a3[c2], e4.next = 18;
                        break;
                      case 16:
                        return g.log("Conversion \xABexport\xBB property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), e4.abrupt("return");
                      case 18:
                        if (u2 = (0, m.clean)(l2, s2.sanitizeConfig), f2 = {}, d2 = s2.conversionConfig.import, !g.isFunction(d2)) {
                          e4.next = 25;
                          break;
                        }
                        f2 = d2(u2), e4.next = 31;
                        break;
                      case 25:
                        if (!g.isString(d2)) {
                          e4.next = 29;
                          break;
                        }
                        f2[d2] = u2, e4.next = 31;
                        break;
                      case 29:
                        return g.log("Conversion \xABimport\xBB property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), e4.abrupt("return");
                      case 31:
                        n3 && (f2 = Object.assign(f2, n3)), this.Editor.BlockManager.replace({ tool: t3, data: f2 }), this.Editor.BlockSelection.clearSelection(), this.close(), this.Editor.InlineToolbar.close(), g.delay(function() {
                          p2.Editor.Caret.setToBlock(p2.Editor.BlockManager.currentBlock);
                        }, 10)();
                      case 37:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this);
              })), function(e3, t3) {
                return n2.apply(this, arguments);
              }) }, { key: "addTools", value: function() {
                var e3 = this, t3 = this.Editor.Tools.blockTools;
                Array.from(t3.entries()).forEach(function(t4) {
                  var n3 = (0, i2.default)(t4, 2), o4 = n3[0], r3 = n3[1], a3 = r3.conversionConfig;
                  a3 && a3.import && r3.toolbox.forEach(function(t5) {
                    return e3.addToolIfValid(o4, t5);
                  });
                });
              } }, { key: "addToolIfValid", value: function(e3, t3) {
                !g.isEmpty(t3) && t3.icon && this.addTool(e3, t3);
              } }, { key: "addTool", value: function(e3, t3) {
                var n3 = this, o4 = v.default.make("div", [a2.CSS.conversionTool]), i3 = v.default.make("div", [a2.CSS.conversionToolIcon]);
                o4.dataset.tool = e3, i3.innerHTML = t3.icon, v.default.append(o4, i3), v.default.append(o4, v.default.text(k.default.t(b.I18nInternalNS.toolNames, t3.title || g.capitalize(e3)))), v.default.append(this.nodes.tools, o4), this.tools.push({ name: e3, button: o4, toolboxItem: t3 }), this.listeners.on(o4, "click", (0, s.default)(r2.default.mark(function o5() {
                  return r2.default.wrap(function(o6) {
                    for (; ; )
                      switch (o6.prev = o6.next) {
                        case 0:
                          return o6.next = 2, n3.replaceWithBlock(e3, t3.data);
                        case 2:
                        case "end":
                          return o6.stop();
                      }
                  }, o5);
                })));
              } }, { key: "filterTools", value: (t2 = (0, s.default)(r2.default.mark(function e3() {
                var t3, n3, o4;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        return o4 = function(e5, t4) {
                          return e5.icon === t4.icon && e5.title === t4.title;
                        }, t3 = this.Editor.BlockManager.currentBlock, e4.next = 4, t3.getActiveToolboxEntry();
                      case 4:
                        n3 = e4.sent, this.tools.forEach(function(e5) {
                          var r3 = false;
                          if (n3) {
                            var i3 = o4(n3, e5.toolboxItem);
                            r3 = e5.button.dataset.tool === t3.name && i3;
                          }
                          e5.button.hidden = r3, e5.button.classList.toggle(a2.CSS.conversionToolHidden, r3);
                        });
                      case 6:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this);
              })), function() {
                return t2.apply(this, arguments);
              }) }, { key: "enableFlipper", value: function() {
                this.flipper = new y.default({ focusedItemClass: a2.CSS.conversionToolFocused });
              } }], [{ key: "CSS", get: function() {
                return { conversionToolbarWrapper: "ce-conversion-toolbar", conversionToolbarShowed: "ce-conversion-toolbar--showed", conversionToolbarTools: "ce-conversion-toolbar__tools", conversionToolbarLabel: "ce-conversion-toolbar__label", conversionTool: "ce-conversion-tool", conversionToolHidden: "ce-conversion-tool--hidden", conversionToolIcon: "ce-conversion-tool__icon", conversionToolFocused: "ce-conversion-tool--focused", conversionToolActive: "ce-conversion-tool--active" };
              } }]), a2;
            }(h.default);
            o2.default = S, S.displayName = "ConversionToolbar", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(20), n(21), n(41), n(30), n(2), n(3), n(5), n(6), n(4), n(9), n(19), n(25), n(8), n(67), n(54), n(68), n(116), n(115), n(69), n(37)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f, d, p, h, v, g, y, k, b, m, w, x, C, S) {
            "use strict";
            var T = n(1);
            function E(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (E = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function B(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, p.default)(e2);
                if (t2) {
                  var r3 = (0, p.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, d.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = T(r2), i2 = T(i2), s = T(s), l = T(l), c = T(c), u = T(u), f = T(f), d = T(d), p = T(p), h = T(h), v = T(v), g = T(g), y = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = E(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(y), k = T(k), b = T(b), w = T(w), x = T(x);
            var M = function(e2) {
              (0, f.default)(o3, e2);
              var t2, n2 = B(o3);
              function o3(e3) {
                var t3, r3 = e3.config, i3 = e3.eventsDispatcher;
                return (0, c.default)(this, o3), (t3 = n2.call(this, { config: r3, eventsDispatcher: i3 })).CSS = { inlineToolbar: "ce-inline-toolbar", inlineToolbarShowed: "ce-inline-toolbar--showed", inlineToolbarLeftOriented: "ce-inline-toolbar--left-oriented", inlineToolbarRightOriented: "ce-inline-toolbar--right-oriented", inlineToolbarShortcut: "ce-inline-toolbar__shortcut", buttonsWrapper: "ce-inline-toolbar__buttons", actionsWrapper: "ce-inline-toolbar__actions", inlineToolButton: "ce-inline-tool", inputField: "cdx-input", focusedButton: "ce-inline-tool--focused", conversionToggler: "ce-inline-toolbar__dropdown", conversionTogglerArrow: "ce-inline-toolbar__dropdown-arrow", conversionTogglerHidden: "ce-inline-toolbar__dropdown--hidden", conversionTogglerContent: "ce-inline-toolbar__dropdown-content", togglerAndButtonsWrapper: "ce-inline-toolbar__toggler-and-button-wrapper" }, t3.opened = false, t3.toolbarVerticalMargin = y.isMobileScreen() ? 20 : 6, t3.buttonsList = null, t3.width = 0, t3.flipper = null, t3.tooltip = new x.default(), t3;
              }
              return (0, u.default)(o3, [{ key: "toggleReadOnly", value: function(e3) {
                e3 ? (this.destroy(), this.Editor.ConversionToolbar.destroy()) : this.make();
              } }, { key: "tryToShow", value: function() {
                var e3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                this.allowedToShow() ? (this.move(), this.open(t3), this.Editor.Toolbar.close()) : e3 && this.close();
              } }, { key: "move", value: function() {
                var e3 = g.default.rect, t3 = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), n3 = { x: e3.x - t3.left, y: e3.y + e3.height - t3.top + this.toolbarVerticalMargin };
                e3.width && (n3.x += Math.floor(e3.width / 2));
                var o4 = n3.x - this.width / 2, r3 = n3.x + this.width / 2;
                this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarLeftOriented, o4 < this.Editor.UI.contentRect.left), this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarRightOriented, r3 > this.Editor.UI.contentRect.right), this.nodes.wrapper.style.left = Math.floor(n3.x) + "px", this.nodes.wrapper.style.top = Math.floor(n3.y) + "px";
              } }, { key: "close", value: function() {
                var e3 = this;
                this.opened && (this.Editor.ReadOnly.isEnabled || (this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed), Array.from(this.toolsInstances.entries()).forEach(function(t3) {
                  var n3 = (0, l.default)(t3, 2), o4 = n3[0], r3 = n3[1], i3 = e3.getToolShortcut(o4);
                  i3 && w.default.remove(e3.Editor.UI.nodes.redactor, i3), y.isFunction(r3.clear) && r3.clear();
                }), this.opened = false, this.flipper.deactivate(), this.Editor.ConversionToolbar.close()));
              } }, { key: "open", value: function() {
                var e3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (!this.opened) {
                  this.addToolsFiltered(), this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed), this.buttonsList = this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)), this.opened = true, e3 && this.Editor.ConversionToolbar.hasTools() ? this.setConversionTogglerContent() : this.nodes.conversionToggler.hidden = true;
                  var t3 = Array.from(this.buttonsList);
                  t3.unshift(this.nodes.conversionToggler), t3 = t3.filter(function(e4) {
                    return !e4.hidden;
                  }), this.flipper.activate(t3);
                }
              } }, { key: "containsNode", value: function(e3) {
                return this.nodes.wrapper.contains(e3);
              } }, { key: "destroy", value: function() {
                this.flipper && (this.flipper.deactivate(), this.flipper = null), this.removeAllNodes(), this.tooltip.destroy();
              } }, { key: "make", value: function() {
                var e3 = this;
                this.nodes.wrapper = v.default.make("div", [this.CSS.inlineToolbar].concat((0, s.default)(this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []))), this.nodes.togglerAndButtonsWrapper = v.default.make("div", this.CSS.togglerAndButtonsWrapper), this.nodes.buttons = v.default.make("div", this.CSS.buttonsWrapper), this.nodes.actions = v.default.make("div", this.CSS.actionsWrapper), this.listeners.on(this.nodes.wrapper, "mousedown", function(t3) {
                  t3.target.closest(".".concat(e3.CSS.actionsWrapper)) || t3.preventDefault();
                }), v.default.append(this.nodes.wrapper, [this.nodes.togglerAndButtonsWrapper, this.nodes.actions]), v.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.addConversionToggler(), v.default.append(this.nodes.togglerAndButtonsWrapper, this.nodes.buttons), this.prepareConversionToolbar(), this.recalculateWidth(), this.enableFlipper();
              } }, { key: "allowedToShow", value: function() {
                var e3 = g.default.get(), t3 = g.default.text;
                if (!e3 || !e3.anchorNode)
                  return false;
                if (e3.isCollapsed || t3.length < 1)
                  return false;
                var n3 = v.default.isElement(e3.anchorNode) ? e3.anchorNode : e3.anchorNode.parentElement;
                if (e3 && ["IMG", "INPUT"].includes(n3.tagName))
                  return false;
                if (null === n3.closest('[contenteditable="true"]'))
                  return false;
                var o4 = this.Editor.BlockManager.getBlock(e3.anchorNode);
                return !!o4 && 0 !== o4.tool.inlineTools.size;
              } }, { key: "recalculateWidth", value: function() {
                this.width = this.nodes.wrapper.offsetWidth;
              } }, { key: "addConversionToggler", value: function() {
                var e3 = this;
                this.nodes.conversionToggler = v.default.make("div", this.CSS.conversionToggler), this.nodes.conversionTogglerContent = v.default.make("div", this.CSS.conversionTogglerContent);
                var t3 = v.default.make("div", this.CSS.conversionTogglerArrow, { innerHTML: S.IconChevronDown });
                this.nodes.conversionToggler.appendChild(this.nodes.conversionTogglerContent), this.nodes.conversionToggler.appendChild(t3), this.nodes.togglerAndButtonsWrapper.appendChild(this.nodes.conversionToggler), this.listeners.on(this.nodes.conversionToggler, "click", function() {
                  e3.Editor.ConversionToolbar.toggle(function(t4) {
                    !t4 && e3.opened ? e3.flipper.activate() : e3.opened && e3.flipper.deactivate();
                  });
                }), false === y.isMobileScreen() && this.tooltip.onHover(this.nodes.conversionToggler, b.default.ui(m.I18nInternalNS.ui.inlineToolbar.converter, "Convert to"), { placement: "top", hidingDelay: 100 });
              } }, { key: "setConversionTogglerContent", value: (t2 = (0, i2.default)(r2.default.mark(function e3() {
                var t3, n3, o4, i3, a2, s2;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        return t3 = this.Editor.BlockManager, n3 = t3.currentBlock, o4 = n3.name, i3 = n3.tool.conversionConfig, a2 = i3 && i3.export, this.nodes.conversionToggler.hidden = !a2, this.nodes.conversionToggler.classList.toggle(this.CSS.conversionTogglerHidden, !a2), e4.next = 9, n3.getActiveToolboxEntry();
                      case 9:
                        if (e4.t0 = e4.sent, e4.t0) {
                          e4.next = 12;
                          break;
                        }
                        e4.t0 = {};
                      case 12:
                        s2 = e4.t0, this.nodes.conversionTogglerContent.innerHTML = s2.icon || s2.title || y.capitalize(o4);
                      case 14:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this);
              })), function() {
                return t2.apply(this, arguments);
              }) }, { key: "prepareConversionToolbar", value: function() {
                var e3 = this.Editor.ConversionToolbar.make();
                v.default.append(this.nodes.wrapper, e3);
              } }, { key: "addToolsFiltered", value: function() {
                var e3 = this, t3 = g.default.get(), n3 = this.Editor.BlockManager.getBlock(t3.anchorNode);
                this.nodes.buttons.innerHTML = "", this.nodes.actions.innerHTML = "", this.toolsInstances = /* @__PURE__ */ new Map(), Array.from(n3.tool.inlineTools.values()).forEach(function(t4) {
                  e3.addTool(t4);
                }), this.recalculateWidth();
              } }, { key: "addTool", value: function(e3) {
                var t3 = this, n3 = e3.create(), o4 = n3.render();
                if (o4) {
                  if (o4.dataset.tool = e3.name, this.nodes.buttons.appendChild(o4), this.toolsInstances.set(e3.name, n3), y.isFunction(n3.renderActions)) {
                    var r3 = n3.renderActions();
                    this.nodes.actions.appendChild(r3);
                  }
                  this.listeners.on(o4, "click", function(e4) {
                    t3.toolClicked(n3), e4.preventDefault();
                  });
                  var i3 = this.getToolShortcut(e3.name);
                  if (i3)
                    try {
                      this.enableShortcuts(n3, i3);
                    } catch (e4) {
                    }
                  var a2 = v.default.make("div"), s2 = b.default.t(m.I18nInternalNS.toolNames, e3.title || y.capitalize(e3.name));
                  a2.appendChild(v.default.text(s2)), i3 && a2.appendChild(v.default.make("div", this.CSS.inlineToolbarShortcut, { textContent: y.beautifyShortcut(i3) })), false === y.isMobileScreen() && this.tooltip.onHover(o4, a2, { placement: "top", hidingDelay: 100 }), n3.checkState(g.default.get());
                } else
                  y.log("Render method must return an instance of Node", "warn", e3.name);
              } }, { key: "getToolShortcut", value: function(e3) {
                var t3 = this.Editor.Tools, n3 = t3.inlineTools.get(e3), o4 = t3.internal.inlineTools;
                return Array.from(o4.keys()).includes(e3) ? this.inlineTools[e3][C.CommonInternalSettings.Shortcut] : n3.shortcut;
              } }, { key: "enableShortcuts", value: function(e3, t3) {
                var n3 = this;
                w.default.add({ name: t3, handler: function(t4) {
                  var o4 = n3.Editor.BlockManager.currentBlock;
                  o4 && o4.tool.enabledInlineTools && (t4.preventDefault(), n3.toolClicked(e3));
                }, on: this.Editor.UI.nodes.redactor });
              } }, { key: "toolClicked", value: function(e3) {
                var t3 = g.default.range;
                e3.surround(t3), this.checkToolsState(), void 0 !== e3.renderActions && this.flipper.deactivate();
              } }, { key: "checkToolsState", value: function() {
                this.toolsInstances.forEach(function(e3) {
                  e3.checkState(g.default.get());
                });
              } }, { key: "inlineTools", get: function() {
                var e3 = {};
                return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(function(t3) {
                  var n3 = (0, l.default)(t3, 2), o4 = n3[0], r3 = n3[1];
                  e3[o4] = r3.create();
                }), e3;
              } }, { key: "enableFlipper", value: function() {
                this.flipper = new k.default({ focusedItemClass: this.CSS.focusedButton, allowedKeys: [y.keyCodes.ENTER, y.keyCodes.TAB] });
              } }]), o3;
            }(h.default);
            o2.default = M, M.displayName = "InlineToolbar", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(20), n(41), n(30), n(21), n(2), n(3), n(5), n(6), n(4), n(7), n(390), n(9), n(8), n(391), n(392), n(393), n(394), n(395), n(399), n(400), n(401), n(185)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f, d, p, h, v, g, y, k, b, m, w, x, C, S, T, E) {
            "use strict";
            var B = n(1);
            function M(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (M = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function _(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, p.default)(e2);
                if (t2) {
                  var r3 = (0, p.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, d.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = B(r2), i2 = B(i2), s = B(s), l = B(l), c = B(c), u = B(u), f = B(f), d = B(d), p = B(p), h = B(h), v = B(v), g = B(g), y = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = M(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(y), k = B(k), b = B(b), m = B(m), w = B(w), x = B(x), C = B(C), S = B(S), T = B(T), E = B(E);
            var O = function(e2, t2, n2, o3) {
              var r3, i3 = arguments.length, a2 = i3 < 3 ? t2 : null === o3 ? o3 = Object.getOwnPropertyDescriptor(t2, n2) : o3;
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, h.default)(Reflect)) && "function" == typeof Reflect.decorate)
                a2 = Reflect.decorate(e2, t2, n2, o3);
              else
                for (var s2 = e2.length - 1; s2 >= 0; s2--)
                  (r3 = e2[s2]) && (a2 = (i3 < 3 ? r3(a2) : i3 > 3 ? r3(t2, n2, a2) : r3(t2, n2)) || a2);
              return i3 > 3 && a2 && Object.defineProperty(t2, n2, a2), a2;
            }, I = function(e2) {
              (0, f.default)(o3, e2);
              var t2, n2 = _(o3);
              function o3() {
                var e3;
                return (0, c.default)(this, o3), (e3 = n2.apply(this, arguments)).stubTool = "stub", e3.toolsAvailable = new E.default(), e3.toolsUnavailable = new E.default(), e3;
              }
              return (0, u.default)(o3, [{ key: "available", get: function() {
                return this.toolsAvailable;
              } }, { key: "unavailable", get: function() {
                return this.toolsUnavailable;
              } }, { key: "inlineTools", get: function() {
                return this.available.inlineTools;
              } }, { key: "blockTools", get: function() {
                return this.available.blockTools;
              } }, { key: "blockTunes", get: function() {
                return this.available.blockTunes;
              } }, { key: "defaultTool", get: function() {
                return this.blockTools.get(this.config.defaultBlock);
              } }, { key: "internal", get: function() {
                return this.available.internalTools;
              } }, { key: "prepare", value: (t2 = (0, l.default)(r2.default.mark(function e3() {
                var t3, n3, o4 = this;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        if (this.validateTools(), this.config.tools = y.deepMerge({}, this.internalTools, this.config.tools), Object.prototype.hasOwnProperty.call(this.config, "tools") && 0 !== Object.keys(this.config.tools).length) {
                          e4.next = 4;
                          break;
                        }
                        throw Error("Can't start without tools");
                      case 4:
                        if (t3 = this.prepareConfig(), this.factory = new x.default(t3, this.config, this.Editor.API), 0 !== (n3 = this.getListOfPrepareFunctions(t3)).length) {
                          e4.next = 9;
                          break;
                        }
                        return e4.abrupt("return", Promise.resolve());
                      case 9:
                        return e4.next = 11, y.sequence(n3, function(e5) {
                          o4.toolPrepareMethodSuccess(e5);
                        }, function(e5) {
                          o4.toolPrepareMethodFallback(e5);
                        });
                      case 11:
                        this.prepareBlockTools();
                      case 12:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this);
              })), function() {
                return t2.apply(this, arguments);
              }) }, { key: "getAllInlineToolsSanitizeConfig", value: function() {
                var e3 = {};
                return Array.from(this.inlineTools.values()).forEach(function(t3) {
                  Object.assign(e3, t3.sanitizeConfig);
                }), e3;
              } }, { key: "destroy", value: function() {
                Object.values(this.available).forEach(function() {
                  var e3 = (0, l.default)(r2.default.mark(function e4(t3) {
                    return r2.default.wrap(function(e5) {
                      for (; ; )
                        switch (e5.prev = e5.next) {
                          case 0:
                            if (!y.isFunction(t3.reset)) {
                              e5.next = 3;
                              break;
                            }
                            return e5.next = 3, t3.reset();
                          case 3:
                          case "end":
                            return e5.stop();
                        }
                    }, e4);
                  }));
                  return function(t3) {
                    return e3.apply(this, arguments);
                  };
                }());
              } }, { key: "internalTools", get: function() {
                return { bold: { class: k.default, isInternal: true }, italic: { class: b.default, isInternal: true }, link: { class: m.default, isInternal: true }, paragraph: { class: v.default, inlineToolbar: true, isInternal: true }, stub: { class: w.default, isInternal: true }, moveUp: { class: T.default, isInternal: true }, delete: { class: S.default, isInternal: true }, moveDown: { class: C.default, isInternal: true } };
              } }, { key: "toolPrepareMethodSuccess", value: function(e3) {
                var t3 = this.factory.get(e3.toolName);
                if (t3.isInline()) {
                  var n3 = ["render", "surround", "checkState"].filter(function(e4) {
                    return !t3.create()[e4];
                  });
                  if (n3.length)
                    return y.log("Incorrect Inline Tool: ".concat(t3.name, ". Some of required methods is not implemented %o"), "warn", n3), void this.toolsUnavailable.set(t3.name, t3);
                }
                this.toolsAvailable.set(t3.name, t3);
              } }, { key: "toolPrepareMethodFallback", value: function(e3) {
                this.toolsUnavailable.set(e3.toolName, this.factory.get(e3.toolName));
              } }, { key: "getListOfPrepareFunctions", value: function(e3) {
                var t3 = [];
                return Object.entries(e3).forEach(function(e4) {
                  var n3 = (0, s.default)(e4, 2), o4 = n3[0], r3 = n3[1];
                  t3.push({ function: y.isFunction(r3.class.prepare) ? r3.class.prepare : function() {
                  }, data: { toolName: o4, config: r3.config } });
                }), t3;
              } }, { key: "prepareBlockTools", value: function() {
                var e3 = this;
                Array.from(this.blockTools.values()).forEach(function(t3) {
                  e3.assignInlineToolsToBlockTool(t3), e3.assignBlockTunesToBlockTool(t3);
                });
              } }, { key: "assignInlineToolsToBlockTool", value: function(e3) {
                var t3 = this;
                false !== this.config.inlineToolbar && (true !== e3.enabledInlineTools ? Array.isArray(e3.enabledInlineTools) && (e3.inlineTools = new E.default(e3.enabledInlineTools.map(function(e4) {
                  return [e4, t3.inlineTools.get(e4)];
                }))) : e3.inlineTools = new E.default(Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map(function(e4) {
                  return [e4, t3.inlineTools.get(e4)];
                }) : Array.from(this.inlineTools.entries())));
              } }, { key: "assignBlockTunesToBlockTool", value: function(e3) {
                var t3 = this;
                if (false !== e3.enabledBlockTunes)
                  if (Array.isArray(e3.enabledBlockTunes)) {
                    var n3 = new E.default(e3.enabledBlockTunes.map(function(e4) {
                      return [e4, t3.blockTunes.get(e4)];
                    }));
                    e3.tunes = new E.default([].concat((0, i2.default)(n3), (0, i2.default)(this.blockTunes.internalTools)));
                  } else if (Array.isArray(this.config.tunes)) {
                    var o4 = new E.default(this.config.tunes.map(function(e4) {
                      return [e4, t3.blockTunes.get(e4)];
                    }));
                    e3.tunes = new E.default([].concat((0, i2.default)(o4), (0, i2.default)(this.blockTunes.internalTools)));
                  } else
                    e3.tunes = this.blockTunes.internalTools;
              } }, { key: "validateTools", value: function() {
                for (var e3 in this.config.tools)
                  if (Object.prototype.hasOwnProperty.call(this.config.tools, e3)) {
                    if (e3 in this.internalTools)
                      return;
                    var t3 = this.config.tools[e3];
                    if (!y.isFunction(t3) && !y.isFunction(t3.class))
                      throw Error("Tool \xAB".concat(e3, "\xBB must be a constructor function or an object with function in the \xABclass\xBB property"));
                  }
              } }, { key: "prepareConfig", value: function() {
                var e3 = {};
                for (var t3 in this.config.tools)
                  y.isObject(this.config.tools[t3]) ? e3[t3] = this.config.tools[t3] : e3[t3] = { class: this.config.tools[t3] };
                return e3;
              } }]), o3;
            }(g.default);
            o2.default = I, I.displayName = "Tools", O([y.cacheable], I.prototype, "getAllInlineToolsSanitizeConfig", null), e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(30), n(2), n(3), n(5), n(6), n(4), n(153)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c, u) {
            "use strict";
            var f = n(1);
            function d(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, c.default)(e2);
                if (t2) {
                  var r3 = (0, c.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, l.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = f(r2), i2 = f(i2), a = f(a), s = f(s), l = f(l), c = f(c);
            var p = function(e2) {
              (0, s.default)(n2, e2);
              var t2 = d(n2);
              function n2() {
                return (0, i2.default)(this, n2), t2.apply(this, arguments);
              }
              return (0, a.default)(n2, [{ key: "blockTools", get: function() {
                return new n2(Array.from(this.entries()).filter(function(e3) {
                  return (0, r2.default)(e3, 2)[1].isBlock();
                }));
              } }, { key: "inlineTools", get: function() {
                return new n2(Array.from(this.entries()).filter(function(e3) {
                  return (0, r2.default)(e3, 2)[1].isInline();
                }));
              } }, { key: "blockTunes", get: function() {
                return new n2(Array.from(this.entries()).filter(function(e3) {
                  return (0, r2.default)(e3, 2)[1].isTune();
                }));
              } }, { key: "internalTools", get: function() {
                return new n2(Array.from(this.entries()).filter(function(e3) {
                  return (0, r2.default)(e3, 2)[1].isInternal;
                }));
              } }, { key: "externalTools", get: function() {
                return new n2(Array.from(this.entries()).filter(function(e3) {
                  return !(0, r2.default)(e3, 2)[1].isInternal;
                }));
              } }]), n2;
            }((0, (u = f(u)).default)(Map));
            o2.default = p, p.displayName = "ToolsCollection", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(20), n(41), n(30), n(21), n(2), n(3), n(5), n(6), n(4), n(9), n(19), n(8), n(25), n(61), n(67)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f, d, p, h, v, g, y, k, b) {
            "use strict";
            var m = n(1);
            function w(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (w = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function x(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, p.default)(e2);
                if (t2) {
                  var r3 = (0, p.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, d.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = m(r2), i2 = m(i2), s = m(s), l = m(l), c = m(c), u = m(u), f = m(f), d = m(d), p = m(p), h = m(h), v = m(v), g = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = w(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(g), y = m(y), k = m(k), b = m(b);
            var C = function(e2) {
              (0, f.default)(a2, e2);
              var t2, o3 = x(a2);
              function a2() {
                var e3;
                return (0, c.default)(this, a2), (e3 = o3.apply(this, arguments)).isMobile = false, e3.contentRectCache = void 0, e3.resizeDebouncer = g.debounce(function() {
                  e3.windowResize();
                }, 200), e3;
              }
              return (0, u.default)(a2, [{ key: "events", get: function() {
                return { blockHovered: "block-hovered" };
              } }, { key: "CSS", get: function() {
                return { editorWrapper: "codex-editor", editorWrapperNarrow: "codex-editor--narrow", editorZone: "codex-editor__redactor", editorZoneHidden: "codex-editor__redactor--hidden", editorLoader: "codex-editor__loader", editorEmpty: "codex-editor--empty", editorRtlFix: "codex-editor--rtl" };
              } }, { key: "contentRect", get: function() {
                if (this.contentRectCache)
                  return this.contentRectCache;
                var e3 = this.nodes.wrapper.querySelector(".".concat(k.default.CSS.content));
                return e3 ? (this.contentRectCache = e3.getBoundingClientRect(), this.contentRectCache) : { width: 650, left: 0, right: 0 };
              } }, { key: "addLoader", value: function() {
                this.nodes.loader = v.default.make("div", this.CSS.editorLoader), this.nodes.wrapper.prepend(this.nodes.loader), this.nodes.redactor.classList.add(this.CSS.editorZoneHidden);
              } }, { key: "removeLoader", value: function() {
                this.nodes.loader.remove(), this.nodes.redactor.classList.remove(this.CSS.editorZoneHidden);
              } }, { key: "prepare", value: (t2 = (0, l.default)(r2.default.mark(function e3() {
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        this.checkIsMobile(), this.make(), this.addLoader(), this.loadStyles();
                      case 4:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this);
              })), function() {
                return t2.apply(this, arguments);
              }) }, { key: "toggleReadOnly", value: function(e3) {
                e3 ? this.disableModuleBindings() : this.enableModuleBindings();
              } }, { key: "checkEmptiness", value: function() {
                var e3 = this.Editor.BlockManager;
                this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, e3.isEditorEmpty);
              } }, { key: "someToolbarOpened", get: function() {
                var e3 = this.Editor, t3 = e3.Toolbar, n2 = e3.BlockSettings, o4 = e3.InlineToolbar, r3 = e3.ConversionToolbar;
                return n2.opened || o4.opened || r3.opened || t3.toolbox.opened;
              } }, { key: "someFlipperButtonFocused", get: function() {
                return !!this.Editor.Toolbar.toolbox.hasFocus() || Object.entries(this.Editor).filter(function(e3) {
                  var t3 = (0, s.default)(e3, 2);
                  return t3[0], t3[1].flipper instanceof b.default;
                }).some(function(e3) {
                  var t3 = (0, s.default)(e3, 2);
                  return t3[0], t3[1].flipper.hasFocus();
                });
              } }, { key: "destroy", value: function() {
                this.nodes.holder.innerHTML = "";
              } }, { key: "closeAllToolbars", value: function() {
                var e3 = this.Editor, t3 = e3.Toolbar, n2 = e3.BlockSettings, o4 = e3.InlineToolbar, r3 = e3.ConversionToolbar;
                n2.close(), o4.close(), r3.close(), t3.toolbox.close();
              } }, { key: "checkIsMobile", value: function() {
                this.isMobile = window.innerWidth < g.mobileScreenBreakpoint;
              } }, { key: "make", value: function() {
                this.nodes.holder = v.default.getHolder(this.config.holder), this.nodes.wrapper = v.default.make("div", [this.CSS.editorWrapper].concat((0, i2.default)(this.isRtl ? [this.CSS.editorRtlFix] : []))), this.nodes.redactor = v.default.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);
              } }, { key: "loadStyles", value: function() {
                var e3 = n(402);
                if (!v.default.get("editor-js-styles")) {
                  var t3 = v.default.make("style", null, { id: "editor-js-styles", textContent: e3.toString() });
                  v.default.prepend(document.head, t3);
                }
              } }, { key: "enableModuleBindings", value: function() {
                var e3 = this;
                this.readOnlyMutableListeners.on(this.nodes.redactor, "click", function(t3) {
                  e3.redactorClicked(t3);
                }, false), this.readOnlyMutableListeners.on(this.nodes.redactor, "mousedown", function(t3) {
                  e3.documentTouched(t3);
                }, true), this.readOnlyMutableListeners.on(this.nodes.redactor, "touchstart", function(t3) {
                  e3.documentTouched(t3);
                }, true), this.readOnlyMutableListeners.on(document, "keydown", function(t3) {
                  e3.documentKeydown(t3);
                }, true), this.readOnlyMutableListeners.on(document, "mousedown", function(t3) {
                  e3.documentClicked(t3);
                }, true), this.readOnlyMutableListeners.on(document, "selectionchange", function() {
                  e3.selectionChanged();
                }, true), this.readOnlyMutableListeners.on(window, "resize", function() {
                  e3.resizeDebouncer();
                }, { passive: true }), this.watchBlockHoveredEvents();
              } }, { key: "watchBlockHoveredEvents", value: function() {
                var e3, t3 = this;
                this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", g.throttle(function(n2) {
                  var o4 = n2.target.closest(".ce-block");
                  t3.Editor.BlockSelection.anyBlockSelected || o4 && e3 !== o4 && (e3 = o4, t3.eventsDispatcher.emit(t3.events.blockHovered, { block: t3.Editor.BlockManager.getBlockByChildNode(o4) }));
                }, 20), { passive: true });
              } }, { key: "disableModuleBindings", value: function() {
                this.readOnlyMutableListeners.clearAll();
              } }, { key: "windowResize", value: function() {
                this.contentRectCache = null, this.checkIsMobile();
              } }, { key: "documentKeydown", value: function(e3) {
                switch (e3.keyCode) {
                  case g.keyCodes.ENTER:
                    this.enterPressed(e3);
                    break;
                  case g.keyCodes.BACKSPACE:
                    this.backspacePressed(e3);
                    break;
                  case g.keyCodes.ESC:
                    this.escapePressed(e3);
                    break;
                  default:
                    this.defaultBehaviour(e3);
                }
              } }, { key: "defaultBehaviour", value: function(e3) {
                var t3 = this.Editor.BlockManager.currentBlock, n2 = e3.target.closest(".".concat(this.CSS.editorWrapper)), o4 = e3.altKey || e3.ctrlKey || e3.metaKey || e3.shiftKey;
                void 0 === t3 || null !== n2 ? n2 || t3 && o4 || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close()) : this.Editor.BlockEvents.keydown(e3);
              } }, { key: "backspacePressed", value: function(e3) {
                var t3 = this.Editor, n2 = t3.BlockManager, o4 = t3.BlockSelection, r3 = t3.Caret;
                if (o4.anyBlockSelected && !y.default.isSelectionExists) {
                  var i3 = n2.removeSelectedBlocks();
                  r3.setToBlock(n2.insertDefaultBlockAtIndex(i3, true), r3.positions.START), o4.clearSelection(e3), e3.preventDefault(), e3.stopPropagation(), e3.stopImmediatePropagation();
                }
              } }, { key: "escapePressed", value: function(e3) {
                this.Editor.BlockSelection.clearSelection(e3), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.ConversionToolbar.opened ? this.Editor.ConversionToolbar.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
              } }, { key: "enterPressed", value: function(e3) {
                var t3 = this.Editor, n2 = t3.BlockManager, o4 = t3.BlockSelection, r3 = n2.currentBlockIndex >= 0;
                if (o4.anyBlockSelected && !y.default.isSelectionExists)
                  return o4.clearSelection(e3), e3.preventDefault(), e3.stopImmediatePropagation(), void e3.stopPropagation();
                if (!this.someToolbarOpened && r3 && "BODY" === e3.target.tagName) {
                  var i3 = this.Editor.BlockManager.insert();
                  this.Editor.Caret.setToBlock(i3), this.Editor.BlockManager.highlightCurrentNode(), this.Editor.Toolbar.moveAndOpen(i3);
                }
                this.Editor.BlockSelection.clearSelection(e3);
              } }, { key: "documentClicked", value: function(e3) {
                if (e3.isTrusted) {
                  var t3 = e3.target;
                  this.nodes.holder.contains(t3) || y.default.isAtEditor || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close());
                  var n2 = this.Editor.BlockSettings.nodes.wrapper.contains(t3), o4 = this.Editor.Toolbar.nodes.settingsToggler.contains(t3), r3 = n2 || o4;
                  if (this.Editor.BlockSettings.opened && !r3) {
                    this.Editor.BlockSettings.close();
                    var i3 = this.Editor.BlockManager.getBlockByChildNode(t3);
                    this.Editor.Toolbar.moveAndOpen(i3);
                  }
                  this.Editor.BlockSelection.clearSelection(e3);
                }
              } }, { key: "documentTouched", value: function(e3) {
                var t3 = e3.target;
                if (t3 === this.nodes.redactor) {
                  var n2 = e3 instanceof MouseEvent ? e3.clientX : e3.touches[0].clientX, o4 = e3 instanceof MouseEvent ? e3.clientY : e3.touches[0].clientY;
                  t3 = document.elementFromPoint(n2, o4);
                }
                try {
                  this.Editor.BlockManager.setCurrentBlockByChildNode(t3), this.Editor.BlockManager.highlightCurrentNode();
                } catch (e4) {
                  this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
                }
                this.Editor.Toolbar.moveAndOpen();
              } }, { key: "redactorClicked", value: function(e3) {
                var t3 = this.Editor.BlockSelection;
                if (y.default.isCollapsed) {
                  var n2 = function() {
                    e3.stopImmediatePropagation(), e3.stopPropagation();
                  }, o4 = e3.target, r3 = e3.metaKey || e3.ctrlKey;
                  if (v.default.isAnchor(o4) && r3) {
                    n2();
                    var i3 = o4.getAttribute("href"), a3 = g.getValidUrl(i3);
                    g.openTab(a3);
                  } else {
                    var s2 = this.Editor.BlockManager.getBlockByIndex(-1), l2 = v.default.offset(s2.holder).bottom, c2 = e3.pageY;
                    if (e3.target instanceof Element && e3.target.isEqualNode(this.nodes.redactor) && !t3.anyBlockSelected && l2 < c2) {
                      n2();
                      var u2 = this.Editor, f2 = u2.BlockManager, d2 = u2.Caret, p2 = u2.Toolbar;
                      f2.lastBlock.tool.isDefault && f2.lastBlock.isEmpty || f2.insertAtEnd(), d2.setToTheLastBlock(), p2.moveAndOpen(f2.lastBlock);
                    }
                  }
                }
              } }, { key: "selectionChanged", value: function() {
                var e3 = this.Editor, t3 = e3.CrossBlockSelection, n2 = e3.BlockSelection, o4 = y.default.anchorElement;
                if (t3.isCrossBlockSelectionStarted && n2.anyBlockSelected && y.default.get().removeAllRanges(), o4) {
                  var r3 = null === o4.closest(".".concat(k.default.CSS.content));
                  if (r3 && (this.Editor.InlineToolbar.containsNode(o4) || this.Editor.InlineToolbar.close(), "true" !== o4.dataset.inlineToolbar))
                    return;
                  this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(o4);
                  var i3 = true !== r3;
                  this.Editor.InlineToolbar.tryToShow(true, i3);
                } else
                  y.default.range || this.Editor.InlineToolbar.close();
              } }]), a2;
            }(h.default);
            o2.default = C, C.displayName = "UI", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          n(188), e.exports = n(361);
        }, function(e, t, n) {
          n(189);
        }, function(e, t, n) {
          "use strict";
          n(190), n(333), n(335), n(338), n(340), n(342), n(344), n(346), n(348), n(350), n(352), n(354), n(356), n(360);
        }, function(e, t, n) {
          n(191), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(213), n(214), n(215), n(216), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(230), n(231), n(232), n(233), n(234), n(235), n(237), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(255), n(256), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264), n(265), n(266), n(267), n(268), n(269), n(270), n(272), n(273), n(275), n(276), n(277), n(278), n(279), n(280), n(281), n(283), n(284), n(285), n(286), n(287), n(288), n(289), n(290), n(291), n(292), n(293), n(294), n(295), n(106), n(296), n(137), n(297), n(138), n(298), n(299), n(300), n(301), n(139), n(304), n(305), n(306), n(307), n(308), n(309), n(310), n(311), n(312), n(313), n(314), n(315), n(316), n(317), n(318), n(319), n(320), n(321), n(322), n(323), n(324), n(325), n(326), n(327), n(328), n(329), n(330), n(331), n(332), e.exports = n(16);
        }, function(e, t, n) {
          "use strict";
          var o = n(10), r = n(26), i = n(17), a = n(0), s = n(23), l = n(43).KEY, c = n(11), u = n(70), f = n(55), d = n(45), p = n(14), h = n(87), v = n(118), g = n(193), y = n(73), k = n(12), b = n(13), m = n(22), w = n(28), x = n(42), C = n(44), S = n(49), T = n(121), E = n(34), B = n(72), M = n(18), _ = n(47), O = E.f, I = M.f, L = T.f, P = o.Symbol, j = o.JSON, R = j && j.stringify, A = p("_hidden"), N = p("toPrimitive"), D = {}.propertyIsEnumerable, F = u("symbol-registry"), H = u("symbols"), W = u("op-symbols"), U = Object.prototype, z = "function" == typeof P && !!B.f, V = o.QObject, Y = !V || !V.prototype || !V.prototype.findChild, X = i && c(function() {
            return 7 != S(I({}, "a", { get: function() {
              return I(this, "a", { value: 7 }).a;
            } })).a;
          }) ? function(e2, t2, n2) {
            var o2 = O(U, t2);
            o2 && delete U[t2], I(e2, t2, n2), o2 && e2 !== U && I(U, t2, o2);
          } : I, G = function(e2) {
            var t2 = H[e2] = S(P.prototype);
            return t2._k = e2, t2;
          }, K = z && "symbol" == typeof P.iterator ? function(e2) {
            return "symbol" == typeof e2;
          } : function(e2) {
            return e2 instanceof P;
          }, Z = function(e2, t2, n2) {
            return e2 === U && Z(W, t2, n2), k(e2), t2 = x(t2, true), k(n2), r(H, t2) ? (n2.enumerable ? (r(e2, A) && e2[A][t2] && (e2[A][t2] = false), n2 = S(n2, { enumerable: C(0, false) })) : (r(e2, A) || I(e2, A, C(1, {})), e2[A][t2] = true), X(e2, t2, n2)) : I(e2, t2, n2);
          }, q = function(e2, t2) {
            k(e2);
            for (var n2, o2 = g(t2 = w(t2)), r2 = 0, i2 = o2.length; i2 > r2; )
              Z(e2, n2 = o2[r2++], t2[n2]);
            return e2;
          }, J = function(e2) {
            var t2 = D.call(this, e2 = x(e2, true));
            return !(this === U && r(H, e2) && !r(W, e2)) && (!(t2 || !r(this, e2) || !r(H, e2) || r(this, A) && this[A][e2]) || t2);
          }, $2 = function(e2, t2) {
            if (e2 = w(e2), t2 = x(t2, true), e2 !== U || !r(H, t2) || r(W, t2)) {
              var n2 = O(e2, t2);
              return !n2 || !r(H, t2) || r(e2, A) && e2[A][t2] || (n2.enumerable = true), n2;
            }
          }, Q = function(e2) {
            for (var t2, n2 = L(w(e2)), o2 = [], i2 = 0; n2.length > i2; )
              r(H, t2 = n2[i2++]) || t2 == A || t2 == l || o2.push(t2);
            return o2;
          }, ee = function(e2) {
            for (var t2, n2 = e2 === U, o2 = L(n2 ? W : w(e2)), i2 = [], a2 = 0; o2.length > a2; )
              !r(H, t2 = o2[a2++]) || n2 && !r(U, t2) || i2.push(H[t2]);
            return i2;
          };
          z || (s((P = function() {
            if (this instanceof P)
              throw TypeError("Symbol is not a constructor!");
            var e2 = d(arguments.length > 0 ? arguments[0] : void 0), t2 = function(n2) {
              this === U && t2.call(W, n2), r(this, A) && r(this[A], e2) && (this[A][e2] = false), X(this, e2, C(1, n2));
            };
            return i && Y && X(U, e2, { configurable: true, set: t2 }), G(e2);
          }).prototype, "toString", function() {
            return this._k;
          }), E.f = $2, M.f = Z, n(50).f = T.f = Q, n(63).f = J, B.f = ee, i && !n(46) && s(U, "propertyIsEnumerable", J, true), h.f = function(e2) {
            return G(p(e2));
          }), a(a.G + a.W + a.F * !z, { Symbol: P });
          for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne; )
            p(te[ne++]);
          for (var oe = _(p.store), re = 0; oe.length > re; )
            v(oe[re++]);
          a(a.S + a.F * !z, "Symbol", { for: function(e2) {
            return r(F, e2 += "") ? F[e2] : F[e2] = P(e2);
          }, keyFor: function(e2) {
            if (!K(e2))
              throw TypeError(e2 + " is not a symbol!");
            for (var t2 in F)
              if (F[t2] === e2)
                return t2;
          }, useSetter: function() {
            Y = true;
          }, useSimple: function() {
            Y = false;
          } }), a(a.S + a.F * !z, "Object", { create: function(e2, t2) {
            return void 0 === t2 ? S(e2) : q(S(e2), t2);
          }, defineProperty: Z, defineProperties: q, getOwnPropertyDescriptor: $2, getOwnPropertyNames: Q, getOwnPropertySymbols: ee });
          var ie = c(function() {
            B.f(1);
          });
          a(a.S + a.F * ie, "Object", { getOwnPropertySymbols: function(e2) {
            return B.f(m(e2));
          } }), j && a(a.S + a.F * (!z || c(function() {
            var e2 = P();
            return "[null]" != R([e2]) || "{}" != R({ a: e2 }) || "{}" != R(Object(e2));
          })), "JSON", { stringify: function(e2) {
            for (var t2, n2, o2 = [e2], r2 = 1; arguments.length > r2; )
              o2.push(arguments[r2++]);
            if (n2 = t2 = o2[1], (b(t2) || void 0 !== e2) && !K(e2))
              return y(t2) || (t2 = function(e3, t3) {
                if ("function" == typeof n2 && (t3 = n2.call(this, e3, t3)), !K(t3))
                  return t3;
              }), o2[1] = t2, R.apply(j, o2);
          } }), P.prototype[N] || n(27)(P.prototype, N, P.prototype.valueOf), f(P, "Symbol"), f(Math, "Math", true), f(o.JSON, "JSON", true);
        }, function(e, t, n) {
          e.exports = n(70)("native-function-to-string", Function.toString);
        }, function(e, t, n) {
          var o = n(47), r = n(72), i = n(63);
          e.exports = function(e2) {
            var t2 = o(e2), n2 = r.f;
            if (n2)
              for (var a, s = n2(e2), l = i.f, c = 0; s.length > c; )
                l.call(e2, a = s[c++]) && t2.push(a);
            return t2;
          };
        }, function(e, t, n) {
          var o = n(0);
          o(o.S, "Object", { create: n(49) });
        }, function(e, t, n) {
          var o = n(0);
          o(o.S + o.F * !n(17), "Object", { defineProperty: n(18).f });
        }, function(e, t, n) {
          var o = n(0);
          o(o.S + o.F * !n(17), "Object", { defineProperties: n(120) });
        }, function(e, t, n) {
          var o = n(28), r = n(34).f;
          n(35)("getOwnPropertyDescriptor", function() {
            return function(e2, t2) {
              return r(o(e2), t2);
            };
          });
        }, function(e, t, n) {
          var o = n(22), r = n(51);
          n(35)("getPrototypeOf", function() {
            return function(e2) {
              return r(o(e2));
            };
          });
        }, function(e, t, n) {
          var o = n(22), r = n(47);
          n(35)("keys", function() {
            return function(e2) {
              return r(o(e2));
            };
          });
        }, function(e, t, n) {
          n(35)("getOwnPropertyNames", function() {
            return n(121).f;
          });
        }, function(e, t, n) {
          var o = n(13), r = n(43).onFreeze;
          n(35)("freeze", function(e2) {
            return function(t2) {
              return e2 && o(t2) ? e2(r(t2)) : t2;
            };
          });
        }, function(e, t, n) {
          var o = n(13), r = n(43).onFreeze;
          n(35)("seal", function(e2) {
            return function(t2) {
              return e2 && o(t2) ? e2(r(t2)) : t2;
            };
          });
        }, function(e, t, n) {
          var o = n(13), r = n(43).onFreeze;
          n(35)("preventExtensions", function(e2) {
            return function(t2) {
              return e2 && o(t2) ? e2(r(t2)) : t2;
            };
          });
        }, function(e, t, n) {
          var o = n(13);
          n(35)("isFrozen", function(e2) {
            return function(t2) {
              return !o(t2) || !!e2 && e2(t2);
            };
          });
        }, function(e, t, n) {
          var o = n(13);
          n(35)("isSealed", function(e2) {
            return function(t2) {
              return !o(t2) || !!e2 && e2(t2);
            };
          });
        }, function(e, t, n) {
          var o = n(13);
          n(35)("isExtensible", function(e2) {
            return function(t2) {
              return !!o(t2) && (!e2 || e2(t2));
            };
          });
        }, function(e, t, n) {
          var o = n(0);
          o(o.S + o.F, "Object", { assign: n(122) });
        }, function(e, t, n) {
          var o = n(0);
          o(o.S, "Object", { is: n(123) });
        }, function(e, t, n) {
          var o = n(0);
          o(o.S, "Object", { setPrototypeOf: n(91).set });
        }, function(e, t, n) {
          "use strict";
          var o = n(64), r = {};
          r[n(14)("toStringTag")] = "z", r + "" != "[object z]" && n(23)(Object.prototype, "toString", function() {
            return "[object " + o(this) + "]";
          }, true);
        }, function(e, t, n) {
          var o = n(0);
          o(o.P, "Function", { bind: n(124) });
        }, function(e, t, n) {
          var o = n(18).f, r = Function.prototype, i = /^\s*function ([^ (]*)/;
          "name" in r || n(17) && o(r, "name", { configurable: true, get: function() {
            try {
              return ("" + this).match(i)[1];
            } catch (e2) {
              return "";
            }
          } });
        }, function(e, t, n) {
          "use strict";
          var o = n(13), r = n(51), i = n(14)("hasInstance"), a = Function.prototype;
          i in a || n(18).f(a, i, { value: function(e2) {
            if ("function" != typeof this || !o(e2))
              return false;
            if (!o(this.prototype))
              return e2 instanceof this;
            for (; e2 = r(e2); )
              if (this.prototype === e2)
                return true;
            return false;
          } });
        }, function(e, t, n) {
          var o = n(0), r = n(126);
          o(o.G + o.F * (parseInt != r), { parseInt: r });
        }, function(e, t, n) {
          var o = n(0), r = n(127);
          o(o.G + o.F * (parseFloat != r), { parseFloat: r });
        }, function(e, t, n) {
          "use strict";
          var o = n(10), r = n(26), i = n(38), a = n(93), s = n(42), l = n(11), c = n(50).f, u = n(34).f, f = n(18).f, d = n(56).trim, p = o.Number, h = p, v = p.prototype, g = "Number" == i(n(49)(v)), y = "trim" in String.prototype, k = function(e2) {
            var t2 = s(e2, false);
            if ("string" == typeof t2 && t2.length > 2) {
              var n2, o2, r2, i2 = (t2 = y ? t2.trim() : d(t2, 3)).charCodeAt(0);
              if (43 === i2 || 45 === i2) {
                if (88 === (n2 = t2.charCodeAt(2)) || 120 === n2)
                  return NaN;
              } else if (48 === i2) {
                switch (t2.charCodeAt(1)) {
                  case 66:
                  case 98:
                    o2 = 2, r2 = 49;
                    break;
                  case 79:
                  case 111:
                    o2 = 8, r2 = 55;
                    break;
                  default:
                    return +t2;
                }
                for (var a2, l2 = t2.slice(2), c2 = 0, u2 = l2.length; c2 < u2; c2++)
                  if ((a2 = l2.charCodeAt(c2)) < 48 || a2 > r2)
                    return NaN;
                return parseInt(l2, o2);
              }
            }
            return +t2;
          };
          if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
            p = function(e2) {
              var t2 = arguments.length < 1 ? 0 : e2, n2 = this;
              return n2 instanceof p && (g ? l(function() {
                v.valueOf.call(n2);
              }) : "Number" != i(n2)) ? a(new h(k(t2)), n2, p) : k(t2);
            };
            for (var b, m = n(17) ? c(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), w = 0; m.length > w; w++)
              r(h, b = m[w]) && !r(p, b) && f(p, b, u(h, b));
            p.prototype = v, v.constructor = p, n(23)(o, "Number", p);
          }
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(33), i = n(128), a = n(94), s = 1 .toFixed, l = Math.floor, c = [0, 0, 0, 0, 0, 0], u = "Number.toFixed: incorrect invocation!", f = function(e2, t2) {
            for (var n2 = -1, o2 = t2; ++n2 < 6; )
              o2 += e2 * c[n2], c[n2] = o2 % 1e7, o2 = l(o2 / 1e7);
          }, d = function(e2) {
            for (var t2 = 6, n2 = 0; --t2 >= 0; )
              n2 += c[t2], c[t2] = l(n2 / e2), n2 = n2 % e2 * 1e7;
          }, p = function() {
            for (var e2 = 6, t2 = ""; --e2 >= 0; )
              if ("" !== t2 || 0 === e2 || 0 !== c[e2]) {
                var n2 = String(c[e2]);
                t2 = "" === t2 ? n2 : t2 + a.call("0", 7 - n2.length) + n2;
              }
            return t2;
          }, h = function(e2, t2, n2) {
            return 0 === t2 ? n2 : t2 % 2 == 1 ? h(e2, t2 - 1, n2 * e2) : h(e2 * e2, t2 / 2, n2);
          };
          o(o.P + o.F * (!!s && ("0.000" !== 8e-5 .toFixed(3) || "1" !== 0.9 .toFixed(0) || "1.25" !== 1.255 .toFixed(2) || "1000000000000000128" !== 1000000000000000100 .toFixed(0)) || !n(11)(function() {
            s.call({});
          })), "Number", { toFixed: function(e2) {
            var t2, n2, o2, s2, l2 = i(this, u), c2 = r(e2), v = "", g = "0";
            if (c2 < 0 || c2 > 20)
              throw RangeError(u);
            if (l2 != l2)
              return "NaN";
            if (l2 <= -1e21 || l2 >= 1e21)
              return String(l2);
            if (l2 < 0 && (v = "-", l2 = -l2), l2 > 1e-21)
              if (n2 = (t2 = function(e3) {
                for (var t3 = 0, n3 = e3; n3 >= 4096; )
                  t3 += 12, n3 /= 4096;
                for (; n3 >= 2; )
                  t3 += 1, n3 /= 2;
                return t3;
              }(l2 * h(2, 69, 1)) - 69) < 0 ? l2 * h(2, -t2, 1) : l2 / h(2, t2, 1), n2 *= 4503599627370496, (t2 = 52 - t2) > 0) {
                for (f(0, n2), o2 = c2; o2 >= 7; )
                  f(1e7, 0), o2 -= 7;
                for (f(h(10, o2, 1), 0), o2 = t2 - 1; o2 >= 23; )
                  d(1 << 23), o2 -= 23;
                d(1 << o2), f(1, 1), d(2), g = p();
              } else
                f(0, n2), f(1 << -t2, 0), g = p() + a.call("0", c2);
            return g = c2 > 0 ? v + ((s2 = g.length) <= c2 ? "0." + a.call("0", c2 - s2) + g : g.slice(0, s2 - c2) + "." + g.slice(s2 - c2)) : v + g;
          } });
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(11), i = n(128), a = 1 .toPrecision;
          o(o.P + o.F * (r(function() {
            return "1" !== a.call(1, void 0);
          }) || !r(function() {
            a.call({});
          })), "Number", { toPrecision: function(e2) {
            var t2 = i(this, "Number#toPrecision: incorrect invocation!");
            return void 0 === e2 ? a.call(t2) : a.call(t2, e2);
          } });
        }, function(e, t, n) {
          var o = n(0);
          o(o.S, "Number", { EPSILON: Math.pow(2, -52) });
        }, function(e, t, n) {
          var o = n(0), r = n(10).isFinite;
          o(o.S, "Number", { isFinite: function(e2) {
            return "number" == typeof e2 && r(e2);
          } });
        }, function(e, t, n) {
          var o = n(0);
          o(o.S, "Number", { isInteger: n(129) });
        }, function(e, t, n) {
          var o = n(0);
          o(o.S, "Number", { isNaN: function(e2) {
            return e2 != e2;
          } });
        }, function(e, t, n) {
          var o = n(0), r = n(129), i = Math.abs;
          o(o.S, "Number", { isSafeInteger: function(e2) {
            return r(e2) && i(e2) <= 9007199254740991;
          } });
        }, function(e, t, n) {
          var o = n(0);
          o(o.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
        }, function(e, t, n) {
          var o = n(0);
          o(o.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 });
        }, function(e, t, n) {
          var o = n(0), r = n(127);
          o(o.S + o.F * (Number.parseFloat != r), "Number", { parseFloat: r });
        }, function(e, t, n) {
          var o = n(0), r = n(126);
          o(o.S + o.F * (Number.parseInt != r), "Number", { parseInt: r });
        }, function(e, t, n) {
          var o = n(0), r = n(130), i = Math.sqrt, a = Math.acosh;
          o(o.S + o.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", { acosh: function(e2) {
            return (e2 = +e2) < 1 ? NaN : e2 > 9490626562425156e-8 ? Math.log(e2) + Math.LN2 : r(e2 - 1 + i(e2 - 1) * i(e2 + 1));
          } });
        }, function(e, t, n) {
          var o = n(0), r = Math.asinh;
          o(o.S + o.F * !(r && 1 / r(0) > 0), "Math", { asinh: function e2(t2) {
            return isFinite(t2 = +t2) && 0 != t2 ? t2 < 0 ? -e2(-t2) : Math.log(t2 + Math.sqrt(t2 * t2 + 1)) : t2;
          } });
        }, function(e, t, n) {
          var o = n(0), r = Math.atanh;
          o(o.S + o.F * !(r && 1 / r(-0) < 0), "Math", { atanh: function(e2) {
            return 0 == (e2 = +e2) ? e2 : Math.log((1 + e2) / (1 - e2)) / 2;
          } });
        }, function(e, t, n) {
          var o = n(0), r = n(95);
          o(o.S, "Math", { cbrt: function(e2) {
            return r(e2 = +e2) * Math.pow(Math.abs(e2), 1 / 3);
          } });
        }, function(e, t, n) {
          var o = n(0);
          o(o.S, "Math", { clz32: function(e2) {
            return (e2 >>>= 0) ? 31 - Math.floor(Math.log(e2 + 0.5) * Math.LOG2E) : 32;
          } });
        }, function(e, t, n) {
          var o = n(0), r = Math.exp;
          o(o.S, "Math", { cosh: function(e2) {
            return (r(e2 = +e2) + r(-e2)) / 2;
          } });
        }, function(e, t, n) {
          var o = n(0), r = n(96);
          o(o.S + o.F * (r != Math.expm1), "Math", { expm1: r });
        }, function(e, t, n) {
          var o = n(0);
          o(o.S, "Math", { fround: n(236) });
        }, function(e, t, n) {
          var o = n(95), r = Math.pow, i = r(2, -52), a = r(2, -23), s = r(2, 127) * (2 - a), l = r(2, -126);
          e.exports = Math.fround || function(e2) {
            var t2, n2, r2 = Math.abs(e2), c = o(e2);
            return r2 < l ? c * (r2 / l / a + 1 / i - 1 / i) * l * a : (n2 = (t2 = (1 + a / i) * r2) - (t2 - r2)) > s || n2 != n2 ? c * (1 / 0) : c * n2;
          };
        }, function(e, t, n) {
          var o = n(0), r = Math.abs;
          o(o.S, "Math", { hypot: function(e2, t2) {
            for (var n2, o2, i = 0, a = 0, s = arguments.length, l = 0; a < s; )
              l < (n2 = r(arguments[a++])) ? (i = i * (o2 = l / n2) * o2 + 1, l = n2) : i += n2 > 0 ? (o2 = n2 / l) * o2 : n2;
            return l === 1 / 0 ? 1 / 0 : l * Math.sqrt(i);
          } });
        }, function(e, t, n) {
          var o = n(0), r = Math.imul;
          o(o.S + o.F * n(11)(function() {
            return -5 != r(4294967295, 5) || 2 != r.length;
          }), "Math", { imul: function(e2, t2) {
            var n2 = +e2, o2 = +t2, r2 = 65535 & n2, i = 65535 & o2;
            return 0 | r2 * i + ((65535 & n2 >>> 16) * i + r2 * (65535 & o2 >>> 16) << 16 >>> 0);
          } });
        }, function(e, t, n) {
          var o = n(0);
          o(o.S, "Math", { log10: function(e2) {
            return Math.log(e2) * Math.LOG10E;
          } });
        }, function(e, t, n) {
          var o = n(0);
          o(o.S, "Math", { log1p: n(130) });
        }, function(e, t, n) {
          var o = n(0);
          o(o.S, "Math", { log2: function(e2) {
            return Math.log(e2) / Math.LN2;
          } });
        }, function(e, t, n) {
          var o = n(0);
          o(o.S, "Math", { sign: n(95) });
        }, function(e, t, n) {
          var o = n(0), r = n(96), i = Math.exp;
          o(o.S + o.F * n(11)(function() {
            return -2e-17 != !Math.sinh(-2e-17);
          }), "Math", { sinh: function(e2) {
            return Math.abs(e2 = +e2) < 1 ? (r(e2) - r(-e2)) / 2 : (i(e2 - 1) - i(-e2 - 1)) * (Math.E / 2);
          } });
        }, function(e, t, n) {
          var o = n(0), r = n(96), i = Math.exp;
          o(o.S, "Math", { tanh: function(e2) {
            var t2 = r(e2 = +e2), n2 = r(-e2);
            return t2 == 1 / 0 ? 1 : n2 == 1 / 0 ? -1 : (t2 - n2) / (i(e2) + i(-e2));
          } });
        }, function(e, t, n) {
          var o = n(0);
          o(o.S, "Math", { trunc: function(e2) {
            return (e2 > 0 ? Math.floor : Math.ceil)(e2);
          } });
        }, function(e, t, n) {
          var o = n(0), r = n(48), i = String.fromCharCode, a = String.fromCodePoint;
          o(o.S + o.F * (!!a && 1 != a.length), "String", { fromCodePoint: function(e2) {
            for (var t2, n2 = [], o2 = arguments.length, a2 = 0; o2 > a2; ) {
              if (t2 = +arguments[a2++], r(t2, 1114111) !== t2)
                throw RangeError(t2 + " is not a valid code point");
              n2.push(t2 < 65536 ? i(t2) : i(55296 + ((t2 -= 65536) >> 10), t2 % 1024 + 56320));
            }
            return n2.join("");
          } });
        }, function(e, t, n) {
          var o = n(0), r = n(28), i = n(15);
          o(o.S, "String", { raw: function(e2) {
            for (var t2 = r(e2.raw), n2 = i(t2.length), o2 = arguments.length, a = [], s = 0; n2 > s; )
              a.push(String(t2[s++])), s < o2 && a.push(String(arguments[s]));
            return a.join("");
          } });
        }, function(e, t, n) {
          "use strict";
          n(56)("trim", function(e2) {
            return function() {
              return e2(this, 3);
            };
          });
        }, function(e, t, n) {
          "use strict";
          var o = n(97)(true);
          n(98)(String, "String", function(e2) {
            this._t = String(e2), this._i = 0;
          }, function() {
            var e2, t2 = this._t, n2 = this._i;
            return n2 >= t2.length ? { value: void 0, done: true } : (e2 = o(t2, n2), this._i += e2.length, { value: e2, done: false });
          });
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(97)(false);
          o(o.P, "String", { codePointAt: function(e2) {
            return r(this, e2);
          } });
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(15), i = n(99), a = "".endsWith;
          o(o.P + o.F * n(101)("endsWith"), "String", { endsWith: function(e2) {
            var t2 = i(this, e2, "endsWith"), n2 = arguments.length > 1 ? arguments[1] : void 0, o2 = r(t2.length), s = void 0 === n2 ? o2 : Math.min(r(n2), o2), l = String(e2);
            return a ? a.call(t2, l, s) : t2.slice(s - l.length, s) === l;
          } });
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(99);
          o(o.P + o.F * n(101)("includes"), "String", { includes: function(e2) {
            return !!~r(this, e2, "includes").indexOf(e2, arguments.length > 1 ? arguments[1] : void 0);
          } });
        }, function(e, t, n) {
          var o = n(0);
          o(o.P, "String", { repeat: n(94) });
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(15), i = n(99), a = "".startsWith;
          o(o.P + o.F * n(101)("startsWith"), "String", { startsWith: function(e2) {
            var t2 = i(this, e2, "startsWith"), n2 = r(Math.min(arguments.length > 1 ? arguments[1] : void 0, t2.length)), o2 = String(e2);
            return a ? a.call(t2, o2, n2) : t2.slice(n2, n2 + o2.length) === o2;
          } });
        }, function(e, t, n) {
          "use strict";
          n(24)("anchor", function(e2) {
            return function(t2) {
              return e2(this, "a", "name", t2);
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(24)("big", function(e2) {
            return function() {
              return e2(this, "big", "", "");
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(24)("blink", function(e2) {
            return function() {
              return e2(this, "blink", "", "");
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(24)("bold", function(e2) {
            return function() {
              return e2(this, "b", "", "");
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(24)("fixed", function(e2) {
            return function() {
              return e2(this, "tt", "", "");
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(24)("fontcolor", function(e2) {
            return function(t2) {
              return e2(this, "font", "color", t2);
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(24)("fontsize", function(e2) {
            return function(t2) {
              return e2(this, "font", "size", t2);
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(24)("italics", function(e2) {
            return function() {
              return e2(this, "i", "", "");
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(24)("link", function(e2) {
            return function(t2) {
              return e2(this, "a", "href", t2);
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(24)("small", function(e2) {
            return function() {
              return e2(this, "small", "", "");
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(24)("strike", function(e2) {
            return function() {
              return e2(this, "strike", "", "");
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(24)("sub", function(e2) {
            return function() {
              return e2(this, "sub", "", "");
            };
          });
        }, function(e, t, n) {
          "use strict";
          n(24)("sup", function(e2) {
            return function() {
              return e2(this, "sup", "", "");
            };
          });
        }, function(e, t, n) {
          var o = n(0);
          o(o.S, "Date", { now: function() {
            return new Date().getTime();
          } });
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(22), i = n(42);
          o(o.P + o.F * n(11)(function() {
            return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({ toISOString: function() {
              return 1;
            } });
          }), "Date", { toJSON: function(e2) {
            var t2 = r(this), n2 = i(t2);
            return "number" != typeof n2 || isFinite(n2) ? t2.toISOString() : null;
          } });
        }, function(e, t, n) {
          var o = n(0), r = n(271);
          o(o.P + o.F * (Date.prototype.toISOString !== r), "Date", { toISOString: r });
        }, function(e, t, n) {
          "use strict";
          var o = n(11), r = Date.prototype.getTime, i = Date.prototype.toISOString, a = function(e2) {
            return e2 > 9 ? e2 : "0" + e2;
          };
          e.exports = o(function() {
            return "0385-07-25T07:06:39.999Z" != i.call(new Date(-50000000000001));
          }) || !o(function() {
            i.call(new Date(NaN));
          }) ? function() {
            if (!isFinite(r.call(this)))
              throw RangeError("Invalid time value");
            var e2 = this, t2 = e2.getUTCFullYear(), n2 = e2.getUTCMilliseconds(), o2 = t2 < 0 ? "-" : t2 > 9999 ? "+" : "";
            return o2 + ("00000" + Math.abs(t2)).slice(o2 ? -6 : -4) + "-" + a(e2.getUTCMonth() + 1) + "-" + a(e2.getUTCDate()) + "T" + a(e2.getUTCHours()) + ":" + a(e2.getUTCMinutes()) + ":" + a(e2.getUTCSeconds()) + "." + (n2 > 99 ? n2 : "0" + a(n2)) + "Z";
          } : i;
        }, function(e, t, n) {
          var o = Date.prototype, r = o.toString, i = o.getTime;
          new Date(NaN) + "" != "Invalid Date" && n(23)(o, "toString", function() {
            var e2 = i.call(this);
            return e2 == e2 ? r.call(this) : "Invalid Date";
          });
        }, function(e, t, n) {
          var o = n(14)("toPrimitive"), r = Date.prototype;
          o in r || n(27)(r, o, n(274));
        }, function(e, t, n) {
          "use strict";
          var o = n(12), r = n(42);
          e.exports = function(e2) {
            if ("string" !== e2 && "number" !== e2 && "default" !== e2)
              throw TypeError("Incorrect hint");
            return r(o(this), "number" != e2);
          };
        }, function(e, t, n) {
          var o = n(0);
          o(o.S, "Array", { isArray: n(73) });
        }, function(e, t, n) {
          "use strict";
          var o = n(31), r = n(0), i = n(22), a = n(132), s = n(102), l = n(15), c = n(103), u = n(104);
          r(r.S + r.F * !n(74)(function(e2) {
            Array.from(e2);
          }), "Array", { from: function(e2) {
            var t2, n2, r2, f, d = i(e2), p = "function" == typeof this ? this : Array, h = arguments.length, v = h > 1 ? arguments[1] : void 0, g = void 0 !== v, y = 0, k = u(d);
            if (g && (v = o(v, h > 2 ? arguments[2] : void 0, 2)), null == k || p == Array && s(k))
              for (n2 = new p(t2 = l(d.length)); t2 > y; y++)
                c(n2, y, g ? v(d[y], y) : d[y]);
            else
              for (f = k.call(d), n2 = new p(); !(r2 = f.next()).done; y++)
                c(n2, y, g ? a(f, v, [r2.value, y], true) : r2.value);
            return n2.length = y, n2;
          } });
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(103);
          o(o.S + o.F * n(11)(function() {
            function e2() {
            }
            return !(Array.of.call(e2) instanceof e2);
          }), "Array", { of: function() {
            for (var e2 = 0, t2 = arguments.length, n2 = new ("function" == typeof this ? this : Array)(t2); t2 > e2; )
              r(n2, e2, arguments[e2++]);
            return n2.length = t2, n2;
          } });
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(28), i = [].join;
          o(o.P + o.F * (n(62) != Object || !n(29)(i)), "Array", { join: function(e2) {
            return i.call(r(this), void 0 === e2 ? "," : e2);
          } });
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(90), i = n(38), a = n(48), s = n(15), l = [].slice;
          o(o.P + o.F * n(11)(function() {
            r && l.call(r);
          }), "Array", { slice: function(e2, t2) {
            var n2 = s(this.length), o2 = i(this);
            if (t2 = void 0 === t2 ? n2 : t2, "Array" == o2)
              return l.call(this, e2, t2);
            for (var r2 = a(e2, n2), c = a(t2, n2), u = s(c - r2), f = new Array(u), d = 0; d < u; d++)
              f[d] = "String" == o2 ? this.charAt(r2 + d) : this[r2 + d];
            return f;
          } });
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(32), i = n(22), a = n(11), s = [].sort, l = [1, 2, 3];
          o(o.P + o.F * (a(function() {
            l.sort(void 0);
          }) || !a(function() {
            l.sort(null);
          }) || !n(29)(s)), "Array", { sort: function(e2) {
            return void 0 === e2 ? s.call(i(this)) : s.call(i(this), r(e2));
          } });
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(36)(0), i = n(29)([].forEach, true);
          o(o.P + o.F * !i, "Array", { forEach: function(e2) {
            return r(this, e2, arguments[1]);
          } });
        }, function(e, t, n) {
          var o = n(13), r = n(73), i = n(14)("species");
          e.exports = function(e2) {
            var t2;
            return r(e2) && ("function" != typeof (t2 = e2.constructor) || t2 !== Array && !r(t2.prototype) || (t2 = void 0), o(t2) && null === (t2 = t2[i]) && (t2 = void 0)), void 0 === t2 ? Array : t2;
          };
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(36)(1);
          o(o.P + o.F * !n(29)([].map, true), "Array", { map: function(e2) {
            return r(this, e2, arguments[1]);
          } });
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(36)(2);
          o(o.P + o.F * !n(29)([].filter, true), "Array", { filter: function(e2) {
            return r(this, e2, arguments[1]);
          } });
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(36)(3);
          o(o.P + o.F * !n(29)([].some, true), "Array", { some: function(e2) {
            return r(this, e2, arguments[1]);
          } });
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(36)(4);
          o(o.P + o.F * !n(29)([].every, true), "Array", { every: function(e2) {
            return r(this, e2, arguments[1]);
          } });
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(134);
          o(o.P + o.F * !n(29)([].reduce, true), "Array", { reduce: function(e2) {
            return r(this, e2, arguments.length, arguments[1], false);
          } });
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(134);
          o(o.P + o.F * !n(29)([].reduceRight, true), "Array", { reduceRight: function(e2) {
            return r(this, e2, arguments.length, arguments[1], true);
          } });
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(71)(false), i = [].indexOf, a = !!i && 1 / [1].indexOf(1, -0) < 0;
          o(o.P + o.F * (a || !n(29)(i)), "Array", { indexOf: function(e2) {
            return a ? i.apply(this, arguments) || 0 : r(this, e2, arguments[1]);
          } });
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(28), i = n(33), a = n(15), s = [].lastIndexOf, l = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
          o(o.P + o.F * (l || !n(29)(s)), "Array", { lastIndexOf: function(e2) {
            if (l)
              return s.apply(this, arguments) || 0;
            var t2 = r(this), n2 = a(t2.length), o2 = n2 - 1;
            for (arguments.length > 1 && (o2 = Math.min(o2, i(arguments[1]))), o2 < 0 && (o2 = n2 + o2); o2 >= 0; o2--)
              if (o2 in t2 && t2[o2] === e2)
                return o2 || 0;
            return -1;
          } });
        }, function(e, t, n) {
          var o = n(0);
          o(o.P, "Array", { copyWithin: n(135) }), n(52)("copyWithin");
        }, function(e, t, n) {
          var o = n(0);
          o(o.P, "Array", { fill: n(105) }), n(52)("fill");
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(36)(5), i = true;
          "find" in [] && Array(1).find(function() {
            i = false;
          }), o(o.P + o.F * i, "Array", { find: function(e2) {
            return r(this, e2, arguments.length > 1 ? arguments[1] : void 0);
          } }), n(52)("find");
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(36)(6), i = "findIndex", a = true;
          i in [] && Array(1)[i](function() {
            a = false;
          }), o(o.P + o.F * a, "Array", { findIndex: function(e2) {
            return r(this, e2, arguments.length > 1 ? arguments[1] : void 0);
          } }), n(52)(i);
        }, function(e, t, n) {
          n(58)("Array");
        }, function(e, t, n) {
          var o = n(10), r = n(93), i = n(18).f, a = n(50).f, s = n(100), l = n(75), c = o.RegExp, u = c, f = c.prototype, d = /a/g, p = /a/g, h = new c(d) !== d;
          if (n(17) && (!h || n(11)(function() {
            return p[n(14)("match")] = false, c(d) != d || c(p) == p || "/a/i" != c(d, "i");
          }))) {
            c = function(e2, t2) {
              var n2 = this instanceof c, o2 = s(e2), i2 = void 0 === t2;
              return !n2 && o2 && e2.constructor === c && i2 ? e2 : r(h ? new u(o2 && !i2 ? e2.source : e2, t2) : u((o2 = e2 instanceof c) ? e2.source : e2, o2 && i2 ? l.call(e2) : t2), n2 ? this : f, c);
            };
            for (var v = function(e2) {
              e2 in c || i(c, e2, { configurable: true, get: function() {
                return u[e2];
              }, set: function(t2) {
                u[e2] = t2;
              } });
            }, g = a(u), y = 0; g.length > y; )
              v(g[y++]);
            f.constructor = c, c.prototype = f, n(23)(o, "RegExp", c);
          }
          n(58)("RegExp");
        }, function(e, t, n) {
          "use strict";
          n(138);
          var o = n(12), r = n(75), i = n(17), a = /./.toString, s = function(e2) {
            n(23)(RegExp.prototype, "toString", e2, true);
          };
          n(11)(function() {
            return "/a/b" != a.call({ source: "a", flags: "b" });
          }) ? s(function() {
            var e2 = o(this);
            return "/".concat(e2.source, "/", "flags" in e2 ? e2.flags : !i && e2 instanceof RegExp ? r.call(e2) : void 0);
          }) : "toString" != a.name && s(function() {
            return a.call(this);
          });
        }, function(e, t, n) {
          "use strict";
          var o = n(12), r = n(15), i = n(108), a = n(76);
          n(77)("match", 1, function(e2, t2, n2, s) {
            return [function(n3) {
              var o2 = e2(this), r2 = null == n3 ? void 0 : n3[t2];
              return void 0 !== r2 ? r2.call(n3, o2) : new RegExp(n3)[t2](String(o2));
            }, function(e3) {
              var t3 = s(n2, e3, this);
              if (t3.done)
                return t3.value;
              var l = o(e3), c = String(this);
              if (!l.global)
                return a(l, c);
              var u = l.unicode;
              l.lastIndex = 0;
              for (var f, d = [], p = 0; null !== (f = a(l, c)); ) {
                var h = String(f[0]);
                d[p] = h, "" === h && (l.lastIndex = i(c, r(l.lastIndex), u)), p++;
              }
              return 0 === p ? null : d;
            }];
          });
        }, function(e, t, n) {
          "use strict";
          var o = n(12), r = n(22), i = n(15), a = n(33), s = n(108), l = n(76), c = Math.max, u = Math.min, f = Math.floor, d = /\$([$&`']|\d\d?|<[^>]*>)/g, p = /\$([$&`']|\d\d?)/g;
          n(77)("replace", 2, function(e2, t2, n2, h) {
            return [function(o2, r2) {
              var i2 = e2(this), a2 = null == o2 ? void 0 : o2[t2];
              return void 0 !== a2 ? a2.call(o2, i2, r2) : n2.call(String(i2), o2, r2);
            }, function(e3, t3) {
              var r2 = h(n2, e3, this, t3);
              if (r2.done)
                return r2.value;
              var f2 = o(e3), d2 = String(this), p2 = "function" == typeof t3;
              p2 || (t3 = String(t3));
              var g = f2.global;
              if (g) {
                var y = f2.unicode;
                f2.lastIndex = 0;
              }
              for (var k = []; ; ) {
                var b = l(f2, d2);
                if (null === b)
                  break;
                if (k.push(b), !g)
                  break;
                "" === String(b[0]) && (f2.lastIndex = s(d2, i(f2.lastIndex), y));
              }
              for (var m, w = "", x = 0, C = 0; C < k.length; C++) {
                b = k[C];
                for (var S = String(b[0]), T = c(u(a(b.index), d2.length), 0), E = [], B = 1; B < b.length; B++)
                  E.push(void 0 === (m = b[B]) ? m : String(m));
                var M = b.groups;
                if (p2) {
                  var _ = [S].concat(E, T, d2);
                  void 0 !== M && _.push(M);
                  var O = String(t3.apply(void 0, _));
                } else
                  O = v(S, d2, T, E, M, t3);
                T >= x && (w += d2.slice(x, T) + O, x = T + S.length);
              }
              return w + d2.slice(x);
            }];
            function v(e3, t3, o2, i2, a2, s2) {
              var l2 = o2 + e3.length, c2 = i2.length, u2 = p;
              return void 0 !== a2 && (a2 = r(a2), u2 = d), n2.call(s2, u2, function(n3, r2) {
                var s3;
                switch (r2.charAt(0)) {
                  case "$":
                    return "$";
                  case "&":
                    return e3;
                  case "`":
                    return t3.slice(0, o2);
                  case "'":
                    return t3.slice(l2);
                  case "<":
                    s3 = a2[r2.slice(1, -1)];
                    break;
                  default:
                    var u3 = +r2;
                    if (0 === u3)
                      return n3;
                    if (u3 > c2) {
                      var d2 = f(u3 / 10);
                      return 0 === d2 ? n3 : d2 <= c2 ? void 0 === i2[d2 - 1] ? r2.charAt(1) : i2[d2 - 1] + r2.charAt(1) : n3;
                    }
                    s3 = i2[u3 - 1];
                }
                return void 0 === s3 ? "" : s3;
              });
            }
          });
        }, function(e, t, n) {
          "use strict";
          var o = n(12), r = n(123), i = n(76);
          n(77)("search", 1, function(e2, t2, n2, a) {
            return [function(n3) {
              var o2 = e2(this), r2 = null == n3 ? void 0 : n3[t2];
              return void 0 !== r2 ? r2.call(n3, o2) : new RegExp(n3)[t2](String(o2));
            }, function(e3) {
              var t3 = a(n2, e3, this);
              if (t3.done)
                return t3.value;
              var s = o(e3), l = String(this), c = s.lastIndex;
              r(c, 0) || (s.lastIndex = 0);
              var u = i(s, l);
              return r(s.lastIndex, c) || (s.lastIndex = c), null === u ? -1 : u.index;
            }];
          });
        }, function(e, t, n) {
          "use strict";
          var o = n(100), r = n(12), i = n(65), a = n(108), s = n(15), l = n(76), c = n(107), u = n(11), f = Math.min, d = [].push, p = "length", h = !u(function() {
            RegExp(4294967295, "y");
          });
          n(77)("split", 2, function(e2, t2, n2, u2) {
            var v;
            return v = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[p] || 2 != "ab".split(/(?:ab)*/)[p] || 4 != ".".split(/(.?)(.?)/)[p] || ".".split(/()()/)[p] > 1 || "".split(/.?/)[p] ? function(e3, t3) {
              var r2 = String(this);
              if (void 0 === e3 && 0 === t3)
                return [];
              if (!o(e3))
                return n2.call(r2, e3, t3);
              for (var i2, a2, s2, l2 = [], u3 = (e3.ignoreCase ? "i" : "") + (e3.multiline ? "m" : "") + (e3.unicode ? "u" : "") + (e3.sticky ? "y" : ""), f2 = 0, h2 = void 0 === t3 ? 4294967295 : t3 >>> 0, v2 = new RegExp(e3.source, u3 + "g"); (i2 = c.call(v2, r2)) && !((a2 = v2.lastIndex) > f2 && (l2.push(r2.slice(f2, i2.index)), i2[p] > 1 && i2.index < r2[p] && d.apply(l2, i2.slice(1)), s2 = i2[0][p], f2 = a2, l2[p] >= h2)); )
                v2.lastIndex === i2.index && v2.lastIndex++;
              return f2 === r2[p] ? !s2 && v2.test("") || l2.push("") : l2.push(r2.slice(f2)), l2[p] > h2 ? l2.slice(0, h2) : l2;
            } : "0".split(void 0, 0)[p] ? function(e3, t3) {
              return void 0 === e3 && 0 === t3 ? [] : n2.call(this, e3, t3);
            } : n2, [function(n3, o2) {
              var r2 = e2(this), i2 = null == n3 ? void 0 : n3[t2];
              return void 0 !== i2 ? i2.call(n3, r2, o2) : v.call(String(r2), n3, o2);
            }, function(e3, t3) {
              var o2 = u2(v, e3, this, t3, v !== n2);
              if (o2.done)
                return o2.value;
              var c2 = r(e3), d2 = String(this), p2 = i(c2, RegExp), g = c2.unicode, y = (c2.ignoreCase ? "i" : "") + (c2.multiline ? "m" : "") + (c2.unicode ? "u" : "") + (h ? "y" : "g"), k = new p2(h ? c2 : "^(?:" + c2.source + ")", y), b = void 0 === t3 ? 4294967295 : t3 >>> 0;
              if (0 === b)
                return [];
              if (0 === d2.length)
                return null === l(k, d2) ? [d2] : [];
              for (var m = 0, w = 0, x = []; w < d2.length; ) {
                k.lastIndex = h ? w : 0;
                var C, S = l(k, h ? d2 : d2.slice(w));
                if (null === S || (C = f(s(k.lastIndex + (h ? 0 : w)), d2.length)) === m)
                  w = a(d2, w, g);
                else {
                  if (x.push(d2.slice(m, w)), x.length === b)
                    return x;
                  for (var T = 1; T <= S.length - 1; T++)
                    if (x.push(S[T]), x.length === b)
                      return x;
                  w = m = C;
                }
              }
              return x.push(d2.slice(m)), x;
            }];
          });
        }, function(e, t, n) {
          var o = n(10), r = n(109).set, i = o.MutationObserver || o.WebKitMutationObserver, a = o.process, s = o.Promise, l = "process" == n(38)(a);
          e.exports = function() {
            var e2, t2, n2, c = function() {
              var o2, r2;
              for (l && (o2 = a.domain) && o2.exit(); e2; ) {
                r2 = e2.fn, e2 = e2.next;
                try {
                  r2();
                } catch (o3) {
                  throw e2 ? n2() : t2 = void 0, o3;
                }
              }
              t2 = void 0, o2 && o2.enter();
            };
            if (l)
              n2 = function() {
                a.nextTick(c);
              };
            else if (!i || o.navigator && o.navigator.standalone)
              if (s && s.resolve) {
                var u = s.resolve(void 0);
                n2 = function() {
                  u.then(c);
                };
              } else
                n2 = function() {
                  r.call(o, c);
                };
            else {
              var f = true, d = document.createTextNode("");
              new i(c).observe(d, { characterData: true }), n2 = function() {
                d.data = f = !f;
              };
            }
            return function(o2) {
              var r2 = { fn: o2, next: void 0 };
              t2 && (t2.next = r2), e2 || (e2 = r2, n2()), t2 = r2;
            };
          };
        }, function(e, t) {
          e.exports = function(e2) {
            try {
              return { e: false, v: e2() };
            } catch (e3) {
              return { e: true, v: e3 };
            }
          };
        }, function(e, t, n) {
          "use strict";
          var o = n(142), r = n(53);
          e.exports = n(80)("Map", function(e2) {
            return function() {
              return e2(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, { get: function(e2) {
            var t2 = o.getEntry(r(this, "Map"), e2);
            return t2 && t2.v;
          }, set: function(e2, t2) {
            return o.def(r(this, "Map"), 0 === e2 ? 0 : e2, t2);
          } }, o, true);
        }, function(e, t, n) {
          "use strict";
          var o = n(142), r = n(53);
          e.exports = n(80)("Set", function(e2) {
            return function() {
              return e2(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, { add: function(e2) {
            return o.def(r(this, "Set"), e2 = 0 === e2 ? 0 : e2, e2);
          } }, o);
        }, function(e, t, n) {
          "use strict";
          var o, r = n(10), i = n(36)(0), a = n(23), s = n(43), l = n(122), c = n(143), u = n(13), f = n(53), d = n(53), p = !r.ActiveXObject && "ActiveXObject" in r, h = s.getWeak, v = Object.isExtensible, g = c.ufstore, y = function(e2) {
            return function() {
              return e2(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, k = { get: function(e2) {
            if (u(e2)) {
              var t2 = h(e2);
              return true === t2 ? g(f(this, "WeakMap")).get(e2) : t2 ? t2[this._i] : void 0;
            }
          }, set: function(e2, t2) {
            return c.def(f(this, "WeakMap"), e2, t2);
          } }, b = e.exports = n(80)("WeakMap", y, k, c, true, true);
          d && p && (l((o = c.getConstructor(y, "WeakMap")).prototype, k), s.NEED = true, i(["delete", "has", "get", "set"], function(e2) {
            var t2 = b.prototype, n2 = t2[e2];
            a(t2, e2, function(t3, r2) {
              if (u(t3) && !v(t3)) {
                this._f || (this._f = new o());
                var i2 = this._f[e2](t3, r2);
                return "set" == e2 ? this : i2;
              }
              return n2.call(this, t3, r2);
            });
          }));
        }, function(e, t, n) {
          "use strict";
          var o = n(143), r = n(53);
          n(80)("WeakSet", function(e2) {
            return function() {
              return e2(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          }, { add: function(e2) {
            return o.def(r(this, "WeakSet"), e2, true);
          } }, o, false, true);
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(81), i = n(110), a = n(12), s = n(48), l = n(15), c = n(13), u = n(10).ArrayBuffer, f = n(65), d = i.ArrayBuffer, p = i.DataView, h = r.ABV && u.isView, v = d.prototype.slice, g = r.VIEW;
          o(o.G + o.W + o.F * (u !== d), { ArrayBuffer: d }), o(o.S + o.F * !r.CONSTR, "ArrayBuffer", { isView: function(e2) {
            return h && h(e2) || c(e2) && g in e2;
          } }), o(o.P + o.U + o.F * n(11)(function() {
            return !new d(2).slice(1, void 0).byteLength;
          }), "ArrayBuffer", { slice: function(e2, t2) {
            if (void 0 !== v && void 0 === t2)
              return v.call(a(this), e2);
            for (var n2 = a(this).byteLength, o2 = s(e2, n2), r2 = s(void 0 === t2 ? n2 : t2, n2), i2 = new (f(this, d))(l(r2 - o2)), c2 = new p(this), u2 = new p(i2), h2 = 0; o2 < r2; )
              u2.setUint8(h2++, c2.getUint8(o2++));
            return i2;
          } }), n(58)("ArrayBuffer");
        }, function(e, t, n) {
          var o = n(0);
          o(o.G + o.W + o.F * !n(81).ABV, { DataView: n(110).DataView });
        }, function(e, t, n) {
          n(40)("Int8", 1, function(e2) {
            return function(t2, n2, o) {
              return e2(this, t2, n2, o);
            };
          });
        }, function(e, t, n) {
          n(40)("Uint8", 1, function(e2) {
            return function(t2, n2, o) {
              return e2(this, t2, n2, o);
            };
          });
        }, function(e, t, n) {
          n(40)("Uint8", 1, function(e2) {
            return function(t2, n2, o) {
              return e2(this, t2, n2, o);
            };
          }, true);
        }, function(e, t, n) {
          n(40)("Int16", 2, function(e2) {
            return function(t2, n2, o) {
              return e2(this, t2, n2, o);
            };
          });
        }, function(e, t, n) {
          n(40)("Uint16", 2, function(e2) {
            return function(t2, n2, o) {
              return e2(this, t2, n2, o);
            };
          });
        }, function(e, t, n) {
          n(40)("Int32", 4, function(e2) {
            return function(t2, n2, o) {
              return e2(this, t2, n2, o);
            };
          });
        }, function(e, t, n) {
          n(40)("Uint32", 4, function(e2) {
            return function(t2, n2, o) {
              return e2(this, t2, n2, o);
            };
          });
        }, function(e, t, n) {
          n(40)("Float32", 4, function(e2) {
            return function(t2, n2, o) {
              return e2(this, t2, n2, o);
            };
          });
        }, function(e, t, n) {
          n(40)("Float64", 8, function(e2) {
            return function(t2, n2, o) {
              return e2(this, t2, n2, o);
            };
          });
        }, function(e, t, n) {
          var o = n(0), r = n(32), i = n(12), a = (n(10).Reflect || {}).apply, s = Function.apply;
          o(o.S + o.F * !n(11)(function() {
            a(function() {
            });
          }), "Reflect", { apply: function(e2, t2, n2) {
            var o2 = r(e2), l = i(n2);
            return a ? a(o2, t2, l) : s.call(o2, t2, l);
          } });
        }, function(e, t, n) {
          var o = n(0), r = n(49), i = n(32), a = n(12), s = n(13), l = n(11), c = n(124), u = (n(10).Reflect || {}).construct, f = l(function() {
            function e2() {
            }
            return !(u(function() {
            }, [], e2) instanceof e2);
          }), d = !l(function() {
            u(function() {
            });
          });
          o(o.S + o.F * (f || d), "Reflect", { construct: function(e2, t2) {
            i(e2), a(t2);
            var n2 = arguments.length < 3 ? e2 : i(arguments[2]);
            if (d && !f)
              return u(e2, t2, n2);
            if (e2 == n2) {
              switch (t2.length) {
                case 0:
                  return new e2();
                case 1:
                  return new e2(t2[0]);
                case 2:
                  return new e2(t2[0], t2[1]);
                case 3:
                  return new e2(t2[0], t2[1], t2[2]);
                case 4:
                  return new e2(t2[0], t2[1], t2[2], t2[3]);
              }
              var o2 = [null];
              return o2.push.apply(o2, t2), new (c.apply(e2, o2))();
            }
            var l2 = n2.prototype, p = r(s(l2) ? l2 : Object.prototype), h = Function.apply.call(e2, p, t2);
            return s(h) ? h : p;
          } });
        }, function(e, t, n) {
          var o = n(18), r = n(0), i = n(12), a = n(42);
          r(r.S + r.F * n(11)(function() {
            Reflect.defineProperty(o.f({}, 1, { value: 1 }), 1, { value: 2 });
          }), "Reflect", { defineProperty: function(e2, t2, n2) {
            i(e2), t2 = a(t2, true), i(n2);
            try {
              return o.f(e2, t2, n2), true;
            } catch (e3) {
              return false;
            }
          } });
        }, function(e, t, n) {
          var o = n(0), r = n(34).f, i = n(12);
          o(o.S, "Reflect", { deleteProperty: function(e2, t2) {
            var n2 = r(i(e2), t2);
            return !(n2 && !n2.configurable) && delete e2[t2];
          } });
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(12), i = function(e2) {
            this._t = r(e2), this._i = 0;
            var t2, n2 = this._k = [];
            for (t2 in e2)
              n2.push(t2);
          };
          n(131)(i, "Object", function() {
            var e2, t2 = this._k;
            do {
              if (this._i >= t2.length)
                return { value: void 0, done: true };
            } while (!((e2 = t2[this._i++]) in this._t));
            return { value: e2, done: false };
          }), o(o.S, "Reflect", { enumerate: function(e2) {
            return new i(e2);
          } });
        }, function(e, t, n) {
          var o = n(34), r = n(51), i = n(26), a = n(0), s = n(13), l = n(12);
          a(a.S, "Reflect", { get: function e2(t2, n2) {
            var a2, c, u = arguments.length < 3 ? t2 : arguments[2];
            return l(t2) === u ? t2[n2] : (a2 = o.f(t2, n2)) ? i(a2, "value") ? a2.value : void 0 !== a2.get ? a2.get.call(u) : void 0 : s(c = r(t2)) ? e2(c, n2, u) : void 0;
          } });
        }, function(e, t, n) {
          var o = n(34), r = n(0), i = n(12);
          r(r.S, "Reflect", { getOwnPropertyDescriptor: function(e2, t2) {
            return o.f(i(e2), t2);
          } });
        }, function(e, t, n) {
          var o = n(0), r = n(51), i = n(12);
          o(o.S, "Reflect", { getPrototypeOf: function(e2) {
            return r(i(e2));
          } });
        }, function(e, t, n) {
          var o = n(0);
          o(o.S, "Reflect", { has: function(e2, t2) {
            return t2 in e2;
          } });
        }, function(e, t, n) {
          var o = n(0), r = n(12), i = Object.isExtensible;
          o(o.S, "Reflect", { isExtensible: function(e2) {
            return r(e2), !i || i(e2);
          } });
        }, function(e, t, n) {
          var o = n(0);
          o(o.S, "Reflect", { ownKeys: n(145) });
        }, function(e, t, n) {
          var o = n(0), r = n(12), i = Object.preventExtensions;
          o(o.S, "Reflect", { preventExtensions: function(e2) {
            r(e2);
            try {
              return i && i(e2), true;
            } catch (e3) {
              return false;
            }
          } });
        }, function(e, t, n) {
          var o = n(18), r = n(34), i = n(51), a = n(26), s = n(0), l = n(44), c = n(12), u = n(13);
          s(s.S, "Reflect", { set: function e2(t2, n2, s2) {
            var f, d, p = arguments.length < 4 ? t2 : arguments[3], h = r.f(c(t2), n2);
            if (!h) {
              if (u(d = i(t2)))
                return e2(d, n2, s2, p);
              h = l(0);
            }
            if (a(h, "value")) {
              if (false === h.writable || !u(p))
                return false;
              if (f = r.f(p, n2)) {
                if (f.get || f.set || false === f.writable)
                  return false;
                f.value = s2, o.f(p, n2, f);
              } else
                o.f(p, n2, l(0, s2));
              return true;
            }
            return void 0 !== h.set && (h.set.call(p, s2), true);
          } });
        }, function(e, t, n) {
          var o = n(0), r = n(91);
          r && o(o.S, "Reflect", { setPrototypeOf: function(e2, t2) {
            r.check(e2, t2);
            try {
              return r.set(e2, t2), true;
            } catch (e3) {
              return false;
            }
          } });
        }, function(e, t, n) {
          n(334), e.exports = n(16).Array.includes;
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(71)(true);
          o(o.P, "Array", { includes: function(e2) {
            return r(this, e2, arguments.length > 1 ? arguments[1] : void 0);
          } }), n(52)("includes");
        }, function(e, t, n) {
          n(336), e.exports = n(16).Array.flatMap;
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(337), i = n(22), a = n(15), s = n(32), l = n(133);
          o(o.P, "Array", { flatMap: function(e2) {
            var t2, n2, o2 = i(this);
            return s(e2), t2 = a(o2.length), n2 = l(o2, 0), r(n2, o2, o2, t2, 0, 1, e2, arguments[1]), n2;
          } }), n(52)("flatMap");
        }, function(e, t, n) {
          "use strict";
          var o = n(73), r = n(13), i = n(15), a = n(31), s = n(14)("isConcatSpreadable");
          e.exports = function e2(t2, n2, l, c, u, f, d, p) {
            for (var h, v, g = u, y = 0, k = !!d && a(d, p, 3); y < c; ) {
              if (y in l) {
                if (h = k ? k(l[y], y, n2) : l[y], v = false, r(h) && (v = void 0 !== (v = h[s]) ? !!v : o(h)), v && f > 0)
                  g = e2(t2, n2, h, i(h.length), g, f - 1) - 1;
                else {
                  if (g >= 9007199254740991)
                    throw TypeError();
                  t2[g] = h;
                }
                g++;
              }
              y++;
            }
            return g;
          };
        }, function(e, t, n) {
          n(339), e.exports = n(16).String.padStart;
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(146), i = n(79), a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
          o(o.P + o.F * a, "String", { padStart: function(e2) {
            return r(this, e2, arguments.length > 1 ? arguments[1] : void 0, true);
          } });
        }, function(e, t, n) {
          n(341), e.exports = n(16).String.padEnd;
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(146), i = n(79), a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
          o(o.P + o.F * a, "String", { padEnd: function(e2) {
            return r(this, e2, arguments.length > 1 ? arguments[1] : void 0, false);
          } });
        }, function(e, t, n) {
          n(343), e.exports = n(16).String.trimLeft;
        }, function(e, t, n) {
          "use strict";
          n(56)("trimLeft", function(e2) {
            return function() {
              return e2(this, 1);
            };
          }, "trimStart");
        }, function(e, t, n) {
          n(345), e.exports = n(16).String.trimRight;
        }, function(e, t, n) {
          "use strict";
          n(56)("trimRight", function(e2) {
            return function() {
              return e2(this, 2);
            };
          }, "trimEnd");
        }, function(e, t, n) {
          n(347), e.exports = n(87).f("asyncIterator");
        }, function(e, t, n) {
          n(118)("asyncIterator");
        }, function(e, t, n) {
          n(349), e.exports = n(16).Object.getOwnPropertyDescriptors;
        }, function(e, t, n) {
          var o = n(0), r = n(145), i = n(28), a = n(34), s = n(103);
          o(o.S, "Object", { getOwnPropertyDescriptors: function(e2) {
            for (var t2, n2, o2 = i(e2), l = a.f, c = r(o2), u = {}, f = 0; c.length > f; )
              void 0 !== (n2 = l(o2, t2 = c[f++])) && s(u, t2, n2);
            return u;
          } });
        }, function(e, t, n) {
          n(351), e.exports = n(16).Object.values;
        }, function(e, t, n) {
          var o = n(0), r = n(147)(false);
          o(o.S, "Object", { values: function(e2) {
            return r(e2);
          } });
        }, function(e, t, n) {
          n(353), e.exports = n(16).Object.entries;
        }, function(e, t, n) {
          var o = n(0), r = n(147)(true);
          o(o.S, "Object", { entries: function(e2) {
            return r(e2);
          } });
        }, function(e, t, n) {
          "use strict";
          n(139), n(355), e.exports = n(16).Promise.finally;
        }, function(e, t, n) {
          "use strict";
          var o = n(0), r = n(16), i = n(10), a = n(65), s = n(141);
          o(o.P + o.R, "Promise", { finally: function(e2) {
            var t2 = a(this, r.Promise || i.Promise), n2 = "function" == typeof e2;
            return this.then(n2 ? function(n3) {
              return s(t2, e2()).then(function() {
                return n3;
              });
            } : e2, n2 ? function(n3) {
              return s(t2, e2()).then(function() {
                throw n3;
              });
            } : e2);
          } });
        }, function(e, t, n) {
          n(357), n(358), n(359), e.exports = n(16);
        }, function(e, t, n) {
          var o = n(10), r = n(0), i = n(79), a = [].slice, s = /MSIE .\./.test(i), l = function(e2) {
            return function(t2, n2) {
              var o2 = arguments.length > 2, r2 = !!o2 && a.call(arguments, 2);
              return e2(o2 ? function() {
                ("function" == typeof t2 ? t2 : Function(t2)).apply(this, r2);
              } : t2, n2);
            };
          };
          r(r.G + r.B + r.F * s, { setTimeout: l(o.setTimeout), setInterval: l(o.setInterval) });
        }, function(e, t, n) {
          var o = n(0), r = n(109);
          o(o.G + o.B, { setImmediate: r.set, clearImmediate: r.clear });
        }, function(e, t, n) {
          for (var o = n(106), r = n(47), i = n(23), a = n(10), s = n(27), l = n(57), c = n(14), u = c("iterator"), f = c("toStringTag"), d = l.Array, p = { CSSRuleList: true, CSSStyleDeclaration: false, CSSValueList: false, ClientRectList: false, DOMRectList: false, DOMStringList: false, DOMTokenList: true, DataTransferItemList: false, FileList: false, HTMLAllCollection: false, HTMLCollection: false, HTMLFormElement: false, HTMLSelectElement: false, MediaList: true, MimeTypeArray: false, NamedNodeMap: false, NodeList: true, PaintRequestList: false, Plugin: false, PluginArray: false, SVGLengthList: false, SVGNumberList: false, SVGPathSegList: false, SVGPointList: false, SVGStringList: false, SVGTransformList: false, SourceBufferList: false, StyleSheetList: true, TextTrackCueList: false, TextTrackList: false, TouchList: false }, h = r(p), v = 0; v < h.length; v++) {
            var g, y = h[v], k = p[y], b = a[y], m = b && b.prototype;
            if (m && (m[u] || s(m, u, d), m[f] || s(m, f, y), l[y] = d, k))
              for (g in o)
                m[g] || i(m, g, o[g], true);
          }
        }, function(e, t, n) {
          var o = function(e2) {
            "use strict";
            var t2 = Object.prototype, n2 = t2.hasOwnProperty, o2 = Object.defineProperty || function(e3, t3, n3) {
              e3[t3] = n3.value;
            }, r = "function" == typeof Symbol ? Symbol : {}, i = r.iterator || "@@iterator", a = r.asyncIterator || "@@asyncIterator", s = r.toStringTag || "@@toStringTag";
            function l(e3, t3, n3) {
              return Object.defineProperty(e3, t3, { value: n3, enumerable: true, configurable: true, writable: true }), e3[t3];
            }
            try {
              l({}, "");
            } catch (e3) {
              l = function(e4, t3, n3) {
                return e4[t3] = n3;
              };
            }
            function c(e3, t3, n3, r2) {
              var i2 = t3 && t3.prototype instanceof d ? t3 : d, a2 = Object.create(i2.prototype), s2 = new T(r2 || []);
              return o2(a2, "_invoke", { value: w(e3, n3, s2) }), a2;
            }
            function u(e3, t3, n3) {
              try {
                return { type: "normal", arg: e3.call(t3, n3) };
              } catch (e4) {
                return { type: "throw", arg: e4 };
              }
            }
            e2.wrap = c;
            var f = {};
            function d() {
            }
            function p() {
            }
            function h() {
            }
            var v = {};
            l(v, i, function() {
              return this;
            });
            var g = Object.getPrototypeOf, y = g && g(g(E([])));
            y && y !== t2 && n2.call(y, i) && (v = y);
            var k = h.prototype = d.prototype = Object.create(v);
            function b(e3) {
              ["next", "throw", "return"].forEach(function(t3) {
                l(e3, t3, function(e4) {
                  return this._invoke(t3, e4);
                });
              });
            }
            function m(e3, t3) {
              var r2;
              o2(this, "_invoke", { value: function(o3, i2) {
                function a2() {
                  return new t3(function(r3, a3) {
                    !function o4(r4, i3, a4, s2) {
                      var l2 = u(e3[r4], e3, i3);
                      if ("throw" !== l2.type) {
                        var c2 = l2.arg, f2 = c2.value;
                        return f2 && "object" == typeof f2 && n2.call(f2, "__await") ? t3.resolve(f2.__await).then(function(e4) {
                          o4("next", e4, a4, s2);
                        }, function(e4) {
                          o4("throw", e4, a4, s2);
                        }) : t3.resolve(f2).then(function(e4) {
                          c2.value = e4, a4(c2);
                        }, function(e4) {
                          return o4("throw", e4, a4, s2);
                        });
                      }
                      s2(l2.arg);
                    }(o3, i2, r3, a3);
                  });
                }
                return r2 = r2 ? r2.then(a2, a2) : a2();
              } });
            }
            function w(e3, t3, n3) {
              var o3 = "suspendedStart";
              return function(r2, i2) {
                if ("executing" === o3)
                  throw new Error("Generator is already running");
                if ("completed" === o3) {
                  if ("throw" === r2)
                    throw i2;
                  return B();
                }
                for (n3.method = r2, n3.arg = i2; ; ) {
                  var a2 = n3.delegate;
                  if (a2) {
                    var s2 = x(a2, n3);
                    if (s2) {
                      if (s2 === f)
                        continue;
                      return s2;
                    }
                  }
                  if ("next" === n3.method)
                    n3.sent = n3._sent = n3.arg;
                  else if ("throw" === n3.method) {
                    if ("suspendedStart" === o3)
                      throw o3 = "completed", n3.arg;
                    n3.dispatchException(n3.arg);
                  } else
                    "return" === n3.method && n3.abrupt("return", n3.arg);
                  o3 = "executing";
                  var l2 = u(e3, t3, n3);
                  if ("normal" === l2.type) {
                    if (o3 = n3.done ? "completed" : "suspendedYield", l2.arg === f)
                      continue;
                    return { value: l2.arg, done: n3.done };
                  }
                  "throw" === l2.type && (o3 = "completed", n3.method = "throw", n3.arg = l2.arg);
                }
              };
            }
            function x(e3, t3) {
              var n3 = t3.method, o3 = e3.iterator[n3];
              if (void 0 === o3)
                return t3.delegate = null, "throw" === n3 && e3.iterator.return && (t3.method = "return", t3.arg = void 0, x(e3, t3), "throw" === t3.method) || "return" !== n3 && (t3.method = "throw", t3.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), f;
              var r2 = u(o3, e3.iterator, t3.arg);
              if ("throw" === r2.type)
                return t3.method = "throw", t3.arg = r2.arg, t3.delegate = null, f;
              var i2 = r2.arg;
              return i2 ? i2.done ? (t3[e3.resultName] = i2.value, t3.next = e3.nextLoc, "return" !== t3.method && (t3.method = "next", t3.arg = void 0), t3.delegate = null, f) : i2 : (t3.method = "throw", t3.arg = new TypeError("iterator result is not an object"), t3.delegate = null, f);
            }
            function C(e3) {
              var t3 = { tryLoc: e3[0] };
              1 in e3 && (t3.catchLoc = e3[1]), 2 in e3 && (t3.finallyLoc = e3[2], t3.afterLoc = e3[3]), this.tryEntries.push(t3);
            }
            function S(e3) {
              var t3 = e3.completion || {};
              t3.type = "normal", delete t3.arg, e3.completion = t3;
            }
            function T(e3) {
              this.tryEntries = [{ tryLoc: "root" }], e3.forEach(C, this), this.reset(true);
            }
            function E(e3) {
              if (e3) {
                var t3 = e3[i];
                if (t3)
                  return t3.call(e3);
                if ("function" == typeof e3.next)
                  return e3;
                if (!isNaN(e3.length)) {
                  var o3 = -1, r2 = function t4() {
                    for (; ++o3 < e3.length; )
                      if (n2.call(e3, o3))
                        return t4.value = e3[o3], t4.done = false, t4;
                    return t4.value = void 0, t4.done = true, t4;
                  };
                  return r2.next = r2;
                }
              }
              return { next: B };
            }
            function B() {
              return { value: void 0, done: true };
            }
            return p.prototype = h, o2(k, "constructor", { value: h, configurable: true }), o2(h, "constructor", { value: p, configurable: true }), p.displayName = l(h, s, "GeneratorFunction"), e2.isGeneratorFunction = function(e3) {
              var t3 = "function" == typeof e3 && e3.constructor;
              return !!t3 && (t3 === p || "GeneratorFunction" === (t3.displayName || t3.name));
            }, e2.mark = function(e3) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(e3, h) : (e3.__proto__ = h, l(e3, s, "GeneratorFunction")), e3.prototype = Object.create(k), e3;
            }, e2.awrap = function(e3) {
              return { __await: e3 };
            }, b(m.prototype), l(m.prototype, a, function() {
              return this;
            }), e2.AsyncIterator = m, e2.async = function(t3, n3, o3, r2, i2) {
              void 0 === i2 && (i2 = Promise);
              var a2 = new m(c(t3, n3, o3, r2), i2);
              return e2.isGeneratorFunction(n3) ? a2 : a2.next().then(function(e3) {
                return e3.done ? e3.value : a2.next();
              });
            }, b(k), l(k, s, "Generator"), l(k, i, function() {
              return this;
            }), l(k, "toString", function() {
              return "[object Generator]";
            }), e2.keys = function(e3) {
              var t3 = Object(e3), n3 = [];
              for (var o3 in t3)
                n3.push(o3);
              return n3.reverse(), function e4() {
                for (; n3.length; ) {
                  var o4 = n3.pop();
                  if (o4 in t3)
                    return e4.value = o4, e4.done = false, e4;
                }
                return e4.done = true, e4;
              };
            }, e2.values = E, T.prototype = { constructor: T, reset: function(e3) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !e3)
                for (var t3 in this)
                  "t" === t3.charAt(0) && n2.call(this, t3) && !isNaN(+t3.slice(1)) && (this[t3] = void 0);
            }, stop: function() {
              this.done = true;
              var e3 = this.tryEntries[0].completion;
              if ("throw" === e3.type)
                throw e3.arg;
              return this.rval;
            }, dispatchException: function(e3) {
              if (this.done)
                throw e3;
              var t3 = this;
              function o3(n3, o4) {
                return a2.type = "throw", a2.arg = e3, t3.next = n3, o4 && (t3.method = "next", t3.arg = void 0), !!o4;
              }
              for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
                var i2 = this.tryEntries[r2], a2 = i2.completion;
                if ("root" === i2.tryLoc)
                  return o3("end");
                if (i2.tryLoc <= this.prev) {
                  var s2 = n2.call(i2, "catchLoc"), l2 = n2.call(i2, "finallyLoc");
                  if (s2 && l2) {
                    if (this.prev < i2.catchLoc)
                      return o3(i2.catchLoc, true);
                    if (this.prev < i2.finallyLoc)
                      return o3(i2.finallyLoc);
                  } else if (s2) {
                    if (this.prev < i2.catchLoc)
                      return o3(i2.catchLoc, true);
                  } else {
                    if (!l2)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i2.finallyLoc)
                      return o3(i2.finallyLoc);
                  }
                }
              }
            }, abrupt: function(e3, t3) {
              for (var o3 = this.tryEntries.length - 1; o3 >= 0; --o3) {
                var r2 = this.tryEntries[o3];
                if (r2.tryLoc <= this.prev && n2.call(r2, "finallyLoc") && this.prev < r2.finallyLoc) {
                  var i2 = r2;
                  break;
                }
              }
              i2 && ("break" === e3 || "continue" === e3) && i2.tryLoc <= t3 && t3 <= i2.finallyLoc && (i2 = null);
              var a2 = i2 ? i2.completion : {};
              return a2.type = e3, a2.arg = t3, i2 ? (this.method = "next", this.next = i2.finallyLoc, f) : this.complete(a2);
            }, complete: function(e3, t3) {
              if ("throw" === e3.type)
                throw e3.arg;
              return "break" === e3.type || "continue" === e3.type ? this.next = e3.arg : "return" === e3.type ? (this.rval = this.arg = e3.arg, this.method = "return", this.next = "end") : "normal" === e3.type && t3 && (this.next = t3), f;
            }, finish: function(e3) {
              for (var t3 = this.tryEntries.length - 1; t3 >= 0; --t3) {
                var n3 = this.tryEntries[t3];
                if (n3.finallyLoc === e3)
                  return this.complete(n3.completion, n3.afterLoc), S(n3), f;
              }
            }, catch: function(e3) {
              for (var t3 = this.tryEntries.length - 1; t3 >= 0; --t3) {
                var n3 = this.tryEntries[t3];
                if (n3.tryLoc === e3) {
                  var o3 = n3.completion;
                  if ("throw" === o3.type) {
                    var r2 = o3.arg;
                    S(n3);
                  }
                  return r2;
                }
              }
              throw new Error("illegal catch attempt");
            }, delegateYield: function(e3, t3, n3) {
              return this.delegate = { iterator: E(e3), resultName: t3, nextLoc: n3 }, "next" === this.method && (this.arg = void 0), f;
            } }, e2;
          }(e.exports);
          try {
            regeneratorRuntime = o;
          } catch (e2) {
            "object" == typeof globalThis ? globalThis.regeneratorRuntime = o : Function("r", "regeneratorRuntime = r")(o);
          }
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(30), n(2), n(3), n(365), n(366), n(367), n(8)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f) {
            "use strict";
            var d = n(1);
            function p(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (p = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = d(r2), i2 = d(i2), s = d(s), u = d(u), f = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = p(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(f);
            var h = function() {
              function e2(t2) {
                var n2 = this;
                (0, i2.default)(this, e2);
                var o3 = function() {
                };
                f.isObject(t2) && f.isFunction(t2.onReady) && (o3 = t2.onReady);
                var r3 = new u.default(t2);
                this.isReady = r3.isReady.then(function() {
                  n2.exportAPI(r3), o3();
                });
              }
              return (0, s.default)(e2, [{ key: "exportAPI", value: function(e3) {
                var t2 = this;
                ["configuration"].forEach(function(n2) {
                  t2[n2] = e3[n2];
                }), this.destroy = function() {
                  for (var n2 in Object.values(e3.moduleInstances).forEach(function(e4) {
                    f.isFunction(e4.destroy) && e4.destroy(), e4.listeners.removeAll();
                  }), e3 = null, t2)
                    Object.prototype.hasOwnProperty.call(t2, n2) && delete t2[n2];
                  Object.setPrototypeOf(t2, null);
                }, Object.setPrototypeOf(this, e3.moduleInstances.API.methods), delete this.exportAPI, Object.entries({ blocks: { clear: "clear", render: "render" }, caret: { focus: "focus" }, events: { on: "on", off: "off", emit: "emit" }, saver: { save: "save" } }).forEach(function(n2) {
                  var o3 = (0, r2.default)(n2, 2), i3 = o3[0], a2 = o3[1];
                  Object.entries(a2).forEach(function(n3) {
                    var o4 = (0, r2.default)(n3, 2), a3 = o4[0], s2 = o4[1];
                    t2[s2] = e3.moduleInstances.API.methods[i3][a3];
                  });
                });
              } }], [{ key: "version", get: function() {
                return "2.26.5";
              } }]), e2;
            }();
            o2.default = h, h.displayName = "EditorJS", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t) {
          e.exports = function(e2) {
            if (Array.isArray(e2))
              return e2;
          }, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t) {
          e.exports = function(e2, t2) {
            var n = null == e2 ? null : "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
            if (null != n) {
              var o, r, i = [], a = true, s = false;
              try {
                for (n = n.call(e2); !(a = (o = n.next()).done) && (i.push(o.value), !t2 || i.length !== t2); a = true)
                  ;
              } catch (e3) {
                s = true, r = e3;
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (s)
                    throw r;
                }
              }
              return i;
            }
          }, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t) {
          e.exports = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t) {
          function n() {
          }
          e.exports = Object.assign(n, { default: n, register: n, revert: function() {
          }, __esModule: true });
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [], void 0 === (i = "function" == typeof (o = function() {
            "use strict";
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e2) {
              for (var t2 = (this.document || this.ownerDocument).querySelectorAll(e2), n2 = t2.length; --n2 >= 0 && t2.item(n2) !== this; )
                ;
              return n2 > -1;
            }), Element.prototype.closest || (Element.prototype.closest = function(e2) {
              var t2 = this;
              if (!document.documentElement.contains(t2))
                return null;
              do {
                if (t2.matches(e2))
                  return t2;
                t2 = t2.parentElement || t2.parentNode;
              } while (null !== t2);
              return null;
            }), Element.prototype.prepend || (Element.prototype.prepend = function(e2) {
              var t2 = document.createDocumentFragment();
              Array.isArray(e2) || (e2 = [e2]), e2.forEach(function(e3) {
                var n2 = e3 instanceof Node;
                t2.appendChild(n2 ? e3 : document.createTextNode(e3));
              }), this.insertBefore(t2, this.firstChild);
            }), Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(e2) {
              e2 = 0 === arguments.length || !!e2;
              var t2 = this.parentNode, n2 = window.getComputedStyle(t2, null), o2 = parseInt(n2.getPropertyValue("border-top-width")), r2 = parseInt(n2.getPropertyValue("border-left-width")), i2 = this.offsetTop - t2.offsetTop < t2.scrollTop, a = this.offsetTop - t2.offsetTop + this.clientHeight - o2 > t2.scrollTop + t2.clientHeight, s = this.offsetLeft - t2.offsetLeft < t2.scrollLeft, l = this.offsetLeft - t2.offsetLeft + this.clientWidth - r2 > t2.scrollLeft + t2.clientWidth, c = i2 && !a;
              (i2 || a) && e2 && (t2.scrollTop = this.offsetTop - t2.offsetTop - t2.clientHeight / 2 - o2 + this.clientHeight / 2), (s || l) && e2 && (t2.scrollLeft = this.offsetLeft - t2.offsetLeft - t2.clientWidth / 2 - r2 + this.clientWidth / 2), (i2 || a || s || l) && !e2 && this.scrollIntoView(c);
            });
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(20), n(21), n(2), n(3), n(19), n(8), n(54), n(151), n(82)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f, d, p) {
            "use strict";
            var h = n(1);
            function v(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (v = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = h(r2), i2 = h(i2), s = h(s), l = h(l), c = h(c), u = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = v(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(u), f = h(f), p = h(p);
            var g = n(376), y = [];
            g.keys().forEach(function(e2) {
              e2.match(/^\.\/[^_][\w/]*\.([tj])s$/) && y.push(g(e2));
            });
            var k = function() {
              function e2(t3) {
                var n3, o3, a2 = this;
                (0, s.default)(this, e2), this.moduleInstances = {}, this.eventsDispatcher = new p.default(), this.isReady = new Promise(function(e3, t4) {
                  n3 = e3, o3 = t4;
                }), Promise.resolve().then((0, i2.default)(r2.default.mark(function e3() {
                  return r2.default.wrap(function(e4) {
                    for (; ; )
                      switch (e4.prev = e4.next) {
                        case 0:
                          return a2.configuration = t3, e4.next = 3, a2.validate();
                        case 3:
                          return e4.next = 5, a2.init();
                        case 5:
                          return e4.next = 7, a2.start();
                        case 7:
                          u.logLabeled("I'm ready! (\uFF89\u25D5\u30EE\u25D5)\uFF89*:\uFF65\uFF9F\u2727", "log", "", "color: #E24A75"), setTimeout((0, i2.default)(r2.default.mark(function e5() {
                            var t4, o4, i3;
                            return r2.default.wrap(function(e6) {
                              for (; ; )
                                switch (e6.prev = e6.next) {
                                  case 0:
                                    return e6.next = 2, a2.render();
                                  case 2:
                                    a2.configuration.autofocus && (t4 = a2.moduleInstances, o4 = t4.BlockManager, (i3 = t4.Caret).setToBlock(o4.blocks[0], i3.positions.START), o4.highlightCurrentNode()), a2.moduleInstances.UI.removeLoader(), n3();
                                  case 5:
                                  case "end":
                                    return e6.stop();
                                }
                            }, e5);
                          })), 500);
                        case 9:
                        case "end":
                          return e4.stop();
                      }
                  }, e3);
                }))).catch(function(e3) {
                  u.log("Editor.js is not ready because of ".concat(e3), "error"), o3(e3);
                });
              }
              var t2, n2;
              return (0, l.default)(e2, [{ key: "configuration", get: function() {
                return this.config;
              }, set: function(e3) {
                var t3, n3;
                u.isObject(e3) ? this.config = Object.assign({}, e3) : this.config = { holder: e3 }, u.deprecationAssert(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), null == this.config.holder && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = u.LogLevels.VERBOSE), u.setLogLevel(this.config.logLevel), u.deprecationAssert(Boolean(this.config.initialBlock), "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = void 0 !== this.config.minHeight ? this.config.minHeight : 300;
                var o3 = { type: this.config.defaultBlock, data: {} };
                this.config.placeholder = this.config.placeholder || false, this.config.sanitizer = this.config.sanitizer || { p: true, b: true, a: true }, this.config.hideToolbar = !!this.config.hideToolbar && this.config.hideToolbar, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || { blocks: [] }, this.config.onReady = this.config.onReady || function() {
                }, this.config.onChange = this.config.onChange || function() {
                }, this.config.inlineToolbar = void 0 === this.config.inlineToolbar || this.config.inlineToolbar, !u.isEmpty(this.config.data) && this.config.data.blocks && 0 !== this.config.data.blocks.length || (this.config.data = { blocks: [o3] }), this.config.readOnly = this.config.readOnly || false, (null === (t3 = this.config.i18n) || void 0 === t3 ? void 0 : t3.messages) && f.default.setDictionary(this.config.i18n.messages), this.config.i18n.direction = (null === (n3 = this.config.i18n) || void 0 === n3 ? void 0 : n3.direction) || "ltr";
              } }, { key: "validate", value: (n2 = (0, i2.default)(r2.default.mark(function e3() {
                var t3, n3, o3;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        if (t3 = this.config, n3 = t3.holderId, o3 = t3.holder, !n3 || !o3) {
                          e4.next = 3;
                          break;
                        }
                        throw Error("\xABholderId\xBB and \xABholder\xBB param can't assign at the same time.");
                      case 3:
                        if (!u.isString(o3) || c.default.get(o3)) {
                          e4.next = 5;
                          break;
                        }
                        throw Error("element with ID \xAB".concat(o3, "\xBB is missing. Pass correct holder's ID."));
                      case 5:
                        if (!o3 || !u.isObject(o3) || c.default.isElement(o3)) {
                          e4.next = 7;
                          break;
                        }
                        throw Error("\xABholder\xBB value must be an Element node");
                      case 7:
                      case "end":
                        return e4.stop();
                    }
                }, e3, this);
              })), function() {
                return n2.apply(this, arguments);
              }) }, { key: "init", value: function() {
                this.constructModules(), this.configureModules();
              } }, { key: "start", value: (t2 = (0, i2.default)(r2.default.mark(function e3() {
                var t3, n3 = this;
                return r2.default.wrap(function(e4) {
                  for (; ; )
                    switch (e4.prev = e4.next) {
                      case 0:
                        return t3 = ["Tools", "UI", "BlockManager", "Paste", "BlockSelection", "RectangleSelection", "CrossBlockSelection", "ReadOnly"], e4.next = 3, t3.reduce(function(e5, t4) {
                          return e5.then((0, i2.default)(r2.default.mark(function e6() {
                            return r2.default.wrap(function(e7) {
                              for (; ; )
                                switch (e7.prev = e7.next) {
                                  case 0:
                                    return e7.prev = 0, e7.next = 3, n3.moduleInstances[t4].prepare();
                                  case 3:
                                    e7.next = 10;
                                    break;
                                  case 5:
                                    if (e7.prev = 5, e7.t0 = e7.catch(0), !(e7.t0 instanceof d.CriticalError)) {
                                      e7.next = 9;
                                      break;
                                    }
                                    throw new Error(e7.t0.message);
                                  case 9:
                                    u.log("Module ".concat(t4, " was skipped because of %o"), "warn", e7.t0);
                                  case 10:
                                  case "end":
                                    return e7.stop();
                                }
                            }, e6, null, [[0, 5]]);
                          })));
                        }, Promise.resolve());
                      case 3:
                      case "end":
                        return e4.stop();
                    }
                }, e3);
              })), function() {
                return t2.apply(this, arguments);
              }) }, { key: "render", value: function() {
                return this.moduleInstances.Renderer.render(this.config.data.blocks);
              } }, { key: "constructModules", value: function() {
                var e3 = this;
                y.forEach(function(t3) {
                  var n3 = u.isFunction(t3) ? t3 : t3.default;
                  try {
                    e3.moduleInstances[n3.displayName] = new n3({ config: e3.configuration, eventsDispatcher: e3.eventsDispatcher });
                  } catch (e4) {
                    u.log("Module ".concat(n3.displayName, " skipped because"), "error", e4);
                  }
                });
              } }, { key: "configureModules", value: function() {
                for (var e3 in this.moduleInstances)
                  Object.prototype.hasOwnProperty.call(this.moduleInstances, e3) && (this.moduleInstances[e3].state = this.getModulesDiff(e3));
              } }, { key: "getModulesDiff", value: function(e3) {
                var t3 = {};
                for (var n3 in this.moduleInstances)
                  n3 !== e3 && (t3[n3] = this.moduleInstances[n3]);
                return t3;
              } }]), e2;
            }();
            o2.default = k, k.displayName = "Core", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o = n(7).default;
          function r() {
            "use strict";
            e.exports = r = function() {
              return t2;
            }, e.exports.__esModule = true, e.exports.default = e.exports;
            var t2 = {}, n2 = Object.prototype, i = n2.hasOwnProperty, a = Object.defineProperty || function(e2, t3, n3) {
              e2[t3] = n3.value;
            }, s = "function" == typeof Symbol ? Symbol : {}, l = s.iterator || "@@iterator", c = s.asyncIterator || "@@asyncIterator", u = s.toStringTag || "@@toStringTag";
            function f(e2, t3, n3) {
              return Object.defineProperty(e2, t3, { value: n3, enumerable: true, configurable: true, writable: true }), e2[t3];
            }
            try {
              f({}, "");
            } catch (e2) {
              f = function(e3, t3, n3) {
                return e3[t3] = n3;
              };
            }
            function d(e2, t3, n3, o2) {
              var r2 = t3 && t3.prototype instanceof v ? t3 : v, i2 = Object.create(r2.prototype), s2 = new M(o2 || []);
              return a(i2, "_invoke", { value: S(e2, n3, s2) }), i2;
            }
            function p(e2, t3, n3) {
              try {
                return { type: "normal", arg: e2.call(t3, n3) };
              } catch (e3) {
                return { type: "throw", arg: e3 };
              }
            }
            t2.wrap = d;
            var h = {};
            function v() {
            }
            function g() {
            }
            function y() {
            }
            var k = {};
            f(k, l, function() {
              return this;
            });
            var b = Object.getPrototypeOf, m = b && b(b(_([])));
            m && m !== n2 && i.call(m, l) && (k = m);
            var w = y.prototype = v.prototype = Object.create(k);
            function x(e2) {
              ["next", "throw", "return"].forEach(function(t3) {
                f(e2, t3, function(e3) {
                  return this._invoke(t3, e3);
                });
              });
            }
            function C(e2, t3) {
              var n3;
              a(this, "_invoke", { value: function(r2, a2) {
                function s2() {
                  return new t3(function(n4, s3) {
                    !function n5(r3, a3, s4, l2) {
                      var c2 = p(e2[r3], e2, a3);
                      if ("throw" !== c2.type) {
                        var u2 = c2.arg, f2 = u2.value;
                        return f2 && "object" == o(f2) && i.call(f2, "__await") ? t3.resolve(f2.__await).then(function(e3) {
                          n5("next", e3, s4, l2);
                        }, function(e3) {
                          n5("throw", e3, s4, l2);
                        }) : t3.resolve(f2).then(function(e3) {
                          u2.value = e3, s4(u2);
                        }, function(e3) {
                          return n5("throw", e3, s4, l2);
                        });
                      }
                      l2(c2.arg);
                    }(r2, a2, n4, s3);
                  });
                }
                return n3 = n3 ? n3.then(s2, s2) : s2();
              } });
            }
            function S(e2, t3, n3) {
              var o2 = "suspendedStart";
              return function(r2, i2) {
                if ("executing" === o2)
                  throw new Error("Generator is already running");
                if ("completed" === o2) {
                  if ("throw" === r2)
                    throw i2;
                  return O();
                }
                for (n3.method = r2, n3.arg = i2; ; ) {
                  var a2 = n3.delegate;
                  if (a2) {
                    var s2 = T(a2, n3);
                    if (s2) {
                      if (s2 === h)
                        continue;
                      return s2;
                    }
                  }
                  if ("next" === n3.method)
                    n3.sent = n3._sent = n3.arg;
                  else if ("throw" === n3.method) {
                    if ("suspendedStart" === o2)
                      throw o2 = "completed", n3.arg;
                    n3.dispatchException(n3.arg);
                  } else
                    "return" === n3.method && n3.abrupt("return", n3.arg);
                  o2 = "executing";
                  var l2 = p(e2, t3, n3);
                  if ("normal" === l2.type) {
                    if (o2 = n3.done ? "completed" : "suspendedYield", l2.arg === h)
                      continue;
                    return { value: l2.arg, done: n3.done };
                  }
                  "throw" === l2.type && (o2 = "completed", n3.method = "throw", n3.arg = l2.arg);
                }
              };
            }
            function T(e2, t3) {
              var n3 = e2.iterator[t3.method];
              if (void 0 === n3) {
                if (t3.delegate = null, "throw" === t3.method) {
                  if (e2.iterator.return && (t3.method = "return", t3.arg = void 0, T(e2, t3), "throw" === t3.method))
                    return h;
                  t3.method = "throw", t3.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return h;
              }
              var o2 = p(n3, e2.iterator, t3.arg);
              if ("throw" === o2.type)
                return t3.method = "throw", t3.arg = o2.arg, t3.delegate = null, h;
              var r2 = o2.arg;
              return r2 ? r2.done ? (t3[e2.resultName] = r2.value, t3.next = e2.nextLoc, "return" !== t3.method && (t3.method = "next", t3.arg = void 0), t3.delegate = null, h) : r2 : (t3.method = "throw", t3.arg = new TypeError("iterator result is not an object"), t3.delegate = null, h);
            }
            function E(e2) {
              var t3 = { tryLoc: e2[0] };
              1 in e2 && (t3.catchLoc = e2[1]), 2 in e2 && (t3.finallyLoc = e2[2], t3.afterLoc = e2[3]), this.tryEntries.push(t3);
            }
            function B(e2) {
              var t3 = e2.completion || {};
              t3.type = "normal", delete t3.arg, e2.completion = t3;
            }
            function M(e2) {
              this.tryEntries = [{ tryLoc: "root" }], e2.forEach(E, this), this.reset(true);
            }
            function _(e2) {
              if (e2) {
                var t3 = e2[l];
                if (t3)
                  return t3.call(e2);
                if ("function" == typeof e2.next)
                  return e2;
                if (!isNaN(e2.length)) {
                  var n3 = -1, o2 = function t4() {
                    for (; ++n3 < e2.length; )
                      if (i.call(e2, n3))
                        return t4.value = e2[n3], t4.done = false, t4;
                    return t4.value = void 0, t4.done = true, t4;
                  };
                  return o2.next = o2;
                }
              }
              return { next: O };
            }
            function O() {
              return { value: void 0, done: true };
            }
            return g.prototype = y, a(w, "constructor", { value: y, configurable: true }), a(y, "constructor", { value: g, configurable: true }), g.displayName = f(y, u, "GeneratorFunction"), t2.isGeneratorFunction = function(e2) {
              var t3 = "function" == typeof e2 && e2.constructor;
              return !!t3 && (t3 === g || "GeneratorFunction" === (t3.displayName || t3.name));
            }, t2.mark = function(e2) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(e2, y) : (e2.__proto__ = y, f(e2, u, "GeneratorFunction")), e2.prototype = Object.create(w), e2;
            }, t2.awrap = function(e2) {
              return { __await: e2 };
            }, x(C.prototype), f(C.prototype, c, function() {
              return this;
            }), t2.AsyncIterator = C, t2.async = function(e2, n3, o2, r2, i2) {
              void 0 === i2 && (i2 = Promise);
              var a2 = new C(d(e2, n3, o2, r2), i2);
              return t2.isGeneratorFunction(n3) ? a2 : a2.next().then(function(e3) {
                return e3.done ? e3.value : a2.next();
              });
            }, x(w), f(w, u, "Generator"), f(w, l, function() {
              return this;
            }), f(w, "toString", function() {
              return "[object Generator]";
            }), t2.keys = function(e2) {
              var t3 = Object(e2), n3 = [];
              for (var o2 in t3)
                n3.push(o2);
              return n3.reverse(), function e3() {
                for (; n3.length; ) {
                  var o3 = n3.pop();
                  if (o3 in t3)
                    return e3.value = o3, e3.done = false, e3;
                }
                return e3.done = true, e3;
              };
            }, t2.values = _, M.prototype = { constructor: M, reset: function(e2) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(B), !e2)
                for (var t3 in this)
                  "t" === t3.charAt(0) && i.call(this, t3) && !isNaN(+t3.slice(1)) && (this[t3] = void 0);
            }, stop: function() {
              this.done = true;
              var e2 = this.tryEntries[0].completion;
              if ("throw" === e2.type)
                throw e2.arg;
              return this.rval;
            }, dispatchException: function(e2) {
              if (this.done)
                throw e2;
              var t3 = this;
              function n3(n4, o3) {
                return a2.type = "throw", a2.arg = e2, t3.next = n4, o3 && (t3.method = "next", t3.arg = void 0), !!o3;
              }
              for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
                var r2 = this.tryEntries[o2], a2 = r2.completion;
                if ("root" === r2.tryLoc)
                  return n3("end");
                if (r2.tryLoc <= this.prev) {
                  var s2 = i.call(r2, "catchLoc"), l2 = i.call(r2, "finallyLoc");
                  if (s2 && l2) {
                    if (this.prev < r2.catchLoc)
                      return n3(r2.catchLoc, true);
                    if (this.prev < r2.finallyLoc)
                      return n3(r2.finallyLoc);
                  } else if (s2) {
                    if (this.prev < r2.catchLoc)
                      return n3(r2.catchLoc, true);
                  } else {
                    if (!l2)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < r2.finallyLoc)
                      return n3(r2.finallyLoc);
                  }
                }
              }
            }, abrupt: function(e2, t3) {
              for (var n3 = this.tryEntries.length - 1; n3 >= 0; --n3) {
                var o2 = this.tryEntries[n3];
                if (o2.tryLoc <= this.prev && i.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
                  var r2 = o2;
                  break;
                }
              }
              r2 && ("break" === e2 || "continue" === e2) && r2.tryLoc <= t3 && t3 <= r2.finallyLoc && (r2 = null);
              var a2 = r2 ? r2.completion : {};
              return a2.type = e2, a2.arg = t3, r2 ? (this.method = "next", this.next = r2.finallyLoc, h) : this.complete(a2);
            }, complete: function(e2, t3) {
              if ("throw" === e2.type)
                throw e2.arg;
              return "break" === e2.type || "continue" === e2.type ? this.next = e2.arg : "return" === e2.type ? (this.rval = this.arg = e2.arg, this.method = "return", this.next = "end") : "normal" === e2.type && t3 && (this.next = t3), h;
            }, finish: function(e2) {
              for (var t3 = this.tryEntries.length - 1; t3 >= 0; --t3) {
                var n3 = this.tryEntries[t3];
                if (n3.finallyLoc === e2)
                  return this.complete(n3.completion, n3.afterLoc), B(n3), h;
              }
            }, catch: function(e2) {
              for (var t3 = this.tryEntries.length - 1; t3 >= 0; --t3) {
                var n3 = this.tryEntries[t3];
                if (n3.tryLoc === e2) {
                  var o2 = n3.completion;
                  if ("throw" === o2.type) {
                    var r2 = o2.arg;
                    B(n3);
                  }
                  return r2;
                }
              }
              throw new Error("illegal catch attempt");
            }, delegateYield: function(e2, t3, n3) {
              return this.delegate = { iterator: _(e2), resultName: t3, nextLoc: n3 }, "next" === this.method && (this.arg = void 0), h;
            } }, t2;
          }
          e.exports = r, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t, n) {
          var o = n(149);
          e.exports = function(e2) {
            if (Array.isArray(e2))
              return o(e2);
          }, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t) {
          e.exports = function(e2) {
            if ("undefined" != typeof Symbol && null != e2[Symbol.iterator] || null != e2["@@iterator"])
              return Array.from(e2);
          }, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t) {
          e.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t) {
          e.exports = function(e2, t2, n) {
            return t2 in e2 ? Object.defineProperty(e2, t2, { value: n, enumerable: true, configurable: true, writable: true }) : e2[t2] = n, e2;
          }, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t) {
          e.exports = function(e2) {
            return -1 !== Function.toString.call(e2).indexOf("[native code]");
          }, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t, n) {
          var o = n(111), r = n(375);
          function i(t2, n2, a) {
            return r() ? (e.exports = i = Reflect.construct.bind(), e.exports.__esModule = true, e.exports.default = e.exports) : (e.exports = i = function(e2, t3, n3) {
              var r2 = [null];
              r2.push.apply(r2, t3);
              var i2 = new (Function.bind.apply(e2, r2))();
              return n3 && o(i2, n3.prototype), i2;
            }, e.exports.__esModule = true, e.exports.default = e.exports), i.apply(null, arguments);
          }
          e.exports = i, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t) {
          e.exports = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e2) {
              return false;
            }
          }, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t, n) {
          var o = { "./api": 83, "./api/": 83, "./api/blocks": 154, "./api/blocks.ts": 154, "./api/caret": 155, "./api/caret.ts": 155, "./api/events": 156, "./api/events.ts": 156, "./api/i18n": 157, "./api/i18n.ts": 157, "./api/index": 83, "./api/index.ts": 83, "./api/inlineToolbar": 158, "./api/inlineToolbar.ts": 158, "./api/listeners": 159, "./api/listeners.ts": 159, "./api/notifier": 160, "./api/notifier.ts": 160, "./api/readonly": 161, "./api/readonly.ts": 161, "./api/sanitizer": 162, "./api/sanitizer.ts": 162, "./api/saver": 163, "./api/saver.ts": 163, "./api/selection": 164, "./api/selection.ts": 164, "./api/styles": 165, "./api/styles.ts": 165, "./api/toolbar": 166, "./api/toolbar.ts": 166, "./api/tooltip": 167, "./api/tooltip.ts": 167, "./api/ui": 168, "./api/ui.ts": 168, "./blockEvents": 169, "./blockEvents.ts": 169, "./blockManager": 170, "./blockManager.ts": 170, "./blockSelection": 171, "./blockSelection.ts": 171, "./caret": 172, "./caret.ts": 172, "./crossBlockSelection": 173, "./crossBlockSelection.ts": 173, "./dragNDrop": 174, "./dragNDrop.ts": 174, "./modificationsObserver": 175, "./modificationsObserver.ts": 175, "./paste": 176, "./paste.ts": 176, "./readonly": 177, "./readonly.ts": 177, "./rectangleSelection": 178, "./rectangleSelection.ts": 178, "./renderer": 179, "./renderer.ts": 179, "./saver": 180, "./saver.ts": 180, "./toolbar": 84, "./toolbar/": 84, "./toolbar/blockSettings": 181, "./toolbar/blockSettings.ts": 181, "./toolbar/conversion": 182, "./toolbar/conversion.ts": 182, "./toolbar/index": 84, "./toolbar/index.ts": 84, "./toolbar/inline": 183, "./toolbar/inline.ts": 183, "./tools": 184, "./tools.ts": 184, "./ui": 186, "./ui.ts": 186 };
          function r(e2) {
            var t2 = i(e2);
            return n(t2);
          }
          function i(e2) {
            if (!n.o(o, e2)) {
              var t2 = new Error("Cannot find module '" + e2 + "'");
              throw t2.code = "MODULE_NOT_FOUND", t2;
            }
            return o[e2];
          }
          r.keys = function() {
            return Object.keys(o);
          }, r.resolve = i, e.exports = r, r.id = 376;
        }, function(e, t, n) {
          var o = n(4);
          e.exports = function(e2, t2) {
            for (; !Object.prototype.hasOwnProperty.call(e2, t2) && null !== (e2 = o(e2)); )
              ;
            return e2;
          }, e.exports.__esModule = true, e.exports.default = e.exports;
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(379)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var l = function() {
              function e2() {
                (0, r2.default)(this, e2);
              }
              return (0, i2.default)(e2, [{ key: "show", value: function(e3) {
                a.default.show(e3);
              } }]), e2;
            }();
            o2.default = l, l.displayName = "Notifier", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          window, e.exports = function(e2) {
            var t2 = {};
            function n2(o) {
              if (t2[o])
                return t2[o].exports;
              var r = t2[o] = { i: o, l: false, exports: {} };
              return e2[o].call(r.exports, r, r.exports, n2), r.l = true, r.exports;
            }
            return n2.m = e2, n2.c = t2, n2.d = function(e3, t3, o) {
              n2.o(e3, t3) || Object.defineProperty(e3, t3, { enumerable: true, get: o });
            }, n2.r = function(e3) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
            }, n2.t = function(e3, t3) {
              if (1 & t3 && (e3 = n2(e3)), 8 & t3)
                return e3;
              if (4 & t3 && "object" == typeof e3 && e3 && e3.__esModule)
                return e3;
              var o = /* @__PURE__ */ Object.create(null);
              if (n2.r(o), Object.defineProperty(o, "default", { enumerable: true, value: e3 }), 2 & t3 && "string" != typeof e3)
                for (var r in e3)
                  n2.d(o, r, function(t4) {
                    return e3[t4];
                  }.bind(null, r));
              return o;
            }, n2.n = function(e3) {
              var t3 = e3 && e3.__esModule ? function() {
                return e3.default;
              } : function() {
                return e3;
              };
              return n2.d(t3, "a", t3), t3;
            }, n2.o = function(e3, t3) {
              return Object.prototype.hasOwnProperty.call(e3, t3);
            }, n2.p = "/", n2(n2.s = 0);
          }([function(e2, t2, n2) {
            "use strict";
            n2(1), e2.exports = function() {
              var e3 = n2(6), t3 = null;
              return { show: function(n3) {
                if (n3.message) {
                  !function() {
                    if (t3)
                      return true;
                    t3 = e3.getWrapper(), document.body.appendChild(t3);
                  }();
                  var o = null, r = n3.time || 8e3;
                  switch (n3.type) {
                    case "confirm":
                      o = e3.confirm(n3);
                      break;
                    case "prompt":
                      o = e3.prompt(n3);
                      break;
                    default:
                      o = e3.alert(n3), window.setTimeout(function() {
                        o.remove();
                      }, r);
                  }
                  t3.appendChild(o), o.classList.add("cdx-notify--bounce-in");
                }
              } };
            }();
          }, function(e2, t2, n2) {
            var o = n2(2);
            "string" == typeof o && (o = [[e2.i, o, ""]]), n2(4)(o, { hmr: true, transform: void 0, insertInto: void 0 }), o.locals && (e2.exports = o.locals);
          }, function(e2, t2, n2) {
            (e2.exports = n2(3)(false)).push([e2.i, `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`, ""]);
          }, function(e2, t2) {
            e2.exports = function(e3) {
              var t3 = [];
              return t3.toString = function() {
                return this.map(function(t4) {
                  var n2 = function(e4, t5) {
                    var n3, o = e4[1] || "", r = e4[3];
                    if (!r)
                      return o;
                    if (t5 && "function" == typeof btoa) {
                      var i = (n3 = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n3)))) + " */"), a = r.sources.map(function(e5) {
                        return "/*# sourceURL=" + r.sourceRoot + e5 + " */";
                      });
                      return [o].concat(a).concat([i]).join("\n");
                    }
                    return [o].join("\n");
                  }(t4, e3);
                  return t4[2] ? "@media " + t4[2] + "{" + n2 + "}" : n2;
                }).join("");
              }, t3.i = function(e4, n2) {
                "string" == typeof e4 && (e4 = [[null, e4, ""]]);
                for (var o = {}, r = 0; r < this.length; r++) {
                  var i = this[r][0];
                  "number" == typeof i && (o[i] = true);
                }
                for (r = 0; r < e4.length; r++) {
                  var a = e4[r];
                  "number" == typeof a[0] && o[a[0]] || (n2 && !a[2] ? a[2] = n2 : n2 && (a[2] = "(" + a[2] + ") and (" + n2 + ")"), t3.push(a));
                }
              }, t3;
            };
          }, function(e2, t2, n2) {
            var o, r, i = {}, a = (o = function() {
              return window && document && document.all && !window.atob;
            }, function() {
              return void 0 === r && (r = o.apply(this, arguments)), r;
            }), s = function(e3) {
              var t3 = {};
              return function(e4) {
                if ("function" == typeof e4)
                  return e4();
                if (void 0 === t3[e4]) {
                  var n3 = function(e5) {
                    return document.querySelector(e5);
                  }.call(this, e4);
                  if (window.HTMLIFrameElement && n3 instanceof window.HTMLIFrameElement)
                    try {
                      n3 = n3.contentDocument.head;
                    } catch (e5) {
                      n3 = null;
                    }
                  t3[e4] = n3;
                }
                return t3[e4];
              };
            }(), l = null, c = 0, u = [], f = n2(5);
            function d(e3, t3) {
              for (var n3 = 0; n3 < e3.length; n3++) {
                var o2 = e3[n3], r2 = i[o2.id];
                if (r2) {
                  r2.refs++;
                  for (var a2 = 0; a2 < r2.parts.length; a2++)
                    r2.parts[a2](o2.parts[a2]);
                  for (; a2 < o2.parts.length; a2++)
                    r2.parts.push(k(o2.parts[a2], t3));
                } else {
                  var s2 = [];
                  for (a2 = 0; a2 < o2.parts.length; a2++)
                    s2.push(k(o2.parts[a2], t3));
                  i[o2.id] = { id: o2.id, refs: 1, parts: s2 };
                }
              }
            }
            function p(e3, t3) {
              for (var n3 = [], o2 = {}, r2 = 0; r2 < e3.length; r2++) {
                var i2 = e3[r2], a2 = t3.base ? i2[0] + t3.base : i2[0], s2 = { css: i2[1], media: i2[2], sourceMap: i2[3] };
                o2[a2] ? o2[a2].parts.push(s2) : n3.push(o2[a2] = { id: a2, parts: [s2] });
              }
              return n3;
            }
            function h(e3, t3) {
              var n3 = s(e3.insertInto);
              if (!n3)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
              var o2 = u[u.length - 1];
              if ("top" === e3.insertAt)
                o2 ? o2.nextSibling ? n3.insertBefore(t3, o2.nextSibling) : n3.appendChild(t3) : n3.insertBefore(t3, n3.firstChild), u.push(t3);
              else if ("bottom" === e3.insertAt)
                n3.appendChild(t3);
              else {
                if ("object" != typeof e3.insertAt || !e3.insertAt.before)
                  throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var r2 = s(e3.insertInto + " " + e3.insertAt.before);
                n3.insertBefore(t3, r2);
              }
            }
            function v(e3) {
              if (null === e3.parentNode)
                return false;
              e3.parentNode.removeChild(e3);
              var t3 = u.indexOf(e3);
              t3 >= 0 && u.splice(t3, 1);
            }
            function g(e3) {
              var t3 = document.createElement("style");
              return void 0 === e3.attrs.type && (e3.attrs.type = "text/css"), y(t3, e3.attrs), h(e3, t3), t3;
            }
            function y(e3, t3) {
              Object.keys(t3).forEach(function(n3) {
                e3.setAttribute(n3, t3[n3]);
              });
            }
            function k(e3, t3) {
              var n3, o2, r2, i2;
              if (t3.transform && e3.css) {
                if (!(i2 = t3.transform(e3.css)))
                  return function() {
                  };
                e3.css = i2;
              }
              if (t3.singleton) {
                var a2 = c++;
                n3 = l || (l = g(t3)), o2 = w.bind(null, n3, a2, false), r2 = w.bind(null, n3, a2, true);
              } else
                e3.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n3 = function(e4) {
                  var t4 = document.createElement("link");
                  return void 0 === e4.attrs.type && (e4.attrs.type = "text/css"), e4.attrs.rel = "stylesheet", y(t4, e4.attrs), h(e4, t4), t4;
                }(t3), o2 = function(e4, t4, n4) {
                  var o3 = n4.css, r3 = n4.sourceMap, i3 = void 0 === t4.convertToAbsoluteUrls && r3;
                  (t4.convertToAbsoluteUrls || i3) && (o3 = f(o3)), r3 && (o3 += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r3)))) + " */");
                  var a3 = new Blob([o3], { type: "text/css" }), s2 = e4.href;
                  e4.href = URL.createObjectURL(a3), s2 && URL.revokeObjectURL(s2);
                }.bind(null, n3, t3), r2 = function() {
                  v(n3), n3.href && URL.revokeObjectURL(n3.href);
                }) : (n3 = g(t3), o2 = function(e4, t4) {
                  var n4 = t4.css, o3 = t4.media;
                  if (o3 && e4.setAttribute("media", o3), e4.styleSheet)
                    e4.styleSheet.cssText = n4;
                  else {
                    for (; e4.firstChild; )
                      e4.removeChild(e4.firstChild);
                    e4.appendChild(document.createTextNode(n4));
                  }
                }.bind(null, n3), r2 = function() {
                  v(n3);
                });
              return o2(e3), function(t4) {
                if (t4) {
                  if (t4.css === e3.css && t4.media === e3.media && t4.sourceMap === e3.sourceMap)
                    return;
                  o2(e3 = t4);
                } else
                  r2();
              };
            }
            e2.exports = function(e3, t3) {
              if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
                throw new Error("The style-loader cannot be used in a non-browser environment");
              (t3 = t3 || {}).attrs = "object" == typeof t3.attrs ? t3.attrs : {}, t3.singleton || "boolean" == typeof t3.singleton || (t3.singleton = a()), t3.insertInto || (t3.insertInto = "head"), t3.insertAt || (t3.insertAt = "bottom");
              var n3 = p(e3, t3);
              return d(n3, t3), function(e4) {
                for (var o2 = [], r2 = 0; r2 < n3.length; r2++) {
                  var a2 = n3[r2];
                  (s2 = i[a2.id]).refs--, o2.push(s2);
                }
                for (e4 && d(p(e4, t3), t3), r2 = 0; r2 < o2.length; r2++) {
                  var s2;
                  if (0 === (s2 = o2[r2]).refs) {
                    for (var l2 = 0; l2 < s2.parts.length; l2++)
                      s2.parts[l2]();
                    delete i[s2.id];
                  }
                }
              };
            };
            var b, m = (b = [], function(e3, t3) {
              return b[e3] = t3, b.filter(Boolean).join("\n");
            });
            function w(e3, t3, n3, o2) {
              var r2 = n3 ? "" : o2.css;
              if (e3.styleSheet)
                e3.styleSheet.cssText = m(t3, r2);
              else {
                var i2 = document.createTextNode(r2), a2 = e3.childNodes;
                a2[t3] && e3.removeChild(a2[t3]), a2.length ? e3.insertBefore(i2, a2[t3]) : e3.appendChild(i2);
              }
            }
          }, function(e2, t2) {
            e2.exports = function(e3) {
              var t3 = "undefined" != typeof window && window.location;
              if (!t3)
                throw new Error("fixUrls requires window.location");
              if (!e3 || "string" != typeof e3)
                return e3;
              var n2 = t3.protocol + "//" + t3.host, o = n2 + t3.pathname.replace(/\/[^\/]*$/, "/");
              return e3.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e4, t4) {
                var r, i = t4.trim().replace(/^"(.*)"$/, function(e5, t5) {
                  return t5;
                }).replace(/^'(.*)'$/, function(e5, t5) {
                  return t5;
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e4 : (r = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n2 + i : o + i.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")");
              });
            };
          }, function(e2, t2, n2) {
            "use strict";
            var o, r, i, a, s, l;
            e2.exports = (o = "cdx-notify", r = "cdx-notify__cross", i = "cdx-notify__button--confirm", a = "cdx-notify__button", s = "cdx-notify__btns-wrapper", { alert: l = function(e3) {
              var t3 = document.createElement("DIV"), n3 = document.createElement("DIV"), i2 = e3.message, a2 = e3.style;
              return t3.classList.add(o), a2 && t3.classList.add(o + "--" + a2), t3.innerHTML = i2, n3.classList.add(r), n3.addEventListener("click", t3.remove.bind(t3)), t3.appendChild(n3), t3;
            }, confirm: function(e3) {
              var t3 = l(e3), n3 = document.createElement("div"), o2 = document.createElement("button"), c = document.createElement("button"), u = t3.querySelector("." + r), f = e3.cancelHandler, d = e3.okHandler;
              return n3.classList.add(s), o2.innerHTML = e3.okText || "Confirm", c.innerHTML = e3.cancelText || "Cancel", o2.classList.add(a), c.classList.add(a), o2.classList.add(i), c.classList.add("cdx-notify__button--cancel"), f && "function" == typeof f && (c.addEventListener("click", f), u.addEventListener("click", f)), d && "function" == typeof d && o2.addEventListener("click", d), o2.addEventListener("click", t3.remove.bind(t3)), c.addEventListener("click", t3.remove.bind(t3)), n3.appendChild(o2), n3.appendChild(c), t3.appendChild(n3), t3;
            }, prompt: function(e3) {
              var t3 = l(e3), n3 = document.createElement("div"), o2 = document.createElement("button"), c = document.createElement("input"), u = t3.querySelector("." + r), f = e3.cancelHandler, d = e3.okHandler;
              return n3.classList.add(s), o2.innerHTML = e3.okText || "Ok", o2.classList.add(a), o2.classList.add(i), c.classList.add("cdx-notify__input"), e3.placeholder && c.setAttribute("placeholder", e3.placeholder), e3.default && (c.value = e3.default), e3.inputType && (c.type = e3.inputType), f && "function" == typeof f && u.addEventListener("click", f), d && "function" == typeof d && o2.addEventListener("click", function() {
                d(c.value);
              }), o2.addEventListener("click", t3.remove.bind(t3)), n3.appendChild(c), n3.appendChild(o2), t3.appendChild(n3), t3;
            }, getWrapper: function() {
              var e3 = document.createElement("DIV");
              return e3.classList.add("cdx-notifies"), e3;
            } });
          }]);
        }, function(e, t, n) {
          var o, r;
          void 0 === (r = "function" == typeof (o = function() {
            function e2(e3) {
              var t3 = e3.tags;
              if (!Object.keys(t3).map(function(e4) {
                return typeof t3[e4];
              }).every(function(e4) {
                return "object" === e4 || "boolean" === e4 || "function" === e4;
              }))
                throw new Error("The configuration was invalid");
              this.config = e3;
            }
            var t2 = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];
            function n2(e3) {
              return -1 !== t2.indexOf(e3.nodeName);
            }
            var o2 = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
            function r2(e3) {
              return -1 !== o2.indexOf(e3.nodeName);
            }
            function i(e3, t3, n3) {
              return "function" == typeof e3.tags[t3] ? e3.tags[t3](n3) : e3.tags[t3];
            }
            function a(e3, t3) {
              return void 0 === t3 || "boolean" == typeof t3 && !t3;
            }
            function s(e3, t3, n3) {
              var o3 = e3.name.toLowerCase();
              return true !== t3 && ("function" == typeof t3[o3] ? !t3[o3](e3.value, n3) : void 0 === t3[o3] || false === t3[o3] || "string" == typeof t3[o3] && t3[o3] !== e3.value);
            }
            return e2.prototype.clean = function(e3) {
              const t3 = document.implementation.createHTMLDocument(), n3 = t3.createElement("div");
              return n3.innerHTML = e3, this._sanitize(t3, n3), n3.innerHTML;
            }, e2.prototype._sanitize = function(e3, t3) {
              var o3 = function(e4, t4) {
                return e4.createTreeWalker(t4, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT, null, false);
              }(e3, t3), l = o3.firstChild();
              if (l)
                do {
                  if (l.nodeType !== Node.TEXT_NODE) {
                    if (l.nodeType === Node.COMMENT_NODE) {
                      t3.removeChild(l), this._sanitize(e3, t3);
                      break;
                    }
                    var c, u = r2(l);
                    u && (c = Array.prototype.some.call(l.childNodes, n2));
                    var f = !!t3.parentNode, d = n2(t3) && n2(l) && f, p = l.nodeName.toLowerCase(), h = i(this.config, p, l);
                    if (u && c || a(0, h) || !this.config.keepNestedBlockElements && d) {
                      if ("SCRIPT" !== l.nodeName && "STYLE" !== l.nodeName)
                        for (; l.childNodes.length > 0; )
                          t3.insertBefore(l.childNodes[0], l);
                      t3.removeChild(l), this._sanitize(e3, t3);
                      break;
                    }
                    for (var v = 0; v < l.attributes.length; v += 1) {
                      var g = l.attributes[v];
                      s(g, h, l) && (l.removeAttribute(g.name), v -= 1);
                    }
                    this._sanitize(e3, l);
                  } else if ("" === l.data.trim() && (l.previousElementSibling && n2(l.previousElementSibling) || l.nextElementSibling && n2(l.nextElementSibling))) {
                    t3.removeChild(l), this._sanitize(e3, t3);
                    break;
                  }
                } while (l = o3.nextSibling());
            }, e2;
          }) ? o.call(t, n, t, e) : o) || (e.exports = r);
        }, function(e, t, n) {
          window, e.exports = function(e2) {
            var t2 = {};
            function n2(o) {
              if (t2[o])
                return t2[o].exports;
              var r = t2[o] = { i: o, l: false, exports: {} };
              return e2[o].call(r.exports, r, r.exports, n2), r.l = true, r.exports;
            }
            return n2.m = e2, n2.c = t2, n2.d = function(e3, t3, o) {
              n2.o(e3, t3) || Object.defineProperty(e3, t3, { enumerable: true, get: o });
            }, n2.r = function(e3) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
            }, n2.t = function(e3, t3) {
              if (1 & t3 && (e3 = n2(e3)), 8 & t3)
                return e3;
              if (4 & t3 && "object" == typeof e3 && e3 && e3.__esModule)
                return e3;
              var o = /* @__PURE__ */ Object.create(null);
              if (n2.r(o), Object.defineProperty(o, "default", { enumerable: true, value: e3 }), 2 & t3 && "string" != typeof e3)
                for (var r in e3)
                  n2.d(o, r, function(t4) {
                    return e3[t4];
                  }.bind(null, r));
              return o;
            }, n2.n = function(e3) {
              var t3 = e3 && e3.__esModule ? function() {
                return e3.default;
              } : function() {
                return e3;
              };
              return n2.d(t3, "a", t3), t3;
            }, n2.o = function(e3, t3) {
              return Object.prototype.hasOwnProperty.call(e3, t3);
            }, n2.p = "", n2(n2.s = 0);
          }([function(e2, t2, n2) {
            e2.exports = n2(1);
          }, function(e2, t2, n2) {
            "use strict";
            n2.r(t2), n2.d(t2, "default", function() {
              return o;
            });
            class o {
              constructor() {
                this.nodes = { wrapper: null, content: null }, this.showed = false, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = () => {
                  this.showed && this.hide(true);
                }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, { passive: true });
              }
              get CSS() {
                return { tooltip: "ct", tooltipContent: "ct__content", tooltipShown: "ct--shown", placement: { left: "ct--left", bottom: "ct--bottom", right: "ct--right", top: "ct--top" } };
              }
              show(e3, t3, n3) {
                this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
                const o2 = Object.assign({ placement: "bottom", marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, delay: 70, hidingDelay: 0 }, n3);
                if (o2.hidingDelay && (this.hidingDelay = o2.hidingDelay), this.nodes.content.innerHTML = "", "string" == typeof t3)
                  this.nodes.content.appendChild(document.createTextNode(t3));
                else {
                  if (!(t3 instanceof Node))
                    throw Error("[CodeX Tooltip] Wrong type of \xABcontent\xBB passed. It should be an instance of Node or String. But " + typeof t3 + " given.");
                  this.nodes.content.appendChild(t3);
                }
                switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), o2.placement) {
                  case "top":
                    this.placeTop(e3, o2);
                    break;
                  case "left":
                    this.placeLeft(e3, o2);
                    break;
                  case "right":
                    this.placeRight(e3, o2);
                    break;
                  case "bottom":
                  default:
                    this.placeBottom(e3, o2);
                }
                o2 && o2.delay ? this.showingTimeout = setTimeout(() => {
                  this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true;
                }, o2.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true);
              }
              hide(e3 = false) {
                if (this.hidingDelay && !e3)
                  return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(() => {
                    this.hide(true);
                  }, this.hidingDelay));
                this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = false, this.showingTimeout && clearTimeout(this.showingTimeout);
              }
              onHover(e3, t3, n3) {
                e3.addEventListener("mouseenter", () => {
                  this.show(e3, t3, n3);
                }), e3.addEventListener("mouseleave", () => {
                  this.hide();
                });
              }
              destroy() {
                this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
              }
              prepare() {
                this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
              }
              loadStyles() {
                const e3 = "codex-tooltips-style";
                if (document.getElementById(e3))
                  return;
                const t3 = n2(2), o2 = this.make("style", null, { textContent: t3.toString(), id: e3 });
                this.prepend(document.head, o2);
              }
              placeBottom(e3, t3) {
                const n3 = e3.getBoundingClientRect(), o2 = n3.left + e3.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, r = n3.bottom + window.pageYOffset + this.offsetTop + t3.marginTop;
                this.applyPlacement("bottom", o2, r);
              }
              placeTop(e3, t3) {
                const n3 = e3.getBoundingClientRect(), o2 = n3.left + e3.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, r = n3.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
                this.applyPlacement("top", o2, r);
              }
              placeLeft(e3, t3) {
                const n3 = e3.getBoundingClientRect(), o2 = n3.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - t3.marginLeft, r = n3.top + window.pageYOffset + e3.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                this.applyPlacement("left", o2, r);
              }
              placeRight(e3, t3) {
                const n3 = e3.getBoundingClientRect(), o2 = n3.right + this.offsetRight + t3.marginRight, r = n3.top + window.pageYOffset + e3.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
                this.applyPlacement("right", o2, r);
              }
              applyPlacement(e3, t3, n3) {
                this.nodes.wrapper.classList.add(this.CSS.placement[e3]), this.nodes.wrapper.style.left = t3 + "px", this.nodes.wrapper.style.top = n3 + "px";
              }
              make(e3, t3 = null, n3 = {}) {
                const o2 = document.createElement(e3);
                Array.isArray(t3) ? o2.classList.add(...t3) : t3 && o2.classList.add(t3);
                for (const e4 in n3)
                  n3.hasOwnProperty(e4) && (o2[e4] = n3[e4]);
                return o2;
              }
              append(e3, t3) {
                Array.isArray(t3) ? t3.forEach((t4) => e3.appendChild(t4)) : e3.appendChild(t3);
              }
              prepend(e3, t3) {
                Array.isArray(t3) ? (t3 = t3.reverse()).forEach((t4) => e3.prepend(t4)) : e3.prepend(t3);
              }
            }
          }, function(e2, t2) {
            e2.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
          }]).default;
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(19), n(8), n(25)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c) {
            "use strict";
            var u = n(1);
            function f(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (f = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), s = u(s), l = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = f(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(l), c = u(c);
            var d = function() {
              function e2(t2, n2) {
                (0, r2.default)(this, e2), this.cursor = -1, this.items = [], this.items = t2 || [], this.focusedCssClass = n2;
              }
              return (0, i2.default)(e2, [{ key: "currentItem", get: function() {
                return -1 === this.cursor ? null : this.items[this.cursor];
              } }, { key: "setCursor", value: function(e3) {
                e3 < this.items.length && e3 >= -1 && (this.dropCursor(), this.cursor = e3, this.items[this.cursor].classList.add(this.focusedCssClass));
              } }, { key: "setItems", value: function(e3) {
                this.items = e3;
              } }, { key: "next", value: function() {
                this.cursor = this.leafNodesAndReturnIndex(e2.directions.RIGHT);
              } }, { key: "previous", value: function() {
                this.cursor = this.leafNodesAndReturnIndex(e2.directions.LEFT);
              } }, { key: "dropCursor", value: function() {
                -1 !== this.cursor && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
              } }, { key: "leafNodesAndReturnIndex", value: function(t2) {
                var n2 = this;
                if (0 === this.items.length)
                  return this.cursor;
                var o3 = this.cursor;
                return -1 === o3 ? o3 = t2 === e2.directions.RIGHT ? -1 : 0 : this.items[o3].classList.remove(this.focusedCssClass), o3 = t2 === e2.directions.RIGHT ? (o3 + 1) % this.items.length : (this.items.length + o3 - 1) % this.items.length, s.default.canSetCaret(this.items[o3]) && l.delay(function() {
                  return c.default.setCursor(n2.items[o3]);
                }, 50)(), this.items[o3].classList.add(this.focusedCssClass), o3;
              } }]), e2;
            }();
            o2.default = d, d.displayName = "DomIterator", d.directions = { RIGHT: "right", LEFT: "left" }, e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(8), n(19), n(61)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c) {
            "use strict";
            var u = n(1);
            function f(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (f = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), s = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = f(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(s), l = u(l);
            var d = function() {
              function e2(t2) {
                (0, r2.default)(this, e2), this.blocks = [], this.workingArea = t2;
              }
              return (0, i2.default)(e2, [{ key: "length", get: function() {
                return this.blocks.length;
              } }, { key: "array", get: function() {
                return this.blocks;
              } }, { key: "nodes", get: function() {
                return s.array(this.workingArea.children);
              } }, { key: "push", value: function(e3) {
                this.blocks.push(e3), this.insertToDOM(e3);
              } }, { key: "swap", value: function(e3, t2) {
                var n2 = this.blocks[t2];
                l.default.swap(this.blocks[e3].holder, n2.holder), this.blocks[t2] = this.blocks[e3], this.blocks[e3] = n2;
              } }, { key: "move", value: function(e3, t2) {
                var n2 = this.blocks.splice(t2, 1)[0], o3 = e3 - 1, r3 = Math.max(0, o3), i3 = this.blocks[r3];
                e3 > 0 ? this.insertToDOM(n2, "afterend", i3) : this.insertToDOM(n2, "beforebegin", i3), this.blocks.splice(e3, 0, n2);
                var a2 = this.composeBlockEvent("move", { fromIndex: t2, toIndex: e3 });
                n2.call(c.BlockToolAPI.MOVED, a2);
              } }, { key: "insert", value: function(e3, t2) {
                var n2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (this.length) {
                  e3 > this.length && (e3 = this.length), n2 && (this.blocks[e3].holder.remove(), this.blocks[e3].call(c.BlockToolAPI.REMOVED));
                  var o3 = n2 ? 1 : 0;
                  if (this.blocks.splice(e3, o3, t2), e3 > 0) {
                    var r3 = this.blocks[e3 - 1];
                    this.insertToDOM(t2, "afterend", r3);
                  } else {
                    var i3 = this.blocks[e3 + 1];
                    i3 ? this.insertToDOM(t2, "beforebegin", i3) : this.insertToDOM(t2);
                  }
                } else
                  this.push(t2);
              } }, { key: "remove", value: function(e3) {
                isNaN(e3) && (e3 = this.length - 1), this.blocks[e3].holder.remove(), this.blocks[e3].call(c.BlockToolAPI.REMOVED), this.blocks.splice(e3, 1);
              } }, { key: "removeAll", value: function() {
                this.workingArea.innerHTML = "", this.blocks.forEach(function(e3) {
                  return e3.call(c.BlockToolAPI.REMOVED);
                }), this.blocks.length = 0;
              } }, { key: "insertAfter", value: function(e3, t2) {
                var n2 = this.blocks.indexOf(e3);
                this.insert(n2 + 1, t2);
              } }, { key: "get", value: function(e3) {
                return this.blocks[e3];
              } }, { key: "indexOf", value: function(e3) {
                return this.blocks.indexOf(e3);
              } }, { key: "insertToDOM", value: function(e3, t2, n2) {
                t2 ? n2.holder.insertAdjacentElement(t2, e3.holder) : this.workingArea.appendChild(e3.holder), e3.call(c.BlockToolAPI.RENDERED);
              } }, { key: "composeBlockEvent", value: function(e3, t2) {
                return new CustomEvent(e3, { detail: t2 });
              } }], [{ key: "set", value: function(e3, t2, n2) {
                return isNaN(Number(t2)) ? (Reflect.set(e3, t2, n2), true) : (e3.insert(+t2, n2), true);
              } }, { key: "get", value: function(e3, t2) {
                return isNaN(Number(t2)) ? Reflect.get(e3, t2) : e3.get(+t2);
              } }]), e2;
            }();
            o2.default = d, d.displayName = "Blocks", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t], void 0 === (i = "function" == typeof (o = function(e2) {
            "use strict";
            var t2;
            Object.defineProperty(e2, "__esModule", { value: true }), e2.BlockMutationType = void 0, e2.BlockMutationType = t2, function(e3) {
              e3.Added = "block-added", e3.Removed = "block-removed", e3.Moved = "block-moved", e3.Changed = "block-changed";
            }(t2 || (e2.BlockMutationType = t2 = {}));
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          window, e.exports = function(e2) {
            var t2 = {};
            function n2(o) {
              if (t2[o])
                return t2[o].exports;
              var r = t2[o] = { i: o, l: false, exports: {} };
              return e2[o].call(r.exports, r, r.exports, n2), r.l = true, r.exports;
            }
            return n2.m = e2, n2.c = t2, n2.d = function(e3, t3, o) {
              n2.o(e3, t3) || Object.defineProperty(e3, t3, { enumerable: true, get: o });
            }, n2.r = function(e3) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
            }, n2.t = function(e3, t3) {
              if (1 & t3 && (e3 = n2(e3)), 8 & t3)
                return e3;
              if (4 & t3 && "object" == typeof e3 && e3 && e3.__esModule)
                return e3;
              var o = /* @__PURE__ */ Object.create(null);
              if (n2.r(o), Object.defineProperty(o, "default", { enumerable: true, value: e3 }), 2 & t3 && "string" != typeof e3)
                for (var r in e3)
                  n2.d(o, r, function(t4) {
                    return e3[t4];
                  }.bind(null, r));
              return o;
            }, n2.n = function(e3) {
              var t3 = e3 && e3.__esModule ? function() {
                return e3.default;
              } : function() {
                return e3;
              };
              return n2.d(t3, "a", t3), t3;
            }, n2.o = function(e3, t3) {
              return Object.prototype.hasOwnProperty.call(e3, t3);
            }, n2.p = "", n2(n2.s = 0);
          }([function(e2, t2, n2) {
            "use strict";
            function o(e3, t3) {
              for (var n3 = 0; n3 < t3.length; n3++) {
                var o2 = t3[n3];
                o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
              }
            }
            function r(e3, t3, n3) {
              return t3 && o(e3.prototype, t3), n3 && o(e3, n3), e3;
            }
            n2.r(t2);
            var i = function() {
              function e3(t3) {
                var n3 = this;
                !function(e4, t4) {
                  if (!(e4 instanceof t4))
                    throw new TypeError("Cannot call a class as a function");
                }(this, e3), this.commands = {}, this.keys = {}, this.name = t3.name, this.parseShortcutName(t3.name), this.element = t3.on, this.callback = t3.callback, this.executeShortcut = function(e4) {
                  n3.execute(e4);
                }, this.element.addEventListener("keydown", this.executeShortcut, false);
              }
              return r(e3, null, [{ key: "supportedCommands", get: function() {
                return { SHIFT: ["SHIFT"], CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"], ALT: ["ALT", "OPTION"] };
              } }, { key: "keyCodes", get: function() {
                return { 0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, BACKSPACE: 8, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, INSERT: 45, DELETE: 46, ".": 190 };
              } }]), r(e3, [{ key: "parseShortcutName", value: function(t3) {
                t3 = t3.split("+");
                for (var n3 = 0; n3 < t3.length; n3++) {
                  t3[n3] = t3[n3].toUpperCase();
                  var o2 = false;
                  for (var r2 in e3.supportedCommands)
                    if (e3.supportedCommands[r2].includes(t3[n3])) {
                      o2 = this.commands[r2] = true;
                      break;
                    }
                  o2 || (this.keys[t3[n3]] = true);
                }
                for (var i2 in e3.supportedCommands)
                  this.commands[i2] || (this.commands[i2] = false);
              } }, { key: "execute", value: function(t3) {
                var n3, o2 = { CMD: t3.ctrlKey || t3.metaKey, SHIFT: t3.shiftKey, ALT: t3.altKey }, r2 = true;
                for (n3 in this.commands)
                  this.commands[n3] !== o2[n3] && (r2 = false);
                var i2, a = true;
                for (i2 in this.keys)
                  a = a && t3.keyCode === e3.keyCodes[i2];
                r2 && a && this.callback(t3);
              } }, { key: "remove", value: function() {
                this.element.removeEventListener("keydown", this.executeShortcut);
              } }]), e3;
            }();
            t2.default = i;
          }]).default;
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(20), n(21), n(2), n(3), n(114), n(5), n(6), n(4), n(7), n(8), n(61), n(116), n(82), n(85), n(54), n(68)], void 0 === (i = "function" == typeof (o = function(e2, t2, o2, r2, i2, s, l, c, u, f, d, p, h, v, g, y, k) {
            "use strict";
            var b = n(1);
            function m(e3) {
              if ("function" != typeof WeakMap)
                return null;
              var t3 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (m = function(e4) {
                return e4 ? n2 : t3;
              })(e3);
            }
            function w(e3, t3) {
              if (!t3 && e3 && e3.__esModule)
                return e3;
              if (null === e3 || "object" !== a(e3) && "function" != typeof e3)
                return { default: e3 };
              var n2 = m(t3);
              if (n2 && n2.has(e3))
                return n2.get(e3);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e3)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e3, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e3, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e3[i3];
                }
              return o3.default = e3, n2 && n2.set(e3, o3), o3;
            }
            function x(e3) {
              var t3 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e4) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, u.default)(e3);
                if (t3) {
                  var r3 = (0, u.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, c.default)(this, n2);
              };
            }
            Object.defineProperty(e2, "__esModule", { value: true }), e2.default = e2.ToolboxEvent = void 0, t2 = b(t2), o2 = b(o2), r2 = b(r2), i2 = b(i2), s = b(s), l = b(l), c = b(c), u = b(u), f = b(f), d = w(d), h = b(h), v = b(v), g = w(g), y = b(y);
            var C, S = function(e3, t3, n2, o3) {
              var r3, i3 = arguments.length, a2 = i3 < 3 ? t3 : null === o3 ? o3 = Object.getOwnPropertyDescriptor(t3, n2) : o3;
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, f.default)(Reflect)) && "function" == typeof Reflect.decorate)
                a2 = Reflect.decorate(e3, t3, n2, o3);
              else
                for (var s2 = e3.length - 1; s2 >= 0; s2--)
                  (r3 = e3[s2]) && (a2 = (i3 < 3 ? r3(a2) : i3 > 3 ? r3(t3, n2, a2) : r3(t3, n2)) || a2);
              return i3 > 3 && a2 && Object.defineProperty(t3, n2, a2), a2;
            };
            e2.ToolboxEvent = C, function(e3) {
              e3.Opened = "toolbox-opened", e3.Closed = "toolbox-closed", e3.BlockAdded = "toolbox-block-added";
            }(C || (e2.ToolboxEvent = C = {}));
            var T = function(e3) {
              (0, l.default)(c2, e3);
              var n2, a2 = x(c2);
              function c2(e4) {
                var t3, n3 = e4.api, o3 = e4.tools, i3 = e4.i18nLabels;
                return (0, r2.default)(this, c2), (t3 = a2.call(this)).opened = false, t3.nodes = { toolbox: null }, t3.onOverlayClicked = function() {
                  t3.close();
                }, t3.api = n3, t3.tools = o3, t3.i18nLabels = i3, t3;
              }
              return (0, i2.default)(c2, [{ key: "isEmpty", get: function() {
                return 0 === this.toolsToBeDisplayed.length;
              } }, { key: "make", value: function() {
                return this.popover = new g.default({ scopeElement: this.api.ui.nodes.redactor, className: c2.CSS.toolbox, searchable: true, filterLabel: this.i18nLabels.filter, nothingFoundLabel: this.i18nLabels.nothingFound, items: this.toolboxItemsToBeDisplayed }), this.popover.on(g.PopoverEvent.OverlayClicked, this.onOverlayClicked), this.enableShortcuts(), this.nodes.toolbox = this.popover.getElement(), this.nodes.toolbox;
              } }, { key: "hasFocus", value: function() {
                var e4;
                return null === (e4 = this.popover) || void 0 === e4 ? void 0 : e4.hasFocus();
              } }, { key: "destroy", value: function() {
                var e4;
                (0, s.default)((0, u.default)(c2.prototype), "destroy", this).call(this), this.nodes && this.nodes.toolbox && (this.nodes.toolbox.remove(), this.nodes.toolbox = null), this.removeAllShortcuts(), null === (e4 = this.popover) || void 0 === e4 || e4.off(g.PopoverEvent.OverlayClicked, this.onOverlayClicked);
              } }, { key: "toolButtonActivated", value: function(e4, t3) {
                this.insertNewBlock(e4, t3);
              } }, { key: "open", value: function() {
                var e4;
                this.isEmpty || (null === (e4 = this.popover) || void 0 === e4 || e4.show(), this.opened = true, this.emit(C.Opened));
              } }, { key: "close", value: function() {
                var e4;
                null === (e4 = this.popover) || void 0 === e4 || e4.hide(), this.opened = false, this.emit(C.Closed);
              } }, { key: "toggle", value: function() {
                this.opened ? this.close() : this.open();
              } }, { key: "toolsToBeDisplayed", get: function() {
                var e4 = [];
                return this.tools.forEach(function(t3) {
                  t3.toolbox && e4.push(t3);
                }), e4;
              } }, { key: "toolboxItemsToBeDisplayed", get: function() {
                var e4 = this, t3 = function(t4, n3) {
                  return { icon: t4.icon, title: y.default.t(k.I18nInternalNS.toolNames, t4.title || d.capitalize(n3.name)), name: n3.name, onActivate: function() {
                    e4.toolButtonActivated(n3.name, t4.data);
                  }, secondaryLabel: n3.shortcut ? d.beautifyShortcut(n3.shortcut) : "" };
                };
                return this.toolsToBeDisplayed.reduce(function(e5, n3) {
                  return Array.isArray(n3.toolbox) ? n3.toolbox.forEach(function(o3) {
                    e5.push(t3(o3, n3));
                  }) : void 0 !== n3.toolbox && e5.push(t3(n3.toolbox, n3)), e5;
                }, []);
              } }, { key: "enableShortcuts", value: function() {
                var e4 = this;
                this.toolsToBeDisplayed.forEach(function(t3) {
                  var n3 = t3.shortcut;
                  n3 && e4.enableShortcutForTool(t3.name, n3);
                });
              } }, { key: "enableShortcutForTool", value: function(e4, t3) {
                var n3 = this;
                h.default.add({ name: t3, on: this.api.ui.nodes.redactor, handler: function(t4) {
                  t4.preventDefault(), n3.insertNewBlock(e4);
                } });
              } }, { key: "removeAllShortcuts", value: function() {
                var e4 = this;
                this.toolsToBeDisplayed.forEach(function(t3) {
                  var n3 = t3.shortcut;
                  n3 && h.default.remove(e4.api.ui.nodes.redactor, n3);
                });
              } }, { key: "insertNewBlock", value: (n2 = (0, o2.default)(t2.default.mark(function e4(n3, o3) {
                var r3, i3, a3, s2, l2, c3;
                return t2.default.wrap(function(e5) {
                  for (; ; )
                    switch (e5.prev = e5.next) {
                      case 0:
                        if (r3 = this.api.blocks.getCurrentBlockIndex(), i3 = this.api.blocks.getBlockByIndex(r3)) {
                          e5.next = 4;
                          break;
                        }
                        return e5.abrupt("return");
                      case 4:
                        if (a3 = i3.isEmpty ? r3 : r3 + 1, !o3) {
                          e5.next = 10;
                          break;
                        }
                        return e5.next = 8, this.api.blocks.composeBlockData(n3);
                      case 8:
                        l2 = e5.sent, s2 = Object.assign(l2, o3);
                      case 10:
                        (c3 = this.api.blocks.insert(n3, s2, void 0, a3, void 0, i3.isEmpty)).call(p.BlockToolAPI.APPEND_CALLBACK), this.api.caret.setToBlock(a3), this.emit(C.BlockAdded, { block: c3 }), this.api.toolbar.close();
                      case 15:
                      case "end":
                        return e5.stop();
                    }
                }, e4, this);
              })), function(e4, t3) {
                return n2.apply(this, arguments);
              }) }], [{ key: "CSS", get: function() {
                return { toolbox: "ce-toolbox" };
              } }]), c2;
            }(v.default);
            e2.default = T, T.displayName = "Toolbox", S([d.cacheable], T.prototype, "toolsToBeDisplayed", null), S([d.cacheable], T.prototype, "toolboxItemsToBeDisplayed", null);
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(19), n(112), n(37)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l) {
            "use strict";
            var c = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = c(r2), i2 = c(i2), a = c(a), s = c(s);
            var u = function() {
              function e2(t2) {
                var n2 = t2.items, o3 = t2.onSearch, i3 = t2.placeholder;
                (0, r2.default)(this, e2), this.listeners = new s.default(), this.items = n2, this.onSearch = o3, this.render(i3);
              }
              return (0, i2.default)(e2, [{ key: "getElement", value: function() {
                return this.wrapper;
              } }, { key: "focus", value: function() {
                this.input.focus();
              } }, { key: "clear", value: function() {
                this.input.value = "", this.searchQuery = "", this.onSearch(this.foundItems);
              } }, { key: "destroy", value: function() {
                this.listeners.removeAll();
              } }, { key: "render", value: function(t2) {
                var n2 = this;
                this.wrapper = a.default.make("div", e2.CSS.wrapper);
                var o3 = a.default.make("div", e2.CSS.icon, { innerHTML: l.IconSearch });
                this.input = a.default.make("input", e2.CSS.input, { placeholder: t2 }), this.wrapper.appendChild(o3), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", function() {
                  n2.searchQuery = n2.input.value, n2.onSearch(n2.foundItems);
                });
              } }, { key: "foundItems", get: function() {
                var e3 = this;
                return this.items.filter(function(t2) {
                  return e3.checkItem(t2);
                });
              } }, { key: "checkItem", value: function(e3) {
                var t2, n2 = (null === (t2 = e3.title) || void 0 === t2 ? void 0 : t2.toLowerCase()) || "", o3 = this.searchQuery.toLowerCase();
                return n2.includes(o3);
              } }], [{ key: "CSS", get: function() {
                return { wrapper: "cdx-search-field", icon: "cdx-search-field__icon", input: "cdx-search-field__input" };
              } }]), e2;
            }();
            o2.default = u, u.displayName = "SearchInput", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(8)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2);
            var l = function() {
              function e2() {
                (0, r2.default)(this, e2);
              }
              return (0, i2.default)(e2, [{ key: "lock", value: function() {
                a.isIosDevice ? this.lockHard() : document.body.classList.add(e2.CSS.scrollLocked);
              } }, { key: "unlock", value: function() {
                a.isIosDevice ? this.unlockHard() : document.body.classList.remove(e2.CSS.scrollLocked);
              } }, { key: "lockHard", value: function() {
                this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty("--window-scroll-offset", "".concat(this.scrollPosition, "px")), document.body.classList.add(e2.CSS.scrollLockedHard);
              } }, { key: "unlockHard", value: function() {
                document.body.classList.remove(e2.CSS.scrollLockedHard), null !== this.scrollPosition && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
              } }]), e2;
            }();
            o2.default = l, l.displayName = "ScrollLocker", l.CSS = { scrollLocked: "ce-scroll-locked", scrollLockedHard: "ce-scroll-locked--hard" }, e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t], void 0 === (i = "function" == typeof (o = function(e2) {
            "use strict";
            Object.defineProperty(e2, "__esModule", { value: true }), e2.resolveAliases = function(e3, t2) {
              var n2 = {};
              return Object.keys(e3).forEach(function(o2) {
                var r2 = t2[o2];
                void 0 !== r2 ? n2[r2] = e3[o2] : n2[o2] = e3[o2];
              }), n2;
            };
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          window, e.exports = function(e2) {
            var t2 = {};
            function n2(o) {
              if (t2[o])
                return t2[o].exports;
              var r = t2[o] = { i: o, l: false, exports: {} };
              return e2[o].call(r.exports, r, r.exports, n2), r.l = true, r.exports;
            }
            return n2.m = e2, n2.c = t2, n2.d = function(e3, t3, o) {
              n2.o(e3, t3) || Object.defineProperty(e3, t3, { enumerable: true, get: o });
            }, n2.r = function(e3) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
            }, n2.t = function(e3, t3) {
              if (1 & t3 && (e3 = n2(e3)), 8 & t3)
                return e3;
              if (4 & t3 && "object" == typeof e3 && e3 && e3.__esModule)
                return e3;
              var o = /* @__PURE__ */ Object.create(null);
              if (n2.r(o), Object.defineProperty(o, "default", { enumerable: true, value: e3 }), 2 & t3 && "string" != typeof e3)
                for (var r in e3)
                  n2.d(o, r, function(t4) {
                    return e3[t4];
                  }.bind(null, r));
              return o;
            }, n2.n = function(e3) {
              var t3 = e3 && e3.__esModule ? function() {
                return e3.default;
              } : function() {
                return e3;
              };
              return n2.d(t3, "a", t3), t3;
            }, n2.o = function(e3, t3) {
              return Object.prototype.hasOwnProperty.call(e3, t3);
            }, n2.p = "/", n2(n2.s = 4);
          }([function(e2, t2, n2) {
            var o = n2(1), r = n2(2);
            "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[e2.i, r, ""]]), o(r, { insert: "head", singleton: false }), e2.exports = r.locals || {};
          }, function(e2, t2, n2) {
            "use strict";
            var o, r = function() {
              var e3 = {};
              return function(t3) {
                if (void 0 === e3[t3]) {
                  var n3 = document.querySelector(t3);
                  if (window.HTMLIFrameElement && n3 instanceof window.HTMLIFrameElement)
                    try {
                      n3 = n3.contentDocument.head;
                    } catch (e4) {
                      n3 = null;
                    }
                  e3[t3] = n3;
                }
                return e3[t3];
              };
            }(), i = [];
            function a(e3) {
              for (var t3 = -1, n3 = 0; n3 < i.length; n3++)
                if (i[n3].identifier === e3) {
                  t3 = n3;
                  break;
                }
              return t3;
            }
            function s(e3, t3) {
              for (var n3 = {}, o2 = [], r2 = 0; r2 < e3.length; r2++) {
                var s2 = e3[r2], l2 = t3.base ? s2[0] + t3.base : s2[0], c2 = n3[l2] || 0, u2 = "".concat(l2, " ").concat(c2);
                n3[l2] = c2 + 1;
                var f2 = a(u2), d2 = { css: s2[1], media: s2[2], sourceMap: s2[3] };
                -1 !== f2 ? (i[f2].references++, i[f2].updater(d2)) : i.push({ identifier: u2, updater: v(d2, t3), references: 1 }), o2.push(u2);
              }
              return o2;
            }
            function l(e3) {
              var t3 = document.createElement("style"), o2 = e3.attributes || {};
              if (void 0 === o2.nonce) {
                var i2 = n2.nc;
                i2 && (o2.nonce = i2);
              }
              if (Object.keys(o2).forEach(function(e4) {
                t3.setAttribute(e4, o2[e4]);
              }), "function" == typeof e3.insert)
                e3.insert(t3);
              else {
                var a2 = r(e3.insert || "head");
                if (!a2)
                  throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                a2.appendChild(t3);
              }
              return t3;
            }
            var c, u = (c = [], function(e3, t3) {
              return c[e3] = t3, c.filter(Boolean).join("\n");
            });
            function f(e3, t3, n3, o2) {
              var r2 = n3 ? "" : o2.media ? "@media ".concat(o2.media, " {").concat(o2.css, "}") : o2.css;
              if (e3.styleSheet)
                e3.styleSheet.cssText = u(t3, r2);
              else {
                var i2 = document.createTextNode(r2), a2 = e3.childNodes;
                a2[t3] && e3.removeChild(a2[t3]), a2.length ? e3.insertBefore(i2, a2[t3]) : e3.appendChild(i2);
              }
            }
            function d(e3, t3, n3) {
              var o2 = n3.css, r2 = n3.media, i2 = n3.sourceMap;
              if (r2 ? e3.setAttribute("media", r2) : e3.removeAttribute("media"), i2 && btoa && (o2 += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i2)))), " */")), e3.styleSheet)
                e3.styleSheet.cssText = o2;
              else {
                for (; e3.firstChild; )
                  e3.removeChild(e3.firstChild);
                e3.appendChild(document.createTextNode(o2));
              }
            }
            var p = null, h = 0;
            function v(e3, t3) {
              var n3, o2, r2;
              if (t3.singleton) {
                var i2 = h++;
                n3 = p || (p = l(t3)), o2 = f.bind(null, n3, i2, false), r2 = f.bind(null, n3, i2, true);
              } else
                n3 = l(t3), o2 = d.bind(null, n3, t3), r2 = function() {
                  !function(e4) {
                    if (null === e4.parentNode)
                      return false;
                    e4.parentNode.removeChild(e4);
                  }(n3);
                };
              return o2(e3), function(t4) {
                if (t4) {
                  if (t4.css === e3.css && t4.media === e3.media && t4.sourceMap === e3.sourceMap)
                    return;
                  o2(e3 = t4);
                } else
                  r2();
              };
            }
            e2.exports = function(e3, t3) {
              (t3 = t3 || {}).singleton || "boolean" == typeof t3.singleton || (t3.singleton = (void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o));
              var n3 = s(e3 = e3 || [], t3);
              return function(e4) {
                if (e4 = e4 || [], "[object Array]" === Object.prototype.toString.call(e4)) {
                  for (var o2 = 0; o2 < n3.length; o2++) {
                    var r2 = a(n3[o2]);
                    i[r2].references--;
                  }
                  for (var l2 = s(e4, t3), c2 = 0; c2 < n3.length; c2++) {
                    var u2 = a(n3[c2]);
                    0 === i[u2].references && (i[u2].updater(), i.splice(u2, 1));
                  }
                  n3 = l2;
                }
              };
            };
          }, function(e2, t2, n2) {
            (t2 = n2(3)(false)).push([e2.i, ".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n", ""]), e2.exports = t2;
          }, function(e2, t2, n2) {
            "use strict";
            e2.exports = function(e3) {
              var t3 = [];
              return t3.toString = function() {
                return this.map(function(t4) {
                  var n3 = function(e4, t5) {
                    var n4, o, r, i = e4[1] || "", a = e4[3];
                    if (!a)
                      return i;
                    if (t5 && "function" == typeof btoa) {
                      var s = (n4 = a, o = btoa(unescape(encodeURIComponent(JSON.stringify(n4)))), r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o), "/*# ".concat(r, " */")), l = a.sources.map(function(e5) {
                        return "/*# sourceURL=".concat(a.sourceRoot || "").concat(e5, " */");
                      });
                      return [i].concat(l).concat([s]).join("\n");
                    }
                    return [i].join("\n");
                  }(t4, e3);
                  return t4[2] ? "@media ".concat(t4[2], " {").concat(n3, "}") : n3;
                }).join("");
              }, t3.i = function(e4, n3, o) {
                "string" == typeof e4 && (e4 = [[null, e4, ""]]);
                var r = {};
                if (o)
                  for (var i = 0; i < this.length; i++) {
                    var a = this[i][0];
                    null != a && (r[a] = true);
                  }
                for (var s = 0; s < e4.length; s++) {
                  var l = [].concat(e4[s]);
                  o && r[l[0]] || (n3 && (l[2] ? l[2] = "".concat(n3, " and ").concat(l[2]) : l[2] = n3), t3.push(l));
                }
              }, t3;
            };
          }, function(e2, t2, n2) {
            "use strict";
            function o(e3, t3) {
              for (var n3 = 0; n3 < t3.length; n3++) {
                var o2 = t3[n3];
                o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
              }
            }
            function r(e3, t3, n3) {
              return t3 && o(e3.prototype, t3), n3 && o(e3, n3), e3;
            }
            n2.r(t2), n2.d(t2, "default", function() {
              return i;
            }), n2(0);
            var i = function() {
              function e3(t3) {
                var n3 = t3.data, o2 = t3.config, r2 = t3.api, i2 = t3.readOnly;
                !function(e4, t4) {
                  if (!(e4 instanceof t4))
                    throw new TypeError("Cannot call a class as a function");
                }(this, e3), this.api = r2, this.readOnly = i2, this._CSS = { block: this.api.styles.block, wrapper: "ce-paragraph" }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = o2.placeholder ? o2.placeholder : e3.DEFAULT_PLACEHOLDER, this._data = {}, this._element = this.drawView(), this._preserveBlank = void 0 !== o2.preserveBlank && o2.preserveBlank, this.data = n3;
              }
              return r(e3, null, [{ key: "DEFAULT_PLACEHOLDER", get: function() {
                return "";
              } }]), r(e3, [{ key: "onKeyUp", value: function(e4) {
                "Backspace" !== e4.code && "Delete" !== e4.code || "" === this._element.textContent && (this._element.innerHTML = "");
              } }, { key: "drawView", value: function() {
                var e4 = document.createElement("DIV");
                return e4.classList.add(this._CSS.wrapper, this._CSS.block), e4.contentEditable = false, e4.dataset.placeholder = this.api.i18n.t(this._placeholder), this.readOnly || (e4.contentEditable = true, e4.addEventListener("keyup", this.onKeyUp)), e4;
              } }, { key: "render", value: function() {
                return this._element;
              } }, { key: "merge", value: function(e4) {
                var t3 = { text: this.data.text + e4.text };
                this.data = t3;
              } }, { key: "validate", value: function(e4) {
                return !("" === e4.text.trim() && !this._preserveBlank);
              } }, { key: "save", value: function(e4) {
                return { text: e4.innerHTML };
              } }, { key: "onPaste", value: function(e4) {
                var t3 = { text: e4.detail.data.innerHTML };
                this.data = t3;
              } }, { key: "data", get: function() {
                var e4 = this._element.innerHTML;
                return this._data.text = e4, this._data;
              }, set: function(e4) {
                this._data = e4 || {}, this._element.innerHTML = this._data.text || "";
              } }], [{ key: "conversionConfig", get: function() {
                return { export: "text", import: "text" };
              } }, { key: "sanitize", get: function() {
                return { text: { br: true } };
              } }, { key: "isReadOnlySupported", get: function() {
                return true;
              } }, { key: "pasteConfig", get: function() {
                return { tags: ["P"] };
              } }, { key: "toolbox", get: function() {
                return { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>', title: "Text" };
              } }]), e3;
            }();
          }]).default;
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(37)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2);
            var l = function() {
              function e2() {
                (0, r2.default)(this, e2), this.commandName = "bold", this.CSS = { button: "ce-inline-tool", buttonActive: "ce-inline-tool--active", buttonModifier: "ce-inline-tool--bold" }, this.nodes = { button: void 0 };
              }
              return (0, i2.default)(e2, [{ key: "render", value: function() {
                return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = a.IconBold, this.nodes.button;
              } }, { key: "surround", value: function() {
                document.execCommand(this.commandName);
              } }, { key: "checkState", value: function() {
                var e3 = document.queryCommandState(this.commandName);
                return this.nodes.button.classList.toggle(this.CSS.buttonActive, e3), e3;
              } }, { key: "shortcut", get: function() {
                return "CMD+B";
              } }], [{ key: "sanitize", get: function() {
                return { b: {} };
              } }]), e2;
            }();
            o2.default = l, l.displayName = "BoldInlineTool", l.isInline = true, l.title = "Bold", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(37)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2);
            var l = function() {
              function e2() {
                (0, r2.default)(this, e2), this.commandName = "italic", this.CSS = { button: "ce-inline-tool", buttonActive: "ce-inline-tool--active", buttonModifier: "ce-inline-tool--italic" }, this.nodes = { button: null };
              }
              return (0, i2.default)(e2, [{ key: "render", value: function() {
                return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = a.IconItalic, this.nodes.button;
              } }, { key: "surround", value: function() {
                document.execCommand(this.commandName);
              } }, { key: "checkState", value: function() {
                var e3 = document.queryCommandState(this.commandName);
                return this.nodes.button.classList.toggle(this.CSS.buttonActive, e3), e3;
              } }, { key: "shortcut", get: function() {
                return "CMD+I";
              } }], [{ key: "sanitize", get: function() {
                return { i: {} };
              } }]), e2;
            }();
            o2.default = l, l.displayName = "ItalicInlineTool", l.isInline = true, l.title = "Italic", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(25), n(8), n(37)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c) {
            "use strict";
            var u = n(1);
            function f(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (f = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), s = u(s), l = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = f(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(l);
            var d = function() {
              function e2(t2) {
                var n2 = t2.api;
                (0, r2.default)(this, e2), this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = { button: "ce-inline-tool", buttonActive: "ce-inline-tool--active", buttonModifier: "ce-inline-tool--link", buttonUnlink: "ce-inline-tool--unlink", input: "ce-inline-tool-input", inputShowed: "ce-inline-tool-input--showed" }, this.nodes = { button: null, input: null }, this.inputOpened = false, this.toolbar = n2.toolbar, this.inlineToolbar = n2.inlineToolbar, this.notifier = n2.notifier, this.i18n = n2.i18n, this.selection = new s.default();
              }
              return (0, i2.default)(e2, [{ key: "render", value: function() {
                return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = c.IconLink, this.nodes.button;
              } }, { key: "renderActions", value: function() {
                var e3 = this;
                return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", function(t2) {
                  t2.keyCode === e3.ENTER_KEY && e3.enterPressed(t2);
                }), this.nodes.input;
              } }, { key: "surround", value: function(e3) {
                if (e3) {
                  this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
                  var t2 = this.selection.findParentTag("A");
                  if (t2)
                    return this.selection.expandToTag(t2), this.unlink(), this.closeActions(), this.checkState(), void this.toolbar.close();
                }
                this.toggleActions();
              } }, { key: "checkState", value: function() {
                var e3 = this.selection.findParentTag("A");
                if (e3) {
                  this.nodes.button.innerHTML = c.IconUnlink, this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
                  var t2 = e3.getAttribute("href");
                  this.nodes.input.value = "null" !== t2 ? t2 : "", this.selection.save();
                } else
                  this.nodes.button.innerHTML = c.IconLink, this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
                return !!e3;
              } }, { key: "clear", value: function() {
                this.closeActions();
              } }, { key: "shortcut", get: function() {
                return "CMD+K";
              } }, { key: "toggleActions", value: function() {
                this.inputOpened ? this.closeActions(false) : this.openActions(true);
              } }, { key: "openActions", value: function() {
                var e3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.nodes.input.classList.add(this.CSS.inputShowed), e3 && this.nodes.input.focus(), this.inputOpened = true;
              } }, { key: "closeActions", value: function() {
                var e3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (this.selection.isFakeBackgroundEnabled) {
                  var t2 = new s.default();
                  t2.save(), this.selection.restore(), this.selection.removeFakeBackground(), t2.restore();
                }
                this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", e3 && this.selection.clearSaved(), this.inputOpened = false;
              } }, { key: "enterPressed", value: function(e3) {
                var t2 = this.nodes.input.value || "";
                return t2.trim() ? this.validateURL(t2) ? (t2 = this.prepareLink(t2), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(t2), e3.preventDefault(), e3.stopPropagation(), e3.stopImmediatePropagation(), this.selection.collapseToEnd(), void this.inlineToolbar.close()) : (this.notifier.show({ message: "Pasted link is not valid.", style: "error" }), void l.log("Incorrect Link pasted", "warn", t2)) : (this.selection.restore(), this.unlink(), e3.preventDefault(), void this.closeActions());
              } }, { key: "validateURL", value: function(e3) {
                return !/\s/.test(e3);
              } }, { key: "prepareLink", value: function(e3) {
                return e3 = e3.trim(), e3 = this.addProtocol(e3);
              } }, { key: "addProtocol", value: function(e3) {
                if (/^(\w+):(\/\/)?/.test(e3))
                  return e3;
                var t2 = /^\/[^/\s]/.test(e3), n2 = "#" === e3.substring(0, 1), o3 = /^\/\/[^/\s]/.test(e3);
                return t2 || n2 || o3 || (e3 = "http://" + e3), e3;
              } }, { key: "insertLink", value: function(e3) {
                var t2 = this.selection.findParentTag("A");
                t2 && this.selection.expandToTag(t2), document.execCommand(this.commandLink, false, e3);
              } }, { key: "unlink", value: function() {
                document.execCommand(this.commandUnlink);
              } }], [{ key: "sanitize", get: function() {
                return { a: { href: true, target: "_blank", rel: "nofollow" } };
              } }]), e2;
            }();
            o2.default = d, d.displayName = "LinkInlineTool", d.isInline = true, d.title = "Link", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(19)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2), a = s(a);
            var l = function() {
              function e2(t2) {
                var n2 = t2.data, o3 = t2.api;
                (0, r2.default)(this, e2), this.CSS = { wrapper: "ce-stub", info: "ce-stub__info", title: "ce-stub__title", subtitle: "ce-stub__subtitle" }, this.api = o3, this.title = n2.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = n2.savedData, this.wrapper = this.make();
              }
              return (0, i2.default)(e2, [{ key: "render", value: function() {
                return this.wrapper;
              } }, { key: "save", value: function() {
                return this.savedData;
              } }, { key: "make", value: function() {
                var e3 = a.default.make("div", this.CSS.wrapper), t2 = a.default.make("div", this.CSS.info), n2 = a.default.make("div", this.CSS.title, { textContent: this.title }), o3 = a.default.make("div", this.CSS.subtitle, { textContent: this.subtitle });
                return e3.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52"><path fill="#D76B6B" fill-rule="nonzero" d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z"/></svg>', t2.appendChild(n2), t2.appendChild(o3), e3.appendChild(t2), e3;
              } }]), e2;
            }();
            o2.default = l, l.displayName = "Stub", l.isReadOnlySupported = true, e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(69), n(396), n(397), n(398)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s, l, c) {
            "use strict";
            var u = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = u(r2), i2 = u(i2), s = u(s), l = u(l), c = u(c);
            var f = function(e2, t2) {
              var n2 = {};
              for (var o3 in e2)
                Object.prototype.hasOwnProperty.call(e2, o3) && t2.indexOf(o3) < 0 && (n2[o3] = e2[o3]);
              if (null != e2 && "function" == typeof Object.getOwnPropertySymbols) {
                var r3 = 0;
                for (o3 = Object.getOwnPropertySymbols(e2); r3 < o3.length; r3++)
                  t2.indexOf(o3[r3]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, o3[r3]) && (n2[o3[r3]] = e2[o3[r3]]);
              }
              return n2;
            }, d = function() {
              function e2(t2, n2, o3) {
                (0, r2.default)(this, e2), this.api = o3, this.config = t2, this.editorConfig = n2;
              }
              return (0, i2.default)(e2, [{ key: "get", value: function(e3) {
                var t2 = this.config[e3], n2 = t2.class, o3 = t2.isInternal, r3 = void 0 !== o3 && o3, i3 = f(t2, ["class", "isInternal"]);
                return new (this.getConstructor(n2))({ name: e3, constructable: n2, config: i3, api: this.api, isDefault: e3 === this.editorConfig.defaultBlock, defaultPlaceholder: this.editorConfig.placeholder, isInternal: r3 });
              } }, { key: "getConstructor", value: function(e3) {
                switch (true) {
                  case e3[a.InternalInlineToolSettings.IsInline]:
                    return s.default;
                  case e3[a.InternalTuneSettings.IsTune]:
                    return l.default;
                  default:
                    return c.default;
                }
              } }]), e2;
            }();
            o2.default = d, d.displayName = "ToolsFactory", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(69)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u) {
            "use strict";
            var f = n(1);
            function d(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (d = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function p(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, c.default)(e2);
                if (t2) {
                  var r3 = (0, c.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, l.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = f(r2), i2 = f(i2), s = f(s), l = f(l), c = f(c);
            var h = function(e2) {
              (0, s.default)(n2, e2);
              var t2 = p(n2);
              function n2() {
                var e3;
                return (0, r2.default)(this, n2), (e3 = t2.apply(this, arguments)).type = u.ToolType.Inline, e3;
              }
              return (0, i2.default)(n2, [{ key: "title", get: function() {
                return this.constructable[u.InternalInlineToolSettings.Title];
              } }, { key: "create", value: function() {
                return new this.constructable({ api: this.api.getMethodsForTool(this), config: this.settings });
              } }]), n2;
            }((u = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = d(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(u)).default);
            o2.default = h, h.displayName = "InlineTool", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(5), n(6), n(4), n(69)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u) {
            "use strict";
            var f = n(1);
            function d(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (d = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function p(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, c.default)(e2);
                if (t2) {
                  var r3 = (0, c.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, l.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = f(r2), i2 = f(i2), s = f(s), l = f(l), c = f(c);
            var h = function(e2) {
              (0, s.default)(n2, e2);
              var t2 = p(n2);
              function n2() {
                var e3;
                return (0, r2.default)(this, n2), (e3 = t2.apply(this, arguments)).type = u.ToolType.Tune, e3;
              }
              return (0, i2.default)(n2, [{ key: "create", value: function(e3, t3) {
                return new this.constructable({ api: this.api.getMethodsForTool(this), config: this.settings, block: t3, data: e3 });
              } }]), n2;
            }((u = function(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = d(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }(u)).default);
            o2.default = h, h.displayName = "BlockTune", e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i, a = n(7);
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(114), n(5), n(6), n(4), n(7), n(69), n(8), n(185)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, s, l, c, u, f, d, p, h) {
            "use strict";
            var v = n(1);
            function g(e2) {
              if ("function" != typeof WeakMap)
                return null;
              var t2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap();
              return (g = function(e3) {
                return e3 ? n2 : t2;
              })(e2);
            }
            function y(e2, t2) {
              if (!t2 && e2 && e2.__esModule)
                return e2;
              if (null === e2 || "object" !== a(e2) && "function" != typeof e2)
                return { default: e2 };
              var n2 = g(t2);
              if (n2 && n2.has(e2))
                return n2.get(e2);
              var o3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
              for (var i3 in e2)
                if ("default" !== i3 && Object.prototype.hasOwnProperty.call(e2, i3)) {
                  var s2 = r3 ? Object.getOwnPropertyDescriptor(e2, i3) : null;
                  s2 && (s2.get || s2.set) ? Object.defineProperty(o3, i3, s2) : o3[i3] = e2[i3];
                }
              return o3.default = e2, n2 && n2.set(e2, o3), o3;
            }
            function k(e2) {
              var t2 = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return false;
                if (Reflect.construct.sham)
                  return false;
                if ("function" == typeof Proxy)
                  return true;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                  })), true;
                } catch (e3) {
                  return false;
                }
              }();
              return function() {
                var n2, o3 = (0, u.default)(e2);
                if (t2) {
                  var r3 = (0, u.default)(this).constructor;
                  n2 = Reflect.construct(o3, arguments, r3);
                } else
                  n2 = o3.apply(this, arguments);
                return (0, c.default)(this, n2);
              };
            }
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = v(r2), i2 = v(i2), s = v(s), l = v(l), c = v(c), u = v(u), f = v(f), d = y(d), p = y(p), h = v(h);
            var b = function(e2, t2, n2, o3) {
              var r3, i3 = arguments.length, a2 = i3 < 3 ? t2 : null === o3 ? o3 = Object.getOwnPropertyDescriptor(t2, n2) : o3;
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : (0, f.default)(Reflect)) && "function" == typeof Reflect.decorate)
                a2 = Reflect.decorate(e2, t2, n2, o3);
              else
                for (var s2 = e2.length - 1; s2 >= 0; s2--)
                  (r3 = e2[s2]) && (a2 = (i3 < 3 ? r3(a2) : i3 > 3 ? r3(t2, n2, a2) : r3(t2, n2)) || a2);
              return i3 > 3 && a2 && Object.defineProperty(t2, n2, a2), a2;
            }, m = function(e2) {
              (0, l.default)(n2, e2);
              var t2 = k(n2);
              function n2() {
                var e3;
                return (0, r2.default)(this, n2), (e3 = t2.apply(this, arguments)).type = d.ToolType.Block, e3.inlineTools = new h.default(), e3.tunes = new h.default(), e3;
              }
              return (0, i2.default)(n2, [{ key: "create", value: function(e3, t3, n3) {
                return new this.constructable({ data: e3, block: t3, readOnly: n3, api: this.api.getMethodsForTool(this), config: this.settings });
              } }, { key: "isReadOnlySupported", get: function() {
                return true === this.constructable[d.InternalBlockToolSettings.IsReadOnlySupported];
              } }, { key: "isLineBreaksEnabled", get: function() {
                return this.constructable[d.InternalBlockToolSettings.IsEnabledLineBreaks];
              } }, { key: "toolbox", get: function() {
                var e3 = this.constructable[d.InternalBlockToolSettings.Toolbox], t3 = this.config[d.UserSettings.Toolbox];
                if (!p.isEmpty(e3) && false !== t3)
                  return t3 ? Array.isArray(e3) ? Array.isArray(t3) ? t3.map(function(t4, n3) {
                    var o3 = e3[n3];
                    return o3 ? Object.assign(Object.assign({}, o3), t4) : t4;
                  }) : [t3] : Array.isArray(t3) ? t3 : [Object.assign(Object.assign({}, e3), t3)] : Array.isArray(e3) ? e3 : [e3];
              } }, { key: "conversionConfig", get: function() {
                return this.constructable[d.InternalBlockToolSettings.ConversionConfig];
              } }, { key: "enabledInlineTools", get: function() {
                return this.config[d.UserSettings.EnabledInlineTools] || false;
              } }, { key: "enabledBlockTunes", get: function() {
                return this.config[d.UserSettings.EnabledBlockTunes];
              } }, { key: "pasteConfig", get: function() {
                return this.constructable[d.InternalBlockToolSettings.PasteConfig] || {};
              } }, { key: "sanitizeConfig", get: function() {
                var e3 = (0, s.default)((0, u.default)(n2.prototype), "sanitizeConfig", this), t3 = this.baseSanitizeConfig;
                if (p.isEmpty(e3))
                  return t3;
                var o3 = {};
                for (var r3 in e3)
                  if (Object.prototype.hasOwnProperty.call(e3, r3)) {
                    var i3 = e3[r3];
                    p.isObject(i3) ? o3[r3] = Object.assign({}, t3, i3) : o3[r3] = i3;
                  }
                return o3;
              } }, { key: "baseSanitizeConfig", get: function() {
                var e3 = {};
                return Array.from(this.inlineTools.values()).forEach(function(t3) {
                  return Object.assign(e3, t3.sanitizeConfig);
                }), Array.from(this.tunes.values()).forEach(function(t3) {
                  return Object.assign(e3, t3.sanitizeConfig);
                }), e3;
              } }]), n2;
            }(d.default);
            o2.default = m, m.displayName = "BlockTool", b([p.cacheable], m.prototype, "sanitizeConfig", null), b([p.cacheable], m.prototype, "baseSanitizeConfig", null), e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(85), n(37)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s) {
            "use strict";
            var l = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = l(r2), i2 = l(i2), a = l(a);
            var c = function() {
              function e2(t2) {
                var n2 = t2.api;
                (0, r2.default)(this, e2), this.CSS = { animation: "wobble" }, this.api = n2;
              }
              return (0, i2.default)(e2, [{ key: "render", value: function() {
                var e3 = this;
                return { icon: s.IconChevronDown, title: this.api.i18n.t("Move down"), onActivate: function(t2, n2) {
                  return e3.handleClick(n2);
                }, name: "move-down" };
              } }, { key: "handleClick", value: function(e3) {
                var t2 = this, n2 = this.api.blocks.getCurrentBlockIndex(), o3 = this.api.blocks.getBlockByIndex(n2 + 1);
                if (!o3) {
                  var r3 = e3.target.closest("." + a.default.CSS.item).querySelector("." + a.default.CSS.itemIcon);
                  return r3.classList.add(this.CSS.animation), void window.setTimeout(function() {
                    r3.classList.remove(t2.CSS.animation);
                  }, 500);
                }
                var i3 = o3.holder, s2 = i3.getBoundingClientRect(), l2 = Math.abs(window.innerHeight - i3.offsetHeight);
                s2.top < window.innerHeight && (l2 = window.scrollY + i3.offsetHeight), window.scrollTo(0, l2), this.api.blocks.move(n2 + 1), this.api.toolbar.toggleBlockSettings(true);
              } }]), e2;
            }();
            o2.default = c, c.displayName = "MoveDownTune", c.isTune = true, e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(37)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a) {
            "use strict";
            var s = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = s(r2), i2 = s(i2);
            var l = function() {
              function e2(t2) {
                var n2 = t2.api;
                (0, r2.default)(this, e2), this.api = n2;
              }
              return (0, i2.default)(e2, [{ key: "render", value: function() {
                var e3 = this;
                return { icon: a.IconCross, title: this.api.i18n.t("Delete"), name: "delete", confirmation: { title: this.api.i18n.t("Click to delete"), onActivate: function() {
                  return e3.handleClick();
                } } };
              } }, { key: "handleClick", value: function() {
                this.api.blocks.delete();
              } }]), e2;
            }();
            o2.default = l, l.displayName = "DeleteTune", l.isTune = true, e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t, n) {
          var o, r, i;
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, r = [t, n(2), n(3), n(85), n(37)], void 0 === (i = "function" == typeof (o = function(o2, r2, i2, a, s) {
            "use strict";
            var l = n(1);
            Object.defineProperty(o2, "__esModule", { value: true }), o2.default = void 0, r2 = l(r2), i2 = l(i2), a = l(a);
            var c = function() {
              function e2(t2) {
                var n2 = t2.api;
                (0, r2.default)(this, e2), this.CSS = { animation: "wobble" }, this.api = n2;
              }
              return (0, i2.default)(e2, [{ key: "render", value: function() {
                var e3 = this;
                return { icon: s.IconChevronUp, title: this.api.i18n.t("Move up"), onActivate: function(t2, n2) {
                  return e3.handleClick(n2);
                }, name: "move-up" };
              } }, { key: "handleClick", value: function(e3) {
                var t2 = this, n2 = this.api.blocks.getCurrentBlockIndex(), o3 = this.api.blocks.getBlockByIndex(n2), r3 = this.api.blocks.getBlockByIndex(n2 - 1);
                if (0 === n2 || !o3 || !r3) {
                  var i3 = e3.target.closest("." + a.default.CSS.item).querySelector("." + a.default.CSS.itemIcon);
                  return i3.classList.add(this.CSS.animation), void window.setTimeout(function() {
                    i3.classList.remove(t2.CSS.animation);
                  }, 500);
                }
                var s2, l2 = o3.holder, c2 = r3.holder, u = l2.getBoundingClientRect(), f = c2.getBoundingClientRect();
                s2 = f.top > 0 ? Math.abs(u.top) - Math.abs(f.top) : window.innerHeight - Math.abs(u.top) + Math.abs(f.top), window.scrollBy(0, -1 * s2), this.api.blocks.move(n2 - 1), this.api.toolbar.toggleBlockSettings(true);
              } }]), e2;
            }();
            o2.default = c, c.displayName = "MoveUpTune", c.isTune = true, e.exports = t.default;
          }) ? o.apply(t, r) : o) || (e.exports = i);
        }, function(e, t) {
          e.exports = '.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide,.codex-editor__redactor--hidden{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff "}@media (min-width:651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor__loader{position:relative;height:30vh}.codex-editor__loader:before{content:"";position:absolute;left:50%;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:50%;border:2px solid rgba(201,201,204,.48);border-top-color:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-animation:editor-loader-spin .8s linear infinite;animation:editor-loader-spin .8s linear infinite;will-change:transform}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:rgba(46,170,220,.2);border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}::-moz-selection{background-color:#d4ecff}::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}@-webkit-keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(var(--window-scroll-offset)*-1);position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (max-width:650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover:hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus{-ms-flex-negative:0;flex-shrink:0}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width:650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-toolbar__plus{position:static}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width:650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (max-width:650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover:hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__settings-btn{margin-left:3px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (min-width:651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width:650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-toolbar__settings-btn{position:static}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}.ce-toolbox{--gap:8px}@media (min-width:651px){.ce-toolbox{position:absolute;top:calc(26px + var(--gap));left:0}.ce-toolbox--opened-top{top:calc(var(--gap)*-1 + var(--popover-height)*-1)}}@media (min-width:651px){.codex-editor--narrow .ce-toolbox{left:auto;right:0}.codex-editor--narrow .ce-toolbox .ce-popover{right:0}}.ce-inline-toolbar{--y-offset:8px;position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar{-webkit-transform:translateX(-50%) translateY(8px) scale(.94);transform:translateX(-50%) translateY(8px) scale(.94);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease;will-change:transform,opacity;top:0;left:0;z-index:3}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.94);transform:translateX(-23px) translateY(8px) scale(.94)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);transform:translateX(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.94);transform:translateX(-100%) translateY(8px) scale(.94);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{width:100%;padding:0 6px}.ce-inline-toolbar__buttons,.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover:hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-arrow,.ce-inline-toolbar__dropdown-content{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-arrow svg,.ce-inline-toolbar__dropdown-content svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0}.ce-inline-tool svg{width:20px;height:20px}@media (max-width:650px){.ce-inline-tool svg{width:28px;height:28px}}@media (hover:hover){.ce-inline-tool:hover{background-color:#eff2f5}}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool{border-radius:0;line-height:normal}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{outline:none;border:0;border-radius:0 0 4px 4px;margin:0;font-size:13px;padding:10px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;border-top:1px solid rgba(201,201,204,.48);-webkit-appearance:none;font-family:inherit}@media (max-width:650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar{opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .1s ease,-webkit-transform .1s ease;transition:opacity .1s ease,-webkit-transform .1s ease;transition:transform .1s ease,opacity .1s ease;transition:transform .1s ease,opacity .1s ease,-webkit-transform .1s ease;-webkit-transform:translateY(-8px);transform:translateY(-8px);left:-1px;width:150px;margin-top:5px;-webkit-box-sizing:content-box;box-sizing:content-box}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-conversion-toolbar__label{color:#707684;font-size:11px;font-weight:500;letter-spacing:.33px;padding:10px 10px 5px;text-transform:uppercase}.ce-conversion-tool{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 10px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-conversion-tool--hidden{display:none}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:hover{background:#eff2f5}.ce-conversion-tool__icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:26px;height:26px;-webkit-box-shadow:0 0 0 1px rgba(201,201,204,.48);box-shadow:0 0 0 1px rgba(201,201,204,.48);border-radius:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#fff;-webkit-box-sizing:content-box;box-sizing:content-box;-ms-flex-negative:0;flex-shrink:0;margin-right:10px}.ce-conversion-tool__icon svg{width:20px;height:20px}@media (max-width:650px){.ce-conversion-tool__icon{width:36px;height:36px;border-radius:8px}.ce-conversion-tool__icon svg{width:28px;height:28px}}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active{color:#388ae5!important;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-settings{position:absolute;z-index:2;--gap:8px}@media (min-width:651px){.ce-settings{position:absolute;top:calc(26px + var(--gap));left:0}.ce-settings--opened-top{top:calc(var(--gap)*-1 + var(--popover-height)*-1)}}.ce-settings__button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0}.ce-settings__button svg{width:20px;height:20px}@media (max-width:650px){.ce-settings__button svg{width:28px;height:28px}}@media (hover:hover){.ce-settings__button:hover{background-color:#eff2f5}}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button{line-height:32px}.ce-settings__button--disabled{cursor:not-allowed!important;opacity:.3}.ce-settings__button--selected{color:#388ae5}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:none}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content .ce-stub,.ce-block--selected .ce-block__content img{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388ae5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388ae5,#388ae5 1px,#fff 0,#fff 6px)}.ce-block a{cursor:pointer;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width:651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important;display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:6px 1px;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0}.cdx-settings-button svg{width:20px;height:20px}@media (max-width:650px){.cdx-settings-button svg{width:28px;height:28px}}@media (hover:hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button{min-width:26px;min-height:26px}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width:650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s linear infinite;animation:cdxRotation 1.2s linear infinite}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px 0 rgba(18,30,57,.04);color:#707684;text-align:center;cursor:pointer}@media (hover:hover){.cdx-button:hover{background:#fbfcfe;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px 0 rgba(18,30,57,.08)}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:3.5em 0;margin:17px 0;border-radius:3px;background:#fcf7f7;color:#b46262}.ce-stub__info{margin-left:20px}.ce-stub__title{margin-bottom:3px;font-weight:600;font-size:18px;text-transform:capitalize}.ce-stub__subtitle{font-size:16px}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width:650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0 solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width:651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.ce-popover{opacity:0;will-change:opacity,transform;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:6px;min-width:200px;width:200px;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;max-height:0;pointer-events:none;position:absolute;background-color:#fff;border:1px solid #e8e8eb;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px rgba(13,20,33,.13);border-radius:6px;z-index:2}.ce-popover--left-oriented:before{left:15px;margin-left:0}.ce-popover--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-popover{z-index:4;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.ce-popover--opened{opacity:1;max-height:270px;pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease}@media (max-width:650px){.ce-popover--opened{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover::-webkit-scrollbar{width:7px}.ce-popover::-webkit-scrollbar-thumb{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:inset 0 0 2px 2px #eff2f5;box-shadow:inset 0 0 2px 2px #eff2f5;border-color:transparent;border-style:solid;border-width:4px 3px 4px 0}@media (max-width:650px){.ce-popover{--offset:5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset)*2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (min-width:651px){.ce-popover__items{margin-top:5px}}.ce-popover__item{display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;white-space:nowrap;padding:3px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:6px}.ce-popover__item:not(:last-of-type){margin-bottom:1px}@media (max-width:650px){.ce-popover__item{font-size:16px;padding:4px}}@media (hover:hover){.ce-popover__item:hover:not(.ce-popover__item--no-visible-hover){background-color:#eff2f5}.ce-popover__item:hover .ce-popover__item-icon{-webkit-box-shadow:none;box-shadow:none}}.ce-popover__item--disabled{color:#707684;cursor:default;pointer-events:none}.ce-popover__item--disabled .ce-popover__item-icon{-webkit-box-shadow:0 0 0 1px #eff0f1;box-shadow:0 0 0 1px #eff0f1}.ce-popover__item--focused:not(.ce-popover__item--no-visible-focus){-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-popover__item--hidden{display:none}.ce-popover__item--active{background:rgba(56,138,229,.1);color:#388ae5}.ce-popover__item--confirmation{background:#e24a4a}.ce-popover__item--confirmation .ce-popover__item-icon{color:#e24a4a}.ce-popover__item--confirmation .ce-popover__item-label{color:#fff}@media (hover:hover){.ce-popover__item--confirmation:not(.ce-popover__item--no-visible-hover):hover{background:#ce4343}}.ce-popover__item--confirmation:not(.ce-popover__item--no-visible-focus).ce-popover__item--focused{background:#ce4343!important}.ce-popover__item-icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:26px;height:26px;-webkit-box-shadow:0 0 0 1px rgba(201,201,204,.48);box-shadow:0 0 0 1px rgba(201,201,204,.48);border-radius:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#fff;-webkit-box-sizing:content-box;box-sizing:content-box;-ms-flex-negative:0;flex-shrink:0;margin-right:10px}.ce-popover__item-icon svg{width:20px;height:20px}@media (max-width:650px){.ce-popover__item-icon{width:36px;height:36px;border-radius:8px}.ce-popover__item-icon svg{width:28px;height:28px}}.ce-popover__item-label{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ce-popover__item-label:after{content:"";width:25px;display:inline-block}.ce-popover__item-secondary-label{color:#707684;font-size:12px;margin-left:auto;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;margin-bottom:-2px;opacity:.6}@media (max-width:650px){.ce-popover__item-secondary-label{display:none}}.ce-popover__item--active .ce-popover__item-icon,.ce-popover__item--confirmation .ce-popover__item-icon,.ce-popover__item--focused .ce-popover__item-icon{-webkit-box-shadow:none;box-shadow:none}.ce-popover__no-found{display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;white-space:nowrap;padding:3px;font-size:14px;line-height:20px;font-weight:500;cursor:pointer;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:6px}.ce-popover__no-found:not(:last-of-type){margin-bottom:1px}@media (max-width:650px){.ce-popover__no-found{font-size:16px;padding:4px}}.ce-popover__no-found{color:#707684;display:none;cursor:default}.ce-popover__no-found--shown{display:block}@media (max-width:650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1d202b;opacity:.5;z-index:3;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}.ce-popover .cdx-search-field{display:none}}.ce-popover__overlay--hidden{z-index:0;opacity:0;visibility:hidden}.ce-popover__custom-content:not(:empty){padding:4px}@media (min-width:651px){.ce-popover__custom-content:not(:empty){margin-top:5px;padding:0}}.ce-popover__custom-content--hidden{display:none}.cdx-search-field{--icon-margin-right:10px;background:rgba(232,232,235,.49);border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}';
        }, function(e, t, n) {
          "use strict";
          n.r(t), n.d(t, "nanoid", function() {
            return s;
          }), n.d(t, "customAlphabet", function() {
            return a;
          }), n.d(t, "customRandom", function() {
            return i;
          }), n.d(t, "urlAlphabet", function() {
            return o;
          }), n.d(t, "random", function() {
            return r;
          });
          let o = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
          let r = (e2) => crypto.getRandomValues(new Uint8Array(e2)), i = (e2, t2, n2) => {
            let o2 = (2 << Math.log(e2.length - 1) / Math.LN2) - 1, r2 = -~(1.6 * o2 * t2 / e2.length);
            return () => {
              let i2 = "";
              for (; ; ) {
                let a2 = n2(r2), s2 = r2;
                for (; s2--; )
                  if (i2 += e2[a2[s2] & o2] || "", i2.length === t2)
                    return i2;
              }
            };
          }, a = (e2, t2) => i(e2, t2, r), s = (e2 = 21) => {
            let t2 = "", n2 = crypto.getRandomValues(new Uint8Array(e2));
            for (; e2--; ) {
              let o2 = 63 & n2[e2];
              t2 += o2 < 36 ? o2.toString(36) : o2 < 62 ? (o2 - 26).toString(36).toUpperCase() : o2 < 63 ? "_" : "-";
            }
            return t2;
          };
        }]);
      });
    }
  });

  // node_modules/editorjs-undo/dist/bundle.js
  var require_bundle = __commonJS({
    "node_modules/editorjs-undo/dist/bundle.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Undo = e() : t.Undo = e();
      }(window, function() {
        return function(t) {
          var e = {};
          function n(i) {
            if (e[i])
              return e[i].exports;
            var o = e[i] = { i, l: false, exports: {} };
            return t[i].call(o.exports, o, o.exports, n), o.l = true, o.exports;
          }
          return n.m = t, n.c = e, n.d = function(t2, e2, i) {
            n.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: i });
          }, n.r = function(t2) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
          }, n.t = function(t2, e2) {
            if (1 & e2 && (t2 = n(t2)), 8 & e2)
              return t2;
            if (4 & e2 && "object" == typeof t2 && t2 && t2.__esModule)
              return t2;
            var i = /* @__PURE__ */ Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", { enumerable: true, value: t2 }), 2 & e2 && "string" != typeof t2)
              for (var o in t2)
                n.d(i, o, function(e3) {
                  return t2[e3];
                }.bind(null, o));
            return i;
          }, n.n = function(t2) {
            var e2 = t2 && t2.__esModule ? function() {
              return t2.default;
            } : function() {
              return t2;
            };
            return n.d(e2, "a", e2), e2;
          }, n.o = function(t2, e2) {
            return Object.prototype.hasOwnProperty.call(t2, e2);
          }, n.p = "/", n(n.s = 0);
        }([function(t, e, n) {
          "use strict";
          function i(t2, e2) {
            for (var n2 = 0; n2 < e2.length; n2++) {
              var i2 = e2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t2, i2.key, i2);
            }
          }
          n.r(e), n.d(e, "default", function() {
            return s;
          });
          var o = function() {
            function t2(e3, n3) {
              !function(t3, e4) {
                if (!(t3 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2), this.holder = "string" == typeof n3 ? document.getElementById(n3) : n3, this.observer = null, this.debounceTimer = 200, this.mutationDebouncer = this.debounce(function() {
                e3();
              }, this.debounceTimer);
            }
            var e2, n2, o2;
            return e2 = t2, (n2 = [{ key: "setMutationObserver", value: function() {
              var t3 = this, e3 = this.holder;
              this.observer = new MutationObserver(function(e4) {
                t3.mutationHandler(e4);
              }), this.observer.observe(e3, { childList: true, attributes: true, subtree: true, characterData: true, characterDataOldValue: true });
            } }, { key: "mutationHandler", value: function(t3) {
              var e3 = this, n3 = false;
              t3.forEach(function(t4) {
                switch (t4.type) {
                  case "childList":
                    t4.target === e3.holder ? e3.onDestroy() : n3 = true;
                    break;
                  case "characterData":
                    n3 = true;
                    break;
                  case "attributes":
                    t4.target.classList.contains("ce-block") || (n3 = true);
                }
              }), n3 && this.mutationDebouncer();
            } }, { key: "debounce", value: function(t3, e3) {
              var n3, i2 = this;
              return function() {
                for (var o3 = arguments.length, r2 = new Array(o3), s2 = 0; s2 < o3; s2++)
                  r2[s2] = arguments[s2];
                var a = i2;
                clearTimeout(n3), n3 = setTimeout(function() {
                  return t3.apply(a, r2);
                }, e3);
              };
            } }, { key: "onDestroy", value: function() {
              var t3 = new CustomEvent("destroy");
              document.dispatchEvent(t3), this.observer.disconnect();
            } }]) && i(e2.prototype, n2), o2 && i(e2, o2), t2;
          }();
          function r(t2, e2) {
            for (var n2 = 0; n2 < e2.length; n2++) {
              var i2 = e2[n2];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t2, i2.key, i2);
            }
          }
          var s = function() {
            function t2(e3) {
              var n3 = this, i3 = e3.editor, r2 = e3.onUpdate, s2 = e3.maxLength;
              !function(t3, e4) {
                if (!(t3 instanceof e4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, t2);
              var a = { maxLength: 30, onUpdate: function() {
              } }, u = i3.configuration;
              this.editor = i3, this.shouldSaveHistory = true, this.readOnly = u.readOnly, this.maxLength = s2 || a.maxLength, this.onUpdate = r2 || a.onUpdate, new o(function() {
                return n3.registerChange();
              }, u.holder).setMutationObserver(), this.setEventListeners(), this.initialItem = null, this.clear();
            }
            var e2, n2, i2;
            return e2 = t2, i2 = [{ key: "isReadOnlySupported", get: function() {
              return true;
            } }], (n2 = [{ key: "truncate", value: function(t3, e3) {
              for (; t3.length > e3; )
                t3.shift();
            } }, { key: "initialize", value: function(t3) {
              var e3 = "blocks" in t3 ? t3.blocks : t3, n3 = { index: e3.length - 1, state: e3 };
              this.stack[0] = n3, this.initialItem = n3;
            } }, { key: "clear", value: function() {
              this.stack = this.initialItem ? [this.initialItem] : [{ index: 0, state: [] }], this.position = 0, this.onUpdate();
            } }, { key: "registerChange", value: function() {
              var t3 = this;
              this.readOnly || (this.editor && this.editor.save && this.shouldSaveHistory && this.editor.save().then(function(e3) {
                t3.editorDidUpdate(e3.blocks) && t3.save(e3.blocks);
              }), this.shouldSaveHistory = true);
            } }, { key: "editorDidUpdate", value: function(t3) {
              var e3 = this.stack[this.position].state;
              return t3.length !== e3.length || JSON.stringify(e3) !== JSON.stringify(t3);
            } }, { key: "save", value: function(t3) {
              this.position >= this.maxLength && this.truncate(this.stack, this.maxLength), this.position = Math.min(this.position, this.stack.length - 1), this.stack = this.stack.slice(0, this.position + 1);
              var e3 = this.editor.blocks.getCurrentBlockIndex();
              this.stack.push({ index: e3, state: t3 }), this.position += 1, this.onUpdate();
            } }, { key: "undo", value: function() {
              var t3 = this;
              if (this.canUndo()) {
                this.shouldSaveHistory = false;
                var e3 = this.stack[this.position -= 1], n3 = e3.index, i3 = e3.state;
                this.onUpdate(), this.editor.blocks.render({ blocks: i3 }).then(function() {
                  return t3.editor.caret.setToBlock(n3, "end");
                });
              }
            } }, { key: "redo", value: function() {
              var t3 = this;
              if (this.canRedo()) {
                this.shouldSaveHistory = false;
                var e3 = this.stack[this.position += 1], n3 = e3.index, i3 = e3.state;
                this.onUpdate(), this.editor.blocks.render({ blocks: i3 }).then(function() {
                  return t3.editor.caret.setToBlock(n3, "end");
                });
              }
            } }, { key: "canUndo", value: function() {
              return !this.readOnly && this.position > 0;
            } }, { key: "canRedo", value: function() {
              return !this.readOnly && this.position < this.count();
            } }, { key: "count", value: function() {
              return this.stack.length - 1;
            } }, { key: "setEventListeners", value: function() {
              var t3 = this, e3 = /(Mac)/i.test(navigator.platform) ? "metaKey" : "ctrlKey", n3 = function(n4) {
                n4[e3] && "z" === n4.key && (n4.preventDefault(), t3.undo());
              }, i3 = function(n4) {
                n4[e3] && "y" === n4.key && (n4.preventDefault(), t3.redo());
              };
              document.addEventListener("keydown", n3), document.addEventListener("keydown", i3), document.addEventListener("destroy", function() {
                document.removeEventListener("keydown", n3), document.removeEventListener("keydown", i3);
              });
            } }]) && r(e2.prototype, n2), i2 && r(e2, i2), t2;
          }();
        }]).default;
      });
    }
  });

  // ../safty_theme/safty_theme/public/js/frappe/ui/page.js
  frappe.ui.make_app_page = function(opts) {
    opts.parent.page = new frappe.ui.Page(opts);
    return opts.parent.page;
  };
  frappe.ui.pages = {};
  frappe.ui.Page = class Page {
    constructor(opts) {
      $.extend(this, opts);
      this.set_document_title = true;
      this.buttons = {};
      this.fields_dict = {};
      this.views = {};
      this.make();
      frappe.ui.pages[frappe.get_route_str()] = this;
    }
    make() {
      this.wrapper = $(this.parent);
      this.add_main_section();
      this.setup_scroll_handler();
      this.setup_sidebar_toggle();
    }
    setup_scroll_handler() {
    }
    get_empty_state(title, message, primary_action) {
      let $empty_state = $(`<div class="page-card-container">
			<div class="page-card">
				<div class="page-card-head">
					<span class="indicator blue">
						${title}</span>
				</div>
				<p>${message}</p>
				<div>
					<button class="btn btn-primary btn-sm">${primary_action}</button>
				</div>
			</div>
		</div>`);
      return $empty_state;
    }
    load_lib(callback) {
      frappe.require(this.required_libs, callback);
    }
    add_main_section() {
      $(frappe.render_template("page", {})).appendTo(this.wrapper);
      if (this.single_column) {
        this.add_view(
          "main",
          '<div class="row layout-main">					<div class="col-md-12 layout-main-section-wrapper">						<div class="layout-main-section"></div>						<div class="layout-footer hide"></div>					</div>				</div>'
        );
      } else {
        this.add_view(
          "main",
          `
				<div class="row layout-main">
					<div class="col-lg-2 layout-side-section "></div>
					<div class="col layout-main-section-wrapper">
						<div class="layout-main-section"></div>
						<div class="layout-footer hide"></div>
					</div>
				</div>
			`
        );
      }
      this.setup_page();
    }
    setup_page() {
      this.$title_area = this.wrapper.find(".title-area");
      this.$sub_title_area = this.wrapper.find("h6");
      if (this.title)
        this.set_title(this.title);
      if (this.icon)
        this.get_main_icon(this.icon);
      this.body = this.main = this.wrapper.find(".layout-main-section");
      this.container = this.wrapper.find(".page-body");
      this.sidebar = this.wrapper.find(".layout-side-section");
      this.footer = this.wrapper.find(".layout-footer");
      this.indicator = this.wrapper.find(".indicator-pill");
      this.page_actions = this.wrapper.find(".page-actions");
      this.btn_primary = this.page_actions.find(".primary-action");
      this.btn_secondary = this.page_actions.find(".btn-secondary");
      this.menu = this.page_actions.find(".menu-btn-group .dropdown-menu");
      this.menu_btn_group = this.page_actions.find(".menu-btn-group");
      this.actions = this.page_actions.find(".actions-btn-group .dropdown-menu");
      this.actions_btn_group = this.page_actions.find(".actions-btn-group");
      this.standard_actions = this.page_actions.find(".standard-actions");
      this.custom_actions = this.page_actions.find(".custom-actions");
      this.page_form = $('<div class="page-form row hide"></div>').prependTo(this.main);
      this.inner_toolbar = this.custom_actions;
      this.icon_group = this.page_actions.find(".page-icon-group");
      if (this.make_page) {
        this.make_page();
      }
      this.card_layout && this.main.addClass("frappe-card");
      let menu_btn = this.menu_btn_group.find("button");
      menu_btn.attr("title", __("Menu")).tooltip({ delay: { show: 600, hide: 100 } });
      frappe.ui.keys.get_shortcut_group(this.page_actions[0]).add(menu_btn, menu_btn.find(".menu-btn-group-label"));
      let action_btn = this.actions_btn_group.find("button");
      frappe.ui.keys.get_shortcut_group(this.page_actions[0]).add(action_btn, action_btn.find(".actions-btn-group-label"));
    }
    setup_sidebar_toggle() {
      let sidebar_toggle = $(".page-head").find(".sidebar-toggle-btn");
      sidebar_toggle.click(function(e) {
        e.stopPropagation();
        $("#mosyrsidebar").css("margin-left", "0");
      });
      $("#mosyrsidebar").click(function(e) {
        e.stopPropagation();
      });
      if ($(window).width() < 1024) {
        $("#body").click(function() {
          $("#mosyrsidebar").css("margin-left", "-266px");
        });
      }
    }
    update_sidebar_icon() {
    }
    set_indicator(label, color) {
      this.clear_indicator().removeClass("hide").html(`<span>${label}</span>`).addClass(color);
    }
    add_action_icon(icon, click, css_class = "", tooltip_label) {
      const button = $(`
			<button class="text-muted btn btn-default ${css_class} icon-btn">
				${frappe.utils.icon(icon)}
			</button>
		`);
      button.appendTo(this.icon_group.removeClass("hide"));
      button.click(click);
      button.attr("title", __(tooltip_label || frappe.unscrub(icon))).tooltip({ delay: { show: 600, hide: 100 }, trigger: "hover" });
      return button;
    }
    clear_indicator() {
      return this.indicator.removeClass().addClass("indicator-pill whitespace-nowrap hide");
    }
    get_icon_label(icon, label) {
      let icon_name = icon;
      let size = "xs";
      if (typeof icon === "object") {
        icon_name = icon.icon;
        size = icon.size || "xs";
      }
      return `${icon ? frappe.utils.icon(icon_name, size) : ""} <span class="hidden-xs"> ${__(
        label
      )} </span>`;
    }
    set_action(btn, opts) {
      let me = this;
      if (opts.icon) {
        opts.label = this.get_icon_label(opts.icon, opts.label);
      }
      this.clear_action_of(btn);
      btn.removeClass("hide").prop("disabled", false).html(opts.label).on("click", function() {
        let response = opts.click.apply(this, [btn]);
        me.btn_disable_enable(btn, response);
      });
      if (opts.working_label) {
        btn.attr("data-working-label", opts.working_label);
      }
      let text_span = btn.find("span");
      frappe.ui.keys.get_shortcut_group(this).add(btn, text_span.length ? text_span : btn);
    }
    set_primary_action(label, click, icon, working_label) {
      this.set_action(this.btn_primary, {
        label,
        click,
        icon,
        working_label
      });
      return this.btn_primary;
    }
    set_secondary_action(label, click, icon, working_label) {
      this.set_action(this.btn_secondary, {
        label,
        click,
        icon,
        working_label
      });
      return this.btn_secondary;
    }
    clear_action_of(btn) {
      btn.addClass("hide").unbind("click").removeAttr("data-working-label");
    }
    clear_primary_action() {
      this.clear_action_of(this.btn_primary);
    }
    clear_secondary_action() {
      this.clear_action_of(this.btn_secondary);
    }
    clear_actions() {
      this.clear_primary_action();
      this.clear_secondary_action();
    }
    clear_custom_actions() {
      this.custom_actions.addClass("hide").empty();
    }
    clear_icons() {
      this.icon_group.addClass("hide").empty();
    }
    add_menu_item(label, click, standard, shortcut, show_parent) {
      return this.add_dropdown_item({
        label,
        click,
        standard,
        parent: this.menu,
        shortcut,
        show_parent
      });
    }
    add_custom_menu_item(parent, label, click, standard, shortcut, icon = null) {
      return this.add_dropdown_item({
        label,
        click,
        standard,
        parent,
        shortcut,
        icon
      });
    }
    clear_menu() {
      this.clear_btn_group(this.menu);
    }
    show_menu() {
      this.menu_btn_group.removeClass("hide");
    }
    hide_menu() {
      this.menu_btn_group.addClass("hide");
    }
    show_icon_group() {
      this.icon_group.removeClass("hide");
    }
    hide_icon_group() {
      this.icon_group.addClass("hide");
    }
    show_actions_menu() {
      this.actions_btn_group.removeClass("hide");
    }
    hide_actions_menu() {
      this.actions_btn_group.addClass("hide");
    }
    add_action_item(label, click, standard) {
      return this.add_dropdown_item({
        label,
        click,
        standard,
        parent: this.actions
      });
    }
    add_actions_menu_item(label, click, standard, shortcut) {
      return this.add_dropdown_item({
        label,
        click,
        standard,
        shortcut,
        parent: this.actions,
        show_parent: false
      });
    }
    clear_actions_menu() {
      this.clear_btn_group(this.actions);
    }
    add_dropdown_item({
      label,
      click,
      standard,
      parent,
      shortcut,
      show_parent = true,
      icon = null
    }) {
      if (show_parent) {
        parent.parent().removeClass("hide hidden-xl");
      }
      let $link = this.is_in_group_button_dropdown(parent, "li > a.grey-link > span", label);
      if ($link)
        return $link;
      let $li;
      let $icon = ``;
      if (icon) {
        $icon = `<span class="menu-item-icon">${frappe.utils.icon(icon)}</span>`;
      }
      if (shortcut) {
        let shortcut_obj = this.prepare_shortcut_obj(shortcut, click, label);
        $li = $(`
				<li>
					<a class="grey-link dropdown-item" href="#" onClick="return false;">
						${$icon}
						<span class="menu-item-label">${label}</span>
						<kbd class="pull-right">
							<span>${shortcut_obj.shortcut_label}</span>
						</kbd>
					</a>
				</li>
			`);
        frappe.ui.keys.add_shortcut(shortcut_obj);
      } else {
        $li = $(`
				<li>
					<a class="grey-link dropdown-item" href="#" onClick="return false;">
						${$icon}
						<span class="menu-item-label">${label}</span>
					</a>
				</li>
			`);
      }
      $link = $li.find("a").on("click", (e) => {
        if (e.ctrlKey || e.metaKey) {
          frappe.open_in_new_tab = true;
        }
        return click();
      });
      if (standard) {
        $li.appendTo(parent);
      } else {
        this.divider = parent.find(".dropdown-divider");
        if (!this.divider.length) {
          this.divider = $('<li class="dropdown-divider user-action"></li>').prependTo(
            parent
          );
        }
        $li.addClass("user-action").insertBefore(this.divider);
      }
      frappe.ui.keys.get_shortcut_group(parent.get(0)).add($link, $link.find(".menu-item-label"));
      return $link;
    }
    prepare_shortcut_obj(shortcut, click, label) {
      let shortcut_obj;
      if (typeof shortcut === "string") {
        shortcut_obj = { shortcut };
      } else {
        shortcut_obj = shortcut;
      }
      if (frappe.utils.is_mac()) {
        shortcut_obj.shortcut_label = shortcut_obj.shortcut.replace("Ctrl", "\u2318");
      } else {
        shortcut_obj.shortcut_label = shortcut_obj.shortcut;
      }
      shortcut_obj.shortcut = shortcut_obj.shortcut.toLowerCase();
      if (!shortcut_obj.action) {
        shortcut_obj.action = click;
      }
      if (!shortcut_obj.description) {
        shortcut_obj.description = label;
      }
      shortcut_obj.page = this;
      return shortcut_obj;
    }
    is_in_group_button_dropdown(parent, selector, label) {
      if (!selector)
        selector = "li";
      if (!label || !parent)
        return false;
      const item_selector = `${selector}[data-label="${encodeURIComponent(label)}"]`;
      const existing_items = $(parent).find(item_selector);
      return (existing_items == null ? void 0 : existing_items.length) > 0 && existing_items;
    }
    clear_btn_group(parent) {
      parent.empty();
      parent.parent().addClass("hide");
    }
    add_divider() {
      return $('<li class="dropdown-divider"></li>').appendTo(this.menu);
    }
    get_or_add_inner_group_button(label) {
      var $group = this.inner_toolbar.find(
        `.inner-group-button[data-label="${encodeURIComponent(label)}"]`
      );
      if (!$group.length) {
        $group = $(
          `<div class="inner-group-button" data-label="${encodeURIComponent(label)}">
					<button type="button" class="btn btn-default ellipsis" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						${label}
						${frappe.utils.icon("select", "xs")}
					</button>
					<div role="menu" class="dropdown-menu"></div>
				</div>`
        ).appendTo(this.inner_toolbar);
      }
      return $group;
    }
    get_inner_group_button(label) {
      return this.inner_toolbar.find(
        `.inner-group-button[data-label="${encodeURIComponent(label)}"]`
      );
    }
    set_inner_btn_group_as_primary(label) {
      this.get_or_add_inner_group_button(label).find("button").removeClass("btn-default").addClass("btn-primary");
    }
    btn_disable_enable(btn, response) {
      if (response && response.then) {
        btn.prop("disabled", true);
        response.then(() => {
          btn.prop("disabled", false);
        });
      } else if (response && response.always) {
        btn.prop("disabled", true);
        response.always(() => {
          btn.prop("disabled", false);
        });
      }
    }
    add_inner_button(label, action, group, type = "default") {
      var me = this;
      let _action = function() {
        let btn = $(this);
        let response = action();
        me.btn_disable_enable(btn, response);
      };
      let menu_item_label = group ? `${group} > ${label}` : label;
      let menu_item = this.add_menu_item(menu_item_label, _action, false, false, false);
      menu_item.parent().addClass("hidden-xl");
      if (this.menu_btn_group.hasClass("hide")) {
        this.menu_btn_group.removeClass("hide").addClass("hidden-xl");
      }
      if (group) {
        var $group = this.get_or_add_inner_group_button(group);
        $(this.inner_toolbar).removeClass("hide");
        if (!this.is_in_group_button_dropdown($group.find(".dropdown-menu"), "a", label)) {
          return $(
            `<a class="dropdown-item" href="#" onclick="return false;" data-label="${encodeURIComponent(
              label
            )}">${label}</a>`
          ).on("click", _action).appendTo($group.find(".dropdown-menu"));
        }
      } else {
        let button = this.inner_toolbar.find(
          `button[data-label="${encodeURIComponent(label)}"]`
        );
        if (button.length == 0) {
          button = $(`<button data-label="${encodeURIComponent(
            label
          )}" class="btn btn-${type} ellipsis">
					${__(label)}
				</button>`);
          button.on("click", _action);
          button.appendTo(this.inner_toolbar.removeClass("hide"));
        }
        return button;
      }
    }
    remove_inner_button(label, group) {
      if (typeof label === "string") {
        label = [label];
      }
      label = label.map((l) => __(l));
      if (group) {
        var $group = this.get_inner_group_button(__(group));
        if ($group.length) {
          $group.find(`.dropdown-item[data-label="${encodeURIComponent(label)}"]`).remove();
        }
        if ($group.find(".dropdown-item").length === 0)
          $group.remove();
      } else {
        this.inner_toolbar.find(`button[data-label="${encodeURIComponent(label)}"]`).remove();
      }
    }
    change_inner_button_type(label, group, type) {
      let btn;
      if (group) {
        var $group = this.get_inner_group_button(__(group));
        if ($group.length) {
          btn = $group.find(`.dropdown-item[data-label="${encodeURIComponent(label)}"]`);
        }
      } else {
        btn = this.inner_toolbar.find(`button[data-label="${encodeURIComponent(label)}"]`);
      }
      if (btn) {
        btn.removeClass().addClass(`btn btn-${type} ellipsis`);
      }
    }
    add_inner_message(message) {
      let $message = $(`<span class='inner-page-message text-muted small'>${message}</div>`);
      this.inner_toolbar.find(".inner-page-message").remove();
      this.inner_toolbar.removeClass("hide").prepend($message);
      return $message;
    }
    clear_inner_toolbar() {
      this.inner_toolbar.empty().addClass("hide");
    }
    add_sidebar_item(label, action, insert_after, prepend) {
      var parent = this.sidebar.find(".sidebar-menu.standard-actions");
      var li = $("<li>");
      var link = $("<a>").html(label).on("click", action).appendTo(li);
      if (insert_after) {
        li.insertAfter(parent.find(insert_after));
      } else {
        if (prepend) {
          li.prependTo(parent);
        } else {
          li.appendTo(parent);
        }
      }
      return link;
    }
    clear_user_actions() {
      this.menu.find(".user-action").remove();
    }
    get_title_area() {
      return this.$title_area;
    }
    set_title(title, icon = null, strip = true, tab_title = "") {
      if (!title)
        title = "";
      if (strip) {
        title = strip_html(title);
      }
      this.title = title;
      frappe.utils.set_title(tab_title || title);
      if (icon) {
        title = `${frappe.utils.icon(icon)} ${title}`;
      }
      let title_wrapper = this.$title_area.find(".title-text");
      title_wrapper.html(title);
      title_wrapper.attr("title", this.title);
    }
    set_title_sub(txt) {
      this.$sub_title_area.html(txt).toggleClass("hide", !!!txt);
    }
    get_main_icon(icon) {
      return this.$title_area.find(".title-icon").html('<i class="' + icon + ' fa-fw"></i> ').toggle(true);
    }
    add_help_button(txt) {
    }
    add_button(label, click, opts) {
      if (!opts)
        opts = {};
      let button = $(`<button
			class="btn ${opts.btn_class || "btn-default"} ${opts.btn_size || "btn-sm"} ellipsis">
				${opts.icon ? frappe.utils.icon(opts.icon) : ""}
				${label}
		</button>`);
      let menu_item = this.add_menu_item(label, click, false);
      menu_item.parent().addClass("hidden-xl");
      button.appendTo(this.custom_actions);
      button.on("click", click);
      this.custom_actions.removeClass("hide");
      return button;
    }
    add_custom_button_group(label, icon, parent) {
      let dropdown_label = `<span class="hidden-xs">
			<span class="custom-btn-group-label">${__(label)}</span>
			${frappe.utils.icon("select", "xs")}
		</span>`;
      if (icon) {
        dropdown_label = `<span class="hidden-xs">
				${frappe.utils.icon(icon)}
				<span class="custom-btn-group-label">${__(label)}</span>
				${frappe.utils.icon("select", "xs")}
			</span>
			<span class="visible-xs">
				${frappe.utils.icon(icon)}
			</span>`;
      }
      let custom_btn_group = $(`
			<div class="custom-btn-group">
				<button type="button" class="btn btn-default btn-sm ellipsis" data-toggle="dropdown" aria-expanded="false">
					${dropdown_label}
				</button>
				<ul class="dropdown-menu" role="menu"></ul>
			</div>
		`);
      if (!parent)
        parent = this.custom_actions;
      parent.removeClass("hide").append(custom_btn_group);
      return custom_btn_group.find(".dropdown-menu");
    }
    add_dropdown_button(parent, label, click, icon) {
      frappe.ui.toolbar.add_dropdown_button(parent, label, click, icon);
    }
    add_label(label) {
      this.show_form();
      return $("<label class='col-md-1 page-only-label'>" + label + " </label>").appendTo(
        this.page_form
      );
    }
    add_select(label, options) {
      var field = this.add_field({ label, fieldtype: "Select" });
      return field.$wrapper.find("select").empty().add_options(options);
    }
    add_data(label) {
      var field = this.add_field({ label, fieldtype: "Data" });
      return field.$wrapper.find("input").attr("placeholder", label);
    }
    add_date(label, date) {
      var field = this.add_field({ label, fieldtype: "Date", default: date });
      return field.$wrapper.find("input").attr("placeholder", label);
    }
    add_check(label) {
      return $("<div class='checkbox'><label><input type='checkbox'>" + label + "</label></div>").appendTo(this.page_form).find("input");
    }
    add_break() {
      this.page_form.append('<div class="clearfix invisible-xs"></div>');
    }
    add_field(df, parent) {
      this.show_form();
      if (!df.placeholder) {
        df.placeholder = df.label;
      }
      df.input_class = "input-xs";
      var f = frappe.ui.form.make_control({
        df,
        parent: parent || this.page_form,
        only_input: df.fieldtype == "Check" ? false : true
      });
      f.refresh();
      $(f.wrapper).addClass("col-md-2").attr("title", __(df.label)).tooltip({
        delay: { show: 600, hide: 100 },
        trigger: "hover"
      });
      if (df.fieldtype == "HTML") {
        return;
      }
      if (!f.$input)
        f.make_input();
      f.$input.attr("placeholder", __(df.label));
      if (df.fieldtype === "Check") {
        $(f.wrapper).find(":first-child").removeClass("col-md-offset-4 col-md-8");
      }
      if (df.fieldtype == "Button") {
        $(f.wrapper).find(".page-control-label").html("&nbsp;");
        f.$input.addClass("btn-xs").css({ width: "100%", "margin-top": "-1px" });
      }
      if (df["default"])
        f.set_input(df["default"]);
      this.fields_dict[df.fieldname || df.label] = f;
      return f;
    }
    clear_fields() {
      this.page_form.empty();
    }
    show_form() {
      this.page_form.removeClass("hide");
    }
    hide_form() {
      this.page_form.addClass("hide");
    }
    get_form_values() {
      var values = {};
      for (let fieldname in this.fields_dict) {
        let field = this.fields_dict[fieldname];
        values[fieldname] = field.get_value();
      }
      return values;
    }
    add_view(name, html) {
      let element = html;
      if (typeof html === "string") {
        element = $(html);
      }
      this.views[name] = element.appendTo($(this.wrapper).find(".page-content"));
      if (!this.current_view) {
        this.current_view = this.views[name];
      } else {
        this.views[name].toggle(false);
      }
      return this.views[name];
    }
    set_view(name) {
      if (this.current_view_name === name)
        return;
      this.current_view && this.current_view.toggle(false);
      this.current_view = this.views[name];
      this.previous_view_name = this.current_view_name;
      this.current_view_name = name;
      this.views[name].toggle(true);
      this.wrapper.trigger("view-change");
    }
  };

  // ../safty_theme/safty_theme/public/js/frappe/ui/custom_sidebar.js
  frappe.views.Workspace.prototype.build_sidebar_section = function(title, root_pages) {
    let sidebar_section = $(
      `<div class="standard-sidebar-section nested-container" data-title="${title}">
		</div>`
    );
    this.prepare_sidebar(root_pages, sidebar_section, this.sidebar);
    if (Object.keys(root_pages).length === 0) {
      sidebar_section.addClass("hidden");
    }
    if (sidebar_section.find(".sidebar-item-container").length && sidebar_section.find("> [item-is-hidden='0']").length == 0) {
      sidebar_section.addClass("hidden show-in-edit-mode");
    }
  };

  // frappe-html:/home/ali/frappe-exp/apps/safty_theme/safty_theme/public/js/frappe/ui/toolbar/navbar.html
  frappe.templates["navbar"] = `<style>
	.dropdown-menu li {
		position: relative;
	}
	.dropdown-menu .dropdown-submenu {
		display: none;
		position: absolute;
		left: 100%;
		top: -7px;
	}
	.dropdown-menu .dropdown-submenu-left {
		right: 100%;
		left: auto;
	}
	.dropdown-menu > li:hover > .dropdown-submenu {
		display: block;
	}
</style>


<header class="navbar navbar-expand sticky-top" role="navigation">
	<div class="container">
		<a class="navbar-brand navbar-home" href="/app">
			<img class="app-logo" style="width: {{ navbar_settings.logo_width || 24 }}px" src="{{ frappe.boot.app_logo_url }}">
		</a>
		<ul class="nav navbar-nav d-none d-sm-flex" id="navbar-breadcrumbs"></ul>
		{% if (eko_navbar_reports.length) { %}
		<ul class="navbar-nav">
			<li class="vertical-bar d-none d-sm-block"></li>
		</ul>
		<div class="dropdown navbar-nav pl-2">
			<a class="nav-link" data-toggle="dropdown" href="#" onclick="return false;">
				{{ __("Reports") }}
				<span>
					<svg class="icon icon-xs"><use href="#icon-small-down"></use></svg>
				</span>
			</a>
			<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
				{% for report in eko_navbar_reports %}
					{% if (report.is_submenu === 0) { %}
						<li id="toolbar-user" role="menu"><a class="dropdown-item" href="/app/{{ report.report_route }}">{%= __(report.title) %}</a></li>
					{% } else if (report.is_submenu === 1 && report.report_list) { %}
						<li id="toolbar-user" role="menu">
							<a class="dropdown-item"  data-toggle="dropdown" href="#" onclick="return false;">{%= __(report.title) %} &raquo;</a>
							<ul class="dropdown-menu dropdown-submenu">
								{% for submenu_report in report.report_list %}
									<li><a class="dropdown-item" href="/app/{{ submenu_report.report_route }}">{%= __(submenu_report.title) %}</a></li>
								{% endfor %}
							</ul>
						</li>
					{% } %}
				{% endfor %}
			</ul>
		</div>
		{% } %}

		<div class="collapse navbar-collapse justify-content-end">
			<form class="form-inline fill-width justify-content-end" role="search" onsubmit="return false;">
				{% if (frappe.boot.read_only) { %}
					<span class="indicator-pill yellow no-indicator-dot" title="{%= __("Your site is getting upgraded.") %}">
						{%= __("Read Only Mode") %}
					</span>
				{% } %}
				<div class="input-group search-bar text-muted hidden">
					<input
						id="navbar-search"
						type="text"
						class="form-control"
						placeholder="{%= __("Search or type a command (Ctrl + G)") %}"
						aria-haspopup="true"
					>
					<span class="search-icon">
						<svg class="icon icon-sm"><use href="#icon-search"></use></svg>
					</span>
				</div>
			</form>
			<ul class="navbar-nav">
				<li class="nav-item dropdown dropdown-notifications dropdown-mobile hidden">
					<a
						class="nav-link notifications-icon text-muted"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="true"
						href="#"
						onclick="return false;">
						<span class="notifications-seen">
							<svg class="icon icon-md"><use href="#icon-notification"></use></svg>
						</span>
						<span class="notifications-unseen">
							<svg class="icon icon-md"><use href="#icon-notification-with-indicator"></use></svg>
						</span>
					</a>
					<div class="dropdown-menu notifications-list dropdown-menu-right" role="menu">
						<div class="notification-list-header">
							<div class="header-items"></div>
							<div class="header-actions"></div>
						</div>
						<div class="notification-list-body">
							<div class="panel-notifications"></div>
							<div class="panel-events"></div>
						</div>
					</div>
				</li>
				<li class="nav-item dropdown dropdown-message dropdown-mobile hidden">
					<a
						class="nav-link notifications-icon text-muted"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="true"
						href="#"
						onclick="return false;">
						<span>
							<svg class="icon icon-md"><use href="#icon-small-message"></use></svg>
						</span>
					</a>
				</li>
				<li class="vertical-bar d-none d-sm-block"></li>
				<li class="nav-item dropdown dropdown-help dropdown-mobile d-none d-lg-block">
					<a class="nav-link" data-toggle="dropdown" href="#" onclick="return false;">
						{{ __("Help") }}
						<span>
							<svg class="icon icon-xs"><use href="#icon-small-down"></use></svg>
						</span>
					</a>
					<div class="dropdown-menu dropdown-menu-right" id="toolbar-help" role="menu">
						<div id="help-links"></div>
						<div class="dropdown-divider documentation-links"></div>
						{% for item in navbar_settings.help_dropdown %}
							{% if (!item.hidden) { %}
								{% if (item.route) { %}
									<a class="dropdown-item" href="{{ item.route }}">
										{%= __(item.item_label) %}
									</a>
								{% } else if (item.action) { %}
									<a class="dropdown-item" onclick="return {{ item.action }}">
										{%= __(item.item_label) %}
									</a>
								{% } else { %}
									<div class="dropdown-divider"></div>
								{% } %}
							{% } %}
						{% endfor %}
					</div>
				</li>
				<li class="nav-item dropdown dropdown-navbar-user dropdown-mobile">
					<a class="nav-link" data-toggle="dropdown" href="#" onclick="return false;">
						{{ avatar }}
					</a>
					<div class="dropdown-menu dropdown-menu-right" id="toolbar-user" role="menu">
						{% for item in navbar_settings.settings_dropdown %}
							{% if (!item.hidden) { %}
								{% if (item.route) { %}
									<a class="dropdown-item" href="{{ item.route }}">
										{%= __(item.item_label) %}
									</a>
								{% } else if (item.action) { %}
									<a class="dropdown-item" onclick="return {{ item.action }}">
										{%= __(item.item_label) %}
									</a>
								{% } else { %}
									<div class="dropdown-divider"></div>
								{% } %}
							{% } %}
						{% endfor %}
					</div>
				</li>
			</ul>
		</div>
	</div>
</header>
`;

  // ../safty_theme/safty_theme/public/js/frappe/ui/toolbar/toolbar.js
  frappe.provide("frappe.ui.toolbar");
  frappe.provide("frappe.search");
  frappe.ui.toolbar.Toolbar = class {
    constructor() {
      $("header").replaceWith(
        frappe.render_template("navbar", {
          avatar: frappe.avatar(frappe.session.user, "avatar-medium"),
          navbar_settings: frappe.boot.navbar_settings,
          eko_navbar_settings: frappe.boot.eko_navbar_settings,
          eko_navbar_reports: frappe.boot.eko_navbar_reports
        })
      );
      $(".dropdown-toggle").dropdown();
      $("#toolbar-user a[href]").click(function() {
        $(this).closest(".dropdown-menu").prev().dropdown("toggle");
      });
      $(document).ready(function() {
        $(".dropdown-submenu a.test").on("click", function(e) {
          $(this).next("ul").toggle();
          e.stopPropagation();
          e.preventDefault();
        });
      });
      this.setup_awesomebar();
      this.setup_notifications();
      this.setup_help();
      this.make();
    }
    make() {
      this.bind_events();
      $(document).trigger("toolbar_setup");
    }
    bind_events() {
      $(document).on("page-change", function() {
        $("header .navbar .custom-menu").remove();
      });
      $("#search-modal").on("shown.bs.modal", function() {
        var search_modal = $(this);
        setTimeout(function() {
          search_modal.find("#modal-search").focus();
        }, 300);
      });
      $(".navbar-toggle-full-width").click(() => {
        frappe.ui.toolbar.toggle_full_width();
      });
    }
    setup_help() {
      if (!frappe.boot.desk_settings.notifications) {
        $(".navbar .vertical-bar").removeClass("d-sm-block");
        $(".dropdown-help").removeClass("d-lg-block");
        return;
      }
      frappe.provide("frappe.help");
      frappe.help.show_results = show_results;
      this.search = new frappe.search.SearchDialog();
      frappe.provide("frappe.searchdialog");
      frappe.searchdialog.search = this.search;
      $(".dropdown-help .dropdown-toggle").on("click", function() {
        $(".dropdown-help input").focus();
      });
      $(".dropdown-help .dropdown-menu").on("click", "input, button", function(e) {
        e.stopPropagation();
      });
      $("#input-help").on("keydown", function(e) {
        if (e.which == 13) {
          $(this).val("");
        }
      });
      $(document).on("page-change", function() {
        var $help_links = $(".dropdown-help #help-links");
        $help_links.html("");
        var route = frappe.get_route_str();
        var breadcrumbs = route.split("/");
        var links = [];
        for (var i = 0; i < breadcrumbs.length; i++) {
          var r = route.split("/", i + 1);
          var key = r.join("/");
          var help_links = frappe.help.help_links[key] || [];
          links = $.merge(links, help_links);
        }
        if (links.length === 0) {
          $help_links.next().hide();
        } else {
          $help_links.next().show();
        }
        for (var i = 0; i < links.length; i++) {
          var link = links[i];
          var url = link.url;
          $("<a>", {
            href: url,
            class: "dropdown-item",
            text: __(link.label),
            target: "_blank"
          }).appendTo($help_links);
        }
        $(".dropdown-help .dropdown-menu").on("click", "a", show_results);
      });
      var $result_modal = frappe.get_modal("", "");
      $result_modal.addClass("help-modal");
      $(document).on("click", ".help-modal a", show_results);
      function show_results(e) {
        var href = e.target.href;
        if (href.indexOf("blob") > 0) {
          window.open(href, "_blank");
        }
        var path = $(e.target).attr("data-path");
        if (path) {
          e.preventDefault();
        }
      }
    }
    setup_awesomebar() {
      if (frappe.boot.desk_settings.search_bar) {
        let awesome_bar = new frappe.search.AwesomeBar();
        awesome_bar.setup("#navbar-search");
      }
      if (frappe.model.can_read("RQ Job")) {
        frappe.search.utils.make_function_searchable(function() {
          frappe.set_route("List", "RQ Job");
        }, __("Background Jobs"));
      }
    }
    setup_notifications() {
      if (frappe.boot.desk_settings.notifications && frappe.session.user !== "Guest") {
        this.notifications = new frappe.ui.Notifications();
      }
    }
  };
  $.extend(frappe.ui.toolbar, {
    add_dropdown_button: function(parent, label, click, icon) {
      var menu = frappe.ui.toolbar.get_menu(parent);
      if (menu.find("li:not(.custom-menu)").length && !menu.find(".divider").length) {
        frappe.ui.toolbar.add_menu_divider(menu);
      }
      return $(
        '<li class="custom-menu"><a><i class="fa-fw ' + icon + '"></i> ' + label + "</a></li>"
      ).insertBefore(menu.find(".divider")).find("a").click(function() {
        click.apply(this);
      });
    },
    get_menu: function(label) {
      return $("#navbar-" + label.toLowerCase());
    },
    add_menu_divider: function(menu) {
      menu = typeof menu == "string" ? frappe.ui.toolbar.get_menu(menu) : menu;
      $('<li class="divider custom-menu"></li>').prependTo(menu);
    },
    add_icon_link(route, icon, index, class_name) {
      let parent_element = $(".navbar-right").get(0);
      let new_element = $(`<li class="${class_name}">
			<a class="btn" href="${route}" title="${frappe.utils.to_title_case(
        class_name,
        true
      )}" aria-haspopup="true" aria-expanded="true">
				<div>
					<i class="octicon ${icon}"></i>
				</div>
			</a>
		</li>`).get(0);
      parent_element.insertBefore(new_element, parent_element.children[index]);
    },
    toggle_full_width() {
      let fullwidth = JSON.parse(localStorage.container_fullwidth || "false");
      fullwidth = !fullwidth;
      localStorage.container_fullwidth = fullwidth;
      frappe.ui.toolbar.set_fullwidth_if_enabled();
      $(document.body).trigger("toggleFullWidth");
    },
    set_fullwidth_if_enabled() {
      let fullwidth = JSON.parse(localStorage.container_fullwidth || "false");
      $(document.body).toggleClass("full-width", fullwidth);
    },
    show_shortcuts(e) {
      e.preventDefault();
      frappe.ui.keys.show_keyboard_shortcut_dialog();
      return false;
    }
  });
  frappe.ui.toolbar.clear_cache = frappe.utils.throttle(function() {
    frappe.assets.clear_local_storage();
    frappe.xcall("frappe.sessions.clear").then((message) => {
      frappe.show_alert({
        message,
        indicator: "info"
      });
      location.reload(true);
    });
  }, 1e4);
  frappe.ui.toolbar.show_about = function() {
    try {
      frappe.ui.misc.about();
    } catch (e) {
      console.log(e);
    }
    return false;
  };
  frappe.ui.toolbar.route_to_user = function() {
    frappe.set_route("Form", "User", frappe.session.user);
  };
  frappe.ui.toolbar.view_website = function() {
    let website_tab = window.open();
    website_tab.opener = null;
    website_tab.location = "/index";
  };
  frappe.ui.toolbar.setup_session_defaults = function() {
    let fields = [];
    frappe.call({
      method: "frappe.core.doctype.session_default_settings.session_default_settings.get_session_default_values",
      callback: function(data) {
        fields = JSON.parse(data.message);
        let perms = frappe.perm.get_perm("Session Default Settings");
        if (in_list(frappe.user_roles, "System Manager") || perms[0].read == 1) {
          fields[fields.length] = {
            fieldname: "settings",
            fieldtype: "Button",
            label: __("Settings"),
            click: () => {
              frappe.set_route(
                "Form",
                "Session Default Settings",
                "Session Default Settings"
              );
            }
          };
        }
        frappe.prompt(
          fields,
          function(values) {
            fields.forEach(function(d) {
              if (!values[d.fieldname]) {
                values[d.fieldname] = "";
              }
            });
            frappe.call({
              method: "frappe.core.doctype.session_default_settings.session_default_settings.set_session_default_values",
              args: {
                default_values: values
              },
              callback: function(data2) {
                if (data2.message == "success") {
                  frappe.show_alert({
                    message: __("Session Defaults Saved"),
                    indicator: "green"
                  });
                  frappe.ui.toolbar.clear_cache();
                } else {
                  frappe.show_alert({
                    message: __(
                      "An error occurred while setting Session Defaults"
                    ),
                    indicator: "red"
                  });
                }
              }
            });
          },
          __("Session Defaults"),
          __("Save")
        );
      }
    });
  };

  // frappe-html:/home/ali/frappe-exp/apps/safty_theme/safty_theme/public/templates/workspace.html
  frappe.templates["workspace"] = `<div class="workspace-skeleton">
    <div class="container mt-5">
        <div class="row card-row">
            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 order-0 mb-4">
                <div class="card" style="min-height: 120px;">
                    <div class="card-body green-card">
                        <span class="title-card title-white"> Total Employees</span>
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="dash-static">{{ total_employee }}</p>
                            <div class="rect-arrow">
                                <img src="/assets/safty_theme/images/arrow-stat.png">
                                <span class="stat-percentage">+8%</span>
                            </div>
                        </div>
                        <span class="title-card title-white"> Employee</span>
                    </div>
                </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 order-0 mb-4">
                <div class="card" style="min-height: 120px;">
                    <div class="card-body">
                        <span class="title-card"> Employees New join</span>
                        <div class="period-div"><span>yearly</span></div>
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="dash-static green-color">{{ total_new_join }}</p>
                            <div class="rect-arrow green-percentage">
                                <img src="/assets/safty_theme/images/green-arrow.png">
                                <span class="stat-percentage green-per">+9%</span>
                            </div>
                        </div>
                        <span class="title-card"> Employee</span>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 order-0 mb-4">
                <div class="card" style="min-height: 120px;">
                    <div class="card-body">
                        <span class="title-card"> Employees left</span>
                        <div class="period-div"><span>yearly</span></div>

                        <div class="d-flex align-items-center justify-content-between">
                            <p class="dash-static green-color">{{ employees_left }}</p>
                            <!-- <div class="rect-arrow green-percentage">
                            <img src="/assets/safty_theme/images/green-arrow.png">
                            <span class="stat-percentage green-per">+9%</span>
                        </div> -->
                        </div>
                        <span class="title-card"> Employee</span>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3 order-0 mb-4">
                <div class="card" style="min-height: 120px;">
                    <div class="card-body">
                        <span class="title-card"> Total Applicant</span>
                        <div class="period-div"><span>monthly</span></div>

                        <div class="d-flex align-items-center justify-content-between">
                            <p class="dash-static green-color">{{ total_applicant }}</p>
                            <div class="rect-arrow green-percentage">
                                <img src="/assets/safty_theme/images/green-arrow.png">
                                <span class="stat-percentage green-per">+7</span>
                            </div>
                        </div>
                        <span class="title-card"> Employee</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <span class="head-title">Attendance</span>
        </div>
        <div class="row"><span class="dash-title">Total Number Employees is active = <span
                    class="bold-green">{{total_active_employee}}</span></span></div>
        <div class="row">

            <!-- ------- Tab -------- -->
            <div class="col col-lg-7 col-md-12 col-sm-12 custom-tabs">

                <div class="tabs">
                    <div class="tab">
                        <input type="radio" name="css-tabs" id="tab-1" checked class="tab-switch">
                        <label for="tab-1" class="tab-label">Active</label>
                        <div class="tab-content-dashboard">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>active</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>active</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>active</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>active</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>active</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>active</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>active</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>active</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>active</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>active</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>active</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab">
                        <input type="radio" name="css-tabs" id="tab-2" class="tab-switch">
                        <label for="tab-2" class="tab-label">Vacation</label>
                        <div class="tab-content-dashboard">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>vacation</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>vacation</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>vacation</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>vacation</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>vacation</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>vacation</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab">
                        <input type="radio" name="css-tabs" id="tab-3" class="tab-switch">
                        <label for="tab-3" class="tab-label">Inactive</label>
                        <div class="tab-content-dashboard">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>Inactive</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>Inactive</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>Inactive</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>Inactive</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>Inactive</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="index">1. </th>
                                        <td class="name-color">Ahmed ali</td>
                                        <td class="pos-color">Product Manger</td>
                                        <td>
                                            <div class="lable-button">
                                                <span>Inactive</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ------------ Apex chart ----------- -->
            <div class="col col-lg-5 col-md-12 col-sm-12 sales-chart">
                <div id="chart">
                    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
                </div>
            </div>

        </div>
    </div>

</div><!--workspace-skeleton-->`;

  // frappe-html:/home/ali/frappe-exp/apps/safty_theme/safty_theme/public/templates/list_sidebar.html
  frappe.templates["list_sidebar"] = `<div class="app-brand demo">
	<a href="index.html" class="app-brand-link">
		<span class="app-brand-logo demo">
			<svg width="25" viewBox="0 0 25 42" version="1.1" xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink">
				<defs>
					<path
						d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z"
						id="path-1"></path>
					<path
						d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z"
						id="path-3"></path>
					<path
						d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z"
						id="path-4"></path>
					<path
						d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z"
						id="path-5"></path>
				</defs>
				<g id="g-app-brand" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<g id="Brand-Logo" transform="translate(-27.000000, -15.000000)">
						<g id="Icon" transform="translate(27.000000, 15.000000)">
							<g id="Mask" transform="translate(0.000000, 8.000000)">
								<mask id="mask-2" fill="white">
									<use xlink:href="#path-1"></use>
								</mask>
								<use fill="#696cff" xlink:href="#path-1"></use>
								<g id="Path-3" mask="url(#mask-2)">
									<use fill="#696cff" xlink:href="#path-3"></use>
									<use fill-opacity="0.2" fill="#FFFFFF" xlink:href="#path-3"></use>
								</g>
								<g id="Path-4" mask="url(#mask-2)">
									<use fill="#696cff" xlink:href="#path-4"></use>
									<use fill-opacity="0.2" fill="#FFFFFF" xlink:href="#path-4"></use>
								</g>
							</g>
							<g id="Triangle"
								transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) ">
								<use fill="#696cff" xlink:href="#path-5"></use>
								<use fill-opacity="0.2" fill="#FFFFFF" xlink:href="#path-5"></use>
							</g>
						</g>
					</g>
				</g>
			</svg>
		</span>
		<span class="app-brand-text demo menu-text fw-bolder ms-2">Sneat</span>
	</a>

	<a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
		<i class="bx bx-chevron-left bx-sm align-middle"></i>
	</a>
</div>
<ul class="list-unstyled sidebar-menu user-actions hide">
	<li class="divider"></li>
</ul>
<ul class="list-unstyled sidebar-menu menu-inner py-1">

	<div class="sidebar-section filter-section">
		<li class="sidebar-label menu-header small text-uppercase">
			<span class="menu-header-text">
				{{ __("Filter By") }}
			</span>
		</li>

		<div class="list-group-by">
		</div>

		<div class="list-tags">
			<li class="list-stats list-link menu-item">
				<a class="btn btn-default btn-sm list-sidebar-button" data-toggle="dropdown" aria-haspopup="true"
					aria-expanded="false" href="#">
					<span>{{ __("Tags") }}</span>
					<span>
						<svg class="icon icon-xs">
							<use xlink:href="#icon-select"></use>
						</svg>
					</span>
				</a>
				<ul class="dropdown-menu list-stats-dropdown" role="menu">
					<div class="dropdown-search">
						<input type="text" placeholder= {{__("Search") }} data-element="search"
							class="form-control input-xs">
					</div>
					<div class="stat-result">
					</div>
				</ul>
			</li>
			<li class="sidebar-action show-tags menu-item">
				<a class="list-tag-preview menu-link">{{ __("Show Tags") }}</a>
			</li>
		</div>
	</div>

	<div class="sidebar-section save-filter-section">
		<li class="sidebar-label menu-header small text-uppercase">
			<span class="menu-header-text">
				{{ __("Save Filter") }}
			</span>
		</li>
		<li class="list-filters list-link menu-item"></li>
	</div>
</ul>`;

  // ../safty_theme/safty_theme/public/js/frappe/custom_workspace.js
  var import_editorjs = __toESM(require_editor());
  var import_editorjs_undo = __toESM(require_bundle());
  frappe.standard_pages["Workspaces"] = function() {
    var wrapper = frappe.container.add_page("Workspaces");
    frappe.ui.make_app_page({
      parent: wrapper,
      name: "Workspaces",
      title: __("Workspace")
    });
    frappe.workspace = new frappe.views.Workspace(wrapper);
    $(wrapper).bind("show", function() {
      frappe.workspace.show();
    });
  };
  frappe.views.Workspace.prototype.show = function() {
    if (!this.all_pages) {
      setTimeout(() => this.show(), 100);
      return;
    }
    this.in_customize_mode = false;
    let page = this.get_page_to_show();
    this.page.set_title(__(page.name));
    this.update_selected_sidebar(this.current_page, false);
    this.update_selected_sidebar(page, true);
    if (!frappe.router.current_route[0]) {
      frappe.router.current_route = !page.public ? ["Workspaces", "private", page.name] : ["Workspaces", page.name];
    }
    this.show_page(page);
  };
  frappe.views.Workspace.prototype.show_page = async function(page) {
    if (page.name == "Home") {
      this.remove_page_skeleton();
      $(this.wrapper).find("[data-page-route=Workspaces] .sidebar-toggle-btn").remove();
      let workspace_html = "workspace";
      let workspace_details = {
        "total_employee": 208,
        "total_new_join": 8,
        "employees_left": 5,
        "total_applicant": 25,
        "total_active_employee": 50
      };
      this.body.prepend(frappe.render_template(workspace_html, workspace_details));
      this.body.find(".codex-editor").addClass("hidden");
    } else {
      if (!this.body.find("#editorjs")[0]) {
        this.$page = $(`
                <div id="editorjs" class="desk-page page-main-content"></div>
            `).appendTo(this.body);
      }
      if (this.all_pages.length) {
        this.create_page_skeleton();
        let pages = page.public && this.public_pages.length ? this.public_pages : this.private_pages;
        let current_page = pages.filter((p) => p.title == page.name)[0];
        this.content = current_page && JSON.parse(current_page.content);
        this.content && this.add_custom_cards_in_content();
        $(".item-anchor").addClass("disable-click");
        if (this.pages && this.pages[current_page.name]) {
          this.page_data = this.pages[current_page.name];
        } else {
          await frappe.after_ajax(() => this.get_data(current_page));
        }
        this.setup_actions(page);
        this.prepare_editorjs();
        $(".item-anchor").removeClass("disable-click");
        this.remove_page_skeleton();
      }
    }
    var options = {
      plotOptions: {
        bar: {
          distributed: true,
          borderRadius: 10,
          columnWidth: "70%"
        }
      },
      chart: {
        type: "bar"
      },
      colors: ["#00665F", "#FD7B9A"],
      series: [{
        name: "sales",
        data: [9e4, 6e4, 55e3, 8e4, 69e3, 6e4, 7e4]
      }],
      legend: {
        show: false
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
        show: false
      },
      yaxis: {
        min: 4e4,
        max: 1e5,
        tickAmount: 6
      },
      dataLabels: {
        enabled: false
      }
    };
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  };

  // ../safty_theme/safty_theme/public/js/frappe/aside.js
  frappe.provide("frappe.ui.toolbar");
  frappe.provide("frappe.search");
  frappe.ui.toolbar.MosyrSidebar = class {
    constructor() {
      let sidebar_items = [];
      $("#mosyrsidebar").empty();
      $("#mosyrsidebar").html(frappe.render_template("sidebar"));
      this.make();
      this.bind_events();
    }
    make() {
    }
    bind_events() {
      $("#menu-button").click(function() {
        $("#mosyrsidebar").css("margin-left", "0");
        $(".close-icon").css("display", "block");
      });
      $(".close-icon").click(function() {
        $("#mosyrsidebar").css("margin-left", "-266px");
        $(".close-icon").css("display", "none");
      });
      $(".custom_btn_toggle").click(function() {
        $(".sidebar-item-label").toggleClass("hidden");
        $(".small-logo").toggleClass("hidden");
        $(".big-logo").toggleClass("hidden");
        $("#mosyrsidebar").toggleClass("sidebar-custome-width");
        $(".layout-page").toggleClass("layout-custome-width");
        $(".custom_btn_toggle").toggleClass("flip-icon");
        $(".nested-ddl-sidebar ").toggleClass("hidden");
        const current = frappe.get_route();
        if (current.length > 1) {
          if (current[0] !== "Workspaces" && current[1] !== "") {
            $(".layout-side-section").toggle();
          }
        }
      });
      $(window).on("load", function() {
        let xx = $(".form-sidebar.overlay-sidebar").is(":visible");
        if (!xx) {
          $(".layout-main .layout-side-section").css("display", "none");
        }
        if ($(".form-sidebar.overlay-sidebar").css("display", "none")) {
          $(".layout-main .layout-side-section").css("display", "none");
        }
      });
      $(document).on("page-change", function() {
        const current = frappe.get_route();
        if (current.length > 1) {
          if (current[0] !== "Workspaces" && current[1] !== "") {
            $(".sidebar-item-label").addClass("hidden");
            $("#mosyrsidebar").addClass("sidebar-custome-width");
            $(".layout-page").addClass("layout-custome-width");
            $(".nested-ddl-sidebar ").addClass("hidden");
            $(".small-logo").removeClass("hidden");
            $(".big-logo").addClass("hidden");
          } else {
            $(".sidebar-item-label").removeClass("hidden");
            $("#mosyrsidebar").removeClass("sidebar-custome-width");
            $(".layout-page").removeClass("layout-custome-width");
            $(".small-logo").addClass("hidden");
            $(".big-logo").removeClass("hidden");
            $(".nested-ddl-sidebar ").removeClass("hidden");
          }
        }
        if (current.length > 1) {
          if (current[0] !== "Form" && current[1] !== "") {
            $(".layout-main .layout-side-section").css("display", "none");
          } else {
            let xx = $(".form-sidebar.overlay-sidebar").is(":visible");
            if (!xx) {
              $(".layout-main .layout-side-section").css("display", "none");
            }
          }
        }
        const links = document.querySelectorAll(".sidebar-menu-link");
        for (let i = 0; i < links.length; i++) {
          const currentLink = links[i];
          if (window.location.href === currentLink.href) {
            $(".standard-sidebar-item").removeClass("selected");
            $(currentLink).children().addClass("selected");
            const $nextNestedDdl = $(currentLink).next(".nested-ddl-sidebar");
            if ($nextNestedDdl.length > 0) {
              $nextNestedDdl.css("color", "#fff");
            }
          }
        }
        const nestedlinks = document.querySelectorAll(".nested-menu-link");
        for (let i = 0; i < nestedlinks.length; i++) {
          const nestedcurrentLink = nestedlinks[i];
          if (window.location.href === nestedcurrentLink.href) {
            const $childItem = $(".nested-ddl-sidebar").siblings(".sidebar-child-item");
            $(".standard-sidebar-item").removeClass("selected");
            $(nestedcurrentLink).children().addClass("selected");
            let parent_cont = $(nestedcurrentLink).parent().parent().parent();
            let list = $(parent_cont).find(".sidebar-child-item");
            list.each(function(el) {
              $(list[el]).removeClass("hidden");
            });
            $(".sidebar-item-label").removeClass("hidden");
            $(".small-logo").addClass("hidden");
            $(".big-logo").removeClass("hidden");
            $("#mosyrsidebar").removeClass("sidebar-custome-width");
            $(".layout-page").removeClass("layout-custome-width");
            $(".nested-ddl-sidebar").removeClass("hidden");
          }
        }
      });
      $(".nested-ddl-sidebar").click(function(e) {
        var $childItem = $(this).siblings(".sidebar-child-item");
        $childItem.toggleClass("hidden");
      });
    }
  };
  frappe.Application.prototype.make_nav_bar = function() {
    if (frappe.boot && frappe.boot.home_page !== "setup-wizard") {
      frappe.frappe_toolbar = new frappe.ui.toolbar.Toolbar();
      frappe.frappe_mosyr_sidebar = new frappe.ui.toolbar.MosyrSidebar();
    }
    $(document).ready(function() {
      $(".standard-sidebar-item").click(function() {
        var $nestedDdlSidebar = $(this).next(".nested-ddl-sidebar");
        if ($nestedDdlSidebar.length > 0) {
          $(".nested-ddl-sidebar").css({
            "background-color": "",
            "color": ""
          });
          $nestedDdlSidebar.css({
            "color": "#ffffff"
          });
        }
        $(".standard-sidebar-item").removeClass("selected");
        $(this).addClass("selected");
      });
      $(document).click(function(event) {
        if (!$(event.target).closest(".standard-sidebar-item").length) {
          $(".nested-ddl-sidebar").css({
            "background-color": "",
            "color": ""
          });
          $(".standard-sidebar-item").removeClass("selected");
        }
      });
    });
  };

  // ../safty_theme/safty_theme/public/js/js_custom.js
  frappe.views.Workspace.prototype.make_blocks_sortable = function() {
    let me = this;
    this.page_sortable = Sortable.create(
      this.page.main.find(".codex-editor__redactor").get(0),
      {
        handle: ".drag-handle",
        draggable: ".ce-block",
        animation: 150,
        onEnd: function(evt) {
          me.editor.blocks.move(evt.newIndex, evt.oldIndex);
        },
        setData: function() {
        }
      }
    );
  };
  frappe.views.ListView.prototype.get_no_result_message = function() {
    let help_link = this.get_documentation_link();
    let filters = this.filter_area && this.filter_area.get();
    let has_filters_set = filters && filters.length;
    let no_result_message = has_filters_set ? __("No {0} found with matching filters. Clear filters to see all {0}.", [
      __(this.doctype)
    ]) : __("You haven't created a {0} yet", [__(this.doctype)]);
    let new_button_label = has_filters_set ? __("Create a new {0}", [__(this.doctype)], "Create a new document from list view") : __(
      "Create your first {0}",
      [__(this.doctype)],
      "Create a new document from list view"
    );
    let empty_state_image = this.settings.empty_state_image || "/assets/fairvalue_theme/images/empty_state.png";
    const new_button = this.can_create ? `<p><button class="btn btn-primary btn-sm btn-new-doc hidden-xs">
				${new_button_label}
			</button> <button class="btn btn-primary btn-new-doc visible-xs">
				${__("Create New", null, "Create a new document from list view")}
			</button></p>` : "";
    return `<div class="msg-box no-border">
			<div>
				<img src="${empty_state_image}" alt="Generic Empty State" class="null-state">
			</div>
			<p>${no_result_message}</p>
			${new_button}
			${help_link}
		</div>`;
  };
})();
/*! For license information please see editor.js.LICENSE.txt */
//# sourceMappingURL=custom_desk.bundle.24XQXCRY.js.map
