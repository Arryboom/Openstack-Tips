! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a) {
    function s(a) {
        var b = a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) >= 0 !== c
        })
    }

    function E(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function H(a) {
        var b = G[a] = {};
        return n.each(a.match(F) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function J() {
        z.addEventListener ? (z.removeEventListener("DOMContentLoaded", K, !1), a.removeEventListener("load", K, !1)) : (z.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (z.addEventListener || "load" === event.type || "complete" === z.readyState) && (J(), n.ready())
    }

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function R(a, b, d, e) {
        if (n.acceptData(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: n.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }

    function S(a, b, c) {
        if (n.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    for (; e--;) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return
                }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }

    function bb() {
        return !0
    }

    function cb() {
        return !1
    }

    function db() {
        try {
            return z.activeElement
        } catch (a) {}
    }

    function eb(a) {
        var b = fb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length;) c.createElement(b.pop());
        return c
    }

    function vb(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== L ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== L ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, vb(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function wb(a) {
        X.test(a.type) && (a.defaultChecked = a.checked)
    }

    function xb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function yb(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function zb(a) {
        var b = qb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ab(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }

    function Bb(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Cb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (yb(b).text = a.text, zb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && X.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }

    function Fb(b, c) {
        var d = n(c.createElement(b)).appendTo(c.body),
            e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : n.css(d[0], "display");
        return d.detach(), e
    }

    function Gb(a) {
        var b = z,
            c = Eb[a];
        return c || (c = Fb(a, b), "none" !== c && c || (Db = (Db || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Db[0].contentWindow || Db[0].contentDocument).document, b.write(), b.close(), c = Fb(a, b), Db.detach()), Eb[a] = c), c
    }

    function Mb(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) return c ? (delete this.get, void 0) : (this.get = b).apply(this, arguments)
            }
        }
    }

    function Vb(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Ub.length; e--;)
            if (b = Ub[e] + c, b in a) return b;
        return d
    }

    function Wb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = n._data(d, "olddisplay", Gb(d.nodeName)))) : f[g] || (e = V(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Xb(a, b, c) {
        var d = Qb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Yb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }

    function Zb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Jb(a),
            g = l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Kb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ib.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Yb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function $b(a, b, c, d, e) {
        return new $b.prototype.init(a, b, c, d, e)
    }

    function gc() {
        return setTimeout(function() {
            _b = void 0
        }), _b = n.now()
    }

    function hc(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = U[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function ic(a, b, c) {
        for (var d, e = (fc[b] || []).concat(fc["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function jc(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && V(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = Gb(a.nodeName), "none" === j && (j = k), "inline" === j && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== k ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], bc.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            }
        if (!n.isEmptyObject(o)) {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                n(a).hide()
            }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = ic(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function kc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function lc(a, b, c) {
        var d, e, f = 0,
            g = ec.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = _b || gc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: _b || gc(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (kc(k, j.opts.specialEasing); g > f; f++)
            if (d = ec[f].call(j, a, k, j.opts)) return d;
        return n.map(k, ic, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function Mc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(F) || [];
            if (n.isFunction(c))
                for (; d = f[e++];) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Nc(a, b, c, d) {
        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        var e = {},
            f = a === Jc;
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Oc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Pc(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Qc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function Wc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || Sc.test(a) ? d(a, e) : Wc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Wc(a + "[" + e + "]", b[e], c, d)
    }

    function $c() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function _c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function ed(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = "".trim,
        l = {},
        m = "1.11.1pre",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return n.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (l.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = s(a);
            if (c) {
                if (g)
                    for (; f > e && (d = b.apply(a[e], c), d !== !1); e++);
                else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g)
                for (; f > e && (d = b.call(a[e], e, a[e]), d !== !1); e++);
            else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break; return a
        },
        trim: k && !k.call("\ufeff\xa0") ? function(a) {
            return null == a ? "" : k.call(a)
        } : function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
            if (c !== c)
                for (; void 0 !== b[d];) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = s(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || n.guid++, e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: l
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    var t = function(a) {
        function eb(a, b, d, e) {
            var f, g, i, j, k, n, q, r, v, w;
            if ((b ? b.ownerDocument || b : u) !== m && l(b), b = b || m, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (j = b.nodeType) && 9 !== j) return [];
            if (o && !e) {
                if (f = $.exec(a))
                    if (i = f[1]) {
                        if (9 === j) {
                            if (g = b.getElementById(i), !g || !g.parentNode) return d;
                            if (g.id === i) return d.push(g), d
                        } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(i)) && s(b, g) && g.id === i) return d.push(g), d
                    } else {
                        if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((i = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(i)), d
                    }
                if (c.qsa && (!p || !p.test(a))) {
                    if (r = q = t, v = b, w = 9 === j && a, 1 === j && "object" !== b.nodeName.toLowerCase()) {
                        for (n = pb(a), (q = b.getAttribute("id")) ? r = q.replace(ab, "\\$&") : b.setAttribute("id", r), r = "[id='" + r + "'] ", k = n.length; k--;) n[k] = r + qb(n[k]);
                        v = _.test(a) && nb(b.parentNode) || b, w = n.join(",")
                    }
                    if (w) try {
                        return H.apply(d, v.querySelectorAll(w)), d
                    } catch (x) {} finally {
                        q || b.removeAttribute("id")
                    }
                }
            }
            return h(a.replace(Q, "$1"), b, d, e)
        }

        function fb() {
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            var a = [];
            return b
        }

        function gb(a) {
            return a[t] = !0, a
        }

        function hb(a) {
            var b = m.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ib(a, b) {
            for (var c = a.split("|"), e = a.length; e--;) d.attrHandle[c[e]] = b
        }

        function jb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function kb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function lb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function mb(a) {
            return gb(function(b) {
                return b = +b, gb(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function nb(a) {
            return a && typeof a.getElementsByTagName !== B && a
        }

        function ob() {}

        function pb(a, b) {
            var c, e, f, g, h, i, j, k = y[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = d.preFilter; h;) {
                (!c || (e = R.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? eb.error(a) : y(a, i).slice(0)
        }

        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function rb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = w++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [v, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (i = b[t] || (b[t] = {}), (h = i[d]) && h[0] === v && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) eb(a, b[d], c);
            return c
        }

        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function vb(a, b, c, d, e, f) {
            return d && !d[t] && (d = vb(d)), e && !e[t] && (e = vb(e, f)), gb(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || tb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ub(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d)
                    for (j = ub(r, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], k = r.length; k--;)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        for (k = r.length; k--;)(l = r[k]) && (j = e ? J.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], j = g ? 1 : 0, k = rb(function(a) {
                    return a === b
                }, h, !0), l = rb(function(a) {
                    return J.call(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    return !g && (d || c !== i) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                }]; f > j; j++)
                if (c = d.relative[a[j].type]) m = [rb(sb(m), c)];
                else {
                    if (c = d.filter[a[j].type].apply(null, a[j].matches), c[t]) {
                        for (e = ++j; f > e && !d.relative[a[e].type]; e++);
                        return vb(j > 1 && sb(m), j > 1 && qb(a.slice(0, j - 1).concat({
                            value: " " === a[j - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > j && wb(a.slice(j, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                    }
                    m.push(c)
                }
            return sb(m)
        }

        function xb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, j, k) {
                    var l, n, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = i,
                        u = f || e && d.find.TAG("*", k),
                        w = v += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (i = g !== m && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            for (n = 0; o = a[n++];)
                                if (o(l, g, h)) {
                                    j.push(l);
                                    break
                                }
                            k && (v = w)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        for (n = 0; o = b[n++];) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                for (; q--;) r[q] || s[q] || (s[q] = F.call(j));
                            s = ub(s)
                        }
                        H.apply(j, s), k && !f && s.length > 0 && p + b.length > 1 && eb.uniqueSort(j)
                    }
                    return k && (v = w, i = t), r
                };
            return c ? gb(f) : f
        }
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t = "sizzle" + -new Date,
            u = a.document,
            v = 0,
            w = 0,
            x = fb(),
            y = fb(),
            z = fb(),
            A = function(a, b) {
                return a === b && (k = !0), 0
            },
            B = "undefined",
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = E.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")" + L + "*(?:([*^$|!~]?=)" + L + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + N + ")|)|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + O.replace(3, 8) + ")*)|.*)\\)|)",
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(P),
            V = new RegExp("^" + N + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            ab = /'|\\/g,
            bb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            cb = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            H.apply(E = I.call(u.childNodes), u.childNodes), E[u.childNodes.length].nodeType
        } catch (db) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        c = eb.support = {}, f = eb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, l = eb.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : u,
                g = e.defaultView;
            return e !== m && 9 === e.nodeType && e.documentElement ? (m = e, n = e.documentElement, o = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                l()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                l()
            })), c.attributes = hb(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = hb(function(a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(e.getElementsByClassName) && hb(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = hb(function(a) {
                return n.appendChild(a).id = t, !e.getElementsByName || !e.getElementsByName(t).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== B && o) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(bb, cb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(bb, cb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== B && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== B ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== B && o ? b.getElementsByClassName(a) : void 0
            }, q = [], p = [], (c.qsa = Z.test(e.querySelectorAll)) && (hb(function(a) {
                a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && p.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || p.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll(":checked").length || p.push(":checked")
            }), hb(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && p.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || p.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), p.push(",.*:")
            })), (c.matchesSelector = Z.test(r = n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector)) && hb(function(a) {
                c.disconnectedMatch = r.call(a, "div"), r.call(a, "[s!='']:x"), q.push("!=", P)
            }), p = p.length && new RegExp(p.join("|")), q = q.length && new RegExp(q.join("|")), b = Z.test(n.compareDocumentPosition), s = b || Z.test(n.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, A = b ? function(a, b) {
                if (a === b) return k = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === u && s(u, a) ? -1 : b === e || b.ownerDocument === u && s(u, b) ? 1 : j ? J.call(j, a) - J.call(j, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return k = !0, 0;
                var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    i = [b];
                if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : j ? J.call(j, a) - J.call(j, b) : 0;
                if (f === g) return jb(a, b);
                for (c = a; c = c.parentNode;) h.unshift(c);
                for (c = b; c = c.parentNode;) i.unshift(c);
                for (; h[d] === i[d];) d++;
                return d ? jb(h[d], i[d]) : h[d] === u ? -1 : i[d] === u ? 1 : 0
            }, e) : m
        }, eb.matches = function(a, b) {
            return eb(a, null, null, b)
        }, eb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== m && l(a), b = b.replace(T, "='$1']"), !(!c.matchesSelector || !o || q && q.test(b) || p && p.test(b))) try {
                var d = r.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return eb(b, m, null, [a]).length > 0
        }, eb.contains = function(a, b) {
            return (a.ownerDocument || a) !== m && l(a), s(a, b)
        }, eb.attr = function(a, b) {
            (a.ownerDocument || a) !== m && l(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !o) : void 0;
            return void 0 !== f ? f : c.attributes || !o ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, eb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, eb.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (k = !c.detectDuplicates, j = !c.sortStable && a.slice(0), a.sort(A), k) {
                for (; b = a[f++];) b === a[f] && (e = d.push(f));
                for (; e--;) a.splice(d[e], 1)
            }
            return j = null, a
        }, e = eb.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                for (; b = a[d++];) c += e(b);
            return c
        }, d = eb.selectors = {
            cacheLength: 50,
            createPseudo: gb,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(bb, cb), a[3] = (a[4] || a[5] || "").replace(bb, cb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || eb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && eb.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[5] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && U.test(c) && (b = pb(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(bb, cb).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = x[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && x(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== B && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = eb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[t] || (q[t] = {}), j = k[a] || [], n = j[0] === v && j[1], m = j[0] === v && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [v, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[t] || (b[t] = {}))[a]) && j[0] === v) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[t] || (l[t] = {}))[a] = [v, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || eb.error("unsupported pseudo: " + a);
                    return e[t] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? gb(function(a, c) {
                        for (var d, f = e(a, b), g = f.length; g--;) d = J.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: gb(function(a) {
                    var b = [],
                        c = [],
                        d = g(a.replace(Q, "$1"));
                    return d[t] ? gb(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: gb(function(a) {
                    return function(b) {
                        return eb(a, b).length > 0
                    }
                }),
                contains: gb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: gb(function(a) {
                    return V.test(a || "") || eb.error("unsupported lang: " + a), a = a.replace(bb, cb).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = o ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === n
                },
                focus: function(a) {
                    return a === m.activeElement && (!m.hasFocus || m.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: mb(function() {
                    return [0]
                }),
                last: mb(function(a, b) {
                    return [b - 1]
                }),
                eq: mb(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: mb(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: mb(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: mb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: mb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = kb(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = lb(b);
        return ob.prototype = d.filters = d.pseudos, d.setFilters = new ob, g = eb.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = z[a + " "];
            if (!f) {
                for (b || (b = pb(a)), c = b.length; c--;) f = wb(b[c]), f[t] ? d.push(f) : e.push(f);
                f = z(a, xb(e, d)), f.selector = a
            }
            return f
        }, h = eb.select = function(a, b, e, f) {
            var h, i, j, k, l, m = "function" == typeof a && a,
                n = !f && pb(a = m.selector || a);
            if (e = e || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && o && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(bb, cb), b) || [])[0], !b) return e;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length)
                }
                for (h = W.needsContext.test(a) ? 0 : i.length; h-- && (j = i[h], !d.relative[k = j.type]);)
                    if ((l = d.find[k]) && (f = l(j.matches[0].replace(bb, cb), _.test(i[0].type) && nb(b.parentNode) || b))) {
                        if (i.splice(h, 1), a = f.length && qb(i), !a) return H.apply(e, f), e;
                        break
                    }
            }
            return (m || g(a, n))(f, b, !o, e, _.test(a) && nb(b.parentNode) || b), e
        }, c.sortStable = t.split("").sort(A).join("") === t, c.detectDuplicates = !!k, l(), c.sortDetached = hb(function(a) {
            return 1 & a.compareDocumentPosition(m.createElement("div"))
        }), hb(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ib("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && hb(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ib("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), hb(function(a) {
            return null == a.getAttribute("disabled")
        }) || ib(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), eb
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = a.document,
        A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        B = n.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : A.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : z, !0)), v.test(c[1]) && n.isPlainObject(b))
                        for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = z.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return y.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = z, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    B.prototype = n.fn, y = n(z);
    var C = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.extend({
        dir: function(a, b, c) {
            for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !n(e).is(c));) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function(a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function(a) {
            return E(a, "nextSibling")
        },
        prev: function(a) {
            return E(a, "previousSibling")
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return n.sibling(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (D[a] || (e = n.unique(e)), C.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var F = /\S+/g,
        G = {};
    n.Callbacks = function(a) {
        a = "string" == typeof a ? G[a] || H(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            n.each(b, function(b, c) {
                                var d = n.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function() {
                    return h && n.each(arguments, function(a, c) {
                        for (var d;
                            (d = n.inArray(c, h, d)) > -1;) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], e = 0, this
                },
                disable: function() {
                    return h = i = c = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, c || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return k
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var i, j, k, b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                };
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--n.readyWait : !n.isReady) {
                if (!z.body) return setTimeout(n.ready);
                n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(z, [n]), n.fn.trigger && n(z).trigger("ready").off("ready"))
            }
        }
    }), n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(), "complete" === z.readyState) setTimeout(n.ready);
            else if (z.addEventListener) z.addEventListener("DOMContentLoaded", K, !1), a.addEventListener("load", K, !1);
        else {
            z.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
            var c = !1;
            try {
                c = null == a.frameElement && z.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    J(), n.ready()
                }
            }()
        }
        return I.promise(b)
    };
    var M, L = "undefined";
    for (M in n(l)) break;
    l.ownLast = "0" !== M, l.inlineBlockNeedsLayout = !1, n(function() {
            var a, b, c = z.getElementsByTagName("body")[0];
            c && (a = z.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = z.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== L && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (l.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a), a = b = null)
        }),
        function() {
            var a = z.createElement("div");
            if (null == l.deleteExpando) {
                l.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    l.deleteExpando = !1
                }
            }
            a = null
        }(), n.acceptData = function(a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;
    n.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
        },
        data: function(a, b, c) {
            return R(a, b, c)
        },
        removeData: function(a, b) {
            return S(a, b)
        },
        _data: function(a, b, c) {
            return R(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return S(a, b, !0)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                    for (c = g.length; c--;) d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d]));
                    n._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                n.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                n.data(this, a, b)
            }) : f ? P(f, a, n.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                n.removeData(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return n._data(a, c) || n._data(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    n._removeData(a, b + "queue"), n._removeData(a, c)
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        },
        W = n.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) n.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        X = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = z.createDocumentFragment(),
            b = z.createElement("div"),
            c = z.createElement("input");
        if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", l.leadingWhitespace = 3 === b.firstChild.nodeType, l.tbody = !b.getElementsByTagName("tbody").length, l.htmlSerialize = !!b.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), l.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                l.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == l.deleteExpando) {
            l.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                l.deleteExpando = !1
            }
        }
        a = b = c = null
    }(),
    function() {
        var b, c, d = z.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (l[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), l[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var Y = /^(?:input|select|textarea)$/i,
        Z = /^key/,
        $ = /^(?:mouse|contextmenu)|click/,
        _ = /^(?:focusinfocus|focusoutblur)$/,
        ab = /^([^.]*)(?:\.(.+)|)$/;
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                        return typeof n === L || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                    }, k.elem = a), b = (b || "").match(F) || [""], h = b.length; h--;) f = ab.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                for (b = (b || "").match(F) || [""], j = b.length; j--;)
                    if (h = ab.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        for (l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, m, o = [d || z],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || z, 3 !== d.nodeType && 8 !== d.nodeType && !_.test(p + n.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[n.expando] ? b : new n.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), k = n.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !n.isWindow(d)) {
                    for (i = k.delegateType || p, _.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || z) && o.push(l.defaultView || l.parentWindow || a)
                }
                for (m = 0;
                    (h = o[m++]) && !b.isPropagationStopped();) b.type = m > 1 ? i : k.bindType || p, f = (n._data(h, "events") || {})[b.type] && n._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && n.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && n.acceptData(d) && g && d[p] && !n.isWindow(d)) {
                    l = d[g], l && (d[g] = null), n.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    n.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = n.event.handlers.call(this, a, j), b = 0;
                    (f = h[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = f.elem, g = 0;
                        (e = f.handlers[g++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((n.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? n(c, this).index(i) >= 0 : n.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = $.test(e) ? this.mouseHooks : Z.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || z), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || z, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== db() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === db() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = z.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === L && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? bb : cb) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), this[n.expando] = !0, void 0) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: cb,
        isPropagationStopped: cb,
        isImmediatePropagationStopped: cb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = bb, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = bb, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = bb, this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submitBubbles || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : (n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? b.form : void 0;
                c && !n._data(c, "submitBubbles") && (n.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), n._data(c, "submitBubbles", !0))
            }), void 0)
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : (n.event.remove(this, "._submit"), void 0)
        }
    }), l.changeBubbles || (n.event.special.change = {
        setup: function() {
            return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), n.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), n.event.simulate("change", this, a, !0)
            })), !1) : (n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Y.test(b.nodeName) && !n._data(b, "changeBubbles") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a, !0)
                }), n._data(b, "changeBubbles", !0))
            }), void 0)
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"), !Y.test(this.nodeName)
        }
    }), l.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = cb;
            else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return n().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = cb), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var fb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gb = / jQuery\d+="(?:null|\d+)"/g,
        hb = new RegExp("<(?:" + fb + ")[\\s/>]", "i"),
        ib = /^\s+/,
        jb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        kb = /<([\w:]+)/,
        lb = /<tbody/i,
        mb = /<|&#?\w+;/,
        nb = /<(?:script|style|link)/i,
        ob = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pb = /^$|\/(?:java|ecma)script/i,
        qb = /^true\/(.*)/,
        rb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        sb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        tb = eb(z),
        ub = tb.appendChild(z.createElement("div"));
    sb.optgroup = sb.option, sb.tbody = sb.tfoot = sb.colgroup = sb.caption = sb.thead, sb.th = sb.td, n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !hb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ub.innerHTML = a.outerHTML, ub.removeChild(f = ub.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = vb(f), h = vb(a), g = 0; null != (e = h[g]); ++g) d[g] && Cb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || vb(a), d = d || vb(f), g = 0; null != (e = h[g]); g++) Bb(e, d[g]);
                else Bb(a, f);
            return d = vb(f, "script"), d.length > 0 && Ab(d, !i && vb(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, m = a.length, o = eb(b), p = [], q = 0; m > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === n.type(f)) n.merge(p, f.nodeType ? [f] : f);
                    else if (mb.test(f)) {
                for (h = h || o.appendChild(b.createElement("div")), i = (kb.exec(f) || ["", ""])[1].toLowerCase(), k = sb[i] || sb._default, h.innerHTML = k[1] + f.replace(jb, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                if (!l.leadingWhitespace && ib.test(f) && p.push(b.createTextNode(ib.exec(f)[0])), !l.tbody)
                    for (f = "table" !== i || lb.test(f) ? "<table>" !== k[1] || lb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) n.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                for (n.merge(p, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            for (h && o.removeChild(h), l.appendChecked || n.grep(vb(p, "input"), wb), q = 0; f = p[q++];)
                if ((!d || -1 === n.inArray(f, d)) && (g = n.contains(f.ownerDocument, f), h = vb(o.appendChild(f), "script"), g && Ab(h), c))
                    for (e = 0; f = h[e++];) pb.test(f.type || "") && c.push(f);
            return h = null, o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.deleteExpando, m = n.event.special; null != (d = a[h]); h++)
                if ((b || n.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k ? delete d[i] : typeof d.removeAttribute !== L ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), n.fn.extend({
        text: function(a) {
            return W(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(vb(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && Ab(vb(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && n.cleanData(vb(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return W(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(gb, "") : void 0;
                if (!("string" != typeof a || nb.test(a) || !l.htmlSerialize && hb.test(a) || !l.leadingWhitespace && ib.test(a) || sb[(kb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(jb, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(vb(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(vb(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                k = this.length,
                m = this,
                o = k - 1,
                p = a[0],
                q = n.isFunction(p);
            if (q || k > 1 && "string" == typeof p && !l.checkClone && ob.test(p)) return this.each(function(c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (k && (i = n.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = n.map(vb(i, "script"), yb), f = g.length; k > j; j++) d = i, j !== o && (d = n.clone(d, !0, !0), f && n.merge(g, vb(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, n.map(g, zb), j = 0; f > j; j++) d = g[j], pb.test(d.type || "") && !n._data(d, "globalEval") && n.contains(h, d) && (d.src ? n._evalUrl && n._evalUrl(d.src) : n.globalEval((d.text || d.textContent || d.innerHTML || "").replace(rb, "")));
                i = c = null
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = n(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Db, Eb = {};
    ! function() {
        var a, b, c = z.createElement("div"),
            d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], a.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(a.style.opacity), l.cssFloat = !!a.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === c.style.backgroundClip, a = c = null, l.shrinkWrapBlocks = function() {
            var a, c, e, f;
            if (null == b) {
                if (a = z.getElementsByTagName("body")[0], !a) return;
                f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = z.createElement("div"), e = z.createElement("div"), a.appendChild(c).appendChild(e), b = !1, typeof e.style.zoom !== L && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", b = 3 !== e.offsetWidth), a.removeChild(c), a = c = e = null
            }
            return b
        }
    }();
    var Jb, Kb, Hb = /^margin/,
        Ib = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Lb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Jb = function(a) {
            return a.ownerDocument.defaultView.getComputedStyle(a, null)
        }, Kb = function(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Jb(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), Ib.test(g) && Hb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
        }) : z.documentElement.currentStyle && (Jb = function(a) {
            return a.currentStyle
        }, Kb = function(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Jb(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ib.test(g) && !Lb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
        }),
        function() {
            function j() {
                var b, c, g = z.getElementsByTagName("body")[0];
                g && (b = z.createElement("div"), c = z.createElement("div"), b.style.cssText = h, g.appendChild(b).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", n.swap(g, null != g.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    d = 4 === c.offsetWidth
                }), e = !0, f = !1, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(c, null) || {}).top, e = "4px" === (a.getComputedStyle(c, null) || {
                    width: "4px"
                }).width), g.removeChild(b), c = g = null)
            }
            var b, c, d, e, f, g = z.createElement("div"),
                h = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                i = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
            g.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", b = g.getElementsByTagName("a")[0], b.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(b.style.opacity), l.cssFloat = !!b.style.cssFloat, g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === g.style.backgroundClip, b = g = null, n.extend(l, {
                reliableHiddenOffsets: function() {
                    if (null != c) return c;
                    var a, b, d, e = z.createElement("div"),
                        f = z.getElementsByTagName("body")[0];
                    if (f) return e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = z.createElement("div"), a.style.cssText = h, f.appendChild(a).appendChild(e), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = e.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", d = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", c = d && 0 === b[0].offsetHeight, f.removeChild(a), e = f = null, c
                },
                boxSizing: function() {
                    return null == d && j(), d
                },
                boxSizingReliable: function() {
                    return null == e && j(), e
                },
                pixelPosition: function() {
                    return null == f && j(), f
                },
                reliableMarginRight: function() {
                    var b, c, d, e, f = !0;
                    if (a.getComputedStyle) {
                        if (b = z.getElementsByTagName("body")[0], !b) return;
                        c = z.createElement("div"), d = z.createElement("div"), c.style.cssText = h, b.appendChild(c).appendChild(d), e = d.appendChild(z.createElement("div")), e.style.cssText = d.style.cssText = i, e.style.marginRight = e.style.width = "0", d.style.width = "1px", f = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(c)
                    }
                    return f
                }
            })
        }(), n.swap = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };
    var Nb = /alpha\([^)]*\)/i,
        Ob = /opacity\s*=\s*([^)]*)/,
        Pb = /^(none|table(?!-c[ea]).+)/,
        Qb = new RegExp("^(" + T + ")(.*)$", "i"),
        Rb = new RegExp("^([+-])=(" + T + ")", "i"),
        Sb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Tb = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Ub = ["Webkit", "O", "Moz", "ms"];
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Kb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = Vb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Rb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = "", i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Vb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Kb(a, b, d)), "normal" === f && b in Tb && (f = Tb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || n.isNumeric(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && Pb.test(n.css(a, "display")) ? n.swap(a, Sb, function() {
                    return Zb(a, b, d)
                }) : Zb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Jb(a);
                return Xb(a, c, d ? Yb(a, b, d, l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Ob.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Nb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Nb.test(f) ? f.replace(Nb, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Mb(l.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, Kb, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Hb.test(a) || (n.cssHooks[a + b].set = Xb)
    }), n.fn.extend({
        css: function(a, b) {
            return W(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Jb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Wb(this, !0)
        },
        hide: function() {
            return Wb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    }), n.Tween = $b, $b.prototype = {
        constructor: $b,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = $b.propHooks[this.prop];
            return a && a.get ? a.get(this) : $b.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = $b.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : $b.propHooks._default.set(this), this
        }
    }, $b.prototype.init.prototype = $b.prototype, $b.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, $b.propHooks.scrollTop = $b.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = $b.prototype.init, n.fx.step = {};
    var _b, ac, bc = /^(?:toggle|show|hide)$/,
        cc = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        dc = /queueHooks$/,
        ec = [jc],
        fc = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = cc.exec(b),
                    f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                    g = (n.cssNumber[a] || "px" !== f && +d) && cc.exec(n.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    n.Animation = n.extend(lc, {
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], fc[c] = fc[c] || [], fc[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? ec.unshift(a) : ec.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(V).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = lc(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && dc.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(hc(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: hc("show"),
            slideUp: hc("hide"),
            slideToggle: hc("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = n.timers,
                c = 0;
            for (_b = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), _b = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            ac || (ac = setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            clearInterval(ac), ac = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(a, b) {
            return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a, b, c, d, e = z.createElement("div");
            e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = e.getElementsByTagName("a")[0], c = z.createElement("select"), d = c.appendChild(z.createElement("option")), b = e.getElementsByTagName("input")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== e.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = d.selected, l.enctype = !!z.createElement("form").enctype, c.disabled = !0, l.optDisabled = !d.disabled, b = z.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value, a = b = c = d = e = null
        }();
    var mc = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(mc, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.text(a)
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = n.makeArray(b), g = e.length; g--;)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var nc, oc, pc = n.expr.attrHandle,
        qc = /^(?:checked|selected)$/i,
        rc = l.getSetAttribute,
        sc = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return W(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === L ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? oc : nc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : (n.removeAttr(a, b), void 0))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(F);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? sc && rc || !qc.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(rc ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), oc = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : sc && rc || !qc.test(c) ? a.setAttribute(!rc && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = pc[b] || n.find.attr;
        pc[b] = sc && rc || !qc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = pc[b], pc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, pc[b] = f), e
        } : function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), sc && rc || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? (a.defaultValue = b, void 0) : nc && nc.set(a, b, c)
        }
    }), rc || (nc = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, pc.id = pc.name = pc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: nc.set
    }, n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            nc.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var tc = /^(?:input|select|textarea|button|object)$/i,
        uc = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return W(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : tc.test(a.nodeName) || uc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var vc = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(F) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = n.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(F) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if ("string" === c)
                    for (var b, d = 0, e = n(this), f = a.match(F) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === L || "boolean" === c) && (this.className && n._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : n._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vc, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var wc = n.now(),
        xc = /\?/,
        yc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(yc, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var zc, Ac, Bc = /#.*$/,
        Cc = /([?&])_=[^&]*/,
        Dc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ec = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Fc = /^(?:GET|HEAD)$/,
        Gc = /^\/\//,
        Hc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ic = {},
        Jc = {},
        Kc = "*/".concat("*");
    try {
        Ac = location.href
    } catch (Lc) {
        Ac = z.createElement("a"), Ac.href = "", Ac = Ac.href
    }
    zc = Hc.exec(Ac.toLowerCase()) || [], n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ac,
            type: "GET",
            isLocal: Ec.test(zc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Oc(Oc(a, n.ajaxSettings), b) : Oc(n.ajaxSettings, a)
        },
        ajaxPrefilter: Mc(Ic),
        ajaxTransport: Mc(Jc),
        ajax: function(a, b) {
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Pc(k, v, c)), u = Qc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (n.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                o = n.Deferred(),
                p = n.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!j)
                                for (j = {}; b = Dc.exec(f);) j[b[1].toLowerCase()] = b[2];
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || Ac) + "").replace(Bc, "").replace(Gc, zc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(F) || [""], null == k.crossDomain && (c = Hc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === zc[1] && c[2] === zc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (zc[3] || ("http:" === zc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), Nc(Ic, k, b, v), 2 === t) return v;
            h = k.global, h && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Fc.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (xc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Cc.test(e) ? e.replace(Cc, "$1_=" + wc++) : e + (xc.test(e) ? "&" : "?") + "_=" + wc++)), k.ifModified && (n.lastModified[e] && v.setRequestHeader("If-Modified-Since", n.lastModified[e]), n.etag[e] && v.setRequestHeader("If-None-Match", n.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Kc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[d](k[d]);
            if (i = Nc(Jc, k, b, v)) {
                v.readyState = 1, h && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !l.reliableHiddenOffsets() && "none" === (a.style && a.style.display || n.css(a, "display"))
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var Rc = /%20/g,
        Sc = /\[\]$/,
        Tc = /\r?\n/g,
        Uc = /^(?:submit|button|image|reset|file)$/i,
        Vc = /^(?:input|select|textarea|keygen)/i;
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Wc(c, a[c], b, e);
        return d.join("&").replace(Rc, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Vc.test(this.nodeName) && !Uc.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Tc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Tc, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $c() || _c()
    } : $c;
    var Xc = 0,
        Yc = {},
        Zc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on("unload", function() {
        for (var a in Yc) Yc[a](void 0, !0)
    }), l.cors = !!Zc && "withCredentials" in Zc, Zc = l.ajax = !!Zc, Zc && n.ajaxTransport(function(a) {
        if (!a.crossDomain || l.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Xc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Yc[g], b = void 0, f.onreadystatechange = n.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Yc[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = z.head || n("head")[0] || z.documentElement;
            return {
                send: function(d, e) {
                    b = z.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var ad = [],
        bd = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = ad.pop() || n.expando + "_" + wc++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (bd.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bd.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bd, "$1" + e) : b.jsonp !== !1 && (b.url += (xc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ad.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || z;
        var d = v.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var cd = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && cd) return cd.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = a.slice(h, a.length), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };
    var dd = a.document.documentElement;
    return n.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = n.css(a, "position"),
                    l = n(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, n.fn.extend({
            offset: function(a) {
                if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                });
                var b, c, d = {
                        top: 0,
                        left: 0
                    },
                    e = this[0],
                    f = e && e.ownerDocument;
                if (f) return b = f.documentElement, n.contains(b, e) ? (typeof e.getBoundingClientRect !== L && (d = e.getBoundingClientRect()), c = ed(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = {
                            top: 0,
                            left: 0
                        },
                        d = this[0];
                    return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - c.top - n.css(d, "marginTop", !0),
                        left: b.left - c.left - n.css(d, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || dd; a && !n.nodeName(a, "html") && "static" === n.css(a, "position");) a = a.offsetParent;
                    return a || dd
                })
            }
        }), n.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, b) {
            var c = /Y/.test(b);
            n.fn[a] = function(d) {
                return W(this, function(a, d, e) {
                    var f = ed(a);
                    return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : (f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e, void 0)
                }, a, d, arguments.length, null)
            }
        }), n.each(["top", "left"], function(a, b) {
            n.cssHooks[b] = Mb(l.pixelPosition, function(a, c) {
                return c ? (c = Kb(a, b), Ib.test(c) ? n(a).position()[b] + "px" : c) : void 0
            })
        }), n.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            n.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                n.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return W(this, function(b, c, d) {
                        var e;
                        return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), n.fn.size = function() {
            return this.length
        }, n.fn.andSelf = n.fn.addBack,
        function() {
            var a, b;
            n.uaMatch = function(a) {
                a = a.toLowerCase();
                var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            }, a = n.uaMatch(navigator.userAgent), b = {}, a.browser && (b[a.browser] = !0, b.version = a.version), b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0), n.browser = b
        }(), n.version = "3.1", n.long_version = "3.1.17", n.uid = function(a, b) {
            return (a ? a : "") + Math.random().toString().replace(".", "") + (b ? b : "")
        }, n.globalNamespace = n.uid("Foundry"), a[n.globalNamespace] = n, n.run = function(a) {
            return n.isFunction(a) ? a(n) : null
        }, n.initialize = function(b) {
            n.initialized || (n.extend(n, b), "development" == n.environment && (a.F = n), n.initialized = !0, FD31.module.execute())
        }, FD31.jquery(n), "function" == typeof define && define.amd && define("jquery", [], function() {
            return n
        }), n
}), FD31.plugin("lodash", function(a) {
    function N(a, b, c) {
        for (var d = (c || 0) - 1, e = a.length; ++d < e;)
            if (a[d] === b) return d;
        return -1
    }

    function O(a, b) {
        var c = typeof b;
        if (a = a.cache, "boolean" == c || null == b) return a[b];
        "number" != c && "string" != c && (c = "object");
        var d = "number" == c ? b : g + b;
        return a = a[c] || (a[c] = {}), "object" == c ? a[d] && N(a[d], b) > -1 ? 0 : -1 : a[d] ? 0 : -1
    }

    function P(a) {
        var b = this.cache,
            c = typeof a;
        if ("boolean" == c || null == a) b[a] = !0;
        else {
            "number" != c && "string" != c && (c = "object");
            var d = "number" == c ? a : g + a,
                e = b[c] || (b[c] = {});
            "object" == c ? (e[d] || (e[d] = [])).push(a) == this.array.length && (b[c] = !1) : e[d] = !0
        }
    }

    function Q(a) {
        return a.charCodeAt(0)
    }

    function R(a, b) {
        var c = a.index,
            d = b.index;
        if (a = a.criteria, b = b.criteria, a !== b) {
            if (a > b || "undefined" == typeof a) return 1;
            if (b > a || "undefined" == typeof b) return -1
        }
        return d > c ? -1 : 1
    }

    function S(a) {
        var b = -1,
            c = a.length,
            d = V();
        d["false"] = d["null"] = d["true"] = d.undefined = !1;
        var e = V();
        for (e.array = a, e.cache = d, e.push = P; ++b < c;) e.push(a[b]);
        return d.object === !1 ? (Y(e), null) : e
    }

    function T(a) {
        return "\\" + J[a]
    }

    function U() {
        return c.pop() || []
    }

    function V() {
        return d.pop() || {
            array: null,
            cache: null,
            criteria: null,
            "false": !1,
            index: 0,
            leading: !1,
            maxWait: 0,
            "null": !1,
            number: null,
            object: null,
            push: null,
            string: null,
            trailing: !1,
            "true": !1,
            undefined: !1,
            value: null
        }
    }

    function X(a) {
        a.length = 0, c.length < i && c.push(a)
    }

    function Y(a) {
        var b = a.cache;
        b && Y(b), a.array = a.cache = a.criteria = a.object = a.number = a.string = a.value = null, d.length < i && d.push(a)
    }

    function Z(a, b, c) {
        b || (b = 0), "undefined" == typeof c && (c = a ? a.length : 0);
        for (var d = -1, e = c - b || 0, f = Array(0 > e ? 0 : e); ++d < e;) f[d] = a[b + d];
        return f
    }

    function $(a) {
        function Fb(a) {
            return a && "object" == typeof a && !Qb(a) && mb.call(a, "__wrapped__") ? a : new Gb(a)
        }

        function Gb(a) {
            this.__wrapped__ = a
        }

        function Ib(a, b, c, d) {
            function i() {
                var d = arguments,
                    j = f ? this : b;
                if (e || (a = b[g]), c.length && (d = d.length ? (d = Bb.call(d), h ? d.concat(c) : c.concat(d)) : c), this instanceof i) {
                    j = Jb(a.prototype);
                    var k = a.apply(j, d);
                    return kc(k) ? k : j
                }
                return a.apply(j, d)
            }
            var e = jc(a),
                f = !c,
                g = b;
            if (f) {
                var h = d;
                c = b
            } else if (!e) {
                if (!d) throw new bb;
                b = a
            }
            return i
        }

        function Jb(a) {
            return kc(a) ? sb(a) : {}
        }

        function Kb(a) {
            return Tb[a]
        }

        function Lb() {
            var d = (d = Fb.indexOf) === Zc ? N : d;
            return d
        }

        function Mb(a) {
            return function(c, d, e, f) {
                return "boolean" != typeof d && null != d && (f = e, e = f && f[d] === c ? b : d, d = !1), null != e && (e = Fb.createCallback(e, f)), a(c, d, e, f)
            }
        }

        function Nb(a) {
            var c, d;
            return a && qb.call(a) == E && (c = a.constructor, !jc(c) || c instanceof c) ? ($b(a, function(a, b) {
                d = b
            }), d === b || mb.call(a, d)) : !1
        }

        function Ob(a) {
            return Ub[a]
        }

        function Pb(a) {
            return qb.call(a) == y
        }

        function Wb(a, c, d, e, f, g) {
            var h = a;
            if ("boolean" != typeof c && null != c && (e = d, d = c, c = !1), "function" == typeof d) {
                if (d = "undefined" == typeof e ? d : Fb.createCallback(d, e, 1), h = d(h), "undefined" != typeof h) return h;
                h = a
            }
            var i = kc(h);
            if (i) {
                var j = qb.call(h);
                if (!H[j]) return h;
                var k = Qb(h)
            }
            if (!i || !c) return i ? k ? Z(h) : Vb({}, h) : h;
            var l = Eb[j];
            switch (j) {
                case A:
                case B:
                    return new l(+h);
                case D:
                case G:
                    return new l(h);
                case F:
                    return l(h.source, o.exec(h))
            }
            var m = !f;
            f || (f = U()), g || (g = U());
            for (var n = f.length; n--;)
                if (f[n] == a) return g[n];
            return h = k ? l(h.length) : {}, k && (mb.call(a, "index") && (h.index = a.index), mb.call(a, "input") && (h.input = a.input)), f.push(a), g.push(h), (k ? Ec : _b)(a, function(a, e) {
                h[e] = Wb(a, c, d, b, f, g)
            }), m && (X(f), X(g)), h
        }

        function Xb(a, b, c) {
            return Wb(a, !0, b, c)
        }

        function Zb(a, b, c) {
            var d;
            return b = Fb.createCallback(b, c), _b(a, function(a, c, e) {
                return b(a, c, e) ? (d = c, !1) : void 0
            }), d
        }

        function ac(a) {
            var b = [];
            return $b(a, function(a, c) {
                jc(a) && b.push(c)
            }), b.sort()
        }

        function bc(a, b) {
            return a ? mb.call(a, b) : !1
        }

        function cc(a) {
            for (var b = -1, c = Sb(a), d = c.length, e = {}; ++b < d;) {
                var f = c[b];
                e[a[f]] = f
            }
            return e
        }

        function dc(a) {
            return a === !0 || a === !1 || qb.call(a) == A
        }

        function ec(a) {
            return a ? "object" == typeof a && qb.call(a) == B : !1
        }

        function fc(a) {
            return a ? 1 === a.nodeType : !1
        }

        function gc(a) {
            var b = !0;
            if (!a) return b;
            var c = qb.call(a),
                d = a.length;
            return c == z || c == G || c == y || c == E && "number" == typeof d && jc(a.splice) ? !d : (_b(a, function() {
                return b = !1
            }), b)
        }

        function hc(a, b, c, d, e, g) {
            var h = c === f;
            if ("function" == typeof c && !h) {
                c = Fb.createCallback(c, d, 2);
                var i = c(a, b);
                if ("undefined" != typeof i) return !!i
            }
            if (a === b) return 0 !== a || 1 / a == 1 / b;
            var j = typeof a,
                k = typeof b;
            if (a === a && (!a || "function" != j && "object" != j) && (!b || "function" != k && "object" != k)) return !1;
            if (null == a || null == b) return a === b;
            var l = qb.call(a),
                m = qb.call(b);
            if (l == y && (l = E), m == y && (m = E), l != m) return !1;
            switch (l) {
                case A:
                case B:
                    return +a == +b;
                case D:
                    return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
                case F:
                case G:
                    return a == ab(b)
            }
            var n = l == z;
            if (!n) {
                if (mb.call(a, "__wrapped__ ") || mb.call(b, "__wrapped__")) return hc(a.__wrapped__ || a, b.__wrapped__ || b, c, d, e, g);
                if (l != E) return !1;
                var o = a.constructor,
                    p = b.constructor;
                if (o != p && !(jc(o) && o instanceof o && jc(p) && p instanceof p)) return !1
            }
            var q = !e;
            e || (e = U()), g || (g = U());
            for (var r = e.length; r--;)
                if (e[r] == a) return g[r] == b;
            var s = 0;
            if (i = !0, e.push(a), g.push(b), n) {
                if (r = a.length, s = b.length, i = s == a.length, !i && !h) return i;
                for (; s--;) {
                    var t = r,
                        u = b[s];
                    if (h)
                        for (; t-- && !(i = hc(a[t], u, c, d, e, g)););
                    else if (!(i = hc(a[s], u, c, d, e, g))) break
                }
                return i
            }
            return $b(b, function(b, f, h) {
                return mb.call(h, f) ? (s++, i = mb.call(a, f) && hc(a[f], b, c, d, e, g)) : void 0
            }), i && !h && $b(a, function(a, b, c) {
                return mb.call(c, b) ? i = --s > -1 : void 0
            }), q && (X(e), X(g)), i
        }

        function ic(a) {
            return ub(a) && !vb(parseFloat(a))
        }

        function jc(a) {
            return "function" == typeof a
        }

        function kc(a) {
            return !(!a || !I[typeof a])
        }

        function lc(a) {
            return nc(a) && a != +a
        }

        function mc(a) {
            return null === a
        }

        function nc(a) {
            return "number" == typeof a || qb.call(a) == D
        }

        function pc(a) {
            return a ? "object" == typeof a && qb.call(a) == F : !1
        }

        function qc(a) {
            return "string" == typeof a || qb.call(a) == G
        }

        function rc(a) {
            return "undefined" == typeof a
        }

        function sc(a, b, c) {
            var d = arguments,
                e = 0,
                g = 2;
            if (!kc(a)) return a;
            if (c === f) var h = d[3],
                i = d[4],
                j = d[5];
            else {
                var k = !0;
                i = U(), j = U(), "number" != typeof c && (g = d.length), g > 3 && "function" == typeof d[g - 2] ? h = Fb.createCallback(d[--g - 1], d[g--], 2) : g > 2 && "function" == typeof d[g - 1] && (h = d[--g])
            }
            for (; ++e < g;)(Qb(d[e]) ? Ec : _b)(d[e], function(b, c) {
                var d, e, g = b,
                    k = a[c];
                if (b && ((e = Qb(b)) || oc(b))) {
                    for (var l = i.length; l--;)
                        if (d = i[l] == b) {
                            k = j[l];
                            break
                        }
                    if (!d) {
                        var m;
                        h && (g = h(k, b), (m = "undefined" != typeof g) && (k = g)), m || (k = e ? Qb(k) ? k : [] : oc(k) ? k : {}), i.push(b), j.push(k), m || (k = sc(k, b, f, h, i, j))
                    }
                } else h && (g = h(k, b), "undefined" == typeof g && (g = b)), "undefined" != typeof g && (k = g);
                a[c] = k
            });
            return k && (X(i), X(j)), a
        }

        function tc(a, b, c) {
            var d = Lb(),
                e = "function" == typeof b,
                f = {};
            if (e) b = Fb.createCallback(b, c);
            else var g = ib.apply(cb, Bb.call(arguments, 1));
            return $b(a, function(a, c, h) {
                (e ? !b(a, c, h) : d(g, c) < 0) && (f[c] = a)
            }), f
        }

        function uc(a) {
            for (var b = -1, d = Sb(a), e = d.length, f = c(e); ++b < e;) {
                var g = d[b];
                f[b] = [g, a[g]]
            }
            return f
        }

        function vc(a, b, c) {
            var d = {};
            if ("function" != typeof b)
                for (var e = -1, f = ib.apply(cb, Bb.call(arguments, 1)), g = kc(a) ? f.length : 0; ++e < g;) {
                    var h = f[e];
                    h in a && (d[h] = a[h])
                } else b = Fb.createCallback(b, c), $b(a, function(a, c, e) {
                    b(a, c, e) && (d[c] = a)
                });
            return d
        }

        function wc(a, b, c, d) {
            var e = Qb(a);
            if (b = Fb.createCallback(b, d, 4), null == c)
                if (e) c = [];
                else {
                    var f = a && a.constructor,
                        g = f && f.prototype;
                    c = Jb(g)
                }
            return (e ? Ec : _b)(a, function(a, d, e) {
                return b(c, a, d, e)
            }), c
        }

        function xc(a) {
            for (var b = -1, d = Sb(a), e = d.length, f = c(e); ++b < e;) f[b] = a[d[b]];
            return f
        }

        function yc(a) {
            for (var b = -1, d = ib.apply(cb, Bb.call(arguments, 1)), e = d.length, f = c(e); ++b < e;) f[b] = a[d[b]];
            return f
        }

        function zc(a, b, c) {
            var d = -1,
                e = Lb(),
                f = a ? a.length : 0,
                g = !1;
            return c = (0 > c ? xb(0, f + c) : c) || 0, f && "number" == typeof f ? g = (qc(a) ? a.indexOf(b, c) : e(a, b, c)) > -1 : _b(a, function(a) {
                return ++d >= c ? !(g = a === b) : void 0
            }), g
        }

        function Ac(a, b, c) {
            var d = {};
            return b = Fb.createCallback(b, c), Ec(a, function(a, c, e) {
                c = ab(b(a, c, e)), mb.call(d, c) ? d[c]++ : d[c] = 1
            }), d
        }

        function Bc(a, b, c) {
            var d = !0;
            b = Fb.createCallback(b, c);
            var e = -1,
                f = a ? a.length : 0;
            if ("number" == typeof f)
                for (; ++e < f && (d = !!b(a[e], e, a)););
            else _b(a, function(a, c, e) {
                return d = !!b(a, c, e)
            });
            return d
        }

        function Cc(a, b, c) {
            var d = [];
            b = Fb.createCallback(b, c);
            var e = -1,
                f = a ? a.length : 0;
            if ("number" == typeof f)
                for (; ++e < f;) {
                    var g = a[e];
                    b(g, e, a) && d.push(g)
                } else _b(a, function(a, c, e) {
                    b(a, c, e) && d.push(a)
                });
            return d
        }

        function Dc(a, b, c) {
            b = Fb.createCallback(b, c);
            var d = -1,
                e = a ? a.length : 0;
            if ("number" != typeof e) {
                var g;
                return _b(a, function(a, c, d) {
                    return b(a, c, d) ? (g = a, !1) : void 0
                }), g
            }
            for (; ++d < e;) {
                var f = a[d];
                if (b(f, d, a)) return f
            }
        }

        function Ec(a, b, c) {
            var d = -1,
                e = a ? a.length : 0;
            if (b = b && "undefined" == typeof c ? b : Fb.createCallback(b, c), "number" == typeof e)
                for (; ++d < e && b(a[d], d, a) !== !1;);
            else _b(a, b);
            return a
        }

        function Fc(a, b, c) {
            var d = {};
            return b = Fb.createCallback(b, c), Ec(a, function(a, c, e) {
                c = ab(b(a, c, e)), (mb.call(d, c) ? d[c] : d[c] = []).push(a)
            }), d
        }

        function Gc(a, b) {
            var d = Bb.call(arguments, 2),
                e = -1,
                f = "function" == typeof b,
                g = a ? a.length : 0,
                h = c("number" == typeof g ? g : 0);
            return Ec(a, function(a) {
                h[++e] = (f ? b : a[b]).apply(a, d)
            }), h
        }

        function Hc(a, b, d) {
            var e = -1,
                f = a ? a.length : 0;
            if (b = Fb.createCallback(b, d), "number" == typeof f)
                for (var g = c(f); ++e < f;) g[e] = b(a[e], e, a);
            else g = [], _b(a, function(a, c, d) {
                g[++e] = b(a, c, d)
            });
            return g
        }

        function Ic(a, b, c) {
            var d = -1 / 0,
                e = d;
            if (!b && Qb(a))
                for (var f = -1, g = a.length; ++f < g;) {
                    var h = a[f];
                    h > e && (e = h)
                } else b = !b && qc(a) ? Q : Fb.createCallback(b, c), Ec(a, function(a, c, f) {
                    var g = b(a, c, f);
                    g > d && (d = g, e = a)
                });
            return e
        }

        function Jc(a, b, c) {
            var d = 1 / 0,
                e = d;
            if (!b && Qb(a))
                for (var f = -1, g = a.length; ++f < g;) {
                    var h = a[f];
                    e > h && (e = h)
                } else b = !b && qc(a) ? Q : Fb.createCallback(b, c), Ec(a, function(a, c, f) {
                    var g = b(a, c, f);
                    d > g && (d = g, e = a)
                });
            return e
        }

        function Kc(a, b) {
            var d = -1,
                e = a ? a.length : 0;
            if ("number" == typeof e)
                for (var f = c(e); ++d < e;) f[d] = a[d][b];
            return f || Hc(a, b)
        }

        function Lc(a, b, c, d) {
            if (!a) return c;
            var e = arguments.length < 3;
            b = Fb.createCallback(b, d, 4);
            var f = -1,
                g = a.length;
            if ("number" == typeof g)
                for (e && (c = a[++f]); ++f < g;) c = b(c, a[f], f, a);
            else _b(a, function(a, d, f) {
                c = e ? (e = !1, a) : b(c, a, d, f)
            });
            return c
        }

        function Mc(a, b, c, d) {
            var e = a,
                f = a ? a.length : 0,
                g = arguments.length < 3;
            if ("number" != typeof f) {
                var h = Sb(a);
                f = h.length
            }
            return b = Fb.createCallback(b, d, 4), Ec(a, function(a, d, i) {
                d = h ? h[--f] : --f, c = g ? (g = !1, e[d]) : b(c, e[d], d, i)
            }), c
        }

        function Nc(a, b, c) {
            return b = Fb.createCallback(b, c), Cc(a, function(a, c, d) {
                return !b(a, c, d)
            })
        }

        function Oc(a) {
            var b = -1,
                d = a ? a.length : 0,
                e = c("number" == typeof d ? d : 0);
            return Ec(a, function(a) {
                var c = jb(Ab() * (++b + 1));
                e[b] = e[c], e[c] = a
            }), e
        }

        function Pc(a) {
            var b = a ? a.length : 0;
            return "number" == typeof b ? b : Sb(a).length
        }

        function Qc(a, b, c) {
            var d;
            b = Fb.createCallback(b, c);
            var e = -1,
                f = a ? a.length : 0;
            if ("number" == typeof f)
                for (; ++e < f && !(d = b(a[e], e, a)););
            else _b(a, function(a, c, e) {
                return !(d = b(a, c, e))
            });
            return !!d
        }

        function Rc(a, b, d) {
            var e = -1,
                f = a ? a.length : 0,
                g = c("number" == typeof f ? f : 0);
            for (b = Fb.createCallback(b, d), Ec(a, function(a, c, d) {
                    var f = g[++e] = V();
                    f.criteria = b(a, c, d), f.index = e, f.value = a
                }), f = g.length, g.sort(R); f--;) {
                var h = g[f];
                g[f] = h.value, Y(h)
            }
            return g
        }

        function Sc(a) {
            return a && "number" == typeof a.length ? Z(a) : xc(a)
        }

        function Uc(a) {
            for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
                var e = a[b];
                e && d.push(e)
            }
            return d
        }

        function Vc(a) {
            var b = -1,
                c = Lb(),
                d = a ? a.length : 0,
                e = ib.apply(cb, Bb.call(arguments, 1)),
                f = [],
                g = d >= h && c === N;
            if (g) {
                var i = S(e);
                i ? (c = O, e = i) : g = !1
            }
            for (; ++b < d;) {
                var j = a[b];
                c(e, j) < 0 && f.push(j)
            }
            return g && Y(e), f
        }

        function Wc(a, b, c) {
            var d = -1,
                e = a ? a.length : 0;
            for (b = Fb.createCallback(b, c); ++d < e;)
                if (b(a[d], d, a)) return d;
            return -1
        }

        function Xc(a, b, c) {
            if (a) {
                var d = 0,
                    e = a.length;
                if ("number" != typeof b && null != b) {
                    var f = -1;
                    for (b = Fb.createCallback(b, c); ++f < e && b(a[f], f, a);) d++
                } else if (d = b, null == d || c) return a[0];
                return Z(a, 0, yb(xb(0, d), e))
            }
        }

        function Zc(a, b, c) {
            if ("number" == typeof c) {
                var d = a ? a.length : 0;
                c = 0 > c ? xb(0, d + c) : c || 0
            } else if (c) {
                var e = ed(a, b);
                return a[e] === b ? e : -1
            }
            return a ? N(a, b, c) : -1
        }

        function $c(a, b, c) {
            if (!a) return [];
            var d = 0,
                e = a.length;
            if ("number" != typeof b && null != b) {
                var f = e;
                for (b = Fb.createCallback(b, c); f-- && b(a[f], f, a);) d++
            } else d = null == b || c ? 1 : b || d;
            return Z(a, 0, yb(xb(0, e - d), e))
        }

        function _c(a) {
            for (var b = arguments, c = b.length, d = -1, e = U(), f = -1, g = Lb(), i = a ? a.length : 0, j = [], k = U(); ++d < c;) {
                var l = b[d];
                e[d] = g === N && (l ? l.length : 0) >= h && S(d ? b[d] : k)
            }
            a: for (; ++f < i;) {
                var m = e[0];
                if (l = a[f], (m ? O(m, l) : g(k, l)) < 0) {
                    for (d = c, (m || k).push(l); --d;)
                        if (m = e[d], (m ? O(m, l) : g(b[d], l)) < 0) continue a;
                    j.push(l)
                }
            }
            for (; c--;) m = e[c], m && Y(m);
            return X(e), X(k), j
        }

        function ad(a, b, c) {
            if (a) {
                var d = 0,
                    e = a.length;
                if ("number" != typeof b && null != b) {
                    var f = e;
                    for (b = Fb.createCallback(b, c); f-- && b(a[f], f, a);) d++
                } else if (d = b, null == d || c) return a[e - 1];
                return Z(a, xb(0, e - d))
            }
        }

        function bd(a, b, c) {
            var d = a ? a.length : 0;
            for ("number" == typeof c && (d = (0 > c ? xb(0, d + c) : yb(c, d - 1)) + 1); d--;)
                if (a[d] === b) return d;
            return -1
        }

        function cd(a, b, d) {
            a = +a || 0, d = +d || 1, null == b && (b = a, a = 0);
            for (var e = -1, f = xb(0, gb((b - a) / d)), g = c(f); ++e < f;) g[e] = a, a += d;
            return g
        }

        function dd(a, b, c) {
            if ("number" != typeof b && null != b) {
                var d = 0,
                    e = -1,
                    f = a ? a.length : 0;
                for (b = Fb.createCallback(b, c); ++e < f && b(a[e], e, a);) d++
            } else d = null == b || c ? 1 : xb(0, b);
            return Z(a, d)
        }

        function ed(a, b, c, d) {
            var e = 0,
                f = a ? a.length : e;
            for (c = c ? Fb.createCallback(c, d, 1) : Bd, b = c(b); f > e;) {
                var g = e + f >>> 1;
                c(a[g]) < b ? e = g + 1 : f = g
            }
            return e
        }

        function fd(a) {
            return Qb(a) || (arguments[0] = a ? Bb.call(a) : cb), gd(ib.apply(cb, arguments))
        }

        function hd(a) {
            for (var b = -1, d = a ? Ic(Kc(a, "length")) : 0, e = c(0 > d ? 0 : d); ++b < d;) e[b] = Kc(a, b);
            return e
        }

        function id(a) {
            return Vc(a, Bb.call(arguments, 1))
        }

        function jd(a) {
            return a ? hd(arguments) : []
        }

        function kd(a, b) {
            for (var c = -1, d = a ? a.length : 0, e = {}; ++c < d;) {
                var f = a[c];
                b ? e[f] = b[c] : e[f[0]] = f[1]
            }
            return e
        }

        function ld(a, b) {
            return 1 > a ? b() : function() {
                return --a < 1 ? b.apply(this, arguments) : void 0
            }
        }

        function md(a, b) {
            return Hb.fastBind || rb && arguments.length > 2 ? rb.call.apply(rb, arguments) : Ib(a, b, Bb.call(arguments, 2))
        }

        function nd(a) {
            for (var b = arguments.length > 1 ? ib.apply(cb, Bb.call(arguments, 1)) : ac(a), c = -1, d = b.length; ++c < d;) {
                var e = b[c];
                a[e] = md(a[e], a)
            }
            return a
        }

        function od(a, b) {
            return Ib(a, b, Bb.call(arguments, 2), f)
        }

        function pd() {
            var a = arguments;
            return function() {
                for (var b = arguments, c = a.length; c--;) b = [a[c].apply(this, b)];
                return b[0]
            }
        }

        function qd(a, b, c) {
            if (null == a) return Bd;
            var d = typeof a;
            if ("function" != d) {
                if ("object" != d) return function(b) {
                    return b[a]
                };
                var e = Sb(a);
                return function(b) {
                    for (var c = e.length, d = !1; c-- && (d = hc(b[e[c]], a[e[c]], f)););
                    return d
                }
            }
            return "undefined" == typeof b || q && !q.test(kb.call(a)) ? a : 1 === c ? function(c) {
                return a.call(b, c)
            } : 2 === c ? function(c, d) {
                return a.call(b, c, d)
            } : 4 === c ? function(c, d, e, f) {
                return a.call(b, c, d, e, f)
            } : function(c, d, e) {
                return a.call(b, c, d, e)
            }
        }

        function rd(a, b, c) {
            function n() {
                hb(k), hb(l), g = 0, k = l = null
            }

            function o() {
                var b = m && (!q || g > 1);
                n(), b && (j !== !1 && (h = new i), e = a.apply(f, d))
            }

            function p() {
                n(), (m || j !== b) && (h = new i, e = a.apply(f, d))
            }
            var d, e, f, g = 0,
                h = 0,
                j = !1,
                k = null,
                l = null,
                m = !0;
            if (b = xb(0, b || 0), c === !0) {
                var q = !0;
                m = !1
            } else kc(c) && (q = c.leading, j = "maxWait" in c && xb(b, c.maxWait || 0), m = "trailing" in c ? c.trailing : m);
            return function() {
                if (d = arguments, f = this, g++, hb(l), j === !1) q && 2 > g && (e = a.apply(f, d));
                else {
                    var c = new i;
                    k || q || (h = c);
                    var m = j - (c - h);
                    0 >= m ? (hb(k), k = null, h = c, e = a.apply(f, d)) : k || (k = pb(p, m))
                }
                return b !== j && (l = pb(o, b)), e
            }
        }

        function sd(a) {
            var c = Bb.call(arguments, 1);
            return pb(function() {
                a.apply(b, c)
            }, 1)
        }

        function td(a, c) {
            var d = Bb.call(arguments, 2);
            return pb(function() {
                a.apply(b, d)
            }, c)
        }

        function ud(a, b) {
            function c() {
                var d = c.cache,
                    e = g + (b ? b.apply(this, arguments) : arguments[0]);
                return mb.call(d, e) ? d[e] : d[e] = a.apply(this, arguments)
            }
            return c.cache = {}, c
        }

        function vd(a) {
            var b, c;
            return function() {
                return b ? c : (b = !0, c = a.apply(this, arguments), a = null, c)
            }
        }

        function wd(a) {
            return Ib(a, Bb.call(arguments, 1))
        }

        function xd(a) {
            return Ib(a, Bb.call(arguments, 1), null, f)
        }

        function yd(a, b, c) {
            var d = !0,
                e = !0;
            c === !1 ? d = !1 : kc(c) && (d = "leading" in c ? c.leading : d, e = "trailing" in c ? c.trailing : e), c = V(), c.leading = d, c.maxWait = b, c.trailing = e;
            var f = rd(a, b, c);
            return Y(c), f
        }

        function zd(a, b) {
            return function() {
                var c = [a];
                return nb.apply(c, arguments), b.apply(this, c)
            }
        }

        function Ad(a) {
            return null == a ? "" : ab(a).replace(u, Kb)
        }

        function Bd(a) {
            return a
        }

        function Cd(a) {
            Ec(ac(a), function(b) {
                var c = Fb[b] = a[b];
                Fb.prototype[b] = function() {
                    var a = this.__wrapped__,
                        b = [a];
                    nb.apply(b, arguments);
                    var d = c.apply(Fb, b);
                    return a && "object" == typeof a && a === d ? this : new Gb(d)
                }
            })
        }

        function Dd() {
            return a._ = eb, this
        }

        function Fd(a, b) {
            null == a && null == b && (b = 1), a = +a || 0, null == b ? (b = a, a = 0) : b = +b || 0;
            var c = Ab();
            return a % 1 || b % 1 ? a + yb(c * (b - a + parseFloat("1e-" + ((c + "").length - 1))), b) : a + jb(c * (b - a + 1))
        }

        function Gd(a, c) {
            var d = a ? a[c] : b;
            return jc(d) ? a[c]() : d
        }

        function Hd(a, c, d) {
            var e = Fb.templateSettings;
            a || (a = ""), d = Yb({}, d, e);
            var i, f = Yb({}, d.imports, e.imports),
                g = Sb(f),
                h = xc(f),
                m = 0,
                o = d.interpolate || t,
                q = "__p += '",
                r = W((d.escape || t).source + "|" + o.source + "|" + (o === p ? n : t).source + "|" + (d.evaluate || t).source + "|$", "g");
            a.replace(r, function(b, c, d, e, f, g) {
                return d || (d = e), q += a.slice(m, g).replace(v, T), c && (q += "' +\n__e(" + c + ") +\n'"), f && (i = !0, q += "';\n" + f + ";\n__p += '"), d && (q += "' +\n((__t = (" + d + ")) == null ? '' : __t) +\n'"), m = g + b.length, b
            }), q += "';\n";
            var s = d.variable,
                u = s;
            u || (s = "obj", q = "with (" + s + ") {\n" + q + "\n}\n"), q = (i ? q.replace(j, "") : q).replace(k, "$1").replace(l, "$1;"), q = "function(" + s + ") {\n" + (u ? "" : s + " || (" + s + " = {});\n") + "var __t, __p = '', __e = _.escape" + (i ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + q + "return __p\n}";
            var w = "\n/*\n//@ sourceURL=" + (d.sourceURL || "/lodash/template/source[" + x++ + "]") + "\n*/";
            try {
                var y = J(g, "return " + q + w).apply(b, h)
            } catch (z) {
                throw z.source = q, z
            }
            return c ? y(c) : (y.source = q, y)
        }

        function Id(a, b, d) {
            a = (a = +a) > -1 ? a : 0;
            var e = -1,
                f = c(a);
            for (b = Fb.createCallback(b, d, 1); ++e < a;) f[e] = b(e);
            return f
        }

        function Jd(a) {
            return null == a ? "" : ab(a).replace(m, Ob)
        }

        function Kd(a) {
            var b = ++e;
            return ab(null == a ? "" : a) + b
        }

        function Ld(a, b) {
            return b(a), a
        }

        function Md() {
            return ab(this.__wrapped__)
        }

        function Nd() {
            return this.__wrapped__
        }
        a = a ? _.defaults(window.Object(), a, _.pick(window, w)) : window;
        var c = a.Array,
            d = a.Boolean,
            i = a.Date,
            J = a.Function,
            K = a.Math,
            M = a.Number,
            P = a.Object,
            W = a.RegExp,
            ab = a.String,
            bb = a.TypeError,
            cb = [],
            db = P.prototype,
            eb = a._,
            fb = W("^" + ab(db.valueOf).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"),
            gb = K.ceil,
            hb = a.clearTimeout,
            ib = cb.concat,
            jb = K.floor,
            kb = J.prototype.toString,
            lb = fb.test(lb = P.getPrototypeOf) && lb,
            mb = db.hasOwnProperty,
            nb = cb.push,
            ob = a.setImmediate,
            pb = a.setTimeout,
            qb = db.toString,
            rb = fb.test(rb = qb.bind) && rb,
            sb = fb.test(sb = P.create) && sb,
            tb = fb.test(tb = c.isArray) && tb,
            ub = a.isFinite,
            vb = a.isNaN,
            wb = fb.test(wb = P.keys) && wb,
            xb = K.max,
            yb = K.min,
            zb = a.parseInt,
            Ab = K.random,
            Bb = cb.slice,
            Cb = fb.test(a.attachEvent),
            Db = rb && !/\n|true/.test(rb + Cb),
            Eb = {};
        Eb[z] = c, Eb[A] = d, Eb[B] = i, Eb[C] = J, Eb[E] = P, Eb[D] = M, Eb[F] = W, Eb[G] = ab, Gb.prototype = Fb.prototype;
        var Hb = Fb.support = {};
        Hb.fastBind = rb && !Db, Fb.templateSettings = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: p,
            variable: "",
            imports: {
                _: Fb
            }
        };
        var Qb = tb,
            Rb = function(a) {
                var b, c = a,
                    d = [];
                if (!c) return d;
                if (!I[typeof a]) return d;
                for (b in c) mb.call(c, b) && d.push(b);
                return d
            },
            Sb = wb ? function(a) {
                return kc(a) ? wb(a) : []
            } : Rb,
            Tb = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            Ub = cc(Tb),
            Vb = function(a, b, c) {
                var d, e = a,
                    f = e;
                if (!e) return f;
                var g = arguments,
                    h = 0,
                    i = "number" == typeof c ? 2 : g.length;
                if (i > 3 && "function" == typeof g[i - 2]) var j = Fb.createCallback(g[--i - 1], g[i--], 2);
                else i > 2 && "function" == typeof g[i - 1] && (j = g[--i]);
                for (; ++h < i;)
                    if (e = g[h], e && I[typeof e])
                        for (var k = -1, l = I[typeof e] && Sb(e), m = l ? l.length : 0; ++k < m;) d = l[k], f[d] = j ? j(f[d], e[d]) : e[d];
                return f
            },
            Yb = function(a, b, c) {
                var d, e = a,
                    f = e;
                if (!e) return f;
                for (var g = arguments, h = 0, i = "number" == typeof c ? 2 : g.length; ++h < i;)
                    if (e = g[h], e && I[typeof e])
                        for (var j = -1, k = I[typeof e] && Sb(e), l = k ? k.length : 0; ++j < l;) d = k[j], "undefined" == typeof f[d] && (f[d] = e[d]);
                return f
            },
            $b = function(a, b, c) {
                var d, e = a,
                    f = e;
                if (!e) return f;
                if (!I[typeof e]) return f;
                b = b && "undefined" == typeof c ? b : Fb.createCallback(b, c);
                for (d in e)
                    if (b(e[d], d, a) === !1) return f;
                return f
            },
            _b = function(a, b, c) {
                var d, e = a,
                    f = e;
                if (!e) return f;
                if (!I[typeof e]) return f;
                b = b && "undefined" == typeof c ? b : Fb.createCallback(b, c);
                for (var g = -1, h = I[typeof e] && Sb(e), i = h ? h.length : 0; ++g < i;)
                    if (d = h[g], b(e[d], d, a) === !1) return f;
                return f
            },
            oc = function(a) {
                if (!a || qb.call(a) != E) return !1;
                var b = a.valueOf,
                    c = "function" == typeof b && (c = lb(b)) && lb(c);
                return c ? a == c || lb(a) == c : Nb(a)
            },
            Tc = Cc,
            Yc = Mb(function Od(a, b, c) {
                for (var d = -1, e = a ? a.length : 0, f = []; ++d < e;) {
                    var g = a[d];
                    c && (g = c(g, d, a)), Qb(g) ? nb.apply(f, b ? g : Od(g)) : f.push(g)
                }
                return f
            }),
            gd = Mb(function(a, b, c) {
                var d = -1,
                    e = Lb(),
                    f = a ? a.length : 0,
                    g = [],
                    i = !b && f >= h && e === N,
                    j = c || i ? U() : g;
                if (i) {
                    var k = S(j);
                    k ? (e = O, j = k) : (i = !1, j = c ? j : (X(j), g))
                }
                for (; ++d < f;) {
                    var l = a[d],
                        m = c ? c(l, d, a) : l;
                    (b ? !d || j[j.length - 1] !== m : e(j, m) < 0) && ((c || i) && j.push(m), g.push(l))
                }
                return i ? (X(j.array), Y(j)) : c && X(j), g
            });
        Db && L && "function" == typeof ob && (sd = md(ob, a));
        var Ed = 8 == zb(r + "08") ? zb : function(a, b) {
            return zb(qc(a) ? a.replace(s, "") : a, b || 0)
        };
        return Fb.after = ld, Fb.assign = Vb, Fb.at = yc, Fb.bind = md, Fb.bindAll = nd, Fb.bindKey = od, Fb.compact = Uc, Fb.compose = pd, Fb.countBy = Ac, Fb.createCallback = qd, Fb.debounce = rd, Fb.defaults = Yb, Fb.defer = sd, Fb.delay = td, Fb.difference = Vc, Fb.filter = Cc, Fb.flatten = Yc, Fb.forEach = Ec, Fb.forIn = $b, Fb.forOwn = _b, Fb.functions = ac, Fb.groupBy = Fc, Fb.initial = $c, Fb.intersection = _c, Fb.invert = cc, Fb.invoke = Gc, Fb.keys = Sb, Fb.map = Hc, Fb.max = Ic, Fb.memoize = ud, Fb.merge = sc, Fb.min = Jc, Fb.omit = tc, Fb.once = vd, Fb.pairs = uc, Fb.partial = wd, Fb.partialRight = xd, Fb.pick = vc, Fb.pluck = Kc, Fb.range = cd, Fb.reject = Nc, Fb.rest = dd, Fb.shuffle = Oc, Fb.sortBy = Rc, Fb.tap = Ld, Fb.throttle = yd, Fb.times = Id, Fb.toArray = Sc, Fb.transform = wc, Fb.union = fd, Fb.uniq = gd, Fb.unzip = hd, Fb.values = xc, Fb.where = Tc, Fb.without = id, Fb.wrap = zd, Fb.zip = jd, Fb.zipObject = kd, Fb.collect = Hc, Fb.drop = dd, Fb.each = Ec, Fb.extend = Vb, Fb.methods = ac, Fb.object = kd, Fb.select = Cc, Fb.tail = dd, Fb.unique = gd, Cd(Fb), Fb.chain = Fb, Fb.prototype.chain = function() {
            return this
        }, Fb.clone = Wb, Fb.cloneDeep = Xb, Fb.contains = zc, Fb.escape = Ad, Fb.every = Bc, Fb.find = Dc, Fb.findIndex = Wc, Fb.findKey = Zb, Fb.has = bc, Fb.identity = Bd, Fb.indexOf = Zc, Fb.isArguments = Pb, Fb.isArray = Qb, Fb.isBoolean = dc, Fb.isDate = ec, Fb.isElement = fc, Fb.isEmpty = gc, Fb.isEqual = hc, Fb.isFinite = ic, Fb.isFunction = jc, Fb.isNaN = lc, Fb.isNull = mc, Fb.isNumber = nc, Fb.isObject = kc, Fb.isPlainObject = oc, Fb.isRegExp = pc, Fb.isString = qc, Fb.isUndefined = rc, Fb.lastIndexOf = bd, Fb.mixin = Cd, Fb.noConflict = Dd, Fb.parseInt = Ed, Fb.random = Fd, Fb.reduce = Lc, Fb.reduceRight = Mc, Fb.result = Gd, Fb.runInContext = $, Fb.size = Pc, Fb.some = Qc, Fb.sortedIndex = ed, Fb.template = Hd, Fb.unescape = Jd, Fb.uniqueId = Kd, Fb.all = Bc, Fb.any = Qc, Fb.detect = Dc, Fb.findWhere = Dc, Fb.foldl = Lc, Fb.foldr = Mc, Fb.include = zc, Fb.inject = Lc, _b(Fb, function(a, b) {
            Fb.prototype[b] || (Fb.prototype[b] = function() {
                var b = [this.__wrapped__];
                return nb.apply(b, arguments), a.apply(Fb, b)
            })
        }), Fb.first = Xc, Fb.last = ad, Fb.take = Xc, Fb.head = Xc, _b(Fb, function(a, b) {
            Fb.prototype[b] || (Fb.prototype[b] = function(b, c) {
                var d = a(this.__wrapped__, b, c);
                return null == b || c && "function" != typeof b ? d : new Gb(d)
            })
        }), Fb.VERSION = "1.3.1", Fb.prototype.toString = Md, Fb.prototype.value = Nd, Fb.prototype.valueOf = Nd, Ec(["join", "pop", "shift"], function(a) {
            var b = cb[a];
            Fb.prototype[a] = function() {
                return b.apply(this.__wrapped__, arguments)
            }
        }), Ec(["push", "reverse", "sort", "unshift"], function(a) {
            var b = cb[a];
            Fb.prototype[a] = function() {
                return b.apply(this.__wrapped__, arguments), this
            }
        }), Ec(["concat", "slice", "splice"], function(a) {
            var b = cb[a];
            Fb.prototype[a] = function() {
                return new Gb(b.apply(this.__wrapped__, arguments))
            }
        }), Fb
    }
    var b, c = [],
        d = [],
        e = 0,
        f = {},
        g = +new Date + "",
        h = 75,
        i = 40,
        j = /\b__p \+= '';/g,
        k = /\b(__p \+=) '' \+/g,
        l = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        m = /&(?:amp|lt|gt|quot|#39);/g,
        n = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        o = /\w*$/,
        p = /<%=([\s\S]+?)%>/g,
        q = (q = /\bthis\b/) && q.test($) && q,
        r = " 	\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",
        s = RegExp("^[" + r + "]*0+(?=.$)"),
        t = /($^)/,
        u = /[&<>"']/g,
        v = /['\n\r\t\u2028\u2029\\]/g,
        w = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setImmediate", "setTimeout"],
        x = 0,
        y = "[object Arguments]",
        z = "[object Array]",
        A = "[object Boolean]",
        B = "[object Date]",
        C = "[object Function]",
        D = "[object Number]",
        E = "[object Object]",
        F = "[object RegExp]",
        G = "[object String]",
        H = {};
    H[C] = !1, H[y] = H[z] = H[A] = H[B] = H[D] = H[E] = H[F] = H[G] = !0;
    var I = {
            "boolean": !1,
            "function": !0,
            object: !0,
            number: !1,
            string: !1,
            undefined: !1
        },
        J = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        K = I[typeof exports] && exports,
        L = I[typeof module] && module && module.exports == K && module,
        M = I[typeof global] && global;
    !M || M.global !== M && M.window !== M || (window = M);
    var _ = a._ = $();
    a.each(_, function(b, c) {
        Object.hasOwnProperty.call(_, b) && !/VERSION/.test(name) && (a[b] || (a[b] = c))
    })
}), FD31.plugin("bootstrap", function(a) {
    ! function(a) {
        "use strict";
        a(function() {
            a.support.transition = function() {
                var a = function() {
                    var c, a = document.createElement("bootstrap"),
                        b = {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "oTransitionEnd otransitionend",
                            transition: "transitionend"
                        };
                    for (c in b)
                        if (void 0 !== a.style[c]) return b[c]
                }();
                return a && {
                    end: a
                }
            }()
        })
    }(a), ! function(a) {
        "use strict";
        var b = '[data-foundry-dismiss="alert"]',
            c = function(c) {
                a(c).on("click", b, this.close)
            };
        c.prototype.close = function(b) {
            function f() {
                e.trigger("closed").remove()
            }
            var e, c = a(this),
                d = c.attr("data-target");
            d || (d = c.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), e = a(d), b && b.preventDefault(), e.length || (e = c.hasClass("alert") ? c : c.parent()), e.trigger(b = a.Event("close")), b.isDefaultPrevented() || (e.removeClass("in"), a.support.transition && e.hasClass("fade") ? e.on(a.support.transition.end, f) : f())
        }, a.fn.alert = function(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("alert");
                e || d.data("alert", e = new c(this)), "string" == typeof b && e[b].call(d)
            })
        }, a.fn.alert.Constructor = c, a(document).on("click.alert.data-api", b, c.prototype.close)
    }(a), ! function(a) {
        "use strict";
        var b = function(b, c) {
            this.$element = a(b), this.options = a.extend({}, a.fn.button.defaults, c)
        };
        b.prototype.setState = function(a) {
            var b = "disabled",
                c = this.$element,
                d = c.data(),
                e = c.is("input") ? "val" : "html";
            a += "Text", d.resetText || c.data("resetText", c[e]()), c[e](d[a] || this.options[a]), setTimeout(function() {
                "loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
            }, 0)
        }, b.prototype.toggle = function() {
            var a = this.$element.closest('[data-foundry-toggle="buttons-radio"]');
            a.hasClass("disabled") || (a && a.find(".active").removeClass("active"), this.$element.toggleClass("active"))
        }, a.fn.button = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("button"),
                    f = "object" == typeof c && c;
                e || d.data("button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
            })
        }, a.fn.button.defaults = {
            loadingText: "loading..."
        }, a.fn.button.Constructor = b, a(document).on("click.button.data-api", "[data-foundry-toggle^=button]", function(b) {
            var c = a(b.target);
            c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle")
        })
    }(a), ! function(a) {
        "use strict";
        var b = function(b, c) {
            this.$element = a(b), this.options = c, this.options.slide && this.slide(this.options.slide), "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
        };
        b.prototype = {
            cycle: function(b) {
                return b || (this.paused = !1), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
            },
            to: function(b) {
                var c = this.$element.find(".item.active"),
                    d = c.parent().children(),
                    e = d.index(c),
                    f = this;
                if (!(b > d.length - 1 || 0 > b)) return this.sliding ? this.$element.one("slid", function() {
                    f.to(b)
                }) : e == b ? this.pause().cycle() : this.slide(b > e ? "next" : "prev", a(d[b]))
            },
            pause: function(b) {
                return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle()), clearInterval(this.interval), this.interval = null, this
            },
            next: function() {
                return this.sliding ? void 0 : this.slide("next")
            },
            prev: function() {
                return this.sliding ? void 0 : this.slide("prev")
            },
            slide: function(b, c) {
                var j, d = this.$element.find(".item.active"),
                    e = c || d[b](),
                    f = this.interval,
                    g = "next" == b ? "left" : "right",
                    h = "next" == b ? "first" : "last",
                    i = this;
                if (this.sliding = !0, f && this.pause(), e = e.length ? e : this.$element.find(".item")[h](), j = a.Event("slide", {
                        relatedTarget: e[0]
                    }), !e.hasClass("active")) {
                    if (a.support.transition && this.$element.hasClass("slide")) {
                        if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                        e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), this.$element.one(a.support.transition.end, function() {
                            e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function() {
                                i.$element.trigger("slid")
                            }, 0)
                        })
                    } else {
                        if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                        d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
                    }
                    return f && this.cycle(), this
                }
            }
        }, a.fn.carousel = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("carousel"),
                    f = a.extend({}, a.fn.carousel.defaults, "object" == typeof c && c),
                    g = "string" == typeof c ? c : f.slide;
                e || d.data("carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.cycle()
            })
        }, a.fn.carousel.defaults = {
            interval: 5e3,
            pause: "hover"
        }, a.fn.carousel.Constructor = b, a(document).on("click.carousel.data-api", "[data-foundry-slide]", function(b) {
            var d, c = a(this),
                e = a(c.attr("data-target") || (d = c.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")),
                f = a.extend({}, e.data(), c.data());
            e.carousel(f), b.preventDefault()
        })
    }(a), ! function(a) {
        "use strict";
        var b = function(b, c) {
            this.$element = a(b), this.options = a.extend({}, a.fn.collapse.defaults, c), this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
        };
        b.prototype = {
            constructor: b,
            dimension: function() {
                var a = this.$element.hasClass("width");
                return a ? "width" : "height"
            },
            show: function() {
                var b, c, d, e;
                if (!this.transitioning) {
                    if (b = this.dimension(), c = a.camelCase(["scroll", b].join("-")), d = this.$parent && this.$parent.find("> .accordion-group > .in"), d && d.length) {
                        if (e = d.data("collapse"), e && e.transitioning) return;
                        d.collapse("hide"), e || d.data("collapse", null)
                    }
                    this.$element[b](0), a.support.transition && this.$element[b](this.$element[0][c]), this.transition("addClass", a.Event("bootstrap-show"), "shown")
                }
            },
            hide: function() {
                var b;
                this.transitioning || (b = this.dimension(), this.reset(this.$element[b]()), this.transition("removeClass", a.Event("bootstrap-hide"), "hidden"), this.$element[b](0))
            },
            reset: function(a) {
                var b = this.dimension();
                return this.$element.removeClass("collapse")[b](a || "auto")[0].offsetWidth, this.$element[null !== a ? "addClass" : "removeClass"]("collapse"), this
            },
            transition: function(b, c, d) {
                var e = this,
                    f = function() {
                        "bootstrap-show" == c.type && e.reset(), e.transitioning = 0, e.$element.trigger(d)
                    };
                this.$element.trigger(c), c.isDefaultPrevented() || (this.transitioning = 1, this.$element[b]("in"), a.support.transition && this.$element.hasClass("collapse") ? this.$element.one(a.support.transition.end, f) : f())
            },
            toggle: function() {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            }
        }, a.fn.collapse = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("collapse"),
                    f = "object" == typeof c && c;
                e || d.data("collapse", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.collapse.defaults = {
            toggle: !0
        }, a.fn.collapse.Constructor = b, a(document).on("click.collapse.data-api", "[data-foundry-toggle=collapse]", function(b) {
            var d, c = a(this),
                e = c.attr("data-target") || b.preventDefault() || (d = c.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""),
                f = a(e).data("collapse") ? "toggle" : c.data();
            c[a(e).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), a(e).collapse(f)
        })
    }(a), ! function(a) {
        "use strict";

        function d(c) {
            a(b).each(function() {
                var b = e(a(this)),
                    d = b.hasClass("open");
                b.removeClass("open"), d && b.trigger("dropdownClose", [c.target])
            })
        }

        function e(b) {
            var d, c = b.attr("data-target");
            return c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")), d = a(c), d.length || (d = b.parent()), d
        }
        var b = "[data-foundry-toggle=dropdown]",
            c = function(b) {
                var c = a(b).on("click.dropdown.data-api", this.toggle);
                a("html").on("click.dropdown.data-api", function() {
                    c.parent().removeClass("open")
                })
            };
        c.prototype = {
            constructor: c,
            toggle: function(b) {
                var f, g, c = a(this);
                if (!c.is(".disabled, :disabled")) return f = e(c), g = f.hasClass("open"), d(b), g || (f.toggleClass("open"), f.trigger("dropdownOpen", [b.target]), c.focus()), !1
            },
            keydown: function(b) {
                var c, d, g, h, i;
                if (/(38|40|27)/.test(b.keyCode) && (c = a(this), b.preventDefault(), b.stopPropagation(), !c.is(".disabled, :disabled"))) {
                    if (g = e(c), h = g.hasClass("open"), !h || h && 27 == b.keyCode) return c.click();
                    d = a("[role=menu] li:not(.divider) a", g), d.length && (i = d.index(d.filter(":focus")), 38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < d.length - 1 && i++, ~i || (i = 0), d.eq(i).focus())
                }
            }
        }, a.fn.dropdown = function(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("dropdown");
                e || d.data("dropdown", e = new c(this)), "string" == typeof b && e[b].call(d)
            })
        }, a.fn.dropdown.Constructor = c, a(document).on("click.dropdown.data-api", d).on("click.dropdown", ".dropdown_ form, .dropdown-static", function(a) {
            a.stopPropagation()
        }).on("click.dropdown.data-api", b, c.prototype.toggle).on("keydown.dropdown.data-api", b + ", [role=menu]", c.prototype.keydown)
    }(a), ! function(a) {
        "use strict";
        var b = function(b, c) {
            this.options = c, this.$element = a(b).delegate('[data-dismiss="modal"]', "click.dismiss.modal", a.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
        };
        b.prototype = {
            constructor: b,
            toggle: function() {
                return this[this.isShown ? "hide" : "show"]()
            },
            show: function() {
                var b = this,
                    c = a.Event("show");
                this.$element.trigger(c), this.isShown || c.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function() {
                    var c = a.support.transition && b.$element.hasClass("fade");
                    b.$element.parent().length || b.$element.appendTo(document.body), b.$element.show(), c && b.$element[0].offsetWidth, b.$element.addClass("in").attr("aria-hidden", !1).focus(), b.enforceFocus(), c ? b.$element.one(a.support.transition.end, function() {
                        b.$element.focus().trigger("shown")
                    }) : b.$element.focus().trigger("shown")
                }))
            },
            hide: function(b) {
                b && b.preventDefault();
                b = a.Event("hide"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), a.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
            },
            enforceFocus: function() {
                var b = this;
                a(document).on("focusin.modal", function(a) {
                    b.$element[0] === a.target || b.$element.has(a.target).length || b.$element.focus()
                })
            },
            escape: function() {
                var a = this;
                this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(b) {
                    27 == b.which && a.hide()
                }) : this.isShown || this.$element.off("keyup.dismiss.modal")
            },
            hideWithTransition: function() {
                var b = this,
                    c = setTimeout(function() {
                        b.$element.off(a.support.transition.end), b.hideModal()
                    }, 500);
                this.$element.one(a.support.transition.end, function() {
                    clearTimeout(c), b.hideModal()
                })
            },
            hideModal: function() {
                this.$element.hide().trigger("hidden"), this.backdrop()
            },
            removeBackdrop: function() {
                this.$backdrop.remove(), this.$backdrop = null
            },
            backdrop: function(b) {
                var d = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var e = a.support.transition && d;
                    this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(document.body), this.$backdrop.click("static" == this.options.backdrop ? a.proxy(this.$element[0].focus, this.$element[0]) : a.proxy(this.hide, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), e ? this.$backdrop.one(a.support.transition.end, b) : b()
                } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, a.proxy(this.removeBackdrop, this)) : this.removeBackdrop()) : b && b()
            }
        }, a.fn.modal = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("modal"),
                    f = a.extend({}, a.fn.modal.defaults, d.data(), "object" == typeof c && c);
                e || d.data("modal", e = new b(this, f)), "string" == typeof c ? e[c]() : f.show && e.show()
            })
        }, a.fn.modal.defaults = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, a.fn.modal.Constructor = b, a(document).on("click.modal.data-api", '[data-foundry-toggle="modal"]', function(b) {
            var c = a(this),
                d = c.attr("href"),
                e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
                f = e.data("modal") ? "toggle" : a.extend({
                    remote: !/#/.test(d) && d
                }, e.data(), c.data());
            b.preventDefault(), e.modal(f).one("hide", function() {
                c.focus()
            })
        })
    }(a), ! function(a) {
        "use strict";
        var b = function(a, b) {
            this.init("tooltip", a, b)
        };
        b.prototype = {
            constructor: b,
            init: function(b, c, d) {
                var e, f;
                this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.enabled = !0, "click" == this.options.trigger ? this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)) : "manual" != this.options.trigger && (e = "hover" == this.options.trigger ? "mouseenter" : "focus", f = "hover" == this.options.trigger ? "mouseleave" : "blur", this.$element.on(e + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(f + "." + this.type, this.options.selector, a.proxy(this.leave, this))), this.options.selector ? this._options = a.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            },
            getOptions: function(b) {
                return b = a.extend({}, a.fn[this.type].defaults, b, this.$element.data()), b.delay && "number" == typeof b.delay && (b.delay = {
                    show: b.delay,
                    hide: b.delay
                }), b
            },
            enter: function(b) {
                var c = a(b.currentTarget)[this.type](this._options).data(this.type);
                return c.options.delay && c.options.delay.show ? (clearTimeout(this.timeout), c.hoverState = "in", this.timeout = setTimeout(function() {
                    "in" == c.hoverState && c.show()
                }, c.options.delay.show), void 0) : c.show()
            },
            leave: function(b) {
                var c = a(b.currentTarget)[this.type](this._options).data(this.type);
                return this.timeout && clearTimeout(this.timeout), c.options.delay && c.options.delay.hide ? (c.hoverState = "out", this.timeout = setTimeout(function() {
                    "out" == c.hoverState && c.hide()
                }, c.options.delay.hide), void 0) : c.hide()
            },
            show: function() {
                var b, c, d, e, f, g, h;
                if (this.hasContent() && this.enabled) {
                    switch (b = this.tip(), this.setContent(), this.options.animation && b.addClass("fade"), g = "function" == typeof this.options.placement ? this.options.placement.call(this, b[0], this.$element[0]) : this.options.placement, c = /in/.test(g), b.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }), this.options.container || "parent") {
                        case "parent":
                            b.insertAfter(this.$element);
                            break;
                        case "body":
                            b.appendTo(document.body);
                            break;
                        default:
                            var i = a(this.options.container);
                            i.length ? b.appendTo(i) : b.insertAfter(this.$element)
                    }
                    switch (d = this.getPosition(c), e = b[0].offsetWidth, f = b[0].offsetHeight, c ? g.split(" ")[1] : g) {
                        case "bottom":
                            h = {
                                top: d.top + d.height,
                                left: d.left + d.width / 2 - e / 2
                            };
                            break;
                        case "top":
                            h = {
                                top: d.top - f,
                                left: d.left + d.width / 2 - e / 2
                            };
                            break;
                        case "left":
                            h = {
                                top: d.top + d.height / 2 - f / 2,
                                left: d.left - e
                            };
                            break;
                        case "right":
                            h = {
                                top: d.top + d.height / 2 - f / 2,
                                left: d.left + d.width
                            }
                    }
                    b.offset(h).addClass(g).addClass("in")
                }
            },
            setContent: function() {
                var a = this.tip(),
                    b = this.getTitle();
                a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
            },
            hide: function() {
                function d() {
                    var b = setTimeout(function() {
                        c.off(a.support.transition.end).detach()
                    }, 500);
                    c.one(a.support.transition.end, function() {
                        clearTimeout(b), c.detach()
                    })
                }
                var c = this.tip();
                return c.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d() : c.detach(), this
            },
            fixTitle: function() {
                var a = this.$element;
                (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").removeAttr("title")
            },
            hasContent: function() {
                return this.getTitle()
            },
            getPosition: function(b) {
                return a.extend({}, b ? {
                    top: 0,
                    left: 0
                } : this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                })
            },
            getTitle: function() {
                var a, b = this.$element,
                    c = this.options;
                return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
            },
            tip: function() {
                return this.$tip = this.$tip || a(this.options.template)
            },
            validate: function() {
                this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
            },
            enable: function() {
                this.enabled = !0
            },
            disable: function() {
                this.enabled = !1
            },
            toggleEnabled: function() {
                this.enabled = !this.enabled
            },
            toggle: function(b) {
                var c = a(b.currentTarget)[this.type](this._options).data(this.type);
                c[c.tip().hasClass("in") ? "hide" : "show"]()
            },
            destroy: function() {
                this.hide().$element.off("." + this.type).removeData(this.type)
            }
        }, a.fn.tooltip = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("tooltip"),
                    f = "object" == typeof c && c;
                e || d.data("tooltip", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.tooltip.Constructor = b, a.fn.tooltip.defaults = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover",
            title: "",
            delay: 0,
            html: !1,
            container: "parent"
        }
    }(a), ! function(a) {
        "use strict";
        var b = function(a, b) {
            this.init("popover", a, b)
        };
        b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype, {
            constructor: b,
            setContent: function() {
                var a = this.tip(),
                    b = this.getTitle(),
                    c = this.getContent();
                a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content > *")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in")
            },
            hasContent: function() {
                return this.getTitle() || this.getContent()
            },
            getContent: function() {
                var a, b = this.$element,
                    c = this.options;
                return a = b.attr("data-content") || ("function" == typeof c.content ? c.content.call(b[0]) : c.content)
            },
            tip: function() {
                return this.$tip || (this.$tip = a(this.options.template)), this.$tip
            },
            destroy: function() {
                this.hide().$element.off("." + this.type).removeData(this.type)
            }
        }), a.fn.popover = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("popover"),
                    f = "object" == typeof c && c;
                e || d.data("popover", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.popover.Constructor = b, a.fn.popover.defaults = a.extend({}, a.fn.tooltip.defaults, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover popover-fd"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
        })
    }(a), ! function(a) {
        "use strict";

        function b(b, c) {
            var f, d = a.proxy(this.process, this),
                e = a(b).is("body") ? a(window) : a(b);
            this.options = a.extend({}, a.fn.scrollspy.defaults, c), this.$scrollElement = e.on("scroll.scroll-spy.data-api", d), this.selector = (this.options.target || (f = a(b).attr("href")) && f.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = a("body"), this.refresh(), this.process()
        }
        b.prototype = {
            constructor: b,
            refresh: function() {
                var c, b = this;
                this.offsets = a([]), this.targets = a([]), c = this.$body.find(this.selector).map(function() {
                    var b = a(this),
                        c = b.data("target") || b.attr("href"),
                        d = /^#\w/.test(c) && a(c);
                    return d && d.length && [
                        [d.position().top, c]
                    ] || null
                }).sort(function(a, b) {
                    return a[0] - b[0]
                }).each(function() {
                    b.offsets.push(this[0]), b.targets.push(this[1])
                })
            },
            process: function() {
                var g, a = this.$scrollElement.scrollTop() + this.options.offset,
                    b = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                    c = b - this.$scrollElement.height(),
                    d = this.offsets,
                    e = this.targets,
                    f = this.activeTarget;
                if (a >= c) return f != (g = e.last()[0]) && this.activate(g);
                for (g = d.length; g--;) f != e[g] && a >= d[g] && (!d[g + 1] || a <= d[g + 1]) && this.activate(e[g])
            },
            activate: function(b) {
                var c, d;
                this.activeTarget = b, a(this.selector).parent(".active").removeClass("active"), d = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', c = a(d).parent("li").addClass("active"), c.parent(".dropdown-menu").length && (c = c.closest("li.dropdown").addClass("active")), c.trigger("activate")
            }
        }, a.fn.scrollspy = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("scrollspy"),
                    f = "object" == typeof c && c;
                e || d.data("scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.defaults = {
            offset: 10
        }, a(window).on("load", function() {
            a('[data-foundry-spy="scroll"]').each(function() {
                var b = a(this);
                b.scrollspy(b.data())
            })
        })
    }(a), ! function(a) {
        "use strict";
        var b = function(b) {
            this.element = a(b)
        };
        b.prototype = {
            constructor: b,
            show: function() {
                var e, f, g, b = this.element,
                    c = b.closest("ul:not(.dropdown-menu)"),
                    d = b.attr("data-target");
                d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), b.parent("li").hasClass("active") || (e = c.find(".active:last a")[0], g = a.Event("show", {
                    relatedTarget: e
                }), b.trigger(g), g.isDefaultPrevented() || (f = a(d), this.activate(b.parent("li"), c), this.activate(f, f.parent(), function() {
                    b.trigger({
                        type: "shown",
                        relatedTarget: e
                    })
                })))
            },
            activate: function(b, c, d) {
                function g() {
                    e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), f ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
                }
                var e = c.find("> .active"),
                    f = d && a.support.transition && e.hasClass("fade");
                f ? e.one(a.support.transition.end, g) : g(), e.removeClass("in")
            }
        }, a.fn.tab = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("tab");
                e || d.data("tab", e = new b(this)), "string" == typeof c && e[c]()
            })
        }, a.fn.tab.Constructor = b, a(document).on("click.tab.data-api", '[data-foundry-toggle="tab"], [data-foundry-toggle="pill"]', function(b) {
            b.preventDefault(), a(this).tab("show")
        })
    }(a), ! function(a) {
        "use strict";
        var b = function(b, c) {
            this.$element = a(b), this.options = a.extend({}, a.fn.typeahead.defaults, c), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.$menu = a(this.options.menu).appendTo("body"), this.source = this.options.source, this.shown = !1, this.listen()
        };
        b.prototype = {
            constructor: b,
            select: function() {
                var a = this.$menu.find(".active").attr("data-value");
                return this.$element.val(this.updater(a)).change(), this.hide()
            },
            updater: function(a) {
                return a
            },
            show: function() {
                var b = a.extend({}, this.$element.offset(), {
                    height: this.$element[0].offsetHeight
                });
                return this.$menu.css({
                    top: b.top + b.height,
                    left: b.left
                }), this.$menu.show(), this.shown = !0, this
            },
            hide: function() {
                return this.$menu.hide(), this.shown = !1, this
            },
            lookup: function() {
                var c;
                return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (c = a.isFunction(this.source) ? this.source(this.query, a.proxy(this.process, this)) : this.source, c ? this.process(c) : this)
            },
            process: function(b) {
                var c = this;
                return b = a.grep(b, function(a) {
                    return c.matcher(a)
                }), b = this.sorter(b), b.length ? this.render(b.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
            },
            matcher: function(a) {
                return ~a.toLowerCase().indexOf(this.query.toLowerCase())
            },
            sorter: function(a) {
                for (var e, b = [], c = [], d = []; e = a.shift();) e.toLowerCase().indexOf(this.query.toLowerCase()) ? ~e.indexOf(this.query) ? c.push(e) : d.push(e) : b.push(e);
                return b.concat(c, d)
            },
            highlighter: function(a) {
                var b = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
                return a.replace(new RegExp("(" + b + ")", "ig"), function(a, b) {
                    return "<strong>" + b + "</strong>"
                })
            },
            render: function(b) {
                var c = this;
                return b = a(b).map(function(b, d) {
                    return b = a(c.options.item).attr("data-value", d), b.find("a").html(c.highlighter(d)), b[0]
                }), b.first().addClass("active"), this.$menu.html(b), this
            },
            next: function() {
                var c = this.$menu.find(".active").removeClass("active"),
                    d = c.next();
                d.length || (d = a(this.$menu.find("li")[0])), d.addClass("active")
            },
            prev: function() {
                var b = this.$menu.find(".active").removeClass("active"),
                    c = b.prev();
                c.length || (c = this.$menu.find("li").last()), c.addClass("active")
            },
            listen: function() {
                this.$element.on("blur", a.proxy(this.blur, this)).on("keypress", a.proxy(this.keypress, this)).on("keyup", a.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", a.proxy(this.keydown, this)), this.$menu.on("click", a.proxy(this.click, this)).on("mouseenter", "li", a.proxy(this.mouseenter, this))
            },
            eventSupported: function(a) {
                var b = a in this.$element;
                return b || (this.$element.setAttribute(a, "return;"), b = "function" == typeof this.$element[a]), b
            },
            move: function(a) {
                if (this.shown) {
                    switch (a.keyCode) {
                        case 9:
                        case 13:
                        case 27:
                            a.preventDefault();
                            break;
                        case 38:
                            a.preventDefault(), this.prev();
                            break;
                        case 40:
                            a.preventDefault(), this.next()
                    }
                    a.stopPropagation()
                }
            },
            keydown: function(b) {
                this.suppressKeyPressRepeat = !~a.inArray(b.keyCode, [40, 38, 9, 13, 27]), this.move(b)
            },
            keypress: function(a) {
                this.suppressKeyPressRepeat || this.move(a)
            },
            keyup: function(a) {
                switch (a.keyCode) {
                    case 40:
                    case 38:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    case 9:
                    case 13:
                        if (!this.shown) return;
                        this.select();
                        break;
                    case 27:
                        if (!this.shown) return;
                        this.hide();
                        break;
                    default:
                        this.lookup()
                }
                a.stopPropagation(), a.preventDefault()
            },
            blur: function() {
                var b = this;
                setTimeout(function() {
                    b.hide()
                }, 150)
            },
            click: function(a) {
                a.stopPropagation(), a.preventDefault(), this.select()
            },
            mouseenter: function(b) {
                this.$menu.find(".active").removeClass("active"), a(b.currentTarget).addClass("active")
            }
        }, a.fn.typeahead = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("typeahead"),
                    f = "object" == typeof c && c;
                e || d.data("typeahead", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.typeahead.defaults = {
            source: [],
            items: 8,
            menu: '<ul class="typeahead dropdown-menu"></ul>',
            item: '<li><a href="#"></a></li>',
            minLength: 1
        }, a.fn.typeahead.Constructor = b, a(document).on("focus.typeahead.data-api", '[data-foundry-provide="typeahead"]', function(b) {
            var c = a(this);
            c.data("typeahead") || (b.preventDefault(), c.typeahead(c.data()))
        })
    }(a), ! function(a) {
        "use strict";
        var b = function(b, c) {
            this.options = a.extend({}, a.fn.affix.defaults, c), this.$window = a(window).on("scroll.affix.data-api", a.proxy(this.checkPosition, this)).on("click.affix.data-api", a.proxy(function() {
                setTimeout(a.proxy(this.checkPosition, this), 1)
            }, this)), this.$element = a(b), this.checkPosition()
        };
        b.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var i, b = a(document).height(),
                    c = this.$window.scrollTop(),
                    d = this.$element.offset(),
                    e = this.options.offset,
                    f = e.bottom,
                    g = e.top,
                    h = "affix affix-top affix-bottom";
                "object" != typeof e && (f = g = e), "function" == typeof g && (g = e.top()), "function" == typeof f && (f = e.bottom()), i = null != this.unpin && c + this.unpin <= d.top ? !1 : null != f && d.top + this.$element.height() >= b - f ? "bottom" : null != g && g >= c ? "top" : !1, this.affixed !== i && (this.affixed = i, this.unpin = "bottom" == i ? d.top - c : null, this.$element.removeClass(h).addClass("affix" + (i ? "-" + i : "")))
            }
        }, a.fn.affix = function(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("affix"),
                    f = "object" == typeof c && c;
                e || d.data("affix", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.affix.Constructor = b, a.fn.affix.defaults = {
            offset: 0
        }, a(window).on("load", function() {
            a('[data-foundry-spy="affix"]').each(function() {
                var b = a(this),
                    c = b.data();
                c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
            })
        })
    }(a), ! function(a) {
        var b = function(b, c) {
            if (this.$element = a(b), this.$note = a('<div class="alert"></div>'), this.options = a.extend(!0, a.fn.notify.defaults, c), this.options.transition ? "fade" == this.options.transition ? this.$note.addClass("in").addClass(this.options.transition) : this.$note.addClass(this.options.transition) : this.$note.addClass("fade").addClass("in"), this.options.type ? this.$note.addClass("alert-" + this.options.type) : this.$note.addClass("alert-success"), this.options.message || "" === this.$element.data("message") ? "object" == typeof this.options.message && (this.options.message.html ? this.$note.html(this.options.message.html) : this.options.message.text ? this.$note.text(this.options.message.text) : this.$note.html(this.options.message)) : this.$note.html(this.$element.data("message")), this.options.closable) var d = a('<a class="close pull-right" href="javascript: void(0);">&times;</a>');
            return a(d).on("click", a.proxy(onClose, this)), this.$note.prepend(d), this
        };
        onClose = function() {
            this.options.onClose(), a(this.$note).remove(), this.options.onClosed()
        }, b.prototype.show = function() {
            this.options.fadeOut.enabled && this.$note.delay(this.options.fadeOut.delay || 3e3).fadeOut("slow", a.proxy(onClose, this)), this.$element.append(this.$note), this.$note.alert()
        }, b.prototype.hide = function() {
            this.options.fadeOut.enabled ? this.$note.delay(this.options.fadeOut.delay || 3e3).fadeOut("slow", a.proxy(onClose, this)) : onClose.call(this)
        }, a.fn.notify = function(a) {
            return new b(this, a)
        }, a.fn.notify.defaults = {
            type: "success",
            closable: !0,
            transition: "fade",
            fadeOut: {
                enabled: !0,
                delay: 3e3
            },
            message: null,
            onClose: function() {},
            onClosed: function() {}
        }
    }(a)
}), FD31.plugin("responsive", function(a) {
    a.responsive = function(a, b) {
        return new d(a, b)
    }, a.fn.responsive = function(b) {
        if (b) {
            var c = this,
                d = {
                    elementWidth: function(a) {
                        return a.outerWidth(!0)
                    },
                    conditions: b
                };
            a.responsive(c, d)
        }
        return this
    };
    var b = a(window),
        c = a.isFunction,
        d = function(c, d) {
            var e = this,
                c = a(c),
                f = c.data("$responsive");
            f && f.destroy(), a.extend(e, {
                elem: c,
                options: d,
                conditions: a.sortBy(a.makeArray(d.conditions), function(a) {
                    return a.at
                }),
                event: "resize.responsive" + a.uid(),
                handler: a.debounce(function() {
                    e.set()
                }, 250)
            }), delete d.conditions, c.data("$responsive", e), a(function() {
                b.on(e.event, e.handler), e.set()
            }), a(window).load(function() {
                e.set()
            })
        };
    a.extend(d.prototype, {
        set: function() {
            var b = this,
                d = b.options.elementWidth;
            b.elem.each(function() {
                var e = a(this),
                    f = c(d) ? d(e) : d;
                b.removeCondition(e.data("currentCondition"), e), a.each(b.conditions, function(a, c) {
                    var d = c.at;
                    return d >= f ? (b.applyCondition(c, e), !1) : void 0
                })
            })
        },
        applyCondition: function(b, d) {
            var e, f, g, h;
            (e = b.switchTo) && d.addClass(e), (f = b.alsoSwitch) && a.each(f, function(b, c) {
                a(b).addClass(c)
            }), (g = b.switchStylesheet) && a.each(a.makeArray(g), function(b, c) {
                var d = a('link[href$="' + c + '"]');
                d.length < 1 && a("<link/>").attr({
                    rel: "stylesheet",
                    type: "text/css",
                    href: c
                }).appendTo("head")
            }), (h = b.whenApplied) && c(h) && h(), d.data("currentCondition", b).trigger("responsive", [b])
        },
        removeCondition: function(b, d) {
            if (b) {
                var e, f, g, h;
                (e = b.switchTo) && d.removeClass(e), (f = b.alsoSwitch) && a.each(f, function(b, c) {
                    a(b).removeClass(c)
                }), (g = b.switchStylesheet) && a.each(a.makeArray(g), function(b, c) {
                    a('link[href$="' + c + '"]').remove()
                }), (h = b.whenRemoved) && c(h) && h(), d.removeData("currentCondition")
            }
        },
        resetToDefault: function(b) {
            var c = this,
                d = c.elem;
            a.each(c.conditions, function(a, e) {
                b && a == b || c.removeCondition(e, d)
            })
        },
        destroy: function() {
            b.off(this.event);
            var c = this;
            c.elem.each(function() {
                var b = a(this);
                c.removeCondition(b.data("currentCondition"), b)
            })
        }
    })
}), FD31.plugin("utils", function(a) {
    a.IE = function() {
            if (-1 != navigator.appVersion.indexOf("MSIE 10")) return 10;
            for (var a, b = 3, c = document.createElement("div"), d = c.getElementsByTagName("i"); b++, c.innerHTML = "<!--[if gt IE " + b + "]><i></i><![endif]-->", d[0];);
            return b > 4 ? b : a
        }(), a.uid = function(a, b) {
            return (a ? a : "") + Math.random().toString().replace(".", "") + (b ? b : "")
        }, a.isDeferred = function(b) {
            return b && a.isFunction(b.always)
        }, a.distinct = function(b) {
            var c = a.unique;
            if (!(b.length < 1)) {
                if (b[0].nodeType) return c.apply(this, arguments);
                if ("object" == typeof b[0]) {
                    var d = Math.random(),
                        e = [];
                    return a.each(b, function(a) {
                        b[a][d] || (e.push(b[a]), b[a][d] = !0)
                    }), a.each(e, function(a) {
                        delete e[a][d]
                    }), e
                }
                return a.grep(b, function(c, d) {
                    return a.inArray(c, b) === d
                })
            }
        }, a.trimSeparators = function(b, c, d) {
            var e = c;
            return b = b.replace(new RegExp("^[" + e + "\\s]+|[" + e + ",\\s]+$", "g"), "").replace(new RegExp(e + "[" + e + "\\s]*" + e, "g"), e).replace(new RegExp("[\\s]+" + e, "g"), e).replace(new RegExp(e + "[\\s]+", "g"), e), d && (b = a.distinct(b.split(e)).join(e)), b
        }, a.isNumeric = function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }, a.Number = {
            rotate: function(a, b, c, d) {
                return void 0 === d && (d = 0), a += d, b > a ? a += c + 1 : a > c && (a -= c + 1), a
            }
        }, a.fn.stretchToFit = function() {
            return a.each(this, function() {
                var b = a(this);
                b.css("width", "100%").css("width", 2 * b.width() - b.outerWidth(!0) - parseInt(b.css("borderLeftWidth")) - parseInt(b.css("borderRightWidth")))
            })
        }, a.fn.serializeObject = function() {
            var b = {};
            return a.each(a(this).serializeArray(), function(c, d) {
                b.hasOwnProperty(d.name) ? (a.isArray(b[d.name]) || (b[d.name] = [b[d.name]]), b[d.name].push(d.value)) : b[d.name] = d.value
            }), b
        }, a.fn.serializeJSON = function() {
            return JSON.stringify(a(this).serializeObject())
        }, a.toHTML = function(b) {
            return a("<div>").html(b).html()
        }, a.fn.toHTML = function() {
            return a.toHTML(this.clone())
        },
        function() {
            var b = function(a) {
                this.items = a, this.start = 0, this.end = a.length - 1, this.node = null, this.stopped = !1
            };
            a.extend(b.prototype, {
                isLooping: function() {
                    return this.stopped ? !1 : Math.abs(this.start - this.end) > 1 ? (this.node = Math.floor((this.start + this.end) / 2), !0) : !1
                },
                flip: function(a) {
                    a ? this.end = this.node - 1 : this.start = this.node + 1
                },
                stop: function() {
                    this.stop = !0
                }
            }), a.Bloop = function(a) {
                return new b(a)
            }
        }(), a.remap = function(b, c, d) {
            return a.each(d, function(a, d) {
                b[d] = c[d]
            }), obj
        }, a.deletes = function(b, c) {
            a.each(c, function(a, c) {
                delete b[c]
            })
        },
        function() {
            var b = function(a) {
                this.threads = [], this.threadCount = 0, this.threadLimit = a.threadLimit || 1, this.threadDelay = a.threadDelay || 0
            };
            a.extend(b.prototype, {
                add: function(b, c) {
                    a.isFunction(b) && (b.type = c || "normal", "deferred" == c && (b.deferred = a.Deferred().always(a.proxy(this.next, this))), this.threads.push(b), this.run())
                },
                addDeferred: function(a) {
                    return this.add(a, "deferred")
                },
                next: function() {
                    this.threadCount--, this.run()
                },
                run: function() {
                    var a = this;
                    setTimeout(function() {
                        if (!(a.threads.length < 1) && a.threadCount < a.threadLimit) {
                            a.threadCount++;
                            var b = a.threads.shift();
                            try {
                                b.call(b, b.deferred)
                            } catch (c) {
                                console.error(c)
                            }!b.deferred && a.next()
                        }
                    }, a.threadDelay)
                }
            }), a.Threads = function(a) {
                return new b(a)
            }
        }(),
        function() {
            var b = a.isFunction,
                c = function() {
                    this.lastId = 0
                };
            c.prototype.queue = function(c) {
                var d = this,
                    e = a.uid();
                return d.lastId = e,
                    function() {
                        if (d.lastId === e) {
                            var a = arguments,
                                a = b(c) ? c.apply(this, a) : a;
                            return b(d.fn) ? d.fn.apply(this, a) : a
                        }
                    }
            }, a.Enqueue = function(b) {
                var d = new c;
                a.isFunction(b) && (d.fn = b);
                var e = a.proxy(d.queue, d);
                return e.reset = function() {
                    d.lastId = 0
                }, e
            }
        }(),
        function() {
            var b = "___eventable",
                c = ["on", "off", "fire"],
                d = function(a) {
                    return a.split(".")[0]
                },
                e = function(a) {
                    this.fnList = {}, this.events = {}, this.mode = a
                };
            a.extend(e.prototype, {
                createEvent: function(b) {
                    return this.events[b] = a.Callbacks(this.mode)
                },
                on: function(b, c) {
                    if (!b || !a.isFunction(c)) return this;
                    var e = this.fnList;
                    (e[b] || (e[b] = [])).push(c);
                    var f = d(b);
                    return (this.events[f] || this.createEvent(f)).add(c), this
                },
                off: function(b) {
                    if (!b) return this;
                    var c = d(b),
                        e = this.events[c];
                    if (!e) return this;
                    var f = function(b) {
                        a.each(b, function(a, b) {
                            e.remove(b)
                        })
                    };
                    return c !== b ? a.each(this.fnList, function(a, b) {
                        a.indexOf(c) > -1 && f(b)
                    }) : f(this.fnList[b]), this
                },
                fire: function(b) {
                    var c = this.events[b];
                    if (c) return c.fire.apply(c, a.makeArray(arguments).slice(1)), this
                },
                destroy: function() {
                    for (name in this.events) this.events[name].disable()
                }
            }), a.eventable = function(d, f) {
                var g = d[b];
                return g && "destroy" === f ? (g.destroy(), a.deletes(d, c), delete d[b]) : (g = d[b] = new e(f), d.on = a.proxy(g.on, g), d.off = a.proxy(g.off, g), d.fire = a.proxy(g.fire, g), d)
            }
        }(), a.Chunk = function(b, c) {
            a.isArray(b) && (b = []);
            var c = a.extend({}, {
                    size: 256,
                    every: 1e3
                }, c),
                d = a.extend(a.Deferred(), {
                    size: c.size,
                    every: c.every,
                    from: 0,
                    to: b.length,
                    process: function(a) {
                        return d.process.fn = a, d
                    },
                    chunkStart: function(a) {
                        return d.chunkStart.fn = a, d
                    },
                    chunkEnd: function(a) {
                        return d.chunkEnd.fn = a, d
                    },
                    start: function() {
                        return d.stopped = !1, d.iterate(), d
                    },
                    iterate: function() {
                        if (!d.stopped) {
                            var a = d.process.fn;
                            if (a) {
                                d.to = from.size + d.size;
                                var c = b.length;
                                d.to > c && (d.to = c);
                                var e = {
                                    from: d.from,
                                    to: d.to
                                };
                                for (d.chunkStart.fn && d.chunkStart.fn.call(d, e.from, e.to); d.from < d.to && !d.stopped;) a.call(d, b[d.from]), d.from++;
                                return d.chunkEnd.fn && d.chunkEnd.fn.call(d, e.from, e.to), d.completed = d.from >= b.length - 1, d.completed ? d.resolveWith(d) : d.nextIteration = setTimeout(d.iterate, d.every), d
                            }
                        }
                    },
                    pause: function() {
                        return d.stopped = !0, clearTimeout(d.nextIteration), d
                    },
                    restart: function() {
                        return "rejected" === d.state() ? d : (d.from = 0, d.start(), d)
                    },
                    stop: function() {
                        return d.pause(), d.rejectWith(d, [d.from]), d
                    }
                });
            return d
        }, a.fn.disabled = function(a) {
            return void 0 === a ? this.is(":disabled") || this.hasClass("disabled") : this.prop("disabled", !!a).toggleClass("disabled", !!a)
        }, a.fn.enabled = function(a) {
            return void 0 === a ? !this.disabled() : this.disabled(!a)
        },
        function() {
            var b = a.Ajax = function(c) {
                var d = a.Deferred(),
                    e = arguments;
                return a.isPlainObject(c) && a.isFunction(c.beforeCreate) && c.beforeCreate(d), b.queue.addDeferred(function(c) {
                    d.xhr = a.ajax.apply(null, e).pipe(d.resolve, d.reject, d.notify), setTimeout(c.resolve, b.requestInterval)
                }), d
            };
            b.queue = a.Threads({
                threadLimit: 1
            }), b.requestInterval = 1200
        }(), a.callback = function(b, c) {
            if (a.isFunction(b)) {
                var d = a.uid("cb");
                return window[d] = function() {
                    return c || delete window[d], b.apply(null, arguments)
                }, d
            }
            if (a.isString(b)) switch (b) {
                case "destroy":
                    var d = c;
                    delete window[d]
            }
        }, a.fn.visible = function(b) {
            var c = a(this),
                d = a(window);
            if (!(c.length < 1)) {
                var e = d.scrollTop(),
                    f = e + d.height(),
                    g = c.offset().top,
                    h = g + c.height(),
                    i = b === !0 ? h : g,
                    j = b === !0 ? g : h;
                return f >= j && i >= e
            }
        }, a.fn.selectAll = function() {
            return this.each(function() {
                this.select()
            })
        }, a.fn.unselect = function() {
            return this.each(function() {
                var a = this,
                    b = a.value;
                a.value += " ", a.value = b
            })
        }, a.fn.addTransitionClass = function(a, b) {
            var c = this.addClass(a);
            return setTimeout(function() {
                c.removeClass(a)
            }, b || 0), this
        }, a.fn.switchClass = function(b, c) {
            var c = c || "-",
                d = b.split(c)[0] + c,
                e = d.length;
            return this.each(function() {
                var c = a(this),
                    f = a.map(c.attr("class").split(" "), function(a) {
                        return a.slice(0, e) == d || "" == a ? null : a
                    });
                f.push(b), c.attr("class", f.join(" "))
            })
        }, a.sanitizeHTML = function(b) {
            return a(a.parseHTML(b, document, !0)).toHTML()
        }, a.buildHTML = function(b, c) {
            if (b instanceof a) return b;
            var b = a.trim(b),
                d = [],
                e = a.buildFragment([b], document, d),
                f = a.merge([], e.childNodes);
            if (!c && d.length > 0) {
                var g = document.createElement("script");
                g.text = a.callback(function() {
                    a(d).remove()
                }) + "();";
                for (var i, j, h = f.length - 1;
                    (i = f[h--]) && ("SCRIPT" === i.nodeName ? j = f.push(g) : 1 === i.nodeType && (j = i.appendChild(g)), !j););
                j || f.push(g), d.push(g)
            }
            return a(f)
        }, a.fn.filterBy = function(a, b, c) {
            var c = c || "=",
                d = "[data-" + a.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() + c + b + "]";
            return this.filter(d)
        }, a.intersects = function(b, c) {
            return a.isArray(c) && (c = {
                top: c.y,
                left: c.x,
                bottom: c.y,
                right: c.x
            }), c.left <= b.right && b.left <= c.right && c.top <= b.bottom && b.top <= c.bottom
        }, a.fn.intersectsWith = function(b, c, d, e) {
            var f = this.offset(),
                g = {
                    top: f.top,
                    left: f.left,
                    bottom: f.top + (sourceHeight = this.height()),
                    right: f.left + (sourceWidth = this.width()),
                    width: sourceWidth,
                    height: sourceHeight
                },
                h = {
                    top: b,
                    left: c,
                    bottom: b + (e || (e = 0)),
                    right: c + (d || (d = 0)),
                    width: d,
                    height: e
                };
            return a.intersects(g, h) ? {
                reference: g,
                subject: h
            } : !1
        }, a.download = function(b) {
            return a("<iframe>").hide().appendTo("body").bind("load", function() {
                a(this).remove()
            }).attr("src", b)
        }
}), FD31.plugin("uri", function(a) {
    a.isUrl = function(a) {
        var b = /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return b.test(a)
    };
    var b = function(a) {
            "use strict";
            var b = function(a) {
                    var c, d, e, f, g, h, b = [];
                    if ("undefined" == typeof a || null === a || "" === a) return b;
                    for (0 === a.indexOf("?") && (a = a.substring(1)), d = a.toString().split(/[&;]/), c = 0; c < d.length; c++) e = d[c], f = e.split("="), g = f[0], h = -1 === e.indexOf("=") ? null : null === f[1] ? "" : f[1], b.push([g, h]);
                    return b
                },
                c = b(a),
                d = function() {
                    var b, d, a = "";
                    for (b = 0; b < c.length; b++) d = c[b], a.length > 0 && (a += "&"), a += null === d[1] ? d[0] : d.join("=");
                    return a.length > 0 ? "?" + a : a
                },
                e = function(a) {
                    return a = decodeURIComponent(a), a = a.replace("+", " ")
                },
                f = function(a) {
                    var b, d;
                    for (d = 0; d < c.length; d++)
                        if (b = c[d], e(a) === e(b[0])) return b[1]
                },
                g = function(a) {
                    var d, f, b = [];
                    for (d = 0; d < c.length; d++) f = c[d], e(a) === e(f[0]) && b.push(f[1]);
                    return b
                },
                h = function(a, b) {
                    var f, g, h, i, d = [];
                    for (f = 0; f < c.length; f++) g = c[f], h = e(g[0]) === e(a), i = e(g[1]) === e(b), (1 === arguments.length && !h || 2 === arguments.length && !h && !i) && d.push(g);
                    return c = d, this
                },
                i = function(a, b, d) {
                    return 3 === arguments.length && -1 !== d ? (d = Math.min(d, c.length), c.splice(d, 0, [a, b])) : arguments.length > 0 && c.push([a, b]), this
                },
                j = function(a, b, d) {
                    var g, j, f = -1;
                    if (3 === arguments.length) {
                        for (g = 0; g < c.length; g++)
                            if (j = c[g], e(j[0]) === e(a) && decodeURIComponent(j[1]) === e(d)) {
                                f = g;
                                break
                            }
                        h(a, d).addParam(a, b, f)
                    } else {
                        for (g = 0; g < c.length; g++)
                            if (j = c[g], e(j[0]) === e(a)) {
                                f = g;
                                break
                            }
                        h(a), i(a, b, f)
                    }
                    return this
                };
            return {
                getParamValue: f,
                getParamValues: g,
                deleteParam: h,
                addParam: i,
                replaceParam: j,
                toString: d
            }
        },
        c = function(a) {
            "use strict";
            var d = !1,
                e = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi,
                f = function(a) {
                    for (var b = {
                            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                        }, c = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"], e = {
                            name: "queryKey",
                            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                        }, f = b[d ? "strict" : "loose"].exec(a), g = {}, h = 14; h--;) g[c[h]] = f[h] || "";
                    return g[e.name] = {}, g[c[12]].replace(e.parser, function(a, b, c) {
                        b && (g[e.name][b] = c)
                    }), g
                },
                g = f(a || ""),
                h = new b(g.query),
                i = function(a) {
                    return "undefined" != typeof a && (g.protocol = a), g.protocol
                },
                j = null,
                k = function(a) {
                    return "undefined" != typeof a && (j = a), null === j ? -1 !== g.source.indexOf("//") : j
                },
                l = function(a) {
                    return "undefined" != typeof a && (g.userInfo = a), g.userInfo
                },
                m = function(a) {
                    return "undefined" != typeof a && (g.host = a), g.host
                },
                n = function(a) {
                    return "undefined" != typeof a && (g.port = a), g.port
                },
                o = function(a) {
                    return "undefined" != typeof a && (g.path = a), g.path
                },
                p = function(a) {
                    return "undefined" != typeof a && (h = new b(a)), h
                },
                q = function(a) {
                    return "undefined" != typeof a && (g.anchor = a), g.anchor
                },
                r = function(a) {
                    return i(a), this
                },
                s = function(a) {
                    return k(a), this
                },
                t = function(a) {
                    return l(a), this
                },
                u = function(a) {
                    return m(a), this
                },
                v = function(a) {
                    return n(a), this
                },
                w = function(a) {
                    return o(a), this
                },
                x = function(a) {
                    return p(a), this
                },
                y = function(a) {
                    return q(a), this
                },
                z = function(a) {
                    return p().getParamValue(a)
                },
                A = function(a) {
                    return p().getParamValues(a)
                },
                B = function(a, b) {
                    return 2 === arguments.length ? p().deleteParam(a, b) : p().deleteParam(a), this
                },
                C = function(a, b, c) {
                    return 3 === arguments.length ? p().addParam(a, b, c) : p().addParam(a, b), this
                },
                D = function(a, b, c) {
                    return 3 === arguments.length ? p().replaceParam(a, b, c) : p().replaceParam(a, b), this
                },
                E = function(a) {
                    if (void 0 === a) return g.path;
                    if ("/" == a.substring(0, 1)) return g.path = a;
                    var b = g.path.split("/"),
                        c = a.split("/");
                    "" === b.slice(-1)[0] && b.pop();
                    for (var d; d = c.shift();) switch (d) {
                        case "..":
                            b.length > 1 && b.pop();
                            break;
                        case ".":
                            break;
                        default:
                            b.push(d)
                    }
                    return g.path = b.join("/"), this
                },
                F = function() {
                    var a = "",
                        b = function(a) {
                            return null !== a && "" !== a
                        };
                    return b(i()) ? (a += i(), i().indexOf(":") !== i().length - 1 && (a += ":"), a += "//") : k() && b(m()) && (a += "//"), b(l()) && b(m()) && (a += l(), l().indexOf("@") !== l().length - 1 && (a += "@")), b(m()) && (a += m(), b(n()) && (a += ":" + n())), b(o()) ? a += o() : b(m()) && (b(p().toString()) || b(q())) && (a += "/"), b(p().toString()) && (0 !== p().toString().indexOf("?") && (a += "?"), a += p().toString()), b(q()) && (0 !== q().indexOf("#") && (a += "#"), a += q()), a
                },
                G = function(b) {
                    var c = a.match(e) || [];
                    return void 0 === b ? c : c[b] || ""
                },
                H = function() {
                    return new c(F())
                };
            return {
                protocol: i,
                hasAuthorityPrefix: k,
                userInfo: l,
                host: m,
                port: n,
                path: o,
                query: p,
                anchor: q,
                setProtocol: r,
                setHasAuthorityPrefix: s,
                setUserInfo: t,
                setHost: u,
                setPort: v,
                setPath: w,
                setQuery: x,
                setAnchor: y,
                getQueryParamValue: z,
                getQueryParamValues: A,
                deleteQueryParam: B,
                addQueryParam: C,
                replaceQueryParam: D,
                extract: G,
                toPath: E,
                toString: F,
                clone: H
            }
        };
    a.uri = function(a) {
        return new c(a)
    }
}), FD31.plugin("mvc", function($) {
    ! function() {
        var d, a = {
                undHash: /_|-/,
                colons: /::/,
                words: /([A-Z]+)([A-Z][a-z])/g,
                lowUp: /([a-z\d])([A-Z])/g,
                dash: /([a-z\d])([A-Z])/g,
                replacer: /\{([^\}]+)\}/g,
                dot: /\./
            },
            b = function(a, b, c) {
                return void 0 !== a[b] ? a[b] : c && (a[b] = {})
            },
            c = function(a) {
                var b = typeof a;
                return a && ("function" == b || "object" == b)
            },
            e = $.String = $.extend($.String || {}, {
                getObject: d = function(d, e, f) {
                    var i, j, k, g = d ? d.split(a.dot) : [],
                        h = g.length,
                        l = 0;
                    if (e = $.isArray(e) ? e : [e || window], 0 == h) return e[0];
                    for (; i = e[l++];) {
                        for (k = 0; h - 1 > k && c(i); k++) i = b(i, g[k], f);
                        if (c(i) && (j = b(i, g[k], f), void 0 !== j)) return f === !1 && delete i[g[k]], j
                    }
                },
                capitalize: function(a) {
                    return a.charAt(0).toUpperCase() + a.substr(1)
                },
                camelize: function(a) {
                    return a = e.classize(a), a.charAt(0).toLowerCase() + a.substr(1)
                },
                classize: function(b, c) {
                    for (var d = b.split(a.undHash), f = 0; f < d.length; f++) d[f] = e.capitalize(d[f]);
                    return d.join(c || "")
                },
                niceName: function(a) {
                    return e.classize(a, " ")
                },
                underscore: function(b) {
                    return b.replace(a.colons, "/").replace(a.words, "$1_$2").replace(a.lowUp, "$1_$2").replace(a.dash, "_").toLowerCase()
                },
                sub: function(b, c, e) {
                    var f = [];
                    return f.push(b.replace(a.replacer, function(a, b) {
                        var g = d(a, c, "boolean" == typeof e ? !e : e) || d(b, c, "boolean" == typeof e ? !e : e),
                            h = typeof g;
                        return "object" !== h && "function" !== h || null === h ? "" + g : (f.push(g), "")
                    })), f.length <= 1 ? f[0] : f
                },
                _regs: a
            })
    }(),
    function() {
        $.String.rsplit = function(a, b) {
            for (var e, f, c = b.exec(a), d = []; null !== c;) e = c.index, f = b.lastIndex, 0 !== e && (d.push(a.substring(0, e)), a = a.slice(e)), d.push(c[0]), a = a.slice(c[0].length), c = b.exec(a);
            return "" !== a && d.push(a), d
        }
    }(),
    function() {
        var a = /^\d+$/,
            b = /([^\[\]]+)|(\[\])/g,
            c = /\+/g,
            d = /([^?#]*)(#.*)?$/;
        $.String = $.extend($.String || {}, {
            deparam: function(e) {
                if (!e || !d.test(e)) return {};
                for (var h, f = {}, g = e.split("&"), i = 0; i < g.length; i++) {
                    h = f;
                    var j = g[i].split("=");
                    2 != j.length && (j = [j[0], j.slice(1).join("=")]);
                    for (var k = decodeURIComponent(j[0].replace(c, " ")), l = decodeURIComponent(j[1].replace(c, " ")), m = k.match(b), n = 0; n < m.length - 1; n++) {
                        var o = m[n];
                        h[o] || (h[o] = a.test(m[n + 1]) || "[]" == m[n + 1] ? [] : {}), h = h[o]
                    }
                    lastPart = m[m.length - 1], "[]" == lastPart ? h.push(l) : h[lastPart] = l
                }
                return f
            }
        })
    }(),
    function() {
        var a = $.cleanData;
        $.cleanData = function(b) {
            for (var d, c = 0; void 0 !== (d = b[c]); c++) $(d).triggerHandler("destroyed");
            a(b)
        }
    }(),
    function() {
        var a = $.fn.closest;
        $.fn.closest = function(b, c) {
            var e, f, h, j, j, d = {},
                k = !0,
                l = b;
            if ("string" == typeof b && (l = [b]), $.each(l, function(a, c) {
                    if (0 == c.indexOf(">")) {
                        if (-1 != c.indexOf(" ")) throw " closest does not work with > followed by spaces!";
                        d[l[a] = c.substr(1)] = c, "string" == typeof b && (b = c.substr(1)), k = !1
                    }
                }), e = a.call(this, b, c), k) return e;
            for (h = 0; h < e.length;) f = e[h], j = f.selector, void 0 === d[j] || (f.selector = d[j], d[j] = !1, "string" == typeof f.selector && f.elem.parentNode === c) ? h++ : e.splice(h, 1);
            return e
        }
    }(),
    function() {
        $.cookie = function(a, b, c) {
            if ("undefined" == typeof b) {
                var i = null;
                if (document.cookie && "" != document.cookie)
                    for (var j = document.cookie.split(";"), k = 0; k < j.length; k++) {
                        var l = jQuery.trim(j[k]);
                        if (l.substring(0, a.length + 1) == a + "=") {
                            i = decodeURIComponent(l.substring(a.length + 1));
                            break
                        }
                    }
                if (jQuery.evalJSON && i && i.match(/^\s*\{/)) try {
                    i = jQuery.evalJSON(i)
                } catch (m) {}
                return i
            }
            c = c || {}, null === b && (b = "", c.expires = -1), "object" == typeof b && jQuery.toJSON && (b = jQuery.toJSON(b));
            var d = "";
            if (c.expires && ("number" == typeof c.expires || c.expires.toUTCString)) {
                var e;
                "number" == typeof c.expires ? (e = new Date, e.setTime(e.getTime() + 24 * c.expires * 60 * 60 * 1e3)) : e = c.expires, d = "; expires=" + e.toUTCString()
            }
            var f = c.path ? "; path=" + c.path : "",
                g = c.domain ? "; domain=" + c.domain : "",
                h = c.secure ? "; secure" : "";
            document.cookie = [a, "=", encodeURIComponent(b), d, f, g, h].join("")
        }
    }(),
    function() {
        var a = !1,
            b = $.makeArray,
            c = $.isFunction,
            d = $.isArray,
            e = $.extend,
            f = $.String.getObject,
            g = function(a, c) {
                return a.concat(b(c))
            },
            h = /xyz/.test(function() {}) ? /\b_super\b/ : /.*/,
            i = function(a, b, d) {
                d = d || a;
                for (var e in a) d[e] = c(a[e]) && c(b[e]) && h.test(a[e]) ? function(a, c) {
                    return function() {
                        var e, d = this._super;
                        return this._super = b[a], e = c.apply(this, arguments), this._super = d, e
                    }
                }(e, a[e]) : a[e]
            },
            j = "prototype";
        clss = $.Class = function() {
            arguments.length && clss.extend.apply(clss, arguments)
        }, e(clss, {
            proxy: function(a) {
                var e, c = b(arguments);
                return a = c.shift(), d(a) || (a = [a]), e = this,
                    function() {
                        for (var f, j, b = g(c, arguments), h = a.length, i = 0; h > i; i++) j = a[i], j && (f = "string" == typeof j, f && e._set_called && (e.called = j), b = (f ? e[j] : j).apply(e, b || []), h - 1 > i && (b = !d(b) || b._use_call ? [b] : b));
                        return b
                    }
            },
            newInstance: function() {
                var b, a = this.rawInstance();
                return a.setup && (b = a.setup.apply(a, arguments)), a.init && a.init.apply(a, d(b) ? b : arguments), a
            },
            setup: function(a) {
                return this.defaults = e(!0, {}, a.defaults, this.defaults), arguments
            },
            rawInstance: function() {
                a = !0;
                var b = new this;
                return a = !1, b
            },
            extend: function(b, c, d) {
                function p() {
                    return a ? void 0 : this.constructor !== p && arguments.length ? arguments.callee.extend.apply(arguments.callee, arguments) : this.Class.newInstance.apply(this.Class, arguments)
                }
                "string" != typeof b && (d = c, c = b, b = null), d || (d = c, c = null), d = d || {};
                var l, m, n, o, h = this,
                    k = this[j];
                a = !0, o = new this, a = !1, i(d, k, o);
                for (l in this) this.hasOwnProperty(l) && (p[l] = this[l]);
                if (i(c, this, p), b) {
                    var q;
                    c && c.root && (q = c.root, $.isString(q) && (q = f(q, window, !0)));
                    var r = b.split(/\./),
                        m = r.pop(),
                        s = f(r.join("."), q || window, !0),
                        n = s;
                    e(!0, p, s[m]), s[m] = p
                }
                e(p, {
                    prototype: o,
                    namespace: n,
                    shortName: m,
                    constructor: p,
                    fullName: b
                }), p[j].Class = p[j].constructor = p;
                var t = p.setup.apply(p, g([h], arguments));
                return p.init && p.init.apply(p, t || g([h], arguments)), p
            }
        }), clss.callback = clss[j].callback = clss[j].proxy = clss.proxy
    }(),
    function() {
        var w, a = function(a, b, c) {
                var e, f = a.bind && a.unbind ? a : $(d(a) ? [a] : a);
                return 0 === b.indexOf(">") && (b = b.substr(1), e = function(b) {
                        b.target === a && c.apply(this, arguments)
                    }), f.bind(b, e || c),
                    function() {
                        f.unbind(b, e || c), a = b = c = e = null
                    }
            },
            b = $.makeArray,
            c = $.isArray,
            d = $.isFunction,
            e = $.isString,
            f = $.extend,
            g = $.String,
            h = $.each,
            i = g.getObject,
            j = "prototype",
            k = "constructor",
            l = Array[j].slice,
            m = function(a, b, c, e) {
                0 === b.indexOf(">") && (b = (a.data("directSelector") + " " || "") + b);
                var f = a.delegate && a.undelegate ? a : $(d(a) ? [a] : a);
                return f.delegate(b, c, e),
                    function() {
                        f.undelegate(b, c, e), f = a = c = e = b = null
                    }
            },
            n = function(b, c, d, e) {
                return e ? m(b, e, c, d) : a(b, c, d)
            },
            o = function(a, b) {
                var c = "string" == typeof b ? a[b] : b;
                return function() {
                    return a.called = b, c.apply(a, [this.nodeName ? $(this) : this].concat(l.call(arguments, 0)))
                }
            },
            p = /\./g,
            q = /_?controllers?/gi,
            r = function(a) {
                return g.underscore(a.replace($.globalNamespace + ".", "").replace(p, "_").replace(q, ""))
            },
            s = /^\S(.*)\s(.*)/,
            t = /\{([^\}]+)\}/g,
            u = /\{([^\.]+[\.][^\.]+)\}/g,
            v = /^(?:(.*?)\s)?([\w\.\:>]+)$/,
            x = function(a, b) {
                return $.data(a, "controllers", b)
            },
            y = $.globalNamespace + ".Controller";
        $.Controller = function(a) {
            var e, c = b(arguments),
                d = {
                    root: y
                };
            return c.length > 2 ? (d = $.extend(d, c[1]), e = c[2]) : e = c[1], d.namespace && (a = d.namespace + "." + a), $.Controller.Class(a, d, e)
        };
        var z = y + ".Class";
        $.Class(z, {
            setup: function() {
                if (this._super.apply(this, arguments), this.shortName && this.fullName != z) {
                    this._fullName = r(this.fullName), this._shortName = r(this.shortName);
                    var g, f = this;
                    if (e(this.pluginName)) {
                        var i = this._fullName,
                            k = this.pluginName;
                        $.fn[k] || ($.fn[k] = function(a) {
                            var c = b(arguments);
                            if ($.isString(a) && "controller" === a) {
                                var d = x(this[0]),
                                    e = d && d[i];
                                return e
                            }
                            return this.each(function() {
                                var b = x(this),
                                    d = b && b[i];
                                if (d) {
                                    if ($.isString(a)) {
                                        var e = d[a];
                                        return $.isFunction(e) && e.apply(d, c.slice(1)), void 0
                                    }
                                    d.update.apply(d, c)
                                } else f.newInstance.apply(f, [this].concat(c))
                            })
                        })
                    }
                    var l = b(arguments),
                        m = this[j],
                        n = l[l.length > 3 ? 3 : 2];
                    d(n) && (this.protoFactory = n, m = this.protoFactory.call(this, null)), this.actions = {};
                    for (g in m) "constructor" != g && d(m[g]) && this._isAction(g) && (this.actions[g] = this._action(g));
                    $.module("$:/Controllers/" + this.fullName).resolve(this)
                }
            },
            hookup: function(a) {
                return new this(a)
            },
            _isAction: function(a) {
                return s.test(a) ? !0 : $.inArray(a, this.listensTo) > -1 || $.event.special[a] || A[a]
            },
            _action: function(a, b) {
                if (t.lastIndex = 0, !b && t.test(a)) return null;
                a = a.replace("{self} ", "");
                var d = a;
                if (b) {
                    var e = !1;
                    if (u.test(a)) {
                        var f, h = "";
                        d = a.replace(u, function(a, c) {
                            var d = c.split(".");
                            return f = b["{" + d[0] + "}"] || {}, $.isControllerInstance(f) && (h = (f[d[1]] || {}).selector), h
                        }).match(v), e = !!h, d = [f.element].concat(d || [])
                    }
                    e || (d = g.sub(a, [b, window]))
                }
                var i = c(d),
                    j = (i ? d[1] : d).match(v),
                    k = j[2],
                    l = A[k] || w;
                return {
                    processor: l,
                    parts: j,
                    delegate: i ? d[0] : void 0
                }
            },
            processors: {},
            listensTo: [],
            defaults: {},
            hostname: "parent"
        }, {
            setup: function(a, c) {
                var d = this,
                    g = d[k],
                    i = d[j],
                    l = g._fullName;
                d.instanceId = $.uid(l + "_");
                var m = d.options = f(!0, {}, g.defaults, g.defaultOptions, c),
                    n = d.element = $(a);
                if (g.protoFactory && (i = g.protoFactory.apply(g, [d, m, n]), f(!0, d, i)), (x(a) || x(a, {}))[l] = d, !n.data("directSelector")) {
                    var o = $.uid("DS");
                    n.addClass(o).data("directSelector", "." + o)
                }
                for (name in m)
                    if (name.match(/^\{.+\}$/)) {
                        var p = name.replace(/^\{|\}$/g, ""),
                            q = m[name];
                        d[p] = e(q) ? function(a, b, c) {
                            b = /^(\.|\#)$/.test(b) ? b + c : b;
                            var d = function(c) {
                                var d = a.element.find(b);
                                return c && (d = d.filter(c)), d
                            };
                            return d.selector = b, d.css = function() {
                                var a = d.cssRule;
                                if (!a) {
                                    var c = n.data("directSelector"),
                                        e = $.map(b.split(","), function(a) {
                                            return c + " " + a
                                        });
                                    a = d.cssRule = $.cssRule(e), a.important = !0
                                }
                                return arguments.length ? a.css.apply(a, arguments) : a
                            }, d
                        }(d, q, p) : q
                    }
                var r = m.view,
                    s = d.view;
                d.view = function() {
                    return s.apply(this, arguments)
                }, h(r || {}, function(a) {
                    d.view[a] = function(c) {
                        var e = b(arguments);
                        return $.isBoolean(c) ? e = e.slice(1) : c = !1, d.view.apply(d, [c, a].concat(e))
                    }
                }), $.extend(d, m.controller), d.pluginInstances = {}, d.called = "init", d._bind();
                var t = d.init || $.noop;
                return d.init = function() {
                    return d.init = t, result = t.apply(d, arguments), d.trigger("init." + g.fullName.toLowerCase(), [d]), result
                }, [n, m].concat(b(arguments).slice(2))
            },
            on: function(a) {
                var c = b(arguments),
                    d = this.element,
                    f = c.length;
                return 2 == f ? this._binder(d, a, c[1]) : 3 == f && e(c[1]) ? this._binder(d, a, c[2], c[1]) : this._binder(c[1], a, c[2])
            },
            _bind: function() {
                var a = this,
                    b = a[k],
                    c = b.actions,
                    d = a._bindings = [],
                    e = a.element;
                h(c || {}, function(f) {
                    if (c.hasOwnProperty(f)) {
                        var h = b.actions[f] || b._action(f, a.options);
                        $.isControllerInstance(h.delegate) && (h.delegate = h.delegate.element), d.push(h.processor(h.delegate || e, h.parts[2], h.parts[1], f, a))
                    }
                });
                var f = o(this, "destroy");
                return e.bind("destroyed", f), d.push(function(a) {
                    $(a).unbind("destroyed", f)
                }), d.length
            },
            _binder: function(a, b, c, d) {
                return "string" == typeof c && (c = o(this, c)), this._bindings.push(n(a, b, c, d)), this._bindings.length
            },
            _unbind: function() {
                var a = this.element[0];
                h(this._bindings, function(b, c) {
                    c(a)
                }), this._bindings = []
            },
            trigger: function(a) {
                var b = this.element;
                if (b) {
                    var c = $.Event(a);
                    return b.trigger.apply(b, [c].concat($.makeArray(arguments).slice(1))), c
                }
            },
            delegate: function(a, b, c, d) {
                return "string" == typeof a && (d = c, c = b, b = a, a = this.element), this._binder(a, c, d, b)
            },
            update: function(a) {
                f(this.options, a), this._unbind(), this._bind()
            },
            destroy: function() {
                if (!this._destroyed) {
                    var a = this[k]._fullName;
                    for (pname in this.pluginInstances) this.removePlugin(pname);
                    this._destroyed = !0, this.element.removeClass(a), this._unbind(), delete this._actions, delete this.element.data("controllers")[a], $(this).triggerHandler("destroyed"), this.element = $()
                }
            },
            find: function(a) {
                return this.element.find(a)
            },
            view: function() {
                var c, a = b(arguments),
                    d = a,
                    e = !1,
                    f = this[k].component || $,
                    g = "",
                    h = this.options.view || {};
                return "boolean" == typeof a[0] && (e = a[0], d = a.slice(1)), c = d[0] = h[d[0]], void 0 == c ? e ? "" : $("") : (g = f.View.apply(f, d), e ? g : $($.parseHTML($.trim(g))))
            },
            getPlugin: function(a) {
                return this.pluginInstances[a]
            },
            addSubscriber: function(a) {
                var b = $.isArray(a) ? a : [a || {}],
                    c = this,
                    d = this.Class.hostname,
                    e = {};
                return e["{" + d + "}"] = c, $.map(b, function(a) {
                    return $.isControllerInstance(a) ? a.options[d] === this ? a : (a[d] = c, a.update(e)) : !1
                }), b
            },
            addPlugin: function(a, b, c) {
                if (a) {
                    (!b && !c || $.isPlainObject(b)) && (c = b, b = [this.Class.root, this.Class.fullName, $.String.capitalize(a)].join(".")), $.isString(b) && (b = $.getController(b));
                    var e = $.isControllerInstance(b);
                    if (d(b) || e) {
                        c = $.extend(!0, {
                            element: this.element
                        }, c, (this.options.plugin || {})[a] || {});
                        var f = e ? "instance" : $.isController(b) ? "controller" : "function";
                        this.trigger("addPlugin", [a, b, c, f]);
                        var g = this.Class.hostname;
                        c["{" + g + "}"] = this;
                        var h;
                        switch (f) {
                            case "instance":
                                h = b, b.update(c), b[g] = this;
                                break;
                            case "controller":
                                h = c.element.addController(b, c);
                                break;
                            case "function":
                                h = b(this, c)
                        }
                        if (h) {
                            if (this.pluginInstances[a] = h, "function" !== f) {
                                var i = {};
                                i["{" + a + "}"] = h, this.update(i)
                            }
                            return this.trigger("registerPlugin", [a, h, c, f]), h
                        }
                    }
                }
            },
            removePlugin: function(a) {
                var b = this.getPlugin(a);
                if (b) return this.trigger("removePlugin", [a, b]), delete this.pluginInstances[a], $.isFunction(b.destroy) ? b.destroy() : null
            },
            invokePlugin: function(a, b, c) {
                var d = this.getPlugin(a);
                if (d && $.isFunction(d[b])) return this.trigger("invokePlugin", [a, d, c]), d[b].apply(this, c)
            },
            getMessageGroup: function() {
                var a = $.isFunction(this.messageGroup) ? this.messageGroup() : this.element.find("[data-message-group]");
                return a.length < 1 && (a = $("<div data-message-group></div>").prependTo(this.element)), a
            },
            setMessage: function(a, b) {
                var c = {
                        type: "warning",
                        message: "",
                        parent: this.getMessageGroup(),
                        element: $('<div class="alert fade in"><button type="button" class="close" data-foundry-dismiss="alert">\xd7</button></div>')
                    },
                    d = {},
                    e = $.isDeferred(a);
                d = $.isPlainObject(a) && !e ? a : {
                    message: a,
                    type: b || "warning"
                };
                var f = $.extend({}, c, d),
                    g = f.element;
                if ($.isDeferred(a)) {
                    var h = arguments.callee,
                        i = this;
                    a.done(function(a, b) {
                        f.message = a, f.type = b || "warning", h.call(i, f), g.show()
                    })
                } else g.addClass("alert-" + f.type).append(f.message), $("html").has(g).length < 1 && g.appendTo(f.parent);
                return g
            },
            clearMessage: function() {
                this.getMessageGroup().empty()
            },
            _set_called: !0
        });
        var A = $.Controller.Class.processors,
            w = function(a, b, c, d, e) {
                return n(a, b, o(e, d), c)
            };
        h("change click contextmenu dblclick keydown keyup keypress mousedown mousemove mouseout mouseover mouseup reset resize scroll select submit focusin focusout mouseenter mouseleave".split(" "), function(a, b) {
            A[b] = w
        });
        var B = function(a) {
                return a.replace("$.Controller", y)
            },
            C = function(a) {
                return e(a) && (a = B(a), a = i(a) || i(y + "." + a)), D(a) ? a : void 0
            },
            D = function(a) {
                return d(a) && a.hasOwnProperty("_fullName")
            },
            E = function(a) {
                return $.map(a, function(a) {
                    return c(a) ? E(a) : C(a)
                })
            };
        $.getController = C, $.isController = function(a) {
            return !!C(a)
        }, $.isControllerInstance = function(a) {
            return a && a[k] && D(a[k])
        }, $.isControllerOf = function(a, b) {
            if (!b) return !1;
            c(b) || (b = [b]);
            for (var d = 0; d < b.length; d++) {
                var e = C(b[d]);
                if (a instanceof e) return !0
            }
            return !1
        }, $.fn.extend({
            controllers: function() {
                var a = E(b(arguments)),
                    c = [];
                return this.each(function() {
                    var b = $.data(this, "controllers");
                    h(b || {}, function(d, e) {
                        b.hasOwnProperty(d) && (!a.length || $.isControllerOf(e, a)) && c.push(e)
                    })
                }), c
            },
            controller: function(a, b) {
                return void 0 === b ? this.controllers(a)[0] : (this.addController.apply(this, arguments), this)
            },
            hasController: function(a) {
                var b = (C(a) || {})._fullName || (e(a) ? r(B(a)) : "");
                return b ? ($(this).data("controllers") || {}).hasOwnProperty(b) : !1
            },
            addController: function(a, b, c) {
                var e = C(a);
                if (e) {
                    var f = [];
                    return this.each(function() {
                        if (1 === this.nodeType && "SCRIPT" != this.nodeName) {
                            var g = $(this).controller(a);
                            if (g) return f.push(g), void 0;
                            var h = new e(this, b);
                            d(c) && c.apply(h, [$(this), h]), f.push(h)
                        }
                    }), f.length > 1 ? f : f[0]
                }
            },
            removeController: function(a) {
                return this.each(function() {
                    for (var b = $(this).controllers(a); b.length;) b.shift().destroy()
                }), this
            },
            addControllerWhenAvailable: function(a) {
                var b = this,
                    c = arguments,
                    d = $.Deferred();
                return $.isController(a) && (a = a.fullName), e(a) ? ($.module("$:/Controllers/" + a).pipe(function() {
                    var a = b.addController.apply(b, c);
                    d.resolveWith(a, [b, a])
                }, d.reject, d.fail), d) : d.reject()
            },
            implement: function() {
                return this.addController.apply(this, arguments), this
            }
        })
    }(),
    function() {
        var a = function(a) {
                return a.replace(/^\/\//, "").replace(/[\/\.]/g, "_")
            },
            b = $.makeArray,
            c = 1,
            d = $.View = function(a, c, d, e) {
                "function" == typeof d && (e = d, d = void 0);
                var j = h(c);
                if (j.length) {
                    var k = $.Deferred();
                    return j.push(f(a, !0)), $.when.apply($, j).then(function(a) {
                        var j, f = b(arguments),
                            h = f.pop()[0];
                        if (g(c)) c = i(a);
                        else
                            for (var l in c) g(c[l]) && (c[l] = i(f.shift()));
                        j = h(c, d), k.resolve(j), e && e(j)
                    }), k.promise()
                }
                var l, m = "function" == typeof e,
                    k = f(a, m);
                return m ? (l = k, k.done(function(a) {
                    e(a(c, d))
                })) : k.done(function(a) {
                    l = a(c, d)
                }), l
            },
            e = function(a, b) {
                if (!a.match(/[^\s]/)) throw "$.View ERROR: There is no template or an empty template at " + b
            },
            f = function(a, b) {
                return $.ajax({
                    url: a,
                    dataType: "view",
                    async: b
                })
            },
            g = function(a) {
                return a && $.isFunction(a.always)
            },
            h = function(a) {
                var b = [];
                if (g(a)) return [a];
                for (var c in a) g(a[c]) && b.push(a[c]);
                return b
            },
            i = function(a) {
                return $.isArray(a) && 3 === a.length && "success" === a[1] ? a[0] : a
            };
        $.ajaxTransport("view", function(b, c) {
            var h, i, j, k, f = c.url,
                g = f.match(/\.[\w\d]+$/),
                l = function(a) {
                    var b = h.renderer(j, a);
                    return d.cache && (d.cached[j] = b), {
                        view: b
                    }
                };
            if ((i = document.getElementById(f)) && (g = "." + i.type.match(/\/(x\-)?(.+)/)[2]), g || (g = d.ext, f += d.ext), j = a(f), f.match(/^\/\//)) {
                var m = f.substr(2);
                f = "undefined" == typeof steal ? f = "/" + m : steal.root.mapJoin(m) + ""
            }
            h = d.types[g];
            var n = $.template()[c.url];
            return {
                send: function(a, b) {
                    return n ? (h = d.types["." + n.type], b(200, "success", l(n.content))) : d.cached[j] ? b(200, "success", {
                        view: d.cached[j]
                    }) : (i ? b(200, "success", l(i.innerHTML)) : k = $.ajax({
                        async: c.async,
                        url: f,
                        dataType: "text",
                        error: function() {
                            e("", f), b(404)
                        },
                        success: function(a) {
                            e(a, f), b(200, "success", l(a))
                        }
                    }), void 0)
                },
                abort: function() {
                    k && k.abort()
                }
            }
        }), $.extend(d, {
            hookups: {},
            hookup: function(a) {
                var b = ++c;
                return d.hookups[b] = a, b
            },
            cached: {},
            cache: !0,
            register: function(b) {
                this.types["." + b.suffix] = b, window.steal && steal.type(b.suffix + " view js", function(b, c) {
                    var f = d.types["." + b.type],
                        g = a(b.rootSrc + "");
                    b.text = f.script(g, b.text), c()
                })
            },
            types: {},
            ext: ".ejs",
            registerScript: function(a, b, c) {
                return "$.View.preload('" + b + "'," + d.types["." + a].script(b, c) + ");"
            },
            preload: function(a, b) {
                d.cached[a] = function(a, c) {
                    return b.call(a, a, c)
                }
            }
        }), window.steal && steal.type("view js", function(b, c) {
            var f = d.types["." + b.type],
                g = a(b.rootSrc + "");
            b.text = "steal('" + (f.plugin || "jquery/view/" + b.type) + "').then(function($){$.View.preload('" + g + "'," + b.text + ");\n})", c()
        });
        var j, k, l, m, n, o, p, r = {
            val: !0,
            text: !0
        };
        j = function(a) {
            var c = $.fn[a];
            $.fn[a] = function() {
                var f, h, j, e = b(arguments),
                    i = this;
                if (g(e[0])) return e[0].done(function(a) {
                    k.call(i, [a], c)
                }), this;
                if (l(e)) {
                    if (f = o(e)) return h = e[f], e[f] = function(a) {
                        k.call(i, [a], c), h.call(i, a)
                    }, d.apply(d, e), this;
                    if (j = d.apply(d, e), g(j)) return j.done(function(a) {
                        k.call(i, [a], c)
                    }), this;
                    e = [j]
                }
                return r[a] ? c.apply(this, e) : k.call(this, e, c)
            }
        }, k = function(a, b) {
            var c, f;
            for (var g in d.hookups) break;
            return g && a[0] && m(a[0]) && (f = d.hookups, d.hookups = {}, a[0] = $(a[0])), c = b.apply(this, a), f && p(a[0], f), c
        }, l = function(a) {
            var b = typeof a[1];
            return "string" == typeof a[0] && ("object" == b || "function" == b) && !n(a[1])
        }, n = function(a) {
            return a.nodeType || a.jquery
        }, m = function(a) {
            return n(a) ? !0 : "string" == typeof a ? (a = $.trim(a), "<" === a.substr(0, 1) && ">" === a.substr(a.length - 1, 1) && a.length >= 3) : !1
        }, o = function(a) {
            return "function" == typeof a[3] ? 3 : "function" == typeof a[2] && 2
        }, p = function(a, b) {
            var c, e, g, h, f = 0;
            for (a = a.filter(function() {
                    return 3 != this.nodeType
                }), c = a.add("[data-view-id]", a), e = c.length; e > f; f++) c[f].getAttribute && (g = c[f].getAttribute("data-view-id")) && (h = b[g]) && (h(c[f], g), delete b[g], c[f].removeAttribute("data-view-id"));
            $.extend(d.hookups, b)
        }, $.fn.hookup = function() {
            var a = d.hookups;
            return d.hookups = {}, p(this, a), this
        }, $.each(["prepend", "append", "after", "before", "text", "html", "replaceWith", "val"], function(a, b) {
            j(b)
        })
    }(),
    function() {
        var myEval = function(script) {
                eval(script)
            },
            rSplit = $.String.rsplit,
            extend = $.extend,
            isArray = $.isArray,
            returnReg = /\r\n/g,
            retReg = /\r/g,
            newReg = /\n/g,
            nReg = /\n/,
            slashReg = /\\/g,
            quoteReg = /"/g,
            singleQuoteReg = /'/g,
            tabReg = /\t/g,
            leftBracket = /\{/g,
            rightBracket = /\}/g,
            quickFunc = /\s*\(([\$\w]+)\)\s*->([^\n]*)/,
            clean = function(a) {
                return a.replace(slashReg, "\\\\").replace(newReg, "\\n").replace(quoteReg, '\\"').replace(tabReg, "\\t")
            },
            escapeHTML = function(a) {
                return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(quoteReg, "&#34;").replace(singleQuoteReg, "&#39;")
            },
            $View = $.View,
            bracketNum = function(a) {
                var b = a.match(leftBracket),
                    c = a.match(rightBracket);
                return (b ? b.length : 0) - (c ? c.length : 0)
            },
            EJS = function(a) {
                if (this.constructor != EJS) {
                    var b = new EJS(a);
                    return function(a, c) {
                        return b.render(a, c)
                    }
                }
                return "function" == typeof a ? (this.template = {
                    fn: a
                }, void 0) : (extend(this, EJS.options, a), this.template = compile(this.text, this.type, this.name), void 0)
            };
        $ && ($.EJS = EJS), EJS.prototype.render = function(a, b) {
            a = a || {}, this._extra_helpers = b;
            var c = new EJS.Helpers(a, b || {});
            return this.template.fn.call(a, a, c)
        }, extend(EJS, {
            text: function(a) {
                if ("string" == typeof a) return a;
                if (null === a || void 0 === a) return "";
                var b = a.hookup && function(b, c) {
                    a.hookup.call(a, b, c)
                } || "function" == typeof a && a || isArray(a) && function(b, c) {
                    for (var d = 0; d < a.length; d++) a[d].hookup ? a[d].hookup(b, c) : a[d](b, c)
                };
                return b ? "data-view-id='" + $View.hookup(b) + "'" : a.toString ? a.toString() : ""
            },
            clean: function(a) {
                return "string" == typeof a ? escapeHTML(a) : "number" == typeof a ? a : EJS.text(a)
            },
            options: {
                type: "[",
                ext: ".ejs"
            }
        });
        var scan = function(a, b, c) {
                for (var d = rSplit(b, nReg), e = 0; e < d.length; e++) scanline(a, d[e], c)
            },
            scanline = function(a, b, c) {
                a.lines++;
                for (var e, d = rSplit(b, a.splitter), f = 0; f < d.length; f++) e = d[f], null !== e && c(e, a)
            },
            makeScanner = function(a, b) {
                var c = {};
                return extend(c, {
                    left: a + "%",
                    right: "%" + b,
                    dLeft: a + "%%",
                    dRight: "%%" + b,
                    eeLeft: a + "%==",
                    eLeft: a + "%=",
                    cmnt: a + "%#",
                    cleanLeft: a + "%~",
                    scan: scan,
                    lines: 0
                }), c.splitter = new RegExp("(" + [c.dLeft, c.dRight, c.eeLeft, c.eLeft, c.cmnt, c.left, c.right + "\n", c.right, "\n"].join(")|(").replace(/\[/g, "\\[").replace(/\]/g, "\\]") + ")"), c
            },
            compile = function(a, b) {
                a = a.replace(returnReg, "\n").replace(retReg, "\n"), b = b || "[";
                var d = "___v1ew.push(",
                    e = d,
                    f = "var ___v1ew = [];",
                    g = "return ___v1ew.join('')",
                    h = new EJS.Buffer([f], []),
                    i = "",
                    j = function(a) {
                        h.push(d, '"', clean(a), '");')
                    },
                    k = null,
                    l = function() {
                        i = ""
                    },
                    m = "));",
                    n = [];
                scan(makeScanner(b, "[" === b ? "]" : ">"), a || "", function(a, b) {
                    var c;
                    if (null === k) switch (a) {
                        case "\n":
                            i += "\n", j(i), h.cr(), l();
                            break;
                        case b.left:
                        case b.eLeft:
                        case b.eeLeft:
                        case b.cmnt:
                            k = a, i.length > 0 && j(i), l();
                            break;
                        case b.dLeft:
                            i += b.left;
                            break;
                        default:
                            i += a
                    } else switch (a) {
                        case b.right:
                            switch (k) {
                                case b.left:
                                    c = bracketNum(i);
                                    var d = n.length && -1 == c ? n.pop() : ";";
                                    d === m && h.push(g), h.push(i, d), 1 === c && n.push(";");
                                    break;
                                case b.eLeft:
                                    if (c = bracketNum(i), c && n.push(m), quickFunc.test(i)) {
                                        var o = i.match(quickFunc);
                                        i = "function(__){var " + o[1] + "=$(__);" + o[2] + "}"
                                    }
                                    h.push(e, $.globalNamespace + ".EJS.clean(", i, c ? f : m);
                                    break;
                                case b.eeLeft:
                                    c = bracketNum(i), c && n.push(m), h.push(e, $.globalNamespace + ".EJS.text(", i, c ? f : m)
                            }
                            k = null, l();
                            break;
                        case b.dRight:
                            i += b.right;
                            break;
                        default:
                            i += a
                    }
                }), i.length > 0 && h.push(d, '"', clean(i) + '");');
                var o = h.close(),
                    p = {
                        out: "try { with(_VIEW) { with (_CONTEXT) {" + o + " " + g + "}}}catch(e){e.lineNumber=null;throw e;}"
                    };
                return myEval.call(p, "this.fn = (function(_CONTEXT,_VIEW){ var $ = " + $.globalNamespace + ";" + p.out + "});"), p
            };
        EJS.Buffer = function(a, b) {
            this.line = [], this.script = [], this.post = b, this.push.apply(this, a)
        }, EJS.Buffer.prototype = {
            push: function() {
                this.line.push.apply(this.line, arguments)
            },
            cr: function() {
                this.script.push(this.line.join(""), "\n"), this.line = []
            },
            close: function() {
                return this.line.length > 0 && (this.script.push(this.line.join("")), this.line = []), this.post.length && this.push.apply(this, this.post), this.script.push(";"), this.script.join("")
            }
        }, EJS.Helpers = function(a, b) {
            this._data = a, this._extras = b, extend(this, b)
        }, EJS.Helpers.prototype = {
            plugin: function() {
                var b = $.makeArray(arguments),
                    c = b.shift();
                return function(a) {
                    var d = $(a);
                    d[c].apply(d, b)
                }
            },
            view: function(a, b, c) {
                return c = c || this._extras, b = b || this._data, $View(a, b, c)
            }
        }, $View.register({
            suffix: "ejs",
            script: function(a, b) {
                return $.globalNamespace + ".EJS(function(_CONTEXT,_VIEW) { " + new EJS({
                    text: b,
                    name: a
                }).template.out + " })"
            },
            renderer: function(a, b) {
                return EJS({
                    text: b,
                    name: a
                })
            }
        })
    }(),
    function() {
        var a = $.isArray,
            b = function(a) {
                return "object" == typeof a && null !== a && a
            },
            c = $.makeArray,
            d = $.each,
            e = function(b, c, d) {
                return b instanceof $.Observe ? f([b], d._namespace) : b = a(b) ? new $.Observe.List(b) : new $.Observe(b), b.bind("change" + d._namespace, function(a) {
                    var f = $.makeArray(arguments),
                        a = f.shift();
                    f[0] = "*" === c ? d.indexOf(b) + "." + f[0] : c + "." + f[0], $.event.trigger(a, f, d)
                }), b
            },
            f = function(a, b) {
                for (var c, d = 0; d < a.length; d++) c = a[d], c && c.unbind && c.unbind("change" + b)
            },
            g = 0,
            h = null,
            i = function() {
                return h ? void 0 : (h = [], !0)
            },
            j = function(a, b, c) {
                return a._init ? void 0 : h ? (h.push({
                    t: a,
                    ev: b,
                    args: c
                }), void 0) : $.event.trigger(b, c, a, !0)
            },
            k = 0,
            l = function() {
                var c, a = h.length,
                    b = h.slice(0);
                h = null, k++;
                for (var d = 0; a > d; d++) c = b[d], $.event.trigger({
                    type: c.ev,
                    batchNum: k
                }, c.args, c.t)
            },
            m = function(a, c, d) {
                return a.each(function(a, e) {
                    d[a] = b(e) && "function" == typeof e[c] ? e[c]() : e
                }), d
            };
        $.Class($.globalNamespace + ".Observe", {
            init: function(a) {
                this._data = {}, this._namespace = ".observe" + ++g, this._init = !0, this.attrs(a), delete this._init
            },
            attr: function(a, b) {
                return void 0 === b ? this._get(a) : (this._set(a, b), this)
            },
            each: function() {
                return d.apply(null, [this.__get()].concat(c(arguments)))
            },
            removeAttr: function(b) {
                var c = a(b) ? b : b.split("."),
                    d = c.shift(),
                    e = this._data[d];
                return c.length ? e.removeAttr(c) : (delete this._data[d], j(this, "change", [d, "remove", void 0, e]), e)
            },
            _get: function(b) {
                var c = a(b) ? b : ("" + b).split("."),
                    d = this.__get(c.shift());
                return c.length ? d ? d._get(c) : void 0 : d
            },
            __get: function(a) {
                return a ? this._data[a] : this._data
            },
            _set: function(c, d) {
                var g = a(c) ? c : ("" + c).split("."),
                    h = g.shift(),
                    i = this.__get(h);
                if (b(i) && g.length) i._set(g, d);
                else {
                    if (g.length) throw "jQuery.Observe: set a property on an object that does not exist";
                    if (d !== i) {
                        var k = this.__get().hasOwnProperty(h) ? "set" : "add";
                        this.__set(h, b(d) ? e(d, h, this) : d), j(this, "change", [h, k, d, i]), i && f([i], this._namespace)
                    }
                }
            },
            __set: function(a, b) {
                this._data[a] = b, a in this.constructor.prototype || (this[a] = b)
            },
            bind: function() {
                return $.fn.bind.apply($([this]), arguments), this
            },
            unbind: function() {
                return $.fn.unbind.apply($([this]), arguments), this
            },
            serialize: function() {
                return m(this, "serialize", {})
            },
            attrs: function(a, c) {
                if (void 0 === a) return m(this, "attrs", {});
                a = $.extend(!0, {}, a);
                var d, e = i();
                for (d in this._data) {
                    var f = this._data[d],
                        g = a[d];
                    void 0 !== g ? (b(f) && b(g) ? f.attrs(g, c) : f != g && this._set(d, g), delete a[d]) : c && this.removeAttr(d)
                }
                for (var d in a) g = a[d], this._set(d, g);
                e && l()
            }
        });
        var n = $.Observe($.globalNamespace + ".Observe.List", {
                init: function(a, b) {
                    this.length = 0, this._namespace = ".list" + ++g, this._init = !0, this.bind("change", this.proxy("_changes")), this.push.apply(this, c(a || [])), $.extend(this, b), this.comparator && this.sort(), delete this._init
                },
                _changes: function(a, b, c, d, e) {
                    if (this.comparator && /^\d+./.test(b)) {
                        var f = +/^\d+/.exec(b)[0],
                            g = this[f],
                            h = this.sortedIndex(g);
                        if (h !== f) return [].splice.call(this, f, 1), [].splice.call(this, h, 0, g), j(this, "move", [g, h, f]), a.stopImmediatePropagation(), j(this, "change", [b.replace(/^\d+/, h), c, d, e]), void 0
                    } - 1 === b.indexOf(".") && ("add" === c ? j(this, c, [d, +b]) : "remove" === c && j(this, c, [e, +b]))
                },
                sortedIndex: function(a) {
                    for (var d, b = a.attr(this.comparator), c = 0, d = 0; d < this.length; d++)
                        if (a !== this[d]) {
                            if (b <= this[d].attr(this.comparator)) return d + c
                        } else c = -1;
                    return d + c
                },
                __get: function(a) {
                    return a ? this[a] : this
                },
                __set: function(a, b) {
                    this[a] = b
                },
                serialize: function() {
                    return m(this, "serialize", [])
                },
                splice: function(a, d) {
                    var h, g = c(arguments);
                    for (h = 2; h < g.length; h++) {
                        var i = g[h];
                        b(i) && (g[h] = e(i, "*", this))
                    }
                    void 0 === d && (d = g[1] = this.length - a);
                    var k = [].splice.apply(this, g);
                    return d > 0 && (j(this, "change", ["" + a, "remove", void 0, k]), f(k, this._namespace)), g.length > 2 && j(this, "change", ["" + a, "add", g.slice(2), k]), k
                },
                attrs: function(a, c) {
                    if (void 0 === a) return m(this, "attrs", []);
                    a = a.slice(0);
                    for (var d = Math.min(a.length, this.length), e = i(), f = 0; d > f; f++) {
                        var g = this[f],
                            h = a[f];
                        b(g) && b(h) ? g.attrs(h, c) : g != h && this._set(f, h)
                    }
                    a.length > this.length ? this.push(a.slice(this.length)) : a.length < this.length && c && this.splice(a.length), e && l()
                },
                sort: function(a, b) {
                    {
                        var c = this.comparator,
                            d = c ? [function(a, b) {
                                return a = a[c], b = b[c], a === b ? 0 : b > a ? -1 : 1
                            }] : [];
                        [].sort.apply(this, d)
                    }!b && j(this, "reset")
                }
            }),
            o = function(a) {
                return a[0] && $.isArray(a[0]) ? a[0] : c(a)
            };
        d({
            push: "length",
            unshift: 0
        }, function(a, c) {
            n.prototype[a] = function() {
                for (var d = o(arguments), f = c ? this.length : 0, g = 0; g < d.length; g++) {
                    var h = d[g];
                    b(h) && (d[g] = e(h, "*", this))
                }
                if (1 == d.length && this.comparator) {
                    var i = this.sortedIndex(d[0]);
                    return this.splice(i, 0, d[0]), this.length
                }
                var k = [][a].apply(this, d);
                return this.comparator && d.length > 1 ? (this.sort(null, !0), j(this, "reset", [d])) : j(this, "change", ["" + f, "add", d, void 0]), k
            }
        }), d({
            pop: "length",
            shift: 0
        }, function(a, b) {
            n.prototype[a] = function() {
                var c = o(arguments),
                    d = b && this.length ? this.length - 1 : 0,
                    e = [][a].apply(this, c);
                return j(this, "change", ["" + d, "remove", void 0, [e]]), e && e.unbind && e.unbind("change" + this._namespace), e
            }
        }), n.prototype.indexOf = [].indexOf || function(a) {
            return $.inArray(a, this)
        }, $.O = function(b, c) {
            return a(b) || b instanceof $.Observe.List ? new $.Observe.List(b, c) : new $.Observe(b, c)
        }
    }()
}), FD31.plugin("joomla", function(a) {
    var b = {
            squeezebox: function() {
                return c.isJoomla15 ? window.parent.document.getElementById("sbox-window") : window.parent.SqueezeBox
            }
        },
        c = a.Joomla = function(d, e) {
            if (a.isFunction(e)) {
                var f = e;
                return c.isJoomla15 ? window[d] = f : window.Joomla[d] = f, void 0
            }
            var d = b[d] || (c.isJoomla15 ? window[d] : window.Joomla[d]);
            return a.isFunction(d) ? d.apply(window, e) : void 0
        },
        d = parseFloat(a.joomla.version);
    c.isJoomla15 = 1.5 >= d, c.isJoomla25 = d >= 1.6 && 2.5 >= d, c.isJoomla30 = d >= 3
}), FD31.plugin("module", function(a) {
    var b = function(b) {
        var c = this,
            d = a.Callbacks("once memory");
        a.extend(this, a.Deferred(), {
            name: b,
            status: "pending",
            ready: function(b) {
                b === !0 && d.fire.call(c, a), a.isFunction(b) && d.add(b)
            }
        }), c.then(function() {
            c.exports = this, c.status = "resolved"
        }, function() {
            c.status = "rejected"
        });
        var e = c.done;
        c.done = function() {
            c.required = !0;
            var b = c.factory;
            return b && "ready" === c.status && b.call(c, a), c.done = e, c.done.apply(this, arguments)
        }
    };
    a.module = function() {
        var c = function(b, d) {
            var e;
            if ("string" == typeof b) {
                if (e = c.get(b), void 0 === d) return e;
                if (a.isFunction(d)) return "resolved" == e.status ? e : (e.factory = d, e.status = "ready", e.ready("true"), e.required && (e.status = "executing", d.call(e, a)), e)
            }
            if (a.isArray(b)) {
                var f = a.map(b, function(b) {
                    var d = c.get(a.isString(b) ? b : b.name);
                    if (d) return "pending" === d.status && (d.status = "ready"), a.isPlainObject(b) ? b : void 0
                });
                a.each(f, function(a, b) {
                    c(b.name, b.factory)
                })
            }
        };
        return a.extend(c, {
            registry: {},
            get: function(b) {
                return b ? (a.isModule(b) && (b = b.replace("module://", "")), c.registry[b] || c.create(b)) : void 0
            },
            create: function(a) {
                return c.registry[a] = new b(a)
            },
            remove: function(a) {
                delete c.registry[a]
            }
        }), c
    }(), a.isModule = function(c) {
        return a.isString(c) ? !!c.match("module://") : c && c instanceof b
    }
}), FD31.plugin("script", function(a) {
    a.script = function() {
        {
            var b = function(a) {
                    if (void 0 !== a) {
                        "string" == typeof a && (a = {
                            url: a
                        });
                        var b = new c(a);
                        return b
                    }
                },
                c = function(b) {
                    var c = a.extend(this, b);
                    c.manager = a.Deferred(), a.extend(c, c.manager.promise()), c.load()
                },
                d = document.getElementsByTagName("head")[0];
            document.getElementsByTagName("base")[0]
        }
        return a.extend(c.prototype, {
            timeout: 7e3,
            retry: 3,
            retryCount: 1,
            type: "text/javascript",
            async: !1,
            charset: "UTF-8",
            verbose: !1,
            insert: function() {
                var a = this.node;
                d.appendChild(a)
            },
            remove: function() {
                var a = this.node;
                setTimeout(function() {
                    a.onload = a.onerror = a.onreadystatechange = null;
                    try {
                        d.removeChild(a)
                    } catch (b) {}
                }, 1e3)
            },
            load: function() {
                var c, b = this;
                b.endTime = void 0, b.startTime = new Date, b.node = c = document.createElement("script"), b.insert(), b._ready = a.proxy(b.ready, b), b._error = a.proxy(b.error, b), c.attachEvent && !a.browser.opera ? (c.attachEvent("onreadystatechange", b._ready), c.attachEvent("onerror", b._error)) : (c.addEventListener("load", b._ready, !1), c.addEventListener("error", b._error, !1)), a(c).attr({
                    type: b.type,
                    async: b.async,
                    charset: b.charset,
                    src: b.url
                }), b.monitor()
            },
            monitor: function() {
                var a = this;
                return a.retryCount > a.retry ? (a._error(), void 0) : (setTimeout(function() {
                    "resolved" !== a.state() && (a.verbose && console.warn("$.script: Load timeout. [Retry: " + a.retryCount + "]", a), a.remove(), a.retryCount++, a.load())
                }, a.timeout * a.retryCount), void 0)
            },
            ready: function(a) {
                var b = this,
                    c = b.node;
                ("load" === a.type || /loaded|complete/.test(c.readyState)) && (b.complete.call(b, a), b.manager.resolve(b))
            },
            error: function(a) {
                var b = this;
                b.verbose && console.error("$.script: Unable to load ", b), b.complete.call(b, a), b.remove(), b.manager.reject(b)
            },
            complete: function() {
                var c = this,
                    d = c.node;
                c.endTime = new Date, d.detachEvent && !a.browser.opera ? (d.detachEvent("onreadystatechange", c._ready), d.detachEvent("onerror", c._error)) : (d.removeEventListener("load", c._ready, !1), d.removeEventListener("error", c._error, !1))
            }
        }), b
    }()
}), FD31.plugin("stylesheet", function(a) {
    var b = document.getElementsByTagName("head")[0],
        c = document.styleSheets,
        d = document.createStyleSheet,
        e = 31,
        f = 31,
        g = 4095;
    a.stylesheet = function() {
            var h = function(b, c) {
                var d = {};
                return a.extend(d, h.defaultOptions, a.isPlainObject(b) ? b : {
                    url: b,
                    attr: c || {}
                }), void 0 === d.url ? h.create(d) : h.load(d)
            };
            return a.extend(h, {
                defaultOptions: {
                    type: "text/css",
                    rel: "stylesheet",
                    media: "all",
                    title: "",
                    forceInject: !1,
                    xhr: !1
                },
                setup: function(b) {
                    a.extend(h.defaultOptions, b)
                },
                availability: function() {
                    var b = {},
                        c = a('link[rel*="stylesheet"]');
                    return styles = a("style"), b.groups = e - c.length - styles.length, b.slots = b.groups * f, h.currentGroup && (b.slots += f - h.currentGroup.imports.length), b
                },
                get: function(a) {
                    for (var b = 0; b < c.length; b++) {
                        var d = c[b];
                        if ((d.ownerNode || d.owningElement) == a) return d
                    }
                },
                create: function(f) {
                    var g, h, i = c.length;
                    if (d) {
                        if (i >= e) return;
                        g = document.createStyleSheet(), h = g.ownerNode || g.owningElement
                    } else h = document.createElement("style"), b.appendChild(h);
                    a.extend(h, {
                        type: f.type,
                        title: f.title,
                        media: f.media,
                        rel: f.rel
                    });
                    var j = f.content;
                    return void 0 !== j && (d ? g.cssText = j : h.appendChild(document.createTextNode(j))), h
                },
                nextAvailable: function(a) {
                    var b, e = c.length;
                    if (e) {
                        var f;
                        for (f = e; f--; 0 > f) {
                            b = c[f]; {
                                if (!(d && (b.cssRules || b.rules).length >= g)) break;
                                b = void 0
                            }
                        }
                    }
                    return b.ownerNode || b.owningElement || (a ? h() : void 0)
                },
                load: function(b) {
                    if (a.browser.msie && !b.forceInject) return h._import(b);
                    var c = a("<link>").attr({
                        href: b.url,
                        type: b.type,
                        rel: b.rel,
                        media: b.media
                    }).appendTo("head");
                    return c[0]
                },
                _import: function(a) {
                    var b;
                    if (void 0 === h.currentGroup) {
                        var c;
                        try {
                            c = document.createStyleSheet(), c.media = "all", c.title = "jquery_stylesheet"
                        } catch (d) {
                            b = !0, a.verbose && console.error("There is not enough slots left to create a new stylesheet group.")
                        }
                        if (b) return !1;
                        h.currentGroup = c
                    }
                    try {
                        h.currentGroup.addImport(a.url)
                    } catch (d) {
                        b = !0, a.verbose && console.info("Import slots exceeded. Creating a new stylesheet group.")
                    }
                    return b ? (h.currentGroup = void 0, h._import(a)) : !0
                }
            }), h
        }(),
        function() {
            var b = function(b, c, d) {
                a.extend(this, {
                    id: a.uid(),
                    style: d,
                    selectors: [],
                    preRule: "",
                    rules: {},
                    legacy: 8 === a.IE,
                    important: !1
                }), b && this.set(b, c)
            };
            a.extend(b.prototype, {
                set: function(b, c) {
                    return this.selectors = a.isString(b) ? b.split(",") : b, a.isString(c) ? (this.preRule = c + "\n", this.rules = {}) : (this.preRule = "", this.rules = c || this.rules), this.update(), this
                },
                cssText: function() {
                    return this.selectors.join(",") + "{" + this.ruleText() + "}\n"
                },
                ruleText: function() {
                    var b = this.important;
                    return this.preRule + (this.legacy ? "-rule-id:" + this.id + ";" : "") + a.map(this.rules, function(c, d) {
                        return a.isNumeric(c) && !a.cssNumber[d] && (c += "px"), b && (c += " !important"), d + ":" + c
                    }).join(";")
                },
                update: function() {
                    if (this.legacy) return this.updateLegacy();
                    var a = this.cssText();
                    return void 0 === this.textNode ? (this.textNode = document.createTextNode(a), this.style.appendChild(this.textNode)) : this.textNode.nodeValue = a, this
                },
                updateLegacy: function() {
                    this.removeLegacy();
                    for (var b = a.stylesheet.get(this.style), c = this.selectors, d = this.ruleText(), e = 0; e < c.length; e++) b.addRule(c[e], d);
                    return this
                },
                remove: function() {
                    return this.legacy ? this.removeLegacy() : (void 0 !== this.textNode && (this.style.removeChild(this.textNode), delete this.textNode), this)
                },
                removeLegacy: function() {
                    for (var b = a.stylesheet.get(this.style), c = b.rules, d = 0; d < c.length; d++) null !== c[d].cssText.match(this.id) && b.removeRule(d);
                    return this
                },
                css: function(b, c) {
                    return a.isString(b) && void 0 === c ? this.rules[b] : (a.isPlainObject(b) ? a.extend(this.rules, b) : this.rules[b] = c, this.update(), this)
                }
            });
            var c = a.cssRule = function(d, e, f) {
                var f = f || c.style || a.stylesheet.nextAvailable(!0);
                if (f) return new b(d, e, f)
            };
            c.style = a.stylesheet()
        }(),
        function() {
            a.cssUrl = function(a) {
                return 'url("' + encodeURI(a) + '")'
            }
        }()
}), FD31.plugin("language", function(a) {
    a.sprintf = function() {
        var a = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g,
            b = arguments,
            c = 0,
            d = b[c++],
            e = function(a, b, c, d) {
                c || (c = " ");
                var e = a.length >= b ? "" : Array(1 + b - a.length >>> 0).join(c);
                return d ? a + e : e + a
            },
            f = function(a, b, c, d, f, g) {
                var h = d - a.length;
                return h > 0 && (a = c || !f ? e(a, d, g, c) : a.slice(0, b.length) + e("", h, "0", !0) + a.slice(b.length)), a
            },
            g = function(a, b, c, d, g, h, i) {
                var j = a >>> 0;
                return c = c && j && {
                    2: "0b",
                    8: "0",
                    16: "0x"
                }[b] || "", a = c + e(j.toString(b), h || 0, "0", !1), f(a, c, d, g, i)
            },
            h = function(a, b, c, d, e, g) {
                return null != d && (a = a.slice(0, d)), f(a, "", b, c, e, g)
            },
            i = function(a, d, i, j, k, l, m) {
                var n, o, p, q, r;
                if ("%%" == a) return "%";
                for (var s = !1, t = "", u = !1, v = !1, w = " ", x = i.length, y = 0; i && x > y; y++) switch (i.charAt(y)) {
                    case " ":
                        t = " ";
                        break;
                    case "+":
                        t = "+";
                        break;
                    case "-":
                        s = !0;
                        break;
                    case "'":
                        w = i.charAt(y + 1);
                        break;
                    case "0":
                        u = !0;
                        break;
                    case "#":
                        v = !0
                }
                if (j = j ? "*" == j ? +b[c++] : "*" == j.charAt(0) ? +b[j.slice(1, -1)] : +j : 0, 0 > j && (j = -j, s = !0), !isFinite(j)) throw new Error("sprintf: (minimum-)width must be finite");
                switch (l = l ? "*" == l ? +b[c++] : "*" == l.charAt(0) ? +b[l.slice(1, -1)] : +l : "fFeE".indexOf(m) > -1 ? 6 : "d" == m ? 0 : void 0, r = d ? b[d.slice(0, -1)] : b[c++], m) {
                    case "s":
                        return h(String(r), s, j, l, u, w);
                    case "c":
                        return h(String.fromCharCode(+r), s, j, l, u);
                    case "b":
                        return g(r, 2, v, s, j, l, u);
                    case "o":
                        return g(r, 8, v, s, j, l, u);
                    case "x":
                        return g(r, 16, v, s, j, l, u);
                    case "X":
                        return g(r, 16, v, s, j, l, u).toUpperCase();
                    case "u":
                        return g(r, 10, v, s, j, l, u);
                    case "i":
                    case "d":
                        return n = 0 | +r, o = 0 > n ? "-" : t, r = o + e(String(Math.abs(n)), l, "0", !1), f(r, o, s, j, u);
                    case "e":
                    case "E":
                    case "f":
                    case "F":
                    case "g":
                    case "G":
                        return n = +r, o = 0 > n ? "-" : t, p = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(m.toLowerCase())], q = ["toString", "toUpperCase"]["eEfFgG".indexOf(m) % 2], r = o + Math.abs(n)[p](l), f(r, o, s, j, u)[q]();
                    default:
                        return a
                }
            };
        return d.replace(a, i)
    };
    var b = a.language = a.JText = function(a) {
        return arguments.length < 2 ? b._(a) : b.sprintf.apply(null, arguments)
    };
    a.extend(b, {
        lang: {},
        add: function(c, d) {
            a.isPlainObject(c) ? a.extend(b.lang, c) : b.lang[c] = d
        },
        remove: function(a) {
            delete b.lang[a]
        },
        _: function(a) {
            return b.lang[a] || ""
        },
        sprintf: function() {
            var c = arguments[0];
            return arguments[0] = b.lang[c], a.sprintf.apply(null, arguments)
        }
    })
}), FD31.plugin("template", function(a) {
    a.template = function() {
        var b = {
                content: "",
                type: "ejs"
            },
            c = function(d, e) {
                if (void 0 === d) return c.templates;
                var f;
                return "string" == typeof e ? (f = a.isPlainObject(e) ? e : a.extend({}, b, {
                    name: d,
                    content: e
                }), c.templates[d] = f, f) : (f = c.templates[d] || {}, f.content || "")
            };
        return a.extend(c, {
            templates: {},
            remove: function(a) {
                delete c.templates[a]
            }
        }), c
    }()
}), FD31.plugin("require", function(a) {
    a.require = function() {
        var b = function(b) {
                return a.uri(b).setAnchor("").setQuery("").toPath("../").toString()
            },
            c = function(a) {
                var b = new e(a);
                return c.batches[b.id] = b, b
            };
        a.extend(c, {
            defaultOptions: {
                path: function() {
                    var c = a.path + "/scripts/" || a("[require-path]").attr("require-path") || b(a("script:last").attr("src")) || b(window.location.href);
                    return /^(\/|\.)/.test(c) && (c = a.uri(window.location.href).toPath(c).toString()), c
                }(),
                timeout: 1e4,
                retry: 3,
                verbose: "development" == a.environment
            },
            setup: function(b) {
                a.extend(c.defaultOptions, b)
            },
            batches: {},
            status: function(b) {
                return a.each(c.batches, function(c, d) {
                    var e = {
                            pending: 0,
                            resolved: 0,
                            rejected: 0,
                            ready: 0,
                            total: 0
                        },
                        f = [];
                    a.each(d.tasks, function(a, b) {
                        state = b.module && "ready" == b.module.status ? "ready" : b.state(), e[state]++, e.total++, f.push({
                            state: state,
                            content: "[" + state + "] " + b.name
                        })
                    });
                    var g = d.id + ": " + d.state() + " [" + e.resolved + "/" + e.total + "]";
                    b && e[b] < 1 || (a.IE ? (console.log('$.require.batches["' + d.id + '"]'), a.each(f, function(a, b) {
                        console.log(b.content)
                    }), console.log("")) : (console.groupCollapsed(g), console.log('$.require.batches["' + d.id + '"]', d), a.each(f, function(a, c) {
                        var d = c.state,
                            e = c.content;
                        if (!b || d == b) switch (d) {
                            case "pending":
                                console.warn(e);
                                break;
                            case "rejected":
                                console.error(e);
                                break;
                            default:
                                console.info(e)
                        }
                    }), console.groupEnd(g)))
                }), "$.require.status(pending|resolved|rejected|ready);"
            },
            loaders: {},
            addLoader: function(a, b) {
                c[a] = b, e.prototype[a] = function() {
                    var a = this;
                    return a.autoFinalize(), b.apply(a, arguments), a
                }, c.loaders[a] = c[a] = b
            },
            removeLoader: function(a) {
                delete e.prototype[a], delete c[a]
            }
        });
        var d = 0,
            e = function(b) {
                var e = a.Callbacks("once memory"),
                    f = !1,
                    g = a.extend(this, {
                        id: ++d,
                        tasks: [],
                        options: a.extend({}, c.defaultOptions, b),
                        autoFinalizeDuration: 300,
                        finalized: !1,
                        required: function(b) {
                            return b === !0 && (f = !0 && e.fire()), a.isFunction(b) && e.add(b), f
                        }
                    });
                return g
            };
        return a.extend(e.prototype, {
            addTask: function(b) {
                var c = this;
                a.isDeferred(b) && (c.finalized || (c.tasks.push(b), b.batch = c))
            },
            autoFinalize: function() {
                var a = this,
                    b = a.autoFinalizeDuration;
                b !== !1 && (clearTimeout(a.autoFinalizeTimer), a.autoFinalizeTimer = setTimeout(function() {
                    a.finalize()
                }, b))
            },
            finalize: function() {
                var b = this;
                if (!b.finalized) {
                    b.finalized = !0;
                    var c = b.manager = a.when.apply(null, b.tasks),
                        d = c.promise(),
                        e = a.Callbacks();
                    a.extend(b, d, {
                        progress: e.add,
                        notify: e.fire,
                        done: function() {
                            return b.required(!0), b.done = d.done, b.done.apply(b, arguments)
                        }
                    });
                    var f = b.options.verbose;
                    c.progress(function(a, b) {
                        f && "rejected" == a && console.warn("Require: Task " + b.name + " failed to load.", b)
                    }).fail(function() {
                        f && console.warn("Require: Batch " + b.id + " failed.", b)
                    }), setTimeout(function() {
                        a.each(b.tasks, function(a, c) {
                            c.then(function() {
                                b.notify("resolved", c)
                            }, function() {
                                b.notify("rejected", c)
                            }, function() {
                                b.notify("progress", c)
                            })
                        })
                    }, 1)
                }
            },
            expand: function(b, c) {
                var b = a.makeArray(b),
                    d = c || {},
                    e = [];
                return a.isPlainObject(b[0]) ? (d = a.extend(b[0], c), e = b.slice(1)) : e = b, {
                    options: d,
                    names: e
                }
            }
        }), a.each(["done", "fail", "progress", "always", "then"], function(a, b) {
            e.prototype[b] = function() {
                var a = this;
                return a.finalize(), a[b].apply(a, arguments)
            }
        }), c
    }(), a.require.addLoader("script", function() {
        var b = a.uri(a.indexUrl).host(),
            c = a.uri(document.location.href).host();
        b !== c && b.match("xn--") && (a.support.cors = !0);
        var e = (document.createElement("script").async === !0 || "MozAppearance" in document.documentElement.style || window.opera, function() {
            var d, f, b = this,
                c = a.makeArray(arguments);
            a.isPlainObject(c[0]) ? (d = c[0], f = c.slice(1)) : f = c, d = a.extend({}, e.defaultOptions, b.options, d, {
                batch: b
            });
            var g;
            a.each(f, function(a, c) {
                var f = new e.task(c, d, g);
                b.addTask(f), d.serial && void 0 !== g ? g.always(f.start) : f.start(), g = f
            })
        });
        return a.extend(e, {
            defaultOptions: {
                path: "",
                extension: "compressed" == a.mode ? "min.js" : "js",
                serial: !1,
                async: !1,
                xhr: !1
            },
            setup: function() {
                a.extend(e.defaultOptions, options)
            },
            scripts: {},
            task: function(b, c, d) {
                var e = a.extend(this, a.Deferred());
                if (e.name = b, e.options = c, e.taskBefore = d, a.isArray(b)) {
                    e.name = b[0] + "@" + b[1], e.moduleName = b[0];
                    var f = b[2];
                    f || (e.defineModule = !0, a.module.registry[e.moduleName] && console.warn("$.require.script: " + e.moduleName + " exists! Using existing module instead."), e.options.xhr = !0), b = b[1], e.module = a.module(e.moduleName)
                }
                a.isUrl(b) ? e.url = b : /^(\/|\.)/.test(b) ? e.url = a.uri(e.options.path).toPath(b).toString() : (e.url = a.uri(e.options.path).toPath("./" + b + "." + e.options.extension).toString(), e.module = a.module(b))
            }
        }), a.extend(e.task.prototype, {
            start: function() {
                var a = this,
                    b = a.module;
                return b && "pending" !== b.status ? (a.waitForModule(), void 0) : (a.load(), void 0)
            },
            waitForModule: function() {
                var a = this,
                    b = a.module;
                b.then(a.resolve, a.reject, a.notify), a.batch.required(function() {
                    b.done(a.resolve)
                })
            },
            load: function() {
                var b = this,
                    c = b.taskBefore;
                b.script = e.scripts[b.url] || function() {
                    var c = b.options.xhr ? a.ajax({
                        url: b.url,
                        dataType: "text"
                    }) : a.script({
                        url: b.url,
                        type: "text/javascript",
                        async: b.options.async,
                        timeout: b.batch.options.timeout,
                        retry: b.batch.options.retry,
                        verbose: b.batch.options.verbose
                    });
                    return e.scripts[b.url] = c
                }(), b.script.done(function(d) {
                    var e = function() {
                        b.module ? b.waitForModule() : b.resolve()
                    };
                    return b.options.xhr && (b.defineModule && (b.module = a.module(b.moduleName, function() {
                        var b = this;
                        a.globalEval(d), b.resolveWith(d)
                    })), !b.options.async || c) ? (c.done(function() {
                        a.globalEval(d), e()
                    }), void 0) : (e(), void 0)
                }).fail(function() {
                    b.reject()
                })
            }
        }), e
    }()), a.require.addLoader("stylesheet", function() {
        var b = function() {
            var e, f, c = this,
                d = a.makeArray(arguments);
            a.isPlainObject(d[0]) ? (e = d[0], f = d.slice(1)) : f = d, e = a.extend({}, b.defaultOptions, c.options, {
                path: a.path + "/styles/"
            }, e, {
                batch: c
            }), a.each(f, function(a, d) {
                var f = new b.task(d, e),
                    g = b.stylesheets[f.url];
                f = g || f, c.addTask(f), g || (b.stylesheets[f.url] = f, f.start())
            })
        };
        return a.extend(b, {
            defaultOptions: {
                path: "",
                extension: "compressed" == a.mode ? "min.css" : "css",
                xhr: !1
            },
            setup: function() {
                a.extend(b.defaultOptions, options)
            },
            stylesheets: {},
            task: function(b, c) {
                var d = a.extend(this, a.Deferred());
                d.name = b, d.options = c, d.url = a.isUrl(b) ? b : /^(\/|\.)/.test(b) ? a.uri(d.options.path).toPath(b).toString() : a.uri(d.options.path).toPath("./" + b + "." + d.options.extension).toString(), d.options.url = d.url
            },
            loaders: {},
            loader: function(c) {
                if (a.isArray(c)) return a.map(c, function(a) {
                    return b.loader(a)
                });
                if (a.isPlainObject(c)) return a.map(c, function(a, c) {
                    return b.loader(a).resolve(c)
                });
                var d = b.loaders[c];
                return d || (d = b.loaders[c] = a.Deferred().done(function(b) {
                    a.isPlainObject(b) || a.stylesheet(b)
                })), d
            }
        }), a.extend(b.task.prototype, {
            start: function() {
                var c = this,
                    d = b.loaders[c.name];
                d || (d = b.loader(c.name), a.stylesheet(c.options) ? d.resolve() : d.reject()), d.then(c.resolve, c.reject)
            }
        }), b
    }()), a.require.addLoader("template", function() {
        var b = function() {
            var e, f, c = this,
                d = a.makeArray(arguments);
            a.isPlainObject(d[0]) ? (e = d[0], f = d.slice(1)) : f = d, e = a.extend({}, b.defaultOptions, c.options, e, {
                batch: c
            }), a.each(f, function(a, d) {
                var f = new b.task(d, e);
                c.addTask(f), f.start()
            })
        };
        return a.extend(b, {
            defaultOptions: {
                path: "",
                extension: "htm"
            },
            setup: function() {
                a.extend(b.defaultOptions, options)
            },
            task: function(b, c) {
                var d = a.extend(this, a.Deferred());
                d.name = b, d.options = c, a.isArray(b) && (d.name = b[0], b = b[1]), d.url = a.isUrl(b) ? b : /^(\/|\.)/.test(b) ? a.uri(d.options.path).toPath(b).toString() : a.uri(d.options.path).toPath("./" + b + "." + d.options.extension).toString()
            },
            loaders: {},
            loader: function(c) {
                if (a.isArray(c)) return a.map(c, function(a) {
                    return b.loader(a)
                });
                if (a.isPlainObject(c)) return a.map(c, function(a, c) {
                    return b.loader(c).resolve(a)
                });
                var d = b.loaders[c];
                return d || (d = b.loaders[c] = a.Deferred().done(function(b) {
                    a.template(c, b)
                })), d
            }
        }), a.extend(b.task.prototype, {
            start: function() {
                var c = this,
                    d = b.loaders[c.name];
                return d || (d = b.loader(c.name), d.xhr = a.Ajax({
                    url: c.url,
                    dataType: "text"
                }).then(d.resolve, d.reject).then(c.resolve, c.reject)), c.loader = d, c
            }
        }), b
    }()), a.require.addLoader("language", function() {
        var b = function() {
            var e, f, c = this,
                d = a.makeArray(arguments);
            a.isPlainObject(d[0]) ? (e = d[0], f = d.slice(1)) : f = d, e = a.extend({}, b.defaultOptions, c.options, e, {
                batch: c
            });
            var g = new b.task(f, e);
            c.addTask(g), g.start()
        };
        return a.extend(b, {
            defaultOptions: {
                path: ""
            },
            setup: function() {
                a.extend(b.defaultOptions, options)
            },
            loaders: {},
            task: function(b, c) {
                var d = a.extend(this, a.Deferred());
                d.name = b.join(","), d.options = c, d.url = c.path, d.names = b
            },
            loaders: {},
            loader: function(c) {
                if (a.isArray(c)) return a.map(c, function(a) {
                    return b.loader(a)
                });
                if (a.isPlainObject(c)) return a.map(c, function(a, c) {
                    return b.loader(c).resolve(a)
                });
                var d = b.loaders[c];
                return d || (d = b.loaders[c] = a.Deferred().done(function(b) {
                    a.language.add(c, b)
                })), d
            }
        }), a.extend(b.task.prototype, {
            start: function() {
                var c = this,
                    d = [],
                    e = a.map(c.names, function(a) {
                        var c = b.loader(a);
                        return c.push(c), /resolved|rejected/.test(c.state()) ? null : a
                    });
                return c.fail(function() {
                    a.each(e, function(a, c) {
                        b.loader(c).reject()
                    })
                }), a.when.apply(null, d).then(c.resolve, c.reject), e.length < 1 ? c : (c.xhr = a.Ajax({
                    url: c.url,
                    type: "POST",
                    data: {
                        keys: e
                    }
                }).done(function(d) {
                    a.isPlainObject(d) ? b.loader(d) : c.reject()
                }).fail(function() {
                    c.reject()
                }), c)
            }
        }), b
    }()), a.require.addLoader("library", function() {
        var e, b = this,
            c = a.makeArray(arguments),
            d = {};
        return a.isPlainObject(c[0]) ? (d = c[0], e = c.slice(1)) : e = c, a.extend(d, {
            path: a.scriptPath
        }), b.script.apply(b, [d].concat(e))
    }), a.require.addLoader("image", function() {
        var b = function() {
            var e, f, c = this,
                d = a.makeArray(arguments);
            a.isPlainObject(d[0]) ? (e = d[0], f = d.slice(1)) : f = d, e = a.extend({}, b.defaultOptions, c.options, e, {
                batch: c
            }), a.each(f, function(a, d) {
                var f = new b.task(d, e),
                    g = b.images[f.url];
                f = g || f, c.addTask(f), g || (b.images[f.url] = f, f.start())
            })
        };
        return a.extend(b, {
            defaultOptions: {
                path: ""
            },
            setup: function() {
                a.extend(b.defaultOptions, options)
            },
            images: {},
            task: function(b, c) {
                var d = a.extend(this, a.Deferred());
                d.name = b, d.options = c, d.url = a.isUrl(b) ? b : /^(\/|\.)/.test(b) ? a.uri(d.options.path).toPath(b).toString() : a.uri(d.options.path).toPath("./" + b).toString(), d.options.url = d.url
            }
        }), a.extend(b.task.prototype, {
            start: function() {
                var b = this;
                b.image = a(new Image).load(function() {
                    b.resolve()
                }).error(function() {
                    b.reject()
                }).attr("src", b.options.url)
            }
        }), b
    }())
}), FD31.plugin("iframe-transport", function(a) {
    a.ajaxPrefilter(function(a) {
        return a.iframe ? "iframe" : void 0
    }), a.ajaxTransport("iframe", function(b) {
        function k() {
            i && j.replaceWith(function(a) {
                return h.get(a)
            }), e.remove(), f.attr("src", "javascript:false;").remove()
        }
        var e = null,
            f = null,
            g = "iframe-" + a.now(),
            h = a(b.files).filter(":file:enabled"),
            i = h.length > 0,
            j = null;
        return b.dataTypes.shift(), e = a("<form enctype='multipart/form-data' method='post'></form>").hide().attr({
            action: b.url,
            target: g
        }), "string" == typeof b.data && b.data.length > 0 && a.error("data must not be serialized"), a.each(b.data || {}, function(b, c) {
            a.isPlainObject(c) && (b = c.name, c = c.value), a.isArray(c) || (c = [c]), a.each(c, function(c, d) {
                a("<input type='hidden' />").attr({
                    name: b,
                    value: d
                }).appendTo(e)
            })
        }), a("<input type='hidden' value='IFrame' name='X-Requested-With' />").appendTo(e), i && (j = h.after(function() {
            return a(this).clone().prop("disabled", !0)
        }).next(), h.appendTo(e)), {
            send: function(b, c) {
                f = a("<iframe src='javascript:false;' name='" + g + "' id='" + g + "' style='display:none'></iframe>"), f.bind("load", function() {
                    f.unbind("load").bind("load", function() {
                        var a = this.contentWindow ? this.contentWindow.document : this.contentDocument ? this.contentDocument : this.document,
                            b = a.documentElement ? a.documentElement : a.body,
                            d = b.getElementsByTagName("textarea")[0],
                            e = d ? d.getAttribute("data-type") : null,
                            f = d ? d.getAttribute("data-status") : 200,
                            g = d ? d.getAttribute("data-statusText") : "OK",
                            h = {
                                html: b.innerHTML,
                                text: e ? d.value : b ? b.textContent || b.innerText : null
                            };
                        k(), c(f, g, h, e ? "Content-Type: " + e : null)
                    }), e[0].submit()
                }), a("body").append(e, f)
            },
            abort: function() {
                null !== f && (f.unbind("load").attr("src", "javascript:false;"), k())
            }
        }
    })
}), FD31.plugin("server", function($) {
    var self = $.server = function(a) {
        var b = $.Deferred(),
            c = $.extend(!0, {}, self.defaultOptions, a, {
                success: function() {}
            });
        return b.xhr = $.Ajax(c).done(function(c) {
            if ("string" == typeof c) try {
                c = $.parseJSON(c)
            } catch (d) {
                b.rejectWith(b, ["Unable to parse Ajax commands.", "error"])
            }
            if ($.isArray(c)) {
                var e = function(c) {
                        var d = c.type,
                            e = self.parsers[d] || a[d];
                        return $.isFunction(e) ? e.apply(b, c.data) : void 0
                    },
                    c = $.map(c, function(a) {
                        return "notify" != a.type ? a : (e(a), void 0)
                    });
                $.each(c, function(a, b) {
                    e(b)
                })
            } else b.rejectWith(b, ["Invalid ajax commands.", "error"]);
            "pending" === b.state() && b.resolveWith(b)
        }).fail(function(a, c, d) {
            b.rejectWith(b, [d, c])
        }), b
    };
    self.defaultOptions = {
        type: "POST",
        data: {
            tmpl: "component",
            format: "ajax",
            no_html: 1
        },
        dataType: "json"
    }, self.parsers = {
        script: function() {
            var data = $.makeArray(arguments);
            if ("string" != typeof data[0]) {
                var chain = window,
                    chainBroken = !1;
                $.each(data, function(a, b) {
                    "Foundry" === b.property && (b.property = $.globalNamespace), "Foundry" === b.method && (b.method = $.globalNamespace);
                    try {
                        switch (b.type) {
                            case "get":
                                chain = chain[b.property];
                                break;
                            case "set":
                                chain[b.property] = b.value, chainBroken = !0;
                                break;
                            case "call":
                                chain = chain[b.method].apply(chain, b.args)
                        }
                    } catch (c) {
                        chainBroken = !0
                    }
                })
            } else try {
                eval(data[0])
            } catch (err) {}
        },
        resolve: function() {
            this.resolveWith(this, arguments)
        },
        reject: function() {
            this.rejectWith(this, arguments)
        },
        notify: function() {
            this.notifyWith(this, arguments)
        },
        redirect: function(a) {
            window.location = a
        }
    }
}), FD31.plugin("component", function(a) {
    var b = a.Component = function(a, c) {
        return arguments.length < 1 ? b.registry : arguments.length < 2 ? b.registry[a] : b.register(a, c)
    };
    b.registry = {}, b.proxy = function(b, c, d) {
        b[c] = a.isFunction(d) ? a.proxy(d, b) : d
    }, b.register = function(c, d) {
        var e;
        a.isFunction(c) && (e = c, c = e.className, d = e.options);
        var f = b.registry[c] = window[c] = function(b) {
            return a.isFunction(b) ? b(a) : component
        };
        if (a.each(b.prototype, function(a, c) {
                b.proxy(f, a, c)
            }), f.$ = a, f.options = d, f.className = c, f.identifier = c.toLowerCase(), f.componentName = "com_" + f.identifier, f.prefix = f.identifier + "/", f.version = d.version, f.safeVersion = f.version.replace(/\./g, ""), f.environment = d.environment || a.environment, f.mode = d.mode || a.mode, f.debug = "development" === f.environment, f.console = b.console(f), f.language = d.language || a.locale.lang || "en", f.baseUrl = d.baseUrl || a.indexUrl + "?option=" + f.componentName, f.ajaxUrl = d.ajaxUrl || a.basePath + "/?option=" + f.componentName, f.scriptPath = d.scriptPath || a.rootPath + "/media/" + f.componentName + "/scripts/", f.stylePath = d.stylePath || a.rootPath + "/media/" + f.componentName + "/styles/", f.templatePath = d.templatePath || d.scriptPath, f.languagePath = d.languagePath || f.ajaxUrl + "&tmpl=component&no_html=1&controller=lang&task=getLanguage", f.viewPath = d.viewPath || f.ajaxUrl + "&tmpl=component&no_html=1&controller=themes&task=getAjaxTemplate", f.optimizeResources = !0, f.resourcePath = d.resourcePath || f.ajaxUrl + "&tmpl=component&no_html=1&controller=foundry&task=getResource", f.resourceInterval = 1200, f.scriptVersioning = d.scriptVersioning || !1, f.token = (e || {}).token, f.tasks = [], FD31.component(c, f), e)
            if (f.debug) e.queue.execute();
            else {
                for (var g, h = FD31.installer(c); g = h.shift();) f.install.apply(f, g);
                a.when(f.install("definitions"), f.install("scripts"), f.install("resources")).done(function() {
                    e.queue.execute()
                })
            }
    }, b.extend = function(c, d) {
        b.prototype[c] = d, a.each(b.registry, function(a, e) {
            b.proxy(e, c, d)
        })
    }, a.template("component/console", '<div id="[%== component.identifier %]-console" class="foundry-console" style="display: none; z-index: 999999;"><div class="console-header"><div class="console-title">[%= component.className %] [%= component.version %]</div><div class="console-remove-button">x</div></div><div class="console-log-item-group"></div><style type="text/css">.foundry-console{position:fixed;width:50%;height:50%;bottom:0;left:0;background:white;box-shadow: 0 0 5px 0;margin-left: 25px;}.console-log-item-group{width: 100%;height: 100%;overflow-y:scroll;}.console-header{position: absolute;background:red;color:white;font-weight:bold;top:-24px;left: 0;line-height:24px;width:100%}.console-remove-button{text-align:center;cursor: pointer;display:block;width: 24px;float:right}.console-remove-button:hover{color: yellow}.console-title{padding: 0 5px;float:left}.console-log-item{padding: 5px}.console-log-item + .console-log-item{border-top: 1px solid #ccc}</style></div>'), b.console = function(b) {
        return function(b) {
            var d, c = function(a) {
                return arguments.length < 1 ? c.toggle() : c[a] && c[a].apply(c, arguments)
            };
            return c.selector = "#" + b.identifier + "-console", c.init = function() {
                return d = a(c.selector), d.length < 1 && (d = a(a.View("component/console", {
                    component: b
                })).appendTo("body"), d.find(".console-remove-button").click(function() {
                    d.hide()
                })), c.element = d, arguments.callee
            }(), c.methods = {
                log: function(c, e, f) {
                    e = e || "info";
                    var g = d.find(".console-log-item-group"),
                        h = a(document.createElement("div")).addClass("console-log-item type-" + e).attr("data-code", f).html(c);
                    g.append(h), g[0].scrollTop = g[0].scrollHeight, b.debug && d.show()
                },
                toggle: function() {
                    d.toggle()
                },
                reset: function() {
                    d.find(".console-log-item-group").empty()
                }
            }, a.each(c.methods, function(a, b) {
                c[a] = function() {
                    return c.init(), b.apply(c, arguments)
                }
            }), c
        }(b)
    };
    var c = a(document),
        d = b.prototype;
    a.extend(d, {
        run: function(b) {
            return a.isFunction(b) ? b(a) : this
        },
        ready: function() {
            return c.ready(function() {
                    d.ready = d.run
                }),
                function(b) {
                    a.isFunction(b) && c.ready(function() {
                        b(a)
                    })
                }
        }(),
        install: function(b, c) {
            var d = this,
                e = d.tasks[b] || (d.tasks[b] = a.Deferred());
            if (!c) return e;
            var f = function() {
                return c(a, d), e.resolve()
            };
            return "definitions" == b ? f() : (a.when(d.install("definitions")).done(f), void 0)
        },
        template: function(b) {
            var c = this;
            return void 0 == b ? a.grep(a.template(), function(a) {
                return 0 == a.indexOf(c.prefix)
            }) : (arguments[0] = c.prefix + b, a.template.apply(null, arguments))
        },
        require: function(b) {
            var c = this,
                b = b || {},
                d = a.require(b),
                e = {};
            return a.each(["library", "script", "language", "template", "done"], function(a, b) {
                e[b] = d[b]
            }), d.resource = function(b) {
                if (a.isPlainObject(b) && b.type && b.name && a.isDeferred(b.loader)) {
                    var f = c.resourceCollector;
                    f || (f = c.resourceCollector = a.Deferred(), a.extend(f, {
                        name: a.uid("ResourceCollector"),
                        manifest: [],
                        loaderList: [],
                        loaders: [],
                        load: function() {
                            if (delete c.resourceCollector, f.manifest.length < 0) return f.resolve(), void 0;
                            var b = 0,
                                d = function() {
                                    b++, a.Ajax({
                                        type: "POST",
                                        url: c.resourcePath,
                                        dataType: "json",
                                        data: {
                                            resource: f.manifest
                                        }
                                    }).done(function(d) {
                                        return a.isArray(d) ? (a.each(d, function(a, b) {
                                            var c = b.content;
                                            f.loaders[b.id][void 0 !== c ? "resolve" : "reject"](c)
                                        }), b > 1 && c.debug && console.info("Attempt to try and get resources again was successful!"), void 0) : (f.reject("Server did not return a valid resource manifest."), void 0)
                                    }).fail(function() {
                                        return b > 2 ? (c.debug && console.error("Unable to get resource again. Giving up!"), void 0) : (c.debug && console.warn("Unable to get resource. Trying again..."), d(), void 0)
                                    })
                                };
                            d(), a.when.apply(null, f.loaderList).done(f.resolve).fail(f.reject)
                        }
                    }), setTimeout(f.load, c.resourceCollectionInterval));
                    var g = b.id = a.uid("Resource");
                    return f.loaders[g] = b.loader, f.loaderList.push(b.loader), delete b.loader, f.manifest.push(b), d
                }
            }, d.view = function() {
                var b = this,
                    e = b.expand(arguments, {
                        path: c.viewPath
                    }),
                    f = {},
                    g = e.options,
                    h = a.map(e.names, function(e) {
                        var g = c.prefix + e,
                            h = a.require.template.loaders[g];
                        if (!h) return h = a.require.template.loader(g), h.name = g, b.addTask(h), c.optimizeResources ? (d.resource({
                            type: "view",
                            name: e,
                            loader: h
                        }), void 0) : (f[e] = h, e)
                    });
                return h.length > 0 && a.Ajax({
                    url: g.path,
                    dataType: "json",
                    data: {
                        names: h
                    }
                }).done(function(b) {
                    a.isArray(b) && a.each(b, function(a, b) {
                        var c = b.content;
                        f[b.name][void 0 !== c ? "resolve" : "reject"](c)
                    })
                }), d
            }, d.language = function() {
                var b = this,
                    f = b.expand(arguments, {
                        path: c.languagePath
                    });
                return c.optimizeResources ? a.each(f.names, function(c, e) {
                    var f = a.require.language.loaders[e];
                    f || (f = a.require.language.loader(e), f.name = e, b.addTask(f), d.resource({
                        type: "language",
                        name: e,
                        loader: f
                    }))
                }) : e.language.apply(d, [f.options].concat(f.names)), d
            }, d.library = function() {
                return e.script.apply(this, arguments), d
            }, d.script = function() {
                var b = this,
                    f = b.expand(arguments, {
                        path: c.scriptPath
                    });
                return names = a.map(f.names, function(b) {
                    if (a.isArray(b) || a.isUrl(b) || /^(\/|\.)/.test(b)) return b;
                    var d = c.prefix + b,
                        e = a.uri(f.options.path).toPath("./" + b + "." + (f.options.extension || "js") + (c.scriptVersioning ? "?version=" + c.safeVersion : "")).toString();
                    return [
                        [d, e, !0]
                    ]
                }), e.script.apply(d, [f.options].concat(names)), d
            }, d.template = function() {
                var b = this,
                    f = b.expand(arguments, {
                        path: c.templatePath
                    });
                return e.template.apply(d, [f.options].concat(a.map(f.names, function(a) {
                    return [
                        [c.prefix + a, a]
                    ]
                }))), d
            }, d.done = function(a) {
                return e.done.call(d, function() {
                    c.ready(a)
                })
            }, d
        },
        module: function(b, c) {
            var d = this;
            if (!a.isArray(b)) {
                var e = d.prefix + b;
                return c ? a.module.apply(null, [e, function() {
                    var b = this;
                    c.call(b, a)
                }]) : a.module(e)
            }
        }
    }), a.Component.extend("getToken", function() {
        var b = this;
        return a("span#" + b.identifier + "-token input").attr("name") || b.token
    }), a.Component.extend("ajax", function(b, c, d) {
        var e = this,
            f = {
                url: e.ajaxUrl,
                data: a.extend(c, {
                    option: e.componentName,
                    namespace: b
                })
            };
        if (f = a.extend(!0, f, e.options.ajax), f.data[e.getToken()] = 1, f.data.hasOwnProperty("args") && (f.data.args = a.toJSON(f.data.args)), a.isPlainObject(d)) {
            if (d.type) {
                switch (d.type) {
                    case "jsonp":
                        d.dataType = "jsonp", d.crossDomain = !0, f.data.transport = "jsonp";
                        break;
                    case "iframe":
                        d.iframe = !0, d.processData = !1, d.files = f.data.files, delete f.data.files, f.data.transport = "iframe"
                }
                delete d.type
            }
            a.extend(f, d)
        }
        a.isFunction(d) && (f.success = d);
        var g = a.server(f);
        return g.progress(function(a, b, c) {
            "debug" == b && e.console.log(a, b, c)
        }), g
    }), a.Component.extend("Controller", function() {
        var e, f, b = this,
            c = a.makeArray(arguments),
            d = c[0];
        return 1 == c.length ? a.String.getObject(d) : (c.length > 2 ? (e = c[1], f = c[2]) : (e = {}, f = c[1]), a.extend(e, {
            root: b.className + ".Controller",
            component: b
        }), a.Controller.apply(this, [d, e, f]))
    }), a.Component.extend("Model", function() {
        var e, f, b = this,
            c = a.makeArray(arguments),
            d = b.className + ".Model." + c[0];
        return 1 == c.length ? a.String.getObject(c[0]) : (2 == c.length && (e = {}, f = c[1]), c.length > 2 && (e = c[1], f = c[2]), a.extend(e, {
            component: b
        }), a.Model.apply(this, [d, e, f]))
    }), a.Component.extend("Model.List", function() {
        var e, f, b = this,
            c = a.makeArray(arguments),
            d = b.className + ".Model.List." + c[0];
        return 1 == c.length ? a.String.getObject(c[0]) : (2 == c.length && (e = {}, f = c[1]), c.length > 2 && (e = c[1], f = c[2]), a.extend(e, {
            component: b
        }), a.Model.List.apply(this, [d, e, f]))
    }), a.Component.extend("View", function() {
        var c = this;
        return arguments.length < 1 ? c.template() : (arguments[0] = c.prefix + arguments[0], a.View.apply(this, arguments))
    }), FD31.module.execute(), a.each(FD31.component(), function(b, c) {
        c.registered || a.Component.register(c)
    })
}), FD31.plugin("static", function($) {
    $.module(["imgareaselect", "markitup", "expanding", "placeholder", "scrollTo", "fancybox", "ui/autocomplete", "ui/core", "ui/widget", "ui/position", "ui/menu"]),
        function() {
            var a = function(a) {
                var b = this,
                    c = a,
                    d = function() {
                        ! function(a) {
                            function f() {
                                return a("<div/>")
                            }
                            var b = Math.abs,
                                c = Math.max,
                                d = Math.min,
                                e = Math.round;
                            a.imgAreaSelect = function(g, h) {
                                function X(a) {
                                    return a + s.left - w.left
                                }

                                function Y(a) {
                                    return a + s.top - w.top
                                }

                                function Z(a) {
                                    return a - s.left + w.left
                                }

                                function $(a) {
                                    return a - s.top + w.top
                                }

                                function _(a) {
                                    return a.pageX - w.left
                                }

                                function ab(a) {
                                    return a.pageY - w.top
                                }

                                function bb(a) {
                                    var b = a || B,
                                        c = a || C;
                                    return {
                                        x1: e(O.x1 * b),
                                        y1: e(O.y1 * c),
                                        x2: e(O.x2 * b),
                                        y2: e(O.y2 * c),
                                        width: e(O.x2 * b) - e(O.x1 * b),
                                        height: e(O.y2 * c) - e(O.y1 * c)
                                    }
                                }

                                function cb(a, b, c, d, f) {
                                    var g = f || B,
                                        h = f || C;
                                    O = {
                                        x1: e(a / g || 0),
                                        y1: e(b / h || 0),
                                        x2: e(c / g || 0),
                                        y2: e(d / h || 0)
                                    }, O.width = O.x2 - O.x1, O.height = O.y2 - O.y1
                                }

                                function db() {
                                    i.width() && (s = {
                                        left: e(i.offset().left),
                                        top: e(i.offset().top)
                                    }, t = i.innerWidth(), u = i.innerHeight(), s.top += i.outerHeight() - u >> 1, s.left += i.outerWidth() - t >> 1, E = e(h.minWidth / B) || 0, F = e(h.minHeight / C) || 0, G = e(d(h.maxWidth / B || 1 << 24, t)), H = e(d(h.maxHeight / C || 1 << 24, u)), "1.3.2" != a().jquery || "fixed" != y || P.getBoundingClientRect || (s.top += c(document.body.scrollTop, P.scrollTop), s.left += c(document.body.scrollLeft, P.scrollLeft)), w = /absolute|relative/.test(v.css("position")) ? {
                                        left: e(v.offset().left) - v.scrollLeft(),
                                        top: e(v.offset().top) - v.scrollTop()
                                    } : "fixed" == y ? {
                                        left: a(document).scrollLeft(),
                                        top: a(document).scrollTop()
                                    } : {
                                        left: 0,
                                        top: 0
                                    }, q = X(0), r = Y(0), (O.x2 > t || O.y2 > u) && lb())
                                }

                                function eb(b) {
                                    if (J) {
                                        switch (k.css({
                                            left: X(O.x1),
                                            top: Y(O.y1)
                                        }).add(l).width(U = O.width).height(V = O.height), l.add(m).add(o).css({
                                            left: 0,
                                            top: 0
                                        }), m.width(c(U - m.outerWidth() + m.innerWidth(), 0)).height(c(V - m.outerHeight() + m.innerHeight(), 0)), a(n[0]).css({
                                            left: q,
                                            top: r,
                                            width: O.x1,
                                            height: u
                                        }), a(n[1]).css({
                                            left: q + O.x1,
                                            top: r,
                                            width: U,
                                            height: O.y1
                                        }), a(n[2]).css({
                                            left: q + O.x2,
                                            top: r,
                                            width: t - O.x2,
                                            height: u
                                        }), a(n[3]).css({
                                            left: q + O.x1,
                                            top: r + O.y2,
                                            width: U,
                                            height: u - O.y2
                                        }), U -= o.outerWidth(), V -= o.outerHeight(), o.length) {
                                            case 8:
                                                a(o[4]).css({
                                                    left: U >> 1
                                                }), a(o[5]).css({
                                                    left: U,
                                                    top: V >> 1
                                                }), a(o[6]).css({
                                                    left: U >> 1,
                                                    top: V
                                                }), a(o[7]).css({
                                                    top: V >> 1
                                                });
                                            case 4:
                                                o.slice(1, 3).css({
                                                    left: U
                                                }), o.slice(2, 4).css({
                                                    top: V
                                                })
                                        }
                                        b !== !1 && (a.imgAreaSelect.keyPress != ub && a(document).unbind(a.imgAreaSelect.keyPress, a.imgAreaSelect.onKeyPress), h.keys && a(document)[a.imgAreaSelect.keyPress](a.imgAreaSelect.onKeyPress = ub)), a.browser.msie && m.outerWidth() - m.innerWidth() == 2 && (m.css("margin", 0), setTimeout(function() {
                                            m.css("margin", "auto")
                                        }, 0))
                                    }
                                }

                                function fb(a) {
                                    db(), eb(a), K = X(O.x1), L = Y(O.y1), M = X(O.x2), N = Y(O.y2)
                                }

                                function gb(a, b) {
                                    h.fadeSpeed ? a.fadeOut(h.fadeSpeed, b) : a.hide()
                                }

                                function hb(a) {
                                    var b = Z(_(a)) - O.x1,
                                        c = $(ab(a)) - O.y1;
                                    W || (db(), W = !0, k.one("mouseout", function() {
                                        W = !1
                                    })), D = "", h.resizable && (c <= h.resizeMargin ? D = "n" : c >= O.height - h.resizeMargin && (D = "s"), b <= h.resizeMargin ? D += "w" : b >= O.width - h.resizeMargin && (D += "e")), k.css("cursor", D ? D + "-resize" : h.movable ? "move" : ""), p && p.toggle()
                                }

                                function ib() {
                                    a("body").css("cursor", ""), (h.autoHide || O.width * O.height == 0) && gb(k.add(n), function() {
                                        a(this).hide()
                                    }), a(document).unbind("mousemove", mb), k.mousemove(hb), h.onSelectEnd(g, bb())
                                }

                                function jb(b) {
                                    return 1 != b.which ? !1 : (db(), D ? (a("body").css("cursor", D + "-resize"), K = X(O[/w/.test(D) ? "x2" : "x1"]), L = Y(O[/n/.test(D) ? "y2" : "y1"]), a(document).mousemove(mb).one("mouseup", ib), k.unbind("mousemove", hb)) : h.movable ? (z = q + O.x1 - _(b), A = r + O.y1 - ab(b), k.unbind("mousemove", hb), a(document).mousemove(ob).one("mouseup", function() {
                                        h.onSelectEnd(g, bb()), a(document).unbind("mousemove", ob), k.mousemove(hb)
                                    })) : i.mousedown(b), !1)
                                }

                                function kb(a) {
                                    I && (a ? (M = c(q, d(q + t, K + b(N - L) * I * (M > K || -1))), N = e(c(r, d(r + u, L + b(M - K) / I * (N > L || -1)))), M = e(M)) : (N = c(r, d(r + u, L + b(M - K) / I * (N > L || -1))), M = e(c(q, d(q + t, K + b(N - L) * I * (M > K || -1)))), N = e(N)))
                                }

                                function lb() {
                                    K = d(K, q + t), L = d(L, r + u), b(M - K) < E && (M = K - E * (K > M || -1), q > M ? K = q + E : M > q + t && (K = q + t - E)), b(N - L) < F && (N = L - F * (L > N || -1), r > N ? L = r + F : N > r + u && (L = r + u - F)), M = c(q, d(M, q + t)), N = c(r, d(N, r + u)), kb(b(M - K) < b(N - L) * I), b(M - K) > G && (M = K - G * (K > M || -1), kb()), b(N - L) > H && (N = L - H * (L > N || -1), kb(!0)), O = {
                                        x1: Z(d(K, M)),
                                        x2: Z(c(K, M)),
                                        y1: $(d(L, N)),
                                        y2: $(c(L, N)),
                                        width: b(M - K),
                                        height: b(N - L)
                                    }, eb(), h.onSelectChange(g, bb())
                                }

                                function mb(a) {
                                    return M = /w|e|^$/.test(D) || I ? _(a) : X(O.x2), N = /n|s|^$/.test(D) || I ? ab(a) : Y(O.y2), lb(), !1
                                }

                                function nb(b, c) {
                                    M = (K = b) + O.width, N = (L = c) + O.height, a.extend(O, {
                                        x1: Z(K),
                                        y1: $(L),
                                        x2: Z(M),
                                        y2: $(N)
                                    }), eb(), h.onSelectChange(g, bb())
                                }

                                function ob(a) {
                                    return K = c(q, d(z + _(a), q + t - O.width)), L = c(r, d(A + ab(a), r + u - O.height)), nb(K, L), a.preventDefault(), !1
                                }

                                function pb() {
                                    a(document).unbind("mousemove", pb), db(), M = K, N = L, lb(), D = "", n.is(":visible") || k.add(n).hide().fadeIn(h.fadeSpeed || 0), J = !0, a(document).unbind("mouseup", qb).mousemove(mb).one("mouseup", ib), k.unbind("mousemove", hb), h.onSelectStart(g, bb())
                                }

                                function qb() {
                                    a(document).unbind("mousemove", pb).unbind("mouseup", qb), gb(k.add(n)), cb(Z(K), $(L), Z(K), $(L)), this instanceof a.imgAreaSelect || (h.onSelectChange(g, bb()), h.onSelectEnd(g, bb()))
                                }

                                function rb(b) {
                                    return 1 != b.which || n.is(":animated") ? !1 : (db(), z = K = _(b), A = L = ab(b), a(document).mousemove(pb).mouseup(qb), !1)
                                }

                                function sb() {
                                    fb(!1)
                                }

                                function tb() {
                                    j = !0, wb(h = a.extend({
                                        classPrefix: "imgareaselect",
                                        movable: !0,
                                        parent: "body",
                                        resizable: !0,
                                        resizeMargin: 10,
                                        onInit: function() {},
                                        onSelectStart: function() {},
                                        onSelectChange: function() {},
                                        onSelectEnd: function() {}
                                    }, h)), k.add(n).css({
                                        visibility: ""
                                    }), h.show && (J = !0, db(), eb(), k.add(n).hide().fadeIn(h.fadeSpeed || 0)), setTimeout(function() {
                                        h.onInit(g, bb())
                                    }, 0)
                                }

                                function vb(a, b) {
                                    for (var c in b) void 0 !== h[c] && a.css(b[c], h[c])
                                }

                                function wb(b) {
                                    if (b.parent && (v = a(b.parent)).append(k.add(n)), a.extend(h, b), db(), null != b.handles) {
                                        for (o.remove(), o = a([]), S = b.handles ? "corners" == b.handles ? 4 : 8 : 0; S--;) o = o.add(f());
                                        o.addClass(h.classPrefix + "-handle").css({
                                            position: "absolute",
                                            fontSize: 0,
                                            zIndex: x + 1 || 1
                                        }), !parseInt(o.css("width")) >= 0 && o.width(5).height(5), (T = h.borderWidth) && o.css({
                                            borderWidth: T,
                                            borderStyle: "solid"
                                        }), vb(o, {
                                            borderColor1: "border-color",
                                            borderColor2: "background-color",
                                            borderOpacity: "opacity"
                                        })
                                    }
                                    for (B = h.imageWidth / t || 1, C = h.imageHeight / u || 1, null != b.x1 && (cb(b.x1, b.y1, b.x2, b.y2), b.show = !b.hide), b.keys && (h.keys = a.extend({
                                            shift: 1,
                                            ctrl: "resize"
                                        }, b.keys)), n.addClass(h.classPrefix + "-outer"), l.addClass(h.classPrefix + "-selection"), S = 0; S++ < 4;) a(m[S - 1]).addClass(h.classPrefix + "-border" + S);
                                    vb(l, {
                                        selectionColor: "background-color",
                                        selectionOpacity: "opacity"
                                    }), vb(m, {
                                        borderOpacity: "opacity",
                                        borderWidth: "border-width"
                                    }), vb(n, {
                                        outerColor: "background-color",
                                        outerOpacity: "opacity"
                                    }), (T = h.borderColor1) && a(m[0]).css({
                                        borderStyle: "solid",
                                        borderColor: T
                                    }), (T = h.borderColor2) && a(m[1]).css({
                                        borderStyle: "dashed",
                                        borderColor: T
                                    }), k.append(l.add(m).add(p).add(o)), a.browser.msie && ((T = (n.css("filter") || "").match(/opacity=(\d+)/)) && n.css("opacity", T[1] / 100), (T = (m.css("filter") || "").match(/opacity=(\d+)/)) && m.css("opacity", T[1] / 100)), b.hide ? gb(k.add(n)) : b.show && j && (J = !0, k.add(n).fadeIn(h.fadeSpeed || 0), fb()), I = (R = (h.aspectRatio || "").split(/:/))[0] / R[1], i.add(n).unbind("mousedown", rb), h.disable || h.enable === !1 ? (k.unbind("mousemove", hb).unbind("mousedown", jb), a(window).unbind("resize", sb)) : ((h.enable || h.disable === !1) && ((h.resizable || h.movable) && k.mousemove(hb).mousedown(jb), a(window).resize(sb)), h.persistent || i.add(n).mousedown(rb)), h.enable = h.disable = void 0
                                }
                                var j, p, q, r, t, u, v, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, Q, R, S, T, U, V, W, i = a(g),
                                    k = f(),
                                    l = f(),
                                    m = f().add(f()).add(f()).add(f()),
                                    n = f().add(f()).add(f()).add(f()),
                                    o = a([]),
                                    s = {
                                        left: 0,
                                        top: 0
                                    },
                                    w = {
                                        left: 0,
                                        top: 0
                                    },
                                    x = 0,
                                    y = "absolute",
                                    O = {
                                        x1: 0,
                                        y1: 0,
                                        x2: 0,
                                        y2: 0,
                                        width: 0,
                                        height: 0
                                    },
                                    P = document.documentElement,
                                    ub = function(a) {
                                        var e, f, b = h.keys,
                                            g = a.keyCode;
                                        if (e = isNaN(b.alt) || !a.altKey && !a.originalEvent.altKey ? !isNaN(b.ctrl) && a.ctrlKey ? b.ctrl : !isNaN(b.shift) && a.shiftKey ? b.shift : isNaN(b.arrows) ? 10 : b.arrows : b.alt, "resize" == b.arrows || "resize" == b.shift && a.shiftKey || "resize" == b.ctrl && a.ctrlKey || "resize" == b.alt && (a.altKey || a.originalEvent.altKey)) {
                                            switch (g) {
                                                case 37:
                                                    e = -e;
                                                case 39:
                                                    f = c(K, M), K = d(K, M), M = c(f + e, K), kb();
                                                    break;
                                                case 38:
                                                    e = -e;
                                                case 40:
                                                    f = c(L, N), L = d(L, N), N = c(f + e, L), kb(!0);
                                                    break;
                                                default:
                                                    return
                                            }
                                            lb()
                                        } else switch (K = d(K, M), L = d(L, N), g) {
                                            case 37:
                                                nb(c(K - e, q), L);
                                                break;
                                            case 38:
                                                nb(K, c(L - e, r));
                                                break;
                                            case 39:
                                                nb(K + d(e, t - Z(M)), L);
                                                break;
                                            case 40:
                                                nb(K, L + d(e, u - $(N)));
                                                break;
                                            default:
                                                return
                                        }
                                        return !1
                                    };
                                for (this.remove = function() {
                                        wb({
                                            disable: !0
                                        }), k.add(n).remove()
                                    }, this.getOptions = function() {
                                        return h
                                    }, this.setOptions = wb, this.getSelection = bb, this.setSelection = cb, this.cancelSelection = qb, this.update = fb, Q = i; Q.length;) x = c(x, isNaN(Q.css("z-index")) ? x : Q.css("z-index")), "fixed" == Q.css("position") && (y = "fixed"), Q = Q.parent(":not(body)");
                                x = h.zIndex || x, a.browser.msie && i.attr("unselectable", "on"), a.imgAreaSelect.keyPress = a.browser.msie || a.browser.safari ? "keydown" : "keypress", a.browser.opera && (p = f().css({
                                    width: "100%",
                                    height: "100%",
                                    position: "absolute",
                                    zIndex: x + 2 || 2
                                })), k.add(n).css({
                                    visibility: "hidden",
                                    position: y,
                                    overflow: "hidden",
                                    zIndex: x || "0"
                                }), k.css({
                                    zIndex: x + 2 || 2
                                }), l.add(m).css({
                                    position: "absolute",
                                    fontSize: 0
                                }), g.complete || "complete" == g.readyState || !i.is("img") ? tb() : i.one("load", tb), !j && a.browser.msie && a.browser.version >= 7 && (g.src = g.src)
                            }, a.fn.imgAreaSelect = function(b) {
                                return b = b || {}, this.each(function() {
                                    a(this).data("imgAreaSelect") ? b.remove ? (a(this).data("imgAreaSelect").remove(), a(this).removeData("imgAreaSelect")) : a(this).data("imgAreaSelect").setOptions(b) : b.remove || (void 0 === b.enable && void 0 === b.disable && (b.enable = !0), a(this).data("imgAreaSelect", new a.imgAreaSelect(this, b)))
                                }), b.instance ? a(this).data("imgAreaSelect") : this
                            }
                        }(c)
                    };
                d(), b.resolveWith(d)
            };
            FD31.module("imgareaselect", a)
        }(),
        function() {
            var moduleFactory = function($) {
                var module = this,
                    jQuery = $,
                    exports = function() {
                        ! function($) {
                            $.fn.markItUp = function(settings, extraSettings) {
                                var method, params, options, ctrlKey, shiftKey, altKey;
                                return ctrlKey = shiftKey = altKey = !1, "string" == typeof settings && (method = settings, params = extraSettings), options = {
                                    id: "",
                                    nameSpace: "",
                                    root: "",
                                    previewHandler: !1,
                                    previewInWindow: "",
                                    previewInElement: "",
                                    previewAutoRefresh: !0,
                                    previewPosition: "after",
                                    previewTemplatePath: "~/templates/preview.html",
                                    previewParser: !1,
                                    previewParserPath: "",
                                    previewParserVar: "data",
                                    resizeHandle: !0,
                                    beforeInsert: "",
                                    afterInsert: "",
                                    onEnter: {},
                                    onShiftEnter: {},
                                    onCtrlEnter: {},
                                    onTab: {},
                                    markupSet: [{}]
                                }, $.extend(options, settings, $.markItUp.sets[(extraSettings || settings || {}).set], extraSettings), options.root || $("script").each(function(a, b) {
                                    miuScript = $(b).get(0).src.match(/(.*)jquery\.markitup(\.pack)?\.js$/), null !== miuScript && (options.root = miuScript[1])
                                }), this.each(function() {
                                    function localize(a, b) {
                                        return b ? a.replace(/("|')~\//g, "$1" + options.root) : a.replace(/^~\//, options.root)
                                    }

                                    function init() {
                                        id = "", nameSpace = "", options.id ? id = 'id="' + options.id + '"' : $$.attr("id") && (id = 'id="markItUp' + $$.attr("id").substr(0, 1).toUpperCase() + $$.attr("id").substr(1) + '"'), options.nameSpace && (nameSpace = 'class="' + options.nameSpace + '"'), $$.wrap("<div " + nameSpace + "></div>"), $$.wrap("<div " + id + ' class="markItUp"></div>'), $$.wrap('<div class="markItUpContainer"></div>'), $$.addClass("markItUpEditor"), header = $('<div class="markItUpHeader"></div>').insertBefore($$), $(dropMenus(options.markupSet)).appendTo(header), footer = $('<div class="markItUpFooter"></div>').insertAfter($$), $$.wrap('<div class="markItUpExpanding"></div>'), options.resizeHandle === !0 && $.browser.safari !== !0 && (resizeHandle = $('<div class="markItUpResizeHandle"></div>').insertAfter($$).bind("mousedown.markItUp", function(a) {
                                            var d, e, b = $$.height(),
                                                c = a.clientY;
                                            d = function(a) {
                                                return $$.css("height", Math.max(20, a.clientY + b - c) + "px"), !1
                                            }, e = function() {
                                                return $("html").unbind("mousemove.markItUp", d).unbind("mouseup.markItUp", e), !1
                                            }, $("html").bind("mousemove.markItUp", d).bind("mouseup.markItUp", e)
                                        }), footer.append(resizeHandle)), $$.bind("keydown.markItUp", keyPressed).bind("keyup", keyPressed), $$.bind("insertion.markItUp", function(a, b) {
                                            b.target !== !1 && get(), textarea === $.markItUp.focused && markup(b)
                                        }), $$.bind("focus.markItUp", function() {
                                            $.markItUp.focused = this
                                        }), options.previewInElement && refreshPreview()
                                    }

                                    function dropMenus(markupSet) {
                                        var ul = $("<ul></ul>"),
                                            i = 0;
                                        return $("li:hover > ul", ul).css("display", "block"), $.each(markupSet, function() {
                                            var button = this,
                                                t = "",
                                                title, li, j;
                                            if (title = button.key ? (button.name || "") + " [Ctrl+" + button.key + "]" : button.name || "", key = button.key ? 'accesskey="' + button.key + '"' : "", button.separator) li = $('<li class="markItUpSeparator">' + (button.separator || "") + "</li>").appendTo(ul);
                                            else {
                                                for (i++, j = levels.length - 1; j >= 0; j--) t += levels[j] + "-";
                                                li = $('<li class="markItUpButton markItUpButton' + t + i + " " + (button.className || "") + '"><a href="" ' + key + ' title="' + title + '">' + (button.name || "") + "</a></li>").bind("contextmenu.markItUp", function() {
                                                    return !1
                                                }).bind("click.markItUp", function() {
                                                    return !1
                                                }).bind("focusin.markItUp", function() {
                                                    $$.focus()
                                                }).bind("mouseup", function() {
                                                    return button.call && eval(button.call)(), setTimeout(function() {
                                                        markup(button)
                                                    }, 1), !1
                                                }).bind("mouseenter.markItUp", function() {
                                                    $("> ul", this).show(), $(document).one("click", function() {
                                                        $("ul ul", header).hide()
                                                    })
                                                }).bind("mouseleave.markItUp", function() {
                                                    $("> ul", this).hide()
                                                }).appendTo(ul), button.dropMenu && (levels.push(i), $(li).addClass("markItUpDropMenu").append(dropMenus(button.dropMenu)))
                                            }
                                        }), levels.pop(), ul
                                    }

                                    function magicMarkups(a) {
                                        return a ? (a = a.toString(), a = a.replace(/\(\!\(([\s\S]*?)\)\!\)/g, function(a, b) {
                                            var c = b.split("|!|");
                                            return altKey === !0 ? void 0 !== c[1] ? c[1] : c[0] : void 0 === c[1] ? "" : c[0]
                                        }), a = a.replace(/\[\!\[([\s\S]*?)\]\!\]/g, function(a, b) {
                                            var c = b.split(":!:");
                                            return abort === !0 ? !1 : (value = prompt(c[0], c[1] ? c[1] : ""), null === value && (abort = !0), value)
                                        })) : ""
                                    }

                                    function prepare(a) {
                                        return $.isFunction(a) && (a = a(hash)), magicMarkups(a)
                                    }

                                    function build(a) {
                                        var b = prepare(clicked.openWith),
                                            c = prepare(clicked.placeHolder),
                                            d = prepare(clicked.replaceWith),
                                            e = prepare(clicked.closeWith),
                                            f = prepare(clicked.openBlockWith),
                                            g = prepare(clicked.closeBlockWith),
                                            h = clicked.multiline;
                                        if ("" !== d) block = b + d + e;
                                        else if ("" === selection && "" !== c) block = b + c + e;
                                        else {
                                            a = a || selection;
                                            var i = [a],
                                                j = [];
                                            h === !0 && (i = a.split(/\r?\n/));
                                            for (var k = 0; k < i.length; k++) {
                                                line = i[k];
                                                var l;
                                                (l = line.match(/ *$/)) ? j.push(b + line.replace(/ *$/g, "") + e + l): j.push(b + line + e)
                                            }
                                            block = j.join("\n")
                                        }
                                        return block = f + block + g, {
                                            block: block,
                                            openWith: b,
                                            replaceWith: d,
                                            placeHolder: c,
                                            closeWith: e
                                        }
                                    }

                                    function markup(a) {
                                        var b, c, d, e;
                                        if (hash = clicked = a, get(), $.extend(hash, {
                                                line: "",
                                                root: options.root,
                                                textarea: textarea,
                                                selection: selection || "",
                                                caretPosition: caretPosition,
                                                ctrlKey: ctrlKey,
                                                shiftKey: shiftKey,
                                                altKey: altKey
                                            }), prepare(options.beforeInsert), prepare(clicked.beforeInsert), (ctrlKey === !0 && shiftKey === !0 || a.multiline === !0) && prepare(clicked.beforeMultiInsert), $.extend(hash, {
                                                line: 1
                                            }), ctrlKey === !0 && shiftKey === !0) {
                                            for (lines = selection.split(/\r?\n/), c = 0, d = lines.length, e = 0; d > e; e++) "" !== $.trim(lines[e]) ? ($.extend(hash, {
                                                line: ++c,
                                                selection: lines[e]
                                            }), lines[e] = build(lines[e]).block) : lines[e] = "";
                                            string = {
                                                block: lines.join("\n")
                                            }, start = caretPosition, b = string.block.length + ($.browser.opera ? d - 1 : 0)
                                        } else ctrlKey === !0 ? (string = build(selection), start = caretPosition + string.openWith.length, b = string.block.length - string.openWith.length - string.closeWith.length, b -= string.block.match(/ $/) ? 1 : 0, b -= fixIeBug(string.block)) : shiftKey === !0 ? (string = build(selection), start = caretPosition, b = string.block.length, b -= fixIeBug(string.block)) : (string = build(selection), start = caretPosition + string.block.length, b = 0, start -= fixIeBug(string.block));
                                        "" === selection && "" === string.replaceWith && (caretOffset += fixOperaBug(string.block), start = caretPosition + string.openWith.length, b = string.block.length - string.openWith.length - string.closeWith.length, caretOffset = $$.val().substring(caretPosition, $$.val().length).length, caretOffset -= fixOperaBug($$.val().substring(0, caretPosition))), $.extend(hash, {
                                            caretPosition: caretPosition,
                                            scrollPosition: scrollPosition
                                        }), string.block !== selection && abort === !1 ? (insert(string.block), set(start, b)) : caretOffset = -1, get(), $.extend(hash, {
                                            line: "",
                                            selection: selection
                                        }), (ctrlKey === !0 && shiftKey === !0 || a.multiline === !0) && prepare(clicked.afterMultiInsert), prepare(clicked.afterInsert), prepare(options.afterInsert), previewWindow && options.previewAutoRefresh && refreshPreview(), shiftKey = altKey = ctrlKey = abort = !1
                                    }

                                    function fixOperaBug(a) {
                                        return $.browser.opera ? a.length - a.replace(/\n*/g, "").length : 0
                                    }

                                    function fixIeBug(a) {
                                        return $.browser.msie ? a.length - a.replace(/\r*/g, "").length : 0
                                    }

                                    function insert(a) {
                                        if (document.selection) {
                                            var b = document.selection.createRange();
                                            b.text = a
                                        } else textarea.value = textarea.value.substring(0, caretPosition) + a + textarea.value.substring(caretPosition + selection.length, textarea.value.length)
                                    }

                                    function set(a, b) {
                                        if (textarea.createTextRange) {
                                            if ($.browser.opera && $.browser.version >= 9.5 && 0 == b) return !1;
                                            range = textarea.createTextRange(), range.collapse(!0), range.moveStart("character", a), range.moveEnd("character", b), range.select()
                                        } else textarea.setSelectionRange && textarea.setSelectionRange(a, a + b);
                                        textarea.scrollTop = scrollPosition, textarea.focus()
                                    }

                                    function get() {
                                        if (textarea.focus(), scrollPosition = textarea.scrollTop, document.selection)
                                            if (selection = document.selection.createRange().text, $.browser.msie) {
                                                var a = document.selection.createRange(),
                                                    b = a.duplicate();
                                                for (b.moveToElementText(textarea), caretPosition = -1; b.inRange(a);) b.moveStart("character"), caretPosition++
                                            } else caretPosition = textarea.selectionStart;
                                        else caretPosition = textarea.selectionStart, selection = textarea.value.substring(caretPosition, textarea.selectionEnd);
                                        return selection
                                    }

                                    function preview() {
                                        "function" == typeof options.previewHandler ? previewWindow = !0 : options.previewInElement ? previewWindow = $(options.previewInElement) : !previewWindow || previewWindow.closed ? options.previewInWindow ? (previewWindow = window.open("", "preview", options.previewInWindow), $(window).unload(function() {
                                            previewWindow.close()
                                        })) : (iFrame = $('<iframe class="markItUpPreviewFrame"></iframe>'), "after" == options.previewPosition ? iFrame.insertAfter(footer) : iFrame.insertBefore(header), previewWindow = iFrame[iFrame.length - 1].contentWindow || frame[iFrame.length - 1]) : altKey === !0 && (iFrame ? iFrame.remove() : previewWindow.close(), previewWindow = iFrame = !1), options.previewAutoRefresh || refreshPreview(), options.previewInWindow && previewWindow.focus()
                                    }

                                    function refreshPreview() {
                                        renderPreview()
                                    }

                                    function renderPreview() {
                                        if (options.previewHandler && "function" == typeof options.previewHandler) options.previewHandler($$.val());
                                        else if (options.previewParser && "function" == typeof options.previewParser) {
                                            var b = options.previewParser($$.val());
                                            writeInPreview(localize(b, 1))
                                        } else "" !== options.previewParserPath ? $.ajax({
                                            type: "POST",
                                            dataType: "text",
                                            global: !1,
                                            url: options.previewParserPath,
                                            data: options.previewParserVar + "=" + encodeURIComponent($$.val()),
                                            success: function(a) {
                                                writeInPreview(localize(a, 1))
                                            }
                                        }) : template || $.ajax({
                                            url: options.previewTemplatePath,
                                            dataType: "text",
                                            global: !1,
                                            success: function(a) {
                                                writeInPreview(localize(a, 1).replace(/<!-- content -->/g, $$.val()))
                                            }
                                        });
                                        return !1
                                    }

                                    function writeInPreview(a) {
                                        if (options.previewInElement) $(options.previewInElement).html(a);
                                        else if (previewWindow && previewWindow.document) {
                                            try {
                                                sp = previewWindow.document.documentElement.scrollTop
                                            } catch (b) {
                                                sp = 0
                                            }
                                            previewWindow.document.open(), previewWindow.document.write(a), previewWindow.document.close(), previewWindow.document.documentElement.scrollTop = sp
                                        }
                                    }

                                    function keyPressed(a) {
                                        if (shiftKey = a.shiftKey, altKey = a.altKey, ctrlKey = a.altKey && a.ctrlKey ? !1 : a.ctrlKey || a.metaKey, "keydown" === a.type) {
                                            if (ctrlKey === !0 && (li = $('a[accesskey="' + (13 == a.keyCode ? "\\n" : String.fromCharCode(a.keyCode)) + '"]', header).parent("li"), 0 !== li.length)) return ctrlKey = !1, setTimeout(function() {
                                                li.triggerHandler("mouseup")
                                            }, 1), !1;
                                            if (13 === a.keyCode || 10 === a.keyCode) return ctrlKey === !0 ? (ctrlKey = !1, markup(options.onCtrlEnter), options.onCtrlEnter.keepDefault) : shiftKey === !0 ? (shiftKey = !1, markup(options.onShiftEnter), options.onShiftEnter.keepDefault) : (markup(options.onEnter), options.onEnter.keepDefault);
                                            if (9 === a.keyCode) return 1 == shiftKey || 1 == ctrlKey || 1 == altKey ? !1 : -1 !== caretOffset ? (get(), caretOffset = $$.val().length - caretOffset, set(caretOffset, 0), caretOffset = -1, !1) : (markup(options.onTab), options.onTab.keepDefault)
                                        }
                                    }

                                    function remove() {
                                        $$.unbind(".markItUp").removeClass("markItUpEditor"), $$.parents("div.markItUp").parent("div").replaceWith($$), $$.data("markItUp", null)
                                    }
                                    var $$, textarea, levels, scrollPosition, caretPosition, caretOffset, clicked, hash, header, footer, previewWindow, template, iFrame, abort;
                                    if ($$ = $(this), textarea = this, levels = [], abort = !1, scrollPosition = caretPosition = 0, caretOffset = -1, options.previewParserPath = localize(options.previewParserPath), options.previewTemplatePath = localize(options.previewTemplatePath), method) switch (method) {
                                        case "remove":
                                            remove();
                                            break;
                                        case "insert":
                                            markup(params);
                                            break;
                                        default:
                                            $.error("Method " + method + " does not exist on jQuery.markItUp")
                                    } else init()
                                })
                            }, $.fn.markItUpRemove = function() {
                                return this.each(function() {
                                    $(this).markItUp("remove")
                                })
                            };
                            var sets;
                            "object" == typeof $.markItUp && (sets = $.markItUp.sets), $.markItUp = function(a) {
                                var b = {
                                    target: !1
                                };
                                return $.extend(b, a), b.target ? $(b.target).each(function() {
                                    $(this).focus(), $(this).trigger("insertion", [b])
                                }) : ($("textarea").trigger("insertion", [b]), void 0)
                            }, $.markItUp.sets = {}, sets && $.extend($.markItUp.sets, sets)
                        }(jQuery)
                    };
                exports(), module.resolveWith(exports)
            };
            FD31.module("markitup", moduleFactory)
        }(),
        function() {
            var a = function(a) {
                var b = this,
                    c = function() {
                        function f() {
                            var b = a(this).data("textareaClone");
                            b.find("div").text(this.value.replace(/\r\n/g, "\n") + " "), a(this).trigger("resize.expanding")
                        }
                        a.expandingTextarea = a.extend({
                            autoInitialize: !0,
                            initialSelector: "textarea.expanding",
                            opts: {
                                resize: function() {}
                            }
                        }, a.expandingTextarea || {});
                        var b = ["lineHeight", "textDecoration", "letterSpacing", "fontSize", "fontFamily", "fontStyle", "fontWeight", "textTransform", "textAlign", "direction", "wordSpacing", "fontSizeAdjust", "wordWrap", "word-break", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "boxSizing", "webkitBoxSizing", "mozBoxSizing", "msBoxSizing"],
                            c = {
                                position: "absolute",
                                height: "100%",
                                resize: "none"
                            },
                            d = {
                                visibility: "hidden",
                                border: "0 solid",
                                whiteSpace: "pre-wrap"
                            },
                            e = {
                                position: "relative"
                            };
                        a.fn.expandingTextarea = function(g) {
                            var h = a.extend({}, a.expandingTextarea.opts, g);
                            return "resize" === g ? this.trigger("input.expanding") : "destroy" === g ? (this.filter(".expanding-init").each(function() {
                                var b = a(this).removeClass("expanding-init");
                                b.attr("style", b.data("expanding-styles") || "").removeData("expanding-styles")
                            }), this) : (this.filter("textarea").not(".expanding-init").addClass("expanding-init").each(function() {
                                var g = a(this),
                                    i = g.parent(),
                                    j = a(a.parseHTML("<pre class='textareaClone'><div></div></pre>"));
                                g.after(j).data("textareaClone", j), i.css(e), g.data("expanding-styles", g.attr("style")), g.css(c), j.css(d), a.each(b, function(a, b) {
                                    var c = g.css(b);
                                    j.css(b) !== c && j.css(b, c)
                                }), g.bind("input.expanding propertychange.expanding keyup.expanding", f), f.apply(this), h.resize && g.bind("resize.expanding", h.resize)
                            }), this)
                        }, a(function() {
                            a.expandingTextarea.autoInitialize && a(a.expandingTextarea.initialSelector).expandingTextarea()
                        })
                    };
                c(), b.resolveWith(c)
            };
            FD31.module("expanding", a)
        }(),
        function() {
            var a = function(a) {
                var b = this,
                    c = a,
                    d = function() {
                        ! function(a, b, c) {
                            function j(a) {
                                var b = {},
                                    d = /^jQuery\d+$/;
                                return c.each(a.attributes, function(a, c) {
                                    c.specified && !d.test(c.name) && (b[c.name] = c.value)
                                }), b
                            }

                            function k(a, d) {
                                var e = this,
                                    f = c(e);
                                if (e.value == f.attr("placeholder") && f.hasClass("placeholder"))
                                    if (f.data("placeholder-password")) {
                                        if (f = f.hide().next().show().attr("id", f.removeAttr("id").data("placeholder-id")), a === !0) return f[0].value = d;
                                        f.focus()
                                    } else e.value = "", f.removeClass("placeholder"), e == b.activeElement && e.select()
                            }

                            function l() {
                                var a, b = this,
                                    d = c(b),
                                    f = this.id;
                                if ("" == b.value) {
                                    if ("password" == b.type) {
                                        if (!d.data("placeholder-textinput")) {
                                            try {
                                                a = d.clone().attr({
                                                    type: "text"
                                                })
                                            } catch (g) {
                                                a = c("<input>").attr(c.extend(j(this), {
                                                    type: "text"
                                                }))
                                            }
                                            a.removeAttr("name").data({
                                                "placeholder-password": !0,
                                                "placeholder-id": f
                                            }).bind("focus.placeholder", k), d.data({
                                                "placeholder-textinput": a,
                                                "placeholder-id": f
                                            }).before(a)
                                        }
                                        d = d.removeAttr("id").hide().prev().attr("id", f).show()
                                    }
                                    d.addClass("placeholder"), d[0].value = d.attr("placeholder")
                                } else d.removeClass("placeholder")
                            }
                            var h, i, d = "placeholder" in b.createElement("input"),
                                e = "placeholder" in b.createElement("textarea"),
                                f = c.fn,
                                g = c.valHooks;
                            d && e ? (i = f.placeholder = function() {
                                return this
                            }, i.input = i.textarea = !0) : (i = f.placeholder = function() {
                                var a = this;
                                return a.filter((d ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                                    "focus.placeholder": k,
                                    "blur.placeholder": l
                                }).data("placeholder-enabled", !0).trigger("blur.placeholder"), a
                            }, i.input = d, i.textarea = e, h = {
                                get: function(a) {
                                    var b = c(a);
                                    return b.data("placeholder-enabled") && b.hasClass("placeholder") ? "" : a.value
                                },
                                set: function(a, d) {
                                    var e = c(a);
                                    return e.data("placeholder-enabled") ? ("" == d ? (a.value = d, a != b.activeElement && l.call(a)) : e.hasClass("placeholder") ? k.call(a, !0, d) || (a.value = d) : a.value = d, e) : a.value = d
                                }
                            }, d || (g.input = h), e || (g.textarea = h), c(function() {
                                c(b).delegate("form", "submit.placeholder", function() {
                                    var a = c(".placeholder", this).each(k);
                                    setTimeout(function() {
                                        a.each(l)
                                    }, 10)
                                })
                            }), c(a).bind("beforeunload.placeholder", function() {
                                c(".placeholder").each(function() {
                                    this.value = ""
                                })
                            }))
                        }(window, document, c)
                    };
                d(), b.resolveWith(d)
            };
            FD31.module("placeholder", a)
        }(),
        function() {
            var a = function(a) {
                var b = this,
                    c = a,
                    d = function() {
                        ! function(a) {
                            function c(a) {
                                return "object" == typeof a ? a : {
                                    top: a,
                                    left: a
                                }
                            }
                            var b = a.scrollTo = function(b, c, d) {
                                a(window).scrollTo(b, c, d)
                            };
                            b.defaults = {
                                axis: "xy",
                                duration: parseFloat(a.fn.jquery) >= 1.3 ? 0 : 1,
                                limit: !0
                            }, b.window = function() {
                                return a(window)._scrollable()
                            }, a.fn._scrollable = function() {
                                return this.map(function() {
                                    var b = this,
                                        c = !b.nodeName || -1 != a.inArray(b.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
                                    if (!c) return b;
                                    var d = (b.contentWindow || b).document || b.ownerDocument || b;
                                    return /webkit/i.test(navigator.userAgent) || "BackCompat" == d.compatMode ? d.body : d.documentElement
                                })
                            }, a.fn.scrollTo = function(d, e, f) {
                                return "object" == typeof e && (f = e, e = 0), "function" == typeof f && (f = {
                                    onAfter: f
                                }), "max" == d && (d = 9e9), f = a.extend({}, b.defaults, f), e = e || f.duration, f.queue = f.queue && f.axis.length > 1, f.queue && (e /= 2), f.offset = c(f.offset), f.over = c(f.over), this._scrollable().each(function() {
                                    function m(a) {
                                        h.animate(k, e, f.easing, a && function() {
                                            a.call(this, d, f)
                                        })
                                    }
                                    if (null != d) {
                                        var j, g = this,
                                            h = a(g),
                                            i = d,
                                            k = {},
                                            l = h.is("html,body");
                                        switch (typeof i) {
                                            case "number":
                                            case "string":
                                                if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(i)) {
                                                    i = c(i);
                                                    break
                                                }
                                                if (i = a(i, this), !i.length) return;
                                            case "object":
                                                (i.is || i.style) && (j = (i = a(i)).offset())
                                        }
                                        a.each(f.axis.split(""), function(a, c) {
                                            var d = "x" == c ? "Left" : "Top",
                                                e = d.toLowerCase(),
                                                n = "scroll" + d,
                                                o = g[n],
                                                p = b.max(g, c);
                                            if (j) k[n] = j[e] + (l ? 0 : o - h.offset()[e]), f.margin && (k[n] -= parseInt(i.css("margin" + d)) || 0, k[n] -= parseInt(i.css("border" + d + "Width")) || 0), k[n] += f.offset[e] || 0, f.over[e] && (k[n] += i["x" == c ? "width" : "height"]() * f.over[e]);
                                            else {
                                                var q = i[e];
                                                k[n] = q.slice && "%" == q.slice(-1) ? parseFloat(q) / 100 * p : q
                                            }
                                            f.limit && /^\d+$/.test(k[n]) && (k[n] = k[n] <= 0 ? 0 : Math.min(k[n], p)), !a && f.queue && (o != k[n] && m(f.onAfterFirst), delete k[n])
                                        }), m(f.onAfter)
                                    }
                                }).end()
                            }, a.fn.scrollIntoView = function(b) {
                                var b = a(b);
                                if (!(b.length < 1)) {
                                    var c = this.offset(),
                                        d = this.height(),
                                        e = c.top,
                                        f = e + d,
                                        g = b.offset(),
                                        h = b.height(),
                                        i = g.top,
                                        j = i + h;
                                    return j > f ? this.scrollTo(b) : e > i ? this.scrollTo(b, {
                                        offset: -1 * (d - h)
                                    }) : void 0
                                }
                            }, b.max = function(b, c) {
                                var d = "x" == c ? "Width" : "Height",
                                    e = "scroll" + d;
                                if (!a(b).is("html,body")) return b[e] - a(b)[d.toLowerCase()]();
                                var f = "client" + d,
                                    g = b.ownerDocument.documentElement,
                                    h = b.ownerDocument.body;
                                return Math.max(g[e], h[e]) - Math.min(g[f], h[f])
                            }
                        }(c)
                    };
                d(), b.resolveWith(d)
            };
            FD31.module("scrollTo", a)
        }(),
        function() {
            var a = function(a) {
                var b = this,
                    c = function() {
                        ! function(b, c) {
                            var d = a(b),
                                e = a(c),
                                f = a.fancybox = function() {
                                    f.open.apply(this, arguments)
                                },
                                g = !1,
                                h = null;
                            a.extend(f, {
                                version: "2.0.4",
                                defaults: {
                                    padding: 15,
                                    margin: 20,
                                    width: 800,
                                    height: 600,
                                    minWidth: 200,
                                    minHeight: 200,
                                    maxWidth: 9999,
                                    maxHeight: 9999,
                                    autoSize: !0,
                                    fitToView: !0,
                                    aspectRatio: !1,
                                    topRatio: .5,
                                    fixed: !(a.browser.msie && a.browser.version <= 6) && "undefined" == typeof c.createTouch,
                                    scrolling: "auto",
                                    wrapCSS: "fancybox-default",
                                    arrows: !0,
                                    closeBtn: !0,
                                    closeClick: !1,
                                    nextClick: !1,
                                    mouseWheel: !0,
                                    autoPlay: !1,
                                    playSpeed: 3e3,
                                    modal: !1,
                                    loop: !0,
                                    ajax: {
                                        dataType: "html"
                                    },
                                    keys: {
                                        next: [13, 32, 34, 39, 40],
                                        prev: [8, 33, 37, 38],
                                        close: [27]
                                    },
                                    index: 0,
                                    type: null,
                                    href: null,
                                    content: null,
                                    title: null,
                                    tpl: {
                                        wrap: '<div class="fancybox-wrap"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div>',
                                        image: '<img class="fancybox-image" src="{href}" alt="" />',
                                        iframe: '<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0" ' + (a.browser.msie ? 'allowtransparency="true""' : "") + "></iframe>",
                                        swf: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',
                                        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                                        closeBtn: '<div title="Close" class="fancybox-item fancybox-close"></div>',
                                        next: '<a title="Next" class="fancybox-item fancybox-next"><span></span></a>',
                                        prev: '<a title="Previous" class="fancybox-item fancybox-prev"><span></span></a>'
                                    },
                                    openEffect: "fade",
                                    openSpeed: 250,
                                    openEasing: "swing",
                                    openOpacity: !0,
                                    openMethod: "zoomIn",
                                    closeEffect: "fade",
                                    closeSpeed: 250,
                                    closeEasing: "swing",
                                    closeOpacity: !0,
                                    closeMethod: "zoomOut",
                                    nextEffect: "elastic",
                                    nextSpeed: 300,
                                    nextEasing: "swing",
                                    nextMethod: "changeIn",
                                    prevEffect: "elastic",
                                    prevSpeed: 300,
                                    prevEasing: "swing",
                                    prevMethod: "changeOut",
                                    helpers: {
                                        overlay: {
                                            speedIn: 0,
                                            speedOut: 300,
                                            opacity: .8,
                                            css: {
                                                cursor: "pointer"
                                            },
                                            closeClick: !0
                                        },
                                        title: {
                                            type: "float"
                                        }
                                    },
                                    onCancel: a.noop,
                                    beforeLoad: a.noop,
                                    afterLoad: a.noop,
                                    beforeShow: a.noop,
                                    afterShow: a.noop,
                                    beforeClose: a.noop,
                                    afterClose: a.noop
                                },
                                group: {},
                                opts: {},
                                coming: null,
                                current: null,
                                isOpen: !1,
                                isOpened: !1,
                                wrap: null,
                                outer: null,
                                inner: null,
                                player: {
                                    timer: null,
                                    isActive: !1
                                },
                                ajaxLoad: null,
                                imgPreload: null,
                                transitions: {},
                                helpers: {},
                                open: function(b, c) {
                                    a.isArray(b) || (b = b.jquery ? a(b).get() : [b]), b.length && (f.close(!0), f.isActive = !0, f.opts = a.extend(!0, {}, f.defaults, c), f.group = b, f._start(f.opts.index || 0))
                                },
                                cancel: function() {
                                    f.coming && !1 === f.trigger("onCancel") || (f.coming = null, f.hideLoading(), f.ajaxLoad && f.ajaxLoad.abort(), f.ajaxLoad = null, f.imgPreload && (f.imgPreload.onload = f.imgPreload.onabort = f.imgPreload.onerror = null))
                                },
                                close: function(b) {
                                    f.cancel(), f.current && !1 !== f.trigger("beforeClose") && (f.unbindEvents(), !f.isOpen || b && b[0] === !0 ? (a(".fancybox-wrap").stop().trigger("onReset").remove(), f._afterZoomOut()) : (f.isOpen = f.isOpened = !1, a(".fancybox-item").remove(), f.wrap.stop(!0).removeClass("fancybox-opened"), f.inner.css("overflow", "hidden"), f.transitions[f.current.closeMethod]()))
                                },
                                play: function(b) {
                                    var c = function() {
                                            clearTimeout(f.player.timer)
                                        },
                                        d = function() {
                                            c(), f.current && f.player.isActive && (f.player.timer = setTimeout(f.next, f.current.playSpeed))
                                        },
                                        e = function() {
                                            c(), a("body").unbind(".player"), f.player.isActive = !1, f.trigger("onPlayEnd")
                                        },
                                        g = function() {
                                            f.current && (f.current.loop || f.current.index < f.group.length - 1) && (f.player.isActive = !0, a("body").bind({
                                                "afterShow.player onUpdate.player": d,
                                                "onCancel.player beforeClose.player": e,
                                                "beforeLoad.player": c
                                            }), d(), f.trigger("onPlayStart"))
                                        };
                                    f.player.isActive || b && b[0] === !1 ? e() : g()
                                },
                                next: function() {
                                    f.current && f.jumpto(f.current.index + 1)
                                },
                                prev: function() {
                                    f.current && f.jumpto(f.current.index - 1)
                                },
                                jumpto: function(a) {
                                    f.current && (a = parseInt(a, 10), f.group.length > 1 && f.current.loop && (a >= f.group.length ? a = 0 : 0 > a && (a = f.group.length - 1)), "undefined" != typeof f.group[a] && (f.cancel(), f._start(a)))
                                },
                                reposition: function(a) {
                                    f.isOpen && f.wrap.css(f._getPosition(a))
                                },
                                update: function() {
                                    f.isOpen && (g || (h = setTimeout(function() {
                                        g && (g = !1, f.current && (f.current.autoSize && (f.inner.height("auto"), f.current.height = f.inner.height()), f._setDimension(), f.current.canGrow && f.inner.height("auto"), f.reposition(), f.trigger("onUpdate")))
                                    }, 100)), g = !0)
                                },
                                toggle: function() {
                                    f.isOpen && (f.current.fitToView = !f.current.fitToView, f.update())
                                },
                                hideLoading: function() {
                                    a("#fancybox-loading").remove()
                                },
                                showLoading: function() {
                                    f.hideLoading(), a('<div id="fancybox-loading"><div></div></div>').click(f.cancel).appendTo("body")
                                },
                                getViewport: function() {
                                    return {
                                        x: d.scrollLeft(),
                                        y: d.scrollTop(),
                                        w: d.width(),
                                        h: d.height()
                                    }
                                },
                                unbindEvents: function() {
                                    f.wrap && f.wrap.unbind(".fb"), e.unbind(".fb"), d.unbind(".fb")
                                },
                                bindEvents: function() {
                                    var b = f.current,
                                        c = b.keys;
                                    b && (d.bind("resize.fb, orientationchange.fb", f.update), c && e.bind("keydown.fb", function(b) {
                                        var d;
                                        b.ctrlKey || b.altKey || b.shiftKey || b.metaKey || !(a.inArray(b.target.tagName.toLowerCase(), ["input", "textarea", "select", "button"]) < 0) || (d = b.keyCode, a.inArray(d, c.close) > -1 ? (f.close(), b.preventDefault()) : a.inArray(d, c.next) > -1 ? (f.next(), b.preventDefault()) : a.inArray(d, c.prev) > -1 && (f.prev(), b.preventDefault()))
                                    }), a.fn.mousewheel && b.mouseWheel && f.group.length > 1 && f.wrap.bind("mousewheel.fb", function(b, c) {
                                        var d = a(b.target).get(0);
                                        (0 === d.clientHeight || d.scrollHeight === d.clientHeight && d.scrollWidth === d.clientWidth) && (b.preventDefault(), f[c > 0 ? "prev" : "next"]())
                                    }))
                                },
                                trigger: function(b) {
                                    var c, d = f[a.inArray(b, ["onCancel", "beforeLoad", "afterLoad"]) > -1 ? "coming" : "current"];
                                    if (d) {
                                        if (a.isFunction(d[b]) && (c = d[b].apply(d, Array.prototype.slice.call(arguments, 1))), c === !1) return !1;
                                        d.helpers && a.each(d.helpers, function(c, e) {
                                            e && "undefined" != typeof f.helpers[c] && a.isFunction(f.helpers[c][b]) && f.helpers[c][b](e, d)
                                        }), a.event.trigger(b + ".fb")
                                    }
                                },
                                isImage: function(a) {
                                    return a && a.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i)
                                },
                                isSWF: function(a) {
                                    return a && a.match(/\.(swf)(.*)?$/i)
                                },
                                _start: function(b) {
                                    var e, g, h, i, c = {},
                                        d = f.group[b] || null;
                                    return d && "object" == typeof d && (d.nodeType || d instanceof a) && (e = !0, a.metadata && (c = a(d).metadata())), c = a.extend(!0, {}, f.opts, {
                                        index: b,
                                        element: d
                                    }, a.isPlainObject(d) ? d : c), a.each(["href", "title", "content", "type"], function(b, g) {
                                        c[g] = f.opts[g] || e && a(d).attr(g) || c[g] || null
                                    }), "number" == typeof c.margin && (c.margin = [c.margin, c.margin, c.margin, c.margin]), c.modal && a.extend(!0, c, {
                                        closeBtn: !1,
                                        closeClick: !1,
                                        nextClick: !1,
                                        arrows: !1,
                                        mouseWheel: !1,
                                        keys: null,
                                        helpers: {
                                            overlay: {
                                                css: {
                                                    cursor: "auto"
                                                },
                                                closeClick: !1
                                            }
                                        }
                                    }), f.coming = c, !1 === f.trigger("beforeLoad") ? (f.coming = null, void 0) : (h = c.type, g = c.href, h || (e && (i = a(d).data("fancybox-type"), !i && d.className && (i = d.className.match(/fancybox\.(\w+)/), h = i ? i[1] : null)), !h && g && (f.isImage(g) ? h = "image" : f.isSWF(g) ? h = "swf" : g.match(/^#/) && (h = "inline")), h || (h = e ? "inline" : "html"), c.type = h), "inline" === h || "html" === h ? (c.content = c.content || ("inline" === h && g ? a(g) : a(d)), c.content.length || (h = null)) : (c.href = g || d, c.href || (h = null)), c.group = f.group, c.isDom = e, "image" === h ? f._loadImage() : "ajax" === h ? f._loadAjax() : h ? f._afterLoad() : f._error("type"), void 0)
                                },
                                _error: function(b) {
                                    f.hideLoading(), a.extend(f.coming, {
                                        type: "html",
                                        autoSize: !0,
                                        minHeight: 0,
                                        hasError: b,
                                        content: f.coming.tpl.error
                                    }), f._afterLoad()
                                },
                                _loadImage: function() {
                                    f.imgPreload = new Image, f.imgPreload.onload = function() {
                                        this.onload = this.onerror = null, f.coming.width = this.width, f.coming.height = this.height, f._afterLoad()
                                    }, f.imgPreload.onerror = function() {
                                        this.onload = this.onerror = null, f._error("image")
                                    }, f.imgPreload.src = f.coming.href, f.imgPreload.width || f.showLoading()
                                },
                                _loadAjax: function() {
                                    f.showLoading(), f.ajaxLoad = a.ajax(a.extend({}, f.coming.ajax, {
                                        url: f.coming.href,
                                        error: function(a, b) {
                                            "abort" !== b ? f._error("ajax", a) : f.hideLoading()
                                        },
                                        success: function(a, b) {
                                            "success" === b && (f.coming.content = a, f._afterLoad())
                                        }
                                    }))
                                },
                                _preload: function() {
                                    var b = f.group,
                                        c = f.current.index;
                                    b.length > 1 && ((new Image).src = a(b[c + 1] || b[0]).attr("href"), (new Image).src = a(b[c - 1] || b[b.length - 1]).attr("href"))
                                },
                                _afterLoad: function() {
                                    return f.hideLoading(), f.coming && !1 !== f.trigger("afterLoad", f.current) ? (f.isOpened ? (a(".fancybox-item").remove(), f.wrap.stop(!0).removeClass("fancybox-opened"), f.inner.css("overflow", "hidden"), f.transitions[f.current.prevMethod]()) : (a(".fancybox-wrap").stop().trigger("onReset").remove(), f.trigger("afterClose")), f.unbindEvents(), f.isOpen = !1, f.current = f.coming, f.coming = !1, f.wrap = a(f.current.tpl.wrap).addClass("fancybox-tmp " + f.current.wrapCSS).appendTo("body"), f.outer = a(".fancybox-outer", f.wrap).css("padding", f.current.padding + "px"), f.inner = a(".fancybox-inner", f.wrap), f._setContent(), void 0) : (f.coming = !1, void 0)
                                },
                                _setContent: function() {
                                    var b, c, e = f.current,
                                        g = e.type;
                                    switch (g) {
                                        case "inline":
                                        case "ajax":
                                        case "html":
                                            b = e.content, "inline" === g && b instanceof a && (b = b.show().detach(), b.parent().hasClass("fancybox-inner") && b.parents(".fancybox-wrap").trigger("onReset").remove(), a(f.wrap).bind("onReset", function() {
                                                b.appendTo("body").hide()
                                            })), e.autoSize && (c = a('<div class="fancybox-tmp"></div>').appendTo("body").append(b), e.width = c.width(), e.height = c.height(), c.width(f.current.width), c.height() > e.height && (c.width(e.width + 1), e.width = c.width(), e.height = c.height()), b = c.contents().detach(), c.remove());
                                            break;
                                        case "image":
                                            b = e.tpl.image.replace("{href}", e.href), e.aspectRatio = !0;
                                            break;
                                        case "swf":
                                            b = e.tpl.swf.replace(/\{width\}/g, e.width).replace(/\{height\}/g, e.height).replace(/\{href\}/g, e.href)
                                    }
                                    if ("iframe" === g) {
                                        if (b = a(e.tpl.iframe.replace("{rnd}", (new Date).getTime())).attr({
                                                scrolling: e.scrolling,
                                                src: e.href
                                            }).appendTo(f.inner), e.scrolling = "auto", e.autoSize) return f.wrap.width(e.width), f.showLoading(), b.data("ready", !1).bind("load", function() {
                                            var c, b = a(this);
                                            try {
                                                this.contentWindow.document.location && (c = b.contents().find("body").height() + 12, b.height(c))
                                            } catch (d) {
                                                e.autoSize = !1
                                            }
                                            b.data("ready") === !1 ? (f.hideLoading(), c && (f.current.height = c), f._beforeShow(), b.data("ready", !0)) : c && f.update()
                                        }), void 0
                                    } else("image" === g || "swf" === g) && (e.autoSize = !1, e.scrolling = "visible"), f.inner.append(b);
                                    f._beforeShow()
                                },
                                _beforeShow: function() {
                                    f.trigger("beforeShow"), f._setDimension(), f.wrap.hide().removeClass("fancybox-tmp"), f.bindEvents(), f._preload(), f.transitions[f.isOpened ? f.current.nextMethod : f.current.openMethod]()
                                },
                                _setDimension: function() {
                                    var p, q, r, b = f.wrap,
                                        c = f.outer,
                                        d = f.inner,
                                        e = f.current,
                                        g = f.getViewport(),
                                        h = e.margin,
                                        i = 2 * e.padding,
                                        j = e.width,
                                        k = e.height,
                                        l = e.maxWidth,
                                        m = e.maxHeight,
                                        n = e.minWidth,
                                        o = e.minHeight;
                                    if (g.w -= h[1] + h[3], g.h -= h[0] + h[2], j.toString().indexOf("%") > -1 && (j = (g.w - i) * parseFloat(j) / 100), k.toString().indexOf("%") > -1 && (k = (g.h - i) * parseFloat(k) / 100), p = j / k, j += i, k += i, e.fitToView && (l = Math.min(g.w, l), m = Math.min(g.h, m)), n = Math.min(j, n), o = Math.min(k, o), l = Math.max(n, l), m = Math.max(o, m), e.aspectRatio ? (j > l && (j = l, k = (j - i) / p + i), k > m && (k = m, j = (k - i) * p + i), n > j && (j = n, k = (j - i) / p + i), o > k && (k = o, j = (k - i) * p + i)) : (j = Math.max(n, Math.min(j, l)), k = Math.max(o, Math.min(k, m))), j = Math.round(j), k = Math.round(k), a(b.add(c).add(d)).width("auto").height("auto"), d.width(j - i).height(k - i), b.width(j), q = b.height(), j > l || q > m)
                                        for (;
                                            (j > l || q > m) && j > n && q > o;) k -= 10, e.aspectRatio ? (j = Math.round((k - i) * p + i), n > j && (j = n, k = (j - i) / p + i)) : j -= 10, d.width(j - i).height(k - i), b.width(j), q = b.height();
                                    e.dim = {
                                        width: j,
                                        height: q
                                    }, e.canGrow = e.autoSize && k > o && m > k, e.canShrink = !1, e.canExpand = !1, j - i < e.width || k - i < e.height ? e.canExpand = !0 : (j > g.w || q > g.h) && j > n && k > o && (e.canShrink = !0), r = q - i, f.innerSpace = r - d.height(), f.outerSpace = r - c.height()
                                },
                                _getPosition: function(a) {
                                    var b = f.current,
                                        c = f.getViewport(),
                                        d = b.margin,
                                        e = f.wrap.width() + d[1] + d[3],
                                        g = f.wrap.height() + d[0] + d[2],
                                        h = {
                                            position: "absolute",
                                            top: d[0] + c.y,
                                            left: d[3] + c.x
                                        };
                                    return b.fixed && (!a || a[0] === !1) && g <= c.h && e <= c.w && (h = {
                                        position: "fixed",
                                        top: d[0],
                                        left: d[3]
                                    }), h.top = Math.ceil(Math.max(h.top, h.top + (c.h - g) * b.topRatio)) + "px", h.left = Math.ceil(Math.max(h.left, h.left + .5 * (c.w - e))) + "px", h
                                },
                                _afterZoomIn: function() {
                                    var b = f.current,
                                        c = b.scrolling;
                                    f.isOpen = f.isOpened = !0, f.wrap.addClass("fancybox-opened").css("overflow", "visible"), f.update(), f.inner.css("overflow", "yes" === c ? "scroll" : "no" === c ? "hidden" : c), (b.closeClick || b.nextClick) && f.inner.css("cursor", "pointer").bind("click.fb", b.nextClick ? f.next : f.close), b.closeBtn && a(b.tpl.closeBtn).appendTo(f.wrap).bind("click.fb", f.close), b.arrows && f.group.length > 1 && ((b.loop || b.index > 0) && a(b.tpl.prev).appendTo(f.wrap).bind("click.fb", f.prev), (b.loop || b.index < f.group.length - 1) && a(b.tpl.next).appendTo(f.wrap).bind("click.fb", f.next)), f.trigger("afterShow"), f.opts.autoPlay && !f.player.isActive && (f.opts.autoPlay = !1, f.play())
                                },
                                _afterZoomOut: function() {
                                    f.trigger("afterClose"), f.wrap.trigger("onReset").remove(), a.extend(f, {
                                        group: {},
                                        opts: {},
                                        current: null,
                                        isActive: !1,
                                        isOpened: !1,
                                        isOpen: !1,
                                        wrap: null,
                                        outer: null,
                                        inner: null
                                    })
                                }
                            }), f.transitions = {
                                getOrigPosition: function() {
                                    var j, b = f.current,
                                        c = b.element,
                                        d = b.padding,
                                        e = a(b.orig),
                                        g = {},
                                        h = 50,
                                        i = 50;
                                    return !e.length && b.isDom && a(c).is(":visible") && (e = a(c).find("img:first"), e.length || (e = a(c))), e.length ? (g = e.offset(), e.is("img") && (h = e.outerWidth(), i = e.outerHeight())) : (j = f.getViewport(), g.top = j.y + .5 * (j.h - i), g.left = j.x + .5 * (j.w - h)), g = {
                                        top: Math.ceil(g.top - d) + "px",
                                        left: Math.ceil(g.left - d) + "px",
                                        width: Math.ceil(h + 2 * d) + "px",
                                        height: Math.ceil(i + 2 * d) + "px"
                                    }
                                },
                                step: function(a, b) {
                                    var c, d, e;
                                    ("width" === b.prop || "height" === b.prop) && (d = e = Math.ceil(a - 2 * f.current.padding), "height" === b.prop && (c = (a - b.start) / (b.end - b.start), b.start > b.end && (c = 1 - c), d -= f.innerSpace * c, e -= f.outerSpace * c), f.inner[b.prop](d), f.outer[b.prop](e))
                                },
                                zoomIn: function() {
                                    var d, e, b = f.wrap,
                                        c = f.current,
                                        g = c.dim;
                                    "elastic" === c.openEffect ? (e = a.extend({}, g, f._getPosition(!0)), delete e.position, d = this.getOrigPosition(), c.openOpacity && (d.opacity = 0, e.opacity = 1), f.outer.add(f.inner).width("auto").height("auto"), b.css(d).show().animate(e, {
                                        duration: c.openSpeed,
                                        easing: c.openEasing,
                                        step: this.step,
                                        complete: f._afterZoomIn
                                    })) : (b.css(a.extend({}, g, f._getPosition())), "fade" === c.openEffect ? b.fadeIn(c.openSpeed, f._afterZoomIn) : (b.show(), f._afterZoomIn()))
                                },
                                zoomOut: function() {
                                    var c, a = f.wrap,
                                        b = f.current;
                                    "elastic" === b.closeEffect ? ("fixed" === a.css("position") && a.css(f._getPosition(!0)), c = this.getOrigPosition(), b.closeOpacity && (c.opacity = 0), a.animate(c, {
                                        duration: b.closeSpeed,
                                        easing: b.closeEasing,
                                        step: this.step,
                                        complete: f._afterZoomOut
                                    })) : a.fadeOut("fade" === b.closeEffect ? b.closeSpeed : 0, f._afterZoomOut)
                                },
                                changeIn: function() {
                                    var c, a = f.wrap,
                                        b = f.current;
                                    "elastic" === b.nextEffect ? (c = f._getPosition(!0), c.opacity = 0, c.top = parseInt(c.top, 10) - 200 + "px", a.css(c).show().animate({
                                        opacity: 1,
                                        top: "+=200px"
                                    }, {
                                        duration: b.nextSpeed,
                                        complete: f._afterZoomIn
                                    })) : (a.css(f._getPosition()), "fade" === b.nextEffect ? a.hide().fadeIn(b.nextSpeed, f._afterZoomIn) : (a.show(), f._afterZoomIn()))
                                },
                                changeOut: function() {
                                    var b = f.wrap,
                                        c = f.current,
                                        d = function() {
                                            a(this).trigger("onReset").remove()
                                        };
                                    b.removeClass("fancybox-opened"), "elastic" === c.prevEffect ? b.animate({
                                        opacity: 0,
                                        top: "+=200px"
                                    }, {
                                        duration: c.prevSpeed,
                                        complete: d
                                    }) : b.fadeOut("fade" === c.prevEffect ? c.prevSpeed : 0, d)
                                }
                            }, f.helpers.overlay = {
                                overlay: null,
                                update: function() {
                                    var b, f, g;
                                    this.overlay.width(0).height(0), a.browser.msie ? (f = Math.max(c.documentElement.scrollWidth, c.body.scrollWidth), g = Math.max(c.documentElement.offsetWidth, c.body.offsetWidth), b = g > f ? d.width() : f) : b = e.width(), this.overlay.width(b).height(e.height())
                                },
                                beforeShow: function(b) {
                                    this.overlay || (b = a.extend(!0, {
                                        speedIn: "fast",
                                        closeClick: !0,
                                        opacity: 1,
                                        css: {
                                            background: "black"
                                        }
                                    }, b), this.overlay = a('<div id="fancybox-overlay"></div>').css(b.css).appendTo("body"), this.update(), b.closeClick && this.overlay.bind("click.fb", f.close), d.bind("resize.fb", a.proxy(this.update, this)), this.overlay.fadeTo(b.speedIn, b.opacity))
                                },
                                onUpdate: function() {
                                    this.update()
                                },
                                afterClose: function(b) {
                                    this.overlay && this.overlay.fadeOut(b.speedOut || 0, function() {
                                        a(this).remove()
                                    }), this.overlay = null
                                }
                            }, f.helpers.title = {
                                beforeShow: function(b) {
                                    var c, d = f.current.title;
                                    d && (c = a('<div class="fancybox-title fancybox-title-' + b.type + '-wrap">' + d + "</div>").appendTo("body"), "float" === b.type && (c.width(c.width()), c.wrapInner('<span class="child"></span>'), f.current.margin[2] += Math.abs(parseInt(c.css("margin-bottom"), 10))), c.appendTo("over" === b.type ? f.inner : "outside" === b.type ? f.wrap : f.outer))
                                }
                            }, a.fn.fancybox = function(b) {
                                var g, c = a(this),
                                    d = this.selector || "",
                                    h = function(e) {
                                        var h = this,
                                            i = "rel",
                                            j = h[i],
                                            k = g;
                                        e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault(), j || (i = "data-fancybox-group", j = a(h).attr("data-fancybox-group")), j && "" !== j && "nofollow" !== j && (h = d.length ? a(d) : c, h = h.filter("[" + i + '="' + j + '"]'), k = h.index(this)), b.index = k, f.open(h, b))
                                    };
                                return b = b || {}, g = b.index || 0, d ? e.undelegate(d, "click.fb-start").delegate(d, "click.fb-start", h) : c.unbind("click.fb-start").bind("click.fb-start", h), this
                            }
                        }(window, document)
                    };
                c(), b.resolveWith(c)
            };
            FD31.module("fancybox", a)
        }(),
        function() {
            var a = function(a) {
                var b = this,
                    c = a;
                a.require().script("ui/core", "ui/widget", "ui/position", "ui/menu").done(function() {
                    var a = function() {
                        ! function(a) {
                            var c = 0;
                            a.widget("ui.autocomplete", {
                                version: "1.10.4pre",
                                defaultElement: "<input>",
                                options: {
                                    appendTo: "#fd_.ui",
                                    autoFocus: !1,
                                    delay: 300,
                                    minLength: 1,
                                    position: {
                                        my: "left top",
                                        at: "left bottom",
                                        collision: "none"
                                    },
                                    source: null,
                                    change: null,
                                    close: null,
                                    focus: null,
                                    open: null,
                                    response: null,
                                    search: null,
                                    select: null
                                },
                                pending: 0,
                                _create: function() {
                                    var b, c, d, e = this.element[0].nodeName.toLowerCase(),
                                        f = "textarea" === e,
                                        g = "input" === e;
                                    this.isMultiLine = f ? !0 : g ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[f || g ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                                        keydown: function(e) {
                                            if (this.element.prop("readOnly")) return b = !0, d = !0, c = !0, void 0;
                                            b = !1, d = !1, c = !1;
                                            var f = a.ui.keyCode;
                                            switch (e.keyCode) {
                                                case f.PAGE_UP:
                                                    b = !0, this._move("previousPage", e);
                                                    break;
                                                case f.PAGE_DOWN:
                                                    b = !0, this._move("nextPage", e);
                                                    break;
                                                case f.UP:
                                                    b = !0, this._keyEvent("previous", e);
                                                    break;
                                                case f.DOWN:
                                                    b = !0, this._keyEvent("next", e);
                                                    break;
                                                case f.ENTER:
                                                case f.NUMPAD_ENTER:
                                                    this.menu.active && (b = !0, e.preventDefault(), this.menu.select(e));
                                                    break;
                                                case f.TAB:
                                                    this.menu.active && this.menu.select(e);
                                                    break;
                                                case f.ESCAPE:
                                                    this.menu.element.is(":visible") && (this._value(this.term), this.close(e), e.preventDefault());
                                                    break;
                                                default:
                                                    c = !0, this._searchTimeout(e)
                                            }
                                        },
                                        keypress: function(d) {
                                            if (b) return b = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && d.preventDefault(), void 0;
                                            if (!c) {
                                                var e = a.ui.keyCode;
                                                switch (d.keyCode) {
                                                    case e.PAGE_UP:
                                                        this._move("previousPage", d);
                                                        break;
                                                    case e.PAGE_DOWN:
                                                        this._move("nextPage", d);
                                                        break;
                                                    case e.UP:
                                                        this._keyEvent("previous", d);
                                                        break;
                                                    case e.DOWN:
                                                        this._keyEvent("next", d)
                                                }
                                            }
                                        },
                                        input: function(a) {
                                            return d ? (d = !1, a.preventDefault(), void 0) : (this._searchTimeout(a), void 0)
                                        },
                                        focus: function() {
                                            this.selectedItem = null, this.previous = this._value()
                                        },
                                        blur: function(a) {
                                            return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(a), this._change(a), void 0)
                                        }
                                    }), this._initSource(), this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                                        role: null
                                    }).hide().data("ui-menu"), this._on(this.menu.element, {
                                        mousedown: function(b) {
                                            b.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                                                delete this.cancelBlur
                                            });
                                            var c = this.menu.element[0];
                                            a(b.target).closest(".ui-menu-item").length || this._delay(function() {
                                                var b = this;
                                                this.document.one("mousedown", function(d) {
                                                    d.target === b.element[0] || d.target === c || a.contains(c, d.target) || b.close()
                                                })
                                            })
                                        },
                                        menufocus: function(b, c) {
                                            if (this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type))) return this.menu.blur(), this.document.one("mousemove", function() {
                                                a(b.target).trigger(b.originalEvent)
                                            }), void 0;
                                            var d = c.item.data("ui-autocomplete-item");
                                            !1 !== this._trigger("focus", b, {
                                                item: d
                                            }) ? b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(d.value) : this.liveRegion.text(d.value)
                                        },
                                        menuselect: function(a, b) {
                                            var c = b.item.data("ui-autocomplete-item"),
                                                d = this.previous;
                                            this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = d, this._delay(function() {
                                                this.previous = d, this.selectedItem = c
                                            })), !1 !== this._trigger("select", a, {
                                                item: c
                                            }) && this._value(c.value), this.term = this._value(), this.close(a), this.selectedItem = c
                                        }
                                    }), this.liveRegion = a("<span>", {
                                        role: "status",
                                        "aria-live": "polite"
                                    }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
                                        beforeunload: function() {
                                            this.element.removeAttr("autocomplete")
                                        }
                                    })
                                },
                                _destroy: function() {
                                    clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
                                },
                                _setOption: function(a, b) {
                                    this._super(a, b), "source" === a && this._initSource(), "appendTo" === a && this.menu.element.appendTo(this._appendTo()), "disabled" === a && b && this.xhr && this.xhr.abort()
                                },
                                _appendTo: function() {
                                    var b = this.options.appendTo;
                                    return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b || (b = this.element.closest(".ui-front")), b.length || (b = this.document[0].body), b
                                },
                                _initSource: function() {
                                    var b, c, d = this;
                                    a.isArray(this.options.source) ? (b = this.options.source, this.source = function(c, d) {
                                        d(a.ui.autocomplete.filter(b, c.term))
                                    }) : "string" == typeof this.options.source ? (c = this.options.source, this.source = function(b, e) {
                                        d.xhr && d.xhr.abort(), d.xhr = a.ajax({
                                            url: c,
                                            data: b,
                                            dataType: "json",
                                            success: function(a) {
                                                e(a)
                                            },
                                            error: function() {
                                                e([])
                                            }
                                        })
                                    }) : this.source = this.options.source
                                },
                                _searchTimeout: function(a) {
                                    clearTimeout(this.searching), this.searching = this._delay(function() {
                                        this.term !== this._value() && (this.selectedItem = null, this.search(null, a))
                                    }, this.options.delay)
                                },
                                search: function(a, b) {
                                    return a = null != a ? a : this._value(), this.term = this._value(), a.length < this.options.minLength ? this.close(b) : this._trigger("search", b) !== !1 ? this._search(a) : void 0
                                },
                                _search: function(a) {
                                    this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                                        term: a
                                    }, this._response())
                                },
                                _response: function() {
                                    var a = this,
                                        b = ++c;
                                    return function(d) {
                                        b === c && a.__response(d), a.pending--, a.pending || a.element.removeClass("ui-autocomplete-loading")
                                    }
                                },
                                __response: function(a) {
                                    a && (a = this._normalize(a)), this._trigger("response", null, {
                                        content: a
                                    }), !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close()
                                },
                                close: function(a) {
                                    this.cancelSearch = !0, this._close(a)
                                },
                                _close: function(a) {
                                    this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
                                },
                                _change: function(a) {
                                    this.previous !== this._value() && this._trigger("change", a, {
                                        item: this.selectedItem
                                    })
                                },
                                _normalize: function(b) {
                                    return b.length && b[0].label && b[0].value ? b : a.map(b, function(b) {
                                        return "string" == typeof b ? {
                                            label: b,
                                            value: b
                                        } : a.extend({
                                            label: b.label || b.value,
                                            value: b.value || b.label
                                        }, b)
                                    })
                                },
                                _suggest: function(b) {
                                    var c = this.menu.element.empty();
                                    this._renderMenu(c, b), this.isNewMenu = !0, this.menu.refresh(), c.show(), this._resizeMenu(), c.position(a.extend({
                                        of: this.element
                                    }, this.options.position)), this.options.autoFocus && this.menu.next()
                                },
                                _resizeMenu: function() {
                                    var a = this.menu.element;
                                    a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
                                },
                                _renderMenu: function(b, c) {
                                    var d = this;
                                    a.each(c, function(a, c) {
                                        d._renderItemData(b, c)
                                    })
                                },
                                _renderItemData: function(a, b) {
                                    return this._renderItem(a, b).data("ui-autocomplete-item", b)
                                },
                                _renderItem: function(b, c) {
                                    return a("<li>").append(a("<a>").text(c.label)).appendTo(b)
                                },
                                _move: function(a, b) {
                                    return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a) ? (this._value(this.term), this.menu.blur(), void 0) : (this.menu[a](b), void 0) : (this.search(null, b), void 0)
                                },
                                widget: function() {
                                    return this.menu.element
                                },
                                _value: function() {
                                    return this.valueMethod.apply(this.element, arguments)
                                },
                                _keyEvent: function(a, b) {
                                    (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(a, b), b.preventDefault())
                                }
                            }), a.extend(a.ui.autocomplete, {
                                escapeRegex: function(a) {
                                    return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                                },
                                filter: function(b, c) {
                                    var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
                                    return a.grep(b, function(a) {
                                        return d.test(a.label || a.value || a)
                                    })
                                }
                            }), a.widget("ui.autocomplete", a.ui.autocomplete, {
                                options: {
                                    messages: {
                                        noResults: "No search results.",
                                        results: function(a) {
                                            return a + (a > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                                        }
                                    }
                                },
                                __response: function(a) {
                                    var b;
                                    this._superApply(arguments), this.options.disabled || this.cancelSearch || (b = a && a.length ? this.options.messages.results(a.length) : this.options.messages.noResults, this.liveRegion.text(b))
                                }
                            })
                        }(c),
                        function(a) {
                            function d(b, c) {
                                var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
                                return a.grep(b, function(b) {
                                    return d.test(a("<div>").html(b.label || b.value || b).text())
                                })
                            }
                            var b = a.ui.autocomplete.prototype,
                                c = b._initSource;
                            a.extend(b, {
                                _initSource: function() {
                                    this.options.html && a.isArray(this.options.source) ? this.source = function(a, b) {
                                        b(d(this.options.source, a.term))
                                    } : c.call(this)
                                },
                                _renderItem: function(b, c) {
                                    return a("<li></li>").data("item.autocomplete", c).append(a("<a></a>")[this.options.html ? "html" : "text"](c.label)).appendTo(b)
                                }
                            })
                        }(c)
                    };
                    a(), b.resolveWith(a)
                })
            };
            FD31.module("ui/autocomplete", a)
        }(),
        function() {
            var a = function(a) {
                var b = this,
                    c = a,
                    d = function() {
                        ! function(a, b) {
                            function e(b, c) {
                                var d, e, g, h = b.nodeName.toLowerCase();
                                return "area" === h ? (d = b.parentNode, e = d.name, b.href && e && "map" === d.nodeName.toLowerCase() ? (g = a("img[usemap=#" + e + "]")[0], !!g && f(g)) : !1) : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || c : c) && f(b)
                            }

                            function f(b) {
                                return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
                                    return "hidden" === a.css(this, "visibility")
                                }).length
                            }
                            var c = 0,
                                d = /^ui-id-\d+$/;
                            a.ui = a.ui || {}, a.extend(a.ui, {
                                version: "1.10.4pre",
                                keyCode: {
                                    BACKSPACE: 8,
                                    COMMA: 188,
                                    DELETE: 46,
                                    DOWN: 40,
                                    END: 35,
                                    ENTER: 13,
                                    ESCAPE: 27,
                                    HOME: 36,
                                    LEFT: 37,
                                    NUMPAD_ADD: 107,
                                    NUMPAD_DECIMAL: 110,
                                    NUMPAD_DIVIDE: 111,
                                    NUMPAD_ENTER: 108,
                                    NUMPAD_MULTIPLY: 106,
                                    NUMPAD_SUBTRACT: 109,
                                    PAGE_DOWN: 34,
                                    PAGE_UP: 33,
                                    PERIOD: 190,
                                    RIGHT: 39,
                                    SPACE: 32,
                                    TAB: 9,
                                    UP: 38
                                }
                            }), a.fn.extend({
                                focus: function(b) {
                                    return function(c, d) {
                                        return "number" == typeof c ? this.each(function() {
                                            var b = this;
                                            setTimeout(function() {
                                                a(b).focus(), d && d.call(b)
                                            }, c)
                                        }) : b.apply(this, arguments)
                                    }
                                }(a.fn.focus),
                                scrollParent: function() {
                                    var b;
                                    return b = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                                        return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                                    }).eq(0) : this.parents().filter(function() {
                                        return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                                    }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b
                                },
                                zIndex: function(c) {
                                    if (c !== b) return this.css("zIndex", c);
                                    if (this.length)
                                        for (var e, f, d = a(this[0]); d.length && d[0] !== document;) {
                                            if (e = d.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (f = parseInt(d.css("zIndex"), 10), !isNaN(f) && 0 !== f)) return f;
                                            d = d.parent()
                                        }
                                    return 0
                                },
                                uniqueId: function() {
                                    return this.each(function() {
                                        this.id || (this.id = "ui-id-" + ++c)
                                    })
                                },
                                removeUniqueId: function() {
                                    return this.each(function() {
                                        d.test(this.id) && a(this).removeAttr("id")
                                    })
                                }
                            }), a.extend(a.expr[":"], {
                                data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
                                    return function(c) {
                                        return !!a.data(c, b)
                                    }
                                }) : function(b, c, d) {
                                    return !!a.data(b, d[3])
                                },
                                focusable: function(b) {
                                    return e(b, !isNaN(a.attr(b, "tabindex")))
                                },
                                tabbable: function(b) {
                                    var c = a.attr(b, "tabindex"),
                                        d = isNaN(c);
                                    return (d || c >= 0) && e(b, !d)
                                }
                            }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(c, d) {
                                function h(b, c, d, f) {
                                    return a.each(e, function() {
                                        c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
                                    }), c
                                }
                                var e = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"],
                                    f = d.toLowerCase(),
                                    g = {
                                        innerWidth: a.fn.innerWidth,
                                        innerHeight: a.fn.innerHeight,
                                        outerWidth: a.fn.outerWidth,
                                        outerHeight: a.fn.outerHeight
                                    };
                                a.fn["inner" + d] = function(c) {
                                    return c === b ? g["inner" + d].call(this) : this.each(function() {
                                        a(this).css(f, h(this, c) + "px")
                                    })
                                }, a.fn["outer" + d] = function(b, c) {
                                    return "number" != typeof b ? g["outer" + d].call(this, b) : this.each(function() {
                                        a(this).css(f, h(this, b, !0, c) + "px")
                                    })
                                }
                            }), a.fn.addBack || (a.fn.addBack = function(a) {
                                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
                            }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
                                return function(c) {
                                    return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
                                }
                            }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.support.selectstart = "onselectstart" in document.createElement("div"), a.fn.extend({
                                disableSelection: function() {
                                    return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                                        a.preventDefault()
                                    })
                                },
                                enableSelection: function() {
                                    return this.unbind(".ui-disableSelection")
                                }
                            }), a.extend(a.ui, {
                                plugin: {
                                    add: function(b, c, d) {
                                        var e, f = a.ui[b].prototype;
                                        for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
                                    },
                                    call: function(a, b, c) {
                                        var d, e = a.plugins[b];
                                        if (e && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType)
                                            for (d = 0; d < e.length; d++) a.options[e[d][0]] && e[d][1].apply(a.element, c)
                                    }
                                },
                                hasScroll: function(b, c) {
                                    if ("hidden" === a(b).css("overflow")) return !1;
                                    var d = c && "left" === c ? "scrollLeft" : "scrollTop",
                                        e = !1;
                                    return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
                                }
                            }), a(function() {
                                a("body > #fd_.ui").length > 0 || a(document.createElement("div")).attr("id", "fd_").addClass("ui").css({
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    overflow: "visible",
                                    width: 0,
                                    height: 0
                                }).appendTo("body")
                            })
                        }(c)
                    };
                d(), b.resolveWith(d)
            };
            FD31.module("ui/core", a)
        }(),
        function() {
            var a = function(a) {
                var b = this,
                    c = a,
                    d = function() {
                        ! function(a, b) {
                            var c = 0,
                                d = Array.prototype.slice,
                                e = a.cleanData;
                            a.cleanData = function(b) {
                                for (var d, c = 0; null != (d = b[c]); c++) try {
                                    a(d).triggerHandler("remove")
                                } catch (f) {}
                                e(b)
                            }, a.widget = function(b, c, d) {
                                var e, f, g, h, i = {},
                                    j = b.split(".")[0];
                                b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
                                    return !!a.data(b, e)
                                }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function(a, b) {
                                    return this._createWidget ? (arguments.length && this._createWidget(a, b), void 0) : new g(a, b)
                                }, a.extend(g, f, {
                                    version: d.version,
                                    _proto: a.extend({}, d),
                                    _childConstructors: []
                                }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function(b, d) {
                                    return a.isFunction(d) ? (i[b] = function() {
                                        var a = function() {
                                                return c.prototype[b].apply(this, arguments)
                                            },
                                            e = function(a) {
                                                return c.prototype[b].apply(this, a)
                                            };
                                        return function() {
                                            var f, b = this._super,
                                                c = this._superApply;
                                            return this._super = a, this._superApply = e, f = d.apply(this, arguments), this._super = b, this._superApply = c, f
                                        }
                                    }(), void 0) : (i[b] = d, void 0)
                                }), g.prototype = a.widget.extend(h, {
                                    widgetEventPrefix: f ? h.widgetEventPrefix : b
                                }, i, {
                                    constructor: g,
                                    namespace: j,
                                    widgetName: b,
                                    widgetFullName: e
                                }), f ? (a.each(f._childConstructors, function(b, c) {
                                    var d = c.prototype;
                                    a.widget(d.namespace + "." + d.widgetName, g, c._proto)
                                }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g)
                            }, a.widget.extend = function(c) {
                                for (var h, i, e = d.call(arguments, 1), f = 0, g = e.length; g > f; f++)
                                    for (h in e[f]) i = e[f][h], e[f].hasOwnProperty(h) && i !== b && (c[h] = a.isPlainObject(i) ? a.isPlainObject(c[h]) ? a.widget.extend({}, c[h], i) : a.widget.extend({}, i) : i);
                                return c
                            }, a.widget.bridge = function(c, e) {
                                var f = e.prototype.widgetFullName || c;
                                a.fn[c] = function(g) {
                                    var h = "string" == typeof g,
                                        i = d.call(arguments, 1),
                                        j = this;
                                    return g = !h && i.length ? a.widget.extend.apply(null, [g].concat(i)) : g, h ? this.each(function() {
                                        var d, e = a.data(this, f);
                                        return e ? a.isFunction(e[g]) && "_" !== g.charAt(0) ? (d = e[g].apply(e, i), d !== e && d !== b ? (j = d && d.jquery ? j.pushStack(d.get()) : d, !1) : void 0) : a.error("no such method '" + g + "' for " + c + " widget instance") : a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + g + "'")
                                    }) : this.each(function() {
                                        var b = a.data(this, f);
                                        b ? b.option(g || {})._init() : a.data(this, f, new e(g, this))
                                    }), j
                                }
                            }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
                                widgetName: "widget",
                                widgetEventPrefix: "",
                                defaultElement: "<div>",
                                options: {
                                    disabled: !1,
                                    create: null
                                },
                                _createWidget: function(b, d) {
                                    d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                                        remove: function(a) {
                                            a.target === d && this.destroy()
                                        }
                                    }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
                                },
                                _getCreateOptions: a.noop,
                                _getCreateEventData: a.noop,
                                _create: a.noop,
                                _init: a.noop,
                                destroy: function() {
                                    this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
                                },
                                _destroy: a.noop,
                                widget: function() {
                                    return this.element
                                },
                                option: function(c, d) {
                                    var f, g, h, e = c;
                                    if (0 === arguments.length) return a.widget.extend({}, this.options);
                                    if ("string" == typeof c)
                                        if (e = {}, f = c.split("."), c = f.shift(), f.length) {
                                            for (g = e[c] = a.widget.extend({}, this.options[c]), h = 0; h < f.length - 1; h++) g[f[h]] = g[f[h]] || {}, g = g[f[h]];
                                            if (c = f.pop(), d === b) return g[c] === b ? null : g[c];
                                            g[c] = d
                                        } else {
                                            if (d === b) return this.options[c] === b ? null : this.options[c];
                                            e[c] = d
                                        }
                                    return this._setOptions(e), this
                                },
                                _setOptions: function(a) {
                                    var b;
                                    for (b in a) this._setOption(b, a[b]);
                                    return this
                                },
                                _setOption: function(a, b) {
                                    return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!b).attr("aria-disabled", b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
                                },
                                enable: function() {
                                    return this._setOption("disabled", !1)
                                },
                                disable: function() {
                                    return this._setOption("disabled", !0)
                                },
                                _on: function(b, c, d) {
                                    var e, f = this;
                                    "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function(d, g) {
                                        function h() {
                                            return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
                                        }
                                        "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                                        var i = d.match(/^(\w+)\s*(.*)$/),
                                            j = i[1] + f.eventNamespace,
                                            k = i[2];
                                        k ? e.delegate(k, j, h) : c.bind(j, h)
                                    })
                                },
                                _off: function(a, b) {
                                    b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, a.unbind(b).undelegate(b)
                                },
                                _delay: function(a, b) {
                                    function c() {
                                        return ("string" == typeof a ? d[a] : a).apply(d, arguments)
                                    }
                                    var d = this;
                                    return setTimeout(c, b || 0)
                                },
                                _hoverable: function(b) {
                                    this.hoverable = this.hoverable.add(b), this._on(b, {
                                        mouseenter: function(b) {
                                            a(b.currentTarget).addClass("ui-state-hover")
                                        },
                                        mouseleave: function(b) {
                                            a(b.currentTarget).removeClass("ui-state-hover")
                                        }
                                    })
                                },
                                _focusable: function(b) {
                                    this.focusable = this.focusable.add(b), this._on(b, {
                                        focusin: function(b) {
                                            a(b.currentTarget).addClass("ui-state-focus")
                                        },
                                        focusout: function(b) {
                                            a(b.currentTarget).removeClass("ui-state-focus")
                                        }
                                    })
                                },
                                _trigger: function(b, c, d) {
                                    var e, f, g = this.options[b];
                                    if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
                                        for (e in f) e in c || (c[e] = f[e]);
                                    return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
                                }
                            }, a.each({
                                show: "fadeIn",
                                hide: "fadeOut"
                            }, function(b, c) {
                                a.Widget.prototype["_" + b] = function(d, e, f) {
                                    "string" == typeof e && (e = {
                                        effect: e
                                    });
                                    var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
                                    e = e || {}, "number" == typeof e && (e = {
                                        duration: e
                                    }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                                        a(this)[b](), f && f.call(d[0]), c()
                                    })
                                }
                            })
                        }(c)
                    };
                d(), b.resolveWith(d)
            };
            FD31.module("ui/widget", a)
        }(),
        function() {
            var a = function(a) {
                var b = this,
                    c = a,
                    d = function() {
                        ! function(a, b) {
                            function m(a, b, c) {
                                return [parseFloat(a[0]) * (k.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (k.test(a[1]) ? c / 100 : 1)]
                            }

                            function n(b, c) {
                                return parseInt(a.css(b, c), 10) || 0
                            }

                            function o(b) {
                                var c = b[0];
                                return 9 === c.nodeType ? {
                                    width: b.width(),
                                    height: b.height(),
                                    offset: {
                                        top: 0,
                                        left: 0
                                    }
                                } : a.isWindow(c) ? {
                                    width: b.width(),
                                    height: b.height(),
                                    offset: {
                                        top: b.scrollTop(),
                                        left: b.scrollLeft()
                                    }
                                } : c.preventDefault ? {
                                    width: 0,
                                    height: 0,
                                    offset: {
                                        top: c.pageY,
                                        left: c.pageX
                                    }
                                } : {
                                    width: b.outerWidth(),
                                    height: b.outerHeight(),
                                    offset: b.offset()
                                }
                            }
                            a.ui = a.ui || {};
                            var c, d = Math.max,
                                e = Math.abs,
                                f = Math.round,
                                g = /left|center|right/,
                                h = /top|center|bottom/,
                                i = /[\+\-]\d+(\.[\d]+)?%?/,
                                j = /^\w+/,
                                k = /%$/,
                                l = a.fn.position;
                            a.position = {
                                    scrollbarWidth: function() {
                                        if (c !== b) return c;
                                        var d, e, f = a("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                                            g = f.children()[0];
                                        return a("body").append(f), d = g.offsetWidth, f.css("overflow", "scroll"), e = g.offsetWidth, d === e && (e = f[0].clientWidth), f.remove(), c = d - e
                                    },
                                    getScrollInfo: function(b) {
                                        var c = b.isWindow ? "" : b.element.css("overflow-x"),
                                            d = b.isWindow ? "" : b.element.css("overflow-y"),
                                            e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth,
                                            f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
                                        return {
                                            width: f ? a.position.scrollbarWidth() : 0,
                                            height: e ? a.position.scrollbarWidth() : 0
                                        }
                                    },
                                    getWithinInfo: function(b) {
                                        var c = a(b || window),
                                            d = a.isWindow(c[0]);
                                        return {
                                            element: c,
                                            isWindow: d,
                                            offset: c.offset() || {
                                                left: 0,
                                                top: 0
                                            },
                                            scrollLeft: c.scrollLeft(),
                                            scrollTop: c.scrollTop(),
                                            width: d ? c.width() : c.outerWidth(),
                                            height: d ? c.height() : c.outerHeight()
                                        }
                                    }
                                }, a.fn.position = function(b) {
                                    if (!b || !b.of) return l.apply(this, arguments);
                                    b = a.extend({}, b);
                                    var c, k, p, q, r, s, t = a(b.of),
                                        u = a.position.getWithinInfo(b.within),
                                        v = a.position.getScrollInfo(u),
                                        w = (b.collision || "flip").split(" "),
                                        x = {};
                                    return s = o(t), t[0].preventDefault && (b.at = "left top"), k = s.width, p = s.height, q = s.offset, r = a.extend({}, q), a.each(["my", "at"], function() {
                                        var c, d, a = (b[this] || "").split(" ");
                                        1 === a.length && (a = g.test(a[0]) ? a.concat(["center"]) : h.test(a[0]) ? ["center"].concat(a) : ["center", "center"]), a[0] = g.test(a[0]) ? a[0] : "center", a[1] = h.test(a[1]) ? a[1] : "center", c = i.exec(a[0]), d = i.exec(a[1]), x[this] = [c ? c[0] : 0, d ? d[0] : 0], b[this] = [j.exec(a[0])[0], j.exec(a[1])[0]]
                                    }), 1 === w.length && (w[1] = w[0]), "right" === b.at[0] ? r.left += k : "center" === b.at[0] && (r.left += k / 2), "bottom" === b.at[1] ? r.top += p : "center" === b.at[1] && (r.top += p / 2), c = m(x.at, k, p), r.left += c[0], r.top += c[1], this.each(function() {
                                        var g, h, i = a(this),
                                            j = i.outerWidth(),
                                            l = i.outerHeight(),
                                            o = n(this, "marginLeft"),
                                            s = n(this, "marginTop"),
                                            y = j + o + n(this, "marginRight") + v.width,
                                            z = l + s + n(this, "marginBottom") + v.height,
                                            A = a.extend({}, r),
                                            B = m(x.my, i.outerWidth(), i.outerHeight());
                                        "right" === b.my[0] ? A.left -= j : "center" === b.my[0] && (A.left -= j / 2), "bottom" === b.my[1] ? A.top -= l : "center" === b.my[1] && (A.top -= l / 2), A.left += B[0], A.top += B[1], a.support.offsetFractions || (A.left = f(A.left), A.top = f(A.top)), g = {
                                            marginLeft: o,
                                            marginTop: s
                                        }, a.each(["left", "top"], function(d, e) {
                                            a.ui.position[w[d]] && a.ui.position[w[d]][e](A, {
                                                targetWidth: k,
                                                targetHeight: p,
                                                elemWidth: j,
                                                elemHeight: l,
                                                collisionPosition: g,
                                                collisionWidth: y,
                                                collisionHeight: z,
                                                offset: [c[0] + B[0], c[1] + B[1]],
                                                my: b.my,
                                                at: b.at,
                                                within: u,
                                                elem: i
                                            })
                                        }), b.using && (h = function(a) {
                                            var c = q.left - A.left,
                                                f = c + k - j,
                                                g = q.top - A.top,
                                                h = g + p - l,
                                                m = {
                                                    target: {
                                                        element: t,
                                                        left: q.left,
                                                        top: q.top,
                                                        width: k,
                                                        height: p
                                                    },
                                                    element: {
                                                        element: i,
                                                        left: A.left,
                                                        top: A.top,
                                                        width: j,
                                                        height: l
                                                    },
                                                    horizontal: 0 > f ? "left" : c > 0 ? "right" : "center",
                                                    vertical: 0 > h ? "top" : g > 0 ? "bottom" : "middle"
                                                };
                                            j > k && e(c + f) < k && (m.horizontal = "center"), l > p && e(g + h) < p && (m.vertical = "middle"), m.important = d(e(c), e(f)) > d(e(g), e(h)) ? "horizontal" : "vertical", b.using.call(this, a, m)
                                        }), i.offset(a.extend(A, {
                                            using: h
                                        }))
                                    })
                                }, a.ui.position = {
                                    fit: {
                                        left: function(a, b) {
                                            var j, c = b.within,
                                                e = c.isWindow ? c.scrollLeft : c.offset.left,
                                                f = c.width,
                                                g = a.left - b.collisionPosition.marginLeft,
                                                h = e - g,
                                                i = g + b.collisionWidth - f - e;
                                            b.collisionWidth > f ? h > 0 && 0 >= i ? (j = a.left + h + b.collisionWidth - f - e, a.left += h - j) : a.left = i > 0 && 0 >= h ? e : h > i ? e + f - b.collisionWidth : e : h > 0 ? a.left += h : i > 0 ? a.left -= i : a.left = d(a.left - g, a.left)
                                        },
                                        top: function(a, b) {
                                            var j, c = b.within,
                                                e = c.isWindow ? c.scrollTop : c.offset.top,
                                                f = b.within.height,
                                                g = a.top - b.collisionPosition.marginTop,
                                                h = e - g,
                                                i = g + b.collisionHeight - f - e;
                                            b.collisionHeight > f ? h > 0 && 0 >= i ? (j = a.top + h + b.collisionHeight - f - e, a.top += h - j) : a.top = i > 0 && 0 >= h ? e : h > i ? e + f - b.collisionHeight : e : h > 0 ? a.top += h : i > 0 ? a.top -= i : a.top = d(a.top - g, a.top)
                                        }
                                    },
                                    flip: {
                                        left: function(a, b) {
                                            var n, o, c = b.within,
                                                d = c.offset.left + c.scrollLeft,
                                                f = c.width,
                                                g = c.isWindow ? c.scrollLeft : c.offset.left,
                                                h = a.left - b.collisionPosition.marginLeft,
                                                i = h - g,
                                                j = h + b.collisionWidth - f - g,
                                                k = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0,
                                                l = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
                                                m = -2 * b.offset[0];
                                            0 > i ? (n = a.left + k + l + m + b.collisionWidth - f - d, (0 > n || n < e(i)) && (a.left += k + l + m)) : j > 0 && (o = a.left - b.collisionPosition.marginLeft + k + l + m - g, (o > 0 || e(o) < j) && (a.left += k + l + m))
                                        },
                                        top: function(a, b) {
                                            var o, p, c = b.within,
                                                d = c.offset.top + c.scrollTop,
                                                f = c.height,
                                                g = c.isWindow ? c.scrollTop : c.offset.top,
                                                h = a.top - b.collisionPosition.marginTop,
                                                i = h - g,
                                                j = h + b.collisionHeight - f - g,
                                                k = "top" === b.my[1],
                                                l = k ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0,
                                                m = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
                                                n = -2 * b.offset[1];
                                            0 > i ? (p = a.top + l + m + n + b.collisionHeight - f - d, a.top + l + m + n > i && (0 > p || p < e(i)) && (a.top += l + m + n)) : j > 0 && (o = a.top - b.collisionPosition.marginTop + l + m + n - g, a.top + l + m + n > j && (o > 0 || e(o) < j) && (a.top += l + m + n))
                                        }
                                    },
                                    flipfit: {
                                        left: function() {
                                            a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments)
                                        },
                                        top: function() {
                                            a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments)
                                        }
                                    }
                                },
                                function() {
                                    var b, c, d, e, f, g = document.getElementsByTagName("body")[0],
                                        h = document.createElement("div");
                                    b = document.createElement(g ? "div" : "body"), d = {
                                        visibility: "hidden",
                                        width: 0,
                                        height: 0,
                                        border: 0,
                                        margin: 0,
                                        background: "none"
                                    }, g && a.extend(d, {
                                        position: "absolute",
                                        left: "-1000px",
                                        top: "-1000px"
                                    });
                                    for (f in d) b.style[f] = d[f];
                                    b.appendChild(h), c = g || document.documentElement, c.insertBefore(b, c.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", e = a(h).offset().left, a.support.offsetFractions = e > 10 && 11 > e, b.innerHTML = "", c.removeChild(b)
                                }()
                        }(c)
                    };
                d(), b.resolveWith(d)
            };
            FD31.module("ui/position", a)
        }(),
        function() {
            var a = function(a) {
                var b = this,
                    c = a;
                a.require().script("ui/widget").done(function() {
                    var a = function() {
                        ! function(a) {
                            a.widget("ui.menu", {
                                version: "1.10.4pre",
                                defaultElement: "<ul>",
                                delay: 300,
                                options: {
                                    icons: {
                                        submenu: "ui-icon-carat-1-e"
                                    },
                                    menus: "ul",
                                    position: {
                                        my: "left top",
                                        at: "right top"
                                    },
                                    role: "menu",
                                    blur: null,
                                    focus: null,
                                    select: null
                                },
                                _create: function() {
                                    this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                                        role: this.options.role,
                                        tabIndex: 0
                                    }).bind("click" + this.eventNamespace, a.proxy(function(a) {
                                        this.options.disabled && a.preventDefault()
                                    }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                                        "mousedown .ui-menu-item > a": function(a) {
                                            a.preventDefault()
                                        },
                                        "click .ui-state-disabled > a": function(a) {
                                            a.preventDefault()
                                        },
                                        "click .ui-menu-item:has(a)": function(b) {
                                            var c = a(b.target).closest(".ui-menu-item");
                                            !this.mouseHandled && c.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(b), c.has(".ui-menu").length ? this.expand(b) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                                        },
                                        "mouseenter .ui-menu-item": function(b) {
                                            var c = a(b.currentTarget);
                                            c.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(b, c)
                                        },
                                        mouseleave: "collapseAll",
                                        "mouseleave .ui-menu": "collapseAll",
                                        focus: function(a, b) {
                                            var c = this.active || this.element.children(".ui-menu-item").eq(0);
                                            b || this.focus(a, c)
                                        },
                                        blur: function(b) {
                                            this._delay(function() {
                                                a.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(b)
                                            })
                                        },
                                        keydown: "_keydown"
                                    }), this.refresh(), this._on(this.document, {
                                        click: function(b) {
                                            a(b.target).closest(".ui-menu").length || this.collapseAll(b), this.mouseHandled = !1
                                        }
                                    })
                                },
                                _destroy: function() {
                                    this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                                        var b = a(this);
                                        b.data("ui-menu-submenu-carat") && b.remove()
                                    }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
                                },
                                _keydown: function(b) {
                                    function i(a) {
                                        return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                                    }
                                    var c, d, e, f, g, h = !0;
                                    switch (b.keyCode) {
                                        case a.ui.keyCode.PAGE_UP:
                                            this.previousPage(b);
                                            break;
                                        case a.ui.keyCode.PAGE_DOWN:
                                            this.nextPage(b);
                                            break;
                                        case a.ui.keyCode.HOME:
                                            this._move("first", "first", b);
                                            break;
                                        case a.ui.keyCode.END:
                                            this._move("last", "last", b);
                                            break;
                                        case a.ui.keyCode.UP:
                                            this.previous(b);
                                            break;
                                        case a.ui.keyCode.DOWN:
                                            this.next(b);
                                            break;
                                        case a.ui.keyCode.LEFT:
                                            this.collapse(b);
                                            break;
                                        case a.ui.keyCode.RIGHT:
                                            this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
                                            break;
                                        case a.ui.keyCode.ENTER:
                                        case a.ui.keyCode.SPACE:
                                            this._activate(b);
                                            break;
                                        case a.ui.keyCode.ESCAPE:
                                            this.collapse(b);
                                            break;
                                        default:
                                            h = !1, d = this.previousFilter || "", e = String.fromCharCode(b.keyCode), f = !1, clearTimeout(this.filterTimer), e === d ? f = !0 : e = d + e, g = new RegExp("^" + i(e), "i"), c = this.activeMenu.children(".ui-menu-item").filter(function() {
                                                return g.test(a(this).children("a").text())
                                            }), c = f && -1 !== c.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : c, c.length || (e = String.fromCharCode(b.keyCode), g = new RegExp("^" + i(e), "i"), c = this.activeMenu.children(".ui-menu-item").filter(function() {
                                                return g.test(a(this).children("a").text())
                                            })), c.length ? (this.focus(b, c), c.length > 1 ? (this.previousFilter = e, this.filterTimer = this._delay(function() {
                                                delete this.previousFilter
                                            }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
                                    }
                                    h && b.preventDefault()
                                },
                                _activate: function(a) {
                                    this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(a) : this.select(a))
                                },
                                refresh: function() {
                                    var b, c = this.options.icons.submenu,
                                        d = this.element.find(this.options.menus);
                                    d.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                                        role: this.options.role,
                                        "aria-hidden": "true",
                                        "aria-expanded": "false"
                                    }).each(function() {
                                        var b = a(this),
                                            d = b.prev("a"),
                                            e = a("<span>").addClass("ui-menu-icon ui-icon " + c).data("ui-menu-submenu-carat", !0);
                                        d.attr("aria-haspopup", "true").prepend(e), b.attr("aria-labelledby", d.attr("id"))
                                    }), b = d.add(this.element), b.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                                        tabIndex: -1,
                                        role: this._itemRole()
                                    }), b.children(":not(.ui-menu-item)").each(function() {
                                        var b = a(this);
                                        /[^\-\u2014\u2013\s]/.test(b.text()) || b.addClass("ui-widget-content ui-menu-divider")
                                    }), b.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !a.contains(this.element[0], this.active[0]) && this.blur()
                                },
                                _itemRole: function() {
                                    return {
                                        menu: "menuitem",
                                        listbox: "option"
                                    }[this.options.role]
                                },
                                _setOption: function(a, b) {
                                    "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu), this._super(a, b)
                                },
                                focus: function(a, b) {
                                    var c, d;
                                    this.blur(a, a && "focus" === a.type), this._scrollIntoView(b), this.active = b.first(), d = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", d.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
                                        this._close()
                                    }, this.delay), c = b.children(".ui-menu"), c.length && /^mouse/.test(a.type) && this._startOpening(c), this.activeMenu = b.parent(), this._trigger("focus", a, {
                                        item: b
                                    })
                                },
                                _scrollIntoView: function(b) {
                                    var c, d, e, f, g, h;
                                    this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, e = b.offset().top - this.activeMenu.offset().top - c - d, f = this.activeMenu.scrollTop(), g = this.activeMenu.height(), h = b.height(), 0 > e ? this.activeMenu.scrollTop(f + e) : e + h > g && this.activeMenu.scrollTop(f + e - g + h))
                                },
                                blur: function(a, b) {
                                    b || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", a, {
                                        item: this.active
                                    }))
                                },
                                _startOpening: function(a) {
                                    clearTimeout(this.timer), "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
                                        this._close(), this._open(a)
                                    }, this.delay))
                                },
                                _open: function(b) {
                                    var c = a.extend({
                                        of: this.active
                                    }, this.options.position);
                                    clearTimeout(this.timer), this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true"), b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
                                },
                                collapseAll: function(b, c) {
                                    clearTimeout(this.timer), this.timer = this._delay(function() {
                                        var d = c ? this.element : a(b && b.target).closest(this.element.find(".ui-menu"));
                                        d.length || (d = this.element), this._close(d), this.blur(b), this.activeMenu = d
                                    }, this.delay)
                                },
                                _close: function(a) {
                                    a || (a = this.active ? this.active.parent() : this.element), a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
                                },
                                collapse: function(a) {
                                    var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                                    b && b.length && (this._close(), this.focus(a, b))
                                },
                                expand: function(a) {
                                    var b = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                                    b && b.length && (this._open(b.parent()), this._delay(function() {
                                        this.focus(a, b)
                                    }))
                                },
                                next: function(a) {
                                    this._move("next", "first", a)
                                },
                                previous: function(a) {
                                    this._move("prev", "last", a)
                                },
                                isFirstItem: function() {
                                    return this.active && !this.active.prevAll(".ui-menu-item").length
                                },
                                isLastItem: function() {
                                    return this.active && !this.active.nextAll(".ui-menu-item").length
                                },
                                _move: function(a, b, c) {
                                    var d;
                                    this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0)), d && d.length && this.active || (d = this.activeMenu.children(".ui-menu-item")[b]()), this.focus(c, d)
                                },
                                nextPage: function(b) {
                                    var c, d, e;
                                    return this.active ? (this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                                        return c = a(this), c.offset().top - d - e < 0
                                    }), this.focus(b, c)) : this.focus(b, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), void 0) : (this.next(b), void 0)
                                },
                                previousPage: function(b) {
                                    var c, d, e;
                                    return this.active ? (this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                                        return c = a(this), c.offset().top - d + e > 0
                                    }), this.focus(b, c)) : this.focus(b, this.activeMenu.children(".ui-menu-item").first())), void 0) : (this.next(b), void 0)
                                },
                                _hasScroll: function() {
                                    return this.element.outerHeight() < this.element.prop("scrollHeight")
                                },
                                select: function(b) {
                                    this.active = this.active || a(b.target).closest(".ui-menu-item");
                                    var c = {
                                        item: this.active
                                    };
                                    this.active.has(".ui-menu").length || this.collapseAll(b, !0), this._trigger("select", b, c)
                                }
                            })
                        }(c)
                    };
                    a(), b.resolveWith(a)
                })
            };
            FD31.module("ui/menu", a)
        }()
}), FD31.installer("EasyDiscuss", "definitions", function(a) {
    a.module(["easydiscuss/attachments", "easydiscuss/avatar", "easydiscuss/bbcode", "easydiscuss/captcha", "easydiscuss/categories", "easydiscuss/comments", "easydiscuss/composer", "easydiscuss/conversation", "easydiscuss/customfields", "easydiscuss/easydiscuss", "easydiscuss/layout/responsive", "easydiscuss/layout/lightbox", "easydiscuss/legacy", "easydiscuss/favourites", "easydiscuss/filterbar", "easydiscuss/likes", "easydiscuss/location", "easydiscuss/newpost", "easydiscuss/polls", "easydiscuss/posts", "easydiscuss/prism", "easydiscuss/profile", "easydiscuss/ranks", "easydiscuss/replies", "easydiscuss/votes", "easydiscuss/stylesheet", "easydiscuss/tag", "easydiscuss/toolbar"]), a.require.template.loader(["easydiscuss/field.form.attachments.item", "easydiscuss/field.form.attachments.fileinput", "easydiscuss/conversation.read.item", "easydiscuss/field.form.polls.answer", "easydiscuss/comment.form", "easydiscuss/post.notification"]), a.require.language.loader(["COM_EASYDISCUSS_EXCEED_ATTACHMENT_LIMIT", "COM_EASYDISCUSS_TERMS_PLEASE_ACCEPT", "COM_EASYDISCUSS_COMMENT_SUCESSFULLY_ADDED", "COM_EASYDISCUSS_COMMENT_LOAD_MORE", "COM_EASYDISCUSS_COMMENT_LOADING_MORE_COMMENTS", "COM_EASYDISCUSS_COMMENT_LOAD_ERROR", "COM_EASYDISCUSS_CONVERSATION_EMPTY_CONTENT", "COM_EASYDISCUSS_CUSTOMFIELDS_DISPLAY_ERROR", "COM_EASYDISCUSS_BBCODE_BOLD", "COM_EASYDISCUSS_BBCODE_ITALIC", "COM_EASYDISCUSS_BBCODE_UNDERLINE", "COM_EASYDISCUSS_BBCODE_URL", "COM_EASYDISCUSS_BBCODE_TITLE", "COM_EASYDISCUSS_BBCODE_PICTURE", "COM_EASYDISCUSS_BBCODE_VIDEO", "COM_EASYDISCUSS_BBCODE_BULLETED_LIST", "COM_EASYDISCUSS_BBCODE_NUMERIC_LIST", "COM_EASYDISCUSS_BBCODE_LIST_ITEM", "COM_EASYDISCUSS_BBCODE_QUOTES", "COM_EASYDISCUSS_BBCODE_CODE", "COM_EASYDISCUSS_BBCODE_HAPPY", "COM_EASYDISCUSS_BBCODE_SMILE", "COM_EASYDISCUSS_BBCODE_SURPRISED", "COM_EASYDISCUSS_BBCODE_TONGUE", "COM_EASYDISCUSS_BBCODE_UNHAPPY", "COM_EASYDISCUSS_BBCODE_WINK", "COM_EASYDISCUSS_FAVOURITE_BUTTON_UNFAVOURITE", "COM_EASYDISCUSS_FAVOURITE_BUTTON_FAVOURITE", "COM_EASYDISCUSS_UNLIKE_THIS_POST", "COM_EASYDISCUSS_LIKE_THIS_POST", "COM_EASYDISCUSS_UNLIKE", "COM_EASYDISCUSS_LIKES", "COM_EASYDISCUSS_NOTIFICATION_NEW_REPLIES", "COM_EASYDISCUSS_NOTIFICATION_NEW_COMMENTS", "COM_EASYDISCUSS_PLEASE_SELECT_CATEGORY_DESC", "COM_EASYDISCUSS_POST_TITLE_CANNOT_EMPTY", "COM_EASYDISCUSS_POST_CONTENT_IS_EMPTY", "COM_EASYDISCUSS_SUCCESS", "COM_EASYDISCUSS_FAIL", "COM_EASYDISCUSS_REPLY_LOADING_MORE_COMMENTS", "COM_EASYDISCUSS_REPLY_LOAD_ERROR"]),
        function() {
            var b = ["easydiscuss/fancybox/default"],
                c = a.stylesheet({
                    content: ""
                }) ? "resolve" : "reject";
            a.each(b, function(b, d) {
                a.require.stylesheet.loader(d)[c]()
            })
        }()
}), FD31.installer("EasyDiscuss", "scripts", function($) {
    EasyDiscuss.module("attachments", function() {
        var b = this;
        EasyDiscuss.require().view("field.form.attachments.item").done(function(a) {
            EasyDiscuss.Controller("Attachments", {
                defaultOptions: {
                    view: {
                        item: "field.form.attachments.item"
                    },
                    hasAttachmentLimit: !1,
                    attachmentLimit: 0,
                    editable: !1,
                    "{itemGroup}": "[data-attachment-itemgroup]",
                    "{item}": "[data-attachment-item]"
                }
            }, function(a) {
                return {
                    init: function() {
                        var b = a.options,
                            c = a.element.attr("data-attachment-limit");
                        void 0 !== c && (b.hasAttachmentLimit = !0, b.attachmentLimit = parseInt(c) || 0), 0 === b.attachmentLimit && (b.hasAttachmentLimit = !1), b.editable = a.element.hasClass("editable"), a.item().addController("EasyDiscuss.Controller.Attachments.Item")
                    },
                    setLayout: function() {
                        var b = a.options,
                            c = a.item(":not(.new)").length,
                            d = b.hasAttachmentLimit && c >= b.attachmentLimit;
                        a.element.toggleClass("limit-exceeded", d).toggleClass("no-attachment", 1 > c), b.editable && (a.item(".new").remove(), d || a.view.item().appendTo(a.itemGroup()).addController("EasyDiscuss.Controller.Attachments.Item"))
                    },
                    "{item} itemAdded": function() {
                        a.setLayout()
                    },
                    "{item} itemRemoved": function() {
                        setTimeout(function() {
                            a.setLayout()
                        }, 1)
                    }
                }
            }), EasyDiscuss.Controller("Attachments.Item", {
                defaultOptions: {
                    "{removeButton}": "[data-attachment-remove-button]",
                    "{file}": "[data-attachment-file]",
                    "{title}": "[data-attachment-title]"
                }
            }, function(a) {
                return {
                    init: function() {
                        a.file().prop("disabled", !1)
                    },
                    add: function() {
                        var b = a.file().val();
                        type = a.getType(b), item = a.element, b.match(/fakepath/) && (b = b.replace(/C:\\fakepath\\/i, "")), item.removeClass("new").addClass("attachment-type-" + type), a.title().html(b), a.trigger("itemAdded")
                    },
                    remove: function() {
                        var b = a.element.attr("id");
                        if (b) {
                            var b = b.replace("attachment-", "");
                            disjax.loadingDialog(), disjax.load("attachments", "confirmDelete", b.toString())
                        } else a.trigger("itemRemoved"), a.element.remove()
                    },
                    getType: function(a) {
                        var b = a.substr(a.lastIndexOf(".") + 1),
                            c = "default";
                        switch (b) {
                            case "jpg":
                            case "png":
                            case "gif":
                                c = "image";
                                break;
                            case "zip":
                            case "rar":
                                c = "archive";
                                break;
                            case "pdf":
                                c = "pdf"
                        }
                        return c
                    },
                    "{file} change": function() {
                        a.add()
                    },
                    "{removeButton} click": function() {
                        a.remove()
                    }
                }
            }), a(document).on("click.ed.attachment.remove", "[data-attachment-remove-button]", function() {
                var b = a(this),
                    c = b.parents(".discuss-attachments"),
                    d = "EasyDiscuss.Controller.Attachments";
                c.hasController(d) || (c.addController(d), b.click())
            }), b.resolve()
        })
    }), EasyDiscuss.module("avatar", function() {
        var b = this;
        EasyDiscuss.require().library("imgareaselect").done(function(a) {
            EasyDiscuss.Controller("Avatar", {
                defaultOptions: {
                    "{avatarContainer}": ".avatarContainer",
                    "{avatar}": ".avatarContainer img",
                    "{avatarPreviewContainer}": ".avatarPreviewContainer",
                    "{avatarPreviewPlaceholder}": ".avatarPreviewPlaceholder",
                    "{avatarPreview}": ".avatarPreview",
                    "{startCropButton}": ".startCropButton",
                    "{saveCropButton}": ".saveCropButton",
                    "{stopCropButton}": ".stopCropButton",
                    "{alertMessage}": ".alertMessage",
                    selection: {
                        disable: !1,
                        handles: !0,
                        show: !0,
                        minWidth: 160,
                        minHeight: 160,
                        x1: 0,
                        y1: 0,
                        x2: 160,
                        y2: 160,
                        previewWidth: 160,
                        previewHeight: 160,
                        aspectRatio: "1:1"
                    }
                }
            }, function(b) {
                return {
                    init: function() {
                        b.avatarPreviewContainer().css({
                            width: b.options.selection.previewWidth,
                            height: b.options.selection.previewHeight,
                            position: "relative",
                            overflow: "hidden"
                        }), b.avatarPreview().css({
                            maxWidth: "none"
                        })
                    },
                    start: function() {
                        b.alertMessage().hide(), b.element.addClass("cropping");
                        var h, j, c = b.options.selection,
                            d = b.avatar(),
                            e = b.avatarPreview(),
                            f = d.width(),
                            g = d.height();
                        b.selector = d.imgAreaSelect(a.extend({}, c, {
                            parent: b.avatarContainer(),
                            instance: !0,
                            x1: h = f / 2 - c.minWidth / 2,
                            y1: j = g / 2 - c.minHeight / 2,
                            x2: h + c.minWidth,
                            y2: j + c.minHeight,
                            onSelectChange: function(a, b) {
                                var d = c.previewWidth / (b.width || 1),
                                    h = c.previewHeight / (b.height || 1);
                                e.css({
                                    width: Math.round(d * f) + "px",
                                    height: Math.round(h * g) + "px",
                                    marginLeft: "-" + Math.round(d * b.x1) + "px",
                                    marginTop: "-" + Math.round(h * b.y1) + "px"
                                })
                            }
                        })), b.avatarPreviewPlaceholder().hide(), b.avatarPreview().show()
                    },
                    stop: function() {
                        b.alertMessage().remove(), b.element.removeClass("cropping"), b.avatarPreview().hide(), b.avatarPreviewPlaceholder().show(), b.avatar().imgAreaSelect({
                            hide: !0,
                            disable: !0
                        }), delete b.selector
                    },
                    save: function() {
                        if (void 0 == b.selector) return b.stop(), void 0;
                        var c = b.selector.getSelection();
                        b.saveCropButton().addClass("btn-loading"), EasyDiscuss.ajax("site.views.profile.cropphoto", c).done(function(c, d) {
                            b.stop(), b.avatarPreviewPlaceholder().attr("src", c + "?" + a.uid()), b.alert(d || "Avatar successfully cropped!", "success")
                        }).fail(function(a) {
                            b.alert(a || "Unable to crop avatar.", "error")
                        }).always(function() {
                            b.saveCropButton().removeClass("btn-loading")
                        })
                    },
                    alert: function(c, d) {
                        void 0 === d && (d = "info"), b.alertMessage().remove(), a('<div class="alert alertMessage"></div>').addClass("alert-" + d).html(c).prependTo(b.element)
                    },
                    "{startCropButton} click": function() {
                        b.start()
                    },
                    "{saveCropButton} click": function() {
                        b.save()
                    },
                    "{stopCropButton} click": function() {
                        b.stop()
                    }
                }
            }), b.resolve()
        })
    }), EasyDiscuss.module("bbcode", function(a) {
        var b = this;
        window.insertVideoCode = function(b, c, d) {
            if (0 == b.length) return !1;
            var e = a("textarea[name=" + d + "]"),
                f = "[video]" + b + "[/video]";
            if (0 == c) return a(e).val(f), disjax.closedlg(), !0;
            var g = a(e).val();
            a(e).val(g.substring(0, c) + f + g.substring(c, g.length)), disjax.closedlg()
        }, a.getEasyDiscussBBCodeSettings = {
            onTab: {
                keepDefault: !1,
                replaceWith: "    "
            },
            previewParserVar: "data",
            markupSet: [{
                name: a.language("COM_EASYDISCUSS_BBCODE_BOLD"),
                key: "B",
                openWith: "[b]",
                closeWith: "[/b]",
                className: "markitup-bold"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_ITALIC"),
                key: "I",
                openWith: "[i]",
                closeWith: "[/i]",
                className: "markitup-italic"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_UNDERLINE"),
                key: "U",
                openWith: "[u]",
                closeWith: "[/u]",
                className: "markitup-underline"
            }, {
                separator: "---------------"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_URL"),
                key: "L",
                openWith: "[url=[![Link:]!]]",
                closeWith: "[/url]",
                placeHolder: a.language("COM_EASYDISCUSS_BBCODE_TITLE"),
                beforeInsert: function() {},
                className: "markitup-url"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_PICTURE"),
                key: "P",
                replaceWith: "[img][![Url]!][/img]",
                className: "markitup-picture"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_VIDEO"),
                replaceWith: function(b) {
                    disjax.loadingDialog(), disjax.load("post", "showVideoDialog", a(b.textarea).attr("name"), b.caretPosition.toString())
                },
                beforeInsert: function() {},
                afterInsert: function() {},
                className: "markitup-video"
            }, {
                separator: "---------------"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_BULLETED_LIST"),
                openWith: "[list]\n",
                closeWith: "\n[/list]",
                className: "markitup-bullet"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_NUMERIC_LIST"),
                openWith: "[list=[![Starting number]!]]\n",
                closeWith: "\n[/list]",
                className: "markitup-numeric"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_LIST_ITEM"),
                openWith: "[*] ",
                className: "markitup-list"
            }, {
                separator: "---------------"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_QUOTES"),
                openWith: "[quote]",
                closeWith: "[/quote]",
                className: "markitup-quote"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_CODE"),
                openWith: '[code type="markup"]',
                closeWith: "[/code]",
                className: "markitup-code"
            }, {
                separator: "---------------"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_HAPPY"),
                openWith: ":D ",
                className: "markitup-happy"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_SMILE"),
                openWith: ":) ",
                className: "markitup-smile"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_SURPRISED"),
                openWith: ":o ",
                className: "markitup-surprised"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_TONGUE"),
                openWith: ":p ",
                className: "markitup-tongue"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_UNHAPPY"),
                openWith: ":( ",
                className: "markitup-unhappy"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_WINK"),
                openWith: ";) ",
                className: "markitup-wink"
            }]
        }, a.getEasyDiscussDialogBBCodeSettings = {
            onShiftEnter: {
                keepDefault: !1,
                replaceWith: "<br />\n"
            },
            onCtrlEnter: {
                keepDefault: !1,
                openWith: "\n<p>",
                closeWith: "</p>"
            },
            onTab: {
                keepDefault: !1,
                replaceWith: "    "
            },
            previewParserVar: "data",
            markupSet: [{
                name: a.language("COM_EASYDISCUSS_BBCODE_BOLD"),
                key: "B",
                openWith: "[b]",
                closeWith: "[/b]",
                className: "markitup-bold"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_ITALIC"),
                key: "I",
                openWith: "[i]",
                closeWith: "[/i]",
                className: "markitup-italic"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_UNDERLINE"),
                key: "U",
                openWith: "[u]",
                closeWith: "[/u]",
                className: "markitup-underline"
            }, {
                separator: "---------------"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_URL"),
                key: "L",
                openWith: "[url=[![Link:!:http://]!]]",
                closeWith: "[/url]",
                placeHolder: a.language("COM_EASYDISCUSS_BBCODE_TITLE"),
                className: "markitup-url"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_PICTURE"),
                key: "P",
                replaceWith: "[img][![Url]!][/img]",
                className: "markitup-picture"
            }, {
                separator: "---------------"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_BULLETED_LIST"),
                openWith: "[list]\n",
                closeWith: "\n[/list]",
                className: "markitup-bullet"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_NUMERIC_LIST"),
                openWith: "[list=[![Starting number]!]]\n",
                closeWith: "\n[/list]",
                className: "markitup-numeric"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_LIST_ITEM"),
                openWith: "[*] ",
                className: "markitup-list"
            }, {
                separator: "---------------"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_QUOTES"),
                openWith: "[quote]",
                closeWith: "[/quote]",
                className: "markitup-quote"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_CODE"),
                openWith: '[code type="xml"]',
                closeWith: "[/code]",
                className: "markitup-code"
            }, {
                separator: "---------------"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_HAPPY"),
                openWith: ":D ",
                className: "markitup-happy"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_SMILE"),
                openWith: ":) ",
                className: "markitup-smile"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_SURPRISED"),
                openWith: ":o ",
                className: "markitup-surprised"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_TONGUE"),
                openWith: ":p ",
                className: "markitup-tongue"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_UNHAPPY"),
                openWith: ":( ",
                className: "markitup-unhappy"
            }, {
                name: a.language("COM_EASYDISCUSS_BBCODE_WINK"),
                openWith: ";) ",
                className: "markitup-wink"
            }]
        }, b.resolve()
    }), EasyDiscuss.module("captcha", function() {
        var b = this;
        EasyDiscuss.require().done(function() {
            EasyDiscuss.Controller("Post.Captcha", {
                defaultOptions: {
                    "{reloadImage}": ".reloadImage",
                    "{captchaResponse}": "#captcha-response",
                    "{captchaId}": "#captcha-id",
                    "{captchaImage}": "#captcha-image"
                }
            }, function(a) {
                return {
                    init: function() {
                        console.log("Captcha init")
                    },
                    "{reloadImage} click": function() {
                        EasyDiscuss.ajax("site.views.ask.reloadCaptcha", {
                            captchaId: a.captchaId().val()
                        }, {
                            beforeSend: function() {}
                        }).done(function(b, c) {
                            a.captchaImage().attr("src", c), a.captchaId().val(b), a.captchaResponse().val("")
                        }).fail(function() {}).always(function() {})
                    }
                }
            }), b.resolve()
        })
    }), EasyDiscuss.module("categories", function() {
        var b = this;
        EasyDiscuss.require().done(function(a) {
            EasyDiscuss.Controller("Toggle.Categories", {
                defaultOptions: {
                    postId: null,
                    "{showChild}": ".showChild",
                    "{hideChild}": ".hideChild",
                    "{item}": "[data-item]"
                }
            }, function(b) {
                return {
                    init: function() {},
                    "{showChild} click": function(a) {
                        var c = a.data("id");
                        b.openChild(c), a.addClass("icon-sort-up hideChild"), a.removeClass("icon-sort-down"), a.removeClass("showChild")
                    },
                    openChild: function(c) {
                        var d = b.item('[data-parent-id="' + c + '"]');
                        d.show(), a.each(d, function(b, c) {
                            a(c).data("id")
                        })
                    },
                    "{hideChild} click": function(a) {
                        var c = a.data("id");
                        b.closeChild(c), a.addClass("icon-sort-down showChild"), a.removeClass("icon-sort-up"), a.removeClass("hideChild")
                    },
                    closeChild: function(c) {
                        var d = b.item('[data-parent-id="' + c + '"]');
                        d.hide(), a.each(d, function(c, d) {
                            var e = a(d).data("id");
                            b.closeChild(e)
                        })
                    }
                }
            }), EasyDiscuss.Controller("Toggle.Module.Categories", {
                defaultOptions: {
                    postId: null,
                    "{showChild}": ".showChild",
                    "{hideChild}": ".hideChild",
                    "{item}": "[data-item]"
                }
            }, function(b) {
                return {
                    init: function() {},
                    "{showChild} click": function(a) {
                        var c = a.data("id");
                        b.openChild(c), a.addClass("icon-sort-up hideChild"), a.removeClass("icon-sort-down"), a.removeClass("showChild")
                    },
                    openChild: function(c) {
                        var d = b.item('[data-parent-id="' + c + '"]');
                        d.show(), a.each(d, function(b, c) {
                            a(c).data("id")
                        })
                    },
                    "{hideChild} click": function(a) {
                        var c = a.data("id");
                        b.closeChild(c), a.addClass("icon-sort-down showChild"), a.removeClass("icon-sort-up"), a.removeClass("hideChild")
                    },
                    closeChild: function(c) {
                        var d = b.item('[data-parent-id="' + c + '"]');
                        d.hide(), a.each(d, function(c, d) {
                            var e = a(d).data("id");
                            b.closeChild(e)
                        })
                    }
                }
            }), b.resolve()
        })
    }), EasyDiscuss.module("comments", function(a) {
        var b = this;
        EasyDiscuss.require().language("COM_EASYDISCUSS_TERMS_PLEASE_ACCEPT", "COM_EASYDISCUSS_COMMENT_SUCESSFULLY_ADDED", "COM_EASYDISCUSS_COMMENT_LOAD_MORE", "COM_EASYDISCUSS_COMMENT_LOADING_MORE_COMMENTS", "COM_EASYDISCUSS_COMMENT_LOAD_ERROR").done(function() {
            EasyDiscuss.Controller("Comment.List", {
                defaultOptions: {
                    "{commentItems}": ".commentItem"
                }
            }, function(a) {
                return {
                    init: function() {
                        a.commentItems().implement(EasyDiscuss.Controller.Comment.List.Item)
                    }
                }
            }), EasyDiscuss.Controller("Comment.List.Item", {
                defaultOptions: {
                    id: null,
                    postId: null,
                    "{deleteCommentLink}": ".deleteComment",
                    "{convertCommentLink}": "[data-comment-convert-link]"
                }
            }, function(a) {
                return {
                    init: function() {
                        a.options.id = a.element.data("id"), a.options.postId = a.element.data("post-id")
                    },
                    "{deleteCommentLink} click": function() {
                        disjax.loadingDialog(), disjax.load("comment", "confirmDelete", a.options.id + "")
                    },
                    "{convertCommentLink} click": function() {
                        disjax.loadingDialog(), disjax.load("comment", "confirmConvert", a.options.id + "", a.options.postId + "")
                    }
                }
            }), EasyDiscuss.Controller("Comment.LoadMore", {
                defaultOptions: {
                    id: null,
                    currentCount: 0
                }
            }, function(b) {
                return {
                    init: function() {
                        b.options.id = b.element.data("postid"), b.doneLoading = !1
                    },
                    "{self} click": function(c) {
                        c.enabled() && (c.disabled(!0), b.element.addClass("btn-loading").html(a.language("COM_EASYDISCUSS_COMMENT_LOADING_MORE_COMMENTS")), EasyDiscuss.ajax("site.views.post.getComments", {
                            id: b.options.id,
                            start: b.list.commentItems().length
                        }).done(function(d, e) {
                            var f = a(d).filter("li");
                            f.implement(EasyDiscuss.Controller.Comment.List.Item), b.list.element.append(f), e ? b.element.html(a.language("COM_EASYDISCUSS_COMMENT_LOAD_MORE")) : (b.doneLoading = !0, b.element.hide()), c.enabled(!0)
                        }).fail(function() {
                            b.element.addClass("btn-danger").html(a.language("COM_EASYDISCUSS_COMMENT_LOAD_ERROR"))
                        }).always(function() {
                            b.element.removeClass("btn-loading")
                        }))
                    }
                }
            }), EasyDiscuss.Controller("Comment.Form", {
                defaultOptions: {
                    container: null,
                    notification: null,
                    commentsList: null,
                    loadMore: null,
                    termsCondition: null,
                    "{commentMessage}": ".commentMessage",
                    "{postId}": ".postId",
                    "{commentTnc}": ".commentTnc",
                    "{saveButton}": ".saveButton",
                    "{cancelButton}": ".cancelButton",
                    "{termsLink}": ".termsLink",
                    "{commentLoader}": ".commentLoader"
                }
            }, function(b) {
                return {
                    init: function() {},
                    resetForm: function() {
                        b.commentMessage().val(""), b.commentTnc().prop("checked", !1)
                    },
                    "{termsLink} click": function() {
                        disjax.load("comment", "tnc")
                    },
                    "{cancelButton} click": function() {
                        b.options.container.toggle()
                    },
                    "{saveButton} click": function() {
                        return !b.commentTnc().is(":checked") && b.options.termsCondition ? (b.options.notification.html(a.language("COM_EASYDISCUSS_TERMS_PLEASE_ACCEPT")).addClass("alert alert-error"), !1) : (EasyDiscuss.ajax("site.views.comment.save", {
                            comment: b.commentMessage().val(),
                            id: b.postId().val(),
                            tnc: "1"
                        }, {
                            beforeSend: function() {
                                b.commentLoader().show()
                            }
                        }).done(function(c) {
                            b.options.notification.html(a.language("COM_EASYDISCUSS_COMMENT_SUCESSFULLY_ADDED")).removeClass("alert alert-error").addClass("alert alert-success"), b.resetForm(), b.options.container.hide(), b.commentLoader().hide(), EasyDiscuss.commentsCount = void 0 === EasyDiscuss.commentsCount ? 1 : EasyDiscuss.commentsCount + 1, (b.options.loadMore.length < 1 || b.options.loadMore.controller().doneLoading) && a(c).appendTo(b.options.commentsList).addController("EasyDiscuss.Controller.Comment.List.Item")
                        }).fail(function(a) {
                            b.options.notification.html(a).addClass("alert alert-error"), b.commentLoader().hide()
                        }), void 0)
                    }
                }
            }), b.resolve()
        })
    }), EasyDiscuss.module("composer", function() {
        var b = this;
        EasyDiscuss.Controller("Composer", {
            defaultOptions: {
                editorType: null,
                operation: null,
                "{editor}": "[name=dc_reply_content]",
                "{tabs}": ".formTabs [data-foundry-toggle=tab]",
                "{form}": "form[name=dc_submit]",
                "{attachments}": "input.fileInput",
                "{submitButton}": ".submit-reply",
                "{cancelButton}": ".cancel-reply",
                "{notification}": ".replyNotification",
                "{loadingIndicator}": ".reply-loading"
            }
        }, function(a) {
            return {
                init: function() {
                    a.id = a.element.data("id"), a.options.operation = a.element.data("operation"), a.options.editorType = a.element.data("editortype"), "bbcode" == a.options.editorType && EasyDiscuss.require().library("markitup", "expanding").script("bbcode").done(function(b) {
                        a.editor().markItUp(b.getEasyDiscussBBCodeSettings).expandingTextarea()
                    }), a.tabs(":first").tab("show"), EasyDiscuss.module(a.id, function() {
                        this.resolve(a)
                    })
                },
                "{submitButton} click": function() {
                    a.submit()
                },
                "{cancelButton} click": function() {
                    a.trigger("cancel")
                },
                notify: function(b, c) {
                    a.notification().addClass("alert-" + b).html(c).show()
                },
                submit: function() {
                    var b = a.form().serializeObject();
                    b.content = b.dc_reply_content, b.files = a.attachments(), EasyDiscuss.ajax("site.views.post.saveReply", b, {
                        type: "iframe",
                        beforeSend: function() {
                            a.submitButton().prop("disabled", !0), a.loadingIndicator().show()
                        },
                        notify: a.notify,
                        reloadCaptcha: function() {
                            Recaptcha.reload()
                        },
                        complete: function() {
                            a._destroyed || (a.submitButton().removeAttr("disabled"), a.loadingIndicator().hide())
                        }
                    }).done(function(b) {
                        a.trigger("save", b)
                    }).fail(a.notify)
                }
            }
        }), b.resolve()
    }), EasyDiscuss.module("conversation", function() {
        var b = this;
        EasyDiscuss.require().language("COM_EASYDISCUSS_CONVERSATION_EMPTY_CONTENT").library("markitup").script("bbcode").view("conversation.read.item").done(function(a) {
            EasyDiscuss.Controller("Conversation.Form", {
                defaultOptions: {
                    "{textEditor}": ".replyMessage"
                }
            }, function(b) {
                return {
                    init: function() {
                        b.initBBCode()
                    },
                    initBBCode: function() {
                        b.textEditor().markItUp(a.getEasyDiscussBBCodeSettings)
                    }
                }
            }), EasyDiscuss.Controller("Conversation.Read", {
                defaultOptions: {
                    "{replyList}": ".replyList",
                    "{deleteMessage}": ".deleteMessage",
                    "{unreadMessage}": ".unreadMessage",
                    "{replyForm}": ".replyForm",
                    "{replyButton}": ".replyButton",
                    "{replyMessage}": ".replyMessage",
                    messageId: null,
                    view: {
                        reply: "conversation.read.item"
                    }
                }
            }, function(b) {
                return {
                    init: function() {
                        b.replyForm().implement(EasyDiscuss.Controller.Conversation.Form, {
                            "{textEditor}": ".replyMessage"
                        }), b.options.messageId = b.element.data("id")
                    },
                    "{deleteMessage} click": function() {
                        disjax.loadingDialog(), disjax.load("conversation", "confirmDelete", b.options.messageId + "")
                    },
                    "{replyButton} click": function() {
                        b.replyButton().addClass("disabled"), EasyDiscuss.ajax("site.views.conversation.reply", {
                            id: b.options.messageId,
                            message: b.replyMessage().val()
                        }).done(function(c) {
                            b.replyButton().removeClass("disabled");
                            var d = b.view.reply({
                                post: c
                            });
                            a(d).find(".discuss-message-content").html(c.message), b.replyMessage().val(""), b.replyList().append(d)
                        }).fail(function() {
                            a(".conversationError").addClass(" alert alert-error").html(a.language("COM_EASYDISCUSS_CONVERSATION_EMPTY_CONTENT"))
                        })
                    }
                }
            }), b.resolve()
        })
    }), EasyDiscuss.module("customfields", function() {
        var b = this;
        EasyDiscuss.require().language("COM_EASYDISCUSS_CUSTOMFIELDS_DISPLAY_ERROR").done(function(a) {
            EasyDiscuss.Controller("Administrator.CustomFields", {
                defaultOptions: {
                    customId: null,
                    defaultType: null,
                    optionCount: ".optionCount",
                    "{optionType}": "#type",
                    "{advanceOptions}": ".customFieldAdvanceOption",
                    "{addButton}": 'button[name="Add"]',
                    "{removeButton}": 'button[name="Remove"]',
                    "{fieldLoader}": ".fieldLoader",
                    "{addContainer}": ".addContainer"
                }
            }, function(b) {
                return {
                    init: function() {},
                    "{optionType} change": function(a) {
                        b.getAdvanceOption(a.val())
                    },
                    "{addButton} click": function(a) {
                        b.addFieldOption(a.data("fieldtype"))
                    },
                    "{removeButton} click": function(a) {
                        b.removeFieldOption(a, a.attr("id"), a.data("removetype"))
                    },
                    getAdvanceOption: function(c) {
                        EasyDiscuss.ajax("admin.views.customfields.getAdvanceOption", {
                            activeType: c,
                            customId: b.options.customId
                        }, {
                            beforeSend: function() {
                                a(".fieldLoader").show()
                            }
                        }).done(function(c, d, e) {
                            b.advanceOptions().html(d), a(".addContainer").html(c), a(".optionCount").attr("totalcount", e), a(".fieldLoader").hide()
                        }).fail(function() {
                            b.advanceOptions().append(a.language("COM_EASYDISCUSS_CUSTOMFIELDS_DISPLAY_ERROR"))
                        }).always(function() {
                            a(".fieldLoader").hide()
                        })
                    },
                    addFieldOption: function(c) {
                        var d = a(".optionCount").attr("totalcount");
                        EasyDiscuss.ajax("admin.views.customfields.addFieldOption", {
                            activeType: c,
                            customId: b.options.customId,
                            fieldCount: d
                        }, {
                            beforeSend: function() {
                                a(".fieldLoader").show()
                            }
                        }).done(function(c, d) {
                            b.advanceOptions().append(c), a(".optionCount").attr("totalcount", d), a(".fieldLoader").hide()
                        }).fail(function() {
                            b.advanceOptions().append(a.language("COM_EASYDISCUSS_CUSTOMFIELDS_DISPLAY_ERROR"))
                        }).always(function() {
                            a(".fieldLoader").hide()
                        })
                    },
                    removeFieldOption: function(b, c, d) {
                        a("#" + d + "_" + c).remove(), a(".remove" + d + "_" + c).remove(), b.remove()
                    }
                }
            }), b.resolve()
        })
    }), EasyDiscuss.require().library("markitup", "expanding", "placeholder", "scrollTo").script("layout/responsive", "layout/lightbox", "legacy").language("COM_EASYDISCUSS_BBCODE_BOLD", "COM_EASYDISCUSS_BBCODE_ITALIC", "COM_EASYDISCUSS_BBCODE_UNDERLINE", "COM_EASYDISCUSS_BBCODE_URL", "COM_EASYDISCUSS_BBCODE_TITLE", "COM_EASYDISCUSS_BBCODE_PICTURE", "COM_EASYDISCUSS_BBCODE_VIDEO", "COM_EASYDISCUSS_BBCODE_BULLETED_LIST", "COM_EASYDISCUSS_BBCODE_NUMERIC_LIST", "COM_EASYDISCUSS_BBCODE_LIST_ITEM", "COM_EASYDISCUSS_BBCODE_QUOTES", "COM_EASYDISCUSS_BBCODE_CODE", "COM_EASYDISCUSS_BBCODE_HAPPY", "COM_EASYDISCUSS_BBCODE_SMILE", "COM_EASYDISCUSS_BBCODE_SURPRISED", "COM_EASYDISCUSS_BBCODE_TONGUE", "COM_EASYDISCUSS_BBCODE_UNHAPPY", "COM_EASYDISCUSS_BBCODE_WINK").done(function() {
        EasyDiscuss.require().script("bbcode").done()
    }), EasyDiscuss.module("layout/responsive", function(a) {
        var b = this;
        a(function() {
            a("#discuss-wrapper").responsive([{
                at: 818,
                switchTo: "w768"
            }, {
                at: 600,
                switchTo: "w768 w600"
            }, {
                at: 500,
                switchTo: "w768 w600 w320"
            }]), a(".discuss-searchbar").responsive({
                at: 600,
                switchTo: "narrow"
            })
        }), b.resolve()
    }), EasyDiscuss.module("layout/lightbox", function() {
        var b = this;
        EasyDiscuss.require().library("fancybox").stylesheet("fancybox/default").script("legacy").done(function() {
            discuss.attachments.initGallery({
                type: "image",
                helpers: {
                    overlay: null
                }
            }), b.resolve()
        })
    }), EasyDiscuss.module("legacy", function($) {
        var module = this;
        window.isSave = !1;
        var discuss = window.discuss = {
            location: {
                remove: function(a) {
                    disjax.loadingDialog(), disjax.load("location", "removeLocation", a.toString())
                },
                removeHTML: function(a) {
                    $("#location-" + a).remove()
                }
            },
            reply: {
                clear: function() {
                    if ($("textarea[name=dc_reply_content]").val(""), window.CKEDITOR) try {
                        window.CKEDITOR.instances.dc_reply_content.setData("")
                    } catch (b) {}
                    discuss.attachments.clear(), discuss.references.clear(form), $(form).find(".showCoords").removeClass("showCoords"), $(form).find(".locationMap").remove(), $(form).find("[name=latitude]").val(""), $(form).find("[name=longitude]").val("");
                    var c = $(form).find(".polls-tab").controller();
                    c && $(form).find(".polls-tab").controller().resetPollForm()
                },
                submit: function(id) {
                    var token = $(".easydiscuss-token").val();
                    action_url = discuss_site + "&view=post&layout=ajaxSubmitReply&format=ajax&tmpl=component&" + token + "=1", form = $("." + id).find("[name=dc_submit]")[0];
                    var replyNotification = $("." + id).find(".replyNotification"),
                        iframe = document.createElement("iframe");
                    iframe.setAttribute("id", "upload_iframe"), iframe.setAttribute("name", "upload_iframe"), iframe.setAttribute("width", "0"), iframe.setAttribute("height", "0"), iframe.setAttribute("border", "0"), iframe.setAttribute("style", "width: 0; height: 0; border: none;"), form.parentNode.appendChild(iframe), window.frames.upload_iframe.name = "upload_iframe";
                    var iframeId = document.getElementById("upload_iframe");
                    $(".submit-reply").prop("disabled", !0);
                    var eventHandler = function() {
                        var content;
                        iframeId.detachEvent ? iframeId.detachEvent("onload", eventHandler) : iframeId.removeEventListener("load", eventHandler, !1), iframeId.contentDocument ? content = iframeId.contentDocument : iframeId.contentWindow ? content = iframeId.contentWindow.document : iframeId.document && (content = iframeId.document), content = $(content).find("script#ajaxResponse").html();
                        var result = $.parseJSON(content);
                        switch (result.type) {
                            case "success.captcha":
                                Recaptcha.reload();
                            case "success":
                                discuss.spinner.hide("reply_loading"), replyNotification.html(result.message).removeClass("alert-error").addClass("alert-success"), $(".discussionReplies .empty").hide();
								$("#cp").remove();
                                var count = $(".replyCount").html();
                                if (count = parseInt(count) + 1, $(".replyCount").html(count), $(".discussionReplies").length > 0) {
                                    var controller = $(".discussionReplies").controller();
                                    controller.addItem(result.html, !0)
                                }
                                discuss.attachments.initGallery({
                                    type: "image",
                                    helpers: {
                                        overlay: null
                                    }
                                }), EasyDiscuss.main_syntax_highlighter && Prism.highlightAll(), "undefined" != result.script && eval(result.script), form.reset(), discuss.reply.clear(form);
                                location.reload(true);
                                break;
                            case "error":
                                discuss.spinner.hide("reply_loading"), $(".submit-reply").removeAttr("disabled"), replyNotification.html(result.message).removeClass("alert-success").addClass("alert-error");
                                break;
                            case "error.captcha":
                                Recaptcha.reload(), discuss.spinner.hide("reply_loading"), $(".submit-reply").removeAttr("disabled"), replyNotification.html(result.message).removeClass("alert-success").addClass("alert-error")
                        }
                        replyNotification.show(), $(".submit-reply").removeAttr("disabled"), setTimeout(function() {
                            $(iframeId).remove()
                        }, 250)
                    };
                    $(iframeId).load(eventHandler), form.setAttribute("target", "upload_iframe"), form.setAttribute("action", action_url), form.setAttribute("method", "post"), form.setAttribute("enctype", "multipart/form-data"), form.setAttribute("encoding", "multipart/form-data"), form.submit(), EasyDiscuss.repliesCount = void 0 === EasyDiscuss.repliesCount ? 1 : EasyDiscuss.repliesCount + 1
                },
                verify: function() {
                    $("#dc_notification .msg_in").html(""), $("#dc_notification .msg_in").removeClass("dc_error dc_success dc_alert"), disjax.loadingDialog(), disjax.load("post", "checklogin")
                },
                post: function() {
                    $(".submit-reply").prop("disabled", !0), $("#dc_notification .msg_in").html(""), $("#dc_notification .msg_in").removeClass("dc_error dc_success dc_alert"), discuss.spinner.show("reply_loading"), discuss.post.validate(!0, "reply") ? disjax.load("post", "ajaxSubmitReply", disjax.getFormVal("#dc_submit")) : (discuss.spinner.hide("reply_loading"), $(".submit-reply").removeAttr("disabled"))
                },
                minimize: function(a) {
                    $("#dc_reply_" + a).hide(), $("#reply_minimize_msg_" + a).show()
                },
                maximize: function(a) {
                    $("#dc_reply_" + a).removeClass("is-minimized"), $("#reply_minimize_msg_" + a).hide()
                },
                addURL: function(a) {
                    var b = $(a).siblings("ul.attach-list").children(":first").clone(),
                        c = $(".remove-url").clone();
                    c.css("display", "block"), $(b).find("input").val(""), $(b).find("a").show(), $(a).siblings("ul.attach-list").append(b)
                },
                removeURL: function(a) {
                    var b = $("ul.attach-list").children();
                    return 1 == b.length ? !1 : ($(a).parents("li").remove(), void 0)
                },
                accept: function(a) {
                    disjax.loadingDialog(), disjax.load("post", "confirmAccept", a)
                },
                reject: function(a) {
                    disjax.loadingDialog(), disjax.load("post", "confirmReject", a)
                }
            },
            composer: {
                init: function(a, b) {
                    EasyDiscuss.require().script("composer").done(function() {
                        $(a).implement(EasyDiscuss.Controller.Composer, b)
                    })
                }
            },
            filter: function(a, b) {
                EasyDiscuss.ajax("site.views.index.filter", {
                    args: [a, b]
                }, {
                    beforeSend: function() {
                        discuss.spinner.show("index-loading"), $("#dc_list").hide(), $("#dc_pagination").hide(), $("#filter-links").children().removeClass("active")
                    },
                    success: function(a, b, c, d, e, f) {
                        a && $("#dc_featured_list").show(), $("#dc_list").html(b), $("#sort-wrapper").html(), $("#pagination-filter").val(d), $("#pagination-start").val(e), $("#dc_pagination").html(f)
                    },
                    complete: function() {
                        discuss.spinner.hide("index-loading"), $("#dc_list").show(), $("#dc_pagination").show(), $("#filter-links").find("." + a).addClass("active")
                    }
                })
            },
            sort: function(a, b, c) {
                discuss.spinner.show("index-loading"), "2" == discuss_featured_style && "allposts" != b && $("#dc_featured_list").hide(), $("#dc_list").hide(), $("#dc_pagination").hide(), $("#sort-links").children().removeClass("active"), $("#sort-links").find("." + a).addClass("active"), disjax.load("index", "sort", a, b, c)
            },
            references: {
                clear: function(a) {
                    var b = $(a).find(".field-references ul.attach-list"),
                        c = b.children(":first").clone();
                    b.empty().append(c)
                }
            },
            attachments: {
                initGallery: function(a) {
                    $(".attachment-image-link").fancybox(a)
                },
                clear: function() {
                    $(".uploadQueue").empty()
                }
            },
            map: {
                render: function(a, b, c, d) {
                    {
                        var e = new google.maps.LatLng(b, c),
                            f = new google.maps.Map(document.getElementById(d), {
                                zoom: 12,
                                center: e,
                                mapTypeId: google.maps.MapTypeId.ROADMAP
                            });
                        new google.maps.Marker({
                            position: e,
                            center: e,
                            title: a,
                            map: f
                        })
                    }
                }
            },
            widget: {
                init: function() {
                    $(".widget-toggle").click(function() {
                        $(this).parents(".discuss-widget").find(".widget-body").toggle(), $(this).parents(".discuss-widget").toggleClass("is-hidden")
                    })
                }
            },
            post: {
                move: function(a) {
                    disjax.loadingDialog(), disjax.load("post", "movePost", a)
                },
                branch: function(a) {
                    disjax.loadingDialog(), disjax.load("post", "branchForm", a)
                },
                mergeForm: function(a) {
                    disjax.loadingDialog(), disjax.load("post", "mergeForm", a)
                },
                feature: function(a) {
                    disjax.loadingDialog(), disjax.load("post", "confirmFeature", a)
                },
                unfeature: function(a) {
                    disjax.loadingDialog(), disjax.load("post", "confirmUnfeature", a)
                },
                submit: function() {
                    return "0" == $("#dc_submit #category_id").val() ? (disjax.loadingDialog(), disjax.load("index", "getTemplate", "ajax.selectcategory.php"), !1) : ($("#createpost").prop("disabled", !0), document.dc_submit.submit(), void 0)
                },
                qqSubmit: function() {
                    return "0" == $("#category_id").val() ? (disjax.loadingDialog(), disjax.load("index", "getTemplate", "ajax.selectcategory.php"), !1) : ($("#createpost").prop("disabled", !0), document.mod_edqq.submit(), void 0)
                },
                postTopicSubmit: function() {
                    return "0" == $("#mod_post_topic_category_id").val() ? (disjax.loadingDialog(), disjax.load("index", "getTemplate", "ajax.selectcategory.php"), !1) : ($("#createpost").prop("disabled", !0), document.mod_post_topic.submit(), void 0)
                },
                reply: function() {
                    return discuss.post.validate(!0, "reply") && (finalData = disjax.getFormVal("#dc_submit"), disjax.load("Post", "ajaxSubmitReply", finalData)), !1
                },
                validate: function(a, b) {
                    return a || "" != $("#ez-title").val() && $("#ez-title").val() != langPostTitle ? !0 : ("reply" == b ? ($("#dc_notification .msg_in").html(langEmptyTitle), $("#dc_notification .msg_in").addClass("dc_error")) : ($("#dc_post_notification .msg_in").html(langEmptyTitle), $("#dc_post_notification .msg_in").addClass("dc_error")), !1)
                },
                del: function(a, b, c) {
                    disjax.loadingDialog(), disjax.load("post", "deletePostForm", a, b, c)
                },
                vote: {
                    add: function(a, b) {
                        disjax.load("Post", "ajaxAddVote", a, b)
                    },
                    check: function(a) {
                        disjax.load("Post", "ajaxSumVote", a)
                    },
                    view: function(a) {
                        disjax.load("Post", "ajaxViewVote", a, "")
                    }
                },
                lock: function(a) {
                    disjax.load("Post", "ajaxLockPost", a)
                },
                unlock: function(a) {
                    disjax.load("Post", "ajaxUnlockPost", a)
                },
                resolve: function(a) {
                    disjax.load("Post", "resolve", a)
                },
                unresolve: function(a) {
                    disjax.load("Post", "unresolve", a)
                },
                likes: function(a, b, c) {
                    disjax.load("Post", "ajaxLikes", a, b, c)
                },
                replyLikes: function(a, b, c) {
                    disjax.load("Post", "ajaxReplyLikes", a, b, c)
                },
                onhold: function(a) {
                    disjax.load("Post", "ajaxOnHoldPost", a)
                },
                accepted: function(a) {
                    disjax.load("Post", "ajaxAcceptedPost", a)
                },
                workingon: function(a) {
                    disjax.load("Post", "ajaxWorkingOnPost", a)
                },
                reject: function(a) {
                    disjax.load("Post", "ajaxRejectPost", a)
                },
                nostatus: function(a) {
                    disjax.load("Post", "ajaxNoStatusPost", a)
                },
                featured: function(a, b) {
                    disjax.load("Post", "ajaxFeatured", a, b)
                },
                toggleTools: function(a, b, c) {
                    a ? ($(".post_delete_link").show(), $(".likes").show(), $(".comments").show(), $(".vote_up").show(), $(".vote_down").show(), $("#dc_main_reply_form").show()) : (discuss.comment.cancel(), "1" == c ? $(".post_delete_link").show() : $(".post_delete_link").hide(), $(".likes").hide(), $(".comments").hide(), $(".vote_up").hide(), $(".vote_down").hide(), $("#dc_main_reply_form").hide())
                },
                attachment: {
                    remove: function(a) {
                        $("#button-delete-att-" + a).prop("disabled", !0), disjax.load("post", "deleteAttachment", a)
                    }
                }
            },
            login: {
                verify: function() {
                    return discuss.post.validate(!1, "reply") ? ($("#submit").prop("disabled", !0), disjax.loadingDialog(), disjax.load("post", "checklogin"), void 0) : !1
                },
                token: "",
                showpane: function(a) {
                    switch ($("#usertype_pane_right").children().hide(), $("#usertype_pane_left").children(), $("#usertype_member").removeClass("active"), $("#usertype_guest").removeClass("active"), $("#discuss_register").removeClass("active"), $("#usertype_twitter").removeClass("active"), $("#usertype_status .msg_in").html(""), $("#usertype_status .msg_in").removeClass("dc_error"), a) {
                        case "guest":
                            $("#usertype_guest").addClass("active"), $("#usertype_guest_pane_wrapper").show();
                            break;
                        case "register":
                            $("#discuss_register").addClass("active"), $("#discuss_register_pane_wrapper").show();
                            break;
                        case "twitter":
                            $("#usertype_twitter").addClass("active"), $("#usertype_twitter_pane_wrapper").show();
                            break;
                        case "member":
                        default:
                            $("#usertype_member").addClass("active"), $("#usertype_member_pane_wrapper").show()
                    }
                },
                submit: {
                    reply: function(a) {
                        switch (a) {
                            case "guest":
                                $("#edialog-guest-reply").prop("disabled", !0);
                                var b = $("#discuss_usertype_guest_email").val(),
                                    c = $("#discuss_usertype_guest_name").val();
                                disjax.load("post", "ajaxGuestReply", b, c);
                                break;
                            case "member":
                                $("#edialog-member-reply").prop("disabled", !0);
                                var d = $("#discuss_usertype_member_username").val(),
                                    e = $("#discuss_usertype_member_password").val(),
                                    f = discuss.login.token;
                                disjax.load("post", "ajaxMemberReply", d, e, f);
                                break;
                            case "twitter":
                                $("#edialog-twitter-reply").prop("disabled", !0), disjax.load("post", "ajaxTwitterReply")
                        }
                    }
                },
                getGuestDefaultName: function() {
                    var a = $("#discuss_usertype_guest_email").val();
                    $("#discuss_usertype_guest_name").val(a.split("@", 1))
                },
                twitter: {
                    signin: function(a) {
                        a ? disjax.load("post", "ajaxRefreshTwitter") : alert("failed")
                    },
                    signout: function() {
                        disjax.load("post", "ajaxSignOutTwitter")
                    }
                }
            },
            files: {
                add: function() {
                    jQuery("#file_contents div").before('<input type="file" name="filedata[]" id="filedata" size="50" />')
                }
            },
            pagination: {
                more: function(a) {
                    "questions" == a ? disjax.load("index", "ajaxReadmore", $("#pagination-start").val(), $("#pagination-sorting").val(), a, $("#discuss_parent").val(), $("#pagination-filter").val(), $("#pagination-category").val(), $("#pagination-query").val()) : disjax.load("index", "ajaxReadmore", $("#pagination-start").val(), $("#pagination-sorting").val(), a, $("#discuss_parent").val(), $("#pagination-filter").val(), $("#pagination-category").val())
                },
                addButton: function(a, b) {
                    html = '<a href="javascript:void(0);" onclick="discuss.pagination.more( \'' + a + "' );\"><span>" + b + "</span></a>", $("#dc_pagination a").length < 1 && $("#dc_pagination").prepend(html)
                }
            },
            comment: {
                save: function(a) {
                    discuss.spinner.show("discussSubmitWait"), finalData = disjax.getFormVal("#frmComment" + a), disjax.load("Post", "ajaxSubmitComment", finalData)
                },
                add: function(a, b) {
                    $(b).toggleClass("active"), $("#comment-action-container-" + a).toggle(), $("#err-msg .msg_in").html(""), $("#comment-notification-" + a + " .msg_in").html(""), $("#comment-notification-" + a + " .msg_in").removeClass("alert alert-error success")
                },
                clearForm: function(a) {
                    $("#comment-err-msg .msg_in").html(""), $("#comment-err-msg .msg_in").removeClass("alert alert-error success"), $("#comment").val(""), $("#comment-action-container-" + a).hide()
                },
                cancel: function(a) {
                    $("#comment-err-msg .msg_in").html(""), $("#comment-err-msg .msg_in").removeClass("dc_alert dc_error dc_success"), $("#comment-notification-" + a + " .msg_in").html(""), $("#comment-notification-" + a + " .msg_in").removeClass("alert alert-error success"), $("#comment").val(""), $("#comment-action-container-" + a).hide(), $("#comments-button-" + a).show()
                },
                remove: function(a) {
                    var b = "Are you sure?";
                    return window.confirm(b) ? (disjax.load("Post", "ajaxCommentDelete", a), EasyDiscuss.commentsCount = void 0 === EasyDiscuss.commentsCount ? 0 : EasyDiscuss.commentsCount - 1, void 0) : !1
                },
                removeEntry: function(a) {
                    $("#comment-" + a).remove()
                }
            },
            reports: {
                add: function(a) {
                    disjax.loadingDialog(), disjax.load("post", "reportForm", a)
                },
                cancel: function() {
                    disjax.closedlg()
                },
                submit: function() {
                    disjax.load("post", "ajaxSubmitReport", disjax.getFormVal("#frmReport"))
                },
                revertForm: function(a) {
                    effect.highlight("#post_content_layout_" + a), setTimeout(function() {
                        discuss.reports.cancel()
                    }, 4e3)
                }
            },
            element: {
                focus: function(a) {
                    ele = "#" + a, $(ele).focus()
                }
            },
            spinner: {
                show: function(a) {
                    var b = new Image;
                    b.src = spinnerPath, b.name = "discuss-loading", b.id = "discuss-loading", $("#" + a).html(b), $("#" + a).show()
                },
                hide: function(a) {
                    $("#" + a).hide()
                }
            },
            system: {
                redirect: function(a) {
                    window.location = a
                },
                refresh: function() {
                    window.location.reload()
                }
            },
            subscribe: {
                post: function(a) {
                    var b = "post",
                        c = $("#subscribe_email").val(),
                        d = $("#subscribe_name").val(),
                        e = "instant";
                    discuss.spinner.show("dialog_loading"), disjax.load("post", "ajaxAddSubscription", b, c, d, e, a + "")
                },
                site: function() {
                    var a = "site",
                        b = $("#subscribe_email").val(),
                        c = $("#subscribe_name").val(),
                        d = $("input:radio[name=subscription_interval]:checked").val(),
                        e = "0";
                    discuss.spinner.show("dialog_loading"), disjax.load("index", "ajaxAddSubscription", a, b, c, d, e + "")
                },
                tag: function(a) {
                    var b = "tag",
                        c = $("#subscribe_email").val(),
                        d = $("#subscribe_name").val(),
                        e = $("input:radio[name=subscription_interval]:checked").val();
                    discuss.spinner.show("dialog_loading"), disjax.load("index", "ajaxAddSubscription", b, c, d, e, a + "")
                },
                category: function(a) {
                    var b = "category",
                        c = $("#subscribe_email").val(),
                        d = $("#subscribe_name").val(),
                        e = $("input:radio[name=subscription_interval]:checked").val();
                    discuss.spinner.show("dialog_loading"), disjax.load("index", "ajaxAddSubscription", b, c, d, e, a + "")
                },
                user: function(a) {
                    var b = "user",
                        c = $("#subscribe_email").val(),
                        d = $("#subscribe_name").val(),
                        e = $("input:radio[name=subscription_interval]:checked").val();
                    discuss.spinner.show("dialog_loading"), disjax.load("index", "ajaxAddSubscription", b, c, d, e, a + "")
                }
            },
            user: {
                tabs: {
                    show: function(a, b, c) {
                        discuss.spinner.show("profile-loading"), $(".user-tabs ul li").removeClass("active"), $(a).parent().addClass("active"), $("#dc_profile .tab-item").hide(), $("#dc_pagination").hide();
                        var d = $("#profile-id").val();
                        c ? disjax.load("profile", "filter", b, d) : $("#dc_profile ." + b).show()
                    }
                },
                checkAlias: function() {
                    var a = $("#profile-alias").val();
                    "" != a && disjax.load("profile", "ajaxCheckAlias", a)
                }
            },
            tooltips: {
                init: function() {},
                execute: function() {}
            },
            notifications: {
                interval: 3e3,
                monitor: null,
                count: null,
                startMonitor: function() {
                    var a = discuss.notifications;
                    a.monitor = setTimeout(a.update, a.interval)
                },
                stopMonitor: function() {
                    clearTimeout(discuss.notifications.monitor)
                },
                update: function() {
                    var a = discuss.notifications;
                    a.stopMonitor();
                    var b = {};
                    b[$(".easydiscuss-token").val()] = 1, EasyDiscuss.ajax("site.views.notifications.count", b, {
                        type: "jsonp",
                        success: function(b) {
                            0 == b && ($("#notification-count").hide(), $("#mod-notification-count").hide()), 0 != b && b && (a.count != b && ($("#notification-count").html(b), $("#mod-notification-count").html(b)), b > 0 && ($("#notification-count").show(), $("#mod-notification-count").show()), a.count = b)
                        },
                        complete: function() {
                            a.startMonitor()
                        }
                    })
                }
            },
            conversation: {
                interval: 3e3,
                monitor: null,
                count: null,
                startMonitor: function() {
                    var a = discuss.conversation;
                    a.monitor = setTimeout(a.update, a.interval)
                },
                stopMonitor: function() {
                    clearTimeout(discuss.conversation.monitor)
                },
                update: function() {
                    var a = discuss.conversation;
                    a.stopMonitor();
                    var b = {};
                    b[$(".easydiscuss-token").val()] = 1, EasyDiscuss.ajax("site.views.conversation.count", b, {
                        type: "jsonp",
                        success: function(b) {
                            0 == b && $("#conversation-count").hide(), 0 != b && b && (a.count != b && $("#conversation-count").html(b), b > 0 && $("#conversation-count").show(), a.count = b)
                        },
                        complete: function() {
                            a.startMonitor()
                        }
                    })
                },
                reply: function(a) {
                    EasyDiscuss.ajax("site.views.conversation.reply", {
                        id: a
                    }).done(function() {})
                },
                write: function(a) {
                    disjax.load("conversation", "write", a)
                },
                send: function() {
                    var a = $("#conversationMessage").val(),
                        b = $("#recipientId").val();
                    return a ? (EasyDiscuss.ajax("site.views.conversation.save", {
                        contents: a,
                        recipient: b
                    }).done(function(a) {
                        disjax.dialog(a)
                    }), void 0) : ($("#conversationEmptyMessage").show(), !1)
                }
            },
            polls: {
                show: function() {
                    $("#discuss-polls").toggle(), $("#discuss-multiple-polls").toggle(), $("#discuss-multiple-polls-title").toggle()
                },
                vote: function(a) {
                    var b = $(a).val();
                    disjax.load("polls", "vote", b)
                },
                unvote: function(a) {
                    disjax.load("polls", "unvote", a)
                },
                showVoters: function(a) {
                    disjax.load("polls", "getvoters", a)
                },
                lock: function(a) {
                    EasyDiscuss.ajax("site.views.polls.lockPolls", {
                        postId: a
                    }).done(function(a, b, c, d) {
                        b ? $(".discussQuestion").addClass("is-poll-lock") : $("#dc_reply_" + c).addClass("is-poll-lock");
                        for (var e = d.length, f = null, g = 0; e > g; g++) f = d[g], $("#poll-count-" + f).attr("disabled", "disabled"), $("#poll-count-" + f).prop("disabled", "disabled");
                        $("#poll_notice_" + c).html(a), $("#poll_notice_" + c).show(), $("#poll_notice_" + c).parent().addClass("alert")
                    })
                },
                unlock: function(a) {
                    EasyDiscuss.ajax("site.views.polls.unlockPolls", {
                        postId: a
                    }).done(function(a, b, c) {
                        a ? $(".discussQuestion").removeClass("is-poll-lock") : $("#dc_reply_" + b).removeClass("is-poll-lock");
                        for (var d = c.length, e = null, f = 0; d > f; f++) e = c[f], $("#poll-count-" + e).removeAttr("disabled", "disabled"), $("#poll-count-" + e).removeProp("disabled", "disabled");
                        $("#poll_notice_" + b).html(""), $("#poll_notice_" + b).parent().removeClass("alert")
                    })
                }
            },
            tabs: {
                show: function(a, b) {
                    $(".form-tab-item").hide(), $(a).parent().siblings().removeClass("active"), $(a).parent().addClass("active"), $(".tab-" + b).show()
                }
            },
            toolbar: {
                login: function() {
                    $("#dc_toolbar .to_login div.toolbar-note").toggle()
                }
            }
        };
        window.effect = effect = {
            highlight: function(a) {
                setTimeout(function() {
                    $(a).animate({
                        backgroundColor: "#ffff66"
                    }, 300).animate({
                        backgroundColor: "transparent"
                    }, 1500)
                }, 500)
            }
        }, disjax = window.disjax = disjax = {
            http: !1,
            format: "text",
            callback: function() {},
            error: !1,
            btnArray: new Array,
            getHTTPObject: function() {
                var a = !1;
                if ("undefined" != typeof ActiveXObject) try {
                        a = new ActiveXObject("Msxml2.XMLHTTP")
                    } catch (b) {
                        try {
                            a = new ActiveXObject("Microsoft.XMLHTTP")
                        } catch (c) {
                            a = !1
                        }
                    } else if (XMLHttpRequest) try {
                        a = new XMLHttpRequest
                    } catch (b) {
                        a = !1
                    }
                    this.http = a
            },
            load: function(view, method) {
                var callback = {};
                "object" == typeof view && (callback = view.callback, view = view.view), url = discuss_site, url += "&tmpl=component", url += "&no_html=1", url += "&format=ajax", url += "&uid=" + (new Date).getTime();
                var parameters = "";
                if (parameters = "&view=" + view + "&layout=" + method, arguments.length > 2)
                    for (var i = 2; i < arguments.length; i++) {
                        var myArgument = arguments[i];
                        if ($.isArray(myArgument))
                            for (var j = 0; j < myArgument.length; j++) {
                                var argument = myArgument[j];
                                if ("string" == typeof argument) {
                                    var expr = /^\w+\(*\)$/,
                                        match = expr.exec(argument),
                                        arg = argument;
                                    match || (arg = escape(arg)), parameters += "&value" + (i - 2) + "[]=" + encodeURIComponent(arg)
                                }
                            } else {
                                var argument = myArgument;
                                if ("string" == typeof argument) {
                                    var expr = /^\w+\(*\)$/,
                                        match = expr.exec(argument),
                                        arg = argument;
                                    match || (arg = escape(arg)), parameters += "&value" + (i - 2) + "=" + encodeURIComponent(arg)
                                }
                            }
                    }
                var token = $(".easydiscuss-token").val();
                if (parameters += "&" + token + "=1", this.getHTTPObject(), this.http && view && method) {
                    var ths = this;
                    this.http.open("POST", url, !0), this.http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), this.http.setRequestHeader("Content-length", parameters.length), this.http.setRequestHeader("Connection", "close"), this.http.onreadystatechange = function() {
                        if (ths) {
                            var http = ths.http;
                            if (4 == http.readyState)
                                if (200 == http.status) {
                                    var result = "";
                                    http.responseText && (result = http.responseText), result = result.replace(/[\n\r]/g, ""), result = eval(result), ths.process(result, callback)
                                } else ths.error && ths.error(http.status)
                        }
                    }, this.http.send(parameters)
                }
            },
            getFormVal: function(a) {
                var b = [],
                    c = null;
                return $(":input", $(a)).each(function() {
                    c = this.value.replace(/"/g, "&quot;"), c = encodeURIComponent(c), $(this).is(":checkbox") || $(this).is(":radio") ? $(this).prop("checked") && b.push(this.name + "=" + escape(c)) : b.push(this.name + "=" + escape(c))
                }), b
            },
            process: function(result, callback) {
                if ("function" == typeof callback) return callback.apply(this, result);
                for (var i = 0; i < result.length; i++) {
                    var action = result[i][0];
                    switch (action) {
                        case "script":
                            var data = result[i][1];
                            eval(data);
                            break;
                        case "after":
                            var id = result[i][1],
                                value = result[i][2];
                            $("#" + id).after(value);
                            break;
                        case "append":
                            var id = result[i][1],
                                value = result[i][2];
                            $("#" + id).append(value);
                            break;
                        case "assign":
                            var id = result[i][1],
                                value = result[i][2];
                            $("#" + id).html(value);
                            break;
                        case "value":
                            var id = result[i][1],
                                value = result[i][2];
                            $("#" + id).val(value);
                            break;
                        case "prepend":
                            var id = result[i][1],
                                value = result[i][2];
                            $("#" + id).prepend(value);
                            break;
                        case "destroy":
                            var id = result[i][1];
                            $("#" + id).remove();
                            break;
                        case "dialog":
                            disjax.dialog(result[i][1]);
                            break;
                        case "alert":
                            disjax.alert(result[i][1], result[i][2], result[i][3]);
                            break;
                        case "create":
                    }
                }
                delete result
            },
            loadingDialog: function() {
                disjax.dialog({
                    title: $.language("COM_EASYDISCUSS_LOADING"),
                    loading: !0
                })
            },
            dialog: function(a) {
                disjax._showPopup(a)
            },
            closedlg: function() {
                var a = $("#discuss-dialog"),
                    b = $("#discuss-overlay");
                b.hide(), a.unbind(".dialog").hide(), $(document).off("click.ed.closedlg"), $(document).unbind("keyup", disjax._attachPopupShortcuts)
            },
            _showPopup: function(a) {
                var b = {
                        width: "500",
                        height: "auto",
                        type: "dialog",
                        loading: !1
                    },
                    a = $.extend({}, b, a),
                    c = $("#discuss-dialog");
                c.length < 1 && (dialogTemplate = '<div id="discuss-dialog" class="modal"><div class="modal-header"><a href="javascript:void(0);" aria-hidden="true" onclick="disjax.closedlg();" class="close">x</a><h3 class="modal-title"></h3></div><div class="modal-body"></div><div class="modal-footer"></div>', c = $(dialogTemplate).appendTo("body")), c.fadeOut(0), a.loading ? c.addClass("modal-loading") : c.removeClass("modal-loading");
                var d = c.children(".modal-body");
                "string" == typeof a.title ? c.find("h3.modal-title").html(a.title) : c.find("h3.modal-title").html("&nbsp;");
                var e = c.find(".modal-footer");
                $.isArray(a.buttons) ? (e.html("").show(), $.each(a.buttons, function(a, b) {
                    var c = b.className,
                        d = b.title,
                        f = b.action,
                        g = b.form,
                        h = $(document.createElement("a")).attr("href", "javascript: void(0);").addClass("btn " + c).html(d);
                    f && h.attr("onclick", f), g && h.bind("click", function() {
                        $(g).submit()
                    }), e.append(h)
                })) : e.hide(), d.html(a.content), c.css({
                    width: "auto" == a.width ? "auto" : parseInt(a.width),
                    height: "auto" == a.height ? "auto" : parseInt(a.height),
                    margin: 0,
                    zIndex: 99999
                }).show(0, function() {
                    var b, a = function() {
                        c.css({
                            top: ($(window).height() - c.height()) / 2,
                            left: ($(window).width() - c.width()) / 2
                        })
                    };
                    $(window).bind("resize.dialog scroll.dialog", function() {
                        clearTimeout(b), b = setTimeout(a, 50)
                    }), a()
                }), $(document).on("click.ed.closedlg", "#edialog-cancel, #edialog-submit", function() {
                    disjax.closedlg()
                }), $(document).bind("keyup", disjax._attachPopupShortcuts)
            },
            _attachPopupShortcuts: function(a) {
                27 == a.keyCode && disjax.closedlg()
            }
        }, $(function() {
            $("[rel=ed-tooltip]").tooltip({
                animation: !1,
                container: "body",
                template: '<div class="tooltip tooltip-ed"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
            })
        }), $(document).on("mouseover", "[rel=ed-popover]", function() {
            $(this).popover({
                container: "body",
                delay: {
                    show: 100,
                    hide: 100
                },
                animation: !1,
                trigger: "hover"
            })
        }), module.resolve()
    }), EasyDiscuss.module("favourites", function() {
        var b = this;
        EasyDiscuss.require().language("COM_EASYDISCUSS_FAVOURITE_BUTTON_UNFAVOURITE", "COM_EASYDISCUSS_FAVOURITE_BUTTON_FAVOURITE").done(function(a) {
            EasyDiscuss.Controller("Post.Favourites", {
                defaultOptions: {
                    postId: null,
                    "{favButton}": ".btnFav",
                    "{removeButton}": ".btnRemove",
                    "{favLoader}": ".favLoader",
                    "{favCount}": ".favCount"
                }
            }, function(b) {
                return {
                    init: function() {
                        b.options.postId = b.element.data("postid")
                    },
                    "{favButton} click": function(c) {
                        EasyDiscuss.ajax("site.views.favourites.favourite", {
                            postid: b.options.postId
                        }, {
                            beforeSend: function() {
                                a(".favLoader").show(), a(".favCount").empty()
                            }
                        }).done(function(b, d) {
                            b ? (c.addClass("isfav"), a(c).html(a.language("COM_EASYDISCUSS_FAVOURITE_BUTTON_UNFAVOURITE")), a(".favCount").html(d)) : (c.removeClass("isfav btn-primary"), a(c).html(a.language("COM_EASYDISCUSS_FAVOURITE_BUTTON_FAVOURITE")), a(".favCount").html(d))
                        }).fail(function() {}).always(function() {
                            a(".favLoader").hide()
                        })
                    },
                    "{removeButton} click": function(c) {
                        EasyDiscuss.ajax("site.views.favourites.remove", {
                            postid: b.options.postId
                        }).done(function() {
                            c.removeClass("isfav"), a(".discussItem" + b.options.postId).remove()
                        }).fail(function() {})
                    }
                }
            }), b.resolve()
        })
    }), EasyDiscuss.module("filterbar", function(a) {
        var b = this;
        EasyDiscuss.Controller("DiscussFilterBar", {
            defaultOptions: {
                catId: null,
                "{allpostsButton}": ".allpostsBtn",
                "{featuredButton}": ".featuredBtn",
                "{newButton}": ".newBtn",
                "{unansweredButton}": ".unansweredBtn"
            }
        }, function(b) {
            return {
                init: function() {},
                "{allpostsButton} click": function() {
                    b.filter("allposts")
                },
                "{featuredButton} click": function() {
                    b.filter("featured")
                },
                "{newButton} click": function() {
                    b.filter("new")
                },
                "{unansweredButton} click": function() {
                    b.filter("unanswered")
                },
                filter: function(c) {
                    var d = 0 == b.options.catId ? null : b.options.catId;
                    EasyDiscuss.ajax("site.views.index.filter", {
                        args: [c, d]
                    }, {
                        beforeSend: function() {
                            discuss.spinner.show("index-loading"), a("#dc_list").hide(), a("#dc_pagination").hide(), a("#filter-links").children().removeClass("active")
                        },
                        success: function(b, c, d, e, f, g) {
                            b && a("#dc_featured_list").show(), a("#dc_list").html(c), a("#sort-wrapper").html(), a("#pagination-filter").val(e), a("#pagination-start").val(f), a("#dc_pagination").html(g)
                        },
                        complete: function() {
                            discuss.spinner.hide("index-loading"), a("#dc_list").show(), a("#dc_pagination").show(), a("#filter-links").find("." + c).addClass("active")
                        }
                    })
                }
            }
        }), b.resolve()
    }), EasyDiscuss.module("likes", function(a) {
        var b = this;
        EasyDiscuss.require().language("COM_EASYDISCUSS_UNLIKE_THIS_POST", "COM_EASYDISCUSS_LIKE_THIS_POST", "COM_EASYDISCUSS_UNLIKE", "COM_EASYDISCUSS_LIKES").done(function(a) {
            EasyDiscuss.Controller("Likes", {
                defaultOptions: {
                    postId: null,
                    registeredUser: null,
                    "{likeButton}": ".btnLike",
                    "{unlikeButton}": ".btnUnlike",
                    "{likeText}": ".likeText",
                    "{likeCount}": ".likeCount",
                    "{likeStatus}": ".likeStatus"
                }
            }, function(b) {
                return {
                    init: function() {
                        b.options.postId = b.element.data("postid"), b.element.data("like", !0)
                    },
                    getLikesData: function() {
                        EasyDiscuss.ajax("site.views.likes.getData", {
                            id: b.options.postId
                        }).done(function(a) {
                            b.likeText().html(a)
                        })
                    },
                    likeItem: function() {
                        return b.options.registeredUser ? (EasyDiscuss.ajax("site.views.likes.like", {
                            postid: b.options.postId
                        }).done(function(a, c) {
                            b.likeText().html(a), b.likeCount().html(c)
                        }), void 0) : !1
                    },
                    "{likeButton} click": function(c) {
                        if (!b.options.registeredUser) return !1;
                        var d = b.likeButton();
                        d.addClass("btnUnlike"), d.attr("data-original-title", a.language("COM_EASYDISCUSS_UNLIKE_THIS_POST")), d.find("i").removeClass("icon-ed-love").addClass("icon-ed-remove"), b.likeStatus().html(a.language("COM_EASYDISCUSS_UNLIKE")), d.removeClass("btnLike"), b.likeItem(c)
                    },
                    "{unlikeButton} click": function() {
                        var d = b.unlikeButton();
                        d.addClass("btnLike"), d.attr("data-original-title", a.language("COM_EASYDISCUSS_LIKE_THIS_POST")), d.find("i").removeClass("icon-ed-remove").addClass("icon-ed-love"), b.likeStatus().html(a.language("COM_EASYDISCUSS_LIKES")), d.removeClass("btnUnlike"), b.likeItem()
                    },
                    "{unlikeButton} mouseover": function() {},
                    "{unlikeButton} mouseout": function() {}
                }
            })
        }), a(document).on("mouseover.discussLikes", ".discussLikes", function() {
            var b = a(this);
            if (void 0 == b.data("like")) {
                var c = "true" === b.attr("data-registered-user");
                b.implement(EasyDiscuss.Controller.Likes, {
                    registeredUser: c
                })
            }
        }), b.resolve()
    }), EasyDiscuss.module("location", function(a) {
        var b = this;
        EasyDiscuss.require().library("ui/autocomplete").done(function() {
            EasyDiscuss.Controller("Location.Form", {
                defaultOptions: {
                    language: "en",
                    initialLocation: null,
                    mapType: "ROADMAP",
                    height: "250px",
                    width: "100%",
                    "{locationInput}": ".locationInput",
                    "{locationLatitude}": ".locationLatitude",
                    "{locationLongitude}": ".locationLongitude",
                    "{latitudeDisplay}": ".latitudeDisplay",
                    "{longitudeDisplay}": ".longitudeDisplay",
                    "{locationMap}": ".locationMap",
                    "{autoDetectButton}": ".autoDetectButton",
                    "{locationCoords}": ".locationCoords",
                    "{removeLocationButton}": ".removeLocationButton"
                }
            }, function(b) {
                return {
                    init: function() {
                        var c = a.uid("ext");
                        window[c] = function() {
                            a.___GoogleMaps.resolve()
                        }, a.___GoogleMaps || (a.___GoogleMaps = a.Deferred(), EasyDiscuss.require().script({
                            prefetch: !1
                        }, "https://maps.googleapis.com/maps/api/js?sensor=true&language=" + b.options.language + "&callback=" + c)), a.___GoogleMaps.done(function() {
                            b._init()
                        })
                    },
                    _init: function() {
                        b.geocoder = new google.maps.Geocoder, b.hasGeolocation = void 0 !== navigator.geolocation, b.hasGeolocation ? b.autoDetectButton().show() : b.autoDetectButton().remove(), b.locationInput().autocomplete({
                            delay: 300,
                            minLength: 0,
                            source: b.retrieveSuggestions,
                            select: function(a, c) {
                                b.locationInput().autocomplete("close"), b.setLocation(c.item.location)
                            }
                        }).prop("disabled", !1), b.autocomplete = b.locationInput().autocomplete("widget"), b.autocomplete.addClass("location-suggestion");
                        var e = a.trim(b.options.initialLocation);
                        e && b.getLocationByAddress(e, function(a) {
                            b.setLocation(a[0])
                        }), b.busy(!1)
                    },
                    busy: function(a) {
                        b.locationInput().toggleClass("loading", a)
                    },
                    getUserLocations: function(a) {
                        b.getLocationAutomatically(function(c) {
                            b.userLocations = b.buildDataset(c), a && a(c)
                        })
                    },
                    getLocationByAddress: function(a, c) {
                        b.geocoder.geocode({
                            address: a
                        }, c)
                    },
                    getLocationByCoords: function(a, c, d) {
                        b.geocoder.geocode({
                            location: new google.maps.LatLng(a, c)
                        }, d)
                    },
                    getLocationAutomatically: function(a, c) {
                        return navigator.geolocation ? (navigator.geolocation.getCurrentPosition(function(c) {
                            b.getLocationByCoords(c.coords.latitude, c.coords.longitude, a)
                        }, c), void 0) : c("ERRCODE", "Browser does not support geolocation or do not have permission to retrieve location data.")
                    },
                    renderMap: function(a, c) {
                        b.busy(!0), b.locationMap().css("width", b.options.width).css("height", b.options.height).show();
                        var d = new google.maps.Map(b.locationMap()[0], {
                                zoom: 15,
                                center: a.geometry.location,
                                mapTypeId: google.maps.MapTypeId[b.options.mapType],
                                disableDefaultUI: !0
                            }),
                            e = new google.maps.Marker({
                                draggable: !0,
                                position: a.geometry.location,
                                center: a.geometry.location,
                                title: a.formatted_address,
                                map: d
                            }),
                            f = new google.maps.InfoWindow({
                                content: c
                            });
                        google.maps.event.addListener(d, "tilesloaded", function() {
                            f.open(d, e), b.busy(!1)
                        }), google.maps.event.addListener(e, "dragend", function() {
                            b.getLocationByCoords(this.getPosition().lat(), this.getPosition().lng(), function(a) {
                                var c = a[0].formatted_address;
                                b.locationInput().val(c)
                            }), b.locationLatitude().val(this.getPosition().lat()), b.locationLongitude().val(this.getPosition().lng()), b.latitudeDisplay().html(this.getPosition().lat()), b.longitudeDisplay().html(this.getPosition().lng()), b.locationCoords().addClass("showCoords")
                        })
                    },
                    setLocation: function(a) {
                        a && (b.locationResolved = !0, b.lastResolvedLocation = a, b.locationInput().val(a.formatted_address), b.locationLatitude().val(a.geometry.location.lat()), b.latitudeDisplay().html(a.geometry.location.lat()), b.longitudeDisplay().html(a.geometry.location.lng()), b.locationCoords().addClass("showCoords"), b.locationLongitude().val(a.geometry.location.lng()), b.renderMap(a, a.formatted_address))
                    },
                    removeLocation: function() {
                        b.locationResolved = !1, b.locationInput().val(""), b.locationLatitude().val(""), b.latitudeDisplay().html(""), b.longitudeDisplay().html(""), b.locationCoords().removeClass("showCoords"), b.locationLongitude().val(""), b.locationMap().hide()
                    },
                    buildDataset: function(b) {
                        var c = a.map(b, function(a) {
                            return {
                                label: a.formatted_address,
                                value: a.formatted_address,
                                location: a
                            }
                        });
                        return c
                    },
                    retrieveSuggestions: function(a, c) {
                        b.busy(!0);
                        var d = a.term,
                            e = function(a) {
                                c(a), b.busy(!1)
                            };
                        "" == d ? e(b.userLocations || []) : b.getLocationByAddress(d, function(a) {
                            e(b.buildDataset(a))
                        })
                    },
                    suggestUserLocations: function() {
                        b.hasGeolocation && b.userLocations && (b.removeLocation(), b.locationInput().autocomplete("search", "")), b.busy(!1)
                    },
                    "{locationInput} blur": function() {
                        setTimeout(function() {
                            var c = a.trim(b.locationInput().val());
                            "" == c ? b.removeLocation() : b.locationResolved ? c != b.lastResolvedLocation.formatted_address && b.setLocation(b.lastResolvedLocation) : b.removeLocation()
                        }, 250)
                    },
                    "{autoDetectButton} click": function() {
                        b.busy(!0), b.hasGeolocation && !b.userLocations ? b.getUserLocations(b.suggestUserLocations) : b.suggestUserLocations()
                    },
                    "{removeLocationButton} click": function() {
                        b.removeLocation()
                    }
                }
            }), EasyDiscuss.Controller("Location.Map", {
                defaultOptions: {
                    animation: "drop",
                    language: "en",
                    useStaticMap: !1,
                    disableMapsUI: !0,
                    zoom: 5,
                    fitBounds: null,
                    minZoom: null,
                    maxZoom: null,
                    center: null,
                    locations: [],
                    mapType: "ROADMAP",
                    width: 500,
                    height: 400,
                    "{locationMap}": ".locationMap",
                    "{removeLocation}": ".removeLocation"
                }
            }, function(b) {
                return {
                    init: function() {
                        if (b.mapLoaded = !1, !a.___GoogleMaps) {
                            a.___GoogleMaps = a.Deferred();
                            var c = a.uid("ext");
                            window[c] = function() {
                                a.___GoogleMaps.resolve()
                            }, EasyDiscuss.require().script({
                                prefetch: !1
                            }, "https://maps.googleapis.com/maps/api/js?sensor=true&language=" + b.options.language + "&callback=" + c)
                        }
                        a.___GoogleMaps.done(function() {
                            b._init()
                        })
                    },
                    _init: function() {
                        if (1 == b.options.useStaticMap) {
                            var c = "&language=" + String(b.options.language),
                                d = "&size=" + String(b.options.width) + "x" + String(b.options.height),
                                e = "&zoom=" + String(b.options.zoom),
                                f = "&center=" + String(parseFloat(b.options.locations[0].latitude).toFixed(6)) + "," + String(parseFloat(b.options.locations[0].longitude).toFixed(6)),
                                g = "&maptype=" + google.maps.MapTypeId[b.options.mapType],
                                h = "&markers=",
                                i = "https://maps.googleapis.com/maps/api/staticmap?sensor=false" + c + d;
                            if (1 == b.options.locations.length) h += String(parseFloat(b.options.locations[0].latitude).toFixed(6)) + "," + String(parseFloat(b.options.locations[0].longitude).toFixed(6)), i += e + f + g + h;
                            else {
                                var j = new Array;
                                a.each(b.options.locations, function(a, b) {
                                    j.push(String(parseFloat(b.latitude).toFixed(6)) + "," + String(parseFloat(b.longitude).toFixed(6)))
                                }), h += j.join("|"), i += h + g
                            }
                            b.locationMap().show().html('<img src="' + i + '" />'), b.busy(!1)
                        } else null === b.options.fitBounds && (b.options.fitBounds = 1 == b.options.locations.length ? !1 : !0), b.options.disableMapsUI = Boolean(b.options.disableMapsUI), b.locations = new Array, a.each(b.options.locations, function(a, c) {
                            "null" != c.latitude && "null" != c.longitude && b.locations.push(new google.maps.LatLng(c.latitude, c.longitude))
                        }), b.locations.length > 0 && b.renderMap(), b.busy(!1)
                    },
                    busy: function(a) {
                        b.locationMap().toggleClass("loading", a)
                    },
                    renderMap: function() {
                        b.busy(!0), b.locationMap().show();
                        var a;
                        a = b.options.center ? new google.maps.LatLng(center.latitude, center.longitude) : b.locations[0], b.map = new google.maps.Map(b.locationMap()[0], {
                            zoom: parseInt(b.options.zoom),
                            minZoom: parseInt(b.options.minZoom),
                            maxZoom: parseInt(b.options.maxZoom),
                            center: a,
                            mapTypeId: google.maps.MapTypeId[b.options.mapType],
                            disableDefaultUI: b.options.disableMapsUI
                        }), google.maps.event.addListener(b.map, "tilesloaded", function() {
                            0 == b.mapLoaded && (b.mapLoaded = !0, b.loadLocations())
                        })
                    },
                    loadLocations: function() {
                        b.bounds = new google.maps.LatLngBounds, b.infoWindow = new Array;
                        var c = function() {
                            a.each(b.locations, function(a, c) {
                                b.bounds.extend(c);
                                var d = function() {
                                    b.addMarker(c, b.options.locations[a])
                                };
                                setTimeout(d, 100 * (a + 1))
                            }), b.options.fitBounds && b.map.fitBounds(b.bounds)
                        };
                        setTimeout(c, 500)
                    },
                    addMarker: function(a, c) {
                        if (a) {
                            var d = new google.maps.Marker({
                                position: a,
                                map: b.map
                            });
                            d.setAnimation(google.maps.Animation.DROP), b.addInfoWindow(d, c)
                        }
                    },
                    addInfoWindow: function(c, d) {
                        var e = d.content;
                        e || (e = d.address);
                        var f = new google.maps.InfoWindow;
                        f.setContent(e), b.infoWindow.push(f), b.options.locations.length > 1 ? google.maps.event.addListener(c, "click", function() {
                            a.each(b.infoWindow, function(a, b) {
                                b.close()
                            }), f.open(b.map, c)
                        }) : (google.maps.event.addListener(c, "click", function() {
                            f.open(b.map, c)
                        }), f.open(b.map, c)), d.ratingid && google.maps.event.addListener(f, "domready", function() {
                            a.each(d.ratingid, function(b, c) {
                                eblog.ratings.setup("ebpostmap_" + c + "-ratings", !0, "entry"), a("#ebpostmap_" + c + "-ratings").removeClass("ui-state-disabled"), a("#ebpostmap_" + c + "-ratings-form").find(".blog-rating-text").hide(), a("#ebpostmap_" + c + "-ratings .ratings-value").hide()
                            })
                        })
                    },
                    "{removeLocation} click": function() {
                        disjax.loadingDialog(), disjax.load("location", "confirmRemoveLocation", b.element.data("id").toString())
                    }
                }
            }), b.resolve()
        })
    }), EasyDiscuss.module("newpost", function(a) {
        var b = this;
        EasyDiscuss.Controller("DiscussNewPost", {
            defaultOptions: {
                "{pollsCheckbox}": ".pollsChkbox",
                "{radioButton}": ".radioBtn",
                "{chkboxButton}": ".chkboxBtn"
            }
        }, function(b) {
            return {
                init: function() {},
                "{pollsCheckbox} click": function() {
                    b.show()
                },
                "{chkboxButton} click": function(a) {
                    var c = a.attr("id");
                    b.vote(c)
                },
                show: function() {
                    a("#discuss-polls").toggle(), a("#discuss-multiple-polls").toggle(), a("#discuss-multiple-polls-title").toggle()
                },
                vote: function(a) {
                    EasyDiscuss.ajax("site.views.polls.vote", {
                        args: [a]
                    }, {
                        success: function() {}
                    })
                }
            }
        }), b.resolve()
    }), EasyDiscuss.module("polls", function() {
        var b = this;
        EasyDiscuss.require().view("field.form.polls.answer").done(function(a) {
            EasyDiscuss.Controller("Polls.Answers", {
                defaultOptions: {
                    pollId: null,
                    "{voteCount}": ".voteCount",
                    "{votersAvatar}": ".votersAvatar",
                    "{votePoll}": ".votePoll",
                    "{unvotePoll}": ".unvotePoll",
                    "{pollGraph}": ".pollGraph"
                }
            }, function(b) {
                return {
                    init: function() {
                        b.options.pollId = b.element.data("id")
                    },
                    "{voteCount} click": function() {
                        disjax.load("polls", "getvoters", b.options.pollId.toString())
                    },
                    "{votePoll} change": function() {
                        EasyDiscuss.ajax("site.views.polls.vote", {
                            id: b.options.pollId
                        }).done(function(b) {
                            a(b).each(function(b, c) {
                                a(".pollAnswerItem-" + c.id).find(".pollPercentage").html(c.percentage), a(".pollAnswerItem-" + c.id).find(".pollGraph").css("width", c.percentage + "%"), a(".pollAnswerItem-" + c.id).find(".voteCount").html(c.votes), a(".pollAnswerItem-" + c.id).find(".votersList").html(c.voters)
                            })
                        })
                    }
                }
            }), EasyDiscuss.Controller("Polls.Form", {
                defaultOptions: {
                    "{pollAnswers}": ".pollAnswers",
                    "{pollAnswersList}": ".pollAnswersList",
                    "{insertPollAnswer}": ".insertPollAnswer",
                    "{pollCheckbox}": ".pollCheckbox",
                    "{pollForm}": ".pollForm",
                    "{deletedPolls}": "#pollsremove",
                    view: {
                        answerItem: "field.form.polls.answer"
                    }
                }
            }, function(a) {
                return {
                    init: function() {
                        a.pollAnswers().implement(EasyDiscuss.Controller.Polls.Form.Answer, {
                            pollController: a
                        }), 0 == a.pollAnswers().length && a.insertNewPollAnswer()
                    },
                    resetPollForm: function() {
                        a.pollAnswers(":not(:first)").remove(), a.pollForm().hide(), a.pollCheckbox().prop("checked", !1)
                    },
                    insertNewPollAnswer: function(b) {
                        a.view.answerItem({
                            showRemove: a.pollAnswers().length > 0
                        }).implement(EasyDiscuss.Controller.Polls.Form.Answer, {
                            pollController: a,
                            shiftFocus: b
                        }).appendTo(a.pollAnswersList())
                    },
                    updateDeletedPoll: function(b) {
                        var c = a.deletedPolls().val();
                        "" != c && (c += ","), a.deletedPolls().val(c + b)
                    },
                    showPollForm: function() {
                        a.pollForm().show()
                    },
                    "{insertPollAnswer} click": function() {
                        a.insertNewPollAnswer(!0)
                    },
                    "{pollCheckbox} change": function() {
                        a.pollForm().toggle()
                    }
                }
            }), EasyDiscuss.Controller("Polls.Form.Answer", {
                defaultOptions: {
                    "{answerText}": ".answerText",
                    "{removeItem}": ".removeItem",
                    pollController: null,
                    shiftFocus: !1
                }
            }, function(b) {
                return {
                    init: function() {
                        b.options.shiftFocus && b.answerText().focus()
                    },
                    "{removeItem} click": function(c) {
                        var d = a(c).data("pollid");
                        null != d && b.options.pollController.updateDeletedPoll(d), b.element.remove()
                    },
                    "{answerText} keyup": function(c, d) {
                        d.keyCode == a.ui.keyCode.ENTER && b.options.pollController.insertNewPollAnswer(!0)
                    }
                }
            }), b.resolve()
        })
    }), EasyDiscuss.module("posts", function(a) {
        var b = this;
        EasyDiscuss.require().view("comment.form", "post.notification").script("comments", "location").language("COM_EASYDISCUSS_NOTIFICATION_NEW_REPLIES", "COM_EASYDISCUSS_NOTIFICATION_NEW_COMMENTS", "COM_EASYDISCUSS_PLEASE_SELECT_CATEGORY_DESC", "COM_EASYDISCUSS_POST_TITLE_CANNOT_EMPTY", "COM_EASYDISCUSS_POST_CONTENT_IS_EMPTY").done(function() {
            EasyDiscuss.Controller("Post.Ask", {
                defaultOptions: {
                    "{submitDiscussion}": ".submitDiscussion"
                }
            }, function() {
                return {
                    init: function() {},
                    "{submitDiscussion} click": function() {
                        if (!a(this).attr("disabled")) {
                            var b = "",
                                c = !1,
                                d = a(".discuss-form *[name=category_id]").val();
                            if (0 == d || 0 == d.length) {
                                var e = a.language("COM_EASYDISCUSS_PLEASE_SELECT_CATEGORY_DESC");
                                b += "<li>" + e + "</li>", c = !0
                            }
                            if ("" == a("#ez-title").val() && "" == a("#post-topic-title").val()) {
                                var e = a.language("COM_EASYDISCUSS_POST_TITLE_CANNOT_EMPTY");
                                b += "<li>" + e + "</li>", c = !0
                            }
                            var f = discuss.getContent();
                            if ("" == f) {
                                var e = a.language("COM_EASYDISCUSS_POST_CONTENT_IS_EMPTY");
                                b += "<li>" + e + "</li>", c = !0
                            }
                            return c ? (b = '<div class="alert alert-error"><ul class="unstyled">' + b + "</ul></div>", a(".ask-notification").html(""), a(".ask-notification").append(b), a(document).scrollTop(a(".ask-notification").offset().top), !1) : (a(this).prop("disabled", !0), a("#dc_submit").submit(), !1)
                        }
                    }
                }
            }), EasyDiscuss.Controller("Post.Moderator", {
                defaultOptions: {
                    "{moderatorBtn}": ".moderatorBtn",
                    "{postModeratorList}": ".post-moderator-list",
                    "{moderatorList}": ".moderatorList"
                }
            }, function(b) {
                return {
                    init: function() {
                        b.moderatorBtn().parent(".dropdown_").hasClass("open") && b.loadModeratorList()
                    },
                    loadModeratorList: function() {
                        if (length = b.postModeratorList().size(), !(length > 0)) {
                            b.moderatorList().empty();
                            var a = '<li style="height:10px;"><div class="discuss-loader" style="margin-left:15px;"></div></li>';
                            b.moderatorList().append(a), EasyDiscuss.ajax("site.views.post.getModerators", {
                                id: b.element.data("id"),
                                category_id: b.element.data("category")
                            }, {
                                success: function(a) {
                                    b.moderatorList().empty(), b.moderatorList().append(a)
                                },
                                fail: function() {}
                            })
                        }
                    },
                    "{moderatorBtn} click": function() {
                        b.loadModeratorList()
                    },
                    "{postModeratorList} click": function(b) {
                        var c = a(b).data("userid"),
                            d = a(b).data("postid");
                        EasyDiscuss.ajax("site.views.post.ajaxModeratorAssign", {
                            userId: c,
                            postId: d
                        }, {
                            success: function(b) {
                                a(".discuss-post-assign").html(b)
                            },
                            fail: function(b) {
                                a(".discuss-post-assign").html(b)
                            }
                        })
                    }
                }
            }), EasyDiscuss.Controller("Post.Question", {
                defaultOptions: {
                    id: null,
                    view: {
                        commentForm: "comment.form"
                    },
                    "{addCommentButton}": ".addComment",
                    "{commentFormContainer}": ".commentFormContainer",
                    "{commentNotification}": ".commentNotification",
                    "{commentsList}": ".commentsList",
                    "{commentLoadMore}": ".commentLoadMore",
                    "{postLocation}": ".postLocation",
                    "{locationData}": ".locationData"
                }
            }, function(b) {
                return {
                    init: function() {
                        if (b.commentsList().implement(EasyDiscuss.Controller.Comment.List), b.commentLoadMore().length > 0 && b.commentLoadMore().implement(EasyDiscuss.Controller.Comment.LoadMore, {
                                controller: {
                                    list: b.commentsList().controller()
                                }
                            }), b.options.id = b.element.data("id"), b.locationData().length > 0) {
                            var c = a.parseJSON(b.locationData().val());
                            b.postLocation().implement("EasyDiscuss.Controller.Location.Map", c)
                        }
                    },
                    "{addCommentButton} click": function() {
                        var c = b.view.commentForm({
                            id: b.options.id
                        });
                        a(c).implement(EasyDiscuss.Controller.Comment.Form, {
                            container: b.commentFormContainer(),
                            notification: b.commentNotification(),
                            commentsList: b.commentsList(),
                            loadMore: b.commentLoadMore(),
                            termsCondition: b.options.termsCondition
                        }), b.commentFormContainer().html(c).toggle()
                    }
                }
            }), EasyDiscuss.Controller("PostItems", {
                defaultOptions: {
                    activefiltertype: null,
                    "{allPostsFilter}": ".allPostsFilter",
                    "{newPostsFilter}": ".newPostsFilter",
                    "{unResolvedFilter}": ".unResolvedFilter",
                    "{resolvedFilter}": ".resolvedFilter",
                    "{unAnsweredFilter}": ".unAnsweredFilter",
                    "{sortLatest}": ".sortLatest",
                    "{sortPopular}": ".sortPopular",
                    "{ulList}": "ul.normal",
                    "{loader}": ".loader",
                    "{pagination}": ".dc-pagination",
                    "{filterTab}": "[data-filter-tab]",
                    "{sortTab}": "[data-sort-tab]"
                }
            }, function(a) {
                return {
                    init: function() {},
                    doSort: function(b) {
                        a.sortTab().removeClass("active").filterBy("sortType", b).addClass("active"), filterType = a.options.activefiltertype, a.doFilter(filterType, b)
                    },
                    doFilter: function(b, c) {
                        a.filterTab().removeClass("active").filterBy("filterType", b).addClass("active"), a.options.activefiltertype = b, void 0 === c && (c = "latest"), a.loader().show(), a.ulList().children("li").remove(), EasyDiscuss.ajax("site.views.index.filter", {
                            filter: b,
                            sort: c,
                            id: a.element.data("id"),
                            view: a.element.data("view")
                        }).done(function(b, c) {
                            a.loader().hide(), a.ulList().append(b), a.pagination().html(c)
                        }).fail(function() {
                            a.loader().hide()
                        }).always(function() {})
                    },
                    "{filterTab} click": function(b) {
                        var c = b.data("filterType");
                        a.doFilter(c)
                    },
                    "{sortTab} click": function(b) {
                        var c = b.data("sortType");
                        a.doSort(c)
                    }
                }
            }), EasyDiscuss.Controller("Post.CheckNewReplyComment", {
                defaultOptions: {
                    id: null,
                    interval: 10,
                    wrapper: {
                        discuss: "#discuss-wrapper",
                        notificationContainer: ".notificationContainer",
                        notification: ".discussNotification",
                        replyContainer: ".replyContainer",
                        commentContainer: ".commentContainer",
                        replyCount: ".replyCount",
                        commentCount: ".commentCount",
                        replyText: ".replyText",
                        commentText: ".commentText"
                    },
                    discusswrapper: "#discuss-wrapper",
                    notificationwrapper: ".discussNotification",
                    view: {
                        postNotification: "post.notification"
                    }
                }
            }, function(b) {
                return {
                    init: function() {
                        b.options.id = b.element.data("id"), b.getCount().done(function(a, c) {
                            EasyDiscuss.repliesCount = a, EasyDiscuss.commentsCount = c, b.autoCheck()
                        }), a(b.options.wrapper.discuss).append('<div class="notifications top-left notificationContainer"></div>')
                    },
                    autoCheck: function() {
                        b.check = setTimeout(function() {
                            b.checkCount().done(function() {
                                b.autoCheck()
                            })
                        }, 1e3 * b.options.interval)
                    },
                    stopCheck: function() {
                        clearTimeout(b.check)
                    },
                    getCount: function() {
                        return EasyDiscuss.ajax("site.views.post.getUpdateCount", {
                            id: b.options.id
                        })
                    },
                    checkCount: function() {
                        var c = a.Deferred(),
                            d = !1,
                            e = !1;
                        return b.getCount().done(function(a, f) {
                            d = a - EasyDiscuss.repliesCount, e = f - EasyDiscuss.commentsCount, b.newRepliesCount = a, b.newCommentsCount = f, (d > 0 || e > 0) && b.notify(d, e), c.resolve()
                        }), c
                    },
                    notify: function(c, d) {
                        var e = a(b.options.wrapper.notification);
                        if (e.length < 1) {
                            var f = b.view.postNotification({
                                newReply: c,
                                newComment: d
                            });
                            a(b.options.wrapper.notificationContainer).notify({
                                message: {
                                    html: f.toHTML()
                                },
                                fadeOut: {
                                    enabled: !1
                                },
                                onClosed: function() {
                                    EasyDiscuss.repliesCount = b.newRepliesCount, EasyDiscuss.commentsCount = b.newCommentsCount
                                }
                            }).show()
                        } else {
                            var g = e.find(b.options.wrapper.replyContainer),
                                h = e.find(b.options.wrapper.commentContainer),
                                i = e.find(b.options.wrapper.replyCount),
                                j = e.find(b.options.wrapper.commentCount),
                                k = e.find(b.options.wrapper.replyText),
                                l = e.find(b.options.wrapper.commentText);
                            c > 0 && g.length > 0 && i.text(c) && g.is(":hidden") && g.show(), d > 0 && h.length > 0 && j.text(d) && h.is(":hidden") && h.show(), c > 1 && k.text(a.language("COM_EASYDISCUSS_NOTIFICATION_NEW_REPLIES")), d > 1 && l.text(a.language("COM_EASYDISCUSS_NOTIFICATION_NEW_COMMENTS"))
                        }
                    }
                }
            }), b.resolve()
        })
    }), EasyDiscuss.module("prism", function() {
        var b = this;
        ! function() {
            var a = /\blang(?:uage)?-(?!\*)(\w+)\b/i,
                b = self.Prism = {
                    util: {
                        type: function(a) {
                            return Object.prototype.toString.call(a).match(/\[object (\w+)\]/)[1]
                        },
                        clone: function(a) {
                            var c = b.util.type(a);
                            switch (c) {
                                case "Object":
                                    var d = {};
                                    for (var e in a) a.hasOwnProperty(e) && (d[e] = b.util.clone(a[e]));
                                    return d;
                                case "Array":
                                    return a.slice()
                            }
                            return a
                        }
                    },
                    languages: {
                        extend: function(a, c) {
                            var d = b.util.clone(b.languages[a]);
                            for (var e in c) d[e] = c[e];
                            return d
                        },
                        insertBefore: function(a, c, d, e) {
                            e = e || b.languages;
                            var f = e[a],
                                g = {};
                            for (var h in f)
                                if (f.hasOwnProperty(h)) {
                                    if (h == c)
                                        for (var i in d) d.hasOwnProperty(i) && (g[i] = d[i]);
                                    g[h] = f[h]
                                }
                            return e[a] = g
                        },
                        DFS: function(a, c) {
                            for (var d in a) c.call(a, d, a[d]), "Object" === b.util.type(a) && b.languages.DFS(a[d], c)
                        }
                    },
                    highlightAll: function(a, c) {
                        for (var f, d = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'), e = 0; f = d[e++];) b.highlightElement(f, a === !0, c)
                    },
                    highlightElement: function(d, e, f) {
                        for (var g, h, i = d; i && !a.test(i.className);) i = i.parentNode;
                        if (i && (g = (i.className.match(a) || [, ""])[1], h = b.languages[g]), h) {
                            d.className = d.className.replace(a, "").replace(/\s+/g, " ") + " language-" + g, i = d.parentNode, /pre/i.test(i.nodeName) && (i.className = i.className.replace(a, "").replace(/\s+/g, " ") + " language-" + g);
                            var j = d.textContent;
                            if (j) {
                                j = j.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
                                var k = {
                                    element: d,
                                    language: g,
                                    grammar: h,
                                    code: j
                                };
                                if (b.hooks.run("before-highlight", k), e && self.Worker) {
                                    var l = new Worker(b.filename);
                                    l.onmessage = function(a) {
                                        k.highlightedCode = c.stringify(JSON.parse(a.data), g), b.hooks.run("before-insert", k), k.element.innerHTML = k.highlightedCode, f && f.call(k.element), b.hooks.run("after-highlight", k)
                                    }, l.postMessage(JSON.stringify({
                                        language: k.language,
                                        code: k.code
                                    }))
                                } else k.highlightedCode = b.highlight(k.code, k.grammar, k.language), b.hooks.run("before-insert", k), k.element.innerHTML = k.highlightedCode, f && f.call(d), b.hooks.run("after-highlight", k)
                            }
                        }
                    },
                    highlight: function(a, d, e) {
                        return c.stringify(b.tokenize(a, d), e)
                    },
                    tokenize: function(a, c) {
                        var e = b.Token,
                            f = [a],
                            g = c.rest;
                        if (g) {
                            for (var h in g) c[h] = g[h];
                            delete c.rest
                        }
                        a: for (var h in c)
                            if (c.hasOwnProperty(h) && c[h]) {
                                var i = c[h],
                                    j = i.inside,
                                    k = !!i.lookbehind,
                                    l = 0;
                                i = i.pattern || i;
                                for (var m = 0; m < f.length; m++) {
                                    var n = f[m];
                                    if (f.length > a.length) break a;
                                    if (!(n instanceof e)) {
                                        i.lastIndex = 0;
                                        var o = i.exec(n);
                                        if (o) {
                                            k && (l = o[1].length);
                                            var p = o.index - 1 + l,
                                                o = o[0].slice(l),
                                                q = o.length,
                                                r = p + q,
                                                s = n.slice(0, p + 1),
                                                t = n.slice(r + 1),
                                                u = [m, 1];
                                            s && u.push(s);
                                            var v = new e(h, j ? b.tokenize(o, j) : o);
                                            u.push(v), t && u.push(t), Array.prototype.splice.apply(f, u)
                                        }
                                    }
                                }
                            }
                        return f
                    },
                    hooks: {
                        all: {},
                        add: function(a, c) {
                            var d = b.hooks.all;
                            d[a] = d[a] || [], d[a].push(c)
                        },
                        run: function(a, c) {
                            var d = b.hooks.all[a];
                            if (d && d.length)
                                for (var f, e = 0; f = d[e++];) f(c)
                        }
                    }
                },
                c = b.Token = function(a, b) {
                    this.type = a, this.content = b
                };
            if (c.stringify = function(a, d, e) {
                    if ("string" == typeof a) return a;
                    if ("[object Array]" == Object.prototype.toString.call(a)) return a.map(function(b) {
                        return c.stringify(b, d, a)
                    }).join("");
                    var f = {
                        type: a.type,
                        content: c.stringify(a.content, d, e),
                        tag: "span",
                        classes: ["token", a.type],
                        attributes: {},
                        language: d,
                        parent: e
                    };
                    "comment" == f.type && (f.attributes.spellcheck = "true"), b.hooks.run("wrap", f);
                    var g = "";
                    for (var h in f.attributes) g += h + '="' + (f.attributes[h] || "") + '"';
                    return "<" + f.tag + ' class="' + f.classes.join(" ") + '" ' + g + ">" + f.content + "</" + f.tag + ">"
                }, !self.document) return self.addEventListener("message", function(a) {
                var c = JSON.parse(a.data),
                    d = c.language,
                    e = c.code;
                self.postMessage(JSON.stringify(b.tokenize(e, b.languages[d]))), self.close()
            }, !1), void 0;
            var d = document.getElementsByTagName("script");
            d = d[d.length - 1], d && (b.filename = d.src, document.addEventListener && !d.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", b.highlightAll))
        }(), Prism.languages.markup = {
            comment: /&lt;!--[\w\W]*?-->/g,
            prolog: /&lt;\?.+?\?>/,
            doctype: /&lt;!DOCTYPE.+?>/,
            cdata: /&lt;!\[CDATA\[[\w\W]*?]]>/i,
            tag: {
                pattern: /&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi,
                inside: {
                    tag: {
                        pattern: /^&lt;\/?[\w:-]+/i,
                        inside: {
                            punctuation: /^&lt;\/?/,
                            namespace: /^[\w-]+?:/
                        }
                    },
                    "attr-value": {
                        pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,
                        inside: {
                            punctuation: /=|>|"/g
                        }
                    },
                    punctuation: /\/?>/g,
                    "attr-name": {
                        pattern: /[\w:-]+/g,
                        inside: {
                            namespace: /^[\w-]+?:/
                        }
                    }
                }
            },
            entity: /&amp;#?[\da-z]{1,8};/gi
        }, Prism.hooks.add("wrap", function(a) {
            "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"))
        }), Prism.languages.css = {
            comment: /\/\*[\w\W]*?\*\//g,
            atrule: {
                pattern: /@[\w-]+?.*?(;|(?=\s*{))/gi,
                inside: {
                    punctuation: /[;:]/g
                }
            },
            url: /url\((["']?).*?\1\)/gi,
            selector: /[^\{\}\s][^\{\};]*(?=\s*\{)/g,
            property: /(\b|\B)[\w-]+(?=\s*:)/gi,
            string: /("|')(\\?.)*?\1/g,
            important: /\B!important\b/gi,
            ignore: /&(lt|gt|amp);/gi,
            punctuation: /[\{\};:]/g
        }, Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
            style: {
                pattern: /(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/gi,
                inside: {
                    tag: {
                        pattern: /(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/gi,
                        inside: Prism.languages.markup.tag.inside
                    },
                    rest: Prism.languages.css
                }
            }
        }), Prism.languages.css.selector = {
            pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/g,
            inside: {
                "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/g,
                "pseudo-class": /:[-\w]+(?:\(.*\))?/g,
                "class": /\.[-:\.\w]+/g,
                id: /#[-:\.\w]+/g
            }
        }, Prism.languages.insertBefore("css", "ignore", {
            hexcode: /#[\da-f]{3,6}/gi,
            entity: /\\[\da-f]{1,8}/gi,
            number: /[\d%\.]+/g,
            "function": /(attr|calc|cross-fade|cycle|element|hsla?|image|lang|linear-gradient|matrix3d|matrix|perspective|radial-gradient|repeating-linear-gradient|repeating-radial-gradient|rgba?|rotatex|rotatey|rotatez|rotate3d|rotate|scalex|scaley|scalez|scale3d|scale|skewx|skewy|skew|steps|translatex|translatey|translatez|translate3d|translate|url|var)/gi
        }), Prism.languages.clike = {
            comment: {
                pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,
                lookbehind: !0
            },
            string: /("|')(\\?.)*?\1/g,
            "class-name": {
                pattern: /((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi,
                lookbehind: !0,
                inside: {
                    punctuation: /(\.|\\)/
                }
            },
            keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,
            "boolean": /\b(true|false)\b/g,
            "function": {
                pattern: /[a-z0-9_]+\(/gi,
                inside: {
                    punctuation: /\(/
                }
            },
            number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
            operator: /[-+]{1,2}|!|&lt;=?|>=?|={1,3}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,
            ignore: /&(lt|gt|amp);/gi,
            punctuation: /[{}[\];(),.:]/g
        }, Prism.languages.javascript = Prism.languages.extend("clike", {
            keyword: /\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|throw|catch|finally|null|break|continue)\b/g,
            number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g
        }), Prism.languages.insertBefore("javascript", "keyword", {
            regex: {
                pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
                lookbehind: !0
            }
        }), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
            script: {
                pattern: /(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/gi,
                inside: {
                    tag: {
                        pattern: /(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/gi,
                        inside: Prism.languages.markup.tag.inside
                    },
                    rest: Prism.languages.javascript
                }
            }
        }), Prism.languages.java = Prism.languages.extend("clike", {
            keyword: /\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/g,
            number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+[e]?[\d]*[df]\b|\W\d*\.?\d+\b/gi,
            operator: {
                pattern: /([^\.]|^)([-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|%|\^|(&lt;){2}|($gt;){2,3}|:|~)/g,
                lookbehind: !0
            }
        }), Prism.languages.php = Prism.languages.extend("clike", {
            keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|extends|private|protected|parent|static|throw|null|echo|print|trait|namespace|use|final|yield|goto|instanceof|finally|try|catch)\b/gi,
            constant: /\b[A-Z0-9_]{2,}\b/g
        }), Prism.languages.insertBefore("php", "keyword", {
            delimiter: /(\?>|&lt;\?php|&lt;\?)/gi,
            variable: /(\$\w+)\b/gi,
            "package": {
                pattern: /(\\|namespace\s+|use\s+)[\w\\]+/g,
                lookbehind: !0,
                inside: {
                    punctuation: /\\/
                }
            }
        }), Prism.languages.insertBefore("php", "operator", {
            property: {
                pattern: /(->)[\w]+/g,
                lookbehind: !0
            }
        }), Prism.languages.markup && (Prism.hooks.add("before-highlight", function(a) {
            "php" === a.language && (a.tokenStack = [], a.code = a.code.replace(/(?:&lt;\?php|&lt;\?|<\?php|<\?)[\w\W]*?(?:\?&gt;|\?>)/gi, function(b) {
                return a.tokenStack.push(b), "{{{PHP" + a.tokenStack.length + "}}}"
            }))
        }), Prism.hooks.add("after-highlight", function(a) {
            if ("php" === a.language) {
                for (var c, b = 0; c = a.tokenStack[b]; b++) a.highlightedCode = a.highlightedCode.replace("{{{PHP" + (b + 1) + "}}}", Prism.highlight(c, a.grammar, "php"));
                a.element.innerHTML = a.highlightedCode
            }
        }), Prism.hooks.add("wrap", function(a) {
            "php" === a.language && "markup" === a.type && (a.content = a.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, '<span class="token php">$1</span>'))
        }), Prism.languages.insertBefore("php", "comment", {
            markup: {
                pattern: /(&lt;|<)[^?]\/?(.*?)(>|&gt;)/g,
                inside: Prism.languages.markup
            },
            php: /\{\{\{PHP[0-9]+\}\}\}/g
        })), Prism.languages.insertBefore("php", "variable", {
            "this": /\$this/g,
            global: /\$_?(GLOBALS|SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/g,
            scope: {
                pattern: /\b[\w\\]+::/g,
                inside: {
                    keyword: /(static|self|parent)/,
                    punctuation: /(::|\\)/
                }
            }
        }), Prism.languages.coffeescript = Prism.languages.extend("javascript", {
            "block-comment": /([#]{3}\s*\r?\n(.*\s*\r*\n*)\s*?\r?\n[#]{3})/g,
            comment: /(\s|^)([#]{1}[^#^\r^\n]{2,}?(\r?\n|$))/g,
            keyword: /\b(this|window|delete|class|extends|namespace|extend|ar|let|if|else|while|do|for|each|of|return|in|instanceof|new|with|typeof|try|catch|finally|null|undefined|break|continue)\b/g
        }), Prism.languages.insertBefore("coffeescript", "keyword", {
            "function": {
                pattern: /[a-z|A-z]+\s*[:|=]\s*(\([.|a-z\s|,|:|{|}|\"|\'|=]*\))?\s*-&gt;/gi,
                inside: {
                    "function-name": /[_?a-z-|A-Z-]+(\s*[:|=])| @[_?$?a-z-|A-Z-]+(\s*)| /g,
                    operator: /[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g
                }
            },
            "attr-name": /[_?a-z-|A-Z-]+(\s*:)| @[_?$?a-z-|A-Z-]+(\s*)| /g
        }), Prism.languages.scss = Prism.languages.extend("css", {
            comment: {
                pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,
                lookbehind: !0
            },
            atrule: /@[\w-]+(?=\s+(\(|\{|;))/gi,
            url: /([-a-z]+-)*url(?=\()/gi,
            selector: /([^@;\{\}\(\)]?([^@;\{\}\(\)]|&amp;|\#\{\$[-_\w]+\})+)(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/gm
        }), Prism.languages.insertBefore("scss", "atrule", {
            keyword: /@(if|else if|else|for|each|while|import|extend|debug|warn|mixin|include|function|return)|(?=@for\s+\$[-_\w]+\s)+from/i
        }), Prism.languages.insertBefore("scss", "property", {
            variable: /((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i
        }), Prism.languages.insertBefore("scss", "ignore", {
            placeholder: /%[-_\w]+/i,
            statement: /\B!(default|optional)\b/gi,
            "boolean": /\b(true|false)\b/g,
            "null": /\b(null)\b/g,
            operator: /\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|\%)\s+/g
        }), Prism.languages.bash = Prism.languages.extend("clike", {
            comment: {
                pattern: /(^|[^"{\\])(#.*?(\r?\n|$))/g,
                lookbehind: !0
            },
            string: {
                pattern: /("|')(\\?[\s\S])*?\1/g,
                inside: {
                    property: /\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^\}]+\})/g
                }
            },
            keyword: /\b(if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)\b/g
        }), Prism.languages.insertBefore("bash", "keyword", {
            property: /\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^}]+\})/g
        }), Prism.languages.insertBefore("bash", "comment", {
            important: /(^#!\s*\/bin\/bash)|(^#!\s*\/bin\/sh)/g
        }), Prism.languages.c = Prism.languages.extend("clike", {
            keyword: /\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/g,
            operator: /[-+]{1,2}|!=?|&lt;{1,2}=?|&gt;{1,2}=?|\-&gt;|={1,2}|\^|~|%|(&amp;){1,2}|\|?\||\?|\*|\//g
        }), Prism.languages.insertBefore("c", "keyword", {
            property: /#\s*[a-zA-Z]+/g
        }), Prism.languages.cpp = Prism.languages.extend("c", {
            keyword: /\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|delete\[\]|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|new\[\]|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/g,
            operator: /[-+]{1,2}|!=?|&lt;{1,2}=?|&gt;{1,2}=?|\-&gt;|:{1,2}|={1,2}|\^|~|%|(&amp;){1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/g
        }), Prism.languages.python = {
            comment: {
                pattern: /(^|[^\\])#.*?(\r?\n|$)/g,
                lookbehind: !0
            },
            string: /("|')(\\?.)*?\1/g,
            keyword: /\b(as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/g,
            "boolean": /\b(True|False)\b/g,
            number: /\b-?(0x)?\d*\.?[\da-f]+\b/g,
            operator: /[-+]{1,2}|=?&lt;|=?&gt;|!|={1,2}|(&){1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|~|\^|%|\b(or|and|not)\b/g,
            ignore: /&(lt|gt|amp);/gi,
            punctuation: /[{}[\];(),.:]/g
        }, Prism.languages.sql = {
            comment: {
                pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|((--)|(\/\/)).*?(\r?\n|$))/g,
                lookbehind: !0
            },
            string: /("|')(\\?.)*?\1/g,
            keyword: /\b(ACTION|ADD|AFTER|ALGORITHM|ALTER|ANALYZE|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADE|CASCADED|CASE|CHAIN|CHAR VARYING|CHARACTER VARYING|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATA|DATABASE|DATABASES|DATETIME|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DOUBLE PRECISION|DROP|DUMMY|DUMP|DUMPFILE|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE|ESCAPED BY|EXCEPT|EXEC|EXECUTE|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR|FOR EACH ROW|FORCE|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GEOMETRY|GEOMETRYCOLLECTION|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY|IDENTITY_INSERT|IDENTITYCOL|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEY|KEYS|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONGBLOB|LONGTEXT|MATCH|MATCHED|MEDIUMBLOB|MEDIUMINT|MEDIUMTEXT|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTILINESTRING|MULTIPOINT|MULTIPOLYGON|NATIONAL|NATIONAL CHAR VARYING|NATIONAL CHARACTER|NATIONAL CHARACTER VARYING|NATIONAL VARCHAR|NATURAL|NCHAR|NCHAR VARCHAR|NEXT|NO|NO SQL|NOCHECK|NOCYCLE|NONCLUSTERED|NULLIF|NUMERIC|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPTIMIZE|OPTION|OPTIONALLY|ORDER|OUT|OUTER|OUTFILE|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC|PROCEDURE|PUBLIC|PURGE|QUICK|RAISERROR|READ|READS SQL DATA|READTEXT|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURN|RETURNS|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROWCOUNT|ROWGUIDCOL|ROWS?|RTREE|RULE|SAVE|SAVEPOINT|SCHEMA|SELECT|SERIAL|SERIALIZABLE|SESSION|SESSION_USER|SET|SETUSER|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START|STARTING BY|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLE|TABLES|TABLESPACE|TEMPORARY|TEMPTABLE|TERMINATED BY|TEXT|TEXTSIZE|THEN|TIMESTAMP|TINYBLOB|TINYINT|TINYTEXT|TO|TOP|TRAN|TRANSACTION|TRANSACTIONS|TRIGGER|TRUNCATE|TSEQUAL|TYPE|TYPES|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNPIVOT|UPDATE|UPDATETEXT|USAGE|USE|USER|USING|VALUE|VALUES|VARBINARY|VARCHAR|VARCHARACTER|VARYING|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH|WITH ROLLUP|WITHIN|WORK|WRITE|WRITETEXT)\b/gi,
            "boolean": /\b(TRUE|FALSE|NULL)\b/gi,
            number: /\b-?(0x)?\d*\.?[\da-f]+\b/g,
            operator: /\b(ALL|AND|ANY|BETWEEN|EXISTS|IN|LIKE|NOT|OR|IS|UNIQUE|CHARACTER SET|COLLATE|DIV|OFFSET|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b|[-+]{1}|!|=?&lt;|=?&gt;|={1}|(&amp;){1,2}|\|?\||\?|\*|\//gi,
            ignore: /&(lt|gt|amp);/gi,
            punctuation: /[;[\]()`,.]/g
        }, Prism.languages.groovy = Prism.languages.extend("clike", {
            keyword: /\b(as|def|in|abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/g,
            string: /("""|''')[\W\w]*?\1|("|'|\/)[\W\w]*?\2/g,
            number: /\b0b[01_]+\b|\b0x[\da-f_]+(\.[\da-f_p\-]+)?\b|\b[\d_]+(\.[\d_]+[e]?[\d]*)?[glidf]\b|[\d_]+(\.[\d_]+)?\b/gi,
            operator: /={0,2}~|\?\.|\*?\.@|\.&amp;|\.(?=\w)|\.{2}(&lt;)?(?=\w)|-&gt;|\?:|[-+]{1,2}|!|&lt;=&gt;|(&gt;){1,3}|(&lt;){1,2}|={1,2}|(&amp;){1,2}|\|{1,2}|\?|\*{1,2}|\/|\^|%/g,
            punctuation: /\.+|[{}[\];(),:$]/g,
            annotation: /@\w+/
        }), Prism.languages.insertBefore("groovy", "punctuation", {
            "spock-block": /\b(setup|given|when|then|and|cleanup|expect|where):/g
        }), Prism.hooks.add("wrap", function(a) {
            if ("groovy" === a.language && "string" === a.type) {
                var b = a.content[0];
                "'" != b && (a.content = Prism.highlight(a.content, {
                    expression: {
                        pattern: /([^\\])(\$(\{.*?\}|[\w\.]*))/,
                        lookbehind: !0,
                        inside: Prism.languages.groovy
                    }
                }), a.classes.push("/" === b ? "regex" : "gstring"))
            }
        }), Prism.languages.http = {
            "request-line": {
                pattern: /^(POST|GET|PUT|DELETE|OPTIONS)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/g,
                inside: {
                    property: /^\b(POST|GET|PUT|DELETE|OPTIONS)\b/g,
                    "attr-name": /:\w+/g
                }
            },
            "response-status": {
                pattern: /^HTTP\/1.[01] [0-9]+.*/g,
                inside: {
                    property: /[0-9]+[A-Z\s-]+$/g
                }
            },
            keyword: /^[\w-]+:(?=.+)/gm
        };
        var c = {
            "application/json": Prism.languages.javascript,
            "application/xml": Prism.languages.markup,
            "text/xml": Prism.languages.markup,
            "text/html": Prism.languages.markup
        };
        for (var d in c)
            if (c[d]) {
                var e = {};
                e[d] = {
                    pattern: new RegExp("(content-type:\\s*" + d + "[\\w\\W]*?)\\n\\n[\\w\\W]*", "gi"),
                    lookbehind: !0,
                    inside: {
                        rest: c[d]
                    }
                }, Prism.languages.insertBefore("http", "keyword", e)
            }
        Prism.languages.ruby = Prism.languages.extend("clike", {
            comment: /#[^\r\n]*(\r?\n|$)/g,
            keyword: /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/g,
            builtin: /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
            constant: /\b[A-Z][a-zA-Z_0-9]*[?!]?\b/g
        }), Prism.languages.insertBefore("ruby", "keyword", {
            regex: {
                pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
                lookbehind: !0
            },
            variable: /[@$&]+\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g,
            symbol: /:\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g
        }), Prism.languages.gherkin = {
            comment: {
                pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|((#)|(\/\/)).*?(\r?\n|$))/g,
                lookbehind: !0
            },
            string: /("|')(\\?.)*?\1/g,
            atrule: /\b(And|Given|When|Then|In order to|As an|I want to|As a)\b/g,
            keyword: /\b(Scenario Outline|Scenario|Feature|Background|Story)\b/g
        }, Prism.languages.csharp = Prism.languages.extend("clike", {
            keyword: /\b(abstract|as|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/g,
            string: /@?("|')(\\?.)*?\1/g,
            preprocessor: /^\s*#.*/gm,
            number: /\b-?(0x)?\d*\.?\d+\b/g
        }), Prism.hooks.add("after-highlight", function(a) {
            var b = a.element.parentNode;
            if (b && /pre/i.test(b.nodeName) && -1 !== b.className.indexOf("line-numbers")) {
                var d, c = 1 + a.code.split("\n").length;
                lines = new Array(c), lines = lines.join("<span></span>"), d = document.createElement("span"), d.className = "line-numbers-rows", d.innerHTML = lines, b.hasAttribute("data-start") && (b.style.counterReset = "linenumber " + (parseInt(b.getAttribute("data-start"), 10) - 1)), a.element.appendChild(d)
            }
        }), b.resolve()
    }), EasyDiscuss.module("profile", function(a) {
        var b = this;
        EasyDiscuss.require().done(function() {
            EasyDiscuss.Controller("Profile", {
                defaultOptions: {
                    userid: null,
                    defaultTab: null,
                    "{tabs}": ".profileTab",
                    "{tabContents}": ".tabContents",
                    "{loader}": ".loader"
                }
            }, function(b) {
                return {
                    init: function() {
                        b.options.userid = b.element.data("id"), b.initializeTabs()
                    },
                    initializeTabs: function() {
                        var c = b.options.defaultTab,
                            d = a.uri(window.location).anchor();
                        d && (c = d.charAt(0).toUpperCase() + d.slice(1)), b.tabs(".tab" + c).click()
                    },
                    loadTabContents: function(a) {
                        EasyDiscuss.ajax("site.views.profile.tab", {
                            type: a,
                            id: b.options.userid
                        }, {
                            beforeSend: function() {
                                b.tabContents("#" + a).addClass("tab-pane-loading")
                            },
                            success: function(c, d) {
                                var e = c;
                                null != d && (e += d), b.tabContents("#" + a).removeClass("tab-pane-loading"), b.tabContents("#" + a).html(e)
                            },
                            fail: function() {}
                        })
                    },
                    "{tabs} click": function(a) {
                        var c = a.data("id"),
                            d = b.tabContents("#" + c);
                        d.removeClass("dynamic-tab-pane-control").find(".tab-row").remove();
                        var e = d.children().length;
                        0 >= e && b.loadTabContents(a.data("id"))
                    }
                }
            }), b.resolve()
        })
    }), EasyDiscuss.module("ranks", function() {
        var b = this;
        EasyDiscuss.require().language("COM_EASYDISCUSS_SUCCESS", "COM_EASYDISCUSS_FAIL").done(function(a) {
            EasyDiscuss.Controller("Administrator.Ranks", {
                defaultOptions: {
                    userid: null,
                    "{resetButton}": ".resetButton"
                }
            }, function(b) {
                return {
                    init: function() {},
                    "{resetButton} click": function() {
                        a(".resetMessage").addClass("discuss-loader"), EasyDiscuss.ajax("admin.views.ranks.ajaxResetRank", {
                            userid: b.options.userid
                        }).done(function() {
                            a(".resetMessage").html(a.language("COM_EASYDISCUSS_SUCCESS"))
                        }).fail(function() {
                            a(".resetMessage").html(a.language("COM_EASYDISCUSS_FAIL"))
                        }).always(function() {
                            a(".resetMessage").removeClass("discuss-loader")
                        })
                    }
                }
            }), b.resolve()
        })
    }), EasyDiscuss.module("replies", function(a) {
        var b = this;
        EasyDiscuss.require().view("comment.form").script("comments", "votes", "location").language("COM_EASYDISCUSS_REPLY_LOADING_MORE_COMMENTS", "COM_EASYDISCUSS_REPLY_LOAD_ERROR").done(function() {
            EasyDiscuss.Controller("Replies", {
                defaultOptions: {
                    termsCondition: null,
                    sort: null,
                    "{replyItem}": ".discussReplyItem"
                }
            }, function(b) {
                return {
                    init: function() {
                        b.initItem(b.replyItem())
                    },
                    initItem: function(a, c) {
                        a.implement(EasyDiscuss.Controller.Reply.Item, {
                            controller: {
                                parent: b
                            },
                            reinit: c,
                            termsCondition: b.options.termsCondition,
                            enableMap: b.options.enableMap
                        })
                    },
                    addItem: function(c, d) {
                        var e = a(c);
                        "latest" == b.options.sort ? e.prependTo(b.element) : 0 == a(".replyLoadMore").length ? e.appendTo(b.element) : a(".replyLoadMore").controller().loadedAllReplies && e.appendTo(b.element), b.initItem(e, d)
                    },
                    replaceItem: function(c, d) {
                        var e = a(d);
                        b.replyItem("[data-id=" + c + "]").replaceWith(e), b.initItem(e)
                    }
                }
            }), EasyDiscuss.Controller("Reply.Item", {
                defaultOptions: {
                    id: null,
                    termsCondition: null,
                    reinit: null,
                    view: {
                        commentForm: "comment.form"
                    },
                    "{addCommentButton}": ".addComment",
                    "{commentFormContainer}": ".commentFormContainer",
                    "{commentNotification}": ".commentNotification",
                    "{commentsList}": ".commentsList",
                    "{commentLoadMore}": ".commentLoadMore",
                    "{editReplyButton}": ".editReplyButton",
                    "{cancelReplyButton}": ".cancel-reply",
                    "{composerContainer}": ".discuss-editor",
                    "{composer}": ".discuss-composer",
                    "{alertMessage}": ".alertMessage",
                    "{postLocation}": ".postLocation",
                    "{locationData}": ".locationData"
                }
            }, function(b) {
                return {
                    init: function() {
                        if (b.options.id = b.element.data("id"), b.locationData().length > 0) {
                            var c = a.parseJSON(b.locationData().val());
                            b.postLocation().implement("EasyDiscuss.Controller.Location.Map", c)
                        }
                        if (EasyDiscuss.main_syntax_highlighter && Prism.highlightAll(), b.commentsList().implement(EasyDiscuss.Controller.Comment.List), b.commentLoadMore().length > 0 && b.commentLoadMore().implement(EasyDiscuss.Controller.Comment.LoadMore, {
                                controller: {
                                    list: b.commentsList().controller()
                                }
                            }), b.options.reinit) {
                            var d = b.element.find(".postLocation");
                            if (d.length > 0) {
                                var e = a.parseJSON(d.find(".locationData").val());
                                EasyDiscuss.require().script("location").done(function() {
                                    d.implement("EasyDiscuss.Controller.Location.Map", e)
                                })
                            }
                            b.find(".discuss-vote").implement(EasyDiscuss.Controller.Votes, {
                                viewVotes: EasyDiscuss.view_votes
                            }), b.find(".attachmentsItem").implement(EasyDiscuss.Controller.Attachments.Item, {})
                        }
                    },
                    "{editReplyButton} click": function() {
                        b.edit()
                    },
                    alert: function(c, d, e) {
                        void 0 === d && (d = "info"), b.removeAlert(), a('<div class="alert alertMessage"></div>').addClass("alert-" + d).html(c).prependTo(b.composerContainer()), e && setTimeout(function() {
                            b.alertMessage().fadeOut("slow", function() {
                                b.removeAlert()
                            })
                        }, e)
                    },
                    removeAlert: function() {
                        b.alertMessage().remove()
                    },
                    edit: function() {
                        b.editReplyButton().addClass("btn-loading"), EasyDiscuss.ajax("site.views.post.editReply", {
                            id: b.options.id
                        }).done(function(a, c) {
                            b.composer().remove(), b.composerContainer().append(c), discuss.composer.init("." + a)
                        }).fail(function() {
                            b.alert("Unable to load composer.", "error", 3e3)
                        }).always(function() {
                            b.editReplyButton().removeClass("btn-loading")
                        })
                    },
                    "{composer} save": function(c, d, e) {
                        var f = a(e).filter(".discussReplyItem");
                        if (f.length > 0) {
                            b.parent.replaceItem(b.options.id, f);
                            var g = a(".discussionReplies").controller();
                            g.initItem(f, !0)
                        }
                    },
                    "{composer} cancel": function() {
                        b.composer().remove()
                    },
                    "{addCommentButton} click": function() {
                        var c = b.view.commentForm({
                            id: b.options.id
                        });
                        a(c).implement(EasyDiscuss.Controller.Comment.Form, {
                            container: b.commentFormContainer(),
                            notification: b.commentNotification(),
                            commentsList: b.commentsList(),
                            loadMore: b.commentLoadMore(),
                            termsCondition: b.options.termsCondition
                        }), b.commentFormContainer().html(c).toggle()
                    }
                }
            }), EasyDiscuss.Controller("Replies.LoadMore", {
                defaultOptions: {
                    id: null,
                    sort: null
                }
            }, function(b) {
                return {
                    init: function() {
                        b.loadedAllReplies = !1
                    },
                    "{self} click": function(c) {
                        c.enabled() && (c.disabled(!0), c.addClass("btn-loading").html(a.language("COM_EASYDISCUSS_REPLY_LOADING_MORE_COMMENTS")), EasyDiscuss.ajax("site.views.post.getReplies", {
                            id: b.options.id,
                            start: b.list.replyItem().length,
                            sort: b.options.sort
                        }).done(function(d, e) {
                            d = a(d), d.appendTo(b.list.element);
                            var f = d.filter("li").find(".discussReplyItem");
                            f.implement(EasyDiscuss.Controller.Reply.Item, {
                                controller: {
                                    parent: b.list
                                },
                                termsCondition: b.list.options.termsCondition,
                                reinit: !0
                            }), e ? c.enabled(!0) : (c.hide(), b.loadedAllReplies = !0)
                        }).fail(function() {
                            c.addClass("btn-danger").html(a.language("COM_EASYDISCUSS_REPLY_LOAD_ERROR"))
                        }).always(function() {
                            c.removeClass("btn-loading")
                        }))
                    }
                }
            }), b.resolve()
        })
    }), EasyDiscuss.module("votes", function() {
        var b = this;
        EasyDiscuss.require().done(function() {
            EasyDiscuss.Controller("Votes", {
                defaultOptions: {
                    postId: null,
                    "{voteUp}": ".voteUp",
                    "{voteDown}": ".voteDown",
                    "{votePoints}": ".votePoints b",
                    "{voteText}": ".voteText"
                }
            }, function(a) {
                return {
                    init: function() {
                        a.options.postId = a.element.data("postid")
                    },
                    vote: function(b) {
                        EasyDiscuss.ajax("site.views.votes.add", {
                            id: a.options.postId,
                            type: b
                        }).done(function(b) {
                            a.votePoints().html(b)
                        }).fail(function(a) {
                            console.log(a)
                        })
                    },
                    "{votePoints} click": function() {
                        a.options.viewVotes && (disjax.loadingDialog(), disjax.load("Votes", "showVoters", a.options.postId.toString()))
                    },
                    "{voteUp} click": function() {
                        a.vote("up")
                    },
                    "{voteDown} click": function() {
                        a.vote("down")
                    }
                }
            }), b.resolve()
        })
    }), EasyDiscuss.module("stylesheet", function() {
        var b = this;
        EasyDiscuss.require().language("COM_EASYDISCUSS_SUCCESS", "COM_EASYDISCUSS_FAIL").done(function(a) {
            EasyDiscuss.Controller("Post.Stylesheet", {
                defaultOptions: {
                    type: null,
                    "{compileButton}": ".compileButton",
                    "{compileType}": "#compileType",
                    "{compileResult}": ".compileResult"
                }
            }, function(b) {
                return {
                    init: function() {},
                    "{compileButton} click": function() {
                        b.testCompile(a("#compileType").val()), a(".compileButton").addClass("btn-loading")
                    },
                    testCompile: function(b) {
                        EasyDiscuss.ajax("site.views.compile.testCompile", {
                            type: b
                        }).done(function(b) {
                            try {
                                console.log(b)
                            } catch (d) {}
                            a(".compileResult").addClass("text-success"), a(".compileResult").removeClass("text-error"), a(".compileResult").html(a.language("COM_EASYDISCUSS_SUCCESS"))
                        }).fail(function(b) {
                            try {
                                console.log(b)
                            } catch (d) {}
                            a(".compileResult").addClass("text-error"), a(".compileResult").removeClass("text-success"), a(".compileResult").html(a.language("COM_EASYDISCUSS_FAIL"))
                        }).always(function() {
                            a(".compileButton").removeClass("btn-loading")
                        })
                    }
                }
            }), b.resolve()
        })
    }), EasyDiscuss.module("tag", function(a) {
        var b = this;
        EasyDiscuss.Controller("Tag.Form", {
            defaultOptions: {
                tags: [],
                tagSelections: [],
                tagSelectionLimit: 25,
                "{tagList}": ".discuss-tag-list.creation",
                "{tagItems}": ".discuss-tag-list.creation .tag-item",
                "{tagItemRemoveButton}": ".remove-tag",
                "{tagSelection}": ".discuss-tag-list.selection",
                "{tagSelectionItems}": ".discuss-tag-list.selection .tag-item",
                "{tagSelectionMoreButton}": ".discuss-tag-list.selection .more-tags",
                "{totalTags}": ".total-tags",
                "{tagCreate}": ".new-tag-item",
                "{tagInput}": ".tag-input",
                "{tagCreateButton}": ".tag-create",
                view: {
                    tagItem: "tags.item"
                }
            }
        }, function(b) {
            return {
                init: function() {
                    b.generateTagSelections(b.options.tagSelections), a.each(b.options.tags, function(a, c) {
                        b.tagMap[c.title] = c, b.createTag(c.title)
                    })
                },
                tagItem: {},
                tagMap: {},
                tagSelectionMap: {},
                sanitizeTitle: function(b) {
                    return a.trim(b).replace(/[,\'\"\#\<\>]/gi, "")
                },
                getTagItem: function(c) {
                    return b.tagItems(function() {
                        return a(this).data("title") == c
                    })
                },
                createTag: function(c) {
                    if (b.checkTagLimit()) {
                        var d, c = b.sanitizeTitle(c);
                        Object.prototype.hasOwnProperty.call(b.tagMap, c) && (d = b.tagMap[c]), d = d || {
                            title: c
                        };
                        var e = a(b.getTagItem(c)[0] || b.view("tagItem", d));
                        if (e.data({
                                title: d.title,
                                title_filter: d.title.toUpperCase()
                            }).css({
                                opacity: 0
                            }), b.tagItems().length > 0) {
                            var f = b.tagItems(":last");
                            f[0] != e[0] && f.after(e)
                        } else b.tagList().prepend(e);
                        return e.animate({
                            opacity: 1
                        }), b.useTagSelection(d.title), b.checkTagLimit(), e
                    }
                },
                removeTag: function(a) {
                    var c = b.getTagItem(a);
                    c.remove(), b.tagMap[a] && b.createTagSelection(a), b.discardTagSelection(a), b.checkTagLimit()
                },
                checkTagLimit: function() {
                    var a = b.tagItems().length;
                    return b.totalTags().text(a), 0 != b.options.tagLimit ? a > b.options.tagLimit ? !1 : a == b.options.tagLimit ? (b.tagCreate().hide(), !1) : (b.tagCreate().show(), !0) : void 0
                },
                generateTagSelections: function(c) {
                    var d = b.options.tagSelectionLimit;
                    if (c.length <= d && b.tagSelectionMoreButton().remove(), c.length < 1) return b.element.addClass("no-selection"), void 0;
                    b.options.tagSelections.reverse();
                    var e = b.options.tagSelections.length;
                    a.each(b.options.tagSelections, function(a, c) {
                        b.tagSelectionMap[c.title] = c;
                        var f = b.createTagSelection(c.title);
                        a == d + 1 && b.tagSelectionMoreButton().show(), e - a > d && f.addClass("extras")
                    })
                },
                "{tagSelectionMoreButton} click": function(a) {
                    a.remove(), b.tagSelectionItems(".extras").css({
                        opacity: 0
                    }).removeClass("extras").animate({
                        opacity: 1
                    })
                },
                getTagSelectionItem: function(a) {
                    return Object.prototype.hasOwnProperty.call(b.tagItem, a) ? b.tagItem[a] : void 0
                },
                createTagSelection: function(c) {
                    var d = b.getTagSelectionItem(c);
                    if (d) return d.show(), d;
                    var d = a("<li>").addClass("tag-item").data({
                        title: c,
                        title_filter: c.toUpperCase()
                    }).html(c);
                    return b.tagItem[c] = d, b.tagSelection().prepend(d), d
                },
                useTagSelection: function(a) {
                    var c = b.getTagSelectionItem(a);
                    c && c.addClass("used").hide()
                },
                discardTagSelection: function(a) {
                    var c = b.getTagSelectionItem(a);
                    c && b.getTagSelectionItem(a).removeClass("used").show()
                },
                createTagFromInput: function() {
                    var a = b.sanitizeTitle(b.tagInput().val());
                    "" != a && (b.createTag(a), b.tagInput().val("")), b.filterTagSelectionItems("")
                },
                filterTagSelectionItems: function(c) {
                    if (c = b.sanitizeTitle(c).toUpperCase(), "" == c) b.tagSelectionItems(":not(.used)").show(), b.element.removeClass("no-selection"), b.tagSelectionMoreButton().show();
                    else {
                        b.tagSelectionMoreButton().hide();
                        var d = b.tagSelectionItems().filter(function(b, d) {
                            var d = a(this);
                            return d.hasClass(".used") ? (d.hide(), !1) : d.data("title_filter").indexOf(c) < 0 ? (d.hide(), !1) : (d.show(), !0)
                        });
                        d.length < 1 && b.element.addClass("no-selection")
                    }
                },
                "{tagInput} keydown": function(a, c) {
                    c.stopPropagation(), b.realEnterKey = 13 == c.keyCode
                },
                "{tagInput} keypress": function(a, c) {
                    c.stopPropagation(), b.realEnterKey = b.realEnterKey && 13 == c.keyCode
                },
                "{tagInput} keyup": function(a, c) {
                    switch (c.stopPropagation(), c.keyCode) {
                        case 27:
                            a.val("");
                            break;
                        case 13:
                            b.realEnterKey && b.createTagFromInput()
                    }
                    b.filterTagSelectionItems(a.val())
                },
                "{tagCreateButton} click": function() {
                    b.createTagFromInput()
                },
                "{tagItemRemoveButton} click": function(a) {
                    var c = a.parents(".tag-item").data("title");
                    b.removeTag(c)
                },
                "{tagSelectionItems} click": function(a) {
                    b.createTag(a.data("title"))
                }
            }
        }), b.resolve()
    }), EasyDiscuss.module("toolbar", function(a) {
        ! function() {
            var b = a.event,
                c = function(a, b, c, d) {
                    var e, f, g, h, i, j, k, l, m;
                    for (e = 0; e < b.length; e++)
                        for (f = b[e], h = f.indexOf(".") < 0, h || (k = f.split("."), f = k.shift(), l = new RegExp("(^|\\.)" + k.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)")), g = (a[f] || []).slice(0), i = 0; i < g.length; i++) j = g[i], m = h || l.test(j.namespace), m && (d ? j.selector === d && c(f, j.origHandler || j.handler) : null === d ? c(f, j.origHandler || j.handler, j.selector) : j.selector || c(f, j.origHandler || j.handler))
                };
            b.find = function(b, d, e) {
                var f = (a._data(b) || {}).events,
                    g = [];
                return f ? (c(f, d, function(a, b) {
                    g.push(b)
                }, e), g) : g
            }, b.findBySelector = function(b, d) {
                var e = a._data(b).events,
                    f = {},
                    g = function(a, b, c) {
                        var d = f[a] || (f[a] = {}),
                            e = d[b] || (d[b] = []);
                        e.push(c)
                    };
                return e ? (c(e, d, function(a, b, c) {
                    g(c || "", a, b)
                }, null), f) : f
            }, b.supportTouch = "ontouchend" in document, a.fn.respondsTo = function(c) {
                return this.length ? b.find(this[0], a.isArray(c) ? c : [c]).length > 0 : !1
            }, a.fn.triggerHandled = function(b, c) {
                return b = "string" == typeof b ? a.Event(b) : b, this.trigger(b, c), b.handled
            }, b.setupHelper = function(c, d, e) {
                e || (e = d, d = null);
                var f = function(f) {
                        var g, h = f.selector || "";
                        h ? (g = b.find(this, c, h), g.length || a(this).delegate(h, d, e)) : b.find(this, c, h).length || b.add(this, d, e, {
                            selector: h,
                            delegate: this
                        })
                    },
                    g = function(f) {
                        var g, h = f.selector || "";
                        h ? (g = b.find(this, c, h), g.length || a(this).undelegate(h, d, e)) : b.find(this, c, h).length || b.remove(this, d, e, {
                            selector: h,
                            delegate: this
                        })
                    };
                a.each(c, function() {
                    b.special[this] = {
                        add: f,
                        remove: g,
                        setup: function() {},
                        teardown: function() {}
                    }
                })
            };
            var d = "ontouchend" in document,
                f = d ? "touchstart" : "mousedown",
                g = d ? "touchend" : "mouseup",
                i = function(b) {
                    var c = b.originalEvent.touches ? b.originalEvent.touches[0] || b.originalEvent.changedTouches[0] : b;
                    return {
                        time: (new Date).getTime(),
                        coords: [c.pageX, c.pageY],
                        origin: a(b.target)
                    }
                };
            a.event.setupHelper(["tap"], f, function(b) {
                function m(g) {
                    d = i(g), (Math.abs(c.coords[0] - d.coords[0]) < 10 || Math.abs(c.coords[1] - d.coords[1]) < 10) && a.each(a.event.find(e, ["tap"], f), function() {
                        this.call(h, b, {
                            start: c,
                            end: d
                        })
                    })
                }
                var d, l, c = i(b),
                    e = b.delegateTarget || b.currentTarget,
                    f = b.handleObj.selector,
                    h = this;
                l = setTimeout(function() {
                    a(e).unbind(g, m)
                }, 500), a(e).one(g, m)
            })
        }();
        var b = this;
        EasyDiscuss.require().done(function(a) {
            EasyDiscuss.Controller("Toolbar", {
                defaultOptions: {
                    "{items}": ".toolbarItem",
                    "{dropdowns}": ".dropdown-menu",
                    "{notificationLink}": ".notificationLink",
                    "{notificationDropDown}": ".notificationDropDown",
                    "{notificationResult}": ".notificationResult",
                    "{notificationItems}": ".notificationItem",
                    "{notificationLoader}": ".notificationLoader",
                    "{messageLink}": ".messageLink",
                    "{messageDropDown}": ".messageDropDown",
                    "{messageResult}": ".messageResult",
                    "{messageLoader}": ".messageLoader",
                    "{messageItems}": ".messageItem",
                    "{logoutForm}": "#logoutForm",
                    "{logoutButton}": ".logoutButton",
                    "{loginLink}": ".loginLink",
                    "{loginDropDown}": ".loginDropDown",
                    "{profileLink}": ".profileLink",
                    "{profileDropDown}": ".profileDropDown"
                }
            }, function(b) {
                return {
                    init: function() {
                        a.responsive(b.element, {
                            elementWidth: function() {
                                return b.element.outerWidth(!0) - 15
                            },
                            conditions: {
                                at: function() {
                                    var c = 0;
                                    return b.items().each(function(b, d) {
                                        c += a(d).outerWidth(!0)
                                    }), c
                                }(),
                                alsoSwitch: {
                                    ".dc_toolbar-wrapper": "narrow",
                                    ".dc-button": "show",
                                    "#dc_toolbar": "hidden-height"
                                }
                            }
                        })
                    },
                    "{logoutButton} click": function() {
                        b.logoutForm().submit()
                    },
                    "{loginLink} click": function() {
                        b.messageDropDown().hide(), b.notificationDropDown().hide(), b.loginDropDown().toggle()
                    },
                    "{profileLink} tap": function() {
                        b.messageDropDown().hide(), b.notificationDropDown().hide(), b.profileDropDown().toggle()
                    },
                    "{messageLink} tap": function() {
                        if (b.profileDropDown().hide(), b.notificationDropDown().hide(), "none" == b.messageDropDown().css("display")) {
                            var c = {};
                            c[a(".easydiscuss-token").val()] = 1, EasyDiscuss.ajax("site.views.conversation.load", c, {
                                beforeSend: function() {
                                    b.messageLoader().show(), b.messageItems().remove()
                                },
                                success: function(a) {
                                    b.messageLoader().hide(), b.messageResult().append(a)
                                }
                            })
                        }
                        b.messageDropDown().toggle()
                    },
                    "{notificationLink} tap": function() {
                        if (b.messageDropDown().hide(), b.profileDropDown().hide(), "none" == b.notificationDropDown().css("display")) {
                            var c = {};
                            c[a(".easydiscuss-token").val()] = 1, EasyDiscuss.ajax("site.views.notifications.load", c, {
                                beforeSend: function() {
                                    b.notificationLoader().show(), b.notificationItems().remove()
                                },
                                success: function(a) {
                                    b.notificationLoader().hide(), b.notificationResult().append(a)
                                }
                            })
                        }
                        b.notificationDropDown().toggle()
                    }
                }
            }), EasyDiscuss.Controller("mod_notifications", {
                defaultOptions: {
                    "{items}": ".toolbarItem",
                    "{dropdowns}": ".dropdown-menu",
                    "{notificationLink}": ".notificationLink",
                    "{notificationDropDown}": ".notificationDropDown",
                    "{notificationResult}": ".notificationResult",
                    "{notificationItems}": ".notificationItem",
                    "{notificationLoader}": ".notificationLoader",
                    "{messageLink}": ".messageLink",
                    "{messageDropDown}": ".messageDropDown",
                    "{messageResult}": ".messageResult",
                    "{messageLoader}": ".messageLoader",
                    "{messageItems}": ".messageItem",
                    "{logoutForm}": "#logoutForm",
                    "{logoutButton}": ".logoutButton",
                    "{loginLink}": ".loginLink",
                    "{loginDropDown}": ".loginDropDown",
                    "{profileLink}": ".profileLink",
                    "{profileDropDown}": ".profileDropDown"
                }
            }, function(b) {
                return {
                    init: function() {
                        a.responsive(b.element, {
                            elementWidth: function() {
                                return b.element.outerWidth(!0) - 15
                            },
                            conditions: {
                                at: function() {
                                    var c = 0;
                                    return b.items().each(function(b, d) {
                                        c += a(d).outerWidth(!0)
                                    }), c
                                }(),
                                alsoSwitch: {
                                    ".dc_toolbar-wrapper": "narrow",
                                    ".dc-button": "show",
                                    "#dc_toolbar": "hidden-height"
                                }
                            }
                        })
                    },
                    "{logoutButton} click": function() {
                        b.logoutForm().submit()
                    },
                    "{loginLink} click": function() {
                        b.messageDropDown().hide(), b.notificationDropDown().hide(), b.loginDropDown().toggle()
                    },
                    "{profileLink} click": function() {
                        b.messageDropDown().hide(), b.notificationDropDown().hide(), b.profileDropDown().toggle()
                    },
                    "{messageLink} click": function() {
                        if (b.profileDropDown().hide(), b.notificationDropDown().hide(), "none" == b.messageDropDown().css("display")) {
                            var c = {};
                            c[a(".easydiscuss-token").val()] = 1, EasyDiscuss.ajax("site.views.conversation.load", c, {
                                beforeSend: function() {
                                    b.messageLoader().show(), b.messageItems().remove()
                                },
                                success: function(a) {
                                    b.messageLoader().hide(), b.messageResult().append(a)
                                }
                            })
                        }
                        b.messageDropDown().toggle()
                    },
                    "{notificationLink} click": function() {
                        if (b.messageDropDown().hide(), b.profileDropDown().hide(), "none" == b.notificationDropDown().css("display")) {
                            var c = {};
                            c[a(".easydiscuss-token").val()] = 1, EasyDiscuss.ajax("site.views.notifications.load", c, {
                                beforeSend: function() {
                                    b.notificationLoader().show(), b.notificationItems().remove()
                                },
                                success: function(a) {
                                    b.notificationLoader().hide(), b.notificationResult().append(a)
                                }
                            })
                        }
                        b.notificationDropDown().toggle()
                    }
                }
            }), b.resolve()
        })
    })
});