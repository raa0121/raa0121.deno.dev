var un = Object.defineProperty;
var c = (n, e) => un(n, "name", { value: e, configurable: !0 });
var Se,
  S,
  we,
  sn,
  N,
  ke,
  Pe,
  ie,
  an,
  q = {},
  Te = [],
  cn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  se = Array.isArray;
function A(n, e) {
  for (var t in e) n[t] = e[t];
  return n;
}
c(A, "C");
function De(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
c(De, "Y");
function le(n, e, t, r, l) {
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
    __v: l ?? ++we,
  };
  return l == null && S.vnode != null && S.vnode(o), o;
}
c(le, "U");
function R(n) {
  return n.children;
}
c(R, "I");
function z(n, e) {
  this.props = n, this.context = e;
}
c(z, "W");
function V(n, e) {
  if (e == null) return n.__ ? V(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var t; e < n.__k.length; e++) {
    if ((t = n.__k[e]) != null && t.__e != null) return t.__d || t.__e;
  }
  return typeof n.type == "function" ? V(n) : null;
}
c(V, "L");
function Ue(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++) {
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    }
    return Ue(n);
  }
}
c(Ue, "Z");
function be(n) {
  (!n.__d && (n.__d = !0) && N.push(n) && !G.__r++ ||
    ke !== S.debounceRendering) && ((ke = S.debounceRendering) || Pe)(G);
}
c(be, "B");
function G() {
  var n, e, t, r, l, o, a, f, u;
  for (N.sort(ie); n = N.shift();) {
    n.__d &&
      (e = N.length,
        r = void 0,
        l = void 0,
        o = void 0,
        f = (a = (t = n).__v).__e,
        (u = t.__P) &&
        (r = [],
          l = [],
          (o = A({}, a)).__v = a.__v + 1,
          Le(
            u,
            a,
            o,
            t.__n,
            u.ownerSVGElement !== void 0,
            a.__h != null ? [f] : null,
            r,
            f ?? V(a),
            a.__h,
            l,
          ),
          dn(r, a, l),
          a.__e != f && Ue(a)),
        N.length > e && N.sort(ie));
  }
  G.__r = 0;
}
c(G, "H");
function He(n, e, t, r, l, o, a, f, u, g, d) {
  var _,
    v,
    s,
    i,
    p,
    U,
    h,
    y,
    C,
    E = 0,
    k = r && r.__k || Te,
    P = k.length,
    D = P,
    H = e.length;
  for (t.__k = [], _ = 0; _ < H; _++) {
    (i =
        t.__k[_] =
          (i = e[_]) == null || typeof i == "boolean" || typeof i == "function"
            ? null
            : typeof i == "string" || typeof i == "number" ||
                typeof i == "bigint"
            ? le(null, i, null, null, i)
            : se(i)
            ? le(R, { children: i }, null, null, null)
            : i.__b > 0
            ? le(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
            : i) != null
      ? (i.__ = t,
        i.__b = t.__b + 1,
        (y = fn(i, k, h = _ + E, D)) === -1
          ? s = q
          : (s = k[y] || q, k[y] = void 0, D--),
        Le(n, i, s, l, o, a, f, u, g, d),
        p = i.__e,
        (v = i.ref) && s.ref != v &&
        (s.ref && ae(s.ref, null, i), d.push(v, i.__c || p, i)),
        p != null && (U == null && (U = p),
          (C = s === q || s.__v === null)
            ? y == -1 && E--
            : y !== h && (y === h + 1
              ? E++
              : y > h
              ? D > H - h ? E += y - h : E--
              : E = y < h && y == h - 1 ? y - h : 0),
          h = _ + E,
          typeof i.type != "function" || y === h && s.__k !== i.__k
            ? typeof i.type == "function" || y === h && !C
              ? i.__d !== void 0
                ? (u = i.__d, i.__d = void 0)
                : u = p.nextSibling
              : u = Ae(n, p, u)
            : u = Fe(i, u, n),
          typeof t.type == "function" && (t.__d = u)))
      : (s = k[_]) && s.key == null && s.__e &&
        (s.__e == u && (s.__ = r, u = V(s)), ue(s, s, !1), k[_] = null);
  }
  for (t.__e = U, _ = P; _--;) {
    k[_] != null &&
      (typeof t.type == "function" && k[_].__e != null && k[_].__e == t.__d &&
        (t.__d = k[_].__e.nextSibling),
        ue(k[_], k[_]));
  }
}
c(He, "ee");
function Fe(n, e, t) {
  for (var r, l = n.__k, o = 0; l && o < l.length; o++) {
    (r = l[o]) &&
      (r.__ = n,
        e = typeof r.type == "function" ? Fe(r, e, t) : Ae(t, r.__e, e));
  }
  return e;
}
c(Fe, "te");
function Ae(n, e, t) {
  return t == null || t.parentNode !== n
    ? n.insertBefore(e, null)
    : e == t && e.parentNode != null || n.insertBefore(e, t),
    e.nextSibling;
}
c(Ae, "ne");
function fn(n, e, t, r) {
  var l = n.key, o = n.type, a = t - 1, f = t + 1, u = e[t];
  if (u === null || u && l == u.key && o === u.type) return t;
  if (r > (u != null ? 1 : 0)) {
    for (; a >= 0 || f < e.length;) {
      if (a >= 0) {
        if ((u = e[a]) && l == u.key && o === u.type) return a;
        a--;
      }
      if (f < e.length) {
        if ((u = e[f]) && l == u.key && o === u.type) return f;
        f++;
      }
    }
  }
  return -1;
}
c(fn, "se");
function pn(n, e, t, r, l) {
  var o;
  for (o in t) {
    o === "children" || o === "key" || o in e || K(n, o, null, t[o], r);
  }
  for (o in e) {
    l && typeof e[o] != "function" || o === "children" || o === "key" ||
      o === "value" || o === "checked" || t[o] === e[o] ||
      K(n, o, e[o], t[o], r);
  }
}
c(pn, "ce");
function xe(n, e, t) {
  e[0] === "-"
    ? n.setProperty(e, t ?? "")
    : n[e] = t == null ? "" : typeof t != "number" || cn.test(e) ? t : t + "px";
}
c(xe, "V");
function K(n, e, t, r, l) {
  var o;
  e: if (e === "style") {
    if (typeof t == "string") n.style.cssText = t;
    else {
      if (typeof r == "string" && (n.style.cssText = r = ""), r) {
        for (e in r) t && e in t || xe(n.style, e, "");
      }
      if (t) for (e in t) r && t[e] === r[e] || xe(n.style, e, t[e]);
    }
  } else if (e[0] === "o" && e[1] === "n") {
    o = e !== (e = e.replace(/(PointerCapture)$|Capture$/, "$1")),
      e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2),
      n.l || (n.l = {}),
      n.l[e + o] = t,
      t
        ? r
          ? t.u = r.u
          : (t.u = Date.now(), n.addEventListener(e, o ? Ee : Ce, o))
        : n.removeEventListener(e, o ? Ee : Ce, o);
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
c(K, "A");
function Ce(n) {
  var e = this.l[n.type + !1];
  if (n.t) {
    if (n.t <= e.u) return;
    else n.t = Date.now();
  }
  return e(S.event ? S.event(n) : n);
}
c(Ce, "z");
function Ee(n) {
  return this.l[n.type + !0](S.event ? S.event(n) : n);
}
c(Ee, "q");
function Le(n, e, t, r, l, o, a, f, u, g) {
  var d, _, v, s, i, p, U, h, y, C, E, k, P, D, H, b = e.type;
  if (e.constructor !== void 0) return null;
  t.__h != null && (u = t.__h, f = e.__e = t.__e, e.__h = null, o = [f]),
    (d = S.__b) && d(e);
  e: if (typeof b == "function") {
    try {
      if (
        h = e.props,
          y = (d = b.contextType) && r[d.__c],
          C = d ? y ? y.props.value : d.__ : r,
          t.__c
            ? U = (_ = e.__c = t.__c).__ = _.__E
            : ("prototype" in b && b.prototype.render
              ? e.__c = _ = new b(h, C)
              : (e.__c = _ = new z(h, C), _.constructor = b, _.render = vn),
              y && y.sub(_),
              _.props = h,
              _.state || (_.state = {}),
              _.context = C,
              _.__n = r,
              v = _.__d = !0,
              _.__h = [],
              _._sb = []),
          _.__s == null && (_.__s = _.state),
          b.getDerivedStateFromProps != null &&
          (_.__s == _.state && (_.__s = A({}, _.__s)),
            A(_.__s, b.getDerivedStateFromProps(h, _.__s))),
          s = _.props,
          i = _.state,
          _.__v = e,
          v
      ) {
        b.getDerivedStateFromProps == null && _.componentWillMount != null &&
        _.componentWillMount(),
          _.componentDidMount != null && _.__h.push(_.componentDidMount);
      } else {
        if (
          b.getDerivedStateFromProps == null && h !== s &&
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
              e.__k.forEach(function (F) {
                F && (F.__ = e);
              }),
              E = 0;
            E < _._sb.length;
            E++
          ) _.__h.push(_._sb[E]);
          _._sb = [], _.__h.length && a.push(_);
          break e;
        }
        _.componentWillUpdate != null && _.componentWillUpdate(h, _.__s, C),
          _.componentDidUpdate != null && _.__h.push(function () {
            _.componentDidUpdate(s, i, p);
          });
      }
      if (
        _.context = C,
          _.props = h,
          _.__P = n,
          _.__e = !1,
          k = S.__r,
          P = 0,
          "prototype" in b && b.prototype.render
      ) {
        for (
          _.state = _.__s,
            _.__d = !1,
            k && k(e),
            d = _.render(_.props, _.state, _.context),
            D = 0;
          D < _._sb.length;
          D++
        ) _.__h.push(_._sb[D]);
        _._sb = [];
      } else {do _.__d = !1,
          k && k(e),
          d = _.render(_.props, _.state, _.context),
          _.state = _.__s; while (_.__d && ++P < 25);}
      _.state = _.__s,
        _.getChildContext != null && (r = A(A({}, r), _.getChildContext())),
        v || _.getSnapshotBeforeUpdate == null ||
        (p = _.getSnapshotBeforeUpdate(s, i)),
        He(
          n,
          se(
              H = d != null && d.type === R && d.key == null
                ? d.props.children
                : d,
            )
            ? H
            : [H],
          e,
          t,
          r,
          l,
          o,
          a,
          f,
          u,
          g,
        ),
        _.base = e.__e,
        e.__h = null,
        _.__h.length && a.push(_),
        U && (_.__E = _.__ = null);
    } catch (F) {
      e.__v = null,
        (u || o != null) && (e.__e = f, e.__h = !!u, o[o.indexOf(f)] = null),
        S.__e(F, e, t);
    }
  } else {o == null && e.__v === t.__v
      ? (e.__k = t.__k, e.__e = t.__e)
      : e.__e = hn(t.__e, e, t, r, l, o, a, u, g);}
  (d = S.diffed) && d(e);
}
c(Le, "R");
function dn(n, e, t) {
  for (var r = 0; r < t.length; r++) ae(t[r], t[++r], t[++r]);
  S.__c && S.__c(e, n),
    n.some(function (l) {
      try {
        n = l.__h,
          l.__h = [],
          n.some(function (o) {
            o.call(l);
          });
      } catch (o) {
        S.__e(o, l.__v);
      }
    });
}
c(dn, "_e");
function hn(n, e, t, r, l, o, a, f, u) {
  var g, d, _, v = t.props, s = e.props, i = e.type, p = 0;
  if (i === "svg" && (l = !0), o != null) {
    for (; p < o.length; p++) {
      if (
        (g = o[p]) && "setAttribute" in g == !!i &&
        (i ? g.localName === i : g.nodeType === 3)
      ) {
        n = g, o[p] = null;
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
      f = !1;
  }
  if (i === null) v === s || f && n.data === s || (n.data = s);
  else {
    if (
      o = o && Se.call(n.childNodes),
        d = (v = t.props || q).dangerouslySetInnerHTML,
        _ = s.dangerouslySetInnerHTML,
        !f
    ) {
      if (o != null) {
        for (
          v = {}, p = 0;
          p < n.attributes.length;
          p++
        ) v[n.attributes[p].name] = n.attributes[p].value;
      }
      (_ || d) &&
        (_ && (d && _.__html == d.__html || _.__html === n.innerHTML) ||
          (n.innerHTML = _ && _.__html || ""));
    }
    if (pn(n, s, v, l, f), _) e.__k = [];
    else if (
      He(
        n,
        se(p = e.props.children) ? p : [p],
        e,
        t,
        r,
        l && i !== "foreignObject",
        o,
        a,
        o ? o[0] : t.__k && V(t, 0),
        f,
        u,
      ), o != null
    ) for (p = o.length; p--;) o[p] != null && De(o[p]);
    f ||
      ("value" in s && (p = s.value) !== void 0 &&
        (p !== n.value || i === "progress" && !p ||
          i === "option" && p !== v.value) &&
        K(n, "value", p, v.value, !1),
        "checked" in s && (p = s.checked) !== void 0 && p !== n.checked &&
        K(n, "checked", p, v.checked, !1));
  }
  return n;
}
c(hn, "ue");
function ae(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (r) {
    S.__e(r, t);
  }
}
c(ae, "j");
function ue(n, e, t) {
  var r, l;
  if (
    S.unmount && S.unmount(n),
      (r = n.ref) && (r.current && r.current !== n.__e || ae(r, null, e)),
      (r = n.__c) != null
  ) {
    if (r.componentWillUnmount) {
      try {
        r.componentWillUnmount();
      } catch (o) {
        S.__e(o, e);
      }
    }
    r.base = r.__P = null, n.__c = void 0;
  }
  if (r = n.__k) {
    for (l = 0; l < r.length; l++) {
      r[l] && ue(r[l], e, t || typeof n.type != "function");
    }
  }
  t || n.__e == null || De(n.__e), n.__ = n.__e = n.__d = void 0;
}
c(ue, "O");
function vn(n, e, t) {
  return this.constructor(n, t);
}
c(vn, "fe");
Se = Te.slice,
  S = {
    __e: function (n, e, t, r) {
      for (var l, o, a; e = e.__;) {
        if ((l = e.__c) && !l.__) {
          try {
            if (
              (o = l.constructor) && o.getDerivedStateFromError != null &&
              (l.setState(o.getDerivedStateFromError(n)), a = l.__d),
                l.componentDidCatch != null &&
                (l.componentDidCatch(n, r || {}), a = l.__d),
                a
            ) return l.__E = l;
          } catch (f) {
            n = f;
          }
        }
      }
      throw n;
    },
  },
  we = 0,
  sn = c(function (n) {
    return n != null && n.constructor === void 0;
  }, "oe"),
  z.prototype.setState = function (n, e) {
    var t;
    t = this.__s != null && this.__s !== this.state
      ? this.__s
      : this.__s = A({}, this.state),
      typeof n == "function" && (n = n(A({}, t), this.props)),
      n && A(t, n),
      n != null && this.__v && (e && this._sb.push(e), be(this));
  },
  z.prototype.forceUpdate = function (n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), be(this));
  },
  z.prototype.render = R,
  N = [],
  Pe = typeof Promise == "function"
    ? Promise.prototype.then.bind(Promise.resolve())
    : setTimeout,
  ie = c(function (n, e) {
    return n.__v.__b - e.__v.__b;
  }, "$"),
  G.__r = 0,
  an = 0;
var Nn = Array.isArray;
var ee,
  m,
  Re,
  mn,
  W,
  Ne,
  Be,
  ce,
  yn,
  M = {},
  $e = [],
  gn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  fe = Array.isArray;
function L(n, e) {
  for (var t in e) n[t] = e[t];
  return n;
}
c(L, "S");
function je(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
c(je, "X");
function kn(n, e, t) {
  var r, l, o, a = {};
  for (o in e) o == "key" ? r = e[o] : o == "ref" ? l = e[o] : a[o] = e[o];
  if (
    arguments.length > 2 &&
    (a.children = arguments.length > 3 ? ee.call(arguments, 2) : t),
      typeof n == "function" && n.defaultProps != null
  ) for (o in n.defaultProps) a[o] === void 0 && (a[o] = n.defaultProps[o]);
  return J(n, a, r, l, null);
}
c(kn, "le");
function J(n, e, t, r, l) {
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
    __v: l ?? ++Re,
  };
  return l == null && m.vnode != null && m.vnode(o), o;
}
c(J, "D");
function ne(n) {
  return n.children;
}
c(ne, "I");
function X(n, e) {
  this.props = n, this.context = e;
}
c(X, "N");
function Z(n, e) {
  if (e == null) return n.__ ? Z(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var t; e < n.__k.length; e++) {
    if ((t = n.__k[e]) != null && t.__e != null) return t.__e;
  }
  return typeof n.type == "function" ? Z(n) : null;
}
c(Z, "W");
function Oe(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++) {
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    }
    return Oe(n);
  }
}
c(Oe, "Y");
function We(n) {
  (!n.__d && (n.__d = !0) && W.push(n) && !Q.__r++ ||
    Ne !== m.debounceRendering) && ((Ne = m.debounceRendering) || Be)(Q);
}
c(We, "O");
function Q() {
  var n, e, t, r, l, o, a, f, u;
  for (W.sort(ce); n = W.shift();) {
    n.__d &&
      (e = W.length,
        r = void 0,
        l = void 0,
        o = void 0,
        f = (a = (t = n).__v).__e,
        (u = t.__P) &&
        (r = [],
          l = [],
          (o = L({}, a)).__v = a.__v + 1,
          pe(
            u,
            a,
            o,
            t.__n,
            u.ownerSVGElement !== void 0,
            a.__h != null ? [f] : null,
            r,
            f ?? Z(a),
            a.__h,
            l,
          ),
          Ke(r, a, l),
          a.__e != f && Oe(a)),
        W.length > e && W.sort(ce));
  }
  Q.__r = 0;
}
c(Q, "H");
function qe(n, e, t, r, l, o, a, f, u, g, d) {
  var _,
    v,
    s,
    i,
    p,
    U,
    h,
    y,
    C,
    E,
    k = 0,
    P = r && r.__k || $e,
    D = P.length,
    H = D,
    b = e.length;
  for (t.__k = [], _ = 0; _ < b; _++) {
    (i =
          t.__k[_] =
            (i = e[_]) == null || typeof i == "boolean" ||
              typeof i == "function"
              ? null
              : typeof i == "string" || typeof i == "number" ||
                  typeof i == "bigint"
              ? J(null, i, null, null, i)
              : fe(i)
              ? J(ne, { children: i }, null, null, null)
              : i.__b > 0
              ? J(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
              : i) != null &&
      (i.__ = t,
        i.__b = t.__b + 1,
        (y = bn(i, P, h = _ + k, H)) === -1
          ? s = M
          : (s = P[y] || M, P[y] = void 0, H--),
        pe(n, i, s, l, o, a, f, u, g, d),
        p = i.__e,
        (v = i.ref) && s.ref != v &&
        (s.ref && de(s.ref, null, i), d.push(v, i.__c || p, i)),
        p != null &&
        (U == null && (U = p),
          E = !(C = s === M || s.__v === null) && y === h,
          C
            ? y == -1 && k--
            : y !== h && (y === h + 1
              ? (k++, E = !0)
              : y > h
              ? H > b - h ? (k += y - h, E = !0) : k--
              : k = y < h && y == h - 1 ? y - h : 0),
          h = _ + k,
          E = E || y == _ && !C,
          typeof i.type != "function" || y === h && s.__k !== i.__k
            ? typeof i.type == "function" || E
              ? i.__d !== void 0
                ? (u = i.__d, i.__d = void 0)
                : u = p.nextSibling
              : u = Ge(n, p, u)
            : u = ze(i, u, n),
          typeof t.type == "function" && (t.__d = u)));
  }
  for (t.__e = U, _ = D; _--;) {
    P[_] != null &&
      (typeof t.type == "function" && P[_].__e != null && P[_].__e == t.__d &&
        (t.__d = P[_].__e.nextSibling),
        Je(P[_], P[_]));
  }
}
c(qe, "Z");
function ze(n, e, t) {
  for (var r, l = n.__k, o = 0; l && o < l.length; o++) {
    (r = l[o]) &&
      (r.__ = n,
        e = typeof r.type == "function" ? ze(r, e, t) : Ge(t, r.__e, e));
  }
  return e;
}
c(ze, "ee");
function Ge(n, e, t) {
  return t == null || t.parentNode !== n
    ? n.insertBefore(e, null)
    : e == t && e.parentNode != null || n.insertBefore(e, t),
    e.nextSibling;
}
c(Ge, "te");
function bn(n, e, t, r) {
  var l = n.key, o = n.type, a = t - 1, f = t + 1, u = e[t];
  if (u === null || u && l == u.key && o === u.type) return t;
  if (r > (u != null ? 1 : 0)) {
    for (; a >= 0 || f < e.length;) {
      if (a >= 0) {
        if ((u = e[a]) && l == u.key && o === u.type) return a;
        a--;
      }
      if (f < e.length) {
        if ((u = e[f]) && l == u.key && o === u.type) return f;
        f++;
      }
    }
  }
  return -1;
}
c(bn, "se");
function xn(n, e, t, r, l) {
  var o;
  for (o in t) {
    o === "children" || o === "key" || o in e || Y(n, o, null, t[o], r);
  }
  for (o in e) {
    l && typeof e[o] != "function" || o === "children" || o === "key" ||
      o === "value" || o === "checked" || t[o] === e[o] ||
      Y(n, o, e[o], t[o], r);
  }
}
c(xn, "ce");
function Me(n, e, t) {
  e[0] === "-"
    ? n.setProperty(e, t ?? "")
    : n[e] = t == null ? "" : typeof t != "number" || gn.test(e) ? t : t + "px";
}
c(Me, "z");
function Y(n, e, t, r, l) {
  var o;
  e: if (e === "style") {
    if (typeof t == "string") n.style.cssText = t;
    else {
      if (typeof r == "string" && (n.style.cssText = r = ""), r) {
        for (e in r) t && e in t || Me(n.style, e, "");
      }
      if (t) for (e in t) r && t[e] === r[e] || Me(n.style, e, t[e]);
    }
  } else if (e[0] === "o" && e[1] === "n") {
    o = e !== (e = e.replace(/Capture$/, "")),
      e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2),
      n.l || (n.l = {}),
      n.l[e + o] = t,
      t
        ? r || n.addEventListener(e, o ? Ve : Ie, o)
        : n.removeEventListener(e, o ? Ve : Ie, o);
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
c(Y, "A");
function Ie(n) {
  return this.l[n.type + !1](m.event ? m.event(n) : n);
}
c(Ie, "G");
function Ve(n) {
  return this.l[n.type + !0](m.event ? m.event(n) : n);
}
c(Ve, "V");
function pe(n, e, t, r, l, o, a, f, u, g) {
  var d, _, v, s, i, p, U, h, y, C, E, k, P, D, H, b = e.type;
  if (e.constructor !== void 0) return null;
  t.__h != null && (u = t.__h, f = e.__e = t.__e, e.__h = null, o = [f]),
    (d = m.__b) && d(e);
  try {
    e: if (typeof b == "function") {
      if (
        h = e.props,
          y = (d = b.contextType) && r[d.__c],
          C = d ? y ? y.props.value : d.__ : r,
          t.__c
            ? U = (_ = e.__c = t.__c).__ = _.__E
            : ("prototype" in b && b.prototype.render
              ? e.__c = _ = new b(h, C)
              : (e.__c = _ = new X(h, C), _.constructor = b, _.render = En),
              y && y.sub(_),
              _.props = h,
              _.state || (_.state = {}),
              _.context = C,
              _.__n = r,
              v = _.__d = !0,
              _.__h = [],
              _._sb = []),
          _.__s == null && (_.__s = _.state),
          b.getDerivedStateFromProps != null &&
          (_.__s == _.state && (_.__s = L({}, _.__s)),
            L(_.__s, b.getDerivedStateFromProps(h, _.__s))),
          s = _.props,
          i = _.state,
          _.__v = e,
          v
      ) {
        b.getDerivedStateFromProps == null && _.componentWillMount != null &&
        _.componentWillMount(),
          _.componentDidMount != null && _.__h.push(_.componentDidMount);
      } else {
        if (
          b.getDerivedStateFromProps == null && h !== s &&
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
              e.__k.forEach(function (F) {
                F && (F.__ = e);
              }),
              E = 0;
            E < _._sb.length;
            E++
          ) _.__h.push(_._sb[E]);
          _._sb = [], _.__h.length && a.push(_);
          break e;
        }
        _.componentWillUpdate != null && _.componentWillUpdate(h, _.__s, C),
          _.componentDidUpdate != null && _.__h.push(function () {
            _.componentDidUpdate(s, i, p);
          });
      }
      if (
        _.context = C,
          _.props = h,
          _.__P = n,
          _.__e = !1,
          k = m.__r,
          P = 0,
          "prototype" in b && b.prototype.render
      ) {
        for (
          _.state = _.__s,
            _.__d = !1,
            k && k(e),
            d = _.render(_.props, _.state, _.context),
            D = 0;
          D < _._sb.length;
          D++
        ) _.__h.push(_._sb[D]);
        _._sb = [];
      } else {do _.__d = !1,
          k && k(e),
          d = _.render(_.props, _.state, _.context),
          _.state = _.__s; while (_.__d && ++P < 25);}
      _.state = _.__s,
        _.getChildContext != null && (r = L(L({}, r), _.getChildContext())),
        v || _.getSnapshotBeforeUpdate == null ||
        (p = _.getSnapshotBeforeUpdate(s, i)),
        qe(
          n,
          fe(
              H = d != null && d.type === ne && d.key == null
                ? d.props.children
                : d,
            )
            ? H
            : [H],
          e,
          t,
          r,
          l,
          o,
          a,
          f,
          u,
          g,
        ),
        _.base = e.__e,
        e.__h = null,
        _.__h.length && a.push(_),
        U && (_.__E = _.__ = null);
    } else {o == null && e.__v === t.__v
        ? (e.__k = t.__k, e.__e = t.__e)
        : e.__e = Cn(t.__e, e, t, r, l, o, a, u, g);}
    (d = m.diffed) && d(e);
  } catch (F) {
    e.__v = null,
      (u || o != null) && (e.__e = f, e.__h = !!u, o[o.indexOf(f)] = null),
      m.__e(F, e, t);
  }
}
c(pe, "R");
function Ke(n, e, t) {
  for (var r = 0; r < t.length; r++) de(t[r], t[++r], t[++r]);
  m.__c && m.__c(e, n),
    n.some(function (l) {
      try {
        n = l.__h,
          l.__h = [],
          n.some(function (o) {
            o.call(l);
          });
      } catch (o) {
        m.__e(o, l.__v);
      }
    });
}
c(Ke, "ne");
function Cn(n, e, t, r, l, o, a, f, u) {
  var g, d, _, v = t.props, s = e.props, i = e.type, p = 0;
  if (i === "svg" && (l = !0), o != null) {
    for (; p < o.length; p++) {
      if (
        (g = o[p]) && "setAttribute" in g == !!i &&
        (i ? g.localName === i : g.nodeType === 3)
      ) {
        n = g, o[p] = null;
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
      f = !1;
  }
  if (i === null) v === s || f && n.data === s || (n.data = s);
  else {
    if (
      o = o && ee.call(n.childNodes),
        d = (v = t.props || M).dangerouslySetInnerHTML,
        _ = s.dangerouslySetInnerHTML,
        !f
    ) {
      if (o != null) {
        for (
          v = {}, p = 0;
          p < n.attributes.length;
          p++
        ) v[n.attributes[p].name] = n.attributes[p].value;
      }
      (_ || d) &&
        (_ && (d && _.__html == d.__html || _.__html === n.innerHTML) ||
          (n.innerHTML = _ && _.__html || ""));
    }
    if (xn(n, s, v, l, f), _) e.__k = [];
    else if (
      qe(
        n,
        fe(p = e.props.children) ? p : [p],
        e,
        t,
        r,
        l && i !== "foreignObject",
        o,
        a,
        o ? o[0] : t.__k && Z(t, 0),
        f,
        u,
      ), o != null
    ) for (p = o.length; p--;) o[p] != null && je(o[p]);
    f ||
      ("value" in s && (p = s.value) !== void 0 &&
        (p !== n.value || i === "progress" && !p ||
          i === "option" && p !== v.value) &&
        Y(n, "value", p, v.value, !1),
        "checked" in s && (p = s.checked) !== void 0 && p !== n.checked &&
        Y(n, "checked", p, v.checked, !1));
  }
  return n;
}
c(Cn, "ue");
function de(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (r) {
    m.__e(r, t);
  }
}
c(de, "$");
function Je(n, e, t) {
  var r, l;
  if (
    m.unmount && m.unmount(n),
      (r = n.ref) && (r.current && r.current !== n.__e || de(r, null, e)),
      (r = n.__c) != null
  ) {
    if (r.componentWillUnmount) {
      try {
        r.componentWillUnmount();
      } catch (o) {
        m.__e(o, e);
      }
    }
    r.base = r.__P = null, n.__c = void 0;
  }
  if (r = n.__k) {
    for (l = 0; l < r.length; l++) {
      r[l] && Je(r[l], e, t || typeof n.type != "function");
    }
  }
  t || n.__e == null || je(n.__e), n.__ = n.__e = n.__d = void 0;
}
c(Je, "_e");
function En(n, e, t) {
  return this.constructor(n, t);
}
c(En, "fe");
function te(n, e, t) {
  var r, l, o, a;
  m.__ && m.__(n, e),
    l = (r = typeof t == "function") ? null : t && t.__k || e.__k,
    o = [],
    a = [],
    pe(
      e,
      n = (!r && t || e).__k = kn(ne, null, [n]),
      l || M,
      M,
      e.ownerSVGElement !== void 0,
      !r && t ? [t] : l ? null : e.firstChild ? ee.call(e.childNodes) : null,
      o,
      !r && t ? t : l ? l.__e : e.firstChild,
      r,
      a,
    ),
    Ke(o, n, a);
}
c(te, "pe");
function _e(n, e) {
  te(n, e, _e);
}
c(_e, "ae");
ee = $e.slice,
  m = {
    __e: function (n, e, t, r) {
      for (var l, o, a; e = e.__;) {
        if ((l = e.__c) && !l.__) {
          try {
            if (
              (o = l.constructor) && o.getDerivedStateFromError != null &&
              (l.setState(o.getDerivedStateFromError(n)), a = l.__d),
                l.componentDidCatch != null &&
                (l.componentDidCatch(n, r || {}), a = l.__d),
                a
            ) return l.__E = l;
          } catch (f) {
            n = f;
          }
        }
      }
      throw n;
    },
  },
  Re = 0,
  mn = c(function (n) {
    return n != null && n.constructor === void 0;
  }, "oe"),
  X.prototype.setState = function (n, e) {
    var t;
    t = this.__s != null && this.__s !== this.state
      ? this.__s
      : this.__s = L({}, this.state),
      typeof n == "function" && (n = n(L({}, t), this.props)),
      n && L(t, n),
      n != null && this.__v && (e && this._sb.push(e), We(this));
  },
  X.prototype.forceUpdate = function (n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), We(this));
  },
  X.prototype.render = ne,
  W = [],
  Be = typeof Promise == "function"
    ? Promise.prototype.then.bind(Promise.resolve())
    : setTimeout,
  ce = c(function (n, e) {
    return n.__v.__b - e.__v.__b;
  }, "B"),
  Q.__r = 0,
  yn = 0;
var B,
  w,
  he,
  Xe,
  $ = 0,
  _n = [],
  oe = [],
  Ze = m.__b,
  Qe = m.__r,
  Ye = m.diffed,
  en = m.__c,
  nn = m.unmount;
function me(n, e) {
  m.__h && m.__h(w, n, $ || e), $ = 0;
  var t = w.__H || (w.__H = { __: [], __h: [] });
  return n >= t.__.length && t.__.push({ __V: oe }), t.__[n];
}
c(me, "l");
function I(n) {
  return $ = 1, Sn(ln, n);
}
c(I, "k");
function Sn(n, e, t) {
  var r = me(B++, 2);
  if (
    r.t = n,
      !r.__c && (r.__ = [t ? t(e) : ln(void 0, e), function (f) {
        var u = r.__N ? r.__N[0] : r.__[0], g = r.t(u, f);
        u !== g && (r.__N = [g, r.__[1]], r.__c.setState({}));
      }],
        r.__c = w,
        !w.u)
  ) {
    var l = c(function (f, u, g) {
      if (!r.__c.__H) return !0;
      var d = r.__c.__H.__.filter(function (v) {
        return v.__c;
      });
      if (
        d.every(function (v) {
          return !v.__N;
        })
      ) return !o || o.call(this, f, u, g);
      var _ = !1;
      return d.forEach(function (v) {
        if (v.__N) {
          var s = v.__[0];
          v.__ = v.__N, v.__N = void 0, s !== v.__[0] && (_ = !0);
        }
      }),
        !(!_ && r.__c.props === f) && (!o || o.call(this, f, u, g));
    }, "i");
    w.u = !0;
    var o = w.shouldComponentUpdate, a = w.componentWillUpdate;
    w.componentWillUpdate = function (f, u, g) {
      if (this.__e) {
        var d = o;
        o = void 0, l(f, u, g), o = d;
      }
      a && a.call(this, f, u, g);
    }, w.shouldComponentUpdate = l;
  }
  return r.__N || r.__;
}
c(Sn, "B");
function j(n, e) {
  var t = me(B++, 3);
  !m.__s && rn(t.__H, e) && (t.__ = n, t.i = e, w.__H.__h.push(t));
}
c(j, "j");
function ye(n) {
  return $ = 5,
    on(function () {
      return { current: n };
    }, []);
}
c(ye, "w");
function on(n, e) {
  var t = me(B++, 7);
  return rn(t.__H, e) ? (t.__V = n(), t.i = e, t.__h = n, t.__V) : t.__;
}
c(on, "T");
function O(n, e) {
  return $ = 8,
    on(function () {
      return n;
    }, e);
}
c(O, "L");
function wn() {
  for (var n; n = _n.shift();) {
    if (n.__P && n.__H) {
      try {
        n.__H.__h.forEach(re), n.__H.__h.forEach(ve), n.__H.__h = [];
      } catch (e) {
        n.__H.__h = [], m.__e(e, n.__v);
      }
    }
  }
}
c(wn, "R");
m.__b = function (n) {
  w = null, Ze && Ze(n);
},
  m.__r = function (n) {
    Qe && Qe(n), B = 0;
    var e = (w = n.__c).__H;
    e && (he === w
      ? (e.__h = [],
        w.__h = [],
        e.__.forEach(function (t) {
          t.__N && (t.__ = t.__N), t.__V = oe, t.__N = t.i = void 0;
        }))
      : (e.__h.forEach(re), e.__h.forEach(ve), e.__h = [], B = 0)), he = w;
  },
  m.diffed = function (n) {
    Ye && Ye(n);
    var e = n.__c;
    e && e.__H &&
    (e.__H.__h.length &&
      (_n.push(e) !== 1 && Xe === m.requestAnimationFrame ||
        ((Xe = m.requestAnimationFrame) || Pn)(wn)),
      e.__H.__.forEach(function (t) {
        t.i && (t.__H = t.i),
          t.__V !== oe && (t.__ = t.__V),
          t.i = void 0,
          t.__V = oe;
      })), he = w = null;
  },
  m.__c = function (n, e) {
    e.some(function (t) {
      try {
        t.__h.forEach(re),
          t.__h = t.__h.filter(function (r) {
            return !r.__ || ve(r);
          });
      } catch (r) {
        e.some(function (l) {
          l.__h && (l.__h = []);
        }),
          e = [],
          m.__e(r, t.__v);
      }
    }), en && en(n, e);
  },
  m.unmount = function (n) {
    nn && nn(n);
    var e, t = n.__c;
    t && t.__H && (t.__H.__.forEach(function (r) {
      try {
        re(r);
      } catch (l) {
        e = l;
      }
    }),
      t.__H = void 0,
      e && m.__e(e, t.__v));
  };
var tn = typeof requestAnimationFrame == "function";
function Pn(n) {
  var e,
    t = c(function () {
      clearTimeout(r), tn && cancelAnimationFrame(e), setTimeout(n);
    }, "u"),
    r = setTimeout(t, 100);
  tn && (e = requestAnimationFrame(t));
}
c(Pn, "S");
function re(n) {
  var e = w, t = n.__c;
  typeof t == "function" && (n.__c = void 0, t()), w = e;
}
c(re, "d");
function ve(n) {
  var e = w;
  n.__c = n.__(), w = e;
}
c(ve, "E");
function rn(n, e) {
  return !n || n.length !== e.length || e.some(function (t, r) {
    return t !== n[r];
  });
}
c(rn, "y");
function ln(n, e) {
  return typeof e == "function" ? e(n) : e;
}
c(ln, "U");
var T = {
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
var Tn = 0;
function x(n, e, t, r, l, o) {
  var a, f, u = {};
  for (f in e) f == "ref" ? a = e[f] : u[f] = e[f];
  var g = {
    type: n,
    props: u,
    key: t,
    ref: a,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: --Tn,
    __source: l,
    __self: o,
  };
  if (typeof n == "function" && (a = n.defaultProps)) {
    for (f in a) u[f] === void 0 && (u[f] = a[f]);
  }
  return S.vnode && S.vnode(g), g;
}
c(x, "v");
var Dn = c(() => {
    let [n, e] = I([]),
      [t, r] = I(""),
      [l, o] = I(""),
      [a, f] = I(!1),
      u = ye(null),
      g = O((s) => {
        s.key === "Escape" && o("");
      }, []),
      d = O((s) => {
        s.key === "/" && u.current && document.activeElement != u.current &&
          (s.preventDefault(), u.current.focus());
      }, []),
      _ = O((s) => {
        s.key === "Escape" && r("");
      }, []);
    j(() => {
      (async () => {
        let i = await (await fetch("/data.json")).json();
        e(i);
      })();
    }, []),
      j(
        () => (document.addEventListener("keydown", g, !1),
          document.addEventListener("keydown", d),
          () => {
            document.removeEventListener("keydown", g),
              document.removeEventListener("keydown", d);
          }),
        [],
      ),
      j(
        () => (document.addEventListener("keydown", _),
          () => document.removeEventListener("keydown", _)),
        [u],
      );
    let v = t.trim() == "" ? n : n.reduce((s, i) => {
      let p = i.songs.filter((U) => U.song.indexOf(t) != -1);
      return p.length > 0 && s.push({ archiveTitle: i.archiveTitle, songs: p }),
        s;
    }, []);
    return x("div", {
      class: T.container,
      children: [
        x("div", {
          class: T.box,
          children: [
            x("h1", {
              class: T.title,
              children:
                "\u732B\u9B54\u3057\u308D\u3042\u6B4C\u67A0\u30BB\u30C3\u30C8\u30EA\u30B9\u30C8",
            }),
            x("div", {
              children: [
                x("div", {
                  class: T["autoplay-container"],
                  children: [
                    x("h2", {
                      class: T["autoplay-label"],
                      children: "\u81EA\u52D5\u518D\u751F",
                    }),
                    x("input", {
                      id: "autoplay",
                      class: T.toggle_input,
                      type: "checkbox",
                      onChange: (s) => f(s.currentTarget.checked),
                    }),
                    x("label", { for: "autoplay", class: T.toggle_label }),
                  ],
                }),
                x("div", {
                  class: T["isearch-container"],
                  children: [
                    x("label", {
                      for: "isearch",
                      class: T["isearch-label"],
                      children: "\u691C\u7D22",
                    }),
                    x("input", {
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
          ? x("div", {
            id: "overlay",
            class: `${T.overlay} overlay-event`,
            onClick: () => {
              o("");
            },
            children: x("div", {
              class: T.flex,
              children: x("div", {
                id: "overlay-inner",
                class: T["overlay-inner"],
                children: [
                  x("iframe", {
                    id: "embed",
                    class: T["overlay-iframe"],
                    frameBorder: "0",
                    src: `${l}${a ? "&autoplay=1" : ""}`,
                  }),
                  x("button", {
                    id: "close-btn",
                    class: `${T["close-btn"]} overlay-event`,
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
        x("div", {
          class: `p-10 ${T.scroll}`,
          children: v.map((s) =>
            x("div", {
              class: "grid grid-cols-2",
              children: [
                x("p", { children: s.archiveTitle }),
                x("ul", {
                  children: s.songs.map((i) =>
                    x("li", {
                      class: T.songItem,
                      children: x("a", {
                        class: `${T.link} overlay-event`,
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
        x("footer", {
          class: "info",
          children: x("p", { children: "\xA92023+ raa0121" }),
        }),
      ],
    });
  }, "App"),
  ge = x(Dn, {});
document.getElementById("lume-live-reload")
  ? (console.log("CSR"), te(ge, document.getElementById("app")))
  : (console.log("SSR hydrate"), _e(ge, document.getElementById("app")));
