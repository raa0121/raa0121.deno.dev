var Mn = Object.defineProperty;
var f = (n, e) => Mn(n, "name", { value: e, configurable: !0 });
var Re,
  D,
  Ve,
  In,
  M,
  Ae,
  Be,
  ve,
  Rn,
  K = {},
  $e = [],
  Vn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  me = Array.isArray;
function A(n, e) {
  for (var t in e) n[t] = e[t];
  return n;
}
f(A, "C");
function Oe(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
f(Oe, "Y");
function he(n, e, t, r, l) {
  var o = {
    type: n,
    props: e,
    key: t,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: l ?? ++Ve,
  };
  return l == null && D.vnode != null && D.vnode(o), o;
}
f(he, "D");
function Q(n) {
  return n.children;
}
f(Q, "I");
function J(n, e) {
  this.props = n, this.context = e;
}
f(J, "W");
function $(n, e) {
  if (e == null) return n.__ ? $(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var t; e < n.__k.length; e++) {
    if ((t = n.__k[e]) != null && t.__e != null) return t.__e;
  }
  return typeof n.type == "function" ? $(n) : null;
}
f($, "L");
function je(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++) {
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    }
    return je(n);
  }
}
f(je, "Z");
function Ne(n) {
  (!n.__d && (n.__d = !0) && M.push(n) && !X.__r++ ||
    Ae !== D.debounceRendering) && ((Ae = D.debounceRendering) || Be)(X);
}
f(Ne, "B");
function X() {
  var n, e, t, r, l, o, c, p, u;
  for (M.sort(ve); n = M.shift();) {
    n.__d &&
      (e = M.length,
        r = void 0,
        l = void 0,
        o = void 0,
        p = (c = (t = n).__v).__e,
        (u = t.__P) &&
        (r = [],
          l = [],
          (o = A({}, c)).__v = c.__v + 1,
          Ke(
            u,
            c,
            o,
            t.__n,
            u.ownerSVGElement !== void 0,
            c.__h != null ? [p] : null,
            r,
            p ?? $(c),
            c.__h,
            l,
          ),
          On(r, c, l),
          c.__e != p && je(c)),
        M.length > e && M.sort(ve));
  }
  X.__r = 0;
}
f(X, "H");
function ze(n, e, t, r, l, o, c, p, u, g, d) {
  var _,
    v,
    s,
    i,
    a,
    T,
    h,
    y,
    C,
    x = 0,
    m = r && r.__k || $e,
    E = m.length,
    w = E,
    U = e.length;
  for (t.__k = [], _ = 0; _ < U; _++) {
    (i =
        t.__k[_] =
          (i = e[_]) == null || typeof i == "boolean" || typeof i == "function"
            ? null
            : typeof i == "string" || typeof i == "number" ||
                typeof i == "bigint"
            ? he(null, i, null, null, i)
            : me(i)
            ? he(Q, { children: i }, null, null, null)
            : i.__b > 0
            ? he(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
            : i) != null
      ? (i.__ = t,
        i.__b = t.__b + 1,
        (y = Bn(i, m, h = _ + x, w)) === -1
          ? s = K
          : (s = m[y] || K, m[y] = void 0, w--),
        Ke(n, i, s, l, o, c, p, u, g, d),
        a = i.__e,
        (v = i.ref) && s.ref != v &&
        (s.ref && ge(s.ref, null, i), d.push(v, i.__c || a, i)),
        a != null && (T == null && (T = a),
          (C = s === K || s.__v === null)
            ? y == -1 && x--
            : y !== h && (y === h + 1
              ? x++
              : y > h
              ? w > U - h ? x += y - h : x--
              : x = y < h && y == h - 1 ? y - h : 0),
          h = _ + x,
          typeof i.type != "function" || y === h && s.__k !== i.__k
            ? typeof i.type == "function" || y === h && !C
              ? i.__d !== void 0
                ? (u = i.__d, i.__d = void 0)
                : u = a.nextSibling
              : u = qe(n, a, u)
            : u = Ge(i, u, n),
          typeof t.type == "function" && (t.__d = u)))
      : (s = m[_]) && s.key == null && s.__e &&
        (s.__e == u && (u = $(s)), ye(s, s, !1), m[_] = null);
  }
  for (t.__e = T, _ = E; _--;) {
    m[_] != null &&
      (typeof t.type == "function" && m[_].__e != null && m[_].__e == t.__d &&
        (t.__d = m[_].__e.nextSibling),
        ye(m[_], m[_]));
  }
}
f(ze, "ee");
function Ge(n, e, t) {
  for (var r, l = n.__k, o = 0; l && o < l.length; o++) {
    (r = l[o]) &&
      (r.__ = n,
        e = typeof r.type == "function" ? Ge(r, e, t) : qe(t, r.__e, e));
  }
  return e;
}
f(Ge, "te");
function qe(n, e, t) {
  return t == null || t.parentNode !== n
    ? n.insertBefore(e, null)
    : e == t && e.parentNode != null || n.insertBefore(e, t),
    e.nextSibling;
}
f(qe, "ne");
function Bn(n, e, t, r) {
  var l = n.key, o = n.type, c = t - 1, p = t + 1, u = e[t];
  if (u === null || u && l == u.key && o === u.type) return t;
  if (r > (u != null ? 1 : 0)) {
    for (; c >= 0 || p < e.length;) {
      if (c >= 0) {
        if ((u = e[c]) && l == u.key && o === u.type) return c;
        c--;
      }
      if (p < e.length) {
        if ((u = e[p]) && l == u.key && o === u.type) return p;
        p++;
      }
    }
  }
  return -1;
}
f(Bn, "se");
function $n(n, e, t, r, l) {
  var o;
  for (o in t) {
    o === "children" || o === "key" || o in e || Z(n, o, null, t[o], r);
  }
  for (o in e) {
    l && typeof e[o] != "function" || o === "children" || o === "key" ||
      o === "value" || o === "checked" || t[o] === e[o] ||
      Z(n, o, e[o], t[o], r);
  }
}
f($n, "ce");
function We(n, e, t) {
  e[0] === "-"
    ? n.setProperty(e, t ?? "")
    : n[e] = t == null ? "" : typeof t != "number" || Vn.test(e) ? t : t + "px";
}
f(We, "G");
function Z(n, e, t, r, l) {
  var o;
  e: if (e === "style") {
    if (typeof t == "string") n.style.cssText = t;
    else {
      if (typeof r == "string" && (n.style.cssText = r = ""), r) {
        for (e in r) t && e in t || We(n.style, e, "");
      }
      if (t) for (e in t) r && t[e] === r[e] || We(n.style, e, t[e]);
    }
  } else if (e[0] === "o" && e[1] === "n") {
    o = e !== (e = e.replace(/(PointerCapture)$|Capture$/, "$1")),
      e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2),
      n.l || (n.l = {}),
      n.l[e + o] = t,
      t
        ? r || n.addEventListener(e, o ? Ie : Me, o)
        : n.removeEventListener(e, o ? Ie : Me, o);
  } else if (e !== "dangerouslySetInnerHTML") {
    if (l) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      e !== "width" && e !== "height" && e !== "href" && e !== "list" &&
      e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" &&
      e !== "colSpan" && e in n
    ) {
      try {
        n[e] = t ?? "";
        break e;
      } catch {}
    }
    typeof t == "function" ||
      (t == null || t === !1 && e[4] !== "-"
        ? n.removeAttribute(e)
        : n.setAttribute(e, t));
  }
}
f(Z, "A");
function Me(n) {
  return this.l[n.type + !1](D.event ? D.event(n) : n);
}
f(Me, "V");
function Ie(n) {
  return this.l[n.type + !0](D.event ? D.event(n) : n);
}
f(Ie, "q");
function Ke(n, e, t, r, l, o, c, p, u, g) {
  var d, _, v, s, i, a, T, h, y, C, x, m, E, w, U, k = e.type;
  if (e.constructor !== void 0) return null;
  t.__h != null && (u = t.__h, p = e.__e = t.__e, e.__h = null, o = [p]),
    (d = D.__b) && d(e);
  e: if (typeof k == "function") {
    try {
      if (
        h = e.props,
          y = (d = k.contextType) && r[d.__c],
          C = d ? y ? y.props.value : d.__ : r,
          t.__c
            ? T = (_ = e.__c = t.__c).__ = _.__E
            : ("prototype" in k && k.prototype.render
              ? e.__c = _ = new k(h, C)
              : (e.__c = _ = new J(h, C), _.constructor = k, _.render = zn),
              y && y.sub(_),
              _.props = h,
              _.state || (_.state = {}),
              _.context = C,
              _.__n = r,
              v = _.__d = !0,
              _.__h = [],
              _._sb = []),
          _.__s == null && (_.__s = _.state),
          k.getDerivedStateFromProps != null &&
          (_.__s == _.state && (_.__s = A({}, _.__s)),
            A(_.__s, k.getDerivedStateFromProps(h, _.__s))),
          s = _.props,
          i = _.state,
          _.__v = e,
          v
      ) {
        k.getDerivedStateFromProps == null && _.componentWillMount != null &&
        _.componentWillMount(),
          _.componentDidMount != null && _.__h.push(_.componentDidMount);
      } else {
        if (
          k.getDerivedStateFromProps == null && h !== s &&
          _.componentWillReceiveProps != null &&
          _.componentWillReceiveProps(h, C),
            !_.__e &&
            (_.shouldComponentUpdate != null &&
                _.shouldComponentUpdate(h, _.__s, C) === !1 || e.__v === t.__v)
        ) {
          for (
            e.__v !== t.__v && (_.props = h, _.state = _.__s, _.__d = !1),
              e.__e = t.__e,
              e.__k = t.__k,
              e.__k.forEach(function (L) {
                L && (L.__ = e);
              }),
              x = 0;
            x < _._sb.length;
            x++
          ) _.__h.push(_._sb[x]);
          _._sb = [], _.__h.length && c.push(_);
          break e;
        }
        _.componentWillUpdate != null && _.componentWillUpdate(h, _.__s, C),
          _.componentDidUpdate != null && _.__h.push(function () {
            _.componentDidUpdate(s, i, a);
          });
      }
      if (
        _.context = C,
          _.props = h,
          _.__P = n,
          _.__e = !1,
          m = D.__r,
          E = 0,
          "prototype" in k && k.prototype.render
      ) {
        for (
          _.state = _.__s,
            _.__d = !1,
            m && m(e),
            d = _.render(_.props, _.state, _.context),
            w = 0;
          w < _._sb.length;
          w++
        ) _.__h.push(_._sb[w]);
        _._sb = [];
      } else {do _.__d = !1,
          m && m(e),
          d = _.render(_.props, _.state, _.context),
          _.state = _.__s; while (_.__d && ++E < 25);}
      _.state = _.__s,
        _.getChildContext != null && (r = A(A({}, r), _.getChildContext())),
        v || _.getSnapshotBeforeUpdate == null ||
        (a = _.getSnapshotBeforeUpdate(s, i)),
        ze(
          n,
          me(
              U = d != null && d.type === Q && d.key == null
                ? d.props.children
                : d,
            )
            ? U
            : [U],
          e,
          t,
          r,
          l,
          o,
          c,
          p,
          u,
          g,
        ),
        _.base = e.__e,
        e.__h = null,
        _.__h.length && c.push(_),
        T && (_.__E = _.__ = null);
    } catch (L) {
      e.__v = null,
        (u || o != null) && (e.__e = p, e.__h = !!u, o[o.indexOf(p)] = null),
        D.__e(L, e, t);
    }
  } else {o == null && e.__v === t.__v
      ? (e.__k = t.__k, e.__e = t.__e)
      : e.__e = jn(t.__e, e, t, r, l, o, c, u, g);}
  (d = D.diffed) && d(e);
}
f(Ke, "R");
function On(n, e, t) {
  for (var r = 0; r < t.length; r++) ge(t[r], t[++r], t[++r]);
  D.__c && D.__c(e, n),
    n.some(function (l) {
      try {
        n = l.__h,
          l.__h = [],
          n.some(function (o) {
            o.call(l);
          });
      } catch (o) {
        D.__e(o, l.__v);
      }
    });
}
f(On, "_e");
function jn(n, e, t, r, l, o, c, p, u) {
  var g, d, _, v = t.props, s = e.props, i = e.type, a = 0;
  if (i === "svg" && (l = !0), o != null) {
    for (; a < o.length; a++) {
      if (
        (g = o[a]) && "setAttribute" in g == !!i &&
        (i ? g.localName === i : g.nodeType === 3)
      ) {
        n = g, o[a] = null;
        break;
      }
    }
  }
  if (n == null) {
    if (i === null) return document.createTextNode(s);
    n = l
      ? document.createElementNS("http://www.w3.org/2000/svg", i)
      : document.createElement(i, s.is && s),
      o = null,
      p = !1;
  }
  if (i === null) v === s || p && n.data === s || (n.data = s);
  else {
    if (
      o = o && Re.call(n.childNodes),
        d = (v = t.props || K).dangerouslySetInnerHTML,
        _ = s.dangerouslySetInnerHTML,
        !p
    ) {
      if (o != null) {
        for (
          v = {}, a = 0;
          a < n.attributes.length;
          a++
        ) v[n.attributes[a].name] = n.attributes[a].value;
      }
      (_ || d) &&
        (_ && (d && _.__html == d.__html || _.__html === n.innerHTML) ||
          (n.innerHTML = _ && _.__html || ""));
    }
    if ($n(n, s, v, l, p), _) e.__k = [];
    else if (
      ze(
        n,
        me(a = e.props.children) ? a : [a],
        e,
        t,
        r,
        l && i !== "foreignObject",
        o,
        c,
        o ? o[0] : t.__k && $(t, 0),
        p,
        u,
      ), o != null
    ) for (a = o.length; a--;) o[a] != null && Oe(o[a]);
    p ||
      ("value" in s && (a = s.value) !== void 0 &&
        (a !== n.value || i === "progress" && !a ||
          i === "option" && a !== v.value) &&
        Z(n, "value", a, v.value, !1),
        "checked" in s && (a = s.checked) !== void 0 && a !== n.checked &&
        Z(n, "checked", a, v.checked, !1));
  }
  return n;
}
f(jn, "ue");
function ge(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (r) {
    D.__e(r, t);
  }
}
f(ge, "j");
function ye(n, e, t) {
  var r, l;
  if (
    D.unmount && D.unmount(n),
      (r = n.ref) && (r.current && r.current !== n.__e || ge(r, null, e)),
      (r = n.__c) != null
  ) {
    if (r.componentWillUnmount) {
      try {
        r.componentWillUnmount();
      } catch (o) {
        D.__e(o, e);
      }
    }
    r.base = r.__P = null, n.__c = void 0;
  }
  if (r = n.__k) {
    for (l = 0; l < r.length; l++) {
      r[l] && ye(r[l], e, t || typeof n.type != "function");
    }
  }
  t || n.__e == null || Oe(n.__e), n.__ = n.__e = n.__d = void 0;
}
f(ye, "O");
function zn(n, e, t) {
  return this.constructor(n, t);
}
f(zn, "fe");
Re = $e.slice,
  D = {
    __e: function (n, e, t, r) {
      for (var l, o, c; e = e.__;) {
        if ((l = e.__c) && !l.__) {
          try {
            if (
              (o = l.constructor) && o.getDerivedStateFromError != null &&
              (l.setState(o.getDerivedStateFromError(n)), c = l.__d),
                l.componentDidCatch != null &&
                (l.componentDidCatch(n, r || {}), c = l.__d),
                c
            ) return l.__E = l;
          } catch (p) {
            n = p;
          }
        }
      }
      throw n;
    },
  },
  Ve = 0,
  In = f(function (n) {
    return n != null && n.constructor === void 0;
  }, "oe"),
  J.prototype.setState = function (n, e) {
    var t;
    t = this.__s != null && this.__s !== this.state
      ? this.__s
      : this.__s = A({}, this.state),
      typeof n == "function" && (n = n(A({}, t), this.props)),
      n && A(t, n),
      n != null && this.__v && (e && this._sb.push(e), Ne(this));
  },
  J.prototype.forceUpdate = function (n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), Ne(this));
  },
  J.prototype.render = Q,
  M = [],
  Be = typeof Promise == "function"
    ? Promise.prototype.then.bind(Promise.resolve())
    : setTimeout,
  ve = f(function (n, e) {
    return n.__v.__b - e.__v.__b;
  }, "$"),
  X.__r = 0,
  Rn = 0;
