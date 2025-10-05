function fb(l, s) {
    for (var c = 0; c < s.length; c++) {
        const r = s[c];
        if (typeof r != 'string' && !Array.isArray(r)) {
            for (const d in r)
                if (d !== 'default' && !(d in l)) {
                    const m = Object.getOwnPropertyDescriptor(r, d);
                    m && Object.defineProperty(l, d, m.get ? m : { enumerable: !0, get: () => r[d] });
                }
        }
    }
    return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
    const s = document.createElement('link').relList;
    if (s && s.supports && s.supports('modulepreload')) return;
    for (const d of document.querySelectorAll('link[rel="modulepreload"]')) r(d);
    new MutationObserver(d => {
        for (const m of d) if (m.type === 'childList') for (const p of m.addedNodes) p.tagName === 'LINK' && p.rel === 'modulepreload' && r(p);
    }).observe(document, { childList: !0, subtree: !0 });
    function c(d) {
        const m = {};
        return (
            d.integrity && (m.integrity = d.integrity),
            d.referrerPolicy && (m.referrerPolicy = d.referrerPolicy),
            d.crossOrigin === 'use-credentials'
                ? (m.credentials = 'include')
                : d.crossOrigin === 'anonymous'
                  ? (m.credentials = 'omit')
                  : (m.credentials = 'same-origin'),
            m
        );
    }
    function r(d) {
        if (d.ep) return;
        d.ep = !0;
        const m = c(d);
        fetch(d.href, m);
    }
})();
function Jp(l) {
    return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, 'default') ? l.default : l;
}
var du = { exports: {} },
    Gi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var op;
function db() {
    if (op) return Gi;
    op = 1;
    var l = Symbol.for('react.transitional.element'),
        s = Symbol.for('react.fragment');
    function c(r, d, m) {
        var p = null;
        if ((m !== void 0 && (p = '' + m), d.key !== void 0 && (p = '' + d.key), 'key' in d)) {
            m = {};
            for (var g in d) g !== 'key' && (m[g] = d[g]);
        } else m = d;
        return ((d = m.ref), { $$typeof: l, type: r, key: p, ref: d !== void 0 ? d : null, props: m });
    }
    return ((Gi.Fragment = s), (Gi.jsx = c), (Gi.jsxs = c), Gi);
}
var sp;
function mb() {
    return (sp || ((sp = 1), (du.exports = db())), du.exports);
}
var u = mb(),
    mu = { exports: {} },
    xe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cp;
function hb() {
    if (cp) return xe;
    cp = 1;
    var l = Symbol.for('react.transitional.element'),
        s = Symbol.for('react.portal'),
        c = Symbol.for('react.fragment'),
        r = Symbol.for('react.strict_mode'),
        d = Symbol.for('react.profiler'),
        m = Symbol.for('react.consumer'),
        p = Symbol.for('react.context'),
        g = Symbol.for('react.forward_ref'),
        b = Symbol.for('react.suspense'),
        y = Symbol.for('react.memo'),
        S = Symbol.for('react.lazy'),
        x = Symbol.for('react.activity'),
        T = Symbol.iterator;
    function j(E) {
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
        M = {};
    function U(E, q, W) {
        ((this.props = E), (this.context = q), (this.refs = M), (this.updater = W || R));
    }
    ((U.prototype.isReactComponent = {}),
        (U.prototype.setState = function (E, q) {
            if (typeof E != 'object' && typeof E != 'function' && E != null)
                throw Error('takes an object of state variables to update or a function which returns an object of state variables.');
            this.updater.enqueueSetState(this, E, q, 'setState');
        }),
        (U.prototype.forceUpdate = function (E) {
            this.updater.enqueueForceUpdate(this, E, 'forceUpdate');
        }));
    function B() {}
    B.prototype = U.prototype;
    function H(E, q, W) {
        ((this.props = E), (this.context = q), (this.refs = M), (this.updater = W || R));
    }
    var Z = (H.prototype = new B());
    ((Z.constructor = H), w(Z, U.prototype), (Z.isPureReactComponent = !0));
    var $ = Array.isArray;
    function ne() {}
    var z = { H: null, A: null, T: null, S: null },
        X = Object.prototype.hasOwnProperty;
    function ae(E, q, W) {
        var P = W.ref;
        return { $$typeof: l, type: E, key: q, ref: P !== void 0 ? P : null, props: W };
    }
    function te(E, q) {
        return ae(E.type, q, E.props);
    }
    function ge(E) {
        return typeof E == 'object' && E !== null && E.$$typeof === l;
    }
    function le(E) {
        var q = { '=': '=0', ':': '=2' };
        return (
            '$' +
            E.replace(/[=:]/g, function (W) {
                return q[W];
            })
        );
    }
    var fe = /\/+/g;
    function ie(E, q) {
        return typeof E == 'object' && E !== null && E.key != null ? le('' + E.key) : q.toString(36);
    }
    function K(E) {
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
    function A(E, q, W, P, ue) {
        var he = typeof E;
        (he === 'undefined' || he === 'boolean') && (E = null);
        var F = !1;
        if (E === null) F = !0;
        else
            switch (he) {
                case 'bigint':
                case 'string':
                case 'number':
                    F = !0;
                    break;
                case 'object':
                    switch (E.$$typeof) {
                        case l:
                        case s:
                            F = !0;
                            break;
                        case S:
                            return ((F = E._init), A(F(E._payload), q, W, P, ue));
                    }
            }
        if (F)
            return (
                (ue = ue(E)),
                (F = P === '' ? '.' + ie(E, 0) : P),
                $(ue)
                    ? ((W = ''),
                      F != null && (W = F.replace(fe, '$&/') + '/'),
                      A(ue, q, W, '', function (we) {
                          return we;
                      }))
                    : ue != null &&
                      (ge(ue) && (ue = te(ue, W + (ue.key == null || (E && E.key === ue.key) ? '' : ('' + ue.key).replace(fe, '$&/') + '/') + F)),
                      q.push(ue)),
                1
            );
        F = 0;
        var be = P === '' ? '.' : P + ':';
        if ($(E)) for (var ye = 0; ye < E.length; ye++) ((P = E[ye]), (he = be + ie(P, ye)), (F += A(P, q, W, he, ue)));
        else if (((ye = j(E)), typeof ye == 'function'))
            for (E = ye.call(E), ye = 0; !(P = E.next()).done; ) ((P = P.value), (he = be + ie(P, ye++)), (F += A(P, q, W, he, ue)));
        else if (he === 'object') {
            if (typeof E.then == 'function') return A(K(E), q, W, P, ue);
            throw (
                (q = String(E)),
                Error(
                    'Objects are not valid as a React child (found: ' +
                        (q === '[object Object]' ? 'object with keys {' + Object.keys(E).join(', ') + '}' : q) +
                        '). If you meant to render a collection of children, use an array instead.'
                )
            );
        }
        return F;
    }
    function G(E, q, W) {
        if (E == null) return E;
        var P = [],
            ue = 0;
        return (
            A(E, P, '', '', function (he) {
                return q.call(W, he, ue++);
            }),
            P
        );
    }
    function O(E) {
        if (E._status === -1) {
            var q = E._result;
            ((q = q()),
                q.then(
                    function (W) {
                        (E._status === 0 || E._status === -1) && ((E._status = 1), (E._result = W));
                    },
                    function (W) {
                        (E._status === 0 || E._status === -1) && ((E._status = 2), (E._result = W));
                    }
                ),
                E._status === -1 && ((E._status = 0), (E._result = q)));
        }
        if (E._status === 1) return E._result.default;
        throw E._result;
    }
    var ee =
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
            map: G,
            forEach: function (E, q, W) {
                G(
                    E,
                    function () {
                        q.apply(this, arguments);
                    },
                    W
                );
            },
            count: function (E) {
                var q = 0;
                return (
                    G(E, function () {
                        q++;
                    }),
                    q
                );
            },
            toArray: function (E) {
                return (
                    G(E, function (q) {
                        return q;
                    }) || []
                );
            },
            only: function (E) {
                if (!ge(E)) throw Error('React.Children.only expected to receive a single React element child.');
                return E;
            },
        };
    return (
        (xe.Activity = x),
        (xe.Children = de),
        (xe.Component = U),
        (xe.Fragment = c),
        (xe.Profiler = d),
        (xe.PureComponent = H),
        (xe.StrictMode = r),
        (xe.Suspense = b),
        (xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = z),
        (xe.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (E) {
                return z.H.useMemoCache(E);
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
        (xe.cloneElement = function (E, q, W) {
            if (E == null) throw Error('The argument must be a React element, but you passed ' + E + '.');
            var P = w({}, E.props),
                ue = E.key;
            if (q != null)
                for (he in (q.key !== void 0 && (ue = '' + q.key), q))
                    !X.call(q, he) || he === 'key' || he === '__self' || he === '__source' || (he === 'ref' && q.ref === void 0) || (P[he] = q[he]);
            var he = arguments.length - 2;
            if (he === 1) P.children = W;
            else if (1 < he) {
                for (var F = Array(he), be = 0; be < he; be++) F[be] = arguments[be + 2];
                P.children = F;
            }
            return ae(E.type, ue, P);
        }),
        (xe.createContext = function (E) {
            return (
                (E = { $$typeof: p, _currentValue: E, _currentValue2: E, _threadCount: 0, Provider: null, Consumer: null }),
                (E.Provider = E),
                (E.Consumer = { $$typeof: m, _context: E }),
                E
            );
        }),
        (xe.createElement = function (E, q, W) {
            var P,
                ue = {},
                he = null;
            if (q != null)
                for (P in (q.key !== void 0 && (he = '' + q.key), q))
                    X.call(q, P) && P !== 'key' && P !== '__self' && P !== '__source' && (ue[P] = q[P]);
            var F = arguments.length - 2;
            if (F === 1) ue.children = W;
            else if (1 < F) {
                for (var be = Array(F), ye = 0; ye < F; ye++) be[ye] = arguments[ye + 2];
                ue.children = be;
            }
            if (E && E.defaultProps) for (P in ((F = E.defaultProps), F)) ue[P] === void 0 && (ue[P] = F[P]);
            return ae(E, he, ue);
        }),
        (xe.createRef = function () {
            return { current: null };
        }),
        (xe.forwardRef = function (E) {
            return { $$typeof: g, render: E };
        }),
        (xe.isValidElement = ge),
        (xe.lazy = function (E) {
            return { $$typeof: S, _payload: { _status: -1, _result: E }, _init: O };
        }),
        (xe.memo = function (E, q) {
            return { $$typeof: y, type: E, compare: q === void 0 ? null : q };
        }),
        (xe.startTransition = function (E) {
            var q = z.T,
                W = {};
            z.T = W;
            try {
                var P = E(),
                    ue = z.S;
                (ue !== null && ue(W, P), typeof P == 'object' && P !== null && typeof P.then == 'function' && P.then(ne, ee));
            } catch (he) {
                ee(he);
            } finally {
                (q !== null && W.types !== null && (q.types = W.types), (z.T = q));
            }
        }),
        (xe.unstable_useCacheRefresh = function () {
            return z.H.useCacheRefresh();
        }),
        (xe.use = function (E) {
            return z.H.use(E);
        }),
        (xe.useActionState = function (E, q, W) {
            return z.H.useActionState(E, q, W);
        }),
        (xe.useCallback = function (E, q) {
            return z.H.useCallback(E, q);
        }),
        (xe.useContext = function (E) {
            return z.H.useContext(E);
        }),
        (xe.useDebugValue = function () {}),
        (xe.useDeferredValue = function (E, q) {
            return z.H.useDeferredValue(E, q);
        }),
        (xe.useEffect = function (E, q) {
            return z.H.useEffect(E, q);
        }),
        (xe.useEffectEvent = function (E) {
            return z.H.useEffectEvent(E);
        }),
        (xe.useId = function () {
            return z.H.useId();
        }),
        (xe.useImperativeHandle = function (E, q, W) {
            return z.H.useImperativeHandle(E, q, W);
        }),
        (xe.useInsertionEffect = function (E, q) {
            return z.H.useInsertionEffect(E, q);
        }),
        (xe.useLayoutEffect = function (E, q) {
            return z.H.useLayoutEffect(E, q);
        }),
        (xe.useMemo = function (E, q) {
            return z.H.useMemo(E, q);
        }),
        (xe.useOptimistic = function (E, q) {
            return z.H.useOptimistic(E, q);
        }),
        (xe.useReducer = function (E, q, W) {
            return z.H.useReducer(E, q, W);
        }),
        (xe.useRef = function (E) {
            return z.H.useRef(E);
        }),
        (xe.useState = function (E) {
            return z.H.useState(E);
        }),
        (xe.useSyncExternalStore = function (E, q, W) {
            return z.H.useSyncExternalStore(E, q, W);
        }),
        (xe.useTransition = function () {
            return z.H.useTransition();
        }),
        (xe.version = '19.2.0'),
        xe
    );
}
var rp;
function Ku() {
    return (rp || ((rp = 1), (mu.exports = hb())), mu.exports);
}
var h = Ku();
const Yn = Jp(h),
    Ip = fb({ __proto__: null, default: Yn }, [h]);
var hu = { exports: {} },
    Yi = {},
    pu = { exports: {} },
    gu = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var up;
function pb() {
    return (
        up ||
            ((up = 1),
            (function (l) {
                function s(A, G) {
                    var O = A.length;
                    A.push(G);
                    e: for (; 0 < O; ) {
                        var ee = (O - 1) >>> 1,
                            de = A[ee];
                        if (0 < d(de, G)) ((A[ee] = G), (A[O] = de), (O = ee));
                        else break e;
                    }
                }
                function c(A) {
                    return A.length === 0 ? null : A[0];
                }
                function r(A) {
                    if (A.length === 0) return null;
                    var G = A[0],
                        O = A.pop();
                    if (O !== G) {
                        A[0] = O;
                        e: for (var ee = 0, de = A.length, E = de >>> 1; ee < E; ) {
                            var q = 2 * (ee + 1) - 1,
                                W = A[q],
                                P = q + 1,
                                ue = A[P];
                            if (0 > d(W, O)) P < de && 0 > d(ue, W) ? ((A[ee] = ue), (A[P] = O), (ee = P)) : ((A[ee] = W), (A[q] = O), (ee = q));
                            else if (P < de && 0 > d(ue, O)) ((A[ee] = ue), (A[P] = O), (ee = P));
                            else break e;
                        }
                    }
                    return G;
                }
                function d(A, G) {
                    var O = A.sortIndex - G.sortIndex;
                    return O !== 0 ? O : A.id - G.id;
                }
                if (((l.unstable_now = void 0), typeof performance == 'object' && typeof performance.now == 'function')) {
                    var m = performance;
                    l.unstable_now = function () {
                        return m.now();
                    };
                } else {
                    var p = Date,
                        g = p.now();
                    l.unstable_now = function () {
                        return p.now() - g;
                    };
                }
                var b = [],
                    y = [],
                    S = 1,
                    x = null,
                    T = 3,
                    j = !1,
                    R = !1,
                    w = !1,
                    M = !1,
                    U = typeof setTimeout == 'function' ? setTimeout : null,
                    B = typeof clearTimeout == 'function' ? clearTimeout : null,
                    H = typeof setImmediate < 'u' ? setImmediate : null;
                function Z(A) {
                    for (var G = c(y); G !== null; ) {
                        if (G.callback === null) r(y);
                        else if (G.startTime <= A) (r(y), (G.sortIndex = G.expirationTime), s(b, G));
                        else break;
                        G = c(y);
                    }
                }
                function $(A) {
                    if (((w = !1), Z(A), !R))
                        if (c(b) !== null) ((R = !0), ne || ((ne = !0), le()));
                        else {
                            var G = c(y);
                            G !== null && K($, G.startTime - A);
                        }
                }
                var ne = !1,
                    z = -1,
                    X = 5,
                    ae = -1;
                function te() {
                    return M ? !0 : !(l.unstable_now() - ae < X);
                }
                function ge() {
                    if (((M = !1), ne)) {
                        var A = l.unstable_now();
                        ae = A;
                        var G = !0;
                        try {
                            e: {
                                ((R = !1), w && ((w = !1), B(z), (z = -1)), (j = !0));
                                var O = T;
                                try {
                                    t: {
                                        for (Z(A), x = c(b); x !== null && !(x.expirationTime > A && te()); ) {
                                            var ee = x.callback;
                                            if (typeof ee == 'function') {
                                                ((x.callback = null), (T = x.priorityLevel));
                                                var de = ee(x.expirationTime <= A);
                                                if (((A = l.unstable_now()), typeof de == 'function')) {
                                                    ((x.callback = de), Z(A), (G = !0));
                                                    break t;
                                                }
                                                (x === c(b) && r(b), Z(A));
                                            } else r(b);
                                            x = c(b);
                                        }
                                        if (x !== null) G = !0;
                                        else {
                                            var E = c(y);
                                            (E !== null && K($, E.startTime - A), (G = !1));
                                        }
                                    }
                                    break e;
                                } finally {
                                    ((x = null), (T = O), (j = !1));
                                }
                                G = void 0;
                            }
                        } finally {
                            G ? le() : (ne = !1);
                        }
                    }
                }
                var le;
                if (typeof H == 'function')
                    le = function () {
                        H(ge);
                    };
                else if (typeof MessageChannel < 'u') {
                    var fe = new MessageChannel(),
                        ie = fe.port2;
                    ((fe.port1.onmessage = ge),
                        (le = function () {
                            ie.postMessage(null);
                        }));
                } else
                    le = function () {
                        U(ge, 0);
                    };
                function K(A, G) {
                    z = U(function () {
                        A(l.unstable_now());
                    }, G);
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
                            : (X = 0 < A ? Math.floor(1e3 / A) : 5);
                    }),
                    (l.unstable_getCurrentPriorityLevel = function () {
                        return T;
                    }),
                    (l.unstable_next = function (A) {
                        switch (T) {
                            case 1:
                            case 2:
                            case 3:
                                var G = 3;
                                break;
                            default:
                                G = T;
                        }
                        var O = T;
                        T = G;
                        try {
                            return A();
                        } finally {
                            T = O;
                        }
                    }),
                    (l.unstable_requestPaint = function () {
                        M = !0;
                    }),
                    (l.unstable_runWithPriority = function (A, G) {
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
                        var O = T;
                        T = A;
                        try {
                            return G();
                        } finally {
                            T = O;
                        }
                    }),
                    (l.unstable_scheduleCallback = function (A, G, O) {
                        var ee = l.unstable_now();
                        switch (
                            (typeof O == 'object' && O !== null ? ((O = O.delay), (O = typeof O == 'number' && 0 < O ? ee + O : ee)) : (O = ee), A)
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
                            (de = O + de),
                            (A = { id: S++, callback: G, priorityLevel: A, startTime: O, expirationTime: de, sortIndex: -1 }),
                            O > ee
                                ? ((A.sortIndex = O), s(y, A), c(b) === null && A === c(y) && (w ? (B(z), (z = -1)) : (w = !0), K($, O - ee)))
                                : ((A.sortIndex = de), s(b, A), R || j || ((R = !0), ne || ((ne = !0), le()))),
                            A
                        );
                    }),
                    (l.unstable_shouldYield = te),
                    (l.unstable_wrapCallback = function (A) {
                        var G = T;
                        return function () {
                            var O = T;
                            T = G;
                            try {
                                return A.apply(this, arguments);
                            } finally {
                                T = O;
                            }
                        };
                    }));
            })(gu)),
        gu
    );
}
var fp;
function gb() {
    return (fp || ((fp = 1), (pu.exports = pb())), pu.exports);
}
var vu = { exports: {} },
    bt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dp;
function vb() {
    if (dp) return bt;
    dp = 1;
    var l = Ku();
    function s(b) {
        var y = 'https://react.dev/errors/' + b;
        if (1 < arguments.length) {
            y += '?args[]=' + encodeURIComponent(arguments[1]);
            for (var S = 2; S < arguments.length; S++) y += '&args[]=' + encodeURIComponent(arguments[S]);
        }
        return (
            'Minified React error #' +
            b +
            '; visit ' +
            y +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
    }
    function c() {}
    var r = {
            d: {
                f: c,
                r: function () {
                    throw Error(s(522));
                },
                D: c,
                C: c,
                L: c,
                m: c,
                X: c,
                S: c,
                M: c,
            },
            p: 0,
            findDOMNode: null,
        },
        d = Symbol.for('react.portal');
    function m(b, y, S) {
        var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return { $$typeof: d, key: x == null ? null : '' + x, children: b, containerInfo: y, implementation: S };
    }
    var p = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function g(b, y) {
        if (b === 'font') return '';
        if (typeof y == 'string') return y === 'use-credentials' ? y : '';
    }
    return (
        (bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
        (bt.createPortal = function (b, y) {
            var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)) throw Error(s(299));
            return m(b, y, null, S);
        }),
        (bt.flushSync = function (b) {
            var y = p.T,
                S = r.p;
            try {
                if (((p.T = null), (r.p = 2), b)) return b();
            } finally {
                ((p.T = y), (r.p = S), r.d.f());
            }
        }),
        (bt.preconnect = function (b, y) {
            typeof b == 'string' &&
                (y ? ((y = y.crossOrigin), (y = typeof y == 'string' ? (y === 'use-credentials' ? y : '') : void 0)) : (y = null), r.d.C(b, y));
        }),
        (bt.prefetchDNS = function (b) {
            typeof b == 'string' && r.d.D(b);
        }),
        (bt.preinit = function (b, y) {
            if (typeof b == 'string' && y && typeof y.as == 'string') {
                var S = y.as,
                    x = g(S, y.crossOrigin),
                    T = typeof y.integrity == 'string' ? y.integrity : void 0,
                    j = typeof y.fetchPriority == 'string' ? y.fetchPriority : void 0;
                S === 'style'
                    ? r.d.S(b, typeof y.precedence == 'string' ? y.precedence : void 0, { crossOrigin: x, integrity: T, fetchPriority: j })
                    : S === 'script' &&
                      r.d.X(b, { crossOrigin: x, integrity: T, fetchPriority: j, nonce: typeof y.nonce == 'string' ? y.nonce : void 0 });
            }
        }),
        (bt.preinitModule = function (b, y) {
            if (typeof b == 'string')
                if (typeof y == 'object' && y !== null) {
                    if (y.as == null || y.as === 'script') {
                        var S = g(y.as, y.crossOrigin);
                        r.d.M(b, {
                            crossOrigin: S,
                            integrity: typeof y.integrity == 'string' ? y.integrity : void 0,
                            nonce: typeof y.nonce == 'string' ? y.nonce : void 0,
                        });
                    }
                } else y == null && r.d.M(b);
        }),
        (bt.preload = function (b, y) {
            if (typeof b == 'string' && typeof y == 'object' && y !== null && typeof y.as == 'string') {
                var S = y.as,
                    x = g(S, y.crossOrigin);
                r.d.L(b, S, {
                    crossOrigin: x,
                    integrity: typeof y.integrity == 'string' ? y.integrity : void 0,
                    nonce: typeof y.nonce == 'string' ? y.nonce : void 0,
                    type: typeof y.type == 'string' ? y.type : void 0,
                    fetchPriority: typeof y.fetchPriority == 'string' ? y.fetchPriority : void 0,
                    referrerPolicy: typeof y.referrerPolicy == 'string' ? y.referrerPolicy : void 0,
                    imageSrcSet: typeof y.imageSrcSet == 'string' ? y.imageSrcSet : void 0,
                    imageSizes: typeof y.imageSizes == 'string' ? y.imageSizes : void 0,
                    media: typeof y.media == 'string' ? y.media : void 0,
                });
            }
        }),
        (bt.preloadModule = function (b, y) {
            if (typeof b == 'string')
                if (y) {
                    var S = g(y.as, y.crossOrigin);
                    r.d.m(b, {
                        as: typeof y.as == 'string' && y.as !== 'script' ? y.as : void 0,
                        crossOrigin: S,
                        integrity: typeof y.integrity == 'string' ? y.integrity : void 0,
                    });
                } else r.d.m(b);
        }),
        (bt.requestFormReset = function (b) {
            r.d.r(b);
        }),
        (bt.unstable_batchedUpdates = function (b, y) {
            return b(y);
        }),
        (bt.useFormState = function (b, y, S) {
            return p.H.useFormState(b, y, S);
        }),
        (bt.useFormStatus = function () {
            return p.H.useHostTransitionStatus();
        }),
        (bt.version = '19.2.0'),
        bt
    );
}
var mp;
function Wp() {
    if (mp) return vu.exports;
    mp = 1;
    function l() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
            } catch (s) {
                console.error(s);
            }
    }
    return (l(), (vu.exports = vb()), vu.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hp;
function yb() {
    if (hp) return Yi;
    hp = 1;
    var l = gb(),
        s = Ku(),
        c = Wp();
    function r(e) {
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
    function d(e) {
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
    function g(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
        }
        return null;
    }
    function b(e) {
        if (m(e) !== e) throw Error(r(188));
    }
    function y(e) {
        var t = e.alternate;
        if (!t) {
            if (((t = m(e)), t === null)) throw Error(r(188));
            return t !== e ? null : e;
        }
        for (var n = e, a = t; ; ) {
            var i = n.return;
            if (i === null) break;
            var o = i.alternate;
            if (o === null) {
                if (((a = i.return), a !== null)) {
                    n = a;
                    continue;
                }
                break;
            }
            if (i.child === o.child) {
                for (o = i.child; o; ) {
                    if (o === n) return (b(i), e);
                    if (o === a) return (b(i), t);
                    o = o.sibling;
                }
                throw Error(r(188));
            }
            if (n.return !== a.return) ((n = i), (a = o));
            else {
                for (var f = !1, v = i.child; v; ) {
                    if (v === n) {
                        ((f = !0), (n = i), (a = o));
                        break;
                    }
                    if (v === a) {
                        ((f = !0), (a = i), (n = o));
                        break;
                    }
                    v = v.sibling;
                }
                if (!f) {
                    for (v = o.child; v; ) {
                        if (v === n) {
                            ((f = !0), (n = o), (a = i));
                            break;
                        }
                        if (v === a) {
                            ((f = !0), (a = o), (n = i));
                            break;
                        }
                        v = v.sibling;
                    }
                    if (!f) throw Error(r(189));
                }
            }
            if (n.alternate !== a) throw Error(r(190));
        }
        if (n.tag !== 3) throw Error(r(188));
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
        j = Symbol.for('react.transitional.element'),
        R = Symbol.for('react.portal'),
        w = Symbol.for('react.fragment'),
        M = Symbol.for('react.strict_mode'),
        U = Symbol.for('react.profiler'),
        B = Symbol.for('react.consumer'),
        H = Symbol.for('react.context'),
        Z = Symbol.for('react.forward_ref'),
        $ = Symbol.for('react.suspense'),
        ne = Symbol.for('react.suspense_list'),
        z = Symbol.for('react.memo'),
        X = Symbol.for('react.lazy'),
        ae = Symbol.for('react.activity'),
        te = Symbol.for('react.memo_cache_sentinel'),
        ge = Symbol.iterator;
    function le(e) {
        return e === null || typeof e != 'object' ? null : ((e = (ge && e[ge]) || e['@@iterator']), typeof e == 'function' ? e : null);
    }
    var fe = Symbol.for('react.client.reference');
    function ie(e) {
        if (e == null) return null;
        if (typeof e == 'function') return e.$$typeof === fe ? null : e.displayName || e.name || null;
        if (typeof e == 'string') return e;
        switch (e) {
            case w:
                return 'Fragment';
            case U:
                return 'Profiler';
            case M:
                return 'StrictMode';
            case $:
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
                case Z:
                    var t = e.render;
                    return (
                        (e = e.displayName),
                        e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
                        e
                    );
                case z:
                    return ((t = e.displayName || null), t !== null ? t : ie(e.type) || 'Memo');
                case X:
                    ((t = e._payload), (e = e._init));
                    try {
                        return ie(e(t));
                    } catch {}
            }
        return null;
    }
    var K = Array.isArray,
        A = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        G = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        O = { pending: !1, data: null, method: null, action: null },
        ee = [],
        de = -1;
    function E(e) {
        return { current: e };
    }
    function q(e) {
        0 > de || ((e.current = ee[de]), (ee[de] = null), de--);
    }
    function W(e, t) {
        (de++, (ee[de] = e.current), (e.current = t));
    }
    var P = E(null),
        ue = E(null),
        he = E(null),
        F = E(null);
    function be(e, t) {
        switch ((W(he, t), W(ue, e), W(P, null), t.nodeType)) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? Mh(e) : 0;
                break;
            default:
                if (((e = t.tagName), (t = t.namespaceURI))) ((t = Mh(t)), (e = Rh(t, e)));
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
        (q(P), W(P, e));
    }
    function ye() {
        (q(P), q(ue), q(he));
    }
    function we(e) {
        e.memoizedState !== null && W(F, e);
        var t = P.current,
            n = Rh(t, e.type);
        t !== n && (W(ue, e), W(P, n));
    }
    function Te(e) {
        (ue.current === e && (q(P), q(ue)), F.current === e && (q(F), (Bi._currentValue = O)));
    }
    var Me, et;
    function ot(e) {
        if (Me === void 0)
            try {
                throw Error();
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                ((Me = (t && t[1]) || ''),
                    (et =
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
            et
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
                                    var L = V;
                                }
                                Reflect.construct(e, [], I);
                            } else {
                                try {
                                    I.call();
                                } catch (V) {
                                    L = V;
                                }
                                e.call(I.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (V) {
                                L = V;
                            }
                            (I = e()) && typeof I.catch == 'function' && I.catch(function () {});
                        }
                    } catch (V) {
                        if (V && L && typeof V.stack == 'string') return [V.stack, L.stack];
                    }
                    return [null, null];
                },
            };
            a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
            var i = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, 'name');
            i && i.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, 'name', { value: 'DetermineComponentFrameRoot' });
            var o = a.DetermineComponentFrameRoot(),
                f = o[0],
                v = o[1];
            if (f && v) {
                var C = f.split(`
`),
                    _ = v.split(`
`);
                for (i = a = 0; a < C.length && !C[a].includes('DetermineComponentFrameRoot'); ) a++;
                for (; i < _.length && !_[i].includes('DetermineComponentFrameRoot'); ) i++;
                if (a === C.length || i === _.length) for (a = C.length - 1, i = _.length - 1; 1 <= a && 0 <= i && C[a] !== _[i]; ) i--;
                for (; 1 <= a && 0 <= i; a--, i--)
                    if (C[a] !== _[i]) {
                        if (a !== 1 || i !== 1)
                            do
                                if ((a--, i--, 0 > i || C[a] !== _[i])) {
                                    var Y =
                                        `
` + C[a].replace(' at new ', ' at ');
                                    return (e.displayName && Y.includes('<anonymous>') && (Y = Y.replace('<anonymous>', e.displayName)), Y);
                                }
                            while (1 <= a && 0 <= i);
                        break;
                    }
            }
        } finally {
            ((en = !1), (Error.prepareStackTrace = n));
        }
        return (n = e ? e.displayName || e.name : '') ? ot(n) : '';
    }
    function J(e, t) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return ot(e.type);
            case 16:
                return ot('Lazy');
            case 13:
                return e.child !== t && t !== null ? ot('Suspense Fallback') : ot('Suspense');
            case 19:
                return ot('SuspenseList');
            case 0:
            case 15:
                return tn(e.type, !1);
            case 11:
                return tn(e.type.render, !1);
            case 1:
                return tn(e.type, !0);
            case 31:
                return ot('Activity');
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
    var Le = Object.prototype.hasOwnProperty,
        Qn = l.unstable_scheduleCallback,
        Ta = l.unstable_cancelCallback,
        Js = l.unstable_shouldYield,
        Is = l.unstable_requestPaint,
        xt = l.unstable_now,
        Ws = l.unstable_getCurrentPriorityLevel,
        eo = l.unstable_ImmediatePriority,
        to = l.unstable_UserBlockingPriority,
        Aa = l.unstable_NormalPriority,
        no = l.unstable_LowPriority,
        Il = l.unstable_IdlePriority,
        $s = l.log,
        Fs = l.unstable_setDisableYieldValue,
        oe = null,
        Ke = null;
    function st(e) {
        if ((typeof $s == 'function' && Fs(e), Ke && typeof Ke.setStrictMode == 'function'))
            try {
                Ke.setStrictMode(oe, e);
            } catch {}
    }
    var wt = Math.clz32 ? Math.clz32 : Cn,
        Ps = Math.log,
        Wl = Math.LN2;
    function Cn(e) {
        return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ps(e) / Wl) | 0)) | 0);
    }
    var ao = 256,
        lo = 262144,
        io = 4194304;
    function Na(e) {
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
    function oo(e, t, n) {
        var a = e.pendingLanes;
        if (a === 0) return 0;
        var i = 0,
            o = e.suspendedLanes,
            f = e.pingedLanes;
        e = e.warmLanes;
        var v = a & 134217727;
        return (
            v !== 0
                ? ((a = v & ~o), a !== 0 ? (i = Na(a)) : ((f &= v), f !== 0 ? (i = Na(f)) : n || ((n = v & ~e), n !== 0 && (i = Na(n)))))
                : ((v = a & ~o), v !== 0 ? (i = Na(v)) : f !== 0 ? (i = Na(f)) : n || ((n = a & ~e), n !== 0 && (i = Na(n)))),
            i === 0 ? 0 : t !== 0 && t !== i && (t & o) === 0 && ((o = i & -i), (n = t & -t), o >= n || (o === 32 && (n & 4194048) !== 0)) ? t : i
        );
    }
    function $l(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Fv(e, t) {
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
    function uf() {
        var e = io;
        return ((io <<= 1), (io & 62914560) === 0 && (io = 4194304), e);
    }
    function ec(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
    }
    function Fl(e, t) {
        ((e.pendingLanes |= t), t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function Pv(e, t, n, a, i, o) {
        var f = e.pendingLanes;
        ((e.pendingLanes = n),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.warmLanes = 0),
            (e.expiredLanes &= n),
            (e.entangledLanes &= n),
            (e.errorRecoveryDisabledLanes &= n),
            (e.shellSuspendCounter = 0));
        var v = e.entanglements,
            C = e.expirationTimes,
            _ = e.hiddenUpdates;
        for (n = f & ~n; 0 < n; ) {
            var Y = 31 - wt(n),
                I = 1 << Y;
            ((v[Y] = 0), (C[Y] = -1));
            var L = _[Y];
            if (L !== null)
                for (_[Y] = null, Y = 0; Y < L.length; Y++) {
                    var V = L[Y];
                    V !== null && (V.lane &= -536870913);
                }
            n &= ~I;
        }
        (a !== 0 && ff(e, a, 0), o !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(f & ~t)));
    }
    function ff(e, t, n) {
        ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
        var a = 31 - wt(t);
        ((e.entangledLanes |= t), (e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 261930)));
    }
    function df(e, t) {
        var n = (e.entangledLanes |= t);
        for (e = e.entanglements; n; ) {
            var a = 31 - wt(n),
                i = 1 << a;
            ((i & t) | (e[a] & t) && (e[a] |= t), (n &= ~i));
        }
    }
    function mf(e, t) {
        var n = t & -t;
        return ((n = (n & 42) !== 0 ? 1 : tc(n)), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n);
    }
    function tc(e) {
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
    function nc(e) {
        return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
    }
    function hf() {
        var e = G.p;
        return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Ph(e.type));
    }
    function pf(e, t) {
        var n = G.p;
        try {
            return ((G.p = e), t());
        } finally {
            G.p = n;
        }
    }
    var Zn = Math.random().toString(36).slice(2),
        mt = '__reactFiber$' + Zn,
        Tt = '__reactProps$' + Zn,
        Fa = '__reactContainer$' + Zn,
        ac = '__reactEvents$' + Zn,
        ey = '__reactListeners$' + Zn,
        ty = '__reactHandles$' + Zn,
        gf = '__reactResources$' + Zn,
        Pl = '__reactMarker$' + Zn;
    function lc(e) {
        (delete e[mt], delete e[Tt], delete e[ac], delete e[ey], delete e[ty]);
    }
    function Pa(e) {
        var t = e[mt];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
            if ((t = n[Fa] || n[mt])) {
                if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
                    for (e = Uh(e); e !== null; ) {
                        if ((n = e[mt])) return n;
                        e = Uh(e);
                    }
                return t;
            }
            ((e = n), (n = e.parentNode));
        }
        return null;
    }
    function el(e) {
        if ((e = e[mt] || e[Fa])) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
        }
        return null;
    }
    function ei(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
        throw Error(r(33));
    }
    function tl(e) {
        var t = e[gf];
        return (t || (t = e[gf] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
    }
    function ft(e) {
        e[Pl] = !0;
    }
    var vf = new Set(),
        yf = {};
    function ja(e, t) {
        (nl(e, t), nl(e + 'Capture', t));
    }
    function nl(e, t) {
        for (yf[e] = t, e = 0; e < t.length; e++) vf.add(t[e]);
    }
    var ny = RegExp(
            '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
        ),
        bf = {},
        Sf = {};
    function ay(e) {
        return Le.call(Sf, e) ? !0 : Le.call(bf, e) ? !1 : ny.test(e) ? (Sf[e] = !0) : ((bf[e] = !0), !1);
    }
    function so(e, t, n) {
        if (ay(t))
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
    function co(e, t, n) {
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
    function En(e, t, n, a) {
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
    function Xt(e) {
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
    function xf(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
    }
    function ly(e, t, n) {
        var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (!e.hasOwnProperty(t) && typeof a < 'u' && typeof a.get == 'function' && typeof a.set == 'function') {
            var i = a.get,
                o = a.set;
            return (
                Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                        return i.call(this);
                    },
                    set: function (f) {
                        ((n = '' + f), o.call(this, f));
                    },
                }),
                Object.defineProperty(e, t, { enumerable: a.enumerable }),
                {
                    getValue: function () {
                        return n;
                    },
                    setValue: function (f) {
                        n = '' + f;
                    },
                    stopTracking: function () {
                        ((e._valueTracker = null), delete e[t]);
                    },
                }
            );
        }
    }
    function ic(e) {
        if (!e._valueTracker) {
            var t = xf(e) ? 'checked' : 'value';
            e._valueTracker = ly(e, t, '' + e[t]);
        }
    }
    function wf(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            a = '';
        return (e && (a = xf(e) ? (e.checked ? 'true' : 'false') : e.value), (e = a), e !== n ? (t.setValue(e), !0) : !1);
    }
    function ro(e) {
        if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
        try {
            return e.activeElement || e.body;
        } catch {
            return e.body;
        }
    }
    var iy = /[\n"\\]/g;
    function Kt(e) {
        return e.replace(iy, function (t) {
            return '\\' + t.charCodeAt(0).toString(16) + ' ';
        });
    }
    function oc(e, t, n, a, i, o, f, v) {
        ((e.name = ''),
            f != null && typeof f != 'function' && typeof f != 'symbol' && typeof f != 'boolean' ? (e.type = f) : e.removeAttribute('type'),
            t != null
                ? f === 'number'
                    ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + Xt(t))
                    : e.value !== '' + Xt(t) && (e.value = '' + Xt(t))
                : (f !== 'submit' && f !== 'reset') || e.removeAttribute('value'),
            t != null ? sc(e, f, Xt(t)) : n != null ? sc(e, f, Xt(n)) : a != null && e.removeAttribute('value'),
            i == null && o != null && (e.defaultChecked = !!o),
            i != null && (e.checked = i && typeof i != 'function' && typeof i != 'symbol'),
            v != null && typeof v != 'function' && typeof v != 'symbol' && typeof v != 'boolean' ? (e.name = '' + Xt(v)) : e.removeAttribute('name'));
    }
    function Cf(e, t, n, a, i, o, f, v) {
        if ((o != null && typeof o != 'function' && typeof o != 'symbol' && typeof o != 'boolean' && (e.type = o), t != null || n != null)) {
            if (!((o !== 'submit' && o !== 'reset') || t != null)) {
                ic(e);
                return;
            }
            ((n = n != null ? '' + Xt(n) : ''), (t = t != null ? '' + Xt(t) : n), v || t === e.value || (e.value = t), (e.defaultValue = t));
        }
        ((a = a ?? i),
            (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
            (e.checked = v ? e.checked : !!a),
            (e.defaultChecked = !!a),
            f != null && typeof f != 'function' && typeof f != 'symbol' && typeof f != 'boolean' && (e.name = f),
            ic(e));
    }
    function sc(e, t, n) {
        (t === 'number' && ro(e.ownerDocument) === e) || e.defaultValue === '' + n || (e.defaultValue = '' + n);
    }
    function al(e, t, n, a) {
        if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
            for (n = 0; n < e.length; n++)
                ((i = t.hasOwnProperty('$' + e[n].value)), e[n].selected !== i && (e[n].selected = i), i && a && (e[n].defaultSelected = !0));
        } else {
            for (n = '' + Xt(n), t = null, i = 0; i < e.length; i++) {
                if (e[i].value === n) {
                    ((e[i].selected = !0), a && (e[i].defaultSelected = !0));
                    return;
                }
                t !== null || e[i].disabled || (t = e[i]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function Ef(e, t, n) {
        if (t != null && ((t = '' + Xt(t)), t !== e.value && (e.value = t), n == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return;
        }
        e.defaultValue = n != null ? '' + Xt(n) : '';
    }
    function Tf(e, t, n, a) {
        if (t == null) {
            if (a != null) {
                if (n != null) throw Error(r(92));
                if (K(a)) {
                    if (1 < a.length) throw Error(r(93));
                    a = a[0];
                }
                n = a;
            }
            (n == null && (n = ''), (t = n));
        }
        ((n = Xt(t)), (e.defaultValue = n), (a = e.textContent), a === n && a !== '' && a !== null && (e.value = a), ic(e));
    }
    function ll(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var oy = new Set(
        'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
            ' '
        )
    );
    function Af(e, t, n) {
        var a = t.indexOf('--') === 0;
        n == null || typeof n == 'boolean' || n === ''
            ? a
                ? e.setProperty(t, '')
                : t === 'float'
                  ? (e.cssFloat = '')
                  : (e[t] = '')
            : a
              ? e.setProperty(t, n)
              : typeof n != 'number' || n === 0 || oy.has(t)
                ? t === 'float'
                    ? (e.cssFloat = n)
                    : (e[t] = ('' + n).trim())
                : (e[t] = n + 'px');
    }
    function Nf(e, t, n) {
        if (t != null && typeof t != 'object') throw Error(r(62));
        if (((e = e.style), n != null)) {
            for (var a in n)
                !n.hasOwnProperty(a) ||
                    (t != null && t.hasOwnProperty(a)) ||
                    (a.indexOf('--') === 0 ? e.setProperty(a, '') : a === 'float' ? (e.cssFloat = '') : (e[a] = ''));
            for (var i in t) ((a = t[i]), t.hasOwnProperty(i) && n[i] !== a && Af(e, i, a));
        } else for (var o in t) t.hasOwnProperty(o) && Af(e, o, t[o]);
    }
    function cc(e) {
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
    var sy = new Map([
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
        cy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function uo(e) {
        return cy.test('' + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Tn() {}
    var rc = null;
    function uc(e) {
        return (
            (e = e.target || e.srcElement || window),
            e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
        );
    }
    var il = null,
        ol = null;
    function jf(e) {
        var t = el(e);
        if (t && (e = t.stateNode)) {
            var n = e[Tt] || null;
            e: switch (((e = t.stateNode), t.type)) {
                case 'input':
                    if (
                        (oc(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                        (t = n.name),
                        n.type === 'radio' && t != null)
                    ) {
                        for (n = e; n.parentNode; ) n = n.parentNode;
                        for (n = n.querySelectorAll('input[name="' + Kt('' + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                            var a = n[t];
                            if (a !== e && a.form === e.form) {
                                var i = a[Tt] || null;
                                if (!i) throw Error(r(90));
                                oc(a, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
                            }
                        }
                        for (t = 0; t < n.length; t++) ((a = n[t]), a.form === e.form && wf(a));
                    }
                    break e;
                case 'textarea':
                    Ef(e, n.value, n.defaultValue);
                    break e;
                case 'select':
                    ((t = n.value), t != null && al(e, !!n.multiple, t, !1));
            }
        }
    }
    var fc = !1;
    function Mf(e, t, n) {
        if (fc) return e(t, n);
        fc = !0;
        try {
            var a = e(t);
            return a;
        } finally {
            if (((fc = !1), (il !== null || ol !== null) && (Fo(), il && ((t = il), (e = ol), (ol = il = null), jf(t), e))))
                for (t = 0; t < e.length; t++) jf(e[t]);
        }
    }
    function ti(e, t) {
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
        if (n && typeof n != 'function') throw Error(r(231, t, typeof n));
        return n;
    }
    var An = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
        dc = !1;
    if (An)
        try {
            var ni = {};
            (Object.defineProperty(ni, 'passive', {
                get: function () {
                    dc = !0;
                },
            }),
                window.addEventListener('test', ni, ni),
                window.removeEventListener('test', ni, ni));
        } catch {
            dc = !1;
        }
    var Jn = null,
        mc = null,
        fo = null;
    function Rf() {
        if (fo) return fo;
        var e,
            t = mc,
            n = t.length,
            a,
            i = 'value' in Jn ? Jn.value : Jn.textContent,
            o = i.length;
        for (e = 0; e < n && t[e] === i[e]; e++);
        var f = n - e;
        for (a = 1; a <= f && t[n - a] === i[o - a]; a++);
        return (fo = i.slice(e, 1 < a ? 1 - a : void 0));
    }
    function mo(e) {
        var t = e.keyCode;
        return ('charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0);
    }
    function ho() {
        return !0;
    }
    function kf() {
        return !1;
    }
    function At(e) {
        function t(n, a, i, o, f) {
            ((this._reactName = n), (this._targetInst = i), (this.type = a), (this.nativeEvent = o), (this.target = f), (this.currentTarget = null));
            for (var v in e) e.hasOwnProperty(v) && ((n = e[v]), (this[v] = n ? n(o) : o[v]));
            return (
                (this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ho : kf),
                (this.isPropagationStopped = kf),
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
                        (this.isDefaultPrevented = ho));
                },
                stopPropagation: function () {
                    var n = this.nativeEvent;
                    n &&
                        (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
                        (this.isPropagationStopped = ho));
                },
                persist: function () {},
                isPersistent: ho,
            }),
            t
        );
    }
    var Ma = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        po = At(Ma),
        ai = x({}, Ma, { view: 0, detail: 0 }),
        ry = At(ai),
        hc,
        pc,
        li,
        go = x({}, ai, {
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
            getModifierState: vc,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
                return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
            },
            movementX: function (e) {
                return 'movementX' in e
                    ? e.movementX
                    : (e !== li &&
                          (li && e.type === 'mousemove' ? ((hc = e.screenX - li.screenX), (pc = e.screenY - li.screenY)) : (pc = hc = 0), (li = e)),
                      hc);
            },
            movementY: function (e) {
                return 'movementY' in e ? e.movementY : pc;
            },
        }),
        Of = At(go),
        uy = x({}, go, { dataTransfer: 0 }),
        fy = At(uy),
        dy = x({}, ai, { relatedTarget: 0 }),
        gc = At(dy),
        my = x({}, Ma, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        hy = At(my),
        py = x({}, Ma, {
            clipboardData: function (e) {
                return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
            },
        }),
        gy = At(py),
        vy = x({}, Ma, { data: 0 }),
        zf = At(vy),
        yy = {
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
        by = {
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
        Sy = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
    function xy(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Sy[e]) ? !!t[e] : !1;
    }
    function vc() {
        return xy;
    }
    var wy = x({}, ai, {
            key: function (e) {
                if (e.key) {
                    var t = yy[e.key] || e.key;
                    if (t !== 'Unidentified') return t;
                }
                return e.type === 'keypress'
                    ? ((e = mo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
                    : e.type === 'keydown' || e.type === 'keyup'
                      ? by[e.keyCode] || 'Unidentified'
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
            getModifierState: vc,
            charCode: function (e) {
                return e.type === 'keypress' ? mo(e) : 0;
            },
            keyCode: function (e) {
                return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
            },
            which: function (e) {
                return e.type === 'keypress' ? mo(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
            },
        }),
        Cy = At(wy),
        Ey = x({}, go, {
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
        Df = At(Ey),
        Ty = x({}, ai, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: vc }),
        Ay = At(Ty),
        Ny = x({}, Ma, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        jy = At(Ny),
        My = x({}, go, {
            deltaX: function (e) {
                return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
                return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
        Ry = At(My),
        ky = x({}, Ma, { newState: 0, oldState: 0 }),
        Oy = At(ky),
        zy = [9, 13, 27, 32],
        yc = An && 'CompositionEvent' in window,
        ii = null;
    An && 'documentMode' in document && (ii = document.documentMode);
    var Dy = An && 'TextEvent' in window && !ii,
        _f = An && (!yc || (ii && 8 < ii && 11 >= ii)),
        Lf = ' ',
        Uf = !1;
    function Bf(e, t) {
        switch (e) {
            case 'keyup':
                return zy.indexOf(t.keyCode) !== -1;
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
    function Hf(e) {
        return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
    }
    var sl = !1;
    function _y(e, t) {
        switch (e) {
            case 'compositionend':
                return Hf(t);
            case 'keypress':
                return t.which !== 32 ? null : ((Uf = !0), Lf);
            case 'textInput':
                return ((e = t.data), e === Lf && Uf ? null : e);
            default:
                return null;
        }
    }
    function Ly(e, t) {
        if (sl) return e === 'compositionend' || (!yc && Bf(e, t)) ? ((e = Rf()), (fo = mc = Jn = null), (sl = !1), e) : null;
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
                return _f && t.locale !== 'ko' ? null : t.data;
            default:
                return null;
        }
    }
    var Uy = {
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
    function Vf(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === 'input' ? !!Uy[e.type] : t === 'textarea';
    }
    function qf(e, t, n, a) {
        (il ? (ol ? ol.push(a) : (ol = [a])) : (il = a),
            (t = is(t, 'onChange')),
            0 < t.length && ((n = new po('onChange', 'change', null, n, a)), e.push({ event: n, listeners: t })));
    }
    var oi = null,
        si = null;
    function By(e) {
        Ch(e, 0);
    }
    function vo(e) {
        var t = ei(e);
        if (wf(t)) return e;
    }
    function Gf(e, t) {
        if (e === 'change') return t;
    }
    var Yf = !1;
    if (An) {
        var bc;
        if (An) {
            var Sc = 'oninput' in document;
            if (!Sc) {
                var Xf = document.createElement('div');
                (Xf.setAttribute('oninput', 'return;'), (Sc = typeof Xf.oninput == 'function'));
            }
            bc = Sc;
        } else bc = !1;
        Yf = bc && (!document.documentMode || 9 < document.documentMode);
    }
    function Kf() {
        oi && (oi.detachEvent('onpropertychange', Qf), (si = oi = null));
    }
    function Qf(e) {
        if (e.propertyName === 'value' && vo(si)) {
            var t = [];
            (qf(t, si, e, uc(e)), Mf(By, t));
        }
    }
    function Hy(e, t, n) {
        e === 'focusin' ? (Kf(), (oi = t), (si = n), oi.attachEvent('onpropertychange', Qf)) : e === 'focusout' && Kf();
    }
    function Vy(e) {
        if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return vo(si);
    }
    function qy(e, t) {
        if (e === 'click') return vo(t);
    }
    function Gy(e, t) {
        if (e === 'input' || e === 'change') return vo(t);
    }
    function Yy(e, t) {
        return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var _t = typeof Object.is == 'function' ? Object.is : Yy;
    function ci(e, t) {
        if (_t(e, t)) return !0;
        if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
        var n = Object.keys(e),
            a = Object.keys(t);
        if (n.length !== a.length) return !1;
        for (a = 0; a < n.length; a++) {
            var i = n[a];
            if (!Le.call(t, i) || !_t(e[i], t[i])) return !1;
        }
        return !0;
    }
    function Zf(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
    }
    function Jf(e, t) {
        var n = Zf(e);
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
            n = Zf(n);
        }
    }
    function If(e, t) {
        return e && t
            ? e === t
                ? !0
                : e && e.nodeType === 3
                  ? !1
                  : t && t.nodeType === 3
                    ? If(e, t.parentNode)
                    : 'contains' in e
                      ? e.contains(t)
                      : e.compareDocumentPosition
                        ? !!(e.compareDocumentPosition(t) & 16)
                        : !1
            : !1;
    }
    function Wf(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = ro(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var n = typeof t.contentWindow.location.href == 'string';
            } catch {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = ro(e.document);
        }
        return t;
    }
    function xc(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
            t &&
            ((t === 'input' && (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
                t === 'textarea' ||
                e.contentEditable === 'true')
        );
    }
    var Xy = An && 'documentMode' in document && 11 >= document.documentMode,
        cl = null,
        wc = null,
        ri = null,
        Cc = !1;
    function $f(e, t, n) {
        var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Cc ||
            cl == null ||
            cl !== ro(a) ||
            ((a = cl),
            'selectionStart' in a && xc(a)
                ? (a = { start: a.selectionStart, end: a.selectionEnd })
                : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
                  (a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset })),
            (ri && ci(ri, a)) ||
                ((ri = a),
                (a = is(wc, 'onSelect')),
                0 < a.length && ((t = new po('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: a }), (t.target = cl))));
    }
    function Ra(e, t) {
        var n = {};
        return ((n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n);
    }
    var rl = {
            animationend: Ra('Animation', 'AnimationEnd'),
            animationiteration: Ra('Animation', 'AnimationIteration'),
            animationstart: Ra('Animation', 'AnimationStart'),
            transitionrun: Ra('Transition', 'TransitionRun'),
            transitionstart: Ra('Transition', 'TransitionStart'),
            transitioncancel: Ra('Transition', 'TransitionCancel'),
            transitionend: Ra('Transition', 'TransitionEnd'),
        },
        Ec = {},
        Ff = {};
    An &&
        ((Ff = document.createElement('div').style),
        'AnimationEvent' in window || (delete rl.animationend.animation, delete rl.animationiteration.animation, delete rl.animationstart.animation),
        'TransitionEvent' in window || delete rl.transitionend.transition);
    function ka(e) {
        if (Ec[e]) return Ec[e];
        if (!rl[e]) return e;
        var t = rl[e],
            n;
        for (n in t) if (t.hasOwnProperty(n) && n in Ff) return (Ec[e] = t[n]);
        return e;
    }
    var Pf = ka('animationend'),
        ed = ka('animationiteration'),
        td = ka('animationstart'),
        Ky = ka('transitionrun'),
        Qy = ka('transitionstart'),
        Zy = ka('transitioncancel'),
        nd = ka('transitionend'),
        ad = new Map(),
        Tc =
            'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
                ' '
            );
    Tc.push('scrollEnd');
    function nn(e, t) {
        (ad.set(e, t), ja(t, [e]));
    }
    var yo =
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
        Qt = [],
        ul = 0,
        Ac = 0;
    function bo() {
        for (var e = ul, t = (Ac = ul = 0); t < e; ) {
            var n = Qt[t];
            Qt[t++] = null;
            var a = Qt[t];
            Qt[t++] = null;
            var i = Qt[t];
            Qt[t++] = null;
            var o = Qt[t];
            if (((Qt[t++] = null), a !== null && i !== null)) {
                var f = a.pending;
                (f === null ? (i.next = i) : ((i.next = f.next), (f.next = i)), (a.pending = i));
            }
            o !== 0 && ld(n, i, o);
        }
    }
    function So(e, t, n, a) {
        ((Qt[ul++] = e), (Qt[ul++] = t), (Qt[ul++] = n), (Qt[ul++] = a), (Ac |= a), (e.lanes |= a), (e = e.alternate), e !== null && (e.lanes |= a));
    }
    function Nc(e, t, n, a) {
        return (So(e, t, n, a), xo(e));
    }
    function Oa(e, t) {
        return (So(e, null, null, t), xo(e));
    }
    function ld(e, t, n) {
        e.lanes |= n;
        var a = e.alternate;
        a !== null && (a.lanes |= n);
        for (var i = !1, o = e.return; o !== null; )
            ((o.childLanes |= n),
                (a = o.alternate),
                a !== null && (a.childLanes |= n),
                o.tag === 22 && ((e = o.stateNode), e === null || e._visibility & 1 || (i = !0)),
                (e = o),
                (o = o.return));
        return e.tag === 3
            ? ((o = e.stateNode),
              i &&
                  t !== null &&
                  ((i = 31 - wt(n)), (e = o.hiddenUpdates), (a = e[i]), a === null ? (e[i] = [t]) : a.push(t), (t.lane = n | 536870912)),
              o)
            : null;
    }
    function xo(e) {
        if (50 < ki) throw ((ki = 0), (Lr = null), Error(r(185)));
        for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
        return e.tag === 3 ? e.stateNode : null;
    }
    var fl = {};
    function Jy(e, t, n, a) {
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
    function Lt(e, t, n, a) {
        return new Jy(e, t, n, a);
    }
    function jc(e) {
        return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function Nn(e, t) {
        var n = e.alternate;
        return (
            n === null
                ? ((n = Lt(e.tag, t, e.key, e.mode)),
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
    function id(e, t) {
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
    function wo(e, t, n, a, i, o) {
        var f = 0;
        if (((a = e), typeof e == 'function')) jc(e) && (f = 1);
        else if (typeof e == 'string') f = P0(e, n, P.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
        else
            e: switch (e) {
                case ae:
                    return ((e = Lt(31, n, t, i)), (e.elementType = ae), (e.lanes = o), e);
                case w:
                    return za(n.children, i, o, t);
                case M:
                    ((f = 8), (i |= 24));
                    break;
                case U:
                    return ((e = Lt(12, n, t, i | 2)), (e.elementType = U), (e.lanes = o), e);
                case $:
                    return ((e = Lt(13, n, t, i)), (e.elementType = $), (e.lanes = o), e);
                case ne:
                    return ((e = Lt(19, n, t, i)), (e.elementType = ne), (e.lanes = o), e);
                default:
                    if (typeof e == 'object' && e !== null)
                        switch (e.$$typeof) {
                            case H:
                                f = 10;
                                break e;
                            case B:
                                f = 9;
                                break e;
                            case Z:
                                f = 11;
                                break e;
                            case z:
                                f = 14;
                                break e;
                            case X:
                                ((f = 16), (a = null));
                                break e;
                        }
                    ((f = 29), (n = Error(r(130, e === null ? 'null' : typeof e, ''))), (a = null));
            }
        return ((t = Lt(f, n, t, i)), (t.elementType = e), (t.type = a), (t.lanes = o), t);
    }
    function za(e, t, n, a) {
        return ((e = Lt(7, e, a, t)), (e.lanes = n), e);
    }
    function Mc(e, t, n) {
        return ((e = Lt(6, e, null, t)), (e.lanes = n), e);
    }
    function od(e) {
        var t = Lt(18, null, null, 0);
        return ((t.stateNode = e), t);
    }
    function Rc(e, t, n) {
        return (
            (t = Lt(4, e.children !== null ? e.children : [], e.key, t)),
            (t.lanes = n),
            (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
            t
        );
    }
    var sd = new WeakMap();
    function Zt(e, t) {
        if (typeof e == 'object' && e !== null) {
            var n = sd.get(e);
            return n !== void 0 ? n : ((t = { value: e, source: t, stack: Se(t) }), sd.set(e, t), t);
        }
        return { value: e, source: t, stack: Se(t) };
    }
    var dl = [],
        ml = 0,
        Co = null,
        ui = 0,
        Jt = [],
        It = 0,
        In = null,
        mn = 1,
        hn = '';
    function jn(e, t) {
        ((dl[ml++] = ui), (dl[ml++] = Co), (Co = e), (ui = t));
    }
    function cd(e, t, n) {
        ((Jt[It++] = mn), (Jt[It++] = hn), (Jt[It++] = In), (In = e));
        var a = mn;
        e = hn;
        var i = 32 - wt(a) - 1;
        ((a &= ~(1 << i)), (n += 1));
        var o = 32 - wt(t) + i;
        if (30 < o) {
            var f = i - (i % 5);
            ((o = (a & ((1 << f) - 1)).toString(32)), (a >>= f), (i -= f), (mn = (1 << (32 - wt(t) + i)) | (n << i) | a), (hn = o + e));
        } else ((mn = (1 << o) | (n << i) | a), (hn = e));
    }
    function kc(e) {
        e.return !== null && (jn(e, 1), cd(e, 1, 0));
    }
    function Oc(e) {
        for (; e === Co; ) ((Co = dl[--ml]), (dl[ml] = null), (ui = dl[--ml]), (dl[ml] = null));
        for (; e === In; ) ((In = Jt[--It]), (Jt[It] = null), (hn = Jt[--It]), (Jt[It] = null), (mn = Jt[--It]), (Jt[It] = null));
    }
    function rd(e, t) {
        ((Jt[It++] = mn), (Jt[It++] = hn), (Jt[It++] = In), (mn = t.id), (hn = t.overflow), (In = e));
    }
    var ht = null,
        Ye = null,
        Oe = !1,
        Wn = null,
        Wt = !1,
        zc = Error(r(519));
    function $n(e) {
        var t = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', ''));
        throw (fi(Zt(t, e)), zc);
    }
    function ud(e) {
        var t = e.stateNode,
            n = e.type,
            a = e.memoizedProps;
        switch (((t[mt] = e), (t[Tt] = a), n)) {
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
                for (n = 0; n < zi.length; n++) je(zi[n], t);
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
                (je('invalid', t), Cf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0));
                break;
            case 'select':
                je('invalid', t);
                break;
            case 'textarea':
                (je('invalid', t), Tf(t, a.value, a.defaultValue, a.children));
        }
        ((n = a.children),
            (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
            t.textContent === '' + n ||
            a.suppressHydrationWarning === !0 ||
            Nh(t.textContent, n)
                ? (a.popover != null && (je('beforetoggle', t), je('toggle', t)),
                  a.onScroll != null && je('scroll', t),
                  a.onScrollEnd != null && je('scrollend', t),
                  a.onClick != null && (t.onclick = Tn),
                  (t = !0))
                : (t = !1),
            t || $n(e, !0));
    }
    function fd(e) {
        for (ht = e.return; ht; )
            switch (ht.tag) {
                case 5:
                case 31:
                case 13:
                    Wt = !1;
                    return;
                case 27:
                case 3:
                    Wt = !0;
                    return;
                default:
                    ht = ht.return;
            }
    }
    function hl(e) {
        if (e !== ht) return !1;
        if (!Oe) return (fd(e), (Oe = !0), !1);
        var t = e.tag,
            n;
        if (
            ((n = t !== 3 && t !== 27) &&
                ((n = t === 5) && ((n = e.type), (n = !(n !== 'form' && n !== 'button') || $r(e.type, e.memoizedProps))), (n = !n)),
            n && Ye && $n(e),
            fd(e),
            t === 13)
        ) {
            if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(r(317));
            Ye = Lh(e);
        } else if (t === 31) {
            if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(r(317));
            Ye = Lh(e);
        } else t === 27 ? ((t = Ye), fa(e.type) ? ((e = nu), (nu = null), (Ye = e)) : (Ye = t)) : (Ye = ht ? Ft(e.stateNode.nextSibling) : null);
        return !0;
    }
    function Da() {
        ((Ye = ht = null), (Oe = !1));
    }
    function Dc() {
        var e = Wn;
        return (e !== null && (Rt === null ? (Rt = e) : Rt.push.apply(Rt, e), (Wn = null)), e);
    }
    function fi(e) {
        Wn === null ? (Wn = [e]) : Wn.push(e);
    }
    var _c = E(null),
        _a = null,
        Mn = null;
    function Fn(e, t, n) {
        (W(_c, t._currentValue), (t._currentValue = n));
    }
    function Rn(e) {
        ((e._currentValue = _c.current), q(_c));
    }
    function Lc(e, t, n) {
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
    function Uc(e, t, n, a) {
        var i = e.child;
        for (i !== null && (i.return = e); i !== null; ) {
            var o = i.dependencies;
            if (o !== null) {
                var f = i.child;
                o = o.firstContext;
                e: for (; o !== null; ) {
                    var v = o;
                    o = i;
                    for (var C = 0; C < t.length; C++)
                        if (v.context === t[C]) {
                            ((o.lanes |= n), (v = o.alternate), v !== null && (v.lanes |= n), Lc(o.return, n, e), a || (f = null));
                            break e;
                        }
                    o = v.next;
                }
            } else if (i.tag === 18) {
                if (((f = i.return), f === null)) throw Error(r(341));
                ((f.lanes |= n), (o = f.alternate), o !== null && (o.lanes |= n), Lc(f, n, e), (f = null));
            } else f = i.child;
            if (f !== null) f.return = i;
            else
                for (f = i; f !== null; ) {
                    if (f === e) {
                        f = null;
                        break;
                    }
                    if (((i = f.sibling), i !== null)) {
                        ((i.return = f.return), (f = i));
                        break;
                    }
                    f = f.return;
                }
            i = f;
        }
    }
    function pl(e, t, n, a) {
        e = null;
        for (var i = t, o = !1; i !== null; ) {
            if (!o) {
                if ((i.flags & 524288) !== 0) o = !0;
                else if ((i.flags & 262144) !== 0) break;
            }
            if (i.tag === 10) {
                var f = i.alternate;
                if (f === null) throw Error(r(387));
                if (((f = f.memoizedProps), f !== null)) {
                    var v = i.type;
                    _t(i.pendingProps.value, f.value) || (e !== null ? e.push(v) : (e = [v]));
                }
            } else if (i === F.current) {
                if (((f = i.alternate), f === null)) throw Error(r(387));
                f.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(Bi) : (e = [Bi]));
            }
            i = i.return;
        }
        (e !== null && Uc(t, e, n, a), (t.flags |= 262144));
    }
    function Eo(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!_t(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
        }
        return !1;
    }
    function La(e) {
        ((_a = e), (Mn = null), (e = e.dependencies), e !== null && (e.firstContext = null));
    }
    function pt(e) {
        return dd(_a, e);
    }
    function To(e, t) {
        return (_a === null && La(e), dd(e, t));
    }
    function dd(e, t) {
        var n = t._currentValue;
        if (((t = { context: t, memoizedValue: n, next: null }), Mn === null)) {
            if (e === null) throw Error(r(308));
            ((Mn = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
        } else Mn = Mn.next = t;
        return n;
    }
    var Iy =
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
        Wy = l.unstable_scheduleCallback,
        $y = l.unstable_NormalPriority,
        tt = { $$typeof: H, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
    function Bc() {
        return { controller: new Iy(), data: new Map(), refCount: 0 };
    }
    function di(e) {
        (e.refCount--,
            e.refCount === 0 &&
                Wy($y, function () {
                    e.controller.abort();
                }));
    }
    var mi = null,
        Hc = 0,
        gl = 0,
        vl = null;
    function Fy(e, t) {
        if (mi === null) {
            var n = (mi = []);
            ((Hc = 0),
                (gl = Gr()),
                (vl = {
                    status: 'pending',
                    value: void 0,
                    then: function (a) {
                        n.push(a);
                    },
                }));
        }
        return (Hc++, t.then(md, md), t);
    }
    function md() {
        if (--Hc === 0 && mi !== null) {
            vl !== null && (vl.status = 'fulfilled');
            var e = mi;
            ((mi = null), (gl = 0), (vl = null));
            for (var t = 0; t < e.length; t++) (0, e[t])();
        }
    }
    function Py(e, t) {
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
    var hd = A.S;
    A.S = function (e, t) {
        (($m = xt()), typeof t == 'object' && t !== null && typeof t.then == 'function' && Fy(e, t), hd !== null && hd(e, t));
    };
    var Ua = E(null);
    function Vc() {
        var e = Ua.current;
        return e !== null ? e : Ge.pooledCache;
    }
    function Ao(e, t) {
        t === null ? W(Ua, Ua.current) : W(Ua, t.pool);
    }
    function pd() {
        var e = Vc();
        return e === null ? null : { parent: tt._currentValue, pool: e };
    }
    var yl = Error(r(460)),
        qc = Error(r(474)),
        No = Error(r(542)),
        jo = { then: function () {} };
    function gd(e) {
        return ((e = e.status), e === 'fulfilled' || e === 'rejected');
    }
    function vd(e, t, n) {
        switch (((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(Tn, Tn), (t = n)), t.status)) {
            case 'fulfilled':
                return t.value;
            case 'rejected':
                throw ((e = t.reason), bd(e), e);
            default:
                if (typeof t.status == 'string') t.then(Tn, Tn);
                else {
                    if (((e = Ge), e !== null && 100 < e.shellSuspendCounter)) throw Error(r(482));
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
                        throw ((e = t.reason), bd(e), e);
                }
                throw ((Ha = t), yl);
        }
    }
    function Ba(e) {
        try {
            var t = e._init;
            return t(e._payload);
        } catch (n) {
            throw n !== null && typeof n == 'object' && typeof n.then == 'function' ? ((Ha = n), yl) : n;
        }
    }
    var Ha = null;
    function yd() {
        if (Ha === null) throw Error(r(459));
        var e = Ha;
        return ((Ha = null), e);
    }
    function bd(e) {
        if (e === yl || e === No) throw Error(r(483));
    }
    var bl = null,
        hi = 0;
    function Mo(e) {
        var t = hi;
        return ((hi += 1), bl === null && (bl = []), vd(bl, e, t));
    }
    function pi(e, t) {
        ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
    }
    function Ro(e, t) {
        throw t.$$typeof === T
            ? Error(r(525))
            : ((e = Object.prototype.toString.call(t)),
              Error(r(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)));
    }
    function Sd(e) {
        function t(k, N) {
            if (e) {
                var D = k.deletions;
                D === null ? ((k.deletions = [N]), (k.flags |= 16)) : D.push(N);
            }
        }
        function n(k, N) {
            if (!e) return null;
            for (; N !== null; ) (t(k, N), (N = N.sibling));
            return null;
        }
        function a(k) {
            for (var N = new Map(); k !== null; ) (k.key !== null ? N.set(k.key, k) : N.set(k.index, k), (k = k.sibling));
            return N;
        }
        function i(k, N) {
            return ((k = Nn(k, N)), (k.index = 0), (k.sibling = null), k);
        }
        function o(k, N, D) {
            return (
                (k.index = D),
                e
                    ? ((D = k.alternate), D !== null ? ((D = D.index), D < N ? ((k.flags |= 67108866), N) : D) : ((k.flags |= 67108866), N))
                    : ((k.flags |= 1048576), N)
            );
        }
        function f(k) {
            return (e && k.alternate === null && (k.flags |= 67108866), k);
        }
        function v(k, N, D, Q) {
            return N === null || N.tag !== 6 ? ((N = Mc(D, k.mode, Q)), (N.return = k), N) : ((N = i(N, D)), (N.return = k), N);
        }
        function C(k, N, D, Q) {
            var pe = D.type;
            return pe === w
                ? Y(k, N, D.props.children, Q, D.key)
                : N !== null && (N.elementType === pe || (typeof pe == 'object' && pe !== null && pe.$$typeof === X && Ba(pe) === N.type))
                  ? ((N = i(N, D.props)), pi(N, D), (N.return = k), N)
                  : ((N = wo(D.type, D.key, D.props, null, k.mode, Q)), pi(N, D), (N.return = k), N);
        }
        function _(k, N, D, Q) {
            return N === null || N.tag !== 4 || N.stateNode.containerInfo !== D.containerInfo || N.stateNode.implementation !== D.implementation
                ? ((N = Rc(D, k.mode, Q)), (N.return = k), N)
                : ((N = i(N, D.children || [])), (N.return = k), N);
        }
        function Y(k, N, D, Q, pe) {
            return N === null || N.tag !== 7 ? ((N = za(D, k.mode, Q, pe)), (N.return = k), N) : ((N = i(N, D)), (N.return = k), N);
        }
        function I(k, N, D) {
            if ((typeof N == 'string' && N !== '') || typeof N == 'number' || typeof N == 'bigint')
                return ((N = Mc('' + N, k.mode, D)), (N.return = k), N);
            if (typeof N == 'object' && N !== null) {
                switch (N.$$typeof) {
                    case j:
                        return ((D = wo(N.type, N.key, N.props, null, k.mode, D)), pi(D, N), (D.return = k), D);
                    case R:
                        return ((N = Rc(N, k.mode, D)), (N.return = k), N);
                    case X:
                        return ((N = Ba(N)), I(k, N, D));
                }
                if (K(N) || le(N)) return ((N = za(N, k.mode, D, null)), (N.return = k), N);
                if (typeof N.then == 'function') return I(k, Mo(N), D);
                if (N.$$typeof === H) return I(k, To(k, N), D);
                Ro(k, N);
            }
            return null;
        }
        function L(k, N, D, Q) {
            var pe = N !== null ? N.key : null;
            if ((typeof D == 'string' && D !== '') || typeof D == 'number' || typeof D == 'bigint') return pe !== null ? null : v(k, N, '' + D, Q);
            if (typeof D == 'object' && D !== null) {
                switch (D.$$typeof) {
                    case j:
                        return D.key === pe ? C(k, N, D, Q) : null;
                    case R:
                        return D.key === pe ? _(k, N, D, Q) : null;
                    case X:
                        return ((D = Ba(D)), L(k, N, D, Q));
                }
                if (K(D) || le(D)) return pe !== null ? null : Y(k, N, D, Q, null);
                if (typeof D.then == 'function') return L(k, N, Mo(D), Q);
                if (D.$$typeof === H) return L(k, N, To(k, D), Q);
                Ro(k, D);
            }
            return null;
        }
        function V(k, N, D, Q, pe) {
            if ((typeof Q == 'string' && Q !== '') || typeof Q == 'number' || typeof Q == 'bigint')
                return ((k = k.get(D) || null), v(N, k, '' + Q, pe));
            if (typeof Q == 'object' && Q !== null) {
                switch (Q.$$typeof) {
                    case j:
                        return ((k = k.get(Q.key === null ? D : Q.key) || null), C(N, k, Q, pe));
                    case R:
                        return ((k = k.get(Q.key === null ? D : Q.key) || null), _(N, k, Q, pe));
                    case X:
                        return ((Q = Ba(Q)), V(k, N, D, Q, pe));
                }
                if (K(Q) || le(Q)) return ((k = k.get(D) || null), Y(N, k, Q, pe, null));
                if (typeof Q.then == 'function') return V(k, N, D, Mo(Q), pe);
                if (Q.$$typeof === H) return V(k, N, D, To(N, Q), pe);
                Ro(N, Q);
            }
            return null;
        }
        function se(k, N, D, Q) {
            for (var pe = null, ze = null, me = N, Ee = (N = 0), ke = null; me !== null && Ee < D.length; Ee++) {
                me.index > Ee ? ((ke = me), (me = null)) : (ke = me.sibling);
                var De = L(k, me, D[Ee], Q);
                if (De === null) {
                    me === null && (me = ke);
                    break;
                }
                (e && me && De.alternate === null && t(k, me), (N = o(De, N, Ee)), ze === null ? (pe = De) : (ze.sibling = De), (ze = De), (me = ke));
            }
            if (Ee === D.length) return (n(k, me), Oe && jn(k, Ee), pe);
            if (me === null) {
                for (; Ee < D.length; Ee++)
                    ((me = I(k, D[Ee], Q)), me !== null && ((N = o(me, N, Ee)), ze === null ? (pe = me) : (ze.sibling = me), (ze = me)));
                return (Oe && jn(k, Ee), pe);
            }
            for (me = a(me); Ee < D.length; Ee++)
                ((ke = V(me, k, Ee, D[Ee], Q)),
                    ke !== null &&
                        (e && ke.alternate !== null && me.delete(ke.key === null ? Ee : ke.key),
                        (N = o(ke, N, Ee)),
                        ze === null ? (pe = ke) : (ze.sibling = ke),
                        (ze = ke)));
            return (
                e &&
                    me.forEach(function (ga) {
                        return t(k, ga);
                    }),
                Oe && jn(k, Ee),
                pe
            );
        }
        function ve(k, N, D, Q) {
            if (D == null) throw Error(r(151));
            for (var pe = null, ze = null, me = N, Ee = (N = 0), ke = null, De = D.next(); me !== null && !De.done; Ee++, De = D.next()) {
                me.index > Ee ? ((ke = me), (me = null)) : (ke = me.sibling);
                var ga = L(k, me, De.value, Q);
                if (ga === null) {
                    me === null && (me = ke);
                    break;
                }
                (e && me && ga.alternate === null && t(k, me), (N = o(ga, N, Ee)), ze === null ? (pe = ga) : (ze.sibling = ga), (ze = ga), (me = ke));
            }
            if (De.done) return (n(k, me), Oe && jn(k, Ee), pe);
            if (me === null) {
                for (; !De.done; Ee++, De = D.next())
                    ((De = I(k, De.value, Q)), De !== null && ((N = o(De, N, Ee)), ze === null ? (pe = De) : (ze.sibling = De), (ze = De)));
                return (Oe && jn(k, Ee), pe);
            }
            for (me = a(me); !De.done; Ee++, De = D.next())
                ((De = V(me, k, Ee, De.value, Q)),
                    De !== null &&
                        (e && De.alternate !== null && me.delete(De.key === null ? Ee : De.key),
                        (N = o(De, N, Ee)),
                        ze === null ? (pe = De) : (ze.sibling = De),
                        (ze = De)));
            return (
                e &&
                    me.forEach(function (ub) {
                        return t(k, ub);
                    }),
                Oe && jn(k, Ee),
                pe
            );
        }
        function qe(k, N, D, Q) {
            if (
                (typeof D == 'object' && D !== null && D.type === w && D.key === null && (D = D.props.children), typeof D == 'object' && D !== null)
            ) {
                switch (D.$$typeof) {
                    case j:
                        e: {
                            for (var pe = D.key; N !== null; ) {
                                if (N.key === pe) {
                                    if (((pe = D.type), pe === w)) {
                                        if (N.tag === 7) {
                                            (n(k, N.sibling), (Q = i(N, D.props.children)), (Q.return = k), (k = Q));
                                            break e;
                                        }
                                    } else if (
                                        N.elementType === pe ||
                                        (typeof pe == 'object' && pe !== null && pe.$$typeof === X && Ba(pe) === N.type)
                                    ) {
                                        (n(k, N.sibling), (Q = i(N, D.props)), pi(Q, D), (Q.return = k), (k = Q));
                                        break e;
                                    }
                                    n(k, N);
                                    break;
                                } else t(k, N);
                                N = N.sibling;
                            }
                            D.type === w
                                ? ((Q = za(D.props.children, k.mode, Q, D.key)), (Q.return = k), (k = Q))
                                : ((Q = wo(D.type, D.key, D.props, null, k.mode, Q)), pi(Q, D), (Q.return = k), (k = Q));
                        }
                        return f(k);
                    case R:
                        e: {
                            for (pe = D.key; N !== null; ) {
                                if (N.key === pe)
                                    if (
                                        N.tag === 4 &&
                                        N.stateNode.containerInfo === D.containerInfo &&
                                        N.stateNode.implementation === D.implementation
                                    ) {
                                        (n(k, N.sibling), (Q = i(N, D.children || [])), (Q.return = k), (k = Q));
                                        break e;
                                    } else {
                                        n(k, N);
                                        break;
                                    }
                                else t(k, N);
                                N = N.sibling;
                            }
                            ((Q = Rc(D, k.mode, Q)), (Q.return = k), (k = Q));
                        }
                        return f(k);
                    case X:
                        return ((D = Ba(D)), qe(k, N, D, Q));
                }
                if (K(D)) return se(k, N, D, Q);
                if (le(D)) {
                    if (((pe = le(D)), typeof pe != 'function')) throw Error(r(150));
                    return ((D = pe.call(D)), ve(k, N, D, Q));
                }
                if (typeof D.then == 'function') return qe(k, N, Mo(D), Q);
                if (D.$$typeof === H) return qe(k, N, To(k, D), Q);
                Ro(k, D);
            }
            return (typeof D == 'string' && D !== '') || typeof D == 'number' || typeof D == 'bigint'
                ? ((D = '' + D),
                  N !== null && N.tag === 6
                      ? (n(k, N.sibling), (Q = i(N, D)), (Q.return = k), (k = Q))
                      : (n(k, N), (Q = Mc(D, k.mode, Q)), (Q.return = k), (k = Q)),
                  f(k))
                : n(k, N);
        }
        return function (k, N, D, Q) {
            try {
                hi = 0;
                var pe = qe(k, N, D, Q);
                return ((bl = null), pe);
            } catch (me) {
                if (me === yl || me === No) throw me;
                var ze = Lt(29, me, null, k.mode);
                return ((ze.lanes = Q), (ze.return = k), ze);
            } finally {
            }
        };
    }
    var Va = Sd(!0),
        xd = Sd(!1),
        Pn = !1;
    function Gc(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
        };
    }
    function Yc(e, t) {
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
    function ea(e) {
        return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function ta(e, t, n) {
        var a = e.updateQueue;
        if (a === null) return null;
        if (((a = a.shared), (_e & 2) !== 0)) {
            var i = a.pending;
            return (i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (a.pending = t), (t = xo(e)), ld(e, null, n), t);
        }
        return (So(e, a, t, n), xo(e));
    }
    function gi(e, t, n) {
        if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))) {
            var a = t.lanes;
            ((a &= e.pendingLanes), (n |= a), (t.lanes = n), df(e, n));
        }
    }
    function Xc(e, t) {
        var n = e.updateQueue,
            a = e.alternate;
        if (a !== null && ((a = a.updateQueue), n === a)) {
            var i = null,
                o = null;
            if (((n = n.firstBaseUpdate), n !== null)) {
                do {
                    var f = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
                    (o === null ? (i = o = f) : (o = o.next = f), (n = n.next));
                } while (n !== null);
                o === null ? (i = o = t) : (o = o.next = t);
            } else i = o = t;
            ((n = { baseState: a.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: a.shared, callbacks: a.callbacks }), (e.updateQueue = n));
            return;
        }
        ((e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t));
    }
    var Kc = !1;
    function vi() {
        if (Kc) {
            var e = vl;
            if (e !== null) throw e;
        }
    }
    function yi(e, t, n, a) {
        Kc = !1;
        var i = e.updateQueue;
        Pn = !1;
        var o = i.firstBaseUpdate,
            f = i.lastBaseUpdate,
            v = i.shared.pending;
        if (v !== null) {
            i.shared.pending = null;
            var C = v,
                _ = C.next;
            ((C.next = null), f === null ? (o = _) : (f.next = _), (f = C));
            var Y = e.alternate;
            Y !== null &&
                ((Y = Y.updateQueue),
                (v = Y.lastBaseUpdate),
                v !== f && (v === null ? (Y.firstBaseUpdate = _) : (v.next = _), (Y.lastBaseUpdate = C)));
        }
        if (o !== null) {
            var I = i.baseState;
            ((f = 0), (Y = _ = C = null), (v = o));
            do {
                var L = v.lane & -536870913,
                    V = L !== v.lane;
                if (V ? (Re & L) === L : (a & L) === L) {
                    (L !== 0 && L === gl && (Kc = !0),
                        Y !== null && (Y = Y.next = { lane: 0, tag: v.tag, payload: v.payload, callback: null, next: null }));
                    e: {
                        var se = e,
                            ve = v;
                        L = t;
                        var qe = n;
                        switch (ve.tag) {
                            case 1:
                                if (((se = ve.payload), typeof se == 'function')) {
                                    I = se.call(qe, I, L);
                                    break e;
                                }
                                I = se;
                                break e;
                            case 3:
                                se.flags = (se.flags & -65537) | 128;
                            case 0:
                                if (((se = ve.payload), (L = typeof se == 'function' ? se.call(qe, I, L) : se), L == null)) break e;
                                I = x({}, I, L);
                                break e;
                            case 2:
                                Pn = !0;
                        }
                    }
                    ((L = v.callback),
                        L !== null && ((e.flags |= 64), V && (e.flags |= 8192), (V = i.callbacks), V === null ? (i.callbacks = [L]) : V.push(L)));
                } else
                    ((V = { lane: L, tag: v.tag, payload: v.payload, callback: v.callback, next: null }),
                        Y === null ? ((_ = Y = V), (C = I)) : (Y = Y.next = V),
                        (f |= L));
                if (((v = v.next), v === null)) {
                    if (((v = i.shared.pending), v === null)) break;
                    ((V = v), (v = V.next), (V.next = null), (i.lastBaseUpdate = V), (i.shared.pending = null));
                }
            } while (!0);
            (Y === null && (C = I),
                (i.baseState = C),
                (i.firstBaseUpdate = _),
                (i.lastBaseUpdate = Y),
                o === null && (i.shared.lanes = 0),
                (oa |= f),
                (e.lanes = f),
                (e.memoizedState = I));
        }
    }
    function wd(e, t) {
        if (typeof e != 'function') throw Error(r(191, e));
        e.call(t);
    }
    function Cd(e, t) {
        var n = e.callbacks;
        if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) wd(n[e], t);
    }
    var Sl = E(null),
        ko = E(0);
    function Ed(e, t) {
        ((e = Hn), W(ko, e), W(Sl, t), (Hn = e | t.baseLanes));
    }
    function Qc() {
        (W(ko, Hn), W(Sl, Sl.current));
    }
    function Zc() {
        ((Hn = ko.current), q(Sl), q(ko));
    }
    var Ut = E(null),
        $t = null;
    function na(e) {
        var t = e.alternate;
        (W(We, We.current & 1), W(Ut, e), $t === null && (t === null || Sl.current !== null || t.memoizedState !== null) && ($t = e));
    }
    function Jc(e) {
        (W(We, We.current), W(Ut, e), $t === null && ($t = e));
    }
    function Td(e) {
        e.tag === 22 ? (W(We, We.current), W(Ut, e), $t === null && ($t = e)) : aa();
    }
    function aa() {
        (W(We, We.current), W(Ut, Ut.current));
    }
    function Bt(e) {
        (q(Ut), $t === e && ($t = null), q(We));
    }
    var We = E(0);
    function Oo(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && ((n = n.dehydrated), n === null || eu(n) || tu(n))) return t;
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
    var kn = 0,
        Ce = null,
        He = null,
        nt = null,
        zo = !1,
        xl = !1,
        qa = !1,
        Do = 0,
        bi = 0,
        wl = null,
        e0 = 0;
    function Je() {
        throw Error(r(321));
    }
    function Ic(e, t) {
        if (t === null) return !1;
        for (var n = 0; n < t.length && n < e.length; n++) if (!_t(e[n], t[n])) return !1;
        return !0;
    }
    function Wc(e, t, n, a, i, o) {
        return (
            (kn = o),
            (Ce = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (A.H = e === null || e.memoizedState === null ? cm : fr),
            (qa = !1),
            (o = n(a, i)),
            (qa = !1),
            xl && (o = Nd(t, n, a, i)),
            Ad(e),
            o
        );
    }
    function Ad(e) {
        A.H = wi;
        var t = He !== null && He.next !== null;
        if (((kn = 0), (nt = He = Ce = null), (zo = !1), (bi = 0), (wl = null), t)) throw Error(r(300));
        e === null || at || ((e = e.dependencies), e !== null && Eo(e) && (at = !0));
    }
    function Nd(e, t, n, a) {
        Ce = e;
        var i = 0;
        do {
            if ((xl && (wl = null), (bi = 0), (xl = !1), 25 <= i)) throw Error(r(301));
            if (((i += 1), (nt = He = null), e.updateQueue != null)) {
                var o = e.updateQueue;
                ((o.lastEffect = null), (o.events = null), (o.stores = null), o.memoCache != null && (o.memoCache.index = 0));
            }
            ((A.H = rm), (o = t(n, a)));
        } while (xl);
        return o;
    }
    function t0() {
        var e = A.H,
            t = e.useState()[0];
        return (
            (t = typeof t.then == 'function' ? Si(t) : t),
            (e = e.useState()[0]),
            (He !== null ? He.memoizedState : null) !== e && (Ce.flags |= 1024),
            t
        );
    }
    function $c() {
        var e = Do !== 0;
        return ((Do = 0), e);
    }
    function Fc(e, t, n) {
        ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function Pc(e) {
        if (zo) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                (t !== null && (t.pending = null), (e = e.next));
            }
            zo = !1;
        }
        ((kn = 0), (nt = He = Ce = null), (xl = !1), (bi = Do = 0), (wl = null));
    }
    function Ct() {
        var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        return (nt === null ? (Ce.memoizedState = nt = e) : (nt = nt.next = e), nt);
    }
    function $e() {
        if (He === null) {
            var e = Ce.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = He.next;
        var t = nt === null ? Ce.memoizedState : nt.next;
        if (t !== null) ((nt = t), (He = e));
        else {
            if (e === null) throw Ce.alternate === null ? Error(r(467)) : Error(r(310));
            ((He = e),
                (e = { memoizedState: He.memoizedState, baseState: He.baseState, baseQueue: He.baseQueue, queue: He.queue, next: null }),
                nt === null ? (Ce.memoizedState = nt = e) : (nt = nt.next = e));
        }
        return nt;
    }
    function _o() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Si(e) {
        var t = bi;
        return (
            (bi += 1),
            wl === null && (wl = []),
            (e = vd(wl, e, t)),
            (t = Ce),
            (nt === null ? t.memoizedState : nt.next) === null && ((t = t.alternate), (A.H = t === null || t.memoizedState === null ? cm : fr)),
            e
        );
    }
    function Lo(e) {
        if (e !== null && typeof e == 'object') {
            if (typeof e.then == 'function') return Si(e);
            if (e.$$typeof === H) return pt(e);
        }
        throw Error(r(438, String(e)));
    }
    function er(e) {
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
            n === null && ((n = _o()), (Ce.updateQueue = n)),
            (n.memoCache = t),
            (n = t.data[t.index]),
            n === void 0)
        )
            for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = te;
        return (t.index++, n);
    }
    function On(e, t) {
        return typeof t == 'function' ? t(e) : t;
    }
    function Uo(e) {
        var t = $e();
        return tr(t, He, e);
    }
    function tr(e, t, n) {
        var a = e.queue;
        if (a === null) throw Error(r(311));
        a.lastRenderedReducer = n;
        var i = e.baseQueue,
            o = a.pending;
        if (o !== null) {
            if (i !== null) {
                var f = i.next;
                ((i.next = o.next), (o.next = f));
            }
            ((t.baseQueue = i = o), (a.pending = null));
        }
        if (((o = e.baseState), i === null)) e.memoizedState = o;
        else {
            t = i.next;
            var v = (f = null),
                C = null,
                _ = t,
                Y = !1;
            do {
                var I = _.lane & -536870913;
                if (I !== _.lane ? (Re & I) === I : (kn & I) === I) {
                    var L = _.revertLane;
                    if (L === 0)
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
                            I === gl && (Y = !0));
                    else if ((kn & L) === L) {
                        ((_ = _.next), L === gl && (Y = !0));
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
                            C === null ? ((v = C = I), (f = o)) : (C = C.next = I),
                            (Ce.lanes |= L),
                            (oa |= L));
                    ((I = _.action), qa && n(o, I), (o = _.hasEagerState ? _.eagerState : n(o, I)));
                } else
                    ((L = {
                        lane: I,
                        revertLane: _.revertLane,
                        gesture: _.gesture,
                        action: _.action,
                        hasEagerState: _.hasEagerState,
                        eagerState: _.eagerState,
                        next: null,
                    }),
                        C === null ? ((v = C = L), (f = o)) : (C = C.next = L),
                        (Ce.lanes |= I),
                        (oa |= I));
                _ = _.next;
            } while (_ !== null && _ !== t);
            if ((C === null ? (f = o) : (C.next = v), !_t(o, e.memoizedState) && ((at = !0), Y && ((n = vl), n !== null)))) throw n;
            ((e.memoizedState = o), (e.baseState = f), (e.baseQueue = C), (a.lastRenderedState = o));
        }
        return (i === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
    }
    function nr(e) {
        var t = $e(),
            n = t.queue;
        if (n === null) throw Error(r(311));
        n.lastRenderedReducer = e;
        var a = n.dispatch,
            i = n.pending,
            o = t.memoizedState;
        if (i !== null) {
            n.pending = null;
            var f = (i = i.next);
            do ((o = e(o, f.action)), (f = f.next));
            while (f !== i);
            (_t(o, t.memoizedState) || (at = !0), (t.memoizedState = o), t.baseQueue === null && (t.baseState = o), (n.lastRenderedState = o));
        }
        return [o, a];
    }
    function jd(e, t, n) {
        var a = Ce,
            i = $e(),
            o = Oe;
        if (o) {
            if (n === void 0) throw Error(r(407));
            n = n();
        } else n = t();
        var f = !_t((He || i).memoizedState, n);
        if (
            (f && ((i.memoizedState = n), (at = !0)),
            (i = i.queue),
            ir(kd.bind(null, a, i, e), [e]),
            i.getSnapshot !== t || f || (nt !== null && nt.memoizedState.tag & 1))
        ) {
            if (((a.flags |= 2048), Cl(9, { destroy: void 0 }, Rd.bind(null, a, i, n, t), null), Ge === null)) throw Error(r(349));
            o || (kn & 127) !== 0 || Md(a, t, n);
        }
        return n;
    }
    function Md(e, t, n) {
        ((e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            (t = Ce.updateQueue),
            t === null ? ((t = _o()), (Ce.updateQueue = t), (t.stores = [e])) : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Rd(e, t, n, a) {
        ((t.value = n), (t.getSnapshot = a), Od(t) && zd(e));
    }
    function kd(e, t, n) {
        return n(function () {
            Od(t) && zd(e);
        });
    }
    function Od(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !_t(e, n);
        } catch {
            return !0;
        }
    }
    function zd(e) {
        var t = Oa(e, 2);
        t !== null && kt(t, e, 2);
    }
    function ar(e) {
        var t = Ct();
        if (typeof e == 'function') {
            var n = e;
            if (((e = n()), qa)) {
                st(!0);
                try {
                    n();
                } finally {
                    st(!1);
                }
            }
        }
        return (
            (t.memoizedState = t.baseState = e),
            (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: On, lastRenderedState: e }),
            t
        );
    }
    function Dd(e, t, n, a) {
        return ((e.baseState = n), tr(e, He, typeof a == 'function' ? a : On));
    }
    function n0(e, t, n, a, i) {
        if (Vo(e)) throw Error(r(485));
        if (((e = t.action), e !== null)) {
            var o = {
                payload: i,
                action: e,
                next: null,
                isTransition: !0,
                status: 'pending',
                value: null,
                reason: null,
                listeners: [],
                then: function (f) {
                    o.listeners.push(f);
                },
            };
            (A.T !== null ? n(!0) : (o.isTransition = !1),
                a(o),
                (n = t.pending),
                n === null ? ((o.next = t.pending = o), _d(t, o)) : ((o.next = n.next), (t.pending = n.next = o)));
        }
    }
    function _d(e, t) {
        var n = t.action,
            a = t.payload,
            i = e.state;
        if (t.isTransition) {
            var o = A.T,
                f = {};
            A.T = f;
            try {
                var v = n(i, a),
                    C = A.S;
                (C !== null && C(f, v), Ld(e, t, v));
            } catch (_) {
                lr(e, t, _);
            } finally {
                (o !== null && f.types !== null && (o.types = f.types), (A.T = o));
            }
        } else
            try {
                ((o = n(i, a)), Ld(e, t, o));
            } catch (_) {
                lr(e, t, _);
            }
    }
    function Ld(e, t, n) {
        n !== null && typeof n == 'object' && typeof n.then == 'function'
            ? n.then(
                  function (a) {
                      Ud(e, t, a);
                  },
                  function (a) {
                      return lr(e, t, a);
                  }
              )
            : Ud(e, t, n);
    }
    function Ud(e, t, n) {
        ((t.status = 'fulfilled'),
            (t.value = n),
            Bd(t),
            (e.state = n),
            (t = e.pending),
            t !== null && ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), _d(e, n))));
    }
    function lr(e, t, n) {
        var a = e.pending;
        if (((e.pending = null), a !== null)) {
            a = a.next;
            do ((t.status = 'rejected'), (t.reason = n), Bd(t), (t = t.next));
            while (t !== a);
        }
        e.action = null;
    }
    function Bd(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Hd(e, t) {
        return t;
    }
    function Vd(e, t) {
        if (Oe) {
            var n = Ge.formState;
            if (n !== null) {
                e: {
                    var a = Ce;
                    if (Oe) {
                        if (Ye) {
                            t: {
                                for (var i = Ye, o = Wt; i.nodeType !== 8; ) {
                                    if (!o) {
                                        i = null;
                                        break t;
                                    }
                                    if (((i = Ft(i.nextSibling)), i === null)) {
                                        i = null;
                                        break t;
                                    }
                                }
                                ((o = i.data), (i = o === 'F!' || o === 'F' ? i : null));
                            }
                            if (i) {
                                ((Ye = Ft(i.nextSibling)), (a = i.data === 'F!'));
                                break e;
                            }
                        }
                        $n(a);
                    }
                    a = !1;
                }
                a && (t = n[0]);
            }
        }
        return (
            (n = Ct()),
            (n.memoizedState = n.baseState = t),
            (a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Hd, lastRenderedState: t }),
            (n.queue = a),
            (n = im.bind(null, Ce, a)),
            (a.dispatch = n),
            (a = ar(!1)),
            (o = ur.bind(null, Ce, !1, a.queue)),
            (a = Ct()),
            (i = { state: t, dispatch: null, action: e, pending: null }),
            (a.queue = i),
            (n = n0.bind(null, Ce, i, o, n)),
            (i.dispatch = n),
            (a.memoizedState = e),
            [t, n, !1]
        );
    }
    function qd(e) {
        var t = $e();
        return Gd(t, He, e);
    }
    function Gd(e, t, n) {
        if (((t = tr(e, t, Hd)[0]), (e = Uo(On)[0]), typeof t == 'object' && t !== null && typeof t.then == 'function'))
            try {
                var a = Si(t);
            } catch (f) {
                throw f === yl ? No : f;
            }
        else a = t;
        t = $e();
        var i = t.queue,
            o = i.dispatch;
        return (n !== t.memoizedState && ((Ce.flags |= 2048), Cl(9, { destroy: void 0 }, a0.bind(null, i, n), null)), [a, o, e]);
    }
    function a0(e, t) {
        e.action = t;
    }
    function Yd(e) {
        var t = $e(),
            n = He;
        if (n !== null) return Gd(t, n, e);
        ($e(), (t = t.memoizedState), (n = $e()));
        var a = n.queue.dispatch;
        return ((n.memoizedState = e), [t, a, !1]);
    }
    function Cl(e, t, n, a) {
        return (
            (e = { tag: e, create: n, deps: a, inst: t, next: null }),
            (t = Ce.updateQueue),
            t === null && ((t = _o()), (Ce.updateQueue = t)),
            (n = t.lastEffect),
            n === null ? (t.lastEffect = e.next = e) : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
            e
        );
    }
    function Xd() {
        return $e().memoizedState;
    }
    function Bo(e, t, n, a) {
        var i = Ct();
        ((Ce.flags |= e), (i.memoizedState = Cl(1 | t, { destroy: void 0 }, n, a === void 0 ? null : a)));
    }
    function Ho(e, t, n, a) {
        var i = $e();
        a = a === void 0 ? null : a;
        var o = i.memoizedState.inst;
        He !== null && a !== null && Ic(a, He.memoizedState.deps)
            ? (i.memoizedState = Cl(t, o, n, a))
            : ((Ce.flags |= e), (i.memoizedState = Cl(1 | t, o, n, a)));
    }
    function Kd(e, t) {
        Bo(8390656, 8, e, t);
    }
    function ir(e, t) {
        Ho(2048, 8, e, t);
    }
    function l0(e) {
        Ce.flags |= 4;
        var t = Ce.updateQueue;
        if (t === null) ((t = _o()), (Ce.updateQueue = t), (t.events = [e]));
        else {
            var n = t.events;
            n === null ? (t.events = [e]) : n.push(e);
        }
    }
    function Qd(e) {
        var t = $e().memoizedState;
        return (
            l0({ ref: t, nextImpl: e }),
            function () {
                if ((_e & 2) !== 0) throw Error(r(440));
                return t.impl.apply(void 0, arguments);
            }
        );
    }
    function Zd(e, t) {
        return Ho(4, 2, e, t);
    }
    function Jd(e, t) {
        return Ho(4, 4, e, t);
    }
    function Id(e, t) {
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
    function Wd(e, t, n) {
        ((n = n != null ? n.concat([e]) : null), Ho(4, 4, Id.bind(null, t, e), n));
    }
    function or() {}
    function $d(e, t) {
        var n = $e();
        t = t === void 0 ? null : t;
        var a = n.memoizedState;
        return t !== null && Ic(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
    }
    function Fd(e, t) {
        var n = $e();
        t = t === void 0 ? null : t;
        var a = n.memoizedState;
        if (t !== null && Ic(t, a[1])) return a[0];
        if (((a = e()), qa)) {
            st(!0);
            try {
                e();
            } finally {
                st(!1);
            }
        }
        return ((n.memoizedState = [a, t]), a);
    }
    function sr(e, t, n) {
        return n === void 0 || ((kn & 1073741824) !== 0 && (Re & 261930) === 0)
            ? (e.memoizedState = t)
            : ((e.memoizedState = n), (e = Pm()), (Ce.lanes |= e), (oa |= e), n);
    }
    function Pd(e, t, n, a) {
        return _t(n, t)
            ? n
            : Sl.current !== null
              ? ((e = sr(e, n, a)), _t(e, t) || (at = !0), e)
              : (kn & 42) === 0 || ((kn & 1073741824) !== 0 && (Re & 261930) === 0)
                ? ((at = !0), (e.memoizedState = n))
                : ((e = Pm()), (Ce.lanes |= e), (oa |= e), t);
    }
    function em(e, t, n, a, i) {
        var o = G.p;
        G.p = o !== 0 && 8 > o ? o : 8;
        var f = A.T,
            v = {};
        ((A.T = v), ur(e, !1, t, n));
        try {
            var C = i(),
                _ = A.S;
            if ((_ !== null && _(v, C), C !== null && typeof C == 'object' && typeof C.then == 'function')) {
                var Y = Py(C, a);
                xi(e, t, Y, qt(e));
            } else xi(e, t, a, qt(e));
        } catch (I) {
            xi(e, t, { then: function () {}, status: 'rejected', reason: I }, qt());
        } finally {
            ((G.p = o), f !== null && v.types !== null && (f.types = v.types), (A.T = f));
        }
    }
    function i0() {}
    function cr(e, t, n, a) {
        if (e.tag !== 5) throw Error(r(476));
        var i = tm(e).queue;
        em(
            e,
            i,
            t,
            O,
            n === null
                ? i0
                : function () {
                      return (nm(e), n(a));
                  }
        );
    }
    function tm(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: O,
            baseState: O,
            baseQueue: null,
            queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: On, lastRenderedState: O },
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
    function nm(e) {
        var t = tm(e);
        (t.next === null && (t = e.alternate.memoizedState), xi(e, t.next.queue, {}, qt()));
    }
    function rr() {
        return pt(Bi);
    }
    function am() {
        return $e().memoizedState;
    }
    function lm() {
        return $e().memoizedState;
    }
    function o0(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
                case 24:
                case 3:
                    var n = qt();
                    e = ea(n);
                    var a = ta(t, e, n);
                    (a !== null && (kt(a, t, n), gi(a, t, n)), (t = { cache: Bc() }), (e.payload = t));
                    return;
            }
            t = t.return;
        }
    }
    function s0(e, t, n) {
        var a = qt();
        ((n = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null }),
            Vo(e) ? om(t, n) : ((n = Nc(e, t, n, a)), n !== null && (kt(n, e, a), sm(n, t, a))));
    }
    function im(e, t, n) {
        var a = qt();
        xi(e, t, n, a);
    }
    function xi(e, t, n, a) {
        var i = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null };
        if (Vo(e)) om(t, i);
        else {
            var o = e.alternate;
            if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
                try {
                    var f = t.lastRenderedState,
                        v = o(f, n);
                    if (((i.hasEagerState = !0), (i.eagerState = v), _t(v, f))) return (So(e, t, i, 0), Ge === null && bo(), !1);
                } catch {
                } finally {
                }
            if (((n = Nc(e, t, i, a)), n !== null)) return (kt(n, e, a), sm(n, t, a), !0);
        }
        return !1;
    }
    function ur(e, t, n, a) {
        if (((a = { lane: 2, revertLane: Gr(), gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null }), Vo(e))) {
            if (t) throw Error(r(479));
        } else ((t = Nc(e, n, a, 2)), t !== null && kt(t, e, 2));
    }
    function Vo(e) {
        var t = e.alternate;
        return e === Ce || (t !== null && t === Ce);
    }
    function om(e, t) {
        xl = zo = !0;
        var n = e.pending;
        (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
    }
    function sm(e, t, n) {
        if ((n & 4194048) !== 0) {
            var a = t.lanes;
            ((a &= e.pendingLanes), (n |= a), (t.lanes = n), df(e, n));
        }
    }
    var wi = {
        readContext: pt,
        use: Lo,
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
    wi.useEffectEvent = Je;
    var cm = {
            readContext: pt,
            use: Lo,
            useCallback: function (e, t) {
                return ((Ct().memoizedState = [e, t === void 0 ? null : t]), e);
            },
            useContext: pt,
            useEffect: Kd,
            useImperativeHandle: function (e, t, n) {
                ((n = n != null ? n.concat([e]) : null), Bo(4194308, 4, Id.bind(null, t, e), n));
            },
            useLayoutEffect: function (e, t) {
                return Bo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
                Bo(4, 2, e, t);
            },
            useMemo: function (e, t) {
                var n = Ct();
                t = t === void 0 ? null : t;
                var a = e();
                if (qa) {
                    st(!0);
                    try {
                        e();
                    } finally {
                        st(!1);
                    }
                }
                return ((n.memoizedState = [a, t]), a);
            },
            useReducer: function (e, t, n) {
                var a = Ct();
                if (n !== void 0) {
                    var i = n(t);
                    if (qa) {
                        st(!0);
                        try {
                            n(t);
                        } finally {
                            st(!1);
                        }
                    }
                } else i = t;
                return (
                    (a.memoizedState = a.baseState = i),
                    (e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: i }),
                    (a.queue = e),
                    (e = e.dispatch = s0.bind(null, Ce, e)),
                    [a.memoizedState, e]
                );
            },
            useRef: function (e) {
                var t = Ct();
                return ((e = { current: e }), (t.memoizedState = e));
            },
            useState: function (e) {
                e = ar(e);
                var t = e.queue,
                    n = im.bind(null, Ce, t);
                return ((t.dispatch = n), [e.memoizedState, n]);
            },
            useDebugValue: or,
            useDeferredValue: function (e, t) {
                var n = Ct();
                return sr(n, e, t);
            },
            useTransition: function () {
                var e = ar(!1);
                return ((e = em.bind(null, Ce, e.queue, !0, !1)), (Ct().memoizedState = e), [!1, e]);
            },
            useSyncExternalStore: function (e, t, n) {
                var a = Ce,
                    i = Ct();
                if (Oe) {
                    if (n === void 0) throw Error(r(407));
                    n = n();
                } else {
                    if (((n = t()), Ge === null)) throw Error(r(349));
                    (Re & 127) !== 0 || Md(a, t, n);
                }
                i.memoizedState = n;
                var o = { value: n, getSnapshot: t };
                return (
                    (i.queue = o),
                    Kd(kd.bind(null, a, o, e), [e]),
                    (a.flags |= 2048),
                    Cl(9, { destroy: void 0 }, Rd.bind(null, a, o, n, t), null),
                    n
                );
            },
            useId: function () {
                var e = Ct(),
                    t = Ge.identifierPrefix;
                if (Oe) {
                    var n = hn,
                        a = mn;
                    ((n = (a & ~(1 << (32 - wt(a) - 1))).toString(32) + n),
                        (t = '_' + t + 'R_' + n),
                        (n = Do++),
                        0 < n && (t += 'H' + n.toString(32)),
                        (t += '_'));
                } else ((n = e0++), (t = '_' + t + 'r_' + n.toString(32) + '_'));
                return (e.memoizedState = t);
            },
            useHostTransitionStatus: rr,
            useFormState: Vd,
            useActionState: Vd,
            useOptimistic: function (e) {
                var t = Ct();
                t.memoizedState = t.baseState = e;
                var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
                return ((t.queue = n), (t = ur.bind(null, Ce, !0, n)), (n.dispatch = t), [e, t]);
            },
            useMemoCache: er,
            useCacheRefresh: function () {
                return (Ct().memoizedState = o0.bind(null, Ce));
            },
            useEffectEvent: function (e) {
                var t = Ct(),
                    n = { impl: e };
                return (
                    (t.memoizedState = n),
                    function () {
                        if ((_e & 2) !== 0) throw Error(r(440));
                        return n.impl.apply(void 0, arguments);
                    }
                );
            },
        },
        fr = {
            readContext: pt,
            use: Lo,
            useCallback: $d,
            useContext: pt,
            useEffect: ir,
            useImperativeHandle: Wd,
            useInsertionEffect: Zd,
            useLayoutEffect: Jd,
            useMemo: Fd,
            useReducer: Uo,
            useRef: Xd,
            useState: function () {
                return Uo(On);
            },
            useDebugValue: or,
            useDeferredValue: function (e, t) {
                var n = $e();
                return Pd(n, He.memoizedState, e, t);
            },
            useTransition: function () {
                var e = Uo(On)[0],
                    t = $e().memoizedState;
                return [typeof e == 'boolean' ? e : Si(e), t];
            },
            useSyncExternalStore: jd,
            useId: am,
            useHostTransitionStatus: rr,
            useFormState: qd,
            useActionState: qd,
            useOptimistic: function (e, t) {
                var n = $e();
                return Dd(n, He, e, t);
            },
            useMemoCache: er,
            useCacheRefresh: lm,
        };
    fr.useEffectEvent = Qd;
    var rm = {
        readContext: pt,
        use: Lo,
        useCallback: $d,
        useContext: pt,
        useEffect: ir,
        useImperativeHandle: Wd,
        useInsertionEffect: Zd,
        useLayoutEffect: Jd,
        useMemo: Fd,
        useReducer: nr,
        useRef: Xd,
        useState: function () {
            return nr(On);
        },
        useDebugValue: or,
        useDeferredValue: function (e, t) {
            var n = $e();
            return He === null ? sr(n, e, t) : Pd(n, He.memoizedState, e, t);
        },
        useTransition: function () {
            var e = nr(On)[0],
                t = $e().memoizedState;
            return [typeof e == 'boolean' ? e : Si(e), t];
        },
        useSyncExternalStore: jd,
        useId: am,
        useHostTransitionStatus: rr,
        useFormState: Yd,
        useActionState: Yd,
        useOptimistic: function (e, t) {
            var n = $e();
            return He !== null ? Dd(n, He, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
        },
        useMemoCache: er,
        useCacheRefresh: lm,
    };
    rm.useEffectEvent = Qd;
    function dr(e, t, n, a) {
        ((t = e.memoizedState),
            (n = n(a, t)),
            (n = n == null ? t : x({}, t, n)),
            (e.memoizedState = n),
            e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var mr = {
        enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var a = qt(),
                i = ea(a);
            ((i.payload = t), n != null && (i.callback = n), (t = ta(e, i, a)), t !== null && (kt(t, e, a), gi(t, e, a)));
        },
        enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var a = qt(),
                i = ea(a);
            ((i.tag = 1), (i.payload = t), n != null && (i.callback = n), (t = ta(e, i, a)), t !== null && (kt(t, e, a), gi(t, e, a)));
        },
        enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = qt(),
                a = ea(n);
            ((a.tag = 2), t != null && (a.callback = t), (t = ta(e, a, n)), t !== null && (kt(t, e, n), gi(t, e, n)));
        },
    };
    function um(e, t, n, a, i, o, f) {
        return (
            (e = e.stateNode),
            typeof e.shouldComponentUpdate == 'function'
                ? e.shouldComponentUpdate(a, o, f)
                : t.prototype && t.prototype.isPureReactComponent
                  ? !ci(n, a) || !ci(i, o)
                  : !0
        );
    }
    function fm(e, t, n, a) {
        ((e = t.state),
            typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, a),
            typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, a),
            t.state !== e && mr.enqueueReplaceState(t, t.state, null));
    }
    function Ga(e, t) {
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
    function dm(e) {
        yo(e);
    }
    function mm(e) {
        console.error(e);
    }
    function hm(e) {
        yo(e);
    }
    function qo(e, t) {
        try {
            var n = e.onUncaughtError;
            n(t.value, { componentStack: t.stack });
        } catch (a) {
            setTimeout(function () {
                throw a;
            });
        }
    }
    function pm(e, t, n) {
        try {
            var a = e.onCaughtError;
            a(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
        } catch (i) {
            setTimeout(function () {
                throw i;
            });
        }
    }
    function hr(e, t, n) {
        return (
            (n = ea(n)),
            (n.tag = 3),
            (n.payload = { element: null }),
            (n.callback = function () {
                qo(e, t);
            }),
            n
        );
    }
    function gm(e) {
        return ((e = ea(e)), (e.tag = 3), e);
    }
    function vm(e, t, n, a) {
        var i = n.type.getDerivedStateFromError;
        if (typeof i == 'function') {
            var o = a.value;
            ((e.payload = function () {
                return i(o);
            }),
                (e.callback = function () {
                    pm(t, n, a);
                }));
        }
        var f = n.stateNode;
        f !== null &&
            typeof f.componentDidCatch == 'function' &&
            (e.callback = function () {
                (pm(t, n, a), typeof i != 'function' && (sa === null ? (sa = new Set([this])) : sa.add(this)));
                var v = a.stack;
                this.componentDidCatch(a.value, { componentStack: v !== null ? v : '' });
            });
    }
    function c0(e, t, n, a, i) {
        if (((n.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
            if (((t = n.alternate), t !== null && pl(t, n, i, !0), (n = Ut.current), n !== null)) {
                switch (n.tag) {
                    case 31:
                    case 13:
                        return (
                            $t === null ? Po() : n.alternate === null && Ie === 0 && (Ie = 3),
                            (n.flags &= -257),
                            (n.flags |= 65536),
                            (n.lanes = i),
                            a === jo
                                ? (n.flags |= 16384)
                                : ((t = n.updateQueue), t === null ? (n.updateQueue = new Set([a])) : t.add(a), Hr(e, a, i)),
                            !1
                        );
                    case 22:
                        return (
                            (n.flags |= 65536),
                            a === jo
                                ? (n.flags |= 16384)
                                : ((t = n.updateQueue),
                                  t === null
                                      ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }), (n.updateQueue = t))
                                      : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([a])) : n.add(a)),
                                  Hr(e, a, i)),
                            !1
                        );
                }
                throw Error(r(435, n.tag));
            }
            return (Hr(e, a, i), Po(), !1);
        }
        if (Oe)
            return (
                (t = Ut.current),
                t !== null
                    ? ((t.flags & 65536) === 0 && (t.flags |= 256),
                      (t.flags |= 65536),
                      (t.lanes = i),
                      a !== zc && ((e = Error(r(422), { cause: a })), fi(Zt(e, n))))
                    : (a !== zc && ((t = Error(r(423), { cause: a })), fi(Zt(t, n))),
                      (e = e.current.alternate),
                      (e.flags |= 65536),
                      (i &= -i),
                      (e.lanes |= i),
                      (a = Zt(a, n)),
                      (i = hr(e.stateNode, a, i)),
                      Xc(e, i),
                      Ie !== 4 && (Ie = 2)),
                !1
            );
        var o = Error(r(520), { cause: a });
        if (((o = Zt(o, n)), Ri === null ? (Ri = [o]) : Ri.push(o), Ie !== 4 && (Ie = 2), t === null)) return !0;
        ((a = Zt(a, n)), (n = t));
        do {
            switch (n.tag) {
                case 3:
                    return ((n.flags |= 65536), (e = i & -i), (n.lanes |= e), (e = hr(n.stateNode, a, e)), Xc(n, e), !1);
                case 1:
                    if (
                        ((t = n.type),
                        (o = n.stateNode),
                        (n.flags & 128) === 0 &&
                            (typeof t.getDerivedStateFromError == 'function' ||
                                (o !== null && typeof o.componentDidCatch == 'function' && (sa === null || !sa.has(o)))))
                    )
                        return ((n.flags |= 65536), (i &= -i), (n.lanes |= i), (i = gm(i)), vm(i, e, n, a), Xc(n, i), !1);
            }
            n = n.return;
        } while (n !== null);
        return !1;
    }
    var pr = Error(r(461)),
        at = !1;
    function gt(e, t, n, a) {
        t.child = e === null ? xd(t, null, n, a) : Va(t, e.child, n, a);
    }
    function ym(e, t, n, a, i) {
        n = n.render;
        var o = t.ref;
        if ('ref' in a) {
            var f = {};
            for (var v in a) v !== 'ref' && (f[v] = a[v]);
        } else f = a;
        return (
            La(t),
            (a = Wc(e, t, n, f, o, i)),
            (v = $c()),
            e !== null && !at ? (Fc(e, t, i), zn(e, t, i)) : (Oe && v && kc(t), (t.flags |= 1), gt(e, t, a, i), t.child)
        );
    }
    function bm(e, t, n, a, i) {
        if (e === null) {
            var o = n.type;
            return typeof o == 'function' && !jc(o) && o.defaultProps === void 0 && n.compare === null
                ? ((t.tag = 15), (t.type = o), Sm(e, t, o, a, i))
                : ((e = wo(n.type, null, a, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
        }
        if (((o = e.child), !Cr(e, i))) {
            var f = o.memoizedProps;
            if (((n = n.compare), (n = n !== null ? n : ci), n(f, a) && e.ref === t.ref)) return zn(e, t, i);
        }
        return ((t.flags |= 1), (e = Nn(o, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    function Sm(e, t, n, a, i) {
        if (e !== null) {
            var o = e.memoizedProps;
            if (ci(o, a) && e.ref === t.ref)
                if (((at = !1), (t.pendingProps = a = o), Cr(e, i))) (e.flags & 131072) !== 0 && (at = !0);
                else return ((t.lanes = e.lanes), zn(e, t, i));
        }
        return gr(e, t, n, a, i);
    }
    function xm(e, t, n, a) {
        var i = a.children,
            o = e !== null ? e.memoizedState : null;
        if (
            (e === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
            a.mode === 'hidden')
        ) {
            if ((t.flags & 128) !== 0) {
                if (((o = o !== null ? o.baseLanes | n : n), e !== null)) {
                    for (a = t.child = e.child, i = 0; a !== null; ) ((i = i | a.lanes | a.childLanes), (a = a.sibling));
                    a = i & ~o;
                } else ((a = 0), (t.child = null));
                return wm(e, t, o, n, a);
            }
            if ((n & 536870912) !== 0)
                ((t.memoizedState = { baseLanes: 0, cachePool: null }),
                    e !== null && Ao(t, o !== null ? o.cachePool : null),
                    o !== null ? Ed(t, o) : Qc(),
                    Td(t));
            else return ((a = t.lanes = 536870912), wm(e, t, o !== null ? o.baseLanes | n : n, n, a));
        } else o !== null ? (Ao(t, o.cachePool), Ed(t, o), aa(), (t.memoizedState = null)) : (e !== null && Ao(t, null), Qc(), aa());
        return (gt(e, t, i, n), t.child);
    }
    function Ci(e, t) {
        return (
            (e !== null && e.tag === 22) ||
                t.stateNode !== null ||
                (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
            t.sibling
        );
    }
    function wm(e, t, n, a, i) {
        var o = Vc();
        return (
            (o = o === null ? null : { parent: tt._currentValue, pool: o }),
            (t.memoizedState = { baseLanes: n, cachePool: o }),
            e !== null && Ao(t, null),
            Qc(),
            Td(t),
            e !== null && pl(e, t, a, !0),
            (t.childLanes = i),
            null
        );
    }
    function Go(e, t) {
        return ((t = Xo({ mode: t.mode, children: t.children }, e.mode)), (t.ref = e.ref), (e.child = t), (t.return = e), t);
    }
    function Cm(e, t, n) {
        return (Va(t, e.child, null, n), (e = Go(t, t.pendingProps)), (e.flags |= 2), Bt(t), (t.memoizedState = null), e);
    }
    function r0(e, t, n) {
        var a = t.pendingProps,
            i = (t.flags & 128) !== 0;
        if (((t.flags &= -129), e === null)) {
            if (Oe) {
                if (a.mode === 'hidden') return ((e = Go(t, a)), (t.lanes = 536870912), Ci(null, e));
                if (
                    (Jc(t),
                    (e = Ye)
                        ? ((e = _h(e, Wt)),
                          (e = e !== null && e.data === '&' ? e : null),
                          e !== null &&
                              ((t.memoizedState = {
                                  dehydrated: e,
                                  treeContext: In !== null ? { id: mn, overflow: hn } : null,
                                  retryLane: 536870912,
                                  hydrationErrors: null,
                              }),
                              (n = od(e)),
                              (n.return = t),
                              (t.child = n),
                              (ht = t),
                              (Ye = null)))
                        : (e = null),
                    e === null)
                )
                    throw $n(t);
                return ((t.lanes = 536870912), null);
            }
            return Go(t, a);
        }
        var o = e.memoizedState;
        if (o !== null) {
            var f = o.dehydrated;
            if ((Jc(t), i))
                if (t.flags & 256) ((t.flags &= -257), (t = Cm(e, t, n)));
                else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
                else throw Error(r(558));
            else if ((at || pl(e, t, n, !1), (i = (n & e.childLanes) !== 0), at || i)) {
                if (((a = Ge), a !== null && ((f = mf(a, n)), f !== 0 && f !== o.retryLane))) throw ((o.retryLane = f), Oa(e, f), kt(a, e, f), pr);
                (Po(), (t = Cm(e, t, n)));
            } else
                ((e = o.treeContext),
                    (Ye = Ft(f.nextSibling)),
                    (ht = t),
                    (Oe = !0),
                    (Wn = null),
                    (Wt = !1),
                    e !== null && rd(t, e),
                    (t = Go(t, a)),
                    (t.flags |= 4096));
            return t;
        }
        return ((e = Nn(e.child, { mode: a.mode, children: a.children })), (e.ref = t.ref), (t.child = e), (e.return = t), e);
    }
    function Yo(e, t) {
        var n = t.ref;
        if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof n != 'function' && typeof n != 'object') throw Error(r(284));
            (e === null || e.ref !== n) && (t.flags |= 4194816);
        }
    }
    function gr(e, t, n, a, i) {
        return (
            La(t),
            (n = Wc(e, t, n, a, void 0, i)),
            (a = $c()),
            e !== null && !at ? (Fc(e, t, i), zn(e, t, i)) : (Oe && a && kc(t), (t.flags |= 1), gt(e, t, n, i), t.child)
        );
    }
    function Em(e, t, n, a, i, o) {
        return (
            La(t),
            (t.updateQueue = null),
            (n = Nd(t, a, n, i)),
            Ad(e),
            (a = $c()),
            e !== null && !at ? (Fc(e, t, o), zn(e, t, o)) : (Oe && a && kc(t), (t.flags |= 1), gt(e, t, n, o), t.child)
        );
    }
    function Tm(e, t, n, a, i) {
        if ((La(t), t.stateNode === null)) {
            var o = fl,
                f = n.contextType;
            (typeof f == 'object' && f !== null && (o = pt(f)),
                (o = new n(a, o)),
                (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
                (o.updater = mr),
                (t.stateNode = o),
                (o._reactInternals = t),
                (o = t.stateNode),
                (o.props = a),
                (o.state = t.memoizedState),
                (o.refs = {}),
                Gc(t),
                (f = n.contextType),
                (o.context = typeof f == 'object' && f !== null ? pt(f) : fl),
                (o.state = t.memoizedState),
                (f = n.getDerivedStateFromProps),
                typeof f == 'function' && (dr(t, n, f, a), (o.state = t.memoizedState)),
                typeof n.getDerivedStateFromProps == 'function' ||
                    typeof o.getSnapshotBeforeUpdate == 'function' ||
                    (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
                    ((f = o.state),
                    typeof o.componentWillMount == 'function' && o.componentWillMount(),
                    typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
                    f !== o.state && mr.enqueueReplaceState(o, o.state, null),
                    yi(t, a, o, i),
                    vi(),
                    (o.state = t.memoizedState)),
                typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
                (a = !0));
        } else if (e === null) {
            o = t.stateNode;
            var v = t.memoizedProps,
                C = Ga(n, v);
            o.props = C;
            var _ = o.context,
                Y = n.contextType;
            ((f = fl), typeof Y == 'object' && Y !== null && (f = pt(Y)));
            var I = n.getDerivedStateFromProps;
            ((Y = typeof I == 'function' || typeof o.getSnapshotBeforeUpdate == 'function'),
                (v = t.pendingProps !== v),
                Y ||
                    (typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') ||
                    ((v || _ !== f) && fm(t, o, a, f)),
                (Pn = !1));
            var L = t.memoizedState;
            ((o.state = L),
                yi(t, a, o, i),
                vi(),
                (_ = t.memoizedState),
                v || L !== _ || Pn
                    ? (typeof I == 'function' && (dr(t, n, I, a), (_ = t.memoizedState)),
                      (C = Pn || um(t, n, C, a, L, _, f))
                          ? (Y ||
                                (typeof o.UNSAFE_componentWillMount != 'function' && typeof o.componentWillMount != 'function') ||
                                (typeof o.componentWillMount == 'function' && o.componentWillMount(),
                                typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount()),
                            typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
                          : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (t.memoizedProps = a), (t.memoizedState = _)),
                      (o.props = a),
                      (o.state = _),
                      (o.context = f),
                      (a = C))
                    : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (a = !1)));
        } else {
            ((o = t.stateNode),
                Yc(e, t),
                (f = t.memoizedProps),
                (Y = Ga(n, f)),
                (o.props = Y),
                (I = t.pendingProps),
                (L = o.context),
                (_ = n.contextType),
                (C = fl),
                typeof _ == 'object' && _ !== null && (C = pt(_)),
                (v = n.getDerivedStateFromProps),
                (_ = typeof v == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
                    (typeof o.UNSAFE_componentWillReceiveProps != 'function' && typeof o.componentWillReceiveProps != 'function') ||
                    ((f !== I || L !== C) && fm(t, o, a, C)),
                (Pn = !1),
                (L = t.memoizedState),
                (o.state = L),
                yi(t, a, o, i),
                vi());
            var V = t.memoizedState;
            f !== I || L !== V || Pn || (e !== null && e.dependencies !== null && Eo(e.dependencies))
                ? (typeof v == 'function' && (dr(t, n, v, a), (V = t.memoizedState)),
                  (Y = Pn || um(t, n, Y, a, L, V, C) || (e !== null && e.dependencies !== null && Eo(e.dependencies)))
                      ? (_ ||
                            (typeof o.UNSAFE_componentWillUpdate != 'function' && typeof o.componentWillUpdate != 'function') ||
                            (typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(a, V, C),
                            typeof o.UNSAFE_componentWillUpdate == 'function' && o.UNSAFE_componentWillUpdate(a, V, C)),
                        typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
                        typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
                      : (typeof o.componentDidUpdate != 'function' || (f === e.memoizedProps && L === e.memoizedState) || (t.flags |= 4),
                        typeof o.getSnapshotBeforeUpdate != 'function' || (f === e.memoizedProps && L === e.memoizedState) || (t.flags |= 1024),
                        (t.memoizedProps = a),
                        (t.memoizedState = V)),
                  (o.props = a),
                  (o.state = V),
                  (o.context = C),
                  (a = Y))
                : (typeof o.componentDidUpdate != 'function' || (f === e.memoizedProps && L === e.memoizedState) || (t.flags |= 4),
                  typeof o.getSnapshotBeforeUpdate != 'function' || (f === e.memoizedProps && L === e.memoizedState) || (t.flags |= 1024),
                  (a = !1));
        }
        return (
            (o = a),
            Yo(e, t),
            (a = (t.flags & 128) !== 0),
            o || a
                ? ((o = t.stateNode),
                  (n = a && typeof n.getDerivedStateFromError != 'function' ? null : o.render()),
                  (t.flags |= 1),
                  e !== null && a ? ((t.child = Va(t, e.child, null, i)), (t.child = Va(t, null, n, i))) : gt(e, t, n, i),
                  (t.memoizedState = o.state),
                  (e = t.child))
                : (e = zn(e, t, i)),
            e
        );
    }
    function Am(e, t, n, a) {
        return (Da(), (t.flags |= 256), gt(e, t, n, a), t.child);
    }
    var vr = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function yr(e) {
        return { baseLanes: e, cachePool: pd() };
    }
    function br(e, t, n) {
        return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= Vt), e);
    }
    function Nm(e, t, n) {
        var a = t.pendingProps,
            i = !1,
            o = (t.flags & 128) !== 0,
            f;
        if (
            ((f = o) || (f = e !== null && e.memoizedState === null ? !1 : (We.current & 2) !== 0),
            f && ((i = !0), (t.flags &= -129)),
            (f = (t.flags & 32) !== 0),
            (t.flags &= -33),
            e === null)
        ) {
            if (Oe) {
                if (
                    (i ? na(t) : aa(),
                    (e = Ye)
                        ? ((e = _h(e, Wt)),
                          (e = e !== null && e.data !== '&' ? e : null),
                          e !== null &&
                              ((t.memoizedState = {
                                  dehydrated: e,
                                  treeContext: In !== null ? { id: mn, overflow: hn } : null,
                                  retryLane: 536870912,
                                  hydrationErrors: null,
                              }),
                              (n = od(e)),
                              (n.return = t),
                              (t.child = n),
                              (ht = t),
                              (Ye = null)))
                        : (e = null),
                    e === null)
                )
                    throw $n(t);
                return (tu(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
            }
            var v = a.children;
            return (
                (a = a.fallback),
                i
                    ? (aa(),
                      (i = t.mode),
                      (v = Xo({ mode: 'hidden', children: v }, i)),
                      (a = za(a, i, n, null)),
                      (v.return = t),
                      (a.return = t),
                      (v.sibling = a),
                      (t.child = v),
                      (a = t.child),
                      (a.memoizedState = yr(n)),
                      (a.childLanes = br(e, f, n)),
                      (t.memoizedState = vr),
                      Ci(null, a))
                    : (na(t), Sr(t, v))
            );
        }
        var C = e.memoizedState;
        if (C !== null && ((v = C.dehydrated), v !== null)) {
            if (o)
                t.flags & 256
                    ? (na(t), (t.flags &= -257), (t = xr(e, t, n)))
                    : t.memoizedState !== null
                      ? (aa(), (t.child = e.child), (t.flags |= 128), (t = null))
                      : (aa(),
                        (v = a.fallback),
                        (i = t.mode),
                        (a = Xo({ mode: 'visible', children: a.children }, i)),
                        (v = za(v, i, n, null)),
                        (v.flags |= 2),
                        (a.return = t),
                        (v.return = t),
                        (a.sibling = v),
                        (t.child = a),
                        Va(t, e.child, null, n),
                        (a = t.child),
                        (a.memoizedState = yr(n)),
                        (a.childLanes = br(e, f, n)),
                        (t.memoizedState = vr),
                        (t = Ci(null, a)));
            else if ((na(t), tu(v))) {
                if (((f = v.nextSibling && v.nextSibling.dataset), f)) var _ = f.dgst;
                ((f = _), (a = Error(r(419))), (a.stack = ''), (a.digest = f), fi({ value: a, source: null, stack: null }), (t = xr(e, t, n)));
            } else if ((at || pl(e, t, n, !1), (f = (n & e.childLanes) !== 0), at || f)) {
                if (((f = Ge), f !== null && ((a = mf(f, n)), a !== 0 && a !== C.retryLane))) throw ((C.retryLane = a), Oa(e, a), kt(f, e, a), pr);
                (eu(v) || Po(), (t = xr(e, t, n)));
            } else
                eu(v)
                    ? ((t.flags |= 192), (t.child = e.child), (t = null))
                    : ((e = C.treeContext),
                      (Ye = Ft(v.nextSibling)),
                      (ht = t),
                      (Oe = !0),
                      (Wn = null),
                      (Wt = !1),
                      e !== null && rd(t, e),
                      (t = Sr(t, a.children)),
                      (t.flags |= 4096));
            return t;
        }
        return i
            ? (aa(),
              (v = a.fallback),
              (i = t.mode),
              (C = e.child),
              (_ = C.sibling),
              (a = Nn(C, { mode: 'hidden', children: a.children })),
              (a.subtreeFlags = C.subtreeFlags & 65011712),
              _ !== null ? (v = Nn(_, v)) : ((v = za(v, i, n, null)), (v.flags |= 2)),
              (v.return = t),
              (a.return = t),
              (a.sibling = v),
              (t.child = a),
              Ci(null, a),
              (a = t.child),
              (v = e.child.memoizedState),
              v === null
                  ? (v = yr(n))
                  : ((i = v.cachePool),
                    i !== null ? ((C = tt._currentValue), (i = i.parent !== C ? { parent: C, pool: C } : i)) : (i = pd()),
                    (v = { baseLanes: v.baseLanes | n, cachePool: i })),
              (a.memoizedState = v),
              (a.childLanes = br(e, f, n)),
              (t.memoizedState = vr),
              Ci(e.child, a))
            : (na(t),
              (n = e.child),
              (e = n.sibling),
              (n = Nn(n, { mode: 'visible', children: a.children })),
              (n.return = t),
              (n.sibling = null),
              e !== null && ((f = t.deletions), f === null ? ((t.deletions = [e]), (t.flags |= 16)) : f.push(e)),
              (t.child = n),
              (t.memoizedState = null),
              n);
    }
    function Sr(e, t) {
        return ((t = Xo({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
    }
    function Xo(e, t) {
        return ((e = Lt(22, e, null, t)), (e.lanes = 0), e);
    }
    function xr(e, t, n) {
        return (Va(t, e.child, null, n), (e = Sr(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e);
    }
    function jm(e, t, n) {
        e.lanes |= t;
        var a = e.alternate;
        (a !== null && (a.lanes |= t), Lc(e.return, t, n));
    }
    function wr(e, t, n, a, i, o) {
        var f = e.memoizedState;
        f === null
            ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: i, treeForkCount: o })
            : ((f.isBackwards = t),
              (f.rendering = null),
              (f.renderingStartTime = 0),
              (f.last = a),
              (f.tail = n),
              (f.tailMode = i),
              (f.treeForkCount = o));
    }
    function Mm(e, t, n) {
        var a = t.pendingProps,
            i = a.revealOrder,
            o = a.tail;
        a = a.children;
        var f = We.current,
            v = (f & 2) !== 0;
        if (
            (v ? ((f = (f & 1) | 2), (t.flags |= 128)) : (f &= 1),
            W(We, f),
            gt(e, t, a, n),
            (a = Oe ? ui : 0),
            !v && e !== null && (e.flags & 128) !== 0)
        )
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && jm(e, n, t);
                else if (e.tag === 19) jm(e, n, t);
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
                for (n = t.child, i = null; n !== null; ) ((e = n.alternate), e !== null && Oo(e) === null && (i = n), (n = n.sibling));
                ((n = i), n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)), wr(t, !1, i, n, o, a));
                break;
            case 'backwards':
            case 'unstable_legacy-backwards':
                for (n = null, i = t.child, t.child = null; i !== null; ) {
                    if (((e = i.alternate), e !== null && Oo(e) === null)) {
                        t.child = i;
                        break;
                    }
                    ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
                }
                wr(t, !0, n, null, o, a);
                break;
            case 'together':
                wr(t, !1, null, null, void 0, a);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function zn(e, t, n) {
        if ((e !== null && (t.dependencies = e.dependencies), (oa |= t.lanes), (n & t.childLanes) === 0))
            if (e !== null) {
                if ((pl(e, t, n, !1), (n & t.childLanes) === 0)) return null;
            } else return null;
        if (e !== null && t.child !== e.child) throw Error(r(153));
        if (t.child !== null) {
            for (e = t.child, n = Nn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
                ((e = e.sibling), (n = n.sibling = Nn(e, e.pendingProps)), (n.return = t));
            n.sibling = null;
        }
        return t.child;
    }
    function Cr(e, t) {
        return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && Eo(e)));
    }
    function u0(e, t, n) {
        switch (t.tag) {
            case 3:
                (be(t, t.stateNode.containerInfo), Fn(t, tt, e.memoizedState.cache), Da());
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
                if (t.memoizedState !== null) return ((t.flags |= 128), Jc(t), null);
                break;
            case 13:
                var a = t.memoizedState;
                if (a !== null)
                    return a.dehydrated !== null
                        ? (na(t), (t.flags |= 128), null)
                        : (n & t.child.childLanes) !== 0
                          ? Nm(e, t, n)
                          : (na(t), (e = zn(e, t, n)), e !== null ? e.sibling : null);
                na(t);
                break;
            case 19:
                var i = (e.flags & 128) !== 0;
                if (((a = (n & t.childLanes) !== 0), a || (pl(e, t, n, !1), (a = (n & t.childLanes) !== 0)), i)) {
                    if (a) return Mm(e, t, n);
                    t.flags |= 128;
                }
                if (((i = t.memoizedState), i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)), W(We, We.current), a))
                    break;
                return null;
            case 22:
                return ((t.lanes = 0), xm(e, t, n, t.pendingProps));
            case 24:
                Fn(t, tt, e.memoizedState.cache);
        }
        return zn(e, t, n);
    }
    function Rm(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps) at = !0;
            else {
                if (!Cr(e, n) && (t.flags & 128) === 0) return ((at = !1), u0(e, t, n));
                at = (e.flags & 131072) !== 0;
            }
        else ((at = !1), Oe && (t.flags & 1048576) !== 0 && cd(t, ui, t.index));
        switch (((t.lanes = 0), t.tag)) {
            case 16:
                e: {
                    var a = t.pendingProps;
                    if (((e = Ba(t.elementType)), (t.type = e), typeof e == 'function'))
                        jc(e) ? ((a = Ga(e, a)), (t.tag = 1), (t = Tm(null, t, e, a, n))) : ((t.tag = 0), (t = gr(null, t, e, a, n)));
                    else {
                        if (e != null) {
                            var i = e.$$typeof;
                            if (i === Z) {
                                ((t.tag = 11), (t = ym(null, t, e, a, n)));
                                break e;
                            } else if (i === z) {
                                ((t.tag = 14), (t = bm(null, t, e, a, n)));
                                break e;
                            }
                        }
                        throw ((t = ie(e) || e), Error(r(306, t, '')));
                    }
                }
                return t;
            case 0:
                return gr(e, t, t.type, t.pendingProps, n);
            case 1:
                return ((a = t.type), (i = Ga(a, t.pendingProps)), Tm(e, t, a, i, n));
            case 3:
                e: {
                    if ((be(t, t.stateNode.containerInfo), e === null)) throw Error(r(387));
                    a = t.pendingProps;
                    var o = t.memoizedState;
                    ((i = o.element), Yc(e, t), yi(t, a, null, n));
                    var f = t.memoizedState;
                    if (((a = f.cache), Fn(t, tt, a), a !== o.cache && Uc(t, [tt], n, !0), vi(), (a = f.element), o.isDehydrated))
                        if (
                            ((o = { element: a, isDehydrated: !1, cache: f.cache }),
                            (t.updateQueue.baseState = o),
                            (t.memoizedState = o),
                            t.flags & 256)
                        ) {
                            t = Am(e, t, a, n);
                            break e;
                        } else if (a !== i) {
                            ((i = Zt(Error(r(424)), t)), fi(i), (t = Am(e, t, a, n)));
                            break e;
                        } else {
                            switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
                            }
                            for (Ye = Ft(e.firstChild), ht = t, Oe = !0, Wn = null, Wt = !0, n = xd(t, null, a, n), t.child = n; n; )
                                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
                        }
                    else {
                        if ((Da(), a === i)) {
                            t = zn(e, t, n);
                            break e;
                        }
                        gt(e, t, a, n);
                    }
                    t = t.child;
                }
                return t;
            case 26:
                return (
                    Yo(e, t),
                    e === null
                        ? (n = qh(t.type, null, t.pendingProps, null))
                            ? (t.memoizedState = n)
                            : Oe ||
                              ((n = t.type),
                              (e = t.pendingProps),
                              (a = os(he.current).createElement(n)),
                              (a[mt] = t),
                              (a[Tt] = e),
                              vt(a, n, e),
                              ft(a),
                              (t.stateNode = a))
                        : (t.memoizedState = qh(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
                    null
                );
            case 27:
                return (
                    we(t),
                    e === null &&
                        Oe &&
                        ((a = t.stateNode = Bh(t.type, t.pendingProps, he.current)),
                        (ht = t),
                        (Wt = !0),
                        (i = Ye),
                        fa(t.type) ? ((nu = i), (Ye = Ft(a.firstChild))) : (Ye = i)),
                    gt(e, t, t.pendingProps.children, n),
                    Yo(e, t),
                    e === null && (t.flags |= 4194304),
                    t.child
                );
            case 5:
                return (
                    e === null &&
                        Oe &&
                        ((i = a = Ye) &&
                            ((a = V0(a, t.type, t.pendingProps, Wt)),
                            a !== null ? ((t.stateNode = a), (ht = t), (Ye = Ft(a.firstChild)), (Wt = !1), (i = !0)) : (i = !1)),
                        i || $n(t)),
                    we(t),
                    (i = t.type),
                    (o = t.pendingProps),
                    (f = e !== null ? e.memoizedProps : null),
                    (a = o.children),
                    $r(i, o) ? (a = null) : f !== null && $r(i, f) && (t.flags |= 32),
                    t.memoizedState !== null && ((i = Wc(e, t, t0, null, null, n)), (Bi._currentValue = i)),
                    Yo(e, t),
                    gt(e, t, a, n),
                    t.child
                );
            case 6:
                return (
                    e === null &&
                        Oe &&
                        ((e = n = Ye) &&
                            ((n = q0(n, t.pendingProps, Wt)), n !== null ? ((t.stateNode = n), (ht = t), (Ye = null), (e = !0)) : (e = !1)),
                        e || $n(t)),
                    null
                );
            case 13:
                return Nm(e, t, n);
            case 4:
                return (be(t, t.stateNode.containerInfo), (a = t.pendingProps), e === null ? (t.child = Va(t, null, a, n)) : gt(e, t, a, n), t.child);
            case 11:
                return ym(e, t, t.type, t.pendingProps, n);
            case 7:
                return (gt(e, t, t.pendingProps, n), t.child);
            case 8:
                return (gt(e, t, t.pendingProps.children, n), t.child);
            case 12:
                return (gt(e, t, t.pendingProps.children, n), t.child);
            case 10:
                return ((a = t.pendingProps), Fn(t, t.type, a.value), gt(e, t, a.children, n), t.child);
            case 9:
                return (
                    (i = t.type._context),
                    (a = t.pendingProps.children),
                    La(t),
                    (i = pt(i)),
                    (a = a(i)),
                    (t.flags |= 1),
                    gt(e, t, a, n),
                    t.child
                );
            case 14:
                return bm(e, t, t.type, t.pendingProps, n);
            case 15:
                return Sm(e, t, t.type, t.pendingProps, n);
            case 19:
                return Mm(e, t, n);
            case 31:
                return r0(e, t, n);
            case 22:
                return xm(e, t, n, t.pendingProps);
            case 24:
                return (
                    La(t),
                    (a = pt(tt)),
                    e === null
                        ? ((i = Vc()),
                          i === null && ((i = Ge), (o = Bc()), (i.pooledCache = o), o.refCount++, o !== null && (i.pooledCacheLanes |= n), (i = o)),
                          (t.memoizedState = { parent: a, cache: i }),
                          Gc(t),
                          Fn(t, tt, i))
                        : ((e.lanes & n) !== 0 && (Yc(e, t), yi(t, null, null, n), vi()),
                          (i = e.memoizedState),
                          (o = t.memoizedState),
                          i.parent !== a
                              ? ((i = { parent: a, cache: a }),
                                (t.memoizedState = i),
                                t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i),
                                Fn(t, tt, a))
                              : ((a = o.cache), Fn(t, tt, a), a !== i.cache && Uc(t, [tt], n, !0))),
                    gt(e, t, t.pendingProps.children, n),
                    t.child
                );
            case 29:
                throw t.pendingProps;
        }
        throw Error(r(156, t.tag));
    }
    function Dn(e) {
        e.flags |= 4;
    }
    function Er(e, t, n, a, i) {
        if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
            if (((e.flags |= 16777216), (i & 335544128) === i))
                if (e.stateNode.complete) e.flags |= 8192;
                else if (ah()) e.flags |= 8192;
                else throw ((Ha = jo), qc);
        } else e.flags &= -16777217;
    }
    function km(e, t) {
        if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
        else if (((e.flags |= 16777216), !Qh(t)))
            if (ah()) e.flags |= 8192;
            else throw ((Ha = jo), qc);
    }
    function Ko(e, t) {
        (t !== null && (e.flags |= 4), e.flags & 16384 && ((t = e.tag !== 22 ? uf() : 536870912), (e.lanes |= t), (Nl |= t)));
    }
    function Ei(e, t) {
        if (!Oe)
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
    function Xe(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            n = 0,
            a = 0;
        if (t)
            for (var i = e.child; i !== null; )
                ((n |= i.lanes | i.childLanes), (a |= i.subtreeFlags & 65011712), (a |= i.flags & 65011712), (i.return = e), (i = i.sibling));
        else for (i = e.child; i !== null; ) ((n |= i.lanes | i.childLanes), (a |= i.subtreeFlags), (a |= i.flags), (i.return = e), (i = i.sibling));
        return ((e.subtreeFlags |= a), (e.childLanes = n), t);
    }
    function f0(e, t, n) {
        var a = t.pendingProps;
        switch ((Oc(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return (Xe(t), null);
            case 1:
                return (Xe(t), null);
            case 3:
                return (
                    (n = t.stateNode),
                    (a = null),
                    e !== null && (a = e.memoizedState.cache),
                    t.memoizedState.cache !== a && (t.flags |= 2048),
                    Rn(tt),
                    ye(),
                    n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
                    (e === null || e.child === null) &&
                        (hl(t) ? Dn(t) : e === null || (e.memoizedState.isDehydrated && (t.flags & 256) === 0) || ((t.flags |= 1024), Dc())),
                    Xe(t),
                    null
                );
            case 26:
                var i = t.type,
                    o = t.memoizedState;
                return (
                    e === null
                        ? (Dn(t), o !== null ? (Xe(t), km(t, o)) : (Xe(t), Er(t, i, null, a, n)))
                        : o
                          ? o !== e.memoizedState
                              ? (Dn(t), Xe(t), km(t, o))
                              : (Xe(t), (t.flags &= -16777217))
                          : ((e = e.memoizedProps), e !== a && Dn(t), Xe(t), Er(t, i, e, a, n)),
                    null
                );
            case 27:
                if ((Te(t), (n = he.current), (i = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== a && Dn(t);
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(r(166));
                        return (Xe(t), null);
                    }
                    ((e = P.current), hl(t) ? ud(t) : ((e = Bh(i, a, n)), (t.stateNode = e), Dn(t)));
                }
                return (Xe(t), null);
            case 5:
                if ((Te(t), (i = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== a && Dn(t);
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(r(166));
                        return (Xe(t), null);
                    }
                    if (((o = P.current), hl(t))) ud(t);
                    else {
                        var f = os(he.current);
                        switch (o) {
                            case 1:
                                o = f.createElementNS('http://www.w3.org/2000/svg', i);
                                break;
                            case 2:
                                o = f.createElementNS('http://www.w3.org/1998/Math/MathML', i);
                                break;
                            default:
                                switch (i) {
                                    case 'svg':
                                        o = f.createElementNS('http://www.w3.org/2000/svg', i);
                                        break;
                                    case 'math':
                                        o = f.createElementNS('http://www.w3.org/1998/Math/MathML', i);
                                        break;
                                    case 'script':
                                        ((o = f.createElement('div')), (o.innerHTML = '<script><\/script>'), (o = o.removeChild(o.firstChild)));
                                        break;
                                    case 'select':
                                        ((o = typeof a.is == 'string' ? f.createElement('select', { is: a.is }) : f.createElement('select')),
                                            a.multiple ? (o.multiple = !0) : a.size && (o.size = a.size));
                                        break;
                                    default:
                                        o = typeof a.is == 'string' ? f.createElement(i, { is: a.is }) : f.createElement(i);
                                }
                        }
                        ((o[mt] = t), (o[Tt] = a));
                        e: for (f = t.child; f !== null; ) {
                            if (f.tag === 5 || f.tag === 6) o.appendChild(f.stateNode);
                            else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                                ((f.child.return = f), (f = f.child));
                                continue;
                            }
                            if (f === t) break e;
                            for (; f.sibling === null; ) {
                                if (f.return === null || f.return === t) break e;
                                f = f.return;
                            }
                            ((f.sibling.return = f.return), (f = f.sibling));
                        }
                        t.stateNode = o;
                        e: switch ((vt(o, i, a), i)) {
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
                        a && Dn(t);
                    }
                }
                return (Xe(t), Er(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null);
            case 6:
                if (e && t.stateNode != null) e.memoizedProps !== a && Dn(t);
                else {
                    if (typeof a != 'string' && t.stateNode === null) throw Error(r(166));
                    if (((e = he.current), hl(t))) {
                        if (((e = t.stateNode), (n = t.memoizedProps), (a = null), (i = ht), i !== null))
                            switch (i.tag) {
                                case 27:
                                case 5:
                                    a = i.memoizedProps;
                            }
                        ((e[mt] = t),
                            (e = !!(e.nodeValue === n || (a !== null && a.suppressHydrationWarning === !0) || Nh(e.nodeValue, n))),
                            e || $n(t, !0));
                    } else ((e = os(e).createTextNode(a)), (e[mt] = t), (t.stateNode = e));
                }
                return (Xe(t), null);
            case 31:
                if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
                    if (((a = hl(t)), n !== null)) {
                        if (e === null) {
                            if (!a) throw Error(r(318));
                            if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(r(557));
                            e[mt] = t;
                        } else (Da(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
                        (Xe(t), (e = !1));
                    } else ((n = Dc()), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), (e = !0));
                    if (!e) return t.flags & 256 ? (Bt(t), t) : (Bt(t), null);
                    if ((t.flags & 128) !== 0) throw Error(r(558));
                }
                return (Xe(t), null);
            case 13:
                if (((a = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
                    if (((i = hl(t)), a !== null && a.dehydrated !== null)) {
                        if (e === null) {
                            if (!i) throw Error(r(318));
                            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(r(317));
                            i[mt] = t;
                        } else (Da(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
                        (Xe(t), (i = !1));
                    } else ((i = Dc()), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), (i = !0));
                    if (!i) return t.flags & 256 ? (Bt(t), t) : (Bt(t), null);
                }
                return (
                    Bt(t),
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
                              (o = null),
                              a.memoizedState !== null && a.memoizedState.cachePool !== null && (o = a.memoizedState.cachePool.pool),
                              o !== i && (a.flags |= 2048)),
                          n !== e && n && (t.child.flags |= 8192),
                          Ko(t, t.updateQueue),
                          Xe(t),
                          null)
                );
            case 4:
                return (ye(), e === null && Qr(t.stateNode.containerInfo), Xe(t), null);
            case 10:
                return (Rn(t.type), Xe(t), null);
            case 19:
                if ((q(We), (a = t.memoizedState), a === null)) return (Xe(t), null);
                if (((i = (t.flags & 128) !== 0), (o = a.rendering), o === null))
                    if (i) Ei(a, !1);
                    else {
                        if (Ie !== 0 || (e !== null && (e.flags & 128) !== 0))
                            for (e = t.child; e !== null; ) {
                                if (((o = Oo(e)), o !== null)) {
                                    for (
                                        t.flags |= 128,
                                            Ei(a, !1),
                                            e = o.updateQueue,
                                            t.updateQueue = e,
                                            Ko(t, e),
                                            t.subtreeFlags = 0,
                                            e = n,
                                            n = t.child;
                                        n !== null;

                                    )
                                        (id(n, e), (n = n.sibling));
                                    return (W(We, (We.current & 1) | 2), Oe && jn(t, a.treeForkCount), t.child);
                                }
                                e = e.sibling;
                            }
                        a.tail !== null && xt() > Wo && ((t.flags |= 128), (i = !0), Ei(a, !1), (t.lanes = 4194304));
                    }
                else {
                    if (!i)
                        if (((e = Oo(o)), e !== null)) {
                            if (
                                ((t.flags |= 128),
                                (i = !0),
                                (e = e.updateQueue),
                                (t.updateQueue = e),
                                Ko(t, e),
                                Ei(a, !0),
                                a.tail === null && a.tailMode === 'hidden' && !o.alternate && !Oe)
                            )
                                return (Xe(t), null);
                        } else
                            2 * xt() - a.renderingStartTime > Wo && n !== 536870912 && ((t.flags |= 128), (i = !0), Ei(a, !1), (t.lanes = 4194304));
                    a.isBackwards
                        ? ((o.sibling = t.child), (t.child = o))
                        : ((e = a.last), e !== null ? (e.sibling = o) : (t.child = o), (a.last = o));
                }
                return a.tail !== null
                    ? ((e = a.tail),
                      (a.rendering = e),
                      (a.tail = e.sibling),
                      (a.renderingStartTime = xt()),
                      (e.sibling = null),
                      (n = We.current),
                      W(We, i ? (n & 1) | 2 : n & 1),
                      Oe && jn(t, a.treeForkCount),
                      e)
                    : (Xe(t), null);
            case 22:
            case 23:
                return (
                    Bt(t),
                    Zc(),
                    (a = t.memoizedState !== null),
                    e !== null ? (e.memoizedState !== null) !== a && (t.flags |= 8192) : a && (t.flags |= 8192),
                    a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Xe(t),
                    (n = t.updateQueue),
                    n !== null && Ko(t, n.retryQueue),
                    (n = null),
                    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
                    (a = null),
                    t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
                    a !== n && (t.flags |= 2048),
                    e !== null && q(Ua),
                    null
                );
            case 24:
                return ((n = null), e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Rn(tt), Xe(t), null);
            case 25:
                return null;
            case 30:
                return null;
        }
        throw Error(r(156, t.tag));
    }
    function d0(e, t) {
        switch ((Oc(t), t.tag)) {
            case 1:
                return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 3:
                return (Rn(tt), ye(), (e = t.flags), (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 26:
            case 27:
            case 5:
                return (Te(t), null);
            case 31:
                if (t.memoizedState !== null) {
                    if ((Bt(t), t.alternate === null)) throw Error(r(340));
                    Da();
                }
                return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 13:
                if ((Bt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                    if (t.alternate === null) throw Error(r(340));
                    Da();
                }
                return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 19:
                return (q(We), null);
            case 4:
                return (ye(), null);
            case 10:
                return (Rn(t.type), null);
            case 22:
            case 23:
                return (Bt(t), Zc(), e !== null && q(Ua), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 24:
                return (Rn(tt), null);
            case 25:
                return null;
            default:
                return null;
        }
    }
    function Om(e, t) {
        switch ((Oc(t), t.tag)) {
            case 3:
                (Rn(tt), ye());
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
                t.memoizedState !== null && Bt(t);
                break;
            case 13:
                Bt(t);
                break;
            case 19:
                q(We);
                break;
            case 10:
                Rn(t.type);
                break;
            case 22:
            case 23:
                (Bt(t), Zc(), e !== null && q(Ua));
                break;
            case 24:
                Rn(tt);
        }
    }
    function Ti(e, t) {
        try {
            var n = t.updateQueue,
                a = n !== null ? n.lastEffect : null;
            if (a !== null) {
                var i = a.next;
                n = i;
                do {
                    if ((n.tag & e) === e) {
                        a = void 0;
                        var o = n.create,
                            f = n.inst;
                        ((a = o()), (f.destroy = a));
                    }
                    n = n.next;
                } while (n !== i);
            }
        } catch (v) {
            Be(t, t.return, v);
        }
    }
    function la(e, t, n) {
        try {
            var a = t.updateQueue,
                i = a !== null ? a.lastEffect : null;
            if (i !== null) {
                var o = i.next;
                a = o;
                do {
                    if ((a.tag & e) === e) {
                        var f = a.inst,
                            v = f.destroy;
                        if (v !== void 0) {
                            ((f.destroy = void 0), (i = t));
                            var C = n,
                                _ = v;
                            try {
                                _();
                            } catch (Y) {
                                Be(i, C, Y);
                            }
                        }
                    }
                    a = a.next;
                } while (a !== o);
            }
        } catch (Y) {
            Be(t, t.return, Y);
        }
    }
    function zm(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var n = e.stateNode;
            try {
                Cd(t, n);
            } catch (a) {
                Be(e, e.return, a);
            }
        }
    }
    function Dm(e, t, n) {
        ((n.props = Ga(e.type, e.memoizedProps)), (n.state = e.memoizedState));
        try {
            n.componentWillUnmount();
        } catch (a) {
            Be(e, t, a);
        }
    }
    function Ai(e, t) {
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
    function _m(e) {
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
    function Tr(e, t, n) {
        try {
            var a = e.stateNode;
            (D0(a, e.type, n, t), (a[Tt] = t));
        } catch (i) {
            Be(e, e.return, i);
        }
    }
    function Lm(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && fa(e.type)) || e.tag === 4;
    }
    function Ar(e) {
        e: for (;;) {
            for (; e.sibling === null; ) {
                if (e.return === null || Lm(e.return)) return null;
                e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if ((e.tag === 27 && fa(e.type)) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                ((e.child.return = e), (e = e.child));
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function Nr(e, t, n) {
        var a = e.tag;
        if (a === 5 || a === 6)
            ((e = e.stateNode),
                t
                    ? (n.nodeType === 9 ? n.body : n.nodeName === 'HTML' ? n.ownerDocument.body : n).insertBefore(e, t)
                    : ((t = n.nodeType === 9 ? n.body : n.nodeName === 'HTML' ? n.ownerDocument.body : n),
                      t.appendChild(e),
                      (n = n._reactRootContainer),
                      n != null || t.onclick !== null || (t.onclick = Tn)));
        else if (a !== 4 && (a === 27 && fa(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null))
            for (Nr(e, t, n), e = e.sibling; e !== null; ) (Nr(e, t, n), (e = e.sibling));
    }
    function Qo(e, t, n) {
        var a = e.tag;
        if (a === 5 || a === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
        else if (a !== 4 && (a === 27 && fa(e.type) && (n = e.stateNode), (e = e.child), e !== null))
            for (Qo(e, t, n), e = e.sibling; e !== null; ) (Qo(e, t, n), (e = e.sibling));
    }
    function Um(e) {
        var t = e.stateNode,
            n = e.memoizedProps;
        try {
            for (var a = e.type, i = t.attributes; i.length; ) t.removeAttributeNode(i[0]);
            (vt(t, a, n), (t[mt] = e), (t[Tt] = n));
        } catch (o) {
            Be(e, e.return, o);
        }
    }
    var _n = !1,
        lt = !1,
        jr = !1,
        Bm = typeof WeakSet == 'function' ? WeakSet : Set,
        dt = null;
    function m0(e, t) {
        if (((e = e.containerInfo), (Ir = ms), (e = Wf(e)), xc(e))) {
            if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
            else
                e: {
                    n = ((n = e.ownerDocument) && n.defaultView) || window;
                    var a = n.getSelection && n.getSelection();
                    if (a && a.rangeCount !== 0) {
                        n = a.anchorNode;
                        var i = a.anchorOffset,
                            o = a.focusNode;
                        a = a.focusOffset;
                        try {
                            (n.nodeType, o.nodeType);
                        } catch {
                            n = null;
                            break e;
                        }
                        var f = 0,
                            v = -1,
                            C = -1,
                            _ = 0,
                            Y = 0,
                            I = e,
                            L = null;
                        t: for (;;) {
                            for (
                                var V;
                                I !== n || (i !== 0 && I.nodeType !== 3) || (v = f + i),
                                    I !== o || (a !== 0 && I.nodeType !== 3) || (C = f + a),
                                    I.nodeType === 3 && (f += I.nodeValue.length),
                                    (V = I.firstChild) !== null;

                            )
                                ((L = I), (I = V));
                            for (;;) {
                                if (I === e) break t;
                                if ((L === n && ++_ === i && (v = f), L === o && ++Y === a && (C = f), (V = I.nextSibling) !== null)) break;
                                ((I = L), (L = I.parentNode));
                            }
                            I = V;
                        }
                        n = v === -1 || C === -1 ? null : { start: v, end: C };
                    } else n = null;
                }
            n = n || { start: 0, end: 0 };
        } else n = null;
        for (Wr = { focusedElem: e, selectionRange: n }, ms = !1, dt = t; dt !== null; )
            if (((t = dt), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) ((e.return = t), (dt = e));
            else
                for (; dt !== null; ) {
                    switch (((t = dt), (o = t.alternate), (e = t.flags), t.tag)) {
                        case 0:
                            if ((e & 4) !== 0 && ((e = t.updateQueue), (e = e !== null ? e.events : null), e !== null))
                                for (n = 0; n < e.length; n++) ((i = e[n]), (i.ref.impl = i.nextImpl));
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((e & 1024) !== 0 && o !== null) {
                                ((e = void 0), (n = t), (i = o.memoizedProps), (o = o.memoizedState), (a = n.stateNode));
                                try {
                                    var se = Ga(n.type, i);
                                    ((e = a.getSnapshotBeforeUpdate(se, o)), (a.__reactInternalSnapshotBeforeUpdate = e));
                                } catch (ve) {
                                    Be(n, n.return, ve);
                                }
                            }
                            break;
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) Pr(e);
                                else if (n === 1)
                                    switch (e.nodeName) {
                                        case 'HEAD':
                                        case 'HTML':
                                        case 'BODY':
                                            Pr(e);
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
                        ((e.return = t.return), (dt = e));
                        break;
                    }
                    dt = t.return;
                }
    }
    function Hm(e, t, n) {
        var a = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                (Un(e, n), a & 4 && Ti(5, n));
                break;
            case 1:
                if ((Un(e, n), a & 4))
                    if (((e = n.stateNode), t === null))
                        try {
                            e.componentDidMount();
                        } catch (f) {
                            Be(n, n.return, f);
                        }
                    else {
                        var i = Ga(n.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (f) {
                            Be(n, n.return, f);
                        }
                    }
                (a & 64 && zm(n), a & 512 && Ai(n, n.return));
                break;
            case 3:
                if ((Un(e, n), a & 64 && ((e = n.updateQueue), e !== null))) {
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
                        Cd(e, t);
                    } catch (f) {
                        Be(n, n.return, f);
                    }
                }
                break;
            case 27:
                t === null && a & 4 && Um(n);
            case 26:
            case 5:
                (Un(e, n), t === null && a & 4 && _m(n), a & 512 && Ai(n, n.return));
                break;
            case 12:
                Un(e, n);
                break;
            case 31:
                (Un(e, n), a & 4 && Gm(e, n));
                break;
            case 13:
                (Un(e, n),
                    a & 4 && Ym(e, n),
                    a & 64 && ((e = n.memoizedState), e !== null && ((e = e.dehydrated), e !== null && ((n = w0.bind(null, n)), G0(e, n)))));
                break;
            case 22:
                if (((a = n.memoizedState !== null || _n), !a)) {
                    ((t = (t !== null && t.memoizedState !== null) || lt), (i = _n));
                    var o = lt;
                    ((_n = a), (lt = t) && !o ? Bn(e, n, (n.subtreeFlags & 8772) !== 0) : Un(e, n), (_n = i), (lt = o));
                }
                break;
            case 30:
                break;
            default:
                Un(e, n);
        }
    }
    function Vm(e) {
        var t = e.alternate;
        (t !== null && ((e.alternate = null), Vm(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            e.tag === 5 && ((t = e.stateNode), t !== null && lc(t)),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null));
    }
    var Qe = null,
        Nt = !1;
    function Ln(e, t, n) {
        for (n = n.child; n !== null; ) (qm(e, t, n), (n = n.sibling));
    }
    function qm(e, t, n) {
        if (Ke && typeof Ke.onCommitFiberUnmount == 'function')
            try {
                Ke.onCommitFiberUnmount(oe, n);
            } catch {}
        switch (n.tag) {
            case 26:
                (lt || pn(n, t),
                    Ln(e, t, n),
                    n.memoizedState ? n.memoizedState.count-- : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
                break;
            case 27:
                lt || pn(n, t);
                var a = Qe,
                    i = Nt;
                (fa(n.type) && ((Qe = n.stateNode), (Nt = !1)), Ln(e, t, n), _i(n.stateNode), (Qe = a), (Nt = i));
                break;
            case 5:
                lt || pn(n, t);
            case 6:
                if (((a = Qe), (i = Nt), (Qe = null), Ln(e, t, n), (Qe = a), (Nt = i), Qe !== null))
                    if (Nt)
                        try {
                            (Qe.nodeType === 9 ? Qe.body : Qe.nodeName === 'HTML' ? Qe.ownerDocument.body : Qe).removeChild(n.stateNode);
                        } catch (o) {
                            Be(n, t, o);
                        }
                    else
                        try {
                            Qe.removeChild(n.stateNode);
                        } catch (o) {
                            Be(n, t, o);
                        }
                break;
            case 18:
                Qe !== null &&
                    (Nt
                        ? ((e = Qe), zh(e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e, n.stateNode), _l(e))
                        : zh(Qe, n.stateNode));
                break;
            case 4:
                ((a = Qe), (i = Nt), (Qe = n.stateNode.containerInfo), (Nt = !0), Ln(e, t, n), (Qe = a), (Nt = i));
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                (la(2, n, t), lt || la(4, n, t), Ln(e, t, n));
                break;
            case 1:
                (lt || (pn(n, t), (a = n.stateNode), typeof a.componentWillUnmount == 'function' && Dm(n, t, a)), Ln(e, t, n));
                break;
            case 21:
                Ln(e, t, n);
                break;
            case 22:
                ((lt = (a = lt) || n.memoizedState !== null), Ln(e, t, n), (lt = a));
                break;
            default:
                Ln(e, t, n);
        }
    }
    function Gm(e, t) {
        if (t.memoizedState === null && ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))) {
            e = e.dehydrated;
            try {
                _l(e);
            } catch (n) {
                Be(t, t.return, n);
            }
        }
    }
    function Ym(e, t) {
        if (t.memoizedState === null && ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null))))
            try {
                _l(e);
            } catch (n) {
                Be(t, t.return, n);
            }
    }
    function h0(e) {
        switch (e.tag) {
            case 31:
            case 13:
            case 19:
                var t = e.stateNode;
                return (t === null && (t = e.stateNode = new Bm()), t);
            case 22:
                return ((e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new Bm()), t);
            default:
                throw Error(r(435, e.tag));
        }
    }
    function Zo(e, t) {
        var n = h0(e);
        t.forEach(function (a) {
            if (!n.has(a)) {
                n.add(a);
                var i = C0.bind(null, e, a);
                a.then(i, i);
            }
        });
    }
    function jt(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var a = 0; a < n.length; a++) {
                var i = n[a],
                    o = e,
                    f = t,
                    v = f;
                e: for (; v !== null; ) {
                    switch (v.tag) {
                        case 27:
                            if (fa(v.type)) {
                                ((Qe = v.stateNode), (Nt = !1));
                                break e;
                            }
                            break;
                        case 5:
                            ((Qe = v.stateNode), (Nt = !1));
                            break e;
                        case 3:
                        case 4:
                            ((Qe = v.stateNode.containerInfo), (Nt = !0));
                            break e;
                    }
                    v = v.return;
                }
                if (Qe === null) throw Error(r(160));
                (qm(o, f, i), (Qe = null), (Nt = !1), (o = i.alternate), o !== null && (o.return = null), (i.return = null));
            }
        if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (Xm(t, e), (t = t.sibling));
    }
    var an = null;
    function Xm(e, t) {
        var n = e.alternate,
            a = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                (jt(t, e), Mt(e), a & 4 && (la(3, e, e.return), Ti(3, e), la(5, e, e.return)));
                break;
            case 1:
                (jt(t, e),
                    Mt(e),
                    a & 512 && (lt || n === null || pn(n, n.return)),
                    a & 64 &&
                        _n &&
                        ((e = e.updateQueue),
                        e !== null &&
                            ((a = e.callbacks),
                            a !== null && ((n = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = n === null ? a : n.concat(a))))));
                break;
            case 26:
                var i = an;
                if ((jt(t, e), Mt(e), a & 512 && (lt || n === null || pn(n, n.return)), a & 4)) {
                    var o = n !== null ? n.memoizedState : null;
                    if (((a = e.memoizedState), n === null))
                        if (a === null)
                            if (e.stateNode === null) {
                                e: {
                                    ((a = e.type), (n = e.memoizedProps), (i = i.ownerDocument || i));
                                    t: switch (a) {
                                        case 'title':
                                            ((o = i.getElementsByTagName('title')[0]),
                                                (!o ||
                                                    o[Pl] ||
                                                    o[mt] ||
                                                    o.namespaceURI === 'http://www.w3.org/2000/svg' ||
                                                    o.hasAttribute('itemprop')) &&
                                                    ((o = i.createElement(a)), i.head.insertBefore(o, i.querySelector('head > title'))),
                                                vt(o, a, n),
                                                (o[mt] = e),
                                                ft(o),
                                                (a = o));
                                            break e;
                                        case 'link':
                                            var f = Xh('link', 'href', i).get(a + (n.href || ''));
                                            if (f) {
                                                for (var v = 0; v < f.length; v++)
                                                    if (
                                                        ((o = f[v]),
                                                        o.getAttribute('href') === (n.href == null || n.href === '' ? null : n.href) &&
                                                            o.getAttribute('rel') === (n.rel == null ? null : n.rel) &&
                                                            o.getAttribute('title') === (n.title == null ? null : n.title) &&
                                                            o.getAttribute('crossorigin') === (n.crossOrigin == null ? null : n.crossOrigin))
                                                    ) {
                                                        f.splice(v, 1);
                                                        break t;
                                                    }
                                            }
                                            ((o = i.createElement(a)), vt(o, a, n), i.head.appendChild(o));
                                            break;
                                        case 'meta':
                                            if ((f = Xh('meta', 'content', i).get(a + (n.content || '')))) {
                                                for (v = 0; v < f.length; v++)
                                                    if (
                                                        ((o = f[v]),
                                                        o.getAttribute('content') === (n.content == null ? null : '' + n.content) &&
                                                            o.getAttribute('name') === (n.name == null ? null : n.name) &&
                                                            o.getAttribute('property') === (n.property == null ? null : n.property) &&
                                                            o.getAttribute('http-equiv') === (n.httpEquiv == null ? null : n.httpEquiv) &&
                                                            o.getAttribute('charset') === (n.charSet == null ? null : n.charSet))
                                                    ) {
                                                        f.splice(v, 1);
                                                        break t;
                                                    }
                                            }
                                            ((o = i.createElement(a)), vt(o, a, n), i.head.appendChild(o));
                                            break;
                                        default:
                                            throw Error(r(468, a));
                                    }
                                    ((o[mt] = e), ft(o), (a = o));
                                }
                                e.stateNode = a;
                            } else Kh(i, e.type, e.stateNode);
                        else e.stateNode = Yh(i, a, e.memoizedProps);
                    else
                        o !== a
                            ? (o === null ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n)) : o.count--,
                              a === null ? Kh(i, e.type, e.stateNode) : Yh(i, a, e.memoizedProps))
                            : a === null && e.stateNode !== null && Tr(e, e.memoizedProps, n.memoizedProps);
                }
                break;
            case 27:
                (jt(t, e), Mt(e), a & 512 && (lt || n === null || pn(n, n.return)), n !== null && a & 4 && Tr(e, e.memoizedProps, n.memoizedProps));
                break;
            case 5:
                if ((jt(t, e), Mt(e), a & 512 && (lt || n === null || pn(n, n.return)), e.flags & 32)) {
                    i = e.stateNode;
                    try {
                        ll(i, '');
                    } catch (se) {
                        Be(e, e.return, se);
                    }
                }
                (a & 4 && e.stateNode != null && ((i = e.memoizedProps), Tr(e, i, n !== null ? n.memoizedProps : i)), a & 1024 && (jr = !0));
                break;
            case 6:
                if ((jt(t, e), Mt(e), a & 4)) {
                    if (e.stateNode === null) throw Error(r(162));
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
                    ((rs = null),
                    (i = an),
                    (an = ss(t.containerInfo)),
                    jt(t, e),
                    (an = i),
                    Mt(e),
                    a & 4 && n !== null && n.memoizedState.isDehydrated)
                )
                    try {
                        _l(t.containerInfo);
                    } catch (se) {
                        Be(e, e.return, se);
                    }
                jr && ((jr = !1), Km(e));
                break;
            case 4:
                ((a = an), (an = ss(e.stateNode.containerInfo)), jt(t, e), Mt(e), (an = a));
                break;
            case 12:
                (jt(t, e), Mt(e));
                break;
            case 31:
                (jt(t, e), Mt(e), a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Zo(e, a))));
                break;
            case 13:
                (jt(t, e),
                    Mt(e),
                    e.child.flags & 8192 && (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) && (Io = xt()),
                    a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Zo(e, a))));
                break;
            case 22:
                i = e.memoizedState !== null;
                var C = n !== null && n.memoizedState !== null,
                    _ = _n,
                    Y = lt;
                if (((_n = _ || i), (lt = Y || C), jt(t, e), (lt = Y), (_n = _), Mt(e), a & 8192))
                    e: for (
                        t = e.stateNode,
                            t._visibility = i ? t._visibility & -2 : t._visibility | 1,
                            i && (n === null || C || _n || lt || Ya(e)),
                            n = null,
                            t = e;
                        ;

                    ) {
                        if (t.tag === 5 || t.tag === 26) {
                            if (n === null) {
                                C = n = t;
                                try {
                                    if (((o = C.stateNode), i))
                                        ((f = o.style),
                                            typeof f.setProperty == 'function'
                                                ? f.setProperty('display', 'none', 'important')
                                                : (f.display = 'none'));
                                    else {
                                        v = C.stateNode;
                                        var I = C.memoizedProps.style,
                                            L = I != null && I.hasOwnProperty('display') ? I.display : null;
                                        v.style.display = L == null || typeof L == 'boolean' ? '' : ('' + L).trim();
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
                                    i ? Dh(V, !0) : Dh(C.stateNode, !1);
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
                a & 4 && ((a = e.updateQueue), a !== null && ((n = a.retryQueue), n !== null && ((a.retryQueue = null), Zo(e, n))));
                break;
            case 19:
                (jt(t, e), Mt(e), a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), Zo(e, a))));
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
                    if (Lm(a)) {
                        n = a;
                        break;
                    }
                    a = a.return;
                }
                if (n == null) throw Error(r(160));
                switch (n.tag) {
                    case 27:
                        var i = n.stateNode,
                            o = Ar(e);
                        Qo(e, o, i);
                        break;
                    case 5:
                        var f = n.stateNode;
                        n.flags & 32 && (ll(f, ''), (n.flags &= -33));
                        var v = Ar(e);
                        Qo(e, v, f);
                        break;
                    case 3:
                    case 4:
                        var C = n.stateNode.containerInfo,
                            _ = Ar(e);
                        Nr(e, _, C);
                        break;
                    default:
                        throw Error(r(161));
                }
            } catch (Y) {
                Be(e, e.return, Y);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function Km(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                (Km(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
            }
    }
    function Un(e, t) {
        if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) (Hm(e, t.alternate, t), (t = t.sibling));
    }
    function Ya(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    (la(4, t, t.return), Ya(t));
                    break;
                case 1:
                    pn(t, t.return);
                    var n = t.stateNode;
                    (typeof n.componentWillUnmount == 'function' && Dm(t, t.return, n), Ya(t));
                    break;
                case 27:
                    _i(t.stateNode);
                case 26:
                case 5:
                    (pn(t, t.return), Ya(t));
                    break;
                case 22:
                    t.memoizedState === null && Ya(t);
                    break;
                case 30:
                    Ya(t);
                    break;
                default:
                    Ya(t);
            }
            e = e.sibling;
        }
    }
    function Bn(e, t, n) {
        for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
            var a = t.alternate,
                i = e,
                o = t,
                f = o.flags;
            switch (o.tag) {
                case 0:
                case 11:
                case 15:
                    (Bn(i, o, n), Ti(4, o));
                    break;
                case 1:
                    if ((Bn(i, o, n), (a = o), (i = a.stateNode), typeof i.componentDidMount == 'function'))
                        try {
                            i.componentDidMount();
                        } catch (_) {
                            Be(a, a.return, _);
                        }
                    if (((a = o), (i = a.updateQueue), i !== null)) {
                        var v = a.stateNode;
                        try {
                            var C = i.shared.hiddenCallbacks;
                            if (C !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < C.length; i++) wd(C[i], v);
                        } catch (_) {
                            Be(a, a.return, _);
                        }
                    }
                    (n && f & 64 && zm(o), Ai(o, o.return));
                    break;
                case 27:
                    Um(o);
                case 26:
                case 5:
                    (Bn(i, o, n), n && a === null && f & 4 && _m(o), Ai(o, o.return));
                    break;
                case 12:
                    Bn(i, o, n);
                    break;
                case 31:
                    (Bn(i, o, n), n && f & 4 && Gm(i, o));
                    break;
                case 13:
                    (Bn(i, o, n), n && f & 4 && Ym(i, o));
                    break;
                case 22:
                    (o.memoizedState === null && Bn(i, o, n), Ai(o, o.return));
                    break;
                case 30:
                    break;
                default:
                    Bn(i, o, n);
            }
            t = t.sibling;
        }
    }
    function Mr(e, t) {
        var n = null;
        (e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
            (e = null),
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
            e !== n && (e != null && e.refCount++, n != null && di(n)));
    }
    function Rr(e, t) {
        ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && di(e)));
    }
    function ln(e, t, n, a) {
        if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Qm(e, t, n, a), (t = t.sibling));
    }
    function Qm(e, t, n, a) {
        var i = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                (ln(e, t, n, a), i & 2048 && Ti(9, t));
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
                        t !== e && (t.refCount++, e != null && di(e))));
                break;
            case 12:
                if (i & 2048) {
                    (ln(e, t, n, a), (e = t.stateNode));
                    try {
                        var o = t.memoizedProps,
                            f = o.id,
                            v = o.onPostCommit;
                        typeof v == 'function' && v(f, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
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
                ((o = t.stateNode),
                    (f = t.alternate),
                    t.memoizedState !== null
                        ? o._visibility & 2
                            ? ln(e, t, n, a)
                            : Ni(e, t)
                        : o._visibility & 2
                          ? ln(e, t, n, a)
                          : ((o._visibility |= 2), El(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || !1)),
                    i & 2048 && Mr(f, t));
                break;
            case 24:
                (ln(e, t, n, a), i & 2048 && Rr(t.alternate, t));
                break;
            default:
                ln(e, t, n, a);
        }
    }
    function El(e, t, n, a, i) {
        for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
            var o = e,
                f = t,
                v = n,
                C = a,
                _ = f.flags;
            switch (f.tag) {
                case 0:
                case 11:
                case 15:
                    (El(o, f, v, C, i), Ti(8, f));
                    break;
                case 23:
                    break;
                case 22:
                    var Y = f.stateNode;
                    (f.memoizedState !== null ? (Y._visibility & 2 ? El(o, f, v, C, i) : Ni(o, f)) : ((Y._visibility |= 2), El(o, f, v, C, i)),
                        i && _ & 2048 && Mr(f.alternate, f));
                    break;
                case 24:
                    (El(o, f, v, C, i), i && _ & 2048 && Rr(f.alternate, f));
                    break;
                default:
                    El(o, f, v, C, i);
            }
            t = t.sibling;
        }
    }
    function Ni(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var n = e,
                    a = t,
                    i = a.flags;
                switch (a.tag) {
                    case 22:
                        (Ni(n, a), i & 2048 && Mr(a.alternate, a));
                        break;
                    case 24:
                        (Ni(n, a), i & 2048 && Rr(a.alternate, a));
                        break;
                    default:
                        Ni(n, a);
                }
                t = t.sibling;
            }
    }
    var ji = 8192;
    function Tl(e, t, n) {
        if (e.subtreeFlags & ji) for (e = e.child; e !== null; ) (Zm(e, t, n), (e = e.sibling));
    }
    function Zm(e, t, n) {
        switch (e.tag) {
            case 26:
                (Tl(e, t, n), e.flags & ji && e.memoizedState !== null && eb(n, an, e.memoizedState, e.memoizedProps));
                break;
            case 5:
                Tl(e, t, n);
                break;
            case 3:
            case 4:
                var a = an;
                ((an = ss(e.stateNode.containerInfo)), Tl(e, t, n), (an = a));
                break;
            case 22:
                e.memoizedState === null &&
                    ((a = e.alternate), a !== null && a.memoizedState !== null ? ((a = ji), (ji = 16777216), Tl(e, t, n), (ji = a)) : Tl(e, t, n));
                break;
            default:
                Tl(e, t, n);
        }
    }
    function Jm(e) {
        var t = e.alternate;
        if (t !== null && ((e = t.child), e !== null)) {
            t.child = null;
            do ((t = e.sibling), (e.sibling = null), (e = t));
            while (e !== null);
        }
    }
    function Mi(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    ((dt = a), Wm(a, e));
                }
            Jm(e);
        }
        if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Im(e), (e = e.sibling));
    }
    function Im(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                (Mi(e), e.flags & 2048 && la(9, e, e.return));
                break;
            case 3:
                Mi(e);
                break;
            case 12:
                Mi(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? ((t._visibility &= -3), Jo(e)) : Mi(e);
                break;
            default:
                Mi(e);
        }
    }
    function Jo(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    ((dt = a), Wm(a, e));
                }
            Jm(e);
        }
        for (e = e.child; e !== null; ) {
            switch (((t = e), t.tag)) {
                case 0:
                case 11:
                case 15:
                    (la(8, t, t.return), Jo(t));
                    break;
                case 22:
                    ((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), Jo(t)));
                    break;
                default:
                    Jo(t);
            }
            e = e.sibling;
        }
    }
    function Wm(e, t) {
        for (; dt !== null; ) {
            var n = dt;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    la(8, n, t);
                    break;
                case 23:
                case 22:
                    if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                        var a = n.memoizedState.cachePool.pool;
                        a != null && a.refCount++;
                    }
                    break;
                case 24:
                    di(n.memoizedState.cache);
            }
            if (((a = n.child), a !== null)) ((a.return = n), (dt = a));
            else
                e: for (n = e; dt !== null; ) {
                    a = dt;
                    var i = a.sibling,
                        o = a.return;
                    if ((Vm(a), a === n)) {
                        dt = null;
                        break e;
                    }
                    if (i !== null) {
                        ((i.return = o), (dt = i));
                        break e;
                    }
                    dt = o;
                }
        }
    }
    var p0 = {
            getCacheForType: function (e) {
                var t = pt(tt),
                    n = t.data.get(e);
                return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
            },
            cacheSignal: function () {
                return pt(tt).controller.signal;
            },
        },
        g0 = typeof WeakMap == 'function' ? WeakMap : Map,
        _e = 0,
        Ge = null,
        Ne = null,
        Re = 0,
        Ue = 0,
        Ht = null,
        ia = !1,
        Al = !1,
        kr = !1,
        Hn = 0,
        Ie = 0,
        oa = 0,
        Xa = 0,
        Or = 0,
        Vt = 0,
        Nl = 0,
        Ri = null,
        Rt = null,
        zr = !1,
        Io = 0,
        $m = 0,
        Wo = 1 / 0,
        $o = null,
        sa = null,
        ct = 0,
        ca = null,
        jl = null,
        Vn = 0,
        Dr = 0,
        _r = null,
        Fm = null,
        ki = 0,
        Lr = null;
    function qt() {
        return (_e & 2) !== 0 && Re !== 0 ? Re & -Re : A.T !== null ? Gr() : hf();
    }
    function Pm() {
        if (Vt === 0)
            if ((Re & 536870912) === 0 || Oe) {
                var e = lo;
                ((lo <<= 1), (lo & 3932160) === 0 && (lo = 262144), (Vt = e));
            } else Vt = 536870912;
        return ((e = Ut.current), e !== null && (e.flags |= 32), Vt);
    }
    function kt(e, t, n) {
        (((e === Ge && (Ue === 2 || Ue === 9)) || e.cancelPendingCommit !== null) && (Ml(e, 0), ra(e, Re, Vt, !1)),
            Fl(e, n),
            ((_e & 2) === 0 || e !== Ge) && (e === Ge && ((_e & 2) === 0 && (Xa |= n), Ie === 4 && ra(e, Re, Vt, !1)), gn(e)));
    }
    function eh(e, t, n) {
        if ((_e & 6) !== 0) throw Error(r(327));
        var a = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || $l(e, t),
            i = a ? b0(e, t) : Br(e, t, !0),
            o = a;
        do {
            if (i === 0) {
                Al && !a && ra(e, t, 0, !1);
                break;
            } else {
                if (((n = e.current.alternate), o && !v0(n))) {
                    ((i = Br(e, t, !1)), (o = !1));
                    continue;
                }
                if (i === 2) {
                    if (((o = t), e.errorRecoveryDisabledLanes & o)) var f = 0;
                    else ((f = e.pendingLanes & -536870913), (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0));
                    if (f !== 0) {
                        t = f;
                        e: {
                            var v = e;
                            i = Ri;
                            var C = v.current.memoizedState.isDehydrated;
                            if ((C && (Ml(v, f).flags |= 256), (f = Br(v, f, !1)), f !== 2)) {
                                if (kr && !C) {
                                    ((v.errorRecoveryDisabledLanes |= o), (Xa |= o), (i = 4));
                                    break e;
                                }
                                ((o = Rt), (Rt = i), o !== null && (Rt === null ? (Rt = o) : Rt.push.apply(Rt, o)));
                            }
                            i = f;
                        }
                        if (((o = !1), i !== 2)) continue;
                    }
                }
                if (i === 1) {
                    (Ml(e, 0), ra(e, t, 0, !0));
                    break;
                }
                e: {
                    switch (((a = e), (o = i), o)) {
                        case 0:
                        case 1:
                            throw Error(r(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            ra(a, t, Vt, !ia);
                            break e;
                        case 2:
                            Rt = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(r(329));
                    }
                    if ((t & 62914560) === t && ((i = Io + 300 - xt()), 10 < i)) {
                        if ((ra(a, t, Vt, !ia), oo(a, 0, !0) !== 0)) break e;
                        ((Vn = t), (a.timeoutHandle = kh(th.bind(null, a, n, Rt, $o, zr, t, Vt, Xa, Nl, ia, o, 'Throttled', -0, 0), i)));
                        break e;
                    }
                    th(a, n, Rt, $o, zr, t, Vt, Xa, Nl, ia, o, null, -0, 0);
                }
            }
            break;
        } while (!0);
        gn(e);
    }
    function th(e, t, n, a, i, o, f, v, C, _, Y, I, L, V) {
        if (((e.timeoutHandle = -1), (I = t.subtreeFlags), I & 8192 || (I & 16785408) === 16785408)) {
            ((I = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Tn,
            }),
                Zm(t, o, I));
            var se = (o & 62914560) === o ? Io - xt() : (o & 4194048) === o ? $m - xt() : 0;
            if (((se = tb(I, se)), se !== null)) {
                ((Vn = o), (e.cancelPendingCommit = se(rh.bind(null, e, t, o, n, a, i, f, v, C, Y, I, null, L, V))), ra(e, o, f, !_));
                return;
            }
        }
        rh(e, t, o, n, a, i, f, v, C);
    }
    function v0(e) {
        for (var t = e; ; ) {
            var n = t.tag;
            if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null)))
                for (var a = 0; a < n.length; a++) {
                    var i = n[a],
                        o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!_t(o(), i)) return !1;
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
        ((t &= ~Or), (t &= ~Xa), (e.suspendedLanes |= t), (e.pingedLanes &= ~t), a && (e.warmLanes |= t), (a = e.expirationTimes));
        for (var i = t; 0 < i; ) {
            var o = 31 - wt(i),
                f = 1 << o;
            ((a[o] = -1), (i &= ~f));
        }
        n !== 0 && ff(e, n, t);
    }
    function Fo() {
        return (_e & 6) === 0 ? (Oi(0), !1) : !0;
    }
    function Ur() {
        if (Ne !== null) {
            if (Ue === 0) var e = Ne.return;
            else ((e = Ne), (Mn = _a = null), Pc(e), (bl = null), (hi = 0), (e = Ne));
            for (; e !== null; ) (Om(e.alternate, e), (e = e.return));
            Ne = null;
        }
    }
    function Ml(e, t) {
        var n = e.timeoutHandle;
        (n !== -1 && ((e.timeoutHandle = -1), U0(n)),
            (n = e.cancelPendingCommit),
            n !== null && ((e.cancelPendingCommit = null), n()),
            (Vn = 0),
            Ur(),
            (Ge = e),
            (Ne = n = Nn(e.current, null)),
            (Re = t),
            (Ue = 0),
            (Ht = null),
            (ia = !1),
            (Al = $l(e, t)),
            (kr = !1),
            (Nl = Vt = Or = Xa = oa = Ie = 0),
            (Rt = Ri = null),
            (zr = !1),
            (t & 8) !== 0 && (t |= t & 32));
        var a = e.entangledLanes;
        if (a !== 0)
            for (e = e.entanglements, a &= t; 0 < a; ) {
                var i = 31 - wt(a),
                    o = 1 << i;
                ((t |= e[i]), (a &= ~o));
            }
        return ((Hn = t), bo(), n);
    }
    function nh(e, t) {
        ((Ce = null),
            (A.H = wi),
            t === yl || t === No
                ? ((t = yd()), (Ue = 3))
                : t === qc
                  ? ((t = yd()), (Ue = 4))
                  : (Ue = t === pr ? 8 : t !== null && typeof t == 'object' && typeof t.then == 'function' ? 6 : 1),
            (Ht = t),
            Ne === null && ((Ie = 1), qo(e, Zt(t, e.current))));
    }
    function ah() {
        var e = Ut.current;
        return e === null ? !0 : (Re & 4194048) === Re ? $t === null : (Re & 62914560) === Re || (Re & 536870912) !== 0 ? e === $t : !1;
    }
    function lh() {
        var e = A.H;
        return ((A.H = wi), e === null ? wi : e);
    }
    function ih() {
        var e = A.A;
        return ((A.A = p0), e);
    }
    function Po() {
        ((Ie = 4),
            ia || ((Re & 4194048) !== Re && Ut.current !== null) || (Al = !0),
            ((oa & 134217727) === 0 && (Xa & 134217727) === 0) || Ge === null || ra(Ge, Re, Vt, !1));
    }
    function Br(e, t, n) {
        var a = _e;
        _e |= 2;
        var i = lh(),
            o = ih();
        ((Ge !== e || Re !== t) && (($o = null), Ml(e, t)), (t = !1));
        var f = Ie;
        e: do
            try {
                if (Ue !== 0 && Ne !== null) {
                    var v = Ne,
                        C = Ht;
                    switch (Ue) {
                        case 8:
                            (Ur(), (f = 6));
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Ut.current === null && (t = !0);
                            var _ = Ue;
                            if (((Ue = 0), (Ht = null), Rl(e, v, C, _), n && Al)) {
                                f = 0;
                                break e;
                            }
                            break;
                        default:
                            ((_ = Ue), (Ue = 0), (Ht = null), Rl(e, v, C, _));
                    }
                }
                (y0(), (f = Ie));
                break;
            } catch (Y) {
                nh(e, Y);
            }
        while (!0);
        return (t && e.shellSuspendCounter++, (Mn = _a = null), (_e = a), (A.H = i), (A.A = o), Ne === null && ((Ge = null), (Re = 0), bo()), f);
    }
    function y0() {
        for (; Ne !== null; ) oh(Ne);
    }
    function b0(e, t) {
        var n = _e;
        _e |= 2;
        var a = lh(),
            i = ih();
        Ge !== e || Re !== t ? (($o = null), (Wo = xt() + 500), Ml(e, t)) : (Al = $l(e, t));
        e: do
            try {
                if (Ue !== 0 && Ne !== null) {
                    t = Ne;
                    var o = Ht;
                    t: switch (Ue) {
                        case 1:
                            ((Ue = 0), (Ht = null), Rl(e, t, o, 1));
                            break;
                        case 2:
                        case 9:
                            if (gd(o)) {
                                ((Ue = 0), (Ht = null), sh(t));
                                break;
                            }
                            ((t = function () {
                                ((Ue !== 2 && Ue !== 9) || Ge !== e || (Ue = 7), gn(e));
                            }),
                                o.then(t, t));
                            break e;
                        case 3:
                            Ue = 7;
                            break e;
                        case 4:
                            Ue = 5;
                            break e;
                        case 7:
                            gd(o) ? ((Ue = 0), (Ht = null), sh(t)) : ((Ue = 0), (Ht = null), Rl(e, t, o, 7));
                            break;
                        case 5:
                            var f = null;
                            switch (Ne.tag) {
                                case 26:
                                    f = Ne.memoizedState;
                                case 5:
                                case 27:
                                    var v = Ne;
                                    if (f ? Qh(f) : v.stateNode.complete) {
                                        ((Ue = 0), (Ht = null));
                                        var C = v.sibling;
                                        if (C !== null) Ne = C;
                                        else {
                                            var _ = v.return;
                                            _ !== null ? ((Ne = _), es(_)) : (Ne = null);
                                        }
                                        break t;
                                    }
                            }
                            ((Ue = 0), (Ht = null), Rl(e, t, o, 5));
                            break;
                        case 6:
                            ((Ue = 0), (Ht = null), Rl(e, t, o, 6));
                            break;
                        case 8:
                            (Ur(), (Ie = 6));
                            break e;
                        default:
                            throw Error(r(462));
                    }
                }
                S0();
                break;
            } catch (Y) {
                nh(e, Y);
            }
        while (!0);
        return ((Mn = _a = null), (A.H = a), (A.A = i), (_e = n), Ne !== null ? 0 : ((Ge = null), (Re = 0), bo(), Ie));
    }
    function S0() {
        for (; Ne !== null && !Js(); ) oh(Ne);
    }
    function oh(e) {
        var t = Rm(e.alternate, e, Hn);
        ((e.memoizedProps = e.pendingProps), t === null ? es(e) : (Ne = t));
    }
    function sh(e) {
        var t = e,
            n = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = Em(n, t, t.pendingProps, t.type, void 0, Re);
                break;
            case 11:
                t = Em(n, t, t.pendingProps, t.type.render, t.ref, Re);
                break;
            case 5:
                Pc(t);
            default:
                (Om(n, t), (t = Ne = id(t, Hn)), (t = Rm(n, t, Hn)));
        }
        ((e.memoizedProps = e.pendingProps), t === null ? es(e) : (Ne = t));
    }
    function Rl(e, t, n, a) {
        ((Mn = _a = null), Pc(t), (bl = null), (hi = 0));
        var i = t.return;
        try {
            if (c0(e, i, t, n, Re)) {
                ((Ie = 1), qo(e, Zt(n, e.current)), (Ne = null));
                return;
            }
        } catch (o) {
            if (i !== null) throw ((Ne = i), o);
            ((Ie = 1), qo(e, Zt(n, e.current)), (Ne = null));
            return;
        }
        t.flags & 32768
            ? (Oe || a === 1
                  ? (e = !0)
                  : Al || (Re & 536870912) !== 0
                    ? (e = !1)
                    : ((ia = e = !0),
                      (a === 2 || a === 9 || a === 3 || a === 6) && ((a = Ut.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
              ch(t, e))
            : es(t);
    }
    function es(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                ch(t, ia);
                return;
            }
            e = t.return;
            var n = f0(t.alternate, t, Hn);
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
        Ie === 0 && (Ie = 5);
    }
    function ch(e, t) {
        do {
            var n = d0(e.alternate, e);
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
        ((Ie = 6), (Ne = null));
    }
    function rh(e, t, n, a, i, o, f, v, C) {
        e.cancelPendingCommit = null;
        do ts();
        while (ct !== 0);
        if ((_e & 6) !== 0) throw Error(r(327));
        if (t !== null) {
            if (t === e.current) throw Error(r(177));
            if (
                ((o = t.lanes | t.childLanes),
                (o |= Ac),
                Pv(e, n, o, f, v, C),
                e === Ge && ((Ne = Ge = null), (Re = 0)),
                (jl = t),
                (ca = e),
                (Vn = n),
                (Dr = o),
                (_r = i),
                (Fm = a),
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
                    ? ((e.callbackNode = null),
                      (e.callbackPriority = 0),
                      E0(Aa, function () {
                          return (hh(), null);
                      }))
                    : ((e.callbackNode = null), (e.callbackPriority = 0)),
                (a = (t.flags & 13878) !== 0),
                (t.subtreeFlags & 13878) !== 0 || a)
            ) {
                ((a = A.T), (A.T = null), (i = G.p), (G.p = 2), (f = _e), (_e |= 4));
                try {
                    m0(e, t, n);
                } finally {
                    ((_e = f), (G.p = i), (A.T = a));
                }
            }
            ((ct = 1), uh(), fh(), dh());
        }
    }
    function uh() {
        if (ct === 1) {
            ct = 0;
            var e = ca,
                t = jl,
                n = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || n) {
                ((n = A.T), (A.T = null));
                var a = G.p;
                G.p = 2;
                var i = _e;
                _e |= 4;
                try {
                    Xm(t, e);
                    var o = Wr,
                        f = Wf(e.containerInfo),
                        v = o.focusedElem,
                        C = o.selectionRange;
                    if (f !== v && v && v.ownerDocument && If(v.ownerDocument.documentElement, v)) {
                        if (C !== null && xc(v)) {
                            var _ = C.start,
                                Y = C.end;
                            if ((Y === void 0 && (Y = _), 'selectionStart' in v))
                                ((v.selectionStart = _), (v.selectionEnd = Math.min(Y, v.value.length)));
                            else {
                                var I = v.ownerDocument || document,
                                    L = (I && I.defaultView) || window;
                                if (L.getSelection) {
                                    var V = L.getSelection(),
                                        se = v.textContent.length,
                                        ve = Math.min(C.start, se),
                                        qe = C.end === void 0 ? ve : Math.min(C.end, se);
                                    !V.extend && ve > qe && ((f = qe), (qe = ve), (ve = f));
                                    var k = Jf(v, ve),
                                        N = Jf(v, qe);
                                    if (
                                        k &&
                                        N &&
                                        (V.rangeCount !== 1 ||
                                            V.anchorNode !== k.node ||
                                            V.anchorOffset !== k.offset ||
                                            V.focusNode !== N.node ||
                                            V.focusOffset !== N.offset)
                                    ) {
                                        var D = I.createRange();
                                        (D.setStart(k.node, k.offset),
                                            V.removeAllRanges(),
                                            ve > qe ? (V.addRange(D), V.extend(N.node, N.offset)) : (D.setEnd(N.node, N.offset), V.addRange(D)));
                                    }
                                }
                            }
                        }
                        for (I = [], V = v; (V = V.parentNode); ) V.nodeType === 1 && I.push({ element: V, left: V.scrollLeft, top: V.scrollTop });
                        for (typeof v.focus == 'function' && v.focus(), v = 0; v < I.length; v++) {
                            var Q = I[v];
                            ((Q.element.scrollLeft = Q.left), (Q.element.scrollTop = Q.top));
                        }
                    }
                    ((ms = !!Ir), (Wr = Ir = null));
                } finally {
                    ((_e = i), (G.p = a), (A.T = n));
                }
            }
            ((e.current = t), (ct = 2));
        }
    }
    function fh() {
        if (ct === 2) {
            ct = 0;
            var e = ca,
                t = jl,
                n = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || n) {
                ((n = A.T), (A.T = null));
                var a = G.p;
                G.p = 2;
                var i = _e;
                _e |= 4;
                try {
                    Hm(e, t.alternate, t);
                } finally {
                    ((_e = i), (G.p = a), (A.T = n));
                }
            }
            ct = 3;
        }
    }
    function dh() {
        if (ct === 4 || ct === 3) {
            ((ct = 0), Is());
            var e = ca,
                t = jl,
                n = Vn,
                a = Fm;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (ct = 5) : ((ct = 0), (jl = ca = null), mh(e, e.pendingLanes));
            var i = e.pendingLanes;
            if ((i === 0 && (sa = null), nc(n), (t = t.stateNode), Ke && typeof Ke.onCommitFiberRoot == 'function'))
                try {
                    Ke.onCommitFiberRoot(oe, t, void 0, (t.current.flags & 128) === 128);
                } catch {}
            if (a !== null) {
                ((t = A.T), (i = G.p), (G.p = 2), (A.T = null));
                try {
                    for (var o = e.onRecoverableError, f = 0; f < a.length; f++) {
                        var v = a[f];
                        o(v.value, { componentStack: v.stack });
                    }
                } finally {
                    ((A.T = t), (G.p = i));
                }
            }
            ((Vn & 3) !== 0 && ts(),
                gn(e),
                (i = e.pendingLanes),
                (n & 261930) !== 0 && (i & 42) !== 0 ? (e === Lr ? ki++ : ((ki = 0), (Lr = e))) : (ki = 0),
                Oi(0));
        }
    }
    function mh(e, t) {
        (e.pooledCacheLanes &= t) === 0 && ((t = e.pooledCache), t != null && ((e.pooledCache = null), di(t)));
    }
    function ts() {
        return (uh(), fh(), dh(), hh());
    }
    function hh() {
        if (ct !== 5) return !1;
        var e = ca,
            t = Dr;
        Dr = 0;
        var n = nc(Vn),
            a = A.T,
            i = G.p;
        try {
            ((G.p = 32 > n ? 32 : n), (A.T = null), (n = _r), (_r = null));
            var o = ca,
                f = Vn;
            if (((ct = 0), (jl = ca = null), (Vn = 0), (_e & 6) !== 0)) throw Error(r(331));
            var v = _e;
            if (((_e |= 4), Im(o.current), Qm(o, o.current, f, n), (_e = v), Oi(0, !1), Ke && typeof Ke.onPostCommitFiberRoot == 'function'))
                try {
                    Ke.onPostCommitFiberRoot(oe, o);
                } catch {}
            return !0;
        } finally {
            ((G.p = i), (A.T = a), mh(e, t));
        }
    }
    function ph(e, t, n) {
        ((t = Zt(n, t)), (t = hr(e.stateNode, t, 2)), (e = ta(e, t, 2)), e !== null && (Fl(e, 2), gn(e)));
    }
    function Be(e, t, n) {
        if (e.tag === 3) ph(e, e, n);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    ph(t, e, n);
                    break;
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (
                        typeof t.type.getDerivedStateFromError == 'function' ||
                        (typeof a.componentDidCatch == 'function' && (sa === null || !sa.has(a)))
                    ) {
                        ((e = Zt(n, e)), (n = gm(2)), (a = ta(t, n, 2)), a !== null && (vm(n, a, t, e), Fl(a, 2), gn(a)));
                        break;
                    }
                }
                t = t.return;
            }
    }
    function Hr(e, t, n) {
        var a = e.pingCache;
        if (a === null) {
            a = e.pingCache = new g0();
            var i = new Set();
            a.set(t, i);
        } else ((i = a.get(t)), i === void 0 && ((i = new Set()), a.set(t, i)));
        i.has(n) || ((kr = !0), i.add(n), (e = x0.bind(null, e, t, n)), t.then(e, e));
    }
    function x0(e, t, n) {
        var a = e.pingCache;
        (a !== null && a.delete(t),
            (e.pingedLanes |= e.suspendedLanes & n),
            (e.warmLanes &= ~n),
            Ge === e &&
                (Re & n) === n &&
                (Ie === 4 || (Ie === 3 && (Re & 62914560) === Re && 300 > xt() - Io) ? (_e & 2) === 0 && Ml(e, 0) : (Or |= n), Nl === Re && (Nl = 0)),
            gn(e));
    }
    function gh(e, t) {
        (t === 0 && (t = uf()), (e = Oa(e, t)), e !== null && (Fl(e, t), gn(e)));
    }
    function w0(e) {
        var t = e.memoizedState,
            n = 0;
        (t !== null && (n = t.retryLane), gh(e, n));
    }
    function C0(e, t) {
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
                throw Error(r(314));
        }
        (a !== null && a.delete(t), gh(e, n));
    }
    function E0(e, t) {
        return Qn(e, t);
    }
    var ns = null,
        kl = null,
        Vr = !1,
        as = !1,
        qr = !1,
        ua = 0;
    function gn(e) {
        (e !== kl && e.next === null && (kl === null ? (ns = kl = e) : (kl = kl.next = e)), (as = !0), Vr || ((Vr = !0), A0()));
    }
    function Oi(e, t) {
        if (!qr && as) {
            qr = !0;
            do
                for (var n = !1, a = ns; a !== null; ) {
                    if (e !== 0) {
                        var i = a.pendingLanes;
                        if (i === 0) var o = 0;
                        else {
                            var f = a.suspendedLanes,
                                v = a.pingedLanes;
                            ((o = (1 << (31 - wt(42 | e) + 1)) - 1), (o &= i & ~(f & ~v)), (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0));
                        }
                        o !== 0 && ((n = !0), Sh(a, o));
                    } else
                        ((o = Re),
                            (o = oo(a, a === Ge ? o : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1)),
                            (o & 3) === 0 || $l(a, o) || ((n = !0), Sh(a, o)));
                    a = a.next;
                }
            while (n);
            qr = !1;
        }
    }
    function T0() {
        vh();
    }
    function vh() {
        as = Vr = !1;
        var e = 0;
        ua !== 0 && L0() && (e = ua);
        for (var t = xt(), n = null, a = ns; a !== null; ) {
            var i = a.next,
                o = yh(a, t);
            (o === 0
                ? ((a.next = null), n === null ? (ns = i) : (n.next = i), i === null && (kl = n))
                : ((n = a), (e !== 0 || (o & 3) !== 0) && (as = !0)),
                (a = i));
        }
        ((ct !== 0 && ct !== 5) || Oi(e), ua !== 0 && (ua = 0));
    }
    function yh(e, t) {
        for (var n = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes & -62914561; 0 < o; ) {
            var f = 31 - wt(o),
                v = 1 << f,
                C = i[f];
            (C === -1 ? ((v & n) === 0 || (v & a) !== 0) && (i[f] = Fv(v, t)) : C <= t && (e.expiredLanes |= v), (o &= ~v));
        }
        if (
            ((t = Ge),
            (n = Re),
            (n = oo(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
            (a = e.callbackNode),
            n === 0 || (e === t && (Ue === 2 || Ue === 9)) || e.cancelPendingCommit !== null)
        )
            return (a !== null && a !== null && Ta(a), (e.callbackNode = null), (e.callbackPriority = 0));
        if ((n & 3) === 0 || $l(e, n)) {
            if (((t = n & -n), t === e.callbackPriority)) return t;
            switch ((a !== null && Ta(a), nc(n))) {
                case 2:
                case 8:
                    n = to;
                    break;
                case 32:
                    n = Aa;
                    break;
                case 268435456:
                    n = Il;
                    break;
                default:
                    n = Aa;
            }
            return ((a = bh.bind(null, e)), (n = Qn(n, a)), (e.callbackPriority = t), (e.callbackNode = n), t);
        }
        return (a !== null && a !== null && Ta(a), (e.callbackPriority = 2), (e.callbackNode = null), 2);
    }
    function bh(e, t) {
        if (ct !== 0 && ct !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
        var n = e.callbackNode;
        if (ts() && e.callbackNode !== n) return null;
        var a = Re;
        return (
            (a = oo(e, e === Ge ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
            a === 0 ? null : (eh(e, a, t), yh(e, xt()), e.callbackNode != null && e.callbackNode === n ? bh.bind(null, e) : null)
        );
    }
    function Sh(e, t) {
        if (ts()) return null;
        eh(e, t, !0);
    }
    function A0() {
        B0(function () {
            (_e & 6) !== 0 ? Qn(eo, T0) : vh();
        });
    }
    function Gr() {
        if (ua === 0) {
            var e = gl;
            (e === 0 && ((e = ao), (ao <<= 1), (ao & 261888) === 0 && (ao = 256)), (ua = e));
        }
        return ua;
    }
    function xh(e) {
        return e == null || typeof e == 'symbol' || typeof e == 'boolean' ? null : typeof e == 'function' ? e : uo('' + e);
    }
    function wh(e, t) {
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
    function N0(e, t, n, a, i) {
        if (t === 'submit' && n && n.stateNode === i) {
            var o = xh((i[Tt] || null).action),
                f = a.submitter;
            f && ((t = (t = f[Tt] || null) ? xh(t.formAction) : f.getAttribute('formAction')), t !== null && ((o = t), (f = null)));
            var v = new po('action', 'action', null, a, i);
            e.push({
                event: v,
                listeners: [
                    {
                        instance: null,
                        listener: function () {
                            if (a.defaultPrevented) {
                                if (ua !== 0) {
                                    var C = f ? wh(i, f) : new FormData(i);
                                    cr(n, { pending: !0, data: C, method: i.method, action: o }, null, C);
                                }
                            } else
                                typeof o == 'function' &&
                                    (v.preventDefault(),
                                    (C = f ? wh(i, f) : new FormData(i)),
                                    cr(n, { pending: !0, data: C, method: i.method, action: o }, o, C));
                        },
                        currentTarget: i,
                    },
                ],
            });
        }
    }
    for (var Yr = 0; Yr < Tc.length; Yr++) {
        var Xr = Tc[Yr],
            j0 = Xr.toLowerCase(),
            M0 = Xr[0].toUpperCase() + Xr.slice(1);
        nn(j0, 'on' + M0);
    }
    (nn(Pf, 'onAnimationEnd'),
        nn(ed, 'onAnimationIteration'),
        nn(td, 'onAnimationStart'),
        nn('dblclick', 'onDoubleClick'),
        nn('focusin', 'onFocus'),
        nn('focusout', 'onBlur'),
        nn(Ky, 'onTransitionRun'),
        nn(Qy, 'onTransitionStart'),
        nn(Zy, 'onTransitionCancel'),
        nn(nd, 'onTransitionEnd'),
        nl('onMouseEnter', ['mouseout', 'mouseover']),
        nl('onMouseLeave', ['mouseout', 'mouseover']),
        nl('onPointerEnter', ['pointerout', 'pointerover']),
        nl('onPointerLeave', ['pointerout', 'pointerover']),
        ja('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
        ja('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
        ja('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
        ja('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
        ja('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
        ja('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
    var zi =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
                ' '
            ),
        R0 = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(zi));
    function Ch(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var a = e[n],
                i = a.event;
            a = a.listeners;
            e: {
                var o = void 0;
                if (t)
                    for (var f = a.length - 1; 0 <= f; f--) {
                        var v = a[f],
                            C = v.instance,
                            _ = v.currentTarget;
                        if (((v = v.listener), C !== o && i.isPropagationStopped())) break e;
                        ((o = v), (i.currentTarget = _));
                        try {
                            o(i);
                        } catch (Y) {
                            yo(Y);
                        }
                        ((i.currentTarget = null), (o = C));
                    }
                else
                    for (f = 0; f < a.length; f++) {
                        if (((v = a[f]), (C = v.instance), (_ = v.currentTarget), (v = v.listener), C !== o && i.isPropagationStopped())) break e;
                        ((o = v), (i.currentTarget = _));
                        try {
                            o(i);
                        } catch (Y) {
                            yo(Y);
                        }
                        ((i.currentTarget = null), (o = C));
                    }
            }
        }
    }
    function je(e, t) {
        var n = t[ac];
        n === void 0 && (n = t[ac] = new Set());
        var a = e + '__bubble';
        n.has(a) || (Eh(t, e, 2, !1), n.add(a));
    }
    function Kr(e, t, n) {
        var a = 0;
        (t && (a |= 4), Eh(n, e, a, t));
    }
    var ls = '_reactListening' + Math.random().toString(36).slice(2);
    function Qr(e) {
        if (!e[ls]) {
            ((e[ls] = !0),
                vf.forEach(function (n) {
                    n !== 'selectionchange' && (R0.has(n) || Kr(n, !1, e), Kr(n, !0, e));
                }));
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[ls] || ((t[ls] = !0), Kr('selectionchange', !1, t));
        }
    }
    function Eh(e, t, n, a) {
        switch (Ph(t)) {
            case 2:
                var i = lb;
                break;
            case 8:
                i = ib;
                break;
            default:
                i = su;
        }
        ((n = i.bind(null, t, n, e)),
            (i = void 0),
            !dc || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
            a
                ? i !== void 0
                    ? e.addEventListener(t, n, { capture: !0, passive: i })
                    : e.addEventListener(t, n, !0)
                : i !== void 0
                  ? e.addEventListener(t, n, { passive: i })
                  : e.addEventListener(t, n, !1));
    }
    function Zr(e, t, n, a, i) {
        var o = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            e: for (;;) {
                if (a === null) return;
                var f = a.tag;
                if (f === 3 || f === 4) {
                    var v = a.stateNode.containerInfo;
                    if (v === i) break;
                    if (f === 4)
                        for (f = a.return; f !== null; ) {
                            var C = f.tag;
                            if ((C === 3 || C === 4) && f.stateNode.containerInfo === i) return;
                            f = f.return;
                        }
                    for (; v !== null; ) {
                        if (((f = Pa(v)), f === null)) return;
                        if (((C = f.tag), C === 5 || C === 6 || C === 26 || C === 27)) {
                            a = o = f;
                            continue e;
                        }
                        v = v.parentNode;
                    }
                }
                a = a.return;
            }
        Mf(function () {
            var _ = o,
                Y = uc(n),
                I = [];
            e: {
                var L = ad.get(e);
                if (L !== void 0) {
                    var V = po,
                        se = e;
                    switch (e) {
                        case 'keypress':
                            if (mo(n) === 0) break e;
                        case 'keydown':
                        case 'keyup':
                            V = Cy;
                            break;
                        case 'focusin':
                            ((se = 'focus'), (V = gc));
                            break;
                        case 'focusout':
                            ((se = 'blur'), (V = gc));
                            break;
                        case 'beforeblur':
                        case 'afterblur':
                            V = gc;
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
                            V = Of;
                            break;
                        case 'drag':
                        case 'dragend':
                        case 'dragenter':
                        case 'dragexit':
                        case 'dragleave':
                        case 'dragover':
                        case 'dragstart':
                        case 'drop':
                            V = fy;
                            break;
                        case 'touchcancel':
                        case 'touchend':
                        case 'touchmove':
                        case 'touchstart':
                            V = Ay;
                            break;
                        case Pf:
                        case ed:
                        case td:
                            V = hy;
                            break;
                        case nd:
                            V = jy;
                            break;
                        case 'scroll':
                        case 'scrollend':
                            V = ry;
                            break;
                        case 'wheel':
                            V = Ry;
                            break;
                        case 'copy':
                        case 'cut':
                        case 'paste':
                            V = gy;
                            break;
                        case 'gotpointercapture':
                        case 'lostpointercapture':
                        case 'pointercancel':
                        case 'pointerdown':
                        case 'pointermove':
                        case 'pointerout':
                        case 'pointerover':
                        case 'pointerup':
                            V = Df;
                            break;
                        case 'toggle':
                        case 'beforetoggle':
                            V = Oy;
                    }
                    var ve = (t & 4) !== 0,
                        qe = !ve && (e === 'scroll' || e === 'scrollend'),
                        k = ve ? (L !== null ? L + 'Capture' : null) : L;
                    ve = [];
                    for (var N = _, D; N !== null; ) {
                        var Q = N;
                        if (
                            ((D = Q.stateNode),
                            (Q = Q.tag),
                            (Q !== 5 && Q !== 26 && Q !== 27) || D === null || k === null || ((Q = ti(N, k)), Q != null && ve.push(Di(N, Q, D))),
                            qe)
                        )
                            break;
                        N = N.return;
                    }
                    0 < ve.length && ((L = new V(L, se, null, n, Y)), I.push({ event: L, listeners: ve }));
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (
                        ((L = e === 'mouseover' || e === 'pointerover'),
                        (V = e === 'mouseout' || e === 'pointerout'),
                        L && n !== rc && (se = n.relatedTarget || n.fromElement) && (Pa(se) || se[Fa]))
                    )
                        break e;
                    if (
                        (V || L) &&
                        ((L = Y.window === Y ? Y : (L = Y.ownerDocument) ? L.defaultView || L.parentWindow : window),
                        V
                            ? ((se = n.relatedTarget || n.toElement),
                              (V = _),
                              (se = se ? Pa(se) : null),
                              se !== null && ((qe = m(se)), (ve = se.tag), se !== qe || (ve !== 5 && ve !== 27 && ve !== 6)) && (se = null))
                            : ((V = null), (se = _)),
                        V !== se)
                    ) {
                        if (
                            ((ve = Of),
                            (Q = 'onMouseLeave'),
                            (k = 'onMouseEnter'),
                            (N = 'mouse'),
                            (e === 'pointerout' || e === 'pointerover') &&
                                ((ve = Df), (Q = 'onPointerLeave'), (k = 'onPointerEnter'), (N = 'pointer')),
                            (qe = V == null ? L : ei(V)),
                            (D = se == null ? L : ei(se)),
                            (L = new ve(Q, N + 'leave', V, n, Y)),
                            (L.target = qe),
                            (L.relatedTarget = D),
                            (Q = null),
                            Pa(Y) === _ && ((ve = new ve(k, N + 'enter', se, n, Y)), (ve.target = D), (ve.relatedTarget = qe), (Q = ve)),
                            (qe = Q),
                            V && se)
                        )
                            t: {
                                for (ve = k0, k = V, N = se, D = 0, Q = k; Q; Q = ve(Q)) D++;
                                Q = 0;
                                for (var pe = N; pe; pe = ve(pe)) Q++;
                                for (; 0 < D - Q; ) ((k = ve(k)), D--);
                                for (; 0 < Q - D; ) ((N = ve(N)), Q--);
                                for (; D--; ) {
                                    if (k === N || (N !== null && k === N.alternate)) {
                                        ve = k;
                                        break t;
                                    }
                                    ((k = ve(k)), (N = ve(N)));
                                }
                                ve = null;
                            }
                        else ve = null;
                        (V !== null && Th(I, L, V, ve, !1), se !== null && qe !== null && Th(I, qe, se, ve, !0));
                    }
                }
                e: {
                    if (
                        ((L = _ ? ei(_) : window),
                        (V = L.nodeName && L.nodeName.toLowerCase()),
                        V === 'select' || (V === 'input' && L.type === 'file'))
                    )
                        var ze = Gf;
                    else if (Vf(L))
                        if (Yf) ze = Gy;
                        else {
                            ze = Vy;
                            var me = Hy;
                        }
                    else
                        ((V = L.nodeName),
                            !V || V.toLowerCase() !== 'input' || (L.type !== 'checkbox' && L.type !== 'radio')
                                ? _ && cc(_.elementType) && (ze = Gf)
                                : (ze = qy));
                    if (ze && (ze = ze(e, _))) {
                        qf(I, ze, n, Y);
                        break e;
                    }
                    (me && me(e, L, _), e === 'focusout' && _ && L.type === 'number' && _.memoizedProps.value != null && sc(L, 'number', L.value));
                }
                switch (((me = _ ? ei(_) : window), e)) {
                    case 'focusin':
                        (Vf(me) || me.contentEditable === 'true') && ((cl = me), (wc = _), (ri = null));
                        break;
                    case 'focusout':
                        ri = wc = cl = null;
                        break;
                    case 'mousedown':
                        Cc = !0;
                        break;
                    case 'contextmenu':
                    case 'mouseup':
                    case 'dragend':
                        ((Cc = !1), $f(I, n, Y));
                        break;
                    case 'selectionchange':
                        if (Xy) break;
                    case 'keydown':
                    case 'keyup':
                        $f(I, n, Y);
                }
                var Ee;
                if (yc)
                    e: {
                        switch (e) {
                            case 'compositionstart':
                                var ke = 'onCompositionStart';
                                break e;
                            case 'compositionend':
                                ke = 'onCompositionEnd';
                                break e;
                            case 'compositionupdate':
                                ke = 'onCompositionUpdate';
                                break e;
                        }
                        ke = void 0;
                    }
                else sl ? Bf(e, n) && (ke = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (ke = 'onCompositionStart');
                (ke &&
                    (_f &&
                        n.locale !== 'ko' &&
                        (sl || ke !== 'onCompositionStart'
                            ? ke === 'onCompositionEnd' && sl && (Ee = Rf())
                            : ((Jn = Y), (mc = 'value' in Jn ? Jn.value : Jn.textContent), (sl = !0))),
                    (me = is(_, ke)),
                    0 < me.length &&
                        ((ke = new zf(ke, e, null, n, Y)),
                        I.push({ event: ke, listeners: me }),
                        Ee ? (ke.data = Ee) : ((Ee = Hf(n)), Ee !== null && (ke.data = Ee)))),
                    (Ee = Dy ? _y(e, n) : Ly(e, n)) &&
                        ((ke = is(_, 'onBeforeInput')),
                        0 < ke.length &&
                            ((me = new zf('onBeforeInput', 'beforeinput', null, n, Y)), I.push({ event: me, listeners: ke }), (me.data = Ee))),
                    N0(I, e, _, n, Y));
            }
            Ch(I, t);
        });
    }
    function Di(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
    }
    function is(e, t) {
        for (var n = t + 'Capture', a = []; e !== null; ) {
            var i = e,
                o = i.stateNode;
            if (
                ((i = i.tag),
                (i !== 5 && i !== 26 && i !== 27) ||
                    o === null ||
                    ((i = ti(e, n)), i != null && a.unshift(Di(e, i, o)), (i = ti(e, t)), i != null && a.push(Di(e, i, o))),
                e.tag === 3)
            )
                return a;
            e = e.return;
        }
        return [];
    }
    function k0(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null;
    }
    function Th(e, t, n, a, i) {
        for (var o = t._reactName, f = []; n !== null && n !== a; ) {
            var v = n,
                C = v.alternate,
                _ = v.stateNode;
            if (((v = v.tag), C !== null && C === a)) break;
            ((v !== 5 && v !== 26 && v !== 27) ||
                _ === null ||
                ((C = _), i ? ((_ = ti(n, o)), _ != null && f.unshift(Di(n, _, C))) : i || ((_ = ti(n, o)), _ != null && f.push(Di(n, _, C)))),
                (n = n.return));
        }
        f.length !== 0 && e.push({ event: t, listeners: f });
    }
    var O0 = /\r\n?/g,
        z0 = /\u0000|\uFFFD/g;
    function Ah(e) {
        return (typeof e == 'string' ? e : '' + e)
            .replace(
                O0,
                `
`
            )
            .replace(z0, '');
    }
    function Nh(e, t) {
        return ((t = Ah(t)), Ah(e) === t);
    }
    function Ve(e, t, n, a, i, o) {
        switch (n) {
            case 'children':
                typeof a == 'string'
                    ? t === 'body' || (t === 'textarea' && a === '') || ll(e, a)
                    : (typeof a == 'number' || typeof a == 'bigint') && t !== 'body' && ll(e, '' + a);
                break;
            case 'className':
                co(e, 'class', a);
                break;
            case 'tabIndex':
                co(e, 'tabindex', a);
                break;
            case 'dir':
            case 'role':
            case 'viewBox':
            case 'width':
            case 'height':
                co(e, n, a);
                break;
            case 'style':
                Nf(e, a, o);
                break;
            case 'data':
                if (t !== 'object') {
                    co(e, 'data', a);
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
                ((a = uo('' + a)), e.setAttribute(n, a));
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
                    typeof o == 'function' &&
                        (n === 'formAction'
                            ? (t !== 'input' && Ve(e, t, 'name', i.name, i, null),
                              Ve(e, t, 'formEncType', i.formEncType, i, null),
                              Ve(e, t, 'formMethod', i.formMethod, i, null),
                              Ve(e, t, 'formTarget', i.formTarget, i, null))
                            : (Ve(e, t, 'encType', i.encType, i, null),
                              Ve(e, t, 'method', i.method, i, null),
                              Ve(e, t, 'target', i.target, i, null)));
                if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
                    e.removeAttribute(n);
                    break;
                }
                ((a = uo('' + a)), e.setAttribute(n, a));
                break;
            case 'onClick':
                a != null && (e.onclick = Tn);
                break;
            case 'onScroll':
                a != null && je('scroll', e);
                break;
            case 'onScrollEnd':
                a != null && je('scrollend', e);
                break;
            case 'dangerouslySetInnerHTML':
                if (a != null) {
                    if (typeof a != 'object' || !('__html' in a)) throw Error(r(61));
                    if (((n = a.__html), n != null)) {
                        if (i.children != null) throw Error(r(60));
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
                ((n = uo('' + a)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
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
                (je('beforetoggle', e), je('toggle', e), so(e, 'popover', a));
                break;
            case 'xlinkActuate':
                En(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
                break;
            case 'xlinkArcrole':
                En(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
                break;
            case 'xlinkRole':
                En(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
                break;
            case 'xlinkShow':
                En(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
                break;
            case 'xlinkTitle':
                En(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
                break;
            case 'xlinkType':
                En(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
                break;
            case 'xmlBase':
                En(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
                break;
            case 'xmlLang':
                En(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
                break;
            case 'xmlSpace':
                En(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
                break;
            case 'is':
                so(e, 'is', a);
                break;
            case 'innerText':
            case 'textContent':
                break;
            default:
                (!(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')) && ((n = sy.get(n) || n), so(e, n, a));
        }
    }
    function Jr(e, t, n, a, i, o) {
        switch (n) {
            case 'style':
                Nf(e, a, o);
                break;
            case 'dangerouslySetInnerHTML':
                if (a != null) {
                    if (typeof a != 'object' || !('__html' in a)) throw Error(r(61));
                    if (((n = a.__html), n != null)) {
                        if (i.children != null) throw Error(r(60));
                        e.innerHTML = n;
                    }
                }
                break;
            case 'children':
                typeof a == 'string' ? ll(e, a) : (typeof a == 'number' || typeof a == 'bigint') && ll(e, '' + a);
                break;
            case 'onScroll':
                a != null && je('scroll', e);
                break;
            case 'onScrollEnd':
                a != null && je('scrollend', e);
                break;
            case 'onClick':
                a != null && (e.onclick = Tn);
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
                if (!yf.hasOwnProperty(n))
                    e: {
                        if (
                            n[0] === 'o' &&
                            n[1] === 'n' &&
                            ((i = n.endsWith('Capture')),
                            (t = n.slice(2, i ? n.length - 7 : void 0)),
                            (o = e[Tt] || null),
                            (o = o != null ? o[n] : null),
                            typeof o == 'function' && e.removeEventListener(t, o, i),
                            typeof a == 'function')
                        ) {
                            (typeof o != 'function' && o !== null && (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                                e.addEventListener(t, a, i));
                            break e;
                        }
                        n in e ? (e[n] = a) : a === !0 ? e.setAttribute(n, '') : so(e, n, a);
                    }
        }
    }
    function vt(e, t, n) {
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
                    o;
                for (o in n)
                    if (n.hasOwnProperty(o)) {
                        var f = n[o];
                        if (f != null)
                            switch (o) {
                                case 'src':
                                    a = !0;
                                    break;
                                case 'srcSet':
                                    i = !0;
                                    break;
                                case 'children':
                                case 'dangerouslySetInnerHTML':
                                    throw Error(r(137, t));
                                default:
                                    Ve(e, t, o, f, n, null);
                            }
                    }
                (i && Ve(e, t, 'srcSet', n.srcSet, n, null), a && Ve(e, t, 'src', n.src, n, null));
                return;
            case 'input':
                je('invalid', e);
                var v = (o = f = i = null),
                    C = null,
                    _ = null;
                for (a in n)
                    if (n.hasOwnProperty(a)) {
                        var Y = n[a];
                        if (Y != null)
                            switch (a) {
                                case 'name':
                                    i = Y;
                                    break;
                                case 'type':
                                    f = Y;
                                    break;
                                case 'checked':
                                    C = Y;
                                    break;
                                case 'defaultChecked':
                                    _ = Y;
                                    break;
                                case 'value':
                                    o = Y;
                                    break;
                                case 'defaultValue':
                                    v = Y;
                                    break;
                                case 'children':
                                case 'dangerouslySetInnerHTML':
                                    if (Y != null) throw Error(r(137, t));
                                    break;
                                default:
                                    Ve(e, t, a, Y, n, null);
                            }
                    }
                Cf(e, o, v, C, _, f, i, !1);
                return;
            case 'select':
                (je('invalid', e), (a = f = o = null));
                for (i in n)
                    if (n.hasOwnProperty(i) && ((v = n[i]), v != null))
                        switch (i) {
                            case 'value':
                                o = v;
                                break;
                            case 'defaultValue':
                                f = v;
                                break;
                            case 'multiple':
                                a = v;
                            default:
                                Ve(e, t, i, v, n, null);
                        }
                ((t = o), (n = f), (e.multiple = !!a), t != null ? al(e, !!a, t, !1) : n != null && al(e, !!a, n, !0));
                return;
            case 'textarea':
                (je('invalid', e), (o = i = a = null));
                for (f in n)
                    if (n.hasOwnProperty(f) && ((v = n[f]), v != null))
                        switch (f) {
                            case 'value':
                                a = v;
                                break;
                            case 'defaultValue':
                                i = v;
                                break;
                            case 'children':
                                o = v;
                                break;
                            case 'dangerouslySetInnerHTML':
                                if (v != null) throw Error(r(91));
                                break;
                            default:
                                Ve(e, t, f, v, n, null);
                        }
                Tf(e, a, i, o);
                return;
            case 'option':
                for (C in n)
                    if (n.hasOwnProperty(C) && ((a = n[C]), a != null))
                        switch (C) {
                            case 'selected':
                                e.selected = a && typeof a != 'function' && typeof a != 'symbol';
                                break;
                            default:
                                Ve(e, t, C, a, n, null);
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
                for (a = 0; a < zi.length; a++) je(zi[a], e);
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
                                throw Error(r(137, t));
                            default:
                                Ve(e, t, _, a, n, null);
                        }
                return;
            default:
                if (cc(t)) {
                    for (Y in n) n.hasOwnProperty(Y) && ((a = n[Y]), a !== void 0 && Jr(e, t, Y, a, n, void 0));
                    return;
                }
        }
        for (v in n) n.hasOwnProperty(v) && ((a = n[v]), a != null && Ve(e, t, v, a, n, null));
    }
    function D0(e, t, n, a) {
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
                    o = null,
                    f = null,
                    v = null,
                    C = null,
                    _ = null,
                    Y = null;
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
                                a.hasOwnProperty(V) || Ve(e, t, V, null, a, I);
                        }
                }
                for (var L in a) {
                    var V = a[L];
                    if (((I = n[L]), a.hasOwnProperty(L) && (V != null || I != null)))
                        switch (L) {
                            case 'type':
                                o = V;
                                break;
                            case 'name':
                                i = V;
                                break;
                            case 'checked':
                                _ = V;
                                break;
                            case 'defaultChecked':
                                Y = V;
                                break;
                            case 'value':
                                f = V;
                                break;
                            case 'defaultValue':
                                v = V;
                                break;
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                if (V != null) throw Error(r(137, t));
                                break;
                            default:
                                V !== I && Ve(e, t, L, V, a, I);
                        }
                }
                oc(e, f, v, C, _, Y, o, i);
                return;
            case 'select':
                V = f = v = L = null;
                for (o in n)
                    if (((C = n[o]), n.hasOwnProperty(o) && C != null))
                        switch (o) {
                            case 'value':
                                break;
                            case 'multiple':
                                V = C;
                            default:
                                a.hasOwnProperty(o) || Ve(e, t, o, null, a, C);
                        }
                for (i in a)
                    if (((o = a[i]), (C = n[i]), a.hasOwnProperty(i) && (o != null || C != null)))
                        switch (i) {
                            case 'value':
                                L = o;
                                break;
                            case 'defaultValue':
                                v = o;
                                break;
                            case 'multiple':
                                f = o;
                            default:
                                o !== C && Ve(e, t, i, o, a, C);
                        }
                ((t = v),
                    (n = f),
                    (a = V),
                    L != null ? al(e, !!n, L, !1) : !!a != !!n && (t != null ? al(e, !!n, t, !0) : al(e, !!n, n ? [] : '', !1)));
                return;
            case 'textarea':
                V = L = null;
                for (v in n)
                    if (((i = n[v]), n.hasOwnProperty(v) && i != null && !a.hasOwnProperty(v)))
                        switch (v) {
                            case 'value':
                                break;
                            case 'children':
                                break;
                            default:
                                Ve(e, t, v, null, a, i);
                        }
                for (f in a)
                    if (((i = a[f]), (o = n[f]), a.hasOwnProperty(f) && (i != null || o != null)))
                        switch (f) {
                            case 'value':
                                L = i;
                                break;
                            case 'defaultValue':
                                V = i;
                                break;
                            case 'children':
                                break;
                            case 'dangerouslySetInnerHTML':
                                if (i != null) throw Error(r(91));
                                break;
                            default:
                                i !== o && Ve(e, t, f, i, a, o);
                        }
                Ef(e, L, V);
                return;
            case 'option':
                for (var se in n)
                    if (((L = n[se]), n.hasOwnProperty(se) && L != null && !a.hasOwnProperty(se)))
                        switch (se) {
                            case 'selected':
                                e.selected = !1;
                                break;
                            default:
                                Ve(e, t, se, null, a, L);
                        }
                for (C in a)
                    if (((L = a[C]), (V = n[C]), a.hasOwnProperty(C) && L !== V && (L != null || V != null)))
                        switch (C) {
                            case 'selected':
                                e.selected = L && typeof L != 'function' && typeof L != 'symbol';
                                break;
                            default:
                                Ve(e, t, C, L, a, V);
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
                for (var ve in n) ((L = n[ve]), n.hasOwnProperty(ve) && L != null && !a.hasOwnProperty(ve) && Ve(e, t, ve, null, a, L));
                for (_ in a)
                    if (((L = a[_]), (V = n[_]), a.hasOwnProperty(_) && L !== V && (L != null || V != null)))
                        switch (_) {
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                if (L != null) throw Error(r(137, t));
                                break;
                            default:
                                Ve(e, t, _, L, a, V);
                        }
                return;
            default:
                if (cc(t)) {
                    for (var qe in n) ((L = n[qe]), n.hasOwnProperty(qe) && L !== void 0 && !a.hasOwnProperty(qe) && Jr(e, t, qe, void 0, a, L));
                    for (Y in a) ((L = a[Y]), (V = n[Y]), !a.hasOwnProperty(Y) || L === V || (L === void 0 && V === void 0) || Jr(e, t, Y, L, a, V));
                    return;
                }
        }
        for (var k in n) ((L = n[k]), n.hasOwnProperty(k) && L != null && !a.hasOwnProperty(k) && Ve(e, t, k, null, a, L));
        for (I in a) ((L = a[I]), (V = n[I]), !a.hasOwnProperty(I) || L === V || (L == null && V == null) || Ve(e, t, I, L, a, V));
    }
    function jh(e) {
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
    function _0() {
        if (typeof performance.getEntriesByType == 'function') {
            for (var e = 0, t = 0, n = performance.getEntriesByType('resource'), a = 0; a < n.length; a++) {
                var i = n[a],
                    o = i.transferSize,
                    f = i.initiatorType,
                    v = i.duration;
                if (o && v && jh(f)) {
                    for (f = 0, v = i.responseEnd, a += 1; a < n.length; a++) {
                        var C = n[a],
                            _ = C.startTime;
                        if (_ > v) break;
                        var Y = C.transferSize,
                            I = C.initiatorType;
                        Y && jh(I) && ((C = C.responseEnd), (f += Y * (C < v ? 1 : (v - _) / (C - _))));
                    }
                    if ((--a, (t += (8 * (o + f)) / (i.duration / 1e3)), e++, 10 < e)) break;
                }
            }
            if (0 < e) return t / e / 1e6;
        }
        return navigator.connection && ((e = navigator.connection.downlink), typeof e == 'number') ? e : 5;
    }
    var Ir = null,
        Wr = null;
    function os(e) {
        return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Mh(e) {
        switch (e) {
            case 'http://www.w3.org/2000/svg':
                return 1;
            case 'http://www.w3.org/1998/Math/MathML':
                return 2;
            default:
                return 0;
        }
    }
    function Rh(e, t) {
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
    function $r(e, t) {
        return (
            e === 'textarea' ||
            e === 'noscript' ||
            typeof t.children == 'string' ||
            typeof t.children == 'number' ||
            typeof t.children == 'bigint' ||
            (typeof t.dangerouslySetInnerHTML == 'object' && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
        );
    }
    var Fr = null;
    function L0() {
        var e = window.event;
        return e && e.type === 'popstate' ? (e === Fr ? !1 : ((Fr = e), !0)) : ((Fr = null), !1);
    }
    var kh = typeof setTimeout == 'function' ? setTimeout : void 0,
        U0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
        Oh = typeof Promise == 'function' ? Promise : void 0,
        B0 =
            typeof queueMicrotask == 'function'
                ? queueMicrotask
                : typeof Oh < 'u'
                  ? function (e) {
                        return Oh.resolve(null).then(e).catch(H0);
                    }
                  : kh;
    function H0(e) {
        setTimeout(function () {
            throw e;
        });
    }
    function fa(e) {
        return e === 'head';
    }
    function zh(e, t) {
        var n = t,
            a = 0;
        do {
            var i = n.nextSibling;
            if ((e.removeChild(n), i && i.nodeType === 8))
                if (((n = i.data), n === '/$' || n === '/&')) {
                    if (a === 0) {
                        (e.removeChild(i), _l(t));
                        return;
                    }
                    a--;
                } else if (n === '$' || n === '$?' || n === '$~' || n === '$!' || n === '&') a++;
                else if (n === 'html') _i(e.ownerDocument.documentElement);
                else if (n === 'head') {
                    ((n = e.ownerDocument.head), _i(n));
                    for (var o = n.firstChild; o; ) {
                        var f = o.nextSibling,
                            v = o.nodeName;
                        (o[Pl] || v === 'SCRIPT' || v === 'STYLE' || (v === 'LINK' && o.rel.toLowerCase() === 'stylesheet') || n.removeChild(o),
                            (o = f));
                    }
                } else n === 'body' && _i(e.ownerDocument.body);
            n = i;
        } while (n);
        _l(t);
    }
    function Dh(e, t) {
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
    function Pr(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
                case 'HTML':
                case 'HEAD':
                case 'BODY':
                    (Pr(n), lc(n));
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
    function V0(e, t, n, a) {
        for (; e.nodeType === 1; ) {
            var i = n;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
            } else if (a) {
                if (!e[Pl])
                    switch (t) {
                        case 'meta':
                            if (!e.hasAttribute('itemprop')) break;
                            return e;
                        case 'link':
                            if (((o = e.getAttribute('rel')), o === 'stylesheet' && e.hasAttribute('data-precedence'))) break;
                            if (
                                o !== i.rel ||
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
                                ((o = e.getAttribute('src')),
                                (o !== (i.src == null ? null : i.src) ||
                                    e.getAttribute('type') !== (i.type == null ? null : i.type) ||
                                    e.getAttribute('crossorigin') !== (i.crossOrigin == null ? null : i.crossOrigin)) &&
                                    o &&
                                    e.hasAttribute('async') &&
                                    !e.hasAttribute('itemprop'))
                            )
                                break;
                            return e;
                        default:
                            return e;
                    }
            } else if (t === 'input' && e.type === 'hidden') {
                var o = i.name == null ? null : '' + i.name;
                if (i.type === 'hidden' && e.getAttribute('name') === o) return e;
            } else return e;
            if (((e = Ft(e.nextSibling)), e === null)) break;
        }
        return null;
    }
    function q0(e, t, n) {
        if (t === '') return null;
        for (; e.nodeType !== 3; )
            if (((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !n) || ((e = Ft(e.nextSibling)), e === null)) return null;
        return e;
    }
    function _h(e, t) {
        for (; e.nodeType !== 8; )
            if (((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) || ((e = Ft(e.nextSibling)), e === null)) return null;
        return e;
    }
    function eu(e) {
        return e.data === '$?' || e.data === '$~';
    }
    function tu(e) {
        return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState !== 'loading');
    }
    function G0(e, t) {
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
    var nu = null;
    function Lh(e) {
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
    function Uh(e) {
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
    function Bh(e, t, n) {
        switch (((t = os(n)), e)) {
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
    function _i(e) {
        for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
        lc(e);
    }
    var Pt = new Map(),
        Hh = new Set();
    function ss(e) {
        return typeof e.getRootNode == 'function' ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    var qn = G.d;
    G.d = { f: Y0, r: X0, D: K0, C: Q0, L: Z0, m: J0, X: W0, S: I0, M: $0 };
    function Y0() {
        var e = qn.f(),
            t = Fo();
        return e || t;
    }
    function X0(e) {
        var t = el(e);
        t !== null && t.tag === 5 && t.type === 'form' ? nm(t) : qn.r(e);
    }
    var Ol = typeof document > 'u' ? null : document;
    function Vh(e, t, n) {
        var a = Ol;
        if (a && typeof t == 'string' && t) {
            var i = Kt(t);
            ((i = 'link[rel="' + e + '"][href="' + i + '"]'),
                typeof n == 'string' && (i += '[crossorigin="' + n + '"]'),
                Hh.has(i) ||
                    (Hh.add(i),
                    (e = { rel: e, crossOrigin: n, href: t }),
                    a.querySelector(i) === null && ((t = a.createElement('link')), vt(t, 'link', e), ft(t), a.head.appendChild(t))));
        }
    }
    function K0(e) {
        (qn.D(e), Vh('dns-prefetch', e, null));
    }
    function Q0(e, t) {
        (qn.C(e, t), Vh('preconnect', e, t));
    }
    function Z0(e, t, n) {
        qn.L(e, t, n);
        var a = Ol;
        if (a && e && t) {
            var i = 'link[rel="preload"][as="' + Kt(t) + '"]';
            t === 'image' && n && n.imageSrcSet
                ? ((i += '[imagesrcset="' + Kt(n.imageSrcSet) + '"]'),
                  typeof n.imageSizes == 'string' && (i += '[imagesizes="' + Kt(n.imageSizes) + '"]'))
                : (i += '[href="' + Kt(e) + '"]');
            var o = i;
            switch (t) {
                case 'style':
                    o = zl(e);
                    break;
                case 'script':
                    o = Dl(e);
            }
            Pt.has(o) ||
                ((e = x({ rel: 'preload', href: t === 'image' && n && n.imageSrcSet ? void 0 : e, as: t }, n)),
                Pt.set(o, e),
                a.querySelector(i) !== null ||
                    (t === 'style' && a.querySelector(Li(o))) ||
                    (t === 'script' && a.querySelector(Ui(o))) ||
                    ((t = a.createElement('link')), vt(t, 'link', e), ft(t), a.head.appendChild(t)));
        }
    }
    function J0(e, t) {
        qn.m(e, t);
        var n = Ol;
        if (n && e) {
            var a = t && typeof t.as == 'string' ? t.as : 'script',
                i = 'link[rel="modulepreload"][as="' + Kt(a) + '"][href="' + Kt(e) + '"]',
                o = i;
            switch (a) {
                case 'audioworklet':
                case 'paintworklet':
                case 'serviceworker':
                case 'sharedworker':
                case 'worker':
                case 'script':
                    o = Dl(e);
            }
            if (!Pt.has(o) && ((e = x({ rel: 'modulepreload', href: e }, t)), Pt.set(o, e), n.querySelector(i) === null)) {
                switch (a) {
                    case 'audioworklet':
                    case 'paintworklet':
                    case 'serviceworker':
                    case 'sharedworker':
                    case 'worker':
                    case 'script':
                        if (n.querySelector(Ui(o))) return;
                }
                ((a = n.createElement('link')), vt(a, 'link', e), ft(a), n.head.appendChild(a));
            }
        }
    }
    function I0(e, t, n) {
        qn.S(e, t, n);
        var a = Ol;
        if (a && e) {
            var i = tl(a).hoistableStyles,
                o = zl(e);
            t = t || 'default';
            var f = i.get(o);
            if (!f) {
                var v = { loading: 0, preload: null };
                if ((f = a.querySelector(Li(o)))) v.loading = 5;
                else {
                    ((e = x({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)), (n = Pt.get(o)) && au(e, n));
                    var C = (f = a.createElement('link'));
                    (ft(C),
                        vt(C, 'link', e),
                        (C._p = new Promise(function (_, Y) {
                            ((C.onload = _), (C.onerror = Y));
                        })),
                        C.addEventListener('load', function () {
                            v.loading |= 1;
                        }),
                        C.addEventListener('error', function () {
                            v.loading |= 2;
                        }),
                        (v.loading |= 4),
                        cs(f, t, a));
                }
                ((f = { type: 'stylesheet', instance: f, count: 1, state: v }), i.set(o, f));
            }
        }
    }
    function W0(e, t) {
        qn.X(e, t);
        var n = Ol;
        if (n && e) {
            var a = tl(n).hoistableScripts,
                i = Dl(e),
                o = a.get(i);
            o ||
                ((o = n.querySelector(Ui(i))),
                o ||
                    ((e = x({ src: e, async: !0 }, t)),
                    (t = Pt.get(i)) && lu(e, t),
                    (o = n.createElement('script')),
                    ft(o),
                    vt(o, 'link', e),
                    n.head.appendChild(o)),
                (o = { type: 'script', instance: o, count: 1, state: null }),
                a.set(i, o));
        }
    }
    function $0(e, t) {
        qn.M(e, t);
        var n = Ol;
        if (n && e) {
            var a = tl(n).hoistableScripts,
                i = Dl(e),
                o = a.get(i);
            o ||
                ((o = n.querySelector(Ui(i))),
                o ||
                    ((e = x({ src: e, async: !0, type: 'module' }, t)),
                    (t = Pt.get(i)) && lu(e, t),
                    (o = n.createElement('script')),
                    ft(o),
                    vt(o, 'link', e),
                    n.head.appendChild(o)),
                (o = { type: 'script', instance: o, count: 1, state: null }),
                a.set(i, o));
        }
    }
    function qh(e, t, n, a) {
        var i = (i = he.current) ? ss(i) : null;
        if (!i) throw Error(r(446));
        switch (e) {
            case 'meta':
            case 'title':
                return null;
            case 'style':
                return typeof n.precedence == 'string' && typeof n.href == 'string'
                    ? ((t = zl(n.href)),
                      (n = tl(i).hoistableStyles),
                      (a = n.get(t)),
                      a || ((a = { type: 'style', instance: null, count: 0, state: null }), n.set(t, a)),
                      a)
                    : { type: 'void', instance: null, count: 0, state: null };
            case 'link':
                if (n.rel === 'stylesheet' && typeof n.href == 'string' && typeof n.precedence == 'string') {
                    e = zl(n.href);
                    var o = tl(i).hoistableStyles,
                        f = o.get(e);
                    if (
                        (f ||
                            ((i = i.ownerDocument || i),
                            (f = { type: 'stylesheet', instance: null, count: 0, state: { loading: 0, preload: null } }),
                            o.set(e, f),
                            (o = i.querySelector(Li(e))) && !o._p && ((f.instance = o), (f.state.loading = 5)),
                            Pt.has(e) ||
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
                                Pt.set(e, n),
                                o || F0(i, e, n, f.state))),
                        t && a === null)
                    )
                        throw Error(r(528, ''));
                    return f;
                }
                if (t && a !== null) throw Error(r(529, ''));
                return null;
            case 'script':
                return (
                    (t = n.async),
                    (n = n.src),
                    typeof n == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
                        ? ((t = Dl(n)),
                          (n = tl(i).hoistableScripts),
                          (a = n.get(t)),
                          a || ((a = { type: 'script', instance: null, count: 0, state: null }), n.set(t, a)),
                          a)
                        : { type: 'void', instance: null, count: 0, state: null }
                );
            default:
                throw Error(r(444, e));
        }
    }
    function zl(e) {
        return 'href="' + Kt(e) + '"';
    }
    function Li(e) {
        return 'link[rel="stylesheet"][' + e + ']';
    }
    function Gh(e) {
        return x({}, e, { 'data-precedence': e.precedence, precedence: null });
    }
    function F0(e, t, n, a) {
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
              vt(t, 'link', n),
              ft(t),
              e.head.appendChild(t));
    }
    function Dl(e) {
        return '[src="' + Kt(e) + '"]';
    }
    function Ui(e) {
        return 'script[async]' + e;
    }
    function Yh(e, t, n) {
        if ((t.count++, t.instance === null))
            switch (t.type) {
                case 'style':
                    var a = e.querySelector('style[data-href~="' + Kt(n.href) + '"]');
                    if (a) return ((t.instance = a), ft(a), a);
                    var i = x({}, n, { 'data-href': n.href, 'data-precedence': n.precedence, href: null, precedence: null });
                    return ((a = (e.ownerDocument || e).createElement('style')), ft(a), vt(a, 'style', i), cs(a, n.precedence, e), (t.instance = a));
                case 'stylesheet':
                    i = zl(n.href);
                    var o = e.querySelector(Li(i));
                    if (o) return ((t.state.loading |= 4), (t.instance = o), ft(o), o);
                    ((a = Gh(n)), (i = Pt.get(i)) && au(a, i), (o = (e.ownerDocument || e).createElement('link')), ft(o));
                    var f = o;
                    return (
                        (f._p = new Promise(function (v, C) {
                            ((f.onload = v), (f.onerror = C));
                        })),
                        vt(o, 'link', a),
                        (t.state.loading |= 4),
                        cs(o, n.precedence, e),
                        (t.instance = o)
                    );
                case 'script':
                    return (
                        (o = Dl(n.src)),
                        (i = e.querySelector(Ui(o)))
                            ? ((t.instance = i), ft(i), i)
                            : ((a = n),
                              (i = Pt.get(o)) && ((a = x({}, n)), lu(a, i)),
                              (e = e.ownerDocument || e),
                              (i = e.createElement('script')),
                              ft(i),
                              vt(i, 'link', a),
                              e.head.appendChild(i),
                              (t.instance = i))
                    );
                case 'void':
                    return null;
                default:
                    throw Error(r(443, t.type));
            }
        else t.type === 'stylesheet' && (t.state.loading & 4) === 0 && ((a = t.instance), (t.state.loading |= 4), cs(a, n.precedence, e));
        return t.instance;
    }
    function cs(e, t, n) {
        for (
            var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
                i = a.length ? a[a.length - 1] : null,
                o = i,
                f = 0;
            f < a.length;
            f++
        ) {
            var v = a[f];
            if (v.dataset.precedence === t) o = v;
            else if (o !== i) break;
        }
        o ? o.parentNode.insertBefore(e, o.nextSibling) : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
    }
    function au(e, t) {
        (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
            e.title == null && (e.title = t.title));
    }
    function lu(e, t) {
        (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
            e.integrity == null && (e.integrity = t.integrity));
    }
    var rs = null;
    function Xh(e, t, n) {
        if (rs === null) {
            var a = new Map(),
                i = (rs = new Map());
            i.set(n, a);
        } else ((i = rs), (a = i.get(n)), a || ((a = new Map()), i.set(n, a)));
        if (a.has(e)) return a;
        for (a.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
            var o = n[i];
            if (!(o[Pl] || o[mt] || (e === 'link' && o.getAttribute('rel') === 'stylesheet')) && o.namespaceURI !== 'http://www.w3.org/2000/svg') {
                var f = o.getAttribute(t) || '';
                f = e + f;
                var v = a.get(f);
                v ? v.push(o) : a.set(f, [o]);
            }
        }
        return a;
    }
    function Kh(e, t, n) {
        ((e = e.ownerDocument || e), e.head.insertBefore(n, t === 'title' ? e.querySelector('head > title') : null));
    }
    function P0(e, t, n) {
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
    function Qh(e) {
        return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
    }
    function eb(e, t, n, a) {
        if (n.type === 'stylesheet' && (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
            if (n.instance === null) {
                var i = zl(a.href),
                    o = t.querySelector(Li(i));
                if (o) {
                    ((t = o._p),
                        t !== null && typeof t == 'object' && typeof t.then == 'function' && (e.count++, (e = us.bind(e)), t.then(e, e)),
                        (n.state.loading |= 4),
                        (n.instance = o),
                        ft(o));
                    return;
                }
                ((o = t.ownerDocument || t), (a = Gh(a)), (i = Pt.get(i)) && au(a, i), (o = o.createElement('link')), ft(o));
                var f = o;
                ((f._p = new Promise(function (v, C) {
                    ((f.onload = v), (f.onerror = C));
                })),
                    vt(o, 'link', a),
                    (n.instance = o));
            }
            (e.stylesheets === null && (e.stylesheets = new Map()),
                e.stylesheets.set(n, t),
                (t = n.state.preload) &&
                    (n.state.loading & 3) === 0 &&
                    (e.count++, (n = us.bind(e)), t.addEventListener('load', n), t.addEventListener('error', n)));
        }
    }
    var iu = 0;
    function tb(e, t) {
        return (
            e.stylesheets && e.count === 0 && ds(e, e.stylesheets),
            0 < e.count || 0 < e.imgCount
                ? function (n) {
                      var a = setTimeout(function () {
                          if ((e.stylesheets && ds(e, e.stylesheets), e.unsuspend)) {
                              var o = e.unsuspend;
                              ((e.unsuspend = null), o());
                          }
                      }, 6e4 + t);
                      0 < e.imgBytes && iu === 0 && (iu = 62500 * _0());
                      var i = setTimeout(
                          function () {
                              if (((e.waitingForImages = !1), e.count === 0 && (e.stylesheets && ds(e, e.stylesheets), e.unsuspend))) {
                                  var o = e.unsuspend;
                                  ((e.unsuspend = null), o());
                              }
                          },
                          (e.imgBytes > iu ? 50 : 800) + t
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
    function us() {
        if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
            if (this.stylesheets) ds(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                ((this.unsuspend = null), e());
            }
        }
    }
    var fs = null;
    function ds(e, t) {
        ((e.stylesheets = null), e.unsuspend !== null && (e.count++, (fs = new Map()), t.forEach(nb, e), (fs = null), us.call(e)));
    }
    function nb(e, t) {
        if (!(t.state.loading & 4)) {
            var n = fs.get(e);
            if (n) var a = n.get(null);
            else {
                ((n = new Map()), fs.set(e, n));
                for (var i = e.querySelectorAll('link[data-precedence],style[data-precedence]'), o = 0; o < i.length; o++) {
                    var f = i[o];
                    (f.nodeName === 'LINK' || f.getAttribute('media') !== 'not all') && (n.set(f.dataset.precedence, f), (a = f));
                }
                a && n.set(null, a);
            }
            ((i = t.instance),
                (f = i.getAttribute('data-precedence')),
                (o = n.get(f) || a),
                o === a && n.set(null, i),
                n.set(f, i),
                this.count++,
                (a = us.bind(this)),
                i.addEventListener('load', a),
                i.addEventListener('error', a),
                o ? o.parentNode.insertBefore(i, o.nextSibling) : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(i, e.firstChild)),
                (t.state.loading |= 4));
        }
    }
    var Bi = { $$typeof: H, Provider: null, Consumer: null, _currentValue: O, _currentValue2: O, _threadCount: 0 };
    function ab(e, t, n, a, i, o, f, v, C) {
        ((this.tag = 1),
            (this.containerInfo = e),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
            (this.callbackPriority = 0),
            (this.expirationTimes = ec(-1)),
            (this.entangledLanes =
                this.shellSuspendCounter =
                this.errorRecoveryDisabledLanes =
                this.expiredLanes =
                this.warmLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = ec(0)),
            (this.hiddenUpdates = ec(null)),
            (this.identifierPrefix = a),
            (this.onUncaughtError = i),
            (this.onCaughtError = o),
            (this.onRecoverableError = f),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = C),
            (this.incompleteTransitions = new Map()));
    }
    function Zh(e, t, n, a, i, o, f, v, C, _, Y, I) {
        return (
            (e = new ab(e, t, n, f, C, _, Y, I, v)),
            (t = 1),
            o === !0 && (t |= 24),
            (o = Lt(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (t = Bc()),
            t.refCount++,
            (e.pooledCache = t),
            t.refCount++,
            (o.memoizedState = { element: a, isDehydrated: n, cache: t }),
            Gc(o),
            e
        );
    }
    function Jh(e) {
        return e ? ((e = fl), e) : fl;
    }
    function Ih(e, t, n, a, i, o) {
        ((i = Jh(i)),
            a.context === null ? (a.context = i) : (a.pendingContext = i),
            (a = ea(t)),
            (a.payload = { element: n }),
            (o = o === void 0 ? null : o),
            o !== null && (a.callback = o),
            (n = ta(e, a, t)),
            n !== null && (kt(n, e, t), gi(n, e, t)));
    }
    function Wh(e, t) {
        if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function ou(e, t) {
        (Wh(e, t), (e = e.alternate) && Wh(e, t));
    }
    function $h(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Oa(e, 67108864);
            (t !== null && kt(t, e, 67108864), ou(e, 67108864));
        }
    }
    function Fh(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = qt();
            t = tc(t);
            var n = Oa(e, t);
            (n !== null && kt(n, e, t), ou(e, t));
        }
    }
    var ms = !0;
    function lb(e, t, n, a) {
        var i = A.T;
        A.T = null;
        var o = G.p;
        try {
            ((G.p = 2), su(e, t, n, a));
        } finally {
            ((G.p = o), (A.T = i));
        }
    }
    function ib(e, t, n, a) {
        var i = A.T;
        A.T = null;
        var o = G.p;
        try {
            ((G.p = 8), su(e, t, n, a));
        } finally {
            ((G.p = o), (A.T = i));
        }
    }
    function su(e, t, n, a) {
        if (ms) {
            var i = cu(a);
            if (i === null) (Zr(e, t, a, hs, n), ep(e, a));
            else if (sb(i, e, t, n, a)) a.stopPropagation();
            else if ((ep(e, a), t & 4 && -1 < ob.indexOf(e))) {
                for (; i !== null; ) {
                    var o = el(i);
                    if (o !== null)
                        switch (o.tag) {
                            case 3:
                                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                                    var f = Na(o.pendingLanes);
                                    if (f !== 0) {
                                        var v = o;
                                        for (v.pendingLanes |= 2, v.entangledLanes |= 2; f; ) {
                                            var C = 1 << (31 - wt(f));
                                            ((v.entanglements[1] |= C), (f &= ~C));
                                        }
                                        (gn(o), (_e & 6) === 0 && ((Wo = xt() + 500), Oi(0)));
                                    }
                                }
                                break;
                            case 31:
                            case 13:
                                ((v = Oa(o, 2)), v !== null && kt(v, o, 2), Fo(), ou(o, 2));
                        }
                    if (((o = cu(a)), o === null && Zr(e, t, a, hs, n), o === i)) break;
                    i = o;
                }
                i !== null && a.stopPropagation();
            } else Zr(e, t, a, null, n);
        }
    }
    function cu(e) {
        return ((e = uc(e)), ru(e));
    }
    var hs = null;
    function ru(e) {
        if (((hs = null), (e = Pa(e)), e !== null)) {
            var t = m(e);
            if (t === null) e = null;
            else {
                var n = t.tag;
                if (n === 13) {
                    if (((e = p(t)), e !== null)) return e;
                    e = null;
                } else if (n === 31) {
                    if (((e = g(t)), e !== null)) return e;
                    e = null;
                } else if (n === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null;
                } else t !== e && (e = null);
            }
        }
        return ((hs = e), null);
    }
    function Ph(e) {
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
                switch (Ws()) {
                    case eo:
                        return 2;
                    case to:
                        return 8;
                    case Aa:
                    case no:
                        return 32;
                    case Il:
                        return 268435456;
                    default:
                        return 32;
                }
            default:
                return 32;
        }
    }
    var uu = !1,
        da = null,
        ma = null,
        ha = null,
        Hi = new Map(),
        Vi = new Map(),
        pa = [],
        ob =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
                ' '
            );
    function ep(e, t) {
        switch (e) {
            case 'focusin':
            case 'focusout':
                da = null;
                break;
            case 'dragenter':
            case 'dragleave':
                ma = null;
                break;
            case 'mouseover':
            case 'mouseout':
                ha = null;
                break;
            case 'pointerover':
            case 'pointerout':
                Hi.delete(t.pointerId);
                break;
            case 'gotpointercapture':
            case 'lostpointercapture':
                Vi.delete(t.pointerId);
        }
    }
    function qi(e, t, n, a, i, o) {
        return e === null || e.nativeEvent !== o
            ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: a, nativeEvent: o, targetContainers: [i] }),
              t !== null && ((t = el(t)), t !== null && $h(t)),
              e)
            : ((e.eventSystemFlags |= a), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
    }
    function sb(e, t, n, a, i) {
        switch (t) {
            case 'focusin':
                return ((da = qi(da, e, t, n, a, i)), !0);
            case 'dragenter':
                return ((ma = qi(ma, e, t, n, a, i)), !0);
            case 'mouseover':
                return ((ha = qi(ha, e, t, n, a, i)), !0);
            case 'pointerover':
                var o = i.pointerId;
                return (Hi.set(o, qi(Hi.get(o) || null, e, t, n, a, i)), !0);
            case 'gotpointercapture':
                return ((o = i.pointerId), Vi.set(o, qi(Vi.get(o) || null, e, t, n, a, i)), !0);
        }
        return !1;
    }
    function tp(e) {
        var t = Pa(e.target);
        if (t !== null) {
            var n = m(t);
            if (n !== null) {
                if (((t = n.tag), t === 13)) {
                    if (((t = p(n)), t !== null)) {
                        ((e.blockedOn = t),
                            pf(e.priority, function () {
                                Fh(n);
                            }));
                        return;
                    }
                } else if (t === 31) {
                    if (((t = g(n)), t !== null)) {
                        ((e.blockedOn = t),
                            pf(e.priority, function () {
                                Fh(n);
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
    function ps(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = cu(e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var a = new n.constructor(n.type, n);
                ((rc = a), n.target.dispatchEvent(a), (rc = null));
            } else return ((t = el(n)), t !== null && $h(t), (e.blockedOn = n), !1);
            t.shift();
        }
        return !0;
    }
    function np(e, t, n) {
        ps(e) && n.delete(t);
    }
    function cb() {
        ((uu = !1),
            da !== null && ps(da) && (da = null),
            ma !== null && ps(ma) && (ma = null),
            ha !== null && ps(ha) && (ha = null),
            Hi.forEach(np),
            Vi.forEach(np));
    }
    function gs(e, t) {
        e.blockedOn === t && ((e.blockedOn = null), uu || ((uu = !0), l.unstable_scheduleCallback(l.unstable_NormalPriority, cb)));
    }
    var vs = null;
    function ap(e) {
        vs !== e &&
            ((vs = e),
            l.unstable_scheduleCallback(l.unstable_NormalPriority, function () {
                vs === e && (vs = null);
                for (var t = 0; t < e.length; t += 3) {
                    var n = e[t],
                        a = e[t + 1],
                        i = e[t + 2];
                    if (typeof a != 'function') {
                        if (ru(a || n) === null) continue;
                        break;
                    }
                    var o = el(n);
                    o !== null && (e.splice(t, 3), (t -= 3), cr(o, { pending: !0, data: i, method: n.method, action: a }, a, i));
                }
            }));
    }
    function _l(e) {
        function t(C) {
            return gs(C, e);
        }
        (da !== null && gs(da, e), ma !== null && gs(ma, e), ha !== null && gs(ha, e), Hi.forEach(t), Vi.forEach(t));
        for (var n = 0; n < pa.length; n++) {
            var a = pa[n];
            a.blockedOn === e && (a.blockedOn = null);
        }
        for (; 0 < pa.length && ((n = pa[0]), n.blockedOn === null); ) (tp(n), n.blockedOn === null && pa.shift());
        if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
            for (a = 0; a < n.length; a += 3) {
                var i = n[a],
                    o = n[a + 1],
                    f = i[Tt] || null;
                if (typeof o == 'function') f || ap(n);
                else if (f) {
                    var v = null;
                    if (o && o.hasAttribute('formAction')) {
                        if (((i = o), (f = o[Tt] || null))) v = f.formAction;
                        else if (ru(i) !== null) continue;
                    } else v = f.action;
                    (typeof v == 'function' ? (n[a + 1] = v) : (n.splice(a, 3), (a -= 3)), ap(n));
                }
            }
    }
    function lp() {
        function e(o) {
            o.canIntercept &&
                o.info === 'react-transition' &&
                o.intercept({
                    handler: function () {
                        return new Promise(function (f) {
                            return (i = f);
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
                var o = navigation.currentEntry;
                o && o.url != null && navigation.navigate(o.url, { state: o.getState(), info: 'react-transition', history: 'replace' });
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
    function fu(e) {
        this._internalRoot = e;
    }
    ((ys.prototype.render = fu.prototype.render =
        function (e) {
            var t = this._internalRoot;
            if (t === null) throw Error(r(409));
            var n = t.current,
                a = qt();
            Ih(n, a, e, t, null, null);
        }),
        (ys.prototype.unmount = fu.prototype.unmount =
            function () {
                var e = this._internalRoot;
                if (e !== null) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    (Ih(e.current, 2, null, e, null, null), Fo(), (t[Fa] = null));
                }
            }));
    function ys(e) {
        this._internalRoot = e;
    }
    ys.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = hf();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < pa.length && t !== 0 && t < pa[n].priority; n++);
            (pa.splice(n, 0, e), n === 0 && tp(e));
        }
    };
    var ip = s.version;
    if (ip !== '19.2.0') throw Error(r(527, ip, '19.2.0'));
    G.findDOMNode = function (e) {
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == 'function' ? Error(r(188)) : ((e = Object.keys(e).join(',')), Error(r(268, e)));
        return ((e = y(t)), (e = e !== null ? S(e) : null), (e = e === null ? null : e.stateNode), e);
    };
    var rb = { bundleType: 0, version: '19.2.0', rendererPackageName: 'react-dom', currentDispatcherRef: A, reconcilerVersion: '19.2.0' };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
        var bs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!bs.isDisabled && bs.supportsFiber)
            try {
                ((oe = bs.inject(rb)), (Ke = bs));
            } catch {}
    }
    return (
        (Yi.createRoot = function (e, t) {
            if (!d(e)) throw Error(r(299));
            var n = !1,
                a = '',
                i = dm,
                o = mm,
                f = hm;
            return (
                t != null &&
                    (t.unstable_strictMode === !0 && (n = !0),
                    t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
                    t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
                    t.onCaughtError !== void 0 && (o = t.onCaughtError),
                    t.onRecoverableError !== void 0 && (f = t.onRecoverableError)),
                (t = Zh(e, 1, !1, null, null, n, a, null, i, o, f, lp)),
                (e[Fa] = t.current),
                Qr(e),
                new fu(t)
            );
        }),
        (Yi.hydrateRoot = function (e, t, n) {
            if (!d(e)) throw Error(r(299));
            var a = !1,
                i = '',
                o = dm,
                f = mm,
                v = hm,
                C = null;
            return (
                n != null &&
                    (n.unstable_strictMode === !0 && (a = !0),
                    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
                    n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
                    n.onCaughtError !== void 0 && (f = n.onCaughtError),
                    n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
                    n.formState !== void 0 && (C = n.formState)),
                (t = Zh(e, 1, !0, t, n ?? null, a, i, C, o, f, v, lp)),
                (t.context = Jh(null)),
                (n = t.current),
                (a = qt()),
                (a = tc(a)),
                (i = ea(a)),
                (i.callback = null),
                ta(n, i, a),
                (n = a),
                (t.current.lanes = n),
                Fl(t, n),
                gn(t),
                (e[Fa] = t.current),
                Qr(e),
                new ys(t)
            );
        }),
        (Yi.version = '19.2.0'),
        Yi
    );
}
var pp;
function bb() {
    if (pp) return hu.exports;
    pp = 1;
    function l() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
            } catch (s) {
                console.error(s);
            }
    }
    return (l(), (hu.exports = yb()), hu.exports);
}
var Sb = bb();
class xb extends h.Component {
    constructor(s) {
        (super(s), (this.state = { hasError: !1 }));
    }
    static getDerivedStateFromError(s) {
        return { hasError: !0, error: s };
    }
    componentDidCatch(s, c) {
        console.error('React Error Boundary caught an error:', s, c);
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
function gp(l, s) {
    if (typeof l == 'function') return l(s);
    l != null && (l.current = s);
}
function $p(...l) {
    return s => {
        let c = !1;
        const r = l.map(d => {
            const m = gp(d, s);
            return (!c && typeof m == 'function' && (c = !0), m);
        });
        if (c)
            return () => {
                for (let d = 0; d < r.length; d++) {
                    const m = r[d];
                    typeof m == 'function' ? m() : gp(l[d], null);
                }
            };
    };
}
function ut(...l) {
    return h.useCallback($p(...l), l);
}
function Ji(l) {
    const s = Cb(l),
        c = h.forwardRef((r, d) => {
            const { children: m, ...p } = r,
                g = h.Children.toArray(m),
                b = g.find(Tb);
            if (b) {
                const y = b.props.children,
                    S = g.map(x => (x === b ? (h.Children.count(y) > 1 ? h.Children.only(null) : h.isValidElement(y) ? y.props.children : null) : x));
                return u.jsx(s, { ...p, ref: d, children: h.isValidElement(y) ? h.cloneElement(y, void 0, S) : null });
            }
            return u.jsx(s, { ...p, ref: d, children: m });
        });
    return ((c.displayName = `${l}.Slot`), c);
}
var wb = Ji('Slot');
function Cb(l) {
    const s = h.forwardRef((c, r) => {
        const { children: d, ...m } = c;
        if (h.isValidElement(d)) {
            const p = Nb(d),
                g = Ab(m, d.props);
            return (d.type !== h.Fragment && (g.ref = r ? $p(r, p) : p), h.cloneElement(d, g));
        }
        return h.Children.count(d) > 1 ? h.Children.only(null) : null;
    });
    return ((s.displayName = `${l}.SlotClone`), s);
}
var Eb = Symbol('radix.slottable');
function Tb(l) {
    return h.isValidElement(l) && typeof l.type == 'function' && '__radixId' in l.type && l.type.__radixId === Eb;
}
function Ab(l, s) {
    const c = { ...s };
    for (const r in s) {
        const d = l[r],
            m = s[r];
        /^on[A-Z]/.test(r)
            ? d && m
                ? (c[r] = (...g) => {
                      const b = m(...g);
                      return (d(...g), b);
                  })
                : d && (c[r] = d)
            : r === 'style'
              ? (c[r] = { ...d, ...m })
              : r === 'className' && (c[r] = [d, m].filter(Boolean).join(' '));
    }
    return { ...l, ...c };
}
function Nb(l) {
    let s = Object.getOwnPropertyDescriptor(l.props, 'ref')?.get,
        c = s && 'isReactWarning' in s && s.isReactWarning;
    return c
        ? l.ref
        : ((s = Object.getOwnPropertyDescriptor(l, 'ref')?.get),
          (c = s && 'isReactWarning' in s && s.isReactWarning),
          c ? l.props.ref : l.props.ref || l.ref);
}
function Fp(l) {
    var s,
        c,
        r = '';
    if (typeof l == 'string' || typeof l == 'number') r += l;
    else if (typeof l == 'object')
        if (Array.isArray(l)) {
            var d = l.length;
            for (s = 0; s < d; s++) l[s] && (c = Fp(l[s])) && (r && (r += ' '), (r += c));
        } else for (c in l) l[c] && (r && (r += ' '), (r += c));
    return r;
}
function Pp() {
    for (var l, s, c = 0, r = '', d = arguments.length; c < d; c++) (l = arguments[c]) && (s = Fp(l)) && (r && (r += ' '), (r += s));
    return r;
}
const vp = l => (typeof l == 'boolean' ? `${l}` : l === 0 ? '0' : l),
    yp = Pp,
    eg = (l, s) => c => {
        var r;
        if (s?.variants == null) return yp(l, c?.class, c?.className);
        const { variants: d, defaultVariants: m } = s,
            p = Object.keys(d).map(y => {
                const S = c?.[y],
                    x = m?.[y];
                if (S === null) return null;
                const T = vp(S) || vp(x);
                return d[y][T];
            }),
            g =
                c &&
                Object.entries(c).reduce((y, S) => {
                    let [x, T] = S;
                    return (T === void 0 || (y[x] = T), y);
                }, {}),
            b =
                s == null || (r = s.compoundVariants) === null || r === void 0
                    ? void 0
                    : r.reduce((y, S) => {
                          let { class: x, className: T, ...j } = S;
                          return Object.entries(j).every(R => {
                              let [w, M] = R;
                              return Array.isArray(M) ? M.includes({ ...m, ...g }[w]) : { ...m, ...g }[w] === M;
                          })
                              ? [...y, x, T]
                              : y;
                      }, []);
        return yp(l, p, b, c?.class, c?.className);
    },
    Qu = '-',
    jb = l => {
        const s = Rb(l),
            { conflictingClassGroups: c, conflictingClassGroupModifiers: r } = l;
        return {
            getClassGroupId: p => {
                const g = p.split(Qu);
                return (g[0] === '' && g.length !== 1 && g.shift(), tg(g, s) || Mb(p));
            },
            getConflictingClassGroupIds: (p, g) => {
                const b = c[p] || [];
                return g && r[p] ? [...b, ...r[p]] : b;
            },
        };
    },
    tg = (l, s) => {
        if (l.length === 0) return s.classGroupId;
        const c = l[0],
            r = s.nextPart.get(c),
            d = r ? tg(l.slice(1), r) : void 0;
        if (d) return d;
        if (s.validators.length === 0) return;
        const m = l.join(Qu);
        return s.validators.find(({ validator: p }) => p(m))?.classGroupId;
    },
    bp = /^\[(.+)\]$/,
    Mb = l => {
        if (bp.test(l)) {
            const s = bp.exec(l)[1],
                c = s?.substring(0, s.indexOf(':'));
            if (c) return 'arbitrary..' + c;
        }
    },
    Rb = l => {
        const { theme: s, classGroups: c } = l,
            r = { nextPart: new Map(), validators: [] };
        for (const d in c) Ru(c[d], r, d, s);
        return r;
    },
    Ru = (l, s, c, r) => {
        l.forEach(d => {
            if (typeof d == 'string') {
                const m = d === '' ? s : Sp(s, d);
                m.classGroupId = c;
                return;
            }
            if (typeof d == 'function') {
                if (kb(d)) {
                    Ru(d(r), s, c, r);
                    return;
                }
                s.validators.push({ validator: d, classGroupId: c });
                return;
            }
            Object.entries(d).forEach(([m, p]) => {
                Ru(p, Sp(s, m), c, r);
            });
        });
    },
    Sp = (l, s) => {
        let c = l;
        return (
            s.split(Qu).forEach(r => {
                (c.nextPart.has(r) || c.nextPart.set(r, { nextPart: new Map(), validators: [] }), (c = c.nextPart.get(r)));
            }),
            c
        );
    },
    kb = l => l.isThemeGetter,
    Ob = l => {
        if (l < 1) return { get: () => {}, set: () => {} };
        let s = 0,
            c = new Map(),
            r = new Map();
        const d = (m, p) => {
            (c.set(m, p), s++, s > l && ((s = 0), (r = c), (c = new Map())));
        };
        return {
            get(m) {
                let p = c.get(m);
                if (p !== void 0) return p;
                if ((p = r.get(m)) !== void 0) return (d(m, p), p);
            },
            set(m, p) {
                c.has(m) ? c.set(m, p) : d(m, p);
            },
        };
    },
    ku = '!',
    Ou = ':',
    zb = Ou.length,
    Db = l => {
        const { prefix: s, experimentalParseClassName: c } = l;
        let r = d => {
            const m = [];
            let p = 0,
                g = 0,
                b = 0,
                y;
            for (let R = 0; R < d.length; R++) {
                let w = d[R];
                if (p === 0 && g === 0) {
                    if (w === Ou) {
                        (m.push(d.slice(b, R)), (b = R + zb));
                        continue;
                    }
                    if (w === '/') {
                        y = R;
                        continue;
                    }
                }
                w === '[' ? p++ : w === ']' ? p-- : w === '(' ? g++ : w === ')' && g--;
            }
            const S = m.length === 0 ? d : d.substring(b),
                x = _b(S),
                T = x !== S,
                j = y && y > b ? y - b : void 0;
            return { modifiers: m, hasImportantModifier: T, baseClassName: x, maybePostfixModifierPosition: j };
        };
        if (s) {
            const d = s + Ou,
                m = r;
            r = p =>
                p.startsWith(d)
                    ? m(p.substring(d.length))
                    : { isExternal: !0, modifiers: [], hasImportantModifier: !1, baseClassName: p, maybePostfixModifierPosition: void 0 };
        }
        if (c) {
            const d = r;
            r = m => c({ className: m, parseClassName: d });
        }
        return r;
    },
    _b = l => (l.endsWith(ku) ? l.substring(0, l.length - 1) : l.startsWith(ku) ? l.substring(1) : l),
    Lb = l => {
        const s = Object.fromEntries(l.orderSensitiveModifiers.map(r => [r, !0]));
        return r => {
            if (r.length <= 1) return r;
            const d = [];
            let m = [];
            return (
                r.forEach(p => {
                    p[0] === '[' || s[p] ? (d.push(...m.sort(), p), (m = [])) : m.push(p);
                }),
                d.push(...m.sort()),
                d
            );
        };
    },
    Ub = l => ({ cache: Ob(l.cacheSize), parseClassName: Db(l), sortModifiers: Lb(l), ...jb(l) }),
    Bb = /\s+/,
    Hb = (l, s) => {
        const { parseClassName: c, getClassGroupId: r, getConflictingClassGroupIds: d, sortModifiers: m } = s,
            p = [],
            g = l.trim().split(Bb);
        let b = '';
        for (let y = g.length - 1; y >= 0; y -= 1) {
            const S = g[y],
                { isExternal: x, modifiers: T, hasImportantModifier: j, baseClassName: R, maybePostfixModifierPosition: w } = c(S);
            if (x) {
                b = S + (b.length > 0 ? ' ' + b : b);
                continue;
            }
            let M = !!w,
                U = r(M ? R.substring(0, w) : R);
            if (!U) {
                if (!M) {
                    b = S + (b.length > 0 ? ' ' + b : b);
                    continue;
                }
                if (((U = r(R)), !U)) {
                    b = S + (b.length > 0 ? ' ' + b : b);
                    continue;
                }
                M = !1;
            }
            const B = m(T).join(':'),
                H = j ? B + ku : B,
                Z = H + U;
            if (p.includes(Z)) continue;
            p.push(Z);
            const $ = d(U, M);
            for (let ne = 0; ne < $.length; ++ne) {
                const z = $[ne];
                p.push(H + z);
            }
            b = S + (b.length > 0 ? ' ' + b : b);
        }
        return b;
    };
function Vb() {
    let l = 0,
        s,
        c,
        r = '';
    for (; l < arguments.length; ) (s = arguments[l++]) && (c = ng(s)) && (r && (r += ' '), (r += c));
    return r;
}
const ng = l => {
    if (typeof l == 'string') return l;
    let s,
        c = '';
    for (let r = 0; r < l.length; r++) l[r] && (s = ng(l[r])) && (c && (c += ' '), (c += s));
    return c;
};
function qb(l, ...s) {
    let c,
        r,
        d,
        m = p;
    function p(b) {
        const y = s.reduce((S, x) => x(S), l());
        return ((c = Ub(y)), (r = c.cache.get), (d = c.cache.set), (m = g), g(b));
    }
    function g(b) {
        const y = r(b);
        if (y) return y;
        const S = Hb(b, c);
        return (d(b, S), S);
    }
    return function () {
        return m(Vb.apply(null, arguments));
    };
}
const rt = l => {
        const s = c => c[l] || [];
        return ((s.isThemeGetter = !0), s);
    },
    ag = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    lg = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    Gb = /^\d+\/\d+$/,
    Yb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    Xb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Kb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    Qb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    Zb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Ll = l => Gb.test(l),
    Ae = l => !!l && !Number.isNaN(Number(l)),
    va = l => !!l && Number.isInteger(Number(l)),
    yu = l => l.endsWith('%') && Ae(l.slice(0, -1)),
    Gn = l => Yb.test(l),
    Jb = () => !0,
    Ib = l => Xb.test(l) && !Kb.test(l),
    ig = () => !1,
    Wb = l => Qb.test(l),
    $b = l => Zb.test(l),
    Fb = l => !ce(l) && !re(l),
    Pb = l => Xl(l, cg, ig),
    ce = l => ag.test(l),
    Ka = l => Xl(l, rg, Ib),
    bu = l => Xl(l, lS, Ae),
    xp = l => Xl(l, og, ig),
    eS = l => Xl(l, sg, $b),
    Ss = l => Xl(l, ug, Wb),
    re = l => lg.test(l),
    Xi = l => Kl(l, rg),
    tS = l => Kl(l, iS),
    wp = l => Kl(l, og),
    nS = l => Kl(l, cg),
    aS = l => Kl(l, sg),
    xs = l => Kl(l, ug, !0),
    Xl = (l, s, c) => {
        const r = ag.exec(l);
        return r ? (r[1] ? s(r[1]) : c(r[2])) : !1;
    },
    Kl = (l, s, c = !1) => {
        const r = lg.exec(l);
        return r ? (r[1] ? s(r[1]) : c) : !1;
    },
    og = l => l === 'position' || l === 'percentage',
    sg = l => l === 'image' || l === 'url',
    cg = l => l === 'length' || l === 'size' || l === 'bg-size',
    rg = l => l === 'length',
    lS = l => l === 'number',
    iS = l => l === 'family-name',
    ug = l => l === 'shadow',
    oS = () => {
        const l = rt('color'),
            s = rt('font'),
            c = rt('text'),
            r = rt('font-weight'),
            d = rt('tracking'),
            m = rt('leading'),
            p = rt('breakpoint'),
            g = rt('container'),
            b = rt('spacing'),
            y = rt('radius'),
            S = rt('shadow'),
            x = rt('inset-shadow'),
            T = rt('text-shadow'),
            j = rt('drop-shadow'),
            R = rt('blur'),
            w = rt('perspective'),
            M = rt('aspect'),
            U = rt('ease'),
            B = rt('animate'),
            H = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
            Z = () => [
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
            $ = () => [...Z(), re, ce],
            ne = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
            z = () => ['auto', 'contain', 'none'],
            X = () => [re, ce, b],
            ae = () => [Ll, 'full', 'auto', ...X()],
            te = () => [va, 'none', 'subgrid', re, ce],
            ge = () => ['auto', { span: ['full', va, re, ce] }, va, re, ce],
            le = () => [va, 'auto', re, ce],
            fe = () => ['auto', 'min', 'max', 'fr', re, ce],
            ie = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch', 'baseline', 'center-safe', 'end-safe'],
            K = () => ['start', 'end', 'center', 'stretch', 'center-safe', 'end-safe'],
            A = () => ['auto', ...X()],
            G = () => [Ll, 'auto', 'full', 'dvw', 'dvh', 'lvw', 'lvh', 'svw', 'svh', 'min', 'max', 'fit', ...X()],
            O = () => [l, re, ce],
            ee = () => [...Z(), wp, xp, { position: [re, ce] }],
            de = () => ['no-repeat', { repeat: ['', 'x', 'y', 'space', 'round'] }],
            E = () => ['auto', 'cover', 'contain', nS, Pb, { size: [re, ce] }],
            q = () => [yu, Xi, Ka],
            W = () => ['', 'none', 'full', y, re, ce],
            P = () => ['', Ae, Xi, Ka],
            ue = () => ['solid', 'dashed', 'dotted', 'double'],
            he = () => [
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
            F = () => [Ae, yu, wp, xp],
            be = () => ['', 'none', R, re, ce],
            ye = () => ['none', Ae, re, ce],
            we = () => ['none', Ae, re, ce],
            Te = () => [Ae, re, ce],
            Me = () => [Ll, 'full', ...X()];
        return {
            cacheSize: 500,
            theme: {
                animate: ['spin', 'ping', 'pulse', 'bounce'],
                aspect: ['video'],
                blur: [Gn],
                breakpoint: [Gn],
                color: [Jb],
                container: [Gn],
                'drop-shadow': [Gn],
                ease: ['in', 'out', 'in-out'],
                font: [Fb],
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
                aspect: [{ aspect: ['auto', 'square', Ll, ce, re, M] }],
                container: ['container'],
                columns: [{ columns: [Ae, ce, re, g] }],
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
                'object-position': [{ object: $() }],
                overflow: [{ overflow: ne() }],
                'overflow-x': [{ 'overflow-x': ne() }],
                'overflow-y': [{ 'overflow-y': ne() }],
                overscroll: [{ overscroll: z() }],
                'overscroll-x': [{ 'overscroll-x': z() }],
                'overscroll-y': [{ 'overscroll-y': z() }],
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
                z: [{ z: [va, 'auto', re, ce] }],
                basis: [{ basis: [Ll, 'full', 'auto', g, ...X()] }],
                'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
                'flex-wrap': [{ flex: ['nowrap', 'wrap', 'wrap-reverse'] }],
                flex: [{ flex: [Ae, Ll, 'auto', 'initial', 'none', ce] }],
                grow: [{ grow: ['', Ae, re, ce] }],
                shrink: [{ shrink: ['', Ae, re, ce] }],
                order: [{ order: [va, 'first', 'last', 'none', re, ce] }],
                'grid-cols': [{ 'grid-cols': te() }],
                'col-start-end': [{ col: ge() }],
                'col-start': [{ 'col-start': le() }],
                'col-end': [{ 'col-end': le() }],
                'grid-rows': [{ 'grid-rows': te() }],
                'row-start-end': [{ row: ge() }],
                'row-start': [{ 'row-start': le() }],
                'row-end': [{ 'row-end': le() }],
                'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
                'auto-cols': [{ 'auto-cols': fe() }],
                'auto-rows': [{ 'auto-rows': fe() }],
                gap: [{ gap: X() }],
                'gap-x': [{ 'gap-x': X() }],
                'gap-y': [{ 'gap-y': X() }],
                'justify-content': [{ justify: [...ie(), 'normal'] }],
                'justify-items': [{ 'justify-items': [...K(), 'normal'] }],
                'justify-self': [{ 'justify-self': ['auto', ...K()] }],
                'align-content': [{ content: ['normal', ...ie()] }],
                'align-items': [{ items: [...K(), { baseline: ['', 'last'] }] }],
                'align-self': [{ self: ['auto', ...K(), { baseline: ['', 'last'] }] }],
                'place-content': [{ 'place-content': ie() }],
                'place-items': [{ 'place-items': [...K(), 'baseline'] }],
                'place-self': [{ 'place-self': ['auto', ...K()] }],
                p: [{ p: X() }],
                px: [{ px: X() }],
                py: [{ py: X() }],
                ps: [{ ps: X() }],
                pe: [{ pe: X() }],
                pt: [{ pt: X() }],
                pr: [{ pr: X() }],
                pb: [{ pb: X() }],
                pl: [{ pl: X() }],
                m: [{ m: A() }],
                mx: [{ mx: A() }],
                my: [{ my: A() }],
                ms: [{ ms: A() }],
                me: [{ me: A() }],
                mt: [{ mt: A() }],
                mr: [{ mr: A() }],
                mb: [{ mb: A() }],
                ml: [{ ml: A() }],
                'space-x': [{ 'space-x': X() }],
                'space-x-reverse': ['space-x-reverse'],
                'space-y': [{ 'space-y': X() }],
                'space-y-reverse': ['space-y-reverse'],
                size: [{ size: G() }],
                w: [{ w: [g, 'screen', ...G()] }],
                'min-w': [{ 'min-w': [g, 'screen', 'none', ...G()] }],
                'max-w': [{ 'max-w': [g, 'screen', 'none', 'prose', { screen: [p] }, ...G()] }],
                h: [{ h: ['screen', 'lh', ...G()] }],
                'min-h': [{ 'min-h': ['screen', 'lh', 'none', ...G()] }],
                'max-h': [{ 'max-h': ['screen', 'lh', ...G()] }],
                'font-size': [{ text: ['base', c, Xi, Ka] }],
                'font-smoothing': ['antialiased', 'subpixel-antialiased'],
                'font-style': ['italic', 'not-italic'],
                'font-weight': [{ font: [r, re, bu] }],
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
                            yu,
                            ce,
                        ],
                    },
                ],
                'font-family': [{ font: [tS, ce, s] }],
                'fvn-normal': ['normal-nums'],
                'fvn-ordinal': ['ordinal'],
                'fvn-slashed-zero': ['slashed-zero'],
                'fvn-figure': ['lining-nums', 'oldstyle-nums'],
                'fvn-spacing': ['proportional-nums', 'tabular-nums'],
                'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
                tracking: [{ tracking: [d, re, ce] }],
                'line-clamp': [{ 'line-clamp': [Ae, 'none', re, bu] }],
                leading: [{ leading: [m, ...X()] }],
                'list-image': [{ 'list-image': ['none', re, ce] }],
                'list-style-position': [{ list: ['inside', 'outside'] }],
                'list-style-type': [{ list: ['disc', 'decimal', 'none', re, ce] }],
                'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
                'placeholder-color': [{ placeholder: O() }],
                'text-color': [{ text: O() }],
                'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
                'text-decoration-style': [{ decoration: [...ue(), 'wavy'] }],
                'text-decoration-thickness': [{ decoration: [Ae, 'from-font', 'auto', re, Ka] }],
                'text-decoration-color': [{ decoration: O() }],
                'underline-offset': [{ 'underline-offset': [Ae, 'auto', re, ce] }],
                'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
                'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
                'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
                indent: [{ indent: X() }],
                'vertical-align': [{ align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', re, ce] }],
                whitespace: [{ whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] }],
                break: [{ break: ['normal', 'words', 'all', 'keep'] }],
                wrap: [{ wrap: ['break-word', 'anywhere', 'normal'] }],
                hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
                content: [{ content: ['none', re, ce] }],
                'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
                'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
                'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
                'bg-position': [{ bg: ee() }],
                'bg-repeat': [{ bg: de() }],
                'bg-size': [{ bg: E() }],
                'bg-image': [
                    {
                        bg: [
                            'none',
                            { linear: [{ to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, va, re, ce], radial: ['', re, ce], conic: [va, re, ce] },
                            aS,
                            eS,
                        ],
                    },
                ],
                'bg-color': [{ bg: O() }],
                'gradient-from-pos': [{ from: q() }],
                'gradient-via-pos': [{ via: q() }],
                'gradient-to-pos': [{ to: q() }],
                'gradient-from': [{ from: O() }],
                'gradient-via': [{ via: O() }],
                'gradient-to': [{ to: O() }],
                rounded: [{ rounded: W() }],
                'rounded-s': [{ 'rounded-s': W() }],
                'rounded-e': [{ 'rounded-e': W() }],
                'rounded-t': [{ 'rounded-t': W() }],
                'rounded-r': [{ 'rounded-r': W() }],
                'rounded-b': [{ 'rounded-b': W() }],
                'rounded-l': [{ 'rounded-l': W() }],
                'rounded-ss': [{ 'rounded-ss': W() }],
                'rounded-se': [{ 'rounded-se': W() }],
                'rounded-ee': [{ 'rounded-ee': W() }],
                'rounded-es': [{ 'rounded-es': W() }],
                'rounded-tl': [{ 'rounded-tl': W() }],
                'rounded-tr': [{ 'rounded-tr': W() }],
                'rounded-br': [{ 'rounded-br': W() }],
                'rounded-bl': [{ 'rounded-bl': W() }],
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
                'border-style': [{ border: [...ue(), 'hidden', 'none'] }],
                'divide-style': [{ divide: [...ue(), 'hidden', 'none'] }],
                'border-color': [{ border: O() }],
                'border-color-x': [{ 'border-x': O() }],
                'border-color-y': [{ 'border-y': O() }],
                'border-color-s': [{ 'border-s': O() }],
                'border-color-e': [{ 'border-e': O() }],
                'border-color-t': [{ 'border-t': O() }],
                'border-color-r': [{ 'border-r': O() }],
                'border-color-b': [{ 'border-b': O() }],
                'border-color-l': [{ 'border-l': O() }],
                'divide-color': [{ divide: O() }],
                'outline-style': [{ outline: [...ue(), 'none', 'hidden'] }],
                'outline-offset': [{ 'outline-offset': [Ae, re, ce] }],
                'outline-w': [{ outline: ['', Ae, Xi, Ka] }],
                'outline-color': [{ outline: O() }],
                shadow: [{ shadow: ['', 'none', S, xs, Ss] }],
                'shadow-color': [{ shadow: O() }],
                'inset-shadow': [{ 'inset-shadow': ['none', x, xs, Ss] }],
                'inset-shadow-color': [{ 'inset-shadow': O() }],
                'ring-w': [{ ring: P() }],
                'ring-w-inset': ['ring-inset'],
                'ring-color': [{ ring: O() }],
                'ring-offset-w': [{ 'ring-offset': [Ae, Ka] }],
                'ring-offset-color': [{ 'ring-offset': O() }],
                'inset-ring-w': [{ 'inset-ring': P() }],
                'inset-ring-color': [{ 'inset-ring': O() }],
                'text-shadow': [{ 'text-shadow': ['none', T, xs, Ss] }],
                'text-shadow-color': [{ 'text-shadow': O() }],
                opacity: [{ opacity: [Ae, re, ce] }],
                'mix-blend': [{ 'mix-blend': [...he(), 'plus-darker', 'plus-lighter'] }],
                'bg-blend': [{ 'bg-blend': he() }],
                'mask-clip': [{ 'mask-clip': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] }, 'mask-no-clip'],
                'mask-composite': [{ mask: ['add', 'subtract', 'intersect', 'exclude'] }],
                'mask-image-linear-pos': [{ 'mask-linear': [Ae] }],
                'mask-image-linear-from-pos': [{ 'mask-linear-from': F() }],
                'mask-image-linear-to-pos': [{ 'mask-linear-to': F() }],
                'mask-image-linear-from-color': [{ 'mask-linear-from': O() }],
                'mask-image-linear-to-color': [{ 'mask-linear-to': O() }],
                'mask-image-t-from-pos': [{ 'mask-t-from': F() }],
                'mask-image-t-to-pos': [{ 'mask-t-to': F() }],
                'mask-image-t-from-color': [{ 'mask-t-from': O() }],
                'mask-image-t-to-color': [{ 'mask-t-to': O() }],
                'mask-image-r-from-pos': [{ 'mask-r-from': F() }],
                'mask-image-r-to-pos': [{ 'mask-r-to': F() }],
                'mask-image-r-from-color': [{ 'mask-r-from': O() }],
                'mask-image-r-to-color': [{ 'mask-r-to': O() }],
                'mask-image-b-from-pos': [{ 'mask-b-from': F() }],
                'mask-image-b-to-pos': [{ 'mask-b-to': F() }],
                'mask-image-b-from-color': [{ 'mask-b-from': O() }],
                'mask-image-b-to-color': [{ 'mask-b-to': O() }],
                'mask-image-l-from-pos': [{ 'mask-l-from': F() }],
                'mask-image-l-to-pos': [{ 'mask-l-to': F() }],
                'mask-image-l-from-color': [{ 'mask-l-from': O() }],
                'mask-image-l-to-color': [{ 'mask-l-to': O() }],
                'mask-image-x-from-pos': [{ 'mask-x-from': F() }],
                'mask-image-x-to-pos': [{ 'mask-x-to': F() }],
                'mask-image-x-from-color': [{ 'mask-x-from': O() }],
                'mask-image-x-to-color': [{ 'mask-x-to': O() }],
                'mask-image-y-from-pos': [{ 'mask-y-from': F() }],
                'mask-image-y-to-pos': [{ 'mask-y-to': F() }],
                'mask-image-y-from-color': [{ 'mask-y-from': O() }],
                'mask-image-y-to-color': [{ 'mask-y-to': O() }],
                'mask-image-radial': [{ 'mask-radial': [re, ce] }],
                'mask-image-radial-from-pos': [{ 'mask-radial-from': F() }],
                'mask-image-radial-to-pos': [{ 'mask-radial-to': F() }],
                'mask-image-radial-from-color': [{ 'mask-radial-from': O() }],
                'mask-image-radial-to-color': [{ 'mask-radial-to': O() }],
                'mask-image-radial-shape': [{ 'mask-radial': ['circle', 'ellipse'] }],
                'mask-image-radial-size': [{ 'mask-radial': [{ closest: ['side', 'corner'], farthest: ['side', 'corner'] }] }],
                'mask-image-radial-pos': [{ 'mask-radial-at': Z() }],
                'mask-image-conic-pos': [{ 'mask-conic': [Ae] }],
                'mask-image-conic-from-pos': [{ 'mask-conic-from': F() }],
                'mask-image-conic-to-pos': [{ 'mask-conic-to': F() }],
                'mask-image-conic-from-color': [{ 'mask-conic-from': O() }],
                'mask-image-conic-to-color': [{ 'mask-conic-to': O() }],
                'mask-mode': [{ mask: ['alpha', 'luminance', 'match'] }],
                'mask-origin': [{ 'mask-origin': ['border', 'padding', 'content', 'fill', 'stroke', 'view'] }],
                'mask-position': [{ mask: ee() }],
                'mask-repeat': [{ mask: de() }],
                'mask-size': [{ mask: E() }],
                'mask-type': [{ 'mask-type': ['alpha', 'luminance'] }],
                'mask-image': [{ mask: ['none', re, ce] }],
                filter: [{ filter: ['', 'none', re, ce] }],
                blur: [{ blur: be() }],
                brightness: [{ brightness: [Ae, re, ce] }],
                contrast: [{ contrast: [Ae, re, ce] }],
                'drop-shadow': [{ 'drop-shadow': ['', 'none', j, xs, Ss] }],
                'drop-shadow-color': [{ 'drop-shadow': O() }],
                grayscale: [{ grayscale: ['', Ae, re, ce] }],
                'hue-rotate': [{ 'hue-rotate': [Ae, re, ce] }],
                invert: [{ invert: ['', Ae, re, ce] }],
                saturate: [{ saturate: [Ae, re, ce] }],
                sepia: [{ sepia: ['', Ae, re, ce] }],
                'backdrop-filter': [{ 'backdrop-filter': ['', 'none', re, ce] }],
                'backdrop-blur': [{ 'backdrop-blur': be() }],
                'backdrop-brightness': [{ 'backdrop-brightness': [Ae, re, ce] }],
                'backdrop-contrast': [{ 'backdrop-contrast': [Ae, re, ce] }],
                'backdrop-grayscale': [{ 'backdrop-grayscale': ['', Ae, re, ce] }],
                'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [Ae, re, ce] }],
                'backdrop-invert': [{ 'backdrop-invert': ['', Ae, re, ce] }],
                'backdrop-opacity': [{ 'backdrop-opacity': [Ae, re, ce] }],
                'backdrop-saturate': [{ 'backdrop-saturate': [Ae, re, ce] }],
                'backdrop-sepia': [{ 'backdrop-sepia': ['', Ae, re, ce] }],
                'border-collapse': [{ border: ['collapse', 'separate'] }],
                'border-spacing': [{ 'border-spacing': X() }],
                'border-spacing-x': [{ 'border-spacing-x': X() }],
                'border-spacing-y': [{ 'border-spacing-y': X() }],
                'table-layout': [{ table: ['auto', 'fixed'] }],
                caption: [{ caption: ['top', 'bottom'] }],
                transition: [{ transition: ['', 'all', 'colors', 'opacity', 'shadow', 'transform', 'none', re, ce] }],
                'transition-behavior': [{ transition: ['normal', 'discrete'] }],
                duration: [{ duration: [Ae, 'initial', re, ce] }],
                ease: [{ ease: ['linear', 'initial', U, re, ce] }],
                delay: [{ delay: [Ae, re, ce] }],
                animate: [{ animate: ['none', B, re, ce] }],
                backface: [{ backface: ['hidden', 'visible'] }],
                perspective: [{ perspective: [w, re, ce] }],
                'perspective-origin': [{ 'perspective-origin': $() }],
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
                transform: [{ transform: [re, ce, '', 'none', 'gpu', 'cpu'] }],
                'transform-origin': [{ origin: $() }],
                'transform-style': [{ transform: ['3d', 'flat'] }],
                translate: [{ translate: Me() }],
                'translate-x': [{ 'translate-x': Me() }],
                'translate-y': [{ 'translate-y': Me() }],
                'translate-z': [{ 'translate-z': Me() }],
                'translate-none': ['translate-none'],
                accent: [{ accent: O() }],
                appearance: [{ appearance: ['none', 'auto'] }],
                'caret-color': [{ caret: O() }],
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
                            re,
                            ce,
                        ],
                    },
                ],
                'field-sizing': [{ 'field-sizing': ['fixed', 'content'] }],
                'pointer-events': [{ 'pointer-events': ['auto', 'none'] }],
                resize: [{ resize: ['none', '', 'y', 'x'] }],
                'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
                'scroll-m': [{ 'scroll-m': X() }],
                'scroll-mx': [{ 'scroll-mx': X() }],
                'scroll-my': [{ 'scroll-my': X() }],
                'scroll-ms': [{ 'scroll-ms': X() }],
                'scroll-me': [{ 'scroll-me': X() }],
                'scroll-mt': [{ 'scroll-mt': X() }],
                'scroll-mr': [{ 'scroll-mr': X() }],
                'scroll-mb': [{ 'scroll-mb': X() }],
                'scroll-ml': [{ 'scroll-ml': X() }],
                'scroll-p': [{ 'scroll-p': X() }],
                'scroll-px': [{ 'scroll-px': X() }],
                'scroll-py': [{ 'scroll-py': X() }],
                'scroll-ps': [{ 'scroll-ps': X() }],
                'scroll-pe': [{ 'scroll-pe': X() }],
                'scroll-pt': [{ 'scroll-pt': X() }],
                'scroll-pr': [{ 'scroll-pr': X() }],
                'scroll-pb': [{ 'scroll-pb': X() }],
                'scroll-pl': [{ 'scroll-pl': X() }],
                'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
                'snap-stop': [{ snap: ['normal', 'always'] }],
                'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
                'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
                touch: [{ touch: ['auto', 'none', 'manipulation'] }],
                'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
                'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
                'touch-pz': ['touch-pinch-zoom'],
                select: [{ select: ['none', 'text', 'all', 'auto'] }],
                'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', re, ce] }],
                fill: [{ fill: ['none', ...O()] }],
                'stroke-w': [{ stroke: [Ae, Xi, Ka, bu] }],
                stroke: [{ stroke: ['none', ...O()] }],
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
    sS = qb(oS);
function St(...l) {
    return sS(Pp(l));
}
const cS = eg(
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
    Et = h.forwardRef(({ className: l, variant: s, size: c, asChild: r = !1, ...d }, m) => {
        const p = r ? wb : 'button';
        return u.jsx(p, { className: St(cS({ variant: s, size: c, className: l })), ref: m, ...d });
    });
Et.displayName = 'Button';
const rS = ({ currentView: l, onViewChange: s, onMinimize: c, onClose: r }) => {
    const [d, m] = h.useState(''),
        [p, g] = h.useState(null);
    h.useEffect(() => {
        if (l === 'assistant') {
            const M = setInterval(() => {
                m('0s');
            }, 1e3);
            return (
                g(M),
                () => {
                    M && clearInterval(M);
                }
            );
        } else (p && (clearInterval(p), g(null)), m(''));
    }, [l, p]);
    const b = () =>
            ({
                onboarding: 'Welcome to Cheating Daddy',
                main: 'Cheating Daddy',
                customize: 'Customize',
                help: 'Help & Shortcuts',
                history: 'Conversation History',
                advanced: 'Advanced Tools',
                assistant: 'Cheating Daddy',
            })[l] || 'Cheating Daddy',
        y = () => ['customize', 'help', 'history', 'advanced'].includes(l),
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
        j = () =>
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
            u.jsx('div', { className: 'header-title', children: b() }),
            u.jsxs('div', {
                className: 'header-actions',
                children: [
                    l === 'assistant' &&
                        u.jsxs(u.Fragment, {
                            children: [
                                u.jsx('span', { children: d }),
                                u.jsx('span', { children: 'Ready' }),
                                u.jsxs(Et, {
                                    className: 'button',
                                    variant: 'ghost',
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
                                u.jsx(Et, { className: 'icon-button window-close', variant: 'ghost', onClick: r, children: u.jsx(R, {}) }),
                            ],
                        }),
                    l === 'main' &&
                        u.jsxs(u.Fragment, {
                            children: [
                                u.jsx(Et, {
                                    className: 'icon-button',
                                    variant: 'ghost',
                                    title: 'Conversation History',
                                    onClick: () => s('history'),
                                    children: u.jsx(S, {}),
                                }),
                                u.jsx(Et, {
                                    className: 'icon-button',
                                    variant: 'ghost',
                                    title: 'Advanced Tools',
                                    onClick: () => s('advanced'),
                                    children: u.jsx(j, {}),
                                }),
                                u.jsx(Et, {
                                    className: 'icon-button',
                                    variant: 'ghost',
                                    title: 'Customize',
                                    onClick: () => s('customize'),
                                    children: u.jsx(x, {}),
                                }),
                                u.jsx(Et, {
                                    className: 'icon-button',
                                    variant: 'ghost',
                                    title: 'Help & Shortcuts',
                                    onClick: () => s('help'),
                                    children: u.jsx(T, {}),
                                }),
                                u.jsx(Et, { className: 'icon-button window-close', variant: 'ghost', onClick: r, children: u.jsx(R, {}) }),
                            ],
                        }),
                    l === 'onboarding' &&
                        u.jsx(Et, { className: 'icon-button window-close', variant: 'ghost', onClick: () => s('main'), children: u.jsx(R, {}) }),
                    y() &&
                        u.jsxs(u.Fragment, {
                            children: [
                                u.jsx(Et, {
                                    className: 'icon-button',
                                    variant: 'ghost',
                                    title: 'Back to Main',
                                    onClick: () => s('main'),
                                    children: u.jsx(w, {}),
                                }),
                                u.jsx(Et, { className: 'icon-button window-close', variant: 'ghost', onClick: r, children: u.jsx(R, {}) }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
async function Us() {
    try {
        const l = window;
        if (l.require) {
            const { ipcRenderer: s } = l.require('electron'),
                c = await s.invoke('update-sizes');
            c.success ? console.log('Window resized for current view') : console.error('Failed to resize window:', c.error);
        }
    } catch (l) {
        console.error('Error resizing window:', l);
    }
}
const fg = h.forwardRef(({ className: l, type: s, ...c }, r) =>
    u.jsx('input', {
        type: s,
        className: St(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            l
        ),
        ref: r,
        ...c,
    })
);
fg.displayName = 'Input';
const uS = ({ onStart: l, onAPIKeyHelp: s, isInitializing: c, onLayoutModeChange: r, showApiKeyError: d = !1 }) => {
        const [m, p] = h.useState(() => localStorage.getItem('apiKey') || ''),
            [g, b] = h.useState(d);
        (h.useEffect(() => {
            b(d);
        }, [d]),
            h.useEffect(() => {
                const R = (w, M) => {};
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
                    w && w !== 'normal' && r(w);
                })(),
                    Us());
            }, [r]));
        const y = h.useCallback(R => {
            (navigator.platform.toUpperCase().indexOf('MAC') >= 0 ? R.metaKey && R.key === 'Enter' : R.ctrlKey && R.key === 'Enter') &&
                (R.preventDefault(), x());
        }, []);
        h.useEffect(() => (document.addEventListener('keydown', y), () => document.removeEventListener('keydown', y)), [y]);
        const S = R => {
                const w = R.target.value;
                (p(w), localStorage.setItem('apiKey', w), g && b(!1));
            },
            x = () => {
                c || l();
            },
            T = () => {
                s();
            };
        h.useCallback(() => {
            (b(!0),
                setTimeout(() => {
                    b(!1);
                }, 1e3));
        }, []);
        const j = () => {
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
                M = u.jsxs('svg', {
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
                ? u.jsxs(u.Fragment, { children: ['Start Session ', u.jsxs('span', { className: 'shortcut-icons', children: [w, M] })] })
                : u.jsxs(u.Fragment, { children: ['Start Session ', u.jsxs('span', { className: 'shortcut-icons', children: ['Ctrl', M] })] });
        };
        return u.jsx(u.Fragment, {
            children: u.jsxs('div', {
                className: 'main-view',
                children: [
                    u.jsx('div', { className: 'welcome', children: 'Welcome' }),
                    u.jsxs('div', {
                        className: 'input-group',
                        children: [
                            u.jsx(fg, {
                                type: 'password',
                                placeholder: 'Enter your Gemini API Key',
                                value: m,
                                onChange: S,
                                className: St(g && 'api-key-error'),
                            }),
                            u.jsx(Et, {
                                onClick: x,
                                className: St('start-button', c && 'initializing'),
                                disabled: c,
                                variant: 'default',
                                children: j(),
                            }),
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
    fS = ({
        responses: l,
        currentResponseIndex: s,
        selectedProfile: c,
        onSendText: r,
        shouldAnimateResponse: d,
        savedResponses: m,
        onResponseIndexChanged: p,
        onStopSession: g,
    }) => {
        const [b, y] = h.useState(m),
            [S, x] = h.useState(0),
            T = h.useRef(null),
            j = h.useRef(null),
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
                const K = R();
                return l.length > 0 && s >= 0 ? l[s] : `Hey, I'm listening to your ${K[c] || 'session'}?`;
            }, [l, s, c, R]),
            M = h.useCallback(() => {
                const K = localStorage.getItem('fontSize');
                if (K !== null) {
                    const A = parseInt(K, 10) || 20;
                    document.documentElement.style.setProperty('--response-font-size', `${A}px`);
                }
            }, []);
        (h.useEffect(() => {
            M();
        }, [M]),
            h.useEffect(() => {
                y(m);
            }, [m]));
        const U = h.useCallback(() => (l.length > 0 ? `${s + 1}/${l.length}` : ''), [l.length, s]),
            B = h.useCallback(() => {
                const K = w();
                return b.some(A => A.response === K);
            }, [w, b]),
            H = h.useCallback(() => {
                if (s > 0) {
                    const K = s - 1;
                    p?.(K);
                }
            }, [s, p]),
            Z = h.useCallback(() => {
                if (s < l.length - 1) {
                    const K = s + 1;
                    p?.(K);
                }
            }, [s, l.length, p]),
            $ = h.useCallback(() => {
                if (T.current) {
                    const K = T.current,
                        A = K.clientHeight * 0.3;
                    K.scrollTop = Math.max(0, K.scrollTop - A);
                }
            }, []),
            ne = h.useCallback(() => {
                if (T.current) {
                    const K = T.current,
                        A = K.clientHeight * 0.3;
                    K.scrollTop = Math.min(K.scrollHeight - K.clientHeight, K.scrollTop + A);
                }
            }, []);
        h.useEffect(() => {
            if (window.electron?.ipcRenderer) {
                const K = window.electron.ipcRenderer,
                    A = () => {
                        (console.log('Received navigate-previous-response message'), H());
                    },
                    G = () => {
                        (console.log('Received navigate-next-response message'), Z());
                    },
                    O = () => {
                        (console.log('Received scroll-response-up message'), $());
                    },
                    ee = () => {
                        (console.log('Received scroll-response-down message'), ne());
                    };
                return (
                    K.on('navigate-previous-response', A),
                    K.on('navigate-next-response', G),
                    K.on('scroll-response-up', O),
                    K.on('scroll-response-down', ee),
                    () => {
                        (K.removeAllListeners('navigate-previous-response'),
                            K.removeAllListeners('navigate-next-response'),
                            K.removeAllListeners('scroll-response-up'),
                            K.removeAllListeners('scroll-response-down'));
                    }
                );
            }
        }, [H, Z, $, ne]);
        const z = h.useCallback(async () => {
                if (j.current && j.current.value.trim()) {
                    const K = j.current.value.trim();
                    ((j.current.value = ''), await r(K));
                }
            }, [r]),
            X = h.useCallback(
                K => {
                    K.key === 'Enter' && !K.shiftKey && (K.preventDefault(), z());
                },
                [z]
            ),
            ae = h.useCallback(() => {
                const K = w();
                if (K && !B()) {
                    const A = [...b, { response: K, timestamp: new Date().toISOString(), profile: c }];
                    (y(A), localStorage.setItem('savedResponses', JSON.stringify(A)));
                }
            }, [w, B, b, c]);
        h.useCallback(() => {
            setTimeout(() => {
                T.current && (T.current.scrollTop = T.current.scrollHeight);
            }, 0);
        }, []);
        const te = h.useCallback(K => {
                if (typeof window < 'u' && window.marked)
                    try {
                        window.marked.setOptions({ breaks: !0, gfm: !0, sanitize: !1 });
                        let A = window.marked.parse(K);
                        return ((A = ge(A)), A);
                    } catch (A) {
                        return (console.warn('Error parsing markdown:', A), K);
                    }
                return (console.log('Marked not available, using plain text'), K);
            }, []),
            ge = h.useCallback(K => {
                const G = new DOMParser().parseFromString(K, 'text/html'),
                    O = ['PRE'];
                function ee(de) {
                    if (de.nodeType === Node.TEXT_NODE && de.textContent?.trim() && !O.includes(de.parentNode?.tagName || '')) {
                        const E = de.textContent.split(/(\s+)/),
                            q = document.createDocumentFragment();
                        (E.forEach(W => {
                            if (W.trim()) {
                                const P = document.createElement('span');
                                (P.setAttribute('data-word', ''), (P.textContent = W), q.appendChild(P));
                            } else q.appendChild(document.createTextNode(W));
                        }),
                            de.parentNode.replaceChild(q, de));
                    } else de.nodeType === Node.ELEMENT_NODE && !O.includes(de.tagName) && Array.from(de.childNodes).forEach(ee);
                }
                return (Array.from(G.body.childNodes).forEach(ee), G.body.innerHTML);
            }, []),
            le = h.useCallback(() => {
                if ((console.log('updateResponseContent called'), T.current)) {
                    const K = T.current,
                        A = w();
                    console.log('Current response:', A);
                    const G = te(A);
                    (console.log('Rendered response:', G), (K.innerHTML = G));
                    const O = K.querySelectorAll('[data-word]');
                    if (d) {
                        for (let ee = 0; ee < S && ee < O.length; ee++) O[ee].classList.add('visible');
                        for (let ee = S; ee < O.length; ee++)
                            (O[ee].classList.remove('visible'),
                                setTimeout(
                                    () => {
                                        (O[ee].classList.add('visible'), O.length - 1);
                                    },
                                    (ee - S) * 100
                                ));
                        x(O.length);
                    } else (O.forEach(ee => ee.classList.add('visible')), x(O.length));
                } else console.log('Response container not found');
            }, [w, te, d, S]);
        (h.useEffect(() => {
            (s !== -1 && x(0), le());
        }, [l, s, le]),
            h.useEffect(() => {
                le();
            }, [le]),
            w());
        const fe = U(),
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
                                disabled: s <= 0,
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
                            l.length > 0 && u.jsx('span', { className: 'response-counter', children: fe }),
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
                            g &&
                                u.jsx('button', {
                                    className: 'stop-session-button',
                                    onClick: g,
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
                            u.jsx('input', { ref: j, type: 'text', id: 'textInput', placeholder: 'Type a message to the AI...', onKeyDown: X }),
                            u.jsx('button', {
                                className: 'nav-button',
                                onClick: Z,
                                disabled: s >= l.length - 1,
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
var $i = Wp();
const dS = Jp($i);
function Cp(l, [s, c]) {
    return Math.min(c, Math.max(s, l));
}
function Pe(l, s, { checkForDefaultPrevented: c = !0 } = {}) {
    return function (d) {
        if ((l?.(d), c === !1 || !d.defaultPrevented)) return s?.(d);
    };
}
function Bs(l, s = []) {
    let c = [];
    function r(m, p) {
        const g = h.createContext(p),
            b = c.length;
        c = [...c, p];
        const y = x => {
            const { scope: T, children: j, ...R } = x,
                w = T?.[l]?.[b] || g,
                M = h.useMemo(() => R, Object.values(R));
            return u.jsx(w.Provider, { value: M, children: j });
        };
        y.displayName = m + 'Provider';
        function S(x, T) {
            const j = T?.[l]?.[b] || g,
                R = h.useContext(j);
            if (R) return R;
            if (p !== void 0) return p;
            throw new Error(`\`${x}\` must be used within \`${m}\``);
        }
        return [y, S];
    }
    const d = () => {
        const m = c.map(p => h.createContext(p));
        return function (g) {
            const b = g?.[l] || m;
            return h.useMemo(() => ({ [`__scope${l}`]: { ...g, [l]: b } }), [g, b]);
        };
    };
    return ((d.scopeName = l), [r, mS(d, ...s)]);
}
function mS(...l) {
    const s = l[0];
    if (l.length === 1) return s;
    const c = () => {
        const r = l.map(d => ({ useScope: d(), scopeName: d.scopeName }));
        return function (m) {
            const p = r.reduce((g, { useScope: b, scopeName: y }) => {
                const x = b(m)[`__scope${y}`];
                return { ...g, ...x };
            }, {});
            return h.useMemo(() => ({ [`__scope${s.scopeName}`]: p }), [p]);
        };
    };
    return ((c.scopeName = s.scopeName), c);
}
function hS(l) {
    const s = l + 'CollectionProvider',
        [c, r] = Bs(s),
        [d, m] = c(s, { collectionRef: { current: null }, itemMap: new Map() }),
        p = w => {
            const { scope: M, children: U } = w,
                B = Yn.useRef(null),
                H = Yn.useRef(new Map()).current;
            return u.jsx(d, { scope: M, itemMap: H, collectionRef: B, children: U });
        };
    p.displayName = s;
    const g = l + 'CollectionSlot',
        b = Ji(g),
        y = Yn.forwardRef((w, M) => {
            const { scope: U, children: B } = w,
                H = m(g, U),
                Z = ut(M, H.collectionRef);
            return u.jsx(b, { ref: Z, children: B });
        });
    y.displayName = g;
    const S = l + 'CollectionItemSlot',
        x = 'data-radix-collection-item',
        T = Ji(S),
        j = Yn.forwardRef((w, M) => {
            const { scope: U, children: B, ...H } = w,
                Z = Yn.useRef(null),
                $ = ut(M, Z),
                ne = m(S, U);
            return (
                Yn.useEffect(() => (ne.itemMap.set(Z, { ref: Z, ...H }), () => void ne.itemMap.delete(Z))),
                u.jsx(T, { [x]: '', ref: $, children: B })
            );
        });
    j.displayName = S;
    function R(w) {
        const M = m(l + 'CollectionConsumer', w);
        return Yn.useCallback(() => {
            const B = M.collectionRef.current;
            if (!B) return [];
            const H = Array.from(B.querySelectorAll(`[${x}]`));
            return Array.from(M.itemMap.values()).sort((ne, z) => H.indexOf(ne.ref.current) - H.indexOf(z.ref.current));
        }, [M.collectionRef, M.itemMap]);
    }
    return [{ Provider: p, Slot: y, ItemSlot: j }, R, r];
}
var pS = h.createContext(void 0);
function gS(l) {
    const s = h.useContext(pS);
    return l || s || 'ltr';
}
var vS = ['a', 'button', 'div', 'form', 'h2', 'h3', 'img', 'input', 'label', 'li', 'nav', 'ol', 'p', 'select', 'span', 'svg', 'ul'],
    Ze = vS.reduce((l, s) => {
        const c = Ji(`Primitive.${s}`),
            r = h.forwardRef((d, m) => {
                const { asChild: p, ...g } = d,
                    b = p ? c : s;
                return (typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0), u.jsx(b, { ...g, ref: m }));
            });
        return ((r.displayName = `Primitive.${s}`), { ...l, [s]: r });
    }, {});
function yS(l, s) {
    l && $i.flushSync(() => l.dispatchEvent(s));
}
function Ja(l) {
    const s = h.useRef(l);
    return (
        h.useEffect(() => {
            s.current = l;
        }),
        h.useMemo(
            () =>
                (...c) =>
                    s.current?.(...c),
            []
        )
    );
}
function bS(l, s = globalThis?.document) {
    const c = Ja(l);
    h.useEffect(() => {
        const r = d => {
            d.key === 'Escape' && c(d);
        };
        return (s.addEventListener('keydown', r, { capture: !0 }), () => s.removeEventListener('keydown', r, { capture: !0 }));
    }, [c, s]);
}
var SS = 'DismissableLayer',
    zu = 'dismissableLayer.update',
    xS = 'dismissableLayer.pointerDownOutside',
    wS = 'dismissableLayer.focusOutside',
    Ep,
    dg = h.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
    mg = h.forwardRef((l, s) => {
        const {
                disableOutsidePointerEvents: c = !1,
                onEscapeKeyDown: r,
                onPointerDownOutside: d,
                onFocusOutside: m,
                onInteractOutside: p,
                onDismiss: g,
                ...b
            } = l,
            y = h.useContext(dg),
            [S, x] = h.useState(null),
            T = S?.ownerDocument ?? globalThis?.document,
            [, j] = h.useState({}),
            R = ut(s, z => x(z)),
            w = Array.from(y.layers),
            [M] = [...y.layersWithOutsidePointerEventsDisabled].slice(-1),
            U = w.indexOf(M),
            B = S ? w.indexOf(S) : -1,
            H = y.layersWithOutsidePointerEventsDisabled.size > 0,
            Z = B >= U,
            $ = TS(z => {
                const X = z.target,
                    ae = [...y.branches].some(te => te.contains(X));
                !Z || ae || (d?.(z), p?.(z), z.defaultPrevented || g?.());
            }, T),
            ne = AS(z => {
                const X = z.target;
                [...y.branches].some(te => te.contains(X)) || (m?.(z), p?.(z), z.defaultPrevented || g?.());
            }, T);
        return (
            bS(z => {
                B === y.layers.size - 1 && (r?.(z), !z.defaultPrevented && g && (z.preventDefault(), g()));
            }, T),
            h.useEffect(() => {
                if (S)
                    return (
                        c &&
                            (y.layersWithOutsidePointerEventsDisabled.size === 0 &&
                                ((Ep = T.body.style.pointerEvents), (T.body.style.pointerEvents = 'none')),
                            y.layersWithOutsidePointerEventsDisabled.add(S)),
                        y.layers.add(S),
                        Tp(),
                        () => {
                            c && y.layersWithOutsidePointerEventsDisabled.size === 1 && (T.body.style.pointerEvents = Ep);
                        }
                    );
            }, [S, T, c, y]),
            h.useEffect(
                () => () => {
                    S && (y.layers.delete(S), y.layersWithOutsidePointerEventsDisabled.delete(S), Tp());
                },
                [S, y]
            ),
            h.useEffect(() => {
                const z = () => j({});
                return (document.addEventListener(zu, z), () => document.removeEventListener(zu, z));
            }, []),
            u.jsx(Ze.div, {
                ...b,
                ref: R,
                style: { pointerEvents: H ? (Z ? 'auto' : 'none') : void 0, ...l.style },
                onFocusCapture: Pe(l.onFocusCapture, ne.onFocusCapture),
                onBlurCapture: Pe(l.onBlurCapture, ne.onBlurCapture),
                onPointerDownCapture: Pe(l.onPointerDownCapture, $.onPointerDownCapture),
            })
        );
    });
mg.displayName = SS;
var CS = 'DismissableLayerBranch',
    ES = h.forwardRef((l, s) => {
        const c = h.useContext(dg),
            r = h.useRef(null),
            d = ut(s, r);
        return (
            h.useEffect(() => {
                const m = r.current;
                if (m)
                    return (
                        c.branches.add(m),
                        () => {
                            c.branches.delete(m);
                        }
                    );
            }, [c.branches]),
            u.jsx(Ze.div, { ...l, ref: d })
        );
    });
ES.displayName = CS;
function TS(l, s = globalThis?.document) {
    const c = Ja(l),
        r = h.useRef(!1),
        d = h.useRef(() => {});
    return (
        h.useEffect(() => {
            const m = g => {
                    if (g.target && !r.current) {
                        let b = function () {
                            hg(xS, c, y, { discrete: !0 });
                        };
                        const y = { originalEvent: g };
                        g.pointerType === 'touch'
                            ? (s.removeEventListener('click', d.current), (d.current = b), s.addEventListener('click', d.current, { once: !0 }))
                            : b();
                    } else s.removeEventListener('click', d.current);
                    r.current = !1;
                },
                p = window.setTimeout(() => {
                    s.addEventListener('pointerdown', m);
                }, 0);
            return () => {
                (window.clearTimeout(p), s.removeEventListener('pointerdown', m), s.removeEventListener('click', d.current));
            };
        }, [s, c]),
        { onPointerDownCapture: () => (r.current = !0) }
    );
}
function AS(l, s = globalThis?.document) {
    const c = Ja(l),
        r = h.useRef(!1);
    return (
        h.useEffect(() => {
            const d = m => {
                m.target && !r.current && hg(wS, c, { originalEvent: m }, { discrete: !1 });
            };
            return (s.addEventListener('focusin', d), () => s.removeEventListener('focusin', d));
        }, [s, c]),
        { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
    );
}
function Tp() {
    const l = new CustomEvent(zu);
    document.dispatchEvent(l);
}
function hg(l, s, c, { discrete: r }) {
    const d = c.originalEvent.target,
        m = new CustomEvent(l, { bubbles: !1, cancelable: !0, detail: c });
    (s && d.addEventListener(l, s, { once: !0 }), r ? yS(d, m) : d.dispatchEvent(m));
}
var Su = 0;
function NS() {
    h.useEffect(() => {
        const l = document.querySelectorAll('[data-radix-focus-guard]');
        return (
            document.body.insertAdjacentElement('afterbegin', l[0] ?? Ap()),
            document.body.insertAdjacentElement('beforeend', l[1] ?? Ap()),
            Su++,
            () => {
                (Su === 1 && document.querySelectorAll('[data-radix-focus-guard]').forEach(s => s.remove()), Su--);
            }
        );
    }, []);
}
function Ap() {
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
var xu = 'focusScope.autoFocusOnMount',
    wu = 'focusScope.autoFocusOnUnmount',
    Np = { bubbles: !1, cancelable: !0 },
    jS = 'FocusScope',
    pg = h.forwardRef((l, s) => {
        const { loop: c = !1, trapped: r = !1, onMountAutoFocus: d, onUnmountAutoFocus: m, ...p } = l,
            [g, b] = h.useState(null),
            y = Ja(d),
            S = Ja(m),
            x = h.useRef(null),
            T = ut(s, w => b(w)),
            j = h.useRef({
                paused: !1,
                pause() {
                    this.paused = !0;
                },
                resume() {
                    this.paused = !1;
                },
            }).current;
        (h.useEffect(() => {
            if (r) {
                let w = function (H) {
                        if (j.paused || !g) return;
                        const Z = H.target;
                        g.contains(Z) ? (x.current = Z) : ya(x.current, { select: !0 });
                    },
                    M = function (H) {
                        if (j.paused || !g) return;
                        const Z = H.relatedTarget;
                        Z !== null && (g.contains(Z) || ya(x.current, { select: !0 }));
                    },
                    U = function (H) {
                        if (document.activeElement === document.body) for (const $ of H) $.removedNodes.length > 0 && ya(g);
                    };
                (document.addEventListener('focusin', w), document.addEventListener('focusout', M));
                const B = new MutationObserver(U);
                return (
                    g && B.observe(g, { childList: !0, subtree: !0 }),
                    () => {
                        (document.removeEventListener('focusin', w), document.removeEventListener('focusout', M), B.disconnect());
                    }
                );
            }
        }, [r, g, j.paused]),
            h.useEffect(() => {
                if (g) {
                    Mp.add(j);
                    const w = document.activeElement;
                    if (!g.contains(w)) {
                        const U = new CustomEvent(xu, Np);
                        (g.addEventListener(xu, y),
                            g.dispatchEvent(U),
                            U.defaultPrevented || (MS(DS(gg(g)), { select: !0 }), document.activeElement === w && ya(g)));
                    }
                    return () => {
                        (g.removeEventListener(xu, y),
                            setTimeout(() => {
                                const U = new CustomEvent(wu, Np);
                                (g.addEventListener(wu, S),
                                    g.dispatchEvent(U),
                                    U.defaultPrevented || ya(w ?? document.body, { select: !0 }),
                                    g.removeEventListener(wu, S),
                                    Mp.remove(j));
                            }, 0));
                    };
                }
            }, [g, y, S, j]));
        const R = h.useCallback(
            w => {
                if ((!c && !r) || j.paused) return;
                const M = w.key === 'Tab' && !w.altKey && !w.ctrlKey && !w.metaKey,
                    U = document.activeElement;
                if (M && U) {
                    const B = w.currentTarget,
                        [H, Z] = RS(B);
                    H && Z
                        ? !w.shiftKey && U === Z
                            ? (w.preventDefault(), c && ya(H, { select: !0 }))
                            : w.shiftKey && U === H && (w.preventDefault(), c && ya(Z, { select: !0 }))
                        : U === B && w.preventDefault();
                }
            },
            [c, r, j.paused]
        );
        return u.jsx(Ze.div, { tabIndex: -1, ...p, ref: T, onKeyDown: R });
    });
pg.displayName = jS;
function MS(l, { select: s = !1 } = {}) {
    const c = document.activeElement;
    for (const r of l) if ((ya(r, { select: s }), document.activeElement !== c)) return;
}
function RS(l) {
    const s = gg(l),
        c = jp(s, l),
        r = jp(s.reverse(), l);
    return [c, r];
}
function gg(l) {
    const s = [],
        c = document.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const d = r.tagName === 'INPUT' && r.type === 'hidden';
                return r.disabled || r.hidden || d ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
            },
        });
    for (; c.nextNode(); ) s.push(c.currentNode);
    return s;
}
function jp(l, s) {
    for (const c of l) if (!kS(c, { upTo: s })) return c;
}
function kS(l, { upTo: s }) {
    if (getComputedStyle(l).visibility === 'hidden') return !0;
    for (; l; ) {
        if (s !== void 0 && l === s) return !1;
        if (getComputedStyle(l).display === 'none') return !0;
        l = l.parentElement;
    }
    return !1;
}
function OS(l) {
    return l instanceof HTMLInputElement && 'select' in l;
}
function ya(l, { select: s = !1 } = {}) {
    if (l && l.focus) {
        const c = document.activeElement;
        (l.focus({ preventScroll: !0 }), l !== c && OS(l) && s && l.select());
    }
}
var Mp = zS();
function zS() {
    let l = [];
    return {
        add(s) {
            const c = l[0];
            (s !== c && c?.pause(), (l = Rp(l, s)), l.unshift(s));
        },
        remove(s) {
            ((l = Rp(l, s)), l[0]?.resume());
        },
    };
}
function Rp(l, s) {
    const c = [...l],
        r = c.indexOf(s);
    return (r !== -1 && c.splice(r, 1), c);
}
function DS(l) {
    return l.filter(s => s.tagName !== 'A');
}
var zt = globalThis?.document ? h.useLayoutEffect : () => {},
    _S = Ip[' useId '.trim().toString()] || (() => {}),
    LS = 0;
function Zu(l) {
    const [s, c] = h.useState(_S());
    return (
        zt(() => {
            c(r => r ?? String(LS++));
        }, [l]),
        s ? `radix-${s}` : ''
    );
}
const US = ['top', 'right', 'bottom', 'left'],
    xa = Math.min,
    Gt = Math.max,
    Os = Math.round,
    ws = Math.floor,
    Sn = l => ({ x: l, y: l }),
    BS = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
    HS = { start: 'end', end: 'start' };
function Du(l, s, c) {
    return Gt(l, xa(s, c));
}
function Xn(l, s) {
    return typeof l == 'function' ? l(s) : l;
}
function Kn(l) {
    return l.split('-')[0];
}
function Ql(l) {
    return l.split('-')[1];
}
function Ju(l) {
    return l === 'x' ? 'y' : 'x';
}
function Iu(l) {
    return l === 'y' ? 'height' : 'width';
}
const VS = new Set(['top', 'bottom']);
function bn(l) {
    return VS.has(Kn(l)) ? 'y' : 'x';
}
function Wu(l) {
    return Ju(bn(l));
}
function qS(l, s, c) {
    c === void 0 && (c = !1);
    const r = Ql(l),
        d = Wu(l),
        m = Iu(d);
    let p = d === 'x' ? (r === (c ? 'end' : 'start') ? 'right' : 'left') : r === 'start' ? 'bottom' : 'top';
    return (s.reference[m] > s.floating[m] && (p = zs(p)), [p, zs(p)]);
}
function GS(l) {
    const s = zs(l);
    return [_u(l), s, _u(s)];
}
function _u(l) {
    return l.replace(/start|end/g, s => HS[s]);
}
const kp = ['left', 'right'],
    Op = ['right', 'left'],
    YS = ['top', 'bottom'],
    XS = ['bottom', 'top'];
function KS(l, s, c) {
    switch (l) {
        case 'top':
        case 'bottom':
            return c ? (s ? Op : kp) : s ? kp : Op;
        case 'left':
        case 'right':
            return s ? YS : XS;
        default:
            return [];
    }
}
function QS(l, s, c, r) {
    const d = Ql(l);
    let m = KS(Kn(l), c === 'start', r);
    return (d && ((m = m.map(p => p + '-' + d)), s && (m = m.concat(m.map(_u)))), m);
}
function zs(l) {
    return l.replace(/left|right|bottom|top/g, s => BS[s]);
}
function ZS(l) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...l };
}
function vg(l) {
    return typeof l != 'number' ? ZS(l) : { top: l, right: l, bottom: l, left: l };
}
function Ds(l) {
    const { x: s, y: c, width: r, height: d } = l;
    return { width: r, height: d, top: c, left: s, right: s + r, bottom: c + d, x: s, y: c };
}
function zp(l, s, c) {
    let { reference: r, floating: d } = l;
    const m = bn(s),
        p = Wu(s),
        g = Iu(p),
        b = Kn(s),
        y = m === 'y',
        S = r.x + r.width / 2 - d.width / 2,
        x = r.y + r.height / 2 - d.height / 2,
        T = r[g] / 2 - d[g] / 2;
    let j;
    switch (b) {
        case 'top':
            j = { x: S, y: r.y - d.height };
            break;
        case 'bottom':
            j = { x: S, y: r.y + r.height };
            break;
        case 'right':
            j = { x: r.x + r.width, y: x };
            break;
        case 'left':
            j = { x: r.x - d.width, y: x };
            break;
        default:
            j = { x: r.x, y: r.y };
    }
    switch (Ql(s)) {
        case 'start':
            j[p] -= T * (c && y ? -1 : 1);
            break;
        case 'end':
            j[p] += T * (c && y ? -1 : 1);
            break;
    }
    return j;
}
const JS = async (l, s, c) => {
    const { placement: r = 'bottom', strategy: d = 'absolute', middleware: m = [], platform: p } = c,
        g = m.filter(Boolean),
        b = await (p.isRTL == null ? void 0 : p.isRTL(s));
    let y = await p.getElementRects({ reference: l, floating: s, strategy: d }),
        { x: S, y: x } = zp(y, r, b),
        T = r,
        j = {},
        R = 0;
    for (let w = 0; w < g.length; w++) {
        const { name: M, fn: U } = g[w],
            {
                x: B,
                y: H,
                data: Z,
                reset: $,
            } = await U({
                x: S,
                y: x,
                initialPlacement: r,
                placement: T,
                strategy: d,
                middlewareData: j,
                rects: y,
                platform: p,
                elements: { reference: l, floating: s },
            });
        ((S = B ?? S),
            (x = H ?? x),
            (j = { ...j, [M]: { ...j[M], ...Z } }),
            $ &&
                R <= 50 &&
                (R++,
                typeof $ == 'object' &&
                    ($.placement && (T = $.placement),
                    $.rects && (y = $.rects === !0 ? await p.getElementRects({ reference: l, floating: s, strategy: d }) : $.rects),
                    ({ x: S, y: x } = zp(y, T, b))),
                (w = -1)));
    }
    return { x: S, y: x, placement: T, strategy: d, middlewareData: j };
};
async function Ii(l, s) {
    var c;
    s === void 0 && (s = {});
    const { x: r, y: d, platform: m, rects: p, elements: g, strategy: b } = l,
        {
            boundary: y = 'clippingAncestors',
            rootBoundary: S = 'viewport',
            elementContext: x = 'floating',
            altBoundary: T = !1,
            padding: j = 0,
        } = Xn(s, l),
        R = vg(j),
        M = g[T ? (x === 'floating' ? 'reference' : 'floating') : x],
        U = Ds(
            await m.getClippingRect({
                element:
                    (c = await (m.isElement == null ? void 0 : m.isElement(M))) == null || c
                        ? M
                        : M.contextElement || (await (m.getDocumentElement == null ? void 0 : m.getDocumentElement(g.floating))),
                boundary: y,
                rootBoundary: S,
                strategy: b,
            })
        ),
        B = x === 'floating' ? { x: r, y: d, width: p.floating.width, height: p.floating.height } : p.reference,
        H = await (m.getOffsetParent == null ? void 0 : m.getOffsetParent(g.floating)),
        Z = (await (m.isElement == null ? void 0 : m.isElement(H)))
            ? (await (m.getScale == null ? void 0 : m.getScale(H))) || { x: 1, y: 1 }
            : { x: 1, y: 1 },
        $ = Ds(
            m.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await m.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: g, rect: B, offsetParent: H, strategy: b })
                : B
        );
    return {
        top: (U.top - $.top + R.top) / Z.y,
        bottom: ($.bottom - U.bottom + R.bottom) / Z.y,
        left: (U.left - $.left + R.left) / Z.x,
        right: ($.right - U.right + R.right) / Z.x,
    };
}
const IS = l => ({
        name: 'arrow',
        options: l,
        async fn(s) {
            const { x: c, y: r, placement: d, rects: m, platform: p, elements: g, middlewareData: b } = s,
                { element: y, padding: S = 0 } = Xn(l, s) || {};
            if (y == null) return {};
            const x = vg(S),
                T = { x: c, y: r },
                j = Wu(d),
                R = Iu(j),
                w = await p.getDimensions(y),
                M = j === 'y',
                U = M ? 'top' : 'left',
                B = M ? 'bottom' : 'right',
                H = M ? 'clientHeight' : 'clientWidth',
                Z = m.reference[R] + m.reference[j] - T[j] - m.floating[R],
                $ = T[j] - m.reference[j],
                ne = await (p.getOffsetParent == null ? void 0 : p.getOffsetParent(y));
            let z = ne ? ne[H] : 0;
            (!z || !(await (p.isElement == null ? void 0 : p.isElement(ne)))) && (z = g.floating[H] || m.floating[R]);
            const X = Z / 2 - $ / 2,
                ae = z / 2 - w[R] / 2 - 1,
                te = xa(x[U], ae),
                ge = xa(x[B], ae),
                le = te,
                fe = z - w[R] - ge,
                ie = z / 2 - w[R] / 2 + X,
                K = Du(le, ie, fe),
                A = !b.arrow && Ql(d) != null && ie !== K && m.reference[R] / 2 - (ie < le ? te : ge) - w[R] / 2 < 0,
                G = A ? (ie < le ? ie - le : ie - fe) : 0;
            return { [j]: T[j] + G, data: { [j]: K, centerOffset: ie - K - G, ...(A && { alignmentOffset: G }) }, reset: A };
        },
    }),
    WS = function (l) {
        return (
            l === void 0 && (l = {}),
            {
                name: 'flip',
                options: l,
                async fn(s) {
                    var c, r;
                    const { placement: d, middlewareData: m, rects: p, initialPlacement: g, platform: b, elements: y } = s,
                        {
                            mainAxis: S = !0,
                            crossAxis: x = !0,
                            fallbackPlacements: T,
                            fallbackStrategy: j = 'bestFit',
                            fallbackAxisSideDirection: R = 'none',
                            flipAlignment: w = !0,
                            ...M
                        } = Xn(l, s);
                    if ((c = m.arrow) != null && c.alignmentOffset) return {};
                    const U = Kn(d),
                        B = bn(g),
                        H = Kn(g) === g,
                        Z = await (b.isRTL == null ? void 0 : b.isRTL(y.floating)),
                        $ = T || (H || !w ? [zs(g)] : GS(g)),
                        ne = R !== 'none';
                    !T && ne && $.push(...QS(g, w, R, Z));
                    const z = [g, ...$],
                        X = await Ii(s, M),
                        ae = [];
                    let te = ((r = m.flip) == null ? void 0 : r.overflows) || [];
                    if ((S && ae.push(X[U]), x)) {
                        const ie = qS(d, p, Z);
                        ae.push(X[ie[0]], X[ie[1]]);
                    }
                    if (((te = [...te, { placement: d, overflows: ae }]), !ae.every(ie => ie <= 0))) {
                        var ge, le;
                        const ie = (((ge = m.flip) == null ? void 0 : ge.index) || 0) + 1,
                            K = z[ie];
                        if (K && (!(x === 'alignment' ? B !== bn(K) : !1) || te.every(O => (bn(O.placement) === B ? O.overflows[0] > 0 : !0))))
                            return { data: { index: ie, overflows: te }, reset: { placement: K } };
                        let A =
                            (le = te.filter(G => G.overflows[0] <= 0).sort((G, O) => G.overflows[1] - O.overflows[1])[0]) == null
                                ? void 0
                                : le.placement;
                        if (!A)
                            switch (j) {
                                case 'bestFit': {
                                    var fe;
                                    const G =
                                        (fe = te
                                            .filter(O => {
                                                if (ne) {
                                                    const ee = bn(O.placement);
                                                    return ee === B || ee === 'y';
                                                }
                                                return !0;
                                            })
                                            .map(O => [O.placement, O.overflows.filter(ee => ee > 0).reduce((ee, de) => ee + de, 0)])
                                            .sort((O, ee) => O[1] - ee[1])[0]) == null
                                            ? void 0
                                            : fe[0];
                                    G && (A = G);
                                    break;
                                }
                                case 'initialPlacement':
                                    A = g;
                                    break;
                            }
                        if (d !== A) return { reset: { placement: A } };
                    }
                    return {};
                },
            }
        );
    };
function Dp(l, s) {
    return { top: l.top - s.height, right: l.right - s.width, bottom: l.bottom - s.height, left: l.left - s.width };
}
function _p(l) {
    return US.some(s => l[s] >= 0);
}
const $S = function (l) {
        return (
            l === void 0 && (l = {}),
            {
                name: 'hide',
                options: l,
                async fn(s) {
                    const { rects: c } = s,
                        { strategy: r = 'referenceHidden', ...d } = Xn(l, s);
                    switch (r) {
                        case 'referenceHidden': {
                            const m = await Ii(s, { ...d, elementContext: 'reference' }),
                                p = Dp(m, c.reference);
                            return { data: { referenceHiddenOffsets: p, referenceHidden: _p(p) } };
                        }
                        case 'escaped': {
                            const m = await Ii(s, { ...d, altBoundary: !0 }),
                                p = Dp(m, c.floating);
                            return { data: { escapedOffsets: p, escaped: _p(p) } };
                        }
                        default:
                            return {};
                    }
                },
            }
        );
    },
    yg = new Set(['left', 'top']);
async function FS(l, s) {
    const { placement: c, platform: r, elements: d } = l,
        m = await (r.isRTL == null ? void 0 : r.isRTL(d.floating)),
        p = Kn(c),
        g = Ql(c),
        b = bn(c) === 'y',
        y = yg.has(p) ? -1 : 1,
        S = m && b ? -1 : 1,
        x = Xn(s, l);
    let {
        mainAxis: T,
        crossAxis: j,
        alignmentAxis: R,
    } = typeof x == 'number'
        ? { mainAxis: x, crossAxis: 0, alignmentAxis: null }
        : { mainAxis: x.mainAxis || 0, crossAxis: x.crossAxis || 0, alignmentAxis: x.alignmentAxis };
    return (g && typeof R == 'number' && (j = g === 'end' ? R * -1 : R), b ? { x: j * S, y: T * y } : { x: T * y, y: j * S });
}
const PS = function (l) {
        return (
            l === void 0 && (l = 0),
            {
                name: 'offset',
                options: l,
                async fn(s) {
                    var c, r;
                    const { x: d, y: m, placement: p, middlewareData: g } = s,
                        b = await FS(s, l);
                    return p === ((c = g.offset) == null ? void 0 : c.placement) && (r = g.arrow) != null && r.alignmentOffset
                        ? {}
                        : { x: d + b.x, y: m + b.y, data: { ...b, placement: p } };
                },
            }
        );
    },
    e1 = function (l) {
        return (
            l === void 0 && (l = {}),
            {
                name: 'shift',
                options: l,
                async fn(s) {
                    const { x: c, y: r, placement: d } = s,
                        {
                            mainAxis: m = !0,
                            crossAxis: p = !1,
                            limiter: g = {
                                fn: M => {
                                    let { x: U, y: B } = M;
                                    return { x: U, y: B };
                                },
                            },
                            ...b
                        } = Xn(l, s),
                        y = { x: c, y: r },
                        S = await Ii(s, b),
                        x = bn(Kn(d)),
                        T = Ju(x);
                    let j = y[T],
                        R = y[x];
                    if (m) {
                        const M = T === 'y' ? 'top' : 'left',
                            U = T === 'y' ? 'bottom' : 'right',
                            B = j + S[M],
                            H = j - S[U];
                        j = Du(B, j, H);
                    }
                    if (p) {
                        const M = x === 'y' ? 'top' : 'left',
                            U = x === 'y' ? 'bottom' : 'right',
                            B = R + S[M],
                            H = R - S[U];
                        R = Du(B, R, H);
                    }
                    const w = g.fn({ ...s, [T]: j, [x]: R });
                    return { ...w, data: { x: w.x - c, y: w.y - r, enabled: { [T]: m, [x]: p } } };
                },
            }
        );
    },
    t1 = function (l) {
        return (
            l === void 0 && (l = {}),
            {
                options: l,
                fn(s) {
                    const { x: c, y: r, placement: d, rects: m, middlewareData: p } = s,
                        { offset: g = 0, mainAxis: b = !0, crossAxis: y = !0 } = Xn(l, s),
                        S = { x: c, y: r },
                        x = bn(d),
                        T = Ju(x);
                    let j = S[T],
                        R = S[x];
                    const w = Xn(g, s),
                        M = typeof w == 'number' ? { mainAxis: w, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...w };
                    if (b) {
                        const H = T === 'y' ? 'height' : 'width',
                            Z = m.reference[T] - m.floating[H] + M.mainAxis,
                            $ = m.reference[T] + m.reference[H] - M.mainAxis;
                        j < Z ? (j = Z) : j > $ && (j = $);
                    }
                    if (y) {
                        var U, B;
                        const H = T === 'y' ? 'width' : 'height',
                            Z = yg.has(Kn(d)),
                            $ = m.reference[x] - m.floating[H] + ((Z && ((U = p.offset) == null ? void 0 : U[x])) || 0) + (Z ? 0 : M.crossAxis),
                            ne = m.reference[x] + m.reference[H] + (Z ? 0 : ((B = p.offset) == null ? void 0 : B[x]) || 0) - (Z ? M.crossAxis : 0);
                        R < $ ? (R = $) : R > ne && (R = ne);
                    }
                    return { [T]: j, [x]: R };
                },
            }
        );
    },
    n1 = function (l) {
        return (
            l === void 0 && (l = {}),
            {
                name: 'size',
                options: l,
                async fn(s) {
                    var c, r;
                    const { placement: d, rects: m, platform: p, elements: g } = s,
                        { apply: b = () => {}, ...y } = Xn(l, s),
                        S = await Ii(s, y),
                        x = Kn(d),
                        T = Ql(d),
                        j = bn(d) === 'y',
                        { width: R, height: w } = m.floating;
                    let M, U;
                    x === 'top' || x === 'bottom'
                        ? ((M = x), (U = T === ((await (p.isRTL == null ? void 0 : p.isRTL(g.floating))) ? 'start' : 'end') ? 'left' : 'right'))
                        : ((U = x), (M = T === 'end' ? 'top' : 'bottom'));
                    const B = w - S.top - S.bottom,
                        H = R - S.left - S.right,
                        Z = xa(w - S[M], B),
                        $ = xa(R - S[U], H),
                        ne = !s.middlewareData.shift;
                    let z = Z,
                        X = $;
                    if (
                        ((c = s.middlewareData.shift) != null && c.enabled.x && (X = H),
                        (r = s.middlewareData.shift) != null && r.enabled.y && (z = B),
                        ne && !T)
                    ) {
                        const te = Gt(S.left, 0),
                            ge = Gt(S.right, 0),
                            le = Gt(S.top, 0),
                            fe = Gt(S.bottom, 0);
                        j
                            ? (X = R - 2 * (te !== 0 || ge !== 0 ? te + ge : Gt(S.left, S.right)))
                            : (z = w - 2 * (le !== 0 || fe !== 0 ? le + fe : Gt(S.top, S.bottom)));
                    }
                    await b({ ...s, availableWidth: X, availableHeight: z });
                    const ae = await p.getDimensions(g.floating);
                    return R !== ae.width || w !== ae.height ? { reset: { rects: !0 } } : {};
                },
            }
        );
    };
function Hs() {
    return typeof window < 'u';
}
function Zl(l) {
    return bg(l) ? (l.nodeName || '').toLowerCase() : '#document';
}
function Yt(l) {
    var s;
    return (l == null || (s = l.ownerDocument) == null ? void 0 : s.defaultView) || window;
}
function wn(l) {
    var s;
    return (s = (bg(l) ? l.ownerDocument : l.document) || window.document) == null ? void 0 : s.documentElement;
}
function bg(l) {
    return Hs() ? l instanceof Node || l instanceof Yt(l).Node : !1;
}
function fn(l) {
    return Hs() ? l instanceof Element || l instanceof Yt(l).Element : !1;
}
function xn(l) {
    return Hs() ? l instanceof HTMLElement || l instanceof Yt(l).HTMLElement : !1;
}
function Lp(l) {
    return !Hs() || typeof ShadowRoot > 'u' ? !1 : l instanceof ShadowRoot || l instanceof Yt(l).ShadowRoot;
}
const a1 = new Set(['inline', 'contents']);
function Fi(l) {
    const { overflow: s, overflowX: c, overflowY: r, display: d } = dn(l);
    return /auto|scroll|overlay|hidden|clip/.test(s + r + c) && !a1.has(d);
}
const l1 = new Set(['table', 'td', 'th']);
function i1(l) {
    return l1.has(Zl(l));
}
const o1 = [':popover-open', ':modal'];
function Vs(l) {
    return o1.some(s => {
        try {
            return l.matches(s);
        } catch {
            return !1;
        }
    });
}
const s1 = ['transform', 'translate', 'scale', 'rotate', 'perspective'],
    c1 = ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'],
    r1 = ['paint', 'layout', 'strict', 'content'];
function $u(l) {
    const s = Fu(),
        c = fn(l) ? dn(l) : l;
    return (
        s1.some(r => (c[r] ? c[r] !== 'none' : !1)) ||
        (c.containerType ? c.containerType !== 'normal' : !1) ||
        (!s && (c.backdropFilter ? c.backdropFilter !== 'none' : !1)) ||
        (!s && (c.filter ? c.filter !== 'none' : !1)) ||
        c1.some(r => (c.willChange || '').includes(r)) ||
        r1.some(r => (c.contain || '').includes(r))
    );
}
function u1(l) {
    let s = wa(l);
    for (; xn(s) && !Gl(s); ) {
        if ($u(s)) return s;
        if (Vs(s)) return null;
        s = wa(s);
    }
    return null;
}
function Fu() {
    return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none');
}
const f1 = new Set(['html', 'body', '#document']);
function Gl(l) {
    return f1.has(Zl(l));
}
function dn(l) {
    return Yt(l).getComputedStyle(l);
}
function qs(l) {
    return fn(l) ? { scrollLeft: l.scrollLeft, scrollTop: l.scrollTop } : { scrollLeft: l.scrollX, scrollTop: l.scrollY };
}
function wa(l) {
    if (Zl(l) === 'html') return l;
    const s = l.assignedSlot || l.parentNode || (Lp(l) && l.host) || wn(l);
    return Lp(s) ? s.host : s;
}
function Sg(l) {
    const s = wa(l);
    return Gl(s) ? (l.ownerDocument ? l.ownerDocument.body : l.body) : xn(s) && Fi(s) ? s : Sg(s);
}
function Wi(l, s, c) {
    var r;
    (s === void 0 && (s = []), c === void 0 && (c = !0));
    const d = Sg(l),
        m = d === ((r = l.ownerDocument) == null ? void 0 : r.body),
        p = Yt(d);
    if (m) {
        const g = Lu(p);
        return s.concat(p, p.visualViewport || [], Fi(d) ? d : [], g && c ? Wi(g) : []);
    }
    return s.concat(d, Wi(d, [], c));
}
function Lu(l) {
    return l.parent && Object.getPrototypeOf(l.parent) ? l.frameElement : null;
}
function xg(l) {
    const s = dn(l);
    let c = parseFloat(s.width) || 0,
        r = parseFloat(s.height) || 0;
    const d = xn(l),
        m = d ? l.offsetWidth : c,
        p = d ? l.offsetHeight : r,
        g = Os(c) !== m || Os(r) !== p;
    return (g && ((c = m), (r = p)), { width: c, height: r, $: g });
}
function Pu(l) {
    return fn(l) ? l : l.contextElement;
}
function Vl(l) {
    const s = Pu(l);
    if (!xn(s)) return Sn(1);
    const c = s.getBoundingClientRect(),
        { width: r, height: d, $: m } = xg(s);
    let p = (m ? Os(c.width) : c.width) / r,
        g = (m ? Os(c.height) : c.height) / d;
    return ((!p || !Number.isFinite(p)) && (p = 1), (!g || !Number.isFinite(g)) && (g = 1), { x: p, y: g });
}
const d1 = Sn(0);
function wg(l) {
    const s = Yt(l);
    return !Fu() || !s.visualViewport ? d1 : { x: s.visualViewport.offsetLeft, y: s.visualViewport.offsetTop };
}
function m1(l, s, c) {
    return (s === void 0 && (s = !1), !c || (s && c !== Yt(l)) ? !1 : s);
}
function Ia(l, s, c, r) {
    (s === void 0 && (s = !1), c === void 0 && (c = !1));
    const d = l.getBoundingClientRect(),
        m = Pu(l);
    let p = Sn(1);
    s && (r ? fn(r) && (p = Vl(r)) : (p = Vl(l)));
    const g = m1(m, c, r) ? wg(m) : Sn(0);
    let b = (d.left + g.x) / p.x,
        y = (d.top + g.y) / p.y,
        S = d.width / p.x,
        x = d.height / p.y;
    if (m) {
        const T = Yt(m),
            j = r && fn(r) ? Yt(r) : r;
        let R = T,
            w = Lu(R);
        for (; w && r && j !== R; ) {
            const M = Vl(w),
                U = w.getBoundingClientRect(),
                B = dn(w),
                H = U.left + (w.clientLeft + parseFloat(B.paddingLeft)) * M.x,
                Z = U.top + (w.clientTop + parseFloat(B.paddingTop)) * M.y;
            ((b *= M.x), (y *= M.y), (S *= M.x), (x *= M.y), (b += H), (y += Z), (R = Yt(w)), (w = Lu(R)));
        }
    }
    return Ds({ width: S, height: x, x: b, y });
}
function Gs(l, s) {
    const c = qs(l).scrollLeft;
    return s ? s.left + c : Ia(wn(l)).left + c;
}
function Cg(l, s) {
    const c = l.getBoundingClientRect(),
        r = c.left + s.scrollLeft - Gs(l, c),
        d = c.top + s.scrollTop;
    return { x: r, y: d };
}
function h1(l) {
    let { elements: s, rect: c, offsetParent: r, strategy: d } = l;
    const m = d === 'fixed',
        p = wn(r),
        g = s ? Vs(s.floating) : !1;
    if (r === p || (g && m)) return c;
    let b = { scrollLeft: 0, scrollTop: 0 },
        y = Sn(1);
    const S = Sn(0),
        x = xn(r);
    if ((x || (!x && !m)) && ((Zl(r) !== 'body' || Fi(p)) && (b = qs(r)), xn(r))) {
        const j = Ia(r);
        ((y = Vl(r)), (S.x = j.x + r.clientLeft), (S.y = j.y + r.clientTop));
    }
    const T = p && !x && !m ? Cg(p, b) : Sn(0);
    return {
        width: c.width * y.x,
        height: c.height * y.y,
        x: c.x * y.x - b.scrollLeft * y.x + S.x + T.x,
        y: c.y * y.y - b.scrollTop * y.y + S.y + T.y,
    };
}
function p1(l) {
    return Array.from(l.getClientRects());
}
function g1(l) {
    const s = wn(l),
        c = qs(l),
        r = l.ownerDocument.body,
        d = Gt(s.scrollWidth, s.clientWidth, r.scrollWidth, r.clientWidth),
        m = Gt(s.scrollHeight, s.clientHeight, r.scrollHeight, r.clientHeight);
    let p = -c.scrollLeft + Gs(l);
    const g = -c.scrollTop;
    return (dn(r).direction === 'rtl' && (p += Gt(s.clientWidth, r.clientWidth) - d), { width: d, height: m, x: p, y: g });
}
const Up = 25;
function v1(l, s) {
    const c = Yt(l),
        r = wn(l),
        d = c.visualViewport;
    let m = r.clientWidth,
        p = r.clientHeight,
        g = 0,
        b = 0;
    if (d) {
        ((m = d.width), (p = d.height));
        const S = Fu();
        (!S || (S && s === 'fixed')) && ((g = d.offsetLeft), (b = d.offsetTop));
    }
    const y = Gs(r);
    if (y <= 0) {
        const S = r.ownerDocument,
            x = S.body,
            T = getComputedStyle(x),
            j = (S.compatMode === 'CSS1Compat' && parseFloat(T.marginLeft) + parseFloat(T.marginRight)) || 0,
            R = Math.abs(r.clientWidth - x.clientWidth - j);
        R <= Up && (m -= R);
    } else y <= Up && (m += y);
    return { width: m, height: p, x: g, y: b };
}
const y1 = new Set(['absolute', 'fixed']);
function b1(l, s) {
    const c = Ia(l, !0, s === 'fixed'),
        r = c.top + l.clientTop,
        d = c.left + l.clientLeft,
        m = xn(l) ? Vl(l) : Sn(1),
        p = l.clientWidth * m.x,
        g = l.clientHeight * m.y,
        b = d * m.x,
        y = r * m.y;
    return { width: p, height: g, x: b, y };
}
function Bp(l, s, c) {
    let r;
    if (s === 'viewport') r = v1(l, c);
    else if (s === 'document') r = g1(wn(l));
    else if (fn(s)) r = b1(s, c);
    else {
        const d = wg(l);
        r = { x: s.x - d.x, y: s.y - d.y, width: s.width, height: s.height };
    }
    return Ds(r);
}
function Eg(l, s) {
    const c = wa(l);
    return c === s || !fn(c) || Gl(c) ? !1 : dn(c).position === 'fixed' || Eg(c, s);
}
function S1(l, s) {
    const c = s.get(l);
    if (c) return c;
    let r = Wi(l, [], !1).filter(g => fn(g) && Zl(g) !== 'body'),
        d = null;
    const m = dn(l).position === 'fixed';
    let p = m ? wa(l) : l;
    for (; fn(p) && !Gl(p); ) {
        const g = dn(p),
            b = $u(p);
        (!b && g.position === 'fixed' && (d = null),
            (m ? !b && !d : (!b && g.position === 'static' && !!d && y1.has(d.position)) || (Fi(p) && !b && Eg(l, p)))
                ? (r = r.filter(S => S !== p))
                : (d = g),
            (p = wa(p)));
    }
    return (s.set(l, r), r);
}
function x1(l) {
    let { element: s, boundary: c, rootBoundary: r, strategy: d } = l;
    const p = [...(c === 'clippingAncestors' ? (Vs(s) ? [] : S1(s, this._c)) : [].concat(c)), r],
        g = p[0],
        b = p.reduce(
            (y, S) => {
                const x = Bp(s, S, d);
                return (
                    (y.top = Gt(x.top, y.top)),
                    (y.right = xa(x.right, y.right)),
                    (y.bottom = xa(x.bottom, y.bottom)),
                    (y.left = Gt(x.left, y.left)),
                    y
                );
            },
            Bp(s, g, d)
        );
    return { width: b.right - b.left, height: b.bottom - b.top, x: b.left, y: b.top };
}
function w1(l) {
    const { width: s, height: c } = xg(l);
    return { width: s, height: c };
}
function C1(l, s, c) {
    const r = xn(s),
        d = wn(s),
        m = c === 'fixed',
        p = Ia(l, !0, m, s);
    let g = { scrollLeft: 0, scrollTop: 0 };
    const b = Sn(0);
    function y() {
        b.x = Gs(d);
    }
    if (r || (!r && !m))
        if (((Zl(s) !== 'body' || Fi(d)) && (g = qs(s)), r)) {
            const j = Ia(s, !0, m, s);
            ((b.x = j.x + s.clientLeft), (b.y = j.y + s.clientTop));
        } else d && y();
    m && !r && d && y();
    const S = d && !r && !m ? Cg(d, g) : Sn(0),
        x = p.left + g.scrollLeft - b.x - S.x,
        T = p.top + g.scrollTop - b.y - S.y;
    return { x, y: T, width: p.width, height: p.height };
}
function Cu(l) {
    return dn(l).position === 'static';
}
function Hp(l, s) {
    if (!xn(l) || dn(l).position === 'fixed') return null;
    if (s) return s(l);
    let c = l.offsetParent;
    return (wn(l) === c && (c = c.ownerDocument.body), c);
}
function Tg(l, s) {
    const c = Yt(l);
    if (Vs(l)) return c;
    if (!xn(l)) {
        let d = wa(l);
        for (; d && !Gl(d); ) {
            if (fn(d) && !Cu(d)) return d;
            d = wa(d);
        }
        return c;
    }
    let r = Hp(l, s);
    for (; r && i1(r) && Cu(r); ) r = Hp(r, s);
    return r && Gl(r) && Cu(r) && !$u(r) ? c : r || u1(l) || c;
}
const E1 = async function (l) {
    const s = this.getOffsetParent || Tg,
        c = this.getDimensions,
        r = await c(l.floating);
    return { reference: C1(l.reference, await s(l.floating), l.strategy), floating: { x: 0, y: 0, width: r.width, height: r.height } };
};
function T1(l) {
    return dn(l).direction === 'rtl';
}
const A1 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: h1,
    getDocumentElement: wn,
    getClippingRect: x1,
    getOffsetParent: Tg,
    getElementRects: E1,
    getClientRects: p1,
    getDimensions: w1,
    getScale: Vl,
    isElement: fn,
    isRTL: T1,
};
function Ag(l, s) {
    return l.x === s.x && l.y === s.y && l.width === s.width && l.height === s.height;
}
function N1(l, s) {
    let c = null,
        r;
    const d = wn(l);
    function m() {
        var g;
        (clearTimeout(r), (g = c) == null || g.disconnect(), (c = null));
    }
    function p(g, b) {
        (g === void 0 && (g = !1), b === void 0 && (b = 1), m());
        const y = l.getBoundingClientRect(),
            { left: S, top: x, width: T, height: j } = y;
        if ((g || s(), !T || !j)) return;
        const R = ws(x),
            w = ws(d.clientWidth - (S + T)),
            M = ws(d.clientHeight - (x + j)),
            U = ws(S),
            H = { rootMargin: -R + 'px ' + -w + 'px ' + -M + 'px ' + -U + 'px', threshold: Gt(0, xa(1, b)) || 1 };
        let Z = !0;
        function $(ne) {
            const z = ne[0].intersectionRatio;
            if (z !== b) {
                if (!Z) return p();
                z
                    ? p(!1, z)
                    : (r = setTimeout(() => {
                          p(!1, 1e-7);
                      }, 1e3));
            }
            (z === 1 && !Ag(y, l.getBoundingClientRect()) && p(), (Z = !1));
        }
        try {
            c = new IntersectionObserver($, { ...H, root: d.ownerDocument });
        } catch {
            c = new IntersectionObserver($, H);
        }
        c.observe(l);
    }
    return (p(!0), m);
}
function j1(l, s, c, r) {
    r === void 0 && (r = {});
    const {
            ancestorScroll: d = !0,
            ancestorResize: m = !0,
            elementResize: p = typeof ResizeObserver == 'function',
            layoutShift: g = typeof IntersectionObserver == 'function',
            animationFrame: b = !1,
        } = r,
        y = Pu(l),
        S = d || m ? [...(y ? Wi(y) : []), ...Wi(s)] : [];
    S.forEach(U => {
        (d && U.addEventListener('scroll', c, { passive: !0 }), m && U.addEventListener('resize', c));
    });
    const x = y && g ? N1(y, c) : null;
    let T = -1,
        j = null;
    p &&
        ((j = new ResizeObserver(U => {
            let [B] = U;
            (B &&
                B.target === y &&
                j &&
                (j.unobserve(s),
                cancelAnimationFrame(T),
                (T = requestAnimationFrame(() => {
                    var H;
                    (H = j) == null || H.observe(s);
                }))),
                c());
        })),
        y && !b && j.observe(y),
        j.observe(s));
    let R,
        w = b ? Ia(l) : null;
    b && M();
    function M() {
        const U = Ia(l);
        (w && !Ag(w, U) && c(), (w = U), (R = requestAnimationFrame(M)));
    }
    return (
        c(),
        () => {
            var U;
            (S.forEach(B => {
                (d && B.removeEventListener('scroll', c), m && B.removeEventListener('resize', c));
            }),
                x?.(),
                (U = j) == null || U.disconnect(),
                (j = null),
                b && cancelAnimationFrame(R));
        }
    );
}
const M1 = PS,
    R1 = e1,
    k1 = WS,
    O1 = n1,
    z1 = $S,
    Vp = IS,
    D1 = t1,
    _1 = (l, s, c) => {
        const r = new Map(),
            d = { platform: A1, ...c },
            m = { ...d.platform, _c: r };
        return JS(l, s, { ...d, platform: m });
    };
var L1 = typeof document < 'u',
    U1 = function () {},
    Ns = L1 ? h.useLayoutEffect : U1;
function _s(l, s) {
    if (l === s) return !0;
    if (typeof l != typeof s) return !1;
    if (typeof l == 'function' && l.toString() === s.toString()) return !0;
    let c, r, d;
    if (l && s && typeof l == 'object') {
        if (Array.isArray(l)) {
            if (((c = l.length), c !== s.length)) return !1;
            for (r = c; r-- !== 0; ) if (!_s(l[r], s[r])) return !1;
            return !0;
        }
        if (((d = Object.keys(l)), (c = d.length), c !== Object.keys(s).length)) return !1;
        for (r = c; r-- !== 0; ) if (!{}.hasOwnProperty.call(s, d[r])) return !1;
        for (r = c; r-- !== 0; ) {
            const m = d[r];
            if (!(m === '_owner' && l.$$typeof) && !_s(l[m], s[m])) return !1;
        }
        return !0;
    }
    return l !== l && s !== s;
}
function Ng(l) {
    return typeof window > 'u' ? 1 : (l.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function qp(l, s) {
    const c = Ng(l);
    return Math.round(s * c) / c;
}
function Eu(l) {
    const s = h.useRef(l);
    return (
        Ns(() => {
            s.current = l;
        }),
        s
    );
}
function B1(l) {
    l === void 0 && (l = {});
    const {
            placement: s = 'bottom',
            strategy: c = 'absolute',
            middleware: r = [],
            platform: d,
            elements: { reference: m, floating: p } = {},
            transform: g = !0,
            whileElementsMounted: b,
            open: y,
        } = l,
        [S, x] = h.useState({ x: 0, y: 0, strategy: c, placement: s, middlewareData: {}, isPositioned: !1 }),
        [T, j] = h.useState(r);
    _s(T, r) || j(r);
    const [R, w] = h.useState(null),
        [M, U] = h.useState(null),
        B = h.useCallback(O => {
            O !== ne.current && ((ne.current = O), w(O));
        }, []),
        H = h.useCallback(O => {
            O !== z.current && ((z.current = O), U(O));
        }, []),
        Z = m || R,
        $ = p || M,
        ne = h.useRef(null),
        z = h.useRef(null),
        X = h.useRef(S),
        ae = b != null,
        te = Eu(b),
        ge = Eu(d),
        le = Eu(y),
        fe = h.useCallback(() => {
            if (!ne.current || !z.current) return;
            const O = { placement: s, strategy: c, middleware: T };
            (ge.current && (O.platform = ge.current),
                _1(ne.current, z.current, O).then(ee => {
                    const de = { ...ee, isPositioned: le.current !== !1 };
                    ie.current &&
                        !_s(X.current, de) &&
                        ((X.current = de),
                        $i.flushSync(() => {
                            x(de);
                        }));
                }));
        }, [T, s, c, ge, le]);
    Ns(() => {
        y === !1 && X.current.isPositioned && ((X.current.isPositioned = !1), x(O => ({ ...O, isPositioned: !1 })));
    }, [y]);
    const ie = h.useRef(!1);
    (Ns(
        () => (
            (ie.current = !0),
            () => {
                ie.current = !1;
            }
        ),
        []
    ),
        Ns(() => {
            if ((Z && (ne.current = Z), $ && (z.current = $), Z && $)) {
                if (te.current) return te.current(Z, $, fe);
                fe();
            }
        }, [Z, $, fe, te, ae]));
    const K = h.useMemo(() => ({ reference: ne, floating: z, setReference: B, setFloating: H }), [B, H]),
        A = h.useMemo(() => ({ reference: Z, floating: $ }), [Z, $]),
        G = h.useMemo(() => {
            const O = { position: c, left: 0, top: 0 };
            if (!A.floating) return O;
            const ee = qp(A.floating, S.x),
                de = qp(A.floating, S.y);
            return g
                ? { ...O, transform: 'translate(' + ee + 'px, ' + de + 'px)', ...(Ng(A.floating) >= 1.5 && { willChange: 'transform' }) }
                : { position: c, left: ee, top: de };
        }, [c, g, A.floating, S.x, S.y]);
    return h.useMemo(() => ({ ...S, update: fe, refs: K, elements: A, floatingStyles: G }), [S, fe, K, A, G]);
}
const H1 = l => {
        function s(c) {
            return {}.hasOwnProperty.call(c, 'current');
        }
        return {
            name: 'arrow',
            options: l,
            fn(c) {
                const { element: r, padding: d } = typeof l == 'function' ? l(c) : l;
                return r && s(r)
                    ? r.current != null
                        ? Vp({ element: r.current, padding: d }).fn(c)
                        : {}
                    : r
                      ? Vp({ element: r, padding: d }).fn(c)
                      : {};
            },
        };
    },
    V1 = (l, s) => ({ ...M1(l), options: [l, s] }),
    q1 = (l, s) => ({ ...R1(l), options: [l, s] }),
    G1 = (l, s) => ({ ...D1(l), options: [l, s] }),
    Y1 = (l, s) => ({ ...k1(l), options: [l, s] }),
    X1 = (l, s) => ({ ...O1(l), options: [l, s] }),
    K1 = (l, s) => ({ ...z1(l), options: [l, s] }),
    Q1 = (l, s) => ({ ...H1(l), options: [l, s] });
var Z1 = 'Arrow',
    jg = h.forwardRef((l, s) => {
        const { children: c, width: r = 10, height: d = 5, ...m } = l;
        return u.jsx(Ze.svg, {
            ...m,
            ref: s,
            width: r,
            height: d,
            viewBox: '0 0 30 10',
            preserveAspectRatio: 'none',
            children: l.asChild ? c : u.jsx('polygon', { points: '0,0 30,0 15,10' }),
        });
    });
jg.displayName = Z1;
var J1 = jg;
function Mg(l) {
    const [s, c] = h.useState(void 0);
    return (
        zt(() => {
            if (l) {
                c({ width: l.offsetWidth, height: l.offsetHeight });
                const r = new ResizeObserver(d => {
                    if (!Array.isArray(d) || !d.length) return;
                    const m = d[0];
                    let p, g;
                    if ('borderBoxSize' in m) {
                        const b = m.borderBoxSize,
                            y = Array.isArray(b) ? b[0] : b;
                        ((p = y.inlineSize), (g = y.blockSize));
                    } else ((p = l.offsetWidth), (g = l.offsetHeight));
                    c({ width: p, height: g });
                });
                return (r.observe(l, { box: 'border-box' }), () => r.unobserve(l));
            } else c(void 0);
        }, [l]),
        s
    );
}
var ef = 'Popper',
    [Rg, kg] = Bs(ef),
    [I1, Og] = Rg(ef),
    zg = l => {
        const { __scopePopper: s, children: c } = l,
            [r, d] = h.useState(null);
        return u.jsx(I1, { scope: s, anchor: r, onAnchorChange: d, children: c });
    };
zg.displayName = ef;
var Dg = 'PopperAnchor',
    _g = h.forwardRef((l, s) => {
        const { __scopePopper: c, virtualRef: r, ...d } = l,
            m = Og(Dg, c),
            p = h.useRef(null),
            g = ut(s, p),
            b = h.useRef(null);
        return (
            h.useEffect(() => {
                const y = b.current;
                ((b.current = r?.current || p.current), y !== b.current && m.onAnchorChange(b.current));
            }),
            r ? null : u.jsx(Ze.div, { ...d, ref: g })
        );
    });
_g.displayName = Dg;
var tf = 'PopperContent',
    [W1, $1] = Rg(tf),
    Lg = h.forwardRef((l, s) => {
        const {
                __scopePopper: c,
                side: r = 'bottom',
                sideOffset: d = 0,
                align: m = 'center',
                alignOffset: p = 0,
                arrowPadding: g = 0,
                avoidCollisions: b = !0,
                collisionBoundary: y = [],
                collisionPadding: S = 0,
                sticky: x = 'partial',
                hideWhenDetached: T = !1,
                updatePositionStrategy: j = 'optimized',
                onPlaced: R,
                ...w
            } = l,
            M = Og(tf, c),
            [U, B] = h.useState(null),
            H = ut(s, F => B(F)),
            [Z, $] = h.useState(null),
            ne = Mg(Z),
            z = ne?.width ?? 0,
            X = ne?.height ?? 0,
            ae = r + (m !== 'center' ? '-' + m : ''),
            te = typeof S == 'number' ? S : { top: 0, right: 0, bottom: 0, left: 0, ...S },
            ge = Array.isArray(y) ? y : [y],
            le = ge.length > 0,
            fe = { padding: te, boundary: ge.filter(P1), altBoundary: le },
            {
                refs: ie,
                floatingStyles: K,
                placement: A,
                isPositioned: G,
                middlewareData: O,
            } = B1({
                strategy: 'fixed',
                placement: ae,
                whileElementsMounted: (...F) => j1(...F, { animationFrame: j === 'always' }),
                elements: { reference: M.anchor },
                middleware: [
                    V1({ mainAxis: d + X, alignmentAxis: p }),
                    b && q1({ mainAxis: !0, crossAxis: !1, limiter: x === 'partial' ? G1() : void 0, ...fe }),
                    b && Y1({ ...fe }),
                    X1({
                        ...fe,
                        apply: ({ elements: F, rects: be, availableWidth: ye, availableHeight: we }) => {
                            const { width: Te, height: Me } = be.reference,
                                et = F.floating.style;
                            (et.setProperty('--radix-popper-available-width', `${ye}px`),
                                et.setProperty('--radix-popper-available-height', `${we}px`),
                                et.setProperty('--radix-popper-anchor-width', `${Te}px`),
                                et.setProperty('--radix-popper-anchor-height', `${Me}px`));
                        },
                    }),
                    Z && Q1({ element: Z, padding: g }),
                    ex({ arrowWidth: z, arrowHeight: X }),
                    T && K1({ strategy: 'referenceHidden', ...fe }),
                ],
            }),
            [ee, de] = Hg(A),
            E = Ja(R);
        zt(() => {
            G && E?.();
        }, [G, E]);
        const q = O.arrow?.x,
            W = O.arrow?.y,
            P = O.arrow?.centerOffset !== 0,
            [ue, he] = h.useState();
        return (
            zt(() => {
                U && he(window.getComputedStyle(U).zIndex);
            }, [U]),
            u.jsx('div', {
                ref: ie.setFloating,
                'data-radix-popper-content-wrapper': '',
                style: {
                    ...K,
                    transform: G ? K.transform : 'translate(0, -200%)',
                    minWidth: 'max-content',
                    zIndex: ue,
                    '--radix-popper-transform-origin': [O.transformOrigin?.x, O.transformOrigin?.y].join(' '),
                    ...(O.hide?.referenceHidden && { visibility: 'hidden', pointerEvents: 'none' }),
                },
                dir: l.dir,
                children: u.jsx(W1, {
                    scope: c,
                    placedSide: ee,
                    onArrowChange: $,
                    arrowX: q,
                    arrowY: W,
                    shouldHideArrow: P,
                    children: u.jsx(Ze.div, {
                        'data-side': ee,
                        'data-align': de,
                        ...w,
                        ref: H,
                        style: { ...w.style, animation: G ? void 0 : 'none' },
                    }),
                }),
            })
        );
    });
Lg.displayName = tf;
var Ug = 'PopperArrow',
    F1 = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
    Bg = h.forwardRef(function (s, c) {
        const { __scopePopper: r, ...d } = s,
            m = $1(Ug, r),
            p = F1[m.placedSide];
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
            children: u.jsx(J1, { ...d, ref: c, style: { ...d.style, display: 'block' } }),
        });
    });
Bg.displayName = Ug;
function P1(l) {
    return l !== null;
}
var ex = l => ({
    name: 'transformOrigin',
    options: l,
    fn(s) {
        const { placement: c, rects: r, middlewareData: d } = s,
            p = d.arrow?.centerOffset !== 0,
            g = p ? 0 : l.arrowWidth,
            b = p ? 0 : l.arrowHeight,
            [y, S] = Hg(c),
            x = { start: '0%', center: '50%', end: '100%' }[S],
            T = (d.arrow?.x ?? 0) + g / 2,
            j = (d.arrow?.y ?? 0) + b / 2;
        let R = '',
            w = '';
        return (
            y === 'bottom'
                ? ((R = p ? x : `${T}px`), (w = `${-b}px`))
                : y === 'top'
                  ? ((R = p ? x : `${T}px`), (w = `${r.floating.height + b}px`))
                  : y === 'right'
                    ? ((R = `${-b}px`), (w = p ? x : `${j}px`))
                    : y === 'left' && ((R = `${r.floating.width + b}px`), (w = p ? x : `${j}px`)),
            { data: { x: R, y: w } }
        );
    },
});
function Hg(l) {
    const [s, c = 'center'] = l.split('-');
    return [s, c];
}
var tx = zg,
    nx = _g,
    ax = Lg,
    lx = Bg,
    ix = 'Portal',
    Vg = h.forwardRef((l, s) => {
        const { container: c, ...r } = l,
            [d, m] = h.useState(!1);
        zt(() => m(!0), []);
        const p = c || (d && globalThis?.document?.body);
        return p ? dS.createPortal(u.jsx(Ze.div, { ...r, ref: s }), p) : null;
    });
Vg.displayName = ix;
var ox = Ip[' useInsertionEffect '.trim().toString()] || zt;
function Uu({ prop: l, defaultProp: s, onChange: c = () => {}, caller: r }) {
    const [d, m, p] = sx({ defaultProp: s, onChange: c }),
        g = l !== void 0,
        b = g ? l : d;
    {
        const S = h.useRef(l !== void 0);
        h.useEffect(() => {
            const x = S.current;
            (x !== g &&
                console.warn(
                    `${r} is changing from ${x ? 'controlled' : 'uncontrolled'} to ${g ? 'controlled' : 'uncontrolled'}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
                ),
                (S.current = g));
        }, [g, r]);
    }
    const y = h.useCallback(
        S => {
            if (g) {
                const x = cx(S) ? S(l) : S;
                x !== l && p.current?.(x);
            } else m(S);
        },
        [g, l, m, p]
    );
    return [b, y];
}
function sx({ defaultProp: l, onChange: s }) {
    const [c, r] = h.useState(l),
        d = h.useRef(c),
        m = h.useRef(s);
    return (
        ox(() => {
            m.current = s;
        }, [s]),
        h.useEffect(() => {
            d.current !== c && (m.current?.(c), (d.current = c));
        }, [c, d]),
        [c, r, m]
    );
}
function cx(l) {
    return typeof l == 'function';
}
function qg(l) {
    const s = h.useRef({ value: l, previous: l });
    return h.useMemo(() => (s.current.value !== l && ((s.current.previous = s.current.value), (s.current.value = l)), s.current.previous), [l]);
}
var Gg = Object.freeze({
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
    rx = 'VisuallyHidden',
    ux = h.forwardRef((l, s) => u.jsx(Ze.span, { ...l, ref: s, style: { ...Gg, ...l.style } }));
ux.displayName = rx;
var fx = function (l) {
        if (typeof document > 'u') return null;
        var s = Array.isArray(l) ? l[0] : l;
        return s.ownerDocument.body;
    },
    Ul = new WeakMap(),
    Cs = new WeakMap(),
    Es = {},
    Tu = 0,
    Yg = function (l) {
        return l && (l.host || Yg(l.parentNode));
    },
    dx = function (l, s) {
        return s
            .map(function (c) {
                if (l.contains(c)) return c;
                var r = Yg(c);
                return r && l.contains(r) ? r : (console.error('aria-hidden', c, 'in not contained inside', l, '. Doing nothing'), null);
            })
            .filter(function (c) {
                return !!c;
            });
    },
    mx = function (l, s, c, r) {
        var d = dx(s, Array.isArray(l) ? l : [l]);
        Es[c] || (Es[c] = new WeakMap());
        var m = Es[c],
            p = [],
            g = new Set(),
            b = new Set(d),
            y = function (x) {
                !x || g.has(x) || (g.add(x), y(x.parentNode));
            };
        d.forEach(y);
        var S = function (x) {
            !x ||
                b.has(x) ||
                Array.prototype.forEach.call(x.children, function (T) {
                    if (g.has(T)) S(T);
                    else
                        try {
                            var j = T.getAttribute(r),
                                R = j !== null && j !== 'false',
                                w = (Ul.get(T) || 0) + 1,
                                M = (m.get(T) || 0) + 1;
                            (Ul.set(T, w),
                                m.set(T, M),
                                p.push(T),
                                w === 1 && R && Cs.set(T, !0),
                                M === 1 && T.setAttribute(c, 'true'),
                                R || T.setAttribute(r, 'true'));
                        } catch (U) {
                            console.error('aria-hidden: cannot operate on ', T, U);
                        }
                });
        };
        return (
            S(s),
            g.clear(),
            Tu++,
            function () {
                (p.forEach(function (x) {
                    var T = Ul.get(x) - 1,
                        j = m.get(x) - 1;
                    (Ul.set(x, T), m.set(x, j), T || (Cs.has(x) || x.removeAttribute(r), Cs.delete(x)), j || x.removeAttribute(c));
                }),
                    Tu--,
                    Tu || ((Ul = new WeakMap()), (Ul = new WeakMap()), (Cs = new WeakMap()), (Es = {})));
            }
        );
    },
    hx = function (l, s, c) {
        c === void 0 && (c = 'data-aria-hidden');
        var r = Array.from(Array.isArray(l) ? l : [l]),
            d = fx(l);
        return d
            ? (r.push.apply(r, Array.from(d.querySelectorAll('[aria-live], script'))), mx(r, d, c, 'aria-hidden'))
            : function () {
                  return null;
              };
    },
    yn = function () {
        return (
            (yn =
                Object.assign ||
                function (s) {
                    for (var c, r = 1, d = arguments.length; r < d; r++) {
                        c = arguments[r];
                        for (var m in c) Object.prototype.hasOwnProperty.call(c, m) && (s[m] = c[m]);
                    }
                    return s;
                }),
            yn.apply(this, arguments)
        );
    };
function Xg(l, s) {
    var c = {};
    for (var r in l) Object.prototype.hasOwnProperty.call(l, r) && s.indexOf(r) < 0 && (c[r] = l[r]);
    if (l != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var d = 0, r = Object.getOwnPropertySymbols(l); d < r.length; d++)
            s.indexOf(r[d]) < 0 && Object.prototype.propertyIsEnumerable.call(l, r[d]) && (c[r[d]] = l[r[d]]);
    return c;
}
function px(l, s, c) {
    if (c || arguments.length === 2)
        for (var r = 0, d = s.length, m; r < d; r++) (m || !(r in s)) && (m || (m = Array.prototype.slice.call(s, 0, r)), (m[r] = s[r]));
    return l.concat(m || Array.prototype.slice.call(s));
}
var js = 'right-scroll-bar-position',
    Ms = 'width-before-scroll-bar',
    gx = 'with-scroll-bars-hidden',
    vx = '--removed-body-scroll-bar-size';
function Au(l, s) {
    return (typeof l == 'function' ? l(s) : l && (l.current = s), l);
}
function yx(l, s) {
    var c = h.useState(function () {
        return {
            value: l,
            callback: s,
            facade: {
                get current() {
                    return c.value;
                },
                set current(r) {
                    var d = c.value;
                    d !== r && ((c.value = r), c.callback(r, d));
                },
            },
        };
    })[0];
    return ((c.callback = s), c.facade);
}
var bx = typeof window < 'u' ? h.useLayoutEffect : h.useEffect,
    Gp = new WeakMap();
function Sx(l, s) {
    var c = yx(null, function (r) {
        return l.forEach(function (d) {
            return Au(d, r);
        });
    });
    return (
        bx(
            function () {
                var r = Gp.get(c);
                if (r) {
                    var d = new Set(r),
                        m = new Set(l),
                        p = c.current;
                    (d.forEach(function (g) {
                        m.has(g) || Au(g, null);
                    }),
                        m.forEach(function (g) {
                            d.has(g) || Au(g, p);
                        }));
                }
                Gp.set(c, l);
            },
            [l]
        ),
        c
    );
}
function xx(l) {
    return l;
}
function wx(l, s) {
    s === void 0 && (s = xx);
    var c = [],
        r = !1,
        d = {
            read: function () {
                if (r) throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
                return c.length ? c[c.length - 1] : l;
            },
            useMedium: function (m) {
                var p = s(m, r);
                return (
                    c.push(p),
                    function () {
                        c = c.filter(function (g) {
                            return g !== p;
                        });
                    }
                );
            },
            assignSyncMedium: function (m) {
                for (r = !0; c.length; ) {
                    var p = c;
                    ((c = []), p.forEach(m));
                }
                c = {
                    push: function (g) {
                        return m(g);
                    },
                    filter: function () {
                        return c;
                    },
                };
            },
            assignMedium: function (m) {
                r = !0;
                var p = [];
                if (c.length) {
                    var g = c;
                    ((c = []), g.forEach(m), (p = c));
                }
                var b = function () {
                        var S = p;
                        ((p = []), S.forEach(m));
                    },
                    y = function () {
                        return Promise.resolve().then(b);
                    };
                (y(),
                    (c = {
                        push: function (S) {
                            (p.push(S), y());
                        },
                        filter: function (S) {
                            return ((p = p.filter(S)), c);
                        },
                    }));
            },
        };
    return d;
}
function Cx(l) {
    l === void 0 && (l = {});
    var s = wx(null);
    return ((s.options = yn({ async: !0, ssr: !1 }, l)), s);
}
var Kg = function (l) {
    var s = l.sideCar,
        c = Xg(l, ['sideCar']);
    if (!s) throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    var r = s.read();
    if (!r) throw new Error('Sidecar medium not found');
    return h.createElement(r, yn({}, c));
};
Kg.isSideCarExport = !0;
function Ex(l, s) {
    return (l.useMedium(s), Kg);
}
var Qg = Cx(),
    Nu = function () {},
    Ys = h.forwardRef(function (l, s) {
        var c = h.useRef(null),
            r = h.useState({ onScrollCapture: Nu, onWheelCapture: Nu, onTouchMoveCapture: Nu }),
            d = r[0],
            m = r[1],
            p = l.forwardProps,
            g = l.children,
            b = l.className,
            y = l.removeScrollBar,
            S = l.enabled,
            x = l.shards,
            T = l.sideCar,
            j = l.noRelative,
            R = l.noIsolation,
            w = l.inert,
            M = l.allowPinchZoom,
            U = l.as,
            B = U === void 0 ? 'div' : U,
            H = l.gapMode,
            Z = Xg(l, [
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
            $ = T,
            ne = Sx([c, s]),
            z = yn(yn({}, Z), d);
        return h.createElement(
            h.Fragment,
            null,
            S &&
                h.createElement($, {
                    sideCar: Qg,
                    removeScrollBar: y,
                    shards: x,
                    noRelative: j,
                    noIsolation: R,
                    inert: w,
                    setCallbacks: m,
                    allowPinchZoom: !!M,
                    lockRef: c,
                    gapMode: H,
                }),
            p ? h.cloneElement(h.Children.only(g), yn(yn({}, z), { ref: ne })) : h.createElement(B, yn({}, z, { className: b, ref: ne }), g)
        );
    });
Ys.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Ys.classNames = { fullWidth: Ms, zeroRight: js };
var Tx = function () {
    if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
};
function Ax() {
    if (!document) return null;
    var l = document.createElement('style');
    l.type = 'text/css';
    var s = Tx();
    return (s && l.setAttribute('nonce', s), l);
}
function Nx(l, s) {
    l.styleSheet ? (l.styleSheet.cssText = s) : l.appendChild(document.createTextNode(s));
}
function jx(l) {
    var s = document.head || document.getElementsByTagName('head')[0];
    s.appendChild(l);
}
var Mx = function () {
        var l = 0,
            s = null;
        return {
            add: function (c) {
                (l == 0 && (s = Ax()) && (Nx(s, c), jx(s)), l++);
            },
            remove: function () {
                (l--, !l && s && (s.parentNode && s.parentNode.removeChild(s), (s = null)));
            },
        };
    },
    Rx = function () {
        var l = Mx();
        return function (s, c) {
            h.useEffect(
                function () {
                    return (
                        l.add(s),
                        function () {
                            l.remove();
                        }
                    );
                },
                [s && c]
            );
        };
    },
    Zg = function () {
        var l = Rx(),
            s = function (c) {
                var r = c.styles,
                    d = c.dynamic;
                return (l(r, d), null);
            };
        return s;
    },
    kx = { left: 0, top: 0, right: 0, gap: 0 },
    ju = function (l) {
        return parseInt(l || '', 10) || 0;
    },
    Ox = function (l) {
        var s = window.getComputedStyle(document.body),
            c = s[l === 'padding' ? 'paddingLeft' : 'marginLeft'],
            r = s[l === 'padding' ? 'paddingTop' : 'marginTop'],
            d = s[l === 'padding' ? 'paddingRight' : 'marginRight'];
        return [ju(c), ju(r), ju(d)];
    },
    zx = function (l) {
        if ((l === void 0 && (l = 'margin'), typeof window > 'u')) return kx;
        var s = Ox(l),
            c = document.documentElement.clientWidth,
            r = window.innerWidth;
        return { left: s[0], top: s[1], right: s[2], gap: Math.max(0, r - c + s[2] - s[0]) };
    },
    Dx = Zg(),
    ql = 'data-scroll-locked',
    _x = function (l, s, c, r) {
        var d = l.left,
            m = l.top,
            p = l.right,
            g = l.gap;
        return (
            c === void 0 && (c = 'margin'),
            `
  .`
                .concat(
                    gx,
                    ` {
   overflow: hidden `
                )
                .concat(
                    r,
                    `;
   padding-right: `
                )
                .concat(g, 'px ')
                .concat(
                    r,
                    `;
  }
  body[`
                )
                .concat(
                    ql,
                    `] {
    overflow: hidden `
                )
                .concat(
                    r,
                    `;
    overscroll-behavior: contain;
    `
                )
                .concat(
                    [
                        s && 'position: relative '.concat(r, ';'),
                        c === 'margin' &&
                            `
    padding-left: `
                                .concat(
                                    d,
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
                                .concat(g, 'px ')
                                .concat(
                                    r,
                                    `;
    `
                                ),
                        c === 'padding' && 'padding-right: '.concat(g, 'px ').concat(r, ';'),
                    ]
                        .filter(Boolean)
                        .join(''),
                    `
  }
  
  .`
                )
                .concat(
                    js,
                    ` {
    right: `
                )
                .concat(g, 'px ')
                .concat(
                    r,
                    `;
  }
  
  .`
                )
                .concat(
                    Ms,
                    ` {
    margin-right: `
                )
                .concat(g, 'px ')
                .concat(
                    r,
                    `;
  }
  
  .`
                )
                .concat(js, ' .')
                .concat(
                    js,
                    ` {
    right: 0 `
                )
                .concat(
                    r,
                    `;
  }
  
  .`
                )
                .concat(Ms, ' .')
                .concat(
                    Ms,
                    ` {
    margin-right: 0 `
                )
                .concat(
                    r,
                    `;
  }
  
  body[`
                )
                .concat(
                    ql,
                    `] {
    `
                )
                .concat(vx, ': ')
                .concat(
                    g,
                    `px;
  }
`
                )
        );
    },
    Yp = function () {
        var l = parseInt(document.body.getAttribute(ql) || '0', 10);
        return isFinite(l) ? l : 0;
    },
    Lx = function () {
        h.useEffect(function () {
            return (
                document.body.setAttribute(ql, (Yp() + 1).toString()),
                function () {
                    var l = Yp() - 1;
                    l <= 0 ? document.body.removeAttribute(ql) : document.body.setAttribute(ql, l.toString());
                }
            );
        }, []);
    },
    Ux = function (l) {
        var s = l.noRelative,
            c = l.noImportant,
            r = l.gapMode,
            d = r === void 0 ? 'margin' : r;
        Lx();
        var m = h.useMemo(
            function () {
                return zx(d);
            },
            [d]
        );
        return h.createElement(Dx, { styles: _x(m, !s, d, c ? '' : '!important') });
    },
    Bu = !1;
if (typeof window < 'u')
    try {
        var Ts = Object.defineProperty({}, 'passive', {
            get: function () {
                return ((Bu = !0), !0);
            },
        });
        (window.addEventListener('test', Ts, Ts), window.removeEventListener('test', Ts, Ts));
    } catch {
        Bu = !1;
    }
var Bl = Bu ? { passive: !1 } : !1,
    Bx = function (l) {
        return l.tagName === 'TEXTAREA';
    },
    Jg = function (l, s) {
        if (!(l instanceof Element)) return !1;
        var c = window.getComputedStyle(l);
        return c[s] !== 'hidden' && !(c.overflowY === c.overflowX && !Bx(l) && c[s] === 'visible');
    },
    Hx = function (l) {
        return Jg(l, 'overflowY');
    },
    Vx = function (l) {
        return Jg(l, 'overflowX');
    },
    Xp = function (l, s) {
        var c = s.ownerDocument,
            r = s;
        do {
            typeof ShadowRoot < 'u' && r instanceof ShadowRoot && (r = r.host);
            var d = Ig(l, r);
            if (d) {
                var m = Wg(l, r),
                    p = m[1],
                    g = m[2];
                if (p > g) return !0;
            }
            r = r.parentNode;
        } while (r && r !== c.body);
        return !1;
    },
    qx = function (l) {
        var s = l.scrollTop,
            c = l.scrollHeight,
            r = l.clientHeight;
        return [s, c, r];
    },
    Gx = function (l) {
        var s = l.scrollLeft,
            c = l.scrollWidth,
            r = l.clientWidth;
        return [s, c, r];
    },
    Ig = function (l, s) {
        return l === 'v' ? Hx(s) : Vx(s);
    },
    Wg = function (l, s) {
        return l === 'v' ? qx(s) : Gx(s);
    },
    Yx = function (l, s) {
        return l === 'h' && s === 'rtl' ? -1 : 1;
    },
    Xx = function (l, s, c, r, d) {
        var m = Yx(l, window.getComputedStyle(s).direction),
            p = m * r,
            g = c.target,
            b = s.contains(g),
            y = !1,
            S = p > 0,
            x = 0,
            T = 0;
        do {
            if (!g) break;
            var j = Wg(l, g),
                R = j[0],
                w = j[1],
                M = j[2],
                U = w - M - m * R;
            (R || U) && Ig(l, g) && ((x += U), (T += R));
            var B = g.parentNode;
            g = B && B.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? B.host : B;
        } while ((!b && g !== document.body) || (b && (s.contains(g) || s === g)));
        return (((S && Math.abs(x) < 1) || (!S && Math.abs(T) < 1)) && (y = !0), y);
    },
    As = function (l) {
        return 'changedTouches' in l ? [l.changedTouches[0].clientX, l.changedTouches[0].clientY] : [0, 0];
    },
    Kp = function (l) {
        return [l.deltaX, l.deltaY];
    },
    Qp = function (l) {
        return l && 'current' in l ? l.current : l;
    },
    Kx = function (l, s) {
        return l[0] === s[0] && l[1] === s[1];
    },
    Qx = function (l) {
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
    Zx = 0,
    Hl = [];
function Jx(l) {
    var s = h.useRef([]),
        c = h.useRef([0, 0]),
        r = h.useRef(),
        d = h.useState(Zx++)[0],
        m = h.useState(Zg)[0],
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
                    document.body.classList.add('block-interactivity-'.concat(d));
                    var w = px([l.lockRef.current], (l.shards || []).map(Qp), !0).filter(Boolean);
                    return (
                        w.forEach(function (M) {
                            return M.classList.add('allow-interactivity-'.concat(d));
                        }),
                        function () {
                            (document.body.classList.remove('block-interactivity-'.concat(d)),
                                w.forEach(function (M) {
                                    return M.classList.remove('allow-interactivity-'.concat(d));
                                }));
                        }
                    );
                }
            },
            [l.inert, l.lockRef.current, l.shards]
        ));
    var g = h.useCallback(function (w, M) {
            if (('touches' in w && w.touches.length === 2) || (w.type === 'wheel' && w.ctrlKey)) return !p.current.allowPinchZoom;
            var U = As(w),
                B = c.current,
                H = 'deltaX' in w ? w.deltaX : B[0] - U[0],
                Z = 'deltaY' in w ? w.deltaY : B[1] - U[1],
                $,
                ne = w.target,
                z = Math.abs(H) > Math.abs(Z) ? 'h' : 'v';
            if ('touches' in w && z === 'h' && ne.type === 'range') return !1;
            var X = Xp(z, ne);
            if (!X) return !0;
            if ((X ? ($ = z) : (($ = z === 'v' ? 'h' : 'v'), (X = Xp(z, ne))), !X)) return !1;
            if ((!r.current && 'changedTouches' in w && (H || Z) && (r.current = $), !$)) return !0;
            var ae = r.current || $;
            return Xx(ae, M, w, ae === 'h' ? H : Z);
        }, []),
        b = h.useCallback(function (w) {
            var M = w;
            if (!(!Hl.length || Hl[Hl.length - 1] !== m)) {
                var U = 'deltaY' in M ? Kp(M) : As(M),
                    B = s.current.filter(function ($) {
                        return $.name === M.type && ($.target === M.target || M.target === $.shadowParent) && Kx($.delta, U);
                    })[0];
                if (B && B.should) {
                    M.cancelable && M.preventDefault();
                    return;
                }
                if (!B) {
                    var H = (p.current.shards || [])
                            .map(Qp)
                            .filter(Boolean)
                            .filter(function ($) {
                                return $.contains(M.target);
                            }),
                        Z = H.length > 0 ? g(M, H[0]) : !p.current.noIsolation;
                    Z && M.cancelable && M.preventDefault();
                }
            }
        }, []),
        y = h.useCallback(function (w, M, U, B) {
            var H = { name: w, delta: M, target: U, should: B, shadowParent: Ix(U) };
            (s.current.push(H),
                setTimeout(function () {
                    s.current = s.current.filter(function (Z) {
                        return Z !== H;
                    });
                }, 1));
        }, []),
        S = h.useCallback(function (w) {
            ((c.current = As(w)), (r.current = void 0));
        }, []),
        x = h.useCallback(function (w) {
            y(w.type, Kp(w), w.target, g(w, l.lockRef.current));
        }, []),
        T = h.useCallback(function (w) {
            y(w.type, As(w), w.target, g(w, l.lockRef.current));
        }, []);
    h.useEffect(function () {
        return (
            Hl.push(m),
            l.setCallbacks({ onScrollCapture: x, onWheelCapture: x, onTouchMoveCapture: T }),
            document.addEventListener('wheel', b, Bl),
            document.addEventListener('touchmove', b, Bl),
            document.addEventListener('touchstart', S, Bl),
            function () {
                ((Hl = Hl.filter(function (w) {
                    return w !== m;
                })),
                    document.removeEventListener('wheel', b, Bl),
                    document.removeEventListener('touchmove', b, Bl),
                    document.removeEventListener('touchstart', S, Bl));
            }
        );
    }, []);
    var j = l.removeScrollBar,
        R = l.inert;
    return h.createElement(
        h.Fragment,
        null,
        R ? h.createElement(m, { styles: Qx(d) }) : null,
        j ? h.createElement(Ux, { noRelative: l.noRelative, gapMode: l.gapMode }) : null
    );
}
function Ix(l) {
    for (var s = null; l !== null; ) (l instanceof ShadowRoot && ((s = l.host), (l = l.host)), (l = l.parentNode));
    return s;
}
const Wx = Ex(Qg, Jx);
var $g = h.forwardRef(function (l, s) {
    return h.createElement(Ys, yn({}, l, { ref: s, sideCar: Wx }));
});
$g.classNames = Ys.classNames;
var $x = [' ', 'Enter', 'ArrowUp', 'ArrowDown'],
    Fx = [' ', 'Enter'],
    Wa = 'Select',
    [Xs, Ks, Px] = hS(Wa),
    [Jl, sC] = Bs(Wa, [Px, kg]),
    Qs = kg(),
    [ew, Ca] = Jl(Wa),
    [tw, nw] = Jl(Wa),
    Fg = l => {
        const {
                __scopeSelect: s,
                children: c,
                open: r,
                defaultOpen: d,
                onOpenChange: m,
                value: p,
                defaultValue: g,
                onValueChange: b,
                dir: y,
                name: S,
                autoComplete: x,
                disabled: T,
                required: j,
                form: R,
            } = l,
            w = Qs(s),
            [M, U] = h.useState(null),
            [B, H] = h.useState(null),
            [Z, $] = h.useState(!1),
            ne = gS(y),
            [z, X] = Uu({ prop: r, defaultProp: d ?? !1, onChange: m, caller: Wa }),
            [ae, te] = Uu({ prop: p, defaultProp: g, onChange: b, caller: Wa }),
            ge = h.useRef(null),
            le = M ? R || !!M.closest('form') : !0,
            [fe, ie] = h.useState(new Set()),
            K = Array.from(fe)
                .map(A => A.props.value)
                .join(';');
        return u.jsx(tx, {
            ...w,
            children: u.jsxs(ew, {
                required: j,
                scope: s,
                trigger: M,
                onTriggerChange: U,
                valueNode: B,
                onValueNodeChange: H,
                valueNodeHasChildren: Z,
                onValueNodeHasChildrenChange: $,
                contentId: Zu(),
                value: ae,
                onValueChange: te,
                open: z,
                onOpenChange: X,
                dir: ne,
                triggerPointerDownPosRef: ge,
                disabled: T,
                children: [
                    u.jsx(Xs.Provider, {
                        scope: s,
                        children: u.jsx(tw, {
                            scope: l.__scopeSelect,
                            onNativeOptionAdd: h.useCallback(A => {
                                ie(G => new Set(G).add(A));
                            }, []),
                            onNativeOptionRemove: h.useCallback(A => {
                                ie(G => {
                                    const O = new Set(G);
                                    return (O.delete(A), O);
                                });
                            }, []),
                            children: c,
                        }),
                    }),
                    le
                        ? u.jsxs(
                              wv,
                              {
                                  'aria-hidden': !0,
                                  required: j,
                                  tabIndex: -1,
                                  name: S,
                                  autoComplete: x,
                                  value: ae,
                                  onChange: A => te(A.target.value),
                                  disabled: T,
                                  form: R,
                                  children: [ae === void 0 ? u.jsx('option', { value: '' }) : null, Array.from(fe)],
                              },
                              K
                          )
                        : null,
                ],
            }),
        });
    };
Fg.displayName = Wa;
var Pg = 'SelectTrigger',
    ev = h.forwardRef((l, s) => {
        const { __scopeSelect: c, disabled: r = !1, ...d } = l,
            m = Qs(c),
            p = Ca(Pg, c),
            g = p.disabled || r,
            b = ut(s, p.onTriggerChange),
            y = Ks(c),
            S = h.useRef('touch'),
            [x, T, j] = Ev(w => {
                const M = y().filter(H => !H.disabled),
                    U = M.find(H => H.value === p.value),
                    B = Tv(M, w, U);
                B !== void 0 && p.onValueChange(B.value);
            }),
            R = w => {
                (g || (p.onOpenChange(!0), j()), w && (p.triggerPointerDownPosRef.current = { x: Math.round(w.pageX), y: Math.round(w.pageY) }));
            };
        return u.jsx(nx, {
            asChild: !0,
            ...m,
            children: u.jsx(Ze.button, {
                type: 'button',
                role: 'combobox',
                'aria-controls': p.contentId,
                'aria-expanded': p.open,
                'aria-required': p.required,
                'aria-autocomplete': 'none',
                dir: p.dir,
                'data-state': p.open ? 'open' : 'closed',
                disabled: g,
                'data-disabled': g ? '' : void 0,
                'data-placeholder': Cv(p.value) ? '' : void 0,
                ...d,
                ref: b,
                onClick: Pe(d.onClick, w => {
                    (w.currentTarget.focus(), S.current !== 'mouse' && R(w));
                }),
                onPointerDown: Pe(d.onPointerDown, w => {
                    S.current = w.pointerType;
                    const M = w.target;
                    (M.hasPointerCapture(w.pointerId) && M.releasePointerCapture(w.pointerId),
                        w.button === 0 && w.ctrlKey === !1 && w.pointerType === 'mouse' && (R(w), w.preventDefault()));
                }),
                onKeyDown: Pe(d.onKeyDown, w => {
                    const M = x.current !== '';
                    (!(w.ctrlKey || w.altKey || w.metaKey) && w.key.length === 1 && T(w.key),
                        !(M && w.key === ' ') && $x.includes(w.key) && (R(), w.preventDefault()));
                }),
            }),
        });
    });
ev.displayName = Pg;
var tv = 'SelectValue',
    nv = h.forwardRef((l, s) => {
        const { __scopeSelect: c, className: r, style: d, children: m, placeholder: p = '', ...g } = l,
            b = Ca(tv, c),
            { onValueNodeHasChildrenChange: y } = b,
            S = m !== void 0,
            x = ut(s, b.onValueNodeChange);
        return (
            zt(() => {
                y(S);
            }, [y, S]),
            u.jsx(Ze.span, { ...g, ref: x, style: { pointerEvents: 'none' }, children: Cv(b.value) ? u.jsx(u.Fragment, { children: p }) : m })
        );
    });
nv.displayName = tv;
var aw = 'SelectIcon',
    av = h.forwardRef((l, s) => {
        const { __scopeSelect: c, children: r, ...d } = l;
        return u.jsx(Ze.span, { 'aria-hidden': !0, ...d, ref: s, children: r || '▼' });
    });
av.displayName = aw;
var lw = 'SelectPortal',
    lv = l => u.jsx(Vg, { asChild: !0, ...l });
lv.displayName = lw;
var $a = 'SelectContent',
    iv = h.forwardRef((l, s) => {
        const c = Ca($a, l.__scopeSelect),
            [r, d] = h.useState();
        if (
            (zt(() => {
                d(new DocumentFragment());
            }, []),
            !c.open)
        ) {
            const m = r;
            return m
                ? $i.createPortal(
                      u.jsx(ov, {
                          scope: l.__scopeSelect,
                          children: u.jsx(Xs.Slot, { scope: l.__scopeSelect, children: u.jsx('div', { children: l.children }) }),
                      }),
                      m
                  )
                : null;
        }
        return u.jsx(sv, { ...l, ref: s });
    });
iv.displayName = $a;
var on = 10,
    [ov, Ea] = Jl($a),
    iw = 'SelectContentImpl',
    ow = Ji('SelectContent.RemoveScroll'),
    sv = h.forwardRef((l, s) => {
        const {
                __scopeSelect: c,
                position: r = 'item-aligned',
                onCloseAutoFocus: d,
                onEscapeKeyDown: m,
                onPointerDownOutside: p,
                side: g,
                sideOffset: b,
                align: y,
                alignOffset: S,
                arrowPadding: x,
                collisionBoundary: T,
                collisionPadding: j,
                sticky: R,
                hideWhenDetached: w,
                avoidCollisions: M,
                ...U
            } = l,
            B = Ca($a, c),
            [H, Z] = h.useState(null),
            [$, ne] = h.useState(null),
            z = ut(s, F => Z(F)),
            [X, ae] = h.useState(null),
            [te, ge] = h.useState(null),
            le = Ks(c),
            [fe, ie] = h.useState(!1),
            K = h.useRef(!1);
        (h.useEffect(() => {
            if (H) return hx(H);
        }, [H]),
            NS());
        const A = h.useCallback(
                F => {
                    const [be, ...ye] = le().map(Me => Me.ref.current),
                        [we] = ye.slice(-1),
                        Te = document.activeElement;
                    for (const Me of F)
                        if (
                            Me === Te ||
                            (Me?.scrollIntoView({ block: 'nearest' }),
                            Me === be && $ && ($.scrollTop = 0),
                            Me === we && $ && ($.scrollTop = $.scrollHeight),
                            Me?.focus(),
                            document.activeElement !== Te)
                        )
                            return;
                },
                [le, $]
            ),
            G = h.useCallback(() => A([X, H]), [A, X, H]);
        h.useEffect(() => {
            fe && G();
        }, [fe, G]);
        const { onOpenChange: O, triggerPointerDownPosRef: ee } = B;
        (h.useEffect(() => {
            if (H) {
                let F = { x: 0, y: 0 };
                const be = we => {
                        F = { x: Math.abs(Math.round(we.pageX) - (ee.current?.x ?? 0)), y: Math.abs(Math.round(we.pageY) - (ee.current?.y ?? 0)) };
                    },
                    ye = we => {
                        (F.x <= 10 && F.y <= 10 ? we.preventDefault() : H.contains(we.target) || O(!1),
                            document.removeEventListener('pointermove', be),
                            (ee.current = null));
                    };
                return (
                    ee.current !== null &&
                        (document.addEventListener('pointermove', be), document.addEventListener('pointerup', ye, { capture: !0, once: !0 })),
                    () => {
                        (document.removeEventListener('pointermove', be), document.removeEventListener('pointerup', ye, { capture: !0 }));
                    }
                );
            }
        }, [H, O, ee]),
            h.useEffect(() => {
                const F = () => O(!1);
                return (
                    window.addEventListener('blur', F),
                    window.addEventListener('resize', F),
                    () => {
                        (window.removeEventListener('blur', F), window.removeEventListener('resize', F));
                    }
                );
            }, [O]));
        const [de, E] = Ev(F => {
                const be = le().filter(Te => !Te.disabled),
                    ye = be.find(Te => Te.ref.current === document.activeElement),
                    we = Tv(be, F, ye);
                we && setTimeout(() => we.ref.current.focus());
            }),
            q = h.useCallback(
                (F, be, ye) => {
                    const we = !K.current && !ye;
                    ((B.value !== void 0 && B.value === be) || we) && (ae(F), we && (K.current = !0));
                },
                [B.value]
            ),
            W = h.useCallback(() => H?.focus(), [H]),
            P = h.useCallback(
                (F, be, ye) => {
                    const we = !K.current && !ye;
                    ((B.value !== void 0 && B.value === be) || we) && ge(F);
                },
                [B.value]
            ),
            ue = r === 'popper' ? Hu : cv,
            he =
                ue === Hu
                    ? {
                          side: g,
                          sideOffset: b,
                          align: y,
                          alignOffset: S,
                          arrowPadding: x,
                          collisionBoundary: T,
                          collisionPadding: j,
                          sticky: R,
                          hideWhenDetached: w,
                          avoidCollisions: M,
                      }
                    : {};
        return u.jsx(ov, {
            scope: c,
            content: H,
            viewport: $,
            onViewportChange: ne,
            itemRefCallback: q,
            selectedItem: X,
            onItemLeave: W,
            itemTextRefCallback: P,
            focusSelectedItem: G,
            selectedItemText: te,
            position: r,
            isPositioned: fe,
            searchRef: de,
            children: u.jsx($g, {
                as: ow,
                allowPinchZoom: !0,
                children: u.jsx(pg, {
                    asChild: !0,
                    trapped: B.open,
                    onMountAutoFocus: F => {
                        F.preventDefault();
                    },
                    onUnmountAutoFocus: Pe(d, F => {
                        (B.trigger?.focus({ preventScroll: !0 }), F.preventDefault());
                    }),
                    children: u.jsx(mg, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: m,
                        onPointerDownOutside: p,
                        onFocusOutside: F => F.preventDefault(),
                        onDismiss: () => B.onOpenChange(!1),
                        children: u.jsx(ue, {
                            role: 'listbox',
                            id: B.contentId,
                            'data-state': B.open ? 'open' : 'closed',
                            dir: B.dir,
                            onContextMenu: F => F.preventDefault(),
                            ...U,
                            ...he,
                            onPlaced: () => ie(!0),
                            ref: z,
                            style: { display: 'flex', flexDirection: 'column', outline: 'none', ...U.style },
                            onKeyDown: Pe(U.onKeyDown, F => {
                                const be = F.ctrlKey || F.altKey || F.metaKey;
                                if (
                                    (F.key === 'Tab' && F.preventDefault(),
                                    !be && F.key.length === 1 && E(F.key),
                                    ['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(F.key))
                                ) {
                                    let we = le()
                                        .filter(Te => !Te.disabled)
                                        .map(Te => Te.ref.current);
                                    if (
                                        (['ArrowUp', 'End'].includes(F.key) && (we = we.slice().reverse()), ['ArrowUp', 'ArrowDown'].includes(F.key))
                                    ) {
                                        const Te = F.target,
                                            Me = we.indexOf(Te);
                                        we = we.slice(Me + 1);
                                    }
                                    (setTimeout(() => A(we)), F.preventDefault());
                                }
                            }),
                        }),
                    }),
                }),
            }),
        });
    });
sv.displayName = iw;
var sw = 'SelectItemAlignedPosition',
    cv = h.forwardRef((l, s) => {
        const { __scopeSelect: c, onPlaced: r, ...d } = l,
            m = Ca($a, c),
            p = Ea($a, c),
            [g, b] = h.useState(null),
            [y, S] = h.useState(null),
            x = ut(s, z => S(z)),
            T = Ks(c),
            j = h.useRef(!1),
            R = h.useRef(!0),
            { viewport: w, selectedItem: M, selectedItemText: U, focusSelectedItem: B } = p,
            H = h.useCallback(() => {
                if (m.trigger && m.valueNode && g && y && w && M && U) {
                    const z = m.trigger.getBoundingClientRect(),
                        X = y.getBoundingClientRect(),
                        ae = m.valueNode.getBoundingClientRect(),
                        te = U.getBoundingClientRect();
                    if (m.dir !== 'rtl') {
                        const Te = te.left - X.left,
                            Me = ae.left - Te,
                            et = z.left - Me,
                            ot = z.width + et,
                            en = Math.max(ot, X.width),
                            tn = window.innerWidth - on,
                            J = Cp(Me, [on, Math.max(on, tn - en)]);
                        ((g.style.minWidth = ot + 'px'), (g.style.left = J + 'px'));
                    } else {
                        const Te = X.right - te.right,
                            Me = window.innerWidth - ae.right - Te,
                            et = window.innerWidth - z.right - Me,
                            ot = z.width + et,
                            en = Math.max(ot, X.width),
                            tn = window.innerWidth - on,
                            J = Cp(Me, [on, Math.max(on, tn - en)]);
                        ((g.style.minWidth = ot + 'px'), (g.style.right = J + 'px'));
                    }
                    const ge = T(),
                        le = window.innerHeight - on * 2,
                        fe = w.scrollHeight,
                        ie = window.getComputedStyle(y),
                        K = parseInt(ie.borderTopWidth, 10),
                        A = parseInt(ie.paddingTop, 10),
                        G = parseInt(ie.borderBottomWidth, 10),
                        O = parseInt(ie.paddingBottom, 10),
                        ee = K + A + fe + O + G,
                        de = Math.min(M.offsetHeight * 5, ee),
                        E = window.getComputedStyle(w),
                        q = parseInt(E.paddingTop, 10),
                        W = parseInt(E.paddingBottom, 10),
                        P = z.top + z.height / 2 - on,
                        ue = le - P,
                        he = M.offsetHeight / 2,
                        F = M.offsetTop + he,
                        be = K + A + F,
                        ye = ee - be;
                    if (be <= P) {
                        const Te = ge.length > 0 && M === ge[ge.length - 1].ref.current;
                        g.style.bottom = '0px';
                        const Me = y.clientHeight - w.offsetTop - w.offsetHeight,
                            et = Math.max(ue, he + (Te ? W : 0) + Me + G),
                            ot = be + et;
                        g.style.height = ot + 'px';
                    } else {
                        const Te = ge.length > 0 && M === ge[0].ref.current;
                        g.style.top = '0px';
                        const et = Math.max(P, K + w.offsetTop + (Te ? q : 0) + he) + ye;
                        ((g.style.height = et + 'px'), (w.scrollTop = be - P + w.offsetTop));
                    }
                    ((g.style.margin = `${on}px 0`),
                        (g.style.minHeight = de + 'px'),
                        (g.style.maxHeight = le + 'px'),
                        r?.(),
                        requestAnimationFrame(() => (j.current = !0)));
                }
            }, [T, m.trigger, m.valueNode, g, y, w, M, U, m.dir, r]);
        zt(() => H(), [H]);
        const [Z, $] = h.useState();
        zt(() => {
            y && $(window.getComputedStyle(y).zIndex);
        }, [y]);
        const ne = h.useCallback(
            z => {
                z && R.current === !0 && (H(), B?.(), (R.current = !1));
            },
            [H, B]
        );
        return u.jsx(rw, {
            scope: c,
            contentWrapper: g,
            shouldExpandOnScrollRef: j,
            onScrollButtonChange: ne,
            children: u.jsx('div', {
                ref: b,
                style: { display: 'flex', flexDirection: 'column', position: 'fixed', zIndex: Z },
                children: u.jsx(Ze.div, { ...d, ref: x, style: { boxSizing: 'border-box', maxHeight: '100%', ...d.style } }),
            }),
        });
    });
cv.displayName = sw;
var cw = 'SelectPopperPosition',
    Hu = h.forwardRef((l, s) => {
        const { __scopeSelect: c, align: r = 'start', collisionPadding: d = on, ...m } = l,
            p = Qs(c);
        return u.jsx(ax, {
            ...p,
            ...m,
            ref: s,
            align: r,
            collisionPadding: d,
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
Hu.displayName = cw;
var [rw, nf] = Jl($a, {}),
    Vu = 'SelectViewport',
    rv = h.forwardRef((l, s) => {
        const { __scopeSelect: c, nonce: r, ...d } = l,
            m = Ea(Vu, c),
            p = nf(Vu, c),
            g = ut(s, m.onViewportChange),
            b = h.useRef(0);
        return u.jsxs(u.Fragment, {
            children: [
                u.jsx('style', {
                    dangerouslySetInnerHTML: {
                        __html: '[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}',
                    },
                    nonce: r,
                }),
                u.jsx(Xs.Slot, {
                    scope: c,
                    children: u.jsx(Ze.div, {
                        'data-radix-select-viewport': '',
                        role: 'presentation',
                        ...d,
                        ref: g,
                        style: { position: 'relative', flex: 1, overflow: 'hidden auto', ...d.style },
                        onScroll: Pe(d.onScroll, y => {
                            const S = y.currentTarget,
                                { contentWrapper: x, shouldExpandOnScrollRef: T } = p;
                            if (T?.current && x) {
                                const j = Math.abs(b.current - S.scrollTop);
                                if (j > 0) {
                                    const R = window.innerHeight - on * 2,
                                        w = parseFloat(x.style.minHeight),
                                        M = parseFloat(x.style.height),
                                        U = Math.max(w, M);
                                    if (U < R) {
                                        const B = U + j,
                                            H = Math.min(R, B),
                                            Z = B - H;
                                        ((x.style.height = H + 'px'),
                                            x.style.bottom === '0px' && ((S.scrollTop = Z > 0 ? Z : 0), (x.style.justifyContent = 'flex-end')));
                                    }
                                }
                            }
                            b.current = S.scrollTop;
                        }),
                    }),
                }),
            ],
        });
    });
rv.displayName = Vu;
var uv = 'SelectGroup',
    [uw, fw] = Jl(uv),
    dw = h.forwardRef((l, s) => {
        const { __scopeSelect: c, ...r } = l,
            d = Zu();
        return u.jsx(uw, { scope: c, id: d, children: u.jsx(Ze.div, { role: 'group', 'aria-labelledby': d, ...r, ref: s }) });
    });
dw.displayName = uv;
var fv = 'SelectLabel',
    dv = h.forwardRef((l, s) => {
        const { __scopeSelect: c, ...r } = l,
            d = fw(fv, c);
        return u.jsx(Ze.div, { id: d.id, ...r, ref: s });
    });
dv.displayName = fv;
var Ls = 'SelectItem',
    [mw, mv] = Jl(Ls),
    hv = h.forwardRef((l, s) => {
        const { __scopeSelect: c, value: r, disabled: d = !1, textValue: m, ...p } = l,
            g = Ca(Ls, c),
            b = Ea(Ls, c),
            y = g.value === r,
            [S, x] = h.useState(m ?? ''),
            [T, j] = h.useState(!1),
            R = ut(s, B => b.itemRefCallback?.(B, r, d)),
            w = Zu(),
            M = h.useRef('touch'),
            U = () => {
                d || (g.onValueChange(r), g.onOpenChange(!1));
            };
        if (r === '')
            throw new Error(
                'A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.'
            );
        return u.jsx(mw, {
            scope: c,
            value: r,
            disabled: d,
            textId: w,
            isSelected: y,
            onItemTextChange: h.useCallback(B => {
                x(H => H || (B?.textContent ?? '').trim());
            }, []),
            children: u.jsx(Xs.ItemSlot, {
                scope: c,
                value: r,
                disabled: d,
                textValue: S,
                children: u.jsx(Ze.div, {
                    role: 'option',
                    'aria-labelledby': w,
                    'data-highlighted': T ? '' : void 0,
                    'aria-selected': y && T,
                    'data-state': y ? 'checked' : 'unchecked',
                    'aria-disabled': d || void 0,
                    'data-disabled': d ? '' : void 0,
                    tabIndex: d ? void 0 : -1,
                    ...p,
                    ref: R,
                    onFocus: Pe(p.onFocus, () => j(!0)),
                    onBlur: Pe(p.onBlur, () => j(!1)),
                    onClick: Pe(p.onClick, () => {
                        M.current !== 'mouse' && U();
                    }),
                    onPointerUp: Pe(p.onPointerUp, () => {
                        M.current === 'mouse' && U();
                    }),
                    onPointerDown: Pe(p.onPointerDown, B => {
                        M.current = B.pointerType;
                    }),
                    onPointerMove: Pe(p.onPointerMove, B => {
                        ((M.current = B.pointerType), d ? b.onItemLeave?.() : M.current === 'mouse' && B.currentTarget.focus({ preventScroll: !0 }));
                    }),
                    onPointerLeave: Pe(p.onPointerLeave, B => {
                        B.currentTarget === document.activeElement && b.onItemLeave?.();
                    }),
                    onKeyDown: Pe(p.onKeyDown, B => {
                        (b.searchRef?.current !== '' && B.key === ' ') || (Fx.includes(B.key) && U(), B.key === ' ' && B.preventDefault());
                    }),
                }),
            }),
        });
    });
hv.displayName = Ls;
var Ki = 'SelectItemText',
    pv = h.forwardRef((l, s) => {
        const { __scopeSelect: c, className: r, style: d, ...m } = l,
            p = Ca(Ki, c),
            g = Ea(Ki, c),
            b = mv(Ki, c),
            y = nw(Ki, c),
            [S, x] = h.useState(null),
            T = ut(
                s,
                U => x(U),
                b.onItemTextChange,
                U => g.itemTextRefCallback?.(U, b.value, b.disabled)
            ),
            j = S?.textContent,
            R = h.useMemo(() => u.jsx('option', { value: b.value, disabled: b.disabled, children: j }, b.value), [b.disabled, b.value, j]),
            { onNativeOptionAdd: w, onNativeOptionRemove: M } = y;
        return (
            zt(() => (w(R), () => M(R)), [w, M, R]),
            u.jsxs(u.Fragment, {
                children: [
                    u.jsx(Ze.span, { id: b.textId, ...m, ref: T }),
                    b.isSelected && p.valueNode && !p.valueNodeHasChildren ? $i.createPortal(m.children, p.valueNode) : null,
                ],
            })
        );
    });
pv.displayName = Ki;
var gv = 'SelectItemIndicator',
    vv = h.forwardRef((l, s) => {
        const { __scopeSelect: c, ...r } = l;
        return mv(gv, c).isSelected ? u.jsx(Ze.span, { 'aria-hidden': !0, ...r, ref: s }) : null;
    });
vv.displayName = gv;
var qu = 'SelectScrollUpButton',
    yv = h.forwardRef((l, s) => {
        const c = Ea(qu, l.__scopeSelect),
            r = nf(qu, l.__scopeSelect),
            [d, m] = h.useState(!1),
            p = ut(s, r.onScrollButtonChange);
        return (
            zt(() => {
                if (c.viewport && c.isPositioned) {
                    let g = function () {
                        const y = b.scrollTop > 0;
                        m(y);
                    };
                    const b = c.viewport;
                    return (g(), b.addEventListener('scroll', g), () => b.removeEventListener('scroll', g));
                }
            }, [c.viewport, c.isPositioned]),
            d
                ? u.jsx(Sv, {
                      ...l,
                      ref: p,
                      onAutoScroll: () => {
                          const { viewport: g, selectedItem: b } = c;
                          g && b && (g.scrollTop = g.scrollTop - b.offsetHeight);
                      },
                  })
                : null
        );
    });
yv.displayName = qu;
var Gu = 'SelectScrollDownButton',
    bv = h.forwardRef((l, s) => {
        const c = Ea(Gu, l.__scopeSelect),
            r = nf(Gu, l.__scopeSelect),
            [d, m] = h.useState(!1),
            p = ut(s, r.onScrollButtonChange);
        return (
            zt(() => {
                if (c.viewport && c.isPositioned) {
                    let g = function () {
                        const y = b.scrollHeight - b.clientHeight,
                            S = Math.ceil(b.scrollTop) < y;
                        m(S);
                    };
                    const b = c.viewport;
                    return (g(), b.addEventListener('scroll', g), () => b.removeEventListener('scroll', g));
                }
            }, [c.viewport, c.isPositioned]),
            d
                ? u.jsx(Sv, {
                      ...l,
                      ref: p,
                      onAutoScroll: () => {
                          const { viewport: g, selectedItem: b } = c;
                          g && b && (g.scrollTop = g.scrollTop + b.offsetHeight);
                      },
                  })
                : null
        );
    });
bv.displayName = Gu;
var Sv = h.forwardRef((l, s) => {
        const { __scopeSelect: c, onAutoScroll: r, ...d } = l,
            m = Ea('SelectScrollButton', c),
            p = h.useRef(null),
            g = Ks(c),
            b = h.useCallback(() => {
                p.current !== null && (window.clearInterval(p.current), (p.current = null));
            }, []);
        return (
            h.useEffect(() => () => b(), [b]),
            zt(() => {
                g()
                    .find(S => S.ref.current === document.activeElement)
                    ?.ref.current?.scrollIntoView({ block: 'nearest' });
            }, [g]),
            u.jsx(Ze.div, {
                'aria-hidden': !0,
                ...d,
                ref: s,
                style: { flexShrink: 0, ...d.style },
                onPointerDown: Pe(d.onPointerDown, () => {
                    p.current === null && (p.current = window.setInterval(r, 50));
                }),
                onPointerMove: Pe(d.onPointerMove, () => {
                    (m.onItemLeave?.(), p.current === null && (p.current = window.setInterval(r, 50)));
                }),
                onPointerLeave: Pe(d.onPointerLeave, () => {
                    b();
                }),
            })
        );
    }),
    hw = 'SelectSeparator',
    xv = h.forwardRef((l, s) => {
        const { __scopeSelect: c, ...r } = l;
        return u.jsx(Ze.div, { 'aria-hidden': !0, ...r, ref: s });
    });
xv.displayName = hw;
var Yu = 'SelectArrow',
    pw = h.forwardRef((l, s) => {
        const { __scopeSelect: c, ...r } = l,
            d = Qs(c),
            m = Ca(Yu, c),
            p = Ea(Yu, c);
        return m.open && p.position === 'popper' ? u.jsx(lx, { ...d, ...r, ref: s }) : null;
    });
pw.displayName = Yu;
var gw = 'SelectBubbleInput',
    wv = h.forwardRef(({ __scopeSelect: l, value: s, ...c }, r) => {
        const d = h.useRef(null),
            m = ut(r, d),
            p = qg(s);
        return (
            h.useEffect(() => {
                const g = d.current;
                if (!g) return;
                const b = window.HTMLSelectElement.prototype,
                    S = Object.getOwnPropertyDescriptor(b, 'value').set;
                if (p !== s && S) {
                    const x = new Event('change', { bubbles: !0 });
                    (S.call(g, s), g.dispatchEvent(x));
                }
            }, [p, s]),
            u.jsx(Ze.select, { ...c, style: { ...Gg, ...c.style }, ref: m, defaultValue: s })
        );
    });
wv.displayName = gw;
function Cv(l) {
    return l === '' || l === void 0;
}
function Ev(l) {
    const s = Ja(l),
        c = h.useRef(''),
        r = h.useRef(0),
        d = h.useCallback(
            p => {
                const g = c.current + p;
                (s(g),
                    (function b(y) {
                        ((c.current = y), window.clearTimeout(r.current), y !== '' && (r.current = window.setTimeout(() => b(''), 1e3)));
                    })(g));
            },
            [s]
        ),
        m = h.useCallback(() => {
            ((c.current = ''), window.clearTimeout(r.current));
        }, []);
    return (h.useEffect(() => () => window.clearTimeout(r.current), []), [c, d, m]);
}
function Tv(l, s, c) {
    const d = s.length > 1 && Array.from(s).every(y => y === s[0]) ? s[0] : s,
        m = c ? l.indexOf(c) : -1;
    let p = vw(l, Math.max(m, 0));
    d.length === 1 && (p = p.filter(y => y !== c));
    const b = p.find(y => y.textValue.toLowerCase().startsWith(d.toLowerCase()));
    return b !== c ? b : void 0;
}
function vw(l, s) {
    return l.map((c, r) => l[(s + r) % l.length]);
}
var yw = Fg,
    Av = ev,
    bw = nv,
    Sw = av,
    xw = lv,
    Nv = iv,
    ww = rv,
    jv = dv,
    Mv = hv,
    Cw = pv,
    Ew = vv,
    Rv = yv,
    kv = bv,
    Ov = xv;
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tw = l => l.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
    Aw = l => l.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, c, r) => (r ? r.toUpperCase() : c.toLowerCase())),
    Zp = l => {
        const s = Aw(l);
        return s.charAt(0).toUpperCase() + s.slice(1);
    },
    zv = (...l) =>
        l
            .filter((s, c, r) => !!s && s.trim() !== '' && r.indexOf(s) === c)
            .join(' ')
            .trim(),
    Nw = l => {
        for (const s in l) if (s.startsWith('aria-') || s === 'role' || s === 'title') return !0;
    };
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var jw = {
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
 */ const Mw = h.forwardRef(
    ({ color: l = 'currentColor', size: s = 24, strokeWidth: c = 2, absoluteStrokeWidth: r, className: d = '', children: m, iconNode: p, ...g }, b) =>
        h.createElement(
            'svg',
            {
                ref: b,
                ...jw,
                width: s,
                height: s,
                stroke: l,
                strokeWidth: r ? (Number(c) * 24) / Number(s) : c,
                className: zv('lucide', d),
                ...(!m && !Nw(g) && { 'aria-hidden': 'true' }),
                ...g,
            },
            [...p.map(([y, S]) => h.createElement(y, S)), ...(Array.isArray(m) ? m : [m])]
        )
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const af = (l, s) => {
    const c = h.forwardRef(({ className: r, ...d }, m) =>
        h.createElement(Mw, { ref: m, iconNode: s, className: zv(`lucide-${Tw(Zp(l))}`, `lucide-${l}`, r), ...d })
    );
    return ((c.displayName = Zp(l)), c);
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rw = [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]],
    kw = af('check', Rw);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ow = [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]],
    Dv = af('chevron-down', Ow);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zw = [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]],
    Dw = af('chevron-up', zw),
    Qa = yw,
    Za = bw,
    ba = h.forwardRef(({ className: l, children: s, ...c }, r) =>
        u.jsxs(Av, {
            ref: r,
            className: St(
                'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
                l
            ),
            ...c,
            children: [s, u.jsx(Sw, { asChild: !0, children: u.jsx(Dv, { className: 'h-4 w-4 opacity-50' }) })],
        })
    );
ba.displayName = Av.displayName;
const _v = h.forwardRef(({ className: l, ...s }, c) =>
    u.jsx(Rv, {
        ref: c,
        className: St('flex cursor-default items-center justify-center py-1', l),
        ...s,
        children: u.jsx(Dw, { className: 'h-4 w-4' }),
    })
);
_v.displayName = Rv.displayName;
const Lv = h.forwardRef(({ className: l, ...s }, c) =>
    u.jsx(kv, {
        ref: c,
        className: St('flex cursor-default items-center justify-center py-1', l),
        ...s,
        children: u.jsx(Dv, { className: 'h-4 w-4' }),
    })
);
Lv.displayName = kv.displayName;
const Sa = h.forwardRef(({ className: l, children: s, position: c = 'popper', ...r }, d) =>
    u.jsx(xw, {
        children: u.jsxs(Nv, {
            ref: d,
            className: St(
                'relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]',
                c === 'popper' &&
                    'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
                l
            ),
            position: c,
            ...r,
            children: [
                u.jsx(_v, {}),
                u.jsx(ww, {
                    className: St('p-1', c === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'),
                    children: s,
                }),
                u.jsx(Lv, {}),
            ],
        }),
    })
);
Sa.displayName = Nv.displayName;
const _w = h.forwardRef(({ className: l, ...s }, c) => u.jsx(jv, { ref: c, className: St('px-2 py-1.5 text-sm font-semibold', l), ...s }));
_w.displayName = jv.displayName;
const Fe = h.forwardRef(({ className: l, children: s, ...c }, r) =>
    u.jsxs(Mv, {
        ref: r,
        className: St(
            'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            l
        ),
        ...c,
        children: [
            u.jsx('span', {
                className: 'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
                children: u.jsx(Ew, { children: u.jsx(kw, { className: 'h-4 w-4' }) }),
            }),
            u.jsx(Cw, { children: s }),
        ],
    })
);
Fe.displayName = Mv.displayName;
const Lw = h.forwardRef(({ className: l, ...s }, c) => u.jsx(Ov, { ref: c, className: St('-mx-1 my-1 h-px bg-muted', l), ...s }));
Lw.displayName = Ov.displayName;
var Zs = 'Switch',
    [Uw, cC] = Bs(Zs),
    [Bw, Hw] = Uw(Zs),
    Uv = h.forwardRef((l, s) => {
        const {
                __scopeSwitch: c,
                name: r,
                checked: d,
                defaultChecked: m,
                required: p,
                disabled: g,
                value: b = 'on',
                onCheckedChange: y,
                form: S,
                ...x
            } = l,
            [T, j] = h.useState(null),
            R = ut(s, H => j(H)),
            w = h.useRef(!1),
            M = T ? S || !!T.closest('form') : !0,
            [U, B] = Uu({ prop: d, defaultProp: m ?? !1, onChange: y, caller: Zs });
        return u.jsxs(Bw, {
            scope: c,
            checked: U,
            disabled: g,
            children: [
                u.jsx(Ze.button, {
                    type: 'button',
                    role: 'switch',
                    'aria-checked': U,
                    'aria-required': p,
                    'data-state': qv(U),
                    'data-disabled': g ? '' : void 0,
                    disabled: g,
                    value: b,
                    ...x,
                    ref: R,
                    onClick: Pe(l.onClick, H => {
                        (B(Z => !Z), M && ((w.current = H.isPropagationStopped()), w.current || H.stopPropagation()));
                    }),
                }),
                M &&
                    u.jsx(Vv, {
                        control: T,
                        bubbles: !w.current,
                        name: r,
                        value: b,
                        checked: U,
                        required: p,
                        disabled: g,
                        form: S,
                        style: { transform: 'translateX(-100%)' },
                    }),
            ],
        });
    });
Uv.displayName = Zs;
var Bv = 'SwitchThumb',
    Hv = h.forwardRef((l, s) => {
        const { __scopeSwitch: c, ...r } = l,
            d = Hw(Bv, c);
        return u.jsx(Ze.span, { 'data-state': qv(d.checked), 'data-disabled': d.disabled ? '' : void 0, ...r, ref: s });
    });
Hv.displayName = Bv;
var Vw = 'SwitchBubbleInput',
    Vv = h.forwardRef(({ __scopeSwitch: l, control: s, checked: c, bubbles: r = !0, ...d }, m) => {
        const p = h.useRef(null),
            g = ut(p, m),
            b = qg(c),
            y = Mg(s);
        return (
            h.useEffect(() => {
                const S = p.current;
                if (!S) return;
                const x = window.HTMLInputElement.prototype,
                    j = Object.getOwnPropertyDescriptor(x, 'checked').set;
                if (b !== c && j) {
                    const R = new Event('click', { bubbles: r });
                    (j.call(S, c), S.dispatchEvent(R));
                }
            }, [b, c, r]),
            u.jsx('input', {
                type: 'checkbox',
                'aria-hidden': !0,
                defaultChecked: c,
                ...d,
                tabIndex: -1,
                ref: g,
                style: { ...d.style, ...y, position: 'absolute', pointerEvents: 'none', opacity: 0, margin: 0 },
            })
        );
    });
Vv.displayName = Vw;
function qv(l) {
    return l ? 'checked' : 'unchecked';
}
var Gv = Uv,
    qw = Hv;
const Yv = h.forwardRef(({ className: l, ...s }, c) =>
    u.jsx(Gv, {
        className: St(
            'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
            l
        ),
        ...s,
        ref: c,
        children: u.jsx(qw, {
            className: St(
                'pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0'
            ),
        }),
    })
);
Yv.displayName = Gv.displayName;
const Xv = h.forwardRef(({ className: l, ...s }, c) =>
    u.jsx('textarea', {
        className: St(
            'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            l
        ),
        ref: c,
        ...s,
    })
);
Xv.displayName = 'Textarea';
var Gw = 'Label',
    Kv = h.forwardRef((l, s) =>
        u.jsx(Ze.label, {
            ...l,
            ref: s,
            onMouseDown: c => {
                c.target.closest('button, input, select, textarea') ||
                    (l.onMouseDown?.(c), !c.defaultPrevented && c.detail > 1 && c.preventDefault());
            },
        })
    );
Kv.displayName = Gw;
var Qv = Kv;
const Yw = eg('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'),
    vn = h.forwardRef(({ className: l, ...s }, c) => u.jsx(Qv, { ref: c, className: St(Yw(), l), ...s }));
vn.displayName = Qv.displayName;
const Xw = ({
        selectedProfile: l,
        selectedLanguage: s,
        selectedScreenshotInterval: c,
        selectedImageQuality: r,
        layoutMode: d,
        keybinds: m,
        googleSearchEnabled: p,
        backgroundTransparency: g,
        fontSize: b,
        onProfileChange: y,
        onLanguageChange: S,
        onScreenshotIntervalChange: x,
        onImageQualityChange: T,
        onLayoutModeChange: j,
        advancedMode: R,
        onAdvancedModeChange: w,
    }) => {
        const [M, U] = h.useState(m),
            [B, H] = h.useState(d);
        (h.useEffect(() => {
            (X(), te(), ge(), le(), fe(), ie(), Us());
        }, []),
            h.useEffect(() => {
                U(m);
            }, [m]),
            h.useEffect(() => {
                H(d);
            }, [d]));
        const Z = h.useCallback(
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
            $ = h.useCallback(
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
            z = h.useCallback(() => {
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
            X = h.useCallback(() => {
                const J = localStorage.getItem('customKeybinds');
                if (J)
                    try {
                        const Se = JSON.parse(J);
                        U({ ...z(), ...Se });
                    } catch (Se) {
                        (console.error('Failed to parse saved keybinds:', Se), U(z()));
                    }
            }, [z]),
            ae = h.useCallback(J => {
                if ((localStorage.setItem('customKeybinds', JSON.stringify(J)), window.electron?.ipcRenderer))
                    try {
                        window.electron.ipcRenderer.send('update-keybinds', J);
                    } catch (Se) {
                        console.error('Failed to send keybinds to main process:', Se);
                    }
            }, []),
            te = h.useCallback(() => {
                const J = localStorage.getItem('layoutMode');
                J && H(J);
            }, []),
            ge = h.useCallback(() => {}, []),
            le = h.useCallback(() => {}, []),
            fe = h.useCallback(() => {
                const J = localStorage.getItem('backgroundTransparency');
                J !== null && K(parseFloat(J));
            }, []),
            ie = h.useCallback(() => {
                const J = localStorage.getItem('fontSize');
                J !== null && A(parseInt(J, 10));
            }, []),
            K = h.useCallback(J => {
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
            G = h.useCallback(
                J => {
                    const Se = J;
                    (localStorage.setItem('selectedProfile', Se), y(Se));
                },
                [y]
            ),
            O = h.useCallback(
                J => {
                    const Se = J;
                    (localStorage.setItem('selectedLanguage', Se), S(Se));
                },
                [S]
            ),
            ee = h.useCallback(
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
                    (localStorage.setItem('layoutMode', J), H(J), j(J));
                },
                [j]
            ),
            q = h.useCallback(J => {
                localStorage.setItem('customPrompt', J.target.value);
            }, []),
            W = h.useCallback(
                (J, Se) => {
                    const Le = { ...M, [J]: Se };
                    (U(Le), ae(Le));
                },
                [M, ae]
            ),
            P = h.useCallback(() => {
                const J = z();
                (U(J), localStorage.removeItem('customKeybinds'), ae(J));
            }, [z, ae]);
        h.useCallback(async J => {
            if ((localStorage.setItem('googleSearchEnabled', J.toString()), window.electron?.ipcRenderer))
                try {
                    window.electron.ipcRenderer.send('update-google-search', J);
                } catch (Se) {
                    console.error('Failed to send google search setting to main process:', Se);
                }
        }, []);
        const ue = h.useCallback(
                J => {
                    (localStorage.setItem('advancedMode', J.toString()), w(J));
                },
                [w]
            ),
            he = h.useCallback(
                J => {
                    const Se = parseFloat(J.target.value);
                    (localStorage.setItem('backgroundTransparency', Se.toString()), K(Se));
                },
                [K]
            ),
            F = h.useCallback(
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
                    let Le = J.key;
                    switch (J.code) {
                        case 'ArrowUp':
                            Le = 'Up';
                            break;
                        case 'ArrowDown':
                            Le = 'Down';
                            break;
                        case 'ArrowLeft':
                            Le = 'Left';
                            break;
                        case 'ArrowRight':
                            Le = 'Right';
                            break;
                        case 'Escape':
                            Le = 'Escape';
                            break;
                        case 'Enter':
                            Le = 'Enter';
                            break;
                        case 'Space':
                            Le = 'Space';
                            break;
                        case 'Backspace':
                            Le = 'Backspace';
                            break;
                        case 'Delete':
                            Le = 'Delete';
                            break;
                        case 'Tab':
                            Le = 'Tab';
                            break;
                        case 'BracketLeft':
                            Le = '[';
                            break;
                        case 'BracketRight':
                            Le = ']';
                            break;
                        case 'Backslash':
                            Le = '\\';
                            break;
                        case 'Semicolon':
                            Le = ';';
                            break;
                        case 'Quote':
                            Le = "'";
                            break;
                        case 'Comma':
                            Le = ',';
                            break;
                        case 'Period':
                            Le = '.';
                            break;
                        case 'Slash':
                            Le = '/';
                            break;
                        default:
                            J.key.length === 1 && (Le = J.key.toUpperCase());
                            break;
                    }
                    if (['Control', 'Meta', 'Alt', 'Shift'].includes(J.key)) return;
                    const Qn = [...Se, Le].join('+'),
                        Ta = J.currentTarget.dataset.action;
                    (W(Ta, Qn), (J.currentTarget.value = Qn), J.currentTarget.blur());
                },
                [W]
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
            Te = Z(),
            Me = $(),
            et = ne(),
            ot = we(),
            en = Te.find(J => J.value === l),
            tn = Me.find(J => J.value === s);
        return u.jsxs('div', {
            className: 'settings-container',
            children: [
                u.jsxs('div', {
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
                                            u.jsxs(vn, {
                                                className: 'form-label',
                                                children: [
                                                    'Profile Type',
                                                    u.jsx('span', { className: 'current-selection', children: en?.name || 'Unknown' }),
                                                ],
                                            }),
                                            u.jsxs(Qa, {
                                                value: l,
                                                onValueChange: G,
                                                children: [
                                                    u.jsx(ba, { className: 'form-control', children: u.jsx(Za, { placeholder: 'Select profile' }) }),
                                                    u.jsx(Sa, { children: Te.map(J => u.jsx(Fe, { value: J.value, children: J.name }, J.value)) }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                u.jsxs('div', {
                                    className: 'form-group full-width',
                                    children: [
                                        u.jsx(vn, { className: 'form-label', children: 'Custom AI Instructions' }),
                                        u.jsx(Xv, {
                                            className: 'form-control',
                                            placeholder: `Add specific instructions for how you want the AI to behave during ${et[l] || 'this interaction'}...`,
                                            defaultValue: localStorage.getItem('customPrompt') || '',
                                            rows: 4,
                                            onChange: q,
                                        }),
                                        u.jsxs('div', {
                                            className: 'form-description',
                                            children: [
                                                "Personalize the AI's behavior with specific instructions that will be added to the",
                                                ' ',
                                                et[l] || 'selected profile',
                                                ' base prompts',
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
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
                                    u.jsx(vn, { className: 'form-label', children: 'Audio Mode' }),
                                    u.jsxs(Qa, {
                                        defaultValue: localStorage.getItem('audioMode') || 'speaker_only',
                                        onValueChange: J => localStorage.setItem('audioMode', J),
                                        children: [
                                            u.jsx(ba, { className: 'form-control', children: u.jsx(Za, { placeholder: 'Select audio mode' }) }),
                                            u.jsxs(Sa, {
                                                children: [
                                                    u.jsx(Fe, { value: 'speaker_only', children: 'Speaker Only (Interviewer)' }),
                                                    u.jsx(Fe, { value: 'mic_only', children: 'Microphone Only (Me)' }),
                                                    u.jsx(Fe, { value: 'both', children: 'Both Speaker & Microphone' }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    u.jsx('div', { className: 'form-description', children: 'Choose which audio sources to capture for the AI.' }),
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
                                    u.jsx(vn, { className: 'form-label', children: 'Profile' }),
                                    u.jsxs(Qa, {
                                        defaultValue: localStorage.getItem('stealthProfile') || 'balanced',
                                        onValueChange: J => {
                                            (localStorage.setItem('stealthProfile', J),
                                                alert('Restart the application for stealth changes to take full effect.'));
                                        },
                                        children: [
                                            u.jsx(ba, { className: 'form-control', children: u.jsx(Za, { placeholder: 'Select stealth profile' }) }),
                                            u.jsxs(Sa, {
                                                children: [
                                                    u.jsx(Fe, { value: 'visible', children: 'Visible' }),
                                                    u.jsx(Fe, { value: 'balanced', children: 'Balanced' }),
                                                    u.jsx(Fe, { value: 'ultra', children: 'Ultra-Stealth' }),
                                                ],
                                            }),
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
                                            u.jsxs(vn, {
                                                className: 'form-label',
                                                children: [
                                                    'Language',
                                                    u.jsx('span', { className: 'current-selection', children: tn?.name || 'Unknown' }),
                                                ],
                                            }),
                                            u.jsxs(Qa, {
                                                value: s,
                                                onValueChange: O,
                                                children: [
                                                    u.jsx(ba, { className: 'form-control', children: u.jsx(Za, { placeholder: 'Select language' }) }),
                                                    u.jsx(Sa, { children: Me.map(J => u.jsx(Fe, { value: J.value, children: J.name }, J.value)) }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    u.jsxs('div', {
                                        className: 'form-group',
                                        children: [
                                            u.jsxs(vn, {
                                                className: 'form-label',
                                                children: [
                                                    'Layout Mode',
                                                    u.jsx('span', {
                                                        className: 'current-selection',
                                                        children: B.charAt(0).toUpperCase() + B.slice(1),
                                                    }),
                                                ],
                                            }),
                                            u.jsxs(Qa, {
                                                value: B,
                                                onValueChange: E,
                                                children: [
                                                    u.jsx(ba, { className: 'form-control', children: u.jsx(Za, { placeholder: 'Select layout' }) }),
                                                    u.jsxs(Sa, {
                                                        children: [
                                                            u.jsx(Fe, { value: 'compact', children: 'Compact' }),
                                                            u.jsx(Fe, { value: 'normal', children: 'Normal' }),
                                                            u.jsx(Fe, { value: 'spacious', children: 'Spacious' }),
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
                                            ot.map(J =>
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
                                                                    value: M[J.key] || '',
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
                                                    children: u.jsx(Et, {
                                                        className: 'reset-keybinds-button',
                                                        onClick: P,
                                                        variant: 'outline',
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
                                                    u.jsxs('span', { className: 'current-selection', children: [Math.round(g * 100), '%'] }),
                                                ],
                                            }),
                                            u.jsxs('div', {
                                                className: 'slider-container',
                                                children: [
                                                    u.jsx('div', {
                                                        className: 'slider-header',
                                                        children: u.jsx('span', { className: 'slider-value', children: g.toFixed(2) }),
                                                    }),
                                                    u.jsx('input', {
                                                        type: 'range',
                                                        className: 'slider-input',
                                                        min: '0.1',
                                                        max: '1.0',
                                                        step: '0.05',
                                                        defaultValue: g.toString(),
                                                        onChange: he,
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
                                                children: ['Font Size', u.jsxs('span', { className: 'current-selection', children: [b, 'px'] })],
                                            }),
                                            u.jsxs('div', {
                                                className: 'slider-container',
                                                children: [
                                                    u.jsx('div', {
                                                        className: 'slider-header',
                                                        children: u.jsxs('span', { className: 'slider-value', children: [b, 'px'] }),
                                                    }),
                                                    u.jsx('input', {
                                                        type: 'range',
                                                        className: 'slider-input',
                                                        min: '12',
                                                        max: '32',
                                                        step: '1',
                                                        defaultValue: b.toString(),
                                                        onChange: F,
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
                                            u.jsxs(vn, {
                                                className: 'form-label',
                                                children: [
                                                    'Capture Interval',
                                                    u.jsx('span', { className: 'current-selection', children: c === 'manual' ? 'Manual' : `${c}s` }),
                                                ],
                                            }),
                                            u.jsxs(Qa, {
                                                value: c,
                                                onValueChange: ee,
                                                children: [
                                                    u.jsx(ba, { className: 'form-control', children: u.jsx(Za, { placeholder: 'Select interval' }) }),
                                                    u.jsxs(Sa, {
                                                        children: [
                                                            u.jsx(Fe, { value: 'manual', children: 'Manual (On demand)' }),
                                                            u.jsx(Fe, { value: '1', children: 'Every 1 second' }),
                                                            u.jsx(Fe, { value: '2', children: 'Every 2 seconds' }),
                                                            u.jsx(Fe, { value: '5', children: 'Every 5 seconds' }),
                                                            u.jsx(Fe, { value: '10', children: 'Every 10 seconds' }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            u.jsx('div', {
                                                className: 'form-description',
                                                children:
                                                    c === 'manual'
                                                        ? 'Screenshots will only be taken when you use the "Ask Next Step" shortcut'
                                                        : 'Automatic screenshots will be taken at the specified interval',
                                            }),
                                        ],
                                    }),
                                    u.jsxs('div', {
                                        className: 'form-group',
                                        children: [
                                            u.jsxs(vn, {
                                                className: 'form-label',
                                                children: [
                                                    'Image Quality',
                                                    u.jsx('span', {
                                                        className: 'current-selection',
                                                        children: r.charAt(0).toUpperCase() + r.slice(1),
                                                    }),
                                                ],
                                            }),
                                            u.jsxs(Qa, {
                                                value: r,
                                                onValueChange: de,
                                                children: [
                                                    u.jsx(ba, { className: 'form-control', children: u.jsx(Za, { placeholder: 'Select quality' }) }),
                                                    u.jsxs(Sa, {
                                                        children: [
                                                            u.jsx(Fe, { value: 'low', children: 'Low' }),
                                                            u.jsx(Fe, { value: 'medium', children: 'Medium' }),
                                                            u.jsx(Fe, { value: 'high', children: 'High' }),
                                                            u.jsx(Fe, { value: 'ultra', children: 'Ultra' }),
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
                                        u.jsx(Yv, { id: 'advanced-mode', checked: R, onCheckedChange: ue }),
                                        u.jsx(vn, { htmlFor: 'advanced-mode', className: 'checkbox-label', children: 'Enable Advanced Mode' }),
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
        });
    },
    Kw = ({ onExternalLinkClick: l, keybinds: s }) => {
        const [c, r] = h.useState({});
        h.useEffect(() => {
            (Us(), m());
        }, [s]);
        const d = () => {
                const b = window.cheddar?.isMacOS || navigator.platform.includes('Mac');
                return {
                    moveUp: b ? 'Alt+Up' : 'Ctrl+Up',
                    moveDown: b ? 'Alt+Down' : 'Ctrl+Down',
                    moveLeft: b ? 'Alt+Left' : 'Ctrl+Left',
                    moveRight: b ? 'Alt+Right' : 'Ctrl+Right',
                    toggleVisibility: b ? 'Cmd+\\' : 'Ctrl+\\',
                    toggleClickThrough: b ? 'Cmd+M' : 'Ctrl+M',
                    nextStep: b ? 'Cmd+Enter' : 'Ctrl+Enter',
                    previousResponse: b ? 'Cmd+[' : 'Ctrl+[',
                    nextResponse: b ? 'Cmd+]' : 'Ctrl+]',
                    scrollUp: b ? 'Cmd+Shift+Up' : 'Ctrl+Shift+Up',
                    scrollDown: b ? 'Cmd+Shift+Down' : 'Ctrl+Shift+Down',
                };
            },
            m = () => {
                const b = localStorage.getItem('customKeybinds');
                if (b)
                    try {
                        const y = JSON.parse(b);
                        r({ ...d(), ...y });
                    } catch (y) {
                        (console.error('Failed to parse saved keybinds:', y), r(d()));
                    }
                else r(s && Object.keys(s).length > 0 ? s : d());
            },
            p = b =>
                b
                    ? b.split('+').map((y, S) => u.jsx('span', { className: 'key', children: y }, S))
                    : [u.jsx('span', { className: 'key', children: 'Not set' }, 'empty')],
            g = b => {
                l(b);
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
                                        onClick: () => g('https://cheatingdaddy.com'),
                                        children: '🌐 Official Website',
                                    }),
                                    u.jsx('div', {
                                        className: 'community-link',
                                        onClick: () => g('https://github.com/sohzm/cheating-daddy'),
                                        children: '📂 GitHub Repository',
                                    }),
                                    u.jsx('div', {
                                        className: 'community-link',
                                        onClick: () => g('https://discord.gg/GCBdubnXfJ'),
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
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(c.moveUp) }),
                                                ],
                                            }),
                                            u.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    u.jsx('span', { className: 'shortcut-description', children: 'Move window down' }),
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(c.moveDown) }),
                                                ],
                                            }),
                                            u.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    u.jsx('span', { className: 'shortcut-description', children: 'Move window left' }),
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(c.moveLeft) }),
                                                ],
                                            }),
                                            u.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    u.jsx('span', { className: 'shortcut-description', children: 'Move window right' }),
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(c.moveRight) }),
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
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(c.toggleClickThrough) }),
                                                ],
                                            }),
                                            u.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    u.jsx('span', { className: 'shortcut-description', children: 'Toggle window visibility' }),
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(c.toggleVisibility) }),
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
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(c.nextStep) }),
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
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(c.previousResponse) }),
                                                ],
                                            }),
                                            u.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    u.jsx('span', { className: 'shortcut-description', children: 'Next response' }),
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(c.nextResponse) }),
                                                ],
                                            }),
                                            u.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    u.jsx('span', { className: 'shortcut-description', children: 'Scroll response up' }),
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(c.scrollUp) }),
                                                ],
                                            }),
                                            u.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    u.jsx('span', { className: 'shortcut-description', children: 'Scroll response down' }),
                                                    u.jsx('div', { className: 'shortcut-keys', children: p(c.scrollDown) }),
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
                                            p(c.toggleClickThrough),
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
                                            p(c.previousResponse),
                                            ' and',
                                            p(c.nextResponse),
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
    Qw = () => {
        const [l, s] = h.useState('sessions'),
            [c, r] = h.useState([]),
            [d, m] = h.useState([]),
            [p, g] = h.useState(null),
            [b, y] = h.useState(!1),
            S = h.useCallback(async () => {
                y(!0);
                try {
                    const z = await window.cheddar.getAllConversationSessions();
                    r(z || []);
                } catch (z) {
                    (console.error('Failed to load conversations:', z), r([]));
                } finally {
                    y(!1);
                }
            }, []),
            x = h.useCallback(() => {
                try {
                    const z = localStorage.getItem('savedResponses'),
                        X = z ? JSON.parse(z) : [];
                    m(X);
                } catch (z) {
                    (console.error('Failed to load saved responses:', z), m([]));
                }
            }, []),
            T = h.useCallback(z => {
                g(z);
            }, []),
            j = h.useCallback(() => {
                g(null);
            }, []),
            R = h.useCallback(
                z => {
                    const X = d.filter((ae, te) => te !== z);
                    (m(X), localStorage.setItem('savedResponses', JSON.stringify(X)));
                },
                [d]
            ),
            w = h.useCallback(z => new Date(z).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), []),
            M = h.useCallback(z => new Date(z).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: !0 }), []),
            U = h.useCallback(
                z => new Date(z).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }),
                []
            ),
            B = h.useCallback(
                z =>
                    z.transcription
                        ? z.transcription.length > 100
                            ? z.transcription.substring(0, 100) + '...'
                            : z.transcription
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
        const Z = () =>
                b
                    ? u.jsx('div', { className: 'loading', children: 'Loading conversation history...' })
                    : c.length === 0
                      ? u.jsxs('div', {
                            className: 'emptyState',
                            children: [
                                u.jsx('div', { className: 'emptyStateTitle', children: 'No conversations yet' }),
                                u.jsx('div', { children: 'Start a session to see your conversation history here' }),
                            ],
                        })
                      : u.jsx('div', {
                            className: 'sessionsList',
                            children: c.map(z =>
                                u.jsxs(
                                    'div',
                                    {
                                        className: 'sessionItem',
                                        onClick: () => T(z),
                                        children: [
                                            u.jsxs('div', {
                                                className: 'sessionHeader',
                                                children: [
                                                    u.jsx('span', { className: 'sessionDate', children: w(z.timestamp) }),
                                                    u.jsx('span', { className: 'sessionTime', children: M(z.timestamp) }),
                                                ],
                                            }),
                                            u.jsx('div', { className: 'sessionPreview', children: B(z) }),
                                        ],
                                    },
                                    z.id
                                )
                            ),
                        }),
            $ = () => {
                if (!p) return null;
                const { conversationHistory: z } = p,
                    X = [];
                return (
                    z &&
                        z.forEach(ae => {
                            (ae.transcription && X.push({ type: 'user', content: ae.transcription, timestamp: ae.timestamp }),
                                ae.ai_response && X.push({ type: 'ai', content: ae.ai_response, timestamp: ae.timestamp }));
                        }),
                    u.jsxs('div', {
                        className: 'historyContainer',
                        children: [
                            u.jsxs('div', {
                                className: 'backHeader',
                                children: [
                                    u.jsxs(Et, {
                                        className: 'backButton',
                                        variant: 'ghost',
                                        onClick: j,
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
                                            '\\n                        ',
                                            u.jsxs('div', {
                                                className: 'legendItem',
                                                children: [
                                                    '\\n                            ',
                                                    u.jsx('div', { className: 'legendDot user' }),
                                                    u.jsx('span', { children: 'Them' }),
                                                ],
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
                                    X.length > 0
                                        ? X.map((ae, te) => u.jsx('div', { className: `message ${ae.type}`, children: ae.content }, te))
                                        : u.jsx('div', { className: 'emptyState', children: 'No conversation data available' }),
                            }),
                        ],
                    })
                );
            },
            ne = () => {
                if (d.length === 0)
                    return u.jsxs('div', {
                        className: 'emptyState',
                        children: [
                            u.jsx('div', { className: 'emptyStateTitle', children: 'No saved responses' }),
                            u.jsx('div', { children: 'Use the save button during conversations to save important responses' }),
                        ],
                    });
                const z = H();
                return u.jsx('div', {
                    className: 'sessionsList',
                    children: d.map((X, ae) =>
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
                                                    u.jsx('span', { className: 'savedResponseProfile', children: z[X.profile] || X.profile }),
                                                    u.jsx('span', { className: 'savedResponseDate', children: U(X.timestamp) }),
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
                                    u.jsx('div', { className: 'savedResponseContent', children: X.response }),
                                ],
                            },
                            ae
                        )
                    ),
                });
            };
        return p
            ? $()
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
                                      onClick: () => s('sessions'),
                                      children: 'Conversation History',
                                  }),
                                  u.jsxs('button', {
                                      className: `tab ${l === 'saved' ? 'active' : ''}`,
                                      onClick: () => s('saved'),
                                      children: ['Saved Responses (', d.length, ')'],
                                  }),
                              ],
                          }),
                          l === 'sessions' ? Z() : ne(),
                      ],
                  }),
              });
    },
    Zw = () => {
        const [l, s] = h.useState({
            isClearing: !1,
            statusMessage: '',
            statusType: '',
            throttleTokens: !0,
            maxTokensPerMin: 1e6,
            throttleAtPercent: 75,
            contentProtection: !0,
        });
        h.useEffect(() => {
            (c(), r(), Us());
        }, []);
        const c = () => {
                const S = localStorage.getItem('throttleTokens'),
                    x = localStorage.getItem('maxTokensPerMin'),
                    T = localStorage.getItem('throttleAtPercent');
                s(j => ({
                    ...j,
                    throttleTokens: S !== null ? S === 'true' : !0,
                    maxTokensPerMin: (x !== null && parseInt(x, 10)) || 1e6,
                    throttleAtPercent: (T !== null && parseInt(T, 10)) || 75,
                }));
            },
            r = () => {
                const S = localStorage.getItem('contentProtection');
                s(x => ({ ...x, contentProtection: S !== null ? S === 'true' : !0 }));
            },
            d = async () => {
                if (!l.isClearing) {
                    s(S => ({ ...S, isClearing: !0, statusMessage: '', statusType: '' }));
                    try {
                        (localStorage.clear(), sessionStorage.clear());
                        const S = await indexedDB.databases(),
                            x = S.map(
                                j =>
                                    new Promise((R, w) => {
                                        if (!j.name) {
                                            R();
                                            return;
                                        }
                                        const M = indexedDB.deleteDatabase(j.name);
                                        ((M.onsuccess = () => R()),
                                            (M.onerror = () => w(M.error)),
                                            (M.onblocked = () => {
                                                (console.warn(`Deletion of database ${j.name} was blocked`), R());
                                            }));
                                    })
                            );
                        if ((await Promise.all(x), 'caches' in window)) {
                            const j = await caches.keys();
                            await Promise.all(j.map(R => caches.delete(R)));
                        }
                        const T = `✅ Successfully cleared all local data (${S.length} databases, localStorage, sessionStorage, and caches)`;
                        (s(j => ({ ...j, statusMessage: T, statusType: 'success' })),
                            setTimeout(() => {
                                (s(j => ({ ...j, statusMessage: '🔄 Closing application...' })),
                                    setTimeout(async () => {
                                        window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('quit-application'));
                                    }, 1e3));
                            }, 2e3));
                    } catch (S) {
                        console.error('Error clearing data:', S);
                        const x = `❌ Error clearing data: ${S.message}`;
                        s(T => ({ ...T, statusMessage: x, statusType: 'error' }));
                    } finally {
                        s(S => ({ ...S, isClearing: !1 }));
                    }
                }
            },
            m = S => {
                const x = S.target.checked;
                (s(T => ({ ...T, throttleTokens: x })), localStorage.setItem('throttleTokens', x.toString()));
            },
            p = S => {
                const x = parseInt(S.target.value, 10);
                !isNaN(x) && x > 0 && (s(T => ({ ...T, maxTokensPerMin: x })), localStorage.setItem('maxTokensPerMin', x.toString()));
            },
            g = S => {
                const x = parseInt(S.target.value, 10);
                !isNaN(x) &&
                    x >= 0 &&
                    x <= 100 &&
                    (s(T => ({ ...T, throttleAtPercent: x })), localStorage.setItem('throttleAtPercent', x.toString()));
            },
            b = () => {
                (s(S => ({ ...S, throttleTokens: !0, maxTokensPerMin: 1e6, throttleAtPercent: 75 })),
                    localStorage.removeItem('throttleTokens'),
                    localStorage.removeItem('maxTokensPerMin'),
                    localStorage.removeItem('throttleAtPercent'));
            },
            y = async S => {
                const x = S.target.checked;
                if ((s(T => ({ ...T, contentProtection: x })), localStorage.setItem('contentProtection', x.toString()), window.electron?.ipcRenderer))
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
                                            onChange: y,
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
                                                            onInput: g,
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
                                                    onClick: b,
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
                                    onClick: d,
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
    Jw = ({ onComplete: l, onClose: s }) => {
        const [c, r] = h.useState(0),
            [d, m] = h.useState(''),
            [p, g] = h.useState(!1),
            [b, y] = h.useState(0),
            [S, x] = h.useState(null),
            T = h.useRef(null),
            j = h.useRef(null),
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
            M = [
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
            U = h.useCallback(te => (te < 0.5 ? 4 * te * te * te : 1 - Math.pow(-2 * te + 2, 3) / 2), []),
            B = h.useCallback(
                (te, ge, le) =>
                    te.map((fe, ie) => {
                        const K = ge[ie];
                        return [fe[0] + (K[0] - fe[0]) * le, fe[1] + (K[1] - fe[1]) * le, fe[2] + (K[2] - fe[2]) * le];
                    }),
                []
            ),
            H = h.useCallback(te => {
                m(te.target.value);
            }, []),
            Z = h.useCallback(() => {
                (d.trim() && localStorage.setItem('customPrompt', d.trim()), localStorage.setItem('onboardingCompleted', 'true'), l());
            }, [d, l]),
            $ = h.useCallback(
                te => {
                    (x([...w[c]]), r(te), g(!0), y(performance.now()));
                },
                [w, c]
            ),
            ne = h.useCallback(() => {
                c < 4 ? $(c + 1) : Z();
            }, [c, $, Z]),
            z = h.useCallback(() => {
                c > 0 && $(c - 1);
            }, [c, $]),
            X = h.useCallback(
                te => {
                    te !== c && $(te);
                },
                [c, $]
            );
        (h.useEffect(() => {
            const te = T.current;
            if (!te || !te.getContext('2d')) return;
            const le = () => {
                const K = te.getBoundingClientRect();
                ((te.width = K.width), (te.height = K.height));
            };
            le();
            const fe = K => {
                (ae(K), (j.current = requestAnimationFrame(fe)));
            };
            fe(0);
            const ie = () => le();
            return (
                window.addEventListener('resize', ie),
                () => {
                    (j.current && cancelAnimationFrame(j.current), window.removeEventListener('resize', ie));
                }
            );
        }, []),
            h.useEffect(() => {
                const te = localStorage.getItem('customPrompt');
                te && m(te);
            }, []));
        const ae = h.useCallback(
            te => {
                const ge = T.current,
                    le = ge?.getContext('2d');
                if (!le || !ge) return;
                const { width: fe, height: ie } = ge;
                let K = w[c];
                if (p && S) {
                    const P = te - b,
                        ue = Math.min(P / R, 1),
                        he = U(ue);
                    ((K = B(S, w[c], he)), ue >= 1 && (g(!1), x(null)));
                }
                const A = te * 5e-4,
                    G = Math.sin(A * 0.7) * fe * 0.3,
                    O = Math.cos(A * 0.5) * ie * 0.2,
                    ee = le.createLinearGradient(G, O, fe + G * 0.5, ie + O * 0.5);
                (K.forEach((P, ue) => {
                    const he = ue / (K.length - 1),
                        F = Math.sin(A + ue * 0.3) * 0.05,
                        be = Math.max(0, Math.min(255, P[0] + F * 5)),
                        ye = Math.max(0, Math.min(255, P[1] + F * 5)),
                        we = Math.max(0, Math.min(255, P[2] + F * 5));
                    ee.addColorStop(he, `rgb(${be}, ${ye}, ${we})`);
                }),
                    (le.fillStyle = ee),
                    le.fillRect(0, 0, fe, ie));
                const de = fe * 0.5 + Math.sin(A * 0.3) * fe * 0.15,
                    E = ie * 0.5 + Math.cos(A * 0.4) * ie * 0.1,
                    q = Math.max(fe, ie) * 0.8,
                    W = le.createRadialGradient(de, E, 0, de, E, q);
                (W.addColorStop(0, `rgba(${K[0][0] + 10}, ${K[0][1] + 10}, ${K[0][2] + 10}, 0.1)`),
                    W.addColorStop(0.5, `rgba(${K[2][0]}, ${K[2][1]}, ${K[2][2]}, 0.05)`),
                    W.addColorStop(1, `rgba(${K[K.length - 1][0]}, ${K[K.length - 1][1]}, ${K[K.length - 1][2]}, 0.03)`),
                    (le.globalCompositeOperation = 'overlay'),
                    (le.fillStyle = W),
                    le.fillRect(0, 0, fe, ie),
                    (le.globalCompositeOperation = 'source-over'));
            },
            [c, p, S, b, w, U, B, R]
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
                            u.jsx('img', { className: 'onboarding-view-slideIcon', src: M[c].icon, alt: `${M[c].title} icon` }),
                            u.jsx('div', { className: 'onboarding-view-slideTitle', children: M[c].title }),
                            u.jsx('div', { className: 'onboarding-view-slideContent', children: M[c].content }),
                            M[c].showTextarea &&
                                u.jsx('textarea', {
                                    className: 'onboarding-view-contextTextarea',
                                    placeholder: 'Paste your resume, job description, or any relevant context here...',
                                    value: d,
                                    onChange: H,
                                }),
                            M[c].showFeatures &&
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
                                onClick: z,
                                disabled: c === 0,
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
                                children: [0, 1, 2, 3, 4].map(te =>
                                    u.jsx(
                                        'div',
                                        { className: `onboarding-view-dot ${te === c ? 'onboarding-view-dotActive' : ''}`, onClick: () => X(te) },
                                        te
                                    )
                                ),
                            }),
                            u.jsx(Et, {
                                className: 'onboarding-view-navButton',
                                variant: 'default',
                                onClick: ne,
                                children:
                                    c === 4
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
    Iw = () => {
        const [l, s] = h.useState(localStorage.getItem('onboardingCompleted') ? 'main' : 'onboarding'),
            [c, r] = h.useState(''),
            [d, m] = h.useState(null),
            [p, g] = h.useState(!1),
            [b, y] = h.useState(!1),
            [S, x] = h.useState(!1),
            [T, j] = h.useState(!1),
            [R, w] = h.useState(localStorage.getItem('selectedProfile') || 'interview'),
            [M, U] = h.useState(localStorage.getItem('selectedLanguage') || 'en-US'),
            [B, H] = h.useState(localStorage.getItem('selectedScreenshotInterval') || '5'),
            [Z, $] = h.useState(localStorage.getItem('selectedImageQuality') || 'medium'),
            [ne, z] = h.useState(localStorage.getItem('layoutMode') || 'normal'),
            [X, ae] = h.useState(localStorage.getItem('advancedMode') === 'true'),
            [te, ge] = h.useState(() => {
                try {
                    return JSON.parse(localStorage.getItem('customKeybinds') || '{}');
                } catch {
                    return {};
                }
            }),
            [le, fe] = h.useState(localStorage.getItem('googleSearchEnabled') === 'true'),
            [ie, K] = h.useState(parseInt(localStorage.getItem('backgroundTransparency') || '80')),
            [A, G] = h.useState(parseInt(localStorage.getItem('fontSize') || '14')),
            [O, ee] = h.useState([]),
            [de, E] = h.useState(-1),
            [q, W] = h.useState(!1),
            [P, ue] = h.useState(() => {
                try {
                    return JSON.parse(localStorage.getItem('savedResponses') || '[]');
                } catch {
                    return [];
                }
            }),
            [he, F] = h.useState(!1),
            [be, ye] = h.useState(!1),
            [we, Te] = h.useState(!0);
        (h.useEffect(() => {
            Il(ne);
        }, [ne]),
            h.useEffect(() => {
                if (window.electron?.ipcRenderer) {
                    const oe = window.electron.ipcRenderer,
                        Ke = (Wl, Cn) => {
                            et(Cn);
                        },
                        st = (Wl, Cn) => {
                            Me(Cn);
                        },
                        wt = (Wl, Cn) => {
                            F(Cn);
                        },
                        Ps = (Wl, Cn) => {
                            x(Cn);
                        };
                    return (
                        oe.on('update-response', Ke),
                        oe.on('update-status', st),
                        oe.on('click-through-toggled', wt),
                        oe.on('session-initializing', Ps),
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
                localStorage.setItem('selectedLanguage', M);
            }, [M]),
            h.useEffect(() => {
                localStorage.setItem('selectedScreenshotInterval', B);
            }, [B]),
            h.useEffect(() => {
                localStorage.setItem('selectedImageQuality', Z);
            }, [Z]),
            h.useEffect(() => {
                localStorage.setItem('advancedMode', X.toString());
            }, [X]));
        const Me = h.useCallback(oe => {
                (r(oe), (oe.includes('Ready') || oe.includes('Listening') || oe.includes('Error')) && Te(!0));
            }, []),
            et = h.useCallback(
                oe => {
                    const Ke =
                        oe.length < 30 &&
                        (oe.toLowerCase().includes('hmm') ||
                            oe.toLowerCase().includes('okay') ||
                            oe.toLowerCase().includes('next') ||
                            oe.toLowerCase().includes('go on') ||
                            oe.toLowerCase().includes('continue'));
                    (ee(st =>
                        be || st.length === 0
                            ? (E(st.length), ye(!1), Te(!1), [...st, oe])
                            : !we && !Ke && st.length > 0
                              ? [...st.slice(0, st.length - 1), oe]
                              : (E(st.length), Te(!1), [...st, oe])
                    ),
                        W(!0));
                },
                [be, we]
            );
        (h.useCallback(() => {
            s('customize');
        }, []),
            h.useCallback(() => {
                s('help');
            }, []),
            h.useCallback(() => {
                s('history');
            }, []),
            h.useCallback(() => {
                s('advanced');
            }, []));
        const ot = h.useCallback(async () => {
                window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('minimize-window'));
            }, []),
            en = h.useCallback(oe => {
                s(oe);
            }, []),
            tn = h.useCallback(async () => {
                (l === 'assistant' &&
                    b &&
                    (window.cheddar && window.cheddar.stopCapture(),
                    window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('close-session')),
                    y(!1)),
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
            }, [l, b]);
        h.useCallback(async () => {
            window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('toggle-window-visibility'));
        }, []);
        const J = h.useCallback(async () => {
                const oe = localStorage.getItem('apiKey')?.trim();
                if (!oe || oe === '') {
                    j(!0);
                    return;
                }
                x(!0);
                try {
                    (window.cheddar && (await window.cheddar.initializeGemini(R, M), window.cheddar.startCapture(B, Z)),
                        ee([]),
                        E(-1),
                        m(Date.now()),
                        s('assistant'));
                } catch (Ke) {
                    (console.error('Failed to start session:', Ke), x(!1));
                }
            }, [R, M, B, Z]),
            Se = h.useCallback(async () => {
                window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('open-external', 'https://cheatingdaddy.com/help/api-key'));
            }, []),
            Le = h.useCallback(oe => {
                w(oe);
            }, []),
            Qn = h.useCallback(oe => {
                U(oe);
            }, []),
            Ta = h.useCallback(oe => {
                H(oe);
            }, []),
            Js = h.useCallback(oe => {
                $(oe);
            }, []),
            Is = h.useCallback(oe => {
                ae(oe);
            }, []);
        h.useCallback(() => {
            s('main');
        }, []);
        const xt = h.useCallback(async oe => {
                window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('open-external', oe));
            }, []),
            Ws = h.useCallback(async oe => {
                if (window.cheddar) {
                    const Ke = await window.cheddar.sendTextMessage(oe);
                    Ke.success ? (Me('Message sent...'), ye(!0)) : Me('Error sending message: ' + Ke.error);
                }
            }, []),
            eo = h.useCallback(async () => {
                (window.cheddar && window.cheddar.stopCapture(),
                    window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('close-session')),
                    y(!1),
                    s('main'));
            }, []),
            to = h.useCallback(oe => {
                (E(oe), W(!1));
            }, []),
            Aa = h.useCallback(() => {
                s('main');
            }, []),
            no = h.useCallback(async oe => {
                if ((z(oe), Il(oe), window.electron?.ipcRenderer))
                    try {
                        await window.electron.ipcRenderer.invoke('update-sizes');
                    } catch (Ke) {
                        console.error('Failed to update sizes in main process:', Ke);
                    }
            }, []),
            Il = oe => {
                oe === 'compact'
                    ? document.documentElement.classList.add('compact-layout')
                    : document.documentElement.classList.remove('compact-layout');
            },
            $s = () => {
                switch (l) {
                    case 'onboarding':
                        return u.jsx(Jw, { currentSlide: 0, contextText: '', onComplete: Aa, onClose: Aa });
                    case 'main':
                        return u.jsx(uS, { onStart: J, onAPIKeyHelp: Se, isInitializing: S, onLayoutModeChange: no, showApiKeyError: T });
                    case 'customize':
                        return u.jsx(Xw, {
                            selectedProfile: R,
                            selectedLanguage: M,
                            selectedScreenshotInterval: B,
                            selectedImageQuality: Z,
                            layoutMode: ne,
                            keybinds: te,
                            googleSearchEnabled: le,
                            backgroundTransparency: ie,
                            fontSize: A,
                            onProfileChange: Le,
                            onLanguageChange: Qn,
                            onScreenshotIntervalChange: Ta,
                            onImageQualityChange: Js,
                            onLayoutModeChange: no,
                            advancedMode: X,
                            onAdvancedModeChange: Is,
                        });
                    case 'help':
                        return u.jsx(Kw, { onExternalLinkClick: xt, keybinds: te });
                    case 'history':
                        return u.jsx(Qw, {});
                    case 'advanced':
                        return u.jsx(Zw, {});
                    case 'assistant':
                        return u.jsx(fS, {
                            responses: O,
                            currentResponseIndex: de,
                            selectedProfile: R,
                            onSendText: Ws,
                            shouldAnimateResponse: q,
                            savedResponses: P,
                            onResponseIndexChanged: to,
                            onStopSession: eo,
                        });
                    default:
                        return u.jsxs('div', { children: ['Unknown view: ', l] });
                }
            },
            Fs = () => {
                const oe = 'main-content';
                return l === 'assistant' ? `${oe} assistant-view` : l === 'onboarding' ? `${oe} onboarding-view` : `${oe} with-border`;
            };
        return u.jsx('div', {
            className: 'window-container',
            children: u.jsxs('div', {
                className: 'container',
                children: [
                    u.jsx(rS, { currentView: l, onViewChange: en, onMinimize: ot, onClose: tn }),
                    u.jsx('div', { className: Fs(), children: u.jsx('div', { className: 'view-container', children: $s() }) }),
                ],
            }),
        });
    },
    Ww = () => {
        const [l, s] = h.useState(!1);
        h.useEffect(() => {
            c();
        }, []);
        const c = async () => {
            s(!0);
        };
        return l ? u.jsx(xb, { children: u.jsx(Iw, {}) }) : u.jsx('div', { className: 'loading', children: 'Loading...' });
    };
window.electron = { ipcRenderer: window.require('electron').ipcRenderer };
const Zv = document.getElementById('root');
if (!Zv) throw new Error('Root element not found');
const $w = Sb.createRoot(Zv);
$w.render(u.jsx(Yn.StrictMode, { children: u.jsx(Ww, {}) }));
const { ipcRenderer: Dt } = window.require('electron');
window.randomDisplayName = null;
Dt.invoke('get-random-display-name')
    .then(l => {
        ((window.randomDisplayName = l), console.log('Set random display name:', l));
    })
    .catch(l => {
        (console.warn('Could not get random display name:', l), (window.randomDisplayName = 'System Monitor'));
    });
let yt = null,
    Rs = null,
    cn = null,
    rn = null,
    ks = null;
const sn = 24e3,
    lf = 0.1,
    of = 4096;
let it = null,
    Ot = null,
    Qi = null,
    Jv = 'medium';
const Iv = process.platform === 'linux',
    sf = process.platform === 'darwin',
    Zi = {
        tokens: [],
        audioStartTime: null,
        addTokens(l, s = 'image') {
            const c = Date.now();
            (this.tokens.push({ timestamp: c, count: l, type: s }), this.cleanOldTokens());
        },
        calculateImageTokens(l, s) {
            if (l <= 384 && s <= 384) return 258;
            const c = Math.ceil(l / 768),
                r = Math.ceil(s / 768);
            return c * r * 258;
        },
        trackAudioTokens() {
            if (!this.audioStartTime) {
                this.audioStartTime = Date.now();
                return;
            }
            const l = Date.now(),
                s = (l - this.audioStartTime) / 1e3,
                c = Math.floor(s * 32);
            c > 0 && (this.addTokens(c, 'audio'), (this.audioStartTime = l));
        },
        cleanOldTokens() {
            const l = Date.now() - 6e4;
            this.tokens = this.tokens.filter(s => s.timestamp > l);
        },
        getTokensInLastMinute() {
            return (this.cleanOldTokens(), this.tokens.reduce((l, s) => l + s.count, 0));
        },
        shouldThrottle() {
            if (!(localStorage.getItem('throttleTokens') === 'true')) return !1;
            const s = parseInt(localStorage.getItem('maxTokensPerMin') || '1000000', 10),
                c = parseInt(localStorage.getItem('throttleAtPercent') || '75', 10),
                r = this.getTokensInLastMinute(),
                d = Math.floor((s * c) / 100);
            return (console.log(`Token check: ${r}/${s} (throttle at ${d})`), r >= d);
        },
        reset() {
            ((this.tokens = []), (this.audioStartTime = null));
        },
    };
setInterval(() => {
    Zi.trackAudioTokens();
}, 2e3);
function cf(l) {
    const s = new Int16Array(l.length);
    for (let c = 0; c < l.length; c++) {
        const r = Math.max(-1, Math.min(1, l[c]));
        s[c] = r < 0 ? r * 32768 : r * 32767;
    }
    return s;
}
function rf(l) {
    let s = '';
    const c = new Uint8Array(l),
        r = c.byteLength;
    for (let d = 0; d < r; d++) s += String.fromCharCode(c[d]);
    return btoa(s);
}
async function Fw(l = 'interview', s = 'en-US') {
    const c = localStorage.getItem('apiKey')?.trim();
    c && ((await Dt.invoke('initialize-gemini', c, localStorage.getItem('customPrompt') || '', l, s)) ? Yl.setStatus('Live') : Yl.setStatus('error'));
}
Dt.on('update-status', (l, s) => {
    (console.log('Status update:', s), Yl.setStatus(s));
});
async function Pw(l = 5, s = 'medium') {
    ((Jv = s), Zi.reset(), console.log('🎯 Token tracker reset for new capture session'));
    const c = localStorage.getItem('audioMode') || 'speaker_only';
    try {
        if (sf) {
            console.log('Starting macOS capture with SystemAudioDump...');
            const r = await Dt.invoke('start-macos-audio');
            if (!r.success) throw new Error('Failed to start macOS audio capture: ' + r.error);
            if (
                ((yt = await navigator.mediaDevices.getDisplayMedia({
                    video: { frameRate: 1, width: { ideal: 1920 }, height: { ideal: 1080 } },
                    audio: !1,
                })),
                console.log('macOS screen capture started - audio handled by SystemAudioDump'),
                c === 'mic_only' || c === 'both')
            ) {
                let d = null;
                try {
                    ((d = await navigator.mediaDevices.getUserMedia({
                        audio: { sampleRate: sn, channelCount: 1, echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 },
                        video: !1,
                    })),
                        console.log('macOS microphone capture started'),
                        Mu(d));
                } catch (m) {
                    console.warn('Failed to get microphone access on macOS:', m);
                }
            }
        } else if (Iv) {
            try {
                ((yt = await navigator.mediaDevices.getDisplayMedia({
                    video: { frameRate: 1, width: { ideal: 1920 }, height: { ideal: 1080 } },
                    audio: { sampleRate: sn, channelCount: 1, echoCancellation: !1, noiseSuppression: !1, autoGainControl: !1 },
                })),
                    console.log('Linux system audio capture via getDisplayMedia succeeded'),
                    eC());
            } catch (r) {
                (console.warn('System audio via getDisplayMedia failed, trying screen-only capture:', r),
                    (yt = await navigator.mediaDevices.getDisplayMedia({
                        video: { frameRate: 1, width: { ideal: 1920 }, height: { ideal: 1080 } },
                        audio: !1,
                    })));
            }
            if (c === 'mic_only' || c === 'both') {
                let r = null;
                try {
                    ((r = await navigator.mediaDevices.getUserMedia({
                        audio: { sampleRate: sn, channelCount: 1, echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 },
                        video: !1,
                    })),
                        console.log('Linux microphone capture started'),
                        Mu(r));
                } catch (d) {
                    console.warn('Failed to get microphone access on Linux:', d);
                }
            }
            console.log('Linux capture started - system audio:', yt.getAudioTracks().length > 0, 'microphone mode:', c);
        } else if (
            ((yt = await navigator.mediaDevices.getDisplayMedia({
                video: { frameRate: 1, width: { ideal: 1920 }, height: { ideal: 1080 } },
                audio: { sampleRate: sn, channelCount: 1, echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 },
            })),
            console.log('Windows capture started with loopback audio'),
            tC(),
            c === 'mic_only' || c === 'both')
        ) {
            let r = null;
            try {
                ((r = await navigator.mediaDevices.getUserMedia({
                    audio: { sampleRate: sn, channelCount: 1, echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 },
                    video: !1,
                })),
                    console.log('Windows microphone capture started'),
                    Mu(r));
            } catch (d) {
                console.warn('Failed to get microphone access on Windows:', d);
            }
        }
        if (
            (console.log('MediaStream obtained:', {
                hasVideo: yt.getVideoTracks().length > 0,
                hasAudio: yt.getAudioTracks().length > 0,
                videoTrack: yt.getVideoTracks()[0]?.getSettings(),
            }),
            l === 'manual' || l === 'Manual')
        )
            console.log('Manual mode enabled - screenshots will be captured on demand only');
        else {
            const r = parseInt(l) * 1e3;
            ((Rs = setInterval(() => Xu(s), r)), setTimeout(() => Xu(s), 100));
        }
    } catch (r) {
        (console.error('Error starting capture:', r), Yl.setStatus('error'));
    }
}
function Mu(l) {
    const s = new AudioContext({ sampleRate: sn }),
        c = s.createMediaStreamSource(l),
        r = s.createScriptProcessor(of, 1, 1);
    let d = [];
    const m = sn * lf;
    ((r.onaudioprocess = async p => {
        const g = p.inputBuffer.getChannelData(0);
        for (d.push(...g); d.length >= m; ) {
            const b = d.splice(0, m),
                y = cf(new Float32Array(b)),
                S = rf(y.buffer);
            await Dt.invoke('send-mic-audio-content', { data: S, mimeType: 'audio/pcm;rate=24000' });
        }
    }),
        c.connect(r),
        r.connect(s.destination),
        (ks = r));
}
function eC() {
    if (!yt) return;
    cn = new AudioContext({ sampleRate: sn });
    const l = cn.createMediaStreamSource(yt);
    rn = cn.createScriptProcessor(of, 1, 1);
    let s = [];
    const c = sn * lf;
    ((rn.onaudioprocess = async r => {
        const d = r.inputBuffer.getChannelData(0);
        for (s.push(...d); s.length >= c; ) {
            const m = s.splice(0, c),
                p = cf(new Float32Array(m)),
                g = rf(p.buffer);
            await Dt.invoke('send-audio-content', { data: g, mimeType: 'audio/pcm;rate=24000' });
        }
    }),
        l.connect(rn),
        rn.connect(cn.destination));
}
function tC() {
    if (!yt) return;
    cn = new AudioContext({ sampleRate: sn });
    const l = cn.createMediaStreamSource(yt);
    rn = cn.createScriptProcessor(of, 1, 1);
    let s = [];
    const c = sn * lf;
    ((rn.onaudioprocess = async r => {
        const d = r.inputBuffer.getChannelData(0);
        for (s.push(...d); s.length >= c; ) {
            const m = s.splice(0, c),
                p = cf(new Float32Array(m)),
                g = rf(p.buffer);
            await Dt.invoke('send-audio-content', { data: g, mimeType: 'audio/pcm;rate=24000' });
        }
    }),
        l.connect(rn),
        rn.connect(cn.destination));
}
async function Xu(l = 'medium', s = !1) {
    if ((console.log(`Capturing ${s ? 'manual' : 'automated'} screenshot...`), !yt)) return;
    if (!s && Zi.shouldThrottle()) {
        console.log('⚠️ Automated screenshot skipped due to rate limiting');
        return;
    }
    if (
        (it ||
            ((it = document.createElement('video')),
            (it.srcObject = yt),
            (it.muted = !0),
            (it.playsInline = !0),
            await it.play(),
            await new Promise(m => {
                if (it && it.readyState >= 2) return m();
                it && (it.onloadedmetadata = () => m());
            }),
            it && ((Ot = document.createElement('canvas')), (Ot.width = it.videoWidth), (Ot.height = it.videoHeight), (Qi = Ot.getContext('2d')))),
        !it || it.readyState < 2)
    ) {
        console.warn('Video not ready yet, skipping screenshot');
        return;
    }
    if (!Ot || !Qi) {
        console.error('Canvas not initialized');
        return;
    }
    (Qi.drawImage(it, 0, 0, Ot.width, Ot.height),
        Qi.getImageData(0, 0, 1, 1).data.every((m, p) => (p === 3 ? !0 : m === 0)) && console.warn('Screenshot appears to be blank/black'));
    let d;
    switch (l) {
        case 'high':
            d = 0.9;
            break;
        case 'medium':
            d = 0.7;
            break;
        case 'low':
            d = 0.5;
            break;
        default:
            d = 0.7;
    }
    Ot.toBlob(
        async m => {
            if (!m) {
                console.error('Failed to create blob from canvas');
                return;
            }
            const p = new FileReader();
            ((p.onloadend = async () => {
                const b = p.result.split(',')[1];
                if (!b || b.length < 100) {
                    console.error('Invalid base64 data generated');
                    return;
                }
                const y = await Dt.invoke('send-image-content', { data: b });
                if (y.success) {
                    if (Ot) {
                        const S = Zi.calculateImageTokens(Ot.width, Ot.height);
                        (Zi.addTokens(S, 'image'), console.log(`📊 Image sent successfully - ${S} tokens used (${Ot.width}x${Ot.height})`));
                    }
                } else console.error('Failed to send image:', y.error);
            }),
                p.readAsDataURL(m));
        },
        'image/jpeg',
        d
    );
}
async function Wv(l = null) {
    (console.log('Manual screenshot triggered'),
        await Xu(l || Jv, !0),
        await new Promise(c => setTimeout(c, 2e3)),
        await $v(`Help me on this page, give me the answer no bs, complete answer.
        So if its a code question, give me the approach in few bullet points, then the entire code. Also if theres anything else i need to know, tell me.
        If its a question about the website, give me the answer no bs, complete answer.
        If its a mcq question, give me the answer no bs, complete answer.
        `));
}
window.captureManualScreenshot = Wv;
function nC() {
    (Rs && (clearInterval(Rs), (Rs = null)),
        rn && (rn.disconnect(), (rn = null)),
        ks && (ks.disconnect(), (ks = null)),
        cn && (cn.close(), (cn = null)),
        yt && (yt.getTracks().forEach(l => l.stop()), (yt = null)),
        sf &&
            Dt.invoke('stop-macos-audio').catch(l => {
                console.error('Error stopping macOS audio:', l);
            }),
        it && (it.pause(), (it.srcObject = null), (it = null)),
        (Ot = null),
        (Qi = null));
}
async function $v(l) {
    if (!l || l.trim().length === 0) return (console.warn('Cannot send empty text message'), { success: !1, error: 'Empty message' });
    try {
        const s = await Dt.invoke('send-text-message', l);
        return (s.success ? console.log('Text message sent successfully') : console.error('Failed to send text message:', s.error), s);
    } catch (s) {
        return (console.error('Error sending text message:', s), { success: !1, error: s.message });
    }
}
let un = null;
async function Pi() {
    return new Promise((l, s) => {
        const c = indexedDB.open('ConversationHistory', 1);
        ((c.onerror = () => s(c.error)),
            (c.onsuccess = () => {
                ((un = c.result), l(un));
            }),
            (c.onupgradeneeded = r => {
                const d = r.target.result;
                d.objectStoreNames.contains('sessions') ||
                    d.createObjectStore('sessions', { keyPath: 'sessionId' }).createIndex('timestamp', 'timestamp', { unique: !1 });
            }));
    });
}
async function aC(l, s) {
    if ((un || (await Pi()), !un)) throw new Error('Failed to initialize conversation database');
    const r = un.transaction(['sessions'], 'readwrite').objectStore('sessions'),
        d = { sessionId: l, timestamp: parseInt(l), conversationHistory: s, lastUpdated: Date.now() };
    return new Promise((m, p) => {
        const g = r.put(d);
        ((g.onerror = () => p(g.error)), (g.onsuccess = () => m(g.result)));
    });
}
async function lC(l) {
    if ((un || (await Pi()), !un)) throw new Error('Failed to initialize conversation database');
    const c = un.transaction(['sessions'], 'readonly').objectStore('sessions');
    return new Promise((r, d) => {
        const m = c.get(l);
        ((m.onerror = () => d(m.error)), (m.onsuccess = () => r(m.result)));
    });
}
async function iC() {
    if ((un || (await Pi()), !un)) throw new Error('Failed to initialize conversation database');
    const c = un.transaction(['sessions'], 'readonly').objectStore('sessions').index('timestamp');
    return new Promise((r, d) => {
        const m = c.getAll();
        ((m.onerror = () => d(m.error)),
            (m.onsuccess = () => {
                const p = m.result.sort((g, b) => b.timestamp - g.timestamp);
                r(p);
            }));
    });
}
Dt.on('save-conversation-turn', async (l, s) => {
    try {
        (await aC(s.sessionId, s.fullHistory), console.log('Conversation session saved:', s.sessionId));
    } catch (c) {
        console.error('Error saving conversation session:', c);
    }
});
Pi().catch(console.error);
Dt.on('clear-sensitive-data', () => {
    (console.log('Clearing renderer-side sensitive data...'), localStorage.removeItem('apiKey'), localStorage.removeItem('customPrompt'));
});
function oC(l) {
    const s = Yl.getCurrentView();
    (l === 'ctrl+enter' || l === 'cmd+enter') && (s === 'main' || Wv());
}
document.querySelector('cheating-daddy-app');
const Yl = {
    element: () => ({ handleStart: () => {} }),
    e: () => ({ handleStart: () => {} }),
    getCurrentView: () => 'main',
    getLayoutMode: () => 'normal',
    setStatus: l => Dt.send('update-status', l),
    setResponse: l => Dt.send('update-response', l),
    initializeGemini: Fw,
    startCapture: Pw,
    stopCapture: nC,
    sendTextMessage: $v,
    handleShortcut: oC,
    getAllConversationSessions: iC,
    getConversationSession: lC,
    initConversationStorage: Pi,
    getContentProtection: () => {
        const l = localStorage.getItem('contentProtection');
        return l !== null ? l === 'true' : !0;
    },
    isLinux: Iv,
    isMacOS: sf,
};
window.cheddar = Yl;
