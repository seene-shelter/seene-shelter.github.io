/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.10 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */

/**
 * @license
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modern -o ./dist/lodash.js`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * @license AngularJS v1.2.4
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */

/**
 * State-based routing for AngularJS
 * @version v0.2.13
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

/**
 * @license AngularJS v1.2.7
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */

/**
 * angular-translate - v1.1.1 - 2013-11-24
 * http://github.com/PascalPrecht/angular-translate
 * Copyright (c) 2013 ; Licensed 
 */

//! moment.js
//! version : 2.4.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

/*!
 * inflection
 * Copyright(c) 2011 Ben Lin <ben@dreamerslab.com>
 * MIT Licensed
 *
 * @fileoverview
 * A port of inflection-js to node.js module.
 */

/*!
 * Modernizr v2.6.2
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */

/*! HTML5 Shiv v3.6.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed */

/**
 * messageformat.js
 *
 * ICU PluralFormat + SelectFormat for JavaScript
 *
 * @author Alex Sexton - @SlexAxton
 * @version 0.1.5
 * @license WTFPL
 * @contributor_license Dojo CLA
 */

var requirejs, require, define;
(function(global) {
    function isFunction(e) {
        return ostring.call(e) === "[object Function]"
    }

    function isArray(e) {
        return ostring.call(e) === "[object Array]"
    }

    function each(e, t) {
        if (e) {
            var n;
            for (n = 0; n < e.length; n += 1)
                if (e[n] && t(e[n], n, e)) break
        }
    }

    function eachReverse(e, t) {
        if (e) {
            var n;
            for (n = e.length - 1; n > -1; n -= 1)
                if (e[n] && t(e[n], n, e)) break
        }
    }

    function hasProp(e, t) {
        return hasOwn.call(e, t)
    }

    function getOwn(e, t) {
        return hasProp(e, t) && e[t]
    }

    function eachProp(e, t) {
        var n;
        for (n in e)
            if (hasProp(e, n) && t(e[n], n)) break
    }

    function mixin(e, t, n, r) {
        return t && eachProp(t, function(t, i) {
            if (n || !hasProp(e, i)) r && typeof t == "object" && t && !isArray(t) && !isFunction(t) && !(t instanceof RegExp) ? (e[i] || (e[i] = {}), mixin(e[i], t, n, r)) : e[i] = t
        }), e
    }

    function bind(e, t) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function scripts() {
        return document.getElementsByTagName("script")
    }

    function defaultOnError(e) {
        throw e
    }

    function getGlobal(e) {
        if (!e) return e;
        var t = global;
        return each(e.split("."), function(e) {
            t = t[e]
        }), t
    }

    function makeError(e, t, n, r) {
        var i = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
        return i.requireType = e, i.requireModules = r, n && (i.originalError = n), i
    }

    function newContext(e) {
        function m(e) {
            var t, n, r = e.length;
            for (t = 0; t < r; t++) {
                n = e[t];
                if (n === ".") e.splice(t, 1), t -= 1;
                else if (n === "..") {
                    if (t === 1 && (e[2] === ".." || e[0] === "..")) break;
                    t > 0 && (e.splice(t - 1, 2), t -= 2)
                }
            }
        }

        function g(e, t, n) {
            var r, i, s, u, a, f, l, c, h, p, d, v = t && t.split("/"),
                g = v,
                y = o.map,
                b = y && y["*"];
            e && e.charAt(0) === "." && (t ? (g = v.slice(0, v.length - 1), e = e.split("/"), l = e.length - 1, o.nodeIdCompat && jsSuffixRegExp.test(e[l]) && (e[l] = e[l].replace(jsSuffixRegExp, "")), e = g.concat(e), m(e), e = e.join("/")) : e.indexOf("./") === 0 && (e = e.substring(2)));
            if (n && y && (v || b)) {
                s = e.split("/");
                e: for (u = s.length; u > 0; u -= 1) {
                    f = s.slice(0, u).join("/");
                    if (v)
                        for (a = v.length; a > 0; a -= 1) {
                            i = getOwn(y, v.slice(0, a).join("/"));
                            if (i) {
                                i = getOwn(i, f);
                                if (i) {
                                    c = i, h = u;
                                    break e
                                }
                            }
                        }!p && b && getOwn(b, f) && (p = getOwn(b, f), d = u)
                }!c && p && (c = p, h = d), c && (s.splice(0, h, c), e = s.join("/"))
            }
            return r = getOwn(o.pkgs, e), r ? r : e
        }

        function y(e) {
            isBrowser && each(scripts(), function(t) {
                if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === r.contextName) return t.parentNode.removeChild(t), !0
            })
        }

        function b(e) {
            var t = getOwn(o.paths, e);
            if (t && isArray(t) && t.length > 1) return t.shift(), r.require.undef(e), r.require([e]), !0
        }

        function w(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function E(e, t, n, i) {
            var s, o, u, a, f = null,
                l = t ? t.name : null,
                h = e,
                p = !0,
                m = "";
            return e || (p = !1, e = "_@r" + (d += 1)), a = w(e), f = a[0], e = a[1], f && (f = g(f, l, i), o = getOwn(c, f)), e && (f ? o && o.normalize ? m = o.normalize(e, function(e) {
                return g(e, l, i)
            }) : m = g(e, l, i) : (m = g(e, l, i), a = w(m), f = a[0], m = a[1], n = !0, s = r.nameToUrl(m))), u = f && !o && !n ? "_unnormalized" + (v += 1) : "", {
                prefix: f,
                name: m,
                parentMap: t,
                unnormalized: !!u,
                url: s,
                originalName: h,
                isDefine: p,
                id: (f ? f + "!" + m : m) + u
            }
        }

        function S(e) {
            var t = e.id,
                n = getOwn(u, t);
            return n || (n = u[t] = new r.Module(e)), n
        }

        function x(e, t, n) {
            var r = e.id,
                i = getOwn(u, r);
            hasProp(c, r) && (!i || i.defineEmitComplete) ? t === "defined" && n(c[r]) : (i = S(e), i.error && t === "error" ? n(i.error) : i.on(t, n))
        }

        function T(e, t) {
            var n = e.requireModules,
                r = !1;
            t ? t(e) : (each(n, function(t) {
                var n = getOwn(u, t);
                n && (n.error = e, n.events.error && (r = !0, n.emit("error", e)))
            }), r || req.onError(e))
        }

        function N() {
            globalDefQueue.length && (apsp.apply(l, [l.length, 0].concat(globalDefQueue)), globalDefQueue = [])
        }

        function C(e) {
            delete u[e], delete a[e]
        }

        function k(e, t, n) {
            var r = e.map.id;
            e.error ? e.emit("error", e.error) : (t[r] = !0, each(e.depMaps, function(r, i) {
                var s = r.id,
                    o = getOwn(u, s);
                o && !e.depMatched[i] && !n[s] && (getOwn(t, s) ? (e.defineDep(i, c[s]), e.check()) : k(o, t, n))
            }), n[r] = !0)
        }

        function L() {
            var e, n, i = o.waitSeconds * 1e3,
                u = i && r.startTime + i < (new Date).getTime(),
                f = [],
                l = [],
                c = !1,
                h = !0;
            if (t) return;
            t = !0, eachProp(a, function(e) {
                var t = e.map,
                    r = t.id;
                if (!e.enabled) return;
                t.isDefine || l.push(e);
                if (!e.error)
                    if (!e.inited && u) b(r) ? (n = !0, c = !0) : (f.push(r), y(r));
                    else if (!e.inited && e.fetched && t.isDefine) {
                    c = !0;
                    if (!t.prefix) return h = !1
                }
            });
            if (u && f.length) return e = makeError("timeout", "Load timeout for modules: " + f, null, f), e.contextName = r.contextName, T(e);
            h && each(l, function(e) {
                k(e, {}, {})
            }), (!u || n) && c && (isBrowser || isWebWorker) && !s && (s = setTimeout(function() {
                s = 0, L()
            }, 50)), t = !1
        }

        function A(e) {
            hasProp(c, e[0]) || S(E(e[0], null, !0)).init(e[1], e[2])
        }

        function O(e, t, n, r) {
            e.detachEvent && !isOpera ? r && e.detachEvent(r, t) : e.removeEventListener(n, t, !1)
        }

        function M(e) {
            var t = e.currentTarget || e.srcElement;
            return O(t, r.onScriptLoad, "load", "onreadystatechange"), O(t, r.onScriptError, "error"), {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            }
        }

        function _() {
            var e;
            N();
            while (l.length) {
                e = l.shift();
                if (e[0] === null) return T(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                A(e)
            }
        }
        var t, n, r, i, s, o = {
                waitSeconds: 7,
                baseUrl: "./",
                paths: {},
                bundles: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            u = {},
            a = {},
            f = {},
            l = [],
            c = {},
            h = {},
            p = {},
            d = 1,
            v = 1;
        return i = {
            require: function(e) {
                return e.require ? e.require : e.require = r.makeRequire(e.map)
            },
            exports: function(e) {
                e.usingExports = !0;
                if (e.map.isDefine) return e.exports ? e.exports : e.exports = c[e.map.id] = {}
            },
            module: function(e) {
                return e.module ? e.module : e.module = {
                    id: e.map.id,
                    uri: e.map.url,
                    config: function() {
                        return getOwn(o.config, e.map.id) || {}
                    },
                    exports: i.exports(e)
                }
            }
        }, n = function(e) {
            this.events = getOwn(f, e.id) || {}, this.map = e, this.shim = getOwn(o.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, n.prototype = {
            init: function(e, t, n, r) {
                r = r || {};
                if (this.inited) return;
                this.factory = t, n ? this.on("error", n) : this.events.error && (n = bind(this, function(e) {
                    this.emit("error", e)
                })), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = r.ignore, r.enabled || this.enabled ? this.enable() : this.check()
            },
            defineDep: function(e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            },
            fetch: function() {
                if (this.fetched) return;
                this.fetched = !0, r.startTime = (new Date).getTime();
                var e = this.map;
                if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
                r.makeRequire(this.map, {
                    enableBuildCallback: !0
                })(this.shim.deps || [], bind(this, function() {
                    return e.prefix ? this.callPlugin() : this.load()
                }))
            },
            load: function() {
                var e = this.map.url;
                h[e] || (h[e] = !0, r.load(this.map.id, e))
            },
            check: function() {
                if (!this.enabled || this.enabling) return;
                var e, t, n = this.map.id,
                    i = this.depExports,
                    s = this.exports,
                    o = this.factory;
                if (!this.inited) this.fetch();
                else if (this.error) this.emit("error", this.error);
                else if (!this.defining) {
                    this.defining = !0;
                    if (this.depCount < 1 && !this.defined) {
                        if (isFunction(o)) {
                            if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
                                s = r.execCb(n, o, i, s)
                            } catch (u) {
                                e = u
                            } else s = r.execCb(n, o, i, s);
                            this.map.isDefine && s === undefined && (t = this.module, t ? s = t.exports : this.usingExports && (s = this.exports));
                            if (e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", T(this.error = e)
                        } else s = o;
                        this.exports = s, this.map.isDefine && !this.ignore && (c[n] = s, req.onResourceLoad && req.onResourceLoad(r, this.map, this.depMaps)), C(n), this.defined = !0
                    }
                    this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                }
            },
            callPlugin: function() {
                var e = this.map,
                    t = e.id,
                    n = E(e.prefix);
                this.depMaps.push(n), x(n, "defined", bind(this, function(n) {
                    var i, s, a, f = getOwn(p, this.map.id),
                        l = this.map.name,
                        c = this.map.parentMap ? this.map.parentMap.name : null,
                        h = r.makeRequire(e.parentMap, {
                            enableBuildCallback: !0
                        });
                    if (this.map.unnormalized) {
                        n.normalize && (l = n.normalize(l, function(e) {
                            return g(e, c, !0)
                        }) || ""), s = E(e.prefix + "!" + l, this.map.parentMap), x(s, "defined", bind(this, function(e) {
                            this.init([], function() {
                                return e
                            }, null, {
                                enabled: !0,
                                ignore: !0
                            })
                        })), a = getOwn(u, s.id), a && (this.depMaps.push(s), this.events.error && a.on("error", bind(this, function(e) {
                            this.emit("error", e)
                        })), a.enable());
                        return
                    }
                    if (f) {
                        this.map.url = r.nameToUrl(f), this.load();
                        return
                    }
                    i = bind(this, function(e) {
                        this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0
                        })
                    }), i.error = bind(this, function(e) {
                        this.inited = !0, this.error = e, e.requireModules = [t], eachProp(u, function(e) {
                            e.map.id.indexOf(t + "_unnormalized") === 0 && C(e.map.id)
                        }), T(e)
                    }), i.fromText = bind(this, function(n, s) {
                        var u = e.name,
                            a = E(u),
                            f = useInteractive;
                        s && (n = s), f && (useInteractive = !1), S(a), hasProp(o.config, t) && (o.config[u] = o.config[t]);
                        try {
                            req.exec(n)
                        } catch (l) {
                            return T(makeError("fromtexteval", "fromText eval for " + t + " failed: " + l, l, [t]))
                        }
                        f && (useInteractive = !0), this.depMaps.push(a), r.completeLoad(u), h([u], i)
                    }), n.load(e.name, h, i, o)
                })), r.enable(n, this), this.pluginMaps[n.id] = n
            },
            enable: function() {
                a[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(e, t) {
                    var n, s, o;
                    if (typeof e == "string") {
                        e = E(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, o = getOwn(i, e.id);
                        if (o) {
                            this.depExports[t] = o(this);
                            return
                        }
                        this.depCount += 1, x(e, "defined", bind(this, function(e) {
                            this.defineDep(t, e), this.check()
                        })), this.errback && x(e, "error", bind(this, this.errback))
                    }
                    n = e.id, s = u[n], !hasProp(i, n) && s && !s.enabled && r.enable(e, this)
                })), eachProp(this.pluginMaps, bind(this, function(e) {
                    var t = getOwn(u, e.id);
                    t && !t.enabled && r.enable(e, this)
                })), this.enabling = !1, this.check()
            },
            on: function(e, t) {
                var n = this.events[e];
                n || (n = this.events[e] = []), n.push(t)
            },
            emit: function(e, t) {
                each(this.events[e], function(e) {
                    e(t)
                }), e === "error" && delete this.events[e]
            }
        }, r = {
            config: o,
            contextName: e,
            registry: u,
            defined: c,
            urlFetched: h,
            defQueue: l,
            Module: n,
            makeModuleMap: E,
            nextTick: req.nextTick,
            onError: T,
            configure: function(e) {
                e.baseUrl && e.baseUrl.charAt(e.baseUrl.length - 1) !== "/" && (e.baseUrl += "/");
                var t = o.shim,
                    n = {
                        paths: !0,
                        bundles: !0,
                        config: !0,
                        map: !0
                    };
                eachProp(e, function(e, t) {
                    n[t] ? (o[t] || (o[t] = {}), mixin(o[t], e, !0, !0)) : o[t] = e
                }), e.bundles && eachProp(e.bundles, function(e, t) {
                    each(e, function(e) {
                        e !== t && (p[e] = t)
                    })
                }), e.shim && (eachProp(e.shim, function(e, n) {
                    isArray(e) && (e = {
                        deps: e
                    }), (e.exports || e.init) && !e.exportsFn && (e.exportsFn = r.makeShimExports(e)), t[n] = e
                }), o.shim = t), e.packages && each(e.packages, function(e) {
                    var t, n;
                    e = typeof e == "string" ? {
                        name: e
                    } : e, n = e.name, t = e.location, t && (o.paths[n] = e.location), o.pkgs[n] = e.name + "/" + (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                }), eachProp(u, function(e, t) {
                    !e.inited && !e.map.unnormalized && (e.map = E(t))
                }), (e.deps || e.callback) && r.require(e.deps || [], e.callback)
            },
            makeShimExports: function(e) {
                function t() {
                    var t;
                    return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
                }
                return t
            },
            makeRequire: function(t, n) {
                function s(o, a, f) {
                    var l, h, p;
                    return n.enableBuildCallback && a && isFunction(a) && (a.__requireJsBuild = !0), typeof o == "string" ? isFunction(a) ? T(makeError("requireargs", "Invalid require call"), f) : t && hasProp(i, o) ? i[o](u[t.id]) : req.get ? req.get(r, o, t, s) : (h = E(o, t, !1, !0), l = h.id, hasProp(c, l) ? c[l] : T(makeError("notloaded", 'Module name "' + l + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (_(), r.nextTick(function() {
                        _(), p = S(E(null, t)), p.skipMap = n.skipMap, p.init(o, a, f, {
                            enabled: !0
                        }), L()
                    }), s)
                }
                return n = n || {}, mixin(s, {
                    isBrowser: isBrowser,
                    toUrl: function(e) {
                        var n, i = e.lastIndexOf("."),
                            s = e.split("/")[0],
                            o = s === "." || s === "..";
                        return i !== -1 && (!o || i > 1) && (n = e.substring(i, e.length), e = e.substring(0, i)), r.nameToUrl(g(e, t && t.id, !0), n, !0)
                    },
                    defined: function(e) {
                        return hasProp(c, E(e, t, !1, !0).id)
                    },
                    specified: function(e) {
                        return e = E(e, t, !1, !0).id, hasProp(c, e) || hasProp(u, e)
                    }
                }), t || (s.undef = function(e) {
                    N();
                    var n = E(e, t, !0),
                        r = getOwn(u, e);
                    y(e), delete c[e], delete h[n.url], delete f[e], eachReverse(l, function(t, n) {
                        t[0] === e && l.splice(n, 1)
                    }), r && (r.events.defined && (f[e] = r.events), C(e))
                }), s
            },
            enable: function(e) {
                var t = getOwn(u, e.id);
                t && S(e).enable()
            },
            completeLoad: function(e) {
                var t, n, r, i = getOwn(o.shim, e) || {},
                    s = i.exports;
                N();
                while (l.length) {
                    n = l.shift();
                    if (n[0] === null) {
                        n[0] = e;
                        if (t) break;
                        t = !0
                    } else n[0] === e && (t = !0);
                    A(n)
                }
                r = getOwn(u, e);
                if (!t && !hasProp(c, e) && r && !r.inited) {
                    if (o.enforceDefine && (!s || !getGlobal(s))) {
                        if (b(e)) return;
                        return T(makeError("nodefine", "No define call for " + e, null, [e]))
                    }
                    A([e, i.deps || [], i.exportsFn])
                }
                L()
            },
            nameToUrl: function(e, t, n) {
                var i, s, u, a, f, l, c, h = getOwn(o.pkgs, e);
                h && (e = h), c = getOwn(p, e);
                if (c) return r.nameToUrl(c, t, n);
                if (req.jsExtRegExp.test(e)) f = e + (t || "");
                else {
                    i = o.paths, s = e.split("/");
                    for (u = s.length; u > 0; u -= 1) {
                        a = s.slice(0, u).join("/"), l = getOwn(i, a);
                        if (l) {
                            isArray(l) && (l = l[0]), s.splice(0, u, l);
                            break
                        }
                    }
                    f = s.join("/"), f += t || (/^data\:|\?/.test(f) || n ? "" : ".js"), f = (f.charAt(0) === "/" || f.match(/^[\w\+\.\-]+:/) ? "" : o.baseUrl) + f
                }
                return o.urlArgs ? f + ((f.indexOf("?") === -1 ? "?" : "&") + o.urlArgs) : f
            },
            load: function(e, t) {
                req.load(r, e, t)
            },
            execCb: function(e, t, n, r) {
                return t.apply(r, n)
            },
            onScriptLoad: function(e) {
                if (e.type === "load" || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                    interactiveScript = null;
                    var t = M(e);
                    r.completeLoad(t.id)
                }
            },
            onScriptError: function(e) {
                var t = M(e);
                if (!b(t.id)) return T(makeError("scripterror", "Script error for: " + t.id, e, [t.id]))
            }
        }, r.require = r.makeRequire(), r
    }

    function getInteractiveScript() {
        return interactiveScript && interactiveScript.readyState === "interactive" ? interactiveScript : (eachReverse(scripts(), function(e) {
            if (e.readyState === "interactive") return interactiveScript = e
        }), interactiveScript)
    }
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.10",
        commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        ap = Array.prototype,
        apsp = ap.splice,
        isBrowser = typeof window != "undefined" && typeof navigator != "undefined" && !!window.document,
        isWebWorker = !isBrowser && typeof importScripts != "undefined",
        readyRegExp = isBrowser && navigator.platform === "PLAYSTATION 3" ? /^complete$/ : /^(complete|loaded)$/,
        defContextName = "_",
        isOpera = typeof opera != "undefined" && opera.toString() === "[object Opera]",
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = !1;
    if (typeof define != "undefined") return;
    if (typeof requirejs != "undefined") {
        if (isFunction(requirejs)) return;
        cfg = requirejs, requirejs = undefined
    }
    typeof require != "undefined" && !isFunction(require) && (cfg = require, require = undefined), req = requirejs = function(e, t, n, r) {
        var i, s, o = defContextName;
        return !isArray(e) && typeof e != "string" && (s = e, isArray(t) ? (e = t, t = n, n = r) : e = []), s && s.context && (o = s.context), i = getOwn(contexts, o), i || (i = contexts[o] = req.s.newContext(o)), s && i.configure(s), i.require(e, t, n)
    }, req.config = function(e) {
        return req(e)
    }, req.nextTick = typeof setTimeout != "undefined" ? function(e) {
        setTimeout(e, 4)
    } : function(e) {
        e()
    }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
        contexts: contexts,
        newContext: newContext
    }, req({}), each(["toUrl", "undef", "defined", "specified"], function(e) {
        req[e] = function() {
            var t = contexts[defContextName];
            return t.require[e].apply(t, arguments)
        }
    }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function(e, t, n) {
        var r = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
        return r.type = e.scriptType || "text/javascript", r.charset = "utf-8", r.async = !0, r
    }, req.load = function(e, t, n) {
        var r = e && e.config || {},
            i;
        if (isBrowser) return i = req.createNode(r, t, n), i.setAttribute("data-requirecontext", e.contextName), i.setAttribute("data-requiremodule", t), i.attachEvent && !(i.attachEvent.toString && i.attachEvent.toString().indexOf("[native code") < 0) && !isOpera ? (useInteractive = !0, i.attachEvent("onreadystatechange", e.onScriptLoad)) : (i.addEventListener("load", e.onScriptLoad, !1), i.addEventListener("error", e.onScriptError, !1)), i.src = n, currentlyAddingScript = i, baseElement ? head.insertBefore(i, baseElement) : head.appendChild(i), currentlyAddingScript = null, i;
        if (isWebWorker) try {
            importScripts(n), e.completeLoad(t)
        } catch (s) {
            e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + n, s, [t]))
        }
    }, isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function(e) {
        head || (head = e.parentNode), dataMain = e.getAttribute("data-main");
        if (dataMain) return mainScript = dataMain, cfg.baseUrl || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0
    }), define = function(e, t, n) {
        var r, i;
        typeof e != "string" && (n = t, t = e, e = null), isArray(t) || (n = t, t = null), !t && isFunction(n) && (t = [], n.length && (n.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function(e, n) {
            t.push(n)
        }), t = (n.length === 1 ? ["require"] : ["require", "exports", "module"]).concat(t))), useInteractive && (r = currentlyAddingScript || getInteractiveScript(), r && (e || (e = r.getAttribute("data-requiremodule")), i = contexts[r.getAttribute("data-requirecontext")])), (i ? i.defQueue : globalDefQueue).push([e, t, n])
    }, define.amd = {
        jQuery: !0
    }, req.exec = function(text) {
        return eval(text)
    }, req(cfg)
})(this), define("requireLib", function() {}), define("angular", [], function() {
        "use strict";
        return window.angular || {}
    }),
    function() {
        function q(e, t, n) {
            var r = (n || 0) - 1,
                i = e ? e.length : 0;
            while (++r < i)
                if (e[r] === t) return r;
            return -1
        }

        function R(e, t) {
            var n = typeof t;
            e = e.cache;
            if (n == "boolean" || t == null) return e[t] ? 0 : -1;
            n != "number" && n != "string" && (n = "object");
            var r = n == "number" ? t : i + t;
            return e = (e = e[n]) && e[r], n == "object" ? e && q(e, t) > -1 ? 0 : -1 : e ? 0 : -1
        }

        function U(e) {
            var t = this.cache,
                n = typeof e;
            if (n == "boolean" || e == null) t[e] = !0;
            else {
                n != "number" && n != "string" && (n = "object");
                var r = n == "number" ? e : i + e,
                    s = t[n] || (t[n] = {});
                n == "object" ? (s[r] || (s[r] = [])).push(e) : s[r] = !0
            }
        }

        function z(e) {
            return e.charCodeAt(0)
        }

        function W(e, t) {
            var n = e.criteria,
                r = t.criteria,
                i = -1,
                s = n.length;
            while (++i < s) {
                var o = n[i],
                    u = r[i];
                if (o !== u) {
                    if (o > u || typeof o == "undefined") return 1;
                    if (o < u || typeof u == "undefined") return -1
                }
            }
            return e.index - t.index
        }

        function X(e) {
            var t = -1,
                n = e.length,
                r = e[0],
                i = e[n / 2 | 0],
                s = e[n - 1];
            if (r && typeof r == "object" && i && typeof i == "object" && s && typeof s == "object") return !1;
            var o = J();
            o["false"] = o["null"] = o["true"] = o["undefined"] = !1;
            var u = J();
            u.array = e, u.cache = o, u.push = U;
            while (++t < n) u.push(e[t]);
            return u
        }

        function V(e) {
            return "\\" + P[e]
        }

        function $() {
            return t.pop() || []
        }

        function J() {
            return n.pop() || {
                array: null,
                cache: null,
                criteria: null,
                "false": !1,
                index: 0,
                "null": !1,
                number: null,
                object: null,
                push: null,
                string: null,
                "true": !1,
                "undefined": !1,
                value: null
            }
        }

        function K(e) {
            e.length = 0, t.length < o && t.push(e)
        }

        function Q(e) {
            var t = e.cache;
            t && Q(t), e.array = e.cache = e.criteria = e.object = e.number = e.string = e.value = null, n.length < o && n.push(e)
        }

        function G(e, t, n) {
            t || (t = 0), typeof n == "undefined" && (n = e ? e.length : 0);
            var r = -1,
                i = n - t || 0,
                s = Array(i < 0 ? 0 : i);
            while (++r < i) s[r] = e[t + r];
            return s
        }

        function Y(t) {
            function Lt(e) {
                return e && typeof e == "object" && !Gt(e) && ht.call(e, "__wrapped__") ? e : new At(e)
            }

            function At(e, t) {
                this.__chain__ = !!t, this.__wrapped__ = e
            }

            function Mt(e) {
                function i() {
                    if (n) {
                        var e = G(n);
                        pt.apply(e, arguments)
                    }
                    if (this instanceof i) {
                        var s = Dt(t.prototype),
                            o = t.apply(s, e || arguments);
                        return Cn(o) ? o : s
                    }
                    return t.apply(r, e || arguments)
                }
                var t = e[0],
                    n = e[2],
                    r = e[4];
                return $t(i, e), i
            }

            function _t(e, t, n, r, i) {
                if (n) {
                    var s = n(e);
                    if (typeof s != "undefined") return s
                }
                var o = Cn(e);
                if (!o) return e;
                var u = st.call(e);
                if (!O[u]) return e;
                var a = kt[u];
                switch (u) {
                    case x:
                    case T:
                        return new a(+e);
                    case C:
                    case A:
                        return new a(e);
                    case L:
                        return s = a(e.source, h.exec(e)), s.lastIndex = e.lastIndex, s
                }
                var f = Gt(e);
                if (t) {
                    var l = !r;
                    r || (r = $()), i || (i = $());
                    var c = r.length;
                    while (c--)
                        if (r[c] == e) return i[c];
                    s = f ? a(e.length) : {}
                } else s = f ? G(e) : sn({}, e);
                return f && (ht.call(e, "index") && (s.index = e.index), ht.call(e, "input") && (s.input = e.input)), t ? (r.push(e), i.push(s), (f ? Jn : dn)(e, function(e, o) {
                    s[o] = _t(e, t, n, r, i)
                }), l && (K(r), K(i)), s) : s
            }

            function Dt(e, t) {
                return Cn(e) ? yt(e) : {}
            }

            function Pt(e, t, n) {
                if (typeof e != "function") return Zr;
                if (typeof t != "undefined" && "prototype" in e) {
                    var r = e.__bindData__;
                    if (typeof r == "undefined") {
                        Ot.funcNames && (r = !e.name), r = r || !Ot.funcDecomp;
                        if (!r) {
                            var i = lt.call(e);
                            Ot.funcNames || (r = !p.test(i)), r || (r = g.test(i), $t(e, r))
                        }
                    }
                    if (r === !1 || r !== !0 && r[1] & 1) return e;
                    switch (n) {
                        case 1:
                            return function(n) {
                                return e.call(t, n)
                            };
                        case 2:
                            return function(n, r) {
                                return e.call(t, n, r)
                            };
                        case 3:
                            return function(n, r, i) {
                                return e.call(t, n, r, i)
                            };
                        case 4:
                            return function(n, r, i, s) {
                                return e.call(t, n, r, i, s)
                            }
                    }
                    return Br(e, t)
                }
                return e
            }

            function Ht(e) {
                function h() {
                    var e = u ? s : this;
                    if (r) {
                        var p = G(r);
                        pt.apply(p, arguments)
                    }
                    if (i || f) {
                        p || (p = G(arguments)), i && pt.apply(p, i);
                        if (f && p.length < o) return n |= 16, Ht([t, l ? n : n & -4, p, null, s, o])
                    }
                    p || (p = arguments), a && (t = e[c]);
                    if (this instanceof h) {
                        e = Dt(t.prototype);
                        var d = t.apply(e, p);
                        return Cn(d) ? d : e
                    }
                    return t.apply(e, p)
                }
                var t = e[0],
                    n = e[1],
                    r = e[2],
                    i = e[3],
                    s = e[4],
                    o = e[5],
                    u = n & 1,
                    a = n & 2,
                    f = n & 4,
                    l = n & 8,
                    c = t;
                return $t(h, e), h
            }

            function Bt(e, t) {
                var n = -1,
                    r = Xt(),
                    i = e ? e.length : 0,
                    o = i >= s && r === q,
                    u = [];
                if (o) {
                    var a = X(t);
                    a ? (r = R, t = a) : o = !1
                }
                while (++n < i) {
                    var f = e[n];
                    r(t, f) < 0 && u.push(f)
                }
                return o && Q(t), u
            }

            function jt(e, t, n, r) {
                var i = (r || 0) - 1,
                    s = e ? e.length : 0,
                    o = [];
                while (++i < s) {
                    var u = e[i];
                    if (u && typeof u == "object" && typeof u.length == "number" && (Gt(u) || Qt(u))) {
                        t || (u = jt(u, t, n));
                        var a = -1,
                            f = u.length,
                            l = o.length;
                        o.length += f;
                        while (++a < f) o[l++] = u[a]
                    } else n || o.push(u)
                }
                return o
            }

            function Ft(e, t, n, r, i, s) {
                if (n) {
                    var o = n(e, t);
                    if (typeof o != "undefined") return !!o
                }
                if (e === t) return e !== 0 || 1 / e == 1 / t;
                var u = typeof e,
                    a = typeof t;
                if (e === e && (!e || !D[u]) && (!t || !D[a])) return !1;
                if (e == null || t == null) return e === t;
                var f = st.call(e),
                    l = st.call(t);
                f == E && (f = k), l == E && (l = k);
                if (f != l) return !1;
                switch (f) {
                    case x:
                    case T:
                        return +e == +t;
                    case C:
                        return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
                    case L:
                    case A:
                        return e == et(t)
                }
                var c = f == S;
                if (!c) {
                    var h = ht.call(e, "__wrapped__"),
                        p = ht.call(t, "__wrapped__");
                    if (h || p) return Ft(h ? e.__wrapped__ : e, p ? t.__wrapped__ : t, n, r, i, s);
                    if (f != k) return !1;
                    var d = e.constructor,
                        v = t.constructor;
                    if (d != v && !(Nn(d) && d instanceof d && Nn(v) && v instanceof v) && "constructor" in e && "constructor" in t) return !1
                }
                var m = !i;
                i || (i = $()), s || (s = $());
                var g = i.length;
                while (g--)
                    if (i[g] == e) return s[g] == t;
                var y = 0;
                o = !0, i.push(e), s.push(t);
                if (c) {
                    g = e.length, y = t.length, o = y == g;
                    if (o || r)
                        while (y--) {
                            var b = g,
                                w = t[y];
                            if (r) {
                                while (b--)
                                    if (o = Ft(e[b], w, n, r, i, s)) break
                            } else if (!(o = Ft(e[y], w, n, r, i, s))) break
                        }
                } else hn(t, function(t, u, a) {
                    if (ht.call(a, u)) return y++, o = ht.call(e, u) && Ft(e[u], t, n, r, i, s)
                }), o && !r && hn(e, function(e, t, n) {
                    if (ht.call(n, t)) return o = --y > -1
                });
                return i.pop(), s.pop(), m && (K(i), K(s)), o
            }

            function It(e, t, n, r, i) {
                (Gt(t) ? Jn : dn)(t, function(t, s) {
                    var o, u, a = t,
                        f = e[s];
                    if (t && ((u = Gt(t)) || On(t))) {
                        var l = r.length;
                        while (l--)
                            if (o = r[l] == t) {
                                f = i[l];
                                break
                            }
                        if (!o) {
                            var c;
                            if (n) {
                                a = n(f, t);
                                if (c = typeof a != "undefined") f = a
                            }
                            c || (f = u ? Gt(f) ? f : [] : On(f) ? f : {}), r.push(t), i.push(f), c || It(f, t, n, r, i)
                        }
                    } else n && (a = n(f, t), typeof a == "undefined" && (a = t)), typeof a != "undefined" && (f = a);
                    e[s] = f
                })
            }

            function qt(e, t) {
                return e + ft(Ct() * (t - e + 1))
            }

            function Rt(e, t, n) {
                var r = -1,
                    i = Xt(),
                    o = e ? e.length : 0,
                    u = [],
                    a = !t && o >= s && i === q,
                    f = n || a ? $() : u;
                if (a) {
                    var l = X(f);
                    i = R, f = l
                }
                while (++r < o) {
                    var c = e[r],
                        h = n ? n(c, r, e) : c;
                    if (t ? !r || f[f.length - 1] !== h : i(f, h) < 0)(n || a) && f.push(h), u.push(c)
                }
                return a ? (K(f.array), Q(f)) : n && K(f), u
            }

            function Ut(e) {
                return function(t, n, r) {
                    var i = {};
                    n = Lt.createCallback(n, r, 3);
                    var s = -1,
                        o = t ? t.length : 0;
                    if (typeof o == "number")
                        while (++s < o) {
                            var u = t[s];
                            e(i, u, n(u, s, t), t)
                        } else dn(t, function(t, r, s) {
                            e(i, t, n(t, r, s), s)
                        });
                    return i
                }
            }

            function zt(e, t, n, r, i, s) {
                var o = t & 1,
                    u = t & 2,
                    a = t & 4,
                    f = t & 8,
                    l = t & 16,
                    c = t & 32;
                if (!u && !Nn(e)) throw new tt;
                l && !n.length && (t &= -17, l = n = !1), c && !r.length && (t &= -33, c = r = !1);
                var h = e && e.__bindData__;
                if (h && h !== !0) return h = G(h), h[2] && (h[2] = G(h[2])), h[3] && (h[3] = G(h[3])), o && !(h[1] & 1) && (h[4] = i), !o && h[1] & 1 && (t |= 8), a && !(h[1] & 4) && (h[5] = s), l && pt.apply(h[2] || (h[2] = []), n), c && mt.apply(h[3] || (h[3] = []), r), h[1] |= t, zt.apply(null, h);
                var p = t == 1 || t === 17 ? Mt : Ht;
                return p([e, t, n, r, i, s])
            }

            function Wt(e) {
                return en[e]
            }

            function Xt() {
                var e = (e = Lt.indexOf) === br ? q : e;
                return e
            }

            function Vt(e) {
                return typeof e == "function" && ot.test(e)
            }

            function Jt(e) {
                var t, n;
                return !!e && st.call(e) == k && (t = e.constructor, !Nn(t) || t instanceof t) ? (hn(e, function(e, t) {
                    n = t
                }), typeof n == "undefined" || ht.call(e, n)) : !1
            }

            function Kt(e) {
                return tn[e]
            }

            function Qt(e) {
                return e && typeof e == "object" && typeof e.length == "number" && st.call(e) == E || !1
            }

            function on(e, t, n, r) {
                return typeof t != "boolean" && t != null && (r = n, n = t, t = !1), _t(e, t, typeof n == "function" && Pt(n, r, 1))
            }

            function un(e, t, n) {
                return _t(e, !0, typeof t == "function" && Pt(t, n, 1))
            }

            function an(e, t) {
                var n = Dt(e);
                return t ? sn(n, t) : n
            }

            function ln(e, t, n) {
                var r;
                return t = Lt.createCallback(t, n, 3), dn(e, function(e, n, i) {
                    if (t(e, n, i)) return r = n, !1
                }), r
            }

            function cn(e, t, n) {
                var r;
                return t = Lt.createCallback(t, n, 3), vn(e, function(e, n, i) {
                    if (t(e, n, i)) return r = n, !1
                }), r
            }

            function pn(e, t, n) {
                var r = [];
                hn(e, function(e, t) {
                    r.push(t, e)
                });
                var i = r.length;
                t = Pt(t, n, 3);
                while (i--)
                    if (t(r[i--], r[i], e) === !1) break;
                return e
            }

            function vn(e, t, n) {
                var r = Zt(e),
                    i = r.length;
                t = Pt(t, n, 3);
                while (i--) {
                    var s = r[i];
                    if (t(e[s], s, e) === !1) break
                }
                return e
            }

            function mn(e) {
                var t = [];
                return hn(e, function(e, n) {
                    Nn(e) && t.push(n)
                }), t.sort()
            }

            function gn(e, t) {
                return e ? ht.call(e, t) : !1
            }

            function yn(e) {
                var t = -1,
                    n = Zt(e),
                    r = n.length,
                    i = {};
                while (++t < r) {
                    var s = n[t];
                    i[e[s]] = s
                }
                return i
            }

            function bn(e) {
                return e === !0 || e === !1 || e && typeof e == "object" && st.call(e) == x || !1
            }

            function wn(e) {
                return e && typeof e == "object" && st.call(e) == T || !1
            }

            function En(e) {
                return e && e.nodeType === 1 || !1
            }

            function Sn(e) {
                var t = !0;
                if (!e) return t;
                var n = st.call(e),
                    r = e.length;
                return n == S || n == A || n == E || n == k && typeof r == "number" && Nn(e.splice) ? !r : (dn(e, function() {
                    return t = !1
                }), t)
            }

            function xn(e, t, n, r) {
                return Ft(e, t, typeof n == "function" && Pt(n, r, 2))
            }

            function Tn(e) {
                return wt(e) && !Et(parseFloat(e))
            }

            function Nn(e) {
                return typeof e == "function"
            }

            function Cn(e) {
                return !!e && !!D[typeof e]
            }

            function kn(e) {
                return An(e) && e != +e
            }

            function Ln(e) {
                return e === null
            }

            function An(e) {
                return typeof e == "number" || e && typeof e == "object" && st.call(e) == C || !1
            }

            function Mn(e) {
                return e && typeof e == "object" && st.call(e) == L || !1
            }

            function _n(e) {
                return typeof e == "string" || e && typeof e == "object" && st.call(e) == A || !1
            }

            function Dn(e) {
                return typeof e == "undefined"
            }

            function Pn(e, t, n) {
                var r = {};
                return t = Lt.createCallback(t, n, 3), dn(e, function(e, n, i) {
                    r[n] = t(e, n, i)
                }), r
            }

            function Hn(e) {
                var t = arguments,
                    n = 2;
                if (!Cn(e)) return e;
                typeof t[2] != "number" && (n = t.length);
                if (n > 3 && typeof t[n - 2] == "function") var r = Pt(t[--n - 1], t[n--], 2);
                else n > 2 && typeof t[n - 1] == "function" && (r = t[--n]);
                var i = G(arguments, 1, n),
                    s = -1,
                    o = $(),
                    u = $();
                while (++s < n) It(e, i[s], r, o, u);
                return K(o), K(u), e
            }

            function Bn(e, t, n) {
                var r = {};
                if (typeof t != "function") {
                    var i = [];
                    hn(e, function(e, t) {
                        i.push(t)
                    }), i = Bt(i, jt(arguments, !0, !1, 1));
                    var s = -1,
                        o = i.length;
                    while (++s < o) {
                        var u = i[s];
                        r[u] = e[u]
                    }
                } else t = Lt.createCallback(t, n, 3), hn(e, function(e, n, i) {
                    t(e, n, i) || (r[n] = e)
                });
                return r
            }

            function jn(e) {
                var t = -1,
                    r = Zt(e),
                    i = r.length,
                    s = n(i);
                while (++t < i) {
                    var o = r[t];
                    s[t] = [o, e[o]]
                }
                return s
            }

            function Fn(e, t, n) {
                var r = {};
                if (typeof t != "function") {
                    var i = -1,
                        s = jt(arguments, !0, !1, 1),
                        o = Cn(e) ? s.length : 0;
                    while (++i < o) {
                        var u = s[i];
                        u in e && (r[u] = e[u])
                    }
                } else t = Lt.createCallback(t, n, 3), hn(e, function(e, n, i) {
                    t(e, n, i) && (r[n] = e)
                });
                return r
            }

            function In(e, t, n, r) {
                var i = Gt(e);
                if (n == null)
                    if (i) n = [];
                    else {
                        var s = e && e.constructor,
                            o = s && s.prototype;
                        n = Dt(o)
                    }
                return t && (t = Lt.createCallback(t, r, 4), (i ? Jn : dn)(e, function(e, r, i) {
                    return t(n, e, r, i)
                })), n
            }

            function qn(e) {
                var t = -1,
                    r = Zt(e),
                    i = r.length,
                    s = n(i);
                while (++t < i) s[t] = e[r[t]];
                return s
            }

            function Rn(e) {
                var t = arguments,
                    r = -1,
                    i = jt(t, !0, !1, 1),
                    s = t[2] && t[2][t[1]] === e ? 1 : i.length,
                    o = n(s);
                while (++r < s) o[r] = e[i[r]];
                return o
            }

            function Un(e, t, n) {
                var r = -1,
                    i = Xt(),
                    s = e ? e.length : 0,
                    o = !1;
                return n = (n < 0 ? xt(0, s + n) : n) || 0, Gt(e) ? o = i(e, t, n) > -1 : typeof s == "number" ? o = (_n(e) ? e.indexOf(t, n) : i(e, t, n)) > -1 : dn(e, function(e) {
                    if (++r >= n) return !(o = e === t)
                }), o
            }

            function Wn(e, t, n) {
                var r = !0;
                t = Lt.createCallback(t, n, 3);
                var i = -1,
                    s = e ? e.length : 0;
                if (typeof s == "number") {
                    while (++i < s)
                        if (!(r = !!t(e[i], i, e))) break
                } else dn(e, function(e, n, i) {
                    return r = !!t(e, n, i)
                });
                return r
            }

            function Xn(e, t, n) {
                var r = [];
                t = Lt.createCallback(t, n, 3);
                var i = -1,
                    s = e ? e.length : 0;
                if (typeof s == "number")
                    while (++i < s) {
                        var o = e[i];
                        t(o, i, e) && r.push(o)
                    } else dn(e, function(e, n, i) {
                        t(e, n, i) && r.push(e)
                    });
                return r
            }

            function Vn(e, t, n) {
                t = Lt.createCallback(t, n, 3);
                var r = -1,
                    i = e ? e.length : 0;
                if (typeof i != "number") {
                    var o;
                    return dn(e, function(e, n, r) {
                        if (t(e, n, r)) return o = e, !1
                    }), o
                }
                while (++r < i) {
                    var s = e[r];
                    if (t(s, r, e)) return s
                }
            }

            function $n(e, t, n) {
                var r;
                return t = Lt.createCallback(t, n, 3), Kn(e, function(e, n, i) {
                    if (t(e, n, i)) return r = e, !1
                }), r
            }

            function Jn(e, t, n) {
                var r = -1,
                    i = e ? e.length : 0;
                t = t && typeof n == "undefined" ? t : Pt(t, n, 3);
                if (typeof i == "number") {
                    while (++r < i)
                        if (t(e[r], r, e) === !1) break
                } else dn(e, t);
                return e
            }

            function Kn(e, t, n) {
                var r = e ? e.length : 0;
                t = t && typeof n == "undefined" ? t : Pt(t, n, 3);
                if (typeof r == "number") {
                    while (r--)
                        if (t(e[r], r, e) === !1) break
                } else {
                    var i = Zt(e);
                    r = i.length, dn(e, function(e, n, s) {
                        return n = i ? i[--r] : --r, t(s[n], n, s)
                    })
                }
                return e
            }

            function Yn(e, t) {
                var r = G(arguments, 2),
                    i = -1,
                    s = typeof t == "function",
                    o = e ? e.length : 0,
                    u = n(typeof o == "number" ? o : 0);
                return Jn(e, function(e) {
                    u[++i] = (s ? t : e[t]).apply(e, r)
                }), u
            }

            function Zn(e, t, r) {
                var i = -1,
                    s = e ? e.length : 0;
                t = Lt.createCallback(t, r, 3);
                if (typeof s == "number") {
                    var o = n(s);
                    while (++i < s) o[i] = t(e[i], i, e)
                } else o = [], dn(e, function(e, n, r) {
                    o[++i] = t(e, n, r)
                });
                return o
            }

            function er(e, t, n) {
                var r = -Infinity,
                    i = r;
                typeof t != "function" && n && n[t] === e && (t = null);
                if (t == null && Gt(e)) {
                    var s = -1,
                        o = e.length;
                    while (++s < o) {
                        var u = e[s];
                        u > i && (i = u)
                    }
                } else t = t == null && _n(e) ? z : Lt.createCallback(t, n, 3), Jn(e, function(e, n, s) {
                    var o = t(e, n, s);
                    o > r && (r = o, i = e)
                });
                return i
            }

            function tr(e, t, n) {
                var r = Infinity,
                    i = r;
                typeof t != "function" && n && n[t] === e && (t = null);
                if (t == null && Gt(e)) {
                    var s = -1,
                        o = e.length;
                    while (++s < o) {
                        var u = e[s];
                        u < i && (i = u)
                    }
                } else t = t == null && _n(e) ? z : Lt.createCallback(t, n, 3), Jn(e, function(e, n, s) {
                    var o = t(e, n, s);
                    o < r && (r = o, i = e)
                });
                return i
            }

            function rr(e, t, n, r) {
                if (!e) return n;
                var i = arguments.length < 3;
                t = Lt.createCallback(t, r, 4);
                var s = -1,
                    o = e.length;
                if (typeof o == "number") {
                    i && (n = e[++s]);
                    while (++s < o) n = t(n, e[s], s, e)
                } else dn(e, function(e, r, s) {
                    n = i ? (i = !1, e) : t(n, e, r, s)
                });
                return n
            }

            function ir(e, t, n, r) {
                var i = arguments.length < 3;
                return t = Lt.createCallback(t, r, 4), Kn(e, function(e, r, s) {
                    n = i ? (i = !1, e) : t(n, e, r, s)
                }), n
            }

            function sr(e, t, n) {
                return t = Lt.createCallback(t, n, 3), Xn(e, function(e, n, r) {
                    return !t(e, n, r)
                })
            }

            function or(t, n, r) {
                t && typeof t.length != "number" && (t = qn(t));
                if (n == null || r) return t ? t[qt(0, t.length - 1)] : e;
                var i = ur(t);
                return i.length = Tt(xt(0, n), i.length), i
            }

            function ur(e) {
                var t = -1,
                    r = e ? e.length : 0,
                    i = n(typeof r == "number" ? r : 0);
                return Jn(e, function(e) {
                    var n = qt(0, ++t);
                    i[t] = i[n], i[n] = e
                }), i
            }

            function ar(e) {
                var t = e ? e.length : 0;
                return typeof t == "number" ? t : Zt(e).length
            }

            function fr(e, t, n) {
                var r;
                t = Lt.createCallback(t, n, 3);
                var i = -1,
                    s = e ? e.length : 0;
                if (typeof s == "number") {
                    while (++i < s)
                        if (r = t(e[i], i, e)) break
                } else dn(e, function(e, n, i) {
                    return !(r = t(e, n, i))
                });
                return !!r
            }

            function lr(e, t, r) {
                var i = -1,
                    s = Gt(t),
                    o = e ? e.length : 0,
                    u = n(typeof o == "number" ? o : 0);
                s || (t = Lt.createCallback(t, r, 3)), Jn(e, function(e, n, r) {
                    var o = u[++i] = J();
                    s ? o.criteria = Zn(t, function(t) {
                        return e[t]
                    }) : (o.criteria = $())[0] = t(e, n, r), o.index = i, o.value = e
                }), o = u.length, u.sort(W);
                while (o--) {
                    var a = u[o];
                    u[o] = a.value, s || K(a.criteria), Q(a)
                }
                return u
            }

            function cr(e) {
                return e && typeof e.length == "number" ? G(e) : qn(e)
            }

            function pr(e) {
                var t = -1,
                    n = e ? e.length : 0,
                    r = [];
                while (++t < n) {
                    var i = e[t];
                    i && r.push(i)
                }
                return r
            }

            function dr(e) {
                return Bt(e, jt(arguments, !0, !0, 1))
            }

            function vr(e, t, n) {
                var r = -1,
                    i = e ? e.length : 0;
                t = Lt.createCallback(t, n, 3);
                while (++r < i)
                    if (t(e[r], r, e)) return r;
                return -1
            }

            function mr(e, t, n) {
                var r = e ? e.length : 0;
                t = Lt.createCallback(t, n, 3);
                while (r--)
                    if (t(e[r], r, e)) return r;
                return -1
            }

            function gr(t, n, r) {
                var i = 0,
                    s = t ? t.length : 0;
                if (typeof n != "number" && n != null) {
                    var o = -1;
                    n = Lt.createCallback(n, r, 3);
                    while (++o < s && n(t[o], o, t)) i++
                } else {
                    i = n;
                    if (i == null || r) return t ? t[0] : e
                }
                return G(t, 0, Tt(xt(0, i), s))
            }

            function yr(e, t, n, r) {
                return typeof t != "boolean" && t != null && (r = n, n = typeof t != "function" && r && r[t] === e ? null : t, t = !1), n != null && (e = Zn(e, n, r)), jt(e, t)
            }

            function br(e, t, n) {
                if (typeof n == "number") {
                    var r = e ? e.length : 0;
                    n = n < 0 ? xt(0, r + n) : n || 0
                } else if (n) {
                    var i = Lr(e, t);
                    return e[i] === t ? i : -1
                }
                return q(e, t, n)
            }

            function wr(e, t, n) {
                var r = 0,
                    i = e ? e.length : 0;
                if (typeof t != "number" && t != null) {
                    var s = i;
                    t = Lt.createCallback(t, n, 3);
                    while (s-- && t(e[s], s, e)) r++
                } else r = t == null || n ? 1 : t || r;
                return G(e, 0, Tt(xt(0, i - r), i))
            }

            function Er() {
                var e = [],
                    t = -1,
                    n = arguments.length,
                    r = $(),
                    i = Xt(),
                    o = i === q,
                    u = $();
                while (++t < n) {
                    var a = arguments[t];
                    if (Gt(a) || Qt(a)) e.push(a), r.push(o && a.length >= s && X(t ? e[t] : u))
                }
                var f = e[0],
                    l = -1,
                    c = f ? f.length : 0,
                    h = [];
                e: while (++l < c) {
                    var p = r[0];
                    a = f[l];
                    if ((p ? R(p, a) : i(u, a)) < 0) {
                        t = n, (p || u).push(a);
                        while (--t) {
                            p = r[t];
                            if ((p ? R(p, a) : i(e[t], a)) < 0) continue e
                        }
                        h.push(a)
                    }
                }
                while (n--) p = r[n], p && Q(p);
                return K(r), K(u), h
            }

            function Sr(t, n, r) {
                var i = 0,
                    s = t ? t.length : 0;
                if (typeof n != "number" && n != null) {
                    var o = s;
                    n = Lt.createCallback(n, r, 3);
                    while (o-- && n(t[o], o, t)) i++
                } else {
                    i = n;
                    if (i == null || r) return t ? t[s - 1] : e
                }
                return G(t, xt(0, s - i))
            }

            function xr(e, t, n) {
                var r = e ? e.length : 0;
                typeof n == "number" && (r = (n < 0 ? xt(0, r + n) : Tt(n, r - 1)) + 1);
                while (r--)
                    if (e[r] === t) return r;
                return -1
            }

            function Tr(e) {
                var t = arguments,
                    n = 0,
                    r = t.length,
                    i = e ? e.length : 0;
                while (++n < r) {
                    var s = -1,
                        o = t[n];
                    while (++s < i) e[s] === o && (vt.call(e, s--, 1), i--)
                }
                return e
            }

            function Nr(e, t, r) {
                e = +e || 0, r = typeof r == "number" ? r : +r || 1, t == null && (t = e, e = 0);
                var i = -1,
                    s = xt(0, ut((t - e) / (r || 1))),
                    o = n(s);
                while (++i < s) o[i] = e, e += r;
                return o
            }

            function Cr(e, t, n) {
                var r = -1,
                    i = e ? e.length : 0,
                    s = [];
                t = Lt.createCallback(t, n, 3);
                while (++r < i) {
                    var o = e[r];
                    t(o, r, e) && (s.push(o), vt.call(e, r--, 1), i--)
                }
                return s
            }

            function kr(e, t, n) {
                if (typeof t != "number" && t != null) {
                    var r = 0,
                        i = -1,
                        s = e ? e.length : 0;
                    t = Lt.createCallback(t, n, 3);
                    while (++i < s && t(e[i], i, e)) r++
                } else r = t == null || n ? 1 : xt(0, t);
                return G(e, r)
            }

            function Lr(e, t, n, r) {
                var i = 0,
                    s = e ? e.length : i;
                n = n ? Lt.createCallback(n, r, 1) : Zr, t = n(t);
                while (i < s) {
                    var o = i + s >>> 1;
                    n(e[o]) < t ? i = o + 1 : s = o
                }
                return i
            }

            function Ar() {
                return Rt(jt(arguments, !0, !0))
            }

            function Or(e, t, n, r) {
                return typeof t != "boolean" && t != null && (r = n, n = typeof t != "function" && r && r[t] === e ? null : t, t = !1), n != null && (n = Lt.createCallback(n, r, 3)), Rt(e, t, n)
            }

            function Mr(e) {
                return Bt(e, G(arguments, 1))
            }

            function _r() {
                var e = -1,
                    t = arguments.length;
                while (++e < t) {
                    var n = arguments[e];
                    if (Gt(n) || Qt(n)) var r = r ? Rt(Bt(r, n).concat(Bt(n, r))) : n
                }
                return r || []
            }

            function Dr() {
                var e = arguments.length > 1 ? arguments : arguments[0],
                    t = -1,
                    r = e ? er(nr(e, "length")) : 0,
                    i = n(r < 0 ? 0 : r);
                while (++t < r) i[t] = nr(e, t);
                return i
            }

            function Pr(e, t) {
                var n = -1,
                    r = e ? e.length : 0,
                    i = {};
                !t && r && !Gt(e[0]) && (t = []);
                while (++n < r) {
                    var s = e[n];
                    t ? i[s] = t[n] : s && (i[s[0]] = s[1])
                }
                return i
            }

            function Hr(e, t) {
                if (!Nn(t)) throw new tt;
                return function() {
                    if (--e < 1) return t.apply(this, arguments)
                }
            }

            function Br(e, t) {
                return arguments.length > 2 ? zt(e, 17, G(arguments, 2), null, t) : zt(e, 1, null, null, t)
            }

            function jr(e) {
                var t = arguments.length > 1 ? jt(arguments, !0, !1, 1) : mn(e),
                    n = -1,
                    r = t.length;
                while (++n < r) {
                    var i = t[n];
                    e[i] = zt(e[i], 1, null, null, e)
                }
                return e
            }

            function Fr(e, t) {
                return arguments.length > 2 ? zt(t, 19, G(arguments, 2), null, e) : zt(t, 3, null, null, e)
            }

            function Ir() {
                var e = arguments,
                    t = e.length;
                while (t--)
                    if (!Nn(e[t])) throw new tt;
                return function() {
                    var t = arguments,
                        n = e.length;
                    while (n--) t = [e[n].apply(this, t)];
                    return t[0]
                }
            }

            function qr(e, t) {
                return t = typeof t == "number" ? t : +t || e.length, zt(e, 4, null, null, null, t)
            }

            function Rr(t, n, r) {
                var i, s, o, u, a, f, l, c = 0,
                    h = !1,
                    p = !0;
                if (!Nn(t)) throw new tt;
                n = xt(0, n) || 0;
                if (r === !0) {
                    var d = !0;
                    p = !1
                } else Cn(r) && (d = r.leading, h = "maxWait" in r && (xt(n, r.maxWait) || 0), p = "trailing" in r ? r.trailing : p);
                var v = function() {
                        var r = n - (ri() - u);
                        if (r <= 0) {
                            s && at(s);
                            var h = l;
                            s = f = l = e, h && (c = ri(), o = t.apply(a, i), !f && !s && (i = a = null))
                        } else f = dt(v, r)
                    },
                    m = function() {
                        f && at(f), s = f = l = e;
                        if (p || h !== n) c = ri(), o = t.apply(a, i), !f && !s && (i = a = null)
                    };
                return function() {
                    i = arguments, u = ri(), a = this, l = p && (f || !d);
                    if (h === !1) var e = d && !f;
                    else {
                        !s && !d && (c = u);
                        var r = h - (u - c),
                            g = r <= 0;
                        g ? (s && (s = at(s)), c = u, o = t.apply(a, i)) : s || (s = dt(m, r))
                    }
                    return g && f ? f = at(f) : !f && n !== h && (f = dt(v, n)), e && (g = !0, o = t.apply(a, i)), g && !f && !s && (i = a = null), o
                }
            }

            function Ur(t) {
                if (!Nn(t)) throw new tt;
                var n = G(arguments, 1);
                return dt(function() {
                    t.apply(e, n)
                }, 1)
            }

            function zr(t, n) {
                if (!Nn(t)) throw new tt;
                var r = G(arguments, 2);
                return dt(function() {
                    t.apply(e, r)
                }, n)
            }

            function Wr(e, t) {
                if (!Nn(e)) throw new tt;
                var n = function() {
                    var r = n.cache,
                        s = t ? t.apply(this, arguments) : i + arguments[0];
                    return ht.call(r, s) ? r[s] : r[s] = e.apply(this, arguments)
                };
                return n.cache = {}, n
            }

            function Xr(e) {
                var t, n;
                if (!Nn(e)) throw new tt;
                return function() {
                    return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
                }
            }

            function Vr(e) {
                return zt(e, 16, G(arguments, 1))
            }

            function $r(e) {
                return zt(e, 32, null, G(arguments, 1))
            }

            function Jr(e, t, n) {
                var r = !0,
                    i = !0;
                if (!Nn(e)) throw new tt;
                return n === !1 ? r = !1 : Cn(n) && (r = "leading" in n ? n.leading : r, i = "trailing" in n ? n.trailing : i), M.leading = r, M.maxWait = t, M.trailing = i, Rr(e, t, M)
            }

            function Kr(e, t) {
                return zt(t, 16, [e])
            }

            function Qr(e) {
                return function() {
                    return e
                }
            }

            function Gr(e, t, n) {
                var r = typeof e;
                if (e == null || r == "function") return Pt(e, t, n);
                if (r != "object") return si(e);
                var i = Zt(e),
                    s = i[0],
                    o = e[s];
                return i.length == 1 && o === o && !Cn(o) ? function(e) {
                    var t = e[s];
                    return o === t && (o !== 0 || 1 / o == 1 / t)
                } : function(t) {
                    var n = i.length,
                        r = !1;
                    while (n--)
                        if (!(r = Ft(t[i[n]], e[i[n]], null, !0))) break;
                    return r
                }
            }

            function Yr(e) {
                return e == null ? "" : et(e).replace(rn, Wt)
            }

            function Zr(e) {
                return e
            }

            function ei(e, t, n) {
                var r = !0,
                    i = t && mn(t);
                if (!t || !n && !i.length) n == null && (n = t), s = At, t = e, e = Lt, i = mn(t);
                n === !1 ? r = !1 : Cn(n) && "chain" in n && (r = n.chain);
                var s = e,
                    o = Nn(s);
                Jn(i, function(n) {
                    var i = e[n] = t[n];
                    o && (s.prototype[n] = function() {
                        var t = this.__chain__,
                            n = this.__wrapped__,
                            o = [n];
                        pt.apply(o, arguments);
                        var u = i.apply(e, o);
                        if (r || t) {
                            if (n === u && Cn(u)) return this;
                            u = new s(u), u.__chain__ = t
                        }
                        return u
                    })
                })
            }

            function ti() {
                return t._ = it, this
            }

            function ni() {}

            function si(e) {
                return function(t) {
                    return t[e]
                }
            }

            function oi(e, t, n) {
                var r = e == null,
                    i = t == null;
                n == null && (typeof e == "boolean" && i ? (n = e, e = 1) : !i && typeof t == "boolean" && (n = t, i = !0)), r && i && (t = 1), e = +e || 0, i ? (t = e, e = 0) : t = +t || 0;
                if (n || e % 1 || t % 1) {
                    var s = Ct();
                    return Tt(e + s * (t - e + parseFloat("1e-" + ((s + "").length - 1))), t)
                }
                return qt(e, t)
            }

            function ui(e, t) {
                if (e) {
                    var n = e[t];
                    return Nn(n) ? e[t]() : n
                }
            }

            function ai(t, n, r) {
                var i = Lt.templateSettings;
                t = et(t || ""), r = fn({}, r, i);
                var s = fn({}, r.imports, i.imports),
                    o = Zt(s),
                    u = qn(s),
                    h, p = 0,
                    v = r.interpolate || m,
                    g = "__p += '",
                    b = U((r.escape || m).source + "|" + v.source + "|" + (v === d ? c : m).source + "|" + (r.evaluate || m).source + "|$", "g");
                t.replace(b, function(e, n, r, i, s, o) {
                    return r || (r = i), g += t.slice(p, o).replace(y, V), n && (g += "' +\n__e(" + n + ") +\n'"), s && (h = !0, g += "';\n" + s + ";\n__p += '"), r && (g += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), p = o + e.length, e
                }), g += "';\n";
                var E = r.variable,
                    S = E;
                S || (E = "obj", g = "with (" + E + ") {\n" + g + "\n}\n"), g = (h ? g.replace(a, "") : g).replace(f, "$1").replace(l, "$1;"), g = "function(" + E + ") {\n" + (S ? "" : E + " || (" + E + " = {});\n") + "var __t, __p = '', __e = _.escape" + (h ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + g + "return __p\n}";
                var x = "\n/*\n//# sourceURL=" + (r.sourceURL || "/lodash/template/source[" + w++ + "]") + "\n*/";
                try {
                    var T = B(o, "return " + g + x).apply(e, u)
                } catch (N) {
                    throw N.source = g, N
                }
                return n ? T(n) : (T.source = g, T)
            }

            function fi(e, t, r) {
                e = (e = +e) > -1 ? e : 0;
                var i = -1,
                    s = n(e);
                t = Pt(t, r, 1);
                while (++i < e) s[i] = t(i);
                return s
            }

            function li(e) {
                return e == null ? "" : et(e).replace(nn, Kt)
            }

            function ci(e) {
                var t = ++r;
                return et(e == null ? "" : e) + t
            }

            function hi(e) {
                return e = new At(e), e.__chain__ = !0, e
            }

            function pi(e, t) {
                return t(e), e
            }

            function di() {
                return this.__chain__ = !0, this
            }

            function vi() {
                return et(this.__wrapped__)
            }

            function mi() {
                return this.__wrapped__
            }
            t = t ? Z.defaults(H.Object(), t, Z.pick(H, b)) : H;
            var n = t.Array,
                o = t.Boolean,
                P = t.Date,
                B = t.Function,
                j = t.Math,
                F = t.Number,
                I = t.Object,
                U = t.RegExp,
                et = t.String,
                tt = t.TypeError,
                nt = [],
                rt = I.prototype,
                it = t._,
                st = rt.toString,
                ot = U("^" + et(st).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
                ut = j.ceil,
                at = t.clearTimeout,
                ft = j.floor,
                lt = B.prototype.toString,
                ct = Vt(ct = I.getPrototypeOf) && ct,
                ht = rt.hasOwnProperty,
                pt = nt.push,
                dt = t.setTimeout,
                vt = nt.splice,
                mt = nt.unshift,
                gt = function() {
                    try {
                        var e = {},
                            t = Vt(t = I.defineProperty) && t,
                            n = t(e, e, e) && t
                    } catch (r) {}
                    return n
                }(),
                yt = Vt(yt = I.create) && yt,
                bt = Vt(bt = n.isArray) && bt,
                wt = t.isFinite,
                Et = t.isNaN,
                St = Vt(St = I.keys) && St,
                xt = j.max,
                Tt = j.min,
                Nt = t.parseInt,
                Ct = j.random,
                kt = {};
            kt[S] = n, kt[x] = o, kt[T] = P, kt[N] = B, kt[k] = I, kt[C] = F, kt[L] = U, kt[A] = et, At.prototype = Lt.prototype;
            var Ot = Lt.support = {};
            Ot.funcDecomp = !Vt(t.WinRTError) && g.test(Y), Ot.funcNames = typeof B.name == "string", Lt.templateSettings = {
                escape: /<%-([\s\S]+?)%>/g,
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: d,
                variable: "",
                imports: {
                    _: Lt
                }
            }, yt || (Dt = function() {
                function e() {}
                return function(n) {
                    if (Cn(n)) {
                        e.prototype = n;
                        var r = new e;
                        e.prototype = null
                    }
                    return r || t.Object()
                }
            }());
            var $t = gt ? function(e, t) {
                    _.value = t, gt(e, "__bindData__", _)
                } : ni,
                Gt = bt || function(e) {
                    return e && typeof e == "object" && typeof e.length == "number" && st.call(e) == S || !1
                },
                Yt = function(e) {
                    var t, n = e,
                        r = [];
                    if (!n) return r;
                    if (!D[typeof e]) return r;
                    for (t in n) ht.call(n, t) && r.push(t);
                    return r
                },
                Zt = St ? function(e) {
                    return Cn(e) ? St(e) : []
                } : Yt,
                en = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                tn = yn(en),
                nn = U("(" + Zt(tn).join("|") + ")", "g"),
                rn = U("[" + Zt(en).join("") + "]", "g"),
                sn = function(e, t, n) {
                    var r, i = e,
                        s = i;
                    if (!i) return s;
                    var o = arguments,
                        u = 0,
                        a = typeof n == "number" ? 2 : o.length;
                    if (a > 3 && typeof o[a - 2] == "function") var f = Pt(o[--a - 1], o[a--], 2);
                    else a > 2 && typeof o[a - 1] == "function" && (f = o[--a]);
                    while (++u < a) {
                        i = o[u];
                        if (i && D[typeof i]) {
                            var l = -1,
                                c = D[typeof i] && Zt(i),
                                h = c ? c.length : 0;
                            while (++l < h) r = c[l], s[r] = f ? f(s[r], i[r]) : i[r]
                        }
                    }
                    return s
                },
                fn = function(e, t, n) {
                    var r, i = e,
                        s = i;
                    if (!i) return s;
                    var o = arguments,
                        u = 0,
                        a = typeof n == "number" ? 2 : o.length;
                    while (++u < a) {
                        i = o[u];
                        if (i && D[typeof i]) {
                            var f = -1,
                                l = D[typeof i] && Zt(i),
                                c = l ? l.length : 0;
                            while (++f < c) r = l[f], typeof s[r] == "undefined" && (s[r] = i[r])
                        }
                    }
                    return s
                },
                hn = function(e, t, n) {
                    var r, i = e,
                        s = i;
                    if (!i) return s;
                    if (!D[typeof i]) return s;
                    t = t && typeof n == "undefined" ? t : Pt(t, n, 3);
                    for (r in i)
                        if (t(i[r], r, e) === !1) return s;
                    return s
                },
                dn = function(e, t, n) {
                    var r, i = e,
                        s = i;
                    if (!i) return s;
                    if (!D[typeof i]) return s;
                    t = t && typeof n == "undefined" ? t : Pt(t, n, 3);
                    var o = -1,
                        u = D[typeof i] && Zt(i),
                        a = u ? u.length : 0;
                    while (++o < a) {
                        r = u[o];
                        if (t(i[r], r, e) === !1) return s
                    }
                    return s
                },
                On = ct ? function(e) {
                    if (!e || st.call(e) != k) return !1;
                    var t = e.valueOf,
                        n = Vt(t) && (n = ct(t)) && ct(n);
                    return n ? e == n || ct(e) == n : Jt(e)
                } : Jt,
                zn = Ut(function(e, t, n) {
                    ht.call(e, n) ? e[n]++ : e[n] = 1
                }),
                Qn = Ut(function(e, t, n) {
                    (ht.call(e, n) ? e[n] : e[n] = []).push(t)
                }),
                Gn = Ut(function(e, t, n) {
                    e[n] = t
                }),
                nr = Zn,
                hr = Xn,
                ri = Vt(ri = P.now) && ri || function() {
                    return (new P).getTime()
                },
                ii = Nt(u + "08") == 8 ? Nt : function(e, t) {
                    return Nt(_n(e) ? e.replace(v, "") : e, t || 0)
                };
            return Lt.after = Hr, Lt.assign = sn, Lt.at = Rn, Lt.bind = Br, Lt.bindAll = jr, Lt.bindKey = Fr, Lt.chain = hi, Lt.compact = pr, Lt.compose = Ir, Lt.constant = Qr, Lt.countBy = zn, Lt.create = an, Lt.createCallback = Gr, Lt.curry = qr, Lt.debounce = Rr, Lt.defaults = fn, Lt.defer = Ur, Lt.delay = zr, Lt.difference = dr, Lt.filter = Xn, Lt.flatten = yr, Lt.forEach = Jn, Lt.forEachRight = Kn, Lt.forIn = hn, Lt.forInRight = pn, Lt.forOwn = dn, Lt.forOwnRight = vn, Lt.functions = mn, Lt.groupBy = Qn, Lt.indexBy = Gn, Lt.initial = wr, Lt.intersection = Er, Lt.invert = yn, Lt.invoke = Yn, Lt.keys = Zt, Lt.map = Zn, Lt.mapValues = Pn, Lt.max = er, Lt.memoize = Wr, Lt.merge = Hn, Lt.min = tr, Lt.omit = Bn, Lt.once = Xr, Lt.pairs = jn, Lt.partial = Vr, Lt.partialRight = $r, Lt.pick = Fn, Lt.pluck = nr, Lt.property = si, Lt.pull = Tr, Lt.range = Nr, Lt.reject = sr, Lt.remove = Cr, Lt.rest = kr, Lt.shuffle = ur, Lt.sortBy = lr, Lt.tap = pi, Lt.throttle = Jr, Lt.times = fi, Lt.toArray = cr, Lt.transform = In, Lt.union = Ar, Lt.uniq = Or, Lt.values = qn, Lt.where = hr, Lt.without = Mr, Lt.wrap = Kr, Lt.xor = _r, Lt.zip = Dr, Lt.zipObject = Pr, Lt.collect = Zn, Lt.drop = kr, Lt.each = Jn, Lt.eachRight = Kn, Lt.extend = sn, Lt.methods = mn, Lt.object = Pr, Lt.select = Xn, Lt.tail = kr, Lt.unique = Or, Lt.unzip = Dr, ei(Lt), Lt.clone = on, Lt.cloneDeep = un, Lt.contains = Un, Lt.escape = Yr, Lt.every = Wn, Lt.find = Vn, Lt.findIndex = vr, Lt.findKey = ln, Lt.findLast = $n, Lt.findLastIndex = mr, Lt.findLastKey = cn, Lt.has = gn, Lt.identity = Zr, Lt.indexOf = br, Lt.isArguments = Qt, Lt.isArray = Gt, Lt.isBoolean = bn, Lt.isDate = wn, Lt.isElement = En, Lt.isEmpty = Sn, Lt.isEqual = xn, Lt.isFinite = Tn, Lt.isFunction = Nn, Lt.isNaN = kn, Lt.isNull = Ln, Lt.isNumber = An, Lt.isObject = Cn, Lt.isPlainObject = On, Lt.isRegExp = Mn, Lt.isString = _n, Lt.isUndefined = Dn, Lt.lastIndexOf = xr, Lt.mixin = ei, Lt.noConflict = ti, Lt.noop = ni, Lt.now = ri, Lt.parseInt = ii, Lt.random = oi, Lt.reduce = rr, Lt.reduceRight = ir, Lt.result = ui, Lt.runInContext = Y, Lt.size = ar, Lt.some = fr, Lt.sortedIndex = Lr, Lt.template = ai, Lt.unescape = li, Lt.uniqueId = ci, Lt.all = Wn, Lt.any = fr, Lt.detect = Vn, Lt.findWhere = Vn, Lt.foldl = rr, Lt.foldr = ir, Lt.include = Un, Lt.inject = rr, ei(function() {
                var e = {};
                return dn(Lt, function(t, n) {
                    Lt.prototype[n] || (e[n] = t)
                }), e
            }(), !1), Lt.first = gr, Lt.last = Sr, Lt.sample = or, Lt.take = gr, Lt.head = gr, dn(Lt, function(e, t) {
                var n = t !== "sample";
                Lt.prototype[t] || (Lt.prototype[t] = function(t, r) {
                    var i = this.__chain__,
                        s = e(this.__wrapped__, t, r);
                    return !i && (t == null || r && (!n || typeof t != "function")) ? s : new At(s, i)
                })
            }), Lt.VERSION = "2.4.1", Lt.prototype.chain = di, Lt.prototype.toString = vi, Lt.prototype.value = mi, Lt.prototype.valueOf = mi, Jn(["join", "pop", "shift"], function(e) {
                var t = nt[e];
                Lt.prototype[e] = function() {
                    var e = this.__chain__,
                        n = t.apply(this.__wrapped__, arguments);
                    return e ? new At(n, e) : n
                }
            }), Jn(["push", "reverse", "sort", "unshift"], function(e) {
                var t = nt[e];
                Lt.prototype[e] = function() {
                    return t.apply(this.__wrapped__, arguments), this
                }
            }), Jn(["concat", "slice", "splice"], function(e) {
                var t = nt[e];
                Lt.prototype[e] = function() {
                    return new At(t.apply(this.__wrapped__, arguments), this.__chain__)
                }
            }), Lt
        }
        var e, t = [],
            n = [],
            r = 0,
            i = +(new Date) + "",
            s = 75,
            o = 40,
            u = " 	\f ﻿\n\r\u2028\u2029 ᠎             　",
            a = /\b__p \+= '';/g,
            f = /\b(__p \+=) '' \+/g,
            l = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            c = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            h = /\w*$/,
            p = /^\s*function[ \n\r\t]+\w/,
            d = /<%=([\s\S]+?)%>/g,
            v = RegExp("^[" + u + "]*0+(?=.$)"),
            m = /($^)/,
            g = /\bthis\b/,
            y = /['\n\r\t\u2028\u2029\\]/g,
            b = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
            w = 0,
            E = "[object Arguments]",
            S = "[object Array]",
            x = "[object Boolean]",
            T = "[object Date]",
            N = "[object Function]",
            C = "[object Number]",
            k = "[object Object]",
            L = "[object RegExp]",
            A = "[object String]",
            O = {};
        O[N] = !1, O[E] = O[S] = O[x] = O[T] = O[C] = O[k] = O[L] = O[A] = !0;
        var M = {
                leading: !1,
                maxWait: 0,
                trailing: !1
            },
            _ = {
                configurable: !1,
                enumerable: !1,
                value: null,
                writable: !1
            },
            D = {
                "boolean": !1,
                "function": !0,
                object: !0,
                number: !1,
                string: !1,
                "undefined": !1
            },
            P = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "	": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            H = D[typeof window] && window || this,
            B = D[typeof exports] && exports && !exports.nodeType && exports,
            j = D[typeof module] && module && !module.nodeType && module,
            F = j && j.exports === B && B,
            I = D[typeof global] && global;
        I && (I.global === I || I.window === I) && (H = I);
        var Z = Y();
        typeof define == "function" && typeof define.amd == "object" && define.amd ? (H._ = Z, define("lodash", [], function() {
            return Z
        })) : B && j ? F ? (j.exports = Z)._ = Z : B._ = Z : H._ = Z
    }.call(this), define("app-interface", ["angular", "lodash"], function(e, t) {
        return function(n) {
            n = n || {};
            var r = n.app,
                i = n.constants;
            return {
                bootstrap: function(e) {
                    e = e || {}, i && i.value("bootstrapData", t.omit(e, "config")).constant("$config", e.config), r && e.i18n && r.config(["$translateProvider", function(t) {
                        var n = e.i18n.phrases || {},
                            r = e.i18n.currentLocale || "en";
                        t.preferredLanguage(r)
                    }])
                },
                mount: function(t) {
                    if (!r) throw new Error("Not implemented!");
                    e.bootstrap(t, [r.name])
                }
            }
        }
    }),
    function(e, t, n) {
        "use strict";
        t.module("ngAnimate", ["ng"]).config(["$provide", "$animateProvider", function(r, i) {
            function h(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (n.nodeType == a) return n
                }
            }

            function p(e, t) {
                return h(e) == h(t)
            }
            var s = t.noop,
                o = t.forEach,
                u = i.$$selectors,
                a = 1,
                f = "$$ngAnimateState",
                l = "ng-animate",
                c = {
                    running: !0
                };
            r.decorator("$animate", ["$delegate", "$injector", "$sniffer", "$rootElement", "$timeout", "$rootScope", "$document", function(e, n, r, i, a, d, v) {
                function m(e) {
                    if (e) {
                        var t = [],
                            i = {},
                            s = e.substr(1).split(".");
                        (r.transitions || r.animations) && s.push("");
                        for (var o = 0; o < s.length; o++) {
                            var a = s[o],
                                f = u[a];
                            f && !i[a] && (t.push(n.get(f)), i[a] = !0)
                        }
                        return t
                    }
                }

                function g(e, t, n, r, i, u, c) {
                    function k(e) {
                        O();
                        if (e === !0) {
                            M();
                            return
                        }
                        var t = n.data(f);
                        t && (t.done = M, n.data(f, t)), L(T, "after", M)
                    }

                    function L(r, i, u) {
                        function f(e, t) {
                            var n = t + "Complete",
                                i = r[e];
                            i[n] = !0, (i[a] || s)();
                            for (var o = 0; o < r.length; o++)
                                if (!r[o][n]) return;
                            u()
                        }
                        var a = i + "End";
                        o(r, function(r, s) {
                            var o = function() {
                                f(s, i)
                            };
                            if (i == "before" && (e == "enter" || e == "move")) {
                                o();
                                return
                            }
                            r[i] ? r[a] = S ? r[i](n, t, o) : r[i](n, o) : o()
                        })
                    }

                    function A() {
                        c && a(c, 0, !1)
                    }

                    function O() {
                        O.hasBeenRun || (O.hasBeenRun = !0, u())
                    }

                    function M() {
                        if (!M.hasBeenRun) {
                            M.hasBeenRun = !0;
                            var e = n.data(f);
                            e && (S ? w(n) : (e.closeAnimationTimeout = a(function() {
                                w(n)
                            }, 0, !1), n.data(f, e))), A()
                        }
                    }
                    var p = h(n);
                    if (!p) {
                        O(), M();
                        return
                    }
                    var d = p.className,
                        v = d + " " + t,
                        g = (" " + v).replace(/\s+/g, ".");
                    r || (r = i ? i.parent() : n.parent());
                    var y = m(g),
                        S = e == "addClass" || e == "removeClass",
                        x = n.data(f) || {};
                    if (E(n, r) || y.length === 0) {
                        O(), M();
                        return
                    }
                    var T = [];
                    (!x.running || !S || !x.structural) && o(y, function(r) {
                        if (!r.allowCancel || r.allowCancel(n, e, t)) {
                            var i, s = r[e];
                            e == "leave" ? (i = s, s = null) : i = r["before" + e.charAt(0).toUpperCase() + e.substr(1)], T.push({
                                before: i,
                                after: s
                            })
                        }
                    });
                    if (T.length === 0) {
                        O(), A();
                        return
                    }
                    var N = " " + d + " ";
                    x.running && (a.cancel(x.closeAnimationTimeout), w(n), b(x.animations), x.beforeComplete ? (x.done || s)(!0) : S && !x.structural && (N = x.event == "removeClass" ? N.replace(x.className, "") : N + x.className + " "));
                    var C = " " + t + " ";
                    if (e == "addClass" && N.indexOf(C) >= 0 || e == "removeClass" && N.indexOf(C) == -1) {
                        O(), A();
                        return
                    }
                    n.addClass(l), n.data(f, {
                        running: !0,
                        event: e,
                        className: t,
                        structural: !S,
                        animations: T,
                        done: k
                    }), L(T, "before", k)
                }

                function y(e) {
                    var n = h(e);
                    o(n.querySelectorAll("." + l), function(e) {
                        e = t.element(e);
                        var n = e.data(f);
                        n && (b(n.animations), w(e))
                    })
                }

                function b(e) {
                    var t = !0;
                    o(e, function(n) {
                        e.beforeComplete || (n.beforeEnd || s)(t), e.afterComplete || (n.afterEnd || s)(t)
                    })
                }

                function w(e) {
                    p(e, i) ? c.disabled || (c.running = !1, c.structural = !1) : (e.removeClass(l), e.removeData(f))
                }

                function E(e, t) {
                    if (c.disabled) return !0;
                    if (p(e, i)) return c.disabled || c.running;
                    do {
                        if (t.length === 0) break;
                        var n = p(t, i),
                            r = n ? c : t.data(f),
                            s = r && (!!r.disabled || !!r.running);
                        if (n || s) return s;
                        if (n) return !0
                    } while (t = t.parent());
                    return !0
                }
                return i.data(f, c), d.$$postDigest(function() {
                    d.$$postDigest(function() {
                        c.running = !1
                    })
                }), {
                    enter: function(t, n, r, i) {
                        this.enabled(!1, t), e.enter(t, n, r), d.$$postDigest(function() {
                            g("enter", "ng-enter", t, n, r, s, i)
                        })
                    },
                    leave: function(t, n) {
                        y(t), this.enabled(!1, t), d.$$postDigest(function() {
                            g("leave", "ng-leave", t, null, null, function() {
                                e.leave(t)
                            }, n)
                        })
                    },
                    move: function(t, n, r, i) {
                        y(t), this.enabled(!1, t), e.move(t, n, r), d.$$postDigest(function() {
                            g("move", "ng-move", t, n, r, s, i)
                        })
                    },
                    addClass: function(t, n, r) {
                        g("addClass", n, t, null, null, function() {
                            e.addClass(t, n)
                        }, r)
                    },
                    removeClass: function(t, n, r) {
                        g("removeClass", n, t, null, null, function() {
                            e.removeClass(t, n)
                        }, r)
                    },
                    enabled: function(e, t) {
                        switch (arguments.length) {
                            case 2:
                                if (e) w(t);
                                else {
                                    var n = t.data(f) || {};
                                    n.disabled = !0, t.data(f, n)
                                }
                                break;
                            case 1:
                                c.disabled = !e;
                                break;
                            default:
                                e = !c.disabled
                        }
                        return !!e
                    }
                }
            }]), i.register("", ["$window", "$sniffer", "$timeout", function(r, i, u) {
                function A(e) {
                    C.push(e), u.cancel(k), k = u(function() {
                        o(C, function(e) {
                            e()
                        }), C = [], k = null, T = {}
                    }, 10, !1)
                }

                function O(e, t) {
                    var n = t ? T[t] : null;
                    if (!n) {
                        var i = 0,
                            s = 0,
                            u = 0,
                            f = 0,
                            c, h, d, b;
                        o(e, function(e) {
                            if (e.nodeType == a) {
                                var t = r.getComputedStyle(e) || {};
                                d = t[l + v], i = Math.max(M(d), i), b = t[l + m], c = t[l + g], s = Math.max(M(c), s), h = t[p + g], f = Math.max(M(h), f);
                                var n = M(t[p + v]);
                                n > 0 && (n *= parseInt(t[p + y], 10) || 1), u = Math.max(n, u)
                            }
                        }), n = {
                            total: 0,
                            transitionPropertyStyle: b,
                            transitionDurationStyle: d,
                            transitionDelayStyle: c,
                            transitionDelay: s,
                            transitionDuration: i,
                            animationDelayStyle: h,
                            animationDelay: f,
                            animationDuration: u
                        }, t && (T[t] = n)
                    }
                    return n
                }

                function M(e) {
                    var n = 0,
                        r = t.isString(e) ? e.split(/\s*,\s*/) : [];
                    return o(r, function(e) {
                        n = Math.max(parseFloat(e) || 0, n)
                    }), n
                }

                function _(e) {
                    var t = e.parent(),
                        n = t.data(b);
                    return n || (t.data(b, ++N), n = N), n + "-" + h(e).className
                }

                function D(e, t) {
                    var n = _(e),
                        r = n + " " + t,
                        i = {},
                        s = T[r] ? ++T[r].total : 0;
                    if (s > 0) {
                        var u = t + "-stagger",
                            a = n + " " + u,
                            f = !T[a];
                        f && e.addClass(u), i = O(e, a), f && e.removeClass(u)
                    }
                    e.addClass(t);
                    var l = O(e, r),
                        c = Math.max(l.transitionDuration, l.animationDuration);
                    if (c === 0) return e.removeClass(t), !1;
                    var h = "";
                    return l.transitionDuration > 0 ? (e.addClass(E), h += S + " ", P(e)) : H(e), o(t.split(" "), function(e, t) {
                        h += (t > 0 ? " " : "") + e + "-active"
                    }), e.data(w, {
                        className: t,
                        activeClassName: h,
                        maxDuration: c,
                        classes: t + " " + h,
                        timings: l,
                        stagger: i,
                        ii: s
                    }), !0
                }

                function P(e) {
                    h(e).style[l + m] = "none"
                }

                function H(e) {
                    h(e).style[p] = "none 0s"
                }

                function B(e) {
                    var t = l + m,
                        n = h(e);
                    n.style[t] && n.style[t].length > 0 && (n.style[t] = "")
                }

                function j(e) {
                    var t = p,
                        n = h(e);
                    n.style[t] && n.style[t].length > 0 && (n.style[t] = "")
                }

                function F(e, t, n) {
                    function k(e) {
                        e.stopPropagation();
                        var t = e.originalEvent || e,
                            r = t.$manualTimeStamp || t.timeStamp || Date.now(),
                            i = parseFloat(t.elapsedTime.toFixed(x));
                        Math.max(r - v, 0) >= p && i >= a && n()
                    }
                    var r = e.data(w),
                        s = h(e);
                    if (s.className.indexOf(t) == -1 || !r) {
                        n();
                        return
                    }
                    var o = r.timings,
                        u = r.stagger,
                        a = r.maxDuration,
                        l = r.activeClassName,
                        p = Math.max(o.transitionDelay, o.animationDelay) * 1e3,
                        v = Date.now(),
                        m = d + " " + c,
                        g = r.ii,
                        y, b = "",
                        E = [];
                    if (o.transitionDuration > 0) {
                        var S = o.transitionPropertyStyle;
                        if (S.indexOf("all") == -1) {
                            y = !0;
                            var T = i.msie ? "-ms-zoom" : "border-spacing";
                            b += f + "transition-property: " + S + ", " + T + "; ", b += f + "transition-duration: " + o.transitionDurationStyle + ", " + o.transitionDuration + "s; ", E.push(f + "transition-property"), E.push(f + "transition-duration")
                        }
                    }
                    if (g > 0) {
                        if (u.transitionDelay > 0 && u.transitionDuration === 0) {
                            var N = o.transitionDelayStyle;
                            y && (N += ", " + o.transitionDelay + "s"), b += f + "transition-delay: " + I(N, u.transitionDelay, g) + "; ", E.push(f + "transition-delay")
                        }
                        u.animationDelay > 0 && u.animationDuration === 0 && (b += f + "animation-delay: " + I(o.animationDelayStyle, u.animationDelay, g) + "; ", E.push(f + "animation-delay"))
                    }
                    if (E.length > 0) {
                        var C = s.getAttribute("style") || "";
                        s.setAttribute("style", C + " " + b)
                    }
                    return e.on(m, k), e.addClass(l),
                        function(r) {
                            e.off(m, k), e.removeClass(l), z(e, t);
                            var i = h(e);
                            for (var s in E) i.style.removeProperty(E[s])
                        }
                }

                function I(e, t, n) {
                    var r = "";
                    return o(e.split(","), function(e, i) {
                        r += (i > 0 ? "," : "") + (n * t + parseInt(e, 10)) + "s"
                    }), r
                }

                function q(e, t) {
                    if (D(e, t)) return function(n) {
                        n && z(e, t)
                    }
                }

                function R(e, t, n) {
                    if (e.data(w)) return F(e, t, n);
                    z(e, t), n()
                }

                function U(e, t, n) {
                    var r = q(e, t);
                    if (!r) {
                        n();
                        return
                    }
                    var i = r;
                    return A(function() {
                            B(e), j(e), i = R(e, t, n)
                        }),
                        function(e) {
                            (i || s)(e)
                        }
                }

                function z(e, t) {
                    e.removeClass(t), e.removeClass(E), e.removeData(w)
                }

                function W(e, n) {
                    var r = "";
                    return e = t.isArray(e) ? e : e.split(/\s+/), o(e, function(e, t) {
                        e && e.length > 0 && (r += (t > 0 ? " " : "") + e + n)
                    }), r
                }
                var f = "",
                    l, c, p, d;
                e.ontransitionend === n && e.onwebkittransitionend !== n ? (f = "-webkit-", l = "WebkitTransition", c = "webkitTransitionEnd transitionend") : (l = "transition", c = "transitionend"), e.onanimationend === n && e.onwebkitanimationend !== n ? (f = "-webkit-", p = "WebkitAnimation", d = "webkitAnimationEnd animationend") : (p = "animation", d = "animationend");
                var v = "Duration",
                    m = "Property",
                    g = "Delay",
                    y = "IterationCount",
                    b = "$$ngAnimateKey",
                    w = "$$ngAnimateCSS3Data",
                    E = "ng-animate-start",
                    S = "ng-animate-active",
                    x = 3,
                    T = {},
                    N = 0,
                    C = [],
                    k, L = !1;
                return {
                    allowCancel: function(e, n, r) {
                        var i = (e.data(w) || {}).classes;
                        if (!i || ["enter", "leave", "move"].indexOf(n) >= 0) return !0;
                        var s = e.parent(),
                            u = t.element(h(e).cloneNode());
                        u.attr("style", "position:absolute; top:-9999px; left:-9999px"), u.removeAttr("id"), u.html(""), o(i.split(" "), function(e) {
                            u.removeClass(e)
                        });
                        var a = n == "addClass" ? "-add" : "-remove";
                        u.addClass(W(r, a)), s.append(u);
                        var f = O(u);
                        return u.remove(), Math.max(f.transitionDuration, f.animationDuration) > 0
                    },
                    enter: function(e, t) {
                        return U(e, "ng-enter", t)
                    },
                    leave: function(e, t) {
                        return U(e, "ng-leave", t)
                    },
                    move: function(e, t) {
                        return U(e, "ng-move", t)
                    },
                    beforeAddClass: function(e, t, n) {
                        var r = q(e, W(t, "-add"));
                        if (r) return A(function() {
                            B(e), j(e), n()
                        }), r;
                        n()
                    },
                    addClass: function(e, t, n) {
                        return R(e, W(t, "-add"), n)
                    },
                    beforeRemoveClass: function(e, t, n) {
                        var r = q(e, W(t, "-remove"));
                        if (r) return A(function() {
                            B(e), j(e), n()
                        }), r;
                        n()
                    },
                    removeClass: function(e, t, n) {
                        return R(e, W(t, "-remove"), n)
                    }
                }
            }])
        }])
    }(window, window.angular), define("ngAnimate", ["angular"], function() {}), typeof module != "undefined" && typeof exports != "undefined" && module.exports === exports && (module.exports = "ui.router"),
    function(e, t, n) {
        function c(e, t) {
            return f(new(f(function() {}, {
                prototype: e
            })), t)
        }

        function h(e) {
            return a(arguments, function(t) {
                t !== e && a(t, function(t, n) {
                    e.hasOwnProperty(n) || (e[n] = t)
                })
            }), e
        }

        function p(e, t) {
            var n = [];
            for (var r in e.path) {
                if (e.path[r] !== t.path[r]) break;
                n.push(e.path[r])
            }
            return n
        }

        function d(e) {
            if (Object.keys) return Object.keys(e);
            var n = [];
            return t.forEach(e, function(e, t) {
                n.push(t)
            }), n
        }

        function v(e, t) {
            if (Array.prototype.indexOf) return e.indexOf(t, Number(arguments[2]) || 0);
            var n = e.length >>> 0,
                r = Number(arguments[2]) || 0;
            r = r < 0 ? Math.ceil(r) : Math.floor(r), r < 0 && (r += n);
            for (; r < n; r++)
                if (r in e && e[r] === t) return r;
            return -1
        }

        function m(e, t, n, r) {
            var i = p(n, r),
                s, o = {},
                u = [];
            for (var a in i) {
                if (!i[a].params) continue;
                s = d(i[a].params);
                if (!s.length) continue;
                for (var l in s) {
                    if (v(u, s[l]) >= 0) continue;
                    u.push(s[l]), o[s[l]] = e[s[l]]
                }
            }
            return f({}, o, t)
        }

        function g(e, t, n) {
            if (!n) {
                n = [];
                for (var r in e) n.push(r)
            }
            for (var i = 0; i < n.length; i++) {
                var s = n[i];
                if (e[s] != t[s]) return !1
            }
            return !0
        }

        function y(e, t) {
            var n = {};
            return a(e, function(e) {
                n[e] = t[e]
            }), n
        }

        function b(e, t) {
            var n = {};
            return a(e, function(e) {
                n[e[t]] = e
            }), n
        }

        function w(e) {
            var t = {},
                n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            return a(n, function(n) {
                n in e && (t[n] = e[n])
            }), t
        }

        function E(e) {
            var t = {},
                n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            for (var r in e) v(n, r) == -1 && (t[r] = e[r]);
            return t
        }

        function S(e, t) {
            var n = u(e) ? [] : {};
            return a(e, function(e, r) {
                n[r] = i(t) ? t(e) : e[t]
            }), n
        }

        function x(e, t) {
            var n = u(e),
                r = n ? [] : {};
            return a(e, function(e, i) {
                t(e, i) && (r[n ? r.length : i] = e)
            }), r
        }

        function T(e, t) {
            var n = u(e) ? [] : {};
            return a(e, function(e, r) {
                n[r] = t(e, r)
            }), n
        }

        function N(e, t) {
            var i = 1,
                u = 2,
                l = {},
                c = [],
                p = l,
                m = f(e.when(l), {
                    $$promises: l,
                    $$values: l
                });
            this.study = function(l) {
                function S(e, n) {
                    if (w[n] === u) return;
                    b.push(n);
                    if (w[n] === i) throw b.splice(0, v(b, n)), new Error("Cyclic dependency: " + b.join(" -> "));
                    w[n] = i;
                    if (s(e)) y.push(n, [function() {
                        return t.get(e)
                    }], c);
                    else {
                        var r = t.annotate(e);
                        a(r, function(e) {
                            e !== n && l.hasOwnProperty(e) && S(l[e], e)
                        }), y.push(n, e, r)
                    }
                    b.pop(), w[n] = u
                }

                function x(e) {
                    return o(e) && e.then && e.$$promises
                }
                if (!o(l)) throw new Error("'invocables' must be an object");
                var g = d(l || {}),
                    y = [],
                    b = [],
                    w = {};
                return a(l, S), l = b = w = null,
                    function(i, s, u) {
                        function S() {
                            --b || (w || h(v, s.$$values), c.$$values = v, c.$$promises = c.$$promises || !0, delete c.$$inheritedValues, l.resolve(v))
                        }

                        function T(e) {
                            c.$$failure = e, l.reject(e)
                        }

                        function k(n, s, o) {
                            function h(e) {
                                f.reject(e), T(e)
                            }

                            function p() {
                                if (r(c.$$failure)) return;
                                try {
                                    f.resolve(t.invoke(s, u, v)), f.promise.then(function(e) {
                                        v[n] = e, S()
                                    }, h)
                                } catch (e) {
                                    h(e)
                                }
                            }
                            var f = e.defer(),
                                l = 0;
                            a(o, function(e) {
                                d.hasOwnProperty(e) && !i.hasOwnProperty(e) && (l++, d[e].then(function(t) {
                                    v[e] = t, --l || p()
                                }, h))
                            }), l || p(), d[n] = f.promise
                        }
                        x(i) && u === n && (u = s, s = i, i = null);
                        if (!i) i = p;
                        else if (!o(i)) throw new Error("'locals' must be an object");
                        if (!s) s = m;
                        else if (!x(s)) throw new Error("'parent' must be a promise returned by $resolve.resolve()");
                        var l = e.defer(),
                            c = l.promise,
                            d = c.$$promises = {},
                            v = f({}, i),
                            b = 1 + y.length / 3,
                            w = !1;
                        if (r(s.$$failure)) return T(s.$$failure), c;
                        s.$$inheritedValues && h(v, E(s.$$inheritedValues, g)), f(d, s.$$promises), s.$$values ? (w = h(v, E(s.$$values, g)), c.$$inheritedValues = E(s.$$values, g), S()) : (s.$$inheritedValues && (c.$$inheritedValues = E(s.$$inheritedValues, g)), s.then(S, T));
                        for (var N = 0, C = y.length; N < C; N += 3) i.hasOwnProperty(y[N]) ? S() : k(y[N], y[N + 1], y[N + 2]);
                        return c
                    }
            }, this.resolve = function(e, t, n, r) {
                return this.study(e)(t, n, r)
            }
        }

        function C(e, t, n) {
            this.fromConfig = function(e, t, n) {
                return r(e.template) ? this.fromString(e.template, t) : r(e.templateUrl) ? this.fromUrl(e.templateUrl, t) : r(e.templateProvider) ? this.fromProvider(e.templateProvider, t, n) : null
            }, this.fromString = function(e, t) {
                return i(e) ? e(t) : e
            }, this.fromUrl = function(n, r) {
                return i(n) && (n = n(r)), n == null ? null : e.get(n, {
                    cache: t,
                    headers: {
                        Accept: "text/html"
                    }
                }).then(function(e) {
                    return e.data
                })
            }, this.fromProvider = function(e, t, r) {
                return n.invoke(e, null, r || {
                    params: t
                })
            }
        }

        function L(e, t, r) {
            function m(t, n, r, i) {
                v.push(t);
                if (p[t]) return p[t];
                if (!/^\w+(-+\w+)*(?:\[\])?$/.test(t)) throw new Error("Invalid parameter name '" + t + "' in pattern '" + e + "'");
                if (d[t]) throw new Error("Duplicate parameter name '" + t + "' in pattern '" + e + "'");
                return d[t] = new k.Param(t, n, r, i), d[t]
            }

            function g(e, t, n) {
                var r = ["", ""],
                    i = e.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
                if (!t) return i;
                switch (n) {
                    case !1:
                        r = ["(", ")"];
                        break;
                    case !0:
                        r = ["?(", ")?"];
                        break;
                    default:
                        r = ["(" + n + "|", ")?"]
                }
                return i + r[0] + t + r[1]
            }

            function y(n, r) {
                var i, s, o, u, f, l;
                return i = n[2] || n[3], f = t.params[i], o = e.substring(a, n.index), s = r ? n[4] : n[4] || (n[1] == "*" ? ".*" : null), u = k.type(s || "string") || c(k.type("string"), {
                    pattern: new RegExp(s)
                }), {
                    id: i,
                    regexp: s,
                    segment: o,
                    type: u,
                    cfg: f
                }
            }
            t = f({
                params: {}
            }, o(t) ? t : {});
            var i = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                s = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                u = "^",
                a = 0,
                l, h = this.segments = [],
                p = r ? r.params : {},
                d = this.params = r ? r.params.$$new() : new k.ParamSet,
                v = [];
            this.source = e;
            var b, w, E;
            while (l = i.exec(e)) {
                b = y(l, !1);
                if (b.segment.indexOf("?") >= 0) break;
                w = m(b.id, b.type, b.cfg, "path"), u += g(b.segment, w.type.pattern.source, w.squash), h.push(b.segment), a = i.lastIndex
            }
            E = e.substring(a);
            var S = E.indexOf("?");
            if (S >= 0) {
                var x = this.sourceSearch = E.substring(S);
                E = E.substring(0, S), this.sourcePath = e.substring(0, a + S);
                if (x.length > 0) {
                    a = 0;
                    while (l = s.exec(x)) b = y(l, !0), w = m(b.id, b.type, b.cfg, "search"), a = i.lastIndex
                }
            } else this.sourcePath = e, this.sourceSearch = "";
            u += g(E) + (t.strict === !1 ? "/?" : "") + "$", h.push(E), this.regexp = new RegExp(u, t.caseInsensitive ? "i" : n), this.prefix = h[0], this.$$paramNames = v
        }

        function A(e) {
            f(this, e)
        }

        function O() {
            function p(e) {
                return e != null ? e.toString().replace(/\//g, "%2F") : e
            }

            function m(e) {
                return e != null ? e.toString().replace(/%2F/g, "/") : e
            }

            function g(e) {
                return this.pattern.test(e)
            }

            function N() {
                return {
                    strict: l,
                    caseInsensitive: e
                }
            }

            function C(e) {
                return i(e) || u(e) && i(e[e.length - 1])
            }

            function M() {
                while (w.length) {
                    var e = w.shift();
                    if (e.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
                    t.extend(y[e.name], E.invoke(e.def))
                }
            }

            function _(e) {
                f(this, e || {})
            }
            k = this;
            var e = !1,
                l = !0,
                h = !1,
                y = {},
                b = !0,
                w = [],
                E, S = {
                    string: {
                        encode: p,
                        decode: m,
                        is: g,
                        pattern: /[^/]*/
                    },
                    "int": {
                        encode: p,
                        decode: function(e) {
                            return parseInt(e, 10)
                        },
                        is: function(e) {
                            return r(e) && this.decode(e.toString()) === e
                        },
                        pattern: /\d+/
                    },
                    bool: {
                        encode: function(e) {
                            return e ? 1 : 0
                        },
                        decode: function(e) {
                            return parseInt(e, 10) !== 0
                        },
                        is: function(e) {
                            return e === !0 || e === !1
                        },
                        pattern: /0|1/
                    },
                    date: {
                        encode: function(e) {
                            return this.is(e) ? [e.getFullYear(), ("0" + (e.getMonth() + 1)).slice(-2), ("0" + e.getDate()).slice(-2)].join("-") : n
                        },
                        decode: function(e) {
                            if (this.is(e)) return e;
                            var t = this.capture.exec(e);
                            return t ? new Date(t[1], t[2] - 1, t[3]) : n
                        },
                        is: function(e) {
                            return e instanceof Date && !isNaN(e.valueOf())
                        },
                        equals: function(e, t) {
                            return this.is(e) && this.is(t) && e.toISOString() === t.toISOString()
                        },
                        pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                        capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
                    },
                    json: {
                        encode: t.toJson,
                        decode: t.fromJson,
                        is: t.isObject,
                        equals: t.equals,
                        pattern: /[^/]*/
                    },
                    any: {
                        encode: t.identity,
                        decode: t.identity,
                        is: t.identity,
                        equals: t.equals,
                        pattern: /.*/
                    }
                };
            O.$$getDefaultValue = function(e) {
                if (!C(e.value)) return e.value;
                if (!E) throw new Error("Injectable functions cannot be called at configuration time");
                return E.invoke(e.value)
            }, this.caseInsensitive = function(t) {
                return r(t) && (e = t), e
            }, this.strictMode = function(e) {
                return r(e) && (l = e), l
            }, this.defaultSquashPolicy = function(e) {
                if (!r(e)) return h;
                if (e !== !0 && e !== !1 && !s(e)) throw new Error("Invalid squash policy: " + e + ". Valid policies: false, true, arbitrary-string");
                return h = e, e
            }, this.compile = function(e, t) {
                return new L(e, f(N(), t))
            }, this.isMatcher = function(e) {
                if (!o(e)) return !1;
                var t = !0;
                return a(L.prototype, function(n, s) {
                    i(n) && (t = t && r(e[s]) && i(e[s]))
                }), t
            }, this.type = function(e, t, n) {
                if (!r(t)) return y[e];
                if (y.hasOwnProperty(e)) throw new Error("A type named '" + e + "' has already been defined.");
                return y[e] = new A(f({
                    name: e
                }, t)), n && (w.push({
                    name: e,
                    def: n
                }), b || M()), this
            }, a(S, function(e, t) {
                y[t] = new A(f({
                    name: t
                }, e))
            }), y = c(y, {}), this.$get = ["$injector", function(e) {
                return E = e, b = !1, M(), a(S, function(e, t) {
                    y[t] || (y[t] = new A(e))
                }), this
            }], this.Param = function(t, i, a, l) {
                function w(e) {
                    var t = o(e) ? d(e) : [],
                        n = v(t, "value") === -1 && v(t, "type") === -1 && v(t, "squash") === -1 && v(t, "array") === -1;
                    return n && (e = {
                        value: e
                    }), e.$$fn = C(e.value) ? e.value : function() {
                        return e.value
                    }, e
                }

                function S(e, n, r) {
                    if (e.type && n) throw new Error("Param '" + t + "' has two type configurations.");
                    return n ? n : e.type ? e.type instanceof A ? e.type : new A(e.type) : r === "config" ? y.any : y.string
                }

                function N() {
                    var e = {
                            array: l === "search" ? "auto" : !1
                        },
                        n = t.match(/\[\]$/) ? {
                            array: !0
                        } : {};
                    return f(e, n, a).array
                }

                function k(e, t) {
                    var n = e.squash;
                    if (!t || n === !1) return !1;
                    if (!r(n) || n == null) return h;
                    if (n === !0 || s(n)) return n;
                    throw new Error("Invalid squash policy: '" + n + "'. Valid policies: false, true, or arbitrary string")
                }

                function L(e, t, r, i) {
                    var o, a, f = [{
                        from: "",
                        to: r || t ? n : ""
                    }, {
                        from: null,
                        to: r || t ? n : ""
                    }];
                    return o = u(e.replace) ? e.replace : [], s(i) && o.push({
                        from: i,
                        to: n
                    }), a = T(o, function(e) {
                        return e.from
                    }), x(f, function(e) {
                        return v(a, e.from) === -1
                    }).concat(o)
                }

                function O() {
                    if (!E) throw new Error("Injectable functions cannot be called at configuration time");
                    return E.invoke(a.$$fn)
                }

                function M(e) {
                    function t(e) {
                        return function(t) {
                            return t.from === e
                        }
                    }

                    function n(e) {
                        var n = T(x(c.replace, t(e)), function(e) {
                            return e.to
                        });
                        return n.length ? n[0] : e
                    }
                    return e = n(e), r(e) ? c.type.decode(e) : O()
                }

                function _() {
                    return "{Param:" + t + " " + i + " squash: '" + g + "' optional: " + m + "}"
                }
                var c = this;
                a = w(a), i = S(a, i, l);
                var p = N();
                i = p ? i.$asArray(p, l === "search") : i, i.name === "string" && !p && l === "path" && a.value === n && (a.value = "");
                var m = a.value !== n,
                    g = k(a, m),
                    b = L(a, p, m, g);
                f(this, {
                    id: t,
                    type: i,
                    location: l,
                    array: p,
                    squash: g,
                    replace: b,
                    isOptional: m,
                    value: M,
                    dynamic: n,
                    config: a,
                    toString: _
                })
            }, _.prototype = {
                $$new: function() {
                    return c(this, f(new _, {
                        $$parent: this
                    }))
                },
                $$keys: function() {
                    var e = [],
                        t = [],
                        n = this,
                        r = d(_.prototype);
                    while (n) t.push(n), n = n.$$parent;
                    return t.reverse(), a(t, function(t) {
                        a(d(t), function(t) {
                            v(e, t) === -1 && v(r, t) === -1 && e.push(t)
                        })
                    }), e
                },
                $$values: function(e) {
                    var t = {},
                        n = this;
                    return a(n.$$keys(), function(r) {
                        t[r] = n[r].value(e && e[r])
                    }), t
                },
                $$equals: function(e, t) {
                    var n = !0,
                        r = this;
                    return a(r.$$keys(), function(i) {
                        var s = e && e[i],
                            o = t && t[i];
                        r[i].type.equals(s, o) || (n = !1)
                    }), n
                },
                $$validates: function(t) {
                    var n = !0,
                        r, i, s, o = this;
                    return a(this.$$keys(), function(e) {
                        s = o[e], i = t[e], r = !i && s.isOptional, n = n && (r || !!s.type.is(i))
                    }), n
                },
                $$parent: n
            }, this.ParamSet = _
        }

        function M(e, o) {
            function p(e) {
                var t = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);
                return t != null ? t[1].replace(/\\(.)/g, "$1") : ""
            }

            function d(e, t) {
                return e.replace(/\$(\$|\d{1,2})/, function(e, n) {
                    return t[n === "$" ? 0 : Number(n)]
                })
            }

            function v(e, t, n) {
                if (!n) return !1;
                var i = e.invoke(t, t, {
                    $match: n
                });
                return r(i) ? i : !0
            }

            function m(r, i, o, u) {
                function v(e, t, n) {
                    return f === "/" ? e : t ? f.slice(0, -1) + e : n ? f.slice(1) + e : e
                }

                function m(e) {
                    function i(e) {
                        var t = e(o, r);
                        return t ? (s(t) && r.replace().url(t), !0) : !1
                    }
                    if (e && e.defaultPrevented) return;
                    var t = d && r.url() === d;
                    d = n;
                    if (t) return !0;
                    var u = a.length,
                        f;
                    for (f = 0; f < u; f++)
                        if (i(a[f])) return;
                    l && i(l)
                }

                function g() {
                    return h = h || i.$on("$locationChangeSuccess", m), h
                }
                var f = u.baseHref(),
                    p = r.url(),
                    d;
                return c || g(), {
                    sync: function() {
                        m()
                    },
                    listen: function() {
                        return g()
                    },
                    update: function(e) {
                        if (e) {
                            p = r.url();
                            return
                        }
                        if (r.url() === p) return;
                        r.url(p), r.replace()
                    },
                    push: function(e, t, i) {
                        r.url(e.format(t || {})), d = i && i.$$avoidResync ? r.url() : n, i && i.replace && r.replace()
                    },
                    href: function(n, i, s) {
                        if (!n.validates(i)) return null;
                        var o = e.html5Mode();
                        t.isObject(o) && (o = o.enabled);
                        var u = n.format(i);
                        s = s || {}, !o && u !== null && (u = "#" + e.hashPrefix() + u), u = v(u, o, s.absolute);
                        if (!s.absolute || !u) return u;
                        var a = !o && u ? "/" : "",
                            f = r.port();
                        return f = f === 80 || f === 443 ? "" : ":" + f, [r.protocol(), "://", r.host(), f, a, u].join("")
                    }
                }
            }
            var a = [],
                l = null,
                c = !1,
                h;
            this.rule = function(e) {
                if (!i(e)) throw new Error("'rule' must be a function");
                return a.push(e), this
            }, this.otherwise = function(e) {
                if (s(e)) {
                    var t = e;
                    e = function() {
                        return t
                    }
                } else if (!i(e)) throw new Error("'rule' must be a function");
                return l = e, this
            }, this.when = function(e, t) {
                var n, r = s(t);
                s(e) && (e = o.compile(e));
                if (!r && !i(t) && !u(t)) throw new Error("invalid 'handler' in when()");
                var a = {
                        matcher: function(e, t) {
                            return r && (n = o.compile(t), t = ["$match", function(e) {
                                return n.format(e)
                            }]), f(function(n, r) {
                                return v(n, t, e.exec(r.path(), r.search()))
                            }, {
                                prefix: s(e.prefix) ? e.prefix : ""
                            })
                        },
                        regex: function(e, t) {
                            if (e.global || e.sticky) throw new Error("when() RegExp must not be global or sticky");
                            return r && (n = t, t = ["$match", function(e) {
                                return d(n, e)
                            }]), f(function(n, r) {
                                return v(n, t, e.exec(r.path()))
                            }, {
                                prefix: p(e)
                            })
                        }
                    },
                    l = {
                        matcher: o.isMatcher(e),
                        regex: e instanceof RegExp
                    };
                for (var c in l)
                    if (l[c]) return this.rule(a[c](e, t));
                throw new Error("invalid 'what' in when()")
            }, this.deferIntercept = function(e) {
                e === n && (e = !0), c = e
            }, this.$get = m, m.$inject = ["$location", "$rootScope", "$injector", "$browser"]
        }

        function _(e, h) {
            function N(e) {
                return e.indexOf(".") === 0 || e.indexOf("^") === 0
            }

            function C(e, t) {
                if (!e) return n;
                var r = s(e),
                    i = r ? e : e.name,
                    o = N(i);
                if (o) {
                    if (!t) throw new Error("No reference point given for path '" + i + "'");
                    t = C(t);
                    var u = i.split("."),
                        a = 0,
                        f = u.length,
                        l = t;
                    for (; a < f; a++) {
                        if (u[a] === "" && a === 0) {
                            l = t;
                            continue
                        }
                        if (u[a] === "^") {
                            if (!l.parent) throw new Error("Path '" + i + "' not valid for state '" + t.name + "'");
                            l = l.parent;
                            continue
                        }
                        break
                    }
                    u = u.slice(a).join("."), i = l.name + (l.name && u ? "." : "") + u
                }
                var c = b[i];
                return c && (r || !r && (c === e || c.self === e)) ? c : n
            }

            function L(e, t) {
                E[e] || (E[e] = []), E[e].push(t)
            }

            function A(e) {
                var t = E[e] || [];
                while (t.length) O(t.shift())
            }

            function O(t) {
                t = c(t, {
                    self: t,
                    resolve: t.resolve || {},
                    toString: function() {
                        return this.name
                    }
                });
                var n = t.name;
                if (!s(n) || n.indexOf("@") >= 0) throw new Error("State must have a valid name");
                if (b.hasOwnProperty(n)) throw new Error("State '" + n + "'' is already defined");
                var r = n.indexOf(".") !== -1 ? n.substring(0, n.lastIndexOf(".")) : s(t.parent) ? t.parent : o(t.parent) && s(t.parent.name) ? t.parent.name : "";
                if (r && !b[r]) return L(r, t.self);
                for (var u in x) i(x[u]) && (t[u] = x[u](t, x.$delegates[u]));
                return b[n] = t, !t[S] && t.url && e.when(t.url, ["$match", "$stateParams", function(e, n) {
                    (w.$current.navigable != t || !g(e, n)) && w.transitionTo(t, e, {
                        inherit: !0,
                        location: !1
                    })
                }]), A(n), t
            }

            function M(e) {
                return e.indexOf("*") > -1
            }

            function _(e) {
                var t = e.split("."),
                    n = w.$current.name.split(".");
                t[0] === "**" && (n = n.slice(v(n, t[1])), n.unshift("**")), t[t.length - 1] === "**" && (n.splice(v(n, t[t.length - 2]) + 1, Number.MAX_VALUE), n.push("**"));
                if (t.length != n.length) return !1;
                for (var r = 0, i = t.length; r < i; r++) t[r] === "*" && (n[r] = "*");
                return n.join("") === t.join("")
            }

            function D(e, t) {
                return s(e) && !r(t) ? x[e] : !i(t) || !s(e) ? this : (x[e] && !x.$delegates[e] && (x.$delegates[e] = x[e]), x[e] = t, this)
            }

            function P(e, t) {
                return o(e) ? t = e : t.name = e, O(t), this
            }

            function H(e, o, h, v, E, x, N, k, L) {
                function H(t, n, r, i) {
                    var s = e.$broadcast("$stateNotFound", t, n, r);
                    if (s.defaultPrevented) return N.update(), D;
                    if (!s.retry) return null;
                    if (i.$retry) return N.update(), P;
                    var u = w.transition = o.when(s.retry);
                    return u.then(function() {
                        return u !== w.transition ? A : (t.options.$retry = !0, w.transitionTo(t.to, t.toParams, t.options))
                    }, function() {
                        return D
                    }), N.update(), u
                }

                function j(e, n, r, s, f, l) {
                    var c = r ? n : y(e.params.$$keys(), n),
                        p = {
                            $stateParams: c
                        };
                    f.resolve = E.resolve(e.resolve, p, f.resolve, e);
                    var d = [f.resolve.then(function(e) {
                        f.globals = e
                    })];
                    return s && d.push(s), a(e.views, function(n, r) {
                        var s = n.resolve && n.resolve !== e.resolve ? n.resolve : {};
                        s.$template = [function() {
                            return h.load(r, {
                                view: n,
                                locals: p,
                                params: c,
                                notify: l.notify
                            }) || ""
                        }], d.push(E.resolve(s, p, f.resolve, e).then(function(o) {
                            if (i(n.controllerProvider) || u(n.controllerProvider)) {
                                var a = t.extend({}, s, p);
                                o.$$controller = v.invoke(n.controllerProvider, null, a)
                            } else o.$$controller = n.controller;
                            o.$$state = e, o.$$controllerAs = n.controllerAs, f[r] = o
                        }))
                    }), o.all(d).then(function(e) {
                        return f
                    })
                }
                var A = o.reject(new Error("transition superseded")),
                    O = o.reject(new Error("transition prevented")),
                    D = o.reject(new Error("transition aborted")),
                    P = o.reject(new Error("transition failed"));
                return p.locals = {
                    resolve: null,
                    globals: {
                        $stateParams: {}
                    }
                }, w = {
                    params: {},
                    current: p.self,
                    $current: p,
                    transition: null
                }, w.reload = function() {
                    return w.transitionTo(w.current, x, {
                        reload: !0,
                        inherit: !1,
                        notify: !0
                    })
                }, w.go = function(t, n, r) {
                    return w.transitionTo(t, n, f({
                        inherit: !0,
                        relative: w.$current
                    }, r))
                }, w.transitionTo = function(n, i, s) {
                    i = i || {}, s = f({
                        location: !0,
                        inherit: !1,
                        relative: null,
                        notify: !0,
                        reload: !1,
                        $retry: !1
                    }, s || {});
                    var u = w.$current,
                        a = w.params,
                        h = u.path,
                        d, g = C(n, s.relative);
                    if (!r(g)) {
                        var b = {
                                to: n,
                                toParams: i,
                                options: s
                            },
                            E = H(b, u.self, a, s);
                        if (E) return E;
                        n = b.to, i = b.toParams, s = b.options, g = C(n, s.relative);
                        if (!r(g)) throw s.relative ? new Error("Could not resolve '" + n + "' from state '" + s.relative + "'") : new Error("No such state '" + n + "'")
                    }
                    if (g[S]) throw new Error("Cannot transition to abstract state '" + n + "'");
                    s.inherit && (i = m(x, i || {}, w.$current, g));
                    if (!g.params.$$validates(i)) return P;
                    i = g.params.$$values(i), n = g;
                    var T = n.path,
                        k = 0,
                        L = T[k],
                        M = p.locals,
                        _ = [];
                    if (!s.reload)
                        while (L && L === h[k] && L.ownParams.$$equals(i, a)) M = _[k] = L.locals, k++, L = T[k];
                    if (B(n, u, M, s)) return n.self.reloadOnSearch !== !1 && N.update(), w.transition = null, o.when(w.current);
                    i = y(n.params.$$keys(), i || {});
                    if (s.notify && e.$broadcast("$stateChangeStart", n.self, i, u.self, a).defaultPrevented) return N.update(), O;
                    var D = o.when(M);
                    for (var F = k; F < T.length; F++, L = T[F]) M = _[F] = c(M), D = j(L, i, L === n, D, M, s);
                    var I = w.transition = D.then(function() {
                        var t, r, o;
                        if (w.transition !== I) return A;
                        for (t = h.length - 1; t >= k; t--) o = h[t], o.self.onExit && v.invoke(o.self.onExit, o.self, o.locals.globals), o.locals = null;
                        for (t = k; t < T.length; t++) r = T[t], r.locals = _[t], r.self.onEnter && v.invoke(r.self.onEnter, r.self, r.locals.globals);
                        return w.transition !== I ? A : (w.$current = n, w.current = n.self, w.params = i, l(w.params, x), w.transition = null, s.location && n.navigable && N.push(n.navigable.url, n.navigable.locals.globals.$stateParams, {
                            $$avoidResync: !0,
                            replace: s.location === "replace"
                        }), s.notify && e.$broadcast("$stateChangeSuccess", n.self, i, u.self, a), N.update(!0), w.current)
                    }, function(t) {
                        return w.transition !== I ? A : (w.transition = null, d = e.$broadcast("$stateChangeError", n.self, i, u.self, a, t), d.defaultPrevented || N.update(), o.reject(t))
                    });
                    return I
                }, w.is = function(t, i, s) {
                    s = f({
                        relative: w.$current
                    }, s || {});
                    var o = C(t, s.relative);
                    return r(o) ? w.$current !== o ? !1 : i ? g(o.params.$$values(i), x) : !0 : n
                }, w.includes = function(t, i, o) {
                    o = f({
                        relative: w.$current
                    }, o || {});
                    if (s(t) && M(t)) {
                        if (!_(t)) return !1;
                        t = w.$current.name
                    }
                    var u = C(t, o.relative);
                    return r(u) ? r(w.$current.includes[u.name]) ? i ? g(u.params.$$values(i), x, d(i)) : !0 : !1 : n
                }, w.href = function(t, i, s) {
                    s = f({
                        lossy: !0,
                        inherit: !0,
                        absolute: !1,
                        relative: w.$current
                    }, s || {});
                    var o = C(t, s.relative);
                    if (!r(o)) return null;
                    s.inherit && (i = m(x, i || {}, w.$current, o));
                    var u = o && s.lossy ? o.navigable : o;
                    return !u || u.url === n || u.url === null ? null : N.href(u.url, y(o.params.$$keys(), i || {}), {
                        absolute: s.absolute
                    })
                }, w.get = function(e, t) {
                    if (arguments.length === 0) return T(d(b), function(e) {
                        return b[e].self
                    });
                    var n = C(e, t || w.$current);
                    return n && n.self ? n.self : null
                }, w
            }

            function B(e, t, n, r) {
                if (e === t && (n === t.locals && !r.reload || e.self.reloadOnSearch === !1)) return !0
            }
            var p, b = {},
                w, E = {},
                S = "abstract",
                x = {
                    parent: function(e) {
                        if (r(e.parent) && e.parent) return C(e.parent);
                        var t = /^(.+)\.[^.]+$/.exec(e.name);
                        return t ? C(t[1]) : p
                    },
                    data: function(e) {
                        return e.parent && e.parent.data && (e.data = e.self.data = f({}, e.parent.data, e.data)), e.data
                    },
                    url: function(e) {
                        var t = e.url,
                            n = {
                                params: e.params || {}
                            };
                        if (s(t)) return t.charAt(0) == "^" ? h.compile(t.substring(1), n) : (e.parent.navigable || p).url.concat(t, n);
                        if (!t || h.isMatcher(t)) return t;
                        throw new Error("Invalid url '" + t + "' in state '" + e + "'")
                    },
                    navigable: function(e) {
                        return e.url ? e : e.parent ? e.parent.navigable : null
                    },
                    ownParams: function(e) {
                        var t = e.url && e.url.params || new k.ParamSet;
                        return a(e.params || {}, function(e, n) {
                            t[n] || (t[n] = new k.Param(n, null, e, "config"))
                        }), t
                    },
                    params: function(e) {
                        return e.parent && e.parent.params ? f(e.parent.params.$$new(), e.ownParams) : new k.ParamSet
                    },
                    views: function(e) {
                        var t = {};
                        return a(r(e.views) ? e.views : {
                            "": e
                        }, function(n, r) {
                            r.indexOf("@") < 0 && (r += "@" + e.parent.name), t[r] = n
                        }), t
                    },
                    path: function(e) {
                        return e.parent ? e.parent.path.concat(e) : []
                    },
                    includes: function(e) {
                        var t = e.parent ? f({}, e.parent.includes) : {};
                        return t[e.name] = !0, t
                    },
                    $delegates: {}
                };
            p = O({
                name: "",
                url: "^",
                views: null,
                "abstract": !0
            }), p.navigable = null, this.decorator = D, this.state = P, this.$get = H, H.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
        }

        function D() {
            function e(e, t) {
                return {
                    load: function(r, i) {
                        var s, o = {
                            template: null,
                            controller: null,
                            view: null,
                            locals: null,
                            notify: !0,
                            async: !0,
                            params: {}
                        };
                        return i = f(o, i), i.view && (s = t.fromConfig(i.view, i.params, i.locals)), s && i.notify && e.$broadcast("$viewContentLoading", i), s
                    }
                }
            }
            this.$get = e, e.$inject = ["$rootScope", "$templateFactory"]
        }

        function P() {
            var e = !1;
            this.useAnchorScroll = function() {
                e = !0
            }, this.$get = ["$anchorScroll", "$timeout", function(t, n) {
                return e ? t : function(e) {
                    n(function() {
                        e[0].scrollIntoView()
                    }, 0, !1)
                }
            }]
        }

        function H(e, n, r, i) {
            function s() {
                return n.has ? function(e) {
                    return n.has(e) ? n.get(e) : null
                } : function(e) {
                    try {
                        return n.get(e)
                    } catch (t) {
                        return null
                    }
                }
            }

            function f(e, t) {
                var n = function() {
                    return {
                        enter: function(e, t, n) {
                            t.after(e), n()
                        },
                        leave: function(e, t) {
                            e.remove(), t()
                        }
                    }
                };
                if (a) return {
                    enter: function(e, t, n) {
                        var r = a.enter(e, null, t, n);
                        r && r.then && r.then(n)
                    },
                    leave: function(e, t) {
                        var n = a.leave(e, t);
                        n && n.then && n.then(t)
                    }
                };
                if (u) {
                    var r = u && u(t, e);
                    return {
                        enter: function(e, t, n) {
                            r.enter(e, null, t), n()
                        },
                        leave: function(e, t) {
                            r.leave(e), t()
                        }
                    }
                }
                return n()
            }
            var o = s(),
                u = o("$animator"),
                a = o("$animate"),
                l = {
                    restrict: "ECA",
                    terminal: !0,
                    priority: 400,
                    transclude: "element",
                    compile: function(n, s, o) {
                        return function(n, s, u) {
                            function m() {
                                a && (a.remove(), a = null), c && (c.$destroy(), c = null), l && (v.leave(l, function() {
                                    a = null
                                }), a = l, l = null)
                            }

                            function g(a) {
                                var f, g = j(n, u, s, i),
                                    y = g && e.$current && e.$current.locals[g];
                                if (!a && y === h) return;
                                f = n.$new(), h = e.$current.locals[g];
                                var b = o(f, function(e) {
                                    v.enter(e, s, function() {
                                        c && c.$emit("$viewContentAnimationEnded"), (t.isDefined(d) && !d || n.$eval(d)) && r(e)
                                    }), m()
                                });
                                l = b, c = f, c.$emit("$viewContentLoaded"), c.$eval(p)
                            }
                            var a, l, c, h, p = u.onload || "",
                                d = u.autoscroll,
                                v = f(u, n);
                            n.$on("$stateChangeSuccess", function() {
                                g(!1)
                            }), n.$on("$viewContentLoading", function() {
                                g(!1)
                            }), g(!0)
                        }
                    }
                };
            return l
        }

        function B(e, t, n, r) {
            return {
                restrict: "ECA",
                priority: -400,
                compile: function(i) {
                    var s = i.html();
                    return function(i, o, u) {
                        var a = n.$current,
                            f = j(i, u, o, r),
                            l = a && a.locals[f];
                        if (!l) return;
                        o.data("$uiView", {
                            name: f,
                            state: l.$$state
                        }), o.html(l.$template ? l.$template : s);
                        var c = e(o.contents());
                        if (l.$$controller) {
                            l.$scope = i;
                            var h = t(l.$$controller, l);
                            l.$$controllerAs && (i[l.$$controllerAs] = h), o.data("$ngControllerController", h), o.children().data("$ngControllerController", h)
                        }
                        c(i)
                    }
                }
            }
        }

        function j(e, t, n, r) {
            var i = r(t.uiView || t.name || "")(e),
                s = n.inheritedData("$uiView");
            return i.indexOf("@") >= 0 ? i : i + "@" + (s ? s.state.name : "")
        }

        function F(e, t) {
            var n = e.match(/^\s*({[^}]*})\s*$/),
                r;
            n && (e = t + "(" + n[1] + ")"), r = e.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
            if (!r || r.length !== 4) throw new Error("Invalid state ref '" + e + "'");
            return {
                state: r[1],
                paramExpr: r[3] || null
            }
        }

        function I(e) {
            var t = e.parent().inheritedData("$uiView");
            if (t && t.state && t.state.name) return t.state
        }

        function q(e, n) {
            var r = ["location", "inherit", "reload"];
            return {
                restrict: "A",
                require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
                link: function(i, s, o, u) {
                    var a = F(o.uiSref, e.current.name),
                        f = null,
                        l = null,
                        c = I(s) || e.$current,
                        h = null,
                        p = s.prop("tagName") === "A",
                        d = s[0].nodeName === "FORM",
                        v = d ? "action" : "href",
                        m = !0,
                        g = {
                            relative: c,
                            inherit: !0
                        },
                        y = i.$eval(o.uiSrefOpts) || {};
                    t.forEach(r, function(e) {
                        e in y && (g[e] = y[e])
                    });
                    var b = function(n) {
                        n && (f = t.copy(n));
                        if (!m) return;
                        h = e.href(a.state, f, g);
                        var r = u[1] || u[0];
                        r && r.$$setStateInfo(a.state, f);
                        if (h === null) return m = !1, !1;
                        o.$set(v, h)
                    };
                    a.paramExpr && (i.$watch(a.paramExpr, function(e, t) {
                        e !== f && b(e)
                    }, !0), f = t.copy(i.$eval(a.paramExpr))), b();
                    if (d) return;
                    s.bind("click", function(t) {
                        var r = t.which || t.button;
                        if (!(r > 1 || t.ctrlKey || t.metaKey || t.shiftKey || s.attr("target"))) {
                            var i = n(function() {
                                e.go(a.state, f, g)
                            });
                            t.preventDefault();
                            var o = p && !h ? 1 : 0;
                            t.preventDefault = function() {
                                o-- <= 0 && n.cancel(i)
                            }
                        }
                    })
                }
            }
        }

        function R(e, t, n) {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$attrs", function(t, r, i) {
                    function a() {
                        f() ? r.addClass(u) : r.removeClass(u)
                    }

                    function f() {
                        return typeof i.uiSrefActiveEq != "undefined" ? s && e.is(s.name, o) : s && e.includes(s.name, o)
                    }
                    var s, o, u;
                    u = n(i.uiSrefActiveEq || i.uiSrefActive || "", !1)(t), this.$$setStateInfo = function(t, n) {
                        s = e.get(t, I(r)), o = n, a()
                    }, t.$on("$stateChangeSuccess", a)
                }]
            }
        }

        function U(e) {
            var t = function(t) {
                return e.is(t)
            };
            return t.$stateful = !0, t
        }

        function z(e) {
            var t = function(t) {
                return e.includes(t)
            };
            return t.$stateful = !0, t
        }
        var r = t.isDefined,
            i = t.isFunction,
            s = t.isString,
            o = t.isObject,
            u = t.isArray,
            a = t.forEach,
            f = t.extend,
            l = t.copy;
        t.module("ui.router.util", ["ng"]), t.module("ui.router.router", ["ui.router.util"]), t.module("ui.router.state", ["ui.router.router", "ui.router.util"]), t.module("ui.router", ["ui.router.state"]), t.module("ui.router.compat", ["ui.router"]), N.$inject = ["$q", "$injector"], t.module("ui.router.util").service("$resolve", N), C.$inject = ["$http", "$templateCache", "$injector"], t.module("ui.router.util").service("$templateFactory", C);
        var k;
        L.prototype.concat = function(e, t) {
            var n = {
                caseInsensitive: k.caseInsensitive(),
                strict: k.strictMode(),
                squash: k.defaultSquashPolicy()
            };
            return new L(this.sourcePath + e + this.sourceSearch, f(n, t), this)
        }, L.prototype.toString = function() {
            return this.source
        }, L.prototype.exec = function(e, t) {
            function c(e) {
                function t(e) {
                    return e.split("").reverse().join("")
                }

                function n(e) {
                    return e.replace(/\\-/, "-")
                }
                var r = t(e).split(/-(?!\\)/),
                    i = T(r, t);
                return T(i, n).reverse()
            }
            var n = this.regexp.exec(e);
            if (!n) return null;
            t = t || {};
            var r = this.parameters(),
                i = r.length,
                s = this.segments.length - 1,
                o = {},
                u, a, f, l;
            if (s !== n.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
            for (u = 0; u < s; u++) {
                l = r[u];
                var h = this.params[l],
                    p = n[u + 1];
                for (a = 0; a < h.replace; a++) h.replace[a].from === p && (p = h.replace[a].to);
                p && h.array === !0 && (p = c(p)), o[l] = h.value(p)
            }
            for (; u < i; u++) l = r[u], o[l] = this.params[l].value(t[l]);
            return o
        }, L.prototype.parameters = function(e) {
            return r(e) ? this.params[e] || null : this.$$paramNames
        }, L.prototype.validates = function(e) {
            return this.params.$$validates(e)
        }, L.prototype.format = function(e) {
            function c(e) {
                return encodeURIComponent(e).replace(/-/g, function(e) {
                    return "%5C%" + e.charCodeAt(0).toString(16).toUpperCase()
                })
            }
            e = e || {};
            var t = this.segments,
                n = this.parameters(),
                r = this.params;
            if (!this.validates(e)) return null;
            var i, o = !1,
                a = t.length - 1,
                f = n.length,
                l = t[0];
            for (i = 0; i < f; i++) {
                var h = i < a,
                    p = n[i],
                    d = r[p],
                    v = d.value(e[p]),
                    m = d.isOptional && d.type.equals(d.value(), v),
                    g = m ? d.squash : !1,
                    y = d.type.encode(v);
                if (h) {
                    var b = t[i + 1];
                    if (g === !1) y != null && (u(y) ? l += T(y, c).join("-") : l += encodeURIComponent(y)), l += b;
                    else if (g === !0) {
                        var w = l.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                        l += b.match(w)[1]
                    } else s(g) && (l += g + b)
                } else {
                    if (y == null || m && g !== !1) continue;
                    u(y) || (y = [y]), y = T(y, encodeURIComponent).join("&" + p + "="), l += (o ? "&" : "?") + (p + "=" + y), o = !0
                }
            }
            return l
        }, A.prototype.is = function(e, t) {
            return !0
        }, A.prototype.encode = function(e, t) {
            return e
        }, A.prototype.decode = function(e, t) {
            return e
        }, A.prototype.equals = function(e, t) {
            return e == t
        }, A.prototype.$subPattern = function() {
            var e = this.pattern.toString();
            return e.substr(1, e.length - 2)
        }, A.prototype.pattern = /.*/, A.prototype.toString = function() {
            return "{Type:" + this.name + "}"
        }, A.prototype.$asArray = function(e, t) {
            function i(e, t) {
                function i(e, t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }

                function s(e) {
                    return u(e) ? e : r(e) ? [e] : []
                }

                function o(e) {
                    switch (e.length) {
                        case 0:
                            return n;
                        case 1:
                            return t === "auto" ? e[0] : e;
                        default:
                            return e
                    }
                }

                function a(e) {
                    return !e
                }

                function f(e, t) {
                    return function(r) {
                        r = s(r);
                        var i = T(r, e);
                        return t === !0 ? x(i, a).length === 0 : o(i)
                    }
                }

                function l(e) {
                    return function(n, r) {
                        var i = s(n),
                            o = s(r);
                        if (i.length !== o.length) return !1;
                        for (var u = 0; u < i.length; u++)
                            if (!e(i[u], o[u])) return !1;
                        return !0
                    }
                }
                this.encode = f(i(e, "encode")), this.decode = f(i(e, "decode")), this.is = f(i(e, "is"), !0), this.equals = l(i(e, "equals")), this.pattern = e.pattern, this.$arrayMode = t
            }
            if (!e) return this;
            if (e === "auto" && !t) throw new Error("'auto' array mode is for query parameters only");
            return new i(this, e)
        }, t.module("ui.router.util").provider("$urlMatcherFactory", O), t.module("ui.router.util").run(["$urlMatcherFactory", function(e) {}]), M.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.router").provider("$urlRouter", M), _.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.state").value("$stateParams", {}).provider("$state", _), D.$inject = [], t.module("ui.router.state").provider("$view", D), t.module("ui.router.state").provider("$uiViewScroll", P), H.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], B.$inject = ["$compile", "$controller", "$state", "$interpolate"], t.module("ui.router.state").directive("uiView", H), t.module("ui.router.state").directive("uiView", B), q.$inject = ["$state", "$timeout"], R.$inject = ["$state", "$stateParams", "$interpolate"], t.module("ui.router.state").directive("uiSref", q).directive("uiSrefActive", R).directive("uiSrefActiveEq", R), U.$inject = ["$state"], z.$inject = ["$state"], t.module("ui.router.state").filter("isState", U).filter("includedByState", z)
    }(window, window.angular), define("uiRouter", ["angular"], function(e) {
        return function() {
            var t, n;
            return t || e.uiRouter
        }
    }(this)),
    function() {
        "use strict";
        angular.module("rn-lazy", []).directive("rnLazyBackground", ["$document", "$parse", function(e, t) {
            return {
                restrict: "A",
                link: function(n, r, i) {
                    function s(e) {
                        o && (e.html(""), e.append(o), e.css({
                            "background-image": null
                        }))
                    }
                    var o = null;
                    angular.isDefined(i.rnLazyLoader) && (o = angular.element(e[0].querySelector(i.rnLazyLoader)).clone());
                    var u = t(i.rnLazyBackground);
                    n.$watch(u, function(t) {
                        s(r);
                        var a = u(n),
                            f = e[0].createElement("img");
                        f.onload = function() {
                            o && o.remove(), angular.isDefined(i.rnLazyLoadingClass) && r.removeClass(i.rnLazyLoadingClass), angular.isDefined(i.rnLazyLoadedClass) && r.addClass(i.rnLazyLoadedClass), r.css({
                                "background-image": "url(" + this.src + ")"
                            })
                        }, f.onerror = function() {}, f.src = a
                    })
                }
            }
        }])
    }(), define("rnLazy", ["angular"], function() {}),
    function() {
        "use strict";

        function e(e) {
            return ["$rootScope", "$window", "$log", function(t, n, r) {
                function a(e) {
                    var t;
                    try {
                        t = n[e]
                    } catch (r) {
                        t = !1
                    }
                    if (t && e === "localStorage") {
                        var i = "__" + Math.round(Math.random() * 1e7);
                        try {
                            localStorage.setItem(i, i), localStorage.removeItem(i)
                        } catch (r) {
                            t = !1
                        }
                    }
                    return t
                }
                var i, s, o, u;
                i = a(e) || (r.warn("This browser does not support Web Storage!"), {}), s = {
                    $default: function(e) {
                        for (var t in e) angular.isDefined(s[t]) || (s[t] = e[t]);
                        return s
                    },
                    $reset: function(e) {
                        for (var t in s) "$" === t[0] || delete s[t];
                        return s.$default(e)
                    }
                };
                for (var f = 0, l; f < i.length; f++)(l = i.key(f)) && "ngStorage-" === l.slice(0, 10) && (s[l.slice(10)] = angular.fromJson(i.getItem(l)));
                return o = angular.copy(s), t.$watch(function() {
                    u || (u = setTimeout(function() {
                        u = null;
                        if (!angular.equals(s, o)) {
                            angular.forEach(s, function(e, t) {
                                angular.isDefined(e) && "$" !== t[0] && i.setItem("ngStorage-" + t, angular.toJson(e)), delete o[t]
                            });
                            for (var e in o) i.removeItem("ngStorage-" + e);
                            o = angular.copy(s)
                        }
                    }, 100))
                }), "localStorage" === e && n.addEventListener && n.addEventListener("storage", function(e) {
                    "ngStorage-" === e.key.slice(0, 10) && (e.newValue ? s[e.key.slice(10)] = angular.fromJson(e.newValue) : delete s[e.key.slice(10)], o = angular.copy(s), t.$apply())
                }), s
            }]
        }
        angular.module("ngStorage", []).factory("$localStorage", e("localStorage")).factory("$sessionStorage", e("sessionStorage"))
    }(), define("ngStorage", ["angular"], function(e) {
        return function() {
            var t, n;
            return t || e.ngStorage
        }
    }(this)),
    function(e, t, n) {
        "use strict";

        function i() {
            this.$get = ["$$sanitizeUri", function(e) {
                return function(t) {
                    var n = [];
                    return C(t, M(n, function(t, n) {
                        return !/^unsafe/.test(e(t, n))
                    })), n.join("")
                }
            }]
        }

        function s(e) {
            var n = [],
                r = M(n, t.noop);
            return r.chars(e), n.join("")
        }

        function N(e) {
            var t = {},
                n = e.split(","),
                r;
            for (r = 0; r < n.length; r++) t[n[r]] = !0;
            return t
        }

        function C(e, n) {
            function x(e, r, i, s) {
                r = t.lowercase(r);
                if (b[r])
                    while (m.last() && w[m.last()]) T("", m.last());
                y[r] && m.last() == r && T("", r), s = v[r] || !!s, s || m.push(r);
                var o = {};
                i.replace(a, function(e, t, n, r, i) {
                    var s = n || r || i || "";
                    o[t] = A(s)
                }), n.start && n.start(r, o, s)
            }

            function T(e, r) {
                var i = 0,
                    s;
                r = t.lowercase(r);
                if (r)
                    for (i = m.length - 1; i >= 0; i--)
                        if (m[i] == r) break;
                if (i >= 0) {
                    for (s = m.length - 1; s >= i; s--) n.end && n.end(m[s]);
                    m.length = i
                }
            }
            var i, s, d, m = [],
                g = e;
            m.last = function() {
                return m[m.length - 1]
            };
            while (e) {
                s = !0;
                if (!m.last() || !E[m.last()]) {
                    e.indexOf("<!--") === 0 ? (i = e.indexOf("--", 4), i >= 0 && e.lastIndexOf("-->", i) === i && (n.comment && n.comment(e.substring(4, i)), e = e.substring(i + 3), s = !1)) : h.test(e) ? (d = e.match(h), d && (e = e.replace(d[0], ""), s = !1)) : l.test(e) ? (d = e.match(u), d && (e = e.substring(d[0].length), d[0].replace(u, T), s = !1)) : f.test(e) && (d = e.match(o), d && (e = e.substring(d[0].length), d[0].replace(o, x), s = !1));
                    if (s) {
                        i = e.indexOf("<");
                        var S = i < 0 ? e : e.substring(0, i);
                        e = i < 0 ? "" : e.substring(i), n.chars && n.chars(A(S))
                    }
                } else e = e.replace(new RegExp("(.*)<\\s*\\/\\s*" + m.last() + "[^>]*>", "i"), function(e, t) {
                    return t = t.replace(c, "$1").replace(p, "$1"), n.chars && n.chars(A(t)), ""
                }), T("", m.last());
                if (e == g) throw r("badparse", "The sanitizer was unable to parse the following block of html: {0}", e);
                g = e
            }
            T()
        }

        function A(e) {
            if (!e) return "";
            var t = L.exec(e),
                n = t[1],
                r = t[3],
                i = t[2];
            return i && (k.innerHTML = i.replace(/</g, "&lt;"), i = "textContent" in k ? k.textContent : k.innerText), n + i + r
        }

        function O(e) {
            return e.replace(/&/g, "&amp;").replace(d, function(e) {
                return "&#" + e.charCodeAt(0) + ";"
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function M(e, n) {
            var r = !1,
                i = t.bind(e, e.push);
            return {
                start: function(e, s, o) {
                    e = t.lowercase(e), !r && E[e] && (r = e), !r && S[e] === !0 && (i("<"), i(e), t.forEach(s, function(r, s) {
                        var o = t.lowercase(s),
                            u = e === "img" && o === "src" || o === "background";
                        T[o] === !0 && (x[o] !== !0 || n(r, u)) && (i(" "), i(s), i('="'), i(O(r)), i('"'))
                    }), i(o ? "/>" : ">"))
                },
                end: function(e) {
                    e = t.lowercase(e), !r && S[e] === !0 && (i("</"), i(e), i(">")), e == r && (r = !1)
                },
                chars: function(e) {
                    r || i(O(e))
                }
            }
        }
        var r = t.$$minErr("$sanitize"),
            o = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,
            u = /^<\s*\/\s*([\w:-]+)[^>]*>/,
            a = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
            f = /^</,
            l = /^<\s*\//,
            c = /<!--(.*?)-->/g,
            h = /<!DOCTYPE([^>]*?)>/i,
            p = /<!\[CDATA\[(.*?)]]>/g,
            d = /([^\#-~| |!])/g,
            v = N("area,br,col,hr,img,wbr"),
            m = N("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
            g = N("rp,rt"),
            y = t.extend({}, g, m),
            b = t.extend({}, m, N("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
            w = t.extend({}, g, N("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
            E = N("script,style"),
            S = t.extend({}, v, b, w, y),
            x = N("background,cite,href,longdesc,src,usemap"),
            T = t.extend({}, x, N("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),
            k = document.createElement("pre"),
            L = /^(\s*)([\s\S]*?)(\s*)$/;
        t.module("ngSanitize", []).provider("$sanitize", i), t.module("ngSanitize").filter("linky", ["$sanitize", function(e) {
            var n = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,
                r = /^mailto:/;
            return function(i, o) {
                function h(e) {
                    if (!e) return;
                    f.push(s(e))
                }

                function p(e, n) {
                    f.push("<a "), t.isDefined(o) && (f.push('target="'), f.push(o), f.push('" ')), f.push('href="'), f.push(e), f.push('">'), h(n), f.push("</a>")
                }
                if (!i) return i;
                var u, a = i,
                    f = [],
                    l, c;
                while (u = a.match(n)) l = u[0], u[2] == u[3] && (l = "mailto:" + l), c = u.index, h(a.substr(0, c)), p(l, u[0].replace(r, "")), a = a.substring(c + u[0].length);
                return h(a), e(f.join(""))
            }
        }])
    }(window, window.angular), define("ngSanitize", ["angular"], function() {}), angular.module("pascalprecht.translate", ["ng"]).run(["$translate", function(e) {
        var t = e.storageKey(),
            n = e.storage();
        n ? n.get(t) ? e.uses(n.get(t)) : angular.isString(e.preferredLanguage()) ? e.uses(e.preferredLanguage()) : n.set(t, e.uses()) : angular.isString(e.preferredLanguage()) && e.uses(e.preferredLanguage())
    }]), angular.module("pascalprecht.translate").provider("$translate", ["$STORAGE_KEY", function(e) {
        var t = {},
            n, r, i, s, o, u = e,
            a, f, l, c = [],
            h, p, d, v, m = ".",
            g = function(e, n) {
                if (!e && !n) return t;
                if (e && !n) {
                    if (angular.isString(e)) return t[e];
                    angular.extend(t, y(e))
                } else angular.isObject(t[e]) || (t[e] = {}), angular.extend(t[e], y(n));
                return this
            },
            y = function(e, t, n, r) {
                var i, s, o;
                t || (t = []), n || (n = {});
                for (i in e) {
                    if (!e.hasOwnProperty(i)) continue;
                    o = e[i], angular.isObject(o) ? y(o, t.concat(i), n, i) : (s = t.length ? "" + t.join(m) + m + i : i, t.length && i === r && (keyWithShortPath = "" + t.join(m), n[keyWithShortPath] = "@:" + s), n[s] = o)
                }
                return n
            };
        this.translations = g, this.addInterpolation = function(e) {
            return c.push(e), this
        }, this.useMessageFormatInterpolation = function() {
            return this.useInterpolation("$translateMessageFormatInterpolation")
        }, this.useInterpolation = function(e) {
            return l = e, this
        }, this.preferredLanguage = function(e) {
            return e ? (n = e, this) : n
        }, this.translationNotFoundIndicator = function(e) {
            return this.translationNotFoundIndicatorLeft(e), this.translationNotFoundIndicatorRight(e), this
        }, this.translationNotFoundIndicatorLeft = function(e) {
            return e ? (d = e, this) : d
        }, this.translationNotFoundIndicatorRight = function(e) {
            return e ? (v = e, this) : v
        }, this.fallbackLanguage = function(e) {
            if (e) {
                if (typeof e == "string" || angular.isArray(e)) r = e;
                return this
            }
            return r
        }, this.uses = function(e) {
            if (e) {
                if (!t[e] && !h) throw new Error("$translateProvider couldn't find translationTable for langKey: '" + e + "'");
                return i = e, this
            }
            return i
        };
        var b = function(e) {
            if (!e) return a ? a + u : u;
            u = e
        };
        this.storageKey = b, this.useUrlLoader = function(e) {
            return this.useLoader("$translateUrlLoader", {
                url: e
            })
        }, this.useStaticFilesLoader = function(e) {
            return this.useLoader("$translateStaticFilesLoader", e)
        }, this.useLoader = function(e, t) {
            return h = e, p = t || {}, this
        }, this.useLocalStorage = function() {
            return this.useStorage("$translateLocalStorage")
        }, this.useCookieStorage = function() {
            return this.useStorage("$translateCookieStorage")
        }, this.useStorage = function(e) {
            return o = e, this
        }, this.storagePrefix = function(e) {
            return e ? (a = e, this) : e
        }, this.useMissingTranslationHandlerLog = function() {
            return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")
        }, this.useMissingTranslationHandler = function(e) {
            return f = e, this
        }, this.$get = ["$log", "$injector", "$rootScope", "$q", function(e, u, a, m) {
            var y, w = u.get(l || "$translateDefaultInterpolation"),
                E = !1,
                S = {},
                x = function(e) {
                    if (!e) throw "No language key specified for loading.";
                    var t = m.defer();
                    return a.$broadcast("$translateLoadingStart"), E = !0, u.get(h)(angular.extend(p, {
                        key: e
                    })).then(function(n) {
                        a.$broadcast("$translateLoadingSuccess");
                        var r = {};
                        angular.isArray(n) ? angular.forEach(n, function(e) {
                            angular.extend(r, e)
                        }) : angular.extend(r, n), E = !1, t.resolve({
                            key: e,
                            table: r
                        }), a.$broadcast("$translateLoadingEnd")
                    }, function(e) {
                        a.$broadcast("$translateLoadingError"), t.reject(e), a.$broadcast("$translateLoadingEnd")
                    }), t.promise
                };
            if (o) {
                y = u.get(o);
                if (!y.get || !y.set) throw new Error("Couldn't use storage '" + o + "', missing get() or set() method!")
            }
            c.length > 0 && angular.forEach(c, function(e) {
                var t = u.get(e);
                t.setLocale(n || i), S[t.getInterpolationIdentifier()] = t
            });
            var T = function(e) {
                    if (e && r) {
                        if (angular.isArray(r)) {
                            var n = r.length;
                            for (var s = 0; s < n; s++)
                                if (i === t[r[s]]) return !1;
                            return !0
                        }
                        return e !== r
                    }
                    return !1
                },
                N = function(e, n, s) {
                    var o = i ? t[i] : t,
                        a = s ? S[s] : w;
                    if (o && o.hasOwnProperty(e)) return angular.isString(o[e]) && o[e].substr(0, 2) === "@:" ? N(o[e].substr(2), n, s) : a.interpolate(o[e], n);
                    f && !E && u.get(f)(e, i);
                    var l;
                    if (i && r && T(i)) {
                        typeof r == "string" ? (l = [], l.push(r)) : l = r;
                        var c = l.length;
                        for (var h = 0; h < c; h++)
                            if (i !== t[l[h]]) {
                                var p = t[l[h]][e];
                                if (p) {
                                    var m;
                                    return a.setLocale(l[h]), m = a.interpolate(p, n), a.setLocale(i), m
                                }
                            }
                    }
                    return d && (e = [d, e].join(" ")), v && (e = [e, v].join(" ")), e
                };
            N.preferredLanguage = function() {
                return n
            }, N.fallbackLanguage = function() {
                return r
            }, N.proposedLanguage = function() {
                return s
            }, N.storage = function() {
                return y
            }, N.uses = function(e) {
                function r(e) {
                    i = e, a.$broadcast("$translateChangeSuccess"), o && y.set(N.storageKey(), i), w.setLocale(i), angular.forEach(S, function(e, t) {
                        S[t].setLocale(i)
                    }), n.resolve(e), a.$broadcast("$translateChangeEnd")
                }
                if (!e) return i;
                var n = m.defer();
                return a.$broadcast("$translateChangeStart"), !t[e] && h ? (s = e, x(e).then(function(e) {
                    s = undefined, g(e.key, e.table), r(e.key)
                }, function(e) {
                    s = undefined, a.$broadcast("$translateChangeError"), n.reject(e), a.$broadcast("$translateChangeEnd")
                })) : r(e), n.promise
            }, N.storageKey = function() {
                return b()
            }, N.refresh = function(e) {
                function s() {
                    n.resolve(), a.$broadcast("$translateRefreshEnd")
                }

                function o() {
                    n.reject(), a.$broadcast("$translateRefreshEnd")
                }
                if (!h) throw new Error("Couldn't refresh translation table, no loader registered!");
                var n = m.defer();
                if (!e) {
                    a.$broadcast("$translateRefreshStart");
                    var u = [];
                    if (r)
                        if (typeof r == "string") u.push(x(r));
                        else {
                            var f = r.length;
                            for (var l = 0; l < f; l++) u.push(x(r[l]))
                        }
                    i && u.push(x(i)), u.length > 0 ? m.all(u).then(function(e) {
                        for (var n in t) t.hasOwnProperty(n) && delete t[n];
                        for (var r = 0, o = e.length; r < o; r++) g(e[r].key, e[r].table);
                        i && N.uses(i), s()
                    }, function(e) {
                        e === i && a.$broadcast("$translateChangeError"), o()
                    }) : s()
                } else if (t.hasOwnProperty(e)) {
                    a.$broadcast("$translateRefreshStart");
                    var c = x(e);
                    e === i ? c.then(function(n) {
                        t[e] = n.table, N.uses(i), s()
                    }, function() {
                        a.$broadcast("$translateChangeError"), o()
                    }) : c.then(function(n) {
                        t[e] = n.table, s()
                    }, o)
                } else n.reject();
                return n.promise
            };
            if (h) {
                angular.equals(t, {}) && N.uses(N.uses());
                if (r)
                    if (typeof r == "string" && !t[r]) x(r);
                    else {
                        var C = r.length;
                        for (var k = 0; k < C; k++) t[r[k]] || x(r[k])
                    }
            }
            return N
        }]
    }]), angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation", ["$interpolate", function(e) {
        var t = {},
            n, r = "default";
        return t.setLocale = function(e) {
            n = e
        }, t.getInterpolationIdentifier = function() {
            return r
        }, t.interpolate = function(t, n) {
            return e(t)(n)
        }, t
    }]), angular.module("pascalprecht.translate").constant("$STORAGE_KEY", "NG_TRANSLATE_LANG_KEY"), angular.module("pascalprecht.translate").directive("translate", ["$filter", "$interpolate", "$parse", function(e, t, n) {
        var r = e("translate");
        return {
            restrict: "AE",
            scope: !0,
            link: function(i, s, o) {
                o.translateInterpolation && (i.interpolation = o.translateInterpolation), o.$observe("translate", function(e) {
                    angular.equals(e, "") || e === undefined ? i.translationId = t(s.text().replace(/^\s+|\s+$/g, ""))(i.$parent) : i.translationId = e
                }), o.$observe("translateValues", function(e) {
                    e && i.$parent.$watch(function() {
                        i.interpolateParams = n(e)(i.$parent)
                    })
                }), i.$on("$translateChangeSuccess", function() {
                    s.html(r(i.translationId, i.interpolateParams, i.interpolation))
                }), i.$watch("[translationId, interpolateParams]", function(e) {
                    i.translationId && s.html(r(i.translationId, i.interpolateParams, i.interpolation))
                }, !0)
            }
        }
    }]), angular.module("pascalprecht.translate").filter("translate", ["$parse", "$translate", function(e, t) {
        return function(n, r, i) {
            return angular.isObject(r) || (r = e(r)()), t(n, r, i)
        }
    }]), define("angularTranslate", ["angular"], function() {}), angular.module("pascalprecht.translate").provider("$translatePartialLoader", [function() {
        function e(e) {
            this.name = e, this.isActive = !0, this.tables = {}
        }

        function n(e) {
            return t.hasOwnProperty(e)
        }

        function r(e) {
            return angular.isString(e) && e !== ""
        }

        function i(e) {
            if (!r(e)) throw new TypeError("Invalid type of a first argument, a non-empty string expected.");
            return n(e) && t[e].isActive
        }

        function s(e, t) {
            for (var n in t) t[n] && t[n].constructor && t[n].constructor === Object ? (e[n] = e[n] || {}, arguments.callee(e[n], t[n])) : e[n] = t[n];
            return e
        }
        e.prototype.parseUrl = function(e, t) {
            return e.replace(/\{part\}/g, this.name).replace(/\{lang\}/g, t)
        }, e.prototype.getTable = function(e, t, n, r, i) {
            var s = t.defer();
            if (!this.tables.hasOwnProperty(e)) {
                var o = this;
                n({
                    method: "GET",
                    url: this.parseUrl(r, e)
                }).success(function(t) {
                    o.tables[e] = t, s.resolve(t)
                }).error(function() {
                    i !== undefined ? i(o.name, e).then(function(t) {
                        o.tables[e] = t, s.resolve(t)
                    }, function() {
                        s.reject(o.name)
                    }) : s.reject(o.name)
                })
            } else s.resolve(this.tables[e]);
            return s.promise
        };
        var t = {};
        this.addPart = function(i) {
            if (!r(i)) throw new TypeError("Invalid type of a first argument, a non-empty string expected.");
            return n(i) || (t[i] = new e(i)), t[i].isActive = !0, this
        }, this.setPart = function(i, s, o) {
            if (!r(i)) throw new TypeError("Invalid type of a first argument, a non-empty string expected.");
            if (!r(s)) throw new TypeError("Invalid type of a second argument, a non-empty string expected.");
            if (typeof o != "object" || o === null) throw new TypeError("Invalid type of a third argument, an object expected.");
            return n(s) || (t[s] = new e(s), t[s].isActive = !1), t[s].tables[i] = o, this
        }, this.deletePart = function(e) {
            if (!r(e)) throw new TypeError("Invalid type of a first argument, a non-empty string expected.");
            return n(e) && (t[e].isActive = !1), this
        }, this.isPartAvailable = i, this.$get = ["$rootScope", "$injector", "$q", "$http", function(o, u, a, f) {
            var l = function(e) {
                function h(e) {
                    l.push(e)
                }
                if (!r(e.key)) throw new TypeError("Unable to load data, a key is not a non-empty string.");
                if (!r(e.urlTemplate)) throw new TypeError("Unable to load data, a urlTemplate is not a non-empty string.");
                var i = e.loadFailureHandler;
                if (i !== undefined) {
                    if (!angular.isString(i)) throw new Error("Unable to load data, a loadFailureHandler is not a string.");
                    i = u.get(i)
                }
                var o = [],
                    l = [],
                    c = a.defer();
                for (var p in t) n(p) && t[p].isActive && o.push(t[p].getTable(e.key, a, f, e.urlTemplate, i).then(h));
                return o.length ? a.all(o).then(function() {
                    var e = {};
                    for (var t = 0; t < l.length; t++) s(e, l[t]);
                    c.resolve(e)
                }, function() {
                    c.reject(e.key)
                }) : c.resolve({}), c.promise
            };
            return l.addPart = function(i) {
                if (!r(i)) throw new TypeError("Invalid type of a first argument, a non-empty string expected.");
                return n(i) ? t[i].isActive || (t[i].isActive = !0, o.$broadcast("$translatePartialLoaderStructureChanged", i)) : (t[i] = new e(i), o.$broadcast("$translatePartialLoaderStructureChanged", i)), l
            }, l.deletePart = function(e, i) {
                if (!r(e)) throw new TypeError("Invalid type of a first argument, a non-empty string expected.");
                if (i === undefined) i = !1;
                else if (typeof i != "boolean") throw new TypeError("Invalid type of a second argument, a boolean expected.");
                if (n(e)) {
                    var s = t[e].isActive;
                    i ? delete t[e] : t[e].isActive = !1, s && o.$broadcast("$translatePartialLoaderStructureChanged", e)
                }
                return l
            }, l.isPartAvailable = i, l
        }]
    }]), define("translateLoaderPartial", ["angularTranslate"], function() {}),
    function(e) {
        function z(e, t) {
            return function(n) {
                return Q(e.call(this, n), t)
            }
        }

        function W(e, t) {
            return function(n) {
                return this.lang().ordinal(e.call(this, n), t)
            }
        }

        function X() {}

        function V(e) {
            at(e), J(this, e)
        }

        function $(e) {
            var t = nt(e),
                n = t.year || 0,
                r = t.month || 0,
                i = t.week || 0,
                s = t.day || 0,
                o = t.hour || 0,
                u = t.minute || 0,
                a = t.second || 0,
                f = t.millisecond || 0;
            this._input = e, this._milliseconds = +f + a * 1e3 + u * 6e4 + o * 36e5, this._days = +s + i * 7, this._months = +r + n * 12, this._data = {}, this._bubble()
        }

        function J(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return t.hasOwnProperty("toString") && (e.toString = t.toString), t.hasOwnProperty("valueOf") && (e.valueOf = t.valueOf), e
        }

        function K(e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e)
        }

        function Q(e, t) {
            var n = e + "";
            while (n.length < t) n = "0" + n;
            return n
        }

        function G(e, n, r, i) {
            var s = n._milliseconds,
                o = n._days,
                u = n._months,
                a, f;
            s && e._d.setTime(+e._d + s * r);
            if (o || u) a = e.minute(), f = e.hour();
            o && e.date(e.date() + o * r), u && e.month(e.month() + u * r), s && !i && t.updateOffset(e);
            if (o || u) e.minute(a), e.hour(f)
        }

        function Y(e) {
            return Object.prototype.toString.call(e) === "[object Array]"
        }

        function Z(e) {
            return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date
        }

        function et(e, t, n) {
            var r = Math.min(e.length, t.length),
                i = Math.abs(e.length - t.length),
                s = 0,
                o;
            for (o = 0; o < r; o++)(n && e[o] !== t[o] || !n && it(e[o]) !== it(t[o])) && s++;
            return s + i
        }

        function tt(e) {
            if (e) {
                var t = e.toLowerCase().replace(/(.)s$/, "$1");
                e = B[e] || j[t] || t
            }
            return e
        }

        function nt(e) {
            var t = {},
                n, r, i;
            for (r in e) e.hasOwnProperty(r) && (n = tt(r), n && (t[n] = e[r]));
            return t
        }

        function rt(n) {
            var r, i;
            if (n.indexOf("week") === 0) r = 7, i = "day";
            else {
                if (n.indexOf("month") !== 0) return;
                r = 12, i = "month"
            }
            t[n] = function(s, o) {
                var u, a, f = t.fn._lang[n],
                    l = [];
                typeof s == "number" && (o = s, s = e), a = function(e) {
                    var n = t().utc().set(i, e);
                    return f.call(t.fn._lang, n, s || "")
                };
                if (o != null) return a(o);
                for (u = 0; u < r; u++) l.push(a(u));
                return l
            }
        }

        function it(e) {
            var t = +e,
                n = 0;
            return t !== 0 && isFinite(t) && (t >= 0 ? n = Math.floor(t) : n = Math.ceil(t)), n
        }

        function st(e, t) {
            return (new Date(Date.UTC(e, t + 1, 0))).getUTCDate()
        }

        function ot(e) {
            return ut(e) ? 366 : 365
        }

        function ut(e) {
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        }

        function at(e) {
            var t;
            e._a && e._pf.overflow === -2 && (t = e._a[o] < 0 || e._a[o] > 11 ? o : e._a[u] < 1 || e._a[u] > st(e._a[s], e._a[o]) ? u : e._a[a] < 0 || e._a[a] > 23 ? a : e._a[f] < 0 || e._a[f] > 59 ? f : e._a[l] < 0 || e._a[l] > 59 ? l : e._a[c] < 0 || e._a[c] > 999 ? c : -1, e._pf._overflowDayOfYear && (t < s || t > u) && (t = u), e._pf.overflow = t)
        }

        function ft(e) {
            e._pf = {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function lt(e) {
            return e._isValid == null && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated, e._strict && (e._isValid = e._isValid && e._pf.charsLeftOver === 0 && e._pf.unusedTokens.length === 0)), e._isValid
        }

        function ct(e) {
            return e ? e.toLowerCase().replace("_", "-") : e
        }

        function ht(e, t) {
            return t.abbr = e, h[e] || (h[e] = new X), h[e].set(t), h[e]
        }

        function pt(e) {
            delete h[e]
        }

        function dt(e) {
            var n = 0,
                r, i, s, o, u = function(e) {
                    if (!h[e] && p) try {
                        require("./lang/" + e)
                    } catch (t) {}
                    return h[e]
                };
            if (!e) return t.fn._lang;
            if (!Y(e)) {
                i = u(e);
                if (i) return i;
                e = [e]
            }
            while (n < e.length) {
                o = ct(e[n]).split("-"), r = o.length, s = ct(e[n + 1]), s = s ? s.split("-") : null;
                while (r > 0) {
                    i = u(o.slice(0, r).join("-"));
                    if (i) return i;
                    if (s && s.length >= r && et(o, s, !0) >= r - 1) break;
                    r--
                }
                n++
            }
            return t.fn._lang
        }

        function vt(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
        }

        function mt(e) {
            var t = e.match(g),
                n, r;
            for (n = 0, r = t.length; n < r; n++) R[t[n]] ? t[n] = R[t[n]] : t[n] = vt(t[n]);
            return function(i) {
                var s = "";
                for (n = 0; n < r; n++) s += t[n] instanceof Function ? t[n].call(i, e) : t[n];
                return s
            }
        }

        function gt(e, t) {
            return e.isValid() ? (t = yt(t, e.lang()), F[t] || (F[t] = mt(t)), F[t](e)) : e.lang().invalidDate()
        }

        function yt(e, t) {
            function r(e) {
                return t.longDateFormat(e) || e
            }
            var n = 5;
            y.lastIndex = 0;
            while (n >= 0 && y.test(e)) e = e.replace(y, r), y.lastIndex = 0, n -= 1;
            return e
        }

        function bt(e, t) {
            var n;
            switch (e) {
                case "DDDD":
                    return E;
                case "YYYY":
                case "GGGG":
                case "gggg":
                    return S;
                case "YYYYY":
                case "GGGGG":
                case "ggggg":
                    return x;
                case "S":
                case "SS":
                case "SSS":
                case "DDD":
                    return w;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                    return N;
                case "a":
                case "A":
                    return dt(t._l)._meridiemParse;
                case "X":
                    return L;
                case "Z":
                case "ZZ":
                    return C;
                case "T":
                    return k;
                case "SSSS":
                    return T;
                case "MM":
                case "DD":
                case "YY":
                case "GG":
                case "gg":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                case "w":
                case "ww":
                case "W":
                case "WW":
                case "e":
                case "E":
                    return b;
                default:
                    return n = new RegExp(kt(Ct(e.replace("\\", "")), "i")), n
            }
        }

        function wt(e) {
            var t = (C.exec(e) || [])[0],
                n = (t + "").match(D) || ["-", 0, 0],
                r = +(n[1] * 60) + it(n[2]);
            return n[0] === "+" ? -r : r
        }

        function Et(e, t, n) {
            var r, i = n._a;
            switch (e) {
                case "M":
                case "MM":
                    t != null && (i[o] = it(t) - 1);
                    break;
                case "MMM":
                case "MMMM":
                    r = dt(n._l).monthsParse(t), r != null ? i[o] = r : n._pf.invalidMonth = t;
                    break;
                case "D":
                case "DD":
                    t != null && (i[u] = it(t));
                    break;
                case "DDD":
                case "DDDD":
                    t != null && (n._dayOfYear = it(t));
                    break;
                case "YY":
                    i[s] = it(t) + (it(t) > 68 ? 1900 : 2e3);
                    break;
                case "YYYY":
                case "YYYYY":
                    i[s] = it(t);
                    break;
                case "a":
                case "A":
                    n._isPm = dt(n._l).isPM(t);
                    break;
                case "H":
                case "HH":
                case "h":
                case "hh":
                    i[a] = it(t);
                    break;
                case "m":
                case "mm":
                    i[f] = it(t);
                    break;
                case "s":
                case "ss":
                    i[l] = it(t);
                    break;
                case "S":
                case "SS":
                case "SSS":
                case "SSSS":
                    i[c] = it(("0." + t) * 1e3);
                    break;
                case "X":
                    n._d = new Date(parseFloat(t) * 1e3);
                    break;
                case "Z":
                case "ZZ":
                    n._useUTC = !0, n._tzm = wt(t);
                    break;
                case "w":
                case "ww":
                case "W":
                case "WW":
                case "d":
                case "dd":
                case "ddd":
                case "dddd":
                case "e":
                case "E":
                    e = e.substr(0, 1);
                case "gg":
                case "gggg":
                case "GG":
                case "GGGG":
                case "GGGGG":
                    e = e.substr(0, 2), t && (n._w = n._w || {}, n._w[e] = t)
            }
        }

        function St(e) {
            var n, r, i = [],
                l, c, h, p, d, v, m, g;
            if (e._d) return;
            l = Tt(e), e._w && e._a[u] == null && e._a[o] == null && (h = function(n) {
                return n ? n.length < 3 ? parseInt(n, 10) > 68 ? "19" + n : "20" + n : n : e._a[s] == null ? t().weekYear() : e._a[s]
            }, p = e._w, p.GG != null || p.W != null || p.E != null ? d = jt(h(p.GG), p.W || 1, p.E, 4, 1) : (v = dt(e._l), m = p.d != null ? Dt(p.d, v) : p.e != null ? parseInt(p.e, 10) + v._week.dow : 0, g = parseInt(p.w, 10) || 1, p.d != null && m < v._week.dow && g++, d = jt(h(p.gg), g, m, v._week.doy, v._week.dow)), e._a[s] = d.year, e._dayOfYear = d.dayOfYear), e._dayOfYear && (c = e._a[s] == null ? l[s] : e._a[s], e._dayOfYear > ot(c) && (e._pf._overflowDayOfYear = !0), r = _t(c, 0, e._dayOfYear), e._a[o] = r.getUTCMonth(), e._a[u] = r.getUTCDate());
            for (n = 0; n < 3 && e._a[n] == null; ++n) e._a[n] = i[n] = l[n];
            for (; n < 7; n++) e._a[n] = i[n] = e._a[n] == null ? n === 2 ? 1 : 0 : e._a[n];
            i[a] += it((e._tzm || 0) / 60), i[f] += it((e._tzm || 0) % 60), e._d = (e._useUTC ? _t : Mt).apply(null, i)
        }

        function xt(e) {
            var t;
            if (e._d) return;
            t = nt(e._i), e._a = [t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond], St(e)
        }

        function Tt(e) {
            var t = new Date;
            return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
        }

        function Nt(e) {
            e._a = [], e._pf.empty = !0;
            var t = dt(e._l),
                n = "" + e._i,
                r, i, s, o, u, f = n.length,
                l = 0;
            s = yt(e._f, t).match(g) || [];
            for (r = 0; r < s.length; r++) o = s[r], i = (bt(o, e).exec(n) || [])[0], i && (u = n.substr(0, n.indexOf(i)), u.length > 0 && e._pf.unusedInput.push(u), n = n.slice(n.indexOf(i) + i.length), l += i.length), R[o] ? (i ? e._pf.empty = !1 : e._pf.unusedTokens.push(o), Et(o, i, e)) : e._strict && !i && e._pf.unusedTokens.push(o);
            e._pf.charsLeftOver = f - l, n.length > 0 && e._pf.unusedInput.push(n), e._isPm && e._a[a] < 12 && (e._a[a] += 12), e._isPm === !1 && e._a[a] === 12 && (e._a[a] = 0), St(e), at(e)
        }

        function Ct(e) {
            return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
                return t || n || r || i
            })
        }

        function kt(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function Lt(e) {
            var t, n, r, i, s;
            if (e._f.length === 0) {
                e._pf.invalidFormat = !0, e._d = new Date(NaN);
                return
            }
            for (i = 0; i < e._f.length; i++) {
                s = 0, t = J({}, e), ft(t), t._f = e._f[i], Nt(t);
                if (!lt(t)) continue;
                s += t._pf.charsLeftOver, s += t._pf.unusedTokens.length * 10, t._pf.score = s;
                if (r == null || s < r) r = s, n = t
            }
            J(e, n || t)
        }

        function At(e) {
            var t, n = e._i,
                r = A.exec(n);
            if (r) {
                e._pf.iso = !0;
                for (t = 4; t > 0; t--)
                    if (r[t]) {
                        e._f = M[t - 1] + (r[6] || " ");
                        break
                    }
                for (t = 0; t < 4; t++)
                    if (_[t][1].exec(n)) {
                        e._f += _[t][0];
                        break
                    }
                C.exec(n) && (e._f += "Z"), Nt(e)
            } else e._d = new Date(n)
        }

        function Ot(t) {
            var n = t._i,
                r = d.exec(n);
            n === e ? t._d = new Date : r ? t._d = new Date(+r[1]) : typeof n == "string" ? At(t) : Y(n) ? (t._a = n.slice(0), St(t)) : Z(n) ? t._d = new Date(+n) : typeof n == "object" ? xt(t) : t._d = new Date(n)
        }

        function Mt(e, t, n, r, i, s, o) {
            var u = new Date(e, t, n, r, i, s, o);
            return e < 1970 && u.setFullYear(e), u
        }

        function _t(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return e < 1970 && t.setUTCFullYear(e), t
        }

        function Dt(e, t) {
            if (typeof e == "string")
                if (!isNaN(e)) e = parseInt(e, 10);
                else {
                    e = t.weekdaysParse(e);
                    if (typeof e != "number") return null
                }
            return e
        }

        function Pt(e, t, n, r, i) {
            return i.relativeTime(t || 1, !!n, e, r)
        }

        function Ht(e, t, n) {
            var i = r(Math.abs(e) / 1e3),
                s = r(i / 60),
                o = r(s / 60),
                u = r(o / 24),
                a = r(u / 365),
                f = i < 45 && ["s", i] || s === 1 && ["m"] || s < 45 && ["mm", s] || o === 1 && ["h"] || o < 22 && ["hh", o] || u === 1 && ["d"] || u <= 25 && ["dd", u] || u <= 45 && ["M"] || u < 345 && ["MM", r(u / 30)] || a === 1 && ["y"] || ["yy", a];
            return f[2] = t, f[3] = e > 0, f[4] = n, Pt.apply({}, f)
        }

        function Bt(e, n, r) {
            var i = r - n,
                s = r - e.day(),
                o;
            return s > i && (s -= 7), s < i - 7 && (s += 7), o = t(e).add("d", s), {
                week: Math.ceil(o.dayOfYear() / 7),
                year: o.year()
            }
        }

        function jt(e, t, n, r, i) {
            var s = (new Date(Date.UTC(e, 0))).getUTCDay(),
                o, u;
            return n = n != null ? n : i, o = i - s + (s > r ? 7 : 0), u = 7 * (t - 1) + (n - i) + o + 1, {
                year: u > 0 ? e : e - 1,
                dayOfYear: u > 0 ? u : ot(e - 1) + u
            }
        }

        function Ft(e) {
            var n = e._i,
                r = e._f;
            return typeof e._pf == "undefined" && ft(e), n === null ? t.invalid({
                nullInput: !0
            }) : (typeof n == "string" && (e._i = n = dt().preparse(n)), t.isMoment(n) ? (e = J({}, n), e._d = new Date(+n._d)) : r ? Y(r) ? Lt(e) : Nt(e) : Ot(e), new V(e))
        }

        function It(e, n) {
            t.fn[e] = t.fn[e + "s"] = function(e) {
                var r = this._isUTC ? "UTC" : "";
                return e != null ? (this._d["set" + r + n](e), t.updateOffset(this), this) : this._d["get" + r + n]()
            }
        }

        function qt(e) {
            t.duration.fn[e] = function() {
                return this._data[e]
            }
        }

        function Rt(e, n) {
            t.duration.fn["as" + e] = function() {
                return +this / n
            }
        }

        function Ut(e) {
            var n = !1,
                r = t;
            if (typeof ender != "undefined") return;
            e ? this.moment = function() {
                return !n && console && console.warn && (n = !0, console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")), r.apply(null, arguments)
            } : this.moment = t
        }
        var t, n = "2.4.0",
            r = Math.round,
            i, s = 0,
            o = 1,
            u = 2,
            a = 3,
            f = 4,
            l = 5,
            c = 6,
            h = {},
            p = typeof module != "undefined" && module.exports,
            d = /^\/?Date\((\-?\d+)/i,
            v = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
            m = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,
            g = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,
            y = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,
            b = /\d\d?/,
            w = /\d{1,3}/,
            E = /\d{3}/,
            S = /\d{1,4}/,
            x = /[+\-]?\d{1,6}/,
            T = /\d+/,
            N = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            C = /Z|[\+\-]\d\d:?\d\d/i,
            k = /T/i,
            L = /[\+\-]?\d+(\.\d{1,3})?/,
            A = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d:?\d\d|Z)?)?$/,
            O = "YYYY-MM-DDTHH:mm:ssZ",
            M = ["YYYY-MM-DD", "GGGG-[W]WW", "GGGG-[W]WW-E", "YYYY-DDD"],
            _ = [
                ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
                ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                ["HH:mm", /(T| )\d\d:\d\d/],
                ["HH", /(T| )\d\d/]
            ],
            D = /([\+\-]|\d\d)/gi,
            P = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"),
            H = {
                Milliseconds: 1,
                Seconds: 1e3,
                Minutes: 6e4,
                Hours: 36e5,
                Days: 864e5,
                Months: 2592e6,
                Years: 31536e6
            },
            B = {
                ms: "millisecond",
                s: "second",
                m: "minute",
                h: "hour",
                d: "day",
                D: "date",
                w: "week",
                W: "isoWeek",
                M: "month",
                y: "year",
                DDD: "dayOfYear",
                e: "weekday",
                E: "isoWeekday",
                gg: "weekYear",
                GG: "isoWeekYear"
            },
            j = {
                dayofyear: "dayOfYear",
                isoweekday: "isoWeekday",
                isoweek: "isoWeek",
                weekyear: "weekYear",
                isoweekyear: "isoWeekYear"
            },
            F = {},
            I = "DDD w W M D d".split(" "),
            q = "M D H h m s w W".split(" "),
            R = {
                M: function() {
                    return this.month() + 1
                },
                MMM: function(e) {
                    return this.lang().monthsShort(this, e)
                },
                MMMM: function(e) {
                    return this.lang().months(this, e)
                },
                D: function() {
                    return this.date()
                },
                DDD: function() {
                    return this.dayOfYear()
                },
                d: function() {
                    return this.day()
                },
                dd: function(e) {
                    return this.lang().weekdaysMin(this, e)
                },
                ddd: function(e) {
                    return this.lang().weekdaysShort(this, e)
                },
                dddd: function(e) {
                    return this.lang().weekdays(this, e)
                },
                w: function() {
                    return this.week()
                },
                W: function() {
                    return this.isoWeek()
                },
                YY: function() {
                    return Q(this.year() % 100, 2)
                },
                YYYY: function() {
                    return Q(this.year(), 4)
                },
                YYYYY: function() {
                    return Q(this.year(), 5)
                },
                gg: function() {
                    return Q(this.weekYear() % 100, 2)
                },
                gggg: function() {
                    return this.weekYear()
                },
                ggggg: function() {
                    return Q(this.weekYear(), 5)
                },
                GG: function() {
                    return Q(this.isoWeekYear() % 100, 2)
                },
                GGGG: function() {
                    return this.isoWeekYear()
                },
                GGGGG: function() {
                    return Q(this.isoWeekYear(), 5)
                },
                e: function() {
                    return this.weekday()
                },
                E: function() {
                    return this.isoWeekday()
                },
                a: function() {
                    return this.lang().meridiem(this.hours(), this.minutes(), !0)
                },
                A: function() {
                    return this.lang().meridiem(this.hours(), this.minutes(), !1)
                },
                H: function() {
                    return this.hours()
                },
                h: function() {
                    return this.hours() % 12 || 12
                },
                m: function() {
                    return this.minutes()
                },
                s: function() {
                    return this.seconds()
                },
                S: function() {
                    return it(this.milliseconds() / 100)
                },
                SS: function() {
                    return Q(it(this.milliseconds() / 10), 2)
                },
                SSS: function() {
                    return Q(this.milliseconds(), 3)
                },
                SSSS: function() {
                    return Q(this.milliseconds(), 3)
                },
                Z: function() {
                    var e = -this.zone(),
                        t = "+";
                    return e < 0 && (e = -e, t = "-"), t + Q(it(e / 60), 2) + ":" + Q(it(e) % 60, 2)
                },
                ZZ: function() {
                    var e = -this.zone(),
                        t = "+";
                    return e < 0 && (e = -e, t = "-"), t + Q(it(10 * e / 6), 4)
                },
                z: function() {
                    return this.zoneAbbr()
                },
                zz: function() {
                    return this.zoneName()
                },
                X: function() {
                    return this.unix()
                }
            },
            U = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"];
        while (I.length) i = I.pop(), R[i + "o"] = W(R[i], i);
        while (q.length) i = q.pop(), R[i + i] = z(R[i], 2);
        R.DDDD = z(R.DDD, 3), J(X.prototype, {
            set: function(e) {
                var t, n;
                for (n in e) t = e[n], typeof t == "function" ? this[n] = t : this["_" + n] = t
            },
            _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            months: function(e) {
                return this._months[e.month()]
            },
            _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            monthsShort: function(e) {
                return this._monthsShort[e.month()]
            },
            monthsParse: function(e) {
                var n, r, i;
                this._monthsParse || (this._monthsParse = []);
                for (n = 0; n < 12; n++) {
                    this._monthsParse[n] || (r = t.utc([2e3, n]), i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(i.replace(".", ""), "i"));
                    if (this._monthsParse[n].test(e)) return n
                }
            },
            _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdays: function(e) {
                return this._weekdays[e.day()]
            },
            _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysShort: function(e) {
                return this._weekdaysShort[e.day()]
            },
            _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            weekdaysMin: function(e) {
                return this._weekdaysMin[e.day()]
            },
            weekdaysParse: function(e) {
                var n, r, i;
                this._weekdaysParse || (this._weekdaysParse = []);
                for (n = 0; n < 7; n++) {
                    this._weekdaysParse[n] || (r = t([2e3, 1]).day(n), i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[n] = new RegExp(i.replace(".", ""), "i"));
                    if (this._weekdaysParse[n].test(e)) return n
                }
            },
            _longDateFormat: {
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D YYYY",
                LLL: "MMMM D YYYY LT",
                LLLL: "dddd, MMMM D YYYY LT"
            },
            longDateFormat: function(e) {
                var t = this._longDateFormat[e];
                return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
                    return e.slice(1)
                }), this._longDateFormat[e] = t), t
            },
            isPM: function(e) {
                return (e + "").toLowerCase().charAt(0) === "p"
            },
            _meridiemParse: /[ap]\.?m?\.?/i,
            meridiem: function(e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            },
            _calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            calendar: function(e, t) {
                var n = this._calendar[e];
                return typeof n == "function" ? n.apply(t) : n
            },
            _relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            relativeTime: function(e, t, n, r) {
                var i = this._relativeTime[n];
                return typeof i == "function" ? i(e, t, n, r) : i.replace(/%d/i, e)
            },
            pastFuture: function(e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return typeof n == "function" ? n(t) : n.replace(/%s/i, t)
            },
            ordinal: function(e) {
                return this._ordinal.replace("%d", e)
            },
            _ordinal: "%d",
            preparse: function(e) {
                return e
            },
            postformat: function(e) {
                return e
            },
            week: function(e) {
                return Bt(e, this._week.dow, this._week.doy).week
            },
            _week: {
                dow: 0,
                doy: 6
            },
            _invalidDate: "Invalid date",
            invalidDate: function() {
                return this._invalidDate
            }
        }), t = function(t, n, r, i) {
            return typeof r == "boolean" && (i = r, r = e), Ft({
                _i: t,
                _f: n,
                _l: r,
                _strict: i,
                _isUTC: !1
            })
        }, t.utc = function(t, n, r, i) {
            var s;
            return typeof r == "boolean" && (i = r, r = e), s = Ft({
                _useUTC: !0,
                _isUTC: !0,
                _l: r,
                _i: t,
                _f: n,
                _strict: i
            }).utc(), s
        }, t.unix = function(e) {
            return t(e * 1e3)
        }, t.duration = function(e, n) {
            var r = t.isDuration(e),
                i = typeof e == "number",
                s = r ? e._input : i ? {} : e,
                o = null,
                h, p, d, g, y;
            return i ? n ? s[n] = e : s.milliseconds = e : (o = v.exec(e)) ? (h = o[1] === "-" ? -1 : 1, s = {
                y: 0,
                d: it(o[u]) * h,
                h: it(o[a]) * h,
                m: it(o[f]) * h,
                s: it(o[l]) * h,
                ms: it(o[c]) * h
            }) : !(o = m.exec(e)) || (h = o[1] === "-" ? -1 : 1, d = function(e) {
                var t = e && parseFloat(e.replace(",", "."));
                return (isNaN(t) ? 0 : t) * h
            }, s = {
                y: d(o[2]),
                M: d(o[3]),
                d: d(o[4]),
                h: d(o[5]),
                m: d(o[6]),
                s: d(o[7]),
                w: d(o[8])
            }), p = new $(s), r && e.hasOwnProperty("_lang") && (p._lang = e._lang), p
        }, t.version = n, t.defaultFormat = O, t.updateOffset = function() {}, t.lang = function(e, n) {
            var r;
            return e ? (n ? ht(ct(e), n) : n === null ? (pt(e), e = "en") : h[e] || dt(e), r = t.duration.fn._lang = t.fn._lang = dt(e), r._abbr) : t.fn._lang._abbr
        }, t.langData = function(e) {
            return e && e._lang && e._lang._abbr && (e = e._lang._abbr), dt(e)
        }, t.isMoment = function(e) {
            return e instanceof V
        }, t.isDuration = function(e) {
            return e instanceof $
        };
        for (i = U.length - 1; i >= 0; --i) rt(U[i]);
        t.normalizeUnits = function(e) {
            return tt(e)
        }, t.invalid = function(e) {
            var n = t.utc(NaN);
            return e != null ? J(n._pf, e) : n._pf.userInvalidated = !0, n
        }, t.parseZone = function(e) {
            return t(e).parseZone()
        }, J(t.fn = V.prototype, {
            clone: function() {
                return t(this)
            },
            valueOf: function() {
                return +this._d + (this._offset || 0) * 6e4
            },
            unix: function() {
                return Math.floor(+this / 1e3)
            },
            toString: function() {
                return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            },
            toDate: function() {
                return this._offset ? new Date(+this) : this._d
            },
            toISOString: function() {
                return gt(t(this).utc(), "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            },
            toArray: function() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
            },
            isValid: function() {
                return lt(this)
            },
            isDSTShifted: function() {
                return this._a ? this.isValid() && et(this._a, (this._isUTC ? t.utc(this._a) : t(this._a)).toArray()) > 0 : !1
            },
            parsingFlags: function() {
                return J({}, this._pf)
            },
            invalidAt: function() {
                return this._pf.overflow
            },
            utc: function() {
                return this.zone(0)
            },
            local: function() {
                return this.zone(0), this._isUTC = !1, this
            },
            format: function(e) {
                var n = gt(this, e || t.defaultFormat);
                return this.lang().postformat(n)
            },
            add: function(e, n) {
                var r;
                return typeof e == "string" ? r = t.duration(+n, e) : r = t.duration(e, n), G(this, r, 1), this
            },
            subtract: function(e, n) {
                var r;
                return typeof e == "string" ? r = t.duration(+n, e) : r = t.duration(e, n), G(this, r, -1), this
            },
            diff: function(e, n, r) {
                var i = this._isUTC ? t(e).zone(this._offset || 0) : t(e).local(),
                    s = (this.zone() - i.zone()) * 6e4,
                    o, u;
                return n = tt(n), n === "year" || n === "month" ? (o = (this.daysInMonth() + i.daysInMonth()) * 432e5, u = (this.year() - i.year()) * 12 + (this.month() - i.month()), u += (this - t(this).startOf("month") - (i - t(i).startOf("month"))) / o, u -= (this.zone() - t(this).startOf("month").zone() - (i.zone() - t(i).startOf("month").zone())) * 6e4 / o, n === "year" && (u /= 12)) : (o = this - i, u = n === "second" ? o / 1e3 : n === "minute" ? o / 6e4 : n === "hour" ? o / 36e5 : n === "day" ? (o - s) / 864e5 : n === "week" ? (o - s) / 6048e5 : o), r ? u : K(u)
            },
            from: function(e, n) {
                return t.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!n)
            },
            fromNow: function(e) {
                return this.from(t(), e)
            },
            calendar: function() {
                var e = this.diff(t().zone(this.zone()).startOf("day"), "days", !0),
                    n = e < -6 ? "sameElse" : e < -1 ? "lastWeek" : e < 0 ? "lastDay" : e < 1 ? "sameDay" : e < 2 ? "nextDay" : e < 7 ? "nextWeek" : "sameElse";
                return this.format(this.lang().calendar(n, this))
            },
            isLeapYear: function() {
                return ut(this.year())
            },
            isDST: function() {
                return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
            },
            day: function(e) {
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return e != null ? (e = Dt(e, this.lang()), this.add({
                    d: e - t
                })) : t
            },
            month: function(e) {
                var n = this._isUTC ? "UTC" : "",
                    r;
                if (e != null) {
                    if (typeof e == "string") {
                        e = this.lang().monthsParse(e);
                        if (typeof e != "number") return this
                    }
                    return r = this.date(), this.date(1), this._d["set" + n + "Month"](e), this.date(Math.min(r, this.daysInMonth())), t.updateOffset(this), this
                }
                return this._d["get" + n + "Month"]()
            },
            startOf: function(e) {
                e = tt(e);
                switch (e) {
                    case "year":
                        this.month(0);
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return e === "week" ? this.weekday(0) : e === "isoWeek" && this.isoWeekday(1), this
            },
            endOf: function(e) {
                return e = tt(e), this.startOf(e).add(e === "isoWeek" ? "week" : e, 1).subtract("ms", 1)
            },
            isAfter: function(e, n) {
                return n = typeof n != "undefined" ? n : "millisecond", +this.clone().startOf(n) > +t(e).startOf(n)
            },
            isBefore: function(e, n) {
                return n = typeof n != "undefined" ? n : "millisecond", +this.clone().startOf(n) < +t(e).startOf(n)
            },
            isSame: function(e, n) {
                return n = typeof n != "undefined" ? n : "millisecond", +this.clone().startOf(n) === +t(e).startOf(n)
            },
            min: function(e) {
                return e = t.apply(null, arguments), e < this ? this : e
            },
            max: function(e) {
                return e = t.apply(null, arguments), e > this ? this : e
            },
            zone: function(e) {
                var n = this._offset || 0;
                return e == null ? this._isUTC ? n : this._d.getTimezoneOffset() : (typeof e == "string" && (e = wt(e)), Math.abs(e) < 16 && (e *= 60), this._offset = e, this._isUTC = !0, n !== e && G(this, t.duration(n - e, "m"), 1, !0), this)
            },
            zoneAbbr: function() {
                return this._isUTC ? "UTC" : ""
            },
            zoneName: function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            },
            parseZone: function() {
                return typeof this._i == "string" && this.zone(this._i), this
            },
            hasAlignedHourOffset: function(e) {
                return e ? e = t(e).zone() : e = 0, (this.zone() - e) % 60 === 0
            },
            daysInMonth: function() {
                return st(this.year(), this.month())
            },
            dayOfYear: function(e) {
                var n = r((t(this).startOf("day") - t(this).startOf("year")) / 864e5) + 1;
                return e == null ? n : this.add("d", e - n)
            },
            weekYear: function(e) {
                var t = Bt(this, this.lang()._week.dow, this.lang()._week.doy).year;
                return e == null ? t : this.add("y", e - t)
            },
            isoWeekYear: function(e) {
                var t = Bt(this, 1, 4).year;
                return e == null ? t : this.add("y", e - t)
            },
            week: function(e) {
                var t = this.lang().week(this);
                return e == null ? t : this.add("d", (e - t) * 7)
            },
            isoWeek: function(e) {
                var t = Bt(this, 1, 4).week;
                return e == null ? t : this.add("d", (e - t) * 7)
            },
            weekday: function(e) {
                var t = (this.day() + 7 - this.lang()._week.dow) % 7;
                return e == null ? t : this.add("d", e - t)
            },
            isoWeekday: function(e) {
                return e == null ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
            },
            get: function(e) {
                return e = tt(e), this[e]()
            },
            set: function(e, t) {
                return e = tt(e), typeof this[e] == "function" && this[e](t), this
            },
            lang: function(t) {
                return t === e ? this._lang : (this._lang = dt(t), this)
            }
        });
        for (i = 0; i < P.length; i++) It(P[i].toLowerCase().replace(/s$/, ""), P[i]);
        It("year", "FullYear"), t.fn.days = t.fn.day, t.fn.months = t.fn.month, t.fn.weeks = t.fn.week, t.fn.isoWeeks = t.fn.isoWeek, t.fn.toJSON = t.fn.toISOString, J(t.duration.fn = $.prototype, {
            _bubble: function() {
                var e = this._milliseconds,
                    t = this._days,
                    n = this._months,
                    r = this._data,
                    i, s, o, u;
                r.milliseconds = e % 1e3, i = K(e / 1e3), r.seconds = i % 60, s = K(i / 60), r.minutes = s % 60, o = K(s / 60), r.hours = o % 24, t += K(o / 24), r.days = t % 30, n += K(t / 30), r.months = n % 12, u = K(n / 12), r.years = u
            },
            weeks: function() {
                return K(this.days() / 7)
            },
            valueOf: function() {
                return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + it(this._months / 12) * 31536e6
            },
            humanize: function(e) {
                var t = +this,
                    n = Ht(t, !e, this.lang());
                return e && (n = this.lang().pastFuture(t, n)), this.lang().postformat(n)
            },
            add: function(e, n) {
                var r = t.duration(e, n);
                return this._milliseconds += r._milliseconds, this._days += r._days, this._months += r._months, this._bubble(), this
            },
            subtract: function(e, n) {
                var r = t.duration(e, n);
                return this._milliseconds -= r._milliseconds, this._days -= r._days, this._months -= r._months, this._bubble(), this
            },
            get: function(e) {
                return e = tt(e), this[e.toLowerCase() + "s"]()
            },
            as: function(e) {
                return e = tt(e), this["as" + e.charAt(0).toUpperCase() + e.slice(1) + "s"]()
            },
            lang: t.fn.lang,
            toIsoString: function() {
                var e = Math.abs(this.years()),
                    t = Math.abs(this.months()),
                    n = Math.abs(this.days()),
                    r = Math.abs(this.hours()),
                    i = Math.abs(this.minutes()),
                    s = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (r || i || s ? "T" : "") + (r ? r + "H" : "") + (i ? i + "M" : "") + (s ? s + "S" : "") : "P0D"
            }
        });
        for (i in H) H.hasOwnProperty(i) && (Rt(i, H[i]), qt(i.toLowerCase()));
        Rt("Weeks", 6048e5), t.duration.fn.asMonths = function() {
            return (+this - this.years() * 31536e6) / 2592e6 + this.years() * 12
        }, t.lang("en", {
            ordinal: function(e) {
                var t = e % 10,
                    n = it(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                return e + n
            }
        }), p ? (module.exports = t, Ut(!0)) : typeof define == "function" && define.amd ? define("moment", ["require", "exports", "module"], function(n, r, i) {
            return i.config().noGlobal !== !0 && Ut(i.config().noGlobal === e), t
        }) : Ut()
    }.call(this), define("common/filters/date", ["angular", "moment", "lodash"], function(e, t, n) {
        "use strict";
        return e.module("oe.filters.date", []).filter("fromNow", [function() {
            return n.memoize(function(e) {
                return t.utc(e).fromNow().toString()
            })
        }])
    }), define("common/filters/image", ["angular", "lodash"], function(e, t) {
        "use strict";
        return e.module("oe.filters.image", []).filter("imgVariant", [function() {
            return t.memoize(function(e, t) {
                var n, r;
                return !t || !e ? e : (n = e.substring(e.lastIndexOf("/") + 1), r = e.substring(0, e.lastIndexOf(n)), r + t + "_" + n)
            }, function() {
                var e = Array.prototype.slice.call(arguments);
                return e.join("#")
            })
        }]).filter("imgTransform", [function() {
            return t.memoize(function(e, t) {
                if (!t || !e) return e;
                var n = document.createElement("a"),
                    r;
                return n.href = e, r = n.pathname, r.charAt(0) !== "/" && (r = "/" + r), n.protocol + "//" + n.hostname + "/" + t + r
            }, function() {
                var e = Array.prototype.slice.call(arguments);
                return e.join("#")
            })
        }])
    }),
    function(e) {
        var t = ["equipment", "information", "rice", "money", "species", "series", "fish", "sheep", "moose", "deer", "news"],
            n = [
                [new RegExp("(m)en$", "gi")],
                [new RegExp("(pe)ople$", "gi")],
                [new RegExp("(child)ren$", "gi")],
                [new RegExp("([ti])a$", "gi")],
                [new RegExp("((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$", "gi")],
                [new RegExp("(hive)s$", "gi")],
                [new RegExp("(tive)s$", "gi")],
                [new RegExp("(curve)s$", "gi")],
                [new RegExp("([lr])ves$", "gi")],
                [new RegExp("([^fo])ves$", "gi")],
                [new RegExp("([^aeiouy]|qu)ies$", "gi")],
                [new RegExp("(s)eries$", "gi")],
                [new RegExp("(m)ovies$", "gi")],
                [new RegExp("(x|ch|ss|sh)es$", "gi")],
                [new RegExp("([m|l])ice$", "gi")],
                [new RegExp("(bus)es$", "gi")],
                [new RegExp("(o)es$", "gi")],
                [new RegExp("(shoe)s$", "gi")],
                [new RegExp("(cris|ax|test)es$", "gi")],
                [new RegExp("(octop|vir)i$", "gi")],
                [new RegExp("(alias|status)es$", "gi")],
                [new RegExp("^(ox)en", "gi")],
                [new RegExp("(vert|ind)ices$", "gi")],
                [new RegExp("(matr)ices$", "gi")],
                [new RegExp("(quiz)zes$", "gi")],
                [new RegExp("(m)an$", "gi"), "$1en"],
                [new RegExp("(pe)rson$", "gi"), "$1ople"],
                [new RegExp("(child)$", "gi"), "$1ren"],
                [new RegExp("^(ox)$", "gi"), "$1en"],
                [new RegExp("(ax|test)is$", "gi"), "$1es"],
                [new RegExp("(octop|vir)us$", "gi"), "$1i"],
                [new RegExp("(alias|status)$", "gi"), "$1es"],
                [new RegExp("(bu)s$", "gi"), "$1ses"],
                [new RegExp("(buffal|tomat|potat)o$", "gi"), "$1oes"],
                [new RegExp("([ti])um$", "gi"), "$1a"],
                [new RegExp("sis$", "gi"), "ses"],
                [new RegExp("(?:([^f])fe|([lr])f)$", "gi"), "$1$2ves"],
                [new RegExp("(hive)$", "gi"), "$1s"],
                [new RegExp("([^aeiouy]|qu)y$", "gi"), "$1ies"],
                [new RegExp("(x|ch|ss|sh)$", "gi"), "$1es"],
                [new RegExp("(matr|vert|ind)ix|ex$", "gi"), "$1ices"],
                [new RegExp("([m|l])ouse$", "gi"), "$1ice"],
                [new RegExp("(quiz)$", "gi"), "$1zes"],
                [new RegExp("s$", "gi"), "s"],
                [new RegExp("$", "gi"), "s"]
            ],
            r = [
                [new RegExp("(m)an$", "gi")],
                [new RegExp("(pe)rson$", "gi")],
                [new RegExp("(child)$", "gi")],
                [new RegExp("^(ox)$", "gi")],
                [new RegExp("(ax|test)is$", "gi")],
                [new RegExp("(octop|vir)us$", "gi")],
                [new RegExp("(alias|status)$", "gi")],
                [new RegExp("(bu)s$", "gi")],
                [new RegExp("(buffal|tomat|potat)o$", "gi")],
                [new RegExp("([ti])um$", "gi")],
                [new RegExp("sis$", "gi")],
                [new RegExp("(?:([^f])fe|([lr])f)$", "gi")],
                [new RegExp("(hive)$", "gi")],
                [new RegExp("([^aeiouy]|qu)y$", "gi")],
                [new RegExp("(x|ch|ss|sh)$", "gi")],
                [new RegExp("(matr|vert|ind)ix|ex$", "gi")],
                [new RegExp("([m|l])ouse$", "gi")],
                [new RegExp("(quiz)$", "gi")],
                [new RegExp("(m)en$", "gi"), "$1an"],
                [new RegExp("(pe)ople$", "gi"), "$1rson"],
                [new RegExp("(child)ren$", "gi"), "$1"],
                [new RegExp("([ti])a$", "gi"), "$1um"],
                [new RegExp("((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$", "gi"), "$1$2sis"],
                [new RegExp("(hive)s$", "gi"), "$1"],
                [new RegExp("(tive)s$", "gi"), "$1"],
                [new RegExp("(curve)s$", "gi"), "$1"],
                [new RegExp("([lr])ves$", "gi"), "$1f"],
                [new RegExp("([^fo])ves$", "gi"), "$1fe"],
                [new RegExp("([^aeiouy]|qu)ies$", "gi"), "$1y"],
                [new RegExp("(s)eries$", "gi"), "$1eries"],
                [new RegExp("(m)ovies$", "gi"), "$1ovie"],
                [new RegExp("(x|ch|ss|sh)es$", "gi"), "$1"],
                [new RegExp("([m|l])ice$", "gi"), "$1ouse"],
                [new RegExp("(bus)es$", "gi"), "$1"],
                [new RegExp("(o)es$", "gi"), "$1"],
                [new RegExp("(shoe)s$", "gi"), "$1"],
                [new RegExp("(cris|ax|test)es$", "gi"), "$1is"],
                [new RegExp("(octop|vir)i$", "gi"), "$1us"],
                [new RegExp("(alias|status)es$", "gi"), "$1"],
                [new RegExp("^(ox)en", "gi"), "$1"],
                [new RegExp("(vert|ind)ices$", "gi"), "$1ex"],
                [new RegExp("(matr)ices$", "gi"), "$1ix"],
                [new RegExp("(quiz)zes$", "gi"), "$1"],
                [new RegExp("ss$", "gi"), "ss"],
                [new RegExp("s$", "gi"), ""]
            ],
            i = ["and", "or", "nor", "a", "an", "the", "so", "but", "to", "of", "at", "by", "from", "into", "on", "onto", "off", "out", "in", "over", "with", "for"],
            s = new RegExp("(_ids|_id)$", "g"),
            o = new RegExp("_", "g"),
            u = new RegExp("[ _]", "g"),
            a = new RegExp("([A-Z])", "g"),
            f = new RegExp("^_"),
            l = {
                _apply_rules: function(e, t, n, r) {
                    if (r) e = r;
                    else {
                        var i = l.indexOf(n, e.toLowerCase()) > -1;
                        if (!i) {
                            var s = 0,
                                o = t.length;
                            for (; s < o; s++)
                                if (e.match(t[s][0])) {
                                    t[s][1] !== undefined && (e = e.replace(t[s][0], t[s][1]));
                                    break
                                }
                        }
                    }
                    return e
                },
                indexOf: function(e, t, n, r) {
                    n || (n = -1);
                    var i = -1,
                        s = n,
                        o = e.length;
                    for (; s < o; s++)
                        if (e[s] === t || r && r(e[s], t)) {
                            i = s;
                            break
                        }
                    return i
                },
                pluralize: function(e, r) {
                    return l._apply_rules(e, n, t, r)
                },
                singularize: function(e, n) {
                    return l._apply_rules(e, r, t, n)
                },
                camelize: function(e, t) {
                    var n = e.toLowerCase().split("/"),
                        r = 0,
                        i = n.length;
                    for (; r < i; r++) {
                        var s = n[r].split("_"),
                            o = t && r + 1 === i ? 1 : 0,
                            u = o,
                            a = s.length;
                        for (; u < a; u++) s[u] = s[u].charAt(0).toUpperCase() + s[u].substring(1);
                        n[r] = s.join("")
                    }
                    return n.join("::")
                },
                underscore: function(e, t) {
                    if (t && e === e.toUpperCase()) return e;
                    var n = e.split("::"),
                        r = 0,
                        i = n.length;
                    for (; r < i; r++) n[r] = n[r].replace(a, "_$1"), n[r] = n[r].replace(f, "");
                    return n.join("/").toLowerCase()
                },
                humanize: function(e, t) {
                    return e = e.toLowerCase(), e = e.replace(s, ""), e = e.replace(o, " "), t || (e = l.capitalize(e)), e
                },
                capitalize: function(e) {
                    return e = e.toLowerCase(), e.substring(0, 1).toUpperCase() + e.substring(1)
                },
                dasherize: function(e) {
                    return e.replace(u, "-")
                },
                titleize: function(e) {
                    e = e.toLowerCase().replace(o, " ");
                    var t = e.split(" "),
                        n = 0,
                        r = t.length;
                    for (; n < r; n++) {
                        var s = t[n].split("-"),
                            u = 0,
                            a = s.length;
                        for (; u < a; u++) l.indexOf(i, s[u].toLowerCase()) < 0 && (s[u] = l.capitalize(s[u]));
                        t[n] = s.join("-")
                    }
                    return e = t.join(" "), e = e.substring(0, 1).toUpperCase() + e.substring(1), e
                },
                demodulize: function(e) {
                    var t = e.split("::");
                    return t[t.length - 1]
                },
                tableize: function(e) {
                    return e = l.underscore(e), e = l.pluralize(e), e
                },
                classify: function(e) {
                    return e = l.camelize(e), e = l.singularize(e), e
                },
                foreign_key: function(e, t) {
                    return e = l.demodulize(e), e = l.underscore(e) + (t ? "" : "_") + "id", e
                },
                ordinalize: function(e) {
                    var t = e.split(" "),
                        n = 0,
                        r = t.length;
                    for (; n < r; n++) {
                        var i = parseInt(t[n], 10);
                        if (!isNaN(i)) {
                            var s = t[n].substring(t[n].length - 2),
                                o = t[n].substring(t[n].length - 1),
                                u = "th";
                            s != "11" && s != "12" && s != "13" && (o === "1" ? u = "st" : o === "2" ? u = "nd" : o === "3" && (u = "rd")), t[n] += u
                        }
                    }
                    return t.join(" ")
                }
            };
        if (typeof exports == "undefined") return e.inflection = l;
        l.version = "1.2.5", module.exports = l
    }(this), define("inflection", function(e) {
        return function() {
            var t, n;
            return t || e.inflection
        }
    }(this)), define("common/filters/inflection", ["angular", "inflection", "lodash"], function(e, t, n) {
        "use strict";
        return e.module("oe.filters.inflection", []).filter("quantify", [function() {
            return n.memoize(function(e, n) {
                return n > 1 ? t.pluralize(e) : t.singularize(e)
            }, function() {
                var e = Array.prototype.slice.call(arguments);
                return e.join("#")
            })
        }]).filter("capitalize", [function() {
            return n.memoize(function(e) {
                return t.capitalize(e)
            })
        }])
    }), define("common/filters/map", ["angular"], function(e) {
        "use strict";
        var t = {
            captured_at: "date",
            likes_count: "likes"
        };
        return e.module("oe.filters.map", []).filter("humanize", [function() {
            return function(e) {
                return t[e] || e
            }
        }])
    }), define("common/filters/numbers", ["angular", "lodash"], function(e, t) {
        "use strict";
        var n = function(e) {
            var t, n, r, i;
            t = Math.pow(10, 1), n = ["k", "m", "b", "t"];
            for (r = n.length - 1; r >= 0; r -= 1) {
                i = Math.pow(10, (r + 1) * 3);
                if (i <= e) {
                    e = Math.round(e * t / i) / t, e === 1e3 && r < n.length - 1 && (e = 1, r += 1), e += n[r];
                    break
                }
            }
            return e.toString()
        };
        return e.module("oe.filters.numbers", []).filter("shortForm", [function() {
            return t.memoize(function(e) {
                return n(e)
            })
        }])
    }),
    function() {
        function n(t, n) {
            return n = n || "", typeof t != "string" && (t.global && n.indexOf("g") < 0 && (n += "g"), t.ignoreCase && n.indexOf("i") < 0 && (n += "i"), t.multiline && n.indexOf("m") < 0 && (n += "m"), t = t.source), new RegExp(t.replace(/#\{(\w+)\}/g, function(t, n) {
                var r = e.txt.regexen[n] || "";
                return typeof r != "string" && (r = r.source), r
            }), n)
        }

        function r(e, t) {
            return e.replace(/#\{(\w+)\}/g, function(e, n) {
                return t[n] || ""
            })
        }

        function i(e, t, n) {
            var r = String.fromCharCode(t);
            return n !== t && (r += "-" + String.fromCharCode(n)), e.push(r), e
        }

        function y(e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }

        function S(e, t, n) {
            return n ? !e || e.match(t) && RegExp["$&"] === e : typeof e == "string" && e.match(t) && RegExp["$&"] === e
        }
        if (typeof e == "undefined" || e === null) var e = {};
        e.txt = {}, e.txt.regexen = {};
        var t = {
            "&": "&amp;",
            ">": "&gt;",
            "<": "&lt;",
            '"': "&quot;",
            "'": "&#39;"
        };
        e.txt.htmlEscape = function(e) {
            return e && e.replace(/[&"'><]/g, function(e) {
                return t[e]
            })
        }, e.txt.regexSupplant = n, e.txt.stringSupplant = r, e.txt.addCharsToCharClass = i;
        var s = String.fromCharCode,
            o = [s(32), s(133), s(160), s(5760), s(6158), s(8232), s(8233), s(8239), s(8287), s(12288)];
        i(o, 9, 13), i(o, 8192, 8202);
        var u = [s(65534), s(65279), s(65535)];
        i(u, 8234, 8238), e.txt.regexen.spaces_group = n(o.join("")), e.txt.regexen.spaces = n("[" + o.join("") + "]"), e.txt.regexen.invalid_chars_group = n(u.join("")), e.txt.regexen.punct = /\!'#%&'\(\)*\+,\\\-\.\/:;<=>\?@\[\]\^_{|}~\$/, e.txt.regexen.rtl_chars = /[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/mg, e.txt.regexen.non_bmp_code_pairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/mg;
        var a = [];
        i(a, 192, 214), i(a, 216, 246), i(a, 248, 255), i(a, 256, 591), i(a, 595, 596), i(a, 598, 599), i(a, 601, 601), i(a, 603, 603), i(a, 611, 611), i(a, 616, 616), i(a, 623, 623), i(a, 626, 626), i(a, 649, 649), i(a, 651, 651), i(a, 699, 699), i(a, 768, 879), i(a, 7680, 7935), e.txt.regexen.latinAccentChars = n(a.join(""));
        var f = "A-Za-z"/*TODO:paf:maybe return original ranges, unminify (or copy/paste) ruined some stuff here*/,
            l = "0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯෦-෯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",
            c = "_‌‍꙾־׳״゛゜゠・〃་༌·";
        e.txt.regexen.hashSigns = /[#＃]/, e.txt.regexen.hashtagAlpha = new RegExp("[" + f + "]"), e.txt.regexen.hashtagAlphaNumeric = new RegExp("[" + f + l + c + "]"), e.txt.regexen.endHashtagMatch = n(/^(?:#{hashSigns}|:\/\/)/), e.txt.regexen.hashtagBoundary = new RegExp("(?:^|$|[^&" + f + l + c + "])"), e.txt.regexen.validHashtag = n(/(#{hashtagBoundary})(#{hashSigns})(#{hashtagAlphaNumeric}*#{hashtagAlpha}#{hashtagAlphaNumeric}*)/gi), e.txt.regexen.validMentionPrecedingChars = /(?:^|[^a-zA-Z0-9_!#$%&*@＠]|(?:^|[^a-zA-Z0-9_+~.-])(?:rt|RT|rT|Rt):?)/, e.txt.regexen.atSigns = /[@＠]/, e.txt.regexen.validMentionOrList = n("(#{validMentionPrecedingChars})(#{atSigns})([a-zA-Z0-9_]{1,20})(/[a-zA-Z][a-zA-Z0-9_-]{0,24})?", "g"), e.txt.regexen.validReply = n(/^(?:#{spaces})*#{atSigns}([a-zA-Z0-9_]{1,20})/), e.txt.regexen.endMentionMatch = n(/^(?:#{atSigns}|[#{latinAccentChars}]|:\/\/)/), e.txt.regexen.validUrlPrecedingChars = n(/(?:[^A-Za-z0-9@＠$#＃#{invalid_chars_group}]|^)/), e.txt.regexen.invalidUrlWithoutProtocolPrecedingChars = /[-_.\/]$/, e.txt.regexen.invalidDomainChars = r("#{punct}#{spaces_group}#{invalid_chars_group}", e.txt.regexen), e.txt.regexen.validDomainChars = n(/[^#{invalidDomainChars}]/), e.txt.regexen.validSubdomain = n(/(?:(?:#{validDomainChars}(?:[_-]|#{validDomainChars})*)?#{validDomainChars}\.)/), e.txt.regexen.validDomainName = n(/(?:(?:#{validDomainChars}(?:-|#{validDomainChars})*)?#{validDomainChars}\.)/), e.txt.regexen.validGTLD = n(RegExp("(?:(?:abb|abbott|abogado|academy|accenture|accountant|accountants|aco|active|actor|ads|adult|aeg|aero|afl|agency|aig|airforce|airtel|allfinanz|alsace|amsterdam|android|apartments|app|aquarelle|archi|army|arpa|asia|associates|attorney|auction|audio|auto|autos|axa|azure|band|bank|bar|barcelona|barclaycard|barclays|bargains|bauhaus|bayern|bbc|bbva|bcn|beer|bentley|berlin|best|bet|bharti|bible|bid|bike|bing|bingo|bio|biz|black|blackfriday|bloomberg|blue|bmw|bnl|bnpparibas|boats|bond|boo|boots|boutique|bradesco|bridgestone|broker|brother|brussels|budapest|build|builders|business|buzz|bzh|cab|cafe|cal|camera|camp|cancerresearch|canon|capetown|capital|caravan|cards|care|career|careers|cars|cartier|casa|cash|casino|cat|catering|cba|cbn|ceb|center|ceo|cern|cfa|cfd|chanel|channel|chat|cheap|chloe|christmas|chrome|church|cisco|citic|city|claims|cleaning|click|clinic|clothing|cloud|club|coach|codes|coffee|college|cologne|com|commbank|community|company|computer|condos|construction|consulting|contractors|cooking|cool|coop|corsica|country|coupons|courses|credit|creditcard|cricket|crown|crs|cruises|cuisinella|cymru|cyou|dabur|dad|dance|date|dating|datsun|day|dclk|deals|degree|delivery|delta|democrat|dental|dentist|desi|design|dev|diamonds|diet|digital|direct|directory|discount|dnp|docs|dog|doha|domains|doosan|download|drive|durban|dvag|earth|eat|edu|education|email|emerck|energy|engineer|engineering|enterprises|epson|equipment|erni|esq|estate|eurovision|eus|events|everbank|exchange|expert|exposed|express|fage|fail|faith|family|fan|fans|farm|fashion|feedback|film|finance|financial|firmdale|fish|fishing|fit|fitness|flights|florist|flowers|flsmidth|fly|foo|football|forex|forsale|forum|foundation|frl|frogans|fund|furniture|futbol|fyi|gal|gallery|game|garden|gbiz|gdn|gent|genting|ggee|gift|gifts|gives|giving|glass|gle|global|globo|gmail|gmo|gmx|gold|goldpoint|golf|goo|goog|google|gop|gov|graphics|gratis|green|gripe|group|guge|guide|guitars|guru|hamburg|hangout|haus|healthcare|help|here|hermes|hiphop|hitachi|hiv|hockey|holdings|holiday|homedepot|homes|honda|horse|host|hosting|hoteles|hotmail|house|how|hsbc|ibm|icbc|ice|icu|ifm|iinet|immo|immobilien|industries|infiniti|info|ing|ink|institute|insure|int|international|investments|ipiranga|irish|ist|istanbul|itau|iwc|java|jcb|jetzt|jewelry|jlc|jll|jobs|joburg|jprs|juegos|kaufen|kddi|kim|kitchen|kiwi|koeln|komatsu|krd|kred|kyoto|lacaixa|lancaster|land|lasalle|lat|latrobe|law|lawyer|lds|lease|leclerc|legal|lexus|lgbt|liaison|lidl|life|lighting|limited|limo|link|live|lixil|loan|loans|lol|london|lotte|lotto|love|ltda|lupin|luxe|luxury|madrid|maif|maison|man|management|mango|market|marketing|markets|marriott|mba|media|meet|melbourne|meme|memorial|men|menu|miami|microsoft|mil|mini|mma|mobi|moda|moe|mom|monash|money|montblanc|mormon|mortgage|moscow|motorcycles|mov|movie|movistar|mtn|mtpc|museum|nadex|nagoya|name|navy|nec|net|netbank|network|neustar|new|news|nexus|ngo|nhk|nico|ninja|nissan|nokia|nra|nrw|ntt|nyc|office|okinawa|omega|one|ong|onl|online|ooo|oracle|orange|org|organic|osaka|otsuka|ovh|page|panerai|paris|partners|parts|party|pet|pharmacy|philips|photo|photography|photos|physio|piaget|pics|pictet|pictures|pink|pizza|place|play|plumbing|plus|pohl|poker|porn|post|praxi|press|pro|prod|productions|prof|properties|property|pub|qpon|quebec|racing|realtor|realty|recipes|red|redstone|rehab|reise|reisen|reit|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rich|ricoh|rio|rip|rocks|rodeo|rsvp|ruhr|run|ryukyu|saarland|sakura|sale|samsung|sandvik|sandvikcoromant|sanofi|sap|sarl|saxo|sca|scb|schmidt|scholarships|school|schule|schwarz|science|scor|scot|seat|seek|sener|services|sew|sex|sexy|shiksha|shoes|show|shriram|singles|site|ski|sky|skype|sncf|soccer|social|software|sohu|solar|solutions|sony|soy|space|spiegel|spreadbetting|srl|starhub|statoil|studio|study|style|sucks|supplies|supply|support|surf|surgery|suzuki|swatch|swiss|sydney|systems|taipei|tatamotors|tatar|tattoo|tax|taxi|team|tech|technology|tel|telefonica|temasek|tennis|thd|theater|tickets|tienda|tips|tires|tirol|today|tokyo|tools|top|toray|toshiba|tours|town|toyota|toys|trade|trading|training|travel|trust|tui|ubs|university|uno|uol|vacations|vegas|ventures|vermögensberater|vermögensberatung|versicherung|vet|viajes|video|villas|vin|vision|vista|vistaprint|vlaanderen|vodka|vote|voting|voto|voyage|wales|walter|wang|watch|webcam|website|wed|wedding|weir|whoswho|wien|wiki|williamhill|win|windows|wine|wme|work|works|world|wtc|wtf|xbox|xerox|xin|xperia|xxx|xyz|yachts|yandex|yodobashi|yoga|yokohama|youtube|zip|zone|zuerich|дети|ком|москва|онлайн|орг|рус|сайт|קום|بازار|شبكة|كوم|موقع|कॉम|नेट|संगठन|คอม|みんな|グーグル|コム|世界|中信|中文网|企业|佛山|信息|健康|八卦|公司|公益|商城|商店|商标|在线|大拿|娱乐|工行|广东|慈善|我爱你|手机|政务|政府|新闻|时尚|机构|淡马锡|游戏|点看|移动|组织机构|网址|网店|网络|谷歌|集团|飞利浦|餐厅|닷넷|닷컴|삼성|onion)(?=[^0-9a-zA-Z@]|$))")), e.txt.regexen.validCCTLD = n(RegExp("(?:(?:ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bl|bm|bn|bo|bq|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mf|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|ελ|бел|мкд|мон|рф|срб|укр|қаз|հայ|الاردن|الجزائر|السعودية|المغرب|امارات|ایران|بھارت|تونس|سودان|سورية|عراق|عمان|فلسطين|قطر|مصر|مليسيا|پاکستان|भारत|বাংলা|ভারত|ਭਾਰਤ|ભારત|இந்தியா|இலங்கை|சிங்கப்பூர்|భారత్|ලංකා|ไทย|გე|中国|中國|台湾|台灣|新加坡|澳門|香港|한국)(?=[^0-9a-zA-Z@]|$))")), e.txt.regexen.validPunycode = n(/(?:xn--[0-9a-z]+)/), e.txt.regexen.validSpecialCCTLD = n(RegExp("(?:(?:co|tv)(?=[^0-9a-zA-Z@]|$))")), e.txt.regexen.validDomain = n(/(?:#{validSubdomain}*#{validDomainName}(?:#{validGTLD}|#{validCCTLD}|#{validPunycode}))/), e.txt.regexen.validAsciiDomain = n(/(?:(?:[\-a-z0-9#{latinAccentChars}]+)\.)+(?:#{validGTLD}|#{validCCTLD}|#{validPunycode})/gi), e.txt.regexen.invalidShortDomain = n(/^#{validDomainName}#{validCCTLD}$/i), e.txt.regexen.validSpecialShortDomain = n(/^#{validDomainName}#{validSpecialCCTLD}$/i), e.txt.regexen.validPortNumber = n(/[0-9]+/), e.txt.regexen.validGeneralUrlPathChars = n(/[a-z0-9!\*';:=\+,\.\$\/%#\[\]\-_~@|&#{latinAccentChars}]/i), e.txt.regexen.validUrlBalancedParens = n("\\((?:#{validGeneralUrlPathChars}+|(?:#{validGeneralUrlPathChars}*\\(#{validGeneralUrlPathChars}+\\)#{validGeneralUrlPathChars}*))\\)", "i"), e.txt.regexen.validUrlPathEndingChars = n(/[\+\-a-z0-9=_#\/#{latinAccentChars}]|(?:#{validUrlBalancedParens})/i), e.txt.regexen.validUrlPath = n("(?:(?:#{validGeneralUrlPathChars}*(?:#{validUrlBalancedParens}#{validGeneralUrlPathChars}*)*#{validUrlPathEndingChars})|(?:@#{validGeneralUrlPathChars}+/))", "i"), e.txt.regexen.validUrlQueryChars = /[a-z0-9!?\*'@\(\);:&=\+\$\/%#\[\]\-_\.,~|]/i, e.txt.regexen.validUrlQueryEndingChars = /[a-z0-9_&=#\/]/i, e.txt.regexen.extractUrl = n("((#{validUrlPrecedingChars})((https?:\\/\\/)?(#{validDomain})(?::(#{validPortNumber}))?(\\/#{validUrlPath}*)?(\\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?))", "gi"), e.txt.regexen.validTcoUrl = /^https?:\/\/t\.co\/[a-z0-9]+/i, e.txt.regexen.urlHasProtocol = /^https?:\/\//i, e.txt.regexen.urlHasHttps = /^https:\/\//i, e.txt.regexen.cashtag = /[a-z]{1,6}(?:[._][a-z]{1,2})?/i, e.txt.regexen.validCashtag = n("(^|#{spaces})(\\$)(#{cashtag})(?=$|\\s|[#{punct}])", "gi"), e.txt.regexen.validateUrlUnreserved = /[a-z0-9\-._~]/i, e.txt.regexen.validateUrlPctEncoded = /(?:%[0-9a-f]{2})/i, e.txt.regexen.validateUrlSubDelims = /[!$&'()*+,;=]/i, e.txt.regexen.validateUrlPchar = n("(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|[:|@])", "i"), e.txt.regexen.validateUrlScheme = /(?:[a-z][a-z0-9+\-.]*)/i, e.txt.regexen.validateUrlUserinfo = n("(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|:)*", "i"), e.txt.regexen.validateUrlDecOctet = /(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9]{2})|(?:2[0-4][0-9])|(?:25[0-5]))/i, e.txt.regexen.validateUrlIpv4 = n(/(?:#{validateUrlDecOctet}(?:\.#{validateUrlDecOctet}){3})/i), e.txt.regexen.validateUrlIpv6 = /(?:\[[a-f0-9:\.]+\])/i, e.txt.regexen.validateUrlIp = n("(?:#{validateUrlIpv4}|#{validateUrlIpv6})", "i"), e.txt.regexen.validateUrlSubDomainSegment = /(?:[a-z0-9](?:[a-z0-9_\-]*[a-z0-9])?)/i, e.txt.regexen.validateUrlDomainSegment = /(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)/i, e.txt.regexen.validateUrlDomainTld = /(?:[a-z](?:[a-z0-9\-]*[a-z0-9])?)/i, e.txt.regexen.validateUrlDomain = n(/(?:(?:#{validateUrlSubDomainSegment]}\.)*(?:#{validateUrlDomainSegment]}\.)#{validateUrlDomainTld})/i), e.txt.regexen.validateUrlHost = n("(?:#{validateUrlIp}|#{validateUrlDomain})", "i"), e.txt.regexen.validateUrlUnicodeSubDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9_\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i, e.txt.regexen.validateUrlUnicodeDomainSegment = /(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i, e.txt.regexen.validateUrlUnicodeDomainTld = /(?:(?:[a-z]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i, e.txt.regexen.validateUrlUnicodeDomain = n(/(?:(?:#{validateUrlUnicodeSubDomainSegment}\.)*(?:#{validateUrlUnicodeDomainSegment}\.)#{validateUrlUnicodeDomainTld})/i), e.txt.regexen.validateUrlUnicodeHost = n("(?:#{validateUrlIp}|#{validateUrlUnicodeDomain})", "i"), e.txt.regexen.validateUrlPort = /[0-9]{1,5}/, e.txt.regexen.validateUrlUnicodeAuthority = n("(?:(#{validateUrlUserinfo})@)?(#{validateUrlUnicodeHost})(?::(#{validateUrlPort}))?", "i"), e.txt.regexen.validateUrlAuthority = n("(?:(#{validateUrlUserinfo})@)?(#{validateUrlHost})(?::(#{validateUrlPort}))?", "i"), e.txt.regexen.validateUrlPath = n(/(\/#{validateUrlPchar}*)*/i), e.txt.regexen.validateUrlQuery = n(/(#{validateUrlPchar}|\/|\?)*/i), e.txt.regexen.validateUrlFragment = n(/(#{validateUrlPchar}|\/|\?)*/i), e.txt.regexen.validateUrlUnencoded = n("^(?:([^:/?#]+):\\/\\/)?([^/?#]*)([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$", "i");
        var h = "tweet-url list-slug",
            p = "tweet-url username",
            d = "tweet-url hashtag",
            v = "tweet-url cashtag",
            m = {
                urlClass: !0,
                listClass: !0,
                usernameClass: !0,
                hashtagClass: !0,
                cashtagClass: !0,
                usernameUrlBase: !0,
                listUrlBase: !0,
                hashtagUrlBase: !0,
                cashtagUrlBase: !0,
                usernameUrlBlock: !0,
                listUrlBlock: !0,
                hashtagUrlBlock: !0,
                linkUrlBlock: !0,
                usernameIncludeSymbol: !0,
                suppressLists: !0,
                suppressNoFollow: !0,
                targetBlank: !0,
                suppressDataScreenName: !0,
                urlEntities: !0,
                symbolTag: !0,
                textWithSymbolTag: !0,
                urlTarget: !0,
                invisibleTagAttrs: !0,
                linkAttributeBlock: !0,
                linkTextBlock: !0,
                htmlEscapeNonEntities: !0
            },
            g = {
                disabled: !0,
                readonly: !0,
                multiple: !0,
                checked: !0
            };
        e.txt.tagAttrs = function(t) {
            var n = "";
            for (var r in t) {
                var i = t[r];
                g[r] && (i = i ? r : null);
                if (i == null) continue;
                n += " " + e.txt.htmlEscape(r) + '="' + e.txt.htmlEscape(i.toString()) + '"'
            }
            return n
        }, e.txt.linkToText = function(t, n, i, s) {
            s.suppressNoFollow || (i.rel = "nofollow"), s.linkAttributeBlock && s.linkAttributeBlock(t, i), s.linkTextBlock && (n = s.linkTextBlock(t, n));
            var o = {
                text: n,
                attr: e.txt.tagAttrs(i)
            };
            return r("<a#{attr}>#{text}</a>", o)
        }, e.txt.linkToTextWithSymbol = function(t, n, r, i, s) {
            var o = s.symbolTag ? "<" + s.symbolTag + ">" + n + "</" + s.symbolTag + ">" : n;
            r = e.txt.htmlEscape(r);
            var u = s.textWithSymbolTag ? "<" + s.textWithSymbolTag + ">" + r + "</" + s.textWithSymbolTag + ">" : r;
            return s.usernameIncludeSymbol || !n.match(e.txt.regexen.atSigns) ? e.txt.linkToText(t, o + u, i, s) : o + e.txt.linkToText(t, u, i, s)
        }, e.txt.linkToHashtag = function(t, n, r) {
            var i = n.substring(t.indices[0], t.indices[0] + 1),
                s = e.txt.htmlEscape(t.hashtag),
                o = y(r.htmlAttrs || {});
            return o.href = r.hashtagUrlBase + s, o.title = "#" + s, o["class"] = r.hashtagClass, s.charAt(0).match(e.txt.regexen.rtl_chars) && (o["class"] += " rtl"), r.targetBlank && (o.target = "_blank"), e.txt.linkToTextWithSymbol(t, i, s, o, r)
        }, e.txt.linkToCashtag = function(t, n, r) {
            var i = e.txt.htmlEscape(t.cashtag),
                s = y(r.htmlAttrs || {});
            return s.href = r.cashtagUrlBase + i, s.title = "$" + i, s["class"] = r.cashtagClass, r.targetBlank && (s.target = "_blank"), e.txt.linkToTextWithSymbol(t, "$", i, s, r)
        }, e.txt.linkToMentionAndList = function(t, n, r) {
            var i = n.substring(t.indices[0], t.indices[0] + 1),
                s = e.txt.htmlEscape(t.screenName),
                o = e.txt.htmlEscape(t.listSlug),
                u = t.listSlug && !r.suppressLists,
                a = y(r.htmlAttrs || {});
            return a["class"] = u ? r.listClass : r.usernameClass, a.href = u ? r.listUrlBase + s + o : r.usernameUrlBase + s, !u && !r.suppressDataScreenName && (a["data-screen-name"] = s), r.targetBlank && (a.target = "_blank"), e.txt.linkToTextWithSymbol(t, i, u ? s + o : s, a, r)
        }, e.txt.linkToUrl = function(t, n, r) {
            var i = t.url,
                s = i,
                o = e.txt.htmlEscape(s),
                u = r.urlEntities && r.urlEntities[i] || t;
            u.display_url && (o = e.txt.linkTextWithEntity(u, r));
            var a = y(r.htmlAttrs || {});
            return i.match(e.txt.regexen.urlHasProtocol) || (i = "http://" + i), a.href = i, r.targetBlank && (a.target = "_blank"), r.urlClass && (a["class"] = r.urlClass), r.urlTarget && (a.target = r.urlTarget), !r.title && u.display_url && (a.title = u.expanded_url), e.txt.linkToText(t, o, a, r)
        }, e.txt.linkTextWithEntity = function(t, n) {
            var i = t.display_url,
                s = t.expanded_url,
                o = i.replace(/…/g, "");
            if (s.indexOf(o) != -1) {
                var u = s.indexOf(o),
                    a = {
                        displayUrlSansEllipses: o,
                        beforeDisplayUrl: s.substr(0, u),
                        afterDisplayUrl: s.substr(u + o.length),
                        precedingEllipsis: i.match(/^…/) ? "…" : "",
                        followingEllipsis: i.match(/…$/) ? "…" : ""
                    };
                for (var f in a) a.hasOwnProperty(f) && (a[f] = e.txt.htmlEscape(a[f]));
                return a.invisible = n.invisibleTagAttrs, r("<span class='tco-ellipsis'>#{precedingEllipsis}<span #{invisible}>&nbsp;</span></span><span #{invisible}>#{beforeDisplayUrl}</span><span class='js-display-url'>#{displayUrlSansEllipses}</span><span #{invisible}>#{afterDisplayUrl}</span><span class='tco-ellipsis'><span #{invisible}>&nbsp;</span>#{followingEllipsis}</span>", a)
            }
            return i
        }, e.txt.autoLinkEntities = function(t, n, r) {
            r = y(r || {}), r.hashtagClass = r.hashtagClass || d, r.hashtagUrlBase = r.hashtagUrlBase || "https://twitter.com/#!/search?q=%23", r.cashtagClass = r.cashtagClass || v, r.cashtagUrlBase = r.cashtagUrlBase || "https://twitter.com/#!/search?q=%24", r.listClass = r.listClass || h, r.usernameClass = r.usernameClass || p, r.usernameUrlBase = r.usernameUrlBase || "https://twitter.com/", r.listUrlBase = r.listUrlBase || "https://twitter.com/", r.htmlAttrs = e.txt.extractHtmlAttrsFromOptions(r), r.invisibleTagAttrs = r.invisibleTagAttrs || "style='position:absolute;left:-9999px;'";
            var i, s, o;
            if (r.urlEntities) {
                i = {};
                for (s = 0, o = r.urlEntities.length; s < o; s++) i[r.urlEntities[s].url] = r.urlEntities[s];
                r.urlEntities = i
            }
            var u = "",
                a = 0;
            n.sort(function(e, t) {
                return e.indices[0] - t.indices[0]
            });
            var f = r.htmlEscapeNonEntities ? e.txt.htmlEscape : function(e) {
                return e
            };
            for (var s = 0; s < n.length; s++) {
                var l = n[s];
                u += f(t.substring(a, l.indices[0])), l.url ? u += e.txt.linkToUrl(l, t, r) : l.hashtag ? u += e.txt.linkToHashtag(l, t, r) : l.screenName ? u += e.txt.linkToMentionAndList(l, t, r) : l.cashtag && (u += e.txt.linkToCashtag(l, t, r)), a = l.indices[1]
            }
            return u += f(t.substring(a, t.length)), u
        }, e.txt.autoLinkWithJSON = function(t, n, r) {
            if (n.user_mentions)
                for (var i = 0; i < n.user_mentions.length; i++) n.user_mentions[i].screenName = n.user_mentions[i].screen_name;
            if (n.hashtags)
                for (var i = 0; i < n.hashtags.length; i++) n.hashtags[i].hashtag = n.hashtags[i].text;
            if (n.symbols)
                for (var i = 0; i < n.symbols.length; i++) n.symbols[i].cashtag = n.symbols[i].text;
            var s = [];
            for (var o in n) s = s.concat(n[o]);
            return e.txt.modifyIndicesFromUnicodeToUTF16(t, s), e.txt.autoLinkEntities(t, s, r)
        }, e.txt.extractHtmlAttrsFromOptions = function(e) {
            var t = {};
            for (var n in e) {
                var r = e[n];
                if (m[n]) continue;
                g[n] && (r = r ? n : null);
                if (r == null) continue;
                t[n] = r
            }
            return t
        }, e.txt.autoLink = function(t, n) {
            var r = e.txt.extractEntitiesWithIndices(t, {
                extractUrlsWithoutProtocol: !1
            });
            return e.txt.autoLinkEntities(t, r, n)
        }, e.txt.autoLinkUsernamesOrLists = function(t, n) {
            var r = e.txt.extractMentionsOrListsWithIndices(t);
            return e.txt.autoLinkEntities(t, r, n)
        }, e.txt.autoLinkHashtags = function(t, n) {
            var r = e.txt.extractHashtagsWithIndices(t);
            return e.txt.autoLinkEntities(t, r, n)
        }, e.txt.autoLinkCashtags = function(t, n) {
            var r = e.txt.extractCashtagsWithIndices(t);
            return e.txt.autoLinkEntities(t, r, n)
        }, e.txt.autoLinkUrlsCustom = function(t, n) {
            var r = e.txt.extractUrlsWithIndices(t, {
                extractUrlsWithoutProtocol: !1
            });
            return e.txt.autoLinkEntities(t, r, n)
        }, e.txt.removeOverlappingEntities = function(e) {
            e.sort(function(e, t) {
                return e.indices[0] - t.indices[0]
            });
            var t = e[0];
            for (var n = 1; n < e.length; n++) t.indices[1] > e[n].indices[0] ? (e.splice(n, 1), n--) : t = e[n]
        }, e.txt.extractEntitiesWithIndices = function(t, n) {
            var r = e.txt.extractUrlsWithIndices(t, n).concat(e.txt.extractMentionsOrListsWithIndices(t)).concat(e.txt.extractHashtagsWithIndices(t, {
                checkUrlOverlap: !1
            })).concat(e.txt.extractCashtagsWithIndices(t));
            return r.length == 0 ? [] : (e.txt.removeOverlappingEntities(r), r)
        }, e.txt.extractMentions = function(t) {
            var n = [],
                r = e.txt.extractMentionsWithIndices(t);
            for (var i = 0; i < r.length; i++) {
                var s = r[i].screenName;
                n.push(s)
            }
            return n
        }, e.txt.extractMentionsWithIndices = function(t) {
            var n = [],
                r, i = e.txt.extractMentionsOrListsWithIndices(t);
            for (var s = 0; s < i.length; s++) r = i[s], r.listSlug == "" && n.push({
                screenName: r.screenName,
                indices: r.indices
            });
            return n
        }, e.txt.extractMentionsOrListsWithIndices = function(t) {
            if (!t || !t.match(e.txt.regexen.atSigns)) return [];
            var n = [],
                r;
            return t.replace(e.txt.regexen.validMentionOrList, function(t, r, i, s, o, u, a) {
                var f = a.slice(u + t.length);
                if (!f.match(e.txt.regexen.endMentionMatch)) {
                    o = o || "";
                    var l = u + r.length,
                        c = l + s.length + o.length + 1;
                    n.push({
                        screenName: s,
                        listSlug: o,
                        indices: [l, c]
                    })
                }
            }), n
        }, e.txt.extractReplies = function(t) {
            if (!t) return null;
            var n = t.match(e.txt.regexen.validReply);
            return !n || RegExp.rightContext.match(e.txt.regexen.endMentionMatch) ? null : n[1]
        }, e.txt.extractUrls = function(t, n) {
            var r = [],
                i = e.txt.extractUrlsWithIndices(t, n);
            for (var s = 0; s < i.length; s++) r.push(i[s].url);
            return r
        }, e.txt.extractUrlsWithIndices = function(t, n) {
            n || (n = {
                extractUrlsWithoutProtocol: !0
            });
            if (!t || (n.extractUrlsWithoutProtocol ? !t.match(/\./) : !t.match(/:/))) return [];
            var r = [];
            while (e.txt.regexen.extractUrl.exec(t)) {
                var i = RegExp.$2,
                    s = RegExp.$3,
                    o = RegExp.$4,
                    u = RegExp.$5,
                    a = RegExp.$7,
                    f = e.txt.regexen.extractUrl.lastIndex,
                    l = f - s.length;
                if (!o) {
                    if (!n.extractUrlsWithoutProtocol || i.match(e.txt.regexen.invalidUrlWithoutProtocolPrecedingChars)) continue;
                    var c = null,
                        h = 0;
                    u.replace(e.txt.regexen.validAsciiDomain, function(t) {
                        var n = u.indexOf(t, h);
                        h = n + t.length, c = {
                            url: t,
                            indices: [l + n, l + h]
                        }, (a || t.match(e.txt.regexen.validSpecialShortDomain) || !t.match(e.txt.regexen.invalidShortDomain)) && r.push(c)
                    });
                    if (c == null) continue;
                    a && (c.url = s.replace(u, c.url), c.indices[1] = f)
                } else s.match(e.txt.regexen.validTcoUrl) && (s = RegExp.lastMatch, f = l + s.length), r.push({
                    url: s,
                    indices: [l, f]
                })
            }
            return r
        }, e.txt.extractHashtags = function(t) {
            var n = [],
                r = e.txt.extractHashtagsWithIndices(t);
            for (var i = 0; i < r.length; i++) n.push(r[i].hashtag);
            return n
        }, e.txt.extractHashtagsWithIndices = function(t, n) {
            n || (n = {
                checkUrlOverlap: !0
            });
            if (!t || !t.match(e.txt.regexen.hashSigns)) return [];
            var r = [];
            t.replace(e.txt.regexen.validHashtag, function(t, n, i, s, o, u) {
                var a = u.slice(o + t.length);
                if (a.match(e.txt.regexen.endHashtagMatch)) return;
                var f = o + n.length,
                    l = f + s.length + 1;
                r.push({
                    hashtag: s,
                    indices: [f, l]
                })
            });
            if (n.checkUrlOverlap) {
                var i = e.txt.extractUrlsWithIndices(t);
                if (i.length > 0) {
                    var s = r.concat(i);
                    e.txt.removeOverlappingEntities(s), r = [];
                    for (var o = 0; o < s.length; o++) s[o].hashtag && r.push(s[o])
                }
            }
            return r
        }, e.txt.extractCashtags = function(t) {
            var n = [],
                r = e.txt.extractCashtagsWithIndices(t);
            for (var i = 0; i < r.length; i++) n.push(r[i].cashtag);
            return n
        }, e.txt.extractCashtagsWithIndices = function(t) {
            if (!t || t.indexOf("$") == -1) return [];
            var n = [];
            return t.replace(e.txt.regexen.validCashtag, function(e, t, r, i, s, o) {
                var u = s + t.length,
                    a = u + i.length + 1;
                n.push({
                    cashtag: i,
                    indices: [u, a]
                })
            }), n
        }, e.txt.modifyIndicesFromUnicodeToUTF16 = function(t, n) {
            e.txt.convertUnicodeIndices(t, n, !1)
        }, e.txt.modifyIndicesFromUTF16ToUnicode = function(t, n) {
            e.txt.convertUnicodeIndices(t, n, !0)
        }, e.txt.getUnicodeTextLength = function(t) {
            return t.replace(e.txt.regexen.non_bmp_code_pairs, " ").length
        }, e.txt.convertUnicodeIndices = function(e, t, n) {
            if (t.length == 0) return;
            var r = 0,
                i = 0;
            t.sort(function(e, t) {
                return e.indices[0] - t.indices[0]
            });
            var s = 0,
                o = t[0];
            while (r < e.length) {
                if (o.indices[0] == (n ? r : i)) {
                    var u = o.indices[1] - o.indices[0];
                    o.indices[0] = n ? i : r, o.indices[1] = o.indices[0] + u, s++;
                    if (s == t.length) break;
                    o = t[s]
                }
                var a = e.charCodeAt(r);
                55296 <= a && a <= 56319 && r < e.length - 1 && (a = e.charCodeAt(r + 1), 56320 <= a && a <= 57343 && r++), i++, r++
            }
        }, e.txt.splitTags = function(e) {
            var t = e.split("<"),
                n, r = [],
                i;
            for (var s = 0; s < t.length; s += 1) {
                i = t[s];
                if (!i) r.push("");
                else {
                    n = i.split(">");
                    for (var o = 0; o < n.length; o += 1) r.push(n[o])
                }
            }
            return r
        }, e.txt.hitHighlight = function(t, n, r) {
            var i = "em";
            n = n || [], r = r || {};
            if (n.length === 0) return t;
            var s = r.tag || i,
                o = ["<" + s + ">", "</" + s + ">"],
                u = e.txt.splitTags(t),
                a, f, l = "",
                c = 0,
                h = u[0],
                p = 0,
                d = 0,
                v = !1,
                m = h,
                g = [],
                y, b, w, E, S;
            for (a = 0; a < n.length; a += 1)
                for (f = 0; f < n[a].length; f += 1) g.push(n[a][f]);
            for (y = 0; y < g.length; y += 1) {
                b = g[y], w = o[y % 2], E = !1;
                while (h != null && b >= p + h.length) l += m.slice(d), v && b === p + m.length && (l += w, E = !0), u[c + 1] && (l += "<" + u[c + 1] + ">"), p += m.length, d = 0, c += 2, h = u[c], m = h, v = !1;
                !E && h != null ? (S = b - p, l += m.slice(d, S) + w, d = S, y % 2 === 0 ? v = !0 : v = !1) : E || (E = !0, l += w)
            }
            if (h != null) {
                d < m.length && (l += m.slice(d));
                for (y = c + 1; y < u.length; y += 1) l += y % 2 === 0 ? u[y] : "<" + u[y] + ">"
            }
            return l
        };
        var b = 140,
            w = [s(65534), s(65279), s(65535), s(8234), s(8235), s(8236), s(8237), s(8238)];
        e.txt.getTweetLength = function(t, n) {
            n || (n = {
                short_url_length: 23,
                short_url_length_https: 23
            });
            var r = e.txt.getUnicodeTextLength(t),
                i = e.txt.extractUrlsWithIndices(t);
            e.txt.modifyIndicesFromUTF16ToUnicode(t, i);
            for (var s = 0; s < i.length; s++) r += i[s].indices[0] - i[s].indices[1], i[s].url.toLowerCase().match(e.txt.regexen.urlHasHttps) ? r += n.short_url_length_https : r += n.short_url_length;
            return r
        }, e.txt.isInvalidTweet = function(t) {
            return t ? e.txt.getTweetLength(t) > b ? "too_long" : e.txt.hasInvalidCharacters(t) ? "invalid_characters" : !1 : "empty"
        }, e.txt.hasInvalidCharacters = function(e) {
            for (var t = 0; t < w.length; t++)
                if (e.indexOf(w[t]) >= 0) return !0;
            return !1
        }, e.txt.isValidTweetText = function(t) {
            return !e.txt.isInvalidTweet(t)
        }, e.txt.isValidUsername = function(t) {
            if (!t) return !1;
            var n = e.txt.extractMentions(t);
            return n.length === 1 && n[0] === t.slice(1)
        };
        var E = n(/^#{validMentionOrList}$/);
        e.txt.isValidList = function(e) {
            var t = e.match(E);
            return !!t && t[1] == "" && !!t[4]
        }, e.txt.isValidHashtag = function(t) {
            if (!t) return !1;
            var n = e.txt.extractHashtags(t);
            return n.length === 1 && n[0] === t.slice(1)
        }, e.txt.isValidUrl = function(t, n, r) {
            n == null && (n = !0), r == null && (r = !0);
            if (!t) return !1;
            var i = t.match(e.txt.regexen.validateUrlUnencoded);
            if (!i || i[0] !== t) return !1;
            var s = i[1],
                o = i[2],
                u = i[3],
                a = i[4],
                f = i[5];
            return (!r || S(s, e.txt.regexen.validateUrlScheme) && s.match(/^https?$/i)) && S(u, e.txt.regexen.validateUrlPath) && S(a, e.txt.regexen.validateUrlQuery, !0) && S(f, e.txt.regexen.validateUrlFragment, !0) ? n && S(o, e.txt.regexen.validateUrlUnicodeAuthority) || !n && S(o, e.txt.regexen.validateUrlAuthority) : !1
        }, typeof module != "undefined" && module.exports && (module.exports = e.txt), typeof define == "function" && define.amd && define("twitterText", [], e.txt);
        if (typeof window != "undefined")
            if (window.twttr)
                for (var x in e) window.twttr[x] = e[x];
            else window.twttr = e
    }(), define("common/filters/capture", ["angular", "lodash", "twitterText"], function(e, t, n) {
        "use strict";
        return e.module("oe.filters.capture", []).filter("captureMentions", ["$sce", function(e) {
            return t.memoize(function(r) {
                return r = r.$$unwrapTrustedValue ? r.$$unwrapTrustedValue() : r, e.trustAsHtml(t.reduce(n.extractMentions(r), function(e, t) {
                    return e.replace("@" + t, function(e) {
                        return '<a href="/u/' + t + '">@' + t + "</a>"
                    })
                }, r))
            })
        }]).filter("captureHashtags", ["$sce", function(e) {
            return t.memoize(function(r) {
                return r = r.$$unwrapTrustedValue ? r.$$unwrapTrustedValue() : r, e.trustAsHtml(t.reduce(n.extractHashtags(r), function(e, t) {
                    return e.replace("#" + t, function(e) {
                        return '<a href="/search/seenes?q=' + t + '">#' + t + "</a>"
                    })
                }, r))
            })
        }])
    }), define("common/filters/uri", ["angular", "lodash"], function(e, t) {
        "use strict";
        var n = /^(https?|file|ftps?|mailto|javascript|data:image\/[^;]{2,9};):/i;
        return e.module("oe.filters.uri", []).filter("relProtocol", [function() {
            return t.memoize(function(e) {
                return !e || typeof e != "string" ? e : e.replace(/^(https?):/i, "")
            })
        }]).filter("addOriginQuery", ["$window", function(e) {
            return t.memoize(function(t) {
                return t + "?domain=" + e.location.host
            })
        }]).filter("stripProtocol", [function() {
            return t.memoize(function(e) {
                return e.replace(/.*?:\/\//g, "")
            })
        }]).filter("embedUrl", ["$sce", function(e) {
            return t.memoize(function(t) {
                return e.trustAsResourceUrl("*")
            })
        }]).filter("relToAbs", ["$window", "$sce", function(e, r) {
            return t.memoize(function(t) {
                var r = e.location,
                    i;
                if (n.test(t)) return t;
                i = r.href.match(/^(.+)\/?(?:#.+)?$/)[0] + "/";
                if (t.substring(0, 2) === "//") return r.protocol + t;
                if (t.charAt(0) === "/") return r.protocol + "//" + r.host + t;
                if (t.substring(0, 2) === "./") t = "." + t;
                else {
                    if (/^\s*$/.test(t)) return "";
                    t = "../" + t
                }
                t = i + t;
                while (/\/\.\.\//.test(t)) t = t.replace(/[^\/]+\/+\.\.\//g, "");
                return t
            })
        }])
    }), define("common/filters/index", ["angular", "./date", "./image", "./inflection", "./map", "./numbers", "./capture", "./uri"], function(e) {
        "use strict";
        return e.module("oe.filters", ["oe.filters.date", "oe.filters.image", "oe.filters.inflection", "oe.filters.map", "oe.filters.numbers", "oe.filters.capture", "oe.filters.uri"])
    }), define("threejs", [], function() {
        "use strict";
        return window.THREE
    }), define("common/directives/three", ["angular", "threejs"], function(e, t) {
        "use strict";
        return e.module("oe.directives.three", ["oe.services.three"]).directive("obviModel", ["Renderer", "onAnimate", "onResize", "onMouseUp", "$timeout", "debounce", "$window", "$supports", function(n, r, i, s, o, u, a, f) {
            return {
                restrict: "EA",
                link: function(l, c, h) {
                    function $() {
                        F = c[0].offsetWidth, I = F, U && q && (U.aspect = F / I, U.updateProjectionMatrix(), q.setSize(F, I))
                    }

                    function J() {
                        R && U && !j && (et(), Z(), tt(), q.render(R, U)), X = r(J, l)
                    }

                    function K() {
                        return o(function() {
                            $(), l.ready = !0, ut(F * .5, I * .5), V = nt(0, x)
                        }, 0)
                    }

                    function Q() {
                        function e(e) {
                            var t = e.touches;
                            return t ? t[0] : null
                        }

                        function n(e) {
                            var n = e.clientX || e.offsetX || e.layerX,
                                r = e.clientY || e.offsetY || e.layerY;
                            return new t.Vector2(n, r)
                        }
                        c.bind("touchstart", function(t) {
                            var r;
                            f.android && t.preventDefault(), r = n(e(t) || t), ut(r.x, r.y), st(r.x, r.y)
                        }), c.bind("touchmove", function(t) {
                            var r = n(e(t) || t);
                            it(r.x, r.y)
                        }), c.bind("touchend", function(t) {
                            var r;
                            f.android && t.preventDefault(), r = n(e(t) || t), at(r.x, r.y), ot(r.x, r.y)
                        })
                    }

                    function G() {
                        function e(e) {
                            var n = e.offsetX || e.layerX,
                                r = e.offsetY || e.layerY;
                            return new t.Vector2(n, r)
                        }
                        c.bind("mousemove", function(t) {
                            var n = e(t);
                            it(n.x, n.y)
                        }), c.bind("mousedown", function(e) {
                            st(), e.preventDefault()
                        }), c.bind("mouseup", function(t) {
                            var n = e(t);
                            ot(n.x, n.y)
                        }), c.bind("mouseenter", function(t) {
                            var n = e(t);
                            pt(!0), ut(n.x, n.y)
                        }), c.bind("mouseleave", function(t) {
                            var n = e(t);
                            at(n.x, n.y)
                        })
                    }

                    function Y(e) {
                        e = e || {};
                        var n = e.fov || 32,
                            r = e.up = new t.Vector3(-1, 0, 0),
                            i = new t.PerspectiveCamera(n, F / I, .01, 1e3);
                        return i.position.set(0, 0, 1), i.up = r, i
                    }

                    function Z() {
                        var e, n, r, i;
                        i = C.length() < .005, i ? H += 1 : H = 0, H > 30 ? (L.x *= d, L.y *= d) : (e = new t.Quaternion, e.setFromEuler(new t.Euler(-C.y, C.x, 0)), A.copy(L), L.applyQuaternion(e)), r = L.x * L.x + L.y * L.y, r > E && (n = Math.sqrt(r), L.x *= w / n, L.y *= w / n), L.normalize()
                    }

                    function et() {
                        var e, t, n;
                        l.pointer.leave ? P.multiplyScalar(d) : (l.pointer.down ? (P.add(D), D.multiplyScalar(m)) : (n = Math.min(B, g) / g, B += 1, P.x = (1 - n) * P.x + n * M.x, P.y = (1 - n) * P.y + n * M.y), t = P.x * P.x + P.y * P.y, t > b && (e = Math.sqrt(t), P.x *= y / e, P.y *= y / e))
                    }

                    function tt() {
                        A.equals(L) ? (O.setX(-P.y * .5), O.setY(-P.x * .5)) : (O.setX(L.x * .5 - P.y * .5), O.setY(L.y * .5 - P.x * .5)), U.position.copy(O), U.position.normalize(), U.lookAt(k)
                    }

                    function nt(e, n) {
                        var r, i, s, u, a, f;
                        return e = e || 0, r = n || x, a = F * S, f = Math.min(a, a * .001 * e), i = F * .5 + f * Math.cos(e * 2 * Math.PI / r), s = F * .5 + f * Math.sin(e * 2 * Math.PI / r), u = new t.Vector2(i, s), V && o.cancel(V), it(u.x, u.y), V = o(function() {
                            return nt(e + 1, n)
                        }, 1 / r), V
                    }

                    function rt(e, n) {
                        var r = n / I - .5,
                            i = e / F - .5;
                        return new t.Vector2(i, r)
                    }

                    function it(e, t) {
                        var n = rt(e, t);
                        l.pointer.x = e, l.pointer.y = t, M.setX(n.x), M.setY(n.y), D.setX(n.x - _.x), D.setY(n.y - _.y), _.setX(n.x), _.setY(n.y)
                    }

                    function st() {
                        l.pointer.down = !0
                    }

                    function ot() {
                        l.pointer.down = !1
                    }

                    function ut(e, t) {
                        var n = rt(e, t);
                        B = 0, l.pointer.enter = !0, l.pointer.leave = !1, _.setX(n.x), _.setY(n.y)
                    }

                    function at() {
                        l.pointer.enter = !1, l.pointer.leave = !0
                    }

                    function ft(e) {
                        var t = e.rotationRate,
                            n = e.interval,
                            r = t.alpha * p,
                            i = t.beta * p,
                            s = t.gamma * p,
                            o, u;
                        switch (N) {
                            case 90:
                                o = -i, u = r;
                                break;
                            case -90:
                                o = i, u = -r;
                                break;
                            case 180:
                                o = -r, u = -i;
                                break;
                            default:
                                o = r, u = i
                        }
                        C.set(o * v, u * v, 0)
                    }

                    function lt(e) {
                        N = a.orientation
                    }

                    function ct() {
                        !ht() && !V ? (ut(F * .5, I * .5), V = nt(0, x)) : ht() && (o.cancel(V), V = null)
                    }

                    function ht() {
                        return l && l.interaction ? !l.interaction.sleeping : !1
                    }

                    function pt(e) {
                        l && l.interaction && (l.interaction.sleeping = !e)
                    }

                    function dt(e, t) {
                        t && typeof t.render == "boolean" && (j = !t.render)
                    }

                    function vt(e) {
                        var t, n;
                        for (n = e.children.length - 1; n >= 0; n -= 1) t = e.children[n], t !== U && (t.geometry && t.geometry.dispose(), t.material && t.material.dispose(), e.remove(t));
                        e = null, U = null, z = null, W = null
                    }

                    function mt() {
                        a.cancelAnimationFrame(X), a.removeEventListener("devicemotion", ft), a.removeEventListener("orientationchange", lt), o.cancel(V), e.forEach(T, function(e) {
                            e()
                        }), T.length = 0, vt(R)
                    }
                    var p = Math.PI / 180,
                        d = .97,
                        v = f.iOS ? .015 : 1,
                        m = .85,
                        g = 50,
                        y = .25,
                        b = y * y,
                        w = .25,
                        E = w * w,
                        S = .1,
                        x = 850,
                        T = [],
                        N = a.orientation,
                        C = new t.Vector3,
                        k = new t.Vector3,
                        L = new t.Vector3(0, 0, 1),
                        A = L.clone(),
                        O = new t.Vector3(0, 0, 1),
                        M = new t.Vector2,
                        _ = new t.Vector2,
                        D = new t.Vector2,
                        P = new t.Vector2,
                        H = 0,
                        B = 0,
                        j = !1,
                        F, I, q, R, U, z, W, X, V;
                    $(), l.style = function() {
                        return {
                            height: F + "px"
                        }
                    }, l.pointer = {
                        x: F * .5,
                        y: I * .5,
                        enter: !1,
                        leave: !0,
                        down: !1
                    }, l.$watch("model", function(e) {
                        e && e.cameraOptions && (U = Y(e.cameraOptions)), e && e.geometry && e.materials && (W = new t.Mesh(e.geometry, e.materials[0]), e.materials[0].overdraw = !0, R.add(W), K())
                    }), T.push(i(u($, 25, !0))), T.push(s(function() {
                        l.pointer.down = !1
                    })), Q(), G(), R = new t.Scene, z = new t.AmbientLight(16777215), R.add(z), q = n.get(), q.setSize(F, I), c.append(q.domElement), l.$watch("interaction.sleeping", ct), l.$on("scene:op", dt), l.$on("$destroy", mt), c.bind("mousemove touchmove touchstart", ct), a.addEventListener("devicemotion", ft, !1), a.addEventListener("orientationchange", lt, !1), J()
                }
            }
        }])
    }), define("common/directives/generic", ["angular", "threejs", "lodash"], function(e, t, n) {
        "use strict";
        var r = e.module("oe.directives.generic", ["oe.services.tracking", "oe.services.breadcrumbs", "oe.services.supports", "oe.services.constants"]);
        return r.directive("errSrc", function() {
            return {
                link: function(e, t, n) {
                    t.bind("error", function() {
                        t.attr("src", n.errSrc)
                    })
                }
            }
        }), r.directive("oeTap", ["$parse", function(e) {
            return function(t, n, r) {
                var i = !1,
                    s = e(r.oeTap);
                return n.bind("click", function(e) {
                    if (!i) return t.$apply(function() {
                        return s(t, {
                            $event: e
                        })
                    })
                }), n.bind("touchstart", function(e) {
                    i = !0;
                    return
                }), n.bind("touchmove", function(e) {
                    return i = !1, e.stopImmediatePropagation()
                }), n.bind("touchend", function(e) {
                    if (i) return t.$apply(function() {
                        return s(t, {
                            $event: e
                        })
                    })
                })
            }
        }]), r.directive("oeMove", ["$parse", function(e) {
            return function(t, n, r) {
                var i = e(r.oeMove);
                n.bind("mousemove touchmove", function(e) {
                    return t.$apply(function() {
                        return i(t, {
                            $event: e
                        })
                    })
                })
            }
        }]), r.directive("oeMotion", ["$parse", "$supports", "$window", function(e, n, r) {
            return function(i, s, o) {
                var u, a, f;
                n.motion && (f = e(o.oeMotion), a = new t.Vector3, u = new t.Vector3, r.addEventListener("devicemotion", function(e) {
                    u.set(e.rotationRate.gamma, e.rotationRate.beta, e.rotationRate.alpha);
                    if (u.clone().sub(a).length() > .1) return a.copy(u), i.$apply(function() {
                        return f(i, {
                            $event: e
                        })
                    });
                    a.copy(u);
                    return
                }))
            }
        }]), r.directive("oePostTop", ["$window", "$stateParams", "$state", function(e, t, n) {
            return function(r, i, s) {
                i.bind("click", function(i) {
                    var o = r.$eval(s.oePostTop) || {},
                        u, a;
                    o.state = o.state || n.current.name, o.params = o.params || t, u = e.top.location.origin || e.top.location.protocol + "//" + e.top.location.host, a = e.location.origin || e.location.protocol + "//" + e.location.host, u === a && (i.preventDefault(), e.top.postMessage(o, "*"))
                })
            }
        }]), r.directive("oeTrack", ["track", function(e) {
            return function(t, n, r) {
                var i, s, o, u;
                u = r.oeTrackBind, u = u === "all" ? "click dblclickmousedown mouseupmouseover mousemovemouseout mouseentermouseleave touchstarttouchmove touchendkeydown keyup keypresssubmit focus blur" : u, u = u ? u : "click dblclick touchstart touchend", n.bind(u, function(t) {
                    s = r.oeTrack, i = t.type, o = n[0].tagName, e("event", o, i, s)
                })
            }
        }]), r.directive("oeHeader", ["$window", "$q", "$timeout", function(e, t, n) {
            return {
                link: function(e, t, n, r) {
                    function o(e, t, n, r) {
                        return "opacity:" + t + ";background-image: " + "linear-gradient(to bottom, rgba(0, 0, 0, 0.25) 0%," + "rgba(0, 0, 0, 0.85) 100%), url(" + e + ")" + "; background-position: " + n + "% " + r + "%" + "; background-size: cover" + "; background-repeat: repeat-x;"
                    }

                    function u() {
                        a(o(i, 0, 100, 100))
                    }

                    function a(e) {
                        n.$set("style", e)
                    }

                    function f(e) {
                        i = e, a(o(i, s, 50, 50))
                    }
                    var i = n.oeHeader || "",
                        s = n.oeHeaderOpacity || .75;
                    i && i.length > 0 ? f(i, 0) : u(), n.$observe("oeHeader", function(e) {
                        typeof e == "string" && e.length > 0 ? f(e) : u()
                    }, !0)
                }
            }
        }]), r.directive("oeExternal", ["$window", function(e) {
            return {
                link: function(t, n, r) {
                    n.bind("click", function(t) {
                        t.preventDefault(), e.location.href = r.href;
                        return
                    })
                }
            }
        }]), r.directive("oeScrollPrevent", [function() {
            return {
                link: function(e, t, n) {
                    t.bind("touchmove", function(e) {
                        e.preventDefault()
                    })
                }
            }
        }]), r.directive("oeFocus", function() {
            return {
                link: function(e, t, n) {
                    e.$watch(n.oeFocus, function(e) {
                        e && t[0].focus()
                    }, !0)
                }
            }
        }), r.directive("oeEnter", function() {
            return {
                link: function(e, t, n) {
                    t.bind("keyup", function(t) {
                        t.which === 13 && (e.$apply(function() {
                            e.$eval(n.oeEnter)
                        }), t.preventDefault())
                    })
                }
            }
        }), r.directive("oeSearchBox", ["$compile", function(t) {
            var r = '<div style="display:none"><datalist id="{{$id}}"><!--[if IE 9]><select disabled><![endif]--><option ng-repeat="suggestion in suggestions" value="{{suggestion}}"></option><!--[if IE 9]></select><![endif]--></datalist></div>';
            return {
                restrict: "A",
                replace: !1,
                link: function(i, s, o) {
                    var u = e.element(r);
                    i.suggestions = ["popular", "#cat", "@seene"], t(u)(i), s.after(u), s.attr("list", i.$id), i.$watch(o.oeSearchBox, n.debounce(function(e, t) {
                        var n;
                        e !== t && (n = i.$eval(o.oeSearchBoxAuto), n && n.then(function(e) {
                            e && (i.suggestions = [].concat(e))
                        }))
                    }, 250)), s.bind("keyup", function(e) {
                        e.which === 13 && (i.$eval(o.oeSearchBoxEnter), e.preventDefault())
                    })
                }
            }
        }]), r.directive("oePrepVideo", [function() {
            return {
                scope: {
                    oePrepVideoPlaying: "&oePrepVideoPlaying"
                },
                link: function(e, t, n, r) {
                    t.bind("click touchstart", function() {
                        t[0].play()
                    }), t.bind("play", function() {
                        this.getAttribute("controls") !== "true" && this.setAttribute("controls", "true"), this.removeAttribute("controls")
                    }), t.bind("playing", function() {
                        e.oePrepVideoPlaying({
                            playing: !0
                        })
                    }), t.bind("ended", function() {
                        e.oePrepVideoPlaying({
                            playing: !1
                        })
                    }), e.$on("$destroy", function() {
                        e.oePrepVideoPlaying({
                            playing: !1
                        })
                    })
                }
            }
        }]), r.directive("scrollTo", ["$location", "$anchorScroll", function(e, t) {
            return function(n, r, i) {
                r.bind("click", function(r) {
                    var s = i.scrollTo;
                    r.stopPropagation(), n.$on("$locationChangeStart", function(e) {
                        e.preventDefault()
                    }), e.hash(s), t()
                })
            }
        }]), r
    }), define("common/directives/waves", ["angular", "lodash"], function(e, t) {
        "use strict";
        return e.module("oe.directives.waves", []).directive("oeWaves", ["onAnimate", "onResize", "onMouseUp", "$timeout", "debounce", "$window", function(n, r, i, s, o, u) {
            return {
                restrict: "EA",
                link: function(i, s, a) {
                    function S(e) {
                        var t = Math.round(y.width * m),
                            n = Math.random() * .2 + .5,
                            r = {
                                points: []
                            },
                            i;
                        for (i = 0; i < t; i += 1) r.points.push({
                            x: y.width * i / (t - 1),
                            y: y.height * n - Math.random() * .1 * y.height - y.height * e * .01 - y.height * Math.random() * n * .01,
                            vy: n * .25 + Math.random() * y.height * 1e-4,
                            depth: y.height * n - Math.random() * y.height * .1
                        });
                        return r
                    }

                    function x() {
                        var e = [],
                            t;
                        for (t = 0; t < v; t += 1) e.push(S(t));
                        return e
                    }

                    function T(e, t, n, r, i) {
                        t = t || 1, n = n || 0, r = r || 1;
                        var s, o;
                        for (o = 0; o < e.points.length; o += 1) s = e.points[o], s.y += s.vy, s.vy += (s.depth - s.y) * (h ? d : d * .01 + Math.sin(o * 1e-4 / Math.PI)), s.vy *= t, L(f, s) < n && c && (s.vy += (f.y - s.y) * (h ? d : d * .1 + o * .001));
                        return e
                    }

                    function N(e) {
                        var t, n, r, i;
                        n = 1, r = h ? Math.round(y.width / 4.5) : 280, h && (l += .05, f.x = y.width * .5 + Math.sin(l) * y.width * .2, f.y = y.height * .5 - 50 + Math.sin(l) * y.height * .2);
                        for (i = 0; i < e.length; i += 1) T(e[i], n, r, i)
                    }

                    function C(e, t) {
                        var n, r, i, s;
                        if (t && t.points && t.points.length > 0) {
                            e.save(), e.globalAlpha = .4, e.fillStyle = "#394F53", e.strokeStyle = "#ffffff", e.lineWidth = .5, s = e.lineWidth * 10, e.beginPath(), e.moveTo(t.points[0].x - s, t.points[0].y + s);
                            for (n = 1; n < t.points.length - 2; n += 1) r = (t.points[n].x + t.points[n + 1].x) / 2, i = (t.points[n].y + t.points[n + 1].y) / 2, e.quadraticCurveTo(t.points[n].x, t.points[n].y, r, i);
                            e.quadraticCurveTo(t.points[t.points.length - 2].x, t.points[t.points.length - 2].y, t.points[t.points.length - 1].x, t.points[t.points.length - 1].y), e.lineTo(y.width + s, y.height + s), e.lineTo(-s, y.height + s), e.lineTo(-s, t.points[0].y + s), e.fill(), e.stroke(), e.restore()
                        }
                    }

                    function k(e, t) {
                        e.clearRect(0, 0, s[0].offsetWidth, s[0].offsetHeight);
                        for (var n = 0; n < t.length; n += 1) C(e, t[n])
                    }

                    function L(e, t) {
                        var n = Math.abs(e.x - t.x),
                            r = Math.abs(e.y - t.y);
                        return Math.sqrt(n * n + r * r)
                    }

                    function A(e) {
                        k(b, e), w = n(t.partial(A, e))
                    }

                    function O(e) {
                        N(e), E = n(t.partial(O, e))
                    }

                    function M() {
                        var e = x();
                        P(), A(e), O(e), p.push(r(o(D, 25, !0))), p.push(r(M, 25, !0))
                    }

                    function D() {
                        y.width = s[0].offsetWidth, y.height = s[0].offsetHeight
                    }

                    function P() {
                        w && u.cancelAnimationFrame(w), E && u.cancelAnimationFrame(E), e.forEach(p, function(e) {
                            e()
                        }), p.length = 0
                    }
                    var f = {
                            x: s[0].offsetWidth * .5,
                            y: s[0].offsetHeight * .5
                        },
                        l = 0,
                        c = !1,
                        h = !1,
                        p = [],
                        d = .005,
                        v = 10,
                        m = .0075,
                        g = 20,
                        y, b, w, E;
                    y = e.element("<canvas></canvas>")[0], s.append(y), b = y.getContext("2d"), i.$on("$destroy", P), D(), M()
                }
            }
        }])
    }), define("common/directives/index", ["angular", "./three", "./generic", "./waves"], function(e) {
        "use strict";
        return e.module("oe.directives", ["oe.directives.three", "oe.directives.generic", "oe.directives.waves"])
    }), define("common/services/constants", ["angular"], function(e) {
        "use strict";
        return e.module("oe.services.constants", [])
    }), define("common/services/breadcrumbs", ["angular"], function(e) {
        "use strict";
        return e.module("oe.services.breadcrumbs", []).factory("breadcrumbs", ["$rootScope", "$location", function(e, t) {
            var n, r;
            return n = [], r = e.$new(), e.$on("$stateChangeSuccess", function(e, i) {
                var s, o, u, a;
                a = [], s = t.path().split("/"), o = function(e) {
                    return "/" + s.slice(0, e + 1).join("/")
                }, s.shift();
                for (u = 0; u < s.length; u += 1) a.push({
                    name: s[u],
                    path: o(u)
                });
                n = a, r.$broadcast("$breadcrumbsChange", n)
            }), r.getAll = function() {
                return n
            }, r.getFirst = function() {
                return n[0] || {}
            }, r
        }])
    }), define("common/services/cache", ["angular", "inflection"], function(e, t) {
        "use strict";
        return e.module("oe.services.cache", []).factory("preCacheResources", ["$cacheFactory", function(n) {
            var r = n.get("$http");
            return function(n) {
                e.forEach(n, function(n, i) {
                    var s, o, u, a, f, l, c, h, p, d, v;
                    s = n.summary, c = n.data, s && c && (o = s.model, u = s.collection, a = s.route, f = s.routes, l = s.meta || {}, o && a ? r.put(decodeURIComponent(a), e.toJson(c)) : u && a && (v = t.pluralize(u), p = {}, p[v] = [], p.meta = l, e.forEach(f, function(t, n) {
                        h = c[n], h && (d = e.toJson(h), p[v].push(h), r.put(decodeURIComponent(t), d))
                    }), r.put(decodeURIComponent(a), e.toJson(p))))
                }, this)
            }
        }])
    }), define("common/services/iframe", ["angular"], function(e) {
        "use strict";
        return e.module("oe.services.iframe", []).factory("iframeListener", ["$window", function(e) {
            return function(t) {
                return e.addEventListener("message", function(n) {
                    var r = e.location.origin || e.location.protocol + "//" + e.location.host;
                    if (n.origin !== r) return;
                    return t.apply(null, arguments)
                })
            }
        }])
    }), window.Modernizr = function(e, t, n) {
        function A(e) {
            f.cssText = e
        }

        function O(e, t) {
            return A(p.join(e + ";") + (t || ""))
        }

        function M(e, t) {
            return typeof e === t
        }

        function _(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function D(e, t) {
            for (var r in e) {
                var i = e[r];
                if (!_(i, "-") && f[i] !== n) return t == "pfx" ? i : !0
            }
            return !1
        }

        function P(e, t, r) {
            for (var i in e) {
                var s = t[e[i]];
                if (s !== n) return r === !1 ? e[i] : M(s, "function") ? s.bind(r || t) : s
            }
            return !1
        }

        function H(e, t, n) {
            var r = e.charAt(0).toUpperCase() + e.slice(1),
                i = (e + " " + v.join(r + " ") + r).split(" ");
            return M(t, "string") || M(t, "undefined") ? D(i, t) : (i = (e + " " + m.join(r + " ") + r).split(" "), P(i, t, n))
        }

        function B() {
            i.input = function(n) {
                for (var r = 0, i = n.length; r < i; r++) w[n[r]] = n[r] in l;
                return w.list && (w.list = !!t.createElement("datalist") && !!e.HTMLDataListElement), w
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), i.inputtypes = function(e) {
                for (var r = 0, i, s, u, a = e.length; r < a; r++) l.setAttribute("type", s = e[r]), i = l.type !== "text", i && (l.value = c, l.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(s) && l.style.WebkitAppearance !== n ? (o.appendChild(l), u = t.defaultView, i = u.getComputedStyle && u.getComputedStyle(l, null).WebkitAppearance !== "textfield" && l.offsetHeight !== 0, o.removeChild(l)) : /^(search|tel)$/.test(s) || (/^(url|email)$/.test(s) ? i = l.checkValidity && l.checkValidity() === !1 : i = l.value != c)), b[e[r]] = !!i;
                return b
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var r = "2.6.2",
            i = {},
            s = !0,
            o = t.documentElement,
            u = "modernizr",
            a = t.createElement(u),
            f = a.style,
            l = t.createElement("input"),
            c = ":)",
            h = {}.toString,
            p = " -webkit- -moz- -o- -ms- ".split(" "),
            d = "Webkit Moz O ms",
            v = d.split(" "),
            m = d.toLowerCase().split(" "),
            g = {
                svg: "http://www.w3.org/2000/svg"
            },
            y = {},
            b = {},
            w = {},
            E = [],
            S = E.slice,
            x, T = function(e, n, r, i) {
                var s, a, f, l, c = t.createElement("div"),
                    h = t.body,
                    p = h || t.createElement("body");
                if (parseInt(r, 10))
                    while (r--) f = t.createElement("div"), f.id = i ? i[r] : u + (r + 1), c.appendChild(f);
                return s = ["&#173;", '<style id="s', u, '">', e, "</style>"].join(""), c.id = u, (h ? c : p).innerHTML += s, p.appendChild(c), h || (p.style.background = "", p.style.overflow = "hidden", l = o.style.overflow, o.style.overflow = "hidden", o.appendChild(p)), a = n(c, e), h ? c.parentNode.removeChild(c) : (p.parentNode.removeChild(p), o.style.overflow = l), !!a
            },
            N = function(t) {
                var n = e.matchMedia || e.msMatchMedia;
                if (n) return n(t).matches;
                var r;
                return T("@media " + t + " { #" + u + " { position: absolute; } }", function(t) {
                    r = (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle)["position"] == "absolute"
                }), r
            },
            C = function() {
                function r(r, i) {
                    i = i || t.createElement(e[r] || "div"), r = "on" + r;
                    var s = r in i;
                    return s || (i.setAttribute || (i = t.createElement("div")), i.setAttribute && i.removeAttribute && (i.setAttribute(r, ""), s = M(i[r], "function"), M(i[r], "undefined") || (i[r] = n), i.removeAttribute(r))), i = null, s
                }
                var e = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return r
            }(),
            k = {}.hasOwnProperty,
            L;
        !M(k, "undefined") && !M(k.call, "undefined") ? L = function(e, t) {
            return k.call(e, t)
        } : L = function(e, t) {
            return t in e && M(e.constructor.prototype[t], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(t) {
            var n = this;
            if (typeof n != "function") throw new TypeError;
            var r = S.call(arguments, 1),
                i = function() {
                    if (this instanceof i) {
                        var e = function() {};
                        e.prototype = n.prototype;
                        var s = new e,
                            o = n.apply(s, r.concat(S.call(arguments)));
                        return Object(o) === o ? o : s
                    }
                    return n.apply(t, r.concat(S.call(arguments)))
                };
            return i
        }), y.flexbox = function() {
            return H("flexWrap")
        }, y.flexboxlegacy = function() {
            return H("boxDirection")
        }, y.canvas = function() {
            var e = t.createElement("canvas");
            return !!e.getContext && !!e.getContext("2d")
        }, y.canvastext = function() {
            return !!i.canvas && !!M(t.createElement("canvas").getContext("2d").fillText, "function")
        }, y.webgl = function() {
            return !!e.WebGLRenderingContext
        }, y.touch = function() {
            var n;
            return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : T(["@media (", p.join("touch-enabled),("), u, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                n = e.offsetTop === 9
            }), n
        }, y.geolocation = function() {
            return "geolocation" in navigator
        }, y.postmessage = function() {
            return !!e.postMessage
        }, y.websqldatabase = function() {
            return !!e.openDatabase
        }, y.indexedDB = function() {
            return !!H("indexedDB", e)
        }, y.hashchange = function() {
            return C("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
        }, y.history = function() {
            return !!e.history && !!history.pushState
        }, y.draganddrop = function() {
            var e = t.createElement("div");
            return "draggable" in e || "ondragstart" in e && "ondrop" in e
        }, y.websockets = function() {
            return "WebSocket" in e || "MozWebSocket" in e
        }, y.rgba = function() {
            return A("background-color:rgba(150,255,150,.5)"), _(f.backgroundColor, "rgba")
        }, y.hsla = function() {
            return A("background-color:hsla(120,40%,100%,.5)"), _(f.backgroundColor, "rgba") || _(f.backgroundColor, "hsla")
        }, y.multiplebgs = function() {
            return A("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(f.background)
        }, y.backgroundsize = function() {
            return H("backgroundSize")
        }, y.borderimage = function() {
            return H("borderImage")
        }, y.borderradius = function() {
            return H("borderRadius")
        }, y.boxshadow = function() {
            return H("boxShadow")
        }, y.textshadow = function() {
            return t.createElement("div").style.textShadow === ""
        }, y.opacity = function() {
            return O("opacity:.55"), /^0.55$/.test(f.opacity)
        }, y.cssanimations = function() {
            return H("animationName")
        }, y.csscolumns = function() {
            return H("columnCount")
        }, y.cssgradients = function() {
            var e = "background-image:",
                t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                n = "linear-gradient(left top,#9f9, white);";
            return A((e + "-webkit- ".split(" ").join(t + e) + p.join(n + e)).slice(0, -e.length)), _(f.backgroundImage, "gradient")
        }, y.cssreflections = function() {
            return H("boxReflect")
        }, y.csstransforms = function() {
            return !!H("transform")
        }, y.csstransforms3d = function() {
            var e = !!H("perspective");
            return e && "webkitPerspective" in o.style && T("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n) {
                e = t.offsetLeft === 9 && t.offsetHeight === 3
            }), e
        }, y.csstransitions = function() {
            return H("transition")
        }, y.fontface = function() {
            var e;
            return T('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
                var i = t.getElementById("smodernizr"),
                    s = i.sheet || i.styleSheet,
                    o = s ? s.cssRules && s.cssRules[0] ? s.cssRules[0].cssText : s.cssText || "" : "";
                e = /src/i.test(o) && o.indexOf(r.split(" ")[0]) === 0
            }), e
        }, y.generatedcontent = function() {
            var e;
            return T(["#", u, "{font:0/0 a}#", u, ':after{content:"', c, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
                e = t.offsetHeight >= 3
            }), e
        }, y.video = function() {
            var e = t.createElement("video"),
                n = !1;
            try {
                if (n = !!e.canPlayType) n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
            } catch (r) {}
            return n
        }, y.audio = function() {
            var e = t.createElement("audio"),
                n = !1;
            try {
                if (n = !!e.canPlayType) n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, "")
            } catch (r) {}
            return n
        }, y.localstorage = function() {
            try {
                return localStorage.setItem(u, u), localStorage.removeItem(u), !0
            } catch (e) {
                return !1
            }
        }, y.sessionstorage = function() {
            try {
                return sessionStorage.setItem(u, u), sessionStorage.removeItem(u), !0
            } catch (e) {
                return !1
            }
        }, y.webworkers = function() {
            return !!e.Worker
        }, y.applicationcache = function() {
            return !!e.applicationCache
        }, y.svg = function() {
            return !!t.createElementNS && !!t.createElementNS(g.svg, "svg").createSVGRect
        }, y.inlinesvg = function() {
            var e = t.createElement("div");
            return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == g.svg
        }, y.smil = function() {
            return !!t.createElementNS && /SVGAnimate/.test(h.call(t.createElementNS(g.svg, "animate")))
        }, y.svgclippaths = function() {
            return !!t.createElementNS && /SVGClipPath/.test(h.call(t.createElementNS(g.svg, "clipPath")))
        };
        for (var j in y) L(y, j) && (x = j.toLowerCase(), i[x] = y[j](), E.push((i[x] ? "" : "no-") + x));
        return i.input || B(), i.addTest = function(e, t) {
                if (typeof e == "object")
                    for (var r in e) L(e, r) && i.addTest(r, e[r]);
                else {
                    e = e.toLowerCase();
                    if (i[e] !== n) return i;
                    t = typeof t == "function" ? t() : t, typeof s != "undefined" && s && (o.className += " " + (t ? "" : "no-") + e), i[e] = t
                }
                return i
            }, A(""), a = l = null,
            function(e, t) {
                function l(e, t) {
                    var n = e.createElement("p"),
                        r = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
                }

                function c() {
                    var e = g.elements;
                    return typeof e == "string" ? e.split(" ") : e
                }

                function h(e) {
                    var t = a[e[o]];
                    return t || (t = {}, u++, e[o] = u, a[u] = t), t
                }

                function p(e, n, s) {
                    n || (n = t);
                    if (f) return n.createElement(e);
                    s || (s = h(n));
                    var o;
                    return s.cache[e] ? o = s.cache[e].cloneNode() : i.test(e) ? o = (s.cache[e] = s.createElem(e)).cloneNode() : o = s.createElem(e), o.canHaveChildren && !r.test(e) ? s.frag.appendChild(o) : o
                }

                function d(e, n) {
                    e || (e = t);
                    if (f) return e.createDocumentFragment();
                    n = n || h(e);
                    var r = n.frag.cloneNode(),
                        i = 0,
                        s = c(),
                        o = s.length;
                    for (; i < o; i++) r.createElement(s[i]);
                    return r
                }

                function v(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                        return g.shivMethods ? p(n, e, t) : t.createElem(n)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/\w+/g, function(e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(g, t.frag)
                }

                function m(e) {
                    e || (e = t);
                    var n = h(e);
                    return g.shivCSS && !s && !n.hasCSS && (n.hasCSS = !!l(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), f || v(e, n), e
                }
                var n = e.html5 || {},
                    r = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    i = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    s, o = "_html5shiv",
                    u = 0,
                    a = {},
                    f;
                (function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", s = "hidden" in e, f = e.childNodes.length == 1 || function() {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return typeof e.cloneNode == "undefined" || typeof e.createDocumentFragment == "undefined" || typeof e.createElement == "undefined"
                        }()
                    } catch (n) {
                        s = !0, f = !0
                    }
                })();
                var g = {
                    elements: n.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: n.shivCSS !== !1,
                    supportsUnknownElements: f,
                    shivMethods: n.shivMethods !== !1,
                    type: "default",
                    shivDocument: m,
                    createElement: p,
                    createDocumentFragment: d
                };
                e.html5 = g, m(t)
            }(this, t), i._version = r, i._prefixes = p, i._domPrefixes = m, i._cssomPrefixes = v, i.mq = N, i.hasEvent = C, i.testProp = function(e) {
                return D([e])
            }, i.testAllProps = H, i.testStyles = T, i.prefixed = function(e, t, n) {
                return t ? H(e, t, n) : H(e, "pfx")
            }, o.className = o.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (s ? " js " + E.join(" ") : ""), i
    }(this, this.document), define("modernizr", function(e) {
        return function() {
            var t, n;
            return t || e.Modernizr
        }
    }(this)), define("common/services/supports", ["angular", "modernizr"], function(e, t) {
        "use strict";

        function u() {
            try {
                return !!window.WebGLRenderingContext && !!document.createElement("canvas").getContext("experimental-webgl")
            } catch (e) {
                return !1
            }
        }
        var n = navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/g),
            r = navigator.userAgent.match(/(iPad|iPhone|iPod)/g),
            i = navigator.userAgent.match(/Android/i),
            s = navigator.userAgent.match(/Chrome/i),
            o = e.copy(t);
        return o.mobile = n, o.iOS = r, o.android = i, o.webgl = u(), o.chrome = s, o.motion = !!window.DeviceMotionEvent, o.orientation = !!window.DeviceOrientationEvent, e.module("oe.services.supports", []).value("$supports", o)
    }), define("common/services/timing", ["angular"], function(e) {
        "use strict";
        return e.module("oe.services.timing", []).factory("onAnimate", ["$window", "$rootScope", function(e, t) {
            var n = e.requestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame || e.webkitRequestAnimationFrame;
            return function(e) {
                return n(function() {
                    return t.$apply(e)
                })
            }
        }]).factory("sequence", ["$timeout", "$q", function(t, n) {
            var r = function i(r, s, o) {
                var u = [],
                    a, f = 0;
                return r = e.isArray(r) ? r : [r], s = s || {}, o = o || 0, e.forEach(r, function(n) {
                    var r, i;
                    n = n || {}, f += n.delay || 0, r = n.callback || e.noop, i = t(function() {
                        r(i, s, o)
                    }, f), u.push(i)
                }), a = n.all(u), s.loop && a.then(function() {
                    return o += 1, i(r, s, o)
                }), a
            };
            return r
        }]).factory("onResize", ["$window", function(t) {
            var n = e.element(t);
            return function(e) {
                var r = t.innerWidth,
                    i = function() {
                        r !== t.innerWidth && (r = t.innerWidth, e())
                    };
                return n.bind("resize", i),
                    function() {
                        n.unbind("resize", i)
                    }
            }
        }]).factory("onMouseUp", ["$window", function(t) {
            var n = e.element(t);
            return function(e) {
                return n.bind("mouseup", e),
                    function() {
                        n.unbind("mouseup", e)
                    }
            }
        }]).factory("debounce", ["$timeout", "$q", function(e, t) {
            return function(n, r, i) {
                var s, o;
                return o = t.defer(),
                    function() {
                        var u = this,
                            a = arguments,
                            f, l;
                        return f = function() {
                            s = null, i || (o.resolve(n.apply(u, a)), o = t.defer())
                        }, l = i && !s, s && e.cancel(s), s = e(f, r), l && (o.resolve(n.apply(u, a)), o = t.defer()), o.promise
                    }
            }
        }])
    }), define("common/services/test-map", [], function() {
        "use strict";
        return [{
            name: "Embed variants",
            reset: !0,
            pathRegex: /^\/?$/,
            conversions: {
                click: ["appstore-badge", "topnav-download", "footnav-download"]
            },
            variants: [{
                name: "B",
                changes: {
                    WbULpW: "BhgRgP"
                }
            }, {
                name: "C",
                changes: {
                    WbULpW: "vHti1y"
                }
            }, {
                name: "D",
                changes: {
                    WbULpW: "DZyCcL"
                }
            }, {
                name: "E",
                changes: {
                    WbULpW: "xFvwVL"
                }
            }]
        }, {
            name: "Home copy variants",
            reset: !1,
            pathRegex: /^\/?$/,
            conversions: {
                click: ["appstore-badge", "topnav-download", "footnav-download"]
            },
            variants: [{
                name: "B",
                changes: {
                    "views/home-story-2.html": "views/home-story-2.html"
                }
            }]
        }]
    }), define("abba", [], function() {
        "use strict";
        return window.Abba
    }), define("ga", [], function() {
        "use strict";
        return window.ga
    }), define("common/services/tracking", ["angular", "./test-map", "abba", "ga"], function(e, t, n, r) {
        "use strict";
        var i = function(e) {
            return e[Math.floor(Math.random() * e.length)]
        };
        return e.module("oe.services.tracking", []).value("changeMap", {}).run(["changeMap", "$rootScope", "idPrefix", function(r, i, s) {
            typeof n != "undefined" && e.forEach(t, function(t, o) {
                var u, a, f;
                t.name !== null && t.variants.length ? (u = n(t.name), e.forEach(t.variants, function(t, n) {
                    if (t.name === null) return;
                    a = t.weight || 1, u.variant(t.name, {
                        weight: a
                    }, function() {
                        e.forEach(t.changes, function(e, t) {
                            r[s() + t] = e
                        })
                    })
                }), u.control(), i.$apply(function() {
                    t.reset && u.reset(), u.start()
                })) : console.error("ABBA: bad experiment definition, will not run test - ", t)
            })
        }]).factory("idPrefix", function() {
            return function() {
                return "$_"
            }
        }).factory("mapVariation", ["changeMap", "idPrefix", function(t, n) {
            return function(r) {
                var i, s, o, u;
                return e.forEach(t, function(e, t) {
                    u = new RegExp(t.replace(n(), ""), "g"), s = u.test(r), s && (o = e)
                }), o || r
            }
        }]).factory("track", [function() {
            return function() {
                var i = Array.prototype.slice.call(arguments, 0);
                e.forEach(t, function(t) {
                    t.conversions && e.forEach(t.conversions, function(r, s) {
                        e.forEach(r, function(e, r) {
                            if (i.indexOf(e) !== -1 && i.indexOf(s) !== -1) {
                                if (t.pathRegex && !t.pathRegex.test(window.location.pathname)) return;
                                try {
                                    typeof n != "undefined" && n(t.name).complete()
                                } catch (o) {
                                    throw o
                                }
                            }
                        })
                    })
                }), r && r.apply(null, ["send"].concat(i))
            }
        }])
    }), define("common/services/search", ["angular"], function(e) {
        "use strict";
        return e.module("oe.services.search", []).factory("Search", ["$location", "$rootScope", function(t, n) {
            function s(n, s) {
                var o = {};
                return i = e.copy(r), arguments.length > 1 ? o[n] = s : o = n, o = e.extend(t.search(), o), r = o, t.search(o), r
            }

            function o() {
                var n = e.extend(t.search(), r);
                return n
            }
            var r = t.search(),
                i = r;
            return n.$on("$locationChangeSuccess", function(e, t) {
                s(), n.$emit("$searchChangeSuccess", r)
            }), {
                set: s,
                get: o,
                getPrevious: function() {
                    return e.copy(i)
                }
            }
        }])
    }), define("common/services/sort", ["angular", "./search"], function(e) {
        "use strict";
        return e.module("oe.services.sort", ["oe.services.search"]).provider("Orderer", function() {
            function t(t, n, r) {
                function a() {
                    var t = n.get();
                    t && t.sort && e.forEach(u, function(e) {
                        e === t.sort && i.setOrder(e)
                    })
                }

                function f() {
                    var e = n.get();
                    e && e.direction && i.setDirection(e.direction === "desc" ? !0 : !1)
                }
                var i = this,
                    s, o, u;
                this.setDirection = function(e) {
                    typeof e != "undefined" && (s = e === "desc" || e === "asc" ? e === "desc" ? !0 : !1 : typeof e == "boolean" ? e : s, n.set({
                        direction: s ? "desc" : "asc"
                    }))
                }, this.setOrder = function(e) {
                    typeof e == "string" && (n.set({
                        sort: e
                    }), o = e)
                }, this.getOrder = function() {
                    return o
                }, this.getDirection = function() {
                    return typeof s != "undefined" ? s ? "desc" : "asc" : s
                }, this.getReverse = function() {
                    return s
                }, this.setSorts = function(e) {
                    u = e, a(), f()
                }, r.$on("$searchChangeSuccess", function(e, t) {
                    f(), a()
                })
            }
            this.$get = ["$location", "Search", "$rootScope", function(e, n, r) {
                return new t(e, n, r)
            }]
        })
    }), define("common/services/three", ["angular", "threejs"], function(e, t) {
        "use strict";
        return e.module("oe.services.three", ["oe.services.supports"]).factory("Renderer", ["$supports", function(e) {
            var n = 5,
                r = [],
                i = -1;
            return {
                get: function() {
                    return r.length < n && r.push(e.webgl ? new t.WebGLRenderer : new t.CanvasRenderer), i === n - 1 ? i = 0 : i += 1, r[i]
                }
            }
        }])
    }), define("common/services/media", ["angular", "modernizr"], function(e, t) {
        "use strict";
        return e.module("oe.services.media", []).factory("matchMedia", [function() {
            return function() {
                return t.mq.apply(null, arguments)
            }
        }])
    }),
    function(e) {
        function t(e, n) {
            var r;
            e && n && (t.locale[e] = n), r = e = e || "en", n = n || t.locale[r = t.Utils.getFallbackLocale(e)];
            if (!n) throw new Error("Plural Function not found for locale: " + e);
            this.pluralFunc = n, this.locale = e, this.fallbackLocale = r
        }
        t.locale = {
            en: function(e) {
                return e === 1 ? "one" : "other"
            }
        }, t.SafeString = function(e) {
            this.string = e
        }, t.SafeString.prototype.toString = function() {
            return this.string.toString()
        }, t.Utils = {
            numSub: function(e, t, n) {
                return e.replace(/^#|[^\\]#/g, function(e) {
                    var r = e && e.length === 2 ? e.charAt(0) : "";
                    return r + '" + (function(){ var x = ' + t + ';\nif( isNaN(x) ){\nthrow new Error("MessageFormat: `"+lastkey_' + n + '+"` isnt a number.");\n}\nreturn x;\n})() + "'
                })
            },
            escapeExpression: function(e) {
                var n = {
                        "\n": "\\n",
                        '"': '\\"'
                    },
                    r = /[\n"]/g,
                    i = /[\n"]/,
                    s = function(e) {
                        return n[e] || "&amp;"
                    };
                return e instanceof t.SafeString ? e.toString() : e === null || e === !1 ? "" : i.test(e) ? e.replace(r, s) : e
            },
            getFallbackLocale: function(e) {
                var n = e.indexOf("-") >= 0 ? "-" : "_";
                while (!t.locale.hasOwnProperty(e)) {
                    e = e.substring(0, e.lastIndexOf(n));
                    if (e.length === 0) return null
                }
                return e
            }
        };
        var n = function() {
            var e = {
                parse: function(e, t) {
                    function a(e, t, n) {
                        var r = e,
                            i = n - e.length;
                        for (var s = 0; s < i; s++) r = t + r;
                        return r
                    }

                    function f(e) {
                        var t = e.charCodeAt(0);
                        if (t <= 255) var n = "x",
                            r = 2;
                        else var n = "u",
                            r = 4;
                        return "\\" + n + a(t.toString(16).toUpperCase(), "0", r)
                    }

                    function l(e) {
                        return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/[\x80-\uFFFF]/g, f) + '"'
                    }

                    function c(e) {
                        if (r < s) return;
                        r > s && (s = r, o = []), o.push(e)
                    }

                    function h() {
                        var e = "start@" + r,
                            t = u[e];
                        if (t) return r = t.nextPos, t.result;
                        var n = r,
                            i = p(),
                            s = i !== null ? function(e) {
                                return {
                                    type: "program",
                                    program: e
                                }
                            }(i) : null;
                        if (s !== null) var o = s;
                        else {
                            var o = null;
                            r = n
                        }
                        return u[e] = {
                            nextPos: r,
                            result: o
                        }, o
                    }

                    function p() {
                        var e = "messageFormatPattern@" + r,
                            t = u[e];
                        if (t) return r = t.nextPos, t.result;
                        var n = r,
                            i = r,
                            s = T();
                        if (s !== null) {
                            var o = [],
                                a = d();
                            while (a !== null) {
                                o.push(a);
                                var a = d()
                            }
                            if (o !== null) var f = [s, o];
                            else {
                                var f = null;
                                r = i
                            }
                        } else {
                            var f = null;
                            r = i
                        }
                        var l = f !== null ? function(e, t) {
                            var n = [];
                            e && e.val && n.push(e);
                            for (var r in t) t.hasOwnProperty(r) && n.push(t[r]);
                            return {
                                type: "messageFormatPattern",
                                statements: n
                            }
                        }(f[0], f[1]) : null;
                        if (l !== null) var c = l;
                        else {
                            var c = null;
                            r = n
                        }
                        return u[e] = {
                            nextPos: r,
                            result: c
                        }, c
                    }

                    function d() {
                        var t = "messageFormatPatternRight@" + r,
                            n = u[t];
                        if (n) return r = n.nextPos, n.result;
                        var s = r,
                            o = r;
                        if (e.substr(r, 1) === "{") {
                            var a = "{";
                            r += 1
                        } else {
                            var a = null;
                            i && c('"{"')
                        }
                        if (a !== null) {
                            var f = O();
                            if (f !== null) {
                                var l = v();
                                if (l !== null) {
                                    var h = O();
                                    if (h !== null) {
                                        if (e.substr(r, 1) === "}") {
                                            var p = "}";
                                            r += 1
                                        } else {
                                            var p = null;
                                            i && c('"}"')
                                        }
                                        if (p !== null) {
                                            var d = T();
                                            if (d !== null) var m = [a, f, l, h, p, d];
                                            else {
                                                var m = null;
                                                r = o
                                            }
                                        } else {
                                            var m = null;
                                            r = o
                                        }
                                    } else {
                                        var m = null;
                                        r = o
                                    }
                                } else {
                                    var m = null;
                                    r = o
                                }
                            } else {
                                var m = null;
                                r = o
                            }
                        } else {
                            var m = null;
                            r = o
                        }
                        var g = m !== null ? function(e, t) {
                            var n = [];
                            return e && n.push(e), t && t.val && n.push(t), {
                                type: "messageFormatPatternRight",
                                statements: n
                            }
                        }(m[2], m[5]) : null;
                        if (g !== null) var y = g;
                        else {
                            var y = null;
                            r = s
                        }
                        return u[t] = {
                            nextPos: r,
                            result: y
                        }, y
                    }

                    function v() {
                        var t = "messageFormatElement@" + r,
                            n = u[t];
                        if (n) return r = n.nextPos, n.result;
                        var s = r,
                            o = r,
                            a = N();
                        if (a !== null) {
                            var f = r;
                            if (e.substr(r, 1) === ",") {
                                var l = ",";
                                r += 1
                            } else {
                                var l = null;
                                i && c('","')
                            }
                            if (l !== null) {
                                var h = m();
                                if (h !== null) var p = [l, h];
                                else {
                                    var p = null;
                                    r = f
                                }
                            } else {
                                var p = null;
                                r = f
                            }
                            var d = p !== null ? p : "";
                            if (d !== null) var v = [a, d];
                            else {
                                var v = null;
                                r = o
                            }
                        } else {
                            var v = null;
                            r = o
                        }
                        var g = v !== null ? function(e, t) {
                            var n = {
                                type: "messageFormatElement",
                                argumentIndex: e
                            };
                            return t && t.length ? n.elementFormat = t[1] : n.output = !0, n
                        }(v[0], v[1]) : null;
                        if (g !== null) var y = g;
                        else {
                            var y = null;
                            r = s
                        }
                        return u[t] = {
                            nextPos: r,
                            result: y
                        }, y
                    }

                    function m() {
                        var t = "elementFormat@" + r,
                            n = u[t];
                        if (n) return r = n.nextPos, n.result;
                        var s = r,
                            o = r,
                            a = O();
                        if (a !== null) {
                            if (e.substr(r, 6) === "plural") {
                                var f = "plural";
                                r += 6
                            } else {
                                var f = null;
                                i && c('"plural"')
                            }
                            if (f !== null) {
                                var l = O();
                                if (l !== null) {
                                    if (e.substr(r, 1) === ",") {
                                        var h = ",";
                                        r += 1
                                    } else {
                                        var h = null;
                                        i && c('","')
                                    }
                                    if (h !== null) {
                                        var p = O();
                                        if (p !== null) {
                                            var d = g();
                                            if (d !== null) {
                                                var v = O();
                                                if (v !== null) var m = [a, f, l, h, p, d, v];
                                                else {
                                                    var m = null;
                                                    r = o
                                                }
                                            } else {
                                                var m = null;
                                                r = o
                                            }
                                        } else {
                                            var m = null;
                                            r = o
                                        }
                                    } else {
                                        var m = null;
                                        r = o
                                    }
                                } else {
                                    var m = null;
                                    r = o
                                }
                            } else {
                                var m = null;
                                r = o
                            }
                        } else {
                            var m = null;
                            r = o
                        }
                        var b = m !== null ? function(e, t) {
                            return {
                                type: "elementFormat",
                                key: e,
                                val: t.val
                            }
                        }(m[1], m[5]) : null;
                        if (b !== null) var w = b;
                        else {
                            var w = null;
                            r = s
                        }
                        if (w !== null) var E = w;
                        else {
                            var S = r,
                                x = r,
                                T = O();
                            if (T !== null) {
                                if (e.substr(r, 6) === "select") {
                                    var N = "select";
                                    r += 6
                                } else {
                                    var N = null;
                                    i && c('"select"')
                                }
                                if (N !== null) {
                                    var C = O();
                                    if (C !== null) {
                                        if (e.substr(r, 1) === ",") {
                                            var k = ",";
                                            r += 1
                                        } else {
                                            var k = null;
                                            i && c('","')
                                        }
                                        if (k !== null) {
                                            var L = O();
                                            if (L !== null) {
                                                var A = y();
                                                if (A !== null) {
                                                    var M = O();
                                                    if (M !== null) var _ = [T, N, C, k, L, A, M];
                                                    else {
                                                        var _ = null;
                                                        r = x
                                                    }
                                                } else {
                                                    var _ = null;
                                                    r = x
                                                }
                                            } else {
                                                var _ = null;
                                                r = x
                                            }
                                        } else {
                                            var _ = null;
                                            r = x
                                        }
                                    } else {
                                        var _ = null;
                                        r = x
                                    }
                                } else {
                                    var _ = null;
                                    r = x
                                }
                            } else {
                                var _ = null;
                                r = x
                            }
                            var D = _ !== null ? function(e, t) {
                                return {
                                    type: "elementFormat",
                                    key: e,
                                    val: t.val
                                }
                            }(_[1], _[5]) : null;
                            if (D !== null) var P = D;
                            else {
                                var P = null;
                                r = S
                            }
                            if (P !== null) var E = P;
                            else var E = null
                        }
                        return u[t] = {
                            nextPos: r,
                            result: E
                        }, E
                    }

                    function g() {
                        var e = "pluralStyle@" + r,
                            t = u[e];
                        if (t) return r = t.nextPos, t.result;
                        var n = r,
                            i = b(),
                            s = i !== null ? function(e) {
                                return {
                                    type: "pluralStyle",
                                    val: e
                                }
                            }(i) : null;
                        if (s !== null) var o = s;
                        else {
                            var o = null;
                            r = n
                        }
                        return u[e] = {
                            nextPos: r,
                            result: o
                        }, o
                    }

                    function y() {
                        var e = "selectStyle@" + r,
                            t = u[e];
                        if (t) return r = t.nextPos, t.result;
                        var n = r,
                            i = E(),
                            s = i !== null ? function(e) {
                                return {
                                    type: "selectStyle",
                                    val: e
                                }
                            }(i) : null;
                        if (s !== null) var o = s;
                        else {
                            var o = null;
                            r = n
                        }
                        return u[e] = {
                            nextPos: r,
                            result: o
                        }, o
                    }

                    function b() {
                        var e = "pluralFormatPattern@" + r,
                            t = u[e];
                        if (t) return r = t.nextPos, t.result;
                        var n = r,
                            i = r,
                            s = w(),
                            o = s !== null ? s : "";
                        if (o !== null) {
                            var a = [],
                                f = S();
                            while (f !== null) {
                                a.push(f);
                                var f = S()
                            }
                            if (a !== null) var l = [o, a];
                            else {
                                var l = null;
                                r = i
                            }
                        } else {
                            var l = null;
                            r = i
                        }
                        var c = l !== null ? function(e, t) {
                            var n = {
                                type: "pluralFormatPattern",
                                pluralForms: t
                            };
                            return e ? n.offset = e : n.offset = 0, n
                        }(l[0], l[1]) : null;
                        if (c !== null) var h = c;
                        else {
                            var h = null;
                            r = n
                        }
                        return u[e] = {
                            nextPos: r,
                            result: h
                        }, h
                    }

                    function w() {
                        var t = "offsetPattern@" + r,
                            n = u[t];
                        if (n) return r = n.nextPos, n.result;
                        var s = r,
                            o = r,
                            a = O();
                        if (a !== null) {
                            if (e.substr(r, 6) === "offset") {
                                var f = "offset";
                                r += 6
                            } else {
                                var f = null;
                                i && c('"offset"')
                            }
                            if (f !== null) {
                                var l = O();
                                if (l !== null) {
                                    if (e.substr(r, 1) === ":") {
                                        var h = ":";
                                        r += 1
                                    } else {
                                        var h = null;
                                        i && c('":"')
                                    }
                                    if (h !== null) {
                                        var p = O();
                                        if (p !== null) {
                                            var d = L();
                                            if (d !== null) {
                                                var v = O();
                                                if (v !== null) var m = [a, f, l, h, p, d, v];
                                                else {
                                                    var m = null;
                                                    r = o
                                                }
                                            } else {
                                                var m = null;
                                                r = o
                                            }
                                        } else {
                                            var m = null;
                                            r = o
                                        }
                                    } else {
                                        var m = null;
                                        r = o
                                    }
                                } else {
                                    var m = null;
                                    r = o
                                }
                            } else {
                                var m = null;
                                r = o
                            }
                        } else {
                            var m = null;
                            r = o
                        }
                        var g = m !== null ? function(e) {
                            return e
                        }(m[5]) : null;
                        if (g !== null) var y = g;
                        else {
                            var y = null;
                            r = s
                        }
                        return u[t] = {
                            nextPos: r,
                            result: y
                        }, y
                    }

                    function E() {
                        var e = "selectFormatPattern@" + r,
                            t = u[e];
                        if (t) return r = t.nextPos, t.result;
                        var n = r,
                            i = [],
                            s = S();
                        while (s !== null) {
                            i.push(s);
                            var s = S()
                        }
                        var o = i !== null ? function(e) {
                            return {
                                type: "selectFormatPattern",
                                pluralForms: e
                            }
                        }(i) : null;
                        if (o !== null) var a = o;
                        else {
                            var a = null;
                            r = n
                        }
                        return u[e] = {
                            nextPos: r,
                            result: a
                        }, a
                    }

                    function S() {
                        var t = "pluralForms@" + r,
                            n = u[t];
                        if (n) return r = n.nextPos, n.result;
                        var s = r,
                            o = r,
                            a = O();
                        if (a !== null) {
                            var f = x();
                            if (f !== null) {
                                var l = O();
                                if (l !== null) {
                                    if (e.substr(r, 1) === "{") {
                                        var h = "{";
                                        r += 1
                                    } else {
                                        var h = null;
                                        i && c('"{"')
                                    }
                                    if (h !== null) {
                                        var d = O();
                                        if (d !== null) {
                                            var v = p();
                                            if (v !== null) {
                                                var m = O();
                                                if (m !== null) {
                                                    if (e.substr(r, 1) === "}") {
                                                        var g = "}";
                                                        r += 1
                                                    } else {
                                                        var g = null;
                                                        i && c('"}"')
                                                    }
                                                    if (g !== null) var y = [a, f, l, h, d, v, m, g];
                                                    else {
                                                        var y = null;
                                                        r = o
                                                    }
                                                } else {
                                                    var y = null;
                                                    r = o
                                                }
                                            } else {
                                                var y = null;
                                                r = o
                                            }
                                        } else {
                                            var y = null;
                                            r = o
                                        }
                                    } else {
                                        var y = null;
                                        r = o
                                    }
                                } else {
                                    var y = null;
                                    r = o
                                }
                            } else {
                                var y = null;
                                r = o
                            }
                        } else {
                            var y = null;
                            r = o
                        }
                        var b = y !== null ? function(e, t) {
                            return {
                                type: "pluralForms",
                                key: e,
                                val: t
                            }
                        }(y[1], y[5]) : null;
                        if (b !== null) var w = b;
                        else {
                            var w = null;
                            r = s
                        }
                        return u[t] = {
                            nextPos: r,
                            result: w
                        }, w
                    }

                    function x() {
                        var t = "stringKey@" + r,
                            n = u[t];
                        if (n) return r = n.nextPos, n.result;
                        var s = r,
                            o = N(),
                            a = o !== null ? function(e) {
                                return e
                            }(o) : null;
                        if (a !== null) var f = a;
                        else {
                            var f = null;
                            r = s
                        }
                        if (f !== null) var l = f;
                        else {
                            var h = r,
                                p = r;
                            if (e.substr(r, 1) === "=") {
                                var d = "=";
                                r += 1
                            } else {
                                var d = null;
                                i && c('"="')
                            }
                            if (d !== null) {
                                var v = L();
                                if (v !== null) var m = [d, v];
                                else {
                                    var m = null;
                                    r = p
                                }
                            } else {
                                var m = null;
                                r = p
                            }
                            var g = m !== null ? function(e) {
                                return e
                            }(m[1]) : null;
                            if (g !== null) var y = g;
                            else {
                                var y = null;
                                r = h
                            }
                            if (y !== null) var l = y;
                            else var l = null
                        }
                        return u[t] = {
                            nextPos: r,
                            result: l
                        }, l
                    }

                    function T() {
                        var e = "string@" + r,
                            t = u[e];
                        if (t) return r = t.nextPos, t.result;
                        var n = r,
                            i = r,
                            s = O();
                        if (s !== null) {
                            var o = [],
                                a = r,
                                f = O();
                            if (f !== null) {
                                var l = C();
                                if (l !== null) {
                                    var c = O();
                                    if (c !== null) var h = [f, l, c];
                                    else {
                                        var h = null;
                                        r = a
                                    }
                                } else {
                                    var h = null;
                                    r = a
                                }
                            } else {
                                var h = null;
                                r = a
                            }
                            while (h !== null) {
                                o.push(h);
                                var a = r,
                                    f = O();
                                if (f !== null) {
                                    var l = C();
                                    if (l !== null) {
                                        var c = O();
                                        if (c !== null) var h = [f, l, c];
                                        else {
                                            var h = null;
                                            r = a
                                        }
                                    } else {
                                        var h = null;
                                        r = a
                                    }
                                } else {
                                    var h = null;
                                    r = a
                                }
                            }
                            if (o !== null) var p = [s, o];
                            else {
                                var p = null;
                                r = i
                            }
                        } else {
                            var p = null;
                            r = i
                        }
                        var d = p !== null ? function(e, t) {
                            var n = [];
                            for (var r = 0; r < t.length; ++r)
                                for (var i = 0; i < t[r].length; ++i) n.push(t[r][i]);
                            return {
                                type: "string",
                                val: e + n.join("")
                            }
                        }(p[0], p[1]) : null;
                        if (d !== null) var v = d;
                        else {
                            var v = null;
                            r = n
                        }
                        return u[e] = {
                            nextPos: r,
                            result: v
                        }, v
                    }

                    function N() {
                        var t = "id@" + r,
                            n = u[t];
                        if (n) return r = n.nextPos, n.result;
                        var s = r,
                            o = r,
                            a = O();
                        if (a !== null) {
                            if (e.substr(r).match(/^[a-zA-Z$_]/) !== null) {
                                var f = e.charAt(r);
                                r++
                            } else {
                                var f = null;
                                i && c("[a-zA-Z$_]")
                            }
                            if (f !== null) {
                                var l = [];
                                if (e.substr(r).match(/^[^ 	\n\r,.+={}]/) !== null) {
                                    var h = e.charAt(r);
                                    r++
                                } else {
                                    var h = null;
                                    i && c("[^ 	\\n\\r,.+={}]")
                                }
                                while (h !== null) {
                                    l.push(h);
                                    if (e.substr(r).match(/^[^ 	\n\r,.+={}]/) !== null) {
                                        var h = e.charAt(r);
                                        r++
                                    } else {
                                        var h = null;
                                        i && c("[^ 	\\n\\r,.+={}]")
                                    }
                                }
                                if (l !== null) {
                                    var p = O();
                                    if (p !== null) var d = [a, f, l, p];
                                    else {
                                        var d = null;
                                        r = o
                                    }
                                } else {
                                    var d = null;
                                    r = o
                                }
                            } else {
                                var d = null;
                                r = o
                            }
                        } else {
                            var d = null;
                            r = o
                        }
                        var v = d !== null ? function(e, t) {
                            return e + (t ? t.join("") : "")
                        }(d[1], d[2]) : null;
                        if (v !== null) var m = v;
                        else {
                            var m = null;
                            r = s
                        }
                        return u[t] = {
                            nextPos: r,
                            result: m
                        }, m
                    }

                    function C() {
                        var e = "chars@" + r,
                            t = u[e];
                        if (t) return r = t.nextPos, t.result;
                        var n = r,
                            i = k();
                        if (i !== null) {
                            var s = [];
                            while (i !== null) {
                                s.push(i);
                                var i = k()
                            }
                        } else var s = null;
                        var o = s !== null ? function(e) {
                            return e.join("")
                        }(s) : null;
                        if (o !== null) var a = o;
                        else {
                            var a = null;
                            r = n
                        }
                        return u[e] = {
                            nextPos: r,
                            result: a
                        }, a
                    }

                    function k() {
                        var t = "char@" + r,
                            n = u[t];
                        if (n) return r = n.nextPos, n.result;
                        var s = r;
                        if (e.substr(r).match(/^[^{}\\\0- 	\n\r]/) !== null) {
                            var o = e.charAt(r);
                            r++
                        } else {
                            var o = null;
                            i && c("[^{}\\\\\\0- 	\\n\\r]")
                        }
                        var a = o !== null ? function(e) {
                            return e
                        }(o) : null;
                        if (a !== null) var f = a;
                        else {
                            var f = null;
                            r = s
                        }
                        if (f !== null) var l = f;
                        else {
                            var h = r;
                            if (e.substr(r, 2) === "\\#") {
                                var p = "\\#";
                                r += 2
                            } else {
                                var p = null;
                                i && c('"\\\\#"')
                            }
                            var d = p !== null ? function() {
                                return "\\#"
                            }() : null;
                            if (d !== null) var v = d;
                            else {
                                var v = null;
                                r = h
                            }
                            if (v !== null) var l = v;
                            else {
                                var m = r;
                                if (e.substr(r, 2) === "\\{") {
                                    var g = "\\{";
                                    r += 2
                                } else {
                                    var g = null;
                                    i && c('"\\\\{"')
                                }
                                var y = g !== null ? function() {
                                    return "{"
                                }() : null;
                                if (y !== null) var b = y;
                                else {
                                    var b = null;
                                    r = m
                                }
                                if (b !== null) var l = b;
                                else {
                                    var w = r;
                                    if (e.substr(r, 2) === "\\}") {
                                        var E = "\\}";
                                        r += 2
                                    } else {
                                        var E = null;
                                        i && c('"\\\\}"')
                                    }
                                    var S = E !== null ? function() {
                                        return "}"
                                    }() : null;
                                    if (S !== null) var x = S;
                                    else {
                                        var x = null;
                                        r = w
                                    }
                                    if (x !== null) var l = x;
                                    else {
                                        var T = r,
                                            N = r;
                                        if (e.substr(r, 2) === "\\u") {
                                            var C = "\\u";
                                            r += 2
                                        } else {
                                            var C = null;
                                            i && c('"\\\\u"')
                                        }
                                        if (C !== null) {
                                            var k = A();
                                            if (k !== null) {
                                                var L = A();
                                                if (L !== null) {
                                                    var O = A();
                                                    if (O !== null) {
                                                        var M = A();
                                                        if (M !== null) var _ = [C, k, L, O, M];
                                                        else {
                                                            var _ = null;
                                                            r = N
                                                        }
                                                    } else {
                                                        var _ = null;
                                                        r = N
                                                    }
                                                } else {
                                                    var _ = null;
                                                    r = N
                                                }
                                            } else {
                                                var _ = null;
                                                r = N
                                            }
                                        } else {
                                            var _ = null;
                                            r = N
                                        }
                                        var D = _ !== null ? function(e, t, n, r) {
                                            return String.fromCharCode(parseInt("0x" + e + t + n + r))
                                        }(_[1], _[2], _[3], _[4]) : null;
                                        if (D !== null) var P = D;
                                        else {
                                            var P = null;
                                            r = T
                                        }
                                        if (P !== null) var l = P;
                                        else var l = null
                                    }
                                }
                            }
                        }
                        return u[t] = {
                            nextPos: r,
                            result: l
                        }, l
                    }

                    function L() {
                        var t = "digits@" + r,
                            n = u[t];
                        if (n) return r = n.nextPos, n.result;
                        var s = r;
                        if (e.substr(r).match(/^[0-9]/) !== null) {
                            var o = e.charAt(r);
                            r++
                        } else {
                            var o = null;
                            i && c("[0-9]")
                        }
                        if (o !== null) {
                            var a = [];
                            while (o !== null) {
                                a.push(o);
                                if (e.substr(r).match(/^[0-9]/) !== null) {
                                    var o = e.charAt(r);
                                    r++
                                } else {
                                    var o = null;
                                    i && c("[0-9]")
                                }
                            }
                        } else var a = null;
                        var f = a !== null ? function(e) {
                            return parseInt(e.join(""), 10)
                        }(a) : null;
                        if (f !== null) var l = f;
                        else {
                            var l = null;
                            r = s
                        }
                        return u[t] = {
                            nextPos: r,
                            result: l
                        }, l
                    }

                    function A() {
                        var t = "hexDigit@" + r,
                            n = u[t];
                        if (n) return r = n.nextPos, n.result;
                        if (e.substr(r).match(/^[0-9a-fA-F]/) !== null) {
                            var s = e.charAt(r);
                            r++
                        } else {
                            var s = null;
                            i && c("[0-9a-fA-F]")
                        }
                        return u[t] = {
                            nextPos: r,
                            result: s
                        }, s
                    }

                    function O() {
                        var e = "_@" + r,
                            t = u[e];
                        if (t) return r = t.nextPos, t.result;
                        var n = i;
                        i = !1;
                        var s = r,
                            o = [],
                            a = M();
                        while (a !== null) {
                            o.push(a);
                            var a = M()
                        }
                        var f = o !== null ? function(e) {
                            return e.join("")
                        }(o) : null;
                        if (f !== null) var l = f;
                        else {
                            var l = null;
                            r = s
                        }
                        return i = n, i && l === null && c("whitespace"), u[e] = {
                            nextPos: r,
                            result: l
                        }, l
                    }

                    function M() {
                        var t = "whitespace@" + r,
                            n = u[t];
                        if (n) return r = n.nextPos, n.result;
                        if (e.substr(r).match(/^[ 	\n\r]/) !== null) {
                            var s = e.charAt(r);
                            r++
                        } else {
                            var s = null;
                            i && c("[ 	\\n\\r]")
                        }
                        return u[t] = {
                            nextPos: r,
                            result: s
                        }, s
                    }

                    function _() {
                        function t(e) {
                            e.sort();
                            var t = null,
                                n = [];
                            for (var r = 0; r < e.length; r++) e[r] !== t && (n.push(e[r]), t = e[r]);
                            switch (n.length) {
                                case 0:
                                    return "end of input";
                                case 1:
                                    return n[0];
                                default:
                                    return n.slice(0, n.length - 1).join(", ") + " or " + n[n.length - 1]
                            }
                        }
                        var n = t(o),
                            i = Math.max(r, s),
                            u = i < e.length ? l(e.charAt(i)) : "end of input";
                        return "Expected " + n + " but " + u + " found."
                    }

                    function D() {
                        var t = 1,
                            n = 1,
                            r = !1;
                        for (var i = 0; i < s; i++) {
                            var o = e.charAt(i);
                            o === "\n" ? (r || t++, n = 1, r = !1) : o === "\r" | o === "\u2028" || o === "\u2029" ? (t++, n = 1, r = !0) : (n++, r = !1)
                        }
                        return {
                            line: t,
                            column: n
                        }
                    }
                    var n = {
                        _: O,
                        "char": k,
                        chars: C,
                        digits: L,
                        elementFormat: m,
                        hexDigit: A,
                        id: N,
                        messageFormatElement: v,
                        messageFormatPattern: p,
                        messageFormatPatternRight: d,
                        offsetPattern: w,
                        pluralFormatPattern: b,
                        pluralForms: S,
                        pluralStyle: g,
                        selectFormatPattern: E,
                        selectStyle: y,
                        start: h,
                        string: T,
                        stringKey: x,
                        whitespace: M
                    };
                    if (t !== undefined) {
                        if (n[t] === undefined) throw new Error("Invalid rule name: " + l(t) + ".")
                    } else t = "start";
                    var r = 0,
                        i = !0,
                        s = 0,
                        o = [],
                        u = {},
                        P = n[t]();
                    if (P === null || r !== e.length) {
                        var H = D();
                        throw new this.SyntaxError(_(), H.line, H.column)
                    }
                    return P
                },
                toSource: function() {
                    return this._source
                }
            };
            return e.SyntaxError = function(e, t, n) {
                this.name = "SyntaxError", this.message = e, this.line = t, this.column = n
            }, e.SyntaxError.prototype = Error.prototype, e
        }();
        t.prototype.parse = function() {
            return n.parse.apply(n, arguments)
        }, t.prototype.precompile = function(e) {
            function s(e, o) {
                o = o || {};
                var u = "",
                    a, f, l;
                switch (e.type) {
                    case "program":
                        return s(e.program);
                    case "messageFormatPattern":
                        for (a = 0; a < e.statements.length; ++a) u += s(e.statements[a], o);
                        return i.begin + u + i.end;
                    case "messageFormatPatternRight":
                        for (a = 0; a < e.statements.length; ++a) u += s(e.statements[a], o);
                        return u;
                    case "messageFormatElement":
                        return o.pf_count = o.pf_count || 0, u += 'if(!d){\nthrow new Error("MessageFormat: No data passed to function.");\n}\n', e.output ? u += 'r += d["' + e.argumentIndex + '"];\n' : (l = "lastkey_" + (o.pf_count + 1), u += "var " + l + ' = "' + e.argumentIndex + '";\n', u += "var k_" + (o.pf_count + 1) + "=d[" + l + "];\n", u += s(e.elementFormat, o)), u;
                    case "elementFormat":
                        return e.key === "select" ? (u += s(e.val, o), u += "r += (pf_" + o.pf_count + "[ k_" + (o.pf_count + 1) + " ] || pf_" + o.pf_count + '[ "other" ])( d );\n') : e.key === "plural" && (u += s(e.val, o), u += "if ( pf_" + o.pf_count + "[ k_" + (o.pf_count + 1) + ' + "" ] ) {\n', u += "r += pf_" + o.pf_count + "[ k_" + (o.pf_count + 1) + ' + "" ]( d ); \n', u += "}\nelse {\n", u += "r += (pf_" + o.pf_count + '[ MessageFormat.locale["' + n.fallbackLocale + '"]( k_' + (o.pf_count + 1) + " - off_" + o.pf_count + " ) ] || pf_" + o.pf_count + '[ "other" ] )( d );\n', u += "}\n"), u;
                    case "pluralFormatPattern":
                        o.pf_count = o.pf_count || 0, u += "var off_" + o.pf_count + " = " + e.offset + ";\n", u += "var pf_" + o.pf_count + " = { \n", r = !0;
                        for (a = 0; a < e.pluralForms.length; ++a) e.pluralForms[a].key === "other" && (r = !1), f ? u += ",\n" : f = 1, u += '"' + e.pluralForms[a].key + '" : ' + s(e.pluralForms[a].val, function() {
                            var e = JSON.parse(JSON.stringify(o));
                            return e.pf_count++, e
                        }());
                        u += "\n};\n";
                        if (r) throw new Error("No 'other' form found in pluralFormatPattern " + o.pf_count);
                        return u;
                    case "selectFormatPattern":
                        o.pf_count = o.pf_count || 0, u += "var off_" + o.pf_count + " = 0;\n", u += "var pf_" + o.pf_count + " = { \n", r = !0;
                        for (a = 0; a < e.pluralForms.length; ++a) e.pluralForms[a].key === "other" && (r = !1), f ? u += ",\n" : f = 1, u += '"' + e.pluralForms[a].key + '" : ' + s(e.pluralForms[a].val, function() {
                            var e = JSON.parse(JSON.stringify(o));
                            return e.pf_count++, e
                        }());
                        u += "\n};\n";
                        if (r) throw new Error("No 'other' form found in selectFormatPattern " + o.pf_count);
                        return u;
                    case "string":
                        return 'r += "' + t.Utils.numSub(t.Utils.escapeExpression(e.val), "k_" + o.pf_count + " - off_" + (o.pf_count - 1), o.pf_count) + '";\n';
                    default:
                        throw new Error("Bad AST type: " + e.type)
                }
            }
            var n = this,
                r = !1,
                i = {
                    begin: 'function(d){\nvar r = "";\n',
                    end: "return r;\n}"
                };
            return s(e)
        }, t.prototype.compile = function(e) {
            return (new Function("MessageFormat", "return " + this.precompile(this.parse(e))))(t)
        }, typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = t), exports.MessageFormat = t) : typeof define == "function" && define.amd ? define("messageFormat", [], function() {
            return t
        }) : e.MessageFormat = t
    }(this), define("common/services/interpolators", ["angular", "messageFormat"], function(e, t) {
        "use strict";
        return e.module("oe.services.interpolators", []).factory("$translatePolyglotInterpolation", function() {
            var e;
            return {
                setLocale: function(t) {
                    e = t
                },
                getInterpolationIdentifier: function() {
                    return "polyglot"
                },
                interpolate: function(e, t) {
                    for (var n in t) n !== "_" && t.hasOwnProperty(n) && (e = e.replace(new RegExp("%\\{" + n + "\\}", "g"), t[n]));
                    return e
                }
            }
        }).constant("TRANSLATE_MF_INTERPOLATION_CACHE", "$translateMessageFormatInterpolation").factory("$translateMessageFormatInterpolation", ["$cacheFactory", "TRANSLATE_MF_INTERPOLATION_CACHE", function(n, r) {
            var i = {},
                s = new t,
                o = "messageformat",
                u = n.get(r);
            return u || (u = n(r)), u.put("en", s), i.setLocale = function(e) {
                s = u.get(e), s || (s = new t(e), u.put(e, s))
            }, i.getInterpolationIdentifier = function() {
                return o
            }, i.interpolate = function(t, n) {
                n = n || {};
                var r = u.get(t + e.toJson(n));
                return r || (r = s.compile(t)(n), u.put(t + e.toJson(n), r)), r
            }, i
        }])
    }), define("common/services/translate", ["angular", "lodash"], function(e, t) {
        "use strict";
        return e.module("oe.services.translate", ["pascalprecht.translate"]).provider("loadTranslateParts", [function() {
            var e = [];
            this.$get = ["$translate", "$translatePartialLoader", "$rootScope", "$timeout", function(n, r, i, s) {
                return function() {
                    var i = Array.prototype.slice.apply(arguments),
                        o, u;
                    return typeof t.last(i) == "boolean" ? (o = t.initial(i), t.each(o, function(n) {
                        t.indexOf(e, n) === -1 && e.push(n)
                    }), u = e) : u = e.concat(i), t.each(u, function(e) {
                        r.addPart(e)
                    }), s(function() {
                        return n.refresh()
                    }, 0)
                }
            }]
        }])
    }), define("common/services/header", ["angular"], function(e) {
        "use strict";
        return e.module("oe.services.header", ["ui.router"]).factory("header", ["$rootScope", "$location", "$timeout", "$q", "$state", function(e, t, n, r, i) {
            function l(e) {
                var t = r.defer(),
                    n;
                return n = new Image, n.onload = function() {
                    t.resolve(n)
                }, n.crossOrigin = "Anonymous", n.src = e, t.promise
            }

            function c(e) {
                switch (e) {
                    case "root.scene":
                        return "idle";
                    case "root.home":
                    case "root.home.app":
                    case "root.home.solutions":
                    case "root.home.technology":
                        return "full";
                    default:
                        return "short"
                }
            }
            var s, o = "full",
                u = "",
                a = !1,
                f = !1;
            return s = e.$new(), s.$on("$stateChangeSuccess", function(e, t, n) {
                o = c(i.current.name)
            }), s.getMode = function() {
                return o
            }, s.setBackgroundImage = function(e) {
                return n(function() {
                    return u = e, e
                }, 0)
            }, s.getBackgroundImage = function() {
                return u
            }, s.setBackgroundVideoEnabled = function(e) {
                return n(function() {
                    return a = e, e
                }, 0)
            }, s.isBackgroundVideoEnabled = function() {
                return a
            }, s.setBackgroundVideoReady = function(e) {
                return n(function() {
                    return f = e, e
                }, 0)
            }, s.isBackgroundVideoReady = function() {
                return f
            }, s.reset = function() {
                this.setBackgroundImage(""), this.setBackgroundVideoEnabled(!1), this.setBackgroundVideoReady(!1)
            }, s
        }])
    }), define("common/services/layout", ["angular"], function(e) {
        "use strict";
        var t = "company",
            n = "app",
            r = "nonav";
        return e.module("oe.services.layout", ["ui.router"]).factory("layout", ["$rootScope", "$location", "$state", "$stateParams", function(e, i, s, o) {
            function f() {
                return o.nonav ? r : s.includes("root.scene") || s.includes("root.album") || s.includes("root.user") || s.includes("root.account") || s.includes("root.search") ? n : t
            }
            var u, a = t;
            return u = e.$new(), u.$on("$stateChangeSuccess", function(e, t, n) {
                a = f(), u.$broadcast("$layoutModeChanged", a)
            }), u.getLayoutMode = function() {
                return a
            }, u
        }])
    }), define("common/services/index", ["angular", "./constants", "./breadcrumbs", "./cache", "./iframe", "./supports", "./timing", "./tracking", "./search", "./sort", "./three", "./media", "./interpolators", "./translate", "./header", "./layout"], function(e) {
        "use strict";
        return e.module("oe.services", ["oe.services.constants", "oe.services.breadcrumbs", "oe.services.cache", "oe.services.iframe", "oe.services.supports", "oe.services.timing", "oe.services.tracking", "oe.services.search", "oe.services.sort", "oe.services.three", "oe.services.media", "oe.services.interpolators", "oe.services.translate", "oe.services.header", "oe.services.layout"])
    }),
    function() {
        var e = angular.module("restangular", []);
        e.provider("Restangular", function() {
            var e = {};
            e.init = function(e, t) {
                function s(e, t, n, r) {
                    var i = {};
                    return _.each(_.keys(r), function(s) {
                        var o = r[s];
                        o.params = _.extend({}, o.params, e.defaultRequestParams[o.method.toLowerCase()]), _.isEmpty(o.params) && delete o.params, e.isSafe(o.method) ? i[s] = function() {
                            return t(_.extend(o, {
                                url: n
                            }))
                        } : i[s] = function(e) {
                            return t(_.extend(o, {
                                url: n,
                                data: e
                            }))
                        }
                    }), i
                }
                var n = ["get", "head", "options", "trace"];
                t.isSafe = function(e) {
                    return _.contains(n, e.toLowerCase())
                };
                var r = /^https?:\/\//i;
                t.isAbsoluteUrl = function(e) {
                    return e && r.test(e)
                }, t.baseUrl = _.isUndefined(t.baseUrl) ? "" : t.baseUrl, e.setBaseUrl = function(e) {
                    return t.baseUrl = /\/$/.test(e) ? e.substring(0, e.length - 1) : e, this
                }, t.extraFields = t.extraFields || [], e.setExtraFields = function(e) {
                    return t.extraFields = e, this
                }, t.defaultHttpFields = t.defaultHttpFields || {}, e.setDefaultHttpFields = function(e) {
                    return t.defaultHttpFields = e, this
                }, t.withHttpDefaults = function(e) {
                    return _.defaults(e, t.defaultHttpFields)
                }, t.encodeIds = _.isUndefined(t.encodeIds) ? !0 : t.encodeIds, e.setEncodeIds = function(e) {
                    t.encodeIds = e
                }, t.defaultRequestParams = t.defaultRequestParams || {
                    get: {},
                    post: {},
                    put: {},
                    remove: {},
                    common: {}
                }, e.setDefaultRequestParams = function(e, n) {
                    var r = [],
                        i = n || e;
                    return _.isUndefined(n) ? r.push("common") : _.isArray(e) ? r = e : r.push(e), _.each(r, function(e) {
                        t.defaultRequestParams[e] = i
                    }), this
                }, e.requestParams = t.defaultRequestParams, t.defaultHeaders = t.defaultHeaders || {}, e.setDefaultHeaders = function(n) {
                    return t.defaultHeaders = n, e.defaultHeaders = t.defaultHeaders, this
                }, e.defaultHeaders = t.defaultHeaders, t.methodOverriders = t.methodOverriders || [], e.setMethodOverriders = function(e) {
                    var n = _.extend([], e);
                    return t.isOverridenMethod("delete", n) && n.push("remove"), t.methodOverriders = n, this
                }, t.isOverridenMethod = function(e, n) {
                    var r = n || t.methodOverriders;
                    return !_.isUndefined(_.find(r, function(t) {
                        return t.toLowerCase() === e.toLowerCase()
                    }))
                }, t.urlCreator = t.urlCreator || "path", e.setUrlCreator = function(e) {
                    if (!_.has(t.urlCreatorFactory, e)) throw new Error("URL Path selected isn't valid");
                    return t.urlCreator = e, this
                }, t.restangularFields = t.restangularFields || {
                    id: "id",
                    route: "route",
                    parentResource: "parentResource",
                    restangularCollection: "restangularCollection",
                    cannonicalId: "__cannonicalId",
                    etag: "restangularEtag",
                    selfLink: "href",
                    get: "get",
                    getList: "getList",
                    put: "put",
                    post: "post",
                    remove: "remove",
                    head: "head",
                    trace: "trace",
                    options: "options",
                    patch: "patch",
                    getRestangularUrl: "getRestangularUrl",
                    putElement: "putElement",
                    addRestangularMethod: "addRestangularMethod",
                    getParentList: "getParentList",
                    clone: "clone",
                    ids: "ids"
                }, e.setRestangularFields = function(e) {
                    return t.restangularFields = _.extend(t.restangularFields, e), this
                }, t.setFieldToElem = function(e, t, n) {
                    var r = e.split("."),
                        i = t;
                    return _.each(_.initial(r), function(e) {
                        i[e] = {}, i = i[e]
                    }), i[_.last(r)] = n, this
                }, t.getFieldFromElem = function(e, t) {
                    var n = e.split("."),
                        r = angular.copy(t);
                    return _.each(n, function(e) {
                        r && (r = r[e])
                    }), r
                }, t.setIdToElem = function(e, n) {
                    return t.setFieldToElem(t.restangularFields.id, e, n), this
                }, t.getIdFromElem = function(e) {
                    return t.getFieldFromElem(t.restangularFields.id, e)
                }, t.isValidId = function(e) {
                    return "" !== e && !_.isUndefined(e) && !_.isNull(e)
                }, t.setUrlToElem = function(e, n) {
                    return t.setFieldToElem(t.restangularFields.selfLink, e, n), this
                }, t.getUrlFromElem = function(e) {
                    return t.getFieldFromElem(t.restangularFields.selfLink, e)
                }, t.useCannonicalId = _.isUndefined(t.useCannonicalId) ? !1 : t.useCannonicalId, e.setUseCannonicalId = function(e) {
                    return t.useCannonicalId = e, this
                }, t.getCannonicalIdFromElem = function(e) {
                    var n = e[t.restangularFields.cannonicalId],
                        r = t.isValidId(n) ? n : t.getIdFromElem(e);
                    return r
                }, t.responseExtractor = t.responseExtractor || function(e, t, n, r, i, s) {
                    return e
                }, e.setResponseExtractor = function(e) {
                    return t.responseExtractor = e, this
                }, e.setResponseInterceptor = e.setResponseExtractor, t.fullRequestInterceptor = t.fullRequestInterceptor || function(e, t, n, r, i, s) {
                    return {
                        element: e,
                        headers: i,
                        params: s
                    }
                }, e.setRequestInterceptor = function(e) {
                    return t.fullRequestInterceptor = function(t, n, r, i, s, o) {
                        return {
                            headers: s,
                            params: o,
                            element: e(t, n, r, i)
                        }
                    }, this
                }, e.setFullRequestInterceptor = function(e) {
                    return t.fullRequestInterceptor = e, this
                }, t.errorInterceptor = t.errorInterceptor || function() {}, e.setErrorInterceptor = function(e) {
                    return t.errorInterceptor = e, this
                }, t.onBeforeElemRestangularized = t.onBeforeElemRestangularized || function(e) {
                    return e
                }, e.setOnBeforeElemRestangularized = function(e) {
                    return t.onBeforeElemRestangularized = e, this
                }, t.onElemRestangularized = t.onElemRestangularized || function(e) {
                    return e
                }, e.setOnElemRestangularized = function(e) {
                    return t.onElemRestangularized = e, this
                }, e.setListTypeIsArray = function(e) {}, t.shouldSaveParent = t.shouldSaveParent || function() {
                    return !0
                }, e.setParentless = function(e) {
                    return _.isArray(e) ? t.shouldSaveParent = function(t) {
                        return !_.contains(e, t)
                    } : _.isBoolean(e) && (t.shouldSaveParent = function() {
                        return !e
                    }), this
                }, t.suffix = _.isUndefined(t.suffix) ? null : t.suffix, e.setRequestSuffix = function(e) {
                    return t.suffix = e, this
                }, t.transformers = t.transformers || {}, e.addElementTransformer = function(e, n, r) {
                    var i = null,
                        s = null;
                    arguments.length === 2 ? s = n : (s = r, i = n);
                    var o = t.transformers[e];
                    o || (o = t.transformers[e] = []), o.push(function(e, t) {
                        return _.isNull(i) || e == i ? s(t) : t
                    })
                }, e.extendCollection = function(t, n) {
                    return e.addElementTransformer(t, !0, n)
                }, e.extendModel = function(t, n) {
                    return e.addElementTransformer(t, !1, n)
                }, t.transformElem = function(e, n, r, i) {
                    var s = t.transformers[r],
                        o = e;
                    return s && _.each(s, function(e) {
                        o = e(n, o)
                    }), t.onElemRestangularized(o, n, r, i)
                }, t.fullResponse = _.isUndefined(t.fullResponse) ? !1 : t.fullResponse, e.setFullResponse = function(e) {
                    return t.fullResponse = e, this
                }, t.urlCreatorFactory = {};
                var i = function() {};
                i.prototype.setConfig = function(e) {
                    return this.config = e, this
                }, i.prototype.parentsArray = function(e) {
                    var t = [];
                    while (e) t.push(e), e = e[this.config.restangularFields.parentResource];
                    return t.reverse()
                }, i.prototype.resource = function(e, n, r, i, o, u, a) {
                    var f = _.defaults(i || {}, this.config.defaultRequestParams.common),
                        l = _.defaults(r || {}, this.config.defaultHeaders);
                    u && (t.isSafe(a) ? l["If-None-Match"] = u : l["If-Match"] = u);
                    var c = this.base(e);
                    return c += o ? "/" + o : "", c += this.config.suffix || "", s(this.config, n, c, {
                        getList: this.config.withHttpDefaults({
                            method: "GET",
                            params: f,
                            headers: l
                        }),
                        get: this.config.withHttpDefaults({
                            method: "GET",
                            params: f,
                            headers: l
                        }),
                        put: this.config.withHttpDefaults({
                            method: "PUT",
                            params: f,
                            headers: l
                        }),
                        post: this.config.withHttpDefaults({
                            method: "POST",
                            params: f,
                            headers: l
                        }),
                        remove: this.config.withHttpDefaults({
                            method: "DELETE",
                            params: f,
                            headers: l
                        }),
                        head: this.config.withHttpDefaults({
                            method: "HEAD",
                            params: f,
                            headers: l
                        }),
                        trace: this.config.withHttpDefaults({
                            method: "TRACE",
                            params: f,
                            headers: l
                        }),
                        options: this.config.withHttpDefaults({
                            method: "OPTIONS",
                            params: f,
                            headers: l
                        }),
                        patch: this.config.withHttpDefaults({
                            method: "PATCH",
                            params: f,
                            headers: l
                        })
                    })
                };
                var o = function() {};
                o.prototype = new i, o.prototype.base = function(e) {
                    var n = this;
                    return _.reduce(this.parentsArray(e), function(e, r) {
                        var i, s = n.config.getUrlFromElem(r);
                        if (s) {
                            if (n.config.isAbsoluteUrl(s)) return s;
                            i = s
                        } else {
                            i = r[n.config.restangularFields.route];
                            if (r[n.config.restangularFields.restangularCollection]) {
                                var o = r[n.config.restangularFields.ids];
                                o && (i += "/" + o.join(","))
                            } else {
                                var u;
                                n.config.useCannonicalId ? u = n.config.getCannonicalIdFromElem(r) : u = n.config.getIdFromElem(r), t.isValidId(u) && (i += "/" + (n.config.encodeIds ? encodeURIComponent(u) : u))
                            }
                        }
                        return e + "/" + i
                    }, this.config.baseUrl)
                }, o.prototype.fetchUrl = function(e, t) {
                    var n = this.base(e);
                    return t && (n += "/" + t), n
                }, t.urlCreatorFactory.path = o
            };
            var t = {};
            e.init(this, t), this.$get = ["$http", "$q", function(n, r) {
                function i(s) {
                    function a(e, t, n) {
                        t[s.restangularFields.route] = n, t[s.restangularFields.getRestangularUrl] = _.bind(u.fetchUrl, u, t), t[s.restangularFields.addRestangularMethod] = _.bind(F, t), t[s.restangularFields.clone] = _.bind(w, t, t), t.one = _.bind(f, t, t), t.all = _.bind(l, t, t), t.several = _.bind(c, t, t), t.oneUrl = _.bind(h, t, t), t.allUrl = _.bind(p, t, t);
                        if (e && s.shouldSaveParent(n)) {
                            var r = s.getIdFromElem(e),
                                i = s.getUrlFromElem(e),
                                o = _.union(_.values(_.pick(s.restangularFields, ["route", "parentResource"])), s.extraFields),
                                a = _.pick(e, o);
                            s.isValidId(r) && s.setIdToElem(a, r), s.isValidId(i) && s.setUrlToElem(a, i), t[s.restangularFields.parentResource] = a
                        } else t[s.restangularFields.parentResource] = null;
                        return t
                    }

                    function f(e, t, n) {
                        var r = {};
                        return s.setIdToElem(r, n), E(e, r, t)
                    }

                    function l(e, t) {
                        return S(e, [], t, !0)
                    }

                    function c(e, t, n) {
                        var r = [];
                        return r[s.restangularFields.ids] = Array.prototype.splice.call(arguments, 2), S(e, r, t, !0)
                    }

                    function h(e, t, n) {
                        var r = {};
                        return s.setUrlToElem(r, n), E(e, r, t)
                    }

                    function p(e, t, n) {
                        var r = {};
                        return s.setUrlToElem(r, n), S(e, r, t, !0)
                    }

                    function d(e, t) {
                        return e.call = _.bind(v, e), e.get = _.bind(m, e), e[s.restangularFields.restangularCollection] = t, t && (e.push = _.bind(v, e, "push")), e
                    }

                    function v(e) {
                        var t = r.defer(),
                            n = arguments;
                        return this.then(function(r) {
                            var i = Array.prototype.slice.call(n, 1),
                                s = r[e];
                            s.apply(r, i), t.resolve(r)
                        }), d(t.promise, this[s.restangularFields.restangularCollection])
                    }

                    function m(e) {
                        var t = r.defer();
                        return this.then(function(n) {
                            t.resolve(n[e])
                        }), d(t.promise, this[s.restangularFields.restangularCollection])
                    }

                    function g(e, t, n) {
                        if (s.fullResponse) return e.resolve(_.extend(t, {
                            data: n
                        }));
                        e.resolve(n)
                    }

                    function y(e) {
                        return _.omit(e, _.values(_.omit(s.restangularFields, "id")))
                    }

                    function b(e) {
                        e.customOperation = _.bind(j, e), _.each(["put", "post", "get", "delete"], function(t) {
                            _.each(["do", "custom"], function(n) {
                                var r = t === "delete" ? "remove" : t,
                                    i = n + t.toUpperCase(),
                                    s;
                                r !== "put" && r !== "post" ? s = j : s = function(e, t, n, r, i) {
                                    return _.bind(j, this)(e, n, r, i, t)
                                }, e[i] = _.bind(s, e, r)
                            })
                        }), e.customGETLIST = _.bind(C, e), e.doGETLIST = e.customGETLIST
                    }

                    function w(e) {
                        var t = angular.copy(e);
                        return E(t[s.restangularFields.parentResource], t, t[s.restangularFields.route])
                    }

                    function E(e, t, n, r) {
                        var i = s.onBeforeElemRestangularized(t, !1, n),
                            u = a(e, i, n);
                        return s.useCannonicalId && (u[s.restangularFields.cannonicalId] = s.getIdFromElem(u)), r && (u[s.restangularFields.getParentList] = function() {
                            return r
                        }), u[s.restangularFields.restangularCollection] = !1, u[s.restangularFields.get] = _.bind(L, u), u[s.restangularFields.getList] = _.bind(C, u), u[s.restangularFields.put] = _.bind(O, u), u[s.restangularFields.post] = _.bind(M, u), u[s.restangularFields.remove] = _.bind(A, u), u[s.restangularFields.head] = _.bind(D, u), u[s.restangularFields.trace] = _.bind(P, u), u[s.restangularFields.options] = _.bind(H, u), u[s.restangularFields.patch] = _.bind(B, u), b(u), s.transformElem(u, !1, n, o)
                    }

                    function S(e, t, n) {
                        var r = s.onBeforeElemRestangularized(t, !0, n),
                            i = a(e, r, n);
                        return i[s.restangularFields.restangularCollection] = !0, i[s.restangularFields.post] = _.bind(M, i, null), i[s.restangularFields.head] = _.bind(D, i), i[s.restangularFields.trace] = _.bind(P, i), i[s.restangularFields.putElement] = _.bind(T, i), i[s.restangularFields.options] = _.bind(H, i), i[s.restangularFields.patch] = _.bind(B, i), i[s.restangularFields.get] = _.bind(x, i), i[s.restangularFields.getList] = _.bind(C, i, null), b(i), s.transformElem(i, !0, n, o)
                    }

                    function x(e, t, n) {
                        return this.customGET(e.toString(), t, n)
                    }

                    function T(e, t, n) {
                        var i = this,
                            s = this[e],
                            o = r.defer();
                        return s.put(t, n).then(function(t) {
                            var n = w(i);
                            n[e] = t, o.resolve(n)
                        }, function(e) {
                            o.reject(e)
                        }), d(o.promise, !0)
                    }

                    function N(e, t, n, r, i, o) {
                        var u = s.responseExtractor(e, t, n, r, i, o),
                            a = i.headers("ETag");
                        return u && a && (u[s.restangularFields.etag] = a), u
                    }

                    function C(e, t, i) {
                        var o = this,
                            a = r.defer(),
                            f = "getList",
                            l = u.fetchUrl(this, e),
                            c = e || o[s.restangularFields.route],
                            h = s.fullRequestInterceptor(null, f, c, l, i || {}, t || {});
                        return u.resource(this, n, h.headers, h.params, e, this[s.restangularFields.etag], f).getList().then(function(t) {
                            var n = t.data,
                                r = N(n, f, c, l, t, a),
                                i = _.map(r, function(t) {
                                    return o[s.restangularFields.restangularCollection] ? E(o[s.restangularFields.parentResource], t, o[s.restangularFields.route], r) : E(o, t, e, r)
                                });
                            i = _.extend(r, i), o[s.restangularFields.restangularCollection] ? g(a, t, S(null, i, o[s.restangularFields.route])) : g(a, t, S(o, i, e))
                        }, function(t) {
                            s.errorInterceptor(t) !== !1 && a.reject(t)
                        }), d(a.promise, !0)
                    }

                    function k(e, t, i, o, a) {
                        var f = this,
                            l = r.defer(),
                            c = i || {},
                            h = t || this[s.restangularFields.route],
                            p = u.fetchUrl(this, t),
                            v = o || this,
                            m = v[s.restangularFields.etag];
                        _.isObject(v) && (v = y(v));
                        var b = s.fullRequestInterceptor(v, e, h, p, a || {}, c || {}),
                            w = function(n) {
                                var r = n.data,
                                    i = N(r, e, h, p, n, l);
                                i ? e === "post" && !f[s.restangularFields.restangularCollection] ? g(l, n, E(f, i, t)) : g(l, n, E(f[s.restangularFields.parentResource], i, f[s.restangularFields.route])) : g(l, n, undefined)
                            },
                            S = function(e) {
                                s.errorInterceptor(e) !== !1 && l.reject(e)
                            },
                            x = e,
                            T = _.extend({}, b.headers),
                            C = s.isOverridenMethod(e);
                        return C && (x = "post", T = _.extend(T, {
                            "X-HTTP-Method-Override": e === "remove" ? "DELETE" : e
                        })), s.isSafe(e) ? C ? u.resource(this, n, T, b.params, t, m, x)[x]({}).then(w, S) : u.resource(this, n, T, b.params, t, m, x)[x]().then(w, S) : u.resource(this, n, T, b.params, t, m, x)[x](b.element).then(w, S), d(l.promise)
                    }

                    function L(e, t) {
                        return _.bind(k, this)("get", undefined, e, undefined, t)
                    }

                    function A(e, t) {
                        return _.bind(k, this)("remove", undefined, e, undefined, t)
                    }

                    function O(e, t) {
                        return _.bind(k, this)("put", undefined, e, undefined, t)
                    }

                    function M(e, t, n, r) {
                        return _.bind(k, this)("post", e, n, t, r)
                    }

                    function D(e, t) {
                        return _.bind(k, this)("head", undefined, e, undefined, t)
                    }

                    function P(e, t) {
                        return _.bind(k, this)("trace", undefined, e, undefined, t)
                    }

                    function H(e, t) {
                        return _.bind(k, this)("options", undefined, e, undefined, t)
                    }

                    function B(e, t, n) {
                        return _.bind(k, this)("patch", undefined, t, e, n)
                    }

                    function j(e, t, n, r, i) {
                        return _.bind(k, this)(e, t, n, i, r)
                    }

                    function F(e, t, n, r, i, o) {
                        var u;
                        t === "getList" ? u = _.bind(C, this, n) : u = _.bind(j, this, t, n);
                        var a = function(e, t, n) {
                            var s = _.defaults({
                                params: e,
                                headers: t,
                                elem: n
                            }, {
                                params: r,
                                headers: i,
                                elem: o
                            });
                            return u(s.params, s.headers, s.elem)
                        };
                        s.isSafe(t) ? this[e] = a : this[e] = function(e, t, n) {
                            return a(t, n, e)
                        }
                    }

                    function I(n) {
                        var r = angular.copy(t);
                        return e.init(r, r), n(r), i(r)
                    }
                    var o = {},
                        u = new s.urlCreatorFactory[s.urlCreator];
                    return u.setConfig(s), e.init(o, s), o.copy = _.bind(w, o), o.withConfig = _.bind(I, o), o.one = _.bind(f, o, null), o.all = _.bind(l, o, null), o.several = _.bind(c, o, null), o.oneUrl = _.bind(h, o, null), o.allUrl = _.bind(p, o, null), o.restangularizeElement = _.bind(E, o), o.restangularizeCollection = _.bind(S, o), o
                }
                return i(t)
            }]
        })
    }(), define("restangular", ["angular", "lodash"], function() {}), define("common/resources/restangular", ["angular", "lodash", "restangular"], function(e, t, n) {
        "use strict";
        return e.module("oe.resources.restangular", ["restangular", "oe.services.constants"]).factory("OeRestangular", ["Restangular", "$config", function(e, n) {
            return e.withConfig(function(e) {
                e.setBaseUrl(n.BASE_API_URL), e.setDefaultHttpFields({
                    cache: !0
                }), e.setResponseExtractor(function(e, n, r, i) {
                    var s, o;
                    return n === "getList" ? (o = r.substring(r.lastIndexOf("/") + 1), t.has(e, o) || (o = t.without(t.keys(e), "meta")[0]), s = t.reduce(t.pick(e, o), function(e, t, n) {
                        return Array.prototype.push.apply(e, t), e
                    }, []), t.extend(s, t.omit(e, o))) : s = e, s
                })
            })
        }])
    }), define("common/resources/scenes", ["angular", "./restangular"], function(e, t) {
        "use strict";
        return e.module("oe.resources.scenes", ["oe.resources.restangular"]).factory("Scenes", ["OeRestangular", function(e) {
            return e.all("scenes")
        }])
    }), define("common/resources/users", ["angular", "./restangular"], function(e, t) {
        "use strict";
        return e.module("oe.resources.users", ["oe.resources.restangular"]).factory("Users", ["OeRestangular", function(e) {
            return e.all("users")
        }]).factory("Followings", ["OeRestangular", function(e) {
            return e.all("friendships/followings")
        }]).factory("Followers", ["OeRestangular", function(e) {
            return e.all("friendships/followers")
        }])
    }), define("common/resources/oemodels", ["angular", "threejs", "lodash"], function(e, t, n) {
        "use strict";
        var r = function(e) {
            this.crossOrigin = "Anonymous", this.$q = e
        };
        return r.prototype.extractUrlBase = function(e) {
            var t = e.split("/");
            return t.pop(), (t.length < 1 ? "." : t.join("/")) + "/"
        }, r.prototype.needsTangents = function(e) {
            return n.some(e, function(e) {
                return e instanceof t.ShaderMaterial
            })
        }, r.prototype.initMaterials = function(e, t) {
            return this.$q.all(n.map(e, function(e) {
                return this.createMaterial(e, t)
            }, this))
        }, r.prototype.createMaterial = function(e, n) {
            function p(e) {
                var t = Math.log(e) / Math.LN2;
                return Math.floor(t) === t
            }

            function d(e) {
                var t = Math.log(e) / Math.LN2;
                return Math.pow(2, Math.round(t))
            }

            function v(e, t) {
                var n = new Image,
                    i = r.$q.defer();
                return n.onload = function() {
                    if (!p(this.width) || !p(this.height)) {
                        var t = d(this.width),
                            r = d(this.height),
							ctx;
                        e.image.width = t,
						e.image.height = r,
						ctx = e.image.getContext("2d"),
ctx.translate( t / 2, r / 2 );
ctx.rotate( -Math.PI / 2 );
ctx.translate( -t / 2, -r / 2 );
						ctx.drawImage(this, 0, 0, t, r)
                    } else e.image = this;
                    e.needsUpdate = !0, i.resolve(n)
                }, r.crossOrigin !== undefined && (n.crossOrigin = r.crossOrigin), n.src = t, i.promise
            }

            function m(e, i, s, o, u, a, f) {
                var l = /\.dds$/i.test(s),
                    c = n + "/" + s,
                    h = r.$q.defer(),
                    p, d;
                return l ? (p = t.ImageUtils.loadCompressedTexture(c), e[i] = p) :
				(
					p = document.createElement("canvas"),
					e[i] = new t.Texture(p)
				),
				e[i].sourceFile = s,
				o && (e[i].repeat.set(o[0], o[1]), o[0] !== 1 && (e[i].wrapS = t.RepeatWrapping), o[1] !== 1 && (e[i].wrapT = t.RepeatWrapping)), u && e[i].offset.set(u[0], u[1]), a && (d = {
                    repeat: t.RepeatWrapping,
                    mirror: t.MirroredRepeatWrapping
                }, d[a[0]] !== undefined && (e[i].wrapS = d[a[0]]), d[a[1]] !== undefined && (e[i].wrapT = d[a[1]])), f && (e[i].anisotropy = f), l ? h.resolve(e[i]) : v(e[i], c).then(function(t) {
                    h.resolve(e[i])
                }), h.promise
            }

            function g(e) {
                return (e[0] * 255 << 16) + (e[1] * 255 << 8) + e[2] * 255
            }

            function y(e, t, n) {
                var i = [];
                return n && (t.mapDiffuse && i.push(m(e, "map", t.mapDiffuse, t.mapDiffuseRepeat, t.mapDiffuseOffset, t.mapDiffuseWrap, t.mapDiffuseAnisotropy)), t.mapLight && i.push(m(e, "lightMap", t.mapLight, t.mapLightRepeat, t.mapLightOffset, t.mapLightWrap, t.mapLightAnisotropy)), t.mapBump && i.push(m(e, "bumpMap", t.mapBump, t.mapBumpRepeat, t.mapBumpOffset, t.mapBumpWrap, t.mapBumpAnisotropy)), t.mapNormal && i.push(m(e, "normalMap", t.mapNormal, t.mapNormalRepeat, t.mapNormalOffset, t.mapNormalWrap, t.mapNormalAnisotropy)), t.mapSpecular && i.push(m(e, "specularMap", t.mapSpecular, t.mapSpecularRepeat, t.mapSpecularOffset, t.mapSpecularWrap, t.mapSpecularAnisotropy))), r.$q.all(i)
            }
            var r = this,
                i = this.$q.defer(),
                s, o, u, a, f, l, c, h;
            o = "MeshLambertMaterial", s = {
                color: 15658734,
                opacity: 1,
                map: null,
                lightMap: null,
                normalMap: null,
                bumpMap: null,
                wireframe: !1
            }, e.shading && (u = e.shading.toLowerCase(), u === "phong" ? o = "MeshPhongMaterial" : u === "basic" && (o = "MeshBasicMaterial")), e.blending !== undefined && t[e.blending] !== undefined && (s.blending = t[e.blending]);
            if (e.transparent !== undefined || e.opacity < 1) s.transparent = e.transparent;
            return e.depthTest !== undefined && (s.depthTest = e.depthTest), e.depthWrite !== undefined && (s.depthWrite = e.depthWrite), e.visible !== undefined && (s.visible = e.visible), e.flipSided !== undefined && (s.side = t.BackSide), e.doubleSided !== undefined && (s.side = t.DoubleSide), e.wireframe !== undefined && (s.wireframe = e.wireframe), e.vertexColors !== undefined && (e.vertexColors === "face" ? s.vertexColors = t.FaceColors : e.vertexColors && (s.vertexColors = t.VertexColors)), e.colorDiffuse ? s.color = g(e.colorDiffuse) : e.DbgColor && (s.color = e.DbgColor), e.colorSpecular && (s.specular = g(e.colorSpecular)), e.colorAmbient && (s.ambient = g(e.colorAmbient)), e.transparency && (s.opacity = e.transparency), e.specularCoef && (s.shininess = e.specularCoef), h = y(s, e, n), e.mapBumpScale && (s.bumpScale = e.mapBumpScale), e.mapNormal ? (a = t.ShaderLib.normalmap, f = t.UniformsUtils.clone(a.uniforms), f.tNormal.value = s.normalMap, e.mapNormalFactor && f.uNormalScale.value.set(e.mapNormalFactor, e.mapNormalFactor), s.map && (f.tDiffuse.value = s.map, f.enableDiffuse.value = !0), s.specularMap && (f.tSpecular.value = s.specularMap, f.enableSpecular.value = !0), s.lightMap && (f.tAO.value = s.lightMap, f.enableAO.value = !0), f.diffuse.value.setHex(s.color), f.specular.value.setHex(s.specular), f.ambient.value.setHex(s.ambient), f.shininess.value = s.shininess, s.opacity !== undefined && (f.opacity.value = s.opacity), l = {
                fragmentShader: a.fragmentShader,
                vertexShader: a.vertexShader,
                uniforms: f,
                lights: !0,
                fog: !0
            }, c = new t.ShaderMaterial(l), s.transparent && (c.transparent = !0)) : c = new t[o](s), e.DbgName !== undefined && (c.name = e.DbgName), h.finally(function(e) {
                i.resolve(c)
            }), i.promise
        }, r.prototype.parseBinary = function(e, n) {
            function h() {
                function I(e, t) {
                    var n = {
                        version: z(e, t),
                        camera_width: z(e, t + 4),
                        camera_height: z(e, t + 8),
                        camera_fx: W(e, t + 12),
                        camera_fy: W(e, t + 16),
                        camera_k1: W(e, t + 20),
                        camera_k2: W(e, t + 24),
                        depthmap_width: z(e, t + 28),
                        depthmap_height: z(e, t + 32),
                        header_bytes: 36
                    };
                    return n.version === 2 ? (n.depthmap_min_depth = .6, n.depthmap_max_depth = 10) : (n.depthmap_min_depth = W(e, t + 36), n.depthmap_max_depth = W(e, t + 40), n.header_bytes = 44), n
                }

                function q(e, t, n) {
                    var r = new Uint8Array(e, t, n),
                        i = "",
                        s;
                    for (s = 0; s < n; s += 1) i += String.fromCharCode(r[t + s]);
                    return i
                }

                function R(e, t) {
                    var n = new Uint8Array(e, t, 1);
                    return n[0]
                }

                function U(e, t) {
                    var n = new Uint32Array(e, t, 1);
                    return n[0]
                }

                function z(e, t) {
                    var n = new Int32Array(e, t, 1);
                    return n[0]
                }

                function W(e, t) {
                    var n = new Float32Array(e, t, 1);
                    return n[0]
                }

                function X(t) {
                    var r = s.nvertices,
                        i = new Float32Array(e, t, r * 3),
                        o, u, a, f;
                    for (o = 0; o < r; o += 1) u = i[o * 3], a = i[o * 3 + 1], f = i[o * 3 + 2], p(n, u, a, f);
                    return r * 3 * Float32Array.BYTES_PER_ELEMENT
                }

                function V(t) {
                    var n = s.nnormals,
                        r, o, u, a, f;
                    if (n) {
                        r = new Int8Array(e, t, n * 3);
                        for (o = 0; o < n; o += 1) u = r[o * 3], a = r[o * 3 + 1], f = r[o * 3 + 2], i.push(u / 127, a / 127, f / 127)
                    }
                    return n * 3 * Int8Array.BYTES_PER_ELEMENT
                }

                function $(t) {
                    var n = s.nuvs,
                        r, i, u, a;
                    if (n) {
                        r = new Float32Array(e, t, n * 2);
                        for (i = 0; i < n; i += 1) u = r[i * 2], a = r[i * 2 + 1], o.push(u, a)
                    }
                    return n * 2 * Float32Array.BYTES_PER_ELEMENT
                }

                function J(t, r) {
                    var i, s, u, a, f, l, c, h, p, d, v = new Uint32Array(e, r, 3 * t);
                    for (i = 0; i < t; i += 1) s = v[i * 3], u = v[i * 3 + 1], a = v[i * 3 + 2], f = o[s * 2], h = o[s * 2 + 1], l = o[u * 2], p = o[u * 2 + 1], c = o[a * 2], d = o[a * 2 + 1], y(n.faceVertexUvs[0], f, h, l, p, c, d)
                }

                function K(t, r) {
                    var i, s, u, a, f, l, c, h, p, d, v, m, g, y = new Uint32Array(e, r, 4 * t);
                    for (i = 0; i < t; i += 1) s = y[i * 4], u = y[i * 4 + 1], a = y[i * 4 + 2], f = y[i * 4 + 3], l = o[s * 2], d = o[s * 2 + 1], c = o[u * 2], v = o[u * 2 + 1], h = o[a * 2], m = o[a * 2 + 1], p = o[f * 2], g = o[f * 2 + 1], b(n.faceVertexUvs[0], l, d, c, v, h, m, p, g)
                }

                function Q(t, r, i) {
                    var s, o, u, a, f, l = new Uint32Array(e, r, 3 * t),
                        c = new Uint16Array(e, i, t);
                    for (s = 0; s < t; s += 1) o = l[s * 3], u = l[s * 3 + 1], a = l[s * 3 + 2], f = c[s], d(n, o, u, a, f)
                }

                function G(t, r, i) {
                    var s, o, u, a, f, l, c = new Uint32Array(e, r, 4 * t),
                        h = new Uint16Array(e, i, t);
                    for (s = 0; s < t; s += 1) o = c[s * 4], u = c[s * 4 + 1], a = c[s * 4 + 2], f = c[s * 4 + 3], l = h[s], v(n, o, u, a, f, l)
                }

                function Y(t, r, s, o) {
                    var u, a, f, l, c, h, p, d, v = new Uint32Array(e, r, 3 * t),
                        g = new Uint32Array(e, s, 3 * t),
                        y = new Uint16Array(e, o, t);
                    for (u = 0; u < t; u += 1) a = v[u * 3], f = v[u * 3 + 1], l = v[u * 3 + 2], h = g[u * 3], p = g[u * 3 + 1], d = g[u * 3 + 2], c = y[u], m(n, i, a, f, l, c, h, p, d)
                }

                function Z(t, r, s, o) {
                    var u, a, f, l, c, h, p, d, v, m, y = new Uint32Array(e, r, 4 * t),
                        b = new Uint32Array(e, s, 4 * t),
                        w = new Uint16Array(e, o, t);
                    for (u = 0; u < t; u += 1) a = y[u * 4], f = y[u * 4 + 1], l = y[u * 4 + 2], c = y[u * 4 + 3], p = b[u * 4], d = b[u * 4 + 1], v = b[u * 4 + 2], m = b[u * 4 + 3], h = w[u], g(n, i, a, f, l, c, h, p, d, v, m)
                }

                function et(e) {
                    var t = s.ntri_flat,
                        n;
                    t && (n = e + t * Uint32Array.BYTES_PER_ELEMENT * 3, Q(t, e, n))
                }

                function tt(e) {
                    var t = s.ntri_flat_uv,
                        n, r;
                    t && (n = e + t * Uint32Array.BYTES_PER_ELEMENT * 3, r = n + t * Uint32Array.BYTES_PER_ELEMENT * 3, Q(t, e, r), J(t, n))
                }

                function nt(e) {
                    var t = s.ntri_smooth,
                        n, r;
                    t && (n = e + t * Uint32Array.BYTES_PER_ELEMENT * 3, r = n + t * Uint32Array.BYTES_PER_ELEMENT * 3, Y(t, e, n, r))
                }

                function rt(e) {
                    var t = s.ntri_smooth_uv,
                        n, r, i;
                    t && (n = e + t * Uint32Array.BYTES_PER_ELEMENT * 3, r = n + t * Uint32Array.BYTES_PER_ELEMENT * 3, i = r + t * Uint32Array.BYTES_PER_ELEMENT * 3, Y(t, e, n, i), J(t, r))
                }

                function it(e) {
                    var t = s.nquad_flat,
                        n;
                    t && (n = e + t * Uint32Array.BYTES_PER_ELEMENT * 4, G(t, e, n))
                }

                function st(e) {
                    var t = s.nquad_flat_uv,
                        n, r;
                    t && (n = e + t * Uint32Array.BYTES_PER_ELEMENT * 4, r = n + t * Uint32Array.BYTES_PER_ELEMENT * 4, G(t, e, r), K(t, n))
                }

                function ot(e) {
                    var t = s.nquad_smooth,
                        n, r;
                    t && (n = e + t * Uint32Array.BYTES_PER_ELEMENT * 4, r = n + t * Uint32Array.BYTES_PER_ELEMENT * 4, Z(t, e, n, r))
                }

                function ut(e) {
                    var t = s.nquad_smooth_uv,
                        n, r, i;
                    t && (n = e + t * Uint32Array.BYTES_PER_ELEMENT * 4, r = n + t * Uint32Array.BYTES_PER_ELEMENT * 4, i = r + t * Uint32Array.BYTES_PER_ELEMENT * 4, Z(t, e, n, i), K(t, r))
                }
                var n = this,
                    r = 0,
                    i = [],
                    o = [],
                    u, a, f, l, c, h, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F;
                t.Geometry.call(this), s = I(e, r);
                if (s.version !== 2 && s.version !== 3) throw new Error("OEModelLoader: Unsupported model version [" + s.version + "]");
                r += s.header_bytes, _ = new Float32Array(e, r, s.depthmap_width * s.depthmap_height), D = s.camera_fx / s.camera_width, P = s.camera_fy / s.camera_height;
                for (H = 0; H < s.depthmap_height; H += 1)
                    for (B = 0; B < s.depthmap_width; B += 1) j = _[H * s.depthmap_width + B], this.vertices.push(new t.Vector3(j * ((B + .5) / s.depthmap_width - .5) / D, -j * ((H + .5) / s.depthmap_height - .5) / P, -(j - 1))), o.push((B + .5) / s.depthmap_width), o.push(1 - (H + .5) / s.depthmap_height), H > 0 && B > 0 && (F = [(H - 1) * s.depthmap_width + B - 1, (H - 1) * s.depthmap_width + B, H * s.depthmap_width + B - 1, H * s.depthmap_width + B], d(n, F[0], F[2], F[1], 0), d(n, F[1], F[2], F[3], 0), y(n.faceVertexUvs[0], o[F[0] * 2], o[F[0] * 2 + 1], o[F[2] * 2], o[F[2] * 2 + 1], o[F[1] * 2], o[F[1] * 2 + 1]), y(n.faceVertexUvs[0], o[F[1] * 2], o[F[1] * 2 + 1], o[F[2] * 2], o[F[2] * 2 + 1], o[F[3] * 2], o[F[3] * 2 + 1]));
                this.computeCentroids(), this.computeFaceNormals()
            }

            function p(e, n, r, i) {
                e.vertices.push(new t.Vector3(n, r, i))
            }

            function d(e, n, r, i, s) {
                e.faces.push(new t.Face3(n, r, i, null, null, s))
            }

            function v(e, n, r, i, s, o) {
                e.faces.push(new t.Face4(n, r, i, s, null, null, o))
            }

            function m(e, n, r, i, s, o, u, a, f) {
                var l = n[u * 3],
                    c = n[u * 3 + 1],
                    h = n[u * 3 + 2],
                    p = n[a * 3],
                    d = n[a * 3 + 1],
                    v = n[a * 3 + 2],
                    m = n[f * 3],
                    g = n[f * 3 + 1],
                    y = n[f * 3 + 2];
                e.faces.push(new t.Face3(r, i, s, [new t.Vector3(l, c, h), new t.Vector3(p, d, v), new t.Vector3(m, g, y)], null, o))
            }

            function g(e, n, r, i, s, o, u, a, f, l, c) {
                var h = n[a * 3],
                    p = n[a * 3 + 1],
                    d = n[a * 3 + 2],
                    v = n[f * 3],
                    m = n[f * 3 + 1],
                    g = n[f * 3 + 2],
                    y = n[l * 3],
                    b = n[l * 3 + 1],
                    w = n[l * 3 + 2],
                    E = n[c * 3],
                    S = n[c * 3 + 1],
                    x = n[c * 3 + 2];
                e.faces.push(new t.Face4(r, i, s, o, [new t.Vector3(h, p, d), new t.Vector3(v, m, g), new t.Vector3(y, b, w), new t.Vector3(E, S, x)], null, u))
            }

            function y(e, n, r, i, s, o, u) {
                e.push([new t.Vector2(n, r), new t.Vector2(i, s), new t.Vector2(o, u)])
            }

            function b(e, n, r, i, s, o, u, a, f) {
                e.push([new t.Vector2(n, r), new t.Vector2(i, s), new t.Vector2(o, u), new t.Vector2(a, f)])
            }
            var r = this,
                i = this.$q.defer(),
                s, o, u, a, f, l, c;
            return h.prototype = Object.create(t.Geometry.prototype), o = this.extractUrlBase(n).substr(0, n.lastIndexOf("/")), u = n.split(o + "/")[1], a = new h, f = [{
                colorDiffuse: [0, 0, 0],
                colorSpecular: [0, 0, 0],
                colorAmbient: [1, 1, 1],
                opacity: 1,
                mapDiffuse: u,
                wireframe: 0
            }], c = 360 * Math.atan2(.495 * s.camera_width, s.camera_fx) / Math.PI, this.initMaterials(f, o).then(function(e) {
                r.needsTangents(e) && a.computeTangents(), i.resolve({
                    geometry: a,
                    materials: e,
                    cameraOptions: {
                        fov: c,
                        up: new t.Vector3(-1, 0, 0)
                    }
                })
            }), i.promise
        }, e.module("oe.resources.oemodels", []).provider("OeModelLoader", function() {
            this.$get = ["$q", function(e) {
                return new r(e)
            }]
        }).factory("OeModel", ["$http", "$q", "$timeout", "OeModelLoader", function(e, t, r, i) {
            var s = n.memoize(function(e) {
                var n = t.defer(),
                    i;
                return i = new Image, i.onload = function() {
                    r(function() {
                        n.resolve(i)
                    }, 0)
                }, i.crossOrigin = "Anonymous", i.src = e, n.promise
            });
            return {
                get: function(n, r) {
                    var o = t.defer(),
                        u = i,
                        a;
                    return s(r).then(function(t) {
                        e.get(n, {
                            responseType: "arraybuffer",
                            cache: !0
                        }).success(function(e, t, n) {
                            u.parseBinary(e, r).then(function(e) {
                                o.resolve(e)
                            })
                        }).error(function(e, t) {
                            o.reject("Model failed to load!")
                        })
                    }), o.promise
                }
            }
        }])
    }), define("common/resources/hashtags", ["angular", "./restangular"], function(e, t) {
        "use strict";
        return e.module("oe.resources.hashtags", ["oe.resources.restangular"]).factory("Hashtags", ["OeRestangular", function(e) {
            return e.all("hashtags")
        }])
    }), define("common/resources/categories", ["angular", "./restangular"], function(e, t) {
        "use strict";
        return e.module("oe.resources.categories", ["oe.resources.restangular"]).factory("Categories", ["OeRestangular", function(e) {
            return e.all("categories")
        }])
    }), define("common/resources/albums", ["angular", "./restangular"], function(e, t) {
        "use strict";
        return e.module("oe.resources.albums", ["oe.resources.restangular"]).factory("Albums", ["OeRestangular", function(e) {
            return e.all("albums")
        }])
    }), define("common/resources/passwords", ["angular", "./restangular"], function(e, t) {
        "use strict";
        return e.module("oe.resources.passwords", ["oe.resources.restangular"]).factory("RemindUsername", ["OeRestangular", function(e) {
            return e.one("password", "forgotten_username")
        }]).factory("ForgotPassword", ["OeRestangular", function(e) {
            return e.one("password", "forgotten")
        }]).factory("ChangePassword", ["OeRestangular", function(e) {
            return e.one("password", "change")
        }])
    }), define("common/resources/index", ["angular", "./scenes", "./users", "./oemodels", "./hashtags", "./categories", "./albums", "./passwords"], function(e) {
        "use strict";
        return e.module("oe.resources", ["oe.resources.scenes", "oe.resources.users", "oe.resources.oemodels", "oe.resources.hashtags", "oe.resources.categories", "oe.resources.albums", "oe.resources.passwords"])
    }), define("scenes/index", ["angular", "lodash", "uiRouter"], function(e, t) {
        "use strict";

        function n(e) {
            return ["/s", e.short_code, "video"].join("/")
        }
        return e.module("oe.scenes", ["ui.router", "oe.resources", "oe.resources.restangular", "oe.services.supports", "oe.filters.uri", "oe.services.constants", "oe.services.translate"]).config(["$stateProvider", "$urlRouterProvider", function(e,urlRouterProvider) {
            e.state("scene_embed", {
                url: "/viewer/?url", // "/s/:short_code/embed/",  // DiSjfC /findme1
                controller: "SceneCtrl",
                templateUrl: "app/scenes/embed.html.tpl",
                resolve: {
                    scene: ["$stateParams", function(stateParams) {
                        return {
							"model_url":"scene.oemodel",
							"poster_url":stateParams.url,
						 }
                    }],
                    translations: ["loadTranslateParts", function(e) {
                        return e("core")
                    }]
                }
            })
			urlRouterProvider.otherwise('/application_is_expected_to_be_in_root_folder_of_website_move_it_please_or_reconfigure_state_above')
        }]).controller("ScenesGridCtrl", ["$scope", "$modal", "$supports", function(e, t, r) {
            var i;
            e.displaySingleView = function(n, s) {
                var o;
                r.mobile || (n.preventDefault(), o = e.scenes.indexOf(s), o !== -1 && (e.scenes.activeSceneInGalleryIndex = o, e.scenes.activeSceneInGallery = e.scenes[o], i = t.open({
                    templateUrl: "app/scenes/gallery.html.tpl",
                    scope: e,
                    controller: "ScenesGalleryCtrl"
                }), i.result.finally(function() {
                    i = null
                })))
            }, e.getVideoEmbedUrl = n, e.$on("oeGalleryIndexChange", function(t, n) {
                e.scenes.activeSceneInGalleryIndex = n, e.scenes.activeSceneInGallery = e.scenes[n]
            }), e.$on("$destroy", function() {
                i && i.dismiss()
            })
        }]).controller("ScenesGalleryCtrl", ["$scope", "$rootScope", "Users", "$stateParams", function(e, t, n, r) {
            function i(t) {
                var i = r.username,
                    s = e.scenes[t];
                s && !s.user && n.get(i ? "@" + i : s.user_id).then(function(e) {
                    s.user = e
                })
            }
            e.$on("oeGalleryIndexChange", function(e, t) {
                i(t)
            }), i(0)
        }]).controller("SceneInGalleryCtrl", ["$scope", function(e) {
            e.$on("oeGalleryIndexChange", function(t, n) {
                e.scene === e.scenes[n] ? e.$broadcast("scene:op", {
                    render: !0
                }) : e.$broadcast("scene:op", {
                    render: !1
                })
            })
        }]).controller("SceneCtrl", ["$scope", "scene", function(e, t) {
            e.user = 'unknown_user_findme2', e.scene = t || e.scene, e.getVideoEmbedUrl = n
        }]).controller("SceneInteractionCtrl", ["$scope", "$timeout", function(e, t) {
            function s() {
                i = t(function() {
                    e.interaction.sleeping = e.isSleeping(), e.interaction.active = e.isActive(), s()
                }, 500)
            }
            var n = Math.random() * 5e3 + 5e3,
                r = 500,
                i;
            e.interaction = {
                sleeping: !1,
                active: !1
            }, e.isSleeping = function() {
                return Date.now() - e.lastInteraction > n
            }, e.isActive = function() {
                return Date.now() - e.lastInteraction < r
            }, e.$on("$destroy", function() {
                t.cancel(i)
            }), s()
        }]).controller("SceneModelCtrl", ["$scope", "$supports", "$config", "$filter", "OeModel", function(e, t, n, r, i) {
            e.scene && t.webgl && (i.get(e.scene.model_url, e.scene.poster_url).then(function(t) {
                e.model = t
            }))
        }]).controller("SceneShareCtrl", ["$scope", "$location", "$sce", function(e, t, n) {
            e.embed = {
                show: !1,
                dims: [{
                    label: "400px",
                    value: 400
                }, {
                    label: "320px",
                    value: 320
                }, {
                    label: "256px",
                    value: 256
                }],
                getUrl: function() {
                    var e, n;
                    return e = t.path(), n = "//" + t.host() + (t.port() !== 80 && t.port() !== 443 ? ":" + t.port() : "") + (e.charAt(e.length - 1) === "/" ? e : e + "/") + "embed", n
                }
            }, e.embed.selectedDim = e.embed.dims[0], e.share = {
                fbLikeIframe: n.trustAsHtml(['<iframe src="', "https://www.facebook.com/plugins/like.php?href=", encodeURIComponent(t.absUrl()), "&amp;width=45px&amp;height=27&amp;", "colorscheme=light&amp;layout=button_count&amp;", 'action=like&amp;show_faces=false&amp;send=false" ', 'scrolling="no" frameborder="0" ', 'style="border:none; overflow:hidden; width:96px;', 'height:30px;margin:0 auto;margin-top:15px" ', 'allowTransparency="true"></iframe>'].join("")),
                twIframe: n.trustAsHtml(['<iframe allowtransparency="true" frameborder="0" scrolling="no"', 'src="https://platform.twitter.com/widgets/tweet_button.html', '?text=Check out this 3D photo made with @seeneapp"', 'style="border:none; overflow:hidden; width:96px; ', 'height:30px;margin:0 auto;margin-top:15px""></iframe>'].join(""))
            }
        }])
    }), define("app-embed", ["angular", "lodash", "./app-interface", "ngAnimate", "uiRouter", "rnLazy", "ngStorage", "ngSanitize", "angularTranslate", "translateLoaderPartial", "./common/filters/index", "./common/directives/index", "./common/services/index", "./common/resources/index", "./scenes/index"], function(e, t, n) {
        "use strict";
        var r = e.module("oe.app", ["ngAnimate", "ngSanitize", "rn-lazy", "ui.router", "ngStorage", "pascalprecht.translate", "oe.filters", "oe.directives", "oe.services", "oe.scenes"]);
        return r.controller("AppCtrl", ["$scope", "$config", "$supports", "$state", "$stateParams", "$window", "matchMedia", "$localStorage", "bootstrapData", "preCacheResources", function(e, t, n, r, i, s, o, u, a, f) {
            e.$config = t, e.$supports = n, e.$state = r, e.$stateParams = i, e.$matchMedia = o, e.$storage = u, f(a.resources)
        }]), r.controller("TrackingCtrl", ["$scope", "track", "$supports", "$location", "$window", function(e, t, n, r, i) {
            var s = function() {
                t("event", "webGL", "detect", "availability", n.webgl ? 1 : 0)
            };
            e.$on("$stateChangeSuccess", function(e, n, r) {
                var s = "" + i.location.pathname + i.location.search;
                t("pageview", s, {
                    dimension1: !0
                })
            }), e.lastInteraction = Date.now(), e.trackInteraction = function(t) {
                e.lastInteraction = Date.now()
            }, s()
        }]), r.config(["$compileProvider", function(e) {
            return e.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|seene):/)
        }]), r.config(["$urlRouterProvider", "$locationProvider", "$stateProvider", function(n, r) {
            r.html5Mode(!0)/*, n.rule(function(n, r) {
                var i = r.path(),
                    s = r.search(),
                    o;
                if (i[i.length - 1] !== "/") return t.isEmpty(s) ? i + "/" : (o = [], e.forEach(s, function(e, t) {
                    o.push(t + "=" + e)
                }), i + "/?" + o.join("&"))
            })*/
        }]), r.config(["$translateProvider", function(e) {
            e.useInterpolation("$translatePolyglotInterpolation"), e.addInterpolation("$translateMessageFormatInterpolation"), e.useLoader("$translatePartialLoader", {
                urlTemplate: "/i18n/{part}?lang={lang}"
            })
        }]), n({
            app: e.module("oe.app"),
            constants: e.module("oe.services.constants")
        })
    }), require.config({
        baseUrl: "app"
    }), require(["./app-embed"]), define("OeApp", ["./app-embed"], function(e) {
        return e
    }), define("embed", function() {});