var mt = Array.isArray;
var oe,
  b,
  en,
  Gn,
  I,
  Je,
  nn,
  ke,
  qn,
  V = {},
  tn = [],
  Kn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  be = Array.isArray;
function N(n, e) {
  for (var t in e) n[t] = e[t];
  return n;
}
f(N, "S");
function _n(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
f(_n, "X");
function Jn(n, e, t) {
  var r, l, o, c = {};
  for (o in e) o == "key" ? r = e[o] : o == "ref" ? l = e[o] : c[o] = e[o];
  if (
    arguments.length > 2 &&
    (c.children = arguments.length > 3 ? oe.call(arguments, 2) : t),
      typeof n == "function" && n.defaultProps != null
  ) for (o in n.defaultProps) c[o] === void 0 && (c[o] = n.defaultProps[o]);
  return Y(n, c, r, l, null);
}
f(Jn, "le");
function Y(n, e, t, r, l) {
  var o = {
    type: n,
    props: e,
    key: t,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: l ?? ++en,
  };
  return l == null && b.vnode != null && b.vnode(o), o;
}
f(Y, "D");
function re(n) {
  return n.children;
}
f(re, "I");
function ee(n, e) {
  this.props = n, this.context = e;
}
f(ee, "N");
function ne(n, e) {
  if (e == null) return n.__ ? ne(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var t; e < n.__k.length; e++) {
    if ((t = n.__k[e]) != null && t.__e != null) return t.__e;
  }
  return typeof n.type == "function" ? ne(n) : null;
}
f(ne, "W");
function on(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++) {
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    }
    return on(n);
  }
}
f(on, "Y");
function Xe(n) {
  (!n.__d && (n.__d = !0) && I.push(n) && !te.__r++ ||
    Je !== b.debounceRendering) && ((Je = b.debounceRendering) || nn)(te);
}
f(Xe, "O");
function te() {
  var n, e, t, r, l, o, c, p, u;
  for (I.sort(ke); n = I.shift();) {
    n.__d &&
      (e = I.length,
        r = void 0,
        l = void 0,
        o = void 0,
        p = (c = (t = n).__v).__e,
        (u = t.__P) &&
        (r = [],
          l = [],
          (o = N({}, c)).__v = c.__v + 1,
          xe(
            u,
            c,
            o,
            t.__n,
            u.ownerSVGElement !== void 0,
            c.__h != null ? [p] : null,
            r,
            p ?? ne(c),
            c.__h,
            l,
          ),
          sn(r, c, l),
          c.__e != p && on(c)),
        I.length > e && I.sort(ke));
  }
  te.__r = 0;
}
f(te, "H");
function rn(n, e, t, r, l, o, c, p, u, g, d) {
  var _,
    v,
    s,
    i,
    a,
    T,
    h,
    y,
    C,
    x,
    m = 0,
    E = r && r.__k || tn,
    w = E.length,
    U = w,
    k = e.length;
  for (t.__k = [], _ = 0; _ < k; _++) {
    (i =
          t.__k[_] =
            (i = e[_]) == null || typeof i == "boolean" ||
              typeof i == "function"
              ? null
              : typeof i == "string" || typeof i == "number" ||
                  typeof i == "bigint"
              ? Y(null, i, null, null, i)
              : be(i)
              ? Y(re, { children: i }, null, null, null)
              : i.__b > 0
              ? Y(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
              : i) != null &&
      (i.__ = t,
        i.__b = t.__b + 1,
        (y = Xn(i, E, h = _ + m, U)) === -1
          ? s = V
          : (s = E[y] || V, E[y] = void 0, U--),
        xe(n, i, s, l, o, c, p, u, g, d),
        a = i.__e,
        (v = i.ref) && s.ref != v &&
        (s.ref && Ce(s.ref, null, i), d.push(v, i.__c || a, i)),
        a != null &&
        (T == null && (T = a),
          x = !(C = s === V || s.__v === null) && y === h,
          C
            ? y == -1 && m--
            : y !== h && (y === h + 1
              ? (m++, x = !0)
              : y > h
              ? U > k - h ? (m += y - h, x = !0) : m--
              : m = y < h && y == h - 1 ? y - h : 0),
          h = _ + m,
          x = x || y == _ && !C,
          typeof i.type != "function" || y === h && s.__k !== i.__k
            ? typeof i.type == "function" || x
              ? i.__d !== void 0
                ? (u = i.__d, i.__d = void 0)
                : u = a.nextSibling
              : u = un(n, a, u)
            : u = ln(i, u, n),
          typeof t.type == "function" && (t.__d = u)));
  }
  for (t.__e = T, _ = w; _--;) {
    E[_] != null &&
      (typeof t.type == "function" && E[_].__e != null && E[_].__e == t.__d &&
        (t.__d = E[_].__e.nextSibling),
        cn(E[_], E[_]));
  }
}
f(rn, "Z");
function ln(n, e, t) {
  for (var r, l = n.__k, o = 0; l && o < l.length; o++) {
    (r = l[o]) &&
      (r.__ = n,
        e = typeof r.type == "function" ? ln(r, e, t) : un(t, r.__e, e));
  }
  return e;
}
f(ln, "ee");
function un(n, e, t) {
  return t == null || t.parentNode !== n
    ? n.insertBefore(e, null)
    : e == t && e.parentNode != null || n.insertBefore(e, t),
    e.nextSibling;
}
f(un, "te");
function Xn(n, e, t, r) {
  var l = n.key, o = n.type, c = t - 1, p = t + 1, u = e[t];
  if (u === null || u && l == u.key && o === u.type) return t;
  if (r > (u != null ? 1 : 0)) {
    for (; c >= 0 || p < e.length;) {
      if (c >= 0) {
        if ((u = e[c]) && l == u.key && o === u.type) return c;
        c--;
      }
      if (p < e.length) {
        if ((u = e[p]) && l == u.key && o === u.type) return p;
        p++;
      }
    }
  }
  return -1;
}
f(Xn, "se");
function Zn(n, e, t, r, l) {
  var o;
  for (o in t) {
    o === "children" || o === "key" || o in e || _e(n, o, null, t[o], r);
  }
  for (o in e) {
    l && typeof e[o] != "function" || o === "children" || o === "key" ||
      o === "value" || o === "checked" || t[o] === e[o] ||
      _e(n, o, e[o], t[o], r);
  }
}
f(Zn, "ce");
function Ze(n, e, t) {
  e[0] === "-"
    ? n.setProperty(e, t ?? "")
    : n[e] = t == null ? "" : typeof t != "number" || Kn.test(e) ? t : t + "px";
}
f(Ze, "z");
function _e(n, e, t, r, l) {
  var o;
  e: if (e === "style") {
    if (typeof t == "string") n.style.cssText = t;
    else {
      if (typeof r == "string" && (n.style.cssText = r = ""), r) {
        for (e in r) t && e in t || Ze(n.style, e, "");
      }
      if (t) for (e in t) r && t[e] === r[e] || Ze(n.style, e, t[e]);
    }
  } else if (e[0] === "o" && e[1] === "n") {
    o = e !== (e = e.replace(/Capture$/, "")),
      e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2),
      n.l || (n.l = {}),
      n.l[e + o] = t,
      t
        ? r || n.addEventListener(e, o ? Ye : Qe, o)
        : n.removeEventListener(e, o ? Ye : Qe, o);
  } else if (e !== "dangerouslySetInnerHTML") {
    if (l) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      e !== "width" && e !== "height" && e !== "href" && e !== "list" &&
      e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" &&
      e !== "colSpan" && e in n
    ) {
      try {
        n[e] = t ?? "";
        break e;
      } catch {}
    }
    typeof t == "function" ||
      (t == null || t === !1 && e[4] !== "-"
        ? n.removeAttribute(e)
        : n.setAttribute(e, t));
  }
}
f(_e, "A");
function Qe(n) {
  return this.l[n.type + !1](b.event ? b.event(n) : n);
}
f(Qe, "G");
function Ye(n) {
  return this.l[n.type + !0](b.event ? b.event(n) : n);
}
f(Ye, "V");
function xe(n, e, t, r, l, o, c, p, u, g) {
  var d, _, v, s, i, a, T, h, y, C, x, m, E, w, U, k = e.type;
  if (e.constructor !== void 0) return null;
  t.__h != null && (u = t.__h, p = e.__e = t.__e, e.__h = null, o = [p]),
    (d = b.__b) && d(e);
  try {
    e: if (typeof k == "function") {
      if (
        h = e.props,
          y = (d = k.contextType) && r[d.__c],
          C = d ? y ? y.props.value : d.__ : r,
          t.__c
            ? T = (_ = e.__c = t.__c).__ = _.__E
            : ("prototype" in k && k.prototype.render
              ? e.__c = _ = new k(h, C)
              : (e.__c = _ = new ee(h, C), _.constructor = k, _.render = Yn),
              y && y.sub(_),
              _.props = h,
              _.state || (_.state = {}),
              _.context = C,
              _.__n = r,
              v = _.__d = !0,
              _.__h = [],
              _._sb = []),
          _.__s == null && (_.__s = _.state),
          k.getDerivedStateFromProps != null &&
          (_.__s == _.state && (_.__s = N({}, _.__s)),
            N(_.__s, k.getDerivedStateFromProps(h, _.__s))),
          s = _.props,
          i = _.state,
          _.__v = e,
          v
      ) {
        k.getDerivedStateFromProps == null && _.componentWillMount != null &&
        _.componentWillMount(),
          _.componentDidMount != null && _.__h.push(_.componentDidMount);
      } else {
        if (
          k.getDerivedStateFromProps == null && h !== s &&
          _.componentWillReceiveProps != null &&
          _.componentWillReceiveProps(h, C),
            !_.__e &&
            (_.shouldComponentUpdate != null &&
                _.shouldComponentUpdate(h, _.__s, C) === !1 || e.__v === t.__v)
        ) {
          for (
            e.__v !== t.__v && (_.props = h, _.state = _.__s, _.__d = !1),
              e.__e = t.__e,
              e.__k = t.__k,
              e.__k.forEach(function (L) {
                L && (L.__ = e);
              }),
              x = 0;
            x < _._sb.length;
            x++
          ) _.__h.push(_._sb[x]);
          _._sb = [], _.__h.length && c.push(_);
          break e;
        }
        _.componentWillUpdate != null && _.componentWillUpdate(h, _.__s, C),
          _.componentDidUpdate != null && _.__h.push(function () {
            _.componentDidUpdate(s, i, a);
          });
      }
      if (
        _.context = C,
          _.props = h,
          _.__P = n,
          _.__e = !1,
          m = b.__r,
          E = 0,
          "prototype" in k && k.prototype.render
      ) {
        for (
          _.state = _.__s,
            _.__d = !1,
            m && m(e),
            d = _.render(_.props, _.state, _.context),
            w = 0;
          w < _._sb.length;
          w++
        ) _.__h.push(_._sb[w]);
        _._sb = [];
      } else {do _.__d = !1,
          m && m(e),
          d = _.render(_.props, _.state, _.context),
          _.state = _.__s; while (_.__d && ++E < 25);}
      _.state = _.__s,
        _.getChildContext != null && (r = N(N({}, r), _.getChildContext())),
        v || _.getSnapshotBeforeUpdate == null ||
        (a = _.getSnapshotBeforeUpdate(s, i)),
        rn(
          n,
          be(
              U = d != null && d.type === re && d.key == null
                ? d.props.children
                : d,
            )
            ? U
            : [U],
          e,
          t,
          r,
          l,
          o,
          c,
          p,
          u,
          g,
        ),
        _.base = e.__e,
        e.__h = null,
        _.__h.length && c.push(_),
        T && (_.__E = _.__ = null);
    } else {o == null && e.__v === t.__v
        ? (e.__k = t.__k, e.__e = t.__e)
        : e.__e = Qn(t.__e, e, t, r, l, o, c, u, g);}
    (d = b.diffed) && d(e);
  } catch (L) {
    e.__v = null,
      (u || o != null) && (e.__e = p, e.__h = !!u, o[o.indexOf(p)] = null),
      b.__e(L, e, t);
  }
}
f(xe, "R");
function sn(n, e, t) {
  for (var r = 0; r < t.length; r++) Ce(t[r], t[++r], t[++r]);
  b.__c && b.__c(e, n),
    n.some(function (l) {
      try {
        n = l.__h,
          l.__h = [],
          n.some(function (o) {
            o.call(l);
          });
      } catch (o) {
        b.__e(o, l.__v);
      }
    });
}
f(sn, "ne");
function Qn(n, e, t, r, l, o, c, p, u) {
  var g, d, _, v = t.props, s = e.props, i = e.type, a = 0;
  if (i === "svg" && (l = !0), o != null) {
    for (; a < o.length; a++) {
      if (
        (g = o[a]) && "setAttribute" in g == !!i &&
        (i ? g.localName === i : g.nodeType === 3)
      ) {
        n = g, o[a] = null;
        break;
      }
    }
  }
  if (n == null) {
    if (i === null) return document.createTextNode(s);
    n = l
      ? document.createElementNS("http://www.w3.org/2000/svg", i)
      : document.createElement(i, s.is && s),
      o = null,
      p = !1;
  }
  if (i === null) v === s || p && n.data === s || (n.data = s);
  else {
    if (
      o = o && oe.call(n.childNodes),
        d = (v = t.props || V).dangerouslySetInnerHTML,
        _ = s.dangerouslySetInnerHTML,
        !p
    ) {
      if (o != null) {
        for (
          v = {}, a = 0;
          a < n.attributes.length;
          a++
        ) v[n.attributes[a].name] = n.attributes[a].value;
      }
      (_ || d) &&
        (_ && (d && _.__html == d.__html || _.__html === n.innerHTML) ||
          (n.innerHTML = _ && _.__html || ""));
    }
    if (Zn(n, s, v, l, p), _) e.__k = [];
    else if (
      rn(
        n,
        be(a = e.props.children) ? a : [a],
        e,
        t,
        r,
        l && i !== "foreignObject",
        o,
        c,
        o ? o[0] : t.__k && ne(t, 0),
        p,
        u,
      ), o != null
    ) for (a = o.length; a--;) o[a] != null && _n(o[a]);
    p ||
      ("value" in s && (a = s.value) !== void 0 &&
        (a !== n.value || i === "progress" && !a ||
          i === "option" && a !== v.value) &&
        _e(n, "value", a, v.value, !1),
        "checked" in s && (a = s.checked) !== void 0 && a !== n.checked &&
        _e(n, "checked", a, v.checked, !1));
  }
  return n;
}
f(Qn, "ue");
function Ce(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (r) {
    b.__e(r, t);
  }
}
f(Ce, "$");
function cn(n, e, t) {
  var r, l;
  if (
    b.unmount && b.unmount(n),
      (r = n.ref) && (r.current && r.current !== n.__e || Ce(r, null, e)),
      (r = n.__c) != null
  ) {
    if (r.componentWillUnmount) {
      try {
        r.componentWillUnmount();
      } catch (o) {
        b.__e(o, e);
      }
    }
    r.base = r.__P = null, n.__c = void 0;
  }
  if (r = n.__k) {
    for (l = 0; l < r.length; l++) {
      r[l] && cn(r[l], e, t || typeof n.type != "function");
    }
  }
  t || n.__e == null || _n(n.__e), n.__ = n.__e = n.__d = void 0;
}
f(cn, "_e");
function Yn(n, e, t) {
  return this.constructor(n, t);
}
f(Yn, "fe");
function le(n, e, t) {
  var r, l, o, c;
  b.__ && b.__(n, e),
    l = (r = typeof t == "function") ? null : t && t.__k || e.__k,
    o = [],
    c = [],
    xe(
      e,
      n = (!r && t || e).__k = Jn(re, null, [n]),
      l || V,
      V,
      e.ownerSVGElement !== void 0,
      !r && t ? [t] : l ? null : e.firstChild ? oe.call(e.childNodes) : null,
      o,
      !r && t ? t : l ? l.__e : e.firstChild,
      r,
      c,
    ),
    sn(o, n, c);
}
f(le, "pe");
function ie(n, e) {
  le(n, e, ie);
}
f(ie, "ae");
oe = tn.slice,
  b = {
    __e: function (n, e, t, r) {
      for (var l, o, c; e = e.__;) {
        if ((l = e.__c) && !l.__) {
          try {
            if (
              (o = l.constructor) && o.getDerivedStateFromError != null &&
              (l.setState(o.getDerivedStateFromError(n)), c = l.__d),
                l.componentDidCatch != null &&
                (l.componentDidCatch(n, r || {}), c = l.__d),
                c
            ) return l.__E = l;
          } catch (p) {
            n = p;
          }
        }
      }
      throw n;
    },
  },
  en = 0,
  Gn = f(function (n) {
    return n != null && n.constructor === void 0;
  }, "oe"),
  ee.prototype.setState = function (n, e) {
    var t;
    t = this.__s != null && this.__s !== this.state
      ? this.__s
      : this.__s = N({}, this.state),
      typeof n == "function" && (n = n(N({}, t), this.props)),
      n && N(t, n),
      n != null && this.__v && (e && this._sb.push(e), Xe(this));
  },
  ee.prototype.forceUpdate = function (n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), Xe(this));
  },
  ee.prototype.render = re,
  I = [],
  nn = typeof Promise == "function"
    ? Promise.prototype.then.bind(Promise.resolve())
    : setTimeout,
  ke = f(function (n, e) {
    return n.__v.__b - e.__v.__b;
  }, "B"),
  te.__r = 0,
  qn = 0;
