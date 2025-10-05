(function () {
    const S = document.createElement('link').relList;
    if (S && S.supports && S.supports('modulepreload')) return;
    for (const w of document.querySelectorAll('link[rel="modulepreload"]')) r(w);
    new MutationObserver(w => {
        for (const U of w) if (U.type === 'childList') for (const B of U.addedNodes) B.tagName === 'LINK' && B.rel === 'modulepreload' && r(B);
    }).observe(document, { childList: !0, subtree: !0 });
    function x(w) {
        const U = {};
        return (
            w.integrity && (U.integrity = w.integrity),
            w.referrerPolicy && (U.referrerPolicy = w.referrerPolicy),
            w.crossOrigin === 'use-credentials'
                ? (U.credentials = 'include')
                : w.crossOrigin === 'anonymous'
                  ? (U.credentials = 'omit')
                  : (U.credentials = 'same-origin'),
            U
        );
    }
    function r(w) {
        if (w.ep) return;
        w.ep = !0;
        const U = x(w);
        fetch(w.href, U);
    }
})();
function bv(f) {
    return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, 'default') ? f.default : f;
}
var Rs = { exports: {} },
    Qn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zd;
function xv() {
    if (Zd) return Qn;
    Zd = 1;
    var f = Symbol.for('react.transitional.element'),
        S = Symbol.for('react.fragment');
    function x(r, w, U) {
        var B = null;
        if ((U !== void 0 && (B = '' + U), w.key !== void 0 && (B = '' + w.key), 'key' in w)) {
            U = {};
            for (var Z in w) Z !== 'key' && (U[Z] = w[Z]);
        } else U = w;
        return ((w = U.ref), { $$typeof: f, type: r, key: B, ref: w !== void 0 ? w : null, props: U });
    }
    return ((Qn.Fragment = S), (Qn.jsx = x), (Qn.jsxs = x), Qn);
}
var Kd;
function Cv() {
    return (Kd || ((Kd = 1), (Rs.exports = xv())), Rs.exports);
}
var c = Cv(),
    Us = { exports: {} },
    ne = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jd;
function jv() {
    if (Jd) return ne;
    Jd = 1;
    var f = Symbol.for('react.transitional.element'),
        S = Symbol.for('react.portal'),
        x = Symbol.for('react.fragment'),
        r = Symbol.for('react.strict_mode'),
        w = Symbol.for('react.profiler'),
        U = Symbol.for('react.consumer'),
        B = Symbol.for('react.context'),
        Z = Symbol.for('react.forward_ref'),
        M = Symbol.for('react.suspense'),
        j = Symbol.for('react.memo'),
        k = Symbol.for('react.lazy'),
        D = Symbol.for('react.activity'),
        Y = Symbol.iterator;
    function te(d) {
        return d === null || typeof d != 'object' ? null : ((d = (Y && d[Y]) || d['@@iterator']), typeof d == 'function' ? d : null);
    }
    var K = {
            isMounted: function () {
                return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        },
        $ = Object.assign,
        ee = {};
    function Ae(d, T, R) {
        ((this.props = d), (this.context = T), (this.refs = ee), (this.updater = R || K));
    }
    ((Ae.prototype.isReactComponent = {}),
        (Ae.prototype.setState = function (d, T) {
            if (typeof d != 'object' && typeof d != 'function' && d != null)
                throw Error('takes an object of state variables to update or a function which returns an object of state variables.');
            this.updater.enqueueSetState(this, d, T, 'setState');
        }),
        (Ae.prototype.forceUpdate = function (d) {
            this.updater.enqueueForceUpdate(this, d, 'forceUpdate');
        }));
    function De() {}
    De.prototype = Ae.prototype;
    function be(d, T, R) {
        ((this.props = d), (this.context = T), (this.refs = ee), (this.updater = R || K));
    }
    var Ce = (be.prototype = new De());
    ((Ce.constructor = be), $(Ce, Ae.prototype), (Ce.isPureReactComponent = !0));
    var Re = Array.isArray;
    function Oe() {}
    var L = { H: null, A: null, T: null, S: null },
        ie = Object.prototype.hasOwnProperty;
    function me(d, T, R) {
        var H = R.ref;
        return { $$typeof: f, type: d, key: T, ref: H !== void 0 ? H : null, props: R };
    }
    function P(d, T) {
        return me(d.type, T, d.props);
    }
    function Be(d) {
        return typeof d == 'object' && d !== null && d.$$typeof === f;
    }
    function se(d) {
        var T = { '=': '=0', ':': '=2' };
        return (
            '$' +
            d.replace(/[=:]/g, function (R) {
                return T[R];
            })
        );
    }
    var xe = /\/+/g;
    function je(d, T) {
        return typeof d == 'object' && d !== null && d.key != null ? se('' + d.key) : T.toString(36);
    }
    function O(d) {
        switch (d.status) {
            case 'fulfilled':
                return d.value;
            case 'rejected':
                throw d.reason;
            default:
                switch (
                    (typeof d.status == 'string'
                        ? d.then(Oe, Oe)
                        : ((d.status = 'pending'),
                          d.then(
                              function (T) {
                                  d.status === 'pending' && ((d.status = 'fulfilled'), (d.value = T));
                              },
                              function (T) {
                                  d.status === 'pending' && ((d.status = 'rejected'), (d.reason = T));
                              }
                          )),
                    d.status)
                ) {
                    case 'fulfilled':
                        return d.value;
                    case 'rejected':
                        throw d.reason;
                }
        }
        throw d;
    }
    function p(d, T, R, H, F) {
        var ae = typeof d;
        (ae === 'undefined' || ae === 'boolean') && (d = null);
        var oe = !1;
        if (d === null) oe = !0;
        else
            switch (ae) {
                case 'bigint':
                case 'string':
                case 'number':
                    oe = !0;
                    break;
                case 'object':
                    switch (d.$$typeof) {
                        case f:
                        case S:
                            oe = !0;
                            break;
                        case k:
                            return ((oe = d._init), p(oe(d._payload), T, R, H, F));
                    }
            }
        if (oe)
            return (
                (F = F(d)),
                (oe = H === '' ? '.' + je(d, 0) : H),
                Re(F)
                    ? ((R = ''),
                      oe != null && (R = oe.replace(xe, '$&/') + '/'),
                      p(F, T, R, '', function (At) {
                          return At;
                      }))
                    : F != null &&
                      (Be(F) && (F = P(F, R + (F.key == null || (d && d.key === F.key) ? '' : ('' + F.key).replace(xe, '$&/') + '/') + oe)),
                      T.push(F)),
                1
            );
        oe = 0;
        var qe = H === '' ? '.' : H + ':';
        if (Re(d)) for (var Ee = 0; Ee < d.length; Ee++) ((H = d[Ee]), (ae = qe + je(H, Ee)), (oe += p(H, T, R, ae, F)));
        else if (((Ee = te(d)), typeof Ee == 'function'))
            for (d = Ee.call(d), Ee = 0; !(H = d.next()).done; ) ((H = H.value), (ae = qe + je(H, Ee++)), (oe += p(H, T, R, ae, F)));
        else if (ae === 'object') {
            if (typeof d.then == 'function') return p(O(d), T, R, H, F);
            throw (
                (T = String(d)),
                Error(
                    'Objects are not valid as a React child (found: ' +
                        (T === '[object Object]' ? 'object with keys {' + Object.keys(d).join(', ') + '}' : T) +
                        '). If you meant to render a collection of children, use an array instead.'
                )
            );
        }
        return oe;
    }
    function _(d, T, R) {
        if (d == null) return d;
        var H = [],
            F = 0;
        return (
            p(d, H, '', '', function (ae) {
                return T.call(R, ae, F++);
            }),
            H
        );
    }
    function q(d) {
        if (d._status === -1) {
            var T = d._result;
            ((T = T()),
                T.then(
                    function (R) {
                        (d._status === 0 || d._status === -1) && ((d._status = 1), (d._result = R));
                    },
                    function (R) {
                        (d._status === 0 || d._status === -1) && ((d._status = 2), (d._result = R));
                    }
                ),
                d._status === -1 && ((d._status = 0), (d._result = T)));
        }
        if (d._status === 1) return d._result.default;
        throw d._result;
    }
    var J =
            typeof reportError == 'function'
                ? reportError
                : function (d) {
                      if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
                          var T = new window.ErrorEvent('error', {
                              bubbles: !0,
                              cancelable: !0,
                              message: typeof d == 'object' && d !== null && typeof d.message == 'string' ? String(d.message) : String(d),
                              error: d,
                          });
                          if (!window.dispatchEvent(T)) return;
                      } else if (typeof process == 'object' && typeof process.emit == 'function') {
                          process.emit('uncaughtException', d);
                          return;
                      }
                      console.error(d);
                  },
        le = {
            map: _,
            forEach: function (d, T, R) {
                _(
                    d,
                    function () {
                        T.apply(this, arguments);
                    },
                    R
                );
            },
            count: function (d) {
                var T = 0;
                return (
                    _(d, function () {
                        T++;
                    }),
                    T
                );
            },
            toArray: function (d) {
                return (
                    _(d, function (T) {
                        return T;
                    }) || []
                );
            },
            only: function (d) {
                if (!Be(d)) throw Error('React.Children.only expected to receive a single React element child.');
                return d;
            },
        };
    return (
        (ne.Activity = D),
        (ne.Children = le),
        (ne.Component = Ae),
        (ne.Fragment = x),
        (ne.Profiler = w),
        (ne.PureComponent = be),
        (ne.StrictMode = r),
        (ne.Suspense = M),
        (ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L),
        (ne.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (d) {
                return L.H.useMemoCache(d);
            },
        }),
        (ne.cache = function (d) {
            return function () {
                return d.apply(null, arguments);
            };
        }),
        (ne.cacheSignal = function () {
            return null;
        }),
        (ne.cloneElement = function (d, T, R) {
            if (d == null) throw Error('The argument must be a React element, but you passed ' + d + '.');
            var H = $({}, d.props),
                F = d.key;
            if (T != null)
                for (ae in (T.key !== void 0 && (F = '' + T.key), T))
                    !ie.call(T, ae) || ae === 'key' || ae === '__self' || ae === '__source' || (ae === 'ref' && T.ref === void 0) || (H[ae] = T[ae]);
            var ae = arguments.length - 2;
            if (ae === 1) H.children = R;
            else if (1 < ae) {
                for (var oe = Array(ae), qe = 0; qe < ae; qe++) oe[qe] = arguments[qe + 2];
                H.children = oe;
            }
            return me(d.type, F, H);
        }),
        (ne.createContext = function (d) {
            return (
                (d = { $$typeof: B, _currentValue: d, _currentValue2: d, _threadCount: 0, Provider: null, Consumer: null }),
                (d.Provider = d),
                (d.Consumer = { $$typeof: U, _context: d }),
                d
            );
        }),
        (ne.createElement = function (d, T, R) {
            var H,
                F = {},
                ae = null;
            if (T != null)
                for (H in (T.key !== void 0 && (ae = '' + T.key), T))
                    ie.call(T, H) && H !== 'key' && H !== '__self' && H !== '__source' && (F[H] = T[H]);
            var oe = arguments.length - 2;
            if (oe === 1) F.children = R;
            else if (1 < oe) {
                for (var qe = Array(oe), Ee = 0; Ee < oe; Ee++) qe[Ee] = arguments[Ee + 2];
                F.children = qe;
            }
            if (d && d.defaultProps) for (H in ((oe = d.defaultProps), oe)) F[H] === void 0 && (F[H] = oe[H]);
            return me(d, ae, F);
        }),
        (ne.createRef = function () {
            return { current: null };
        }),
        (ne.forwardRef = function (d) {
            return { $$typeof: Z, render: d };
        }),
        (ne.isValidElement = Be),
        (ne.lazy = function (d) {
            return { $$typeof: k, _payload: { _status: -1, _result: d }, _init: q };
        }),
        (ne.memo = function (d, T) {
            return { $$typeof: j, type: d, compare: T === void 0 ? null : T };
        }),
        (ne.startTransition = function (d) {
            var T = L.T,
                R = {};
            L.T = R;
            try {
                var H = d(),
                    F = L.S;
                (F !== null && F(R, H), typeof H == 'object' && H !== null && typeof H.then == 'function' && H.then(Oe, J));
            } catch (ae) {
                J(ae);
            } finally {
                (T !== null && R.types !== null && (T.types = R.types), (L.T = T));
            }
        }),
        (ne.unstable_useCacheRefresh = function () {
            return L.H.useCacheRefresh();
        }),
        (ne.use = function (d) {
            return L.H.use(d);
        }),
        (ne.useActionState = function (d, T, R) {
            return L.H.useActionState(d, T, R);
        }),
        (ne.useCallback = function (d, T) {
            return L.H.useCallback(d, T);
        }),
        (ne.useContext = function (d) {
            return L.H.useContext(d);
        }),
        (ne.useDebugValue = function () {}),
        (ne.useDeferredValue = function (d, T) {
            return L.H.useDeferredValue(d, T);
        }),
        (ne.useEffect = function (d, T) {
            return L.H.useEffect(d, T);
        }),
        (ne.useEffectEvent = function (d) {
            return L.H.useEffectEvent(d);
        }),
        (ne.useId = function () {
            return L.H.useId();
        }),
        (ne.useImperativeHandle = function (d, T, R) {
            return L.H.useImperativeHandle(d, T, R);
        }),
        (ne.useInsertionEffect = function (d, T) {
            return L.H.useInsertionEffect(d, T);
        }),
        (ne.useLayoutEffect = function (d, T) {
            return L.H.useLayoutEffect(d, T);
        }),
        (ne.useMemo = function (d, T) {
            return L.H.useMemo(d, T);
        }),
        (ne.useOptimistic = function (d, T) {
            return L.H.useOptimistic(d, T);
        }),
        (ne.useReducer = function (d, T, R) {
            return L.H.useReducer(d, T, R);
        }),
        (ne.useRef = function (d) {
            return L.H.useRef(d);
        }),
        (ne.useState = function (d) {
            return L.H.useState(d);
        }),
        (ne.useSyncExternalStore = function (d, T, R) {
            return L.H.useSyncExternalStore(d, T, R);
        }),
        (ne.useTransition = function () {
            return L.H.useTransition();
        }),
        (ne.version = '19.2.0'),
        ne
    );
}
var Wd;
function Gs() {
    return (Wd || ((Wd = 1), (Us.exports = jv())), Us.exports);
}
var v = Gs();
const Nv = bv(v);
var ks = { exports: {} },
    Xn = {},
    Ls = { exports: {} },
    Hs = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $d;
function Tv() {
    return (
        $d ||
            (($d = 1),
            (function (f) {
                function S(p, _) {
                    var q = p.length;
                    p.push(_);
                    e: for (; 0 < q; ) {
                        var J = (q - 1) >>> 1,
                            le = p[J];
                        if (0 < w(le, _)) ((p[J] = _), (p[q] = le), (q = J));
                        else break e;
                    }
                }
                function x(p) {
                    return p.length === 0 ? null : p[0];
                }
                function r(p) {
                    if (p.length === 0) return null;
                    var _ = p[0],
                        q = p.pop();
                    if (q !== _) {
                        p[0] = q;
                        e: for (var J = 0, le = p.length, d = le >>> 1; J < d; ) {
                            var T = 2 * (J + 1) - 1,
                                R = p[T],
                                H = T + 1,
                                F = p[H];
                            if (0 > w(R, q)) H < le && 0 > w(F, R) ? ((p[J] = F), (p[H] = q), (J = H)) : ((p[J] = R), (p[T] = q), (J = T));
                            else if (H < le && 0 > w(F, q)) ((p[J] = F), (p[H] = q), (J = H));
                            else break e;
                        }
                    }
                    return _;
                }
                function w(p, _) {
                    var q = p.sortIndex - _.sortIndex;
                    return q !== 0 ? q : p.id - _.id;
                }
                if (((f.unstable_now = void 0), typeof performance == 'object' && typeof performance.now == 'function')) {
                    var U = performance;
                    f.unstable_now = function () {
                        return U.now();
                    };
                } else {
                    var B = Date,
                        Z = B.now();
                    f.unstable_now = function () {
                        return B.now() - Z;
                    };
                }
                var M = [],
                    j = [],
                    k = 1,
                    D = null,
                    Y = 3,
                    te = !1,
                    K = !1,
                    $ = !1,
                    ee = !1,
                    Ae = typeof setTimeout == 'function' ? setTimeout : null,
                    De = typeof clearTimeout == 'function' ? clearTimeout : null,
                    be = typeof setImmediate < 'u' ? setImmediate : null;
                function Ce(p) {
                    for (var _ = x(j); _ !== null; ) {
                        if (_.callback === null) r(j);
                        else if (_.startTime <= p) (r(j), (_.sortIndex = _.expirationTime), S(M, _));
                        else break;
                        _ = x(j);
                    }
                }
                function Re(p) {
                    if ((($ = !1), Ce(p), !K))
                        if (x(M) !== null) ((K = !0), Oe || ((Oe = !0), se()));
                        else {
                            var _ = x(j);
                            _ !== null && O(Re, _.startTime - p);
                        }
                }
                var Oe = !1,
                    L = -1,
                    ie = 5,
                    me = -1;
                function P() {
                    return ee ? !0 : !(f.unstable_now() - me < ie);
                }
                function Be() {
                    if (((ee = !1), Oe)) {
                        var p = f.unstable_now();
                        me = p;
                        var _ = !0;
                        try {
                            e: {
                                ((K = !1), $ && (($ = !1), De(L), (L = -1)), (te = !0));
                                var q = Y;
                                try {
                                    t: {
                                        for (Ce(p), D = x(M); D !== null && !(D.expirationTime > p && P()); ) {
                                            var J = D.callback;
                                            if (typeof J == 'function') {
                                                ((D.callback = null), (Y = D.priorityLevel));
                                                var le = J(D.expirationTime <= p);
                                                if (((p = f.unstable_now()), typeof le == 'function')) {
                                                    ((D.callback = le), Ce(p), (_ = !0));
                                                    break t;
                                                }
                                                (D === x(M) && r(M), Ce(p));
                                            } else r(M);
                                            D = x(M);
                                        }
                                        if (D !== null) _ = !0;
                                        else {
                                            var d = x(j);
                                            (d !== null && O(Re, d.startTime - p), (_ = !1));
                                        }
                                    }
                                    break e;
                                } finally {
                                    ((D = null), (Y = q), (te = !1));
                                }
                                _ = void 0;
                            }
                        } finally {
                            _ ? se() : (Oe = !1);
                        }
                    }
                }
                var se;
                if (typeof be == 'function')
                    se = function () {
                        be(Be);
                    };
                else if (typeof MessageChannel < 'u') {
                    var xe = new MessageChannel(),
                        je = xe.port2;
                    ((xe.port1.onmessage = Be),
                        (se = function () {
                            je.postMessage(null);
                        }));
                } else
                    se = function () {
                        Ae(Be, 0);
                    };
                function O(p, _) {
                    L = Ae(function () {
                        p(f.unstable_now());
                    }, _);
                }
                ((f.unstable_IdlePriority = 5),
                    (f.unstable_ImmediatePriority = 1),
                    (f.unstable_LowPriority = 4),
                    (f.unstable_NormalPriority = 3),
                    (f.unstable_Profiling = null),
                    (f.unstable_UserBlockingPriority = 2),
                    (f.unstable_cancelCallback = function (p) {
                        p.callback = null;
                    }),
                    (f.unstable_forceFrameRate = function (p) {
                        0 > p || 125 < p
                            ? console.error(
                                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                              )
                            : (ie = 0 < p ? Math.floor(1e3 / p) : 5);
                    }),
                    (f.unstable_getCurrentPriorityLevel = function () {
                        return Y;
                    }),
                    (f.unstable_next = function (p) {
                        switch (Y) {
                            case 1:
                            case 2:
                            case 3:
                                var _ = 3;
                                break;
                            default:
                                _ = Y;
                        }
                        var q = Y;
                        Y = _;
                        try {
                            return p();
                        } finally {
                            Y = q;
                        }
                    }),
                    (f.unstable_requestPaint = function () {
                        ee = !0;
                    }),
                    (f.unstable_runWithPriority = function (p, _) {
                        switch (p) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                p = 3;
                        }
                        var q = Y;
                        Y = p;
                        try {
                            return _();
                        } finally {
                            Y = q;
                        }
                    }),
                    (f.unstable_scheduleCallback = function (p, _, q) {
                        var J = f.unstable_now();
                        switch (
                            (typeof q == 'object' && q !== null ? ((q = q.delay), (q = typeof q == 'number' && 0 < q ? J + q : J)) : (q = J), p)
                        ) {
                            case 1:
                                var le = -1;
                                break;
                            case 2:
                                le = 250;
                                break;
                            case 5:
                                le = 1073741823;
                                break;
                            case 4:
                                le = 1e4;
                                break;
                            default:
                                le = 5e3;
                        }
                        return (
                            (le = q + le),
                            (p = { id: k++, callback: _, priorityLevel: p, startTime: q, expirationTime: le, sortIndex: -1 }),
                            q > J
                                ? ((p.sortIndex = q), S(j, p), x(M) === null && p === x(j) && ($ ? (De(L), (L = -1)) : ($ = !0), O(Re, q - J)))
                                : ((p.sortIndex = le), S(M, p), K || te || ((K = !0), Oe || ((Oe = !0), se()))),
                            p
                        );
                    }),
                    (f.unstable_shouldYield = P),
                    (f.unstable_wrapCallback = function (p) {
                        var _ = Y;
                        return function () {
                            var q = Y;
                            Y = _;
                            try {
                                return p.apply(this, arguments);
                            } finally {
                                Y = q;
                            }
                        };
                    }));
            })(Hs)),
        Hs
    );
}
var Fd;
function Av() {
    return (Fd || ((Fd = 1), (Ls.exports = Tv())), Ls.exports);
}
var Bs = { exports: {} },
    ut = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Id;
function Ev() {
    if (Id) return ut;
    Id = 1;
    var f = Gs();
    function S(M) {
        var j = 'https://react.dev/errors/' + M;
        if (1 < arguments.length) {
            j += '?args[]=' + encodeURIComponent(arguments[1]);
            for (var k = 2; k < arguments.length; k++) j += '&args[]=' + encodeURIComponent(arguments[k]);
        }
        return (
            'Minified React error #' +
            M +
            '; visit ' +
            j +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
    }
    function x() {}
    var r = {
            d: {
                f: x,
                r: function () {
                    throw Error(S(522));
                },
                D: x,
                C: x,
                L: x,
                m: x,
                X: x,
                S: x,
                M: x,
            },
            p: 0,
            findDOMNode: null,
        },
        w = Symbol.for('react.portal');
    function U(M, j, k) {
        var D = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return { $$typeof: w, key: D == null ? null : '' + D, children: M, containerInfo: j, implementation: k };
    }
    var B = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function Z(M, j) {
        if (M === 'font') return '';
        if (typeof j == 'string') return j === 'use-credentials' ? j : '';
    }
    return (
        (ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
        (ut.createPortal = function (M, j) {
            var k = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!j || (j.nodeType !== 1 && j.nodeType !== 9 && j.nodeType !== 11)) throw Error(S(299));
            return U(M, j, null, k);
        }),
        (ut.flushSync = function (M) {
            var j = B.T,
                k = r.p;
            try {
                if (((B.T = null), (r.p = 2), M)) return M();
            } finally {
                ((B.T = j), (r.p = k), r.d.f());
            }
        }),
        (ut.preconnect = function (M, j) {
            typeof M == 'string' &&
                (j ? ((j = j.crossOrigin), (j = typeof j == 'string' ? (j === 'use-credentials' ? j : '') : void 0)) : (j = null), r.d.C(M, j));
        }),
        (ut.prefetchDNS = function (M) {
            typeof M == 'string' && r.d.D(M);
        }),
        (ut.preinit = function (M, j) {
            if (typeof M == 'string' && j && typeof j.as == 'string') {
                var k = j.as,
                    D = Z(k, j.crossOrigin),
                    Y = typeof j.integrity == 'string' ? j.integrity : void 0,
                    te = typeof j.fetchPriority == 'string' ? j.fetchPriority : void 0;
                k === 'style'
                    ? r.d.S(M, typeof j.precedence == 'string' ? j.precedence : void 0, { crossOrigin: D, integrity: Y, fetchPriority: te })
                    : k === 'script' &&
                      r.d.X(M, { crossOrigin: D, integrity: Y, fetchPriority: te, nonce: typeof j.nonce == 'string' ? j.nonce : void 0 });
            }
        }),
        (ut.preinitModule = function (M, j) {
            if (typeof M == 'string')
                if (typeof j == 'object' && j !== null) {
                    if (j.as == null || j.as === 'script') {
                        var k = Z(j.as, j.crossOrigin);
                        r.d.M(M, {
                            crossOrigin: k,
                            integrity: typeof j.integrity == 'string' ? j.integrity : void 0,
                            nonce: typeof j.nonce == 'string' ? j.nonce : void 0,
                        });
                    }
                } else j == null && r.d.M(M);
        }),
        (ut.preload = function (M, j) {
            if (typeof M == 'string' && typeof j == 'object' && j !== null && typeof j.as == 'string') {
                var k = j.as,
                    D = Z(k, j.crossOrigin);
                r.d.L(M, k, {
                    crossOrigin: D,
                    integrity: typeof j.integrity == 'string' ? j.integrity : void 0,
                    nonce: typeof j.nonce == 'string' ? j.nonce : void 0,
                    type: typeof j.type == 'string' ? j.type : void 0,
                    fetchPriority: typeof j.fetchPriority == 'string' ? j.fetchPriority : void 0,
                    referrerPolicy: typeof j.referrerPolicy == 'string' ? j.referrerPolicy : void 0,
                    imageSrcSet: typeof j.imageSrcSet == 'string' ? j.imageSrcSet : void 0,
                    imageSizes: typeof j.imageSizes == 'string' ? j.imageSizes : void 0,
                    media: typeof j.media == 'string' ? j.media : void 0,
                });
            }
        }),
        (ut.preloadModule = function (M, j) {
            if (typeof M == 'string')
                if (j) {
                    var k = Z(j.as, j.crossOrigin);
                    r.d.m(M, {
                        as: typeof j.as == 'string' && j.as !== 'script' ? j.as : void 0,
                        crossOrigin: k,
                        integrity: typeof j.integrity == 'string' ? j.integrity : void 0,
                    });
                } else r.d.m(M);
        }),
        (ut.requestFormReset = function (M) {
            r.d.r(M);
        }),
        (ut.unstable_batchedUpdates = function (M, j) {
            return M(j);
        }),
        (ut.useFormState = function (M, j, k) {
            return B.H.useFormState(M, j, k);
        }),
        (ut.useFormStatus = function () {
            return B.H.useHostTransitionStatus();
        }),
        (ut.version = '19.2.0'),
        ut
    );
}
var Pd;
function Mv() {
    if (Pd) return Bs.exports;
    Pd = 1;
    function f() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
            } catch (S) {
                console.error(S);
            }
    }
    return (f(), (Bs.exports = Ev()), Bs.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var eh;
function zv() {
    if (eh) return Xn;
    eh = 1;
    var f = Av(),
        S = Gs(),
        x = Mv();
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
    function w(e) {
        return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
    }
    function U(e) {
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
    function B(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
        }
        return null;
    }
    function Z(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
        }
        return null;
    }
    function M(e) {
        if (U(e) !== e) throw Error(r(188));
    }
    function j(e) {
        var t = e.alternate;
        if (!t) {
            if (((t = U(e)), t === null)) throw Error(r(188));
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
                    if (i === l) return (M(n), e);
                    if (i === a) return (M(n), t);
                    i = i.sibling;
                }
                throw Error(r(188));
            }
            if (l.return !== a.return) ((l = n), (a = i));
            else {
                for (var u = !1, s = n.child; s; ) {
                    if (s === l) {
                        ((u = !0), (l = n), (a = i));
                        break;
                    }
                    if (s === a) {
                        ((u = !0), (a = n), (l = i));
                        break;
                    }
                    s = s.sibling;
                }
                if (!u) {
                    for (s = i.child; s; ) {
                        if (s === l) {
                            ((u = !0), (l = i), (a = n));
                            break;
                        }
                        if (s === a) {
                            ((u = !0), (a = i), (l = n));
                            break;
                        }
                        s = s.sibling;
                    }
                    if (!u) throw Error(r(189));
                }
            }
            if (l.alternate !== a) throw Error(r(190));
        }
        if (l.tag !== 3) throw Error(r(188));
        return l.stateNode.current === l ? e : t;
    }
    function k(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null; ) {
            if (((t = k(e)), t !== null)) return t;
            e = e.sibling;
        }
        return null;
    }
    var D = Object.assign,
        Y = Symbol.for('react.element'),
        te = Symbol.for('react.transitional.element'),
        K = Symbol.for('react.portal'),
        $ = Symbol.for('react.fragment'),
        ee = Symbol.for('react.strict_mode'),
        Ae = Symbol.for('react.profiler'),
        De = Symbol.for('react.consumer'),
        be = Symbol.for('react.context'),
        Ce = Symbol.for('react.forward_ref'),
        Re = Symbol.for('react.suspense'),
        Oe = Symbol.for('react.suspense_list'),
        L = Symbol.for('react.memo'),
        ie = Symbol.for('react.lazy'),
        me = Symbol.for('react.activity'),
        P = Symbol.for('react.memo_cache_sentinel'),
        Be = Symbol.iterator;
    function se(e) {
        return e === null || typeof e != 'object' ? null : ((e = (Be && e[Be]) || e['@@iterator']), typeof e == 'function' ? e : null);
    }
    var xe = Symbol.for('react.client.reference');
    function je(e) {
        if (e == null) return null;
        if (typeof e == 'function') return e.$$typeof === xe ? null : e.displayName || e.name || null;
        if (typeof e == 'string') return e;
        switch (e) {
            case $:
                return 'Fragment';
            case Ae:
                return 'Profiler';
            case ee:
                return 'StrictMode';
            case Re:
                return 'Suspense';
            case Oe:
                return 'SuspenseList';
            case me:
                return 'Activity';
        }
        if (typeof e == 'object')
            switch (e.$$typeof) {
                case K:
                    return 'Portal';
                case be:
                    return e.displayName || 'Context';
                case De:
                    return (e._context.displayName || 'Context') + '.Consumer';
                case Ce:
                    var t = e.render;
                    return (
                        (e = e.displayName),
                        e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
                        e
                    );
                case L:
                    return ((t = e.displayName || null), t !== null ? t : je(e.type) || 'Memo');
                case ie:
                    ((t = e._payload), (e = e._init));
                    try {
                        return je(e(t));
                    } catch {}
            }
        return null;
    }
    var O = Array.isArray,
        p = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        _ = x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        q = { pending: !1, data: null, method: null, action: null },
        J = [],
        le = -1;
    function d(e) {
        return { current: e };
    }
    function T(e) {
        0 > le || ((e.current = J[le]), (J[le] = null), le--);
    }
    function R(e, t) {
        (le++, (J[le] = e.current), (e.current = t));
    }
    var H = d(null),
        F = d(null),
        ae = d(null),
        oe = d(null);
    function qe(e, t) {
        switch ((R(ae, t), R(F, e), R(H, null), t.nodeType)) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? vd(e) : 0;
                break;
            default:
                if (((e = t.tagName), (t = t.namespaceURI))) ((t = vd(t)), (e = gd(t, e)));
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
        (T(H), R(H, e));
    }
    function Ee() {
        (T(H), T(F), T(ae));
    }
    function At(e) {
        e.memoizedState !== null && R(oe, e);
        var t = H.current,
            l = gd(t, e.type);
        t !== l && (R(F, e), R(H, l));
    }
    function Lt(e) {
        (F.current === e && (T(H), T(F)), oe.current === e && (T(oe), (Bn._currentValue = q)));
    }
    var Zt, Yl;
    function Ht(e) {
        if (Zt === void 0)
            try {
                throw Error();
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                ((Zt = (t && t[1]) || ''),
                    (Yl =
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
            Zt +
            e +
            Yl
        );
    }
    var Gl = !1;
    function Ql(e, t) {
        if (!e || Gl) return '';
        Gl = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (t) {
                            var E = function () {
                                throw Error();
                            };
                            if (
                                (Object.defineProperty(E.prototype, 'props', {
                                    set: function () {
                                        throw Error();
                                    },
                                }),
                                typeof Reflect == 'object' && Reflect.construct)
                            ) {
                                try {
                                    Reflect.construct(E, []);
                                } catch (C) {
                                    var b = C;
                                }
                                Reflect.construct(e, [], E);
                            } else {
                                try {
                                    E.call();
                                } catch (C) {
                                    b = C;
                                }
                                e.call(E.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (C) {
                                b = C;
                            }
                            (E = e()) && typeof E.catch == 'function' && E.catch(function () {});
                        }
                    } catch (C) {
                        if (C && b && typeof C.stack == 'string') return [C.stack, b.stack];
                    }
                    return [null, null];
                },
            };
            a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
            var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, 'name');
            n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, 'name', { value: 'DetermineComponentFrameRoot' });
            var i = a.DetermineComponentFrameRoot(),
                u = i[0],
                s = i[1];
            if (u && s) {
                var o = u.split(`
`),
                    y = s.split(`
`);
                for (n = a = 0; a < o.length && !o[a].includes('DetermineComponentFrameRoot'); ) a++;
                for (; n < y.length && !y[n].includes('DetermineComponentFrameRoot'); ) n++;
                if (a === o.length || n === y.length) for (a = o.length - 1, n = y.length - 1; 1 <= a && 0 <= n && o[a] !== y[n]; ) n--;
                for (; 1 <= a && 0 <= n; a--, n--)
                    if (o[a] !== y[n]) {
                        if (a !== 1 || n !== 1)
                            do
                                if ((a--, n--, 0 > n || o[a] !== y[n])) {
                                    var N =
                                        `
` + o[a].replace(' at new ', ' at ');
                                    return (e.displayName && N.includes('<anonymous>') && (N = N.replace('<anonymous>', e.displayName)), N);
                                }
                            while (1 <= a && 0 <= n);
                        break;
                    }
            }
        } finally {
            ((Gl = !1), (Error.prepareStackTrace = l));
        }
        return (l = e ? e.displayName || e.name : '') ? Ht(l) : '';
    }
    function z(e, t) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return Ht(e.type);
            case 16:
                return Ht('Lazy');
            case 13:
                return e.child !== t && t !== null ? Ht('Suspense Fallback') : Ht('Suspense');
            case 19:
                return Ht('SuspenseList');
            case 0:
            case 15:
                return Ql(e.type, !1);
            case 11:
                return Ql(e.type.render, !1);
            case 1:
                return Ql(e.type, !0);
            case 31:
                return Ht('Activity');
            default:
                return '';
        }
    }
    function V(e) {
        try {
            var t = '',
                l = null;
            do ((t += z(e, l)), (l = e), (e = e.return));
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
    var pe = Object.prototype.hasOwnProperty,
        gl = f.unstable_scheduleCallback,
        Xl = f.unstable_cancelCallback,
        gu = f.unstable_shouldYield,
        yu = f.unstable_requestPaint,
        ct = f.unstable_now,
        pu = f.unstable_getCurrentPriorityLevel,
        Jn = f.unstable_ImmediatePriority,
        Wn = f.unstable_UserBlockingPriority,
        Vl = f.unstable_NormalPriority,
        $n = f.unstable_LowPriority,
        Wa = f.unstable_IdlePriority,
        Su = f.log,
        bu = f.unstable_setDisableYieldValue,
        G = null,
        Le = null;
    function $e(e) {
        if ((typeof Su == 'function' && bu(e), Le && typeof Le.setStrictMode == 'function'))
            try {
                Le.setStrictMode(G, e);
            } catch {}
    }
    var st = Math.clz32 ? Math.clz32 : Ft,
        xu = Math.log,
        $a = Math.LN2;
    function Ft(e) {
        return ((e >>>= 0), e === 0 ? 32 : (31 - ((xu(e) / $a) | 0)) | 0);
    }
    var Fn = 256,
        In = 262144,
        Pn = 4194304;
    function Zl(e) {
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
    function ei(e, t, l) {
        var a = e.pendingLanes;
        if (a === 0) return 0;
        var n = 0,
            i = e.suspendedLanes,
            u = e.pingedLanes;
        e = e.warmLanes;
        var s = a & 134217727;
        return (
            s !== 0
                ? ((a = s & ~i), a !== 0 ? (n = Zl(a)) : ((u &= s), u !== 0 ? (n = Zl(u)) : l || ((l = s & ~e), l !== 0 && (n = Zl(l)))))
                : ((s = a & ~i), s !== 0 ? (n = Zl(s)) : u !== 0 ? (n = Zl(u)) : l || ((l = a & ~e), l !== 0 && (n = Zl(l)))),
            n === 0 ? 0 : t !== 0 && t !== n && (t & i) === 0 && ((i = n & -n), (l = t & -t), i >= l || (i === 32 && (l & 4194048) !== 0)) ? t : n
        );
    }
    function Fa(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function ch(e, t) {
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
    function Js() {
        var e = Pn;
        return ((Pn <<= 1), (Pn & 62914560) === 0 && (Pn = 4194304), e);
    }
    function Cu(e) {
        for (var t = [], l = 0; 31 > l; l++) t.push(e);
        return t;
    }
    function Ia(e, t) {
        ((e.pendingLanes |= t), t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function sh(e, t, l, a, n, i) {
        var u = e.pendingLanes;
        ((e.pendingLanes = l),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.warmLanes = 0),
            (e.expiredLanes &= l),
            (e.entangledLanes &= l),
            (e.errorRecoveryDisabledLanes &= l),
            (e.shellSuspendCounter = 0));
        var s = e.entanglements,
            o = e.expirationTimes,
            y = e.hiddenUpdates;
        for (l = u & ~l; 0 < l; ) {
            var N = 31 - st(l),
                E = 1 << N;
            ((s[N] = 0), (o[N] = -1));
            var b = y[N];
            if (b !== null)
                for (y[N] = null, N = 0; N < b.length; N++) {
                    var C = b[N];
                    C !== null && (C.lane &= -536870913);
                }
            l &= ~E;
        }
        (a !== 0 && Ws(e, a, 0), i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(u & ~t)));
    }
    function Ws(e, t, l) {
        ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
        var a = 31 - st(t);
        ((e.entangledLanes |= t), (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 261930)));
    }
    function $s(e, t) {
        var l = (e.entangledLanes |= t);
        for (e = e.entanglements; l; ) {
            var a = 31 - st(l),
                n = 1 << a;
            ((n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n));
        }
    }
    function Fs(e, t) {
        var l = t & -t;
        return ((l = (l & 42) !== 0 ? 1 : ju(l)), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l);
    }
    function ju(e) {
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
    function Nu(e) {
        return ((e &= -e), 2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
    }
    function Is() {
        var e = _.p;
        return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Bd(e.type));
    }
    function Ps(e, t) {
        var l = _.p;
        try {
            return ((_.p = e), t());
        } finally {
            _.p = l;
        }
    }
    var yl = Math.random().toString(36).slice(2),
        et = '__reactFiber$' + yl,
        rt = '__reactProps$' + yl,
        ra = '__reactContainer$' + yl,
        Tu = '__reactEvents$' + yl,
        oh = '__reactListeners$' + yl,
        rh = '__reactHandles$' + yl,
        eo = '__reactResources$' + yl,
        Pa = '__reactMarker$' + yl;
    function Au(e) {
        (delete e[et], delete e[rt], delete e[Tu], delete e[oh], delete e[rh]);
    }
    function fa(e) {
        var t = e[et];
        if (t) return t;
        for (var l = e.parentNode; l; ) {
            if ((t = l[ra] || l[et])) {
                if (((l = t.alternate), t.child !== null || (l !== null && l.child !== null)))
                    for (e = jd(e); e !== null; ) {
                        if ((l = e[et])) return l;
                        e = jd(e);
                    }
                return t;
            }
            ((e = l), (l = e.parentNode));
        }
        return null;
    }
    function da(e) {
        if ((e = e[et] || e[ra])) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
        }
        return null;
    }
    function en(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
        throw Error(r(33));
    }
    function ha(e) {
        var t = e[eo];
        return (t || (t = e[eo] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
    }
    function Ie(e) {
        e[Pa] = !0;
    }
    var to = new Set(),
        lo = {};
    function Kl(e, t) {
        (ma(e, t), ma(e + 'Capture', t));
    }
    function ma(e, t) {
        for (lo[e] = t, e = 0; e < t.length; e++) to.add(t[e]);
    }
    var fh = RegExp(
            '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
        ),
        ao = {},
        no = {};
    function dh(e) {
        return pe.call(no, e) ? !0 : pe.call(ao, e) ? !1 : fh.test(e) ? (no[e] = !0) : ((ao[e] = !0), !1);
    }
    function ti(e, t, l) {
        if (dh(t))
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
    function li(e, t, l) {
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
    function It(e, t, l, a) {
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
    function Et(e) {
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
    function io(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
    }
    function hh(e, t, l) {
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
                    set: function (u) {
                        ((l = '' + u), i.call(this, u));
                    },
                }),
                Object.defineProperty(e, t, { enumerable: a.enumerable }),
                {
                    getValue: function () {
                        return l;
                    },
                    setValue: function (u) {
                        l = '' + u;
                    },
                    stopTracking: function () {
                        ((e._valueTracker = null), delete e[t]);
                    },
                }
            );
        }
    }
    function Eu(e) {
        if (!e._valueTracker) {
            var t = io(e) ? 'checked' : 'value';
            e._valueTracker = hh(e, t, '' + e[t]);
        }
    }
    function uo(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var l = t.getValue(),
            a = '';
        return (e && (a = io(e) ? (e.checked ? 'true' : 'false') : e.value), (e = a), e !== l ? (t.setValue(e), !0) : !1);
    }
    function ai(e) {
        if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
        try {
            return e.activeElement || e.body;
        } catch {
            return e.body;
        }
    }
    var mh = /[\n"\\]/g;
    function Mt(e) {
        return e.replace(mh, function (t) {
            return '\\' + t.charCodeAt(0).toString(16) + ' ';
        });
    }
    function Mu(e, t, l, a, n, i, u, s) {
        ((e.name = ''),
            u != null && typeof u != 'function' && typeof u != 'symbol' && typeof u != 'boolean' ? (e.type = u) : e.removeAttribute('type'),
            t != null
                ? u === 'number'
                    ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + Et(t))
                    : e.value !== '' + Et(t) && (e.value = '' + Et(t))
                : (u !== 'submit' && u !== 'reset') || e.removeAttribute('value'),
            t != null ? zu(e, u, Et(t)) : l != null ? zu(e, u, Et(l)) : a != null && e.removeAttribute('value'),
            n == null && i != null && (e.defaultChecked = !!i),
            n != null && (e.checked = n && typeof n != 'function' && typeof n != 'symbol'),
            s != null && typeof s != 'function' && typeof s != 'symbol' && typeof s != 'boolean' ? (e.name = '' + Et(s)) : e.removeAttribute('name'));
    }
    function co(e, t, l, a, n, i, u, s) {
        if ((i != null && typeof i != 'function' && typeof i != 'symbol' && typeof i != 'boolean' && (e.type = i), t != null || l != null)) {
            if (!((i !== 'submit' && i !== 'reset') || t != null)) {
                Eu(e);
                return;
            }
            ((l = l != null ? '' + Et(l) : ''), (t = t != null ? '' + Et(t) : l), s || t === e.value || (e.value = t), (e.defaultValue = t));
        }
        ((a = a ?? n),
            (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
            (e.checked = s ? e.checked : !!a),
            (e.defaultChecked = !!a),
            u != null && typeof u != 'function' && typeof u != 'symbol' && typeof u != 'boolean' && (e.name = u),
            Eu(e));
    }
    function zu(e, t, l) {
        (t === 'number' && ai(e.ownerDocument) === e) || e.defaultValue === '' + l || (e.defaultValue = '' + l);
    }
    function va(e, t, l, a) {
        if (((e = e.options), t)) {
            t = {};
            for (var n = 0; n < l.length; n++) t['$' + l[n]] = !0;
            for (l = 0; l < e.length; l++)
                ((n = t.hasOwnProperty('$' + e[l].value)), e[l].selected !== n && (e[l].selected = n), n && a && (e[l].defaultSelected = !0));
        } else {
            for (l = '' + Et(l), t = null, n = 0; n < e.length; n++) {
                if (e[n].value === l) {
                    ((e[n].selected = !0), a && (e[n].defaultSelected = !0));
                    return;
                }
                t !== null || e[n].disabled || (t = e[n]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function so(e, t, l) {
        if (t != null && ((t = '' + Et(t)), t !== e.value && (e.value = t), l == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return;
        }
        e.defaultValue = l != null ? '' + Et(l) : '';
    }
    function oo(e, t, l, a) {
        if (t == null) {
            if (a != null) {
                if (l != null) throw Error(r(92));
                if (O(a)) {
                    if (1 < a.length) throw Error(r(93));
                    a = a[0];
                }
                l = a;
            }
            (l == null && (l = ''), (t = l));
        }
        ((l = Et(t)), (e.defaultValue = l), (a = e.textContent), a === l && a !== '' && a !== null && (e.value = a), Eu(e));
    }
    function ga(e, t) {
        if (t) {
            var l = e.firstChild;
            if (l && l === e.lastChild && l.nodeType === 3) {
                l.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var vh = new Set(
        'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
            ' '
        )
    );
    function ro(e, t, l) {
        var a = t.indexOf('--') === 0;
        l == null || typeof l == 'boolean' || l === ''
            ? a
                ? e.setProperty(t, '')
                : t === 'float'
                  ? (e.cssFloat = '')
                  : (e[t] = '')
            : a
              ? e.setProperty(t, l)
              : typeof l != 'number' || l === 0 || vh.has(t)
                ? t === 'float'
                    ? (e.cssFloat = l)
                    : (e[t] = ('' + l).trim())
                : (e[t] = l + 'px');
    }
    function fo(e, t, l) {
        if (t != null && typeof t != 'object') throw Error(r(62));
        if (((e = e.style), l != null)) {
            for (var a in l)
                !l.hasOwnProperty(a) ||
                    (t != null && t.hasOwnProperty(a)) ||
                    (a.indexOf('--') === 0 ? e.setProperty(a, '') : a === 'float' ? (e.cssFloat = '') : (e[a] = ''));
            for (var n in t) ((a = t[n]), t.hasOwnProperty(n) && l[n] !== a && ro(e, n, a));
        } else for (var i in t) t.hasOwnProperty(i) && ro(e, i, t[i]);
    }
    function wu(e) {
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
    var gh = new Map([
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
        yh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function ni(e) {
        return yh.test('' + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Pt() {}
    var Du = null;
    function Ou(e) {
        return (
            (e = e.target || e.srcElement || window),
            e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
        );
    }
    var ya = null,
        pa = null;
    function ho(e) {
        var t = da(e);
        if (t && (e = t.stateNode)) {
            var l = e[rt] || null;
            e: switch (((e = t.stateNode), t.type)) {
                case 'input':
                    if (
                        (Mu(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name),
                        (t = l.name),
                        l.type === 'radio' && t != null)
                    ) {
                        for (l = e; l.parentNode; ) l = l.parentNode;
                        for (l = l.querySelectorAll('input[name="' + Mt('' + t) + '"][type="radio"]'), t = 0; t < l.length; t++) {
                            var a = l[t];
                            if (a !== e && a.form === e.form) {
                                var n = a[rt] || null;
                                if (!n) throw Error(r(90));
                                Mu(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
                            }
                        }
                        for (t = 0; t < l.length; t++) ((a = l[t]), a.form === e.form && uo(a));
                    }
                    break e;
                case 'textarea':
                    so(e, l.value, l.defaultValue);
                    break e;
                case 'select':
                    ((t = l.value), t != null && va(e, !!l.multiple, t, !1));
            }
        }
    }
    var _u = !1;
    function mo(e, t, l) {
        if (_u) return e(t, l);
        _u = !0;
        try {
            var a = e(t);
            return a;
        } finally {
            if (((_u = !1), (ya !== null || pa !== null) && (Vi(), ya && ((t = ya), (e = pa), (pa = ya = null), ho(t), e))))
                for (t = 0; t < e.length; t++) ho(e[t]);
        }
    }
    function tn(e, t) {
        var l = e.stateNode;
        if (l === null) return null;
        var a = l[rt] || null;
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
    var el = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
        Ru = !1;
    if (el)
        try {
            var ln = {};
            (Object.defineProperty(ln, 'passive', {
                get: function () {
                    Ru = !0;
                },
            }),
                window.addEventListener('test', ln, ln),
                window.removeEventListener('test', ln, ln));
        } catch {
            Ru = !1;
        }
    var pl = null,
        Uu = null,
        ii = null;
    function vo() {
        if (ii) return ii;
        var e,
            t = Uu,
            l = t.length,
            a,
            n = 'value' in pl ? pl.value : pl.textContent,
            i = n.length;
        for (e = 0; e < l && t[e] === n[e]; e++);
        var u = l - e;
        for (a = 1; a <= u && t[l - a] === n[i - a]; a++);
        return (ii = n.slice(e, 1 < a ? 1 - a : void 0));
    }
    function ui(e) {
        var t = e.keyCode;
        return ('charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0);
    }
    function ci() {
        return !0;
    }
    function go() {
        return !1;
    }
    function ft(e) {
        function t(l, a, n, i, u) {
            ((this._reactName = l), (this._targetInst = n), (this.type = a), (this.nativeEvent = i), (this.target = u), (this.currentTarget = null));
            for (var s in e) e.hasOwnProperty(s) && ((l = e[s]), (this[s] = l ? l(i) : i[s]));
            return (
                (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ci : go),
                (this.isPropagationStopped = go),
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
                        (this.isDefaultPrevented = ci));
                },
                stopPropagation: function () {
                    var l = this.nativeEvent;
                    l &&
                        (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
                        (this.isPropagationStopped = ci));
                },
                persist: function () {},
                isPersistent: ci,
            }),
            t
        );
    }
    var Jl = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        si = ft(Jl),
        an = D({}, Jl, { view: 0, detail: 0 }),
        ph = ft(an),
        ku,
        Lu,
        nn,
        oi = D({}, an, {
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
            getModifierState: Bu,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
                return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
            },
            movementX: function (e) {
                return 'movementX' in e
                    ? e.movementX
                    : (e !== nn &&
                          (nn && e.type === 'mousemove' ? ((ku = e.screenX - nn.screenX), (Lu = e.screenY - nn.screenY)) : (Lu = ku = 0), (nn = e)),
                      ku);
            },
            movementY: function (e) {
                return 'movementY' in e ? e.movementY : Lu;
            },
        }),
        yo = ft(oi),
        Sh = D({}, oi, { dataTransfer: 0 }),
        bh = ft(Sh),
        xh = D({}, an, { relatedTarget: 0 }),
        Hu = ft(xh),
        Ch = D({}, Jl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        jh = ft(Ch),
        Nh = D({}, Jl, {
            clipboardData: function (e) {
                return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
            },
        }),
        Th = ft(Nh),
        Ah = D({}, Jl, { data: 0 }),
        po = ft(Ah),
        Eh = {
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
        Mh = {
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
        zh = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
    function wh(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = zh[e]) ? !!t[e] : !1;
    }
    function Bu() {
        return wh;
    }
    var Dh = D({}, an, {
            key: function (e) {
                if (e.key) {
                    var t = Eh[e.key] || e.key;
                    if (t !== 'Unidentified') return t;
                }
                return e.type === 'keypress'
                    ? ((e = ui(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
                    : e.type === 'keydown' || e.type === 'keyup'
                      ? Mh[e.keyCode] || 'Unidentified'
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
            getModifierState: Bu,
            charCode: function (e) {
                return e.type === 'keypress' ? ui(e) : 0;
            },
            keyCode: function (e) {
                return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
            },
            which: function (e) {
                return e.type === 'keypress' ? ui(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
            },
        }),
        Oh = ft(Dh),
        _h = D({}, oi, {
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
        So = ft(_h),
        Rh = D({}, an, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Bu }),
        Uh = ft(Rh),
        kh = D({}, Jl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        Lh = ft(kh),
        Hh = D({}, oi, {
            deltaX: function (e) {
                return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
                return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
        Bh = ft(Hh),
        qh = D({}, Jl, { newState: 0, oldState: 0 }),
        Yh = ft(qh),
        Gh = [9, 13, 27, 32],
        qu = el && 'CompositionEvent' in window,
        un = null;
    el && 'documentMode' in document && (un = document.documentMode);
    var Qh = el && 'TextEvent' in window && !un,
        bo = el && (!qu || (un && 8 < un && 11 >= un)),
        xo = ' ',
        Co = !1;
    function jo(e, t) {
        switch (e) {
            case 'keyup':
                return Gh.indexOf(t.keyCode) !== -1;
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
    function No(e) {
        return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
    }
    var Sa = !1;
    function Xh(e, t) {
        switch (e) {
            case 'compositionend':
                return No(t);
            case 'keypress':
                return t.which !== 32 ? null : ((Co = !0), xo);
            case 'textInput':
                return ((e = t.data), e === xo && Co ? null : e);
            default:
                return null;
        }
    }
    function Vh(e, t) {
        if (Sa) return e === 'compositionend' || (!qu && jo(e, t)) ? ((e = vo()), (ii = Uu = pl = null), (Sa = !1), e) : null;
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
                return bo && t.locale !== 'ko' ? null : t.data;
            default:
                return null;
        }
    }
    var Zh = {
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
    function To(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === 'input' ? !!Zh[e.type] : t === 'textarea';
    }
    function Ao(e, t, l, a) {
        (ya ? (pa ? pa.push(a) : (pa = [a])) : (ya = a),
            (t = Ii(t, 'onChange')),
            0 < t.length && ((l = new si('onChange', 'change', null, l, a)), e.push({ event: l, listeners: t })));
    }
    var cn = null,
        sn = null;
    function Kh(e) {
        od(e, 0);
    }
    function ri(e) {
        var t = en(e);
        if (uo(t)) return e;
    }
    function Eo(e, t) {
        if (e === 'change') return t;
    }
    var Mo = !1;
    if (el) {
        var Yu;
        if (el) {
            var Gu = 'oninput' in document;
            if (!Gu) {
                var zo = document.createElement('div');
                (zo.setAttribute('oninput', 'return;'), (Gu = typeof zo.oninput == 'function'));
            }
            Yu = Gu;
        } else Yu = !1;
        Mo = Yu && (!document.documentMode || 9 < document.documentMode);
    }
    function wo() {
        cn && (cn.detachEvent('onpropertychange', Do), (sn = cn = null));
    }
    function Do(e) {
        if (e.propertyName === 'value' && ri(sn)) {
            var t = [];
            (Ao(t, sn, e, Ou(e)), mo(Kh, t));
        }
    }
    function Jh(e, t, l) {
        e === 'focusin' ? (wo(), (cn = t), (sn = l), cn.attachEvent('onpropertychange', Do)) : e === 'focusout' && wo();
    }
    function Wh(e) {
        if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return ri(sn);
    }
    function $h(e, t) {
        if (e === 'click') return ri(t);
    }
    function Fh(e, t) {
        if (e === 'input' || e === 'change') return ri(t);
    }
    function Ih(e, t) {
        return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var St = typeof Object.is == 'function' ? Object.is : Ih;
    function on(e, t) {
        if (St(e, t)) return !0;
        if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
        var l = Object.keys(e),
            a = Object.keys(t);
        if (l.length !== a.length) return !1;
        for (a = 0; a < l.length; a++) {
            var n = l[a];
            if (!pe.call(t, n) || !St(e[n], t[n])) return !1;
        }
        return !0;
    }
    function Oo(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
    }
    function _o(e, t) {
        var l = Oo(e);
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
            l = Oo(l);
        }
    }
    function Ro(e, t) {
        return e && t
            ? e === t
                ? !0
                : e && e.nodeType === 3
                  ? !1
                  : t && t.nodeType === 3
                    ? Ro(e, t.parentNode)
                    : 'contains' in e
                      ? e.contains(t)
                      : e.compareDocumentPosition
                        ? !!(e.compareDocumentPosition(t) & 16)
                        : !1
            : !1;
    }
    function Uo(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = ai(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var l = typeof t.contentWindow.location.href == 'string';
            } catch {
                l = !1;
            }
            if (l) e = t.contentWindow;
            else break;
            t = ai(e.document);
        }
        return t;
    }
    function Qu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
            t &&
            ((t === 'input' && (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
                t === 'textarea' ||
                e.contentEditable === 'true')
        );
    }
    var Ph = el && 'documentMode' in document && 11 >= document.documentMode,
        ba = null,
        Xu = null,
        rn = null,
        Vu = !1;
    function ko(e, t, l) {
        var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
        Vu ||
            ba == null ||
            ba !== ai(a) ||
            ((a = ba),
            'selectionStart' in a && Qu(a)
                ? (a = { start: a.selectionStart, end: a.selectionEnd })
                : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
                  (a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset })),
            (rn && on(rn, a)) ||
                ((rn = a),
                (a = Ii(Xu, 'onSelect')),
                0 < a.length && ((t = new si('onSelect', 'select', null, t, l)), e.push({ event: t, listeners: a }), (t.target = ba))));
    }
    function Wl(e, t) {
        var l = {};
        return ((l[e.toLowerCase()] = t.toLowerCase()), (l['Webkit' + e] = 'webkit' + t), (l['Moz' + e] = 'moz' + t), l);
    }
    var xa = {
            animationend: Wl('Animation', 'AnimationEnd'),
            animationiteration: Wl('Animation', 'AnimationIteration'),
            animationstart: Wl('Animation', 'AnimationStart'),
            transitionrun: Wl('Transition', 'TransitionRun'),
            transitionstart: Wl('Transition', 'TransitionStart'),
            transitioncancel: Wl('Transition', 'TransitionCancel'),
            transitionend: Wl('Transition', 'TransitionEnd'),
        },
        Zu = {},
        Lo = {};
    el &&
        ((Lo = document.createElement('div').style),
        'AnimationEvent' in window || (delete xa.animationend.animation, delete xa.animationiteration.animation, delete xa.animationstart.animation),
        'TransitionEvent' in window || delete xa.transitionend.transition);
    function $l(e) {
        if (Zu[e]) return Zu[e];
        if (!xa[e]) return e;
        var t = xa[e],
            l;
        for (l in t) if (t.hasOwnProperty(l) && l in Lo) return (Zu[e] = t[l]);
        return e;
    }
    var Ho = $l('animationend'),
        Bo = $l('animationiteration'),
        qo = $l('animationstart'),
        em = $l('transitionrun'),
        tm = $l('transitionstart'),
        lm = $l('transitioncancel'),
        Yo = $l('transitionend'),
        Go = new Map(),
        Ku =
            'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
                ' '
            );
    Ku.push('scrollEnd');
    function Bt(e, t) {
        (Go.set(e, t), Kl(t, [e]));
    }
    var fi =
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
        zt = [],
        Ca = 0,
        Ju = 0;
    function di() {
        for (var e = Ca, t = (Ju = Ca = 0); t < e; ) {
            var l = zt[t];
            zt[t++] = null;
            var a = zt[t];
            zt[t++] = null;
            var n = zt[t];
            zt[t++] = null;
            var i = zt[t];
            if (((zt[t++] = null), a !== null && n !== null)) {
                var u = a.pending;
                (u === null ? (n.next = n) : ((n.next = u.next), (u.next = n)), (a.pending = n));
            }
            i !== 0 && Qo(l, n, i);
        }
    }
    function hi(e, t, l, a) {
        ((zt[Ca++] = e), (zt[Ca++] = t), (zt[Ca++] = l), (zt[Ca++] = a), (Ju |= a), (e.lanes |= a), (e = e.alternate), e !== null && (e.lanes |= a));
    }
    function Wu(e, t, l, a) {
        return (hi(e, t, l, a), mi(e));
    }
    function Fl(e, t) {
        return (hi(e, null, null, t), mi(e));
    }
    function Qo(e, t, l) {
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
                  ((n = 31 - st(l)), (e = i.hiddenUpdates), (a = e[n]), a === null ? (e[n] = [t]) : a.push(t), (t.lane = l | 536870912)),
              i)
            : null;
    }
    function mi(e) {
        if (50 < On) throw ((On = 0), (ns = null), Error(r(185)));
        for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
        return e.tag === 3 ? e.stateNode : null;
    }
    var ja = {};
    function am(e, t, l, a) {
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
    function bt(e, t, l, a) {
        return new am(e, t, l, a);
    }
    function $u(e) {
        return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function tl(e, t) {
        var l = e.alternate;
        return (
            l === null
                ? ((l = bt(e.tag, t, e.key, e.mode)),
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
    function Xo(e, t) {
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
    function vi(e, t, l, a, n, i) {
        var u = 0;
        if (((a = e), typeof e == 'function')) $u(e) && (u = 1);
        else if (typeof e == 'string') u = sv(e, l, H.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
        else
            e: switch (e) {
                case me:
                    return ((e = bt(31, l, t, n)), (e.elementType = me), (e.lanes = i), e);
                case $:
                    return Il(l.children, n, i, t);
                case ee:
                    ((u = 8), (n |= 24));
                    break;
                case Ae:
                    return ((e = bt(12, l, t, n | 2)), (e.elementType = Ae), (e.lanes = i), e);
                case Re:
                    return ((e = bt(13, l, t, n)), (e.elementType = Re), (e.lanes = i), e);
                case Oe:
                    return ((e = bt(19, l, t, n)), (e.elementType = Oe), (e.lanes = i), e);
                default:
                    if (typeof e == 'object' && e !== null)
                        switch (e.$$typeof) {
                            case be:
                                u = 10;
                                break e;
                            case De:
                                u = 9;
                                break e;
                            case Ce:
                                u = 11;
                                break e;
                            case L:
                                u = 14;
                                break e;
                            case ie:
                                ((u = 16), (a = null));
                                break e;
                        }
                    ((u = 29), (l = Error(r(130, e === null ? 'null' : typeof e, ''))), (a = null));
            }
        return ((t = bt(u, l, t, n)), (t.elementType = e), (t.type = a), (t.lanes = i), t);
    }
    function Il(e, t, l, a) {
        return ((e = bt(7, e, a, t)), (e.lanes = l), e);
    }
    function Fu(e, t, l) {
        return ((e = bt(6, e, null, t)), (e.lanes = l), e);
    }
    function Vo(e) {
        var t = bt(18, null, null, 0);
        return ((t.stateNode = e), t);
    }
    function Iu(e, t, l) {
        return (
            (t = bt(4, e.children !== null ? e.children : [], e.key, t)),
            (t.lanes = l),
            (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
            t
        );
    }
    var Zo = new WeakMap();
    function wt(e, t) {
        if (typeof e == 'object' && e !== null) {
            var l = Zo.get(e);
            return l !== void 0 ? l : ((t = { value: e, source: t, stack: V(t) }), Zo.set(e, t), t);
        }
        return { value: e, source: t, stack: V(t) };
    }
    var Na = [],
        Ta = 0,
        gi = null,
        fn = 0,
        Dt = [],
        Ot = 0,
        Sl = null,
        Kt = 1,
        Jt = '';
    function ll(e, t) {
        ((Na[Ta++] = fn), (Na[Ta++] = gi), (gi = e), (fn = t));
    }
    function Ko(e, t, l) {
        ((Dt[Ot++] = Kt), (Dt[Ot++] = Jt), (Dt[Ot++] = Sl), (Sl = e));
        var a = Kt;
        e = Jt;
        var n = 32 - st(a) - 1;
        ((a &= ~(1 << n)), (l += 1));
        var i = 32 - st(t) + n;
        if (30 < i) {
            var u = n - (n % 5);
            ((i = (a & ((1 << u) - 1)).toString(32)), (a >>= u), (n -= u), (Kt = (1 << (32 - st(t) + n)) | (l << n) | a), (Jt = i + e));
        } else ((Kt = (1 << i) | (l << n) | a), (Jt = e));
    }
    function Pu(e) {
        e.return !== null && (ll(e, 1), Ko(e, 1, 0));
    }
    function ec(e) {
        for (; e === gi; ) ((gi = Na[--Ta]), (Na[Ta] = null), (fn = Na[--Ta]), (Na[Ta] = null));
        for (; e === Sl; ) ((Sl = Dt[--Ot]), (Dt[Ot] = null), (Jt = Dt[--Ot]), (Dt[Ot] = null), (Kt = Dt[--Ot]), (Dt[Ot] = null));
    }
    function Jo(e, t) {
        ((Dt[Ot++] = Kt), (Dt[Ot++] = Jt), (Dt[Ot++] = Sl), (Kt = t.id), (Jt = t.overflow), (Sl = e));
    }
    var tt = null,
        Ue = null,
        ve = !1,
        bl = null,
        _t = !1,
        tc = Error(r(519));
    function xl(e) {
        var t = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', ''));
        throw (dn(wt(t, e)), tc);
    }
    function Wo(e) {
        var t = e.stateNode,
            l = e.type,
            a = e.memoizedProps;
        switch (((t[et] = e), (t[rt] = a), l)) {
            case 'dialog':
                (fe('cancel', t), fe('close', t));
                break;
            case 'iframe':
            case 'object':
            case 'embed':
                fe('load', t);
                break;
            case 'video':
            case 'audio':
                for (l = 0; l < Rn.length; l++) fe(Rn[l], t);
                break;
            case 'source':
                fe('error', t);
                break;
            case 'img':
            case 'image':
            case 'link':
                (fe('error', t), fe('load', t));
                break;
            case 'details':
                fe('toggle', t);
                break;
            case 'input':
                (fe('invalid', t), co(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0));
                break;
            case 'select':
                fe('invalid', t);
                break;
            case 'textarea':
                (fe('invalid', t), oo(t, a.value, a.defaultValue, a.children));
        }
        ((l = a.children),
            (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
            t.textContent === '' + l ||
            a.suppressHydrationWarning === !0 ||
            hd(t.textContent, l)
                ? (a.popover != null && (fe('beforetoggle', t), fe('toggle', t)),
                  a.onScroll != null && fe('scroll', t),
                  a.onScrollEnd != null && fe('scrollend', t),
                  a.onClick != null && (t.onclick = Pt),
                  (t = !0))
                : (t = !1),
            t || xl(e, !0));
    }
    function $o(e) {
        for (tt = e.return; tt; )
            switch (tt.tag) {
                case 5:
                case 31:
                case 13:
                    _t = !1;
                    return;
                case 27:
                case 3:
                    _t = !0;
                    return;
                default:
                    tt = tt.return;
            }
    }
    function Aa(e) {
        if (e !== tt) return !1;
        if (!ve) return ($o(e), (ve = !0), !1);
        var t = e.tag,
            l;
        if (
            ((l = t !== 3 && t !== 27) &&
                ((l = t === 5) && ((l = e.type), (l = !(l !== 'form' && l !== 'button') || Ss(e.type, e.memoizedProps))), (l = !l)),
            l && Ue && xl(e),
            $o(e),
            t === 13)
        ) {
            if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(r(317));
            Ue = Cd(e);
        } else if (t === 31) {
            if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(r(317));
            Ue = Cd(e);
        } else t === 27 ? ((t = Ue), Ul(e.type) ? ((e = Ns), (Ns = null), (Ue = e)) : (Ue = t)) : (Ue = tt ? Ut(e.stateNode.nextSibling) : null);
        return !0;
    }
    function Pl() {
        ((Ue = tt = null), (ve = !1));
    }
    function lc() {
        var e = bl;
        return (e !== null && (vt === null ? (vt = e) : vt.push.apply(vt, e), (bl = null)), e);
    }
    function dn(e) {
        bl === null ? (bl = [e]) : bl.push(e);
    }
    var ac = d(null),
        ea = null,
        al = null;
    function Cl(e, t, l) {
        (R(ac, t._currentValue), (t._currentValue = l));
    }
    function nl(e) {
        ((e._currentValue = ac.current), T(ac));
    }
    function nc(e, t, l) {
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
    function ic(e, t, l, a) {
        var n = e.child;
        for (n !== null && (n.return = e); n !== null; ) {
            var i = n.dependencies;
            if (i !== null) {
                var u = n.child;
                i = i.firstContext;
                e: for (; i !== null; ) {
                    var s = i;
                    i = n;
                    for (var o = 0; o < t.length; o++)
                        if (s.context === t[o]) {
                            ((i.lanes |= l), (s = i.alternate), s !== null && (s.lanes |= l), nc(i.return, l, e), a || (u = null));
                            break e;
                        }
                    i = s.next;
                }
            } else if (n.tag === 18) {
                if (((u = n.return), u === null)) throw Error(r(341));
                ((u.lanes |= l), (i = u.alternate), i !== null && (i.lanes |= l), nc(u, l, e), (u = null));
            } else u = n.child;
            if (u !== null) u.return = n;
            else
                for (u = n; u !== null; ) {
                    if (u === e) {
                        u = null;
                        break;
                    }
                    if (((n = u.sibling), n !== null)) {
                        ((n.return = u.return), (u = n));
                        break;
                    }
                    u = u.return;
                }
            n = u;
        }
    }
    function Ea(e, t, l, a) {
        e = null;
        for (var n = t, i = !1; n !== null; ) {
            if (!i) {
                if ((n.flags & 524288) !== 0) i = !0;
                else if ((n.flags & 262144) !== 0) break;
            }
            if (n.tag === 10) {
                var u = n.alternate;
                if (u === null) throw Error(r(387));
                if (((u = u.memoizedProps), u !== null)) {
                    var s = n.type;
                    St(n.pendingProps.value, u.value) || (e !== null ? e.push(s) : (e = [s]));
                }
            } else if (n === oe.current) {
                if (((u = n.alternate), u === null)) throw Error(r(387));
                u.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Bn) : (e = [Bn]));
            }
            n = n.return;
        }
        (e !== null && ic(t, e, l, a), (t.flags |= 262144));
    }
    function yi(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!St(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
        }
        return !1;
    }
    function ta(e) {
        ((ea = e), (al = null), (e = e.dependencies), e !== null && (e.firstContext = null));
    }
    function lt(e) {
        return Fo(ea, e);
    }
    function pi(e, t) {
        return (ea === null && ta(e), Fo(e, t));
    }
    function Fo(e, t) {
        var l = t._currentValue;
        if (((t = { context: t, memoizedValue: l, next: null }), al === null)) {
            if (e === null) throw Error(r(308));
            ((al = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
        } else al = al.next = t;
        return l;
    }
    var nm =
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
        im = f.unstable_scheduleCallback,
        um = f.unstable_NormalPriority,
        Ve = { $$typeof: be, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
    function uc() {
        return { controller: new nm(), data: new Map(), refCount: 0 };
    }
    function hn(e) {
        (e.refCount--,
            e.refCount === 0 &&
                im(um, function () {
                    e.controller.abort();
                }));
    }
    var mn = null,
        cc = 0,
        Ma = 0,
        za = null;
    function cm(e, t) {
        if (mn === null) {
            var l = (mn = []);
            ((cc = 0),
                (Ma = rs()),
                (za = {
                    status: 'pending',
                    value: void 0,
                    then: function (a) {
                        l.push(a);
                    },
                }));
        }
        return (cc++, t.then(Io, Io), t);
    }
    function Io() {
        if (--cc === 0 && mn !== null) {
            za !== null && (za.status = 'fulfilled');
            var e = mn;
            ((mn = null), (Ma = 0), (za = null));
            for (var t = 0; t < e.length; t++) (0, e[t])();
        }
    }
    function sm(e, t) {
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
    var Po = p.S;
    p.S = function (e, t) {
        ((Lf = ct()), typeof t == 'object' && t !== null && typeof t.then == 'function' && cm(e, t), Po !== null && Po(e, t));
    };
    var la = d(null);
    function sc() {
        var e = la.current;
        return e !== null ? e : _e.pooledCache;
    }
    function Si(e, t) {
        t === null ? R(la, la.current) : R(la, t.pool);
    }
    function er() {
        var e = sc();
        return e === null ? null : { parent: Ve._currentValue, pool: e };
    }
    var wa = Error(r(460)),
        oc = Error(r(474)),
        bi = Error(r(542)),
        xi = { then: function () {} };
    function tr(e) {
        return ((e = e.status), e === 'fulfilled' || e === 'rejected');
    }
    function lr(e, t, l) {
        switch (((l = e[l]), l === void 0 ? e.push(t) : l !== t && (t.then(Pt, Pt), (t = l)), t.status)) {
            case 'fulfilled':
                return t.value;
            case 'rejected':
                throw ((e = t.reason), nr(e), e);
            default:
                if (typeof t.status == 'string') t.then(Pt, Pt);
                else {
                    if (((e = _e), e !== null && 100 < e.shellSuspendCounter)) throw Error(r(482));
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
                        throw ((e = t.reason), nr(e), e);
                }
                throw ((na = t), wa);
        }
    }
    function aa(e) {
        try {
            var t = e._init;
            return t(e._payload);
        } catch (l) {
            throw l !== null && typeof l == 'object' && typeof l.then == 'function' ? ((na = l), wa) : l;
        }
    }
    var na = null;
    function ar() {
        if (na === null) throw Error(r(459));
        var e = na;
        return ((na = null), e);
    }
    function nr(e) {
        if (e === wa || e === bi) throw Error(r(483));
    }
    var Da = null,
        vn = 0;
    function Ci(e) {
        var t = vn;
        return ((vn += 1), Da === null && (Da = []), lr(Da, e, t));
    }
    function gn(e, t) {
        ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
    }
    function ji(e, t) {
        throw t.$$typeof === Y
            ? Error(r(525))
            : ((e = Object.prototype.toString.call(t)),
              Error(r(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)));
    }
    function ir(e) {
        function t(m, h) {
            if (e) {
                var g = m.deletions;
                g === null ? ((m.deletions = [h]), (m.flags |= 16)) : g.push(h);
            }
        }
        function l(m, h) {
            if (!e) return null;
            for (; h !== null; ) (t(m, h), (h = h.sibling));
            return null;
        }
        function a(m) {
            for (var h = new Map(); m !== null; ) (m.key !== null ? h.set(m.key, m) : h.set(m.index, m), (m = m.sibling));
            return h;
        }
        function n(m, h) {
            return ((m = tl(m, h)), (m.index = 0), (m.sibling = null), m);
        }
        function i(m, h, g) {
            return (
                (m.index = g),
                e
                    ? ((g = m.alternate), g !== null ? ((g = g.index), g < h ? ((m.flags |= 67108866), h) : g) : ((m.flags |= 67108866), h))
                    : ((m.flags |= 1048576), h)
            );
        }
        function u(m) {
            return (e && m.alternate === null && (m.flags |= 67108866), m);
        }
        function s(m, h, g, A) {
            return h === null || h.tag !== 6 ? ((h = Fu(g, m.mode, A)), (h.return = m), h) : ((h = n(h, g)), (h.return = m), h);
        }
        function o(m, h, g, A) {
            var W = g.type;
            return W === $
                ? N(m, h, g.props.children, A, g.key)
                : h !== null && (h.elementType === W || (typeof W == 'object' && W !== null && W.$$typeof === ie && aa(W) === h.type))
                  ? ((h = n(h, g.props)), gn(h, g), (h.return = m), h)
                  : ((h = vi(g.type, g.key, g.props, null, m.mode, A)), gn(h, g), (h.return = m), h);
        }
        function y(m, h, g, A) {
            return h === null || h.tag !== 4 || h.stateNode.containerInfo !== g.containerInfo || h.stateNode.implementation !== g.implementation
                ? ((h = Iu(g, m.mode, A)), (h.return = m), h)
                : ((h = n(h, g.children || [])), (h.return = m), h);
        }
        function N(m, h, g, A, W) {
            return h === null || h.tag !== 7 ? ((h = Il(g, m.mode, A, W)), (h.return = m), h) : ((h = n(h, g)), (h.return = m), h);
        }
        function E(m, h, g) {
            if ((typeof h == 'string' && h !== '') || typeof h == 'number' || typeof h == 'bigint')
                return ((h = Fu('' + h, m.mode, g)), (h.return = m), h);
            if (typeof h == 'object' && h !== null) {
                switch (h.$$typeof) {
                    case te:
                        return ((g = vi(h.type, h.key, h.props, null, m.mode, g)), gn(g, h), (g.return = m), g);
                    case K:
                        return ((h = Iu(h, m.mode, g)), (h.return = m), h);
                    case ie:
                        return ((h = aa(h)), E(m, h, g));
                }
                if (O(h) || se(h)) return ((h = Il(h, m.mode, g, null)), (h.return = m), h);
                if (typeof h.then == 'function') return E(m, Ci(h), g);
                if (h.$$typeof === be) return E(m, pi(m, h), g);
                ji(m, h);
            }
            return null;
        }
        function b(m, h, g, A) {
            var W = h !== null ? h.key : null;
            if ((typeof g == 'string' && g !== '') || typeof g == 'number' || typeof g == 'bigint') return W !== null ? null : s(m, h, '' + g, A);
            if (typeof g == 'object' && g !== null) {
                switch (g.$$typeof) {
                    case te:
                        return g.key === W ? o(m, h, g, A) : null;
                    case K:
                        return g.key === W ? y(m, h, g, A) : null;
                    case ie:
                        return ((g = aa(g)), b(m, h, g, A));
                }
                if (O(g) || se(g)) return W !== null ? null : N(m, h, g, A, null);
                if (typeof g.then == 'function') return b(m, h, Ci(g), A);
                if (g.$$typeof === be) return b(m, h, pi(m, g), A);
                ji(m, g);
            }
            return null;
        }
        function C(m, h, g, A, W) {
            if ((typeof A == 'string' && A !== '') || typeof A == 'number' || typeof A == 'bigint')
                return ((m = m.get(g) || null), s(h, m, '' + A, W));
            if (typeof A == 'object' && A !== null) {
                switch (A.$$typeof) {
                    case te:
                        return ((m = m.get(A.key === null ? g : A.key) || null), o(h, m, A, W));
                    case K:
                        return ((m = m.get(A.key === null ? g : A.key) || null), y(h, m, A, W));
                    case ie:
                        return ((A = aa(A)), C(m, h, g, A, W));
                }
                if (O(A) || se(A)) return ((m = m.get(g) || null), N(h, m, A, W, null));
                if (typeof A.then == 'function') return C(m, h, g, Ci(A), W);
                if (A.$$typeof === be) return C(m, h, g, pi(h, A), W);
                ji(h, A);
            }
            return null;
        }
        function Q(m, h, g, A) {
            for (var W = null, ge = null, X = h, ce = (h = 0), he = null; X !== null && ce < g.length; ce++) {
                X.index > ce ? ((he = X), (X = null)) : (he = X.sibling);
                var ye = b(m, X, g[ce], A);
                if (ye === null) {
                    X === null && (X = he);
                    break;
                }
                (e && X && ye.alternate === null && t(m, X), (h = i(ye, h, ce)), ge === null ? (W = ye) : (ge.sibling = ye), (ge = ye), (X = he));
            }
            if (ce === g.length) return (l(m, X), ve && ll(m, ce), W);
            if (X === null) {
                for (; ce < g.length; ce++)
                    ((X = E(m, g[ce], A)), X !== null && ((h = i(X, h, ce)), ge === null ? (W = X) : (ge.sibling = X), (ge = X)));
                return (ve && ll(m, ce), W);
            }
            for (X = a(X); ce < g.length; ce++)
                ((he = C(X, m, ce, g[ce], A)),
                    he !== null &&
                        (e && he.alternate !== null && X.delete(he.key === null ? ce : he.key),
                        (h = i(he, h, ce)),
                        ge === null ? (W = he) : (ge.sibling = he),
                        (ge = he)));
            return (
                e &&
                    X.forEach(function (ql) {
                        return t(m, ql);
                    }),
                ve && ll(m, ce),
                W
            );
        }
        function I(m, h, g, A) {
            if (g == null) throw Error(r(151));
            for (var W = null, ge = null, X = h, ce = (h = 0), he = null, ye = g.next(); X !== null && !ye.done; ce++, ye = g.next()) {
                X.index > ce ? ((he = X), (X = null)) : (he = X.sibling);
                var ql = b(m, X, ye.value, A);
                if (ql === null) {
                    X === null && (X = he);
                    break;
                }
                (e && X && ql.alternate === null && t(m, X), (h = i(ql, h, ce)), ge === null ? (W = ql) : (ge.sibling = ql), (ge = ql), (X = he));
            }
            if (ye.done) return (l(m, X), ve && ll(m, ce), W);
            if (X === null) {
                for (; !ye.done; ce++, ye = g.next())
                    ((ye = E(m, ye.value, A)), ye !== null && ((h = i(ye, h, ce)), ge === null ? (W = ye) : (ge.sibling = ye), (ge = ye)));
                return (ve && ll(m, ce), W);
            }
            for (X = a(X); !ye.done; ce++, ye = g.next())
                ((ye = C(X, m, ce, ye.value, A)),
                    ye !== null &&
                        (e && ye.alternate !== null && X.delete(ye.key === null ? ce : ye.key),
                        (h = i(ye, h, ce)),
                        ge === null ? (W = ye) : (ge.sibling = ye),
                        (ge = ye)));
            return (
                e &&
                    X.forEach(function (Sv) {
                        return t(m, Sv);
                    }),
                ve && ll(m, ce),
                W
            );
        }
        function we(m, h, g, A) {
            if (
                (typeof g == 'object' && g !== null && g.type === $ && g.key === null && (g = g.props.children), typeof g == 'object' && g !== null)
            ) {
                switch (g.$$typeof) {
                    case te:
                        e: {
                            for (var W = g.key; h !== null; ) {
                                if (h.key === W) {
                                    if (((W = g.type), W === $)) {
                                        if (h.tag === 7) {
                                            (l(m, h.sibling), (A = n(h, g.props.children)), (A.return = m), (m = A));
                                            break e;
                                        }
                                    } else if (h.elementType === W || (typeof W == 'object' && W !== null && W.$$typeof === ie && aa(W) === h.type)) {
                                        (l(m, h.sibling), (A = n(h, g.props)), gn(A, g), (A.return = m), (m = A));
                                        break e;
                                    }
                                    l(m, h);
                                    break;
                                } else t(m, h);
                                h = h.sibling;
                            }
                            g.type === $
                                ? ((A = Il(g.props.children, m.mode, A, g.key)), (A.return = m), (m = A))
                                : ((A = vi(g.type, g.key, g.props, null, m.mode, A)), gn(A, g), (A.return = m), (m = A));
                        }
                        return u(m);
                    case K:
                        e: {
                            for (W = g.key; h !== null; ) {
                                if (h.key === W)
                                    if (
                                        h.tag === 4 &&
                                        h.stateNode.containerInfo === g.containerInfo &&
                                        h.stateNode.implementation === g.implementation
                                    ) {
                                        (l(m, h.sibling), (A = n(h, g.children || [])), (A.return = m), (m = A));
                                        break e;
                                    } else {
                                        l(m, h);
                                        break;
                                    }
                                else t(m, h);
                                h = h.sibling;
                            }
                            ((A = Iu(g, m.mode, A)), (A.return = m), (m = A));
                        }
                        return u(m);
                    case ie:
                        return ((g = aa(g)), we(m, h, g, A));
                }
                if (O(g)) return Q(m, h, g, A);
                if (se(g)) {
                    if (((W = se(g)), typeof W != 'function')) throw Error(r(150));
                    return ((g = W.call(g)), I(m, h, g, A));
                }
                if (typeof g.then == 'function') return we(m, h, Ci(g), A);
                if (g.$$typeof === be) return we(m, h, pi(m, g), A);
                ji(m, g);
            }
            return (typeof g == 'string' && g !== '') || typeof g == 'number' || typeof g == 'bigint'
                ? ((g = '' + g),
                  h !== null && h.tag === 6
                      ? (l(m, h.sibling), (A = n(h, g)), (A.return = m), (m = A))
                      : (l(m, h), (A = Fu(g, m.mode, A)), (A.return = m), (m = A)),
                  u(m))
                : l(m, h);
        }
        return function (m, h, g, A) {
            try {
                vn = 0;
                var W = we(m, h, g, A);
                return ((Da = null), W);
            } catch (X) {
                if (X === wa || X === bi) throw X;
                var ge = bt(29, X, null, m.mode);
                return ((ge.lanes = A), (ge.return = m), ge);
            } finally {
            }
        };
    }
    var ia = ir(!0),
        ur = ir(!1),
        jl = !1;
    function rc(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
        };
    }
    function fc(e, t) {
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
    function Nl(e) {
        return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Tl(e, t, l) {
        var a = e.updateQueue;
        if (a === null) return null;
        if (((a = a.shared), (Se & 2) !== 0)) {
            var n = a.pending;
            return (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (a.pending = t), (t = mi(e)), Qo(e, null, l), t);
        }
        return (hi(e, a, t, l), mi(e));
    }
    function yn(e, t, l) {
        if (((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))) {
            var a = t.lanes;
            ((a &= e.pendingLanes), (l |= a), (t.lanes = l), $s(e, l));
        }
    }
    function dc(e, t) {
        var l = e.updateQueue,
            a = e.alternate;
        if (a !== null && ((a = a.updateQueue), l === a)) {
            var n = null,
                i = null;
            if (((l = l.firstBaseUpdate), l !== null)) {
                do {
                    var u = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null };
                    (i === null ? (n = i = u) : (i = i.next = u), (l = l.next));
                } while (l !== null);
                i === null ? (n = i = t) : (i = i.next = t);
            } else n = i = t;
            ((l = { baseState: a.baseState, firstBaseUpdate: n, lastBaseUpdate: i, shared: a.shared, callbacks: a.callbacks }), (e.updateQueue = l));
            return;
        }
        ((e = l.lastBaseUpdate), e === null ? (l.firstBaseUpdate = t) : (e.next = t), (l.lastBaseUpdate = t));
    }
    var hc = !1;
    function pn() {
        if (hc) {
            var e = za;
            if (e !== null) throw e;
        }
    }
    function Sn(e, t, l, a) {
        hc = !1;
        var n = e.updateQueue;
        jl = !1;
        var i = n.firstBaseUpdate,
            u = n.lastBaseUpdate,
            s = n.shared.pending;
        if (s !== null) {
            n.shared.pending = null;
            var o = s,
                y = o.next;
            ((o.next = null), u === null ? (i = y) : (u.next = y), (u = o));
            var N = e.alternate;
            N !== null &&
                ((N = N.updateQueue),
                (s = N.lastBaseUpdate),
                s !== u && (s === null ? (N.firstBaseUpdate = y) : (s.next = y), (N.lastBaseUpdate = o)));
        }
        if (i !== null) {
            var E = n.baseState;
            ((u = 0), (N = y = o = null), (s = i));
            do {
                var b = s.lane & -536870913,
                    C = b !== s.lane;
                if (C ? (de & b) === b : (a & b) === b) {
                    (b !== 0 && b === Ma && (hc = !0),
                        N !== null && (N = N.next = { lane: 0, tag: s.tag, payload: s.payload, callback: null, next: null }));
                    e: {
                        var Q = e,
                            I = s;
                        b = t;
                        var we = l;
                        switch (I.tag) {
                            case 1:
                                if (((Q = I.payload), typeof Q == 'function')) {
                                    E = Q.call(we, E, b);
                                    break e;
                                }
                                E = Q;
                                break e;
                            case 3:
                                Q.flags = (Q.flags & -65537) | 128;
                            case 0:
                                if (((Q = I.payload), (b = typeof Q == 'function' ? Q.call(we, E, b) : Q), b == null)) break e;
                                E = D({}, E, b);
                                break e;
                            case 2:
                                jl = !0;
                        }
                    }
                    ((b = s.callback),
                        b !== null && ((e.flags |= 64), C && (e.flags |= 8192), (C = n.callbacks), C === null ? (n.callbacks = [b]) : C.push(b)));
                } else
                    ((C = { lane: b, tag: s.tag, payload: s.payload, callback: s.callback, next: null }),
                        N === null ? ((y = N = C), (o = E)) : (N = N.next = C),
                        (u |= b));
                if (((s = s.next), s === null)) {
                    if (((s = n.shared.pending), s === null)) break;
                    ((C = s), (s = C.next), (C.next = null), (n.lastBaseUpdate = C), (n.shared.pending = null));
                }
            } while (!0);
            (N === null && (o = E),
                (n.baseState = o),
                (n.firstBaseUpdate = y),
                (n.lastBaseUpdate = N),
                i === null && (n.shared.lanes = 0),
                (wl |= u),
                (e.lanes = u),
                (e.memoizedState = E));
        }
    }
    function cr(e, t) {
        if (typeof e != 'function') throw Error(r(191, e));
        e.call(t);
    }
    function sr(e, t) {
        var l = e.callbacks;
        if (l !== null) for (e.callbacks = null, e = 0; e < l.length; e++) cr(l[e], t);
    }
    var Oa = d(null),
        Ni = d(0);
    function or(e, t) {
        ((e = hl), R(Ni, e), R(Oa, t), (hl = e | t.baseLanes));
    }
    function mc() {
        (R(Ni, hl), R(Oa, Oa.current));
    }
    function vc() {
        ((hl = Ni.current), T(Oa), T(Ni));
    }
    var xt = d(null),
        Rt = null;
    function Al(e) {
        var t = e.alternate;
        (R(Qe, Qe.current & 1), R(xt, e), Rt === null && (t === null || Oa.current !== null || t.memoizedState !== null) && (Rt = e));
    }
    function gc(e) {
        (R(Qe, Qe.current), R(xt, e), Rt === null && (Rt = e));
    }
    function rr(e) {
        e.tag === 22 ? (R(Qe, Qe.current), R(xt, e), Rt === null && (Rt = e)) : El();
    }
    function El() {
        (R(Qe, Qe.current), R(xt, xt.current));
    }
    function Ct(e) {
        (T(xt), Rt === e && (Rt = null), T(Qe));
    }
    var Qe = d(0);
    function Ti(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var l = t.memoizedState;
                if (l !== null && ((l = l.dehydrated), l === null || Cs(l) || js(l))) return t;
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
    var il = 0,
        ue = null,
        Me = null,
        Ze = null,
        Ai = !1,
        _a = !1,
        ua = !1,
        Ei = 0,
        bn = 0,
        Ra = null,
        om = 0;
    function Ye() {
        throw Error(r(321));
    }
    function yc(e, t) {
        if (t === null) return !1;
        for (var l = 0; l < t.length && l < e.length; l++) if (!St(e[l], t[l])) return !1;
        return !0;
    }
    function pc(e, t, l, a, n, i) {
        return (
            (il = i),
            (ue = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (p.H = e === null || e.memoizedState === null ? Kr : _c),
            (ua = !1),
            (i = l(a, n)),
            (ua = !1),
            _a && (i = dr(t, l, a, n)),
            fr(e),
            i
        );
    }
    function fr(e) {
        p.H = jn;
        var t = Me !== null && Me.next !== null;
        if (((il = 0), (Ze = Me = ue = null), (Ai = !1), (bn = 0), (Ra = null), t)) throw Error(r(300));
        e === null || Ke || ((e = e.dependencies), e !== null && yi(e) && (Ke = !0));
    }
    function dr(e, t, l, a) {
        ue = e;
        var n = 0;
        do {
            if ((_a && (Ra = null), (bn = 0), (_a = !1), 25 <= n)) throw Error(r(301));
            if (((n += 1), (Ze = Me = null), e.updateQueue != null)) {
                var i = e.updateQueue;
                ((i.lastEffect = null), (i.events = null), (i.stores = null), i.memoCache != null && (i.memoCache.index = 0));
            }
            ((p.H = Jr), (i = t(l, a)));
        } while (_a);
        return i;
    }
    function rm() {
        var e = p.H,
            t = e.useState()[0];
        return (
            (t = typeof t.then == 'function' ? xn(t) : t),
            (e = e.useState()[0]),
            (Me !== null ? Me.memoizedState : null) !== e && (ue.flags |= 1024),
            t
        );
    }
    function Sc() {
        var e = Ei !== 0;
        return ((Ei = 0), e);
    }
    function bc(e, t, l) {
        ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
    }
    function xc(e) {
        if (Ai) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                (t !== null && (t.pending = null), (e = e.next));
            }
            Ai = !1;
        }
        ((il = 0), (Ze = Me = ue = null), (_a = !1), (bn = Ei = 0), (Ra = null));
    }
    function ot() {
        var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        return (Ze === null ? (ue.memoizedState = Ze = e) : (Ze = Ze.next = e), Ze);
    }
    function Xe() {
        if (Me === null) {
            var e = ue.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = Me.next;
        var t = Ze === null ? ue.memoizedState : Ze.next;
        if (t !== null) ((Ze = t), (Me = e));
        else {
            if (e === null) throw ue.alternate === null ? Error(r(467)) : Error(r(310));
            ((Me = e),
                (e = { memoizedState: Me.memoizedState, baseState: Me.baseState, baseQueue: Me.baseQueue, queue: Me.queue, next: null }),
                Ze === null ? (ue.memoizedState = Ze = e) : (Ze = Ze.next = e));
        }
        return Ze;
    }
    function Mi() {
        return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function xn(e) {
        var t = bn;
        return (
            (bn += 1),
            Ra === null && (Ra = []),
            (e = lr(Ra, e, t)),
            (t = ue),
            (Ze === null ? t.memoizedState : Ze.next) === null && ((t = t.alternate), (p.H = t === null || t.memoizedState === null ? Kr : _c)),
            e
        );
    }
    function zi(e) {
        if (e !== null && typeof e == 'object') {
            if (typeof e.then == 'function') return xn(e);
            if (e.$$typeof === be) return lt(e);
        }
        throw Error(r(438, String(e)));
    }
    function Cc(e) {
        var t = null,
            l = ue.updateQueue;
        if ((l !== null && (t = l.memoCache), t == null)) {
            var a = ue.alternate;
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
            l === null && ((l = Mi()), (ue.updateQueue = l)),
            (l.memoCache = t),
            (l = t.data[t.index]),
            l === void 0)
        )
            for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = P;
        return (t.index++, l);
    }
    function ul(e, t) {
        return typeof t == 'function' ? t(e) : t;
    }
    function wi(e) {
        var t = Xe();
        return jc(t, Me, e);
    }
    function jc(e, t, l) {
        var a = e.queue;
        if (a === null) throw Error(r(311));
        a.lastRenderedReducer = l;
        var n = e.baseQueue,
            i = a.pending;
        if (i !== null) {
            if (n !== null) {
                var u = n.next;
                ((n.next = i.next), (i.next = u));
            }
            ((t.baseQueue = n = i), (a.pending = null));
        }
        if (((i = e.baseState), n === null)) e.memoizedState = i;
        else {
            t = n.next;
            var s = (u = null),
                o = null,
                y = t,
                N = !1;
            do {
                var E = y.lane & -536870913;
                if (E !== y.lane ? (de & E) === E : (il & E) === E) {
                    var b = y.revertLane;
                    if (b === 0)
                        (o !== null &&
                            (o = o.next =
                                {
                                    lane: 0,
                                    revertLane: 0,
                                    gesture: null,
                                    action: y.action,
                                    hasEagerState: y.hasEagerState,
                                    eagerState: y.eagerState,
                                    next: null,
                                }),
                            E === Ma && (N = !0));
                    else if ((il & b) === b) {
                        ((y = y.next), b === Ma && (N = !0));
                        continue;
                    } else
                        ((E = {
                            lane: 0,
                            revertLane: y.revertLane,
                            gesture: null,
                            action: y.action,
                            hasEagerState: y.hasEagerState,
                            eagerState: y.eagerState,
                            next: null,
                        }),
                            o === null ? ((s = o = E), (u = i)) : (o = o.next = E),
                            (ue.lanes |= b),
                            (wl |= b));
                    ((E = y.action), ua && l(i, E), (i = y.hasEagerState ? y.eagerState : l(i, E)));
                } else
                    ((b = {
                        lane: E,
                        revertLane: y.revertLane,
                        gesture: y.gesture,
                        action: y.action,
                        hasEagerState: y.hasEagerState,
                        eagerState: y.eagerState,
                        next: null,
                    }),
                        o === null ? ((s = o = b), (u = i)) : (o = o.next = b),
                        (ue.lanes |= E),
                        (wl |= E));
                y = y.next;
            } while (y !== null && y !== t);
            if ((o === null ? (u = i) : (o.next = s), !St(i, e.memoizedState) && ((Ke = !0), N && ((l = za), l !== null)))) throw l;
            ((e.memoizedState = i), (e.baseState = u), (e.baseQueue = o), (a.lastRenderedState = i));
        }
        return (n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
    }
    function Nc(e) {
        var t = Xe(),
            l = t.queue;
        if (l === null) throw Error(r(311));
        l.lastRenderedReducer = e;
        var a = l.dispatch,
            n = l.pending,
            i = t.memoizedState;
        if (n !== null) {
            l.pending = null;
            var u = (n = n.next);
            do ((i = e(i, u.action)), (u = u.next));
            while (u !== n);
            (St(i, t.memoizedState) || (Ke = !0), (t.memoizedState = i), t.baseQueue === null && (t.baseState = i), (l.lastRenderedState = i));
        }
        return [i, a];
    }
    function hr(e, t, l) {
        var a = ue,
            n = Xe(),
            i = ve;
        if (i) {
            if (l === void 0) throw Error(r(407));
            l = l();
        } else l = t();
        var u = !St((Me || n).memoizedState, l);
        if (
            (u && ((n.memoizedState = l), (Ke = !0)),
            (n = n.queue),
            Ec(gr.bind(null, a, n, e), [e]),
            n.getSnapshot !== t || u || (Ze !== null && Ze.memoizedState.tag & 1))
        ) {
            if (((a.flags |= 2048), Ua(9, { destroy: void 0 }, vr.bind(null, a, n, l, t), null), _e === null)) throw Error(r(349));
            i || (il & 127) !== 0 || mr(a, t, l);
        }
        return l;
    }
    function mr(e, t, l) {
        ((e.flags |= 16384),
            (e = { getSnapshot: t, value: l }),
            (t = ue.updateQueue),
            t === null ? ((t = Mi()), (ue.updateQueue = t), (t.stores = [e])) : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
    }
    function vr(e, t, l, a) {
        ((t.value = l), (t.getSnapshot = a), yr(t) && pr(e));
    }
    function gr(e, t, l) {
        return l(function () {
            yr(t) && pr(e);
        });
    }
    function yr(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var l = t();
            return !St(e, l);
        } catch {
            return !0;
        }
    }
    function pr(e) {
        var t = Fl(e, 2);
        t !== null && gt(t, e, 2);
    }
    function Tc(e) {
        var t = ot();
        if (typeof e == 'function') {
            var l = e;
            if (((e = l()), ua)) {
                $e(!0);
                try {
                    l();
                } finally {
                    $e(!1);
                }
            }
        }
        return (
            (t.memoizedState = t.baseState = e),
            (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ul, lastRenderedState: e }),
            t
        );
    }
    function Sr(e, t, l, a) {
        return ((e.baseState = l), jc(e, Me, typeof a == 'function' ? a : ul));
    }
    function fm(e, t, l, a, n) {
        if (_i(e)) throw Error(r(485));
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
                then: function (u) {
                    i.listeners.push(u);
                },
            };
            (p.T !== null ? l(!0) : (i.isTransition = !1),
                a(i),
                (l = t.pending),
                l === null ? ((i.next = t.pending = i), br(t, i)) : ((i.next = l.next), (t.pending = l.next = i)));
        }
    }
    function br(e, t) {
        var l = t.action,
            a = t.payload,
            n = e.state;
        if (t.isTransition) {
            var i = p.T,
                u = {};
            p.T = u;
            try {
                var s = l(n, a),
                    o = p.S;
                (o !== null && o(u, s), xr(e, t, s));
            } catch (y) {
                Ac(e, t, y);
            } finally {
                (i !== null && u.types !== null && (i.types = u.types), (p.T = i));
            }
        } else
            try {
                ((i = l(n, a)), xr(e, t, i));
            } catch (y) {
                Ac(e, t, y);
            }
    }
    function xr(e, t, l) {
        l !== null && typeof l == 'object' && typeof l.then == 'function'
            ? l.then(
                  function (a) {
                      Cr(e, t, a);
                  },
                  function (a) {
                      return Ac(e, t, a);
                  }
              )
            : Cr(e, t, l);
    }
    function Cr(e, t, l) {
        ((t.status = 'fulfilled'),
            (t.value = l),
            jr(t),
            (e.state = l),
            (t = e.pending),
            t !== null && ((l = t.next), l === t ? (e.pending = null) : ((l = l.next), (t.next = l), br(e, l))));
    }
    function Ac(e, t, l) {
        var a = e.pending;
        if (((e.pending = null), a !== null)) {
            a = a.next;
            do ((t.status = 'rejected'), (t.reason = l), jr(t), (t = t.next));
            while (t !== a);
        }
        e.action = null;
    }
    function jr(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Nr(e, t) {
        return t;
    }
    function Tr(e, t) {
        if (ve) {
            var l = _e.formState;
            if (l !== null) {
                e: {
                    var a = ue;
                    if (ve) {
                        if (Ue) {
                            t: {
                                for (var n = Ue, i = _t; n.nodeType !== 8; ) {
                                    if (!i) {
                                        n = null;
                                        break t;
                                    }
                                    if (((n = Ut(n.nextSibling)), n === null)) {
                                        n = null;
                                        break t;
                                    }
                                }
                                ((i = n.data), (n = i === 'F!' || i === 'F' ? n : null));
                            }
                            if (n) {
                                ((Ue = Ut(n.nextSibling)), (a = n.data === 'F!'));
                                break e;
                            }
                        }
                        xl(a);
                    }
                    a = !1;
                }
                a && (t = l[0]);
            }
        }
        return (
            (l = ot()),
            (l.memoizedState = l.baseState = t),
            (a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Nr, lastRenderedState: t }),
            (l.queue = a),
            (l = Xr.bind(null, ue, a)),
            (a.dispatch = l),
            (a = Tc(!1)),
            (i = Oc.bind(null, ue, !1, a.queue)),
            (a = ot()),
            (n = { state: t, dispatch: null, action: e, pending: null }),
            (a.queue = n),
            (l = fm.bind(null, ue, n, i, l)),
            (n.dispatch = l),
            (a.memoizedState = e),
            [t, l, !1]
        );
    }
    function Ar(e) {
        var t = Xe();
        return Er(t, Me, e);
    }
    function Er(e, t, l) {
        if (((t = jc(e, t, Nr)[0]), (e = wi(ul)[0]), typeof t == 'object' && t !== null && typeof t.then == 'function'))
            try {
                var a = xn(t);
            } catch (u) {
                throw u === wa ? bi : u;
            }
        else a = t;
        t = Xe();
        var n = t.queue,
            i = n.dispatch;
        return (l !== t.memoizedState && ((ue.flags |= 2048), Ua(9, { destroy: void 0 }, dm.bind(null, n, l), null)), [a, i, e]);
    }
    function dm(e, t) {
        e.action = t;
    }
    function Mr(e) {
        var t = Xe(),
            l = Me;
        if (l !== null) return Er(t, l, e);
        (Xe(), (t = t.memoizedState), (l = Xe()));
        var a = l.queue.dispatch;
        return ((l.memoizedState = e), [t, a, !1]);
    }
    function Ua(e, t, l, a) {
        return (
            (e = { tag: e, create: l, deps: a, inst: t, next: null }),
            (t = ue.updateQueue),
            t === null && ((t = Mi()), (ue.updateQueue = t)),
            (l = t.lastEffect),
            l === null ? (t.lastEffect = e.next = e) : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
            e
        );
    }
    function zr() {
        return Xe().memoizedState;
    }
    function Di(e, t, l, a) {
        var n = ot();
        ((ue.flags |= e), (n.memoizedState = Ua(1 | t, { destroy: void 0 }, l, a === void 0 ? null : a)));
    }
    function Oi(e, t, l, a) {
        var n = Xe();
        a = a === void 0 ? null : a;
        var i = n.memoizedState.inst;
        Me !== null && a !== null && yc(a, Me.memoizedState.deps)
            ? (n.memoizedState = Ua(t, i, l, a))
            : ((ue.flags |= e), (n.memoizedState = Ua(1 | t, i, l, a)));
    }
    function wr(e, t) {
        Di(8390656, 8, e, t);
    }
    function Ec(e, t) {
        Oi(2048, 8, e, t);
    }
    function hm(e) {
        ue.flags |= 4;
        var t = ue.updateQueue;
        if (t === null) ((t = Mi()), (ue.updateQueue = t), (t.events = [e]));
        else {
            var l = t.events;
            l === null ? (t.events = [e]) : l.push(e);
        }
    }
    function Dr(e) {
        var t = Xe().memoizedState;
        return (
            hm({ ref: t, nextImpl: e }),
            function () {
                if ((Se & 2) !== 0) throw Error(r(440));
                return t.impl.apply(void 0, arguments);
            }
        );
    }
    function Or(e, t) {
        return Oi(4, 2, e, t);
    }
    function _r(e, t) {
        return Oi(4, 4, e, t);
    }
    function Rr(e, t) {
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
    function Ur(e, t, l) {
        ((l = l != null ? l.concat([e]) : null), Oi(4, 4, Rr.bind(null, t, e), l));
    }
    function Mc() {}
    function kr(e, t) {
        var l = Xe();
        t = t === void 0 ? null : t;
        var a = l.memoizedState;
        return t !== null && yc(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
    }
    function Lr(e, t) {
        var l = Xe();
        t = t === void 0 ? null : t;
        var a = l.memoizedState;
        if (t !== null && yc(t, a[1])) return a[0];
        if (((a = e()), ua)) {
            $e(!0);
            try {
                e();
            } finally {
                $e(!1);
            }
        }
        return ((l.memoizedState = [a, t]), a);
    }
    function zc(e, t, l) {
        return l === void 0 || ((il & 1073741824) !== 0 && (de & 261930) === 0)
            ? (e.memoizedState = t)
            : ((e.memoizedState = l), (e = Bf()), (ue.lanes |= e), (wl |= e), l);
    }
    function Hr(e, t, l, a) {
        return St(l, t)
            ? l
            : Oa.current !== null
              ? ((e = zc(e, l, a)), St(e, t) || (Ke = !0), e)
              : (il & 42) === 0 || ((il & 1073741824) !== 0 && (de & 261930) === 0)
                ? ((Ke = !0), (e.memoizedState = l))
                : ((e = Bf()), (ue.lanes |= e), (wl |= e), t);
    }
    function Br(e, t, l, a, n) {
        var i = _.p;
        _.p = i !== 0 && 8 > i ? i : 8;
        var u = p.T,
            s = {};
        ((p.T = s), Oc(e, !1, t, l));
        try {
            var o = n(),
                y = p.S;
            if ((y !== null && y(s, o), o !== null && typeof o == 'object' && typeof o.then == 'function')) {
                var N = sm(o, a);
                Cn(e, t, N, Tt(e));
            } else Cn(e, t, a, Tt(e));
        } catch (E) {
            Cn(e, t, { then: function () {}, status: 'rejected', reason: E }, Tt());
        } finally {
            ((_.p = i), u !== null && s.types !== null && (u.types = s.types), (p.T = u));
        }
    }
    function mm() {}
    function wc(e, t, l, a) {
        if (e.tag !== 5) throw Error(r(476));
        var n = qr(e).queue;
        Br(
            e,
            n,
            t,
            q,
            l === null
                ? mm
                : function () {
                      return (Yr(e), l(a));
                  }
        );
    }
    function qr(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: q,
            baseState: q,
            baseQueue: null,
            queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ul, lastRenderedState: q },
            next: null,
        };
        var l = {};
        return (
            (t.next = {
                memoizedState: l,
                baseState: l,
                baseQueue: null,
                queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ul, lastRenderedState: l },
                next: null,
            }),
            (e.memoizedState = t),
            (e = e.alternate),
            e !== null && (e.memoizedState = t),
            t
        );
    }
    function Yr(e) {
        var t = qr(e);
        (t.next === null && (t = e.alternate.memoizedState), Cn(e, t.next.queue, {}, Tt()));
    }
    function Dc() {
        return lt(Bn);
    }
    function Gr() {
        return Xe().memoizedState;
    }
    function Qr() {
        return Xe().memoizedState;
    }
    function vm(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
                case 24:
                case 3:
                    var l = Tt();
                    e = Nl(l);
                    var a = Tl(t, e, l);
                    (a !== null && (gt(a, t, l), yn(a, t, l)), (t = { cache: uc() }), (e.payload = t));
                    return;
            }
            t = t.return;
        }
    }
    function gm(e, t, l) {
        var a = Tt();
        ((l = { lane: a, revertLane: 0, gesture: null, action: l, hasEagerState: !1, eagerState: null, next: null }),
            _i(e) ? Vr(t, l) : ((l = Wu(e, t, l, a)), l !== null && (gt(l, e, a), Zr(l, t, a))));
    }
    function Xr(e, t, l) {
        var a = Tt();
        Cn(e, t, l, a);
    }
    function Cn(e, t, l, a) {
        var n = { lane: a, revertLane: 0, gesture: null, action: l, hasEagerState: !1, eagerState: null, next: null };
        if (_i(e)) Vr(t, n);
        else {
            var i = e.alternate;
            if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
                try {
                    var u = t.lastRenderedState,
                        s = i(u, l);
                    if (((n.hasEagerState = !0), (n.eagerState = s), St(s, u))) return (hi(e, t, n, 0), _e === null && di(), !1);
                } catch {
                } finally {
                }
            if (((l = Wu(e, t, n, a)), l !== null)) return (gt(l, e, a), Zr(l, t, a), !0);
        }
        return !1;
    }
    function Oc(e, t, l, a) {
        if (((a = { lane: 2, revertLane: rs(), gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null }), _i(e))) {
            if (t) throw Error(r(479));
        } else ((t = Wu(e, l, a, 2)), t !== null && gt(t, e, 2));
    }
    function _i(e) {
        var t = e.alternate;
        return e === ue || (t !== null && t === ue);
    }
    function Vr(e, t) {
        _a = Ai = !0;
        var l = e.pending;
        (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (e.pending = t));
    }
    function Zr(e, t, l) {
        if ((l & 4194048) !== 0) {
            var a = t.lanes;
            ((a &= e.pendingLanes), (l |= a), (t.lanes = l), $s(e, l));
        }
    }
    var jn = {
        readContext: lt,
        use: zi,
        useCallback: Ye,
        useContext: Ye,
        useEffect: Ye,
        useImperativeHandle: Ye,
        useLayoutEffect: Ye,
        useInsertionEffect: Ye,
        useMemo: Ye,
        useReducer: Ye,
        useRef: Ye,
        useState: Ye,
        useDebugValue: Ye,
        useDeferredValue: Ye,
        useTransition: Ye,
        useSyncExternalStore: Ye,
        useId: Ye,
        useHostTransitionStatus: Ye,
        useFormState: Ye,
        useActionState: Ye,
        useOptimistic: Ye,
        useMemoCache: Ye,
        useCacheRefresh: Ye,
    };
    jn.useEffectEvent = Ye;
    var Kr = {
            readContext: lt,
            use: zi,
            useCallback: function (e, t) {
                return ((ot().memoizedState = [e, t === void 0 ? null : t]), e);
            },
            useContext: lt,
            useEffect: wr,
            useImperativeHandle: function (e, t, l) {
                ((l = l != null ? l.concat([e]) : null), Di(4194308, 4, Rr.bind(null, t, e), l));
            },
            useLayoutEffect: function (e, t) {
                return Di(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
                Di(4, 2, e, t);
            },
            useMemo: function (e, t) {
                var l = ot();
                t = t === void 0 ? null : t;
                var a = e();
                if (ua) {
                    $e(!0);
                    try {
                        e();
                    } finally {
                        $e(!1);
                    }
                }
                return ((l.memoizedState = [a, t]), a);
            },
            useReducer: function (e, t, l) {
                var a = ot();
                if (l !== void 0) {
                    var n = l(t);
                    if (ua) {
                        $e(!0);
                        try {
                            l(t);
                        } finally {
                            $e(!1);
                        }
                    }
                } else n = t;
                return (
                    (a.memoizedState = a.baseState = n),
                    (e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }),
                    (a.queue = e),
                    (e = e.dispatch = gm.bind(null, ue, e)),
                    [a.memoizedState, e]
                );
            },
            useRef: function (e) {
                var t = ot();
                return ((e = { current: e }), (t.memoizedState = e));
            },
            useState: function (e) {
                e = Tc(e);
                var t = e.queue,
                    l = Xr.bind(null, ue, t);
                return ((t.dispatch = l), [e.memoizedState, l]);
            },
            useDebugValue: Mc,
            useDeferredValue: function (e, t) {
                var l = ot();
                return zc(l, e, t);
            },
            useTransition: function () {
                var e = Tc(!1);
                return ((e = Br.bind(null, ue, e.queue, !0, !1)), (ot().memoizedState = e), [!1, e]);
            },
            useSyncExternalStore: function (e, t, l) {
                var a = ue,
                    n = ot();
                if (ve) {
                    if (l === void 0) throw Error(r(407));
                    l = l();
                } else {
                    if (((l = t()), _e === null)) throw Error(r(349));
                    (de & 127) !== 0 || mr(a, t, l);
                }
                n.memoizedState = l;
                var i = { value: l, getSnapshot: t };
                return (
                    (n.queue = i),
                    wr(gr.bind(null, a, i, e), [e]),
                    (a.flags |= 2048),
                    Ua(9, { destroy: void 0 }, vr.bind(null, a, i, l, t), null),
                    l
                );
            },
            useId: function () {
                var e = ot(),
                    t = _e.identifierPrefix;
                if (ve) {
                    var l = Jt,
                        a = Kt;
                    ((l = (a & ~(1 << (32 - st(a) - 1))).toString(32) + l),
                        (t = '_' + t + 'R_' + l),
                        (l = Ei++),
                        0 < l && (t += 'H' + l.toString(32)),
                        (t += '_'));
                } else ((l = om++), (t = '_' + t + 'r_' + l.toString(32) + '_'));
                return (e.memoizedState = t);
            },
            useHostTransitionStatus: Dc,
            useFormState: Tr,
            useActionState: Tr,
            useOptimistic: function (e) {
                var t = ot();
                t.memoizedState = t.baseState = e;
                var l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
                return ((t.queue = l), (t = Oc.bind(null, ue, !0, l)), (l.dispatch = t), [e, t]);
            },
            useMemoCache: Cc,
            useCacheRefresh: function () {
                return (ot().memoizedState = vm.bind(null, ue));
            },
            useEffectEvent: function (e) {
                var t = ot(),
                    l = { impl: e };
                return (
                    (t.memoizedState = l),
                    function () {
                        if ((Se & 2) !== 0) throw Error(r(440));
                        return l.impl.apply(void 0, arguments);
                    }
                );
            },
        },
        _c = {
            readContext: lt,
            use: zi,
            useCallback: kr,
            useContext: lt,
            useEffect: Ec,
            useImperativeHandle: Ur,
            useInsertionEffect: Or,
            useLayoutEffect: _r,
            useMemo: Lr,
            useReducer: wi,
            useRef: zr,
            useState: function () {
                return wi(ul);
            },
            useDebugValue: Mc,
            useDeferredValue: function (e, t) {
                var l = Xe();
                return Hr(l, Me.memoizedState, e, t);
            },
            useTransition: function () {
                var e = wi(ul)[0],
                    t = Xe().memoizedState;
                return [typeof e == 'boolean' ? e : xn(e), t];
            },
            useSyncExternalStore: hr,
            useId: Gr,
            useHostTransitionStatus: Dc,
            useFormState: Ar,
            useActionState: Ar,
            useOptimistic: function (e, t) {
                var l = Xe();
                return Sr(l, Me, e, t);
            },
            useMemoCache: Cc,
            useCacheRefresh: Qr,
        };
    _c.useEffectEvent = Dr;
    var Jr = {
        readContext: lt,
        use: zi,
        useCallback: kr,
        useContext: lt,
        useEffect: Ec,
        useImperativeHandle: Ur,
        useInsertionEffect: Or,
        useLayoutEffect: _r,
        useMemo: Lr,
        useReducer: Nc,
        useRef: zr,
        useState: function () {
            return Nc(ul);
        },
        useDebugValue: Mc,
        useDeferredValue: function (e, t) {
            var l = Xe();
            return Me === null ? zc(l, e, t) : Hr(l, Me.memoizedState, e, t);
        },
        useTransition: function () {
            var e = Nc(ul)[0],
                t = Xe().memoizedState;
            return [typeof e == 'boolean' ? e : xn(e), t];
        },
        useSyncExternalStore: hr,
        useId: Gr,
        useHostTransitionStatus: Dc,
        useFormState: Mr,
        useActionState: Mr,
        useOptimistic: function (e, t) {
            var l = Xe();
            return Me !== null ? Sr(l, Me, e, t) : ((l.baseState = e), [e, l.queue.dispatch]);
        },
        useMemoCache: Cc,
        useCacheRefresh: Qr,
    };
    Jr.useEffectEvent = Dr;
    function Rc(e, t, l, a) {
        ((t = e.memoizedState),
            (l = l(a, t)),
            (l = l == null ? t : D({}, t, l)),
            (e.memoizedState = l),
            e.lanes === 0 && (e.updateQueue.baseState = l));
    }
    var Uc = {
        enqueueSetState: function (e, t, l) {
            e = e._reactInternals;
            var a = Tt(),
                n = Nl(a);
            ((n.payload = t), l != null && (n.callback = l), (t = Tl(e, n, a)), t !== null && (gt(t, e, a), yn(t, e, a)));
        },
        enqueueReplaceState: function (e, t, l) {
            e = e._reactInternals;
            var a = Tt(),
                n = Nl(a);
            ((n.tag = 1), (n.payload = t), l != null && (n.callback = l), (t = Tl(e, n, a)), t !== null && (gt(t, e, a), yn(t, e, a)));
        },
        enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var l = Tt(),
                a = Nl(l);
            ((a.tag = 2), t != null && (a.callback = t), (t = Tl(e, a, l)), t !== null && (gt(t, e, l), yn(t, e, l)));
        },
    };
    function Wr(e, t, l, a, n, i, u) {
        return (
            (e = e.stateNode),
            typeof e.shouldComponentUpdate == 'function'
                ? e.shouldComponentUpdate(a, i, u)
                : t.prototype && t.prototype.isPureReactComponent
                  ? !on(l, a) || !on(n, i)
                  : !0
        );
    }
    function $r(e, t, l, a) {
        ((e = t.state),
            typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(l, a),
            typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(l, a),
            t.state !== e && Uc.enqueueReplaceState(t, t.state, null));
    }
    function ca(e, t) {
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
    function Fr(e) {
        fi(e);
    }
    function Ir(e) {
        console.error(e);
    }
    function Pr(e) {
        fi(e);
    }
    function Ri(e, t) {
        try {
            var l = e.onUncaughtError;
            l(t.value, { componentStack: t.stack });
        } catch (a) {
            setTimeout(function () {
                throw a;
            });
        }
    }
    function ef(e, t, l) {
        try {
            var a = e.onCaughtError;
            a(l.value, { componentStack: l.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
        } catch (n) {
            setTimeout(function () {
                throw n;
            });
        }
    }
    function kc(e, t, l) {
        return (
            (l = Nl(l)),
            (l.tag = 3),
            (l.payload = { element: null }),
            (l.callback = function () {
                Ri(e, t);
            }),
            l
        );
    }
    function tf(e) {
        return ((e = Nl(e)), (e.tag = 3), e);
    }
    function lf(e, t, l, a) {
        var n = l.type.getDerivedStateFromError;
        if (typeof n == 'function') {
            var i = a.value;
            ((e.payload = function () {
                return n(i);
            }),
                (e.callback = function () {
                    ef(t, l, a);
                }));
        }
        var u = l.stateNode;
        u !== null &&
            typeof u.componentDidCatch == 'function' &&
            (e.callback = function () {
                (ef(t, l, a), typeof n != 'function' && (Dl === null ? (Dl = new Set([this])) : Dl.add(this)));
                var s = a.stack;
                this.componentDidCatch(a.value, { componentStack: s !== null ? s : '' });
            });
    }
    function ym(e, t, l, a, n) {
        if (((l.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
            if (((t = l.alternate), t !== null && Ea(t, l, n, !0), (l = xt.current), l !== null)) {
                switch (l.tag) {
                    case 31:
                    case 13:
                        return (
                            Rt === null ? Zi() : l.alternate === null && Ge === 0 && (Ge = 3),
                            (l.flags &= -257),
                            (l.flags |= 65536),
                            (l.lanes = n),
                            a === xi
                                ? (l.flags |= 16384)
                                : ((t = l.updateQueue), t === null ? (l.updateQueue = new Set([a])) : t.add(a), cs(e, a, n)),
                            !1
                        );
                    case 22:
                        return (
                            (l.flags |= 65536),
                            a === xi
                                ? (l.flags |= 16384)
                                : ((t = l.updateQueue),
                                  t === null
                                      ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }), (l.updateQueue = t))
                                      : ((l = t.retryQueue), l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                                  cs(e, a, n)),
                            !1
                        );
                }
                throw Error(r(435, l.tag));
            }
            return (cs(e, a, n), Zi(), !1);
        }
        if (ve)
            return (
                (t = xt.current),
                t !== null
                    ? ((t.flags & 65536) === 0 && (t.flags |= 256),
                      (t.flags |= 65536),
                      (t.lanes = n),
                      a !== tc && ((e = Error(r(422), { cause: a })), dn(wt(e, l))))
                    : (a !== tc && ((t = Error(r(423), { cause: a })), dn(wt(t, l))),
                      (e = e.current.alternate),
                      (e.flags |= 65536),
                      (n &= -n),
                      (e.lanes |= n),
                      (a = wt(a, l)),
                      (n = kc(e.stateNode, a, n)),
                      dc(e, n),
                      Ge !== 4 && (Ge = 2)),
                !1
            );
        var i = Error(r(520), { cause: a });
        if (((i = wt(i, l)), Dn === null ? (Dn = [i]) : Dn.push(i), Ge !== 4 && (Ge = 2), t === null)) return !0;
        ((a = wt(a, l)), (l = t));
        do {
            switch (l.tag) {
                case 3:
                    return ((l.flags |= 65536), (e = n & -n), (l.lanes |= e), (e = kc(l.stateNode, a, e)), dc(l, e), !1);
                case 1:
                    if (
                        ((t = l.type),
                        (i = l.stateNode),
                        (l.flags & 128) === 0 &&
                            (typeof t.getDerivedStateFromError == 'function' ||
                                (i !== null && typeof i.componentDidCatch == 'function' && (Dl === null || !Dl.has(i)))))
                    )
                        return ((l.flags |= 65536), (n &= -n), (l.lanes |= n), (n = tf(n)), lf(n, e, l, a), dc(l, n), !1);
            }
            l = l.return;
        } while (l !== null);
        return !1;
    }
    var Lc = Error(r(461)),
        Ke = !1;
    function at(e, t, l, a) {
        t.child = e === null ? ur(t, null, l, a) : ia(t, e.child, l, a);
    }
    function af(e, t, l, a, n) {
        l = l.render;
        var i = t.ref;
        if ('ref' in a) {
            var u = {};
            for (var s in a) s !== 'ref' && (u[s] = a[s]);
        } else u = a;
        return (
            ta(t),
            (a = pc(e, t, l, u, i, n)),
            (s = Sc()),
            e !== null && !Ke ? (bc(e, t, n), cl(e, t, n)) : (ve && s && Pu(t), (t.flags |= 1), at(e, t, a, n), t.child)
        );
    }
    function nf(e, t, l, a, n) {
        if (e === null) {
            var i = l.type;
            return typeof i == 'function' && !$u(i) && i.defaultProps === void 0 && l.compare === null
                ? ((t.tag = 15), (t.type = i), uf(e, t, i, a, n))
                : ((e = vi(l.type, null, a, t, t.mode, n)), (e.ref = t.ref), (e.return = t), (t.child = e));
        }
        if (((i = e.child), !Vc(e, n))) {
            var u = i.memoizedProps;
            if (((l = l.compare), (l = l !== null ? l : on), l(u, a) && e.ref === t.ref)) return cl(e, t, n);
        }
        return ((t.flags |= 1), (e = tl(i, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    function uf(e, t, l, a, n) {
        if (e !== null) {
            var i = e.memoizedProps;
            if (on(i, a) && e.ref === t.ref)
                if (((Ke = !1), (t.pendingProps = a = i), Vc(e, n))) (e.flags & 131072) !== 0 && (Ke = !0);
                else return ((t.lanes = e.lanes), cl(e, t, n));
        }
        return Hc(e, t, l, a, n);
    }
    function cf(e, t, l, a) {
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
                return sf(e, t, i, l, a);
            }
            if ((l & 536870912) !== 0)
                ((t.memoizedState = { baseLanes: 0, cachePool: null }),
                    e !== null && Si(t, i !== null ? i.cachePool : null),
                    i !== null ? or(t, i) : mc(),
                    rr(t));
            else return ((a = t.lanes = 536870912), sf(e, t, i !== null ? i.baseLanes | l : l, l, a));
        } else i !== null ? (Si(t, i.cachePool), or(t, i), El(), (t.memoizedState = null)) : (e !== null && Si(t, null), mc(), El());
        return (at(e, t, n, l), t.child);
    }
    function Nn(e, t) {
        return (
            (e !== null && e.tag === 22) ||
                t.stateNode !== null ||
                (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
            t.sibling
        );
    }
    function sf(e, t, l, a, n) {
        var i = sc();
        return (
            (i = i === null ? null : { parent: Ve._currentValue, pool: i }),
            (t.memoizedState = { baseLanes: l, cachePool: i }),
            e !== null && Si(t, null),
            mc(),
            rr(t),
            e !== null && Ea(e, t, a, !0),
            (t.childLanes = n),
            null
        );
    }
    function Ui(e, t) {
        return ((t = Li({ mode: t.mode, children: t.children }, e.mode)), (t.ref = e.ref), (e.child = t), (t.return = e), t);
    }
    function of(e, t, l) {
        return (ia(t, e.child, null, l), (e = Ui(t, t.pendingProps)), (e.flags |= 2), Ct(t), (t.memoizedState = null), e);
    }
    function pm(e, t, l) {
        var a = t.pendingProps,
            n = (t.flags & 128) !== 0;
        if (((t.flags &= -129), e === null)) {
            if (ve) {
                if (a.mode === 'hidden') return ((e = Ui(t, a)), (t.lanes = 536870912), Nn(null, e));
                if (
                    (gc(t),
                    (e = Ue)
                        ? ((e = xd(e, _t)),
                          (e = e !== null && e.data === '&' ? e : null),
                          e !== null &&
                              ((t.memoizedState = {
                                  dehydrated: e,
                                  treeContext: Sl !== null ? { id: Kt, overflow: Jt } : null,
                                  retryLane: 536870912,
                                  hydrationErrors: null,
                              }),
                              (l = Vo(e)),
                              (l.return = t),
                              (t.child = l),
                              (tt = t),
                              (Ue = null)))
                        : (e = null),
                    e === null)
                )
                    throw xl(t);
                return ((t.lanes = 536870912), null);
            }
            return Ui(t, a);
        }
        var i = e.memoizedState;
        if (i !== null) {
            var u = i.dehydrated;
            if ((gc(t), n))
                if (t.flags & 256) ((t.flags &= -257), (t = of(e, t, l)));
                else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
                else throw Error(r(558));
            else if ((Ke || Ea(e, t, l, !1), (n = (l & e.childLanes) !== 0), Ke || n)) {
                if (((a = _e), a !== null && ((u = Fs(a, l)), u !== 0 && u !== i.retryLane))) throw ((i.retryLane = u), Fl(e, u), gt(a, e, u), Lc);
                (Zi(), (t = of(e, t, l)));
            } else
                ((e = i.treeContext),
                    (Ue = Ut(u.nextSibling)),
                    (tt = t),
                    (ve = !0),
                    (bl = null),
                    (_t = !1),
                    e !== null && Jo(t, e),
                    (t = Ui(t, a)),
                    (t.flags |= 4096));
            return t;
        }
        return ((e = tl(e.child, { mode: a.mode, children: a.children })), (e.ref = t.ref), (t.child = e), (e.return = t), e);
    }
    function ki(e, t) {
        var l = t.ref;
        if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof l != 'function' && typeof l != 'object') throw Error(r(284));
            (e === null || e.ref !== l) && (t.flags |= 4194816);
        }
    }
    function Hc(e, t, l, a, n) {
        return (
            ta(t),
            (l = pc(e, t, l, a, void 0, n)),
            (a = Sc()),
            e !== null && !Ke ? (bc(e, t, n), cl(e, t, n)) : (ve && a && Pu(t), (t.flags |= 1), at(e, t, l, n), t.child)
        );
    }
    function rf(e, t, l, a, n, i) {
        return (
            ta(t),
            (t.updateQueue = null),
            (l = dr(t, a, l, n)),
            fr(e),
            (a = Sc()),
            e !== null && !Ke ? (bc(e, t, i), cl(e, t, i)) : (ve && a && Pu(t), (t.flags |= 1), at(e, t, l, i), t.child)
        );
    }
    function ff(e, t, l, a, n) {
        if ((ta(t), t.stateNode === null)) {
            var i = ja,
                u = l.contextType;
            (typeof u == 'object' && u !== null && (i = lt(u)),
                (i = new l(a, i)),
                (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
                (i.updater = Uc),
                (t.stateNode = i),
                (i._reactInternals = t),
                (i = t.stateNode),
                (i.props = a),
                (i.state = t.memoizedState),
                (i.refs = {}),
                rc(t),
                (u = l.contextType),
                (i.context = typeof u == 'object' && u !== null ? lt(u) : ja),
                (i.state = t.memoizedState),
                (u = l.getDerivedStateFromProps),
                typeof u == 'function' && (Rc(t, l, u, a), (i.state = t.memoizedState)),
                typeof l.getDerivedStateFromProps == 'function' ||
                    typeof i.getSnapshotBeforeUpdate == 'function' ||
                    (typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
                    ((u = i.state),
                    typeof i.componentWillMount == 'function' && i.componentWillMount(),
                    typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
                    u !== i.state && Uc.enqueueReplaceState(i, i.state, null),
                    Sn(t, a, i, n),
                    pn(),
                    (i.state = t.memoizedState)),
                typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
                (a = !0));
        } else if (e === null) {
            i = t.stateNode;
            var s = t.memoizedProps,
                o = ca(l, s);
            i.props = o;
            var y = i.context,
                N = l.contextType;
            ((u = ja), typeof N == 'object' && N !== null && (u = lt(N)));
            var E = l.getDerivedStateFromProps;
            ((N = typeof E == 'function' || typeof i.getSnapshotBeforeUpdate == 'function'),
                (s = t.pendingProps !== s),
                N ||
                    (typeof i.UNSAFE_componentWillReceiveProps != 'function' && typeof i.componentWillReceiveProps != 'function') ||
                    ((s || y !== u) && $r(t, i, a, u)),
                (jl = !1));
            var b = t.memoizedState;
            ((i.state = b),
                Sn(t, a, i, n),
                pn(),
                (y = t.memoizedState),
                s || b !== y || jl
                    ? (typeof E == 'function' && (Rc(t, l, E, a), (y = t.memoizedState)),
                      (o = jl || Wr(t, l, o, a, b, y, u))
                          ? (N ||
                                (typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
                                (typeof i.componentWillMount == 'function' && i.componentWillMount(),
                                typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount()),
                            typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
                          : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (t.memoizedProps = a), (t.memoizedState = y)),
                      (i.props = a),
                      (i.state = y),
                      (i.context = u),
                      (a = o))
                    : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (a = !1)));
        } else {
            ((i = t.stateNode),
                fc(e, t),
                (u = t.memoizedProps),
                (N = ca(l, u)),
                (i.props = N),
                (E = t.pendingProps),
                (b = i.context),
                (y = l.contextType),
                (o = ja),
                typeof y == 'object' && y !== null && (o = lt(y)),
                (s = l.getDerivedStateFromProps),
                (y = typeof s == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
                    (typeof i.UNSAFE_componentWillReceiveProps != 'function' && typeof i.componentWillReceiveProps != 'function') ||
                    ((u !== E || b !== o) && $r(t, i, a, o)),
                (jl = !1),
                (b = t.memoizedState),
                (i.state = b),
                Sn(t, a, i, n),
                pn());
            var C = t.memoizedState;
            u !== E || b !== C || jl || (e !== null && e.dependencies !== null && yi(e.dependencies))
                ? (typeof s == 'function' && (Rc(t, l, s, a), (C = t.memoizedState)),
                  (N = jl || Wr(t, l, N, a, b, C, o) || (e !== null && e.dependencies !== null && yi(e.dependencies)))
                      ? (y ||
                            (typeof i.UNSAFE_componentWillUpdate != 'function' && typeof i.componentWillUpdate != 'function') ||
                            (typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(a, C, o),
                            typeof i.UNSAFE_componentWillUpdate == 'function' && i.UNSAFE_componentWillUpdate(a, C, o)),
                        typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
                        typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
                      : (typeof i.componentDidUpdate != 'function' || (u === e.memoizedProps && b === e.memoizedState) || (t.flags |= 4),
                        typeof i.getSnapshotBeforeUpdate != 'function' || (u === e.memoizedProps && b === e.memoizedState) || (t.flags |= 1024),
                        (t.memoizedProps = a),
                        (t.memoizedState = C)),
                  (i.props = a),
                  (i.state = C),
                  (i.context = o),
                  (a = N))
                : (typeof i.componentDidUpdate != 'function' || (u === e.memoizedProps && b === e.memoizedState) || (t.flags |= 4),
                  typeof i.getSnapshotBeforeUpdate != 'function' || (u === e.memoizedProps && b === e.memoizedState) || (t.flags |= 1024),
                  (a = !1));
        }
        return (
            (i = a),
            ki(e, t),
            (a = (t.flags & 128) !== 0),
            i || a
                ? ((i = t.stateNode),
                  (l = a && typeof l.getDerivedStateFromError != 'function' ? null : i.render()),
                  (t.flags |= 1),
                  e !== null && a ? ((t.child = ia(t, e.child, null, n)), (t.child = ia(t, null, l, n))) : at(e, t, l, n),
                  (t.memoizedState = i.state),
                  (e = t.child))
                : (e = cl(e, t, n)),
            e
        );
    }
    function df(e, t, l, a) {
        return (Pl(), (t.flags |= 256), at(e, t, l, a), t.child);
    }
    var Bc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function qc(e) {
        return { baseLanes: e, cachePool: er() };
    }
    function Yc(e, t, l) {
        return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= Nt), e);
    }
    function hf(e, t, l) {
        var a = t.pendingProps,
            n = !1,
            i = (t.flags & 128) !== 0,
            u;
        if (
            ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (Qe.current & 2) !== 0),
            u && ((n = !0), (t.flags &= -129)),
            (u = (t.flags & 32) !== 0),
            (t.flags &= -33),
            e === null)
        ) {
            if (ve) {
                if (
                    (n ? Al(t) : El(),
                    (e = Ue)
                        ? ((e = xd(e, _t)),
                          (e = e !== null && e.data !== '&' ? e : null),
                          e !== null &&
                              ((t.memoizedState = {
                                  dehydrated: e,
                                  treeContext: Sl !== null ? { id: Kt, overflow: Jt } : null,
                                  retryLane: 536870912,
                                  hydrationErrors: null,
                              }),
                              (l = Vo(e)),
                              (l.return = t),
                              (t.child = l),
                              (tt = t),
                              (Ue = null)))
                        : (e = null),
                    e === null)
                )
                    throw xl(t);
                return (js(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
            }
            var s = a.children;
            return (
                (a = a.fallback),
                n
                    ? (El(),
                      (n = t.mode),
                      (s = Li({ mode: 'hidden', children: s }, n)),
                      (a = Il(a, n, l, null)),
                      (s.return = t),
                      (a.return = t),
                      (s.sibling = a),
                      (t.child = s),
                      (a = t.child),
                      (a.memoizedState = qc(l)),
                      (a.childLanes = Yc(e, u, l)),
                      (t.memoizedState = Bc),
                      Nn(null, a))
                    : (Al(t), Gc(t, s))
            );
        }
        var o = e.memoizedState;
        if (o !== null && ((s = o.dehydrated), s !== null)) {
            if (i)
                t.flags & 256
                    ? (Al(t), (t.flags &= -257), (t = Qc(e, t, l)))
                    : t.memoizedState !== null
                      ? (El(), (t.child = e.child), (t.flags |= 128), (t = null))
                      : (El(),
                        (s = a.fallback),
                        (n = t.mode),
                        (a = Li({ mode: 'visible', children: a.children }, n)),
                        (s = Il(s, n, l, null)),
                        (s.flags |= 2),
                        (a.return = t),
                        (s.return = t),
                        (a.sibling = s),
                        (t.child = a),
                        ia(t, e.child, null, l),
                        (a = t.child),
                        (a.memoizedState = qc(l)),
                        (a.childLanes = Yc(e, u, l)),
                        (t.memoizedState = Bc),
                        (t = Nn(null, a)));
            else if ((Al(t), js(s))) {
                if (((u = s.nextSibling && s.nextSibling.dataset), u)) var y = u.dgst;
                ((u = y), (a = Error(r(419))), (a.stack = ''), (a.digest = u), dn({ value: a, source: null, stack: null }), (t = Qc(e, t, l)));
            } else if ((Ke || Ea(e, t, l, !1), (u = (l & e.childLanes) !== 0), Ke || u)) {
                if (((u = _e), u !== null && ((a = Fs(u, l)), a !== 0 && a !== o.retryLane))) throw ((o.retryLane = a), Fl(e, a), gt(u, e, a), Lc);
                (Cs(s) || Zi(), (t = Qc(e, t, l)));
            } else
                Cs(s)
                    ? ((t.flags |= 192), (t.child = e.child), (t = null))
                    : ((e = o.treeContext),
                      (Ue = Ut(s.nextSibling)),
                      (tt = t),
                      (ve = !0),
                      (bl = null),
                      (_t = !1),
                      e !== null && Jo(t, e),
                      (t = Gc(t, a.children)),
                      (t.flags |= 4096));
            return t;
        }
        return n
            ? (El(),
              (s = a.fallback),
              (n = t.mode),
              (o = e.child),
              (y = o.sibling),
              (a = tl(o, { mode: 'hidden', children: a.children })),
              (a.subtreeFlags = o.subtreeFlags & 65011712),
              y !== null ? (s = tl(y, s)) : ((s = Il(s, n, l, null)), (s.flags |= 2)),
              (s.return = t),
              (a.return = t),
              (a.sibling = s),
              (t.child = a),
              Nn(null, a),
              (a = t.child),
              (s = e.child.memoizedState),
              s === null
                  ? (s = qc(l))
                  : ((n = s.cachePool),
                    n !== null ? ((o = Ve._currentValue), (n = n.parent !== o ? { parent: o, pool: o } : n)) : (n = er()),
                    (s = { baseLanes: s.baseLanes | l, cachePool: n })),
              (a.memoizedState = s),
              (a.childLanes = Yc(e, u, l)),
              (t.memoizedState = Bc),
              Nn(e.child, a))
            : (Al(t),
              (l = e.child),
              (e = l.sibling),
              (l = tl(l, { mode: 'visible', children: a.children })),
              (l.return = t),
              (l.sibling = null),
              e !== null && ((u = t.deletions), u === null ? ((t.deletions = [e]), (t.flags |= 16)) : u.push(e)),
              (t.child = l),
              (t.memoizedState = null),
              l);
    }
    function Gc(e, t) {
        return ((t = Li({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
    }
    function Li(e, t) {
        return ((e = bt(22, e, null, t)), (e.lanes = 0), e);
    }
    function Qc(e, t, l) {
        return (ia(t, e.child, null, l), (e = Gc(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e);
    }
    function mf(e, t, l) {
        e.lanes |= t;
        var a = e.alternate;
        (a !== null && (a.lanes |= t), nc(e.return, t, l));
    }
    function Xc(e, t, l, a, n, i) {
        var u = e.memoizedState;
        u === null
            ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: l, tailMode: n, treeForkCount: i })
            : ((u.isBackwards = t),
              (u.rendering = null),
              (u.renderingStartTime = 0),
              (u.last = a),
              (u.tail = l),
              (u.tailMode = n),
              (u.treeForkCount = i));
    }
    function vf(e, t, l) {
        var a = t.pendingProps,
            n = a.revealOrder,
            i = a.tail;
        a = a.children;
        var u = Qe.current,
            s = (u & 2) !== 0;
        if (
            (s ? ((u = (u & 1) | 2), (t.flags |= 128)) : (u &= 1),
            R(Qe, u),
            at(e, t, a, l),
            (a = ve ? fn : 0),
            !s && e !== null && (e.flags & 128) !== 0)
        )
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && mf(e, l, t);
                else if (e.tag === 19) mf(e, l, t);
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
                for (l = t.child, n = null; l !== null; ) ((e = l.alternate), e !== null && Ti(e) === null && (n = l), (l = l.sibling));
                ((l = n), l === null ? ((n = t.child), (t.child = null)) : ((n = l.sibling), (l.sibling = null)), Xc(t, !1, n, l, i, a));
                break;
            case 'backwards':
            case 'unstable_legacy-backwards':
                for (l = null, n = t.child, t.child = null; n !== null; ) {
                    if (((e = n.alternate), e !== null && Ti(e) === null)) {
                        t.child = n;
                        break;
                    }
                    ((e = n.sibling), (n.sibling = l), (l = n), (n = e));
                }
                Xc(t, !0, l, null, i, a);
                break;
            case 'together':
                Xc(t, !1, null, null, void 0, a);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function cl(e, t, l) {
        if ((e !== null && (t.dependencies = e.dependencies), (wl |= t.lanes), (l & t.childLanes) === 0))
            if (e !== null) {
                if ((Ea(e, t, l, !1), (l & t.childLanes) === 0)) return null;
            } else return null;
        if (e !== null && t.child !== e.child) throw Error(r(153));
        if (t.child !== null) {
            for (e = t.child, l = tl(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
                ((e = e.sibling), (l = l.sibling = tl(e, e.pendingProps)), (l.return = t));
            l.sibling = null;
        }
        return t.child;
    }
    function Vc(e, t) {
        return (e.lanes & t) !== 0 ? !0 : ((e = e.dependencies), !!(e !== null && yi(e)));
    }
    function Sm(e, t, l) {
        switch (t.tag) {
            case 3:
                (qe(t, t.stateNode.containerInfo), Cl(t, Ve, e.memoizedState.cache), Pl());
                break;
            case 27:
            case 5:
                At(t);
                break;
            case 4:
                qe(t, t.stateNode.containerInfo);
                break;
            case 10:
                Cl(t, t.type, t.memoizedProps.value);
                break;
            case 31:
                if (t.memoizedState !== null) return ((t.flags |= 128), gc(t), null);
                break;
            case 13:
                var a = t.memoizedState;
                if (a !== null)
                    return a.dehydrated !== null
                        ? (Al(t), (t.flags |= 128), null)
                        : (l & t.child.childLanes) !== 0
                          ? hf(e, t, l)
                          : (Al(t), (e = cl(e, t, l)), e !== null ? e.sibling : null);
                Al(t);
                break;
            case 19:
                var n = (e.flags & 128) !== 0;
                if (((a = (l & t.childLanes) !== 0), a || (Ea(e, t, l, !1), (a = (l & t.childLanes) !== 0)), n)) {
                    if (a) return vf(e, t, l);
                    t.flags |= 128;
                }
                if (((n = t.memoizedState), n !== null && ((n.rendering = null), (n.tail = null), (n.lastEffect = null)), R(Qe, Qe.current), a))
                    break;
                return null;
            case 22:
                return ((t.lanes = 0), cf(e, t, l, t.pendingProps));
            case 24:
                Cl(t, Ve, e.memoizedState.cache);
        }
        return cl(e, t, l);
    }
    function gf(e, t, l) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps) Ke = !0;
            else {
                if (!Vc(e, l) && (t.flags & 128) === 0) return ((Ke = !1), Sm(e, t, l));
                Ke = (e.flags & 131072) !== 0;
            }
        else ((Ke = !1), ve && (t.flags & 1048576) !== 0 && Ko(t, fn, t.index));
        switch (((t.lanes = 0), t.tag)) {
            case 16:
                e: {
                    var a = t.pendingProps;
                    if (((e = aa(t.elementType)), (t.type = e), typeof e == 'function'))
                        $u(e) ? ((a = ca(e, a)), (t.tag = 1), (t = ff(null, t, e, a, l))) : ((t.tag = 0), (t = Hc(null, t, e, a, l)));
                    else {
                        if (e != null) {
                            var n = e.$$typeof;
                            if (n === Ce) {
                                ((t.tag = 11), (t = af(null, t, e, a, l)));
                                break e;
                            } else if (n === L) {
                                ((t.tag = 14), (t = nf(null, t, e, a, l)));
                                break e;
                            }
                        }
                        throw ((t = je(e) || e), Error(r(306, t, '')));
                    }
                }
                return t;
            case 0:
                return Hc(e, t, t.type, t.pendingProps, l);
            case 1:
                return ((a = t.type), (n = ca(a, t.pendingProps)), ff(e, t, a, n, l));
            case 3:
                e: {
                    if ((qe(t, t.stateNode.containerInfo), e === null)) throw Error(r(387));
                    a = t.pendingProps;
                    var i = t.memoizedState;
                    ((n = i.element), fc(e, t), Sn(t, a, null, l));
                    var u = t.memoizedState;
                    if (((a = u.cache), Cl(t, Ve, a), a !== i.cache && ic(t, [Ve], l, !0), pn(), (a = u.element), i.isDehydrated))
                        if (
                            ((i = { element: a, isDehydrated: !1, cache: u.cache }),
                            (t.updateQueue.baseState = i),
                            (t.memoizedState = i),
                            t.flags & 256)
                        ) {
                            t = df(e, t, a, l);
                            break e;
                        } else if (a !== n) {
                            ((n = wt(Error(r(424)), t)), dn(n), (t = df(e, t, a, l)));
                            break e;
                        } else {
                            switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
                            }
                            for (Ue = Ut(e.firstChild), tt = t, ve = !0, bl = null, _t = !0, l = ur(t, null, a, l), t.child = l; l; )
                                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
                        }
                    else {
                        if ((Pl(), a === n)) {
                            t = cl(e, t, l);
                            break e;
                        }
                        at(e, t, a, l);
                    }
                    t = t.child;
                }
                return t;
            case 26:
                return (
                    ki(e, t),
                    e === null
                        ? (l = Ed(t.type, null, t.pendingProps, null))
                            ? (t.memoizedState = l)
                            : ve ||
                              ((l = t.type),
                              (e = t.pendingProps),
                              (a = Pi(ae.current).createElement(l)),
                              (a[et] = t),
                              (a[rt] = e),
                              nt(a, l, e),
                              Ie(a),
                              (t.stateNode = a))
                        : (t.memoizedState = Ed(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
                    null
                );
            case 27:
                return (
                    At(t),
                    e === null &&
                        ve &&
                        ((a = t.stateNode = Nd(t.type, t.pendingProps, ae.current)),
                        (tt = t),
                        (_t = !0),
                        (n = Ue),
                        Ul(t.type) ? ((Ns = n), (Ue = Ut(a.firstChild))) : (Ue = n)),
                    at(e, t, t.pendingProps.children, l),
                    ki(e, t),
                    e === null && (t.flags |= 4194304),
                    t.child
                );
            case 5:
                return (
                    e === null &&
                        ve &&
                        ((n = a = Ue) &&
                            ((a = Wm(a, t.type, t.pendingProps, _t)),
                            a !== null ? ((t.stateNode = a), (tt = t), (Ue = Ut(a.firstChild)), (_t = !1), (n = !0)) : (n = !1)),
                        n || xl(t)),
                    At(t),
                    (n = t.type),
                    (i = t.pendingProps),
                    (u = e !== null ? e.memoizedProps : null),
                    (a = i.children),
                    Ss(n, i) ? (a = null) : u !== null && Ss(n, u) && (t.flags |= 32),
                    t.memoizedState !== null && ((n = pc(e, t, rm, null, null, l)), (Bn._currentValue = n)),
                    ki(e, t),
                    at(e, t, a, l),
                    t.child
                );
            case 6:
                return (
                    e === null &&
                        ve &&
                        ((e = l = Ue) &&
                            ((l = $m(l, t.pendingProps, _t)), l !== null ? ((t.stateNode = l), (tt = t), (Ue = null), (e = !0)) : (e = !1)),
                        e || xl(t)),
                    null
                );
            case 13:
                return hf(e, t, l);
            case 4:
                return (qe(t, t.stateNode.containerInfo), (a = t.pendingProps), e === null ? (t.child = ia(t, null, a, l)) : at(e, t, a, l), t.child);
            case 11:
                return af(e, t, t.type, t.pendingProps, l);
            case 7:
                return (at(e, t, t.pendingProps, l), t.child);
            case 8:
                return (at(e, t, t.pendingProps.children, l), t.child);
            case 12:
                return (at(e, t, t.pendingProps.children, l), t.child);
            case 10:
                return ((a = t.pendingProps), Cl(t, t.type, a.value), at(e, t, a.children, l), t.child);
            case 9:
                return (
                    (n = t.type._context),
                    (a = t.pendingProps.children),
                    ta(t),
                    (n = lt(n)),
                    (a = a(n)),
                    (t.flags |= 1),
                    at(e, t, a, l),
                    t.child
                );
            case 14:
                return nf(e, t, t.type, t.pendingProps, l);
            case 15:
                return uf(e, t, t.type, t.pendingProps, l);
            case 19:
                return vf(e, t, l);
            case 31:
                return pm(e, t, l);
            case 22:
                return cf(e, t, l, t.pendingProps);
            case 24:
                return (
                    ta(t),
                    (a = lt(Ve)),
                    e === null
                        ? ((n = sc()),
                          n === null && ((n = _e), (i = uc()), (n.pooledCache = i), i.refCount++, i !== null && (n.pooledCacheLanes |= l), (n = i)),
                          (t.memoizedState = { parent: a, cache: n }),
                          rc(t),
                          Cl(t, Ve, n))
                        : ((e.lanes & l) !== 0 && (fc(e, t), Sn(t, null, null, l), pn()),
                          (n = e.memoizedState),
                          (i = t.memoizedState),
                          n.parent !== a
                              ? ((n = { parent: a, cache: a }),
                                (t.memoizedState = n),
                                t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n),
                                Cl(t, Ve, a))
                              : ((a = i.cache), Cl(t, Ve, a), a !== n.cache && ic(t, [Ve], l, !0))),
                    at(e, t, t.pendingProps.children, l),
                    t.child
                );
            case 29:
                throw t.pendingProps;
        }
        throw Error(r(156, t.tag));
    }
    function sl(e) {
        e.flags |= 4;
    }
    function Zc(e, t, l, a, n) {
        if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
            if (((e.flags |= 16777216), (n & 335544128) === n))
                if (e.stateNode.complete) e.flags |= 8192;
                else if (Qf()) e.flags |= 8192;
                else throw ((na = xi), oc);
        } else e.flags &= -16777217;
    }
    function yf(e, t) {
        if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0) e.flags &= -16777217;
        else if (((e.flags |= 16777216), !Od(t)))
            if (Qf()) e.flags |= 8192;
            else throw ((na = xi), oc);
    }
    function Hi(e, t) {
        (t !== null && (e.flags |= 4), e.flags & 16384 && ((t = e.tag !== 22 ? Js() : 536870912), (e.lanes |= t), (Ba |= t)));
    }
    function Tn(e, t) {
        if (!ve)
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
    function ke(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            l = 0,
            a = 0;
        if (t)
            for (var n = e.child; n !== null; )
                ((l |= n.lanes | n.childLanes), (a |= n.subtreeFlags & 65011712), (a |= n.flags & 65011712), (n.return = e), (n = n.sibling));
        else for (n = e.child; n !== null; ) ((l |= n.lanes | n.childLanes), (a |= n.subtreeFlags), (a |= n.flags), (n.return = e), (n = n.sibling));
        return ((e.subtreeFlags |= a), (e.childLanes = l), t);
    }
    function bm(e, t, l) {
        var a = t.pendingProps;
        switch ((ec(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return (ke(t), null);
            case 1:
                return (ke(t), null);
            case 3:
                return (
                    (l = t.stateNode),
                    (a = null),
                    e !== null && (a = e.memoizedState.cache),
                    t.memoizedState.cache !== a && (t.flags |= 2048),
                    nl(Ve),
                    Ee(),
                    l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
                    (e === null || e.child === null) &&
                        (Aa(t) ? sl(t) : e === null || (e.memoizedState.isDehydrated && (t.flags & 256) === 0) || ((t.flags |= 1024), lc())),
                    ke(t),
                    null
                );
            case 26:
                var n = t.type,
                    i = t.memoizedState;
                return (
                    e === null
                        ? (sl(t), i !== null ? (ke(t), yf(t, i)) : (ke(t), Zc(t, n, null, a, l)))
                        : i
                          ? i !== e.memoizedState
                              ? (sl(t), ke(t), yf(t, i))
                              : (ke(t), (t.flags &= -16777217))
                          : ((e = e.memoizedProps), e !== a && sl(t), ke(t), Zc(t, n, e, a, l)),
                    null
                );
            case 27:
                if ((Lt(t), (l = ae.current), (n = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== a && sl(t);
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(r(166));
                        return (ke(t), null);
                    }
                    ((e = H.current), Aa(t) ? Wo(t) : ((e = Nd(n, a, l)), (t.stateNode = e), sl(t)));
                }
                return (ke(t), null);
            case 5:
                if ((Lt(t), (n = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== a && sl(t);
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(r(166));
                        return (ke(t), null);
                    }
                    if (((i = H.current), Aa(t))) Wo(t);
                    else {
                        var u = Pi(ae.current);
                        switch (i) {
                            case 1:
                                i = u.createElementNS('http://www.w3.org/2000/svg', n);
                                break;
                            case 2:
                                i = u.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                                break;
                            default:
                                switch (n) {
                                    case 'svg':
                                        i = u.createElementNS('http://www.w3.org/2000/svg', n);
                                        break;
                                    case 'math':
                                        i = u.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                                        break;
                                    case 'script':
                                        ((i = u.createElement('div')), (i.innerHTML = '<script><\/script>'), (i = i.removeChild(i.firstChild)));
                                        break;
                                    case 'select':
                                        ((i = typeof a.is == 'string' ? u.createElement('select', { is: a.is }) : u.createElement('select')),
                                            a.multiple ? (i.multiple = !0) : a.size && (i.size = a.size));
                                        break;
                                    default:
                                        i = typeof a.is == 'string' ? u.createElement(n, { is: a.is }) : u.createElement(n);
                                }
                        }
                        ((i[et] = t), (i[rt] = a));
                        e: for (u = t.child; u !== null; ) {
                            if (u.tag === 5 || u.tag === 6) i.appendChild(u.stateNode);
                            else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                                ((u.child.return = u), (u = u.child));
                                continue;
                            }
                            if (u === t) break e;
                            for (; u.sibling === null; ) {
                                if (u.return === null || u.return === t) break e;
                                u = u.return;
                            }
                            ((u.sibling.return = u.return), (u = u.sibling));
                        }
                        t.stateNode = i;
                        e: switch ((nt(i, n, a), n)) {
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
                        a && sl(t);
                    }
                }
                return (ke(t), Zc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l), null);
            case 6:
                if (e && t.stateNode != null) e.memoizedProps !== a && sl(t);
                else {
                    if (typeof a != 'string' && t.stateNode === null) throw Error(r(166));
                    if (((e = ae.current), Aa(t))) {
                        if (((e = t.stateNode), (l = t.memoizedProps), (a = null), (n = tt), n !== null))
                            switch (n.tag) {
                                case 27:
                                case 5:
                                    a = n.memoizedProps;
                            }
                        ((e[et] = t),
                            (e = !!(e.nodeValue === l || (a !== null && a.suppressHydrationWarning === !0) || hd(e.nodeValue, l))),
                            e || xl(t, !0));
                    } else ((e = Pi(e).createTextNode(a)), (e[et] = t), (t.stateNode = e));
                }
                return (ke(t), null);
            case 31:
                if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
                    if (((a = Aa(t)), l !== null)) {
                        if (e === null) {
                            if (!a) throw Error(r(318));
                            if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(r(557));
                            e[et] = t;
                        } else (Pl(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
                        (ke(t), (e = !1));
                    } else ((l = lc()), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), (e = !0));
                    if (!e) return t.flags & 256 ? (Ct(t), t) : (Ct(t), null);
                    if ((t.flags & 128) !== 0) throw Error(r(558));
                }
                return (ke(t), null);
            case 13:
                if (((a = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
                    if (((n = Aa(t)), a !== null && a.dehydrated !== null)) {
                        if (e === null) {
                            if (!n) throw Error(r(318));
                            if (((n = t.memoizedState), (n = n !== null ? n.dehydrated : null), !n)) throw Error(r(317));
                            n[et] = t;
                        } else (Pl(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
                        (ke(t), (n = !1));
                    } else ((n = lc()), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), (n = !0));
                    if (!n) return t.flags & 256 ? (Ct(t), t) : (Ct(t), null);
                }
                return (
                    Ct(t),
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
                          Hi(t, t.updateQueue),
                          ke(t),
                          null)
                );
            case 4:
                return (Ee(), e === null && ms(t.stateNode.containerInfo), ke(t), null);
            case 10:
                return (nl(t.type), ke(t), null);
            case 19:
                if ((T(Qe), (a = t.memoizedState), a === null)) return (ke(t), null);
                if (((n = (t.flags & 128) !== 0), (i = a.rendering), i === null))
                    if (n) Tn(a, !1);
                    else {
                        if (Ge !== 0 || (e !== null && (e.flags & 128) !== 0))
                            for (e = t.child; e !== null; ) {
                                if (((i = Ti(e)), i !== null)) {
                                    for (
                                        t.flags |= 128,
                                            Tn(a, !1),
                                            e = i.updateQueue,
                                            t.updateQueue = e,
                                            Hi(t, e),
                                            t.subtreeFlags = 0,
                                            e = l,
                                            l = t.child;
                                        l !== null;

                                    )
                                        (Xo(l, e), (l = l.sibling));
                                    return (R(Qe, (Qe.current & 1) | 2), ve && ll(t, a.treeForkCount), t.child);
                                }
                                e = e.sibling;
                            }
                        a.tail !== null && ct() > Qi && ((t.flags |= 128), (n = !0), Tn(a, !1), (t.lanes = 4194304));
                    }
                else {
                    if (!n)
                        if (((e = Ti(i)), e !== null)) {
                            if (
                                ((t.flags |= 128),
                                (n = !0),
                                (e = e.updateQueue),
                                (t.updateQueue = e),
                                Hi(t, e),
                                Tn(a, !0),
                                a.tail === null && a.tailMode === 'hidden' && !i.alternate && !ve)
                            )
                                return (ke(t), null);
                        } else
                            2 * ct() - a.renderingStartTime > Qi && l !== 536870912 && ((t.flags |= 128), (n = !0), Tn(a, !1), (t.lanes = 4194304));
                    a.isBackwards
                        ? ((i.sibling = t.child), (t.child = i))
                        : ((e = a.last), e !== null ? (e.sibling = i) : (t.child = i), (a.last = i));
                }
                return a.tail !== null
                    ? ((e = a.tail),
                      (a.rendering = e),
                      (a.tail = e.sibling),
                      (a.renderingStartTime = ct()),
                      (e.sibling = null),
                      (l = Qe.current),
                      R(Qe, n ? (l & 1) | 2 : l & 1),
                      ve && ll(t, a.treeForkCount),
                      e)
                    : (ke(t), null);
            case 22:
            case 23:
                return (
                    Ct(t),
                    vc(),
                    (a = t.memoizedState !== null),
                    e !== null ? (e.memoizedState !== null) !== a && (t.flags |= 8192) : a && (t.flags |= 8192),
                    a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ke(t),
                    (l = t.updateQueue),
                    l !== null && Hi(t, l.retryQueue),
                    (l = null),
                    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
                    (a = null),
                    t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
                    a !== l && (t.flags |= 2048),
                    e !== null && T(la),
                    null
                );
            case 24:
                return ((l = null), e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), nl(Ve), ke(t), null);
            case 25:
                return null;
            case 30:
                return null;
        }
        throw Error(r(156, t.tag));
    }
    function xm(e, t) {
        switch ((ec(t), t.tag)) {
            case 1:
                return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 3:
                return (nl(Ve), Ee(), (e = t.flags), (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 26:
            case 27:
            case 5:
                return (Lt(t), null);
            case 31:
                if (t.memoizedState !== null) {
                    if ((Ct(t), t.alternate === null)) throw Error(r(340));
                    Pl();
                }
                return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 13:
                if ((Ct(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                    if (t.alternate === null) throw Error(r(340));
                    Pl();
                }
                return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 19:
                return (T(Qe), null);
            case 4:
                return (Ee(), null);
            case 10:
                return (nl(t.type), null);
            case 22:
            case 23:
                return (Ct(t), vc(), e !== null && T(la), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
            case 24:
                return (nl(Ve), null);
            case 25:
                return null;
            default:
                return null;
        }
    }
    function pf(e, t) {
        switch ((ec(t), t.tag)) {
            case 3:
                (nl(Ve), Ee());
                break;
            case 26:
            case 27:
            case 5:
                Lt(t);
                break;
            case 4:
                Ee();
                break;
            case 31:
                t.memoizedState !== null && Ct(t);
                break;
            case 13:
                Ct(t);
                break;
            case 19:
                T(Qe);
                break;
            case 10:
                nl(t.type);
                break;
            case 22:
            case 23:
                (Ct(t), vc(), e !== null && T(la));
                break;
            case 24:
                nl(Ve);
        }
    }
    function An(e, t) {
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
                            u = l.inst;
                        ((a = i()), (u.destroy = a));
                    }
                    l = l.next;
                } while (l !== n);
            }
        } catch (s) {
            Te(t, t.return, s);
        }
    }
    function Ml(e, t, l) {
        try {
            var a = t.updateQueue,
                n = a !== null ? a.lastEffect : null;
            if (n !== null) {
                var i = n.next;
                a = i;
                do {
                    if ((a.tag & e) === e) {
                        var u = a.inst,
                            s = u.destroy;
                        if (s !== void 0) {
                            ((u.destroy = void 0), (n = t));
                            var o = l,
                                y = s;
                            try {
                                y();
                            } catch (N) {
                                Te(n, o, N);
                            }
                        }
                    }
                    a = a.next;
                } while (a !== i);
            }
        } catch (N) {
            Te(t, t.return, N);
        }
    }
    function Sf(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var l = e.stateNode;
            try {
                sr(t, l);
            } catch (a) {
                Te(e, e.return, a);
            }
        }
    }
    function bf(e, t, l) {
        ((l.props = ca(e.type, e.memoizedProps)), (l.state = e.memoizedState));
        try {
            l.componentWillUnmount();
        } catch (a) {
            Te(e, t, a);
        }
    }
    function En(e, t) {
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
            Te(e, t, n);
        }
    }
    function Wt(e, t) {
        var l = e.ref,
            a = e.refCleanup;
        if (l !== null)
            if (typeof a == 'function')
                try {
                    a();
                } catch (n) {
                    Te(e, t, n);
                } finally {
                    ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
                }
            else if (typeof l == 'function')
                try {
                    l(null);
                } catch (n) {
                    Te(e, t, n);
                }
            else l.current = null;
    }
    function xf(e) {
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
            Te(e, e.return, n);
        }
    }
    function Kc(e, t, l) {
        try {
            var a = e.stateNode;
            (Qm(a, e.type, l, t), (a[rt] = t));
        } catch (n) {
            Te(e, e.return, n);
        }
    }
    function Cf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Ul(e.type)) || e.tag === 4;
    }
    function Jc(e) {
        e: for (;;) {
            for (; e.sibling === null; ) {
                if (e.return === null || Cf(e.return)) return null;
                e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if ((e.tag === 27 && Ul(e.type)) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                ((e.child.return = e), (e = e.child));
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function Wc(e, t, l) {
        var a = e.tag;
        if (a === 5 || a === 6)
            ((e = e.stateNode),
                t
                    ? (l.nodeType === 9 ? l.body : l.nodeName === 'HTML' ? l.ownerDocument.body : l).insertBefore(e, t)
                    : ((t = l.nodeType === 9 ? l.body : l.nodeName === 'HTML' ? l.ownerDocument.body : l),
                      t.appendChild(e),
                      (l = l._reactRootContainer),
                      l != null || t.onclick !== null || (t.onclick = Pt)));
        else if (a !== 4 && (a === 27 && Ul(e.type) && ((l = e.stateNode), (t = null)), (e = e.child), e !== null))
            for (Wc(e, t, l), e = e.sibling; e !== null; ) (Wc(e, t, l), (e = e.sibling));
    }
    function Bi(e, t, l) {
        var a = e.tag;
        if (a === 5 || a === 6) ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e));
        else if (a !== 4 && (a === 27 && Ul(e.type) && (l = e.stateNode), (e = e.child), e !== null))
            for (Bi(e, t, l), e = e.sibling; e !== null; ) (Bi(e, t, l), (e = e.sibling));
    }
    function jf(e) {
        var t = e.stateNode,
            l = e.memoizedProps;
        try {
            for (var a = e.type, n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
            (nt(t, a, l), (t[et] = e), (t[rt] = l));
        } catch (i) {
            Te(e, e.return, i);
        }
    }
    var ol = !1,
        Je = !1,
        $c = !1,
        Nf = typeof WeakSet == 'function' ? WeakSet : Set,
        Pe = null;
    function Cm(e, t) {
        if (((e = e.containerInfo), (ys = uu), (e = Uo(e)), Qu(e))) {
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
                        var u = 0,
                            s = -1,
                            o = -1,
                            y = 0,
                            N = 0,
                            E = e,
                            b = null;
                        t: for (;;) {
                            for (
                                var C;
                                E !== l || (n !== 0 && E.nodeType !== 3) || (s = u + n),
                                    E !== i || (a !== 0 && E.nodeType !== 3) || (o = u + a),
                                    E.nodeType === 3 && (u += E.nodeValue.length),
                                    (C = E.firstChild) !== null;

                            )
                                ((b = E), (E = C));
                            for (;;) {
                                if (E === e) break t;
                                if ((b === l && ++y === n && (s = u), b === i && ++N === a && (o = u), (C = E.nextSibling) !== null)) break;
                                ((E = b), (b = E.parentNode));
                            }
                            E = C;
                        }
                        l = s === -1 || o === -1 ? null : { start: s, end: o };
                    } else l = null;
                }
            l = l || { start: 0, end: 0 };
        } else l = null;
        for (ps = { focusedElem: e, selectionRange: l }, uu = !1, Pe = t; Pe !== null; )
            if (((t = Pe), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) ((e.return = t), (Pe = e));
            else
                for (; Pe !== null; ) {
                    switch (((t = Pe), (i = t.alternate), (e = t.flags), t.tag)) {
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
                                    var Q = ca(l.type, n);
                                    ((e = a.getSnapshotBeforeUpdate(Q, i)), (a.__reactInternalSnapshotBeforeUpdate = e));
                                } catch (I) {
                                    Te(l, l.return, I);
                                }
                            }
                            break;
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)) xs(e);
                                else if (l === 1)
                                    switch (e.nodeName) {
                                        case 'HEAD':
                                        case 'HTML':
                                        case 'BODY':
                                            xs(e);
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
                        ((e.return = t.return), (Pe = e));
                        break;
                    }
                    Pe = t.return;
                }
    }
    function Tf(e, t, l) {
        var a = l.flags;
        switch (l.tag) {
            case 0:
            case 11:
            case 15:
                (fl(e, l), a & 4 && An(5, l));
                break;
            case 1:
                if ((fl(e, l), a & 4))
                    if (((e = l.stateNode), t === null))
                        try {
                            e.componentDidMount();
                        } catch (u) {
                            Te(l, l.return, u);
                        }
                    else {
                        var n = ca(l.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (u) {
                            Te(l, l.return, u);
                        }
                    }
                (a & 64 && Sf(l), a & 512 && En(l, l.return));
                break;
            case 3:
                if ((fl(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
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
                        sr(e, t);
                    } catch (u) {
                        Te(l, l.return, u);
                    }
                }
                break;
            case 27:
                t === null && a & 4 && jf(l);
            case 26:
            case 5:
                (fl(e, l), t === null && a & 4 && xf(l), a & 512 && En(l, l.return));
                break;
            case 12:
                fl(e, l);
                break;
            case 31:
                (fl(e, l), a & 4 && Mf(e, l));
                break;
            case 13:
                (fl(e, l),
                    a & 4 && zf(e, l),
                    a & 64 && ((e = l.memoizedState), e !== null && ((e = e.dehydrated), e !== null && ((l = Dm.bind(null, l)), Fm(e, l)))));
                break;
            case 22:
                if (((a = l.memoizedState !== null || ol), !a)) {
                    ((t = (t !== null && t.memoizedState !== null) || Je), (n = ol));
                    var i = Je;
                    ((ol = a), (Je = t) && !i ? dl(e, l, (l.subtreeFlags & 8772) !== 0) : fl(e, l), (ol = n), (Je = i));
                }
                break;
            case 30:
                break;
            default:
                fl(e, l);
        }
    }
    function Af(e) {
        var t = e.alternate;
        (t !== null && ((e.alternate = null), Af(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            e.tag === 5 && ((t = e.stateNode), t !== null && Au(t)),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null));
    }
    var He = null,
        dt = !1;
    function rl(e, t, l) {
        for (l = l.child; l !== null; ) (Ef(e, t, l), (l = l.sibling));
    }
    function Ef(e, t, l) {
        if (Le && typeof Le.onCommitFiberUnmount == 'function')
            try {
                Le.onCommitFiberUnmount(G, l);
            } catch {}
        switch (l.tag) {
            case 26:
                (Je || Wt(l, t),
                    rl(e, t, l),
                    l.memoizedState ? l.memoizedState.count-- : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
                break;
            case 27:
                Je || Wt(l, t);
                var a = He,
                    n = dt;
                (Ul(l.type) && ((He = l.stateNode), (dt = !1)), rl(e, t, l), kn(l.stateNode), (He = a), (dt = n));
                break;
            case 5:
                Je || Wt(l, t);
            case 6:
                if (((a = He), (n = dt), (He = null), rl(e, t, l), (He = a), (dt = n), He !== null))
                    if (dt)
                        try {
                            (He.nodeType === 9 ? He.body : He.nodeName === 'HTML' ? He.ownerDocument.body : He).removeChild(l.stateNode);
                        } catch (i) {
                            Te(l, t, i);
                        }
                    else
                        try {
                            He.removeChild(l.stateNode);
                        } catch (i) {
                            Te(l, t, i);
                        }
                break;
            case 18:
                He !== null &&
                    (dt
                        ? ((e = He), Sd(e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e, l.stateNode), Ka(e))
                        : Sd(He, l.stateNode));
                break;
            case 4:
                ((a = He), (n = dt), (He = l.stateNode.containerInfo), (dt = !0), rl(e, t, l), (He = a), (dt = n));
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                (Ml(2, l, t), Je || Ml(4, l, t), rl(e, t, l));
                break;
            case 1:
                (Je || (Wt(l, t), (a = l.stateNode), typeof a.componentWillUnmount == 'function' && bf(l, t, a)), rl(e, t, l));
                break;
            case 21:
                rl(e, t, l);
                break;
            case 22:
                ((Je = (a = Je) || l.memoizedState !== null), rl(e, t, l), (Je = a));
                break;
            default:
                rl(e, t, l);
        }
    }
    function Mf(e, t) {
        if (t.memoizedState === null && ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))) {
            e = e.dehydrated;
            try {
                Ka(e);
            } catch (l) {
                Te(t, t.return, l);
            }
        }
    }
    function zf(e, t) {
        if (t.memoizedState === null && ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null))))
            try {
                Ka(e);
            } catch (l) {
                Te(t, t.return, l);
            }
    }
    function jm(e) {
        switch (e.tag) {
            case 31:
            case 13:
            case 19:
                var t = e.stateNode;
                return (t === null && (t = e.stateNode = new Nf()), t);
            case 22:
                return ((e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new Nf()), t);
            default:
                throw Error(r(435, e.tag));
        }
    }
    function qi(e, t) {
        var l = jm(e);
        t.forEach(function (a) {
            if (!l.has(a)) {
                l.add(a);
                var n = Om.bind(null, e, a);
                a.then(n, n);
            }
        });
    }
    function ht(e, t) {
        var l = t.deletions;
        if (l !== null)
            for (var a = 0; a < l.length; a++) {
                var n = l[a],
                    i = e,
                    u = t,
                    s = u;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                        case 27:
                            if (Ul(s.type)) {
                                ((He = s.stateNode), (dt = !1));
                                break e;
                            }
                            break;
                        case 5:
                            ((He = s.stateNode), (dt = !1));
                            break e;
                        case 3:
                        case 4:
                            ((He = s.stateNode.containerInfo), (dt = !0));
                            break e;
                    }
                    s = s.return;
                }
                if (He === null) throw Error(r(160));
                (Ef(i, u, n), (He = null), (dt = !1), (i = n.alternate), i !== null && (i.return = null), (n.return = null));
            }
        if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (wf(t, e), (t = t.sibling));
    }
    var qt = null;
    function wf(e, t) {
        var l = e.alternate,
            a = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                (ht(t, e), mt(e), a & 4 && (Ml(3, e, e.return), An(3, e), Ml(5, e, e.return)));
                break;
            case 1:
                (ht(t, e),
                    mt(e),
                    a & 512 && (Je || l === null || Wt(l, l.return)),
                    a & 64 &&
                        ol &&
                        ((e = e.updateQueue),
                        e !== null &&
                            ((a = e.callbacks),
                            a !== null && ((l = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
                break;
            case 26:
                var n = qt;
                if ((ht(t, e), mt(e), a & 512 && (Je || l === null || Wt(l, l.return)), a & 4)) {
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
                                                    i[Pa] ||
                                                    i[et] ||
                                                    i.namespaceURI === 'http://www.w3.org/2000/svg' ||
                                                    i.hasAttribute('itemprop')) &&
                                                    ((i = n.createElement(a)), n.head.insertBefore(i, n.querySelector('head > title'))),
                                                nt(i, a, l),
                                                (i[et] = e),
                                                Ie(i),
                                                (a = i));
                                            break e;
                                        case 'link':
                                            var u = wd('link', 'href', n).get(a + (l.href || ''));
                                            if (u) {
                                                for (var s = 0; s < u.length; s++)
                                                    if (
                                                        ((i = u[s]),
                                                        i.getAttribute('href') === (l.href == null || l.href === '' ? null : l.href) &&
                                                            i.getAttribute('rel') === (l.rel == null ? null : l.rel) &&
                                                            i.getAttribute('title') === (l.title == null ? null : l.title) &&
                                                            i.getAttribute('crossorigin') === (l.crossOrigin == null ? null : l.crossOrigin))
                                                    ) {
                                                        u.splice(s, 1);
                                                        break t;
                                                    }
                                            }
                                            ((i = n.createElement(a)), nt(i, a, l), n.head.appendChild(i));
                                            break;
                                        case 'meta':
                                            if ((u = wd('meta', 'content', n).get(a + (l.content || '')))) {
                                                for (s = 0; s < u.length; s++)
                                                    if (
                                                        ((i = u[s]),
                                                        i.getAttribute('content') === (l.content == null ? null : '' + l.content) &&
                                                            i.getAttribute('name') === (l.name == null ? null : l.name) &&
                                                            i.getAttribute('property') === (l.property == null ? null : l.property) &&
                                                            i.getAttribute('http-equiv') === (l.httpEquiv == null ? null : l.httpEquiv) &&
                                                            i.getAttribute('charset') === (l.charSet == null ? null : l.charSet))
                                                    ) {
                                                        u.splice(s, 1);
                                                        break t;
                                                    }
                                            }
                                            ((i = n.createElement(a)), nt(i, a, l), n.head.appendChild(i));
                                            break;
                                        default:
                                            throw Error(r(468, a));
                                    }
                                    ((i[et] = e), Ie(i), (a = i));
                                }
                                e.stateNode = a;
                            } else Dd(n, e.type, e.stateNode);
                        else e.stateNode = zd(n, a, e.memoizedProps);
                    else
                        i !== a
                            ? (i === null ? l.stateNode !== null && ((l = l.stateNode), l.parentNode.removeChild(l)) : i.count--,
                              a === null ? Dd(n, e.type, e.stateNode) : zd(n, a, e.memoizedProps))
                            : a === null && e.stateNode !== null && Kc(e, e.memoizedProps, l.memoizedProps);
                }
                break;
            case 27:
                (ht(t, e), mt(e), a & 512 && (Je || l === null || Wt(l, l.return)), l !== null && a & 4 && Kc(e, e.memoizedProps, l.memoizedProps));
                break;
            case 5:
                if ((ht(t, e), mt(e), a & 512 && (Je || l === null || Wt(l, l.return)), e.flags & 32)) {
                    n = e.stateNode;
                    try {
                        ga(n, '');
                    } catch (Q) {
                        Te(e, e.return, Q);
                    }
                }
                (a & 4 && e.stateNode != null && ((n = e.memoizedProps), Kc(e, n, l !== null ? l.memoizedProps : n)), a & 1024 && ($c = !0));
                break;
            case 6:
                if ((ht(t, e), mt(e), a & 4)) {
                    if (e.stateNode === null) throw Error(r(162));
                    ((a = e.memoizedProps), (l = e.stateNode));
                    try {
                        l.nodeValue = a;
                    } catch (Q) {
                        Te(e, e.return, Q);
                    }
                }
                break;
            case 3:
                if (
                    ((lu = null),
                    (n = qt),
                    (qt = eu(t.containerInfo)),
                    ht(t, e),
                    (qt = n),
                    mt(e),
                    a & 4 && l !== null && l.memoizedState.isDehydrated)
                )
                    try {
                        Ka(t.containerInfo);
                    } catch (Q) {
                        Te(e, e.return, Q);
                    }
                $c && (($c = !1), Df(e));
                break;
            case 4:
                ((a = qt), (qt = eu(e.stateNode.containerInfo)), ht(t, e), mt(e), (qt = a));
                break;
            case 12:
                (ht(t, e), mt(e));
                break;
            case 31:
                (ht(t, e), mt(e), a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), qi(e, a))));
                break;
            case 13:
                (ht(t, e),
                    mt(e),
                    e.child.flags & 8192 && (e.memoizedState !== null) != (l !== null && l.memoizedState !== null) && (Gi = ct()),
                    a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), qi(e, a))));
                break;
            case 22:
                n = e.memoizedState !== null;
                var o = l !== null && l.memoizedState !== null,
                    y = ol,
                    N = Je;
                if (((ol = y || n), (Je = N || o), ht(t, e), (Je = N), (ol = y), mt(e), a & 8192))
                    e: for (
                        t = e.stateNode,
                            t._visibility = n ? t._visibility & -2 : t._visibility | 1,
                            n && (l === null || o || ol || Je || sa(e)),
                            l = null,
                            t = e;
                        ;

                    ) {
                        if (t.tag === 5 || t.tag === 26) {
                            if (l === null) {
                                o = l = t;
                                try {
                                    if (((i = o.stateNode), n))
                                        ((u = i.style),
                                            typeof u.setProperty == 'function'
                                                ? u.setProperty('display', 'none', 'important')
                                                : (u.display = 'none'));
                                    else {
                                        s = o.stateNode;
                                        var E = o.memoizedProps.style,
                                            b = E != null && E.hasOwnProperty('display') ? E.display : null;
                                        s.style.display = b == null || typeof b == 'boolean' ? '' : ('' + b).trim();
                                    }
                                } catch (Q) {
                                    Te(o, o.return, Q);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (l === null) {
                                o = t;
                                try {
                                    o.stateNode.nodeValue = n ? '' : o.memoizedProps;
                                } catch (Q) {
                                    Te(o, o.return, Q);
                                }
                            }
                        } else if (t.tag === 18) {
                            if (l === null) {
                                o = t;
                                try {
                                    var C = o.stateNode;
                                    n ? bd(C, !0) : bd(o.stateNode, !1);
                                } catch (Q) {
                                    Te(o, o.return, Q);
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
                a & 4 && ((a = e.updateQueue), a !== null && ((l = a.retryQueue), l !== null && ((a.retryQueue = null), qi(e, l))));
                break;
            case 19:
                (ht(t, e), mt(e), a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), qi(e, a))));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                (ht(t, e), mt(e));
        }
    }
    function mt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var l, a = e.return; a !== null; ) {
                    if (Cf(a)) {
                        l = a;
                        break;
                    }
                    a = a.return;
                }
                if (l == null) throw Error(r(160));
                switch (l.tag) {
                    case 27:
                        var n = l.stateNode,
                            i = Jc(e);
                        Bi(e, i, n);
                        break;
                    case 5:
                        var u = l.stateNode;
                        l.flags & 32 && (ga(u, ''), (l.flags &= -33));
                        var s = Jc(e);
                        Bi(e, s, u);
                        break;
                    case 3:
                    case 4:
                        var o = l.stateNode.containerInfo,
                            y = Jc(e);
                        Wc(e, y, o);
                        break;
                    default:
                        throw Error(r(161));
                }
            } catch (N) {
                Te(e, e.return, N);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function Df(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                (Df(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
            }
    }
    function fl(e, t) {
        if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) (Tf(e, t.alternate, t), (t = t.sibling));
    }
    function sa(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    (Ml(4, t, t.return), sa(t));
                    break;
                case 1:
                    Wt(t, t.return);
                    var l = t.stateNode;
                    (typeof l.componentWillUnmount == 'function' && bf(t, t.return, l), sa(t));
                    break;
                case 27:
                    kn(t.stateNode);
                case 26:
                case 5:
                    (Wt(t, t.return), sa(t));
                    break;
                case 22:
                    t.memoizedState === null && sa(t);
                    break;
                case 30:
                    sa(t);
                    break;
                default:
                    sa(t);
            }
            e = e.sibling;
        }
    }
    function dl(e, t, l) {
        for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
            var a = t.alternate,
                n = e,
                i = t,
                u = i.flags;
            switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    (dl(n, i, l), An(4, i));
                    break;
                case 1:
                    if ((dl(n, i, l), (a = i), (n = a.stateNode), typeof n.componentDidMount == 'function'))
                        try {
                            n.componentDidMount();
                        } catch (y) {
                            Te(a, a.return, y);
                        }
                    if (((a = i), (n = a.updateQueue), n !== null)) {
                        var s = a.stateNode;
                        try {
                            var o = n.shared.hiddenCallbacks;
                            if (o !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < o.length; n++) cr(o[n], s);
                        } catch (y) {
                            Te(a, a.return, y);
                        }
                    }
                    (l && u & 64 && Sf(i), En(i, i.return));
                    break;
                case 27:
                    jf(i);
                case 26:
                case 5:
                    (dl(n, i, l), l && a === null && u & 4 && xf(i), En(i, i.return));
                    break;
                case 12:
                    dl(n, i, l);
                    break;
                case 31:
                    (dl(n, i, l), l && u & 4 && Mf(n, i));
                    break;
                case 13:
                    (dl(n, i, l), l && u & 4 && zf(n, i));
                    break;
                case 22:
                    (i.memoizedState === null && dl(n, i, l), En(i, i.return));
                    break;
                case 30:
                    break;
                default:
                    dl(n, i, l);
            }
            t = t.sibling;
        }
    }
    function Fc(e, t) {
        var l = null;
        (e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
            (e = null),
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
            e !== l && (e != null && e.refCount++, l != null && hn(l)));
    }
    function Ic(e, t) {
        ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && hn(e)));
    }
    function Yt(e, t, l, a) {
        if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Of(e, t, l, a), (t = t.sibling));
    }
    function Of(e, t, l, a) {
        var n = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                (Yt(e, t, l, a), n & 2048 && An(9, t));
                break;
            case 1:
                Yt(e, t, l, a);
                break;
            case 3:
                (Yt(e, t, l, a),
                    n & 2048 &&
                        ((e = null),
                        t.alternate !== null && (e = t.alternate.memoizedState.cache),
                        (t = t.memoizedState.cache),
                        t !== e && (t.refCount++, e != null && hn(e))));
                break;
            case 12:
                if (n & 2048) {
                    (Yt(e, t, l, a), (e = t.stateNode));
                    try {
                        var i = t.memoizedProps,
                            u = i.id,
                            s = i.onPostCommit;
                        typeof s == 'function' && s(u, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
                    } catch (o) {
                        Te(t, t.return, o);
                    }
                } else Yt(e, t, l, a);
                break;
            case 31:
                Yt(e, t, l, a);
                break;
            case 13:
                Yt(e, t, l, a);
                break;
            case 23:
                break;
            case 22:
                ((i = t.stateNode),
                    (u = t.alternate),
                    t.memoizedState !== null
                        ? i._visibility & 2
                            ? Yt(e, t, l, a)
                            : Mn(e, t)
                        : i._visibility & 2
                          ? Yt(e, t, l, a)
                          : ((i._visibility |= 2), ka(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)),
                    n & 2048 && Fc(u, t));
                break;
            case 24:
                (Yt(e, t, l, a), n & 2048 && Ic(t.alternate, t));
                break;
            default:
                Yt(e, t, l, a);
        }
    }
    function ka(e, t, l, a, n) {
        for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
            var i = e,
                u = t,
                s = l,
                o = a,
                y = u.flags;
            switch (u.tag) {
                case 0:
                case 11:
                case 15:
                    (ka(i, u, s, o, n), An(8, u));
                    break;
                case 23:
                    break;
                case 22:
                    var N = u.stateNode;
                    (u.memoizedState !== null ? (N._visibility & 2 ? ka(i, u, s, o, n) : Mn(i, u)) : ((N._visibility |= 2), ka(i, u, s, o, n)),
                        n && y & 2048 && Fc(u.alternate, u));
                    break;
                case 24:
                    (ka(i, u, s, o, n), n && y & 2048 && Ic(u.alternate, u));
                    break;
                default:
                    ka(i, u, s, o, n);
            }
            t = t.sibling;
        }
    }
    function Mn(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var l = e,
                    a = t,
                    n = a.flags;
                switch (a.tag) {
                    case 22:
                        (Mn(l, a), n & 2048 && Fc(a.alternate, a));
                        break;
                    case 24:
                        (Mn(l, a), n & 2048 && Ic(a.alternate, a));
                        break;
                    default:
                        Mn(l, a);
                }
                t = t.sibling;
            }
    }
    var zn = 8192;
    function La(e, t, l) {
        if (e.subtreeFlags & zn) for (e = e.child; e !== null; ) (_f(e, t, l), (e = e.sibling));
    }
    function _f(e, t, l) {
        switch (e.tag) {
            case 26:
                (La(e, t, l), e.flags & zn && e.memoizedState !== null && ov(l, qt, e.memoizedState, e.memoizedProps));
                break;
            case 5:
                La(e, t, l);
                break;
            case 3:
            case 4:
                var a = qt;
                ((qt = eu(e.stateNode.containerInfo)), La(e, t, l), (qt = a));
                break;
            case 22:
                e.memoizedState === null &&
                    ((a = e.alternate), a !== null && a.memoizedState !== null ? ((a = zn), (zn = 16777216), La(e, t, l), (zn = a)) : La(e, t, l));
                break;
            default:
                La(e, t, l);
        }
    }
    function Rf(e) {
        var t = e.alternate;
        if (t !== null && ((e = t.child), e !== null)) {
            t.child = null;
            do ((t = e.sibling), (e.sibling = null), (e = t));
            while (e !== null);
        }
    }
    function wn(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var a = t[l];
                    ((Pe = a), kf(a, e));
                }
            Rf(e);
        }
        if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Uf(e), (e = e.sibling));
    }
    function Uf(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                (wn(e), e.flags & 2048 && Ml(9, e, e.return));
                break;
            case 3:
                wn(e);
                break;
            case 12:
                wn(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? ((t._visibility &= -3), Yi(e)) : wn(e);
                break;
            default:
                wn(e);
        }
    }
    function Yi(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var a = t[l];
                    ((Pe = a), kf(a, e));
                }
            Rf(e);
        }
        for (e = e.child; e !== null; ) {
            switch (((t = e), t.tag)) {
                case 0:
                case 11:
                case 15:
                    (Ml(8, t, t.return), Yi(t));
                    break;
                case 22:
                    ((l = t.stateNode), l._visibility & 2 && ((l._visibility &= -3), Yi(t)));
                    break;
                default:
                    Yi(t);
            }
            e = e.sibling;
        }
    }
    function kf(e, t) {
        for (; Pe !== null; ) {
            var l = Pe;
            switch (l.tag) {
                case 0:
                case 11:
                case 15:
                    Ml(8, l, t);
                    break;
                case 23:
                case 22:
                    if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                        var a = l.memoizedState.cachePool.pool;
                        a != null && a.refCount++;
                    }
                    break;
                case 24:
                    hn(l.memoizedState.cache);
            }
            if (((a = l.child), a !== null)) ((a.return = l), (Pe = a));
            else
                e: for (l = e; Pe !== null; ) {
                    a = Pe;
                    var n = a.sibling,
                        i = a.return;
                    if ((Af(a), a === l)) {
                        Pe = null;
                        break e;
                    }
                    if (n !== null) {
                        ((n.return = i), (Pe = n));
                        break e;
                    }
                    Pe = i;
                }
        }
    }
    var Nm = {
            getCacheForType: function (e) {
                var t = lt(Ve),
                    l = t.data.get(e);
                return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
            },
            cacheSignal: function () {
                return lt(Ve).controller.signal;
            },
        },
        Tm = typeof WeakMap == 'function' ? WeakMap : Map,
        Se = 0,
        _e = null,
        re = null,
        de = 0,
        Ne = 0,
        jt = null,
        zl = !1,
        Ha = !1,
        Pc = !1,
        hl = 0,
        Ge = 0,
        wl = 0,
        oa = 0,
        es = 0,
        Nt = 0,
        Ba = 0,
        Dn = null,
        vt = null,
        ts = !1,
        Gi = 0,
        Lf = 0,
        Qi = 1 / 0,
        Xi = null,
        Dl = null,
        Fe = 0,
        Ol = null,
        qa = null,
        ml = 0,
        ls = 0,
        as = null,
        Hf = null,
        On = 0,
        ns = null;
    function Tt() {
        return (Se & 2) !== 0 && de !== 0 ? de & -de : p.T !== null ? rs() : Is();
    }
    function Bf() {
        if (Nt === 0)
            if ((de & 536870912) === 0 || ve) {
                var e = In;
                ((In <<= 1), (In & 3932160) === 0 && (In = 262144), (Nt = e));
            } else Nt = 536870912;
        return ((e = xt.current), e !== null && (e.flags |= 32), Nt);
    }
    function gt(e, t, l) {
        (((e === _e && (Ne === 2 || Ne === 9)) || e.cancelPendingCommit !== null) && (Ya(e, 0), _l(e, de, Nt, !1)),
            Ia(e, l),
            ((Se & 2) === 0 || e !== _e) && (e === _e && ((Se & 2) === 0 && (oa |= l), Ge === 4 && _l(e, de, Nt, !1)), $t(e)));
    }
    function qf(e, t, l) {
        if ((Se & 6) !== 0) throw Error(r(327));
        var a = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Fa(e, t),
            n = a ? Mm(e, t) : us(e, t, !0),
            i = a;
        do {
            if (n === 0) {
                Ha && !a && _l(e, t, 0, !1);
                break;
            } else {
                if (((l = e.current.alternate), i && !Am(l))) {
                    ((n = us(e, t, !1)), (i = !1));
                    continue;
                }
                if (n === 2) {
                    if (((i = t), e.errorRecoveryDisabledLanes & i)) var u = 0;
                    else ((u = e.pendingLanes & -536870913), (u = u !== 0 ? u : u & 536870912 ? 536870912 : 0));
                    if (u !== 0) {
                        t = u;
                        e: {
                            var s = e;
                            n = Dn;
                            var o = s.current.memoizedState.isDehydrated;
                            if ((o && (Ya(s, u).flags |= 256), (u = us(s, u, !1)), u !== 2)) {
                                if (Pc && !o) {
                                    ((s.errorRecoveryDisabledLanes |= i), (oa |= i), (n = 4));
                                    break e;
                                }
                                ((i = vt), (vt = n), i !== null && (vt === null ? (vt = i) : vt.push.apply(vt, i)));
                            }
                            n = u;
                        }
                        if (((i = !1), n !== 2)) continue;
                    }
                }
                if (n === 1) {
                    (Ya(e, 0), _l(e, t, 0, !0));
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
                            _l(a, t, Nt, !zl);
                            break e;
                        case 2:
                            vt = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(r(329));
                    }
                    if ((t & 62914560) === t && ((n = Gi + 300 - ct()), 10 < n)) {
                        if ((_l(a, t, Nt, !zl), ei(a, 0, !0) !== 0)) break e;
                        ((ml = t), (a.timeoutHandle = yd(Yf.bind(null, a, l, vt, Xi, ts, t, Nt, oa, Ba, zl, i, 'Throttled', -0, 0), n)));
                        break e;
                    }
                    Yf(a, l, vt, Xi, ts, t, Nt, oa, Ba, zl, i, null, -0, 0);
                }
            }
            break;
        } while (!0);
        $t(e);
    }
    function Yf(e, t, l, a, n, i, u, s, o, y, N, E, b, C) {
        if (((e.timeoutHandle = -1), (E = t.subtreeFlags), E & 8192 || (E & 16785408) === 16785408)) {
            ((E = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Pt,
            }),
                _f(t, i, E));
            var Q = (i & 62914560) === i ? Gi - ct() : (i & 4194048) === i ? Lf - ct() : 0;
            if (((Q = rv(E, Q)), Q !== null)) {
                ((ml = i), (e.cancelPendingCommit = Q(Wf.bind(null, e, t, i, l, a, n, u, s, o, N, E, null, b, C))), _l(e, i, u, !y));
                return;
            }
        }
        Wf(e, t, i, l, a, n, u, s, o);
    }
    function Am(e) {
        for (var t = e; ; ) {
            var l = t.tag;
            if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null)))
                for (var a = 0; a < l.length; a++) {
                    var n = l[a],
                        i = n.getSnapshot;
                    n = n.value;
                    try {
                        if (!St(i(), n)) return !1;
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
    function _l(e, t, l, a) {
        ((t &= ~es), (t &= ~oa), (e.suspendedLanes |= t), (e.pingedLanes &= ~t), a && (e.warmLanes |= t), (a = e.expirationTimes));
        for (var n = t; 0 < n; ) {
            var i = 31 - st(n),
                u = 1 << i;
            ((a[i] = -1), (n &= ~u));
        }
        l !== 0 && Ws(e, l, t);
    }
    function Vi() {
        return (Se & 6) === 0 ? (_n(0), !1) : !0;
    }
    function is() {
        if (re !== null) {
            if (Ne === 0) var e = re.return;
            else ((e = re), (al = ea = null), xc(e), (Da = null), (vn = 0), (e = re));
            for (; e !== null; ) (pf(e.alternate, e), (e = e.return));
            re = null;
        }
    }
    function Ya(e, t) {
        var l = e.timeoutHandle;
        (l !== -1 && ((e.timeoutHandle = -1), Zm(l)),
            (l = e.cancelPendingCommit),
            l !== null && ((e.cancelPendingCommit = null), l()),
            (ml = 0),
            is(),
            (_e = e),
            (re = l = tl(e.current, null)),
            (de = t),
            (Ne = 0),
            (jt = null),
            (zl = !1),
            (Ha = Fa(e, t)),
            (Pc = !1),
            (Ba = Nt = es = oa = wl = Ge = 0),
            (vt = Dn = null),
            (ts = !1),
            (t & 8) !== 0 && (t |= t & 32));
        var a = e.entangledLanes;
        if (a !== 0)
            for (e = e.entanglements, a &= t; 0 < a; ) {
                var n = 31 - st(a),
                    i = 1 << n;
                ((t |= e[n]), (a &= ~i));
            }
        return ((hl = t), di(), l);
    }
    function Gf(e, t) {
        ((ue = null),
            (p.H = jn),
            t === wa || t === bi
                ? ((t = ar()), (Ne = 3))
                : t === oc
                  ? ((t = ar()), (Ne = 4))
                  : (Ne = t === Lc ? 8 : t !== null && typeof t == 'object' && typeof t.then == 'function' ? 6 : 1),
            (jt = t),
            re === null && ((Ge = 1), Ri(e, wt(t, e.current))));
    }
    function Qf() {
        var e = xt.current;
        return e === null ? !0 : (de & 4194048) === de ? Rt === null : (de & 62914560) === de || (de & 536870912) !== 0 ? e === Rt : !1;
    }
    function Xf() {
        var e = p.H;
        return ((p.H = jn), e === null ? jn : e);
    }
    function Vf() {
        var e = p.A;
        return ((p.A = Nm), e);
    }
    function Zi() {
        ((Ge = 4),
            zl || ((de & 4194048) !== de && xt.current !== null) || (Ha = !0),
            ((wl & 134217727) === 0 && (oa & 134217727) === 0) || _e === null || _l(_e, de, Nt, !1));
    }
    function us(e, t, l) {
        var a = Se;
        Se |= 2;
        var n = Xf(),
            i = Vf();
        ((_e !== e || de !== t) && ((Xi = null), Ya(e, t)), (t = !1));
        var u = Ge;
        e: do
            try {
                if (Ne !== 0 && re !== null) {
                    var s = re,
                        o = jt;
                    switch (Ne) {
                        case 8:
                            (is(), (u = 6));
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            xt.current === null && (t = !0);
                            var y = Ne;
                            if (((Ne = 0), (jt = null), Ga(e, s, o, y), l && Ha)) {
                                u = 0;
                                break e;
                            }
                            break;
                        default:
                            ((y = Ne), (Ne = 0), (jt = null), Ga(e, s, o, y));
                    }
                }
                (Em(), (u = Ge));
                break;
            } catch (N) {
                Gf(e, N);
            }
        while (!0);
        return (t && e.shellSuspendCounter++, (al = ea = null), (Se = a), (p.H = n), (p.A = i), re === null && ((_e = null), (de = 0), di()), u);
    }
    function Em() {
        for (; re !== null; ) Zf(re);
    }
    function Mm(e, t) {
        var l = Se;
        Se |= 2;
        var a = Xf(),
            n = Vf();
        _e !== e || de !== t ? ((Xi = null), (Qi = ct() + 500), Ya(e, t)) : (Ha = Fa(e, t));
        e: do
            try {
                if (Ne !== 0 && re !== null) {
                    t = re;
                    var i = jt;
                    t: switch (Ne) {
                        case 1:
                            ((Ne = 0), (jt = null), Ga(e, t, i, 1));
                            break;
                        case 2:
                        case 9:
                            if (tr(i)) {
                                ((Ne = 0), (jt = null), Kf(t));
                                break;
                            }
                            ((t = function () {
                                ((Ne !== 2 && Ne !== 9) || _e !== e || (Ne = 7), $t(e));
                            }),
                                i.then(t, t));
                            break e;
                        case 3:
                            Ne = 7;
                            break e;
                        case 4:
                            Ne = 5;
                            break e;
                        case 7:
                            tr(i) ? ((Ne = 0), (jt = null), Kf(t)) : ((Ne = 0), (jt = null), Ga(e, t, i, 7));
                            break;
                        case 5:
                            var u = null;
                            switch (re.tag) {
                                case 26:
                                    u = re.memoizedState;
                                case 5:
                                case 27:
                                    var s = re;
                                    if (u ? Od(u) : s.stateNode.complete) {
                                        ((Ne = 0), (jt = null));
                                        var o = s.sibling;
                                        if (o !== null) re = o;
                                        else {
                                            var y = s.return;
                                            y !== null ? ((re = y), Ki(y)) : (re = null);
                                        }
                                        break t;
                                    }
                            }
                            ((Ne = 0), (jt = null), Ga(e, t, i, 5));
                            break;
                        case 6:
                            ((Ne = 0), (jt = null), Ga(e, t, i, 6));
                            break;
                        case 8:
                            (is(), (Ge = 6));
                            break e;
                        default:
                            throw Error(r(462));
                    }
                }
                zm();
                break;
            } catch (N) {
                Gf(e, N);
            }
        while (!0);
        return ((al = ea = null), (p.H = a), (p.A = n), (Se = l), re !== null ? 0 : ((_e = null), (de = 0), di(), Ge));
    }
    function zm() {
        for (; re !== null && !gu(); ) Zf(re);
    }
    function Zf(e) {
        var t = gf(e.alternate, e, hl);
        ((e.memoizedProps = e.pendingProps), t === null ? Ki(e) : (re = t));
    }
    function Kf(e) {
        var t = e,
            l = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = rf(l, t, t.pendingProps, t.type, void 0, de);
                break;
            case 11:
                t = rf(l, t, t.pendingProps, t.type.render, t.ref, de);
                break;
            case 5:
                xc(t);
            default:
                (pf(l, t), (t = re = Xo(t, hl)), (t = gf(l, t, hl)));
        }
        ((e.memoizedProps = e.pendingProps), t === null ? Ki(e) : (re = t));
    }
    function Ga(e, t, l, a) {
        ((al = ea = null), xc(t), (Da = null), (vn = 0));
        var n = t.return;
        try {
            if (ym(e, n, t, l, de)) {
                ((Ge = 1), Ri(e, wt(l, e.current)), (re = null));
                return;
            }
        } catch (i) {
            if (n !== null) throw ((re = n), i);
            ((Ge = 1), Ri(e, wt(l, e.current)), (re = null));
            return;
        }
        t.flags & 32768
            ? (ve || a === 1
                  ? (e = !0)
                  : Ha || (de & 536870912) !== 0
                    ? (e = !1)
                    : ((zl = e = !0),
                      (a === 2 || a === 9 || a === 3 || a === 6) && ((a = xt.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
              Jf(t, e))
            : Ki(t);
    }
    function Ki(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                Jf(t, zl);
                return;
            }
            e = t.return;
            var l = bm(t.alternate, t, hl);
            if (l !== null) {
                re = l;
                return;
            }
            if (((t = t.sibling), t !== null)) {
                re = t;
                return;
            }
            re = t = e;
        } while (t !== null);
        Ge === 0 && (Ge = 5);
    }
    function Jf(e, t) {
        do {
            var l = xm(e.alternate, e);
            if (l !== null) {
                ((l.flags &= 32767), (re = l));
                return;
            }
            if (
                ((l = e.return), l !== null && ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)), !t && ((e = e.sibling), e !== null))
            ) {
                re = e;
                return;
            }
            re = e = l;
        } while (e !== null);
        ((Ge = 6), (re = null));
    }
    function Wf(e, t, l, a, n, i, u, s, o) {
        e.cancelPendingCommit = null;
        do Ji();
        while (Fe !== 0);
        if ((Se & 6) !== 0) throw Error(r(327));
        if (t !== null) {
            if (t === e.current) throw Error(r(177));
            if (
                ((i = t.lanes | t.childLanes),
                (i |= Ju),
                sh(e, l, i, u, s, o),
                e === _e && ((re = _e = null), (de = 0)),
                (qa = t),
                (Ol = e),
                (ml = l),
                (ls = i),
                (as = n),
                (Hf = a),
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
                    ? ((e.callbackNode = null),
                      (e.callbackPriority = 0),
                      _m(Vl, function () {
                          return (ed(), null);
                      }))
                    : ((e.callbackNode = null), (e.callbackPriority = 0)),
                (a = (t.flags & 13878) !== 0),
                (t.subtreeFlags & 13878) !== 0 || a)
            ) {
                ((a = p.T), (p.T = null), (n = _.p), (_.p = 2), (u = Se), (Se |= 4));
                try {
                    Cm(e, t, l);
                } finally {
                    ((Se = u), (_.p = n), (p.T = a));
                }
            }
            ((Fe = 1), $f(), Ff(), If());
        }
    }
    function $f() {
        if (Fe === 1) {
            Fe = 0;
            var e = Ol,
                t = qa,
                l = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || l) {
                ((l = p.T), (p.T = null));
                var a = _.p;
                _.p = 2;
                var n = Se;
                Se |= 4;
                try {
                    wf(t, e);
                    var i = ps,
                        u = Uo(e.containerInfo),
                        s = i.focusedElem,
                        o = i.selectionRange;
                    if (u !== s && s && s.ownerDocument && Ro(s.ownerDocument.documentElement, s)) {
                        if (o !== null && Qu(s)) {
                            var y = o.start,
                                N = o.end;
                            if ((N === void 0 && (N = y), 'selectionStart' in s))
                                ((s.selectionStart = y), (s.selectionEnd = Math.min(N, s.value.length)));
                            else {
                                var E = s.ownerDocument || document,
                                    b = (E && E.defaultView) || window;
                                if (b.getSelection) {
                                    var C = b.getSelection(),
                                        Q = s.textContent.length,
                                        I = Math.min(o.start, Q),
                                        we = o.end === void 0 ? I : Math.min(o.end, Q);
                                    !C.extend && I > we && ((u = we), (we = I), (I = u));
                                    var m = _o(s, I),
                                        h = _o(s, we);
                                    if (
                                        m &&
                                        h &&
                                        (C.rangeCount !== 1 ||
                                            C.anchorNode !== m.node ||
                                            C.anchorOffset !== m.offset ||
                                            C.focusNode !== h.node ||
                                            C.focusOffset !== h.offset)
                                    ) {
                                        var g = E.createRange();
                                        (g.setStart(m.node, m.offset),
                                            C.removeAllRanges(),
                                            I > we ? (C.addRange(g), C.extend(h.node, h.offset)) : (g.setEnd(h.node, h.offset), C.addRange(g)));
                                    }
                                }
                            }
                        }
                        for (E = [], C = s; (C = C.parentNode); ) C.nodeType === 1 && E.push({ element: C, left: C.scrollLeft, top: C.scrollTop });
                        for (typeof s.focus == 'function' && s.focus(), s = 0; s < E.length; s++) {
                            var A = E[s];
                            ((A.element.scrollLeft = A.left), (A.element.scrollTop = A.top));
                        }
                    }
                    ((uu = !!ys), (ps = ys = null));
                } finally {
                    ((Se = n), (_.p = a), (p.T = l));
                }
            }
            ((e.current = t), (Fe = 2));
        }
    }
    function Ff() {
        if (Fe === 2) {
            Fe = 0;
            var e = Ol,
                t = qa,
                l = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || l) {
                ((l = p.T), (p.T = null));
                var a = _.p;
                _.p = 2;
                var n = Se;
                Se |= 4;
                try {
                    Tf(e, t.alternate, t);
                } finally {
                    ((Se = n), (_.p = a), (p.T = l));
                }
            }
            Fe = 3;
        }
    }
    function If() {
        if (Fe === 4 || Fe === 3) {
            ((Fe = 0), yu());
            var e = Ol,
                t = qa,
                l = ml,
                a = Hf;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (Fe = 5) : ((Fe = 0), (qa = Ol = null), Pf(e, e.pendingLanes));
            var n = e.pendingLanes;
            if ((n === 0 && (Dl = null), Nu(l), (t = t.stateNode), Le && typeof Le.onCommitFiberRoot == 'function'))
                try {
                    Le.onCommitFiberRoot(G, t, void 0, (t.current.flags & 128) === 128);
                } catch {}
            if (a !== null) {
                ((t = p.T), (n = _.p), (_.p = 2), (p.T = null));
                try {
                    for (var i = e.onRecoverableError, u = 0; u < a.length; u++) {
                        var s = a[u];
                        i(s.value, { componentStack: s.stack });
                    }
                } finally {
                    ((p.T = t), (_.p = n));
                }
            }
            ((ml & 3) !== 0 && Ji(),
                $t(e),
                (n = e.pendingLanes),
                (l & 261930) !== 0 && (n & 42) !== 0 ? (e === ns ? On++ : ((On = 0), (ns = e))) : (On = 0),
                _n(0));
        }
    }
    function Pf(e, t) {
        (e.pooledCacheLanes &= t) === 0 && ((t = e.pooledCache), t != null && ((e.pooledCache = null), hn(t)));
    }
    function Ji() {
        return ($f(), Ff(), If(), ed());
    }
    function ed() {
        if (Fe !== 5) return !1;
        var e = Ol,
            t = ls;
        ls = 0;
        var l = Nu(ml),
            a = p.T,
            n = _.p;
        try {
            ((_.p = 32 > l ? 32 : l), (p.T = null), (l = as), (as = null));
            var i = Ol,
                u = ml;
            if (((Fe = 0), (qa = Ol = null), (ml = 0), (Se & 6) !== 0)) throw Error(r(331));
            var s = Se;
            if (((Se |= 4), Uf(i.current), Of(i, i.current, u, l), (Se = s), _n(0, !1), Le && typeof Le.onPostCommitFiberRoot == 'function'))
                try {
                    Le.onPostCommitFiberRoot(G, i);
                } catch {}
            return !0;
        } finally {
            ((_.p = n), (p.T = a), Pf(e, t));
        }
    }
    function td(e, t, l) {
        ((t = wt(l, t)), (t = kc(e.stateNode, t, 2)), (e = Tl(e, t, 2)), e !== null && (Ia(e, 2), $t(e)));
    }
    function Te(e, t, l) {
        if (e.tag === 3) td(e, e, l);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    td(t, e, l);
                    break;
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (
                        typeof t.type.getDerivedStateFromError == 'function' ||
                        (typeof a.componentDidCatch == 'function' && (Dl === null || !Dl.has(a)))
                    ) {
                        ((e = wt(l, e)), (l = tf(2)), (a = Tl(t, l, 2)), a !== null && (lf(l, a, t, e), Ia(a, 2), $t(a)));
                        break;
                    }
                }
                t = t.return;
            }
    }
    function cs(e, t, l) {
        var a = e.pingCache;
        if (a === null) {
            a = e.pingCache = new Tm();
            var n = new Set();
            a.set(t, n);
        } else ((n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n)));
        n.has(l) || ((Pc = !0), n.add(l), (e = wm.bind(null, e, t, l)), t.then(e, e));
    }
    function wm(e, t, l) {
        var a = e.pingCache;
        (a !== null && a.delete(t),
            (e.pingedLanes |= e.suspendedLanes & l),
            (e.warmLanes &= ~l),
            _e === e &&
                (de & l) === l &&
                (Ge === 4 || (Ge === 3 && (de & 62914560) === de && 300 > ct() - Gi) ? (Se & 2) === 0 && Ya(e, 0) : (es |= l), Ba === de && (Ba = 0)),
            $t(e));
    }
    function ld(e, t) {
        (t === 0 && (t = Js()), (e = Fl(e, t)), e !== null && (Ia(e, t), $t(e)));
    }
    function Dm(e) {
        var t = e.memoizedState,
            l = 0;
        (t !== null && (l = t.retryLane), ld(e, l));
    }
    function Om(e, t) {
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
        (a !== null && a.delete(t), ld(e, l));
    }
    function _m(e, t) {
        return gl(e, t);
    }
    var Wi = null,
        Qa = null,
        ss = !1,
        $i = !1,
        os = !1,
        Rl = 0;
    function $t(e) {
        (e !== Qa && e.next === null && (Qa === null ? (Wi = Qa = e) : (Qa = Qa.next = e)), ($i = !0), ss || ((ss = !0), Um()));
    }
    function _n(e, t) {
        if (!os && $i) {
            os = !0;
            do
                for (var l = !1, a = Wi; a !== null; ) {
                    if (e !== 0) {
                        var n = a.pendingLanes;
                        if (n === 0) var i = 0;
                        else {
                            var u = a.suspendedLanes,
                                s = a.pingedLanes;
                            ((i = (1 << (31 - st(42 | e) + 1)) - 1), (i &= n & ~(u & ~s)), (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0));
                        }
                        i !== 0 && ((l = !0), ud(a, i));
                    } else
                        ((i = de),
                            (i = ei(a, a === _e ? i : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1)),
                            (i & 3) === 0 || Fa(a, i) || ((l = !0), ud(a, i)));
                    a = a.next;
                }
            while (l);
            os = !1;
        }
    }
    function Rm() {
        ad();
    }
    function ad() {
        $i = ss = !1;
        var e = 0;
        Rl !== 0 && Vm() && (e = Rl);
        for (var t = ct(), l = null, a = Wi; a !== null; ) {
            var n = a.next,
                i = nd(a, t);
            (i === 0
                ? ((a.next = null), l === null ? (Wi = n) : (l.next = n), n === null && (Qa = l))
                : ((l = a), (e !== 0 || (i & 3) !== 0) && ($i = !0)),
                (a = n));
        }
        ((Fe !== 0 && Fe !== 5) || _n(e), Rl !== 0 && (Rl = 0));
    }
    function nd(e, t) {
        for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
            var u = 31 - st(i),
                s = 1 << u,
                o = n[u];
            (o === -1 ? ((s & l) === 0 || (s & a) !== 0) && (n[u] = ch(s, t)) : o <= t && (e.expiredLanes |= s), (i &= ~s));
        }
        if (
            ((t = _e),
            (l = de),
            (l = ei(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
            (a = e.callbackNode),
            l === 0 || (e === t && (Ne === 2 || Ne === 9)) || e.cancelPendingCommit !== null)
        )
            return (a !== null && a !== null && Xl(a), (e.callbackNode = null), (e.callbackPriority = 0));
        if ((l & 3) === 0 || Fa(e, l)) {
            if (((t = l & -l), t === e.callbackPriority)) return t;
            switch ((a !== null && Xl(a), Nu(l))) {
                case 2:
                case 8:
                    l = Wn;
                    break;
                case 32:
                    l = Vl;
                    break;
                case 268435456:
                    l = Wa;
                    break;
                default:
                    l = Vl;
            }
            return ((a = id.bind(null, e)), (l = gl(l, a)), (e.callbackPriority = t), (e.callbackNode = l), t);
        }
        return (a !== null && a !== null && Xl(a), (e.callbackPriority = 2), (e.callbackNode = null), 2);
    }
    function id(e, t) {
        if (Fe !== 0 && Fe !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
        var l = e.callbackNode;
        if (Ji() && e.callbackNode !== l) return null;
        var a = de;
        return (
            (a = ei(e, e === _e ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
            a === 0 ? null : (qf(e, a, t), nd(e, ct()), e.callbackNode != null && e.callbackNode === l ? id.bind(null, e) : null)
        );
    }
    function ud(e, t) {
        if (Ji()) return null;
        qf(e, t, !0);
    }
    function Um() {
        Km(function () {
            (Se & 6) !== 0 ? gl(Jn, Rm) : ad();
        });
    }
    function rs() {
        if (Rl === 0) {
            var e = Ma;
            (e === 0 && ((e = Fn), (Fn <<= 1), (Fn & 261888) === 0 && (Fn = 256)), (Rl = e));
        }
        return Rl;
    }
    function cd(e) {
        return e == null || typeof e == 'symbol' || typeof e == 'boolean' ? null : typeof e == 'function' ? e : ni('' + e);
    }
    function sd(e, t) {
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
    function km(e, t, l, a, n) {
        if (t === 'submit' && l && l.stateNode === n) {
            var i = cd((n[rt] || null).action),
                u = a.submitter;
            u && ((t = (t = u[rt] || null) ? cd(t.formAction) : u.getAttribute('formAction')), t !== null && ((i = t), (u = null)));
            var s = new si('action', 'action', null, a, n);
            e.push({
                event: s,
                listeners: [
                    {
                        instance: null,
                        listener: function () {
                            if (a.defaultPrevented) {
                                if (Rl !== 0) {
                                    var o = u ? sd(n, u) : new FormData(n);
                                    wc(l, { pending: !0, data: o, method: n.method, action: i }, null, o);
                                }
                            } else
                                typeof i == 'function' &&
                                    (s.preventDefault(),
                                    (o = u ? sd(n, u) : new FormData(n)),
                                    wc(l, { pending: !0, data: o, method: n.method, action: i }, i, o));
                        },
                        currentTarget: n,
                    },
                ],
            });
        }
    }
    for (var fs = 0; fs < Ku.length; fs++) {
        var ds = Ku[fs],
            Lm = ds.toLowerCase(),
            Hm = ds[0].toUpperCase() + ds.slice(1);
        Bt(Lm, 'on' + Hm);
    }
    (Bt(Ho, 'onAnimationEnd'),
        Bt(Bo, 'onAnimationIteration'),
        Bt(qo, 'onAnimationStart'),
        Bt('dblclick', 'onDoubleClick'),
        Bt('focusin', 'onFocus'),
        Bt('focusout', 'onBlur'),
        Bt(em, 'onTransitionRun'),
        Bt(tm, 'onTransitionStart'),
        Bt(lm, 'onTransitionCancel'),
        Bt(Yo, 'onTransitionEnd'),
        ma('onMouseEnter', ['mouseout', 'mouseover']),
        ma('onMouseLeave', ['mouseout', 'mouseover']),
        ma('onPointerEnter', ['pointerout', 'pointerover']),
        ma('onPointerLeave', ['pointerout', 'pointerover']),
        Kl('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
        Kl('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
        Kl('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
        Kl('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
        Kl('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
        Kl('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
    var Rn =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
                ' '
            ),
        Bm = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Rn));
    function od(e, t) {
        t = (t & 4) !== 0;
        for (var l = 0; l < e.length; l++) {
            var a = e[l],
                n = a.event;
            a = a.listeners;
            e: {
                var i = void 0;
                if (t)
                    for (var u = a.length - 1; 0 <= u; u--) {
                        var s = a[u],
                            o = s.instance,
                            y = s.currentTarget;
                        if (((s = s.listener), o !== i && n.isPropagationStopped())) break e;
                        ((i = s), (n.currentTarget = y));
                        try {
                            i(n);
                        } catch (N) {
                            fi(N);
                        }
                        ((n.currentTarget = null), (i = o));
                    }
                else
                    for (u = 0; u < a.length; u++) {
                        if (((s = a[u]), (o = s.instance), (y = s.currentTarget), (s = s.listener), o !== i && n.isPropagationStopped())) break e;
                        ((i = s), (n.currentTarget = y));
                        try {
                            i(n);
                        } catch (N) {
                            fi(N);
                        }
                        ((n.currentTarget = null), (i = o));
                    }
            }
        }
    }
    function fe(e, t) {
        var l = t[Tu];
        l === void 0 && (l = t[Tu] = new Set());
        var a = e + '__bubble';
        l.has(a) || (rd(t, e, 2, !1), l.add(a));
    }
    function hs(e, t, l) {
        var a = 0;
        (t && (a |= 4), rd(l, e, a, t));
    }
    var Fi = '_reactListening' + Math.random().toString(36).slice(2);
    function ms(e) {
        if (!e[Fi]) {
            ((e[Fi] = !0),
                to.forEach(function (l) {
                    l !== 'selectionchange' && (Bm.has(l) || hs(l, !1, e), hs(l, !0, e));
                }));
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Fi] || ((t[Fi] = !0), hs('selectionchange', !1, t));
        }
    }
    function rd(e, t, l, a) {
        switch (Bd(t)) {
            case 2:
                var n = hv;
                break;
            case 8:
                n = mv;
                break;
            default:
                n = zs;
        }
        ((l = n.bind(null, t, l, e)),
            (n = void 0),
            !Ru || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (n = !0),
            a
                ? n !== void 0
                    ? e.addEventListener(t, l, { capture: !0, passive: n })
                    : e.addEventListener(t, l, !0)
                : n !== void 0
                  ? e.addEventListener(t, l, { passive: n })
                  : e.addEventListener(t, l, !1));
    }
    function vs(e, t, l, a, n) {
        var i = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            e: for (;;) {
                if (a === null) return;
                var u = a.tag;
                if (u === 3 || u === 4) {
                    var s = a.stateNode.containerInfo;
                    if (s === n) break;
                    if (u === 4)
                        for (u = a.return; u !== null; ) {
                            var o = u.tag;
                            if ((o === 3 || o === 4) && u.stateNode.containerInfo === n) return;
                            u = u.return;
                        }
                    for (; s !== null; ) {
                        if (((u = fa(s)), u === null)) return;
                        if (((o = u.tag), o === 5 || o === 6 || o === 26 || o === 27)) {
                            a = i = u;
                            continue e;
                        }
                        s = s.parentNode;
                    }
                }
                a = a.return;
            }
        mo(function () {
            var y = i,
                N = Ou(l),
                E = [];
            e: {
                var b = Go.get(e);
                if (b !== void 0) {
                    var C = si,
                        Q = e;
                    switch (e) {
                        case 'keypress':
                            if (ui(l) === 0) break e;
                        case 'keydown':
                        case 'keyup':
                            C = Oh;
                            break;
                        case 'focusin':
                            ((Q = 'focus'), (C = Hu));
                            break;
                        case 'focusout':
                            ((Q = 'blur'), (C = Hu));
                            break;
                        case 'beforeblur':
                        case 'afterblur':
                            C = Hu;
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
                            C = yo;
                            break;
                        case 'drag':
                        case 'dragend':
                        case 'dragenter':
                        case 'dragexit':
                        case 'dragleave':
                        case 'dragover':
                        case 'dragstart':
                        case 'drop':
                            C = bh;
                            break;
                        case 'touchcancel':
                        case 'touchend':
                        case 'touchmove':
                        case 'touchstart':
                            C = Uh;
                            break;
                        case Ho:
                        case Bo:
                        case qo:
                            C = jh;
                            break;
                        case Yo:
                            C = Lh;
                            break;
                        case 'scroll':
                        case 'scrollend':
                            C = ph;
                            break;
                        case 'wheel':
                            C = Bh;
                            break;
                        case 'copy':
                        case 'cut':
                        case 'paste':
                            C = Th;
                            break;
                        case 'gotpointercapture':
                        case 'lostpointercapture':
                        case 'pointercancel':
                        case 'pointerdown':
                        case 'pointermove':
                        case 'pointerout':
                        case 'pointerover':
                        case 'pointerup':
                            C = So;
                            break;
                        case 'toggle':
                        case 'beforetoggle':
                            C = Yh;
                    }
                    var I = (t & 4) !== 0,
                        we = !I && (e === 'scroll' || e === 'scrollend'),
                        m = I ? (b !== null ? b + 'Capture' : null) : b;
                    I = [];
                    for (var h = y, g; h !== null; ) {
                        var A = h;
                        if (
                            ((g = A.stateNode),
                            (A = A.tag),
                            (A !== 5 && A !== 26 && A !== 27) || g === null || m === null || ((A = tn(h, m)), A != null && I.push(Un(h, A, g))),
                            we)
                        )
                            break;
                        h = h.return;
                    }
                    0 < I.length && ((b = new C(b, Q, null, l, N)), E.push({ event: b, listeners: I }));
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (
                        ((b = e === 'mouseover' || e === 'pointerover'),
                        (C = e === 'mouseout' || e === 'pointerout'),
                        b && l !== Du && (Q = l.relatedTarget || l.fromElement) && (fa(Q) || Q[ra]))
                    )
                        break e;
                    if (
                        (C || b) &&
                        ((b = N.window === N ? N : (b = N.ownerDocument) ? b.defaultView || b.parentWindow : window),
                        C
                            ? ((Q = l.relatedTarget || l.toElement),
                              (C = y),
                              (Q = Q ? fa(Q) : null),
                              Q !== null && ((we = U(Q)), (I = Q.tag), Q !== we || (I !== 5 && I !== 27 && I !== 6)) && (Q = null))
                            : ((C = null), (Q = y)),
                        C !== Q)
                    ) {
                        if (
                            ((I = yo),
                            (A = 'onMouseLeave'),
                            (m = 'onMouseEnter'),
                            (h = 'mouse'),
                            (e === 'pointerout' || e === 'pointerover') &&
                                ((I = So), (A = 'onPointerLeave'), (m = 'onPointerEnter'), (h = 'pointer')),
                            (we = C == null ? b : en(C)),
                            (g = Q == null ? b : en(Q)),
                            (b = new I(A, h + 'leave', C, l, N)),
                            (b.target = we),
                            (b.relatedTarget = g),
                            (A = null),
                            fa(N) === y && ((I = new I(m, h + 'enter', Q, l, N)), (I.target = g), (I.relatedTarget = we), (A = I)),
                            (we = A),
                            C && Q)
                        )
                            t: {
                                for (I = qm, m = C, h = Q, g = 0, A = m; A; A = I(A)) g++;
                                A = 0;
                                for (var W = h; W; W = I(W)) A++;
                                for (; 0 < g - A; ) ((m = I(m)), g--);
                                for (; 0 < A - g; ) ((h = I(h)), A--);
                                for (; g--; ) {
                                    if (m === h || (h !== null && m === h.alternate)) {
                                        I = m;
                                        break t;
                                    }
                                    ((m = I(m)), (h = I(h)));
                                }
                                I = null;
                            }
                        else I = null;
                        (C !== null && fd(E, b, C, I, !1), Q !== null && we !== null && fd(E, we, Q, I, !0));
                    }
                }
                e: {
                    if (
                        ((b = y ? en(y) : window),
                        (C = b.nodeName && b.nodeName.toLowerCase()),
                        C === 'select' || (C === 'input' && b.type === 'file'))
                    )
                        var ge = Eo;
                    else if (To(b))
                        if (Mo) ge = Fh;
                        else {
                            ge = Wh;
                            var X = Jh;
                        }
                    else
                        ((C = b.nodeName),
                            !C || C.toLowerCase() !== 'input' || (b.type !== 'checkbox' && b.type !== 'radio')
                                ? y && wu(y.elementType) && (ge = Eo)
                                : (ge = $h));
                    if (ge && (ge = ge(e, y))) {
                        Ao(E, ge, l, N);
                        break e;
                    }
                    (X && X(e, b, y), e === 'focusout' && y && b.type === 'number' && y.memoizedProps.value != null && zu(b, 'number', b.value));
                }
                switch (((X = y ? en(y) : window), e)) {
                    case 'focusin':
                        (To(X) || X.contentEditable === 'true') && ((ba = X), (Xu = y), (rn = null));
                        break;
                    case 'focusout':
                        rn = Xu = ba = null;
                        break;
                    case 'mousedown':
                        Vu = !0;
                        break;
                    case 'contextmenu':
                    case 'mouseup':
                    case 'dragend':
                        ((Vu = !1), ko(E, l, N));
                        break;
                    case 'selectionchange':
                        if (Ph) break;
                    case 'keydown':
                    case 'keyup':
                        ko(E, l, N);
                }
                var ce;
                if (qu)
                    e: {
                        switch (e) {
                            case 'compositionstart':
                                var he = 'onCompositionStart';
                                break e;
                            case 'compositionend':
                                he = 'onCompositionEnd';
                                break e;
                            case 'compositionupdate':
                                he = 'onCompositionUpdate';
                                break e;
                        }
                        he = void 0;
                    }
                else Sa ? jo(e, l) && (he = 'onCompositionEnd') : e === 'keydown' && l.keyCode === 229 && (he = 'onCompositionStart');
                (he &&
                    (bo &&
                        l.locale !== 'ko' &&
                        (Sa || he !== 'onCompositionStart'
                            ? he === 'onCompositionEnd' && Sa && (ce = vo())
                            : ((pl = N), (Uu = 'value' in pl ? pl.value : pl.textContent), (Sa = !0))),
                    (X = Ii(y, he)),
                    0 < X.length &&
                        ((he = new po(he, e, null, l, N)),
                        E.push({ event: he, listeners: X }),
                        ce ? (he.data = ce) : ((ce = No(l)), ce !== null && (he.data = ce)))),
                    (ce = Qh ? Xh(e, l) : Vh(e, l)) &&
                        ((he = Ii(y, 'onBeforeInput')),
                        0 < he.length &&
                            ((X = new po('onBeforeInput', 'beforeinput', null, l, N)), E.push({ event: X, listeners: he }), (X.data = ce))),
                    km(E, e, y, l, N));
            }
            od(E, t);
        });
    }
    function Un(e, t, l) {
        return { instance: e, listener: t, currentTarget: l };
    }
    function Ii(e, t) {
        for (var l = t + 'Capture', a = []; e !== null; ) {
            var n = e,
                i = n.stateNode;
            if (
                ((n = n.tag),
                (n !== 5 && n !== 26 && n !== 27) ||
                    i === null ||
                    ((n = tn(e, l)), n != null && a.unshift(Un(e, n, i)), (n = tn(e, t)), n != null && a.push(Un(e, n, i))),
                e.tag === 3)
            )
                return a;
            e = e.return;
        }
        return [];
    }
    function qm(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null;
    }
    function fd(e, t, l, a, n) {
        for (var i = t._reactName, u = []; l !== null && l !== a; ) {
            var s = l,
                o = s.alternate,
                y = s.stateNode;
            if (((s = s.tag), o !== null && o === a)) break;
            ((s !== 5 && s !== 26 && s !== 27) ||
                y === null ||
                ((o = y), n ? ((y = tn(l, i)), y != null && u.unshift(Un(l, y, o))) : n || ((y = tn(l, i)), y != null && u.push(Un(l, y, o)))),
                (l = l.return));
        }
        u.length !== 0 && e.push({ event: t, listeners: u });
    }
    var Ym = /\r\n?/g,
        Gm = /\u0000|\uFFFD/g;
    function dd(e) {
        return (typeof e == 'string' ? e : '' + e)
            .replace(
                Ym,
                `
`
            )
            .replace(Gm, '');
    }
    function hd(e, t) {
        return ((t = dd(t)), dd(e) === t);
    }
    function ze(e, t, l, a, n, i) {
        switch (l) {
            case 'children':
                typeof a == 'string'
                    ? t === 'body' || (t === 'textarea' && a === '') || ga(e, a)
                    : (typeof a == 'number' || typeof a == 'bigint') && t !== 'body' && ga(e, '' + a);
                break;
            case 'className':
                li(e, 'class', a);
                break;
            case 'tabIndex':
                li(e, 'tabindex', a);
                break;
            case 'dir':
            case 'role':
            case 'viewBox':
            case 'width':
            case 'height':
                li(e, l, a);
                break;
            case 'style':
                fo(e, a, i);
                break;
            case 'data':
                if (t !== 'object') {
                    li(e, 'data', a);
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
                ((a = ni('' + a)), e.setAttribute(l, a));
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
                            ? (t !== 'input' && ze(e, t, 'name', n.name, n, null),
                              ze(e, t, 'formEncType', n.formEncType, n, null),
                              ze(e, t, 'formMethod', n.formMethod, n, null),
                              ze(e, t, 'formTarget', n.formTarget, n, null))
                            : (ze(e, t, 'encType', n.encType, n, null),
                              ze(e, t, 'method', n.method, n, null),
                              ze(e, t, 'target', n.target, n, null)));
                if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
                    e.removeAttribute(l);
                    break;
                }
                ((a = ni('' + a)), e.setAttribute(l, a));
                break;
            case 'onClick':
                a != null && (e.onclick = Pt);
                break;
            case 'onScroll':
                a != null && fe('scroll', e);
                break;
            case 'onScrollEnd':
                a != null && fe('scrollend', e);
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
                ((l = ni('' + a)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l));
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
                (fe('beforetoggle', e), fe('toggle', e), ti(e, 'popover', a));
                break;
            case 'xlinkActuate':
                It(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
                break;
            case 'xlinkArcrole':
                It(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
                break;
            case 'xlinkRole':
                It(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
                break;
            case 'xlinkShow':
                It(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
                break;
            case 'xlinkTitle':
                It(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
                break;
            case 'xlinkType':
                It(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
                break;
            case 'xmlBase':
                It(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
                break;
            case 'xmlLang':
                It(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
                break;
            case 'xmlSpace':
                It(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
                break;
            case 'is':
                ti(e, 'is', a);
                break;
            case 'innerText':
            case 'textContent':
                break;
            default:
                (!(2 < l.length) || (l[0] !== 'o' && l[0] !== 'O') || (l[1] !== 'n' && l[1] !== 'N')) && ((l = gh.get(l) || l), ti(e, l, a));
        }
    }
    function gs(e, t, l, a, n, i) {
        switch (l) {
            case 'style':
                fo(e, a, i);
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
                typeof a == 'string' ? ga(e, a) : (typeof a == 'number' || typeof a == 'bigint') && ga(e, '' + a);
                break;
            case 'onScroll':
                a != null && fe('scroll', e);
                break;
            case 'onScrollEnd':
                a != null && fe('scrollend', e);
                break;
            case 'onClick':
                a != null && (e.onclick = Pt);
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
                if (!lo.hasOwnProperty(l))
                    e: {
                        if (
                            l[0] === 'o' &&
                            l[1] === 'n' &&
                            ((n = l.endsWith('Capture')),
                            (t = l.slice(2, n ? l.length - 7 : void 0)),
                            (i = e[rt] || null),
                            (i = i != null ? i[l] : null),
                            typeof i == 'function' && e.removeEventListener(t, i, n),
                            typeof a == 'function')
                        ) {
                            (typeof i != 'function' && i !== null && (l in e ? (e[l] = null) : e.hasAttribute(l) && e.removeAttribute(l)),
                                e.addEventListener(t, a, n));
                            break e;
                        }
                        l in e ? (e[l] = a) : a === !0 ? e.setAttribute(l, '') : ti(e, l, a);
                    }
        }
    }
    function nt(e, t, l) {
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
                (fe('error', e), fe('load', e));
                var a = !1,
                    n = !1,
                    i;
                for (i in l)
                    if (l.hasOwnProperty(i)) {
                        var u = l[i];
                        if (u != null)
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
                                    ze(e, t, i, u, l, null);
                            }
                    }
                (n && ze(e, t, 'srcSet', l.srcSet, l, null), a && ze(e, t, 'src', l.src, l, null));
                return;
            case 'input':
                fe('invalid', e);
                var s = (i = u = n = null),
                    o = null,
                    y = null;
                for (a in l)
                    if (l.hasOwnProperty(a)) {
                        var N = l[a];
                        if (N != null)
                            switch (a) {
                                case 'name':
                                    n = N;
                                    break;
                                case 'type':
                                    u = N;
                                    break;
                                case 'checked':
                                    o = N;
                                    break;
                                case 'defaultChecked':
                                    y = N;
                                    break;
                                case 'value':
                                    i = N;
                                    break;
                                case 'defaultValue':
                                    s = N;
                                    break;
                                case 'children':
                                case 'dangerouslySetInnerHTML':
                                    if (N != null) throw Error(r(137, t));
                                    break;
                                default:
                                    ze(e, t, a, N, l, null);
                            }
                    }
                co(e, i, s, o, y, u, n, !1);
                return;
            case 'select':
                (fe('invalid', e), (a = u = i = null));
                for (n in l)
                    if (l.hasOwnProperty(n) && ((s = l[n]), s != null))
                        switch (n) {
                            case 'value':
                                i = s;
                                break;
                            case 'defaultValue':
                                u = s;
                                break;
                            case 'multiple':
                                a = s;
                            default:
                                ze(e, t, n, s, l, null);
                        }
                ((t = i), (l = u), (e.multiple = !!a), t != null ? va(e, !!a, t, !1) : l != null && va(e, !!a, l, !0));
                return;
            case 'textarea':
                (fe('invalid', e), (i = n = a = null));
                for (u in l)
                    if (l.hasOwnProperty(u) && ((s = l[u]), s != null))
                        switch (u) {
                            case 'value':
                                a = s;
                                break;
                            case 'defaultValue':
                                n = s;
                                break;
                            case 'children':
                                i = s;
                                break;
                            case 'dangerouslySetInnerHTML':
                                if (s != null) throw Error(r(91));
                                break;
                            default:
                                ze(e, t, u, s, l, null);
                        }
                oo(e, a, n, i);
                return;
            case 'option':
                for (o in l)
                    if (l.hasOwnProperty(o) && ((a = l[o]), a != null))
                        switch (o) {
                            case 'selected':
                                e.selected = a && typeof a != 'function' && typeof a != 'symbol';
                                break;
                            default:
                                ze(e, t, o, a, l, null);
                        }
                return;
            case 'dialog':
                (fe('beforetoggle', e), fe('toggle', e), fe('cancel', e), fe('close', e));
                break;
            case 'iframe':
            case 'object':
                fe('load', e);
                break;
            case 'video':
            case 'audio':
                for (a = 0; a < Rn.length; a++) fe(Rn[a], e);
                break;
            case 'image':
                (fe('error', e), fe('load', e));
                break;
            case 'details':
                fe('toggle', e);
                break;
            case 'embed':
            case 'source':
            case 'link':
                (fe('error', e), fe('load', e));
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
                for (y in l)
                    if (l.hasOwnProperty(y) && ((a = l[y]), a != null))
                        switch (y) {
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                throw Error(r(137, t));
                            default:
                                ze(e, t, y, a, l, null);
                        }
                return;
            default:
                if (wu(t)) {
                    for (N in l) l.hasOwnProperty(N) && ((a = l[N]), a !== void 0 && gs(e, t, N, a, l, void 0));
                    return;
                }
        }
        for (s in l) l.hasOwnProperty(s) && ((a = l[s]), a != null && ze(e, t, s, a, l, null));
    }
    function Qm(e, t, l, a) {
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
                    u = null,
                    s = null,
                    o = null,
                    y = null,
                    N = null;
                for (C in l) {
                    var E = l[C];
                    if (l.hasOwnProperty(C) && E != null)
                        switch (C) {
                            case 'checked':
                                break;
                            case 'value':
                                break;
                            case 'defaultValue':
                                o = E;
                            default:
                                a.hasOwnProperty(C) || ze(e, t, C, null, a, E);
                        }
                }
                for (var b in a) {
                    var C = a[b];
                    if (((E = l[b]), a.hasOwnProperty(b) && (C != null || E != null)))
                        switch (b) {
                            case 'type':
                                i = C;
                                break;
                            case 'name':
                                n = C;
                                break;
                            case 'checked':
                                y = C;
                                break;
                            case 'defaultChecked':
                                N = C;
                                break;
                            case 'value':
                                u = C;
                                break;
                            case 'defaultValue':
                                s = C;
                                break;
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                if (C != null) throw Error(r(137, t));
                                break;
                            default:
                                C !== E && ze(e, t, b, C, a, E);
                        }
                }
                Mu(e, u, s, o, y, N, i, n);
                return;
            case 'select':
                C = u = s = b = null;
                for (i in l)
                    if (((o = l[i]), l.hasOwnProperty(i) && o != null))
                        switch (i) {
                            case 'value':
                                break;
                            case 'multiple':
                                C = o;
                            default:
                                a.hasOwnProperty(i) || ze(e, t, i, null, a, o);
                        }
                for (n in a)
                    if (((i = a[n]), (o = l[n]), a.hasOwnProperty(n) && (i != null || o != null)))
                        switch (n) {
                            case 'value':
                                b = i;
                                break;
                            case 'defaultValue':
                                s = i;
                                break;
                            case 'multiple':
                                u = i;
                            default:
                                i !== o && ze(e, t, n, i, a, o);
                        }
                ((t = s),
                    (l = u),
                    (a = C),
                    b != null ? va(e, !!l, b, !1) : !!a != !!l && (t != null ? va(e, !!l, t, !0) : va(e, !!l, l ? [] : '', !1)));
                return;
            case 'textarea':
                C = b = null;
                for (s in l)
                    if (((n = l[s]), l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s)))
                        switch (s) {
                            case 'value':
                                break;
                            case 'children':
                                break;
                            default:
                                ze(e, t, s, null, a, n);
                        }
                for (u in a)
                    if (((n = a[u]), (i = l[u]), a.hasOwnProperty(u) && (n != null || i != null)))
                        switch (u) {
                            case 'value':
                                b = n;
                                break;
                            case 'defaultValue':
                                C = n;
                                break;
                            case 'children':
                                break;
                            case 'dangerouslySetInnerHTML':
                                if (n != null) throw Error(r(91));
                                break;
                            default:
                                n !== i && ze(e, t, u, n, a, i);
                        }
                so(e, b, C);
                return;
            case 'option':
                for (var Q in l)
                    if (((b = l[Q]), l.hasOwnProperty(Q) && b != null && !a.hasOwnProperty(Q)))
                        switch (Q) {
                            case 'selected':
                                e.selected = !1;
                                break;
                            default:
                                ze(e, t, Q, null, a, b);
                        }
                for (o in a)
                    if (((b = a[o]), (C = l[o]), a.hasOwnProperty(o) && b !== C && (b != null || C != null)))
                        switch (o) {
                            case 'selected':
                                e.selected = b && typeof b != 'function' && typeof b != 'symbol';
                                break;
                            default:
                                ze(e, t, o, b, a, C);
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
                for (var I in l) ((b = l[I]), l.hasOwnProperty(I) && b != null && !a.hasOwnProperty(I) && ze(e, t, I, null, a, b));
                for (y in a)
                    if (((b = a[y]), (C = l[y]), a.hasOwnProperty(y) && b !== C && (b != null || C != null)))
                        switch (y) {
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                if (b != null) throw Error(r(137, t));
                                break;
                            default:
                                ze(e, t, y, b, a, C);
                        }
                return;
            default:
                if (wu(t)) {
                    for (var we in l) ((b = l[we]), l.hasOwnProperty(we) && b !== void 0 && !a.hasOwnProperty(we) && gs(e, t, we, void 0, a, b));
                    for (N in a) ((b = a[N]), (C = l[N]), !a.hasOwnProperty(N) || b === C || (b === void 0 && C === void 0) || gs(e, t, N, b, a, C));
                    return;
                }
        }
        for (var m in l) ((b = l[m]), l.hasOwnProperty(m) && b != null && !a.hasOwnProperty(m) && ze(e, t, m, null, a, b));
        for (E in a) ((b = a[E]), (C = l[E]), !a.hasOwnProperty(E) || b === C || (b == null && C == null) || ze(e, t, E, b, a, C));
    }
    function md(e) {
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
    function Xm() {
        if (typeof performance.getEntriesByType == 'function') {
            for (var e = 0, t = 0, l = performance.getEntriesByType('resource'), a = 0; a < l.length; a++) {
                var n = l[a],
                    i = n.transferSize,
                    u = n.initiatorType,
                    s = n.duration;
                if (i && s && md(u)) {
                    for (u = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
                        var o = l[a],
                            y = o.startTime;
                        if (y > s) break;
                        var N = o.transferSize,
                            E = o.initiatorType;
                        N && md(E) && ((o = o.responseEnd), (u += N * (o < s ? 1 : (s - y) / (o - y))));
                    }
                    if ((--a, (t += (8 * (i + u)) / (n.duration / 1e3)), e++, 10 < e)) break;
                }
            }
            if (0 < e) return t / e / 1e6;
        }
        return navigator.connection && ((e = navigator.connection.downlink), typeof e == 'number') ? e : 5;
    }
    var ys = null,
        ps = null;
    function Pi(e) {
        return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function vd(e) {
        switch (e) {
            case 'http://www.w3.org/2000/svg':
                return 1;
            case 'http://www.w3.org/1998/Math/MathML':
                return 2;
            default:
                return 0;
        }
    }
    function gd(e, t) {
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
    function Ss(e, t) {
        return (
            e === 'textarea' ||
            e === 'noscript' ||
            typeof t.children == 'string' ||
            typeof t.children == 'number' ||
            typeof t.children == 'bigint' ||
            (typeof t.dangerouslySetInnerHTML == 'object' && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
        );
    }
    var bs = null;
    function Vm() {
        var e = window.event;
        return e && e.type === 'popstate' ? (e === bs ? !1 : ((bs = e), !0)) : ((bs = null), !1);
    }
    var yd = typeof setTimeout == 'function' ? setTimeout : void 0,
        Zm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
        pd = typeof Promise == 'function' ? Promise : void 0,
        Km =
            typeof queueMicrotask == 'function'
                ? queueMicrotask
                : typeof pd < 'u'
                  ? function (e) {
                        return pd.resolve(null).then(e).catch(Jm);
                    }
                  : yd;
    function Jm(e) {
        setTimeout(function () {
            throw e;
        });
    }
    function Ul(e) {
        return e === 'head';
    }
    function Sd(e, t) {
        var l = t,
            a = 0;
        do {
            var n = l.nextSibling;
            if ((e.removeChild(l), n && n.nodeType === 8))
                if (((l = n.data), l === '/$' || l === '/&')) {
                    if (a === 0) {
                        (e.removeChild(n), Ka(t));
                        return;
                    }
                    a--;
                } else if (l === '$' || l === '$?' || l === '$~' || l === '$!' || l === '&') a++;
                else if (l === 'html') kn(e.ownerDocument.documentElement);
                else if (l === 'head') {
                    ((l = e.ownerDocument.head), kn(l));
                    for (var i = l.firstChild; i; ) {
                        var u = i.nextSibling,
                            s = i.nodeName;
                        (i[Pa] || s === 'SCRIPT' || s === 'STYLE' || (s === 'LINK' && i.rel.toLowerCase() === 'stylesheet') || l.removeChild(i),
                            (i = u));
                    }
                } else l === 'body' && kn(e.ownerDocument.body);
            l = n;
        } while (l);
        Ka(t);
    }
    function bd(e, t) {
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
    function xs(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var l = t;
            switch (((t = t.nextSibling), l.nodeName)) {
                case 'HTML':
                case 'HEAD':
                case 'BODY':
                    (xs(l), Au(l));
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
    function Wm(e, t, l, a) {
        for (; e.nodeType === 1; ) {
            var n = l;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
            } else if (a) {
                if (!e[Pa])
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
            if (((e = Ut(e.nextSibling)), e === null)) break;
        }
        return null;
    }
    function $m(e, t, l) {
        if (t === '') return null;
        for (; e.nodeType !== 3; )
            if (((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !l) || ((e = Ut(e.nextSibling)), e === null)) return null;
        return e;
    }
    function xd(e, t) {
        for (; e.nodeType !== 8; )
            if (((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) || ((e = Ut(e.nextSibling)), e === null)) return null;
        return e;
    }
    function Cs(e) {
        return e.data === '$?' || e.data === '$~';
    }
    function js(e) {
        return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState !== 'loading');
    }
    function Fm(e, t) {
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
    function Ut(e) {
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
    var Ns = null;
    function Cd(e) {
        e = e.nextSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === '/$' || l === '/&') {
                    if (t === 0) return Ut(e.nextSibling);
                    t--;
                } else (l !== '$' && l !== '$!' && l !== '$?' && l !== '$~' && l !== '&') || t++;
            }
            e = e.nextSibling;
        }
        return null;
    }
    function jd(e) {
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
    function Nd(e, t, l) {
        switch (((t = Pi(l)), e)) {
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
    function kn(e) {
        for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
        Au(e);
    }
    var kt = new Map(),
        Td = new Set();
    function eu(e) {
        return typeof e.getRootNode == 'function' ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    var vl = _.d;
    _.d = { f: Im, r: Pm, D: ev, C: tv, L: lv, m: av, X: iv, S: nv, M: uv };
    function Im() {
        var e = vl.f(),
            t = Vi();
        return e || t;
    }
    function Pm(e) {
        var t = da(e);
        t !== null && t.tag === 5 && t.type === 'form' ? Yr(t) : vl.r(e);
    }
    var Xa = typeof document > 'u' ? null : document;
    function Ad(e, t, l) {
        var a = Xa;
        if (a && typeof t == 'string' && t) {
            var n = Mt(t);
            ((n = 'link[rel="' + e + '"][href="' + n + '"]'),
                typeof l == 'string' && (n += '[crossorigin="' + l + '"]'),
                Td.has(n) ||
                    (Td.add(n),
                    (e = { rel: e, crossOrigin: l, href: t }),
                    a.querySelector(n) === null && ((t = a.createElement('link')), nt(t, 'link', e), Ie(t), a.head.appendChild(t))));
        }
    }
    function ev(e) {
        (vl.D(e), Ad('dns-prefetch', e, null));
    }
    function tv(e, t) {
        (vl.C(e, t), Ad('preconnect', e, t));
    }
    function lv(e, t, l) {
        vl.L(e, t, l);
        var a = Xa;
        if (a && e && t) {
            var n = 'link[rel="preload"][as="' + Mt(t) + '"]';
            t === 'image' && l && l.imageSrcSet
                ? ((n += '[imagesrcset="' + Mt(l.imageSrcSet) + '"]'),
                  typeof l.imageSizes == 'string' && (n += '[imagesizes="' + Mt(l.imageSizes) + '"]'))
                : (n += '[href="' + Mt(e) + '"]');
            var i = n;
            switch (t) {
                case 'style':
                    i = Va(e);
                    break;
                case 'script':
                    i = Za(e);
            }
            kt.has(i) ||
                ((e = D({ rel: 'preload', href: t === 'image' && l && l.imageSrcSet ? void 0 : e, as: t }, l)),
                kt.set(i, e),
                a.querySelector(n) !== null ||
                    (t === 'style' && a.querySelector(Ln(i))) ||
                    (t === 'script' && a.querySelector(Hn(i))) ||
                    ((t = a.createElement('link')), nt(t, 'link', e), Ie(t), a.head.appendChild(t)));
        }
    }
    function av(e, t) {
        vl.m(e, t);
        var l = Xa;
        if (l && e) {
            var a = t && typeof t.as == 'string' ? t.as : 'script',
                n = 'link[rel="modulepreload"][as="' + Mt(a) + '"][href="' + Mt(e) + '"]',
                i = n;
            switch (a) {
                case 'audioworklet':
                case 'paintworklet':
                case 'serviceworker':
                case 'sharedworker':
                case 'worker':
                case 'script':
                    i = Za(e);
            }
            if (!kt.has(i) && ((e = D({ rel: 'modulepreload', href: e }, t)), kt.set(i, e), l.querySelector(n) === null)) {
                switch (a) {
                    case 'audioworklet':
                    case 'paintworklet':
                    case 'serviceworker':
                    case 'sharedworker':
                    case 'worker':
                    case 'script':
                        if (l.querySelector(Hn(i))) return;
                }
                ((a = l.createElement('link')), nt(a, 'link', e), Ie(a), l.head.appendChild(a));
            }
        }
    }
    function nv(e, t, l) {
        vl.S(e, t, l);
        var a = Xa;
        if (a && e) {
            var n = ha(a).hoistableStyles,
                i = Va(e);
            t = t || 'default';
            var u = n.get(i);
            if (!u) {
                var s = { loading: 0, preload: null };
                if ((u = a.querySelector(Ln(i)))) s.loading = 5;
                else {
                    ((e = D({ rel: 'stylesheet', href: e, 'data-precedence': t }, l)), (l = kt.get(i)) && Ts(e, l));
                    var o = (u = a.createElement('link'));
                    (Ie(o),
                        nt(o, 'link', e),
                        (o._p = new Promise(function (y, N) {
                            ((o.onload = y), (o.onerror = N));
                        })),
                        o.addEventListener('load', function () {
                            s.loading |= 1;
                        }),
                        o.addEventListener('error', function () {
                            s.loading |= 2;
                        }),
                        (s.loading |= 4),
                        tu(u, t, a));
                }
                ((u = { type: 'stylesheet', instance: u, count: 1, state: s }), n.set(i, u));
            }
        }
    }
    function iv(e, t) {
        vl.X(e, t);
        var l = Xa;
        if (l && e) {
            var a = ha(l).hoistableScripts,
                n = Za(e),
                i = a.get(n);
            i ||
                ((i = l.querySelector(Hn(n))),
                i ||
                    ((e = D({ src: e, async: !0 }, t)),
                    (t = kt.get(n)) && As(e, t),
                    (i = l.createElement('script')),
                    Ie(i),
                    nt(i, 'link', e),
                    l.head.appendChild(i)),
                (i = { type: 'script', instance: i, count: 1, state: null }),
                a.set(n, i));
        }
    }
    function uv(e, t) {
        vl.M(e, t);
        var l = Xa;
        if (l && e) {
            var a = ha(l).hoistableScripts,
                n = Za(e),
                i = a.get(n);
            i ||
                ((i = l.querySelector(Hn(n))),
                i ||
                    ((e = D({ src: e, async: !0, type: 'module' }, t)),
                    (t = kt.get(n)) && As(e, t),
                    (i = l.createElement('script')),
                    Ie(i),
                    nt(i, 'link', e),
                    l.head.appendChild(i)),
                (i = { type: 'script', instance: i, count: 1, state: null }),
                a.set(n, i));
        }
    }
    function Ed(e, t, l, a) {
        var n = (n = ae.current) ? eu(n) : null;
        if (!n) throw Error(r(446));
        switch (e) {
            case 'meta':
            case 'title':
                return null;
            case 'style':
                return typeof l.precedence == 'string' && typeof l.href == 'string'
                    ? ((t = Va(l.href)),
                      (l = ha(n).hoistableStyles),
                      (a = l.get(t)),
                      a || ((a = { type: 'style', instance: null, count: 0, state: null }), l.set(t, a)),
                      a)
                    : { type: 'void', instance: null, count: 0, state: null };
            case 'link':
                if (l.rel === 'stylesheet' && typeof l.href == 'string' && typeof l.precedence == 'string') {
                    e = Va(l.href);
                    var i = ha(n).hoistableStyles,
                        u = i.get(e);
                    if (
                        (u ||
                            ((n = n.ownerDocument || n),
                            (u = { type: 'stylesheet', instance: null, count: 0, state: { loading: 0, preload: null } }),
                            i.set(e, u),
                            (i = n.querySelector(Ln(e))) && !i._p && ((u.instance = i), (u.state.loading = 5)),
                            kt.has(e) ||
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
                                kt.set(e, l),
                                i || cv(n, e, l, u.state))),
                        t && a === null)
                    )
                        throw Error(r(528, ''));
                    return u;
                }
                if (t && a !== null) throw Error(r(529, ''));
                return null;
            case 'script':
                return (
                    (t = l.async),
                    (l = l.src),
                    typeof l == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
                        ? ((t = Za(l)),
                          (l = ha(n).hoistableScripts),
                          (a = l.get(t)),
                          a || ((a = { type: 'script', instance: null, count: 0, state: null }), l.set(t, a)),
                          a)
                        : { type: 'void', instance: null, count: 0, state: null }
                );
            default:
                throw Error(r(444, e));
        }
    }
    function Va(e) {
        return 'href="' + Mt(e) + '"';
    }
    function Ln(e) {
        return 'link[rel="stylesheet"][' + e + ']';
    }
    function Md(e) {
        return D({}, e, { 'data-precedence': e.precedence, precedence: null });
    }
    function cv(e, t, l, a) {
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
              nt(t, 'link', l),
              Ie(t),
              e.head.appendChild(t));
    }
    function Za(e) {
        return '[src="' + Mt(e) + '"]';
    }
    function Hn(e) {
        return 'script[async]' + e;
    }
    function zd(e, t, l) {
        if ((t.count++, t.instance === null))
            switch (t.type) {
                case 'style':
                    var a = e.querySelector('style[data-href~="' + Mt(l.href) + '"]');
                    if (a) return ((t.instance = a), Ie(a), a);
                    var n = D({}, l, { 'data-href': l.href, 'data-precedence': l.precedence, href: null, precedence: null });
                    return ((a = (e.ownerDocument || e).createElement('style')), Ie(a), nt(a, 'style', n), tu(a, l.precedence, e), (t.instance = a));
                case 'stylesheet':
                    n = Va(l.href);
                    var i = e.querySelector(Ln(n));
                    if (i) return ((t.state.loading |= 4), (t.instance = i), Ie(i), i);
                    ((a = Md(l)), (n = kt.get(n)) && Ts(a, n), (i = (e.ownerDocument || e).createElement('link')), Ie(i));
                    var u = i;
                    return (
                        (u._p = new Promise(function (s, o) {
                            ((u.onload = s), (u.onerror = o));
                        })),
                        nt(i, 'link', a),
                        (t.state.loading |= 4),
                        tu(i, l.precedence, e),
                        (t.instance = i)
                    );
                case 'script':
                    return (
                        (i = Za(l.src)),
                        (n = e.querySelector(Hn(i)))
                            ? ((t.instance = n), Ie(n), n)
                            : ((a = l),
                              (n = kt.get(i)) && ((a = D({}, l)), As(a, n)),
                              (e = e.ownerDocument || e),
                              (n = e.createElement('script')),
                              Ie(n),
                              nt(n, 'link', a),
                              e.head.appendChild(n),
                              (t.instance = n))
                    );
                case 'void':
                    return null;
                default:
                    throw Error(r(443, t.type));
            }
        else t.type === 'stylesheet' && (t.state.loading & 4) === 0 && ((a = t.instance), (t.state.loading |= 4), tu(a, l.precedence, e));
        return t.instance;
    }
    function tu(e, t, l) {
        for (
            var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
                n = a.length ? a[a.length - 1] : null,
                i = n,
                u = 0;
            u < a.length;
            u++
        ) {
            var s = a[u];
            if (s.dataset.precedence === t) i = s;
            else if (i !== n) break;
        }
        i ? i.parentNode.insertBefore(e, i.nextSibling) : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
    }
    function Ts(e, t) {
        (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
            e.title == null && (e.title = t.title));
    }
    function As(e, t) {
        (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
            e.integrity == null && (e.integrity = t.integrity));
    }
    var lu = null;
    function wd(e, t, l) {
        if (lu === null) {
            var a = new Map(),
                n = (lu = new Map());
            n.set(l, a);
        } else ((n = lu), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
        if (a.has(e)) return a;
        for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
            var i = l[n];
            if (!(i[Pa] || i[et] || (e === 'link' && i.getAttribute('rel') === 'stylesheet')) && i.namespaceURI !== 'http://www.w3.org/2000/svg') {
                var u = i.getAttribute(t) || '';
                u = e + u;
                var s = a.get(u);
                s ? s.push(i) : a.set(u, [i]);
            }
        }
        return a;
    }
    function Dd(e, t, l) {
        ((e = e.ownerDocument || e), e.head.insertBefore(l, t === 'title' ? e.querySelector('head > title') : null));
    }
    function sv(e, t, l) {
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
    function Od(e) {
        return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
    }
    function ov(e, t, l, a) {
        if (l.type === 'stylesheet' && (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
            if (l.instance === null) {
                var n = Va(a.href),
                    i = t.querySelector(Ln(n));
                if (i) {
                    ((t = i._p),
                        t !== null && typeof t == 'object' && typeof t.then == 'function' && (e.count++, (e = au.bind(e)), t.then(e, e)),
                        (l.state.loading |= 4),
                        (l.instance = i),
                        Ie(i));
                    return;
                }
                ((i = t.ownerDocument || t), (a = Md(a)), (n = kt.get(n)) && Ts(a, n), (i = i.createElement('link')), Ie(i));
                var u = i;
                ((u._p = new Promise(function (s, o) {
                    ((u.onload = s), (u.onerror = o));
                })),
                    nt(i, 'link', a),
                    (l.instance = i));
            }
            (e.stylesheets === null && (e.stylesheets = new Map()),
                e.stylesheets.set(l, t),
                (t = l.state.preload) &&
                    (l.state.loading & 3) === 0 &&
                    (e.count++, (l = au.bind(e)), t.addEventListener('load', l), t.addEventListener('error', l)));
        }
    }
    var Es = 0;
    function rv(e, t) {
        return (
            e.stylesheets && e.count === 0 && iu(e, e.stylesheets),
            0 < e.count || 0 < e.imgCount
                ? function (l) {
                      var a = setTimeout(function () {
                          if ((e.stylesheets && iu(e, e.stylesheets), e.unsuspend)) {
                              var i = e.unsuspend;
                              ((e.unsuspend = null), i());
                          }
                      }, 6e4 + t);
                      0 < e.imgBytes && Es === 0 && (Es = 62500 * Xm());
                      var n = setTimeout(
                          function () {
                              if (((e.waitingForImages = !1), e.count === 0 && (e.stylesheets && iu(e, e.stylesheets), e.unsuspend))) {
                                  var i = e.unsuspend;
                                  ((e.unsuspend = null), i());
                              }
                          },
                          (e.imgBytes > Es ? 50 : 800) + t
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
    function au() {
        if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
            if (this.stylesheets) iu(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                ((this.unsuspend = null), e());
            }
        }
    }
    var nu = null;
    function iu(e, t) {
        ((e.stylesheets = null), e.unsuspend !== null && (e.count++, (nu = new Map()), t.forEach(fv, e), (nu = null), au.call(e)));
    }
    function fv(e, t) {
        if (!(t.state.loading & 4)) {
            var l = nu.get(e);
            if (l) var a = l.get(null);
            else {
                ((l = new Map()), nu.set(e, l));
                for (var n = e.querySelectorAll('link[data-precedence],style[data-precedence]'), i = 0; i < n.length; i++) {
                    var u = n[i];
                    (u.nodeName === 'LINK' || u.getAttribute('media') !== 'not all') && (l.set(u.dataset.precedence, u), (a = u));
                }
                a && l.set(null, a);
            }
            ((n = t.instance),
                (u = n.getAttribute('data-precedence')),
                (i = l.get(u) || a),
                i === a && l.set(null, n),
                l.set(u, n),
                this.count++,
                (a = au.bind(this)),
                n.addEventListener('load', a),
                n.addEventListener('error', a),
                i ? i.parentNode.insertBefore(n, i.nextSibling) : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(n, e.firstChild)),
                (t.state.loading |= 4));
        }
    }
    var Bn = { $$typeof: be, Provider: null, Consumer: null, _currentValue: q, _currentValue2: q, _threadCount: 0 };
    function dv(e, t, l, a, n, i, u, s, o) {
        ((this.tag = 1),
            (this.containerInfo = e),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
            (this.callbackPriority = 0),
            (this.expirationTimes = Cu(-1)),
            (this.entangledLanes =
                this.shellSuspendCounter =
                this.errorRecoveryDisabledLanes =
                this.expiredLanes =
                this.warmLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = Cu(0)),
            (this.hiddenUpdates = Cu(null)),
            (this.identifierPrefix = a),
            (this.onUncaughtError = n),
            (this.onCaughtError = i),
            (this.onRecoverableError = u),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = o),
            (this.incompleteTransitions = new Map()));
    }
    function _d(e, t, l, a, n, i, u, s, o, y, N, E) {
        return (
            (e = new dv(e, t, l, u, o, y, N, E, s)),
            (t = 1),
            i === !0 && (t |= 24),
            (i = bt(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (t = uc()),
            t.refCount++,
            (e.pooledCache = t),
            t.refCount++,
            (i.memoizedState = { element: a, isDehydrated: l, cache: t }),
            rc(i),
            e
        );
    }
    function Rd(e) {
        return e ? ((e = ja), e) : ja;
    }
    function Ud(e, t, l, a, n, i) {
        ((n = Rd(n)),
            a.context === null ? (a.context = n) : (a.pendingContext = n),
            (a = Nl(t)),
            (a.payload = { element: l }),
            (i = i === void 0 ? null : i),
            i !== null && (a.callback = i),
            (l = Tl(e, a, t)),
            l !== null && (gt(l, e, t), yn(l, e, t)));
    }
    function kd(e, t) {
        if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
            var l = e.retryLane;
            e.retryLane = l !== 0 && l < t ? l : t;
        }
    }
    function Ms(e, t) {
        (kd(e, t), (e = e.alternate) && kd(e, t));
    }
    function Ld(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Fl(e, 67108864);
            (t !== null && gt(t, e, 67108864), Ms(e, 67108864));
        }
    }
    function Hd(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Tt();
            t = ju(t);
            var l = Fl(e, t);
            (l !== null && gt(l, e, t), Ms(e, t));
        }
    }
    var uu = !0;
    function hv(e, t, l, a) {
        var n = p.T;
        p.T = null;
        var i = _.p;
        try {
            ((_.p = 2), zs(e, t, l, a));
        } finally {
            ((_.p = i), (p.T = n));
        }
    }
    function mv(e, t, l, a) {
        var n = p.T;
        p.T = null;
        var i = _.p;
        try {
            ((_.p = 8), zs(e, t, l, a));
        } finally {
            ((_.p = i), (p.T = n));
        }
    }
    function zs(e, t, l, a) {
        if (uu) {
            var n = ws(a);
            if (n === null) (vs(e, t, a, cu, l), qd(e, a));
            else if (gv(n, e, t, l, a)) a.stopPropagation();
            else if ((qd(e, a), t & 4 && -1 < vv.indexOf(e))) {
                for (; n !== null; ) {
                    var i = da(n);
                    if (i !== null)
                        switch (i.tag) {
                            case 3:
                                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                                    var u = Zl(i.pendingLanes);
                                    if (u !== 0) {
                                        var s = i;
                                        for (s.pendingLanes |= 2, s.entangledLanes |= 2; u; ) {
                                            var o = 1 << (31 - st(u));
                                            ((s.entanglements[1] |= o), (u &= ~o));
                                        }
                                        ($t(i), (Se & 6) === 0 && ((Qi = ct() + 500), _n(0)));
                                    }
                                }
                                break;
                            case 31:
                            case 13:
                                ((s = Fl(i, 2)), s !== null && gt(s, i, 2), Vi(), Ms(i, 2));
                        }
                    if (((i = ws(a)), i === null && vs(e, t, a, cu, l), i === n)) break;
                    n = i;
                }
                n !== null && a.stopPropagation();
            } else vs(e, t, a, null, l);
        }
    }
    function ws(e) {
        return ((e = Ou(e)), Ds(e));
    }
    var cu = null;
    function Ds(e) {
        if (((cu = null), (e = fa(e)), e !== null)) {
            var t = U(e);
            if (t === null) e = null;
            else {
                var l = t.tag;
                if (l === 13) {
                    if (((e = B(t)), e !== null)) return e;
                    e = null;
                } else if (l === 31) {
                    if (((e = Z(t)), e !== null)) return e;
                    e = null;
                } else if (l === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null;
                } else t !== e && (e = null);
            }
        }
        return ((cu = e), null);
    }
    function Bd(e) {
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
                switch (pu()) {
                    case Jn:
                        return 2;
                    case Wn:
                        return 8;
                    case Vl:
                    case $n:
                        return 32;
                    case Wa:
                        return 268435456;
                    default:
                        return 32;
                }
            default:
                return 32;
        }
    }
    var Os = !1,
        kl = null,
        Ll = null,
        Hl = null,
        qn = new Map(),
        Yn = new Map(),
        Bl = [],
        vv =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
                ' '
            );
    function qd(e, t) {
        switch (e) {
            case 'focusin':
            case 'focusout':
                kl = null;
                break;
            case 'dragenter':
            case 'dragleave':
                Ll = null;
                break;
            case 'mouseover':
            case 'mouseout':
                Hl = null;
                break;
            case 'pointerover':
            case 'pointerout':
                qn.delete(t.pointerId);
                break;
            case 'gotpointercapture':
            case 'lostpointercapture':
                Yn.delete(t.pointerId);
        }
    }
    function Gn(e, t, l, a, n, i) {
        return e === null || e.nativeEvent !== i
            ? ((e = { blockedOn: t, domEventName: l, eventSystemFlags: a, nativeEvent: i, targetContainers: [n] }),
              t !== null && ((t = da(t)), t !== null && Ld(t)),
              e)
            : ((e.eventSystemFlags |= a), (t = e.targetContainers), n !== null && t.indexOf(n) === -1 && t.push(n), e);
    }
    function gv(e, t, l, a, n) {
        switch (t) {
            case 'focusin':
                return ((kl = Gn(kl, e, t, l, a, n)), !0);
            case 'dragenter':
                return ((Ll = Gn(Ll, e, t, l, a, n)), !0);
            case 'mouseover':
                return ((Hl = Gn(Hl, e, t, l, a, n)), !0);
            case 'pointerover':
                var i = n.pointerId;
                return (qn.set(i, Gn(qn.get(i) || null, e, t, l, a, n)), !0);
            case 'gotpointercapture':
                return ((i = n.pointerId), Yn.set(i, Gn(Yn.get(i) || null, e, t, l, a, n)), !0);
        }
        return !1;
    }
    function Yd(e) {
        var t = fa(e.target);
        if (t !== null) {
            var l = U(t);
            if (l !== null) {
                if (((t = l.tag), t === 13)) {
                    if (((t = B(l)), t !== null)) {
                        ((e.blockedOn = t),
                            Ps(e.priority, function () {
                                Hd(l);
                            }));
                        return;
                    }
                } else if (t === 31) {
                    if (((t = Z(l)), t !== null)) {
                        ((e.blockedOn = t),
                            Ps(e.priority, function () {
                                Hd(l);
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
    function su(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var l = ws(e.nativeEvent);
            if (l === null) {
                l = e.nativeEvent;
                var a = new l.constructor(l.type, l);
                ((Du = a), l.target.dispatchEvent(a), (Du = null));
            } else return ((t = da(l)), t !== null && Ld(t), (e.blockedOn = l), !1);
            t.shift();
        }
        return !0;
    }
    function Gd(e, t, l) {
        su(e) && l.delete(t);
    }
    function yv() {
        ((Os = !1),
            kl !== null && su(kl) && (kl = null),
            Ll !== null && su(Ll) && (Ll = null),
            Hl !== null && su(Hl) && (Hl = null),
            qn.forEach(Gd),
            Yn.forEach(Gd));
    }
    function ou(e, t) {
        e.blockedOn === t && ((e.blockedOn = null), Os || ((Os = !0), f.unstable_scheduleCallback(f.unstable_NormalPriority, yv)));
    }
    var ru = null;
    function Qd(e) {
        ru !== e &&
            ((ru = e),
            f.unstable_scheduleCallback(f.unstable_NormalPriority, function () {
                ru === e && (ru = null);
                for (var t = 0; t < e.length; t += 3) {
                    var l = e[t],
                        a = e[t + 1],
                        n = e[t + 2];
                    if (typeof a != 'function') {
                        if (Ds(a || l) === null) continue;
                        break;
                    }
                    var i = da(l);
                    i !== null && (e.splice(t, 3), (t -= 3), wc(i, { pending: !0, data: n, method: l.method, action: a }, a, n));
                }
            }));
    }
    function Ka(e) {
        function t(o) {
            return ou(o, e);
        }
        (kl !== null && ou(kl, e), Ll !== null && ou(Ll, e), Hl !== null && ou(Hl, e), qn.forEach(t), Yn.forEach(t));
        for (var l = 0; l < Bl.length; l++) {
            var a = Bl[l];
            a.blockedOn === e && (a.blockedOn = null);
        }
        for (; 0 < Bl.length && ((l = Bl[0]), l.blockedOn === null); ) (Yd(l), l.blockedOn === null && Bl.shift());
        if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
            for (a = 0; a < l.length; a += 3) {
                var n = l[a],
                    i = l[a + 1],
                    u = n[rt] || null;
                if (typeof i == 'function') u || Qd(l);
                else if (u) {
                    var s = null;
                    if (i && i.hasAttribute('formAction')) {
                        if (((n = i), (u = i[rt] || null))) s = u.formAction;
                        else if (Ds(n) !== null) continue;
                    } else s = u.action;
                    (typeof s == 'function' ? (l[a + 1] = s) : (l.splice(a, 3), (a -= 3)), Qd(l));
                }
            }
    }
    function Xd() {
        function e(i) {
            i.canIntercept &&
                i.info === 'react-transition' &&
                i.intercept({
                    handler: function () {
                        return new Promise(function (u) {
                            return (n = u);
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
    function _s(e) {
        this._internalRoot = e;
    }
    ((fu.prototype.render = _s.prototype.render =
        function (e) {
            var t = this._internalRoot;
            if (t === null) throw Error(r(409));
            var l = t.current,
                a = Tt();
            Ud(l, a, e, t, null, null);
        }),
        (fu.prototype.unmount = _s.prototype.unmount =
            function () {
                var e = this._internalRoot;
                if (e !== null) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    (Ud(e.current, 2, null, e, null, null), Vi(), (t[ra] = null));
                }
            }));
    function fu(e) {
        this._internalRoot = e;
    }
    fu.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = Is();
            e = { blockedOn: null, target: e, priority: t };
            for (var l = 0; l < Bl.length && t !== 0 && t < Bl[l].priority; l++);
            (Bl.splice(l, 0, e), l === 0 && Yd(e));
        }
    };
    var Vd = S.version;
    if (Vd !== '19.2.0') throw Error(r(527, Vd, '19.2.0'));
    _.findDOMNode = function (e) {
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == 'function' ? Error(r(188)) : ((e = Object.keys(e).join(',')), Error(r(268, e)));
        return ((e = j(t)), (e = e !== null ? k(e) : null), (e = e === null ? null : e.stateNode), e);
    };
    var pv = { bundleType: 0, version: '19.2.0', rendererPackageName: 'react-dom', currentDispatcherRef: p, reconcilerVersion: '19.2.0' };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
        var du = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!du.isDisabled && du.supportsFiber)
            try {
                ((G = du.inject(pv)), (Le = du));
            } catch {}
    }
    return (
        (Xn.createRoot = function (e, t) {
            if (!w(e)) throw Error(r(299));
            var l = !1,
                a = '',
                n = Fr,
                i = Ir,
                u = Pr;
            return (
                t != null &&
                    (t.unstable_strictMode === !0 && (l = !0),
                    t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
                    t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
                    t.onCaughtError !== void 0 && (i = t.onCaughtError),
                    t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
                (t = _d(e, 1, !1, null, null, l, a, null, n, i, u, Xd)),
                (e[ra] = t.current),
                ms(e),
                new _s(t)
            );
        }),
        (Xn.hydrateRoot = function (e, t, l) {
            if (!w(e)) throw Error(r(299));
            var a = !1,
                n = '',
                i = Fr,
                u = Ir,
                s = Pr,
                o = null;
            return (
                l != null &&
                    (l.unstable_strictMode === !0 && (a = !0),
                    l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
                    l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
                    l.onCaughtError !== void 0 && (u = l.onCaughtError),
                    l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
                    l.formState !== void 0 && (o = l.formState)),
                (t = _d(e, 1, !0, t, l ?? null, a, n, o, i, u, s, Xd)),
                (t.context = Rd(null)),
                (l = t.current),
                (a = Tt()),
                (a = ju(a)),
                (n = Nl(a)),
                (n.callback = null),
                Tl(l, n, a),
                (l = a),
                (t.current.lanes = l),
                Ia(t, l),
                $t(t),
                (e[ra] = t.current),
                ms(e),
                new fu(t)
            );
        }),
        (Xn.version = '19.2.0'),
        Xn
    );
}
var th;
function wv() {
    if (th) return ks.exports;
    th = 1;
    function f() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
            } catch (S) {
                console.error(S);
            }
    }
    return (f(), (ks.exports = zv()), ks.exports);
}
var Dv = wv();
class Ov extends v.Component {
    constructor(S) {
        (super(S), (this.state = { hasError: !1 }));
    }
    static getDerivedStateFromError(S) {
        return { hasError: !0, error: S };
    }
    componentDidCatch(S, x) {
        console.error('React Error Boundary caught an error:', S, x);
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
const _v = ({ currentView: f, onViewChange: S, onMinimize: x, onClose: r }) => {
    const [w, U] = v.useState(''),
        [B, Z] = v.useState(null);
    v.useEffect(() => {
        if (f === 'assistant') {
            const ee = setInterval(() => {
                U('0s');
            }, 1e3);
            return (
                Z(ee),
                () => {
                    ee && clearInterval(ee);
                }
            );
        } else (B && (clearInterval(B), Z(null)), U(''));
    }, [f, B]);
    const M = () =>
            ({
                onboarding: 'Welcome to Cheating Daddy',
                main: 'Cheating Daddy',
                customize: 'Customize',
                help: 'Help & Shortcuts',
                history: 'Conversation History',
                advanced: 'Advanced Tools',
                assistant: 'Cheating Daddy',
            })[f] || 'Cheating Daddy',
        j = () => ['customize', 'help', 'history', 'advanced'].includes(f),
        k = () =>
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
        Y = () =>
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
        te = () =>
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
        K = () =>
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
        $ = () =>
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
            c.jsx('div', { className: 'header-title', children: M() }),
            c.jsxs('div', {
                className: 'header-actions',
                children: [
                    f === 'assistant' &&
                        c.jsxs(c.Fragment, {
                            children: [
                                c.jsx('span', { children: w }),
                                c.jsx('span', { children: 'Ready' }),
                                c.jsxs('button', {
                                    className: 'button',
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
                                c.jsx('button', { className: 'icon-button window-close', onClick: r, children: c.jsx(K, {}) }),
                            ],
                        }),
                    f === 'main' &&
                        c.jsxs(c.Fragment, {
                            children: [
                                c.jsx('button', {
                                    className: 'icon-button',
                                    title: 'Conversation History',
                                    onClick: () => S('history'),
                                    children: c.jsx(k, {}),
                                }),
                                c.jsx('button', {
                                    className: 'icon-button',
                                    title: 'Advanced Tools',
                                    onClick: () => S('advanced'),
                                    children: c.jsx(te, {}),
                                }),
                                c.jsx('button', {
                                    className: 'icon-button',
                                    title: 'Customize',
                                    onClick: () => S('customize'),
                                    children: c.jsx(D, {}),
                                }),
                                c.jsx('button', {
                                    className: 'icon-button',
                                    title: 'Help & Shortcuts',
                                    onClick: () => S('help'),
                                    children: c.jsx(Y, {}),
                                }),
                                c.jsx('button', { className: 'icon-button window-close', onClick: r, children: c.jsx(K, {}) }),
                            ],
                        }),
                    f === 'onboarding' &&
                        c.jsx('button', { className: 'icon-button window-close', onClick: () => S('main'), children: c.jsx(K, {}) }),
                    j() &&
                        c.jsxs(c.Fragment, {
                            children: [
                                c.jsx('button', {
                                    className: 'icon-button',
                                    title: 'Back to Main',
                                    onClick: () => S('main'),
                                    children: c.jsx($, {}),
                                }),
                                c.jsx('button', { className: 'icon-button window-close', onClick: r, children: c.jsx(K, {}) }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
async function vu() {
    try {
        const f = window;
        if (f.require) {
            const { ipcRenderer: S } = f.require('electron'),
                x = await S.invoke('update-sizes');
            x.success ? console.log('Window resized for current view') : console.error('Failed to resize window:', x.error);
        }
    } catch (f) {
        console.error('Error resizing window:', f);
    }
}
const Rv = ({ onStart: f, onAPIKeyHelp: S, isInitializing: x, onLayoutModeChange: r, showApiKeyError: w = !1 }) => {
        const [U, B] = v.useState(() => localStorage.getItem('apiKey') || ''),
            [Z, M] = v.useState(w);
        (v.useEffect(() => {
            M(w);
        }, [w]),
            v.useEffect(() => {
                const K = ($, ee) => {};
                return (
                    window.electron?.ipcRenderer?.on('session-initializing', K),
                    () => {
                        window.electron?.ipcRenderer?.removeAllListeners('session-initializing');
                    }
                );
            }, []),
            v.useEffect(() => {
                ((() => {
                    const $ = localStorage.getItem('layoutMode');
                    $ && $ !== 'normal' && r($);
                })(),
                    vu());
            }, [r]));
        const j = v.useCallback(K => {
            (navigator.platform.toUpperCase().indexOf('MAC') >= 0 ? K.metaKey && K.key === 'Enter' : K.ctrlKey && K.key === 'Enter') &&
                (K.preventDefault(), D());
        }, []);
        v.useEffect(() => (document.addEventListener('keydown', j), () => document.removeEventListener('keydown', j)), [j]);
        const k = K => {
                const $ = K.target.value;
                (B($), localStorage.setItem('apiKey', $), Z && M(!1));
            },
            D = () => {
                x || f();
            },
            Y = () => {
                S();
            };
        v.useCallback(() => {
            (M(!0),
                setTimeout(() => {
                    M(!1);
                }, 1e3));
        }, []);
        const te = () => {
            const K = navigator.platform.toUpperCase().indexOf('MAC') >= 0,
                $ = c.jsxs('svg', {
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
                ee = c.jsxs('svg', {
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
            return K
                ? c.jsxs(c.Fragment, { children: ['Start Session ', c.jsxs('span', { className: 'shortcut-icons', children: [$, ee] })] })
                : c.jsxs(c.Fragment, { children: ['Start Session ', c.jsxs('span', { className: 'shortcut-icons', children: ['Ctrl', ee] })] });
        };
        return c.jsx(c.Fragment, {
            children: c.jsxs('div', {
                className: 'main-view',
                children: [
                    c.jsx('div', { className: 'welcome', children: 'Welcomezzzz' }),
                    c.jsxs('div', {
                        className: 'input-group',
                        children: [
                            c.jsx('input', {
                                type: 'password',
                                placeholder: 'Enter your Gemini API Key',
                                value: U,
                                onChange: k,
                                className: Z ? 'api-key-error' : '',
                            }),
                            c.jsx('button', { onClick: D, className: `start-button ${x ? 'initializing' : ''}`, children: te() }),
                        ],
                    }),
                    c.jsxs('p', {
                        className: 'description',
                        children: ['dont have an api key?', c.jsx('span', { onClick: Y, className: 'link', children: 'get one here' })],
                    }),
                ],
            }),
        });
    },
    Uv = ({
        responses: f,
        currentResponseIndex: S,
        selectedProfile: x,
        onSendText: r,
        shouldAnimateResponse: w,
        savedResponses: U,
        onResponseIndexChanged: B,
        onStopSession: Z,
    }) => {
        const [M, j] = v.useState(U),
            [k, D] = v.useState(0),
            Y = v.useRef(null),
            te = v.useRef(null),
            K = v.useCallback(
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
            $ = v.useCallback(() => {
                const O = K();
                return f.length > 0 && S >= 0 ? f[S] : `Hey, I'm listening to your ${O[x] || 'session'}?`;
            }, [f, S, x, K]),
            ee = v.useCallback(() => {
                const O = localStorage.getItem('fontSize');
                if (O !== null) {
                    const p = parseInt(O, 10) || 20;
                    document.documentElement.style.setProperty('--response-font-size', `${p}px`);
                }
            }, []);
        (v.useEffect(() => {
            ee();
        }, [ee]),
            v.useEffect(() => {
                j(U);
            }, [U]));
        const Ae = v.useCallback(() => (f.length > 0 ? `${S + 1}/${f.length}` : ''), [f.length, S]),
            De = v.useCallback(() => {
                const O = $();
                return M.some(p => p.response === O);
            }, [$, M]),
            be = v.useCallback(() => {
                if (S > 0) {
                    const O = S - 1;
                    B?.(O);
                }
            }, [S, B]),
            Ce = v.useCallback(() => {
                if (S < f.length - 1) {
                    const O = S + 1;
                    B?.(O);
                }
            }, [S, f.length, B]),
            Re = v.useCallback(() => {
                if (Y.current) {
                    const O = Y.current,
                        p = O.clientHeight * 0.3;
                    O.scrollTop = Math.max(0, O.scrollTop - p);
                }
            }, []),
            Oe = v.useCallback(() => {
                if (Y.current) {
                    const O = Y.current,
                        p = O.clientHeight * 0.3;
                    O.scrollTop = Math.min(O.scrollHeight - O.clientHeight, O.scrollTop + p);
                }
            }, []);
        v.useEffect(() => {
            if (window.electron?.ipcRenderer) {
                const O = window.electron.ipcRenderer,
                    p = () => {
                        (console.log('Received navigate-previous-response message'), be());
                    },
                    _ = () => {
                        (console.log('Received navigate-next-response message'), Ce());
                    },
                    q = () => {
                        (console.log('Received scroll-response-up message'), Re());
                    },
                    J = () => {
                        (console.log('Received scroll-response-down message'), Oe());
                    };
                return (
                    O.on('navigate-previous-response', p),
                    O.on('navigate-next-response', _),
                    O.on('scroll-response-up', q),
                    O.on('scroll-response-down', J),
                    () => {
                        (O.removeAllListeners('navigate-previous-response'),
                            O.removeAllListeners('navigate-next-response'),
                            O.removeAllListeners('scroll-response-up'),
                            O.removeAllListeners('scroll-response-down'));
                    }
                );
            }
        }, [be, Ce, Re, Oe]);
        const L = v.useCallback(async () => {
                if (te.current && te.current.value.trim()) {
                    const O = te.current.value.trim();
                    ((te.current.value = ''), await r(O));
                }
            }, [r]),
            ie = v.useCallback(
                O => {
                    O.key === 'Enter' && !O.shiftKey && (O.preventDefault(), L());
                },
                [L]
            ),
            me = v.useCallback(() => {
                const O = $();
                if (O && !De()) {
                    const p = [...M, { response: O, timestamp: new Date().toISOString(), profile: x }];
                    (j(p), localStorage.setItem('savedResponses', JSON.stringify(p)));
                }
            }, [$, De, M, x]);
        v.useCallback(() => {
            setTimeout(() => {
                Y.current && (Y.current.scrollTop = Y.current.scrollHeight);
            }, 0);
        }, []);
        const P = v.useCallback(O => {
                if (typeof window < 'u' && window.marked)
                    try {
                        window.marked.setOptions({ breaks: !0, gfm: !0, sanitize: !1 });
                        let p = window.marked.parse(O);
                        return ((p = Be(p)), p);
                    } catch (p) {
                        return (console.warn('Error parsing markdown:', p), O);
                    }
                return (console.log('Marked not available, using plain text'), O);
            }, []),
            Be = v.useCallback(O => {
                const _ = new DOMParser().parseFromString(O, 'text/html'),
                    q = ['PRE'];
                function J(le) {
                    if (le.nodeType === Node.TEXT_NODE && le.textContent?.trim() && !q.includes(le.parentNode?.tagName || '')) {
                        const d = le.textContent.split(/(\s+)/),
                            T = document.createDocumentFragment();
                        (d.forEach(R => {
                            if (R.trim()) {
                                const H = document.createElement('span');
                                (H.setAttribute('data-word', ''), (H.textContent = R), T.appendChild(H));
                            } else T.appendChild(document.createTextNode(R));
                        }),
                            le.parentNode.replaceChild(T, le));
                    } else le.nodeType === Node.ELEMENT_NODE && !q.includes(le.tagName) && Array.from(le.childNodes).forEach(J);
                }
                return (Array.from(_.body.childNodes).forEach(J), _.body.innerHTML);
            }, []),
            se = v.useCallback(() => {
                if ((console.log('updateResponseContent called'), Y.current)) {
                    const O = Y.current,
                        p = $();
                    console.log('Current response:', p);
                    const _ = P(p);
                    (console.log('Rendered response:', _), (O.innerHTML = _));
                    const q = O.querySelectorAll('[data-word]');
                    if (w) {
                        for (let J = 0; J < k && J < q.length; J++) q[J].classList.add('visible');
                        for (let J = k; J < q.length; J++)
                            (q[J].classList.remove('visible'),
                                setTimeout(
                                    () => {
                                        (q[J].classList.add('visible'), q.length - 1);
                                    },
                                    (J - k) * 100
                                ));
                        D(q.length);
                    } else (q.forEach(J => J.classList.add('visible')), D(q.length));
                } else console.log('Response container not found');
            }, [$, P, w, k]);
        (v.useEffect(() => {
            (S !== -1 && D(0), se());
        }, [f, S, se]),
            v.useEffect(() => {
                se();
            }, [se]),
            $());
        const xe = Ae(),
            je = De();
        return c.jsx(c.Fragment, {
            children: c.jsxs('div', {
                className: 'assistant-view',
                children: [
                    c.jsx('div', { className: 'response-container', ref: Y, id: 'responseContainer' }),
                    c.jsxs('div', {
                        className: 'text-input-container',
                        children: [
                            c.jsx('button', {
                                className: 'nav-button',
                                onClick: be,
                                disabled: S <= 0,
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
                            f.length > 0 && c.jsx('span', { className: 'response-counter', children: xe }),
                            c.jsx('button', {
                                className: `save-button ${je ? 'saved' : ''}`,
                                onClick: me,
                                title: je ? 'Response saved' : 'Save this response',
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
                            Z &&
                                c.jsx('button', {
                                    className: 'stop-session-button',
                                    onClick: Z,
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
                            c.jsx('input', { ref: te, type: 'text', id: 'textInput', placeholder: 'Type a message to the AI...', onKeyDown: ie }),
                            c.jsx('button', {
                                className: 'nav-button',
                                onClick: Ce,
                                disabled: S >= f.length - 1,
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
    kv = ({
        selectedProfile: f,
        selectedLanguage: S,
        selectedScreenshotInterval: x,
        selectedImageQuality: r,
        layoutMode: w,
        keybinds: U,
        googleSearchEnabled: B,
        backgroundTransparency: Z,
        fontSize: M,
        onProfileChange: j,
        onLanguageChange: k,
        onScreenshotIntervalChange: D,
        onImageQualityChange: Y,
        onLayoutModeChange: te,
        advancedMode: K,
        onAdvancedModeChange: $,
    }) => {
        const [ee, Ae] = v.useState(U),
            [De, be] = v.useState(w);
        (v.useEffect(() => {
            (ie(), P(), Be(), se(), xe(), je(), vu());
        }, []),
            v.useEffect(() => {
                Ae(U);
            }, [U]),
            v.useEffect(() => {
                be(w);
            }, [w]));
        const Ce = v.useCallback(
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
            Re = v.useCallback(
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
            Oe = v.useCallback(
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
            L = v.useCallback(() => {
                const z = window.cheddar?.isMacOS || navigator.platform.includes('Mac');
                return {
                    moveUp: z ? 'Alt+Up' : 'Ctrl+Up',
                    moveDown: z ? 'Alt+Down' : 'Ctrl+Down',
                    moveLeft: z ? 'Alt+Left' : 'Ctrl+Left',
                    moveRight: z ? 'Alt+Right' : 'Ctrl+Right',
                    toggleVisibility: z ? 'Cmd+\\' : 'Ctrl+\\',
                    toggleClickThrough: z ? 'Cmd+M' : 'Ctrl+M',
                    nextStep: z ? 'Cmd+Enter' : 'Ctrl+Enter',
                    previousResponse: z ? 'Cmd+[' : 'Ctrl+[',
                    nextResponse: z ? 'Cmd+]' : 'Ctrl+]',
                    scrollUp: z ? 'Cmd+Shift+Up' : 'Ctrl+Shift+Up',
                    scrollDown: z ? 'Cmd+Shift+Down' : 'Ctrl+Shift+Down',
                };
            }, []),
            ie = v.useCallback(() => {
                const z = localStorage.getItem('customKeybinds');
                if (z)
                    try {
                        const V = JSON.parse(z);
                        Ae({ ...L(), ...V });
                    } catch (V) {
                        (console.error('Failed to parse saved keybinds:', V), Ae(L()));
                    }
            }, [L]),
            me = v.useCallback(z => {
                if ((localStorage.setItem('customKeybinds', JSON.stringify(z)), window.electron?.ipcRenderer))
                    try {
                        window.electron.ipcRenderer.send('update-keybinds', z);
                    } catch (V) {
                        console.error('Failed to send keybinds to main process:', V);
                    }
            }, []),
            P = v.useCallback(() => {
                const z = localStorage.getItem('layoutMode');
                z && be(z);
            }, []),
            Be = v.useCallback(() => {}, []),
            se = v.useCallback(() => {}, []),
            xe = v.useCallback(() => {
                const z = localStorage.getItem('backgroundTransparency');
                z !== null && O(parseFloat(z));
            }, []),
            je = v.useCallback(() => {
                const z = localStorage.getItem('fontSize');
                z !== null && p(parseInt(z, 10));
            }, []),
            O = v.useCallback(z => {
                const V = document.documentElement;
                (V.style.setProperty('--header-background', `rgba(0, 0, 0, ${z})`),
                    V.style.setProperty('--main-content-background', `rgba(0, 0, 0, ${z})`),
                    V.style.setProperty('--card-background', `rgba(255, 255, 255, ${z * 0.05})`),
                    V.style.setProperty('--input-background', `rgba(0, 0, 0, ${z * 0.375})`),
                    V.style.setProperty('--input-focus-background', `rgba(0, 0, 0, ${z * 0.625})`),
                    V.style.setProperty('--button-background', `rgba(0, 0, 0, ${z * 0.625})`),
                    V.style.setProperty('--preview-video-background', `rgba(0, 0, 0, ${z * 1.125})`),
                    V.style.setProperty('--screen-option-background', `rgba(0, 0, 0, ${z * 0.5})`),
                    V.style.setProperty('--screen-option-hover-background', `rgba(0, 0, 0, ${z * 0.75})`),
                    V.style.setProperty('--scrollbar-background', `rgba(0, 0, 0, ${z * 0.5})`));
            }, []),
            p = v.useCallback(z => {
                document.documentElement.style.setProperty('--response-font-size', `${z}px`);
            }, []),
            _ = v.useCallback(
                z => {
                    const V = z.target.value;
                    (localStorage.setItem('selectedProfile', V), j(V));
                },
                [j]
            ),
            q = v.useCallback(
                z => {
                    const V = z.target.value;
                    (localStorage.setItem('selectedLanguage', V), k(V));
                },
                [k]
            ),
            J = v.useCallback(
                z => {
                    const V = z.target.value;
                    (localStorage.setItem('selectedScreenshotInterval', V), D(V));
                },
                [D]
            ),
            le = v.useCallback(
                z => {
                    const V = z.target.value;
                    Y(V);
                },
                [Y]
            ),
            d = v.useCallback(
                z => {
                    const V = z.target.value;
                    (localStorage.setItem('layoutMode', V), be(V), te(V));
                },
                [te]
            ),
            T = v.useCallback(z => {
                localStorage.setItem('customPrompt', z.target.value);
            }, []),
            R = v.useCallback(
                (z, V) => {
                    const pe = { ...ee, [z]: V };
                    (Ae(pe), me(pe));
                },
                [ee, me]
            ),
            H = v.useCallback(() => {
                const z = L();
                (Ae(z), localStorage.removeItem('customKeybinds'), me(z));
            }, [L, me]);
        v.useCallback(async z => {
            const V = z.target.checked;
            if ((localStorage.setItem('googleSearchEnabled', V.toString()), window.electron?.ipcRenderer))
                try {
                    window.electron.ipcRenderer.send('update-google-search', V);
                } catch (pe) {
                    console.error('Failed to send google search setting to main process:', pe);
                }
        }, []);
        const F = v.useCallback(
                z => {
                    const V = z.target.checked;
                    (localStorage.setItem('advancedMode', V.toString()), $(V));
                },
                [$]
            ),
            ae = v.useCallback(
                z => {
                    const V = parseFloat(z.target.value);
                    (localStorage.setItem('backgroundTransparency', V.toString()), O(V));
                },
                [O]
            ),
            oe = v.useCallback(
                z => {
                    const V = parseInt(z.target.value, 10);
                    (localStorage.setItem('fontSize', V.toString()), p(V));
                },
                [p]
            ),
            qe = v.useCallback(z => {
                ((z.target.placeholder = 'Press key combination...'), z.target.select());
            }, []),
            Ee = v.useCallback(
                z => {
                    z.preventDefault();
                    const V = [];
                    (z.ctrlKey && V.push('Ctrl'), z.metaKey && V.push('Cmd'), z.altKey && V.push('Alt'), z.shiftKey && V.push('Shift'));
                    let pe = z.key;
                    switch (z.code) {
                        case 'ArrowUp':
                            pe = 'Up';
                            break;
                        case 'ArrowDown':
                            pe = 'Down';
                            break;
                        case 'ArrowLeft':
                            pe = 'Left';
                            break;
                        case 'ArrowRight':
                            pe = 'Right';
                            break;
                        case 'Escape':
                            pe = 'Escape';
                            break;
                        case 'Enter':
                            pe = 'Enter';
                            break;
                        case 'Space':
                            pe = 'Space';
                            break;
                        case 'Backspace':
                            pe = 'Backspace';
                            break;
                        case 'Delete':
                            pe = 'Delete';
                            break;
                        case 'Tab':
                            pe = 'Tab';
                            break;
                        case 'BracketLeft':
                            pe = '[';
                            break;
                        case 'BracketRight':
                            pe = ']';
                            break;
                        case 'Backslash':
                            pe = '\\';
                            break;
                        case 'Semicolon':
                            pe = ';';
                            break;
                        case 'Quote':
                            pe = "'";
                            break;
                        case 'Comma':
                            pe = ',';
                            break;
                        case 'Period':
                            pe = '.';
                            break;
                        case 'Slash':
                            pe = '/';
                            break;
                        default:
                            z.key.length === 1 && (pe = z.key.toUpperCase());
                            break;
                    }
                    if (['Control', 'Meta', 'Alt', 'Shift'].includes(z.key)) return;
                    const gl = [...V, pe].join('+'),
                        Xl = z.currentTarget.dataset.action;
                    (R(Xl, gl), (z.currentTarget.value = gl), z.currentTarget.blur());
                },
                [R]
            ),
            At = v.useCallback(
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
            Lt = Ce(),
            Zt = Re(),
            Yl = Oe(),
            Ht = At(),
            Gl = Lt.find(z => z.value === f),
            Ql = Zt.find(z => z.value === S);
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
                                                    c.jsx('span', { className: 'current-selection', children: Gl?.name || 'Unknown' }),
                                                ],
                                            }),
                                            c.jsx('select', {
                                                className: 'form-control',
                                                value: f,
                                                onChange: _,
                                                children: Lt.map(z => c.jsx('option', { value: z.value, children: z.name }, z.value)),
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
                                            placeholder: `Add specific instructions for how you want the AI to behave during ${Yl[f] || 'this interaction'}...`,
                                            defaultValue: localStorage.getItem('customPrompt') || '',
                                            rows: 4,
                                            onChange: T,
                                        }),
                                        c.jsxs('div', {
                                            className: 'form-description',
                                            children: [
                                                "Personalize the AI's behavior with specific instructions that will be added to the",
                                                ' ',
                                                Yl[f] || 'selected profile',
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
                                        onChange: z => localStorage.setItem('audioMode', z.target.value),
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
                                        onChange: z => {
                                            (localStorage.setItem('stealthProfile', z.target.value),
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
                                                    c.jsx('span', { className: 'current-selection', children: Ql?.name || 'Unknown' }),
                                                ],
                                            }),
                                            c.jsx('select', {
                                                className: 'form-control',
                                                value: S,
                                                onChange: q,
                                                children: Zt.map(z => c.jsx('option', { value: z.value, children: z.name }, z.value)),
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
                                                        children: De.charAt(0).toUpperCase() + De.slice(1),
                                                    }),
                                                ],
                                            }),
                                            c.jsxs('select', {
                                                className: 'form-control',
                                                value: De,
                                                onChange: d,
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
                                            Ht.map(z =>
                                                c.jsxs(
                                                    'tr',
                                                    {
                                                        children: [
                                                            c.jsxs('td', {
                                                                children: [
                                                                    c.jsx('div', { className: 'action-name', children: z.name }),
                                                                    c.jsx('div', { className: 'action-description', children: z.description }),
                                                                ],
                                                            }),
                                                            c.jsx('td', {
                                                                children: c.jsx('input', {
                                                                    type: 'text',
                                                                    className: 'keybind-input form-control',
                                                                    value: ee[z.key] || '',
                                                                    'data-action': z.key,
                                                                    onFocus: qe,
                                                                    onKeyDown: Ee,
                                                                    readOnly: !0,
                                                                }),
                                                            }),
                                                        ],
                                                    },
                                                    z.key
                                                )
                                            ),
                                            c.jsx('tr', {
                                                className: 'table-reset-row',
                                                children: c.jsx('td', {
                                                    colSpan: 2,
                                                    children: c.jsx('button', {
                                                        className: 'reset-keybinds-button',
                                                        onClick: H,
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
                                                    c.jsxs('span', { className: 'current-selection', children: [Math.round(Z * 100), '%'] }),
                                                ],
                                            }),
                                            c.jsxs('div', {
                                                className: 'slider-container',
                                                children: [
                                                    c.jsx('div', {
                                                        className: 'slider-header',
                                                        children: c.jsx('span', { className: 'slider-value', children: Z.toFixed(2) }),
                                                    }),
                                                    c.jsx('input', {
                                                        type: 'range',
                                                        className: 'slider-input',
                                                        min: '0.1',
                                                        max: '1.0',
                                                        step: '0.05',
                                                        defaultValue: Z.toString(),
                                                        onChange: ae,
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
                                                children: ['Font Size', c.jsxs('span', { className: 'current-selection', children: [M, 'px'] })],
                                            }),
                                            c.jsxs('div', {
                                                className: 'slider-container',
                                                children: [
                                                    c.jsx('div', {
                                                        className: 'slider-header',
                                                        children: c.jsxs('span', { className: 'slider-value', children: [M, 'px'] }),
                                                    }),
                                                    c.jsx('input', {
                                                        type: 'range',
                                                        className: 'slider-input',
                                                        min: '12',
                                                        max: '32',
                                                        step: '1',
                                                        defaultValue: M.toString(),
                                                        onChange: oe,
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
                                                    c.jsx('span', { className: 'current-selection', children: x === 'manual' ? 'Manual' : `${x}s` }),
                                                ],
                                            }),
                                            c.jsxs('select', {
                                                className: 'form-control',
                                                value: x,
                                                onChange: J,
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
                                                    x === 'manual'
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
                                                onChange: le,
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
                                            checked: K,
                                            onChange: F,
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
    Lv = ({ onExternalLinkClick: f, keybinds: S }) => {
        const [x, r] = v.useState({});
        v.useEffect(() => {
            (vu(), U());
        }, [S]);
        const w = () => {
                const M = window.cheddar?.isMacOS || navigator.platform.includes('Mac');
                return {
                    moveUp: M ? 'Alt+Up' : 'Ctrl+Up',
                    moveDown: M ? 'Alt+Down' : 'Ctrl+Down',
                    moveLeft: M ? 'Alt+Left' : 'Ctrl+Left',
                    moveRight: M ? 'Alt+Right' : 'Ctrl+Right',
                    toggleVisibility: M ? 'Cmd+\\' : 'Ctrl+\\',
                    toggleClickThrough: M ? 'Cmd+M' : 'Ctrl+M',
                    nextStep: M ? 'Cmd+Enter' : 'Ctrl+Enter',
                    previousResponse: M ? 'Cmd+[' : 'Ctrl+[',
                    nextResponse: M ? 'Cmd+]' : 'Ctrl+]',
                    scrollUp: M ? 'Cmd+Shift+Up' : 'Ctrl+Shift+Up',
                    scrollDown: M ? 'Cmd+Shift+Down' : 'Ctrl+Shift+Down',
                };
            },
            U = () => {
                const M = localStorage.getItem('customKeybinds');
                if (M)
                    try {
                        const j = JSON.parse(M);
                        r({ ...w(), ...j });
                    } catch (j) {
                        (console.error('Failed to parse saved keybinds:', j), r(w()));
                    }
                else r(S && Object.keys(S).length > 0 ? S : w());
            },
            B = M =>
                M
                    ? M.split('+').map((j, k) => c.jsx('span', { className: 'key', children: j }, k))
                    : [c.jsx('span', { className: 'key', children: 'Not set' }, 'empty')],
            Z = M => {
                f(M);
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
                                        onClick: () => Z('https://cheatingdaddy.com'),
                                        children: '🌐 Official Website',
                                    }),
                                    c.jsx('div', {
                                        className: 'community-link',
                                        onClick: () => Z('https://github.com/sohzm/cheating-daddy'),
                                        children: '📂 GitHub Repository',
                                    }),
                                    c.jsx('div', {
                                        className: 'community-link',
                                        onClick: () => Z('https://discord.gg/GCBdubnXfJ'),
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
                                                    c.jsx('div', { className: 'shortcut-keys', children: B(x.moveUp) }),
                                                ],
                                            }),
                                            c.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    c.jsx('span', { className: 'shortcut-description', children: 'Move window down' }),
                                                    c.jsx('div', { className: 'shortcut-keys', children: B(x.moveDown) }),
                                                ],
                                            }),
                                            c.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    c.jsx('span', { className: 'shortcut-description', children: 'Move window left' }),
                                                    c.jsx('div', { className: 'shortcut-keys', children: B(x.moveLeft) }),
                                                ],
                                            }),
                                            c.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    c.jsx('span', { className: 'shortcut-description', children: 'Move window right' }),
                                                    c.jsx('div', { className: 'shortcut-keys', children: B(x.moveRight) }),
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
                                                    c.jsx('div', { className: 'shortcut-keys', children: B(x.toggleClickThrough) }),
                                                ],
                                            }),
                                            c.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    c.jsx('span', { className: 'shortcut-description', children: 'Toggle window visibility' }),
                                                    c.jsx('div', { className: 'shortcut-keys', children: B(x.toggleVisibility) }),
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
                                                    c.jsx('div', { className: 'shortcut-keys', children: B(x.nextStep) }),
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
                                                    c.jsx('div', { className: 'shortcut-keys', children: B(x.previousResponse) }),
                                                ],
                                            }),
                                            c.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    c.jsx('span', { className: 'shortcut-description', children: 'Next response' }),
                                                    c.jsx('div', { className: 'shortcut-keys', children: B(x.nextResponse) }),
                                                ],
                                            }),
                                            c.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    c.jsx('span', { className: 'shortcut-description', children: 'Scroll response up' }),
                                                    c.jsx('div', { className: 'shortcut-keys', children: B(x.scrollUp) }),
                                                ],
                                            }),
                                            c.jsxs('div', {
                                                className: 'shortcut-item',
                                                children: [
                                                    c.jsx('span', { className: 'shortcut-description', children: 'Scroll response down' }),
                                                    c.jsx('div', { className: 'shortcut-keys', children: B(x.scrollDown) }),
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
                                            B(x.toggleClickThrough),
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
                                            B(x.previousResponse),
                                            ' and',
                                            B(x.nextResponse),
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
    Hv = () => {
        const [f, S] = v.useState('sessions'),
            [x, r] = v.useState([]),
            [w, U] = v.useState([]),
            [B, Z] = v.useState(null),
            [M, j] = v.useState(!1),
            k = v.useCallback(async () => {
                j(!0);
                try {
                    const L = await window.cheddar.getAllConversationSessions();
                    r(L || []);
                } catch (L) {
                    (console.error('Failed to load conversations:', L), r([]));
                } finally {
                    j(!1);
                }
            }, []),
            D = v.useCallback(() => {
                try {
                    const L = localStorage.getItem('savedResponses'),
                        ie = L ? JSON.parse(L) : [];
                    U(ie);
                } catch (L) {
                    (console.error('Failed to load saved responses:', L), U([]));
                }
            }, []),
            Y = v.useCallback(L => {
                Z(L);
            }, []),
            te = v.useCallback(() => {
                Z(null);
            }, []),
            K = v.useCallback(
                L => {
                    const ie = w.filter((me, P) => P !== L);
                    (U(ie), localStorage.setItem('savedResponses', JSON.stringify(ie)));
                },
                [w]
            ),
            $ = v.useCallback(L => new Date(L).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), []),
            ee = v.useCallback(L => new Date(L).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: !0 }), []),
            Ae = v.useCallback(
                L => new Date(L).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }),
                []
            ),
            De = v.useCallback(
                L =>
                    L.transcription
                        ? L.transcription.length > 100
                            ? L.transcription.substring(0, 100) + '...'
                            : L.transcription
                        : 'No preview available',
                []
            ),
            be = v.useCallback(
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
            f === 'sessions' ? k() : D();
        }, [f, k, D]);
        const Ce = () =>
                M
                    ? c.jsx('div', { className: 'loading', children: 'Loading conversation history...' })
                    : x.length === 0
                      ? c.jsxs('div', {
                            className: 'emptyState',
                            children: [
                                c.jsx('div', { className: 'emptyStateTitle', children: 'No conversations yet' }),
                                c.jsx('div', { children: 'Start a session to see your conversation history here' }),
                            ],
                        })
                      : c.jsx('div', {
                            className: 'sessionsList',
                            children: x.map(L =>
                                c.jsxs(
                                    'div',
                                    {
                                        className: 'sessionItem',
                                        onClick: () => Y(L),
                                        children: [
                                            c.jsxs('div', {
                                                className: 'sessionHeader',
                                                children: [
                                                    c.jsx('span', { className: 'sessionDate', children: $(L.timestamp) }),
                                                    c.jsx('span', { className: 'sessionTime', children: ee(L.timestamp) }),
                                                ],
                                            }),
                                            c.jsx('div', { className: 'sessionPreview', children: De(L) }),
                                        ],
                                    },
                                    L.id
                                )
                            ),
                        }),
            Re = () => {
                if (!B) return null;
                const { conversationHistory: L } = B,
                    ie = [];
                return (
                    L &&
                        L.forEach(me => {
                            (me.transcription && ie.push({ type: 'user', content: me.transcription, timestamp: me.timestamp }),
                                me.ai_response && ie.push({ type: 'ai', content: me.ai_response, timestamp: me.timestamp }));
                        }),
                    c.jsxs('div', {
                        className: 'historyContainer',
                        children: [
                            c.jsxs('div', {
                                className: 'backHeader',
                                children: [
                                    c.jsxs('button', {
                                        className: 'backButton',
                                        onClick: te,
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
                                    ie.length > 0
                                        ? ie.map((me, P) => c.jsx('div', { className: `message ${me.type}`, children: me.content }, P))
                                        : c.jsx('div', { className: 'emptyState', children: 'No conversation data available' }),
                            }),
                        ],
                    })
                );
            },
            Oe = () => {
                if (w.length === 0)
                    return c.jsxs('div', {
                        className: 'emptyState',
                        children: [
                            c.jsx('div', { className: 'emptyStateTitle', children: 'No saved responses' }),
                            c.jsx('div', { children: 'Use the save button during conversations to save important responses' }),
                        ],
                    });
                const L = be();
                return c.jsx('div', {
                    className: 'sessionsList',
                    children: w.map((ie, me) =>
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
                                                    c.jsx('span', { className: 'savedResponseProfile', children: L[ie.profile] || ie.profile }),
                                                    c.jsx('span', { className: 'savedResponseDate', children: Ae(ie.timestamp) }),
                                                ],
                                            }),
                                            c.jsx('button', {
                                                className: 'deleteButton',
                                                onClick: () => K(me),
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
                                    c.jsx('div', { className: 'savedResponseContent', children: ie.response }),
                                ],
                            },
                            me
                        )
                    ),
                });
            };
        return B
            ? Re()
            : c.jsx('div', {
                  className: 'host',
                  children: c.jsxs('div', {
                      className: 'historyContainer',
                      children: [
                          c.jsxs('div', {
                              className: 'tabsContainer',
                              children: [
                                  c.jsx('button', {
                                      className: `tab ${f === 'sessions' ? 'active' : ''}`,
                                      onClick: () => S('sessions'),
                                      children: 'Conversation History',
                                  }),
                                  c.jsxs('button', {
                                      className: `tab ${f === 'saved' ? 'active' : ''}`,
                                      onClick: () => S('saved'),
                                      children: ['Saved Responses (', w.length, ')'],
                                  }),
                              ],
                          }),
                          f === 'sessions' ? Ce() : Oe(),
                      ],
                  }),
              });
    },
    Bv = () => {
        const [f, S] = v.useState({
            isClearing: !1,
            statusMessage: '',
            statusType: '',
            throttleTokens: !0,
            maxTokensPerMin: 1e6,
            throttleAtPercent: 75,
            contentProtection: !0,
        });
        v.useEffect(() => {
            (x(), r(), vu());
        }, []);
        const x = () => {
                const k = localStorage.getItem('throttleTokens'),
                    D = localStorage.getItem('maxTokensPerMin'),
                    Y = localStorage.getItem('throttleAtPercent');
                S(te => ({
                    ...te,
                    throttleTokens: k !== null ? k === 'true' : !0,
                    maxTokensPerMin: (D !== null && parseInt(D, 10)) || 1e6,
                    throttleAtPercent: (Y !== null && parseInt(Y, 10)) || 75,
                }));
            },
            r = () => {
                const k = localStorage.getItem('contentProtection');
                S(D => ({ ...D, contentProtection: k !== null ? k === 'true' : !0 }));
            },
            w = async () => {
                if (!f.isClearing) {
                    S(k => ({ ...k, isClearing: !0, statusMessage: '', statusType: '' }));
                    try {
                        (localStorage.clear(), sessionStorage.clear());
                        const k = await indexedDB.databases(),
                            D = k.map(
                                te =>
                                    new Promise((K, $) => {
                                        if (!te.name) {
                                            K();
                                            return;
                                        }
                                        const ee = indexedDB.deleteDatabase(te.name);
                                        ((ee.onsuccess = () => K()),
                                            (ee.onerror = () => $(ee.error)),
                                            (ee.onblocked = () => {
                                                (console.warn(`Deletion of database ${te.name} was blocked`), K());
                                            }));
                                    })
                            );
                        if ((await Promise.all(D), 'caches' in window)) {
                            const te = await caches.keys();
                            await Promise.all(te.map(K => caches.delete(K)));
                        }
                        const Y = `✅ Successfully cleared all local data (${k.length} databases, localStorage, sessionStorage, and caches)`;
                        (S(te => ({ ...te, statusMessage: Y, statusType: 'success' })),
                            setTimeout(() => {
                                (S(te => ({ ...te, statusMessage: '🔄 Closing application...' })),
                                    setTimeout(async () => {
                                        window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('quit-application'));
                                    }, 1e3));
                            }, 2e3));
                    } catch (k) {
                        console.error('Error clearing data:', k);
                        const D = `❌ Error clearing data: ${k.message}`;
                        S(Y => ({ ...Y, statusMessage: D, statusType: 'error' }));
                    } finally {
                        S(k => ({ ...k, isClearing: !1 }));
                    }
                }
            },
            U = k => {
                const D = k.target.checked;
                (S(Y => ({ ...Y, throttleTokens: D })), localStorage.setItem('throttleTokens', D.toString()));
            },
            B = k => {
                const D = parseInt(k.target.value, 10);
                !isNaN(D) && D > 0 && (S(Y => ({ ...Y, maxTokensPerMin: D })), localStorage.setItem('maxTokensPerMin', D.toString()));
            },
            Z = k => {
                const D = parseInt(k.target.value, 10);
                !isNaN(D) &&
                    D >= 0 &&
                    D <= 100 &&
                    (S(Y => ({ ...Y, throttleAtPercent: D })), localStorage.setItem('throttleAtPercent', D.toString()));
            },
            M = () => {
                (S(k => ({ ...k, throttleTokens: !0, maxTokensPerMin: 1e6, throttleAtPercent: 75 })),
                    localStorage.removeItem('throttleTokens'),
                    localStorage.removeItem('maxTokensPerMin'),
                    localStorage.removeItem('throttleAtPercent'));
            },
            j = async k => {
                const D = k.target.checked;
                if ((S(Y => ({ ...Y, contentProtection: D })), localStorage.setItem('contentProtection', D.toString()), window.electron?.ipcRenderer))
                    try {
                        await window.electron.ipcRenderer.invoke('update-content-protection', D);
                    } catch (Y) {
                        console.error('Failed to update content protection:', Y);
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
                                            checked: f.contentProtection,
                                            onChange: j,
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
                                    children: f.contentProtection
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
                                            checked: f.throttleTokens,
                                            onChange: U,
                                        }),
                                        c.jsx('label', {
                                            htmlFor: 'throttle-tokens',
                                            className: 'checkboxLabel',
                                            children: 'Throttle tokens when close to rate limit',
                                        }),
                                    ],
                                }),
                                c.jsxs('div', {
                                    className: `rateLimitControls ${f.throttleTokens ? 'enabled' : ''}`,
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
                                                            value: f.maxTokensPerMin,
                                                            min: '1000',
                                                            max: '10000000',
                                                            step: '1000',
                                                            onInput: B,
                                                            disabled: !f.throttleTokens,
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
                                                            value: f.throttleAtPercent,
                                                            min: '1',
                                                            max: '99',
                                                            step: '1',
                                                            onInput: Z,
                                                            disabled: !f.throttleTokens,
                                                        }),
                                                        c.jsxs('div', {
                                                            className: 'formDescription',
                                                            children: [
                                                                'Start throttling when this percentage of the limit is reached (',
                                                                f.throttleAtPercent,
                                                                '% =',
                                                                Math.floor((f.maxTokensPerMin * f.throttleAtPercent) / 100),
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
                                                    onClick: M,
                                                    disabled: !f.throttleTokens,
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
                                    onClick: w,
                                    disabled: f.isClearing,
                                    children: f.isClearing ? '🔄 Clearing...' : '🗑️ Clear All Local Data',
                                }),
                                f.statusMessage &&
                                    c.jsx('div', {
                                        className: `statusMessage ${f.statusType === 'success' ? 'statusSuccess' : 'statusError'}`,
                                        children: f.statusMessage,
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    qv = ({ onComplete: f, onClose: S }) => {
        const [x, r] = v.useState(0),
            [w, U] = v.useState(''),
            [B, Z] = v.useState(!1),
            [M, j] = v.useState(0),
            [k, D] = v.useState(null),
            Y = v.useRef(null),
            te = v.useRef(null),
            K = 800,
            $ = [
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
            ee = [
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
            Ae = v.useCallback(P => (P < 0.5 ? 4 * P * P * P : 1 - Math.pow(-2 * P + 2, 3) / 2), []),
            De = v.useCallback(
                (P, Be, se) =>
                    P.map((xe, je) => {
                        const O = Be[je];
                        return [xe[0] + (O[0] - xe[0]) * se, xe[1] + (O[1] - xe[1]) * se, xe[2] + (O[2] - xe[2]) * se];
                    }),
                []
            ),
            be = v.useCallback(P => {
                U(P.target.value);
            }, []),
            Ce = v.useCallback(() => {
                (w.trim() && localStorage.setItem('customPrompt', w.trim()), localStorage.setItem('onboardingCompleted', 'true'), f());
            }, [w, f]),
            Re = v.useCallback(
                P => {
                    (D([...$[x]]), r(P), Z(!0), j(performance.now()));
                },
                [$, x]
            ),
            Oe = v.useCallback(() => {
                x < 4 ? Re(x + 1) : Ce();
            }, [x, Re, Ce]),
            L = v.useCallback(() => {
                x > 0 && Re(x - 1);
            }, [x, Re]),
            ie = v.useCallback(
                P => {
                    P !== x && Re(P);
                },
                [x, Re]
            );
        (v.useEffect(() => {
            const P = Y.current;
            if (!P || !P.getContext('2d')) return;
            const se = () => {
                const O = P.getBoundingClientRect();
                ((P.width = O.width), (P.height = O.height));
            };
            se();
            const xe = O => {
                (me(O), (te.current = requestAnimationFrame(xe)));
            };
            xe(0);
            const je = () => se();
            return (
                window.addEventListener('resize', je),
                () => {
                    (te.current && cancelAnimationFrame(te.current), window.removeEventListener('resize', je));
                }
            );
        }, []),
            v.useEffect(() => {
                const P = localStorage.getItem('customPrompt');
                P && U(P);
            }, []));
        const me = v.useCallback(
            P => {
                const Be = Y.current,
                    se = Be?.getContext('2d');
                if (!se || !Be) return;
                const { width: xe, height: je } = Be;
                let O = $[x];
                if (B && k) {
                    const H = P - M,
                        F = Math.min(H / K, 1),
                        ae = Ae(F);
                    ((O = De(k, $[x], ae)), F >= 1 && (Z(!1), D(null)));
                }
                const p = P * 5e-4,
                    _ = Math.sin(p * 0.7) * xe * 0.3,
                    q = Math.cos(p * 0.5) * je * 0.2,
                    J = se.createLinearGradient(_, q, xe + _ * 0.5, je + q * 0.5);
                (O.forEach((H, F) => {
                    const ae = F / (O.length - 1),
                        oe = Math.sin(p + F * 0.3) * 0.05,
                        qe = Math.max(0, Math.min(255, H[0] + oe * 5)),
                        Ee = Math.max(0, Math.min(255, H[1] + oe * 5)),
                        At = Math.max(0, Math.min(255, H[2] + oe * 5));
                    J.addColorStop(ae, `rgb(${qe}, ${Ee}, ${At})`);
                }),
                    (se.fillStyle = J),
                    se.fillRect(0, 0, xe, je));
                const le = xe * 0.5 + Math.sin(p * 0.3) * xe * 0.15,
                    d = je * 0.5 + Math.cos(p * 0.4) * je * 0.1,
                    T = Math.max(xe, je) * 0.8,
                    R = se.createRadialGradient(le, d, 0, le, d, T);
                (R.addColorStop(0, `rgba(${O[0][0] + 10}, ${O[0][1] + 10}, ${O[0][2] + 10}, 0.1)`),
                    R.addColorStop(0.5, `rgba(${O[2][0]}, ${O[2][1]}, ${O[2][2]}, 0.05)`),
                    R.addColorStop(1, `rgba(${O[O.length - 1][0]}, ${O[O.length - 1][1]}, ${O[O.length - 1][2]}, 0.03)`),
                    (se.globalCompositeOperation = 'overlay'),
                    (se.fillStyle = R),
                    se.fillRect(0, 0, xe, je),
                    (se.globalCompositeOperation = 'source-over'));
            },
            [x, B, k, M, $, Ae, De, K]
        );
        return c.jsx('div', {
            className: 'onboarding-view-root',
            children: c.jsxs('div', {
                className: 'onboarding-view-onboardingContainer',
                children: [
                    c.jsx('canvas', { ref: Y, className: 'onboarding-view-gradientCanvas' }),
                    c.jsxs('div', {
                        className: 'onboarding-view-contentWrapper',
                        children: [
                            c.jsx('img', { className: 'onboarding-view-slideIcon', src: ee[x].icon, alt: `${ee[x].title} icon` }),
                            c.jsx('div', { className: 'onboarding-view-slideTitle', children: ee[x].title }),
                            c.jsx('div', { className: 'onboarding-view-slideContent', children: ee[x].content }),
                            ee[x].showTextarea &&
                                c.jsx('textarea', {
                                    className: 'onboarding-view-contextTextarea',
                                    placeholder: 'Paste your resume, job description, or any relevant context here...',
                                    value: w,
                                    onChange: be,
                                }),
                            ee[x].showFeatures &&
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
                                onClick: L,
                                disabled: x === 0,
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
                                children: [0, 1, 2, 3, 4].map(P =>
                                    c.jsx(
                                        'div',
                                        { className: `onboarding-view-dot ${P === x ? 'onboarding-view-dotActive' : ''}`, onClick: () => ie(P) },
                                        P
                                    )
                                ),
                            }),
                            c.jsx('button', {
                                className: 'onboarding-view-navButton',
                                onClick: Oe,
                                children:
                                    x === 4
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
    Yv = () => {
        const [f, S] = v.useState(localStorage.getItem('onboardingCompleted') ? 'main' : 'onboarding'),
            [x, r] = v.useState(''),
            [w, U] = v.useState(null),
            [B, Z] = v.useState(!1),
            [M, j] = v.useState(!1),
            [k, D] = v.useState(!1),
            [Y, te] = v.useState(!1),
            [K, $] = v.useState(localStorage.getItem('selectedProfile') || 'interview'),
            [ee, Ae] = v.useState(localStorage.getItem('selectedLanguage') || 'en-US'),
            [De, be] = v.useState(localStorage.getItem('selectedScreenshotInterval') || '5'),
            [Ce, Re] = v.useState(localStorage.getItem('selectedImageQuality') || 'medium'),
            [Oe, L] = v.useState(localStorage.getItem('layoutMode') || 'normal'),
            [ie, me] = v.useState(localStorage.getItem('advancedMode') === 'true'),
            [P, Be] = v.useState(() => {
                try {
                    return JSON.parse(localStorage.getItem('customKeybinds') || '{}');
                } catch {
                    return {};
                }
            }),
            [se, xe] = v.useState(localStorage.getItem('googleSearchEnabled') === 'true'),
            [je, O] = v.useState(parseInt(localStorage.getItem('backgroundTransparency') || '80')),
            [p, _] = v.useState(parseInt(localStorage.getItem('fontSize') || '14')),
            [q, J] = v.useState([]),
            [le, d] = v.useState(-1),
            [T, R] = v.useState(!1),
            [H, F] = v.useState(() => {
                try {
                    return JSON.parse(localStorage.getItem('savedResponses') || '[]');
                } catch {
                    return [];
                }
            }),
            [ae, oe] = v.useState(!1),
            [qe, Ee] = v.useState(!1),
            [At, Lt] = v.useState(!0);
        (v.useEffect(() => {
            Wa(Oe);
        }, [Oe]),
            v.useEffect(() => {
                if (window.electron?.ipcRenderer) {
                    const G = window.electron.ipcRenderer,
                        Le = ($a, Ft) => {
                            Yl(Ft);
                        },
                        $e = ($a, Ft) => {
                            Zt(Ft);
                        },
                        st = ($a, Ft) => {
                            oe(Ft);
                        },
                        xu = ($a, Ft) => {
                            D(Ft);
                        };
                    return (
                        G.on('update-response', Le),
                        G.on('update-status', $e),
                        G.on('click-through-toggled', st),
                        G.on('session-initializing', xu),
                        () => {
                            (G.removeAllListeners('update-response'),
                                G.removeAllListeners('update-status'),
                                G.removeAllListeners('click-through-toggled'),
                                G.removeAllListeners('session-initializing'));
                        }
                    );
                }
            }, []),
            v.useEffect(() => {
                window.electron?.ipcRenderer && window.electron.ipcRenderer.send('view-changed', f);
            }, [f]),
            v.useEffect(() => {
                localStorage.setItem('selectedProfile', K);
            }, [K]),
            v.useEffect(() => {
                localStorage.setItem('selectedLanguage', ee);
            }, [ee]),
            v.useEffect(() => {
                localStorage.setItem('selectedScreenshotInterval', De);
            }, [De]),
            v.useEffect(() => {
                localStorage.setItem('selectedImageQuality', Ce);
            }, [Ce]),
            v.useEffect(() => {
                localStorage.setItem('advancedMode', ie.toString());
            }, [ie]));
        const Zt = v.useCallback(G => {
                (r(G), (G.includes('Ready') || G.includes('Listening') || G.includes('Error')) && Lt(!0));
            }, []),
            Yl = v.useCallback(
                G => {
                    const Le =
                        G.length < 30 &&
                        (G.toLowerCase().includes('hmm') ||
                            G.toLowerCase().includes('okay') ||
                            G.toLowerCase().includes('next') ||
                            G.toLowerCase().includes('go on') ||
                            G.toLowerCase().includes('continue'));
                    (J($e =>
                        qe || $e.length === 0
                            ? (d($e.length), Ee(!1), Lt(!1), [...$e, G])
                            : !At && !Le && $e.length > 0
                              ? [...$e.slice(0, $e.length - 1), G]
                              : (d($e.length), Lt(!1), [...$e, G])
                    ),
                        R(!0));
                },
                [qe, At]
            );
        (v.useCallback(() => {
            S('customize');
        }, []),
            v.useCallback(() => {
                S('help');
            }, []),
            v.useCallback(() => {
                S('history');
            }, []),
            v.useCallback(() => {
                S('advanced');
            }, []));
        const Ht = v.useCallback(async () => {
                window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('minimize-window'));
            }, []),
            Gl = v.useCallback(G => {
                S(G);
            }, []),
            Ql = v.useCallback(async () => {
                (f === 'assistant' &&
                    M &&
                    (window.cheddar && window.cheddar.stopCapture(),
                    window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('close-session')),
                    j(!1)),
                    console.log('Attempting to quit application...'),
                    window.electron?.ipcRenderer
                        ? (console.log('Calling quit-application IPC...'),
                          window.electron.ipcRenderer
                              .invoke('quit-application')
                              .then(G => {
                                  console.log('Quit application result:', G);
                              })
                              .catch(G => {
                                  console.error('Quit application error:', G);
                              }))
                        : console.error('window.electron.ipcRenderer not available'));
            }, [f, M]);
        v.useCallback(async () => {
            window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('toggle-window-visibility'));
        }, []);
        const z = v.useCallback(async () => {
                const G = localStorage.getItem('apiKey')?.trim();
                if (!G || G === '') {
                    te(!0);
                    return;
                }
                D(!0);
                try {
                    (window.cheddar && (await window.cheddar.initializeGemini(K, ee), window.cheddar.startCapture(De, Ce)),
                        J([]),
                        d(-1),
                        U(Date.now()),
                        S('assistant'));
                } catch (Le) {
                    (console.error('Failed to start session:', Le), D(!1));
                }
            }, [K, ee, De, Ce]),
            V = v.useCallback(async () => {
                window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('open-external', 'https://cheatingdaddy.com/help/api-key'));
            }, []),
            pe = v.useCallback(G => {
                $(G);
            }, []),
            gl = v.useCallback(G => {
                Ae(G);
            }, []),
            Xl = v.useCallback(G => {
                be(G);
            }, []),
            gu = v.useCallback(G => {
                Re(G);
            }, []),
            yu = v.useCallback(G => {
                me(G);
            }, []);
        v.useCallback(() => {
            S('main');
        }, []);
        const ct = v.useCallback(async G => {
                window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('open-external', G));
            }, []),
            pu = v.useCallback(async G => {
                if (window.cheddar) {
                    const Le = await window.cheddar.sendTextMessage(G);
                    Le.success ? (Zt('Message sent...'), Ee(!0)) : Zt('Error sending message: ' + Le.error);
                }
            }, []),
            Jn = v.useCallback(async () => {
                (window.cheddar && window.cheddar.stopCapture(),
                    window.electron?.ipcRenderer && (await window.electron.ipcRenderer.invoke('close-session')),
                    j(!1),
                    S('main'));
            }, []),
            Wn = v.useCallback(G => {
                (d(G), R(!1));
            }, []),
            Vl = v.useCallback(() => {
                S('main');
            }, []),
            $n = v.useCallback(async G => {
                if ((L(G), Wa(G), window.electron?.ipcRenderer))
                    try {
                        await window.electron.ipcRenderer.invoke('update-sizes');
                    } catch (Le) {
                        console.error('Failed to update sizes in main process:', Le);
                    }
            }, []),
            Wa = G => {
                G === 'compact'
                    ? document.documentElement.classList.add('compact-layout')
                    : document.documentElement.classList.remove('compact-layout');
            },
            Su = () => {
                switch (f) {
                    case 'onboarding':
                        return c.jsx(qv, { currentSlide: 0, contextText: '', onComplete: Vl, onClose: Vl });
                    case 'main':
                        return c.jsx(Rv, { onStart: z, onAPIKeyHelp: V, isInitializing: k, onLayoutModeChange: $n, showApiKeyError: Y });
                    case 'customize':
                        return c.jsx(kv, {
                            selectedProfile: K,
                            selectedLanguage: ee,
                            selectedScreenshotInterval: De,
                            selectedImageQuality: Ce,
                            layoutMode: Oe,
                            keybinds: P,
                            googleSearchEnabled: se,
                            backgroundTransparency: je,
                            fontSize: p,
                            onProfileChange: pe,
                            onLanguageChange: gl,
                            onScreenshotIntervalChange: Xl,
                            onImageQualityChange: gu,
                            onLayoutModeChange: $n,
                            advancedMode: ie,
                            onAdvancedModeChange: yu,
                        });
                    case 'help':
                        return c.jsx(Lv, { onExternalLinkClick: ct, keybinds: P });
                    case 'history':
                        return c.jsx(Hv, {});
                    case 'advanced':
                        return c.jsx(Bv, {});
                    case 'assistant':
                        return c.jsx(Uv, {
                            responses: q,
                            currentResponseIndex: le,
                            selectedProfile: K,
                            onSendText: pu,
                            shouldAnimateResponse: T,
                            savedResponses: H,
                            onResponseIndexChanged: Wn,
                            onStopSession: Jn,
                        });
                    default:
                        return c.jsxs('div', { children: ['Unknown view: ', f] });
                }
            },
            bu = () => {
                const G = 'main-content';
                return f === 'assistant' ? `${G} assistant-view` : f === 'onboarding' ? `${G} onboarding-view` : `${G} with-border`;
            };
        return c.jsx('div', {
            className: 'window-container',
            children: c.jsxs('div', {
                className: 'container',
                children: [
                    c.jsx(_v, { currentView: f, onViewChange: Gl, onMinimize: Ht, onClose: Ql }),
                    c.jsx('div', { className: bu(), children: c.jsx('div', { className: 'view-container', children: Su() }) }),
                ],
            }),
        });
    },
    Gv = () => {
        const [f, S] = v.useState(!1);
        v.useEffect(() => {
            x();
        }, []);
        const x = async () => {
            S(!0);
        };
        return f ? c.jsx(Ov, { children: c.jsx(Yv, {}) }) : c.jsx('div', { className: 'loading', children: 'Loading...' });
    };
window.electron = { ipcRenderer: window.require('electron').ipcRenderer };
const lh = document.getElementById('root');
if (!lh) throw new Error('Root element not found');
const Qv = Dv.createRoot(lh);
Qv.render(c.jsx(Nv.StrictMode, { children: c.jsx(Gv, {}) }));
const { ipcRenderer: pt } = window.require('electron');
window.randomDisplayName = null;
pt.invoke('get-random-display-name')
    .then(f => {
        ((window.randomDisplayName = f), console.log('Set random display name:', f));
    })
    .catch(f => {
        (console.warn('Could not get random display name:', f), (window.randomDisplayName = 'System Monitor'));
    });
let it = null,
    hu = null,
    Qt = null,
    Xt = null,
    mu = null;
const Gt = 24e3,
    Qs = 0.1,
    Xs = 4096;
let We = null,
    yt = null,
    Vn = null,
    ah = 'medium';
const nh = process.platform === 'linux',
    Vs = process.platform === 'darwin',
    Zn = {
        tokens: [],
        audioStartTime: null,
        addTokens(f, S = 'image') {
            const x = Date.now();
            (this.tokens.push({ timestamp: x, count: f, type: S }), this.cleanOldTokens());
        },
        calculateImageTokens(f, S) {
            if (f <= 384 && S <= 384) return 258;
            const x = Math.ceil(f / 768),
                r = Math.ceil(S / 768);
            return x * r * 258;
        },
        trackAudioTokens() {
            if (!this.audioStartTime) {
                this.audioStartTime = Date.now();
                return;
            }
            const f = Date.now(),
                S = (f - this.audioStartTime) / 1e3,
                x = Math.floor(S * 32);
            x > 0 && (this.addTokens(x, 'audio'), (this.audioStartTime = f));
        },
        cleanOldTokens() {
            const f = Date.now() - 6e4;
            this.tokens = this.tokens.filter(S => S.timestamp > f);
        },
        getTokensInLastMinute() {
            return (this.cleanOldTokens(), this.tokens.reduce((f, S) => f + S.count, 0));
        },
        shouldThrottle() {
            if (!(localStorage.getItem('throttleTokens') === 'true')) return !1;
            const S = parseInt(localStorage.getItem('maxTokensPerMin') || '1000000', 10),
                x = parseInt(localStorage.getItem('throttleAtPercent') || '75', 10),
                r = this.getTokensInLastMinute(),
                w = Math.floor((S * x) / 100);
            return (console.log(`Token check: ${r}/${S} (throttle at ${w})`), r >= w);
        },
        reset() {
            ((this.tokens = []), (this.audioStartTime = null));
        },
    };
setInterval(() => {
    Zn.trackAudioTokens();
}, 2e3);
function Zs(f) {
    const S = new Int16Array(f.length);
    for (let x = 0; x < f.length; x++) {
        const r = Math.max(-1, Math.min(1, f[x]));
        S[x] = r < 0 ? r * 32768 : r * 32767;
    }
    return S;
}
function Ks(f) {
    let S = '';
    const x = new Uint8Array(f),
        r = x.byteLength;
    for (let w = 0; w < r; w++) S += String.fromCharCode(x[w]);
    return btoa(S);
}
async function Xv(f = 'interview', S = 'en-US') {
    const x = localStorage.getItem('apiKey')?.trim();
    x && ((await pt.invoke('initialize-gemini', x, localStorage.getItem('customPrompt') || '', f, S)) ? Ja.setStatus('Live') : Ja.setStatus('error'));
}
pt.on('update-status', (f, S) => {
    (console.log('Status update:', S), Ja.setStatus(S));
});
async function Vv(f = 5, S = 'medium') {
    ((ah = S), Zn.reset(), console.log('🎯 Token tracker reset for new capture session'));
    const x = localStorage.getItem('audioMode') || 'speaker_only';
    try {
        if (Vs) {
            console.log('Starting macOS capture with SystemAudioDump...');
            const r = await pt.invoke('start-macos-audio');
            if (!r.success) throw new Error('Failed to start macOS audio capture: ' + r.error);
            if (
                ((it = await navigator.mediaDevices.getDisplayMedia({
                    video: { frameRate: 1, width: { ideal: 1920 }, height: { ideal: 1080 } },
                    audio: !1,
                })),
                console.log('macOS screen capture started - audio handled by SystemAudioDump'),
                x === 'mic_only' || x === 'both')
            ) {
                let w = null;
                try {
                    ((w = await navigator.mediaDevices.getUserMedia({
                        audio: { sampleRate: Gt, channelCount: 1, echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 },
                        video: !1,
                    })),
                        console.log('macOS microphone capture started'),
                        qs(w));
                } catch (U) {
                    console.warn('Failed to get microphone access on macOS:', U);
                }
            }
        } else if (nh) {
            try {
                ((it = await navigator.mediaDevices.getDisplayMedia({
                    video: { frameRate: 1, width: { ideal: 1920 }, height: { ideal: 1080 } },
                    audio: { sampleRate: Gt, channelCount: 1, echoCancellation: !1, noiseSuppression: !1, autoGainControl: !1 },
                })),
                    console.log('Linux system audio capture via getDisplayMedia succeeded'),
                    Zv());
            } catch (r) {
                (console.warn('System audio via getDisplayMedia failed, trying screen-only capture:', r),
                    (it = await navigator.mediaDevices.getDisplayMedia({
                        video: { frameRate: 1, width: { ideal: 1920 }, height: { ideal: 1080 } },
                        audio: !1,
                    })));
            }
            if (x === 'mic_only' || x === 'both') {
                let r = null;
                try {
                    ((r = await navigator.mediaDevices.getUserMedia({
                        audio: { sampleRate: Gt, channelCount: 1, echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 },
                        video: !1,
                    })),
                        console.log('Linux microphone capture started'),
                        qs(r));
                } catch (w) {
                    console.warn('Failed to get microphone access on Linux:', w);
                }
            }
            console.log('Linux capture started - system audio:', it.getAudioTracks().length > 0, 'microphone mode:', x);
        } else if (
            ((it = await navigator.mediaDevices.getDisplayMedia({
                video: { frameRate: 1, width: { ideal: 1920 }, height: { ideal: 1080 } },
                audio: { sampleRate: Gt, channelCount: 1, echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 },
            })),
            console.log('Windows capture started with loopback audio'),
            Kv(),
            x === 'mic_only' || x === 'both')
        ) {
            let r = null;
            try {
                ((r = await navigator.mediaDevices.getUserMedia({
                    audio: { sampleRate: Gt, channelCount: 1, echoCancellation: !0, noiseSuppression: !0, autoGainControl: !0 },
                    video: !1,
                })),
                    console.log('Windows microphone capture started'),
                    qs(r));
            } catch (w) {
                console.warn('Failed to get microphone access on Windows:', w);
            }
        }
        if (
            (console.log('MediaStream obtained:', {
                hasVideo: it.getVideoTracks().length > 0,
                hasAudio: it.getAudioTracks().length > 0,
                videoTrack: it.getVideoTracks()[0]?.getSettings(),
            }),
            f === 'manual' || f === 'Manual')
        )
            console.log('Manual mode enabled - screenshots will be captured on demand only');
        else {
            const r = parseInt(f) * 1e3;
            ((hu = setInterval(() => Ys(S), r)), setTimeout(() => Ys(S), 100));
        }
    } catch (r) {
        (console.error('Error starting capture:', r), Ja.setStatus('error'));
    }
}
function qs(f) {
    const S = new AudioContext({ sampleRate: Gt }),
        x = S.createMediaStreamSource(f),
        r = S.createScriptProcessor(Xs, 1, 1);
    let w = [];
    const U = Gt * Qs;
    ((r.onaudioprocess = async B => {
        const Z = B.inputBuffer.getChannelData(0);
        for (w.push(...Z); w.length >= U; ) {
            const M = w.splice(0, U),
                j = Zs(new Float32Array(M)),
                k = Ks(j.buffer);
            await pt.invoke('send-mic-audio-content', { data: k, mimeType: 'audio/pcm;rate=24000' });
        }
    }),
        x.connect(r),
        r.connect(S.destination),
        (mu = r));
}
function Zv() {
    if (!it) return;
    Qt = new AudioContext({ sampleRate: Gt });
    const f = Qt.createMediaStreamSource(it);
    Xt = Qt.createScriptProcessor(Xs, 1, 1);
    let S = [];
    const x = Gt * Qs;
    ((Xt.onaudioprocess = async r => {
        const w = r.inputBuffer.getChannelData(0);
        for (S.push(...w); S.length >= x; ) {
            const U = S.splice(0, x),
                B = Zs(new Float32Array(U)),
                Z = Ks(B.buffer);
            await pt.invoke('send-audio-content', { data: Z, mimeType: 'audio/pcm;rate=24000' });
        }
    }),
        f.connect(Xt),
        Xt.connect(Qt.destination));
}
function Kv() {
    if (!it) return;
    Qt = new AudioContext({ sampleRate: Gt });
    const f = Qt.createMediaStreamSource(it);
    Xt = Qt.createScriptProcessor(Xs, 1, 1);
    let S = [];
    const x = Gt * Qs;
    ((Xt.onaudioprocess = async r => {
        const w = r.inputBuffer.getChannelData(0);
        for (S.push(...w); S.length >= x; ) {
            const U = S.splice(0, x),
                B = Zs(new Float32Array(U)),
                Z = Ks(B.buffer);
            await pt.invoke('send-audio-content', { data: Z, mimeType: 'audio/pcm;rate=24000' });
        }
    }),
        f.connect(Xt),
        Xt.connect(Qt.destination));
}
async function Ys(f = 'medium', S = !1) {
    if ((console.log(`Capturing ${S ? 'manual' : 'automated'} screenshot...`), !it)) return;
    if (!S && Zn.shouldThrottle()) {
        console.log('⚠️ Automated screenshot skipped due to rate limiting');
        return;
    }
    if (
        (We ||
            ((We = document.createElement('video')),
            (We.srcObject = it),
            (We.muted = !0),
            (We.playsInline = !0),
            await We.play(),
            await new Promise(U => {
                if (We && We.readyState >= 2) return U();
                We && (We.onloadedmetadata = () => U());
            }),
            We && ((yt = document.createElement('canvas')), (yt.width = We.videoWidth), (yt.height = We.videoHeight), (Vn = yt.getContext('2d')))),
        !We || We.readyState < 2)
    ) {
        console.warn('Video not ready yet, skipping screenshot');
        return;
    }
    if (!yt || !Vn) {
        console.error('Canvas not initialized');
        return;
    }
    (Vn.drawImage(We, 0, 0, yt.width, yt.height),
        Vn.getImageData(0, 0, 1, 1).data.every((U, B) => (B === 3 ? !0 : U === 0)) && console.warn('Screenshot appears to be blank/black'));
    let w;
    switch (f) {
        case 'high':
            w = 0.9;
            break;
        case 'medium':
            w = 0.7;
            break;
        case 'low':
            w = 0.5;
            break;
        default:
            w = 0.7;
    }
    yt.toBlob(
        async U => {
            if (!U) {
                console.error('Failed to create blob from canvas');
                return;
            }
            const B = new FileReader();
            ((B.onloadend = async () => {
                const M = B.result.split(',')[1];
                if (!M || M.length < 100) {
                    console.error('Invalid base64 data generated');
                    return;
                }
                const j = await pt.invoke('send-image-content', { data: M });
                if (j.success) {
                    if (yt) {
                        const k = Zn.calculateImageTokens(yt.width, yt.height);
                        (Zn.addTokens(k, 'image'), console.log(`📊 Image sent successfully - ${k} tokens used (${yt.width}x${yt.height})`));
                    }
                } else console.error('Failed to send image:', j.error);
            }),
                B.readAsDataURL(U));
        },
        'image/jpeg',
        w
    );
}
async function ih(f = null) {
    (console.log('Manual screenshot triggered'),
        await Ys(f || ah, !0),
        await new Promise(x => setTimeout(x, 2e3)),
        await uh(`Help me on this page, give me the answer no bs, complete answer.
        So if its a code question, give me the approach in few bullet points, then the entire code. Also if theres anything else i need to know, tell me.
        If its a question about the website, give me the answer no bs, complete answer.
        If its a mcq question, give me the answer no bs, complete answer.
        `));
}
window.captureManualScreenshot = ih;
function Jv() {
    (hu && (clearInterval(hu), (hu = null)),
        Xt && (Xt.disconnect(), (Xt = null)),
        mu && (mu.disconnect(), (mu = null)),
        Qt && (Qt.close(), (Qt = null)),
        it && (it.getTracks().forEach(f => f.stop()), (it = null)),
        Vs &&
            pt.invoke('stop-macos-audio').catch(f => {
                console.error('Error stopping macOS audio:', f);
            }),
        We && (We.pause(), (We.srcObject = null), (We = null)),
        (yt = null),
        (Vn = null));
}
async function uh(f) {
    if (!f || f.trim().length === 0) return (console.warn('Cannot send empty text message'), { success: !1, error: 'Empty message' });
    try {
        const S = await pt.invoke('send-text-message', f);
        return (S.success ? console.log('Text message sent successfully') : console.error('Failed to send text message:', S.error), S);
    } catch (S) {
        return (console.error('Error sending text message:', S), { success: !1, error: S.message });
    }
}
let Vt = null;
async function Kn() {
    return new Promise((f, S) => {
        const x = indexedDB.open('ConversationHistory', 1);
        ((x.onerror = () => S(x.error)),
            (x.onsuccess = () => {
                ((Vt = x.result), f(Vt));
            }),
            (x.onupgradeneeded = r => {
                const w = r.target.result;
                w.objectStoreNames.contains('sessions') ||
                    w.createObjectStore('sessions', { keyPath: 'sessionId' }).createIndex('timestamp', 'timestamp', { unique: !1 });
            }));
    });
}
async function Wv(f, S) {
    if ((Vt || (await Kn()), !Vt)) throw new Error('Failed to initialize conversation database');
    const r = Vt.transaction(['sessions'], 'readwrite').objectStore('sessions'),
        w = { sessionId: f, timestamp: parseInt(f), conversationHistory: S, lastUpdated: Date.now() };
    return new Promise((U, B) => {
        const Z = r.put(w);
        ((Z.onerror = () => B(Z.error)), (Z.onsuccess = () => U(Z.result)));
    });
}
async function $v(f) {
    if ((Vt || (await Kn()), !Vt)) throw new Error('Failed to initialize conversation database');
    const x = Vt.transaction(['sessions'], 'readonly').objectStore('sessions');
    return new Promise((r, w) => {
        const U = x.get(f);
        ((U.onerror = () => w(U.error)), (U.onsuccess = () => r(U.result)));
    });
}
async function Fv() {
    if ((Vt || (await Kn()), !Vt)) throw new Error('Failed to initialize conversation database');
    const x = Vt.transaction(['sessions'], 'readonly').objectStore('sessions').index('timestamp');
    return new Promise((r, w) => {
        const U = x.getAll();
        ((U.onerror = () => w(U.error)),
            (U.onsuccess = () => {
                const B = U.result.sort((Z, M) => M.timestamp - Z.timestamp);
                r(B);
            }));
    });
}
pt.on('save-conversation-turn', async (f, S) => {
    try {
        (await Wv(S.sessionId, S.fullHistory), console.log('Conversation session saved:', S.sessionId));
    } catch (x) {
        console.error('Error saving conversation session:', x);
    }
});
Kn().catch(console.error);
pt.on('clear-sensitive-data', () => {
    (console.log('Clearing renderer-side sensitive data...'), localStorage.removeItem('apiKey'), localStorage.removeItem('customPrompt'));
});
function Iv(f) {
    const S = Ja.getCurrentView();
    (f === 'ctrl+enter' || f === 'cmd+enter') && (S === 'main' || ih());
}
document.querySelector('cheating-daddy-app');
const Ja = {
    element: () => ({ handleStart: () => {} }),
    e: () => ({ handleStart: () => {} }),
    getCurrentView: () => 'main',
    getLayoutMode: () => 'normal',
    setStatus: f => pt.send('update-status', f),
    setResponse: f => pt.send('update-response', f),
    initializeGemini: Xv,
    startCapture: Vv,
    stopCapture: Jv,
    sendTextMessage: uh,
    handleShortcut: Iv,
    getAllConversationSessions: Fv,
    getConversationSession: $v,
    initConversationStorage: Kn,
    getContentProtection: () => {
        const f = localStorage.getItem('contentProtection');
        return f !== null ? f === 'true' : !0;
    },
    isLinux: nh,
    isMacOS: Vs,
};
window.cheddar = Ja;
