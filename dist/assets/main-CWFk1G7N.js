function kb(l, o) {
    for (var r = 0; r < o.length; r++) {
        const c = o[r];
        if (typeof c != 'string' && !Array.isArray(c)) {
            for (const f in c)
                if (f !== 'default' && !(f in l)) {
                    const m = Object.getOwnPropertyDescriptor(c, f);
                    m && Object.defineProperty(l, f, m.get ? m : { enumerable: !0, get: () => c[f] });
                }
        }
    }
    return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
    const o = document.createElement('link').relList;
    if (o && o.supports && o.supports('modulepreload')) return;
    for (const f of document.querySelectorAll('link[rel="modulepreload"]')) c(f);
    new MutationObserver(f => {
        for (const m of f) if (m.type === 'childList') for (const p of m.addedNodes) p.tagName === 'LINK' && p.rel === 'modulepreload' && c(p);
    }).observe(document, { childList: !0, subtree: !0 });
    function r(f) {
        const m = {};
        return (
            f.integrity && (m.integrity = f.integrity),
            f.referrerPolicy && (m.referrerPolicy = f.referrerPolicy),
            f.crossOrigin === 'use-credentials'
                ? (m.credentials = 'include')
                : f.crossOrigin === 'anonymous'
                  ? (m.credentials = 'omit')
                  : (m.credentials = 'same-origin'),
            m
        );
    }
    function c(f) {
        if (f.ep) return;
        f.ep = !0;
        const m = r(f);
        fetch(f.href, m);
    }
})();
function tg(l) {
    return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, 'default') ? l.default : l;
}
var vu = { exports: {} },
    Vi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mp;
function zb() {
    if (mp) return Vi;
    mp = 1;
    var l = Symbol.for('react.transitional.element'),
        o = Symbol.for('react.fragment');
    function r(c, f, m) {
        var p = null;
        if ((m !== void 0 && (p = '' + m), f.key !== void 0 && (p = '' + f.key), 'key' in f)) {
            m = {};
            for (var v in f) v !== 'key' && (m[v] = f[v]);
        } else m = f;
        return ((f = m.ref), { $$typeof: l, type: c, key: p, ref: f !== void 0 ? f : null, props: m });
    }
    return ((Vi.Fragment = o), (Vi.jsx = r), (Vi.jsxs = r), Vi);
}
var hp;
function Db() {
    return (hp || ((hp = 1), (vu.exports = zb())), vu.exports);
}
var u = Db(),
    yu = { exports: {} },
    xe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pp;
function _b() {
    if (pp) return xe;
    pp = 1;
    var l = Symbol.for('react.transitional.element'),
        o = Symbol.for('react.portal'),
        r = Symbol.for('react.fragment'),
        c = Symbol.for('react.strict_mode'),
        f = Symbol.for('react.profiler'),
        m = Symbol.for('react.consumer'),
        p = Symbol.for('react.context'),
        v = Symbol.for('react.forward_ref'),
        y = Symbol.for('react.suspense'),
        g = Symbol.for('react.memo'),
        S = Symbol.for('react.lazy'),
        x = Symbol.for('react.activity'),
        T = Symbol.iterator;
    function M(E) {
        return E === null || typeof E != 'object' ? null : ((E = (T && E[T]) || E['@@iterator']), typeof E == 'function' ? E : null);
    }
    var R = {
            isMounted: function () {
                return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        },
        w = Object.assign,
        N = {};
    function L(E, q, F) {
        ((this.props = E), (this.context = q), (this.refs = N), (this.updater = F || R));
    }
    ((L.prototype.isReactComponent = {}),
        (L.prototype.setState = function (E, q) {
            if (typeof E != 'object' && typeof E != 'function' && E != null)
                throw Error('takes an object of state variables to update or a function which returns an object of state variables.');
            this.updater.enqueueSetState(this, E, q, 'setState');
        }),
        (L.prototype.forceUpdate = function (E) {
            this.updater.enqueueForceUpdate(this, E, 'forceUpdate');
        }));
    function B() {}
    B.prototype = L.prototype;
    function H(E, q, F) {
        ((this.props = E), (this.context = q), (this.refs = N), (this.updater = F || R));
    }
    var K = (H.prototype = new B());
    ((K.constructor = H), w(K, L.prototype), (K.isPureReactComponent = !0));
    var W = Array.isArray;
    function ne() {}
    var k = { H: null, A: null, T: null, S: null },
        G = Object.prototype.hasOwnProperty;
    function ae(E, q, F) {
        var P = F.ref;
        return { $$typeof: l, type: E, key: q, ref: P !== void 0 ? P : null, props: F };
    }
    function ee(E, q) {
        return ae(E.type, q, E.props);
    }
    function he(E) {
        return typeof E == 'object' && E !== null && E.$$typeof === l;
    }
    function le(E) {
        var q = { '=': '=0', ':': '=2' };
        return (
            '$' +
            E.replace(/[=:]/g, function (F) {
                return q[F];
            })
        );
    }
    var re = /\/+/g;
    function ie(E, q) {
        return typeof E == 'object' && E !== null && E.key != null ? le('' + E.key) : q.toString(36);
    }
    function Q(E) {
        switch (E.status) {
            case 'fulfilled':
                return E.value;
            case 'rejected':
                throw E.reason;
            default:
                switch (
                    (typeof E.status == 'string'
                        ? E.then(ne, ne)
                        : ((E.status = 'pending'),
                          E.then(
                              function (q) {
                                  E.status === 'pending' && ((E.status = 'fulfilled'), (E.value = q));
                              },
                              function (q) {
                                  E.status === 'pending' && ((E.status = 'rejected'), (E.reason = q));
                              }
                          )),
                    E.status)
                ) {
                    case 'fulfilled':
                        return E.value;
                    case 'rejected':
                        throw E.reason;
                }
        }
        throw E;
    }
    function A(E, q, F, P, fe) {
        var pe = typeof E;
        (pe === 'undefined' || pe === 'boolean') && (E = null);
        var $ = !1;
        if (E === null) $ = !0;
        else
            switch (pe) {
                case 'bigint':
                case 'string':
                case 'number':
                    $ = !0;
                    break;
                case 'object':
                    switch (E.$$typeof) {
                        case l:
                        case o:
                            $ = !0;
                            break;
                        case S:
                            return (($ = E._init), A($(E._payload), q, F, P, fe));
                    }
            }
        if ($)
            return (
                (fe = fe(E)),
                ($ = P === '' ? '.' + ie(E, 0) : P),
                W(fe)
                    ? ((F = ''),
                      $ != null && (F = $.replace(re, '$&/') + '/'),
                      A(fe, q, F, '', function (we) {
                          return we;
                      }))
                    : fe != null &&
                      (he(fe) && (fe = ee(fe, F + (fe.key == null || (E && E.key === fe.key) ? '' : ('' + fe.key).replace(re, '$&/') + '/') + $)),
                      q.push(fe)),
                1
            );
        $ = 0;
        var be = P === '' ? '.' : P + ':';
        if (W(E)) for (var ye = 0; ye < E.length; ye++) ((P = E[ye]), (pe = be + ie(P, ye)), ($ += A(P, q, F, pe, fe)));
        else if (((ye = M(E)), typeof ye == 'function'))
            for (E = ye.call(E), ye = 0; !(P = E.next()).done; ) ((P = P.value), (pe = be + ie(P, ye++)), ($ += A(P, q, F, pe, fe)));
        else if (pe === 'object') {
            if (typeof E.then == 'function') return A(Q(E), q, F, P, fe);
            throw (
                (q = String(E)),
                Error(
                    'Objects are not valid as a React child (found: ' +
                        (q === '[object Object]' ? 'object with keys {' + Object.keys(E).join(', ') + '}' : q) +
                        '). If you meant to render a collection of children, use an array instead.'
                )
            );
        }
        return $;
    }
    function Y(E, q, F) {
        if (E == null) return E;
        var P = [],
            fe = 0;
        return (
            A(E, P, '', '', function (pe) {
                return q.call(F, pe, fe++);
            }),
            P
        );
    }
    function z(E) {
        if (E._status === -1) {
            var q = E._result;
            ((q = q()),
                q.then(
                    function (F) {
                        (E._status === 0 || E._status === -1) && ((E._status = 1), (E._result = F));
                    },
                    function (F) {
                        (E._status === 0 || E._status === -1) && ((E._status = 2), (E._result = F));
                    }
                ),
                E._status === -1 && ((E._status = 0), (E._result = q)));
        }
        if (E._status === 1) return E._result.default;
        throw E._result;
    }
    var te =
            typeof reportError == 'function'
                ? reportError
                : function (E) {
                      if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
                          var q = new window.ErrorEvent('error', {
                              bubbles: !0,
                              cancelable: !0,
                              message: typeof E == 'object' && E !== null && typeof E.message == 'string' ? String(E.message) : String(E),
                              error: E,
                          });
                          if (!window.dispatchEvent(q)) return;
                      } else if (typeof process == 'object' && typeof process.emit == 'function') {
                          process.emit('uncaughtException', E);
                          return;
                      }
                      console.error(E);
                  },
        de = {
            map: Y,
            forEach: function (E, q, F) {
                Y(
                    E,
                    function () {
                        q.apply(this, arguments);
                    },
                    F
                );
            },
            count: function (E) {
                var q = 0;
                return (
                    Y(E, function () {
                        q++;
                    }),
                    q
                );
            },
            toArray: function (E) {
                return (
                    Y(E, function (q) {
                        return q;
                    }) || []
                );
            },
            only: function (E) {
                if (!he(E)) throw Error('React.Children.only expected to receive a single React element child.');
                return E;
            },
        };
    return (
        (xe.Activity = x),
        (xe.Children = de),
        (xe.Component = L),
        (xe.Fragment = r),
        (xe.Profiler = f),
        (xe.PureComponent = H),
        (xe.StrictMode = c),
        (xe.Suspense = y),
        (xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k),
        (xe.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (E) {
                return k.H.useMemoCache(E);
            },
        }),
        (xe.cache = function (E) {
            return function () {
                return E.apply(null, arguments);
            };
        }),
        (xe.cacheSignal = function () {
            return null;
        }),
        (xe.cloneElement = function (E, q, F) {
            if (E == null) throw Error('The argument must be a React element, but you passed ' + E + '.');
            var P = w({}, E.props),
                fe = E.key;
            if (q != null)
                for (pe in (q.key !== void 0 && (fe = '' + q.key), q))
                    !G.call(q, pe) || pe === 'key' || pe === '__self' || pe === '__source' || (pe === 'ref' && q.ref === void 0) || (P[pe] = q[pe]);
            var pe = arguments.length - 2;
            if (pe === 1) P.children = F;
            else if (1 < pe) {
                for (var $ = Array(pe), be = 0; be < pe; be++) $[be] = arguments[be + 2];
                P.children = $;
            }
            return ae(E.type, fe, P);
        }),
        (xe.createContext = function (E) {
            return (
                (E = { $$typeof: p, _currentValue: E, _currentValue2: E, _threadCount: 0, Provider: null, Consumer: null }),
                (E.Provider = E),
                (E.Consumer = { $$typeof: m, _context: E }),
                E
            );
        }),
        (xe.createElement = function (E, q, F) {
            var P,
                fe = {},
                pe = null;
            if (q != null)
                for (P in (q.key !== void 0 && (pe = '' + q.key), q))
                    G.call(q, P) && P !== 'key' && P !== '__self' && P !== '__source' && (fe[P] = q[P]);
            var $ = arguments.length - 2;
            if ($ === 1) fe.children = F;
            else if (1 < $) {
                for (var be = Array($), ye = 0; ye < $; ye++) be[ye] = arguments[ye + 2];
                fe.children = be;
            }
            if (E && E.defaultProps) for (P in (($ = E.defaultProps), $)) fe[P] === void 0 && (fe[P] = $[P]);
            return ae(E, pe, fe);
        }),
        (xe.createRef = function () {
            return { current: null };
        }),
        (xe.forwardRef = function (E) {
            return { $$typeof: v, render: E };
        }),
        (xe.isValidElement = he),
        (xe.lazy = function (E) {
            return { $$typeof: S, _payload: { _status: -1, _result: E }, _init: z };
        }),
        (xe.memo = function (E, q) {
            return { $$typeof: g, type: E, compare: q === void 0 ? null : q };
        }),
        (xe.startTransition = function (E) {
            var q = k.T,
                F = {};
            k.T = F;
            try {
                var P = E(),
                    fe = k.S;
                (fe !== null && fe(F, P), typeof P == 'object' && P !== null && typeof P.then == 'function' && P.then(ne, te));
            } catch (pe) {
                te(pe);
            } finally {
                (q !== null && F.types !== null && (q.types = F.types), (k.T = q));
            }
        }),
        (xe.unstable_useCacheRefresh = function () {
            return k.H.useCacheRefresh();
        }),
        (xe.use = function (E) {
            return k.H.use(E);
        }),
        (xe.useActionState = function (E, q, F) {
            return k.H.useActionState(E, q, F);
        }),
        (xe.useCallback = function (E, q) {
            return k.H.useCallback(E, q);
        }),
        (xe.useContext = function (E) {
            return k.H.useContext(E);
        }),
        (xe.useDebugValue = function () {}),
        (xe.useDeferredValue = function (E, q) {
            return k.H.useDeferredValue(E, q);
        }),
        (xe.useEffect = function (E, q) {
            return k.H.useEffect(E, q);
        }),
        (xe.useEffectEvent = function (E) {
            return k.H.useEffectEvent(E);
        }),
        (xe.useId = function () {
            return k.H.useId();
        }),
        (xe.useImperativeHandle = function (E, q, F) {
            return k.H.useImperativeHandle(E, q, F);
        }),
        (xe.useInsertionEffect = function (E, q) {
            return k.H.useInsertionEffect(E, q);
        }),
        (xe.useLayoutEffect = function (E, q) {
            return k.H.useLayoutEffect(E, q);
        }),
        (xe.useMemo = function (E, q) {
            return k.H.useMemo(E, q);
        }),
        (xe.useOptimistic = function (E, q) {
            return k.H.useOptimistic(E, q);
        }),
        (xe.useReducer = function (E, q, F) {
            return k.H.useReducer(E, q, F);
        }),
        (xe.useRef = function (E) {
            return k.H.useRef(E);
        }),
        (xe.useState = function (E) {
            return k.H.useState(E);
        }),
        (xe.useSyncExternalStore = function (E, q, F) {
            return k.H.useSyncExternalStore(E, q, F);
        }),
        (xe.useTransition = function () {
            return k.H.useTransition();
        }),
        (xe.version = '19.2.0'),
        xe
    );
}
var gp;
function Fu() {
    return (gp || ((gp = 1), (yu.exports = _b())), yu.exports);
}
var h = Fu();
const qn = tg(h),
    ng = kb({ __proto__: null, default: qn }, [h]);
var bu = { exports: {} },
    Gi = {},
    Su = { exports: {} },
    xu = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vp;
function Lb() {
    return (
        vp ||
            ((vp = 1),
            (function (l) {
                function o(A, Y) {
                    var z = A.length;
                    A.push(Y);
                    e: for (; 0 < z; ) {
                        var te = (z - 1) >>> 1,
                            de = A[te];
                        if (0 < f(de, Y)) ((A[te] = Y), (A[z] = de), (z = te));
                        else break e;
                    }
                }
                function r(A) {
                    return A.length === 0 ? null : A[0];
                }
                function c(A) {
                    if (A.length === 0) return null;
                    var Y = A[0],
                        z = A.pop();
                    if (z !== Y) {
                        A[0] = z;
                        e: for (var te = 0, de = A.length, E = de >>> 1; te < E; ) {
                            var q = 2 * (te + 1) - 1,
                                F = A[q],
                                P = q + 1,
                                fe = A[P];
                            if (0 > f(F, z)) P < de && 0 > f(fe, F) ? ((A[te] = fe), (A[P] = z), (te = P)) : ((A[te] = F), (A[q] = z), (te = q));
                            else if (P < de && 0 > f(fe, z)) ((A[te] = fe), (A[P] = z), (te = P));
                            else break e;
                        }
                    }
                    return Y;
                }
                function f(A, Y) {
                    var z = A.sortIndex - Y.sortIndex;
                    return z !== 0 ? z : A.id - Y.id;
                }
                if (((l.unstable_now = void 0), typeof performance == 'object' && typeof performance.now == 'function')) {
                    var m = performance;
                    l.unstable_now = function () {
                        return m.now();
                    };
                } else {
                    var p = Date,
                        v = p.now();
                    l.unstable_now = function () {
                        return p.now() - v;
                    };
                }
                var y = [],
                    g = [],
                    S = 1,
                    x = null,
                    T = 3,
                    M = !1,
                    R = !1,
                    w = !1,
                    N = !1,
                    L = typeof setTimeout == 'function' ? setTimeout : null,
                    B = typeof clearTimeout == 'function' ? clearTimeout : null,
                    H = typeof setImmediate < 'u' ? setImmediate : null;
                function K(A) {
                    for (var Y = r(g); Y !== null; ) {
                        if (Y.callback === null) c(g);
                        else if (Y.startTime <= A) (c(g), (Y.sortIndex = Y.expirationTime), o(y, Y));
                        else break;
                        Y = r(g);
                    }
                }
                function W(A) {
                    if (((w = !1), K(A), !R))
                        if (r(y) !== null) ((R = !0), ne || ((ne = !0), le()));
                        else {
                            var Y = r(g);
                            Y !== null && Q(W, Y.startTime - A);
                        }
                }
                var ne = !1,
                    k = -1,
                    G = 5,
                    ae = -1;
                function ee() {
                    return N ? !0 : !(l.unstable_now() - ae < G);
                }
                function he() {
                    if (((N = !1), ne)) {
                        var A = l.unstable_now();
                        ae = A;
                        var Y = !0;
                        try {
                            e: {
                                ((R = !1), w && ((w = !1), B(k), (k = -1)), (M = !0));
                                var z = T;
                                try {
                                    t: {
                                        for (K(A), x = r(y); x !== null && !(x.expirationTime > A && ee()); ) {
                                            var te = x.callback;
                                            if (typeof te == 'function') {
                                                ((x.callback = null), (T = x.priorityLevel));
                                                var de = te(x.expirationTime <= A);
                                                if (((A = l.unstable_now()), typeof de == 'function')) {
                                                    ((x.callback = de), K(A), (Y = !0));
                                                    break t;
                                                }
                                                (x === r(y) && c(y), K(A));
                                            } else c(y);
                                            x = r(y);
                                        }
                                        if (x !== null) Y = !0;
                                        else {
                                            var E = r(g);
                                            (E !== null && Q(W, E.startTime - A), (Y = !1));
                                        }
                                    }
                                    break e;
                                } finally {
                                    ((x = null), (T = z), (M = !1));
                                }
                                Y = void 0;
                            }
                        } finally {
                            Y ? le() : (ne = !1);
                        }
                    }
                }
                var le;
                if (typeof H == 'function')
                    le = function () {
                        H(he);
                    };
                else if (typeof MessageChannel < 'u') {
                    var re = new MessageChannel(),
                        ie = re.port2;
                    ((re.port1.onmessage = he),
                        (le = function () {
                            ie.postMessage(null);
                        }));
                } else
                    le = function () {
                        L(he, 0);
                    };
                function Q(A, Y) {
                    k = L(function () {
                        A(l.unstable_now());
                    }, Y);
                }
                ((l.unstable_IdlePriority = 5),
                    (l.unstable_ImmediatePriority = 1),
                    (l.unstable_LowPriority = 4),
                    (l.unstable_NormalPriority = 3),
                    (l.unstable_Profiling = null),
                    (l.unstable_UserBlockingPriority = 2),
                    (l.unstable_cancelCallback = function (A) {
                        A.callback = null;
                    }),
                    (l.unstable_forceFrameRate = function (A) {
                        0 > A || 125 < A
                            ? console.error(
                                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                              )
                            : (G = 0 < A ? Math.floor(1e3 / A) : 5);
                    }),
                    (l.unstable_getCurrentPriorityLevel = function () {
                        return T;
                    }),
                    (l.unstable_next = function (A) {
                        switch (T) {
                            case 1:
                            case 2:
                            case 3:
                                var Y = 3;
                                break;
                            default:
                                Y = T;
                        }
                        var z = T;
                        T = Y;
                        try {
                            return A();
                        } finally {
                            T = z;
                        }
                    }),
                    (l.unstable_requestPaint = function () {
                        N = !0;
                    }),
                    (l.unstable_runWithPriority = function (A, Y) {
                        switch (A) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                A = 3;
                        }
                        var z = T;
                        T = A;
                        try {
                            return Y();
                        } finally {
                            T = z;
                        }
                    }),
                    (l.unstable_scheduleCallback = function (A, Y, z) {
                        var te = l.unstable_now();
                        switch (
                            (typeof z == 'object' && z !== null ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? te + z : te)) : (z = te), A)
                        ) {
                            case 1:
                                var de = -1;
                                break;
                            case 2:
                                de = 250;
                                break;
                            case 5:
                                de = 1073741823;
                                break;
                            case 4:
                                de = 1e4;
                                break;
                            default:
                                de = 5e3;
                        }
                        return (
                            (de = z + de),
                            (A = { id: S++, callback: Y, priorityLevel: A, startTime: z, expirationTime: de, sortIndex: -1 }),
                            z > te
                                ? ((A.sortIndex = z), o(g, A), r(y) === null && A === r(g) && (w ? (B(k), (k = -1)) : (w = !0), Q(W, z - te)))
                                : ((A.sortIndex = de), o(y, A), R || M || ((R = !0), ne || ((ne = !0), le()))),
                            A
                        );
                    }),
                    (l.unstable_shouldYield = ee),
                    (l.unstable_wrapCallback = function (A) {
                        var Y = T;
                        return function () {
                            var z = T;
                            T = Y;
                            try {
                                return A.apply(this, arguments);
                            } finally {
                                T = z;
                            }
                        };
                    }));
            })(xu)),
        xu
    );
}
var yp;
function Ub() {
    return (yp || ((yp = 1), (Su.exports = Lb())), Su.exports);
}
var wu = { exports: {} },
    yt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bp;
function Bb() {
    if (bp) return yt;
    bp = 1;
    var l = Fu();
    function o(y) {
        var g = 'https://react.dev/errors/' + y;
        if (1 < arguments.length) {
            g += '?args[]=' + encodeURIComponent(arguments[1]);
            for (var S = 2; S < arguments.length; S++) g += '&args[]=' + encodeURIComponent(arguments[S]);
        }
        return (
            'Minified React error #' +
            y +
            '; visit ' +
            g +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
    }
    function r() {}
    var c = {
            d: {
                f: r,
                r: function () {
                    throw Error(o(522));
                },
                D: r,
                C: r,
                L: r,
                m: r,
                X: r,
                S: r,
                M: r,
            },
            p: 0,
            findDOMNode: null,
        },
        f = Symbol.for('react.portal');
    function m(y, g, S) {
        var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return { $$typeof: f, key: x == null ? null : '' + x, children: y, containerInfo: g, implementation: S };
    }
    var p = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function v(y, g) {
        if (y === 'font') return '';
        if (typeof g == 'string') return g === 'use-credentials' ? g : '';
    }
    return (
        (yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c),
        (yt.createPortal = function (y, g) {
            var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)) throw Error(o(299));
            return m(y, g, null, S);
        }),
        (yt.flushSync = function (y) {
            var g = p.T,
                S = c.p;
            try {
                if (((p.T = null), (c.p = 2), y)) return y();
            } finally {
                ((p.T = g), (c.p = S), c.d.f());
            }
        }),
        (yt.preconnect = function (y, g) {
            typeof y == 'string' &&
                (g ? ((g = g.crossOrigin), (g = typeof g == 'string' ? (g === 'use-credentials' ? g : '') : void 0)) : (g = null), c.d.C(y, g));
        }),
        (yt.prefetchDNS = function (y) {
            typeof y == 'string' && c.d.D(y);
        }),
        (yt.preinit = function (y, g) {
            if (typeof y == 'string' && g && typeof g.as == 'string') {
                var S = g.as,
                    x = v(S, g.crossOrigin),
                    T = typeof g.integrity == 'string' ? g.integrity : void 0,
                    M = typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0;
                S === 'style'
                    ? c.d.S(y, typeof g.precedence == 'string' ? g.precedence : void 0, { crossOrigin: x, integrity: T, fetchPriority: M })
                    : S === 'script' &&
                      c.d.X(y, { crossOrigin: x, integrity: T, fetchPriority: M, nonce: typeof g.nonce == 'string' ? g.nonce : void 0 });
            }
        }),
        (yt.preinitModule = function (y, g) {
            if (typeof y == 'string')
                if (typeof g == 'object' && g !== null) {
                    if (g.as == null || g.as === 'script') {
                        var S = v(g.as, g.crossOrigin);
                        c.d.M(y, {
                            crossOrigin: S,
                            integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
                            nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
                        });
                    }
                } else g == null && c.d.M(y);
        }),
        (yt.preload = function (y, g) {
            if (typeof y == 'string' && typeof g == 'object' && g !== null && typeof g.as == 'string') {
                var S = g.as,
                    x = v(S, g.crossOrigin);
                c.d.L(y, S, {
                    crossOrigin: x,
                    integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
                    nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
                    type: typeof g.type == 'string' ? g.type : void 0,
                    fetchPriority: typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0,
                    referrerPolicy: typeof g.referrerPolicy == 'string' ? g.referrerPolicy : void 0,
                    imageSrcSet: typeof g.imageSrcSet == 'string' ? g.imageSrcSet : void 0,
                    imageSizes: typeof g.imageSizes == 'string' ? g.imageSizes : void 0,
                    media: typeof g.media == 'string' ? g.media : void 0,
                });
            }
        }),
        (yt.preloadModule = function (y, g) {
            if (typeof y == 'string')
                if (g) {
                    var S = v(g.as, g.crossOrigin);
                    c.d.m(y, {
                        as: typeof g.as == 'string' && g.as !== 'script' ? g.as : void 0,
                        crossOrigin: S,
                        integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
                    });
                } else c.d.m(y);
        }),
        (yt.requestFormReset = function (y) {
            c.d.r(y);
        }),
        (yt.unstable_batchedUpdates = function (y, g) {
            return y(g);
        }),
        (yt.useFormState = function (y, g, S) {
            return p.H.useFormState(y, g, S);
        }),
        (yt.useFormStatus = function () {
            return p.H.useHostTransitionStatus();
        }),
        (yt.version = '19.2.0'),
        yt
    );
}
var Sp;
function ag() {
    if (Sp) return wu.exports;
    Sp = 1;
    function l() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
            } catch (o) {
                console.error(o);
            }
    }
    return (l(), (wu.exports = Bb()), wu.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xp;
function Hb() {
    if (xp) return Gi;
    xp = 1;
    var l = Ub(),
        o = Fu(),
        r = ag();
    function c(e) {
        var t = 'https://react.dev/errors/' + e;
        if (1 < arguments.length) {
            t += '?args[]=' + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++) t += '&args[]=' + encodeURIComponent(arguments[n]);
        }
        return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
    }
    function f(e) {
        return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
    }
    function m(e) {
        var t = e,
            n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
            e = t;
            do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
            while (e);
        }
        return t.tag === 3 ? n : null;
    }
    function p(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
        }
        return null;
    }
    function v(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
        }
        return null;
    }
    function y(e) {
        if (m(e) !== e) throw Error(c(188));
    }
    function g(e) {
        var t = e.alternate;
        if (!t) {
            if (((t = m(e)), t === null)) throw Error(c(188));
            return t !== e ? null : e;
        }
        for (var n = e, a = t; ; ) {
            var i = n.return;
            if (i === null) break;
            var s = i.alternate;
            if (s === null) {
                if (((a = i.return), a !== null)) {
                    n = a;
                    continue;
                }
                break;
            }
            if (i.child === s.child) {
                for (s = i.child; s; ) {
                    if (s === n) return (y(i), e);
                    if (s === a) return (y(i), t);
                    s = s.sibling;
                }
                throw Error(c(188));
            }
            if (n.return !== a.return) ((n = i), (a = s));
            else {
                for (var d = !1, b = i.child; b; ) {
                    if (b === n) {
                        ((d = !0), (n = i), (a = s));
                        break;
                    }
                    if (b === a) {
                        ((d = !0), (a = i), (n = s));
                        break;
                    }
                    b = b.sibling;
                }
                if (!d) {
                    for (b = s.child; b; ) {
                        if (b === n) {
                            ((d = !0), (n = s), (a = i));
                            break;
                        }
                        if (b === a) {
                            ((d = !0), (a = s), (n = i));
                            break;
                        }
                        b = b.sibling;
                    }
                    if (!d) throw Error(c(189));
                }
            }
            if (n.alternate !== a) throw Error(c(190));
        }
        if (n.tag !== 3) throw Error(c(188));
        return n.stateNode.current === n ? e : t;
    }
    function S(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null; ) {
            if (((t = S(e)), t !== null)) return t;
            e = e.sibling;
        }
        return null;
    }
    var x = Object.assign,
        T = Symbol.for('react.element'),
        M = Symbol.for('react.transitional.element'),
        R = Symbol.for('react.portal'),
        w = Symbol.for('react.fragment'),
        N = Symbol.for('react.strict_mode'),
        L = Symbol.for('react.profiler'),
        B = Symbol.for('react.consumer'),
        H = Symbol.for('react.context'),
        K = Symbol.for('react.forward_ref'),
        W = Symbol.for('react.suspense'),
        ne = Symbol.for('react.suspense_list'),
        k = Symbol.for('react.memo'),
        G = Symbol.for('react.lazy'),
        ae = Symbol.for('react.activity'),
        ee = Symbol.for('react.memo_cache_sentinel'),
        he = Symbol.iterator;
    function le(e) {
        return e === null || typeof e != 'object' ? null : ((e = (he && e[he]) || e['@@iterator']), typeof e == 'function' ? e : null);
    }
    var re = Symbol.for('react.client.reference');
    function ie(e) {
        if (e == null) return null;
        if (typeof e == 'function') return e.$$typeof === re ? null : e.displayName || e.name || null;
        if (typeof e == 'string') return e;
        switch (e) {
            case w:
                return 'Fragment';
            case L:
                return 'Profiler';
            case N:
                return 'StrictMode';
            case W:
                return 'Suspense';
            case ne:
                return 'SuspenseList';
            case ae:
                return 'Activity';
        }
        if (typeof e == 'object')
            switch (e.$$typeof) {
                case R:
                    return 'Portal';
                case H:
                    return e.displayName || 'Context';
                case B:
                    return (e._context.displayName || 'Context') + '.Consumer';
                case K:
                    var t = e.render;
                    return (
                        (e = e.displayName),
                        e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
                        e
                    );
                case k:
                    return ((t = e.displayName || null), t !== null ? t : ie(e.type) || 'Memo');
                case G:
                    ((t = e._payload), (e = e._init));
                    try {
                        return ie(e(t));
                    } catch {}
            }
        return null;
    }
    var Q = Array.isArray,
        A = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        Y = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        z = { pending: !1, data: null, method: null, action: null },
        te = [],
        de = -1;
    function E(e) {
        return { current: e };
    }
    function q(e) {
        0 > de || ((e.current = te[de]), (te[de] = null), de--);
    }
    function F(e, t) {
        (de++, (te[de] = e.current), (e.current = t));
    }
    var P = E(null),
        fe = E(null),
        pe = E(null),
        $ = E(null);
    function be(e, t) {
        switch ((F(pe, t), F(fe, e), F(P, null), t.nodeType)) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? Lh(e) : 0;
                break;
            default:
                if (((e = t.tagName), (t = t.namespaceURI))) ((t = Lh(t)), (e = Uh(t, e)));
                else
                    switch (e) {
                        case 'svg':
                            e = 1;
                            break;
                        case 'math':
                            e = 2;
                            break;
                        default:
                            e = 0;
                    }
        }
        (q(P), F(P, e));
    }
    function ye() {
        (q(P), q(fe), q(pe));
    }
    function we(e) {
        e.memoizedState !== null && F($, e);
        var t = P.current,
            n = Uh(t, e.type);
        t !== n && (F(fe, e), F(P, n));
    }
    function Te(e) {
        (fe.current === e && (q(P), q(fe)), $.current === e && (q($), (Li._currentValue = z)));
    }
    var Me, Pe;
    function it(e) {
        if (Me === void 0)
            try {
                throw Error();
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                ((Me = (t && t[1]) || ''),
                    (Pe =
                        -1 <
                        n.stack.indexOf(`
    at`)
                            ? ' (<anonymous>)'
                            : -1 < n.stack.indexOf('@')
                              ? '@unknown:0:0'
                              : ''));
            }
        return (
            `
` +
            Me +
            e +
            Pe
        );
    }
    var en = !1;
    function tn(e, t) {
        if (!e || en) return '';
        en = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (t) {
                            var I = function () {
                                throw Error();
                            };
                            if (
                                (Object.defineProperty(I.prototype, 'props', {
                                    set: function () {
                                        throw Error();
                                    },
                                }),
                                typeof Reflect == 'object' && Reflect.construct)
                            ) {
                                try {
                                    Reflect.construct(I, []);
                                } catch (V) {
                                    var U = V;
                                }
                                Reflect.construct(e, [], I);
                            } else {
                                try {
                                    I.call();
                                } catch (V) {
                                    U = V;
                                }
                                e.call(I.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (V) {
                                U = V;
                            }
                            (I = e()) && typeof I.catch == 'function' && I.catch(function () {});
                        }
                    } catch (V) {
                        if (V && U && typeof V.stack == 'string') return [V.stack, U.stack];
                    }
                    return [null, null];
                },
            };
            a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
            var i = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, 'name');
            i && i.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, 'name', { value: 'DetermineComponentFrameRoot' });
            var s = a.DetermineComponentFrameRoot(),
                d = s[0],
                b = s[1];
            if (d && b) {
                var C = d.split(`
`),
                    _ = b.split(`
`);
                for (i = a = 0; a < C.length && !C[a].includes('DetermineComponentFrameRoot'); ) a++;
                for (; i < _.length && !_[i].includes('DetermineComponentFrameRoot'); ) i++;
                if (a === C.length || i === _.length) for (a = C.length - 1, i = _.length - 1; 1 <= a && 0 <= i && C[a] !== _[i]; ) i--;
                for (; 1 <= a && 0 <= i; a--, i--)
                    if (C[a] !== _[i]) {
                        if (a !== 1 || i !== 1)
                            do
                                if ((a--, i--, 0 > i || C[a] !== _[i])) {
                                    var X =
                                        `
` + C[a].replace(' at new ', ' at ');
                                    return (e.displayName && X.includes('<anonymous>') && (X = X.replace('<anonymous>', e.displayName)), X);
                                }
                            while (1 <= a && 0 <= i);
                        break;
                    }
            }
        } finally {
            ((en = !1), (Error.prepareStackTrace = n));
        }
        return (n = e ? e.displayName || e.name : '') ? it(n) : '';
    }
    function J(e, t) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return it(e.type);
            case 16:
                return it('Lazy');
            case 13:
                return e.child !== t && t !== null ? it('Suspense Fallback') : it('Suspense');
            case 19:
                return it('SuspenseList');
            case 0:
            case 15:
                return tn(e.type, !1);
            case 11:
                return tn(e.type.render, !1);
            case 1:
                return tn(e.type, !0);
            case 31:
                return it('Activity');
            default:
                return '';
        }
    }
    function Se(e) {
        try {
            var t = '',
                n = null;
            do ((t += J(e, n)), (n = e), (e = e.return));
            while (e);
            return t;
        } catch (a) {
            return (
                `
Error generating stack: ` +
                a.message +
                `
` +
                a.stack
            );
        }
    }
    var _e = Object.prototype.hasOwnProperty,
        Kn = l.unstable_scheduleCallback,
        Ca = l.unstable_cancelCallback,
        Ps = l.unstable_shouldYield,
        er = l.unstable_requestPaint,
        St = l.unstable_now,
        tr = l.unstable_getCurrentPriorityLevel,
        lo = l.unstable_ImmediatePriority,
        io = l.unstable_UserBlockingPriority,
        Ea = l.unstable_NormalPriority,
        oo = l.unstable_LowPriority,
        Zl = l.unstable_IdlePriority,
        nr = l.log,
        ar = l.unstable_setDisableYieldValue,
        oe = null,
        Ze = null;
    function ot(e) {
        if ((typeof nr == 'function' && ar(e), Ze && typeof Ze.setStrictMode == 'function'))
            try {
                Ze.setStrictMode(oe, e);
            } catch {}
    }
    var xt = Math.clz32 ? Math.clz32 : wn,
        lr = Math.log,
        Il = Math.LN2;
    function wn(e) {
        return ((e >>>= 0), e === 0 ? 32 : (31 - ((lr(e) / Il) | 0)) | 0);
    }
    var so = 256,
        ro = 262144,
        co = 4194304;
    function Ta(e) {
        var t = e & 42;
        if (t !== 0) return t;
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
                return e & 261888;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 3932160;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return e & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e;
        }
    }
    function uo(e, t, n) {
        var a = e.pendingLanes;
        if (a === 0) return 0;
        var i = 0,
            s = e.suspendedLanes,
            d = e.pingedLanes;
        e = e.warmLanes;
        var b = a & 134217727;
        return (
            b !== 0
                ? ((a = b & ~s), a !== 0 ? (i = Ta(a)) : ((d &= b), d !== 0 ? (i = Ta(d)) : n || ((n = b & ~e), n !== 0 && (i = Ta(n)))))
                : ((b = a & ~s), b !== 0 ? (i = Ta(b)) : d !== 0 ? (i = Ta(d)) : n || ((n = a & ~e), n !== 0 && (i = Ta(n)))),
            i === 0 ? 0 : t !== 0 && t !== i && (t & s) === 0 && ((s = i & -i), (n = t & -t), s >= n || (s === 32 && (n & 4194048) !== 0)) ? t : i
        );
    }
    function Jl(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function by(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1;
        }
    }
    function vf() {
        var e = co;
        return ((co <<= 1), (co & 62914560) === 0 && (co = 4194304), e);
    }
    function ir(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
    }
    function Wl(e, t) {
        ((e.pendingLanes |= t), t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function Sy(e, t, n, a, i, s) {
        var d = e.pendingLanes;
        ((e.pendingLanes = n),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.warmLanes = 0),
            (e.expiredLanes &= n),
            (e.entangledLanes &= n),
            (e.errorRecoveryDisabledLanes &= n),
            (e.shellSuspendCounter = 0));
        var b = e.entanglements,
            C = e.expirationTimes,
            _ = e.hiddenUpdates;
        for (n = d & ~n; 0 < n; ) {
            var X = 31 - xt(n),
                I = 1 << X;
            ((b[X] = 0), (C[X] = -1));
            var U = _[X];
            if (U !== null)
                for (_[X] = null, X = 0; X < U.length; X++) {
                    var V = U[X];
                    V !== null && (V.lane &= -536870913);
                }
            n &= ~I;
        }
        (a !== 0 && yf(e, a, 0), s !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(d & ~t)));
    }
    function yf(e, t, n) {
        ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
        var a = 31 - xt(t);
        ((e.entangledLanes |= t), (e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 261930)));
    }
    function bf(e, t) {
        var n = (e.entangledLanes |= t);
        for (e = e.entanglements; n; ) {
            var a = 31 - xt(n),
                i = 1 << a;
            ((i & t) | (e[a] & t) && (e[a] |= t), (n &= ~i));
        }
    }
    function Sf(e, t) {
        var n = t & -t;
        return ((n = (n & 42) !== 0 ? 1 : or(n)), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n);
    }
    function or(e) {
        switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default:
                e = 0;
        }
        return e;
    }
    function sr(e) {
        return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
    }
    function xf() {
        var e = Y.p;
        return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : op(e.type));
    }
    function wf(e, t) {
        var n = Y.p;
        try {
            return ((Y.p = e), t());
        } finally {
            Y.p = n;
        }
    }
    var Qn = Math.random().toString(36).slice(2),
        dt = '__reactFiber$' + Qn,
        Tt = '__reactProps$' + Qn,
        Ia = '__reactContainer$' + Qn,
        rr = '__reactEvents$' + Qn,
        xy = '__reactListeners$' + Qn,
        wy = '__reactHandles$' + Qn,
        Cf = '__reactResources$' + Qn,
        Fl = '__reactMarker$' + Qn;
    function cr(e) {
        (delete e[dt], delete e[Tt], delete e[rr], delete e[xy], delete e[wy]);
    }
    function Ja(e) {
        var t = e[dt];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
            if ((t = n[Ia] || n[dt])) {
                if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
                    for (e = Xh(e); e !== null; ) {
                        if ((n = e[dt])) return n;
                        e = Xh(e);
                    }
                return t;
            }
            ((e = n), (n = e.parentNode));
        }
        return null;
    }
    function Wa(e) {
        if ((e = e[dt] || e[Ia])) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
        }
        return null;
    }
    function $l(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
        throw Error(c(33));
    }
    function Fa(e) {
        var t = e[Cf];
        return (t || (t = e[Cf] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
    }
    function ut(e) {
        e[Fl] = !0;
    }
    var Ef = new Set(),
        Tf = {};
    function Aa(e, t) {
        ($a(e, t), $a(e + 'Capture', t));
    }
    function $a(e, t) {
        for (Tf[e] = t, e = 0; e < t.length; e++) Ef.add(t[e]);
    }
    var Cy = RegExp(
            '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
        ),
        Af = {},
        Nf = {};
    function Ey(e) {
        return _e.call(Nf, e) ? !0 : _e.call(Af, e) ? !1 : Cy.test(e) ? (Nf[e] = !0) : ((Af[e] = !0), !1);
    }
    function fo(e, t, n) {
        if (Ey(t))
            if (n === null) e.removeAttribute(t);
            else {
                switch (typeof n) {
                    case 'undefined':
                    case 'function':
                    case 'symbol':
                        e.removeAttribute(t);
                        return;
                    case 'boolean':
                        var a = t.toLowerCase().slice(0, 5);
                        if (a !== 'data-' && a !== 'aria-') {
                            e.removeAttribute(t);
                            return;
                        }
                }
                e.setAttribute(t, '' + n);
            }
    }
    function mo(e, t, n) {
        if (n === null) e.removeAttribute(t);
        else {
            switch (typeof n) {
                case 'undefined':
                case 'function':
                case 'symbol':
                case 'boolean':
                    e.removeAttribute(t);
                    return;
            }
            e.setAttribute(t, '' + n);
        }
    }
    function Cn(e, t, n, a) {
        if (a === null) e.removeAttribute(n);
        else {
            switch (typeof a) {
                case 'undefined':
                case 'function':
                case 'symbol':
                case 'boolean':
                    e.removeAttribute(n);
                    return;
            }
            e.setAttributeNS(t, n, '' + a);
        }
    }
    function Yt(e) {
        switch (typeof e) {
            case 'bigint':
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
                return e;
            case 'object':
                return e;
            default:
                return '';
        }
    }
    function jf(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
    }
    function Ty(e, t, n) {
        var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (!e.hasOwnProperty(t) && typeof a < 'u' && typeof a.get == 'function' && typeof a.set == 'function') {
            var i = a.get,
                s = a.set;
            return (
                Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                        return i.call(this);
                    },
                    set: function (d) {
                        ((n = '' + d), s.call(this, d));
                    },
                }),
                Object.defineProperty(e, t, { enumerable: a.enumerable }),
                {
                    getValue: function () {
                        return n;
                    },
                    setValue: function (d) {
                        n = '' + d;
                    },
                    stopTracking: function () {
                        ((e._valueTracker = null), delete e[t]);
                    },
                }
            );
        }
    }
    function ur(e) {
        if (!e._valueTracker) {
            var t = jf(e) ? 'checked' : 'value';
            e._valueTracker = Ty(e, t, '' + e[t]);
        }
    }
    function Mf(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            a = '';
        return (e && (a = jf(e) ? (e.checked ? 'true' : 'false') : e.value), (e = a), e !== n ? (t.setValue(e), !0) : !1);
    }
    function ho(e) {
        if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
        try {
            return e.activeElement || e.body;
        } catch {
            return e.body;
        }
    }
    var Ay = /[\n"\\]/g;
    function Xt(e) {
        return e.replace(Ay, function (t) {
            return '\\' + t.charCodeAt(0).toString(16) + ' ';
        });
    }
    function fr(e, t, n, a, i, s, d, b) {
        ((e.name = ''),
            d != null && typeof d != 'function' && typeof d != 'symbol' && typeof d != 'boolean' ? (e.type = d) : e.removeAttribute('type'),
            t != null
                ? d === 'number'
                    ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + Yt(t))
                    : e.value !== '' + Yt(t) && (e.value = '' + Yt(t))
                : (d !== 'submit' && d !== 'reset') || e.removeAttribute('value'),
            t != null ? dr(e, d, Yt(t)) : n != null ? dr(e, d, Yt(n)) : a != null && e.removeAttribute('value'),
            i == null && s != null && (e.defaultChecked = !!s),
            i != null && (e.checked = i && typeof i != 'function' && typeof i != 'symbol'),
            b != null && typeof b != 'function' && typeof b != 'symbol' && typeof b != 'boolean' ? (e.name = '' + Yt(b)) : e.removeAttribute('name'));
    }
    function Rf(e, t, n, a, i, s, d, b) {
        if ((s != null && typeof s != 'function' && typeof s != 'symbol' && typeof s != 'boolean' && (e.type = s), t != null || n != null)) {
            if (!((s !== 'submit' && s !== 'reset') || t != null)) {
                ur(e);
                return;
            }
            ((n = n != null ? '' + Yt(n) : ''), (t = t != null ? '' + Yt(t) : n), b || t === e.value || (e.value = t), (e.defaultValue = t));
        }
        ((a = a ?? i),
            (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
            (e.checked = b ? e.checked : !!a),
            (e.defaultChecked = !!a),
            d != null && typeof d != 'function' && typeof d != 'symbol' && typeof d != 'boolean' && (e.name = d),
            ur(e));
    }
    function dr(e, t, n) {
        (t === 'number' && ho(e.ownerDocument) === e) || e.defaultValue === '' + n || (e.defaultValue = '' + n);
    }
    function Pa(e, t, n, a) {
        if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
            for (n = 0; n < e.length; n++)
                ((i = t.hasOwnProperty('$' + e[n].value)), e[n].selected !== i && (e[n].selected = i), i && a && (e[n].defaultSelected = !0));
        } else {
            for (n = '' + Yt(n), t = null, i = 0; i < e.length; i++) {
                if (e[i].value === n) {
                    ((e[i].selected = !0), a && (e[i].defaultSelected = !0));
                    return;
                }
                t !== null || e[i].disabled || (t = e[i]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function Of(e, t, n) {
        if (t != null && ((t = '' + Yt(t)), t !== e.value && (e.value = t), n == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return;
        }
        e.defaultValue = n != null ? '' + Yt(n) : '';
    }
    function kf(e, t, n, a) {
        if (t == null) {
            if (a != null) {
                if (n != null) throw Error(c(92));
                if (Q(a)) {
                    if (1 < a.length) throw Error(c(93));
                    a = a[0];
                }
                n = a;
            }
            (n == null && (n = ''), (t = n));
        }
        ((n = Yt(t)), (e.defaultValue = n), (a = e.textContent), a === n && a !== '' && a !== null && (e.value = a), ur(e));
    }
    function el(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var Ny = new Set(
        'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
            ' '
        )
    );
    function zf(e, t, n) {
        var a = t.indexOf('--') === 0;
        n == null || typeof n == 'boolean' || n === ''
            ? a
                ? e.setProperty(t, '')
                : t === 'float'
                  ? (e.cssFloat = '')
                  : (e[t] = '')
            : a
              ? e.setProperty(t, n)
              : typeof n != 'number' || n === 0 || Ny.has(t)
                ? t === 'float'
                    ? (e.cssFloat = n)
                    : (e[t] = ('' + n).trim())
                : (e[t] = n + 'px');
    }
    function Df(e, t, n) {
        if (t != null && typeof t != 'object') throw Error(c(62));
        if (((e = e.style), n != null)) {
            for (var a in n)
                !n.hasOwnProperty(a) ||
                    (t != null && t.hasOwnProperty(a)) ||
                    (a.indexOf('--') === 0 ? e.setProperty(a, '') : a === 'float' ? (e.cssFloat = '') : (e[a] = ''));
            for (var i in t) ((a = t[i]), t.hasOwnProperty(i) && n[i] !== a && zf(e, i, a));
        } else for (var s in t) t.hasOwnProperty(s) && zf(e, s, t[s]);
    }
    function mr(e) {
        if (e.indexOf('-') === -1) return !1;
        switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
                return !1;
            default:
                return !0;
        }
    }
    var jy = new Map([
            ['acceptCharset', 'accept-charset'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
            ['crossOrigin', 'crossorigin'],
            ['accentHeight', 'accent-height'],
            ['alignmentBaseline', 'alignment-baseline'],
            ['arabicForm', 'arabic-form'],
            ['baselineShift', 'baseline-shift'],
            ['capHeight', 'cap-height'],
            ['clipPath', 'clip-path'],
            ['clipRule', 'clip-rule'],
            ['colorInterpolation', 'color-interpolation'],
            ['colorInterpolationFilters', 'color-interpolation-filters'],
            ['colorProfile', 'color-profile'],
            ['colorRendering', 'color-rendering'],
            ['dominantBaseline', 'dominant-baseline'],
            ['enableBackground', 'enable-background'],
            ['fillOpacity', 'fill-opacity'],
            ['fillRule', 'fill-rule'],
            ['floodColor', 'flood-color'],
            ['floodOpacity', 'flood-opacity'],
            ['fontFamily', 'font-family'],
            ['fontSize', 'font-size'],
            ['fontSizeAdjust', 'font-size-adjust'],
            ['fontStretch', 'font-stretch'],
            ['fontStyle', 'font-style'],
            ['fontVariant', 'font-variant'],
            ['fontWeight', 'font-weight'],
            ['glyphName', 'glyph-name'],
            ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
            ['glyphOrientationVertical', 'glyph-orientation-vertical'],
            ['horizAdvX', 'horiz-adv-x'],
            ['horizOriginX', 'horiz-origin-x'],
            ['imageRendering', 'image-rendering'],
            ['letterSpacing', 'letter-spacing'],
            ['lightingColor', 'lighting-color'],
            ['markerEnd', 'marker-end'],
            ['markerMid', 'marker-mid'],
            ['markerStart', 'marker-start'],
            ['overlinePosition', 'overline-position'],
            ['overlineThickness', 'overline-thickness'],
            ['paintOrder', 'paint-order'],
            ['panose-1', 'panose-1'],
            ['pointerEvents', 'pointer-events'],
            ['renderingIntent', 'rendering-intent'],
            ['shapeRendering', 'shape-rendering'],
            ['stopColor', 'stop-color'],
            ['stopOpacity', 'stop-opacity'],
            ['strikethroughPosition', 'strikethrough-position'],
            ['strikethroughThickness', 'strikethrough-thickness'],
            ['strokeDasharray', 'stroke-dasharray'],
            ['strokeDashoffset', 'stroke-dashoffset'],
            ['strokeLinecap', 'stroke-linecap'],
            ['strokeLinejoin', 'stroke-linejoin'],
            ['strokeMiterlimit', 'stroke-miterlimit'],
            ['strokeOpacity', 'stroke-opacity'],
            ['strokeWidth', 'stroke-width'],
            ['textAnchor', 'text-anchor'],
            ['textDecoration', 'text-decoration'],
            ['textRendering', 'text-rendering'],
            ['transformOrigin', 'transform-origin'],
            ['underlinePosition', 'underline-position'],
            ['underlineThickness', 'underline-thickness'],
            ['unicodeBidi', 'unicode-bidi'],
            ['unicodeRange', 'unicode-range'],
            ['unitsPerEm', 'units-per-em'],
            ['vAlphabetic', 'v-alphabetic'],
            ['vHanging', 'v-hanging'],
            ['vIdeographic', 'v-ideographic'],
            ['vMathematical', 'v-mathematical'],
            ['vectorEffect', 'vector-effect'],
            ['vertAdvY', 'vert-adv-y'],
            ['vertOriginX', 'vert-origin-x'],
            ['vertOriginY', 'vert-origin-y'],
            ['wordSpacing', 'word-spacing'],
            ['writingMode', 'writing-mode'],
            ['xmlnsXlink', 'xmlns:xlink'],
            ['xHeight', 'x-height'],
        ]),
        My = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function po(e) {
        return My.test('' + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function En() {}
    var hr = null;
    function pr(e) {
        return (
            (e = e.target || e.srcElement || window),
            e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
        );
    }
    var tl = null,
        nl = null;
    function _f(e) {
        var t = Wa(e);
        if (t && (e = t.stateNode)) {
            var n = e[Tt] || null;
            e: switch (((e = t.stateNode), t.type)) {
                case 'input':
                    if (
                        (fr(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                        (t = n.name),
                        n.type === 'radio' && t != null)
                    ) {
                        for (n = e; n.parentNode; ) n = n.parentNode;
                        for (n = n.querySelectorAll('input[name="' + Xt('' + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                            var a = n[t];
                            if (a !== e && a.form === e.form) {
                                var i = a[Tt] || null;
                                if (!i) throw Error(c(90));
                                fr(a, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
                            }
                        }
                        for (t = 0; t < n.length; t++) ((a = n[t]), a.form === e.form && Mf(a));
                    }
                    break e;
                case 'textarea':
                    Of(e, n.value, n.defaultValue);
                    break e;
                case 'select':
                    ((t = n.value), t != null && Pa(e, !!n.multiple, t, !1));
            }
        }
    }
    var gr = !1;
    function Lf(e, t, n) {
        if (gr) return e(t, n);
        gr = !0;
        try {
            var a = e(t);
            return a;
        } finally {
            if (((gr = !1), (tl !== null || nl !== null) && (ns(), tl && ((t = tl), (e = nl), (nl = tl = null), _f(t), e))))
                for (t = 0; t < e.length; t++) _f(e[t]);
        }
    }
    function Pl(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var a = n[Tt] || null;
        if (a === null) return null;
        n = a[t];
        e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
                ((a = !a.disabled) || ((e = e.type), (a = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))), (e = !a));
                break e;
            default:
                e = !1;
        }
        if (e) return null;
        if (n && typeof n != 'function') throw Error(c(231, t, typeof n));
        return n;
    }
    var Tn = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
        vr = !1;
    if (Tn)
        try {
            var ei = {};
            (Object.defineProperty(ei, 'passive', {
                get: function () {
                    vr = !0;
                },
            }),
                window.addEventListener('test', ei, ei),
                window.removeEventListener('test', ei, ei));
        } catch {
            vr = !1;
        }
    var Zn = null,
        yr = null,
        go = null;
    function Uf() {
        if (go) return go;
        var e,
            t = yr,
            n = t.length,
            a,
            i = 'value' in Zn ? Zn.value : Zn.textContent,
            s = i.length;
        for (e = 0; e < n && t[e] === i[e]; e++);
        var d = n - e;
        for (a = 1; a <= d && t[n - a] === i[s - a]; a++);
        return (go = i.slice(e, 1 < a ? 1 - a : void 0));
    }
    function vo(e) {
        var t = e.keyCode;
        return ('charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0);
    }
    function yo() {
        return !0;
    }
    function Bf() {
        return !1;
    }
    function At(e) {
        function t(n, a, i, s, d) {
            ((this._reactName = n), (this._targetInst = i), (this.type = a), (this.nativeEvent = s), (this.target = d), (this.currentTarget = null));
            for (var b in e) e.hasOwnProperty(b) && ((n = e[b]), (this[b] = n ? n(s) : s[b]));
            return (
                (this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? yo : Bf),
                (this.isPropagationStopped = Bf),
                this
            );
        }
        return (
            x(t.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var n = this.nativeEvent;
                    n &&
                        (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
                        (this.isDefaultPrevented = yo));
                },
                stopPropagation: function () {
                    var n = this.nativeEvent;
                    n &&
                        (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
                        (this.isPropagationStopped = yo));
                },
                persist: function () {},
                isPersistent: yo,
            }),
            t
        );
    }
    var Na = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        bo = At(Na),
        ti = x({}, Na, { view: 0, detail: 0 }),
        Ry = At(ti),
        br,
        Sr,
        ni,
        So = x({}, ti, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: wr,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
                return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
            },
            movementX: function (e) {
                return 'movementX' in e
                    ? e.movementX
                    : (e !== ni &&
                          (ni && e.type === 'mousemove' ? ((br = e.screenX - ni.screenX), (Sr = e.screenY - ni.screenY)) : (Sr = br = 0), (ni = e)),
                      br);
            },
            movementY: function (e) {
                return 'movementY' in e ? e.movementY : Sr;
            },
        }),
        Hf = At(So),
        Oy = x({}, So, { dataTransfer: 0 }),
        ky = At(Oy),
        zy = x({}, ti, { relatedTarget: 0 }),
        xr = At(zy),
        Dy = x({}, Na, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        _y = At(Dy),
        Ly = x({}, Na, {
            clipboardData: function (e) {
                return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
            },
        }),
        Uy = At(Ly),
        By = x({}, Na, { data: 0 }),
        Vf = At(By),
        Hy = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
        },
        Vy = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
        },
        Gy = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
    function qy(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Gy[e]) ? !!t[e] : !1;
    }
    function wr() {
        return qy;
    }
    var Yy = x({}, ti, {
            key: function (e) {
                if (e.key) {
                    var t = Hy[e.key] || e.key;
                    if (t !== 'Unidentified') return t;
                }
                return e.type === 'keypress'
                    ? ((e = vo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
                    : e.type === 'keydown' || e.type === 'keyup'
                      ? Vy[e.keyCode] || 'Unidentified'
                      : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: wr,
            charCode: function (e) {
                return e.type === 'keypress' ? vo(e) : 0;
            },
            keyCode: function (e) {
                return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
            },
            which: function (e) {
                return e.type === 'keypress' ? vo(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
            },
        }),
        Xy = At(Yy),
        Ky = x({}, So, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
        }),
        Gf = At(Ky),
        Qy = x({}, ti, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: wr }),
        Zy = At(Qy),
        Iy = x({}, Na, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        Jy = At(Iy),
        Wy = x({}, So, {
            deltaX: function (e) {
                return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
                return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
        Fy = At(Wy),
        $y = x({}, Na, { newState: 0, oldState: 0 }),
        Py = At($y),
        e0 = [9, 13, 27, 32],
        Cr = Tn && 'CompositionEvent' in window,
        ai = null;
    Tn && 'documentMode' in document && (ai = document.documentMode);
    var t0 = Tn && 'TextEvent' in window && !ai,
        qf = Tn && (!Cr || (ai && 8 < ai && 11 >= ai)),
        Yf = ' ',
        Xf = !1;
    function Kf(e, t) {
        switch (e) {
            case 'keyup':
                return e0.indexOf(t.keyCode) !== -1;
            case 'keydown':
                return t.keyCode !== 229;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
                return !0;
            default:
                return !1;
        }
    }
    function Qf(e) {
        return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
    }
    var al = !1;
    function n0(e, t) {
        switch (e) {
            case 'compositionend':
                return Qf(t);
            case 'keypress':
                return t.which !== 32 ? null : ((Xf = !0), Yf);
            case 'textInput':
                return ((e = t.data), e === Yf && Xf ? null : e);
            default:
                return null;
        }
    }
    function a0(e, t) {
        if (al) return e === 'compositionend' || (!Cr && Kf(e, t)) ? ((e = Uf()), (go = yr = Zn = null), (al = !1), e) : null;
        switch (e) {
            case 'paste':
                return null;
            case 'keypress':
                if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                }
                return null;
            case 'compositionend':
                return qf && t.locale !== 'ko' ? null : t.data;
            default:
                return null;
        }
    }
    var l0 = {
        color: !0,
        date: !0,
        datetime: !0,
        'datetime-local': !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
    };
    function Zf(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === 'input' ? !!l0[e.type] : t === 'textarea';
    }
    function If(e, t, n, a) {
        (tl ? (nl ? nl.push(a) : (nl = [a])) : (tl = a),
            (t = cs(t, 'onChange')),
            0 < t.length && ((n = new bo('onChange', 'change', null, n, a)), e.push({ event: n, listeners: t })));
    }
    var li = null,
        ii = null;
    function i0(e) {
        Rh(e, 0);
    }
    function xo(e) {
        var t = $l(e);
        if (Mf(t)) return e;
    }
    function Jf(e, t) {
        if (e === 'change') return t;
    }
    var Wf = !1;
    if (Tn) {
        var Er;
        if (Tn) {
            var Tr = 'oninput' in document;
            if (!Tr) {
                var Ff = document.createElement('div');
                (Ff.setAttribute('oninput', 'return;'), (Tr = typeof Ff.oninput == 'function'));
            }
            Er = Tr;
        } else Er = !1;
        Wf = Er && (!document.documentMode || 9 < document.documentMode);
    }
    function $f() {
        li && (li.detachEvent('onpropertychange', Pf), (ii = li = null));
    }
    function Pf(e) {
        if (e.propertyName === 'value' && xo(ii)) {
            var t = [];
            (If(t, ii, e, pr(e)), Lf(i0, t));
        }
    }
    function o0(e, t, n) {
        e === 'focusin' ? ($f(), (li = t), (ii = n), li.attachEvent('onpropertychange', Pf)) : e === 'focusout' && $f();
    }
    function s0(e) {
        if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return xo(ii);
    }
    function r0(e, t) {
        if (e === 'click') return xo(t);
    }
    function c0(e, t) {
        if (e === 'input' || e === 'change') return xo(t);
    }
    function u0(e, t) {
        return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var Dt = typeof Object.is == 'function' ? Object.is : u0;
    function oi(e, t) {
        if (Dt(e, t)) return !0;
        if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
        var n = Object.keys(e),
            a = Object.keys(t);
        if (n.length !== a.length) return !1;
        for (a = 0; a < n.length; a++) {
            var i = n[a];
            if (!_e.call(t, i) || !Dt(e[i], t[i])) return !1;
        }
        return !0;
    }
    function ed(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
    }
    function td(e, t) {
        var n = ed(e);
        e = 0;
        for (var a; n; ) {
            if (n.nodeType === 3) {
                if (((a = e + n.textContent.length), e <= t && a >= t)) return { node: n, offset: t - e };
                e = a;
            }
            e: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e;
                    }
                    n = n.parentNode;
                }
                n = void 0;
            }
            n = ed(n);
        }
    }
    function nd(e, t) {
        return e && t
            ? e === t
                ? !0
                : e && e.nodeType === 3
                  ? !1
                  : t && t.nodeType === 3
                    ? nd(e, t.parentNode)
                    : 'contains' in e
                      ? e.contains(t)
                      : e.compareDocumentPosition
                        ? !!(e.compareDocumentPosition(t) & 16)
                        : !1
            : !1;
    }
    function ad(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = ho(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var n = typeof t.contentWindow.location.href == 'string';
            } catch {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = ho(e.document);
        }
        return t;
    }
    function Ar(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
            t &&
            ((t === 'input' && (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
                t === 'textarea' ||
                e.contentEditable === 'true')
        );
    }
    var f0 = Tn && 'documentMode' in document && 11 >= document.documentMode,
        ll = null,
        Nr = null,
        si = null,
        jr = !1;
    function ld(e, t, n) {
        var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        jr ||
            ll == null ||
            ll !== ho(a) ||
            ((a = ll),
            'selectionStart' in a && Ar(a)
                ? (a = { start: a.selectionStart, end: a.selectionEnd })
                : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
                  (a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset })),
            (si && oi(si, a)) ||
                ((si = a),
                (a = cs(Nr, 'onSelect')),
                0 < a.length && ((t = new bo('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: a }), (t.target = ll))));
    }
    function ja(e, t) {
        var n = {};
        return ((n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n);
    }
    var il = {
            animationend: ja('Animation', 'AnimationEnd'),
            animationiteration: ja('Animation', 'AnimationIteration'),
            animationstart: ja('Animation', 'AnimationStart'),
            transitionrun: ja('Transition', 'TransitionRun'),
            transitionstart: ja('Transition', 'TransitionStart'),
            transitioncancel: ja('Transition', 'TransitionCancel'),
            transitionend: ja('Transition', 'TransitionEnd'),
        },
        Mr = {},
        id = {};
    Tn &&
        ((id = document.createElement('div').style),
        'AnimationEvent' in window || (delete il.animationend.animation, delete il.animationiteration.animation, delete il.animationstart.animation),
        'TransitionEvent' in window || delete il.transitionend.transition);
    function Ma(e) {
        if (Mr[e]) return Mr[e];
        if (!il[e]) return e;
        var t = il[e],
            n;
        for (n in t) if (t.hasOwnProperty(n) && n in id) return (Mr[e] = t[n]);
        return e;
    }
    var od = Ma('animationend'),
        sd = Ma('animationiteration'),
        rd = Ma('animationstart'),
        d0 = Ma('transitionrun'),
        m0 = Ma('transitionstart'),
        h0 = Ma('transitioncancel'),
        cd = Ma('transitionend'),
        ud = new Map(),
        Rr =
            'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
                ' '
            );
    Rr.push('scrollEnd');
    function nn(e, t) {
        (ud.set(e, t), Aa(t, [e]));
    }
    var wo =
            typeof reportError == 'function'
                ? reportError
                : function (e) {
                      if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
                          var t = new window.ErrorEvent('error', {
                              bubbles: !0,
                              cancelable: !0,
                              message: typeof e == 'object' && e !== null && typeof e.message == 'string' ? String(e.message) : String(e),
                              error: e,
                          });
                          if (!window.dispatchEvent(t)) return;
                      } else if (typeof process == 'object' && typeof process.emit == 'function') {
                          process.emit('uncaughtException', e);
                          return;
                      }
                      console.error(e);
                  },
        Kt = [],
        ol = 0,
        Or = 0;
    function Co() {
        for (var e = ol, t = (Or = ol = 0); t < e; ) {
            var n = Kt[t];
            Kt[t++] = null;
            var a = Kt[t];
            Kt[t++] = null;
            var i = Kt[t];
            Kt[t++] = null;
            var s = Kt[t];
            if (((Kt[t++] = null), a !== null && i !== null)) {
                var d = a.pending;
                (d === null ? (i.next = i) : ((i.next = d.next), (d.next = i)), (a.pending = i));
            }
            s !== 0 && fd(n, i, s);
        }
    }
    function Eo(e, t, n, a) {
        ((Kt[ol++] = e), (Kt[ol++] = t), (Kt[ol++] = n), (Kt[ol++] = a), (Or |= a), (e.lanes |= a), (e = e.alternate), e !== null && (e.lanes |= a));
    }
    function kr(e, t, n, a) {
        return (Eo(e, t, n, a), To(e));
    }
    function Ra(e, t) {
        return (Eo(e, null, null, t), To(e));
    }
    function fd(e, t, n) {
        e.lanes |= n;
        var a = e.alternate;
        a !== null && (a.lanes |= n);
        for (var i = !1, s = e.return; s !== null; )
            ((s.childLanes |= n),
                (a = s.alternate),
                a !== null && (a.childLanes |= n),
                s.tag === 22 && ((e = s.stateNode), e === null || e._visibility & 1 || (i = !0)),
                (e = s),
                (s = s.return));
        return e.tag === 3
            ? ((s = e.stateNode),
              i &&
                  t !== null &&
                  ((i = 31 - xt(n)), (e = s.hiddenUpdates), (a = e[i]), a === null ? (e[i] = [t]) : a.push(t), (t.lane = n | 536870912)),
              s)
            : null;
    }
    function To(e) {
        if (50 < Mi) throw ((Mi = 0), (Gc = null), Error(c(185)));
        for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
        return e.tag === 3 ? e.stateNode : null;
    }
    var sl = {};
    function p0(e, t, n, a) {
        ((this.tag = e),
            (this.key = n),
            (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = a),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null));
    }
    function _t(e, t, n, a) {
        return new p0(e, t, n, a);
    }
    function zr(e) {
        return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function An(e, t) {
        var n = e.alternate;
        return (
            n === null
                ? ((n = _t(e.tag, t, e.key, e.mode)),
                  (n.elementType = e.elementType),
                  (n.type = e.type),
                  (n.stateNode = e.stateNode),
                  (n.alternate = e),
                  (e.alternate = n))
                : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
            (n.flags = e.flags & 65011712),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            (n.refCleanup = e.refCleanup),
            n
        );
    }
    function dd(e, t) {
        e.flags &= 65011714;
        var n = e.alternate;
        return (
            n === null
                ? ((e.childLanes = 0),
                  (e.lanes = t),
                  (e.child = null),
                  (e.subtreeFlags = 0),
                  (e.memoizedProps = null),
                  (e.memoizedState = null),
                  (e.updateQueue = null),
                  (e.dependencies = null),
                  (e.stateNode = null))
                : ((e.childLanes = n.childLanes),
                  (e.lanes = n.lanes),
                  (e.child = n.child),
                  (e.subtreeFlags = 0),
                  (e.deletions = null),
                  (e.memoizedProps = n.memoizedProps),
                  (e.memoizedState = n.memoizedState),
                  (e.updateQueue = n.updateQueue),
                  (e.type = n.type),
                  (t = n.dependencies),
                  (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
            e
        );
    }
    function Ao(e, t, n, a, i, s) {
        var d = 0;
        if (((a = e), typeof e == 'function')) zr(e) && (d = 1);
        else if (typeof e == 'string') d = Sb(e, n, P.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
        else
            e: switch (e) {
                case ae:
                    return ((e = _t(31, n, t, i)), (e.elementType = ae), (e.lanes = s), e);
                case w:
                    return Oa(n.children, i, s, t);
                case N:
                    ((d = 8), (i |= 24));
                    break;
                case L:
                    return ((e = _t(12, n, t, i | 2)), (e.elementType = L), (e.lanes = s), e);
                case W:
                    return ((e = _t(13, n, t, i)), (e.elementType = W), (e.lanes = s), e);
                case ne:
                    return ((e = _t(19, n, t, i)), (e.elementType = ne), (e.lanes = s), e);
                default:
                    if (typeof e == 'object' && e !== null)
                        switch (e.$$typeof) {
                            case H:
                                d = 10;
                                break e;
                            case B:
                                d = 9;
                                break e;
                            case K:
                                d = 11;
                                break e;
                            case k:
                                d = 14;
                                break e;
                            case G:
                                ((d = 16), (a = null));
                                break e;
                        }
                    ((d = 29), (n = Error(c(130, e === null ? 'null' : typeof e, ''))), (a = null));
            }
        return ((t = _t(d, n, t, i)), (t.elementType = e), (t.type = a), (t.lanes = s), t);
    }
    function Oa(e, t, n, a) {
        return ((e = _t(7, e, a, t)), (e.lanes = n), e);
    }
    function Dr(e, t, n) {
        return ((e = _t(6, e, null, t)), (e.lanes = n), e);
    }
    function md(e) {
        var t = _t(18, null, null, 0);
        return ((t.stateNode = e), t);
    }
    function _r(e, t, n) {
        return (
            (t = _t(4, e.children !== null ? e.children : [], e.key, t)),
            (t.lanes = n),
            (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
            t
        );
    }
    var hd = new WeakMap();
    function Qt(e, t) {
        if (typeof e == 'object' && e !== null) {
            var n = hd.get(e);
            return n !== void 0 ? n : ((t = { value: e, source: t, stack: Se(t) }), hd.set(e, t), t);
        }
        return { value: e, source: t, stack: Se(t) };
    }
    var rl = [],
        cl = 0,
        No = null,
        ri = 0,
        Zt = [],
        It = 0,
        In = null,
        mn = 1,
        hn = '';
    function Nn(e, t) {
        ((rl[cl++] = ri), (rl[cl++] = No), (No = e), (ri = t));
    }
    function pd(e, t, n) {
        ((Zt[It++] = mn), (Zt[It++] = hn), (Zt[It++] = In), (In = e));
        var a = mn;
        e = hn;
        var i = 32 - xt(a) - 1;
        ((a &= ~(1 << i)), (n += 1));
        var s = 32 - xt(t) + i;
        if (30 < s) {
            var d = i - (i % 5);
            ((s = (a & ((1 << d) - 1)).toString(32)), (a >>= d), (i -= d), (mn = (1 << (32 - xt(t) + i)) | (n << i) | a), (hn = s + e));
        } else ((mn = (1 << s) | (n << i) | a), (hn = e));
    }
    function Lr(e) {
        e.return !== null && (Nn(e, 1), pd(e, 1, 0));
    }
    function Ur(e) {
        for (; e === No; ) ((No = rl[--cl]), (rl[cl] = null), (ri = rl[--cl]), (rl[cl] = null));
        for (; e === In; ) ((In = Zt[--It]), (Zt[It] = null), (hn = Zt[--It]), (Zt[It] = null), (mn = Zt[--It]), (Zt[It] = null));
    }
    function gd(e, t) {
        ((Zt[It++] = mn), (Zt[It++] = hn), (Zt[It++] = In), (mn = t.id), (hn = t.overflow), (In = e));
    }
    var mt = null,
        Ke = null,
        ke = !1,
        Jn = null,
        Jt = !1,
        Br = Error(c(519));
    function Wn(e) {
        var t = Error(c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', ''));
        throw (ci(Qt(t, e)), Br);
    }
    function vd(e) {
        var t = e.stateNode,
            n = e.type,
            a = e.memoizedProps;
        switch (((t[dt] = e), (t[Tt] = a), n)) {
            case 'dialog':
                (je('cancel', t), je('close', t));
                break;
            case 'iframe':
            case 'object':
            case 'embed':
                je('load', t);
                break;
            case 'video':
            case 'audio':
                for (n = 0; n < Oi.length; n++) je(Oi[n], t);
                break;
            case 'source':
                je('error', t);
                break;
            case 'img':
            case 'image':
            case 'link':
                (je('error', t), je('load', t));
                break;
            case 'details':
                je('toggle', t);
                break;
            case 'input':
                (je('invalid', t), Rf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0));
                break;
            case 'select':
                je('invalid', t);
                break;
            case 'textarea':
                (je('invalid', t), kf(t, a.value, a.defaultValue, a.children));
        }
        ((n = a.children),
            (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
            t.textContent === '' + n ||
            a.suppressHydrationWarning === !0 ||
            Dh(t.textContent, n)
                ? (a.popover != null && (je('beforetoggle', t), je('toggle', t)),
                  a.onScroll != null && je('scroll', t),
                  a.onScrollEnd != null && je('scrollend', t),
                  a.onClick != null && (t.onclick = En),
                  (t = !0))
                : (t = !1),
            t || Wn(e, !0));
    }
    function yd(e) {
        for (mt = e.return; mt; )
            switch (mt.tag) {
                case 5:
                case 31:
                case 13:
                    Jt = !1;
                    return;
                case 27:
                case 3:
                    Jt = !0;
                    return;
                default:
                    mt = mt.return;
            }
    }
    function ul(e) {
        if (e !== mt) return !1;
        if (!ke) return (yd(e), (ke = !0), !1);
        var t = e.tag,
            n;
        if (
            ((n = t !== 3 && t !== 27) &&
                ((n = t === 5) && ((n = e.type), (n = !(n !== 'form' && n !== 'button') || nu(e.type, e.memoizedProps))), (n = !n)),
            n && Ke && Wn(e),
            yd(e),
            t === 13)
        ) {
            if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(c(317));
            Ke = Yh(e);
        } else if (t === 31) {
            if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(c(317));
            Ke = Yh(e);
        } else t === 27 ? ((t = Ke), ua(e.type) ? ((e = su), (su = null), (Ke = e)) : (Ke = t)) : (Ke = mt ? Ft(e.stateNode.nextSibling) : null);
        return !0;
    }
    function ka() {
        ((Ke = mt = null), (ke = !1));
    }
    function Hr() {
        var e = Jn;
        return (e !== null && (Rt === null ? (Rt = e) : Rt.push.apply(Rt, e), (Jn = null)), e);
    }
    function ci(e) {
        Jn === null ? (Jn = [e]) : Jn.push(e);
    }
    var Vr = E(null),
        za = null,
        jn = null;
    function Fn(e, t, n) {
        (F(Vr, t._currentValue), (t._currentValue = n));
    }
    function Mn(e) {
        ((e._currentValue = Vr.current), q(Vr));
    }
    function Gr(e, t, n) {
        for (; e !== null; ) {
            var a = e.alternate;
            if (
                ((e.childLanes & t) !== t
                    ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
                    : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
                e === n)
            )
                break;
            e = e.return;
        }
    }
    function qr(e, t, n, a) {
        var i = e.child;
        for (i !== null && (i.return = e); i !== null; ) {
            var s = i.dependencies;
            if (s !== null) {
                var d = i.child;
                s = s.firstContext;
                e: for (; s !== null; ) {
                    var b = s;
                    s = i;
                    for (var C = 0; C < t.length; C++)
                        if (b.context === t[C]) {
                            ((s.lanes |= n), (b = s.alternate), b !== null && (b.lanes |= n), Gr(s.return, n, e), a || (d = null));
                            break e;
                        }
                    s = b.next;
                }
            } else if (i.tag === 18) {
                if (((d = i.return), d === null)) throw Error(c(341));
                ((d.lanes |= n), (s = d.alternate), s !== null && (s.lanes |= n), Gr(d, n, e), (d = null));
            } else d = i.child;
            if (d !== null) d.return = i;
            else
                for (d = i; d !== null; ) {
                    if (d === e) {
                        d = null;
                        break;
                    }
                    if (((i = d.sibling), i !== null)) {
                        ((i.return = d.return), (d = i));
                        break;
                    }
                    d = d.return;
                }
            i = d;
        }
    }
    function fl(e, t, n, a) {
        e = null;
        for (var i = t, s = !1; i !== null; ) {
            if (!s) {
                if ((i.flags & 524288) !== 0) s = !0;
                else if ((i.flags & 262144) !== 0) break;
            }
            if (i.tag === 10) {
                var d = i.alternate;
                if (d === null) throw Error(c(387));
                if (((d = d.memoizedProps), d !== null)) {
                    var b = i.type;
                    Dt(i.pendingProps.value, d.value) || (e !== null ? e.push(b) : (e = [b]));
                }
            } else if (i === $.current) {
                if (((d = i.alternate), d === null)) throw Error(c(387));
                d.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(Li) : (e = [Li]));
            }
            i = i.return;
        }
        (e !== null && qr(t, e, n, a), (t.flags |= 262144));
    }
    function jo(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!Dt(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
        }
        return !1;
    }
    function Da(e) {
        ((za = e), (jn = null), (e = e.dependencies), e !== null && (e.firstContext = null));
    }
    function ht(e) {
        return bd(za, e);
    }
    function Mo(e, t) {
        return (za === null && Da(e), bd(e, t));
    }
    function bd(e, t) {
        var n = t._currentValue;
        if (((t = { context: t, memoizedValue: n, next: null }), jn === null)) {
            if (e === null) throw Error(c(308));
            ((jn = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
        } else jn = jn.next = t;
        return n;
    }
    var g0 =
            typeof AbortController < 'u'
                ? AbortController
                : function () {
                      var e = [],
                          t = (this.signal = {
                              aborted: !1,
                              addEventListener: function (n, a) {
                                  e.push(a);
                              },
                          });
                      this.abort = function () {
                          ((t.aborted = !0),
                              e.forEach(function (n) {
                                  return n();
                              }));
                      };
                  },
        v0 = l.unstable_scheduleCallback,
        y0 = l.unstable_NormalPriority,
        et = { $$typeof: H, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
    function Yr() {
        return { controller: new g0(), data: new Map(), refCount: 0 };
    }
    function ui(e) {
        (e.refCount--,
            e.refCount === 0 &&
                v0(y0, function () {
                    e.controller.abort();
                }));
    }
    var fi = null,
        Xr = 0,
        dl = 0,
        ml = null;
    function b0(e, t) {
        if (fi === null) {
            var n = (fi = []);
            ((Xr = 0),
                (dl = Zc()),
                (ml = {
                    status: 'pending',
                    value: void 0,
                    then: function (a) {
                        n.push(a);
                    },
                }));
        }
        return (Xr++, t.then(Sd, Sd), t);
    }
    function Sd() {
        if (--Xr === 0 && fi !== null) {
            ml !== null && (ml.status = 'fulfilled');
            var e = fi;
            ((fi = null), (dl = 0), (ml = null));
            for (var t = 0; t < e.length; t++) (0, e[t])();
        }
    }
    function S0(e, t) {
        var n = [],
            a = {
                status: 'pending',
                value: null,
                reason: null,
                then: function (i) {
                    n.push(i);
                },
            };
        return (
            e.then(
                function () {
                    ((a.status = 'fulfilled'), (a.value = t));
                    for (var i = 0; i < n.length; i++) (0, n[i])(t);
                },
                function (i) {
                    for (a.status = 'rejected', a.reason = i, i = 0; i < n.length; i++) (0, n[i])(void 0);
                }
            ),
            a
        );
    }
    var xd = A.S;
    A.S = function (e, t) {
        ((lh = St()), typeof t == 'object' && t !== null && typeof t.then == 'function' && b0(e, t), xd !== null && xd(e, t));
    };
    var _a = E(null);
    function Kr() {
        var e = _a.current;
        return e !== null ? e : Xe.pooledCache;
    }
    function Ro(e, t) {
        t === null ? F(_a, _a.current) : F(_a, t.pool);
    }
    function wd() {
        var e = Kr();
        return e === null ? null : { parent: et._currentValue, pool: e };
    }
    var hl = Error(c(460)),
        Qr = Error(c(474)),
        Oo = Error(c(542)),
        ko = { then: function () {} };
    function Cd(e) {
        return ((e = e.status), e === 'fulfilled' || e === 'rejected');
    }
    function Ed(e, t, n) {
        switch (((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(En, En), (t = n)), t.status)) {
            case 'fulfilled':
                return t.value;
            case 'rejected':
                throw ((e = t.reason), Ad(e), e);
            default:
                if (typeof t.status == 'string') t.then(En, En);
                else {
                    if (((e = Xe), e !== null && 100 < e.shellSuspendCounter)) throw Error(c(482));
                    ((e = t),
                        (e.status = 'pending'),
                        e.then(
                            function (a) {
                                if (t.status === 'pending') {
                                    var i = t;
                                    ((i.status = 'fulfilled'), (i.value = a));
                                }
                            },
                            function (a) {
                                if (t.status === 'pending') {
                                    var i = t;
                                    ((i.status = 'rejected'), (i.reason = a));
                                }
                            }
                        ));
                }
                switch (t.status) {
                    case 'fulfilled':
                        return t.value;
                    case 'rejected':
                        throw ((e = t.reason), Ad(e), e);
                }
                throw ((Ua = t), hl);
        }
    }
    function La(e) {
        try {
            var t = e._init;
            return t(e._payload);
        } catch (n) {
            throw n !== null && typeof n == 'object' && typeof n.then == 'function' ? ((Ua = n), hl) : n;
        }
    }
    var Ua = null;
    function Td() {
        if (Ua === null) throw Error(c(459));
        var e = Ua;
        return ((Ua = null), e);
    }
    function Ad(e) {
        if (e === hl || e === Oo) throw Error(c(483));
    }
    var pl = null,
        di = 0;
    function zo(e) {
        var t = di;
        return ((di += 1), pl === null && (pl = []), Ed(pl, e, t));
    }
    function mi(e, t) {
        ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
    }
    function Do(e, t) {
        throw t.$$typeof === T
            ? Error(c(525))
            : ((e = Object.prototype.toString.call(t)),
              Error(c(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)));
    }
    function Nd(e) {
        function t(O, j) {
            if (e) {
                var D = O.deletions;
                D === null ? ((O.deletions = [j]), (O.flags |= 16)) : D.push(j);
            }
        }
        function n(O, j) {
            if (!e) return null;
            for (; j !== null; ) (t(O, j), (j = j.sibling));
            return null;
        }
        function a(O) {
            for (var j = new Map(); O !== null; ) (O.key !== null ? j.set(O.key, O) : j.set(O.index, O), (O = O.sibling));
            return j;
        }
        function i(O, j) {
            return ((O = An(O, j)), (O.index = 0), (O.sibling = null), O);
        }
        function s(O, j, D) {
            return (
                (O.index = D),
                e
                    ? ((D = O.alternate), D !== null ? ((D = D.index), D < j ? ((O.flags |= 67108866), j) : D) : ((O.flags |= 67108866), j))
                    : ((O.flags |= 1048576), j)
            );
        }
        function d(O) {
            return (e && O.alternate === null && (O.flags |= 67108866), O);
        }
        function b(O, j, D, Z) {
            return j === null || j.tag !== 6 ? ((j = Dr(D, O.mode, Z)), (j.return = O), j) : ((j = i(j, D)), (j.return = O), j);
        }
        function C(O, j, D, Z) {
            var ge = D.type;
            return ge === w
                ? X(O, j, D.props.children, Z, D.key)
                : j !== null && (j.elementType === ge || (typeof ge == 'object' && ge !== null && ge.$$typeof === G && La(ge) === j.type))
                  ? ((j = i(j, D.props)), mi(j, D), (j.return = O), j)
                  : ((j = Ao(D.type, D.key, D.props, null, O.mode, Z)), mi(j, D), (j.return = O), j);
        }
        function _(O, j, D, Z) {
            return j === null || j.tag !== 4 || j.stateNode.containerInfo !== D.containerInfo || j.stateNode.implementation !== D.implementation
                ? ((j = _r(D, O.mode, Z)), (j.return = O), j)
                : ((j = i(j, D.children || [])), (j.return = O), j);
        }
        function X(O, j, D, Z, ge) {
            return j === null || j.tag !== 7 ? ((j = Oa(D, O.mode, Z, ge)), (j.return = O), j) : ((j = i(j, D)), (j.return = O), j);
        }
        function I(O, j, D) {
            if ((typeof j == 'string' && j !== '') || typeof j == 'number' || typeof j == 'bigint')
                return ((j = Dr('' + j, O.mode, D)), (j.return = O), j);
            if (typeof j == 'object' && j !== null) {
                switch (j.$$typeof) {
                    case M:
                        return ((D = Ao(j.type, j.key, j.props, null, O.mode, D)), mi(D, j), (D.return = O), D);
                    case R:
                        return ((j = _r(j, O.mode, D)), (j.return = O), j);
                    case G:
                        return ((j = La(j)), I(O, j, D));
                }
                if (Q(j) || le(j)) return ((j = Oa(j, O.mode, D, null)), (j.return = O), j);
                if (typeof j.then == 'function') return I(O, zo(j), D);
                if (j.$$typeof === H) return I(O, Mo(O, j), D);
                Do(O, j);
            }
            return null;
        }
        function U(O, j, D, Z) {
            var ge = j !== null ? j.key : null;
            if ((typeof D == 'string' && D !== '') || typeof D == 'number' || typeof D == 'bigint') return ge !== null ? null : b(O, j, '' + D, Z);
            if (typeof D == 'object' && D !== null) {
                switch (D.$$typeof) {
                    case M:
                        return D.key === ge ? C(O, j, D, Z) : null;
                    case R:
                        return D.key === ge ? _(O, j, D, Z) : null;
                    case G:
                        return ((D = La(D)), U(O, j, D, Z));
                }
                if (Q(D) || le(D)) return ge !== null ? null : X(O, j, D, Z, null);
                if (typeof D.then == 'function') return U(O, j, zo(D), Z);
                if (D.$$typeof === H) return U(O, j, Mo(O, D), Z);
                Do(O, D);
            }
            return null;
        }
        function V(O, j, D, Z, ge) {
            if ((typeof Z == 'string' && Z !== '') || typeof Z == 'number' || typeof Z == 'bigint')
                return ((O = O.get(D) || null), b(j, O, '' + Z, ge));
            if (typeof Z == 'object' && Z !== null) {
                switch (Z.$$typeof) {
                    case M:
                        return ((O = O.get(Z.key === null ? D : Z.key) || null), C(j, O, Z, ge));
                    case R:
                        return ((O = O.get(Z.key === null ? D : Z.key) || null), _(j, O, Z, ge));
                    case G:
                        return ((Z = La(Z)), V(O, j, D, Z, ge));
                }
                if (Q(Z) || le(Z)) return ((O = O.get(D) || null), X(j, O, Z, ge, null));
                if (typeof Z.then == 'function') return V(O, j, D, zo(Z), ge);
                if (Z.$$typeof === H) return V(O, j, D, Mo(j, Z), ge);
                Do(j, Z);
            }
            return null;
        }
        function se(O, j, D, Z) {
            for (var ge = null, ze = null, me = j, Ee = (j = 0), Oe = null; me !== null && Ee < D.length; Ee++) {
                me.index > Ee ? ((Oe = me), (me = null)) : (Oe = me.sibling);
                var De = U(O, me, D[Ee], Z);
                if (De === null) {
                    me === null && (me = Oe);
                    break;
                }
                (e && me && De.alternate === null && t(O, me), (j = s(De, j, Ee)), ze === null ? (ge = De) : (ze.sibling = De), (ze = De), (me = Oe));
            }
            if (Ee === D.length) return (n(O, me), ke && Nn(O, Ee), ge);
            if (me === null) {
                for (; Ee < D.length; Ee++)
                    ((me = I(O, D[Ee], Z)), me !== null && ((j = s(me, j, Ee)), ze === null ? (ge = me) : (ze.sibling = me), (ze = me)));
                return (ke && Nn(O, Ee), ge);
            }
            for (me = a(me); Ee < D.length; Ee++)
                ((Oe = V(me, O, Ee, D[Ee], Z)),
                    Oe !== null &&
                        (e && Oe.alternate !== null && me.delete(Oe.key === null ? Ee : Oe.key),
                        (j = s(Oe, j, Ee)),
                        ze === null ? (ge = Oe) : (ze.sibling = Oe),
                        (ze = Oe)));
            return (
                e &&
                    me.forEach(function (pa) {
                        return t(O, pa);
                    }),
                ke && Nn(O, Ee),
                ge
            );
        }
        function ve(O, j, D, Z) {
            if (D == null) throw Error(c(151));
            for (var ge = null, ze = null, me = j, Ee = (j = 0), Oe = null, De = D.next(); me !== null && !De.done; Ee++, De = D.next()) {
                me.index > Ee ? ((Oe = me), (me = null)) : (Oe = me.sibling);
                var pa = U(O, me, De.value, Z);
                if (pa === null) {
                    me === null && (me = Oe);
                    break;
                }
                (e && me && pa.alternate === null && t(O, me), (j = s(pa, j, Ee)), ze === null ? (ge = pa) : (ze.sibling = pa), (ze = pa), (me = Oe));
            }
            if (De.done) return (n(O, me), ke && Nn(O, Ee), ge);
            if (me === null) {
                for (; !De.done; Ee++, De = D.next())
                    ((De = I(O, De.value, Z)), De !== null && ((j = s(De, j, Ee)), ze === null ? (ge = De) : (ze.sibling = De), (ze = De)));
                return (ke && Nn(O, Ee), ge);
            }
            for (me = a(me); !De.done; Ee++, De = D.next())
                ((De = V(me, O, Ee, De.value, Z)),
                    De !== null &&
                        (e && De.alternate !== null && me.delete(De.key === null ? Ee : De.key),
                        (j = s(De, j, Ee)),
                        ze === null ? (ge = De) : (ze.sibling = De),
                        (ze = De)));
            return (
                e &&
                    me.forEach(function (Ob) {
                        return t(O, Ob);
                    }),
                ke && Nn(O, Ee),
                ge
            );
        }
        function qe(O, j, D, Z) {
            if (
                (typeof D == 'object' && D !== null && D.type === w && D.key === null && (D = D.props.children), typeof D == 'object' && D !== null)
            ) {
                switch (D.$$typeof) {
                    case M:
                        e: {
                            for (var ge = D.key; j !== null; ) {
                                if (j.key === ge) {
                                    if (((ge = D.type), ge === w)) {
                                        if (j.tag === 7) {
                                            (n(O, j.sibling), (Z = i(j, D.props.children)), (Z.return = O), (O = Z));
                                            break e;
                                        }
                                    } else if (
                                        j.elementType === ge ||
                                        (typeof ge == 'object' && ge !== null && ge.$$typeof === G && La(ge) === j.type)
                                    ) {
                                        (n(O, j.sibling), (Z = i(j, D.props)), mi(Z, D), (Z.return = O), (O = Z));
                                        break e;
                                    }
                                    n(O, j);
                                    break;
                                } else t(O, j);
                                j = j.sibling;
                            }
                            D.type === w
                                ? ((Z = Oa(D.props.children, O.mode, Z, D.key)), (Z.return = O), (O = Z))
                                : ((Z = Ao(D.type, D.key, D.props, null, O.mode, Z)), mi(Z, D), (Z.return = O), (O = Z));
                        }
                        return d(O);
                    case R:
                        e: {
                            for (ge = D.key; j !== null; ) {
                                if (j.key === ge)
                                    if (
                                        j.tag === 4 &&
                                        j.stateNode.containerInfo === D.containerInfo &&
                                        j.stateNode.implementation === D.implementation
                                    ) {
                                        (n(O, j.sibling), (Z = i(j, D.children || [])), (Z.return = O), (O = Z));
                                        break e;
                                    } else {
                                        n(O, j);
                                        break;
                                    }
                                else t(O, j);
                                j = j.sibling;
                            }
                            ((Z = _r(D, O.mode, Z)), (Z.return = O), (O = Z));
                        }
                        return d(O);
                    case G:
                        return ((D = La(D)), qe(O, j, D, Z));
                }
                if (Q(D)) return se(O, j, D, Z);
                if (le(D)) {
                    if (((ge = le(D)), typeof ge != 'function')) throw Error(c(150));
                    return ((D = ge.call(D)), ve(O, j, D, Z));
                }
                if (typeof D.then == 'function') return qe(O, j, zo(D), Z);
                if (D.$$typeof === H) return qe(O, j, Mo(O, D), Z);
                Do(O, D);
            }
            return (typeof D == 'string' && D !== '') || typeof D == 'number' || typeof D == 'bigint'
                ? ((D = '' + D),
                  j !== null && j.tag === 6
                      ? (n(O, j.sibling), (Z = i(j, D)), (Z.return = O), (O = Z))
                      : (n(O, j), (Z = Dr(D, O.mode, Z)), (Z.return = O), (O = Z)),
                  d(O))
                : n(O, j);
        }
        return function (O, j, D, Z) {
            try {
                di = 0;
                var ge = qe(O, j, D, Z);
                return ((pl = null), ge);
            } catch (me) {
                if (me === hl || me === Oo) throw me;
                var ze = _t(29, me, null, O.mode);
                return ((ze.lanes = Z), (ze.return = O), ze);
            } finally {
            }
        };
    }
    var Ba = Nd(!0),
        jd = Nd(!1),
        $n = !1;
    function Zr(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
        };
    }
    function Ir(e, t) {
        ((e = e.updateQueue),
            t.updateQueue === e &&
                (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    callbacks: null,
                }));
    }
    function Pn(e) {
        return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function ea(e, t, n) {
        var a = e.updateQueue;
        if (a === null) return null;
        if (((a = a.shared), (Le & 2) !== 0)) {
            var i = a.pending;
            return (i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (a.pending = t), (t = To(e)), fd(e, null, n), t);
        }
        return (Eo(e, a, t, n), To(e));
    }
    function hi(e, t, n) {
        if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))) {
            var a = t.lanes;
            ((a &= e.pendingLanes), (n |= a), (t.lanes = n), bf(e, n));
        }
    }
    function Jr(e, t) {
        var n = e.updateQueue,
            a = e.alternate;
        if (a !== null && ((a = a.updateQueue), n === a)) {
            var i = null,
                s = null;
            if (((n = n.firstBaseUpdate), n !== null)) {
                do {
                    var d = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
                    (s === null ? (i = s = d) : (s = s.next = d), (n = n.next));
                } while (n !== null);
                s === null ? (i = s = t) : (s = s.next = t);
            } else i = s = t;
            ((n = { baseState: a.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: a.shared, callbacks: a.callbacks }), (e.updateQueue = n));
            return;
        }
        ((e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t));
    }
    var Wr = !1;
    function pi() {
        if (Wr) {
            var e = ml;
            if (e !== null) throw e;
        }
    }
    function gi(e, t, n, a) {
        Wr = !1;
        var i = e.updateQueue;
        $n = !1;
        var s = i.firstBaseUpdate,
            d = i.lastBaseUpdate,
            b = i.shared.pending;
        if (b !== null) {
            i.shared.pending = null;
            var C = b,
                _ = C.next;
            ((C.next = null), d === null ? (s = _) : (d.next = _), (d = C));
            var X = e.alternate;
            X !== null &&
                ((X = X.updateQueue),
                (b = X.lastBaseUpdate),
                b !== d && (b === null ? (X.firstBaseUpdate = _) : (b.next = _), (X.lastBaseUpdate = C)));
        }
        if (s !== null) {
            var I = i.baseState;
            ((d = 0), (X = _ = C = null), (b = s));
            do {
                var U = b.lane & -536870913,
                    V = U !== b.lane;
                if (V ? (Re & U) === U : (a & U) === U) {
                    (U !== 0 && U === dl && (Wr = !0),
                        X !== null && (X = X.next = { lane: 0, tag: b.tag, payload: b.payload, callback: null, next: null }));
                    e: {
                        var se = e,
                            ve = b;
                        U = t;
                        var qe = n;
                        switch (ve.tag) {
                            case 1:
                                if (((se = ve.payload), typeof se == 'function')) {
                                    I = se.call(qe, I, U);
                                    break e;
                                }
                                I = se;
                                break e;
                            case 3:
                                se.flags = (se.flags & -65537) | 128;
                            case 0:
                                if (((se = ve.payload), (U = typeof se == 'function' ? se.call(qe, I, U) : se), U == null)) break e;
                                I = x({}, I, U);
                                break e;
                            case 2:
                                $n = !0;
                        }
                    }
                    ((U = b.callback),
                        U !== null && ((e.flags |= 64), V && (e.flags |= 8192), (V = i.callbacks), V === null ? (i.callbacks = [U]) : V.push(U)));
                } else
                    ((V = { lane: U, tag: b.tag, payload: b.payload, callback: b.callback, next: null }),
                        X === null ? ((_ = X = V), (C = I)) : (X = X.next = V),
                        (d |= U));
                if (((b = b.next), b === null)) {
                    if (((b = i.shared.pending), b === null)) break;
                    ((V = b), (b = V.next), (V.next = null), (i.lastBaseUpdate = V), (i.shared.pending = null));
                }
            } while (!0);
            (X === null && (C = I),
                (i.baseState = C),
                (i.firstBaseUpdate = _),
                (i.lastBaseUpdate = X),
                s === null && (i.shared.lanes = 0),
                (ia |= d),
                (e.lanes = d),
                (e.memoizedState = I));
        }
    }
    function Md(e, t) {
        if (typeof e != 'function') throw Error(c(191, e));
        e.call(t);
    }
    function Rd(e, t) {
        var n = e.callbacks;
        if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Md(n[e], t);
    }
    var gl = E(null),
        _o = E(0);
    function Od(e, t) {
        ((e = Bn), F(_o, e), F(gl, t), (Bn = e | t.baseLanes));
    }
    function Fr() {
        (F(_o, Bn), F(gl, gl.current));
    }
    function $r() {
        ((Bn = _o.current), q(gl), q(_o));
    }
    var Lt = E(null),
        Wt = null;
    function ta(e) {
        var t = e.alternate;
        (F(Fe, Fe.current & 1), F(Lt, e), Wt === null && (t === null || gl.current !== null || t.memoizedState !== null) && (Wt = e));
    }
    function Pr(e) {
        (F(Fe, Fe.current), F(Lt, e), Wt === null && (Wt = e));
    }
    function kd(e) {
        e.tag === 22 ? (F(Fe, Fe.current), F(Lt, e), Wt === null && (Wt = e)) : na();
    }
    function na() {
        (F(Fe, Fe.current), F(Lt, Lt.current));
    }
    function Ut(e) {
        (q(Lt), Wt === e && (Wt = null), q(Fe));
    }
    var Fe = E(0);
    function Lo(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && ((n = n.dehydrated), n === null || iu(n) || ou(n))) return t;
            } else if (
                t.tag === 19 &&
                (t.memoizedProps.revealOrder === 'forwards' ||
                    t.memoizedProps.revealOrder === 'backwards' ||
                    t.memoizedProps.revealOrder === 'unstable_legacy-backwards' ||
                    t.memoizedProps.revealOrder === 'together')
            ) {
                if ((t.flags & 128) !== 0) return t;
            } else if (t.child !== null) {
                ((t.child.return = t), (t = t.child));
                continue;
            }
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return null;
                t = t.return;
            }
            ((t.sibling.return = t.return), (t = t.sibling));
        }
        return null;
    }
    var Rn = 0,
        Ce = null,
        Ve = null,
        tt = null,
        Uo = !1,
        vl = !1,
        Ha = !1,
        Bo = 0,
        vi = 0,
        yl = null,
        x0 = 0;
    function Je() {
        throw Error(c(321));
    }
    function ec(e, t) {
        if (t === null) return !1;
        for (var n = 0; n < t.length && n < e.length; n++) if (!Dt(e[n], t[n])) return !1;
        return !0;
    }
    function tc(e, t, n, a, i, s) {
        return (
            (Rn = s),
            (Ce = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (A.H = e === null || e.memoizedState === null ? pm : gc),
            (Ha = !1),
            (s = n(a, i)),
            (Ha = !1),
            vl && (s = Dd(t, n, a, i)),
            zd(e),
            s
        );
    }
    function zd(e) {
        A.H = Si;
        var t = Ve !== null && Ve.next !== null;
        if (((Rn = 0), (tt = Ve = Ce = null), (Uo = !1), (vi = 0), (yl = null), t)) throw Error(c(300));
        e === null || nt || ((e = e.dependencies), e !== null && jo(e) && (nt = !0));
    }
    function Dd(e, t, n, a) {
        Ce = e;
        var i = 0;
        do {
            if ((vl && (yl = null), (vi = 0), (vl = !1), 25 <= i)) throw Error(c(301));
            if (((i += 1), (tt = Ve = null), e.updateQueue != null)) {
                var s = e.updateQueue;
                ((s.lastEffect = null), (s.events = null), (s.stores = null), s.memoCache != null && (s.memoCache.index = 0));
            }
            ((A.H = gm), (s = t(n, a)));
        } while (vl);
        return s;
    }
    function w0() {
        var e = A.H,
            t = e.useState()[0];
        return (
            (t = typeof t.then == 'function' ? yi(t) : t),
            (e = e.useState()[0]),
            (Ve !== null ? Ve.memoizedState : null) !== e && (Ce.flags |= 1024),
            t
        );
    }
    function nc() {
        var e = Bo !== 0;
        return ((Bo = 0), e);
    }
    function ac(e, t, n) {
        ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function lc(e) {
        if (Uo) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                (t !== null && (t.pending = null), (e = e.next));
            }
            Uo = !1;
        }
        ((Rn = 0), (tt = Ve = Ce = null), (vl = !1), (vi = Bo = 0), (yl = null));
    }
    function wt() {
        var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        return (tt === null ? (Ce.memoizedState = tt = e) : (tt = tt.next = e), tt);
    }
    function $e() {
        if (Ve === null) {
            var e = Ce.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = Ve.next;
        var t = tt === null ? Ce.memoizedState : tt.next;
        if (t !== null) ((tt = t), (Ve = e));
        else {
            if (e === null) throw Ce.alternate === null ? Error(c(467)) : Error(c(310));
            ((Ve = e),
                (e = { memoizedState: Ve.memoizedState, baseState: Ve.baseState, baseQueue: Ve.baseQueue, queue: Ve.queue, next: null }),
                tt === null ? (Ce.memoizedState = tt = e) : (tt = tt.next = e));
        }
        return tt;
    }
    function Ho() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function yi(e) {
        var t = vi;
        return (
            (vi += 1),
            yl === null && (yl = []),
            (e = Ed(yl, e, t)),
            (t = Ce),
            (tt === null ? t.memoizedState : tt.next) === null && ((t = t.alternate), (A.H = t === null || t.memoizedState === null ? pm : gc)),
            e
        );
    }
    function Vo(e) {
        if (e !== null && typeof e == 'object') {
            if (typeof e.then == 'function') return yi(e);
            if (e.$$typeof === H) return ht(e);
        }
        throw Error(c(438, String(e)));
    }
    function ic(e) {
        var t = null,
            n = Ce.updateQueue;
        if ((n !== null && (t = n.memoCache), t == null)) {
            var a = Ce.alternate;
            a !== null &&
                ((a = a.updateQueue),
                a !== null &&
                    ((a = a.memoCache),
                    a != null &&
                        (t = {
                            data: a.data.map(function (i) {
                                return i.slice();
                            }),
                            index: 0,
                        })));
        }
        if (
            (t == null && (t = { data: [], index: 0 }),
            n === null && ((n = Ho()), (Ce.updateQueue = n)),
            (n.memoCache = t),
            (n = t.data[t.index]),
            n === void 0)
        )
            for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = ee;
        return (t.index++, n);
    }
    function On(e, t) {
        return typeof t == 'function' ? t(e) : t;
    }
    function Go(e) {
        var t = $e();
        return oc(t, Ve, e);
    }
    function oc(e, t, n) {
        var a = e.queue;
        if (a === null) throw Error(c(311));
        a.lastRenderedReducer = n;
        var i = e.baseQueue,
            s = a.pending;
        if (s !== null) {
            if (i !== null) {
                var d = i.next;
                ((i.next = s.next), (s.next = d));
            }
            ((t.baseQueue = i = s), (a.pending = null));
        }
        if (((s = e.baseState), i === null)) e.memoizedState = s;
        else {
            t = i.next;
            var b = (d = null),
                C = null,
                _ = t,
                X = !1;
            do {
                var I = _.lane & -536870913;
                if (I !== _.lane ? (Re & I) === I : (Rn & I) === I) {
                    var U = _.revertLane;
                    if (U === 0)
                        (C !== null &&
                            (C = C.next =
                                {
                                    lane: 0,
                                    revertLane: 0,
                                    gesture: null,
                                    action: _.action,
                                    hasEagerState: _.hasEagerState,
                                    eagerState: _.eagerState,
                                    next: null,
                                }),
                            I === dl && (X = !0));
                    else if ((Rn & U) === U) {
                        ((_ = _.next), U === dl && (X = !0));
                        continue;
                    } else
                        ((I = {
                            lane: 0,
                            revertLane: _.revertLane,
                            gesture: null,
                            action: _.action,
                            hasEagerState: _.hasEagerState,
                            eagerState: _.eagerState,
                            next: null,
                        }),
                            C === null ? ((b = C = I), (d = s)) : (C = C.next = I),
                            (Ce.lanes |= U),
                            (ia |= U));
                    ((I = _.action), Ha && n(s, I), (s = _.hasEagerState ? _.eagerState : n(s, I)));
                } else
                    ((U = {
                        lane: I,
                        revertLane: _.revertLane,
                        gesture: _.gesture,
                        action: _.action,
                        hasEagerState: _.hasEagerState,
                        eagerState: _.eagerState,
                        next: null,
                    }),
                        C === null ? ((b = C = U), (d = s)) : (C = C.next = U),
                        (Ce.lanes |= I),
                        (ia |= I));
                _ = _.next;
            } while (_ !== null && _ !== t);
            if ((C === null ? (d = s) : (C.next = b), !Dt(s, e.memoizedState) && ((nt = !0), X && ((n = ml), n !== null)))) throw n;
            ((e.memoizedState = s), (e.baseState = d), (e.baseQueue = C), (a.lastRenderedState = s));
        }
        return (i === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
    }
    function sc(e) {
        var t = $e(),
            n = t.queue;
        if (n === null) throw Error(c(311));
        n.lastRenderedReducer = e;
        var a = n.dispatch,
            i = n.pending,
            s = t.memoizedState;
        if (i !== null) {
            n.pending = null;
            var d = (i = i.next);
            do ((s = e(s, d.action)), (d = d.next));
            while (d !== i);
            (Dt(s, t.memoizedState) || (nt = !0), (t.memoizedState = s), t.baseQueue === null && (t.baseState = s), (n.lastRenderedState = s));
        }
        return [s, a];
    }
    function _d(e, t, n) {
        var a = Ce,
            i = $e(),
            s = ke;
        if (s) {
            if (n === void 0) throw Error(c(407));
            n = n();
        } else n = t();
        var d = !Dt((Ve || i).memoizedState, n);
        if (
            (d && ((i.memoizedState = n), (nt = !0)),
            (i = i.queue),
            uc(Bd.bind(null, a, i, e), [e]),
            i.getSnapshot !== t || d || (tt !== null && tt.memoizedState.tag & 1))
        ) {
            if (((a.flags |= 2048), bl(9, { destroy: void 0 }, Ud.bind(null, a, i, n, t), null), Xe === null)) throw Error(c(349));
            s || (Rn & 127) !== 0 || Ld(a, t, n);
        }
        return n;
    }
    function Ld(e, t, n) {
        ((e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            (t = Ce.updateQueue),
            t === null ? ((t = Ho()), (Ce.updateQueue = t), (t.stores = [e])) : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Ud(e, t, n, a) {
        ((t.value = n), (t.getSnapshot = a), Hd(t) && Vd(e));
    }
    function Bd(e, t, n) {
        return n(function () {
            Hd(t) && Vd(e);
        });
    }
    function Hd(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !Dt(e, n);
        } catch {
            return !0;
        }
    }
    function Vd(e) {
        var t = Ra(e, 2);
        t !== null && Ot(t, e, 2);
    }
    function rc(e) {
        var t = wt();
        if (typeof e == 'function') {
            var n = e;
            if (((e = n()), Ha)) {
                ot(!0);
                try {
                    n();
                } finally {
                    ot(!1);
                }
            }
        }
        return (
            (t.memoizedState = t.baseState = e),
            (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: On, lastRenderedState: e }),
            t
        );
    }
    function Gd(e, t, n, a) {
        return ((e.baseState = n), oc(e, Ve, typeof a == 'function' ? a : On));
    }
    function C0(e, t, n, a, i) {
        if (Xo(e)) throw Error(c(485));
        if (((e = t.action), e !== null)) {
            var s = {
                payload: i,
                action: e,
                next: null,
                isTransition: !0,
                status: 'pending',
                value: null,
                reason: null,
                listeners: [],
                then: function (d) {
                    s.listeners.push(d);
                },
            };
            (A.T !== null ? n(!0) : (s.isTransition = !1),
                a(s),
                (n = t.pending),
                n === null ? ((s.next = t.pending = s), qd(t, s)) : ((s.next = n.next), (t.pending = n.next = s)));
        }
    }
    function qd(e, t) {
        var n = t.action,
            a = t.payload,
            i = e.state;
        if (t.isTransition) {
            var s = A.T,
                d = {};
            A.T = d;
            try {
                var b = n(i, a),
                    C = A.S;
                (C !== null && C(d, b), Yd(e, t, b));
            } catch (_) {
                cc(e, t, _);
            } finally {
                (s !== null && d.types !== null && (s.types = d.types), (A.T = s));
            }
        } else
            try {
                ((s = n(i, a)), Yd(e, t, s));
            } catch (_) {
                cc(e, t, _);
            }
    }
    function Yd(e, t, n) {
        n !== null && typeof n == 'object' && typeof n.then == 'function'
            ? n.then(
                  function (a) {
                      Xd(e, t, a);
                  },
                  function (a) {
                      return cc(e, t, a);
                  }
              )
            : Xd(e, t, n);
    }
    function Xd(e, t, n) {
        ((t.status = 'fulfilled'),
            (t.value = n),
            Kd(t),
            (e.state = n),
            (t = e.pending),
            t !== null && ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), qd(e, n))));
    }
    function cc(e, t, n) {
        var a = e.pending;
        if (((e.pending = null), a !== null)) {
            a = a.next;
            do ((t.status = 'rejected'), (t.reason = n), Kd(t), (t = t.next));
            while (t !== a);
        }
        e.action = null;
    }
    function Kd(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Qd(e, t) {
        return t;
    }
    function Zd(e, t) {
        if (ke) {
            var n = Xe.formState;
            if (n !== null) {
                e: {
                    var a = Ce;
                    if (ke) {
                        if (Ke) {
                            t: {
                                for (var i = Ke, s = Jt; i.nodeType !== 8; ) {
                                    if (!s) {
                                        i = null;
                                        break t;
                                    }
                                    if (((i = Ft(i.nextSibling)), i === null)) {
                                        i = null;
                                        break t;
                                    }
                                }
                                ((s = i.data), (i = s === 'F!' || s === 'F' ? i : null));
                            }
                            if (i) {
                                ((Ke = Ft(i.nextSibling)), (a = i.data === 'F!'));
                                break e;
                            }
                        }
                        Wn(a);
                    }
                    a = !1;
                }
                a && (t = n[0]);
            }
        }
        return (
            (n = wt()),
            (n.memoizedState = n.baseState = t),
            (a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Qd, lastRenderedState: t }),
            (n.queue = a),
            (n = dm.bind(null, Ce, a)),
            (a.dispatch = n),
            (a = rc(!1)),
            (s = pc.bind(null, Ce, !1, a.queue)),
            (a = wt()),
            (i = { state: t, dispatch: null, action: e, pending: null }),
            (a.queue = i),
            (n = C0.bind(null, Ce, i, s, n)),
            (i.dispatch = n),
            (a.memoizedState = e),
            [t, n, !1]
        );
    }
    function Id(e) {
        var t = $e();
        return Jd(t, Ve, e);
    }
    function Jd(e, t, n) {
        if (((t = oc(e, t, Qd)[0]), (e = Go(On)[0]), typeof t == 'object' && t !== null && typeof t.then == 'function'))
            try {
                var a = yi(t);
            } catch (d) {
                throw d === hl ? Oo : d;
            }
        else a = t;
        t = $e();
        var i = t.queue,
            s = i.dispatch;
        return (n !== t.memoizedState && ((Ce.flags |= 2048), bl(9, { destroy: void 0 }, E0.bind(null, i, n), null)), [a, s, e]);
    }
    function E0(e, t) {
        e.action = t;
    }
    function Wd(e) {
        var t = $e(),
            n = Ve;
        if (n !== null) return Jd(t, n, e);
        ($e(), (t = t.memoizedState), (n = $e()));
        var a = n.queue.dispatch;
        return ((n.memoizedState = e), [t, a, !1]);
    }
    function bl(e, t, n, a) {
        return (
            (e = { tag: e, create: n, deps: a, inst: t, next: null }),
            (t = Ce.updateQueue),
            t === null && ((t = Ho()), (Ce.updateQueue = t)),
            (n = t.lastEffect),
            n === null ? (t.lastEffect = e.next = e) : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
            e
        );
    }
    function Fd() {
        return $e().memoizedState;
    }
    function qo(e, t, n, a) {
        var i = wt();
        ((Ce.flags |= e), (i.memoizedState = bl(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a)));
    }
    function Yo(e, t, n, a) {
        var i = $e();
        a = a === void 0 ? null : a;
        var s = i.memoizedState.inst;
        Ve !== null && a !== null && ec(a, Ve.memoizedState.deps)
            ? (i.memoizedState = bl(t, s, n, a))
            : ((Ce.flags |= e), (i.memoizedState = bl(1 | t, s, n, a)));
    }
    function $d(e, t) {
        qo(8390656, 8, e, t);
    }
    function uc(e, t) {
        Yo(2048, 8, e, t);
    }
    function T0(e) {
        Ce.flags |= 4;
        var t = Ce.updateQueue;
        if (t === null) ((t = Ho()), (Ce.updateQueue = t), (t.events = [e]));
        else {
            var n = t.events;
            n === null ? (t.events = [e]) : n.push(e);
        }
    }
    function Pd(e) {
        var t = $e().memoizedState;
        return (
            T0({ ref: t, nextImpl: e }),
            function () {
                if ((Le & 2) !== 0) throw Error(c(440));
                return t.impl.apply(void 0, arguments);
            }
        );
    }
    function em(e, t) {
        return Yo(4, 2, e, t);
    }
    function tm(e, t) {
        return Yo(4, 4, e, t);
    }
    function nm(e, t) {
        if (typeof t == 'function') {
            e = e();
            var n = t(e);
            return function () {
                typeof n == 'function' ? n() : t(null);
            };
        }
        if (t != null)
            return (
                (e = e()),
                (t.current = e),
                function () {
                    t.current = null;
                }
            );
    }
    function am(e, t, n) {
        ((n = n != null ? n.concat([e]) : null), Yo(4, 4, nm.bind(null, t, e), n));
    }
    function fc() {}
    function lm(e, t) {
        var n = $e();
        t = t === void 0 ? null : t;
        var a = n.memoizedState;
        return t !== null && ec(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
    }
    function im(e, t) {
        var n = $e();
        t = t === void 0 ? null : t;
        var a = n.memoizedState;
        if (t !== null && ec(t, a[1])) return a[0];
        if (((a = e()), Ha)) {
            ot(!0);
            try {
                e();
            } finally {
                ot(!1);
            }
        }
        return ((n.memoizedState = [a, t]), a);
    }
    function dc(e, t, n) {
        return n === void 0 || ((Rn & 1073741824) !== 0 && (Re & 261930) === 0)
            ? (e.memoizedState = t)
            : ((e.memoizedState = n), (e = oh()), (Ce.lanes |= e), (ia |= e), n);
    }
    function om(e, t, n, a) {
        return Dt(n, t)
            ? n
            : gl.current !== null
              ? ((e = dc(e, n, a)), Dt(e, t) || (nt = !0), e)
              : (Rn & 42) === 0 || ((Rn & 1073741824) !== 0 && (Re & 261930) === 0)
                ? ((nt = !0), (e.memoizedState = n))
                : ((e = oh()), (Ce.lanes |= e), (ia |= e), t);
    }
    function sm(e, t, n, a, i) {
        var s = Y.p;
        Y.p = s !== 0 && 8 > s ? s : 8;
        var d = A.T,
            b = {};
        ((A.T = b), pc(e, !1, t, n));
        try {
            var C = i(),
                _ = A.S;
            if ((_ !== null && _(b, C), C !== null && typeof C == 'object' && typeof C.then == 'function')) {
                var X = S0(C, a);
                bi(e, t, X, Vt(e));
            } else bi(e, t, a, Vt(e));
        } catch (I) {
            bi(e, t, { then: function () {}, status: 'rejected', reason: I }, Vt());
        } finally {
            ((Y.p = s), d !== null && b.types !== null && (d.types = b.types), (A.T = d));
        }
    }
    function A0() {}
    function mc(e, t, n, a) {
        if (e.tag !== 5) throw Error(c(476));
        var i = rm(e).queue;
        sm(
            e,
            i,
            t,
            z,
            n === null
                ? A0
                : function () {
                      return (cm(e), n(a));
                  }
        );
    }
    function rm(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: z,
            baseState: z,
            baseQueue: null,
            queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: On, lastRenderedState: z },
            next: null,
        };
        var n = {};
        return (
            (t.next = {
                memoizedState: n,
                baseState: n,
                baseQueue: null,
                queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: On, lastRenderedState: n },
                next: null,
            }),
            (e.memoizedState = t),
            (e = e.alternate),
            e !== null && (e.memoizedState = t),
            t
        );
    }
    function cm(e) {
        var t = rm(e);
        (t.next === null && (t = e.alternate.memoizedState), bi(e, t.next.queue, {}, Vt()));
    }
    function hc() {
        return ht(Li);
    }
    function um() {
        return $e().memoizedState;
    }
    function fm() {
        return $e().memoizedState;
    }
    function N0(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
                case 24:
                case 3:
                    var n = Vt();
                    e = Pn(n);
                    var a = ea(t, e, n);
                    (a !== null && (Ot(a, t, n), hi(a, t, n)), (t = { cache: Yr() }), (e.payload = t));
                    return;
            }
            t = t.return;
        }
    }
    function j0(e, t, n) {
        var a = Vt();
        ((n = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null }),
            Xo(e) ? mm(t, n) : ((n = kr(e, t, n, a)), n !== null && (Ot(n, e, a), hm(n, t, a))));
    }
    function dm(e, t, n) {
        var a = Vt();
        bi(e, t, n, a);
    }
    function bi(e, t, n, a) {
        var i = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null };
        if (Xo(e)) mm(t, i);
        else {
            var s = e.alternate;
            if (e.lanes === 0 && (s === null || s.lanes === 0) && ((s = t.lastRenderedReducer), s !== null))
                try {
                    var d = t.lastRenderedState,
                        b = s(d, n);
                    if (((i.hasEagerState = !0), (i.eagerState = b), Dt(b, d))) return (Eo(e, t, i, 0), Xe === null && Co(), !1);
                } catch {
                } finally {
                }
            if (((n = kr(e, t, i, a)), n !== null)) return (Ot(n, e, a), hm(n, t, a), !0);
        }
        return !1;
    }
    function pc(e, t, n, a) {
        if (((a = { lane: 2, revertLane: Zc(), gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null }), Xo(e))) {
            if (t) throw Error(c(479));
        } else ((t = kr(e, n, a, 2)), t !== null && Ot(t, e, 2));
    }
    function Xo(e) {
        var t = e.alternate;
        return e === Ce || (t !== null && t === Ce);
    }
    function mm(e, t) {
        vl = Uo = !0;
        var n = e.pending;
        (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
    }
    function hm(e, t, n) {
        if ((n & 4194048) !== 0) {
            var a = t.lanes;
            ((a &= e.pendingLanes), (n |= a), (t.lanes = n), bf(e, n));
        }
    }
    var Si = {
        readContext: ht,
        use: Vo,
        useCallback: Je,
        useContext: Je,
        useEffect: Je,
        useImperativeHandle: Je,
        useLayoutEffect: Je,
        useInsertionEffect: Je,
        useMemo: Je,
        useReducer: Je,
        useRef: Je,
        useState: Je,
        useDebugValue: Je,
        useDeferredValue: Je,
        useTransition: Je,
        useSyncExternalStore: Je,
        useId: Je,
        useHostTransitionStatus: Je,
        useFormState: Je,
        useActionState: Je,
        useOptimistic: Je,
        useMemoCache: Je,
        useCacheRefresh: Je,
    };
    Si.useEffectEvent = Je;
    var pm = {
            readContext: ht,
            use: Vo,
            useCallback: function (e, t) {
                return ((wt().memoizedState = [e, t === void 0 ? null : t]), e);
            },
            useContext: ht,
            useEffect: $d,
            useImperativeHandle: function (e, t, n) {
                ((n = n != null ? n.concat([e]) : null), qo(4194308, 4, nm.bind(null, t, e), n));
            },
            useLayoutEffect: function (e, t) {
                return qo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
                qo(4, 2, e, t);
            },
            useMemo: function (e, t) {
                var n = wt();
                t = t === void 0 ? null : t;
                var a = e();
                if (Ha) {
                    ot(!0);
                    try {
                        e();
                    } finally {
                        ot(!1);
                    }
                }
                return ((n.memoizedState = [a, t]), a);
            },
            useReducer: function (e, t, n) {
                var a = wt();
                if (n !== void 0) {
                    var i = n(t);
                    if (Ha) {
                        ot(!0);
                        try {
                            n(t);
                        } finally {
                            ot(!1);
                        }
                    }
                } else i = t;
                return (
                    (a.memoizedState = a.baseState = i),
                    (e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: i }),
                    (a.queue = e),
                    (e = e.dispatch = j0.bind(null, Ce, e)),
                    [a.memoizedState, e]
                );
            },
            useRef: function (e) {
                var t = wt();
                return ((e = { current: e }), (t.memoizedState = e));
            },
            useState: function (e) {
                e = rc(e);
                var t = e.queue,
                    n = dm.bind(null, Ce, t);
                return ((t.dispatch = n), [e.memoizedState, n]);
            },
            useDebugValue: fc,
            useDeferredValue: function (e, t) {
                var n = wt();
                return dc(n, e, t);
            },
            useTransition: function () {
                var e = rc(!1);
                return ((e = sm.bind(null, Ce, e.queue, !0, !1)), (wt().memoizedState = e), [!1, e]);
            },
            useSyncExternalStore: function (e, t, n) {
                var a = Ce,
                    i = wt();
                if (ke) {
                    if (n === void 0) throw Error(c(407));
                    n = n();
                } else {
                    if (((n = t()), Xe === null)) throw Error(c(349));
                    (Re & 127) !== 0 || Ld(a, t, n);
                }
                i.memoizedState = n;
                var s = { value: n, getSnapshot: t };
                return (
                    (i.queue = s),
                    $d(Bd.bind(null, a, s, e), [e]),
                    (a.flags |= 2048),
                    bl(9, { destroy: void 0 }, Ud.bind(null, a, s, n, t), null),
                    n
                );
            },
            useId: function () {
                var e = wt(),
                    t = Xe.identifierPrefix;
                if (ke) {
                    var n = hn,
                        a = mn;
                    ((n = (a & ~(1 << (32 - xt(a) - 1))).toString(32) + n),
                        (t = '_' + t + 'R_' + n),
                        (n = Bo++),
                        0 < n && (t += 'H' + n.toString(32)),
                        (t += '_'));
                } else ((n = x0++), (t = '_' + t + 'r_' + n.toString(32) + '_'));
                return (e.memoizedState = t);
            },
            useHostTransitionStatus: hc,
            useFormState: Zd,
            useActionState: Zd,
            useOptimistic: function (e) {
                var t = wt();
                t.memoizedState = t.baseState = e;
                var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
                return ((t.queue = n), (t = pc.bind(null, Ce, !0, n)), (n.dispatch = t), [e, t]);
            },
            useMemoCache: ic,
            useCacheRefresh: function () {
                return (wt().memoizedState = N0.bind(null, Ce));
            },
            useEffectEvent: function (e) {
                var t = wt(),
                    n = { impl: e };
                return (
                    (t.memoizedState = n),
                    function () {
                        if ((Le & 2) !== 0) throw Error(c(440));
                        return n.impl.apply(void 0, arguments);
                    }
                );
            },
        },
        gc = {
            readContext: ht,
            use: Vo,
            useCallback: lm,
            useContext: ht,
            useEffect: uc,
            useImperativeHandle: am,
            useInsertionEffect: em,
            useLayoutEffect: tm,
            useMemo: im,
            useReducer: Go,
            useRef: Fd,
            useState: function () {
                return Go(On);
            },
            useDebugValue: fc,
            useDeferredValue: function (e, t) {
                var n = $e();
                return om(n, Ve.memoizedState, e, t);
            },
            useTransition: function () {
                var e = Go(On)[0],
                    t = $e().memoizedState;
                return [typeof e == 'boolean' ? e : yi(e), t];
            },
            useSyncExternalStore: _d,
            useId: um,
            useHostTransitionStatus: hc,
            useFormState: Id,
            useActionState: Id,
            useOptimistic: function (e, t) {
                var n = $e();
                return Gd(n, Ve, e, t);
            },
            useMemoCache: ic,
            useCacheRefresh: fm,
        };
    gc.useEffectEvent = Pd;
    var gm = {
        readContext: ht,
        use: Vo,
        useCallback: lm,
        useContext: ht,
        useEffect: uc,
        useImperativeHandle: am,
        useInsertionEffect: em,
        useLayoutEffect: tm,
        useMemo: im,
        useReducer: sc,
        useRef: Fd,
        useState: function () {
            return sc(On);
        },
        useDebugValue: fc,
        useDeferredValue: function (e, t) {
            var n = $e();
            return Ve === null ? dc(n, e, t) : om(n, Ve.memoizedState, e, t);
        },
        useTransition: function () {
            var e = sc(On)[0],
                t = $e().memoizedState;
            return [typeof e == 'boolean' ? e : yi(e), t];
        },
        useSyncExternalStore: _d,
        useId: um,
        useHostTransitionStatus: hc,
        useFormState: Wd,
        useActionState: Wd,
        useOptimistic: function (e, t) {
            var n = $e();
            return Ve !== null ? Gd(n, Ve, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
        },
        useMemoCache: ic,
        useCacheRefresh: fm,
    };
    gm.useEffectEvent = Pd;
    function vc(e, t, n, a) {
        ((t = e.memoizedState),
            (n = n(a, t)),
            (n = n == null ? t : x({}, t, n)),
            (e.memoizedState = n),
            e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var yc = {
        enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var a = Vt(),
                i = Pn(a);
            ((i.payload = t), n != null && (i.callback = n), (t = ea(e, i, a)), t !== null && (Ot(t, e, a), hi(t, e, a)));
        },
        enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var a = Vt(),
                i = Pn(a);
            ((i.tag = 1), (i.payload = t), n != null && (i.callback = n), (t = ea(e, i, a)), t !== null && (Ot(t, e, a), hi(t, e, a)));
        },
        enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Vt(),
                a = Pn(n);
            ((a.tag = 2), t != null && (a.callback = t), (t = ea(e, a, n)), t !== null && (Ot(t, e, n), hi(t, e, n)));
        },
    };
    function vm(e, t, n, a, i, s, d) {
        return (
            (e = e.stateNode),
            typeof e.shouldComponentUpdate == 'function'
                ? e.shouldComponentUpdate(a, s, d)
                : t.prototype && t.prototype.isPureReactComponent
                  ? !oi(n, a) || !oi(i, s)
                  : !0
        );
    }
    function ym(e, t, n, a) {
        ((e = t.state),
            typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, a),
            typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, a),
            t.state !== e && yc.enqueueReplaceState(t, t.state, null));
    }
    function Va(e, t) {
        var n = t;
        if ('ref' in t) {
            n = {};
            for (var a in t) a !== 'ref' && (n[a] = t[a]);
        }
        if ((e = e.defaultProps)) {
            n === t && (n = x({}, n));
            for (var i in e) n[i] === void 0 && (n[i] = e[i]);
        }
        return n;
    }
    function bm(e) {
        wo(e);
    }
    function Sm(e) {
        console.error(e);
    }
    function xm(e) {
        wo(e);
    }
    function Ko(e, t) {
        try {
            var n = e.onUncaughtError;
            n(t.value, { componentStack: t.stack });
        } catch (a) {
            setTimeout(function () {
                throw a;
            });
        }
    }
    function wm(e, t, n) {
        try {
            var a = e.onCaughtError;
            a(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
        } catch (i) {
            setTimeout(function () {
                throw i;
            });
        }
    }
    function bc(e, t, n) {
        return (
            (n = Pn(n)),
            (n.tag = 3),
            (n.payload = { element: null }),
            (n.callback = function () {
                Ko(e, t);
            }),
            n
        );
    }
    function Cm(e) {
        return ((e = Pn(e)), (e.tag = 3), e);
    }
    function Em(e, t, n, a) {
        var i = n.type.getDerivedStateFromError;
        if (typeof i == 'function') {
            var s = a.value;
            ((e.payload = function () {
                return i(s);
            }),
                (e.callback = function () {
                    wm(t, n, a);
                }));
        }
        var d = n.stateNode;
        d !== null &&
            typeof d.componentDidCatch == 'function' &&
            (e.callback = function () {
                (wm(t, n, a), typeof i != 'function' && (oa === null ? (oa = new Set([this])) : oa.add(this)));
                var b = a.stack;
                this.componentDidCatch(a.value, { componentStack: b !== null ? b : '' });
            });
    }
    function M0(e, t, n, a, i) {
        if (((n.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
            if (((t = n.alternate), t !== null && fl(t, n, i, !0), (n = Lt.current), n !== null)) {
                switch (n.tag) {
                    case 31:
                    case 13:
                        return (
                            Wt === null ? as() : n.alternate === null && We === 0 && (We = 3),
                            (n.flags &= -257),
                            (n.flags |= 65536),
                            (n.lanes = i),
                            a === ko
                                ? (n.flags |= 16384)
                                : ((t = n.updateQueue), t === null ? (n.updateQueue = new Set([a])) : t.add(a), Xc(e, a, i)),
                            !1
                        );
                    case 22:
                        return (
                            (n.flags |= 65536),
                            a === ko
                                ? (n.flags |= 16384)
                                : ((t = n.updateQueue),
                                  t === null
                                      ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }), (n.updateQueue = t))
                                      : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([a])) : n.add(a)),
                                  Xc(e, a, i)),
                            !1
                        );
                }
                throw Error(c(435, n.tag));
            }
            return (Xc(e, a, i), as(), !1);
        }
        if (ke)
            return (
                (t = Lt.current),
                t !== null
                    ? ((t.flags & 65536) === 0 && (t.flags |= 256),
                      (t.flags |= 65536),
                      (t.lanes = i),
                      a !== Br && ((e = Error(c(422), { cause: a })), ci(Qt(e, n))))
                    : (a !== Br && ((t = Error(c(423), { cause: a })), ci(Qt(t, n))),
                      (e = e.current.alternate),
                      (e.flags |= 65536),
                      (i &= -i),
                      (e.lanes |= i),
                      (a = Qt(a, n)),
                      (i = bc(e.stateNode, a, i)),
                      Jr(e, i),
                      We !== 4 && (We = 2)),
                !1
            );
        var s = Error(c(520), { cause: a });
        if (((s = Qt(s, n)), ji === null ? (ji = [s]) : ji.push(s), We !== 4 && (We = 2), t === null)) return !0;
        ((a = Qt(a, n)), (n = t));
        do {
            switch (n.tag) {
                case 3:
                    return ((n.flags |= 65536), (e = i & -i), (n.lanes |= e), (e = bc(n.stateNode, a, e)), Jr(n, e), !1);
                case 1:
                    if (
                        ((t = n.type),
                        (s = n.stateNode),
                        (n.flags & 128) === 0 &&
                            (typeof t.getDerivedStateFromError == 'function' ||
                                (s !== null && typeof s.componentDidCatch == 'function' && (oa === null || !oa.has(s)))))
                    )
                        return ((n.flags |= 65536), (i &= -i), (n.lanes |= i), (i = Cm(i)), Em(i, e, n, a), Jr(n, i), !1);
            }
            n = n.return;
        } while (n !== null);
        return !1;
    }
    var Sc = Error(c(461)),
        nt = !1;
    function pt(e, t, n, a) {
        t.child = e === null ? jd(t, null, n, a) : Ba(t, e.child, n, a);
    }
    function Tm(e, t, n, a, i) {
        n = n.render;
        var s = t.ref;
        if ('ref' in a) {
            var d = {};
            for (var b in a) b !== 'ref' && (d[b] = a[b]);
        } else d = a;
        return (
            Da(t),
            (a = tc(e, t, n, d, s, i)),
            (b = nc()),
            e !== null && !nt ? (ac(e, t, i), kn(e, t, i)) : (ke && b && Lr(t), (t.flags |= 1), pt(e, t, a, i), t.child)
        );
    }
    function Am(e, t, n, a, i) {
        if (e === null) {
            var s = n.type;
            return typeof s == 'function' && !zr(s) && s.defaultProps === void 0 && n.compare === null
                ? ((t.tag = 15), (t.type = s), Nm(e, t, s, a, i))
                : ((e = Ao(n.type, null, a, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
        }
        if (((s = e.child), !jc(e, i))) {
            var d = s.memoizedProps;
            if (((n = n.compare), (n = n !== null ? n : oi), n(d, a) && e.ref === t.ref)) return kn(e, t, i);
        }
        return ((t.flags |= 1), (e = An(s, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    function Nm(e, t, n, a, i) {
        if (e !== null) {
            var s = e.memoizedProps;
            if (oi(s, a) && e.ref === t.ref)
                if (((nt = !1), (t.pendingProps = a = s), jc(e, i))) (e.flags & 131072) !== 0 && (nt = !0);
                else return ((t.lanes = e.lanes), kn(e, t, i));
        }
        return xc(e, t, n, a, i);
    }
    function jm(e, t, n, a) {
        var i = a.children,
            s = e !== null ? e.memoizedState : null;
        if (
            (e === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
            a.mode === 'hidden')
        ) {
            if ((t.flags & 128) !== 0) {
                if (((s = s !== null ? s.baseLanes | n : n), e !== null)) {
                    for (a = t.child = e.child, i = 0; a !== null; ) ((i = i | a.lanes | a.childLanes), (a = a.sibling));
                    a = i & ~s;
                } else ((a = 0), (t.child = null));
                return Mm(e, t, s, n, a);
            }
            if ((n & 536870912) !== 0)
                ((t.memoizedState = { baseLanes: 0, cachePool: null }),
                    e !== null && Ro(t, s !== null ? s.cachePool : null),
                    s !== null ? Od(t, s) : Fr(),
                    kd(t));
            else return ((a = t.lanes = 536870912), Mm(e, t, s !== null ? s.baseLanes | n : n, n, a));
        } else s !== null ? (Ro(t, s.cachePool), Od(t, s), na(), (t.memoizedState = null)) : (e !== null && Ro(t, null), Fr(), na());
        return (pt(e, t, i, n), t.child);
    }
    function xi(e, t) {
        return (
            (e !== null && e.tag === 22) ||
                t.stateNode !== null ||
                (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
            t.sibling
        );
    }
    function Mm(e, t, n, a, i) {
        var s = Kr();
        return (
            (s = s === null ? null : { parent: et._currentValue, pool: s }),
            (t.memoizedState = { baseLanes: n, cachePool: s }),
            e !== null && Ro(t, null),
            Fr(),
            kd(t),
            e !== null && fl(e, t, a, !0),
            (t.childLanes = i),
            null
        );
    }
    function Qo(e, t) {
        return ((t = Io({ mode: t.mode, children: t.children }, e.mode)), (t.ref = e.ref), (e.child = t), (t.return = e), t);
    }
    function Rm(e, t, n) {
        return (Ba(t, e.child, null, n), (e = Qo(t, t.pendingProps)), (e.flags |= 2), Ut(t), (t.memoizedState = null), e);
    }
    function R0(e, t, n) {
        var a = t.pendingProps,
            i = (t.flags & 128) !== 0;
        if (((t.flags &= -129), e === null)) {
            if (ke) {
                if (a.mode === 'hidden') return ((e = Qo(t, a)), (t.lanes = 536870912), xi(null, e));
                if (
                    (Pr(t),
                    (e = Ke)
                        ? ((e = qh(e, Jt)),
                          (e = e !== null && e.data === '&' ? e : null),
                          e !== null &&
                              ((t.memoizedState = {
                                  dehydrated: e,
                                  treeContext: In !== null ? { id: mn, overflow: hn } : null,
                                  retryLane: 536870912,
                                  hydrationErrors: null,
                              }),
                              (n = md(e)),
                              (n.return = t),
                              (t.child = n),
                              (mt = t),
                              (Ke = null)))
                        : (e = null),
                    e === null)
                )
                    throw Wn(t);
                return ((t.lanes = 536870912), null);
            }
            return Qo(t, a);
        }
        var s = e.memoizedState;
        if (s !== null) {
            var d = s.dehydrated;
            if ((Pr(t), i))
                if (t.flags & 256) ((t.flags &= -257), (t = Rm(e, t, n)));
                else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
                else throw Error(c(558));
            else if ((nt || fl(e, t, n, !1), (i = (n & e.childLanes) !== 0), nt || i)) {
                if (((a = Xe), a !== null && ((d = Sf(a, n)), d !== 0 && d !== s.retryLane))) throw ((s.retryLane = d), Ra(e, d), Ot(a, e, d), Sc);
                (as(), (t = Rm(e, t, n)));
            } else
                ((e = s.treeContext),
                    (Ke = Ft(d.nextSibling)),
                    (mt = t),
                    (ke = !0),
                    (Jn = null),
                    (Jt = !1),
                    e !== null && gd(t, e),
                    (t = Qo(t, a)),
                    (t.flags |= 4096));
            return t;
        }
        return ((e = An(e.child, { mode: a.mode, children: a.children })), (e.ref = t.ref), (t.child = e), (e.return = t), e);
    }
    function Zo(e, t) {
        var n = t.ref;
        if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof n != 'function' && typeof n != 'object') throw Error(c(284));
            (e === null || e.ref !== n) && (t.flags |= 4194816);
        }
    }
    function xc(e, t, n, a, i) {
        return (
            Da(t),
            (n = tc(e, t, n, a, void 0, i)),
            (a = nc()),
            e !== null && !nt ? (ac(e, t, i), kn(e, t, i)) : (ke && a && Lr(t), (t.flags |= 1), pt(e, t, n, i), t.child)
        );
    }
    function Om(e, t, n, a, i, s) {
        return (
            Da(t),
            (t.updateQueue = null),
            (n = Dd(t, a, n, i)),
            zd(e),
            (a = nc()),
            e !== null && !nt ? (ac(e, t, s), kn(e, t, s)) : (ke && a && Lr(t), (t.flags |= 1), pt(e, t, n, s), t.child)
        );
    }
    function km(e, t, n, a, i) {
        if ((Da(t), t.stateNode === null)) {
            var s = sl,
                d = n.contextType;
            (typeof d == 'object' && d !== null && (s = ht(d)),
                (s = new n(a, s)),
                (t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null),
                (s.updater = yc),
                (t.stateNode = s),
                (s._reactInternals = t),
                (s = t.stateNode),
                (s.props = a),
                (s.state = t.memoizedState),
                (s.refs = {}),
                Zr(t),
                (d = n.contextType),
                (s.context = typeof d == 'object' && d !== null ? ht(d) : sl),
                (s.state = t.memoizedState),
                (d = n.getDerivedStateFromProps),
                typeof d == 'function' && (vc(t, n, d, a), (s.state = t.memoizedState)),
                typeof n.getDerivedStateFromProps == 'function' ||
                    typeof s.getSnapshotBeforeUpdate == 'function' ||
                    (typeof s.UNSAFE_componentWillMount != 'function' && typeof s.componentWillMount != 'function') ||
                    ((d = s.state),
                    typeof s.componentWillMount == 'function' && s.componentWillMount(),
                    typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount(),
                    d !== s.state && yc.enqueueReplaceState(s, s.state, null),
                    gi(t, a, s, i),
                    pi(),
                    (s.state = t.memoizedState)),
                typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
                (a = !0));
        } else if (e === null) {
            s = t.stateNode;
            var b = t.memoizedProps,
                C = Va(n, b);
            s.props = C;
            var _ = s.context,
                X = n.contextType;
            ((d = sl), typeof X == 'object' && X !== null && (d = ht(X)));
            var I = n.getDerivedStateFromProps;
            ((X = typeof I == 'function' || typeof s.getSnapshotBeforeUpdate == 'function'),
                (b = t.pendingProps !== b),
                X ||
                    (typeof s.UNSAFE_componentWillReceiveProps != 'function' && typeof s.componentWillReceiveProps != 'function') ||
                    ((b || _ !== d) && ym(t, s, a, d)),
                ($n = !1));
            var U = t.memoizedState;
            ((s.state = U),
                gi(t, a, s, i),
                pi(),
                (_ = t.memoizedState),
                b || U !== _ || $n
                    ? (typeof I == 'function' && (vc(t, n, I, a), (_ = t.memoizedState)),
                      (C = $n || vm(t, n, C, a, U, _, d))
                          ? (X ||
                                (typeof s.UNSAFE_componentWillMount != 'function' && typeof s.componentWillMount != 'function') ||
                                (typeof s.componentWillMount == 'function' && s.componentWillMount(),
                                typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount()),
                            typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
                          : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308), (t.memoizedProps = a), (t.memoizedState = _)),
                      (s.props = a),
                      (s.state = _),
                      (s.context = d),
                      (a = C))
                    : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308), (a = !1)));
        } else {
            ((s = t.stateNode),
                Ir(e, t),
                (d = t.memoizedProps),
                (X = Va(n, d)),
                (s.props = X),
                (I = t.pendingProps),
                (U = s.context),
                (_ = n.contextType),
                (C = sl),
                typeof _ == 'object' && _ !== null && (C = ht(_)),
                (b = n.getDerivedStateFromProps),
                (_ = typeof b == 'function' || typeof s.getSnapshotBeforeUpdate == 'function') ||
                    (typeof s.UNSAFE_componentWillReceiveProps != 'function' && typeof s.componentWillReceiveProps != 'function') ||
                    ((d !== I || U !== C) && ym(t, s, a, C)),
                ($n = !1),
                (U = t.memoizedState),
                (s.state = U),
                gi(t, a, s, i),
                pi());
            var V = t.memoizedState;
            d !== I || U !== V || $n || (e !== null && e.dependencies !== null && jo(e.dependencies))
                ? (typeof b == 'function' && (vc(t, n, b, a), (V = t.memoizedState)),
                  (X = $n || vm(t, n, X, a, U, V, C) || (e !== null && e.dependencies !== null && jo(e.dependencies)))
                      ? (_ ||
                            (typeof s.UNSAFE_componentWillUpdate != 'function' && typeof s.componentWillUpdate != 'function') ||
                            (typeof s.componentWillUpdate == 'function' && s.componentWillUpdate(a, V, C),
                            typeof s.UNSAFE_componentWillUpdate == 'function' && s.UNSAFE_componentWillUpdate(a, V, C)),
                        typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
                        typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
                      : (typeof s.componentDidUpdate != 'function' || (d === e.memoizedProps && U === e.memoizedState) || (t.flags |= 4),
                        typeof s.getSnapshotBeforeUpdate != 'function' || (d === e.memoizedProps && U === e.memoizedState) || (t.flags |= 1024),
                        (t.memoizedProps = a),
                        (t.memoizedState = V)),
                  (s.props = a),
                  (s.state = V),
                  (s.context = C),
                  (a = X))
                : (typeof s.componentDidUpdate != 'function' || (d === e.memoizedProps && U === e.memoizedState) || (t.flags |= 4),
                  typeof s.getSnapshotBeforeUpdate != 'function' || (d === e.memoizedProps && U === e.memoizedState) || (t.flags |= 1024),
                  (a = !1));
        }
        return (
            (s = a),
            Zo(e, t),
            (a = (t.flags & 128) !== 0),
            s || a
                ? ((s = t.stateNode),
                  (n = a && typeof n.getDerivedStateFromError != 'function' ? null : s.render()),
                  (t.flags |= 1),
                  e !== null && a ? ((t.child = Ba(t, e.child, null, i)), (t.child = Ba(t, null, n, i))) : pt(e, t, n, i),
                  (t.memoizedState = s.state),
                  (e = t.child))
                : (e = kn(e, t, i)),
            e
        );
    }
    function zm(e, t, n, a) {
        return (ka(), (t.flags |= 256), pt(e, t, n, a), t.child);
    }
    var wc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function Cc(e) {
        return { baseLanes: e, cachePool: wd() };
    }
    function Ec(e, t, n) {
        return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= Ht), e);
    }
    function Dm(e, t, n) {
        var a = t.pendingProps,
            i = !1,
            s = (t.flags & 128) !== 0,
            d;
        if (
            ((d = s) || (d = e !== null && e.memoizedState === null ? !1 : (Fe.current & 2) !== 0),
            d && ((i = !0), (t.flags &= -129)),
            (d = (t.flags & 32) !== 0),
            (t.flags &= -33),
            e === null)
        ) {
            if (ke) {
                if (
                    (i ? ta(t) : na(),
                    (e = Ke)
                        ? ((e = qh(e, Jt)),
                          (e = e !== null && e.data !== '&' ? e : null),
                          e !== null &&
                              ((t.memoizedState = {
                                  dehydrated: e,
                                  treeContext: In !== null ? { id: mn, overflow: hn } : null,
                                  retryLane: 536870912,
                                  hydrationErrors: null,
                              }),
                              (n = md(e)),
                              (n.return = t),
                              (t.child = n),
                              (mt = t),
                              (Ke = null)))
                        : (e = null),
                    e === null)
                )
                    throw Wn(t);
                return (ou(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
            }
            var b = a.children;
            return (
                (a = a.fallback),
                i
                    ? (na(),
                      (i = t.mode),
                      (b = Io({ mode: 'hidden', children: b }, i)),
                      (a = Oa(a, i, n, null)),
                      (b.return = t),
                      (a.return = t),
                      (b.sibling = a),
                      (t.child = b),
                      (a = t.child),
                      (a.memoizedState = Cc(n)),
                      (a.childLanes = Ec(e, d, n)),
                      (t.memoizedState = wc),
                      xi(null, a))
                    : (ta(t), Tc(t, b))
            );
        }
        var C = e.memoizedState;
        if (C !== null && ((b = C.dehydrated), b !== null)) {
            if (s)
                t.flags & 256
                    ? (ta(t), (t.flags &= -257), (t = Ac(e, t, n)))
                    : t.memoizedState !== null
                      ? (na(), (t.child = e.child), (t.flags |= 128), (t = null))
                      : (na(),
                        (b = a.fallback),
                        (i = t.mode),
                        (a = Io({ mode: 'visible', children: a.children }, i)),
                        (b = Oa(b, i, n, null)),
                        (b.flags |= 2),
                        (a.return = t),
                        (b.return = t),
                        (a.sibling = b),
                        (t.child = a),
                        Ba(t, e.child, null, n),
                        (a = t.child),
                        (a.memoizedState = Cc(n)),
                        (a.childLanes = Ec(e, d, n)),
                        (t.memoizedState = wc),
                        (t = xi(null, a)));
            else if ((ta(t), ou(b))) {
                if (((d = b.nextSibling && b.nextSibling.dataset), d)) var _ = d.dgst;
                ((d = _), (a = Error(c(419))), (a.stack = ''), (a.digest = d), ci({ value: a, source: null, stack: null }), (t = Ac(e, t, n)));
            } else if ((nt || fl(e, t, n, !1), (d = (n & e.childLanes) !== 0), nt || d)) {
                if (((d = Xe), d !== null && ((a = Sf(d, n)), a !== 0 && a !== C.retryLane))) throw ((C.retryLane = a), Ra(e, a), Ot(d, e, a), Sc);
                (iu(b) || as(), (t = Ac(e, t, n)));
            } else
                iu(b)
                    ? ((t.flags |= 192), (t.child = e.child), (t = null))
                    : ((e = C.treeContext),
                      (Ke = Ft(b.nextSibling)),
                      (mt = t),
                      (ke = !0),
                      (Jn = null),
                      (Jt = !1),
                      e !== null && gd(t, e),
                      (t = Tc(t, a.children)),
                      (t.flags |= 4096));
            return t;
        }
        return i
            ? (na(),
              (b = a.fallback),
              (i = t.mode),
              (C = e.child),
              (_ = C.sibling),
              (a = An(C, { mode: 'hidden', children: a.children })),
              (a.subtreeFlags = C.subtreeFlags & 65011712),
              _ !== null ? (b = An(_, b)) : ((b = Oa(b, i, n, null)), (b.flags |= 2)),
              (b.return = t),
              (a.return = t),
              (a.sibling = b),
              (t.child = a),
              xi(null, a),
              (a = t.child),
              (b = e.child.memoizedState),
              b === null
                  ? (b = Cc(n))
                  : ((i = b.cachePool),
                    i !== null ? ((C = et._currentValue), (i = i.parent !== C ? { parent: C, pool: C } : i)) : (i = wd()),
                    (b = { baseLanes: b.baseLanes | n, cachePool: i })),
              (a.memoizedState = b),
              (a.childLanes = Ec(e, d, n)),
              (t.memoizedState = wc),
              xi(e.child, a))
            : (ta(t),
              (n = e.child),
              (e = n.sibling),
              (n = An(n, { mode: 'visible', children: a.children })),
              (n.return = t),
              (n.sibling = null),
              e !== null && ((d = t.deletions), d === null ? ((t.deletions = [e]), (t.flags |= 16)) : d.push(e)),
              (t.child = n),
              (t.memoizedState = null),
              n);
    }
    function Tc(e, t) {
        return ((t = Io({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
    }
    function Io(e, t) {
        return ((e = _t(22, e, null, t)), (e.lanes = 0), e);
    }
    function Ac(e, t, n) {
        return (Ba(t, e.child, null, n), (e = Tc(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e);
    }
    function _m(e, t, n) {
        e.lanes |= t;
        var a = e.alternate;
        (a !== null && (a.lanes |= t), Gr(e.return, t, n));
    }
    function Nc(e, t, n, a, i, s) {
        var d = e.memoizedState;
        d === null
            ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: i, treeForkCount: s })
            : ((d.isBackwards = t),
              (d.rendering = null),
              (d.renderingStartTime = 0),
              (d.last = a),
              (d.tail = n),
              (d.tailMode = i),
              (d.treeForkCount = s));
    }
    function Lm(e, t, n) {
        var a = t.pendingProps,
            i = a.revealOrder,
            s = a.tail;
        a = a.children;
        var d = Fe.current,
            b = (d & 2) !== 0;
        if (
            (b ? ((d = (d & 1) | 2), (t.flags |= 128)) : (d &= 1),
            F(Fe, d),
            pt(e, t, a, n),
            (a = ke ? ri : 0),
            !b && e !== null && (e.flags & 128) !== 0)
        )
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && _m(e, n, t);
                else if (e.tag === 19) _m(e, n, t);
                else if (e.child !== null) {
                    ((e.child.return = e), (e = e.child));
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                ((e.sibling.return = e.return), (e = e.sibling));
            }
        switch (i) {
            case 'forwards':
                for (n = t.child, i = null; n !== null; ) ((e = n.alternate), e !== null && Lo(e) === null && (i = n), (n = n.sibling));
                ((n = i), n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)), Nc(t, !1, i, n, s, a));
                break;
            case 'backwards':
            case 'unstable_legacy-backwards':
                for (n = null, i = t.child, t.child = null; i !== null; ) {
                    if (((e = i.alternate), e !== null && Lo(e) === null)) {
                        t.child = i;
                        break;
                    }
                    ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
                }
                Nc(t, !0, n, null, s, a);
                break;
            case 'together':
                Nc(t, !1, null, null, void 0, a);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function kn(e, t, n) {
        if ((e !== null && (t.dependencies = e.dependencies), (ia |= t.lanes), (n & t.childLanes) === 0))
            if (e !== null) {
                if ((fl(e, t, n, !1), (n & t.childLanes) === 0)) return null;
            } else return null;
        if (e !== null && t.child !== e.child) throw Error(c(153));
        if (t.child !== null) {
            for (e = t.child, n = An(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
                ((e = e.sibling), (n = n.sibling = An(e, e.pendingProps)), (n.return = t));
            n.sibling = null;
        }
        return t.child;
    }
    function jc(e, t) {
        return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && jo(e)));
    }
    function O0(e, t, n) {
        switch (t.tag) {
            case 3:
                (be(t, t.stateNode.containerInfo), Fn(t, et, e.memoizedState.cache), ka());
                break;
            case 27:
            case 5:
                we(t);
                break;
            case 4:
                be(t, t.stateNode.containerInfo);
                break;
            case 10:
                Fn(t, t.type, t.memoizedProps.value);
                break;
            case 31:
                if (t.memoizedState !== null) return ((t.flags |= 128), Pr(t), null);
                break;
            case 13:
                var a = t.memoizedState;
                if (a !== null)
                    return a.dehydrated !== null
                        ? (ta(t), (t.flags |= 128), null)
                        : (n & t.child.childLanes) !== 0
                          ? Dm(e, t, n)
                          : (ta(t), (e = kn(e, t, n)), e !== null ? e.sibling : null);
                ta(t);
                break;
            case 19:
                var i = (e.flags & 128) !== 0;
                if (((a = (n & t.childLanes) !== 0), a || (fl(e, t, n, !1), (a = (n & t.childLanes) !== 0)), i)) {
                    if (a) return Lm(e, t, n);
                    t.flags |= 128;
                }
                if (((i = t.memoizedState), i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)), F(Fe, Fe.current), a))
                    break;
                return null;
            case 22:
                return ((t.lanes = 0), jm(e, t, n, t.pendingProps));
            case 24:
                Fn(t, et, e.memoizedState.cache);
        }
        return kn(e, t, n);
    }
    function Um(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps) nt = !0;
            else {
                if (!jc(e, n) && (t.flags & 128) === 0) return ((nt = !1), O0(e, t, n));
                nt = (e.flags & 131072) !== 0;
            }
        else ((nt = !1), ke && (t.flags & 1048576) !== 0 && pd(t, ri, t.index));
        switch (((t.lanes = 0), t.tag)) {
            case 16:
                e: {
                    var a = t.pendingProps;
                    if (((e = La(t.elementType)), (t.type = e), typeof e == 'function'))
                        zr(e) ? ((a = Va(e, a)), (t.tag = 1), (t = km(null, t, e, a, n))) : ((t.tag = 0), (t = xc(null, t, e, a, n)));
                    else {
                        if (e != null) {
                            var i = e.$$typeof;
                            if (i === K) {
                                ((t.tag = 11), (t = Tm(null, t, e, a, n)));
                                break e;
                            } else if (i === k) {
                                ((t.tag = 14), (t = Am(null, t, e, a, n)));
                                break e;
                            }
                        }
                        throw ((t = ie(e) || e), Error(c(306, t, '')));
                    }
                }
                return t;
            case 0:
                return xc(e, t, t.type, t.pendingProps, n);
            case 1:
                return ((a = t.type), (i = Va(a, t.pendingProps)), km(e, t, a, i, n));
            case 3:
                e: {
                    if ((be(t, t.stateNode.containerInfo), e === null)) throw Error(c(387));
                    a = t.pendingProps;
                    var s = t.memoizedState;
                    ((i = s.element), Ir(e, t), gi(t, a, null, n));
                    var d = t.memoizedState;
                    if (((a = d.cache), Fn(t, et, a), a !== s.cache && qr(t, [et], n, !0), pi(), (a = d.element), s.isDehydrated))
                        if (
                            ((s = { element: a, isDehydrated: !1, cache: d.cache }),
                            (t.updateQueue.baseState = s),
                            (t.memoizedState = s),
                            t.flags & 256)
                        ) {
                            t = zm(e, t, a, n);
                            break e;
                        } else if (a !== i) {
                            ((i = Qt(Error(c(424)), t)), ci(i), (t = zm(e, t, a, n)));
                            break e;
                        } else {
                            switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
                            }
                            for (Ke = Ft(e.firstChild), mt = t, ke = !0, Jn = null, Jt = !0, n = jd(t, null, a, n), t.child = n; n; )
                                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
                        }
                    else {
                        if ((ka(), a === i)) {
                            t = kn(e, t, n);
                            break e;
                        }
                        pt(e, t, a, n);
                    }
                    t = t.child;
                }
                return t;
            case 26:
                return (
                    Zo(e, t),
                    e === null
                        ? (n = Ih(t.type, null, t.pendingProps, null))
                            ? (t.memoizedState = n)
                            : ke ||
                              ((n = t.type),
                              (e = t.pendingProps),
                              (a = us(pe.current).createElement(n)),
                              (a[dt] = t),
                              (a[Tt] = e),
                              gt(a, n, e),
                              ut(a),
                              (t.stateNode = a))
                        : (t.memoizedState = Ih(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
                    null
                );
            case 27:
                return (
                    we(t),
                    e === null &&
                        ke &&
                        ((a = t.stateNode = Kh(t.type, t.pendingProps, pe.current)),
                        (mt = t),
                        (Jt = !0),
                        (i = Ke),
                        ua(t.type) ? ((su = i), (Ke = Ft(a.firstChild))) : (Ke = i)),
                    pt(e, t, t.pendingProps.children, n),
                    Zo(e, t),
                    e === null && (t.flags |= 4194304),
                    t.child
                );
            case 5:
                return (
                    e === null &&
                        ke &&
                        ((i = a = Ke) &&
                            ((a = sb(a, t.type, t.pendingProps, Jt)),
                            a !== null ? ((t.stateNode = a), (mt = t), (Ke = Ft(a.firstChild)), (Jt = !1), (i = !0)) : (i = !1)),
                        i || Wn(t)),
                    we(t),
                    (i = t.type),
                    (s = t.pendingProps),
                    (d = e !== null ? e.memoizedProps : null),
                    (a = s.children),
                    nu(i, s) ? (a = null) : d !== null && nu(i, d) && (t.flags |= 32),
                    t.memoizedState !== null && ((i = tc(e, t, w0, null, null, n)), (Li._currentValue = i)),
                    Zo(e, t),
                    pt(e, t, a, n),
                    t.child
                );
            case 6:
                return (
                    e === null &&
                        ke &&
                        ((e = n = Ke) &&
                            ((n = rb(n, t.pendingProps, Jt)), n !== null ? ((t.stateNode = n), (mt = t), (Ke = null), (e = !0)) : (e = !1)),
                        e || Wn(t)),
                    null
                );
            case 13:
                return Dm(e, t, n);
            case 4:
                return (be(t, t.stateNode.containerInfo), (a = t.pendingProps), e === null ? (t.child = Ba(t, null, a, n)) : pt(e, t, a, n), t.child);
            case 11:
                return Tm(e, t, t.type, t.pendingProps, n);
            case 7:
                return (pt(e, t, t.pendingProps, n), t.child);
            case 8:
                return (pt(e, t, t.pendingProps.children, n), t.child);
            case 12:
                return (pt(e, t, t.pendingProps.children, n), t.child);
            case 10:
                return ((a = t.pendingProps), Fn(t, t.type, a.value), pt(e, t, a.children, n), t.child);
            case 9:
                return (
                    (i = t.type._context),
                    (a = t.pendingProps.children),
                    Da(t),
                    (i = ht(i)),
                    (a = a(i)),
                    (t.flags |= 1),
                    pt(e, t, a, n),
                    t.child
                );
            case 14:
                return Am(e, t, t.type, t.pendingProps, n);
            case 15:
                return Nm(e, t, t.type, t.pendingProps, n);
            case 19:
                return Lm(e, t, n);
            case 31:
                return R0(e, t, n);
            case 22:
                return jm(e, t, n, t.pendingProps);
            case 24:
                return (
                    Da(t),
                    (a = ht(et)),
                    e === null
                        ? ((i = Kr()),
                          i === null && ((i = Xe), (s = Yr()), (i.pooledCache = s), s.refCount++, s !== null && (i.pooledCacheLanes |= n), (i = s)),
                          (t.memoizedState = { parent: a, cache: i }),
                          Zr(t),
                          Fn(t, et, i))
                        : ((e.lanes & n) !== 0 && (Ir(e, t), gi(t, null, null, n), pi()),
                          (i = e.memoizedState),
                          (s = t.memoizedState),
                          i.parent !== a
                              ? ((i = { parent: a, cache: a }),
                                (t.memoizedState = i),
                                t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i),
                                Fn(t, et, a))
                              : ((a = s.cache), Fn(t, et, a), a !== i.cache && qr(t, [et], n, !0))),
                    pt(e, t, t.pendingProps.children, n),
                    t.child
                );
            case 29:
                throw t.pendingProps;
        }
        throw Error(c(156, t.tag));
    }
    function zn(e) {
        e.flags |= 4;
    }
    function Mc(e, t, n, a, i) {
        if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
            if (((e.flags |= 16777216), (i & 335544128) === i))
                if (e.stateNode.complete) e.flags |= 8192;
                else if (uh()) e.flags |= 8192;
                else throw ((Ua = ko), Qr);
        } else e.flags &= -16777217;
    }
    function Bm(e, t) {
        if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
        else if (((e.flags |= 16777216), !Ph(t)))
            if (uh()) e.flags |= 8192;
            else throw ((Ua = ko), Qr);
    }
    function Jo(e, t) {
        (t !== null && (e.flags |= 4), e.flags & 16384 && ((t = e.tag !== 22 ? vf() : 536870912), (e.lanes |= t), (Cl |= t)));
    }
    function wi(e, t) {
        if (!ke)
            switch (e.tailMode) {
                case 'hidden':
                    t = e.tail;
                    for (var n = null; t !== null; ) (t.alternate !== null && (n = t), (t = t.sibling));
                    n === null ? (e.tail = null) : (n.sibling = null);
                    break;
                case 'collapsed':
                    n = e.tail;
                    for (var a = null; n !== null; ) (n.alternate !== null && (a = n), (n = n.sibling));
                    a === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (a.sibling = null);
            }
    }
    function Qe(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            n = 0,
            a = 0;
        if (t)
            for (var i = e.child; i !== null; )
                ((n |= i.lanes | i.childLanes), (a |= i.subtreeFlags & 65011712), (a |= i.flags & 65011712), (i.return = e), (i = i.sibling));
        else for (i = e.child; i !== null; ) ((n |= i.lanes | i.childLanes), (a |= i.subtreeFlags), (a |= i.flags), (i.return = e), (i = i.sibling));
        return ((e.subtreeFlags |= a), (e.childLanes = n), t);
    }
    function k0(e, t, n) {
        var a = t.pendingProps;
        switch ((Ur(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return (Qe(t), null);
            case 1:
                return (Qe(t), null);
            case 3:
                return (
                    (n = t.stateNode),
                    (a = null),
                    e !== null && (a = e.memoizedState.cache),
                    t.memoizedState.cache !== a && (t.flags |= 2048),
                    Mn(et),
                    ye(),
                    n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
                    (e === null || e.child === null) &&
                        (ul(t) ? zn(t) : e === null || (e.memoizedState.isDehydrated && (t.flags & 256) === 0) || ((t.flags |= 1024), Hr())),
                    Qe(t),
                    null
                );
            case 26:
                var i = t.type,
                    s = t.memoizedState;
                return (
                    e === null
                        ? (zn(t), s !== null ? (Qe(t), Bm(t, s)) : (Qe(t), Mc(t, i, null, a, n)))
                        : s
                          ? s !== e.memoizedState
                              ? (zn(t), Qe(t), Bm(t, s))
                              : (Qe(t), (t.flags &= -16777217))
                          : ((e = e.memoizedProps), e !== a && zn(t), Qe(t), Mc(t, i, e, a, n)),
                    null
                );
            case 27:
                if ((Te(t), (n = pe.current), (i = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== a && zn(t);
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(c(166));
                        return (Qe(t), null);
                    }
                    ((e = P.current), ul(t) ? vd(t) : ((e = Kh(i, a, n)), (t.stateNode = e), zn(t)));
                }
                return (Qe(t), null);
            case 5:
                if ((Te(t), (i = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== a && zn(t);
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(c(166));
                        return (Qe(t), null);
                    }
                    if (((s = P.current), ul(t))) vd(t);
                    else {
                        var d = us(pe.current);
                        switch (s) {
                            case 1:
                                s = d.createElementNS('http://www.w3.org/2000/svg', i);
                                break;
                            case 2:
                                s = d.createElementNS('http://www.w3.org/1998/Math/MathML', i);
                                break;
                            default:
                                switch (i) {
                                    case 'svg':
                                        s = d.createElementNS('http://www.w3.org/2000/svg', i);
                                        break;
                                    case 'math':
                                        s = d.createElementNS('http://www.w3.org/1998/Math/MathML', i);
                                        break;
                                    case 'script':
                                        ((s = d.createElement('div')), (s.innerHTML = '<script><\/script>'), (s = s.removeChild(s.firstChild)));
                                        break;
                                    case 'select':
                                        ((s = typeof a.is == 'string' ? d.createElement('select', { is: a.is }) : d.createElement('select')),
                                            a.multiple ? (s.multiple = !0) : a.size && (s.size = a.size));
                                        break;
                                    default:
                                        s = typeof a.is == 'string' ? d.createElement(i, { is: a.is }) : d.createElement(i);
                                }
                        }
                        ((s[dt] = t), (s[Tt] = a));
                        e: for (d = t.child; d !== null; ) {
                            if (d.tag === 5 || d.tag === 6) s.appendChild(d.stateNode);
                            else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                                ((d.child.return = d), (d = d.child));
                                continue;
                            }
                            if (d === t) break e;
                            for (; d.sibling === null; ) {
                                if (d.return === null || d.return === t) break e;
                                d = d.return;
                            }
                            ((d.sibling.return = d.return), (d = d.sibling));
                        }
                        t.stateNode = s;
                        e: switch ((gt(s, i, a), i)) {
                            case 'button':
                            case 'input':
                            case 'select':
                            case 'textarea':
                                a = !!a.autoFocus;
                                break e;
                            case 'img':
                                a = !0;
                                break e;
                            default:
                                a = !1;
                        }
                        a && zn(t);
                    }
                }
                return (Qe(t), Mc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null);
            case 6:
                if (e && t.stateNode != null) e.memoizedProps !== a && zn(t);
                else {
                    if (typeof a != 'string' && t.stateNode === null) throw Error(c(166));
                    if (((e = pe.current), ul(t))) {
                        if (((e = t.stateNode), (n = t.memoizedProps), (a = null), (i = mt), i !== null))
                            switch (i.tag) {
                                case 27:
                                case 5:
                                    a = i.memoizedProps;
                            }
                        ((e[dt] = t),
                            (e = !!(e.nodeValue === n || (a !== null && a.suppressHydrationWarning === !0) || Dh(e.nodeValue, n))),
                            e || Wn(t, !0));
                    } else ((e = us(e).createTextNode(a)), (e[dt] = t), (t.stateNode = e));
                }
                return (Qe(t), null);
            case 31:
                if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
                    if (((a = ul(t)), n !== null)) {
                        if (e === null) {
                            if (!a) throw Error(c(318));
                            if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(c(557));
                            e[dt] = t;
                        } else (ka(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
                        (Qe(t), (e = !1));
                    } else ((n = Hr()), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), (e = !0));
                    if (!e) return t.flags & 256 ? (Ut(t), t) : (Ut(t), null);
                    if ((t.flags & 128) !== 0) throw Error(c(558));
                }
                return (Qe(t), null);
            case 13:
                if (((a = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
                    if (((i = ul(t)), a !== null && a.dehydrated !== null)) {
                        if (e === null) {
                            if (!i) throw Error(c(318));
                            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(c(317));
                            i[dt] = t;
                        } else (ka(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
                        (Qe(t), (i = !1));
                    } else ((i = Hr()), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), (i = !0));
                    if (!i) return t.flags & 256 ? (Ut(t), t) : (Ut(t), null);
                }
                return (
                    Ut(t),
                    (t.flags & 128) !== 0
                        ? ((t.lanes = n), t)
                        : ((n = a !== null),
                          (e = e !== null && e.memoizedState !== null),
                          n &&
                              ((a = t.child),
                              (i = null),
                              a.alternate !== null &&
                                  a.alternate.memoizedState !== null &&
                                  a.alternate.memoizedState.cachePool !== null &&
                                  (i = a.alternate.memoizedState.cachePool.pool),
                              (s = null),
                              a.memoizedState !== null && a.memoizedState.cachePool !== null && (s = a.memoizedState.cachePool.pool),
                              s !== i && (a.flags |= 2048)),
                          n !== e && n && (t.child.flags |= 8192),
                          Jo(t, t.updateQueue),
                          Qe(t),
                          null)
                );
            case 4:
                return (ye(), e === null && Fc(t.stateNode.containerInfo), Qe(t), null);
            case 10:
                return (Mn(t.type), Qe(t), null);
            case 19:
                if ((q(Fe), (a = t.memoizedState), a === null)) return (Qe(t), null);
                if (((i = (t.flags & 128) !== 0), (s = a.rendering), s === null))
                    if (i) wi(a, !1);
                    else {
                        if (We !== 0 || (e !== null && (e.flags & 128) !== 0))
                            for (e = t.child; e !== null; ) {
                                if (((s = Lo(e)), s !== null)) {
                                    for (
                                        t.flags |= 128,
                                            wi(a, !1),
                                            e = s.updateQueue,
                                            t.updateQueue = e,
                                            Jo(t, e),
                                            t.subtreeFlags = 0,
                                            e = n,
                                            n = t.child;
                                        n !== null;

                                    )
                                        (dd(n, e), (n = n.sibling));
                                    return (F(Fe, (Fe.current & 1) | 2), ke && Nn(t, a.treeForkCount), t.child);
                                }
                                e = e.sibling;
                            }
                        a.tail !== null && St() > es && ((t.flags |= 128), (i = !0), wi(a, !1), (t.lanes = 4194304));
                    }
                else {
                    if (!i)
                        if (((e = Lo(s)), e !== null)) {
                            if (
                                ((t.flags |= 128),
                                (i = !0),
                                (e = e.updateQueue),
                                (t.updateQueue = e),
                                Jo(t, e),
                                wi(a, !0),
                                a.tail === null && a.tailMode === 'hidden' && !s.alternate && !ke)
                            )
                                return (Qe(t), null);
                        } else
                            2 * St() - a.renderingStartTime > es && n !== 536870912 && ((t.flags |= 128), (i = !0), wi(a, !1), (t.lanes = 4194304));
                    a.isBackwards
                        ? ((s.sibling = t.child), (t.child = s))
                        : ((e = a.last), e !== null ? (e.sibling = s) : (t.child = s), (a.last = s));
                }
                return a.tail !== null
                    ? ((e = a.tail),
                      (a.rendering = e),
                      (a.tail = e.sibling),
                      (a.renderingStartTime = St()),
                      (e.sibling = null),
                      (n = Fe.current),
                      F(Fe, i ? (n & 1) | 2 : n & 1),
                      ke && Nn(t, a.treeForkCount),
                      e)
                    : (Qe(t), null);
            case 22:
            case 23:
                return (
                    Ut(t),
                    $r(),
                    (a = t.memoizedState !== null),
                    e !== null ? (e.memoizedState !== null) !== a && (t.flags |= 8192) : a && (t.flags |= 8192),
                    a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t),
                    (n = t.updateQueue),
                    n !== null && Jo(t, n.retryQueue),
                    (n = null),
                    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
                    (a = null),
                    t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
                    a !== n && (t.flags |= 2048),
                    e !== null && q(_a),
                    null
                );
            case 24:
                return ((n = null), e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Mn(et), Qe(t), null);
            case 25:
                return null;
            case 30:
                return null;
        }
        throw Error(c(156, t.tag));
    }
    function z0(e, t) {
        switch ((Ur(t), t.tag)) {
            case 1:
                return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 3:
                return (Mn(et), ye(), (e = t.flags), (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 26:
            case 27:
            case 5:
                return (Te(t), null);
            case 31:
                if (t.memoizedState !== null) {
                    if ((Ut(t), t.alternate === null)) throw Error(c(340));
                    ka();
                }
                return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 13:
                if ((Ut(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                    if (t.alternate === null) throw Error(c(340));
                    ka();
                }
                return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 19:
                return (q(Fe), null);
            case 4:
                return (ye(), null);
            case 10:
                return (Mn(t.type), null);
            case 22:
            case 23:
                return (Ut(t), $r(), e !== null && q(_a), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 24:
                return (Mn(et), null);
            case 25:
                return null;
            default:
                return null;
        }
    }
    function Hm(e, t) {
        switch ((Ur(t), t.tag)) {
            case 3:
                (Mn(et), ye());
                break;
            case 26:
            case 27:
            case 5:
                Te(t);
                break;
            case 4:
                ye();
                break;
            case 31:
                t.memoizedState !== null && Ut(t);
                break;
            case 13:
                Ut(t);
                break;
            case 19:
                q(Fe);
                break;
            case 10:
                Mn(t.type);
                break;
            case 22:
            case 23:
                (Ut(t), $r(), e !== null && q(_a));
                break;
            case 24:
                Mn(et);
        }
    }
    function Ci(e, t) {
        try {
            var n = t.updateQueue,
                a = n !== null ? n.lastEffect : null;
            if (a !== null) {
                var i = a.next;
                n = i;
                do {
                    if ((n.tag & e) === e) {
                        a = void 0;
                        var s = n.create,
                            d = n.inst;
                        ((a = s()), (d.destroy = a));
                    }
                    n = n.next;
                } while (n !== i);
            }
        } catch (b) {
            Be(t, t.return, b);
        }
    }
    function aa(e, t, n) {
        try {
            var a = t.updateQueue,
                i = a !== null ? a.lastEffect : null;
            if (i !== null) {
                var s = i.next;
                a = s;
                do {
                    if ((a.tag & e) === e) {
                        var d = a.inst,
                            b = d.destroy;
                        if (b !== void 0) {
                            ((d.destroy = void 0), (i = t));
                            var C = n,
                                _ = b;
                            try {
                                _();
                            } catch (X) {
                                Be(i, C, X);
                            }
                        }
                    }
                    a = a.next;
                } while (a !== s);
            }
        } catch (X) {
            Be(t, t.return, X);
        }
    }
    function Vm(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var n = e.stateNode;
            try {
                Rd(t, n);
            } catch (a) {
                Be(e, e.return, a);
            }
        }
    }
    function Gm(e, t, n) {
        ((n.props = Va(e.type, e.memoizedProps)), (n.state = e.memoizedState));
        try {
            n.componentWillUnmount();
        } catch (a) {
            Be(e, t, a);
        }
    }
    function Ei(e, t) {
        try {
            var n = e.ref;
            if (n !== null) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var a = e.stateNode;
                        break;
                    case 30:
                        a = e.stateNode;
                        break;
                    default:
                        a = e.stateNode;
                }
                typeof n == 'function' ? (e.refCleanup = n(a)) : (n.current = a);
            }
        } catch (i) {
            Be(e, t, i);
        }
    }
    function pn(e, t) {
        var n = e.ref,
            a = e.refCleanup;
        if (n !== null)
            if (typeof a == 'function')
                try {
                    a();
                } catch (i) {
                    Be(e, t, i);
                } finally {
                    ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
                }
            else if (typeof n == 'function')
                try {
                    n(null);
                } catch (i) {
                    Be(e, t, i);
                }
            else n.current = null;
    }
    function qm(e) {
        var t = e.type,
            n = e.memoizedProps,
            a = e.stateNode;
        try {
            e: switch (t) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                    n.autoFocus && a.focus();
                    break e;
                case 'img':
                    n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
            }
        } catch (i) {
            Be(e, e.return, i);
        }
    }
    function Rc(e, t, n) {
        try {
            var a = e.stateNode;
            (tb(a, e.type, n, t), (a[Tt] = t));
        } catch (i) {
            Be(e, e.return, i);
        }
    }
    function Ym(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && ua(e.type)) || e.tag === 4;
    }
    function Oc(e) {
        e: for (;;) {
            for (; e.sibling === null; ) {
                if (e.return === null || Ym(e.return)) return null;
                e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if ((e.tag === 27 && ua(e.type)) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                ((e.child.return = e), (e = e.child));
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function kc(e, t, n) {
        var a = e.tag;
        if (a === 5 || a === 6)
            ((e = e.stateNode),
                t
                    ? (n.nodeType === 9 ? n.body : n.nodeName === 'HTML' ? n.ownerDocument.body : n).insertBefore(e, t)
                    : ((t = n.nodeType === 9 ? n.body : n.nodeName === 'HTML' ? n.ownerDocument.body : n),
                      t.appendChild(e),
                      (n = n._reactRootContainer),
                      n != null || t.onclick !== null || (t.onclick = En)));
        else if (a !== 4 && (a === 27 && ua(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null))
            for (kc(e, t, n), e = e.sibling; e !== null; ) (kc(e, t, n), (e = e.sibling));
    }
    function Wo(e, t, n) {
        var a = e.tag;
        if (a === 5 || a === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
        else if (a !== 4 && (a === 27 && ua(e.type) && (n = e.stateNode), (e = e.child), e !== null))
            for (Wo(e, t, n), e = e.sibling; e !== null; ) (Wo(e, t, n), (e = e.sibling));
    }
    function Xm(e) {
        var t = e.stateNode,
            n = e.memoizedProps;
        try {
            for (var a = e.type, i = t.attributes; i.length; ) t.removeAttributeNode(i[0]);
            (gt(t, a, n), (t[dt] = e), (t[Tt] = n));
        } catch (s) {
            Be(e, e.return, s);
        }
    }
    var Dn = !1,
        at = !1,
        zc = !1,
        Km = typeof WeakSet == 'function' ? WeakSet : Set,
        ft = null;
    function D0(e, t) {
        if (((e = e.containerInfo), (eu = vs), (e = ad(e)), Ar(e))) {
            if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
            else
                e: {
                    n = ((n = e.ownerDocument) && n.defaultView) || window;
                    var a = n.getSelection && n.getSelection();
                    if (a && a.rangeCount !== 0) {
                        n = a.anchorNode;
                        var i = a.anchorOffset,
                            s = a.focusNode;
                        a = a.focusOffset;
                        try {
                            (n.nodeType, s.nodeType);
                        } catch {
                            n = null;
                            break e;
                        }
                        var d = 0,
                            b = -1,
                            C = -1,
                            _ = 0,
                            X = 0,
                            I = e,
                            U = null;
                        t: for (;;) {
                            for (
                                var V;
                                I !== n || (i !== 0 && I.nodeType !== 3) || (b = d + i),
                                    I !== s || (a !== 0 && I.nodeType !== 3) || (C = d + a),
                                    I.nodeType === 3 && (d += I.nodeValue.length),
                                    (V = I.firstChild) !== null;

                            )
                                ((U = I), (I = V));
                            for (;;) {
                                if (I === e) break t;
                                if ((U === n && ++_ === i && (b = d), U === s && ++X === a && (C = d), (V = I.nextSibling) !== null)) break;
                                ((I = U), (U = I.parentNode));
                            }
                            I = V;
                        }
                        n = b === -1 || C === -1 ? null : { start: b, end: C };
                    } else n = null;
                }
            n = n || { start: 0, end: 0 };
        } else n = null;
        for (tu = { focusedElem: e, selectionRange: n }, vs = !1, ft = t; ft !== null; )
            if (((t = ft), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) ((e.return = t), (ft = e));
            else
                for (; ft !== null; ) {
                    switch (((t = ft), (s = t.alternate), (e = t.flags), t.tag)) {
                        case 0:
                            if ((e & 4) !== 0 && ((e = t.updateQueue), (e = e !== null ? e.events : null), e !== null))
                                for (n = 0; n < e.length; n++) ((i = e[n]), (i.ref.impl = i.nextImpl));
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((e & 1024) !== 0 && s !== null) {
                                ((e = void 0), (n = t), (i = s.memoizedProps), (s = s.memoizedState), (a = n.stateNode));
                                try {
                                    var se = Va(n.type, i);
                                    ((e = a.getSnapshotBeforeUpdate(se, s)), (a.__reactInternalSnapshotBeforeUpdate = e));
                                } catch (ve) {
                                    Be(n, n.return, ve);
                                }
                            }
                            break;
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) lu(e);
                                else if (n === 1)
                                    switch (e.nodeName) {
                                        case 'HEAD':
                                        case 'HTML':
                                        case 'BODY':
                                            lu(e);
                                            break;
                                        default:
                                            e.textContent = '';
                                    }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((e & 1024) !== 0) throw Error(c(163));
                    }
                    if (((e = t.sibling), e !== null)) {
                        ((e.return = t.return), (ft = e));
                        break;
                    }
                    ft = t.return;
                }
    }
    function Qm(e, t, n) {
        var a = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                (Ln(e, n), a & 4 && Ci(5, n));
                break;
            case 1:
                if ((Ln(e, n), a & 4))
                    if (((e = n.stateNode), t === null))
                        try {
                            e.componentDidMount();
                        } catch (d) {
                            Be(n, n.return, d);
                        }
                    else {
                        var i = Va(n.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (d) {
                            Be(n, n.return, d);
                        }
                    }
                (a & 64 && Vm(n), a & 512 && Ei(n, n.return));
                break;
            case 3:
                if ((Ln(e, n), a & 64 && ((e = n.updateQueue), e !== null))) {
                    if (((t = null), n.child !== null))
                        switch (n.child.tag) {
                            case 27:
                            case 5:
                                t = n.child.stateNode;
                                break;
                            case 1:
                                t = n.child.stateNode;
                        }
                    try {
                        Rd(e, t);
                    } catch (d) {
                        Be(n, n.return, d);
                    }
                }
                break;
            case 27:
                t === null && a & 4 && Xm(n);
            case 26:
            case 5:
                (Ln(e, n), t === null && a & 4 && qm(n), a & 512 && Ei(n, n.return));
                break;
            case 12:
                Ln(e, n);
                break;
            case 31:
                (Ln(e, n), a & 4 && Jm(e, n));
                break;
            case 13:
                (Ln(e, n),
                    a & 4 && Wm(e, n),
                    a & 64 && ((e = n.memoizedState), e !== null && ((e = e.dehydrated), e !== null && ((n = Y0.bind(null, n)), cb(e, n)))));
                break;
            case 22:
                if (((a = n.memoizedState !== null || Dn), !a)) {
                    ((t = (t !== null && t.memoizedState !== null) || at), (i = Dn));
                    var s = at;
                    ((Dn = a), (at = t) && !s ? Un(e, n, (n.subtreeFlags & 8772) !== 0) : Ln(e, n), (Dn = i), (at = s));
                }
                break;
            case 30:
                break;
            default:
                Ln(e, n);
        }
    }
    function Zm(e) {
        var t = e.alternate;
        (t !== null && ((e.alternate = null), Zm(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            e.tag === 5 && ((t = e.stateNode), t !== null && cr(t)),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null));
    }
    var Ie = null,
        Nt = !1;
    function _n(e, t, n) {
        for (n = n.child; n !== null; ) (Im(e, t, n), (n = n.sibling));
    }
    function Im(e, t, n) {
        if (Ze && typeof Ze.onCommitFiberUnmount == 'function')
            try {
                Ze.onCommitFiberUnmount(oe, n);
            } catch {}
        switch (n.tag) {
            case 26:
                (at || pn(n, t),
                    _n(e, t, n),
                    n.memoizedState ? n.memoizedState.count-- : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
                break;
            case 27:
                at || pn(n, t);
                var a = Ie,
                    i = Nt;
                (ua(n.type) && ((Ie = n.stateNode), (Nt = !1)), _n(e, t, n), zi(n.stateNode), (Ie = a), (Nt = i));
                break;
            case 5:
                at || pn(n, t);
            case 6:
                if (((a = Ie), (i = Nt), (Ie = null), _n(e, t, n), (Ie = a), (Nt = i), Ie !== null))
                    if (Nt)
                        try {
                            (Ie.nodeType === 9 ? Ie.body : Ie.nodeName === 'HTML' ? Ie.ownerDocument.body : Ie).removeChild(n.stateNode);
                        } catch (s) {
                            Be(n, t, s);
                        }
                    else
                        try {
                            Ie.removeChild(n.stateNode);
                        } catch (s) {
                            Be(n, t, s);
                        }
                break;
            case 18:
                Ie !== null &&
                    (Nt
                        ? ((e = Ie), Vh(e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e, n.stateNode), Ol(e))
                        : Vh(Ie, n.stateNode));
                break;
            case 4:
                ((a = Ie), (i = Nt), (Ie = n.stateNode.containerInfo), (Nt = !0), _n(e, t, n), (Ie = a), (Nt = i));
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                (aa(2, n, t), at || aa(4, n, t), _n(e, t, n));
                break;
            case 1:
                (at || (pn(n, t), (a = n.stateNode), typeof a.componentWillUnmount == 'function' && Gm(n, t, a)), _n(e, t, n));
                break;
            case 21:
                _n(e, t, n);
                break;
            case 22:
                ((at = (a = at) || n.memoizedState !== null), _n(e, t, n), (at = a));
                break;
            default:
                _n(e, t, n);
        }
    }
    function Jm(e, t) {
        if (t.memoizedState === null && ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))) {
            e = e.dehydrated;
            try {
                Ol(e);
            } catch (n) {
                Be(t, t.return, n);
            }
        }
    }
    function Wm(e, t) {
        if (t.memoizedState === null && ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null))))
            try {
                Ol(e);
            } catch (n) {
                Be(t, t.return, n);
            }
    }
    function _0(e) {
        switch (e.tag) {
            case 31:
            case 13:
            case 19:
                var t = e.stateNode;
                return (t === null && (t = e.stateNode = new Km()), t);
            case 22:
                return ((e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new Km()), t);
            default:
                throw Error(c(435, e.tag));
        }
    }
    function Fo(e, t) {
        var n = _0(e);
        t.forEach(function (a) {
            if (!n.has(a)) {
                n.add(a);
                var i = X0.bind(null, e, a);
                a.then(i, i);
            }
        });
    }
    function jt(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var a = 0; a < n.length; a++) {
                var i = n[a],
                    s = e,
                    d = t,
                    b = d;
                e: for (; b !== null; ) {
                    switch (b.tag) {
                        case 27:
                            if (ua(b.type)) {
                                ((Ie = b.stateNode), (Nt = !1));
                                break e;
                            }
                            break;
                        case 5:
                            ((Ie = b.stateNode), (Nt = !1));
                            break e;
                        case 3:
                        case 4:
                            ((Ie = b.stateNode.containerInfo), (Nt = !0));
                            break e;
                    }
                    b = b.return;
                }
                if (Ie === null) throw Error(c(160));
                (Im(s, d, i), (Ie = null), (Nt = !1), (s = i.alternate), s !== null && (s.return = null), (i.return = null));
            }
        if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (Fm(t, e), (t = t.sibling));
    }
    var an = null;
    function Fm(e, t) {
        var n = e.alternate,
            a = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                (jt(t, e), Mt(e), a & 4 && (aa(3, e, e.return), Ci(3, e), aa(5, e, e.return)));
                break;
            case 1:
                (jt(t, e),
                    Mt(e),
                    a & 512 && (at || n === null || pn(n, n.return)),
                    a & 64 &&
                        Dn &&
                        ((e = e.updateQueue),
                        e !== null &&
                            ((a = e.callbacks),
                            a !== null && ((n = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = n === null ? a : n.concat(a))))));
                break;
            case 26:
                var i = an;
                if ((jt(t, e), Mt(e), a & 512 && (at || n === null || pn(n, n.return)), a & 4)) {
                    var s = n !== null ? n.memoizedState : null;
                    if (((a = e.memoizedState), n === null))
                        if (a === null)
                            if (e.stateNode === null) {
                                e: {
                                    ((a = e.type), (n = e.memoizedProps), (i = i.ownerDocument || i));
                                    t: switch (a) {
                                        case 'title':
                                            ((s = i.getElementsByTagName('title')[0]),
                                                (!s ||
                                                    s[Fl] ||
                                                    s[dt] ||
                                                    s.namespaceURI === 'http://www.w3.org/2000/svg' ||
                                                    s.hasAttribute('itemprop')) &&
                                                    ((s = i.createElement(a)), i.head.insertBefore(s, i.querySelector('head > title'))),
                                                gt(s, a, n),
                                                (s[dt] = e),
                                                ut(s),
                                                (a = s));
                                            break e;
                                        case 'link':
                                            var d = Fh('link', 'href', i).get(a + (n.href || ''));
                                            if (d) {
                                                for (var b = 0; b < d.length; b++)
                                                    if (
                                                        ((s = d[b]),
                                                        s.getAttribute('href') === (n.href == null || n.href === '' ? null : n.href) &&
                                                            s.getAttribute('rel') === (n.rel == null ? null : n.rel) &&
                                                            s.getAttribute('title') === (n.title == null ? null : n.title) &&
                                                            s.getAttribute('crossorigin') === (n.crossOrigin == null ? null : n.crossOrigin))
                                                    ) {
                                                        d.splice(b, 1);
                                                        break t;
                                                    }
                                            }
                                            ((s = i.createElement(a)), gt(s, a, n), i.head.appendChild(s));
                                            break;
                                        case 'meta':
                                            if ((d = Fh('meta', 'content', i).get(a + (n.content || '')))) {
                                                for (b = 0; b < d.length; b++)
                                                    if (
                                                        ((s = d[b]),
                                                        s.getAttribute('content') === (n.content == null ? null : '' + n.content) &&
                                                            s.getAttribute('name') === (n.name == null ? null : n.name) &&
                                                            s.getAttribute('property') === (n.property == null ? null : n.property) &&
                                                            s.getAttribute('http-equiv') === (n.httpEquiv == null ? null : n.httpEquiv) &&
                                                            s.getAttribute('charset') === (n.charSet == null ? null : n.charSet))
                                                    ) {
                                                        d.splice(b, 1);
                                                        break t;
                                                    }
                                            }
                                            ((s = i.createElement(a)), gt(s, a, n), i.head.appendChild(s));
                                            break;
                                        default:
                                            throw Error(c(468, a));
                                    }
                                    ((s[dt] = e), ut(s), (a = s));
                                }
                                e.stateNode = a;
                            } else $h(i, e.type, e.stateNode);
                        else e.stateNode = Wh(i, a, e.memoizedProps);
                    else
                        s !== a
                            ? (s === null ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n)) : s.count--,
                              a === null ? $h(i, e.type, e.stateNode) : Wh(i, a, e.memoizedProps))
                            : a === null && e.stateNode !== null && Rc(e, e.memoizedProps, n.memoizedProps);
                }
                break;
            case 27:
                (jt(t, e), Mt(e), a & 512 && (at || n === null || pn(n, n.return)), n !== null && a & 4 && Rc(e, e.memoizedProps, n.memoizedProps));
                break;
            case 5:
                if ((jt(t, e), Mt(e), a & 512 && (at || n === null || pn(n, n.return)), e.flags & 32)) {
                    i = e.stateNode;
                    try {
                        el(i, '');
                    } catch (se) {
                        Be(e, e.return, se);
                    }
                }
                (a & 4 && e.stateNode != null && ((i = e.memoizedProps), Rc(e, i, n !== null ? n.memoizedProps : i)), a & 1024 && (zc = !0));
                break;
            case 6:
                if ((jt(t, e), Mt(e), a & 4)) {
                    if (e.stateNode === null) throw Error(c(162));
                    ((a = e.memoizedProps), (n = e.stateNode));
                    try {
                        n.nodeValue = a;
                    } catch (se) {
                        Be(e, e.return, se);
                    }
                }
                break;
            case 3:
                if (
                    ((ms = null),
                    (i = an),
                    (an = fs(t.containerInfo)),
                    jt(t, e),
                    (an = i),
                    Mt(e),
                    a & 4 && n !== null && n.memoizedState.isDehydrated)
                )
                    try {
                        Ol(t.containerInfo);
                    } catch (se) {
                        Be(e, e.return, se);
                    }
                zc && ((zc = !1), $m(e));
                break;
            case 4:
                ((a = an), (an = fs(e.stateNode.containerInfo)), jt(t, e), Mt(e), (an = a));
                break;
            case 12:
                (jt(t, e), Mt(e));
                break;
            case 31:
                (jt(t, e), Mt(e), a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Fo(e, a))));
                break;
            case 13:
                (jt(t, e),
                    Mt(e),
                    e.child.flags & 8192 && (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) && (Po = St()),
                    a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Fo(e, a))));
                break;
            case 22:
                i = e.memoizedState !== null;
                var C = n !== null && n.memoizedState !== null,
                    _ = Dn,
                    X = at;
                if (((Dn = _ || i), (at = X || C), jt(t, e), (at = X), (Dn = _), Mt(e), a & 8192))
                    e: for (
                        t = e.stateNode,
                            t._visibility = i ? t._visibility & -2 : t._visibility | 1,
                            i && (n === null || C || Dn || at || Ga(e)),
                            n = null,
                            t = e;
                        ;

                    ) {
                        if (t.tag === 5 || t.tag === 26) {
                            if (n === null) {
                                C = n = t;
                                try {
                                    if (((s = C.stateNode), i))
                                        ((d = s.style),
                                            typeof d.setProperty == 'function'
                                                ? d.setProperty('display', 'none', 'important')
                                                : (d.display = 'none'));
                                    else {
                                        b = C.stateNode;
                                        var I = C.memoizedProps.style,
                                            U = I != null && I.hasOwnProperty('display') ? I.display : null;
                                        b.style.display = U == null || typeof U == 'boolean' ? '' : ('' + U).trim();
                                    }
                                } catch (se) {
                                    Be(C, C.return, se);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (n === null) {
                                C = t;
                                try {
                                    C.stateNode.nodeValue = i ? '' : C.memoizedProps;
                                } catch (se) {
                                    Be(C, C.return, se);
                                }
                            }
                        } else if (t.tag === 18) {
                            if (n === null) {
                                C = t;
                                try {
                                    var V = C.stateNode;
                                    i ? Gh(V, !0) : Gh(C.stateNode, !1);
                                } catch (se) {
                                    Be(C, C.return, se);
                                }
                            }
                        } else if (((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) && t.child !== null) {
                            ((t.child.return = t), (t = t.child));
                            continue;
                        }
                        if (t === e) break e;
                        for (; t.sibling === null; ) {
                            if (t.return === null || t.return === e) break e;
                            (n === t && (n = null), (t = t.return));
                        }
                        (n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling));
                    }
                a & 4 && ((a = e.updateQueue), a !== null && ((n = a.retryQueue), n !== null && ((a.retryQueue = null), Fo(e, n))));
                break;
            case 19:
                (jt(t, e), Mt(e), a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Fo(e, a))));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                (jt(t, e), Mt(e));
        }
    }
    function Mt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var n, a = e.return; a !== null; ) {
                    if (Ym(a)) {
                        n = a;
                        break;
                    }
                    a = a.return;
                }
                if (n == null) throw Error(c(160));
                switch (n.tag) {
                    case 27:
                        var i = n.stateNode,
                            s = Oc(e);
                        Wo(e, s, i);
                        break;
                    case 5:
                        var d = n.stateNode;
                        n.flags & 32 && (el(d, ''), (n.flags &= -33));
                        var b = Oc(e);
                        Wo(e, b, d);
                        break;
                    case 3:
                    case 4:
                        var C = n.stateNode.containerInfo,
                            _ = Oc(e);
                        kc(e, _, C);
                        break;
                    default:
                        throw Error(c(161));
                }
            } catch (X) {
                Be(e, e.return, X);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function $m(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                ($m(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
            }
    }
    function Ln(e, t) {
        if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) (Qm(e, t.alternate, t), (t = t.sibling));
    }
    function Ga(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    (aa(4, t, t.return), Ga(t));
                    break;
                case 1:
                    pn(t, t.return);
                    var n = t.stateNode;
                    (typeof n.componentWillUnmount == 'function' && Gm(t, t.return, n), Ga(t));
                    break;
                case 27:
                    zi(t.stateNode);
                case 26:
                case 5:
                    (pn(t, t.return), Ga(t));
                    break;
                case 22:
                    t.memoizedState === null && Ga(t);
                    break;
                case 30:
                    Ga(t);
                    break;
                default:
                    Ga(t);
            }
            e = e.sibling;
        }
    }
    function Un(e, t, n) {
        for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
            var a = t.alternate,
                i = e,
                s = t,
                d = s.flags;
            switch (s.tag) {
                case 0:
                case 11:
                case 15:
                    (Un(i, s, n), Ci(4, s));
                    break;
                case 1:
                    if ((Un(i, s, n), (a = s), (i = a.stateNode), typeof i.componentDidMount == 'function'))
                        try {
                            i.componentDidMount();
                        } catch (_) {
                            Be(a, a.return, _);
                        }
                    if (((a = s), (i = a.updateQueue), i !== null)) {
                        var b = a.stateNode;
                        try {
                            var C = i.shared.hiddenCallbacks;
                            if (C !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < C.length; i++) Md(C[i], b);
                        } catch (_) {
                            Be(a, a.return, _);
                        }
                    }
                    (n && d & 64 && Vm(s), Ei(s, s.return));
                    break;
                case 27:
                    Xm(s);
                case 26:
                case 5:
                    (Un(i, s, n), n && a === null && d & 4 && qm(s), Ei(s, s.return));
                    break;
                case 12:
                    Un(i, s, n);
                    break;
                case 31:
                    (Un(i, s, n), n && d & 4 && Jm(i, s));
                    break;
                case 13:
                    (Un(i, s, n), n && d & 4 && Wm(i, s));
                    break;
                case 22:
                    (s.memoizedState === null && Un(i, s, n), Ei(s, s.return));
                    break;
                case 30:
                    break;
                default:
                    Un(i, s, n);
            }
            t = t.sibling;
        }
    }
    function Dc(e, t) {
        var n = null;
        (e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
            (e = null),
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
            e !== n && (e != null && e.refCount++, n != null && ui(n)));
    }
    function _c(e, t) {
        ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && ui(e)));
    }
    function ln(e, t, n, a) {
        if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Pm(e, t, n, a), (t = t.sibling));
    }
    function Pm(e, t, n, a) {
        var i = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                (ln(e, t, n, a), i & 2048 && Ci(9, t));
                break;
            case 1:
                ln(e, t, n, a);
                break;
            case 3:
                (ln(e, t, n, a),
                    i & 2048 &&
                        ((e = null),
                        t.alternate !== null && (e = t.alternate.memoizedState.cache),
                        (t = t.memoizedState.cache),
                        t !== e && (t.refCount++, e != null && ui(e))));
                break;
            case 12:
                if (i & 2048) {
                    (ln(e, t, n, a), (e = t.stateNode));
                    try {
                        var s = t.memoizedProps,
                            d = s.id,
                            b = s.onPostCommit;
                        typeof b == 'function' && b(d, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
                    } catch (C) {
                        Be(t, t.return, C);
                    }
                } else ln(e, t, n, a);
                break;
            case 31:
                ln(e, t, n, a);
                break;
            case 13:
                ln(e, t, n, a);
                break;
            case 23:
                break;
            case 22:
                ((s = t.stateNode),
                    (d = t.alternate),
                    t.memoizedState !== null
                        ? s._visibility & 2
                            ? ln(e, t, n, a)
                            : Ti(e, t)
                        : s._visibility & 2
                          ? ln(e, t, n, a)
                          : ((s._visibility |= 2), Sl(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || !1)),
                    i & 2048 && Dc(d, t));
                break;
            case 24:
                (ln(e, t, n, a), i & 2048 && _c(t.alternate, t));
                break;
            default:
                ln(e, t, n, a);
        }
    }
    function Sl(e, t, n, a, i) {
        for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
            var s = e,
                d = t,
                b = n,
                C = a,
                _ = d.flags;
            switch (d.tag) {
                case 0:
                case 11:
                case 15:
                    (Sl(s, d, b, C, i), Ci(8, d));
                    break;
                case 23:
                    break;
                case 22:
                    var X = d.stateNode;
                    (d.memoizedState !== null ? (X._visibility & 2 ? Sl(s, d, b, C, i) : Ti(s, d)) : ((X._visibility |= 2), Sl(s, d, b, C, i)),
                        i && _ & 2048 && Dc(d.alternate, d));
                    break;
                case 24:
                    (Sl(s, d, b, C, i), i && _ & 2048 && _c(d.alternate, d));
                    break;
                default:
                    Sl(s, d, b, C, i);
            }
            t = t.sibling;
        }
    }
    function Ti(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var n = e,
                    a = t,
                    i = a.flags;
                switch (a.tag) {
                    case 22:
                        (Ti(n, a), i & 2048 && Dc(a.alternate, a));
                        break;
                    case 24:
                        (Ti(n, a), i & 2048 && _c(a.alternate, a));
                        break;
                    default:
                        Ti(n, a);
                }
                t = t.sibling;
            }
    }
    var Ai = 8192;
    function xl(e, t, n) {
        if (e.subtreeFlags & Ai) for (e = e.child; e !== null; ) (eh(e, t, n), (e = e.sibling));
    }
    function eh(e, t, n) {
        switch (e.tag) {
            case 26:
                (xl(e, t, n), e.flags & Ai && e.memoizedState !== null && xb(n, an, e.memoizedState, e.memoizedProps));
                break;
            case 5:
                xl(e, t, n);
                break;
            case 3:
            case 4:
                var a = an;
                ((an = fs(e.stateNode.containerInfo)), xl(e, t, n), (an = a));
                break;
            case 22:
                e.memoizedState === null &&
                    ((a = e.alternate), a !== null && a.memoizedState !== null ? ((a = Ai), (Ai = 16777216), xl(e, t, n), (Ai = a)) : xl(e, t, n));
                break;
            default:
                xl(e, t, n);
        }
    }
    function th(e) {
        var t = e.alternate;
        if (t !== null && ((e = t.child), e !== null)) {
            t.child = null;
            do ((t = e.sibling), (e.sibling = null), (e = t));
            while (e !== null);
        }
    }
    function Ni(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    ((ft = a), ah(a, e));
                }
            th(e);
        }
        if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (nh(e), (e = e.sibling));
    }
    function nh(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                (Ni(e), e.flags & 2048 && aa(9, e, e.return));
                break;
            case 3:
                Ni(e);
                break;
            case 12:
                Ni(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? ((t._visibility &= -3), $o(e)) : Ni(e);
                break;
            default:
                Ni(e);
        }
    }
    function $o(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    ((ft = a), ah(a, e));
                }
            th(e);
        }
        for (e = e.child; e !== null; ) {
            switch (((t = e), t.tag)) {
                case 0:
                case 11:
                case 15:
                    (aa(8, t, t.return), $o(t));
                    break;
                case 22:
                    ((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), $o(t)));
                    break;
                default:
                    $o(t);
            }
            e = e.sibling;
        }
    }
    function ah(e, t) {
        for (; ft !== null; ) {
            var n = ft;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    aa(8, n, t);
                    break;
                case 23:
                case 22:
                    if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                        var a = n.memoizedState.cachePool.pool;
                        a != null && a.refCount++;
                    }
                    break;
                case 24:
                    ui(n.memoizedState.cache);
            }
            if (((a = n.child), a !== null)) ((a.return = n), (ft = a));
            else
                e: for (n = e; ft !== null; ) {
                    a = ft;
                    var i = a.sibling,
                        s = a.return;
                    if ((Zm(a), a === n)) {
                        ft = null;
                        break e;
                    }
                    if (i !== null) {
                        ((i.return = s), (ft = i));
                        break e;
                    }
                    ft = s;
                }
        }
    }
    var L0 = {
            getCacheForType: function (e) {
                var t = ht(et),
                    n = t.data.get(e);
                return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
            },
            cacheSignal: function () {
                return ht(et).controller.signal;
            },
        },
        U0 = typeof WeakMap == 'function' ? WeakMap : Map,
        Le = 0,
        Xe = null,
        Ne = null,
        Re = 0,
        Ue = 0,
        Bt = null,
        la = !1,
        wl = !1,
        Lc = !1,
        Bn = 0,
        We = 0,
        ia = 0,
        qa = 0,
        Uc = 0,
        Ht = 0,
        Cl = 0,
        ji = null,
        Rt = null,
        Bc = !1,
        Po = 0,
        lh = 0,
        es = 1 / 0,
        ts = null,
        oa = null,
        st = 0,
        sa = null,
        El = null,
        Hn = 0,
        Hc = 0,
        Vc = null,
        ih = null,
        Mi = 0,
        Gc = null;
    function Vt() {
        return (Le & 2) !== 0 && Re !== 0 ? Re & -Re : A.T !== null ? Zc() : xf();
    }
    function oh() {
        if (Ht === 0)
            if ((Re & 536870912) === 0 || ke) {
                var e = ro;
                ((ro <<= 1), (ro & 3932160) === 0 && (ro = 262144), (Ht = e));
            } else Ht = 536870912;
        return ((e = Lt.current), e !== null && (e.flags |= 32), Ht);
    }
    function Ot(e, t, n) {
        (((e === Xe && (Ue === 2 || Ue === 9)) || e.cancelPendingCommit !== null) && (Tl(e, 0), ra(e, Re, Ht, !1)),
            Wl(e, n),
            ((Le & 2) === 0 || e !== Xe) && (e === Xe && ((Le & 2) === 0 && (qa |= n), We === 4 && ra(e, Re, Ht, !1)), gn(e)));
    }
    function sh(e, t, n) {
        if ((Le & 6) !== 0) throw Error(c(327));
        var a = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Jl(e, t),
            i = a ? V0(e, t) : Yc(e, t, !0),
            s = a;
        do {
            if (i === 0) {
                wl && !a && ra(e, t, 0, !1);
                break;
            } else {
                if (((n = e.current.alternate), s && !B0(n))) {
                    ((i = Yc(e, t, !1)), (s = !1));
                    continue;
                }
                if (i === 2) {
                    if (((s = t), e.errorRecoveryDisabledLanes & s)) var d = 0;
                    else ((d = e.pendingLanes & -536870913), (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0));
                    if (d !== 0) {
                        t = d;
                        e: {
                            var b = e;
                            i = ji;
                            var C = b.current.memoizedState.isDehydrated;
                            if ((C && (Tl(b, d).flags |= 256), (d = Yc(b, d, !1)), d !== 2)) {
                                if (Lc && !C) {
                                    ((b.errorRecoveryDisabledLanes |= s), (qa |= s), (i = 4));
                                    break e;
                                }
                                ((s = Rt), (Rt = i), s !== null && (Rt === null ? (Rt = s) : Rt.push.apply(Rt, s)));
                            }
                            i = d;
                        }
                        if (((s = !1), i !== 2)) continue;
                    }
                }
                if (i === 1) {
                    (Tl(e, 0), ra(e, t, 0, !0));
                    break;
                }
                e: {
                    switch (((a = e), (s = i), s)) {
                        case 0:
                        case 1:
                            throw Error(c(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            ra(a, t, Ht, !la);
                            break e;
                        case 2:
                            Rt = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(c(329));
                    }
                    if ((t & 62914560) === t && ((i = Po + 300 - St()), 10 < i)) {
                        if ((ra(a, t, Ht, !la), uo(a, 0, !0) !== 0)) break e;
                        ((Hn = t), (a.timeoutHandle = Bh(rh.bind(null, a, n, Rt, ts, Bc, t, Ht, qa, Cl, la, s, 'Throttled', -0, 0), i)));
                        break e;
                    }
                    rh(a, n, Rt, ts, Bc, t, Ht, qa, Cl, la, s, null, -0, 0);
                }
            }
            break;
        } while (!0);
        gn(e);
    }
    function rh(e, t, n, a, i, s, d, b, C, _, X, I, U, V) {
        if (((e.timeoutHandle = -1), (I = t.subtreeFlags), I & 8192 || (I & 16785408) === 16785408)) {
            ((I = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: En,
            }),
                eh(t, s, I));
            var se = (s & 62914560) === s ? Po - St() : (s & 4194048) === s ? lh - St() : 0;
            if (((se = wb(I, se)), se !== null)) {
                ((Hn = s), (e.cancelPendingCommit = se(gh.bind(null, e, t, s, n, a, i, d, b, C, X, I, null, U, V))), ra(e, s, d, !_));
                return;
            }
        }
        gh(e, t, s, n, a, i, d, b, C);
    }
    function B0(e) {
        for (var t = e; ; ) {
            var n = t.tag;
            if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null)))
                for (var a = 0; a < n.length; a++) {
                    var i = n[a],
                        s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Dt(s(), i)) return !1;
                    } catch {
                        return !1;
                    }
                }
            if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n));
            else {
                if (t === e) break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return;
                }
                ((t.sibling.return = t.return), (t = t.sibling));
            }
        }
        return !0;
    }
    function ra(e, t, n, a) {
        ((t &= ~Uc), (t &= ~qa), (e.suspendedLanes |= t), (e.pingedLanes &= ~t), a && (e.warmLanes |= t), (a = e.expirationTimes));
        for (var i = t; 0 < i; ) {
            var s = 31 - xt(i),
                d = 1 << s;
            ((a[s] = -1), (i &= ~d));
        }
        n !== 0 && yf(e, n, t);
    }
    function ns() {
        return (Le & 6) === 0 ? (Ri(0), !1) : !0;
    }
    function qc() {
        if (Ne !== null) {
            if (Ue === 0) var e = Ne.return;
            else ((e = Ne), (jn = za = null), lc(e), (pl = null), (di = 0), (e = Ne));
            for (; e !== null; ) (Hm(e.alternate, e), (e = e.return));
            Ne = null;
        }
    }
    function Tl(e, t) {
        var n = e.timeoutHandle;
        (n !== -1 && ((e.timeoutHandle = -1), lb(n)),
            (n = e.cancelPendingCommit),
            n !== null && ((e.cancelPendingCommit = null), n()),
            (Hn = 0),
            qc(),
            (Xe = e),
            (Ne = n = An(e.current, null)),
            (Re = t),
            (Ue = 0),
            (Bt = null),
            (la = !1),
            (wl = Jl(e, t)),
            (Lc = !1),
            (Cl = Ht = Uc = qa = ia = We = 0),
            (Rt = ji = null),
            (Bc = !1),
            (t & 8) !== 0 && (t |= t & 32));
        var a = e.entangledLanes;
        if (a !== 0)
            for (e = e.entanglements, a &= t; 0 < a; ) {
                var i = 31 - xt(a),
                    s = 1 << i;
                ((t |= e[i]), (a &= ~s));
            }
        return ((Bn = t), Co(), n);
    }
    function ch(e, t) {
        ((Ce = null),
            (A.H = Si),
            t === hl || t === Oo
                ? ((t = Td()), (Ue = 3))
                : t === Qr
                  ? ((t = Td()), (Ue = 4))
                  : (Ue = t === Sc ? 8 : t !== null && typeof t == 'object' && typeof t.then == 'function' ? 6 : 1),
            (Bt = t),
            Ne === null && ((We = 1), Ko(e, Qt(t, e.current))));
    }
    function uh() {
        var e = Lt.current;
        return e === null ? !0 : (Re & 4194048) === Re ? Wt === null : (Re & 62914560) === Re || (Re & 536870912) !== 0 ? e === Wt : !1;
    }
    function fh() {
        var e = A.H;
        return ((A.H = Si), e === null ? Si : e);
    }
    function dh() {
        var e = A.A;
        return ((A.A = L0), e);
    }
    function as() {
        ((We = 4),
            la || ((Re & 4194048) !== Re && Lt.current !== null) || (wl = !0),
            ((ia & 134217727) === 0 && (qa & 134217727) === 0) || Xe === null || ra(Xe, Re, Ht, !1));
    }
    function Yc(e, t, n) {
        var a = Le;
        Le |= 2;
        var i = fh(),
            s = dh();
        ((Xe !== e || Re !== t) && ((ts = null), Tl(e, t)), (t = !1));
        var d = We;
        e: do
            try {
                if (Ue !== 0 && Ne !== null) {
                    var b = Ne,
                        C = Bt;
                    switch (Ue) {
                        case 8:
                            (qc(), (d = 6));
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Lt.current === null && (t = !0);
                            var _ = Ue;
                            if (((Ue = 0), (Bt = null), Al(e, b, C, _), n && wl)) {
                                d = 0;
                                break e;
                            }
                            break;
                        default:
                            ((_ = Ue), (Ue = 0), (Bt = null), Al(e, b, C, _));
                    }
                }
                (H0(), (d = We));
                break;
            } catch (X) {
                ch(e, X);
            }
        while (!0);
        return (t && e.shellSuspendCounter++, (jn = za = null), (Le = a), (A.H = i), (A.A = s), Ne === null && ((Xe = null), (Re = 0), Co()), d);
    }
    function H0() {
        for (; Ne !== null; ) mh(Ne);
    }
    function V0(e, t) {
        var n = Le;
        Le |= 2;
        var a = fh(),
            i = dh();
        Xe !== e || Re !== t ? ((ts = null), (es = St() + 500), Tl(e, t)) : (wl = Jl(e, t));
        e: do
            try {
                if (Ue !== 0 && Ne !== null) {
                    t = Ne;
                    var s = Bt;
                    t: switch (Ue) {
                        case 1:
                            ((Ue = 0), (Bt = null), Al(e, t, s, 1));
                            break;
                        case 2:
                        case 9:
                            if (Cd(s)) {
                                ((Ue = 0), (Bt = null), hh(t));
                                break;
                            }
                            ((t = function () {
                                ((Ue !== 2 && Ue !== 9) || Xe !== e || (Ue = 7), gn(e));
                            }),
                                s.then(t, t));
                            break e;
                        case 3:
                            Ue = 7;
                            break e;
                        case 4:
                            Ue = 5;
                            break e;
                        case 7:
                            Cd(s) ? ((Ue = 0), (Bt = null), hh(t)) : ((Ue = 0), (Bt = null), Al(e, t, s, 7));
                            break;
                        case 5:
                            var d = null;
                            switch (Ne.tag) {
                                case 26:
                                    d = Ne.memoizedState;
                                case 5:
                                case 27:
                                    var b = Ne;
                                    if (d ? Ph(d) : b.stateNode.complete) {
                                        ((Ue = 0), (Bt = null));
                                        var C = b.sibling;
                                        if (C !== null) Ne = C;
                                        else {
                                            var _ = b.return;
                                            _ !== null ? ((Ne = _), ls(_)) : (Ne = null);
                                        }
                                        break t;
                                    }
                            }
                            ((Ue = 0), (Bt = null), Al(e, t, s, 5));
                            break;
                        case 6:
                            ((Ue = 0), (Bt = null), Al(e, t, s, 6));
                            break;
                        case 8:
                            (qc(), (We = 6));
                            break e;
                        default:
                            throw Error(c(462));
                    }
                }
                G0();
                break;
            } catch (X) {
                ch(e, X);
            }
        while (!0);
        return ((jn = za = null), (A.H = a), (A.A = i), (Le = n), Ne !== null ? 0 : ((Xe = null), (Re = 0), Co(), We));
    }
    function G0() {
        for (; Ne !== null && !Ps(); ) mh(Ne);
    }
    function mh(e) {
        var t = Um(e.alternate, e, Bn);
        ((e.memoizedProps = e.pendingProps), t === null ? ls(e) : (Ne = t));
    }
    function hh(e) {
        var t = e,
            n = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = Om(n, t, t.pendingProps, t.type, void 0, Re);
                break;
            case 11:
                t = Om(n, t, t.pendingProps, t.type.render, t.ref, Re);
                break;
            case 5:
                lc(t);
            default:
                (Hm(n, t), (t = Ne = dd(t, Bn)), (t = Um(n, t, Bn)));
        }
        ((e.memoizedProps = e.pendingProps), t === null ? ls(e) : (Ne = t));
    }
    function Al(e, t, n, a) {
        ((jn = za = null), lc(t), (pl = null), (di = 0));
        var i = t.return;
        try {
            if (M0(e, i, t, n, Re)) {
                ((We = 1), Ko(e, Qt(n, e.current)), (Ne = null));
                return;
            }
        } catch (s) {
            if (i !== null) throw ((Ne = i), s);
            ((We = 1), Ko(e, Qt(n, e.current)), (Ne = null));
            return;
        }
        t.flags & 32768
            ? (ke || a === 1
                  ? (e = !0)
                  : wl || (Re & 536870912) !== 0
                    ? (e = !1)
                    : ((la = e = !0),
                      (a === 2 || a === 9 || a === 3 || a === 6) && ((a = Lt.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
              ph(t, e))
            : ls(t);
    }
    function ls(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                ph(t, la);
                return;
            }
            e = t.return;
            var n = k0(t.alternate, t, Bn);
            if (n !== null) {
                Ne = n;
                return;
            }
            if (((t = t.sibling), t !== null)) {
                Ne = t;
                return;
            }
            Ne = t = e;
        } while (t !== null);
        We === 0 && (We = 5);
    }
    function ph(e, t) {
        do {
            var n = z0(e.alternate, e);
            if (n !== null) {
                ((n.flags &= 32767), (Ne = n));
                return;
            }
            if (
                ((n = e.return), n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)), !t && ((e = e.sibling), e !== null))
            ) {
                Ne = e;
                return;
            }
            Ne = e = n;
        } while (e !== null);
        ((We = 6), (Ne = null));
    }
    function gh(e, t, n, a, i, s, d, b, C) {
        e.cancelPendingCommit = null;
        do is();
        while (st !== 0);
        if ((Le & 6) !== 0) throw Error(c(327));
        if (t !== null) {
            if (t === e.current) throw Error(c(177));
            if (
                ((s = t.lanes | t.childLanes),
                (s |= Or),
                Sy(e, n, s, d, b, C),
                e === Xe && ((Ne = Xe = null), (Re = 0)),
                (El = t),
                (sa = e),
                (Hn = n),
                (Hc = s),
                (Vc = i),
                (ih = a),
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
                    ? ((e.callbackNode = null),
                      (e.callbackPriority = 0),
                      K0(Ea, function () {
                          return (xh(), null);
                      }))
                    : ((e.callbackNode = null), (e.callbackPriority = 0)),
                (a = (t.flags & 13878) !== 0),
                (t.subtreeFlags & 13878) !== 0 || a)
            ) {
                ((a = A.T), (A.T = null), (i = Y.p), (Y.p = 2), (d = Le), (Le |= 4));
                try {
                    D0(e, t, n);
                } finally {
                    ((Le = d), (Y.p = i), (A.T = a));
                }
            }
            ((st = 1), vh(), yh(), bh());
        }
    }
    function vh() {
        if (st === 1) {
            st = 0;
            var e = sa,
                t = El,
                n = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || n) {
                ((n = A.T), (A.T = null));
                var a = Y.p;
                Y.p = 2;
                var i = Le;
                Le |= 4;
                try {
                    Fm(t, e);
                    var s = tu,
                        d = ad(e.containerInfo),
                        b = s.focusedElem,
                        C = s.selectionRange;
                    if (d !== b && b && b.ownerDocument && nd(b.ownerDocument.documentElement, b)) {
                        if (C !== null && Ar(b)) {
                            var _ = C.start,
                                X = C.end;
                            if ((X === void 0 && (X = _), 'selectionStart' in b))
                                ((b.selectionStart = _), (b.selectionEnd = Math.min(X, b.value.length)));
                            else {
                                var I = b.ownerDocument || document,
                                    U = (I && I.defaultView) || window;
                                if (U.getSelection) {
                                    var V = U.getSelection(),
                                        se = b.textContent.length,
                                        ve = Math.min(C.start, se),
                                        qe = C.end === void 0 ? ve : Math.min(C.end, se);
                                    !V.extend && ve > qe && ((d = qe), (qe = ve), (ve = d));
                                    var O = td(b, ve),
                                        j = td(b, qe);
                                    if (
                                        O &&
                                        j &&
                                        (V.rangeCount !== 1 ||
                                            V.anchorNode !== O.node ||
                                            V.anchorOffset !== O.offset ||
                                            V.focusNode !== j.node ||
                                            V.focusOffset !== j.offset)
                                    ) {
                                        var D = I.createRange();
                                        (D.setStart(O.node, O.offset),
                                            V.removeAllRanges(),
                                            ve > qe ? (V.addRange(D), V.extend(j.node, j.offset)) : (D.setEnd(j.node, j.offset), V.addRange(D)));
                                    }
                                }
                            }
                        }
                        for (I = [], V = b; (V = V.parentNode); ) V.nodeType === 1 && I.push({ element: V, left: V.scrollLeft, top: V.scrollTop });
                        for (typeof b.focus == 'function' && b.focus(), b = 0; b < I.length; b++) {
                            var Z = I[b];
                            ((Z.element.scrollLeft = Z.left), (Z.element.scrollTop = Z.top));
                        }
                    }
                    ((vs = !!eu), (tu = eu = null));
                } finally {
                    ((Le = i), (Y.p = a), (A.T = n));
                }
            }
            ((e.current = t), (st = 2));
        }
    }
    function yh() {
        if (st === 2) {
            st = 0;
            var e = sa,
                t = El,
                n = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || n) {
                ((n = A.T), (A.T = null));
                var a = Y.p;
                Y.p = 2;
                var i = Le;
                Le |= 4;
                try {
                    Qm(e, t.alternate, t);
                } finally {
                    ((Le = i), (Y.p = a), (A.T = n));
                }
            }
            st = 3;
        }
    }
    function bh() {
        if (st === 4 || st === 3) {
            ((st = 0), er());
            var e = sa,
                t = El,
                n = Hn,
                a = ih;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (st = 5) : ((st = 0), (El = sa = null), Sh(e, e.pendingLanes));
            var i = e.pendingLanes;
            if ((i === 0 && (oa = null), sr(n), (t = t.stateNode), Ze && typeof Ze.onCommitFiberRoot == 'function'))
                try {
                    Ze.onCommitFiberRoot(oe, t, void 0, (t.current.flags & 128) === 128);
                } catch {}
            if (a !== null) {
                ((t = A.T), (i = Y.p), (Y.p = 2), (A.T = null));
                try {
                    for (var s = e.onRecoverableError, d = 0; d < a.length; d++) {
                        var b = a[d];
                        s(b.value, { componentStack: b.stack });
                    }
                } finally {
                    ((A.T = t), (Y.p = i));
                }
            }
            ((Hn & 3) !== 0 && is(),
                gn(e),
                (i = e.pendingLanes),
                (n & 261930) !== 0 && (i & 42) !== 0 ? (e === Gc ? Mi++ : ((Mi = 0), (Gc = e))) : (Mi = 0),
                Ri(0));
        }
    }
    function Sh(e, t) {
        (e.pooledCacheLanes &= t) === 0 && ((t = e.pooledCache), t != null && ((e.pooledCache = null), ui(t)));
    }
    function is() {
        return (vh(), yh(), bh(), xh());
    }
    function xh() {
        if (st !== 5) return !1;
        var e = sa,
            t = Hc;
        Hc = 0;
        var n = sr(Hn),
            a = A.T,
            i = Y.p;
        try {
            ((Y.p = 32 > n ? 32 : n), (A.T = null), (n = Vc), (Vc = null));
            var s = sa,
                d = Hn;
            if (((st = 0), (El = sa = null), (Hn = 0), (Le & 6) !== 0)) throw Error(c(331));
            var b = Le;
            if (((Le |= 4), nh(s.current), Pm(s, s.current, d, n), (Le = b), Ri(0, !1), Ze && typeof Ze.onPostCommitFiberRoot == 'function'))
                try {
                    Ze.onPostCommitFiberRoot(oe, s);
                } catch {}
            return !0;
        } finally {
            ((Y.p = i), (A.T = a), Sh(e, t));
        }
    }
    function wh(e, t, n) {
        ((t = Qt(n, t)), (t = bc(e.stateNode, t, 2)), (e = ea(e, t, 2)), e !== null && (Wl(e, 2), gn(e)));
    }
    function Be(e, t, n) {
        if (e.tag === 3) wh(e, e, n);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    wh(t, e, n);
                    break;
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (
                        typeof t.type.getDerivedStateFromError == 'function' ||
                        (typeof a.componentDidCatch == 'function' && (oa === null || !oa.has(a)))
                    ) {
                        ((e = Qt(n, e)), (n = Cm(2)), (a = ea(t, n, 2)), a !== null && (Em(n, a, t, e), Wl(a, 2), gn(a)));
                        break;
                    }
                }
                t = t.return;
            }
    }
    function Xc(e, t, n) {
        var a = e.pingCache;
        if (a === null) {
            a = e.pingCache = new U0();
            var i = new Set();
            a.set(t, i);
        } else ((i = a.get(t)), i === void 0 && ((i = new Set()), a.set(t, i)));
        i.has(n) || ((Lc = !0), i.add(n), (e = q0.bind(null, e, t, n)), t.then(e, e));
    }
    function q0(e, t, n) {
        var a = e.pingCache;
        (a !== null && a.delete(t),
            (e.pingedLanes |= e.suspendedLanes & n),
            (e.warmLanes &= ~n),
            Xe === e &&
                (Re & n) === n &&
                (We === 4 || (We === 3 && (Re & 62914560) === Re && 300 > St() - Po) ? (Le & 2) === 0 && Tl(e, 0) : (Uc |= n), Cl === Re && (Cl = 0)),
            gn(e));
    }
    function Ch(e, t) {
        (t === 0 && (t = vf()), (e = Ra(e, t)), e !== null && (Wl(e, t), gn(e)));
    }
    function Y0(e) {
        var t = e.memoizedState,
            n = 0;
        (t !== null && (n = t.retryLane), Ch(e, n));
    }
    function X0(e, t) {
        var n = 0;
        switch (e.tag) {
            case 31:
            case 13:
                var a = e.stateNode,
                    i = e.memoizedState;
                i !== null && (n = i.retryLane);
                break;
            case 19:
                a = e.stateNode;
                break;
            case 22:
                a = e.stateNode._retryCache;
                break;
            default:
                throw Error(c(314));
        }
        (a !== null && a.delete(t), Ch(e, n));
    }
    function K0(e, t) {
        return Kn(e, t);
    }
    var os = null,
        Nl = null,
        Kc = !1,
        ss = !1,
        Qc = !1,
        ca = 0;
    function gn(e) {
        (e !== Nl && e.next === null && (Nl === null ? (os = Nl = e) : (Nl = Nl.next = e)), (ss = !0), Kc || ((Kc = !0), Z0()));
    }
    function Ri(e, t) {
        if (!Qc && ss) {
            Qc = !0;
            do
                for (var n = !1, a = os; a !== null; ) {
                    if (e !== 0) {
                        var i = a.pendingLanes;
                        if (i === 0) var s = 0;
                        else {
                            var d = a.suspendedLanes,
                                b = a.pingedLanes;
                            ((s = (1 << (31 - xt(42 | e) + 1)) - 1), (s &= i & ~(d & ~b)), (s = s & 201326741 ? (s & 201326741) | 1 : s ? s | 2 : 0));
                        }
                        s !== 0 && ((n = !0), Nh(a, s));
                    } else
                        ((s = Re),
                            (s = uo(a, a === Xe ? s : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1)),
                            (s & 3) === 0 || Jl(a, s) || ((n = !0), Nh(a, s)));
                    a = a.next;
                }
            while (n);
            Qc = !1;
        }
    }
    function Q0() {
        Eh();
    }
    function Eh() {
        ss = Kc = !1;
        var e = 0;
        ca !== 0 && ab() && (e = ca);
        for (var t = St(), n = null, a = os; a !== null; ) {
            var i = a.next,
                s = Th(a, t);
            (s === 0
                ? ((a.next = null), n === null ? (os = i) : (n.next = i), i === null && (Nl = n))
                : ((n = a), (e !== 0 || (s & 3) !== 0) && (ss = !0)),
                (a = i));
        }
        ((st !== 0 && st !== 5) || Ri(e), ca !== 0 && (ca = 0));
    }
    function Th(e, t) {
        for (var n = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s; ) {
            var d = 31 - xt(s),
                b = 1 << d,
                C = i[d];
            (C === -1 ? ((b & n) === 0 || (b & a) !== 0) && (i[d] = by(b, t)) : C <= t && (e.expiredLanes |= b), (s &= ~b));
        }
        if (
            ((t = Xe),
            (n = Re),
            (n = uo(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
            (a = e.callbackNode),
            n === 0 || (e === t && (Ue === 2 || Ue === 9)) || e.cancelPendingCommit !== null)
        )
            return (a !== null && a !== null && Ca(a), (e.callbackNode = null), (e.callbackPriority = 0));
        if ((n & 3) === 0 || Jl(e, n)) {
            if (((t = n & -n), t === e.callbackPriority)) return t;
            switch ((a !== null && Ca(a), sr(n))) {
                case 2:
                case 8:
                    n = io;
                    break;
                case 32:
                    n = Ea;
                    break;
                case 268435456:
                    n = Zl;
                    break;
                default:
                    n = Ea;
            }
            return ((a = Ah.bind(null, e)), (n = Kn(n, a)), (e.callbackPriority = t), (e.callbackNode = n), t);
        }
        return (a !== null && a !== null && Ca(a), (e.callbackPriority = 2), (e.callbackNode = null), 2);
    }
    function Ah(e, t) {
        if (st !== 0 && st !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
        var n = e.callbackNode;
        if (is() && e.callbackNode !== n) return null;
        var a = Re;
        return (
            (a = uo(e, e === Xe ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
            a === 0 ? null : (sh(e, a, t), Th(e, St()), e.callbackNode != null && e.callbackNode === n ? Ah.bind(null, e) : null)
        );
    }
    function Nh(e, t) {
        if (is()) return null;
        sh(e, t, !0);
    }
    function Z0() {
        ib(function () {
            (Le & 6) !== 0 ? Kn(lo, Q0) : Eh();
        });
    }
    function Zc() {
        if (ca === 0) {
            var e = dl;
            (e === 0 && ((e = so), (so <<= 1), (so & 261888) === 0 && (so = 256)), (ca = e));
        }
        return ca;
    }
    function jh(e) {
        return e == null || typeof e == 'symbol' || typeof e == 'boolean' ? null : typeof e == 'function' ? e : po('' + e);
    }
    function Mh(e, t) {
        var n = t.ownerDocument.createElement('input');
        return (
            (n.name = t.name),
            (n.value = t.value),
            e.id && n.setAttribute('form', e.id),
            t.parentNode.insertBefore(n, t),
            (e = new FormData(e)),
            n.parentNode.removeChild(n),
            e
        );
    }
    function I0(e, t, n, a, i) {
        if (t === 'submit' && n && n.stateNode === i) {
            var s = jh((i[Tt] || null).action),
                d = a.submitter;
            d && ((t = (t = d[Tt] || null) ? jh(t.formAction) : d.getAttribute('formAction')), t !== null && ((s = t), (d = null)));
            var b = new bo('action', 'action', null, a, i);
            e.push({
                event: b,
                listeners: [
                    {
                        instance: null,
                        listener: function () {
                            if (a.defaultPrevented) {
                                if (ca !== 0) {
                                    var C = d ? Mh(i, d) : new FormData(i);
                                    mc(n, { pending: !0, data: C, method: i.method, action: s }, null, C);
                                }
                            } else
                                typeof s == 'function' &&
                                    (b.preventDefault(),
                                    (C = d ? Mh(i, d) : new FormData(i)),
                                    mc(n, { pending: !0, data: C, method: i.method, action: s }, s, C));
                        },
                        currentTarget: i,
                    },
                ],
            });
        }
    }
    for (var Ic = 0; Ic < Rr.length; Ic++) {
        var Jc = Rr[Ic],
            J0 = Jc.toLowerCase(),
            W0 = Jc[0].toUpperCase() + Jc.slice(1);
        nn(J0, 'on' + W0);
    }
    (nn(od, 'onAnimationEnd'),
        nn(sd, 'onAnimationIteration'),
        nn(rd, 'onAnimationStart'),
        nn('dblclick', 'onDoubleClick'),
        nn('focusin', 'onFocus'),
        nn('focusout', 'onBlur'),
        nn(d0, 'onTransitionRun'),
        nn(m0, 'onTransitionStart'),
        nn(h0, 'onTransitionCancel'),
        nn(cd, 'onTransitionEnd'),
        $a('onMouseEnter', ['mouseout', 'mouseover']),
        $a('onMouseLeave', ['mouseout', 'mouseover']),
        $a('onPointerEnter', ['pointerout', 'pointerover']),
        $a('onPointerLeave', ['pointerout', 'pointerover']),
        Aa('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
        Aa('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
        Aa('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
        Aa('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
        Aa('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
        Aa('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
    var Oi =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
                ' '
            ),
        F0 = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Oi));
    function Rh(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var a = e[n],
                i = a.event;
            a = a.listeners;
            e: {
                var s = void 0;
                if (t)
                    for (var d = a.length - 1; 0 <= d; d--) {
                        var b = a[d],
                            C = b.instance,
                            _ = b.currentTarget;
                        if (((b = b.listener), C !== s && i.isPropagationStopped())) break e;
                        ((s = b), (i.currentTarget = _));
                        try {
                            s(i);
                        } catch (X) {
                            wo(X);
                        }
                        ((i.currentTarget = null), (s = C));
                    }
                else
                    for (d = 0; d < a.length; d++) {
                        if (((b = a[d]), (C = b.instance), (_ = b.currentTarget), (b = b.listener), C !== s && i.isPropagationStopped())) break e;
                        ((s = b), (i.currentTarget = _));
                        try {
                            s(i);
                        } catch (X) {
                            wo(X);
                        }
                        ((i.currentTarget = null), (s = C));
                    }
            }
        }
    }
    function je(e, t) {
        var n = t[rr];
        n === void 0 && (n = t[rr] = new Set());
        var a = e + '__bubble';
        n.has(a) || (Oh(t, e, 2, !1), n.add(a));
    }
    function Wc(e, t, n) {
        var a = 0;
        (t && (a |= 4), Oh(n, e, a, t));
    }
    var rs = '_reactListening' + Math.random().toString(36).slice(2);
    function Fc(e) {
        if (!e[rs]) {
            ((e[rs] = !0),
                Ef.forEach(function (n) {
                    n !== 'selectionchange' && (F0.has(n) || Wc(n, !1, e), Wc(n, !0, e));
                }));
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[rs] || ((t[rs] = !0), Wc('selectionchange', !1, t));
        }
    }
    function Oh(e, t, n, a) {
        switch (op(t)) {
            case 2:
                var i = Tb;
                break;
            case 8:
                i = Ab;
                break;
            default:
                i = du;
        }
        ((n = i.bind(null, t, n, e)),
            (i = void 0),
            !vr || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
            a
                ? i !== void 0
                    ? e.addEventListener(t, n, { capture: !0, passive: i })
                    : e.addEventListener(t, n, !0)
                : i !== void 0
                  ? e.addEventListener(t, n, { passive: i })
                  : e.addEventListener(t, n, !1));
    }
    function $c(e, t, n, a, i) {
        var s = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            e: for (;;) {
                if (a === null) return;
                var d = a.tag;
                if (d === 3 || d === 4) {
                    var b = a.stateNode.containerInfo;
                    if (b === i) break;
                    if (d === 4)
                        for (d = a.return; d !== null; ) {
                            var C = d.tag;
                            if ((C === 3 || C === 4) && d.stateNode.containerInfo === i) return;
                            d = d.return;
                        }
                    for (; b !== null; ) {
                        if (((d = Ja(b)), d === null)) return;
                        if (((C = d.tag), C === 5 || C === 6 || C === 26 || C === 27)) {
                            a = s = d;
                            continue e;
                        }
                        b = b.parentNode;
                    }
                }
                a = a.return;
            }
        Lf(function () {
            var _ = s,
                X = pr(n),
                I = [];
            e: {
                var U = ud.get(e);
                if (U !== void 0) {
                    var V = bo,
                        se = e;
                    switch (e) {
                        case 'keypress':
                            if (vo(n) === 0) break e;
                        case 'keydown':
                        case 'keyup':
                            V = Xy;
                            break;
                        case 'focusin':
                            ((se = 'focus'), (V = xr));
                            break;
                        case 'focusout':
                            ((se = 'blur'), (V = xr));
                            break;
                        case 'beforeblur':
                        case 'afterblur':
                            V = xr;
                            break;
                        case 'click':
                            if (n.button === 2) break e;
                        case 'auxclick':
                        case 'dblclick':
                        case 'mousedown':
                        case 'mousemove':
                        case 'mouseup':
                        case 'mouseout':
                        case 'mouseover':
                        case 'contextmenu':
                            V = Hf;
                            break;
                        case 'drag':
                        case 'dragend':
                        case 'dragenter':
                        case 'dragexit':
                        case 'dragleave':
                        case 'dragover':
                        case 'dragstart':
                        case 'drop':
                            V = ky;
                            break;
                        case 'touchcancel':
                        case 'touchend':
                        case 'touchmove':
                        case 'touchstart':
                            V = Zy;
                            break;
                        case od:
                        case sd:
                        case rd:
                            V = _y;
                            break;
                        case cd:
                            V = Jy;
                            break;
                        case 'scroll':
                        case 'scrollend':
                            V = Ry;
                            break;
                        case 'wheel':
                            V = Fy;
                            break;
                        case 'copy':
                        case 'cut':
                        case 'paste':
                            V = Uy;
                            break;
                        case 'gotpointercapture':
                        case 'lostpointercapture':
                        case 'pointercancel':
                        case 'pointerdown':
                        case 'pointermove':
                        case 'pointerout':
                        case 'pointerover':
                        case 'pointerup':
                            V = Gf;
                            break;
                        case 'toggle':
                        case 'beforetoggle':
                            V = Py;
                    }
                    var ve = (t & 4) !== 0,
                        qe = !ve && (e === 'scroll' || e === 'scrollend'),
                        O = ve ? (U !== null ? U + 'Capture' : null) : U;
                    ve = [];
                    for (var j = _, D; j !== null; ) {
                        var Z = j;
                        if (
                            ((D = Z.stateNode),
                            (Z = Z.tag),
                            (Z !== 5 && Z !== 26 && Z !== 27) || D === null || O === null || ((Z = Pl(j, O)), Z != null && ve.push(ki(j, Z, D))),
                            qe)
                        )
                            break;
                        j = j.return;
                    }
                    0 < ve.length && ((U = new V(U, se, null, n, X)), I.push({ event: U, listeners: ve }));
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (
                        ((U = e === 'mouseover' || e === 'pointerover'),
                        (V = e === 'mouseout' || e === 'pointerout'),
                        U && n !== hr && (se = n.relatedTarget || n.fromElement) && (Ja(se) || se[Ia]))
                    )
                        break e;
                    if (
                        (V || U) &&
                        ((U = X.window === X ? X : (U = X.ownerDocument) ? U.defaultView || U.parentWindow : window),
                        V
                            ? ((se = n.relatedTarget || n.toElement),
                              (V = _),
                              (se = se ? Ja(se) : null),
                              se !== null && ((qe = m(se)), (ve = se.tag), se !== qe || (ve !== 5 && ve !== 27 && ve !== 6)) && (se = null))
                            : ((V = null), (se = _)),
                        V !== se)
                    ) {
                        if (
                            ((ve = Hf),
                            (Z = 'onMouseLeave'),
                            (O = 'onMouseEnter'),
                            (j = 'mouse'),
                            (e === 'pointerout' || e === 'pointerover') &&
                                ((ve = Gf), (Z = 'onPointerLeave'), (O = 'onPointerEnter'), (j = 'pointer')),
                            (qe = V == null ? U : $l(V)),
                            (D = se == null ? U : $l(se)),
                            (U = new ve(Z, j + 'leave', V, n, X)),
                            (U.target = qe),
                            (U.relatedTarget = D),
                            (Z = null),
                            Ja(X) === _ && ((ve = new ve(O, j + 'enter', se, n, X)), (ve.target = D), (ve.relatedTarget = qe), (Z = ve)),
                            (qe = Z),
                            V && se)
                        )
                            t: {
                                for (ve = $0, O = V, j = se, D = 0, Z = O; Z; Z = ve(Z)) D++;
                                Z = 0;
                                for (var ge = j; ge; ge = ve(ge)) Z++;
                                for (; 0 < D - Z; ) ((O = ve(O)), D--);
                                for (; 0 < Z - D; ) ((j = ve(j)), Z--);
                                for (; D--; ) {
                                    if (O === j || (j !== null && O === j.alternate)) {
                                        ve = O;
                                        break t;
                                    }
                                    ((O = ve(O)), (j = ve(j)));
                                }
                                ve = null;
                            }
                        else ve = null;
                        (V !== null && kh(I, U, V, ve, !1), se !== null && qe !== null && kh(I, qe, se, ve, !0));
                    }
                }
                e: {
                    if (
                        ((U = _ ? $l(_) : window),
                        (V = U.nodeName && U.nodeName.toLowerCase()),
                        V === 'select' || (V === 'input' && U.type === 'file'))
                    )
                        var ze = Jf;
                    else if (Zf(U))
                        if (Wf) ze = c0;
                        else {
                            ze = s0;
                            var me = o0;
                        }
                    else
                        ((V = U.nodeName),
                            !V || V.toLowerCase() !== 'input' || (U.type !== 'checkbox' && U.type !== 'radio')
                                ? _ && mr(_.elementType) && (ze = Jf)
                                : (ze = r0));
                    if (ze && (ze = ze(e, _))) {
                        If(I, ze, n, X);
                        break e;
                    }
                    (me && me(e, U, _), e === 'focusout' && _ && U.type === 'number' && _.memoizedProps.value != null && dr(U, 'number', U.value));
                }
                switch (((me = _ ? $l(_) : window), e)) {
                    case 'focusin':
                        (Zf(me) || me.contentEditable === 'true') && ((ll = me), (Nr = _), (si = null));
                        break;
                    case 'focusout':
                        si = Nr = ll = null;
                        break;
                    case 'mousedown':
                        jr = !0;
                        break;
                    case 'contextmenu':
                    case 'mouseup':
                    case 'dragend':
                        ((jr = !1), ld(I, n, X));
                        break;
                    case 'selectionchange':
                        if (f0) break;
                    case 'keydown':
                    case 'keyup':
                        ld(I, n, X);
                }
                var Ee;
                if (Cr)
                    e: {
                        switch (e) {
                            case 'compositionstart':
                                var Oe = 'onCompositionStart';
                                break e;
                            case 'compositionend':
                                Oe = 'onCompositionEnd';
                                break e;
                            case 'compositionupdate':
                                Oe = 'onCompositionUpdate';
                                break e;
                        }
                        Oe = void 0;
                    }
                else al ? Kf(e, n) && (Oe = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (Oe = 'onCompositionStart');
                (Oe &&
                    (qf &&
                        n.locale !== 'ko' &&
                        (al || Oe !== 'onCompositionStart'
                            ? Oe === 'onCompositionEnd' && al && (Ee = Uf())
                            : ((Zn = X), (yr = 'value' in Zn ? Zn.value : Zn.textContent), (al = !0))),
                    (me = cs(_, Oe)),
                    0 < me.length &&
                        ((Oe = new Vf(Oe, e, null, n, X)),
                        I.push({ event: Oe, listeners: me }),
                        Ee ? (Oe.data = Ee) : ((Ee = Qf(n)), Ee !== null && (Oe.data = Ee)))),
                    (Ee = t0 ? n0(e, n) : a0(e, n)) &&
                        ((Oe = cs(_, 'onBeforeInput')),
                        0 < Oe.length &&
                            ((me = new Vf('onBeforeInput', 'beforeinput', null, n, X)), I.push({ event: me, listeners: Oe }), (me.data = Ee))),
                    I0(I, e, _, n, X));
            }
            Rh(I, t);
        });
    }
    function ki(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
    }
    function cs(e, t) {
        for (var n = t + 'Capture', a = []; e !== null; ) {
            var i = e,
                s = i.stateNode;
            if (
                ((i = i.tag),
                (i !== 5 && i !== 26 && i !== 27) ||
                    s === null ||
                    ((i = Pl(e, n)), i != null && a.unshift(ki(e, i, s)), (i = Pl(e, t)), i != null && a.push(ki(e, i, s))),
                e.tag === 3)
            )
                return a;
            e = e.return;
        }
        return [];
    }
    function $0(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null;
    }
    function kh(e, t, n, a, i) {
        for (var s = t._reactName, d = []; n !== null && n !== a; ) {
            var b = n,
                C = b.alternate,
                _ = b.stateNode;
            if (((b = b.tag), C !== null && C === a)) break;
            ((b !== 5 && b !== 26 && b !== 27) ||
                _ === null ||
                ((C = _), i ? ((_ = Pl(n, s)), _ != null && d.unshift(ki(n, _, C))) : i || ((_ = Pl(n, s)), _ != null && d.push(ki(n, _, C)))),
                (n = n.return));
        }
        d.length !== 0 && e.push({ event: t, listeners: d });
    }
    var P0 = /\r\n?/g,
        eb = /\u0000|\uFFFD/g;
    function zh(e) {
        return (typeof e == 'string' ? e : '' + e)
            .replace(
                P0,
                `
`
            )
            .replace(eb, '');
    }
    function Dh(e, t) {
        return ((t = zh(t)), zh(e) === t);
    }
    function Ge(e, t, n, a, i, s) {
        switch (n) {
            case 'children':
                typeof a == 'string'
                    ? t === 'body' || (t === 'textarea' && a === '') || el(e, a)
                    : (typeof a == 'number' || typeof a == 'bigint') && t !== 'body' && el(e, '' + a);
                break;
            case 'className':
                mo(e, 'class', a);
                break;
            case 'tabIndex':
                mo(e, 'tabindex', a);
                break;
            case 'dir':
            case 'role':
            case 'viewBox':
            case 'width':
            case 'height':
                mo(e, n, a);
                break;
            case 'style':
                Df(e, a, s);
                break;
            case 'data':
                if (t !== 'object') {
                    mo(e, 'data', a);
                    break;
                }
            case 'src':
            case 'href':
                if (a === '' && (t !== 'a' || n !== 'href')) {
                    e.removeAttribute(n);
                    break;
                }
                if (a == null || typeof a == 'function' || typeof a == 'symbol' || typeof a == 'boolean') {
                    e.removeAttribute(n);
                    break;
                }
                ((a = po('' + a)), e.setAttribute(n, a));
                break;
            case 'action':
            case 'formAction':
                if (typeof a == 'function') {
                    e.setAttribute(
                        n,
                        "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                    );
                    break;
                } else
                    typeof s == 'function' &&
                        (n === 'formAction'
                            ? (t !== 'input' && Ge(e, t, 'name', i.name, i, null),
                              Ge(e, t, 'formEncType', i.formEncType, i, null),
                              Ge(e, t, 'formMethod', i.formMethod, i, null),
                              Ge(e, t, 'formTarget', i.formTarget, i, null))
                            : (Ge(e, t, 'encType', i.encType, i, null),
                              Ge(e, t, 'method', i.method, i, null),
                              Ge(e, t, 'target', i.target, i, null)));
                if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
                    e.removeAttribute(n);
                    break;
                }
                ((a = po('' + a)), e.setAttribute(n, a));
                break;
            case 'onClick':
                a != null && (e.onclick = En);
                break;
            case 'onScroll':
                a != null && je('scroll', e);
                break;
            case 'onScrollEnd':
                a != null && je('scrollend', e);
                break;
            case 'dangerouslySetInnerHTML':
                if (a != null) {
                    if (typeof a != 'object' || !('__html' in a)) throw Error(c(61));
                    if (((n = a.__html), n != null)) {
                        if (i.children != null) throw Error(c(60));
                        e.innerHTML = n;
                    }
                }
                break;
            case 'multiple':
                e.multiple = a && typeof a != 'function' && typeof a != 'symbol';
                break;
            case 'muted':
                e.muted = a && typeof a != 'function' && typeof a != 'symbol';
                break;
            case 'suppressContentEditableWarning':
            case 'suppressHydrationWarning':
            case 'defaultValue':
            case 'defaultChecked':
            case 'innerHTML':
            case 'ref':
                break;
            case 'autoFocus':
                break;
            case 'xlinkHref':
                if (a == null || typeof a == 'function' || typeof a == 'boolean' || typeof a == 'symbol') {
                    e.removeAttribute('xlink:href');
                    break;
                }
                ((n = po('' + a)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
                break;
            case 'contentEditable':
            case 'spellCheck':
            case 'draggable':
            case 'value':
            case 'autoReverse':
            case 'externalResourcesRequired':
            case 'focusable':
            case 'preserveAlpha':
                a != null && typeof a != 'function' && typeof a != 'symbol' ? e.setAttribute(n, '' + a) : e.removeAttribute(n);
                break;
            case 'inert':
            case 'allowFullScreen':
            case 'async':
            case 'autoPlay':
            case 'controls':
            case 'default':
            case 'defer':
            case 'disabled':
            case 'disablePictureInPicture':
            case 'disableRemotePlayback':
            case 'formNoValidate':
            case 'hidden':
            case 'loop':
            case 'noModule':
            case 'noValidate':
            case 'open':
            case 'playsInline':
            case 'readOnly':
            case 'required':
            case 'reversed':
            case 'scoped':
            case 'seamless':
            case 'itemScope':
                a && typeof a != 'function' && typeof a != 'symbol' ? e.setAttribute(n, '') : e.removeAttribute(n);
                break;
            case 'capture':
            case 'download':
                a === !0
                    ? e.setAttribute(n, '')
                    : a !== !1 && a != null && typeof a != 'function' && typeof a != 'symbol'
                      ? e.setAttribute(n, a)
                      : e.removeAttribute(n);
                break;
            case 'cols':
            case 'rows':
            case 'size':
            case 'span':
                a != null && typeof a != 'function' && typeof a != 'symbol' && !isNaN(a) && 1 <= a ? e.setAttribute(n, a) : e.removeAttribute(n);
                break;
            case 'rowSpan':
            case 'start':
                a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a) ? e.removeAttribute(n) : e.setAttribute(n, a);
                break;
            case 'popover':
                (je('beforetoggle', e), je('toggle', e), fo(e, 'popover', a));
                break;
            case 'xlinkActuate':
                Cn(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
                break;
            case 'xlinkArcrole':
                Cn(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
                break;
            case 'xlinkRole':
                Cn(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
                break;
            case 'xlinkShow':
                Cn(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
                break;
            case 'xlinkTitle':
                Cn(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
                break;
            case 'xlinkType':
                Cn(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
                break;
            case 'xmlBase':
                Cn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
                break;
            case 'xmlLang':
                Cn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
                break;
            case 'xmlSpace':
                Cn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
                break;
            case 'is':
                fo(e, 'is', a);
                break;
            case 'innerText':
            case 'textContent':
                break;
            default:
                (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) && ((n = jy.get(n) || n), fo(e, n, a));
        }
    }
    function Pc(e, t, n, a, i, s) {
        switch (n) {
            case 'style':
                Df(e, a, s);
                break;
            case 'dangerouslySetInnerHTML':
                if (a != null) {
                    if (typeof a != 'object' || !('__html' in a)) throw Error(c(61));
                    if (((n = a.__html), n != null)) {
                        if (i.children != null) throw Error(c(60));
                        e.innerHTML = n;
                    }
                }
                break;
            case 'children':
                typeof a == 'string' ? el(e, a) : (typeof a == 'number' || typeof a == 'bigint') && el(e, '' + a);
                break;
            case 'onScroll':
                a != null && je('scroll', e);
                break;
            case 'onScrollEnd':
                a != null && je('scrollend', e);
                break;
            case 'onClick':
                a != null && (e.onclick = En);
                break;
            case 'suppressContentEditableWarning':
            case 'suppressHydrationWarning':
            case 'innerHTML':
            case 'ref':
                break;
            case 'innerText':
            case 'textContent':
                break;
            default:
                if (!Tf.hasOwnProperty(n))
                    e: {
                        if (
                            n[0] === 'o' &&
                            n[1] === 'n' &&
                            ((i = n.endsWith('Capture')),
                            (t = n.slice(2, i ? n.length - 7 : void 0)),
                            (s = e[Tt] || null),
                            (s = s != null ? s[n] : null),
                            typeof s == 'function' && e.removeEventListener(t, s, i),
                            typeof a == 'function')
                        ) {
                            (typeof s != 'function' && s !== null && (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                                e.addEventListener(t, a, i));
                            break e;
                        }
                        n in e ? (e[n] = a) : a === !0 ? e.setAttribute(n, '') : fo(e, n, a);
                    }
        }
    }
    function gt(e, t, n) {
        switch (t) {
            case 'div':
            case 'span':
            case 'svg':
            case 'path':
            case 'a':
            case 'g':
            case 'p':
            case 'li':
                break;
            case 'img':
                (je('error', e), je('load', e));
                var a = !1,
                    i = !1,
                    s;
                for (s in n)
                    if (n.hasOwnProperty(s)) {
                        var d = n[s];
                        if (d != null)
                            switch (s) {
                                case 'src':
                                    a = !0;
                                    break;
                                case 'srcSet':
                                    i = !0;
                                    break;
                                case 'children':
                                case 'dangerouslySetInnerHTML':
                                    throw Error(c(137, t));
                                default:
                                    Ge(e, t, s, d, n, null);
                            }
                    }
                (i && Ge(e, t, 'srcSet', n.srcSet, n, null), a && Ge(e, t, 'src', n.src, n, null));
                return;
            case 'input':
                je('invalid', e);
                var b = (s = d = i = null),
                    C = null,
                    _ = null;
                for (a in n)
                    if (n.hasOwnProperty(a)) {
                        var X = n[a];
                        if (X != null)
                            switch (a) {
                                case 'name':
                                    i = X;
                                    break;
                                case 'type':
                                    d = X;
                                    break;
                                case 'checked':
                                    C = X;
                                    break;
                                case 'defaultChecked':
                                    _ = X;
                                    break;
                                case 'value':
                                    s = X;
                                    break;
                                case 'defaultValue':
                                    b = X;
                                    break;
                                case 'children':
                                case 'dangerouslySetInnerHTML':
                                    if (X != null) throw Error(c(137, t));
                                    break;
                                default:
                                    Ge(e, t, a, X, n, null);
                            }
                    }
                Rf(e, s, b, C, _, d, i, !1);
                return;
            case 'select':
                (je('invalid', e), (a = d = s = null));
                for (i in n)
                    if (n.hasOwnProperty(i) && ((b = n[i]), b != null))
                        switch (i) {
                            case 'value':
                                s = b;
                                break;
                            case 'defaultValue':
                                d = b;
                                break;
                            case 'multiple':
                                a = b;
                            default:
                                Ge(e, t, i, b, n, null);
                        }
                ((t = s), (n = d), (e.multiple = !!a), t != null ? Pa(e, !!a, t, !1) : n != null && Pa(e, !!a, n, !0));
                return;
            case 'textarea':
                (je('invalid', e), (s = i = a = null));
                for (d in n)
                    if (n.hasOwnProperty(d) && ((b = n[d]), b != null))
                        switch (d) {
                            case 'value':
                                a = b;
                                break;
                            case 'defaultValue':
                                i = b;
                                break;
                            case 'children':
                                s = b;
                                break;
                            case 'dangerouslySetInnerHTML':
                                if (b != null) throw Error(c(91));
                                break;
                            default:
                                Ge(e, t, d, b, n, null);
                        }
                kf(e, a, i, s);
                return;
            case 'option':
                for (C in n)
                    if (n.hasOwnProperty(C) && ((a = n[C]), a != null))
                        switch (C) {
                            case 'selected':
                                e.selected = a && typeof a != 'function' && typeof a != 'symbol';
                                break;
                            default:
                                Ge(e, t, C, a, n, null);
                        }
                return;
            case 'dialog':
                (je('beforetoggle', e), je('toggle', e), je('cancel', e), je('close', e));
                break;
            case 'iframe':
            case 'object':
                je('load', e);
                break;
            case 'video':
            case 'audio':
                for (a = 0; a < Oi.length; a++) je(Oi[a], e);
                break;
            case 'image':
                (je('error', e), je('load', e));
                break;
            case 'details':
                je('toggle', e);
                break;
            case 'embed':
            case 'source':
            case 'link':
                (je('error', e), je('load', e));
            case 'area':
            case 'base':
            case 'br':
            case 'col':
            case 'hr':
            case 'keygen':
            case 'meta':
            case 'param':
            case 'track':
            case 'wbr':
            case 'menuitem':
                for (_ in n)
                    if (n.hasOwnProperty(_) && ((a = n[_]), a != null))
                        switch (_) {
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                throw Error(c(137, t));
                            default:
                                Ge(e, t, _, a, n, null);
                        }
                return;
            default:
                if (mr(t)) {
                    for (X in n) n.hasOwnProperty(X) && ((a = n[X]), a !== void 0 && Pc(e, t, X, a, n, void 0));
                    return;
                }
        }
        for (b in n) n.hasOwnProperty(b) && ((a = n[b]), a != null && Ge(e, t, b, a, n, null));
    }
    function tb(e, t, n, a) {
        switch (t) {
            case 'div':
            case 'span':
            case 'svg':
            case 'path':
            case 'a':
            case 'g':
            case 'p':
            case 'li':
                break;
            case 'input':
                var i = null,
                    s = null,
                    d = null,
                    b = null,
                    C = null,
                    _ = null,
                    X = null;
                for (V in n) {
                    var I = n[V];
                    if (n.hasOwnProperty(V) && I != null)
                        switch (V) {
                            case 'checked':
                                break;
                            case 'value':
                                break;
                            case 'defaultValue':
                                C = I;
                            default:
                                a.hasOwnProperty(V) || Ge(e, t, V, null, a, I);
                        }
                }
                for (var U in a) {
                    var V = a[U];
                    if (((I = n[U]), a.hasOwnProperty(U) && (V != null || I != null)))
                        switch (U) {
                            case 'type':
                                s = V;
                                break;
                            case 'name':
                                i = V;
                                break;
                            case 'checked':
                                _ = V;
                                break;
                            case 'defaultChecked':
                                X = V;
                                break;
                            case 'value':
                                d = V;
                                break;
                            case 'defaultValue':
                                b = V;
                                break;
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                if (V != null) throw Error(c(137, t));
                                break;
                            default:
                                V !== I && Ge(e, t, U, V, a, I);
                        }
                }
                fr(e, d, b, C, _, X, s, i);
                return;
            case 'select':
                V = d = b = U = null;
                for (s in n)
                    if (((C = n[s]), n.hasOwnProperty(s) && C != null))
                        switch (s) {
                            case 'value':
                                break;
                            case 'multiple':
                                V = C;
                            default:
                                a.hasOwnProperty(s) || Ge(e, t, s, null, a, C);
                        }
                for (i in a)
                    if (((s = a[i]), (C = n[i]), a.hasOwnProperty(i) && (s != null || C != null)))
                        switch (i) {
                            case 'value':
                                U = s;
                                break;
                            case 'defaultValue':
                                b = s;
                                break;
                            case 'multiple':
                                d = s;
                            default:
                                s !== C && Ge(e, t, i, s, a, C);
                        }
                ((t = b),
                    (n = d),
                    (a = V),
                    U != null ? Pa(e, !!n, U, !1) : !!a != !!n && (t != null ? Pa(e, !!n, t, !0) : Pa(e, !!n, n ? [] : '', !1)));
                return;
            case 'textarea':
                V = U = null;
                for (b in n)
                    if (((i = n[b]), n.hasOwnProperty(b) && i != null && !a.hasOwnProperty(b)))
                        switch (b) {
                            case 'value':
                                break;
                            case 'children':
                                break;
                            default:
                                Ge(e, t, b, null, a, i);
                        }
                for (d in a)
                    if (((i = a[d]), (s = n[d]), a.hasOwnProperty(d) && (i != null || s != null)))
                        switch (d) {
                            case 'value':
                                U = i;
                                break;
                            case 'defaultValue':
                                V = i;
                                break;
                            case 'children':
                                break;
                            case 'dangerouslySetInnerHTML':
                                if (i != null) throw Error(c(91));
                                break;
                            default:
                                i !== s && Ge(e, t, d, i, a, s);
                        }
                Of(e, U, V);
                return;
            case 'option':
                for (var se in n)
                    if (((U = n[se]), n.hasOwnProperty(se) && U != null && !a.hasOwnProperty(se)))
                        switch (se) {
                            case 'selected':
                                e.selected = !1;
                                break;
                            default:
                                Ge(e, t, se, null, a, U);
                        }
                for (C in a)
                    if (((U = a[C]), (V = n[C]), a.hasOwnProperty(C) && U !== V && (U != null || V != null)))
                        switch (C) {
                            case 'selected':
                                e.selected = U && typeof U != 'function' && typeof U != 'symbol';
                                break;
                            default:
                                Ge(e, t, C, U, a, V);
                        }
                return;
            case 'img':
            case 'link':
            case 'area':
            case 'base':
            case 'br':
            case 'col':
            case 'embed':
            case 'hr':
            case 'keygen':
            case 'meta':
            case 'param':
            case 'source':
            case 'track':
            case 'wbr':
            case 'menuitem':
                for (var ve in n) ((U = n[ve]), n.hasOwnProperty(ve) && U != null && !a.hasOwnProperty(ve) && Ge(e, t, ve, null, a, U));
                for (_ in a)
                    if (((U = a[_]), (V = n[_]), a.hasOwnProperty(_) && U !== V && (U != null || V != null)))
                        switch (_) {
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                if (U != null) throw Error(c(137, t));
                                break;
                            default:
                                Ge(e, t, _, U, a, V);
                        }
                return;
            default:
                if (mr(t)) {
                    for (var qe in n) ((U = n[qe]), n.hasOwnProperty(qe) && U !== void 0 && !a.hasOwnProperty(qe) && Pc(e, t, qe, void 0, a, U));
                    for (X in a) ((U = a[X]), (V = n[X]), !a.hasOwnProperty(X) || U === V || (U === void 0 && V === void 0) || Pc(e, t, X, U, a, V));
                    return;
                }
        }
        for (var O in n) ((U = n[O]), n.hasOwnProperty(O) && U != null && !a.hasOwnProperty(O) && Ge(e, t, O, null, a, U));
        for (I in a) ((U = a[I]), (V = n[I]), !a.hasOwnProperty(I) || U === V || (U == null && V == null) || Ge(e, t, I, U, a, V));
    }
    function _h(e) {
        switch (e) {
            case 'css':
            case 'script':
            case 'font':
            case 'img':
            case 'image':
            case 'input':
            case 'link':
                return !0;
            default:
                return !1;
        }
    }
    function nb() {
        if (typeof performance.getEntriesByType == 'function') {
            for (var e = 0, t = 0, n = performance.getEntriesByType('resource'), a = 0; a < n.length; a++) {
                var i = n[a],
                    s = i.transferSize,
                    d = i.initiatorType,
                    b = i.duration;
                if (s && b && _h(d)) {
                    for (d = 0, b = i.responseEnd, a += 1; a < n.length; a++) {
                        var C = n[a],
                            _ = C.startTime;
                        if (_ > b) break;
                        var X = C.transferSize,
                            I = C.initiatorType;
                        X && _h(I) && ((C = C.responseEnd), (d += X * (C < b ? 1 : (b - _) / (C - _))));
                    }
                    if ((--a, (t += (8 * (s + d)) / (i.duration / 1e3)), e++, 10 < e)) break;
                }
            }
            if (0 < e) return t / e / 1e6;
        }
        return navigator.connection && ((e = navigator.connection.downlink), typeof e == 'number') ? e : 5;
    }
    var eu = null,
        tu = null;
    function us(e) {
        return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Lh(e) {
        switch (e) {
            case 'http://www.w3.org/2000/svg':
                return 1;
            case 'http://www.w3.org/1998/Math/MathML':
                return 2;
            default:
                return 0;
        }
    }
    function Uh(e, t) {
        if (e === 0)
            switch (t) {
                case 'svg':
                    return 1;
                case 'math':
                    return 2;
                default:
                    return 0;
            }
        return e === 1 && t === 'foreignObject' ? 0 : e;
    }
    function nu(e, t) {
        return (
            e === 'textarea' ||
            e === 'noscript' ||
            typeof t.children == 'string' ||
            typeof t.children == 'number' ||
            typeof t.children == 'bigint' ||
            (typeof t.dangerouslySetInnerHTML == 'object' && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
        );
    }
    var au = null;
    function ab() {
        var e = window.event;
        return e && e.type === 'popstate' ? (e === au ? !1 : ((au = e), !0)) : ((au = null), !1);
    }
    var Bh = typeof setTimeout == 'function' ? setTimeout : void 0,
        lb = typeof clearTimeout == 'function' ? clearTimeout : void 0,
        Hh = typeof Promise == 'function' ? Promise : void 0,
        ib =
            typeof queueMicrotask == 'function'
                ? queueMicrotask
                : typeof Hh < 'u'
                  ? function (e) {
                        return Hh.resolve(null).then(e).catch(ob);
                    }
                  : Bh;
    function ob(e) {
        setTimeout(function () {
            throw e;
        });
    }
    function ua(e) {
        return e === 'head';
    }
    function Vh(e, t) {
        var n = t,
            a = 0;
        do {
            var i = n.nextSibling;
            if ((e.removeChild(n), i && i.nodeType === 8))
                if (((n = i.data), n === '/$' || n === '/&')) {
                    if (a === 0) {
                        (e.removeChild(i), Ol(t));
                        return;
                    }
                    a--;
                } else if (n === '$' || n === '$?' || n === '$~' || n === '$!' || n === '&') a++;
                else if (n === 'html') zi(e.ownerDocument.documentElement);
                else if (n === 'head') {
                    ((n = e.ownerDocument.head), zi(n));
                    for (var s = n.firstChild; s; ) {
                        var d = s.nextSibling,
                            b = s.nodeName;
                        (s[Fl] || b === 'SCRIPT' || b === 'STYLE' || (b === 'LINK' && s.rel.toLowerCase() === 'stylesheet') || n.removeChild(s),
                            (s = d));
                    }
                } else n === 'body' && zi(e.ownerDocument.body);
            n = i;
        } while (n);
        Ol(t);
    }
    function Gh(e, t) {
        var n = e;
        e = 0;
        do {
            var a = n.nextSibling;
            if (
                (n.nodeType === 1
                    ? t
                        ? ((n._stashedDisplay = n.style.display), (n.style.display = 'none'))
                        : ((n.style.display = n._stashedDisplay || ''), n.getAttribute('style') === '' && n.removeAttribute('style'))
                    : n.nodeType === 3 && (t ? ((n._stashedText = n.nodeValue), (n.nodeValue = '')) : (n.nodeValue = n._stashedText || '')),
                a && a.nodeType === 8)
            )
                if (((n = a.data), n === '/$')) {
                    if (e === 0) break;
                    e--;
                } else (n !== '$' && n !== '$?' && n !== '$~' && n !== '$!') || e++;
            n = a;
        } while (n);
    }
    function lu(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
                case 'HTML':
                case 'HEAD':
                case 'BODY':
                    (lu(n), cr(n));
                    continue;
                case 'SCRIPT':
                case 'STYLE':
                    continue;
                case 'LINK':
                    if (n.rel.toLowerCase() === 'stylesheet') continue;
            }
            e.removeChild(n);
        }
    }
    function sb(e, t, n, a) {
        for (; e.nodeType === 1; ) {
            var i = n;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
            } else if (a) {
                if (!e[Fl])
                    switch (t) {
                        case 'meta':
                            if (!e.hasAttribute('itemprop')) break;
                            return e;
                        case 'link':
                            if (((s = e.getAttribute('rel')), s === 'stylesheet' && e.hasAttribute('data-precedence'))) break;
                            if (
                                s !== i.rel ||
                                e.getAttribute('href') !== (i.href == null || i.href === '' ? null : i.href) ||
                                e.getAttribute('crossorigin') !== (i.crossOrigin == null ? null : i.crossOrigin) ||
                                e.getAttribute('title') !== (i.title == null ? null : i.title)
                            )
                                break;
                            return e;
                        case 'style':
                            if (e.hasAttribute('data-precedence')) break;
                            return e;
                        case 'script':
                            if (
                                ((s = e.getAttribute('src')),
                                (s !== (i.src == null ? null : i.src) ||
                                    e.getAttribute('type') !== (i.type == null ? null : i.type) ||
                                    e.getAttribute('crossorigin') !== (i.crossOrigin == null ? null : i.crossOrigin)) &&
                                    s &&
                                    e.hasAttribute('async') &&
                                    !e.hasAttribute('itemprop'))
                            )
                                break;
                            return e;
                        default:
                            return e;
                    }
            } else if (t === 'input' && e.type === 'hidden') {
                var s = i.name == null ? null : '' + i.name;
                if (i.type === 'hidden' && e.getAttribute('name') === s) return e;
            } else return e;
            if (((e = Ft(e.nextSibling)), e === null)) break;
        }
        return null;
    }
    function rb(e, t, n) {
        if (t === '') return null;
        for (; e.nodeType !== 3; )
            if (((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !n) || ((e = Ft(e.nextSibling)), e === null)) return null;
        return e;
    }
    function qh(e, t) {
        for (; e.nodeType !== 8; )
            if (((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) || ((e = Ft(e.nextSibling)), e === null)) return null;
        return e;
    }
    function iu(e) {
        return e.data === '$?' || e.data === '$~';
    }
    function ou(e) {
        return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState !== 'loading');
    }
    function cb(e, t) {
        var n = e.ownerDocument;
        if (e.data === '$~') e._reactRetry = t;
        else if (e.data !== '$?' || n.readyState !== 'loading') t();
        else {
            var a = function () {
                (t(), n.removeEventListener('DOMContentLoaded', a));
            };
            (n.addEventListener('DOMContentLoaded', a), (e._reactRetry = a));
        }
    }
    function Ft(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (((t = e.data), t === '$' || t === '$!' || t === '$?' || t === '$~' || t === '&' || t === 'F!' || t === 'F')) break;
                if (t === '/$' || t === '/&') return null;
            }
        }
        return e;
    }
    var su = null;
    function Yh(e) {
        e = e.nextSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === '/$' || n === '/&') {
                    if (t === 0) return Ft(e.nextSibling);
                    t--;
                } else (n !== '$' && n !== '$!' && n !== '$?' && n !== '$~' && n !== '&') || t++;
            }
            e = e.nextSibling;
        }
        return null;
    }
    function Xh(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === '$' || n === '$!' || n === '$?' || n === '$~' || n === '&') {
                    if (t === 0) return e;
                    t--;
                } else (n !== '/$' && n !== '/&') || t++;
            }
            e = e.previousSibling;
        }
        return null;
    }
    function Kh(e, t, n) {
        switch (((t = us(n)), e)) {
            case 'html':
                if (((e = t.documentElement), !e)) throw Error(c(452));
                return e;
            case 'head':
                if (((e = t.head), !e)) throw Error(c(453));
                return e;
            case 'body':
                if (((e = t.body), !e)) throw Error(c(454));
                return e;
            default:
                throw Error(c(451));
        }
    }
    function zi(e) {
        for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
        cr(e);
    }
    var $t = new Map(),
        Qh = new Set();
    function fs(e) {
        return typeof e.getRootNode == 'function' ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    var Vn = Y.d;
    Y.d = { f: ub, r: fb, D: db, C: mb, L: hb, m: pb, X: vb, S: gb, M: yb };
    function ub() {
        var e = Vn.f(),
            t = ns();
        return e || t;
    }
    function fb(e) {
        var t = Wa(e);
        t !== null && t.tag === 5 && t.type === 'form' ? cm(t) : Vn.r(e);
    }
    var jl = typeof document > 'u' ? null : document;
    function Zh(e, t, n) {
        var a = jl;
        if (a && typeof t == 'string' && t) {
            var i = Xt(t);
            ((i = 'link[rel="' + e + '"][href="' + i + '"]'),
                typeof n == 'string' && (i += '[crossorigin="' + n + '"]'),
                Qh.has(i) ||
                    (Qh.add(i),
                    (e = { rel: e, crossOrigin: n, href: t }),
                    a.querySelector(i) === null && ((t = a.createElement('link')), gt(t, 'link', e), ut(t), a.head.appendChild(t))));
        }
    }
    function db(e) {
        (Vn.D(e), Zh('dns-prefetch', e, null));
    }
    function mb(e, t) {
        (Vn.C(e, t), Zh('preconnect', e, t));
    }
    function hb(e, t, n) {
        Vn.L(e, t, n);
        var a = jl;
        if (a && e && t) {
            var i = 'link[rel="preload"][as="' + Xt(t) + '"]';
            t === 'image' && n && n.imageSrcSet
                ? ((i += '[imagesrcset="' + Xt(n.imageSrcSet) + '"]'),
                  typeof n.imageSizes == 'string' && (i += '[imagesizes="' + Xt(n.imageSizes) + '"]'))
                : (i += '[href="' + Xt(e) + '"]');
            var s = i;
            switch (t) {
                case 'style':
                    s = Ml(e);
                    break;
                case 'script':
                    s = Rl(e);
            }
            $t.has(s) ||
                ((e = x({ rel: 'preload', href: t === 'image' && n && n.imageSrcSet ? void 0 : e, as: t }, n)),
                $t.set(s, e),
                a.querySelector(i) !== null ||
                    (t === 'style' && a.querySelector(Di(s))) ||
                    (t === 'script' && a.querySelector(_i(s))) ||
                    ((t = a.createElement('link')), gt(t, 'link', e), ut(t), a.head.appendChild(t)));
        }
    }
    function pb(e, t) {
        Vn.m(e, t);
        var n = jl;
        if (n && e) {
            var a = t && typeof t.as == 'string' ? t.as : 'script',
                i = 'link[rel="modulepreload"][as="' + Xt(a) + '"][href="' + Xt(e) + '"]',
                s = i;
            switch (a) {
                case 'audioworklet':
                case 'paintworklet':
                case 'serviceworker':
                case 'sharedworker':
                case 'worker':
                case 'script':
                    s = Rl(e);
            }
            if (!$t.has(s) && ((e = x({ rel: 'modulepreload', href: e }, t)), $t.set(s, e), n.querySelector(i) === null)) {
                switch (a) {
                    case 'audioworklet':
                    case 'paintworklet':
                    case 'serviceworker':
                    case 'sharedworker':
                    case 'worker':
                    case 'script':
                        if (n.querySelector(_i(s))) return;
                }
                ((a = n.createElement('link')), gt(a, 'link', e), ut(a), n.head.appendChild(a));
            }
        }
    }
    function gb(e, t, n) {
        Vn.S(e, t, n);
        var a = jl;
        if (a && e) {
            var i = Fa(a).hoistableStyles,
                s = Ml(e);
            t = t || 'default';
            var d = i.get(s);
            if (!d) {
                var b = { loading: 0, preload: null };
                if ((d = a.querySelector(Di(s)))) b.loading = 5;
                else {
                    ((e = x({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)), (n = $t.get(s)) && ru(e, n));
                    var C = (d = a.createElement('link'));
                    (ut(C),
                        gt(C, 'link', e),
                        (C._p = new Promise(function (_, X) {
                            ((C.onload = _), (C.onerror = X));
                        })),
                        C.addEventListener('load', function () {
                            b.loading |= 1;
                        }),
                        C.addEventListener('error', function () {
                            b.loading |= 2;
                        }),
                        (b.loading |= 4),
                        ds(d, t, a));
                }
                ((d = { type: 'stylesheet', instance: d, count: 1, state: b }), i.set(s, d));
            }
        }
    }
    function vb(e, t) {
        Vn.X(e, t);
        var n = jl;
        if (n && e) {
            var a = Fa(n).hoistableScripts,
                i = Rl(e),
                s = a.get(i);
            s ||
                ((s = n.querySelector(_i(i))),
                s ||
                    ((e = x({ src: e, async: !0 }, t)),
                    (t = $t.get(i)) && cu(e, t),
                    (s = n.createElement('script')),
                    ut(s),
                    gt(s, 'link', e),
                    n.head.appendChild(s)),
                (s = { type: 'script', instance: s, count: 1, state: null }),
                a.set(i, s));
        }
    }
    function yb(e, t) {
        Vn.M(e, t);
        var n = jl;
        if (n && e) {
            var a = Fa(n).hoistableScripts,
                i = Rl(e),
                s = a.get(i);
            s ||
                ((s = n.querySelector(_i(i))),
                s ||
                    ((e = x({ src: e, async: !0, type: 'module' }, t)),
                    (t = $t.get(i)) && cu(e, t),
                    (s = n.createElement('script')),
                    ut(s),
                    gt(s, 'link', e),
                    n.head.appendChild(s)),
                (s = { type: 'script', instance: s, count: 1, state: null }),
                a.set(i, s));
        }
    }
    function Ih(e, t, n, a) {
        var i = (i = pe.current) ? fs(i) : null;
        if (!i) throw Error(c(446));
        switch (e) {
            case 'meta':
            case 'title':
                return null;
            case 'style':
                return typeof n.precedence == 'string' && typeof n.href == 'string'
                    ? ((t = Ml(n.href)),
                      (n = Fa(i).hoistableStyles),
                      (a = n.get(t)),
                      a || ((a = { type: 'style', instance: null, count: 0, state: null }), n.set(t, a)),
                      a)
                    : { type: 'void', instance: null, count: 0, state: null };
            case 'link':
                if (n.rel === 'stylesheet' && typeof n.href == 'string' && typeof n.precedence == 'string') {
                    e = Ml(n.href);
                    var s = Fa(i).hoistableStyles,
                        d = s.get(e);
                    if (
                        (d ||
                            ((i = i.ownerDocument || i),
                            (d = { type: 'stylesheet', instance: null, count: 0, state: { loading: 0, preload: null } }),
                            s.set(e, d),
                            (s = i.querySelector(Di(e))) && !s._p && ((d.instance = s), (d.state.loading = 5)),
                            $t.has(e) ||
                                ((n = {
                                    rel: 'preload',
                                    as: 'style',
                                    href: n.href,
                                    crossOrigin: n.crossOrigin,
                                    integrity: n.integrity,
                                    media: n.media,
                                    hrefLang: n.hrefLang,
                                    referrerPolicy: n.referrerPolicy,
                                }),
                                $t.set(e, n),
                                s || bb(i, e, n, d.state))),
                        t && a === null)
                    )
                        throw Error(c(528, ''));
                    return d;
                }
                if (t && a !== null) throw Error(c(529, ''));
                return null;
            case 'script':
                return (
                    (t = n.async),
                    (n = n.src),
                    typeof n == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
                        ? ((t = Rl(n)),
                          (n = Fa(i).hoistableScripts),
                          (a = n.get(t)),
                          a || ((a = { type: 'script', instance: null, count: 0, state: null }), n.set(t, a)),
                          a)
                        : { type: 'void', instance: null, count: 0, state: null }
                );
            default:
                throw Error(c(444, e));
        }
    }
    function Ml(e) {
        return 'href="' + Xt(e) + '"';
    }
    function Di(e) {
        return 'link[rel="stylesheet"][' + e + ']';
    }
    function Jh(e) {
        return x({}, e, { 'data-precedence': e.precedence, precedence: null });
    }
    function bb(e, t, n, a) {
        e.querySelector('link[rel="preload"][as="style"][' + t + ']')
            ? (a.loading = 1)
            : ((t = e.createElement('link')),
              (a.preload = t),
              t.addEventListener('load', function () {
                  return (a.loading |= 1);
              }),
              t.addEventListener('error', function () {
                  return (a.loading |= 2);
              }),
              gt(t, 'link', n),
              ut(t),
              e.head.appendChild(t));
    }
    function Rl(e) {
        return '[src="' + Xt(e) + '"]';
    }
    function _i(e) {
        return 'script[async]' + e;
    }
    function Wh(e, t, n) {
        if ((t.count++, t.instance === null))
            switch (t.type) {
                case 'style':
                    var a = e.querySelector('style[data-href~="' + Xt(n.href) + '"]');
                    if (a) return ((t.instance = a), ut(a), a);
                    var i = x({}, n, { 'data-href': n.href, 'data-precedence': n.precedence, href: null, precedence: null });
                    return ((a = (e.ownerDocument || e).createElement('style')), ut(a), gt(a, 'style', i), ds(a, n.precedence, e), (t.instance = a));
                case 'stylesheet':
                    i = Ml(n.href);
                    var s = e.querySelector(Di(i));
                    if (s) return ((t.state.loading |= 4), (t.instance = s), ut(s), s);
                    ((a = Jh(n)), (i = $t.get(i)) && ru(a, i), (s = (e.ownerDocument || e).createElement('link')), ut(s));
                    var d = s;
                    return (
                        (d._p = new Promise(function (b, C) {
                            ((d.onload = b), (d.onerror = C));
                        })),
                        gt(s, 'link', a),
                        (t.state.loading |= 4),
                        ds(s, n.precedence, e),
                        (t.instance = s)
                    );
                case 'script':
                    return (
                        (s = Rl(n.src)),
                        (i = e.querySelector(_i(s)))
                            ? ((t.instance = i), ut(i), i)
                            : ((a = n),
                              (i = $t.get(s)) && ((a = x({}, n)), cu(a, i)),
                              (e = e.ownerDocument || e),
                              (i = e.createElement('script')),
                              ut(i),
                              gt(i, 'link', a),
                              e.head.appendChild(i),
                              (t.instance = i))
                    );
                case 'void':
                    return null;
                default:
                    throw Error(c(443, t.type));
            }
        else t.type === 'stylesheet' && (t.state.loading & 4) === 0 && ((a = t.instance), (t.state.loading |= 4), ds(a, n.precedence, e));
        return t.instance;
    }
    function ds(e, t, n) {
        for (
            var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
                i = a.length ? a[a.length - 1] : null,
                s = i,
                d = 0;
            d < a.length;
            d++
        ) {
            var b = a[d];
            if (b.dataset.precedence === t) s = b;
            else if (s !== i) break;
        }
        s ? s.parentNode.insertBefore(e, s.nextSibling) : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
    }
    function ru(e, t) {
        (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
            e.title == null && (e.title = t.title));
    }
    function cu(e, t) {
        (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
            e.integrity == null && (e.integrity = t.integrity));
    }
    var ms = null;
    function Fh(e, t, n) {
        if (ms === null) {
            var a = new Map(),
                i = (ms = new Map());
            i.set(n, a);
        } else ((i = ms), (a = i.get(n)), a || ((a = new Map()), i.set(n, a)));
        if (a.has(e)) return a;
        for (a.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
            var s = n[i];
            if (!(s[Fl] || s[dt] || (e === 'link' && s.getAttribute('rel') === 'stylesheet')) && s.namespaceURI !== 'http://www.w3.org/2000/svg') {
                var d = s.getAttribute(t) || '';
                d = e + d;
                var b = a.get(d);
                b ? b.push(s) : a.set(d, [s]);
            }
        }
        return a;
    }
    function $h(e, t, n) {
        ((e = e.ownerDocument || e), e.head.insertBefore(n, t === 'title' ? e.querySelector('head > title') : null));
    }
    function Sb(e, t, n) {
        if (n === 1 || t.itemProp != null) return !1;
        switch (e) {
            case 'meta':
            case 'title':
                return !0;
            case 'style':
                if (typeof t.precedence != 'string' || typeof t.href != 'string' || t.href === '') break;
                return !0;
            case 'link':
                if (typeof t.rel != 'string' || typeof t.href != 'string' || t.href === '' || t.onLoad || t.onError) break;
                switch (t.rel) {
                    case 'stylesheet':
                        return ((e = t.disabled), typeof t.precedence == 'string' && e == null);
                    default:
                        return !0;
                }
            case 'script':
                if (
                    t.async &&
                    typeof t.async != 'function' &&
                    typeof t.async != 'symbol' &&
                    !t.onLoad &&
                    !t.onError &&
                    t.src &&
                    typeof t.src == 'string'
                )
                    return !0;
        }
        return !1;
    }
    function Ph(e) {
        return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
    }
    function xb(e, t, n, a) {
        if (n.type === 'stylesheet' && (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
            if (n.instance === null) {
                var i = Ml(a.href),
                    s = t.querySelector(Di(i));
                if (s) {
                    ((t = s._p),
                        t !== null && typeof t == 'object' && typeof t.then == 'function' && (e.count++, (e = hs.bind(e)), t.then(e, e)),
                        (n.state.loading |= 4),
                        (n.instance = s),
                        ut(s));
                    return;
                }
                ((s = t.ownerDocument || t), (a = Jh(a)), (i = $t.get(i)) && ru(a, i), (s = s.createElement('link')), ut(s));
                var d = s;
                ((d._p = new Promise(function (b, C) {
                    ((d.onload = b), (d.onerror = C));
                })),
                    gt(s, 'link', a),
                    (n.instance = s));
            }
            (e.stylesheets === null && (e.stylesheets = new Map()),
                e.stylesheets.set(n, t),
                (t = n.state.preload) &&
                    (n.state.loading & 3) === 0 &&
                    (e.count++, (n = hs.bind(e)), t.addEventListener('load', n), t.addEventListener('error', n)));
        }
    }
    var uu = 0;
    function wb(e, t) {
        return (
            e.stylesheets && e.count === 0 && gs(e, e.stylesheets),
            0 < e.count || 0 < e.imgCount
                ? function (n) {
                      var a = setTimeout(function () {
                          if ((e.stylesheets && gs(e, e.stylesheets), e.unsuspend)) {
                              var s = e.unsuspend;
                              ((e.unsuspend = null), s());
                          }
                      }, 6e4 + t);
                      0 < e.imgBytes && uu === 0 && (uu = 62500 * nb());
                      var i = setTimeout(
                          function () {
                              if (((e.waitingForImages = !1), e.count === 0 && (e.stylesheets && gs(e, e.stylesheets), e.unsuspend))) {
                                  var s = e.unsuspend;
                                  ((e.unsuspend = null), s());
                              }
                          },
                          (e.imgBytes > uu ? 50 : 800) + t
                      );
                      return (
                          (e.unsuspend = n),
                          function () {
                              ((e.unsuspend = null), clearTimeout(a), clearTimeout(i));
                          }
                      );
                  }
                : null
        );
    }
    function hs() {
        if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
            if (this.stylesheets) gs(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                ((this.unsuspend = null), e());
            }
        }
    }
    var ps = null;
    function gs(e, t) {
        ((e.stylesheets = null), e.unsuspend !== null && (e.count++, (ps = new Map()), t.forEach(Cb, e), (ps = null), hs.call(e)));
    }
    function Cb(e, t) {
        if (!(t.state.loading & 4)) {
            var n = ps.get(e);
            if (n) var a = n.get(null);
            else {
                ((n = new Map()), ps.set(e, n));
                for (var i = e.querySelectorAll('link[data-precedence],style[data-precedence]'), s = 0; s < i.length; s++) {
                    var d = i[s];
                    (d.nodeName === 'LINK' || d.getAttribute('media') !== 'not all') && (n.set(d.dataset.precedence, d), (a = d));
                }
                a && n.set(null, a);
            }
            ((i = t.instance),
                (d = i.getAttribute('data-precedence')),
                (s = n.get(d) || a),
                s === a && n.set(null, i),
                n.set(d, i),
                this.count++,
                (a = hs.bind(this)),
                i.addEventListener('load', a),
                i.addEventListener('error', a),
                s ? s.parentNode.insertBefore(i, s.nextSibling) : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(i, e.firstChild)),
                (t.state.loading |= 4));
        }
    }
    var Li = { $$typeof: H, Provider: null, Consumer: null, _currentValue: z, _currentValue2: z, _threadCount: 0 };
    function Eb(e, t, n, a, i, s, d, b, C) {
        ((this.tag = 1),
            (this.containerInfo = e),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
            (this.callbackPriority = 0),
            (this.expirationTimes = ir(-1)),
            (this.entangledLanes =
                this.shellSuspendCounter =
                this.errorRecoveryDisabledLanes =
                this.expiredLanes =
                this.warmLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = ir(0)),
            (this.hiddenUpdates = ir(null)),
            (this.identifierPrefix = a),
            (this.onUncaughtError = i),
            (this.onCaughtError = s),
            (this.onRecoverableError = d),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = C),
            (this.incompleteTransitions = new Map()));
    }
    function ep(e, t, n, a, i, s, d, b, C, _, X, I) {
        return (
            (e = new Eb(e, t, n, d, C, _, X, I, b)),
            (t = 1),
            s === !0 && (t |= 24),
            (s = _t(3, null, null, t)),
            (e.current = s),
            (s.stateNode = e),
            (t = Yr()),
            t.refCount++,
            (e.pooledCache = t),
            t.refCount++,
            (s.memoizedState = { element: a, isDehydrated: n, cache: t }),
            Zr(s),
            e
        );
    }
    function tp(e) {
        return e ? ((e = sl), e) : sl;
    }
    function np(e, t, n, a, i, s) {
        ((i = tp(i)),
            a.context === null ? (a.context = i) : (a.pendingContext = i),
            (a = Pn(t)),
            (a.payload = { element: n }),
            (s = s === void 0 ? null : s),
            s !== null && (a.callback = s),
            (n = ea(e, a, t)),
            n !== null && (Ot(n, e, t), hi(n, e, t)));
    }
    function ap(e, t) {
        if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function fu(e, t) {
        (ap(e, t), (e = e.alternate) && ap(e, t));
    }
    function lp(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Ra(e, 67108864);
            (t !== null && Ot(t, e, 67108864), fu(e, 67108864));
        }
    }
    function ip(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Vt();
            t = or(t);
            var n = Ra(e, t);
            (n !== null && Ot(n, e, t), fu(e, t));
        }
    }
    var vs = !0;
    function Tb(e, t, n, a) {
        var i = A.T;
        A.T = null;
        var s = Y.p;
        try {
            ((Y.p = 2), du(e, t, n, a));
        } finally {
            ((Y.p = s), (A.T = i));
        }
    }
    function Ab(e, t, n, a) {
        var i = A.T;
        A.T = null;
        var s = Y.p;
        try {
            ((Y.p = 8), du(e, t, n, a));
        } finally {
            ((Y.p = s), (A.T = i));
        }
    }
    function du(e, t, n, a) {
        if (vs) {
            var i = mu(a);
            if (i === null) ($c(e, t, a, ys, n), sp(e, a));
            else if (jb(i, e, t, n, a)) a.stopPropagation();
            else if ((sp(e, a), t & 4 && -1 < Nb.indexOf(e))) {
                for (; i !== null; ) {
                    var s = Wa(i);
                    if (s !== null)
                        switch (s.tag) {
                            case 3:
                                if (((s = s.stateNode), s.current.memoizedState.isDehydrated)) {
                                    var d = Ta(s.pendingLanes);
                                    if (d !== 0) {
                                        var b = s;
                                        for (b.pendingLanes |= 2, b.entangledLanes |= 2; d; ) {
                                            var C = 1 << (31 - xt(d));
                                            ((b.entanglements[1] |= C), (d &= ~C));
                                        }
                                        (gn(s), (Le & 6) === 0 && ((es = St() + 500), Ri(0)));
                                    }
                                }
                                break;
                            case 31:
                            case 13:
                                ((b = Ra(s, 2)), b !== null && Ot(b, s, 2), ns(), fu(s, 2));
                        }
                    if (((s = mu(a)), s === null && $c(e, t, a, ys, n), s === i)) break;
                    i = s;
                }
                i !== null && a.stopPropagation();
            } else $c(e, t, a, null, n);
        }
    }
    function mu(e) {
        return ((e = pr(e)), hu(e));
    }
    var ys = null;
    function hu(e) {
        if (((ys = null), (e = Ja(e)), e !== null)) {
            var t = m(e);
            if (t === null) e = null;
            else {
                var n = t.tag;
                if (n === 13) {
                    if (((e = p(t)), e !== null)) return e;
                    e = null;
                } else if (n === 31) {
                    if (((e = v(t)), e !== null)) return e;
                    e = null;
                } else if (n === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null;
                } else t !== e && (e = null);
            }
        }
        return ((ys = e), null);
    }
    function op(e) {
        switch (e) {
            case 'beforetoggle':
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'toggle':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
                return 2;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
                return 8;
            case 'message':
                switch (tr()) {
                    case lo:
                        return 2;
                    case io:
                        return 8;
                    case Ea:
                    case oo:
                        return 32;
                    case Zl:
                        return 268435456;
                    default:
                        return 32;
                }
            default:
                return 32;
        }
    }
    var pu = !1,
        fa = null,
        da = null,
        ma = null,
        Ui = new Map(),
        Bi = new Map(),
        ha = [],
        Nb =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
                ' '
            );
    function sp(e, t) {
        switch (e) {
            case 'focusin':
            case 'focusout':
                fa = null;
                break;
            case 'dragenter':
            case 'dragleave':
                da = null;
                break;
            case 'mouseover':
            case 'mouseout':
                ma = null;
                break;
            case 'pointerover':
            case 'pointerout':
                Ui.delete(t.pointerId);
                break;
            case 'gotpointercapture':
            case 'lostpointercapture':
                Bi.delete(t.pointerId);
        }
    }
    function Hi(e, t, n, a, i, s) {
        return e === null || e.nativeEvent !== s
            ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: a, nativeEvent: s, targetContainers: [i] }),
              t !== null && ((t = Wa(t)), t !== null && lp(t)),
              e)
            : ((e.eventSystemFlags |= a), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
    }
    function jb(e, t, n, a, i) {
        switch (t) {
            case 'focusin':
                return ((fa = Hi(fa, e, t, n, a, i)), !0);
            case 'dragenter':
                return ((da = Hi(da, e, t, n, a, i)), !0);
            case 'mouseover':
                return ((ma = Hi(ma, e, t, n, a, i)), !0);
            case 'pointerover':
                var s = i.pointerId;
                return (Ui.set(s, Hi(Ui.get(s) || null, e, t, n, a, i)), !0);
            case 'gotpointercapture':
                return ((s = i.pointerId), Bi.set(s, Hi(Bi.get(s) || null, e, t, n, a, i)), !0);
        }
        return !1;
    }
    function rp(e) {
        var t = Ja(e.target);
        if (t !== null) {
            var n = m(t);
            if (n !== null) {
                if (((t = n.tag), t === 13)) {
                    if (((t = p(n)), t !== null)) {
                        ((e.blockedOn = t),
                            wf(e.priority, function () {
                                ip(n);
                            }));
                        return;
                    }
                } else if (t === 31) {
                    if (((t = v(n)), t !== null)) {
                        ((e.blockedOn = t),
                            wf(e.priority, function () {
                                ip(n);
                            }));
                        return;
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        e.blockedOn = null;
    }
    function bs(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = mu(e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var a = new n.constructor(n.type, n);
                ((hr = a), n.target.dispatchEvent(a), (hr = null));
            } else return ((t = Wa(n)), t !== null && lp(t), (e.blockedOn = n), !1);
            t.shift();
        }
        return !0;
    }
    function cp(e, t, n) {
        bs(e) && n.delete(t);
    }
    function Mb() {
        ((pu = !1),
            fa !== null && bs(fa) && (fa = null),
            da !== null && bs(da) && (da = null),
            ma !== null && bs(ma) && (ma = null),
            Ui.forEach(cp),
            Bi.forEach(cp));
    }
    function Ss(e, t) {
        e.blockedOn === t && ((e.blockedOn = null), pu || ((pu = !0), l.unstable_scheduleCallback(l.unstable_NormalPriority, Mb)));
    }
    var xs = null;
    function up(e) {
        xs !== e &&
            ((xs = e),
            l.unstable_scheduleCallback(l.unstable_NormalPriority, function () {
                xs === e && (xs = null);
                for (var t = 0; t < e.length; t += 3) {
                    var n = e[t],
                        a = e[t + 1],
                        i = e[t + 2];
                    if (typeof a != 'function') {
                        if (hu(a || n) === null) continue;
                        break;
                    }
                    var s = Wa(n);
                    s !== null && (e.splice(t, 3), (t -= 3), mc(s, { pending: !0, data: i, method: n.method, action: a }, a, i));
                }
            }));
    }
    function Ol(e) {
        function t(C) {
            return Ss(C, e);
        }
        (fa !== null && Ss(fa, e), da !== null && Ss(da, e), ma !== null && Ss(ma, e), Ui.forEach(t), Bi.forEach(t));
        for (var n = 0; n < ha.length; n++) {
            var a = ha[n];
            a.blockedOn === e && (a.blockedOn = null);
        }
        for (; 0 < ha.length && ((n = ha[0]), n.blockedOn === null); ) (rp(n), n.blockedOn === null && ha.shift());
        if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
            for (a = 0; a < n.length; a += 3) {
                var i = n[a],
                    s = n[a + 1],
                    d = i[Tt] || null;
                if (typeof s == 'function') d || up(n);
                else if (d) {
                    var b = null;
                    if (s && s.hasAttribute('formAction')) {
                        if (((i = s), (d = s[Tt] || null))) b = d.formAction;
                        else if (hu(i) !== null) continue;
                    } else b = d.action;
                    (typeof b == 'function' ? (n[a + 1] = b) : (n.splice(a, 3), (a -= 3)), up(n));
                }
            }
    }
    function fp() {
        function e(s) {
            s.canIntercept &&
                s.info === 'react-transition' &&
                s.intercept({
                    handler: function () {
                        return new Promise(function (d) {
                            return (i = d);
                        });
                    },
                    focusReset: 'manual',
                    scroll: 'manual',
                });
        }
        function t() {
            (i !== null && (i(), (i = null)), a || setTimeout(n, 20));
        }
        function n() {
            if (!a && !navigation.transition) {
                var s = navigation.currentEntry;
                s && s.url != null && navigation.navigate(s.url, { state: s.getState(), info: 'react-transition', history: 'replace' });
            }
        }
        if (typeof navigation == 'object') {
            var a = !1,
                i = null;
            return (
                navigation.addEventListener('navigate', e),
                navigation.addEventListener('navigatesuccess', t),
                navigation.addEventListener('navigateerror', t),
                setTimeout(n, 100),
                function () {
                    ((a = !0),
                        navigation.removeEventListener('navigate', e),
                        navigation.removeEventListener('navigatesuccess', t),
                        navigation.removeEventListener('navigateerror', t),
                        i !== null && (i(), (i = null)));
                }
            );
        }
    }
    function gu(e) {
        this._internalRoot = e;
    }
    ((ws.prototype.render = gu.prototype.render =
        function (e) {
            var t = this._internalRoot;
            if (t === null) throw Error(c(409));
            var n = t.current,
                a = Vt();
            np(n, a, e, t, null, null);
        }),
        (ws.prototype.unmount = gu.prototype.unmount =
            function () {
                var e = this._internalRoot;
                if (e !== null) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    (np(e.current, 2, null, e, null, null), ns(), (t[Ia] = null));
                }
            }));
    function ws(e) {
        this._internalRoot = e;
    }
    ws.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = xf();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < ha.length && t !== 0 && t < ha[n].priority; n++);
            (ha.splice(n, 0, e), n === 0 && rp(e));
        }
    };
    var dp = o.version;
    if (dp !== '19.2.0') throw Error(c(527, dp, '19.2.0'));
    Y.findDOMNode = function (e) {
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == 'function' ? Error(c(188)) : ((e = Object.keys(e).join(',')), Error(c(268, e)));
        return ((e = g(t)), (e = e !== null ? S(e) : null), (e = e === null ? null : e.stateNode), e);
    };
    var Rb = { bundleType: 0, version: '19.2.0', rendererPackageName: 'react-dom', currentDispatcherRef: A, reconcilerVersion: '19.2.0' };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
        var Cs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Cs.isDisabled && Cs.supportsFiber)
            try {
                ((oe = Cs.inject(Rb)), (Ze = Cs));
            } catch {}
    }
    return (
        (Gi.createRoot = function (e, t) {
            if (!f(e)) throw Error(c(299));
            var n = !1,
                a = '',
                i = bm,
                s = Sm,
                d = xm;
            return (
                t != null &&
                    (t.unstable_strictMode === !0 && (n = !0),
                    t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
                    t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
                    t.onCaughtError !== void 0 && (s = t.onCaughtError),
                    t.onRecoverableError !== void 0 && (d = t.onRecoverableError)),
                (t = ep(e, 1, !1, null, null, n, a, null, i, s, d, fp)),
                (e[Ia] = t.current),
                Fc(e),
                new gu(t)
            );
        }),
        (Gi.hydrateRoot = function (e, t, n) {
            if (!f(e)) throw Error(c(299));
            var a = !1,
                i = '',
                s = bm,
                d = Sm,
                b = xm,
                C = null;
            return (
                n != null &&
                    (n.unstable_strictMode === !0 && (a = !0),
                    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
                    n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
                    n.onCaughtError !== void 0 && (d = n.onCaughtError),
                    n.onRecoverableError !== void 0 && (b = n.onRecoverableError),
                    n.formState !== void 0 && (C = n.formState)),
                (t = ep(e, 1, !0, t, n ?? null, a, i, C, s, d, b, fp)),
                (t.context = tp(null)),
                (n = t.current),
                (a = Vt()),
                (a = or(a)),
                (i = Pn(a)),
                (i.callback = null),
                ea(n, i, a),
                (n = a),
                (t.current.lanes = n),
                Wl(t, n),
                gn(t),
                (e[Ia] = t.current),
                Fc(e),
                new ws(t)
            );
        }),
        (Gi.version = '19.2.0'),
        Gi
    );
}
var wp;
function Vb() {
    if (wp) return bu.exports;
    wp = 1;
    function l() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
            } catch (o) {
                console.error(o);
            }
    }
    return (l(), (bu.exports = Hb()), bu.exports);
}
var Gb = Vb();
class qb extends h.Component {
    constructor(o) {
        (super(o), (this.state = { hasError: !1 }));
    }
    static getDerivedStateFromError(o) {
        return { hasError: !0, error: o };
    }
    componentDidCatch(o, r) {
        console.error('React Error Boundary caught an error:', o, r);
    }
    render() {
        return this.state.hasError
            ? u.jsxs('div', {
                  className: 'error-boundary',
                  children: [
                      u.jsx('h2', { children: 'Something went wrong' }),
                      u.jsx('button', { onClick: () => window.location.reload(), children: 'Reload Application' }),
                  ],
              })
            : this.props.children;
    }
}
function Cp(l, o) {
    if (typeof l == 'function') return l(o);
    l != null && (l.current = o);
}
function lg(...l) {
    return o => {
        let r = !1;
        const c = l.map(f => {
            const m = Cp(f, o);
            return (!r && typeof m == 'function' && (r = !0), m);
        });
        if (r)
            return () => {
                for (let f = 0; f < c.length; f++) {
                    const m = c[f];
                    typeof m == 'function' ? m() : Cp(l[f], null);
                }
            };
    };
}
function ct(...l) {
    return h.useCallback(lg(...l), l);
}
function Ji(l) {
    const o = Xb(l),
        r = h.forwardRef((c, f) => {
            const { children: m, ...p } = c,
                v = h.Children.toArray(m),
                y = v.find(Qb);
            if (y) {
                const g = y.props.children,
                    S = v.map(x => (x === y ? (h.Children.count(g) > 1 ? h.Children.only(null) : h.isValidElement(g) ? g.props.children : null) : x));
                return u.jsx(o, { ...p, ref: f, children: h.isValidElement(g) ? h.cloneElement(g, void 0, S) : null });
            }
            return u.jsx(o, { ...p, ref: f, children: m });
        });
    return ((r.displayName = `${l}.Slot`), r);
}
var Yb = Ji('Slot');
function Xb(l) {
    const o = h.forwardRef((r, c) => {
        const { children: f, ...m } = r;
        if (h.isValidElement(f)) {
            const p = Ib(f),
                v = Zb(m, f.props);
            return (f.type !== h.Fragment && (v.ref = c ? lg(c, p) : p), h.cloneElement(f, v));
        }
        return h.Children.count(f) > 1 ? h.Children.only(null) : null;
    });
    return ((o.displayName = `${l}.SlotClone`), o);
}
var Kb = Symbol('radix.slottable');
function Qb(l) {
    return h.isValidElement(l) && typeof l.type == 'function' && '__radixId' in l.type && l.type.__radixId === Kb;
}
function Zb(l, o) {
    const r = { ...o };
    for (const c in o) {
        const f = l[c],
            m = o[c];
        /^on[A-Z]/.test(c)
            ? f && m
                ? (r[c] = (...v) => {
                      const y = m(...v);
                      return (f(...v), y);
                  })
                : f && (r[c] = f)
            : c === 'style'
              ? (r[c] = { ...f, ...m })
              : c === 'className' && (r[c] = [f, m].filter(Boolean).join(' '));
    }
    return { ...l, ...r };
}
function Ib(l) {
    let o = Object.getOwnPropertyDescriptor(l.props, 'ref')?.get,
        r = o && 'isReactWarning' in o && o.isReactWarning;
    return r
        ? l.ref
        : ((o = Object.getOwnPropertyDescriptor(l, 'ref')?.get),
          (r = o && 'isReactWarning' in o && o.isReactWarning),
          r ? l.props.ref : l.props.ref || l.ref);
}
function ig(l) {
    var o,
        r,
        c = '';
    if (typeof l == 'string' || typeof l == 'number') c += l;
    else if (typeof l == 'object')
        if (Array.isArray(l)) {
            var f = l.length;
            for (o = 0; o < f; o++) l[o] && (r = ig(l[o])) && (c && (c += ' '), (c += r));
        } else for (r in l) l[r] && (c && (c += ' '), (c += r));
    return c;
}
function og() {
    for (var l, o, r = 0, c = '', f = arguments.length; r < f; r++) (l = arguments[r]) && (o = ig(l)) && (c && (c += ' '), (c += o));
    return c;
}
const Ep = l => (typeof l == 'boolean' ? `${l}` : l === 0 ? '0' : l),
    Tp = og,
    sg = (l, o) => r => {
        var c;
        if (o?.variants == null) return Tp(l, r?.class, r?.className);
        const { variants: f, defaultVariants: m } = o,
            p = Object.keys(f).map(g => {
                const S = r?.[g],
                    x = m?.[g];
                if (S === null) return null;
                const T = Ep(S) || Ep(x);
                return f[g][T];
            }),
            v =
                r &&
                Object.entries(r).reduce((g, S) => {
                    let [x, T] = S;
                    return (T === void 0 || (g[x] = T), g);
                }, {}),
            y =
                o == null || (c = o.compoundVariants) === null || c === void 0
                    ? void 0
                    : c.reduce((g, S) => {
                          let { class: x, className: T, ...M } = S;
                          return Object.entries(M).every(R => {
                              let [w, N] = R;
                              return Array.isArray(N) ? N.includes({ ...m, ...v }[w]) : { ...m, ...v }[w] === N;
                          })
                              ? [...g, x, T]
                              : g;
                      }, []);
        return Tp(l, p, y, r?.class, r?.className);
    },
    $u = '-',
    Jb = l => {
        const o = Fb(l),
            { conflictingClassGroups: r, conflictingClassGroupModifiers: c } = l;
        return {
            getClassGroupId: p => {
                const v = p.split($u);
                return (v[0] === '' && v.length !== 1 && v.shift(), rg(v, o) || Wb(p));
            },
            getConflictingClassGroupIds: (p, v) => {
                const y = r[p] || [];
                return v && c[p] ? [...y, ...c[p]] : y;
            },
        };
    },
    rg = (l, o) => {
        if (l.length === 0) return o.classGroupId;
        const r = l[0],
            c = o.nextPart.get(r),
            f = c ? rg(l.slice(1), c) : void 0;
        if (f) return f;
        if (o.validators.length === 0) return;
        const m = l.join($u);
        return o.validators.find(({ validator: p }) => p(m))?.classGroupId;
    },
    Ap = /^\[(.+)\]$/,
    Wb = l => {
        if (Ap.test(l)) {
            const o = Ap.exec(l)[1],
                r = o?.substring(0, o.indexOf(':'));
            if (r) return 'arbitrary..' + r;
        }
    },
    Fb = l => {
        const { theme: o, classGroups: r } = l,
            c = { nextPart: new Map(), validators: [] };
        for (const f in r) Lu(r[f], c, f, o);
        return c;
    },
    Lu = (l, o, r, c) => {
        l.forEach(f => {
            if (typeof f == 'string') {
                const m = f === '' ? o : Np(o, f);
                m.classGroupId = r;
                return;
            }
            if (typeof f == 'function') {
                if ($b(f)) {
                    Lu(f(c), o, r, c);
                    return;
                }
                o.validators.push({ validator: f, classGroupId: r });
                return;
            }
            Object.entries(f).forEach(([m, p]) => {
                Lu(p, Np(o, m), r, c);
            });
        });
    },
    Np = (l, o) => {
        let r = l;
        return (
            o.split($u).forEach(c => {
                (r.nextPart.has(c) || r.nextPart.set(c, { nextPart: new Map(), validators: [] }), (r = r.nextPart.get(c)));
            }),
            r
        );
    },
    $b = l => l.isThemeGetter,
    Pb = l => {
        if (l < 1) return { get: () => {}, set: () => {} };
        let o = 0,
            r = new Map(),
            c = new Map();
        const f = (m, p) => {
            (r.set(m, p), o++, o > l && ((o = 0), (c = r), (r = new Map())));
        };
        return {
            get(m) {
                let p = r.get(m);
                if (p !== void 0) return p;
                if ((p = c.get(m)) !== void 0) return (f(m, p), p);
            },
            set(m, p) {
                r.has(m) ? r.set(m, p) : f(m, p);
            },
        };
    },
    Uu = '!',
    Bu = ':',
    eS = Bu.length,
    tS = l => {
        const { prefix: o, experimentalParseClassName: r } = l;
        let c = f => {
            const m = [];
            let p = 0,
                v = 0,
                y = 0,
                g;
            for (let R = 0; R < f.length; R++) {
                let w = f[R];
                if (p === 0 && v === 0) {
                    if (w === Bu) {
                        (m.push(f.slice(y, R)), (y = R + eS));
                        continue;
                    }
                    if (w === '/') {
                        g = R;
                        continue;
                    }
                }
                w === '[' ? p++ : w === ']' ? p-- : w === '(' ? v++ : w === ')' && v--;
            }
            const S = m.length === 0 ? f : f.substring(y),
                x = nS(S),
                T = x !== S,
                M = g && g > y ? g - y : void 0;
            return { modifiers: m, hasImportantModifier: T, baseClassName: x, maybePostfixModifierPosition: M };
        };
        if (o) {
            const f = o + Bu,
                m = c;
            c = p =>
                p.startsWith(f)
                    ? m(p.substring(f.length))
                    : { isExternal: !0, modifiers: [], hasImportantModifier: !1, baseClassName: p, maybePostfixModifierPosition: void 0 };
        }
        if (r) {
            const f = c;
            c = m => r({ className: m, parseClassName: f });
        }
        return c;
    },
    nS = l => (l.endsWith(Uu) ? l.substring(0, l.length - 1) : l.startsWith(Uu) ? l.substring(1) : l),
    aS = l => {
        const o = Object.fromEntries(l.orderSensitiveModifiers.map(c => [c, !0]));
        return c => {
            if (c.length <= 1) return c;
            const f = [];
            let m = [];
            return (
                c.forEach(p => {
                    p[0] === '[' || o[p] ? (f.push(...m.sort(), p), (m = [])) : m.push(p);
                }),
                f.push(...m.sort()),
                f
            );
        };
    },
    lS = l => ({ cache: Pb(l.cacheSize), parseClassName: tS(l), sortModifiers: aS(l), ...Jb(l) }),
    iS = /\s+/,
    oS = (l, o) => {
        const { parseClassName: r, getClassGroupId: c, getConflictingClassGroupIds: f, sortModifiers: m } = o,
            p = [],
            v = l.trim().split(iS);
        let y = '';
        for (let g = v.length - 1; g >= 0; g -= 1) {
            const S = v[g],
                { isExternal: x, modifiers: T, hasImportantModifier: M, baseClassName: R, maybePostfixModifierPosition: w } = r(S);
            if (x) {
                y = S + (y.length > 0 ? ' ' + y : y);
                continue;
            }
            let N = !!w,
                L = c(N ? R.substring(0, w) : R);
            if (!L) {
                if (!N) {
                    y = S + (y.length > 0 ? ' ' + y : y);
                    continue;
                }
                if (((L = c(R)), !L)) {
                    y = S + (y.length > 0 ? ' ' + y : y);
                    continue;
                }
                N = !1;
            }
            const B = m(T).join(':'),
                H = M ? B + Uu : B,
                K = H + L;
            if (p.includes(K)) continue;
            p.push(K);
            const W = f(L, N);
            for (let ne = 0; ne < W.length; ++ne) {
                const k = W[ne];
                p.push(H + k);
            }
            y = S + (y.length > 0 ? ' ' + y : y);
        }
        return y;
    };
function sS() {
    let l = 0,
        o,
        r,
        c = '';
    for (; l < arguments.length; ) (o = arguments[l++]) && (r = cg(o)) && (c && (c += ' '), (c += r));
    return c;
}
const cg = l => {
    if (typeof l == 'string') return l;
    let o,
        r = '';
    for (let c = 0; c < l.length; c++) l[c] && (o = cg(l[c])) && (r && (r += ' '), (r += o));
    return r;
};
function rS(l, ...o) {
    let r,
        c,
        f,
        m = p;
    function p(y) {
        const g = o.reduce((S, x) => x(S), l());
        return ((r = lS(g)), (c = r.cache.get), (f = r.cache.set), (m = v), v(y));
    }
    function v(y) {
        const g = c(y);
        if (g) return g;
        const S = oS(y, r);
        return (f(y, S), S);
    }
    return function () {
        return m(sS.apply(null, arguments));
    };
}
const rt = l => {
        const o = r => r[l] || [];
        return ((o.isThemeGetter = !0), o);
    },
    ug = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    fg = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    cS = /^\d+\/\d+$/,
    uS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    fS = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    dS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    mS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    hS = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    kl = l => cS.test(l),
    Ae = l => !!l && !Number.isNaN(Number(l)),
    ga = l => !!l && Number.isInteger(Number(l)),
    Cu = l => l.endsWith('%') && Ae(l.slice(0, -1)),
    Gn = l => uS.test(l),
    pS = () => !0,
    gS = l => fS.test(l) && !dS.test(l),
    dg = () => !1,
    vS = l => mS.test(l),
    yS = l => hS.test(l),
    bS = l => !ce(l) && !ue(l),
    SS = l => ql(l, pg, dg),
    ce = l => ug.test(l),
    Ya = l => ql(l, gg, gS),
    Eu = l => ql(l, TS, Ae),
    jp = l => ql(l, mg, dg),
    xS = l => ql(l, hg, yS),
    Es = l => ql(l, vg, vS),
    ue = l => fg.test(l),
    qi = l => Yl(l, gg),
    wS = l => Yl(l, AS),
    Mp = l => Yl(l, mg),
    CS = l => Yl(l, pg),
    ES = l => Yl(l, hg),
    Ts = l => Yl(l, vg, !0),
    ql = (l, o, r) => {
        const c = ug.exec(l);
        return c ? (c[1] ? o(c[1]) : r(c[2])) : !1;
    },
    Yl = (l, o, r = !1) => {
        const c = fg.exec(l);
        return c ? (c[1] ? o(c[1]) : r) : !1;
    },
    mg = l => l === 'position' || l === 'percentage',
    hg = l => l === 'image' || l === 'url',
    pg = l => l === 'length' || l === 'size' || l === 'bg-size',
    gg = l => l === 'length',
    TS = l => l === 'number',
    AS = l => l === 'family-name',
    vg = l => l === 'shadow',
    NS = () => {
        const l = rt('color'),
            o = rt('font'),
            r = rt('text'),
            c = rt('font-weight'),
            f = rt('tracking'),
            m = rt('leading'),
            p = rt('breakpoint'),
            v = rt('container'),
            y = rt('spacing'),
            g = rt('radius'),
            S = rt('shadow'),
            x = rt('inset-shadow'),
            T = rt('text-shadow'),
            M = rt('drop-shadow'),
            R = rt('blur'),
            w = rt('perspective'),
            N = rt('aspect'),
            L = rt('ease'),
            B = rt('animate'),
            H = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
            K = () => [
                'center',
                'top',
                'bottom',
                'left',
                'right',
                'top-left',
                'left-top',
                'top-right',
                'right-top',
                'bottom-right',
                'right-bottom',
                'bottom-left',
                'left-bottom',
            ],
            W = () => [...K(), ue, ce],
            ne = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
            k = () => ['auto', 'contain', 'none'],
            G = () => [ue, ce, y],
            ae = () => [kl, 'full', 'auto', ...G()],
            ee = () => [ga, 'none', 'subgrid', ue, ce],
            he = () => ['auto', { span: ['full', ga, ue, ce] }, ga, ue, ce],
            le = () => [ga, 'auto', ue, ce],
            re = () => ['auto', 'min', 'max', 'fr', ue, ce],
            ie = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch', 'baseline', 'center-safe', 'end-safe'],
            Q = () => ['start', 'end', 'center', 'stretch', 'center-safe', 'end-safe'],
            A = () => ['auto', ...G()],
            Y = () => [kl, 'auto', 'full', 'dvw', 'dvh', 'lvw', 'lvh', 'svw', 'svh', 'min', 'max', 'fit', ...G()],
            z = () => [l, ue, ce],
            te = () => [...K(), Mp, jp, { position: [ue, ce] }],
            de = () => ['no-repeat', { repeat: ['', 'x', 'y', 'space', 'round'] }],
            E = () => ['auto', 'cover', 'contain', CS, SS, { size: [ue, ce] }],
            q = () => [Cu, qi, Ya],
            F = () => ['', 'none', 'full', g, ue, ce],
            P = () => ['', Ae, qi, Ya],
            fe = () => ['solid', 'dashed', 'dotted', 'double'],
            pe = () => [
                'normal',
                'multiply',
                'screen',
                'overlay',
                'darken',
                'lighten',
                'color-dodge',
                'color-burn',
                'hard-light',
                'soft-light',
                'difference',
                'exclusion',
                'hue',
                'saturation',
                'color',
                'luminosity',
            ],
            $ = () => [Ae, Cu, Mp, jp],
            be = () => ['', 'none', R, ue, ce],
            ye = () => ['none', Ae, ue, ce],
            we = () => ['none', Ae, ue, ce],
            Te = () => [Ae, ue, ce],
            Me = () => [kl, 'full', ...G()];
        return {
            cacheSize: 500,
            theme: {
                animate: ['spin', 'ping', 'pulse', 'bounce'],
                aspect: ['video'],
                blur: [Gn],
                breakpoint: [Gn],
                color: [pS],
                container: [Gn],
                'drop-shadow': [Gn],
                ease: ['in', 'out', 'in-out'],
                font: [bS],
                'font-weight': ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
                'inset-shadow': [Gn],
                leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
                perspective: ['dramatic', 'near', 'normal', 'midrange', 'distant', 'none'],
                radius: [Gn],
                shadow: [Gn],
                spacing: ['px', Ae],
                text: [Gn],
                'text-shadow': [Gn],
                tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
            },
            classGroups: {
                aspect: [{ aspect: ['auto', 'square', kl, ce, ue, N] }],
                container: ['container'],
                columns: [{ columns: [Ae, ce, ue, v] }],
                'break-after': [{ 'break-after': H() }],
                'break-before': [{ 'break-before': H() }],
                'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
                'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
                box: [{ box: ['border', 'content'] }],
                display: [
                    'block',
                    'inline-block',
                    'inline',
                    'flex',
                    'inline-flex',
                    'table',
                    'inline-table',
                    'table-caption',
                    'table-cell',
                    'table-column',
                    'table-column-group',
                    'table-footer-group',
                    'table-header-group',
                    'table-row-group',
                    'table-row',
                    'flow-root',
                    'grid',
                    'inline-grid',
                    'contents',
                    'list-item',
                    'hidden',
                ],
                sr: ['sr-only', 'not-sr-only'],
                float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
                clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
                isolation: ['isolate', 'isolation-auto'],
                'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
                'object-position': [{ object: W() }],
                overflow: [{ overflow: ne() }],
                'overflow-x': [{ 'overflow-x': ne() }],
                'overflow-y': [{ 'overflow-y': ne() }],
                overscroll: [{ overscroll: k() }],
                'overscroll-x': [{ 'overscroll-x': k() }],
                'overscroll-y': [{ 'overscroll-y': k() }],
                position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
                inset: [{ inset: ae() }],
                'inset-x': [{ 'inset-x': ae() }],
                'inset-y': [{ 'inset-y': ae() }],
                start: [{ start: ae() }],
                end: [{ end: ae() }],
                top: [{ top: ae() }],
                right: [{ right: ae() }],
                bottom: [{ bottom: ae() }],
                left: [{ left: ae() }],
                visibility: ['visible', 'invisible', 'collapse'],
                z: [{ z: [ga, 'auto', ue, ce] }],
                basis: [{ basis: [kl, 'full', 'auto', v, ...G()] }],
                'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
                'flex-wrap': [{ flex: ['nowrap', 'wrap', 'wrap-reverse'] }],
                flex: [{ flex: [Ae, kl, 'auto', 'initial', 'none', ce] }],
                grow: [{ grow: ['', Ae, ue, ce] }],
                shrink: [{ shrink: ['', Ae, ue, ce] }],
                order: [{ order: [ga, 'first', 'last', 'none', ue, ce] }],
                'grid-cols': [{ 'grid-cols': ee() }],
                'col-start-end': [{ col: he() }],
                'col-start': [{ 'col-start': le() }],
                'col-end': [{ 'col-end': le() }],
                'grid-rows': [{ 'grid-rows': ee() }],
                'row-start-end': [{ row: he() }],
                'row-start': [{ 'row-start': le() }],
                'row-end': [{ 'row-end': le() }],
                'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
                'auto-cols': [{ 'auto-cols': re() }],
                'auto-rows': [{ 'auto-rows': re() }],
                gap: [{ gap: G() }],
                'gap-x': [{ 'gap-x': G() }],
                'gap-y': [{ 'gap-y': G() }],
                'justify-content': [{ justify: [...ie(), 'normal'] }],
                'justify-items': [{ 'justify-items': [...Q(), 'normal'] }],
                'justify-self': [{ 'justify-self': ['auto', ...Q()] }],
                'align-content': [{ content: ['normal', ...ie()] }],
                'align-items': [{ items: [...Q(), { baseline: ['', 'last'] }] }],
                'align-self': [{ self: ['auto', ...Q(), { baseline: ['', 'last'] }] }],
                'place-content': [{ 'place-content': ie() }],
                'place-items': [{ 'place-items': [...Q(), 'baseline'] }],
                'place-self': [{ 'place-self': ['auto', ...Q()] }],
                p: [{ p: G() }],
                px: [{ px: G() }],
                py: [{ py: G() }],
                ps: [{ ps: G() }],
                pe: [{ pe: G() }],
                pt: [{ pt: G() }],
                pr: [{ pr: G() }],
                pb: [{ pb: G() }],
                pl: [{ pl: G() }],
                m: [{ m: A() }],
                mx: [{ mx: A() }],
                my: [{ my: A() }],
                ms: [{ ms: A() }],
                me: [{ me: A() }],
                mt: [{ mt: A() }],
                mr: [{ mr: A() }],
                mb: [{ mb: A() }],
                ml: [{ ml: A() }],
                'space-x': [{ 'space-x': G() }],
                'space-x-reverse': ['space-x-reverse'],
                'space-y': [{ 'space-y': G() }],
                'space-y-reverse': ['space-y-reverse'],
                size: [{ size: Y() }],
                w: [{ w: [v, 'screen', ...Y()] }],
                'min-w': [{ 'min-w': [v, 'screen', 'none', ...Y()] }],
                'max-w': [{ 'max-w': [v, 'screen', 'none', 'prose', { screen: [p] }, ...Y()] }],
                h: [{ h: ['screen', 'lh', ...Y()] }],
                'min-h': [{ 'min-h': ['screen', 'lh', 'none', ...Y()] }],
                'max-h': [{ 'max-h': ['screen', 'lh', ...Y()] }],
                'font-size': [{ text: ['base', r, qi, Ya] }],
                'font-smoothing': ['antialiased', 'subpixel-antialiased'],
                'font-style': ['italic', 'not-italic'],
                'font-weight': [{ font: [c, ue, Eu] }],
                'font-stretch': [
                    {
                        'font-stretch': [
                            'ultra-condensed',
                            'extra-condensed',
                            'condensed',
                            'semi-condensed',
                            'normal',
                            'semi-expanded',
                            'expanded',
                            'extra-expanded',
                            'ultra-expanded',
                            Cu,
                            ce,
                        ],
                    },
                ],
                'font-family': [{ font: [wS, ce, o] }],
                'fvn-normal': ['normal-nums'],
                'fvn-ordinal': ['ordinal'],
                'fvn-slashed-zero': ['slashed-zero'],
                'fvn-figure': ['lining-nums', 'oldstyle-nums'],
                'fvn-spacing': ['proportional-nums', 'tabular-nums'],
                'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
                tracking: [{ tracking: [f, ue, ce] }],
                'line-clamp': [{ 'line-clamp': [Ae, 'none', ue, Eu] }],
                leading: [{ leading: [m, ...G()] }],
                'list-image': [{ 'list-image': ['none', ue, ce] }],
                'list-style-position': [{ list: ['inside', 'outside'] }],
                'list-style-type': [{ list: ['disc', 'decimal', 'none', ue, ce] }],
                'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
                'placeholder-color': [{ placeholder: z() }],
                'text-color': [{ text: z() }],
                'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
                'text-decoration-style': [{ decoration: [...fe(), 'wavy'] }],
                'text-decoration-thickness': [{ decoration: [Ae, 'from-font', 'auto', ue, Ya] }],
                'text-decoration-color': [{ decoration: z() }],
                'underline-offset': [{ 'underline-offset': [Ae, 'auto', ue, ce] }],
                'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
                'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
                'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
                indent: [{ indent: G() }],
                'vertical-align': [{ align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', ue, ce] }],
                whitespace: [{ whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] }],
                break: [{ break: ['normal', 'words', 'all', 'keep'] }],
                wrap: [{ wrap: ['break-word', 'anywhere', 'normal'] }],
                hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
                content: [{ content: ['none', ue, ce] }],
                'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
                'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
                'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
                'bg-position': [{ bg: te() }],
                'bg-repeat': [{ bg: de() }],
                'bg-size': [{ bg: E() }],
                'bg-image': [
                    {
                        bg: [
                            'none',
                            { linear: [{ to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, ga, ue, ce], radial: ['', ue, ce], conic: [ga, ue, ce] },
                            ES,
                            xS,
                        ],
                    },
                ],
                'bg-color': [{ bg: z() }],
                'gradient-from-pos': [{ from: q() }],
                'gradient-via-pos': [{ via: q() }],
                'gradient-to-pos': [{ to: q() }],
                'gradient-from': [{ from: z() }],
                'gradient-via': [{ via: z() }],
                'gradient-to': [{ to: z() }],
                rounded: [{ rounded: F() }],
                'rounded-s': [{ 'rounded-s': F() }],
                'rounded-e': [{ 'rounded-e': F() }],
                'rounded-t': [{ 'rounded-t': F() }],
                'rounded-r': [{ 'rounded-r': F() }],
                'rounded-b': [{ 'rounded-b': F() }],
                'rounded-l': [{ 'rounded-l': F() }],
                'rounded-ss': [{ 'rounded-ss': F() }],
                'rounded-se': [{ 'rounded-se': F() }],
                'rounded-ee': [{ 'rounded-ee': F() }],
                'rounded-es': [{ 'rounded-es': F() }],
                'rounded-tl': [{ 'rounded-tl': F() }],
                'rounded-tr': [{ 'rounded-tr': F() }],
                'rounded-br': [{ 'rounded-br': F() }],
                'rounded-bl': [{ 'rounded-bl': F() }],
                'border-w': [{ border: P() }],
                'border-w-x': [{ 'border-x': P() }],
                'border-w-y': [{ 'border-y': P() }],
                'border-w-s': [{ 'border-s': P() }],
                'border-w-e': [{ 'border-e': P() }],
                'border-w-t': [{ 'border-t': P() }],
                'border-w-r': [{ 'border-r': P() }],
                'border-w-b': [{ 'border-b': P() }],
                'border-w-l': [{ 'border-l': P() }],
                'divide-x': [{ 'divide-x': P() }],
                'divide-x-reverse': ['divide-x-reverse'],
                'divide-y': [{ 'divide-y': P() }],
                'divide-y-reverse': ['divide-y-reverse'],
                'border-style': [{ border: [...fe(), 'hidden', 'none'] }],
                'divide-style': [{ divide: [...fe(), 'hidden', 'none'] }],
                'border-color': [{ border: z() }],
                'border-color-x': [{ 'border-x': z() }],
                'border-color-y': [{ 'border-y': z() }],
                'border-color-s': [{ 'border-s': z() }],
                'border-color-e': [{ 'border-e': z() }],
                'border-color-t': [{ 'border-t': z() }],
                'border-color-r': [{ 'border-r': z() }],
                'border-color-b': [{ 'border-b': z() }],
                'border-color-l': [{ 'border-l': z() }],
                'divide-color': [{ divide: z() }],
                'outline-style': [{ outline: [...fe(), 'none', 'hidden'] }],
                'outline-offset': [{ 'outline-offset': [Ae, ue, ce] }],
                'outline-w': [{ outline: ['', Ae, qi, Ya] }],
                'outline-color': [{ outline: z() }],
                shadow: [{ shadow: ['', 'none', S, Ts, Es] }],
                'shadow-color': [{ shadow: z() }],
                'inset-shadow': [{ 'inset-shadow': ['none', x, Ts, Es] }],
                'inset-shadow-color': [{ 'inset-shadow': z() }],
                'ring-w': [{ ring: P() }],
                'ring-w-inset': ['ring-inset'],
                'ring-color': [{ ring: z() }],
                'ring-offset-w': [{ 'ring-offset': [Ae, Ya] }],
                'ring-offset-color': [{ 'ring-offset': z() }],
                'inset-ring-w': [{ 'inset-ring': P() }],
                'inset-ring-color': [{ 'inset-ring': z() }],
                'text-shadow': [{ 'text-shadow': ['none', T, Ts, Es] }],
                'text-shadow-color': [{ 'text-shadow': z() }],
                opacity: [{ opacity: [Ae, ue, ce] }],
                'mix-blend': [{ 'mix-blend': [...pe(), 'plus-darker', 'plus-lighter'] }],
                'bg-blend': [{ 'bg-blend': pe() }],
                'mask-clip': [{ 'mask-clip': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] }, 'mask-no-clip'],
                'mask-composite': [{ mask: ['add', 'subtract', 'intersect', 'exclude'] }],
                'mask-image-linear-pos': [{ 'mask-linear': [Ae] }],
                'mask-image-linear-from-pos': [{ 'mask-linear-from': $() }],
                'mask-image-linear-to-pos': [{ 'mask-linear-to': $() }],
                'mask-image-linear-from-color': [{ 'mask-linear-from': z() }],
                'mask-image-linear-to-color': [{ 'mask-linear-to': z() }],
                'mask-image-t-from-pos': [{ 'mask-t-from': $() }],
                'mask-image-t-to-pos': [{ 'mask-t-to': $() }],
                'mask-image-t-from-color': [{ 'mask-t-from': z() }],
                'mask-image-t-to-color': [{ 'mask-t-to': z() }],
                'mask-image-r-from-pos': [{ 'mask-r-from': $() }],
                'mask-image-r-to-pos': [{ 'mask-r-to': $() }],
                'mask-image-r-from-color': [{ 'mask-r-from': z() }],
                'mask-image-r-to-color': [{ 'mask-r-to': z() }],
                'mask-image-b-from-pos': [{ 'mask-b-from': $() }],
                'mask-image-b-to-pos': [{ 'mask-b-to': $() }],
                'mask-image-b-from-color': [{ 'mask-b-from': z() }],
                'mask-image-b-to-color': [{ 'mask-b-to': z() }],
                'mask-image-l-from-pos': [{ 'mask-l-from': $() }],
                'mask-image-l-to-pos': [{ 'mask-l-to': $() }],
                'mask-image-l-from-color': [{ 'mask-l-from': z() }],
                'mask-image-l-to-color': [{ 'mask-l-to': z() }],
                'mask-image-x-from-pos': [{ 'mask-x-from': $() }],
                'mask-image-x-to-pos': [{ 'mask-x-to': $() }],
                'mask-image-x-from-color': [{ 'mask-x-from': z() }],
                'mask-image-x-to-color': [{ 'mask-x-to': z() }],
                'mask-image-y-from-pos': [{ 'mask-y-from': $() }],
                'mask-image-y-to-pos': [{ 'mask-y-to': $() }],
                'mask-image-y-from-color': [{ 'mask-y-from': z() }],
                'mask-image-y-to-color': [{ 'mask-y-to': z() }],
                'mask-image-radial': [{ 'mask-radial': [ue, ce] }],
                'mask-image-radial-from-pos': [{ 'mask-radial-from': $() }],
                'mask-image-radial-to-pos': [{ 'mask-radial-to': $() }],
                'mask-image-radial-from-color': [{ 'mask-radial-from': z() }],
                'mask-image-radial-to-color': [{ 'mask-radial-to': z() }],
                'mask-image-radial-shape': [{ 'mask-radial': ['circle', 'ellipse'] }],
                'mask-image-radial-size': [{ 'mask-radial': [{ closest: ['side', 'corner'], farthest: ['side', 'corner'] }] }],
                'mask-image-radial-pos': [{ 'mask-radial-at': K() }],
                'mask-image-conic-pos': [{ 'mask-conic': [Ae] }],
                'mask-image-conic-from-pos': [{ 'mask-conic-from': $() }],
                'mask-image-conic-to-pos': [{ 'mask-conic-to': $() }],
                'mask-image-conic-from-color': [{ 'mask-conic-from': z() }],
                'mask-image-conic-to-color': [{ 'mask-conic-to': z() }],
                'mask-mode': [{ mask: ['alpha', 'luminance', 'match'] }],
                'mask-origin': [{ 'mask-origin': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] }],
                'mask-position': [{ mask: te() }],
                'mask-repeat': [{ mask: de() }],
                'mask-size': [{ mask: E() }],
                'mask-type': [{ 'mask-type': ['alpha', 'luminance'] }],
                'mask-image': [{ mask: ['none', ue, ce] }],
                filter: [{ filter: ['', 'none', ue, ce] }],
                blur: [{ blur: be() }],
                brightness: [{ brightness: [Ae, ue, ce] }],
                contrast: [{ contrast: [Ae, ue, ce] }],
                'drop-shadow': [{ 'drop-shadow': ['', 'none', M, Ts, Es] }],
                'drop-shadow-color': [{ 'drop-shadow': z() }],
                grayscale: [{ grayscale: ['', Ae, ue, ce] }],
                'hue-rotate': [{ 'hue-rotate': [Ae, ue, ce] }],
                invert: [{ invert: ['', Ae, ue, ce] }],
                saturate: [{ saturate: [Ae, ue, ce] }],
                sepia: [{ sepia: ['', Ae, ue, ce] }],
                'backdrop-filter': [{ 'backdrop-filter': ['', 'none', ue, ce] }],
                'backdrop-blur': [{ 'backdrop-blur': be() }],
                'backdrop-brightness': [{ 'backdrop-brightness': [Ae, ue, ce] }],
                'backdrop-contrast': [{ 'backdrop-contrast': [Ae, ue, ce] }],
                'backdrop-grayscale': [{ 'backdrop-grayscale': ['', Ae, ue, ce] }],
                'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [Ae, ue, ce] }],
                'backdrop-invert': [{ 'backdrop-invert': ['', Ae, ue, ce] }],
                'backdrop-opacity': [{ 'backdrop-opacity': [Ae, ue, ce] }],
                'backdrop-saturate': [{ 'backdrop-saturate': [Ae, ue, ce] }],
                'backdrop-sepia': [{ 'backdrop-sepia': ['', Ae, ue, ce] }],
                'border-collapse': [{ border: ['collapse', 'separate'] }],
                'border-spacing': [{ 'border-spacing': G() }],
                'border-spacing-x': [{ 'border-spacing-x': G() }],
                'border-spacing-y': [{ 'border-spacing-y': G() }],
                'table-layout': [{ table: ['auto', 'fixed'] }],
                caption: [{ caption: ['top', 'bottom'] }],
                transition: [{ transition: ['', 'all', 'colors', 'opacity', 'shadow', 'transform', 'none', ue, ce] }],
                'transition-behavior': [{ transition: ['normal', 'discrete'] }],
                duration: [{ duration: [Ae, 'initial', ue, ce] }],
                ease: [{ ease: ['linear', 'initial', L, ue, ce] }],
                delay: [{ delay: [Ae, ue, ce] }],
                animate: [{ animate: ['none', B, ue, ce] }],
                backface: [{ backface: ['hidden', 'visible'] }],
                perspective: [{ perspective: [w, ue, ce] }],
                'perspective-origin': [{ 'perspective-origin': W() }],
                rotate: [{ rotate: ye() }],
                'rotate-x': [{ 'rotate-x': ye() }],
                'rotate-y': [{ 'rotate-y': ye() }],
                'rotate-z': [{ 'rotate-z': ye() }],
                scale: [{ scale: we() }],
                'scale-x': [{ 'scale-x': we() }],
                'scale-y': [{ 'scale-y': we() }],
                'scale-z': [{ 'scale-z': we() }],
                'scale-3d': ['scale-3d'],
                skew: [{ skew: Te() }],
                'skew-x': [{ 'skew-x': Te() }],
                'skew-y': [{ 'skew-y': Te() }],
                transform: [{ transform: [ue, ce, '', 'none', 'gpu', 'cpu'] }],
                'transform-origin': [{ origin: W() }],
                'transform-style': [{ transform: ['3d', 'flat'] }],
                translate: [{ translate: Me() }],
                'translate-x': [{ 'translate-x': Me() }],
                'translate-y': [{ 'translate-y': Me() }],
                'translate-z': [{ 'translate-z': Me() }],
                'translate-none': ['translate-none'],
                accent: [{ accent: z() }],
                appearance: [{ appearance: ['none', 'auto'] }],
                'caret-color': [{ caret: z() }],
                'color-scheme': [{ scheme: ['normal', 'dark', 'light', 'light-dark', 'only-dark', 'only-light'] }],
                cursor: [
                    {
                        cursor: [
                            'auto',
                            'default',
                            'pointer',
                            'wait',
                            'text',
                            'move',
                            'help',
                            'not-allowed',
                            'none',
                            'context-menu',
                            'progress',
                            'cell',
                            'crosshair',
                            'vertical-text',
                            'alias',
                            'copy',
                            'no-drop',
                            'grab',
                            'grabbing',
                            'all-scroll',
                            'col-resize',
                            'row-resize',
                            'n-resize',
                            'e-resize',
                            's-resize',
                            'w-resize',
                            'ne-resize',
                            'nw-resize',
                            'se-resize',
                            'sw-resize',
                            'ew-resize',
                            'ns-resize',
                            'nesw-resize',
                            'nwse-resize',
                            'zoom-in',
                            'zoom-out',
                            ue,
                            ce,
                        ],
                    },
                ],
                'field-sizing': [{ 'field-sizing': ['fixed', 'content'] }],
                'pointer-events': [{ 'pointer-events': ['auto', 'none'] }],
                resize: [{ resize: ['none', '', 'y', 'x'] }],
                'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
                'scroll-m': [{ 'scroll-m': G() }],
                'scroll-mx': [{ 'scroll-mx': G() }],
                'scroll-my': [{ 'scroll-my': G() }],
                'scroll-ms': [{ 'scroll-ms': G() }],
                'scroll-me': [{ 'scroll-me': G() }],
                'scroll-mt': [{ 'scroll-mt': G() }],
                'scroll-mr': [{ 'scroll-mr': G() }],
                'scroll-mb': [{ 'scroll-mb': G() }],
                'scroll-ml': [{ 'scroll-ml': G() }],
                'scroll-p': [{ 'scroll-p': G() }],
                'scroll-px': [{ 'scroll-px': G() }],
                'scroll-py': [{ 'scroll-py': G() }],
                'scroll-ps': [{ 'scroll-ps': G() }],
                'scroll-pe': [{ 'scroll-pe': G() }],
                'scroll-pt': [{ 'scroll-pt': G() }],
                'scroll-pr': [{ 'scroll-pr': G() }],
                'scroll-pb': [{ 'scroll-pb': G() }],
                'scroll-pl': [{ 'scroll-pl': G() }],
                'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
                'snap-stop': [{ snap: ['normal', 'always'] }],
                'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
                'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
                touch: [{ touch: ['auto', 'none', 'manipulation'] }],
                'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
                'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
                'touch-pz': ['touch-pinch-zoom'],
                select: [{ select: ['none', 'text', 'all', 'auto'] }],
                'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', ue, ce] }],
                fill: [{ fill: ['none', ...z()] }],
                'stroke-w': [{ stroke: [Ae, qi, Ya, Eu] }],
                stroke: [{ stroke: ['none', ...z()] }],
                'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
            },
            conflictingClassGroups: {
                overflow: ['overflow-x', 'overflow-y'],
                overscroll: ['overscroll-x', 'overscroll-y'],
                inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
                'inset-x': ['right', 'left'],
                'inset-y': ['top', 'bottom'],
                flex: ['basis', 'grow', 'shrink'],
                gap: ['gap-x', 'gap-y'],
                p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
                px: ['pr', 'pl'],
                py: ['pt', 'pb'],
                m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
                mx: ['mr', 'ml'],
                my: ['mt', 'mb'],
                size: ['w', 'h'],
                'font-size': ['leading'],
                'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
                'fvn-ordinal': ['fvn-normal'],
                'fvn-slashed-zero': ['fvn-normal'],
                'fvn-figure': ['fvn-normal'],
                'fvn-spacing': ['fvn-normal'],
                'fvn-fraction': ['fvn-normal'],
                'line-clamp': ['display', 'overflow'],
                rounded: [
                    'rounded-s',
                    'rounded-e',
                    'rounded-t',
                    'rounded-r',
                    'rounded-b',
                    'rounded-l',
                    'rounded-ss',
                    'rounded-se',
                    'rounded-ee',
                    'rounded-es',
                    'rounded-tl',
                    'rounded-tr',
                    'rounded-br',
                    'rounded-bl',
                ],
                'rounded-s': ['rounded-ss', 'rounded-es'],
                'rounded-e': ['rounded-se', 'rounded-ee'],
                'rounded-t': ['rounded-tl', 'rounded-tr'],
                'rounded-r': ['rounded-tr', 'rounded-br'],
                'rounded-b': ['rounded-br', 'rounded-bl'],
                'rounded-l': ['rounded-tl', 'rounded-bl'],
                'border-spacing': ['border-spacing-x', 'border-spacing-y'],
                'border-w': ['border-w-x', 'border-w-y', 'border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
                'border-w-x': ['border-w-r', 'border-w-l'],
                'border-w-y': ['border-w-t', 'border-w-b'],
                'border-color': [
                    'border-color-x',
                    'border-color-y',
                    'border-color-s',
                    'border-color-e',
                    'border-color-t',
                    'border-color-r',
                    'border-color-b',
                    'border-color-l',
                ],
                'border-color-x': ['border-color-r', 'border-color-l'],
                'border-color-y': ['border-color-t', 'border-color-b'],
                translate: ['translate-x', 'translate-y', 'translate-none'],
                'translate-none': ['translate', 'translate-x', 'translate-y', 'translate-z'],
                'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
                'scroll-mx': ['scroll-mr', 'scroll-ml'],
                'scroll-my': ['scroll-mt', 'scroll-mb'],
                'scroll-p': ['scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
                'scroll-px': ['scroll-pr', 'scroll-pl'],
                'scroll-py': ['scroll-pt', 'scroll-pb'],
                touch: ['touch-x', 'touch-y', 'touch-pz'],
                'touch-x': ['touch'],
                'touch-y': ['touch'],
                'touch-pz': ['touch'],
            },
            conflictingClassGroupModifiers: { 'font-size': ['leading'] },
            orderSensitiveModifiers: [
                '*',
                '**',
                'after',
                'backdrop',
                'before',
                'details-content',
                'file',
                'first-letter',
                'first-line',
                'marker',
                'placeholder',
                'selection',
            ],
        };
    },
    jS = rS(NS);
function Et(...l) {
    return jS(og(l));
}
const MS = sg(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        {
            variants: {
                variant: {
                    default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
                    destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
                    outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
                    secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
                    ghost: 'hover:bg-accent hover:text-accent-foreground',
                    link: 'text-primary underline-offset-4 hover:underline',
                },
                size: { default: 'h-9 px-4 py-2', sm: 'h-8 rounded-md px-3 text-xs', lg: 'h-10 rounded-md px-8', icon: 'h-9 w-9' },
            },
            defaultVariants: { variant: 'default', size: 'default' },
        }
    ),
    Pt = h.forwardRef(({ className: l, variant: o, size: r, asChild: c = !1, ...f }, m) => {
        const p = c ? Yb : 'button';
        return u.jsx(p, { className: Et(MS({ variant: o, size: r, className: l })), ref: m, ...f });
    });
Pt.displayName = 'Button';
const RS = ({ currentView: l, onViewChange: o, onMinimize: r, onClose: c }) => {
    const [f, m] = h.useState(''),
        [p, v] = h.useState(null);
    h.useEffect(() => {
        if (l === 'assistant') {
            const N = setInterval(() => {
                m('0s');
            }, 1e3);
            return (
                v(N),
                () => {
                    N && clearInterval(N);
                }
            );
        } else (p && (clearInterval(p), v(null)), m(''));
    }, [l, p]);
    const y = () =>
            ({
                onboarding: 'Welcome to Cheating Daddy',
                main: 'Cheating Daddy',
                customize: 'Customize',
                help: 'Help & Shortcuts',
                history: 'Conversation History',
                advanced: 'Advanced Tools',
                assistant: 'Cheating Daddy',
            })[l] || 'Cheating Daddy',
        g = () => ['customize', 'help', 'history', 'advanced'].includes(l),
        S = () =>
            u.jsxs('svg', {
                width: '24px',
                height: '24px',
                strokeWidth: '1.7',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                color: 'currentColor',
                children: [
                    u.jsx('path', {
                        d: 'M12 21V7C12 5.89543 12.8954 5 14 5H21.4C21.7314 5 22 5.26863 22 5.6V18.7143',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                    }),
                    u.jsx('path', {
                        d: 'M12 21V7C12 5.89543 11.1046 5 10 5H2.6C2.26863 5 2 5.26863 2 5.6V18.7143',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                    }),
                    u.jsx('path', { d: 'M14 19L22 19', stroke: 'currentColor', strokeWidth: '1.7', strokeLinecap: 'round' }),
                    u.jsx('path', { d: 'M10 19L2 19', stroke: 'currentColor', strokeWidth: '1.7', strokeLinecap: 'round' }),
                    u.jsx('path', {
                        d: 'M12 21C12 19.8954 12.8954 19 14 19',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }),
                    u.jsx('path', {
                        d: 'M12 21C12 19.8954 11.1046 19 10 19',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }),
                ],
            }),
        x = () =>
            u.jsxs('svg', {
                width: '24px',
                height: '24px',
                strokeWidth: '1.7',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                color: 'currentColor',
                children: [
                    u.jsx('path', {
                        d: 'M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }),
                    u.jsx('path', {
                        d: 'M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }),
                ],
            }),
        T = () =>
            u.jsxs('svg', {
                width: '24px',
                height: '24px',
                strokeWidth: '1.7',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                color: 'currentColor',
                children: [
                    u.jsx('path', {
                        d: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }),
                    u.jsx('path', {
                        d: 'M9 9C9 5.49997 14.5 5.5 14.5 9C14.5 11.5 12 10.9999 12 13.9999',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }),
                    u.jsx('path', {
                        d: 'M12 18.01L12.01 17.9989',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }),
                ],
            }),
        M = () =>
            u.jsxs('svg', {
                width: '24px',
                strokeWidth: '1.7',
                height: '24px',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                color: 'currentColor',
                children: [
                    u.jsx('path', { d: 'M18.5 15L5.5 15', stroke: 'currentColor', strokeWidth: '1.7', strokeLinejoin: 'round' }),
                    u.jsx('path', { d: 'M16 4L8 4', stroke: 'currentColor', strokeWidth: '1.7', strokeLinecap: 'round', strokeLinejoin: 'round' }),
                    u.jsx('path', {
                        d: 'M9 4.5L9 10.2602C9 10.7376 8.82922 11.1992 8.51851 11.5617L3.48149 17.4383C3.17078 17.8008 3 18.2624 3 18.7398V19C3 20.1046 3.89543 21 5 21L19 21C20.1046 21 21 20.1046 21 19V18.7398C21 18.2624 20.8292 17.8008 20.5185 17.4383L15.4815 11.5617C15.1708 11.1992 15 10.7376 15 10.2602L15 4.5',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }),
                    u.jsx('path', {
                        d: 'M12 9.01L12.01 8.99889',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }),
                    u.jsx('path', {
                        d: 'M11 2.01L11.01 1.99889',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }),
                ],
            }),
        R = () =>
            u.jsx('svg', {
                width: '24px',
                height: '24px',
                strokeWidth: '1.7',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                color: 'currentColor',
                children: u.jsx('path', {
                    d: 'M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426',
                    stroke: 'currentColor',
                    strokeWidth: '1.7',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                }),
            }),
        w = () =>
            u.jsx('svg', {
                width: '24px',
                height: '24px',
                strokeWidth: '1.7',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                color: 'currentColor',
                children: u.jsx('path', {
                    d: 'M15 6L9 12L15 18',
                    stroke: 'currentColor',
                    strokeWidth: '1.7',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                }),
            });
    return u.jsxs('div', {
        className: 'header',
        children: [
            u.jsx('div', { className: 'header-title', children: y() }),
            u.jsxs('div', {
                className: 'header-actions',
                children: [
                    l === 'assistant' &&
                        u.jsxs(u.Fragment, {
                            children: [
                                u.jsx('span', { children: f }),
                                u.jsx('span', { children: 'Ready' }),
                                u.jsxs(Pt, {
                                    variant: 'outline',
                                    size: 'sm',
                                    className: 'header-hide-button',
                                    children: [
                                        'Hide  ',
                                        u.jsx('span', {
                                            className: 'key',
                                            style: { pointerEvents: 'none' },
                                            children: window.cheddar?.isMacOS ? 'Cmd' : 'Ctrl',
                                        }),
                                        '  ',
                                        u.jsx('span', { className: 'key', children: '\\' }),
                                    ],
                                }),
                                u.jsx(Pt, { variant: 'ghost', size: 'icon', className: 'window-close', onClick: c, children: u.jsx(R, {}) }),
                            ],
                        }),
                    l === 'main' &&
                        u.jsxs(u.Fragment, {
                            children: [
                                u.jsx(Pt, {
                                    variant: 'ghost',
                                    size: 'icon',
                                    title: 'Conversation History',
                                    onClick: () => o('history'),
                                    children: u.jsx(S, {}),
                                }),
                                u.jsx(Pt, {
                                    variant: 'ghost',
                                    size: 'icon',
                                    title: 'Advanced Tools',
                                    onClick: () => o('advanced'),
                                    children: u.jsx(M, {}),
                                }),
                                u.jsx(Pt, {
                                    variant: 'ghost',
                                    size: 'icon',
                                    title: 'Customize',
                                    onClick: () => o('customize'),
                                    children: u.jsx(x, {}),
                                }),
                                u.jsx(Pt, {
                                    variant: 'ghost',
                                    size: 'icon',
                                    title: 'Help & Shortcuts',
                                    onClick: () => o('help'),
                                    children: u.jsx(T, {}),
                                }),
                                u.jsx(Pt, { variant: 'ghost', size: 'icon', className: 'window-close', onClick: c, children: u.jsx(R, {}) }),
                            ],
                        }),
                    l === 'onboarding' &&
                        u.jsx(Pt, { variant: 'ghost', size: 'icon', className: 'window-close', onClick: () => o('main'), children: u.jsx(R, {}) }),
                    g() &&
                        u.jsxs(u.Fragment, {
                            children: [
                                u.jsx(Pt, {
                                    variant: 'ghost',
                                    size: 'icon',
                                    title: 'Back to Main',
                                    onClick: () => o('main'),
                                    children: u.jsx(w, {}),
                                }),
                                u.jsx(Pt, { variant: 'ghost', size: 'icon', className: 'window-close', onClick: c, children: u.jsx(R, {}) }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
async function Ys() {
    try {
        const l = window;
        if (l.require) {
            const { ipcRenderer: o } = l.require('electron'),
                r = await o.invoke('update-sizes');
            r.success ? console.log('Window resized for current view') : console.error('Failed to resize window:', r.error);
        }
    } catch (l) {
        console.error('Error resizing window:', l);
    }
}
const yg = h.forwardRef(({ className: l, type: o, ...r }, c) =>
    u.jsx('input', {
        type: o,
        className: Et(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            l
        ),
        ref: c,
        ...r,
    })
);
yg.displayName = 'Input';
const OS = ({ onStart: l, onAPIKeyHelp: o, isInitializing: r, onLayoutModeChange: c, showApiKeyError: f = !1 }) => {
        const [m, p] = h.useState(() => localStorage.getItem('apiKey') || ''),
            [v, y] = h.useState(f);
        (h.useEffect(() => {
            y(f);
        }, [f]),
            h.useEffect(() => {
                const R = (w, N) => {};
                return (
                    window.electron?.ipcRenderer?.on('session-initializing', R),
                    () => {
                        window.electron?.ipcRenderer?.removeAllListeners('session-initializing');
                    }
                );
            }, []),
            h.useEffect(() => {
                ((() => {
                    const w = localStorage.getItem('layoutMode');
                    w && w !== 'normal' && c(w);
                })(),
                    Ys());
            }, [c]));
        const g = h.useCallback(R => {
            (navigator.platform.toUpperCase().indexOf('MAC') >= 0 ? R.metaKey && R.key === 'Enter' : R.ctrlKey && R.key === 'Enter') &&
                (R.preventDefault(), x());
        }, []);
        h.useEffect(() => (document.addEventListener('keydown', g), () => document.removeEventListener('keydown', g)), [g]);
        const S = R => {
                const w = R.target.value;
                (p(w), localStorage.setItem('apiKey', w), v && y(!1));
            },
            x = () => {
                r || l();
            },
            T = () => {
                o();
            };
        h.useCallback(() => {
            (y(!0),
                setTimeout(() => {
                    y(!1);
                }, 1e3));
        }, []);
        const M = () => {
            const R = navigator.platform.toUpperCase().indexOf('MAC') >= 0,
                w = u.jsxs('svg', {
                    width: '14px',
                    height: '14px',
                    viewBox: '0 0 24 24',
                    strokeWidth: '2',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        u.jsx('path', { d: 'M9 6V18', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }),
                        u.jsx('path', { d: 'M15 6V18', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }),
                        u.jsx('path', {
                            d: 'M9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9H18C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                        }),
                        u.jsx('path', {
                            d: 'M9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15H18C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                        }),
                    ],
                }),
                N = u.jsxs('svg', {
                    width: '14px',
                    height: '14px',
                    strokeWidth: '2',
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        u.jsx('path', {
                            d: 'M10.25 19.25L6.75 15.75L10.25 12.25',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                        }),
                        u.jsx('path', {
                            d: 'M6.75 15.75H12.75C14.9591 15.75 16.75 13.9591 16.75 11.75V4.75',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                        }),
                    ],
                });
            return R
                ? u.jsxs(u.Fragment, { children: ['Start Session ', u.jsxs('span', { className: 'shortcut-icons', children: [w, N] })] })
                : u.jsxs(u.Fragment, { children: ['Start Session ', u.jsxs('span', { className: 'shortcut-icons', children: ['Ctrl', N] })] });
        };
        return u.jsx(u.Fragment, {
            children: u.jsxs('div', {
                className: 'main-view',
                children: [
                    u.jsx('div', { className: 'welcome', children: 'Welcome' }),
                    u.jsxs('div', {
                        className: 'input-group',
                        children: [
                            u.jsx(yg, {
                                type: 'password',
                                placeholder: 'Enter your Gemini API Key',
                                value: m,
                                onChange: S,
                                className: v ? 'api-key-error' : '',
                            }),
                            u.jsx(Pt, { onClick: x, className: `start-button ${r ? 'initializing' : ''}`, children: M() }),
                        ],
                    }),
                    u.jsxs('p', {
                        className: 'description',
                        children: ['dont have an api key?', u.jsx('span', { onClick: T, className: 'link', children: 'get one here' })],
                    }),
                ],
            }),
        });
    },
    kS = ({
        responses: l,
        currentResponseIndex: o,
        selectedProfile: r,
        onSendText: c,
        shouldAnimateResponse: f,
        savedResponses: m,
        onResponseIndexChanged: p,
        onStopSession: v,
    }) => {
        const [y, g] = h.useState(m),
            [S, x] = h.useState(0),
            T = h.useRef(null),
            M = h.useRef(null),
            R = h.useCallback(
                () => ({
                    interview: 'Job Interview',
                    sales: 'Sales Call',
                    meeting: 'Business Meeting',
                    presentation: 'Presentation',
                    negotiation: 'Negotiation',
                    exam: 'Exam Assistant',
                }),
                []
            ),
            w = h.useCallback(() => {
                const Q = R();
                return l.length > 0 && o >= 0 ? l[o] : `Hey, I'm listening to your ${Q[r] || 'session'}?`;
            }, [l, o, r, R]),
            N = h.useCallback(() => {
                const Q = localStorage.getItem('fontSize');
                if (Q !== null) {
                    const A = parseInt(Q, 10) || 20;
                    document.documentElement.style.setProperty('--response-font-size', `${A}px`);
                }
            }, []);
        (h.useEffect(() => {
            N();
        }, [N]),
            h.useEffect(() => {
                g(m);
            }, [m]));
        const L = h.useCallback(() => (l.length > 0 ? `${o + 1}/${l.length}` : ''), [l.length, o]),
            B = h.useCallback(() => {
                const Q = w();
                return y.some(A => A.response === Q);
            }, [w, y]),
            H = h.useCallback(() => {
                if (o > 0) {
                    const Q = o - 1;
                    p?.(Q);
                }
            }, [o, p]),
            K = h.useCallback(() => {
                if (o < l.length - 1) {
                    const Q = o + 1;
                    p?.(Q);
                }
            }, [o, l.length, p]),
            W = h.useCallback(() => {
                if (T.current) {
                    const Q = T.current,
                        A = Q.clientHeight * 0.3;
                    Q.scrollTop = Math.max(0, Q.scrollTop - A);
                }
            }, []),
            ne = h.useCallback(() => {
                if (T.current) {
                    const Q = T.current,
                        A = Q.clientHeight * 0.3;
                    Q.scrollTop = Math.min(Q.scrollHeight - Q.clientHeight, Q.scrollTop + A);
                }
            }, []);
        h.useEffect(() => {
            if (window.electron?.ipcRenderer) {
                const Q = window.electron.ipcRenderer,
                    A = () => {
                        (console.log('Received navigate-previous-response message'), H());
                    },
                    Y = () => {
                        (console.log('Received navigate-next-response message'), K());
                    },
                    z = () => {
                        (console.log('Received scroll-response-up message'), W());
                    },
                    te = () => {
                        (console.log('Received scroll-response-down message'), ne());
                    };
                return (
                    Q.on('navigate-previous-response', A),
                    Q.on('navigate-next-response', Y),
                    Q.on('scroll-response-up', z),
                    Q.on('scroll-response-down', te),
                    () => {
                        (Q.removeAllListeners('navigate-previous-response'),
                            Q.removeAllListeners('navigate-next-response'),
                            Q.removeAllListeners('scroll-response-up'),
                            Q.removeAllListeners('scroll-response-down'));
                    }
                );
            }
        }, [H, K, W, ne]);
        const k = h.useCallback(async () => {
                if (M.current && M.current.value.trim()) {
                    const Q = M.current.value.trim();
                    ((M.current.value = ''), await c(Q));
                }
            }, [c]),
            G = h.useCallback(
                Q => {
                    Q.key === 'Enter' && !Q.shiftKey && (Q.preventDefault(), k());
                },
                [k]
            ),
            ae = h.useCallback(() => {
                const Q = w();
                if (Q && !B()) {
                    const A = [...y, { response: Q, timestamp: new Date().toISOString(), profile: r }];
                    (g(A), localStorage.setItem('savedResponses', JSON.stringify(A)));
                }
            }, [w, B, y, r]);
        h.useCallback(() => {
            setTimeout(() => {
                T.current && (T.current.scrollTop = T.current.scrollHeight);
            }, 0);
        }, []);
        const ee = h.useCallback(Q => {
                if (typeof window < 'u' && window.marked)
                    try {
                        window.marked.setOptions({ breaks: !0, gfm: !0, sanitize: !1 });
                        let A = window.marked.parse(Q);
                        return ((A = he(A)), A);
                    } catch (A) {
                        return (console.warn('Error parsing markdown:', A), Q);
                    }
                return (console.log('Marked not available, using plain text'), Q);
            }, []),
            he = h.useCallback(Q => {
                const Y = new DOMParser().parseFromString(Q, 'text/html'),
                    z = ['PRE'];
                function te(de) {
                    if (de.nodeType === Node.TEXT_NODE && de.textContent?.trim() && !z.includes(de.parentNode?.tagName || '')) {
                        const E = de.textContent.split(/(\s+)/),
                            q = document.createDocumentFragment();
                        (E.forEach(F => {
                            if (F.trim()) {
                                const P = document.createElement('span');
                                (P.setAttribute('data-word', ''), (P.textContent = F), q.appendChild(P));
                            } else q.appendChild(document.createTextNode(F));
                        }),
                            de.parentNode.replaceChild(q, de));
                    } else de.nodeType === Node.ELEMENT_NODE && !z.includes(de.tagName) && Array.from(de.childNodes).forEach(te);
                }
                return (Array.from(Y.body.childNodes).forEach(te), Y.body.innerHTML);
            }, []),
            le = h.useCallback(() => {
                if ((console.log('updateResponseContent called'), T.current)) {
                    const Q = T.current,
                        A = w();
                    console.log('Current response:', A);
                    const Y = ee(A);
                    (console.log('Rendered response:', Y), (Q.innerHTML = Y));
                    const z = Q.querySelectorAll('[data-word]');
                    if (f) {
                        for (let te = 0; te < S && te < z.length; te++) z[te].classList.add('visible');
                        for (let te = S; te < z.length; te++)
                            (z[te].classList.remove('visible'),
                                setTimeout(
                                    () => {
                                        (z[te].classList.add('visible'), z.length - 1);
                                    },
                                    (te - S) * 100
                                ));
                        x(z.length);
                    } else (z.forEach(te => te.classList.add('visible')), x(z.length));
                } else console.log('Response container not found');
            }, [w, ee, f, S]);
        (h.useEffect(() => {
            (o !== -1 && x(0), le());
        }, [l, o, le]),
            h.useEffect(() => {
                le();
            }, [le]),
            w());
        const re = L(),
            ie = B();
        return u.jsx(u.Fragment, {
            children: u.jsxs('div', {
                className: 'assistant-view',
                children: [
                    u.jsx('div', { className: 'response-container', ref: T, id: 'responseContainer' }),
                    u.jsxs('div', {
                        className: 'text-input-container',
                        children: [
                            u.jsx('button', {
                                className: 'nav-button',
                                onClick: H,
                                disabled: o <= 0,
                                children: u.jsx('svg', {
                                    width: '24px',
                                    height: '24px',
                                    strokeWidth: '1.7',
                                    viewBox: '0 0 24 24',
                                    fill: 'none',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    color: '#ffffff',
                                    children: u.jsx('path', {
                                        d: 'M15 6L9 12L15 18',
                                        stroke: '#ffffff',
                                        strokeWidth: '1.7',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                    }),
                                }),
                            }),
                            l.length > 0 && u.jsx('span', { className: 'response-counter', children: re }),
                            u.jsx('button', {
                                className: `save-button ${ie ? 'saved' : ''}`,
                                onClick: ae,
                                title: ie ? 'Response saved' : 'Save this response',
                                children: u.jsxs('svg', {
                                    width: '24px',
                                    height: '24px',
                                    strokeWidth: '1.7',
                                    viewBox: '0 0 24 24',
                                    fill: 'none',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    children: [
                                        u.jsx('path', {
                                            d: 'M5 20V5C5 3.89543 5.89543 3 7 3H16.1716C16.702 3 17.2107 3.21071 17.5858 3.58579L19.4142 5.41421C19.7893 5.78929 20 6.29799 20 6.82843V20C20 21.1046 19.1046 22 18 22H7C5.89543 22 5 21 5 20Z',
                                            stroke: 'currentColor',
                                            strokeWidth: '1.7',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                        }),
                                        u.jsx('path', {
                                            d: 'M15 22V13H9V22',
                                            stroke: 'currentColor',
                                            strokeWidth: '1.7',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                        }),
                                        u.jsx('path', {
                                            d: 'M9 3V8H15',
                                            stroke: 'currentColor',
                                            strokeWidth: '1.7',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                        }),
                                    ],
                                }),
                            }),
                            v &&
                                u.jsx('button', {
                                    className: 'stop-session-button',
                                    onClick: v,
                                    title: 'Stop Session',
                                    children: u.jsx('svg', {
                                        width: '24px',
                                        height: '24px',
                                        strokeWidth: '1.7',
                                        viewBox: '0 0 24 24',
                                        fill: 'none',
                                        xmlns: 'http://www.w3.org/2000/svg',
                                        children: u.jsx('path', {
                                            d: 'M6 6L18 18M6 18L18 6',
                                            stroke: 'currentColor',
                                            strokeWidth: '1.7',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                        }),
                                    }),
                                }),
                            u.jsx('input', { ref: M, type: 'text', id: 'textInput', placeholder: 'Type a message to the AI...', onKeyDown: G }),
                            u.jsx('button', {
                                className: 'nav-button',
                                onClick: K,
                                disabled: o >= l.length - 1,
                                children: u.jsx('svg', {
                                    width: '24px',
                                    height: '24px',
                                    strokeWidth: '1.7',
                                    viewBox: '0 0 24 24',
                                    fill: 'none',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    color: '#ffffff',
                                    children: u.jsx('path', {
                                        d: 'M9 6L15 12L9 18',
                                        stroke: '#ffffff',
                                        strokeWidth: '1.7',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    };
var $i = ag();
const zS = tg($i);
function Rp(l, [o, r]) {
    return Math.min(r, Math.max(o, l));
}
function He(l, o, { checkForDefaultPrevented: r = !0 } = {}) {
    return function (f) {
        if ((l?.(f), r === !1 || !f.defaultPrevented)) return o?.(f);
    };
}
function Pi(l, o = []) {
    let r = [];
    function c(m, p) {
        const v = h.createContext(p),
            y = r.length;
        r = [...r, p];
        const g = x => {
            const { scope: T, children: M, ...R } = x,
                w = T?.[l]?.[y] || v,
                N = h.useMemo(() => R, Object.values(R));
            return u.jsx(w.Provider, { value: N, children: M });
        };
        g.displayName = m + 'Provider';
        function S(x, T) {
            const M = T?.[l]?.[y] || v,
                R = h.useContext(M);
            if (R) return R;
            if (p !== void 0) return p;
            throw new Error(`\`${x}\` must be used within \`${m}\``);
        }
        return [g, S];
    }
    const f = () => {
        const m = r.map(p => h.createContext(p));
        return function (v) {
            const y = v?.[l] || m;
            return h.useMemo(() => ({ [`__scope${l}`]: { ...v, [l]: y } }), [v, y]);
        };
    };
    return ((f.scopeName = l), [c, DS(f, ...o)]);
}
function DS(...l) {
    const o = l[0];
    if (l.length === 1) return o;
    const r = () => {
        const c = l.map(f => ({ useScope: f(), scopeName: f.scopeName }));
        return function (m) {
            const p = c.reduce((v, { useScope: y, scopeName: g }) => {
                const x = y(m)[`__scope${g}`];
                return { ...v, ...x };
            }, {});
            return h.useMemo(() => ({ [`__scope${o.scopeName}`]: p }), [p]);
        };
    };
    return ((r.scopeName = o.scopeName), r);
}
function bg(l) {
    const o = l + 'CollectionProvider',
        [r, c] = Pi(o),
        [f, m] = r(o, { collectionRef: { current: null }, itemMap: new Map() }),
        p = w => {
            const { scope: N, children: L } = w,
                B = qn.useRef(null),
                H = qn.useRef(new Map()).current;
            return u.jsx(f, { scope: N, itemMap: H, collectionRef: B, children: L });
        };
    p.displayName = o;
    const v = l + 'CollectionSlot',
        y = Ji(v),
        g = qn.forwardRef((w, N) => {
            const { scope: L, children: B } = w,
                H = m(v, L),
                K = ct(N, H.collectionRef);
            return u.jsx(y, { ref: K, children: B });
        });
    g.displayName = v;
    const S = l + 'CollectionItemSlot',
        x = 'data-radix-collection-item',
        T = Ji(S),
        M = qn.forwardRef((w, N) => {
            const { scope: L, children: B, ...H } = w,
                K = qn.useRef(null),
                W = ct(N, K),
                ne = m(S, L);
            return (
                qn.useEffect(() => (ne.itemMap.set(K, { ref: K, ...H }), () => void ne.itemMap.delete(K))),
                u.jsx(T, { [x]: '', ref: W, children: B })
            );
        });
    M.displayName = S;
    function R(w) {
        const N = m(l + 'CollectionConsumer', w);
        return qn.useCallback(() => {
            const B = N.collectionRef.current;
            if (!B) return [];
            const H = Array.from(B.querySelectorAll(`[${x}]`));
            return Array.from(N.itemMap.values()).sort((ne, k) => H.indexOf(ne.ref.current) - H.indexOf(k.ref.current));
        }, [N.collectionRef, N.itemMap]);
    }
    return [{ Provider: p, Slot: g, ItemSlot: M }, R, c];
}
var _S = h.createContext(void 0);
function Pu(l) {
    const o = h.useContext(_S);
    return l || o || 'ltr';
}
var LS = ['a', 'button', 'div', 'form', 'h2', 'h3', 'img', 'input', 'label', 'li', 'nav', 'ol', 'p', 'select', 'span', 'svg', 'ul'],
    Ye = LS.reduce((l, o) => {
        const r = Ji(`Primitive.${o}`),
            c = h.forwardRef((f, m) => {
                const { asChild: p, ...v } = f,
                    y = p ? r : o;
                return (typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0), u.jsx(y, { ...v, ref: m }));
            });
        return ((c.displayName = `Primitive.${o}`), { ...l, [o]: c });
    }, {});
function US(l, o) {
    l && $i.flushSync(() => l.dispatchEvent(o));
}
function ya(l) {
    const o = h.useRef(l);
    return (
        h.useEffect(() => {
            o.current = l;
        }),
        h.useMemo(
            () =>
                (...r) =>
                    o.current?.(...r),
            []
        )
    );
}
function BS(l, o = globalThis?.document) {
    const r = ya(l);
    h.useEffect(() => {
        const c = f => {
            f.key === 'Escape' && r(f);
        };
        return (o.addEventListener('keydown', c, { capture: !0 }), () => o.removeEventListener('keydown', c, { capture: !0 }));
    }, [r, o]);
}
var HS = 'DismissableLayer',
    Hu = 'dismissableLayer.update',
    VS = 'dismissableLayer.pointerDownOutside',
    GS = 'dismissableLayer.focusOutside',
    Op,
    Sg = h.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
    xg = h.forwardRef((l, o) => {
        const {
                disableOutsidePointerEvents: r = !1,
                onEscapeKeyDown: c,
                onPointerDownOutside: f,
                onFocusOutside: m,
                onInteractOutside: p,
                onDismiss: v,
                ...y
            } = l,
            g = h.useContext(Sg),
            [S, x] = h.useState(null),
            T = S?.ownerDocument ?? globalThis?.document,
            [, M] = h.useState({}),
            R = ct(o, k => x(k)),
            w = Array.from(g.layers),
            [N] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1),
            L = w.indexOf(N),
            B = S ? w.indexOf(S) : -1,
            H = g.layersWithOutsidePointerEventsDisabled.size > 0,
            K = B >= L,
            W = XS(k => {
                const G = k.target,
                    ae = [...g.branches].some(ee => ee.contains(G));
                !K || ae || (f?.(k), p?.(k), k.defaultPrevented || v?.());
            }, T),
            ne = KS(k => {
                const G = k.target;
                [...g.branches].some(ee => ee.contains(G)) || (m?.(k), p?.(k), k.defaultPrevented || v?.());
            }, T);
        return (
            BS(k => {
                B === g.layers.size - 1 && (c?.(k), !k.defaultPrevented && v && (k.preventDefault(), v()));
            }, T),
            h.useEffect(() => {
                if (S)
                    return (
                        r &&
                            (g.layersWithOutsidePointerEventsDisabled.size === 0 &&
                                ((Op = T.body.style.pointerEvents), (T.body.style.pointerEvents = 'none')),
                            g.layersWithOutsidePointerEventsDisabled.add(S)),
                        g.layers.add(S),
                        kp(),
                        () => {
                            r && g.layersWithOutsidePointerEventsDisabled.size === 1 && (T.body.style.pointerEvents = Op);
                        }
                    );
            }, [S, T, r, g]),
            h.useEffect(
                () => () => {
                    S && (g.layers.delete(S), g.layersWithOutsidePointerEventsDisabled.delete(S), kp());
                },
                [S, g]
            ),
            h.useEffect(() => {
                const k = () => M({});
                return (document.addEventListener(Hu, k), () => document.removeEventListener(Hu, k));
            }, []),
            u.jsx(Ye.div, {
                ...y,
                ref: R,
                style: { pointerEvents: H ? (K ? 'auto' : 'none') : void 0, ...l.style },
                onFocusCapture: He(l.onFocusCapture, ne.onFocusCapture),
                onBlurCapture: He(l.onBlurCapture, ne.onBlurCapture),
                onPointerDownCapture: He(l.onPointerDownCapture, W.onPointerDownCapture),
            })
        );
    });
xg.displayName = HS;
var qS = 'DismissableLayerBranch',
    YS = h.forwardRef((l, o) => {
        const r = h.useContext(Sg),
            c = h.useRef(null),
            f = ct(o, c);
        return (
            h.useEffect(() => {
                const m = c.current;
                if (m)
                    return (
                        r.branches.add(m),
                        () => {
                            r.branches.delete(m);
                        }
                    );
            }, [r.branches]),
            u.jsx(Ye.div, { ...l, ref: f })
        );
    });
YS.displayName = qS;
function XS(l, o = globalThis?.document) {
    const r = ya(l),
        c = h.useRef(!1),
        f = h.useRef(() => {});
    return (
        h.useEffect(() => {
            const m = v => {
                    if (v.target && !c.current) {
                        let y = function () {
                            wg(VS, r, g, { discrete: !0 });
                        };
                        const g = { originalEvent: v };
                        v.pointerType === 'touch'
                            ? (o.removeEventListener('click', f.current), (f.current = y), o.addEventListener('click', f.current, { once: !0 }))
                            : y();
                    } else o.removeEventListener('click', f.current);
                    c.current = !1;
                },
                p = window.setTimeout(() => {
                    o.addEventListener('pointerdown', m);
                }, 0);
            return () => {
                (window.clearTimeout(p), o.removeEventListener('pointerdown', m), o.removeEventListener('click', f.current));
            };
        }, [o, r]),
        { onPointerDownCapture: () => (c.current = !0) }
    );
}
function KS(l, o = globalThis?.document) {
    const r = ya(l),
        c = h.useRef(!1);
    return (
        h.useEffect(() => {
            const f = m => {
                m.target && !c.current && wg(GS, r, { originalEvent: m }, { discrete: !1 });
            };
            return (o.addEventListener('focusin', f), () => o.removeEventListener('focusin', f));
        }, [o, r]),
        { onFocusCapture: () => (c.current = !0), onBlurCapture: () => (c.current = !1) }
    );
}
function kp() {
    const l = new CustomEvent(Hu);
    document.dispatchEvent(l);
}
function wg(l, o, r, { discrete: c }) {
    const f = r.originalEvent.target,
        m = new CustomEvent(l, { bubbles: !1, cancelable: !0, detail: r });
    (o && f.addEventListener(l, o, { once: !0 }), c ? US(f, m) : f.dispatchEvent(m));
}
var Tu = 0;
function QS() {
    h.useEffect(() => {
        const l = document.querySelectorAll('[data-radix-focus-guard]');
        return (
            document.body.insertAdjacentElement('afterbegin', l[0] ?? zp()),
            document.body.insertAdjacentElement('beforeend', l[1] ?? zp()),
            Tu++,
            () => {
                (Tu === 1 && document.querySelectorAll('[data-radix-focus-guard]').forEach(o => o.remove()), Tu--);
            }
        );
    }, []);
}
function zp() {
    const l = document.createElement('span');
    return (
        l.setAttribute('data-radix-focus-guard', ''),
        (l.tabIndex = 0),
        (l.style.outline = 'none'),
        (l.style.opacity = '0'),
        (l.style.position = 'fixed'),
        (l.style.pointerEvents = 'none'),
        l
    );
}
var Au = 'focusScope.autoFocusOnMount',
    Nu = 'focusScope.autoFocusOnUnmount',
    Dp = { bubbles: !1, cancelable: !0 },
    ZS = 'FocusScope',
    Cg = h.forwardRef((l, o) => {
        const { loop: r = !1, trapped: c = !1, onMountAutoFocus: f, onUnmountAutoFocus: m, ...p } = l,
            [v, y] = h.useState(null),
            g = ya(f),
            S = ya(m),
            x = h.useRef(null),
            T = ct(o, w => y(w)),
            M = h.useRef({
                paused: !1,
                pause() {
                    this.paused = !0;
                },
                resume() {
                    this.paused = !1;
                },
            }).current;
        (h.useEffect(() => {
            if (c) {
                let w = function (H) {
                        if (M.paused || !v) return;
                        const K = H.target;
                        v.contains(K) ? (x.current = K) : va(x.current, { select: !0 });
                    },
                    N = function (H) {
                        if (M.paused || !v) return;
                        const K = H.relatedTarget;
                        K !== null && (v.contains(K) || va(x.current, { select: !0 }));
                    },
                    L = function (H) {
                        if (document.activeElement === document.body) for (const W of H) W.removedNodes.length > 0 && va(v);
                    };
                (document.addEventListener('focusin', w), document.addEventListener('focusout', N));
                const B = new MutationObserver(L);
                return (
                    v && B.observe(v, { childList: !0, subtree: !0 }),
                    () => {
                        (document.removeEventListener('focusin', w), document.removeEventListener('focusout', N), B.disconnect());
                    }
                );
            }
        }, [c, v, M.paused]),
            h.useEffect(() => {
                if (v) {
                    Lp.add(M);
                    const w = document.activeElement;
                    if (!v.contains(w)) {
                        const L = new CustomEvent(Au, Dp);
                        (v.addEventListener(Au, g),
                            v.dispatchEvent(L),
                            L.defaultPrevented || (IS(PS(Eg(v)), { select: !0 }), document.activeElement === w && va(v)));
                    }
                    return () => {
                        (v.removeEventListener(Au, g),
                            setTimeout(() => {
                                const L = new CustomEvent(Nu, Dp);
                                (v.addEventListener(Nu, S),
                                    v.dispatchEvent(L),
                                    L.defaultPrevented || va(w ?? document.body, { select: !0 }),
                                    v.removeEventListener(Nu, S),
                                    Lp.remove(M));
                            }, 0));
                    };
                }
            }, [v, g, S, M]));
        const R = h.useCallback(
            w => {
                if ((!r && !c) || M.paused) return;
                const N = w.key === 'Tab' && !w.altKey && !w.ctrlKey && !w.metaKey,
                    L = document.activeElement;
                if (N && L) {
                    const B = w.currentTarget,
                        [H, K] = JS(B);
                    H && K
                        ? !w.shiftKey && L === K
                            ? (w.preventDefault(), r && va(H, { select: !0 }))
                            : w.shiftKey && L === H && (w.preventDefault(), r && va(K, { select: !0 }))
                        : L === B && w.preventDefault();
                }
            },
            [r, c, M.paused]
        );
        return u.jsx(Ye.div, { tabIndex: -1, ...p, ref: T, onKeyDown: R });
    });
Cg.displayName = ZS;
function IS(l, { select: o = !1 } = {}) {
    const r = document.activeElement;
    for (const c of l) if ((va(c, { select: o }), document.activeElement !== r)) return;
}
function JS(l) {
    const o = Eg(l),
        r = _p(o, l),
        c = _p(o.reverse(), l);
    return [r, c];
}
function Eg(l) {
    const o = [],
        r = document.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, {
            acceptNode: c => {
                const f = c.tagName === 'INPUT' && c.type === 'hidden';
                return c.disabled || c.hidden || f ? NodeFilter.FILTER_SKIP : c.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
            },
        });
    for (; r.nextNode(); ) o.push(r.currentNode);
    return o;
}
function _p(l, o) {
    for (const r of l) if (!WS(r, { upTo: o })) return r;
}
function WS(l, { upTo: o }) {
    if (getComputedStyle(l).visibility === 'hidden') return !0;
    for (; l; ) {
        if (o !== void 0 && l === o) return !1;
        if (getComputedStyle(l).display === 'none') return !0;
        l = l.parentElement;
    }
    return !1;
}
function FS(l) {
    return l instanceof HTMLInputElement && 'select' in l;
}
function va(l, { select: o = !1 } = {}) {
    if (l && l.focus) {
        const r = document.activeElement;
        (l.focus({ preventScroll: !0 }), l !== r && FS(l) && o && l.select());
    }
}
var Lp = $S();
function $S() {
    let l = [];
    return {
        add(o) {
            const r = l[0];
            (o !== r && r?.pause(), (l = Up(l, o)), l.unshift(o));
        },
        remove(o) {
            ((l = Up(l, o)), l[0]?.resume());
        },
    };
}
function Up(l, o) {
    const r = [...l],
        c = r.indexOf(o);
    return (c !== -1 && r.splice(c, 1), r);
}
function PS(l) {
    return l.filter(o => o.tagName !== 'A');
}
var bt = globalThis?.document ? h.useLayoutEffect : () => {},
    e1 = ng[' useId '.trim().toString()] || (() => {}),
    t1 = 0;
function eo(l) {
    const [o, r] = h.useState(e1());
    return (
        bt(() => {
            r(c => c ?? String(t1++));
        }, [l]),
        o ? `radix-${o}` : ''
    );
}
const n1 = ['top', 'right', 'bottom', 'left'],
    ba = Math.min,
    Gt = Math.max,
    Us = Math.round,
    As = Math.floor,
    bn = l => ({ x: l, y: l }),
    a1 = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
    l1 = { start: 'end', end: 'start' };
function Vu(l, o, r) {
    return Gt(l, ba(o, r));
}
function Yn(l, o) {
    return typeof l == 'function' ? l(o) : l;
}
function Xn(l) {
    return l.split('-')[0];
}
function Xl(l) {
    return l.split('-')[1];
}
function ef(l) {
    return l === 'x' ? 'y' : 'x';
}
function tf(l) {
    return l === 'y' ? 'height' : 'width';
}
const i1 = new Set(['top', 'bottom']);
function yn(l) {
    return i1.has(Xn(l)) ? 'y' : 'x';
}
function nf(l) {
    return ef(yn(l));
}
function o1(l, o, r) {
    r === void 0 && (r = !1);
    const c = Xl(l),
        f = nf(l),
        m = tf(f);
    let p = f === 'x' ? (c === (r ? 'end' : 'start') ? 'right' : 'left') : c === 'start' ? 'bottom' : 'top';
    return (o.reference[m] > o.floating[m] && (p = Bs(p)), [p, Bs(p)]);
}
function s1(l) {
    const o = Bs(l);
    return [Gu(l), o, Gu(o)];
}
function Gu(l) {
    return l.replace(/start|end/g, o => l1[o]);
}
const Bp = ['left', 'right'],
    Hp = ['right', 'left'],
    r1 = ['top', 'bottom'],
    c1 = ['bottom', 'top'];
function u1(l, o, r) {
    switch (l) {
        case 'top':
        case 'bottom':
            return r ? (o ? Hp : Bp) : o ? Bp : Hp;
        case 'left':
        case 'right':
            return o ? r1 : c1;
        default:
            return [];
    }
}
function f1(l, o, r, c) {
    const f = Xl(l);
    let m = u1(Xn(l), r === 'start', c);
    return (f && ((m = m.map(p => p + '-' + f)), o && (m = m.concat(m.map(Gu)))), m);
}
function Bs(l) {
    return l.replace(/left|right|bottom|top/g, o => a1[o]);
}
function d1(l) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...l };
}
function Tg(l) {
    return typeof l != 'number' ? d1(l) : { top: l, right: l, bottom: l, left: l };
}
function Hs(l) {
    const { x: o, y: r, width: c, height: f } = l;
    return { width: c, height: f, top: r, left: o, right: o + c, bottom: r + f, x: o, y: r };
}
function Vp(l, o, r) {
    let { reference: c, floating: f } = l;
    const m = yn(o),
        p = nf(o),
        v = tf(p),
        y = Xn(o),
        g = m === 'y',
        S = c.x + c.width / 2 - f.width / 2,
        x = c.y + c.height / 2 - f.height / 2,
        T = c[v] / 2 - f[v] / 2;
    let M;
    switch (y) {
        case 'top':
            M = { x: S, y: c.y - f.height };
            break;
        case 'bottom':
            M = { x: S, y: c.y + c.height };
            break;
        case 'right':
            M = { x: c.x + c.width, y: x };
            break;
        case 'left':
            M = { x: c.x - f.width, y: x };
            break;
        default:
            M = { x: c.x, y: c.y };
    }
    switch (Xl(o)) {
        case 'start':
            M[p] -= T * (r && g ? -1 : 1);
            break;
        case 'end':
            M[p] += T * (r && g ? -1 : 1);
            break;
    }
    return M;
}
const m1 = async (l, o, r) => {
    const { placement: c = 'bottom', strategy: f = 'absolute', middleware: m = [], platform: p } = r,
        v = m.filter(Boolean),
        y = await (p.isRTL == null ? void 0 : p.isRTL(o));
    let g = await p.getElementRects({ reference: l, floating: o, strategy: f }),
        { x: S, y: x } = Vp(g, c, y),
        T = c,
        M = {},
        R = 0;
    for (let w = 0; w < v.length; w++) {
        const { name: N, fn: L } = v[w],
            {
                x: B,
                y: H,
                data: K,
                reset: W,
            } = await L({
                x: S,
                y: x,
                initialPlacement: c,
                placement: T,
                strategy: f,
                middlewareData: M,
                rects: g,
                platform: p,
                elements: { reference: l, floating: o },
            });
        ((S = B ?? S),
            (x = H ?? x),
            (M = { ...M, [N]: { ...M[N], ...K } }),
            W &&
                R <= 50 &&
                (R++,
                typeof W == 'object' &&
                    (W.placement && (T = W.placement),
                    W.rects && (g = W.rects === !0 ? await p.getElementRects({ reference: l, floating: o, strategy: f }) : W.rects),
                    ({ x: S, y: x } = Vp(g, T, y))),
                (w = -1)));
    }
    return { x: S, y: x, placement: T, strategy: f, middlewareData: M };
};
async function Wi(l, o) {
    var r;
    o === void 0 && (o = {});
    const { x: c, y: f, platform: m, rects: p, elements: v, strategy: y } = l,
        {
            boundary: g = 'clippingAncestors',
            rootBoundary: S = 'viewport',
            elementContext: x = 'floating',
            altBoundary: T = !1,
            padding: M = 0,
        } = Yn(o, l),
        R = Tg(M),
        N = v[T ? (x === 'floating' ? 'reference' : 'floating') : x],
        L = Hs(
            await m.getClippingRect({
                element:
                    (r = await (m.isElement == null ? void 0 : m.isElement(N))) == null || r
                        ? N
                        : N.contextElement || (await (m.getDocumentElement == null ? void 0 : m.getDocumentElement(v.floating))),
                boundary: g,
                rootBoundary: S,
                strategy: y,
            })
        ),
        B = x === 'floating' ? { x: c, y: f, width: p.floating.width, height: p.floating.height } : p.reference,
        H = await (m.getOffsetParent == null ? void 0 : m.getOffsetParent(v.floating)),
        K = (await (m.isElement == null ? void 0 : m.isElement(H)))
            ? (await (m.getScale == null ? void 0 : m.getScale(H))) || { x: 1, y: 1 }
            : { x: 1, y: 1 },
        W = Hs(
            m.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await m.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: v, rect: B, offsetParent: H, strategy: y })
                : B
        );
    return {
        top: (L.top - W.top + R.top) / K.y,
        bottom: (W.bottom - L.bottom + R.bottom) / K.y,
        left: (L.left - W.left + R.left) / K.x,
        right: (W.right - L.right + R.right) / K.x,
    };
}
const h1 = l => ({
        name: 'arrow',
        options: l,
        async fn(o) {
            const { x: r, y: c, placement: f, rects: m, platform: p, elements: v, middlewareData: y } = o,
                { element: g, padding: S = 0 } = Yn(l, o) || {};
            if (g == null) return {};
            const x = Tg(S),
                T = { x: r, y: c },
                M = nf(f),
                R = tf(M),
                w = await p.getDimensions(g),
                N = M === 'y',
                L = N ? 'top' : 'left',
                B = N ? 'bottom' : 'right',
                H = N ? 'clientHeight' : 'clientWidth',
                K = m.reference[R] + m.reference[M] - T[M] - m.floating[R],
                W = T[M] - m.reference[M],
                ne = await (p.getOffsetParent == null ? void 0 : p.getOffsetParent(g));
            let k = ne ? ne[H] : 0;
            (!k || !(await (p.isElement == null ? void 0 : p.isElement(ne)))) && (k = v.floating[H] || m.floating[R]);
            const G = K / 2 - W / 2,
                ae = k / 2 - w[R] / 2 - 1,
                ee = ba(x[L], ae),
                he = ba(x[B], ae),
                le = ee,
                re = k - w[R] - he,
                ie = k / 2 - w[R] / 2 + G,
                Q = Vu(le, ie, re),
                A = !y.arrow && Xl(f) != null && ie !== Q && m.reference[R] / 2 - (ie < le ? ee : he) - w[R] / 2 < 0,
                Y = A ? (ie < le ? ie - le : ie - re) : 0;
            return { [M]: T[M] + Y, data: { [M]: Q, centerOffset: ie - Q - Y, ...(A && { alignmentOffset: Y }) }, reset: A };
        },
    }),
    p1 = function (l) {
        return (
            l === void 0 && (l = {}),
            {
                name: 'flip',
                options: l,
                async fn(o) {
                    var r, c;
                    const { placement: f, middlewareData: m, rects: p, initialPlacement: v, platform: y, elements: g } = o,
                        {
                            mainAxis: S = !0,
                            crossAxis: x = !0,
                            fallbackPlacements: T,
                            fallbackStrategy: M = 'bestFit',
                            fallbackAxisSideDirection: R = 'none',
                            flipAlignment: w = !0,
                            ...N
                        } = Yn(l, o);
                    if ((r = m.arrow) != null && r.alignmentOffset) return {};
                    const L = Xn(f),
                        B = yn(v),
                        H = Xn(v) === v,
                        K = await (y.isRTL == null ? void 0 : y.isRTL(g.floating)),
                        W = T || (H || !w ? [Bs(v)] : s1(v)),
                        ne = R !== 'none';
                    !T && ne && W.push(...f1(v, w, R, K));
                    const k = [v, ...W],
                        G = await Wi(o, N),
                        ae = [];
                    let ee = ((c = m.flip) == null ? void 0 : c.overflows) || [];
                    if ((S && ae.push(G[L]), x)) {
                        const ie = o1(f, p, K);
                        ae.push(G[ie[0]], G[ie[1]]);
                    }
                    if (((ee = [...ee, { placement: f, overflows: ae }]), !ae.every(ie => ie <= 0))) {
                        var he, le;
                        const ie = (((he = m.flip) == null ? void 0 : he.index) || 0) + 1,
                            Q = k[ie];
                        if (Q && (!(x === 'alignment' ? B !== yn(Q) : !1) || ee.every(z => (yn(z.placement) === B ? z.overflows[0] > 0 : !0))))
                            return { data: { index: ie, overflows: ee }, reset: { placement: Q } };
                        let A =
                            (le = ee.filter(Y => Y.overflows[0] <= 0).sort((Y, z) => Y.overflows[1] - z.overflows[1])[0]) == null
                                ? void 0
                                : le.placement;
                        if (!A)
                            switch (M) {
                                case 'bestFit': {
                                    var re;
                                    const Y =
                                        (re = ee
                                            .filter(z => {
                                                if (ne) {
                                                    const te = yn(z.placement);
                                                    return te === B || te === 'y';
                                                }
                                                return !0;
                                            })
                                            .map(z => [z.placement, z.overflows.filter(te => te > 0).reduce((te, de) => te + de, 0)])
                                            .sort((z, te) => z[1] - te[1])[0]) == null
                                            ? void 0
                                            : re[0];
                                    Y && (A = Y);
                                    break;
                                }
                                case 'initialPlacement':
                                    A = v;
                                    break;
                            }
                        if (f !== A) return { reset: { placement: A } };
                    }
                    return {};
                },
            }
        );
    };
function Gp(l, o) {
    return { top: l.top - o.height, right: l.right - o.width, bottom: l.bottom - o.height, left: l.left - o.width };
}
function qp(l) {
    return n1.some(o => l[o] >= 0);
}
const g1 = function (l) {
        return (
            l === void 0 && (l = {}),
            {
                name: 'hide',
                options: l,
                async fn(o) {
                    const { rects: r } = o,
                        { strategy: c = 'referenceHidden', ...f } = Yn(l, o);
                    switch (c) {
                        case 'referenceHidden': {
                            const m = await Wi(o, { ...f, elementContext: 'reference' }),
                                p = Gp(m, r.reference);
                            return { data: { referenceHiddenOffsets: p, referenceHidden: qp(p) } };
                        }
                        case 'escaped': {
                            const m = await Wi(o, { ...f, altBoundary: !0 }),
                                p = Gp(m, r.floating);
                            return { data: { escapedOffsets: p, escaped: qp(p) } };
                        }
                        default:
                            return {};
                    }
                },
            }
        );
    },
    Ag = new Set(['left', 'top']);
async function v1(l, o) {
    const { placement: r, platform: c, elements: f } = l,
        m = await (c.isRTL == null ? void 0 : c.isRTL(f.floating)),
        p = Xn(r),
        v = Xl(r),
        y = yn(r) === 'y',
        g = Ag.has(p) ? -1 : 1,
        S = m && y ? -1 : 1,
        x = Yn(o, l);
    let {
        mainAxis: T,
        crossAxis: M,
        alignmentAxis: R,
    } = typeof x == 'number'
        ? { mainAxis: x, crossAxis: 0, alignmentAxis: null }
        : { mainAxis: x.mainAxis || 0, crossAxis: x.crossAxis || 0, alignmentAxis: x.alignmentAxis };
    return (v && typeof R == 'number' && (M = v === 'end' ? R * -1 : R), y ? { x: M * S, y: T * g } : { x: T * g, y: M * S });
}
const y1 = function (l) {
        return (
            l === void 0 && (l = 0),
            {
                name: 'offset',
                options: l,
                async fn(o) {
                    var r, c;
                    const { x: f, y: m, placement: p, middlewareData: v } = o,
                        y = await v1(o, l);
                    return p === ((r = v.offset) == null ? void 0 : r.placement) && (c = v.arrow) != null && c.alignmentOffset
                        ? {}
                        : { x: f + y.x, y: m + y.y, data: { ...y, placement: p } };
                },
            }
        );
    },
    b1 = function (l) {
        return (
            l === void 0 && (l = {}),
            {
                name: 'shift',
                options: l,
                async fn(o) {
                    const { x: r, y: c, placement: f } = o,
                        {
                            mainAxis: m = !0,
                            crossAxis: p = !1,
                            limiter: v = {
                                fn: N => {
                                    let { x: L, y: B } = N;
                                    return { x: L, y: B };
                                },
                            },
                            ...y
                        } = Yn(l, o),
                        g = { x: r, y: c },
                        S = await Wi(o, y),
                        x = yn(Xn(f)),
                        T = ef(x);
                    let M = g[T],
                        R = g[x];
                    if (m) {
                        const N = T === 'y' ? 'top' : 'left',
                            L = T === 'y' ? 'bottom' : 'right',
                            B = M + S[N],
                            H = M - S[L];
                        M = Vu(B, M, H);
                    }
                    if (p) {
                        const N = x === 'y' ? 'top' : 'left',
                            L = x === 'y' ? 'bottom' : 'right',
                            B = R + S[N],
                            H = R - S[L];
                        R = Vu(B, R, H);
                    }
                    const w = v.fn({ ...o, [T]: M, [x]: R });
                    return { ...w, data: { x: w.x - r, y: w.y - c, enabled: { [T]: m, [x]: p } } };
                },
            }
        );
    },
    S1 = function (l) {
        return (
            l === void 0 && (l = {}),
            {
                options: l,
                fn(o) {
                    const { x: r, y: c, placement: f, rects: m, middlewareData: p } = o,
                        { offset: v = 0, mainAxis: y = !0, crossAxis: g = !0 } = Yn(l, o),
                        S = { x: r, y: c },
                        x = yn(f),
                        T = ef(x);
                    let M = S[T],
                        R = S[x];
                    const w = Yn(v, o),
                        N = typeof w == 'number' ? { mainAxis: w, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...w };
                    if (y) {
                        const H = T === 'y' ? 'height' : 'width',
                            K = m.reference[T] - m.floating[H] + N.mainAxis,
                            W = m.reference[T] + m.reference[H] - N.mainAxis;
                        M < K ? (M = K) : M > W && (M = W);
                    }
                    if (g) {
                        var L, B;
                        const H = T === 'y' ? 'width' : 'height',
                            K = Ag.has(Xn(f)),
                            W = m.reference[x] - m.floating[H] + ((K && ((L = p.offset) == null ? void 0 : L[x])) || 0) + (K ? 0 : N.crossAxis),
                            ne = m.reference[x] + m.reference[H] + (K ? 0 : ((B = p.offset) == null ? void 0 : B[x]) || 0) - (K ? N.crossAxis : 0);
                        R < W ? (R = W) : R > ne && (R = ne);
                    }
                    return { [T]: M, [x]: R };
                },
            }
        );
    },
    x1 = function (l) {
        return (
            l === void 0 && (l = {}),
            {
                name: 'size',
                options: l,
                async fn(o) {
                    var r, c;
                    const { placement: f, rects: m, platform: p, elements: v } = o,
                        { apply: y = () => {}, ...g } = Yn(l, o),
                        S = await Wi(o, g),
                        x = Xn(f),
                        T = Xl(f),
                        M = yn(f) === 'y',
                        { width: R, height: w } = m.floating;
                    let N, L;
                    x === 'top' || x === 'bottom'
                        ? ((N = x), (L = T === ((await (p.isRTL == null ? void 0 : p.isRTL(v.floating))) ? 'start' : 'end') ? 'left' : 'right'))
                        : ((L = x), (N = T === 'end' ? 'top' : 'bottom'));
                    const B = w - S.top - S.bottom,
                        H = R - S.left - S.right,
                        K = ba(w - S[N], B),
                        W = ba(R - S[L], H),
                        ne = !o.middlewareData.shift;
                    let k = K,
                        G = W;
                    if (
                        ((r = o.middlewareData.shift) != null && r.enabled.x && (G = H),
                        (c = o.middlewareData.shift) != null && c.enabled.y && (k = B),
                        ne && !T)
                    ) {
                        const ee = Gt(S.left, 0),
                            he = Gt(S.right, 0),
                            le = Gt(S.top, 0),
                            re = Gt(S.bottom, 0);
                        M
                            ? (G = R - 2 * (ee !== 0 || he !== 0 ? ee + he : Gt(S.left, S.right)))
                            : (k = w - 2 * (le !== 0 || re !== 0 ? le + re : Gt(S.top, S.bottom)));
                    }
                    await y({ ...o, availableWidth: G, availableHeight: k });
                    const ae = await p.getDimensions(v.floating);
                    return R !== ae.width || w !== ae.height ? { reset: { rects: !0 } } : {};
                },
            }
        );
    };
function Xs() {
    return typeof window < 'u';
}
function Kl(l) {
    return Ng(l) ? (l.nodeName || '').toLowerCase() : '#document';
}
function qt(l) {
    var o;
    return (l == null || (o = l.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function xn(l) {
    var o;
    return (o = (Ng(l) ? l.ownerDocument : l.document) || window.document) == null ? void 0 : o.documentElement;
}
function Ng(l) {
    return Xs() ? l instanceof Node || l instanceof qt(l).Node : !1;
}
function fn(l) {
    return Xs() ? l instanceof Element || l instanceof qt(l).Element : !1;
}
function Sn(l) {
    return Xs() ? l instanceof HTMLElement || l instanceof qt(l).HTMLElement : !1;
}
function Yp(l) {
    return !Xs() || typeof ShadowRoot > 'u' ? !1 : l instanceof ShadowRoot || l instanceof qt(l).ShadowRoot;
}
const w1 = new Set(['inline', 'contents']);
function to(l) {
    const { overflow: o, overflowX: r, overflowY: c, display: f } = dn(l);
    return /auto|scroll|overlay|hidden|clip/.test(o + c + r) && !w1.has(f);
}
const C1 = new Set(['table', 'td', 'th']);
function E1(l) {
    return C1.has(Kl(l));
}
const T1 = [':popover-open', ':modal'];
function Ks(l) {
    return T1.some(o => {
        try {
            return l.matches(o);
        } catch {
            return !1;
        }
    });
}
const A1 = ['transform', 'translate', 'scale', 'rotate', 'perspective'],
    N1 = ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'],
    j1 = ['paint', 'layout', 'strict', 'content'];
function af(l) {
    const o = lf(),
        r = fn(l) ? dn(l) : l;
    return (
        A1.some(c => (r[c] ? r[c] !== 'none' : !1)) ||
        (r.containerType ? r.containerType !== 'normal' : !1) ||
        (!o && (r.backdropFilter ? r.backdropFilter !== 'none' : !1)) ||
        (!o && (r.filter ? r.filter !== 'none' : !1)) ||
        N1.some(c => (r.willChange || '').includes(c)) ||
        j1.some(c => (r.contain || '').includes(c))
    );
}
function M1(l) {
    let o = Sa(l);
    for (; Sn(o) && !Vl(o); ) {
        if (af(o)) return o;
        if (Ks(o)) return null;
        o = Sa(o);
    }
    return null;
}
function lf() {
    return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none');
}
const R1 = new Set(['html', 'body', '#document']);
function Vl(l) {
    return R1.has(Kl(l));
}
function dn(l) {
    return qt(l).getComputedStyle(l);
}
function Qs(l) {
    return fn(l) ? { scrollLeft: l.scrollLeft, scrollTop: l.scrollTop } : { scrollLeft: l.scrollX, scrollTop: l.scrollY };
}
function Sa(l) {
    if (Kl(l) === 'html') return l;
    const o = l.assignedSlot || l.parentNode || (Yp(l) && l.host) || xn(l);
    return Yp(o) ? o.host : o;
}
function jg(l) {
    const o = Sa(l);
    return Vl(o) ? (l.ownerDocument ? l.ownerDocument.body : l.body) : Sn(o) && to(o) ? o : jg(o);
}
function Fi(l, o, r) {
    var c;
    (o === void 0 && (o = []), r === void 0 && (r = !0));
    const f = jg(l),
        m = f === ((c = l.ownerDocument) == null ? void 0 : c.body),
        p = qt(f);
    if (m) {
        const v = qu(p);
        return o.concat(p, p.visualViewport || [], to(f) ? f : [], v && r ? Fi(v) : []);
    }
    return o.concat(f, Fi(f, [], r));
}
function qu(l) {
    return l.parent && Object.getPrototypeOf(l.parent) ? l.frameElement : null;
}
function Mg(l) {
    const o = dn(l);
    let r = parseFloat(o.width) || 0,
        c = parseFloat(o.height) || 0;
    const f = Sn(l),
        m = f ? l.offsetWidth : r,
        p = f ? l.offsetHeight : c,
        v = Us(r) !== m || Us(c) !== p;
    return (v && ((r = m), (c = p)), { width: r, height: c, $: v });
}
function of(l) {
    return fn(l) ? l : l.contextElement;
}
function Bl(l) {
    const o = of(l);
    if (!Sn(o)) return bn(1);
    const r = o.getBoundingClientRect(),
        { width: c, height: f, $: m } = Mg(o);
    let p = (m ? Us(r.width) : r.width) / c,
        v = (m ? Us(r.height) : r.height) / f;
    return ((!p || !Number.isFinite(p)) && (p = 1), (!v || !Number.isFinite(v)) && (v = 1), { x: p, y: v });
}
const O1 = bn(0);
function Rg(l) {
    const o = qt(l);
    return !lf() || !o.visualViewport ? O1 : { x: o.visualViewport.offsetLeft, y: o.visualViewport.offsetTop };
}
function k1(l, o, r) {
    return (o === void 0 && (o = !1), !r || (o && r !== qt(l)) ? !1 : o);
}
function Ka(l, o, r, c) {
    (o === void 0 && (o = !1), r === void 0 && (r = !1));
    const f = l.getBoundingClientRect(),
        m = of(l);
    let p = bn(1);
    o && (c ? fn(c) && (p = Bl(c)) : (p = Bl(l)));
    const v = k1(m, r, c) ? Rg(m) : bn(0);
    let y = (f.left + v.x) / p.x,
        g = (f.top + v.y) / p.y,
        S = f.width / p.x,
        x = f.height / p.y;
    if (m) {
        const T = qt(m),
            M = c && fn(c) ? qt(c) : c;
        let R = T,
            w = qu(R);
        for (; w && c && M !== R; ) {
            const N = Bl(w),
                L = w.getBoundingClientRect(),
                B = dn(w),
                H = L.left + (w.clientLeft + parseFloat(B.paddingLeft)) * N.x,
                K = L.top + (w.clientTop + parseFloat(B.paddingTop)) * N.y;
            ((y *= N.x), (g *= N.y), (S *= N.x), (x *= N.y), (y += H), (g += K), (R = qt(w)), (w = qu(R)));
        }
    }
    return Hs({ width: S, height: x, x: y, y: g });
}
function Zs(l, o) {
    const r = Qs(l).scrollLeft;
    return o ? o.left + r : Ka(xn(l)).left + r;
}
function Og(l, o) {
    const r = l.getBoundingClientRect(),
        c = r.left + o.scrollLeft - Zs(l, r),
        f = r.top + o.scrollTop;
    return { x: c, y: f };
}
function z1(l) {
    let { elements: o, rect: r, offsetParent: c, strategy: f } = l;
    const m = f === 'fixed',
        p = xn(c),
        v = o ? Ks(o.floating) : !1;
    if (c === p || (v && m)) return r;
    let y = { scrollLeft: 0, scrollTop: 0 },
        g = bn(1);
    const S = bn(0),
        x = Sn(c);
    if ((x || (!x && !m)) && ((Kl(c) !== 'body' || to(p)) && (y = Qs(c)), Sn(c))) {
        const M = Ka(c);
        ((g = Bl(c)), (S.x = M.x + c.clientLeft), (S.y = M.y + c.clientTop));
    }
    const T = p && !x && !m ? Og(p, y) : bn(0);
    return {
        width: r.width * g.x,
        height: r.height * g.y,
        x: r.x * g.x - y.scrollLeft * g.x + S.x + T.x,
        y: r.y * g.y - y.scrollTop * g.y + S.y + T.y,
    };
}
function D1(l) {
    return Array.from(l.getClientRects());
}
function _1(l) {
    const o = xn(l),
        r = Qs(l),
        c = l.ownerDocument.body,
        f = Gt(o.scrollWidth, o.clientWidth, c.scrollWidth, c.clientWidth),
        m = Gt(o.scrollHeight, o.clientHeight, c.scrollHeight, c.clientHeight);
    let p = -r.scrollLeft + Zs(l);
    const v = -r.scrollTop;
    return (dn(c).direction === 'rtl' && (p += Gt(o.clientWidth, c.clientWidth) - f), { width: f, height: m, x: p, y: v });
}
const Xp = 25;
function L1(l, o) {
    const r = qt(l),
        c = xn(l),
        f = r.visualViewport;
    let m = c.clientWidth,
        p = c.clientHeight,
        v = 0,
        y = 0;
    if (f) {
        ((m = f.width), (p = f.height));
        const S = lf();
        (!S || (S && o === 'fixed')) && ((v = f.offsetLeft), (y = f.offsetTop));
    }
    const g = Zs(c);
    if (g <= 0) {
        const S = c.ownerDocument,
            x = S.body,
            T = getComputedStyle(x),
            M = (S.compatMode === 'CSS1Compat' && parseFloat(T.marginLeft) + parseFloat(T.marginRight)) || 0,
            R = Math.abs(c.clientWidth - x.clientWidth - M);
        R <= Xp && (m -= R);
    } else g <= Xp && (m += g);
    return { width: m, height: p, x: v, y };
}
const U1 = new Set(['absolute', 'fixed']);
function B1(l, o) {
    const r = Ka(l, !0, o === 'fixed'),
        c = r.top + l.clientTop,
        f = r.left + l.clientLeft,
        m = Sn(l) ? Bl(l) : bn(1),
        p = l.clientWidth * m.x,
        v = l.clientHeight * m.y,
        y = f * m.x,
        g = c * m.y;
    return { width: p, height: v, x: y, y: g };
}
function Kp(l, o, r) {
    let c;
    if (o === 'viewport') c = L1(l, r);
    else if (o === 'document') c = _1(xn(l));
    else if (fn(o)) c = B1(o, r);
    else {
        const f = Rg(l);
        c = { x: o.x - f.x, y: o.y - f.y, width: o.width, height: o.height };
    }
    return Hs(c);
}
function kg(l, o) {
    const r = Sa(l);
    return r === o || !fn(r) || Vl(r) ? !1 : dn(r).position === 'fixed' || kg(r, o);
}
function H1(l, o) {
    const r = o.get(l);
    if (r) return r;
    let c = Fi(l, [], !1).filter(v => fn(v) && Kl(v) !== 'body'),
        f = null;
    const m = dn(l).position === 'fixed';
    let p = m ? Sa(l) : l;
    for (; fn(p) && !Vl(p); ) {
        const v = dn(p),
            y = af(p);
        (!y && v.position === 'fixed' && (f = null),
            (m ? !y && !f : (!y && v.position === 'static' && !!f && U1.has(f.position)) || (to(p) && !y && kg(l, p)))
                ? (c = c.filter(S => S !== p))
                : (f = v),
            (p = Sa(p)));
    }
    return (o.set(l, c), c);
}
function V1(l) {
    let { element: o, boundary: r, rootBoundary: c, strategy: f } = l;
    const p = [...(r === 'clippingAncestors' ? (Ks(o) ? [] : H1(o, this._c)) : [].concat(r)), c],
        v = p[0],
        y = p.reduce(
            (g, S) => {
                const x = Kp(o, S, f);
                return (
                    (g.top = Gt(x.top, g.top)),
                    (g.right = ba(x.right, g.right)),
                    (g.bottom = ba(x.bottom, g.bottom)),
                    (g.left = Gt(x.left, g.left)),
                    g
                );
            },
            Kp(o, v, f)
        );
    return { width: y.right - y.left, height: y.bottom - y.top, x: y.left, y: y.top };
}
function G1(l) {
    const { width: o, height: r } = Mg(l);
    return { width: o, height: r };
}
function q1(l, o, r) {
    const c = Sn(o),
        f = xn(o),
        m = r === 'fixed',
        p = Ka(l, !0, m, o);
    let v = { scrollLeft: 0, scrollTop: 0 };
    const y = bn(0);
    function g() {
        y.x = Zs(f);
    }
    if (c || (!c && !m))
        if (((Kl(o) !== 'body' || to(f)) && (v = Qs(o)), c)) {
            const M = Ka(o, !0, m, o);
            ((y.x = M.x + o.clientLeft), (y.y = M.y + o.clientTop));
        } else f && g();
    m && !c && f && g();
    const S = f && !c && !m ? Og(f, v) : bn(0),
        x = p.left + v.scrollLeft - y.x - S.x,
        T = p.top + v.scrollTop - y.y - S.y;
    return { x, y: T, width: p.width, height: p.height };
}
function ju(l) {
    return dn(l).position === 'static';
}
function Qp(l, o) {
    if (!Sn(l) || dn(l).position === 'fixed') return null;
    if (o) return o(l);
    let r = l.offsetParent;
    return (xn(l) === r && (r = r.ownerDocument.body), r);
}
function zg(l, o) {
    const r = qt(l);
    if (Ks(l)) return r;
    if (!Sn(l)) {
        let f = Sa(l);
        for (; f && !Vl(f); ) {
            if (fn(f) && !ju(f)) return f;
            f = Sa(f);
        }
        return r;
    }
    let c = Qp(l, o);
    for (; c && E1(c) && ju(c); ) c = Qp(c, o);
    return c && Vl(c) && ju(c) && !af(c) ? r : c || M1(l) || r;
}
const Y1 = async function (l) {
    const o = this.getOffsetParent || zg,
        r = this.getDimensions,
        c = await r(l.floating);
    return { reference: q1(l.reference, await o(l.floating), l.strategy), floating: { x: 0, y: 0, width: c.width, height: c.height } };
};
function X1(l) {
    return dn(l).direction === 'rtl';
}
const K1 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: z1,
    getDocumentElement: xn,
    getClippingRect: V1,
    getOffsetParent: zg,
    getElementRects: Y1,
    getClientRects: D1,
    getDimensions: G1,
    getScale: Bl,
    isElement: fn,
    isRTL: X1,
};
function Dg(l, o) {
    return l.x === o.x && l.y === o.y && l.width === o.width && l.height === o.height;
}
function Q1(l, o) {
    let r = null,
        c;
    const f = xn(l);
    function m() {
        var v;
        (clearTimeout(c), (v = r) == null || v.disconnect(), (r = null));
    }
    function p(v, y) {
        (v === void 0 && (v = !1), y === void 0 && (y = 1), m());
        const g = l.getBoundingClientRect(),
            { left: S, top: x, width: T, height: M } = g;
        if ((v || o(), !T || !M)) return;
        const R = As(x),
            w = As(f.clientWidth - (S + T)),
            N = As(f.clientHeight - (x + M)),
            L = As(S),
            H = { rootMargin: -R + 'px ' + -w + 'px ' + -N + 'px ' + -L + 'px', threshold: Gt(0, ba(1, y)) || 1 };
        let K = !0;
        function W(ne) {
            const k = ne[0].intersectionRatio;
            if (k !== y) {
                if (!K) return p();
                k
                    ? p(!1, k)
                    : (c = setTimeout(() => {
                          p(!1, 1e-7);
                      }, 1e3));
            }
            (k === 1 && !Dg(g, l.getBoundingClientRect()) && p(), (K = !1));
        }
        try {
            r = new IntersectionObserver(W, { ...H, root: f.ownerDocument });
        } catch {
            r = new IntersectionObserver(W, H);
        }
        r.observe(l);
    }
    return (p(!0), m);
}
function Z1(l, o, r, c) {
    c === void 0 && (c = {});
    const {
            ancestorScroll: f = !0,
            ancestorResize: m = !0,
            elementResize: p = typeof ResizeObserver == 'function',
            layoutShift: v = typeof IntersectionObserver == 'function',
            animationFrame: y = !1,
        } = c,
        g = of(l),
        S = f || m ? [...(g ? Fi(g) : []), ...Fi(o)] : [];
    S.forEach(L => {
        (f && L.addEventListener('scroll', r, { passive: !0 }), m && L.addEventListener('resize', r));
    });
    const x = g && v ? Q1(g, r) : null;
    let T = -1,
        M = null;
    p &&
        ((M = new ResizeObserver(L => {
            let [B] = L;
            (B &&
                B.target === g &&
                M &&
                (M.unobserve(o),
                cancelAnimationFrame(T),
                (T = requestAnimationFrame(() => {
                    var H;
                    (H = M) == null || H.observe(o);
                }))),
                r());
        })),
        g && !y && M.observe(g),
        M.observe(o));
    let R,
        w = y ? Ka(l) : null;
    y && N();
    function N() {
        const L = Ka(l);
        (w && !Dg(w, L) && r(), (w = L), (R = requestAnimationFrame(N)));
    }
    return (
        r(),
        () => {
            var L;
            (S.forEach(B => {
                (f && B.removeEventListener('scroll', r), m && B.removeEventListener('resize', r));
            }),
                x?.(),
                (L = M) == null || L.disconnect(),
                (M = null),
                y && cancelAnimationFrame(R));
        }
    );
}
const I1 = y1,
    J1 = b1,
    W1 = p1,
    F1 = x1,
    $1 = g1,
    Zp = h1,
    P1 = S1,
    ex = (l, o, r) => {
        const c = new Map(),
            f = { platform: K1, ...r },
            m = { ...f.platform, _c: c };
        return m1(l, o, { ...f, platform: m });
    };
var tx = typeof document < 'u',
    nx = function () {},
    ks = tx ? h.useLayoutEffect : nx;
function Vs(l, o) {
    if (l === o) return !0;
    if (typeof l != typeof o) return !1;
    if (typeof l == 'function' && l.toString() === o.toString()) return !0;
    let r, c, f;
    if (l && o && typeof l == 'object') {
        if (Array.isArray(l)) {
            if (((r = l.length), r !== o.length)) return !1;
            for (c = r; c-- !== 0; ) if (!Vs(l[c], o[c])) return !1;
            return !0;
        }
        if (((f = Object.keys(l)), (r = f.length), r !== Object.keys(o).length)) return !1;
        for (c = r; c-- !== 0; ) if (!{}.hasOwnProperty.call(o, f[c])) return !1;
        for (c = r; c-- !== 0; ) {
            const m = f[c];
            if (!(m === '_owner' && l.$$typeof) && !Vs(l[m], o[m])) return !1;
        }
        return !0;
    }
    return l !== l && o !== o;
}
function _g(l) {
    return typeof window > 'u' ? 1 : (l.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ip(l, o) {
    const r = _g(l);
    return Math.round(o * r) / r;
}
function Mu(l) {
    const o = h.useRef(l);
    return (
        ks(() => {
            o.current = l;
        }),
        o
    );
}
function ax(l) {
    l === void 0 && (l = {});
    const {
            placement: o = 'bottom',
            strategy: r = 'absolute',
            middleware: c = [],
            platform: f,
            elements: { reference: m, floating: p } = {},
            transform: v = !0,
            whileElementsMounted: y,
            open: g,
        } = l,
        [S, x] = h.useState({ x: 0, y: 0, strategy: r, placement: o, middlewareData: {}, isPositioned: !1 }),
        [T, M] = h.useState(c);
    Vs(T, c) || M(c);
    const [R, w] = h.useState(null),
        [N, L] = h.useState(null),
        B = h.useCallback(z => {
            z !== ne.current && ((ne.current = z), w(z));
        }, []),
        H = h.useCallback(z => {
            z !== k.current && ((k.current = z), L(z));
        }, []),
        K = m || R,
        W = p || N,
        ne = h.useRef(null),
        k = h.useRef(null),
        G = h.useRef(S),
        ae = y != null,
        ee = Mu(y),
        he = Mu(f),
        le = Mu(g),
        re = h.useCallback(() => {
            if (!ne.current || !k.current) return;
            const z = { placement: o, strategy: r, middleware: T };
            (he.current && (z.platform = he.current),
                ex(ne.current, k.current, z).then(te => {
                    const de = { ...te, isPositioned: le.current !== !1 };
                    ie.current &&
                        !Vs(G.current, de) &&
                        ((G.current = de),
                        $i.flushSync(() => {
                            x(de);
                        }));
                }));
        }, [T, o, r, he, le]);
    ks(() => {
        g === !1 && G.current.isPositioned && ((G.current.isPositioned = !1), x(z => ({ ...z, isPositioned: !1 })));
    }, [g]);
    const ie = h.useRef(!1);
    (ks(
        () => (
            (ie.current = !0),
            () => {
                ie.current = !1;
            }
        ),
        []
    ),
        ks(() => {
            if ((K && (ne.current = K), W && (k.current = W), K && W)) {
                if (ee.current) return ee.current(K, W, re);
                re();
            }
        }, [K, W, re, ee, ae]));
    const Q = h.useMemo(() => ({ reference: ne, floating: k, setReference: B, setFloating: H }), [B, H]),
        A = h.useMemo(() => ({ reference: K, floating: W }), [K, W]),
        Y = h.useMemo(() => {
            const z = { position: r, left: 0, top: 0 };
            if (!A.floating) return z;
            const te = Ip(A.floating, S.x),
                de = Ip(A.floating, S.y);
            return v
                ? { ...z, transform: 'translate(' + te + 'px, ' + de + 'px)', ...(_g(A.floating) >= 1.5 && { willChange: 'transform' }) }
                : { position: r, left: te, top: de };
        }, [r, v, A.floating, S.x, S.y]);
    return h.useMemo(() => ({ ...S, update: re, refs: Q, elements: A, floatingStyles: Y }), [S, re, Q, A, Y]);
}
const lx = l => {
        function o(r) {
            return {}.hasOwnProperty.call(r, 'current');
        }
        return {
            name: 'arrow',
            options: l,
            fn(r) {
                const { element: c, padding: f } = typeof l == 'function' ? l(r) : l;
                return c && o(c)
                    ? c.current != null
                        ? Zp({ element: c.current, padding: f }).fn(r)
                        : {}
                    : c
                      ? Zp({ element: c, padding: f }).fn(r)
                      : {};
            },
        };
    },
    ix = (l, o) => ({ ...I1(l), options: [l, o] }),
    ox = (l, o) => ({ ...J1(l), options: [l, o] }),
    sx = (l, o) => ({ ...P1(l), options: [l, o] }),
    rx = (l, o) => ({ ...W1(l), options: [l, o] }),
    cx = (l, o) => ({ ...F1(l), options: [l, o] }),
    ux = (l, o) => ({ ...$1(l), options: [l, o] }),
    fx = (l, o) => ({ ...lx(l), options: [l, o] });
var dx = 'Arrow',
    Lg = h.forwardRef((l, o) => {
        const { children: r, width: c = 10, height: f = 5, ...m } = l;
        return u.jsx(Ye.svg, {
            ...m,
            ref: o,
            width: c,
            height: f,
            viewBox: '0 0 30 10',
            preserveAspectRatio: 'none',
            children: l.asChild ? r : u.jsx('polygon', { points: '0,0 30,0 15,10' }),
        });
    });
Lg.displayName = dx;
var mx = Lg;
function hx(l) {
    const [o, r] = h.useState(void 0);
    return (
        bt(() => {
            if (l) {
                r({ width: l.offsetWidth, height: l.offsetHeight });
                const c = new ResizeObserver(f => {
                    if (!Array.isArray(f) || !f.length) return;
                    const m = f[0];
                    let p, v;
                    if ('borderBoxSize' in m) {
                        const y = m.borderBoxSize,
                            g = Array.isArray(y) ? y[0] : y;
                        ((p = g.inlineSize), (v = g.blockSize));
                    } else ((p = l.offsetWidth), (v = l.offsetHeight));
                    r({ width: p, height: v });
                });
                return (c.observe(l, { box: 'border-box' }), () => c.unobserve(l));
            } else r(void 0);
        }, [l]),
        o
    );
}
var sf = 'Popper',
    [Ug, Bg] = Pi(sf),
    [px, Hg] = Ug(sf),
    Vg = l => {
        const { __scopePopper: o, children: r } = l,
            [c, f] = h.useState(null);
        return u.jsx(px, { scope: o, anchor: c, onAnchorChange: f, children: r });
    };
Vg.displayName = sf;
var Gg = 'PopperAnchor',
    qg = h.forwardRef((l, o) => {
        const { __scopePopper: r, virtualRef: c, ...f } = l,
            m = Hg(Gg, r),
            p = h.useRef(null),
            v = ct(o, p),
            y = h.useRef(null);
        return (
            h.useEffect(() => {
                const g = y.current;
                ((y.current = c?.current || p.current), g !== y.current && m.onAnchorChange(y.current));
            }),
            c ? null : u.jsx(Ye.div, { ...f, ref: v })
        );
    });
qg.displayName = Gg;
var rf = 'PopperContent',
    [gx, vx] = Ug(rf),
    Yg = h.forwardRef((l, o) => {
        const {
                __scopePopper: r,
                side: c = 'bottom',
                sideOffset: f = 0,
                align: m = 'center',
                alignOffset: p = 0,
                arrowPadding: v = 0,
                avoidCollisions: y = !0,
                collisionBoundary: g = [],
                collisionPadding: S = 0,
                sticky: x = 'partial',
                hideWhenDetached: T = !1,
                updatePositionStrategy: M = 'optimized',
                onPlaced: R,
                ...w
            } = l,
            N = Hg(rf, r),
            [L, B] = h.useState(null),
            H = ct(o, $ => B($)),
            [K, W] = h.useState(null),
            ne = hx(K),
            k = ne?.width ?? 0,
            G = ne?.height ?? 0,
            ae = c + (m !== 'center' ? '-' + m : ''),
            ee = typeof S == 'number' ? S : { top: 0, right: 0, bottom: 0, left: 0, ...S },
            he = Array.isArray(g) ? g : [g],
            le = he.length > 0,
            re = { padding: ee, boundary: he.filter(bx), altBoundary: le },
            {
                refs: ie,
                floatingStyles: Q,
                placement: A,
                isPositioned: Y,
                middlewareData: z,
            } = ax({
                strategy: 'fixed',
                placement: ae,
                whileElementsMounted: (...$) => Z1(...$, { animationFrame: M === 'always' }),
                elements: { reference: N.anchor },
                middleware: [
                    ix({ mainAxis: f + G, alignmentAxis: p }),
                    y && ox({ mainAxis: !0, crossAxis: !1, limiter: x === 'partial' ? sx() : void 0, ...re }),
                    y && rx({ ...re }),
                    cx({
                        ...re,
                        apply: ({ elements: $, rects: be, availableWidth: ye, availableHeight: we }) => {
                            const { width: Te, height: Me } = be.reference,
                                Pe = $.floating.style;
                            (Pe.setProperty('--radix-popper-available-width', `${ye}px`),
                                Pe.setProperty('--radix-popper-available-height', `${we}px`),
                                Pe.setProperty('--radix-popper-anchor-width', `${Te}px`),
                                Pe.setProperty('--radix-popper-anchor-height', `${Me}px`));
                        },
                    }),
                    K && fx({ element: K, padding: v }),
                    Sx({ arrowWidth: k, arrowHeight: G }),
                    T && ux({ strategy: 'referenceHidden', ...re }),
                ],
            }),
            [te, de] = Qg(A),
            E = ya(R);
        bt(() => {
            Y && E?.();
        }, [Y, E]);
        const q = z.arrow?.x,
            F = z.arrow?.y,
            P = z.arrow?.centerOffset !== 0,
            [fe, pe] = h.useState();
        return (
            bt(() => {
                L && pe(window.getComputedStyle(L).zIndex);
            }, [L]),
            u.jsx('div', {
                ref: ie.setFloating,
                'data-radix-popper-content-wrapper': '',
                style: {
                    ...Q,
                    transform: Y ? Q.transform : 'translate(0, -200%)',
                    minWidth: 'max-content',
                    zIndex: fe,
                    '--radix-popper-transform-origin': [z.transformOrigin?.x, z.transformOrigin?.y].join(' '),
                    ...(z.hide?.referenceHidden && { visibility: 'hidden', pointerEvents: 'none' }),
                },
                dir: l.dir,
                children: u.jsx(gx, {
                    scope: r,
                    placedSide: te,
                    onArrowChange: W,
                    arrowX: q,
                    arrowY: F,
                    shouldHideArrow: P,
                    children: u.jsx(Ye.div, {
                        'data-side': te,
                        'data-align': de,
                        ...w,
                        ref: H,
                        style: { ...w.style, animation: Y ? void 0 : 'none' },
                    }),
                }),
            })
        );
    });
Yg.displayName = rf;
var Xg = 'PopperArrow',
    yx = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
    Kg = h.forwardRef(function (o, r) {
        const { __scopePopper: c, ...f } = o,
            m = vx(Xg, c),
            p = yx[m.placedSide];
        return u.jsx('span', {
            ref: m.onArrowChange,
            style: {
                position: 'absolute',
                left: m.arrowX,
                top: m.arrowY,
                [p]: 0,
                transformOrigin: { top: '', right: '0 0', bottom: 'center 0', left: '100% 0' }[m.placedSide],
                transform: {
                    top: 'translateY(100%)',
                    right: 'translateY(50%) rotate(90deg) translateX(-50%)',
                    bottom: 'rotate(180deg)',
                    left: 'translateY(50%) rotate(-90deg) translateX(50%)',
                }[m.placedSide],
                visibility: m.shouldHideArrow ? 'hidden' : void 0,
            },
            children: u.jsx(mx, { ...f, ref: r, style: { ...f.style, display: 'block' } }),
        });
    });
Kg.displayName = Xg;
function bx(l) {
    return l !== null;
}
var Sx = l => ({
    name: 'transformOrigin',
    options: l,
    fn(o) {
        const { placement: r, rects: c, middlewareData: f } = o,
            p = f.arrow?.centerOffset !== 0,
            v = p ? 0 : l.arrowWidth,
            y = p ? 0 : l.arrowHeight,
            [g, S] = Qg(r),
            x = { start: '0%', center: '50%', end: '100%' }[S],
            T = (f.arrow?.x ?? 0) + v / 2,
            M = (f.arrow?.y ?? 0) + y / 2;
        let R = '',
            w = '';
        return (
            g === 'bottom'
                ? ((R = p ? x : `${T}px`), (w = `${-y}px`))
                : g === 'top'
                  ? ((R = p ? x : `${T}px`), (w = `${c.floating.height + y}px`))
                  : g === 'right'
                    ? ((R = `${-y}px`), (w = p ? x : `${M}px`))
                    : g === 'left' && ((R = `${c.floating.width + y}px`), (w = p ? x : `${M}px`)),
            { data: { x: R, y: w } }
        );
    },
});
function Qg(l) {
    const [o, r = 'center'] = l.split('-');
    return [o, r];
}
var xx = Vg,
    wx = qg,
    Cx = Yg,
    Ex = Kg,
    Tx = 'Portal',
    Zg = h.forwardRef((l, o) => {
        const { container: r, ...c } = l,
            [f, m] = h.useState(!1);
        bt(() => m(!0), []);
        const p = r || (f && globalThis?.document?.body);
        return p ? zS.createPortal(u.jsx(Ye.div, { ...c, ref: o }), p) : null;
    });
Zg.displayName = Tx;
var Ax = ng[' useInsertionEffect '.trim().toString()] || bt;
function Gs({ prop: l, defaultProp: o, onChange: r = () => {}, caller: c }) {
    const [f, m, p] = Nx({ defaultProp: o, onChange: r }),
        v = l !== void 0,
        y = v ? l : f;
    {
        const S = h.useRef(l !== void 0);
        h.useEffect(() => {
            const x = S.current;
            (x !== v &&
                console.warn(
                    `${c} is changing from ${x ? 'controlled' : 'uncontrolled'} to ${v ? 'controlled' : 'uncontrolled'}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
                ),
                (S.current = v));
        }, [v, c]);
    }
    const g = h.useCallback(
        S => {
            if (v) {
                const x = jx(S) ? S(l) : S;
                x !== l && p.current?.(x);
            } else m(S);
        },
        [v, l, m, p]
    );
    return [y, g];
}
function Nx({ defaultProp: l, onChange: o }) {
    const [r, c] = h.useState(l),
        f = h.useRef(r),
        m = h.useRef(o);
    return (
        Ax(() => {
            m.current = o;
        }, [o]),
        h.useEffect(() => {
            f.current !== r && (m.current?.(r), (f.current = r));
        }, [r, f]),
        [r, c, m]
    );
}
function jx(l) {
    return typeof l == 'function';
}
function Mx(l) {
    const o = h.useRef({ value: l, previous: l });
    return h.useMemo(() => (o.current.value !== l && ((o.current.previous = o.current.value), (o.current.value = l)), o.current.previous), [l]);
}
var Ig = Object.freeze({
        position: 'absolute',
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
    }),
    Rx = 'VisuallyHidden',
    Ox = h.forwardRef((l, o) => u.jsx(Ye.span, { ...l, ref: o, style: { ...Ig, ...l.style } }));
Ox.displayName = Rx;
var kx = function (l) {
        if (typeof document > 'u') return null;
        var o = Array.isArray(l) ? l[0] : l;
        return o.ownerDocument.body;
    },
    zl = new WeakMap(),
    Ns = new WeakMap(),
    js = {},
    Ru = 0,
    Jg = function (l) {
        return l && (l.host || Jg(l.parentNode));
    },
    zx = function (l, o) {
        return o
            .map(function (r) {
                if (l.contains(r)) return r;
                var c = Jg(r);
                return c && l.contains(c) ? c : (console.error('aria-hidden', r, 'in not contained inside', l, '. Doing nothing'), null);
            })
            .filter(function (r) {
                return !!r;
            });
    },
    Dx = function (l, o, r, c) {
        var f = zx(o, Array.isArray(l) ? l : [l]);
        js[r] || (js[r] = new WeakMap());
        var m = js[r],
            p = [],
            v = new Set(),
            y = new Set(f),
            g = function (x) {
                !x || v.has(x) || (v.add(x), g(x.parentNode));
            };
        f.forEach(g);
        var S = function (x) {
            !x ||
                y.has(x) ||
                Array.prototype.forEach.call(x.children, function (T) {
                    if (v.has(T)) S(T);
                    else
                        try {
                            var M = T.getAttribute(c),
                                R = M !== null && M !== 'false',
                                w = (zl.get(T) || 0) + 1,
                                N = (m.get(T) || 0) + 1;
                            (zl.set(T, w),
                                m.set(T, N),
                                p.push(T),
                                w === 1 && R && Ns.set(T, !0),
                                N === 1 && T.setAttribute(r, 'true'),
                                R || T.setAttribute(c, 'true'));
                        } catch (L) {
                            console.error('aria-hidden: cannot operate on ', T, L);
                        }
                });
        };
        return (
            S(o),
            v.clear(),
            Ru++,
            function () {
                (p.forEach(function (x) {
                    var T = zl.get(x) - 1,
                        M = m.get(x) - 1;
                    (zl.set(x, T), m.set(x, M), T || (Ns.has(x) || x.removeAttribute(c), Ns.delete(x)), M || x.removeAttribute(r));
                }),
                    Ru--,
                    Ru || ((zl = new WeakMap()), (zl = new WeakMap()), (Ns = new WeakMap()), (js = {})));
            }
        );
    },
    _x = function (l, o, r) {
        r === void 0 && (r = 'data-aria-hidden');
        var c = Array.from(Array.isArray(l) ? l : [l]),
            f = kx(l);
        return f
            ? (c.push.apply(c, Array.from(f.querySelectorAll('[aria-live], script'))), Dx(c, f, r, 'aria-hidden'))
            : function () {
                  return null;
              };
    },
    vn = function () {
        return (
            (vn =
                Object.assign ||
                function (o) {
                    for (var r, c = 1, f = arguments.length; c < f; c++) {
                        r = arguments[c];
                        for (var m in r) Object.prototype.hasOwnProperty.call(r, m) && (o[m] = r[m]);
                    }
                    return o;
                }),
            vn.apply(this, arguments)
        );
    };
function Wg(l, o) {
    var r = {};
    for (var c in l) Object.prototype.hasOwnProperty.call(l, c) && o.indexOf(c) < 0 && (r[c] = l[c]);
    if (l != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var f = 0, c = Object.getOwnPropertySymbols(l); f < c.length; f++)
            o.indexOf(c[f]) < 0 && Object.prototype.propertyIsEnumerable.call(l, c[f]) && (r[c[f]] = l[c[f]]);
    return r;
}
function Lx(l, o, r) {
    if (r || arguments.length === 2)
        for (var c = 0, f = o.length, m; c < f; c++) (m || !(c in o)) && (m || (m = Array.prototype.slice.call(o, 0, c)), (m[c] = o[c]));
    return l.concat(m || Array.prototype.slice.call(o));
}
var zs = 'right-scroll-bar-position',
    Ds = 'width-before-scroll-bar',
    Ux = 'with-scroll-bars-hidden',
    Bx = '--removed-body-scroll-bar-size';
function Ou(l, o) {
    return (typeof l == 'function' ? l(o) : l && (l.current = o), l);
}
function Hx(l, o) {
    var r = h.useState(function () {
        return {
            value: l,
            callback: o,
            facade: {
                get current() {
                    return r.value;
                },
                set current(c) {
                    var f = r.value;
                    f !== c && ((r.value = c), r.callback(c, f));
                },
            },
        };
    })[0];
    return ((r.callback = o), r.facade);
}
var Vx = typeof window < 'u' ? h.useLayoutEffect : h.useEffect,
    Jp = new WeakMap();
function Gx(l, o) {
    var r = Hx(null, function (c) {
        return l.forEach(function (f) {
            return Ou(f, c);
        });
    });
    return (
        Vx(
            function () {
                var c = Jp.get(r);
                if (c) {
                    var f = new Set(c),
                        m = new Set(l),
                        p = r.current;
                    (f.forEach(function (v) {
                        m.has(v) || Ou(v, null);
                    }),
                        m.forEach(function (v) {
                            f.has(v) || Ou(v, p);
                        }));
                }
                Jp.set(r, l);
            },
            [l]
        ),
        r
    );
}
function qx(l) {
    return l;
}
function Yx(l, o) {
    o === void 0 && (o = qx);
    var r = [],
        c = !1,
        f = {
            read: function () {
                if (c) throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
                return r.length ? r[r.length - 1] : l;
            },
            useMedium: function (m) {
                var p = o(m, c);
                return (
                    r.push(p),
                    function () {
                        r = r.filter(function (v) {
                            return v !== p;
                        });
                    }
                );
            },
            assignSyncMedium: function (m) {
                for (c = !0; r.length; ) {
                    var p = r;
                    ((r = []), p.forEach(m));
                }
                r = {
                    push: function (v) {
                        return m(v);
                    },
                    filter: function () {
                        return r;
                    },
                };
            },
            assignMedium: function (m) {
                c = !0;
                var p = [];
                if (r.length) {
                    var v = r;
                    ((r = []), v.forEach(m), (p = r));
                }
                var y = function () {
                        var S = p;
                        ((p = []), S.forEach(m));
                    },
                    g = function () {
                        return Promise.resolve().then(y);
                    };
                (g(),
                    (r = {
                        push: function (S) {
                            (p.push(S), g());
                        },
                        filter: function (S) {
                            return ((p = p.filter(S)), r);
                        },
                    }));
            },
        };
    return f;
}
function Xx(l) {
    l === void 0 && (l = {});
    var o = Yx(null);
    return ((o.options = vn({ async: !0, ssr: !1 }, l)), o);
}
var Fg = function (l) {
    var o = l.sideCar,
        r = Wg(l, ['sideCar']);
    if (!o) throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    var c = o.read();
    if (!c) throw new Error('Sidecar medium not found');
    return h.createElement(c, vn({}, r));
};
Fg.isSideCarExport = !0;
function Kx(l, o) {
    return (l.useMedium(o), Fg);
}
var $g = Xx(),
    ku = function () {},
    Is = h.forwardRef(function (l, o) {
        var r = h.useRef(null),
            c = h.useState({ onScrollCapture: ku, onWheelCapture: ku, onTouchMoveCapture: ku }),
            f = c[0],
            m = c[1],
            p = l.forwardProps,
            v = l.children,
            y = l.className,
            g = l.removeScrollBar,
            S = l.enabled,
            x = l.shards,
            T = l.sideCar,
            M = l.noRelative,
            R = l.noIsolation,
            w = l.inert,
            N = l.allowPinchZoom,
            L = l.as,
            B = L === void 0 ? 'div' : L,
            H = l.gapMode,
            K = Wg(l, [
                'forwardProps',
                'children',
                'className',
                'removeScrollBar',
                'enabled',
                'shards',
                'sideCar',
                'noRelative',
                'noIsolation',
                'inert',
                'allowPinchZoom',
                'as',
                'gapMode',
            ]),
            W = T,
            ne = Gx([r, o]),
            k = vn(vn({}, K), f);
        return h.createElement(
            h.Fragment,
            null,
            S &&
                h.createElement(W, {
                    sideCar: $g,
                    removeScrollBar: g,
                    shards: x,
                    noRelative: M,
                    noIsolation: R,
                    inert: w,
                    setCallbacks: m,
                    allowPinchZoom: !!N,
                    lockRef: r,
                    gapMode: H,
                }),
            p ? h.cloneElement(h.Children.only(v), vn(vn({}, k), { ref: ne })) : h.createElement(B, vn({}, k, { className: y, ref: ne }), v)
        );
    });
Is.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Is.classNames = { fullWidth: Ds, zeroRight: zs };
var Qx = function () {
    if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
};
function Zx() {
    if (!document) return null;
    var l = document.createElement('style');
    l.type = 'text/css';
    var o = Qx();
    return (o && l.setAttribute('nonce', o), l);
}
function Ix(l, o) {
    l.styleSheet ? (l.styleSheet.cssText = o) : l.appendChild(document.createTextNode(o));
}
function Jx(l) {
    var o = document.head || document.getElementsByTagName('head')[0];
    o.appendChild(l);
}
var Wx = function () {
        var l = 0,
            o = null;
        return {
            add: function (r) {
                (l == 0 && (o = Zx()) && (Ix(o, r), Jx(o)), l++);
            },
            remove: function () {
                (l--, !l && o && (o.parentNode && o.parentNode.removeChild(o), (o = null)));
            },
        };
    },
    Fx = function () {
        var l = Wx();
        return function (o, r) {
            h.useEffect(
                function () {
                    return (
                        l.add(o),
                        function () {
                            l.remove();
                        }
                    );
                },
                [o && r]
            );
        };
    },
    Pg = function () {
        var l = Fx(),
            o = function (r) {
                var c = r.styles,
                    f = r.dynamic;
                return (l(c, f), null);
            };
        return o;
    },
    $x = { left: 0, top: 0, right: 0, gap: 0 },
    zu = function (l) {
        return parseInt(l || '', 10) || 0;
    },
    Px = function (l) {
        var o = window.getComputedStyle(document.body),
            r = o[l === 'padding' ? 'paddingLeft' : 'marginLeft'],
            c = o[l === 'padding' ? 'paddingTop' : 'marginTop'],
            f = o[l === 'padding' ? 'paddingRight' : 'marginRight'];
        return [zu(r), zu(c), zu(f)];
    },
    ew = function (l) {
        if ((l === void 0 && (l = 'margin'), typeof window > 'u')) return $x;
        var o = Px(l),
            r = document.documentElement.clientWidth,
            c = window.innerWidth;
        return { left: o[0], top: o[1], right: o[2], gap: Math.max(0, c - r + o[2] - o[0]) };
    },
    tw = Pg(),
    Hl = 'data-scroll-locked',
    nw = function (l, o, r, c) {
        var f = l.left,
            m = l.top,
            p = l.right,
            v = l.gap;
        return (
            r === void 0 && (r = 'margin'),
            `
  .`
                .concat(
                    Ux,
                    ` {
   overflow: hidden `
                )
                .concat(
                    c,
                    `;
   padding-right: `
                )
                .concat(v, 'px ')
                .concat(
                    c,
                    `;
  }
  body[`
                )
                .concat(
                    Hl,
                    `] {
    overflow: hidden `
                )
                .concat(
                    c,
                    `;
    overscroll-behavior: contain;
    `
                )
                .concat(
                    [
                        o && 'position: relative '.concat(c, ';'),
                        r === 'margin' &&
                            `
    padding-left: `
                                .concat(
                                    f,
                                    `px;
    padding-top: `
                                )
                                .concat(
                                    m,
                                    `px;
    padding-right: `
                                )
                                .concat(
                                    p,
                                    `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                                )
                                .concat(v, 'px ')
                                .concat(
                                    c,
                                    `;
    `
                                ),
                        r === 'padding' && 'padding-right: '.concat(v, 'px ').concat(c, ';'),
                    ]
                        .filter(Boolean)
                        .join(''),
                    `
  }
  
  .`
                )
                .concat(
                    zs,
                    ` {
    right: `
                )
                .concat(v, 'px ')
                .concat(
                    c,
                    `;
  }
  
  .`
                )
                .concat(
                    Ds,
                    ` {
    margin-right: `
                )
                .concat(v, 'px ')
                .concat(
                    c,
                    `;
  }
  
  .`
                )
                .concat(zs, ' .')
                .concat(
                    zs,
                    ` {
    right: 0 `
                )
                .concat(
                    c,
                    `;
  }
  
  .`
                )
                .concat(Ds, ' .')
                .concat(
                    Ds,
                    ` {
    margin-right: 0 `
                )
                .concat(
                    c,
                    `;
  }
  
  body[`
                )
                .concat(
                    Hl,
                    `] {
    `
                )
                .concat(Bx, ': ')
                .concat(
                    v,
                    `px;
  }
`
                )
        );
    },
    Wp = function () {
        var l = parseInt(document.body.getAttribute(Hl) || '0', 10);
        return isFinite(l) ? l : 0;
    },
    aw = function () {
        h.useEffect(function () {
            return (
                document.body.setAttribute(Hl, (Wp() + 1).toString()),
                function () {
                    var l = Wp() - 1;
                    l <= 0 ? document.body.removeAttribute(Hl) : document.body.setAttribute(Hl, l.toString());
                }
            );
        }, []);
    },
    lw = function (l) {
        var o = l.noRelative,
            r = l.noImportant,
            c = l.gapMode,
            f = c === void 0 ? 'margin' : c;
        aw();
        var m = h.useMemo(
            function () {
                return ew(f);
            },
            [f]
        );
        return h.createElement(tw, { styles: nw(m, !o, f, r ? '' : '!important') });
    },
    Yu = !1;
if (typeof window < 'u')
    try {
        var Ms = Object.defineProperty({}, 'passive', {
            get: function () {
                return ((Yu = !0), !0);
            },
        });
        (window.addEventListener('test', Ms, Ms), window.removeEventListener('test', Ms, Ms));
    } catch {
        Yu = !1;
    }
var Dl = Yu ? { passive: !1 } : !1,
    iw = function (l) {
        return l.tagName === 'TEXTAREA';
    },
    ev = function (l, o) {
        if (!(l instanceof Element)) return !1;
        var r = window.getComputedStyle(l);
        return r[o] !== 'hidden' && !(r.overflowY === r.overflowX && !iw(l) && r[o] === 'visible');
    },
    ow = function (l) {
        return ev(l, 'overflowY');
    },
    sw = function (l) {
        return ev(l, 'overflowX');
    },
    Fp = function (l, o) {
        var r = o.ownerDocument,
            c = o;
        do {
            typeof ShadowRoot < 'u' && c instanceof ShadowRoot && (c = c.host);
            var f = tv(l, c);
            if (f) {
                var m = nv(l, c),
                    p = m[1],
                    v = m[2];
                if (p > v) return !0;
            }
            c = c.parentNode;
        } while (c && c !== r.body);
        return !1;
    },
    rw = function (l) {
        var o = l.scrollTop,
            r = l.scrollHeight,
            c = l.clientHeight;
        return [o, r, c];
    },
    cw = function (l) {
        var o = l.scrollLeft,
            r = l.scrollWidth,
            c = l.clientWidth;
        return [o, r, c];
    },
    tv = function (l, o) {
        return l === 'v' ? ow(o) : sw(o);
    },
    nv = function (l, o) {
        return l === 'v' ? rw(o) : cw(o);
    },
    uw = function (l, o) {
        return l === 'h' && o === 'rtl' ? -1 : 1;
    },
    fw = function (l, o, r, c, f) {
        var m = uw(l, window.getComputedStyle(o).direction),
            p = m * c,
            v = r.target,
            y = o.contains(v),
            g = !1,
            S = p > 0,
            x = 0,
            T = 0;
        do {
            if (!v) break;
            var M = nv(l, v),
                R = M[0],
                w = M[1],
                N = M[2],
                L = w - N - m * R;
            (R || L) && tv(l, v) && ((x += L), (T += R));
            var B = v.parentNode;
            v = B && B.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? B.host : B;
        } while ((!y && v !== document.body) || (y && (o.contains(v) || o === v)));
        return (((S && Math.abs(x) < 1) || (!S && Math.abs(T) < 1)) && (g = !0), g);
    },
    Rs = function (l) {
        return 'changedTouches' in l ? [l.changedTouches[0].clientX, l.changedTouches[0].clientY] : [0, 0];
    },
    $p = function (l) {
        return [l.deltaX, l.deltaY];
    },
    Pp = function (l) {
        return l && 'current' in l ? l.current : l;
    },
    dw = function (l, o) {
        return l[0] === o[0] && l[1] === o[1];
    },
    mw = function (l) {
        return `
  .block-interactivity-`
            .concat(
                l,
                ` {pointer-events: none;}
  .allow-interactivity-`
            )
            .concat(
                l,
                ` {pointer-events: all;}
`
            );
    },
    hw = 0,
    _l = [];
function pw(l) {
    var o = h.useRef([]),
        r = h.useRef([0, 0]),
        c = h.useRef(),
        f = h.useState(hw++)[0],
        m = h.useState(Pg)[0],
        p = h.useRef(l);
    (h.useEffect(
        function () {
            p.current = l;
        },
        [l]
    ),
        h.useEffect(
            function () {
                if (l.inert) {
                    document.body.classList.add('block-interactivity-'.concat(f));
                    var w = Lx([l.lockRef.current], (l.shards || []).map(Pp), !0).filter(Boolean);
                    return (
                        w.forEach(function (N) {
                            return N.classList.add('allow-interactivity-'.concat(f));
                        }),
                        function () {
                            (document.body.classList.remove('block-interactivity-'.concat(f)),
                                w.forEach(function (N) {
                                    return N.classList.remove('allow-interactivity-'.concat(f));
                                }));
                        }
                    );
                }
            },
            [l.inert, l.lockRef.current, l.shards]
        ));
    var v = h.useCallback(function (w, N) {
            if (('touches' in w && w.touches.length === 2) || (w.type === 'wheel' && w.ctrlKey)) return !p.current.allowPinchZoom;
            var L = Rs(w),
                B = r.current,
                H = 'deltaX' in w ? w.deltaX : B[0] - L[0],
                K = 'deltaY' in w ? w.deltaY : B[1] - L[1],
                W,
                ne = w.target,
                k = Math.abs(H) > Math.abs(K) ? 'h' : 'v';
            if ('touches' in w && k === 'h' && ne.type === 'range') return !1;
            var G = Fp(k, ne);
            if (!G) return !0;
            if ((G ? (W = k) : ((W = k === 'v' ? 'h' : 'v'), (G = Fp(k, ne))), !G)) return !1;
            if ((!c.current && 'changedTouches' in w && (H || K) && (c.current = W), !W)) return !0;
            var ae = c.current || W;
            return fw(ae, N, w, ae === 'h' ? H : K);
        }, []),
        y = h.useCallback(function (w) {
            var N = w;
            if (!(!_l.length || _l[_l.length - 1] !== m)) {
                var L = 'deltaY' in N ? $p(N) : Rs(N),
                    B = o.current.filter(function (W) {
                        return W.name === N.type && (W.target === N.target || N.target === W.shadowParent) && dw(W.delta, L);
                    })[0];
                if (B && B.should) {
                    N.cancelable && N.preventDefault();
                    return;
                }
                if (!B) {
                    var H = (p.current.shards || [])
                            .map(Pp)
                            .filter(Boolean)
                            .filter(function (W) {
                                return W.contains(N.target);
                            }),
                        K = H.length > 0 ? v(N, H[0]) : !p.current.noIsolation;
                    K && N.cancelable && N.preventDefault();
                }
            }
        }, []),
        g = h.useCallback(function (w, N, L, B) {
            var H = { name: w, delta: N, target: L, should: B, shadowParent: gw(L) };
            (o.current.push(H),
                setTimeout(function () {
                    o.current = o.current.filter(function (K) {
                        return K !== H;
                    });
                }, 1));
        }, []),
        S = h.useCallback(function (w) {
            ((r.current = Rs(w)), (c.current = void 0));
        }, []),
        x = h.useCallback(function (w) {
            g(w.type, $p(w), w.target, v(w, l.lockRef.current));
        }, []),
        T = h.useCallback(function (w) {
            g(w.type, Rs(w), w.target, v(w, l.lockRef.current));
        }, []);
    h.useEffect(function () {
        return (
            _l.push(m),
            l.setCallbacks({ onScrollCapture: x, onWheelCapture: x, onTouchMoveCapture: T }),
            document.addEventListener('wheel', y, Dl),
            document.addEventListener('touchmove', y, Dl),
            document.addEventListener('touchstart', S, Dl),
            function () {
                ((_l = _l.filter(function (w) {
                    return w !== m;
                })),
                    document.removeEventListener('wheel', y, Dl),
                    document.removeEventListener('touchmove', y, Dl),
                    document.removeEventListener('touchstart', S, Dl));
            }
        );
    }, []);
    var M = l.removeScrollBar,
        R = l.inert;
    return h.createElement(
        h.Fragment,
        null,
        R ? h.createElement(m, { styles: mw(f) }) : null,
        M ? h.createElement(lw, { noRelative: l.noRelative, gapMode: l.gapMode }) : null
    );
}
function gw(l) {
    for (var o = null; l !== null; ) (l instanceof ShadowRoot && ((o = l.host), (l = l.host)), (l = l.parentNode));
    return o;
}
const vw = Kx($g, pw);
var av = h.forwardRef(function (l, o) {
    return h.createElement(Is, vn({}, l, { ref: o, sideCar: vw }));
});
av.classNames = Is.classNames;
var yw = [' ', 'Enter', 'ArrowUp', 'ArrowDown'],
    bw = [' ', 'Enter'],
    Qa = 'Select',
    [Js, Ws, Sw] = bg(Qa),
    [Ql, qC] = Pi(Qa, [Sw, Bg]),
    Fs = Bg(),
    [xw, xa] = Ql(Qa),
    [ww, Cw] = Ql(Qa),
    lv = l => {
        const {
                __scopeSelect: o,
                children: r,
                open: c,
                defaultOpen: f,
                onOpenChange: m,
                value: p,
                defaultValue: v,
                onValueChange: y,
                dir: g,
                name: S,
                autoComplete: x,
                disabled: T,
                required: M,
                form: R,
            } = l,
            w = Fs(o),
            [N, L] = h.useState(null),
            [B, H] = h.useState(null),
            [K, W] = h.useState(!1),
            ne = Pu(g),
            [k, G] = Gs({ prop: c, defaultProp: f ?? !1, onChange: m, caller: Qa }),
            [ae, ee] = Gs({ prop: p, defaultProp: v, onChange: y, caller: Qa }),
            he = h.useRef(null),
            le = N ? R || !!N.closest('form') : !0,
            [re, ie] = h.useState(new Set()),
            Q = Array.from(re)
                .map(A => A.props.value)
                .join(';');
        return u.jsx(xx, {
            ...w,
            children: u.jsxs(xw, {
                required: M,
                scope: o,
                trigger: N,
                onTriggerChange: L,
                valueNode: B,
                onValueNodeChange: H,
                valueNodeHasChildren: K,
                onValueNodeHasChildrenChange: W,
                contentId: eo(),
                value: ae,
                onValueChange: ee,
                open: k,
                onOpenChange: G,
                dir: ne,
                triggerPointerDownPosRef: he,
                disabled: T,
                children: [
                    u.jsx(Js.Provider, {
                        scope: o,
                        children: u.jsx(ww, {
                            scope: l.__scopeSelect,
                            onNativeOptionAdd: h.useCallback(A => {
                                ie(Y => new Set(Y).add(A));
                            }, []),
                            onNativeOptionRemove: h.useCallback(A => {
                                ie(Y => {
                                    const z = new Set(Y);
                                    return (z.delete(A), z);
                                });
                            }, []),
                            children: r,
                        }),
                    }),
                    le
                        ? u.jsxs(
                              jv,
                              {
                                  'aria-hidden': !0,
                                  required: M,
                                  tabIndex: -1,
                                  name: S,
                                  autoComplete: x,
                                  value: ae,
                                  onChange: A => ee(A.target.value),
                                  disabled: T,
                                  form: R,
                                  children: [ae === void 0 ? u.jsx('option', { value: '' }) : null, Array.from(re)],
                              },
                              Q
                          )
                        : null,
                ],
            }),
        });
    };
lv.displayName = Qa;
var iv = 'SelectTrigger',
    ov = h.forwardRef((l, o) => {
        const { __scopeSelect: r, disabled: c = !1, ...f } = l,
            m = Fs(r),
            p = xa(iv, r),
            v = p.disabled || c,
            y = ct(o, p.onTriggerChange),
            g = Ws(r),
            S = h.useRef('touch'),
            [x, T, M] = Rv(w => {
                const N = g().filter(H => !H.disabled),
                    L = N.find(H => H.value === p.value),
                    B = Ov(N, w, L);
                B !== void 0 && p.onValueChange(B.value);
            }),
            R = w => {
                (v || (p.onOpenChange(!0), M()), w && (p.triggerPointerDownPosRef.current = { x: Math.round(w.pageX), y: Math.round(w.pageY) }));
            };
        return u.jsx(wx, {
            asChild: !0,
            ...m,
            children: u.jsx(Ye.button, {
                type: 'button',
                role: 'combobox',
                'aria-controls': p.contentId,
                'aria-expanded': p.open,
                'aria-required': p.required,
                'aria-autocomplete': 'none',
                dir: p.dir,
                'data-state': p.open ? 'open' : 'closed',
                disabled: v,
                'data-disabled': v ? '' : void 0,
                'data-placeholder': Mv(p.value) ? '' : void 0,
                ...f,
                ref: y,
                onClick: He(f.onClick, w => {
                    (w.currentTarget.focus(), S.current !== 'mouse' && R(w));
                }),
                onPointerDown: He(f.onPointerDown, w => {
                    S.current = w.pointerType;
                    const N = w.target;
                    (N.hasPointerCapture(w.pointerId) && N.releasePointerCapture(w.pointerId),
                        w.button === 0 && w.ctrlKey === !1 && w.pointerType === 'mouse' && (R(w), w.preventDefault()));
                }),
                onKeyDown: He(f.onKeyDown, w => {
                    const N = x.current !== '';
                    (!(w.ctrlKey || w.altKey || w.metaKey) && w.key.length === 1 && T(w.key),
                        !(N && w.key === ' ') && yw.includes(w.key) && (R(), w.preventDefault()));
                }),
            }),
        });
    });
ov.displayName = iv;
var sv = 'SelectValue',
    rv = h.forwardRef((l, o) => {
        const { __scopeSelect: r, className: c, style: f, children: m, placeholder: p = '', ...v } = l,
            y = xa(sv, r),
            { onValueNodeHasChildrenChange: g } = y,
            S = m !== void 0,
            x = ct(o, y.onValueNodeChange);
        return (
            bt(() => {
                g(S);
            }, [g, S]),
            u.jsx(Ye.span, { ...v, ref: x, style: { pointerEvents: 'none' }, children: Mv(y.value) ? u.jsx(u.Fragment, { children: p }) : m })
        );
    });
rv.displayName = sv;
var Ew = 'SelectIcon',
    cv = h.forwardRef((l, o) => {
        const { __scopeSelect: r, children: c, ...f } = l;
        return u.jsx(Ye.span, { 'aria-hidden': !0, ...f, ref: o, children: c || '▼' });
    });
cv.displayName = Ew;
var Tw = 'SelectPortal',
    uv = l => u.jsx(Zg, { asChild: !0, ...l });
uv.displayName = Tw;
var Za = 'SelectContent',
    fv = h.forwardRef((l, o) => {
        const r = xa(Za, l.__scopeSelect),
            [c, f] = h.useState();
        if (
            (bt(() => {
                f(new DocumentFragment());
            }, []),
            !r.open)
        ) {
            const m = c;
            return m
                ? $i.createPortal(
                      u.jsx(dv, {
                          scope: l.__scopeSelect,
                          children: u.jsx(Js.Slot, { scope: l.__scopeSelect, children: u.jsx('div', { children: l.children }) }),
                      }),
                      m
                  )
                : null;
        }
        return u.jsx(mv, { ...l, ref: o });
    });
fv.displayName = Za;
var on = 10,
    [dv, wa] = Ql(Za),
    Aw = 'SelectContentImpl',
    Nw = Ji('SelectContent.RemoveScroll'),
    mv = h.forwardRef((l, o) => {
        const {
                __scopeSelect: r,
                position: c = 'item-aligned',
                onCloseAutoFocus: f,
                onEscapeKeyDown: m,
                onPointerDownOutside: p,
                side: v,
                sideOffset: y,
                align: g,
                alignOffset: S,
                arrowPadding: x,
                collisionBoundary: T,
                collisionPadding: M,
                sticky: R,
                hideWhenDetached: w,
                avoidCollisions: N,
                ...L
            } = l,
            B = xa(Za, r),
            [H, K] = h.useState(null),
            [W, ne] = h.useState(null),
            k = ct(o, $ => K($)),
            [G, ae] = h.useState(null),
            [ee, he] = h.useState(null),
            le = Ws(r),
            [re, ie] = h.useState(!1),
            Q = h.useRef(!1);
        (h.useEffect(() => {
            if (H) return _x(H);
        }, [H]),
            QS());
        const A = h.useCallback(
                $ => {
                    const [be, ...ye] = le().map(Me => Me.ref.current),
                        [we] = ye.slice(-1),
                        Te = document.activeElement;
                    for (const Me of $)
                        if (
                            Me === Te ||
                            (Me?.scrollIntoView({ block: 'nearest' }),
                            Me === be && W && (W.scrollTop = 0),
                            Me === we && W && (W.scrollTop = W.scrollHeight),
                            Me?.focus(),
                            document.activeElement !== Te)
                        )
                            return;
                },
                [le, W]
            ),
            Y = h.useCallback(() => A([G, H]), [A, G, H]);
        h.useEffect(() => {
            re && Y();
        }, [re, Y]);
        const { onOpenChange: z, triggerPointerDownPosRef: te } = B;
        (h.useEffect(() => {
            if (H) {
                let $ = { x: 0, y: 0 };
                const be = we => {
                        $ = { x: Math.abs(Math.round(we.pageX) - (te.current?.x ?? 0)), y: Math.abs(Math.round(we.pageY) - (te.current?.y ?? 0)) };
                    },
                    ye = we => {
                        ($.x <= 10 && $.y <= 10 ? we.preventDefault() : H.contains(we.target) || z(!1),
                            document.removeEventListener('pointermove', be),
                            (te.current = null));
                    };
                return (
                    te.current !== null &&
                        (document.addEventListener('pointermove', be), document.addEventListener('pointerup', ye, { capture: !0, once: !0 })),
                    () => {
                        (document.removeEventListener('pointermove', be), document.removeEventListener('pointerup', ye, { capture: !0 }));
                    }
                );
            }
        }, [H, z, te]),
            h.useEffect(() => {
                const $ = () => z(!1);
                return (
                    window.addEventListener('blur', $),
                    window.addEventListener('resize', $),
                    () => {
                        (window.removeEventListener('blur', $), window.removeEventListener('resize', $));
                    }
                );
            }, [z]));
        const [de, E] = Rv($ => {
                const be = le().filter(Te => !Te.disabled),
                    ye = be.find(Te => Te.ref.current === document.activeElement),
                    we = Ov(be, $, ye);
                we && setTimeout(() => we.ref.current.focus());
            }),
            q = h.useCallback(
                ($, be, ye) => {
                    const we = !Q.current && !ye;
                    ((B.value !== void 0 && B.value === be) || we) && (ae($), we && (Q.current = !0));
                },
                [B.value]
            ),
            F = h.useCallback(() => H?.focus(), [H]),
            P = h.useCallback(
                ($, be, ye) => {
                    const we = !Q.current && !ye;
                    ((B.value !== void 0 && B.value === be) || we) && he($);
                },
                [B.value]
            ),
            fe = c === 'popper' ? Xu : hv,
            pe =
                fe === Xu
                    ? {
                          side: v,
                          sideOffset: y,
                          align: g,
                          alignOffset: S,
                          arrowPadding: x,
                          collisionBoundary: T,
                          collisionPadding: M,
                          sticky: R,
                          hideWhenDetached: w,
                          avoidCollisions: N,
                      }
                    : {};
        return u.jsx(dv, {
            scope: r,
            content: H,
            viewport: W,
            onViewportChange: ne,
            itemRefCallback: q,
            selectedItem: G,
            onItemLeave: F,
            itemTextRefCallback: P,
            focusSelectedItem: Y,
            selectedItemText: ee,
            position: c,
            isPositioned: re,
            searchRef: de,
            children: u.jsx(av, {
                as: Nw,
                allowPinchZoom: !0,
                children: u.jsx(Cg, {
                    asChild: !0,
                    trapped: B.open,
                    onMountAutoFocus: $ => {
                        $.preventDefault();
                    },
                    onUnmountAutoFocus: He(f, $ => {
                        (B.trigger?.focus({ preventScroll: !0 }), $.preventDefault());
                    }),
                    children: u.jsx(xg, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: m,
                        onPointerDownOutside: p,
                        onFocusOutside: $ => $.preventDefault(),
                        onDismiss: () => B.onOpenChange(!1),
                        children: u.jsx(fe, {
                            role: 'listbox',
                            id: B.contentId,
                            'data-state': B.open ? 'open' : 'closed',
                            dir: B.dir,
                            onContextMenu: $ => $.preventDefault(),
                            ...L,
                            ...pe,
                            onPlaced: () => ie(!0),
                            ref: k,
                            style: { display: 'flex', flexDirection: 'column', outline: 'none', ...L.style },
                            onKeyDown: He(L.onKeyDown, $ => {
                                const be = $.ctrlKey || $.altKey || $.metaKey;
                                if (
                                    ($.key === 'Tab' && $.preventDefault(),
                                    !be && $.key.length === 1 && E($.key),
                                    ['ArrowUp', 'ArrowDown', 'Home', 'End'].includes($.key))
                                ) {
                                    let we = le()
                                        .filter(Te => !Te.disabled)
                                        .map(Te => Te.ref.current);
                                    if (
                                        (['ArrowUp', 'End'].includes($.key) && (we = we.slice().reverse()), ['ArrowUp', 'ArrowDown'].includes($.key))
                                    ) {
                                        const Te = $.target,
                                            Me = we.indexOf(Te);
                                        we = we.slice(Me + 1);
                                    }
                                    (setTimeout(() => A(we)), $.preventDefault());
                                }
                            }),
                        }),
                    }),
                }),
            }),
        });
    });
mv.displayName = Aw;
var jw = 'SelectItemAlignedPosition',
    hv = h.forwardRef((l, o) => {
        const { __scopeSelect: r, onPlaced: c, ...f } = l,
            m = xa(Za, r),
            p = wa(Za, r),
            [v, y] = h.useState(null),
            [g, S] = h.useState(null),
            x = ct(o, k => S(k)),
            T = Ws(r),
            M = h.useRef(!1),
            R = h.useRef(!0),
            { viewport: w, selectedItem: N, selectedItemText: L, focusSelectedItem: B } = p,
            H = h.useCallback(() => {
                if (m.trigger && m.valueNode && v && g && w && N && L) {
                    const k = m.trigger.getBoundingClientRect(),
                        G = g.getBoundingClientRect(),
                        ae = m.valueNode.getBoundingClientRect(),
                        ee = L.getBoundingClientRect();
                    if (m.dir !== 'rtl') {
                        const Te = ee.left - G.left,
                            Me = ae.left - Te,
                            Pe = k.left - Me,
                            it = k.width + Pe,
                            en = Math.max(it, G.width),
                            tn = window.innerWidth - on,
                            J = Rp(Me, [on, Math.max(on, tn - en)]);
                        ((v.style.minWidth = it + 'px'), (v.style.left = J + 'px'));
                    } else {
                        const Te = G.right - ee.right,
                            Me = window.innerWidth - ae.right - Te,
                            Pe = window.innerWidth - k.right - Me,
                            it = k.width + Pe,
                            en = Math.max(it, G.width),
                            tn = window.innerWidth - on,
                            J = Rp(Me, [on, Math.max(on, tn - en)]);
                        ((v.style.minWidth = it + 'px'), (v.style.right = J + 'px'));
                    }
                    const he = T(),
                        le = window.innerHeight - on * 2,
                        re = w.scrollHeight,
                        ie = window.getComputedStyle(g),
                        Q = parseInt(ie.borderTopWidth, 10),
                        A = parseInt(ie.paddingTop, 10),
                        Y = parseInt(ie.borderBottomWidth, 10),
                        z = parseInt(ie.paddingBottom, 10),
                        te = Q + A + re + z + Y,
                        de = Math.min(N.offsetHeight * 5, te),
                        E = window.getComputedStyle(w),
                        q = parseInt(E.paddingTop, 10),
                        F = parseInt(E.paddingBottom, 10),
                        P = k.top + k.height / 2 - on,
                        fe = le - P,
                        pe = N.offsetHeight / 2,
                        $ = N.offsetTop + pe,
                        be = Q + A + $,
                        ye = te - be;
                    if (be <= P) {
                        const Te = he.length > 0 && N === he[he.length - 1].ref.current;
                        v.style.bottom = '0px';
                        const Me = g.clientHeight - w.offsetTop - w.offsetHeight,
                            Pe = Math.max(fe, pe + (Te ? F : 0) + Me + Y),
                            it = be + Pe;
                        v.style.height = it + 'px';
                    } else {
                        const Te = he.length > 0 && N === he[0].ref.current;
                        v.style.top = '0px';
                        const Pe = Math.max(P, Q + w.offsetTop + (Te ? q : 0) + pe) + ye;
                        ((v.style.height = Pe + 'px'), (w.scrollTop = be - P + w.offsetTop));
                    }
                    ((v.style.margin = `${on}px 0`),
                        (v.style.minHeight = de + 'px'),
                        (v.style.maxHeight = le + 'px'),
                        c?.(),
                        requestAnimationFrame(() => (M.current = !0)));
                }
            }, [T, m.trigger, m.valueNode, v, g, w, N, L, m.dir, c]);
        bt(() => H(), [H]);
        const [K, W] = h.useState();
        bt(() => {
            g && W(window.getComputedStyle(g).zIndex);
        }, [g]);
        const ne = h.useCallback(
            k => {
                k && R.current === !0 && (H(), B?.(), (R.current = !1));
            },
            [H, B]
        );
        return u.jsx(Rw, {
            scope: r,
            contentWrapper: v,
            shouldExpandOnScrollRef: M,
            onScrollButtonChange: ne,
            children: u.jsx('div', {
                ref: y,
                style: { display: 'flex', flexDirection: 'column', position: 'fixed', zIndex: K },
                children: u.jsx(Ye.div, { ...f, ref: x, style: { boxSizing: 'border-box', maxHeight: '100%', ...f.style } }),
            }),
        });
    });
hv.displayName = jw;
var Mw = 'SelectPopperPosition',
    Xu = h.forwardRef((l, o) => {
        const { __scopeSelect: r, align: c = 'start', collisionPadding: f = on, ...m } = l,
            p = Fs(r);
        return u.jsx(Cx, {
            ...p,
            ...m,
            ref: o,
            align: c,
            collisionPadding: f,
            style: {
                boxSizing: 'border-box',
                ...m.style,
                '--radix-select-content-transform-origin': 'var(--radix-popper-transform-origin)',
                '--radix-select-content-available-width': 'var(--radix-popper-available-width)',
                '--radix-select-content-available-height': 'var(--radix-popper-available-height)',
                '--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
                '--radix-select-trigger-height': 'var(--radix-popper-anchor-height)',
            },
        });
    });
Xu.displayName = Mw;
var [Rw, cf] = Ql(Za, {}),
    Ku = 'SelectViewport',
    pv = h.forwardRef((l, o) => {
        const { __scopeSelect: r, nonce: c, ...f } = l,
            m = wa(Ku, r),
            p = cf(Ku, r),
            v = ct(o, m.onViewportChange),
            y = h.useRef(0);
        return u.jsxs(u.Fragment, {
            children: [
                u.jsx('style', {
                    dangerouslySetInnerHTML: {
                        __html: '[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}',
                    },
                    nonce: c,
                }),
                u.jsx(Js.Slot, {
                    scope: r,
                    children: u.jsx(Ye.div, {
                        'data-radix-select-viewport': '',
                        role: 'presentation',
                        ...f,
                        ref: v,
                        style: { position: 'relative', flex: 1, overflow: 'hidden auto', ...f.style },
                        onScroll: He(f.onScroll, g => {
                            const S = g.currentTarget,
                                { contentWrapper: x, shouldExpandOnScrollRef: T } = p;
                            if (T?.current && x) {
                                const M = Math.abs(y.current - S.scrollTop);
                                if (M > 0) {
                                    const R = window.innerHeight - on * 2,
                                        w = parseFloat(x.style.minHeight),
                                        N = parseFloat(x.style.height),
                                        L = Math.max(w, N);
                                    if (L < R) {
                                        const B = L + M,
                                            H = Math.min(R, B),
                                            K = B - H;
                                        ((x.style.height = H + 'px'),
                                            x.style.bottom === '0px' && ((S.scrollTop = K > 0 ? K : 0), (x.style.justifyContent = 'flex-end')));
                                    }
                                }
                            }
                            y.current = S.scrollTop;
                        }),
                    }),
                }),
            ],
        });
    });
pv.displayName = Ku;
var gv = 'SelectGroup',
    [Ow, kw] = Ql(gv),
    zw = h.forwardRef((l, o) => {
        const { __scopeSelect: r, ...c } = l,
            f = eo();
        return u.jsx(Ow, { scope: r, id: f, children: u.jsx(Ye.div, { role: 'group', 'aria-labelledby': f, ...c, ref: o }) });
    });
zw.displayName = gv;
var vv = 'SelectLabel',
    yv = h.forwardRef((l, o) => {
        const { __scopeSelect: r, ...c } = l,
            f = kw(vv, r);
        return u.jsx(Ye.div, { id: f.id, ...c, ref: o });
    });
yv.displayName = vv;
var qs = 'SelectItem',
    [Dw, bv] = Ql(qs),
    Sv = h.forwardRef((l, o) => {
        const { __scopeSelect: r, value: c, disabled: f = !1, textValue: m, ...p } = l,
            v = xa(qs, r),
            y = wa(qs, r),
            g = v.value === c,
            [S, x] = h.useState(m ?? ''),
            [T, M] = h.useState(!1),
            R = ct(o, B => y.itemRefCallback?.(B, c, f)),
            w = eo(),
            N = h.useRef('touch'),
            L = () => {
                f || (v.onValueChange(c), v.onOpenChange(!1));
            };
        if (c === '')
            throw new Error(
                'A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.'
            );
        return u.jsx(Dw, {
            scope: r,
            value: c,
            disabled: f,
            textId: w,
            isSelected: g,
            onItemTextChange: h.useCallback(B => {
                x(H => H || (B?.textContent ?? '').trim());
            }, []),
            children: u.jsx(Js.ItemSlot, {
                scope: r,
                value: c,
                disabled: f,
                textValue: S,
                children: u.jsx(Ye.div, {
                    role: 'option',
                    'aria-labelledby': w,
                    'data-highlighted': T ? '' : void 0,
                    'aria-selected': g && T,
                    'data-state': g ? 'checked' : 'unchecked',
                    'aria-disabled': f || void 0,
                    'data-disabled': f ? '' : void 0,
                    tabIndex: f ? void 0 : -1,
                    ...p,
                    ref: R,
                    onFocus: He(p.onFocus, () => M(!0)),
                    onBlur: He(p.onBlur, () => M(!1)),
                    onClick: He(p.onClick, () => {
                        N.current !== 'mouse' && L();
                    }),
                    onPointerUp: He(p.onPointerUp, () => {
                        N.current === 'mouse' && L();
                    }),
                    onPointerDown: He(p.onPointerDown, B => {
                        N.current = B.pointerType;
                    }),
                    onPointerMove: He(p.onPointerMove, B => {
                        ((N.current = B.pointerType), f ? y.onItemLeave?.() : N.current === 'mouse' && B.currentTarget.focus({ preventScroll: !0 }));
                    }),
                    onPointerLeave: He(p.onPointerLeave, B => {
                        B.currentTarget === document.activeElement && y.onItemLeave?.();
                    }),
                    onKeyDown: He(p.onKeyDown, B => {
                        (y.searchRef?.current !== '' && B.key === ' ') || (bw.includes(B.key) && L(), B.key === ' ' && B.preventDefault());
                    }),
                }),
            }),
        });
    });
Sv.displayName = qs;
var Ki = 'SelectItemText',
    xv = h.forwardRef((l, o) => {
        const { __scopeSelect: r, className: c, style: f, ...m } = l,
            p = xa(Ki, r),
            v = wa(Ki, r),
            y = bv(Ki, r),
            g = Cw(Ki, r),
            [S, x] = h.useState(null),
            T = ct(
                o,
                L => x(L),
                y.onItemTextChange,
                L => v.itemTextRefCallback?.(L, y.value, y.disabled)
            ),
            M = S?.textContent,
            R = h.useMemo(() => u.jsx('option', { value: y.value, disabled: y.disabled, children: M }, y.value), [y.disabled, y.value, M]),
            { onNativeOptionAdd: w, onNativeOptionRemove: N } = g;
        return (
            bt(() => (w(R), () => N(R)), [w, N, R]),
            u.jsxs(u.Fragment, {
                children: [
                    u.jsx(Ye.span, { id: y.textId, ...m, ref: T }),
                    y.isSelected && p.valueNode && !p.valueNodeHasChildren ? $i.createPortal(m.children, p.valueNode) : null,
                ],
            })
        );
    });
xv.displayName = Ki;
var wv = 'SelectItemIndicator',
    Cv = h.forwardRef((l, o) => {
        const { __scopeSelect: r, ...c } = l;
        return bv(wv, r).isSelected ? u.jsx(Ye.span, { 'aria-hidden': !0, ...c, ref: o }) : null;
    });
Cv.displayName = wv;
var Qu = 'SelectScrollUpButton',
    Ev = h.forwardRef((l, o) => {
        const r = wa(Qu, l.__scopeSelect),
            c = cf(Qu, l.__scopeSelect),
            [f, m] = h.useState(!1),
            p = ct(o, c.onScrollButtonChange);
        return (
            bt(() => {
                if (r.viewport && r.isPositioned) {
                    let v = function () {
                        const g = y.scrollTop > 0;
                        m(g);
                    };
                    const y = r.viewport;
                    return (v(), y.addEventListener('scroll', v), () => y.removeEventListener('scroll', v));
                }
            }, [r.viewport, r.isPositioned]),
            f
                ? u.jsx(Av, {
                      ...l,
                      ref: p,
                      onAutoScroll: () => {
                          const { viewport: v, selectedItem: y } = r;
                          v && y && (v.scrollTop = v.scrollTop - y.offsetHeight);
                      },
                  })
                : null
        );
    });
Ev.displayName = Qu;
var Zu = 'SelectScrollDownButton',
    Tv = h.forwardRef((l, o) => {
        const r = wa(Zu, l.__scopeSelect),
            c = cf(Zu, l.__scopeSelect),
            [f, m] = h.useState(!1),
            p = ct(o, c.onScrollButtonChange);
        return (
            bt(() => {
                if (r.viewport && r.isPositioned) {
                    let v = function () {
                        const g = y.scrollHeight - y.clientHeight,
                            S = Math.ceil(y.scrollTop) < g;
                        m(S);
                    };
                    const y = r.viewport;
                    return (v(), y.addEventListener('scroll', v), () => y.removeEventListener('scroll', v));
                }
            }, [r.viewport, r.isPositioned]),
            f
                ? u.jsx(Av, {
                      ...l,
                      ref: p,
                      onAutoScroll: () => {
                          const { viewport: v, selectedItem: y } = r;
                          v && y && (v.scrollTop = v.scrollTop + y.offsetHeight);
                      },
                  })
                : null
        );
    });
Tv.displayName = Zu;
var Av = h.forwardRef((l, o) => {
        const { __scopeSelect: r, onAutoScroll: c, ...f } = l,
            m = wa('SelectScrollButton', r),
            p = h.useRef(null),
            v = Ws(r),
            y = h.useCallback(() => {
                p.current !== null && (window.clearInterval(p.current), (p.current = null));
            }, []);
        return (
            h.useEffect(() => () => y(), [y]),
            bt(() => {
                v()
                    .find(S => S.ref.current === document.activeElement)
                    ?.ref.current?.scrollIntoView({ block: 'nearest' });
            }, [v]),
            u.jsx(Ye.div, {
                'aria-hidden': !0,
                ...f,
                ref: o,
                style: { flexShrink: 0, ...f.style },
                onPointerDown: He(f.onPointerDown, () => {
                    p.current === null && (p.current = window.setInterval(c, 50));
                }),
                onPointerMove: He(f.onPointerMove, () => {
                    (m.onItemLeave?.(), p.current === null && (p.current = window.setInterval(c, 50)));
                }),
                onPointerLeave: He(f.onPointerLeave, () => {
                    y();
                }),
            })
        );
    }),
    _w = 'SelectSeparator',
    Nv = h.forwardRef((l, o) => {
        const { __scopeSelect: r, ...c } = l;
        return u.jsx(Ye.div, { 'aria-hidden': !0, ...c, ref: o });
    });
Nv.displayName = _w;
var Iu = 'SelectArrow',
    Lw = h.forwardRef((l, o) => {
        const { __scopeSelect: r, ...c } = l,
            f = Fs(r),
            m = xa(Iu, r),
            p = wa(Iu, r);
        return m.open && p.position === 'popper' ? u.jsx(Ex, { ...f, ...c, ref: o }) : null;
    });
Lw.displayName = Iu;
var Uw = 'SelectBubbleInput',
    jv = h.forwardRef(({ __scopeSelect: l, value: o, ...r }, c) => {
        const f = h.useRef(null),
            m = ct(c, f),
            p = Mx(o);
        return (
            h.useEffect(() => {
                const v = f.current;
                if (!v) return;
                const y = window.HTMLSelectElement.prototype,
                    S = Object.getOwnPropertyDescriptor(y, 'value').set;
                if (p !== o && S) {
                    const x = new Event('change', { bubbles: !0 });
                    (S.call(v, o), v.dispatchEvent(x));
                }
            }, [p, o]),
            u.jsx(Ye.select, { ...r, style: { ...Ig, ...r.style }, ref: m, defaultValue: o })
        );
    });
jv.displayName = Uw;
function Mv(l) {
    return l === '' || l === void 0;
}
function Rv(l) {
    const o = ya(l),
        r = h.useRef(''),
        c = h.useRef(0),
        f = h.useCallback(
            p => {
                const v = r.current + p;
                (o(v),
                    (function y(g) {
                        ((r.current = g), window.clearTimeout(c.current), g !== '' && (c.current = window.setTimeout(() => y(''), 1e3)));
                    })(v));
            },
            [o]
        ),
        m = h.useCallback(() => {
            ((r.current = ''), window.clearTimeout(c.current));
        }, []);
    return (h.useEffect(() => () => window.clearTimeout(c.current), []), [r, f, m]);
}
function Ov(l, o, r) {
    const f = o.length > 1 && Array.from(o).every(g => g === o[0]) ? o[0] : o,
        m = r ? l.indexOf(r) : -1;
    let p = Bw(l, Math.max(m, 0));
    f.length === 1 && (p = p.filter(g => g !== r));
    const y = p.find(g => g.textValue.toLowerCase().startsWith(f.toLowerCase()));
    return y !== r ? y : void 0;
}
function Bw(l, o) {
    return l.map((r, c) => l[(o + c) % l.length]);
}
var Hw = lv,
    kv = ov,
    Vw = rv,
    Gw = cv,
    qw = uv,
    zv = fv,
    Yw = pv,
    Dv = yv,
    _v = Sv,
    Xw = xv,
    Kw = Cv,
    Lv = Ev,
    Uv = Tv,
    Bv = Nv;
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qw = l => l.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
    Zw = l => l.replace(/^([A-Z])|[\s-_]+(\w)/g, (o, r, c) => (c ? c.toUpperCase() : r.toLowerCase())),
    eg = l => {
        const o = Zw(l);
        return o.charAt(0).toUpperCase() + o.slice(1);
    },
    Hv = (...l) =>
        l
            .filter((o, r, c) => !!o && o.trim() !== '' && c.indexOf(o) === r)
            .join(' ')
            .trim(),
    Iw = l => {
        for (const o in l) if (o.startsWith('aria-') || o === 'role' || o === 'title') return !0;
    };
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Jw = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ww = h.forwardRef(
    ({ color: l = 'currentColor', size: o = 24, strokeWidth: r = 2, absoluteStrokeWidth: c, className: f = '', children: m, iconNode: p, ...v }, y) =>
        h.createElement(
            'svg',
            {
                ref: y,
                ...Jw,
                width: o,
                height: o,
                stroke: l,
                strokeWidth: c ? (Number(r) * 24) / Number(o) : r,
                className: Hv('lucide', f),
                ...(!m && !Iw(v) && { 'aria-hidden': 'true' }),
                ...v,
            },
            [...p.map(([g, S]) => h.createElement(g, S)), ...(Array.isArray(m) ? m : [m])]
        )
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uf = (l, o) => {
    const r = h.forwardRef(({ className: c, ...f }, m) =>
        h.createElement(Ww, { ref: m, iconNode: o, className: Hv(`lucide-${Qw(eg(l))}`, `lucide-${l}`, c), ...f })
    );
    return ((r.displayName = eg(l)), r);
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fw = [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]],
    $w = uf('check', Fw);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pw = [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]],
    Vv = uf('chevron-down', Pw);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eC = [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]],
    tC = uf('chevron-up', eC),
    Yi = Hw,
    Xi = Vw,
    Ll = h.forwardRef(({ className: l, children: o, ...r }, c) =>
        u.jsxs(kv, {
            ref: c,
            className: Et(
                'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
                l
            ),
            ...r,
            children: [o, u.jsx(Gw, { asChild: !0, children: u.jsx(Vv, { className: 'h-4 w-4 opacity-50' }) })],
        })
    );
Ll.displayName = kv.displayName;
const Gv = h.forwardRef(({ className: l, ...o }, r) =>
    u.jsx(Lv, {
        ref: r,
        className: Et('flex cursor-default items-center justify-center py-1', l),
        ...o,
        children: u.jsx(tC, { className: 'h-4 w-4' }),
    })
);
Gv.displayName = Lv.displayName;
const qv = h.forwardRef(({ className: l, ...o }, r) =>
    u.jsx(Uv, {
        ref: r,
        className: Et('flex cursor-default items-center justify-center py-1', l),
        ...o,
        children: u.jsx(Vv, { className: 'h-4 w-4' }),
    })
);
qv.displayName = Uv.displayName;
const Ul = h.forwardRef(({ className: l, children: o, position: r = 'popper', ...c }, f) =>
    u.jsx(qw, {
        children: u.jsxs(zv, {
            ref: f,
            className: Et(
                'relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]',
                r === 'popper' &&
                    'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
                l
            ),
            position: r,
            ...c,
            children: [
                u.jsx(Gv, {}),
                u.jsx(Yw, {
                    className: Et('p-1', r === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'),
                    children: o,
                }),
                u.jsx(qv, {}),
            ],
        }),
    })
);
Ul.displayName = zv.displayName;
const nC = h.forwardRef(({ className: l, ...o }, r) => u.jsx(Dv, { ref: r, className: Et('px-2 py-1.5 text-sm font-semibold', l), ...o }));
nC.displayName = Dv.displayName;
const Ct = h.forwardRef(({ className: l, children: o, ...r }, c) =>
    u.jsxs(_v, {
        ref: c,
        className: Et(
            'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            l
        ),
        ...r,
        children: [
            u.jsx('span', {
                className: 'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
                children: u.jsx(Kw, { children: u.jsx($w, { className: 'h-4 w-4' }) }),
            }),
            u.jsx(Xw, { children: o }),
        ],
    })
);
Ct.displayName = _v.displayName;
const aC = h.forwardRef(({ className: l, ...o }, r) => u.jsx(Bv, { ref: r, className: Et('-mx-1 my-1 h-px bg-muted', l), ...o }));
aC.displayName = Bv.displayName;
const Yv = h.forwardRef(({ className: l, ...o }, r) =>
    u.jsx('textarea', {
        className: Et(
            'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            l
        ),
        ref: r,
        ...o,
    })
);
Yv.displayName = 'Textarea';
var lC = 'Label',
    Xv = h.forwardRef((l, o) =>
        u.jsx(Ye.label, {
            ...l,
            ref: o,
            onMouseDown: r => {
                r.target.closest('button, input, select, textarea') ||
                    (l.onMouseDown?.(r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
            },
        })
    );
Xv.displayName = lC;
var Kv = Xv;
const iC = sg('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'),
    Xa = h.forwardRef(({ className: l, ...o }, r) => u.jsx(Kv, { ref: r, className: Et(iC(), l), ...o }));
Xa.displayName = Kv.displayName;
var Du = 'rovingFocusGroup.onEntryFocus',
    oC = { bubbles: !1, cancelable: !0 },
    no = 'RovingFocusGroup',
    [Ju, Qv, sC] = bg(no),
    [rC, Zv] = Pi(no, [sC]),
    [cC, uC] = rC(no),
    Iv = h.forwardRef((l, o) =>
        u.jsx(Ju.Provider, {
            scope: l.__scopeRovingFocusGroup,
            children: u.jsx(Ju.Slot, { scope: l.__scopeRovingFocusGroup, children: u.jsx(fC, { ...l, ref: o }) }),
        })
    );
Iv.displayName = no;
var fC = h.forwardRef((l, o) => {
        const {
                __scopeRovingFocusGroup: r,
                orientation: c,
                loop: f = !1,
                dir: m,
                currentTabStopId: p,
                defaultCurrentTabStopId: v,
                onCurrentTabStopIdChange: y,
                onEntryFocus: g,
                preventScrollOnEntryFocus: S = !1,
                ...x
            } = l,
            T = h.useRef(null),
            M = ct(o, T),
            R = Pu(m),
            [w, N] = Gs({ prop: p, defaultProp: v ?? null, onChange: y, caller: no }),
            [L, B] = h.useState(!1),
            H = ya(g),
            K = Qv(r),
            W = h.useRef(!1),
            [ne, k] = h.useState(0);
        return (
            h.useEffect(() => {
                const G = T.current;
                if (G) return (G.addEventListener(Du, H), () => G.removeEventListener(Du, H));
            }, [H]),
            u.jsx(cC, {
                scope: r,
                orientation: c,
                dir: R,
                loop: f,
                currentTabStopId: w,
                onItemFocus: h.useCallback(G => N(G), [N]),
                onItemShiftTab: h.useCallback(() => B(!0), []),
                onFocusableItemAdd: h.useCallback(() => k(G => G + 1), []),
                onFocusableItemRemove: h.useCallback(() => k(G => G - 1), []),
                children: u.jsx(Ye.div, {
                    tabIndex: L || ne === 0 ? -1 : 0,
                    'data-orientation': c,
                    ...x,
                    ref: M,
                    style: { outline: 'none', ...l.style },
                    onMouseDown: He(l.onMouseDown, () => {
                        W.current = !0;
                    }),
                    onFocus: He(l.onFocus, G => {
                        const ae = !W.current;
                        if (G.target === G.currentTarget && ae && !L) {
                            const ee = new CustomEvent(Du, oC);
                            if ((G.currentTarget.dispatchEvent(ee), !ee.defaultPrevented)) {
                                const he = K().filter(A => A.focusable),
                                    le = he.find(A => A.active),
                                    re = he.find(A => A.id === w),
                                    Q = [le, re, ...he].filter(Boolean).map(A => A.ref.current);
                                Fv(Q, S);
                            }
                        }
                        W.current = !1;
                    }),
                    onBlur: He(l.onBlur, () => B(!1)),
                }),
            })
        );
    }),
    Jv = 'RovingFocusGroupItem',
    Wv = h.forwardRef((l, o) => {
        const { __scopeRovingFocusGroup: r, focusable: c = !0, active: f = !1, tabStopId: m, children: p, ...v } = l,
            y = eo(),
            g = m || y,
            S = uC(Jv, r),
            x = S.currentTabStopId === g,
            T = Qv(r),
            { onFocusableItemAdd: M, onFocusableItemRemove: R, currentTabStopId: w } = S;
        return (
            h.useEffect(() => {
                if (c) return (M(), () => R());
            }, [c, M, R]),
            u.jsx(Ju.ItemSlot, {
                scope: r,
                id: g,
                focusable: c,
                active: f,
                children: u.jsx(Ye.span, {
                    tabIndex: x ? 0 : -1,
                    'data-orientation': S.orientation,
                    ...v,
                    ref: o,
                    onMouseDown: He(l.onMouseDown, N => {
                        c ? S.onItemFocus(g) : N.preventDefault();
                    }),
                    onFocus: He(l.onFocus, () => S.onItemFocus(g)),
                    onKeyDown: He(l.onKeyDown, N => {
                        if (N.key === 'Tab' && N.shiftKey) {
                            S.onItemShiftTab();
                            return;
                        }
                        if (N.target !== N.currentTarget) return;
                        const L = hC(N, S.orientation, S.dir);
                        if (L !== void 0) {
                            if (N.metaKey || N.ctrlKey || N.altKey || N.shiftKey) return;
                            N.preventDefault();
                            let H = T()
                                .filter(K => K.focusable)
                                .map(K => K.ref.current);
                            if (L === 'last') H.reverse();
                            else if (L === 'prev' || L === 'next') {
                                L === 'prev' && H.reverse();
                                const K = H.indexOf(N.currentTarget);
                                H = S.loop ? pC(H, K + 1) : H.slice(K + 1);
                            }
                            setTimeout(() => Fv(H));
                        }
                    }),
                    children: typeof p == 'function' ? p({ isCurrentTabStop: x, hasTabStop: w != null }) : p,
                }),
            })
        );
    });
Wv.displayName = Jv;
var dC = { ArrowLeft: 'prev', ArrowUp: 'prev', ArrowRight: 'next', ArrowDown: 'next', PageUp: 'first', Home: 'first', PageDown: 'last', End: 'last' };
function mC(l, o) {
    return o !== 'rtl' ? l : l === 'ArrowLeft' ? 'ArrowRight' : l === 'ArrowRight' ? 'ArrowLeft' : l;
}
function hC(l, o, r) {
    const c = mC(l.key, r);
    if (!(o === 'vertical' && ['ArrowLeft', 'ArrowRight'].includes(c)) && !(o === 'horizontal' && ['ArrowUp', 'ArrowDown'].includes(c))) return dC[c];
}
function Fv(l, o = !1) {
    const r = document.activeElement;
    for (const c of l) if (c === r || (c.focus({ preventScroll: o }), document.activeElement !== r)) return;
}
function pC(l, o) {
    return l.map((r, c) => l[(o + c) % l.length]);
}
var gC = Iv,
    vC = Wv;
function yC(l, o) {
    return h.useReducer((r, c) => o[r][c] ?? r, l);
}
var $v = l => {
    const { present: o, children: r } = l,
        c = bC(o),
        f = typeof r == 'function' ? r({ present: c.isPresent }) : h.Children.only(r),
        m = ct(c.ref, SC(f));
    return typeof r == 'function' || c.isPresent ? h.cloneElement(f, { ref: m }) : null;
};
$v.displayName = 'Presence';
function bC(l) {
    const [o, r] = h.useState(),
        c = h.useRef(null),
        f = h.useRef(l),
        m = h.useRef('none'),
        p = l ? 'mounted' : 'unmounted',
        [v, y] = yC(p, {
            mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
            unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
            unmounted: { MOUNT: 'mounted' },
        });
    return (
        h.useEffect(() => {
            const g = Os(c.current);
            m.current = v === 'mounted' ? g : 'none';
        }, [v]),
        bt(() => {
            const g = c.current,
                S = f.current;
            if (S !== l) {
                const T = m.current,
                    M = Os(g);
                (l ? y('MOUNT') : M === 'none' || g?.display === 'none' ? y('UNMOUNT') : y(S && T !== M ? 'ANIMATION_OUT' : 'UNMOUNT'),
                    (f.current = l));
            }
        }, [l, y]),
        bt(() => {
            if (o) {
                let g;
                const S = o.ownerDocument.defaultView ?? window,
                    x = M => {
                        const w = Os(c.current).includes(CSS.escape(M.animationName));
                        if (M.target === o && w && (y('ANIMATION_END'), !f.current)) {
                            const N = o.style.animationFillMode;
                            ((o.style.animationFillMode = 'forwards'),
                                (g = S.setTimeout(() => {
                                    o.style.animationFillMode === 'forwards' && (o.style.animationFillMode = N);
                                })));
                        }
                    },
                    T = M => {
                        M.target === o && (m.current = Os(c.current));
                    };
                return (
                    o.addEventListener('animationstart', T),
                    o.addEventListener('animationcancel', x),
                    o.addEventListener('animationend', x),
                    () => {
                        (S.clearTimeout(g),
                            o.removeEventListener('animationstart', T),
                            o.removeEventListener('animationcancel', x),
                            o.removeEventListener('animationend', x));
                    }
                );
            } else y('ANIMATION_END');
        }, [o, y]),
        {
            isPresent: ['mounted', 'unmountSuspended'].includes(v),
            ref: h.useCallback(g => {
                ((c.current = g ? getComputedStyle(g) : null), r(g));
            }, []),
        }
    );
}
function Os(l) {
    return l?.animationName || 'none';
}
function SC(l) {
    let o = Object.getOwnPropertyDescriptor(l.props, 'ref')?.get,
        r = o && 'isReactWarning' in o && o.isReactWarning;
    return r
        ? l.ref
        : ((o = Object.getOwnPropertyDescriptor(l, 'ref')?.get),
          (r = o && 'isReactWarning' in o && o.isReactWarning),
          r ? l.props.ref : l.props.ref || l.ref);
}
var $s = 'Tabs',
    [xC, YC] = Pi($s, [Zv]),
    Pv = Zv(),
    [wC, ff] = xC($s),
    ey = h.forwardRef((l, o) => {
        const {
                __scopeTabs: r,
                value: c,
                onValueChange: f,
                defaultValue: m,
                orientation: p = 'horizontal',
                dir: v,
                activationMode: y = 'automatic',
                ...g
            } = l,
            S = Pu(v),
            [x, T] = Gs({ prop: c, onChange: f, defaultProp: m ?? '', caller: $s });
        return u.jsx(wC, {
            scope: r,
            baseId: eo(),
            value: x,
            onValueChange: T,
            orientation: p,
            dir: S,
            activationMode: y,
            children: u.jsx(Ye.div, { dir: S, 'data-orientation': p, ...g, ref: o }),
        });
    });
ey.displayName = $s;
var ty = 'TabsList',
    ny = h.forwardRef((l, o) => {
        const { __scopeTabs: r, loop: c = !0, ...f } = l,
            m = ff(ty, r),
            p = Pv(r);
        return u.jsx(gC, {
            asChild: !0,
            ...p,
            orientation: m.orientation,
            dir: m.dir,
            loop: c,
            children: u.jsx(Ye.div, { role: 'tablist', 'aria-orientation': m.orientation, ...f, ref: o }),
        });
    });
ny.displayName = ty;
var ay = 'TabsTrigger',
    ly = h.forwardRef((l, o) => {
        const { __scopeTabs: r, value: c, disabled: f = !1, ...m } = l,
            p = ff(ay, r),
            v = Pv(r),
            y = sy(p.baseId, c),
            g = ry(p.baseId, c),
            S = c === p.value;
        return u.jsx(vC, {
            asChild: !0,
            ...v,
            focusable: !f,
            active: S,
            children: u.jsx(Ye.button, {
                type: 'button',
                role: 'tab',
                'aria-selected': S,
                'aria-controls': g,
                'data-state': S ? 'active' : 'inactive',
                'data-disabled': f ? '' : void 0,
                disabled: f,
                id: y,
                ...m,
                ref: o,
                onMouseDown: He(l.onMouseDown, x => {
                    !f && x.button === 0 && x.ctrlKey === !1 ? p.onValueChange(c) : x.preventDefault();
                }),
                onKeyDown: He(l.onKeyDown, x => {
                    [' ', 'Enter'].includes(x.key) && p.onValueChange(c);
                }),
                onFocus: He(l.onFocus, () => {
                    const x = p.activationMode !== 'manual';
                    !S && !f && x && p.onValueChange(c);
                }),
            }),
        });
    });
ly.displayName = ay;
var iy = 'TabsContent',
    oy = h.forwardRef((l, o) => {
        const { __scopeTabs: r, value: c, forceMount: f, children: m, ...p } = l,
            v = ff(iy, r),
            y = sy(v.baseId, c),
            g = ry(v.baseId, c),
            S = c === v.value,
            x = h.useRef(S);
        return (
            h.useEffect(() => {
                const T = requestAnimationFrame(() => (x.current = !1));
                return () => cancelAnimationFrame(T);
            }, []),
            u.jsx($v, {
                present: f || S,
                children: ({ present: T }) =>
                    u.jsx(Ye.div, {
                        'data-state': S ? 'active' : 'inactive',
                        'data-orientation': v.orientation,
                        role: 'tabpanel',
                        'aria-labelledby': y,
                        hidden: !T,
                        id: g,
                        tabIndex: 0,
                        ...p,
                        ref: o,
                        style: { ...l.style, animationDuration: x.current ? '0s' : void 0 },
                        children: T && m,
                    }),
            })
        );
    });
oy.displayName = iy;
function sy(l, o) {
    return `${l}-trigger-${o}`;
}
function ry(l, o) {
    return `${l}-content-${o}`;
}
var CC = ey,
    cy = ny,
    uy = ly,
    fy = oy;
const EC = CC,
    dy = h.forwardRef(({ className: l, ...o }, r) =>
        u.jsx(cy, { ref: r, className: Et('inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground', l), ...o })
    );
dy.displayName = cy.displayName;
const Qi = h.forwardRef(({ className: l, ...o }, r) =>
    u.jsx(uy, {
        ref: r,
        className: Et(
            'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
            l
        ),
        ...o,
    })
);
Qi.displayName = uy.displayName;
const my = h.forwardRef(({ className: l, ...o }, r) =>
    u.jsx(fy, {
        ref: r,
        className: Et(
            'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            l
        ),
        ...o,
    })
);
my.displayName = fy.displayName;
const TC = ({
        selectedProfile: l,
        selectedLanguage: o,
        selectedScreenshotInterval: r,
        selectedImageQuality: c,
        layoutMode: f,
        keybinds: m,
        googleSearchEnabled: p,
        backgroundTransparency: v,
        fontSize: y,
        onProfileChange: g,
        onLanguageChange: S,
        onScreenshotIntervalChange: x,
        onImageQualityChange: T,
        onLayoutModeChange: M,
        advancedMode: R,
        onAdvancedModeChange: w,
    }) => {
        const [N, L] = h.useState(m),
            [B, H] = h.useState(f);
        (h.useEffect(() => {
            (G(), ee(), he(), le(), re(), ie(), Ys());
        }, []),
            h.useEffect(() => {
                L(m);
            }, [m]),
            h.useEffect(() => {
                H(f);
            }, [f]));
        const K = h.useCallback(
                () => [
                    { value: 'interview', name: 'Job Interview', description: 'Get help with answering interview questions' },
                    { value: 'sales', name: 'Sales Call', description: 'Assist with sales conversations and objection handling' },
                    { value: 'meeting', name: 'Business Meeting', description: 'Support for professional meetings and discussions' },
                    { value: 'presentation', name: 'Presentation', description: 'Help with presentations and public speaking' },
                    { value: 'negotiation', name: 'Negotiation', description: 'Guidance for business negotiations and deals' },
                    { value: 'exam', name: 'Exam Assistant', description: 'Academic assistance for test-taking and exam questions' },
                ],
                []
            ),
            W = h.useCallback(
                () => [
                    { value: 'en-US', name: 'English (US)' },
                    { value: 'en-GB', name: 'English (UK)' },
                    { value: 'en-AU', name: 'English (Australia)' },
                    { value: 'en-IN', name: 'English (India)' },
                    { value: 'de-DE', name: 'German (Germany)' },
                    { value: 'es-US', name: 'Spanish (United States)' },
                    { value: 'es-ES', name: 'Spanish (Spain)' },
                    { value: 'fr-FR', name: 'French (France)' },
                    { value: 'fr-CA', name: 'French (Canada)' },
                    { value: 'hi-IN', name: 'Hindi (India)' },
                    { value: 'pt-BR', name: 'Portuguese (Brazil)' },
                    { value: 'ar-XA', name: 'Arabic (Generic)' },
                    { value: 'id-ID', name: 'Indonesian (Indonesia)' },
                    { value: 'it-IT', name: 'Italian (Italy)' },
                    { value: 'ja-JP', name: 'Japanese (Japan)' },
                    { value: 'tr-TR', name: 'Turkish (Turkey)' },
                    { value: 'vi-VN', name: 'Vietnamese (Vietnam)' },
                    { value: 'bn-IN', name: 'Bengali (India)' },
                    { value: 'gu-IN', name: 'Gujarati (India)' },
                    { value: 'kn-IN', name: 'Kannada (India)' },
                    { value: 'ml-IN', name: 'Malayalam (India)' },
                    { value: 'mr-IN', name: 'Marathi (India)' },
                    { value: 'ta-IN', name: 'Tamil (India)' },
                    { value: 'te-IN', name: 'Telugu (India)' },
                    { value: 'nl-NL', name: 'Dutch (Netherlands)' },
                    { value: 'ko-KR', name: 'Korean (South Korea)' },
                    { value: 'cmn-CN', name: 'Mandarin Chinese (China)' },
                    { value: 'pl-PL', name: 'Polish (Poland)' },
                    { value: 'ru-RU', name: 'Russian (Russia)' },
                    { value: 'th-TH', name: 'Thai (Thailand)' },
                ],
                []
            ),
            ne = h.useCallback(
                () => ({
                    interview: 'Job Interview',
                    sales: 'Sales Call',
                    meeting: 'Business Meeting',
                    presentation: 'Presentation',
                    negotiation: 'Negotiation',
                    exam: 'Exam Assistant',
                }),
                []
            ),
            k = h.useCallback(() => {
                const J = window.cheddar?.isMacOS || navigator.platform.includes('Mac');
                return {
                    moveUp: J ? 'Alt+Up' : 'Ctrl+Up',
                    moveDown: J ? 'Alt+Down' : 'Ctrl+Down',
                    moveLeft: J ? 'Alt+Left' : 'Ctrl+Left',
                    moveRight: J ? 'Alt+Right' : 'Ctrl+Right',
                    toggleVisibility: J ? 'Cmd+\\' : 'Ctrl+\\',
                    toggleClickThrough: J ? 'Cmd+M' : 'Ctrl+M',
                    nextStep: J ? 'Cmd+Enter' : 'Ctrl+Enter',
                    previousResponse: J ? 'Cmd+[' : 'Ctrl+[',
                    nextResponse: J ? 'Cmd+]' : 'Ctrl+]',
                    scrollUp: J ? 'Cmd+Shift+Up' : 'Ctrl+Shift+Up',
                    scrollDown: J ? 'Cmd+Shift+Down' : 'Ctrl+Shift+Down',
                };
            }, []),
            G = h.useCallback(() => {
                const J = localStorage.getItem('customKeybinds');
                if (J)
                    try {
                        const Se = JSON.parse(J);
                        L({ ...k(), ...Se });
                    } catch (Se) {
                        (console.error('Failed to parse saved keybinds:', Se), L(k()));
                    }
            }, [k]),
            ae = h.useCallback(J => {
                if ((localStorage.setItem('customKeybinds', JSON.stringify(J)), window.electron?.ipcRenderer))
                    try {
                        window.electron.ipcRenderer.send('update-keybinds', J);
                    } catch (Se) {
                        console.error('Failed to send keybinds to main process:', Se);
                    }
            }, []),
            ee = h.useCallback(() => {
                const J = localStorage.getItem('layoutMode');
                J && H(J);
            }, []),
            he = h.useCallback(() => {}, []),
            le = h.useCallback(() => {}, []),
            re = h.useCallback(() => {
                const J = localStorage.getItem('backgroundTransparency');
                J !== null && Q(parseFloat(J));
            }, []),
            ie = h.useCallback(() => {
                const J = localStorage.getItem('fontSize');
                J !== null && A(parseInt(J, 10));
            }, []),
            Q = h.useCallback(J => {
                const Se = document.documentElement;
                (Se.style.setProperty('--header-background', `rgba(0, 0, 0, ${J})`),
                    Se.style.setProperty('--main-content-background', `rgba(0, 0, 0, ${J})`),
                    Se.style.setProperty('--card-background', `rgba(255, 255, 255, ${J * 0.05})`),
                    Se.style.setProperty('--input-background', `rgba(0, 0, 0, ${J * 0.375})`),
                    Se.style.setProperty('--input-focus-background', `rgba(0, 0, 0, ${J * 0.625})`),
                    Se.style.setProperty('--button-background', `rgba(0, 0, 0, ${J * 0.625})`),
                    Se.style.setProperty('--preview-video-background', `rgba(0, 0, 0, ${J * 1.125})`),
                    Se.style.setProperty('--screen-option-background', `rgba(0, 0, 0, ${J * 0.5})`),
                    Se.style.setProperty('--screen-option-hover-background', `rgba(0, 0, 0, ${J * 0.75})`),
                    Se.style.setProperty('--scrollbar-background', `rgba(0, 0, 0, ${J * 0.5})`));
            }, []),
            A = h.useCallback(J => {
                document.documentElement.style.setProperty('--response-font-size', `${J}px`);
            }, []),
            Y = h.useCallback(
                J => {
                    const Se = J;
                    (localStorage.setItem('selectedProfile', Se), g(Se));
                },
                [g]
            ),
            z = h.useCallback(
                J => {
                    const Se = J;
                    (localStorage.setItem('selectedLanguage', Se), S(Se));
                },
                [S]
            ),
            te = h.useCallback(
                J => {
                    (localStorage.setItem('selectedScreenshotInterval', J), x(J));
                },
                [x]
            ),
            de = h.useCallback(
                J => {
                    T(J);
                },
                [T]
            ),
            E = h.useCallback(
                J => {
                    (localStorage.setItem('layoutMode', J), H(J), M(J));
                },
                [M]
            ),
            q = h.useCallback(J => {
                localStorage.setItem('customPrompt', J.target.value);
            }, []),
            F = h.useCallback(
                (J, Se) => {
                    const _e = { ...N, [J]: Se };
                    (L(_e), ae(_e));
                },
                [N, ae]
            ),
            P = h.useCallback(() => {
                const J = k();
                (L(J), localStorage.removeItem('customKeybinds'), ae(J));
            }, [k, ae]);
        h.useCallback(async J => {
            const Se = J.target.checked;
            if ((localStorage.setItem('googleSearchEnabled', Se.toString()), window.electron?.ipcRenderer))
                try {
                    window.electron.ipcRenderer.send('update-google-search', Se);
                } catch (_e) {
                    console.error('Failed to send google search setting to main process:', _e);
                }
        }, []);
        const fe = h.useCallback(
                J => {
                    const Se = J.target.checked;
                    (localStorage.setItem('advancedMode', Se.toString()), w(Se));
                },
                [w]
            ),
            pe = h.useCallback(
                J => {
                    const Se = parseFloat(J.target.value);
                    (localStorage.setItem('backgroundTransparency', Se.toString()), Q(Se));
                },
                [Q]
            ),
            $ = h.useCallback(
                J => {
                    const Se = parseInt(J.target.value, 10);
                    (localStorage.setItem('fontSize', Se.toString()), A(Se));
                },
                [A]
            ),
            be = h.useCallback(J => {
                ((J.target.placeholder = 'Press key combination...'), J.target.select());
            }, []),
            ye = h.useCallback(
                J => {
                    J.preventDefault();
                    const Se = [];
                    (J.ctrlKey && Se.push('Ctrl'), J.metaKey && Se.push('Cmd'), J.altKey && Se.push('Alt'), J.shiftKey && Se.push('Shift'));
                    let _e = J.key;
                    switch (J.code) {
                        case 'ArrowUp':
                            _e = 'Up';
                            break;
                        case 'ArrowDown':
                            _e = 'Down';
                            break;
                        case 'ArrowLeft':
                            _e = 'Left';
                            break;
                        case 'ArrowRight':
                            _e = 'Right';
                            break;
                        case 'Escape':
                            _e = 'Escape';
                            break;
                        case 'Enter':
                            _e = 'Enter';
                            break;
                        case 'Space':
                            _e = 'Space';
                            break;
                        case 'Backspace':
                            _e = 'Backspace';
                            break;
                        case 'Delete':
                            _e = 'Delete';
                            break;
                        case 'Tab':
                            _e = 'Tab';
                            break;
                        case 'BracketLeft':
                            _e = '[';
                            break;
                        case 'BracketRight':
                            _e = ']';
                            break;
                        case 'Backslash':
                            _e = '\\';
                            break;
                        case 'Semicolon':
                            _e = ';';
                            break;
                        case 'Quote':
                            _e = "'";
                            break;
                        case 'Comma':
                            _e = ',';
                            break;
                        case 'Period':
                            _e = '.';
                            break;
                        case 'Slash':
                            _e = '/';
                            break;
                        default:
                            J.key.length === 1 && (_e = J.key.toUpperCase());
                            break;
                    }
                    if (['Control', 'Meta', 'Alt', 'Shift'].includes(J.key)) return;
                    const Kn = [...Se, _e].join('+'),
                        Ca = J.currentTarget.dataset.action;
                    (F(Ca, Kn), (J.currentTarget.value = Kn), J.currentTarget.blur());
                },
                [F]
            ),
            we = h.useCallback(
                () => [
                    { key: 'moveUp', name: 'Move Window Up', description: 'Move the application window up' },
                    { key: 'moveDown', name: 'Move Window Down', description: 'Move the application window down' },
                    { key: 'moveLeft', name: 'Move Window Left', description: 'Move the application window left' },
                    { key: 'moveRight', name: 'Move Window Right', description: 'Move the application window right' },
                    { key: 'toggleVisibility', name: 'Toggle Window Visibility', description: 'Show/hide the application window' },
                    { key: 'toggleClickThrough', name: 'Toggle Click-through Mode', description: 'Enable/disable click-through functionality' },
                    { key: 'nextStep', name: 'Ask Next Step', description: 'Take screenshot and ask AI for the next step suggestion' },
                    { key: 'previousResponse', name: 'Previous Response', description: 'Navigate to the previous AI response' },
                    { key: 'nextResponse', name: 'Next Response', description: 'Navigate to the next AI response' },
                    { key: 'scrollUp', name: 'Scroll Response Up', description: 'Scroll the AI response content up' },
                    { key: 'scrollDown', name: 'Scroll Response Down', description: 'Scroll the AI response content down' },
                ],
                []
            ),
            Te = K(),
            Me = W(),
            Pe = ne(),
            it = we(),
            en = Te.find(J => J.value === l),
            tn = Me.find(J => J.value === o);
        return u.jsx('div', {
            className: 'settings-container',
            children: u.jsxs(EC, {
                defaultValue: 'ai-profile',
                className: 'w-full',
                children: [
                    u.jsxs(dy, {
                        className: 'grid w-full grid-cols-4',
                        children: [
                            u.jsx(Qi, { value: 'ai-profile', children: 'AI Profile' }),
                            u.jsx(Qi, { value: 'audio', children: 'Audio' }),
                            u.jsx(Qi, { value: 'display', children: 'Display' }),
                            u.jsx(Qi, { value: 'capture', children: 'Capture' }),
                        ],
                    }),
                    u.jsx(my, {
                        value: 'ai-profile',
                        className: 'space-y-4',
                        children: u.jsxs('div', {
                            className: 'settings-section',
                            children: [
                                u.jsx('div', { className: 'section-title', children: u.jsx('span', { children: 'AI Profile & Behavior' }) }),
                                u.jsxs('div', {
                                    className: 'form-grid',
                                    children: [
                                        u.jsx('div', {
                                            className: 'form-row',
                                            children: u.jsxs('div', {
                                                className: 'form-group',
                                                children: [
                                                    u.jsxs(Xa, {
                                                        className: 'form-label',
                                                        children: [
                                                            'Profile Type',
                                                            u.jsx('span', { className: 'current-selection', children: en?.name || 'Unknown' }),
                                                        ],
                                                    }),
                                                    u.jsxs(Yi, {
                                                        value: l,
                                                        onValueChange: Y,
                                                        children: [
                                                            u.jsx(Ll, {
                                                                className: 'form-control',
                                                                children: u.jsx(Xi, { placeholder: 'Select a profile' }),
                                                            }),
                                                            u.jsx(Ul, {
                                                                children: Te.map(J => u.jsx(Ct, { value: J.value, children: J.name }, J.value)),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                        u.jsxs('div', {
                                            className: 'form-group full-width',
                                            children: [
                                                u.jsx(Xa, { className: 'form-label', children: 'Custom AI Instructions' }),
                                                u.jsx(Yv, {
                                                    className: 'form-control',
                                                    placeholder: `Add specific instructions for how you want the AI to behave during ${Pe[l] || 'this interaction'}...`,
                                                    defaultValue: localStorage.getItem('customPrompt') || '',
                                                    rows: 4,
                                                    onChange: q,
                                                }),
                                                u.jsxs('div', {
                                                    className: 'form-description',
                                                    children: [
                                                        "Personalize the AI's behavior with specific instructions that will be added to the",
                                                        ' ',
                                                        Pe[l] || 'selected profile',
                                                        ' base prompts',
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    u.jsxs('div', {
                        className: 'settings-section',
                        children: [
                            u.jsx('div', { className: 'section-title', children: u.jsx('span', { children: 'Audio & Microphone' }) }),
                            u.jsx('div', {
                                className: 'form-grid',
                                children: u.jsxs('div', {
                                    className: 'form-group',
                                    children: [
                                        u.jsx('label', { className: 'form-label', children: 'Audio Mode' }),
                                        u.jsxs('select', {
                                            className: 'form-control',
                                            defaultValue: localStorage.getItem('audioMode') || 'speaker_only',
                                            onChange: J => localStorage.setItem('audioMode', J.target.value),
                                            children: [
                                                u.jsx('option', { value: 'speaker_only', children: 'Speaker Only (Interviewer)' }),
                                                u.jsx('option', { value: 'mic_only', children: 'Microphone Only (Me)' }),
                                                u.jsx('option', { value: 'both', children: 'Both Speaker & Microphone' }),
                                            ],
                                        }),
                                        u.jsx('div', {
                                            className: 'form-description',
                                            children: 'Choose which audio sources to capture for the AI.',
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    u.jsxs('div', {
                        className: 'settings-section',
                        children: [
                            u.jsx('div', { className: 'section-title', children: u.jsx('span', { children: 'Stealth Profile' }) }),
                            u.jsx('div', {
                                className: 'form-grid',
                                children: u.jsxs('div', {
                                    className: 'form-group',
                                    children: [
                                        u.jsx('label', { className: 'form-label', children: 'Profile' }),
                                        u.jsxs('select', {
                                            className: 'form-control',
                                            defaultValue: localStorage.getItem('stealthProfile') || 'balanced',
                                            onChange: J => {
                                                (localStorage.setItem('stealthProfile', J.target.value),
                                                    alert('Restart the application for stealth changes to take full effect.'));
                                            },
                                            children: [
                                                u.jsx('option', { value: 'visible', children: 'Visible' }),
                                                u.jsx('option', { value: 'balanced', children: 'Balanced' }),
                                                u.jsx('option', { value: 'ultra', children: 'Ultra-Stealth' }),
                                            ],
                                        }),
                                        u.jsx('div', {
                                            className: 'form-description',
                                            children: 'Adjusts visibility and detection resistance. A restart is required for changes to apply.',
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    u.jsxs('div', {
                        className: 'settings-section',
                        children: [
                            u.jsx('div', { className: 'section-title', children: u.jsx('span', { children: 'Language & Layout' }) }),
                            u.jsx('div', {
                                className: 'form-grid',
                                children: u.jsxs('div', {
                                    className: 'form-row',
                                    children: [
                                        u.jsxs('div', {
                                            className: 'form-group',
                                            children: [
                                                u.jsxs(Xa, {
                                                    className: 'form-label',
                                                    children: [
                                                        'Language',
                                                        u.jsx('span', { className: 'current-selection', children: tn?.name || 'Unknown' }),
                                                    ],
                                                }),
                                                u.jsxs(Yi, {
                                                    value: o,
                                                    onValueChange: z,
                                                    children: [
                                                        u.jsx(Ll, {
                                                            className: 'form-control',
                                                            children: u.jsx(Xi, { placeholder: 'Select language' }),
                                                        }),
                                                        u.jsx(Ul, {
                                                            children: Me.map(J => u.jsx(Ct, { value: J.value, children: J.name }, J.value)),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        u.jsxs('div', {
                                            className: 'form-group',
                                            children: [
                                                u.jsxs(Xa, {
                                                    className: 'form-label',
                                                    children: [
                                                        'Layout Mode',
                                                        u.jsx('span', {
                                                            className: 'current-selection',
                                                            children: B.charAt(0).toUpperCase() + B.slice(1),
                                                        }),
                                                    ],
                                                }),
                                                u.jsxs(Yi, {
                                                    value: B,
                                                    onValueChange: E,
                                                    children: [
                                                        u.jsx(Ll, {
                                                            className: 'form-control',
                                                            children: u.jsx(Xi, { placeholder: 'Select layout mode' }),
                                                        }),
                                                        u.jsxs(Ul, {
                                                            children: [
                                                                u.jsx(Ct, { value: 'compact', children: 'Compact' }),
                                                                u.jsx(Ct, { value: 'normal', children: 'Normal' }),
                                                                u.jsx(Ct, { value: 'spacious', children: 'Spacious' }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    u.jsxs('div', {
                        className: 'settings-section',
                        children: [
                            u.jsx('div', { className: 'section-title', children: u.jsx('span', { children: 'Keyboard Shortcuts' }) }),
                            u.jsx('div', {
                                className: 'keybinds-table-container',
                                children: u.jsxs('table', {
                                    className: 'keybinds-table',
                                    children: [
                                        u.jsx('thead', {
                                            children: u.jsxs('tr', {
                                                children: [u.jsx('th', { children: 'Action' }), u.jsx('th', { children: 'Shortcut' })],
                                            }),
                                        }),
                                        u.jsxs('tbody', {
                                            children: [
                                                it.map(J =>
                                                    u.jsxs(
                                                        'tr',
                                                        {
                                                            children: [
                                                                u.jsxs('td', {
                                                                    children: [
                                                                        u.jsx('div', { className: 'action-name', children: J.name }),
                                                                        u.jsx('div', { className: 'action-description', children: J.description }),
                                                                    ],
                                                                }),
                                                                u.jsx('td', {
                                                                    children: u.jsx('input', {
                                                                        type: 'text',
                                                                        className: 'keybind-input form-control',
                                                                        value: N[J.key] || '',
                                                                        'data-action': J.key,
                                                                        onFocus: be,
                                                                        onKeyDown: ye,
                                                                        readOnly: !0,
                                                                    }),
                                                                }),
                                                            ],
                                                        },
                                                        J.key
                                                    )
                                                ),
                                                u.jsx('tr', {
                                                    className: 'table-reset-row',
                                                    children: u.jsx('td', {
                                                        colSpan: 2,
                                                        children: u.jsx('button', {
                                                            className: 'reset-keybinds-button',
                                                            onClick: P,
                                                            children: 'Reset to Defaults',
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            u.jsx('div', { className: 'settings-note', children: '💡 Changes to keyboard shortcuts take effect immediately' }),
                        ],
                    }),
                    u.jsxs('div', {
                        className: 'settings-section',
                        children: [
                            u.jsx('div', { className: 'section-title', children: u.jsx('span', { children: 'Appearance' }) }),
                            u.jsx('div', {
                                className: 'form-grid',
                                children: u.jsxs('div', {
                                    className: 'form-row',
                                    children: [
                                        u.jsxs('div', {
                                            className: 'form-group',
                                            children: [
                                                u.jsxs('label', {
                                                    className: 'form-label',
                                                    children: [
                                                        'Background Transparency',
                                                        u.jsxs('span', { className: 'current-selection', children: [Math.round(v * 100), '%'] }),
                                                    ],
                                                }),
                                                u.jsxs('div', {
                                                    className: 'slider-container',
                                                    children: [
                                                        u.jsx('div', {
                                                            className: 'slider-header',
                                                            children: u.jsx('span', { className: 'slider-value', children: v.toFixed(2) }),
                                                        }),
                                                        u.jsx('input', {
                                                            type: 'range',
                                                            className: 'slider-input',
                                                            min: '0.1',
                                                            max: '1.0',
                                                            step: '0.05',
                                                            defaultValue: v.toString(),
                                                            onChange: pe,
                                                        }),
                                                        u.jsxs('div', {
                                                            className: 'slider-labels',
                                                            children: [u.jsx('span', { children: '10%' }), u.jsx('span', { children: '100%' })],
                                                        }),
                                                    ],
                                                }),
                                                u.jsx('div', {
                                                    className: 'form-description',
                                                    children: 'Adjust the transparency of the application background',
                                                }),
                                            ],
                                        }),
                                        u.jsxs('div', {
                                            className: 'form-group',
                                            children: [
                                                u.jsxs('label', {
                                                    className: 'form-label',
                                                    children: ['Font Size', u.jsxs('span', { className: 'current-selection', children: [y, 'px'] })],
                                                }),
                                                u.jsxs('div', {
                                                    className: 'slider-container',
                                                    children: [
                                                        u.jsx('div', {
                                                            className: 'slider-header',
                                                            children: u.jsxs('span', { className: 'slider-value', children: [y, 'px'] }),
                                                        }),
                                                        u.jsx('input', {
                                                            type: 'range',
                                                            className: 'slider-input',
                                                            min: '12',
                                                            max: '32',
                                                            step: '1',
                                                            defaultValue: y.toString(),
                                                            onChange: $,
                                                        }),
                                                        u.jsxs('div', {
                                                            className: 'slider-labels',
                                                            children: [u.jsx('span', { children: '12px' }), u.jsx('span', { children: '32px' })],
                                                        }),
                                                    ],
                                                }),
                                                u.jsx('div', {
                                                    className: 'form-description',
                                                    children: 'Adjust the font size of AI response text in the assistant view',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    u.jsxs('div', {
                        className: 'settings-section',
                        children: [
                            u.jsx('div', { className: 'section-title', children: u.jsx('span', { children: 'Screen Capture Settings' }) }),
                            u.jsx('div', {
                                className: 'form-grid',
                                children: u.jsxs('div', {
                                    className: 'form-row',
                                    children: [
                                        u.jsxs('div', {
                                            className: 'form-group',
                                            children: [
                                                u.jsxs(Xa, {
                                                    className: 'form-label',
                                                    children: [
                                                        'Capture Interval',
                                                        u.jsx('span', {
                                                            className: 'current-selection',
                                                            children: r === 'manual' ? 'Manual' : `${r}s`,
                                                        }),
                                                    ],
                                                }),
                                                u.jsxs(Yi, {
                                                    value: r,
                                                    onValueChange: te,
                                                    children: [
                                                        u.jsx(Ll, {
                                                            className: 'form-control',
                                                            children: u.jsx(Xi, { placeholder: 'Select capture interval' }),
                                                        }),
                                                        u.jsxs(Ul, {
                                                            children: [
                                                                u.jsx(Ct, { value: 'manual', children: 'Manual (On demand)' }),
                                                                u.jsx(Ct, { value: '1', children: 'Every 1 second' }),
                                                                u.jsx(Ct, { value: '2', children: 'Every 2 seconds' }),
                                                                u.jsx(Ct, { value: '5', children: 'Every 5 seconds' }),
                                                                u.jsx(Ct, { value: '10', children: 'Every 10 seconds' }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                u.jsx('div', {
                                                    className: 'form-description',
                                                    children:
                                                        r === 'manual'
                                                            ? 'Screenshots will only be taken when you use the "Ask Next Step" shortcut'
                                                            : 'Automatic screenshots will be taken at the specified interval',
                                                }),
                                            ],
                                        }),
                                        u.jsxs('div', {
                                            className: 'form-group',
                                            children: [
                                                u.jsxs(Xa, {
                                                    className: 'form-label',
                                                    children: [
                                                        'Image Quality',
                                                        u.jsx('span', {
                                                            className: 'current-selection',
                                                            children: c.charAt(0).toUpperCase() + c.slice(1),
                                                        }),
                                                    ],
                                                }),
                                                u.jsxs(Yi, {
                                                    value: c,
                                                    onValueChange: de,
                                                    children: [
                                                        u.jsx(Ll, {
                                                            className: 'form-control',
                                                            children: u.jsx(Xi, { placeholder: 'Select image quality' }),
                                                        }),
                                                        u.jsxs(Ul, {
                                                            children: [
                                                                u.jsx(Ct, { value: 'low', children: 'Low' }),
                                                                u.jsx(Ct, { value: 'medium', children: 'Medium' }),
                                                                u.jsx(Ct, { value: 'high', children: 'High' }),
                                                                u.jsx(Ct, { value: 'ultra', children: 'Ultra' }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                u.jsx('div', {
                                                    className: 'form-description',
                                                    children: 'Higher quality images provide better AI analysis but use more bandwidth',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    u.jsxs('div', {
                        className: 'settings-section danger-section',
                        children: [
                            u.jsx('div', { className: 'section-title danger-title', children: u.jsx('span', { children: '⚠️ Advanced Mode' }) }),
                            u.jsxs('div', {
                                className: 'form-grid',
                                children: [
                                    u.jsxs('div', {
                                        className: 'checkbox-group',
                                        children: [
                                            u.jsx('input', {
                                                type: 'checkbox',
                                                className: 'checkbox-input',
                                                id: 'advanced-mode',
                                                checked: R,
                                                onChange: fe,
                                            }),
                                            u.jsx('label', {
                                                htmlFor: 'advanced-mode',
                                                className: 'checkbox-label',
                                                children: 'Enable Advanced Mode',
                                            }),
                                        ],
                                    }),
                                    u.jsxs('div', {
                                        className: 'form-description checkbox-description',
                                        children: [
                                            'Unlock experimental features, developer tools, and advanced configuration options',
                                            u.jsx('br', {}),
                                            u.jsx('strong', { children: 'Note:' }),
                                            ' Advanced mode adds a new icon to the main navigation bar',
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    AC = ({ onExternalLinkClick: l, keybinds: o }) => {
        const [r, c] = h.useState({});
        h.useEffect(() => {
            (Ys(), m());
        }, [o]);
        const f = () => {
                const y = window.cheddar?.isMacOS || navigator.platform.includes('Mac');
                return {
                    moveUp: y ? 'Alt+Up' : 'Ctrl+Up',
                    moveDown: y ? 'Alt+Down' : 'Ctrl+Down',
                    moveLeft: y ? 'Alt+Left' : 'Ctrl+Left',
                    moveRight: y ? 'Alt+Right' : 'Ctrl+Right',
                    toggleVisibility: y ? 'Cmd+\\' : 'Ctrl+\\',
                    toggleClickThrough: y ? 'Cmd+M' : 'Ctrl+M',
                    nextStep: y ? 'Cmd+Enter' : 'Ctrl+Enter',
                    previousResponse: y ? 'Cmd+[' : 'Ctrl+[',
                    nextResponse: y ? 'Cmd+]' : 'Ctrl+]',
                    scrollUp: y ? 'Cmd+Shift+Up' : 'Ctrl+Shift+Up',
                    scrollDown: y ? 'Cmd+Shift+Down' : 'Ctrl+Shift+Down',
                };
            },
            m = () => {
                const y = localStorage.getItem('customKeybinds');
                if (y)
                    try {
                        const g = JSON.parse(y);
                        c({ ...f(), ...g });
                    } catch (g) {
                        (console.error('Failed to parse saved keybinds:', g), c(f()));
                    }
                else c(o && Object.keys(o).length > 0 ? o : f());
            },
            p = y =>
                y
                    ? y.split('+').map((g, S) => u.jsx('span', { className: 'key', children: g }, S))
                    : [u.jsx('span', { className: 'key', children: 'Not set' }, 'empty')],
            v = y => {
                l(y);
            };
        return (
            window.cheddar?.isMacOS,
            u.jsxs('div', {
                className: 'help-container',
                children: [
                    u.jsxs('div', {
                        className: 'option-group',
                        children: [
                            u.jsx('div', { className: 'option-label', children: u.jsx('span', { children: 'Community & Support' }) }),
                            u.jsxs('div', {
                                className: 'community-links',
                                children: [
                                    u.jsx('div', {
                                        className: 'community-link',
                                        onClick: () => v('https://cheatingdaddy.com'),
                                        children: '🌐 Official Website',
                                    }),
                                    u.jsx('div', {
                                        className: 'community-link',
                                        onClick: () => v('https://github.com/sohzm/cheating-daddy'),
                                        children: '📂 GitHub Repository',
                                    }),
                                    u.jsx('div', {
                                        className: 'community-link',
                                        onClick: () => v('https://discord.gg/GCBdubnXfJ'),
                                        children: '💬 Discord Community',
                                    }),
                                ],
                            }),
                        ],
                    }),
                    u.jsxs('div', {
                        className: 'option-group',
                        children: [
                            u.jsx('div', { className: 'option-label', children: u.jsx('span', { children: 'Keyboard Shortcuts' }) }),
                            u.jsxs('div', {
                                className: 'keyboard-section',
                                children: [
                                    u.jsxs('div', {
                                        className: 'keyboard-group',
                                        children: [
                                            u.jsx('div', { className: 'keyboard-group-title', children: 'Window Movement' }),
                                            u.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    u.jsx('span', { className: 'shortcut-description', children: 'Move window up' }),
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(r.moveUp) }),
                                                ],
                                            }),
                                            u.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    u.jsx('span', { className: 'shortcut-description', children: 'Move window down' }),
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(r.moveDown) }),
                                                ],
                                            }),
                                            u.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    u.jsx('span', { className: 'shortcut-description', children: 'Move window left' }),
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(r.moveLeft) }),
                                                ],
                                            }),
                                            u.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    u.jsx('span', { className: 'shortcut-description', children: 'Move window right' }),
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(r.moveRight) }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    u.jsxs('div', {
                                        className: 'keyboard-group',
                                        children: [
                                            u.jsx('div', { className: 'keyboard-group-title', children: 'Window Control' }),
                                            u.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    u.jsx('span', { className: 'shortcut-description', children: 'Toggle click-through mode' }),
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(r.toggleClickThrough) }),
                                                ],
                                            }),
                                            u.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    u.jsx('span', { className: 'shortcut-description', children: 'Toggle window visibility' }),
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(r.toggleVisibility) }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    u.jsxs('div', {
                                        className: 'keyboard-group',
                                        children: [
                                            u.jsx('div', { className: 'keyboard-group-title', children: 'AI Actions' }),
                                            u.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    u.jsx('span', {
                                                        className: 'shortcut-description',
                                                        children: 'Take screenshot and ask for next step',
                                                    }),
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(r.nextStep) }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    u.jsxs('div', {
                                        className: 'keyboard-group',
                                        children: [
                                            u.jsx('div', { className: 'keyboard-group-title', children: 'Response Navigation' }),
                                            u.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    u.jsx('span', { className: 'shortcut-description', children: 'Previous response' }),
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(r.previousResponse) }),
                                                ],
                                            }),
                                            u.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    u.jsx('span', { className: 'shortcut-description', children: 'Next response' }),
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(r.nextResponse) }),
                                                ],
                                            }),
                                            u.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    u.jsx('span', { className: 'shortcut-description', children: 'Scroll response up' }),
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(r.scrollUp) }),
                                                ],
                                            }),
                                            u.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    u.jsx('span', { className: 'shortcut-description', children: 'Scroll response down' }),
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(r.scrollDown) }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    u.jsxs('div', {
                                        className: 'keyboard-group',
                                        children: [
                                            u.jsx('div', { className: 'keyboard-group-title', children: 'Text Input' }),
                                            u.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    u.jsx('span', { className: 'shortcut-description', children: 'Send message to AI' }),
                                                    u.jsx('div', {
                                                        className: 'shortcut-keys',
                                                        children: u.jsx('span', { className: 'key', children: 'Enter' }),
                                                    }),
                                                ],
                                            }),
                                            u.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    u.jsx('span', { className: 'shortcut-description', children: 'New line in text input' }),
                                                    u.jsxs('div', {
                                                        className: 'shortcut-keys',
                                                        children: [
                                                            u.jsx('span', { className: 'key', children: 'Shift' }),
                                                            u.jsx('span', { className: 'key', children: 'Enter' }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            u.jsx('div', {
                                className: 'description',
                                style: { marginTop: '12px', fontStyle: 'italic', textAlign: 'center' },
                                children: '💡 You can customize these shortcuts in the Settings page!',
                            }),
                        ],
                    }),
                    u.jsxs('div', {
                        className: 'option-group',
                        children: [
                            u.jsx('div', { className: 'option-label', children: u.jsx('span', { children: 'How to Use' }) }),
                            u.jsxs('div', {
                                className: 'usage-steps',
                                children: [
                                    u.jsxs('div', {
                                        className: 'usage-step',
                                        children: [
                                            u.jsx('strong', { children: 'Start a Session:' }),
                                            ' Enter your Gemini API key and click "Start Session"',
                                        ],
                                    }),
                                    u.jsxs('div', {
                                        className: 'usage-step',
                                        children: [u.jsx('strong', { children: 'Customize:' }), ' Choose your profile and language in the settings'],
                                    }),
                                    u.jsxs('div', {
                                        className: 'usage-step',
                                        children: [
                                            u.jsx('strong', { children: 'Position Window:' }),
                                            ' Use keyboard shortcuts to move the window to your desired location',
                                        ],
                                    }),
                                    u.jsxs('div', {
                                        className: 'usage-step',
                                        children: [
                                            u.jsx('strong', { children: 'Click-through Mode:' }),
                                            ' Use ',
                                            p(r.toggleClickThrough),
                                            ' to make the window click-through',
                                        ],
                                    }),
                                    u.jsxs('div', {
                                        className: 'usage-step',
                                        children: [
                                            u.jsx('strong', { children: 'Get AI Help:' }),
                                            ' The AI will analyze your screen and audio to provide assistance',
                                        ],
                                    }),
                                    u.jsxs('div', {
                                        className: 'usage-step',
                                        children: [
                                            u.jsx('strong', { children: 'Text Messages:' }),
                                            ' Type questions or requests to the AI using the text input',
                                        ],
                                    }),
                                    u.jsxs('div', {
                                        className: 'usage-step',
                                        children: [
                                            u.jsx('strong', { children: 'Navigate Responses:' }),
                                            ' Use ',
                                            p(r.previousResponse),
                                            ' and',
                                            p(r.nextResponse),
                                            ' to browse through AI responses',
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    u.jsxs('div', {
                        className: 'option-group',
                        children: [
                            u.jsx('div', { className: 'option-label', children: u.jsx('span', { children: 'Supported Profiles' }) }),
                            u.jsxs('div', {
                                className: 'profiles-grid',
                                children: [
                                    u.jsxs('div', {
                                        className: 'profile-item',
                                        children: [
                                            u.jsx('div', { className: 'profile-name', children: 'Job Interview' }),
                                            u.jsx('div', {
                                                className: 'profile-description',
                                                children: 'Get help with interview questions and responses',
                                            }),
                                        ],
                                    }),
                                    u.jsxs('div', {
                                        className: 'profile-item',
                                        children: [
                                            u.jsx('div', { className: 'profile-name', children: 'Sales Call' }),
                                            u.jsx('div', {
                                                className: 'profile-description',
                                                children: 'Assistance with sales conversations and objection handling',
                                            }),
                                        ],
                                    }),
                                    u.jsxs('div', {
                                        className: 'profile-item',
                                        children: [
                                            u.jsx('div', { className: 'profile-name', children: 'Business Meeting' }),
                                            u.jsx('div', {
                                                className: 'profile-description',
                                                children: 'Support for professional meetings and discussions',
                                            }),
                                        ],
                                    }),
                                    u.jsxs('div', {
                                        className: 'profile-item',
                                        children: [
                                            u.jsx('div', { className: 'profile-name', children: 'Presentation' }),
                                            u.jsx('div', {
                                                className: 'profile-description',
                                                children: 'Help with presentations and public speaking',
                                            }),
                                        ],
                                    }),
                                    u.jsxs('div', {
                                        className: 'profile-item',
                                        children: [
                                            u.jsx('div', { className: 'profile-name', children: 'Negotiation' }),
                                            u.jsx('div', {
                                                className: 'profile-description',
                                                children: 'Guidance for business negotiations and deals',
                                            }),
                                        ],
                                    }),
                                    u.jsxs('div', {
                                        className: 'profile-item',
                                        children: [
                                            u.jsx('div', { className: 'profile-name', children: 'Exam Assistant' }),
                                            u.jsx('div', {
                                                className: 'profile-description',
                                                children: 'Academic assistance for test-taking and exam questions',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    u.jsxs('div', {
                        className: 'option-group',
                        children: [
                            u.jsx('div', { className: 'option-label', children: u.jsx('span', { children: 'Audio Input' }) }),
                            u.jsx('div', {
                                className: 'description',
                                children: 'The AI listens to conversations and provides contextual assistance based on what it hears.',
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    NC = () => {
        const [l, o] = h.useState('sessions'),
            [r, c] = h.useState([]),
            [f, m] = h.useState([]),
            [p, v] = h.useState(null),
            [y, g] = h.useState(!1),
            S = h.useCallback(async () => {
                g(!0);
                try {
                    const k = await window.cheddar.getAllConversationSessions();
                    c(k || []);
                } catch (k) {
                    (console.error('Failed to load conversations:', k), c([]));
                } finally {
                    g(!1);
                }
            }, []),
            x = h.useCallback(() => {
                try {
                    const k = localStorage.getItem('savedResponses'),
                        G = k ? JSON.parse(k) : [];
                    m(G);
                } catch (k) {
                    (console.error('Failed to load saved responses:', k), m([]));
                }
            }, []),
            T = h.useCallback(k => {
                v(k);
            }, []),
            M = h.useCallback(() => {
                v(null);
            }, []),
            R = h.useCallback(
                k => {
                    const G = f.filter((ae, ee) => ee !== k);
                    (m(G), localStorage.setItem('savedResponses', JSON.stringify(G)));
                },
                [f]
            ),
            w = h.useCallback(k => new Date(k).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), []),
            N = h.useCallback(k => new Date(k).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: !0 }), []),
            L = h.useCallback(
                k => new Date(k).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }),
                []
            ),
            B = h.useCallback(
                k =>
                    k.transcription
                        ? k.transcription.length > 100
                            ? k.transcription.substring(0, 100) + '...'
                            : k.transcription
                        : 'No preview available',
                []
            ),
            H = h.useCallback(
                () => ({
                    interview: 'Job Interview',
                    sales: 'Sales Call',
                    meeting: 'Business Meeting',
                    presentation: 'Presentation',
                    negotiation: 'Negotiation',
                    exam: 'Exam Assistant',
                }),
                []
            );
        h.useEffect(() => {
            l === 'sessions' ? S() : x();
        }, [l, S, x]);
        const K = () =>
                y
                    ? u.jsx('div', { className: 'loading', children: 'Loading conversation history...' })
                    : r.length === 0
                      ? u.jsxs('div', {
                            className: 'emptyState',
                            children: [
                                u.jsx('div', { className: 'emptyStateTitle', children: 'No conversations yet' }),
                                u.jsx('div', { children: 'Start a session to see your conversation history here' }),
                            ],
                        })
                      : u.jsx('div', {
                            className: 'sessionsList',
                            children: r.map(k =>
                                u.jsxs(
                                    'div',
                                    {
                                        className: 'sessionItem',
                                        onClick: () => T(k),
                                        children: [
                                            u.jsxs('div', {
                                                className: 'sessionHeader',
                                                children: [
                                                    u.jsx('span', { className: 'sessionDate', children: w(k.timestamp) }),
                                                    u.jsx('span', { className: 'sessionTime', children: N(k.timestamp) }),
                                                ],
                                            }),
                                            u.jsx('div', { className: 'sessionPreview', children: B(k) }),
                                        ],
                                    },
                                    k.id
                                )
                            ),
                        }),
            W = () => {
                if (!p) return null;
                const { conversationHistory: k } = p,
                    G = [];
                return (
                    k &&
                        k.forEach(ae => {
                            (ae.transcription && G.push({ type: 'user', content: ae.transcription, timestamp: ae.timestamp }),
                                ae.ai_response && G.push({ type: 'ai', content: ae.ai_response, timestamp: ae.timestamp }));
                        }),
                    u.jsxs('div', {
                        className: 'historyContainer',
                        children: [
                            u.jsxs('div', {
                                className: 'backHeader',
                                children: [
                                    u.jsxs('button', {
                                        className: 'backButton',
                                        onClick: M,
                                        children: [
                                            u.jsx('svg', {
                                                width: '16px',
                                                height: '16px',
                                                strokeWidth: '1.7',
                                                viewBox: '0 0 24 24',
                                                fill: 'none',
                                                xmlns: 'http://www.w3.org/2000/svg',
                                                color: 'currentColor',
                                                children: u.jsx('path', {
                                                    d: 'M15 6L9 12L15 18',
                                                    stroke: 'currentColor',
                                                    strokeWidth: '1.7',
                                                    strokeLinecap: 'round',
                                                    strokeLinejoin: 'round',
                                                }),
                                            }),
                                            'Back to Sessions',
                                        ],
                                    }),
                                    u.jsxs('div', {
                                        className: 'legend',
                                        children: [
                                            u.jsxs('div', {
                                                className: 'legendItem',
                                                children: [u.jsx('div', { className: 'legendDot user' }), u.jsx('span', { children: 'Them' })],
                                            }),
                                            u.jsxs('div', {
                                                className: 'legendItem',
                                                children: [u.jsx('div', { className: 'legendDot ai' }), u.jsx('span', { children: 'Suggestion' })],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            u.jsx('div', {
                                className: 'conversationView',
                                children:
                                    G.length > 0
                                        ? G.map((ae, ee) => u.jsx('div', { className: `message ${ae.type}`, children: ae.content }, ee))
                                        : u.jsx('div', { className: 'emptyState', children: 'No conversation data available' }),
                            }),
                        ],
                    })
                );
            },
            ne = () => {
                if (f.length === 0)
                    return u.jsxs('div', {
                        className: 'emptyState',
                        children: [
                            u.jsx('div', { className: 'emptyStateTitle', children: 'No saved responses' }),
                            u.jsx('div', { children: 'Use the save button during conversations to save important responses' }),
                        ],
                    });
                const k = H();
                return u.jsx('div', {
                    className: 'sessionsList',
                    children: f.map((G, ae) =>
                        u.jsxs(
                            'div',
                            {
                                className: 'savedResponseItem',
                                children: [
                                    u.jsxs('div', {
                                        className: 'savedResponseHeader',
                                        children: [
                                            u.jsxs('div', {
                                                children: [
                                                    u.jsx('span', { className: 'savedResponseProfile', children: k[G.profile] || G.profile }),
                                                    u.jsx('span', { className: 'savedResponseDate', children: L(G.timestamp) }),
                                                ],
                                            }),
                                            u.jsx('button', {
                                                className: 'deleteButton',
                                                onClick: () => R(ae),
                                                title: 'Delete saved response',
                                                children: u.jsx('svg', {
                                                    width: '16px',
                                                    height: '16px',
                                                    strokeWidth: '1.7',
                                                    viewBox: '0 0 24 24',
                                                    fill: 'none',
                                                    xmlns: 'http://www.w3.org/2000/svg',
                                                    children: u.jsx('path', {
                                                        d: 'M6 6L18 18M6 18L18 6',
                                                        stroke: 'currentColor',
                                                        strokeWidth: '1.7',
                                                        strokeLinecap: 'round',
                                                        strokeLinejoin: 'round',
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    u.jsx('div', { className: 'savedResponseContent', children: G.response }),
                                ],
                            },
                            ae
                        )
                    ),
                });
            };
        return p
            ? W()
            : u.jsx('div', {
                  className: 'host',
                  children: u.jsxs('div', {
                      className: 'historyContainer',
                      children: [
                          u.jsxs('div', {
                              className: 'tabsContainer',
                              children: [
                                  u.jsx('button', {
                                      className: `tab ${l === 'sessions' ? 'active' : ''}`,
                                      onClick: () => o('sessions'),
                                      children: 'Conversation History',
                                  }),
                                  u.jsxs('button', {
                                      className: `tab ${l === 'saved' ? 'active' : ''}`,
                                      onClick: () => o('saved'),
                                      children: ['Saved Responses (', f.length, ')'],
                                  }),
                              ],
                          }),
                          l === 'sessions' ? K() : ne(),
                      ],
                  }),
              });
    },
    jC = () => {
        const [l, o] = h.useState({
            isClearing: !1,
            statusMessage: '',
            statusType: '',
            throttleTokens: !0,
            maxTokensPerMin: 1e6,
            throttleAtPercent: 75,
            contentProtection: !0,
        });
        h.useEffect(() => {
            (r(), c(), Ys());
        }, []);
        const r = () => {
                const S = localStorage.getItem('throttleTokens'),
                    x = localStorage.getItem('maxTokensPerMin'),
                    T = localStorage.getItem('throttleAtPercent');
                o(M => ({
                    ...M,
                    throttleTokens: S !== null ? S === 'true' : !0,
                    maxTokensPerMin: (x !== null && parseInt(x, 10)) || 1e6,
                    throttleAtPercent: (T !== null && parseInt(T, 10)) || 75,
                }));
            },
            c = () => {
                const S = localStorage.getItem('contentProtection');
                o(x => ({ ...x, contentProtection: S !== null ? S === 'true' : !0 }));
            },
            f = async () => {
                if (!l.isClearing) {
                    o(S => ({ ...S, isClearing: !0, statusMessage: '', statusType: '' }));
                    try {
                        (localStorage.clear(), sessionStorage.clear());
                        const S = await indexedDB.databases(),
                            x = S.map(
                                M =>
                                    new Promise((R, w) => {
                                        if (!M.name) {
                                            R();
                                            return;
                                        }
                                        const N = indexedDB.deleteDatabase(M.name);
                                        ((N.onsuccess = () => R()),
                                            (N.onerror = () => w(N.error)),
                                            (N.onblocked = () => {
                                                (console.warn(`Deletion of database ${M.name} was blocked`), R());
                                            }));
                                    })
                            );
                        if ((await Promise.all(x), 'caches' in window)) {
                            const M = await caches.keys();
                            await Promise.all(M.map(R => caches.delete(R)));
                        }
                        const T = `✅ Successfully cleared all local data (${S.length} databases, localStorage, sessionStorage, and caches)`;
                        (o(M => ({ ...M, statusMessage: T, statusType: 'success' })),
                            setTimeout(() => {
                                (o(M => ({ ...M, statusMessage: '🔄 Closing application...' })),
                                    setTimeout(async () => {
                                        window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('quit-application'));
                                    }, 1e3));
                            }, 2e3));
                    } catch (S) {
                        console.error('Error clearing data:', S);
                        const x = `❌ Error clearing data: ${S.message}`;
                        o(T => ({ ...T, statusMessage: x, statusType: 'error' }));
                    } finally {
                        o(S => ({ ...S, isClearing: !1 }));
                    }
                }
            },
            m = S => {
                const x = S.target.checked;
                (o(T => ({ ...T, throttleTokens: x })), localStorage.setItem('throttleTokens', x.toString()));
            },
            p = S => {
                const x = parseInt(S.target.value, 10);
                !isNaN(x) && x > 0 && (o(T => ({ ...T, maxTokensPerMin: x })), localStorage.setItem('maxTokensPerMin', x.toString()));
            },
            v = S => {
                const x = parseInt(S.target.value, 10);
                !isNaN(x) &&
                    x >= 0 &&
                    x <= 100 &&
                    (o(T => ({ ...T, throttleAtPercent: x })), localStorage.setItem('throttleAtPercent', x.toString()));
            },
            y = () => {
                (o(S => ({ ...S, throttleTokens: !0, maxTokensPerMin: 1e6, throttleAtPercent: 75 })),
                    localStorage.removeItem('throttleTokens'),
                    localStorage.removeItem('maxTokensPerMin'),
                    localStorage.removeItem('throttleAtPercent'));
            },
            g = async S => {
                const x = S.target.checked;
                if ((o(T => ({ ...T, contentProtection: x })), localStorage.setItem('contentProtection', x.toString()), window.electron?.ipcRenderer))
                    try {
                        await window.electron.ipcRenderer.invoke('update-content-protection', x);
                    } catch (T) {
                        console.error('Failed to update content protection:', T);
                    }
            };
        return u.jsxs('div', {
            className: 'advancedContainer',
            children: [
                u.jsxs('div', {
                    className: 'advancedSection',
                    children: [
                        u.jsx('div', { className: 'sectionTitle', children: u.jsx('span', { children: '🔒 Content Protection' }) }),
                        u.jsx('div', {
                            className: 'advancedDescription',
                            children:
                                'Content protection makes the application window invisible to screen sharing and recording software. This is useful for privacy when sharing your screen, but may interfere with certain display setups like DisplayLink.',
                        }),
                        u.jsxs('div', {
                            className: 'formGrid',
                            children: [
                                u.jsxs('div', {
                                    className: 'checkboxGroup',
                                    children: [
                                        u.jsx('input', {
                                            type: 'checkbox',
                                            className: 'checkboxInput',
                                            id: 'content-protection',
                                            checked: l.contentProtection,
                                            onChange: g,
                                        }),
                                        u.jsx('label', {
                                            htmlFor: 'content-protection',
                                            className: 'checkboxLabel',
                                            children: 'Enable content protection (stealth mode)',
                                        }),
                                    ],
                                }),
                                u.jsx('div', {
                                    className: 'formDescription',
                                    style: { marginLeft: '22px' },
                                    children: l.contentProtection
                                        ? 'The application is currently invisible to screen sharing and recording software.'
                                        : 'The application is currently visible to screen sharing and recording software.',
                                }),
                            ],
                        }),
                    ],
                }),
                u.jsxs('div', {
                    className: 'advancedSection',
                    children: [
                        u.jsx('div', { className: 'sectionTitle', children: u.jsx('span', { children: '⏱️ Rate Limiting' }) }),
                        u.jsxs('div', {
                            className: 'rateLimitWarning',
                            children: [
                                u.jsx('span', { className: 'rateLimitWarningIcon', children: '⚠️' }),
                                u.jsxs('span', {
                                    children: [
                                        u.jsx('strong', { children: 'Warning:' }),
                                        " Don't mess with these settings if you don't know what this is about. Incorrect rate limiting settings may cause the application to stop working properly or hit API limits unexpectedly.",
                                    ],
                                }),
                            ],
                        }),
                        u.jsxs('div', {
                            className: 'formGrid',
                            children: [
                                u.jsxs('div', {
                                    className: 'checkboxGroup',
                                    children: [
                                        u.jsx('input', {
                                            type: 'checkbox',
                                            className: 'checkboxInput',
                                            id: 'throttle-tokens',
                                            checked: l.throttleTokens,
                                            onChange: m,
                                        }),
                                        u.jsx('label', {
                                            htmlFor: 'throttle-tokens',
                                            className: 'checkboxLabel',
                                            children: 'Throttle tokens when close to rate limit',
                                        }),
                                    ],
                                }),
                                u.jsxs('div', {
                                    className: `rateLimitControls ${l.throttleTokens ? 'enabled' : ''}`,
                                    children: [
                                        u.jsxs('div', {
                                            className: 'formRow',
                                            children: [
                                                u.jsxs('div', {
                                                    className: 'formGroup',
                                                    children: [
                                                        u.jsx('label', { className: 'formLabel', children: 'Max Allowed Tokens Per Minute' }),
                                                        u.jsx('input', {
                                                            type: 'number',
                                                            className: 'formControl',
                                                            value: l.maxTokensPerMin,
                                                            min: '1000',
                                                            max: '10000000',
                                                            step: '1000',
                                                            onInput: p,
                                                            disabled: !l.throttleTokens,
                                                        }),
                                                        u.jsx('div', {
                                                            className: 'formDescription',
                                                            children: 'Maximum number of tokens allowed per minute before throttling kicks in',
                                                        }),
                                                    ],
                                                }),
                                                u.jsxs('div', {
                                                    className: 'formGroup',
                                                    children: [
                                                        u.jsx('label', { className: 'formLabel', children: 'Throttle At Percent' }),
                                                        u.jsx('input', {
                                                            type: 'number',
                                                            className: 'formControl',
                                                            value: l.throttleAtPercent,
                                                            min: '1',
                                                            max: '99',
                                                            step: '1',
                                                            onInput: v,
                                                            disabled: !l.throttleTokens,
                                                        }),
                                                        u.jsxs('div', {
                                                            className: 'formDescription',
                                                            children: [
                                                                'Start throttling when this percentage of the limit is reached (',
                                                                l.throttleAtPercent,
                                                                '% =',
                                                                Math.floor((l.maxTokensPerMin * l.throttleAtPercent) / 100),
                                                                ' tokens)',
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        u.jsxs('div', {
                                            className: 'rateLimitReset',
                                            children: [
                                                u.jsx('button', {
                                                    className: 'actionButton',
                                                    onClick: y,
                                                    disabled: !l.throttleTokens,
                                                    children: 'Reset to Defaults',
                                                }),
                                                u.jsx('div', {
                                                    className: 'formDescription',
                                                    style: { marginTop: '8px' },
                                                    children: 'Reset rate limiting settings to default values',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                u.jsxs('div', {
                    className: 'advancedSection dangerSection',
                    children: [
                        u.jsx('div', { className: 'sectionTitle danger', children: u.jsx('span', { children: '🗑️ Data Management' }) }),
                        u.jsxs('div', {
                            className: 'dangerBox',
                            children: [
                                u.jsx('span', { className: 'dangerIcon', children: '⚠️' }),
                                u.jsxs('span', {
                                    children: [
                                        u.jsx('strong', { children: 'Important:' }),
                                        ' This action will permanently delete all local data and cannot be undone.',
                                    ],
                                }),
                            ],
                        }),
                        u.jsxs('div', {
                            children: [
                                u.jsx('button', {
                                    className: 'actionButton dangerButton',
                                    onClick: f,
                                    disabled: l.isClearing,
                                    children: l.isClearing ? '🔄 Clearing...' : '🗑️ Clear All Local Data',
                                }),
                                l.statusMessage &&
                                    u.jsx('div', {
                                        className: `statusMessage ${l.statusType === 'success' ? 'statusSuccess' : 'statusError'}`,
                                        children: l.statusMessage,
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    MC = ({ onComplete: l, onClose: o }) => {
        const [r, c] = h.useState(0),
            [f, m] = h.useState(''),
            [p, v] = h.useState(!1),
            [y, g] = h.useState(0),
            [S, x] = h.useState(null),
            T = h.useRef(null),
            M = h.useRef(null),
            R = 800,
            w = [
                [
                    [25, 25, 35],
                    [20, 20, 30],
                    [30, 25, 40],
                    [15, 15, 25],
                    [35, 30, 45],
                    [10, 10, 20],
                ],
                [
                    [20, 25, 35],
                    [15, 20, 30],
                    [25, 30, 40],
                    [10, 15, 25],
                    [30, 35, 45],
                    [5, 10, 20],
                ],
                [
                    [25, 25, 25],
                    [20, 20, 20],
                    [30, 30, 30],
                    [15, 15, 15],
                    [35, 35, 35],
                    [10, 10, 10],
                ],
                [
                    [20, 30, 25],
                    [15, 25, 20],
                    [25, 35, 30],
                    [10, 20, 15],
                    [30, 40, 35],
                    [5, 15, 10],
                ],
                [
                    [30, 25, 20],
                    [25, 20, 15],
                    [35, 30, 25],
                    [20, 15, 10],
                    [40, 35, 30],
                    [15, 10, 5],
                ],
            ],
            N = [
                {
                    icon: 'assets/onboarding/welcome.svg',
                    title: 'Welcome to Cheating Daddy',
                    content:
                        'Your AI assistant that listens and watches, then provides intelligent suggestions automatically during interviews and meetings.',
                },
                {
                    icon: 'assets/onboarding/security.svg',
                    title: 'Completely Private',
                    content: 'Invisible to screen sharing apps and recording software. Your secret advantage stays completely hidden from others.',
                },
                {
                    icon: 'assets/onboarding/context.svg',
                    title: 'Add Your Context',
                    content: 'Share relevant information to help the AI provide better, more personalized assistance.',
                    showTextarea: !0,
                },
                { icon: 'assets/onboarding/customize.svg', title: 'Additional Features', content: '', showFeatures: !0 },
                {
                    icon: 'assets/onboarding/ready.svg',
                    title: 'Ready to Go',
                    content: 'Add your Gemini API key in settings and start getting AI-powered assistance in real-time.',
                },
            ],
            L = h.useCallback(ee => (ee < 0.5 ? 4 * ee * ee * ee : 1 - Math.pow(-2 * ee + 2, 3) / 2), []),
            B = h.useCallback(
                (ee, he, le) =>
                    ee.map((re, ie) => {
                        const Q = he[ie];
                        return [re[0] + (Q[0] - re[0]) * le, re[1] + (Q[1] - re[1]) * le, re[2] + (Q[2] - re[2]) * le];
                    }),
                []
            ),
            H = h.useCallback(ee => {
                m(ee.target.value);
            }, []),
            K = h.useCallback(() => {
                (f.trim() && localStorage.setItem('customPrompt', f.trim()), localStorage.setItem('onboardingCompleted', 'true'), l());
            }, [f, l]),
            W = h.useCallback(
                ee => {
                    (x([...w[r]]), c(ee), v(!0), g(performance.now()));
                },
                [w, r]
            ),
            ne = h.useCallback(() => {
                r < 4 ? W(r + 1) : K();
            }, [r, W, K]),
            k = h.useCallback(() => {
                r > 0 && W(r - 1);
            }, [r, W]),
            G = h.useCallback(
                ee => {
                    ee !== r && W(ee);
                },
                [r, W]
            );
        (h.useEffect(() => {
            const ee = T.current;
            if (!ee || !ee.getContext('2d')) return;
            const le = () => {
                const Q = ee.getBoundingClientRect();
                ((ee.width = Q.width), (ee.height = Q.height));
            };
            le();
            const re = Q => {
                (ae(Q), (M.current = requestAnimationFrame(re)));
            };
            re(0);
            const ie = () => le();
            return (
                window.addEventListener('resize', ie),
                () => {
                    (M.current && cancelAnimationFrame(M.current), window.removeEventListener('resize', ie));
                }
            );
        }, []),
            h.useEffect(() => {
                const ee = localStorage.getItem('customPrompt');
                ee && m(ee);
            }, []));
        const ae = h.useCallback(
            ee => {
                const he = T.current,
                    le = he?.getContext('2d');
                if (!le || !he) return;
                const { width: re, height: ie } = he;
                let Q = w[r];
                if (p && S) {
                    const P = ee - y,
                        fe = Math.min(P / R, 1),
                        pe = L(fe);
                    ((Q = B(S, w[r], pe)), fe >= 1 && (v(!1), x(null)));
                }
                const A = ee * 5e-4,
                    Y = Math.sin(A * 0.7) * re * 0.3,
                    z = Math.cos(A * 0.5) * ie * 0.2,
                    te = le.createLinearGradient(Y, z, re + Y * 0.5, ie + z * 0.5);
                (Q.forEach((P, fe) => {
                    const pe = fe / (Q.length - 1),
                        $ = Math.sin(A + fe * 0.3) * 0.05,
                        be = Math.max(0, Math.min(255, P[0] + $ * 5)),
                        ye = Math.max(0, Math.min(255, P[1] + $ * 5)),
                        we = Math.max(0, Math.min(255, P[2] + $ * 5));
                    te.addColorStop(pe, `rgb(${be}, ${ye}, ${we})`);
                }),
                    (le.fillStyle = te),
                    le.fillRect(0, 0, re, ie));
                const de = re * 0.5 + Math.sin(A * 0.3) * re * 0.15,
                    E = ie * 0.5 + Math.cos(A * 0.4) * ie * 0.1,
                    q = Math.max(re, ie) * 0.8,
                    F = le.createRadialGradient(de, E, 0, de, E, q);
                (F.addColorStop(0, `rgba(${Q[0][0] + 10}, ${Q[0][1] + 10}, ${Q[0][2] + 10}, 0.1)`),
                    F.addColorStop(0.5, `rgba(${Q[2][0]}, ${Q[2][1]}, ${Q[2][2]}, 0.05)`),
                    F.addColorStop(1, `rgba(${Q[Q.length - 1][0]}, ${Q[Q.length - 1][1]}, ${Q[Q.length - 1][2]}, 0.03)`),
                    (le.globalCompositeOperation = 'overlay'),
                    (le.fillStyle = F),
                    le.fillRect(0, 0, re, ie),
                    (le.globalCompositeOperation = 'source-over'));
            },
            [r, p, S, y, w, L, B, R]
        );
        return u.jsx('div', {
            className: 'onboarding-view-root',
            children: u.jsxs('div', {
                className: 'onboarding-view-onboardingContainer',
                children: [
                    u.jsx('canvas', { ref: T, className: 'onboarding-view-gradientCanvas' }),
                    u.jsxs('div', {
                        className: 'onboarding-view-contentWrapper',
                        children: [
                            u.jsx('img', { className: 'onboarding-view-slideIcon', src: N[r].icon, alt: `${N[r].title} icon` }),
                            u.jsx('div', { className: 'onboarding-view-slideTitle', children: N[r].title }),
                            u.jsx('div', { className: 'onboarding-view-slideContent', children: N[r].content }),
                            N[r].showTextarea &&
                                u.jsx('textarea', {
                                    className: 'onboarding-view-contextTextarea',
                                    placeholder: 'Paste your resume, job description, or any relevant context here...',
                                    value: f,
                                    onChange: H,
                                }),
                            N[r].showFeatures &&
                                u.jsxs('div', {
                                    className: 'onboarding-view-featureList',
                                    children: [
                                        u.jsxs('div', {
                                            className: 'onboarding-view-featureItem',
                                            children: [
                                                u.jsx('span', { className: 'onboarding-view-featureIcon', children: '🎨' }),
                                                'Customize AI behavior and responses',
                                            ],
                                        }),
                                        u.jsxs('div', {
                                            className: 'onboarding-view-featureItem',
                                            children: [
                                                u.jsx('span', { className: 'onboarding-view-featureIcon', children: '📚' }),
                                                'Review conversation history',
                                            ],
                                        }),
                                        u.jsxs('div', {
                                            className: 'onboarding-view-featureItem',
                                            children: [
                                                u.jsx('span', { className: 'onboarding-view-featureIcon', children: '🔧' }),
                                                'Adjust capture settings and intervals',
                                            ],
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    u.jsxs('div', {
                        className: 'onboarding-view-navigation',
                        children: [
                            u.jsx('button', {
                                className: 'onboarding-view-navButton',
                                onClick: k,
                                disabled: r === 0,
                                children: u.jsx('svg', {
                                    width: '16px',
                                    height: '16px',
                                    strokeWidth: '2',
                                    viewBox: '0 0 24 24',
                                    fill: 'none',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    children: u.jsx('path', {
                                        d: 'M15 6L9 12L15 18',
                                        stroke: 'currentColor',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                    }),
                                }),
                            }),
                            u.jsx('div', {
                                className: 'onboarding-view-progressDots',
                                children: [0, 1, 2, 3, 4].map(ee =>
                                    u.jsx(
                                        'div',
                                        { className: `onboarding-view-dot ${ee === r ? 'onboarding-view-dotActive' : ''}`, onClick: () => G(ee) },
                                        ee
                                    )
                                ),
                            }),
                            u.jsx('button', {
                                className: 'onboarding-view-navButton',
                                onClick: ne,
                                children:
                                    r === 4
                                        ? 'Get Started'
                                        : u.jsx('svg', {
                                              width: '16px',
                                              height: '16px',
                                              strokeWidth: '2',
                                              viewBox: '0 0 24 24',
                                              fill: 'none',
                                              xmlns: 'http://www.w3.org/2000/svg',
                                              children: u.jsx('path', {
                                                  d: 'M9 6L15 12L9 18',
                                                  stroke: 'currentColor',
                                                  strokeLinecap: 'round',
                                                  strokeLinejoin: 'round',
                                              }),
                                          }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    RC = () => {
        const [l, o] = h.useState(localStorage.getItem('onboardingCompleted') ? 'main' : 'onboarding'),
            [r, c] = h.useState(''),
            [f, m] = h.useState(null),
            [p, v] = h.useState(!1),
            [y, g] = h.useState(!1),
            [S, x] = h.useState(!1),
            [T, M] = h.useState(!1),
            [R, w] = h.useState(localStorage.getItem('selectedProfile') || 'interview'),
            [N, L] = h.useState(localStorage.getItem('selectedLanguage') || 'en-US'),
            [B, H] = h.useState(localStorage.getItem('selectedScreenshotInterval') || '5'),
            [K, W] = h.useState(localStorage.getItem('selectedImageQuality') || 'medium'),
            [ne, k] = h.useState(localStorage.getItem('layoutMode') || 'normal'),
            [G, ae] = h.useState(localStorage.getItem('advancedMode') === 'true'),
            [ee, he] = h.useState(() => {
                try {
                    return JSON.parse(localStorage.getItem('customKeybinds') || '{}');
                } catch {
                    return {};
                }
            }),
            [le, re] = h.useState(localStorage.getItem('googleSearchEnabled') === 'true'),
            [ie, Q] = h.useState(parseInt(localStorage.getItem('backgroundTransparency') || '80')),
            [A, Y] = h.useState(parseInt(localStorage.getItem('fontSize') || '14')),
            [z, te] = h.useState([]),
            [de, E] = h.useState(-1),
            [q, F] = h.useState(!1),
            [P, fe] = h.useState(() => {
                try {
                    return JSON.parse(localStorage.getItem('savedResponses') || '[]');
                } catch {
                    return [];
                }
            }),
            [pe, $] = h.useState(!1),
            [be, ye] = h.useState(!1),
            [we, Te] = h.useState(!0);
        (h.useEffect(() => {
            Zl(ne);
        }, [ne]),
            h.useEffect(() => {
                if (window.electron?.ipcRenderer) {
                    const oe = window.electron.ipcRenderer,
                        Ze = (Il, wn) => {
                            Pe(wn);
                        },
                        ot = (Il, wn) => {
                            Me(wn);
                        },
                        xt = (Il, wn) => {
                            $(wn);
                        },
                        lr = (Il, wn) => {
                            x(wn);
                        };
                    return (
                        oe.on('update-response', Ze),
                        oe.on('update-status', ot),
                        oe.on('click-through-toggled', xt),
                        oe.on('session-initializing', lr),
                        () => {
                            (oe.removeAllListeners('update-response'),
                                oe.removeAllListeners('update-status'),
                                oe.removeAllListeners('click-through-toggled'),
                                oe.removeAllListeners('session-initializing'));
                        }
                    );
                }
            }, []),
            h.useEffect(() => {
                window.electron?.ipcRenderer && window.electron.ipcRenderer.send('view-changed', l);
            }, [l]),
            h.useEffect(() => {
                localStorage.setItem('selectedProfile', R);
            }, [R]),
            h.useEffect(() => {
                localStorage.setItem('selectedLanguage', N);
            }, [N]),
            h.useEffect(() => {
                localStorage.setItem('selectedScreenshotInterval', B);
            }, [B]),
            h.useEffect(() => {
                localStorage.setItem('selectedImageQuality', K);
            }, [K]),
            h.useEffect(() => {
                localStorage.setItem('advancedMode', G.toString());
            }, [G]));
        const Me = h.useCallback(oe => {
                (c(oe), (oe.includes('Ready') || oe.includes('Listening') || oe.includes('Error')) && Te(!0));
            }, []),
            Pe = h.useCallback(
                oe => {
                    const Ze =
                        oe.length < 30 &&
                        (oe.toLowerCase().includes('hmm') ||
                            oe.toLowerCase().includes('okay') ||
                            oe.toLowerCase().includes('next') ||
                            oe.toLowerCase().includes('go on') ||
                            oe.toLowerCase().includes('continue'));
                    (te(ot =>
                        be || ot.length === 0
                            ? (E(ot.length), ye(!1), Te(!1), [...ot, oe])
                            : !we && !Ze && ot.length > 0
                              ? [...ot.slice(0, ot.length - 1), oe]
                              : (E(ot.length), Te(!1), [...ot, oe])
                    ),
                        F(!0));
                },
                [be, we]
            );
        (h.useCallback(() => {
            o('customize');
        }, []),
            h.useCallback(() => {
                o('help');
            }, []),
            h.useCallback(() => {
                o('history');
            }, []),
            h.useCallback(() => {
                o('advanced');
            }, []));
        const it = h.useCallback(async () => {
                window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('minimize-window'));
            }, []),
            en = h.useCallback(oe => {
                o(oe);
            }, []),
            tn = h.useCallback(async () => {
                (l === 'assistant' &&
                    y &&
                    (window.cheddar && window.cheddar.stopCapture(),
                    window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('close-session')),
                    g(!1)),
                    console.log('Attempting to quit application...'),
                    window.electron?.ipcRenderer
                        ? (console.log('Calling quit-application IPC...'),
                          window.electron.ipcRenderer
                              .invoke('quit-application')
                              .then(oe => {
                                  console.log('Quit application result:', oe);
                              })
                              .catch(oe => {
                                  console.error('Quit application error:', oe);
                              }))
                        : console.error('window.electron.ipcRenderer not available'));
            }, [l, y]);
        h.useCallback(async () => {
            window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('toggle-window-visibility'));
        }, []);
        const J = h.useCallback(async () => {
                const oe = localStorage.getItem('apiKey')?.trim();
                if (!oe || oe === '') {
                    M(!0);
                    return;
                }
                x(!0);
                try {
                    (window.cheddar && (await window.cheddar.initializeGemini(R, N), window.cheddar.startCapture(B, K)),
                        te([]),
                        E(-1),
                        m(Date.now()),
                        o('assistant'));
                } catch (Ze) {
                    (console.error('Failed to start session:', Ze), x(!1));
                }
            }, [R, N, B, K]),
            Se = h.useCallback(async () => {
                window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('open-external', 'https://cheatingdaddy.com/help/api-key'));
            }, []),
            _e = h.useCallback(oe => {
                w(oe);
            }, []),
            Kn = h.useCallback(oe => {
                L(oe);
            }, []),
            Ca = h.useCallback(oe => {
                H(oe);
            }, []),
            Ps = h.useCallback(oe => {
                W(oe);
            }, []),
            er = h.useCallback(oe => {
                ae(oe);
            }, []);
        h.useCallback(() => {
            o('main');
        }, []);
        const St = h.useCallback(async oe => {
                window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('open-external', oe));
            }, []),
            tr = h.useCallback(async oe => {
                if (window.cheddar) {
                    const Ze = await window.cheddar.sendTextMessage(oe);
                    Ze.success ? (Me('Message sent...'), ye(!0)) : Me('Error sending message: ' + Ze.error);
                }
            }, []),
            lo = h.useCallback(async () => {
                (window.cheddar && window.cheddar.stopCapture(),
                    window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('close-session')),
                    g(!1),
                    o('main'));
            }, []),
            io = h.useCallback(oe => {
                (E(oe), F(!1));
            }, []),
            Ea = h.useCallback(() => {
                o('main');
            }, []),
            oo = h.useCallback(async oe => {
                if ((k(oe), Zl(oe), window.electron?.ipcRenderer))
                    try {
                        await window.electron.ipcRenderer.invoke('update-sizes');
                    } catch (Ze) {
                        console.error('Failed to update sizes in main process:', Ze);
                    }
            }, []),
            Zl = oe => {
                oe === 'compact'
                    ? document.documentElement.classList.add('compact-layout')
                    : document.documentElement.classList.remove('compact-layout');
            },
            nr = () => {
                switch (l) {
                    case 'onboarding':
                        return u.jsx(MC, { currentSlide: 0, contextText: '', onComplete: Ea, onClose: Ea });
                    case 'main':
                        return u.jsx(OS, { onStart: J, onAPIKeyHelp: Se, isInitializing: S, onLayoutModeChange: oo, showApiKeyError: T });
                    case 'customize':
                        return u.jsx(TC, {
                            selectedProfile: R,
                            selectedLanguage: N,
                            selectedScreenshotInterval: B,
                            selectedImageQuality: K,
                            layoutMode: ne,
                            keybinds: ee,
                            googleSearchEnabled: le,
                            backgroundTransparency: ie,
                            fontSize: A,
                            onProfileChange: _e,
                            onLanguageChange: Kn,
                            onScreenshotIntervalChange: Ca,
                            onImageQualityChange: Ps,
                            onLayoutModeChange: oo,
                            advancedMode: G,
                            onAdvancedModeChange: er,
                        });
                    case 'help':
                        return u.jsx(AC, { onExternalLinkClick: St, keybinds: ee });
                    case 'history':
                        return u.jsx(NC, {});
                    case 'advanced':
                        return u.jsx(jC, {});
                    case 'assistant':
                        return u.jsx(kS, {
                            responses: z,
                            currentResponseIndex: de,
                            selectedProfile: R,
                            onSendText: tr,
                            shouldAnimateResponse: q,
                            savedResponses: P,
                            onResponseIndexChanged: io,
                            onStopSession: lo,
                        });
                    default:
                        return u.jsxs('div', { children: ['Unknown view: ', l] });
                }
            },
            ar = () => {
                const oe = 'main-content';
                return l === 'assistant' ? `${oe} assistant-view` : l === 'onboarding' ? `${oe} onboarding-view` : `${oe} with-border`;
            };
        return u.jsx('div', {
            className: 'window-container',
            children: u.jsxs('div', {
                className: 'container',
                children: [
                    u.jsx(RS, { currentView: l, onViewChange: en, onMinimize: it, onClose: tn }),
                    u.jsx('div', { className: ar(), children: u.jsx('div', { className: 'view-container', children: nr() }) }),
                ],
            }),
        });
    },
    OC = () => {
        const [l, o] = h.useState(!1);
        h.useEffect(() => {
            r();
        }, []);
        const r = async () => {
            o(!0);
        };
        return l ? u.jsx(qb, { children: u.jsx(RC, {}) }) : u.jsx('div', { className: 'loading', children: 'Loading...' });
    };
window.electron = { ipcRenderer: window.require('electron').ipcRenderer };
const hy = document.getElementById('root');
if (!hy) throw new Error('Root element not found');
const kC = Gb.createRoot(hy);
kC.render(u.jsx(qn.StrictMode, { children: u.jsx(OC, {}) }));
const { ipcRenderer: zt } = window.require('electron');
window.randomDisplayName = null;
zt.invoke('get-random-display-name')
    .then(l => {
        ((window.randomDisplayName = l), console.log('Set random display name:', l));
    })
    .catch(l => {
        (console.warn('Could not get random display name:', l), (window.randomDisplayName = 'System Monitor'));
    });
let vt = null,
    _s = null,
    rn = null,
    cn = null,
    Ls = null;
const sn = 24e3,
    df = 0.1,
    mf = 4096;
let lt = null,
    kt = null,
    Zi = null,
    py = 'medium';
const gy = process.platform === 'linux',
    hf = process.platform === 'darwin',
    Ii = {
        tokens: [],
        audioStartTime: null,
        addTokens(l, o = 'image') {
            const r = Date.now();
            (this.tokens.push({ timestamp: r, count: l, type: o }), this.cleanOldTokens());
        },
        calculateImageTokens(l, o) {
            if (l <= 384 && o <= 384) return 258;
            const r = Math.ceil(l / 768),
                c = Math.ceil(o / 768);
            return r * c * 258;
        },
        trackAudioTokens() {
            if (!this.audioStartTime) {
                this.audioStartTime = Date.now();
                return;
            }
            const l = Date.now(),
                o = (l - this.audioStartTime) / 1e3,
                r = Math.floor(o * 32);
            r > 0 && (this.addTokens(r, 'audio'), (this.audioStartTime = l));
        },
        cleanOldTokens() {
            const l = Date.now() - 6e4;
            this.tokens = this.tokens.filter(o => o.timestamp > l);
        },
        getTokensInLastMinute() {
            return (this.cleanOldTokens(), this.tokens.reduce((l, o) => l + o.count, 0));
        },
        shouldThrottle() {
            if (!(localStorage.getItem('throttleTokens') === 'true')) return !1;
            const o = parseInt(localStorage.getItem('maxTokensPerMin') || '1000000', 10),
                r = parseInt(localStorage.getItem('throttleAtPercent') || '75', 10),
                c = this.getTokensInLastMinute(),
                f = Math.floor((o * r) / 100);
            return (console.log(`Token check: ${c}/${o} (throttle at ${f})`), c >= f);
        },
        reset() {
            ((this.tokens = []), (this.audioStartTime = null));
        },
    };
setInterval(() => {
    Ii.trackAudioTokens();
}, 2e3);
function pf(l) {
    const o = new Int16Array(l.length);
    for (let r = 0; r < l.length; r++) {
        const c = Math.max(-1, Math.min(1, l[r]));
        o[r] = c < 0 ? c * 32768 : c * 32767;
    }
    return o;
}
function gf(l) {
    let o = '';
    const r = new Uint8Array(l),
        c = r.byteLength;
    for (let f = 0; f < c; f++) o += String.fromCharCode(r[f]);
    return btoa(o);
}
async function zC(l = 'interview', o = 'en-US') {
    const r = localStorage.getItem('apiKey')?.trim();
    r && ((await zt.invoke('initialize-gemini', r, localStorage.getItem('customPrompt') || '', l, o)) ? Gl.setStatus('Live') : Gl.setStatus('error'));
}
zt.on('update-status', (l, o) => {
    (console.log('Status update:', o), Gl.setStatus(o));
});
async function DC(l = 5, o = 'medium') {
    ((py = o), Ii.reset(), console.log('🎯 Token tracker reset for new capture session'));
    const r = localStorage.getItem('audioMode') || 'speaker_only';
    try {
        if (hf) {
            console.log('Starting macOS capture with SystemAudioDump...');
            const c = await zt.invoke('start-macos-audio');
            if (!c.success) throw new Error('Failed to start macOS audio capture: ' + c.error);
            if (
                ((vt = await navigator.mediaDevices.getDisplayMedia({
                    video: { frameRate: 1, width: { ideal: 1920 }, height: { ideal: 1080 } },
                    audio: !1,
                })),
                console.log('macOS screen capture started - audio handled by SystemAudioDump'),
                r === 'mic_only' || r === 'both')
            ) {
                let f = null;
                try {
                    ((f = await navigator.mediaDevices.getUserMedia({
                        audio: { sampleRate: sn, channelCount: 1, echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 },
                        video: !1,
                    })),
                        console.log('macOS microphone capture started'),
                        _u(f));
                } catch (m) {
                    console.warn('Failed to get microphone access on macOS:', m);
                }
            }
        } else if (gy) {
            try {
                ((vt = await navigator.mediaDevices.getDisplayMedia({
                    video: { frameRate: 1, width: { ideal: 1920 }, height: { ideal: 1080 } },
                    audio: { sampleRate: sn, channelCount: 1, echoCancellation: !1, noiseSuppression: !1, autoGainControl: !1 },
                })),
                    console.log('Linux system audio capture via getDisplayMedia succeeded'),
                    _C());
            } catch (c) {
                (console.warn('System audio via getDisplayMedia failed, trying screen-only capture:', c),
                    (vt = await navigator.mediaDevices.getDisplayMedia({
                        video: { frameRate: 1, width: { ideal: 1920 }, height: { ideal: 1080 } },
                        audio: !1,
                    })));
            }
            if (r === 'mic_only' || r === 'both') {
                let c = null;
                try {
                    ((c = await navigator.mediaDevices.getUserMedia({
                        audio: { sampleRate: sn, channelCount: 1, echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 },
                        video: !1,
                    })),
                        console.log('Linux microphone capture started'),
                        _u(c));
                } catch (f) {
                    console.warn('Failed to get microphone access on Linux:', f);
                }
            }
            console.log('Linux capture started - system audio:', vt.getAudioTracks().length > 0, 'microphone mode:', r);
        } else if (
            ((vt = await navigator.mediaDevices.getDisplayMedia({
                video: { frameRate: 1, width: { ideal: 1920 }, height: { ideal: 1080 } },
                audio: { sampleRate: sn, channelCount: 1, echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 },
            })),
            console.log('Windows capture started with loopback audio'),
            LC(),
            r === 'mic_only' || r === 'both')
        ) {
            let c = null;
            try {
                ((c = await navigator.mediaDevices.getUserMedia({
                    audio: { sampleRate: sn, channelCount: 1, echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 },
                    video: !1,
                })),
                    console.log('Windows microphone capture started'),
                    _u(c));
            } catch (f) {
                console.warn('Failed to get microphone access on Windows:', f);
            }
        }
        if (
            (console.log('MediaStream obtained:', {
                hasVideo: vt.getVideoTracks().length > 0,
                hasAudio: vt.getAudioTracks().length > 0,
                videoTrack: vt.getVideoTracks()[0]?.getSettings(),
            }),
            l === 'manual' || l === 'Manual')
        )
            console.log('Manual mode enabled - screenshots will be captured on demand only');
        else {
            const c = parseInt(l) * 1e3;
            ((_s = setInterval(() => Wu(o), c)), setTimeout(() => Wu(o), 100));
        }
    } catch (c) {
        (console.error('Error starting capture:', c), Gl.setStatus('error'));
    }
}
function _u(l) {
    const o = new AudioContext({ sampleRate: sn }),
        r = o.createMediaStreamSource(l),
        c = o.createScriptProcessor(mf, 1, 1);
    let f = [];
    const m = sn * df;
    ((c.onaudioprocess = async p => {
        const v = p.inputBuffer.getChannelData(0);
        for (f.push(...v); f.length >= m; ) {
            const y = f.splice(0, m),
                g = pf(new Float32Array(y)),
                S = gf(g.buffer);
            await zt.invoke('send-mic-audio-content', { data: S, mimeType: 'audio/pcm;rate=24000' });
        }
    }),
        r.connect(c),
        c.connect(o.destination),
        (Ls = c));
}
function _C() {
    if (!vt) return;
    rn = new AudioContext({ sampleRate: sn });
    const l = rn.createMediaStreamSource(vt);
    cn = rn.createScriptProcessor(mf, 1, 1);
    let o = [];
    const r = sn * df;
    ((cn.onaudioprocess = async c => {
        const f = c.inputBuffer.getChannelData(0);
        for (o.push(...f); o.length >= r; ) {
            const m = o.splice(0, r),
                p = pf(new Float32Array(m)),
                v = gf(p.buffer);
            await zt.invoke('send-audio-content', { data: v, mimeType: 'audio/pcm;rate=24000' });
        }
    }),
        l.connect(cn),
        cn.connect(rn.destination));
}
function LC() {
    if (!vt) return;
    rn = new AudioContext({ sampleRate: sn });
    const l = rn.createMediaStreamSource(vt);
    cn = rn.createScriptProcessor(mf, 1, 1);
    let o = [];
    const r = sn * df;
    ((cn.onaudioprocess = async c => {
        const f = c.inputBuffer.getChannelData(0);
        for (o.push(...f); o.length >= r; ) {
            const m = o.splice(0, r),
                p = pf(new Float32Array(m)),
                v = gf(p.buffer);
            await zt.invoke('send-audio-content', { data: v, mimeType: 'audio/pcm;rate=24000' });
        }
    }),
        l.connect(cn),
        cn.connect(rn.destination));
}
async function Wu(l = 'medium', o = !1) {
    if ((console.log(`Capturing ${o ? 'manual' : 'automated'} screenshot...`), !vt)) return;
    if (!o && Ii.shouldThrottle()) {
        console.log('⚠️ Automated screenshot skipped due to rate limiting');
        return;
    }
    if (
        (lt ||
            ((lt = document.createElement('video')),
            (lt.srcObject = vt),
            (lt.muted = !0),
            (lt.playsInline = !0),
            await lt.play(),
            await new Promise(m => {
                if (lt && lt.readyState >= 2) return m();
                lt && (lt.onloadedmetadata = () => m());
            }),
            lt && ((kt = document.createElement('canvas')), (kt.width = lt.videoWidth), (kt.height = lt.videoHeight), (Zi = kt.getContext('2d')))),
        !lt || lt.readyState < 2)
    ) {
        console.warn('Video not ready yet, skipping screenshot');
        return;
    }
    if (!kt || !Zi) {
        console.error('Canvas not initialized');
        return;
    }
    (Zi.drawImage(lt, 0, 0, kt.width, kt.height),
        Zi.getImageData(0, 0, 1, 1).data.every((m, p) => (p === 3 ? !0 : m === 0)) && console.warn('Screenshot appears to be blank/black'));
    let f;
    switch (l) {
        case 'high':
            f = 0.9;
            break;
        case 'medium':
            f = 0.7;
            break;
        case 'low':
            f = 0.5;
            break;
        default:
            f = 0.7;
    }
    kt.toBlob(
        async m => {
            if (!m) {
                console.error('Failed to create blob from canvas');
                return;
            }
            const p = new FileReader();
            ((p.onloadend = async () => {
                const y = p.result.split(',')[1];
                if (!y || y.length < 100) {
                    console.error('Invalid base64 data generated');
                    return;
                }
                const g = await zt.invoke('send-image-content', { data: y });
                if (g.success) {
                    if (kt) {
                        const S = Ii.calculateImageTokens(kt.width, kt.height);
                        (Ii.addTokens(S, 'image'), console.log(`📊 Image sent successfully - ${S} tokens used (${kt.width}x${kt.height})`));
                    }
                } else console.error('Failed to send image:', g.error);
            }),
                p.readAsDataURL(m));
        },
        'image/jpeg',
        f
    );
}
async function vy(l = null) {
    (console.log('Manual screenshot triggered'),
        await Wu(l || py, !0),
        await new Promise(r => setTimeout(r, 2e3)),
        await yy(`Help me on this page, give me the answer no bs, complete answer.
        So if its a code question, give me the approach in few bullet points, then the entire code. Also if theres anything else i need to know, tell me.
        If its a question about the website, give me the answer no bs, complete answer.
        If its a mcq question, give me the answer no bs, complete answer.
        `));
}
window.captureManualScreenshot = vy;
function UC() {
    (_s && (clearInterval(_s), (_s = null)),
        cn && (cn.disconnect(), (cn = null)),
        Ls && (Ls.disconnect(), (Ls = null)),
        rn && (rn.close(), (rn = null)),
        vt && (vt.getTracks().forEach(l => l.stop()), (vt = null)),
        hf &&
            zt.invoke('stop-macos-audio').catch(l => {
                console.error('Error stopping macOS audio:', l);
            }),
        lt && (lt.pause(), (lt.srcObject = null), (lt = null)),
        (kt = null),
        (Zi = null));
}
async function yy(l) {
    if (!l || l.trim().length === 0) return (console.warn('Cannot send empty text message'), { success: !1, error: 'Empty message' });
    try {
        const o = await zt.invoke('send-text-message', l);
        return (o.success ? console.log('Text message sent successfully') : console.error('Failed to send text message:', o.error), o);
    } catch (o) {
        return (console.error('Error sending text message:', o), { success: !1, error: o.message });
    }
}
let un = null;
async function ao() {
    return new Promise((l, o) => {
        const r = indexedDB.open('ConversationHistory', 1);
        ((r.onerror = () => o(r.error)),
            (r.onsuccess = () => {
                ((un = r.result), l(un));
            }),
            (r.onupgradeneeded = c => {
                const f = c.target.result;
                f.objectStoreNames.contains('sessions') ||
                    f.createObjectStore('sessions', { keyPath: 'sessionId' }).createIndex('timestamp', 'timestamp', { unique: !1 });
            }));
    });
}
async function BC(l, o) {
    if ((un || (await ao()), !un)) throw new Error('Failed to initialize conversation database');
    const c = un.transaction(['sessions'], 'readwrite').objectStore('sessions'),
        f = { sessionId: l, timestamp: parseInt(l), conversationHistory: o, lastUpdated: Date.now() };
    return new Promise((m, p) => {
        const v = c.put(f);
        ((v.onerror = () => p(v.error)), (v.onsuccess = () => m(v.result)));
    });
}
async function HC(l) {
    if ((un || (await ao()), !un)) throw new Error('Failed to initialize conversation database');
    const r = un.transaction(['sessions'], 'readonly').objectStore('sessions');
    return new Promise((c, f) => {
        const m = r.get(l);
        ((m.onerror = () => f(m.error)), (m.onsuccess = () => c(m.result)));
    });
}
async function VC() {
    if ((un || (await ao()), !un)) throw new Error('Failed to initialize conversation database');
    const r = un.transaction(['sessions'], 'readonly').objectStore('sessions').index('timestamp');
    return new Promise((c, f) => {
        const m = r.getAll();
        ((m.onerror = () => f(m.error)),
            (m.onsuccess = () => {
                const p = m.result.sort((v, y) => y.timestamp - v.timestamp);
                c(p);
            }));
    });
}
zt.on('save-conversation-turn', async (l, o) => {
    try {
        (await BC(o.sessionId, o.fullHistory), console.log('Conversation session saved:', o.sessionId));
    } catch (r) {
        console.error('Error saving conversation session:', r);
    }
});
ao().catch(console.error);
zt.on('clear-sensitive-data', () => {
    (console.log('Clearing renderer-side sensitive data...'), localStorage.removeItem('apiKey'), localStorage.removeItem('customPrompt'));
});
function GC(l) {
    const o = Gl.getCurrentView();
    (l === 'ctrl+enter' || l === 'cmd+enter') && (o === 'main' || vy());
}
document.querySelector('cheating-daddy-app');
const Gl = {
    element: () => ({ handleStart: () => {} }),
    e: () => ({ handleStart: () => {} }),
    getCurrentView: () => 'main',
    getLayoutMode: () => 'normal',
    setStatus: l => zt.send('update-status', l),
    setResponse: l => zt.send('update-response', l),
    initializeGemini: zC,
    startCapture: DC,
    stopCapture: UC,
    sendTextMessage: yy,
    handleShortcut: GC,
    getAllConversationSessions: VC,
    getConversationSession: HC,
    initConversationStorage: ao,
    getContentProtection: () => {
        const l = localStorage.getItem('contentProtection');
        return l !== null ? l === 'true' : !0;
    },
    isLinux: gy,
    isMacOS: hf,
};
window.cheddar = Gl;