var O,
  H,
  Se,
  an,
  j = 0,
  mn = [],
  ue = [],
  fn = b.__b,
  pn = b.__r,
  dn = b.diffed,
  hn = b.__c,
  vn = b.unmount;
function we(n, e) {
  b.__h && b.__h(H, n, j || e), j = 0;
  var t = H.__H || (H.__H = { __: [], __h: [] });
  return n >= t.__.length && t.__.push({ __V: ue }), t.__[n];
}
f(we, "l");
function B(n) {
  return j = 1, et(bn, n);
}
f(B, "k");
function et(n, e, t) {
  var r = we(O++, 2);
  if (
    r.t = n,
      !r.__c && (r.__ = [t ? t(e) : bn(void 0, e), function (p) {
        var u = r.__N ? r.__N[0] : r.__[0], g = r.t(u, p);
        u !== g && (r.__N = [g, r.__[1]], r.__c.setState({}));
      }],
        r.__c = H,
        !H.u)
  ) {
    var l = f(function (p, u, g) {
      if (!r.__c.__H) return !0;
      var d = r.__c.__H.__.filter(function (v) {
        return v.__c;
      });
      if (
        d.every(function (v) {
          return !v.__N;
        })
      ) return !o || o.call(this, p, u, g);
      var _ = !1;
      return d.forEach(function (v) {
        if (v.__N) {
          var s = v.__[0];
          v.__ = v.__N, v.__N = void 0, s !== v.__[0] && (_ = !0);
        }
      }),
        !(!_ && r.__c.props === p) && (!o || o.call(this, p, u, g));
    }, "i");
    H.u = !0;
    var o = H.shouldComponentUpdate, c = H.componentWillUpdate;
    H.componentWillUpdate = function (p, u, g) {
      if (this.__e) {
        var d = o;
        o = void 0, l(p, u, g), o = d;
      }
      c && c.call(this, p, u, g);
    }, H.shouldComponentUpdate = l;
  }
  return r.__N || r.__;
}
f(et, "B");
function z(n, e) {
  var t = we(O++, 3);
  !b.__s && kn(t.__H, e) && (t.__ = n, t.i = e, H.__H.__h.push(t));
}
f(z, "j");
function Pe(n) {
  return j = 5,
    gn(function () {
      return { current: n };
    }, []);
}
f(Pe, "w");
function gn(n, e) {
  var t = we(O++, 7);
  return kn(t.__H, e) ? (t.__V = n(), t.i = e, t.__h = n, t.__V) : t.__;
}
f(gn, "T");
function G(n, e) {
  return j = 8,
    gn(function () {
      return n;
    }, e);
}
f(G, "L");
function nt() {
  for (var n; n = mn.shift();) {
    if (n.__P && n.__H) {
      try {
        n.__H.__h.forEach(se), n.__H.__h.forEach(Ee), n.__H.__h = [];
      } catch (e) {
        n.__H.__h = [], b.__e(e, n.__v);
      }
    }
  }
}
f(nt, "R");
b.__b = function (n) {
  H = null, fn && fn(n);
},
  b.__r = function (n) {
    pn && pn(n), O = 0;
    var e = (H = n.__c).__H;
    e && (Se === H
      ? (e.__h = [],
        H.__h = [],
        e.__.forEach(function (t) {
          t.__N && (t.__ = t.__N), t.__V = ue, t.__N = t.i = void 0;
        }))
      : (e.__h.forEach(se), e.__h.forEach(Ee), e.__h = [], O = 0)), Se = H;
  },
  b.diffed = function (n) {
    dn && dn(n);
    var e = n.__c;
    e && e.__H &&
    (e.__H.__h.length &&
      (mn.push(e) !== 1 && an === b.requestAnimationFrame ||
        ((an = b.requestAnimationFrame) || tt)(nt)),
      e.__H.__.forEach(function (t) {
        t.i && (t.__H = t.i),
          t.__V !== ue && (t.__ = t.__V),
          t.i = void 0,
          t.__V = ue;
      })), Se = H = null;
  },
  b.__c = function (n, e) {
    e.some(function (t) {
      try {
        t.__h.forEach(se),
          t.__h = t.__h.filter(function (r) {
            return !r.__ || Ee(r);
          });
      } catch (r) {
        e.some(function (l) {
          l.__h && (l.__h = []);
        }),
          e = [],
          b.__e(r, t.__v);
      }
    }), hn && hn(n, e);
  },
  b.unmount = function (n) {
    vn && vn(n);
    var e, t = n.__c;
    t && t.__H && (t.__H.__.forEach(function (r) {
      try {
        se(r);
      } catch (l) {
        e = l;
      }
    }),
      t.__H = void 0,
      e && b.__e(e, t.__v));
  };
