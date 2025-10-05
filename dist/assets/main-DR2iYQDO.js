(function () {
    const d = document.createElement('link').relList;
    if (d && d.supports && d.supports('modulepreload')) return;
    for (const p of document.querySelectorAll('link[rel="modulepreload"]')) r(p);
    new MutationObserver(p => {
        for (const T of p) if (T.type === 'childList') for (const A of T.addedNodes) A.tagName === 'LINK' && A.rel === 'modulepreload' && r(A);
    }).observe(document, { childList: !0, subtree: !0 });
    function f(p) {
        const T = {};
        return (
            p.integrity && (T.integrity = p.integrity),
            p.referrerPolicy && (T.referrerPolicy = p.referrerPolicy),
            p.crossOrigin === 'use-credentials'
                ? (T.credentials = 'include')
                : p.crossOrigin === 'anonymous'
                  ? (T.credentials = 'omit')
                  : (T.credentials = 'same-origin'),
            T
        );
    }
    function r(p) {
        if (p.ep) return;
        p.ep = !0;
        const T = f(p);
        fetch(p.href, T);
    }
})();
function iv(u) {
    return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, 'default') ? u.default : u;
}
var Ju = { exports: {} },
    ei = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dm;
function sv() {
    if (dm) return ei;
    dm = 1;
    var u = Symbol.for('react.transitional.element'),
        d = Symbol.for('react.fragment');
    function f(r, p, T) {
        var A = null;
        if ((T !== void 0 && (A = '' + T), p.key !== void 0 && (A = '' + p.key), 'key' in p)) {
            T = {};
            for (var B in p) B !== 'key' && (T[B] = p[B]);
        } else T = p;
        return ((p = T.ref), { $$typeof: u, type: r, key: A, ref: p !== void 0 ? p : null, props: T });
    }
    return ((ei.Fragment = d), (ei.jsx = f), (ei.jsxs = f), ei);
}
var mm;
function cv() {
    return (mm || ((mm = 1), (Ju.exports = sv())), Ju.exports);
}
var c = cv(),
    Wu = { exports: {} },
    re = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hm;
function uv() {
    if (hm) return re;
    hm = 1;
    var u = Symbol.for('react.transitional.element'),
        d = Symbol.for('react.portal'),
        f = Symbol.for('react.fragment'),
        r = Symbol.for('react.strict_mode'),
        p = Symbol.for('react.profiler'),
        T = Symbol.for('react.consumer'),
        A = Symbol.for('react.context'),
        B = Symbol.for('react.forward_ref'),
        N = Symbol.for('react.suspense'),
        S = Symbol.for('react.memo'),
        O = Symbol.for('react.lazy'),
        D = Symbol.for('react.activity'),
        V = Symbol.iterator;
    function ae(h) {
        return h === null || typeof h != 'object' ? null : ((h = (V && h[V]) || h['@@iterator']), typeof h == 'function' ? h : null);
    }
    var X = {
            isMounted: function () {
                return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        },
        Q = Object.assign,
        F = {};
    function ve(h, E, U) {
        ((this.props = h), (this.context = E), (this.refs = F), (this.updater = U || X));
    }
    ((ve.prototype.isReactComponent = {}),
        (ve.prototype.setState = function (h, E) {
            if (typeof h != 'object' && typeof h != 'function' && h != null)
                throw Error('takes an object of state variables to update or a function which returns an object of state variables.');
            this.updater.enqueueSetState(this, h, E, 'setState');
        }),
        (ve.prototype.forceUpdate = function (h) {
            this.updater.enqueueForceUpdate(this, h, 'forceUpdate');
        }));
    function Ae() {}
    Ae.prototype = ve.prototype;
    function pe(h, E, U) {
        ((this.props = h), (this.context = E), (this.refs = F), (this.updater = U || X));
    }
    var ye = (pe.prototype = new Ae());
    ((ye.constructor = pe), Q(ye, ve.prototype), (ye.isPureReactComponent = !0));
    var je = Array.isArray;
    function xe() {}
    var G = { H: null, A: null, T: null, S: null },
        Y = Object.prototype.hasOwnProperty;
    function ue(h, E, U) {
        var q = U.ref;
        return { $$typeof: u, type: h, key: E, ref: q !== void 0 ? q : null, props: U };
    }
    function ne(h, E) {
        return ue(h.type, E, h.props);
    }
    function He(h) {
        return typeof h == 'object' && h !== null && h.$$typeof === u;
    }
    function oe(h) {
        var E = { '=': '=0', ':': '=2' };
        return (
            '$' +
            h.replace(/[=:]/g, function (U) {
                return E[U];
            })
        );
    }
    var Ne = /\/+/g;
    function Te(h, E) {
        return typeof h == 'object' && h !== null && h.key != null ? oe('' + h.key) : E.toString(36);
    }
    function H(h) {
        switch (h.status) {
            case 'fulfilled':
                return h.value;
            case 'rejected':
                throw h.reason;
            default:
                switch (
                    (typeof h.status == 'string'
                        ? h.then(xe, xe)
                        : ((h.status = 'pending'),
                          h.then(
                              function (E) {
                                  h.status === 'pending' && ((h.status = 'fulfilled'), (h.value = E));
                              },
                              function (E) {
                                  h.status === 'pending' && ((h.status = 'rejected'), (h.reason = E));
                              }
                          )),
                    h.status)
                ) {
                    case 'fulfilled':
                        return h.value;
                    case 'rejected':
                        throw h.reason;
                }
        }
        throw h;
    }
    function b(h, E, U, q, te) {
        var ce = typeof h;
        (ce === 'undefined' || ce === 'boolean') && (h = null);
        var P = !1;
        if (h === null) P = !0;
        else
            switch (ce) {
                case 'bigint':
                case 'string':
                case 'number':
                    P = !0;
                    break;
                case 'object':
                    switch (h.$$typeof) {
                        case u:
                        case d:
                            P = !0;
                            break;
                        case O:
                            return ((P = h._init), b(P(h._payload), E, U, q, te));
                    }
            }
        if (P)
            return (
                (te = te(h)),
                (P = q === '' ? '.' + Te(h, 0) : q),
                je(te)
                    ? ((U = ''),
                      P != null && (U = P.replace(Ne, '$&/') + '/'),
                      b(te, E, U, '', function (nt) {
                          return nt;
                      }))
                    : te != null &&
                      (He(te) && (te = ne(te, U + (te.key == null || (h && h.key === te.key) ? '' : ('' + te.key).replace(Ne, '$&/') + '/') + P)),
                      E.push(te)),
                1
            );
        P = 0;
        var Be = q === '' ? '.' : q + ':';
        if (je(h)) for (var we = 0; we < h.length; we++) ((q = h[we]), (ce = Be + Te(q, we)), (P += b(q, E, U, ce, te)));
        else if (((we = ae(h)), typeof we == 'function'))
            for (h = we.call(h), we = 0; !(q = h.next()).done; ) ((q = q.value), (ce = Be + Te(q, we++)), (P += b(q, E, U, ce, te)));
        else if (ce === 'object') {
            if (typeof h.then == 'function') return b(H(h), E, U, q, te);
            throw (
                (E = String(h)),
                Error(
                    'Objects are not valid as a React child (found: ' +
                        (E === '[object Object]' ? 'object with keys {' + Object.keys(h).join(', ') + '}' : E) +
                        '). If you meant to render a collection of children, use an array instead.'
                )
            );
        }
        return P;
    }
    function L(h, E, U) {
        if (h == null) return h;
        var q = [],
            te = 0;
        return (
            b(h, q, '', '', function (ce) {
                return E.call(U, ce, te++);
            }),
            q
        );
    }
    function k(h) {
        if (h._status === -1) {
            var E = h._result;
            ((E = E()),
                E.then(
                    function (U) {
                        (h._status === 0 || h._status === -1) && ((h._status = 1), (h._result = U));
                    },
                    function (U) {
                        (h._status === 0 || h._status === -1) && ((h._status = 2), (h._result = U));
                    }
                ),
                h._status === -1 && ((h._status = 0), (h._result = E)));
        }
        if (h._status === 1) return h._result.default;
        throw h._result;
    }
    var I =
            typeof reportError == 'function'
                ? reportError
                : function (h) {
                      if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
                          var E = new window.ErrorEvent('error', {
                              bubbles: !0,
                              cancelable: !0,
                              message: typeof h == 'object' && h !== null && typeof h.message == 'string' ? String(h.message) : String(h),
                              error: h,
                          });
                          if (!window.dispatchEvent(E)) return;
                      } else if (typeof process == 'object' && typeof process.emit == 'function') {
                          process.emit('uncaughtException', h);
                          return;
                      }
                      console.error(h);
                  },
        se = {
            map: L,
            forEach: function (h, E, U) {
                L(
                    h,
                    function () {
                        E.apply(this, arguments);
                    },
                    U
                );
            },
            count: function (h) {
                var E = 0;
                return (
                    L(h, function () {
                        E++;
                    }),
                    E
                );
            },
            toArray: function (h) {
                return (
                    L(h, function (E) {
                        return E;
                    }) || []
                );
            },
            only: function (h) {
                if (!He(h)) throw Error('React.Children.only expected to receive a single React element child.');
                return h;
            },
        };
    return (
        (re.Activity = D),
        (re.Children = se),
        (re.Component = ve),
        (re.Fragment = f),
        (re.Profiler = p),
        (re.PureComponent = pe),
        (re.StrictMode = r),
        (re.Suspense = N),
        (re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G),
        (re.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (h) {
                return G.H.useMemoCache(h);
            },
        }),
        (re.cache = function (h) {
            return function () {
                return h.apply(null, arguments);
            };
        }),
        (re.cacheSignal = function () {
            return null;
        }),
        (re.cloneElement = function (h, E, U) {
            if (h == null) throw Error('The argument must be a React element, but you passed ' + h + '.');
            var q = Q({}, h.props),
                te = h.key;
            if (E != null)
                for (ce in (E.key !== void 0 && (te = '' + E.key), E))
                    !Y.call(E, ce) || ce === 'key' || ce === '__self' || ce === '__source' || (ce === 'ref' && E.ref === void 0) || (q[ce] = E[ce]);
            var ce = arguments.length - 2;
            if (ce === 1) q.children = U;
            else if (1 < ce) {
                for (var P = Array(ce), Be = 0; Be < ce; Be++) P[Be] = arguments[Be + 2];
                q.children = P;
            }
            return ue(h.type, te, q);
        }),
        (re.createContext = function (h) {
            return (
                (h = { $$typeof: A, _currentValue: h, _currentValue2: h, _threadCount: 0, Provider: null, Consumer: null }),
                (h.Provider = h),
                (h.Consumer = { $$typeof: T, _context: h }),
                h
            );
        }),
        (re.createElement = function (h, E, U) {
            var q,
                te = {},
                ce = null;
            if (E != null)
                for (q in (E.key !== void 0 && (ce = '' + E.key), E))
                    Y.call(E, q) && q !== 'key' && q !== '__self' && q !== '__source' && (te[q] = E[q]);
            var P = arguments.length - 2;
            if (P === 1) te.children = U;
            else if (1 < P) {
                for (var Be = Array(P), we = 0; we < P; we++) Be[we] = arguments[we + 2];
                te.children = Be;
            }
            if (h && h.defaultProps) for (q in ((P = h.defaultProps), P)) te[q] === void 0 && (te[q] = P[q]);
            return ue(h, ce, te);
        }),
        (re.createRef = function () {
            return { current: null };
        }),
        (re.forwardRef = function (h) {
            return { $$typeof: B, render: h };
        }),
        (re.isValidElement = He),
        (re.lazy = function (h) {
            return { $$typeof: O, _payload: { _status: -1, _result: h }, _init: k };
        }),
        (re.memo = function (h, E) {
            return { $$typeof: S, type: h, compare: E === void 0 ? null : E };
        }),
        (re.startTransition = function (h) {
            var E = G.T,
                U = {};
            G.T = U;
            try {
                var q = h(),
                    te = G.S;
                (te !== null && te(U, q), typeof q == 'object' && q !== null && typeof q.then == 'function' && q.then(xe, I));
            } catch (ce) {
                I(ce);
            } finally {
                (E !== null && U.types !== null && (E.types = U.types), (G.T = E));
            }
        }),
        (re.unstable_useCacheRefresh = function () {
            return G.H.useCacheRefresh();
        }),
        (re.use = function (h) {
            return G.H.use(h);
        }),
        (re.useActionState = function (h, E, U) {
            return G.H.useActionState(h, E, U);
        }),
        (re.useCallback = function (h, E) {
            return G.H.useCallback(h, E);
        }),
        (re.useContext = function (h) {
            return G.H.useContext(h);
        }),
        (re.useDebugValue = function () {}),
        (re.useDeferredValue = function (h, E) {
            return G.H.useDeferredValue(h, E);
        }),
        (re.useEffect = function (h, E) {
            return G.H.useEffect(h, E);
        }),
        (re.useEffectEvent = function (h) {
            return G.H.useEffectEvent(h);
        }),
        (re.useId = function () {
            return G.H.useId();
        }),
        (re.useImperativeHandle = function (h, E, U) {
            return G.H.useImperativeHandle(h, E, U);
        }),
        (re.useInsertionEffect = function (h, E) {
            return G.H.useInsertionEffect(h, E);
        }),
        (re.useLayoutEffect = function (h, E) {
            return G.H.useLayoutEffect(h, E);
        }),
        (re.useMemo = function (h, E) {
            return G.H.useMemo(h, E);
        }),
        (re.useOptimistic = function (h, E) {
            return G.H.useOptimistic(h, E);
        }),
        (re.useReducer = function (h, E, U) {
            return G.H.useReducer(h, E, U);
        }),
        (re.useRef = function (h) {
            return G.H.useRef(h);
        }),
        (re.useState = function (h) {
            return G.H.useState(h);
        }),
        (re.useSyncExternalStore = function (h, E, U) {
            return G.H.useSyncExternalStore(h, E, U);
        }),
        (re.useTransition = function () {
            return G.H.useTransition();
        }),
        (re.version = '19.2.0'),
        re
    );
}
var gm;
function co() {
    return (gm || ((gm = 1), (Wu.exports = uv())), Wu.exports);
}
var v = co();
const ov = iv(v);
var $u = { exports: {} },
    ti = {},
    Fu = { exports: {} },
    Iu = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vm;
function rv() {
    return (
        vm ||
            ((vm = 1),
            (function (u) {
                function d(b, L) {
                    var k = b.length;
                    b.push(L);
                    e: for (; 0 < k; ) {
                        var I = (k - 1) >>> 1,
                            se = b[I];
                        if (0 < p(se, L)) ((b[I] = L), (b[k] = se), (k = I));
                        else break e;
                    }
                }
                function f(b) {
                    return b.length === 0 ? null : b[0];
                }
                function r(b) {
                    if (b.length === 0) return null;
                    var L = b[0],
                        k = b.pop();
                    if (k !== L) {
                        b[0] = k;
                        e: for (var I = 0, se = b.length, h = se >>> 1; I < h; ) {
                            var E = 2 * (I + 1) - 1,
                                U = b[E],
                                q = E + 1,
                                te = b[q];
                            if (0 > p(U, k)) q < se && 0 > p(te, U) ? ((b[I] = te), (b[q] = k), (I = q)) : ((b[I] = U), (b[E] = k), (I = E));
                            else if (q < se && 0 > p(te, k)) ((b[I] = te), (b[q] = k), (I = q));
                            else break e;
                        }
                    }
                    return L;
                }
                function p(b, L) {
                    var k = b.sortIndex - L.sortIndex;
                    return k !== 0 ? k : b.id - L.id;
                }
                if (((u.unstable_now = void 0), typeof performance == 'object' && typeof performance.now == 'function')) {
                    var T = performance;
                    u.unstable_now = function () {
                        return T.now();
                    };
                } else {
                    var A = Date,
                        B = A.now();
                    u.unstable_now = function () {
                        return A.now() - B;
                    };
                }
                var N = [],
                    S = [],
                    O = 1,
                    D = null,
                    V = 3,
                    ae = !1,
                    X = !1,
                    Q = !1,
                    F = !1,
                    ve = typeof setTimeout == 'function' ? setTimeout : null,
                    Ae = typeof clearTimeout == 'function' ? clearTimeout : null,
                    pe = typeof setImmediate < 'u' ? setImmediate : null;
                function ye(b) {
                    for (var L = f(S); L !== null; ) {
                        if (L.callback === null) r(S);
                        else if (L.startTime <= b) (r(S), (L.sortIndex = L.expirationTime), d(N, L));
                        else break;
                        L = f(S);
                    }
                }
                function je(b) {
                    if (((Q = !1), ye(b), !X))
                        if (f(N) !== null) ((X = !0), xe || ((xe = !0), oe()));
                        else {
                            var L = f(S);
                            L !== null && H(je, L.startTime - b);
                        }
                }
                var xe = !1,
                    G = -1,
                    Y = 5,
                    ue = -1;
                function ne() {
                    return F ? !0 : !(u.unstable_now() - ue < Y);
                }
                function He() {
                    if (((F = !1), xe)) {
                        var b = u.unstable_now();
                        ue = b;
                        var L = !0;
                        try {
                            e: {
                                ((X = !1), Q && ((Q = !1), Ae(G), (G = -1)), (ae = !0));
                                var k = V;
                                try {
                                    t: {
                                        for (ye(b), D = f(N); D !== null && !(D.expirationTime > b && ne()); ) {
                                            var I = D.callback;
                                            if (typeof I == 'function') {
                                                ((D.callback = null), (V = D.priorityLevel));
                                                var se = I(D.expirationTime <= b);
                                                if (((b = u.unstable_now()), typeof se == 'function')) {
                                                    ((D.callback = se), ye(b), (L = !0));
                                                    break t;
                                                }
                                                (D === f(N) && r(N), ye(b));
                                            } else r(N);
                                            D = f(N);
                                        }
                                        if (D !== null) L = !0;
                                        else {
                                            var h = f(S);
                                            (h !== null && H(je, h.startTime - b), (L = !1));
                                        }
                                    }
                                    break e;
                                } finally {
                                    ((D = null), (V = k), (ae = !1));
                                }
                                L = void 0;
                            }
                        } finally {
                            L ? oe() : (xe = !1);
                        }
                    }
                }
                var oe;
                if (typeof pe == 'function')
                    oe = function () {
                        pe(He);
                    };
                else if (typeof MessageChannel < 'u') {
                    var Ne = new MessageChannel(),
                        Te = Ne.port2;
                    ((Ne.port1.onmessage = He),
                        (oe = function () {
                            Te.postMessage(null);
                        }));
                } else
                    oe = function () {
                        ve(He, 0);
                    };
                function H(b, L) {
                    G = ve(function () {
                        b(u.unstable_now());
                    }, L);
                }
                ((u.unstable_IdlePriority = 5),
                    (u.unstable_ImmediatePriority = 1),
                    (u.unstable_LowPriority = 4),
                    (u.unstable_NormalPriority = 3),
                    (u.unstable_Profiling = null),
                    (u.unstable_UserBlockingPriority = 2),
                    (u.unstable_cancelCallback = function (b) {
                        b.callback = null;
                    }),
                    (u.unstable_forceFrameRate = function (b) {
                        0 > b || 125 < b
                            ? console.error(
                                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                              )
                            : (Y = 0 < b ? Math.floor(1e3 / b) : 5);
                    }),
                    (u.unstable_getCurrentPriorityLevel = function () {
                        return V;
                    }),
                    (u.unstable_next = function (b) {
                        switch (V) {
                            case 1:
                            case 2:
                            case 3:
                                var L = 3;
                                break;
                            default:
                                L = V;
                        }
                        var k = V;
                        V = L;
                        try {
                            return b();
                        } finally {
                            V = k;
                        }
                    }),
                    (u.unstable_requestPaint = function () {
                        F = !0;
                    }),
                    (u.unstable_runWithPriority = function (b, L) {
                        switch (b) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                b = 3;
                        }
                        var k = V;
                        V = b;
                        try {
                            return L();
                        } finally {
                            V = k;
                        }
                    }),
                    (u.unstable_scheduleCallback = function (b, L, k) {
                        var I = u.unstable_now();
                        switch (
                            (typeof k == 'object' && k !== null ? ((k = k.delay), (k = typeof k == 'number' && 0 < k ? I + k : I)) : (k = I), b)
                        ) {
                            case 1:
                                var se = -1;
                                break;
                            case 2:
                                se = 250;
                                break;
                            case 5:
                                se = 1073741823;
                                break;
                            case 4:
                                se = 1e4;
                                break;
                            default:
                                se = 5e3;
                        }
                        return (
                            (se = k + se),
                            (b = { id: O++, callback: L, priorityLevel: b, startTime: k, expirationTime: se, sortIndex: -1 }),
                            k > I
                                ? ((b.sortIndex = k), d(S, b), f(N) === null && b === f(S) && (Q ? (Ae(G), (G = -1)) : (Q = !0), H(je, k - I)))
                                : ((b.sortIndex = se), d(N, b), X || ae || ((X = !0), xe || ((xe = !0), oe()))),
                            b
                        );
                    }),
                    (u.unstable_shouldYield = ne),
                    (u.unstable_wrapCallback = function (b) {
                        var L = V;
                        return function () {
                            var k = V;
                            V = L;
                            try {
                                return b.apply(this, arguments);
                            } finally {
                                V = k;
                            }
                        };
                    }));
            })(Iu)),
        Iu
    );
}
var pm;
function fv() {
    return (pm || ((pm = 1), (Fu.exports = rv())), Fu.exports);
}
var Pu = { exports: {} },
    ft = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ym;
function dv() {
    if (ym) return ft;
    ym = 1;
    var u = co();
    function d(N) {
        var S = 'https://react.dev/errors/' + N;
        if (1 < arguments.length) {
            S += '?args[]=' + encodeURIComponent(arguments[1]);
            for (var O = 2; O < arguments.length; O++) S += '&args[]=' + encodeURIComponent(arguments[O]);
        }
        return (
            'Minified React error #' +
            N +
            '; visit ' +
            S +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
    }
    function f() {}
    var r = {
            d: {
                f,
                r: function () {
                    throw Error(d(522));
                },
                D: f,
                C: f,
                L: f,
                m: f,
                X: f,
                S: f,
                M: f,
            },
            p: 0,
            findDOMNode: null,
        },
        p = Symbol.for('react.portal');
    function T(N, S, O) {
        var D = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return { $$typeof: p, key: D == null ? null : '' + D, children: N, containerInfo: S, implementation: O };
    }
    var A = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function B(N, S) {
        if (N === 'font') return '';
        if (typeof S == 'string') return S === 'use-credentials' ? S : '';
    }
    return (
        (ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
        (ft.createPortal = function (N, S) {
            var O = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!S || (S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11)) throw Error(d(299));
            return T(N, S, null, O);
        }),
        (ft.flushSync = function (N) {
            var S = A.T,
                O = r.p;
            try {
                if (((A.T = null), (r.p = 2), N)) return N();
            } finally {
                ((A.T = S), (r.p = O), r.d.f());
            }
        }),
        (ft.preconnect = function (N, S) {
            typeof N == 'string' &&
                (S ? ((S = S.crossOrigin), (S = typeof S == 'string' ? (S === 'use-credentials' ? S : '') : void 0)) : (S = null), r.d.C(N, S));
        }),
        (ft.prefetchDNS = function (N) {
            typeof N == 'string' && r.d.D(N);
        }),
        (ft.preinit = function (N, S) {
            if (typeof N == 'string' && S && typeof S.as == 'string') {
                var O = S.as,
                    D = B(O, S.crossOrigin),
                    V = typeof S.integrity == 'string' ? S.integrity : void 0,
                    ae = typeof S.fetchPriority == 'string' ? S.fetchPriority : void 0;
                O === 'style'
                    ? r.d.S(N, typeof S.precedence == 'string' ? S.precedence : void 0, { crossOrigin: D, integrity: V, fetchPriority: ae })
                    : O === 'script' &&
                      r.d.X(N, { crossOrigin: D, integrity: V, fetchPriority: ae, nonce: typeof S.nonce == 'string' ? S.nonce : void 0 });
            }
        }),
        (ft.preinitModule = function (N, S) {
            if (typeof N == 'string')
                if (typeof S == 'object' && S !== null) {
                    if (S.as == null || S.as === 'script') {
                        var O = B(S.as, S.crossOrigin);
                        r.d.M(N, {
                            crossOrigin: O,
                            integrity: typeof S.integrity == 'string' ? S.integrity : void 0,
                            nonce: typeof S.nonce == 'string' ? S.nonce : void 0,
                        });
                    }
                } else S == null && r.d.M(N);
        }),
        (ft.preload = function (N, S) {
            if (typeof N == 'string' && typeof S == 'object' && S !== null && typeof S.as == 'string') {
                var O = S.as,
                    D = B(O, S.crossOrigin);
                r.d.L(N, O, {
                    crossOrigin: D,
                    integrity: typeof S.integrity == 'string' ? S.integrity : void 0,
                    nonce: typeof S.nonce == 'string' ? S.nonce : void 0,
                    type: typeof S.type == 'string' ? S.type : void 0,
                    fetchPriority: typeof S.fetchPriority == 'string' ? S.fetchPriority : void 0,
                    referrerPolicy: typeof S.referrerPolicy == 'string' ? S.referrerPolicy : void 0,
                    imageSrcSet: typeof S.imageSrcSet == 'string' ? S.imageSrcSet : void 0,
                    imageSizes: typeof S.imageSizes == 'string' ? S.imageSizes : void 0,
                    media: typeof S.media == 'string' ? S.media : void 0,
                });
            }
        }),
        (ft.preloadModule = function (N, S) {
            if (typeof N == 'string')
                if (S) {
                    var O = B(S.as, S.crossOrigin);
                    r.d.m(N, {
                        as: typeof S.as == 'string' && S.as !== 'script' ? S.as : void 0,
                        crossOrigin: O,
                        integrity: typeof S.integrity == 'string' ? S.integrity : void 0,
                    });
                } else r.d.m(N);
        }),
        (ft.requestFormReset = function (N) {
            r.d.r(N);
        }),
        (ft.unstable_batchedUpdates = function (N, S) {
            return N(S);
        }),
        (ft.useFormState = function (N, S, O) {
            return A.H.useFormState(N, S, O);
        }),
        (ft.useFormStatus = function () {
            return A.H.useHostTransitionStatus();
        }),
        (ft.version = '19.2.0'),
        ft
    );
}
var bm;
function mv() {
    if (bm) return Pu.exports;
    bm = 1;
    function u() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (d) {
                console.error(d);
            }
    }
    return (u(), (Pu.exports = dv()), Pu.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sm;
function hv() {
    if (Sm) return ti;
    Sm = 1;
    var u = fv(),
        d = co(),
        f = mv();
    function r(e) {
        var t = 'https://react.dev/errors/' + e;
        if (1 < arguments.length) {
            t += '?args[]=' + encodeURIComponent(arguments[1]);
            for (var l = 2; l < arguments.length; l++) t += '&args[]=' + encodeURIComponent(arguments[l]);
        }
        return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
    }
    function p(e) {
        return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
    }
    function T(e) {
        var t = e,
            l = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
            e = t;
            do ((t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return));
            while (e);
        }
        return t.tag === 3 ? l : null;
    }
    function A(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
        }
        return null;
    }
    function B(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
        }
        return null;
    }
    function N(e) {
        if (T(e) !== e) throw Error(r(188));
    }
    function S(e) {
        var t = e.alternate;
        if (!t) {
            if (((t = T(e)), t === null)) throw Error(r(188));
            return t !== e ? null : e;
        }
        for (var l = e, a = t; ; ) {
            var n = l.return;
            if (n === null) break;
            var i = n.alternate;
            if (i === null) {
                if (((a = n.return), a !== null)) {
                    l = a;
                    continue;
                }
                break;
            }
            if (n.child === i.child) {
                for (i = n.child; i; ) {
                    if (i === l) return (N(n), e);
                    if (i === a) return (N(n), t);
                    i = i.sibling;
                }
                throw Error(r(188));
            }
            if (l.return !== a.return) ((l = n), (a = i));
            else {
                for (var s = !1, o = n.child; o; ) {
                    if (o === l) {
                        ((s = !0), (l = n), (a = i));
                        break;
                    }
                    if (o === a) {
                        ((s = !0), (a = n), (l = i));
                        break;
                    }
                    o = o.sibling;
                }
                if (!s) {
                    for (o = i.child; o; ) {
                        if (o === l) {
                            ((s = !0), (l = i), (a = n));
                            break;
                        }
                        if (o === a) {
                            ((s = !0), (a = i), (l = n));
                            break;
                        }
                        o = o.sibling;
                    }
                    if (!s) throw Error(r(189));
                }
            }
            if (l.alternate !== a) throw Error(r(190));
        }
        if (l.tag !== 3) throw Error(r(188));
        return l.stateNode.current === l ? e : t;
    }
    function O(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null; ) {
            if (((t = O(e)), t !== null)) return t;
            e = e.sibling;
        }
        return null;
    }
    var D = Object.assign,
        V = Symbol.for('react.element'),
        ae = Symbol.for('react.transitional.element'),
        X = Symbol.for('react.portal'),
        Q = Symbol.for('react.fragment'),
        F = Symbol.for('react.strict_mode'),
        ve = Symbol.for('react.profiler'),
        Ae = Symbol.for('react.consumer'),
        pe = Symbol.for('react.context'),
        ye = Symbol.for('react.forward_ref'),
        je = Symbol.for('react.suspense'),
        xe = Symbol.for('react.suspense_list'),
        G = Symbol.for('react.memo'),
        Y = Symbol.for('react.lazy'),
        ue = Symbol.for('react.activity'),
        ne = Symbol.for('react.memo_cache_sentinel'),
        He = Symbol.iterator;
    function oe(e) {
        return e === null || typeof e != 'object' ? null : ((e = (He && e[He]) || e['@@iterator']), typeof e == 'function' ? e : null);
    }
    var Ne = Symbol.for('react.client.reference');
    function Te(e) {
        if (e == null) return null;
        if (typeof e == 'function') return e.$$typeof === Ne ? null : e.displayName || e.name || null;
        if (typeof e == 'string') return e;
        switch (e) {
            case Q:
                return 'Fragment';
            case ve:
                return 'Profiler';
            case F:
                return 'StrictMode';
            case je:
                return 'Suspense';
            case xe:
                return 'SuspenseList';
            case ue:
                return 'Activity';
        }
        if (typeof e == 'object')
            switch (e.$$typeof) {
                case X:
                    return 'Portal';
                case pe:
                    return e.displayName || 'Context';
                case Ae:
                    return (e._context.displayName || 'Context') + '.Consumer';
                case ye:
                    var t = e.render;
                    return (
                        (e = e.displayName),
                        e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
                        e
                    );
                case G:
                    return ((t = e.displayName || null), t !== null ? t : Te(e.type) || 'Memo');
                case Y:
                    ((t = e._payload), (e = e._init));
                    try {
                        return Te(e(t));
                    } catch {}
            }
        return null;
    }
    var H = Array.isArray,
        b = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        L = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        k = { pending: !1, data: null, method: null, action: null },
        I = [],
        se = -1;
    function h(e) {
        return { current: e };
    }
    function E(e) {
        0 > se || ((e.current = I[se]), (I[se] = null), se--);
    }
    function U(e, t) {
        (se++, (I[se] = e.current), (e.current = t));
    }
    var q = h(null),
        te = h(null),
        ce = h(null),
        P = h(null);
    function Be(e, t) {
        switch ((U(ce, t), U(te, e), U(q, null), t.nodeType)) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? _d(e) : 0;
                break;
            default:
                if (((e = t.tagName), (t = t.namespaceURI))) ((t = _d(t)), (e = Ud(t, e)));
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
        (E(q), U(q, e));
    }
    function we() {
        (E(q), E(te), E(ce));
    }
    function nt(e) {
        e.memoizedState !== null && U(P, e);
        var t = q.current,
            l = Ud(t, e.type);
        t !== l && (U(te, e), U(q, l));
    }
    function dt(e) {
        (te.current === e && (E(q), E(te)), P.current === e && (E(P), ($n._currentValue = k)));
    }
    var mt, Jl;
    function Vt(e) {
        if (mt === void 0)
            try {
                throw Error();
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                ((mt = (t && t[1]) || ''),
                    (Jl =
                        -1 <
                        l.stack.indexOf(`
    at`)
                            ? ' (<anonymous>)'
                            : -1 < l.stack.indexOf('@')
                              ? '@unknown:0:0'
                              : ''));
            }
        return (
            `
` +
            mt +
            e +
            Jl
        );
    }
    var Wl = !1;
    function $l(e, t) {
        if (!e || Wl) return '';
        Wl = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (t) {
                            var R = function () {
                                throw Error();
                            };
                            if (
                                (Object.defineProperty(R.prototype, 'props', {
                                    set: function () {
                                        throw Error();
                                    },
                                }),
                                typeof Reflect == 'object' && Reflect.construct)
                            ) {
                                try {
                                    Reflect.construct(R, []);
                                } catch (w) {
                                    var j = w;
                                }
                                Reflect.construct(e, [], R);
                            } else {
                                try {
                                    R.call();
                                } catch (w) {
                                    j = w;
                                }
                                e.call(R.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (w) {
                                j = w;
                            }
                            (R = e()) && typeof R.catch == 'function' && R.catch(function () {});
                        }
                    } catch (w) {
                        if (w && j && typeof w.stack == 'string') return [w.stack, j.stack];
                    }
                    return [null, null];
                },
            };
            a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
            var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, 'name');
            n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, 'name', { value: 'DetermineComponentFrameRoot' });
            var i = a.DetermineComponentFrameRoot(),
                s = i[0],
                o = i[1];
            if (s && o) {
                var m = s.split(`
`),
                    C = o.split(`
`);
                for (n = a = 0; a < m.length && !m[a].includes('DetermineComponentFrameRoot'); ) a++;
                for (; n < C.length && !C[n].includes('DetermineComponentFrameRoot'); ) n++;
                if (a === m.length || n === C.length) for (a = m.length - 1, n = C.length - 1; 1 <= a && 0 <= n && m[a] !== C[n]; ) n--;
                for (; 1 <= a && 0 <= n; a--, n--)
                    if (m[a] !== C[n]) {
                        if (a !== 1 || n !== 1)
                            do
                                if ((a--, n--, 0 > n || m[a] !== C[n])) {
                                    var z =
                                        `
` + m[a].replace(' at new ', ' at ');
                                    return (e.displayName && z.includes('<anonymous>') && (z = z.replace('<anonymous>', e.displayName)), z);
                                }
                            while (1 <= a && 0 <= n);
                        break;
                    }
            }
        } finally {
            ((Wl = !1), (Error.prepareStackTrace = l));
        }
        return (l = e ? e.displayName || e.name : '') ? Vt(l) : '';
    }
    function _(e, t) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return Vt(e.type);
            case 16:
                return Vt('Lazy');
            case 13:
                return e.child !== t && t !== null ? Vt('Suspense Fallback') : Vt('Suspense');
            case 19:
                return Vt('SuspenseList');
            case 0:
            case 15:
                return $l(e.type, !1);
            case 11:
                return $l(e.type.render, !1);
            case 1:
                return $l(e.type, !0);
            case 31:
                return Vt('Activity');
            default:
                return '';
        }
    }
    function ee(e) {
        try {
            var t = '',
                l = null;
            do ((t += _(e, l)), (l = e), (e = e.return));
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
    var Me = Object.prototype.hasOwnProperty,
        Cl = u.unstable_scheduleCallback,
        Fl = u.unstable_cancelCallback,
        Ms = u.unstable_shouldYield,
        ks = u.unstable_requestPaint,
        ht = u.unstable_now,
        Ds = u.unstable_getCurrentPriorityLevel,
        si = u.unstable_ImmediatePriority,
        ci = u.unstable_UserBlockingPriority,
        Il = u.unstable_NormalPriority,
        ui = u.unstable_LowPriority,
        cn = u.unstable_IdlePriority,
        Rs = u.log,
        Os = u.unstable_setDisableYieldValue,
        Z = null,
        Ye = null;
    function Pe(e) {
        if ((typeof Rs == 'function' && Os(e), Ye && typeof Ye.setStrictMode == 'function'))
            try {
                Ye.setStrictMode(Z, e);
            } catch {}
    }
    var gt = Math.clz32 ? Math.clz32 : ll,
        _s = Math.log,
        un = Math.LN2;
    function ll(e) {
        return ((e >>>= 0), e === 0 ? 32 : (31 - ((_s(e) / un) | 0)) | 0);
    }
    var oi = 256,
        ri = 262144,
        fi = 4194304;
    function Pl(e) {
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
    function di(e, t, l) {
        var a = e.pendingLanes;
        if (a === 0) return 0;
        var n = 0,
            i = e.suspendedLanes,
            s = e.pingedLanes;
        e = e.warmLanes;
        var o = a & 134217727;
        return (
            o !== 0
                ? ((a = o & ~i), a !== 0 ? (n = Pl(a)) : ((s &= o), s !== 0 ? (n = Pl(s)) : l || ((l = o & ~e), l !== 0 && (n = Pl(l)))))
                : ((o = a & ~i), o !== 0 ? (n = Pl(o)) : s !== 0 ? (n = Pl(s)) : l || ((l = a & ~e), l !== 0 && (n = Pl(l)))),
            n === 0 ? 0 : t !== 0 && t !== n && (t & i) === 0 && ((i = n & -n), (l = t & -t), i >= l || (i === 32 && (l & 4194048) !== 0)) ? t : n
        );
    }
    function on(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Zm(e, t) {
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
    function go() {
        var e = fi;
        return ((fi <<= 1), (fi & 62914560) === 0 && (fi = 4194304), e);
    }
    function Us(e) {
        for (var t = [], l = 0; 31 > l; l++) t.push(e);
        return t;
    }
    function rn(e, t) {
        ((e.pendingLanes |= t), t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function Km(e, t, l, a, n, i) {
        var s = e.pendingLanes;
        ((e.pendingLanes = l),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.warmLanes = 0),
            (e.expiredLanes &= l),
            (e.entangledLanes &= l),
            (e.errorRecoveryDisabledLanes &= l),
            (e.shellSuspendCounter = 0));
        var o = e.entanglements,
            m = e.expirationTimes,
            C = e.hiddenUpdates;
        for (l = s & ~l; 0 < l; ) {
            var z = 31 - gt(l),
                R = 1 << z;
            ((o[z] = 0), (m[z] = -1));
            var j = C[z];
            if (j !== null)
                for (C[z] = null, z = 0; z < j.length; z++) {
                    var w = j[z];
                    w !== null && (w.lane &= -536870913);
                }
            l &= ~R;
        }
        (a !== 0 && vo(e, a, 0), i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(s & ~t)));
    }
    function vo(e, t, l) {
        ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
        var a = 31 - gt(t);
        ((e.entangledLanes |= t), (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 261930)));
    }
    function po(e, t) {
        var l = (e.entangledLanes |= t);
        for (e = e.entanglements; l; ) {
            var a = 31 - gt(l),
                n = 1 << a;
            ((n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n));
        }
    }
    function yo(e, t) {
        var l = t & -t;
        return ((l = (l & 42) !== 0 ? 1 : Ls(l)), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l);
    }
    function Ls(e) {
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
    function Hs(e) {
        return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
    }
    function bo() {
        var e = L.p;
        return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : im(e.type));
    }
    function So(e, t) {
        var l = L.p;
        try {
            return ((L.p = e), t());
        } finally {
            L.p = l;
        }
    }
    var jl = Math.random().toString(36).slice(2),
        it = '__reactFiber$' + jl,
        pt = '__reactProps$' + jl,
        ya = '__reactContainer$' + jl,
        Bs = '__reactEvents$' + jl,
        Jm = '__reactListeners$' + jl,
        Wm = '__reactHandles$' + jl,
        xo = '__reactResources$' + jl,
        fn = '__reactMarker$' + jl;
    function qs(e) {
        (delete e[it], delete e[pt], delete e[Bs], delete e[Jm], delete e[Wm]);
    }
    function ba(e) {
        var t = e[it];
        if (t) return t;
        for (var l = e.parentNode; l; ) {
            if ((t = l[ya] || l[it])) {
                if (((l = t.alternate), t.child !== null || (l !== null && l.child !== null)))
                    for (e = Vd(e); e !== null; ) {
                        if ((l = e[it])) return l;
                        e = Vd(e);
                    }
                return t;
            }
            ((e = l), (l = e.parentNode));
        }
        return null;
    }
    function Sa(e) {
        if ((e = e[it] || e[ya])) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
        }
        return null;
    }
    function dn(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
        throw Error(r(33));
    }
    function xa(e) {
        var t = e[xo];
        return (t || (t = e[xo] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
    }
    function lt(e) {
        e[fn] = !0;
    }
    var Co = new Set(),
        jo = {};
    function ea(e, t) {
        (Ca(e, t), Ca(e + 'Capture', t));
    }
    function Ca(e, t) {
        for (jo[e] = t, e = 0; e < t.length; e++) Co.add(t[e]);
    }
    var $m = RegExp(
            '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
        ),
        No = {},
        To = {};
    function Fm(e) {
        return Me.call(To, e) ? !0 : Me.call(No, e) ? !1 : $m.test(e) ? (To[e] = !0) : ((No[e] = !0), !1);
    }
    function mi(e, t, l) {
        if (Fm(t))
            if (l === null) e.removeAttribute(t);
            else {
                switch (typeof l) {
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
                e.setAttribute(t, '' + l);
            }
    }
    function hi(e, t, l) {
        if (l === null) e.removeAttribute(t);
        else {
            switch (typeof l) {
                case 'undefined':
                case 'function':
                case 'symbol':
                case 'boolean':
                    e.removeAttribute(t);
                    return;
            }
            e.setAttribute(t, '' + l);
        }
    }
    function al(e, t, l, a) {
        if (a === null) e.removeAttribute(l);
        else {
            switch (typeof a) {
                case 'undefined':
                case 'function':
                case 'symbol':
                case 'boolean':
                    e.removeAttribute(l);
                    return;
            }
            e.setAttributeNS(t, l, '' + a);
        }
    }
    function Rt(e) {
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
    function wo(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
    }
    function Im(e, t, l) {
        var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (!e.hasOwnProperty(t) && typeof a < 'u' && typeof a.get == 'function' && typeof a.set == 'function') {
            var n = a.get,
                i = a.set;
            return (
                Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                        return n.call(this);
                    },
                    set: function (s) {
                        ((l = '' + s), i.call(this, s));
                    },
                }),
                Object.defineProperty(e, t, { enumerable: a.enumerable }),
                {
                    getValue: function () {
                        return l;
                    },
                    setValue: function (s) {
                        l = '' + s;
                    },
                    stopTracking: function () {
                        ((e._valueTracker = null), delete e[t]);
                    },
                }
            );
        }
    }
    function Gs(e) {
        if (!e._valueTracker) {
            var t = wo(e) ? 'checked' : 'value';
            e._valueTracker = Im(e, t, '' + e[t]);
        }
    }
    function Ao(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var l = t.getValue(),
            a = '';
        return (e && (a = wo(e) ? (e.checked ? 'true' : 'false') : e.value), (e = a), e !== l ? (t.setValue(e), !0) : !1);
    }
    function gi(e) {
        if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
        try {
            return e.activeElement || e.body;
        } catch {
            return e.body;
        }
    }
    var Pm = /[\n"\\]/g;
    function Ot(e) {
        return e.replace(Pm, function (t) {
            return '\\' + t.charCodeAt(0).toString(16) + ' ';
        });
    }
    function Ys(e, t, l, a, n, i, s, o) {
        ((e.name = ''),
            s != null && typeof s != 'function' && typeof s != 'symbol' && typeof s != 'boolean' ? (e.type = s) : e.removeAttribute('type'),
            t != null
                ? s === 'number'
                    ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + Rt(t))
                    : e.value !== '' + Rt(t) && (e.value = '' + Rt(t))
                : (s !== 'submit' && s !== 'reset') || e.removeAttribute('value'),
            t != null ? Vs(e, s, Rt(t)) : l != null ? Vs(e, s, Rt(l)) : a != null && e.removeAttribute('value'),
            n == null && i != null && (e.defaultChecked = !!i),
            n != null && (e.checked = n && typeof n != 'function' && typeof n != 'symbol'),
            o != null && typeof o != 'function' && typeof o != 'symbol' && typeof o != 'boolean' ? (e.name = '' + Rt(o)) : e.removeAttribute('name'));
    }
    function zo(e, t, l, a, n, i, s, o) {
        if ((i != null && typeof i != 'function' && typeof i != 'symbol' && typeof i != 'boolean' && (e.type = i), t != null || l != null)) {
            if (!((i !== 'submit' && i !== 'reset') || t != null)) {
                Gs(e);
                return;
            }
            ((l = l != null ? '' + Rt(l) : ''), (t = t != null ? '' + Rt(t) : l), o || t === e.value || (e.value = t), (e.defaultValue = t));
        }
        ((a = a ?? n),
            (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
            (e.checked = o ? e.checked : !!a),
            (e.defaultChecked = !!a),
            s != null && typeof s != 'function' && typeof s != 'symbol' && typeof s != 'boolean' && (e.name = s),
            Gs(e));
    }
    function Vs(e, t, l) {
        (t === 'number' && gi(e.ownerDocument) === e) || e.defaultValue === '' + l || (e.defaultValue = '' + l);
    }
    function ja(e, t, l, a) {
        if (((e = e.options), t)) {
            t = {};
            for (var n = 0; n < l.length; n++) t['$' + l[n]] = !0;
            for (l = 0; l < e.length; l++)
                ((n = t.hasOwnProperty('$' + e[l].value)), e[l].selected !== n && (e[l].selected = n), n && a && (e[l].defaultSelected = !0));
        } else {
            for (l = '' + Rt(l), t = null, n = 0; n < e.length; n++) {
                if (e[n].value === l) {
                    ((e[n].selected = !0), a && (e[n].defaultSelected = !0));
                    return;
                }
                t !== null || e[n].disabled || (t = e[n]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function Eo(e, t, l) {
        if (t != null && ((t = '' + Rt(t)), t !== e.value && (e.value = t), l == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return;
        }
        e.defaultValue = l != null ? '' + Rt(l) : '';
    }
    function Mo(e, t, l, a) {
        if (t == null) {
            if (a != null) {
                if (l != null) throw Error(r(92));
                if (H(a)) {
                    if (1 < a.length) throw Error(r(93));
                    a = a[0];
                }
                l = a;
            }
            (l == null && (l = ''), (t = l));
        }
        ((l = Rt(t)), (e.defaultValue = l), (a = e.textContent), a === l && a !== '' && a !== null && (e.value = a), Gs(e));
    }
    function Na(e, t) {
        if (t) {
            var l = e.firstChild;
            if (l && l === e.lastChild && l.nodeType === 3) {
                l.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var eh = new Set(
        'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
            ' '
        )
    );
    function ko(e, t, l) {
        var a = t.indexOf('--') === 0;
        l == null || typeof l == 'boolean' || l === ''
            ? a
                ? e.setProperty(t, '')
                : t === 'float'
                  ? (e.cssFloat = '')
                  : (e[t] = '')
            : a
              ? e.setProperty(t, l)
              : typeof l != 'number' || l === 0 || eh.has(t)
                ? t === 'float'
                    ? (e.cssFloat = l)
                    : (e[t] = ('' + l).trim())
                : (e[t] = l + 'px');
    }
    function Do(e, t, l) {
        if (t != null && typeof t != 'object') throw Error(r(62));
        if (((e = e.style), l != null)) {
            for (var a in l)
                !l.hasOwnProperty(a) ||
                    (t != null && t.hasOwnProperty(a)) ||
                    (a.indexOf('--') === 0 ? e.setProperty(a, '') : a === 'float' ? (e.cssFloat = '') : (e[a] = ''));
            for (var n in t) ((a = t[n]), t.hasOwnProperty(n) && l[n] !== a && ko(e, n, a));
        } else for (var i in t) t.hasOwnProperty(i) && ko(e, i, t[i]);
    }
    function Xs(e) {
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
    var th = new Map([
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
        lh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function vi(e) {
        return lh.test('' + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function nl() {}
    var Qs = null;
    function Zs(e) {
        return (
            (e = e.target || e.srcElement || window),
            e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
        );
    }
    var Ta = null,
        wa = null;
    function Ro(e) {
        var t = Sa(e);
        if (t && (e = t.stateNode)) {
            var l = e[pt] || null;
            e: switch (((e = t.stateNode), t.type)) {
                case 'input':
                    if (
                        (Ys(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name),
                        (t = l.name),
                        l.type === 'radio' && t != null)
                    ) {
                        for (l = e; l.parentNode; ) l = l.parentNode;
                        for (l = l.querySelectorAll('input[name="' + Ot('' + t) + '"][type="radio"]'), t = 0; t < l.length; t++) {
                            var a = l[t];
                            if (a !== e && a.form === e.form) {
                                var n = a[pt] || null;
                                if (!n) throw Error(r(90));
                                Ys(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
                            }
                        }
                        for (t = 0; t < l.length; t++) ((a = l[t]), a.form === e.form && Ao(a));
                    }
                    break e;
                case 'textarea':
                    Eo(e, l.value, l.defaultValue);
                    break e;
                case 'select':
                    ((t = l.value), t != null && ja(e, !!l.multiple, t, !1));
            }
        }
    }
    var Ks = !1;
    function Oo(e, t, l) {
        if (Ks) return e(t, l);
        Ks = !0;
        try {
            var a = e(t);
            return a;
        } finally {
            if (((Ks = !1), (Ta !== null || wa !== null) && (as(), Ta && ((t = Ta), (e = wa), (wa = Ta = null), Ro(t), e))))
                for (t = 0; t < e.length; t++) Ro(e[t]);
        }
    }
    function mn(e, t) {
        var l = e.stateNode;
        if (l === null) return null;
        var a = l[pt] || null;
        if (a === null) return null;
        l = a[t];
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
        if (l && typeof l != 'function') throw Error(r(231, t, typeof l));
        return l;
    }
    var il = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
        Js = !1;
    if (il)
        try {
            var hn = {};
            (Object.defineProperty(hn, 'passive', {
                get: function () {
                    Js = !0;
                },
            }),
                window.addEventListener('test', hn, hn),
                window.removeEventListener('test', hn, hn));
        } catch {
            Js = !1;
        }
    var Nl = null,
        Ws = null,
        pi = null;
    function _o() {
        if (pi) return pi;
        var e,
            t = Ws,
            l = t.length,
            a,
            n = 'value' in Nl ? Nl.value : Nl.textContent,
            i = n.length;
        for (e = 0; e < l && t[e] === n[e]; e++);
        var s = l - e;
        for (a = 1; a <= s && t[l - a] === n[i - a]; a++);
        return (pi = n.slice(e, 1 < a ? 1 - a : void 0));
    }
    function yi(e) {
        var t = e.keyCode;
        return ('charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0);
    }
    function bi() {
        return !0;
    }
    function Uo() {
        return !1;
    }
    function yt(e) {
        function t(l, a, n, i, s) {
            ((this._reactName = l), (this._targetInst = n), (this.type = a), (this.nativeEvent = i), (this.target = s), (this.currentTarget = null));
            for (var o in e) e.hasOwnProperty(o) && ((l = e[o]), (this[o] = l ? l(i) : i[o]));
            return (
                (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? bi : Uo),
                (this.isPropagationStopped = Uo),
                this
            );
        }
        return (
            D(t.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var l = this.nativeEvent;
                    l &&
                        (l.preventDefault ? l.preventDefault() : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
                        (this.isDefaultPrevented = bi));
                },
                stopPropagation: function () {
                    var l = this.nativeEvent;
                    l &&
                        (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
                        (this.isPropagationStopped = bi));
                },
                persist: function () {},
                isPersistent: bi,
            }),
            t
        );
    }
    var ta = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        Si = yt(ta),
        gn = D({}, ta, { view: 0, detail: 0 }),
        ah = yt(gn),
        $s,
        Fs,
        vn,
        xi = D({}, gn, {
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
            getModifierState: Ps,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
                return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
            },
            movementX: function (e) {
                return 'movementX' in e
                    ? e.movementX
                    : (e !== vn &&
                          (vn && e.type === 'mousemove' ? (($s = e.screenX - vn.screenX), (Fs = e.screenY - vn.screenY)) : (Fs = $s = 0), (vn = e)),
                      $s);
            },
            movementY: function (e) {
                return 'movementY' in e ? e.movementY : Fs;
            },
        }),
        Lo = yt(xi),
        nh = D({}, xi, { dataTransfer: 0 }),
        ih = yt(nh),
        sh = D({}, gn, { relatedTarget: 0 }),
        Is = yt(sh),
        ch = D({}, ta, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        uh = yt(ch),
        oh = D({}, ta, {
            clipboardData: function (e) {
                return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
            },
        }),
        rh = yt(oh),
        fh = D({}, ta, { data: 0 }),
        Ho = yt(fh),
        dh = {
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
        mh = {
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
        hh = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
    function gh(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = hh[e]) ? !!t[e] : !1;
    }
    function Ps() {
        return gh;
    }
    var vh = D({}, gn, {
            key: function (e) {
                if (e.key) {
                    var t = dh[e.key] || e.key;
                    if (t !== 'Unidentified') return t;
                }
                return e.type === 'keypress'
                    ? ((e = yi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
                    : e.type === 'keydown' || e.type === 'keyup'
                      ? mh[e.keyCode] || 'Unidentified'
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
            getModifierState: Ps,
            charCode: function (e) {
                return e.type === 'keypress' ? yi(e) : 0;
            },
            keyCode: function (e) {
                return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
            },
            which: function (e) {
                return e.type === 'keypress' ? yi(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
            },
        }),
        ph = yt(vh),
        yh = D({}, xi, {
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
        Bo = yt(yh),
        bh = D({}, gn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ps }),
        Sh = yt(bh),
        xh = D({}, ta, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        Ch = yt(xh),
        jh = D({}, xi, {
            deltaX: function (e) {
                return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
                return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
        Nh = yt(jh),
        Th = D({}, ta, { newState: 0, oldState: 0 }),
        wh = yt(Th),
        Ah = [9, 13, 27, 32],
        ec = il && 'CompositionEvent' in window,
        pn = null;
    il && 'documentMode' in document && (pn = document.documentMode);
    var zh = il && 'TextEvent' in window && !pn,
        qo = il && (!ec || (pn && 8 < pn && 11 >= pn)),
        Go = ' ',
        Yo = !1;
    function Vo(e, t) {
        switch (e) {
            case 'keyup':
                return Ah.indexOf(t.keyCode) !== -1;
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
    function Xo(e) {
        return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
    }
    var Aa = !1;
    function Eh(e, t) {
        switch (e) {
            case 'compositionend':
                return Xo(t);
            case 'keypress':
                return t.which !== 32 ? null : ((Yo = !0), Go);
            case 'textInput':
                return ((e = t.data), e === Go && Yo ? null : e);
            default:
                return null;
        }
    }
    function Mh(e, t) {
        if (Aa) return e === 'compositionend' || (!ec && Vo(e, t)) ? ((e = _o()), (pi = Ws = Nl = null), (Aa = !1), e) : null;
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
                return qo && t.locale !== 'ko' ? null : t.data;
            default:
                return null;
        }
    }
    var kh = {
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
    function Qo(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === 'input' ? !!kh[e.type] : t === 'textarea';
    }
    function Zo(e, t, l, a) {
        (Ta ? (wa ? wa.push(a) : (wa = [a])) : (Ta = a),
            (t = rs(t, 'onChange')),
            0 < t.length && ((l = new Si('onChange', 'change', null, l, a)), e.push({ event: l, listeners: t })));
    }
    var yn = null,
        bn = null;
    function Dh(e) {
        Ed(e, 0);
    }
    function Ci(e) {
        var t = dn(e);
        if (Ao(t)) return e;
    }
    function Ko(e, t) {
        if (e === 'change') return t;
    }
    var Jo = !1;
    if (il) {
        var tc;
        if (il) {
            var lc = 'oninput' in document;
            if (!lc) {
                var Wo = document.createElement('div');
                (Wo.setAttribute('oninput', 'return;'), (lc = typeof Wo.oninput == 'function'));
            }
            tc = lc;
        } else tc = !1;
        Jo = tc && (!document.documentMode || 9 < document.documentMode);
    }
    function $o() {
        yn && (yn.detachEvent('onpropertychange', Fo), (bn = yn = null));
    }
    function Fo(e) {
        if (e.propertyName === 'value' && Ci(bn)) {
            var t = [];
            (Zo(t, bn, e, Zs(e)), Oo(Dh, t));
        }
    }
    function Rh(e, t, l) {
        e === 'focusin' ? ($o(), (yn = t), (bn = l), yn.attachEvent('onpropertychange', Fo)) : e === 'focusout' && $o();
    }
    function Oh(e) {
        if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Ci(bn);
    }
    function _h(e, t) {
        if (e === 'click') return Ci(t);
    }
    function Uh(e, t) {
        if (e === 'input' || e === 'change') return Ci(t);
    }
    function Lh(e, t) {
        return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var wt = typeof Object.is == 'function' ? Object.is : Lh;
    function Sn(e, t) {
        if (wt(e, t)) return !0;
        if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
        var l = Object.keys(e),
            a = Object.keys(t);
        if (l.length !== a.length) return !1;
        for (a = 0; a < l.length; a++) {
            var n = l[a];
            if (!Me.call(t, n) || !wt(e[n], t[n])) return !1;
        }
        return !0;
    }
    function Io(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
    }
    function Po(e, t) {
        var l = Io(e);
        e = 0;
        for (var a; l; ) {
            if (l.nodeType === 3) {
                if (((a = e + l.textContent.length), e <= t && a >= t)) return { node: l, offset: t - e };
                e = a;
            }
            e: {
                for (; l; ) {
                    if (l.nextSibling) {
                        l = l.nextSibling;
                        break e;
                    }
                    l = l.parentNode;
                }
                l = void 0;
            }
            l = Io(l);
        }
    }
    function er(e, t) {
        return e && t
            ? e === t
                ? !0
                : e && e.nodeType === 3
                  ? !1
                  : t && t.nodeType === 3
                    ? er(e, t.parentNode)
                    : 'contains' in e
                      ? e.contains(t)
                      : e.compareDocumentPosition
                        ? !!(e.compareDocumentPosition(t) & 16)
                        : !1
            : !1;
    }
    function tr(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = gi(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var l = typeof t.contentWindow.location.href == 'string';
            } catch {
                l = !1;
            }
            if (l) e = t.contentWindow;
            else break;
            t = gi(e.document);
        }
        return t;
    }
    function ac(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
            t &&
            ((t === 'input' && (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
                t === 'textarea' ||
                e.contentEditable === 'true')
        );
    }
    var Hh = il && 'documentMode' in document && 11 >= document.documentMode,
        za = null,
        nc = null,
        xn = null,
        ic = !1;
    function lr(e, t, l) {
        var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
        ic ||
            za == null ||
            za !== gi(a) ||
            ((a = za),
            'selectionStart' in a && ac(a)
                ? (a = { start: a.selectionStart, end: a.selectionEnd })
                : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
                  (a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset })),
            (xn && Sn(xn, a)) ||
                ((xn = a),
                (a = rs(nc, 'onSelect')),
                0 < a.length && ((t = new Si('onSelect', 'select', null, t, l)), e.push({ event: t, listeners: a }), (t.target = za))));
    }
    function la(e, t) {
        var l = {};
        return ((l[e.toLowerCase()] = t.toLowerCase()), (l['Webkit' + e] = 'webkit' + t), (l['Moz' + e] = 'moz' + t), l);
    }
    var Ea = {
            animationend: la('Animation', 'AnimationEnd'),
            animationiteration: la('Animation', 'AnimationIteration'),
            animationstart: la('Animation', 'AnimationStart'),
            transitionrun: la('Transition', 'TransitionRun'),
            transitionstart: la('Transition', 'TransitionStart'),
            transitioncancel: la('Transition', 'TransitionCancel'),
            transitionend: la('Transition', 'TransitionEnd'),
        },
        sc = {},
        ar = {};
    il &&
        ((ar = document.createElement('div').style),
        'AnimationEvent' in window || (delete Ea.animationend.animation, delete Ea.animationiteration.animation, delete Ea.animationstart.animation),
        'TransitionEvent' in window || delete Ea.transitionend.transition);
    function aa(e) {
        if (sc[e]) return sc[e];
        if (!Ea[e]) return e;
        var t = Ea[e],
            l;
        for (l in t) if (t.hasOwnProperty(l) && l in ar) return (sc[e] = t[l]);
        return e;
    }
    var nr = aa('animationend'),
        ir = aa('animationiteration'),
        sr = aa('animationstart'),
        Bh = aa('transitionrun'),
        qh = aa('transitionstart'),
        Gh = aa('transitioncancel'),
        cr = aa('transitionend'),
        ur = new Map(),
        cc =
            'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
                ' '
            );
    cc.push('scrollEnd');
    function Xt(e, t) {
        (ur.set(e, t), ea(t, [e]));
    }
    var ji =
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
        _t = [],
        Ma = 0,
        uc = 0;
    function Ni() {
        for (var e = Ma, t = (uc = Ma = 0); t < e; ) {
            var l = _t[t];
            _t[t++] = null;
            var a = _t[t];
            _t[t++] = null;
            var n = _t[t];
            _t[t++] = null;
            var i = _t[t];
            if (((_t[t++] = null), a !== null && n !== null)) {
                var s = a.pending;
                (s === null ? (n.next = n) : ((n.next = s.next), (s.next = n)), (a.pending = n));
            }
            i !== 0 && or(l, n, i);
        }
    }
    function Ti(e, t, l, a) {
        ((_t[Ma++] = e), (_t[Ma++] = t), (_t[Ma++] = l), (_t[Ma++] = a), (uc |= a), (e.lanes |= a), (e = e.alternate), e !== null && (e.lanes |= a));
    }
    function oc(e, t, l, a) {
        return (Ti(e, t, l, a), wi(e));
    }
    function na(e, t) {
        return (Ti(e, null, null, t), wi(e));
    }
    function or(e, t, l) {
        e.lanes |= l;
        var a = e.alternate;
        a !== null && (a.lanes |= l);
        for (var n = !1, i = e.return; i !== null; )
            ((i.childLanes |= l),
                (a = i.alternate),
                a !== null && (a.childLanes |= l),
                i.tag === 22 && ((e = i.stateNode), e === null || e._visibility & 1 || (n = !0)),
                (e = i),
                (i = i.return));
        return e.tag === 3
            ? ((i = e.stateNode),
              n &&
                  t !== null &&
                  ((n = 31 - gt(l)), (e = i.hiddenUpdates), (a = e[n]), a === null ? (e[n] = [t]) : a.push(t), (t.lane = l | 536870912)),
              i)
            : null;
    }
    function wi(e) {
        if (50 < Vn) throw ((Vn = 0), (yu = null), Error(r(185)));
        for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
        return e.tag === 3 ? e.stateNode : null;
    }
    var ka = {};
    function Yh(e, t, l, a) {
        ((this.tag = e),
            (this.key = l),
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
    function At(e, t, l, a) {
        return new Yh(e, t, l, a);
    }
    function rc(e) {
        return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function sl(e, t) {
        var l = e.alternate;
        return (
            l === null
                ? ((l = At(e.tag, t, e.key, e.mode)),
                  (l.elementType = e.elementType),
                  (l.type = e.type),
                  (l.stateNode = e.stateNode),
                  (l.alternate = e),
                  (e.alternate = l))
                : ((l.pendingProps = t), (l.type = e.type), (l.flags = 0), (l.subtreeFlags = 0), (l.deletions = null)),
            (l.flags = e.flags & 65011712),
            (l.childLanes = e.childLanes),
            (l.lanes = e.lanes),
            (l.child = e.child),
            (l.memoizedProps = e.memoizedProps),
            (l.memoizedState = e.memoizedState),
            (l.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (l.sibling = e.sibling),
            (l.index = e.index),
            (l.ref = e.ref),
            (l.refCleanup = e.refCleanup),
            l
        );
    }
    function rr(e, t) {
        e.flags &= 65011714;
        var l = e.alternate;
        return (
            l === null
                ? ((e.childLanes = 0),
                  (e.lanes = t),
                  (e.child = null),
                  (e.subtreeFlags = 0),
                  (e.memoizedProps = null),
                  (e.memoizedState = null),
                  (e.updateQueue = null),
                  (e.dependencies = null),
                  (e.stateNode = null))
                : ((e.childLanes = l.childLanes),
                  (e.lanes = l.lanes),
                  (e.child = l.child),
                  (e.subtreeFlags = 0),
                  (e.deletions = null),
                  (e.memoizedProps = l.memoizedProps),
                  (e.memoizedState = l.memoizedState),
                  (e.updateQueue = l.updateQueue),
                  (e.type = l.type),
                  (t = l.dependencies),
                  (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
            e
        );
    }
    function Ai(e, t, l, a, n, i) {
        var s = 0;
        if (((a = e), typeof e == 'function')) rc(e) && (s = 1);
        else if (typeof e == 'string') s = Kg(e, l, q.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
        else
            e: switch (e) {
                case ue:
                    return ((e = At(31, l, t, n)), (e.elementType = ue), (e.lanes = i), e);
                case Q:
                    return ia(l.children, n, i, t);
                case F:
                    ((s = 8), (n |= 24));
                    break;
                case ve:
                    return ((e = At(12, l, t, n | 2)), (e.elementType = ve), (e.lanes = i), e);
                case je:
                    return ((e = At(13, l, t, n)), (e.elementType = je), (e.lanes = i), e);
                case xe:
                    return ((e = At(19, l, t, n)), (e.elementType = xe), (e.lanes = i), e);
                default:
                    if (typeof e == 'object' && e !== null)
                        switch (e.$$typeof) {
                            case pe:
                                s = 10;
                                break e;
                            case Ae:
                                s = 9;
                                break e;
                            case ye:
                                s = 11;
                                break e;
                            case G:
                                s = 14;
                                break e;
                            case Y:
                                ((s = 16), (a = null));
                                break e;
                        }
                    ((s = 29), (l = Error(r(130, e === null ? 'null' : typeof e, ''))), (a = null));
            }
        return ((t = At(s, l, t, n)), (t.elementType = e), (t.type = a), (t.lanes = i), t);
    }
    function ia(e, t, l, a) {
        return ((e = At(7, e, a, t)), (e.lanes = l), e);
    }
    function fc(e, t, l) {
        return ((e = At(6, e, null, t)), (e.lanes = l), e);
    }
    function fr(e) {
        var t = At(18, null, null, 0);
        return ((t.stateNode = e), t);
    }
    function dc(e, t, l) {
        return (
            (t = At(4, e.children !== null ? e.children : [], e.key, t)),
            (t.lanes = l),
            (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
            t
        );
    }
    var dr = new WeakMap();
    function Ut(e, t) {
        if (typeof e == 'object' && e !== null) {
            var l = dr.get(e);
            return l !== void 0 ? l : ((t = { value: e, source: t, stack: ee(t) }), dr.set(e, t), t);
        }
        return { value: e, source: t, stack: ee(t) };
    }
    var Da = [],
        Ra = 0,
        zi = null,
        Cn = 0,
        Lt = [],
        Ht = 0,
        Tl = null,
        It = 1,
        Pt = '';
    function cl(e, t) {
        ((Da[Ra++] = Cn), (Da[Ra++] = zi), (zi = e), (Cn = t));
    }
    function mr(e, t, l) {
        ((Lt[Ht++] = It), (Lt[Ht++] = Pt), (Lt[Ht++] = Tl), (Tl = e));
        var a = It;
        e = Pt;
        var n = 32 - gt(a) - 1;
        ((a &= ~(1 << n)), (l += 1));
        var i = 32 - gt(t) + n;
        if (30 < i) {
            var s = n - (n % 5);
            ((i = (a & ((1 << s) - 1)).toString(32)), (a >>= s), (n -= s), (It = (1 << (32 - gt(t) + n)) | (l << n) | a), (Pt = i + e));
        } else ((It = (1 << i) | (l << n) | a), (Pt = e));
    }
    function mc(e) {
        e.return !== null && (cl(e, 1), mr(e, 1, 0));
    }
    function hc(e) {
        for (; e === zi; ) ((zi = Da[--Ra]), (Da[Ra] = null), (Cn = Da[--Ra]), (Da[Ra] = null));
        for (; e === Tl; ) ((Tl = Lt[--Ht]), (Lt[Ht] = null), (Pt = Lt[--Ht]), (Lt[Ht] = null), (It = Lt[--Ht]), (Lt[Ht] = null));
    }
    function hr(e, t) {
        ((Lt[Ht++] = It), (Lt[Ht++] = Pt), (Lt[Ht++] = Tl), (It = t.id), (Pt = t.overflow), (Tl = e));
    }
    var st = null,
        qe = null,
        Ce = !1,
        wl = null,
        Bt = !1,
        gc = Error(r(519));
    function Al(e) {
        var t = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', ''));
        throw (jn(Ut(t, e)), gc);
    }
    function gr(e) {
        var t = e.stateNode,
            l = e.type,
            a = e.memoizedProps;
        switch (((t[it] = e), (t[pt] = a), l)) {
            case 'dialog':
                (ge('cancel', t), ge('close', t));
                break;
            case 'iframe':
            case 'object':
            case 'embed':
                ge('load', t);
                break;
            case 'video':
            case 'audio':
                for (l = 0; l < Qn.length; l++) ge(Qn[l], t);
                break;
            case 'source':
                ge('error', t);
                break;
            case 'img':
            case 'image':
            case 'link':
                (ge('error', t), ge('load', t));
                break;
            case 'details':
                ge('toggle', t);
                break;
            case 'input':
                (ge('invalid', t), zo(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0));
                break;
            case 'select':
                ge('invalid', t);
                break;
            case 'textarea':
                (ge('invalid', t), Mo(t, a.value, a.defaultValue, a.children));
        }
        ((l = a.children),
            (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
            t.textContent === '' + l ||
            a.suppressHydrationWarning === !0 ||
            Rd(t.textContent, l)
                ? (a.popover != null && (ge('beforetoggle', t), ge('toggle', t)),
                  a.onScroll != null && ge('scroll', t),
                  a.onScrollEnd != null && ge('scrollend', t),
                  a.onClick != null && (t.onclick = nl),
                  (t = !0))
                : (t = !1),
            t || Al(e, !0));
    }
    function vr(e) {
        for (st = e.return; st; )
            switch (st.tag) {
                case 5:
                case 31:
                case 13:
                    Bt = !1;
                    return;
                case 27:
                case 3:
                    Bt = !0;
                    return;
                default:
                    st = st.return;
            }
    }
    function Oa(e) {
        if (e !== st) return !1;
        if (!Ce) return (vr(e), (Ce = !0), !1);
        var t = e.tag,
            l;
        if (
            ((l = t !== 3 && t !== 27) &&
                ((l = t === 5) && ((l = e.type), (l = !(l !== 'form' && l !== 'button') || Ru(e.type, e.memoizedProps))), (l = !l)),
            l && qe && Al(e),
            vr(e),
            t === 13)
        ) {
            if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(r(317));
            qe = Yd(e);
        } else if (t === 31) {
            if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(r(317));
            qe = Yd(e);
        } else t === 27 ? ((t = qe), Gl(e.type) ? ((e = Hu), (Hu = null), (qe = e)) : (qe = t)) : (qe = st ? Gt(e.stateNode.nextSibling) : null);
        return !0;
    }
    function sa() {
        ((qe = st = null), (Ce = !1));
    }
    function vc() {
        var e = wl;
        return (e !== null && (Ct === null ? (Ct = e) : Ct.push.apply(Ct, e), (wl = null)), e);
    }
    function jn(e) {
        wl === null ? (wl = [e]) : wl.push(e);
    }
    var pc = h(null),
        ca = null,
        ul = null;
    function zl(e, t, l) {
        (U(pc, t._currentValue), (t._currentValue = l));
    }
    function ol(e) {
        ((e._currentValue = pc.current), E(pc));
    }
    function yc(e, t, l) {
        for (; e !== null; ) {
            var a = e.alternate;
            if (
                ((e.childLanes & t) !== t
                    ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
                    : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
                e === l)
            )
                break;
            e = e.return;
        }
    }
    function bc(e, t, l, a) {
        var n = e.child;
        for (n !== null && (n.return = e); n !== null; ) {
            var i = n.dependencies;
            if (i !== null) {
                var s = n.child;
                i = i.firstContext;
                e: for (; i !== null; ) {
                    var o = i;
                    i = n;
                    for (var m = 0; m < t.length; m++)
                        if (o.context === t[m]) {
                            ((i.lanes |= l), (o = i.alternate), o !== null && (o.lanes |= l), yc(i.return, l, e), a || (s = null));
                            break e;
                        }
                    i = o.next;
                }
            } else if (n.tag === 18) {
                if (((s = n.return), s === null)) throw Error(r(341));
                ((s.lanes |= l), (i = s.alternate), i !== null && (i.lanes |= l), yc(s, l, e), (s = null));
            } else s = n.child;
            if (s !== null) s.return = n;
            else
                for (s = n; s !== null; ) {
                    if (s === e) {
                        s = null;
                        break;
                    }
                    if (((n = s.sibling), n !== null)) {
                        ((n.return = s.return), (s = n));
                        break;
                    }
                    s = s.return;
                }
            n = s;
        }
    }
    function _a(e, t, l, a) {
        e = null;
        for (var n = t, i = !1; n !== null; ) {
            if (!i) {
                if ((n.flags & 524288) !== 0) i = !0;
                else if ((n.flags & 262144) !== 0) break;
            }
            if (n.tag === 10) {
                var s = n.alternate;
                if (s === null) throw Error(r(387));
                if (((s = s.memoizedProps), s !== null)) {
                    var o = n.type;
                    wt(n.pendingProps.value, s.value) || (e !== null ? e.push(o) : (e = [o]));
                }
            } else if (n === P.current) {
                if (((s = n.alternate), s === null)) throw Error(r(387));
                s.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push($n) : (e = [$n]));
            }
            n = n.return;
        }
        (e !== null && bc(t, e, l, a), (t.flags |= 262144));
    }
    function Ei(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!wt(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
        }
        return !1;
    }
    function ua(e) {
        ((ca = e), (ul = null), (e = e.dependencies), e !== null && (e.firstContext = null));
    }
    function ct(e) {
        return pr(ca, e);
    }
    function Mi(e, t) {
        return (ca === null && ua(e), pr(e, t));
    }
    function pr(e, t) {
        var l = t._currentValue;
        if (((t = { context: t, memoizedValue: l, next: null }), ul === null)) {
            if (e === null) throw Error(r(308));
            ((ul = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
        } else ul = ul.next = t;
        return l;
    }
    var Vh =
            typeof AbortController < 'u'
                ? AbortController
                : function () {
                      var e = [],
                          t = (this.signal = {
                              aborted: !1,
                              addEventListener: function (l, a) {
                                  e.push(a);
                              },
                          });
                      this.abort = function () {
                          ((t.aborted = !0),
                              e.forEach(function (l) {
                                  return l();
                              }));
                      };
                  },
        Xh = u.unstable_scheduleCallback,
        Qh = u.unstable_NormalPriority,
        Je = { $$typeof: pe, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
    function Sc() {
        return { controller: new Vh(), data: new Map(), refCount: 0 };
    }
    function Nn(e) {
        (e.refCount--,
            e.refCount === 0 &&
                Xh(Qh, function () {
                    e.controller.abort();
                }));
    }
    var Tn = null,
        xc = 0,
        Ua = 0,
        La = null;
    function Zh(e, t) {
        if (Tn === null) {
            var l = (Tn = []);
            ((xc = 0),
                (Ua = Nu()),
                (La = {
                    status: 'pending',
                    value: void 0,
                    then: function (a) {
                        l.push(a);
                    },
                }));
        }
        return (xc++, t.then(yr, yr), t);
    }
    function yr() {
        if (--xc === 0 && Tn !== null) {
            La !== null && (La.status = 'fulfilled');
            var e = Tn;
            ((Tn = null), (Ua = 0), (La = null));
            for (var t = 0; t < e.length; t++) (0, e[t])();
        }
    }
    function Kh(e, t) {
        var l = [],
            a = {
                status: 'pending',
                value: null,
                reason: null,
                then: function (n) {
                    l.push(n);
                },
            };
        return (
            e.then(
                function () {
                    ((a.status = 'fulfilled'), (a.value = t));
                    for (var n = 0; n < l.length; n++) (0, l[n])(t);
                },
                function (n) {
                    for (a.status = 'rejected', a.reason = n, n = 0; n < l.length; n++) (0, l[n])(void 0);
                }
            ),
            a
        );
    }
    var br = b.S;
    b.S = function (e, t) {
        ((ad = ht()), typeof t == 'object' && t !== null && typeof t.then == 'function' && Zh(e, t), br !== null && br(e, t));
    };
    var oa = h(null);
    function Cc() {
        var e = oa.current;
        return e !== null ? e : Le.pooledCache;
    }
    function ki(e, t) {
        t === null ? U(oa, oa.current) : U(oa, t.pool);
    }
    function Sr() {
        var e = Cc();
        return e === null ? null : { parent: Je._currentValue, pool: e };
    }
    var Ha = Error(r(460)),
        jc = Error(r(474)),
        Di = Error(r(542)),
        Ri = { then: function () {} };
    function xr(e) {
        return ((e = e.status), e === 'fulfilled' || e === 'rejected');
    }
    function Cr(e, t, l) {
        switch (((l = e[l]), l === void 0 ? e.push(t) : l !== t && (t.then(nl, nl), (t = l)), t.status)) {
            case 'fulfilled':
                return t.value;
            case 'rejected':
                throw ((e = t.reason), Nr(e), e);
            default:
                if (typeof t.status == 'string') t.then(nl, nl);
                else {
                    if (((e = Le), e !== null && 100 < e.shellSuspendCounter)) throw Error(r(482));
                    ((e = t),
                        (e.status = 'pending'),
                        e.then(
                            function (a) {
                                if (t.status === 'pending') {
                                    var n = t;
                                    ((n.status = 'fulfilled'), (n.value = a));
                                }
                            },
                            function (a) {
                                if (t.status === 'pending') {
                                    var n = t;
                                    ((n.status = 'rejected'), (n.reason = a));
                                }
                            }
                        ));
                }
                switch (t.status) {
                    case 'fulfilled':
                        return t.value;
                    case 'rejected':
                        throw ((e = t.reason), Nr(e), e);
                }
                throw ((fa = t), Ha);
        }
    }
    function ra(e) {
        try {
            var t = e._init;
            return t(e._payload);
        } catch (l) {
            throw l !== null && typeof l == 'object' && typeof l.then == 'function' ? ((fa = l), Ha) : l;
        }
    }
    var fa = null;
    function jr() {
        if (fa === null) throw Error(r(459));
        var e = fa;
        return ((fa = null), e);
    }
    function Nr(e) {
        if (e === Ha || e === Di) throw Error(r(483));
    }
    var Ba = null,
        wn = 0;
    function Oi(e) {
        var t = wn;
        return ((wn += 1), Ba === null && (Ba = []), Cr(Ba, e, t));
    }
    function An(e, t) {
        ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
    }
    function _i(e, t) {
        throw t.$$typeof === V
            ? Error(r(525))
            : ((e = Object.prototype.toString.call(t)),
              Error(r(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)));
    }
    function Tr(e) {
        function t(y, g) {
            if (e) {
                var x = y.deletions;
                x === null ? ((y.deletions = [g]), (y.flags |= 16)) : x.push(g);
            }
        }
        function l(y, g) {
            if (!e) return null;
            for (; g !== null; ) (t(y, g), (g = g.sibling));
            return null;
        }
        function a(y) {
            for (var g = new Map(); y !== null; ) (y.key !== null ? g.set(y.key, y) : g.set(y.index, y), (y = y.sibling));
            return g;
        }
        function n(y, g) {
            return ((y = sl(y, g)), (y.index = 0), (y.sibling = null), y);
        }
        function i(y, g, x) {
            return (
                (y.index = x),
                e
                    ? ((x = y.alternate), x !== null ? ((x = x.index), x < g ? ((y.flags |= 67108866), g) : x) : ((y.flags |= 67108866), g))
                    : ((y.flags |= 1048576), g)
            );
        }
        function s(y) {
            return (e && y.alternate === null && (y.flags |= 67108866), y);
        }
        function o(y, g, x, M) {
            return g === null || g.tag !== 6 ? ((g = fc(x, y.mode, M)), (g.return = y), g) : ((g = n(g, x)), (g.return = y), g);
        }
        function m(y, g, x, M) {
            var le = x.type;
            return le === Q
                ? z(y, g, x.props.children, M, x.key)
                : g !== null && (g.elementType === le || (typeof le == 'object' && le !== null && le.$$typeof === Y && ra(le) === g.type))
                  ? ((g = n(g, x.props)), An(g, x), (g.return = y), g)
                  : ((g = Ai(x.type, x.key, x.props, null, y.mode, M)), An(g, x), (g.return = y), g);
        }
        function C(y, g, x, M) {
            return g === null || g.tag !== 4 || g.stateNode.containerInfo !== x.containerInfo || g.stateNode.implementation !== x.implementation
                ? ((g = dc(x, y.mode, M)), (g.return = y), g)
                : ((g = n(g, x.children || [])), (g.return = y), g);
        }
        function z(y, g, x, M, le) {
            return g === null || g.tag !== 7 ? ((g = ia(x, y.mode, M, le)), (g.return = y), g) : ((g = n(g, x)), (g.return = y), g);
        }
        function R(y, g, x) {
            if ((typeof g == 'string' && g !== '') || typeof g == 'number' || typeof g == 'bigint')
                return ((g = fc('' + g, y.mode, x)), (g.return = y), g);
            if (typeof g == 'object' && g !== null) {
                switch (g.$$typeof) {
                    case ae:
                        return ((x = Ai(g.type, g.key, g.props, null, y.mode, x)), An(x, g), (x.return = y), x);
                    case X:
                        return ((g = dc(g, y.mode, x)), (g.return = y), g);
                    case Y:
                        return ((g = ra(g)), R(y, g, x));
                }
                if (H(g) || oe(g)) return ((g = ia(g, y.mode, x, null)), (g.return = y), g);
                if (typeof g.then == 'function') return R(y, Oi(g), x);
                if (g.$$typeof === pe) return R(y, Mi(y, g), x);
                _i(y, g);
            }
            return null;
        }
        function j(y, g, x, M) {
            var le = g !== null ? g.key : null;
            if ((typeof x == 'string' && x !== '') || typeof x == 'number' || typeof x == 'bigint') return le !== null ? null : o(y, g, '' + x, M);
            if (typeof x == 'object' && x !== null) {
                switch (x.$$typeof) {
                    case ae:
                        return x.key === le ? m(y, g, x, M) : null;
                    case X:
                        return x.key === le ? C(y, g, x, M) : null;
                    case Y:
                        return ((x = ra(x)), j(y, g, x, M));
                }
                if (H(x) || oe(x)) return le !== null ? null : z(y, g, x, M, null);
                if (typeof x.then == 'function') return j(y, g, Oi(x), M);
                if (x.$$typeof === pe) return j(y, g, Mi(y, x), M);
                _i(y, x);
            }
            return null;
        }
        function w(y, g, x, M, le) {
            if ((typeof M == 'string' && M !== '') || typeof M == 'number' || typeof M == 'bigint')
                return ((y = y.get(x) || null), o(g, y, '' + M, le));
            if (typeof M == 'object' && M !== null) {
                switch (M.$$typeof) {
                    case ae:
                        return ((y = y.get(M.key === null ? x : M.key) || null), m(g, y, M, le));
                    case X:
                        return ((y = y.get(M.key === null ? x : M.key) || null), C(g, y, M, le));
                    case Y:
                        return ((M = ra(M)), w(y, g, x, M, le));
                }
                if (H(M) || oe(M)) return ((y = y.get(x) || null), z(g, y, M, le, null));
                if (typeof M.then == 'function') return w(y, g, x, Oi(M), le);
                if (M.$$typeof === pe) return w(y, g, x, Mi(g, M), le);
                _i(g, M);
            }
            return null;
        }
        function K(y, g, x, M) {
            for (var le = null, ze = null, $ = g, de = (g = 0), Se = null; $ !== null && de < x.length; de++) {
                $.index > de ? ((Se = $), ($ = null)) : (Se = $.sibling);
                var Ee = j(y, $, x[de], M);
                if (Ee === null) {
                    $ === null && ($ = Se);
                    break;
                }
                (e && $ && Ee.alternate === null && t(y, $), (g = i(Ee, g, de)), ze === null ? (le = Ee) : (ze.sibling = Ee), (ze = Ee), ($ = Se));
            }
            if (de === x.length) return (l(y, $), Ce && cl(y, de), le);
            if ($ === null) {
                for (; de < x.length; de++)
                    (($ = R(y, x[de], M)), $ !== null && ((g = i($, g, de)), ze === null ? (le = $) : (ze.sibling = $), (ze = $)));
                return (Ce && cl(y, de), le);
            }
            for ($ = a($); de < x.length; de++)
                ((Se = w($, y, de, x[de], M)),
                    Se !== null &&
                        (e && Se.alternate !== null && $.delete(Se.key === null ? de : Se.key),
                        (g = i(Se, g, de)),
                        ze === null ? (le = Se) : (ze.sibling = Se),
                        (ze = Se)));
            return (
                e &&
                    $.forEach(function (Zl) {
                        return t(y, Zl);
                    }),
                Ce && cl(y, de),
                le
            );
        }
        function ie(y, g, x, M) {
            if (x == null) throw Error(r(151));
            for (var le = null, ze = null, $ = g, de = (g = 0), Se = null, Ee = x.next(); $ !== null && !Ee.done; de++, Ee = x.next()) {
                $.index > de ? ((Se = $), ($ = null)) : (Se = $.sibling);
                var Zl = j(y, $, Ee.value, M);
                if (Zl === null) {
                    $ === null && ($ = Se);
                    break;
                }
                (e && $ && Zl.alternate === null && t(y, $), (g = i(Zl, g, de)), ze === null ? (le = Zl) : (ze.sibling = Zl), (ze = Zl), ($ = Se));
            }
            if (Ee.done) return (l(y, $), Ce && cl(y, de), le);
            if ($ === null) {
                for (; !Ee.done; de++, Ee = x.next())
                    ((Ee = R(y, Ee.value, M)), Ee !== null && ((g = i(Ee, g, de)), ze === null ? (le = Ee) : (ze.sibling = Ee), (ze = Ee)));
                return (Ce && cl(y, de), le);
            }
            for ($ = a($); !Ee.done; de++, Ee = x.next())
                ((Ee = w($, y, de, Ee.value, M)),
                    Ee !== null &&
                        (e && Ee.alternate !== null && $.delete(Ee.key === null ? de : Ee.key),
                        (g = i(Ee, g, de)),
                        ze === null ? (le = Ee) : (ze.sibling = Ee),
                        (ze = Ee)));
            return (
                e &&
                    $.forEach(function (nv) {
                        return t(y, nv);
                    }),
                Ce && cl(y, de),
                le
            );
        }
        function Ue(y, g, x, M) {
            if (
                (typeof x == 'object' && x !== null && x.type === Q && x.key === null && (x = x.props.children), typeof x == 'object' && x !== null)
            ) {
                switch (x.$$typeof) {
                    case ae:
                        e: {
                            for (var le = x.key; g !== null; ) {
                                if (g.key === le) {
                                    if (((le = x.type), le === Q)) {
                                        if (g.tag === 7) {
                                            (l(y, g.sibling), (M = n(g, x.props.children)), (M.return = y), (y = M));
                                            break e;
                                        }
                                    } else if (
                                        g.elementType === le ||
                                        (typeof le == 'object' && le !== null && le.$$typeof === Y && ra(le) === g.type)
                                    ) {
                                        (l(y, g.sibling), (M = n(g, x.props)), An(M, x), (M.return = y), (y = M));
                                        break e;
                                    }
                                    l(y, g);
                                    break;
                                } else t(y, g);
                                g = g.sibling;
                            }
                            x.type === Q
                                ? ((M = ia(x.props.children, y.mode, M, x.key)), (M.return = y), (y = M))
                                : ((M = Ai(x.type, x.key, x.props, null, y.mode, M)), An(M, x), (M.return = y), (y = M));
                        }
                        return s(y);
                    case X:
                        e: {
                            for (le = x.key; g !== null; ) {
                                if (g.key === le)
                                    if (
                                        g.tag === 4 &&
                                        g.stateNode.containerInfo === x.containerInfo &&
                                        g.stateNode.implementation === x.implementation
                                    ) {
                                        (l(y, g.sibling), (M = n(g, x.children || [])), (M.return = y), (y = M));
                                        break e;
                                    } else {
                                        l(y, g);
                                        break;
                                    }
                                else t(y, g);
                                g = g.sibling;
                            }
                            ((M = dc(x, y.mode, M)), (M.return = y), (y = M));
                        }
                        return s(y);
                    case Y:
                        return ((x = ra(x)), Ue(y, g, x, M));
                }
                if (H(x)) return K(y, g, x, M);
                if (oe(x)) {
                    if (((le = oe(x)), typeof le != 'function')) throw Error(r(150));
                    return ((x = le.call(x)), ie(y, g, x, M));
                }
                if (typeof x.then == 'function') return Ue(y, g, Oi(x), M);
                if (x.$$typeof === pe) return Ue(y, g, Mi(y, x), M);
                _i(y, x);
            }
            return (typeof x == 'string' && x !== '') || typeof x == 'number' || typeof x == 'bigint'
                ? ((x = '' + x),
                  g !== null && g.tag === 6
                      ? (l(y, g.sibling), (M = n(g, x)), (M.return = y), (y = M))
                      : (l(y, g), (M = fc(x, y.mode, M)), (M.return = y), (y = M)),
                  s(y))
                : l(y, g);
        }
        return function (y, g, x, M) {
            try {
                wn = 0;
                var le = Ue(y, g, x, M);
                return ((Ba = null), le);
            } catch ($) {
                if ($ === Ha || $ === Di) throw $;
                var ze = At(29, $, null, y.mode);
                return ((ze.lanes = M), (ze.return = y), ze);
            } finally {
            }
        };
    }
    var da = Tr(!0),
        wr = Tr(!1),
        El = !1;
    function Nc(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
        };
    }
    function Tc(e, t) {
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
    function Ml(e) {
        return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function kl(e, t, l) {
        var a = e.updateQueue;
        if (a === null) return null;
        if (((a = a.shared), (ke & 2) !== 0)) {
            var n = a.pending;
            return (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (a.pending = t), (t = wi(e)), or(e, null, l), t);
        }
        return (Ti(e, a, t, l), wi(e));
    }
    function zn(e, t, l) {
        if (((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))) {
            var a = t.lanes;
            ((a &= e.pendingLanes), (l |= a), (t.lanes = l), po(e, l));
        }
    }
    function wc(e, t) {
        var l = e.updateQueue,
            a = e.alternate;
        if (a !== null && ((a = a.updateQueue), l === a)) {
            var n = null,
                i = null;
            if (((l = l.firstBaseUpdate), l !== null)) {
                do {
                    var s = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null };
                    (i === null ? (n = i = s) : (i = i.next = s), (l = l.next));
                } while (l !== null);
                i === null ? (n = i = t) : (i = i.next = t);
            } else n = i = t;
            ((l = { baseState: a.baseState, firstBaseUpdate: n, lastBaseUpdate: i, shared: a.shared, callbacks: a.callbacks }), (e.updateQueue = l));
            return;
        }
        ((e = l.lastBaseUpdate), e === null ? (l.firstBaseUpdate = t) : (e.next = t), (l.lastBaseUpdate = t));
    }
    var Ac = !1;
    function En() {
        if (Ac) {
            var e = La;
            if (e !== null) throw e;
        }
    }
    function Mn(e, t, l, a) {
        Ac = !1;
        var n = e.updateQueue;
        El = !1;
        var i = n.firstBaseUpdate,
            s = n.lastBaseUpdate,
            o = n.shared.pending;
        if (o !== null) {
            n.shared.pending = null;
            var m = o,
                C = m.next;
            ((m.next = null), s === null ? (i = C) : (s.next = C), (s = m));
            var z = e.alternate;
            z !== null &&
                ((z = z.updateQueue),
                (o = z.lastBaseUpdate),
                o !== s && (o === null ? (z.firstBaseUpdate = C) : (o.next = C), (z.lastBaseUpdate = m)));
        }
        if (i !== null) {
            var R = n.baseState;
            ((s = 0), (z = C = m = null), (o = i));
            do {
                var j = o.lane & -536870913,
                    w = j !== o.lane;
                if (w ? (be & j) === j : (a & j) === j) {
                    (j !== 0 && j === Ua && (Ac = !0),
                        z !== null && (z = z.next = { lane: 0, tag: o.tag, payload: o.payload, callback: null, next: null }));
                    e: {
                        var K = e,
                            ie = o;
                        j = t;
                        var Ue = l;
                        switch (ie.tag) {
                            case 1:
                                if (((K = ie.payload), typeof K == 'function')) {
                                    R = K.call(Ue, R, j);
                                    break e;
                                }
                                R = K;
                                break e;
                            case 3:
                                K.flags = (K.flags & -65537) | 128;
                            case 0:
                                if (((K = ie.payload), (j = typeof K == 'function' ? K.call(Ue, R, j) : K), j == null)) break e;
                                R = D({}, R, j);
                                break e;
                            case 2:
                                El = !0;
                        }
                    }
                    ((j = o.callback),
                        j !== null && ((e.flags |= 64), w && (e.flags |= 8192), (w = n.callbacks), w === null ? (n.callbacks = [j]) : w.push(j)));
                } else
                    ((w = { lane: j, tag: o.tag, payload: o.payload, callback: o.callback, next: null }),
                        z === null ? ((C = z = w), (m = R)) : (z = z.next = w),
                        (s |= j));
                if (((o = o.next), o === null)) {
                    if (((o = n.shared.pending), o === null)) break;
                    ((w = o), (o = w.next), (w.next = null), (n.lastBaseUpdate = w), (n.shared.pending = null));
                }
            } while (!0);
            (z === null && (m = R),
                (n.baseState = m),
                (n.firstBaseUpdate = C),
                (n.lastBaseUpdate = z),
                i === null && (n.shared.lanes = 0),
                (Ul |= s),
                (e.lanes = s),
                (e.memoizedState = R));
        }
    }
    function Ar(e, t) {
        if (typeof e != 'function') throw Error(r(191, e));
        e.call(t);
    }
    function zr(e, t) {
        var l = e.callbacks;
        if (l !== null) for (e.callbacks = null, e = 0; e < l.length; e++) Ar(l[e], t);
    }
    var qa = h(null),
        Ui = h(0);
    function Er(e, t) {
        ((e = yl), U(Ui, e), U(qa, t), (yl = e | t.baseLanes));
    }
    function zc() {
        (U(Ui, yl), U(qa, qa.current));
    }
    function Ec() {
        ((yl = Ui.current), E(qa), E(Ui));
    }
    var zt = h(null),
        qt = null;
    function Dl(e) {
        var t = e.alternate;
        (U(Ze, Ze.current & 1), U(zt, e), qt === null && (t === null || qa.current !== null || t.memoizedState !== null) && (qt = e));
    }
    function Mc(e) {
        (U(Ze, Ze.current), U(zt, e), qt === null && (qt = e));
    }
    function Mr(e) {
        e.tag === 22 ? (U(Ze, Ze.current), U(zt, e), qt === null && (qt = e)) : Rl();
    }
    function Rl() {
        (U(Ze, Ze.current), U(zt, zt.current));
    }
    function Et(e) {
        (E(zt), qt === e && (qt = null), E(Ze));
    }
    var Ze = h(0);
    function Li(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var l = t.memoizedState;
                if (l !== null && ((l = l.dehydrated), l === null || Uu(l) || Lu(l))) return t;
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
    var rl = 0,
        fe = null,
        Oe = null,
        We = null,
        Hi = !1,
        Ga = !1,
        ma = !1,
        Bi = 0,
        kn = 0,
        Ya = null,
        Jh = 0;
    function Xe() {
        throw Error(r(321));
    }
    function kc(e, t) {
        if (t === null) return !1;
        for (var l = 0; l < t.length && l < e.length; l++) if (!wt(e[l], t[l])) return !1;
        return !0;
    }
    function Dc(e, t, l, a, n, i) {
        return (
            (rl = i),
            (fe = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (b.H = e === null || e.memoizedState === null ? hf : Kc),
            (ma = !1),
            (i = l(a, n)),
            (ma = !1),
            Ga && (i = Dr(t, l, a, n)),
            kr(e),
            i
        );
    }
    function kr(e) {
        b.H = On;
        var t = Oe !== null && Oe.next !== null;
        if (((rl = 0), (We = Oe = fe = null), (Hi = !1), (kn = 0), (Ya = null), t)) throw Error(r(300));
        e === null || $e || ((e = e.dependencies), e !== null && Ei(e) && ($e = !0));
    }
    function Dr(e, t, l, a) {
        fe = e;
        var n = 0;
        do {
            if ((Ga && (Ya = null), (kn = 0), (Ga = !1), 25 <= n)) throw Error(r(301));
            if (((n += 1), (We = Oe = null), e.updateQueue != null)) {
                var i = e.updateQueue;
                ((i.lastEffect = null), (i.events = null), (i.stores = null), i.memoCache != null && (i.memoCache.index = 0));
            }
            ((b.H = gf), (i = t(l, a)));
        } while (Ga);
        return i;
    }
    function Wh() {
        var e = b.H,
            t = e.useState()[0];
        return (
            (t = typeof t.then == 'function' ? Dn(t) : t),
            (e = e.useState()[0]),
            (Oe !== null ? Oe.memoizedState : null) !== e && (fe.flags |= 1024),
            t
        );
    }
    function Rc() {
        var e = Bi !== 0;
        return ((Bi = 0), e);
    }
    function Oc(e, t, l) {
        ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
    }
    function _c(e) {
        if (Hi) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                (t !== null && (t.pending = null), (e = e.next));
            }
            Hi = !1;
        }
        ((rl = 0), (We = Oe = fe = null), (Ga = !1), (kn = Bi = 0), (Ya = null));
    }
    function vt() {
        var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        return (We === null ? (fe.memoizedState = We = e) : (We = We.next = e), We);
    }
    function Ke() {
        if (Oe === null) {
            var e = fe.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = Oe.next;
        var t = We === null ? fe.memoizedState : We.next;
        if (t !== null) ((We = t), (Oe = e));
        else {
            if (e === null) throw fe.alternate === null ? Error(r(467)) : Error(r(310));
            ((Oe = e),
                (e = { memoizedState: Oe.memoizedState, baseState: Oe.baseState, baseQueue: Oe.baseQueue, queue: Oe.queue, next: null }),
                We === null ? (fe.memoizedState = We = e) : (We = We.next = e));
        }
        return We;
    }
    function qi() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Dn(e) {
        var t = kn;
        return (
            (kn += 1),
            Ya === null && (Ya = []),
            (e = Cr(Ya, e, t)),
            (t = fe),
            (We === null ? t.memoizedState : We.next) === null && ((t = t.alternate), (b.H = t === null || t.memoizedState === null ? hf : Kc)),
            e
        );
    }
    function Gi(e) {
        if (e !== null && typeof e == 'object') {
            if (typeof e.then == 'function') return Dn(e);
            if (e.$$typeof === pe) return ct(e);
        }
        throw Error(r(438, String(e)));
    }
    function Uc(e) {
        var t = null,
            l = fe.updateQueue;
        if ((l !== null && (t = l.memoCache), t == null)) {
            var a = fe.alternate;
            a !== null &&
                ((a = a.updateQueue),
                a !== null &&
                    ((a = a.memoCache),
                    a != null &&
                        (t = {
                            data: a.data.map(function (n) {
                                return n.slice();
                            }),
                            index: 0,
                        })));
        }
        if (
            (t == null && (t = { data: [], index: 0 }),
            l === null && ((l = qi()), (fe.updateQueue = l)),
            (l.memoCache = t),
            (l = t.data[t.index]),
            l === void 0)
        )
            for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = ne;
        return (t.index++, l);
    }
    function fl(e, t) {
        return typeof t == 'function' ? t(e) : t;
    }
    function Yi(e) {
        var t = Ke();
        return Lc(t, Oe, e);
    }
    function Lc(e, t, l) {
        var a = e.queue;
        if (a === null) throw Error(r(311));
        a.lastRenderedReducer = l;
        var n = e.baseQueue,
            i = a.pending;
        if (i !== null) {
            if (n !== null) {
                var s = n.next;
                ((n.next = i.next), (i.next = s));
            }
            ((t.baseQueue = n = i), (a.pending = null));
        }
        if (((i = e.baseState), n === null)) e.memoizedState = i;
        else {
            t = n.next;
            var o = (s = null),
                m = null,
                C = t,
                z = !1;
            do {
                var R = C.lane & -536870913;
                if (R !== C.lane ? (be & R) === R : (rl & R) === R) {
                    var j = C.revertLane;
                    if (j === 0)
                        (m !== null &&
                            (m = m.next =
                                {
                                    lane: 0,
                                    revertLane: 0,
                                    gesture: null,
                                    action: C.action,
                                    hasEagerState: C.hasEagerState,
                                    eagerState: C.eagerState,
                                    next: null,
                                }),
                            R === Ua && (z = !0));
                    else if ((rl & j) === j) {
                        ((C = C.next), j === Ua && (z = !0));
                        continue;
                    } else
                        ((R = {
                            lane: 0,
                            revertLane: C.revertLane,
                            gesture: null,
                            action: C.action,
                            hasEagerState: C.hasEagerState,
                            eagerState: C.eagerState,
                            next: null,
                        }),
                            m === null ? ((o = m = R), (s = i)) : (m = m.next = R),
                            (fe.lanes |= j),
                            (Ul |= j));
                    ((R = C.action), ma && l(i, R), (i = C.hasEagerState ? C.eagerState : l(i, R)));
                } else
                    ((j = {
                        lane: R,
                        revertLane: C.revertLane,
                        gesture: C.gesture,
                        action: C.action,
                        hasEagerState: C.hasEagerState,
                        eagerState: C.eagerState,
                        next: null,
                    }),
                        m === null ? ((o = m = j), (s = i)) : (m = m.next = j),
                        (fe.lanes |= R),
                        (Ul |= R));
                C = C.next;
            } while (C !== null && C !== t);
            if ((m === null ? (s = i) : (m.next = o), !wt(i, e.memoizedState) && (($e = !0), z && ((l = La), l !== null)))) throw l;
            ((e.memoizedState = i), (e.baseState = s), (e.baseQueue = m), (a.lastRenderedState = i));
        }
        return (n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
    }
    function Hc(e) {
        var t = Ke(),
            l = t.queue;
        if (l === null) throw Error(r(311));
        l.lastRenderedReducer = e;
        var a = l.dispatch,
            n = l.pending,
            i = t.memoizedState;
        if (n !== null) {
            l.pending = null;
            var s = (n = n.next);
            do ((i = e(i, s.action)), (s = s.next));
            while (s !== n);
            (wt(i, t.memoizedState) || ($e = !0), (t.memoizedState = i), t.baseQueue === null && (t.baseState = i), (l.lastRenderedState = i));
        }
        return [i, a];
    }
    function Rr(e, t, l) {
        var a = fe,
            n = Ke(),
            i = Ce;
        if (i) {
            if (l === void 0) throw Error(r(407));
            l = l();
        } else l = t();
        var s = !wt((Oe || n).memoizedState, l);
        if (
            (s && ((n.memoizedState = l), ($e = !0)),
            (n = n.queue),
            Gc(Ur.bind(null, a, n, e), [e]),
            n.getSnapshot !== t || s || (We !== null && We.memoizedState.tag & 1))
        ) {
            if (((a.flags |= 2048), Va(9, { destroy: void 0 }, _r.bind(null, a, n, l, t), null), Le === null)) throw Error(r(349));
            i || (rl & 127) !== 0 || Or(a, t, l);
        }
        return l;
    }
    function Or(e, t, l) {
        ((e.flags |= 16384),
            (e = { getSnapshot: t, value: l }),
            (t = fe.updateQueue),
            t === null ? ((t = qi()), (fe.updateQueue = t), (t.stores = [e])) : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
    }
    function _r(e, t, l, a) {
        ((t.value = l), (t.getSnapshot = a), Lr(t) && Hr(e));
    }
    function Ur(e, t, l) {
        return l(function () {
            Lr(t) && Hr(e);
        });
    }
    function Lr(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var l = t();
            return !wt(e, l);
        } catch {
            return !0;
        }
    }
    function Hr(e) {
        var t = na(e, 2);
        t !== null && jt(t, e, 2);
    }
    function Bc(e) {
        var t = vt();
        if (typeof e == 'function') {
            var l = e;
            if (((e = l()), ma)) {
                Pe(!0);
                try {
                    l();
                } finally {
                    Pe(!1);
                }
            }
        }
        return (
            (t.memoizedState = t.baseState = e),
            (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: fl, lastRenderedState: e }),
            t
        );
    }
    function Br(e, t, l, a) {
        return ((e.baseState = l), Lc(e, Oe, typeof a == 'function' ? a : fl));
    }
    function $h(e, t, l, a, n) {
        if (Qi(e)) throw Error(r(485));
        if (((e = t.action), e !== null)) {
            var i = {
                payload: n,
                action: e,
                next: null,
                isTransition: !0,
                status: 'pending',
                value: null,
                reason: null,
                listeners: [],
                then: function (s) {
                    i.listeners.push(s);
                },
            };
            (b.T !== null ? l(!0) : (i.isTransition = !1),
                a(i),
                (l = t.pending),
                l === null ? ((i.next = t.pending = i), qr(t, i)) : ((i.next = l.next), (t.pending = l.next = i)));
        }
    }
    function qr(e, t) {
        var l = t.action,
            a = t.payload,
            n = e.state;
        if (t.isTransition) {
            var i = b.T,
                s = {};
            b.T = s;
            try {
                var o = l(n, a),
                    m = b.S;
                (m !== null && m(s, o), Gr(e, t, o));
            } catch (C) {
                qc(e, t, C);
            } finally {
                (i !== null && s.types !== null && (i.types = s.types), (b.T = i));
            }
        } else
            try {
                ((i = l(n, a)), Gr(e, t, i));
            } catch (C) {
                qc(e, t, C);
            }
    }
    function Gr(e, t, l) {
        l !== null && typeof l == 'object' && typeof l.then == 'function'
            ? l.then(
                  function (a) {
                      Yr(e, t, a);
                  },
                  function (a) {
                      return qc(e, t, a);
                  }
              )
            : Yr(e, t, l);
    }
    function Yr(e, t, l) {
        ((t.status = 'fulfilled'),
            (t.value = l),
            Vr(t),
            (e.state = l),
            (t = e.pending),
            t !== null && ((l = t.next), l === t ? (e.pending = null) : ((l = l.next), (t.next = l), qr(e, l))));
    }
    function qc(e, t, l) {
        var a = e.pending;
        if (((e.pending = null), a !== null)) {
            a = a.next;
            do ((t.status = 'rejected'), (t.reason = l), Vr(t), (t = t.next));
            while (t !== a);
        }
        e.action = null;
    }
    function Vr(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Xr(e, t) {
        return t;
    }
    function Qr(e, t) {
        if (Ce) {
            var l = Le.formState;
            if (l !== null) {
                e: {
                    var a = fe;
                    if (Ce) {
                        if (qe) {
                            t: {
                                for (var n = qe, i = Bt; n.nodeType !== 8; ) {
                                    if (!i) {
                                        n = null;
                                        break t;
                                    }
                                    if (((n = Gt(n.nextSibling)), n === null)) {
                                        n = null;
                                        break t;
                                    }
                                }
                                ((i = n.data), (n = i === 'F!' || i === 'F' ? n : null));
                            }
                            if (n) {
                                ((qe = Gt(n.nextSibling)), (a = n.data === 'F!'));
                                break e;
                            }
                        }
                        Al(a);
                    }
                    a = !1;
                }
                a && (t = l[0]);
            }
        }
        return (
            (l = vt()),
            (l.memoizedState = l.baseState = t),
            (a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Xr, lastRenderedState: t }),
            (l.queue = a),
            (l = ff.bind(null, fe, a)),
            (a.dispatch = l),
            (a = Bc(!1)),
            (i = Zc.bind(null, fe, !1, a.queue)),
            (a = vt()),
            (n = { state: t, dispatch: null, action: e, pending: null }),
            (a.queue = n),
            (l = $h.bind(null, fe, n, i, l)),
            (n.dispatch = l),
            (a.memoizedState = e),
            [t, l, !1]
        );
    }
    function Zr(e) {
        var t = Ke();
        return Kr(t, Oe, e);
    }
    function Kr(e, t, l) {
        if (((t = Lc(e, t, Xr)[0]), (e = Yi(fl)[0]), typeof t == 'object' && t !== null && typeof t.then == 'function'))
            try {
                var a = Dn(t);
            } catch (s) {
                throw s === Ha ? Di : s;
            }
        else a = t;
        t = Ke();
        var n = t.queue,
            i = n.dispatch;
        return (l !== t.memoizedState && ((fe.flags |= 2048), Va(9, { destroy: void 0 }, Fh.bind(null, n, l), null)), [a, i, e]);
    }
    function Fh(e, t) {
        e.action = t;
    }
    function Jr(e) {
        var t = Ke(),
            l = Oe;
        if (l !== null) return Kr(t, l, e);
        (Ke(), (t = t.memoizedState), (l = Ke()));
        var a = l.queue.dispatch;
        return ((l.memoizedState = e), [t, a, !1]);
    }
    function Va(e, t, l, a) {
        return (
            (e = { tag: e, create: l, deps: a, inst: t, next: null }),
            (t = fe.updateQueue),
            t === null && ((t = qi()), (fe.updateQueue = t)),
            (l = t.lastEffect),
            l === null ? (t.lastEffect = e.next = e) : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
            e
        );
    }
    function Wr() {
        return Ke().memoizedState;
    }
    function Vi(e, t, l, a) {
        var n = vt();
        ((fe.flags |= e), (n.memoizedState = Va(1 | t, { destroy: void 0 }, l, a === void 0 ? null : a)));
    }
    function Xi(e, t, l, a) {
        var n = Ke();
        a = a === void 0 ? null : a;
        var i = n.memoizedState.inst;
        Oe !== null && a !== null && kc(a, Oe.memoizedState.deps)
            ? (n.memoizedState = Va(t, i, l, a))
            : ((fe.flags |= e), (n.memoizedState = Va(1 | t, i, l, a)));
    }
    function $r(e, t) {
        Vi(8390656, 8, e, t);
    }
    function Gc(e, t) {
        Xi(2048, 8, e, t);
    }
    function Ih(e) {
        fe.flags |= 4;
        var t = fe.updateQueue;
        if (t === null) ((t = qi()), (fe.updateQueue = t), (t.events = [e]));
        else {
            var l = t.events;
            l === null ? (t.events = [e]) : l.push(e);
        }
    }
    function Fr(e) {
        var t = Ke().memoizedState;
        return (
            Ih({ ref: t, nextImpl: e }),
            function () {
                if ((ke & 2) !== 0) throw Error(r(440));
                return t.impl.apply(void 0, arguments);
            }
        );
    }
    function Ir(e, t) {
        return Xi(4, 2, e, t);
    }
    function Pr(e, t) {
        return Xi(4, 4, e, t);
    }
    function ef(e, t) {
        if (typeof t == 'function') {
            e = e();
            var l = t(e);
            return function () {
                typeof l == 'function' ? l() : t(null);
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
    function tf(e, t, l) {
        ((l = l != null ? l.concat([e]) : null), Xi(4, 4, ef.bind(null, t, e), l));
    }
    function Yc() {}
    function lf(e, t) {
        var l = Ke();
        t = t === void 0 ? null : t;
        var a = l.memoizedState;
        return t !== null && kc(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
    }
    function af(e, t) {
        var l = Ke();
        t = t === void 0 ? null : t;
        var a = l.memoizedState;
        if (t !== null && kc(t, a[1])) return a[0];
        if (((a = e()), ma)) {
            Pe(!0);
            try {
                e();
            } finally {
                Pe(!1);
            }
        }
        return ((l.memoizedState = [a, t]), a);
    }
    function Vc(e, t, l) {
        return l === void 0 || ((rl & 1073741824) !== 0 && (be & 261930) === 0)
            ? (e.memoizedState = t)
            : ((e.memoizedState = l), (e = id()), (fe.lanes |= e), (Ul |= e), l);
    }
    function nf(e, t, l, a) {
        return wt(l, t)
            ? l
            : qa.current !== null
              ? ((e = Vc(e, l, a)), wt(e, t) || ($e = !0), e)
              : (rl & 42) === 0 || ((rl & 1073741824) !== 0 && (be & 261930) === 0)
                ? (($e = !0), (e.memoizedState = l))
                : ((e = id()), (fe.lanes |= e), (Ul |= e), t);
    }
    function sf(e, t, l, a, n) {
        var i = L.p;
        L.p = i !== 0 && 8 > i ? i : 8;
        var s = b.T,
            o = {};
        ((b.T = o), Zc(e, !1, t, l));
        try {
            var m = n(),
                C = b.S;
            if ((C !== null && C(o, m), m !== null && typeof m == 'object' && typeof m.then == 'function')) {
                var z = Kh(m, a);
                Rn(e, t, z, Dt(e));
            } else Rn(e, t, a, Dt(e));
        } catch (R) {
            Rn(e, t, { then: function () {}, status: 'rejected', reason: R }, Dt());
        } finally {
            ((L.p = i), s !== null && o.types !== null && (s.types = o.types), (b.T = s));
        }
    }
    function Ph() {}
    function Xc(e, t, l, a) {
        if (e.tag !== 5) throw Error(r(476));
        var n = cf(e).queue;
        sf(
            e,
            n,
            t,
            k,
            l === null
                ? Ph
                : function () {
                      return (uf(e), l(a));
                  }
        );
    }
    function cf(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: k,
            baseState: k,
            baseQueue: null,
            queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: fl, lastRenderedState: k },
            next: null,
        };
        var l = {};
        return (
            (t.next = {
                memoizedState: l,
                baseState: l,
                baseQueue: null,
                queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: fl, lastRenderedState: l },
                next: null,
            }),
            (e.memoizedState = t),
            (e = e.alternate),
            e !== null && (e.memoizedState = t),
            t
        );
    }
    function uf(e) {
        var t = cf(e);
        (t.next === null && (t = e.alternate.memoizedState), Rn(e, t.next.queue, {}, Dt()));
    }
    function Qc() {
        return ct($n);
    }
    function of() {
        return Ke().memoizedState;
    }
    function rf() {
        return Ke().memoizedState;
    }
    function eg(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
                case 24:
                case 3:
                    var l = Dt();
                    e = Ml(l);
                    var a = kl(t, e, l);
                    (a !== null && (jt(a, t, l), zn(a, t, l)), (t = { cache: Sc() }), (e.payload = t));
                    return;
            }
            t = t.return;
        }
    }
    function tg(e, t, l) {
        var a = Dt();
        ((l = { lane: a, revertLane: 0, gesture: null, action: l, hasEagerState: !1, eagerState: null, next: null }),
            Qi(e) ? df(t, l) : ((l = oc(e, t, l, a)), l !== null && (jt(l, e, a), mf(l, t, a))));
    }
    function ff(e, t, l) {
        var a = Dt();
        Rn(e, t, l, a);
    }
    function Rn(e, t, l, a) {
        var n = { lane: a, revertLane: 0, gesture: null, action: l, hasEagerState: !1, eagerState: null, next: null };
        if (Qi(e)) df(t, n);
        else {
            var i = e.alternate;
            if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
                try {
                    var s = t.lastRenderedState,
                        o = i(s, l);
                    if (((n.hasEagerState = !0), (n.eagerState = o), wt(o, s))) return (Ti(e, t, n, 0), Le === null && Ni(), !1);
                } catch {
                } finally {
                }
            if (((l = oc(e, t, n, a)), l !== null)) return (jt(l, e, a), mf(l, t, a), !0);
        }
        return !1;
    }
    function Zc(e, t, l, a) {
        if (((a = { lane: 2, revertLane: Nu(), gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null }), Qi(e))) {
            if (t) throw Error(r(479));
        } else ((t = oc(e, l, a, 2)), t !== null && jt(t, e, 2));
    }
    function Qi(e) {
        var t = e.alternate;
        return e === fe || (t !== null && t === fe);
    }
    function df(e, t) {
        Ga = Hi = !0;
        var l = e.pending;
        (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (e.pending = t));
    }
    function mf(e, t, l) {
        if ((l & 4194048) !== 0) {
            var a = t.lanes;
            ((a &= e.pendingLanes), (l |= a), (t.lanes = l), po(e, l));
        }
    }
    var On = {
        readContext: ct,
        use: Gi,
        useCallback: Xe,
        useContext: Xe,
        useEffect: Xe,
        useImperativeHandle: Xe,
        useLayoutEffect: Xe,
        useInsertionEffect: Xe,
        useMemo: Xe,
        useReducer: Xe,
        useRef: Xe,
        useState: Xe,
        useDebugValue: Xe,
        useDeferredValue: Xe,
        useTransition: Xe,
        useSyncExternalStore: Xe,
        useId: Xe,
        useHostTransitionStatus: Xe,
        useFormState: Xe,
        useActionState: Xe,
        useOptimistic: Xe,
        useMemoCache: Xe,
        useCacheRefresh: Xe,
    };
    On.useEffectEvent = Xe;
    var hf = {
            readContext: ct,
            use: Gi,
            useCallback: function (e, t) {
                return ((vt().memoizedState = [e, t === void 0 ? null : t]), e);
            },
            useContext: ct,
            useEffect: $r,
            useImperativeHandle: function (e, t, l) {
                ((l = l != null ? l.concat([e]) : null), Vi(4194308, 4, ef.bind(null, t, e), l));
            },
            useLayoutEffect: function (e, t) {
                return Vi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
                Vi(4, 2, e, t);
            },
            useMemo: function (e, t) {
                var l = vt();
                t = t === void 0 ? null : t;
                var a = e();
                if (ma) {
                    Pe(!0);
                    try {
                        e();
                    } finally {
                        Pe(!1);
                    }
                }
                return ((l.memoizedState = [a, t]), a);
            },
            useReducer: function (e, t, l) {
                var a = vt();
                if (l !== void 0) {
                    var n = l(t);
                    if (ma) {
                        Pe(!0);
                        try {
                            l(t);
                        } finally {
                            Pe(!1);
                        }
                    }
                } else n = t;
                return (
                    (a.memoizedState = a.baseState = n),
                    (e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }),
                    (a.queue = e),
                    (e = e.dispatch = tg.bind(null, fe, e)),
                    [a.memoizedState, e]
                );
            },
            useRef: function (e) {
                var t = vt();
                return ((e = { current: e }), (t.memoizedState = e));
            },
            useState: function (e) {
                e = Bc(e);
                var t = e.queue,
                    l = ff.bind(null, fe, t);
                return ((t.dispatch = l), [e.memoizedState, l]);
            },
            useDebugValue: Yc,
            useDeferredValue: function (e, t) {
                var l = vt();
                return Vc(l, e, t);
            },
            useTransition: function () {
                var e = Bc(!1);
                return ((e = sf.bind(null, fe, e.queue, !0, !1)), (vt().memoizedState = e), [!1, e]);
            },
            useSyncExternalStore: function (e, t, l) {
                var a = fe,
                    n = vt();
                if (Ce) {
                    if (l === void 0) throw Error(r(407));
                    l = l();
                } else {
                    if (((l = t()), Le === null)) throw Error(r(349));
                    (be & 127) !== 0 || Or(a, t, l);
                }
                n.memoizedState = l;
                var i = { value: l, getSnapshot: t };
                return (
                    (n.queue = i),
                    $r(Ur.bind(null, a, i, e), [e]),
                    (a.flags |= 2048),
                    Va(9, { destroy: void 0 }, _r.bind(null, a, i, l, t), null),
                    l
                );
            },
            useId: function () {
                var e = vt(),
                    t = Le.identifierPrefix;
                if (Ce) {
                    var l = Pt,
                        a = It;
                    ((l = (a & ~(1 << (32 - gt(a) - 1))).toString(32) + l),
                        (t = '_' + t + 'R_' + l),
                        (l = Bi++),
                        0 < l && (t += 'H' + l.toString(32)),
                        (t += '_'));
                } else ((l = Jh++), (t = '_' + t + 'r_' + l.toString(32) + '_'));
                return (e.memoizedState = t);
            },
            useHostTransitionStatus: Qc,
            useFormState: Qr,
            useActionState: Qr,
            useOptimistic: function (e) {
                var t = vt();
                t.memoizedState = t.baseState = e;
                var l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
                return ((t.queue = l), (t = Zc.bind(null, fe, !0, l)), (l.dispatch = t), [e, t]);
            },
            useMemoCache: Uc,
            useCacheRefresh: function () {
                return (vt().memoizedState = eg.bind(null, fe));
            },
            useEffectEvent: function (e) {
                var t = vt(),
                    l = { impl: e };
                return (
                    (t.memoizedState = l),
                    function () {
                        if ((ke & 2) !== 0) throw Error(r(440));
                        return l.impl.apply(void 0, arguments);
                    }
                );
            },
        },
        Kc = {
            readContext: ct,
            use: Gi,
            useCallback: lf,
            useContext: ct,
            useEffect: Gc,
            useImperativeHandle: tf,
            useInsertionEffect: Ir,
            useLayoutEffect: Pr,
            useMemo: af,
            useReducer: Yi,
            useRef: Wr,
            useState: function () {
                return Yi(fl);
            },
            useDebugValue: Yc,
            useDeferredValue: function (e, t) {
                var l = Ke();
                return nf(l, Oe.memoizedState, e, t);
            },
            useTransition: function () {
                var e = Yi(fl)[0],
                    t = Ke().memoizedState;
                return [typeof e == 'boolean' ? e : Dn(e), t];
            },
            useSyncExternalStore: Rr,
            useId: of,
            useHostTransitionStatus: Qc,
            useFormState: Zr,
            useActionState: Zr,
            useOptimistic: function (e, t) {
                var l = Ke();
                return Br(l, Oe, e, t);
            },
            useMemoCache: Uc,
            useCacheRefresh: rf,
        };
    Kc.useEffectEvent = Fr;
    var gf = {
        readContext: ct,
        use: Gi,
        useCallback: lf,
        useContext: ct,
        useEffect: Gc,
        useImperativeHandle: tf,
        useInsertionEffect: Ir,
        useLayoutEffect: Pr,
        useMemo: af,
        useReducer: Hc,
        useRef: Wr,
        useState: function () {
            return Hc(fl);
        },
        useDebugValue: Yc,
        useDeferredValue: function (e, t) {
            var l = Ke();
            return Oe === null ? Vc(l, e, t) : nf(l, Oe.memoizedState, e, t);
        },
        useTransition: function () {
            var e = Hc(fl)[0],
                t = Ke().memoizedState;
            return [typeof e == 'boolean' ? e : Dn(e), t];
        },
        useSyncExternalStore: Rr,
        useId: of,
        useHostTransitionStatus: Qc,
        useFormState: Jr,
        useActionState: Jr,
        useOptimistic: function (e, t) {
            var l = Ke();
            return Oe !== null ? Br(l, Oe, e, t) : ((l.baseState = e), [e, l.queue.dispatch]);
        },
        useMemoCache: Uc,
        useCacheRefresh: rf,
    };
    gf.useEffectEvent = Fr;
    function Jc(e, t, l, a) {
        ((t = e.memoizedState),
            (l = l(a, t)),
            (l = l == null ? t : D({}, t, l)),
            (e.memoizedState = l),
            e.lanes === 0 && (e.updateQueue.baseState = l));
    }
    var Wc = {
        enqueueSetState: function (e, t, l) {
            e = e._reactInternals;
            var a = Dt(),
                n = Ml(a);
            ((n.payload = t), l != null && (n.callback = l), (t = kl(e, n, a)), t !== null && (jt(t, e, a), zn(t, e, a)));
        },
        enqueueReplaceState: function (e, t, l) {
            e = e._reactInternals;
            var a = Dt(),
                n = Ml(a);
            ((n.tag = 1), (n.payload = t), l != null && (n.callback = l), (t = kl(e, n, a)), t !== null && (jt(t, e, a), zn(t, e, a)));
        },
        enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var l = Dt(),
                a = Ml(l);
            ((a.tag = 2), t != null && (a.callback = t), (t = kl(e, a, l)), t !== null && (jt(t, e, l), zn(t, e, l)));
        },
    };
    function vf(e, t, l, a, n, i, s) {
        return (
            (e = e.stateNode),
            typeof e.shouldComponentUpdate == 'function'
                ? e.shouldComponentUpdate(a, i, s)
                : t.prototype && t.prototype.isPureReactComponent
                  ? !Sn(l, a) || !Sn(n, i)
                  : !0
        );
    }
    function pf(e, t, l, a) {
        ((e = t.state),
            typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(l, a),
            typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(l, a),
            t.state !== e && Wc.enqueueReplaceState(t, t.state, null));
    }
    function ha(e, t) {
        var l = t;
        if ('ref' in t) {
            l = {};
            for (var a in t) a !== 'ref' && (l[a] = t[a]);
        }
        if ((e = e.defaultProps)) {
            l === t && (l = D({}, l));
            for (var n in e) l[n] === void 0 && (l[n] = e[n]);
        }
        return l;
    }
    function yf(e) {
        ji(e);
    }
    function bf(e) {
        console.error(e);
    }
    function Sf(e) {
        ji(e);
    }
    function Zi(e, t) {
        try {
            var l = e.onUncaughtError;
            l(t.value, { componentStack: t.stack });
        } catch (a) {
            setTimeout(function () {
                throw a;
            });
        }
    }
    function xf(e, t, l) {
        try {
            var a = e.onCaughtError;
            a(l.value, { componentStack: l.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
        } catch (n) {
            setTimeout(function () {
                throw n;
            });
        }
    }
    function $c(e, t, l) {
        return (
            (l = Ml(l)),
            (l.tag = 3),
            (l.payload = { element: null }),
            (l.callback = function () {
                Zi(e, t);
            }),
            l
        );
    }
    function Cf(e) {
        return ((e = Ml(e)), (e.tag = 3), e);
    }
    function jf(e, t, l, a) {
        var n = l.type.getDerivedStateFromError;
        if (typeof n == 'function') {
            var i = a.value;
            ((e.payload = function () {
                return n(i);
            }),
                (e.callback = function () {
                    xf(t, l, a);
                }));
        }
        var s = l.stateNode;
        s !== null &&
            typeof s.componentDidCatch == 'function' &&
            (e.callback = function () {
                (xf(t, l, a), typeof n != 'function' && (Ll === null ? (Ll = new Set([this])) : Ll.add(this)));
                var o = a.stack;
                this.componentDidCatch(a.value, { componentStack: o !== null ? o : '' });
            });
    }
    function lg(e, t, l, a, n) {
        if (((l.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
            if (((t = l.alternate), t !== null && _a(t, l, n, !0), (l = zt.current), l !== null)) {
                switch (l.tag) {
                    case 31:
                    case 13:
                        return (
                            qt === null ? ns() : l.alternate === null && Qe === 0 && (Qe = 3),
                            (l.flags &= -257),
                            (l.flags |= 65536),
                            (l.lanes = n),
                            a === Ri
                                ? (l.flags |= 16384)
                                : ((t = l.updateQueue), t === null ? (l.updateQueue = new Set([a])) : t.add(a), xu(e, a, n)),
                            !1
                        );
                    case 22:
                        return (
                            (l.flags |= 65536),
                            a === Ri
                                ? (l.flags |= 16384)
                                : ((t = l.updateQueue),
                                  t === null
                                      ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }), (l.updateQueue = t))
                                      : ((l = t.retryQueue), l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                                  xu(e, a, n)),
                            !1
                        );
                }
                throw Error(r(435, l.tag));
            }
            return (xu(e, a, n), ns(), !1);
        }
        if (Ce)
            return (
                (t = zt.current),
                t !== null
                    ? ((t.flags & 65536) === 0 && (t.flags |= 256),
                      (t.flags |= 65536),
                      (t.lanes = n),
                      a !== gc && ((e = Error(r(422), { cause: a })), jn(Ut(e, l))))
                    : (a !== gc && ((t = Error(r(423), { cause: a })), jn(Ut(t, l))),
                      (e = e.current.alternate),
                      (e.flags |= 65536),
                      (n &= -n),
                      (e.lanes |= n),
                      (a = Ut(a, l)),
                      (n = $c(e.stateNode, a, n)),
                      wc(e, n),
                      Qe !== 4 && (Qe = 2)),
                !1
            );
        var i = Error(r(520), { cause: a });
        if (((i = Ut(i, l)), Yn === null ? (Yn = [i]) : Yn.push(i), Qe !== 4 && (Qe = 2), t === null)) return !0;
        ((a = Ut(a, l)), (l = t));
        do {
            switch (l.tag) {
                case 3:
                    return ((l.flags |= 65536), (e = n & -n), (l.lanes |= e), (e = $c(l.stateNode, a, e)), wc(l, e), !1);
                case 1:
                    if (
                        ((t = l.type),
                        (i = l.stateNode),
                        (l.flags & 128) === 0 &&
                            (typeof t.getDerivedStateFromError == 'function' ||
                                (i !== null && typeof i.componentDidCatch == 'function' && (Ll === null || !Ll.has(i)))))
                    )
                        return ((l.flags |= 65536), (n &= -n), (l.lanes |= n), (n = Cf(n)), jf(n, e, l, a), wc(l, n), !1);
            }
            l = l.return;
        } while (l !== null);
        return !1;
    }
    var Fc = Error(r(461)),
        $e = !1;
    function ut(e, t, l, a) {
        t.child = e === null ? wr(t, null, l, a) : da(t, e.child, l, a);
    }
    function Nf(e, t, l, a, n) {
        l = l.render;
        var i = t.ref;
        if ('ref' in a) {
            var s = {};
            for (var o in a) o !== 'ref' && (s[o] = a[o]);
        } else s = a;
        return (
            ua(t),
            (a = Dc(e, t, l, s, i, n)),
            (o = Rc()),
            e !== null && !$e ? (Oc(e, t, n), dl(e, t, n)) : (Ce && o && mc(t), (t.flags |= 1), ut(e, t, a, n), t.child)
        );
    }
    function Tf(e, t, l, a, n) {
        if (e === null) {
            var i = l.type;
            return typeof i == 'function' && !rc(i) && i.defaultProps === void 0 && l.compare === null
                ? ((t.tag = 15), (t.type = i), wf(e, t, i, a, n))
                : ((e = Ai(l.type, null, a, t, t.mode, n)), (e.ref = t.ref), (e.return = t), (t.child = e));
        }
        if (((i = e.child), !iu(e, n))) {
            var s = i.memoizedProps;
            if (((l = l.compare), (l = l !== null ? l : Sn), l(s, a) && e.ref === t.ref)) return dl(e, t, n);
        }
        return ((t.flags |= 1), (e = sl(i, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    function wf(e, t, l, a, n) {
        if (e !== null) {
            var i = e.memoizedProps;
            if (Sn(i, a) && e.ref === t.ref)
                if ((($e = !1), (t.pendingProps = a = i), iu(e, n))) (e.flags & 131072) !== 0 && ($e = !0);
                else return ((t.lanes = e.lanes), dl(e, t, n));
        }
        return Ic(e, t, l, a, n);
    }
    function Af(e, t, l, a) {
        var n = a.children,
            i = e !== null ? e.memoizedState : null;
        if (
            (e === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
            a.mode === 'hidden')
        ) {
            if ((t.flags & 128) !== 0) {
                if (((i = i !== null ? i.baseLanes | l : l), e !== null)) {
                    for (a = t.child = e.child, n = 0; a !== null; ) ((n = n | a.lanes | a.childLanes), (a = a.sibling));
                    a = n & ~i;
                } else ((a = 0), (t.child = null));
                return zf(e, t, i, l, a);
            }
            if ((l & 536870912) !== 0)
                ((t.memoizedState = { baseLanes: 0, cachePool: null }),
                    e !== null && ki(t, i !== null ? i.cachePool : null),
                    i !== null ? Er(t, i) : zc(),
                    Mr(t));
            else return ((a = t.lanes = 536870912), zf(e, t, i !== null ? i.baseLanes | l : l, l, a));
        } else i !== null ? (ki(t, i.cachePool), Er(t, i), Rl(), (t.memoizedState = null)) : (e !== null && ki(t, null), zc(), Rl());
        return (ut(e, t, n, l), t.child);
    }
    function _n(e, t) {
        return (
            (e !== null && e.tag === 22) ||
                t.stateNode !== null ||
                (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
            t.sibling
        );
    }
    function zf(e, t, l, a, n) {
        var i = Cc();
        return (
            (i = i === null ? null : { parent: Je._currentValue, pool: i }),
            (t.memoizedState = { baseLanes: l, cachePool: i }),
            e !== null && ki(t, null),
            zc(),
            Mr(t),
            e !== null && _a(e, t, a, !0),
            (t.childLanes = n),
            null
        );
    }
    function Ki(e, t) {
        return ((t = Wi({ mode: t.mode, children: t.children }, e.mode)), (t.ref = e.ref), (e.child = t), (t.return = e), t);
    }
    function Ef(e, t, l) {
        return (da(t, e.child, null, l), (e = Ki(t, t.pendingProps)), (e.flags |= 2), Et(t), (t.memoizedState = null), e);
    }
    function ag(e, t, l) {
        var a = t.pendingProps,
            n = (t.flags & 128) !== 0;
        if (((t.flags &= -129), e === null)) {
            if (Ce) {
                if (a.mode === 'hidden') return ((e = Ki(t, a)), (t.lanes = 536870912), _n(null, e));
                if (
                    (Mc(t),
                    (e = qe)
                        ? ((e = Gd(e, Bt)),
                          (e = e !== null && e.data === '&' ? e : null),
                          e !== null &&
                              ((t.memoizedState = {
                                  dehydrated: e,
                                  treeContext: Tl !== null ? { id: It, overflow: Pt } : null,
                                  retryLane: 536870912,
                                  hydrationErrors: null,
                              }),
                              (l = fr(e)),
                              (l.return = t),
                              (t.child = l),
                              (st = t),
                              (qe = null)))
                        : (e = null),
                    e === null)
                )
                    throw Al(t);
                return ((t.lanes = 536870912), null);
            }
            return Ki(t, a);
        }
        var i = e.memoizedState;
        if (i !== null) {
            var s = i.dehydrated;
            if ((Mc(t), n))
                if (t.flags & 256) ((t.flags &= -257), (t = Ef(e, t, l)));
                else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
                else throw Error(r(558));
            else if (($e || _a(e, t, l, !1), (n = (l & e.childLanes) !== 0), $e || n)) {
                if (((a = Le), a !== null && ((s = yo(a, l)), s !== 0 && s !== i.retryLane))) throw ((i.retryLane = s), na(e, s), jt(a, e, s), Fc);
                (ns(), (t = Ef(e, t, l)));
            } else
                ((e = i.treeContext),
                    (qe = Gt(s.nextSibling)),
                    (st = t),
                    (Ce = !0),
                    (wl = null),
                    (Bt = !1),
                    e !== null && hr(t, e),
                    (t = Ki(t, a)),
                    (t.flags |= 4096));
            return t;
        }
        return ((e = sl(e.child, { mode: a.mode, children: a.children })), (e.ref = t.ref), (t.child = e), (e.return = t), e);
    }
    function Ji(e, t) {
        var l = t.ref;
        if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof l != 'function' && typeof l != 'object') throw Error(r(284));
            (e === null || e.ref !== l) && (t.flags |= 4194816);
        }
    }
    function Ic(e, t, l, a, n) {
        return (
            ua(t),
            (l = Dc(e, t, l, a, void 0, n)),
            (a = Rc()),
            e !== null && !$e ? (Oc(e, t, n), dl(e, t, n)) : (Ce && a && mc(t), (t.flags |= 1), ut(e, t, l, n), t.child)
        );
    }
    function Mf(e, t, l, a, n, i) {
        return (
            ua(t),
            (t.updateQueue = null),
            (l = Dr(t, a, l, n)),
            kr(e),
            (a = Rc()),
            e !== null && !$e ? (Oc(e, t, i), dl(e, t, i)) : (Ce && a && mc(t), (t.flags |= 1), ut(e, t, l, i), t.child)
        );
    }
    function kf(e, t, l, a, n) {
        if ((ua(t), t.stateNode === null)) {
            var i = ka,
                s = l.contextType;
            (typeof s == 'object' && s !== null && (i = ct(s)),
                (i = new l(a, i)),
                (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
                (i.updater = Wc),
                (t.stateNode = i),
                (i._reactInternals = t),
                (i = t.stateNode),
                (i.props = a),
                (i.state = t.memoizedState),
                (i.refs = {}),
                Nc(t),
                (s = l.contextType),
                (i.context = typeof s == 'object' && s !== null ? ct(s) : ka),
                (i.state = t.memoizedState),
                (s = l.getDerivedStateFromProps),
                typeof s == 'function' && (Jc(t, l, s, a), (i.state = t.memoizedState)),
                typeof l.getDerivedStateFromProps == 'function' ||
                    typeof i.getSnapshotBeforeUpdate == 'function' ||
                    (typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
                    ((s = i.state),
                    typeof i.componentWillMount == 'function' && i.componentWillMount(),
                    typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
                    s !== i.state && Wc.enqueueReplaceState(i, i.state, null),
                    Mn(t, a, i, n),
                    En(),
                    (i.state = t.memoizedState)),
                typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
                (a = !0));
        } else if (e === null) {
            i = t.stateNode;
            var o = t.memoizedProps,
                m = ha(l, o);
            i.props = m;
            var C = i.context,
                z = l.contextType;
            ((s = ka), typeof z == 'object' && z !== null && (s = ct(z)));
            var R = l.getDerivedStateFromProps;
            ((z = typeof R == 'function' || typeof i.getSnapshotBeforeUpdate == 'function'),
                (o = t.pendingProps !== o),
                z ||
                    (typeof i.UNSAFE_componentWillReceiveProps != 'function' && typeof i.componentWillReceiveProps != 'function') ||
                    ((o || C !== s) && pf(t, i, a, s)),
                (El = !1));
            var j = t.memoizedState;
            ((i.state = j),
                Mn(t, a, i, n),
                En(),
                (C = t.memoizedState),
                o || j !== C || El
                    ? (typeof R == 'function' && (Jc(t, l, R, a), (C = t.memoizedState)),
                      (m = El || vf(t, l, m, a, j, C, s))
                          ? (z ||
                                (typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
                                (typeof i.componentWillMount == 'function' && i.componentWillMount(),
                                typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount()),
                            typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
                          : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (t.memoizedProps = a), (t.memoizedState = C)),
                      (i.props = a),
                      (i.state = C),
                      (i.context = s),
                      (a = m))
                    : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (a = !1)));
        } else {
            ((i = t.stateNode),
                Tc(e, t),
                (s = t.memoizedProps),
                (z = ha(l, s)),
                (i.props = z),
                (R = t.pendingProps),
                (j = i.context),
                (C = l.contextType),
                (m = ka),
                typeof C == 'object' && C !== null && (m = ct(C)),
                (o = l.getDerivedStateFromProps),
                (C = typeof o == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
                    (typeof i.UNSAFE_componentWillReceiveProps != 'function' && typeof i.componentWillReceiveProps != 'function') ||
                    ((s !== R || j !== m) && pf(t, i, a, m)),
                (El = !1),
                (j = t.memoizedState),
                (i.state = j),
                Mn(t, a, i, n),
                En());
            var w = t.memoizedState;
            s !== R || j !== w || El || (e !== null && e.dependencies !== null && Ei(e.dependencies))
                ? (typeof o == 'function' && (Jc(t, l, o, a), (w = t.memoizedState)),
                  (z = El || vf(t, l, z, a, j, w, m) || (e !== null && e.dependencies !== null && Ei(e.dependencies)))
                      ? (C ||
                            (typeof i.UNSAFE_componentWillUpdate != 'function' && typeof i.componentWillUpdate != 'function') ||
                            (typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(a, w, m),
                            typeof i.UNSAFE_componentWillUpdate == 'function' && i.UNSAFE_componentWillUpdate(a, w, m)),
                        typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
                        typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
                      : (typeof i.componentDidUpdate != 'function' || (s === e.memoizedProps && j === e.memoizedState) || (t.flags |= 4),
                        typeof i.getSnapshotBeforeUpdate != 'function' || (s === e.memoizedProps && j === e.memoizedState) || (t.flags |= 1024),
                        (t.memoizedProps = a),
                        (t.memoizedState = w)),
                  (i.props = a),
                  (i.state = w),
                  (i.context = m),
                  (a = z))
                : (typeof i.componentDidUpdate != 'function' || (s === e.memoizedProps && j === e.memoizedState) || (t.flags |= 4),
                  typeof i.getSnapshotBeforeUpdate != 'function' || (s === e.memoizedProps && j === e.memoizedState) || (t.flags |= 1024),
                  (a = !1));
        }
        return (
            (i = a),
            Ji(e, t),
            (a = (t.flags & 128) !== 0),
            i || a
                ? ((i = t.stateNode),
                  (l = a && typeof l.getDerivedStateFromError != 'function' ? null : i.render()),
                  (t.flags |= 1),
                  e !== null && a ? ((t.child = da(t, e.child, null, n)), (t.child = da(t, null, l, n))) : ut(e, t, l, n),
                  (t.memoizedState = i.state),
                  (e = t.child))
                : (e = dl(e, t, n)),
            e
        );
    }
    function Df(e, t, l, a) {
        return (sa(), (t.flags |= 256), ut(e, t, l, a), t.child);
    }
    var Pc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function eu(e) {
        return { baseLanes: e, cachePool: Sr() };
    }
    function tu(e, t, l) {
        return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= kt), e);
    }
    function Rf(e, t, l) {
        var a = t.pendingProps,
            n = !1,
            i = (t.flags & 128) !== 0,
            s;
        if (
            ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (Ze.current & 2) !== 0),
            s && ((n = !0), (t.flags &= -129)),
            (s = (t.flags & 32) !== 0),
            (t.flags &= -33),
            e === null)
        ) {
            if (Ce) {
                if (
                    (n ? Dl(t) : Rl(),
                    (e = qe)
                        ? ((e = Gd(e, Bt)),
                          (e = e !== null && e.data !== '&' ? e : null),
                          e !== null &&
                              ((t.memoizedState = {
                                  dehydrated: e,
                                  treeContext: Tl !== null ? { id: It, overflow: Pt } : null,
                                  retryLane: 536870912,
                                  hydrationErrors: null,
                              }),
                              (l = fr(e)),
                              (l.return = t),
                              (t.child = l),
                              (st = t),
                              (qe = null)))
                        : (e = null),
                    e === null)
                )
                    throw Al(t);
                return (Lu(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
            }
            var o = a.children;
            return (
                (a = a.fallback),
                n
                    ? (Rl(),
                      (n = t.mode),
                      (o = Wi({ mode: 'hidden', children: o }, n)),
                      (a = ia(a, n, l, null)),
                      (o.return = t),
                      (a.return = t),
                      (o.sibling = a),
                      (t.child = o),
                      (a = t.child),
                      (a.memoizedState = eu(l)),
                      (a.childLanes = tu(e, s, l)),
                      (t.memoizedState = Pc),
                      _n(null, a))
                    : (Dl(t), lu(t, o))
            );
        }
        var m = e.memoizedState;
        if (m !== null && ((o = m.dehydrated), o !== null)) {
            if (i)
                t.flags & 256
                    ? (Dl(t), (t.flags &= -257), (t = au(e, t, l)))
                    : t.memoizedState !== null
                      ? (Rl(), (t.child = e.child), (t.flags |= 128), (t = null))
                      : (Rl(),
                        (o = a.fallback),
                        (n = t.mode),
                        (a = Wi({ mode: 'visible', children: a.children }, n)),
                        (o = ia(o, n, l, null)),
                        (o.flags |= 2),
                        (a.return = t),
                        (o.return = t),
                        (a.sibling = o),
                        (t.child = a),
                        da(t, e.child, null, l),
                        (a = t.child),
                        (a.memoizedState = eu(l)),
                        (a.childLanes = tu(e, s, l)),
                        (t.memoizedState = Pc),
                        (t = _n(null, a)));
            else if ((Dl(t), Lu(o))) {
                if (((s = o.nextSibling && o.nextSibling.dataset), s)) var C = s.dgst;
                ((s = C), (a = Error(r(419))), (a.stack = ''), (a.digest = s), jn({ value: a, source: null, stack: null }), (t = au(e, t, l)));
            } else if (($e || _a(e, t, l, !1), (s = (l & e.childLanes) !== 0), $e || s)) {
                if (((s = Le), s !== null && ((a = yo(s, l)), a !== 0 && a !== m.retryLane))) throw ((m.retryLane = a), na(e, a), jt(s, e, a), Fc);
                (Uu(o) || ns(), (t = au(e, t, l)));
            } else
                Uu(o)
                    ? ((t.flags |= 192), (t.child = e.child), (t = null))
                    : ((e = m.treeContext),
                      (qe = Gt(o.nextSibling)),
                      (st = t),
                      (Ce = !0),
                      (wl = null),
                      (Bt = !1),
                      e !== null && hr(t, e),
                      (t = lu(t, a.children)),
                      (t.flags |= 4096));
            return t;
        }
        return n
            ? (Rl(),
              (o = a.fallback),
              (n = t.mode),
              (m = e.child),
              (C = m.sibling),
              (a = sl(m, { mode: 'hidden', children: a.children })),
              (a.subtreeFlags = m.subtreeFlags & 65011712),
              C !== null ? (o = sl(C, o)) : ((o = ia(o, n, l, null)), (o.flags |= 2)),
              (o.return = t),
              (a.return = t),
              (a.sibling = o),
              (t.child = a),
              _n(null, a),
              (a = t.child),
              (o = e.child.memoizedState),
              o === null
                  ? (o = eu(l))
                  : ((n = o.cachePool),
                    n !== null ? ((m = Je._currentValue), (n = n.parent !== m ? { parent: m, pool: m } : n)) : (n = Sr()),
                    (o = { baseLanes: o.baseLanes | l, cachePool: n })),
              (a.memoizedState = o),
              (a.childLanes = tu(e, s, l)),
              (t.memoizedState = Pc),
              _n(e.child, a))
            : (Dl(t),
              (l = e.child),
              (e = l.sibling),
              (l = sl(l, { mode: 'visible', children: a.children })),
              (l.return = t),
              (l.sibling = null),
              e !== null && ((s = t.deletions), s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
              (t.child = l),
              (t.memoizedState = null),
              l);
    }
    function lu(e, t) {
        return ((t = Wi({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
    }
    function Wi(e, t) {
        return ((e = At(22, e, null, t)), (e.lanes = 0), e);
    }
    function au(e, t, l) {
        return (da(t, e.child, null, l), (e = lu(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e);
    }
    function Of(e, t, l) {
        e.lanes |= t;
        var a = e.alternate;
        (a !== null && (a.lanes |= t), yc(e.return, t, l));
    }
    function nu(e, t, l, a, n, i) {
        var s = e.memoizedState;
        s === null
            ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: l, tailMode: n, treeForkCount: i })
            : ((s.isBackwards = t),
              (s.rendering = null),
              (s.renderingStartTime = 0),
              (s.last = a),
              (s.tail = l),
              (s.tailMode = n),
              (s.treeForkCount = i));
    }
    function _f(e, t, l) {
        var a = t.pendingProps,
            n = a.revealOrder,
            i = a.tail;
        a = a.children;
        var s = Ze.current,
            o = (s & 2) !== 0;
        if (
            (o ? ((s = (s & 1) | 2), (t.flags |= 128)) : (s &= 1),
            U(Ze, s),
            ut(e, t, a, l),
            (a = Ce ? Cn : 0),
            !o && e !== null && (e.flags & 128) !== 0)
        )
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Of(e, l, t);
                else if (e.tag === 19) Of(e, l, t);
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
        switch (n) {
            case 'forwards':
                for (l = t.child, n = null; l !== null; ) ((e = l.alternate), e !== null && Li(e) === null && (n = l), (l = l.sibling));
                ((l = n), l === null ? ((n = t.child), (t.child = null)) : ((n = l.sibling), (l.sibling = null)), nu(t, !1, n, l, i, a));
                break;
            case 'backwards':
            case 'unstable_legacy-backwards':
                for (l = null, n = t.child, t.child = null; n !== null; ) {
                    if (((e = n.alternate), e !== null && Li(e) === null)) {
                        t.child = n;
                        break;
                    }
                    ((e = n.sibling), (n.sibling = l), (l = n), (n = e));
                }
                nu(t, !0, l, null, i, a);
                break;
            case 'together':
                nu(t, !1, null, null, void 0, a);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function dl(e, t, l) {
        if ((e !== null && (t.dependencies = e.dependencies), (Ul |= t.lanes), (l & t.childLanes) === 0))
            if (e !== null) {
                if ((_a(e, t, l, !1), (l & t.childLanes) === 0)) return null;
            } else return null;
        if (e !== null && t.child !== e.child) throw Error(r(153));
        if (t.child !== null) {
            for (e = t.child, l = sl(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
                ((e = e.sibling), (l = l.sibling = sl(e, e.pendingProps)), (l.return = t));
            l.sibling = null;
        }
        return t.child;
    }
    function iu(e, t) {
        return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Ei(e)));
    }
    function ng(e, t, l) {
        switch (t.tag) {
            case 3:
                (Be(t, t.stateNode.containerInfo), zl(t, Je, e.memoizedState.cache), sa());
                break;
            case 27:
            case 5:
                nt(t);
                break;
            case 4:
                Be(t, t.stateNode.containerInfo);
                break;
            case 10:
                zl(t, t.type, t.memoizedProps.value);
                break;
            case 31:
                if (t.memoizedState !== null) return ((t.flags |= 128), Mc(t), null);
                break;
            case 13:
                var a = t.memoizedState;
                if (a !== null)
                    return a.dehydrated !== null
                        ? (Dl(t), (t.flags |= 128), null)
                        : (l & t.child.childLanes) !== 0
                          ? Rf(e, t, l)
                          : (Dl(t), (e = dl(e, t, l)), e !== null ? e.sibling : null);
                Dl(t);
                break;
            case 19:
                var n = (e.flags & 128) !== 0;
                if (((a = (l & t.childLanes) !== 0), a || (_a(e, t, l, !1), (a = (l & t.childLanes) !== 0)), n)) {
                    if (a) return _f(e, t, l);
                    t.flags |= 128;
                }
                if (((n = t.memoizedState), n !== null && ((n.rendering = null), (n.tail = null), (n.lastEffect = null)), U(Ze, Ze.current), a))
                    break;
                return null;
            case 22:
                return ((t.lanes = 0), Af(e, t, l, t.pendingProps));
            case 24:
                zl(t, Je, e.memoizedState.cache);
        }
        return dl(e, t, l);
    }
    function Uf(e, t, l) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps) $e = !0;
            else {
                if (!iu(e, l) && (t.flags & 128) === 0) return (($e = !1), ng(e, t, l));
                $e = (e.flags & 131072) !== 0;
            }
        else (($e = !1), Ce && (t.flags & 1048576) !== 0 && mr(t, Cn, t.index));
        switch (((t.lanes = 0), t.tag)) {
            case 16:
                e: {
                    var a = t.pendingProps;
                    if (((e = ra(t.elementType)), (t.type = e), typeof e == 'function'))
                        rc(e) ? ((a = ha(e, a)), (t.tag = 1), (t = kf(null, t, e, a, l))) : ((t.tag = 0), (t = Ic(null, t, e, a, l)));
                    else {
                        if (e != null) {
                            var n = e.$$typeof;
                            if (n === ye) {
                                ((t.tag = 11), (t = Nf(null, t, e, a, l)));
                                break e;
                            } else if (n === G) {
                                ((t.tag = 14), (t = Tf(null, t, e, a, l)));
                                break e;
                            }
                        }
                        throw ((t = Te(e) || e), Error(r(306, t, '')));
                    }
                }
                return t;
            case 0:
                return Ic(e, t, t.type, t.pendingProps, l);
            case 1:
                return ((a = t.type), (n = ha(a, t.pendingProps)), kf(e, t, a, n, l));
            case 3:
                e: {
                    if ((Be(t, t.stateNode.containerInfo), e === null)) throw Error(r(387));
                    a = t.pendingProps;
                    var i = t.memoizedState;
                    ((n = i.element), Tc(e, t), Mn(t, a, null, l));
                    var s = t.memoizedState;
                    if (((a = s.cache), zl(t, Je, a), a !== i.cache && bc(t, [Je], l, !0), En(), (a = s.element), i.isDehydrated))
                        if (
                            ((i = { element: a, isDehydrated: !1, cache: s.cache }),
                            (t.updateQueue.baseState = i),
                            (t.memoizedState = i),
                            t.flags & 256)
                        ) {
                            t = Df(e, t, a, l);
                            break e;
                        } else if (a !== n) {
                            ((n = Ut(Error(r(424)), t)), jn(n), (t = Df(e, t, a, l)));
                            break e;
                        } else {
                            switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
                            }
                            for (qe = Gt(e.firstChild), st = t, Ce = !0, wl = null, Bt = !0, l = wr(t, null, a, l), t.child = l; l; )
                                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
                        }
                    else {
                        if ((sa(), a === n)) {
                            t = dl(e, t, l);
                            break e;
                        }
                        ut(e, t, a, l);
                    }
                    t = t.child;
                }
                return t;
            case 26:
                return (
                    Ji(e, t),
                    e === null
                        ? (l = Kd(t.type, null, t.pendingProps, null))
                            ? (t.memoizedState = l)
                            : Ce ||
                              ((l = t.type),
                              (e = t.pendingProps),
                              (a = fs(ce.current).createElement(l)),
                              (a[it] = t),
                              (a[pt] = e),
                              ot(a, l, e),
                              lt(a),
                              (t.stateNode = a))
                        : (t.memoizedState = Kd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
                    null
                );
            case 27:
                return (
                    nt(t),
                    e === null &&
                        Ce &&
                        ((a = t.stateNode = Xd(t.type, t.pendingProps, ce.current)),
                        (st = t),
                        (Bt = !0),
                        (n = qe),
                        Gl(t.type) ? ((Hu = n), (qe = Gt(a.firstChild))) : (qe = n)),
                    ut(e, t, t.pendingProps.children, l),
                    Ji(e, t),
                    e === null && (t.flags |= 4194304),
                    t.child
                );
            case 5:
                return (
                    e === null &&
                        Ce &&
                        ((n = a = qe) &&
                            ((a = Og(a, t.type, t.pendingProps, Bt)),
                            a !== null ? ((t.stateNode = a), (st = t), (qe = Gt(a.firstChild)), (Bt = !1), (n = !0)) : (n = !1)),
                        n || Al(t)),
                    nt(t),
                    (n = t.type),
                    (i = t.pendingProps),
                    (s = e !== null ? e.memoizedProps : null),
                    (a = i.children),
                    Ru(n, i) ? (a = null) : s !== null && Ru(n, s) && (t.flags |= 32),
                    t.memoizedState !== null && ((n = Dc(e, t, Wh, null, null, l)), ($n._currentValue = n)),
                    Ji(e, t),
                    ut(e, t, a, l),
                    t.child
                );
            case 6:
                return (
                    e === null &&
                        Ce &&
                        ((e = l = qe) &&
                            ((l = _g(l, t.pendingProps, Bt)), l !== null ? ((t.stateNode = l), (st = t), (qe = null), (e = !0)) : (e = !1)),
                        e || Al(t)),
                    null
                );
            case 13:
                return Rf(e, t, l);
            case 4:
                return (Be(t, t.stateNode.containerInfo), (a = t.pendingProps), e === null ? (t.child = da(t, null, a, l)) : ut(e, t, a, l), t.child);
            case 11:
                return Nf(e, t, t.type, t.pendingProps, l);
            case 7:
                return (ut(e, t, t.pendingProps, l), t.child);
            case 8:
                return (ut(e, t, t.pendingProps.children, l), t.child);
            case 12:
                return (ut(e, t, t.pendingProps.children, l), t.child);
            case 10:
                return ((a = t.pendingProps), zl(t, t.type, a.value), ut(e, t, a.children, l), t.child);
            case 9:
                return (
                    (n = t.type._context),
                    (a = t.pendingProps.children),
                    ua(t),
                    (n = ct(n)),
                    (a = a(n)),
                    (t.flags |= 1),
                    ut(e, t, a, l),
                    t.child
                );
            case 14:
                return Tf(e, t, t.type, t.pendingProps, l);
            case 15:
                return wf(e, t, t.type, t.pendingProps, l);
            case 19:
                return _f(e, t, l);
            case 31:
                return ag(e, t, l);
            case 22:
                return Af(e, t, l, t.pendingProps);
            case 24:
                return (
                    ua(t),
                    (a = ct(Je)),
                    e === null
                        ? ((n = Cc()),
                          n === null && ((n = Le), (i = Sc()), (n.pooledCache = i), i.refCount++, i !== null && (n.pooledCacheLanes |= l), (n = i)),
                          (t.memoizedState = { parent: a, cache: n }),
                          Nc(t),
                          zl(t, Je, n))
                        : ((e.lanes & l) !== 0 && (Tc(e, t), Mn(t, null, null, l), En()),
                          (n = e.memoizedState),
                          (i = t.memoizedState),
                          n.parent !== a
                              ? ((n = { parent: a, cache: a }),
                                (t.memoizedState = n),
                                t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n),
                                zl(t, Je, a))
                              : ((a = i.cache), zl(t, Je, a), a !== n.cache && bc(t, [Je], l, !0))),
                    ut(e, t, t.pendingProps.children, l),
                    t.child
                );
            case 29:
                throw t.pendingProps;
        }
        throw Error(r(156, t.tag));
    }
    function ml(e) {
        e.flags |= 4;
    }
    function su(e, t, l, a, n) {
        if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
            if (((e.flags |= 16777216), (n & 335544128) === n))
                if (e.stateNode.complete) e.flags |= 8192;
                else if (od()) e.flags |= 8192;
                else throw ((fa = Ri), jc);
        } else e.flags &= -16777217;
    }
    function Lf(e, t) {
        if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
        else if (((e.flags |= 16777216), !Id(t)))
            if (od()) e.flags |= 8192;
            else throw ((fa = Ri), jc);
    }
    function $i(e, t) {
        (t !== null && (e.flags |= 4), e.flags & 16384 && ((t = e.tag !== 22 ? go() : 536870912), (e.lanes |= t), (Ka |= t)));
    }
    function Un(e, t) {
        if (!Ce)
            switch (e.tailMode) {
                case 'hidden':
                    t = e.tail;
                    for (var l = null; t !== null; ) (t.alternate !== null && (l = t), (t = t.sibling));
                    l === null ? (e.tail = null) : (l.sibling = null);
                    break;
                case 'collapsed':
                    l = e.tail;
                    for (var a = null; l !== null; ) (l.alternate !== null && (a = l), (l = l.sibling));
                    a === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (a.sibling = null);
            }
    }
    function Ge(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            l = 0,
            a = 0;
        if (t)
            for (var n = e.child; n !== null; )
                ((l |= n.lanes | n.childLanes), (a |= n.subtreeFlags & 65011712), (a |= n.flags & 65011712), (n.return = e), (n = n.sibling));
        else for (n = e.child; n !== null; ) ((l |= n.lanes | n.childLanes), (a |= n.subtreeFlags), (a |= n.flags), (n.return = e), (n = n.sibling));
        return ((e.subtreeFlags |= a), (e.childLanes = l), t);
    }
    function ig(e, t, l) {
        var a = t.pendingProps;
        switch ((hc(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return (Ge(t), null);
            case 1:
                return (Ge(t), null);
            case 3:
                return (
                    (l = t.stateNode),
                    (a = null),
                    e !== null && (a = e.memoizedState.cache),
                    t.memoizedState.cache !== a && (t.flags |= 2048),
                    ol(Je),
                    we(),
                    l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
                    (e === null || e.child === null) &&
                        (Oa(t) ? ml(t) : e === null || (e.memoizedState.isDehydrated && (t.flags & 256) === 0) || ((t.flags |= 1024), vc())),
                    Ge(t),
                    null
                );
            case 26:
                var n = t.type,
                    i = t.memoizedState;
                return (
                    e === null
                        ? (ml(t), i !== null ? (Ge(t), Lf(t, i)) : (Ge(t), su(t, n, null, a, l)))
                        : i
                          ? i !== e.memoizedState
                              ? (ml(t), Ge(t), Lf(t, i))
                              : (Ge(t), (t.flags &= -16777217))
                          : ((e = e.memoizedProps), e !== a && ml(t), Ge(t), su(t, n, e, a, l)),
                    null
                );
            case 27:
                if ((dt(t), (l = ce.current), (n = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== a && ml(t);
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(r(166));
                        return (Ge(t), null);
                    }
                    ((e = q.current), Oa(t) ? gr(t) : ((e = Xd(n, a, l)), (t.stateNode = e), ml(t)));
                }
                return (Ge(t), null);
            case 5:
                if ((dt(t), (n = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== a && ml(t);
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(r(166));
                        return (Ge(t), null);
                    }
                    if (((i = q.current), Oa(t))) gr(t);
                    else {
                        var s = fs(ce.current);
                        switch (i) {
                            case 1:
                                i = s.createElementNS('http://www.w3.org/2000/svg', n);
                                break;
                            case 2:
                                i = s.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                                break;
                            default:
                                switch (n) {
                                    case 'svg':
                                        i = s.createElementNS('http://www.w3.org/2000/svg', n);
                                        break;
                                    case 'math':
                                        i = s.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                                        break;
                                    case 'script':
                                        ((i = s.createElement('div')), (i.innerHTML = '<script><\/script>'), (i = i.removeChild(i.firstChild)));
                                        break;
                                    case 'select':
                                        ((i = typeof a.is == 'string' ? s.createElement('select', { is: a.is }) : s.createElement('select')),
                                            a.multiple ? (i.multiple = !0) : a.size && (i.size = a.size));
                                        break;
                                    default:
                                        i = typeof a.is == 'string' ? s.createElement(n, { is: a.is }) : s.createElement(n);
                                }
                        }
                        ((i[it] = t), (i[pt] = a));
                        e: for (s = t.child; s !== null; ) {
                            if (s.tag === 5 || s.tag === 6) i.appendChild(s.stateNode);
                            else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                                ((s.child.return = s), (s = s.child));
                                continue;
                            }
                            if (s === t) break e;
                            for (; s.sibling === null; ) {
                                if (s.return === null || s.return === t) break e;
                                s = s.return;
                            }
                            ((s.sibling.return = s.return), (s = s.sibling));
                        }
                        t.stateNode = i;
                        e: switch ((ot(i, n, a), n)) {
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
                        a && ml(t);
                    }
                }
                return (Ge(t), su(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l), null);
            case 6:
                if (e && t.stateNode != null) e.memoizedProps !== a && ml(t);
                else {
                    if (typeof a != 'string' && t.stateNode === null) throw Error(r(166));
                    if (((e = ce.current), Oa(t))) {
                        if (((e = t.stateNode), (l = t.memoizedProps), (a = null), (n = st), n !== null))
                            switch (n.tag) {
                                case 27:
                                case 5:
                                    a = n.memoizedProps;
                            }
                        ((e[it] = t),
                            (e = !!(e.nodeValue === l || (a !== null && a.suppressHydrationWarning === !0) || Rd(e.nodeValue, l))),
                            e || Al(t, !0));
                    } else ((e = fs(e).createTextNode(a)), (e[it] = t), (t.stateNode = e));
                }
                return (Ge(t), null);
            case 31:
                if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
                    if (((a = Oa(t)), l !== null)) {
                        if (e === null) {
                            if (!a) throw Error(r(318));
                            if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(r(557));
                            e[it] = t;
                        } else (sa(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
                        (Ge(t), (e = !1));
                    } else ((l = vc()), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), (e = !0));
                    if (!e) return t.flags & 256 ? (Et(t), t) : (Et(t), null);
                    if ((t.flags & 128) !== 0) throw Error(r(558));
                }
                return (Ge(t), null);
            case 13:
                if (((a = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
                    if (((n = Oa(t)), a !== null && a.dehydrated !== null)) {
                        if (e === null) {
                            if (!n) throw Error(r(318));
                            if (((n = t.memoizedState), (n = n !== null ? n.dehydrated : null), !n)) throw Error(r(317));
                            n[it] = t;
                        } else (sa(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
                        (Ge(t), (n = !1));
                    } else ((n = vc()), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), (n = !0));
                    if (!n) return t.flags & 256 ? (Et(t), t) : (Et(t), null);
                }
                return (
                    Et(t),
                    (t.flags & 128) !== 0
                        ? ((t.lanes = l), t)
                        : ((l = a !== null),
                          (e = e !== null && e.memoizedState !== null),
                          l &&
                              ((a = t.child),
                              (n = null),
                              a.alternate !== null &&
                                  a.alternate.memoizedState !== null &&
                                  a.alternate.memoizedState.cachePool !== null &&
                                  (n = a.alternate.memoizedState.cachePool.pool),
                              (i = null),
                              a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool),
                              i !== n && (a.flags |= 2048)),
                          l !== e && l && (t.child.flags |= 8192),
                          $i(t, t.updateQueue),
                          Ge(t),
                          null)
                );
            case 4:
                return (we(), e === null && zu(t.stateNode.containerInfo), Ge(t), null);
            case 10:
                return (ol(t.type), Ge(t), null);
            case 19:
                if ((E(Ze), (a = t.memoizedState), a === null)) return (Ge(t), null);
                if (((n = (t.flags & 128) !== 0), (i = a.rendering), i === null))
                    if (n) Un(a, !1);
                    else {
                        if (Qe !== 0 || (e !== null && (e.flags & 128) !== 0))
                            for (e = t.child; e !== null; ) {
                                if (((i = Li(e)), i !== null)) {
                                    for (
                                        t.flags |= 128,
                                            Un(a, !1),
                                            e = i.updateQueue,
                                            t.updateQueue = e,
                                            $i(t, e),
                                            t.subtreeFlags = 0,
                                            e = l,
                                            l = t.child;
                                        l !== null;

                                    )
                                        (rr(l, e), (l = l.sibling));
                                    return (U(Ze, (Ze.current & 1) | 2), Ce && cl(t, a.treeForkCount), t.child);
                                }
                                e = e.sibling;
                            }
                        a.tail !== null && ht() > ts && ((t.flags |= 128), (n = !0), Un(a, !1), (t.lanes = 4194304));
                    }
                else {
                    if (!n)
                        if (((e = Li(i)), e !== null)) {
                            if (
                                ((t.flags |= 128),
                                (n = !0),
                                (e = e.updateQueue),
                                (t.updateQueue = e),
                                $i(t, e),
                                Un(a, !0),
                                a.tail === null && a.tailMode === 'hidden' && !i.alternate && !Ce)
                            )
                                return (Ge(t), null);
                        } else
                            2 * ht() - a.renderingStartTime > ts && l !== 536870912 && ((t.flags |= 128), (n = !0), Un(a, !1), (t.lanes = 4194304));
                    a.isBackwards
                        ? ((i.sibling = t.child), (t.child = i))
                        : ((e = a.last), e !== null ? (e.sibling = i) : (t.child = i), (a.last = i));
                }
                return a.tail !== null
                    ? ((e = a.tail),
                      (a.rendering = e),
                      (a.tail = e.sibling),
                      (a.renderingStartTime = ht()),
                      (e.sibling = null),
                      (l = Ze.current),
                      U(Ze, n ? (l & 1) | 2 : l & 1),
                      Ce && cl(t, a.treeForkCount),
                      e)
                    : (Ge(t), null);
            case 22:
            case 23:
                return (
                    Et(t),
                    Ec(),
                    (a = t.memoizedState !== null),
                    e !== null ? (e.memoizedState !== null) !== a && (t.flags |= 8192) : a && (t.flags |= 8192),
                    a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ge(t),
                    (l = t.updateQueue),
                    l !== null && $i(t, l.retryQueue),
                    (l = null),
                    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
                    (a = null),
                    t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
                    a !== l && (t.flags |= 2048),
                    e !== null && E(oa),
                    null
                );
            case 24:
                return ((l = null), e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), ol(Je), Ge(t), null);
            case 25:
                return null;
            case 30:
                return null;
        }
        throw Error(r(156, t.tag));
    }
    function sg(e, t) {
        switch ((hc(t), t.tag)) {
            case 1:
                return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 3:
                return (ol(Je), we(), (e = t.flags), (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 26:
            case 27:
            case 5:
                return (dt(t), null);
            case 31:
                if (t.memoizedState !== null) {
                    if ((Et(t), t.alternate === null)) throw Error(r(340));
                    sa();
                }
                return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 13:
                if ((Et(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                    if (t.alternate === null) throw Error(r(340));
                    sa();
                }
                return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 19:
                return (E(Ze), null);
            case 4:
                return (we(), null);
            case 10:
                return (ol(t.type), null);
            case 22:
            case 23:
                return (Et(t), Ec(), e !== null && E(oa), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 24:
                return (ol(Je), null);
            case 25:
                return null;
            default:
                return null;
        }
    }
    function Hf(e, t) {
        switch ((hc(t), t.tag)) {
            case 3:
                (ol(Je), we());
                break;
            case 26:
            case 27:
            case 5:
                dt(t);
                break;
            case 4:
                we();
                break;
            case 31:
                t.memoizedState !== null && Et(t);
                break;
            case 13:
                Et(t);
                break;
            case 19:
                E(Ze);
                break;
            case 10:
                ol(t.type);
                break;
            case 22:
            case 23:
                (Et(t), Ec(), e !== null && E(oa));
                break;
            case 24:
                ol(Je);
        }
    }
    function Ln(e, t) {
        try {
            var l = t.updateQueue,
                a = l !== null ? l.lastEffect : null;
            if (a !== null) {
                var n = a.next;
                l = n;
                do {
                    if ((l.tag & e) === e) {
                        a = void 0;
                        var i = l.create,
                            s = l.inst;
                        ((a = i()), (s.destroy = a));
                    }
                    l = l.next;
                } while (l !== n);
            }
        } catch (o) {
            Re(t, t.return, o);
        }
    }
    function Ol(e, t, l) {
        try {
            var a = t.updateQueue,
                n = a !== null ? a.lastEffect : null;
            if (n !== null) {
                var i = n.next;
                a = i;
                do {
                    if ((a.tag & e) === e) {
                        var s = a.inst,
                            o = s.destroy;
                        if (o !== void 0) {
                            ((s.destroy = void 0), (n = t));
                            var m = l,
                                C = o;
                            try {
                                C();
                            } catch (z) {
                                Re(n, m, z);
                            }
                        }
                    }
                    a = a.next;
                } while (a !== i);
            }
        } catch (z) {
            Re(t, t.return, z);
        }
    }
    function Bf(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var l = e.stateNode;
            try {
                zr(t, l);
            } catch (a) {
                Re(e, e.return, a);
            }
        }
    }
    function qf(e, t, l) {
        ((l.props = ha(e.type, e.memoizedProps)), (l.state = e.memoizedState));
        try {
            l.componentWillUnmount();
        } catch (a) {
            Re(e, t, a);
        }
    }
    function Hn(e, t) {
        try {
            var l = e.ref;
            if (l !== null) {
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
                typeof l == 'function' ? (e.refCleanup = l(a)) : (l.current = a);
            }
        } catch (n) {
            Re(e, t, n);
        }
    }
    function el(e, t) {
        var l = e.ref,
            a = e.refCleanup;
        if (l !== null)
            if (typeof a == 'function')
                try {
                    a();
                } catch (n) {
                    Re(e, t, n);
                } finally {
                    ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
                }
            else if (typeof l == 'function')
                try {
                    l(null);
                } catch (n) {
                    Re(e, t, n);
                }
            else l.current = null;
    }
    function Gf(e) {
        var t = e.type,
            l = e.memoizedProps,
            a = e.stateNode;
        try {
            e: switch (t) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                    l.autoFocus && a.focus();
                    break e;
                case 'img':
                    l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
            }
        } catch (n) {
            Re(e, e.return, n);
        }
    }
    function cu(e, t, l) {
        try {
            var a = e.stateNode;
            (zg(a, e.type, l, t), (a[pt] = t));
        } catch (n) {
            Re(e, e.return, n);
        }
    }
    function Yf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Gl(e.type)) || e.tag === 4;
    }
    function uu(e) {
        e: for (;;) {
            for (; e.sibling === null; ) {
                if (e.return === null || Yf(e.return)) return null;
                e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if ((e.tag === 27 && Gl(e.type)) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                ((e.child.return = e), (e = e.child));
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function ou(e, t, l) {
        var a = e.tag;
        if (a === 5 || a === 6)
            ((e = e.stateNode),
                t
                    ? (l.nodeType === 9 ? l.body : l.nodeName === 'HTML' ? l.ownerDocument.body : l).insertBefore(e, t)
                    : ((t = l.nodeType === 9 ? l.body : l.nodeName === 'HTML' ? l.ownerDocument.body : l),
                      t.appendChild(e),
                      (l = l._reactRootContainer),
                      l != null || t.onclick !== null || (t.onclick = nl)));
        else if (a !== 4 && (a === 27 && Gl(e.type) && ((l = e.stateNode), (t = null)), (e = e.child), e !== null))
            for (ou(e, t, l), e = e.sibling; e !== null; ) (ou(e, t, l), (e = e.sibling));
    }
    function Fi(e, t, l) {
        var a = e.tag;
        if (a === 5 || a === 6) ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e));
        else if (a !== 4 && (a === 27 && Gl(e.type) && (l = e.stateNode), (e = e.child), e !== null))
            for (Fi(e, t, l), e = e.sibling; e !== null; ) (Fi(e, t, l), (e = e.sibling));
    }
    function Vf(e) {
        var t = e.stateNode,
            l = e.memoizedProps;
        try {
            for (var a = e.type, n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
            (ot(t, a, l), (t[it] = e), (t[pt] = l));
        } catch (i) {
            Re(e, e.return, i);
        }
    }
    var hl = !1,
        Fe = !1,
        ru = !1,
        Xf = typeof WeakSet == 'function' ? WeakSet : Set,
        at = null;
    function cg(e, t) {
        if (((e = e.containerInfo), (ku = ys), (e = tr(e)), ac(e))) {
            if ('selectionStart' in e) var l = { start: e.selectionStart, end: e.selectionEnd };
            else
                e: {
                    l = ((l = e.ownerDocument) && l.defaultView) || window;
                    var a = l.getSelection && l.getSelection();
                    if (a && a.rangeCount !== 0) {
                        l = a.anchorNode;
                        var n = a.anchorOffset,
                            i = a.focusNode;
                        a = a.focusOffset;
                        try {
                            (l.nodeType, i.nodeType);
                        } catch {
                            l = null;
                            break e;
                        }
                        var s = 0,
                            o = -1,
                            m = -1,
                            C = 0,
                            z = 0,
                            R = e,
                            j = null;
                        t: for (;;) {
                            for (
                                var w;
                                R !== l || (n !== 0 && R.nodeType !== 3) || (o = s + n),
                                    R !== i || (a !== 0 && R.nodeType !== 3) || (m = s + a),
                                    R.nodeType === 3 && (s += R.nodeValue.length),
                                    (w = R.firstChild) !== null;

                            )
                                ((j = R), (R = w));
                            for (;;) {
                                if (R === e) break t;
                                if ((j === l && ++C === n && (o = s), j === i && ++z === a && (m = s), (w = R.nextSibling) !== null)) break;
                                ((R = j), (j = R.parentNode));
                            }
                            R = w;
                        }
                        l = o === -1 || m === -1 ? null : { start: o, end: m };
                    } else l = null;
                }
            l = l || { start: 0, end: 0 };
        } else l = null;
        for (Du = { focusedElem: e, selectionRange: l }, ys = !1, at = t; at !== null; )
            if (((t = at), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) ((e.return = t), (at = e));
            else
                for (; at !== null; ) {
                    switch (((t = at), (i = t.alternate), (e = t.flags), t.tag)) {
                        case 0:
                            if ((e & 4) !== 0 && ((e = t.updateQueue), (e = e !== null ? e.events : null), e !== null))
                                for (l = 0; l < e.length; l++) ((n = e[l]), (n.ref.impl = n.nextImpl));
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((e & 1024) !== 0 && i !== null) {
                                ((e = void 0), (l = t), (n = i.memoizedProps), (i = i.memoizedState), (a = l.stateNode));
                                try {
                                    var K = ha(l.type, n);
                                    ((e = a.getSnapshotBeforeUpdate(K, i)), (a.__reactInternalSnapshotBeforeUpdate = e));
                                } catch (ie) {
                                    Re(l, l.return, ie);
                                }
                            }
                            break;
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)) _u(e);
                                else if (l === 1)
                                    switch (e.nodeName) {
                                        case 'HEAD':
                                        case 'HTML':
                                        case 'BODY':
                                            _u(e);
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
                            if ((e & 1024) !== 0) throw Error(r(163));
                    }
                    if (((e = t.sibling), e !== null)) {
                        ((e.return = t.return), (at = e));
                        break;
                    }
                    at = t.return;
                }
    }
    function Qf(e, t, l) {
        var a = l.flags;
        switch (l.tag) {
            case 0:
            case 11:
            case 15:
                (vl(e, l), a & 4 && Ln(5, l));
                break;
            case 1:
                if ((vl(e, l), a & 4))
                    if (((e = l.stateNode), t === null))
                        try {
                            e.componentDidMount();
                        } catch (s) {
                            Re(l, l.return, s);
                        }
                    else {
                        var n = ha(l.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (s) {
                            Re(l, l.return, s);
                        }
                    }
                (a & 64 && Bf(l), a & 512 && Hn(l, l.return));
                break;
            case 3:
                if ((vl(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
                    if (((t = null), l.child !== null))
                        switch (l.child.tag) {
                            case 27:
                            case 5:
                                t = l.child.stateNode;
                                break;
                            case 1:
                                t = l.child.stateNode;
                        }
                    try {
                        zr(e, t);
                    } catch (s) {
                        Re(l, l.return, s);
                    }
                }
                break;
            case 27:
                t === null && a & 4 && Vf(l);
            case 26:
            case 5:
                (vl(e, l), t === null && a & 4 && Gf(l), a & 512 && Hn(l, l.return));
                break;
            case 12:
                vl(e, l);
                break;
            case 31:
                (vl(e, l), a & 4 && Jf(e, l));
                break;
            case 13:
                (vl(e, l),
                    a & 4 && Wf(e, l),
                    a & 64 && ((e = l.memoizedState), e !== null && ((e = e.dehydrated), e !== null && ((l = vg.bind(null, l)), Ug(e, l)))));
                break;
            case 22:
                if (((a = l.memoizedState !== null || hl), !a)) {
                    ((t = (t !== null && t.memoizedState !== null) || Fe), (n = hl));
                    var i = Fe;
                    ((hl = a), (Fe = t) && !i ? pl(e, l, (l.subtreeFlags & 8772) !== 0) : vl(e, l), (hl = n), (Fe = i));
                }
                break;
            case 30:
                break;
            default:
                vl(e, l);
        }
    }
    function Zf(e) {
        var t = e.alternate;
        (t !== null && ((e.alternate = null), Zf(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            e.tag === 5 && ((t = e.stateNode), t !== null && qs(t)),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null));
    }
    var Ve = null,
        bt = !1;
    function gl(e, t, l) {
        for (l = l.child; l !== null; ) (Kf(e, t, l), (l = l.sibling));
    }
    function Kf(e, t, l) {
        if (Ye && typeof Ye.onCommitFiberUnmount == 'function')
            try {
                Ye.onCommitFiberUnmount(Z, l);
            } catch {}
        switch (l.tag) {
            case 26:
                (Fe || el(l, t),
                    gl(e, t, l),
                    l.memoizedState ? l.memoizedState.count-- : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
                break;
            case 27:
                Fe || el(l, t);
                var a = Ve,
                    n = bt;
                (Gl(l.type) && ((Ve = l.stateNode), (bt = !1)), gl(e, t, l), Kn(l.stateNode), (Ve = a), (bt = n));
                break;
            case 5:
                Fe || el(l, t);
            case 6:
                if (((a = Ve), (n = bt), (Ve = null), gl(e, t, l), (Ve = a), (bt = n), Ve !== null))
                    if (bt)
                        try {
                            (Ve.nodeType === 9 ? Ve.body : Ve.nodeName === 'HTML' ? Ve.ownerDocument.body : Ve).removeChild(l.stateNode);
                        } catch (i) {
                            Re(l, t, i);
                        }
                    else
                        try {
                            Ve.removeChild(l.stateNode);
                        } catch (i) {
                            Re(l, t, i);
                        }
                break;
            case 18:
                Ve !== null &&
                    (bt
                        ? ((e = Ve), Bd(e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e, l.stateNode), tn(e))
                        : Bd(Ve, l.stateNode));
                break;
            case 4:
                ((a = Ve), (n = bt), (Ve = l.stateNode.containerInfo), (bt = !0), gl(e, t, l), (Ve = a), (bt = n));
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                (Ol(2, l, t), Fe || Ol(4, l, t), gl(e, t, l));
                break;
            case 1:
                (Fe || (el(l, t), (a = l.stateNode), typeof a.componentWillUnmount == 'function' && qf(l, t, a)), gl(e, t, l));
                break;
            case 21:
                gl(e, t, l);
                break;
            case 22:
                ((Fe = (a = Fe) || l.memoizedState !== null), gl(e, t, l), (Fe = a));
                break;
            default:
                gl(e, t, l);
        }
    }
    function Jf(e, t) {
        if (t.memoizedState === null && ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))) {
            e = e.dehydrated;
            try {
                tn(e);
            } catch (l) {
                Re(t, t.return, l);
            }
        }
    }
    function Wf(e, t) {
        if (t.memoizedState === null && ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null))))
            try {
                tn(e);
            } catch (l) {
                Re(t, t.return, l);
            }
    }
    function ug(e) {
        switch (e.tag) {
            case 31:
            case 13:
            case 19:
                var t = e.stateNode;
                return (t === null && (t = e.stateNode = new Xf()), t);
            case 22:
                return ((e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new Xf()), t);
            default:
                throw Error(r(435, e.tag));
        }
    }
    function Ii(e, t) {
        var l = ug(e);
        t.forEach(function (a) {
            if (!l.has(a)) {
                l.add(a);
                var n = pg.bind(null, e, a);
                a.then(n, n);
            }
        });
    }
    function St(e, t) {
        var l = t.deletions;
        if (l !== null)
            for (var a = 0; a < l.length; a++) {
                var n = l[a],
                    i = e,
                    s = t,
                    o = s;
                e: for (; o !== null; ) {
                    switch (o.tag) {
                        case 27:
                            if (Gl(o.type)) {
                                ((Ve = o.stateNode), (bt = !1));
                                break e;
                            }
                            break;
                        case 5:
                            ((Ve = o.stateNode), (bt = !1));
                            break e;
                        case 3:
                        case 4:
                            ((Ve = o.stateNode.containerInfo), (bt = !0));
                            break e;
                    }
                    o = o.return;
                }
                if (Ve === null) throw Error(r(160));
                (Kf(i, s, n), (Ve = null), (bt = !1), (i = n.alternate), i !== null && (i.return = null), (n.return = null));
            }
        if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) ($f(t, e), (t = t.sibling));
    }
    var Qt = null;
    function $f(e, t) {
        var l = e.alternate,
            a = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                (St(t, e), xt(e), a & 4 && (Ol(3, e, e.return), Ln(3, e), Ol(5, e, e.return)));
                break;
            case 1:
                (St(t, e),
                    xt(e),
                    a & 512 && (Fe || l === null || el(l, l.return)),
                    a & 64 &&
                        hl &&
                        ((e = e.updateQueue),
                        e !== null &&
                            ((a = e.callbacks),
                            a !== null && ((l = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
                break;
            case 26:
                var n = Qt;
                if ((St(t, e), xt(e), a & 512 && (Fe || l === null || el(l, l.return)), a & 4)) {
                    var i = l !== null ? l.memoizedState : null;
                    if (((a = e.memoizedState), l === null))
                        if (a === null)
                            if (e.stateNode === null) {
                                e: {
                                    ((a = e.type), (l = e.memoizedProps), (n = n.ownerDocument || n));
                                    t: switch (a) {
                                        case 'title':
                                            ((i = n.getElementsByTagName('title')[0]),
                                                (!i ||
                                                    i[fn] ||
                                                    i[it] ||
                                                    i.namespaceURI === 'http://www.w3.org/2000/svg' ||
                                                    i.hasAttribute('itemprop')) &&
                                                    ((i = n.createElement(a)), n.head.insertBefore(i, n.querySelector('head > title'))),
                                                ot(i, a, l),
                                                (i[it] = e),
                                                lt(i),
                                                (a = i));
                                            break e;
                                        case 'link':
                                            var s = $d('link', 'href', n).get(a + (l.href || ''));
                                            if (s) {
                                                for (var o = 0; o < s.length; o++)
                                                    if (
                                                        ((i = s[o]),
                                                        i.getAttribute('href') === (l.href == null || l.href === '' ? null : l.href) &&
                                                            i.getAttribute('rel') === (l.rel == null ? null : l.rel) &&
                                                            i.getAttribute('title') === (l.title == null ? null : l.title) &&
                                                            i.getAttribute('crossorigin') === (l.crossOrigin == null ? null : l.crossOrigin))
                                                    ) {
                                                        s.splice(o, 1);
                                                        break t;
                                                    }
                                            }
                                            ((i = n.createElement(a)), ot(i, a, l), n.head.appendChild(i));
                                            break;
                                        case 'meta':
                                            if ((s = $d('meta', 'content', n).get(a + (l.content || '')))) {
                                                for (o = 0; o < s.length; o++)
                                                    if (
                                                        ((i = s[o]),
                                                        i.getAttribute('content') === (l.content == null ? null : '' + l.content) &&
                                                            i.getAttribute('name') === (l.name == null ? null : l.name) &&
                                                            i.getAttribute('property') === (l.property == null ? null : l.property) &&
                                                            i.getAttribute('http-equiv') === (l.httpEquiv == null ? null : l.httpEquiv) &&
                                                            i.getAttribute('charset') === (l.charSet == null ? null : l.charSet))
                                                    ) {
                                                        s.splice(o, 1);
                                                        break t;
                                                    }
                                            }
                                            ((i = n.createElement(a)), ot(i, a, l), n.head.appendChild(i));
                                            break;
                                        default:
                                            throw Error(r(468, a));
                                    }
                                    ((i[it] = e), lt(i), (a = i));
                                }
                                e.stateNode = a;
                            } else Fd(n, e.type, e.stateNode);
                        else e.stateNode = Wd(n, a, e.memoizedProps);
                    else
                        i !== a
                            ? (i === null ? l.stateNode !== null && ((l = l.stateNode), l.parentNode.removeChild(l)) : i.count--,
                              a === null ? Fd(n, e.type, e.stateNode) : Wd(n, a, e.memoizedProps))
                            : a === null && e.stateNode !== null && cu(e, e.memoizedProps, l.memoizedProps);
                }
                break;
            case 27:
                (St(t, e), xt(e), a & 512 && (Fe || l === null || el(l, l.return)), l !== null && a & 4 && cu(e, e.memoizedProps, l.memoizedProps));
                break;
            case 5:
                if ((St(t, e), xt(e), a & 512 && (Fe || l === null || el(l, l.return)), e.flags & 32)) {
                    n = e.stateNode;
                    try {
                        Na(n, '');
                    } catch (K) {
                        Re(e, e.return, K);
                    }
                }
                (a & 4 && e.stateNode != null && ((n = e.memoizedProps), cu(e, n, l !== null ? l.memoizedProps : n)), a & 1024 && (ru = !0));
                break;
            case 6:
                if ((St(t, e), xt(e), a & 4)) {
                    if (e.stateNode === null) throw Error(r(162));
                    ((a = e.memoizedProps), (l = e.stateNode));
                    try {
                        l.nodeValue = a;
                    } catch (K) {
                        Re(e, e.return, K);
                    }
                }
                break;
            case 3:
                if (
                    ((hs = null),
                    (n = Qt),
                    (Qt = ds(t.containerInfo)),
                    St(t, e),
                    (Qt = n),
                    xt(e),
                    a & 4 && l !== null && l.memoizedState.isDehydrated)
                )
                    try {
                        tn(t.containerInfo);
                    } catch (K) {
                        Re(e, e.return, K);
                    }
                ru && ((ru = !1), Ff(e));
                break;
            case 4:
                ((a = Qt), (Qt = ds(e.stateNode.containerInfo)), St(t, e), xt(e), (Qt = a));
                break;
            case 12:
                (St(t, e), xt(e));
                break;
            case 31:
                (St(t, e), xt(e), a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Ii(e, a))));
                break;
            case 13:
                (St(t, e),
                    xt(e),
                    e.child.flags & 8192 && (e.memoizedState !== null) != (l !== null && l.memoizedState !== null) && (es = ht()),
                    a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Ii(e, a))));
                break;
            case 22:
                n = e.memoizedState !== null;
                var m = l !== null && l.memoizedState !== null,
                    C = hl,
                    z = Fe;
                if (((hl = C || n), (Fe = z || m), St(t, e), (Fe = z), (hl = C), xt(e), a & 8192))
                    e: for (
                        t = e.stateNode,
                            t._visibility = n ? t._visibility & -2 : t._visibility | 1,
                            n && (l === null || m || hl || Fe || ga(e)),
                            l = null,
                            t = e;
                        ;

                    ) {
                        if (t.tag === 5 || t.tag === 26) {
                            if (l === null) {
                                m = l = t;
                                try {
                                    if (((i = m.stateNode), n))
                                        ((s = i.style),
                                            typeof s.setProperty == 'function'
                                                ? s.setProperty('display', 'none', 'important')
                                                : (s.display = 'none'));
                                    else {
                                        o = m.stateNode;
                                        var R = m.memoizedProps.style,
                                            j = R != null && R.hasOwnProperty('display') ? R.display : null;
                                        o.style.display = j == null || typeof j == 'boolean' ? '' : ('' + j).trim();
                                    }
                                } catch (K) {
                                    Re(m, m.return, K);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (l === null) {
                                m = t;
                                try {
                                    m.stateNode.nodeValue = n ? '' : m.memoizedProps;
                                } catch (K) {
                                    Re(m, m.return, K);
                                }
                            }
                        } else if (t.tag === 18) {
                            if (l === null) {
                                m = t;
                                try {
                                    var w = m.stateNode;
                                    n ? qd(w, !0) : qd(m.stateNode, !1);
                                } catch (K) {
                                    Re(m, m.return, K);
                                }
                            }
                        } else if (((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) && t.child !== null) {
                            ((t.child.return = t), (t = t.child));
                            continue;
                        }
                        if (t === e) break e;
                        for (; t.sibling === null; ) {
                            if (t.return === null || t.return === e) break e;
                            (l === t && (l = null), (t = t.return));
                        }
                        (l === t && (l = null), (t.sibling.return = t.return), (t = t.sibling));
                    }
                a & 4 && ((a = e.updateQueue), a !== null && ((l = a.retryQueue), l !== null && ((a.retryQueue = null), Ii(e, l))));
                break;
            case 19:
                (St(t, e), xt(e), a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Ii(e, a))));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                (St(t, e), xt(e));
        }
    }
    function xt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var l, a = e.return; a !== null; ) {
                    if (Yf(a)) {
                        l = a;
                        break;
                    }
                    a = a.return;
                }
                if (l == null) throw Error(r(160));
                switch (l.tag) {
                    case 27:
                        var n = l.stateNode,
                            i = uu(e);
                        Fi(e, i, n);
                        break;
                    case 5:
                        var s = l.stateNode;
                        l.flags & 32 && (Na(s, ''), (l.flags &= -33));
                        var o = uu(e);
                        Fi(e, o, s);
                        break;
                    case 3:
                    case 4:
                        var m = l.stateNode.containerInfo,
                            C = uu(e);
                        ou(e, C, m);
                        break;
                    default:
                        throw Error(r(161));
                }
            } catch (z) {
                Re(e, e.return, z);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function Ff(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                (Ff(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
            }
    }
    function vl(e, t) {
        if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) (Qf(e, t.alternate, t), (t = t.sibling));
    }
    function ga(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    (Ol(4, t, t.return), ga(t));
                    break;
                case 1:
                    el(t, t.return);
                    var l = t.stateNode;
                    (typeof l.componentWillUnmount == 'function' && qf(t, t.return, l), ga(t));
                    break;
                case 27:
                    Kn(t.stateNode);
                case 26:
                case 5:
                    (el(t, t.return), ga(t));
                    break;
                case 22:
                    t.memoizedState === null && ga(t);
                    break;
                case 30:
                    ga(t);
                    break;
                default:
                    ga(t);
            }
            e = e.sibling;
        }
    }
    function pl(e, t, l) {
        for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
            var a = t.alternate,
                n = e,
                i = t,
                s = i.flags;
            switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    (pl(n, i, l), Ln(4, i));
                    break;
                case 1:
                    if ((pl(n, i, l), (a = i), (n = a.stateNode), typeof n.componentDidMount == 'function'))
                        try {
                            n.componentDidMount();
                        } catch (C) {
                            Re(a, a.return, C);
                        }
                    if (((a = i), (n = a.updateQueue), n !== null)) {
                        var o = a.stateNode;
                        try {
                            var m = n.shared.hiddenCallbacks;
                            if (m !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++) Ar(m[n], o);
                        } catch (C) {
                            Re(a, a.return, C);
                        }
                    }
                    (l && s & 64 && Bf(i), Hn(i, i.return));
                    break;
                case 27:
                    Vf(i);
                case 26:
                case 5:
                    (pl(n, i, l), l && a === null && s & 4 && Gf(i), Hn(i, i.return));
                    break;
                case 12:
                    pl(n, i, l);
                    break;
                case 31:
                    (pl(n, i, l), l && s & 4 && Jf(n, i));
                    break;
                case 13:
                    (pl(n, i, l), l && s & 4 && Wf(n, i));
                    break;
                case 22:
                    (i.memoizedState === null && pl(n, i, l), Hn(i, i.return));
                    break;
                case 30:
                    break;
                default:
                    pl(n, i, l);
            }
            t = t.sibling;
        }
    }
    function fu(e, t) {
        var l = null;
        (e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
            (e = null),
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
            e !== l && (e != null && e.refCount++, l != null && Nn(l)));
    }
    function du(e, t) {
        ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Nn(e)));
    }
    function Zt(e, t, l, a) {
        if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (If(e, t, l, a), (t = t.sibling));
    }
    function If(e, t, l, a) {
        var n = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                (Zt(e, t, l, a), n & 2048 && Ln(9, t));
                break;
            case 1:
                Zt(e, t, l, a);
                break;
            case 3:
                (Zt(e, t, l, a),
                    n & 2048 &&
                        ((e = null),
                        t.alternate !== null && (e = t.alternate.memoizedState.cache),
                        (t = t.memoizedState.cache),
                        t !== e && (t.refCount++, e != null && Nn(e))));
                break;
            case 12:
                if (n & 2048) {
                    (Zt(e, t, l, a), (e = t.stateNode));
                    try {
                        var i = t.memoizedProps,
                            s = i.id,
                            o = i.onPostCommit;
                        typeof o == 'function' && o(s, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
                    } catch (m) {
                        Re(t, t.return, m);
                    }
                } else Zt(e, t, l, a);
                break;
            case 31:
                Zt(e, t, l, a);
                break;
            case 13:
                Zt(e, t, l, a);
                break;
            case 23:
                break;
            case 22:
                ((i = t.stateNode),
                    (s = t.alternate),
                    t.memoizedState !== null
                        ? i._visibility & 2
                            ? Zt(e, t, l, a)
                            : Bn(e, t)
                        : i._visibility & 2
                          ? Zt(e, t, l, a)
                          : ((i._visibility |= 2), Xa(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)),
                    n & 2048 && fu(s, t));
                break;
            case 24:
                (Zt(e, t, l, a), n & 2048 && du(t.alternate, t));
                break;
            default:
                Zt(e, t, l, a);
        }
    }
    function Xa(e, t, l, a, n) {
        for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
            var i = e,
                s = t,
                o = l,
                m = a,
                C = s.flags;
            switch (s.tag) {
                case 0:
                case 11:
                case 15:
                    (Xa(i, s, o, m, n), Ln(8, s));
                    break;
                case 23:
                    break;
                case 22:
                    var z = s.stateNode;
                    (s.memoizedState !== null ? (z._visibility & 2 ? Xa(i, s, o, m, n) : Bn(i, s)) : ((z._visibility |= 2), Xa(i, s, o, m, n)),
                        n && C & 2048 && fu(s.alternate, s));
                    break;
                case 24:
                    (Xa(i, s, o, m, n), n && C & 2048 && du(s.alternate, s));
                    break;
                default:
                    Xa(i, s, o, m, n);
            }
            t = t.sibling;
        }
    }
    function Bn(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var l = e,
                    a = t,
                    n = a.flags;
                switch (a.tag) {
                    case 22:
                        (Bn(l, a), n & 2048 && fu(a.alternate, a));
                        break;
                    case 24:
                        (Bn(l, a), n & 2048 && du(a.alternate, a));
                        break;
                    default:
                        Bn(l, a);
                }
                t = t.sibling;
            }
    }
    var qn = 8192;
    function Qa(e, t, l) {
        if (e.subtreeFlags & qn) for (e = e.child; e !== null; ) (Pf(e, t, l), (e = e.sibling));
    }
    function Pf(e, t, l) {
        switch (e.tag) {
            case 26:
                (Qa(e, t, l), e.flags & qn && e.memoizedState !== null && Jg(l, Qt, e.memoizedState, e.memoizedProps));
                break;
            case 5:
                Qa(e, t, l);
                break;
            case 3:
            case 4:
                var a = Qt;
                ((Qt = ds(e.stateNode.containerInfo)), Qa(e, t, l), (Qt = a));
                break;
            case 22:
                e.memoizedState === null &&
                    ((a = e.alternate), a !== null && a.memoizedState !== null ? ((a = qn), (qn = 16777216), Qa(e, t, l), (qn = a)) : Qa(e, t, l));
                break;
            default:
                Qa(e, t, l);
        }
    }
    function ed(e) {
        var t = e.alternate;
        if (t !== null && ((e = t.child), e !== null)) {
            t.child = null;
            do ((t = e.sibling), (e.sibling = null), (e = t));
            while (e !== null);
        }
    }
    function Gn(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var a = t[l];
                    ((at = a), ld(a, e));
                }
            ed(e);
        }
        if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (td(e), (e = e.sibling));
    }
    function td(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                (Gn(e), e.flags & 2048 && Ol(9, e, e.return));
                break;
            case 3:
                Gn(e);
                break;
            case 12:
                Gn(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? ((t._visibility &= -3), Pi(e)) : Gn(e);
                break;
            default:
                Gn(e);
        }
    }
    function Pi(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var a = t[l];
                    ((at = a), ld(a, e));
                }
            ed(e);
        }
        for (e = e.child; e !== null; ) {
            switch (((t = e), t.tag)) {
                case 0:
                case 11:
                case 15:
                    (Ol(8, t, t.return), Pi(t));
                    break;
                case 22:
                    ((l = t.stateNode), l._visibility & 2 && ((l._visibility &= -3), Pi(t)));
                    break;
                default:
                    Pi(t);
            }
            e = e.sibling;
        }
    }
    function ld(e, t) {
        for (; at !== null; ) {
            var l = at;
            switch (l.tag) {
                case 0:
                case 11:
                case 15:
                    Ol(8, l, t);
                    break;
                case 23:
                case 22:
                    if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                        var a = l.memoizedState.cachePool.pool;
                        a != null && a.refCount++;
                    }
                    break;
                case 24:
                    Nn(l.memoizedState.cache);
            }
            if (((a = l.child), a !== null)) ((a.return = l), (at = a));
            else
                e: for (l = e; at !== null; ) {
                    a = at;
                    var n = a.sibling,
                        i = a.return;
                    if ((Zf(a), a === l)) {
                        at = null;
                        break e;
                    }
                    if (n !== null) {
                        ((n.return = i), (at = n));
                        break e;
                    }
                    at = i;
                }
        }
    }
    var og = {
            getCacheForType: function (e) {
                var t = ct(Je),
                    l = t.data.get(e);
                return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
            },
            cacheSignal: function () {
                return ct(Je).controller.signal;
            },
        },
        rg = typeof WeakMap == 'function' ? WeakMap : Map,
        ke = 0,
        Le = null,
        he = null,
        be = 0,
        De = 0,
        Mt = null,
        _l = !1,
        Za = !1,
        mu = !1,
        yl = 0,
        Qe = 0,
        Ul = 0,
        va = 0,
        hu = 0,
        kt = 0,
        Ka = 0,
        Yn = null,
        Ct = null,
        gu = !1,
        es = 0,
        ad = 0,
        ts = 1 / 0,
        ls = null,
        Ll = null,
        et = 0,
        Hl = null,
        Ja = null,
        bl = 0,
        vu = 0,
        pu = null,
        nd = null,
        Vn = 0,
        yu = null;
    function Dt() {
        return (ke & 2) !== 0 && be !== 0 ? be & -be : b.T !== null ? Nu() : bo();
    }
    function id() {
        if (kt === 0)
            if ((be & 536870912) === 0 || Ce) {
                var e = ri;
                ((ri <<= 1), (ri & 3932160) === 0 && (ri = 262144), (kt = e));
            } else kt = 536870912;
        return ((e = zt.current), e !== null && (e.flags |= 32), kt);
    }
    function jt(e, t, l) {
        (((e === Le && (De === 2 || De === 9)) || e.cancelPendingCommit !== null) && (Wa(e, 0), Bl(e, be, kt, !1)),
            rn(e, l),
            ((ke & 2) === 0 || e !== Le) && (e === Le && ((ke & 2) === 0 && (va |= l), Qe === 4 && Bl(e, be, kt, !1)), tl(e)));
    }
    function sd(e, t, l) {
        if ((ke & 6) !== 0) throw Error(r(327));
        var a = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || on(e, t),
            n = a ? mg(e, t) : Su(e, t, !0),
            i = a;
        do {
            if (n === 0) {
                Za && !a && Bl(e, t, 0, !1);
                break;
            } else {
                if (((l = e.current.alternate), i && !fg(l))) {
                    ((n = Su(e, t, !1)), (i = !1));
                    continue;
                }
                if (n === 2) {
                    if (((i = t), e.errorRecoveryDisabledLanes & i)) var s = 0;
                    else ((s = e.pendingLanes & -536870913), (s = s !== 0 ? s : s & 536870912 ? 536870912 : 0));
                    if (s !== 0) {
                        t = s;
                        e: {
                            var o = e;
                            n = Yn;
                            var m = o.current.memoizedState.isDehydrated;
                            if ((m && (Wa(o, s).flags |= 256), (s = Su(o, s, !1)), s !== 2)) {
                                if (mu && !m) {
                                    ((o.errorRecoveryDisabledLanes |= i), (va |= i), (n = 4));
                                    break e;
                                }
                                ((i = Ct), (Ct = n), i !== null && (Ct === null ? (Ct = i) : Ct.push.apply(Ct, i)));
                            }
                            n = s;
                        }
                        if (((i = !1), n !== 2)) continue;
                    }
                }
                if (n === 1) {
                    (Wa(e, 0), Bl(e, t, 0, !0));
                    break;
                }
                e: {
                    switch (((a = e), (i = n), i)) {
                        case 0:
                        case 1:
                            throw Error(r(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            Bl(a, t, kt, !_l);
                            break e;
                        case 2:
                            Ct = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(r(329));
                    }
                    if ((t & 62914560) === t && ((n = es + 300 - ht()), 10 < n)) {
                        if ((Bl(a, t, kt, !_l), di(a, 0, !0) !== 0)) break e;
                        ((bl = t), (a.timeoutHandle = Ld(cd.bind(null, a, l, Ct, ls, gu, t, kt, va, Ka, _l, i, 'Throttled', -0, 0), n)));
                        break e;
                    }
                    cd(a, l, Ct, ls, gu, t, kt, va, Ka, _l, i, null, -0, 0);
                }
            }
            break;
        } while (!0);
        tl(e);
    }
    function cd(e, t, l, a, n, i, s, o, m, C, z, R, j, w) {
        if (((e.timeoutHandle = -1), (R = t.subtreeFlags), R & 8192 || (R & 16785408) === 16785408)) {
            ((R = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: nl,
            }),
                Pf(t, i, R));
            var K = (i & 62914560) === i ? es - ht() : (i & 4194048) === i ? ad - ht() : 0;
            if (((K = Wg(R, K)), K !== null)) {
                ((bl = i), (e.cancelPendingCommit = K(gd.bind(null, e, t, i, l, a, n, s, o, m, z, R, null, j, w))), Bl(e, i, s, !C));
                return;
            }
        }
        gd(e, t, i, l, a, n, s, o, m);
    }
    function fg(e) {
        for (var t = e; ; ) {
            var l = t.tag;
            if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null)))
                for (var a = 0; a < l.length; a++) {
                    var n = l[a],
                        i = n.getSnapshot;
                    n = n.value;
                    try {
                        if (!wt(i(), n)) return !1;
                    } catch {
                        return !1;
                    }
                }
            if (((l = t.child), t.subtreeFlags & 16384 && l !== null)) ((l.return = t), (t = l));
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
    function Bl(e, t, l, a) {
        ((t &= ~hu), (t &= ~va), (e.suspendedLanes |= t), (e.pingedLanes &= ~t), a && (e.warmLanes |= t), (a = e.expirationTimes));
        for (var n = t; 0 < n; ) {
            var i = 31 - gt(n),
                s = 1 << i;
            ((a[i] = -1), (n &= ~s));
        }
        l !== 0 && vo(e, l, t);
    }
    function as() {
        return (ke & 6) === 0 ? (Xn(0), !1) : !0;
    }
    function bu() {
        if (he !== null) {
            if (De === 0) var e = he.return;
            else ((e = he), (ul = ca = null), _c(e), (Ba = null), (wn = 0), (e = he));
            for (; e !== null; ) (Hf(e.alternate, e), (e = e.return));
            he = null;
        }
    }
    function Wa(e, t) {
        var l = e.timeoutHandle;
        (l !== -1 && ((e.timeoutHandle = -1), kg(l)),
            (l = e.cancelPendingCommit),
            l !== null && ((e.cancelPendingCommit = null), l()),
            (bl = 0),
            bu(),
            (Le = e),
            (he = l = sl(e.current, null)),
            (be = t),
            (De = 0),
            (Mt = null),
            (_l = !1),
            (Za = on(e, t)),
            (mu = !1),
            (Ka = kt = hu = va = Ul = Qe = 0),
            (Ct = Yn = null),
            (gu = !1),
            (t & 8) !== 0 && (t |= t & 32));
        var a = e.entangledLanes;
        if (a !== 0)
            for (e = e.entanglements, a &= t; 0 < a; ) {
                var n = 31 - gt(a),
                    i = 1 << n;
                ((t |= e[n]), (a &= ~i));
            }
        return ((yl = t), Ni(), l);
    }
    function ud(e, t) {
        ((fe = null),
            (b.H = On),
            t === Ha || t === Di
                ? ((t = jr()), (De = 3))
                : t === jc
                  ? ((t = jr()), (De = 4))
                  : (De = t === Fc ? 8 : t !== null && typeof t == 'object' && typeof t.then == 'function' ? 6 : 1),
            (Mt = t),
            he === null && ((Qe = 1), Zi(e, Ut(t, e.current))));
    }
    function od() {
        var e = zt.current;
        return e === null ? !0 : (be & 4194048) === be ? qt === null : (be & 62914560) === be || (be & 536870912) !== 0 ? e === qt : !1;
    }
    function rd() {
        var e = b.H;
        return ((b.H = On), e === null ? On : e);
    }
    function fd() {
        var e = b.A;
        return ((b.A = og), e);
    }
    function ns() {
        ((Qe = 4),
            _l || ((be & 4194048) !== be && zt.current !== null) || (Za = !0),
            ((Ul & 134217727) === 0 && (va & 134217727) === 0) || Le === null || Bl(Le, be, kt, !1));
    }
    function Su(e, t, l) {
        var a = ke;
        ke |= 2;
        var n = rd(),
            i = fd();
        ((Le !== e || be !== t) && ((ls = null), Wa(e, t)), (t = !1));
        var s = Qe;
        e: do
            try {
                if (De !== 0 && he !== null) {
                    var o = he,
                        m = Mt;
                    switch (De) {
                        case 8:
                            (bu(), (s = 6));
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            zt.current === null && (t = !0);
                            var C = De;
                            if (((De = 0), (Mt = null), $a(e, o, m, C), l && Za)) {
                                s = 0;
                                break e;
                            }
                            break;
                        default:
                            ((C = De), (De = 0), (Mt = null), $a(e, o, m, C));
                    }
                }
                (dg(), (s = Qe));
                break;
            } catch (z) {
                ud(e, z);
            }
        while (!0);
        return (t && e.shellSuspendCounter++, (ul = ca = null), (ke = a), (b.H = n), (b.A = i), he === null && ((Le = null), (be = 0), Ni()), s);
    }
    function dg() {
        for (; he !== null; ) dd(he);
    }
    function mg(e, t) {
        var l = ke;
        ke |= 2;
        var a = rd(),
            n = fd();
        Le !== e || be !== t ? ((ls = null), (ts = ht() + 500), Wa(e, t)) : (Za = on(e, t));
        e: do
            try {
                if (De !== 0 && he !== null) {
                    t = he;
                    var i = Mt;
                    t: switch (De) {
                        case 1:
                            ((De = 0), (Mt = null), $a(e, t, i, 1));
                            break;
                        case 2:
                        case 9:
                            if (xr(i)) {
                                ((De = 0), (Mt = null), md(t));
                                break;
                            }
                            ((t = function () {
                                ((De !== 2 && De !== 9) || Le !== e || (De = 7), tl(e));
                            }),
                                i.then(t, t));
                            break e;
                        case 3:
                            De = 7;
                            break e;
                        case 4:
                            De = 5;
                            break e;
                        case 7:
                            xr(i) ? ((De = 0), (Mt = null), md(t)) : ((De = 0), (Mt = null), $a(e, t, i, 7));
                            break;
                        case 5:
                            var s = null;
                            switch (he.tag) {
                                case 26:
                                    s = he.memoizedState;
                                case 5:
                                case 27:
                                    var o = he;
                                    if (s ? Id(s) : o.stateNode.complete) {
                                        ((De = 0), (Mt = null));
                                        var m = o.sibling;
                                        if (m !== null) he = m;
                                        else {
                                            var C = o.return;
                                            C !== null ? ((he = C), is(C)) : (he = null);
                                        }
                                        break t;
                                    }
                            }
                            ((De = 0), (Mt = null), $a(e, t, i, 5));
                            break;
                        case 6:
                            ((De = 0), (Mt = null), $a(e, t, i, 6));
                            break;
                        case 8:
                            (bu(), (Qe = 6));
                            break e;
                        default:
                            throw Error(r(462));
                    }
                }
                hg();
                break;
            } catch (z) {
                ud(e, z);
            }
        while (!0);
        return ((ul = ca = null), (b.H = a), (b.A = n), (ke = l), he !== null ? 0 : ((Le = null), (be = 0), Ni(), Qe));
    }
    function hg() {
        for (; he !== null && !Ms(); ) dd(he);
    }
    function dd(e) {
        var t = Uf(e.alternate, e, yl);
        ((e.memoizedProps = e.pendingProps), t === null ? is(e) : (he = t));
    }
    function md(e) {
        var t = e,
            l = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = Mf(l, t, t.pendingProps, t.type, void 0, be);
                break;
            case 11:
                t = Mf(l, t, t.pendingProps, t.type.render, t.ref, be);
                break;
            case 5:
                _c(t);
            default:
                (Hf(l, t), (t = he = rr(t, yl)), (t = Uf(l, t, yl)));
        }
        ((e.memoizedProps = e.pendingProps), t === null ? is(e) : (he = t));
    }
    function $a(e, t, l, a) {
        ((ul = ca = null), _c(t), (Ba = null), (wn = 0));
        var n = t.return;
        try {
            if (lg(e, n, t, l, be)) {
                ((Qe = 1), Zi(e, Ut(l, e.current)), (he = null));
                return;
            }
        } catch (i) {
            if (n !== null) throw ((he = n), i);
            ((Qe = 1), Zi(e, Ut(l, e.current)), (he = null));
            return;
        }
        t.flags & 32768
            ? (Ce || a === 1
                  ? (e = !0)
                  : Za || (be & 536870912) !== 0
                    ? (e = !1)
                    : ((_l = e = !0),
                      (a === 2 || a === 9 || a === 3 || a === 6) && ((a = zt.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
              hd(t, e))
            : is(t);
    }
    function is(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                hd(t, _l);
                return;
            }
            e = t.return;
            var l = ig(t.alternate, t, yl);
            if (l !== null) {
                he = l;
                return;
            }
            if (((t = t.sibling), t !== null)) {
                he = t;
                return;
            }
            he = t = e;
        } while (t !== null);
        Qe === 0 && (Qe = 5);
    }
    function hd(e, t) {
        do {
            var l = sg(e.alternate, e);
            if (l !== null) {
                ((l.flags &= 32767), (he = l));
                return;
            }
            if (
                ((l = e.return), l !== null && ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)), !t && ((e = e.sibling), e !== null))
            ) {
                he = e;
                return;
            }
            he = e = l;
        } while (e !== null);
        ((Qe = 6), (he = null));
    }
    function gd(e, t, l, a, n, i, s, o, m) {
        e.cancelPendingCommit = null;
        do ss();
        while (et !== 0);
        if ((ke & 6) !== 0) throw Error(r(327));
        if (t !== null) {
            if (t === e.current) throw Error(r(177));
            if (
                ((i = t.lanes | t.childLanes),
                (i |= uc),
                Km(e, l, i, s, o, m),
                e === Le && ((he = Le = null), (be = 0)),
                (Ja = t),
                (Hl = e),
                (bl = l),
                (vu = i),
                (pu = n),
                (nd = a),
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
                    ? ((e.callbackNode = null),
                      (e.callbackPriority = 0),
                      yg(Il, function () {
                          return (Sd(), null);
                      }))
                    : ((e.callbackNode = null), (e.callbackPriority = 0)),
                (a = (t.flags & 13878) !== 0),
                (t.subtreeFlags & 13878) !== 0 || a)
            ) {
                ((a = b.T), (b.T = null), (n = L.p), (L.p = 2), (s = ke), (ke |= 4));
                try {
                    cg(e, t, l);
                } finally {
                    ((ke = s), (L.p = n), (b.T = a));
                }
            }
            ((et = 1), vd(), pd(), yd());
        }
    }
    function vd() {
        if (et === 1) {
            et = 0;
            var e = Hl,
                t = Ja,
                l = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || l) {
                ((l = b.T), (b.T = null));
                var a = L.p;
                L.p = 2;
                var n = ke;
                ke |= 4;
                try {
                    $f(t, e);
                    var i = Du,
                        s = tr(e.containerInfo),
                        o = i.focusedElem,
                        m = i.selectionRange;
                    if (s !== o && o && o.ownerDocument && er(o.ownerDocument.documentElement, o)) {
                        if (m !== null && ac(o)) {
                            var C = m.start,
                                z = m.end;
                            if ((z === void 0 && (z = C), 'selectionStart' in o))
                                ((o.selectionStart = C), (o.selectionEnd = Math.min(z, o.value.length)));
                            else {
                                var R = o.ownerDocument || document,
                                    j = (R && R.defaultView) || window;
                                if (j.getSelection) {
                                    var w = j.getSelection(),
                                        K = o.textContent.length,
                                        ie = Math.min(m.start, K),
                                        Ue = m.end === void 0 ? ie : Math.min(m.end, K);
                                    !w.extend && ie > Ue && ((s = Ue), (Ue = ie), (ie = s));
                                    var y = Po(o, ie),
                                        g = Po(o, Ue);
                                    if (
                                        y &&
                                        g &&
                                        (w.rangeCount !== 1 ||
                                            w.anchorNode !== y.node ||
                                            w.anchorOffset !== y.offset ||
                                            w.focusNode !== g.node ||
                                            w.focusOffset !== g.offset)
                                    ) {
                                        var x = R.createRange();
                                        (x.setStart(y.node, y.offset),
                                            w.removeAllRanges(),
                                            ie > Ue ? (w.addRange(x), w.extend(g.node, g.offset)) : (x.setEnd(g.node, g.offset), w.addRange(x)));
                                    }
                                }
                            }
                        }
                        for (R = [], w = o; (w = w.parentNode); ) w.nodeType === 1 && R.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
                        for (typeof o.focus == 'function' && o.focus(), o = 0; o < R.length; o++) {
                            var M = R[o];
                            ((M.element.scrollLeft = M.left), (M.element.scrollTop = M.top));
                        }
                    }
                    ((ys = !!ku), (Du = ku = null));
                } finally {
                    ((ke = n), (L.p = a), (b.T = l));
                }
            }
            ((e.current = t), (et = 2));
        }
    }
    function pd() {
        if (et === 2) {
            et = 0;
            var e = Hl,
                t = Ja,
                l = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || l) {
                ((l = b.T), (b.T = null));
                var a = L.p;
                L.p = 2;
                var n = ke;
                ke |= 4;
                try {
                    Qf(e, t.alternate, t);
                } finally {
                    ((ke = n), (L.p = a), (b.T = l));
                }
            }
            et = 3;
        }
    }
    function yd() {
        if (et === 4 || et === 3) {
            ((et = 0), ks());
            var e = Hl,
                t = Ja,
                l = bl,
                a = nd;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (et = 5) : ((et = 0), (Ja = Hl = null), bd(e, e.pendingLanes));
            var n = e.pendingLanes;
            if ((n === 0 && (Ll = null), Hs(l), (t = t.stateNode), Ye && typeof Ye.onCommitFiberRoot == 'function'))
                try {
                    Ye.onCommitFiberRoot(Z, t, void 0, (t.current.flags & 128) === 128);
                } catch {}
            if (a !== null) {
                ((t = b.T), (n = L.p), (L.p = 2), (b.T = null));
                try {
                    for (var i = e.onRecoverableError, s = 0; s < a.length; s++) {
                        var o = a[s];
                        i(o.value, { componentStack: o.stack });
                    }
                } finally {
                    ((b.T = t), (L.p = n));
                }
            }
            ((bl & 3) !== 0 && ss(),
                tl(e),
                (n = e.pendingLanes),
                (l & 261930) !== 0 && (n & 42) !== 0 ? (e === yu ? Vn++ : ((Vn = 0), (yu = e))) : (Vn = 0),
                Xn(0));
        }
    }
    function bd(e, t) {
        (e.pooledCacheLanes &= t) === 0 && ((t = e.pooledCache), t != null && ((e.pooledCache = null), Nn(t)));
    }
    function ss() {
        return (vd(), pd(), yd(), Sd());
    }
    function Sd() {
        if (et !== 5) return !1;
        var e = Hl,
            t = vu;
        vu = 0;
        var l = Hs(bl),
            a = b.T,
            n = L.p;
        try {
            ((L.p = 32 > l ? 32 : l), (b.T = null), (l = pu), (pu = null));
            var i = Hl,
                s = bl;
            if (((et = 0), (Ja = Hl = null), (bl = 0), (ke & 6) !== 0)) throw Error(r(331));
            var o = ke;
            if (((ke |= 4), td(i.current), If(i, i.current, s, l), (ke = o), Xn(0, !1), Ye && typeof Ye.onPostCommitFiberRoot == 'function'))
                try {
                    Ye.onPostCommitFiberRoot(Z, i);
                } catch {}
            return !0;
        } finally {
            ((L.p = n), (b.T = a), bd(e, t));
        }
    }
    function xd(e, t, l) {
        ((t = Ut(l, t)), (t = $c(e.stateNode, t, 2)), (e = kl(e, t, 2)), e !== null && (rn(e, 2), tl(e)));
    }
    function Re(e, t, l) {
        if (e.tag === 3) xd(e, e, l);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    xd(t, e, l);
                    break;
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (
                        typeof t.type.getDerivedStateFromError == 'function' ||
                        (typeof a.componentDidCatch == 'function' && (Ll === null || !Ll.has(a)))
                    ) {
                        ((e = Ut(l, e)), (l = Cf(2)), (a = kl(t, l, 2)), a !== null && (jf(l, a, t, e), rn(a, 2), tl(a)));
                        break;
                    }
                }
                t = t.return;
            }
    }
    function xu(e, t, l) {
        var a = e.pingCache;
        if (a === null) {
            a = e.pingCache = new rg();
            var n = new Set();
            a.set(t, n);
        } else ((n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n)));
        n.has(l) || ((mu = !0), n.add(l), (e = gg.bind(null, e, t, l)), t.then(e, e));
    }
    function gg(e, t, l) {
        var a = e.pingCache;
        (a !== null && a.delete(t),
            (e.pingedLanes |= e.suspendedLanes & l),
            (e.warmLanes &= ~l),
            Le === e &&
                (be & l) === l &&
                (Qe === 4 || (Qe === 3 && (be & 62914560) === be && 300 > ht() - es) ? (ke & 2) === 0 && Wa(e, 0) : (hu |= l), Ka === be && (Ka = 0)),
            tl(e));
    }
    function Cd(e, t) {
        (t === 0 && (t = go()), (e = na(e, t)), e !== null && (rn(e, t), tl(e)));
    }
    function vg(e) {
        var t = e.memoizedState,
            l = 0;
        (t !== null && (l = t.retryLane), Cd(e, l));
    }
    function pg(e, t) {
        var l = 0;
        switch (e.tag) {
            case 31:
            case 13:
                var a = e.stateNode,
                    n = e.memoizedState;
                n !== null && (l = n.retryLane);
                break;
            case 19:
                a = e.stateNode;
                break;
            case 22:
                a = e.stateNode._retryCache;
                break;
            default:
                throw Error(r(314));
        }
        (a !== null && a.delete(t), Cd(e, l));
    }
    function yg(e, t) {
        return Cl(e, t);
    }
    var cs = null,
        Fa = null,
        Cu = !1,
        us = !1,
        ju = !1,
        ql = 0;
    function tl(e) {
        (e !== Fa && e.next === null && (Fa === null ? (cs = Fa = e) : (Fa = Fa.next = e)), (us = !0), Cu || ((Cu = !0), Sg()));
    }
    function Xn(e, t) {
        if (!ju && us) {
            ju = !0;
            do
                for (var l = !1, a = cs; a !== null; ) {
                    if (e !== 0) {
                        var n = a.pendingLanes;
                        if (n === 0) var i = 0;
                        else {
                            var s = a.suspendedLanes,
                                o = a.pingedLanes;
                            ((i = (1 << (31 - gt(42 | e) + 1)) - 1), (i &= n & ~(s & ~o)), (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0));
                        }
                        i !== 0 && ((l = !0), wd(a, i));
                    } else
                        ((i = be),
                            (i = di(a, a === Le ? i : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1)),
                            (i & 3) === 0 || on(a, i) || ((l = !0), wd(a, i)));
                    a = a.next;
                }
            while (l);
            ju = !1;
        }
    }
    function bg() {
        jd();
    }
    function jd() {
        us = Cu = !1;
        var e = 0;
        ql !== 0 && Mg() && (e = ql);
        for (var t = ht(), l = null, a = cs; a !== null; ) {
            var n = a.next,
                i = Nd(a, t);
            (i === 0
                ? ((a.next = null), l === null ? (cs = n) : (l.next = n), n === null && (Fa = l))
                : ((l = a), (e !== 0 || (i & 3) !== 0) && (us = !0)),
                (a = n));
        }
        ((et !== 0 && et !== 5) || Xn(e), ql !== 0 && (ql = 0));
    }
    function Nd(e, t) {
        for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
            var s = 31 - gt(i),
                o = 1 << s,
                m = n[s];
            (m === -1 ? ((o & l) === 0 || (o & a) !== 0) && (n[s] = Zm(o, t)) : m <= t && (e.expiredLanes |= o), (i &= ~o));
        }
        if (
            ((t = Le),
            (l = be),
            (l = di(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
            (a = e.callbackNode),
            l === 0 || (e === t && (De === 2 || De === 9)) || e.cancelPendingCommit !== null)
        )
            return (a !== null && a !== null && Fl(a), (e.callbackNode = null), (e.callbackPriority = 0));
        if ((l & 3) === 0 || on(e, l)) {
            if (((t = l & -l), t === e.callbackPriority)) return t;
            switch ((a !== null && Fl(a), Hs(l))) {
                case 2:
                case 8:
                    l = ci;
                    break;
                case 32:
                    l = Il;
                    break;
                case 268435456:
                    l = cn;
                    break;
                default:
                    l = Il;
            }
            return ((a = Td.bind(null, e)), (l = Cl(l, a)), (e.callbackPriority = t), (e.callbackNode = l), t);
        }
        return (a !== null && a !== null && Fl(a), (e.callbackPriority = 2), (e.callbackNode = null), 2);
    }
    function Td(e, t) {
        if (et !== 0 && et !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
        var l = e.callbackNode;
        if (ss() && e.callbackNode !== l) return null;
        var a = be;
        return (
            (a = di(e, e === Le ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
            a === 0 ? null : (sd(e, a, t), Nd(e, ht()), e.callbackNode != null && e.callbackNode === l ? Td.bind(null, e) : null)
        );
    }
    function wd(e, t) {
        if (ss()) return null;
        sd(e, t, !0);
    }
    function Sg() {
        Dg(function () {
            (ke & 6) !== 0 ? Cl(si, bg) : jd();
        });
    }
    function Nu() {
        if (ql === 0) {
            var e = Ua;
            (e === 0 && ((e = oi), (oi <<= 1), (oi & 261888) === 0 && (oi = 256)), (ql = e));
        }
        return ql;
    }
    function Ad(e) {
        return e == null || typeof e == 'symbol' || typeof e == 'boolean' ? null : typeof e == 'function' ? e : vi('' + e);
    }
    function zd(e, t) {
        var l = t.ownerDocument.createElement('input');
        return (
            (l.name = t.name),
            (l.value = t.value),
            e.id && l.setAttribute('form', e.id),
            t.parentNode.insertBefore(l, t),
            (e = new FormData(e)),
            l.parentNode.removeChild(l),
            e
        );
    }
    function xg(e, t, l, a, n) {
        if (t === 'submit' && l && l.stateNode === n) {
            var i = Ad((n[pt] || null).action),
                s = a.submitter;
            s && ((t = (t = s[pt] || null) ? Ad(t.formAction) : s.getAttribute('formAction')), t !== null && ((i = t), (s = null)));
            var o = new Si('action', 'action', null, a, n);
            e.push({
                event: o,
                listeners: [
                    {
                        instance: null,
                        listener: function () {
                            if (a.defaultPrevented) {
                                if (ql !== 0) {
                                    var m = s ? zd(n, s) : new FormData(n);
                                    Xc(l, { pending: !0, data: m, method: n.method, action: i }, null, m);
                                }
                            } else
                                typeof i == 'function' &&
                                    (o.preventDefault(),
                                    (m = s ? zd(n, s) : new FormData(n)),
                                    Xc(l, { pending: !0, data: m, method: n.method, action: i }, i, m));
                        },
                        currentTarget: n,
                    },
                ],
            });
        }
    }
    for (var Tu = 0; Tu < cc.length; Tu++) {
        var wu = cc[Tu],
            Cg = wu.toLowerCase(),
            jg = wu[0].toUpperCase() + wu.slice(1);
        Xt(Cg, 'on' + jg);
    }
    (Xt(nr, 'onAnimationEnd'),
        Xt(ir, 'onAnimationIteration'),
        Xt(sr, 'onAnimationStart'),
        Xt('dblclick', 'onDoubleClick'),
        Xt('focusin', 'onFocus'),
        Xt('focusout', 'onBlur'),
        Xt(Bh, 'onTransitionRun'),
        Xt(qh, 'onTransitionStart'),
        Xt(Gh, 'onTransitionCancel'),
        Xt(cr, 'onTransitionEnd'),
        Ca('onMouseEnter', ['mouseout', 'mouseover']),
        Ca('onMouseLeave', ['mouseout', 'mouseover']),
        Ca('onPointerEnter', ['pointerout', 'pointerover']),
        Ca('onPointerLeave', ['pointerout', 'pointerover']),
        ea('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
        ea('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
        ea('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
        ea('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
        ea('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
        ea('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
    var Qn =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
                ' '
            ),
        Ng = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Qn));
    function Ed(e, t) {
        t = (t & 4) !== 0;
        for (var l = 0; l < e.length; l++) {
            var a = e[l],
                n = a.event;
            a = a.listeners;
            e: {
                var i = void 0;
                if (t)
                    for (var s = a.length - 1; 0 <= s; s--) {
                        var o = a[s],
                            m = o.instance,
                            C = o.currentTarget;
                        if (((o = o.listener), m !== i && n.isPropagationStopped())) break e;
                        ((i = o), (n.currentTarget = C));
                        try {
                            i(n);
                        } catch (z) {
                            ji(z);
                        }
                        ((n.currentTarget = null), (i = m));
                    }
                else
                    for (s = 0; s < a.length; s++) {
                        if (((o = a[s]), (m = o.instance), (C = o.currentTarget), (o = o.listener), m !== i && n.isPropagationStopped())) break e;
                        ((i = o), (n.currentTarget = C));
                        try {
                            i(n);
                        } catch (z) {
                            ji(z);
                        }
                        ((n.currentTarget = null), (i = m));
                    }
            }
        }
    }
    function ge(e, t) {
        var l = t[Bs];
        l === void 0 && (l = t[Bs] = new Set());
        var a = e + '__bubble';
        l.has(a) || (Md(t, e, 2, !1), l.add(a));
    }
    function Au(e, t, l) {
        var a = 0;
        (t && (a |= 4), Md(l, e, a, t));
    }
    var os = '_reactListening' + Math.random().toString(36).slice(2);
    function zu(e) {
        if (!e[os]) {
            ((e[os] = !0),
                Co.forEach(function (l) {
                    l !== 'selectionchange' && (Ng.has(l) || Au(l, !1, e), Au(l, !0, e));
                }));
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[os] || ((t[os] = !0), Au('selectionchange', !1, t));
        }
    }
    function Md(e, t, l, a) {
        switch (im(t)) {
            case 2:
                var n = Ig;
                break;
            case 8:
                n = Pg;
                break;
            default:
                n = Vu;
        }
        ((l = n.bind(null, t, l, e)),
            (n = void 0),
            !Js || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (n = !0),
            a
                ? n !== void 0
                    ? e.addEventListener(t, l, { capture: !0, passive: n })
                    : e.addEventListener(t, l, !0)
                : n !== void 0
                  ? e.addEventListener(t, l, { passive: n })
                  : e.addEventListener(t, l, !1));
    }
    function Eu(e, t, l, a, n) {
        var i = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            e: for (;;) {
                if (a === null) return;
                var s = a.tag;
                if (s === 3 || s === 4) {
                    var o = a.stateNode.containerInfo;
                    if (o === n) break;
                    if (s === 4)
                        for (s = a.return; s !== null; ) {
                            var m = s.tag;
                            if ((m === 3 || m === 4) && s.stateNode.containerInfo === n) return;
                            s = s.return;
                        }
                    for (; o !== null; ) {
                        if (((s = ba(o)), s === null)) return;
                        if (((m = s.tag), m === 5 || m === 6 || m === 26 || m === 27)) {
                            a = i = s;
                            continue e;
                        }
                        o = o.parentNode;
                    }
                }
                a = a.return;
            }
        Oo(function () {
            var C = i,
                z = Zs(l),
                R = [];
            e: {
                var j = ur.get(e);
                if (j !== void 0) {
                    var w = Si,
                        K = e;
                    switch (e) {
                        case 'keypress':
                            if (yi(l) === 0) break e;
                        case 'keydown':
                        case 'keyup':
                            w = ph;
                            break;
                        case 'focusin':
                            ((K = 'focus'), (w = Is));
                            break;
                        case 'focusout':
                            ((K = 'blur'), (w = Is));
                            break;
                        case 'beforeblur':
                        case 'afterblur':
                            w = Is;
                            break;
                        case 'click':
                            if (l.button === 2) break e;
                        case 'auxclick':
                        case 'dblclick':
                        case 'mousedown':
                        case 'mousemove':
                        case 'mouseup':
                        case 'mouseout':
                        case 'mouseover':
                        case 'contextmenu':
                            w = Lo;
                            break;
                        case 'drag':
                        case 'dragend':
                        case 'dragenter':
                        case 'dragexit':
                        case 'dragleave':
                        case 'dragover':
                        case 'dragstart':
                        case 'drop':
                            w = ih;
                            break;
                        case 'touchcancel':
                        case 'touchend':
                        case 'touchmove':
                        case 'touchstart':
                            w = Sh;
                            break;
                        case nr:
                        case ir:
                        case sr:
                            w = uh;
                            break;
                        case cr:
                            w = Ch;
                            break;
                        case 'scroll':
                        case 'scrollend':
                            w = ah;
                            break;
                        case 'wheel':
                            w = Nh;
                            break;
                        case 'copy':
                        case 'cut':
                        case 'paste':
                            w = rh;
                            break;
                        case 'gotpointercapture':
                        case 'lostpointercapture':
                        case 'pointercancel':
                        case 'pointerdown':
                        case 'pointermove':
                        case 'pointerout':
                        case 'pointerover':
                        case 'pointerup':
                            w = Bo;
                            break;
                        case 'toggle':
                        case 'beforetoggle':
                            w = wh;
                    }
                    var ie = (t & 4) !== 0,
                        Ue = !ie && (e === 'scroll' || e === 'scrollend'),
                        y = ie ? (j !== null ? j + 'Capture' : null) : j;
                    ie = [];
                    for (var g = C, x; g !== null; ) {
                        var M = g;
                        if (
                            ((x = M.stateNode),
                            (M = M.tag),
                            (M !== 5 && M !== 26 && M !== 27) || x === null || y === null || ((M = mn(g, y)), M != null && ie.push(Zn(g, M, x))),
                            Ue)
                        )
                            break;
                        g = g.return;
                    }
                    0 < ie.length && ((j = new w(j, K, null, l, z)), R.push({ event: j, listeners: ie }));
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (
                        ((j = e === 'mouseover' || e === 'pointerover'),
                        (w = e === 'mouseout' || e === 'pointerout'),
                        j && l !== Qs && (K = l.relatedTarget || l.fromElement) && (ba(K) || K[ya]))
                    )
                        break e;
                    if (
                        (w || j) &&
                        ((j = z.window === z ? z : (j = z.ownerDocument) ? j.defaultView || j.parentWindow : window),
                        w
                            ? ((K = l.relatedTarget || l.toElement),
                              (w = C),
                              (K = K ? ba(K) : null),
                              K !== null && ((Ue = T(K)), (ie = K.tag), K !== Ue || (ie !== 5 && ie !== 27 && ie !== 6)) && (K = null))
                            : ((w = null), (K = C)),
                        w !== K)
                    ) {
                        if (
                            ((ie = Lo),
                            (M = 'onMouseLeave'),
                            (y = 'onMouseEnter'),
                            (g = 'mouse'),
                            (e === 'pointerout' || e === 'pointerover') &&
                                ((ie = Bo), (M = 'onPointerLeave'), (y = 'onPointerEnter'), (g = 'pointer')),
                            (Ue = w == null ? j : dn(w)),
                            (x = K == null ? j : dn(K)),
                            (j = new ie(M, g + 'leave', w, l, z)),
                            (j.target = Ue),
                            (j.relatedTarget = x),
                            (M = null),
                            ba(z) === C && ((ie = new ie(y, g + 'enter', K, l, z)), (ie.target = x), (ie.relatedTarget = Ue), (M = ie)),
                            (Ue = M),
                            w && K)
                        )
                            t: {
                                for (ie = Tg, y = w, g = K, x = 0, M = y; M; M = ie(M)) x++;
                                M = 0;
                                for (var le = g; le; le = ie(le)) M++;
                                for (; 0 < x - M; ) ((y = ie(y)), x--);
                                for (; 0 < M - x; ) ((g = ie(g)), M--);
                                for (; x--; ) {
                                    if (y === g || (g !== null && y === g.alternate)) {
                                        ie = y;
                                        break t;
                                    }
                                    ((y = ie(y)), (g = ie(g)));
                                }
                                ie = null;
                            }
                        else ie = null;
                        (w !== null && kd(R, j, w, ie, !1), K !== null && Ue !== null && kd(R, Ue, K, ie, !0));
                    }
                }
                e: {
                    if (
                        ((j = C ? dn(C) : window),
                        (w = j.nodeName && j.nodeName.toLowerCase()),
                        w === 'select' || (w === 'input' && j.type === 'file'))
                    )
                        var ze = Ko;
                    else if (Qo(j))
                        if (Jo) ze = Uh;
                        else {
                            ze = Oh;
                            var $ = Rh;
                        }
                    else
                        ((w = j.nodeName),
                            !w || w.toLowerCase() !== 'input' || (j.type !== 'checkbox' && j.type !== 'radio')
                                ? C && Xs(C.elementType) && (ze = Ko)
                                : (ze = _h));
                    if (ze && (ze = ze(e, C))) {
                        Zo(R, ze, l, z);
                        break e;
                    }
                    ($ && $(e, j, C), e === 'focusout' && C && j.type === 'number' && C.memoizedProps.value != null && Vs(j, 'number', j.value));
                }
                switch ((($ = C ? dn(C) : window), e)) {
                    case 'focusin':
                        (Qo($) || $.contentEditable === 'true') && ((za = $), (nc = C), (xn = null));
                        break;
                    case 'focusout':
                        xn = nc = za = null;
                        break;
                    case 'mousedown':
                        ic = !0;
                        break;
                    case 'contextmenu':
                    case 'mouseup':
                    case 'dragend':
                        ((ic = !1), lr(R, l, z));
                        break;
                    case 'selectionchange':
                        if (Hh) break;
                    case 'keydown':
                    case 'keyup':
                        lr(R, l, z);
                }
                var de;
                if (ec)
                    e: {
                        switch (e) {
                            case 'compositionstart':
                                var Se = 'onCompositionStart';
                                break e;
                            case 'compositionend':
                                Se = 'onCompositionEnd';
                                break e;
                            case 'compositionupdate':
                                Se = 'onCompositionUpdate';
                                break e;
                        }
                        Se = void 0;
                    }
                else Aa ? Vo(e, l) && (Se = 'onCompositionEnd') : e === 'keydown' && l.keyCode === 229 && (Se = 'onCompositionStart');
                (Se &&
                    (qo &&
                        l.locale !== 'ko' &&
                        (Aa || Se !== 'onCompositionStart'
                            ? Se === 'onCompositionEnd' && Aa && (de = _o())
                            : ((Nl = z), (Ws = 'value' in Nl ? Nl.value : Nl.textContent), (Aa = !0))),
                    ($ = rs(C, Se)),
                    0 < $.length &&
                        ((Se = new Ho(Se, e, null, l, z)),
                        R.push({ event: Se, listeners: $ }),
                        de ? (Se.data = de) : ((de = Xo(l)), de !== null && (Se.data = de)))),
                    (de = zh ? Eh(e, l) : Mh(e, l)) &&
                        ((Se = rs(C, 'onBeforeInput')),
                        0 < Se.length &&
                            (($ = new Ho('onBeforeInput', 'beforeinput', null, l, z)), R.push({ event: $, listeners: Se }), ($.data = de))),
                    xg(R, e, C, l, z));
            }
            Ed(R, t);
        });
    }
    function Zn(e, t, l) {
        return { instance: e, listener: t, currentTarget: l };
    }
    function rs(e, t) {
        for (var l = t + 'Capture', a = []; e !== null; ) {
            var n = e,
                i = n.stateNode;
            if (
                ((n = n.tag),
                (n !== 5 && n !== 26 && n !== 27) ||
                    i === null ||
                    ((n = mn(e, l)), n != null && a.unshift(Zn(e, n, i)), (n = mn(e, t)), n != null && a.push(Zn(e, n, i))),
                e.tag === 3)
            )
                return a;
            e = e.return;
        }
        return [];
    }
    function Tg(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null;
    }
    function kd(e, t, l, a, n) {
        for (var i = t._reactName, s = []; l !== null && l !== a; ) {
            var o = l,
                m = o.alternate,
                C = o.stateNode;
            if (((o = o.tag), m !== null && m === a)) break;
            ((o !== 5 && o !== 26 && o !== 27) ||
                C === null ||
                ((m = C), n ? ((C = mn(l, i)), C != null && s.unshift(Zn(l, C, m))) : n || ((C = mn(l, i)), C != null && s.push(Zn(l, C, m)))),
                (l = l.return));
        }
        s.length !== 0 && e.push({ event: t, listeners: s });
    }
    var wg = /\r\n?/g,
        Ag = /\u0000|\uFFFD/g;
    function Dd(e) {
        return (typeof e == 'string' ? e : '' + e)
            .replace(
                wg,
                `
`
            )
            .replace(Ag, '');
    }
    function Rd(e, t) {
        return ((t = Dd(t)), Dd(e) === t);
    }
    function _e(e, t, l, a, n, i) {
        switch (l) {
            case 'children':
                typeof a == 'string'
                    ? t === 'body' || (t === 'textarea' && a === '') || Na(e, a)
                    : (typeof a == 'number' || typeof a == 'bigint') && t !== 'body' && Na(e, '' + a);
                break;
            case 'className':
                hi(e, 'class', a);
                break;
            case 'tabIndex':
                hi(e, 'tabindex', a);
                break;
            case 'dir':
            case 'role':
            case 'viewBox':
            case 'width':
            case 'height':
                hi(e, l, a);
                break;
            case 'style':
                Do(e, a, i);
                break;
            case 'data':
                if (t !== 'object') {
                    hi(e, 'data', a);
                    break;
                }
            case 'src':
            case 'href':
                if (a === '' && (t !== 'a' || l !== 'href')) {
                    e.removeAttribute(l);
                    break;
                }
                if (a == null || typeof a == 'function' || typeof a == 'symbol' || typeof a == 'boolean') {
                    e.removeAttribute(l);
                    break;
                }
                ((a = vi('' + a)), e.setAttribute(l, a));
                break;
            case 'action':
            case 'formAction':
                if (typeof a == 'function') {
                    e.setAttribute(
                        l,
                        "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                    );
                    break;
                } else
                    typeof i == 'function' &&
                        (l === 'formAction'
                            ? (t !== 'input' && _e(e, t, 'name', n.name, n, null),
                              _e(e, t, 'formEncType', n.formEncType, n, null),
                              _e(e, t, 'formMethod', n.formMethod, n, null),
                              _e(e, t, 'formTarget', n.formTarget, n, null))
                            : (_e(e, t, 'encType', n.encType, n, null),
                              _e(e, t, 'method', n.method, n, null),
                              _e(e, t, 'target', n.target, n, null)));
                if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
                    e.removeAttribute(l);
                    break;
                }
                ((a = vi('' + a)), e.setAttribute(l, a));
                break;
            case 'onClick':
                a != null && (e.onclick = nl);
                break;
            case 'onScroll':
                a != null && ge('scroll', e);
                break;
            case 'onScrollEnd':
                a != null && ge('scrollend', e);
                break;
            case 'dangerouslySetInnerHTML':
                if (a != null) {
                    if (typeof a != 'object' || !('__html' in a)) throw Error(r(61));
                    if (((l = a.__html), l != null)) {
                        if (n.children != null) throw Error(r(60));
                        e.innerHTML = l;
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
                ((l = vi('' + a)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l));
                break;
            case 'contentEditable':
            case 'spellCheck':
            case 'draggable':
            case 'value':
            case 'autoReverse':
            case 'externalResourcesRequired':
            case 'focusable':
            case 'preserveAlpha':
                a != null && typeof a != 'function' && typeof a != 'symbol' ? e.setAttribute(l, '' + a) : e.removeAttribute(l);
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
                a && typeof a != 'function' && typeof a != 'symbol' ? e.setAttribute(l, '') : e.removeAttribute(l);
                break;
            case 'capture':
            case 'download':
                a === !0
                    ? e.setAttribute(l, '')
                    : a !== !1 && a != null && typeof a != 'function' && typeof a != 'symbol'
                      ? e.setAttribute(l, a)
                      : e.removeAttribute(l);
                break;
            case 'cols':
            case 'rows':
            case 'size':
            case 'span':
                a != null && typeof a != 'function' && typeof a != 'symbol' && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
                break;
            case 'rowSpan':
            case 'start':
                a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
                break;
            case 'popover':
                (ge('beforetoggle', e), ge('toggle', e), mi(e, 'popover', a));
                break;
            case 'xlinkActuate':
                al(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
                break;
            case 'xlinkArcrole':
                al(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
                break;
            case 'xlinkRole':
                al(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
                break;
            case 'xlinkShow':
                al(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
                break;
            case 'xlinkTitle':
                al(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
                break;
            case 'xlinkType':
                al(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
                break;
            case 'xmlBase':
                al(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
                break;
            case 'xmlLang':
                al(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
                break;
            case 'xmlSpace':
                al(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
                break;
            case 'is':
                mi(e, 'is', a);
                break;
            case 'innerText':
            case 'textContent':
                break;
            default:
                (!(2 < l.length) || (l[0] !== 'o' && l[0] !== 'O') || (l[1] !== 'n' && l[1] !== 'N')) && ((l = th.get(l) || l), mi(e, l, a));
        }
    }
    function Mu(e, t, l, a, n, i) {
        switch (l) {
            case 'style':
                Do(e, a, i);
                break;
            case 'dangerouslySetInnerHTML':
                if (a != null) {
                    if (typeof a != 'object' || !('__html' in a)) throw Error(r(61));
                    if (((l = a.__html), l != null)) {
                        if (n.children != null) throw Error(r(60));
                        e.innerHTML = l;
                    }
                }
                break;
            case 'children':
                typeof a == 'string' ? Na(e, a) : (typeof a == 'number' || typeof a == 'bigint') && Na(e, '' + a);
                break;
            case 'onScroll':
                a != null && ge('scroll', e);
                break;
            case 'onScrollEnd':
                a != null && ge('scrollend', e);
                break;
            case 'onClick':
                a != null && (e.onclick = nl);
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
                if (!jo.hasOwnProperty(l))
                    e: {
                        if (
                            l[0] === 'o' &&
                            l[1] === 'n' &&
                            ((n = l.endsWith('Capture')),
                            (t = l.slice(2, n ? l.length - 7 : void 0)),
                            (i = e[pt] || null),
                            (i = i != null ? i[l] : null),
                            typeof i == 'function' && e.removeEventListener(t, i, n),
                            typeof a == 'function')
                        ) {
                            (typeof i != 'function' && i !== null && (l in e ? (e[l] = null) : e.hasAttribute(l) && e.removeAttribute(l)),
                                e.addEventListener(t, a, n));
                            break e;
                        }
                        l in e ? (e[l] = a) : a === !0 ? e.setAttribute(l, '') : mi(e, l, a);
                    }
        }
    }
    function ot(e, t, l) {
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
                (ge('error', e), ge('load', e));
                var a = !1,
                    n = !1,
                    i;
                for (i in l)
                    if (l.hasOwnProperty(i)) {
                        var s = l[i];
                        if (s != null)
                            switch (i) {
                                case 'src':
                                    a = !0;
                                    break;
                                case 'srcSet':
                                    n = !0;
                                    break;
                                case 'children':
                                case 'dangerouslySetInnerHTML':
                                    throw Error(r(137, t));
                                default:
                                    _e(e, t, i, s, l, null);
                            }
                    }
                (n && _e(e, t, 'srcSet', l.srcSet, l, null), a && _e(e, t, 'src', l.src, l, null));
                return;
            case 'input':
                ge('invalid', e);
                var o = (i = s = n = null),
                    m = null,
                    C = null;
                for (a in l)
                    if (l.hasOwnProperty(a)) {
                        var z = l[a];
                        if (z != null)
                            switch (a) {
                                case 'name':
                                    n = z;
                                    break;
                                case 'type':
                                    s = z;
                                    break;
                                case 'checked':
                                    m = z;
                                    break;
                                case 'defaultChecked':
                                    C = z;
                                    break;
                                case 'value':
                                    i = z;
                                    break;
                                case 'defaultValue':
                                    o = z;
                                    break;
                                case 'children':
                                case 'dangerouslySetInnerHTML':
                                    if (z != null) throw Error(r(137, t));
                                    break;
                                default:
                                    _e(e, t, a, z, l, null);
                            }
                    }
                zo(e, i, o, m, C, s, n, !1);
                return;
            case 'select':
                (ge('invalid', e), (a = s = i = null));
                for (n in l)
                    if (l.hasOwnProperty(n) && ((o = l[n]), o != null))
                        switch (n) {
                            case 'value':
                                i = o;
                                break;
                            case 'defaultValue':
                                s = o;
                                break;
                            case 'multiple':
                                a = o;
                            default:
                                _e(e, t, n, o, l, null);
                        }
                ((t = i), (l = s), (e.multiple = !!a), t != null ? ja(e, !!a, t, !1) : l != null && ja(e, !!a, l, !0));
                return;
            case 'textarea':
                (ge('invalid', e), (i = n = a = null));
                for (s in l)
                    if (l.hasOwnProperty(s) && ((o = l[s]), o != null))
                        switch (s) {
                            case 'value':
                                a = o;
                                break;
                            case 'defaultValue':
                                n = o;
                                break;
                            case 'children':
                                i = o;
                                break;
                            case 'dangerouslySetInnerHTML':
                                if (o != null) throw Error(r(91));
                                break;
                            default:
                                _e(e, t, s, o, l, null);
                        }
                Mo(e, a, n, i);
                return;
            case 'option':
                for (m in l)
                    if (l.hasOwnProperty(m) && ((a = l[m]), a != null))
                        switch (m) {
                            case 'selected':
                                e.selected = a && typeof a != 'function' && typeof a != 'symbol';
                                break;
                            default:
                                _e(e, t, m, a, l, null);
                        }
                return;
            case 'dialog':
                (ge('beforetoggle', e), ge('toggle', e), ge('cancel', e), ge('close', e));
                break;
            case 'iframe':
            case 'object':
                ge('load', e);
                break;
            case 'video':
            case 'audio':
                for (a = 0; a < Qn.length; a++) ge(Qn[a], e);
                break;
            case 'image':
                (ge('error', e), ge('load', e));
                break;
            case 'details':
                ge('toggle', e);
                break;
            case 'embed':
            case 'source':
            case 'link':
                (ge('error', e), ge('load', e));
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
                for (C in l)
                    if (l.hasOwnProperty(C) && ((a = l[C]), a != null))
                        switch (C) {
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                throw Error(r(137, t));
                            default:
                                _e(e, t, C, a, l, null);
                        }
                return;
            default:
                if (Xs(t)) {
                    for (z in l) l.hasOwnProperty(z) && ((a = l[z]), a !== void 0 && Mu(e, t, z, a, l, void 0));
                    return;
                }
        }
        for (o in l) l.hasOwnProperty(o) && ((a = l[o]), a != null && _e(e, t, o, a, l, null));
    }
    function zg(e, t, l, a) {
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
                var n = null,
                    i = null,
                    s = null,
                    o = null,
                    m = null,
                    C = null,
                    z = null;
                for (w in l) {
                    var R = l[w];
                    if (l.hasOwnProperty(w) && R != null)
                        switch (w) {
                            case 'checked':
                                break;
                            case 'value':
                                break;
                            case 'defaultValue':
                                m = R;
                            default:
                                a.hasOwnProperty(w) || _e(e, t, w, null, a, R);
                        }
                }
                for (var j in a) {
                    var w = a[j];
                    if (((R = l[j]), a.hasOwnProperty(j) && (w != null || R != null)))
                        switch (j) {
                            case 'type':
                                i = w;
                                break;
                            case 'name':
                                n = w;
                                break;
                            case 'checked':
                                C = w;
                                break;
                            case 'defaultChecked':
                                z = w;
                                break;
                            case 'value':
                                s = w;
                                break;
                            case 'defaultValue':
                                o = w;
                                break;
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                if (w != null) throw Error(r(137, t));
                                break;
                            default:
                                w !== R && _e(e, t, j, w, a, R);
                        }
                }
                Ys(e, s, o, m, C, z, i, n);
                return;
            case 'select':
                w = s = o = j = null;
                for (i in l)
                    if (((m = l[i]), l.hasOwnProperty(i) && m != null))
                        switch (i) {
                            case 'value':
                                break;
                            case 'multiple':
                                w = m;
                            default:
                                a.hasOwnProperty(i) || _e(e, t, i, null, a, m);
                        }
                for (n in a)
                    if (((i = a[n]), (m = l[n]), a.hasOwnProperty(n) && (i != null || m != null)))
                        switch (n) {
                            case 'value':
                                j = i;
                                break;
                            case 'defaultValue':
                                o = i;
                                break;
                            case 'multiple':
                                s = i;
                            default:
                                i !== m && _e(e, t, n, i, a, m);
                        }
                ((t = o),
                    (l = s),
                    (a = w),
                    j != null ? ja(e, !!l, j, !1) : !!a != !!l && (t != null ? ja(e, !!l, t, !0) : ja(e, !!l, l ? [] : '', !1)));
                return;
            case 'textarea':
                w = j = null;
                for (o in l)
                    if (((n = l[o]), l.hasOwnProperty(o) && n != null && !a.hasOwnProperty(o)))
                        switch (o) {
                            case 'value':
                                break;
                            case 'children':
                                break;
                            default:
                                _e(e, t, o, null, a, n);
                        }
                for (s in a)
                    if (((n = a[s]), (i = l[s]), a.hasOwnProperty(s) && (n != null || i != null)))
                        switch (s) {
                            case 'value':
                                j = n;
                                break;
                            case 'defaultValue':
                                w = n;
                                break;
                            case 'children':
                                break;
                            case 'dangerouslySetInnerHTML':
                                if (n != null) throw Error(r(91));
                                break;
                            default:
                                n !== i && _e(e, t, s, n, a, i);
                        }
                Eo(e, j, w);
                return;
            case 'option':
                for (var K in l)
                    if (((j = l[K]), l.hasOwnProperty(K) && j != null && !a.hasOwnProperty(K)))
                        switch (K) {
                            case 'selected':
                                e.selected = !1;
                                break;
                            default:
                                _e(e, t, K, null, a, j);
                        }
                for (m in a)
                    if (((j = a[m]), (w = l[m]), a.hasOwnProperty(m) && j !== w && (j != null || w != null)))
                        switch (m) {
                            case 'selected':
                                e.selected = j && typeof j != 'function' && typeof j != 'symbol';
                                break;
                            default:
                                _e(e, t, m, j, a, w);
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
                for (var ie in l) ((j = l[ie]), l.hasOwnProperty(ie) && j != null && !a.hasOwnProperty(ie) && _e(e, t, ie, null, a, j));
                for (C in a)
                    if (((j = a[C]), (w = l[C]), a.hasOwnProperty(C) && j !== w && (j != null || w != null)))
                        switch (C) {
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                if (j != null) throw Error(r(137, t));
                                break;
                            default:
                                _e(e, t, C, j, a, w);
                        }
                return;
            default:
                if (Xs(t)) {
                    for (var Ue in l) ((j = l[Ue]), l.hasOwnProperty(Ue) && j !== void 0 && !a.hasOwnProperty(Ue) && Mu(e, t, Ue, void 0, a, j));
                    for (z in a) ((j = a[z]), (w = l[z]), !a.hasOwnProperty(z) || j === w || (j === void 0 && w === void 0) || Mu(e, t, z, j, a, w));
                    return;
                }
        }
        for (var y in l) ((j = l[y]), l.hasOwnProperty(y) && j != null && !a.hasOwnProperty(y) && _e(e, t, y, null, a, j));
        for (R in a) ((j = a[R]), (w = l[R]), !a.hasOwnProperty(R) || j === w || (j == null && w == null) || _e(e, t, R, j, a, w));
    }
    function Od(e) {
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
    function Eg() {
        if (typeof performance.getEntriesByType == 'function') {
            for (var e = 0, t = 0, l = performance.getEntriesByType('resource'), a = 0; a < l.length; a++) {
                var n = l[a],
                    i = n.transferSize,
                    s = n.initiatorType,
                    o = n.duration;
                if (i && o && Od(s)) {
                    for (s = 0, o = n.responseEnd, a += 1; a < l.length; a++) {
                        var m = l[a],
                            C = m.startTime;
                        if (C > o) break;
                        var z = m.transferSize,
                            R = m.initiatorType;
                        z && Od(R) && ((m = m.responseEnd), (s += z * (m < o ? 1 : (o - C) / (m - C))));
                    }
                    if ((--a, (t += (8 * (i + s)) / (n.duration / 1e3)), e++, 10 < e)) break;
                }
            }
            if (0 < e) return t / e / 1e6;
        }
        return navigator.connection && ((e = navigator.connection.downlink), typeof e == 'number') ? e : 5;
    }
    var ku = null,
        Du = null;
    function fs(e) {
        return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function _d(e) {
        switch (e) {
            case 'http://www.w3.org/2000/svg':
                return 1;
            case 'http://www.w3.org/1998/Math/MathML':
                return 2;
            default:
                return 0;
        }
    }
    function Ud(e, t) {
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
    function Ru(e, t) {
        return (
            e === 'textarea' ||
            e === 'noscript' ||
            typeof t.children == 'string' ||
            typeof t.children == 'number' ||
            typeof t.children == 'bigint' ||
            (typeof t.dangerouslySetInnerHTML == 'object' && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
        );
    }
    var Ou = null;
    function Mg() {
        var e = window.event;
        return e && e.type === 'popstate' ? (e === Ou ? !1 : ((Ou = e), !0)) : ((Ou = null), !1);
    }
    var Ld = typeof setTimeout == 'function' ? setTimeout : void 0,
        kg = typeof clearTimeout == 'function' ? clearTimeout : void 0,
        Hd = typeof Promise == 'function' ? Promise : void 0,
        Dg =
            typeof queueMicrotask == 'function'
                ? queueMicrotask
                : typeof Hd < 'u'
                  ? function (e) {
                        return Hd.resolve(null).then(e).catch(Rg);
                    }
                  : Ld;
    function Rg(e) {
        setTimeout(function () {
            throw e;
        });
    }
    function Gl(e) {
        return e === 'head';
    }
    function Bd(e, t) {
        var l = t,
            a = 0;
        do {
            var n = l.nextSibling;
            if ((e.removeChild(l), n && n.nodeType === 8))
                if (((l = n.data), l === '/$' || l === '/&')) {
                    if (a === 0) {
                        (e.removeChild(n), tn(t));
                        return;
                    }
                    a--;
                } else if (l === '$' || l === '$?' || l === '$~' || l === '$!' || l === '&') a++;
                else if (l === 'html') Kn(e.ownerDocument.documentElement);
                else if (l === 'head') {
                    ((l = e.ownerDocument.head), Kn(l));
                    for (var i = l.firstChild; i; ) {
                        var s = i.nextSibling,
                            o = i.nodeName;
                        (i[fn] || o === 'SCRIPT' || o === 'STYLE' || (o === 'LINK' && i.rel.toLowerCase() === 'stylesheet') || l.removeChild(i),
                            (i = s));
                    }
                } else l === 'body' && Kn(e.ownerDocument.body);
            l = n;
        } while (l);
        tn(t);
    }
    function qd(e, t) {
        var l = e;
        e = 0;
        do {
            var a = l.nextSibling;
            if (
                (l.nodeType === 1
                    ? t
                        ? ((l._stashedDisplay = l.style.display), (l.style.display = 'none'))
                        : ((l.style.display = l._stashedDisplay || ''), l.getAttribute('style') === '' && l.removeAttribute('style'))
                    : l.nodeType === 3 && (t ? ((l._stashedText = l.nodeValue), (l.nodeValue = '')) : (l.nodeValue = l._stashedText || '')),
                a && a.nodeType === 8)
            )
                if (((l = a.data), l === '/$')) {
                    if (e === 0) break;
                    e--;
                } else (l !== '$' && l !== '$?' && l !== '$~' && l !== '$!') || e++;
            l = a;
        } while (l);
    }
    function _u(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var l = t;
            switch (((t = t.nextSibling), l.nodeName)) {
                case 'HTML':
                case 'HEAD':
                case 'BODY':
                    (_u(l), qs(l));
                    continue;
                case 'SCRIPT':
                case 'STYLE':
                    continue;
                case 'LINK':
                    if (l.rel.toLowerCase() === 'stylesheet') continue;
            }
            e.removeChild(l);
        }
    }
    function Og(e, t, l, a) {
        for (; e.nodeType === 1; ) {
            var n = l;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
            } else if (a) {
                if (!e[fn])
                    switch (t) {
                        case 'meta':
                            if (!e.hasAttribute('itemprop')) break;
                            return e;
                        case 'link':
                            if (((i = e.getAttribute('rel')), i === 'stylesheet' && e.hasAttribute('data-precedence'))) break;
                            if (
                                i !== n.rel ||
                                e.getAttribute('href') !== (n.href == null || n.href === '' ? null : n.href) ||
                                e.getAttribute('crossorigin') !== (n.crossOrigin == null ? null : n.crossOrigin) ||
                                e.getAttribute('title') !== (n.title == null ? null : n.title)
                            )
                                break;
                            return e;
                        case 'style':
                            if (e.hasAttribute('data-precedence')) break;
                            return e;
                        case 'script':
                            if (
                                ((i = e.getAttribute('src')),
                                (i !== (n.src == null ? null : n.src) ||
                                    e.getAttribute('type') !== (n.type == null ? null : n.type) ||
                                    e.getAttribute('crossorigin') !== (n.crossOrigin == null ? null : n.crossOrigin)) &&
                                    i &&
                                    e.hasAttribute('async') &&
                                    !e.hasAttribute('itemprop'))
                            )
                                break;
                            return e;
                        default:
                            return e;
                    }
            } else if (t === 'input' && e.type === 'hidden') {
                var i = n.name == null ? null : '' + n.name;
                if (n.type === 'hidden' && e.getAttribute('name') === i) return e;
            } else return e;
            if (((e = Gt(e.nextSibling)), e === null)) break;
        }
        return null;
    }
    function _g(e, t, l) {
        if (t === '') return null;
        for (; e.nodeType !== 3; )
            if (((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !l) || ((e = Gt(e.nextSibling)), e === null)) return null;
        return e;
    }
    function Gd(e, t) {
        for (; e.nodeType !== 8; )
            if (((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) || ((e = Gt(e.nextSibling)), e === null)) return null;
        return e;
    }
    function Uu(e) {
        return e.data === '$?' || e.data === '$~';
    }
    function Lu(e) {
        return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState !== 'loading');
    }
    function Ug(e, t) {
        var l = e.ownerDocument;
        if (e.data === '$~') e._reactRetry = t;
        else if (e.data !== '$?' || l.readyState !== 'loading') t();
        else {
            var a = function () {
                (t(), l.removeEventListener('DOMContentLoaded', a));
            };
            (l.addEventListener('DOMContentLoaded', a), (e._reactRetry = a));
        }
    }
    function Gt(e) {
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
    var Hu = null;
    function Yd(e) {
        e = e.nextSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === '/$' || l === '/&') {
                    if (t === 0) return Gt(e.nextSibling);
                    t--;
                } else (l !== '$' && l !== '$!' && l !== '$?' && l !== '$~' && l !== '&') || t++;
            }
            e = e.nextSibling;
        }
        return null;
    }
    function Vd(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === '$' || l === '$!' || l === '$?' || l === '$~' || l === '&') {
                    if (t === 0) return e;
                    t--;
                } else (l !== '/$' && l !== '/&') || t++;
            }
            e = e.previousSibling;
        }
        return null;
    }
    function Xd(e, t, l) {
        switch (((t = fs(l)), e)) {
            case 'html':
                if (((e = t.documentElement), !e)) throw Error(r(452));
                return e;
            case 'head':
                if (((e = t.head), !e)) throw Error(r(453));
                return e;
            case 'body':
                if (((e = t.body), !e)) throw Error(r(454));
                return e;
            default:
                throw Error(r(451));
        }
    }
    function Kn(e) {
        for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
        qs(e);
    }
    var Yt = new Map(),
        Qd = new Set();
    function ds(e) {
        return typeof e.getRootNode == 'function' ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    var Sl = L.d;
    L.d = { f: Lg, r: Hg, D: Bg, C: qg, L: Gg, m: Yg, X: Xg, S: Vg, M: Qg };
    function Lg() {
        var e = Sl.f(),
            t = as();
        return e || t;
    }
    function Hg(e) {
        var t = Sa(e);
        t !== null && t.tag === 5 && t.type === 'form' ? uf(t) : Sl.r(e);
    }
    var Ia = typeof document > 'u' ? null : document;
    function Zd(e, t, l) {
        var a = Ia;
        if (a && typeof t == 'string' && t) {
            var n = Ot(t);
            ((n = 'link[rel="' + e + '"][href="' + n + '"]'),
                typeof l == 'string' && (n += '[crossorigin="' + l + '"]'),
                Qd.has(n) ||
                    (Qd.add(n),
                    (e = { rel: e, crossOrigin: l, href: t }),
                    a.querySelector(n) === null && ((t = a.createElement('link')), ot(t, 'link', e), lt(t), a.head.appendChild(t))));
        }
    }
    function Bg(e) {
        (Sl.D(e), Zd('dns-prefetch', e, null));
    }
    function qg(e, t) {
        (Sl.C(e, t), Zd('preconnect', e, t));
    }
    function Gg(e, t, l) {
        Sl.L(e, t, l);
        var a = Ia;
        if (a && e && t) {
            var n = 'link[rel="preload"][as="' + Ot(t) + '"]';
            t === 'image' && l && l.imageSrcSet
                ? ((n += '[imagesrcset="' + Ot(l.imageSrcSet) + '"]'),
                  typeof l.imageSizes == 'string' && (n += '[imagesizes="' + Ot(l.imageSizes) + '"]'))
                : (n += '[href="' + Ot(e) + '"]');
            var i = n;
            switch (t) {
                case 'style':
                    i = Pa(e);
                    break;
                case 'script':
                    i = en(e);
            }
            Yt.has(i) ||
                ((e = D({ rel: 'preload', href: t === 'image' && l && l.imageSrcSet ? void 0 : e, as: t }, l)),
                Yt.set(i, e),
                a.querySelector(n) !== null ||
                    (t === 'style' && a.querySelector(Jn(i))) ||
                    (t === 'script' && a.querySelector(Wn(i))) ||
                    ((t = a.createElement('link')), ot(t, 'link', e), lt(t), a.head.appendChild(t)));
        }
    }
    function Yg(e, t) {
        Sl.m(e, t);
        var l = Ia;
        if (l && e) {
            var a = t && typeof t.as == 'string' ? t.as : 'script',
                n = 'link[rel="modulepreload"][as="' + Ot(a) + '"][href="' + Ot(e) + '"]',
                i = n;
            switch (a) {
                case 'audioworklet':
                case 'paintworklet':
                case 'serviceworker':
                case 'sharedworker':
                case 'worker':
                case 'script':
                    i = en(e);
            }
            if (!Yt.has(i) && ((e = D({ rel: 'modulepreload', href: e }, t)), Yt.set(i, e), l.querySelector(n) === null)) {
                switch (a) {
                    case 'audioworklet':
                    case 'paintworklet':
                    case 'serviceworker':
                    case 'sharedworker':
                    case 'worker':
                    case 'script':
                        if (l.querySelector(Wn(i))) return;
                }
                ((a = l.createElement('link')), ot(a, 'link', e), lt(a), l.head.appendChild(a));
            }
        }
    }
    function Vg(e, t, l) {
        Sl.S(e, t, l);
        var a = Ia;
        if (a && e) {
            var n = xa(a).hoistableStyles,
                i = Pa(e);
            t = t || 'default';
            var s = n.get(i);
            if (!s) {
                var o = { loading: 0, preload: null };
                if ((s = a.querySelector(Jn(i)))) o.loading = 5;
                else {
                    ((e = D({ rel: 'stylesheet', href: e, 'data-precedence': t }, l)), (l = Yt.get(i)) && Bu(e, l));
                    var m = (s = a.createElement('link'));
                    (lt(m),
                        ot(m, 'link', e),
                        (m._p = new Promise(function (C, z) {
                            ((m.onload = C), (m.onerror = z));
                        })),
                        m.addEventListener('load', function () {
                            o.loading |= 1;
                        }),
                        m.addEventListener('error', function () {
                            o.loading |= 2;
                        }),
                        (o.loading |= 4),
                        ms(s, t, a));
                }
                ((s = { type: 'stylesheet', instance: s, count: 1, state: o }), n.set(i, s));
            }
        }
    }
    function Xg(e, t) {
        Sl.X(e, t);
        var l = Ia;
        if (l && e) {
            var a = xa(l).hoistableScripts,
                n = en(e),
                i = a.get(n);
            i ||
                ((i = l.querySelector(Wn(n))),
                i ||
                    ((e = D({ src: e, async: !0 }, t)),
                    (t = Yt.get(n)) && qu(e, t),
                    (i = l.createElement('script')),
                    lt(i),
                    ot(i, 'link', e),
                    l.head.appendChild(i)),
                (i = { type: 'script', instance: i, count: 1, state: null }),
                a.set(n, i));
        }
    }
    function Qg(e, t) {
        Sl.M(e, t);
        var l = Ia;
        if (l && e) {
            var a = xa(l).hoistableScripts,
                n = en(e),
                i = a.get(n);
            i ||
                ((i = l.querySelector(Wn(n))),
                i ||
                    ((e = D({ src: e, async: !0, type: 'module' }, t)),
                    (t = Yt.get(n)) && qu(e, t),
                    (i = l.createElement('script')),
                    lt(i),
                    ot(i, 'link', e),
                    l.head.appendChild(i)),
                (i = { type: 'script', instance: i, count: 1, state: null }),
                a.set(n, i));
        }
    }
    function Kd(e, t, l, a) {
        var n = (n = ce.current) ? ds(n) : null;
        if (!n) throw Error(r(446));
        switch (e) {
            case 'meta':
            case 'title':
                return null;
            case 'style':
                return typeof l.precedence == 'string' && typeof l.href == 'string'
                    ? ((t = Pa(l.href)),
                      (l = xa(n).hoistableStyles),
                      (a = l.get(t)),
                      a || ((a = { type: 'style', instance: null, count: 0, state: null }), l.set(t, a)),
                      a)
                    : { type: 'void', instance: null, count: 0, state: null };
            case 'link':
                if (l.rel === 'stylesheet' && typeof l.href == 'string' && typeof l.precedence == 'string') {
                    e = Pa(l.href);
                    var i = xa(n).hoistableStyles,
                        s = i.get(e);
                    if (
                        (s ||
                            ((n = n.ownerDocument || n),
                            (s = { type: 'stylesheet', instance: null, count: 0, state: { loading: 0, preload: null } }),
                            i.set(e, s),
                            (i = n.querySelector(Jn(e))) && !i._p && ((s.instance = i), (s.state.loading = 5)),
                            Yt.has(e) ||
                                ((l = {
                                    rel: 'preload',
                                    as: 'style',
                                    href: l.href,
                                    crossOrigin: l.crossOrigin,
                                    integrity: l.integrity,
                                    media: l.media,
                                    hrefLang: l.hrefLang,
                                    referrerPolicy: l.referrerPolicy,
                                }),
                                Yt.set(e, l),
                                i || Zg(n, e, l, s.state))),
                        t && a === null)
                    )
                        throw Error(r(528, ''));
                    return s;
                }
                if (t && a !== null) throw Error(r(529, ''));
                return null;
            case 'script':
                return (
                    (t = l.async),
                    (l = l.src),
                    typeof l == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
                        ? ((t = en(l)),
                          (l = xa(n).hoistableScripts),
                          (a = l.get(t)),
                          a || ((a = { type: 'script', instance: null, count: 0, state: null }), l.set(t, a)),
                          a)
                        : { type: 'void', instance: null, count: 0, state: null }
                );
            default:
                throw Error(r(444, e));
        }
    }
    function Pa(e) {
        return 'href="' + Ot(e) + '"';
    }
    function Jn(e) {
        return 'link[rel="stylesheet"][' + e + ']';
    }
    function Jd(e) {
        return D({}, e, { 'data-precedence': e.precedence, precedence: null });
    }
    function Zg(e, t, l, a) {
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
              ot(t, 'link', l),
              lt(t),
              e.head.appendChild(t));
    }
    function en(e) {
        return '[src="' + Ot(e) + '"]';
    }
    function Wn(e) {
        return 'script[async]' + e;
    }
    function Wd(e, t, l) {
        if ((t.count++, t.instance === null))
            switch (t.type) {
                case 'style':
                    var a = e.querySelector('style[data-href~="' + Ot(l.href) + '"]');
                    if (a) return ((t.instance = a), lt(a), a);
                    var n = D({}, l, { 'data-href': l.href, 'data-precedence': l.precedence, href: null, precedence: null });
                    return ((a = (e.ownerDocument || e).createElement('style')), lt(a), ot(a, 'style', n), ms(a, l.precedence, e), (t.instance = a));
                case 'stylesheet':
                    n = Pa(l.href);
                    var i = e.querySelector(Jn(n));
                    if (i) return ((t.state.loading |= 4), (t.instance = i), lt(i), i);
                    ((a = Jd(l)), (n = Yt.get(n)) && Bu(a, n), (i = (e.ownerDocument || e).createElement('link')), lt(i));
                    var s = i;
                    return (
                        (s._p = new Promise(function (o, m) {
                            ((s.onload = o), (s.onerror = m));
                        })),
                        ot(i, 'link', a),
                        (t.state.loading |= 4),
                        ms(i, l.precedence, e),
                        (t.instance = i)
                    );
                case 'script':
                    return (
                        (i = en(l.src)),
                        (n = e.querySelector(Wn(i)))
                            ? ((t.instance = n), lt(n), n)
                            : ((a = l),
                              (n = Yt.get(i)) && ((a = D({}, l)), qu(a, n)),
                              (e = e.ownerDocument || e),
                              (n = e.createElement('script')),
                              lt(n),
                              ot(n, 'link', a),
                              e.head.appendChild(n),
                              (t.instance = n))
                    );
                case 'void':
                    return null;
                default:
                    throw Error(r(443, t.type));
            }
        else t.type === 'stylesheet' && (t.state.loading & 4) === 0 && ((a = t.instance), (t.state.loading |= 4), ms(a, l.precedence, e));
        return t.instance;
    }
    function ms(e, t, l) {
        for (
            var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
                n = a.length ? a[a.length - 1] : null,
                i = n,
                s = 0;
            s < a.length;
            s++
        ) {
            var o = a[s];
            if (o.dataset.precedence === t) i = o;
            else if (i !== n) break;
        }
        i ? i.parentNode.insertBefore(e, i.nextSibling) : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
    }
    function Bu(e, t) {
        (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
            e.title == null && (e.title = t.title));
    }
    function qu(e, t) {
        (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
            e.integrity == null && (e.integrity = t.integrity));
    }
    var hs = null;
    function $d(e, t, l) {
        if (hs === null) {
            var a = new Map(),
                n = (hs = new Map());
            n.set(l, a);
        } else ((n = hs), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
        if (a.has(e)) return a;
        for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
            var i = l[n];
            if (!(i[fn] || i[it] || (e === 'link' && i.getAttribute('rel') === 'stylesheet')) && i.namespaceURI !== 'http://www.w3.org/2000/svg') {
                var s = i.getAttribute(t) || '';
                s = e + s;
                var o = a.get(s);
                o ? o.push(i) : a.set(s, [i]);
            }
        }
        return a;
    }
    function Fd(e, t, l) {
        ((e = e.ownerDocument || e), e.head.insertBefore(l, t === 'title' ? e.querySelector('head > title') : null));
    }
    function Kg(e, t, l) {
        if (l === 1 || t.itemProp != null) return !1;
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
    function Id(e) {
        return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
    }
    function Jg(e, t, l, a) {
        if (l.type === 'stylesheet' && (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
            if (l.instance === null) {
                var n = Pa(a.href),
                    i = t.querySelector(Jn(n));
                if (i) {
                    ((t = i._p),
                        t !== null && typeof t == 'object' && typeof t.then == 'function' && (e.count++, (e = gs.bind(e)), t.then(e, e)),
                        (l.state.loading |= 4),
                        (l.instance = i),
                        lt(i));
                    return;
                }
                ((i = t.ownerDocument || t), (a = Jd(a)), (n = Yt.get(n)) && Bu(a, n), (i = i.createElement('link')), lt(i));
                var s = i;
                ((s._p = new Promise(function (o, m) {
                    ((s.onload = o), (s.onerror = m));
                })),
                    ot(i, 'link', a),
                    (l.instance = i));
            }
            (e.stylesheets === null && (e.stylesheets = new Map()),
                e.stylesheets.set(l, t),
                (t = l.state.preload) &&
                    (l.state.loading & 3) === 0 &&
                    (e.count++, (l = gs.bind(e)), t.addEventListener('load', l), t.addEventListener('error', l)));
        }
    }
    var Gu = 0;
    function Wg(e, t) {
        return (
            e.stylesheets && e.count === 0 && ps(e, e.stylesheets),
            0 < e.count || 0 < e.imgCount
                ? function (l) {
                      var a = setTimeout(function () {
                          if ((e.stylesheets && ps(e, e.stylesheets), e.unsuspend)) {
                              var i = e.unsuspend;
                              ((e.unsuspend = null), i());
                          }
                      }, 6e4 + t);
                      0 < e.imgBytes && Gu === 0 && (Gu = 62500 * Eg());
                      var n = setTimeout(
                          function () {
                              if (((e.waitingForImages = !1), e.count === 0 && (e.stylesheets && ps(e, e.stylesheets), e.unsuspend))) {
                                  var i = e.unsuspend;
                                  ((e.unsuspend = null), i());
                              }
                          },
                          (e.imgBytes > Gu ? 50 : 800) + t
                      );
                      return (
                          (e.unsuspend = l),
                          function () {
                              ((e.unsuspend = null), clearTimeout(a), clearTimeout(n));
                          }
                      );
                  }
                : null
        );
    }
    function gs() {
        if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
            if (this.stylesheets) ps(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                ((this.unsuspend = null), e());
            }
        }
    }
    var vs = null;
    function ps(e, t) {
        ((e.stylesheets = null), e.unsuspend !== null && (e.count++, (vs = new Map()), t.forEach($g, e), (vs = null), gs.call(e)));
    }
    function $g(e, t) {
        if (!(t.state.loading & 4)) {
            var l = vs.get(e);
            if (l) var a = l.get(null);
            else {
                ((l = new Map()), vs.set(e, l));
                for (var n = e.querySelectorAll('link[data-precedence],style[data-precedence]'), i = 0; i < n.length; i++) {
                    var s = n[i];
                    (s.nodeName === 'LINK' || s.getAttribute('media') !== 'not all') && (l.set(s.dataset.precedence, s), (a = s));
                }
                a && l.set(null, a);
            }
            ((n = t.instance),
                (s = n.getAttribute('data-precedence')),
                (i = l.get(s) || a),
                i === a && l.set(null, n),
                l.set(s, n),
                this.count++,
                (a = gs.bind(this)),
                n.addEventListener('load', a),
                n.addEventListener('error', a),
                i ? i.parentNode.insertBefore(n, i.nextSibling) : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(n, e.firstChild)),
                (t.state.loading |= 4));
        }
    }
    var $n = { $$typeof: pe, Provider: null, Consumer: null, _currentValue: k, _currentValue2: k, _threadCount: 0 };
    function Fg(e, t, l, a, n, i, s, o, m) {
        ((this.tag = 1),
            (this.containerInfo = e),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
            (this.callbackPriority = 0),
            (this.expirationTimes = Us(-1)),
            (this.entangledLanes =
                this.shellSuspendCounter =
                this.errorRecoveryDisabledLanes =
                this.expiredLanes =
                this.warmLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = Us(0)),
            (this.hiddenUpdates = Us(null)),
            (this.identifierPrefix = a),
            (this.onUncaughtError = n),
            (this.onCaughtError = i),
            (this.onRecoverableError = s),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = m),
            (this.incompleteTransitions = new Map()));
    }
    function Pd(e, t, l, a, n, i, s, o, m, C, z, R) {
        return (
            (e = new Fg(e, t, l, s, m, C, z, R, o)),
            (t = 1),
            i === !0 && (t |= 24),
            (i = At(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (t = Sc()),
            t.refCount++,
            (e.pooledCache = t),
            t.refCount++,
            (i.memoizedState = { element: a, isDehydrated: l, cache: t }),
            Nc(i),
            e
        );
    }
    function em(e) {
        return e ? ((e = ka), e) : ka;
    }
    function tm(e, t, l, a, n, i) {
        ((n = em(n)),
            a.context === null ? (a.context = n) : (a.pendingContext = n),
            (a = Ml(t)),
            (a.payload = { element: l }),
            (i = i === void 0 ? null : i),
            i !== null && (a.callback = i),
            (l = kl(e, a, t)),
            l !== null && (jt(l, e, t), zn(l, e, t)));
    }
    function lm(e, t) {
        if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
            var l = e.retryLane;
            e.retryLane = l !== 0 && l < t ? l : t;
        }
    }
    function Yu(e, t) {
        (lm(e, t), (e = e.alternate) && lm(e, t));
    }
    function am(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = na(e, 67108864);
            (t !== null && jt(t, e, 67108864), Yu(e, 67108864));
        }
    }
    function nm(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Dt();
            t = Ls(t);
            var l = na(e, t);
            (l !== null && jt(l, e, t), Yu(e, t));
        }
    }
    var ys = !0;
    function Ig(e, t, l, a) {
        var n = b.T;
        b.T = null;
        var i = L.p;
        try {
            ((L.p = 2), Vu(e, t, l, a));
        } finally {
            ((L.p = i), (b.T = n));
        }
    }
    function Pg(e, t, l, a) {
        var n = b.T;
        b.T = null;
        var i = L.p;
        try {
            ((L.p = 8), Vu(e, t, l, a));
        } finally {
            ((L.p = i), (b.T = n));
        }
    }
    function Vu(e, t, l, a) {
        if (ys) {
            var n = Xu(a);
            if (n === null) (Eu(e, t, a, bs, l), sm(e, a));
            else if (tv(n, e, t, l, a)) a.stopPropagation();
            else if ((sm(e, a), t & 4 && -1 < ev.indexOf(e))) {
                for (; n !== null; ) {
                    var i = Sa(n);
                    if (i !== null)
                        switch (i.tag) {
                            case 3:
                                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                                    var s = Pl(i.pendingLanes);
                                    if (s !== 0) {
                                        var o = i;
                                        for (o.pendingLanes |= 2, o.entangledLanes |= 2; s; ) {
                                            var m = 1 << (31 - gt(s));
                                            ((o.entanglements[1] |= m), (s &= ~m));
                                        }
                                        (tl(i), (ke & 6) === 0 && ((ts = ht() + 500), Xn(0)));
                                    }
                                }
                                break;
                            case 31:
                            case 13:
                                ((o = na(i, 2)), o !== null && jt(o, i, 2), as(), Yu(i, 2));
                        }
                    if (((i = Xu(a)), i === null && Eu(e, t, a, bs, l), i === n)) break;
                    n = i;
                }
                n !== null && a.stopPropagation();
            } else Eu(e, t, a, null, l);
        }
    }
    function Xu(e) {
        return ((e = Zs(e)), Qu(e));
    }
    var bs = null;
    function Qu(e) {
        if (((bs = null), (e = ba(e)), e !== null)) {
            var t = T(e);
            if (t === null) e = null;
            else {
                var l = t.tag;
                if (l === 13) {
                    if (((e = A(t)), e !== null)) return e;
                    e = null;
                } else if (l === 31) {
                    if (((e = B(t)), e !== null)) return e;
                    e = null;
                } else if (l === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null;
                } else t !== e && (e = null);
            }
        }
        return ((bs = e), null);
    }
    function im(e) {
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
                switch (Ds()) {
                    case si:
                        return 2;
                    case ci:
                        return 8;
                    case Il:
                    case ui:
                        return 32;
                    case cn:
                        return 268435456;
                    default:
                        return 32;
                }
            default:
                return 32;
        }
    }
    var Zu = !1,
        Yl = null,
        Vl = null,
        Xl = null,
        Fn = new Map(),
        In = new Map(),
        Ql = [],
        ev =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
                ' '
            );
    function sm(e, t) {
        switch (e) {
            case 'focusin':
            case 'focusout':
                Yl = null;
                break;
            case 'dragenter':
            case 'dragleave':
                Vl = null;
                break;
            case 'mouseover':
            case 'mouseout':
                Xl = null;
                break;
            case 'pointerover':
            case 'pointerout':
                Fn.delete(t.pointerId);
                break;
            case 'gotpointercapture':
            case 'lostpointercapture':
                In.delete(t.pointerId);
        }
    }
    function Pn(e, t, l, a, n, i) {
        return e === null || e.nativeEvent !== i
            ? ((e = { blockedOn: t, domEventName: l, eventSystemFlags: a, nativeEvent: i, targetContainers: [n] }),
              t !== null && ((t = Sa(t)), t !== null && am(t)),
              e)
            : ((e.eventSystemFlags |= a), (t = e.targetContainers), n !== null && t.indexOf(n) === -1 && t.push(n), e);
    }
    function tv(e, t, l, a, n) {
        switch (t) {
            case 'focusin':
                return ((Yl = Pn(Yl, e, t, l, a, n)), !0);
            case 'dragenter':
                return ((Vl = Pn(Vl, e, t, l, a, n)), !0);
            case 'mouseover':
                return ((Xl = Pn(Xl, e, t, l, a, n)), !0);
            case 'pointerover':
                var i = n.pointerId;
                return (Fn.set(i, Pn(Fn.get(i) || null, e, t, l, a, n)), !0);
            case 'gotpointercapture':
                return ((i = n.pointerId), In.set(i, Pn(In.get(i) || null, e, t, l, a, n)), !0);
        }
        return !1;
    }
    function cm(e) {
        var t = ba(e.target);
        if (t !== null) {
            var l = T(t);
            if (l !== null) {
                if (((t = l.tag), t === 13)) {
                    if (((t = A(l)), t !== null)) {
                        ((e.blockedOn = t),
                            So(e.priority, function () {
                                nm(l);
                            }));
                        return;
                    }
                } else if (t === 31) {
                    if (((t = B(l)), t !== null)) {
                        ((e.blockedOn = t),
                            So(e.priority, function () {
                                nm(l);
                            }));
                        return;
                    }
                } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        e.blockedOn = null;
    }
    function Ss(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var l = Xu(e.nativeEvent);
            if (l === null) {
                l = e.nativeEvent;
                var a = new l.constructor(l.type, l);
                ((Qs = a), l.target.dispatchEvent(a), (Qs = null));
            } else return ((t = Sa(l)), t !== null && am(t), (e.blockedOn = l), !1);
            t.shift();
        }
        return !0;
    }
    function um(e, t, l) {
        Ss(e) && l.delete(t);
    }
    function lv() {
        ((Zu = !1),
            Yl !== null && Ss(Yl) && (Yl = null),
            Vl !== null && Ss(Vl) && (Vl = null),
            Xl !== null && Ss(Xl) && (Xl = null),
            Fn.forEach(um),
            In.forEach(um));
    }
    function xs(e, t) {
        e.blockedOn === t && ((e.blockedOn = null), Zu || ((Zu = !0), u.unstable_scheduleCallback(u.unstable_NormalPriority, lv)));
    }
    var Cs = null;
    function om(e) {
        Cs !== e &&
            ((Cs = e),
            u.unstable_scheduleCallback(u.unstable_NormalPriority, function () {
                Cs === e && (Cs = null);
                for (var t = 0; t < e.length; t += 3) {
                    var l = e[t],
                        a = e[t + 1],
                        n = e[t + 2];
                    if (typeof a != 'function') {
                        if (Qu(a || l) === null) continue;
                        break;
                    }
                    var i = Sa(l);
                    i !== null && (e.splice(t, 3), (t -= 3), Xc(i, { pending: !0, data: n, method: l.method, action: a }, a, n));
                }
            }));
    }
    function tn(e) {
        function t(m) {
            return xs(m, e);
        }
        (Yl !== null && xs(Yl, e), Vl !== null && xs(Vl, e), Xl !== null && xs(Xl, e), Fn.forEach(t), In.forEach(t));
        for (var l = 0; l < Ql.length; l++) {
            var a = Ql[l];
            a.blockedOn === e && (a.blockedOn = null);
        }
        for (; 0 < Ql.length && ((l = Ql[0]), l.blockedOn === null); ) (cm(l), l.blockedOn === null && Ql.shift());
        if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
            for (a = 0; a < l.length; a += 3) {
                var n = l[a],
                    i = l[a + 1],
                    s = n[pt] || null;
                if (typeof i == 'function') s || om(l);
                else if (s) {
                    var o = null;
                    if (i && i.hasAttribute('formAction')) {
                        if (((n = i), (s = i[pt] || null))) o = s.formAction;
                        else if (Qu(n) !== null) continue;
                    } else o = s.action;
                    (typeof o == 'function' ? (l[a + 1] = o) : (l.splice(a, 3), (a -= 3)), om(l));
                }
            }
    }
    function rm() {
        function e(i) {
            i.canIntercept &&
                i.info === 'react-transition' &&
                i.intercept({
                    handler: function () {
                        return new Promise(function (s) {
                            return (n = s);
                        });
                    },
                    focusReset: 'manual',
                    scroll: 'manual',
                });
        }
        function t() {
            (n !== null && (n(), (n = null)), a || setTimeout(l, 20));
        }
        function l() {
            if (!a && !navigation.transition) {
                var i = navigation.currentEntry;
                i && i.url != null && navigation.navigate(i.url, { state: i.getState(), info: 'react-transition', history: 'replace' });
            }
        }
        if (typeof navigation == 'object') {
            var a = !1,
                n = null;
            return (
                navigation.addEventListener('navigate', e),
                navigation.addEventListener('navigatesuccess', t),
                navigation.addEventListener('navigateerror', t),
                setTimeout(l, 100),
                function () {
                    ((a = !0),
                        navigation.removeEventListener('navigate', e),
                        navigation.removeEventListener('navigatesuccess', t),
                        navigation.removeEventListener('navigateerror', t),
                        n !== null && (n(), (n = null)));
                }
            );
        }
    }
    function Ku(e) {
        this._internalRoot = e;
    }
    ((js.prototype.render = Ku.prototype.render =
        function (e) {
            var t = this._internalRoot;
            if (t === null) throw Error(r(409));
            var l = t.current,
                a = Dt();
            tm(l, a, e, t, null, null);
        }),
        (js.prototype.unmount = Ku.prototype.unmount =
            function () {
                var e = this._internalRoot;
                if (e !== null) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    (tm(e.current, 2, null, e, null, null), as(), (t[ya] = null));
                }
            }));
    function js(e) {
        this._internalRoot = e;
    }
    js.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = bo();
            e = { blockedOn: null, target: e, priority: t };
            for (var l = 0; l < Ql.length && t !== 0 && t < Ql[l].priority; l++);
            (Ql.splice(l, 0, e), l === 0 && cm(e));
        }
    };
    var fm = d.version;
    if (fm !== '19.2.0') throw Error(r(527, fm, '19.2.0'));
    L.findDOMNode = function (e) {
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == 'function' ? Error(r(188)) : ((e = Object.keys(e).join(',')), Error(r(268, e)));
        return ((e = S(t)), (e = e !== null ? O(e) : null), (e = e === null ? null : e.stateNode), e);
    };
    var av = { bundleType: 0, version: '19.2.0', rendererPackageName: 'react-dom', currentDispatcherRef: b, reconcilerVersion: '19.2.0' };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
        var Ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Ns.isDisabled && Ns.supportsFiber)
            try {
                ((Z = Ns.inject(av)), (Ye = Ns));
            } catch {}
    }
    return (
        (ti.createRoot = function (e, t) {
            if (!p(e)) throw Error(r(299));
            var l = !1,
                a = '',
                n = yf,
                i = bf,
                s = Sf;
            return (
                t != null &&
                    (t.unstable_strictMode === !0 && (l = !0),
                    t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
                    t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
                    t.onCaughtError !== void 0 && (i = t.onCaughtError),
                    t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
                (t = Pd(e, 1, !1, null, null, l, a, null, n, i, s, rm)),
                (e[ya] = t.current),
                zu(e),
                new Ku(t)
            );
        }),
        (ti.hydrateRoot = function (e, t, l) {
            if (!p(e)) throw Error(r(299));
            var a = !1,
                n = '',
                i = yf,
                s = bf,
                o = Sf,
                m = null;
            return (
                l != null &&
                    (l.unstable_strictMode === !0 && (a = !0),
                    l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
                    l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
                    l.onCaughtError !== void 0 && (s = l.onCaughtError),
                    l.onRecoverableError !== void 0 && (o = l.onRecoverableError),
                    l.formState !== void 0 && (m = l.formState)),
                (t = Pd(e, 1, !0, t, l ?? null, a, n, m, i, s, o, rm)),
                (t.context = em(null)),
                (l = t.current),
                (a = Dt()),
                (a = Ls(a)),
                (n = Ml(a)),
                (n.callback = null),
                kl(l, n, a),
                (l = a),
                (t.current.lanes = l),
                rn(t, l),
                tl(t),
                (e[ya] = t.current),
                zu(e),
                new js(t)
            );
        }),
        (ti.version = '19.2.0'),
        ti
    );
}
var xm;
function gv() {
    if (xm) return $u.exports;
    xm = 1;
    function u() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (d) {
                console.error(d);
            }
    }
    return (u(), ($u.exports = hv()), $u.exports);
}
var vv = gv();
class pv extends v.Component {
    constructor(d) {
        (super(d), (this.state = { hasError: !1 }));
    }
    static getDerivedStateFromError(d) {
        return { hasError: !0, error: d };
    }
    componentDidCatch(d, f) {
        console.error('React Error Boundary caught an error:', d, f);
    }
    render() {
        return this.state.hasError
            ? c.jsxs('div', {
                  className: 'error-boundary',
                  children: [
                      c.jsx('h2', { children: 'Something went wrong' }),
                      c.jsx('button', { onClick: () => window.location.reload(), children: 'Reload Application' }),
                  ],
              })
            : this.props.children;
    }
}
function Cm(u, d) {
    if (typeof u == 'function') return u(d);
    u != null && (u.current = d);
}
function yv(...u) {
    return d => {
        let f = !1;
        const r = u.map(p => {
            const T = Cm(p, d);
            return (!f && typeof T == 'function' && (f = !0), T);
        });
        if (f)
            return () => {
                for (let p = 0; p < r.length; p++) {
                    const T = r[p];
                    typeof T == 'function' ? T() : Cm(u[p], null);
                }
            };
    };
}
function bv(u) {
    const d = xv(u),
        f = v.forwardRef((r, p) => {
            const { children: T, ...A } = r,
                B = v.Children.toArray(T),
                N = B.find(jv);
            if (N) {
                const S = N.props.children,
                    O = B.map(D => (D === N ? (v.Children.count(S) > 1 ? v.Children.only(null) : v.isValidElement(S) ? S.props.children : null) : D));
                return c.jsx(d, { ...A, ref: p, children: v.isValidElement(S) ? v.cloneElement(S, void 0, O) : null });
            }
            return c.jsx(d, { ...A, ref: p, children: T });
        });
    return ((f.displayName = `${u}.Slot`), f);
}
var Sv = bv('Slot');
function xv(u) {
    const d = v.forwardRef((f, r) => {
        const { children: p, ...T } = f;
        if (v.isValidElement(p)) {
            const A = Tv(p),
                B = Nv(T, p.props);
            return (p.type !== v.Fragment && (B.ref = r ? yv(r, A) : A), v.cloneElement(p, B));
        }
        return v.Children.count(p) > 1 ? v.Children.only(null) : null;
    });
    return ((d.displayName = `${u}.SlotClone`), d);
}
var Cv = Symbol('radix.slottable');
function jv(u) {
    return v.isValidElement(u) && typeof u.type == 'function' && '__radixId' in u.type && u.type.__radixId === Cv;
}
function Nv(u, d) {
    const f = { ...d };
    for (const r in d) {
        const p = u[r],
            T = d[r];
        /^on[A-Z]/.test(r)
            ? p && T
                ? (f[r] = (...B) => {
                      const N = T(...B);
                      return (p(...B), N);
                  })
                : p && (f[r] = p)
            : r === 'style'
              ? (f[r] = { ...p, ...T })
              : r === 'className' && (f[r] = [p, T].filter(Boolean).join(' '));
    }
    return { ...u, ...f };
}
function Tv(u) {
    let d = Object.getOwnPropertyDescriptor(u.props, 'ref')?.get,
        f = d && 'isReactWarning' in d && d.isReactWarning;
    return f
        ? u.ref
        : ((d = Object.getOwnPropertyDescriptor(u, 'ref')?.get),
          (f = d && 'isReactWarning' in d && d.isReactWarning),
          f ? u.props.ref : u.props.ref || u.ref);
}
function Em(u) {
    var d,
        f,
        r = '';
    if (typeof u == 'string' || typeof u == 'number') r += u;
    else if (typeof u == 'object')
        if (Array.isArray(u)) {
            var p = u.length;
            for (d = 0; d < p; d++) u[d] && (f = Em(u[d])) && (r && (r += ' '), (r += f));
        } else for (f in u) u[f] && (r && (r += ' '), (r += f));
    return r;
}
function Mm() {
    for (var u, d, f = 0, r = '', p = arguments.length; f < p; f++) (u = arguments[f]) && (d = Em(u)) && (r && (r += ' '), (r += d));
    return r;
}
const jm = u => (typeof u == 'boolean' ? `${u}` : u === 0 ? '0' : u),
    Nm = Mm,
    wv = (u, d) => f => {
        var r;
        if (d?.variants == null) return Nm(u, f?.class, f?.className);
        const { variants: p, defaultVariants: T } = d,
            A = Object.keys(p).map(S => {
                const O = f?.[S],
                    D = T?.[S];
                if (O === null) return null;
                const V = jm(O) || jm(D);
                return p[S][V];
            }),
            B =
                f &&
                Object.entries(f).reduce((S, O) => {
                    let [D, V] = O;
                    return (V === void 0 || (S[D] = V), S);
                }, {}),
            N =
                d == null || (r = d.compoundVariants) === null || r === void 0
                    ? void 0
                    : r.reduce((S, O) => {
                          let { class: D, className: V, ...ae } = O;
                          return Object.entries(ae).every(X => {
                              let [Q, F] = X;
                              return Array.isArray(F) ? F.includes({ ...T, ...B }[Q]) : { ...T, ...B }[Q] === F;
                          })
                              ? [...S, D, V]
                              : S;
                      }, []);
        return Nm(u, A, N, f?.class, f?.className);
    },
    uo = '-',
    Av = u => {
        const d = Ev(u),
            { conflictingClassGroups: f, conflictingClassGroupModifiers: r } = u;
        return {
            getClassGroupId: A => {
                const B = A.split(uo);
                return (B[0] === '' && B.length !== 1 && B.shift(), km(B, d) || zv(A));
            },
            getConflictingClassGroupIds: (A, B) => {
                const N = f[A] || [];
                return B && r[A] ? [...N, ...r[A]] : N;
            },
        };
    },
    km = (u, d) => {
        if (u.length === 0) return d.classGroupId;
        const f = u[0],
            r = d.nextPart.get(f),
            p = r ? km(u.slice(1), r) : void 0;
        if (p) return p;
        if (d.validators.length === 0) return;
        const T = u.join(uo);
        return d.validators.find(({ validator: A }) => A(T))?.classGroupId;
    },
    Tm = /^\[(.+)\]$/,
    zv = u => {
        if (Tm.test(u)) {
            const d = Tm.exec(u)[1],
                f = d?.substring(0, d.indexOf(':'));
            if (f) return 'arbitrary..' + f;
        }
    },
    Ev = u => {
        const { theme: d, classGroups: f } = u,
            r = { nextPart: new Map(), validators: [] };
        for (const p in f) ao(f[p], r, p, d);
        return r;
    },
    ao = (u, d, f, r) => {
        u.forEach(p => {
            if (typeof p == 'string') {
                const T = p === '' ? d : wm(d, p);
                T.classGroupId = f;
                return;
            }
            if (typeof p == 'function') {
                if (Mv(p)) {
                    ao(p(r), d, f, r);
                    return;
                }
                d.validators.push({ validator: p, classGroupId: f });
                return;
            }
            Object.entries(p).forEach(([T, A]) => {
                ao(A, wm(d, T), f, r);
            });
        });
    },
    wm = (u, d) => {
        let f = u;
        return (
            d.split(uo).forEach(r => {
                (f.nextPart.has(r) || f.nextPart.set(r, { nextPart: new Map(), validators: [] }), (f = f.nextPart.get(r)));
            }),
            f
        );
    },
    Mv = u => u.isThemeGetter,
    kv = u => {
        if (u < 1) return { get: () => {}, set: () => {} };
        let d = 0,
            f = new Map(),
            r = new Map();
        const p = (T, A) => {
            (f.set(T, A), d++, d > u && ((d = 0), (r = f), (f = new Map())));
        };
        return {
            get(T) {
                let A = f.get(T);
                if (A !== void 0) return A;
                if ((A = r.get(T)) !== void 0) return (p(T, A), A);
            },
            set(T, A) {
                f.has(T) ? f.set(T, A) : p(T, A);
            },
        };
    },
    no = '!',
    io = ':',
    Dv = io.length,
    Rv = u => {
        const { prefix: d, experimentalParseClassName: f } = u;
        let r = p => {
            const T = [];
            let A = 0,
                B = 0,
                N = 0,
                S;
            for (let X = 0; X < p.length; X++) {
                let Q = p[X];
                if (A === 0 && B === 0) {
                    if (Q === io) {
                        (T.push(p.slice(N, X)), (N = X + Dv));
                        continue;
                    }
                    if (Q === '/') {
                        S = X;
                        continue;
                    }
                }
                Q === '[' ? A++ : Q === ']' ? A-- : Q === '(' ? B++ : Q === ')' && B--;
            }
            const O = T.length === 0 ? p : p.substring(N),
                D = Ov(O),
                V = D !== O,
                ae = S && S > N ? S - N : void 0;
            return { modifiers: T, hasImportantModifier: V, baseClassName: D, maybePostfixModifierPosition: ae };
        };
        if (d) {
            const p = d + io,
                T = r;
            r = A =>
                A.startsWith(p)
                    ? T(A.substring(p.length))
                    : { isExternal: !0, modifiers: [], hasImportantModifier: !1, baseClassName: A, maybePostfixModifierPosition: void 0 };
        }
        if (f) {
            const p = r;
            r = T => f({ className: T, parseClassName: p });
        }
        return r;
    },
    Ov = u => (u.endsWith(no) ? u.substring(0, u.length - 1) : u.startsWith(no) ? u.substring(1) : u),
    _v = u => {
        const d = Object.fromEntries(u.orderSensitiveModifiers.map(r => [r, !0]));
        return r => {
            if (r.length <= 1) return r;
            const p = [];
            let T = [];
            return (
                r.forEach(A => {
                    A[0] === '[' || d[A] ? (p.push(...T.sort(), A), (T = [])) : T.push(A);
                }),
                p.push(...T.sort()),
                p
            );
        };
    },
    Uv = u => ({ cache: kv(u.cacheSize), parseClassName: Rv(u), sortModifiers: _v(u), ...Av(u) }),
    Lv = /\s+/,
    Hv = (u, d) => {
        const { parseClassName: f, getClassGroupId: r, getConflictingClassGroupIds: p, sortModifiers: T } = d,
            A = [],
            B = u.trim().split(Lv);
        let N = '';
        for (let S = B.length - 1; S >= 0; S -= 1) {
            const O = B[S],
                { isExternal: D, modifiers: V, hasImportantModifier: ae, baseClassName: X, maybePostfixModifierPosition: Q } = f(O);
            if (D) {
                N = O + (N.length > 0 ? ' ' + N : N);
                continue;
            }
            let F = !!Q,
                ve = r(F ? X.substring(0, Q) : X);
            if (!ve) {
                if (!F) {
                    N = O + (N.length > 0 ? ' ' + N : N);
                    continue;
                }
                if (((ve = r(X)), !ve)) {
                    N = O + (N.length > 0 ? ' ' + N : N);
                    continue;
                }
                F = !1;
            }
            const Ae = T(V).join(':'),
                pe = ae ? Ae + no : Ae,
                ye = pe + ve;
            if (A.includes(ye)) continue;
            A.push(ye);
            const je = p(ve, F);
            for (let xe = 0; xe < je.length; ++xe) {
                const G = je[xe];
                A.push(pe + G);
            }
            N = O + (N.length > 0 ? ' ' + N : N);
        }
        return N;
    };
function Bv() {
    let u = 0,
        d,
        f,
        r = '';
    for (; u < arguments.length; ) (d = arguments[u++]) && (f = Dm(d)) && (r && (r += ' '), (r += f));
    return r;
}
const Dm = u => {
    if (typeof u == 'string') return u;
    let d,
        f = '';
    for (let r = 0; r < u.length; r++) u[r] && (d = Dm(u[r])) && (f && (f += ' '), (f += d));
    return f;
};
function qv(u, ...d) {
    let f,
        r,
        p,
        T = A;
    function A(N) {
        const S = d.reduce((O, D) => D(O), u());
        return ((f = Uv(S)), (r = f.cache.get), (p = f.cache.set), (T = B), B(N));
    }
    function B(N) {
        const S = r(N);
        if (S) return S;
        const O = Hv(N, f);
        return (p(N, O), O);
    }
    return function () {
        return T(Bv.apply(null, arguments));
    };
}
const tt = u => {
        const d = f => f[u] || [];
        return ((d.isThemeGetter = !0), d);
    },
    Rm = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    Om = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    Gv = /^\d+\/\d+$/,
    Yv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    Vv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Xv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    Qv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    Zv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    ln = u => Gv.test(u),
    me = u => !!u && !Number.isNaN(Number(u)),
    Kl = u => !!u && Number.isInteger(Number(u)),
    eo = u => u.endsWith('%') && me(u.slice(0, -1)),
    xl = u => Yv.test(u),
    Kv = () => !0,
    Jv = u => Vv.test(u) && !Xv.test(u),
    _m = () => !1,
    Wv = u => Qv.test(u),
    $v = u => Zv.test(u),
    Fv = u => !J(u) && !W(u),
    Iv = u => nn(u, Hm, _m),
    J = u => Rm.test(u),
    pa = u => nn(u, Bm, Jv),
    to = u => nn(u, ap, me),
    Am = u => nn(u, Um, _m),
    Pv = u => nn(u, Lm, $v),
    Ts = u => nn(u, qm, Wv),
    W = u => Om.test(u),
    li = u => sn(u, Bm),
    ep = u => sn(u, np),
    zm = u => sn(u, Um),
    tp = u => sn(u, Hm),
    lp = u => sn(u, Lm),
    ws = u => sn(u, qm, !0),
    nn = (u, d, f) => {
        const r = Rm.exec(u);
        return r ? (r[1] ? d(r[1]) : f(r[2])) : !1;
    },
    sn = (u, d, f = !1) => {
        const r = Om.exec(u);
        return r ? (r[1] ? d(r[1]) : f) : !1;
    },
    Um = u => u === 'position' || u === 'percentage',
    Lm = u => u === 'image' || u === 'url',
    Hm = u => u === 'length' || u === 'size' || u === 'bg-size',
    Bm = u => u === 'length',
    ap = u => u === 'number',
    np = u => u === 'family-name',
    qm = u => u === 'shadow',
    ip = () => {
        const u = tt('color'),
            d = tt('font'),
            f = tt('text'),
            r = tt('font-weight'),
            p = tt('tracking'),
            T = tt('leading'),
            A = tt('breakpoint'),
            B = tt('container'),
            N = tt('spacing'),
            S = tt('radius'),
            O = tt('shadow'),
            D = tt('inset-shadow'),
            V = tt('text-shadow'),
            ae = tt('drop-shadow'),
            X = tt('blur'),
            Q = tt('perspective'),
            F = tt('aspect'),
            ve = tt('ease'),
            Ae = tt('animate'),
            pe = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
            ye = () => [
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
            je = () => [...ye(), W, J],
            xe = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
            G = () => ['auto', 'contain', 'none'],
            Y = () => [W, J, N],
            ue = () => [ln, 'full', 'auto', ...Y()],
            ne = () => [Kl, 'none', 'subgrid', W, J],
            He = () => ['auto', { span: ['full', Kl, W, J] }, Kl, W, J],
            oe = () => [Kl, 'auto', W, J],
            Ne = () => ['auto', 'min', 'max', 'fr', W, J],
            Te = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch', 'baseline', 'center-safe', 'end-safe'],
            H = () => ['start', 'end', 'center', 'stretch', 'center-safe', 'end-safe'],
            b = () => ['auto', ...Y()],
            L = () => [ln, 'auto', 'full', 'dvw', 'dvh', 'lvw', 'lvh', 'svw', 'svh', 'min', 'max', 'fit', ...Y()],
            k = () => [u, W, J],
            I = () => [...ye(), zm, Am, { position: [W, J] }],
            se = () => ['no-repeat', { repeat: ['', 'x', 'y', 'space', 'round'] }],
            h = () => ['auto', 'cover', 'contain', tp, Iv, { size: [W, J] }],
            E = () => [eo, li, pa],
            U = () => ['', 'none', 'full', S, W, J],
            q = () => ['', me, li, pa],
            te = () => ['solid', 'dashed', 'dotted', 'double'],
            ce = () => [
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
            P = () => [me, eo, zm, Am],
            Be = () => ['', 'none', X, W, J],
            we = () => ['none', me, W, J],
            nt = () => ['none', me, W, J],
            dt = () => [me, W, J],
            mt = () => [ln, 'full', ...Y()];
        return {
            cacheSize: 500,
            theme: {
                animate: ['spin', 'ping', 'pulse', 'bounce'],
                aspect: ['video'],
                blur: [xl],
                breakpoint: [xl],
                color: [Kv],
                container: [xl],
                'drop-shadow': [xl],
                ease: ['in', 'out', 'in-out'],
                font: [Fv],
                'font-weight': ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
                'inset-shadow': [xl],
                leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
                perspective: ['dramatic', 'near', 'normal', 'midrange', 'distant', 'none'],
                radius: [xl],
                shadow: [xl],
                spacing: ['px', me],
                text: [xl],
                'text-shadow': [xl],
                tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
            },
            classGroups: {
                aspect: [{ aspect: ['auto', 'square', ln, J, W, F] }],
                container: ['container'],
                columns: [{ columns: [me, J, W, B] }],
                'break-after': [{ 'break-after': pe() }],
                'break-before': [{ 'break-before': pe() }],
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
                'object-position': [{ object: je() }],
                overflow: [{ overflow: xe() }],
                'overflow-x': [{ 'overflow-x': xe() }],
                'overflow-y': [{ 'overflow-y': xe() }],
                overscroll: [{ overscroll: G() }],
                'overscroll-x': [{ 'overscroll-x': G() }],
                'overscroll-y': [{ 'overscroll-y': G() }],
                position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
                inset: [{ inset: ue() }],
                'inset-x': [{ 'inset-x': ue() }],
                'inset-y': [{ 'inset-y': ue() }],
                start: [{ start: ue() }],
                end: [{ end: ue() }],
                top: [{ top: ue() }],
                right: [{ right: ue() }],
                bottom: [{ bottom: ue() }],
                left: [{ left: ue() }],
                visibility: ['visible', 'invisible', 'collapse'],
                z: [{ z: [Kl, 'auto', W, J] }],
                basis: [{ basis: [ln, 'full', 'auto', B, ...Y()] }],
                'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
                'flex-wrap': [{ flex: ['nowrap', 'wrap', 'wrap-reverse'] }],
                flex: [{ flex: [me, ln, 'auto', 'initial', 'none', J] }],
                grow: [{ grow: ['', me, W, J] }],
                shrink: [{ shrink: ['', me, W, J] }],
                order: [{ order: [Kl, 'first', 'last', 'none', W, J] }],
                'grid-cols': [{ 'grid-cols': ne() }],
                'col-start-end': [{ col: He() }],
                'col-start': [{ 'col-start': oe() }],
                'col-end': [{ 'col-end': oe() }],
                'grid-rows': [{ 'grid-rows': ne() }],
                'row-start-end': [{ row: He() }],
                'row-start': [{ 'row-start': oe() }],
                'row-end': [{ 'row-end': oe() }],
                'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
                'auto-cols': [{ 'auto-cols': Ne() }],
                'auto-rows': [{ 'auto-rows': Ne() }],
                gap: [{ gap: Y() }],
                'gap-x': [{ 'gap-x': Y() }],
                'gap-y': [{ 'gap-y': Y() }],
                'justify-content': [{ justify: [...Te(), 'normal'] }],
                'justify-items': [{ 'justify-items': [...H(), 'normal'] }],
                'justify-self': [{ 'justify-self': ['auto', ...H()] }],
                'align-content': [{ content: ['normal', ...Te()] }],
                'align-items': [{ items: [...H(), { baseline: ['', 'last'] }] }],
                'align-self': [{ self: ['auto', ...H(), { baseline: ['', 'last'] }] }],
                'place-content': [{ 'place-content': Te() }],
                'place-items': [{ 'place-items': [...H(), 'baseline'] }],
                'place-self': [{ 'place-self': ['auto', ...H()] }],
                p: [{ p: Y() }],
                px: [{ px: Y() }],
                py: [{ py: Y() }],
                ps: [{ ps: Y() }],
                pe: [{ pe: Y() }],
                pt: [{ pt: Y() }],
                pr: [{ pr: Y() }],
                pb: [{ pb: Y() }],
                pl: [{ pl: Y() }],
                m: [{ m: b() }],
                mx: [{ mx: b() }],
                my: [{ my: b() }],
                ms: [{ ms: b() }],
                me: [{ me: b() }],
                mt: [{ mt: b() }],
                mr: [{ mr: b() }],
                mb: [{ mb: b() }],
                ml: [{ ml: b() }],
                'space-x': [{ 'space-x': Y() }],
                'space-x-reverse': ['space-x-reverse'],
                'space-y': [{ 'space-y': Y() }],
                'space-y-reverse': ['space-y-reverse'],
                size: [{ size: L() }],
                w: [{ w: [B, 'screen', ...L()] }],
                'min-w': [{ 'min-w': [B, 'screen', 'none', ...L()] }],
                'max-w': [{ 'max-w': [B, 'screen', 'none', 'prose', { screen: [A] }, ...L()] }],
                h: [{ h: ['screen', 'lh', ...L()] }],
                'min-h': [{ 'min-h': ['screen', 'lh', 'none', ...L()] }],
                'max-h': [{ 'max-h': ['screen', 'lh', ...L()] }],
                'font-size': [{ text: ['base', f, li, pa] }],
                'font-smoothing': ['antialiased', 'subpixel-antialiased'],
                'font-style': ['italic', 'not-italic'],
                'font-weight': [{ font: [r, W, to] }],
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
                            eo,
                            J,
                        ],
                    },
                ],
                'font-family': [{ font: [ep, J, d] }],
                'fvn-normal': ['normal-nums'],
                'fvn-ordinal': ['ordinal'],
                'fvn-slashed-zero': ['slashed-zero'],
                'fvn-figure': ['lining-nums', 'oldstyle-nums'],
                'fvn-spacing': ['proportional-nums', 'tabular-nums'],
                'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
                tracking: [{ tracking: [p, W, J] }],
                'line-clamp': [{ 'line-clamp': [me, 'none', W, to] }],
                leading: [{ leading: [T, ...Y()] }],
                'list-image': [{ 'list-image': ['none', W, J] }],
                'list-style-position': [{ list: ['inside', 'outside'] }],
                'list-style-type': [{ list: ['disc', 'decimal', 'none', W, J] }],
                'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
                'placeholder-color': [{ placeholder: k() }],
                'text-color': [{ text: k() }],
                'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
                'text-decoration-style': [{ decoration: [...te(), 'wavy'] }],
                'text-decoration-thickness': [{ decoration: [me, 'from-font', 'auto', W, pa] }],
                'text-decoration-color': [{ decoration: k() }],
                'underline-offset': [{ 'underline-offset': [me, 'auto', W, J] }],
                'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
                'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
                'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
                indent: [{ indent: Y() }],
                'vertical-align': [{ align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', W, J] }],
                whitespace: [{ whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] }],
                break: [{ break: ['normal', 'words', 'all', 'keep'] }],
                wrap: [{ wrap: ['break-word', 'anywhere', 'normal'] }],
                hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
                content: [{ content: ['none', W, J] }],
                'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
                'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
                'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
                'bg-position': [{ bg: I() }],
                'bg-repeat': [{ bg: se() }],
                'bg-size': [{ bg: h() }],
                'bg-image': [
                    {
                        bg: [
                            'none',
                            { linear: [{ to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, Kl, W, J], radial: ['', W, J], conic: [Kl, W, J] },
                            lp,
                            Pv,
                        ],
                    },
                ],
                'bg-color': [{ bg: k() }],
                'gradient-from-pos': [{ from: E() }],
                'gradient-via-pos': [{ via: E() }],
                'gradient-to-pos': [{ to: E() }],
                'gradient-from': [{ from: k() }],
                'gradient-via': [{ via: k() }],
                'gradient-to': [{ to: k() }],
                rounded: [{ rounded: U() }],
                'rounded-s': [{ 'rounded-s': U() }],
                'rounded-e': [{ 'rounded-e': U() }],
                'rounded-t': [{ 'rounded-t': U() }],
                'rounded-r': [{ 'rounded-r': U() }],
                'rounded-b': [{ 'rounded-b': U() }],
                'rounded-l': [{ 'rounded-l': U() }],
                'rounded-ss': [{ 'rounded-ss': U() }],
                'rounded-se': [{ 'rounded-se': U() }],
                'rounded-ee': [{ 'rounded-ee': U() }],
                'rounded-es': [{ 'rounded-es': U() }],
                'rounded-tl': [{ 'rounded-tl': U() }],
                'rounded-tr': [{ 'rounded-tr': U() }],
                'rounded-br': [{ 'rounded-br': U() }],
                'rounded-bl': [{ 'rounded-bl': U() }],
                'border-w': [{ border: q() }],
                'border-w-x': [{ 'border-x': q() }],
                'border-w-y': [{ 'border-y': q() }],
                'border-w-s': [{ 'border-s': q() }],
                'border-w-e': [{ 'border-e': q() }],
                'border-w-t': [{ 'border-t': q() }],
                'border-w-r': [{ 'border-r': q() }],
                'border-w-b': [{ 'border-b': q() }],
                'border-w-l': [{ 'border-l': q() }],
                'divide-x': [{ 'divide-x': q() }],
                'divide-x-reverse': ['divide-x-reverse'],
                'divide-y': [{ 'divide-y': q() }],
                'divide-y-reverse': ['divide-y-reverse'],
                'border-style': [{ border: [...te(), 'hidden', 'none'] }],
                'divide-style': [{ divide: [...te(), 'hidden', 'none'] }],
                'border-color': [{ border: k() }],
                'border-color-x': [{ 'border-x': k() }],
                'border-color-y': [{ 'border-y': k() }],
                'border-color-s': [{ 'border-s': k() }],
                'border-color-e': [{ 'border-e': k() }],
                'border-color-t': [{ 'border-t': k() }],
                'border-color-r': [{ 'border-r': k() }],
                'border-color-b': [{ 'border-b': k() }],
                'border-color-l': [{ 'border-l': k() }],
                'divide-color': [{ divide: k() }],
                'outline-style': [{ outline: [...te(), 'none', 'hidden'] }],
                'outline-offset': [{ 'outline-offset': [me, W, J] }],
                'outline-w': [{ outline: ['', me, li, pa] }],
                'outline-color': [{ outline: k() }],
                shadow: [{ shadow: ['', 'none', O, ws, Ts] }],
                'shadow-color': [{ shadow: k() }],
                'inset-shadow': [{ 'inset-shadow': ['none', D, ws, Ts] }],
                'inset-shadow-color': [{ 'inset-shadow': k() }],
                'ring-w': [{ ring: q() }],
                'ring-w-inset': ['ring-inset'],
                'ring-color': [{ ring: k() }],
                'ring-offset-w': [{ 'ring-offset': [me, pa] }],
                'ring-offset-color': [{ 'ring-offset': k() }],
                'inset-ring-w': [{ 'inset-ring': q() }],
                'inset-ring-color': [{ 'inset-ring': k() }],
                'text-shadow': [{ 'text-shadow': ['none', V, ws, Ts] }],
                'text-shadow-color': [{ 'text-shadow': k() }],
                opacity: [{ opacity: [me, W, J] }],
                'mix-blend': [{ 'mix-blend': [...ce(), 'plus-darker', 'plus-lighter'] }],
                'bg-blend': [{ 'bg-blend': ce() }],
                'mask-clip': [{ 'mask-clip': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] }, 'mask-no-clip'],
                'mask-composite': [{ mask: ['add', 'subtract', 'intersect', 'exclude'] }],
                'mask-image-linear-pos': [{ 'mask-linear': [me] }],
                'mask-image-linear-from-pos': [{ 'mask-linear-from': P() }],
                'mask-image-linear-to-pos': [{ 'mask-linear-to': P() }],
                'mask-image-linear-from-color': [{ 'mask-linear-from': k() }],
                'mask-image-linear-to-color': [{ 'mask-linear-to': k() }],
                'mask-image-t-from-pos': [{ 'mask-t-from': P() }],
                'mask-image-t-to-pos': [{ 'mask-t-to': P() }],
                'mask-image-t-from-color': [{ 'mask-t-from': k() }],
                'mask-image-t-to-color': [{ 'mask-t-to': k() }],
                'mask-image-r-from-pos': [{ 'mask-r-from': P() }],
                'mask-image-r-to-pos': [{ 'mask-r-to': P() }],
                'mask-image-r-from-color': [{ 'mask-r-from': k() }],
                'mask-image-r-to-color': [{ 'mask-r-to': k() }],
                'mask-image-b-from-pos': [{ 'mask-b-from': P() }],
                'mask-image-b-to-pos': [{ 'mask-b-to': P() }],
                'mask-image-b-from-color': [{ 'mask-b-from': k() }],
                'mask-image-b-to-color': [{ 'mask-b-to': k() }],
                'mask-image-l-from-pos': [{ 'mask-l-from': P() }],
                'mask-image-l-to-pos': [{ 'mask-l-to': P() }],
                'mask-image-l-from-color': [{ 'mask-l-from': k() }],
                'mask-image-l-to-color': [{ 'mask-l-to': k() }],
                'mask-image-x-from-pos': [{ 'mask-x-from': P() }],
                'mask-image-x-to-pos': [{ 'mask-x-to': P() }],
                'mask-image-x-from-color': [{ 'mask-x-from': k() }],
                'mask-image-x-to-color': [{ 'mask-x-to': k() }],
                'mask-image-y-from-pos': [{ 'mask-y-from': P() }],
                'mask-image-y-to-pos': [{ 'mask-y-to': P() }],
                'mask-image-y-from-color': [{ 'mask-y-from': k() }],
                'mask-image-y-to-color': [{ 'mask-y-to': k() }],
                'mask-image-radial': [{ 'mask-radial': [W, J] }],
                'mask-image-radial-from-pos': [{ 'mask-radial-from': P() }],
                'mask-image-radial-to-pos': [{ 'mask-radial-to': P() }],
                'mask-image-radial-from-color': [{ 'mask-radial-from': k() }],
                'mask-image-radial-to-color': [{ 'mask-radial-to': k() }],
                'mask-image-radial-shape': [{ 'mask-radial': ['circle', 'ellipse'] }],
                'mask-image-radial-size': [{ 'mask-radial': [{ closest: ['side', 'corner'], farthest: ['side', 'corner'] }] }],
                'mask-image-radial-pos': [{ 'mask-radial-at': ye() }],
                'mask-image-conic-pos': [{ 'mask-conic': [me] }],
                'mask-image-conic-from-pos': [{ 'mask-conic-from': P() }],
                'mask-image-conic-to-pos': [{ 'mask-conic-to': P() }],
                'mask-image-conic-from-color': [{ 'mask-conic-from': k() }],
                'mask-image-conic-to-color': [{ 'mask-conic-to': k() }],
                'mask-mode': [{ mask: ['alpha', 'luminance', 'match'] }],
                'mask-origin': [{ 'mask-origin': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] }],
                'mask-position': [{ mask: I() }],
                'mask-repeat': [{ mask: se() }],
                'mask-size': [{ mask: h() }],
                'mask-type': [{ 'mask-type': ['alpha', 'luminance'] }],
                'mask-image': [{ mask: ['none', W, J] }],
                filter: [{ filter: ['', 'none', W, J] }],
                blur: [{ blur: Be() }],
                brightness: [{ brightness: [me, W, J] }],
                contrast: [{ contrast: [me, W, J] }],
                'drop-shadow': [{ 'drop-shadow': ['', 'none', ae, ws, Ts] }],
                'drop-shadow-color': [{ 'drop-shadow': k() }],
                grayscale: [{ grayscale: ['', me, W, J] }],
                'hue-rotate': [{ 'hue-rotate': [me, W, J] }],
                invert: [{ invert: ['', me, W, J] }],
                saturate: [{ saturate: [me, W, J] }],
                sepia: [{ sepia: ['', me, W, J] }],
                'backdrop-filter': [{ 'backdrop-filter': ['', 'none', W, J] }],
                'backdrop-blur': [{ 'backdrop-blur': Be() }],
                'backdrop-brightness': [{ 'backdrop-brightness': [me, W, J] }],
                'backdrop-contrast': [{ 'backdrop-contrast': [me, W, J] }],
                'backdrop-grayscale': [{ 'backdrop-grayscale': ['', me, W, J] }],
                'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [me, W, J] }],
                'backdrop-invert': [{ 'backdrop-invert': ['', me, W, J] }],
                'backdrop-opacity': [{ 'backdrop-opacity': [me, W, J] }],
                'backdrop-saturate': [{ 'backdrop-saturate': [me, W, J] }],
                'backdrop-sepia': [{ 'backdrop-sepia': ['', me, W, J] }],
                'border-collapse': [{ border: ['collapse', 'separate'] }],
                'border-spacing': [{ 'border-spacing': Y() }],
                'border-spacing-x': [{ 'border-spacing-x': Y() }],
                'border-spacing-y': [{ 'border-spacing-y': Y() }],
                'table-layout': [{ table: ['auto', 'fixed'] }],
                caption: [{ caption: ['top', 'bottom'] }],
                transition: [{ transition: ['', 'all', 'colors', 'opacity', 'shadow', 'transform', 'none', W, J] }],
                'transition-behavior': [{ transition: ['normal', 'discrete'] }],
                duration: [{ duration: [me, 'initial', W, J] }],
                ease: [{ ease: ['linear', 'initial', ve, W, J] }],
                delay: [{ delay: [me, W, J] }],
                animate: [{ animate: ['none', Ae, W, J] }],
                backface: [{ backface: ['hidden', 'visible'] }],
                perspective: [{ perspective: [Q, W, J] }],
                'perspective-origin': [{ 'perspective-origin': je() }],
                rotate: [{ rotate: we() }],
                'rotate-x': [{ 'rotate-x': we() }],
                'rotate-y': [{ 'rotate-y': we() }],
                'rotate-z': [{ 'rotate-z': we() }],
                scale: [{ scale: nt() }],
                'scale-x': [{ 'scale-x': nt() }],
                'scale-y': [{ 'scale-y': nt() }],
                'scale-z': [{ 'scale-z': nt() }],
                'scale-3d': ['scale-3d'],
                skew: [{ skew: dt() }],
                'skew-x': [{ 'skew-x': dt() }],
                'skew-y': [{ 'skew-y': dt() }],
                transform: [{ transform: [W, J, '', 'none', 'gpu', 'cpu'] }],
                'transform-origin': [{ origin: je() }],
                'transform-style': [{ transform: ['3d', 'flat'] }],
                translate: [{ translate: mt() }],
                'translate-x': [{ 'translate-x': mt() }],
                'translate-y': [{ 'translate-y': mt() }],
                'translate-z': [{ 'translate-z': mt() }],
                'translate-none': ['translate-none'],
                accent: [{ accent: k() }],
                appearance: [{ appearance: ['none', 'auto'] }],
                'caret-color': [{ caret: k() }],
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
                            W,
                            J,
                        ],
                    },
                ],
                'field-sizing': [{ 'field-sizing': ['fixed', 'content'] }],
                'pointer-events': [{ 'pointer-events': ['auto', 'none'] }],
                resize: [{ resize: ['none', '', 'y', 'x'] }],
                'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
                'scroll-m': [{ 'scroll-m': Y() }],
                'scroll-mx': [{ 'scroll-mx': Y() }],
                'scroll-my': [{ 'scroll-my': Y() }],
                'scroll-ms': [{ 'scroll-ms': Y() }],
                'scroll-me': [{ 'scroll-me': Y() }],
                'scroll-mt': [{ 'scroll-mt': Y() }],
                'scroll-mr': [{ 'scroll-mr': Y() }],
                'scroll-mb': [{ 'scroll-mb': Y() }],
                'scroll-ml': [{ 'scroll-ml': Y() }],
                'scroll-p': [{ 'scroll-p': Y() }],
                'scroll-px': [{ 'scroll-px': Y() }],
                'scroll-py': [{ 'scroll-py': Y() }],
                'scroll-ps': [{ 'scroll-ps': Y() }],
                'scroll-pe': [{ 'scroll-pe': Y() }],
                'scroll-pt': [{ 'scroll-pt': Y() }],
                'scroll-pr': [{ 'scroll-pr': Y() }],
                'scroll-pb': [{ 'scroll-pb': Y() }],
                'scroll-pl': [{ 'scroll-pl': Y() }],
                'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
                'snap-stop': [{ snap: ['normal', 'always'] }],
                'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
                'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
                touch: [{ touch: ['auto', 'none', 'manipulation'] }],
                'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
                'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
                'touch-pz': ['touch-pinch-zoom'],
                select: [{ select: ['none', 'text', 'all', 'auto'] }],
                'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', W, J] }],
                fill: [{ fill: ['none', ...k()] }],
                'stroke-w': [{ stroke: [me, li, pa, to] }],
                stroke: [{ stroke: ['none', ...k()] }],
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
    sp = qv(ip);
function cp(...u) {
    return sp(Mm(u));
}
const up = wv(
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
    Kt = v.forwardRef(({ className: u, variant: d, size: f, asChild: r = !1, ...p }, T) => {
        const A = r ? Sv : 'button';
        return c.jsx(A, { className: cp(up({ variant: d, size: f, className: u })), ref: T, ...p });
    });
Kt.displayName = 'Button';
const op = ({ currentView: u, onViewChange: d, onMinimize: f, onClose: r }) => {
    const [p, T] = v.useState(''),
        [A, B] = v.useState(null);
    v.useEffect(() => {
        if (u === 'assistant') {
            const F = setInterval(() => {
                T('0s');
            }, 1e3);
            return (
                B(F),
                () => {
                    F && clearInterval(F);
                }
            );
        } else (A && (clearInterval(A), B(null)), T(''));
    }, [u, A]);
    const N = () =>
            ({
                onboarding: 'Welcome to Cheating Daddy',
                main: 'Cheating Daddy',
                customize: 'Customize',
                help: 'Help & Shortcuts',
                history: 'Conversation History',
                advanced: 'Advanced Tools',
                assistant: 'Cheating Daddy',
            })[u] || 'Cheating Daddy',
        S = () => ['customize', 'help', 'history', 'advanced'].includes(u),
        O = () =>
            c.jsxs('svg', {
                width: '24px',
                height: '24px',
                strokeWidth: '1.7',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                color: 'currentColor',
                children: [
                    c.jsx('path', {
                        d: 'M12 21V7C12 5.89543 12.8954 5 14 5H21.4C21.7314 5 22 5.26863 22 5.6V18.7143',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                    }),
                    c.jsx('path', {
                        d: 'M12 21V7C12 5.89543 11.1046 5 10 5H2.6C2.26863 5 2 5.26863 2 5.6V18.7143',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                    }),
                    c.jsx('path', { d: 'M14 19L22 19', stroke: 'currentColor', strokeWidth: '1.7', strokeLinecap: 'round' }),
                    c.jsx('path', { d: 'M10 19L2 19', stroke: 'currentColor', strokeWidth: '1.7', strokeLinecap: 'round' }),
                    c.jsx('path', {
                        d: 'M12 21C12 19.8954 12.8954 19 14 19',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }),
                    c.jsx('path', {
                        d: 'M12 21C12 19.8954 11.1046 19 10 19',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }),
                ],
            }),
        D = () =>
            c.jsxs('svg', {
                width: '24px',
                height: '24px',
                strokeWidth: '1.7',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                color: 'currentColor',
                children: [
                    c.jsx('path', {
                        d: 'M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }),
                    c.jsx('path', {
                        d: 'M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }),
                ],
            }),
        V = () =>
            c.jsxs('svg', {
                width: '24px',
                height: '24px',
                strokeWidth: '1.7',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                color: 'currentColor',
                children: [
                    c.jsx('path', {
                        d: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }),
                    c.jsx('path', {
                        d: 'M9 9C9 5.49997 14.5 5.5 14.5 9C14.5 11.5 12 10.9999 12 13.9999',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }),
                    c.jsx('path', {
                        d: 'M12 18.01L12.01 17.9989',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }),
                ],
            }),
        ae = () =>
            c.jsxs('svg', {
                width: '24px',
                strokeWidth: '1.7',
                height: '24px',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                color: 'currentColor',
                children: [
                    c.jsx('path', { d: 'M18.5 15L5.5 15', stroke: 'currentColor', strokeWidth: '1.7', strokeLinejoin: 'round' }),
                    c.jsx('path', { d: 'M16 4L8 4', stroke: 'currentColor', strokeWidth: '1.7', strokeLinecap: 'round', strokeLinejoin: 'round' }),
                    c.jsx('path', {
                        d: 'M9 4.5L9 10.2602C9 10.7376 8.82922 11.1992 8.51851 11.5617L3.48149 17.4383C3.17078 17.8008 3 18.2624 3 18.7398V19C3 20.1046 3.89543 21 5 21L19 21C20.1046 21 21 20.1046 21 19V18.7398C21 18.2624 20.8292 17.8008 20.5185 17.4383L15.4815 11.5617C15.1708 11.1992 15 10.7376 15 10.2602L15 4.5',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }),
                    c.jsx('path', {
                        d: 'M12 9.01L12.01 8.99889',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }),
                    c.jsx('path', {
                        d: 'M11 2.01L11.01 1.99889',
                        stroke: 'currentColor',
                        strokeWidth: '1.7',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                    }),
                ],
            }),
        X = () =>
            c.jsx('svg', {
                width: '24px',
                height: '24px',
                strokeWidth: '1.7',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                color: 'currentColor',
                children: c.jsx('path', {
                    d: 'M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426',
                    stroke: 'currentColor',
                    strokeWidth: '1.7',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                }),
            }),
        Q = () =>
            c.jsx('svg', {
                width: '24px',
                height: '24px',
                strokeWidth: '1.7',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                color: 'currentColor',
                children: c.jsx('path', {
                    d: 'M15 6L9 12L15 18',
                    stroke: 'currentColor',
                    strokeWidth: '1.7',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                }),
            });
    return c.jsxs('div', {
        className: 'header',
        children: [
            c.jsx('div', { className: 'header-title', children: N() }),
            c.jsxs('div', {
                className: 'header-actions',
                children: [
                    u === 'assistant' &&
                        c.jsxs(c.Fragment, {
                            children: [
                                c.jsx('span', { children: p }),
                                c.jsx('span', { children: 'Ready' }),
                                c.jsxs(Kt, {
                                    variant: 'outline',
                                    size: 'sm',
                                    className: 'header-hide-button',
                                    children: [
                                        'Hide  ',
                                        c.jsx('span', {
                                            className: 'key',
                                            style: { pointerEvents: 'none' },
                                            children: window.cheddar?.isMacOS ? 'Cmd' : 'Ctrl',
                                        }),
                                        '  ',
                                        c.jsx('span', { className: 'key', children: '\\' }),
                                    ],
                                }),
                                c.jsx(Kt, { variant: 'ghost', size: 'icon', className: 'window-close', onClick: r, children: c.jsx(X, {}) }),
                            ],
                        }),
                    u === 'main' &&
                        c.jsxs(c.Fragment, {
                            children: [
                                c.jsx(Kt, {
                                    variant: 'ghost',
                                    size: 'icon',
                                    title: 'Conversation History',
                                    onClick: () => d('history'),
                                    children: c.jsx(O, {}),
                                }),
                                c.jsx(Kt, {
                                    variant: 'ghost',
                                    size: 'icon',
                                    title: 'Advanced Tools',
                                    onClick: () => d('advanced'),
                                    children: c.jsx(ae, {}),
                                }),
                                c.jsx(Kt, {
                                    variant: 'ghost',
                                    size: 'icon',
                                    title: 'Customize',
                                    onClick: () => d('customize'),
                                    children: c.jsx(D, {}),
                                }),
                                c.jsx(Kt, {
                                    variant: 'ghost',
                                    size: 'icon',
                                    title: 'Help & Shortcuts',
                                    onClick: () => d('help'),
                                    children: c.jsx(V, {}),
                                }),
                                c.jsx(Kt, { variant: 'ghost', size: 'icon', className: 'window-close', onClick: r, children: c.jsx(X, {}) }),
                            ],
                        }),
                    u === 'onboarding' &&
                        c.jsx(Kt, { variant: 'ghost', size: 'icon', className: 'window-close', onClick: () => d('main'), children: c.jsx(X, {}) }),
                    S() &&
                        c.jsxs(c.Fragment, {
                            children: [
                                c.jsx(Kt, {
                                    variant: 'ghost',
                                    size: 'icon',
                                    title: 'Back to Main',
                                    onClick: () => d('main'),
                                    children: c.jsx(Q, {}),
                                }),
                                c.jsx(Kt, { variant: 'ghost', size: 'icon', className: 'window-close', onClick: r, children: c.jsx(X, {}) }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
async function Es() {
    try {
        const u = window;
        if (u.require) {
            const { ipcRenderer: d } = u.require('electron'),
                f = await d.invoke('update-sizes');
            f.success ? console.log('Window resized for current view') : console.error('Failed to resize window:', f.error);
        }
    } catch (u) {
        console.error('Error resizing window:', u);
    }
}
const rp = ({ onStart: u, onAPIKeyHelp: d, isInitializing: f, onLayoutModeChange: r, showApiKeyError: p = !1 }) => {
        const [T, A] = v.useState(() => localStorage.getItem('apiKey') || ''),
            [B, N] = v.useState(p);
        (v.useEffect(() => {
            N(p);
        }, [p]),
            v.useEffect(() => {
                const X = (Q, F) => {};
                return (
                    window.electron?.ipcRenderer?.on('session-initializing', X),
                    () => {
                        window.electron?.ipcRenderer?.removeAllListeners('session-initializing');
                    }
                );
            }, []),
            v.useEffect(() => {
                ((() => {
                    const Q = localStorage.getItem('layoutMode');
                    Q && Q !== 'normal' && r(Q);
                })(),
                    Es());
            }, [r]));
        const S = v.useCallback(X => {
            (navigator.platform.toUpperCase().indexOf('MAC') >= 0 ? X.metaKey && X.key === 'Enter' : X.ctrlKey && X.key === 'Enter') &&
                (X.preventDefault(), D());
        }, []);
        v.useEffect(() => (document.addEventListener('keydown', S), () => document.removeEventListener('keydown', S)), [S]);
        const O = X => {
                const Q = X.target.value;
                (A(Q), localStorage.setItem('apiKey', Q), B && N(!1));
            },
            D = () => {
                f || u();
            },
            V = () => {
                d();
            };
        v.useCallback(() => {
            (N(!0),
                setTimeout(() => {
                    N(!1);
                }, 1e3));
        }, []);
        const ae = () => {
            const X = navigator.platform.toUpperCase().indexOf('MAC') >= 0,
                Q = c.jsxs('svg', {
                    width: '14px',
                    height: '14px',
                    viewBox: '0 0 24 24',
                    strokeWidth: '2',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        c.jsx('path', { d: 'M9 6V18', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }),
                        c.jsx('path', { d: 'M15 6V18', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }),
                        c.jsx('path', {
                            d: 'M9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9H18C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                        }),
                        c.jsx('path', {
                            d: 'M9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15H18C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                        }),
                    ],
                }),
                F = c.jsxs('svg', {
                    width: '14px',
                    height: '14px',
                    strokeWidth: '2',
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        c.jsx('path', {
                            d: 'M10.25 19.25L6.75 15.75L10.25 12.25',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                        }),
                        c.jsx('path', {
                            d: 'M6.75 15.75H12.75C14.9591 15.75 16.75 13.9591 16.75 11.75V4.75',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                        }),
                    ],
                });
            return X
                ? c.jsxs(c.Fragment, { children: ['Start Session ', c.jsxs('span', { className: 'shortcut-icons', children: [Q, F] })] })
                : c.jsxs(c.Fragment, { children: ['Start Session ', c.jsxs('span', { className: 'shortcut-icons', children: ['Ctrl', F] })] });
        };
        return c.jsx(c.Fragment, {
            children: c.jsxs('div', {
                className: 'main-view',
                children: [
                    c.jsx('div', { className: 'welcome', children: 'Welcome' }),
                    c.jsxs('div', {
                        className: 'input-group',
                        children: [
                            c.jsx('input', {
                                type: 'password',
                                placeholder: 'Enter your Gemini API Key',
                                value: T,
                                onChange: O,
                                className: B ? 'api-key-error' : '',
                            }),
                            c.jsx('button', { onClick: D, className: `start-button ${f ? 'initializing' : ''}`, children: ae() }),
                        ],
                    }),
                    c.jsxs('p', {
                        className: 'description',
                        children: ['dont have an api key?', c.jsx('span', { onClick: V, className: 'link', children: 'get one here' })],
                    }),
                ],
            }),
        });
    },
    fp = ({
        responses: u,
        currentResponseIndex: d,
        selectedProfile: f,
        onSendText: r,
        shouldAnimateResponse: p,
        savedResponses: T,
        onResponseIndexChanged: A,
        onStopSession: B,
    }) => {
        const [N, S] = v.useState(T),
            [O, D] = v.useState(0),
            V = v.useRef(null),
            ae = v.useRef(null),
            X = v.useCallback(
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
            Q = v.useCallback(() => {
                const H = X();
                return u.length > 0 && d >= 0 ? u[d] : `Hey, I'm listening to your ${H[f] || 'session'}?`;
            }, [u, d, f, X]),
            F = v.useCallback(() => {
                const H = localStorage.getItem('fontSize');
                if (H !== null) {
                    const b = parseInt(H, 10) || 20;
                    document.documentElement.style.setProperty('--response-font-size', `${b}px`);
                }
            }, []);
        (v.useEffect(() => {
            F();
        }, [F]),
            v.useEffect(() => {
                S(T);
            }, [T]));
        const ve = v.useCallback(() => (u.length > 0 ? `${d + 1}/${u.length}` : ''), [u.length, d]),
            Ae = v.useCallback(() => {
                const H = Q();
                return N.some(b => b.response === H);
            }, [Q, N]),
            pe = v.useCallback(() => {
                if (d > 0) {
                    const H = d - 1;
                    A?.(H);
                }
            }, [d, A]),
            ye = v.useCallback(() => {
                if (d < u.length - 1) {
                    const H = d + 1;
                    A?.(H);
                }
            }, [d, u.length, A]),
            je = v.useCallback(() => {
                if (V.current) {
                    const H = V.current,
                        b = H.clientHeight * 0.3;
                    H.scrollTop = Math.max(0, H.scrollTop - b);
                }
            }, []),
            xe = v.useCallback(() => {
                if (V.current) {
                    const H = V.current,
                        b = H.clientHeight * 0.3;
                    H.scrollTop = Math.min(H.scrollHeight - H.clientHeight, H.scrollTop + b);
                }
            }, []);
        v.useEffect(() => {
            if (window.electron?.ipcRenderer) {
                const H = window.electron.ipcRenderer,
                    b = () => {
                        (console.log('Received navigate-previous-response message'), pe());
                    },
                    L = () => {
                        (console.log('Received navigate-next-response message'), ye());
                    },
                    k = () => {
                        (console.log('Received scroll-response-up message'), je());
                    },
                    I = () => {
                        (console.log('Received scroll-response-down message'), xe());
                    };
                return (
                    H.on('navigate-previous-response', b),
                    H.on('navigate-next-response', L),
                    H.on('scroll-response-up', k),
                    H.on('scroll-response-down', I),
                    () => {
                        (H.removeAllListeners('navigate-previous-response'),
                            H.removeAllListeners('navigate-next-response'),
                            H.removeAllListeners('scroll-response-up'),
                            H.removeAllListeners('scroll-response-down'));
                    }
                );
            }
        }, [pe, ye, je, xe]);
        const G = v.useCallback(async () => {
                if (ae.current && ae.current.value.trim()) {
                    const H = ae.current.value.trim();
                    ((ae.current.value = ''), await r(H));
                }
            }, [r]),
            Y = v.useCallback(
                H => {
                    H.key === 'Enter' && !H.shiftKey && (H.preventDefault(), G());
                },
                [G]
            ),
            ue = v.useCallback(() => {
                const H = Q();
                if (H && !Ae()) {
                    const b = [...N, { response: H, timestamp: new Date().toISOString(), profile: f }];
                    (S(b), localStorage.setItem('savedResponses', JSON.stringify(b)));
                }
            }, [Q, Ae, N, f]);
        v.useCallback(() => {
            setTimeout(() => {
                V.current && (V.current.scrollTop = V.current.scrollHeight);
            }, 0);
        }, []);
        const ne = v.useCallback(H => {
                if (typeof window < 'u' && window.marked)
                    try {
                        window.marked.setOptions({ breaks: !0, gfm: !0, sanitize: !1 });
                        let b = window.marked.parse(H);
                        return ((b = He(b)), b);
                    } catch (b) {
                        return (console.warn('Error parsing markdown:', b), H);
                    }
                return (console.log('Marked not available, using plain text'), H);
            }, []),
            He = v.useCallback(H => {
                const L = new DOMParser().parseFromString(H, 'text/html'),
                    k = ['PRE'];
                function I(se) {
                    if (se.nodeType === Node.TEXT_NODE && se.textContent?.trim() && !k.includes(se.parentNode?.tagName || '')) {
                        const h = se.textContent.split(/(\s+)/),
                            E = document.createDocumentFragment();
                        (h.forEach(U => {
                            if (U.trim()) {
                                const q = document.createElement('span');
                                (q.setAttribute('data-word', ''), (q.textContent = U), E.appendChild(q));
                            } else E.appendChild(document.createTextNode(U));
                        }),
                            se.parentNode.replaceChild(E, se));
                    } else se.nodeType === Node.ELEMENT_NODE && !k.includes(se.tagName) && Array.from(se.childNodes).forEach(I);
                }
                return (Array.from(L.body.childNodes).forEach(I), L.body.innerHTML);
            }, []),
            oe = v.useCallback(() => {
                if ((console.log('updateResponseContent called'), V.current)) {
                    const H = V.current,
                        b = Q();
                    console.log('Current response:', b);
                    const L = ne(b);
                    (console.log('Rendered response:', L), (H.innerHTML = L));
                    const k = H.querySelectorAll('[data-word]');
                    if (p) {
                        for (let I = 0; I < O && I < k.length; I++) k[I].classList.add('visible');
                        for (let I = O; I < k.length; I++)
                            (k[I].classList.remove('visible'),
                                setTimeout(
                                    () => {
                                        (k[I].classList.add('visible'), k.length - 1);
                                    },
                                    (I - O) * 100
                                ));
                        D(k.length);
                    } else (k.forEach(I => I.classList.add('visible')), D(k.length));
                } else console.log('Response container not found');
            }, [Q, ne, p, O]);
        (v.useEffect(() => {
            (d !== -1 && D(0), oe());
        }, [u, d, oe]),
            v.useEffect(() => {
                oe();
            }, [oe]),
            Q());
        const Ne = ve(),
            Te = Ae();
        return c.jsx(c.Fragment, {
            children: c.jsxs('div', {
                className: 'assistant-view',
                children: [
                    c.jsx('div', { className: 'response-container', ref: V, id: 'responseContainer' }),
                    c.jsxs('div', {
                        className: 'text-input-container',
                        children: [
                            c.jsx('button', {
                                className: 'nav-button',
                                onClick: pe,
                                disabled: d <= 0,
                                children: c.jsx('svg', {
                                    width: '24px',
                                    height: '24px',
                                    strokeWidth: '1.7',
                                    viewBox: '0 0 24 24',
                                    fill: 'none',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    color: '#ffffff',
                                    children: c.jsx('path', {
                                        d: 'M15 6L9 12L15 18',
                                        stroke: '#ffffff',
                                        strokeWidth: '1.7',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                    }),
                                }),
                            }),
                            u.length > 0 && c.jsx('span', { className: 'response-counter', children: Ne }),
                            c.jsx('button', {
                                className: `save-button ${Te ? 'saved' : ''}`,
                                onClick: ue,
                                title: Te ? 'Response saved' : 'Save this response',
                                children: c.jsxs('svg', {
                                    width: '24px',
                                    height: '24px',
                                    strokeWidth: '1.7',
                                    viewBox: '0 0 24 24',
                                    fill: 'none',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    children: [
                                        c.jsx('path', {
                                            d: 'M5 20V5C5 3.89543 5.89543 3 7 3H16.1716C16.702 3 17.2107 3.21071 17.5858 3.58579L19.4142 5.41421C19.7893 5.78929 20 6.29799 20 6.82843V20C20 21.1046 19.1046 22 18 22H7C5.89543 22 5 21 5 20Z',
                                            stroke: 'currentColor',
                                            strokeWidth: '1.7',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                        }),
                                        c.jsx('path', {
                                            d: 'M15 22V13H9V22',
                                            stroke: 'currentColor',
                                            strokeWidth: '1.7',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                        }),
                                        c.jsx('path', {
                                            d: 'M9 3V8H15',
                                            stroke: 'currentColor',
                                            strokeWidth: '1.7',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                        }),
                                    ],
                                }),
                            }),
                            B &&
                                c.jsx('button', {
                                    className: 'stop-session-button',
                                    onClick: B,
                                    title: 'Stop Session',
                                    children: c.jsx('svg', {
                                        width: '24px',
                                        height: '24px',
                                        strokeWidth: '1.7',
                                        viewBox: '0 0 24 24',
                                        fill: 'none',
                                        xmlns: 'http://www.w3.org/2000/svg',
                                        children: c.jsx('path', {
                                            d: 'M6 6L18 18M6 18L18 6',
                                            stroke: 'currentColor',
                                            strokeWidth: '1.7',
                                            strokeLinecap: 'round',
                                            strokeLinejoin: 'round',
                                        }),
                                    }),
                                }),
                            c.jsx('input', { ref: ae, type: 'text', id: 'textInput', placeholder: 'Type a message to the AI...', onKeyDown: Y }),
                            c.jsx('button', {
                                className: 'nav-button',
                                onClick: ye,
                                disabled: d >= u.length - 1,
                                children: c.jsx('svg', {
                                    width: '24px',
                                    height: '24px',
                                    strokeWidth: '1.7',
                                    viewBox: '0 0 24 24',
                                    fill: 'none',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    color: '#ffffff',
                                    children: c.jsx('path', {
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
    },
    dp = ({
        selectedProfile: u,
        selectedLanguage: d,
        selectedScreenshotInterval: f,
        selectedImageQuality: r,
        layoutMode: p,
        keybinds: T,
        googleSearchEnabled: A,
        backgroundTransparency: B,
        fontSize: N,
        onProfileChange: S,
        onLanguageChange: O,
        onScreenshotIntervalChange: D,
        onImageQualityChange: V,
        onLayoutModeChange: ae,
        advancedMode: X,
        onAdvancedModeChange: Q,
    }) => {
        const [F, ve] = v.useState(T),
            [Ae, pe] = v.useState(p);
        (v.useEffect(() => {
            (Y(), ne(), He(), oe(), Ne(), Te(), Es());
        }, []),
            v.useEffect(() => {
                ve(T);
            }, [T]),
            v.useEffect(() => {
                pe(p);
            }, [p]));
        const ye = v.useCallback(
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
            je = v.useCallback(
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
            xe = v.useCallback(
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
            G = v.useCallback(() => {
                const _ = window.cheddar?.isMacOS || navigator.platform.includes('Mac');
                return {
                    moveUp: _ ? 'Alt+Up' : 'Ctrl+Up',
                    moveDown: _ ? 'Alt+Down' : 'Ctrl+Down',
                    moveLeft: _ ? 'Alt+Left' : 'Ctrl+Left',
                    moveRight: _ ? 'Alt+Right' : 'Ctrl+Right',
                    toggleVisibility: _ ? 'Cmd+\\' : 'Ctrl+\\',
                    toggleClickThrough: _ ? 'Cmd+M' : 'Ctrl+M',
                    nextStep: _ ? 'Cmd+Enter' : 'Ctrl+Enter',
                    previousResponse: _ ? 'Cmd+[' : 'Ctrl+[',
                    nextResponse: _ ? 'Cmd+]' : 'Ctrl+]',
                    scrollUp: _ ? 'Cmd+Shift+Up' : 'Ctrl+Shift+Up',
                    scrollDown: _ ? 'Cmd+Shift+Down' : 'Ctrl+Shift+Down',
                };
            }, []),
            Y = v.useCallback(() => {
                const _ = localStorage.getItem('customKeybinds');
                if (_)
                    try {
                        const ee = JSON.parse(_);
                        ve({ ...G(), ...ee });
                    } catch (ee) {
                        (console.error('Failed to parse saved keybinds:', ee), ve(G()));
                    }
            }, [G]),
            ue = v.useCallback(_ => {
                if ((localStorage.setItem('customKeybinds', JSON.stringify(_)), window.electron?.ipcRenderer))
                    try {
                        window.electron.ipcRenderer.send('update-keybinds', _);
                    } catch (ee) {
                        console.error('Failed to send keybinds to main process:', ee);
                    }
            }, []),
            ne = v.useCallback(() => {
                const _ = localStorage.getItem('layoutMode');
                _ && pe(_);
            }, []),
            He = v.useCallback(() => {}, []),
            oe = v.useCallback(() => {}, []),
            Ne = v.useCallback(() => {
                const _ = localStorage.getItem('backgroundTransparency');
                _ !== null && H(parseFloat(_));
            }, []),
            Te = v.useCallback(() => {
                const _ = localStorage.getItem('fontSize');
                _ !== null && b(parseInt(_, 10));
            }, []),
            H = v.useCallback(_ => {
                const ee = document.documentElement;
                (ee.style.setProperty('--header-background', `rgba(0, 0, 0, ${_})`),
                    ee.style.setProperty('--main-content-background', `rgba(0, 0, 0, ${_})`),
                    ee.style.setProperty('--card-background', `rgba(255, 255, 255, ${_ * 0.05})`),
                    ee.style.setProperty('--input-background', `rgba(0, 0, 0, ${_ * 0.375})`),
                    ee.style.setProperty('--input-focus-background', `rgba(0, 0, 0, ${_ * 0.625})`),
                    ee.style.setProperty('--button-background', `rgba(0, 0, 0, ${_ * 0.625})`),
                    ee.style.setProperty('--preview-video-background', `rgba(0, 0, 0, ${_ * 1.125})`),
                    ee.style.setProperty('--screen-option-background', `rgba(0, 0, 0, ${_ * 0.5})`),
                    ee.style.setProperty('--screen-option-hover-background', `rgba(0, 0, 0, ${_ * 0.75})`),
                    ee.style.setProperty('--scrollbar-background', `rgba(0, 0, 0, ${_ * 0.5})`));
            }, []),
            b = v.useCallback(_ => {
                document.documentElement.style.setProperty('--response-font-size', `${_}px`);
            }, []),
            L = v.useCallback(
                _ => {
                    const ee = _.target.value;
                    (localStorage.setItem('selectedProfile', ee), S(ee));
                },
                [S]
            ),
            k = v.useCallback(
                _ => {
                    const ee = _.target.value;
                    (localStorage.setItem('selectedLanguage', ee), O(ee));
                },
                [O]
            ),
            I = v.useCallback(
                _ => {
                    const ee = _.target.value;
                    (localStorage.setItem('selectedScreenshotInterval', ee), D(ee));
                },
                [D]
            ),
            se = v.useCallback(
                _ => {
                    const ee = _.target.value;
                    V(ee);
                },
                [V]
            ),
            h = v.useCallback(
                _ => {
                    const ee = _.target.value;
                    (localStorage.setItem('layoutMode', ee), pe(ee), ae(ee));
                },
                [ae]
            ),
            E = v.useCallback(_ => {
                localStorage.setItem('customPrompt', _.target.value);
            }, []),
            U = v.useCallback(
                (_, ee) => {
                    const Me = { ...F, [_]: ee };
                    (ve(Me), ue(Me));
                },
                [F, ue]
            ),
            q = v.useCallback(() => {
                const _ = G();
                (ve(_), localStorage.removeItem('customKeybinds'), ue(_));
            }, [G, ue]);
        v.useCallback(async _ => {
            const ee = _.target.checked;
            if ((localStorage.setItem('googleSearchEnabled', ee.toString()), window.electron?.ipcRenderer))
                try {
                    window.electron.ipcRenderer.send('update-google-search', ee);
                } catch (Me) {
                    console.error('Failed to send google search setting to main process:', Me);
                }
        }, []);
        const te = v.useCallback(
                _ => {
                    const ee = _.target.checked;
                    (localStorage.setItem('advancedMode', ee.toString()), Q(ee));
                },
                [Q]
            ),
            ce = v.useCallback(
                _ => {
                    const ee = parseFloat(_.target.value);
                    (localStorage.setItem('backgroundTransparency', ee.toString()), H(ee));
                },
                [H]
            ),
            P = v.useCallback(
                _ => {
                    const ee = parseInt(_.target.value, 10);
                    (localStorage.setItem('fontSize', ee.toString()), b(ee));
                },
                [b]
            ),
            Be = v.useCallback(_ => {
                ((_.target.placeholder = 'Press key combination...'), _.target.select());
            }, []),
            we = v.useCallback(
                _ => {
                    _.preventDefault();
                    const ee = [];
                    (_.ctrlKey && ee.push('Ctrl'), _.metaKey && ee.push('Cmd'), _.altKey && ee.push('Alt'), _.shiftKey && ee.push('Shift'));
                    let Me = _.key;
                    switch (_.code) {
                        case 'ArrowUp':
                            Me = 'Up';
                            break;
                        case 'ArrowDown':
                            Me = 'Down';
                            break;
                        case 'ArrowLeft':
                            Me = 'Left';
                            break;
                        case 'ArrowRight':
                            Me = 'Right';
                            break;
                        case 'Escape':
                            Me = 'Escape';
                            break;
                        case 'Enter':
                            Me = 'Enter';
                            break;
                        case 'Space':
                            Me = 'Space';
                            break;
                        case 'Backspace':
                            Me = 'Backspace';
                            break;
                        case 'Delete':
                            Me = 'Delete';
                            break;
                        case 'Tab':
                            Me = 'Tab';
                            break;
                        case 'BracketLeft':
                            Me = '[';
                            break;
                        case 'BracketRight':
                            Me = ']';
                            break;
                        case 'Backslash':
                            Me = '\\';
                            break;
                        case 'Semicolon':
                            Me = ';';
                            break;
                        case 'Quote':
                            Me = "'";
                            break;
                        case 'Comma':
                            Me = ',';
                            break;
                        case 'Period':
                            Me = '.';
                            break;
                        case 'Slash':
                            Me = '/';
                            break;
                        default:
                            _.key.length === 1 && (Me = _.key.toUpperCase());
                            break;
                    }
                    if (['Control', 'Meta', 'Alt', 'Shift'].includes(_.key)) return;
                    const Cl = [...ee, Me].join('+'),
                        Fl = _.currentTarget.dataset.action;
                    (U(Fl, Cl), (_.currentTarget.value = Cl), _.currentTarget.blur());
                },
                [U]
            ),
            nt = v.useCallback(
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
            dt = ye(),
            mt = je(),
            Jl = xe(),
            Vt = nt(),
            Wl = dt.find(_ => _.value === u),
            $l = mt.find(_ => _.value === d);
        return c.jsxs('div', {
            className: 'settings-container',
            children: [
                c.jsxs('div', {
                    className: 'settings-section',
                    children: [
                        c.jsx('div', { className: 'section-title', children: c.jsx('span', { children: 'AI Profile & Behavior' }) }),
                        c.jsxs('div', {
                            className: 'form-grid',
                            children: [
                                c.jsx('div', {
                                    className: 'form-row',
                                    children: c.jsxs('div', {
                                        className: 'form-group',
                                        children: [
                                            c.jsxs('label', {
                                                className: 'form-label',
                                                children: [
                                                    'Profile Type',
                                                    c.jsx('span', { className: 'current-selection', children: Wl?.name || 'Unknown' }),
                                                ],
                                            }),
                                            c.jsx('select', {
                                                className: 'form-control',
                                                value: u,
                                                onChange: L,
                                                children: dt.map(_ => c.jsx('option', { value: _.value, children: _.name }, _.value)),
                                            }),
                                        ],
                                    }),
                                }),
                                c.jsxs('div', {
                                    className: 'form-group full-width',
                                    children: [
                                        c.jsx('label', { className: 'form-label', children: 'Custom AI Instructions' }),
                                        c.jsx('textarea', {
                                            className: 'form-control',
                                            placeholder: `Add specific instructions for how you want the AI to behave during ${Jl[u] || 'this interaction'}...`,
                                            defaultValue: localStorage.getItem('customPrompt') || '',
                                            rows: 4,
                                            onChange: E,
                                        }),
                                        c.jsxs('div', {
                                            className: 'form-description',
                                            children: [
                                                "Personalize the AI's behavior with specific instructions that will be added to the",
                                                ' ',
                                                Jl[u] || 'selected profile',
                                                ' base prompts',
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                c.jsxs('div', {
                    className: 'settings-section',
                    children: [
                        c.jsx('div', { className: 'section-title', children: c.jsx('span', { children: 'Audio & Microphone' }) }),
                        c.jsx('div', {
                            className: 'form-grid',
                            children: c.jsxs('div', {
                                className: 'form-group',
                                children: [
                                    c.jsx('label', { className: 'form-label', children: 'Audio Mode' }),
                                    c.jsxs('select', {
                                        className: 'form-control',
                                        defaultValue: localStorage.getItem('audioMode') || 'speaker_only',
                                        onChange: _ => localStorage.setItem('audioMode', _.target.value),
                                        children: [
                                            c.jsx('option', { value: 'speaker_only', children: 'Speaker Only (Interviewer)' }),
                                            c.jsx('option', { value: 'mic_only', children: 'Microphone Only (Me)' }),
                                            c.jsx('option', { value: 'both', children: 'Both Speaker & Microphone' }),
                                        ],
                                    }),
                                    c.jsx('div', { className: 'form-description', children: 'Choose which audio sources to capture for the AI.' }),
                                ],
                            }),
                        }),
                    ],
                }),
                c.jsxs('div', {
                    className: 'settings-section',
                    children: [
                        c.jsx('div', { className: 'section-title', children: c.jsx('span', { children: 'Stealth Profile' }) }),
                        c.jsx('div', {
                            className: 'form-grid',
                            children: c.jsxs('div', {
                                className: 'form-group',
                                children: [
                                    c.jsx('label', { className: 'form-label', children: 'Profile' }),
                                    c.jsxs('select', {
                                        className: 'form-control',
                                        defaultValue: localStorage.getItem('stealthProfile') || 'balanced',
                                        onChange: _ => {
                                            (localStorage.setItem('stealthProfile', _.target.value),
                                                alert('Restart the application for stealth changes to take full effect.'));
                                        },
                                        children: [
                                            c.jsx('option', { value: 'visible', children: 'Visible' }),
                                            c.jsx('option', { value: 'balanced', children: 'Balanced' }),
                                            c.jsx('option', { value: 'ultra', children: 'Ultra-Stealth' }),
                                        ],
                                    }),
                                    c.jsx('div', {
                                        className: 'form-description',
                                        children: 'Adjusts visibility and detection resistance. A restart is required for changes to apply.',
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                c.jsxs('div', {
                    className: 'settings-section',
                    children: [
                        c.jsx('div', { className: 'section-title', children: c.jsx('span', { children: 'Language & Layout' }) }),
                        c.jsx('div', {
                            className: 'form-grid',
                            children: c.jsxs('div', {
                                className: 'form-row',
                                children: [
                                    c.jsxs('div', {
                                        className: 'form-group',
                                        children: [
                                            c.jsxs('label', {
                                                className: 'form-label',
                                                children: [
                                                    'Language',
                                                    c.jsx('span', { className: 'current-selection', children: $l?.name || 'Unknown' }),
                                                ],
                                            }),
                                            c.jsx('select', {
                                                className: 'form-control',
                                                value: d,
                                                onChange: k,
                                                children: mt.map(_ => c.jsx('option', { value: _.value, children: _.name }, _.value)),
                                            }),
                                        ],
                                    }),
                                    c.jsxs('div', {
                                        className: 'form-group',
                                        children: [
                                            c.jsxs('label', {
                                                className: 'form-label',
                                                children: [
                                                    'Layout Mode',
                                                    c.jsx('span', {
                                                        className: 'current-selection',
                                                        children: Ae.charAt(0).toUpperCase() + Ae.slice(1),
                                                    }),
                                                ],
                                            }),
                                            c.jsxs('select', {
                                                className: 'form-control',
                                                value: Ae,
                                                onChange: h,
                                                children: [
                                                    c.jsx('option', { value: 'compact', children: 'Compact' }),
                                                    c.jsx('option', { value: 'normal', children: 'Normal' }),
                                                    c.jsx('option', { value: 'spacious', children: 'Spacious' }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                c.jsxs('div', {
                    className: 'settings-section',
                    children: [
                        c.jsx('div', { className: 'section-title', children: c.jsx('span', { children: 'Keyboard Shortcuts' }) }),
                        c.jsx('div', {
                            className: 'keybinds-table-container',
                            children: c.jsxs('table', {
                                className: 'keybinds-table',
                                children: [
                                    c.jsx('thead', {
                                        children: c.jsxs('tr', {
                                            children: [c.jsx('th', { children: 'Action' }), c.jsx('th', { children: 'Shortcut' })],
                                        }),
                                    }),
                                    c.jsxs('tbody', {
                                        children: [
                                            Vt.map(_ =>
                                                c.jsxs(
                                                    'tr',
                                                    {
                                                        children: [
                                                            c.jsxs('td', {
                                                                children: [
                                                                    c.jsx('div', { className: 'action-name', children: _.name }),
                                                                    c.jsx('div', { className: 'action-description', children: _.description }),
                                                                ],
                                                            }),
                                                            c.jsx('td', {
                                                                children: c.jsx('input', {
                                                                    type: 'text',
                                                                    className: 'keybind-input form-control',
                                                                    value: F[_.key] || '',
                                                                    'data-action': _.key,
                                                                    onFocus: Be,
                                                                    onKeyDown: we,
                                                                    readOnly: !0,
                                                                }),
                                                            }),
                                                        ],
                                                    },
                                                    _.key
                                                )
                                            ),
                                            c.jsx('tr', {
                                                className: 'table-reset-row',
                                                children: c.jsx('td', {
                                                    colSpan: 2,
                                                    children: c.jsx('button', {
                                                        className: 'reset-keybinds-button',
                                                        onClick: q,
                                                        children: 'Reset to Defaults',
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        c.jsx('div', { className: 'settings-note', children: '💡 Changes to keyboard shortcuts take effect immediately' }),
                    ],
                }),
                c.jsxs('div', {
                    className: 'settings-section',
                    children: [
                        c.jsx('div', { className: 'section-title', children: c.jsx('span', { children: 'Appearance' }) }),
                        c.jsx('div', {
                            className: 'form-grid',
                            children: c.jsxs('div', {
                                className: 'form-row',
                                children: [
                                    c.jsxs('div', {
                                        className: 'form-group',
                                        children: [
                                            c.jsxs('label', {
                                                className: 'form-label',
                                                children: [
                                                    'Background Transparency',
                                                    c.jsxs('span', { className: 'current-selection', children: [Math.round(B * 100), '%'] }),
                                                ],
                                            }),
                                            c.jsxs('div', {
                                                className: 'slider-container',
                                                children: [
                                                    c.jsx('div', {
                                                        className: 'slider-header',
                                                        children: c.jsx('span', { className: 'slider-value', children: B.toFixed(2) }),
                                                    }),
                                                    c.jsx('input', {
                                                        type: 'range',
                                                        className: 'slider-input',
                                                        min: '0.1',
                                                        max: '1.0',
                                                        step: '0.05',
                                                        defaultValue: B.toString(),
                                                        onChange: ce,
                                                    }),
                                                    c.jsxs('div', {
                                                        className: 'slider-labels',
                                                        children: [c.jsx('span', { children: '10%' }), c.jsx('span', { children: '100%' })],
                                                    }),
                                                ],
                                            }),
                                            c.jsx('div', {
                                                className: 'form-description',
                                                children: 'Adjust the transparency of the application background',
                                            }),
                                        ],
                                    }),
                                    c.jsxs('div', {
                                        className: 'form-group',
                                        children: [
                                            c.jsxs('label', {
                                                className: 'form-label',
                                                children: ['Font Size', c.jsxs('span', { className: 'current-selection', children: [N, 'px'] })],
                                            }),
                                            c.jsxs('div', {
                                                className: 'slider-container',
                                                children: [
                                                    c.jsx('div', {
                                                        className: 'slider-header',
                                                        children: c.jsxs('span', { className: 'slider-value', children: [N, 'px'] }),
                                                    }),
                                                    c.jsx('input', {
                                                        type: 'range',
                                                        className: 'slider-input',
                                                        min: '12',
                                                        max: '32',
                                                        step: '1',
                                                        defaultValue: N.toString(),
                                                        onChange: P,
                                                    }),
                                                    c.jsxs('div', {
                                                        className: 'slider-labels',
                                                        children: [c.jsx('span', { children: '12px' }), c.jsx('span', { children: '32px' })],
                                                    }),
                                                ],
                                            }),
                                            c.jsx('div', {
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
                c.jsxs('div', {
                    className: 'settings-section',
                    children: [
                        c.jsx('div', { className: 'section-title', children: c.jsx('span', { children: 'Screen Capture Settings' }) }),
                        c.jsx('div', {
                            className: 'form-grid',
                            children: c.jsxs('div', {
                                className: 'form-row',
                                children: [
                                    c.jsxs('div', {
                                        className: 'form-group',
                                        children: [
                                            c.jsxs('label', {
                                                className: 'form-label',
                                                children: [
                                                    'Capture Interval',
                                                    c.jsx('span', { className: 'current-selection', children: f === 'manual' ? 'Manual' : `${f}s` }),
                                                ],
                                            }),
                                            c.jsxs('select', {
                                                className: 'form-control',
                                                value: f,
                                                onChange: I,
                                                children: [
                                                    c.jsx('option', { value: 'manual', children: 'Manual (On demand)' }),
                                                    c.jsx('option', { value: '1', children: 'Every 1 second' }),
                                                    c.jsx('option', { value: '2', children: 'Every 2 seconds' }),
                                                    c.jsx('option', { value: '5', children: 'Every 5 seconds' }),
                                                    c.jsx('option', { value: '10', children: 'Every 10 seconds' }),
                                                ],
                                            }),
                                            c.jsx('div', {
                                                className: 'form-description',
                                                children:
                                                    f === 'manual'
                                                        ? 'Screenshots will only be taken when you use the "Ask Next Step" shortcut'
                                                        : 'Automatic screenshots will be taken at the specified interval',
                                            }),
                                        ],
                                    }),
                                    c.jsxs('div', {
                                        className: 'form-group',
                                        children: [
                                            c.jsxs('label', {
                                                className: 'form-label',
                                                children: [
                                                    'Image Quality',
                                                    c.jsx('span', {
                                                        className: 'current-selection',
                                                        children: r.charAt(0).toUpperCase() + r.slice(1),
                                                    }),
                                                ],
                                            }),
                                            c.jsxs('select', {
                                                className: 'form-control',
                                                value: r,
                                                onChange: se,
                                                children: [
                                                    c.jsx('option', { value: 'low', children: 'Low' }),
                                                    c.jsx('option', { value: 'medium', children: 'Medium' }),
                                                    c.jsx('option', { value: 'high', children: 'High' }),
                                                    c.jsx('option', { value: 'ultra', children: 'Ultra' }),
                                                ],
                                            }),
                                            c.jsx('div', {
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
                c.jsxs('div', {
                    className: 'settings-section danger-section',
                    children: [
                        c.jsx('div', { className: 'section-title danger-title', children: c.jsx('span', { children: '⚠️ Advanced Mode' }) }),
                        c.jsxs('div', {
                            className: 'form-grid',
                            children: [
                                c.jsxs('div', {
                                    className: 'checkbox-group',
                                    children: [
                                        c.jsx('input', {
                                            type: 'checkbox',
                                            className: 'checkbox-input',
                                            id: 'advanced-mode',
                                            checked: X,
                                            onChange: te,
                                        }),
                                        c.jsx('label', { htmlFor: 'advanced-mode', className: 'checkbox-label', children: 'Enable Advanced Mode' }),
                                    ],
                                }),
                                c.jsxs('div', {
                                    className: 'form-description checkbox-description',
                                    children: [
                                        'Unlock experimental features, developer tools, and advanced configuration options',
                                        c.jsx('br', {}),
                                        c.jsx('strong', { children: 'Note:' }),
                                        ' Advanced mode adds a new icon to the main navigation bar',
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    mp = ({ onExternalLinkClick: u, keybinds: d }) => {
        const [f, r] = v.useState({});
        v.useEffect(() => {
            (Es(), T());
        }, [d]);
        const p = () => {
                const N = window.cheddar?.isMacOS || navigator.platform.includes('Mac');
                return {
                    moveUp: N ? 'Alt+Up' : 'Ctrl+Up',
                    moveDown: N ? 'Alt+Down' : 'Ctrl+Down',
                    moveLeft: N ? 'Alt+Left' : 'Ctrl+Left',
                    moveRight: N ? 'Alt+Right' : 'Ctrl+Right',
                    toggleVisibility: N ? 'Cmd+\\' : 'Ctrl+\\',
                    toggleClickThrough: N ? 'Cmd+M' : 'Ctrl+M',
                    nextStep: N ? 'Cmd+Enter' : 'Ctrl+Enter',
                    previousResponse: N ? 'Cmd+[' : 'Ctrl+[',
                    nextResponse: N ? 'Cmd+]' : 'Ctrl+]',
                    scrollUp: N ? 'Cmd+Shift+Up' : 'Ctrl+Shift+Up',
                    scrollDown: N ? 'Cmd+Shift+Down' : 'Ctrl+Shift+Down',
                };
            },
            T = () => {
                const N = localStorage.getItem('customKeybinds');
                if (N)
                    try {
                        const S = JSON.parse(N);
                        r({ ...p(), ...S });
                    } catch (S) {
                        (console.error('Failed to parse saved keybinds:', S), r(p()));
                    }
                else r(d && Object.keys(d).length > 0 ? d : p());
            },
            A = N =>
                N
                    ? N.split('+').map((S, O) => c.jsx('span', { className: 'key', children: S }, O))
                    : [c.jsx('span', { className: 'key', children: 'Not set' }, 'empty')],
            B = N => {
                u(N);
            };
        return (
            window.cheddar?.isMacOS,
            c.jsxs('div', {
                className: 'help-container',
                children: [
                    c.jsxs('div', {
                        className: 'option-group',
                        children: [
                            c.jsx('div', { className: 'option-label', children: c.jsx('span', { children: 'Community & Support' }) }),
                            c.jsxs('div', {
                                className: 'community-links',
                                children: [
                                    c.jsx('div', {
                                        className: 'community-link',
                                        onClick: () => B('https://cheatingdaddy.com'),
                                        children: '🌐 Official Website',
                                    }),
                                    c.jsx('div', {
                                        className: 'community-link',
                                        onClick: () => B('https://github.com/sohzm/cheating-daddy'),
                                        children: '📂 GitHub Repository',
                                    }),
                                    c.jsx('div', {
                                        className: 'community-link',
                                        onClick: () => B('https://discord.gg/GCBdubnXfJ'),
                                        children: '💬 Discord Community',
                                    }),
                                ],
                            }),
                        ],
                    }),
                    c.jsxs('div', {
                        className: 'option-group',
                        children: [
                            c.jsx('div', { className: 'option-label', children: c.jsx('span', { children: 'Keyboard Shortcuts' }) }),
                            c.jsxs('div', {
                                className: 'keyboard-section',
                                children: [
                                    c.jsxs('div', {
                                        className: 'keyboard-group',
                                        children: [
                                            c.jsx('div', { className: 'keyboard-group-title', children: 'Window Movement' }),
                                            c.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    c.jsx('span', { className: 'shortcut-description', children: 'Move window up' }),
                                                    c.jsx('div', { className: 'shortcut-keys', children: A(f.moveUp) }),
                                                ],
                                            }),
                                            c.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    c.jsx('span', { className: 'shortcut-description', children: 'Move window down' }),
                                                    c.jsx('div', { className: 'shortcut-keys', children: A(f.moveDown) }),
                                                ],
                                            }),
                                            c.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    c.jsx('span', { className: 'shortcut-description', children: 'Move window left' }),
                                                    c.jsx('div', { className: 'shortcut-keys', children: A(f.moveLeft) }),
                                                ],
                                            }),
                                            c.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    c.jsx('span', { className: 'shortcut-description', children: 'Move window right' }),
                                                    c.jsx('div', { className: 'shortcut-keys', children: A(f.moveRight) }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    c.jsxs('div', {
                                        className: 'keyboard-group',
                                        children: [
                                            c.jsx('div', { className: 'keyboard-group-title', children: 'Window Control' }),
                                            c.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    c.jsx('span', { className: 'shortcut-description', children: 'Toggle click-through mode' }),
                                                    c.jsx('div', { className: 'shortcut-keys', children: A(f.toggleClickThrough) }),
                                                ],
                                            }),
                                            c.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    c.jsx('span', { className: 'shortcut-description', children: 'Toggle window visibility' }),
                                                    c.jsx('div', { className: 'shortcut-keys', children: A(f.toggleVisibility) }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    c.jsxs('div', {
                                        className: 'keyboard-group',
                                        children: [
                                            c.jsx('div', { className: 'keyboard-group-title', children: 'AI Actions' }),
                                            c.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    c.jsx('span', {
                                                        className: 'shortcut-description',
                                                        children: 'Take screenshot and ask for next step',
                                                    }),
                                                    c.jsx('div', { className: 'shortcut-keys', children: A(f.nextStep) }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    c.jsxs('div', {
                                        className: 'keyboard-group',
                                        children: [
                                            c.jsx('div', { className: 'keyboard-group-title', children: 'Response Navigation' }),
                                            c.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    c.jsx('span', { className: 'shortcut-description', children: 'Previous response' }),
                                                    c.jsx('div', { className: 'shortcut-keys', children: A(f.previousResponse) }),
                                                ],
                                            }),
                                            c.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    c.jsx('span', { className: 'shortcut-description', children: 'Next response' }),
                                                    c.jsx('div', { className: 'shortcut-keys', children: A(f.nextResponse) }),
                                                ],
                                            }),
                                            c.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    c.jsx('span', { className: 'shortcut-description', children: 'Scroll response up' }),
                                                    c.jsx('div', { className: 'shortcut-keys', children: A(f.scrollUp) }),
                                                ],
                                            }),
                                            c.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    c.jsx('span', { className: 'shortcut-description', children: 'Scroll response down' }),
                                                    c.jsx('div', { className: 'shortcut-keys', children: A(f.scrollDown) }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    c.jsxs('div', {
                                        className: 'keyboard-group',
                                        children: [
                                            c.jsx('div', { className: 'keyboard-group-title', children: 'Text Input' }),
                                            c.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    c.jsx('span', { className: 'shortcut-description', children: 'Send message to AI' }),
                                                    c.jsx('div', {
                                                        className: 'shortcut-keys',
                                                        children: c.jsx('span', { className: 'key', children: 'Enter' }),
                                                    }),
                                                ],
                                            }),
                                            c.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    c.jsx('span', { className: 'shortcut-description', children: 'New line in text input' }),
                                                    c.jsxs('div', {
                                                        className: 'shortcut-keys',
                                                        children: [
                                                            c.jsx('span', { className: 'key', children: 'Shift' }),
                                                            c.jsx('span', { className: 'key', children: 'Enter' }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            c.jsx('div', {
                                className: 'description',
                                style: { marginTop: '12px', fontStyle: 'italic', textAlign: 'center' },
                                children: '💡 You can customize these shortcuts in the Settings page!',
                            }),
                        ],
                    }),
                    c.jsxs('div', {
                        className: 'option-group',
                        children: [
                            c.jsx('div', { className: 'option-label', children: c.jsx('span', { children: 'How to Use' }) }),
                            c.jsxs('div', {
                                className: 'usage-steps',
                                children: [
                                    c.jsxs('div', {
                                        className: 'usage-step',
                                        children: [
                                            c.jsx('strong', { children: 'Start a Session:' }),
                                            ' Enter your Gemini API key and click "Start Session"',
                                        ],
                                    }),
                                    c.jsxs('div', {
                                        className: 'usage-step',
                                        children: [c.jsx('strong', { children: 'Customize:' }), ' Choose your profile and language in the settings'],
                                    }),
                                    c.jsxs('div', {
                                        className: 'usage-step',
                                        children: [
                                            c.jsx('strong', { children: 'Position Window:' }),
                                            ' Use keyboard shortcuts to move the window to your desired location',
                                        ],
                                    }),
                                    c.jsxs('div', {
                                        className: 'usage-step',
                                        children: [
                                            c.jsx('strong', { children: 'Click-through Mode:' }),
                                            ' Use ',
                                            A(f.toggleClickThrough),
                                            ' to make the window click-through',
                                        ],
                                    }),
                                    c.jsxs('div', {
                                        className: 'usage-step',
                                        children: [
                                            c.jsx('strong', { children: 'Get AI Help:' }),
                                            ' The AI will analyze your screen and audio to provide assistance',
                                        ],
                                    }),
                                    c.jsxs('div', {
                                        className: 'usage-step',
                                        children: [
                                            c.jsx('strong', { children: 'Text Messages:' }),
                                            ' Type questions or requests to the AI using the text input',
                                        ],
                                    }),
                                    c.jsxs('div', {
                                        className: 'usage-step',
                                        children: [
                                            c.jsx('strong', { children: 'Navigate Responses:' }),
                                            ' Use ',
                                            A(f.previousResponse),
                                            ' and',
                                            A(f.nextResponse),
                                            ' to browse through AI responses',
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    c.jsxs('div', {
                        className: 'option-group',
                        children: [
                            c.jsx('div', { className: 'option-label', children: c.jsx('span', { children: 'Supported Profiles' }) }),
                            c.jsxs('div', {
                                className: 'profiles-grid',
                                children: [
                                    c.jsxs('div', {
                                        className: 'profile-item',
                                        children: [
                                            c.jsx('div', { className: 'profile-name', children: 'Job Interview' }),
                                            c.jsx('div', {
                                                className: 'profile-description',
                                                children: 'Get help with interview questions and responses',
                                            }),
                                        ],
                                    }),
                                    c.jsxs('div', {
                                        className: 'profile-item',
                                        children: [
                                            c.jsx('div', { className: 'profile-name', children: 'Sales Call' }),
                                            c.jsx('div', {
                                                className: 'profile-description',
                                                children: 'Assistance with sales conversations and objection handling',
                                            }),
                                        ],
                                    }),
                                    c.jsxs('div', {
                                        className: 'profile-item',
                                        children: [
                                            c.jsx('div', { className: 'profile-name', children: 'Business Meeting' }),
                                            c.jsx('div', {
                                                className: 'profile-description',
                                                children: 'Support for professional meetings and discussions',
                                            }),
                                        ],
                                    }),
                                    c.jsxs('div', {
                                        className: 'profile-item',
                                        children: [
                                            c.jsx('div', { className: 'profile-name', children: 'Presentation' }),
                                            c.jsx('div', {
                                                className: 'profile-description',
                                                children: 'Help with presentations and public speaking',
                                            }),
                                        ],
                                    }),
                                    c.jsxs('div', {
                                        className: 'profile-item',
                                        children: [
                                            c.jsx('div', { className: 'profile-name', children: 'Negotiation' }),
                                            c.jsx('div', {
                                                className: 'profile-description',
                                                children: 'Guidance for business negotiations and deals',
                                            }),
                                        ],
                                    }),
                                    c.jsxs('div', {
                                        className: 'profile-item',
                                        children: [
                                            c.jsx('div', { className: 'profile-name', children: 'Exam Assistant' }),
                                            c.jsx('div', {
                                                className: 'profile-description',
                                                children: 'Academic assistance for test-taking and exam questions',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    c.jsxs('div', {
                        className: 'option-group',
                        children: [
                            c.jsx('div', { className: 'option-label', children: c.jsx('span', { children: 'Audio Input' }) }),
                            c.jsx('div', {
                                className: 'description',
                                children: 'The AI listens to conversations and provides contextual assistance based on what it hears.',
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    hp = () => {
        const [u, d] = v.useState('sessions'),
            [f, r] = v.useState([]),
            [p, T] = v.useState([]),
            [A, B] = v.useState(null),
            [N, S] = v.useState(!1),
            O = v.useCallback(async () => {
                S(!0);
                try {
                    const G = await window.cheddar.getAllConversationSessions();
                    r(G || []);
                } catch (G) {
                    (console.error('Failed to load conversations:', G), r([]));
                } finally {
                    S(!1);
                }
            }, []),
            D = v.useCallback(() => {
                try {
                    const G = localStorage.getItem('savedResponses'),
                        Y = G ? JSON.parse(G) : [];
                    T(Y);
                } catch (G) {
                    (console.error('Failed to load saved responses:', G), T([]));
                }
            }, []),
            V = v.useCallback(G => {
                B(G);
            }, []),
            ae = v.useCallback(() => {
                B(null);
            }, []),
            X = v.useCallback(
                G => {
                    const Y = p.filter((ue, ne) => ne !== G);
                    (T(Y), localStorage.setItem('savedResponses', JSON.stringify(Y)));
                },
                [p]
            ),
            Q = v.useCallback(G => new Date(G).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), []),
            F = v.useCallback(G => new Date(G).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: !0 }), []),
            ve = v.useCallback(
                G => new Date(G).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }),
                []
            ),
            Ae = v.useCallback(
                G =>
                    G.transcription
                        ? G.transcription.length > 100
                            ? G.transcription.substring(0, 100) + '...'
                            : G.transcription
                        : 'No preview available',
                []
            ),
            pe = v.useCallback(
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
        v.useEffect(() => {
            u === 'sessions' ? O() : D();
        }, [u, O, D]);
        const ye = () =>
                N
                    ? c.jsx('div', { className: 'loading', children: 'Loading conversation history...' })
                    : f.length === 0
                      ? c.jsxs('div', {
                            className: 'emptyState',
                            children: [
                                c.jsx('div', { className: 'emptyStateTitle', children: 'No conversations yet' }),
                                c.jsx('div', { children: 'Start a session to see your conversation history here' }),
                            ],
                        })
                      : c.jsx('div', {
                            className: 'sessionsList',
                            children: f.map(G =>
                                c.jsxs(
                                    'div',
                                    {
                                        className: 'sessionItem',
                                        onClick: () => V(G),
                                        children: [
                                            c.jsxs('div', {
                                                className: 'sessionHeader',
                                                children: [
                                                    c.jsx('span', { className: 'sessionDate', children: Q(G.timestamp) }),
                                                    c.jsx('span', { className: 'sessionTime', children: F(G.timestamp) }),
                                                ],
                                            }),
                                            c.jsx('div', { className: 'sessionPreview', children: Ae(G) }),
                                        ],
                                    },
                                    G.id
                                )
                            ),
                        }),
            je = () => {
                if (!A) return null;
                const { conversationHistory: G } = A,
                    Y = [];
                return (
                    G &&
                        G.forEach(ue => {
                            (ue.transcription && Y.push({ type: 'user', content: ue.transcription, timestamp: ue.timestamp }),
                                ue.ai_response && Y.push({ type: 'ai', content: ue.ai_response, timestamp: ue.timestamp }));
                        }),
                    c.jsxs('div', {
                        className: 'historyContainer',
                        children: [
                            c.jsxs('div', {
                                className: 'backHeader',
                                children: [
                                    c.jsxs('button', {
                                        className: 'backButton',
                                        onClick: ae,
                                        children: [
                                            c.jsx('svg', {
                                                width: '16px',
                                                height: '16px',
                                                strokeWidth: '1.7',
                                                viewBox: '0 0 24 24',
                                                fill: 'none',
                                                xmlns: 'http://www.w3.org/2000/svg',
                                                color: 'currentColor',
                                                children: c.jsx('path', {
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
                                    c.jsxs('div', {
                                        className: 'legend',
                                        children: [
                                            c.jsxs('div', {
                                                className: 'legendItem',
                                                children: [c.jsx('div', { className: 'legendDot user' }), c.jsx('span', { children: 'Them' })],
                                            }),
                                            c.jsxs('div', {
                                                className: 'legendItem',
                                                children: [c.jsx('div', { className: 'legendDot ai' }), c.jsx('span', { children: 'Suggestion' })],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            c.jsx('div', {
                                className: 'conversationView',
                                children:
                                    Y.length > 0
                                        ? Y.map((ue, ne) => c.jsx('div', { className: `message ${ue.type}`, children: ue.content }, ne))
                                        : c.jsx('div', { className: 'emptyState', children: 'No conversation data available' }),
                            }),
                        ],
                    })
                );
            },
            xe = () => {
                if (p.length === 0)
                    return c.jsxs('div', {
                        className: 'emptyState',
                        children: [
                            c.jsx('div', { className: 'emptyStateTitle', children: 'No saved responses' }),
                            c.jsx('div', { children: 'Use the save button during conversations to save important responses' }),
                        ],
                    });
                const G = pe();
                return c.jsx('div', {
                    className: 'sessionsList',
                    children: p.map((Y, ue) =>
                        c.jsxs(
                            'div',
                            {
                                className: 'savedResponseItem',
                                children: [
                                    c.jsxs('div', {
                                        className: 'savedResponseHeader',
                                        children: [
                                            c.jsxs('div', {
                                                children: [
                                                    c.jsx('span', { className: 'savedResponseProfile', children: G[Y.profile] || Y.profile }),
                                                    c.jsx('span', { className: 'savedResponseDate', children: ve(Y.timestamp) }),
                                                ],
                                            }),
                                            c.jsx('button', {
                                                className: 'deleteButton',
                                                onClick: () => X(ue),
                                                title: 'Delete saved response',
                                                children: c.jsx('svg', {
                                                    width: '16px',
                                                    height: '16px',
                                                    strokeWidth: '1.7',
                                                    viewBox: '0 0 24 24',
                                                    fill: 'none',
                                                    xmlns: 'http://www.w3.org/2000/svg',
                                                    children: c.jsx('path', {
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
                                    c.jsx('div', { className: 'savedResponseContent', children: Y.response }),
                                ],
                            },
                            ue
                        )
                    ),
                });
            };
        return A
            ? je()
            : c.jsx('div', {
                  className: 'host',
                  children: c.jsxs('div', {
                      className: 'historyContainer',
                      children: [
                          c.jsxs('div', {
                              className: 'tabsContainer',
                              children: [
                                  c.jsx('button', {
                                      className: `tab ${u === 'sessions' ? 'active' : ''}`,
                                      onClick: () => d('sessions'),
                                      children: 'Conversation History',
                                  }),
                                  c.jsxs('button', {
                                      className: `tab ${u === 'saved' ? 'active' : ''}`,
                                      onClick: () => d('saved'),
                                      children: ['Saved Responses (', p.length, ')'],
                                  }),
                              ],
                          }),
                          u === 'sessions' ? ye() : xe(),
                      ],
                  }),
              });
    },
    gp = () => {
        const [u, d] = v.useState({
            isClearing: !1,
            statusMessage: '',
            statusType: '',
            throttleTokens: !0,
            maxTokensPerMin: 1e6,
            throttleAtPercent: 75,
            contentProtection: !0,
        });
        v.useEffect(() => {
            (f(), r(), Es());
        }, []);
        const f = () => {
                const O = localStorage.getItem('throttleTokens'),
                    D = localStorage.getItem('maxTokensPerMin'),
                    V = localStorage.getItem('throttleAtPercent');
                d(ae => ({
                    ...ae,
                    throttleTokens: O !== null ? O === 'true' : !0,
                    maxTokensPerMin: (D !== null && parseInt(D, 10)) || 1e6,
                    throttleAtPercent: (V !== null && parseInt(V, 10)) || 75,
                }));
            },
            r = () => {
                const O = localStorage.getItem('contentProtection');
                d(D => ({ ...D, contentProtection: O !== null ? O === 'true' : !0 }));
            },
            p = async () => {
                if (!u.isClearing) {
                    d(O => ({ ...O, isClearing: !0, statusMessage: '', statusType: '' }));
                    try {
                        (localStorage.clear(), sessionStorage.clear());
                        const O = await indexedDB.databases(),
                            D = O.map(
                                ae =>
                                    new Promise((X, Q) => {
                                        if (!ae.name) {
                                            X();
                                            return;
                                        }
                                        const F = indexedDB.deleteDatabase(ae.name);
                                        ((F.onsuccess = () => X()),
                                            (F.onerror = () => Q(F.error)),
                                            (F.onblocked = () => {
                                                (console.warn(`Deletion of database ${ae.name} was blocked`), X());
                                            }));
                                    })
                            );
                        if ((await Promise.all(D), 'caches' in window)) {
                            const ae = await caches.keys();
                            await Promise.all(ae.map(X => caches.delete(X)));
                        }
                        const V = `✅ Successfully cleared all local data (${O.length} databases, localStorage, sessionStorage, and caches)`;
                        (d(ae => ({ ...ae, statusMessage: V, statusType: 'success' })),
                            setTimeout(() => {
                                (d(ae => ({ ...ae, statusMessage: '🔄 Closing application...' })),
                                    setTimeout(async () => {
                                        window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('quit-application'));
                                    }, 1e3));
                            }, 2e3));
                    } catch (O) {
                        console.error('Error clearing data:', O);
                        const D = `❌ Error clearing data: ${O.message}`;
                        d(V => ({ ...V, statusMessage: D, statusType: 'error' }));
                    } finally {
                        d(O => ({ ...O, isClearing: !1 }));
                    }
                }
            },
            T = O => {
                const D = O.target.checked;
                (d(V => ({ ...V, throttleTokens: D })), localStorage.setItem('throttleTokens', D.toString()));
            },
            A = O => {
                const D = parseInt(O.target.value, 10);
                !isNaN(D) && D > 0 && (d(V => ({ ...V, maxTokensPerMin: D })), localStorage.setItem('maxTokensPerMin', D.toString()));
            },
            B = O => {
                const D = parseInt(O.target.value, 10);
                !isNaN(D) &&
                    D >= 0 &&
                    D <= 100 &&
                    (d(V => ({ ...V, throttleAtPercent: D })), localStorage.setItem('throttleAtPercent', D.toString()));
            },
            N = () => {
                (d(O => ({ ...O, throttleTokens: !0, maxTokensPerMin: 1e6, throttleAtPercent: 75 })),
                    localStorage.removeItem('throttleTokens'),
                    localStorage.removeItem('maxTokensPerMin'),
                    localStorage.removeItem('throttleAtPercent'));
            },
            S = async O => {
                const D = O.target.checked;
                if ((d(V => ({ ...V, contentProtection: D })), localStorage.setItem('contentProtection', D.toString()), window.electron?.ipcRenderer))
                    try {
                        await window.electron.ipcRenderer.invoke('update-content-protection', D);
                    } catch (V) {
                        console.error('Failed to update content protection:', V);
                    }
            };
        return c.jsxs('div', {
            className: 'advancedContainer',
            children: [
                c.jsxs('div', {
                    className: 'advancedSection',
                    children: [
                        c.jsx('div', { className: 'sectionTitle', children: c.jsx('span', { children: '🔒 Content Protection' }) }),
                        c.jsx('div', {
                            className: 'advancedDescription',
                            children:
                                'Content protection makes the application window invisible to screen sharing and recording software. This is useful for privacy when sharing your screen, but may interfere with certain display setups like DisplayLink.',
                        }),
                        c.jsxs('div', {
                            className: 'formGrid',
                            children: [
                                c.jsxs('div', {
                                    className: 'checkboxGroup',
                                    children: [
                                        c.jsx('input', {
                                            type: 'checkbox',
                                            className: 'checkboxInput',
                                            id: 'content-protection',
                                            checked: u.contentProtection,
                                            onChange: S,
                                        }),
                                        c.jsx('label', {
                                            htmlFor: 'content-protection',
                                            className: 'checkboxLabel',
                                            children: 'Enable content protection (stealth mode)',
                                        }),
                                    ],
                                }),
                                c.jsx('div', {
                                    className: 'formDescription',
                                    style: { marginLeft: '22px' },
                                    children: u.contentProtection
                                        ? 'The application is currently invisible to screen sharing and recording software.'
                                        : 'The application is currently visible to screen sharing and recording software.',
                                }),
                            ],
                        }),
                    ],
                }),
                c.jsxs('div', {
                    className: 'advancedSection',
                    children: [
                        c.jsx('div', { className: 'sectionTitle', children: c.jsx('span', { children: '⏱️ Rate Limiting' }) }),
                        c.jsxs('div', {
                            className: 'rateLimitWarning',
                            children: [
                                c.jsx('span', { className: 'rateLimitWarningIcon', children: '⚠️' }),
                                c.jsxs('span', {
                                    children: [
                                        c.jsx('strong', { children: 'Warning:' }),
                                        " Don't mess with these settings if you don't know what this is about. Incorrect rate limiting settings may cause the application to stop working properly or hit API limits unexpectedly.",
                                    ],
                                }),
                            ],
                        }),
                        c.jsxs('div', {
                            className: 'formGrid',
                            children: [
                                c.jsxs('div', {
                                    className: 'checkboxGroup',
                                    children: [
                                        c.jsx('input', {
                                            type: 'checkbox',
                                            className: 'checkboxInput',
                                            id: 'throttle-tokens',
                                            checked: u.throttleTokens,
                                            onChange: T,
                                        }),
                                        c.jsx('label', {
                                            htmlFor: 'throttle-tokens',
                                            className: 'checkboxLabel',
                                            children: 'Throttle tokens when close to rate limit',
                                        }),
                                    ],
                                }),
                                c.jsxs('div', {
                                    className: `rateLimitControls ${u.throttleTokens ? 'enabled' : ''}`,
                                    children: [
                                        c.jsxs('div', {
                                            className: 'formRow',
                                            children: [
                                                c.jsxs('div', {
                                                    className: 'formGroup',
                                                    children: [
                                                        c.jsx('label', { className: 'formLabel', children: 'Max Allowed Tokens Per Minute' }),
                                                        c.jsx('input', {
                                                            type: 'number',
                                                            className: 'formControl',
                                                            value: u.maxTokensPerMin,
                                                            min: '1000',
                                                            max: '10000000',
                                                            step: '1000',
                                                            onInput: A,
                                                            disabled: !u.throttleTokens,
                                                        }),
                                                        c.jsx('div', {
                                                            className: 'formDescription',
                                                            children: 'Maximum number of tokens allowed per minute before throttling kicks in',
                                                        }),
                                                    ],
                                                }),
                                                c.jsxs('div', {
                                                    className: 'formGroup',
                                                    children: [
                                                        c.jsx('label', { className: 'formLabel', children: 'Throttle At Percent' }),
                                                        c.jsx('input', {
                                                            type: 'number',
                                                            className: 'formControl',
                                                            value: u.throttleAtPercent,
                                                            min: '1',
                                                            max: '99',
                                                            step: '1',
                                                            onInput: B,
                                                            disabled: !u.throttleTokens,
                                                        }),
                                                        c.jsxs('div', {
                                                            className: 'formDescription',
                                                            children: [
                                                                'Start throttling when this percentage of the limit is reached (',
                                                                u.throttleAtPercent,
                                                                '% =',
                                                                Math.floor((u.maxTokensPerMin * u.throttleAtPercent) / 100),
                                                                ' tokens)',
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        c.jsxs('div', {
                                            className: 'rateLimitReset',
                                            children: [
                                                c.jsx('button', {
                                                    className: 'actionButton',
                                                    onClick: N,
                                                    disabled: !u.throttleTokens,
                                                    children: 'Reset to Defaults',
                                                }),
                                                c.jsx('div', {
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
                c.jsxs('div', {
                    className: 'advancedSection dangerSection',
                    children: [
                        c.jsx('div', { className: 'sectionTitle danger', children: c.jsx('span', { children: '🗑️ Data Management' }) }),
                        c.jsxs('div', {
                            className: 'dangerBox',
                            children: [
                                c.jsx('span', { className: 'dangerIcon', children: '⚠️' }),
                                c.jsxs('span', {
                                    children: [
                                        c.jsx('strong', { children: 'Important:' }),
                                        ' This action will permanently delete all local data and cannot be undone.',
                                    ],
                                }),
                            ],
                        }),
                        c.jsxs('div', {
                            children: [
                                c.jsx('button', {
                                    className: 'actionButton dangerButton',
                                    onClick: p,
                                    disabled: u.isClearing,
                                    children: u.isClearing ? '🔄 Clearing...' : '🗑️ Clear All Local Data',
                                }),
                                u.statusMessage &&
                                    c.jsx('div', {
                                        className: `statusMessage ${u.statusType === 'success' ? 'statusSuccess' : 'statusError'}`,
                                        children: u.statusMessage,
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    vp = ({ onComplete: u, onClose: d }) => {
        const [f, r] = v.useState(0),
            [p, T] = v.useState(''),
            [A, B] = v.useState(!1),
            [N, S] = v.useState(0),
            [O, D] = v.useState(null),
            V = v.useRef(null),
            ae = v.useRef(null),
            X = 800,
            Q = [
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
            F = [
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
            ve = v.useCallback(ne => (ne < 0.5 ? 4 * ne * ne * ne : 1 - Math.pow(-2 * ne + 2, 3) / 2), []),
            Ae = v.useCallback(
                (ne, He, oe) =>
                    ne.map((Ne, Te) => {
                        const H = He[Te];
                        return [Ne[0] + (H[0] - Ne[0]) * oe, Ne[1] + (H[1] - Ne[1]) * oe, Ne[2] + (H[2] - Ne[2]) * oe];
                    }),
                []
            ),
            pe = v.useCallback(ne => {
                T(ne.target.value);
            }, []),
            ye = v.useCallback(() => {
                (p.trim() && localStorage.setItem('customPrompt', p.trim()), localStorage.setItem('onboardingCompleted', 'true'), u());
            }, [p, u]),
            je = v.useCallback(
                ne => {
                    (D([...Q[f]]), r(ne), B(!0), S(performance.now()));
                },
                [Q, f]
            ),
            xe = v.useCallback(() => {
                f < 4 ? je(f + 1) : ye();
            }, [f, je, ye]),
            G = v.useCallback(() => {
                f > 0 && je(f - 1);
            }, [f, je]),
            Y = v.useCallback(
                ne => {
                    ne !== f && je(ne);
                },
                [f, je]
            );
        (v.useEffect(() => {
            const ne = V.current;
            if (!ne || !ne.getContext('2d')) return;
            const oe = () => {
                const H = ne.getBoundingClientRect();
                ((ne.width = H.width), (ne.height = H.height));
            };
            oe();
            const Ne = H => {
                (ue(H), (ae.current = requestAnimationFrame(Ne)));
            };
            Ne(0);
            const Te = () => oe();
            return (
                window.addEventListener('resize', Te),
                () => {
                    (ae.current && cancelAnimationFrame(ae.current), window.removeEventListener('resize', Te));
                }
            );
        }, []),
            v.useEffect(() => {
                const ne = localStorage.getItem('customPrompt');
                ne && T(ne);
            }, []));
        const ue = v.useCallback(
            ne => {
                const He = V.current,
                    oe = He?.getContext('2d');
                if (!oe || !He) return;
                const { width: Ne, height: Te } = He;
                let H = Q[f];
                if (A && O) {
                    const q = ne - N,
                        te = Math.min(q / X, 1),
                        ce = ve(te);
                    ((H = Ae(O, Q[f], ce)), te >= 1 && (B(!1), D(null)));
                }
                const b = ne * 5e-4,
                    L = Math.sin(b * 0.7) * Ne * 0.3,
                    k = Math.cos(b * 0.5) * Te * 0.2,
                    I = oe.createLinearGradient(L, k, Ne + L * 0.5, Te + k * 0.5);
                (H.forEach((q, te) => {
                    const ce = te / (H.length - 1),
                        P = Math.sin(b + te * 0.3) * 0.05,
                        Be = Math.max(0, Math.min(255, q[0] + P * 5)),
                        we = Math.max(0, Math.min(255, q[1] + P * 5)),
                        nt = Math.max(0, Math.min(255, q[2] + P * 5));
                    I.addColorStop(ce, `rgb(${Be}, ${we}, ${nt})`);
                }),
                    (oe.fillStyle = I),
                    oe.fillRect(0, 0, Ne, Te));
                const se = Ne * 0.5 + Math.sin(b * 0.3) * Ne * 0.15,
                    h = Te * 0.5 + Math.cos(b * 0.4) * Te * 0.1,
                    E = Math.max(Ne, Te) * 0.8,
                    U = oe.createRadialGradient(se, h, 0, se, h, E);
                (U.addColorStop(0, `rgba(${H[0][0] + 10}, ${H[0][1] + 10}, ${H[0][2] + 10}, 0.1)`),
                    U.addColorStop(0.5, `rgba(${H[2][0]}, ${H[2][1]}, ${H[2][2]}, 0.05)`),
                    U.addColorStop(1, `rgba(${H[H.length - 1][0]}, ${H[H.length - 1][1]}, ${H[H.length - 1][2]}, 0.03)`),
                    (oe.globalCompositeOperation = 'overlay'),
                    (oe.fillStyle = U),
                    oe.fillRect(0, 0, Ne, Te),
                    (oe.globalCompositeOperation = 'source-over'));
            },
            [f, A, O, N, Q, ve, Ae, X]
        );
        return c.jsx('div', {
            className: 'onboarding-view-root',
            children: c.jsxs('div', {
                className: 'onboarding-view-onboardingContainer',
                children: [
                    c.jsx('canvas', { ref: V, className: 'onboarding-view-gradientCanvas' }),
                    c.jsxs('div', {
                        className: 'onboarding-view-contentWrapper',
                        children: [
                            c.jsx('img', { className: 'onboarding-view-slideIcon', src: F[f].icon, alt: `${F[f].title} icon` }),
                            c.jsx('div', { className: 'onboarding-view-slideTitle', children: F[f].title }),
                            c.jsx('div', { className: 'onboarding-view-slideContent', children: F[f].content }),
                            F[f].showTextarea &&
                                c.jsx('textarea', {
                                    className: 'onboarding-view-contextTextarea',
                                    placeholder: 'Paste your resume, job description, or any relevant context here...',
                                    value: p,
                                    onChange: pe,
                                }),
                            F[f].showFeatures &&
                                c.jsxs('div', {
                                    className: 'onboarding-view-featureList',
                                    children: [
                                        c.jsxs('div', {
                                            className: 'onboarding-view-featureItem',
                                            children: [
                                                c.jsx('span', { className: 'onboarding-view-featureIcon', children: '🎨' }),
                                                'Customize AI behavior and responses',
                                            ],
                                        }),
                                        c.jsxs('div', {
                                            className: 'onboarding-view-featureItem',
                                            children: [
                                                c.jsx('span', { className: 'onboarding-view-featureIcon', children: '📚' }),
                                                'Review conversation history',
                                            ],
                                        }),
                                        c.jsxs('div', {
                                            className: 'onboarding-view-featureItem',
                                            children: [
                                                c.jsx('span', { className: 'onboarding-view-featureIcon', children: '🔧' }),
                                                'Adjust capture settings and intervals',
                                            ],
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    c.jsxs('div', {
                        className: 'onboarding-view-navigation',
                        children: [
                            c.jsx('button', {
                                className: 'onboarding-view-navButton',
                                onClick: G,
                                disabled: f === 0,
                                children: c.jsx('svg', {
                                    width: '16px',
                                    height: '16px',
                                    strokeWidth: '2',
                                    viewBox: '0 0 24 24',
                                    fill: 'none',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    children: c.jsx('path', {
                                        d: 'M15 6L9 12L15 18',
                                        stroke: 'currentColor',
                                        strokeLinecap: 'round',
                                        strokeLinejoin: 'round',
                                    }),
                                }),
                            }),
                            c.jsx('div', {
                                className: 'onboarding-view-progressDots',
                                children: [0, 1, 2, 3, 4].map(ne =>
                                    c.jsx(
                                        'div',
                                        { className: `onboarding-view-dot ${ne === f ? 'onboarding-view-dotActive' : ''}`, onClick: () => Y(ne) },
                                        ne
                                    )
                                ),
                            }),
                            c.jsx('button', {
                                className: 'onboarding-view-navButton',
                                onClick: xe,
                                children:
                                    f === 4
                                        ? 'Get Started'
                                        : c.jsx('svg', {
                                              width: '16px',
                                              height: '16px',
                                              strokeWidth: '2',
                                              viewBox: '0 0 24 24',
                                              fill: 'none',
                                              xmlns: 'http://www.w3.org/2000/svg',
                                              children: c.jsx('path', {
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
    pp = () => {
        const [u, d] = v.useState(localStorage.getItem('onboardingCompleted') ? 'main' : 'onboarding'),
            [f, r] = v.useState(''),
            [p, T] = v.useState(null),
            [A, B] = v.useState(!1),
            [N, S] = v.useState(!1),
            [O, D] = v.useState(!1),
            [V, ae] = v.useState(!1),
            [X, Q] = v.useState(localStorage.getItem('selectedProfile') || 'interview'),
            [F, ve] = v.useState(localStorage.getItem('selectedLanguage') || 'en-US'),
            [Ae, pe] = v.useState(localStorage.getItem('selectedScreenshotInterval') || '5'),
            [ye, je] = v.useState(localStorage.getItem('selectedImageQuality') || 'medium'),
            [xe, G] = v.useState(localStorage.getItem('layoutMode') || 'normal'),
            [Y, ue] = v.useState(localStorage.getItem('advancedMode') === 'true'),
            [ne, He] = v.useState(() => {
                try {
                    return JSON.parse(localStorage.getItem('customKeybinds') || '{}');
                } catch {
                    return {};
                }
            }),
            [oe, Ne] = v.useState(localStorage.getItem('googleSearchEnabled') === 'true'),
            [Te, H] = v.useState(parseInt(localStorage.getItem('backgroundTransparency') || '80')),
            [b, L] = v.useState(parseInt(localStorage.getItem('fontSize') || '14')),
            [k, I] = v.useState([]),
            [se, h] = v.useState(-1),
            [E, U] = v.useState(!1),
            [q, te] = v.useState(() => {
                try {
                    return JSON.parse(localStorage.getItem('savedResponses') || '[]');
                } catch {
                    return [];
                }
            }),
            [ce, P] = v.useState(!1),
            [Be, we] = v.useState(!1),
            [nt, dt] = v.useState(!0);
        (v.useEffect(() => {
            cn(xe);
        }, [xe]),
            v.useEffect(() => {
                if (window.electron?.ipcRenderer) {
                    const Z = window.electron.ipcRenderer,
                        Ye = (un, ll) => {
                            Jl(ll);
                        },
                        Pe = (un, ll) => {
                            mt(ll);
                        },
                        gt = (un, ll) => {
                            P(ll);
                        },
                        _s = (un, ll) => {
                            D(ll);
                        };
                    return (
                        Z.on('update-response', Ye),
                        Z.on('update-status', Pe),
                        Z.on('click-through-toggled', gt),
                        Z.on('session-initializing', _s),
                        () => {
                            (Z.removeAllListeners('update-response'),
                                Z.removeAllListeners('update-status'),
                                Z.removeAllListeners('click-through-toggled'),
                                Z.removeAllListeners('session-initializing'));
                        }
                    );
                }
            }, []),
            v.useEffect(() => {
                window.electron?.ipcRenderer && window.electron.ipcRenderer.send('view-changed', u);
            }, [u]),
            v.useEffect(() => {
                localStorage.setItem('selectedProfile', X);
            }, [X]),
            v.useEffect(() => {
                localStorage.setItem('selectedLanguage', F);
            }, [F]),
            v.useEffect(() => {
                localStorage.setItem('selectedScreenshotInterval', Ae);
            }, [Ae]),
            v.useEffect(() => {
                localStorage.setItem('selectedImageQuality', ye);
            }, [ye]),
            v.useEffect(() => {
                localStorage.setItem('advancedMode', Y.toString());
            }, [Y]));
        const mt = v.useCallback(Z => {
                (r(Z), (Z.includes('Ready') || Z.includes('Listening') || Z.includes('Error')) && dt(!0));
            }, []),
            Jl = v.useCallback(
                Z => {
                    const Ye =
                        Z.length < 30 &&
                        (Z.toLowerCase().includes('hmm') ||
                            Z.toLowerCase().includes('okay') ||
                            Z.toLowerCase().includes('next') ||
                            Z.toLowerCase().includes('go on') ||
                            Z.toLowerCase().includes('continue'));
                    (I(Pe =>
                        Be || Pe.length === 0
                            ? (h(Pe.length), we(!1), dt(!1), [...Pe, Z])
                            : !nt && !Ye && Pe.length > 0
                              ? [...Pe.slice(0, Pe.length - 1), Z]
                              : (h(Pe.length), dt(!1), [...Pe, Z])
                    ),
                        U(!0));
                },
                [Be, nt]
            );
        (v.useCallback(() => {
            d('customize');
        }, []),
            v.useCallback(() => {
                d('help');
            }, []),
            v.useCallback(() => {
                d('history');
            }, []),
            v.useCallback(() => {
                d('advanced');
            }, []));
        const Vt = v.useCallback(async () => {
                window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('minimize-window'));
            }, []),
            Wl = v.useCallback(Z => {
                d(Z);
            }, []),
            $l = v.useCallback(async () => {
                (u === 'assistant' &&
                    N &&
                    (window.cheddar && window.cheddar.stopCapture(),
                    window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('close-session')),
                    S(!1)),
                    console.log('Attempting to quit application...'),
                    window.electron?.ipcRenderer
                        ? (console.log('Calling quit-application IPC...'),
                          window.electron.ipcRenderer
                              .invoke('quit-application')
                              .then(Z => {
                                  console.log('Quit application result:', Z);
                              })
                              .catch(Z => {
                                  console.error('Quit application error:', Z);
                              }))
                        : console.error('window.electron.ipcRenderer not available'));
            }, [u, N]);
        v.useCallback(async () => {
            window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('toggle-window-visibility'));
        }, []);
        const _ = v.useCallback(async () => {
                const Z = localStorage.getItem('apiKey')?.trim();
                if (!Z || Z === '') {
                    ae(!0);
                    return;
                }
                D(!0);
                try {
                    (window.cheddar && (await window.cheddar.initializeGemini(X, F), window.cheddar.startCapture(Ae, ye)),
                        I([]),
                        h(-1),
                        T(Date.now()),
                        d('assistant'));
                } catch (Ye) {
                    (console.error('Failed to start session:', Ye), D(!1));
                }
            }, [X, F, Ae, ye]),
            ee = v.useCallback(async () => {
                window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('open-external', 'https://cheatingdaddy.com/help/api-key'));
            }, []),
            Me = v.useCallback(Z => {
                Q(Z);
            }, []),
            Cl = v.useCallback(Z => {
                ve(Z);
            }, []),
            Fl = v.useCallback(Z => {
                pe(Z);
            }, []),
            Ms = v.useCallback(Z => {
                je(Z);
            }, []),
            ks = v.useCallback(Z => {
                ue(Z);
            }, []);
        v.useCallback(() => {
            d('main');
        }, []);
        const ht = v.useCallback(async Z => {
                window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('open-external', Z));
            }, []),
            Ds = v.useCallback(async Z => {
                if (window.cheddar) {
                    const Ye = await window.cheddar.sendTextMessage(Z);
                    Ye.success ? (mt('Message sent...'), we(!0)) : mt('Error sending message: ' + Ye.error);
                }
            }, []),
            si = v.useCallback(async () => {
                (window.cheddar && window.cheddar.stopCapture(),
                    window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('close-session')),
                    S(!1),
                    d('main'));
            }, []),
            ci = v.useCallback(Z => {
                (h(Z), U(!1));
            }, []),
            Il = v.useCallback(() => {
                d('main');
            }, []),
            ui = v.useCallback(async Z => {
                if ((G(Z), cn(Z), window.electron?.ipcRenderer))
                    try {
                        await window.electron.ipcRenderer.invoke('update-sizes');
                    } catch (Ye) {
                        console.error('Failed to update sizes in main process:', Ye);
                    }
            }, []),
            cn = Z => {
                Z === 'compact'
                    ? document.documentElement.classList.add('compact-layout')
                    : document.documentElement.classList.remove('compact-layout');
            },
            Rs = () => {
                switch (u) {
                    case 'onboarding':
                        return c.jsx(vp, { currentSlide: 0, contextText: '', onComplete: Il, onClose: Il });
                    case 'main':
                        return c.jsx(rp, { onStart: _, onAPIKeyHelp: ee, isInitializing: O, onLayoutModeChange: ui, showApiKeyError: V });
                    case 'customize':
                        return c.jsx(dp, {
                            selectedProfile: X,
                            selectedLanguage: F,
                            selectedScreenshotInterval: Ae,
                            selectedImageQuality: ye,
                            layoutMode: xe,
                            keybinds: ne,
                            googleSearchEnabled: oe,
                            backgroundTransparency: Te,
                            fontSize: b,
                            onProfileChange: Me,
                            onLanguageChange: Cl,
                            onScreenshotIntervalChange: Fl,
                            onImageQualityChange: Ms,
                            onLayoutModeChange: ui,
                            advancedMode: Y,
                            onAdvancedModeChange: ks,
                        });
                    case 'help':
                        return c.jsx(mp, { onExternalLinkClick: ht, keybinds: ne });
                    case 'history':
                        return c.jsx(hp, {});
                    case 'advanced':
                        return c.jsx(gp, {});
                    case 'assistant':
                        return c.jsx(fp, {
                            responses: k,
                            currentResponseIndex: se,
                            selectedProfile: X,
                            onSendText: Ds,
                            shouldAnimateResponse: E,
                            savedResponses: q,
                            onResponseIndexChanged: ci,
                            onStopSession: si,
                        });
                    default:
                        return c.jsxs('div', { children: ['Unknown view: ', u] });
                }
            },
            Os = () => {
                const Z = 'main-content';
                return u === 'assistant' ? `${Z} assistant-view` : u === 'onboarding' ? `${Z} onboarding-view` : `${Z} with-border`;
            };
        return c.jsx('div', {
            className: 'window-container',
            children: c.jsxs('div', {
                className: 'container',
                children: [
                    c.jsx(op, { currentView: u, onViewChange: Wl, onMinimize: Vt, onClose: $l }),
                    c.jsx('div', { className: Os(), children: c.jsx('div', { className: 'view-container', children: Rs() }) }),
                ],
            }),
        });
    },
    yp = () => {
        const [u, d] = v.useState(!1);
        v.useEffect(() => {
            f();
        }, []);
        const f = async () => {
            d(!0);
        };
        return u ? c.jsx(pv, { children: c.jsx(pp, {}) }) : c.jsx('div', { className: 'loading', children: 'Loading...' });
    };
window.electron = { ipcRenderer: window.require('electron').ipcRenderer };
const Gm = document.getElementById('root');
if (!Gm) throw new Error('Root element not found');
const bp = vv.createRoot(Gm);
bp.render(c.jsx(ov.StrictMode, { children: c.jsx(yp, {}) }));
const { ipcRenderer: Tt } = window.require('electron');
window.randomDisplayName = null;
Tt.invoke('get-random-display-name')
    .then(u => {
        ((window.randomDisplayName = u), console.log('Set random display name:', u));
    })
    .catch(u => {
        (console.warn('Could not get random display name:', u), (window.randomDisplayName = 'System Monitor'));
    });
let rt = null,
    As = null,
    Wt = null,
    $t = null,
    zs = null;
const Jt = 24e3,
    oo = 0.1,
    ro = 4096;
let Ie = null,
    Nt = null,
    ai = null,
    Ym = 'medium';
const Vm = process.platform === 'linux',
    fo = process.platform === 'darwin',
    ni = {
        tokens: [],
        audioStartTime: null,
        addTokens(u, d = 'image') {
            const f = Date.now();
            (this.tokens.push({ timestamp: f, count: u, type: d }), this.cleanOldTokens());
        },
        calculateImageTokens(u, d) {
            if (u <= 384 && d <= 384) return 258;
            const f = Math.ceil(u / 768),
                r = Math.ceil(d / 768);
            return f * r * 258;
        },
        trackAudioTokens() {
            if (!this.audioStartTime) {
                this.audioStartTime = Date.now();
                return;
            }
            const u = Date.now(),
                d = (u - this.audioStartTime) / 1e3,
                f = Math.floor(d * 32);
            f > 0 && (this.addTokens(f, 'audio'), (this.audioStartTime = u));
        },
        cleanOldTokens() {
            const u = Date.now() - 6e4;
            this.tokens = this.tokens.filter(d => d.timestamp > u);
        },
        getTokensInLastMinute() {
            return (this.cleanOldTokens(), this.tokens.reduce((u, d) => u + d.count, 0));
        },
        shouldThrottle() {
            if (!(localStorage.getItem('throttleTokens') === 'true')) return !1;
            const d = parseInt(localStorage.getItem('maxTokensPerMin') || '1000000', 10),
                f = parseInt(localStorage.getItem('throttleAtPercent') || '75', 10),
                r = this.getTokensInLastMinute(),
                p = Math.floor((d * f) / 100);
            return (console.log(`Token check: ${r}/${d} (throttle at ${p})`), r >= p);
        },
        reset() {
            ((this.tokens = []), (this.audioStartTime = null));
        },
    };
setInterval(() => {
    ni.trackAudioTokens();
}, 2e3);
function mo(u) {
    const d = new Int16Array(u.length);
    for (let f = 0; f < u.length; f++) {
        const r = Math.max(-1, Math.min(1, u[f]));
        d[f] = r < 0 ? r * 32768 : r * 32767;
    }
    return d;
}
function ho(u) {
    let d = '';
    const f = new Uint8Array(u),
        r = f.byteLength;
    for (let p = 0; p < r; p++) d += String.fromCharCode(f[p]);
    return btoa(d);
}
async function Sp(u = 'interview', d = 'en-US') {
    const f = localStorage.getItem('apiKey')?.trim();
    f && ((await Tt.invoke('initialize-gemini', f, localStorage.getItem('customPrompt') || '', u, d)) ? an.setStatus('Live') : an.setStatus('error'));
}
Tt.on('update-status', (u, d) => {
    (console.log('Status update:', d), an.setStatus(d));
});
async function xp(u = 5, d = 'medium') {
    ((Ym = d), ni.reset(), console.log('🎯 Token tracker reset for new capture session'));
    const f = localStorage.getItem('audioMode') || 'speaker_only';
    try {
        if (fo) {
            console.log('Starting macOS capture with SystemAudioDump...');
            const r = await Tt.invoke('start-macos-audio');
            if (!r.success) throw new Error('Failed to start macOS audio capture: ' + r.error);
            if (
                ((rt = await navigator.mediaDevices.getDisplayMedia({
                    video: { frameRate: 1, width: { ideal: 1920 }, height: { ideal: 1080 } },
                    audio: !1,
                })),
                console.log('macOS screen capture started - audio handled by SystemAudioDump'),
                f === 'mic_only' || f === 'both')
            ) {
                let p = null;
                try {
                    ((p = await navigator.mediaDevices.getUserMedia({
                        audio: { sampleRate: Jt, channelCount: 1, echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 },
                        video: !1,
                    })),
                        console.log('macOS microphone capture started'),
                        lo(p));
                } catch (T) {
                    console.warn('Failed to get microphone access on macOS:', T);
                }
            }
        } else if (Vm) {
            try {
                ((rt = await navigator.mediaDevices.getDisplayMedia({
                    video: { frameRate: 1, width: { ideal: 1920 }, height: { ideal: 1080 } },
                    audio: { sampleRate: Jt, channelCount: 1, echoCancellation: !1, noiseSuppression: !1, autoGainControl: !1 },
                })),
                    console.log('Linux system audio capture via getDisplayMedia succeeded'),
                    Cp());
            } catch (r) {
                (console.warn('System audio via getDisplayMedia failed, trying screen-only capture:', r),
                    (rt = await navigator.mediaDevices.getDisplayMedia({
                        video: { frameRate: 1, width: { ideal: 1920 }, height: { ideal: 1080 } },
                        audio: !1,
                    })));
            }
            if (f === 'mic_only' || f === 'both') {
                let r = null;
                try {
                    ((r = await navigator.mediaDevices.getUserMedia({
                        audio: { sampleRate: Jt, channelCount: 1, echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 },
                        video: !1,
                    })),
                        console.log('Linux microphone capture started'),
                        lo(r));
                } catch (p) {
                    console.warn('Failed to get microphone access on Linux:', p);
                }
            }
            console.log('Linux capture started - system audio:', rt.getAudioTracks().length > 0, 'microphone mode:', f);
        } else if (
            ((rt = await navigator.mediaDevices.getDisplayMedia({
                video: { frameRate: 1, width: { ideal: 1920 }, height: { ideal: 1080 } },
                audio: { sampleRate: Jt, channelCount: 1, echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 },
            })),
            console.log('Windows capture started with loopback audio'),
            jp(),
            f === 'mic_only' || f === 'both')
        ) {
            let r = null;
            try {
                ((r = await navigator.mediaDevices.getUserMedia({
                    audio: { sampleRate: Jt, channelCount: 1, echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 },
                    video: !1,
                })),
                    console.log('Windows microphone capture started'),
                    lo(r));
            } catch (p) {
                console.warn('Failed to get microphone access on Windows:', p);
            }
        }
        if (
            (console.log('MediaStream obtained:', {
                hasVideo: rt.getVideoTracks().length > 0,
                hasAudio: rt.getAudioTracks().length > 0,
                videoTrack: rt.getVideoTracks()[0]?.getSettings(),
            }),
            u === 'manual' || u === 'Manual')
        )
            console.log('Manual mode enabled - screenshots will be captured on demand only');
        else {
            const r = parseInt(u) * 1e3;
            ((As = setInterval(() => so(d), r)), setTimeout(() => so(d), 100));
        }
    } catch (r) {
        (console.error('Error starting capture:', r), an.setStatus('error'));
    }
}
function lo(u) {
    const d = new AudioContext({ sampleRate: Jt }),
        f = d.createMediaStreamSource(u),
        r = d.createScriptProcessor(ro, 1, 1);
    let p = [];
    const T = Jt * oo;
    ((r.onaudioprocess = async A => {
        const B = A.inputBuffer.getChannelData(0);
        for (p.push(...B); p.length >= T; ) {
            const N = p.splice(0, T),
                S = mo(new Float32Array(N)),
                O = ho(S.buffer);
            await Tt.invoke('send-mic-audio-content', { data: O, mimeType: 'audio/pcm;rate=24000' });
        }
    }),
        f.connect(r),
        r.connect(d.destination),
        (zs = r));
}
function Cp() {
    if (!rt) return;
    Wt = new AudioContext({ sampleRate: Jt });
    const u = Wt.createMediaStreamSource(rt);
    $t = Wt.createScriptProcessor(ro, 1, 1);
    let d = [];
    const f = Jt * oo;
    (($t.onaudioprocess = async r => {
        const p = r.inputBuffer.getChannelData(0);
        for (d.push(...p); d.length >= f; ) {
            const T = d.splice(0, f),
                A = mo(new Float32Array(T)),
                B = ho(A.buffer);
            await Tt.invoke('send-audio-content', { data: B, mimeType: 'audio/pcm;rate=24000' });
        }
    }),
        u.connect($t),
        $t.connect(Wt.destination));
}
function jp() {
    if (!rt) return;
    Wt = new AudioContext({ sampleRate: Jt });
    const u = Wt.createMediaStreamSource(rt);
    $t = Wt.createScriptProcessor(ro, 1, 1);
    let d = [];
    const f = Jt * oo;
    (($t.onaudioprocess = async r => {
        const p = r.inputBuffer.getChannelData(0);
        for (d.push(...p); d.length >= f; ) {
            const T = d.splice(0, f),
                A = mo(new Float32Array(T)),
                B = ho(A.buffer);
            await Tt.invoke('send-audio-content', { data: B, mimeType: 'audio/pcm;rate=24000' });
        }
    }),
        u.connect($t),
        $t.connect(Wt.destination));
}
async function so(u = 'medium', d = !1) {
    if ((console.log(`Capturing ${d ? 'manual' : 'automated'} screenshot...`), !rt)) return;
    if (!d && ni.shouldThrottle()) {
        console.log('⚠️ Automated screenshot skipped due to rate limiting');
        return;
    }
    if (
        (Ie ||
            ((Ie = document.createElement('video')),
            (Ie.srcObject = rt),
            (Ie.muted = !0),
            (Ie.playsInline = !0),
            await Ie.play(),
            await new Promise(T => {
                if (Ie && Ie.readyState >= 2) return T();
                Ie && (Ie.onloadedmetadata = () => T());
            }),
            Ie && ((Nt = document.createElement('canvas')), (Nt.width = Ie.videoWidth), (Nt.height = Ie.videoHeight), (ai = Nt.getContext('2d')))),
        !Ie || Ie.readyState < 2)
    ) {
        console.warn('Video not ready yet, skipping screenshot');
        return;
    }
    if (!Nt || !ai) {
        console.error('Canvas not initialized');
        return;
    }
    (ai.drawImage(Ie, 0, 0, Nt.width, Nt.height),
        ai.getImageData(0, 0, 1, 1).data.every((T, A) => (A === 3 ? !0 : T === 0)) && console.warn('Screenshot appears to be blank/black'));
    let p;
    switch (u) {
        case 'high':
            p = 0.9;
            break;
        case 'medium':
            p = 0.7;
            break;
        case 'low':
            p = 0.5;
            break;
        default:
            p = 0.7;
    }
    Nt.toBlob(
        async T => {
            if (!T) {
                console.error('Failed to create blob from canvas');
                return;
            }
            const A = new FileReader();
            ((A.onloadend = async () => {
                const N = A.result.split(',')[1];
                if (!N || N.length < 100) {
                    console.error('Invalid base64 data generated');
                    return;
                }
                const S = await Tt.invoke('send-image-content', { data: N });
                if (S.success) {
                    if (Nt) {
                        const O = ni.calculateImageTokens(Nt.width, Nt.height);
                        (ni.addTokens(O, 'image'), console.log(`📊 Image sent successfully - ${O} tokens used (${Nt.width}x${Nt.height})`));
                    }
                } else console.error('Failed to send image:', S.error);
            }),
                A.readAsDataURL(T));
        },
        'image/jpeg',
        p
    );
}
async function Xm(u = null) {
    (console.log('Manual screenshot triggered'),
        await so(u || Ym, !0),
        await new Promise(f => setTimeout(f, 2e3)),
        await Qm(`Help me on this page, give me the answer no bs, complete answer.
        So if its a code question, give me the approach in few bullet points, then the entire code. Also if theres anything else i need to know, tell me.
        If its a question about the website, give me the answer no bs, complete answer.
        If its a mcq question, give me the answer no bs, complete answer.
        `));
}
window.captureManualScreenshot = Xm;
function Np() {
    (As && (clearInterval(As), (As = null)),
        $t && ($t.disconnect(), ($t = null)),
        zs && (zs.disconnect(), (zs = null)),
        Wt && (Wt.close(), (Wt = null)),
        rt && (rt.getTracks().forEach(u => u.stop()), (rt = null)),
        fo &&
            Tt.invoke('stop-macos-audio').catch(u => {
                console.error('Error stopping macOS audio:', u);
            }),
        Ie && (Ie.pause(), (Ie.srcObject = null), (Ie = null)),
        (Nt = null),
        (ai = null));
}
async function Qm(u) {
    if (!u || u.trim().length === 0) return (console.warn('Cannot send empty text message'), { success: !1, error: 'Empty message' });
    try {
        const d = await Tt.invoke('send-text-message', u);
        return (d.success ? console.log('Text message sent successfully') : console.error('Failed to send text message:', d.error), d);
    } catch (d) {
        return (console.error('Error sending text message:', d), { success: !1, error: d.message });
    }
}
let Ft = null;
async function ii() {
    return new Promise((u, d) => {
        const f = indexedDB.open('ConversationHistory', 1);
        ((f.onerror = () => d(f.error)),
            (f.onsuccess = () => {
                ((Ft = f.result), u(Ft));
            }),
            (f.onupgradeneeded = r => {
                const p = r.target.result;
                p.objectStoreNames.contains('sessions') ||
                    p.createObjectStore('sessions', { keyPath: 'sessionId' }).createIndex('timestamp', 'timestamp', { unique: !1 });
            }));
    });
}
async function Tp(u, d) {
    if ((Ft || (await ii()), !Ft)) throw new Error('Failed to initialize conversation database');
    const r = Ft.transaction(['sessions'], 'readwrite').objectStore('sessions'),
        p = { sessionId: u, timestamp: parseInt(u), conversationHistory: d, lastUpdated: Date.now() };
    return new Promise((T, A) => {
        const B = r.put(p);
        ((B.onerror = () => A(B.error)), (B.onsuccess = () => T(B.result)));
    });
}
async function wp(u) {
    if ((Ft || (await ii()), !Ft)) throw new Error('Failed to initialize conversation database');
    const f = Ft.transaction(['sessions'], 'readonly').objectStore('sessions');
    return new Promise((r, p) => {
        const T = f.get(u);
        ((T.onerror = () => p(T.error)), (T.onsuccess = () => r(T.result)));
    });
}
async function Ap() {
    if ((Ft || (await ii()), !Ft)) throw new Error('Failed to initialize conversation database');
    const f = Ft.transaction(['sessions'], 'readonly').objectStore('sessions').index('timestamp');
    return new Promise((r, p) => {
        const T = f.getAll();
        ((T.onerror = () => p(T.error)),
            (T.onsuccess = () => {
                const A = T.result.sort((B, N) => N.timestamp - B.timestamp);
                r(A);
            }));
    });
}
Tt.on('save-conversation-turn', async (u, d) => {
    try {
        (await Tp(d.sessionId, d.fullHistory), console.log('Conversation session saved:', d.sessionId));
    } catch (f) {
        console.error('Error saving conversation session:', f);
    }
});
ii().catch(console.error);
Tt.on('clear-sensitive-data', () => {
    (console.log('Clearing renderer-side sensitive data...'), localStorage.removeItem('apiKey'), localStorage.removeItem('customPrompt'));
});
function zp(u) {
    const d = an.getCurrentView();
    (u === 'ctrl+enter' || u === 'cmd+enter') && (d === 'main' || Xm());
}
document.querySelector('cheating-daddy-app');
const an = {
    element: () => ({ handleStart: () => {} }),
    e: () => ({ handleStart: () => {} }),
    getCurrentView: () => 'main',
    getLayoutMode: () => 'normal',
    setStatus: u => Tt.send('update-status', u),
    setResponse: u => Tt.send('update-response', u),
    initializeGemini: Sp,
    startCapture: xp,
    stopCapture: Np,
    sendTextMessage: Qm,
    handleShortcut: zp,
    getAllConversationSessions: Ap,
    getConversationSession: wp,
    initConversationStorage: ii,
    getContentProtection: () => {
        const u = localStorage.getItem('contentProtection');
        return u !== null ? u === 'true' : !0;
    },
    isLinux: Vm,
    isMacOS: fo,
};
window.cheddar = an;