var yn = typeof requestAnimationFrame == "function";
function tt(n) {
  var e,
    t = f(function () {
      clearTimeout(r), yn && cancelAnimationFrame(e), setTimeout(n);
    }, "u"),
    r = setTimeout(t, 100);
  yn && (e = requestAnimationFrame(t));
}
f(tt, "S");
function se(n) {
  var e = H, t = n.__c;
  typeof t == "function" && (n.__c = void 0, t()), H = e;
}
f(se, "d");
function Ee(n) {
  var e = H;
  n.__c = n.__(), H = e;
}
f(Ee, "E");
function kn(n, e) {
  return !n || n.length !== e.length || e.some(function (t, r) {
    return t !== n[r];
  });
}
f(kn, "y");
function bn(n, e) {
  return typeof e == "function" ? e(n) : e;
}
f(bn, "U");
var F = {
  container: "_container_f9lkg_1",
  box: "_box_f9lkg_9",
  flex: "_flex_f9lkg_16",
  songItem: "_songItem_f9lkg_24",
  title: "_title_f9lkg_28",
  "autoplay-container": "_autoplay-container_f9lkg_33",
  "autoplay-label": "_autoplay-label_f9lkg_40",
  toggle_input: "_toggle_input_f9lkg_45",
  toggle_label: "_toggle_label_f9lkg_52",
  "isearch-container": "_isearch-container_f9lkg_85",
  "isearch-label": "_isearch-label_f9lkg_89",
  "close-btn": "_close-btn_f9lkg_93",
  overlay: "_overlay_f9lkg_102",
  "overlay-iframe": "_overlay-iframe_f9lkg_115",
  "overlay-inner": "_overlay-inner_f9lkg_120",
  scroll: "_scroll_f9lkg_126",
  fadein: "_fadein_f9lkg_1",
  link: "_link_f9lkg_145",
};
var Pn,
  P,
  Tn,
  _t,
  R,
  xn,
  Un,
  Ue,
  ot,
  ce = {},
  Dn = [],
  rt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  He = Array.isArray;
function W(n, e) {
  for (var t in e) n[t] = e[t];
  return n;
}
f(W, "C");
function Hn(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
f(Hn, "Y");
function Te(n, e, t, r, l) {
  var o = {
    type: n,
    props: e,
    key: t,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: l ?? ++Tn,
  };
  return l == null && P.vnode != null && P.vnode(o), o;
}
f(Te, "U");
function de(n) {
  return n.children;
}
f(de, "I");
function ae(n, e) {
  this.props = n, this.context = e;
}
f(ae, "W");
function q(n, e) {
  if (e == null) return n.__ ? q(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var t; e < n.__k.length; e++) {
    if ((t = n.__k[e]) != null && t.__e != null) return t.__d || t.__e;
  }
  return typeof n.type == "function" ? q(n) : null;
}
f(q, "L");
function Fn(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++) {
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    }
    return Fn(n);
  }
}
f(Fn, "Z");
function Cn(n) {
  (!n.__d && (n.__d = !0) && R.push(n) && !fe.__r++ ||
    xn !== P.debounceRendering) && ((xn = P.debounceRendering) || Un)(fe);
}
f(Cn, "B");
function fe() {
  var n, e, t, r, l, o, c, p, u;
  for (R.sort(Ue); n = R.shift();) {
    n.__d &&
      (e = R.length,
        r = void 0,
        l = void 0,
        o = void 0,
        p = (c = (t = n).__v).__e,
        (u = t.__P) &&
        (r = [],
          l = [],
          (o = W({}, c)).__v = c.__v + 1,
          Wn(
            u,
            c,
            o,
            t.__n,
            u.ownerSVGElement !== void 0,
            c.__h != null ? [p] : null,
            r,
            p ?? q(c),
            c.__h,
            l,
          ),
          ut(r, c, l),
          c.__e != p && Fn(c)),
        R.length > e && R.sort(Ue));
  }
  fe.__r = 0;
}
f(fe, "H");
function Ln(n, e, t, r, l, o, c, p, u, g, d) {
  var _,
    v,
    s,
    i,
    a,
    T,
    h,
    y,
    C,
    x = 0,
    m = r && r.__k || Dn,
    E = m.length,
    w = E,
    U = e.length;
  for (t.__k = [], _ = 0; _ < U; _++) {
    (i =
        t.__k[_] =
          (i = e[_]) == null || typeof i == "boolean" || typeof i == "function"
            ? null
            : typeof i == "string" || typeof i == "number" ||
                typeof i == "bigint"
            ? Te(null, i, null, null, i)
            : He(i)
            ? Te(de, { children: i }, null, null, null)
            : i.__b > 0
            ? Te(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
            : i) != null
      ? (i.__ = t,
        i.__b = t.__b + 1,
        (y = lt(i, m, h = _ + x, w)) === -1
          ? s = ce
          : (s = m[y] || ce, m[y] = void 0, w--),
        Wn(n, i, s, l, o, c, p, u, g, d),
        a = i.__e,
        (v = i.ref) && s.ref != v &&
        (s.ref && Fe(s.ref, null, i), d.push(v, i.__c || a, i)),
        a != null && (T == null && (T = a),
          (C = s === ce || s.__v === null)
            ? y == -1 && x--
            : y !== h && (y === h + 1
              ? x++
              : y > h
              ? w > U - h ? x += y - h : x--
              : x = y < h && y == h - 1 ? y - h : 0),
          h = _ + x,
          typeof i.type != "function" || y === h && s.__k !== i.__k
            ? typeof i.type == "function" || y === h && !C
              ? i.__d !== void 0
                ? (u = i.__d, i.__d = void 0)
                : u = a.nextSibling
              : u = Nn(n, a, u)
            : u = An(i, u, n),
          typeof t.type == "function" && (t.__d = u)))
      : (s = m[_]) && s.key == null && s.__e &&
        (s.__e == u && (s.__ = r, u = q(s)), De(s, s, !1), m[_] = null);
  }
  for (t.__e = T, _ = E; _--;) {
    m[_] != null &&
      (typeof t.type == "function" && m[_].__e != null && m[_].__e == t.__d &&
        (t.__d = m[_].__e.nextSibling),
        De(m[_], m[_]));
  }
}
f(Ln, "ee");
function An(n, e, t) {
  for (var r, l = n.__k, o = 0; l && o < l.length; o++) {
    (r = l[o]) &&
      (r.__ = n,
        e = typeof r.type == "function" ? An(r, e, t) : Nn(t, r.__e, e));
  }
  return e;
}
f(An, "te");
function Nn(n, e, t) {
  return t == null || t.parentNode !== n
    ? n.insertBefore(e, null)
    : e == t && e.parentNode != null || n.insertBefore(e, t),
    e.nextSibling;
}
f(Nn, "ne");
function lt(n, e, t, r) {
  var l = n.key, o = n.type, c = t - 1, p = t + 1, u = e[t];
  if (u === null || u && l == u.key && o === u.type) return t;
  if (r > (u != null ? 1 : 0)) {
    for (; c >= 0 || p < e.length;) {
      if (c >= 0) {
        if ((u = e[c]) && l == u.key && o === u.type) return c;
        c--;
      }
      if (p < e.length) {
        if ((u = e[p]) && l == u.key && o === u.type) return p;
        p++;
      }
    }
  }
  return -1;
}
f(lt, "se");
function it(n, e, t, r, l) {
  var o;
  for (o in t) {
    o === "children" || o === "key" || o in e || pe(n, o, null, t[o], r);
  }
  for (o in e) {
    l && typeof e[o] != "function" || o === "children" || o === "key" ||
      o === "value" || o === "checked" || t[o] === e[o] ||
      pe(n, o, e[o], t[o], r);
  }
}
f(it, "ce");
function Sn(n, e, t) {
  e[0] === "-"
    ? n.setProperty(e, t ?? "")
    : n[e] = t == null ? "" : typeof t != "number" || rt.test(e) ? t : t + "px";
}
f(Sn, "V");
function pe(n, e, t, r, l) {
  var o;
  e: if (e === "style") {
    if (typeof t == "string") n.style.cssText = t;
    else {
      if (typeof r == "string" && (n.style.cssText = r = ""), r) {
        for (e in r) t && e in t || Sn(n.style, e, "");
      }
      if (t) for (e in t) r && t[e] === r[e] || Sn(n.style, e, t[e]);
    }
  } else if (e[0] === "o" && e[1] === "n") {
    o = e !== (e = e.replace(/(PointerCapture)$|Capture$/, "$1")),
      e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2),
      n.l || (n.l = {}),
      n.l[e + o] = t,
      t
        ? r
          ? t.u = r.u
          : (t.u = Date.now(), n.addEventListener(e, o ? wn : En, o))
        : n.removeEventListener(e, o ? wn : En, o);
  } else if (e !== "dangerouslySetInnerHTML") {
    if (l) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      e !== "width" && e !== "height" && e !== "href" && e !== "list" &&
      e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" &&
      e !== "colSpan" && e !== "role" && e in n
    ) {
      try {
        n[e] = t ?? "";
        break e;
      } catch {}
    }
    typeof t == "function" ||
      (t == null || t === !1 && e[4] !== "-"
        ? n.removeAttribute(e)
        : n.setAttribute(e, t));
  }
}
f(pe, "A");
function En(n) {
  var e = this.l[n.type + !1];
  if (n.t) {
    if (n.t <= e.u) return;
    else n.t = Date.now();
  }
  return e(P.event ? P.event(n) : n);
}
f(En, "z");
function wn(n) {
  return this.l[n.type + !0](P.event ? P.event(n) : n);
}
f(wn, "q");
function Wn(n, e, t, r, l, o, c, p, u, g) {
  var d, _, v, s, i, a, T, h, y, C, x, m, E, w, U, k = e.type;
  if (e.constructor !== void 0) return null;
  t.__h != null && (u = t.__h, p = e.__e = t.__e, e.__h = null, o = [p]),
    (d = P.__b) && d(e);
  e: if (typeof k == "function") {
    try {
      if (
        h = e.props,
          y = (d = k.contextType) && r[d.__c],
          C = d ? y ? y.props.value : d.__ : r,
          t.__c
            ? T = (_ = e.__c = t.__c).__ = _.__E
            : ("prototype" in k && k.prototype.render
              ? e.__c = _ = new k(h, C)
              : (e.__c = _ = new ae(h, C), _.constructor = k, _.render = ct),
              y && y.sub(_),
              _.props = h,
              _.state || (_.state = {}),
              _.context = C,
              _.__n = r,
              v = _.__d = !0,
              _.__h = [],
              _._sb = []),
          _.__s == null && (_.__s = _.state),
          k.getDerivedStateFromProps != null &&
          (_.__s == _.state && (_.__s = W({}, _.__s)),
            W(_.__s, k.getDerivedStateFromProps(h, _.__s))),
          s = _.props,
          i = _.state,
          _.__v = e,
          v
      ) {
        k.getDerivedStateFromProps == null && _.componentWillMount != null &&
        _.componentWillMount(),
          _.componentDidMount != null && _.__h.push(_.componentDidMount);
      } else {
        if (
          k.getDerivedStateFromProps == null && h !== s &&
          _.componentWillReceiveProps != null &&
          _.componentWillReceiveProps(h, C),
            !_.__e &&
            (_.shouldComponentUpdate != null &&
                _.shouldComponentUpdate(h, _.__s, C) === !1 || e.__v === t.__v)
        ) {
          for (
            e.__v !== t.__v && (_.props = h, _.state = _.__s, _.__d = !1),
              e.__e = t.__e,
              e.__k = t.__k,
              e.__k.forEach(function (L) {
                L && (L.__ = e);
              }),
              x = 0;
            x < _._sb.length;
            x++
          ) _.__h.push(_._sb[x]);
          _._sb = [], _.__h.length && c.push(_);
          break e;
        }
        _.componentWillUpdate != null && _.componentWillUpdate(h, _.__s, C),
          _.componentDidUpdate != null && _.__h.push(function () {
            _.componentDidUpdate(s, i, a);
          });
      }
      if (
        _.context = C,
          _.props = h,
          _.__P = n,
          _.__e = !1,
          m = P.__r,
          E = 0,
          "prototype" in k && k.prototype.render
      ) {
        for (
          _.state = _.__s,
            _.__d = !1,
            m && m(e),
            d = _.render(_.props, _.state, _.context),
            w = 0;
          w < _._sb.length;
          w++
        ) _.__h.push(_._sb[w]);
        _._sb = [];
      } else {do _.__d = !1,
          m && m(e),
          d = _.render(_.props, _.state, _.context),
          _.state = _.__s; while (_.__d && ++E < 25);}
      _.state = _.__s,
        _.getChildContext != null && (r = W(W({}, r), _.getChildContext())),
        v || _.getSnapshotBeforeUpdate == null ||
        (a = _.getSnapshotBeforeUpdate(s, i)),
        Ln(
          n,
          He(
              U = d != null && d.type === de && d.key == null
                ? d.props.children
                : d,
            )
            ? U
            : [U],
          e,
          t,
          r,
          l,
          o,
          c,
          p,
          u,
          g,
        ),
        _.base = e.__e,
        e.__h = null,
        _.__h.length && c.push(_),
        T && (_.__E = _.__ = null);
    } catch (L) {
      e.__v = null,
        (u || o != null) && (e.__e = p, e.__h = !!u, o[o.indexOf(p)] = null),
        P.__e(L, e, t);
    }
  } else {o == null && e.__v === t.__v
      ? (e.__k = t.__k, e.__e = t.__e)
      : e.__e = st(t.__e, e, t, r, l, o, c, u, g);}
  (d = P.diffed) && d(e);
}
f(Wn, "R");
function ut(n, e, t) {
  for (var r = 0; r < t.length; r++) Fe(t[r], t[++r], t[++r]);
  P.__c && P.__c(e, n),
    n.some(function (l) {
      try {
        n = l.__h,
          l.__h = [],
          n.some(function (o) {
            o.call(l);
          });
      } catch (o) {
        P.__e(o, l.__v);
      }
    });
}
f(ut, "_e");
function st(n, e, t, r, l, o, c, p, u) {
  var g, d, _, v = t.props, s = e.props, i = e.type, a = 0;
  if (i === "svg" && (l = !0), o != null) {
    for (; a < o.length; a++) {
      if (
        (g = o[a]) && "setAttribute" in g == !!i &&
        (i ? g.localName === i : g.nodeType === 3)
      ) {
        n = g, o[a] = null;
        break;
      }
    }
  }
  if (n == null) {
    if (i === null) return document.createTextNode(s);
    n = l
      ? document.createElementNS("http://www.w3.org/2000/svg", i)
      : document.createElement(i, s.is && s),
      o = null,
      p = !1;
  }
  if (i === null) v === s || p && n.data === s || (n.data = s);
  else {
    if (
      o = o && Pn.call(n.childNodes),
        d = (v = t.props || ce).dangerouslySetInnerHTML,
        _ = s.dangerouslySetInnerHTML,
        !p
    ) {
      if (o != null) {
        for (
          v = {}, a = 0;
          a < n.attributes.length;
          a++
        ) v[n.attributes[a].name] = n.attributes[a].value;
      }
      (_ || d) &&
        (_ && (d && _.__html == d.__html || _.__html === n.innerHTML) ||
          (n.innerHTML = _ && _.__html || ""));
    }
    if (it(n, s, v, l, p), _) e.__k = [];
    else if (
      Ln(
        n,
        He(a = e.props.children) ? a : [a],
        e,
        t,
        r,
        l && i !== "foreignObject",
        o,
        c,
        o ? o[0] : t.__k && q(t, 0),
        p,
        u,
      ), o != null
    ) for (a = o.length; a--;) o[a] != null && Hn(o[a]);
    p ||
      ("value" in s && (a = s.value) !== void 0 &&
        (a !== n.value || i === "progress" && !a ||
          i === "option" && a !== v.value) &&
        pe(n, "value", a, v.value, !1),
        "checked" in s && (a = s.checked) !== void 0 && a !== n.checked &&
        pe(n, "checked", a, v.checked, !1));
  }
  return n;
}
f(st, "ue");
function Fe(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (r) {
    P.__e(r, t);
  }
}
f(Fe, "j");
function De(n, e, t) {
  var r, l;
  if (
    P.unmount && P.unmount(n),
      (r = n.ref) && (r.current && r.current !== n.__e || Fe(r, null, e)),
      (r = n.__c) != null
  ) {
    if (r.componentWillUnmount) {
      try {
        r.componentWillUnmount();
      } catch (o) {
        P.__e(o, e);
      }
    }
    r.base = r.__P = null, n.__c = void 0;
  }
  if (r = n.__k) {
    for (l = 0; l < r.length; l++) {
      r[l] && De(r[l], e, t || typeof n.type != "function");
    }
  }
  t || n.__e == null || Hn(n.__e), n.__ = n.__e = n.__d = void 0;
}
f(De, "O");
function ct(n, e, t) {
  return this.constructor(n, t);
}
f(ct, "fe");
Pn = Dn.slice,
  P = {
    __e: function (n, e, t, r) {
      for (var l, o, c; e = e.__;) {
        if ((l = e.__c) && !l.__) {
          try {
            if (
              (o = l.constructor) && o.getDerivedStateFromError != null &&
              (l.setState(o.getDerivedStateFromError(n)), c = l.__d),
                l.componentDidCatch != null &&
                (l.componentDidCatch(n, r || {}), c = l.__d),
                c
            ) return l.__E = l;
          } catch (p) {
            n = p;
          }
        }
      }
      throw n;
    },
  },
  Tn = 0,
  _t = f(function (n) {
    return n != null && n.constructor === void 0;
  }, "oe"),
  ae.prototype.setState = function (n, e) {
    var t;
    t = this.__s != null && this.__s !== this.state
      ? this.__s
      : this.__s = W({}, this.state),
      typeof n == "function" && (n = n(W({}, t), this.props)),
      n && W(t, n),
      n != null && this.__v && (e && this._sb.push(e), Cn(this));
  },
  ae.prototype.forceUpdate = function (n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), Cn(this));
  },
  ae.prototype.render = de,
  R = [],
  Un = typeof Promise == "function"
    ? Promise.prototype.then.bind(Promise.resolve())
    : setTimeout,
  Ue = f(function (n, e) {
    return n.__v.__b - e.__v.__b;
  }, "$"),
  fe.__r = 0,
  ot = 0;
var at = 0;
function S(n, e, t, r, l, o) {
  var c, p, u = {};
  for (p in e) p == "ref" ? c = e[p] : u[p] = e[p];
  var g = {
    type: n,
    props: u,
    key: t,
    ref: c,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: --at,
    __source: l,
    __self: o,
  };
  if (typeof n == "function" && (c = n.defaultProps)) {
    for (p in c) u[p] === void 0 && (u[p] = c[p]);
  }
  return P.vnode && P.vnode(g), g;
}
f(S, "v");
var ft = f(() => {
    let [n, e] = B([]),
      [t, r] = B(""),
      [l, o] = B(""),
      [c, p] = B(!1),
      u = Pe(null),
      g = G((s) => {
        s.key === "Escape" && o("");
      }, []),
      d = G((s) => {
        s.key === "/" && u.current && document.activeElement != u.current &&
          (s.preventDefault(), u.current.focus());
      }, []),
      _ = G((s) => {
        s.key === "Escape" && r("");
      }, []);
    z(() => {
      (async () => {
        let i = await (await fetch("/data.json")).json();
        e(i);
      })();
    }, []),
      z(
        () => (document.addEventListener("keydown", g, !1),
          document.addEventListener("keydown", d),
          () => {
            document.removeEventListener("keydown", g),
              document.removeEventListener("keydown", d);
          }),
        [],
      ),
      z(
        () => (document.addEventListener("keydown", _),
          () => document.removeEventListener("keydown", _)),
        [u],
      );
    let v = t.trim() == "" ? n : n.reduce((s, i) => {
      let a = i.songs.filter((T) => T.song.indexOf(t) != -1);
      return a.length > 0 && s.push({ archiveTitle: i.archiveTitle, songs: a }),
        s;
    }, []);
    return S("div", {
      class: F.container,
      children: [
        S("div", {
          class: F.box,
          children: [
            S("h1", {
              class: F.title,
              children:
                "\u732B\u9B54\u3057\u308D\u3042\u6B4C\u67A0\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8",
            }),
            S("div", {
              children: [
                S("div", {
                  class: F["autoplay-container"],
                  children: [
                    S("h2", {
                      class: F["autoplay-label"],
                      children: "\u81EA\u52D5\u518D\u751F",
                    }),
                    S("input", {
                      id: "autoplay",
                      class: F.toggle_input,
                      type: "checkbox",
                      onChange: (s) => p(s.currentTarget.checked),
                    }),
                    S("label", { for: "autoplay", class: F.toggle_label }),
                  ],
                }),
                S("div", {
                  class: F["isearch-container"],
                  children: [
                    S("label", {
                      for: "isearch",
                      class: F["isearch-label"],
                      children: "\u691C\u7D22",
                    }),
                    S("input", {
                      id: "isearch",
                      ref: u,
                      type: "text",
                      value: t,
                      onInput: (s) => r(s.currentTarget.value),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        l !== ""
          ? S("div", {
            id: "overlay",
            class: `${F.overlay} overlay-event`,
            onClick: () => {
              o("");
            },
            children: S("div", {
              class: F.flex,
              children: S("div", {
                id: "overlay-inner",
                class: F["overlay-inner"],
                children: [
                  S("iframe", {
                    id: "embed",
                    class: F["overlay-iframe"],
                    frameBorder: "0",
                    src: `${l}${c ? "&autoplay=1" : ""}`,
                  }),
                  S("button", {
                    id: "close-btn",
                    class: `${F["close-btn"]} overlay-event`,
                    type: "button",
                    onClick: () => {
                      o("");
                    },
                    children: "Close",
                  }),
                ],
              }),
            }),
          })
          : null,
        S("div", {
          class: `p-10 ${F.scroll}`,
          children: v.map((s) =>
            S("div", {
              class: "grid grid-cols-2",
              children: [
                S("p", { children: s.archiveTitle }),
                S("ul", {
                  children: s.songs.map((i) =>
                    S("li", {
                      class: F.songItem,
                      children: S("a", {
                        class: `${F.link} overlay-event`,
                        onClick: () => {
                          o(i.startURL);
                        },
                        children: i.song,
                      }),
                    })
                  ),
                }),
              ],
            })
          ),
        }),
        S("footer", {
          class: "info",
          children: S("p", { children: "\xA92023+ raa0121" }),
        }),
      ],
    });
  }, "App"),
  Le = S(ft, {});
document.getElementById("lume-live-reload")
  ? (console.log("CSR"), le(Le, document.getElementById("app")))
  : (console.log("SSR hydrate"), ie(Le, document.getElementById("app")));
