var $v = Object.defineProperty;
var Fv = (d, l, a) => (l in d ? $v(d, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (d[l] = a));
var Pt = (d, l, a) => Fv(d, typeof l != 'symbol' ? l + '' : l, a);
function Hv(d, l) {
  for (var a = 0; a < l.length; a++) {
    const p = l[a];
    if (typeof p != 'string' && !Array.isArray(p)) {
      for (const g in p)
        if (g !== 'default' && !(g in d)) {
          const m = Object.getOwnPropertyDescriptor(p, g);
          m && Object.defineProperty(d, g, m.get ? m : { enumerable: !0, get: () => p[g] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(d, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const l = document.createElement('link').relList;
  if (l && l.supports && l.supports('modulepreload')) return;
  for (const g of document.querySelectorAll('link[rel="modulepreload"]')) p(g);
  new MutationObserver((g) => {
    for (const m of g)
      if (m.type === 'childList')
        for (const v of m.addedNodes) v.tagName === 'LINK' && v.rel === 'modulepreload' && p(v);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(g) {
    const m = {};
    return (
      g.integrity && (m.integrity = g.integrity),
      g.referrerPolicy && (m.referrerPolicy = g.referrerPolicy),
      g.crossOrigin === 'use-credentials'
        ? (m.credentials = 'include')
        : g.crossOrigin === 'anonymous'
          ? (m.credentials = 'omit')
          : (m.credentials = 'same-origin'),
      m
    );
  }
  function p(g) {
    if (g.ep) return;
    g.ep = !0;
    const m = a(g);
    fetch(g.href, m);
  }
})();
var Qf =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function Jp(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, 'default') ? d.default : d;
}
var rp = { exports: {} },
  kc = {},
  ip = { exports: {} },
  ut = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ag;
function Wv() {
  if (Ag) return ut;
  Ag = 1;
  var d = Symbol.for('react.element'),
    l = Symbol.for('react.portal'),
    a = Symbol.for('react.fragment'),
    p = Symbol.for('react.strict_mode'),
    g = Symbol.for('react.profiler'),
    m = Symbol.for('react.provider'),
    v = Symbol.for('react.context'),
    x = Symbol.for('react.forward_ref'),
    S = Symbol.for('react.suspense'),
    w = Symbol.for('react.memo'),
    b = Symbol.for('react.lazy'),
    N = Symbol.iterator;
  function I(C) {
    return C === null || typeof C != 'object'
      ? null
      : ((C = (N && C[N]) || C['@@iterator']), typeof C == 'function' ? C : null);
  }
  var z = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    G = Object.assign,
    F = {};
  function $(C, K, xe) {
    (this.props = C), (this.context = K), (this.refs = F), (this.updater = xe || z);
  }
  ($.prototype.isReactComponent = {}),
    ($.prototype.setState = function (C, K) {
      if (typeof C != 'object' && typeof C != 'function' && C != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, C, K, 'setState');
    }),
    ($.prototype.forceUpdate = function (C) {
      this.updater.enqueueForceUpdate(this, C, 'forceUpdate');
    });
  function V() {}
  V.prototype = $.prototype;
  function ue(C, K, xe) {
    (this.props = C), (this.context = K), (this.refs = F), (this.updater = xe || z);
  }
  var ae = (ue.prototype = new V());
  (ae.constructor = ue), G(ae, $.prototype), (ae.isPureReactComponent = !0);
  var Te = Array.isArray,
    de = Object.prototype.hasOwnProperty,
    be = { current: null },
    we = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ge(C, K, xe) {
    var Se,
      Me = {},
      $e = null,
      Pe = null;
    if (K != null)
      for (Se in (K.ref !== void 0 && (Pe = K.ref), K.key !== void 0 && ($e = '' + K.key), K))
        de.call(K, Se) && !we.hasOwnProperty(Se) && (Me[Se] = K[Se]);
    var Ce = arguments.length - 2;
    if (Ce === 1) Me.children = xe;
    else if (1 < Ce) {
      for (var Fe = Array(Ce), je = 0; je < Ce; je++) Fe[je] = arguments[je + 2];
      Me.children = Fe;
    }
    if (C && C.defaultProps) for (Se in ((Ce = C.defaultProps), Ce)) Me[Se] === void 0 && (Me[Se] = Ce[Se]);
    return { $$typeof: d, type: C, key: $e, ref: Pe, props: Me, _owner: be.current };
  }
  function ze(C, K) {
    return { $$typeof: d, type: C.type, key: K, ref: C.ref, props: C.props, _owner: C._owner };
  }
  function Be(C) {
    return typeof C == 'object' && C !== null && C.$$typeof === d;
  }
  function Ae(C) {
    var K = { '=': '=0', ':': '=2' };
    return (
      '$' +
      C.replace(/[=:]/g, function (xe) {
        return K[xe];
      })
    );
  }
  var dt = /\/+/g;
  function st(C, K) {
    return typeof C == 'object' && C !== null && C.key != null ? Ae('' + C.key) : K.toString(36);
  }
  function pe(C, K, xe, Se, Me) {
    var $e = typeof C;
    ($e === 'undefined' || $e === 'boolean') && (C = null);
    var Pe = !1;
    if (C === null) Pe = !0;
    else
      switch ($e) {
        case 'string':
        case 'number':
          Pe = !0;
          break;
        case 'object':
          switch (C.$$typeof) {
            case d:
            case l:
              Pe = !0;
          }
      }
    if (Pe)
      return (
        (Pe = C),
        (Me = Me(Pe)),
        (C = Se === '' ? '.' + st(Pe, 0) : Se),
        Te(Me)
          ? ((xe = ''),
            C != null && (xe = C.replace(dt, '$&/') + '/'),
            pe(Me, K, xe, '', function (je) {
              return je;
            }))
          : Me != null &&
            (Be(Me) &&
              (Me = ze(
                Me,
                xe + (!Me.key || (Pe && Pe.key === Me.key) ? '' : ('' + Me.key).replace(dt, '$&/') + '/') + C
              )),
            K.push(Me)),
        1
      );
    if (((Pe = 0), (Se = Se === '' ? '.' : Se + ':'), Te(C)))
      for (var Ce = 0; Ce < C.length; Ce++) {
        $e = C[Ce];
        var Fe = Se + st($e, Ce);
        Pe += pe($e, K, xe, Fe, Me);
      }
    else if (((Fe = I(C)), typeof Fe == 'function'))
      for (C = Fe.call(C), Ce = 0; !($e = C.next()).done; )
        ($e = $e.value), (Fe = Se + st($e, Ce++)), (Pe += pe($e, K, xe, Fe, Me));
    else if ($e === 'object')
      throw (
        ((K = String(C)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (K === '[object Object]' ? 'object with keys {' + Object.keys(C).join(', ') + '}' : K) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      );
    return Pe;
  }
  function ne(C, K, xe) {
    if (C == null) return C;
    var Se = [],
      Me = 0;
    return (
      pe(C, Se, '', '', function ($e) {
        return K.call(xe, $e, Me++);
      }),
      Se
    );
  }
  function j(C) {
    if (C._status === -1) {
      var K = C._result;
      (K = K()),
        K.then(
          function (xe) {
            (C._status === 0 || C._status === -1) && ((C._status = 1), (C._result = xe));
          },
          function (xe) {
            (C._status === 0 || C._status === -1) && ((C._status = 2), (C._result = xe));
          }
        ),
        C._status === -1 && ((C._status = 0), (C._result = K));
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var re = { current: null },
    B = { transition: null },
    ie = { ReactCurrentDispatcher: re, ReactCurrentBatchConfig: B, ReactCurrentOwner: be };
  function Y() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (ut.Children = {
      map: ne,
      forEach: function (C, K, xe) {
        ne(
          C,
          function () {
            K.apply(this, arguments);
          },
          xe
        );
      },
      count: function (C) {
        var K = 0;
        return (
          ne(C, function () {
            K++;
          }),
          K
        );
      },
      toArray: function (C) {
        return (
          ne(C, function (K) {
            return K;
          }) || []
        );
      },
      only: function (C) {
        if (!Be(C)) throw Error('React.Children.only expected to receive a single React element child.');
        return C;
      },
    }),
    (ut.Component = $),
    (ut.Fragment = a),
    (ut.Profiler = g),
    (ut.PureComponent = ue),
    (ut.StrictMode = p),
    (ut.Suspense = S),
    (ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ie),
    (ut.act = Y),
    (ut.cloneElement = function (C, K, xe) {
      if (C == null)
        throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + C + '.');
      var Se = G({}, C.props),
        Me = C.key,
        $e = C.ref,
        Pe = C._owner;
      if (K != null) {
        if (
          (K.ref !== void 0 && (($e = K.ref), (Pe = be.current)),
          K.key !== void 0 && (Me = '' + K.key),
          C.type && C.type.defaultProps)
        )
          var Ce = C.type.defaultProps;
        for (Fe in K)
          de.call(K, Fe) && !we.hasOwnProperty(Fe) && (Se[Fe] = K[Fe] === void 0 && Ce !== void 0 ? Ce[Fe] : K[Fe]);
      }
      var Fe = arguments.length - 2;
      if (Fe === 1) Se.children = xe;
      else if (1 < Fe) {
        Ce = Array(Fe);
        for (var je = 0; je < Fe; je++) Ce[je] = arguments[je + 2];
        Se.children = Ce;
      }
      return { $$typeof: d, type: C.type, key: Me, ref: $e, props: Se, _owner: Pe };
    }),
    (ut.createContext = function (C) {
      return (
        (C = {
          $$typeof: v,
          _currentValue: C,
          _currentValue2: C,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (C.Provider = { $$typeof: m, _context: C }),
        (C.Consumer = C)
      );
    }),
    (ut.createElement = ge),
    (ut.createFactory = function (C) {
      var K = ge.bind(null, C);
      return (K.type = C), K;
    }),
    (ut.createRef = function () {
      return { current: null };
    }),
    (ut.forwardRef = function (C) {
      return { $$typeof: x, render: C };
    }),
    (ut.isValidElement = Be),
    (ut.lazy = function (C) {
      return { $$typeof: b, _payload: { _status: -1, _result: C }, _init: j };
    }),
    (ut.memo = function (C, K) {
      return { $$typeof: w, type: C, compare: K === void 0 ? null : K };
    }),
    (ut.startTransition = function (C) {
      var K = B.transition;
      B.transition = {};
      try {
        C();
      } finally {
        B.transition = K;
      }
    }),
    (ut.unstable_act = Y),
    (ut.useCallback = function (C, K) {
      return re.current.useCallback(C, K);
    }),
    (ut.useContext = function (C) {
      return re.current.useContext(C);
    }),
    (ut.useDebugValue = function () {}),
    (ut.useDeferredValue = function (C) {
      return re.current.useDeferredValue(C);
    }),
    (ut.useEffect = function (C, K) {
      return re.current.useEffect(C, K);
    }),
    (ut.useId = function () {
      return re.current.useId();
    }),
    (ut.useImperativeHandle = function (C, K, xe) {
      return re.current.useImperativeHandle(C, K, xe);
    }),
    (ut.useInsertionEffect = function (C, K) {
      return re.current.useInsertionEffect(C, K);
    }),
    (ut.useLayoutEffect = function (C, K) {
      return re.current.useLayoutEffect(C, K);
    }),
    (ut.useMemo = function (C, K) {
      return re.current.useMemo(C, K);
    }),
    (ut.useReducer = function (C, K, xe) {
      return re.current.useReducer(C, K, xe);
    }),
    (ut.useRef = function (C) {
      return re.current.useRef(C);
    }),
    (ut.useState = function (C) {
      return re.current.useState(C);
    }),
    (ut.useSyncExternalStore = function (C, K, xe) {
      return re.current.useSyncExternalStore(C, K, xe);
    }),
    (ut.useTransition = function () {
      return re.current.useTransition();
    }),
    (ut.version = '18.3.1'),
    ut
  );
}
var Og;
function eg() {
  return Og || ((Og = 1), (ip.exports = Wv())), ip.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mg;
function Gv() {
  if (Mg) return kc;
  Mg = 1;
  var d = eg(),
    l = Symbol.for('react.element'),
    a = Symbol.for('react.fragment'),
    p = Object.prototype.hasOwnProperty,
    g = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(x, S, w) {
    var b,
      N = {},
      I = null,
      z = null;
    w !== void 0 && (I = '' + w), S.key !== void 0 && (I = '' + S.key), S.ref !== void 0 && (z = S.ref);
    for (b in S) p.call(S, b) && !m.hasOwnProperty(b) && (N[b] = S[b]);
    if (x && x.defaultProps) for (b in ((S = x.defaultProps), S)) N[b] === void 0 && (N[b] = S[b]);
    return { $$typeof: l, type: x, key: I, ref: z, props: N, _owner: g.current };
  }
  return (kc.Fragment = a), (kc.jsx = v), (kc.jsxs = v), kc;
}
var Ig;
function Kv() {
  return Ig || ((Ig = 1), (rp.exports = Gv())), rp.exports;
}
var qe = Kv(),
  ye = eg();
const qv = Jp(ye),
  Yv = Hv({ __proto__: null, default: qv }, [ye]);
var Xf = {},
  op = { exports: {} },
  Rr = {},
  ap = { exports: {} },
  sp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lg;
function Zv() {
  return (
    Lg ||
      ((Lg = 1),
      (function (d) {
        function l(B, ie) {
          var Y = B.length;
          B.push(ie);
          e: for (; 0 < Y; ) {
            var C = (Y - 1) >>> 1,
              K = B[C];
            if (0 < g(K, ie)) (B[C] = ie), (B[Y] = K), (Y = C);
            else break e;
          }
        }
        function a(B) {
          return B.length === 0 ? null : B[0];
        }
        function p(B) {
          if (B.length === 0) return null;
          var ie = B[0],
            Y = B.pop();
          if (Y !== ie) {
            B[0] = Y;
            e: for (var C = 0, K = B.length, xe = K >>> 1; C < xe; ) {
              var Se = 2 * (C + 1) - 1,
                Me = B[Se],
                $e = Se + 1,
                Pe = B[$e];
              if (0 > g(Me, Y))
                $e < K && 0 > g(Pe, Me) ? ((B[C] = Pe), (B[$e] = Y), (C = $e)) : ((B[C] = Me), (B[Se] = Y), (C = Se));
              else if ($e < K && 0 > g(Pe, Y)) (B[C] = Pe), (B[$e] = Y), (C = $e);
              else break e;
            }
          }
          return ie;
        }
        function g(B, ie) {
          var Y = B.sortIndex - ie.sortIndex;
          return Y !== 0 ? Y : B.id - ie.id;
        }
        if (typeof performance == 'object' && typeof performance.now == 'function') {
          var m = performance;
          d.unstable_now = function () {
            return m.now();
          };
        } else {
          var v = Date,
            x = v.now();
          d.unstable_now = function () {
            return v.now() - x;
          };
        }
        var S = [],
          w = [],
          b = 1,
          N = null,
          I = 3,
          z = !1,
          G = !1,
          F = !1,
          $ = typeof setTimeout == 'function' ? setTimeout : null,
          V = typeof clearTimeout == 'function' ? clearTimeout : null,
          ue = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function ae(B) {
          for (var ie = a(w); ie !== null; ) {
            if (ie.callback === null) p(w);
            else if (ie.startTime <= B) p(w), (ie.sortIndex = ie.expirationTime), l(S, ie);
            else break;
            ie = a(w);
          }
        }
        function Te(B) {
          if (((F = !1), ae(B), !G))
            if (a(S) !== null) (G = !0), j(de);
            else {
              var ie = a(w);
              ie !== null && re(Te, ie.startTime - B);
            }
        }
        function de(B, ie) {
          (G = !1), F && ((F = !1), V(ge), (ge = -1)), (z = !0);
          var Y = I;
          try {
            for (ae(ie), N = a(S); N !== null && (!(N.expirationTime > ie) || (B && !Ae())); ) {
              var C = N.callback;
              if (typeof C == 'function') {
                (N.callback = null), (I = N.priorityLevel);
                var K = C(N.expirationTime <= ie);
                (ie = d.unstable_now()), typeof K == 'function' ? (N.callback = K) : N === a(S) && p(S), ae(ie);
              } else p(S);
              N = a(S);
            }
            if (N !== null) var xe = !0;
            else {
              var Se = a(w);
              Se !== null && re(Te, Se.startTime - ie), (xe = !1);
            }
            return xe;
          } finally {
            (N = null), (I = Y), (z = !1);
          }
        }
        var be = !1,
          we = null,
          ge = -1,
          ze = 5,
          Be = -1;
        function Ae() {
          return !(d.unstable_now() - Be < ze);
        }
        function dt() {
          if (we !== null) {
            var B = d.unstable_now();
            Be = B;
            var ie = !0;
            try {
              ie = we(!0, B);
            } finally {
              ie ? st() : ((be = !1), (we = null));
            }
          } else be = !1;
        }
        var st;
        if (typeof ue == 'function')
          st = function () {
            ue(dt);
          };
        else if (typeof MessageChannel < 'u') {
          var pe = new MessageChannel(),
            ne = pe.port2;
          (pe.port1.onmessage = dt),
            (st = function () {
              ne.postMessage(null);
            });
        } else
          st = function () {
            $(dt, 0);
          };
        function j(B) {
          (we = B), be || ((be = !0), st());
        }
        function re(B, ie) {
          ge = $(function () {
            B(d.unstable_now());
          }, ie);
        }
        (d.unstable_IdlePriority = 5),
          (d.unstable_ImmediatePriority = 1),
          (d.unstable_LowPriority = 4),
          (d.unstable_NormalPriority = 3),
          (d.unstable_Profiling = null),
          (d.unstable_UserBlockingPriority = 2),
          (d.unstable_cancelCallback = function (B) {
            B.callback = null;
          }),
          (d.unstable_continueExecution = function () {
            G || z || ((G = !0), j(de));
          }),
          (d.unstable_forceFrameRate = function (B) {
            0 > B || 125 < B
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (ze = 0 < B ? Math.floor(1e3 / B) : 5);
          }),
          (d.unstable_getCurrentPriorityLevel = function () {
            return I;
          }),
          (d.unstable_getFirstCallbackNode = function () {
            return a(S);
          }),
          (d.unstable_next = function (B) {
            switch (I) {
              case 1:
              case 2:
              case 3:
                var ie = 3;
                break;
              default:
                ie = I;
            }
            var Y = I;
            I = ie;
            try {
              return B();
            } finally {
              I = Y;
            }
          }),
          (d.unstable_pauseExecution = function () {}),
          (d.unstable_requestPaint = function () {}),
          (d.unstable_runWithPriority = function (B, ie) {
            switch (B) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                B = 3;
            }
            var Y = I;
            I = B;
            try {
              return ie();
            } finally {
              I = Y;
            }
          }),
          (d.unstable_scheduleCallback = function (B, ie, Y) {
            var C = d.unstable_now();
            switch (
              (typeof Y == 'object' && Y !== null
                ? ((Y = Y.delay), (Y = typeof Y == 'number' && 0 < Y ? C + Y : C))
                : (Y = C),
              B)
            ) {
              case 1:
                var K = -1;
                break;
              case 2:
                K = 250;
                break;
              case 5:
                K = 1073741823;
                break;
              case 4:
                K = 1e4;
                break;
              default:
                K = 5e3;
            }
            return (
              (K = Y + K),
              (B = { id: b++, callback: ie, priorityLevel: B, startTime: Y, expirationTime: K, sortIndex: -1 }),
              Y > C
                ? ((B.sortIndex = Y),
                  l(w, B),
                  a(S) === null && B === a(w) && (F ? (V(ge), (ge = -1)) : (F = !0), re(Te, Y - C)))
                : ((B.sortIndex = K), l(S, B), G || z || ((G = !0), j(de))),
              B
            );
          }),
          (d.unstable_shouldYield = Ae),
          (d.unstable_wrapCallback = function (B) {
            var ie = I;
            return function () {
              var Y = I;
              I = ie;
              try {
                return B.apply(this, arguments);
              } finally {
                I = Y;
              }
            };
          });
      })(sp)),
    sp
  );
}
var Dg;
function Vv() {
  return Dg || ((Dg = 1), (ap.exports = Zv())), ap.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pg;
function Qv() {
  if (Pg) return Rr;
  Pg = 1;
  var d = eg(),
    l = Vv();
  function a(e) {
    for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, i = 1; i < arguments.length; i++)
      t += '&args[]=' + encodeURIComponent(arguments[i]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var p = new Set(),
    g = {};
  function m(e, t) {
    v(e, t), v(e + 'Capture', t);
  }
  function v(e, t) {
    for (g[e] = t, e = 0; e < t.length; e++) p.add(t[e]);
  }
  var x = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
    S = Object.prototype.hasOwnProperty,
    w =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    b = {},
    N = {};
  function I(e) {
    return S.call(N, e) ? !0 : S.call(b, e) ? !1 : w.test(e) ? (N[e] = !0) : ((b[e] = !0), !1);
  }
  function z(e, t, i, o) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return o
          ? !1
          : i !== null
            ? !i.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function G(e, t, i, o) {
    if (t === null || typeof t > 'u' || z(e, t, i, o)) return !0;
    if (o) return !1;
    if (i !== null)
      switch (i.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function F(e, t, i, o, u, c, _) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = o),
      (this.attributeNamespace = u),
      (this.mustUseProperty = i),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = c),
      (this.removeEmptyString = _);
  }
  var $ = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      $[e] = new F(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      $[t] = new F(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      $[e] = new F(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
      $[e] = new F(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        $[e] = new F(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      $[e] = new F(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      $[e] = new F(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      $[e] = new F(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      $[e] = new F(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var V = /[\-:]([a-z])/g;
  function ue(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(V, ue);
      $[t] = new F(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
      var t = e.replace(V, ue);
      $[t] = new F(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(V, ue);
      $[t] = new F(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      $[e] = new F(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    ($.xlinkHref = new F('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      $[e] = new F(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function ae(e, t, i, o) {
    var u = $.hasOwnProperty(t) ? $[t] : null;
    (u !== null
      ? u.type !== 0
      : o || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (G(t, i, u, o) && (i = null),
      o || u === null
        ? I(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, '' + i))
        : u.mustUseProperty
          ? (e[u.propertyName] = i === null ? (u.type === 3 ? !1 : '') : i)
          : ((t = u.attributeName),
            (o = u.attributeNamespace),
            i === null
              ? e.removeAttribute(t)
              : ((u = u.type),
                (i = u === 3 || (u === 4 && i === !0) ? '' : '' + i),
                o ? e.setAttributeNS(o, t, i) : e.setAttribute(t, i))));
  }
  var Te = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    de = Symbol.for('react.element'),
    be = Symbol.for('react.portal'),
    we = Symbol.for('react.fragment'),
    ge = Symbol.for('react.strict_mode'),
    ze = Symbol.for('react.profiler'),
    Be = Symbol.for('react.provider'),
    Ae = Symbol.for('react.context'),
    dt = Symbol.for('react.forward_ref'),
    st = Symbol.for('react.suspense'),
    pe = Symbol.for('react.suspense_list'),
    ne = Symbol.for('react.memo'),
    j = Symbol.for('react.lazy'),
    re = Symbol.for('react.offscreen'),
    B = Symbol.iterator;
  function ie(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (B && e[B]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  var Y = Object.assign,
    C;
  function K(e) {
    if (C === void 0)
      try {
        throw Error();
      } catch (i) {
        var t = i.stack.trim().match(/\n( *(at )?)/);
        C = (t && t[1]) || '';
      }
    return (
      `
` +
      C +
      e
    );
  }
  var xe = !1;
  function Se(e, t) {
    if (!e || xe) return '';
    xe = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (W) {
            var o = W;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (W) {
            o = W;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (W) {
          o = W;
        }
        e();
      }
    } catch (W) {
      if (W && o && typeof W.stack == 'string') {
        for (
          var u = W.stack.split(`
`),
            c = o.stack.split(`
`),
            _ = u.length - 1,
            k = c.length - 1;
          1 <= _ && 0 <= k && u[_] !== c[k];

        )
          k--;
        for (; 1 <= _ && 0 <= k; _--, k--)
          if (u[_] !== c[k]) {
            if (_ !== 1 || k !== 1)
              do
                if ((_--, k--, 0 > k || u[_] !== c[k])) {
                  var A =
                    `
` + u[_].replace(' at new ', ' at ');
                  return e.displayName && A.includes('<anonymous>') && (A = A.replace('<anonymous>', e.displayName)), A;
                }
              while (1 <= _ && 0 <= k);
            break;
          }
      }
    } finally {
      (xe = !1), (Error.prepareStackTrace = i);
    }
    return (e = e ? e.displayName || e.name : '') ? K(e) : '';
  }
  function Me(e) {
    switch (e.tag) {
      case 5:
        return K(e.type);
      case 16:
        return K('Lazy');
      case 13:
        return K('Suspense');
      case 19:
        return K('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (e = Se(e.type, !1)), e;
      case 11:
        return (e = Se(e.type.render, !1)), e;
      case 1:
        return (e = Se(e.type, !0)), e;
      default:
        return '';
    }
  }
  function $e(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case we:
        return 'Fragment';
      case be:
        return 'Portal';
      case ze:
        return 'Profiler';
      case ge:
        return 'StrictMode';
      case st:
        return 'Suspense';
      case pe:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Ae:
          return (e.displayName || 'Context') + '.Consumer';
        case Be:
          return (e._context.displayName || 'Context') + '.Provider';
        case dt:
          var t = e.render;
          return (
            (e = e.displayName),
            e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case ne:
          return (t = e.displayName || null), t !== null ? t : $e(e.type) || 'Memo';
        case j:
          (t = e._payload), (e = e._init);
          try {
            return $e(e(t));
          } catch {}
      }
    return null;
  }
  function Pe(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (t.displayName || 'Context') + '.Consumer';
      case 10:
        return (t._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return t;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return $e(t);
      case 8:
        return t === ge ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null;
        if (typeof t == 'string') return t;
    }
    return null;
  }
  function Ce(e) {
    switch (typeof e) {
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
  function Fe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function je(e) {
    var t = Fe(e) ? 'checked' : 'value',
      i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      o = '' + e[t];
    if (!e.hasOwnProperty(t) && typeof i < 'u' && typeof i.get == 'function' && typeof i.set == 'function') {
      var u = i.get,
        c = i.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (_) {
            (o = '' + _), c.call(this, _);
          },
        }),
        Object.defineProperty(e, t, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (_) {
            o = '' + _;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function mt(e) {
    e._valueTracker || (e._valueTracker = je(e));
  }
  function Ot(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(),
      o = '';
    return e && (o = Fe(e) ? (e.checked ? 'true' : 'false') : e.value), (e = o), e !== i ? (t.setValue(e), !0) : !1;
  }
  function Gt(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function un(e, t) {
    var i = t.checked;
    return Y({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: i ?? e._wrapperState.initialChecked,
    });
  }
  function Yr(e, t) {
    var i = t.defaultValue == null ? '' : t.defaultValue,
      o = t.checked != null ? t.checked : t.defaultChecked;
    (i = Ce(t.value != null ? t.value : i)),
      (e._wrapperState = {
        initialChecked: o,
        initialValue: i,
        controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      });
  }
  function Fi(e, t) {
    (t = t.checked), t != null && ae(e, 'checked', t, !1);
  }
  function wn(e, t) {
    Fi(e, t);
    var i = Ce(t.value),
      o = t.type;
    if (i != null)
      o === 'number'
        ? ((i === 0 && e.value === '') || e.value != i) && (e.value = '' + i)
        : e.value !== '' + i && (e.value = '' + i);
    else if (o === 'submit' || o === 'reset') {
      e.removeAttribute('value');
      return;
    }
    t.hasOwnProperty('value')
      ? yo(e, t.type, i)
      : t.hasOwnProperty('defaultValue') && yo(e, t.type, Ce(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Hi(e, t, i) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var o = t.type;
      if (!((o !== 'submit' && o !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
      (t = '' + e._wrapperState.initialValue), i || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    (i = e.name),
      i !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      i !== '' && (e.name = i);
  }
  function yo(e, t, i) {
    (t !== 'number' || Gt(e.ownerDocument) !== e) &&
      (i == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + i && (e.defaultValue = '' + i));
  }
  var Hn = Array.isArray;
  function Kt(e, t, i, o) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < i.length; u++) t['$' + i[u]] = !0;
      for (i = 0; i < e.length; i++)
        (u = t.hasOwnProperty('$' + e[i].value)),
          e[i].selected !== u && (e[i].selected = u),
          u && o && (e[i].defaultSelected = !0);
    } else {
      for (i = '' + Ce(i), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === i) {
          (e[u].selected = !0), o && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Cr(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return Y({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
  }
  function Zr(e, t) {
    var i = t.value;
    if (i == null) {
      if (((i = t.children), (t = t.defaultValue), i != null)) {
        if (t != null) throw Error(a(92));
        if (Hn(i)) {
          if (1 < i.length) throw Error(a(93));
          i = i[0];
        }
        t = i;
      }
      t == null && (t = ''), (i = t);
    }
    e._wrapperState = { initialValue: Ce(i) };
  }
  function dr(e, t) {
    var i = Ce(t.value),
      o = Ce(t.defaultValue);
    i != null &&
      ((i = '' + i),
      i !== e.value && (e.value = i),
      t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
      o != null && (e.defaultValue = '' + o);
  }
  function Wn(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
  }
  function hn(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function Gn(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? hn(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var Kn,
    mi = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, i, o, u) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, i, o, u);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
      else {
        for (
          Kn = Kn || document.createElement('div'),
            Kn.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = Kn.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function tr(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ar = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Wi = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Ar).forEach(function (e) {
    Wi.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ar[t] = Ar[e]);
    });
  });
  function Gi(e, t, i) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : i || typeof t != 'number' || t === 0 || (Ar.hasOwnProperty(e) && Ar[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function _i(e, t) {
    e = e.style;
    for (var i in t)
      if (t.hasOwnProperty(i)) {
        var o = i.indexOf('--') === 0,
          u = Gi(i, t[i], o);
        i === 'float' && (i = 'cssFloat'), o ? e.setProperty(i, u) : (e[i] = u);
      }
  }
  var Eo = Y(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function vi(e, t) {
    if (t) {
      if (Eo[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
          throw Error(a(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(a(62));
    }
  }
  function yi(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
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
  var Ei = null;
  function Ki(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var pt = null,
    qn = null,
    xn = null;
  function Or(e) {
    if ((e = Tn(e))) {
      if (typeof pt != 'function') throw Error(a(280));
      var t = e.stateNode;
      t && ((t = ll(t)), pt(e.stateNode, e.type, t));
    }
  }
  function R(e) {
    qn ? (xn ? xn.push(e) : (xn = [e])) : (qn = e);
  }
  function Z() {
    if (qn) {
      var e = qn,
        t = xn;
      if (((xn = qn = null), Or(e), t)) for (e = 0; e < t.length; e++) Or(t[e]);
    }
  }
  function fe(e, t) {
    return e(t);
  }
  function Ye() {}
  var Mt = !1;
  function Bt(e, t, i) {
    if (Mt) return e(t, i);
    Mt = !0;
    try {
      return fe(e, t, i);
    } finally {
      (Mt = !1), (qn !== null || xn !== null) && (Ye(), Z());
    }
  }
  function ke(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var o = ll(i);
    if (o === null) return null;
    i = o[t];
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
        (o = !o.disabled) ||
          ((e = e.type), (o = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !o);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != 'function') throw Error(a(231, t, typeof i));
    return i;
  }
  var me = !1;
  if (x)
    try {
      var He = {};
      Object.defineProperty(He, 'passive', {
        get: function () {
          me = !0;
        },
      }),
        window.addEventListener('test', He, He),
        window.removeEventListener('test', He, He);
    } catch {
      me = !1;
    }
  function qt(e, t, i, o, u, c, _, k, A) {
    var W = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(i, W);
    } catch (ee) {
      this.onError(ee);
    }
  }
  var Tt = !1,
    Vr = null,
    qi = !1,
    bo = null,
    au = {
      onError: function (e) {
        (Tt = !0), (Vr = e);
      },
    };
  function $a(e, t, i, o, u, c, _, k, A) {
    (Tt = !1), (Vr = null), qt.apply(au, arguments);
  }
  function su(e, t, i, o, u, c, _, k, A) {
    if (($a.apply(this, arguments), Tt)) {
      if (Tt) {
        var W = Vr;
        (Tt = !1), (Vr = null);
      } else throw Error(a(198));
      qi || ((qi = !0), (bo = W));
    }
  }
  function bi(e) {
    var t = e,
      i = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (i = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? i : null;
  }
  function Fa(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
  }
  function Ha(e) {
    if (bi(e) !== e) throw Error(a(188));
  }
  function ea(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = bi(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var i = e, o = t; ; ) {
      var u = i.return;
      if (u === null) break;
      var c = u.alternate;
      if (c === null) {
        if (((o = u.return), o !== null)) {
          i = o;
          continue;
        }
        break;
      }
      if (u.child === c.child) {
        for (c = u.child; c; ) {
          if (c === i) return Ha(u), e;
          if (c === o) return Ha(u), t;
          c = c.sibling;
        }
        throw Error(a(188));
      }
      if (i.return !== o.return) (i = u), (o = c);
      else {
        for (var _ = !1, k = u.child; k; ) {
          if (k === i) {
            (_ = !0), (i = u), (o = c);
            break;
          }
          if (k === o) {
            (_ = !0), (o = u), (i = c);
            break;
          }
          k = k.sibling;
        }
        if (!_) {
          for (k = c.child; k; ) {
            if (k === i) {
              (_ = !0), (i = c), (o = u);
              break;
            }
            if (k === o) {
              (_ = !0), (o = c), (i = u);
              break;
            }
            k = k.sibling;
          }
          if (!_) throw Error(a(189));
        }
      }
      if (i.alternate !== o) throw Error(a(190));
    }
    if (i.tag !== 3) throw Error(a(188));
    return i.stateNode.current === i ? e : t;
  }
  function Ls(e) {
    return (e = ea(e)), e !== null ? Ds(e) : null;
  }
  function Ds(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ds(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ps = l.unstable_scheduleCallback,
    Mr = l.unstable_cancelCallback,
    wo = l.unstable_shouldYield,
    Bs = l.unstable_requestPaint,
    Rt = l.unstable_now,
    lu = l.unstable_getCurrentPriorityLevel,
    Wa = l.unstable_ImmediatePriority,
    xo = l.unstable_UserBlockingPriority,
    So = l.unstable_NormalPriority,
    le = l.unstable_LowPriority,
    Le = l.unstable_IdlePriority,
    nt = null,
    at = null;
  function Qt(e) {
    if (at && typeof at.onCommitFiberRoot == 'function')
      try {
        at.onCommitFiberRoot(nt, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Ft = Math.clz32 ? Math.clz32 : Sn,
    Ir = Math.log,
    ko = Math.LN2;
  function Sn(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Ir(e) / ko) | 0)) | 0;
  }
  var mn = 64,
    No = 4194304;
  function wi(e) {
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
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Qr(e, t) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var o = 0,
      u = e.suspendedLanes,
      c = e.pingedLanes,
      _ = i & 268435455;
    if (_ !== 0) {
      var k = _ & ~u;
      k !== 0 ? (o = wi(k)) : ((c &= _), c !== 0 && (o = wi(c)));
    } else (_ = i & ~u), _ !== 0 ? (o = wi(_)) : c !== 0 && (o = wi(c));
    if (o === 0) return 0;
    if (t !== 0 && t !== o && !(t & u) && ((u = o & -o), (c = t & -t), u >= c || (u === 16 && (c & 4194240) !== 0)))
      return t;
    if ((o & 4 && (o |= i & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= o; 0 < t; ) (i = 31 - Ft(t)), (u = 1 << i), (o |= e[i]), (t &= ~u);
    return o;
  }
  function Us(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
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
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function uu(e, t) {
    for (var i = e.suspendedLanes, o = e.pingedLanes, u = e.expirationTimes, c = e.pendingLanes; 0 < c; ) {
      var _ = 31 - Ft(c),
        k = 1 << _,
        A = u[_];
      A === -1 ? (!(k & i) || k & o) && (u[_] = Us(k, t)) : A <= t && (e.expiredLanes |= k), (c &= ~k);
    }
  }
  function ta(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ga() {
    var e = mn;
    return (mn <<= 1), !(mn & 4194240) && (mn = 64), e;
  }
  function Xr(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function Yi(e, t, i) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Ft(t)),
      (e[t] = i);
  }
  function nr(e, t) {
    var i = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < i; ) {
      var u = 31 - Ft(i),
        c = 1 << u;
      (t[u] = 0), (o[u] = -1), (e[u] = -1), (i &= ~c);
    }
  }
  function To(e, t) {
    var i = (e.entangledLanes |= t);
    for (e = e.entanglements; i; ) {
      var o = 31 - Ft(i),
        u = 1 << o;
      (u & t) | (e[o] & t) && (e[o] |= t), (i &= ~u);
    }
  }
  var ct = 0;
  function Ge(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
  }
  var na,
    Yt,
    bt,
    Zi,
    Lr,
    Vi = !1,
    xi = [],
    ce = null,
    Ne = null,
    Ze = null,
    lt = new Map(),
    Zt = new Map(),
    cn = [],
    cu =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function zs(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        ce = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Ne = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Ze = null;
        break;
      case 'pointerover':
      case 'pointerout':
        lt.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Zt.delete(t.pointerId);
    }
  }
  function Ro(e, t, i, o, u, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = { blockedOn: t, domEventName: i, eventSystemFlags: o, nativeEvent: c, targetContainers: [u] }),
        t !== null && ((t = Tn(t)), t !== null && Yt(t)),
        e)
      : ((e.eventSystemFlags |= o), (t = e.targetContainers), u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function ld(e, t, i, o, u) {
    switch (t) {
      case 'focusin':
        return (ce = Ro(ce, e, t, i, o, u)), !0;
      case 'dragenter':
        return (Ne = Ro(Ne, e, t, i, o, u)), !0;
      case 'mouseover':
        return (Ze = Ro(Ze, e, t, i, o, u)), !0;
      case 'pointerover':
        var c = u.pointerId;
        return lt.set(c, Ro(lt.get(c) || null, e, t, i, o, u)), !0;
      case 'gotpointercapture':
        return (c = u.pointerId), Zt.set(c, Ro(Zt.get(c) || null, e, t, i, o, u)), !0;
    }
    return !1;
  }
  function Dc(e) {
    var t = ti(e.target);
    if (t !== null) {
      var i = bi(t);
      if (i !== null) {
        if (((t = i.tag), t === 13)) {
          if (((t = Fa(i)), t !== null)) {
            (e.blockedOn = t),
              Lr(e.priority, function () {
                bt(i);
              });
            return;
          }
        } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function $s(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = Ws(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var o = new i.constructor(i.type, i);
        (Ei = o), i.target.dispatchEvent(o), (Ei = null);
      } else return (t = Tn(i)), t !== null && Yt(t), (e.blockedOn = i), !1;
      t.shift();
    }
    return !0;
  }
  function Pc(e, t, i) {
    $s(e) && i.delete(t);
  }
  function ud() {
    (Vi = !1),
      ce !== null && $s(ce) && (ce = null),
      Ne !== null && $s(Ne) && (Ne = null),
      Ze !== null && $s(Ze) && (Ze = null),
      lt.forEach(Pc),
      Zt.forEach(Pc);
  }
  function wt(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null), Vi || ((Vi = !0), l.unstable_scheduleCallback(l.unstable_NormalPriority, ud)));
  }
  function Et(e) {
    function t(u) {
      return wt(u, e);
    }
    if (0 < xi.length) {
      wt(xi[0], e);
      for (var i = 1; i < xi.length; i++) {
        var o = xi[i];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      ce !== null && wt(ce, e), Ne !== null && wt(Ne, e), Ze !== null && wt(Ze, e), lt.forEach(t), Zt.forEach(t), i = 0;
      i < cn.length;
      i++
    )
      (o = cn[i]), o.blockedOn === e && (o.blockedOn = null);
    for (; 0 < cn.length && ((i = cn[0]), i.blockedOn === null); ) Dc(i), i.blockedOn === null && cn.shift();
  }
  var ra = Te.ReactCurrentBatchConfig,
    Fs = !0;
  function cd(e, t, i, o) {
    var u = ct,
      c = ra.transition;
    ra.transition = null;
    try {
      (ct = 1), fu(e, t, i, o);
    } finally {
      (ct = u), (ra.transition = c);
    }
  }
  function fd(e, t, i, o) {
    var u = ct,
      c = ra.transition;
    ra.transition = null;
    try {
      (ct = 4), fu(e, t, i, o);
    } finally {
      (ct = u), (ra.transition = c);
    }
  }
  function fu(e, t, i, o) {
    if (Fs) {
      var u = Ws(e, t, i, o);
      if (u === null) Ru(e, t, o, Hs, i), zs(e, o);
      else if (ld(u, e, t, i, o)) o.stopPropagation();
      else if ((zs(e, o), t & 4 && -1 < cu.indexOf(e))) {
        for (; u !== null; ) {
          var c = Tn(u);
          if ((c !== null && na(c), (c = Ws(e, t, i, o)), c === null && Ru(e, t, o, Hs, i), c === u)) break;
          u = c;
        }
        u !== null && o.stopPropagation();
      } else Ru(e, t, o, null, i);
    }
  }
  var Hs = null;
  function Ws(e, t, i, o) {
    if (((Hs = null), (e = Ki(o)), (e = ti(e)), e !== null))
      if (((t = bi(e)), t === null)) e = null;
      else if (((i = t.tag), i === 13)) {
        if (((e = Fa(t)), e !== null)) return e;
        e = null;
      } else if (i === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Hs = e), null;
  }
  function Bc(e) {
    switch (e) {
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
        return 1;
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
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4;
      case 'message':
        switch (lu()) {
          case Wa:
            return 1;
          case xo:
            return 4;
          case So:
          case le:
            return 16;
          case Le:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ut = null,
    Ka = null,
    jr = null;
  function du() {
    if (jr) return jr;
    var e,
      t = Ka,
      i = t.length,
      o,
      u = 'value' in Ut ? Ut.value : Ut.textContent,
      c = u.length;
    for (e = 0; e < i && t[e] === u[e]; e++);
    var _ = i - e;
    for (o = 1; o <= _ && t[i - o] === u[c - o]; o++);
    return (jr = u.slice(e, 1 < o ? 1 - o : void 0));
  }
  function ia(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ln() {
    return !0;
  }
  function pu() {
    return !1;
  }
  function Yn(e) {
    function t(i, o, u, c, _) {
      (this._reactName = i),
        (this._targetInst = u),
        (this.type = o),
        (this.nativeEvent = c),
        (this.target = _),
        (this.currentTarget = null);
      for (var k in e) e.hasOwnProperty(k) && ((i = e[k]), (this[k] = i ? i(c) : c[k]));
      return (
        (this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? Ln : pu),
        (this.isPropagationStopped = pu),
        this
      );
    }
    return (
      Y(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault ? i.preventDefault() : typeof i.returnValue != 'unknown' && (i.returnValue = !1),
            (this.isDefaultPrevented = Ln));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != 'unknown' && (i.cancelBubble = !0),
            (this.isPropagationStopped = Ln));
        },
        persist: function () {},
        isPersistent: Ln,
      }),
      t
    );
  }
  var Co = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Gs = Yn(Co),
    oa = Y({}, Co, { view: 0, detail: 0 }),
    Uc = Yn(oa),
    Dn,
    gu,
    kn,
    Ks = Y({}, oa, {
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
      getModifierState: yu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== kn &&
              (kn && e.type === 'mousemove'
                ? ((Dn = e.screenX - kn.screenX), (gu = e.screenY - kn.screenY))
                : (gu = Dn = 0),
              (kn = e)),
            Dn);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : gu;
      },
    }),
    hu = Yn(Ks),
    Qi = Y({}, Ks, { dataTransfer: 0 }),
    qs = Yn(Qi),
    mu = Y({}, oa, { relatedTarget: 0 }),
    Ct = Yn(mu),
    Xi = Y({}, Co, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _u = Yn(Xi),
    dd = Y({}, Co, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    vu = Yn(dd),
    pd = Y({}, Co, { data: 0 }),
    zc = Yn(pd),
    gd = {
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
    $c = {
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
    Ys = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
  function aa(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ys[e]) ? !!t[e] : !1;
  }
  function yu() {
    return aa;
  }
  var Fc = Y({}, oa, {
      key: function (e) {
        if (e.key) {
          var t = gd[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = ia(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? $c[e.keyCode] || 'Unidentified'
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
      getModifierState: yu,
      charCode: function (e) {
        return e.type === 'keypress' ? ia(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress' ? ia(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
    }),
    Hc = Yn(Fc),
    Eu = Y({}, Ks, {
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
    Zs = Yn(Eu),
    Wc = Y({}, oa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: yu,
    }),
    hd = Yn(Wc),
    bu = Y({}, Co, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    wu = Yn(bu),
    md = Y({}, Ks, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Gc = Yn(md),
    rr = [9, 13, 27, 32],
    qa = x && 'CompositionEvent' in window,
    Si = null;
  x && 'documentMode' in document && (Si = document.documentMode);
  var Kc = x && 'TextEvent' in window && !Si,
    xu = x && (!qa || (Si && 8 < Si && 11 >= Si)),
    qc = ' ',
    Yc = !1;
  function Zc(e, t) {
    switch (e) {
      case 'keyup':
        return rr.indexOf(t.keyCode) !== -1;
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
  function Vc(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var sa = !1;
  function la(e, t) {
    switch (e) {
      case 'compositionend':
        return Vc(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Yc = !0), qc);
      case 'textInput':
        return (e = t.data), e === qc && Yc ? null : e;
      default:
        return null;
    }
  }
  function _d(e, t) {
    if (sa)
      return e === 'compositionend' || (!qa && Zc(e, t)) ? ((e = du()), (jr = Ka = Ut = null), (sa = !1), e) : null;
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
        return xu && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var vd = {
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
  function Vs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!vd[e.type] : t === 'textarea';
  }
  function Su(e, t, i, o) {
    R(o),
      (t = il(t, 'onChange')),
      0 < t.length && ((i = new Gs('onChange', 'change', null, i, o)), e.push({ event: i, listeners: t }));
  }
  var pr = null,
    ji = null;
  function yd(e) {
    nf(e, 0);
  }
  function Qs(e) {
    var t = et(e);
    if (Ot(t)) return e;
  }
  function Ed(e, t) {
    if (e === 'change') return t;
  }
  var Ao = !1;
  if (x) {
    var ir;
    if (x) {
      var Xs = 'oninput' in document;
      if (!Xs) {
        var Qc = document.createElement('div');
        Qc.setAttribute('oninput', 'return;'), (Xs = typeof Qc.oninput == 'function');
      }
      ir = Xs;
    } else ir = !1;
    Ao = ir && (!document.documentMode || 9 < document.documentMode);
  }
  function Xc() {
    pr && (pr.detachEvent('onpropertychange', jc), (ji = pr = null));
  }
  function jc(e) {
    if (e.propertyName === 'value' && Qs(ji)) {
      var t = [];
      Su(t, ji, e, Ki(e)), Bt(yd, t);
    }
  }
  function bd(e, t, i) {
    e === 'focusin' ? (Xc(), (pr = t), (ji = i), pr.attachEvent('onpropertychange', jc)) : e === 'focusout' && Xc();
  }
  function wd(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Qs(ji);
  }
  function ua(e, t) {
    if (e === 'click') return Qs(t);
  }
  function L(e, t) {
    if (e === 'input' || e === 'change') return Qs(t);
  }
  function q(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var H = typeof Object.is == 'function' ? Object.is : q;
  function _e(e, t) {
    if (H(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var i = Object.keys(e),
      o = Object.keys(t);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var u = i[o];
      if (!S.call(t, u) || !H(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Je(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function _t(e, t) {
    var i = Je(e);
    e = 0;
    for (var o; i; ) {
      if (i.nodeType === 3) {
        if (((o = e + i.textContent.length), e <= t && o >= t)) return { node: i, offset: t - e };
        e = o;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = Je(i);
    }
  }
  function en(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? en(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function St() {
    for (var e = window, t = Gt(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof t.contentWindow.location.href == 'string';
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = Gt(e.document);
    }
    return t;
  }
  function Ya(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function xd(e) {
    var t = St(),
      i = e.focusedElem,
      o = e.selectionRange;
    if (t !== i && i && i.ownerDocument && en(i.ownerDocument.documentElement, i)) {
      if (o !== null && Ya(i)) {
        if (((t = o.start), (e = o.end), e === void 0 && (e = t), 'selectionStart' in i))
          (i.selectionStart = t), (i.selectionEnd = Math.min(e, i.value.length));
        else if (((e = ((t = i.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
          e = e.getSelection();
          var u = i.textContent.length,
            c = Math.min(o.start, u);
          (o = o.end === void 0 ? c : Math.min(o.end, u)),
            !e.extend && c > o && ((u = o), (o = c), (c = u)),
            (u = _t(i, c));
          var _ = _t(i, o);
          u &&
            _ &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== u.node ||
              e.anchorOffset !== u.offset ||
              e.focusNode !== _.node ||
              e.focusOffset !== _.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            e.removeAllRanges(),
            c > o ? (e.addRange(t), e.extend(_.node, _.offset)) : (t.setEnd(_.node, _.offset), e.addRange(t)));
        }
      }
      for (t = [], e = i; (e = e.parentNode); )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof i.focus == 'function' && i.focus(), i = 0; i < t.length; i++)
        (e = t[i]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
  }
  var gr = x && 'documentMode' in document && 11 >= document.documentMode,
    ki = null,
    ku = null,
    Jr = null,
    ca = !1;
  function Za(e, t, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    ca ||
      ki == null ||
      ki !== Gt(o) ||
      ((o = ki),
      'selectionStart' in o && Ya(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = ((o.ownerDocument && o.ownerDocument.defaultView) || window).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (Jr && _e(Jr, o)) ||
        ((Jr = o),
        (o = il(ku, 'onSelect')),
        0 < o.length &&
          ((t = new Gs('onSelect', 'select', null, t, i)), e.push({ event: t, listeners: o }), (t.target = ki))));
  }
  function vt(e, t) {
    var i = {};
    return (i[e.toLowerCase()] = t.toLowerCase()), (i['Webkit' + e] = 'webkit' + t), (i['Moz' + e] = 'moz' + t), i;
  }
  var fa = {
      animationend: vt('Animation', 'AnimationEnd'),
      animationiteration: vt('Animation', 'AnimationIteration'),
      animationstart: vt('Animation', 'AnimationStart'),
      transitionend: vt('Transition', 'TransitionEnd'),
    },
    js = {},
    Va = {};
  x &&
    ((Va = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete fa.animationend.animation, delete fa.animationiteration.animation, delete fa.animationstart.animation),
    'TransitionEvent' in window || delete fa.transitionend.transition);
  function Js(e) {
    if (js[e]) return js[e];
    if (!fa[e]) return e;
    var t = fa[e],
      i;
    for (i in t) if (t.hasOwnProperty(i) && i in Va) return (js[e] = t[i]);
    return e;
  }
  var Jc = Js('animationend'),
    ef = Js('animationiteration'),
    Qa = Js('animationstart'),
    Ni = Js('transitionend'),
    Xa = new Map(),
    Nu =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  function Dr(e, t) {
    Xa.set(e, t), m(t, [e]);
  }
  for (var el = 0; el < Nu.length; el++) {
    var tl = Nu[el],
      nl = tl.toLowerCase(),
      tf = tl[0].toUpperCase() + tl.slice(1);
    Dr(nl, 'on' + tf);
  }
  Dr(Jc, 'onAnimationEnd'),
    Dr(ef, 'onAnimationIteration'),
    Dr(Qa, 'onAnimationStart'),
    Dr('dblclick', 'onDoubleClick'),
    Dr('focusin', 'onFocus'),
    Dr('focusout', 'onBlur'),
    Dr(Ni, 'onTransitionEnd'),
    v('onMouseEnter', ['mouseout', 'mouseover']),
    v('onMouseLeave', ['mouseout', 'mouseover']),
    v('onPointerEnter', ['pointerout', 'pointerover']),
    v('onPointerLeave', ['pointerout', 'pointerover']),
    m('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    m('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    m('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    m('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    m('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    m('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
  var Ti =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Oo = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ti));
  function ja(e, t, i) {
    var o = e.type || 'unknown-event';
    (e.currentTarget = i), su(o, t, void 0, e), (e.currentTarget = null);
  }
  function nf(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var o = e[i],
        u = o.event;
      o = o.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var _ = o.length - 1; 0 <= _; _--) {
            var k = o[_],
              A = k.instance,
              W = k.currentTarget;
            if (((k = k.listener), A !== c && u.isPropagationStopped())) break e;
            ja(u, k, W), (c = A);
          }
        else
          for (_ = 0; _ < o.length; _++) {
            if (
              ((k = o[_]),
              (A = k.instance),
              (W = k.currentTarget),
              (k = k.listener),
              A !== c && u.isPropagationStopped())
            )
              break e;
            ja(u, k, W), (c = A);
          }
      }
    }
    if (qi) throw ((e = bo), (qi = !1), (bo = null), e);
  }
  function It(e, t) {
    var i = t[sl];
    i === void 0 && (i = t[sl] = new Set());
    var o = e + '__bubble';
    i.has(o) || (rl(t, e, 2, !1), i.add(o));
  }
  function Tu(e, t, i) {
    var o = 0;
    t && (o |= 4), rl(i, e, o, t);
  }
  var Mo = '_reactListening' + Math.random().toString(36).slice(2);
  function Ji(e) {
    if (!e[Mo]) {
      (e[Mo] = !0),
        p.forEach(function (i) {
          i !== 'selectionchange' && (Oo.has(i) || Tu(i, !1, e), Tu(i, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Mo] || ((t[Mo] = !0), Tu('selectionchange', !1, t));
    }
  }
  function rl(e, t, i, o) {
    switch (Bc(t)) {
      case 1:
        var u = cd;
        break;
      case 4:
        u = fd;
        break;
      default:
        u = fu;
    }
    (i = u.bind(null, t, i, e)),
      (u = void 0),
      !me || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (u = !0),
      o
        ? u !== void 0
          ? e.addEventListener(t, i, { capture: !0, passive: u })
          : e.addEventListener(t, i, !0)
        : u !== void 0
          ? e.addEventListener(t, i, { passive: u })
          : e.addEventListener(t, i, !1);
  }
  function Ru(e, t, i, o, u) {
    var c = o;
    if (!(t & 1) && !(t & 2) && o !== null)
      e: for (;;) {
        if (o === null) return;
        var _ = o.tag;
        if (_ === 3 || _ === 4) {
          var k = o.stateNode.containerInfo;
          if (k === u || (k.nodeType === 8 && k.parentNode === u)) break;
          if (_ === 4)
            for (_ = o.return; _ !== null; ) {
              var A = _.tag;
              if (
                (A === 3 || A === 4) &&
                ((A = _.stateNode.containerInfo), A === u || (A.nodeType === 8 && A.parentNode === u))
              )
                return;
              _ = _.return;
            }
          for (; k !== null; ) {
            if (((_ = ti(k)), _ === null)) return;
            if (((A = _.tag), A === 5 || A === 6)) {
              o = c = _;
              continue e;
            }
            k = k.parentNode;
          }
        }
        o = o.return;
      }
    Bt(function () {
      var W = c,
        ee = Ki(i),
        oe = [];
      e: {
        var J = Xa.get(e);
        if (J !== void 0) {
          var ve = Gs,
            Re = e;
          switch (e) {
            case 'keypress':
              if (ia(i) === 0) break e;
            case 'keydown':
            case 'keyup':
              ve = Hc;
              break;
            case 'focusin':
              (Re = 'focus'), (ve = Ct);
              break;
            case 'focusout':
              (Re = 'blur'), (ve = Ct);
              break;
            case 'beforeblur':
            case 'afterblur':
              ve = Ct;
              break;
            case 'click':
              if (i.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              ve = hu;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              ve = qs;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              ve = hd;
              break;
            case Jc:
            case ef:
            case Qa:
              ve = _u;
              break;
            case Ni:
              ve = wu;
              break;
            case 'scroll':
              ve = Uc;
              break;
            case 'wheel':
              ve = Gc;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              ve = vu;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              ve = Zs;
          }
          var Oe = (t & 4) !== 0,
            jt = !Oe && e === 'scroll',
            P = Oe ? (J !== null ? J + 'Capture' : null) : J;
          Oe = [];
          for (var M = W, U; M !== null; ) {
            U = M;
            var se = U.stateNode;
            if (
              (U.tag === 5 &&
                se !== null &&
                ((U = se), P !== null && ((se = ke(M, P)), se != null && Oe.push(da(M, se, U)))),
              jt)
            )
              break;
            M = M.return;
          }
          0 < Oe.length && ((J = new ve(J, Re, null, i, ee)), oe.push({ event: J, listeners: Oe }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((J = e === 'mouseover' || e === 'pointerover'),
            (ve = e === 'mouseout' || e === 'pointerout'),
            J && i !== Ei && (Re = i.relatedTarget || i.fromElement) && (ti(Re) || Re[or]))
          )
            break e;
          if (
            (ve || J) &&
            ((J = ee.window === ee ? ee : (J = ee.ownerDocument) ? J.defaultView || J.parentWindow : window),
            ve
              ? ((Re = i.relatedTarget || i.toElement),
                (ve = W),
                (Re = Re ? ti(Re) : null),
                Re !== null && ((jt = bi(Re)), Re !== jt || (Re.tag !== 5 && Re.tag !== 6)) && (Re = null))
              : ((ve = null), (Re = W)),
            ve !== Re)
          ) {
            if (
              ((Oe = hu),
              (se = 'onMouseLeave'),
              (P = 'onMouseEnter'),
              (M = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((Oe = Zs), (se = 'onPointerLeave'), (P = 'onPointerEnter'), (M = 'pointer')),
              (jt = ve == null ? J : et(ve)),
              (U = Re == null ? J : et(Re)),
              (J = new Oe(se, M + 'leave', ve, i, ee)),
              (J.target = jt),
              (J.relatedTarget = U),
              (se = null),
              ti(ee) === W &&
                ((Oe = new Oe(P, M + 'enter', Re, i, ee)), (Oe.target = U), (Oe.relatedTarget = jt), (se = Oe)),
              (jt = se),
              ve && Re)
            )
              t: {
                for (Oe = ve, P = Re, M = 0, U = Oe; U; U = pa(U)) M++;
                for (U = 0, se = P; se; se = pa(se)) U++;
                for (; 0 < M - U; ) (Oe = pa(Oe)), M--;
                for (; 0 < U - M; ) (P = pa(P)), U--;
                for (; M--; ) {
                  if (Oe === P || (P !== null && Oe === P.alternate)) break t;
                  (Oe = pa(Oe)), (P = pa(P));
                }
                Oe = null;
              }
            else Oe = null;
            ve !== null && tn(oe, J, ve, Oe, !1), Re !== null && jt !== null && tn(oe, jt, Re, Oe, !0);
          }
        }
        e: {
          if (
            ((J = W ? et(W) : window),
            (ve = J.nodeName && J.nodeName.toLowerCase()),
            ve === 'select' || (ve === 'input' && J.type === 'file'))
          )
            var Ie = Ed;
          else if (Vs(J))
            if (Ao) Ie = L;
            else {
              Ie = wd;
              var We = bd;
            }
          else
            (ve = J.nodeName) &&
              ve.toLowerCase() === 'input' &&
              (J.type === 'checkbox' || J.type === 'radio') &&
              (Ie = ua);
          if (Ie && (Ie = Ie(e, W))) {
            Su(oe, Ie, i, ee);
            break e;
          }
          We && We(e, J, W),
            e === 'focusout' &&
              (We = J._wrapperState) &&
              We.controlled &&
              J.type === 'number' &&
              yo(J, 'number', J.value);
        }
        switch (((We = W ? et(W) : window), e)) {
          case 'focusin':
            (Vs(We) || We.contentEditable === 'true') && ((ki = We), (ku = W), (Jr = null));
            break;
          case 'focusout':
            Jr = ku = ki = null;
            break;
          case 'mousedown':
            ca = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (ca = !1), Za(oe, i, ee);
            break;
          case 'selectionchange':
            if (gr) break;
          case 'keydown':
          case 'keyup':
            Za(oe, i, ee);
        }
        var Ue;
        if (qa)
          e: {
            switch (e) {
              case 'compositionstart':
                var Ve = 'onCompositionStart';
                break e;
              case 'compositionend':
                Ve = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Ve = 'onCompositionUpdate';
                break e;
            }
            Ve = void 0;
          }
        else
          sa
            ? Zc(e, i) && (Ve = 'onCompositionEnd')
            : e === 'keydown' && i.keyCode === 229 && (Ve = 'onCompositionStart');
        Ve &&
          (xu &&
            i.locale !== 'ko' &&
            (sa || Ve !== 'onCompositionStart'
              ? Ve === 'onCompositionEnd' && sa && (Ue = du())
              : ((Ut = ee), (Ka = 'value' in Ut ? Ut.value : Ut.textContent), (sa = !0))),
          (We = il(W, Ve)),
          0 < We.length &&
            ((Ve = new zc(Ve, e, null, i, ee)),
            oe.push({ event: Ve, listeners: We }),
            Ue ? (Ve.data = Ue) : ((Ue = Vc(i)), Ue !== null && (Ve.data = Ue)))),
          (Ue = Kc ? la(e, i) : _d(e, i)) &&
            ((W = il(W, 'onBeforeInput')),
            0 < W.length &&
              ((ee = new zc('onBeforeInput', 'beforeinput', null, i, ee)),
              oe.push({ event: ee, listeners: W }),
              (ee.data = Ue)));
      }
      nf(oe, t);
    });
  }
  function da(e, t, i) {
    return { instance: e, listener: t, currentTarget: i };
  }
  function il(e, t) {
    for (var i = t + 'Capture', o = []; e !== null; ) {
      var u = e,
        c = u.stateNode;
      u.tag === 5 &&
        c !== null &&
        ((u = c),
        (c = ke(e, i)),
        c != null && o.unshift(da(e, c, u)),
        (c = ke(e, t)),
        c != null && o.push(da(e, c, u))),
        (e = e.return);
    }
    return o;
  }
  function pa(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function tn(e, t, i, o, u) {
    for (var c = t._reactName, _ = []; i !== null && i !== o; ) {
      var k = i,
        A = k.alternate,
        W = k.stateNode;
      if (A !== null && A === o) break;
      k.tag === 5 &&
        W !== null &&
        ((k = W),
        u
          ? ((A = ke(i, c)), A != null && _.unshift(da(i, A, k)))
          : u || ((A = ke(i, c)), A != null && _.push(da(i, A, k)))),
        (i = i.return);
    }
    _.length !== 0 && e.push({ event: t, listeners: _ });
  }
  var Nn = /\r\n?/g,
    Sd = /\u0000|\uFFFD/g;
  function rf(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Nn,
        `
`
      )
      .replace(Sd, '');
  }
  function Ja(e, t, i) {
    if (((t = rf(t)), rf(e) !== t && i)) throw Error(a(425));
  }
  function ol() {}
  var es = null,
    Io = null;
  function ts(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var eo = typeof setTimeout == 'function' ? setTimeout : void 0,
    ns = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    ga = typeof Promise == 'function' ? Promise : void 0,
    al =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof ga < 'u'
          ? function (e) {
              return ga.resolve(null).then(e).catch(ha);
            }
          : eo;
  function ha(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Cu(e, t) {
    var i = t,
      o = 0;
    do {
      var u = i.nextSibling;
      if ((e.removeChild(i), u && u.nodeType === 8))
        if (((i = u.data), i === '/$')) {
          if (o === 0) {
            e.removeChild(u), Et(t);
            return;
          }
          o--;
        } else (i !== '$' && i !== '$?' && i !== '$!') || o++;
      i = u;
    } while (i);
    Et(t);
  }
  function to(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function of(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === '$' || i === '$!' || i === '$?') {
          if (t === 0) return e;
          t--;
        } else i === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var ma = Math.random().toString(36).slice(2),
    ei = '__reactFiber$' + ma,
    no = '__reactProps$' + ma,
    or = '__reactContainer$' + ma,
    sl = '__reactEvents$' + ma,
    y = '__reactListeners$' + ma,
    _a = '__reactHandles$' + ma;
  function ti(e) {
    var t = e[ei];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if ((t = i[or] || i[ei])) {
        if (((i = t.alternate), t.child !== null || (i !== null && i.child !== null)))
          for (e = of(e); e !== null; ) {
            if ((i = e[ei])) return i;
            e = of(e);
          }
        return t;
      }
      (e = i), (i = e.parentNode);
    }
    return null;
  }
  function Tn(e) {
    return (e = e[ei] || e[or]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
  }
  function et(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function ll(e) {
    return e[no] || null;
  }
  var Au = [],
    va = -1;
  function Zn(e) {
    return { current: e };
  }
  function Lt(e) {
    0 > va || ((e.current = Au[va]), (Au[va] = null), va--);
  }
  function At(e, t) {
    va++, (Au[va] = e.current), (e.current = t);
  }
  var ro = {},
    Rn = Zn(ro),
    Vn = Zn(!1),
    Pn = ro;
  function ya(e, t) {
    var i = e.type.contextTypes;
    if (!i) return ro;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t) return o.__reactInternalMemoizedMaskedChildContext;
    var u = {},
      c;
    for (c in i) u[c] = t[c];
    return (
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      u
    );
  }
  function Qn(e) {
    return (e = e.childContextTypes), e != null;
  }
  function ul() {
    Lt(Vn), Lt(Rn);
  }
  function af(e, t, i) {
    if (Rn.current !== ro) throw Error(a(168));
    At(Rn, t), At(Vn, i);
  }
  function sf(e, t, i) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != 'function')) return i;
    o = o.getChildContext();
    for (var u in o) if (!(u in t)) throw Error(a(108, Pe(e) || 'Unknown', u));
    return Y({}, i, o);
  }
  function hr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ro),
      (Pn = Rn.current),
      At(Rn, e),
      At(Vn, Vn.current),
      !0
    );
  }
  function lf(e, t, i) {
    var o = e.stateNode;
    if (!o) throw Error(a(169));
    i ? ((e = sf(e, t, Pn)), (o.__reactInternalMemoizedMergedChildContext = e), Lt(Vn), Lt(Rn), At(Rn, e)) : Lt(Vn),
      At(Vn, i);
  }
  var Ri = null,
    cl = !1,
    Ou = !1;
  function uf(e) {
    Ri === null ? (Ri = [e]) : Ri.push(e);
  }
  function Lo(e) {
    (cl = !0), uf(e);
  }
  function io() {
    if (!Ou && Ri !== null) {
      Ou = !0;
      var e = 0,
        t = ct;
      try {
        var i = Ri;
        for (ct = 1; e < i.length; e++) {
          var o = i[e];
          do o = o(!0);
          while (o !== null);
        }
        (Ri = null), (cl = !1);
      } catch (u) {
        throw (Ri !== null && (Ri = Ri.slice(e + 1)), Ps(Wa, io), u);
      } finally {
        (ct = t), (Ou = !1);
      }
    }
    return null;
  }
  var Ea = [],
    Cn = 0,
    fl = null,
    dl = 0,
    mr = [],
    _r = 0,
    Do = null,
    ni = 1,
    ri = '';
  function Po(e, t) {
    (Ea[Cn++] = dl), (Ea[Cn++] = fl), (fl = e), (dl = t);
  }
  function cf(e, t, i) {
    (mr[_r++] = ni), (mr[_r++] = ri), (mr[_r++] = Do), (Do = e);
    var o = ni;
    e = ri;
    var u = 32 - Ft(o) - 1;
    (o &= ~(1 << u)), (i += 1);
    var c = 32 - Ft(t) + u;
    if (30 < c) {
      var _ = u - (u % 5);
      (c = (o & ((1 << _) - 1)).toString(32)),
        (o >>= _),
        (u -= _),
        (ni = (1 << (32 - Ft(t) + u)) | (i << u) | o),
        (ri = c + e);
    } else (ni = (1 << c) | (i << u) | o), (ri = e);
  }
  function rs(e) {
    e.return !== null && (Po(e, 1), cf(e, 1, 0));
  }
  function Bo(e) {
    for (; e === fl; ) (fl = Ea[--Cn]), (Ea[Cn] = null), (dl = Ea[--Cn]), (Ea[Cn] = null);
    for (; e === Do; )
      (Do = mr[--_r]), (mr[_r] = null), (ri = mr[--_r]), (mr[_r] = null), (ni = mr[--_r]), (mr[_r] = null);
  }
  var An = null,
    ar = null,
    Dt = !1,
    Pr = null;
  function ii(e, t) {
    var i = Sr(5, null, null, 0);
    (i.elementType = 'DELETED'),
      (i.stateNode = t),
      (i.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [i]), (e.flags |= 16)) : t.push(i);
  }
  function pl(e, t) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return (
          (t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (An = e), (ar = to(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (An = e), (ar = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((i = Do !== null ? { id: ni, overflow: ri } : null),
              (e.memoizedState = { dehydrated: t, treeContext: i, retryLane: 1073741824 }),
              (i = Sr(18, null, null, 0)),
              (i.stateNode = t),
              (i.return = e),
              (e.child = i),
              (An = e),
              (ar = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Ci(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Xn(e) {
    if (Dt) {
      var t = ar;
      if (t) {
        var i = t;
        if (!pl(e, t)) {
          if (Ci(e)) throw Error(a(418));
          t = to(i.nextSibling);
          var o = An;
          t && pl(e, t) ? ii(o, i) : ((e.flags = (e.flags & -4097) | 2), (Dt = !1), (An = e));
        }
      } else {
        if (Ci(e)) throw Error(a(418));
        (e.flags = (e.flags & -4097) | 2), (Dt = !1), (An = e);
      }
    }
  }
  function ff(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    An = e;
  }
  function is(e) {
    if (e !== An) return !1;
    if (!Dt) return ff(e), (Dt = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !ts(e.type, e.memoizedProps))),
      t && (t = ar))
    ) {
      if (Ci(e)) throw (Mu(), Error(a(418)));
      for (; t; ) ii(e, t), (t = to(t.nextSibling));
    }
    if ((ff(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === '/$') {
              if (t === 0) {
                ar = to(e.nextSibling);
                break e;
              }
              t--;
            } else (i !== '$' && i !== '$!' && i !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        ar = null;
      }
    } else ar = An ? to(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Mu() {
    for (var e = ar; e; ) e = to(e.nextSibling);
  }
  function oi() {
    (ar = An = null), (Dt = !1);
  }
  function ai(e) {
    Pr === null ? (Pr = [e]) : Pr.push(e);
  }
  var df = Te.ReactCurrentBatchConfig;
  function os(e, t, i) {
    if (((e = i.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (i._owner) {
        if (((i = i._owner), i)) {
          if (i.tag !== 1) throw Error(a(309));
          var o = i.stateNode;
        }
        if (!o) throw Error(a(147, e));
        var u = o,
          c = '' + e;
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === c
          ? t.ref
          : ((t = function (_) {
              var k = u.refs;
              _ === null ? delete k[c] : (k[c] = _);
            }),
            (t._stringRef = c),
            t);
      }
      if (typeof e != 'string') throw Error(a(284));
      if (!i._owner) throw Error(a(290, e));
    }
    return e;
  }
  function Uo(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(a(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
    );
  }
  function pf(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Iu(e) {
    function t(P, M) {
      if (e) {
        var U = P.deletions;
        U === null ? ((P.deletions = [M]), (P.flags |= 16)) : U.push(M);
      }
    }
    function i(P, M) {
      if (!e) return null;
      for (; M !== null; ) t(P, M), (M = M.sibling);
      return null;
    }
    function o(P, M) {
      for (P = new Map(); M !== null; ) M.key !== null ? P.set(M.key, M) : P.set(M.index, M), (M = M.sibling);
      return P;
    }
    function u(P, M) {
      return (P = Wr(P, M)), (P.index = 0), (P.sibling = null), P;
    }
    function c(P, M, U) {
      return (
        (P.index = U),
        e
          ? ((U = P.alternate), U !== null ? ((U = U.index), U < M ? ((P.flags |= 2), M) : U) : ((P.flags |= 2), M))
          : ((P.flags |= 1048576), M)
      );
    }
    function _(P) {
      return e && P.alternate === null && (P.flags |= 2), P;
    }
    function k(P, M, U, se) {
      return M === null || M.tag !== 6
        ? ((M = yc(U, P.mode, se)), (M.return = P), M)
        : ((M = u(M, U)), (M.return = P), M);
    }
    function A(P, M, U, se) {
      var Ie = U.type;
      return Ie === we
        ? ee(P, M, U.props.children, se, U.key)
        : M !== null &&
            (M.elementType === Ie || (typeof Ie == 'object' && Ie !== null && Ie.$$typeof === j && pf(Ie) === M.type))
          ? ((se = u(M, U.props)), (se.ref = os(P, M, U)), (se.return = P), se)
          : ((se = Zl(U.type, U.key, U.props, null, P.mode, se)), (se.ref = os(P, M, U)), (se.return = P), se);
    }
    function W(P, M, U, se) {
      return M === null ||
        M.tag !== 4 ||
        M.stateNode.containerInfo !== U.containerInfo ||
        M.stateNode.implementation !== U.implementation
        ? ((M = Ec(U, P.mode, se)), (M.return = P), M)
        : ((M = u(M, U.children || [])), (M.return = P), M);
    }
    function ee(P, M, U, se, Ie) {
      return M === null || M.tag !== 7
        ? ((M = Vo(U, P.mode, se, Ie)), (M.return = P), M)
        : ((M = u(M, U)), (M.return = P), M);
    }
    function oe(P, M, U) {
      if ((typeof M == 'string' && M !== '') || typeof M == 'number')
        return (M = yc('' + M, P.mode, U)), (M.return = P), M;
      if (typeof M == 'object' && M !== null) {
        switch (M.$$typeof) {
          case de:
            return (U = Zl(M.type, M.key, M.props, null, P.mode, U)), (U.ref = os(P, null, M)), (U.return = P), U;
          case be:
            return (M = Ec(M, P.mode, U)), (M.return = P), M;
          case j:
            var se = M._init;
            return oe(P, se(M._payload), U);
        }
        if (Hn(M) || ie(M)) return (M = Vo(M, P.mode, U, null)), (M.return = P), M;
        Uo(P, M);
      }
      return null;
    }
    function J(P, M, U, se) {
      var Ie = M !== null ? M.key : null;
      if ((typeof U == 'string' && U !== '') || typeof U == 'number') return Ie !== null ? null : k(P, M, '' + U, se);
      if (typeof U == 'object' && U !== null) {
        switch (U.$$typeof) {
          case de:
            return U.key === Ie ? A(P, M, U, se) : null;
          case be:
            return U.key === Ie ? W(P, M, U, se) : null;
          case j:
            return (Ie = U._init), J(P, M, Ie(U._payload), se);
        }
        if (Hn(U) || ie(U)) return Ie !== null ? null : ee(P, M, U, se, null);
        Uo(P, U);
      }
      return null;
    }
    function ve(P, M, U, se, Ie) {
      if ((typeof se == 'string' && se !== '') || typeof se == 'number')
        return (P = P.get(U) || null), k(M, P, '' + se, Ie);
      if (typeof se == 'object' && se !== null) {
        switch (se.$$typeof) {
          case de:
            return (P = P.get(se.key === null ? U : se.key) || null), A(M, P, se, Ie);
          case be:
            return (P = P.get(se.key === null ? U : se.key) || null), W(M, P, se, Ie);
          case j:
            var We = se._init;
            return ve(P, M, U, We(se._payload), Ie);
        }
        if (Hn(se) || ie(se)) return (P = P.get(U) || null), ee(M, P, se, Ie, null);
        Uo(M, se);
      }
      return null;
    }
    function Re(P, M, U, se) {
      for (var Ie = null, We = null, Ue = M, Ve = (M = 0), pn = null; Ue !== null && Ve < U.length; Ve++) {
        Ue.index > Ve ? ((pn = Ue), (Ue = null)) : (pn = Ue.sibling);
        var yt = J(P, Ue, U[Ve], se);
        if (yt === null) {
          Ue === null && (Ue = pn);
          break;
        }
        e && Ue && yt.alternate === null && t(P, Ue),
          (M = c(yt, M, Ve)),
          We === null ? (Ie = yt) : (We.sibling = yt),
          (We = yt),
          (Ue = pn);
      }
      if (Ve === U.length) return i(P, Ue), Dt && Po(P, Ve), Ie;
      if (Ue === null) {
        for (; Ve < U.length; Ve++)
          (Ue = oe(P, U[Ve], se)),
            Ue !== null && ((M = c(Ue, M, Ve)), We === null ? (Ie = Ue) : (We.sibling = Ue), (We = Ue));
        return Dt && Po(P, Ve), Ie;
      }
      for (Ue = o(P, Ue); Ve < U.length; Ve++)
        (pn = ve(Ue, P, Ve, U[Ve], se)),
          pn !== null &&
            (e && pn.alternate !== null && Ue.delete(pn.key === null ? Ve : pn.key),
            (M = c(pn, M, Ve)),
            We === null ? (Ie = pn) : (We.sibling = pn),
            (We = pn));
      return (
        e &&
          Ue.forEach(function (_o) {
            return t(P, _o);
          }),
        Dt && Po(P, Ve),
        Ie
      );
    }
    function Oe(P, M, U, se) {
      var Ie = ie(U);
      if (typeof Ie != 'function') throw Error(a(150));
      if (((U = Ie.call(U)), U == null)) throw Error(a(151));
      for (
        var We = (Ie = null), Ue = M, Ve = (M = 0), pn = null, yt = U.next();
        Ue !== null && !yt.done;
        Ve++, yt = U.next()
      ) {
        Ue.index > Ve ? ((pn = Ue), (Ue = null)) : (pn = Ue.sibling);
        var _o = J(P, Ue, yt.value, se);
        if (_o === null) {
          Ue === null && (Ue = pn);
          break;
        }
        e && Ue && _o.alternate === null && t(P, Ue),
          (M = c(_o, M, Ve)),
          We === null ? (Ie = _o) : (We.sibling = _o),
          (We = _o),
          (Ue = pn);
      }
      if (yt.done) return i(P, Ue), Dt && Po(P, Ve), Ie;
      if (Ue === null) {
        for (; !yt.done; Ve++, yt = U.next())
          (yt = oe(P, yt.value, se)),
            yt !== null && ((M = c(yt, M, Ve)), We === null ? (Ie = yt) : (We.sibling = yt), (We = yt));
        return Dt && Po(P, Ve), Ie;
      }
      for (Ue = o(P, Ue); !yt.done; Ve++, yt = U.next())
        (yt = ve(Ue, P, Ve, yt.value, se)),
          yt !== null &&
            (e && yt.alternate !== null && Ue.delete(yt.key === null ? Ve : yt.key),
            (M = c(yt, M, Ve)),
            We === null ? (Ie = yt) : (We.sibling = yt),
            (We = yt));
      return (
        e &&
          Ue.forEach(function (Kd) {
            return t(P, Kd);
          }),
        Dt && Po(P, Ve),
        Ie
      );
    }
    function jt(P, M, U, se) {
      if (
        (typeof U == 'object' && U !== null && U.type === we && U.key === null && (U = U.props.children),
        typeof U == 'object' && U !== null)
      ) {
        switch (U.$$typeof) {
          case de:
            e: {
              for (var Ie = U.key, We = M; We !== null; ) {
                if (We.key === Ie) {
                  if (((Ie = U.type), Ie === we)) {
                    if (We.tag === 7) {
                      i(P, We.sibling), (M = u(We, U.props.children)), (M.return = P), (P = M);
                      break e;
                    }
                  } else if (
                    We.elementType === Ie ||
                    (typeof Ie == 'object' && Ie !== null && Ie.$$typeof === j && pf(Ie) === We.type)
                  ) {
                    i(P, We.sibling), (M = u(We, U.props)), (M.ref = os(P, We, U)), (M.return = P), (P = M);
                    break e;
                  }
                  i(P, We);
                  break;
                } else t(P, We);
                We = We.sibling;
              }
              U.type === we
                ? ((M = Vo(U.props.children, P.mode, se, U.key)), (M.return = P), (P = M))
                : ((se = Zl(U.type, U.key, U.props, null, P.mode, se)),
                  (se.ref = os(P, M, U)),
                  (se.return = P),
                  (P = se));
            }
            return _(P);
          case be:
            e: {
              for (We = U.key; M !== null; ) {
                if (M.key === We)
                  if (
                    M.tag === 4 &&
                    M.stateNode.containerInfo === U.containerInfo &&
                    M.stateNode.implementation === U.implementation
                  ) {
                    i(P, M.sibling), (M = u(M, U.children || [])), (M.return = P), (P = M);
                    break e;
                  } else {
                    i(P, M);
                    break;
                  }
                else t(P, M);
                M = M.sibling;
              }
              (M = Ec(U, P.mode, se)), (M.return = P), (P = M);
            }
            return _(P);
          case j:
            return (We = U._init), jt(P, M, We(U._payload), se);
        }
        if (Hn(U)) return Re(P, M, U, se);
        if (ie(U)) return Oe(P, M, U, se);
        Uo(P, U);
      }
      return (typeof U == 'string' && U !== '') || typeof U == 'number'
        ? ((U = '' + U),
          M !== null && M.tag === 6
            ? (i(P, M.sibling), (M = u(M, U)), (M.return = P), (P = M))
            : (i(P, M), (M = yc(U, P.mode, se)), (M.return = P), (P = M)),
          _(P))
        : i(P, M);
    }
    return jt;
  }
  var Vt = Iu(!0),
    gl = Iu(!1),
    as = Zn(null),
    sr = null,
    oo = null,
    ba = null;
  function Ai() {
    ba = oo = sr = null;
  }
  function hl(e) {
    var t = as.current;
    Lt(as), (e._currentValue = t);
  }
  function _n(e, t, i) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
          : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function ao(e, t) {
    (sr = e),
      (ba = oo = null),
      (e = e.dependencies),
      e !== null && e.firstContext !== null && (e.lanes & t && (Un = !0), (e.firstContext = null));
  }
  function vr(e) {
    var t = e._currentValue;
    if (ba !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), oo === null)) {
        if (sr === null) throw Error(a(308));
        (oo = e), (sr.dependencies = { lanes: 0, firstContext: e });
      } else oo = oo.next = e;
    return t;
  }
  var zo = null;
  function Lu(e) {
    zo === null ? (zo = [e]) : zo.push(e);
  }
  function ml(e, t, i, o) {
    var u = t.interleaved;
    return u === null ? ((i.next = i), Lu(t)) : ((i.next = u.next), (u.next = i)), (t.interleaved = i), Oi(e, o);
  }
  function Oi(e, t) {
    e.lanes |= t;
    var i = e.alternate;
    for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null; )
      (e.childLanes |= t), (i = e.alternate), i !== null && (i.childLanes |= t), (i = e), (e = e.return);
    return i.tag === 3 ? i.stateNode : null;
  }
  var yr = !1;
  function _l(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function gf(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Mi(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Er(e, t, i) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), gt & 2)) {
      var u = o.pending;
      return u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)), (o.pending = t), Oi(e, i);
    }
    return (
      (u = o.interleaved),
      u === null ? ((t.next = t), Lu(o)) : ((t.next = u.next), (u.next = t)),
      (o.interleaved = t),
      Oi(e, i)
    );
  }
  function vl(e, t, i) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (i & 4194240) !== 0))) {
      var o = t.lanes;
      (o &= e.pendingLanes), (i |= o), (t.lanes = i), To(e, i);
    }
  }
  function hf(e, t) {
    var i = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), i === o)) {
      var u = null,
        c = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var _ = {
            eventTime: i.eventTime,
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          };
          c === null ? (u = c = _) : (c = c.next = _), (i = i.next);
        } while (i !== null);
        c === null ? (u = c = t) : (c = c.next = t);
      } else u = c = t;
      (i = { baseState: o.baseState, firstBaseUpdate: u, lastBaseUpdate: c, shared: o.shared, effects: o.effects }),
        (e.updateQueue = i);
      return;
    }
    (e = i.lastBaseUpdate), e === null ? (i.firstBaseUpdate = t) : (e.next = t), (i.lastBaseUpdate = t);
  }
  function wa(e, t, i, o) {
    var u = e.updateQueue;
    yr = !1;
    var c = u.firstBaseUpdate,
      _ = u.lastBaseUpdate,
      k = u.shared.pending;
    if (k !== null) {
      u.shared.pending = null;
      var A = k,
        W = A.next;
      (A.next = null), _ === null ? (c = W) : (_.next = W), (_ = A);
      var ee = e.alternate;
      ee !== null &&
        ((ee = ee.updateQueue),
        (k = ee.lastBaseUpdate),
        k !== _ && (k === null ? (ee.firstBaseUpdate = W) : (k.next = W), (ee.lastBaseUpdate = A)));
    }
    if (c !== null) {
      var oe = u.baseState;
      (_ = 0), (ee = W = A = null), (k = c);
      do {
        var J = k.lane,
          ve = k.eventTime;
        if ((o & J) === J) {
          ee !== null &&
            (ee = ee.next =
              { eventTime: ve, lane: 0, tag: k.tag, payload: k.payload, callback: k.callback, next: null });
          e: {
            var Re = e,
              Oe = k;
            switch (((J = t), (ve = i), Oe.tag)) {
              case 1:
                if (((Re = Oe.payload), typeof Re == 'function')) {
                  oe = Re.call(ve, oe, J);
                  break e;
                }
                oe = Re;
                break e;
              case 3:
                Re.flags = (Re.flags & -65537) | 128;
              case 0:
                if (((Re = Oe.payload), (J = typeof Re == 'function' ? Re.call(ve, oe, J) : Re), J == null)) break e;
                oe = Y({}, oe, J);
                break e;
              case 2:
                yr = !0;
            }
          }
          k.callback !== null &&
            k.lane !== 0 &&
            ((e.flags |= 64), (J = u.effects), J === null ? (u.effects = [k]) : J.push(k));
        } else
          (ve = { eventTime: ve, lane: J, tag: k.tag, payload: k.payload, callback: k.callback, next: null }),
            ee === null ? ((W = ee = ve), (A = oe)) : (ee = ee.next = ve),
            (_ |= J);
        if (((k = k.next), k === null)) {
          if (((k = u.shared.pending), k === null)) break;
          (J = k), (k = J.next), (J.next = null), (u.lastBaseUpdate = J), (u.shared.pending = null);
        }
      } while (!0);
      if (
        (ee === null && (A = oe),
        (u.baseState = A),
        (u.firstBaseUpdate = W),
        (u.lastBaseUpdate = ee),
        (t = u.shared.interleaved),
        t !== null)
      ) {
        u = t;
        do (_ |= u.lane), (u = u.next);
        while (u !== t);
      } else c === null && (u.shared.lanes = 0);
      (fo |= _), (e.lanes = _), (e.memoizedState = oe);
    }
  }
  function Du(e, t, i) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var o = e[t],
          u = o.callback;
        if (u !== null) {
          if (((o.callback = null), (o = i), typeof u != 'function')) throw Error(a(191, u));
          u.call(o);
        }
      }
  }
  var ss = {},
    si = Zn(ss),
    ls = Zn(ss),
    xa = Zn(ss);
  function Ii(e) {
    if (e === ss) throw Error(a(174));
    return e;
  }
  function Pu(e, t) {
    switch ((At(xa, t), At(ls, e), At(si, ss), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Gn(null, '');
        break;
      default:
        (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Gn(t, e));
    }
    Lt(si), At(si, t);
  }
  function so() {
    Lt(si), Lt(ls), Lt(xa);
  }
  function Bu(e) {
    Ii(xa.current);
    var t = Ii(si.current),
      i = Gn(t, e.type);
    t !== i && (At(ls, e), At(si, i));
  }
  function yl(e) {
    ls.current === e && (Lt(si), Lt(ls));
  }
  var zt = Zn(0);
  function $o(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (i !== null && ((i = i.dehydrated), i === null || i.data === '$?' || i.data === '$!')) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Uu = [];
  function El() {
    for (var e = 0; e < Uu.length; e++) Uu[e]._workInProgressVersionPrimary = null;
    Uu.length = 0;
  }
  var us = Te.ReactCurrentDispatcher,
    zu = Te.ReactCurrentBatchConfig,
    lo = 0,
    Ht = null,
    Xt = null,
    on = null,
    Sa = !1,
    cs = !1,
    Fo = 0,
    rt = 0;
  function On() {
    throw Error(a(321));
  }
  function $u(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++) if (!H(e[i], t[i])) return !1;
    return !0;
  }
  function Ho(e, t, i, o, u, c) {
    if (
      ((lo = c),
      (Ht = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (us.current = e === null || e.memoizedState === null ? Nd : Tl),
      (e = i(o, u)),
      cs)
    ) {
      c = 0;
      do {
        if (((cs = !1), (Fo = 0), 25 <= c)) throw Error(a(301));
        (c += 1), (on = Xt = null), (t.updateQueue = null), (us.current = Ra), (e = i(o, u));
      } while (cs);
    }
    if (((us.current = Nl), (t = Xt !== null && Xt.next !== null), (lo = 0), (on = Xt = Ht = null), (Sa = !1), t))
      throw Error(a(300));
    return e;
  }
  function bl() {
    var e = Fo !== 0;
    return (Fo = 0), e;
  }
  function li() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return on === null ? (Ht.memoizedState = on = e) : (on = on.next = e), on;
  }
  function br() {
    if (Xt === null) {
      var e = Ht.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Xt.next;
    var t = on === null ? Ht.memoizedState : on.next;
    if (t !== null) (on = t), (Xt = e);
    else {
      if (e === null) throw Error(a(310));
      (Xt = e),
        (e = {
          memoizedState: Xt.memoizedState,
          baseState: Xt.baseState,
          baseQueue: Xt.baseQueue,
          queue: Xt.queue,
          next: null,
        }),
        on === null ? (Ht.memoizedState = on = e) : (on = on.next = e);
    }
    return on;
  }
  function Mn(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Fu(e) {
    var t = br(),
      i = t.queue;
    if (i === null) throw Error(a(311));
    i.lastRenderedReducer = e;
    var o = Xt,
      u = o.baseQueue,
      c = i.pending;
    if (c !== null) {
      if (u !== null) {
        var _ = u.next;
        (u.next = c.next), (c.next = _);
      }
      (o.baseQueue = u = c), (i.pending = null);
    }
    if (u !== null) {
      (c = u.next), (o = o.baseState);
      var k = (_ = null),
        A = null,
        W = c;
      do {
        var ee = W.lane;
        if ((lo & ee) === ee)
          A !== null &&
            (A = A.next =
              { lane: 0, action: W.action, hasEagerState: W.hasEagerState, eagerState: W.eagerState, next: null }),
            (o = W.hasEagerState ? W.eagerState : e(o, W.action));
        else {
          var oe = { lane: ee, action: W.action, hasEagerState: W.hasEagerState, eagerState: W.eagerState, next: null };
          A === null ? ((k = A = oe), (_ = o)) : (A = A.next = oe), (Ht.lanes |= ee), (fo |= ee);
        }
        W = W.next;
      } while (W !== null && W !== c);
      A === null ? (_ = o) : (A.next = k),
        H(o, t.memoizedState) || (Un = !0),
        (t.memoizedState = o),
        (t.baseState = _),
        (t.baseQueue = A),
        (i.lastRenderedState = o);
    }
    if (((e = i.interleaved), e !== null)) {
      u = e;
      do (c = u.lane), (Ht.lanes |= c), (fo |= c), (u = u.next);
      while (u !== e);
    } else u === null && (i.lanes = 0);
    return [t.memoizedState, i.dispatch];
  }
  function ka(e) {
    var t = br(),
      i = t.queue;
    if (i === null) throw Error(a(311));
    i.lastRenderedReducer = e;
    var o = i.dispatch,
      u = i.pending,
      c = t.memoizedState;
    if (u !== null) {
      i.pending = null;
      var _ = (u = u.next);
      do (c = e(c, _.action)), (_ = _.next);
      while (_ !== u);
      H(c, t.memoizedState) || (Un = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (i.lastRenderedState = c);
    }
    return [c, o];
  }
  function wl() {}
  function Hu(e, t) {
    var i = Ht,
      o = br(),
      u = t(),
      c = !H(o.memoizedState, u);
    if (
      (c && ((o.memoizedState = u), (Un = !0)),
      (o = o.queue),
      ui(Li.bind(null, i, o, e), [e]),
      o.getSnapshot !== t || c || (on !== null && on.memoizedState.tag & 1))
    ) {
      if (((i.flags |= 2048), Na(9, jn.bind(null, i, o, u, t), void 0, null), dn === null)) throw Error(a(349));
      lo & 30 || Wu(i, t, u);
    }
    return u;
  }
  function Wu(e, t, i) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: i }),
      (t = Ht.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Ht.updateQueue = t), (t.stores = [e]))
        : ((i = t.stores), i === null ? (t.stores = [e]) : i.push(e));
  }
  function jn(e, t, i, o) {
    (t.value = i), (t.getSnapshot = o), xl(t) && Gu(e);
  }
  function Li(e, t, i) {
    return i(function () {
      xl(t) && Gu(e);
    });
  }
  function xl(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !H(e, i);
    } catch {
      return !0;
    }
  }
  function Gu(e) {
    var t = Oi(e, 1);
    t !== null && Hr(t, e, 1, -1);
  }
  function fs(e) {
    var t = li();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mn,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = bf.bind(null, Ht, e)),
      [t.memoizedState, e]
    );
  }
  function Na(e, t, i, o) {
    return (
      (e = { tag: e, create: t, destroy: i, deps: o, next: null }),
      (t = Ht.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Ht.updateQueue = t), (t.lastEffect = e.next = e))
        : ((i = t.lastEffect),
          i === null ? (t.lastEffect = e.next = e) : ((o = i.next), (i.next = e), (e.next = o), (t.lastEffect = e))),
      e
    );
  }
  function Sl() {
    return br().memoizedState;
  }
  function ds(e, t, i, o) {
    var u = li();
    (Ht.flags |= e), (u.memoizedState = Na(1 | t, i, void 0, o === void 0 ? null : o));
  }
  function Ta(e, t, i, o) {
    var u = br();
    o = o === void 0 ? null : o;
    var c = void 0;
    if (Xt !== null) {
      var _ = Xt.memoizedState;
      if (((c = _.destroy), o !== null && $u(o, _.deps))) {
        u.memoizedState = Na(t, i, c, o);
        return;
      }
    }
    (Ht.flags |= e), (u.memoizedState = Na(1 | t, i, c, o));
  }
  function kl(e, t) {
    return ds(8390656, 8, e, t);
  }
  function ui(e, t) {
    return Ta(2048, 8, e, t);
  }
  function mf(e, t) {
    return Ta(4, 2, e, t);
  }
  function Di(e, t) {
    return Ta(4, 4, e, t);
  }
  function Ku(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function qu(e, t, i) {
    return (i = i != null ? i.concat([e]) : null), Ta(4, 4, Ku.bind(null, t, e), i);
  }
  function ps() {}
  function _f(e, t) {
    var i = br();
    t = t === void 0 ? null : t;
    var o = i.memoizedState;
    return o !== null && t !== null && $u(t, o[1]) ? o[0] : ((i.memoizedState = [e, t]), e);
  }
  function vf(e, t) {
    var i = br();
    t = t === void 0 ? null : t;
    var o = i.memoizedState;
    return o !== null && t !== null && $u(t, o[1]) ? o[0] : ((e = e()), (i.memoizedState = [e, t]), e);
  }
  function yf(e, t, i) {
    return lo & 21
      ? (H(i, t) || ((i = Ga()), (Ht.lanes |= i), (fo |= i), (e.baseState = !0)), t)
      : (e.baseState && ((e.baseState = !1), (Un = !0)), (e.memoizedState = i));
  }
  function Ef(e, t) {
    var i = ct;
    (ct = i !== 0 && 4 > i ? i : 4), e(!0);
    var o = zu.transition;
    zu.transition = {};
    try {
      e(!1), t();
    } finally {
      (ct = i), (zu.transition = o);
    }
  }
  function Yu() {
    return br().memoizedState;
  }
  function kd(e, t, i) {
    var o = ho(e);
    if (((i = { lane: o, action: i, hasEagerState: !1, eagerState: null, next: null }), Zu(e))) Bn(t, i);
    else if (((i = ml(e, t, i, o)), i !== null)) {
      var u = Fn();
      Hr(i, e, o, u), Br(i, t, o);
    }
  }
  function bf(e, t, i) {
    var o = ho(e),
      u = { lane: o, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (Zu(e)) Bn(t, u);
    else {
      var c = e.alternate;
      if (e.lanes === 0 && (c === null || c.lanes === 0) && ((c = t.lastRenderedReducer), c !== null))
        try {
          var _ = t.lastRenderedState,
            k = c(_, i);
          if (((u.hasEagerState = !0), (u.eagerState = k), H(k, _))) {
            var A = t.interleaved;
            A === null ? ((u.next = u), Lu(t)) : ((u.next = A.next), (A.next = u)), (t.interleaved = u);
            return;
          }
        } catch {
        } finally {
        }
      (i = ml(e, t, u, o)), i !== null && ((u = Fn()), Hr(i, e, o, u), Br(i, t, o));
    }
  }
  function Zu(e) {
    var t = e.alternate;
    return e === Ht || (t !== null && t === Ht);
  }
  function Bn(e, t) {
    cs = Sa = !0;
    var i = e.pending;
    i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (e.pending = t);
  }
  function Br(e, t, i) {
    if (i & 4194240) {
      var o = t.lanes;
      (o &= e.pendingLanes), (i |= o), (t.lanes = i), To(e, i);
    }
  }
  var Nl = {
      readContext: vr,
      useCallback: On,
      useContext: On,
      useEffect: On,
      useImperativeHandle: On,
      useInsertionEffect: On,
      useLayoutEffect: On,
      useMemo: On,
      useReducer: On,
      useRef: On,
      useState: On,
      useDebugValue: On,
      useDeferredValue: On,
      useTransition: On,
      useMutableSource: On,
      useSyncExternalStore: On,
      useId: On,
      unstable_isNewReconciler: !1,
    },
    Nd = {
      readContext: vr,
      useCallback: function (e, t) {
        return (li().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: vr,
      useEffect: kl,
      useImperativeHandle: function (e, t, i) {
        return (i = i != null ? i.concat([e]) : null), ds(4194308, 4, Ku.bind(null, t, e), i);
      },
      useLayoutEffect: function (e, t) {
        return ds(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ds(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var i = li();
        return (t = t === void 0 ? null : t), (e = e()), (i.memoizedState = [e, t]), e;
      },
      useReducer: function (e, t, i) {
        var o = li();
        return (
          (t = i !== void 0 ? i(t) : t),
          (o.memoizedState = o.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (o.queue = e),
          (e = e.dispatch = kd.bind(null, Ht, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = li();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: fs,
      useDebugValue: ps,
      useDeferredValue: function (e) {
        return (li().memoizedState = e);
      },
      useTransition: function () {
        var e = fs(!1),
          t = e[0];
        return (e = Ef.bind(null, e[1])), (li().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, i) {
        var o = Ht,
          u = li();
        if (Dt) {
          if (i === void 0) throw Error(a(407));
          i = i();
        } else {
          if (((i = t()), dn === null)) throw Error(a(349));
          lo & 30 || Wu(o, t, i);
        }
        u.memoizedState = i;
        var c = { value: i, getSnapshot: t };
        return (
          (u.queue = c),
          kl(Li.bind(null, o, c, e), [e]),
          (o.flags |= 2048),
          Na(9, jn.bind(null, o, c, i, t), void 0, null),
          i
        );
      },
      useId: function () {
        var e = li(),
          t = dn.identifierPrefix;
        if (Dt) {
          var i = ri,
            o = ni;
          (i = (o & ~(1 << (32 - Ft(o) - 1))).toString(32) + i),
            (t = ':' + t + 'R' + i),
            (i = Fo++),
            0 < i && (t += 'H' + i.toString(32)),
            (t += ':');
        } else (i = rt++), (t = ':' + t + 'r' + i.toString(32) + ':');
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Tl = {
      readContext: vr,
      useCallback: _f,
      useContext: vr,
      useEffect: ui,
      useImperativeHandle: qu,
      useInsertionEffect: mf,
      useLayoutEffect: Di,
      useMemo: vf,
      useReducer: Fu,
      useRef: Sl,
      useState: function () {
        return Fu(Mn);
      },
      useDebugValue: ps,
      useDeferredValue: function (e) {
        var t = br();
        return yf(t, Xt.memoizedState, e);
      },
      useTransition: function () {
        var e = Fu(Mn)[0],
          t = br().memoizedState;
        return [e, t];
      },
      useMutableSource: wl,
      useSyncExternalStore: Hu,
      useId: Yu,
      unstable_isNewReconciler: !1,
    },
    Ra = {
      readContext: vr,
      useCallback: _f,
      useContext: vr,
      useEffect: ui,
      useImperativeHandle: qu,
      useInsertionEffect: mf,
      useLayoutEffect: Di,
      useMemo: vf,
      useReducer: ka,
      useRef: Sl,
      useState: function () {
        return ka(Mn);
      },
      useDebugValue: ps,
      useDeferredValue: function (e) {
        var t = br();
        return Xt === null ? (t.memoizedState = e) : yf(t, Xt.memoizedState, e);
      },
      useTransition: function () {
        var e = ka(Mn)[0],
          t = br().memoizedState;
        return [e, t];
      },
      useMutableSource: wl,
      useSyncExternalStore: Hu,
      useId: Yu,
      unstable_isNewReconciler: !1,
    };
  function wr(e, t) {
    if (e && e.defaultProps) {
      (t = Y({}, t)), (e = e.defaultProps);
      for (var i in e) t[i] === void 0 && (t[i] = e[i]);
      return t;
    }
    return t;
  }
  function Rl(e, t, i, o) {
    (t = e.memoizedState),
      (i = i(o, t)),
      (i = i == null ? t : Y({}, t, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var Cl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? bi(e) === e : !1;
    },
    enqueueSetState: function (e, t, i) {
      e = e._reactInternals;
      var o = Fn(),
        u = ho(e),
        c = Mi(o, u);
      (c.payload = t), i != null && (c.callback = i), (t = Er(e, c, u)), t !== null && (Hr(t, e, u, o), vl(t, e, u));
    },
    enqueueReplaceState: function (e, t, i) {
      e = e._reactInternals;
      var o = Fn(),
        u = ho(e),
        c = Mi(o, u);
      (c.tag = 1),
        (c.payload = t),
        i != null && (c.callback = i),
        (t = Er(e, c, u)),
        t !== null && (Hr(t, e, u, o), vl(t, e, u));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var i = Fn(),
        o = ho(e),
        u = Mi(i, o);
      (u.tag = 2), t != null && (u.callback = t), (t = Er(e, u, o)), t !== null && (Hr(t, e, o, i), vl(t, e, o));
    },
  };
  function Vu(e, t, i, o, u, c, _) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(o, c, _)
        : t.prototype && t.prototype.isPureReactComponent
          ? !_e(i, o) || !_e(u, c)
          : !0
    );
  }
  function Wo(e, t, i) {
    var o = !1,
      u = ro,
      c = t.contextType;
    return (
      typeof c == 'object' && c !== null
        ? (c = vr(c))
        : ((u = Qn(t) ? Pn : Rn.current), (o = t.contextTypes), (c = (o = o != null) ? ya(e, u) : ro)),
      (t = new t(i, c)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Cl),
      (e.stateNode = t),
      (t._reactInternals = e),
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = c)),
      t
    );
  }
  function Ca(e, t, i, o) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(i, o),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(i, o),
      t.state !== e && Cl.enqueueReplaceState(t, t.state, null);
  }
  function Qu(e, t, i, o) {
    var u = e.stateNode;
    (u.props = i), (u.state = e.memoizedState), (u.refs = {}), _l(e);
    var c = t.contextType;
    typeof c == 'object' && c !== null ? (u.context = vr(c)) : ((c = Qn(t) ? Pn : Rn.current), (u.context = ya(e, c))),
      (u.state = e.memoizedState),
      (c = t.getDerivedStateFromProps),
      typeof c == 'function' && (Rl(e, t, c, i), (u.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function' ||
        (typeof u.UNSAFE_componentWillMount != 'function' && typeof u.componentWillMount != 'function') ||
        ((t = u.state),
        typeof u.componentWillMount == 'function' && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
        t !== u.state && Cl.enqueueReplaceState(u, u.state, null),
        wa(e, i, u, o),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == 'function' && (e.flags |= 4194308);
  }
  function Go(e, t) {
    try {
      var i = '',
        o = t;
      do (i += Me(o)), (o = o.return);
      while (o);
      var u = i;
    } catch (c) {
      u =
        `
Error generating stack: ` +
        c.message +
        `
` +
        c.stack;
    }
    return { value: e, source: t, stack: u, digest: null };
  }
  function Al(e, t, i) {
    return { value: e, source: null, stack: i ?? null, digest: t ?? null };
  }
  function Aa(e, t) {
    try {
      console.error(t.value);
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  var wf = typeof WeakMap == 'function' ? WeakMap : Map;
  function gs(e, t, i) {
    (i = Mi(-1, i)), (i.tag = 3), (i.payload = { element: null });
    var o = t.value;
    return (
      (i.callback = function () {
        Fl || ((Fl = !0), (dc = o)), Aa(e, t);
      }),
      i
    );
  }
  function Ol(e, t, i) {
    (i = Mi(-1, i)), (i.tag = 3);
    var o = e.type.getDerivedStateFromError;
    if (typeof o == 'function') {
      var u = t.value;
      (i.payload = function () {
        return o(u);
      }),
        (i.callback = function () {
          Aa(e, t);
        });
    }
    var c = e.stateNode;
    return (
      c !== null &&
        typeof c.componentDidCatch == 'function' &&
        (i.callback = function () {
          Aa(e, t), typeof o != 'function' && (po === null ? (po = new Set([this])) : po.add(this));
          var _ = t.stack;
          this.componentDidCatch(t.value, { componentStack: _ !== null ? _ : '' });
        }),
      i
    );
  }
  function hs(e, t, i) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new wf();
      var u = new Set();
      o.set(t, u);
    } else (u = o.get(t)), u === void 0 && ((u = new Set()), o.set(t, u));
    u.has(i) || (u.add(i), (e = Ld.bind(null, e, t, i)), t.then(e, e));
  }
  function xf(e) {
    do {
      var t;
      if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Xu(e, t, i, o, u) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = u), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (i.flags |= 131072),
            (i.flags &= -52805),
            i.tag === 1 && (i.alternate === null ? (i.tag = 17) : ((t = Mi(-1, 1)), (t.tag = 2), Er(i, t, 1))),
            (i.lanes |= 1)),
        e);
  }
  var Ml = Te.ReactCurrentOwner,
    Un = !1;
  function vn(e, t, i, o) {
    t.child = e === null ? gl(t, null, i, o) : Vt(t, e.child, i, o);
  }
  function Sf(e, t, i, o, u) {
    i = i.render;
    var c = t.ref;
    return (
      ao(t, u),
      (o = Ho(e, t, i, o, c, u)),
      (i = bl()),
      e !== null && !Un
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~u), Ur(e, t, u))
        : (Dt && i && rs(t), (t.flags |= 1), vn(e, t, o, u), t.child)
    );
  }
  function ju(e, t, i, o, u) {
    if (e === null) {
      var c = i.type;
      return typeof c == 'function' &&
        !Yl(c) &&
        c.defaultProps === void 0 &&
        i.compare === null &&
        i.defaultProps === void 0
        ? ((t.tag = 15), (t.type = c), ci(e, t, c, o, u))
        : ((e = Zl(i.type, null, o, t, t.mode, u)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((c = e.child), !(e.lanes & u))) {
      var _ = c.memoizedProps;
      if (((i = i.compare), (i = i !== null ? i : _e), i(_, o) && e.ref === t.ref)) return Ur(e, t, u);
    }
    return (t.flags |= 1), (e = Wr(c, o)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function ci(e, t, i, o, u) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (_e(c, o) && e.ref === t.ref)
        if (((Un = !1), (t.pendingProps = o = c), (e.lanes & u) !== 0)) e.flags & 131072 && (Un = !0);
        else return (t.lanes = e.lanes), Ur(e, t, u);
    }
    return tc(e, t, i, o, u);
  }
  function Ju(e, t, i) {
    var o = t.pendingProps,
      u = o.children,
      c = e !== null ? e.memoizedState : null;
    if (o.mode === 'hidden')
      if (!(t.mode & 1))
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), At(La, ur), (ur |= i);
      else {
        if (!(i & 1073741824))
          return (
            (e = c !== null ? c.baseLanes | i : i),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            At(La, ur),
            (ur |= e),
            null
          );
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (o = c !== null ? c.baseLanes : i),
          At(La, ur),
          (ur |= o);
      }
    else c !== null ? ((o = c.baseLanes | i), (t.memoizedState = null)) : (o = i), At(La, ur), (ur |= o);
    return vn(e, t, u, i), t.child;
  }
  function ec(e, t) {
    var i = t.ref;
    ((e === null && i !== null) || (e !== null && e.ref !== i)) && ((t.flags |= 512), (t.flags |= 2097152));
  }
  function tc(e, t, i, o, u) {
    var c = Qn(i) ? Pn : Rn.current;
    return (
      (c = ya(t, c)),
      ao(t, u),
      (i = Ho(e, t, i, o, c, u)),
      (o = bl()),
      e !== null && !Un
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~u), Ur(e, t, u))
        : (Dt && o && rs(t), (t.flags |= 1), vn(e, t, i, u), t.child)
    );
  }
  function nc(e, t, i, o, u) {
    if (Qn(i)) {
      var c = !0;
      hr(t);
    } else c = !1;
    if ((ao(t, u), t.stateNode === null)) Ll(e, t), Wo(t, i, o), Qu(t, i, o, u), (o = !0);
    else if (e === null) {
      var _ = t.stateNode,
        k = t.memoizedProps;
      _.props = k;
      var A = _.context,
        W = i.contextType;
      typeof W == 'object' && W !== null ? (W = vr(W)) : ((W = Qn(i) ? Pn : Rn.current), (W = ya(t, W)));
      var ee = i.getDerivedStateFromProps,
        oe = typeof ee == 'function' || typeof _.getSnapshotBeforeUpdate == 'function';
      oe ||
        (typeof _.UNSAFE_componentWillReceiveProps != 'function' && typeof _.componentWillReceiveProps != 'function') ||
        ((k !== o || A !== W) && Ca(t, _, o, W)),
        (yr = !1);
      var J = t.memoizedState;
      (_.state = J),
        wa(t, o, _, u),
        (A = t.memoizedState),
        k !== o || J !== A || Vn.current || yr
          ? (typeof ee == 'function' && (Rl(t, i, ee, o), (A = t.memoizedState)),
            (k = yr || Vu(t, i, k, o, J, A, W))
              ? (oe ||
                  (typeof _.UNSAFE_componentWillMount != 'function' && typeof _.componentWillMount != 'function') ||
                  (typeof _.componentWillMount == 'function' && _.componentWillMount(),
                  typeof _.UNSAFE_componentWillMount == 'function' && _.UNSAFE_componentWillMount()),
                typeof _.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof _.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = o),
                (t.memoizedState = A)),
            (_.props = o),
            (_.state = A),
            (_.context = W),
            (o = k))
          : (typeof _.componentDidMount == 'function' && (t.flags |= 4194308), (o = !1));
    } else {
      (_ = t.stateNode),
        gf(e, t),
        (k = t.memoizedProps),
        (W = t.type === t.elementType ? k : wr(t.type, k)),
        (_.props = W),
        (oe = t.pendingProps),
        (J = _.context),
        (A = i.contextType),
        typeof A == 'object' && A !== null ? (A = vr(A)) : ((A = Qn(i) ? Pn : Rn.current), (A = ya(t, A)));
      var ve = i.getDerivedStateFromProps;
      (ee = typeof ve == 'function' || typeof _.getSnapshotBeforeUpdate == 'function') ||
        (typeof _.UNSAFE_componentWillReceiveProps != 'function' && typeof _.componentWillReceiveProps != 'function') ||
        ((k !== oe || J !== A) && Ca(t, _, o, A)),
        (yr = !1),
        (J = t.memoizedState),
        (_.state = J),
        wa(t, o, _, u);
      var Re = t.memoizedState;
      k !== oe || J !== Re || Vn.current || yr
        ? (typeof ve == 'function' && (Rl(t, i, ve, o), (Re = t.memoizedState)),
          (W = yr || Vu(t, i, W, o, J, Re, A) || !1)
            ? (ee ||
                (typeof _.UNSAFE_componentWillUpdate != 'function' && typeof _.componentWillUpdate != 'function') ||
                (typeof _.componentWillUpdate == 'function' && _.componentWillUpdate(o, Re, A),
                typeof _.UNSAFE_componentWillUpdate == 'function' && _.UNSAFE_componentWillUpdate(o, Re, A)),
              typeof _.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof _.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof _.componentDidUpdate != 'function' ||
                (k === e.memoizedProps && J === e.memoizedState) ||
                (t.flags |= 4),
              typeof _.getSnapshotBeforeUpdate != 'function' ||
                (k === e.memoizedProps && J === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = Re)),
          (_.props = o),
          (_.state = Re),
          (_.context = A),
          (o = W))
        : (typeof _.componentDidUpdate != 'function' ||
            (k === e.memoizedProps && J === e.memoizedState) ||
            (t.flags |= 4),
          typeof _.getSnapshotBeforeUpdate != 'function' ||
            (k === e.memoizedProps && J === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return rc(e, t, i, o, c, u);
  }
  function rc(e, t, i, o, u, c) {
    ec(e, t);
    var _ = (t.flags & 128) !== 0;
    if (!o && !_) return u && lf(t, i, !1), Ur(e, t, c);
    (o = t.stateNode), (Ml.current = t);
    var k = _ && typeof i.getDerivedStateFromError != 'function' ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && _ ? ((t.child = Vt(t, e.child, null, c)), (t.child = Vt(t, null, k, c))) : vn(e, t, k, c),
      (t.memoizedState = o.state),
      u && lf(t, i, !0),
      t.child
    );
  }
  function kf(e) {
    var t = e.stateNode;
    t.pendingContext ? af(e, t.pendingContext, t.pendingContext !== t.context) : t.context && af(e, t.context, !1),
      Pu(e, t.containerInfo);
  }
  function fi(e, t, i, o, u) {
    return oi(), ai(u), (t.flags |= 256), vn(e, t, i, o), t.child;
  }
  var ms = { dehydrated: null, treeContext: null, retryLane: 0 };
  function _s(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Il(e, t, i) {
    var o = t.pendingProps,
      u = zt.current,
      c = !1,
      _ = (t.flags & 128) !== 0,
      k;
    if (
      ((k = _) || (k = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      k ? ((c = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (u |= 1),
      At(zt, u & 1),
      e === null)
    )
      return (
        Xn(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
          : ((_ = o.children),
            (e = o.fallback),
            c
              ? ((o = t.mode),
                (c = t.child),
                (_ = { mode: 'hidden', children: _ }),
                !(o & 1) && c !== null ? ((c.childLanes = 0), (c.pendingProps = _)) : (c = Vl(_, o, 0, null)),
                (e = Vo(e, o, i, null)),
                (c.return = t),
                (e.return = t),
                (c.sibling = e),
                (t.child = c),
                (t.child.memoizedState = _s(i)),
                (t.memoizedState = ms),
                e)
              : Oa(t, _))
      );
    if (((u = e.memoizedState), u !== null && ((k = u.dehydrated), k !== null))) return Ke(e, t, _, o, k, u, i);
    if (c) {
      (c = o.fallback), (_ = t.mode), (u = e.child), (k = u.sibling);
      var A = { mode: 'hidden', children: o.children };
      return (
        !(_ & 1) && t.child !== u
          ? ((o = t.child), (o.childLanes = 0), (o.pendingProps = A), (t.deletions = null))
          : ((o = Wr(u, A)), (o.subtreeFlags = u.subtreeFlags & 14680064)),
        k !== null ? (c = Wr(k, c)) : ((c = Vo(c, _, i, null)), (c.flags |= 2)),
        (c.return = t),
        (o.return = t),
        (o.sibling = c),
        (t.child = o),
        (o = c),
        (c = t.child),
        (_ = e.child.memoizedState),
        (_ = _ === null ? _s(i) : { baseLanes: _.baseLanes | i, cachePool: null, transitions: _.transitions }),
        (c.memoizedState = _),
        (c.childLanes = e.childLanes & ~i),
        (t.memoizedState = ms),
        o
      );
    }
    return (
      (c = e.child),
      (e = c.sibling),
      (o = Wr(c, { mode: 'visible', children: o.children })),
      !(t.mode & 1) && (o.lanes = i),
      (o.return = t),
      (o.sibling = null),
      e !== null && ((i = t.deletions), i === null ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
      (t.child = o),
      (t.memoizedState = null),
      o
    );
  }
  function Oa(e, t) {
    return (t = Vl({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
  }
  function Pi(e, t, i, o) {
    return (
      o !== null && ai(o),
      Vt(t, e.child, null, i),
      (e = Oa(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ke(e, t, i, o, u, c, _) {
    if (i)
      return t.flags & 256
        ? ((t.flags &= -257), (o = Al(Error(a(422)))), Pi(e, t, _, o))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((c = o.fallback),
            (u = t.mode),
            (o = Vl({ mode: 'visible', children: o.children }, u, 0, null)),
            (c = Vo(c, u, _, null)),
            (c.flags |= 2),
            (o.return = t),
            (c.return = t),
            (o.sibling = c),
            (t.child = o),
            t.mode & 1 && Vt(t, e.child, null, _),
            (t.child.memoizedState = _s(_)),
            (t.memoizedState = ms),
            c);
    if (!(t.mode & 1)) return Pi(e, t, _, null);
    if (u.data === '$!') {
      if (((o = u.nextSibling && u.nextSibling.dataset), o)) var k = o.dgst;
      return (o = k), (c = Error(a(419))), (o = Al(c, o, void 0)), Pi(e, t, _, o);
    }
    if (((k = (_ & e.childLanes) !== 0), Un || k)) {
      if (((o = dn), o !== null)) {
        switch (_ & -_) {
          case 4:
            u = 2;
            break;
          case 16:
            u = 8;
            break;
          case 64:
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
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            u = 32;
            break;
          case 536870912:
            u = 268435456;
            break;
          default:
            u = 0;
        }
        (u = u & (o.suspendedLanes | _) ? 0 : u),
          u !== 0 && u !== c.retryLane && ((c.retryLane = u), Oi(e, u), Hr(o, e, u, -1));
      }
      return vc(), (o = Al(Error(a(421)))), Pi(e, t, _, o);
    }
    return u.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Dd.bind(null, e)), (u._reactRetry = t), null)
      : ((e = c.treeContext),
        (ar = to(u.nextSibling)),
        (An = t),
        (Dt = !0),
        (Pr = null),
        e !== null && ((mr[_r++] = ni), (mr[_r++] = ri), (mr[_r++] = Do), (ni = e.id), (ri = e.overflow), (Do = t)),
        (t = Oa(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function vs(e, t, i) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), _n(e.return, t, i);
  }
  function ys(e, t, i, o, u) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: o, tail: i, tailMode: u })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = o),
        (c.tail = i),
        (c.tailMode = u));
  }
  function uo(e, t, i) {
    var o = t.pendingProps,
      u = o.revealOrder,
      c = o.tail;
    if ((vn(e, t, o.children, i), (o = zt.current), o & 2)) (o = (o & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && vs(e, i, t);
          else if (e.tag === 19) vs(e, i, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      o &= 1;
    }
    if ((At(zt, o), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (u) {
        case 'forwards':
          for (i = t.child, u = null; i !== null; )
            (e = i.alternate), e !== null && $o(e) === null && (u = i), (i = i.sibling);
          (i = u),
            i === null ? ((u = t.child), (t.child = null)) : ((u = i.sibling), (i.sibling = null)),
            ys(t, !1, u, i, c);
          break;
        case 'backwards':
          for (i = null, u = t.child, t.child = null; u !== null; ) {
            if (((e = u.alternate), e !== null && $o(e) === null)) {
              t.child = u;
              break;
            }
            (e = u.sibling), (u.sibling = i), (i = u), (u = e);
          }
          ys(t, !0, i, null, c);
          break;
        case 'together':
          ys(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Ll(e, t) {
    !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Ur(e, t, i) {
    if ((e !== null && (t.dependencies = e.dependencies), (fo |= t.lanes), !(i & t.childLanes))) return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (e = t.child, i = Wr(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null; )
        (e = e.sibling), (i = i.sibling = Wr(e, e.pendingProps)), (i.return = t);
      i.sibling = null;
    }
    return t.child;
  }
  function Nf(e, t, i) {
    switch (t.tag) {
      case 3:
        kf(t), oi();
        break;
      case 5:
        Bu(t);
        break;
      case 1:
        Qn(t.type) && hr(t);
        break;
      case 4:
        Pu(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          u = t.memoizedProps.value;
        At(as, o._currentValue), (o._currentValue = u);
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (At(zt, zt.current & 1), (t.flags |= 128), null)
            : i & t.child.childLanes
              ? Il(e, t, i)
              : (At(zt, zt.current & 1), (e = Ur(e, t, i)), e !== null ? e.sibling : null);
        At(zt, zt.current & 1);
        break;
      case 19:
        if (((o = (i & t.childLanes) !== 0), e.flags & 128)) {
          if (o) return uo(e, t, i);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          At(zt, zt.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Ju(e, t, i);
    }
    return Ur(e, t, i);
  }
  var yn, ic, Tf, oc;
  (yn = function (e, t) {
    for (var i = t.child; i !== null; ) {
      if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        (i.child.return = i), (i = i.child);
        continue;
      }
      if (i === t) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === t) return;
        i = i.return;
      }
      (i.sibling.return = i.return), (i = i.sibling);
    }
  }),
    (ic = function () {}),
    (Tf = function (e, t, i, o) {
      var u = e.memoizedProps;
      if (u !== o) {
        (e = t.stateNode), Ii(si.current);
        var c = null;
        switch (i) {
          case 'input':
            (u = un(e, u)), (o = un(e, o)), (c = []);
            break;
          case 'select':
            (u = Y({}, u, { value: void 0 })), (o = Y({}, o, { value: void 0 })), (c = []);
            break;
          case 'textarea':
            (u = Cr(e, u)), (o = Cr(e, o)), (c = []);
            break;
          default:
            typeof u.onClick != 'function' && typeof o.onClick == 'function' && (e.onclick = ol);
        }
        vi(i, o);
        var _;
        i = null;
        for (W in u)
          if (!o.hasOwnProperty(W) && u.hasOwnProperty(W) && u[W] != null)
            if (W === 'style') {
              var k = u[W];
              for (_ in k) k.hasOwnProperty(_) && (i || (i = {}), (i[_] = ''));
            } else
              W !== 'dangerouslySetInnerHTML' &&
                W !== 'children' &&
                W !== 'suppressContentEditableWarning' &&
                W !== 'suppressHydrationWarning' &&
                W !== 'autoFocus' &&
                (g.hasOwnProperty(W) ? c || (c = []) : (c = c || []).push(W, null));
        for (W in o) {
          var A = o[W];
          if (((k = u != null ? u[W] : void 0), o.hasOwnProperty(W) && A !== k && (A != null || k != null)))
            if (W === 'style')
              if (k) {
                for (_ in k) !k.hasOwnProperty(_) || (A && A.hasOwnProperty(_)) || (i || (i = {}), (i[_] = ''));
                for (_ in A) A.hasOwnProperty(_) && k[_] !== A[_] && (i || (i = {}), (i[_] = A[_]));
              } else i || (c || (c = []), c.push(W, i)), (i = A);
            else
              W === 'dangerouslySetInnerHTML'
                ? ((A = A ? A.__html : void 0),
                  (k = k ? k.__html : void 0),
                  A != null && k !== A && (c = c || []).push(W, A))
                : W === 'children'
                  ? (typeof A != 'string' && typeof A != 'number') || (c = c || []).push(W, '' + A)
                  : W !== 'suppressContentEditableWarning' &&
                    W !== 'suppressHydrationWarning' &&
                    (g.hasOwnProperty(W)
                      ? (A != null && W === 'onScroll' && It('scroll', e), c || k === A || (c = []))
                      : (c = c || []).push(W, A));
        }
        i && (c = c || []).push('style', i);
        var W = c;
        (t.updateQueue = W) && (t.flags |= 4);
      }
    }),
    (oc = function (e, t, i, o) {
      i !== o && (t.flags |= 4);
    });
  function Es(e, t) {
    if (!Dt)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var i = null; t !== null; ) t.alternate !== null && (i = t), (t = t.sibling);
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case 'collapsed':
          i = e.tail;
          for (var o = null; i !== null; ) i.alternate !== null && (o = i), (i = i.sibling);
          o === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (o.sibling = null);
      }
  }
  function En(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      o = 0;
    if (t)
      for (var u = e.child; u !== null; )
        (i |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags & 14680064),
          (o |= u.flags & 14680064),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (i |= u.lanes | u.childLanes), (o |= u.subtreeFlags), (o |= u.flags), (u.return = e), (u = u.sibling);
    return (e.subtreeFlags |= o), (e.childLanes = i), t;
  }
  function Td(e, t, i) {
    var o = t.pendingProps;
    switch ((Bo(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return En(t), null;
      case 1:
        return Qn(t.type) && ul(), En(t), null;
      case 3:
        return (
          (o = t.stateNode),
          so(),
          Lt(Vn),
          Lt(Rn),
          El(),
          o.pendingContext && ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (is(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Pr !== null && (hc(Pr), (Pr = null)))),
          ic(e, t),
          En(t),
          null
        );
      case 5:
        yl(t);
        var u = Ii(xa.current);
        if (((i = t.type), e !== null && t.stateNode != null))
          Tf(e, t, i, o, u), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(a(166));
            return En(t), null;
          }
          if (((e = Ii(si.current)), is(t))) {
            (o = t.stateNode), (i = t.type);
            var c = t.memoizedProps;
            switch (((o[ei] = t), (o[no] = c), (e = (t.mode & 1) !== 0), i)) {
              case 'dialog':
                It('cancel', o), It('close', o);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                It('load', o);
                break;
              case 'video':
              case 'audio':
                for (u = 0; u < Ti.length; u++) It(Ti[u], o);
                break;
              case 'source':
                It('error', o);
                break;
              case 'img':
              case 'image':
              case 'link':
                It('error', o), It('load', o);
                break;
              case 'details':
                It('toggle', o);
                break;
              case 'input':
                Yr(o, c), It('invalid', o);
                break;
              case 'select':
                (o._wrapperState = { wasMultiple: !!c.multiple }), It('invalid', o);
                break;
              case 'textarea':
                Zr(o, c), It('invalid', o);
            }
            vi(i, c), (u = null);
            for (var _ in c)
              if (c.hasOwnProperty(_)) {
                var k = c[_];
                _ === 'children'
                  ? typeof k == 'string'
                    ? o.textContent !== k &&
                      (c.suppressHydrationWarning !== !0 && Ja(o.textContent, k, e), (u = ['children', k]))
                    : typeof k == 'number' &&
                      o.textContent !== '' + k &&
                      (c.suppressHydrationWarning !== !0 && Ja(o.textContent, k, e), (u = ['children', '' + k]))
                  : g.hasOwnProperty(_) && k != null && _ === 'onScroll' && It('scroll', o);
              }
            switch (i) {
              case 'input':
                mt(o), Hi(o, c, !0);
                break;
              case 'textarea':
                mt(o), Wn(o);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof c.onClick == 'function' && (o.onclick = ol);
            }
            (o = u), (t.updateQueue = o), o !== null && (t.flags |= 4);
          } else {
            (_ = u.nodeType === 9 ? u : u.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = hn(i)),
              e === 'http://www.w3.org/1999/xhtml'
                ? i === 'script'
                  ? ((e = _.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof o.is == 'string'
                    ? (e = _.createElement(i, { is: o.is }))
                    : ((e = _.createElement(i)),
                      i === 'select' && ((_ = e), o.multiple ? (_.multiple = !0) : o.size && (_.size = o.size)))
                : (e = _.createElementNS(e, i)),
              (e[ei] = t),
              (e[no] = o),
              yn(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((_ = yi(i, o)), i)) {
                case 'dialog':
                  It('cancel', e), It('close', e), (u = o);
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  It('load', e), (u = o);
                  break;
                case 'video':
                case 'audio':
                  for (u = 0; u < Ti.length; u++) It(Ti[u], e);
                  u = o;
                  break;
                case 'source':
                  It('error', e), (u = o);
                  break;
                case 'img':
                case 'image':
                case 'link':
                  It('error', e), It('load', e), (u = o);
                  break;
                case 'details':
                  It('toggle', e), (u = o);
                  break;
                case 'input':
                  Yr(e, o), (u = un(e, o)), It('invalid', e);
                  break;
                case 'option':
                  u = o;
                  break;
                case 'select':
                  (e._wrapperState = { wasMultiple: !!o.multiple }),
                    (u = Y({}, o, { value: void 0 })),
                    It('invalid', e);
                  break;
                case 'textarea':
                  Zr(e, o), (u = Cr(e, o)), It('invalid', e);
                  break;
                default:
                  u = o;
              }
              vi(i, u), (k = u);
              for (c in k)
                if (k.hasOwnProperty(c)) {
                  var A = k[c];
                  c === 'style'
                    ? _i(e, A)
                    : c === 'dangerouslySetInnerHTML'
                      ? ((A = A ? A.__html : void 0), A != null && mi(e, A))
                      : c === 'children'
                        ? typeof A == 'string'
                          ? (i !== 'textarea' || A !== '') && tr(e, A)
                          : typeof A == 'number' && tr(e, '' + A)
                        : c !== 'suppressContentEditableWarning' &&
                          c !== 'suppressHydrationWarning' &&
                          c !== 'autoFocus' &&
                          (g.hasOwnProperty(c)
                            ? A != null && c === 'onScroll' && It('scroll', e)
                            : A != null && ae(e, c, A, _));
                }
              switch (i) {
                case 'input':
                  mt(e), Hi(e, o, !1);
                  break;
                case 'textarea':
                  mt(e), Wn(e);
                  break;
                case 'option':
                  o.value != null && e.setAttribute('value', '' + Ce(o.value));
                  break;
                case 'select':
                  (e.multiple = !!o.multiple),
                    (c = o.value),
                    c != null
                      ? Kt(e, !!o.multiple, c, !1)
                      : o.defaultValue != null && Kt(e, !!o.multiple, o.defaultValue, !0);
                  break;
                default:
                  typeof u.onClick == 'function' && (e.onclick = ol);
              }
              switch (i) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  o = !!o.autoFocus;
                  break e;
                case 'img':
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return En(t), null;
      case 6:
        if (e && t.stateNode != null) oc(e, t, e.memoizedProps, o);
        else {
          if (typeof o != 'string' && t.stateNode === null) throw Error(a(166));
          if (((i = Ii(xa.current)), Ii(si.current), is(t))) {
            if (
              ((o = t.stateNode), (i = t.memoizedProps), (o[ei] = t), (c = o.nodeValue !== i) && ((e = An), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Ja(o.nodeValue, i, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && Ja(o.nodeValue, i, (e.mode & 1) !== 0);
              }
            c && (t.flags |= 4);
          } else (o = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(o)), (o[ei] = t), (t.stateNode = o);
        }
        return En(t), null;
      case 13:
        if (
          (Lt(zt),
          (o = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Dt && ar !== null && t.mode & 1 && !(t.flags & 128)) Mu(), oi(), (t.flags |= 98560), (c = !1);
          else if (((c = is(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(a(318));
              if (((c = t.memoizedState), (c = c !== null ? c.dehydrated : null), !c)) throw Error(a(317));
              c[ei] = t;
            } else oi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
            En(t), (c = !1);
          } else Pr !== null && (hc(Pr), (Pr = null)), (c = !0);
          if (!c) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = i), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192), t.mode & 1 && (e === null || zt.current & 1 ? an === 0 && (an = 3) : vc())),
            t.updateQueue !== null && (t.flags |= 4),
            En(t),
            null);
      case 4:
        return so(), ic(e, t), e === null && Ji(t.stateNode.containerInfo), En(t), null;
      case 10:
        return hl(t.type._context), En(t), null;
      case 17:
        return Qn(t.type) && ul(), En(t), null;
      case 19:
        if ((Lt(zt), (c = t.memoizedState), c === null)) return En(t), null;
        if (((o = (t.flags & 128) !== 0), (_ = c.rendering), _ === null))
          if (o) Es(c, !1);
          else {
            if (an !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((_ = $o(e)), _ !== null)) {
                  for (
                    t.flags |= 128,
                      Es(c, !1),
                      o = _.updateQueue,
                      o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      o = i,
                      i = t.child;
                    i !== null;

                  )
                    (c = i),
                      (e = o),
                      (c.flags &= 14680066),
                      (_ = c.alternate),
                      _ === null
                        ? ((c.childLanes = 0),
                          (c.lanes = e),
                          (c.child = null),
                          (c.subtreeFlags = 0),
                          (c.memoizedProps = null),
                          (c.memoizedState = null),
                          (c.updateQueue = null),
                          (c.dependencies = null),
                          (c.stateNode = null))
                        : ((c.childLanes = _.childLanes),
                          (c.lanes = _.lanes),
                          (c.child = _.child),
                          (c.subtreeFlags = 0),
                          (c.deletions = null),
                          (c.memoizedProps = _.memoizedProps),
                          (c.memoizedState = _.memoizedState),
                          (c.updateQueue = _.updateQueue),
                          (c.type = _.type),
                          (e = _.dependencies),
                          (c.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (i = i.sibling);
                  return At(zt, (zt.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null && Rt() > Ko && ((t.flags |= 128), (o = !0), Es(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = $o(_)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (i = e.updateQueue),
                i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                Es(c, !0),
                c.tail === null && c.tailMode === 'hidden' && !_.alternate && !Dt)
              )
                return En(t), null;
            } else
              2 * Rt() - c.renderingStartTime > Ko &&
                i !== 1073741824 &&
                ((t.flags |= 128), (o = !0), Es(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((_.sibling = t.child), (t.child = _))
            : ((i = c.last), i !== null ? (i.sibling = _) : (t.child = _), (c.last = _));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = Rt()),
            (t.sibling = null),
            (i = zt.current),
            At(zt, o ? (i & 1) | 2 : i & 1),
            t)
          : (En(t), null);
      case 22:
      case 23:
        return (
          _c(),
          (o = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
          o && t.mode & 1 ? ur & 1073741824 && (En(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : En(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function Rd(e, t) {
    switch ((Bo(t), t.tag)) {
      case 1:
        return Qn(t.type) && ul(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 3:
        return (
          so(),
          Lt(Vn),
          Lt(Rn),
          El(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return yl(t), null;
      case 13:
        if ((Lt(zt), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(a(340));
          oi();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return Lt(zt), null;
      case 4:
        return so(), null;
      case 10:
        return hl(t.type._context), null;
      case 22:
      case 23:
        return _c(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Dl = !1,
    $t = !1,
    zn = typeof WeakSet == 'function' ? WeakSet : Set,
    Ee = null;
  function Ma(e, t) {
    var i = e.ref;
    if (i !== null)
      if (typeof i == 'function')
        try {
          i(null);
        } catch (o) {
          Wt(e, t, o);
        }
      else i.current = null;
  }
  function bs(e, t, i) {
    try {
      i();
    } catch (o) {
      Wt(e, t, o);
    }
  }
  var Rf = !1;
  function Cd(e, t) {
    if (((es = Fs), (e = St()), Ya(e))) {
      if ('selectionStart' in e) var i = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          i = ((i = e.ownerDocument) && i.defaultView) || window;
          var o = i.getSelection && i.getSelection();
          if (o && o.rangeCount !== 0) {
            i = o.anchorNode;
            var u = o.anchorOffset,
              c = o.focusNode;
            o = o.focusOffset;
            try {
              i.nodeType, c.nodeType;
            } catch {
              i = null;
              break e;
            }
            var _ = 0,
              k = -1,
              A = -1,
              W = 0,
              ee = 0,
              oe = e,
              J = null;
            t: for (;;) {
              for (
                var ve;
                oe !== i || (u !== 0 && oe.nodeType !== 3) || (k = _ + u),
                  oe !== c || (o !== 0 && oe.nodeType !== 3) || (A = _ + o),
                  oe.nodeType === 3 && (_ += oe.nodeValue.length),
                  (ve = oe.firstChild) !== null;

              )
                (J = oe), (oe = ve);
              for (;;) {
                if (oe === e) break t;
                if ((J === i && ++W === u && (k = _), J === c && ++ee === o && (A = _), (ve = oe.nextSibling) !== null))
                  break;
                (oe = J), (J = oe.parentNode);
              }
              oe = ve;
            }
            i = k === -1 || A === -1 ? null : { start: k, end: A };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Io = { focusedElem: e, selectionRange: i }, Fs = !1, Ee = t; Ee !== null; )
      if (((t = Ee), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (Ee = e);
      else
        for (; Ee !== null; ) {
          t = Ee;
          try {
            var Re = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Re !== null) {
                    var Oe = Re.memoizedProps,
                      jt = Re.memoizedState,
                      P = t.stateNode,
                      M = P.getSnapshotBeforeUpdate(t.elementType === t.type ? Oe : wr(t.type, Oe), jt);
                    P.__reactInternalSnapshotBeforeUpdate = M;
                  }
                  break;
                case 3:
                  var U = t.stateNode.containerInfo;
                  U.nodeType === 1
                    ? (U.textContent = '')
                    : U.nodeType === 9 && U.documentElement && U.removeChild(U.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (se) {
            Wt(t, t.return, se);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Ee = e);
            break;
          }
          Ee = t.return;
        }
    return (Re = Rf), (Rf = !1), Re;
  }
  function Bi(e, t, i) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var u = (o = o.next);
      do {
        if ((u.tag & e) === e) {
          var c = u.destroy;
          (u.destroy = void 0), c !== void 0 && bs(t, i, c);
        }
        u = u.next;
      } while (u !== o);
    }
  }
  function ws(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var i = (t = t.next);
      do {
        if ((i.tag & e) === e) {
          var o = i.create;
          i.destroy = o();
        }
        i = i.next;
      } while (i !== t);
    }
  }
  function Pl(e) {
    var t = e.ref;
    if (t !== null) {
      var i = e.stateNode;
      switch (e.tag) {
        case 5:
          e = i;
          break;
        default:
          e = i;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function Cf(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Cf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode), t !== null && (delete t[ei], delete t[no], delete t[sl], delete t[y], delete t[_a])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Af(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Of(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Af(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ac(e, t, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode),
        t
          ? i.nodeType === 8
            ? i.parentNode.insertBefore(e, t)
            : i.insertBefore(e, t)
          : (i.nodeType === 8 ? ((t = i.parentNode), t.insertBefore(e, i)) : ((t = i), t.appendChild(e)),
            (i = i._reactRootContainer),
            i != null || t.onclick !== null || (t.onclick = ol));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (ac(e, t, i), e = e.sibling; e !== null; ) ac(e, t, i), (e = e.sibling);
  }
  function Bl(e, t, i) {
    var o = e.tag;
    if (o === 5 || o === 6) (e = e.stateNode), t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Bl(e, t, i), e = e.sibling; e !== null; ) Bl(e, t, i), (e = e.sibling);
  }
  var fn = null,
    zr = !1;
  function di(e, t, i) {
    for (i = i.child; i !== null; ) sc(e, t, i), (i = i.sibling);
  }
  function sc(e, t, i) {
    if (at && typeof at.onCommitFiberUnmount == 'function')
      try {
        at.onCommitFiberUnmount(nt, i);
      } catch {}
    switch (i.tag) {
      case 5:
        $t || Ma(i, t);
      case 6:
        var o = fn,
          u = zr;
        (fn = null),
          di(e, t, i),
          (fn = o),
          (zr = u),
          fn !== null &&
            (zr
              ? ((e = fn), (i = i.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i))
              : fn.removeChild(i.stateNode));
        break;
      case 18:
        fn !== null &&
          (zr
            ? ((e = fn),
              (i = i.stateNode),
              e.nodeType === 8 ? Cu(e.parentNode, i) : e.nodeType === 1 && Cu(e, i),
              Et(e))
            : Cu(fn, i.stateNode));
        break;
      case 4:
        (o = fn), (u = zr), (fn = i.stateNode.containerInfo), (zr = !0), di(e, t, i), (fn = o), (zr = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!$t && ((o = i.updateQueue), o !== null && ((o = o.lastEffect), o !== null))) {
          u = o = o.next;
          do {
            var c = u,
              _ = c.destroy;
            (c = c.tag), _ !== void 0 && (c & 2 || c & 4) && bs(i, t, _), (u = u.next);
          } while (u !== o);
        }
        di(e, t, i);
        break;
      case 1:
        if (!$t && (Ma(i, t), (o = i.stateNode), typeof o.componentWillUnmount == 'function'))
          try {
            (o.props = i.memoizedProps), (o.state = i.memoizedState), o.componentWillUnmount();
          } catch (k) {
            Wt(i, t, k);
          }
        di(e, t, i);
        break;
      case 21:
        di(e, t, i);
        break;
      case 22:
        i.mode & 1 ? (($t = (o = $t) || i.memoizedState !== null), di(e, t, i), ($t = o)) : di(e, t, i);
        break;
      default:
        di(e, t, i);
    }
  }
  function Ia(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      i === null && (i = e.stateNode = new zn()),
        t.forEach(function (o) {
          var u = Pd.bind(null, e, o);
          i.has(o) || (i.add(o), o.then(u, u));
        });
    }
  }
  function lr(e, t) {
    var i = t.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var u = i[o];
        try {
          var c = e,
            _ = t,
            k = _;
          e: for (; k !== null; ) {
            switch (k.tag) {
              case 5:
                (fn = k.stateNode), (zr = !1);
                break e;
              case 3:
                (fn = k.stateNode.containerInfo), (zr = !0);
                break e;
              case 4:
                (fn = k.stateNode.containerInfo), (zr = !0);
                break e;
            }
            k = k.return;
          }
          if (fn === null) throw Error(a(160));
          sc(c, _, u), (fn = null), (zr = !1);
          var A = u.alternate;
          A !== null && (A.return = null), (u.return = null);
        } catch (W) {
          Wt(u, t, W);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) lc(t, e), (t = t.sibling);
  }
  function lc(e, t) {
    var i = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((lr(t, e), $r(e), o & 4)) {
          try {
            Bi(3, e, e.return), ws(3, e);
          } catch (Oe) {
            Wt(e, e.return, Oe);
          }
          try {
            Bi(5, e, e.return);
          } catch (Oe) {
            Wt(e, e.return, Oe);
          }
        }
        break;
      case 1:
        lr(t, e), $r(e), o & 512 && i !== null && Ma(i, i.return);
        break;
      case 5:
        if ((lr(t, e), $r(e), o & 512 && i !== null && Ma(i, i.return), e.flags & 32)) {
          var u = e.stateNode;
          try {
            tr(u, '');
          } catch (Oe) {
            Wt(e, e.return, Oe);
          }
        }
        if (o & 4 && ((u = e.stateNode), u != null)) {
          var c = e.memoizedProps,
            _ = i !== null ? i.memoizedProps : c,
            k = e.type,
            A = e.updateQueue;
          if (((e.updateQueue = null), A !== null))
            try {
              k === 'input' && c.type === 'radio' && c.name != null && Fi(u, c), yi(k, _);
              var W = yi(k, c);
              for (_ = 0; _ < A.length; _ += 2) {
                var ee = A[_],
                  oe = A[_ + 1];
                ee === 'style'
                  ? _i(u, oe)
                  : ee === 'dangerouslySetInnerHTML'
                    ? mi(u, oe)
                    : ee === 'children'
                      ? tr(u, oe)
                      : ae(u, ee, oe, W);
              }
              switch (k) {
                case 'input':
                  wn(u, c);
                  break;
                case 'textarea':
                  dr(u, c);
                  break;
                case 'select':
                  var J = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!c.multiple;
                  var ve = c.value;
                  ve != null
                    ? Kt(u, !!c.multiple, ve, !1)
                    : J !== !!c.multiple &&
                      (c.defaultValue != null
                        ? Kt(u, !!c.multiple, c.defaultValue, !0)
                        : Kt(u, !!c.multiple, c.multiple ? [] : '', !1));
              }
              u[no] = c;
            } catch (Oe) {
              Wt(e, e.return, Oe);
            }
        }
        break;
      case 6:
        if ((lr(t, e), $r(e), o & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          (u = e.stateNode), (c = e.memoizedProps);
          try {
            u.nodeValue = c;
          } catch (Oe) {
            Wt(e, e.return, Oe);
          }
        }
        break;
      case 3:
        if ((lr(t, e), $r(e), o & 4 && i !== null && i.memoizedState.isDehydrated))
          try {
            Et(t.containerInfo);
          } catch (Oe) {
            Wt(e, e.return, Oe);
          }
        break;
      case 4:
        lr(t, e), $r(e);
        break;
      case 13:
        lr(t, e),
          $r(e),
          (u = e.child),
          u.flags & 8192 &&
            ((c = u.memoizedState !== null),
            (u.stateNode.isHidden = c),
            !c || (u.alternate !== null && u.alternate.memoizedState !== null) || (fc = Rt())),
          o & 4 && Ia(e);
        break;
      case 22:
        if (
          ((ee = i !== null && i.memoizedState !== null),
          e.mode & 1 ? (($t = (W = $t) || ee), lr(t, e), ($t = W)) : lr(t, e),
          $r(e),
          o & 8192)
        ) {
          if (((W = e.memoizedState !== null), (e.stateNode.isHidden = W) && !ee && e.mode & 1))
            for (Ee = e, ee = e.child; ee !== null; ) {
              for (oe = Ee = ee; Ee !== null; ) {
                switch (((J = Ee), (ve = J.child), J.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Bi(4, J, J.return);
                    break;
                  case 1:
                    Ma(J, J.return);
                    var Re = J.stateNode;
                    if (typeof Re.componentWillUnmount == 'function') {
                      (o = J), (i = J.return);
                      try {
                        (t = o), (Re.props = t.memoizedProps), (Re.state = t.memoizedState), Re.componentWillUnmount();
                      } catch (Oe) {
                        Wt(o, i, Oe);
                      }
                    }
                    break;
                  case 5:
                    Ma(J, J.return);
                    break;
                  case 22:
                    if (J.memoizedState !== null) {
                      co(oe);
                      continue;
                    }
                }
                ve !== null ? ((ve.return = J), (Ee = ve)) : co(oe);
              }
              ee = ee.sibling;
            }
          e: for (ee = null, oe = e; ; ) {
            if (oe.tag === 5) {
              if (ee === null) {
                ee = oe;
                try {
                  (u = oe.stateNode),
                    W
                      ? ((c = u.style),
                        typeof c.setProperty == 'function'
                          ? c.setProperty('display', 'none', 'important')
                          : (c.display = 'none'))
                      : ((k = oe.stateNode),
                        (A = oe.memoizedProps.style),
                        (_ = A != null && A.hasOwnProperty('display') ? A.display : null),
                        (k.style.display = Gi('display', _)));
                } catch (Oe) {
                  Wt(e, e.return, Oe);
                }
              }
            } else if (oe.tag === 6) {
              if (ee === null)
                try {
                  oe.stateNode.nodeValue = W ? '' : oe.memoizedProps;
                } catch (Oe) {
                  Wt(e, e.return, Oe);
                }
            } else if (
              ((oe.tag !== 22 && oe.tag !== 23) || oe.memoizedState === null || oe === e) &&
              oe.child !== null
            ) {
              (oe.child.return = oe), (oe = oe.child);
              continue;
            }
            if (oe === e) break e;
            for (; oe.sibling === null; ) {
              if (oe.return === null || oe.return === e) break e;
              ee === oe && (ee = null), (oe = oe.return);
            }
            ee === oe && (ee = null), (oe.sibling.return = oe.return), (oe = oe.sibling);
          }
        }
        break;
      case 19:
        lr(t, e), $r(e), o & 4 && Ia(e);
        break;
      case 21:
        break;
      default:
        lr(t, e), $r(e);
    }
  }
  function $r(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var i = e.return; i !== null; ) {
            if (Af(i)) {
              var o = i;
              break e;
            }
            i = i.return;
          }
          throw Error(a(160));
        }
        switch (o.tag) {
          case 5:
            var u = o.stateNode;
            o.flags & 32 && (tr(u, ''), (o.flags &= -33));
            var c = Of(e);
            Bl(e, c, u);
            break;
          case 3:
          case 4:
            var _ = o.stateNode.containerInfo,
              k = Of(e);
            ac(e, k, _);
            break;
          default:
            throw Error(a(161));
        }
      } catch (A) {
        Wt(e, e.return, A);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ul(e, t, i) {
    (Ee = e), uc(e);
  }
  function uc(e, t, i) {
    for (var o = (e.mode & 1) !== 0; Ee !== null; ) {
      var u = Ee,
        c = u.child;
      if (u.tag === 22 && o) {
        var _ = u.memoizedState !== null || Dl;
        if (!_) {
          var k = u.alternate,
            A = (k !== null && k.memoizedState !== null) || $t;
          k = Dl;
          var W = $t;
          if (((Dl = _), ($t = A) && !W))
            for (Ee = u; Ee !== null; )
              (_ = Ee),
                (A = _.child),
                _.tag === 22 && _.memoizedState !== null ? Mf(u) : A !== null ? ((A.return = _), (Ee = A)) : Mf(u);
          for (; c !== null; ) (Ee = c), uc(c), (c = c.sibling);
          (Ee = u), (Dl = k), ($t = W);
        }
        Fr(e);
      } else u.subtreeFlags & 8772 && c !== null ? ((c.return = u), (Ee = c)) : Fr(e);
    }
  }
  function Fr(e) {
    for (; Ee !== null; ) {
      var t = Ee;
      if (t.flags & 8772) {
        var i = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                $t || ws(5, t);
                break;
              case 1:
                var o = t.stateNode;
                if (t.flags & 4 && !$t)
                  if (i === null) o.componentDidMount();
                  else {
                    var u = t.elementType === t.type ? i.memoizedProps : wr(t.type, i.memoizedProps);
                    o.componentDidUpdate(u, i.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var c = t.updateQueue;
                c !== null && Du(t, c, o);
                break;
              case 3:
                var _ = t.updateQueue;
                if (_ !== null) {
                  if (((i = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        i = t.child.stateNode;
                        break;
                      case 1:
                        i = t.child.stateNode;
                    }
                  Du(t, _, i);
                }
                break;
              case 5:
                var k = t.stateNode;
                if (i === null && t.flags & 4) {
                  i = k;
                  var A = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      A.autoFocus && i.focus();
                      break;
                    case 'img':
                      A.src && (i.src = A.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var W = t.alternate;
                  if (W !== null) {
                    var ee = W.memoizedState;
                    if (ee !== null) {
                      var oe = ee.dehydrated;
                      oe !== null && Et(oe);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(a(163));
            }
          $t || (t.flags & 512 && Pl(t));
        } catch (J) {
          Wt(t, t.return, J);
        }
      }
      if (t === e) {
        Ee = null;
        break;
      }
      if (((i = t.sibling), i !== null)) {
        (i.return = t.return), (Ee = i);
        break;
      }
      Ee = t.return;
    }
  }
  function co(e) {
    for (; Ee !== null; ) {
      var t = Ee;
      if (t === e) {
        Ee = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        (i.return = t.return), (Ee = i);
        break;
      }
      Ee = t.return;
    }
  }
  function Mf(e) {
    for (; Ee !== null; ) {
      var t = Ee;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var i = t.return;
            try {
              ws(4, t);
            } catch (A) {
              Wt(t, i, A);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == 'function') {
              var u = t.return;
              try {
                o.componentDidMount();
              } catch (A) {
                Wt(t, u, A);
              }
            }
            var c = t.return;
            try {
              Pl(t);
            } catch (A) {
              Wt(t, c, A);
            }
            break;
          case 5:
            var _ = t.return;
            try {
              Pl(t);
            } catch (A) {
              Wt(t, _, A);
            }
        }
      } catch (A) {
        Wt(t, t.return, A);
      }
      if (t === e) {
        Ee = null;
        break;
      }
      var k = t.sibling;
      if (k !== null) {
        (k.return = t.return), (Ee = k);
        break;
      }
      Ee = t.return;
    }
  }
  var If = Math.ceil,
    zl = Te.ReactCurrentDispatcher,
    cc = Te.ReactCurrentOwner,
    xr = Te.ReactCurrentBatchConfig,
    gt = 0,
    dn = null,
    nn = null,
    bn = 0,
    ur = 0,
    La = Zn(0),
    an = 0,
    xs = null,
    fo = 0,
    Ss = 0,
    $l = 0,
    ks = null,
    Jn = null,
    fc = 0,
    Ko = 1 / 0,
    Ui = null,
    Fl = !1,
    dc = null,
    po = null,
    Hl = !1,
    go = null,
    $n = 0,
    Ns = 0,
    pc = null,
    Wl = -1,
    Ts = 0;
  function Fn() {
    return gt & 6 ? Rt() : Wl !== -1 ? Wl : (Wl = Rt());
  }
  function ho(e) {
    return e.mode & 1
      ? gt & 2 && bn !== 0
        ? bn & -bn
        : df.transition !== null
          ? (Ts === 0 && (Ts = Ga()), Ts)
          : ((e = ct), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Bc(e.type))), e)
      : 1;
  }
  function Hr(e, t, i, o) {
    if (50 < Ns) throw ((Ns = 0), (pc = null), Error(a(185)));
    Yi(e, i, o),
      (!(gt & 2) || e !== dn) &&
        (e === dn && (!(gt & 2) && (Ss |= i), an === 4 && mo(e, bn)),
        er(e, o),
        i === 1 && gt === 0 && !(t.mode & 1) && ((Ko = Rt() + 500), cl && io()));
  }
  function er(e, t) {
    var i = e.callbackNode;
    uu(e, t);
    var o = Qr(e, e === dn ? bn : 0);
    if (o === 0) i !== null && Mr(i), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((i != null && Mr(i), t === 1))
        e.tag === 0 ? Lo(Lf.bind(null, e)) : uf(Lf.bind(null, e)),
          al(function () {
            !(gt & 6) && io();
          }),
          (i = null);
      else {
        switch (Ge(o)) {
          case 1:
            i = Wa;
            break;
          case 4:
            i = xo;
            break;
          case 16:
            i = So;
            break;
          case 536870912:
            i = Le;
            break;
          default:
            i = So;
        }
        i = Ff(i, Gl.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = i);
    }
  }
  function Gl(e, t) {
    if (((Wl = -1), (Ts = 0), gt & 6)) throw Error(a(327));
    var i = e.callbackNode;
    if (Da() && e.callbackNode !== i) return null;
    var o = Qr(e, e === dn ? bn : 0);
    if (o === 0) return null;
    if (o & 30 || o & e.expiredLanes || t) t = Kl(e, o);
    else {
      t = o;
      var u = gt;
      gt |= 2;
      var c = Pf();
      (dn !== e || bn !== t) && ((Ui = null), (Ko = Rt() + 500), Yo(e, t));
      do
        try {
          Md();
          break;
        } catch (k) {
          Df(e, k);
        }
      while (!0);
      Ai(), (zl.current = c), (gt = u), nn !== null ? (t = 0) : ((dn = null), (bn = 0), (t = an));
    }
    if (t !== 0) {
      if ((t === 2 && ((u = ta(e)), u !== 0 && ((o = u), (t = gc(e, u)))), t === 1))
        throw ((i = xs), Yo(e, 0), mo(e, o), er(e, Rt()), i);
      if (t === 6) mo(e, o);
      else {
        if (
          ((u = e.current.alternate),
          !(o & 30) &&
            !Ad(u) &&
            ((t = Kl(e, o)), t === 2 && ((c = ta(e)), c !== 0 && ((o = c), (t = gc(e, c)))), t === 1))
        )
          throw ((i = xs), Yo(e, 0), mo(e, o), er(e, Rt()), i);
        switch (((e.finishedWork = u), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            Zo(e, Jn, Ui);
            break;
          case 3:
            if ((mo(e, o), (o & 130023424) === o && ((t = fc + 500 - Rt()), 10 < t))) {
              if (Qr(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & o) !== o)) {
                Fn(), (e.pingedLanes |= e.suspendedLanes & u);
                break;
              }
              e.timeoutHandle = eo(Zo.bind(null, e, Jn, Ui), t);
              break;
            }
            Zo(e, Jn, Ui);
            break;
          case 4:
            if ((mo(e, o), (o & 4194240) === o)) break;
            for (t = e.eventTimes, u = -1; 0 < o; ) {
              var _ = 31 - Ft(o);
              (c = 1 << _), (_ = t[_]), _ > u && (u = _), (o &= ~c);
            }
            if (
              ((o = u),
              (o = Rt() - o),
              (o =
                (120 > o
                  ? 120
                  : 480 > o
                    ? 480
                    : 1080 > o
                      ? 1080
                      : 1920 > o
                        ? 1920
                        : 3e3 > o
                          ? 3e3
                          : 4320 > o
                            ? 4320
                            : 1960 * If(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = eo(Zo.bind(null, e, Jn, Ui), o);
              break;
            }
            Zo(e, Jn, Ui);
            break;
          case 5:
            Zo(e, Jn, Ui);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return er(e, Rt()), e.callbackNode === i ? Gl.bind(null, e) : null;
  }
  function gc(e, t) {
    var i = ks;
    return (
      e.current.memoizedState.isDehydrated && (Yo(e, t).flags |= 256),
      (e = Kl(e, t)),
      e !== 2 && ((t = Jn), (Jn = i), t !== null && hc(t)),
      e
    );
  }
  function hc(e) {
    Jn === null ? (Jn = e) : Jn.push.apply(Jn, e);
  }
  function Ad(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var i = t.updateQueue;
        if (i !== null && ((i = i.stores), i !== null))
          for (var o = 0; o < i.length; o++) {
            var u = i[o],
              c = u.getSnapshot;
            u = u.value;
            try {
              if (!H(c(), u)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((i = t.child), t.subtreeFlags & 16384 && i !== null)) (i.return = t), (t = i);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function mo(e, t) {
    for (t &= ~$l, t &= ~Ss, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var i = 31 - Ft(t),
        o = 1 << i;
      (e[i] = -1), (t &= ~o);
    }
  }
  function Lf(e) {
    if (gt & 6) throw Error(a(327));
    Da();
    var t = Qr(e, 0);
    if (!(t & 1)) return er(e, Rt()), null;
    var i = Kl(e, t);
    if (e.tag !== 0 && i === 2) {
      var o = ta(e);
      o !== 0 && ((t = o), (i = gc(e, o)));
    }
    if (i === 1) throw ((i = xs), Yo(e, 0), mo(e, t), er(e, Rt()), i);
    if (i === 6) throw Error(a(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Zo(e, Jn, Ui), er(e, Rt()), null;
  }
  function mc(e, t) {
    var i = gt;
    gt |= 1;
    try {
      return e(t);
    } finally {
      (gt = i), gt === 0 && ((Ko = Rt() + 500), cl && io());
    }
  }
  function qo(e) {
    go !== null && go.tag === 0 && !(gt & 6) && Da();
    var t = gt;
    gt |= 1;
    var i = xr.transition,
      o = ct;
    try {
      if (((xr.transition = null), (ct = 1), e)) return e();
    } finally {
      (ct = o), (xr.transition = i), (gt = t), !(gt & 6) && io();
    }
  }
  function _c() {
    (ur = La.current), Lt(La);
  }
  function Yo(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var i = e.timeoutHandle;
    if ((i !== -1 && ((e.timeoutHandle = -1), ns(i)), nn !== null))
      for (i = nn.return; i !== null; ) {
        var o = i;
        switch ((Bo(o), o.tag)) {
          case 1:
            (o = o.type.childContextTypes), o != null && ul();
            break;
          case 3:
            so(), Lt(Vn), Lt(Rn), El();
            break;
          case 5:
            yl(o);
            break;
          case 4:
            so();
            break;
          case 13:
            Lt(zt);
            break;
          case 19:
            Lt(zt);
            break;
          case 10:
            hl(o.type._context);
            break;
          case 22:
          case 23:
            _c();
        }
        i = i.return;
      }
    if (
      ((dn = e),
      (nn = e = Wr(e.current, null)),
      (bn = ur = t),
      (an = 0),
      (xs = null),
      ($l = Ss = fo = 0),
      (Jn = ks = null),
      zo !== null)
    ) {
      for (t = 0; t < zo.length; t++)
        if (((i = zo[t]), (o = i.interleaved), o !== null)) {
          i.interleaved = null;
          var u = o.next,
            c = i.pending;
          if (c !== null) {
            var _ = c.next;
            (c.next = u), (o.next = _);
          }
          i.pending = o;
        }
      zo = null;
    }
    return e;
  }
  function Df(e, t) {
    do {
      var i = nn;
      try {
        if ((Ai(), (us.current = Nl), Sa)) {
          for (var o = Ht.memoizedState; o !== null; ) {
            var u = o.queue;
            u !== null && (u.pending = null), (o = o.next);
          }
          Sa = !1;
        }
        if (
          ((lo = 0), (on = Xt = Ht = null), (cs = !1), (Fo = 0), (cc.current = null), i === null || i.return === null)
        ) {
          (an = 1), (xs = t), (nn = null);
          break;
        }
        e: {
          var c = e,
            _ = i.return,
            k = i,
            A = t;
          if (((t = bn), (k.flags |= 32768), A !== null && typeof A == 'object' && typeof A.then == 'function')) {
            var W = A,
              ee = k,
              oe = ee.tag;
            if (!(ee.mode & 1) && (oe === 0 || oe === 11 || oe === 15)) {
              var J = ee.alternate;
              J
                ? ((ee.updateQueue = J.updateQueue), (ee.memoizedState = J.memoizedState), (ee.lanes = J.lanes))
                : ((ee.updateQueue = null), (ee.memoizedState = null));
            }
            var ve = xf(_);
            if (ve !== null) {
              (ve.flags &= -257), Xu(ve, _, k, c, t), ve.mode & 1 && hs(c, W, t), (t = ve), (A = W);
              var Re = t.updateQueue;
              if (Re === null) {
                var Oe = new Set();
                Oe.add(A), (t.updateQueue = Oe);
              } else Re.add(A);
              break e;
            } else {
              if (!(t & 1)) {
                hs(c, W, t), vc();
                break e;
              }
              A = Error(a(426));
            }
          } else if (Dt && k.mode & 1) {
            var jt = xf(_);
            if (jt !== null) {
              !(jt.flags & 65536) && (jt.flags |= 256), Xu(jt, _, k, c, t), ai(Go(A, k));
              break e;
            }
          }
          (c = A = Go(A, k)), an !== 4 && (an = 2), ks === null ? (ks = [c]) : ks.push(c), (c = _);
          do {
            switch (c.tag) {
              case 3:
                (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                var P = gs(c, A, t);
                hf(c, P);
                break e;
              case 1:
                k = A;
                var M = c.type,
                  U = c.stateNode;
                if (
                  !(c.flags & 128) &&
                  (typeof M.getDerivedStateFromError == 'function' ||
                    (U !== null && typeof U.componentDidCatch == 'function' && (po === null || !po.has(U))))
                ) {
                  (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                  var se = Ol(c, k, t);
                  hf(c, se);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        Uf(i);
      } catch (Ie) {
        (t = Ie), nn === i && i !== null && (nn = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Pf() {
    var e = zl.current;
    return (zl.current = Nl), e === null ? Nl : e;
  }
  function vc() {
    (an === 0 || an === 3 || an === 2) && (an = 4),
      dn === null || (!(fo & 268435455) && !(Ss & 268435455)) || mo(dn, bn);
  }
  function Kl(e, t) {
    var i = gt;
    gt |= 2;
    var o = Pf();
    (dn !== e || bn !== t) && ((Ui = null), Yo(e, t));
    do
      try {
        Od();
        break;
      } catch (u) {
        Df(e, u);
      }
    while (!0);
    if ((Ai(), (gt = i), (zl.current = o), nn !== null)) throw Error(a(261));
    return (dn = null), (bn = 0), an;
  }
  function Od() {
    for (; nn !== null; ) Bf(nn);
  }
  function Md() {
    for (; nn !== null && !wo(); ) Bf(nn);
  }
  function Bf(e) {
    var t = $f(e.alternate, e, ur);
    (e.memoizedProps = e.pendingProps), t === null ? Uf(e) : (nn = t), (cc.current = null);
  }
  function Uf(e) {
    var t = e;
    do {
      var i = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((i = Rd(i, t)), i !== null)) {
          (i.flags &= 32767), (nn = i);
          return;
        }
        if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (an = 6), (nn = null);
          return;
        }
      } else if (((i = Td(i, t, ur)), i !== null)) {
        nn = i;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        nn = t;
        return;
      }
      nn = t = e;
    } while (t !== null);
    an === 0 && (an = 5);
  }
  function Zo(e, t, i) {
    var o = ct,
      u = xr.transition;
    try {
      (xr.transition = null), (ct = 1), Id(e, t, i, o);
    } finally {
      (xr.transition = u), (ct = o);
    }
    return null;
  }
  function Id(e, t, i, o) {
    do Da();
    while (go !== null);
    if (gt & 6) throw Error(a(327));
    i = e.finishedWork;
    var u = e.finishedLanes;
    if (i === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current)) throw Error(a(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var c = i.lanes | i.childLanes;
    if (
      (nr(e, c),
      e === dn && ((nn = dn = null), (bn = 0)),
      (!(i.subtreeFlags & 2064) && !(i.flags & 2064)) ||
        Hl ||
        ((Hl = !0),
        Ff(So, function () {
          return Da(), null;
        })),
      (c = (i.flags & 15990) !== 0),
      i.subtreeFlags & 15990 || c)
    ) {
      (c = xr.transition), (xr.transition = null);
      var _ = ct;
      ct = 1;
      var k = gt;
      (gt |= 4),
        (cc.current = null),
        Cd(e, i),
        lc(i, e),
        xd(Io),
        (Fs = !!es),
        (Io = es = null),
        (e.current = i),
        Ul(i),
        Bs(),
        (gt = k),
        (ct = _),
        (xr.transition = c);
    } else e.current = i;
    if (
      (Hl && ((Hl = !1), (go = e), ($n = u)),
      (c = e.pendingLanes),
      c === 0 && (po = null),
      Qt(i.stateNode),
      er(e, Rt()),
      t !== null)
    )
      for (o = e.onRecoverableError, i = 0; i < t.length; i++)
        (u = t[i]), o(u.value, { componentStack: u.stack, digest: u.digest });
    if (Fl) throw ((Fl = !1), (e = dc), (dc = null), e);
    return (
      $n & 1 && e.tag !== 0 && Da(),
      (c = e.pendingLanes),
      c & 1 ? (e === pc ? Ns++ : ((Ns = 0), (pc = e))) : (Ns = 0),
      io(),
      null
    );
  }
  function Da() {
    if (go !== null) {
      var e = Ge($n),
        t = xr.transition,
        i = ct;
      try {
        if (((xr.transition = null), (ct = 16 > e ? 16 : e), go === null)) var o = !1;
        else {
          if (((e = go), (go = null), ($n = 0), gt & 6)) throw Error(a(331));
          var u = gt;
          for (gt |= 4, Ee = e.current; Ee !== null; ) {
            var c = Ee,
              _ = c.child;
            if (Ee.flags & 16) {
              var k = c.deletions;
              if (k !== null) {
                for (var A = 0; A < k.length; A++) {
                  var W = k[A];
                  for (Ee = W; Ee !== null; ) {
                    var ee = Ee;
                    switch (ee.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Bi(8, ee, c);
                    }
                    var oe = ee.child;
                    if (oe !== null) (oe.return = ee), (Ee = oe);
                    else
                      for (; Ee !== null; ) {
                        ee = Ee;
                        var J = ee.sibling,
                          ve = ee.return;
                        if ((Cf(ee), ee === W)) {
                          Ee = null;
                          break;
                        }
                        if (J !== null) {
                          (J.return = ve), (Ee = J);
                          break;
                        }
                        Ee = ve;
                      }
                  }
                }
                var Re = c.alternate;
                if (Re !== null) {
                  var Oe = Re.child;
                  if (Oe !== null) {
                    Re.child = null;
                    do {
                      var jt = Oe.sibling;
                      (Oe.sibling = null), (Oe = jt);
                    } while (Oe !== null);
                  }
                }
                Ee = c;
              }
            }
            if (c.subtreeFlags & 2064 && _ !== null) (_.return = c), (Ee = _);
            else
              e: for (; Ee !== null; ) {
                if (((c = Ee), c.flags & 2048))
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bi(9, c, c.return);
                  }
                var P = c.sibling;
                if (P !== null) {
                  (P.return = c.return), (Ee = P);
                  break e;
                }
                Ee = c.return;
              }
          }
          var M = e.current;
          for (Ee = M; Ee !== null; ) {
            _ = Ee;
            var U = _.child;
            if (_.subtreeFlags & 2064 && U !== null) (U.return = _), (Ee = U);
            else
              e: for (_ = M; Ee !== null; ) {
                if (((k = Ee), k.flags & 2048))
                  try {
                    switch (k.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ws(9, k);
                    }
                  } catch (Ie) {
                    Wt(k, k.return, Ie);
                  }
                if (k === _) {
                  Ee = null;
                  break e;
                }
                var se = k.sibling;
                if (se !== null) {
                  (se.return = k.return), (Ee = se);
                  break e;
                }
                Ee = k.return;
              }
          }
          if (((gt = u), io(), at && typeof at.onPostCommitFiberRoot == 'function'))
            try {
              at.onPostCommitFiberRoot(nt, e);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        (ct = i), (xr.transition = t);
      }
    }
    return !1;
  }
  function ql(e, t, i) {
    (t = Go(i, t)), (t = gs(e, t, 1)), (e = Er(e, t, 1)), (t = Fn()), e !== null && (Yi(e, 1, t), er(e, t));
  }
  function Wt(e, t, i) {
    if (e.tag === 3) ql(e, e, i);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ql(t, e, i);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof o.componentDidCatch == 'function' && (po === null || !po.has(o)))
          ) {
            (e = Go(i, e)), (e = Ol(t, e, 1)), (t = Er(t, e, 1)), (e = Fn()), t !== null && (Yi(t, 1, e), er(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ld(e, t, i) {
    var o = e.pingCache;
    o !== null && o.delete(t),
      (t = Fn()),
      (e.pingedLanes |= e.suspendedLanes & i),
      dn === e &&
        (bn & i) === i &&
        (an === 4 || (an === 3 && (bn & 130023424) === bn && 500 > Rt() - fc) ? Yo(e, 0) : ($l |= i)),
      er(e, t);
  }
  function zf(e, t) {
    t === 0 && (e.mode & 1 ? ((t = No), (No <<= 1), !(No & 130023424) && (No = 4194304)) : (t = 1));
    var i = Fn();
    (e = Oi(e, t)), e !== null && (Yi(e, t, i), er(e, i));
  }
  function Dd(e) {
    var t = e.memoizedState,
      i = 0;
    t !== null && (i = t.retryLane), zf(e, i);
  }
  function Pd(e, t) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          u = e.memoizedState;
        u !== null && (i = u.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    o !== null && o.delete(t), zf(e, i);
  }
  var $f;
  $f = function (e, t, i) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Vn.current) Un = !0;
      else {
        if (!(e.lanes & i) && !(t.flags & 128)) return (Un = !1), Nf(e, t, i);
        Un = !!(e.flags & 131072);
      }
    else (Un = !1), Dt && t.flags & 1048576 && cf(t, dl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        Ll(e, t), (e = t.pendingProps);
        var u = ya(t, Rn.current);
        ao(t, i), (u = Ho(null, t, o, e, u, i));
        var c = bl();
        return (
          (t.flags |= 1),
          typeof u == 'object' && u !== null && typeof u.render == 'function' && u.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Qn(o) ? ((c = !0), hr(t)) : (c = !1),
              (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
              _l(t),
              (u.updater = Cl),
              (t.stateNode = u),
              (u._reactInternals = t),
              Qu(t, o, e, i),
              (t = rc(null, t, o, !0, c, i)))
            : ((t.tag = 0), Dt && c && rs(t), vn(null, t, u, i), (t = t.child)),
          t
        );
      case 16:
        o = t.elementType;
        e: {
          switch (
            (Ll(e, t),
            (e = t.pendingProps),
            (u = o._init),
            (o = u(o._payload)),
            (t.type = o),
            (u = t.tag = Ud(o)),
            (e = wr(o, e)),
            u)
          ) {
            case 0:
              t = tc(null, t, o, e, i);
              break e;
            case 1:
              t = nc(null, t, o, e, i);
              break e;
            case 11:
              t = Sf(null, t, o, e, i);
              break e;
            case 14:
              t = ju(null, t, o, wr(o.type, e), i);
              break e;
          }
          throw Error(a(306, o, ''));
        }
        return t;
      case 0:
        return (o = t.type), (u = t.pendingProps), (u = t.elementType === o ? u : wr(o, u)), tc(e, t, o, u, i);
      case 1:
        return (o = t.type), (u = t.pendingProps), (u = t.elementType === o ? u : wr(o, u)), nc(e, t, o, u, i);
      case 3:
        e: {
          if ((kf(t), e === null)) throw Error(a(387));
          (o = t.pendingProps), (c = t.memoizedState), (u = c.element), gf(e, t), wa(t, o, null, i);
          var _ = t.memoizedState;
          if (((o = _.element), c.isDehydrated))
            if (
              ((c = {
                element: o,
                isDehydrated: !1,
                cache: _.cache,
                pendingSuspenseBoundaries: _.pendingSuspenseBoundaries,
                transitions: _.transitions,
              }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              (u = Go(Error(a(423)), t)), (t = fi(e, t, o, i, u));
              break e;
            } else if (o !== u) {
              (u = Go(Error(a(424)), t)), (t = fi(e, t, o, i, u));
              break e;
            } else
              for (
                ar = to(t.stateNode.containerInfo.firstChild),
                  An = t,
                  Dt = !0,
                  Pr = null,
                  i = gl(t, null, o, i),
                  t.child = i;
                i;

              )
                (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
          else {
            if ((oi(), o === u)) {
              t = Ur(e, t, i);
              break e;
            }
            vn(e, t, o, i);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Bu(t),
          e === null && Xn(t),
          (o = t.type),
          (u = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (_ = u.children),
          ts(o, u) ? (_ = null) : c !== null && ts(o, c) && (t.flags |= 32),
          ec(e, t),
          vn(e, t, _, i),
          t.child
        );
      case 6:
        return e === null && Xn(t), null;
      case 13:
        return Il(e, t, i);
      case 4:
        return (
          Pu(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = Vt(t, null, o, i)) : vn(e, t, o, i),
          t.child
        );
      case 11:
        return (o = t.type), (u = t.pendingProps), (u = t.elementType === o ? u : wr(o, u)), Sf(e, t, o, u, i);
      case 7:
        return vn(e, t, t.pendingProps, i), t.child;
      case 8:
        return vn(e, t, t.pendingProps.children, i), t.child;
      case 12:
        return vn(e, t, t.pendingProps.children, i), t.child;
      case 10:
        e: {
          if (
            ((o = t.type._context),
            (u = t.pendingProps),
            (c = t.memoizedProps),
            (_ = u.value),
            At(as, o._currentValue),
            (o._currentValue = _),
            c !== null)
          )
            if (H(c.value, _)) {
              if (c.children === u.children && !Vn.current) {
                t = Ur(e, t, i);
                break e;
              }
            } else
              for (c = t.child, c !== null && (c.return = t); c !== null; ) {
                var k = c.dependencies;
                if (k !== null) {
                  _ = c.child;
                  for (var A = k.firstContext; A !== null; ) {
                    if (A.context === o) {
                      if (c.tag === 1) {
                        (A = Mi(-1, i & -i)), (A.tag = 2);
                        var W = c.updateQueue;
                        if (W !== null) {
                          W = W.shared;
                          var ee = W.pending;
                          ee === null ? (A.next = A) : ((A.next = ee.next), (ee.next = A)), (W.pending = A);
                        }
                      }
                      (c.lanes |= i),
                        (A = c.alternate),
                        A !== null && (A.lanes |= i),
                        _n(c.return, i, t),
                        (k.lanes |= i);
                      break;
                    }
                    A = A.next;
                  }
                } else if (c.tag === 10) _ = c.type === t.type ? null : c.child;
                else if (c.tag === 18) {
                  if (((_ = c.return), _ === null)) throw Error(a(341));
                  (_.lanes |= i), (k = _.alternate), k !== null && (k.lanes |= i), _n(_, i, t), (_ = c.sibling);
                } else _ = c.child;
                if (_ !== null) _.return = c;
                else
                  for (_ = c; _ !== null; ) {
                    if (_ === t) {
                      _ = null;
                      break;
                    }
                    if (((c = _.sibling), c !== null)) {
                      (c.return = _.return), (_ = c);
                      break;
                    }
                    _ = _.return;
                  }
                c = _;
              }
          vn(e, t, u.children, i), (t = t.child);
        }
        return t;
      case 9:
        return (
          (u = t.type),
          (o = t.pendingProps.children),
          ao(t, i),
          (u = vr(u)),
          (o = o(u)),
          (t.flags |= 1),
          vn(e, t, o, i),
          t.child
        );
      case 14:
        return (o = t.type), (u = wr(o, t.pendingProps)), (u = wr(o.type, u)), ju(e, t, o, u, i);
      case 15:
        return ci(e, t, t.type, t.pendingProps, i);
      case 17:
        return (
          (o = t.type),
          (u = t.pendingProps),
          (u = t.elementType === o ? u : wr(o, u)),
          Ll(e, t),
          (t.tag = 1),
          Qn(o) ? ((e = !0), hr(t)) : (e = !1),
          ao(t, i),
          Wo(t, o, u),
          Qu(t, o, u, i),
          rc(null, t, o, !0, e, i)
        );
      case 19:
        return uo(e, t, i);
      case 22:
        return Ju(e, t, i);
    }
    throw Error(a(156, t.tag));
  };
  function Ff(e, t) {
    return Ps(e, t);
  }
  function Bd(e, t, i, o) {
    (this.tag = e),
      (this.key = i),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Sr(e, t, i, o) {
    return new Bd(e, t, i, o);
  }
  function Yl(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Ud(e) {
    if (typeof e == 'function') return Yl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === dt)) return 11;
      if (e === ne) return 14;
    }
    return 2;
  }
  function Wr(e, t) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = Sr(e.tag, t, e.key, e.mode)),
          (i.elementType = e.elementType),
          (i.type = e.type),
          (i.stateNode = e.stateNode),
          (i.alternate = e),
          (e.alternate = i))
        : ((i.pendingProps = t), (i.type = e.type), (i.flags = 0), (i.subtreeFlags = 0), (i.deletions = null)),
      (i.flags = e.flags & 14680064),
      (i.childLanes = e.childLanes),
      (i.lanes = e.lanes),
      (i.child = e.child),
      (i.memoizedProps = e.memoizedProps),
      (i.memoizedState = e.memoizedState),
      (i.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (i.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (i.sibling = e.sibling),
      (i.index = e.index),
      (i.ref = e.ref),
      i
    );
  }
  function Zl(e, t, i, o, u, c) {
    var _ = 2;
    if (((o = e), typeof e == 'function')) Yl(e) && (_ = 1);
    else if (typeof e == 'string') _ = 5;
    else
      e: switch (e) {
        case we:
          return Vo(i.children, u, c, t);
        case ge:
          (_ = 8), (u |= 8);
          break;
        case ze:
          return (e = Sr(12, i, t, u | 2)), (e.elementType = ze), (e.lanes = c), e;
        case st:
          return (e = Sr(13, i, t, u)), (e.elementType = st), (e.lanes = c), e;
        case pe:
          return (e = Sr(19, i, t, u)), (e.elementType = pe), (e.lanes = c), e;
        case re:
          return Vl(i, u, c, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Be:
                _ = 10;
                break e;
              case Ae:
                _ = 9;
                break e;
              case dt:
                _ = 11;
                break e;
              case ne:
                _ = 14;
                break e;
              case j:
                (_ = 16), (o = null);
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ''));
      }
    return (t = Sr(_, i, t, u)), (t.elementType = e), (t.type = o), (t.lanes = c), t;
  }
  function Vo(e, t, i, o) {
    return (e = Sr(7, e, o, t)), (e.lanes = i), e;
  }
  function Vl(e, t, i, o) {
    return (e = Sr(22, e, o, t)), (e.elementType = re), (e.lanes = i), (e.stateNode = { isHidden: !1 }), e;
  }
  function yc(e, t, i) {
    return (e = Sr(6, e, null, t)), (e.lanes = i), e;
  }
  function Ec(e, t, i) {
    return (
      (t = Sr(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = i),
      (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
      t
    );
  }
  function zd(e, t, i, o, u) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Xr(0)),
      (this.expirationTimes = Xr(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Xr(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null);
  }
  function bc(e, t, i, o, u, c, _, k, A) {
    return (
      (e = new zd(e, t, i, k, A)),
      t === 1 ? ((t = 1), c === !0 && (t |= 8)) : (t = 0),
      (c = Sr(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (c.memoizedState = {
        element: o,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      _l(c),
      e
    );
  }
  function $d(e, t, i) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: be, key: o == null ? null : '' + o, children: e, containerInfo: t, implementation: i };
  }
  function Hf(e) {
    if (!e) return ro;
    e = e._reactInternals;
    e: {
      if (bi(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Qn(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var i = e.type;
      if (Qn(i)) return sf(e, i, t);
    }
    return t;
  }
  function Wf(e, t, i, o, u, c, _, k, A) {
    return (
      (e = bc(i, o, !0, e, u, c, _, k, A)),
      (e.context = Hf(null)),
      (i = e.current),
      (o = Fn()),
      (u = ho(i)),
      (c = Mi(o, u)),
      (c.callback = t ?? null),
      Er(i, c, u),
      (e.current.lanes = u),
      Yi(e, u, o),
      er(e, o),
      e
    );
  }
  function Ql(e, t, i, o) {
    var u = t.current,
      c = Fn(),
      _ = ho(u);
    return (
      (i = Hf(i)),
      t.context === null ? (t.context = i) : (t.pendingContext = i),
      (t = Mi(c, _)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = Er(u, t, _)),
      e !== null && (Hr(e, u, _, c), vl(e, u, _)),
      _
    );
  }
  function Xl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Gf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function wc(e, t) {
    Gf(e, t), (e = e.alternate) && Gf(e, t);
  }
  function Fd() {
    return null;
  }
  var Kf =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function jl(e) {
    this._internalRoot = e;
  }
  (Rs.prototype.render = jl.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      Ql(e, t, null, null);
    }),
    (Rs.prototype.unmount = jl.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          qo(function () {
            Ql(null, e, null, null);
          }),
            (t[or] = null);
        }
      });
  function Rs(e) {
    this._internalRoot = e;
  }
  Rs.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Zi();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < cn.length && t !== 0 && t < cn[i].priority; i++);
      cn.splice(i, 0, e), i === 0 && Dc(e);
    }
  };
  function xc(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Jl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function qf() {}
  function Hd(e, t, i, o, u) {
    if (u) {
      if (typeof o == 'function') {
        var c = o;
        o = function () {
          var W = Xl(_);
          c.call(W);
        };
      }
      var _ = Wf(t, o, e, 0, null, !1, !1, '', qf);
      return (e._reactRootContainer = _), (e[or] = _.current), Ji(e.nodeType === 8 ? e.parentNode : e), qo(), _;
    }
    for (; (u = e.lastChild); ) e.removeChild(u);
    if (typeof o == 'function') {
      var k = o;
      o = function () {
        var W = Xl(A);
        k.call(W);
      };
    }
    var A = bc(e, 0, !1, null, null, !1, !1, '', qf);
    return (
      (e._reactRootContainer = A),
      (e[or] = A.current),
      Ji(e.nodeType === 8 ? e.parentNode : e),
      qo(function () {
        Ql(t, A, i, o);
      }),
      A
    );
  }
  function Qo(e, t, i, o, u) {
    var c = i._reactRootContainer;
    if (c) {
      var _ = c;
      if (typeof u == 'function') {
        var k = u;
        u = function () {
          var A = Xl(_);
          k.call(A);
        };
      }
      Ql(t, _, e, u);
    } else _ = Hd(i, t, e, u, o);
    return Xl(_);
  }
  (na = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var i = wi(t.pendingLanes);
          i !== 0 && (To(t, i | 1), er(t, Rt()), !(gt & 6) && ((Ko = Rt() + 500), io()));
        }
        break;
      case 13:
        qo(function () {
          var o = Oi(e, 1);
          if (o !== null) {
            var u = Fn();
            Hr(o, e, 1, u);
          }
        }),
          wc(e, 1);
    }
  }),
    (Yt = function (e) {
      if (e.tag === 13) {
        var t = Oi(e, 134217728);
        if (t !== null) {
          var i = Fn();
          Hr(t, e, 134217728, i);
        }
        wc(e, 134217728);
      }
    }),
    (bt = function (e) {
      if (e.tag === 13) {
        var t = ho(e),
          i = Oi(e, t);
        if (i !== null) {
          var o = Fn();
          Hr(i, e, t, o);
        }
        wc(e, t);
      }
    }),
    (Zi = function () {
      return ct;
    }),
    (Lr = function (e, t) {
      var i = ct;
      try {
        return (ct = e), t();
      } finally {
        ct = i;
      }
    }),
    (pt = function (e, t, i) {
      switch (t) {
        case 'input':
          if ((wn(e, i), (t = i.name), i.type === 'radio' && t != null)) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
              t < i.length;
              t++
            ) {
              var o = i[t];
              if (o !== e && o.form === e.form) {
                var u = ll(o);
                if (!u) throw Error(a(90));
                Ot(o), wn(o, u);
              }
            }
          }
          break;
        case 'textarea':
          dr(e, i);
          break;
        case 'select':
          (t = i.value), t != null && Kt(e, !!i.multiple, t, !1);
      }
    }),
    (fe = mc),
    (Ye = qo);
  var Wd = { usingClientEntryPoint: !1, Events: [Tn, et, ll, R, Z, mc] },
    Cs = { findFiberByHostInstance: ti, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
    Gd = {
      bundleType: Cs.bundleType,
      version: Cs.version,
      rendererPackageName: Cs.rendererPackageName,
      rendererConfig: Cs.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Te.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Ls(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Cs.findFiberByHostInstance || Fd,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var eu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!eu.isDisabled && eu.supportsFiber)
      try {
        (nt = eu.inject(Gd)), (at = eu);
      } catch {}
  }
  return (
    (Rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wd),
    (Rr.createPortal = function (e, t) {
      var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!xc(t)) throw Error(a(200));
      return $d(e, t, null, i);
    }),
    (Rr.createRoot = function (e, t) {
      if (!xc(e)) throw Error(a(299));
      var i = !1,
        o = '',
        u = Kf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (i = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = bc(e, 1, !1, null, null, i, !1, o, u)),
        (e[or] = t.current),
        Ji(e.nodeType === 8 ? e.parentNode : e),
        new jl(t)
      );
    }),
    (Rr.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function' ? Error(a(188)) : ((e = Object.keys(e).join(',')), Error(a(268, e)));
      return (e = Ls(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Rr.flushSync = function (e) {
      return qo(e);
    }),
    (Rr.hydrate = function (e, t, i) {
      if (!Jl(t)) throw Error(a(200));
      return Qo(null, e, t, !0, i);
    }),
    (Rr.hydrateRoot = function (e, t, i) {
      if (!xc(e)) throw Error(a(405));
      var o = (i != null && i.hydratedSources) || null,
        u = !1,
        c = '',
        _ = Kf;
      if (
        (i != null &&
          (i.unstable_strictMode === !0 && (u = !0),
          i.identifierPrefix !== void 0 && (c = i.identifierPrefix),
          i.onRecoverableError !== void 0 && (_ = i.onRecoverableError)),
        (t = Wf(t, null, e, 1, i ?? null, u, !1, c, _)),
        (e[or] = t.current),
        Ji(e),
        o)
      )
        for (e = 0; e < o.length; e++)
          (i = o[e]),
            (u = i._getVersion),
            (u = u(i._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [i, u])
              : t.mutableSourceEagerHydrationData.push(i, u);
      return new Rs(t);
    }),
    (Rr.render = function (e, t, i) {
      if (!Jl(t)) throw Error(a(200));
      return Qo(null, e, t, !1, i);
    }),
    (Rr.unmountComponentAtNode = function (e) {
      if (!Jl(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (qo(function () {
            Qo(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[or] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Rr.unstable_batchedUpdates = mc),
    (Rr.unstable_renderSubtreeIntoContainer = function (e, t, i, o) {
      if (!Jl(i)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return Qo(e, t, i, !1, o);
    }),
    (Rr.version = '18.3.1-next-f1338f8080-20240426'),
    Rr
  );
}
var Bg;
function Hh() {
  if (Bg) return op.exports;
  Bg = 1;
  function d() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (l) {
        console.error(l);
      }
  }
  return d(), (op.exports = Qv()), op.exports;
}
var Ug;
function Xv() {
  if (Ug) return Xf;
  Ug = 1;
  var d = Hh();
  return (Xf.createRoot = d.createRoot), (Xf.hydrateRoot = d.hydrateRoot), Xf;
}
var jv = Xv();
Hh();
/**
 * @remix-run/router v1.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Oc() {
  return (
    (Oc = Object.assign
      ? Object.assign.bind()
      : function (d) {
          for (var l = 1; l < arguments.length; l++) {
            var a = arguments[l];
            for (var p in a) Object.prototype.hasOwnProperty.call(a, p) && (d[p] = a[p]);
          }
          return d;
        }),
    Oc.apply(this, arguments)
  );
}
var Ba;
(function (d) {
  (d.Pop = 'POP'), (d.Push = 'PUSH'), (d.Replace = 'REPLACE');
})(Ba || (Ba = {}));
const zg = 'popstate';
function Jv(d) {
  d === void 0 && (d = {});
  function l(p, g) {
    let { pathname: m, search: v, hash: x } = p.location;
    return Yp(
      '',
      { pathname: m, search: v, hash: x },
      (g.state && g.state.usr) || null,
      (g.state && g.state.key) || 'default'
    );
  }
  function a(p, g) {
    return typeof g == 'string' ? g : ed(g);
  }
  return t0(l, a, null, d);
}
function gn(d, l) {
  if (d === !1 || d === null || typeof d > 'u') throw new Error(l);
}
function Wh(d, l) {
  if (!d) {
    typeof console < 'u' && console.warn(l);
    try {
      throw new Error(l);
    } catch {}
  }
}
function e0() {
  return Math.random().toString(36).substr(2, 8);
}
function $g(d, l) {
  return { usr: d.state, key: d.key, idx: l };
}
function Yp(d, l, a, p) {
  return (
    a === void 0 && (a = null),
    Oc({ pathname: typeof d == 'string' ? d : d.pathname, search: '', hash: '' }, typeof l == 'string' ? ou(l) : l, {
      state: a,
      key: (l && l.key) || p || e0(),
    })
  );
}
function ed(d) {
  let { pathname: l = '/', search: a = '', hash: p = '' } = d;
  return (
    a && a !== '?' && (l += a.charAt(0) === '?' ? a : '?' + a),
    p && p !== '#' && (l += p.charAt(0) === '#' ? p : '#' + p),
    l
  );
}
function ou(d) {
  let l = {};
  if (d) {
    let a = d.indexOf('#');
    a >= 0 && ((l.hash = d.substr(a)), (d = d.substr(0, a)));
    let p = d.indexOf('?');
    p >= 0 && ((l.search = d.substr(p)), (d = d.substr(0, p))), d && (l.pathname = d);
  }
  return l;
}
function t0(d, l, a, p) {
  p === void 0 && (p = {});
  let { window: g = document.defaultView, v5Compat: m = !1 } = p,
    v = g.history,
    x = Ba.Pop,
    S = null,
    w = b();
  w == null && ((w = 0), v.replaceState(Oc({}, v.state, { idx: w }), ''));
  function b() {
    return (v.state || { idx: null }).idx;
  }
  function N() {
    x = Ba.Pop;
    let $ = b(),
      V = $ == null ? null : $ - w;
    (w = $), S && S({ action: x, location: F.location, delta: V });
  }
  function I($, V) {
    x = Ba.Push;
    let ue = Yp(F.location, $, V);
    w = b() + 1;
    let ae = $g(ue, w),
      Te = F.createHref(ue);
    try {
      v.pushState(ae, '', Te);
    } catch (de) {
      if (de instanceof DOMException && de.name === 'DataCloneError') throw de;
      g.location.assign(Te);
    }
    m && S && S({ action: x, location: F.location, delta: 1 });
  }
  function z($, V) {
    x = Ba.Replace;
    let ue = Yp(F.location, $, V);
    w = b();
    let ae = $g(ue, w),
      Te = F.createHref(ue);
    v.replaceState(ae, '', Te), m && S && S({ action: x, location: F.location, delta: 0 });
  }
  function G($) {
    let V = g.location.origin !== 'null' ? g.location.origin : g.location.href,
      ue = typeof $ == 'string' ? $ : ed($);
    return (
      (ue = ue.replace(/ $/, '%20')),
      gn(V, 'No window.location.(origin|href) available to create URL for href: ' + ue),
      new URL(ue, V)
    );
  }
  let F = {
    get action() {
      return x;
    },
    get location() {
      return d(g, v);
    },
    listen($) {
      if (S) throw new Error('A history only accepts one active listener');
      return (
        g.addEventListener(zg, N),
        (S = $),
        () => {
          g.removeEventListener(zg, N), (S = null);
        }
      );
    },
    createHref($) {
      return l(g, $);
    },
    createURL: G,
    encodeLocation($) {
      let V = G($);
      return { pathname: V.pathname, search: V.search, hash: V.hash };
    },
    push: I,
    replace: z,
    go($) {
      return v.go($);
    },
  };
  return F;
}
var Fg;
(function (d) {
  (d.data = 'data'), (d.deferred = 'deferred'), (d.redirect = 'redirect'), (d.error = 'error');
})(Fg || (Fg = {}));
function n0(d, l, a) {
  return a === void 0 && (a = '/'), r0(d, l, a);
}
function r0(d, l, a, p) {
  let g = typeof l == 'string' ? ou(l) : l,
    m = tg(g.pathname || '/', a);
  if (m == null) return null;
  let v = Gh(d);
  i0(v);
  let x = null;
  for (let S = 0; x == null && S < v.length; ++S) {
    let w = m0(m);
    x = p0(v[S], w);
  }
  return x;
}
function Gh(d, l, a, p) {
  l === void 0 && (l = []), a === void 0 && (a = []), p === void 0 && (p = '');
  let g = (m, v, x) => {
    let S = {
      relativePath: x === void 0 ? m.path || '' : x,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: v,
      route: m,
    };
    S.relativePath.startsWith('/') &&
      (gn(
        S.relativePath.startsWith(p),
        'Absolute route path "' +
          S.relativePath +
          '" nested under path ' +
          ('"' + p + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (S.relativePath = S.relativePath.slice(p.length)));
    let w = Ua([p, S.relativePath]),
      b = a.concat(S);
    m.children &&
      m.children.length > 0 &&
      (gn(
        m.index !== !0,
        'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + w + '".')
      ),
      Gh(m.children, l, b, w)),
      !(m.path == null && !m.index) && l.push({ path: w, score: f0(w, m.index), routesMeta: b });
  };
  return (
    d.forEach((m, v) => {
      var x;
      if (m.path === '' || !((x = m.path) != null && x.includes('?'))) g(m, v);
      else for (let S of Kh(m.path)) g(m, v, S);
    }),
    l
  );
}
function Kh(d) {
  let l = d.split('/');
  if (l.length === 0) return [];
  let [a, ...p] = l,
    g = a.endsWith('?'),
    m = a.replace(/\?$/, '');
  if (p.length === 0) return g ? [m, ''] : [m];
  let v = Kh(p.join('/')),
    x = [];
  return (
    x.push(...v.map((S) => (S === '' ? m : [m, S].join('/')))),
    g && x.push(...v),
    x.map((S) => (d.startsWith('/') && S === '' ? '/' : S))
  );
}
function i0(d) {
  d.sort((l, a) =>
    l.score !== a.score
      ? a.score - l.score
      : d0(
          l.routesMeta.map((p) => p.childrenIndex),
          a.routesMeta.map((p) => p.childrenIndex)
        )
  );
}
const o0 = /^:[\w-]+$/,
  a0 = 3,
  s0 = 2,
  l0 = 1,
  u0 = 10,
  c0 = -2,
  Hg = (d) => d === '*';
function f0(d, l) {
  let a = d.split('/'),
    p = a.length;
  return (
    a.some(Hg) && (p += c0),
    l && (p += s0),
    a.filter((g) => !Hg(g)).reduce((g, m) => g + (o0.test(m) ? a0 : m === '' ? l0 : u0), p)
  );
}
function d0(d, l) {
  return d.length === l.length && d.slice(0, -1).every((p, g) => p === l[g]) ? d[d.length - 1] - l[l.length - 1] : 0;
}
function p0(d, l, a) {
  let { routesMeta: p } = d,
    g = {},
    m = '/',
    v = [];
  for (let x = 0; x < p.length; ++x) {
    let S = p[x],
      w = x === p.length - 1,
      b = m === '/' ? l : l.slice(m.length) || '/',
      N = g0({ path: S.relativePath, caseSensitive: S.caseSensitive, end: w }, b),
      I = S.route;
    if (!N) return null;
    Object.assign(g, N.params),
      v.push({ params: g, pathname: Ua([m, N.pathname]), pathnameBase: E0(Ua([m, N.pathnameBase])), route: I }),
      N.pathnameBase !== '/' && (m = Ua([m, N.pathnameBase]));
  }
  return v;
}
function g0(d, l) {
  typeof d == 'string' && (d = { path: d, caseSensitive: !1, end: !0 });
  let [a, p] = h0(d.path, d.caseSensitive, d.end),
    g = l.match(a);
  if (!g) return null;
  let m = g[0],
    v = m.replace(/(.)\/+$/, '$1'),
    x = g.slice(1);
  return {
    params: p.reduce((w, b, N) => {
      let { paramName: I, isOptional: z } = b;
      if (I === '*') {
        let F = x[N] || '';
        v = m.slice(0, m.length - F.length).replace(/(.)\/+$/, '$1');
      }
      const G = x[N];
      return z && !G ? (w[I] = void 0) : (w[I] = (G || '').replace(/%2F/g, '/')), w;
    }, {}),
    pathname: m,
    pathnameBase: v,
    pattern: d,
  };
}
function h0(d, l, a) {
  l === void 0 && (l = !1),
    a === void 0 && (a = !0),
    Wh(
      d === '*' || !d.endsWith('*') || d.endsWith('/*'),
      'Route path "' +
        d +
        '" will be treated as if it were ' +
        ('"' + d.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + d.replace(/\*$/, '/*') + '".')
    );
  let p = [],
    g =
      '^' +
      d
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (v, x, S) => (p.push({ paramName: x, isOptional: S != null }), S ? '/?([^\\/]+)?' : '/([^\\/]+)')
        );
  return (
    d.endsWith('*')
      ? (p.push({ paramName: '*' }), (g += d === '*' || d === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : a
        ? (g += '\\/*$')
        : d !== '' && d !== '/' && (g += '(?:(?=\\/|$))'),
    [new RegExp(g, l ? void 0 : 'i'), p]
  );
}
function m0(d) {
  try {
    return d
      .split('/')
      .map((l) => decodeURIComponent(l).replace(/\//g, '%2F'))
      .join('/');
  } catch (l) {
    return (
      Wh(
        !1,
        'The URL path "' +
          d +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + l + ').')
      ),
      d
    );
  }
}
function tg(d, l) {
  if (l === '/') return d;
  if (!d.toLowerCase().startsWith(l.toLowerCase())) return null;
  let a = l.endsWith('/') ? l.length - 1 : l.length,
    p = d.charAt(a);
  return p && p !== '/' ? null : d.slice(a) || '/';
}
function _0(d, l) {
  l === void 0 && (l = '/');
  let { pathname: a, search: p = '', hash: g = '' } = typeof d == 'string' ? ou(d) : d;
  return { pathname: a ? (a.startsWith('/') ? a : v0(a, l)) : l, search: b0(p), hash: w0(g) };
}
function v0(d, l) {
  let a = l.replace(/\/+$/, '').split('/');
  return (
    d.split('/').forEach((g) => {
      g === '..' ? a.length > 1 && a.pop() : g !== '.' && a.push(g);
    }),
    a.length > 1 ? a.join('/') : '/'
  );
}
function lp(d, l, a, p) {
  return (
    "Cannot include a '" +
    d +
    "' character in a manually specified " +
    ('`to.' + l + '` field [' + JSON.stringify(p) + '].  Please separate it out to the ') +
    ('`to.' + a + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function y0(d) {
  return d.filter((l, a) => a === 0 || (l.route.path && l.route.path.length > 0));
}
function qh(d, l) {
  let a = y0(d);
  return l ? a.map((p, g) => (g === a.length - 1 ? p.pathname : p.pathnameBase)) : a.map((p) => p.pathnameBase);
}
function Yh(d, l, a, p) {
  p === void 0 && (p = !1);
  let g;
  typeof d == 'string'
    ? (g = ou(d))
    : ((g = Oc({}, d)),
      gn(!g.pathname || !g.pathname.includes('?'), lp('?', 'pathname', 'search', g)),
      gn(!g.pathname || !g.pathname.includes('#'), lp('#', 'pathname', 'hash', g)),
      gn(!g.search || !g.search.includes('#'), lp('#', 'search', 'hash', g)));
  let m = d === '' || g.pathname === '',
    v = m ? '/' : g.pathname,
    x;
  if (v == null) x = a;
  else {
    let N = l.length - 1;
    if (!p && v.startsWith('..')) {
      let I = v.split('/');
      for (; I[0] === '..'; ) I.shift(), (N -= 1);
      g.pathname = I.join('/');
    }
    x = N >= 0 ? l[N] : '/';
  }
  let S = _0(g, x),
    w = v && v !== '/' && v.endsWith('/'),
    b = (m || v === '.') && a.endsWith('/');
  return !S.pathname.endsWith('/') && (w || b) && (S.pathname += '/'), S;
}
const Ua = (d) => d.join('/').replace(/\/\/+/g, '/'),
  E0 = (d) => d.replace(/\/+$/, '').replace(/^\/*/, '/'),
  b0 = (d) => (!d || d === '?' ? '' : d.startsWith('?') ? d : '?' + d),
  w0 = (d) => (!d || d === '#' ? '' : d.startsWith('#') ? d : '#' + d);
function x0(d) {
  return (
    d != null &&
    typeof d.status == 'number' &&
    typeof d.statusText == 'string' &&
    typeof d.internal == 'boolean' &&
    'data' in d
  );
}
const Zh = ['post', 'put', 'patch', 'delete'];
new Set(Zh);
const S0 = ['get', ...Zh];
new Set(S0);
/**
 * React Router v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Mc() {
  return (
    (Mc = Object.assign
      ? Object.assign.bind()
      : function (d) {
          for (var l = 1; l < arguments.length; l++) {
            var a = arguments[l];
            for (var p in a) Object.prototype.hasOwnProperty.call(a, p) && (d[p] = a[p]);
          }
          return d;
        }),
    Mc.apply(this, arguments)
  );
}
const ng = ye.createContext(null),
  k0 = ye.createContext(null),
  Ms = ye.createContext(null),
  id = ye.createContext(null),
  za = ye.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Vh = ye.createContext(null);
function N0(d, l) {
  let { relative: a } = l === void 0 ? {} : l;
  Ic() || gn(!1);
  let { basename: p, navigator: g } = ye.useContext(Ms),
    { hash: m, pathname: v, search: x } = jh(d, { relative: a }),
    S = v;
  return p !== '/' && (S = v === '/' ? p : Ua([p, v])), g.createHref({ pathname: S, search: x, hash: m });
}
function Ic() {
  return ye.useContext(id) != null;
}
function od() {
  return Ic() || gn(!1), ye.useContext(id).location;
}
function Qh(d) {
  ye.useContext(Ms).static || ye.useLayoutEffect(d);
}
function T0() {
  let { isDataRoute: d } = ye.useContext(za);
  return d ? $0() : R0();
}
function R0() {
  Ic() || gn(!1);
  let d = ye.useContext(ng),
    { basename: l, future: a, navigator: p } = ye.useContext(Ms),
    { matches: g } = ye.useContext(za),
    { pathname: m } = od(),
    v = JSON.stringify(qh(g, a.v7_relativeSplatPath)),
    x = ye.useRef(!1);
  return (
    Qh(() => {
      x.current = !0;
    }),
    ye.useCallback(
      function (w, b) {
        if ((b === void 0 && (b = {}), !x.current)) return;
        if (typeof w == 'number') {
          p.go(w);
          return;
        }
        let N = Yh(w, JSON.parse(v), m, b.relative === 'path');
        d == null && l !== '/' && (N.pathname = N.pathname === '/' ? l : Ua([l, N.pathname])),
          (b.replace ? p.replace : p.push)(N, b.state, b);
      },
      [l, p, v, m, d]
    )
  );
}
function Xh() {
  let { matches: d } = ye.useContext(za),
    l = d[d.length - 1];
  return l ? l.params : {};
}
function jh(d, l) {
  let { relative: a } = l === void 0 ? {} : l,
    { future: p } = ye.useContext(Ms),
    { matches: g } = ye.useContext(za),
    { pathname: m } = od(),
    v = JSON.stringify(qh(g, p.v7_relativeSplatPath));
  return ye.useMemo(() => Yh(d, JSON.parse(v), m, a === 'path'), [d, v, m, a]);
}
function C0(d, l) {
  return A0(d, l);
}
function A0(d, l, a, p) {
  Ic() || gn(!1);
  let { navigator: g, static: m } = ye.useContext(Ms),
    { matches: v } = ye.useContext(za),
    x = v[v.length - 1],
    S = x ? x.params : {};
  x && x.pathname;
  let w = x ? x.pathnameBase : '/';
  x && x.route;
  let b = od(),
    N;
  if (l) {
    var I;
    let V = typeof l == 'string' ? ou(l) : l;
    w === '/' || ((I = V.pathname) != null && I.startsWith(w)) || gn(!1), (N = V);
  } else N = b;
  let z = N.pathname || '/',
    G = z;
  if (w !== '/') {
    let V = w.replace(/^\//, '').split('/');
    G = '/' + z.replace(/^\//, '').split('/').slice(V.length).join('/');
  }
  let F = n0(d, { pathname: G }),
    $ = D0(
      F &&
        F.map((V) =>
          Object.assign({}, V, {
            params: Object.assign({}, S, V.params),
            pathname: Ua([w, g.encodeLocation ? g.encodeLocation(V.pathname).pathname : V.pathname]),
            pathnameBase:
              V.pathnameBase === '/'
                ? w
                : Ua([w, g.encodeLocation ? g.encodeLocation(V.pathnameBase).pathname : V.pathnameBase]),
          })
        ),
      v,
      a,
      p
    );
  return l && $
    ? ye.createElement(
        id.Provider,
        {
          value: {
            location: Mc({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, N),
            navigationType: Ba.Pop,
          },
        },
        $
      )
    : $;
}
function O0() {
  let d = z0(),
    l = x0(d) ? d.status + ' ' + d.statusText : d instanceof Error ? d.message : JSON.stringify(d),
    a = d instanceof Error ? d.stack : null,
    g = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return ye.createElement(
    ye.Fragment,
    null,
    ye.createElement('h2', null, 'Unexpected Application Error!'),
    ye.createElement('h3', { style: { fontStyle: 'italic' } }, l),
    a ? ye.createElement('pre', { style: g }, a) : null,
    null
  );
}
const M0 = ye.createElement(O0, null);
class I0 extends ye.Component {
  constructor(l) {
    super(l), (this.state = { location: l.location, revalidation: l.revalidation, error: l.error });
  }
  static getDerivedStateFromError(l) {
    return { error: l };
  }
  static getDerivedStateFromProps(l, a) {
    return a.location !== l.location || (a.revalidation !== 'idle' && l.revalidation === 'idle')
      ? { error: l.error, location: l.location, revalidation: l.revalidation }
      : {
          error: l.error !== void 0 ? l.error : a.error,
          location: a.location,
          revalidation: l.revalidation || a.revalidation,
        };
  }
  componentDidCatch(l, a) {
    console.error('React Router caught the following error during render', l, a);
  }
  render() {
    return this.state.error !== void 0
      ? ye.createElement(
          za.Provider,
          { value: this.props.routeContext },
          ye.createElement(Vh.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function L0(d) {
  let { routeContext: l, match: a, children: p } = d,
    g = ye.useContext(ng);
  return (
    g &&
      g.static &&
      g.staticContext &&
      (a.route.errorElement || a.route.ErrorBoundary) &&
      (g.staticContext._deepestRenderedBoundaryId = a.route.id),
    ye.createElement(za.Provider, { value: l }, p)
  );
}
function D0(d, l, a, p) {
  var g;
  if ((l === void 0 && (l = []), a === void 0 && (a = null), p === void 0 && (p = null), d == null)) {
    var m;
    if (!a) return null;
    if (a.errors) d = a.matches;
    else if ((m = p) != null && m.v7_partialHydration && l.length === 0 && !a.initialized && a.matches.length > 0)
      d = a.matches;
    else return null;
  }
  let v = d,
    x = (g = a) == null ? void 0 : g.errors;
  if (x != null) {
    let b = v.findIndex((N) => N.route.id && (x == null ? void 0 : x[N.route.id]) !== void 0);
    b >= 0 || gn(!1), (v = v.slice(0, Math.min(v.length, b + 1)));
  }
  let S = !1,
    w = -1;
  if (a && p && p.v7_partialHydration)
    for (let b = 0; b < v.length; b++) {
      let N = v[b];
      if (((N.route.HydrateFallback || N.route.hydrateFallbackElement) && (w = b), N.route.id)) {
        let { loaderData: I, errors: z } = a,
          G = N.route.loader && I[N.route.id] === void 0 && (!z || z[N.route.id] === void 0);
        if (N.route.lazy || G) {
          (S = !0), w >= 0 ? (v = v.slice(0, w + 1)) : (v = [v[0]]);
          break;
        }
      }
    }
  return v.reduceRight((b, N, I) => {
    let z,
      G = !1,
      F = null,
      $ = null;
    a &&
      ((z = x && N.route.id ? x[N.route.id] : void 0),
      (F = N.route.errorElement || M0),
      S &&
        (w < 0 && I === 0
          ? (F0('route-fallback'), (G = !0), ($ = null))
          : w === I && ((G = !0), ($ = N.route.hydrateFallbackElement || null))));
    let V = l.concat(v.slice(0, I + 1)),
      ue = () => {
        let ae;
        return (
          z
            ? (ae = F)
            : G
              ? (ae = $)
              : N.route.Component
                ? (ae = ye.createElement(N.route.Component, null))
                : N.route.element
                  ? (ae = N.route.element)
                  : (ae = b),
          ye.createElement(L0, {
            match: N,
            routeContext: { outlet: b, matches: V, isDataRoute: a != null },
            children: ae,
          })
        );
      };
    return a && (N.route.ErrorBoundary || N.route.errorElement || I === 0)
      ? ye.createElement(I0, {
          location: a.location,
          revalidation: a.revalidation,
          component: F,
          error: z,
          children: ue(),
          routeContext: { outlet: null, matches: V, isDataRoute: !0 },
        })
      : ue();
  }, null);
}
var Jh = (function (d) {
    return (
      (d.UseBlocker = 'useBlocker'), (d.UseRevalidator = 'useRevalidator'), (d.UseNavigateStable = 'useNavigate'), d
    );
  })(Jh || {}),
  em = (function (d) {
    return (
      (d.UseBlocker = 'useBlocker'),
      (d.UseLoaderData = 'useLoaderData'),
      (d.UseActionData = 'useActionData'),
      (d.UseRouteError = 'useRouteError'),
      (d.UseNavigation = 'useNavigation'),
      (d.UseRouteLoaderData = 'useRouteLoaderData'),
      (d.UseMatches = 'useMatches'),
      (d.UseRevalidator = 'useRevalidator'),
      (d.UseNavigateStable = 'useNavigate'),
      (d.UseRouteId = 'useRouteId'),
      d
    );
  })(em || {});
function P0(d) {
  let l = ye.useContext(ng);
  return l || gn(!1), l;
}
function B0(d) {
  let l = ye.useContext(k0);
  return l || gn(!1), l;
}
function U0(d) {
  let l = ye.useContext(za);
  return l || gn(!1), l;
}
function tm(d) {
  let l = U0(),
    a = l.matches[l.matches.length - 1];
  return a.route.id || gn(!1), a.route.id;
}
function z0() {
  var d;
  let l = ye.useContext(Vh),
    a = B0(),
    p = tm();
  return l !== void 0 ? l : (d = a.errors) == null ? void 0 : d[p];
}
function $0() {
  let { router: d } = P0(Jh.UseNavigateStable),
    l = tm(em.UseNavigateStable),
    a = ye.useRef(!1);
  return (
    Qh(() => {
      a.current = !0;
    }),
    ye.useCallback(
      function (g, m) {
        m === void 0 && (m = {}),
          a.current && (typeof g == 'number' ? d.navigate(g) : d.navigate(g, Mc({ fromRouteId: l }, m)));
      },
      [d, l]
    )
  );
}
const Wg = {};
function F0(d, l, a) {
  Wg[d] || (Wg[d] = !0);
}
function H0(d, l) {
  d == null || d.v7_startTransition, d == null || d.v7_relativeSplatPath;
}
function ru(d) {
  gn(!1);
}
function W0(d) {
  let {
    basename: l = '/',
    children: a = null,
    location: p,
    navigationType: g = Ba.Pop,
    navigator: m,
    static: v = !1,
    future: x,
  } = d;
  Ic() && gn(!1);
  let S = l.replace(/^\/*/, '/'),
    w = ye.useMemo(
      () => ({ basename: S, navigator: m, static: v, future: Mc({ v7_relativeSplatPath: !1 }, x) }),
      [S, x, m, v]
    );
  typeof p == 'string' && (p = ou(p));
  let { pathname: b = '/', search: N = '', hash: I = '', state: z = null, key: G = 'default' } = p,
    F = ye.useMemo(() => {
      let $ = tg(b, S);
      return $ == null ? null : { location: { pathname: $, search: N, hash: I, state: z, key: G }, navigationType: g };
    }, [S, b, N, I, z, G, g]);
  return F == null
    ? null
    : ye.createElement(Ms.Provider, { value: w }, ye.createElement(id.Provider, { children: a, value: F }));
}
function G0(d) {
  let { children: l, location: a } = d;
  return C0(Zp(l), a);
}
new Promise(() => {});
function Zp(d, l) {
  l === void 0 && (l = []);
  let a = [];
  return (
    ye.Children.forEach(d, (p, g) => {
      if (!ye.isValidElement(p)) return;
      let m = [...l, g];
      if (p.type === ye.Fragment) {
        a.push.apply(a, Zp(p.props.children, m));
        return;
      }
      p.type !== ru && gn(!1), !p.props.index || !p.props.children || gn(!1);
      let v = {
        id: p.props.id || m.join('-'),
        caseSensitive: p.props.caseSensitive,
        element: p.props.element,
        Component: p.props.Component,
        index: p.props.index,
        path: p.props.path,
        loader: p.props.loader,
        action: p.props.action,
        errorElement: p.props.errorElement,
        ErrorBoundary: p.props.ErrorBoundary,
        hasErrorBoundary: p.props.ErrorBoundary != null || p.props.errorElement != null,
        shouldRevalidate: p.props.shouldRevalidate,
        handle: p.props.handle,
        lazy: p.props.lazy,
      };
      p.props.children && (v.children = Zp(p.props.children, m)), a.push(v);
    }),
    a
  );
}
/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vp() {
  return (
    (Vp = Object.assign
      ? Object.assign.bind()
      : function (d) {
          for (var l = 1; l < arguments.length; l++) {
            var a = arguments[l];
            for (var p in a) Object.prototype.hasOwnProperty.call(a, p) && (d[p] = a[p]);
          }
          return d;
        }),
    Vp.apply(this, arguments)
  );
}
function K0(d, l) {
  if (d == null) return {};
  var a = {},
    p = Object.keys(d),
    g,
    m;
  for (m = 0; m < p.length; m++) (g = p[m]), !(l.indexOf(g) >= 0) && (a[g] = d[g]);
  return a;
}
function q0(d) {
  return !!(d.metaKey || d.altKey || d.ctrlKey || d.shiftKey);
}
function Y0(d, l) {
  return d.button === 0 && (!l || l === '_self') && !q0(d);
}
const Z0 = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'viewTransition',
  ],
  V0 = '6';
try {
  window.__reactRouterVersion = V0;
} catch {}
const Q0 = 'startTransition',
  Gg = Yv[Q0];
function X0(d) {
  let { basename: l, children: a, future: p, window: g } = d,
    m = ye.useRef();
  m.current == null && (m.current = Jv({ window: g, v5Compat: !0 }));
  let v = m.current,
    [x, S] = ye.useState({ action: v.action, location: v.location }),
    { v7_startTransition: w } = p || {},
    b = ye.useCallback(
      (N) => {
        w && Gg ? Gg(() => S(N)) : S(N);
      },
      [S, w]
    );
  return (
    ye.useLayoutEffect(() => v.listen(b), [v, b]),
    ye.useEffect(() => H0(p), [p]),
    ye.createElement(W0, {
      basename: l,
      children: a,
      location: x.location,
      navigationType: x.action,
      navigator: v,
      future: p,
    })
  );
}
const j0 = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
  J0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  nm = ye.forwardRef(function (l, a) {
    let {
        onClick: p,
        relative: g,
        reloadDocument: m,
        replace: v,
        state: x,
        target: S,
        to: w,
        preventScrollReset: b,
        viewTransition: N,
      } = l,
      I = K0(l, Z0),
      { basename: z } = ye.useContext(Ms),
      G,
      F = !1;
    if (typeof w == 'string' && J0.test(w) && ((G = w), j0))
      try {
        let ae = new URL(window.location.href),
          Te = w.startsWith('//') ? new URL(ae.protocol + w) : new URL(w),
          de = tg(Te.pathname, z);
        Te.origin === ae.origin && de != null ? (w = de + Te.search + Te.hash) : (F = !0);
      } catch {}
    let $ = N0(w, { relative: g }),
      V = ey(w, { replace: v, state: x, target: S, preventScrollReset: b, relative: g, viewTransition: N });
    function ue(ae) {
      p && p(ae), ae.defaultPrevented || V(ae);
    }
    return ye.createElement('a', Vp({}, I, { href: G || $, onClick: F || m ? p : ue, ref: a, target: S }));
  });
var Kg;
(function (d) {
  (d.UseScrollRestoration = 'useScrollRestoration'),
    (d.UseSubmit = 'useSubmit'),
    (d.UseSubmitFetcher = 'useSubmitFetcher'),
    (d.UseFetcher = 'useFetcher'),
    (d.useViewTransitionState = 'useViewTransitionState');
})(Kg || (Kg = {}));
var qg;
(function (d) {
  (d.UseFetcher = 'useFetcher'), (d.UseFetchers = 'useFetchers'), (d.UseScrollRestoration = 'useScrollRestoration');
})(qg || (qg = {}));
function ey(d, l) {
  let {
      target: a,
      replace: p,
      state: g,
      preventScrollReset: m,
      relative: v,
      viewTransition: x,
    } = l === void 0 ? {} : l,
    S = T0(),
    w = od(),
    b = jh(d, { relative: v });
  return ye.useCallback(
    (N) => {
      if (Y0(N, a)) {
        N.preventDefault();
        let I = p !== void 0 ? p : ed(w) === ed(b);
        S(d, { replace: I, state: g, preventScrollReset: m, relative: v, viewTransition: x });
      }
    },
    [w, S, b, p, g, a, d, m, v, x]
  );
}
const ty = () =>
    qe.jsx('div', {
      className: 'flex flex-row-reverse max-md:mx-4 max-md:my-0 max-md:flex-row',
      children: qe.jsxs('div', {
        className: 'flex text-slate-600',
        children: [
          qe.jsx('a', {
            href: '/',
            className: 'ml-5 hover:text-emerald-300 active:text-emerald-300 max-md:m-0 max-md:mr-5',
            children: '文章',
          }),
          qe.jsx('a', {
            href: '/tags',
            className: 'ml-5 hover:text-emerald-300 active:text-emerald-300 max-md:m-0 max-md:mr-5',
            children: '标签',
          }),
          qe.jsx('a', {
            href: '/about-me',
            className: 'ml-5 hover:text-emerald-300 active:text-emerald-300 max-md:m-0 max-md:mr-5',
            children: '关于我',
          }),
        ],
      }),
    }),
  ny = () =>
    qe.jsxs('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      width: 14,
      height: 14,
      style: { fill: '#999', verticalAlign: 'middle' },
      children: [
        qe.jsx('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
        qe.jsx('path', {
          d: 'M7.784 14l.42-4H4V8h4.415l.525-5h2.011l-.525 5h3.989l.525-5h2.011l-.525 5H20v2h-3.784l-.42 4H20v2h-4.415l-.525 5h-2.011l.525-5H9.585l-.525 5H7.049l.525-5H4v-2h3.784zm2.011.0h3.99l.42-4h-3.99l-.42 4z',
        }),
      ],
    });
var Jf = { exports: {} },
  ry = Jf.exports,
  Yg;
function iy() {
  return (
    Yg ||
      ((Yg = 1),
      (function (d, l) {
        (function (a, p) {
          d.exports = p();
        })(ry, function () {
          var a = 1e3,
            p = 6e4,
            g = 36e5,
            m = 'millisecond',
            v = 'second',
            x = 'minute',
            S = 'hour',
            w = 'day',
            b = 'week',
            N = 'month',
            I = 'quarter',
            z = 'year',
            G = 'date',
            F = 'Invalid Date',
            $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
            V = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            ue = {
              name: 'en',
              weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
              months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_'
              ),
              ordinal: function (pe) {
                var ne = ['th', 'st', 'nd', 'rd'],
                  j = pe % 100;
                return '[' + pe + (ne[(j - 20) % 10] || ne[j] || ne[0]) + ']';
              },
            },
            ae = function (pe, ne, j) {
              var re = String(pe);
              return !re || re.length >= ne ? pe : '' + Array(ne + 1 - re.length).join(j) + pe;
            },
            Te = {
              s: ae,
              z: function (pe) {
                var ne = -pe.utcOffset(),
                  j = Math.abs(ne),
                  re = Math.floor(j / 60),
                  B = j % 60;
                return (ne <= 0 ? '+' : '-') + ae(re, 2, '0') + ':' + ae(B, 2, '0');
              },
              m: function pe(ne, j) {
                if (ne.date() < j.date()) return -pe(j, ne);
                var re = 12 * (j.year() - ne.year()) + (j.month() - ne.month()),
                  B = ne.clone().add(re, N),
                  ie = j - B < 0,
                  Y = ne.clone().add(re + (ie ? -1 : 1), N);
                return +(-(re + (j - B) / (ie ? B - Y : Y - B)) || 0);
              },
              a: function (pe) {
                return pe < 0 ? Math.ceil(pe) || 0 : Math.floor(pe);
              },
              p: function (pe) {
                return (
                  { M: N, y: z, w: b, d: w, D: G, h: S, m: x, s: v, ms: m, Q: I }[pe] ||
                  String(pe || '')
                    .toLowerCase()
                    .replace(/s$/, '')
                );
              },
              u: function (pe) {
                return pe === void 0;
              },
            },
            de = 'en',
            be = {};
          be[de] = ue;
          var we = '$isDayjsObject',
            ge = function (pe) {
              return pe instanceof dt || !(!pe || !pe[we]);
            },
            ze = function pe(ne, j, re) {
              var B;
              if (!ne) return de;
              if (typeof ne == 'string') {
                var ie = ne.toLowerCase();
                be[ie] && (B = ie), j && ((be[ie] = j), (B = ie));
                var Y = ne.split('-');
                if (!B && Y.length > 1) return pe(Y[0]);
              } else {
                var C = ne.name;
                (be[C] = ne), (B = C);
              }
              return !re && B && (de = B), B || (!re && de);
            },
            Be = function (pe, ne) {
              if (ge(pe)) return pe.clone();
              var j = typeof ne == 'object' ? ne : {};
              return (j.date = pe), (j.args = arguments), new dt(j);
            },
            Ae = Te;
          (Ae.l = ze),
            (Ae.i = ge),
            (Ae.w = function (pe, ne) {
              return Be(pe, { locale: ne.$L, utc: ne.$u, x: ne.$x, $offset: ne.$offset });
            });
          var dt = (function () {
              function pe(j) {
                (this.$L = ze(j.locale, null, !0)), this.parse(j), (this.$x = this.$x || j.x || {}), (this[we] = !0);
              }
              var ne = pe.prototype;
              return (
                (ne.parse = function (j) {
                  (this.$d = (function (re) {
                    var B = re.date,
                      ie = re.utc;
                    if (B === null) return new Date(NaN);
                    if (Ae.u(B)) return new Date();
                    if (B instanceof Date) return new Date(B);
                    if (typeof B == 'string' && !/Z$/i.test(B)) {
                      var Y = B.match($);
                      if (Y) {
                        var C = Y[2] - 1 || 0,
                          K = (Y[7] || '0').substring(0, 3);
                        return ie
                          ? new Date(Date.UTC(Y[1], C, Y[3] || 1, Y[4] || 0, Y[5] || 0, Y[6] || 0, K))
                          : new Date(Y[1], C, Y[3] || 1, Y[4] || 0, Y[5] || 0, Y[6] || 0, K);
                      }
                    }
                    return new Date(B);
                  })(j)),
                    this.init();
                }),
                (ne.init = function () {
                  var j = this.$d;
                  (this.$y = j.getFullYear()),
                    (this.$M = j.getMonth()),
                    (this.$D = j.getDate()),
                    (this.$W = j.getDay()),
                    (this.$H = j.getHours()),
                    (this.$m = j.getMinutes()),
                    (this.$s = j.getSeconds()),
                    (this.$ms = j.getMilliseconds());
                }),
                (ne.$utils = function () {
                  return Ae;
                }),
                (ne.isValid = function () {
                  return this.$d.toString() !== F;
                }),
                (ne.isSame = function (j, re) {
                  var B = Be(j);
                  return this.startOf(re) <= B && B <= this.endOf(re);
                }),
                (ne.isAfter = function (j, re) {
                  return Be(j) < this.startOf(re);
                }),
                (ne.isBefore = function (j, re) {
                  return this.endOf(re) < Be(j);
                }),
                (ne.$g = function (j, re, B) {
                  return Ae.u(j) ? this[re] : this.set(B, j);
                }),
                (ne.unix = function () {
                  return Math.floor(this.valueOf() / 1e3);
                }),
                (ne.valueOf = function () {
                  return this.$d.getTime();
                }),
                (ne.startOf = function (j, re) {
                  var B = this,
                    ie = !!Ae.u(re) || re,
                    Y = Ae.p(j),
                    C = function (Fe, je) {
                      var mt = Ae.w(B.$u ? Date.UTC(B.$y, je, Fe) : new Date(B.$y, je, Fe), B);
                      return ie ? mt : mt.endOf(w);
                    },
                    K = function (Fe, je) {
                      return Ae.w(
                        B.toDate()[Fe].apply(B.toDate('s'), (ie ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(je)),
                        B
                      );
                    },
                    xe = this.$W,
                    Se = this.$M,
                    Me = this.$D,
                    $e = 'set' + (this.$u ? 'UTC' : '');
                  switch (Y) {
                    case z:
                      return ie ? C(1, 0) : C(31, 11);
                    case N:
                      return ie ? C(1, Se) : C(0, Se + 1);
                    case b:
                      var Pe = this.$locale().weekStart || 0,
                        Ce = (xe < Pe ? xe + 7 : xe) - Pe;
                      return C(ie ? Me - Ce : Me + (6 - Ce), Se);
                    case w:
                    case G:
                      return K($e + 'Hours', 0);
                    case S:
                      return K($e + 'Minutes', 1);
                    case x:
                      return K($e + 'Seconds', 2);
                    case v:
                      return K($e + 'Milliseconds', 3);
                    default:
                      return this.clone();
                  }
                }),
                (ne.endOf = function (j) {
                  return this.startOf(j, !1);
                }),
                (ne.$set = function (j, re) {
                  var B,
                    ie = Ae.p(j),
                    Y = 'set' + (this.$u ? 'UTC' : ''),
                    C = ((B = {}),
                    (B[w] = Y + 'Date'),
                    (B[G] = Y + 'Date'),
                    (B[N] = Y + 'Month'),
                    (B[z] = Y + 'FullYear'),
                    (B[S] = Y + 'Hours'),
                    (B[x] = Y + 'Minutes'),
                    (B[v] = Y + 'Seconds'),
                    (B[m] = Y + 'Milliseconds'),
                    B)[ie],
                    K = ie === w ? this.$D + (re - this.$W) : re;
                  if (ie === N || ie === z) {
                    var xe = this.clone().set(G, 1);
                    xe.$d[C](K), xe.init(), (this.$d = xe.set(G, Math.min(this.$D, xe.daysInMonth())).$d);
                  } else C && this.$d[C](K);
                  return this.init(), this;
                }),
                (ne.set = function (j, re) {
                  return this.clone().$set(j, re);
                }),
                (ne.get = function (j) {
                  return this[Ae.p(j)]();
                }),
                (ne.add = function (j, re) {
                  var B,
                    ie = this;
                  j = Number(j);
                  var Y = Ae.p(re),
                    C = function (Se) {
                      var Me = Be(ie);
                      return Ae.w(Me.date(Me.date() + Math.round(Se * j)), ie);
                    };
                  if (Y === N) return this.set(N, this.$M + j);
                  if (Y === z) return this.set(z, this.$y + j);
                  if (Y === w) return C(1);
                  if (Y === b) return C(7);
                  var K = ((B = {}), (B[x] = p), (B[S] = g), (B[v] = a), B)[Y] || 1,
                    xe = this.$d.getTime() + j * K;
                  return Ae.w(xe, this);
                }),
                (ne.subtract = function (j, re) {
                  return this.add(-1 * j, re);
                }),
                (ne.format = function (j) {
                  var re = this,
                    B = this.$locale();
                  if (!this.isValid()) return B.invalidDate || F;
                  var ie = j || 'YYYY-MM-DDTHH:mm:ssZ',
                    Y = Ae.z(this),
                    C = this.$H,
                    K = this.$m,
                    xe = this.$M,
                    Se = B.weekdays,
                    Me = B.months,
                    $e = B.meridiem,
                    Pe = function (je, mt, Ot, Gt) {
                      return (je && (je[mt] || je(re, ie))) || Ot[mt].slice(0, Gt);
                    },
                    Ce = function (je) {
                      return Ae.s(C % 12 || 12, je, '0');
                    },
                    Fe =
                      $e ||
                      function (je, mt, Ot) {
                        var Gt = je < 12 ? 'AM' : 'PM';
                        return Ot ? Gt.toLowerCase() : Gt;
                      };
                  return ie.replace(V, function (je, mt) {
                    return (
                      mt ||
                      (function (Ot) {
                        switch (Ot) {
                          case 'YY':
                            return String(re.$y).slice(-2);
                          case 'YYYY':
                            return Ae.s(re.$y, 4, '0');
                          case 'M':
                            return xe + 1;
                          case 'MM':
                            return Ae.s(xe + 1, 2, '0');
                          case 'MMM':
                            return Pe(B.monthsShort, xe, Me, 3);
                          case 'MMMM':
                            return Pe(Me, xe);
                          case 'D':
                            return re.$D;
                          case 'DD':
                            return Ae.s(re.$D, 2, '0');
                          case 'd':
                            return String(re.$W);
                          case 'dd':
                            return Pe(B.weekdaysMin, re.$W, Se, 2);
                          case 'ddd':
                            return Pe(B.weekdaysShort, re.$W, Se, 3);
                          case 'dddd':
                            return Se[re.$W];
                          case 'H':
                            return String(C);
                          case 'HH':
                            return Ae.s(C, 2, '0');
                          case 'h':
                            return Ce(1);
                          case 'hh':
                            return Ce(2);
                          case 'a':
                            return Fe(C, K, !0);
                          case 'A':
                            return Fe(C, K, !1);
                          case 'm':
                            return String(K);
                          case 'mm':
                            return Ae.s(K, 2, '0');
                          case 's':
                            return String(re.$s);
                          case 'ss':
                            return Ae.s(re.$s, 2, '0');
                          case 'SSS':
                            return Ae.s(re.$ms, 3, '0');
                          case 'Z':
                            return Y;
                        }
                        return null;
                      })(je) ||
                      Y.replace(':', '')
                    );
                  });
                }),
                (ne.utcOffset = function () {
                  return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                }),
                (ne.diff = function (j, re, B) {
                  var ie,
                    Y = this,
                    C = Ae.p(re),
                    K = Be(j),
                    xe = (K.utcOffset() - this.utcOffset()) * p,
                    Se = this - K,
                    Me = function () {
                      return Ae.m(Y, K);
                    };
                  switch (C) {
                    case z:
                      ie = Me() / 12;
                      break;
                    case N:
                      ie = Me();
                      break;
                    case I:
                      ie = Me() / 3;
                      break;
                    case b:
                      ie = (Se - xe) / 6048e5;
                      break;
                    case w:
                      ie = (Se - xe) / 864e5;
                      break;
                    case S:
                      ie = Se / g;
                      break;
                    case x:
                      ie = Se / p;
                      break;
                    case v:
                      ie = Se / a;
                      break;
                    default:
                      ie = Se;
                  }
                  return B ? ie : Ae.a(ie);
                }),
                (ne.daysInMonth = function () {
                  return this.endOf(N).$D;
                }),
                (ne.$locale = function () {
                  return be[this.$L];
                }),
                (ne.locale = function (j, re) {
                  if (!j) return this.$L;
                  var B = this.clone(),
                    ie = ze(j, re, !0);
                  return ie && (B.$L = ie), B;
                }),
                (ne.clone = function () {
                  return Ae.w(this.$d, this);
                }),
                (ne.toDate = function () {
                  return new Date(this.valueOf());
                }),
                (ne.toJSON = function () {
                  return this.isValid() ? this.toISOString() : null;
                }),
                (ne.toISOString = function () {
                  return this.$d.toISOString();
                }),
                (ne.toString = function () {
                  return this.$d.toUTCString();
                }),
                pe
              );
            })(),
            st = dt.prototype;
          return (
            (Be.prototype = st),
            [
              ['$ms', m],
              ['$s', v],
              ['$m', x],
              ['$H', S],
              ['$W', w],
              ['$M', N],
              ['$y', z],
              ['$D', G],
            ].forEach(function (pe) {
              st[pe[1]] = function (ne) {
                return this.$g(ne, pe[0], pe[1]);
              };
            }),
            (Be.extend = function (pe, ne) {
              return pe.$i || (pe(ne, dt, Be), (pe.$i = !0)), Be;
            }),
            (Be.locale = ze),
            (Be.isDayjs = ge),
            (Be.unix = function (pe) {
              return Be(1e3 * pe);
            }),
            (Be.en = be[de]),
            (Be.Ls = be),
            (Be.p = {}),
            Be
          );
        });
      })(Jf)),
    Jf.exports
  );
}
var oy = iy();
const Qp = Jp(oy);
var Rc = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ var ay = Rc.exports,
  Zg;
function sy() {
  return (
    Zg ||
      ((Zg = 1),
      (function (d, l) {
        (function () {
          var a,
            p = '4.17.21',
            g = 200,
            m = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
            v = 'Expected a function',
            x = 'Invalid `variable` option passed into `_.template`',
            S = '__lodash_hash_undefined__',
            w = 500,
            b = '__lodash_placeholder__',
            N = 1,
            I = 2,
            z = 4,
            G = 1,
            F = 2,
            $ = 1,
            V = 2,
            ue = 4,
            ae = 8,
            Te = 16,
            de = 32,
            be = 64,
            we = 128,
            ge = 256,
            ze = 512,
            Be = 30,
            Ae = '...',
            dt = 800,
            st = 16,
            pe = 1,
            ne = 2,
            j = 3,
            re = 1 / 0,
            B = 9007199254740991,
            ie = 17976931348623157e292,
            Y = NaN,
            C = 4294967295,
            K = C - 1,
            xe = C >>> 1,
            Se = [
              ['ary', we],
              ['bind', $],
              ['bindKey', V],
              ['curry', ae],
              ['curryRight', Te],
              ['flip', ze],
              ['partial', de],
              ['partialRight', be],
              ['rearg', ge],
            ],
            Me = '[object Arguments]',
            $e = '[object Array]',
            Pe = '[object AsyncFunction]',
            Ce = '[object Boolean]',
            Fe = '[object Date]',
            je = '[object DOMException]',
            mt = '[object Error]',
            Ot = '[object Function]',
            Gt = '[object GeneratorFunction]',
            un = '[object Map]',
            Yr = '[object Number]',
            Fi = '[object Null]',
            wn = '[object Object]',
            Hi = '[object Promise]',
            yo = '[object Proxy]',
            Hn = '[object RegExp]',
            Kt = '[object Set]',
            Cr = '[object String]',
            Zr = '[object Symbol]',
            dr = '[object Undefined]',
            Wn = '[object WeakMap]',
            hn = '[object WeakSet]',
            Gn = '[object ArrayBuffer]',
            Kn = '[object DataView]',
            mi = '[object Float32Array]',
            tr = '[object Float64Array]',
            Ar = '[object Int8Array]',
            Wi = '[object Int16Array]',
            Gi = '[object Int32Array]',
            _i = '[object Uint8Array]',
            Eo = '[object Uint8ClampedArray]',
            vi = '[object Uint16Array]',
            yi = '[object Uint32Array]',
            Ei = /\b__p \+= '';/g,
            Ki = /\b(__p \+=) '' \+/g,
            pt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            qn = /&(?:amp|lt|gt|quot|#39);/g,
            xn = /[&<>"']/g,
            Or = RegExp(qn.source),
            R = RegExp(xn.source),
            Z = /<%-([\s\S]+?)%>/g,
            fe = /<%([\s\S]+?)%>/g,
            Ye = /<%=([\s\S]+?)%>/g,
            Mt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Bt = /^\w*$/,
            ke = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            me = /[\\^$.*+?()[\]{}|]/g,
            He = RegExp(me.source),
            qt = /^\s+/,
            Tt = /\s/,
            Vr = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            qi = /\{\n\/\* \[wrapped with (.+)\] \*/,
            bo = /,? & /,
            au = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            $a = /[()=,{}\[\]\/\s]/,
            su = /\\(\\)?/g,
            bi = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            Fa = /\w*$/,
            Ha = /^[-+]0x[0-9a-f]+$/i,
            ea = /^0b[01]+$/i,
            Ls = /^\[object .+?Constructor\]$/,
            Ds = /^0o[0-7]+$/i,
            Ps = /^(?:0|[1-9]\d*)$/,
            Mr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            wo = /($^)/,
            Bs = /['\n\r\u2028\u2029\\]/g,
            Rt = '\\ud800-\\udfff',
            lu = '\\u0300-\\u036f',
            Wa = '\\ufe20-\\ufe2f',
            xo = '\\u20d0-\\u20ff',
            So = lu + Wa + xo,
            le = '\\u2700-\\u27bf',
            Le = 'a-z\\xdf-\\xf6\\xf8-\\xff',
            nt = '\\xac\\xb1\\xd7\\xf7',
            at = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
            Qt = '\\u2000-\\u206f',
            Ft =
              ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
            Ir = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
            ko = '\\ufe0e\\ufe0f',
            Sn = nt + at + Qt + Ft,
            mn = "['’]",
            No = '[' + Rt + ']',
            wi = '[' + Sn + ']',
            Qr = '[' + So + ']',
            Us = '\\d+',
            uu = '[' + le + ']',
            ta = '[' + Le + ']',
            Ga = '[^' + Rt + Sn + Us + le + Le + Ir + ']',
            Xr = '\\ud83c[\\udffb-\\udfff]',
            Yi = '(?:' + Qr + '|' + Xr + ')',
            nr = '[^' + Rt + ']',
            To = '(?:\\ud83c[\\udde6-\\uddff]){2}',
            ct = '[\\ud800-\\udbff][\\udc00-\\udfff]',
            Ge = '[' + Ir + ']',
            na = '\\u200d',
            Yt = '(?:' + ta + '|' + Ga + ')',
            bt = '(?:' + Ge + '|' + Ga + ')',
            Zi = '(?:' + mn + '(?:d|ll|m|re|s|t|ve))?',
            Lr = '(?:' + mn + '(?:D|LL|M|RE|S|T|VE))?',
            Vi = Yi + '?',
            xi = '[' + ko + ']?',
            ce = '(?:' + na + '(?:' + [nr, To, ct].join('|') + ')' + xi + Vi + ')*',
            Ne = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
            Ze = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
            lt = xi + Vi + ce,
            Zt = '(?:' + [uu, To, ct].join('|') + ')' + lt,
            cn = '(?:' + [nr + Qr + '?', Qr, To, ct, No].join('|') + ')',
            cu = RegExp(mn, 'g'),
            zs = RegExp(Qr, 'g'),
            Ro = RegExp(Xr + '(?=' + Xr + ')|' + cn + lt, 'g'),
            ld = RegExp(
              [
                Ge + '?' + ta + '+' + Zi + '(?=' + [wi, Ge, '$'].join('|') + ')',
                bt + '+' + Lr + '(?=' + [wi, Ge + Yt, '$'].join('|') + ')',
                Ge + '?' + Yt + '+' + Zi,
                Ge + '+' + Lr,
                Ze,
                Ne,
                Us,
                Zt,
              ].join('|'),
              'g'
            ),
            Dc = RegExp('[' + na + Rt + So + ko + ']'),
            $s = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            Pc = [
              'Array',
              'Buffer',
              'DataView',
              'Date',
              'Error',
              'Float32Array',
              'Float64Array',
              'Function',
              'Int8Array',
              'Int16Array',
              'Int32Array',
              'Map',
              'Math',
              'Object',
              'Promise',
              'RegExp',
              'Set',
              'String',
              'Symbol',
              'TypeError',
              'Uint8Array',
              'Uint8ClampedArray',
              'Uint16Array',
              'Uint32Array',
              'WeakMap',
              '_',
              'clearTimeout',
              'isFinite',
              'parseInt',
              'setTimeout',
            ],
            ud = -1,
            wt = {};
          (wt[mi] = wt[tr] = wt[Ar] = wt[Wi] = wt[Gi] = wt[_i] = wt[Eo] = wt[vi] = wt[yi] = !0),
            (wt[Me] =
              wt[$e] =
              wt[Gn] =
              wt[Ce] =
              wt[Kn] =
              wt[Fe] =
              wt[mt] =
              wt[Ot] =
              wt[un] =
              wt[Yr] =
              wt[wn] =
              wt[Hn] =
              wt[Kt] =
              wt[Cr] =
              wt[Wn] =
                !1);
          var Et = {};
          (Et[Me] =
            Et[$e] =
            Et[Gn] =
            Et[Kn] =
            Et[Ce] =
            Et[Fe] =
            Et[mi] =
            Et[tr] =
            Et[Ar] =
            Et[Wi] =
            Et[Gi] =
            Et[un] =
            Et[Yr] =
            Et[wn] =
            Et[Hn] =
            Et[Kt] =
            Et[Cr] =
            Et[Zr] =
            Et[_i] =
            Et[Eo] =
            Et[vi] =
            Et[yi] =
              !0),
            (Et[mt] = Et[Ot] = Et[Wn] = !1);
          var ra = {
              À: 'A',
              Á: 'A',
              Â: 'A',
              Ã: 'A',
              Ä: 'A',
              Å: 'A',
              à: 'a',
              á: 'a',
              â: 'a',
              ã: 'a',
              ä: 'a',
              å: 'a',
              Ç: 'C',
              ç: 'c',
              Ð: 'D',
              ð: 'd',
              È: 'E',
              É: 'E',
              Ê: 'E',
              Ë: 'E',
              è: 'e',
              é: 'e',
              ê: 'e',
              ë: 'e',
              Ì: 'I',
              Í: 'I',
              Î: 'I',
              Ï: 'I',
              ì: 'i',
              í: 'i',
              î: 'i',
              ï: 'i',
              Ñ: 'N',
              ñ: 'n',
              Ò: 'O',
              Ó: 'O',
              Ô: 'O',
              Õ: 'O',
              Ö: 'O',
              Ø: 'O',
              ò: 'o',
              ó: 'o',
              ô: 'o',
              õ: 'o',
              ö: 'o',
              ø: 'o',
              Ù: 'U',
              Ú: 'U',
              Û: 'U',
              Ü: 'U',
              ù: 'u',
              ú: 'u',
              û: 'u',
              ü: 'u',
              Ý: 'Y',
              ý: 'y',
              ÿ: 'y',
              Æ: 'Ae',
              æ: 'ae',
              Þ: 'Th',
              þ: 'th',
              ß: 'ss',
              Ā: 'A',
              Ă: 'A',
              Ą: 'A',
              ā: 'a',
              ă: 'a',
              ą: 'a',
              Ć: 'C',
              Ĉ: 'C',
              Ċ: 'C',
              Č: 'C',
              ć: 'c',
              ĉ: 'c',
              ċ: 'c',
              č: 'c',
              Ď: 'D',
              Đ: 'D',
              ď: 'd',
              đ: 'd',
              Ē: 'E',
              Ĕ: 'E',
              Ė: 'E',
              Ę: 'E',
              Ě: 'E',
              ē: 'e',
              ĕ: 'e',
              ė: 'e',
              ę: 'e',
              ě: 'e',
              Ĝ: 'G',
              Ğ: 'G',
              Ġ: 'G',
              Ģ: 'G',
              ĝ: 'g',
              ğ: 'g',
              ġ: 'g',
              ģ: 'g',
              Ĥ: 'H',
              Ħ: 'H',
              ĥ: 'h',
              ħ: 'h',
              Ĩ: 'I',
              Ī: 'I',
              Ĭ: 'I',
              Į: 'I',
              İ: 'I',
              ĩ: 'i',
              ī: 'i',
              ĭ: 'i',
              į: 'i',
              ı: 'i',
              Ĵ: 'J',
              ĵ: 'j',
              Ķ: 'K',
              ķ: 'k',
              ĸ: 'k',
              Ĺ: 'L',
              Ļ: 'L',
              Ľ: 'L',
              Ŀ: 'L',
              Ł: 'L',
              ĺ: 'l',
              ļ: 'l',
              ľ: 'l',
              ŀ: 'l',
              ł: 'l',
              Ń: 'N',
              Ņ: 'N',
              Ň: 'N',
              Ŋ: 'N',
              ń: 'n',
              ņ: 'n',
              ň: 'n',
              ŋ: 'n',
              Ō: 'O',
              Ŏ: 'O',
              Ő: 'O',
              ō: 'o',
              ŏ: 'o',
              ő: 'o',
              Ŕ: 'R',
              Ŗ: 'R',
              Ř: 'R',
              ŕ: 'r',
              ŗ: 'r',
              ř: 'r',
              Ś: 'S',
              Ŝ: 'S',
              Ş: 'S',
              Š: 'S',
              ś: 's',
              ŝ: 's',
              ş: 's',
              š: 's',
              Ţ: 'T',
              Ť: 'T',
              Ŧ: 'T',
              ţ: 't',
              ť: 't',
              ŧ: 't',
              Ũ: 'U',
              Ū: 'U',
              Ŭ: 'U',
              Ů: 'U',
              Ű: 'U',
              Ų: 'U',
              ũ: 'u',
              ū: 'u',
              ŭ: 'u',
              ů: 'u',
              ű: 'u',
              ų: 'u',
              Ŵ: 'W',
              ŵ: 'w',
              Ŷ: 'Y',
              ŷ: 'y',
              Ÿ: 'Y',
              Ź: 'Z',
              Ż: 'Z',
              Ž: 'Z',
              ź: 'z',
              ż: 'z',
              ž: 'z',
              Ĳ: 'IJ',
              ĳ: 'ij',
              Œ: 'Oe',
              œ: 'oe',
              ŉ: "'n",
              ſ: 's',
            },
            Fs = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
            cd = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'" },
            fd = { '\\': '\\', "'": "'", '\n': 'n', '\r': 'r', '\u2028': 'u2028', '\u2029': 'u2029' },
            fu = parseFloat,
            Hs = parseInt,
            Ws = typeof Qf == 'object' && Qf && Qf.Object === Object && Qf,
            Bc = typeof self == 'object' && self && self.Object === Object && self,
            Ut = Ws || Bc || Function('return this')(),
            Ka = l && !l.nodeType && l,
            jr = Ka && !0 && d && !d.nodeType && d,
            du = jr && jr.exports === Ka,
            ia = du && Ws.process,
            Ln = (function () {
              try {
                var L = jr && jr.require && jr.require('util').types;
                return L || (ia && ia.binding && ia.binding('util'));
              } catch {}
            })(),
            pu = Ln && Ln.isArrayBuffer,
            Yn = Ln && Ln.isDate,
            Co = Ln && Ln.isMap,
            Gs = Ln && Ln.isRegExp,
            oa = Ln && Ln.isSet,
            Uc = Ln && Ln.isTypedArray;
          function Dn(L, q, H) {
            switch (H.length) {
              case 0:
                return L.call(q);
              case 1:
                return L.call(q, H[0]);
              case 2:
                return L.call(q, H[0], H[1]);
              case 3:
                return L.call(q, H[0], H[1], H[2]);
            }
            return L.apply(q, H);
          }
          function gu(L, q, H, _e) {
            for (var Je = -1, _t = L == null ? 0 : L.length; ++Je < _t; ) {
              var en = L[Je];
              q(_e, en, H(en), L);
            }
            return _e;
          }
          function kn(L, q) {
            for (var H = -1, _e = L == null ? 0 : L.length; ++H < _e && q(L[H], H, L) !== !1; );
            return L;
          }
          function Ks(L, q) {
            for (var H = L == null ? 0 : L.length; H-- && q(L[H], H, L) !== !1; );
            return L;
          }
          function hu(L, q) {
            for (var H = -1, _e = L == null ? 0 : L.length; ++H < _e; ) if (!q(L[H], H, L)) return !1;
            return !0;
          }
          function Qi(L, q) {
            for (var H = -1, _e = L == null ? 0 : L.length, Je = 0, _t = []; ++H < _e; ) {
              var en = L[H];
              q(en, H, L) && (_t[Je++] = en);
            }
            return _t;
          }
          function qs(L, q) {
            var H = L == null ? 0 : L.length;
            return !!H && aa(L, q, 0) > -1;
          }
          function mu(L, q, H) {
            for (var _e = -1, Je = L == null ? 0 : L.length; ++_e < Je; ) if (H(q, L[_e])) return !0;
            return !1;
          }
          function Ct(L, q) {
            for (var H = -1, _e = L == null ? 0 : L.length, Je = Array(_e); ++H < _e; ) Je[H] = q(L[H], H, L);
            return Je;
          }
          function Xi(L, q) {
            for (var H = -1, _e = q.length, Je = L.length; ++H < _e; ) L[Je + H] = q[H];
            return L;
          }
          function _u(L, q, H, _e) {
            var Je = -1,
              _t = L == null ? 0 : L.length;
            for (_e && _t && (H = L[++Je]); ++Je < _t; ) H = q(H, L[Je], Je, L);
            return H;
          }
          function dd(L, q, H, _e) {
            var Je = L == null ? 0 : L.length;
            for (_e && Je && (H = L[--Je]); Je--; ) H = q(H, L[Je], Je, L);
            return H;
          }
          function vu(L, q) {
            for (var H = -1, _e = L == null ? 0 : L.length; ++H < _e; ) if (q(L[H], H, L)) return !0;
            return !1;
          }
          var pd = Eu('length');
          function zc(L) {
            return L.split('');
          }
          function gd(L) {
            return L.match(au) || [];
          }
          function $c(L, q, H) {
            var _e;
            return (
              H(L, function (Je, _t, en) {
                if (q(Je, _t, en)) return (_e = _t), !1;
              }),
              _e
            );
          }
          function Ys(L, q, H, _e) {
            for (var Je = L.length, _t = H + (_e ? 1 : -1); _e ? _t-- : ++_t < Je; ) if (q(L[_t], _t, L)) return _t;
            return -1;
          }
          function aa(L, q, H) {
            return q === q ? Qs(L, q, H) : Ys(L, Fc, H);
          }
          function yu(L, q, H, _e) {
            for (var Je = H - 1, _t = L.length; ++Je < _t; ) if (_e(L[Je], q)) return Je;
            return -1;
          }
          function Fc(L) {
            return L !== L;
          }
          function Hc(L, q) {
            var H = L == null ? 0 : L.length;
            return H ? bu(L, q) / H : Y;
          }
          function Eu(L) {
            return function (q) {
              return q == null ? a : q[L];
            };
          }
          function Zs(L) {
            return function (q) {
              return L == null ? a : L[q];
            };
          }
          function Wc(L, q, H, _e, Je) {
            return (
              Je(L, function (_t, en, St) {
                H = _e ? ((_e = !1), _t) : q(H, _t, en, St);
              }),
              H
            );
          }
          function hd(L, q) {
            var H = L.length;
            for (L.sort(q); H--; ) L[H] = L[H].value;
            return L;
          }
          function bu(L, q) {
            for (var H, _e = -1, Je = L.length; ++_e < Je; ) {
              var _t = q(L[_e]);
              _t !== a && (H = H === a ? _t : H + _t);
            }
            return H;
          }
          function wu(L, q) {
            for (var H = -1, _e = Array(L); ++H < L; ) _e[H] = q(H);
            return _e;
          }
          function md(L, q) {
            return Ct(q, function (H) {
              return [H, L[H]];
            });
          }
          function Gc(L) {
            return L && L.slice(0, Xs(L) + 1).replace(qt, '');
          }
          function rr(L) {
            return function (q) {
              return L(q);
            };
          }
          function qa(L, q) {
            return Ct(q, function (H) {
              return L[H];
            });
          }
          function Si(L, q) {
            return L.has(q);
          }
          function Kc(L, q) {
            for (var H = -1, _e = L.length; ++H < _e && aa(q, L[H], 0) > -1; );
            return H;
          }
          function xu(L, q) {
            for (var H = L.length; H-- && aa(q, L[H], 0) > -1; );
            return H;
          }
          function qc(L, q) {
            for (var H = L.length, _e = 0; H--; ) L[H] === q && ++_e;
            return _e;
          }
          var Yc = Zs(ra),
            Zc = Zs(Fs);
          function Vc(L) {
            return '\\' + fd[L];
          }
          function sa(L, q) {
            return L == null ? a : L[q];
          }
          function la(L) {
            return Dc.test(L);
          }
          function _d(L) {
            return $s.test(L);
          }
          function vd(L) {
            for (var q, H = []; !(q = L.next()).done; ) H.push(q.value);
            return H;
          }
          function Vs(L) {
            var q = -1,
              H = Array(L.size);
            return (
              L.forEach(function (_e, Je) {
                H[++q] = [Je, _e];
              }),
              H
            );
          }
          function Su(L, q) {
            return function (H) {
              return L(q(H));
            };
          }
          function pr(L, q) {
            for (var H = -1, _e = L.length, Je = 0, _t = []; ++H < _e; ) {
              var en = L[H];
              (en === q || en === b) && ((L[H] = b), (_t[Je++] = H));
            }
            return _t;
          }
          function ji(L) {
            var q = -1,
              H = Array(L.size);
            return (
              L.forEach(function (_e) {
                H[++q] = _e;
              }),
              H
            );
          }
          function yd(L) {
            var q = -1,
              H = Array(L.size);
            return (
              L.forEach(function (_e) {
                H[++q] = [_e, _e];
              }),
              H
            );
          }
          function Qs(L, q, H) {
            for (var _e = H - 1, Je = L.length; ++_e < Je; ) if (L[_e] === q) return _e;
            return -1;
          }
          function Ed(L, q, H) {
            for (var _e = H + 1; _e--; ) if (L[_e] === q) return _e;
            return _e;
          }
          function Ao(L) {
            return la(L) ? Xc(L) : pd(L);
          }
          function ir(L) {
            return la(L) ? jc(L) : zc(L);
          }
          function Xs(L) {
            for (var q = L.length; q-- && Tt.test(L.charAt(q)); );
            return q;
          }
          var Qc = Zs(cd);
          function Xc(L) {
            for (var q = (Ro.lastIndex = 0); Ro.test(L); ) ++q;
            return q;
          }
          function jc(L) {
            return L.match(Ro) || [];
          }
          function bd(L) {
            return L.match(ld) || [];
          }
          var wd = function L(q) {
              q = q == null ? Ut : ua.defaults(Ut.Object(), q, ua.pick(Ut, Pc));
              var H = q.Array,
                _e = q.Date,
                Je = q.Error,
                _t = q.Function,
                en = q.Math,
                St = q.Object,
                Ya = q.RegExp,
                xd = q.String,
                gr = q.TypeError,
                ki = H.prototype,
                ku = _t.prototype,
                Jr = St.prototype,
                ca = q['__core-js_shared__'],
                Za = ku.toString,
                vt = Jr.hasOwnProperty,
                fa = 0,
                js = (function () {
                  var n = /[^.]+$/.exec((ca && ca.keys && ca.keys.IE_PROTO) || '');
                  return n ? 'Symbol(src)_1.' + n : '';
                })(),
                Va = Jr.toString,
                Js = Za.call(St),
                Jc = Ut._,
                ef = Ya(
                  '^' +
                    Za.call(vt)
                      .replace(me, '\\$&')
                      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
                    '$'
                ),
                Qa = du ? q.Buffer : a,
                Ni = q.Symbol,
                Xa = q.Uint8Array,
                Nu = Qa ? Qa.allocUnsafe : a,
                Dr = Su(St.getPrototypeOf, St),
                el = St.create,
                tl = Jr.propertyIsEnumerable,
                nl = ki.splice,
                tf = Ni ? Ni.isConcatSpreadable : a,
                Ti = Ni ? Ni.iterator : a,
                Oo = Ni ? Ni.toStringTag : a,
                ja = (function () {
                  try {
                    var n = uo(St, 'defineProperty');
                    return n({}, '', {}), n;
                  } catch {}
                })(),
                nf = q.clearTimeout !== Ut.clearTimeout && q.clearTimeout,
                It = _e && _e.now !== Ut.Date.now && _e.now,
                Tu = q.setTimeout !== Ut.setTimeout && q.setTimeout,
                Mo = en.ceil,
                Ji = en.floor,
                rl = St.getOwnPropertySymbols,
                Ru = Qa ? Qa.isBuffer : a,
                da = q.isFinite,
                il = ki.join,
                pa = Su(St.keys, St),
                tn = en.max,
                Nn = en.min,
                Sd = _e.now,
                rf = q.parseInt,
                Ja = en.random,
                ol = ki.reverse,
                es = uo(q, 'DataView'),
                Io = uo(q, 'Map'),
                ts = uo(q, 'Promise'),
                eo = uo(q, 'Set'),
                ns = uo(q, 'WeakMap'),
                ga = uo(St, 'create'),
                al = ns && new ns(),
                ha = {},
                Cu = co(es),
                to = co(Io),
                of = co(ts),
                ma = co(eo),
                ei = co(ns),
                no = Ni ? Ni.prototype : a,
                or = no ? no.valueOf : a,
                sl = no ? no.toString : a;
              function y(n) {
                if (rn(n) && !tt(n) && !(n instanceof et)) {
                  if (n instanceof Tn) return n;
                  if (vt.call(n, '__wrapped__')) return If(n);
                }
                return new Tn(n);
              }
              var _a = (function () {
                function n() {}
                return function (r) {
                  if (!Jt(r)) return {};
                  if (el) return el(r);
                  n.prototype = r;
                  var s = new n();
                  return (n.prototype = a), s;
                };
              })();
              function ti() {}
              function Tn(n, r) {
                (this.__wrapped__ = n),
                  (this.__actions__ = []),
                  (this.__chain__ = !!r),
                  (this.__index__ = 0),
                  (this.__values__ = a);
              }
              (y.templateSettings = { escape: Z, evaluate: fe, interpolate: Ye, variable: '', imports: { _: y } }),
                (y.prototype = ti.prototype),
                (y.prototype.constructor = y),
                (Tn.prototype = _a(ti.prototype)),
                (Tn.prototype.constructor = Tn);
              function et(n) {
                (this.__wrapped__ = n),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = C),
                  (this.__views__ = []);
              }
              function ll() {
                var n = new et(this.__wrapped__);
                return (
                  (n.__actions__ = Bn(this.__actions__)),
                  (n.__dir__ = this.__dir__),
                  (n.__filtered__ = this.__filtered__),
                  (n.__iteratees__ = Bn(this.__iteratees__)),
                  (n.__takeCount__ = this.__takeCount__),
                  (n.__views__ = Bn(this.__views__)),
                  n
                );
              }
              function Au() {
                if (this.__filtered__) {
                  var n = new et(this);
                  (n.__dir__ = -1), (n.__filtered__ = !0);
                } else (n = this.clone()), (n.__dir__ *= -1);
                return n;
              }
              function va() {
                var n = this.__wrapped__.value(),
                  r = this.__dir__,
                  s = tt(n),
                  f = r < 0,
                  h = s ? n.length : 0,
                  E = ic(0, h, this.__views__),
                  T = E.start,
                  O = E.end,
                  D = O - T,
                  Q = f ? O : T - 1,
                  X = this.__iteratees__,
                  te = X.length,
                  he = 0,
                  De = Nn(D, this.__takeCount__);
                if (!s || (!f && h == D && De == D)) return Na(n, this.__actions__);
                var Qe = [];
                e: for (; D-- && he < De; ) {
                  Q += r;
                  for (var ot = -1, Xe = n[Q]; ++ot < te; ) {
                    var ft = X[ot],
                      ht = ft.iteratee,
                      Kr = ft.type,
                      cr = ht(Xe);
                    if (Kr == ne) Xe = cr;
                    else if (!cr) {
                      if (Kr == pe) continue e;
                      break e;
                    }
                  }
                  Qe[he++] = Xe;
                }
                return Qe;
              }
              (et.prototype = _a(ti.prototype)), (et.prototype.constructor = et);
              function Zn(n) {
                var r = -1,
                  s = n == null ? 0 : n.length;
                for (this.clear(); ++r < s; ) {
                  var f = n[r];
                  this.set(f[0], f[1]);
                }
              }
              function Lt() {
                (this.__data__ = ga ? ga(null) : {}), (this.size = 0);
              }
              function At(n) {
                var r = this.has(n) && delete this.__data__[n];
                return (this.size -= r ? 1 : 0), r;
              }
              function ro(n) {
                var r = this.__data__;
                if (ga) {
                  var s = r[n];
                  return s === S ? a : s;
                }
                return vt.call(r, n) ? r[n] : a;
              }
              function Rn(n) {
                var r = this.__data__;
                return ga ? r[n] !== a : vt.call(r, n);
              }
              function Vn(n, r) {
                var s = this.__data__;
                return (this.size += this.has(n) ? 0 : 1), (s[n] = ga && r === a ? S : r), this;
              }
              (Zn.prototype.clear = Lt),
                (Zn.prototype.delete = At),
                (Zn.prototype.get = ro),
                (Zn.prototype.has = Rn),
                (Zn.prototype.set = Vn);
              function Pn(n) {
                var r = -1,
                  s = n == null ? 0 : n.length;
                for (this.clear(); ++r < s; ) {
                  var f = n[r];
                  this.set(f[0], f[1]);
                }
              }
              function ya() {
                (this.__data__ = []), (this.size = 0);
              }
              function Qn(n) {
                var r = this.__data__,
                  s = An(r, n);
                if (s < 0) return !1;
                var f = r.length - 1;
                return s == f ? r.pop() : nl.call(r, s, 1), --this.size, !0;
              }
              function ul(n) {
                var r = this.__data__,
                  s = An(r, n);
                return s < 0 ? a : r[s][1];
              }
              function af(n) {
                return An(this.__data__, n) > -1;
              }
              function sf(n, r) {
                var s = this.__data__,
                  f = An(s, n);
                return f < 0 ? (++this.size, s.push([n, r])) : (s[f][1] = r), this;
              }
              (Pn.prototype.clear = ya),
                (Pn.prototype.delete = Qn),
                (Pn.prototype.get = ul),
                (Pn.prototype.has = af),
                (Pn.prototype.set = sf);
              function hr(n) {
                var r = -1,
                  s = n == null ? 0 : n.length;
                for (this.clear(); ++r < s; ) {
                  var f = n[r];
                  this.set(f[0], f[1]);
                }
              }
              function lf() {
                (this.size = 0), (this.__data__ = { hash: new Zn(), map: new (Io || Pn)(), string: new Zn() });
              }
              function Ri(n) {
                var r = vs(this, n).delete(n);
                return (this.size -= r ? 1 : 0), r;
              }
              function cl(n) {
                return vs(this, n).get(n);
              }
              function Ou(n) {
                return vs(this, n).has(n);
              }
              function uf(n, r) {
                var s = vs(this, n),
                  f = s.size;
                return s.set(n, r), (this.size += s.size == f ? 0 : 1), this;
              }
              (hr.prototype.clear = lf),
                (hr.prototype.delete = Ri),
                (hr.prototype.get = cl),
                (hr.prototype.has = Ou),
                (hr.prototype.set = uf);
              function Lo(n) {
                var r = -1,
                  s = n == null ? 0 : n.length;
                for (this.__data__ = new hr(); ++r < s; ) this.add(n[r]);
              }
              function io(n) {
                return this.__data__.set(n, S), this;
              }
              function Ea(n) {
                return this.__data__.has(n);
              }
              (Lo.prototype.add = Lo.prototype.push = io), (Lo.prototype.has = Ea);
              function Cn(n) {
                var r = (this.__data__ = new Pn(n));
                this.size = r.size;
              }
              function fl() {
                (this.__data__ = new Pn()), (this.size = 0);
              }
              function dl(n) {
                var r = this.__data__,
                  s = r.delete(n);
                return (this.size = r.size), s;
              }
              function mr(n) {
                return this.__data__.get(n);
              }
              function _r(n) {
                return this.__data__.has(n);
              }
              function Do(n, r) {
                var s = this.__data__;
                if (s instanceof Pn) {
                  var f = s.__data__;
                  if (!Io || f.length < g - 1) return f.push([n, r]), (this.size = ++s.size), this;
                  s = this.__data__ = new hr(f);
                }
                return s.set(n, r), (this.size = s.size), this;
              }
              (Cn.prototype.clear = fl),
                (Cn.prototype.delete = dl),
                (Cn.prototype.get = mr),
                (Cn.prototype.has = _r),
                (Cn.prototype.set = Do);
              function ni(n, r) {
                var s = tt(n),
                  f = !s && As(n),
                  h = !s && !f && Pa(n),
                  E = !s && !f && !h && tu(n),
                  T = s || f || h || E,
                  O = T ? wu(n.length, xd) : [],
                  D = O.length;
                for (var Q in n)
                  (r || vt.call(n, Q)) &&
                    !(
                      T &&
                      (Q == 'length' ||
                        (h && (Q == 'offset' || Q == 'parent')) ||
                        (E && (Q == 'buffer' || Q == 'byteLength' || Q == 'byteOffset')) ||
                        $t(Q, D))
                    ) &&
                    O.push(Q);
                return O;
              }
              function ri(n) {
                var r = n.length;
                return r ? n[Sa(0, r - 1)] : a;
              }
              function Po(n, r) {
                return Ul(Bn(n), Ci(r, 0, n.length));
              }
              function cf(n) {
                return Ul(Bn(n));
              }
              function rs(n, r, s) {
                ((s !== a && !zi(n[r], s)) || (s === a && !(r in n))) && ii(n, r, s);
              }
              function Bo(n, r, s) {
                var f = n[r];
                (!(vt.call(n, r) && zi(f, s)) || (s === a && !(r in n))) && ii(n, r, s);
              }
              function An(n, r) {
                for (var s = n.length; s--; ) if (zi(n[s][0], r)) return s;
                return -1;
              }
              function ar(n, r, s, f) {
                return (
                  ai(n, function (h, E, T) {
                    r(f, h, s(h), T);
                  }),
                  f
                );
              }
              function Dt(n, r) {
                return n && Br(r, In(r), n);
              }
              function Pr(n, r) {
                return n && Br(r, Nr(r), n);
              }
              function ii(n, r, s) {
                r == '__proto__' && ja
                  ? ja(n, r, { configurable: !0, enumerable: !0, value: s, writable: !0 })
                  : (n[r] = s);
              }
              function pl(n, r) {
                for (var s = -1, f = r.length, h = H(f), E = n == null; ++s < f; ) h[s] = E ? a : Zd(n, r[s]);
                return h;
              }
              function Ci(n, r, s) {
                return n === n && (s !== a && (n = n <= s ? n : s), r !== a && (n = n >= r ? n : r)), n;
              }
              function Xn(n, r, s, f, h, E) {
                var T,
                  O = r & N,
                  D = r & I,
                  Q = r & z;
                if ((s && (T = h ? s(n, f, h, E) : s(n)), T !== a)) return T;
                if (!Jt(n)) return n;
                var X = tt(n);
                if (X) {
                  if (((T = Es(n)), !O)) return Bn(n, T);
                } else {
                  var te = yn(n),
                    he = te == Ot || te == Gt;
                  if (Pa(n)) return qu(n, O);
                  if (te == wn || te == Me || (he && !h)) {
                    if (((T = D || he ? {} : En(n)), !O)) return D ? Nd(n, Pr(T, n)) : Nl(n, Dt(T, n));
                  } else {
                    if (!Et[te]) return h ? n : {};
                    T = Td(n, te, O);
                  }
                }
                E || (E = new Cn());
                var De = E.get(n);
                if (De) return De;
                E.set(n, T),
                  hg(n)
                    ? n.forEach(function (Xe) {
                        T.add(Xn(Xe, r, s, Xe, n, E));
                      })
                    : pg(n) &&
                      n.forEach(function (Xe, ft) {
                        T.set(ft, Xn(Xe, r, s, ft, n, E));
                      });
                var Qe = Q ? (D ? _s : ms) : D ? Nr : In,
                  ot = X ? a : Qe(n);
                return (
                  kn(ot || n, function (Xe, ft) {
                    ot && ((ft = Xe), (Xe = n[ft])), Bo(T, ft, Xn(Xe, r, s, ft, n, E));
                  }),
                  T
                );
              }
              function ff(n) {
                var r = In(n);
                return function (s) {
                  return is(s, n, r);
                };
              }
              function is(n, r, s) {
                var f = s.length;
                if (n == null) return !f;
                for (n = St(n); f--; ) {
                  var h = s[f],
                    E = r[h],
                    T = n[h];
                  if ((T === a && !(h in n)) || !E(T)) return !1;
                }
                return !0;
              }
              function Mu(n, r, s) {
                if (typeof n != 'function') throw new gr(v);
                return Ia(function () {
                  n.apply(a, s);
                }, r);
              }
              function oi(n, r, s, f) {
                var h = -1,
                  E = qs,
                  T = !0,
                  O = n.length,
                  D = [],
                  Q = r.length;
                if (!O) return D;
                s && (r = Ct(r, rr(s))),
                  f ? ((E = mu), (T = !1)) : r.length >= g && ((E = Si), (T = !1), (r = new Lo(r)));
                e: for (; ++h < O; ) {
                  var X = n[h],
                    te = s == null ? X : s(X);
                  if (((X = f || X !== 0 ? X : 0), T && te === te)) {
                    for (var he = Q; he--; ) if (r[he] === te) continue e;
                    D.push(X);
                  } else E(r, te, f) || D.push(X);
                }
                return D;
              }
              var ai = wr(sr),
                df = wr(oo, !0);
              function os(n, r) {
                var s = !0;
                return (
                  ai(n, function (f, h, E) {
                    return (s = !!r(f, h, E)), s;
                  }),
                  s
                );
              }
              function Uo(n, r, s) {
                for (var f = -1, h = n.length; ++f < h; ) {
                  var E = n[f],
                    T = r(E);
                  if (T != null && (O === a ? T === T && !Gr(T) : s(T, O)))
                    var O = T,
                      D = E;
                }
                return D;
              }
              function pf(n, r, s, f) {
                var h = n.length;
                for (
                  s = it(s),
                    s < 0 && (s = -s > h ? 0 : h + s),
                    f = f === a || f > h ? h : it(f),
                    f < 0 && (f += h),
                    f = s > f ? 0 : _g(f);
                  s < f;

                )
                  n[s++] = r;
                return n;
              }
              function Iu(n, r) {
                var s = [];
                return (
                  ai(n, function (f, h, E) {
                    r(f, h, E) && s.push(f);
                  }),
                  s
                );
              }
              function Vt(n, r, s, f, h) {
                var E = -1,
                  T = n.length;
                for (s || (s = Dl), h || (h = []); ++E < T; ) {
                  var O = n[E];
                  r > 0 && s(O) ? (r > 1 ? Vt(O, r - 1, s, f, h) : Xi(h, O)) : f || (h[h.length] = O);
                }
                return h;
              }
              var gl = Rl(),
                as = Rl(!0);
              function sr(n, r) {
                return n && gl(n, r, In);
              }
              function oo(n, r) {
                return n && as(n, r, In);
              }
              function ba(n, r) {
                return Qi(r, function (s) {
                  return Xo(n[s]);
                });
              }
              function Ai(n, r) {
                r = ui(r, n);
                for (var s = 0, f = r.length; n != null && s < f; ) n = n[Fr(r[s++])];
                return s && s == f ? n : a;
              }
              function hl(n, r, s) {
                var f = r(n);
                return tt(n) ? f : Xi(f, s(n));
              }
              function _n(n) {
                return n == null ? (n === a ? dr : Fi) : Oo && Oo in St(n) ? Ll(n) : ac(n);
              }
              function ao(n, r) {
                return n > r;
              }
              function vr(n, r) {
                return n != null && vt.call(n, r);
              }
              function zo(n, r) {
                return n != null && r in St(n);
              }
              function Lu(n, r, s) {
                return n >= Nn(r, s) && n < tn(r, s);
              }
              function ml(n, r, s) {
                for (var f = s ? mu : qs, h = n[0].length, E = n.length, T = E, O = H(E), D = 1 / 0, Q = []; T--; ) {
                  var X = n[T];
                  T && r && (X = Ct(X, rr(r))),
                    (D = Nn(X.length, D)),
                    (O[T] = !s && (r || (h >= 120 && X.length >= 120)) ? new Lo(T && X) : a);
                }
                X = n[0];
                var te = -1,
                  he = O[0];
                e: for (; ++te < h && Q.length < D; ) {
                  var De = X[te],
                    Qe = r ? r(De) : De;
                  if (((De = s || De !== 0 ? De : 0), !(he ? Si(he, Qe) : f(Q, Qe, s)))) {
                    for (T = E; --T; ) {
                      var ot = O[T];
                      if (!(ot ? Si(ot, Qe) : f(n[T], Qe, s))) continue e;
                    }
                    he && he.push(Qe), Q.push(De);
                  }
                }
                return Q;
              }
              function Oi(n, r, s, f) {
                return (
                  sr(n, function (h, E, T) {
                    r(f, s(h), E, T);
                  }),
                  f
                );
              }
              function yr(n, r, s) {
                (r = ui(r, n)), (n = fn(n, r));
                var f = n == null ? n : n[Fr($n(r))];
                return f == null ? a : Dn(f, n, s);
              }
              function _l(n) {
                return rn(n) && _n(n) == Me;
              }
              function gf(n) {
                return rn(n) && _n(n) == Gn;
              }
              function Mi(n) {
                return rn(n) && _n(n) == Fe;
              }
              function Er(n, r, s, f, h) {
                return n === r
                  ? !0
                  : n == null || r == null || (!rn(n) && !rn(r))
                    ? n !== n && r !== r
                    : vl(n, r, s, f, Er, h);
              }
              function vl(n, r, s, f, h, E) {
                var T = tt(n),
                  O = tt(r),
                  D = T ? $e : yn(n),
                  Q = O ? $e : yn(r);
                (D = D == Me ? wn : D), (Q = Q == Me ? wn : Q);
                var X = D == wn,
                  te = Q == wn,
                  he = D == Q;
                if (he && Pa(n)) {
                  if (!Pa(r)) return !1;
                  (T = !0), (X = !1);
                }
                if (he && !X) return E || (E = new Cn()), T || tu(n) ? nc(n, r, s, f, h, E) : rc(n, r, D, s, f, h, E);
                if (!(s & G)) {
                  var De = X && vt.call(n, '__wrapped__'),
                    Qe = te && vt.call(r, '__wrapped__');
                  if (De || Qe) {
                    var ot = De ? n.value() : n,
                      Xe = Qe ? r.value() : r;
                    return E || (E = new Cn()), h(ot, Xe, s, f, E);
                  }
                }
                return he ? (E || (E = new Cn()), kf(n, r, s, f, h, E)) : !1;
              }
              function hf(n) {
                return rn(n) && yn(n) == un;
              }
              function wa(n, r, s, f) {
                var h = s.length,
                  E = h,
                  T = !f;
                if (n == null) return !E;
                for (n = St(n); h--; ) {
                  var O = s[h];
                  if (T && O[2] ? O[1] !== n[O[0]] : !(O[0] in n)) return !1;
                }
                for (; ++h < E; ) {
                  O = s[h];
                  var D = O[0],
                    Q = n[D],
                    X = O[1];
                  if (T && O[2]) {
                    if (Q === a && !(D in n)) return !1;
                  } else {
                    var te = new Cn();
                    if (f) var he = f(Q, X, D, n, r, te);
                    if (!(he === a ? Er(X, Q, G | F, f, te) : he)) return !1;
                  }
                }
                return !0;
              }
              function Du(n) {
                if (!Jt(n) || Rf(n)) return !1;
                var r = Xo(n) ? ef : Ls;
                return r.test(co(n));
              }
              function ss(n) {
                return rn(n) && _n(n) == Hn;
              }
              function si(n) {
                return rn(n) && yn(n) == Kt;
              }
              function ls(n) {
                return rn(n) && Yf(n.length) && !!wt[_n(n)];
              }
              function xa(n) {
                return typeof n == 'function'
                  ? n
                  : n == null
                    ? Tr
                    : typeof n == 'object'
                      ? tt(n)
                        ? zt(n[0], n[1])
                        : yl(n)
                      : Rg(n);
              }
              function Ii(n) {
                if (!Bi(n)) return pa(n);
                var r = [];
                for (var s in St(n)) vt.call(n, s) && s != 'constructor' && r.push(s);
                return r;
              }
              function Pu(n) {
                if (!Jt(n)) return Of(n);
                var r = Bi(n),
                  s = [];
                for (var f in n) (f == 'constructor' && (r || !vt.call(n, f))) || s.push(f);
                return s;
              }
              function so(n, r) {
                return n < r;
              }
              function Bu(n, r) {
                var s = -1,
                  f = kr(n) ? H(n.length) : [];
                return (
                  ai(n, function (h, E, T) {
                    f[++s] = r(h, E, T);
                  }),
                  f
                );
              }
              function yl(n) {
                var r = ys(n);
                return r.length == 1 && r[0][2]
                  ? Pl(r[0][0], r[0][1])
                  : function (s) {
                      return s === n || wa(s, n, r);
                    };
              }
              function zt(n, r) {
                return Ee(n) && ws(r)
                  ? Pl(Fr(n), r)
                  : function (s) {
                      var f = Zd(s, n);
                      return f === a && f === r ? Vd(s, n) : Er(r, f, G | F);
                    };
              }
              function $o(n, r, s, f, h) {
                n !== r &&
                  gl(
                    r,
                    function (E, T) {
                      if ((h || (h = new Cn()), Jt(E))) Uu(n, r, T, s, $o, f, h);
                      else {
                        var O = f ? f(di(n, T), E, T + '', n, r, h) : a;
                        O === a && (O = E), rs(n, T, O);
                      }
                    },
                    Nr
                  );
              }
              function Uu(n, r, s, f, h, E, T) {
                var O = di(n, s),
                  D = di(r, s),
                  Q = T.get(D);
                if (Q) {
                  rs(n, s, Q);
                  return;
                }
                var X = E ? E(O, D, s + '', n, r, T) : a,
                  te = X === a;
                if (te) {
                  var he = tt(D),
                    De = !he && Pa(D),
                    Qe = !he && !De && tu(D);
                  (X = D),
                    he || De || Qe
                      ? tt(O)
                        ? (X = O)
                        : sn(O)
                          ? (X = Bn(O))
                          : De
                            ? ((te = !1), (X = qu(D, !0)))
                            : Qe
                              ? ((te = !1), (X = Ef(D, !0)))
                              : (X = [])
                      : Sc(D) || As(D)
                        ? ((X = O), As(O) ? (X = vg(O)) : (!Jt(O) || Xo(O)) && (X = En(D)))
                        : (te = !1);
                }
                te && (T.set(D, X), h(X, D, f, E, T), T.delete(D)), rs(n, s, X);
              }
              function El(n, r) {
                var s = n.length;
                if (s) return (r += r < 0 ? s : 0), $t(r, s) ? n[r] : a;
              }
              function us(n, r, s) {
                r.length
                  ? (r = Ct(r, function (E) {
                      return tt(E)
                        ? function (T) {
                            return Ai(T, E.length === 1 ? E[0] : E);
                          }
                        : E;
                    }))
                  : (r = [Tr]);
                var f = -1;
                r = Ct(r, rr(Ke()));
                var h = Bu(n, function (E, T, O) {
                  var D = Ct(r, function (Q) {
                    return Q(E);
                  });
                  return { criteria: D, index: ++f, value: E };
                });
                return hd(h, function (E, T) {
                  return kd(E, T, s);
                });
              }
              function zu(n, r) {
                return lo(n, r, function (s, f) {
                  return Vd(n, f);
                });
              }
              function lo(n, r, s) {
                for (var f = -1, h = r.length, E = {}; ++f < h; ) {
                  var T = r[f],
                    O = Ai(n, T);
                  s(O, T) && Ho(E, ui(T, n), O);
                }
                return E;
              }
              function Ht(n) {
                return function (r) {
                  return Ai(r, n);
                };
              }
              function Xt(n, r, s, f) {
                var h = f ? yu : aa,
                  E = -1,
                  T = r.length,
                  O = n;
                for (n === r && (r = Bn(r)), s && (O = Ct(n, rr(s))); ++E < T; )
                  for (var D = 0, Q = r[E], X = s ? s(Q) : Q; (D = h(O, X, D, f)) > -1; )
                    O !== n && nl.call(O, D, 1), nl.call(n, D, 1);
                return n;
              }
              function on(n, r) {
                for (var s = n ? r.length : 0, f = s - 1; s--; ) {
                  var h = r[s];
                  if (s == f || h !== E) {
                    var E = h;
                    $t(h) ? nl.call(n, h, 1) : xl(n, h);
                  }
                }
                return n;
              }
              function Sa(n, r) {
                return n + Ji(Ja() * (r - n + 1));
              }
              function cs(n, r, s, f) {
                for (var h = -1, E = tn(Mo((r - n) / (s || 1)), 0), T = H(E); E--; ) (T[f ? E : ++h] = n), (n += s);
                return T;
              }
              function Fo(n, r) {
                var s = '';
                if (!n || r < 1 || r > B) return s;
                do r % 2 && (s += n), (r = Ji(r / 2)), r && (n += n);
                while (r);
                return s;
              }
              function rt(n, r) {
                return lr(Bl(n, r, Tr), n + '');
              }
              function On(n) {
                return ri(nu(n));
              }
              function $u(n, r) {
                var s = nu(n);
                return Ul(s, Ci(r, 0, s.length));
              }
              function Ho(n, r, s, f) {
                if (!Jt(n)) return n;
                r = ui(r, n);
                for (var h = -1, E = r.length, T = E - 1, O = n; O != null && ++h < E; ) {
                  var D = Fr(r[h]),
                    Q = s;
                  if (D === '__proto__' || D === 'constructor' || D === 'prototype') return n;
                  if (h != T) {
                    var X = O[D];
                    (Q = f ? f(X, D, O) : a), Q === a && (Q = Jt(X) ? X : $t(r[h + 1]) ? [] : {});
                  }
                  Bo(O, D, Q), (O = O[D]);
                }
                return n;
              }
              var bl = al
                  ? function (n, r) {
                      return al.set(n, r), n;
                    }
                  : Tr,
                li = ja
                  ? function (n, r) {
                      return ja(n, 'toString', { configurable: !0, enumerable: !1, value: Xd(r), writable: !0 });
                    }
                  : Tr;
              function br(n) {
                return Ul(nu(n));
              }
              function Mn(n, r, s) {
                var f = -1,
                  h = n.length;
                r < 0 && (r = -r > h ? 0 : h + r),
                  (s = s > h ? h : s),
                  s < 0 && (s += h),
                  (h = r > s ? 0 : (s - r) >>> 0),
                  (r >>>= 0);
                for (var E = H(h); ++f < h; ) E[f] = n[f + r];
                return E;
              }
              function Fu(n, r) {
                var s;
                return (
                  ai(n, function (f, h, E) {
                    return (s = r(f, h, E)), !s;
                  }),
                  !!s
                );
              }
              function ka(n, r, s) {
                var f = 0,
                  h = n == null ? f : n.length;
                if (typeof r == 'number' && r === r && h <= xe) {
                  for (; f < h; ) {
                    var E = (f + h) >>> 1,
                      T = n[E];
                    T !== null && !Gr(T) && (s ? T <= r : T < r) ? (f = E + 1) : (h = E);
                  }
                  return h;
                }
                return wl(n, r, Tr, s);
              }
              function wl(n, r, s, f) {
                var h = 0,
                  E = n == null ? 0 : n.length;
                if (E === 0) return 0;
                r = s(r);
                for (var T = r !== r, O = r === null, D = Gr(r), Q = r === a; h < E; ) {
                  var X = Ji((h + E) / 2),
                    te = s(n[X]),
                    he = te !== a,
                    De = te === null,
                    Qe = te === te,
                    ot = Gr(te);
                  if (T) var Xe = f || Qe;
                  else
                    Q
                      ? (Xe = Qe && (f || he))
                      : O
                        ? (Xe = Qe && he && (f || !De))
                        : D
                          ? (Xe = Qe && he && !De && (f || !ot))
                          : De || ot
                            ? (Xe = !1)
                            : (Xe = f ? te <= r : te < r);
                  Xe ? (h = X + 1) : (E = X);
                }
                return Nn(E, K);
              }
              function Hu(n, r) {
                for (var s = -1, f = n.length, h = 0, E = []; ++s < f; ) {
                  var T = n[s],
                    O = r ? r(T) : T;
                  if (!s || !zi(O, D)) {
                    var D = O;
                    E[h++] = T === 0 ? 0 : T;
                  }
                }
                return E;
              }
              function Wu(n) {
                return typeof n == 'number' ? n : Gr(n) ? Y : +n;
              }
              function jn(n) {
                if (typeof n == 'string') return n;
                if (tt(n)) return Ct(n, jn) + '';
                if (Gr(n)) return sl ? sl.call(n) : '';
                var r = n + '';
                return r == '0' && 1 / n == -1 / 0 ? '-0' : r;
              }
              function Li(n, r, s) {
                var f = -1,
                  h = qs,
                  E = n.length,
                  T = !0,
                  O = [],
                  D = O;
                if (s) (T = !1), (h = mu);
                else if (E >= g) {
                  var Q = r ? null : Sf(n);
                  if (Q) return ji(Q);
                  (T = !1), (h = Si), (D = new Lo());
                } else D = r ? [] : O;
                e: for (; ++f < E; ) {
                  var X = n[f],
                    te = r ? r(X) : X;
                  if (((X = s || X !== 0 ? X : 0), T && te === te)) {
                    for (var he = D.length; he--; ) if (D[he] === te) continue e;
                    r && D.push(te), O.push(X);
                  } else h(D, te, s) || (D !== O && D.push(te), O.push(X));
                }
                return O;
              }
              function xl(n, r) {
                return (r = ui(r, n)), (n = fn(n, r)), n == null || delete n[Fr($n(r))];
              }
              function Gu(n, r, s, f) {
                return Ho(n, r, s(Ai(n, r)), f);
              }
              function fs(n, r, s, f) {
                for (var h = n.length, E = f ? h : -1; (f ? E-- : ++E < h) && r(n[E], E, n); );
                return s ? Mn(n, f ? 0 : E, f ? E + 1 : h) : Mn(n, f ? E + 1 : 0, f ? h : E);
              }
              function Na(n, r) {
                var s = n;
                return (
                  s instanceof et && (s = s.value()),
                  _u(
                    r,
                    function (f, h) {
                      return h.func.apply(h.thisArg, Xi([f], h.args));
                    },
                    s
                  )
                );
              }
              function Sl(n, r, s) {
                var f = n.length;
                if (f < 2) return f ? Li(n[0]) : [];
                for (var h = -1, E = H(f); ++h < f; )
                  for (var T = n[h], O = -1; ++O < f; ) O != h && (E[h] = oi(E[h] || T, n[O], r, s));
                return Li(Vt(E, 1), r, s);
              }
              function ds(n, r, s) {
                for (var f = -1, h = n.length, E = r.length, T = {}; ++f < h; ) {
                  var O = f < E ? r[f] : a;
                  s(T, n[f], O);
                }
                return T;
              }
              function Ta(n) {
                return sn(n) ? n : [];
              }
              function kl(n) {
                return typeof n == 'function' ? n : Tr;
              }
              function ui(n, r) {
                return tt(n) ? n : Ee(n, r) ? [n] : uc(kt(n));
              }
              var mf = rt;
              function Di(n, r, s) {
                var f = n.length;
                return (s = s === a ? f : s), !r && s >= f ? n : Mn(n, r, s);
              }
              var Ku =
                nf ||
                function (n) {
                  return Ut.clearTimeout(n);
                };
              function qu(n, r) {
                if (r) return n.slice();
                var s = n.length,
                  f = Nu ? Nu(s) : new n.constructor(s);
                return n.copy(f), f;
              }
              function ps(n) {
                var r = new n.constructor(n.byteLength);
                return new Xa(r).set(new Xa(n)), r;
              }
              function _f(n, r) {
                var s = r ? ps(n.buffer) : n.buffer;
                return new n.constructor(s, n.byteOffset, n.byteLength);
              }
              function vf(n) {
                var r = new n.constructor(n.source, Fa.exec(n));
                return (r.lastIndex = n.lastIndex), r;
              }
              function yf(n) {
                return or ? St(or.call(n)) : {};
              }
              function Ef(n, r) {
                var s = r ? ps(n.buffer) : n.buffer;
                return new n.constructor(s, n.byteOffset, n.length);
              }
              function Yu(n, r) {
                if (n !== r) {
                  var s = n !== a,
                    f = n === null,
                    h = n === n,
                    E = Gr(n),
                    T = r !== a,
                    O = r === null,
                    D = r === r,
                    Q = Gr(r);
                  if ((!O && !Q && !E && n > r) || (E && T && D && !O && !Q) || (f && T && D) || (!s && D) || !h)
                    return 1;
                  if ((!f && !E && !Q && n < r) || (Q && s && h && !f && !E) || (O && s && h) || (!T && h) || !D)
                    return -1;
                }
                return 0;
              }
              function kd(n, r, s) {
                for (var f = -1, h = n.criteria, E = r.criteria, T = h.length, O = s.length; ++f < T; ) {
                  var D = Yu(h[f], E[f]);
                  if (D) {
                    if (f >= O) return D;
                    var Q = s[f];
                    return D * (Q == 'desc' ? -1 : 1);
                  }
                }
                return n.index - r.index;
              }
              function bf(n, r, s, f) {
                for (
                  var h = -1, E = n.length, T = s.length, O = -1, D = r.length, Q = tn(E - T, 0), X = H(D + Q), te = !f;
                  ++O < D;

                )
                  X[O] = r[O];
                for (; ++h < T; ) (te || h < E) && (X[s[h]] = n[h]);
                for (; Q--; ) X[O++] = n[h++];
                return X;
              }
              function Zu(n, r, s, f) {
                for (
                  var h = -1,
                    E = n.length,
                    T = -1,
                    O = s.length,
                    D = -1,
                    Q = r.length,
                    X = tn(E - O, 0),
                    te = H(X + Q),
                    he = !f;
                  ++h < X;

                )
                  te[h] = n[h];
                for (var De = h; ++D < Q; ) te[De + D] = r[D];
                for (; ++T < O; ) (he || h < E) && (te[De + s[T]] = n[h++]);
                return te;
              }
              function Bn(n, r) {
                var s = -1,
                  f = n.length;
                for (r || (r = H(f)); ++s < f; ) r[s] = n[s];
                return r;
              }
              function Br(n, r, s, f) {
                var h = !s;
                s || (s = {});
                for (var E = -1, T = r.length; ++E < T; ) {
                  var O = r[E],
                    D = f ? f(s[O], n[O], O, s, n) : a;
                  D === a && (D = n[O]), h ? ii(s, O, D) : Bo(s, O, D);
                }
                return s;
              }
              function Nl(n, r) {
                return Br(n, Ur(n), r);
              }
              function Nd(n, r) {
                return Br(n, Nf(n), r);
              }
              function Tl(n, r) {
                return function (s, f) {
                  var h = tt(s) ? gu : ar,
                    E = r ? r() : {};
                  return h(s, n, Ke(f, 2), E);
                };
              }
              function Ra(n) {
                return rt(function (r, s) {
                  var f = -1,
                    h = s.length,
                    E = h > 1 ? s[h - 1] : a,
                    T = h > 2 ? s[2] : a;
                  for (
                    E = n.length > 3 && typeof E == 'function' ? (h--, E) : a,
                      T && zn(s[0], s[1], T) && ((E = h < 3 ? a : E), (h = 1)),
                      r = St(r);
                    ++f < h;

                  ) {
                    var O = s[f];
                    O && n(r, O, f, E);
                  }
                  return r;
                });
              }
              function wr(n, r) {
                return function (s, f) {
                  if (s == null) return s;
                  if (!kr(s)) return n(s, f);
                  for (var h = s.length, E = r ? h : -1, T = St(s); (r ? E-- : ++E < h) && f(T[E], E, T) !== !1; );
                  return s;
                };
              }
              function Rl(n) {
                return function (r, s, f) {
                  for (var h = -1, E = St(r), T = f(r), O = T.length; O--; ) {
                    var D = T[n ? O : ++h];
                    if (s(E[D], D, E) === !1) break;
                  }
                  return r;
                };
              }
              function Cl(n, r, s) {
                var f = r & $,
                  h = Ca(n);
                function E() {
                  var T = this && this !== Ut && this instanceof E ? h : n;
                  return T.apply(f ? s : this, arguments);
                }
                return E;
              }
              function Vu(n) {
                return function (r) {
                  r = kt(r);
                  var s = la(r) ? ir(r) : a,
                    f = s ? s[0] : r.charAt(0),
                    h = s ? Di(s, 1).join('') : r.slice(1);
                  return f[n]() + h;
                };
              }
              function Wo(n) {
                return function (r) {
                  return _u(Ng(kg(r).replace(cu, '')), n, '');
                };
              }
              function Ca(n) {
                return function () {
                  var r = arguments;
                  switch (r.length) {
                    case 0:
                      return new n();
                    case 1:
                      return new n(r[0]);
                    case 2:
                      return new n(r[0], r[1]);
                    case 3:
                      return new n(r[0], r[1], r[2]);
                    case 4:
                      return new n(r[0], r[1], r[2], r[3]);
                    case 5:
                      return new n(r[0], r[1], r[2], r[3], r[4]);
                    case 6:
                      return new n(r[0], r[1], r[2], r[3], r[4], r[5]);
                    case 7:
                      return new n(r[0], r[1], r[2], r[3], r[4], r[5], r[6]);
                  }
                  var s = _a(n.prototype),
                    f = n.apply(s, r);
                  return Jt(f) ? f : s;
                };
              }
              function Qu(n, r, s) {
                var f = Ca(n);
                function h() {
                  for (var E = arguments.length, T = H(E), O = E, D = Pi(h); O--; ) T[O] = arguments[O];
                  var Q = E < 3 && T[0] !== D && T[E - 1] !== D ? [] : pr(T, D);
                  if (((E -= Q.length), E < s)) return Un(n, r, Aa, h.placeholder, a, T, Q, a, a, s - E);
                  var X = this && this !== Ut && this instanceof h ? f : n;
                  return Dn(X, this, T);
                }
                return h;
              }
              function Go(n) {
                return function (r, s, f) {
                  var h = St(r);
                  if (!kr(r)) {
                    var E = Ke(s, 3);
                    (r = In(r)),
                      (s = function (O) {
                        return E(h[O], O, h);
                      });
                  }
                  var T = n(r, s, f);
                  return T > -1 ? h[E ? r[T] : T] : a;
                };
              }
              function Al(n) {
                return fi(function (r) {
                  var s = r.length,
                    f = s,
                    h = Tn.prototype.thru;
                  for (n && r.reverse(); f--; ) {
                    var E = r[f];
                    if (typeof E != 'function') throw new gr(v);
                    if (h && !T && Oa(E) == 'wrapper') var T = new Tn([], !0);
                  }
                  for (f = T ? f : s; ++f < s; ) {
                    E = r[f];
                    var O = Oa(E),
                      D = O == 'wrapper' ? Il(E) : a;
                    D && bs(D[0]) && D[1] == (we | ae | de | ge) && !D[4].length && D[9] == 1
                      ? (T = T[Oa(D[0])].apply(T, D[3]))
                      : (T = E.length == 1 && bs(E) ? T[O]() : T.thru(E));
                  }
                  return function () {
                    var Q = arguments,
                      X = Q[0];
                    if (T && Q.length == 1 && tt(X)) return T.plant(X).value();
                    for (var te = 0, he = s ? r[te].apply(this, Q) : X; ++te < s; ) he = r[te].call(this, he);
                    return he;
                  };
                });
              }
              function Aa(n, r, s, f, h, E, T, O, D, Q) {
                var X = r & we,
                  te = r & $,
                  he = r & V,
                  De = r & (ae | Te),
                  Qe = r & ze,
                  ot = he ? a : Ca(n);
                function Xe() {
                  for (var ft = arguments.length, ht = H(ft), Kr = ft; Kr--; ) ht[Kr] = arguments[Kr];
                  if (De)
                    var cr = Pi(Xe),
                      qr = qc(ht, cr);
                  if ((f && (ht = bf(ht, f, h, De)), E && (ht = Zu(ht, E, T, De)), (ft -= qr), De && ft < Q)) {
                    var ln = pr(ht, cr);
                    return Un(n, r, Aa, Xe.placeholder, s, ht, ln, O, D, Q - ft);
                  }
                  var $i = te ? s : this,
                    Jo = he ? $i[n] : n;
                  return (
                    (ft = ht.length),
                    O ? (ht = zr(ht, O)) : Qe && ft > 1 && ht.reverse(),
                    X && D < ft && (ht.length = D),
                    this && this !== Ut && this instanceof Xe && (Jo = ot || Ca(Jo)),
                    Jo.apply($i, ht)
                  );
                }
                return Xe;
              }
              function wf(n, r) {
                return function (s, f) {
                  return Oi(s, n, r(f), {});
                };
              }
              function gs(n, r) {
                return function (s, f) {
                  var h;
                  if (s === a && f === a) return r;
                  if ((s !== a && (h = s), f !== a)) {
                    if (h === a) return f;
                    typeof s == 'string' || typeof f == 'string'
                      ? ((s = jn(s)), (f = jn(f)))
                      : ((s = Wu(s)), (f = Wu(f))),
                      (h = n(s, f));
                  }
                  return h;
                };
              }
              function Ol(n) {
                return fi(function (r) {
                  return (
                    (r = Ct(r, rr(Ke()))),
                    rt(function (s) {
                      var f = this;
                      return n(r, function (h) {
                        return Dn(h, f, s);
                      });
                    })
                  );
                });
              }
              function hs(n, r) {
                r = r === a ? ' ' : jn(r);
                var s = r.length;
                if (s < 2) return s ? Fo(r, n) : r;
                var f = Fo(r, Mo(n / Ao(r)));
                return la(r) ? Di(ir(f), 0, n).join('') : f.slice(0, n);
              }
              function xf(n, r, s, f) {
                var h = r & $,
                  E = Ca(n);
                function T() {
                  for (
                    var O = -1,
                      D = arguments.length,
                      Q = -1,
                      X = f.length,
                      te = H(X + D),
                      he = this && this !== Ut && this instanceof T ? E : n;
                    ++Q < X;

                  )
                    te[Q] = f[Q];
                  for (; D--; ) te[Q++] = arguments[++O];
                  return Dn(he, h ? s : this, te);
                }
                return T;
              }
              function Xu(n) {
                return function (r, s, f) {
                  return (
                    f && typeof f != 'number' && zn(r, s, f) && (s = f = a),
                    (r = jo(r)),
                    s === a ? ((s = r), (r = 0)) : (s = jo(s)),
                    (f = f === a ? (r < s ? 1 : -1) : jo(f)),
                    cs(r, s, f, n)
                  );
                };
              }
              function Ml(n) {
                return function (r, s) {
                  return (typeof r == 'string' && typeof s == 'string') || ((r = pi(r)), (s = pi(s))), n(r, s);
                };
              }
              function Un(n, r, s, f, h, E, T, O, D, Q) {
                var X = r & ae,
                  te = X ? T : a,
                  he = X ? a : T,
                  De = X ? E : a,
                  Qe = X ? a : E;
                (r |= X ? de : be), (r &= ~(X ? be : de)), r & ue || (r &= -4);
                var ot = [n, r, h, De, te, Qe, he, O, D, Q],
                  Xe = s.apply(a, ot);
                return bs(n) && sc(Xe, ot), (Xe.placeholder = f), lc(Xe, n, r);
              }
              function vn(n) {
                var r = en[n];
                return function (s, f) {
                  if (((s = pi(s)), (f = f == null ? 0 : Nn(it(f), 292)), f && da(s))) {
                    var h = (kt(s) + 'e').split('e'),
                      E = r(h[0] + 'e' + (+h[1] + f));
                    return (h = (kt(E) + 'e').split('e')), +(h[0] + 'e' + (+h[1] - f));
                  }
                  return r(s);
                };
              }
              var Sf =
                eo && 1 / ji(new eo([, -0]))[1] == re
                  ? function (n) {
                      return new eo(n);
                    }
                  : ep;
              function ju(n) {
                return function (r) {
                  var s = yn(r);
                  return s == un ? Vs(r) : s == Kt ? yd(r) : md(r, n(r));
                };
              }
              function ci(n, r, s, f, h, E, T, O) {
                var D = r & V;
                if (!D && typeof n != 'function') throw new gr(v);
                var Q = f ? f.length : 0;
                if (
                  (Q || ((r &= -97), (f = h = a)),
                  (T = T === a ? T : tn(it(T), 0)),
                  (O = O === a ? O : it(O)),
                  (Q -= h ? h.length : 0),
                  r & be)
                ) {
                  var X = f,
                    te = h;
                  f = h = a;
                }
                var he = D ? a : Il(n),
                  De = [n, r, s, f, h, X, te, E, T, O];
                if (
                  (he && Af(De, he),
                  (n = De[0]),
                  (r = De[1]),
                  (s = De[2]),
                  (f = De[3]),
                  (h = De[4]),
                  (O = De[9] = De[9] === a ? (D ? 0 : n.length) : tn(De[9] - Q, 0)),
                  !O && r & (ae | Te) && (r &= -25),
                  !r || r == $)
                )
                  var Qe = Cl(n, r, s);
                else
                  r == ae || r == Te
                    ? (Qe = Qu(n, r, O))
                    : (r == de || r == ($ | de)) && !h.length
                      ? (Qe = xf(n, r, s, f))
                      : (Qe = Aa.apply(a, De));
                var ot = he ? bl : sc;
                return lc(ot(Qe, De), n, r);
              }
              function Ju(n, r, s, f) {
                return n === a || (zi(n, Jr[s]) && !vt.call(f, s)) ? r : n;
              }
              function ec(n, r, s, f, h, E) {
                return Jt(n) && Jt(r) && (E.set(r, n), $o(n, r, a, ec, E), E.delete(r)), n;
              }
              function tc(n) {
                return Sc(n) ? a : n;
              }
              function nc(n, r, s, f, h, E) {
                var T = s & G,
                  O = n.length,
                  D = r.length;
                if (O != D && !(T && D > O)) return !1;
                var Q = E.get(n),
                  X = E.get(r);
                if (Q && X) return Q == r && X == n;
                var te = -1,
                  he = !0,
                  De = s & F ? new Lo() : a;
                for (E.set(n, r), E.set(r, n); ++te < O; ) {
                  var Qe = n[te],
                    ot = r[te];
                  if (f) var Xe = T ? f(ot, Qe, te, r, n, E) : f(Qe, ot, te, n, r, E);
                  if (Xe !== a) {
                    if (Xe) continue;
                    he = !1;
                    break;
                  }
                  if (De) {
                    if (
                      !vu(r, function (ft, ht) {
                        if (!Si(De, ht) && (Qe === ft || h(Qe, ft, s, f, E))) return De.push(ht);
                      })
                    ) {
                      he = !1;
                      break;
                    }
                  } else if (!(Qe === ot || h(Qe, ot, s, f, E))) {
                    he = !1;
                    break;
                  }
                }
                return E.delete(n), E.delete(r), he;
              }
              function rc(n, r, s, f, h, E, T) {
                switch (s) {
                  case Kn:
                    if (n.byteLength != r.byteLength || n.byteOffset != r.byteOffset) return !1;
                    (n = n.buffer), (r = r.buffer);
                  case Gn:
                    return !(n.byteLength != r.byteLength || !E(new Xa(n), new Xa(r)));
                  case Ce:
                  case Fe:
                  case Yr:
                    return zi(+n, +r);
                  case mt:
                    return n.name == r.name && n.message == r.message;
                  case Hn:
                  case Cr:
                    return n == r + '';
                  case un:
                    var O = Vs;
                  case Kt:
                    var D = f & G;
                    if ((O || (O = ji), n.size != r.size && !D)) return !1;
                    var Q = T.get(n);
                    if (Q) return Q == r;
                    (f |= F), T.set(n, r);
                    var X = nc(O(n), O(r), f, h, E, T);
                    return T.delete(n), X;
                  case Zr:
                    if (or) return or.call(n) == or.call(r);
                }
                return !1;
              }
              function kf(n, r, s, f, h, E) {
                var T = s & G,
                  O = ms(n),
                  D = O.length,
                  Q = ms(r),
                  X = Q.length;
                if (D != X && !T) return !1;
                for (var te = D; te--; ) {
                  var he = O[te];
                  if (!(T ? he in r : vt.call(r, he))) return !1;
                }
                var De = E.get(n),
                  Qe = E.get(r);
                if (De && Qe) return De == r && Qe == n;
                var ot = !0;
                E.set(n, r), E.set(r, n);
                for (var Xe = T; ++te < D; ) {
                  he = O[te];
                  var ft = n[he],
                    ht = r[he];
                  if (f) var Kr = T ? f(ht, ft, he, r, n, E) : f(ft, ht, he, n, r, E);
                  if (!(Kr === a ? ft === ht || h(ft, ht, s, f, E) : Kr)) {
                    ot = !1;
                    break;
                  }
                  Xe || (Xe = he == 'constructor');
                }
                if (ot && !Xe) {
                  var cr = n.constructor,
                    qr = r.constructor;
                  cr != qr &&
                    'constructor' in n &&
                    'constructor' in r &&
                    !(typeof cr == 'function' && cr instanceof cr && typeof qr == 'function' && qr instanceof qr) &&
                    (ot = !1);
                }
                return E.delete(n), E.delete(r), ot;
              }
              function fi(n) {
                return lr(Bl(n, a, $l), n + '');
              }
              function ms(n) {
                return hl(n, In, Ur);
              }
              function _s(n) {
                return hl(n, Nr, Nf);
              }
              var Il = al
                ? function (n) {
                    return al.get(n);
                  }
                : ep;
              function Oa(n) {
                for (var r = n.name + '', s = ha[r], f = vt.call(ha, r) ? s.length : 0; f--; ) {
                  var h = s[f],
                    E = h.func;
                  if (E == null || E == n) return h.name;
                }
                return r;
              }
              function Pi(n) {
                var r = vt.call(y, 'placeholder') ? y : n;
                return r.placeholder;
              }
              function Ke() {
                var n = y.iteratee || jd;
                return (n = n === jd ? xa : n), arguments.length ? n(arguments[0], arguments[1]) : n;
              }
              function vs(n, r) {
                var s = n.__data__;
                return Ma(r) ? s[typeof r == 'string' ? 'string' : 'hash'] : s.map;
              }
              function ys(n) {
                for (var r = In(n), s = r.length; s--; ) {
                  var f = r[s],
                    h = n[f];
                  r[s] = [f, h, ws(h)];
                }
                return r;
              }
              function uo(n, r) {
                var s = sa(n, r);
                return Du(s) ? s : a;
              }
              function Ll(n) {
                var r = vt.call(n, Oo),
                  s = n[Oo];
                try {
                  n[Oo] = a;
                  var f = !0;
                } catch {}
                var h = Va.call(n);
                return f && (r ? (n[Oo] = s) : delete n[Oo]), h;
              }
              var Ur = rl
                  ? function (n) {
                      return n == null
                        ? []
                        : ((n = St(n)),
                          Qi(rl(n), function (r) {
                            return tl.call(n, r);
                          }));
                    }
                  : tp,
                Nf = rl
                  ? function (n) {
                      for (var r = []; n; ) Xi(r, Ur(n)), (n = Dr(n));
                      return r;
                    }
                  : tp,
                yn = _n;
              ((es && yn(new es(new ArrayBuffer(1))) != Kn) ||
                (Io && yn(new Io()) != un) ||
                (ts && yn(ts.resolve()) != Hi) ||
                (eo && yn(new eo()) != Kt) ||
                (ns && yn(new ns()) != Wn)) &&
                (yn = function (n) {
                  var r = _n(n),
                    s = r == wn ? n.constructor : a,
                    f = s ? co(s) : '';
                  if (f)
                    switch (f) {
                      case Cu:
                        return Kn;
                      case to:
                        return un;
                      case of:
                        return Hi;
                      case ma:
                        return Kt;
                      case ei:
                        return Wn;
                    }
                  return r;
                });
              function ic(n, r, s) {
                for (var f = -1, h = s.length; ++f < h; ) {
                  var E = s[f],
                    T = E.size;
                  switch (E.type) {
                    case 'drop':
                      n += T;
                      break;
                    case 'dropRight':
                      r -= T;
                      break;
                    case 'take':
                      r = Nn(r, n + T);
                      break;
                    case 'takeRight':
                      n = tn(n, r - T);
                      break;
                  }
                }
                return { start: n, end: r };
              }
              function Tf(n) {
                var r = n.match(qi);
                return r ? r[1].split(bo) : [];
              }
              function oc(n, r, s) {
                r = ui(r, n);
                for (var f = -1, h = r.length, E = !1; ++f < h; ) {
                  var T = Fr(r[f]);
                  if (!(E = n != null && s(n, T))) break;
                  n = n[T];
                }
                return E || ++f != h
                  ? E
                  : ((h = n == null ? 0 : n.length), !!h && Yf(h) && $t(T, h) && (tt(n) || As(n)));
              }
              function Es(n) {
                var r = n.length,
                  s = new n.constructor(r);
                return (
                  r && typeof n[0] == 'string' && vt.call(n, 'index') && ((s.index = n.index), (s.input = n.input)), s
                );
              }
              function En(n) {
                return typeof n.constructor == 'function' && !Bi(n) ? _a(Dr(n)) : {};
              }
              function Td(n, r, s) {
                var f = n.constructor;
                switch (r) {
                  case Gn:
                    return ps(n);
                  case Ce:
                  case Fe:
                    return new f(+n);
                  case Kn:
                    return _f(n, s);
                  case mi:
                  case tr:
                  case Ar:
                  case Wi:
                  case Gi:
                  case _i:
                  case Eo:
                  case vi:
                  case yi:
                    return Ef(n, s);
                  case un:
                    return new f();
                  case Yr:
                  case Cr:
                    return new f(n);
                  case Hn:
                    return vf(n);
                  case Kt:
                    return new f();
                  case Zr:
                    return yf(n);
                }
              }
              function Rd(n, r) {
                var s = r.length;
                if (!s) return n;
                var f = s - 1;
                return (
                  (r[f] = (s > 1 ? '& ' : '') + r[f]),
                  (r = r.join(s > 2 ? ', ' : ' ')),
                  n.replace(
                    Vr,
                    `{
/* [wrapped with ` +
                      r +
                      `] */
`
                  )
                );
              }
              function Dl(n) {
                return tt(n) || As(n) || !!(tf && n && n[tf]);
              }
              function $t(n, r) {
                var s = typeof n;
                return (
                  (r = r ?? B), !!r && (s == 'number' || (s != 'symbol' && Ps.test(n))) && n > -1 && n % 1 == 0 && n < r
                );
              }
              function zn(n, r, s) {
                if (!Jt(s)) return !1;
                var f = typeof r;
                return (f == 'number' ? kr(s) && $t(r, s.length) : f == 'string' && r in s) ? zi(s[r], n) : !1;
              }
              function Ee(n, r) {
                if (tt(n)) return !1;
                var s = typeof n;
                return s == 'number' || s == 'symbol' || s == 'boolean' || n == null || Gr(n)
                  ? !0
                  : Bt.test(n) || !Mt.test(n) || (r != null && n in St(r));
              }
              function Ma(n) {
                var r = typeof n;
                return r == 'string' || r == 'number' || r == 'symbol' || r == 'boolean'
                  ? n !== '__proto__'
                  : n === null;
              }
              function bs(n) {
                var r = Oa(n),
                  s = y[r];
                if (typeof s != 'function' || !(r in et.prototype)) return !1;
                if (n === s) return !0;
                var f = Il(s);
                return !!f && n === f[0];
              }
              function Rf(n) {
                return !!js && js in n;
              }
              var Cd = ca ? Xo : np;
              function Bi(n) {
                var r = n && n.constructor,
                  s = (typeof r == 'function' && r.prototype) || Jr;
                return n === s;
              }
              function ws(n) {
                return n === n && !Jt(n);
              }
              function Pl(n, r) {
                return function (s) {
                  return s == null ? !1 : s[n] === r && (r !== a || n in St(s));
                };
              }
              function Cf(n) {
                var r = U(n, function (f) {
                    return s.size === w && s.clear(), f;
                  }),
                  s = r.cache;
                return r;
              }
              function Af(n, r) {
                var s = n[1],
                  f = r[1],
                  h = s | f,
                  E = h < ($ | V | we),
                  T =
                    (f == we && s == ae) ||
                    (f == we && s == ge && n[7].length <= r[8]) ||
                    (f == (we | ge) && r[7].length <= r[8] && s == ae);
                if (!(E || T)) return n;
                f & $ && ((n[2] = r[2]), (h |= s & $ ? 0 : ue));
                var O = r[3];
                if (O) {
                  var D = n[3];
                  (n[3] = D ? bf(D, O, r[4]) : O), (n[4] = D ? pr(n[3], b) : r[4]);
                }
                return (
                  (O = r[5]),
                  O && ((D = n[5]), (n[5] = D ? Zu(D, O, r[6]) : O), (n[6] = D ? pr(n[5], b) : r[6])),
                  (O = r[7]),
                  O && (n[7] = O),
                  f & we && (n[8] = n[8] == null ? r[8] : Nn(n[8], r[8])),
                  n[9] == null && (n[9] = r[9]),
                  (n[0] = r[0]),
                  (n[1] = h),
                  n
                );
              }
              function Of(n) {
                var r = [];
                if (n != null) for (var s in St(n)) r.push(s);
                return r;
              }
              function ac(n) {
                return Va.call(n);
              }
              function Bl(n, r, s) {
                return (
                  (r = tn(r === a ? n.length - 1 : r, 0)),
                  function () {
                    for (var f = arguments, h = -1, E = tn(f.length - r, 0), T = H(E); ++h < E; ) T[h] = f[r + h];
                    h = -1;
                    for (var O = H(r + 1); ++h < r; ) O[h] = f[h];
                    return (O[r] = s(T)), Dn(n, this, O);
                  }
                );
              }
              function fn(n, r) {
                return r.length < 2 ? n : Ai(n, Mn(r, 0, -1));
              }
              function zr(n, r) {
                for (var s = n.length, f = Nn(r.length, s), h = Bn(n); f--; ) {
                  var E = r[f];
                  n[f] = $t(E, s) ? h[E] : a;
                }
                return n;
              }
              function di(n, r) {
                if (!(r === 'constructor' && typeof n[r] == 'function') && r != '__proto__') return n[r];
              }
              var sc = $r(bl),
                Ia =
                  Tu ||
                  function (n, r) {
                    return Ut.setTimeout(n, r);
                  },
                lr = $r(li);
              function lc(n, r, s) {
                var f = r + '';
                return lr(n, Rd(f, Mf(Tf(f), s)));
              }
              function $r(n) {
                var r = 0,
                  s = 0;
                return function () {
                  var f = Sd(),
                    h = st - (f - s);
                  if (((s = f), h > 0)) {
                    if (++r >= dt) return arguments[0];
                  } else r = 0;
                  return n.apply(a, arguments);
                };
              }
              function Ul(n, r) {
                var s = -1,
                  f = n.length,
                  h = f - 1;
                for (r = r === a ? f : r; ++s < r; ) {
                  var E = Sa(s, h),
                    T = n[E];
                  (n[E] = n[s]), (n[s] = T);
                }
                return (n.length = r), n;
              }
              var uc = Cf(function (n) {
                var r = [];
                return (
                  n.charCodeAt(0) === 46 && r.push(''),
                  n.replace(ke, function (s, f, h, E) {
                    r.push(h ? E.replace(su, '$1') : f || s);
                  }),
                  r
                );
              });
              function Fr(n) {
                if (typeof n == 'string' || Gr(n)) return n;
                var r = n + '';
                return r == '0' && 1 / n == -1 / 0 ? '-0' : r;
              }
              function co(n) {
                if (n != null) {
                  try {
                    return Za.call(n);
                  } catch {}
                  try {
                    return n + '';
                  } catch {}
                }
                return '';
              }
              function Mf(n, r) {
                return (
                  kn(Se, function (s) {
                    var f = '_.' + s[0];
                    r & s[1] && !qs(n, f) && n.push(f);
                  }),
                  n.sort()
                );
              }
              function If(n) {
                if (n instanceof et) return n.clone();
                var r = new Tn(n.__wrapped__, n.__chain__);
                return (
                  (r.__actions__ = Bn(n.__actions__)), (r.__index__ = n.__index__), (r.__values__ = n.__values__), r
                );
              }
              function zl(n, r, s) {
                (s ? zn(n, r, s) : r === a) ? (r = 1) : (r = tn(it(r), 0));
                var f = n == null ? 0 : n.length;
                if (!f || r < 1) return [];
                for (var h = 0, E = 0, T = H(Mo(f / r)); h < f; ) T[E++] = Mn(n, h, (h += r));
                return T;
              }
              function cc(n) {
                for (var r = -1, s = n == null ? 0 : n.length, f = 0, h = []; ++r < s; ) {
                  var E = n[r];
                  E && (h[f++] = E);
                }
                return h;
              }
              function xr() {
                var n = arguments.length;
                if (!n) return [];
                for (var r = H(n - 1), s = arguments[0], f = n; f--; ) r[f - 1] = arguments[f];
                return Xi(tt(s) ? Bn(s) : [s], Vt(r, 1));
              }
              var gt = rt(function (n, r) {
                  return sn(n) ? oi(n, Vt(r, 1, sn, !0)) : [];
                }),
                dn = rt(function (n, r) {
                  var s = $n(r);
                  return sn(s) && (s = a), sn(n) ? oi(n, Vt(r, 1, sn, !0), Ke(s, 2)) : [];
                }),
                nn = rt(function (n, r) {
                  var s = $n(r);
                  return sn(s) && (s = a), sn(n) ? oi(n, Vt(r, 1, sn, !0), a, s) : [];
                });
              function bn(n, r, s) {
                var f = n == null ? 0 : n.length;
                return f ? ((r = s || r === a ? 1 : it(r)), Mn(n, r < 0 ? 0 : r, f)) : [];
              }
              function ur(n, r, s) {
                var f = n == null ? 0 : n.length;
                return f ? ((r = s || r === a ? 1 : it(r)), (r = f - r), Mn(n, 0, r < 0 ? 0 : r)) : [];
              }
              function La(n, r) {
                return n && n.length ? fs(n, Ke(r, 3), !0, !0) : [];
              }
              function an(n, r) {
                return n && n.length ? fs(n, Ke(r, 3), !0) : [];
              }
              function xs(n, r, s, f) {
                var h = n == null ? 0 : n.length;
                return h ? (s && typeof s != 'number' && zn(n, r, s) && ((s = 0), (f = h)), pf(n, r, s, f)) : [];
              }
              function fo(n, r, s) {
                var f = n == null ? 0 : n.length;
                if (!f) return -1;
                var h = s == null ? 0 : it(s);
                return h < 0 && (h = tn(f + h, 0)), Ys(n, Ke(r, 3), h);
              }
              function Ss(n, r, s) {
                var f = n == null ? 0 : n.length;
                if (!f) return -1;
                var h = f - 1;
                return s !== a && ((h = it(s)), (h = s < 0 ? tn(f + h, 0) : Nn(h, f - 1))), Ys(n, Ke(r, 3), h, !0);
              }
              function $l(n) {
                var r = n == null ? 0 : n.length;
                return r ? Vt(n, 1) : [];
              }
              function ks(n) {
                var r = n == null ? 0 : n.length;
                return r ? Vt(n, re) : [];
              }
              function Jn(n, r) {
                var s = n == null ? 0 : n.length;
                return s ? ((r = r === a ? 1 : it(r)), Vt(n, r)) : [];
              }
              function fc(n) {
                for (var r = -1, s = n == null ? 0 : n.length, f = {}; ++r < s; ) {
                  var h = n[r];
                  f[h[0]] = h[1];
                }
                return f;
              }
              function Ko(n) {
                return n && n.length ? n[0] : a;
              }
              function Ui(n, r, s) {
                var f = n == null ? 0 : n.length;
                if (!f) return -1;
                var h = s == null ? 0 : it(s);
                return h < 0 && (h = tn(f + h, 0)), aa(n, r, h);
              }
              function Fl(n) {
                var r = n == null ? 0 : n.length;
                return r ? Mn(n, 0, -1) : [];
              }
              var dc = rt(function (n) {
                  var r = Ct(n, Ta);
                  return r.length && r[0] === n[0] ? ml(r) : [];
                }),
                po = rt(function (n) {
                  var r = $n(n),
                    s = Ct(n, Ta);
                  return r === $n(s) ? (r = a) : s.pop(), s.length && s[0] === n[0] ? ml(s, Ke(r, 2)) : [];
                }),
                Hl = rt(function (n) {
                  var r = $n(n),
                    s = Ct(n, Ta);
                  return (
                    (r = typeof r == 'function' ? r : a), r && s.pop(), s.length && s[0] === n[0] ? ml(s, a, r) : []
                  );
                });
              function go(n, r) {
                return n == null ? '' : il.call(n, r);
              }
              function $n(n) {
                var r = n == null ? 0 : n.length;
                return r ? n[r - 1] : a;
              }
              function Ns(n, r, s) {
                var f = n == null ? 0 : n.length;
                if (!f) return -1;
                var h = f;
                return (
                  s !== a && ((h = it(s)), (h = h < 0 ? tn(f + h, 0) : Nn(h, f - 1))),
                  r === r ? Ed(n, r, h) : Ys(n, Fc, h, !0)
                );
              }
              function pc(n, r) {
                return n && n.length ? El(n, it(r)) : a;
              }
              var Wl = rt(Ts);
              function Ts(n, r) {
                return n && n.length && r && r.length ? Xt(n, r) : n;
              }
              function Fn(n, r, s) {
                return n && n.length && r && r.length ? Xt(n, r, Ke(s, 2)) : n;
              }
              function ho(n, r, s) {
                return n && n.length && r && r.length ? Xt(n, r, a, s) : n;
              }
              var Hr = fi(function (n, r) {
                var s = n == null ? 0 : n.length,
                  f = pl(n, r);
                return (
                  on(
                    n,
                    Ct(r, function (h) {
                      return $t(h, s) ? +h : h;
                    }).sort(Yu)
                  ),
                  f
                );
              });
              function er(n, r) {
                var s = [];
                if (!(n && n.length)) return s;
                var f = -1,
                  h = [],
                  E = n.length;
                for (r = Ke(r, 3); ++f < E; ) {
                  var T = n[f];
                  r(T, f, n) && (s.push(T), h.push(f));
                }
                return on(n, h), s;
              }
              function Gl(n) {
                return n == null ? n : ol.call(n);
              }
              function gc(n, r, s) {
                var f = n == null ? 0 : n.length;
                return f
                  ? (s && typeof s != 'number' && zn(n, r, s)
                      ? ((r = 0), (s = f))
                      : ((r = r == null ? 0 : it(r)), (s = s === a ? f : it(s))),
                    Mn(n, r, s))
                  : [];
              }
              function hc(n, r) {
                return ka(n, r);
              }
              function Ad(n, r, s) {
                return wl(n, r, Ke(s, 2));
              }
              function mo(n, r) {
                var s = n == null ? 0 : n.length;
                if (s) {
                  var f = ka(n, r);
                  if (f < s && zi(n[f], r)) return f;
                }
                return -1;
              }
              function Lf(n, r) {
                return ka(n, r, !0);
              }
              function mc(n, r, s) {
                return wl(n, r, Ke(s, 2), !0);
              }
              function qo(n, r) {
                var s = n == null ? 0 : n.length;
                if (s) {
                  var f = ka(n, r, !0) - 1;
                  if (zi(n[f], r)) return f;
                }
                return -1;
              }
              function _c(n) {
                return n && n.length ? Hu(n) : [];
              }
              function Yo(n, r) {
                return n && n.length ? Hu(n, Ke(r, 2)) : [];
              }
              function Df(n) {
                var r = n == null ? 0 : n.length;
                return r ? Mn(n, 1, r) : [];
              }
              function Pf(n, r, s) {
                return n && n.length ? ((r = s || r === a ? 1 : it(r)), Mn(n, 0, r < 0 ? 0 : r)) : [];
              }
              function vc(n, r, s) {
                var f = n == null ? 0 : n.length;
                return f ? ((r = s || r === a ? 1 : it(r)), (r = f - r), Mn(n, r < 0 ? 0 : r, f)) : [];
              }
              function Kl(n, r) {
                return n && n.length ? fs(n, Ke(r, 3), !1, !0) : [];
              }
              function Od(n, r) {
                return n && n.length ? fs(n, Ke(r, 3)) : [];
              }
              var Md = rt(function (n) {
                  return Li(Vt(n, 1, sn, !0));
                }),
                Bf = rt(function (n) {
                  var r = $n(n);
                  return sn(r) && (r = a), Li(Vt(n, 1, sn, !0), Ke(r, 2));
                }),
                Uf = rt(function (n) {
                  var r = $n(n);
                  return (r = typeof r == 'function' ? r : a), Li(Vt(n, 1, sn, !0), a, r);
                });
              function Zo(n) {
                return n && n.length ? Li(n) : [];
              }
              function Id(n, r) {
                return n && n.length ? Li(n, Ke(r, 2)) : [];
              }
              function Da(n, r) {
                return (r = typeof r == 'function' ? r : a), n && n.length ? Li(n, a, r) : [];
              }
              function ql(n) {
                if (!(n && n.length)) return [];
                var r = 0;
                return (
                  (n = Qi(n, function (s) {
                    if (sn(s)) return (r = tn(s.length, r)), !0;
                  })),
                  wu(r, function (s) {
                    return Ct(n, Eu(s));
                  })
                );
              }
              function Wt(n, r) {
                if (!(n && n.length)) return [];
                var s = ql(n);
                return r == null
                  ? s
                  : Ct(s, function (f) {
                      return Dn(r, a, f);
                    });
              }
              var Ld = rt(function (n, r) {
                  return sn(n) ? oi(n, r) : [];
                }),
                zf = rt(function (n) {
                  return Sl(Qi(n, sn));
                }),
                Dd = rt(function (n) {
                  var r = $n(n);
                  return sn(r) && (r = a), Sl(Qi(n, sn), Ke(r, 2));
                }),
                Pd = rt(function (n) {
                  var r = $n(n);
                  return (r = typeof r == 'function' ? r : a), Sl(Qi(n, sn), a, r);
                }),
                $f = rt(ql);
              function Ff(n, r) {
                return ds(n || [], r || [], Bo);
              }
              function Bd(n, r) {
                return ds(n || [], r || [], Ho);
              }
              var Sr = rt(function (n) {
                var r = n.length,
                  s = r > 1 ? n[r - 1] : a;
                return (s = typeof s == 'function' ? (n.pop(), s) : a), Wt(n, s);
              });
              function Yl(n) {
                var r = y(n);
                return (r.__chain__ = !0), r;
              }
              function Ud(n, r) {
                return r(n), n;
              }
              function Wr(n, r) {
                return r(n);
              }
              var Zl = fi(function (n) {
                var r = n.length,
                  s = r ? n[0] : 0,
                  f = this.__wrapped__,
                  h = function (E) {
                    return pl(E, n);
                  };
                return r > 1 || this.__actions__.length || !(f instanceof et) || !$t(s)
                  ? this.thru(h)
                  : ((f = f.slice(s, +s + (r ? 1 : 0))),
                    f.__actions__.push({ func: Wr, args: [h], thisArg: a }),
                    new Tn(f, this.__chain__).thru(function (E) {
                      return r && !E.length && E.push(a), E;
                    }));
              });
              function Vo() {
                return Yl(this);
              }
              function Vl() {
                return new Tn(this.value(), this.__chain__);
              }
              function yc() {
                this.__values__ === a && (this.__values__ = mg(this.value()));
                var n = this.__index__ >= this.__values__.length,
                  r = n ? a : this.__values__[this.__index__++];
                return { done: n, value: r };
              }
              function Ec() {
                return this;
              }
              function zd(n) {
                for (var r, s = this; s instanceof ti; ) {
                  var f = If(s);
                  (f.__index__ = 0), (f.__values__ = a), r ? (h.__wrapped__ = f) : (r = f);
                  var h = f;
                  s = s.__wrapped__;
                }
                return (h.__wrapped__ = n), r;
              }
              function bc() {
                var n = this.__wrapped__;
                if (n instanceof et) {
                  var r = n;
                  return (
                    this.__actions__.length && (r = new et(this)),
                    (r = r.reverse()),
                    r.__actions__.push({ func: Wr, args: [Gl], thisArg: a }),
                    new Tn(r, this.__chain__)
                  );
                }
                return this.thru(Gl);
              }
              function $d() {
                return Na(this.__wrapped__, this.__actions__);
              }
              var Hf = Tl(function (n, r, s) {
                vt.call(n, s) ? ++n[s] : ii(n, s, 1);
              });
              function Wf(n, r, s) {
                var f = tt(n) ? hu : os;
                return s && zn(n, r, s) && (r = a), f(n, Ke(r, 3));
              }
              function Ql(n, r) {
                var s = tt(n) ? Qi : Iu;
                return s(n, Ke(r, 3));
              }
              var Xl = Go(fo),
                Gf = Go(Ss);
              function wc(n, r) {
                return Vt(Qo(n, r), 1);
              }
              function Fd(n, r) {
                return Vt(Qo(n, r), re);
              }
              function Kf(n, r, s) {
                return (s = s === a ? 1 : it(s)), Vt(Qo(n, r), s);
              }
              function jl(n, r) {
                var s = tt(n) ? kn : ai;
                return s(n, Ke(r, 3));
              }
              function Rs(n, r) {
                var s = tt(n) ? Ks : df;
                return s(n, Ke(r, 3));
              }
              var xc = Tl(function (n, r, s) {
                vt.call(n, s) ? n[s].push(r) : ii(n, s, [r]);
              });
              function Jl(n, r, s, f) {
                (n = kr(n) ? n : nu(n)), (s = s && !f ? it(s) : 0);
                var h = n.length;
                return s < 0 && (s = tn(h + s, 0)), Zf(n) ? s <= h && n.indexOf(r, s) > -1 : !!h && aa(n, r, s) > -1;
              }
              var qf = rt(function (n, r, s) {
                  var f = -1,
                    h = typeof r == 'function',
                    E = kr(n) ? H(n.length) : [];
                  return (
                    ai(n, function (T) {
                      E[++f] = h ? Dn(r, T, s) : yr(T, r, s);
                    }),
                    E
                  );
                }),
                Hd = Tl(function (n, r, s) {
                  ii(n, s, r);
                });
              function Qo(n, r) {
                var s = tt(n) ? Ct : Bu;
                return s(n, Ke(r, 3));
              }
              function Wd(n, r, s, f) {
                return n == null
                  ? []
                  : (tt(r) || (r = r == null ? [] : [r]),
                    (s = f ? a : s),
                    tt(s) || (s = s == null ? [] : [s]),
                    us(n, r, s));
              }
              var Cs = Tl(
                function (n, r, s) {
                  n[s ? 0 : 1].push(r);
                },
                function () {
                  return [[], []];
                }
              );
              function Gd(n, r, s) {
                var f = tt(n) ? _u : Wc,
                  h = arguments.length < 3;
                return f(n, Ke(r, 4), s, h, ai);
              }
              function eu(n, r, s) {
                var f = tt(n) ? dd : Wc,
                  h = arguments.length < 3;
                return f(n, Ke(r, 4), s, h, df);
              }
              function e(n, r) {
                var s = tt(n) ? Qi : Iu;
                return s(n, se(Ke(r, 3)));
              }
              function t(n) {
                var r = tt(n) ? ri : On;
                return r(n);
              }
              function i(n, r, s) {
                (s ? zn(n, r, s) : r === a) ? (r = 1) : (r = it(r));
                var f = tt(n) ? Po : $u;
                return f(n, r);
              }
              function o(n) {
                var r = tt(n) ? cf : br;
                return r(n);
              }
              function u(n) {
                if (n == null) return 0;
                if (kr(n)) return Zf(n) ? Ao(n) : n.length;
                var r = yn(n);
                return r == un || r == Kt ? n.size : Ii(n).length;
              }
              function c(n, r, s) {
                var f = tt(n) ? vu : Fu;
                return s && zn(n, r, s) && (r = a), f(n, Ke(r, 3));
              }
              var _ = rt(function (n, r) {
                  if (n == null) return [];
                  var s = r.length;
                  return (
                    s > 1 && zn(n, r[0], r[1]) ? (r = []) : s > 2 && zn(r[0], r[1], r[2]) && (r = [r[0]]),
                    us(n, Vt(r, 1), [])
                  );
                }),
                k =
                  It ||
                  function () {
                    return Ut.Date.now();
                  };
              function A(n, r) {
                if (typeof r != 'function') throw new gr(v);
                return (
                  (n = it(n)),
                  function () {
                    if (--n < 1) return r.apply(this, arguments);
                  }
                );
              }
              function W(n, r, s) {
                return (r = s ? a : r), (r = n && r == null ? n.length : r), ci(n, we, a, a, a, a, r);
              }
              function ee(n, r) {
                var s;
                if (typeof r != 'function') throw new gr(v);
                return (
                  (n = it(n)),
                  function () {
                    return --n > 0 && (s = r.apply(this, arguments)), n <= 1 && (r = a), s;
                  }
                );
              }
              var oe = rt(function (n, r, s) {
                  var f = $;
                  if (s.length) {
                    var h = pr(s, Pi(oe));
                    f |= de;
                  }
                  return ci(n, f, r, s, h);
                }),
                J = rt(function (n, r, s) {
                  var f = $ | V;
                  if (s.length) {
                    var h = pr(s, Pi(J));
                    f |= de;
                  }
                  return ci(r, f, n, s, h);
                });
              function ve(n, r, s) {
                r = s ? a : r;
                var f = ci(n, ae, a, a, a, a, a, r);
                return (f.placeholder = ve.placeholder), f;
              }
              function Re(n, r, s) {
                r = s ? a : r;
                var f = ci(n, Te, a, a, a, a, a, r);
                return (f.placeholder = Re.placeholder), f;
              }
              function Oe(n, r, s) {
                var f,
                  h,
                  E,
                  T,
                  O,
                  D,
                  Q = 0,
                  X = !1,
                  te = !1,
                  he = !0;
                if (typeof n != 'function') throw new gr(v);
                (r = pi(r) || 0),
                  Jt(s) &&
                    ((X = !!s.leading),
                    (te = 'maxWait' in s),
                    (E = te ? tn(pi(s.maxWait) || 0, r) : E),
                    (he = 'trailing' in s ? !!s.trailing : he));
                function De(ln) {
                  var $i = f,
                    Jo = h;
                  return (f = h = a), (Q = ln), (T = n.apply(Jo, $i)), T;
                }
                function Qe(ln) {
                  return (Q = ln), (O = Ia(ft, r)), X ? De(ln) : T;
                }
                function ot(ln) {
                  var $i = ln - D,
                    Jo = ln - Q,
                    Cg = r - $i;
                  return te ? Nn(Cg, E - Jo) : Cg;
                }
                function Xe(ln) {
                  var $i = ln - D,
                    Jo = ln - Q;
                  return D === a || $i >= r || $i < 0 || (te && Jo >= E);
                }
                function ft() {
                  var ln = k();
                  if (Xe(ln)) return ht(ln);
                  O = Ia(ft, ot(ln));
                }
                function ht(ln) {
                  return (O = a), he && f ? De(ln) : ((f = h = a), T);
                }
                function Kr() {
                  O !== a && Ku(O), (Q = 0), (f = D = h = O = a);
                }
                function cr() {
                  return O === a ? T : ht(k());
                }
                function qr() {
                  var ln = k(),
                    $i = Xe(ln);
                  if (((f = arguments), (h = this), (D = ln), $i)) {
                    if (O === a) return Qe(D);
                    if (te) return Ku(O), (O = Ia(ft, r)), De(D);
                  }
                  return O === a && (O = Ia(ft, r)), T;
                }
                return (qr.cancel = Kr), (qr.flush = cr), qr;
              }
              var jt = rt(function (n, r) {
                  return Mu(n, 1, r);
                }),
                P = rt(function (n, r, s) {
                  return Mu(n, pi(r) || 0, s);
                });
              function M(n) {
                return ci(n, ze);
              }
              function U(n, r) {
                if (typeof n != 'function' || (r != null && typeof r != 'function')) throw new gr(v);
                var s = function () {
                  var f = arguments,
                    h = r ? r.apply(this, f) : f[0],
                    E = s.cache;
                  if (E.has(h)) return E.get(h);
                  var T = n.apply(this, f);
                  return (s.cache = E.set(h, T) || E), T;
                };
                return (s.cache = new (U.Cache || hr)()), s;
              }
              U.Cache = hr;
              function se(n) {
                if (typeof n != 'function') throw new gr(v);
                return function () {
                  var r = arguments;
                  switch (r.length) {
                    case 0:
                      return !n.call(this);
                    case 1:
                      return !n.call(this, r[0]);
                    case 2:
                      return !n.call(this, r[0], r[1]);
                    case 3:
                      return !n.call(this, r[0], r[1], r[2]);
                  }
                  return !n.apply(this, r);
                };
              }
              function Ie(n) {
                return ee(2, n);
              }
              var We = mf(function (n, r) {
                  r = r.length == 1 && tt(r[0]) ? Ct(r[0], rr(Ke())) : Ct(Vt(r, 1), rr(Ke()));
                  var s = r.length;
                  return rt(function (f) {
                    for (var h = -1, E = Nn(f.length, s); ++h < E; ) f[h] = r[h].call(this, f[h]);
                    return Dn(n, this, f);
                  });
                }),
                Ue = rt(function (n, r) {
                  var s = pr(r, Pi(Ue));
                  return ci(n, de, a, r, s);
                }),
                Ve = rt(function (n, r) {
                  var s = pr(r, Pi(Ve));
                  return ci(n, be, a, r, s);
                }),
                pn = fi(function (n, r) {
                  return ci(n, ge, a, a, a, r);
                });
              function yt(n, r) {
                if (typeof n != 'function') throw new gr(v);
                return (r = r === a ? r : it(r)), rt(n, r);
              }
              function _o(n, r) {
                if (typeof n != 'function') throw new gr(v);
                return (
                  (r = r == null ? 0 : tn(it(r), 0)),
                  rt(function (s) {
                    var f = s[r],
                      h = Di(s, 0, r);
                    return f && Xi(h, f), Dn(n, this, h);
                  })
                );
              }
              function Kd(n, r, s) {
                var f = !0,
                  h = !0;
                if (typeof n != 'function') throw new gr(v);
                return (
                  Jt(s) && ((f = 'leading' in s ? !!s.leading : f), (h = 'trailing' in s ? !!s.trailing : h)),
                  Oe(n, r, { leading: f, maxWait: r, trailing: h })
                );
              }
              function _m(n) {
                return W(n, 1);
              }
              function vm(n, r) {
                return Ue(kl(r), n);
              }
              function ym() {
                if (!arguments.length) return [];
                var n = arguments[0];
                return tt(n) ? n : [n];
              }
              function Em(n) {
                return Xn(n, z);
              }
              function bm(n, r) {
                return (r = typeof r == 'function' ? r : a), Xn(n, z, r);
              }
              function wm(n) {
                return Xn(n, N | z);
              }
              function xm(n, r) {
                return (r = typeof r == 'function' ? r : a), Xn(n, N | z, r);
              }
              function Sm(n, r) {
                return r == null || is(n, r, In(r));
              }
              function zi(n, r) {
                return n === r || (n !== n && r !== r);
              }
              var km = Ml(ao),
                Nm = Ml(function (n, r) {
                  return n >= r;
                }),
                As = _l(
                  (function () {
                    return arguments;
                  })()
                )
                  ? _l
                  : function (n) {
                      return rn(n) && vt.call(n, 'callee') && !tl.call(n, 'callee');
                    },
                tt = H.isArray,
                Tm = pu ? rr(pu) : gf;
              function kr(n) {
                return n != null && Yf(n.length) && !Xo(n);
              }
              function sn(n) {
                return rn(n) && kr(n);
              }
              function Rm(n) {
                return n === !0 || n === !1 || (rn(n) && _n(n) == Ce);
              }
              var Pa = Ru || np,
                Cm = Yn ? rr(Yn) : Mi;
              function Am(n) {
                return rn(n) && n.nodeType === 1 && !Sc(n);
              }
              function Om(n) {
                if (n == null) return !0;
                if (
                  kr(n) &&
                  (tt(n) || typeof n == 'string' || typeof n.splice == 'function' || Pa(n) || tu(n) || As(n))
                )
                  return !n.length;
                var r = yn(n);
                if (r == un || r == Kt) return !n.size;
                if (Bi(n)) return !Ii(n).length;
                for (var s in n) if (vt.call(n, s)) return !1;
                return !0;
              }
              function Mm(n, r) {
                return Er(n, r);
              }
              function Im(n, r, s) {
                s = typeof s == 'function' ? s : a;
                var f = s ? s(n, r) : a;
                return f === a ? Er(n, r, a, s) : !!f;
              }
              function qd(n) {
                if (!rn(n)) return !1;
                var r = _n(n);
                return r == mt || r == je || (typeof n.message == 'string' && typeof n.name == 'string' && !Sc(n));
              }
              function Lm(n) {
                return typeof n == 'number' && da(n);
              }
              function Xo(n) {
                if (!Jt(n)) return !1;
                var r = _n(n);
                return r == Ot || r == Gt || r == Pe || r == yo;
              }
              function dg(n) {
                return typeof n == 'number' && n == it(n);
              }
              function Yf(n) {
                return typeof n == 'number' && n > -1 && n % 1 == 0 && n <= B;
              }
              function Jt(n) {
                var r = typeof n;
                return n != null && (r == 'object' || r == 'function');
              }
              function rn(n) {
                return n != null && typeof n == 'object';
              }
              var pg = Co ? rr(Co) : hf;
              function Dm(n, r) {
                return n === r || wa(n, r, ys(r));
              }
              function Pm(n, r, s) {
                return (s = typeof s == 'function' ? s : a), wa(n, r, ys(r), s);
              }
              function Bm(n) {
                return gg(n) && n != +n;
              }
              function Um(n) {
                if (Cd(n)) throw new Je(m);
                return Du(n);
              }
              function zm(n) {
                return n === null;
              }
              function $m(n) {
                return n == null;
              }
              function gg(n) {
                return typeof n == 'number' || (rn(n) && _n(n) == Yr);
              }
              function Sc(n) {
                if (!rn(n) || _n(n) != wn) return !1;
                var r = Dr(n);
                if (r === null) return !0;
                var s = vt.call(r, 'constructor') && r.constructor;
                return typeof s == 'function' && s instanceof s && Za.call(s) == Js;
              }
              var Yd = Gs ? rr(Gs) : ss;
              function Fm(n) {
                return dg(n) && n >= -9007199254740991 && n <= B;
              }
              var hg = oa ? rr(oa) : si;
              function Zf(n) {
                return typeof n == 'string' || (!tt(n) && rn(n) && _n(n) == Cr);
              }
              function Gr(n) {
                return typeof n == 'symbol' || (rn(n) && _n(n) == Zr);
              }
              var tu = Uc ? rr(Uc) : ls;
              function Hm(n) {
                return n === a;
              }
              function Wm(n) {
                return rn(n) && yn(n) == Wn;
              }
              function Gm(n) {
                return rn(n) && _n(n) == hn;
              }
              var Km = Ml(so),
                qm = Ml(function (n, r) {
                  return n <= r;
                });
              function mg(n) {
                if (!n) return [];
                if (kr(n)) return Zf(n) ? ir(n) : Bn(n);
                if (Ti && n[Ti]) return vd(n[Ti]());
                var r = yn(n),
                  s = r == un ? Vs : r == Kt ? ji : nu;
                return s(n);
              }
              function jo(n) {
                if (!n) return n === 0 ? n : 0;
                if (((n = pi(n)), n === re || n === -1 / 0)) {
                  var r = n < 0 ? -1 : 1;
                  return r * ie;
                }
                return n === n ? n : 0;
              }
              function it(n) {
                var r = jo(n),
                  s = r % 1;
                return r === r ? (s ? r - s : r) : 0;
              }
              function _g(n) {
                return n ? Ci(it(n), 0, C) : 0;
              }
              function pi(n) {
                if (typeof n == 'number') return n;
                if (Gr(n)) return Y;
                if (Jt(n)) {
                  var r = typeof n.valueOf == 'function' ? n.valueOf() : n;
                  n = Jt(r) ? r + '' : r;
                }
                if (typeof n != 'string') return n === 0 ? n : +n;
                n = Gc(n);
                var s = ea.test(n);
                return s || Ds.test(n) ? Hs(n.slice(2), s ? 2 : 8) : Ha.test(n) ? Y : +n;
              }
              function vg(n) {
                return Br(n, Nr(n));
              }
              function Ym(n) {
                return n ? Ci(it(n), -9007199254740991, B) : n === 0 ? n : 0;
              }
              function kt(n) {
                return n == null ? '' : jn(n);
              }
              var Zm = Ra(function (n, r) {
                  if (Bi(r) || kr(r)) {
                    Br(r, In(r), n);
                    return;
                  }
                  for (var s in r) vt.call(r, s) && Bo(n, s, r[s]);
                }),
                yg = Ra(function (n, r) {
                  Br(r, Nr(r), n);
                }),
                Vf = Ra(function (n, r, s, f) {
                  Br(r, Nr(r), n, f);
                }),
                Vm = Ra(function (n, r, s, f) {
                  Br(r, In(r), n, f);
                }),
                Qm = fi(pl);
              function Xm(n, r) {
                var s = _a(n);
                return r == null ? s : Dt(s, r);
              }
              var jm = rt(function (n, r) {
                  n = St(n);
                  var s = -1,
                    f = r.length,
                    h = f > 2 ? r[2] : a;
                  for (h && zn(r[0], r[1], h) && (f = 1); ++s < f; )
                    for (var E = r[s], T = Nr(E), O = -1, D = T.length; ++O < D; ) {
                      var Q = T[O],
                        X = n[Q];
                      (X === a || (zi(X, Jr[Q]) && !vt.call(n, Q))) && (n[Q] = E[Q]);
                    }
                  return n;
                }),
                Jm = rt(function (n) {
                  return n.push(a, ec), Dn(Eg, a, n);
                });
              function e_(n, r) {
                return $c(n, Ke(r, 3), sr);
              }
              function t_(n, r) {
                return $c(n, Ke(r, 3), oo);
              }
              function n_(n, r) {
                return n == null ? n : gl(n, Ke(r, 3), Nr);
              }
              function r_(n, r) {
                return n == null ? n : as(n, Ke(r, 3), Nr);
              }
              function i_(n, r) {
                return n && sr(n, Ke(r, 3));
              }
              function o_(n, r) {
                return n && oo(n, Ke(r, 3));
              }
              function a_(n) {
                return n == null ? [] : ba(n, In(n));
              }
              function s_(n) {
                return n == null ? [] : ba(n, Nr(n));
              }
              function Zd(n, r, s) {
                var f = n == null ? a : Ai(n, r);
                return f === a ? s : f;
              }
              function l_(n, r) {
                return n != null && oc(n, r, vr);
              }
              function Vd(n, r) {
                return n != null && oc(n, r, zo);
              }
              var u_ = wf(function (n, r, s) {
                  r != null && typeof r.toString != 'function' && (r = Va.call(r)), (n[r] = s);
                }, Xd(Tr)),
                c_ = wf(function (n, r, s) {
                  r != null && typeof r.toString != 'function' && (r = Va.call(r)),
                    vt.call(n, r) ? n[r].push(s) : (n[r] = [s]);
                }, Ke),
                f_ = rt(yr);
              function In(n) {
                return kr(n) ? ni(n) : Ii(n);
              }
              function Nr(n) {
                return kr(n) ? ni(n, !0) : Pu(n);
              }
              function d_(n, r) {
                var s = {};
                return (
                  (r = Ke(r, 3)),
                  sr(n, function (f, h, E) {
                    ii(s, r(f, h, E), f);
                  }),
                  s
                );
              }
              function p_(n, r) {
                var s = {};
                return (
                  (r = Ke(r, 3)),
                  sr(n, function (f, h, E) {
                    ii(s, h, r(f, h, E));
                  }),
                  s
                );
              }
              var g_ = Ra(function (n, r, s) {
                  $o(n, r, s);
                }),
                Eg = Ra(function (n, r, s, f) {
                  $o(n, r, s, f);
                }),
                h_ = fi(function (n, r) {
                  var s = {};
                  if (n == null) return s;
                  var f = !1;
                  (r = Ct(r, function (E) {
                    return (E = ui(E, n)), f || (f = E.length > 1), E;
                  })),
                    Br(n, _s(n), s),
                    f && (s = Xn(s, N | I | z, tc));
                  for (var h = r.length; h--; ) xl(s, r[h]);
                  return s;
                });
              function m_(n, r) {
                return bg(n, se(Ke(r)));
              }
              var __ = fi(function (n, r) {
                return n == null ? {} : zu(n, r);
              });
              function bg(n, r) {
                if (n == null) return {};
                var s = Ct(_s(n), function (f) {
                  return [f];
                });
                return (
                  (r = Ke(r)),
                  lo(n, s, function (f, h) {
                    return r(f, h[0]);
                  })
                );
              }
              function v_(n, r, s) {
                r = ui(r, n);
                var f = -1,
                  h = r.length;
                for (h || ((h = 1), (n = a)); ++f < h; ) {
                  var E = n == null ? a : n[Fr(r[f])];
                  E === a && ((f = h), (E = s)), (n = Xo(E) ? E.call(n) : E);
                }
                return n;
              }
              function y_(n, r, s) {
                return n == null ? n : Ho(n, r, s);
              }
              function E_(n, r, s, f) {
                return (f = typeof f == 'function' ? f : a), n == null ? n : Ho(n, r, s, f);
              }
              var wg = ju(In),
                xg = ju(Nr);
              function b_(n, r, s) {
                var f = tt(n),
                  h = f || Pa(n) || tu(n);
                if (((r = Ke(r, 4)), s == null)) {
                  var E = n && n.constructor;
                  h ? (s = f ? new E() : []) : Jt(n) ? (s = Xo(E) ? _a(Dr(n)) : {}) : (s = {});
                }
                return (
                  (h ? kn : sr)(n, function (T, O, D) {
                    return r(s, T, O, D);
                  }),
                  s
                );
              }
              function w_(n, r) {
                return n == null ? !0 : xl(n, r);
              }
              function x_(n, r, s) {
                return n == null ? n : Gu(n, r, kl(s));
              }
              function S_(n, r, s, f) {
                return (f = typeof f == 'function' ? f : a), n == null ? n : Gu(n, r, kl(s), f);
              }
              function nu(n) {
                return n == null ? [] : qa(n, In(n));
              }
              function k_(n) {
                return n == null ? [] : qa(n, Nr(n));
              }
              function N_(n, r, s) {
                return (
                  s === a && ((s = r), (r = a)),
                  s !== a && ((s = pi(s)), (s = s === s ? s : 0)),
                  r !== a && ((r = pi(r)), (r = r === r ? r : 0)),
                  Ci(pi(n), r, s)
                );
              }
              function T_(n, r, s) {
                return (r = jo(r)), s === a ? ((s = r), (r = 0)) : (s = jo(s)), (n = pi(n)), Lu(n, r, s);
              }
              function R_(n, r, s) {
                if (
                  (s && typeof s != 'boolean' && zn(n, r, s) && (r = s = a),
                  s === a && (typeof r == 'boolean' ? ((s = r), (r = a)) : typeof n == 'boolean' && ((s = n), (n = a))),
                  n === a && r === a ? ((n = 0), (r = 1)) : ((n = jo(n)), r === a ? ((r = n), (n = 0)) : (r = jo(r))),
                  n > r)
                ) {
                  var f = n;
                  (n = r), (r = f);
                }
                if (s || n % 1 || r % 1) {
                  var h = Ja();
                  return Nn(n + h * (r - n + fu('1e-' + ((h + '').length - 1))), r);
                }
                return Sa(n, r);
              }
              var C_ = Wo(function (n, r, s) {
                return (r = r.toLowerCase()), n + (s ? Sg(r) : r);
              });
              function Sg(n) {
                return Qd(kt(n).toLowerCase());
              }
              function kg(n) {
                return (n = kt(n)), n && n.replace(Mr, Yc).replace(zs, '');
              }
              function A_(n, r, s) {
                (n = kt(n)), (r = jn(r));
                var f = n.length;
                s = s === a ? f : Ci(it(s), 0, f);
                var h = s;
                return (s -= r.length), s >= 0 && n.slice(s, h) == r;
              }
              function O_(n) {
                return (n = kt(n)), n && R.test(n) ? n.replace(xn, Zc) : n;
              }
              function M_(n) {
                return (n = kt(n)), n && He.test(n) ? n.replace(me, '\\$&') : n;
              }
              var I_ = Wo(function (n, r, s) {
                  return n + (s ? '-' : '') + r.toLowerCase();
                }),
                L_ = Wo(function (n, r, s) {
                  return n + (s ? ' ' : '') + r.toLowerCase();
                }),
                D_ = Vu('toLowerCase');
              function P_(n, r, s) {
                (n = kt(n)), (r = it(r));
                var f = r ? Ao(n) : 0;
                if (!r || f >= r) return n;
                var h = (r - f) / 2;
                return hs(Ji(h), s) + n + hs(Mo(h), s);
              }
              function B_(n, r, s) {
                (n = kt(n)), (r = it(r));
                var f = r ? Ao(n) : 0;
                return r && f < r ? n + hs(r - f, s) : n;
              }
              function U_(n, r, s) {
                (n = kt(n)), (r = it(r));
                var f = r ? Ao(n) : 0;
                return r && f < r ? hs(r - f, s) + n : n;
              }
              function z_(n, r, s) {
                return s || r == null ? (r = 0) : r && (r = +r), rf(kt(n).replace(qt, ''), r || 0);
              }
              function $_(n, r, s) {
                return (s ? zn(n, r, s) : r === a) ? (r = 1) : (r = it(r)), Fo(kt(n), r);
              }
              function F_() {
                var n = arguments,
                  r = kt(n[0]);
                return n.length < 3 ? r : r.replace(n[1], n[2]);
              }
              var H_ = Wo(function (n, r, s) {
                return n + (s ? '_' : '') + r.toLowerCase();
              });
              function W_(n, r, s) {
                return (
                  s && typeof s != 'number' && zn(n, r, s) && (r = s = a),
                  (s = s === a ? C : s >>> 0),
                  s
                    ? ((n = kt(n)),
                      n && (typeof r == 'string' || (r != null && !Yd(r))) && ((r = jn(r)), !r && la(n))
                        ? Di(ir(n), 0, s)
                        : n.split(r, s))
                    : []
                );
              }
              var G_ = Wo(function (n, r, s) {
                return n + (s ? ' ' : '') + Qd(r);
              });
              function K_(n, r, s) {
                return (
                  (n = kt(n)), (s = s == null ? 0 : Ci(it(s), 0, n.length)), (r = jn(r)), n.slice(s, s + r.length) == r
                );
              }
              function q_(n, r, s) {
                var f = y.templateSettings;
                s && zn(n, r, s) && (r = a), (n = kt(n)), (r = Vf({}, r, f, Ju));
                var h = Vf({}, r.imports, f.imports, Ju),
                  E = In(h),
                  T = qa(h, E),
                  O,
                  D,
                  Q = 0,
                  X = r.interpolate || wo,
                  te = "__p += '",
                  he = Ya(
                    (r.escape || wo).source +
                      '|' +
                      X.source +
                      '|' +
                      (X === Ye ? bi : wo).source +
                      '|' +
                      (r.evaluate || wo).source +
                      '|$',
                    'g'
                  ),
                  De =
                    '//# sourceURL=' +
                    (vt.call(r, 'sourceURL')
                      ? (r.sourceURL + '').replace(/\s/g, ' ')
                      : 'lodash.templateSources[' + ++ud + ']') +
                    `
`;
                n.replace(he, function (Xe, ft, ht, Kr, cr, qr) {
                  return (
                    ht || (ht = Kr),
                    (te += n.slice(Q, qr).replace(Bs, Vc)),
                    ft &&
                      ((O = !0),
                      (te +=
                        `' +
__e(` +
                        ft +
                        `) +
'`)),
                    cr &&
                      ((D = !0),
                      (te +=
                        `';
` +
                        cr +
                        `;
__p += '`)),
                    ht &&
                      (te +=
                        `' +
((__t = (` +
                        ht +
                        `)) == null ? '' : __t) +
'`),
                    (Q = qr + Xe.length),
                    Xe
                  );
                }),
                  (te += `';
`);
                var Qe = vt.call(r, 'variable') && r.variable;
                if (!Qe)
                  te =
                    `with (obj) {
` +
                    te +
                    `
}
`;
                else if ($a.test(Qe)) throw new Je(x);
                (te = (D ? te.replace(Ei, '') : te).replace(Ki, '$1').replace(pt, '$1;')),
                  (te =
                    'function(' +
                    (Qe || 'obj') +
                    `) {
` +
                    (Qe
                      ? ''
                      : `obj || (obj = {});
`) +
                    "var __t, __p = ''" +
                    (O ? ', __e = _.escape' : '') +
                    (D
                      ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                      : `;
`) +
                    te +
                    `return __p
}`);
                var ot = Tg(function () {
                  return _t(E, De + 'return ' + te).apply(a, T);
                });
                if (((ot.source = te), qd(ot))) throw ot;
                return ot;
              }
              function Y_(n) {
                return kt(n).toLowerCase();
              }
              function Z_(n) {
                return kt(n).toUpperCase();
              }
              function V_(n, r, s) {
                if (((n = kt(n)), n && (s || r === a))) return Gc(n);
                if (!n || !(r = jn(r))) return n;
                var f = ir(n),
                  h = ir(r),
                  E = Kc(f, h),
                  T = xu(f, h) + 1;
                return Di(f, E, T).join('');
              }
              function Q_(n, r, s) {
                if (((n = kt(n)), n && (s || r === a))) return n.slice(0, Xs(n) + 1);
                if (!n || !(r = jn(r))) return n;
                var f = ir(n),
                  h = xu(f, ir(r)) + 1;
                return Di(f, 0, h).join('');
              }
              function X_(n, r, s) {
                if (((n = kt(n)), n && (s || r === a))) return n.replace(qt, '');
                if (!n || !(r = jn(r))) return n;
                var f = ir(n),
                  h = Kc(f, ir(r));
                return Di(f, h).join('');
              }
              function j_(n, r) {
                var s = Be,
                  f = Ae;
                if (Jt(r)) {
                  var h = 'separator' in r ? r.separator : h;
                  (s = 'length' in r ? it(r.length) : s), (f = 'omission' in r ? jn(r.omission) : f);
                }
                n = kt(n);
                var E = n.length;
                if (la(n)) {
                  var T = ir(n);
                  E = T.length;
                }
                if (s >= E) return n;
                var O = s - Ao(f);
                if (O < 1) return f;
                var D = T ? Di(T, 0, O).join('') : n.slice(0, O);
                if (h === a) return D + f;
                if ((T && (O += D.length - O), Yd(h))) {
                  if (n.slice(O).search(h)) {
                    var Q,
                      X = D;
                    for (h.global || (h = Ya(h.source, kt(Fa.exec(h)) + 'g')), h.lastIndex = 0; (Q = h.exec(X)); )
                      var te = Q.index;
                    D = D.slice(0, te === a ? O : te);
                  }
                } else if (n.indexOf(jn(h), O) != O) {
                  var he = D.lastIndexOf(h);
                  he > -1 && (D = D.slice(0, he));
                }
                return D + f;
              }
              function J_(n) {
                return (n = kt(n)), n && Or.test(n) ? n.replace(qn, Qc) : n;
              }
              var ev = Wo(function (n, r, s) {
                  return n + (s ? ' ' : '') + r.toUpperCase();
                }),
                Qd = Vu('toUpperCase');
              function Ng(n, r, s) {
                return (n = kt(n)), (r = s ? a : r), r === a ? (_d(n) ? bd(n) : gd(n)) : n.match(r) || [];
              }
              var Tg = rt(function (n, r) {
                  try {
                    return Dn(n, a, r);
                  } catch (s) {
                    return qd(s) ? s : new Je(s);
                  }
                }),
                tv = fi(function (n, r) {
                  return (
                    kn(r, function (s) {
                      (s = Fr(s)), ii(n, s, oe(n[s], n));
                    }),
                    n
                  );
                });
              function nv(n) {
                var r = n == null ? 0 : n.length,
                  s = Ke();
                return (
                  (n = r
                    ? Ct(n, function (f) {
                        if (typeof f[1] != 'function') throw new gr(v);
                        return [s(f[0]), f[1]];
                      })
                    : []),
                  rt(function (f) {
                    for (var h = -1; ++h < r; ) {
                      var E = n[h];
                      if (Dn(E[0], this, f)) return Dn(E[1], this, f);
                    }
                  })
                );
              }
              function rv(n) {
                return ff(Xn(n, N));
              }
              function Xd(n) {
                return function () {
                  return n;
                };
              }
              function iv(n, r) {
                return n == null || n !== n ? r : n;
              }
              var ov = Al(),
                av = Al(!0);
              function Tr(n) {
                return n;
              }
              function jd(n) {
                return xa(typeof n == 'function' ? n : Xn(n, N));
              }
              function sv(n) {
                return yl(Xn(n, N));
              }
              function lv(n, r) {
                return zt(n, Xn(r, N));
              }
              var uv = rt(function (n, r) {
                  return function (s) {
                    return yr(s, n, r);
                  };
                }),
                cv = rt(function (n, r) {
                  return function (s) {
                    return yr(n, s, r);
                  };
                });
              function Jd(n, r, s) {
                var f = In(r),
                  h = ba(r, f);
                s == null && !(Jt(r) && (h.length || !f.length)) && ((s = r), (r = n), (n = this), (h = ba(r, In(r))));
                var E = !(Jt(s) && 'chain' in s) || !!s.chain,
                  T = Xo(n);
                return (
                  kn(h, function (O) {
                    var D = r[O];
                    (n[O] = D),
                      T &&
                        (n.prototype[O] = function () {
                          var Q = this.__chain__;
                          if (E || Q) {
                            var X = n(this.__wrapped__),
                              te = (X.__actions__ = Bn(this.__actions__));
                            return te.push({ func: D, args: arguments, thisArg: n }), (X.__chain__ = Q), X;
                          }
                          return D.apply(n, Xi([this.value()], arguments));
                        });
                  }),
                  n
                );
              }
              function fv() {
                return Ut._ === this && (Ut._ = Jc), this;
              }
              function ep() {}
              function dv(n) {
                return (
                  (n = it(n)),
                  rt(function (r) {
                    return El(r, n);
                  })
                );
              }
              var pv = Ol(Ct),
                gv = Ol(hu),
                hv = Ol(vu);
              function Rg(n) {
                return Ee(n) ? Eu(Fr(n)) : Ht(n);
              }
              function mv(n) {
                return function (r) {
                  return n == null ? a : Ai(n, r);
                };
              }
              var _v = Xu(),
                vv = Xu(!0);
              function tp() {
                return [];
              }
              function np() {
                return !1;
              }
              function yv() {
                return {};
              }
              function Ev() {
                return '';
              }
              function bv() {
                return !0;
              }
              function wv(n, r) {
                if (((n = it(n)), n < 1 || n > B)) return [];
                var s = C,
                  f = Nn(n, C);
                (r = Ke(r)), (n -= C);
                for (var h = wu(f, r); ++s < n; ) r(s);
                return h;
              }
              function xv(n) {
                return tt(n) ? Ct(n, Fr) : Gr(n) ? [n] : Bn(uc(kt(n)));
              }
              function Sv(n) {
                var r = ++fa;
                return kt(n) + r;
              }
              var kv = gs(function (n, r) {
                  return n + r;
                }, 0),
                Nv = vn('ceil'),
                Tv = gs(function (n, r) {
                  return n / r;
                }, 1),
                Rv = vn('floor');
              function Cv(n) {
                return n && n.length ? Uo(n, Tr, ao) : a;
              }
              function Av(n, r) {
                return n && n.length ? Uo(n, Ke(r, 2), ao) : a;
              }
              function Ov(n) {
                return Hc(n, Tr);
              }
              function Mv(n, r) {
                return Hc(n, Ke(r, 2));
              }
              function Iv(n) {
                return n && n.length ? Uo(n, Tr, so) : a;
              }
              function Lv(n, r) {
                return n && n.length ? Uo(n, Ke(r, 2), so) : a;
              }
              var Dv = gs(function (n, r) {
                  return n * r;
                }, 1),
                Pv = vn('round'),
                Bv = gs(function (n, r) {
                  return n - r;
                }, 0);
              function Uv(n) {
                return n && n.length ? bu(n, Tr) : 0;
              }
              function zv(n, r) {
                return n && n.length ? bu(n, Ke(r, 2)) : 0;
              }
              return (
                (y.after = A),
                (y.ary = W),
                (y.assign = Zm),
                (y.assignIn = yg),
                (y.assignInWith = Vf),
                (y.assignWith = Vm),
                (y.at = Qm),
                (y.before = ee),
                (y.bind = oe),
                (y.bindAll = tv),
                (y.bindKey = J),
                (y.castArray = ym),
                (y.chain = Yl),
                (y.chunk = zl),
                (y.compact = cc),
                (y.concat = xr),
                (y.cond = nv),
                (y.conforms = rv),
                (y.constant = Xd),
                (y.countBy = Hf),
                (y.create = Xm),
                (y.curry = ve),
                (y.curryRight = Re),
                (y.debounce = Oe),
                (y.defaults = jm),
                (y.defaultsDeep = Jm),
                (y.defer = jt),
                (y.delay = P),
                (y.difference = gt),
                (y.differenceBy = dn),
                (y.differenceWith = nn),
                (y.drop = bn),
                (y.dropRight = ur),
                (y.dropRightWhile = La),
                (y.dropWhile = an),
                (y.fill = xs),
                (y.filter = Ql),
                (y.flatMap = wc),
                (y.flatMapDeep = Fd),
                (y.flatMapDepth = Kf),
                (y.flatten = $l),
                (y.flattenDeep = ks),
                (y.flattenDepth = Jn),
                (y.flip = M),
                (y.flow = ov),
                (y.flowRight = av),
                (y.fromPairs = fc),
                (y.functions = a_),
                (y.functionsIn = s_),
                (y.groupBy = xc),
                (y.initial = Fl),
                (y.intersection = dc),
                (y.intersectionBy = po),
                (y.intersectionWith = Hl),
                (y.invert = u_),
                (y.invertBy = c_),
                (y.invokeMap = qf),
                (y.iteratee = jd),
                (y.keyBy = Hd),
                (y.keys = In),
                (y.keysIn = Nr),
                (y.map = Qo),
                (y.mapKeys = d_),
                (y.mapValues = p_),
                (y.matches = sv),
                (y.matchesProperty = lv),
                (y.memoize = U),
                (y.merge = g_),
                (y.mergeWith = Eg),
                (y.method = uv),
                (y.methodOf = cv),
                (y.mixin = Jd),
                (y.negate = se),
                (y.nthArg = dv),
                (y.omit = h_),
                (y.omitBy = m_),
                (y.once = Ie),
                (y.orderBy = Wd),
                (y.over = pv),
                (y.overArgs = We),
                (y.overEvery = gv),
                (y.overSome = hv),
                (y.partial = Ue),
                (y.partialRight = Ve),
                (y.partition = Cs),
                (y.pick = __),
                (y.pickBy = bg),
                (y.property = Rg),
                (y.propertyOf = mv),
                (y.pull = Wl),
                (y.pullAll = Ts),
                (y.pullAllBy = Fn),
                (y.pullAllWith = ho),
                (y.pullAt = Hr),
                (y.range = _v),
                (y.rangeRight = vv),
                (y.rearg = pn),
                (y.reject = e),
                (y.remove = er),
                (y.rest = yt),
                (y.reverse = Gl),
                (y.sampleSize = i),
                (y.set = y_),
                (y.setWith = E_),
                (y.shuffle = o),
                (y.slice = gc),
                (y.sortBy = _),
                (y.sortedUniq = _c),
                (y.sortedUniqBy = Yo),
                (y.split = W_),
                (y.spread = _o),
                (y.tail = Df),
                (y.take = Pf),
                (y.takeRight = vc),
                (y.takeRightWhile = Kl),
                (y.takeWhile = Od),
                (y.tap = Ud),
                (y.throttle = Kd),
                (y.thru = Wr),
                (y.toArray = mg),
                (y.toPairs = wg),
                (y.toPairsIn = xg),
                (y.toPath = xv),
                (y.toPlainObject = vg),
                (y.transform = b_),
                (y.unary = _m),
                (y.union = Md),
                (y.unionBy = Bf),
                (y.unionWith = Uf),
                (y.uniq = Zo),
                (y.uniqBy = Id),
                (y.uniqWith = Da),
                (y.unset = w_),
                (y.unzip = ql),
                (y.unzipWith = Wt),
                (y.update = x_),
                (y.updateWith = S_),
                (y.values = nu),
                (y.valuesIn = k_),
                (y.without = Ld),
                (y.words = Ng),
                (y.wrap = vm),
                (y.xor = zf),
                (y.xorBy = Dd),
                (y.xorWith = Pd),
                (y.zip = $f),
                (y.zipObject = Ff),
                (y.zipObjectDeep = Bd),
                (y.zipWith = Sr),
                (y.entries = wg),
                (y.entriesIn = xg),
                (y.extend = yg),
                (y.extendWith = Vf),
                Jd(y, y),
                (y.add = kv),
                (y.attempt = Tg),
                (y.camelCase = C_),
                (y.capitalize = Sg),
                (y.ceil = Nv),
                (y.clamp = N_),
                (y.clone = Em),
                (y.cloneDeep = wm),
                (y.cloneDeepWith = xm),
                (y.cloneWith = bm),
                (y.conformsTo = Sm),
                (y.deburr = kg),
                (y.defaultTo = iv),
                (y.divide = Tv),
                (y.endsWith = A_),
                (y.eq = zi),
                (y.escape = O_),
                (y.escapeRegExp = M_),
                (y.every = Wf),
                (y.find = Xl),
                (y.findIndex = fo),
                (y.findKey = e_),
                (y.findLast = Gf),
                (y.findLastIndex = Ss),
                (y.findLastKey = t_),
                (y.floor = Rv),
                (y.forEach = jl),
                (y.forEachRight = Rs),
                (y.forIn = n_),
                (y.forInRight = r_),
                (y.forOwn = i_),
                (y.forOwnRight = o_),
                (y.get = Zd),
                (y.gt = km),
                (y.gte = Nm),
                (y.has = l_),
                (y.hasIn = Vd),
                (y.head = Ko),
                (y.identity = Tr),
                (y.includes = Jl),
                (y.indexOf = Ui),
                (y.inRange = T_),
                (y.invoke = f_),
                (y.isArguments = As),
                (y.isArray = tt),
                (y.isArrayBuffer = Tm),
                (y.isArrayLike = kr),
                (y.isArrayLikeObject = sn),
                (y.isBoolean = Rm),
                (y.isBuffer = Pa),
                (y.isDate = Cm),
                (y.isElement = Am),
                (y.isEmpty = Om),
                (y.isEqual = Mm),
                (y.isEqualWith = Im),
                (y.isError = qd),
                (y.isFinite = Lm),
                (y.isFunction = Xo),
                (y.isInteger = dg),
                (y.isLength = Yf),
                (y.isMap = pg),
                (y.isMatch = Dm),
                (y.isMatchWith = Pm),
                (y.isNaN = Bm),
                (y.isNative = Um),
                (y.isNil = $m),
                (y.isNull = zm),
                (y.isNumber = gg),
                (y.isObject = Jt),
                (y.isObjectLike = rn),
                (y.isPlainObject = Sc),
                (y.isRegExp = Yd),
                (y.isSafeInteger = Fm),
                (y.isSet = hg),
                (y.isString = Zf),
                (y.isSymbol = Gr),
                (y.isTypedArray = tu),
                (y.isUndefined = Hm),
                (y.isWeakMap = Wm),
                (y.isWeakSet = Gm),
                (y.join = go),
                (y.kebabCase = I_),
                (y.last = $n),
                (y.lastIndexOf = Ns),
                (y.lowerCase = L_),
                (y.lowerFirst = D_),
                (y.lt = Km),
                (y.lte = qm),
                (y.max = Cv),
                (y.maxBy = Av),
                (y.mean = Ov),
                (y.meanBy = Mv),
                (y.min = Iv),
                (y.minBy = Lv),
                (y.stubArray = tp),
                (y.stubFalse = np),
                (y.stubObject = yv),
                (y.stubString = Ev),
                (y.stubTrue = bv),
                (y.multiply = Dv),
                (y.nth = pc),
                (y.noConflict = fv),
                (y.noop = ep),
                (y.now = k),
                (y.pad = P_),
                (y.padEnd = B_),
                (y.padStart = U_),
                (y.parseInt = z_),
                (y.random = R_),
                (y.reduce = Gd),
                (y.reduceRight = eu),
                (y.repeat = $_),
                (y.replace = F_),
                (y.result = v_),
                (y.round = Pv),
                (y.runInContext = L),
                (y.sample = t),
                (y.size = u),
                (y.snakeCase = H_),
                (y.some = c),
                (y.sortedIndex = hc),
                (y.sortedIndexBy = Ad),
                (y.sortedIndexOf = mo),
                (y.sortedLastIndex = Lf),
                (y.sortedLastIndexBy = mc),
                (y.sortedLastIndexOf = qo),
                (y.startCase = G_),
                (y.startsWith = K_),
                (y.subtract = Bv),
                (y.sum = Uv),
                (y.sumBy = zv),
                (y.template = q_),
                (y.times = wv),
                (y.toFinite = jo),
                (y.toInteger = it),
                (y.toLength = _g),
                (y.toLower = Y_),
                (y.toNumber = pi),
                (y.toSafeInteger = Ym),
                (y.toString = kt),
                (y.toUpper = Z_),
                (y.trim = V_),
                (y.trimEnd = Q_),
                (y.trimStart = X_),
                (y.truncate = j_),
                (y.unescape = J_),
                (y.uniqueId = Sv),
                (y.upperCase = ev),
                (y.upperFirst = Qd),
                (y.each = jl),
                (y.eachRight = Rs),
                (y.first = Ko),
                Jd(
                  y,
                  (function () {
                    var n = {};
                    return (
                      sr(y, function (r, s) {
                        vt.call(y.prototype, s) || (n[s] = r);
                      }),
                      n
                    );
                  })(),
                  { chain: !1 }
                ),
                (y.VERSION = p),
                kn(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function (n) {
                  y[n].placeholder = y;
                }),
                kn(['drop', 'take'], function (n, r) {
                  (et.prototype[n] = function (s) {
                    s = s === a ? 1 : tn(it(s), 0);
                    var f = this.__filtered__ && !r ? new et(this) : this.clone();
                    return (
                      f.__filtered__
                        ? (f.__takeCount__ = Nn(s, f.__takeCount__))
                        : f.__views__.push({ size: Nn(s, C), type: n + (f.__dir__ < 0 ? 'Right' : '') }),
                      f
                    );
                  }),
                    (et.prototype[n + 'Right'] = function (s) {
                      return this.reverse()[n](s).reverse();
                    });
                }),
                kn(['filter', 'map', 'takeWhile'], function (n, r) {
                  var s = r + 1,
                    f = s == pe || s == j;
                  et.prototype[n] = function (h) {
                    var E = this.clone();
                    return (
                      E.__iteratees__.push({ iteratee: Ke(h, 3), type: s }), (E.__filtered__ = E.__filtered__ || f), E
                    );
                  };
                }),
                kn(['head', 'last'], function (n, r) {
                  var s = 'take' + (r ? 'Right' : '');
                  et.prototype[n] = function () {
                    return this[s](1).value()[0];
                  };
                }),
                kn(['initial', 'tail'], function (n, r) {
                  var s = 'drop' + (r ? '' : 'Right');
                  et.prototype[n] = function () {
                    return this.__filtered__ ? new et(this) : this[s](1);
                  };
                }),
                (et.prototype.compact = function () {
                  return this.filter(Tr);
                }),
                (et.prototype.find = function (n) {
                  return this.filter(n).head();
                }),
                (et.prototype.findLast = function (n) {
                  return this.reverse().find(n);
                }),
                (et.prototype.invokeMap = rt(function (n, r) {
                  return typeof n == 'function'
                    ? new et(this)
                    : this.map(function (s) {
                        return yr(s, n, r);
                      });
                })),
                (et.prototype.reject = function (n) {
                  return this.filter(se(Ke(n)));
                }),
                (et.prototype.slice = function (n, r) {
                  n = it(n);
                  var s = this;
                  return s.__filtered__ && (n > 0 || r < 0)
                    ? new et(s)
                    : (n < 0 ? (s = s.takeRight(-n)) : n && (s = s.drop(n)),
                      r !== a && ((r = it(r)), (s = r < 0 ? s.dropRight(-r) : s.take(r - n))),
                      s);
                }),
                (et.prototype.takeRightWhile = function (n) {
                  return this.reverse().takeWhile(n).reverse();
                }),
                (et.prototype.toArray = function () {
                  return this.take(C);
                }),
                sr(et.prototype, function (n, r) {
                  var s = /^(?:filter|find|map|reject)|While$/.test(r),
                    f = /^(?:head|last)$/.test(r),
                    h = y[f ? 'take' + (r == 'last' ? 'Right' : '') : r],
                    E = f || /^find/.test(r);
                  h &&
                    (y.prototype[r] = function () {
                      var T = this.__wrapped__,
                        O = f ? [1] : arguments,
                        D = T instanceof et,
                        Q = O[0],
                        X = D || tt(T),
                        te = function (ft) {
                          var ht = h.apply(y, Xi([ft], O));
                          return f && he ? ht[0] : ht;
                        };
                      X && s && typeof Q == 'function' && Q.length != 1 && (D = X = !1);
                      var he = this.__chain__,
                        De = !!this.__actions__.length,
                        Qe = E && !he,
                        ot = D && !De;
                      if (!E && X) {
                        T = ot ? T : new et(this);
                        var Xe = n.apply(T, O);
                        return Xe.__actions__.push({ func: Wr, args: [te], thisArg: a }), new Tn(Xe, he);
                      }
                      return Qe && ot
                        ? n.apply(this, O)
                        : ((Xe = this.thru(te)), Qe ? (f ? Xe.value()[0] : Xe.value()) : Xe);
                    });
                }),
                kn(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function (n) {
                  var r = ki[n],
                    s = /^(?:push|sort|unshift)$/.test(n) ? 'tap' : 'thru',
                    f = /^(?:pop|shift)$/.test(n);
                  y.prototype[n] = function () {
                    var h = arguments;
                    if (f && !this.__chain__) {
                      var E = this.value();
                      return r.apply(tt(E) ? E : [], h);
                    }
                    return this[s](function (T) {
                      return r.apply(tt(T) ? T : [], h);
                    });
                  };
                }),
                sr(et.prototype, function (n, r) {
                  var s = y[r];
                  if (s) {
                    var f = s.name + '';
                    vt.call(ha, f) || (ha[f] = []), ha[f].push({ name: r, func: s });
                  }
                }),
                (ha[Aa(a, V).name] = [{ name: 'wrapper', func: a }]),
                (et.prototype.clone = ll),
                (et.prototype.reverse = Au),
                (et.prototype.value = va),
                (y.prototype.at = Zl),
                (y.prototype.chain = Vo),
                (y.prototype.commit = Vl),
                (y.prototype.next = yc),
                (y.prototype.plant = zd),
                (y.prototype.reverse = bc),
                (y.prototype.toJSON = y.prototype.valueOf = y.prototype.value = $d),
                (y.prototype.first = y.prototype.head),
                Ti && (y.prototype[Ti] = Ec),
                y
              );
            },
            ua = wd();
          jr ? (((jr.exports = ua)._ = ua), (Ka._ = ua)) : (Ut._ = ua);
        }).call(ay);
      })(Rc, Rc.exports)),
    Rc.exports
  );
}
var ly = sy();
const rm = ({ articles: d }) => {
    const l = ye.useMemo(() => {
      const a = ly.groupBy(d, (g) => Qp(g.date).format('YYYY'));
      return Object.entries(a)
        .sort(([g], [m]) => Number(m) - Number(g))
        .map(([g, m]) =>
          qe.jsxs(
            'div',
            {
              children: [
                qe.jsx('div', { className: 'mx-0 mb-3 mt-8 text-2xl font-bold', children: g }),
                qe.jsx('div', {
                  className: 'mt-5 p-0 leading-[1.8]',
                  children: m.map((v) =>
                    qe.jsxs(
                      'div',
                      {
                        className: 'flex justify-between justify-items-center pb-1',
                        children: [
                          qe.jsx(nm, {
                            to: `/articles/${v.id}`,
                            children: qe.jsx('span', {
                              className: 'hover:text-emerald-300 active:text-emerald-300',
                              children: v.title,
                            }),
                          }),
                          qe.jsx('span', {
                            className: 'inline-block w-20 text-right text-sm opacity-30',
                            children: Qp(v.date).format('MM.DD'),
                          }),
                        ],
                      },
                      v.title
                    )
                  ),
                }),
              ],
            },
            g
          )
        );
    }, [d]);
    return qe.jsx('div', { className: 'mt-10', children: l });
  },
  iu = [
    {
      id: '70302818',
      title: '如何编写一个 Webpack Loader copy 3',
      date: '2025-03-15',
      tags: ['typescript', 'webpack'],
      fileName: '如何编写一个 Webpack Loader copy 3.md',
      content: `
> 在平时自己由零搭建项目时，虽然基础配置都比较熟悉，比如配置 file-loader, url-loader, css-loader 等，配置不难，但究竟是怎么起作用的呢，今天就来说说如何编写一个 Webpack Loader。

# Loader 作用

按我自己的简单理解，loader 通常指打包的方案，即按什么方式来处理打包，打包的时候它可以拿到模块源代码，\`经过特定 loader 的转换\`后返回新的结果。

## 水果列表

- 苹果
- 香蕉
- 橙子
- 草莓
- 葡萄
- 西瓜
- 芒果

~~比如 sass-loader 可以把 SCSS 代码转换成 CSS 代码~~

\`\`\`js
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';
import articleList from '../articles.json';
import { Article } from '../types';
import dayjs from 'dayjs';

marked.setOptions({
  breaks: true, // 允许回车换行
  gfm: true, // 启用 GitHub Flavored Markdown
});

const Detail: FC = () => {
  const params = useParams();
  const [article, setArticle] = useState<Article>();

  console.log('params', params, article?.content);

  useEffect(() => {
    const record = articleList.find((item) => item.id === params.id);
    setArticle(record);
  }, [params]);

  if (!article) {
    return <div>404</div>;
  }

  return (
    <div className="mt-8">
      <h1 className="my-6 text-3xl font-bold">{article.title}</h1>
      <div className="mb-4 text-sm text-stone-400">{\`Updated at \${dayjs(article.date).format('YYYY.MM.DD')}\`}</div>
      <article
        className="prose prose-stone lg:prose-lg dark:prose-invert prose-headings:font-bold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-a:text-blue-600 prose-code:text-blue-600 prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-img:rounded-lg max-w-none"
        dangerouslySetInnerHTML={{
          __html: marked.parse(article.content),
        }}
      ></article>
      <footer></footer>
    </div>
  );
};

export default Detail;
\`\`\`
`,
    },
    {
      id: '593848798',
      title: '如何编写一个 Webpack Loader',
      date: '2025-02-15',
      tags: ['react', 'typescript'],
      fileName: '如何编写一个 Webpack Loader.md',
      content: `
> 在平时自己由零搭建项目时，虽然基础配置都比较熟悉，比如配置 file-loader, url-loader, css-loader 等，配置不难，但究竟是怎么起作用的呢，今天就来说说如何编写一个 Webpack Loader。

# Loader 作用

按我自己的简单理解，loader 通常指打包的方案，即按什么方式来处理打包，打包的时候它可以拿到模块源代码，经过特定 loader 的转换后返回新的结果。
比如 sass-loader 可以把 SCSS 代码转换成 CSS 代码
`,
    },
    {
      id: '1798789778',
      title: '如何编写一个 Webpack Loader copy 2',
      date: '2024-02-15',
      tags: ['webpack'],
      fileName: '如何编写一个 Webpack Loader copy 2.md',
      content: `
> 在平时自己由零搭建项目时，虽然基础配置都比较熟悉，比如配置 file-loader, url-loader, css-loader 等，配置不难，但究竟是怎么起作用的呢，今天就来说说如何编写一个 Webpack Loader。

# Loader 作用

按我自己的简单理解，loader 通常指打包的方案，即按什么方式来处理打包，打包的时候它可以拿到模块源代码，经过特定 loader 的转换后返回新的结果。
比如 sass-loader \`可以把 SCSS 代码转换成 CSS 代码\`

# 如何编写一个 Loader

## 1. 创建一个 Loader

\`\`\`js
// 创建一个 loader
module.exports = function (source) {
  return source.replace(/console\\.log\\(([^)]+)\\);?/g, '');
};
\`\`\`

## 2. 使用 Loader

\`\`\`js
// 在 webpack 配置中使用 loader
module.exports = {
  module: {
    rules: [
      {
        test: /\\.js$/,
        use: ['babel-loader'],
      },
    ],
  },
};
\`\`\`

## 3. 配置 Loader

\`\`\`js
// 配置 Loader
module.exports = {
  module: {
    rules: [
      {
        test: /\\.js$/,
        use: ['babel-loader'],
      },
    ],
  },
};
\`\`\` 
`,
    },
    {
      id: '176010091',
      title: '如何编写一个 Webpack Loader copy',
      date: '2023-02-15',
      tags: ['webpack'],
      fileName: '如何编写一个 Webpack Loader copy.md',
      content: `
> 在平时自己由零搭建项目时，虽然基础配置都比较熟悉，比如配置 file-loader, url-loader, css-loader 等，配置不难，但究竟是怎么起作用的呢，今天就来说说如何编写一个 Webpack Loader。

# Loader 作用

按我自己的简单理解，loader 通常指打包的方案，即按什么方式来处理打包，打包的时候它可以拿到模块源代码，经过特定 loader 的转换后返回新的结果。
比如 sass-loader 可以把 SCSS 代码转换成 CSS 代码
`,
    },
  ],
  uy = () => {
    const [d, l] = ye.useState([]);
    return (
      ye.useEffect(() => {
        l(iu);
      }, []),
      qe.jsx(rm, { articles: d })
    );
  };
var up, Vg;
function cy() {
  if (Vg) return up;
  Vg = 1;
  function d(R) {
    return (
      R instanceof Map
        ? (R.clear =
            R.delete =
            R.set =
              function () {
                throw new Error('map is read-only');
              })
        : R instanceof Set &&
          (R.add =
            R.clear =
            R.delete =
              function () {
                throw new Error('set is read-only');
              }),
      Object.freeze(R),
      Object.getOwnPropertyNames(R).forEach((Z) => {
        const fe = R[Z],
          Ye = typeof fe;
        (Ye === 'object' || Ye === 'function') && !Object.isFrozen(fe) && d(fe);
      }),
      R
    );
  }
  class l {
    constructor(Z) {
      Z.data === void 0 && (Z.data = {}), (this.data = Z.data), (this.isMatchIgnored = !1);
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function a(R) {
    return R.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;');
  }
  function p(R, ...Z) {
    const fe = Object.create(null);
    for (const Ye in R) fe[Ye] = R[Ye];
    return (
      Z.forEach(function (Ye) {
        for (const Mt in Ye) fe[Mt] = Ye[Mt];
      }),
      fe
    );
  }
  const g = '</span>',
    m = (R) => !!R.scope,
    v = (R, { prefix: Z }) => {
      if (R.startsWith('language:')) return R.replace('language:', 'language-');
      if (R.includes('.')) {
        const fe = R.split('.');
        return [`${Z}${fe.shift()}`, ...fe.map((Ye, Mt) => `${Ye}${'_'.repeat(Mt + 1)}`)].join(' ');
      }
      return `${Z}${R}`;
    };
  class x {
    constructor(Z, fe) {
      (this.buffer = ''), (this.classPrefix = fe.classPrefix), Z.walk(this);
    }
    addText(Z) {
      this.buffer += a(Z);
    }
    openNode(Z) {
      if (!m(Z)) return;
      const fe = v(Z.scope, { prefix: this.classPrefix });
      this.span(fe);
    }
    closeNode(Z) {
      m(Z) && (this.buffer += g);
    }
    value() {
      return this.buffer;
    }
    span(Z) {
      this.buffer += `<span class="${Z}">`;
    }
  }
  const S = (R = {}) => {
    const Z = { children: [] };
    return Object.assign(Z, R), Z;
  };
  class w {
    constructor() {
      (this.rootNode = S()), (this.stack = [this.rootNode]);
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    add(Z) {
      this.top.children.push(Z);
    }
    openNode(Z) {
      const fe = S({ scope: Z });
      this.add(fe), this.stack.push(fe);
    }
    closeNode() {
      if (this.stack.length > 1) return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); );
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    walk(Z) {
      return this.constructor._walk(Z, this.rootNode);
    }
    static _walk(Z, fe) {
      return (
        typeof fe == 'string'
          ? Z.addText(fe)
          : fe.children && (Z.openNode(fe), fe.children.forEach((Ye) => this._walk(Z, Ye)), Z.closeNode(fe)),
        Z
      );
    }
    static _collapse(Z) {
      typeof Z != 'string' &&
        Z.children &&
        (Z.children.every((fe) => typeof fe == 'string')
          ? (Z.children = [Z.children.join('')])
          : Z.children.forEach((fe) => {
              w._collapse(fe);
            }));
    }
  }
  class b extends w {
    constructor(Z) {
      super(), (this.options = Z);
    }
    addText(Z) {
      Z !== '' && this.add(Z);
    }
    startScope(Z) {
      this.openNode(Z);
    }
    endScope() {
      this.closeNode();
    }
    __addSublanguage(Z, fe) {
      const Ye = Z.root;
      fe && (Ye.scope = `language:${fe}`), this.add(Ye);
    }
    toHTML() {
      return new x(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function N(R) {
    return R ? (typeof R == 'string' ? R : R.source) : null;
  }
  function I(R) {
    return F('(?=', R, ')');
  }
  function z(R) {
    return F('(?:', R, ')*');
  }
  function G(R) {
    return F('(?:', R, ')?');
  }
  function F(...R) {
    return R.map((fe) => N(fe)).join('');
  }
  function $(R) {
    const Z = R[R.length - 1];
    return typeof Z == 'object' && Z.constructor === Object ? (R.splice(R.length - 1, 1), Z) : {};
  }
  function V(...R) {
    return '(' + ($(R).capture ? '' : '?:') + R.map((Ye) => N(Ye)).join('|') + ')';
  }
  function ue(R) {
    return new RegExp(R.toString() + '|').exec('').length - 1;
  }
  function ae(R, Z) {
    const fe = R && R.exec(Z);
    return fe && fe.index === 0;
  }
  const Te = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function de(R, { joinWith: Z }) {
    let fe = 0;
    return R.map((Ye) => {
      fe += 1;
      const Mt = fe;
      let Bt = N(Ye),
        ke = '';
      for (; Bt.length > 0; ) {
        const me = Te.exec(Bt);
        if (!me) {
          ke += Bt;
          break;
        }
        (ke += Bt.substring(0, me.index)),
          (Bt = Bt.substring(me.index + me[0].length)),
          me[0][0] === '\\' && me[1]
            ? (ke += '\\' + String(Number(me[1]) + Mt))
            : ((ke += me[0]), me[0] === '(' && fe++);
      }
      return ke;
    })
      .map((Ye) => `(${Ye})`)
      .join(Z);
  }
  const be = /\b\B/,
    we = '[a-zA-Z]\\w*',
    ge = '[a-zA-Z_]\\w*',
    ze = '\\b\\d+(\\.\\d+)?',
    Be = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
    Ae = '\\b(0b[01]+)',
    dt =
      '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~',
    st = (R = {}) => {
      const Z = /^#![ ]*\//;
      return (
        R.binary && (R.begin = F(Z, /.*\b/, R.binary, /\b.*/)),
        p(
          {
            scope: 'meta',
            begin: Z,
            end: /$/,
            relevance: 0,
            'on:begin': (fe, Ye) => {
              fe.index !== 0 && Ye.ignoreMatch();
            },
          },
          R
        )
      );
    },
    pe = { begin: '\\\\[\\s\\S]', relevance: 0 },
    ne = { scope: 'string', begin: "'", end: "'", illegal: '\\n', contains: [pe] },
    j = { scope: 'string', begin: '"', end: '"', illegal: '\\n', contains: [pe] },
    re = {
      begin:
        /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
    },
    B = function (R, Z, fe = {}) {
      const Ye = p({ scope: 'comment', begin: R, end: Z, contains: [] }, fe);
      Ye.contains.push({
        scope: 'doctag',
        begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
        end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
        excludeBegin: !0,
        relevance: 0,
      });
      const Mt = V(
        'I',
        'a',
        'is',
        'so',
        'us',
        'to',
        'at',
        'if',
        'in',
        'it',
        'on',
        /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
        /[A-Za-z]+[-][a-z]+/,
        /[A-Za-z][a-z]{2,}/
      );
      return Ye.contains.push({ begin: F(/[ ]+/, '(', Mt, /[.]?[:]?([.][ ]|[ ])/, '){3}') }), Ye;
    },
    ie = B('//', '$'),
    Y = B('/\\*', '\\*/'),
    C = B('#', '$'),
    K = { scope: 'number', begin: ze, relevance: 0 },
    xe = { scope: 'number', begin: Be, relevance: 0 },
    Se = { scope: 'number', begin: Ae, relevance: 0 },
    Me = {
      scope: 'regexp',
      begin: /\/(?=[^/\n]*\/)/,
      end: /\/[gimuy]*/,
      contains: [pe, { begin: /\[/, end: /\]/, relevance: 0, contains: [pe] }],
    },
    $e = { scope: 'title', begin: we, relevance: 0 },
    Pe = { scope: 'title', begin: ge, relevance: 0 },
    Ce = { begin: '\\.\\s*' + ge, relevance: 0 };
  var je = Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: ne,
    BACKSLASH_ESCAPE: pe,
    BINARY_NUMBER_MODE: Se,
    BINARY_NUMBER_RE: Ae,
    COMMENT: B,
    C_BLOCK_COMMENT_MODE: Y,
    C_LINE_COMMENT_MODE: ie,
    C_NUMBER_MODE: xe,
    C_NUMBER_RE: Be,
    END_SAME_AS_BEGIN: function (R) {
      return Object.assign(R, {
        'on:begin': (Z, fe) => {
          fe.data._beginMatch = Z[1];
        },
        'on:end': (Z, fe) => {
          fe.data._beginMatch !== Z[1] && fe.ignoreMatch();
        },
      });
    },
    HASH_COMMENT_MODE: C,
    IDENT_RE: we,
    MATCH_NOTHING_RE: be,
    METHOD_GUARD: Ce,
    NUMBER_MODE: K,
    NUMBER_RE: ze,
    PHRASAL_WORDS_MODE: re,
    QUOTE_STRING_MODE: j,
    REGEXP_MODE: Me,
    RE_STARTERS_RE: dt,
    SHEBANG: st,
    TITLE_MODE: $e,
    UNDERSCORE_IDENT_RE: ge,
    UNDERSCORE_TITLE_MODE: Pe,
  });
  function mt(R, Z) {
    R.input[R.index - 1] === '.' && Z.ignoreMatch();
  }
  function Ot(R, Z) {
    R.className !== void 0 && ((R.scope = R.className), delete R.className);
  }
  function Gt(R, Z) {
    Z &&
      R.beginKeywords &&
      ((R.begin = '\\b(' + R.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)'),
      (R.__beforeBegin = mt),
      (R.keywords = R.keywords || R.beginKeywords),
      delete R.beginKeywords,
      R.relevance === void 0 && (R.relevance = 0));
  }
  function un(R, Z) {
    Array.isArray(R.illegal) && (R.illegal = V(...R.illegal));
  }
  function Yr(R, Z) {
    if (R.match) {
      if (R.begin || R.end) throw new Error('begin & end are not supported with match');
      (R.begin = R.match), delete R.match;
    }
  }
  function Fi(R, Z) {
    R.relevance === void 0 && (R.relevance = 1);
  }
  const wn = (R, Z) => {
      if (!R.beforeMatch) return;
      if (R.starts) throw new Error('beforeMatch cannot be used with starts');
      const fe = Object.assign({}, R);
      Object.keys(R).forEach((Ye) => {
        delete R[Ye];
      }),
        (R.keywords = fe.keywords),
        (R.begin = F(fe.beforeMatch, I(fe.begin))),
        (R.starts = { relevance: 0, contains: [Object.assign(fe, { endsParent: !0 })] }),
        (R.relevance = 0),
        delete fe.beforeMatch;
    },
    Hi = ['of', 'and', 'for', 'in', 'not', 'or', 'if', 'then', 'parent', 'list', 'value'],
    yo = 'keyword';
  function Hn(R, Z, fe = yo) {
    const Ye = Object.create(null);
    return (
      typeof R == 'string'
        ? Mt(fe, R.split(' '))
        : Array.isArray(R)
          ? Mt(fe, R)
          : Object.keys(R).forEach(function (Bt) {
              Object.assign(Ye, Hn(R[Bt], Z, Bt));
            }),
      Ye
    );
    function Mt(Bt, ke) {
      Z && (ke = ke.map((me) => me.toLowerCase())),
        ke.forEach(function (me) {
          const He = me.split('|');
          Ye[He[0]] = [Bt, Kt(He[0], He[1])];
        });
    }
  }
  function Kt(R, Z) {
    return Z ? Number(Z) : Cr(R) ? 0 : 1;
  }
  function Cr(R) {
    return Hi.includes(R.toLowerCase());
  }
  const Zr = {},
    dr = (R) => {
      console.error(R);
    },
    Wn = (R, ...Z) => {
      console.log(`WARN: ${R}`, ...Z);
    },
    hn = (R, Z) => {
      Zr[`${R}/${Z}`] || (console.log(`Deprecated as of ${R}. ${Z}`), (Zr[`${R}/${Z}`] = !0));
    },
    Gn = new Error();
  function Kn(R, Z, { key: fe }) {
    let Ye = 0;
    const Mt = R[fe],
      Bt = {},
      ke = {};
    for (let me = 1; me <= Z.length; me++) (ke[me + Ye] = Mt[me]), (Bt[me + Ye] = !0), (Ye += ue(Z[me - 1]));
    (R[fe] = ke), (R[fe]._emit = Bt), (R[fe]._multi = !0);
  }
  function mi(R) {
    if (Array.isArray(R.begin)) {
      if (R.skip || R.excludeBegin || R.returnBegin)
        throw (dr('skip, excludeBegin, returnBegin not compatible with beginScope: {}'), Gn);
      if (typeof R.beginScope != 'object' || R.beginScope === null) throw (dr('beginScope must be object'), Gn);
      Kn(R, R.begin, { key: 'beginScope' }), (R.begin = de(R.begin, { joinWith: '' }));
    }
  }
  function tr(R) {
    if (Array.isArray(R.end)) {
      if (R.skip || R.excludeEnd || R.returnEnd)
        throw (dr('skip, excludeEnd, returnEnd not compatible with endScope: {}'), Gn);
      if (typeof R.endScope != 'object' || R.endScope === null) throw (dr('endScope must be object'), Gn);
      Kn(R, R.end, { key: 'endScope' }), (R.end = de(R.end, { joinWith: '' }));
    }
  }
  function Ar(R) {
    R.scope && typeof R.scope == 'object' && R.scope !== null && ((R.beginScope = R.scope), delete R.scope);
  }
  function Wi(R) {
    Ar(R),
      typeof R.beginScope == 'string' && (R.beginScope = { _wrap: R.beginScope }),
      typeof R.endScope == 'string' && (R.endScope = { _wrap: R.endScope }),
      mi(R),
      tr(R);
  }
  function Gi(R) {
    function Z(ke, me) {
      return new RegExp(N(ke), 'm' + (R.case_insensitive ? 'i' : '') + (R.unicodeRegex ? 'u' : '') + (me ? 'g' : ''));
    }
    class fe {
      constructor() {
        (this.matchIndexes = {}), (this.regexes = []), (this.matchAt = 1), (this.position = 0);
      }
      addRule(me, He) {
        (He.position = this.position++),
          (this.matchIndexes[this.matchAt] = He),
          this.regexes.push([He, me]),
          (this.matchAt += ue(me) + 1);
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const me = this.regexes.map((He) => He[1]);
        (this.matcherRe = Z(de(me, { joinWith: '|' }), !0)), (this.lastIndex = 0);
      }
      exec(me) {
        this.matcherRe.lastIndex = this.lastIndex;
        const He = this.matcherRe.exec(me);
        if (!He) return null;
        const qt = He.findIndex((Vr, qi) => qi > 0 && Vr !== void 0),
          Tt = this.matchIndexes[qt];
        return He.splice(0, qt), Object.assign(He, Tt);
      }
    }
    class Ye {
      constructor() {
        (this.rules = []), (this.multiRegexes = []), (this.count = 0), (this.lastIndex = 0), (this.regexIndex = 0);
      }
      getMatcher(me) {
        if (this.multiRegexes[me]) return this.multiRegexes[me];
        const He = new fe();
        return (
          this.rules.slice(me).forEach(([qt, Tt]) => He.addRule(qt, Tt)), He.compile(), (this.multiRegexes[me] = He), He
        );
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      addRule(me, He) {
        this.rules.push([me, He]), He.type === 'begin' && this.count++;
      }
      exec(me) {
        const He = this.getMatcher(this.regexIndex);
        He.lastIndex = this.lastIndex;
        let qt = He.exec(me);
        if (this.resumingScanAtSamePosition() && !(qt && qt.index === this.lastIndex)) {
          const Tt = this.getMatcher(0);
          (Tt.lastIndex = this.lastIndex + 1), (qt = Tt.exec(me));
        }
        return qt && ((this.regexIndex += qt.position + 1), this.regexIndex === this.count && this.considerAll()), qt;
      }
    }
    function Mt(ke) {
      const me = new Ye();
      return (
        ke.contains.forEach((He) => me.addRule(He.begin, { rule: He, type: 'begin' })),
        ke.terminatorEnd && me.addRule(ke.terminatorEnd, { type: 'end' }),
        ke.illegal && me.addRule(ke.illegal, { type: 'illegal' }),
        me
      );
    }
    function Bt(ke, me) {
      const He = ke;
      if (ke.isCompiled) return He;
      [Ot, Yr, Wi, wn].forEach((Tt) => Tt(ke, me)),
        R.compilerExtensions.forEach((Tt) => Tt(ke, me)),
        (ke.__beforeBegin = null),
        [Gt, un, Fi].forEach((Tt) => Tt(ke, me)),
        (ke.isCompiled = !0);
      let qt = null;
      return (
        typeof ke.keywords == 'object' &&
          ke.keywords.$pattern &&
          ((ke.keywords = Object.assign({}, ke.keywords)), (qt = ke.keywords.$pattern), delete ke.keywords.$pattern),
        (qt = qt || /\w+/),
        ke.keywords && (ke.keywords = Hn(ke.keywords, R.case_insensitive)),
        (He.keywordPatternRe = Z(qt, !0)),
        me &&
          (ke.begin || (ke.begin = /\B|\b/),
          (He.beginRe = Z(He.begin)),
          !ke.end && !ke.endsWithParent && (ke.end = /\B|\b/),
          ke.end && (He.endRe = Z(He.end)),
          (He.terminatorEnd = N(He.end) || ''),
          ke.endsWithParent && me.terminatorEnd && (He.terminatorEnd += (ke.end ? '|' : '') + me.terminatorEnd)),
        ke.illegal && (He.illegalRe = Z(ke.illegal)),
        ke.contains || (ke.contains = []),
        (ke.contains = [].concat(
          ...ke.contains.map(function (Tt) {
            return Eo(Tt === 'self' ? ke : Tt);
          })
        )),
        ke.contains.forEach(function (Tt) {
          Bt(Tt, He);
        }),
        ke.starts && Bt(ke.starts, me),
        (He.matcher = Mt(He)),
        He
      );
    }
    if ((R.compilerExtensions || (R.compilerExtensions = []), R.contains && R.contains.includes('self')))
      throw new Error('ERR: contains `self` is not supported at the top-level of a language.  See documentation.');
    return (R.classNameAliases = p(R.classNameAliases || {})), Bt(R);
  }
  function _i(R) {
    return R ? R.endsWithParent || _i(R.starts) : !1;
  }
  function Eo(R) {
    return (
      R.variants &&
        !R.cachedVariants &&
        (R.cachedVariants = R.variants.map(function (Z) {
          return p(R, { variants: null }, Z);
        })),
      R.cachedVariants
        ? R.cachedVariants
        : _i(R)
          ? p(R, { starts: R.starts ? p(R.starts) : null })
          : Object.isFrozen(R)
            ? p(R)
            : R
    );
  }
  var vi = '11.11.1';
  class yi extends Error {
    constructor(Z, fe) {
      super(Z), (this.name = 'HTMLInjectionError'), (this.html = fe);
    }
  }
  const Ei = a,
    Ki = p,
    pt = Symbol('nomatch'),
    qn = 7,
    xn = function (R) {
      const Z = Object.create(null),
        fe = Object.create(null),
        Ye = [];
      let Mt = !0;
      const Bt = "Could not find the language '{}', did you forget to load/include a language module?",
        ke = { disableAutodetect: !0, name: 'Plain text', contains: [] };
      let me = {
        ignoreUnescapedHTML: !1,
        throwUnescapedHTML: !1,
        noHighlightRe: /^(no-?highlight)$/i,
        languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
        classPrefix: 'hljs-',
        cssSelector: 'pre code',
        languages: null,
        __emitter: b,
      };
      function He(le) {
        return me.noHighlightRe.test(le);
      }
      function qt(le) {
        let Le = le.className + ' ';
        Le += le.parentNode ? le.parentNode.className : '';
        const nt = me.languageDetectRe.exec(Le);
        if (nt) {
          const at = Mr(nt[1]);
          return (
            at || (Wn(Bt.replace('{}', nt[1])), Wn('Falling back to no-highlight mode for this block.', le)),
            at ? nt[1] : 'no-highlight'
          );
        }
        return Le.split(/\s+/).find((at) => He(at) || Mr(at));
      }
      function Tt(le, Le, nt) {
        let at = '',
          Qt = '';
        typeof Le == 'object'
          ? ((at = le), (nt = Le.ignoreIllegals), (Qt = Le.language))
          : (hn('10.7.0', 'highlight(lang, code, ...args) has been deprecated.'),
            hn(
              '10.7.0',
              `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`
            ),
            (Qt = le),
            (at = Le)),
          nt === void 0 && (nt = !0);
        const Ft = { code: at, language: Qt };
        xo('before:highlight', Ft);
        const Ir = Ft.result ? Ft.result : Vr(Ft.language, Ft.code, nt);
        return (Ir.code = Ft.code), xo('after:highlight', Ir), Ir;
      }
      function Vr(le, Le, nt, at) {
        const Qt = Object.create(null);
        function Ft(ce, Ne) {
          return ce.keywords[Ne];
        }
        function Ir() {
          if (!Ge.keywords) {
            Yt.addText(bt);
            return;
          }
          let ce = 0;
          Ge.keywordPatternRe.lastIndex = 0;
          let Ne = Ge.keywordPatternRe.exec(bt),
            Ze = '';
          for (; Ne; ) {
            Ze += bt.substring(ce, Ne.index);
            const lt = nr.case_insensitive ? Ne[0].toLowerCase() : Ne[0],
              Zt = Ft(Ge, lt);
            if (Zt) {
              const [cn, cu] = Zt;
              if (
                (Yt.addText(Ze),
                (Ze = ''),
                (Qt[lt] = (Qt[lt] || 0) + 1),
                Qt[lt] <= qn && (Zi += cu),
                cn.startsWith('_'))
              )
                Ze += Ne[0];
              else {
                const zs = nr.classNameAliases[cn] || cn;
                mn(Ne[0], zs);
              }
            } else Ze += Ne[0];
            (ce = Ge.keywordPatternRe.lastIndex), (Ne = Ge.keywordPatternRe.exec(bt));
          }
          (Ze += bt.substring(ce)), Yt.addText(Ze);
        }
        function ko() {
          if (bt === '') return;
          let ce = null;
          if (typeof Ge.subLanguage == 'string') {
            if (!Z[Ge.subLanguage]) {
              Yt.addText(bt);
              return;
            }
            (ce = Vr(Ge.subLanguage, bt, !0, na[Ge.subLanguage])), (na[Ge.subLanguage] = ce._top);
          } else ce = bo(bt, Ge.subLanguage.length ? Ge.subLanguage : null);
          Ge.relevance > 0 && (Zi += ce.relevance), Yt.__addSublanguage(ce._emitter, ce.language);
        }
        function Sn() {
          Ge.subLanguage != null ? ko() : Ir(), (bt = '');
        }
        function mn(ce, Ne) {
          ce !== '' && (Yt.startScope(Ne), Yt.addText(ce), Yt.endScope());
        }
        function No(ce, Ne) {
          let Ze = 1;
          const lt = Ne.length - 1;
          for (; Ze <= lt; ) {
            if (!ce._emit[Ze]) {
              Ze++;
              continue;
            }
            const Zt = nr.classNameAliases[ce[Ze]] || ce[Ze],
              cn = Ne[Ze];
            Zt ? mn(cn, Zt) : ((bt = cn), Ir(), (bt = '')), Ze++;
          }
        }
        function wi(ce, Ne) {
          return (
            ce.scope && typeof ce.scope == 'string' && Yt.openNode(nr.classNameAliases[ce.scope] || ce.scope),
            ce.beginScope &&
              (ce.beginScope._wrap
                ? (mn(bt, nr.classNameAliases[ce.beginScope._wrap] || ce.beginScope._wrap), (bt = ''))
                : ce.beginScope._multi && (No(ce.beginScope, Ne), (bt = ''))),
            (Ge = Object.create(ce, { parent: { value: Ge } })),
            Ge
          );
        }
        function Qr(ce, Ne, Ze) {
          let lt = ae(ce.endRe, Ze);
          if (lt) {
            if (ce['on:end']) {
              const Zt = new l(ce);
              ce['on:end'](Ne, Zt), Zt.isMatchIgnored && (lt = !1);
            }
            if (lt) {
              for (; ce.endsParent && ce.parent; ) ce = ce.parent;
              return ce;
            }
          }
          if (ce.endsWithParent) return Qr(ce.parent, Ne, Ze);
        }
        function Us(ce) {
          return Ge.matcher.regexIndex === 0 ? ((bt += ce[0]), 1) : ((xi = !0), 0);
        }
        function uu(ce) {
          const Ne = ce[0],
            Ze = ce.rule,
            lt = new l(Ze),
            Zt = [Ze.__beforeBegin, Ze['on:begin']];
          for (const cn of Zt) if (cn && (cn(ce, lt), lt.isMatchIgnored)) return Us(Ne);
          return (
            Ze.skip
              ? (bt += Ne)
              : (Ze.excludeBegin && (bt += Ne), Sn(), !Ze.returnBegin && !Ze.excludeBegin && (bt = Ne)),
            wi(Ze, ce),
            Ze.returnBegin ? 0 : Ne.length
          );
        }
        function ta(ce) {
          const Ne = ce[0],
            Ze = Le.substring(ce.index),
            lt = Qr(Ge, ce, Ze);
          if (!lt) return pt;
          const Zt = Ge;
          Ge.endScope && Ge.endScope._wrap
            ? (Sn(), mn(Ne, Ge.endScope._wrap))
            : Ge.endScope && Ge.endScope._multi
              ? (Sn(), No(Ge.endScope, ce))
              : Zt.skip
                ? (bt += Ne)
                : (Zt.returnEnd || Zt.excludeEnd || (bt += Ne), Sn(), Zt.excludeEnd && (bt = Ne));
          do Ge.scope && Yt.closeNode(), !Ge.skip && !Ge.subLanguage && (Zi += Ge.relevance), (Ge = Ge.parent);
          while (Ge !== lt.parent);
          return lt.starts && wi(lt.starts, ce), Zt.returnEnd ? 0 : Ne.length;
        }
        function Ga() {
          const ce = [];
          for (let Ne = Ge; Ne !== nr; Ne = Ne.parent) Ne.scope && ce.unshift(Ne.scope);
          ce.forEach((Ne) => Yt.openNode(Ne));
        }
        let Xr = {};
        function Yi(ce, Ne) {
          const Ze = Ne && Ne[0];
          if (((bt += ce), Ze == null)) return Sn(), 0;
          if (Xr.type === 'begin' && Ne.type === 'end' && Xr.index === Ne.index && Ze === '') {
            if (((bt += Le.slice(Ne.index, Ne.index + 1)), !Mt)) {
              const lt = new Error(`0 width match regex (${le})`);
              throw ((lt.languageName = le), (lt.badRule = Xr.rule), lt);
            }
            return 1;
          }
          if (((Xr = Ne), Ne.type === 'begin')) return uu(Ne);
          if (Ne.type === 'illegal' && !nt) {
            const lt = new Error('Illegal lexeme "' + Ze + '" for mode "' + (Ge.scope || '<unnamed>') + '"');
            throw ((lt.mode = Ge), lt);
          } else if (Ne.type === 'end') {
            const lt = ta(Ne);
            if (lt !== pt) return lt;
          }
          if (Ne.type === 'illegal' && Ze === '')
            return (
              (bt += `
`),
              1
            );
          if (Vi > 1e5 && Vi > Ne.index * 3)
            throw new Error('potential infinite loop, way more iterations than matches');
          return (bt += Ze), Ze.length;
        }
        const nr = Mr(le);
        if (!nr) throw (dr(Bt.replace('{}', le)), new Error('Unknown language: "' + le + '"'));
        const To = Gi(nr);
        let ct = '',
          Ge = at || To;
        const na = {},
          Yt = new me.__emitter(me);
        Ga();
        let bt = '',
          Zi = 0,
          Lr = 0,
          Vi = 0,
          xi = !1;
        try {
          if (nr.__emitTokens) nr.__emitTokens(Le, Yt);
          else {
            for (Ge.matcher.considerAll(); ; ) {
              Vi++, xi ? (xi = !1) : Ge.matcher.considerAll(), (Ge.matcher.lastIndex = Lr);
              const ce = Ge.matcher.exec(Le);
              if (!ce) break;
              const Ne = Le.substring(Lr, ce.index),
                Ze = Yi(Ne, ce);
              Lr = ce.index + Ze;
            }
            Yi(Le.substring(Lr));
          }
          return (
            Yt.finalize(),
            (ct = Yt.toHTML()),
            { language: le, value: ct, relevance: Zi, illegal: !1, _emitter: Yt, _top: Ge }
          );
        } catch (ce) {
          if (ce.message && ce.message.includes('Illegal'))
            return {
              language: le,
              value: Ei(Le),
              illegal: !0,
              relevance: 0,
              _illegalBy: {
                message: ce.message,
                index: Lr,
                context: Le.slice(Lr - 100, Lr + 100),
                mode: ce.mode,
                resultSoFar: ct,
              },
              _emitter: Yt,
            };
          if (Mt)
            return { language: le, value: Ei(Le), illegal: !1, relevance: 0, errorRaised: ce, _emitter: Yt, _top: Ge };
          throw ce;
        }
      }
      function qi(le) {
        const Le = { value: Ei(le), illegal: !1, relevance: 0, _top: ke, _emitter: new me.__emitter(me) };
        return Le._emitter.addText(le), Le;
      }
      function bo(le, Le) {
        Le = Le || me.languages || Object.keys(Z);
        const nt = qi(le),
          at = Le.filter(Mr)
            .filter(Bs)
            .map((Sn) => Vr(Sn, le, !1));
        at.unshift(nt);
        const Qt = at.sort((Sn, mn) => {
            if (Sn.relevance !== mn.relevance) return mn.relevance - Sn.relevance;
            if (Sn.language && mn.language) {
              if (Mr(Sn.language).supersetOf === mn.language) return 1;
              if (Mr(mn.language).supersetOf === Sn.language) return -1;
            }
            return 0;
          }),
          [Ft, Ir] = Qt,
          ko = Ft;
        return (ko.secondBest = Ir), ko;
      }
      function au(le, Le, nt) {
        const at = (Le && fe[Le]) || nt;
        le.classList.add('hljs'), le.classList.add(`language-${at}`);
      }
      function $a(le) {
        let Le = null;
        const nt = qt(le);
        if (He(nt)) return;
        if ((xo('before:highlightElement', { el: le, language: nt }), le.dataset.highlighted)) {
          console.log('Element previously highlighted. To highlight again, first unset `dataset.highlighted`.', le);
          return;
        }
        if (
          le.children.length > 0 &&
          (me.ignoreUnescapedHTML ||
            (console.warn(
              'One of your code blocks includes unescaped HTML. This is a potentially serious security risk.'
            ),
            console.warn('https://github.com/highlightjs/highlight.js/wiki/security'),
            console.warn('The element with unescaped HTML:'),
            console.warn(le)),
          me.throwUnescapedHTML)
        )
          throw new yi('One of your code blocks includes unescaped HTML.', le.innerHTML);
        Le = le;
        const at = Le.textContent,
          Qt = nt ? Tt(at, { language: nt, ignoreIllegals: !0 }) : bo(at);
        (le.innerHTML = Qt.value),
          (le.dataset.highlighted = 'yes'),
          au(le, nt, Qt.language),
          (le.result = { language: Qt.language, re: Qt.relevance, relevance: Qt.relevance }),
          Qt.secondBest && (le.secondBest = { language: Qt.secondBest.language, relevance: Qt.secondBest.relevance }),
          xo('after:highlightElement', { el: le, result: Qt, text: at });
      }
      function su(le) {
        me = Ki(me, le);
      }
      const bi = () => {
        ea(), hn('10.6.0', 'initHighlighting() deprecated.  Use highlightAll() now.');
      };
      function Fa() {
        ea(), hn('10.6.0', 'initHighlightingOnLoad() deprecated.  Use highlightAll() now.');
      }
      let Ha = !1;
      function ea() {
        function le() {
          ea();
        }
        if (document.readyState === 'loading') {
          Ha || window.addEventListener('DOMContentLoaded', le, !1), (Ha = !0);
          return;
        }
        document.querySelectorAll(me.cssSelector).forEach($a);
      }
      function Ls(le, Le) {
        let nt = null;
        try {
          nt = Le(R);
        } catch (at) {
          if ((dr("Language definition for '{}' could not be registered.".replace('{}', le)), Mt)) dr(at);
          else throw at;
          nt = ke;
        }
        nt.name || (nt.name = le),
          (Z[le] = nt),
          (nt.rawDefinition = Le.bind(null, R)),
          nt.aliases && wo(nt.aliases, { languageName: le });
      }
      function Ds(le) {
        delete Z[le];
        for (const Le of Object.keys(fe)) fe[Le] === le && delete fe[Le];
      }
      function Ps() {
        return Object.keys(Z);
      }
      function Mr(le) {
        return (le = (le || '').toLowerCase()), Z[le] || Z[fe[le]];
      }
      function wo(le, { languageName: Le }) {
        typeof le == 'string' && (le = [le]),
          le.forEach((nt) => {
            fe[nt.toLowerCase()] = Le;
          });
      }
      function Bs(le) {
        const Le = Mr(le);
        return Le && !Le.disableAutodetect;
      }
      function Rt(le) {
        le['before:highlightBlock'] &&
          !le['before:highlightElement'] &&
          (le['before:highlightElement'] = (Le) => {
            le['before:highlightBlock'](Object.assign({ block: Le.el }, Le));
          }),
          le['after:highlightBlock'] &&
            !le['after:highlightElement'] &&
            (le['after:highlightElement'] = (Le) => {
              le['after:highlightBlock'](Object.assign({ block: Le.el }, Le));
            });
      }
      function lu(le) {
        Rt(le), Ye.push(le);
      }
      function Wa(le) {
        const Le = Ye.indexOf(le);
        Le !== -1 && Ye.splice(Le, 1);
      }
      function xo(le, Le) {
        const nt = le;
        Ye.forEach(function (at) {
          at[nt] && at[nt](Le);
        });
      }
      function So(le) {
        return (
          hn('10.7.0', 'highlightBlock will be removed entirely in v12.0'),
          hn('10.7.0', 'Please use highlightElement now.'),
          $a(le)
        );
      }
      Object.assign(R, {
        highlight: Tt,
        highlightAuto: bo,
        highlightAll: ea,
        highlightElement: $a,
        highlightBlock: So,
        configure: su,
        initHighlighting: bi,
        initHighlightingOnLoad: Fa,
        registerLanguage: Ls,
        unregisterLanguage: Ds,
        listLanguages: Ps,
        getLanguage: Mr,
        registerAliases: wo,
        autoDetection: Bs,
        inherit: Ki,
        addPlugin: lu,
        removePlugin: Wa,
      }),
        (R.debugMode = function () {
          Mt = !1;
        }),
        (R.safeMode = function () {
          Mt = !0;
        }),
        (R.versionString = vi),
        (R.regex = { concat: F, lookahead: I, either: V, optional: G, anyNumberOfTimes: z });
      for (const le in je) typeof je[le] == 'object' && d(je[le]);
      return Object.assign(R, je), R;
    },
    Or = xn({});
  return (Or.newInstance = () => xn({})), (up = Or), (Or.HighlightJS = Or), (Or.default = Or), up;
}
var cp, Qg;
function fy() {
  if (Qg) return cp;
  Qg = 1;
  function d(l) {
    const a = l.regex,
      p = a.concat(/[\p{L}_]/u, a.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u),
      g = /[\p{L}0-9._:-]+/u,
      m = { className: 'symbol', begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/ },
      v = { begin: /\s/, contains: [{ className: 'keyword', begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/ }] },
      x = l.inherit(v, { begin: /\(/, end: /\)/ }),
      S = l.inherit(l.APOS_STRING_MODE, { className: 'string' }),
      w = l.inherit(l.QUOTE_STRING_MODE, { className: 'string' }),
      b = {
        endsWithParent: !0,
        illegal: /</,
        relevance: 0,
        contains: [
          { className: 'attr', begin: g, relevance: 0 },
          {
            begin: /=\s*/,
            relevance: 0,
            contains: [
              {
                className: 'string',
                endsParent: !0,
                variants: [
                  { begin: /"/, end: /"/, contains: [m] },
                  { begin: /'/, end: /'/, contains: [m] },
                  { begin: /[^\s"'=<>`]+/ },
                ],
              },
            ],
          },
        ],
      };
    return {
      name: 'HTML, XML',
      aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'wsf', 'svg'],
      case_insensitive: !0,
      unicodeRegex: !0,
      contains: [
        {
          className: 'meta',
          begin: /<![a-z]/,
          end: />/,
          relevance: 10,
          contains: [
            v,
            w,
            S,
            x,
            {
              begin: /\[/,
              end: /\]/,
              contains: [{ className: 'meta', begin: /<![a-z]/, end: />/, contains: [v, x, w, S] }],
            },
          ],
        },
        l.COMMENT(/<!--/, /-->/, { relevance: 10 }),
        { begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 },
        m,
        {
          className: 'meta',
          end: /\?>/,
          variants: [{ begin: /<\?xml/, relevance: 10, contains: [w] }, { begin: /<\?[a-z][a-z0-9]+/ }],
        },
        {
          className: 'tag',
          begin: /<style(?=\s|>)/,
          end: />/,
          keywords: { name: 'style' },
          contains: [b],
          starts: { end: /<\/style>/, returnEnd: !0, subLanguage: ['css', 'xml'] },
        },
        {
          className: 'tag',
          begin: /<script(?=\s|>)/,
          end: />/,
          keywords: { name: 'script' },
          contains: [b],
          starts: { end: /<\/script>/, returnEnd: !0, subLanguage: ['javascript', 'handlebars', 'xml'] },
        },
        { className: 'tag', begin: /<>|<\/>/ },
        {
          className: 'tag',
          begin: a.concat(/</, a.lookahead(a.concat(p, a.either(/\/>/, />/, /\s/)))),
          end: /\/?>/,
          contains: [{ className: 'name', begin: p, relevance: 0, starts: b }],
        },
        {
          className: 'tag',
          begin: a.concat(/<\//, a.lookahead(a.concat(p, />/))),
          contains: [
            { className: 'name', begin: p, relevance: 0 },
            { begin: />/, relevance: 0, endsParent: !0 },
          ],
        },
      ],
    };
  }
  return (cp = d), cp;
}
var fp, Xg;
function dy() {
  if (Xg) return fp;
  Xg = 1;
  function d(l) {
    const a = l.regex,
      p = {},
      g = { begin: /\$\{/, end: /\}/, contains: ['self', { begin: /:-/, contains: [p] }] };
    Object.assign(p, {
      className: 'variable',
      variants: [{ begin: a.concat(/\$[\w\d#@][\w\d_]*/, '(?![\\w\\d])(?![$])') }, g],
    });
    const m = { className: 'subst', begin: /\$\(/, end: /\)/, contains: [l.BACKSLASH_ESCAPE] },
      v = l.inherit(l.COMMENT(), { match: [/(^|\s)/, /#.*$/], scope: { 2: 'comment' } }),
      x = {
        begin: /<<-?\s*(?=\w+)/,
        starts: { contains: [l.END_SAME_AS_BEGIN({ begin: /(\w+)/, end: /(\w+)/, className: 'string' })] },
      },
      S = { className: 'string', begin: /"/, end: /"/, contains: [l.BACKSLASH_ESCAPE, p, m] };
    m.contains.push(S);
    const w = { match: /\\"/ },
      b = { className: 'string', begin: /'/, end: /'/ },
      N = { match: /\\'/ },
      I = {
        begin: /\$?\(\(/,
        end: /\)\)/,
        contains: [{ begin: /\d+#[0-9a-f]+/, className: 'number' }, l.NUMBER_MODE, p],
      },
      z = ['fish', 'bash', 'zsh', 'sh', 'csh', 'ksh', 'tcsh', 'dash', 'scsh'],
      G = l.SHEBANG({ binary: `(${z.join('|')})`, relevance: 10 }),
      F = {
        className: 'function',
        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        returnBegin: !0,
        contains: [l.inherit(l.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
        relevance: 0,
      },
      $ = [
        'if',
        'then',
        'else',
        'elif',
        'fi',
        'time',
        'for',
        'while',
        'until',
        'in',
        'do',
        'done',
        'case',
        'esac',
        'coproc',
        'function',
        'select',
      ],
      V = ['true', 'false'],
      ue = { match: /(\/[a-z._-]+)+/ },
      ae = [
        'break',
        'cd',
        'continue',
        'eval',
        'exec',
        'exit',
        'export',
        'getopts',
        'hash',
        'pwd',
        'readonly',
        'return',
        'shift',
        'test',
        'times',
        'trap',
        'umask',
        'unset',
      ],
      Te = [
        'alias',
        'bind',
        'builtin',
        'caller',
        'command',
        'declare',
        'echo',
        'enable',
        'help',
        'let',
        'local',
        'logout',
        'mapfile',
        'printf',
        'read',
        'readarray',
        'source',
        'sudo',
        'type',
        'typeset',
        'ulimit',
        'unalias',
      ],
      de = [
        'autoload',
        'bg',
        'bindkey',
        'bye',
        'cap',
        'chdir',
        'clone',
        'comparguments',
        'compcall',
        'compctl',
        'compdescribe',
        'compfiles',
        'compgroups',
        'compquote',
        'comptags',
        'comptry',
        'compvalues',
        'dirs',
        'disable',
        'disown',
        'echotc',
        'echoti',
        'emulate',
        'fc',
        'fg',
        'float',
        'functions',
        'getcap',
        'getln',
        'history',
        'integer',
        'jobs',
        'kill',
        'limit',
        'log',
        'noglob',
        'popd',
        'print',
        'pushd',
        'pushln',
        'rehash',
        'sched',
        'setcap',
        'setopt',
        'stat',
        'suspend',
        'ttyctl',
        'unfunction',
        'unhash',
        'unlimit',
        'unsetopt',
        'vared',
        'wait',
        'whence',
        'where',
        'which',
        'zcompile',
        'zformat',
        'zftp',
        'zle',
        'zmodload',
        'zparseopts',
        'zprof',
        'zpty',
        'zregexparse',
        'zsocket',
        'zstyle',
        'ztcp',
      ],
      be = [
        'chcon',
        'chgrp',
        'chown',
        'chmod',
        'cp',
        'dd',
        'df',
        'dir',
        'dircolors',
        'ln',
        'ls',
        'mkdir',
        'mkfifo',
        'mknod',
        'mktemp',
        'mv',
        'realpath',
        'rm',
        'rmdir',
        'shred',
        'sync',
        'touch',
        'truncate',
        'vdir',
        'b2sum',
        'base32',
        'base64',
        'cat',
        'cksum',
        'comm',
        'csplit',
        'cut',
        'expand',
        'fmt',
        'fold',
        'head',
        'join',
        'md5sum',
        'nl',
        'numfmt',
        'od',
        'paste',
        'ptx',
        'pr',
        'sha1sum',
        'sha224sum',
        'sha256sum',
        'sha384sum',
        'sha512sum',
        'shuf',
        'sort',
        'split',
        'sum',
        'tac',
        'tail',
        'tr',
        'tsort',
        'unexpand',
        'uniq',
        'wc',
        'arch',
        'basename',
        'chroot',
        'date',
        'dirname',
        'du',
        'echo',
        'env',
        'expr',
        'factor',
        'groups',
        'hostid',
        'id',
        'link',
        'logname',
        'nice',
        'nohup',
        'nproc',
        'pathchk',
        'pinky',
        'printenv',
        'printf',
        'pwd',
        'readlink',
        'runcon',
        'seq',
        'sleep',
        'stat',
        'stdbuf',
        'stty',
        'tee',
        'test',
        'timeout',
        'tty',
        'uname',
        'unlink',
        'uptime',
        'users',
        'who',
        'whoami',
        'yes',
      ];
    return {
      name: 'Bash',
      aliases: ['sh', 'zsh'],
      keywords: {
        $pattern: /\b[a-z][a-z0-9._-]+\b/,
        keyword: $,
        literal: V,
        built_in: [...ae, ...Te, 'set', 'shopt', ...de, ...be],
      },
      contains: [G, l.SHEBANG(), F, I, v, x, ue, S, w, b, N, p],
    };
  }
  return (fp = d), fp;
}
var dp, jg;
function py() {
  if (jg) return dp;
  jg = 1;
  function d(l) {
    const a = l.regex,
      p = l.COMMENT('//', '$', { contains: [{ begin: /\\\n/ }] }),
      g = 'decltype\\(auto\\)',
      m = '[a-zA-Z_]\\w*::',
      x = '(' + g + '|' + a.optional(m) + '[a-zA-Z_]\\w*' + a.optional('<[^<>]+>') + ')',
      S = { className: 'type', variants: [{ begin: '\\b[a-z\\d_]*_t\\b' }, { match: /\batomic_[a-z]{3,6}\b/ }] },
      b = {
        className: 'string',
        variants: [
          { begin: '(u8?|U|L)?"', end: '"', illegal: '\\n', contains: [l.BACKSLASH_ESCAPE] },
          {
            begin: "(u8?|U|L)?'(" + '\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)' + '|.)',
            end: "'",
            illegal: '.',
          },
          l.END_SAME_AS_BEGIN({ begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/, end: /\)([^()\\ ]{0,16})"/ }),
        ],
      },
      N = {
        className: 'number',
        variants: [
          { match: /\b(0b[01']+)/ },
          { match: /(-?)\b([\d']+(\.[\d']*)?|\.[\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)/ },
          {
            match:
              /(-?)\b(0[xX][a-fA-F0-9]+(?:'[a-fA-F0-9]+)*(?:\.[a-fA-F0-9]*(?:'[a-fA-F0-9]*)*)?(?:[pP][-+]?[0-9]+)?(l|L)?(u|U)?)/,
          },
          { match: /(-?)\b\d+(?:'\d+)*(?:\.\d*(?:'\d*)*)?(?:[eE][-+]?\d+)?/ },
        ],
        relevance: 0,
      },
      I = {
        className: 'meta',
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          keyword:
            'if else elif endif define undef warning error line pragma _Pragma ifdef ifndef elifdef elifndef include',
        },
        contains: [
          { begin: /\\\n/, relevance: 0 },
          l.inherit(b, { className: 'string' }),
          { className: 'string', begin: /<.*?>/ },
          p,
          l.C_BLOCK_COMMENT_MODE,
        ],
      },
      z = { className: 'title', begin: a.optional(m) + l.IDENT_RE, relevance: 0 },
      G = a.optional(m) + l.IDENT_RE + '\\s*\\(',
      V = {
        keyword: [
          'asm',
          'auto',
          'break',
          'case',
          'continue',
          'default',
          'do',
          'else',
          'enum',
          'extern',
          'for',
          'fortran',
          'goto',
          'if',
          'inline',
          'register',
          'restrict',
          'return',
          'sizeof',
          'typeof',
          'typeof_unqual',
          'struct',
          'switch',
          'typedef',
          'union',
          'volatile',
          'while',
          '_Alignas',
          '_Alignof',
          '_Atomic',
          '_Generic',
          '_Noreturn',
          '_Static_assert',
          '_Thread_local',
          'alignas',
          'alignof',
          'noreturn',
          'static_assert',
          'thread_local',
          '_Pragma',
        ],
        type: [
          'float',
          'double',
          'signed',
          'unsigned',
          'int',
          'short',
          'long',
          'char',
          'void',
          '_Bool',
          '_BitInt',
          '_Complex',
          '_Imaginary',
          '_Decimal32',
          '_Decimal64',
          '_Decimal96',
          '_Decimal128',
          '_Decimal64x',
          '_Decimal128x',
          '_Float16',
          '_Float32',
          '_Float64',
          '_Float128',
          '_Float32x',
          '_Float64x',
          '_Float128x',
          'const',
          'static',
          'constexpr',
          'complex',
          'bool',
          'imaginary',
        ],
        literal: 'true false NULL',
        built_in:
          'std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr',
      },
      ue = [I, S, p, l.C_BLOCK_COMMENT_MODE, N, b],
      ae = {
        variants: [
          { begin: /=/, end: /;/ },
          { begin: /\(/, end: /\)/ },
          { beginKeywords: 'new throw return else', end: /;/ },
        ],
        keywords: V,
        contains: ue.concat([{ begin: /\(/, end: /\)/, keywords: V, contains: ue.concat(['self']), relevance: 0 }]),
        relevance: 0,
      },
      Te = {
        begin: '(' + x + '[\\*&\\s]+)+' + G,
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: V,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [
          { begin: g, keywords: V, relevance: 0 },
          { begin: G, returnBegin: !0, contains: [l.inherit(z, { className: 'title.function' })], relevance: 0 },
          { relevance: 0, match: /,/ },
          {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            keywords: V,
            relevance: 0,
            contains: [
              p,
              l.C_BLOCK_COMMENT_MODE,
              b,
              N,
              S,
              {
                begin: /\(/,
                end: /\)/,
                keywords: V,
                relevance: 0,
                contains: ['self', p, l.C_BLOCK_COMMENT_MODE, b, N, S],
              },
            ],
          },
          S,
          p,
          l.C_BLOCK_COMMENT_MODE,
          I,
        ],
      };
    return {
      name: 'C',
      aliases: ['h'],
      keywords: V,
      disableAutodetect: !0,
      illegal: '</',
      contains: [].concat(ae, Te, ue, [
        I,
        { begin: l.IDENT_RE + '::', keywords: V },
        {
          className: 'class',
          beginKeywords: 'enum class struct union',
          end: /[{;:<>=]/,
          contains: [{ beginKeywords: 'final class struct' }, l.TITLE_MODE],
        },
      ]),
      exports: { preprocessor: I, strings: b, keywords: V },
    };
  }
  return (dp = d), dp;
}
var pp, Jg;
function gy() {
  if (Jg) return pp;
  Jg = 1;
  function d(l) {
    const a = l.regex,
      p = l.COMMENT('//', '$', { contains: [{ begin: /\\\n/ }] }),
      g = 'decltype\\(auto\\)',
      m = '[a-zA-Z_]\\w*::',
      x = '(?!struct)(' + g + '|' + a.optional(m) + '[a-zA-Z_]\\w*' + a.optional('<[^<>]+>') + ')',
      S = { className: 'type', begin: '\\b[a-z\\d_]*_t\\b' },
      b = {
        className: 'string',
        variants: [
          { begin: '(u8?|U|L)?"', end: '"', illegal: '\\n', contains: [l.BACKSLASH_ESCAPE] },
          {
            begin: "(u8?|U|L)?'(" + '\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)' + '|.)',
            end: "'",
            illegal: '.',
          },
          l.END_SAME_AS_BEGIN({ begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/, end: /\)([^()\\ ]{0,16})"/ }),
        ],
      },
      N = {
        className: 'number',
        variants: [
          {
            begin:
              "[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)",
          },
          {
            begin:
              "[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)",
          },
        ],
        relevance: 0,
      },
      I = {
        className: 'meta',
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: { keyword: 'if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include' },
        contains: [
          { begin: /\\\n/, relevance: 0 },
          l.inherit(b, { className: 'string' }),
          { className: 'string', begin: /<.*?>/ },
          p,
          l.C_BLOCK_COMMENT_MODE,
        ],
      },
      z = { className: 'title', begin: a.optional(m) + l.IDENT_RE, relevance: 0 },
      G = a.optional(m) + l.IDENT_RE + '\\s*\\(',
      F = [
        'alignas',
        'alignof',
        'and',
        'and_eq',
        'asm',
        'atomic_cancel',
        'atomic_commit',
        'atomic_noexcept',
        'auto',
        'bitand',
        'bitor',
        'break',
        'case',
        'catch',
        'class',
        'co_await',
        'co_return',
        'co_yield',
        'compl',
        'concept',
        'const_cast|10',
        'consteval',
        'constexpr',
        'constinit',
        'continue',
        'decltype',
        'default',
        'delete',
        'do',
        'dynamic_cast|10',
        'else',
        'enum',
        'explicit',
        'export',
        'extern',
        'false',
        'final',
        'for',
        'friend',
        'goto',
        'if',
        'import',
        'inline',
        'module',
        'mutable',
        'namespace',
        'new',
        'noexcept',
        'not',
        'not_eq',
        'nullptr',
        'operator',
        'or',
        'or_eq',
        'override',
        'private',
        'protected',
        'public',
        'reflexpr',
        'register',
        'reinterpret_cast|10',
        'requires',
        'return',
        'sizeof',
        'static_assert',
        'static_cast|10',
        'struct',
        'switch',
        'synchronized',
        'template',
        'this',
        'thread_local',
        'throw',
        'transaction_safe',
        'transaction_safe_dynamic',
        'true',
        'try',
        'typedef',
        'typeid',
        'typename',
        'union',
        'using',
        'virtual',
        'volatile',
        'while',
        'xor',
        'xor_eq',
      ],
      $ = [
        'bool',
        'char',
        'char16_t',
        'char32_t',
        'char8_t',
        'double',
        'float',
        'int',
        'long',
        'short',
        'void',
        'wchar_t',
        'unsigned',
        'signed',
        'const',
        'static',
      ],
      V = [
        'any',
        'auto_ptr',
        'barrier',
        'binary_semaphore',
        'bitset',
        'complex',
        'condition_variable',
        'condition_variable_any',
        'counting_semaphore',
        'deque',
        'false_type',
        'flat_map',
        'flat_set',
        'future',
        'imaginary',
        'initializer_list',
        'istringstream',
        'jthread',
        'latch',
        'lock_guard',
        'multimap',
        'multiset',
        'mutex',
        'optional',
        'ostringstream',
        'packaged_task',
        'pair',
        'promise',
        'priority_queue',
        'queue',
        'recursive_mutex',
        'recursive_timed_mutex',
        'scoped_lock',
        'set',
        'shared_future',
        'shared_lock',
        'shared_mutex',
        'shared_timed_mutex',
        'shared_ptr',
        'stack',
        'string_view',
        'stringstream',
        'timed_mutex',
        'thread',
        'true_type',
        'tuple',
        'unique_lock',
        'unique_ptr',
        'unordered_map',
        'unordered_multimap',
        'unordered_multiset',
        'unordered_set',
        'variant',
        'vector',
        'weak_ptr',
        'wstring',
        'wstring_view',
      ],
      ue = [
        'abort',
        'abs',
        'acos',
        'apply',
        'as_const',
        'asin',
        'atan',
        'atan2',
        'calloc',
        'ceil',
        'cerr',
        'cin',
        'clog',
        'cos',
        'cosh',
        'cout',
        'declval',
        'endl',
        'exchange',
        'exit',
        'exp',
        'fabs',
        'floor',
        'fmod',
        'forward',
        'fprintf',
        'fputs',
        'free',
        'frexp',
        'fscanf',
        'future',
        'invoke',
        'isalnum',
        'isalpha',
        'iscntrl',
        'isdigit',
        'isgraph',
        'islower',
        'isprint',
        'ispunct',
        'isspace',
        'isupper',
        'isxdigit',
        'labs',
        'launder',
        'ldexp',
        'log',
        'log10',
        'make_pair',
        'make_shared',
        'make_shared_for_overwrite',
        'make_tuple',
        'make_unique',
        'malloc',
        'memchr',
        'memcmp',
        'memcpy',
        'memset',
        'modf',
        'move',
        'pow',
        'printf',
        'putchar',
        'puts',
        'realloc',
        'scanf',
        'sin',
        'sinh',
        'snprintf',
        'sprintf',
        'sqrt',
        'sscanf',
        'std',
        'stderr',
        'stdin',
        'stdout',
        'strcat',
        'strchr',
        'strcmp',
        'strcpy',
        'strcspn',
        'strlen',
        'strncat',
        'strncmp',
        'strncpy',
        'strpbrk',
        'strrchr',
        'strspn',
        'strstr',
        'swap',
        'tan',
        'tanh',
        'terminate',
        'to_underlying',
        'tolower',
        'toupper',
        'vfprintf',
        'visit',
        'vprintf',
        'vsprintf',
      ],
      de = {
        type: $,
        keyword: F,
        literal: ['NULL', 'false', 'nullopt', 'nullptr', 'true'],
        built_in: ['_Pragma'],
        _type_hints: V,
      },
      be = {
        className: 'function.dispatch',
        relevance: 0,
        keywords: { _hint: ue },
        begin: a.concat(
          /\b/,
          /(?!decltype)/,
          /(?!if)/,
          /(?!for)/,
          /(?!switch)/,
          /(?!while)/,
          l.IDENT_RE,
          a.lookahead(/(<[^<>]+>|)\s*\(/)
        ),
      },
      we = [be, I, S, p, l.C_BLOCK_COMMENT_MODE, N, b],
      ge = {
        variants: [
          { begin: /=/, end: /;/ },
          { begin: /\(/, end: /\)/ },
          { beginKeywords: 'new throw return else', end: /;/ },
        ],
        keywords: de,
        contains: we.concat([{ begin: /\(/, end: /\)/, keywords: de, contains: we.concat(['self']), relevance: 0 }]),
        relevance: 0,
      },
      ze = {
        className: 'function',
        begin: '(' + x + '[\\*&\\s]+)+' + G,
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: de,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [
          { begin: g, keywords: de, relevance: 0 },
          { begin: G, returnBegin: !0, contains: [z], relevance: 0 },
          { begin: /::/, relevance: 0 },
          { begin: /:/, endsWithParent: !0, contains: [b, N] },
          { relevance: 0, match: /,/ },
          {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            keywords: de,
            relevance: 0,
            contains: [
              p,
              l.C_BLOCK_COMMENT_MODE,
              b,
              N,
              S,
              {
                begin: /\(/,
                end: /\)/,
                keywords: de,
                relevance: 0,
                contains: ['self', p, l.C_BLOCK_COMMENT_MODE, b, N, S],
              },
            ],
          },
          S,
          p,
          l.C_BLOCK_COMMENT_MODE,
          I,
        ],
      };
    return {
      name: 'C++',
      aliases: ['cc', 'c++', 'h++', 'hpp', 'hh', 'hxx', 'cxx'],
      keywords: de,
      illegal: '</',
      classNameAliases: { 'function.dispatch': 'built_in' },
      contains: [].concat(ge, ze, be, we, [
        I,
        {
          begin:
            '\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)',
          end: '>',
          keywords: de,
          contains: ['self', S],
        },
        { begin: l.IDENT_RE + '::', keywords: de },
        {
          match: [/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/, /\s+/, /\w+/],
          className: { 1: 'keyword', 3: 'title.class' },
        },
      ]),
    };
  }
  return (pp = d), pp;
}
var gp, eh;
function hy() {
  if (eh) return gp;
  eh = 1;
  function d(l) {
    const a = [
        'bool',
        'byte',
        'char',
        'decimal',
        'delegate',
        'double',
        'dynamic',
        'enum',
        'float',
        'int',
        'long',
        'nint',
        'nuint',
        'object',
        'sbyte',
        'short',
        'string',
        'ulong',
        'uint',
        'ushort',
      ],
      p = [
        'public',
        'private',
        'protected',
        'static',
        'internal',
        'protected',
        'abstract',
        'async',
        'extern',
        'override',
        'unsafe',
        'virtual',
        'new',
        'sealed',
        'partial',
      ],
      g = ['default', 'false', 'null', 'true'],
      m = [
        'abstract',
        'as',
        'base',
        'break',
        'case',
        'catch',
        'class',
        'const',
        'continue',
        'do',
        'else',
        'event',
        'explicit',
        'extern',
        'finally',
        'fixed',
        'for',
        'foreach',
        'goto',
        'if',
        'implicit',
        'in',
        'interface',
        'internal',
        'is',
        'lock',
        'namespace',
        'new',
        'operator',
        'out',
        'override',
        'params',
        'private',
        'protected',
        'public',
        'readonly',
        'record',
        'ref',
        'return',
        'scoped',
        'sealed',
        'sizeof',
        'stackalloc',
        'static',
        'struct',
        'switch',
        'this',
        'throw',
        'try',
        'typeof',
        'unchecked',
        'unsafe',
        'using',
        'virtual',
        'void',
        'volatile',
        'while',
      ],
      v = [
        'add',
        'alias',
        'and',
        'ascending',
        'args',
        'async',
        'await',
        'by',
        'descending',
        'dynamic',
        'equals',
        'file',
        'from',
        'get',
        'global',
        'group',
        'init',
        'into',
        'join',
        'let',
        'nameof',
        'not',
        'notnull',
        'on',
        'or',
        'orderby',
        'partial',
        'record',
        'remove',
        'required',
        'scoped',
        'select',
        'set',
        'unmanaged',
        'value|0',
        'var',
        'when',
        'where',
        'with',
        'yield',
      ],
      x = { keyword: m.concat(v), built_in: a, literal: g },
      S = l.inherit(l.TITLE_MODE, { begin: '[a-zA-Z](\\.?\\w)*' }),
      w = {
        className: 'number',
        variants: [
          { begin: "\\b(0b[01']+)" },
          { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" },
          { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" },
        ],
        relevance: 0,
      },
      b = { className: 'string', begin: /"""("*)(?!")(.|\n)*?"""\1/, relevance: 1 },
      N = { className: 'string', begin: '@"', end: '"', contains: [{ begin: '""' }] },
      I = l.inherit(N, { illegal: /\n/ }),
      z = { className: 'subst', begin: /\{/, end: /\}/, keywords: x },
      G = l.inherit(z, { illegal: /\n/ }),
      F = {
        className: 'string',
        begin: /\$"/,
        end: '"',
        illegal: /\n/,
        contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, l.BACKSLASH_ESCAPE, G],
      },
      $ = {
        className: 'string',
        begin: /\$@"/,
        end: '"',
        contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: '""' }, z],
      },
      V = l.inherit($, { illegal: /\n/, contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: '""' }, G] });
    (z.contains = [$, F, N, l.APOS_STRING_MODE, l.QUOTE_STRING_MODE, w, l.C_BLOCK_COMMENT_MODE]),
      (G.contains = [
        V,
        F,
        I,
        l.APOS_STRING_MODE,
        l.QUOTE_STRING_MODE,
        w,
        l.inherit(l.C_BLOCK_COMMENT_MODE, { illegal: /\n/ }),
      ]);
    const ue = { variants: [b, $, F, N, l.APOS_STRING_MODE, l.QUOTE_STRING_MODE] },
      ae = { begin: '<', end: '>', contains: [{ beginKeywords: 'in out' }, S] },
      Te = l.IDENT_RE + '(<' + l.IDENT_RE + '(\\s*,\\s*' + l.IDENT_RE + ')*>)?(\\[\\])?',
      de = { begin: '@' + l.IDENT_RE, relevance: 0 };
    return {
      name: 'C#',
      aliases: ['cs', 'c#'],
      keywords: x,
      illegal: /::/,
      contains: [
        l.COMMENT('///', '$', {
          returnBegin: !0,
          contains: [
            {
              className: 'doctag',
              variants: [{ begin: '///', relevance: 0 }, { begin: '<!--|-->' }, { begin: '</?', end: '>' }],
            },
          ],
        }),
        l.C_LINE_COMMENT_MODE,
        l.C_BLOCK_COMMENT_MODE,
        {
          className: 'meta',
          begin: '#',
          end: '$',
          keywords: { keyword: 'if else elif endif define undef warning error line region endregion pragma checksum' },
        },
        ue,
        w,
        {
          beginKeywords: 'class interface',
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:,]/,
          contains: [{ beginKeywords: 'where class' }, S, ae, l.C_LINE_COMMENT_MODE, l.C_BLOCK_COMMENT_MODE],
        },
        {
          beginKeywords: 'namespace',
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [S, l.C_LINE_COMMENT_MODE, l.C_BLOCK_COMMENT_MODE],
        },
        {
          beginKeywords: 'record',
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [S, ae, l.C_LINE_COMMENT_MODE, l.C_BLOCK_COMMENT_MODE],
        },
        {
          className: 'meta',
          begin: '^\\s*\\[(?=[\\w])',
          excludeBegin: !0,
          end: '\\]',
          excludeEnd: !0,
          contains: [{ className: 'string', begin: /"/, end: /"/ }],
        },
        { beginKeywords: 'new return throw await else', relevance: 0 },
        {
          className: 'function',
          begin: '(' + Te + '\\s+)+' + l.IDENT_RE + '\\s*(<[^=]+>\\s*)?\\(',
          returnBegin: !0,
          end: /\s*[{;=]/,
          excludeEnd: !0,
          keywords: x,
          contains: [
            { beginKeywords: p.join(' '), relevance: 0 },
            {
              begin: l.IDENT_RE + '\\s*(<[^=]+>\\s*)?\\(',
              returnBegin: !0,
              contains: [l.TITLE_MODE, ae],
              relevance: 0,
            },
            { match: /\(\)/ },
            {
              className: 'params',
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: x,
              relevance: 0,
              contains: [ue, w, l.C_BLOCK_COMMENT_MODE],
            },
            l.C_LINE_COMMENT_MODE,
            l.C_BLOCK_COMMENT_MODE,
          ],
        },
        de,
      ],
    };
  }
  return (gp = d), gp;
}
var hp, th;
function my() {
  if (th) return hp;
  th = 1;
  const d = (w) => ({
      IMPORTANT: { scope: 'meta', begin: '!important' },
      BLOCK_COMMENT: w.C_BLOCK_COMMENT_MODE,
      HEXCOLOR: { scope: 'number', begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/ },
      FUNCTION_DISPATCH: { className: 'built_in', begin: /[\w-]+(?=\()/ },
      ATTRIBUTE_SELECTOR_MODE: {
        scope: 'selector-attr',
        begin: /\[/,
        end: /\]/,
        illegal: '$',
        contains: [w.APOS_STRING_MODE, w.QUOTE_STRING_MODE],
      },
      CSS_NUMBER_MODE: {
        scope: 'number',
        begin:
          w.NUMBER_RE +
          '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
        relevance: 0,
      },
      CSS_VARIABLE: { className: 'attr', begin: /--[A-Za-z_][A-Za-z0-9_-]*/ },
    }),
    l = [
      'a',
      'abbr',
      'address',
      'article',
      'aside',
      'audio',
      'b',
      'blockquote',
      'body',
      'button',
      'canvas',
      'caption',
      'cite',
      'code',
      'dd',
      'del',
      'details',
      'dfn',
      'div',
      'dl',
      'dt',
      'em',
      'fieldset',
      'figcaption',
      'figure',
      'footer',
      'form',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'header',
      'hgroup',
      'html',
      'i',
      'iframe',
      'img',
      'input',
      'ins',
      'kbd',
      'label',
      'legend',
      'li',
      'main',
      'mark',
      'menu',
      'nav',
      'object',
      'ol',
      'optgroup',
      'option',
      'p',
      'picture',
      'q',
      'quote',
      'samp',
      'section',
      'select',
      'source',
      'span',
      'strong',
      'summary',
      'sup',
      'table',
      'tbody',
      'td',
      'textarea',
      'tfoot',
      'th',
      'thead',
      'time',
      'tr',
      'ul',
      'var',
      'video',
    ],
    a = [
      'defs',
      'g',
      'marker',
      'mask',
      'pattern',
      'svg',
      'switch',
      'symbol',
      'feBlend',
      'feColorMatrix',
      'feComponentTransfer',
      'feComposite',
      'feConvolveMatrix',
      'feDiffuseLighting',
      'feDisplacementMap',
      'feFlood',
      'feGaussianBlur',
      'feImage',
      'feMerge',
      'feMorphology',
      'feOffset',
      'feSpecularLighting',
      'feTile',
      'feTurbulence',
      'linearGradient',
      'radialGradient',
      'stop',
      'circle',
      'ellipse',
      'image',
      'line',
      'path',
      'polygon',
      'polyline',
      'rect',
      'text',
      'use',
      'textPath',
      'tspan',
      'foreignObject',
      'clipPath',
    ],
    p = [...l, ...a],
    g = [
      'any-hover',
      'any-pointer',
      'aspect-ratio',
      'color',
      'color-gamut',
      'color-index',
      'device-aspect-ratio',
      'device-height',
      'device-width',
      'display-mode',
      'forced-colors',
      'grid',
      'height',
      'hover',
      'inverted-colors',
      'monochrome',
      'orientation',
      'overflow-block',
      'overflow-inline',
      'pointer',
      'prefers-color-scheme',
      'prefers-contrast',
      'prefers-reduced-motion',
      'prefers-reduced-transparency',
      'resolution',
      'scan',
      'scripting',
      'update',
      'width',
      'min-width',
      'max-width',
      'min-height',
      'max-height',
    ]
      .sort()
      .reverse(),
    m = [
      'active',
      'any-link',
      'blank',
      'checked',
      'current',
      'default',
      'defined',
      'dir',
      'disabled',
      'drop',
      'empty',
      'enabled',
      'first',
      'first-child',
      'first-of-type',
      'fullscreen',
      'future',
      'focus',
      'focus-visible',
      'focus-within',
      'has',
      'host',
      'host-context',
      'hover',
      'indeterminate',
      'in-range',
      'invalid',
      'is',
      'lang',
      'last-child',
      'last-of-type',
      'left',
      'link',
      'local-link',
      'not',
      'nth-child',
      'nth-col',
      'nth-last-child',
      'nth-last-col',
      'nth-last-of-type',
      'nth-of-type',
      'only-child',
      'only-of-type',
      'optional',
      'out-of-range',
      'past',
      'placeholder-shown',
      'read-only',
      'read-write',
      'required',
      'right',
      'root',
      'scope',
      'target',
      'target-within',
      'user-invalid',
      'valid',
      'visited',
      'where',
    ]
      .sort()
      .reverse(),
    v = [
      'after',
      'backdrop',
      'before',
      'cue',
      'cue-region',
      'first-letter',
      'first-line',
      'grammar-error',
      'marker',
      'part',
      'placeholder',
      'selection',
      'slotted',
      'spelling-error',
    ]
      .sort()
      .reverse(),
    x = [
      'accent-color',
      'align-content',
      'align-items',
      'align-self',
      'alignment-baseline',
      'all',
      'anchor-name',
      'animation',
      'animation-composition',
      'animation-delay',
      'animation-direction',
      'animation-duration',
      'animation-fill-mode',
      'animation-iteration-count',
      'animation-name',
      'animation-play-state',
      'animation-range',
      'animation-range-end',
      'animation-range-start',
      'animation-timeline',
      'animation-timing-function',
      'appearance',
      'aspect-ratio',
      'backdrop-filter',
      'backface-visibility',
      'background',
      'background-attachment',
      'background-blend-mode',
      'background-clip',
      'background-color',
      'background-image',
      'background-origin',
      'background-position',
      'background-position-x',
      'background-position-y',
      'background-repeat',
      'background-size',
      'baseline-shift',
      'block-size',
      'border',
      'border-block',
      'border-block-color',
      'border-block-end',
      'border-block-end-color',
      'border-block-end-style',
      'border-block-end-width',
      'border-block-start',
      'border-block-start-color',
      'border-block-start-style',
      'border-block-start-width',
      'border-block-style',
      'border-block-width',
      'border-bottom',
      'border-bottom-color',
      'border-bottom-left-radius',
      'border-bottom-right-radius',
      'border-bottom-style',
      'border-bottom-width',
      'border-collapse',
      'border-color',
      'border-end-end-radius',
      'border-end-start-radius',
      'border-image',
      'border-image-outset',
      'border-image-repeat',
      'border-image-slice',
      'border-image-source',
      'border-image-width',
      'border-inline',
      'border-inline-color',
      'border-inline-end',
      'border-inline-end-color',
      'border-inline-end-style',
      'border-inline-end-width',
      'border-inline-start',
      'border-inline-start-color',
      'border-inline-start-style',
      'border-inline-start-width',
      'border-inline-style',
      'border-inline-width',
      'border-left',
      'border-left-color',
      'border-left-style',
      'border-left-width',
      'border-radius',
      'border-right',
      'border-right-color',
      'border-right-style',
      'border-right-width',
      'border-spacing',
      'border-start-end-radius',
      'border-start-start-radius',
      'border-style',
      'border-top',
      'border-top-color',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-top-style',
      'border-top-width',
      'border-width',
      'bottom',
      'box-align',
      'box-decoration-break',
      'box-direction',
      'box-flex',
      'box-flex-group',
      'box-lines',
      'box-ordinal-group',
      'box-orient',
      'box-pack',
      'box-shadow',
      'box-sizing',
      'break-after',
      'break-before',
      'break-inside',
      'caption-side',
      'caret-color',
      'clear',
      'clip',
      'clip-path',
      'clip-rule',
      'color',
      'color-interpolation',
      'color-interpolation-filters',
      'color-profile',
      'color-rendering',
      'color-scheme',
      'column-count',
      'column-fill',
      'column-gap',
      'column-rule',
      'column-rule-color',
      'column-rule-style',
      'column-rule-width',
      'column-span',
      'column-width',
      'columns',
      'contain',
      'contain-intrinsic-block-size',
      'contain-intrinsic-height',
      'contain-intrinsic-inline-size',
      'contain-intrinsic-size',
      'contain-intrinsic-width',
      'container',
      'container-name',
      'container-type',
      'content',
      'content-visibility',
      'counter-increment',
      'counter-reset',
      'counter-set',
      'cue',
      'cue-after',
      'cue-before',
      'cursor',
      'cx',
      'cy',
      'direction',
      'display',
      'dominant-baseline',
      'empty-cells',
      'enable-background',
      'field-sizing',
      'fill',
      'fill-opacity',
      'fill-rule',
      'filter',
      'flex',
      'flex-basis',
      'flex-direction',
      'flex-flow',
      'flex-grow',
      'flex-shrink',
      'flex-wrap',
      'float',
      'flood-color',
      'flood-opacity',
      'flow',
      'font',
      'font-display',
      'font-family',
      'font-feature-settings',
      'font-kerning',
      'font-language-override',
      'font-optical-sizing',
      'font-palette',
      'font-size',
      'font-size-adjust',
      'font-smooth',
      'font-smoothing',
      'font-stretch',
      'font-style',
      'font-synthesis',
      'font-synthesis-position',
      'font-synthesis-small-caps',
      'font-synthesis-style',
      'font-synthesis-weight',
      'font-variant',
      'font-variant-alternates',
      'font-variant-caps',
      'font-variant-east-asian',
      'font-variant-emoji',
      'font-variant-ligatures',
      'font-variant-numeric',
      'font-variant-position',
      'font-variation-settings',
      'font-weight',
      'forced-color-adjust',
      'gap',
      'glyph-orientation-horizontal',
      'glyph-orientation-vertical',
      'grid',
      'grid-area',
      'grid-auto-columns',
      'grid-auto-flow',
      'grid-auto-rows',
      'grid-column',
      'grid-column-end',
      'grid-column-start',
      'grid-gap',
      'grid-row',
      'grid-row-end',
      'grid-row-start',
      'grid-template',
      'grid-template-areas',
      'grid-template-columns',
      'grid-template-rows',
      'hanging-punctuation',
      'height',
      'hyphenate-character',
      'hyphenate-limit-chars',
      'hyphens',
      'icon',
      'image-orientation',
      'image-rendering',
      'image-resolution',
      'ime-mode',
      'initial-letter',
      'initial-letter-align',
      'inline-size',
      'inset',
      'inset-area',
      'inset-block',
      'inset-block-end',
      'inset-block-start',
      'inset-inline',
      'inset-inline-end',
      'inset-inline-start',
      'isolation',
      'justify-content',
      'justify-items',
      'justify-self',
      'kerning',
      'left',
      'letter-spacing',
      'lighting-color',
      'line-break',
      'line-height',
      'line-height-step',
      'list-style',
      'list-style-image',
      'list-style-position',
      'list-style-type',
      'margin',
      'margin-block',
      'margin-block-end',
      'margin-block-start',
      'margin-bottom',
      'margin-inline',
      'margin-inline-end',
      'margin-inline-start',
      'margin-left',
      'margin-right',
      'margin-top',
      'margin-trim',
      'marker',
      'marker-end',
      'marker-mid',
      'marker-start',
      'marks',
      'mask',
      'mask-border',
      'mask-border-mode',
      'mask-border-outset',
      'mask-border-repeat',
      'mask-border-slice',
      'mask-border-source',
      'mask-border-width',
      'mask-clip',
      'mask-composite',
      'mask-image',
      'mask-mode',
      'mask-origin',
      'mask-position',
      'mask-repeat',
      'mask-size',
      'mask-type',
      'masonry-auto-flow',
      'math-depth',
      'math-shift',
      'math-style',
      'max-block-size',
      'max-height',
      'max-inline-size',
      'max-width',
      'min-block-size',
      'min-height',
      'min-inline-size',
      'min-width',
      'mix-blend-mode',
      'nav-down',
      'nav-index',
      'nav-left',
      'nav-right',
      'nav-up',
      'none',
      'normal',
      'object-fit',
      'object-position',
      'offset',
      'offset-anchor',
      'offset-distance',
      'offset-path',
      'offset-position',
      'offset-rotate',
      'opacity',
      'order',
      'orphans',
      'outline',
      'outline-color',
      'outline-offset',
      'outline-style',
      'outline-width',
      'overflow',
      'overflow-anchor',
      'overflow-block',
      'overflow-clip-margin',
      'overflow-inline',
      'overflow-wrap',
      'overflow-x',
      'overflow-y',
      'overlay',
      'overscroll-behavior',
      'overscroll-behavior-block',
      'overscroll-behavior-inline',
      'overscroll-behavior-x',
      'overscroll-behavior-y',
      'padding',
      'padding-block',
      'padding-block-end',
      'padding-block-start',
      'padding-bottom',
      'padding-inline',
      'padding-inline-end',
      'padding-inline-start',
      'padding-left',
      'padding-right',
      'padding-top',
      'page',
      'page-break-after',
      'page-break-before',
      'page-break-inside',
      'paint-order',
      'pause',
      'pause-after',
      'pause-before',
      'perspective',
      'perspective-origin',
      'place-content',
      'place-items',
      'place-self',
      'pointer-events',
      'position',
      'position-anchor',
      'position-visibility',
      'print-color-adjust',
      'quotes',
      'r',
      'resize',
      'rest',
      'rest-after',
      'rest-before',
      'right',
      'rotate',
      'row-gap',
      'ruby-align',
      'ruby-position',
      'scale',
      'scroll-behavior',
      'scroll-margin',
      'scroll-margin-block',
      'scroll-margin-block-end',
      'scroll-margin-block-start',
      'scroll-margin-bottom',
      'scroll-margin-inline',
      'scroll-margin-inline-end',
      'scroll-margin-inline-start',
      'scroll-margin-left',
      'scroll-margin-right',
      'scroll-margin-top',
      'scroll-padding',
      'scroll-padding-block',
      'scroll-padding-block-end',
      'scroll-padding-block-start',
      'scroll-padding-bottom',
      'scroll-padding-inline',
      'scroll-padding-inline-end',
      'scroll-padding-inline-start',
      'scroll-padding-left',
      'scroll-padding-right',
      'scroll-padding-top',
      'scroll-snap-align',
      'scroll-snap-stop',
      'scroll-snap-type',
      'scroll-timeline',
      'scroll-timeline-axis',
      'scroll-timeline-name',
      'scrollbar-color',
      'scrollbar-gutter',
      'scrollbar-width',
      'shape-image-threshold',
      'shape-margin',
      'shape-outside',
      'shape-rendering',
      'speak',
      'speak-as',
      'src',
      'stop-color',
      'stop-opacity',
      'stroke',
      'stroke-dasharray',
      'stroke-dashoffset',
      'stroke-linecap',
      'stroke-linejoin',
      'stroke-miterlimit',
      'stroke-opacity',
      'stroke-width',
      'tab-size',
      'table-layout',
      'text-align',
      'text-align-all',
      'text-align-last',
      'text-anchor',
      'text-combine-upright',
      'text-decoration',
      'text-decoration-color',
      'text-decoration-line',
      'text-decoration-skip',
      'text-decoration-skip-ink',
      'text-decoration-style',
      'text-decoration-thickness',
      'text-emphasis',
      'text-emphasis-color',
      'text-emphasis-position',
      'text-emphasis-style',
      'text-indent',
      'text-justify',
      'text-orientation',
      'text-overflow',
      'text-rendering',
      'text-shadow',
      'text-size-adjust',
      'text-transform',
      'text-underline-offset',
      'text-underline-position',
      'text-wrap',
      'text-wrap-mode',
      'text-wrap-style',
      'timeline-scope',
      'top',
      'touch-action',
      'transform',
      'transform-box',
      'transform-origin',
      'transform-style',
      'transition',
      'transition-behavior',
      'transition-delay',
      'transition-duration',
      'transition-property',
      'transition-timing-function',
      'translate',
      'unicode-bidi',
      'user-modify',
      'user-select',
      'vector-effect',
      'vertical-align',
      'view-timeline',
      'view-timeline-axis',
      'view-timeline-inset',
      'view-timeline-name',
      'view-transition-name',
      'visibility',
      'voice-balance',
      'voice-duration',
      'voice-family',
      'voice-pitch',
      'voice-range',
      'voice-rate',
      'voice-stress',
      'voice-volume',
      'white-space',
      'white-space-collapse',
      'widows',
      'width',
      'will-change',
      'word-break',
      'word-spacing',
      'word-wrap',
      'writing-mode',
      'x',
      'y',
      'z-index',
      'zoom',
    ]
      .sort()
      .reverse();
  function S(w) {
    const b = w.regex,
      N = d(w),
      I = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ },
      z = 'and or not only',
      G = /@-?\w[\w]*(-\w+)*/,
      F = '[a-zA-Z-][a-zA-Z0-9_-]*',
      $ = [w.APOS_STRING_MODE, w.QUOTE_STRING_MODE];
    return {
      name: 'CSS',
      case_insensitive: !0,
      illegal: /[=|'\$]/,
      keywords: { keyframePosition: 'from to' },
      classNameAliases: { keyframePosition: 'selector-tag' },
      contains: [
        N.BLOCK_COMMENT,
        I,
        N.CSS_NUMBER_MODE,
        { className: 'selector-id', begin: /#[A-Za-z0-9_-]+/, relevance: 0 },
        { className: 'selector-class', begin: '\\.' + F, relevance: 0 },
        N.ATTRIBUTE_SELECTOR_MODE,
        {
          className: 'selector-pseudo',
          variants: [{ begin: ':(' + m.join('|') + ')' }, { begin: ':(:)?(' + v.join('|') + ')' }],
        },
        N.CSS_VARIABLE,
        { className: 'attribute', begin: '\\b(' + x.join('|') + ')\\b' },
        {
          begin: /:/,
          end: /[;}{]/,
          contains: [
            N.BLOCK_COMMENT,
            N.HEXCOLOR,
            N.IMPORTANT,
            N.CSS_NUMBER_MODE,
            ...$,
            {
              begin: /(url|data-uri)\(/,
              end: /\)/,
              relevance: 0,
              keywords: { built_in: 'url data-uri' },
              contains: [...$, { className: 'string', begin: /[^)]/, endsWithParent: !0, excludeEnd: !0 }],
            },
            N.FUNCTION_DISPATCH,
          ],
        },
        {
          begin: b.lookahead(/@/),
          end: '[{;]',
          relevance: 0,
          illegal: /:/,
          contains: [
            { className: 'keyword', begin: G },
            {
              begin: /\s/,
              endsWithParent: !0,
              excludeEnd: !0,
              relevance: 0,
              keywords: { $pattern: /[a-z-]+/, keyword: z, attribute: g.join(' ') },
              contains: [{ begin: /[a-z-]+(?=:)/, className: 'attribute' }, ...$, N.CSS_NUMBER_MODE],
            },
          ],
        },
        { className: 'selector-tag', begin: '\\b(' + p.join('|') + ')\\b' },
      ],
    };
  }
  return (hp = S), hp;
}
var mp, nh;
function _y() {
  if (nh) return mp;
  nh = 1;
  function d(l) {
    const a = l.regex,
      p = { begin: /<\/?[A-Za-z_]/, end: '>', subLanguage: 'xml', relevance: 0 },
      g = { begin: '^[-\\*]{3,}', end: '$' },
      m = {
        className: 'code',
        variants: [
          { begin: '(`{3,})[^`](.|\\n)*?\\1`*[ ]*' },
          { begin: '(~{3,})[^~](.|\\n)*?\\1~*[ ]*' },
          { begin: '```', end: '```+[ ]*$' },
          { begin: '~~~', end: '~~~+[ ]*$' },
          { begin: '`.+?`' },
          { begin: '(?=^( {4}|\\t))', contains: [{ begin: '^( {4}|\\t)', end: '(\\n)$' }], relevance: 0 },
        ],
      },
      v = { className: 'bullet', begin: '^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)', end: '\\s+', excludeEnd: !0 },
      x = {
        begin: /^\[[^\n]+\]:/,
        returnBegin: !0,
        contains: [
          { className: 'symbol', begin: /\[/, end: /\]/, excludeBegin: !0, excludeEnd: !0 },
          { className: 'link', begin: /:\s*/, end: /$/, excludeBegin: !0 },
        ],
      },
      S = /[A-Za-z][A-Za-z0-9+.-]*/,
      w = {
        variants: [
          { begin: /\[.+?\]\[.*?\]/, relevance: 0 },
          { begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/, relevance: 2 },
          { begin: a.concat(/\[.+?\]\(/, S, /:\/\/.*?\)/), relevance: 2 },
          { begin: /\[.+?\]\([./?&#].*?\)/, relevance: 1 },
          { begin: /\[.*?\]\(.*?\)/, relevance: 0 },
        ],
        returnBegin: !0,
        contains: [
          { match: /\[(?=\])/ },
          { className: 'string', relevance: 0, begin: '\\[', end: '\\]', excludeBegin: !0, returnEnd: !0 },
          { className: 'link', relevance: 0, begin: '\\]\\(', end: '\\)', excludeBegin: !0, excludeEnd: !0 },
          { className: 'symbol', relevance: 0, begin: '\\]\\[', end: '\\]', excludeBegin: !0, excludeEnd: !0 },
        ],
      },
      b = {
        className: 'strong',
        contains: [],
        variants: [
          { begin: /_{2}(?!\s)/, end: /_{2}/ },
          { begin: /\*{2}(?!\s)/, end: /\*{2}/ },
        ],
      },
      N = {
        className: 'emphasis',
        contains: [],
        variants: [
          { begin: /\*(?![*\s])/, end: /\*/ },
          { begin: /_(?![_\s])/, end: /_/, relevance: 0 },
        ],
      },
      I = l.inherit(b, { contains: [] }),
      z = l.inherit(N, { contains: [] });
    b.contains.push(z), N.contains.push(I);
    let G = [p, w];
    return (
      [b, N, I, z].forEach((ue) => {
        ue.contains = ue.contains.concat(G);
      }),
      (G = G.concat(b, N)),
      {
        name: 'Markdown',
        aliases: ['md', 'mkdown', 'mkd'],
        contains: [
          {
            className: 'section',
            variants: [
              { begin: '^#{1,6}', end: '$', contains: G },
              {
                begin: '(?=^.+?\\n[=-]{2,}$)',
                contains: [{ begin: '^[=-]*$' }, { begin: '^', end: '\\n', contains: G }],
              },
            ],
          },
          p,
          v,
          b,
          N,
          { className: 'quote', begin: '^>\\s+', contains: G, end: '$' },
          m,
          g,
          w,
          x,
          { scope: 'literal', match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/ },
        ],
      }
    );
  }
  return (mp = d), mp;
}
var _p, rh;
function vy() {
  if (rh) return _p;
  rh = 1;
  function d(l) {
    const a = l.regex;
    return {
      name: 'Diff',
      aliases: ['patch'],
      contains: [
        {
          className: 'meta',
          relevance: 10,
          match: a.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/, /^\*\*\* +\d+,\d+ +\*\*\*\*$/, /^--- +\d+,\d+ +----$/),
        },
        {
          className: 'comment',
          variants: [
            { begin: a.either(/Index: /, /^index/, /={3,}/, /^-{3}/, /^\*{3} /, /^\+{3}/, /^diff --git/), end: /$/ },
            { match: /^\*{15}$/ },
          ],
        },
        { className: 'addition', begin: /^\+/, end: /$/ },
        { className: 'deletion', begin: /^-/, end: /$/ },
        { className: 'addition', begin: /^!/, end: /$/ },
      ],
    };
  }
  return (_p = d), _p;
}
var vp, ih;
function yy() {
  if (ih) return vp;
  ih = 1;
  function d(l) {
    const a = l.regex,
      p = '([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)',
      g = a.either(/\b([A-Z]+[a-z0-9]+)+/, /\b([A-Z]+[a-z0-9]+)+[A-Z]+/),
      m = a.concat(g, /(::\w+)*/),
      x = {
        'variable.constant': ['__FILE__', '__LINE__', '__ENCODING__'],
        'variable.language': ['self', 'super'],
        keyword: [
          'alias',
          'and',
          'begin',
          'BEGIN',
          'break',
          'case',
          'class',
          'defined',
          'do',
          'else',
          'elsif',
          'end',
          'END',
          'ensure',
          'for',
          'if',
          'in',
          'module',
          'next',
          'not',
          'or',
          'redo',
          'require',
          'rescue',
          'retry',
          'return',
          'then',
          'undef',
          'unless',
          'until',
          'when',
          'while',
          'yield',
          ...['include', 'extend', 'prepend', 'public', 'private', 'protected', 'raise', 'throw'],
        ],
        built_in: [
          'proc',
          'lambda',
          'attr_accessor',
          'attr_reader',
          'attr_writer',
          'define_method',
          'private_constant',
          'module_function',
        ],
        literal: ['true', 'false', 'nil'],
      },
      S = { className: 'doctag', begin: '@[A-Za-z]+' },
      w = { begin: '#<', end: '>' },
      b = [
        l.COMMENT('#', '$', { contains: [S] }),
        l.COMMENT('^=begin', '^=end', { contains: [S], relevance: 10 }),
        l.COMMENT('^__END__', l.MATCH_NOTHING_RE),
      ],
      N = { className: 'subst', begin: /#\{/, end: /\}/, keywords: x },
      I = {
        className: 'string',
        contains: [l.BACKSLASH_ESCAPE, N],
        variants: [
          { begin: /'/, end: /'/ },
          { begin: /"/, end: /"/ },
          { begin: /`/, end: /`/ },
          { begin: /%[qQwWx]?\(/, end: /\)/ },
          { begin: /%[qQwWx]?\[/, end: /\]/ },
          { begin: /%[qQwWx]?\{/, end: /\}/ },
          { begin: /%[qQwWx]?</, end: />/ },
          { begin: /%[qQwWx]?\//, end: /\// },
          { begin: /%[qQwWx]?%/, end: /%/ },
          { begin: /%[qQwWx]?-/, end: /-/ },
          { begin: /%[qQwWx]?\|/, end: /\|/ },
          { begin: /\B\?(\\\d{1,3})/ },
          { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
          { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
          { begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
          { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
          { begin: /\B\?\\?\S/ },
          {
            begin: a.concat(/<<[-~]?'?/, a.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
            contains: [l.END_SAME_AS_BEGIN({ begin: /(\w+)/, end: /(\w+)/, contains: [l.BACKSLASH_ESCAPE, N] })],
          },
        ],
      },
      z = '[1-9](_?[0-9])*|0',
      G = '[0-9](_?[0-9])*',
      F = {
        className: 'number',
        relevance: 0,
        variants: [
          { begin: `\\b(${z})(\\.(${G}))?([eE][+-]?(${G})|r)?i?\\b` },
          { begin: '\\b0[dD][0-9](_?[0-9])*r?i?\\b' },
          { begin: '\\b0[bB][0-1](_?[0-1])*r?i?\\b' },
          { begin: '\\b0[oO][0-7](_?[0-7])*r?i?\\b' },
          { begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b' },
          { begin: '\\b0(_?[0-7])+r?i?\\b' },
        ],
      },
      $ = {
        variants: [
          { match: /\(\)/ },
          { className: 'params', begin: /\(/, end: /(?=\))/, excludeBegin: !0, endsParent: !0, keywords: x },
        ],
      },
      we = [
        I,
        {
          variants: [{ match: [/class\s+/, m, /\s+<\s+/, m] }, { match: [/\b(class|module)\s+/, m] }],
          scope: { 2: 'title.class', 4: 'title.class.inherited' },
          keywords: x,
        },
        { match: [/(include|extend)\s+/, m], scope: { 2: 'title.class' }, keywords: x },
        { relevance: 0, match: [m, /\.new[. (]/], scope: { 1: 'title.class' } },
        { relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: 'variable.constant' },
        { relevance: 0, match: g, scope: 'title.class' },
        { match: [/def/, /\s+/, p], scope: { 1: 'keyword', 3: 'title.function' }, contains: [$] },
        { begin: l.IDENT_RE + '::' },
        { className: 'symbol', begin: l.UNDERSCORE_IDENT_RE + '(!|\\?)?:', relevance: 0 },
        { className: 'symbol', begin: ':(?!\\s)', contains: [I, { begin: p }], relevance: 0 },
        F,
        { className: 'variable', begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])" },
        {
          className: 'params',
          begin: /\|(?!=)/,
          end: /\|/,
          excludeBegin: !0,
          excludeEnd: !0,
          relevance: 0,
          keywords: x,
        },
        {
          begin: '(' + l.RE_STARTERS_RE + '|unless)\\s*',
          keywords: 'unless',
          contains: [
            {
              className: 'regexp',
              contains: [l.BACKSLASH_ESCAPE, N],
              illegal: /\n/,
              variants: [
                { begin: '/', end: '/[a-z]*' },
                { begin: /%r\{/, end: /\}[a-z]*/ },
                { begin: '%r\\(', end: '\\)[a-z]*' },
                { begin: '%r!', end: '![a-z]*' },
                { begin: '%r\\[', end: '\\][a-z]*' },
              ],
            },
          ].concat(w, b),
          relevance: 0,
        },
      ].concat(w, b);
    (N.contains = we), ($.contains = we);
    const Ae = [
      { begin: /^\s*=>/, starts: { end: '$', contains: we } },
      {
        className: 'meta.prompt',
        begin:
          '^(' +
          '[>?]>' +
          '|' +
          '[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]' +
          '|' +
          '(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>' +
          ')(?=[ ])',
        starts: { end: '$', keywords: x, contains: we },
      },
    ];
    return (
      b.unshift(w),
      {
        name: 'Ruby',
        aliases: ['rb', 'gemspec', 'podspec', 'thor', 'irb'],
        keywords: x,
        illegal: /\/\*/,
        contains: [l.SHEBANG({ binary: 'ruby' })].concat(Ae).concat(b).concat(we),
      }
    );
  }
  return (vp = d), vp;
}
var yp, oh;
function Ey() {
  if (oh) return yp;
  oh = 1;
  function d(l) {
    const v = {
      keyword: [
        'break',
        'case',
        'chan',
        'const',
        'continue',
        'default',
        'defer',
        'else',
        'fallthrough',
        'for',
        'func',
        'go',
        'goto',
        'if',
        'import',
        'interface',
        'map',
        'package',
        'range',
        'return',
        'select',
        'struct',
        'switch',
        'type',
        'var',
      ],
      type: [
        'bool',
        'byte',
        'complex64',
        'complex128',
        'error',
        'float32',
        'float64',
        'int8',
        'int16',
        'int32',
        'int64',
        'string',
        'uint8',
        'uint16',
        'uint32',
        'uint64',
        'int',
        'uint',
        'uintptr',
        'rune',
      ],
      literal: ['true', 'false', 'iota', 'nil'],
      built_in: [
        'append',
        'cap',
        'close',
        'complex',
        'copy',
        'imag',
        'len',
        'make',
        'new',
        'panic',
        'print',
        'println',
        'real',
        'recover',
        'delete',
      ],
    };
    return {
      name: 'Go',
      aliases: ['golang'],
      keywords: v,
      illegal: '</',
      contains: [
        l.C_LINE_COMMENT_MODE,
        l.C_BLOCK_COMMENT_MODE,
        { className: 'string', variants: [l.QUOTE_STRING_MODE, l.APOS_STRING_MODE, { begin: '`', end: '`' }] },
        {
          className: 'number',
          variants: [
            { match: /-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/, relevance: 0 },
            {
              match: /-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,
              relevance: 0,
            },
            { match: /-?\b0[oO](_?[0-7])*i?/, relevance: 0 },
            { match: /-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/, relevance: 0 },
            { match: /-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/, relevance: 0 },
          ],
        },
        { begin: /:=/ },
        {
          className: 'function',
          beginKeywords: 'func',
          end: '\\s*(\\{|$)',
          excludeEnd: !0,
          contains: [
            l.TITLE_MODE,
            { className: 'params', begin: /\(/, end: /\)/, endsParent: !0, keywords: v, illegal: /["']/ },
          ],
        },
      ],
    };
  }
  return (yp = d), yp;
}
var Ep, ah;
function by() {
  if (ah) return Ep;
  ah = 1;
  function d(l) {
    const a = l.regex,
      p = /[_A-Za-z][_0-9A-Za-z]*/;
    return {
      name: 'GraphQL',
      aliases: ['gql'],
      case_insensitive: !0,
      disableAutodetect: !1,
      keywords: {
        keyword: [
          'query',
          'mutation',
          'subscription',
          'type',
          'input',
          'schema',
          'directive',
          'interface',
          'union',
          'scalar',
          'fragment',
          'enum',
          'on',
        ],
        literal: ['true', 'false', 'null'],
      },
      contains: [
        l.HASH_COMMENT_MODE,
        l.QUOTE_STRING_MODE,
        l.NUMBER_MODE,
        { scope: 'punctuation', match: /[.]{3}/, relevance: 0 },
        { scope: 'punctuation', begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/, relevance: 0 },
        { scope: 'variable', begin: /\$/, end: /\W/, excludeEnd: !0, relevance: 0 },
        { scope: 'meta', match: /@\w+/, excludeEnd: !0 },
        { scope: 'symbol', begin: a.concat(p, a.lookahead(/\s*:/)), relevance: 0 },
      ],
      illegal: [/[;<']/, /BEGIN/],
    };
  }
  return (Ep = d), Ep;
}
var bp, sh;
function wy() {
  if (sh) return bp;
  sh = 1;
  function d(l) {
    const a = l.regex,
      p = { className: 'number', relevance: 0, variants: [{ begin: /([+-]+)?[\d]+_[\d_]+/ }, { begin: l.NUMBER_RE }] },
      g = l.COMMENT();
    g.variants = [
      { begin: /;/, end: /$/ },
      { begin: /#/, end: /$/ },
    ];
    const m = { className: 'variable', variants: [{ begin: /\$[\w\d"][\w\d_]*/ }, { begin: /\$\{(.*?)\}/ }] },
      v = { className: 'literal', begin: /\bon|off|true|false|yes|no\b/ },
      x = {
        className: 'string',
        contains: [l.BACKSLASH_ESCAPE],
        variants: [
          { begin: "'''", end: "'''", relevance: 10 },
          { begin: '"""', end: '"""', relevance: 10 },
          { begin: '"', end: '"' },
          { begin: "'", end: "'" },
        ],
      },
      S = { begin: /\[/, end: /\]/, contains: [g, v, m, x, p, 'self'], relevance: 0 },
      w = /[A-Za-z0-9_-]+/,
      b = /"(\\"|[^"])*"/,
      N = /'[^']*'/,
      I = a.either(w, b, N),
      z = a.concat(I, '(\\s*\\.\\s*', I, ')*', a.lookahead(/\s*=\s*[^#\s]/));
    return {
      name: 'TOML, also INI',
      aliases: ['toml'],
      case_insensitive: !0,
      illegal: /\S/,
      contains: [
        g,
        { className: 'section', begin: /\[+/, end: /\]+/ },
        { begin: z, className: 'attr', starts: { end: /$/, contains: [g, S, v, m, x, p] } },
      ],
    };
  }
  return (bp = d), bp;
}
var wp, lh;
function xy() {
  if (lh) return wp;
  lh = 1;
  var d = '[0-9](_*[0-9])*',
    l = `\\.(${d})`,
    a = '[0-9a-fA-F](_*[0-9a-fA-F])*',
    p = {
      className: 'number',
      variants: [
        { begin: `(\\b(${d})((${l})|\\.)?|(${l}))[eE][+-]?(${d})[fFdD]?\\b` },
        { begin: `\\b(${d})((${l})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
        { begin: `(${l})[fFdD]?\\b` },
        { begin: `\\b(${d})[fFdD]\\b` },
        { begin: `\\b0[xX]((${a})\\.?|(${a})?\\.(${a}))[pP][+-]?(${d})[fFdD]?\\b` },
        { begin: '\\b(0|[1-9](_*[0-9])*)[lL]?\\b' },
        { begin: `\\b0[xX](${a})[lL]?\\b` },
        { begin: '\\b0(_*[0-7])*[lL]?\\b' },
        { begin: '\\b0[bB][01](_*[01])*[lL]?\\b' },
      ],
      relevance: 0,
    };
  function g(v, x, S) {
    return S === -1 ? '' : v.replace(x, (w) => g(v, x, S - 1));
  }
  function m(v) {
    const x = v.regex,
      S = '[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*',
      w = S + g('(?:<' + S + '~~~(?:\\s*,\\s*' + S + '~~~)*>)?', /~~~/g, 2),
      G = {
        keyword: [
          'synchronized',
          'abstract',
          'private',
          'var',
          'static',
          'if',
          'const ',
          'for',
          'while',
          'strictfp',
          'finally',
          'protected',
          'import',
          'native',
          'final',
          'void',
          'enum',
          'else',
          'break',
          'transient',
          'catch',
          'instanceof',
          'volatile',
          'case',
          'assert',
          'package',
          'default',
          'public',
          'try',
          'switch',
          'continue',
          'throws',
          'protected',
          'public',
          'private',
          'module',
          'requires',
          'exports',
          'do',
          'sealed',
          'yield',
          'permits',
          'goto',
          'when',
        ],
        literal: ['false', 'true', 'null'],
        type: ['char', 'boolean', 'long', 'float', 'int', 'byte', 'short', 'double'],
        built_in: ['super', 'this'],
      },
      F = { className: 'meta', begin: '@' + S, contains: [{ begin: /\(/, end: /\)/, contains: ['self'] }] },
      $ = {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        keywords: G,
        relevance: 0,
        contains: [v.C_BLOCK_COMMENT_MODE],
        endsParent: !0,
      };
    return {
      name: 'Java',
      aliases: ['jsp'],
      keywords: G,
      illegal: /<\/|#/,
      contains: [
        v.COMMENT('/\\*\\*', '\\*/', {
          relevance: 0,
          contains: [
            { begin: /\w+@/, relevance: 0 },
            { className: 'doctag', begin: '@[A-Za-z]+' },
          ],
        }),
        { begin: /import java\.[a-z]+\./, keywords: 'import', relevance: 2 },
        v.C_LINE_COMMENT_MODE,
        v.C_BLOCK_COMMENT_MODE,
        { begin: /"""/, end: /"""/, className: 'string', contains: [v.BACKSLASH_ESCAPE] },
        v.APOS_STRING_MODE,
        v.QUOTE_STRING_MODE,
        {
          match: [/\b(?:class|interface|enum|extends|implements|new)/, /\s+/, S],
          className: { 1: 'keyword', 3: 'title.class' },
        },
        { match: /non-sealed/, scope: 'keyword' },
        {
          begin: [x.concat(/(?!else)/, S), /\s+/, S, /\s+/, /=(?!=)/],
          className: { 1: 'type', 3: 'variable', 5: 'operator' },
        },
        {
          begin: [/record/, /\s+/, S],
          className: { 1: 'keyword', 3: 'title.class' },
          contains: [$, v.C_LINE_COMMENT_MODE, v.C_BLOCK_COMMENT_MODE],
        },
        { beginKeywords: 'new throw return else', relevance: 0 },
        {
          begin: ['(?:' + w + '\\s+)', v.UNDERSCORE_IDENT_RE, /\s*(?=\()/],
          className: { 2: 'title.function' },
          keywords: G,
          contains: [
            {
              className: 'params',
              begin: /\(/,
              end: /\)/,
              keywords: G,
              relevance: 0,
              contains: [F, v.APOS_STRING_MODE, v.QUOTE_STRING_MODE, p, v.C_BLOCK_COMMENT_MODE],
            },
            v.C_LINE_COMMENT_MODE,
            v.C_BLOCK_COMMENT_MODE,
          ],
        },
        p,
        F,
      ],
    };
  }
  return (wp = m), wp;
}
var xp, uh;
function Sy() {
  if (uh) return xp;
  uh = 1;
  const d = '[A-Za-z$_][0-9A-Za-z$_]*',
    l = [
      'as',
      'in',
      'of',
      'if',
      'for',
      'while',
      'finally',
      'var',
      'new',
      'function',
      'do',
      'return',
      'void',
      'else',
      'break',
      'catch',
      'instanceof',
      'with',
      'throw',
      'case',
      'default',
      'try',
      'switch',
      'continue',
      'typeof',
      'delete',
      'let',
      'yield',
      'const',
      'class',
      'debugger',
      'async',
      'await',
      'static',
      'import',
      'from',
      'export',
      'extends',
      'using',
    ],
    a = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
    p = [
      'Object',
      'Function',
      'Boolean',
      'Symbol',
      'Math',
      'Date',
      'Number',
      'BigInt',
      'String',
      'RegExp',
      'Array',
      'Float32Array',
      'Float64Array',
      'Int8Array',
      'Uint8Array',
      'Uint8ClampedArray',
      'Int16Array',
      'Int32Array',
      'Uint16Array',
      'Uint32Array',
      'BigInt64Array',
      'BigUint64Array',
      'Set',
      'Map',
      'WeakSet',
      'WeakMap',
      'ArrayBuffer',
      'SharedArrayBuffer',
      'Atomics',
      'DataView',
      'JSON',
      'Promise',
      'Generator',
      'GeneratorFunction',
      'AsyncFunction',
      'Reflect',
      'Proxy',
      'Intl',
      'WebAssembly',
    ],
    g = ['Error', 'EvalError', 'InternalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError'],
    m = [
      'setInterval',
      'setTimeout',
      'clearInterval',
      'clearTimeout',
      'require',
      'exports',
      'eval',
      'isFinite',
      'isNaN',
      'parseFloat',
      'parseInt',
      'decodeURI',
      'decodeURIComponent',
      'encodeURI',
      'encodeURIComponent',
      'escape',
      'unescape',
    ],
    v = [
      'arguments',
      'this',
      'super',
      'console',
      'window',
      'document',
      'localStorage',
      'sessionStorage',
      'module',
      'global',
    ],
    x = [].concat(m, p, g);
  function S(w) {
    const b = w.regex,
      N = (Pe, { after: Ce }) => {
        const Fe = '</' + Pe[0].slice(1);
        return Pe.input.indexOf(Fe, Ce) !== -1;
      },
      I = d,
      z = { begin: '<>', end: '</>' },
      G = /<[A-Za-z0-9\\._:-]+\s*\/>/,
      F = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        isTrulyOpeningTag: (Pe, Ce) => {
          const Fe = Pe[0].length + Pe.index,
            je = Pe.input[Fe];
          if (je === '<' || je === ',') {
            Ce.ignoreMatch();
            return;
          }
          je === '>' && (N(Pe, { after: Fe }) || Ce.ignoreMatch());
          let mt;
          const Ot = Pe.input.substring(Fe);
          if ((mt = Ot.match(/^\s*=/))) {
            Ce.ignoreMatch();
            return;
          }
          if ((mt = Ot.match(/^\s+extends\s+/)) && mt.index === 0) {
            Ce.ignoreMatch();
            return;
          }
        },
      },
      $ = { $pattern: d, keyword: l, literal: a, built_in: x, 'variable.language': v },
      V = '[0-9](_?[0-9])*',
      ue = `\\.(${V})`,
      ae = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
      Te = {
        className: 'number',
        variants: [
          { begin: `(\\b(${ae})((${ue})|\\.)?|(${ue}))[eE][+-]?(${V})\\b` },
          { begin: `\\b(${ae})\\b((${ue})\\b|\\.)?|(${ue})\\b` },
          { begin: '\\b(0|[1-9](_?[0-9])*)n\\b' },
          { begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b' },
          { begin: '\\b0[bB][0-1](_?[0-1])*n?\\b' },
          { begin: '\\b0[oO][0-7](_?[0-7])*n?\\b' },
          { begin: '\\b0[0-7]+n?\\b' },
        ],
        relevance: 0,
      },
      de = { className: 'subst', begin: '\\$\\{', end: '\\}', keywords: $, contains: [] },
      be = {
        begin: '.?html`',
        end: '',
        starts: { end: '`', returnEnd: !1, contains: [w.BACKSLASH_ESCAPE, de], subLanguage: 'xml' },
      },
      we = {
        begin: '.?css`',
        end: '',
        starts: { end: '`', returnEnd: !1, contains: [w.BACKSLASH_ESCAPE, de], subLanguage: 'css' },
      },
      ge = {
        begin: '.?gql`',
        end: '',
        starts: { end: '`', returnEnd: !1, contains: [w.BACKSLASH_ESCAPE, de], subLanguage: 'graphql' },
      },
      ze = { className: 'string', begin: '`', end: '`', contains: [w.BACKSLASH_ESCAPE, de] },
      Ae = {
        className: 'comment',
        variants: [
          w.COMMENT(/\/\*\*(?!\/)/, '\\*/', {
            relevance: 0,
            contains: [
              {
                begin: '(?=@[A-Za-z]+)',
                relevance: 0,
                contains: [
                  { className: 'doctag', begin: '@[A-Za-z]+' },
                  { className: 'type', begin: '\\{', end: '\\}', excludeEnd: !0, excludeBegin: !0, relevance: 0 },
                  { className: 'variable', begin: I + '(?=\\s*(-)|$)', endsParent: !0, relevance: 0 },
                  { begin: /(?=[^\n])\s/, relevance: 0 },
                ],
              },
            ],
          }),
          w.C_BLOCK_COMMENT_MODE,
          w.C_LINE_COMMENT_MODE,
        ],
      },
      dt = [w.APOS_STRING_MODE, w.QUOTE_STRING_MODE, be, we, ge, ze, { match: /\$\d+/ }, Te];
    de.contains = dt.concat({ begin: /\{/, end: /\}/, keywords: $, contains: ['self'].concat(dt) });
    const st = [].concat(Ae, de.contains),
      pe = st.concat([{ begin: /(\s*)\(/, end: /\)/, keywords: $, contains: ['self'].concat(st) }]),
      ne = {
        className: 'params',
        begin: /(\s*)\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: $,
        contains: pe,
      },
      j = {
        variants: [
          {
            match: [/class/, /\s+/, I, /\s+/, /extends/, /\s+/, b.concat(I, '(', b.concat(/\./, I), ')*')],
            scope: { 1: 'keyword', 3: 'title.class', 5: 'keyword', 7: 'title.class.inherited' },
          },
          { match: [/class/, /\s+/, I], scope: { 1: 'keyword', 3: 'title.class' } },
        ],
      },
      re = {
        relevance: 0,
        match: b.either(
          /\bJSON/,
          /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
          /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
          /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        ),
        className: 'title.class',
        keywords: { _: [...p, ...g] },
      },
      B = { label: 'use_strict', className: 'meta', relevance: 10, begin: /^\s*['"]use (strict|asm)['"]/ },
      ie = {
        variants: [{ match: [/function/, /\s+/, I, /(?=\s*\()/] }, { match: [/function/, /\s*(?=\()/] }],
        className: { 1: 'keyword', 3: 'title.function' },
        label: 'func.def',
        contains: [ne],
        illegal: /%/,
      },
      Y = { relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: 'variable.constant' };
    function C(Pe) {
      return b.concat('(?!', Pe.join('|'), ')');
    }
    const K = {
        match: b.concat(/\b/, C([...m, 'super', 'import'].map((Pe) => `${Pe}\\s*\\(`)), I, b.lookahead(/\s*\(/)),
        className: 'title.function',
        relevance: 0,
      },
      xe = {
        begin: b.concat(/\./, b.lookahead(b.concat(I, /(?![0-9A-Za-z$_(])/))),
        end: I,
        excludeBegin: !0,
        keywords: 'prototype',
        className: 'property',
        relevance: 0,
      },
      Se = {
        match: [/get|set/, /\s+/, I, /(?=\()/],
        className: { 1: 'keyword', 3: 'title.function' },
        contains: [{ begin: /\(\)/ }, ne],
      },
      Me = '(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' + w.UNDERSCORE_IDENT_RE + ')\\s*=>',
      $e = {
        match: [/const|var|let/, /\s+/, I, /\s*/, /=\s*/, /(async\s*)?/, b.lookahead(Me)],
        keywords: 'async',
        className: { 1: 'keyword', 3: 'title.function' },
        contains: [ne],
      };
    return {
      name: 'JavaScript',
      aliases: ['js', 'jsx', 'mjs', 'cjs'],
      keywords: $,
      exports: { PARAMS_CONTAINS: pe, CLASS_REFERENCE: re },
      illegal: /#(?![$_A-z])/,
      contains: [
        w.SHEBANG({ label: 'shebang', binary: 'node', relevance: 5 }),
        B,
        w.APOS_STRING_MODE,
        w.QUOTE_STRING_MODE,
        be,
        we,
        ge,
        ze,
        Ae,
        { match: /\$\d+/ },
        Te,
        re,
        { scope: 'attr', match: I + b.lookahead(':'), relevance: 0 },
        $e,
        {
          begin: '(' + w.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
          keywords: 'return throw case',
          relevance: 0,
          contains: [
            Ae,
            w.REGEXP_MODE,
            {
              className: 'function',
              begin: Me,
              returnBegin: !0,
              end: '\\s*=>',
              contains: [
                {
                  className: 'params',
                  variants: [
                    { begin: w.UNDERSCORE_IDENT_RE, relevance: 0 },
                    { className: null, begin: /\(\s*\)/, skip: !0 },
                    { begin: /(\s*)\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: $, contains: pe },
                  ],
                },
              ],
            },
            { begin: /,/, relevance: 0 },
            { match: /\s+/, relevance: 0 },
            {
              variants: [
                { begin: z.begin, end: z.end },
                { match: G },
                { begin: F.begin, 'on:begin': F.isTrulyOpeningTag, end: F.end },
              ],
              subLanguage: 'xml',
              contains: [{ begin: F.begin, end: F.end, skip: !0, contains: ['self'] }],
            },
          ],
        },
        ie,
        { beginKeywords: 'while if switch catch for' },
        {
          begin:
            '\\b(?!function)' + w.UNDERSCORE_IDENT_RE + '\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
          returnBegin: !0,
          label: 'func.def',
          contains: [ne, w.inherit(w.TITLE_MODE, { begin: I, className: 'title.function' })],
        },
        { match: /\.\.\./, relevance: 0 },
        xe,
        { match: '\\$' + I, relevance: 0 },
        { match: [/\bconstructor(?=\s*\()/], className: { 1: 'title.function' }, contains: [ne] },
        K,
        Y,
        j,
        Se,
        { match: /\$[(.]/ },
      ],
    };
  }
  return (xp = S), xp;
}
var Sp, ch;
function ky() {
  if (ch) return Sp;
  ch = 1;
  function d(l) {
    const a = { className: 'attr', begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/, relevance: 1.01 },
      p = { match: /[{}[\],:]/, className: 'punctuation', relevance: 0 },
      g = ['true', 'false', 'null'],
      m = { scope: 'literal', beginKeywords: g.join(' ') };
    return {
      name: 'JSON',
      aliases: ['jsonc'],
      keywords: { literal: g },
      contains: [a, p, l.QUOTE_STRING_MODE, m, l.C_NUMBER_MODE, l.C_LINE_COMMENT_MODE, l.C_BLOCK_COMMENT_MODE],
      illegal: '\\S',
    };
  }
  return (Sp = d), Sp;
}
var kp, fh;
function Ny() {
  if (fh) return kp;
  fh = 1;
  var d = '[0-9](_*[0-9])*',
    l = `\\.(${d})`,
    a = '[0-9a-fA-F](_*[0-9a-fA-F])*',
    p = {
      className: 'number',
      variants: [
        { begin: `(\\b(${d})((${l})|\\.)?|(${l}))[eE][+-]?(${d})[fFdD]?\\b` },
        { begin: `\\b(${d})((${l})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
        { begin: `(${l})[fFdD]?\\b` },
        { begin: `\\b(${d})[fFdD]\\b` },
        { begin: `\\b0[xX]((${a})\\.?|(${a})?\\.(${a}))[pP][+-]?(${d})[fFdD]?\\b` },
        { begin: '\\b(0|[1-9](_*[0-9])*)[lL]?\\b' },
        { begin: `\\b0[xX](${a})[lL]?\\b` },
        { begin: '\\b0(_*[0-7])*[lL]?\\b' },
        { begin: '\\b0[bB][01](_*[01])*[lL]?\\b' },
      ],
      relevance: 0,
    };
  function g(m) {
    const v = {
        keyword:
          'abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual',
        built_in: 'Byte Short Char Int Long Boolean Float Double Void Unit Nothing',
        literal: 'true false null',
      },
      x = {
        className: 'keyword',
        begin: /\b(break|continue|return|this)\b/,
        starts: { contains: [{ className: 'symbol', begin: /@\w+/ }] },
      },
      S = { className: 'symbol', begin: m.UNDERSCORE_IDENT_RE + '@' },
      w = { className: 'subst', begin: /\$\{/, end: /\}/, contains: [m.C_NUMBER_MODE] },
      b = { className: 'variable', begin: '\\$' + m.UNDERSCORE_IDENT_RE },
      N = {
        className: 'string',
        variants: [
          { begin: '"""', end: '"""(?=[^"])', contains: [b, w] },
          { begin: "'", end: "'", illegal: /\n/, contains: [m.BACKSLASH_ESCAPE] },
          { begin: '"', end: '"', illegal: /\n/, contains: [m.BACKSLASH_ESCAPE, b, w] },
        ],
      };
    w.contains.push(N);
    const I = {
        className: 'meta',
        begin:
          '@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*' +
          m.UNDERSCORE_IDENT_RE +
          ')?',
      },
      z = {
        className: 'meta',
        begin: '@' + m.UNDERSCORE_IDENT_RE,
        contains: [{ begin: /\(/, end: /\)/, contains: [m.inherit(N, { className: 'string' }), 'self'] }],
      },
      G = p,
      F = m.COMMENT('/\\*', '\\*/', { contains: [m.C_BLOCK_COMMENT_MODE] }),
      $ = {
        variants: [
          { className: 'type', begin: m.UNDERSCORE_IDENT_RE },
          { begin: /\(/, end: /\)/, contains: [] },
        ],
      },
      V = $;
    return (
      (V.variants[1].contains = [$]),
      ($.variants[1].contains = [V]),
      {
        name: 'Kotlin',
        aliases: ['kt', 'kts'],
        keywords: v,
        contains: [
          m.COMMENT('/\\*\\*', '\\*/', { relevance: 0, contains: [{ className: 'doctag', begin: '@[A-Za-z]+' }] }),
          m.C_LINE_COMMENT_MODE,
          F,
          x,
          S,
          I,
          z,
          {
            className: 'function',
            beginKeywords: 'fun',
            end: '[(]|$',
            returnBegin: !0,
            excludeEnd: !0,
            keywords: v,
            relevance: 5,
            contains: [
              {
                begin: m.UNDERSCORE_IDENT_RE + '\\s*\\(',
                returnBegin: !0,
                relevance: 0,
                contains: [m.UNDERSCORE_TITLE_MODE],
              },
              { className: 'type', begin: /</, end: />/, keywords: 'reified', relevance: 0 },
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                endsParent: !0,
                keywords: v,
                relevance: 0,
                contains: [
                  {
                    begin: /:/,
                    end: /[=,\/]/,
                    endsWithParent: !0,
                    contains: [$, m.C_LINE_COMMENT_MODE, F],
                    relevance: 0,
                  },
                  m.C_LINE_COMMENT_MODE,
                  F,
                  I,
                  z,
                  N,
                  m.C_NUMBER_MODE,
                ],
              },
              F,
            ],
          },
          {
            begin: [/class|interface|trait/, /\s+/, m.UNDERSCORE_IDENT_RE],
            beginScope: { 3: 'title.class' },
            keywords: 'class interface trait',
            end: /[:\{(]|$/,
            excludeEnd: !0,
            illegal: 'extends implements',
            contains: [
              { beginKeywords: 'public protected internal private constructor' },
              m.UNDERSCORE_TITLE_MODE,
              { className: 'type', begin: /</, end: />/, excludeBegin: !0, excludeEnd: !0, relevance: 0 },
              { className: 'type', begin: /[,:]\s*/, end: /[<\(,){\s]|$/, excludeBegin: !0, returnEnd: !0 },
              I,
              z,
            ],
          },
          N,
          {
            className: 'meta',
            begin: '^#!/usr/bin/env',
            end: '$',
            illegal: `
`,
          },
          G,
        ],
      }
    );
  }
  return (kp = g), kp;
}
var Np, dh;
function Ty() {
  if (dh) return Np;
  dh = 1;
  const d = (b) => ({
      IMPORTANT: { scope: 'meta', begin: '!important' },
      BLOCK_COMMENT: b.C_BLOCK_COMMENT_MODE,
      HEXCOLOR: { scope: 'number', begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/ },
      FUNCTION_DISPATCH: { className: 'built_in', begin: /[\w-]+(?=\()/ },
      ATTRIBUTE_SELECTOR_MODE: {
        scope: 'selector-attr',
        begin: /\[/,
        end: /\]/,
        illegal: '$',
        contains: [b.APOS_STRING_MODE, b.QUOTE_STRING_MODE],
      },
      CSS_NUMBER_MODE: {
        scope: 'number',
        begin:
          b.NUMBER_RE +
          '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
        relevance: 0,
      },
      CSS_VARIABLE: { className: 'attr', begin: /--[A-Za-z_][A-Za-z0-9_-]*/ },
    }),
    l = [
      'a',
      'abbr',
      'address',
      'article',
      'aside',
      'audio',
      'b',
      'blockquote',
      'body',
      'button',
      'canvas',
      'caption',
      'cite',
      'code',
      'dd',
      'del',
      'details',
      'dfn',
      'div',
      'dl',
      'dt',
      'em',
      'fieldset',
      'figcaption',
      'figure',
      'footer',
      'form',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'header',
      'hgroup',
      'html',
      'i',
      'iframe',
      'img',
      'input',
      'ins',
      'kbd',
      'label',
      'legend',
      'li',
      'main',
      'mark',
      'menu',
      'nav',
      'object',
      'ol',
      'optgroup',
      'option',
      'p',
      'picture',
      'q',
      'quote',
      'samp',
      'section',
      'select',
      'source',
      'span',
      'strong',
      'summary',
      'sup',
      'table',
      'tbody',
      'td',
      'textarea',
      'tfoot',
      'th',
      'thead',
      'time',
      'tr',
      'ul',
      'var',
      'video',
    ],
    a = [
      'defs',
      'g',
      'marker',
      'mask',
      'pattern',
      'svg',
      'switch',
      'symbol',
      'feBlend',
      'feColorMatrix',
      'feComponentTransfer',
      'feComposite',
      'feConvolveMatrix',
      'feDiffuseLighting',
      'feDisplacementMap',
      'feFlood',
      'feGaussianBlur',
      'feImage',
      'feMerge',
      'feMorphology',
      'feOffset',
      'feSpecularLighting',
      'feTile',
      'feTurbulence',
      'linearGradient',
      'radialGradient',
      'stop',
      'circle',
      'ellipse',
      'image',
      'line',
      'path',
      'polygon',
      'polyline',
      'rect',
      'text',
      'use',
      'textPath',
      'tspan',
      'foreignObject',
      'clipPath',
    ],
    p = [...l, ...a],
    g = [
      'any-hover',
      'any-pointer',
      'aspect-ratio',
      'color',
      'color-gamut',
      'color-index',
      'device-aspect-ratio',
      'device-height',
      'device-width',
      'display-mode',
      'forced-colors',
      'grid',
      'height',
      'hover',
      'inverted-colors',
      'monochrome',
      'orientation',
      'overflow-block',
      'overflow-inline',
      'pointer',
      'prefers-color-scheme',
      'prefers-contrast',
      'prefers-reduced-motion',
      'prefers-reduced-transparency',
      'resolution',
      'scan',
      'scripting',
      'update',
      'width',
      'min-width',
      'max-width',
      'min-height',
      'max-height',
    ]
      .sort()
      .reverse(),
    m = [
      'active',
      'any-link',
      'blank',
      'checked',
      'current',
      'default',
      'defined',
      'dir',
      'disabled',
      'drop',
      'empty',
      'enabled',
      'first',
      'first-child',
      'first-of-type',
      'fullscreen',
      'future',
      'focus',
      'focus-visible',
      'focus-within',
      'has',
      'host',
      'host-context',
      'hover',
      'indeterminate',
      'in-range',
      'invalid',
      'is',
      'lang',
      'last-child',
      'last-of-type',
      'left',
      'link',
      'local-link',
      'not',
      'nth-child',
      'nth-col',
      'nth-last-child',
      'nth-last-col',
      'nth-last-of-type',
      'nth-of-type',
      'only-child',
      'only-of-type',
      'optional',
      'out-of-range',
      'past',
      'placeholder-shown',
      'read-only',
      'read-write',
      'required',
      'right',
      'root',
      'scope',
      'target',
      'target-within',
      'user-invalid',
      'valid',
      'visited',
      'where',
    ]
      .sort()
      .reverse(),
    v = [
      'after',
      'backdrop',
      'before',
      'cue',
      'cue-region',
      'first-letter',
      'first-line',
      'grammar-error',
      'marker',
      'part',
      'placeholder',
      'selection',
      'slotted',
      'spelling-error',
    ]
      .sort()
      .reverse(),
    x = [
      'accent-color',
      'align-content',
      'align-items',
      'align-self',
      'alignment-baseline',
      'all',
      'anchor-name',
      'animation',
      'animation-composition',
      'animation-delay',
      'animation-direction',
      'animation-duration',
      'animation-fill-mode',
      'animation-iteration-count',
      'animation-name',
      'animation-play-state',
      'animation-range',
      'animation-range-end',
      'animation-range-start',
      'animation-timeline',
      'animation-timing-function',
      'appearance',
      'aspect-ratio',
      'backdrop-filter',
      'backface-visibility',
      'background',
      'background-attachment',
      'background-blend-mode',
      'background-clip',
      'background-color',
      'background-image',
      'background-origin',
      'background-position',
      'background-position-x',
      'background-position-y',
      'background-repeat',
      'background-size',
      'baseline-shift',
      'block-size',
      'border',
      'border-block',
      'border-block-color',
      'border-block-end',
      'border-block-end-color',
      'border-block-end-style',
      'border-block-end-width',
      'border-block-start',
      'border-block-start-color',
      'border-block-start-style',
      'border-block-start-width',
      'border-block-style',
      'border-block-width',
      'border-bottom',
      'border-bottom-color',
      'border-bottom-left-radius',
      'border-bottom-right-radius',
      'border-bottom-style',
      'border-bottom-width',
      'border-collapse',
      'border-color',
      'border-end-end-radius',
      'border-end-start-radius',
      'border-image',
      'border-image-outset',
      'border-image-repeat',
      'border-image-slice',
      'border-image-source',
      'border-image-width',
      'border-inline',
      'border-inline-color',
      'border-inline-end',
      'border-inline-end-color',
      'border-inline-end-style',
      'border-inline-end-width',
      'border-inline-start',
      'border-inline-start-color',
      'border-inline-start-style',
      'border-inline-start-width',
      'border-inline-style',
      'border-inline-width',
      'border-left',
      'border-left-color',
      'border-left-style',
      'border-left-width',
      'border-radius',
      'border-right',
      'border-right-color',
      'border-right-style',
      'border-right-width',
      'border-spacing',
      'border-start-end-radius',
      'border-start-start-radius',
      'border-style',
      'border-top',
      'border-top-color',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-top-style',
      'border-top-width',
      'border-width',
      'bottom',
      'box-align',
      'box-decoration-break',
      'box-direction',
      'box-flex',
      'box-flex-group',
      'box-lines',
      'box-ordinal-group',
      'box-orient',
      'box-pack',
      'box-shadow',
      'box-sizing',
      'break-after',
      'break-before',
      'break-inside',
      'caption-side',
      'caret-color',
      'clear',
      'clip',
      'clip-path',
      'clip-rule',
      'color',
      'color-interpolation',
      'color-interpolation-filters',
      'color-profile',
      'color-rendering',
      'color-scheme',
      'column-count',
      'column-fill',
      'column-gap',
      'column-rule',
      'column-rule-color',
      'column-rule-style',
      'column-rule-width',
      'column-span',
      'column-width',
      'columns',
      'contain',
      'contain-intrinsic-block-size',
      'contain-intrinsic-height',
      'contain-intrinsic-inline-size',
      'contain-intrinsic-size',
      'contain-intrinsic-width',
      'container',
      'container-name',
      'container-type',
      'content',
      'content-visibility',
      'counter-increment',
      'counter-reset',
      'counter-set',
      'cue',
      'cue-after',
      'cue-before',
      'cursor',
      'cx',
      'cy',
      'direction',
      'display',
      'dominant-baseline',
      'empty-cells',
      'enable-background',
      'field-sizing',
      'fill',
      'fill-opacity',
      'fill-rule',
      'filter',
      'flex',
      'flex-basis',
      'flex-direction',
      'flex-flow',
      'flex-grow',
      'flex-shrink',
      'flex-wrap',
      'float',
      'flood-color',
      'flood-opacity',
      'flow',
      'font',
      'font-display',
      'font-family',
      'font-feature-settings',
      'font-kerning',
      'font-language-override',
      'font-optical-sizing',
      'font-palette',
      'font-size',
      'font-size-adjust',
      'font-smooth',
      'font-smoothing',
      'font-stretch',
      'font-style',
      'font-synthesis',
      'font-synthesis-position',
      'font-synthesis-small-caps',
      'font-synthesis-style',
      'font-synthesis-weight',
      'font-variant',
      'font-variant-alternates',
      'font-variant-caps',
      'font-variant-east-asian',
      'font-variant-emoji',
      'font-variant-ligatures',
      'font-variant-numeric',
      'font-variant-position',
      'font-variation-settings',
      'font-weight',
      'forced-color-adjust',
      'gap',
      'glyph-orientation-horizontal',
      'glyph-orientation-vertical',
      'grid',
      'grid-area',
      'grid-auto-columns',
      'grid-auto-flow',
      'grid-auto-rows',
      'grid-column',
      'grid-column-end',
      'grid-column-start',
      'grid-gap',
      'grid-row',
      'grid-row-end',
      'grid-row-start',
      'grid-template',
      'grid-template-areas',
      'grid-template-columns',
      'grid-template-rows',
      'hanging-punctuation',
      'height',
      'hyphenate-character',
      'hyphenate-limit-chars',
      'hyphens',
      'icon',
      'image-orientation',
      'image-rendering',
      'image-resolution',
      'ime-mode',
      'initial-letter',
      'initial-letter-align',
      'inline-size',
      'inset',
      'inset-area',
      'inset-block',
      'inset-block-end',
      'inset-block-start',
      'inset-inline',
      'inset-inline-end',
      'inset-inline-start',
      'isolation',
      'justify-content',
      'justify-items',
      'justify-self',
      'kerning',
      'left',
      'letter-spacing',
      'lighting-color',
      'line-break',
      'line-height',
      'line-height-step',
      'list-style',
      'list-style-image',
      'list-style-position',
      'list-style-type',
      'margin',
      'margin-block',
      'margin-block-end',
      'margin-block-start',
      'margin-bottom',
      'margin-inline',
      'margin-inline-end',
      'margin-inline-start',
      'margin-left',
      'margin-right',
      'margin-top',
      'margin-trim',
      'marker',
      'marker-end',
      'marker-mid',
      'marker-start',
      'marks',
      'mask',
      'mask-border',
      'mask-border-mode',
      'mask-border-outset',
      'mask-border-repeat',
      'mask-border-slice',
      'mask-border-source',
      'mask-border-width',
      'mask-clip',
      'mask-composite',
      'mask-image',
      'mask-mode',
      'mask-origin',
      'mask-position',
      'mask-repeat',
      'mask-size',
      'mask-type',
      'masonry-auto-flow',
      'math-depth',
      'math-shift',
      'math-style',
      'max-block-size',
      'max-height',
      'max-inline-size',
      'max-width',
      'min-block-size',
      'min-height',
      'min-inline-size',
      'min-width',
      'mix-blend-mode',
      'nav-down',
      'nav-index',
      'nav-left',
      'nav-right',
      'nav-up',
      'none',
      'normal',
      'object-fit',
      'object-position',
      'offset',
      'offset-anchor',
      'offset-distance',
      'offset-path',
      'offset-position',
      'offset-rotate',
      'opacity',
      'order',
      'orphans',
      'outline',
      'outline-color',
      'outline-offset',
      'outline-style',
      'outline-width',
      'overflow',
      'overflow-anchor',
      'overflow-block',
      'overflow-clip-margin',
      'overflow-inline',
      'overflow-wrap',
      'overflow-x',
      'overflow-y',
      'overlay',
      'overscroll-behavior',
      'overscroll-behavior-block',
      'overscroll-behavior-inline',
      'overscroll-behavior-x',
      'overscroll-behavior-y',
      'padding',
      'padding-block',
      'padding-block-end',
      'padding-block-start',
      'padding-bottom',
      'padding-inline',
      'padding-inline-end',
      'padding-inline-start',
      'padding-left',
      'padding-right',
      'padding-top',
      'page',
      'page-break-after',
      'page-break-before',
      'page-break-inside',
      'paint-order',
      'pause',
      'pause-after',
      'pause-before',
      'perspective',
      'perspective-origin',
      'place-content',
      'place-items',
      'place-self',
      'pointer-events',
      'position',
      'position-anchor',
      'position-visibility',
      'print-color-adjust',
      'quotes',
      'r',
      'resize',
      'rest',
      'rest-after',
      'rest-before',
      'right',
      'rotate',
      'row-gap',
      'ruby-align',
      'ruby-position',
      'scale',
      'scroll-behavior',
      'scroll-margin',
      'scroll-margin-block',
      'scroll-margin-block-end',
      'scroll-margin-block-start',
      'scroll-margin-bottom',
      'scroll-margin-inline',
      'scroll-margin-inline-end',
      'scroll-margin-inline-start',
      'scroll-margin-left',
      'scroll-margin-right',
      'scroll-margin-top',
      'scroll-padding',
      'scroll-padding-block',
      'scroll-padding-block-end',
      'scroll-padding-block-start',
      'scroll-padding-bottom',
      'scroll-padding-inline',
      'scroll-padding-inline-end',
      'scroll-padding-inline-start',
      'scroll-padding-left',
      'scroll-padding-right',
      'scroll-padding-top',
      'scroll-snap-align',
      'scroll-snap-stop',
      'scroll-snap-type',
      'scroll-timeline',
      'scroll-timeline-axis',
      'scroll-timeline-name',
      'scrollbar-color',
      'scrollbar-gutter',
      'scrollbar-width',
      'shape-image-threshold',
      'shape-margin',
      'shape-outside',
      'shape-rendering',
      'speak',
      'speak-as',
      'src',
      'stop-color',
      'stop-opacity',
      'stroke',
      'stroke-dasharray',
      'stroke-dashoffset',
      'stroke-linecap',
      'stroke-linejoin',
      'stroke-miterlimit',
      'stroke-opacity',
      'stroke-width',
      'tab-size',
      'table-layout',
      'text-align',
      'text-align-all',
      'text-align-last',
      'text-anchor',
      'text-combine-upright',
      'text-decoration',
      'text-decoration-color',
      'text-decoration-line',
      'text-decoration-skip',
      'text-decoration-skip-ink',
      'text-decoration-style',
      'text-decoration-thickness',
      'text-emphasis',
      'text-emphasis-color',
      'text-emphasis-position',
      'text-emphasis-style',
      'text-indent',
      'text-justify',
      'text-orientation',
      'text-overflow',
      'text-rendering',
      'text-shadow',
      'text-size-adjust',
      'text-transform',
      'text-underline-offset',
      'text-underline-position',
      'text-wrap',
      'text-wrap-mode',
      'text-wrap-style',
      'timeline-scope',
      'top',
      'touch-action',
      'transform',
      'transform-box',
      'transform-origin',
      'transform-style',
      'transition',
      'transition-behavior',
      'transition-delay',
      'transition-duration',
      'transition-property',
      'transition-timing-function',
      'translate',
      'unicode-bidi',
      'user-modify',
      'user-select',
      'vector-effect',
      'vertical-align',
      'view-timeline',
      'view-timeline-axis',
      'view-timeline-inset',
      'view-timeline-name',
      'view-transition-name',
      'visibility',
      'voice-balance',
      'voice-duration',
      'voice-family',
      'voice-pitch',
      'voice-range',
      'voice-rate',
      'voice-stress',
      'voice-volume',
      'white-space',
      'white-space-collapse',
      'widows',
      'width',
      'will-change',
      'word-break',
      'word-spacing',
      'word-wrap',
      'writing-mode',
      'x',
      'y',
      'z-index',
      'zoom',
    ]
      .sort()
      .reverse(),
    S = m.concat(v).sort().reverse();
  function w(b) {
    const N = d(b),
      I = S,
      z = 'and or not only',
      G = '[\\w-]+',
      F = '(' + G + '|@\\{' + G + '\\})',
      $ = [],
      V = [],
      ue = function (st) {
        return { className: 'string', begin: '~?' + st + '.*?' + st };
      },
      ae = function (st, pe, ne) {
        return { className: st, begin: pe, relevance: ne };
      },
      Te = { $pattern: /[a-z-]+/, keyword: z, attribute: g.join(' ') },
      de = { begin: '\\(', end: '\\)', contains: V, keywords: Te, relevance: 0 };
    V.push(
      b.C_LINE_COMMENT_MODE,
      b.C_BLOCK_COMMENT_MODE,
      ue("'"),
      ue('"'),
      N.CSS_NUMBER_MODE,
      { begin: '(url|data-uri)\\(', starts: { className: 'string', end: '[\\)\\n]', excludeEnd: !0 } },
      N.HEXCOLOR,
      de,
      ae('variable', '@@?' + G, 10),
      ae('variable', '@\\{' + G + '\\}'),
      ae('built_in', '~?`[^`]*?`'),
      { className: 'attribute', begin: G + '\\s*:', end: ':', returnBegin: !0, excludeEnd: !0 },
      N.IMPORTANT,
      { beginKeywords: 'and not' },
      N.FUNCTION_DISPATCH
    );
    const be = V.concat({ begin: /\{/, end: /\}/, contains: $ }),
      we = { beginKeywords: 'when', endsWithParent: !0, contains: [{ beginKeywords: 'and not' }].concat(V) },
      ge = {
        begin: F + '\\s*:',
        returnBegin: !0,
        end: /[;}]/,
        relevance: 0,
        contains: [
          { begin: /-(webkit|moz|ms|o)-/ },
          N.CSS_VARIABLE,
          {
            className: 'attribute',
            begin: '\\b(' + x.join('|') + ')\\b',
            end: /(?=:)/,
            starts: { endsWithParent: !0, illegal: '[<=$]', relevance: 0, contains: V },
          },
        ],
      },
      ze = {
        className: 'keyword',
        begin:
          '@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b',
        starts: { end: '[;{}]', keywords: Te, returnEnd: !0, contains: V, relevance: 0 },
      },
      Be = {
        className: 'variable',
        variants: [{ begin: '@' + G + '\\s*:', relevance: 15 }, { begin: '@' + G }],
        starts: { end: '[;}]', returnEnd: !0, contains: be },
      },
      Ae = {
        variants: [
          { begin: '[\\.#:&\\[>]', end: '[;{}]' },
          { begin: F, end: /\{/ },
        ],
        returnBegin: !0,
        returnEnd: !0,
        illegal: `[<='$"]`,
        relevance: 0,
        contains: [
          b.C_LINE_COMMENT_MODE,
          b.C_BLOCK_COMMENT_MODE,
          we,
          ae('keyword', 'all\\b'),
          ae('variable', '@\\{' + G + '\\}'),
          { begin: '\\b(' + p.join('|') + ')\\b', className: 'selector-tag' },
          N.CSS_NUMBER_MODE,
          ae('selector-tag', F, 0),
          ae('selector-id', '#' + F),
          ae('selector-class', '\\.' + F, 0),
          ae('selector-tag', '&', 0),
          N.ATTRIBUTE_SELECTOR_MODE,
          { className: 'selector-pseudo', begin: ':(' + m.join('|') + ')' },
          { className: 'selector-pseudo', begin: ':(:)?(' + v.join('|') + ')' },
          { begin: /\(/, end: /\)/, relevance: 0, contains: be },
          { begin: '!important' },
          N.FUNCTION_DISPATCH,
        ],
      },
      dt = { begin: G + `:(:)?(${I.join('|')})`, returnBegin: !0, contains: [Ae] };
    return (
      $.push(b.C_LINE_COMMENT_MODE, b.C_BLOCK_COMMENT_MODE, ze, Be, dt, ge, Ae, we, N.FUNCTION_DISPATCH),
      { name: 'Less', case_insensitive: !0, illegal: `[=>'/<($"]`, contains: $ }
    );
  }
  return (Np = w), Np;
}
var Tp, ph;
function Ry() {
  if (ph) return Tp;
  ph = 1;
  function d(l) {
    const a = '\\[=*\\[',
      p = '\\]=*\\]',
      g = { begin: a, end: p, contains: ['self'] },
      m = [l.COMMENT('--(?!' + a + ')', '$'), l.COMMENT('--' + a, p, { contains: [g], relevance: 10 })];
    return {
      name: 'Lua',
      aliases: ['pluto'],
      keywords: {
        $pattern: l.UNDERSCORE_IDENT_RE,
        literal: 'true false nil',
        keyword: 'and break do else elseif end for goto if in local not or repeat return then until while',
        built_in:
          '_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove',
      },
      contains: m.concat([
        {
          className: 'function',
          beginKeywords: 'function',
          end: '\\)',
          contains: [
            l.inherit(l.TITLE_MODE, { begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*' }),
            { className: 'params', begin: '\\(', endsWithParent: !0, contains: m },
          ].concat(m),
        },
        l.C_NUMBER_MODE,
        l.APOS_STRING_MODE,
        l.QUOTE_STRING_MODE,
        { className: 'string', begin: a, end: p, contains: [g], relevance: 5 },
      ]),
    };
  }
  return (Tp = d), Tp;
}
var Rp, gh;
function Cy() {
  if (gh) return Rp;
  gh = 1;
  function d(l) {
    const a = {
        className: 'variable',
        variants: [
          { begin: '\\$\\(' + l.UNDERSCORE_IDENT_RE + '\\)', contains: [l.BACKSLASH_ESCAPE] },
          { begin: /\$[@%<?\^\+\*]/ },
        ],
      },
      p = { className: 'string', begin: /"/, end: /"/, contains: [l.BACKSLASH_ESCAPE, a] },
      g = {
        className: 'variable',
        begin: /\$\([\w-]+\s/,
        end: /\)/,
        keywords: {
          built_in:
            'subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value',
        },
        contains: [a, p],
      },
      m = { begin: '^' + l.UNDERSCORE_IDENT_RE + '\\s*(?=[:+?]?=)' },
      v = { className: 'meta', begin: /^\.PHONY:/, end: /$/, keywords: { $pattern: /[\.\w]+/, keyword: '.PHONY' } },
      x = { className: 'section', begin: /^[^\s]+:/, end: /$/, contains: [a] };
    return {
      name: 'Makefile',
      aliases: ['mk', 'mak', 'make'],
      keywords: {
        $pattern: /[\w-]+/,
        keyword:
          'define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath',
      },
      contains: [l.HASH_COMMENT_MODE, a, p, g, m, v, x],
    };
  }
  return (Rp = d), Rp;
}
var Cp, hh;
function Ay() {
  if (hh) return Cp;
  hh = 1;
  function d(l) {
    const a = l.regex,
      p = [
        'abs',
        'accept',
        'alarm',
        'and',
        'atan2',
        'bind',
        'binmode',
        'bless',
        'break',
        'caller',
        'chdir',
        'chmod',
        'chomp',
        'chop',
        'chown',
        'chr',
        'chroot',
        'class',
        'close',
        'closedir',
        'connect',
        'continue',
        'cos',
        'crypt',
        'dbmclose',
        'dbmopen',
        'defined',
        'delete',
        'die',
        'do',
        'dump',
        'each',
        'else',
        'elsif',
        'endgrent',
        'endhostent',
        'endnetent',
        'endprotoent',
        'endpwent',
        'endservent',
        'eof',
        'eval',
        'exec',
        'exists',
        'exit',
        'exp',
        'fcntl',
        'field',
        'fileno',
        'flock',
        'for',
        'foreach',
        'fork',
        'format',
        'formline',
        'getc',
        'getgrent',
        'getgrgid',
        'getgrnam',
        'gethostbyaddr',
        'gethostbyname',
        'gethostent',
        'getlogin',
        'getnetbyaddr',
        'getnetbyname',
        'getnetent',
        'getpeername',
        'getpgrp',
        'getpriority',
        'getprotobyname',
        'getprotobynumber',
        'getprotoent',
        'getpwent',
        'getpwnam',
        'getpwuid',
        'getservbyname',
        'getservbyport',
        'getservent',
        'getsockname',
        'getsockopt',
        'given',
        'glob',
        'gmtime',
        'goto',
        'grep',
        'gt',
        'hex',
        'if',
        'index',
        'int',
        'ioctl',
        'join',
        'keys',
        'kill',
        'last',
        'lc',
        'lcfirst',
        'length',
        'link',
        'listen',
        'local',
        'localtime',
        'log',
        'lstat',
        'lt',
        'ma',
        'map',
        'method',
        'mkdir',
        'msgctl',
        'msgget',
        'msgrcv',
        'msgsnd',
        'my',
        'ne',
        'next',
        'no',
        'not',
        'oct',
        'open',
        'opendir',
        'or',
        'ord',
        'our',
        'pack',
        'package',
        'pipe',
        'pop',
        'pos',
        'print',
        'printf',
        'prototype',
        'push',
        'q|0',
        'qq',
        'quotemeta',
        'qw',
        'qx',
        'rand',
        'read',
        'readdir',
        'readline',
        'readlink',
        'readpipe',
        'recv',
        'redo',
        'ref',
        'rename',
        'require',
        'reset',
        'return',
        'reverse',
        'rewinddir',
        'rindex',
        'rmdir',
        'say',
        'scalar',
        'seek',
        'seekdir',
        'select',
        'semctl',
        'semget',
        'semop',
        'send',
        'setgrent',
        'sethostent',
        'setnetent',
        'setpgrp',
        'setpriority',
        'setprotoent',
        'setpwent',
        'setservent',
        'setsockopt',
        'shift',
        'shmctl',
        'shmget',
        'shmread',
        'shmwrite',
        'shutdown',
        'sin',
        'sleep',
        'socket',
        'socketpair',
        'sort',
        'splice',
        'split',
        'sprintf',
        'sqrt',
        'srand',
        'stat',
        'state',
        'study',
        'sub',
        'substr',
        'symlink',
        'syscall',
        'sysopen',
        'sysread',
        'sysseek',
        'system',
        'syswrite',
        'tell',
        'telldir',
        'tie',
        'tied',
        'time',
        'times',
        'tr',
        'truncate',
        'uc',
        'ucfirst',
        'umask',
        'undef',
        'unless',
        'unlink',
        'unpack',
        'unshift',
        'untie',
        'until',
        'use',
        'utime',
        'values',
        'vec',
        'wait',
        'waitpid',
        'wantarray',
        'warn',
        'when',
        'while',
        'write',
        'x|0',
        'xor',
        'y|0',
      ],
      g = /[dualxmsipngr]{0,12}/,
      m = { $pattern: /[\w.]+/, keyword: p.join(' ') },
      v = { className: 'subst', begin: '[$@]\\{', end: '\\}', keywords: m },
      x = { begin: /->\{/, end: /\}/ },
      S = { scope: 'attr', match: /\s+:\s*\w+(\s*\(.*?\))?/ },
      w = {
        scope: 'variable',
        variants: [
          { begin: /\$\d/ },
          { begin: a.concat(/[$%@](?!")(\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/, '(?![A-Za-z])(?![@$%])') },
          { begin: /[$%@](?!")[^\s\w{=]|\$=/, relevance: 0 },
        ],
        contains: [S],
      },
      b = {
        className: 'number',
        variants: [
          { match: /0?\.[0-9][0-9_]+\b/ },
          { match: /\bv?(0|[1-9][0-9_]*(\.[0-9_]+)?|[1-9][0-9_]*)\b/ },
          { match: /\b0[0-7][0-7_]*\b/ },
          { match: /\b0x[0-9a-fA-F][0-9a-fA-F_]*\b/ },
          { match: /\b0b[0-1][0-1_]*\b/ },
        ],
        relevance: 0,
      },
      N = [l.BACKSLASH_ESCAPE, v, w],
      I = [/!/, /\//, /\|/, /\?/, /'/, /"/, /#/],
      z = ($, V, ue = '\\1') => {
        const ae = ue === '\\1' ? ue : a.concat(ue, V);
        return a.concat(a.concat('(?:', $, ')'), V, /(?:\\.|[^\\\/])*?/, ae, /(?:\\.|[^\\\/])*?/, ue, g);
      },
      G = ($, V, ue) => a.concat(a.concat('(?:', $, ')'), V, /(?:\\.|[^\\\/])*?/, ue, g),
      F = [
        w,
        l.HASH_COMMENT_MODE,
        l.COMMENT(/^=\w/, /=cut/, { endsWithParent: !0 }),
        x,
        {
          className: 'string',
          contains: N,
          variants: [
            { begin: 'q[qwxr]?\\s*\\(', end: '\\)', relevance: 5 },
            { begin: 'q[qwxr]?\\s*\\[', end: '\\]', relevance: 5 },
            { begin: 'q[qwxr]?\\s*\\{', end: '\\}', relevance: 5 },
            { begin: 'q[qwxr]?\\s*\\|', end: '\\|', relevance: 5 },
            { begin: 'q[qwxr]?\\s*<', end: '>', relevance: 5 },
            { begin: 'qw\\s+q', end: 'q', relevance: 5 },
            { begin: "'", end: "'", contains: [l.BACKSLASH_ESCAPE] },
            { begin: '"', end: '"' },
            { begin: '`', end: '`', contains: [l.BACKSLASH_ESCAPE] },
            { begin: /\{\w+\}/, relevance: 0 },
            { begin: '-?\\w+\\s*=>', relevance: 0 },
          ],
        },
        b,
        {
          begin: '(\\/\\/|' + l.RE_STARTERS_RE + '|\\b(split|return|print|reverse|grep)\\b)\\s*',
          keywords: 'split return print reverse grep',
          relevance: 0,
          contains: [
            l.HASH_COMMENT_MODE,
            {
              className: 'regexp',
              variants: [
                { begin: z('s|tr|y', a.either(...I, { capture: !0 })) },
                { begin: z('s|tr|y', '\\(', '\\)') },
                { begin: z('s|tr|y', '\\[', '\\]') },
                { begin: z('s|tr|y', '\\{', '\\}') },
              ],
              relevance: 2,
            },
            {
              className: 'regexp',
              variants: [
                { begin: /(m|qr)\/\//, relevance: 0 },
                { begin: G('(?:m|qr)?', /\//, /\//) },
                { begin: G('m|qr', a.either(...I, { capture: !0 }), /\1/) },
                { begin: G('m|qr', /\(/, /\)/) },
                { begin: G('m|qr', /\[/, /\]/) },
                { begin: G('m|qr', /\{/, /\}/) },
              ],
            },
          ],
        },
        {
          className: 'function',
          beginKeywords: 'sub method',
          end: '(\\s*\\(.*?\\))?[;{]',
          excludeEnd: !0,
          relevance: 5,
          contains: [l.TITLE_MODE, S],
        },
        {
          className: 'class',
          beginKeywords: 'class',
          end: '[;{]',
          excludeEnd: !0,
          relevance: 5,
          contains: [l.TITLE_MODE, S, b],
        },
        { begin: '-\\w\\b', relevance: 0 },
        {
          begin: '^__DATA__$',
          end: '^__END__$',
          subLanguage: 'mojolicious',
          contains: [{ begin: '^@@.*', end: '$', className: 'comment' }],
        },
      ];
    return (v.contains = F), (x.contains = F), { name: 'Perl', aliases: ['pl', 'pm'], keywords: m, contains: F };
  }
  return (Cp = d), Cp;
}
var Ap, mh;
function Oy() {
  if (mh) return Ap;
  mh = 1;
  function d(l) {
    const a = { className: 'built_in', begin: '\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+' },
      p = /[a-zA-Z@][a-zA-Z0-9_]*/,
      S = {
        'variable.language': ['this', 'super'],
        $pattern: p,
        keyword: [
          'while',
          'export',
          'sizeof',
          'typedef',
          'const',
          'struct',
          'for',
          'union',
          'volatile',
          'static',
          'mutable',
          'if',
          'do',
          'return',
          'goto',
          'enum',
          'else',
          'break',
          'extern',
          'asm',
          'case',
          'default',
          'register',
          'explicit',
          'typename',
          'switch',
          'continue',
          'inline',
          'readonly',
          'assign',
          'readwrite',
          'self',
          '@synchronized',
          'id',
          'typeof',
          'nonatomic',
          'IBOutlet',
          'IBAction',
          'strong',
          'weak',
          'copy',
          'in',
          'out',
          'inout',
          'bycopy',
          'byref',
          'oneway',
          '__strong',
          '__weak',
          '__block',
          '__autoreleasing',
          '@private',
          '@protected',
          '@public',
          '@try',
          '@property',
          '@end',
          '@throw',
          '@catch',
          '@finally',
          '@autoreleasepool',
          '@synthesize',
          '@dynamic',
          '@selector',
          '@optional',
          '@required',
          '@encode',
          '@package',
          '@import',
          '@defs',
          '@compatibility_alias',
          '__bridge',
          '__bridge_transfer',
          '__bridge_retained',
          '__bridge_retain',
          '__covariant',
          '__contravariant',
          '__kindof',
          '_Nonnull',
          '_Nullable',
          '_Null_unspecified',
          '__FUNCTION__',
          '__PRETTY_FUNCTION__',
          '__attribute__',
          'getter',
          'setter',
          'retain',
          'unsafe_unretained',
          'nonnull',
          'nullable',
          'null_unspecified',
          'null_resettable',
          'class',
          'instancetype',
          'NS_DESIGNATED_INITIALIZER',
          'NS_UNAVAILABLE',
          'NS_REQUIRES_SUPER',
          'NS_RETURNS_INNER_POINTER',
          'NS_INLINE',
          'NS_AVAILABLE',
          'NS_DEPRECATED',
          'NS_ENUM',
          'NS_OPTIONS',
          'NS_SWIFT_UNAVAILABLE',
          'NS_ASSUME_NONNULL_BEGIN',
          'NS_ASSUME_NONNULL_END',
          'NS_REFINED_FOR_SWIFT',
          'NS_SWIFT_NAME',
          'NS_SWIFT_NOTHROW',
          'NS_DURING',
          'NS_HANDLER',
          'NS_ENDHANDLER',
          'NS_VALUERETURN',
          'NS_VOIDRETURN',
        ],
        literal: ['false', 'true', 'FALSE', 'TRUE', 'nil', 'YES', 'NO', 'NULL'],
        built_in: ['dispatch_once_t', 'dispatch_queue_t', 'dispatch_sync', 'dispatch_async', 'dispatch_once'],
        type: [
          'int',
          'float',
          'char',
          'unsigned',
          'signed',
          'short',
          'long',
          'double',
          'wchar_t',
          'unichar',
          'void',
          'bool',
          'BOOL',
          'id|0',
          '_Bool',
        ],
      },
      w = { $pattern: p, keyword: ['@interface', '@class', '@protocol', '@implementation'] };
    return {
      name: 'Objective-C',
      aliases: ['mm', 'objc', 'obj-c', 'obj-c++', 'objective-c++'],
      keywords: S,
      illegal: '</',
      contains: [
        a,
        l.C_LINE_COMMENT_MODE,
        l.C_BLOCK_COMMENT_MODE,
        l.C_NUMBER_MODE,
        l.QUOTE_STRING_MODE,
        l.APOS_STRING_MODE,
        { className: 'string', variants: [{ begin: '@"', end: '"', illegal: '\\n', contains: [l.BACKSLASH_ESCAPE] }] },
        {
          className: 'meta',
          begin: /#\s*[a-z]+\b/,
          end: /$/,
          keywords: { keyword: 'if else elif endif define undef warning error line pragma ifdef ifndef include' },
          contains: [
            { begin: /\\\n/, relevance: 0 },
            l.inherit(l.QUOTE_STRING_MODE, { className: 'string' }),
            { className: 'string', begin: /<.*?>/, end: /$/, illegal: '\\n' },
            l.C_LINE_COMMENT_MODE,
            l.C_BLOCK_COMMENT_MODE,
          ],
        },
        {
          className: 'class',
          begin: '(' + w.keyword.join('|') + ')\\b',
          end: /(\{|$)/,
          excludeEnd: !0,
          keywords: w,
          contains: [l.UNDERSCORE_TITLE_MODE],
        },
        { begin: '\\.' + l.UNDERSCORE_IDENT_RE, relevance: 0 },
      ],
    };
  }
  return (Ap = d), Ap;
}
var Op, _h;
function My() {
  if (_h) return Op;
  _h = 1;
  function d(l) {
    const a = l.regex,
      p = /(?![A-Za-z0-9])(?![$])/,
      g = a.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, p),
      m = a.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/, p),
      v = a.concat(/[A-Z]+/, p),
      x = { scope: 'variable', match: '\\$+' + g },
      S = {
        scope: 'meta',
        variants: [
          { begin: /<\?php/, relevance: 10 },
          { begin: /<\?=/ },
          { begin: /<\?/, relevance: 0.1 },
          { begin: /\?>/ },
        ],
      },
      w = { scope: 'subst', variants: [{ begin: /\$\w+/ }, { begin: /\{\$/, end: /\}/ }] },
      b = l.inherit(l.APOS_STRING_MODE, { illegal: null }),
      N = l.inherit(l.QUOTE_STRING_MODE, { illegal: null, contains: l.QUOTE_STRING_MODE.contains.concat(w) }),
      I = {
        begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
        end: /[ \t]*(\w+)\b/,
        contains: l.QUOTE_STRING_MODE.contains.concat(w),
        'on:begin': (ne, j) => {
          j.data._beginMatch = ne[1] || ne[2];
        },
        'on:end': (ne, j) => {
          j.data._beginMatch !== ne[1] && j.ignoreMatch();
        },
      },
      z = l.END_SAME_AS_BEGIN({ begin: /<<<[ \t]*'(\w+)'\n/, end: /[ \t]*(\w+)\b/ }),
      G = `[ 	
]`,
      F = { scope: 'string', variants: [N, b, I, z] },
      $ = {
        scope: 'number',
        variants: [
          { begin: '\\b0[bB][01]+(?:_[01]+)*\\b' },
          { begin: '\\b0[oO][0-7]+(?:_[0-7]+)*\\b' },
          { begin: '\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b' },
          { begin: '(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?' },
        ],
        relevance: 0,
      },
      V = ['false', 'null', 'true'],
      ue = [
        '__CLASS__',
        '__DIR__',
        '__FILE__',
        '__FUNCTION__',
        '__COMPILER_HALT_OFFSET__',
        '__LINE__',
        '__METHOD__',
        '__NAMESPACE__',
        '__TRAIT__',
        'die',
        'echo',
        'exit',
        'include',
        'include_once',
        'print',
        'require',
        'require_once',
        'array',
        'abstract',
        'and',
        'as',
        'binary',
        'bool',
        'boolean',
        'break',
        'callable',
        'case',
        'catch',
        'class',
        'clone',
        'const',
        'continue',
        'declare',
        'default',
        'do',
        'double',
        'else',
        'elseif',
        'empty',
        'enddeclare',
        'endfor',
        'endforeach',
        'endif',
        'endswitch',
        'endwhile',
        'enum',
        'eval',
        'extends',
        'final',
        'finally',
        'float',
        'for',
        'foreach',
        'from',
        'global',
        'goto',
        'if',
        'implements',
        'instanceof',
        'insteadof',
        'int',
        'integer',
        'interface',
        'isset',
        'iterable',
        'list',
        'match|0',
        'mixed',
        'new',
        'never',
        'object',
        'or',
        'private',
        'protected',
        'public',
        'readonly',
        'real',
        'return',
        'string',
        'switch',
        'throw',
        'trait',
        'try',
        'unset',
        'use',
        'var',
        'void',
        'while',
        'xor',
        'yield',
      ],
      ae = [
        'Error|0',
        'AppendIterator',
        'ArgumentCountError',
        'ArithmeticError',
        'ArrayIterator',
        'ArrayObject',
        'AssertionError',
        'BadFunctionCallException',
        'BadMethodCallException',
        'CachingIterator',
        'CallbackFilterIterator',
        'CompileError',
        'Countable',
        'DirectoryIterator',
        'DivisionByZeroError',
        'DomainException',
        'EmptyIterator',
        'ErrorException',
        'Exception',
        'FilesystemIterator',
        'FilterIterator',
        'GlobIterator',
        'InfiniteIterator',
        'InvalidArgumentException',
        'IteratorIterator',
        'LengthException',
        'LimitIterator',
        'LogicException',
        'MultipleIterator',
        'NoRewindIterator',
        'OutOfBoundsException',
        'OutOfRangeException',
        'OuterIterator',
        'OverflowException',
        'ParentIterator',
        'ParseError',
        'RangeException',
        'RecursiveArrayIterator',
        'RecursiveCachingIterator',
        'RecursiveCallbackFilterIterator',
        'RecursiveDirectoryIterator',
        'RecursiveFilterIterator',
        'RecursiveIterator',
        'RecursiveIteratorIterator',
        'RecursiveRegexIterator',
        'RecursiveTreeIterator',
        'RegexIterator',
        'RuntimeException',
        'SeekableIterator',
        'SplDoublyLinkedList',
        'SplFileInfo',
        'SplFileObject',
        'SplFixedArray',
        'SplHeap',
        'SplMaxHeap',
        'SplMinHeap',
        'SplObjectStorage',
        'SplObserver',
        'SplPriorityQueue',
        'SplQueue',
        'SplStack',
        'SplSubject',
        'SplTempFileObject',
        'TypeError',
        'UnderflowException',
        'UnexpectedValueException',
        'UnhandledMatchError',
        'ArrayAccess',
        'BackedEnum',
        'Closure',
        'Fiber',
        'Generator',
        'Iterator',
        'IteratorAggregate',
        'Serializable',
        'Stringable',
        'Throwable',
        'Traversable',
        'UnitEnum',
        'WeakReference',
        'WeakMap',
        'Directory',
        '__PHP_Incomplete_Class',
        'parent',
        'php_user_filter',
        'self',
        'static',
        'stdClass',
      ],
      de = {
        keyword: ue,
        literal: ((ne) => {
          const j = [];
          return (
            ne.forEach((re) => {
              j.push(re), re.toLowerCase() === re ? j.push(re.toUpperCase()) : j.push(re.toLowerCase());
            }),
            j
          );
        })(V),
        built_in: ae,
      },
      be = (ne) => ne.map((j) => j.replace(/\|\d+$/, '')),
      we = {
        variants: [
          {
            match: [/new/, a.concat(G, '+'), a.concat('(?!', be(ae).join('\\b|'), '\\b)'), m],
            scope: { 1: 'keyword', 4: 'title.class' },
          },
        ],
      },
      ge = a.concat(g, '\\b(?!\\()'),
      ze = {
        variants: [
          { match: [a.concat(/::/, a.lookahead(/(?!class\b)/)), ge], scope: { 2: 'variable.constant' } },
          { match: [/::/, /class/], scope: { 2: 'variable.language' } },
          {
            match: [m, a.concat(/::/, a.lookahead(/(?!class\b)/)), ge],
            scope: { 1: 'title.class', 3: 'variable.constant' },
          },
          { match: [m, a.concat('::', a.lookahead(/(?!class\b)/))], scope: { 1: 'title.class' } },
          { match: [m, /::/, /class/], scope: { 1: 'title.class', 3: 'variable.language' } },
        ],
      },
      Be = { scope: 'attr', match: a.concat(g, a.lookahead(':'), a.lookahead(/(?!::)/)) },
      Ae = {
        relevance: 0,
        begin: /\(/,
        end: /\)/,
        keywords: de,
        contains: [Be, x, ze, l.C_BLOCK_COMMENT_MODE, F, $, we],
      },
      dt = {
        relevance: 0,
        match: [
          /\b/,
          a.concat('(?!fn\\b|function\\b|', be(ue).join('\\b|'), '|', be(ae).join('\\b|'), '\\b)'),
          g,
          a.concat(G, '*'),
          a.lookahead(/(?=\()/),
        ],
        scope: { 3: 'title.function.invoke' },
        contains: [Ae],
      };
    Ae.contains.push(dt);
    const st = [Be, ze, l.C_BLOCK_COMMENT_MODE, F, $, we],
      pe = {
        begin: a.concat(/#\[\s*\\?/, a.either(m, v)),
        beginScope: 'meta',
        end: /]/,
        endScope: 'meta',
        keywords: { literal: V, keyword: ['new', 'array'] },
        contains: [
          { begin: /\[/, end: /]/, keywords: { literal: V, keyword: ['new', 'array'] }, contains: ['self', ...st] },
          ...st,
          { scope: 'meta', variants: [{ match: m }, { match: v }] },
        ],
      };
    return {
      case_insensitive: !1,
      keywords: de,
      contains: [
        pe,
        l.HASH_COMMENT_MODE,
        l.COMMENT('//', '$'),
        l.COMMENT('/\\*', '\\*/', { contains: [{ scope: 'doctag', match: '@[A-Za-z]+' }] }),
        {
          match: /__halt_compiler\(\);/,
          keywords: '__halt_compiler',
          starts: {
            scope: 'comment',
            end: l.MATCH_NOTHING_RE,
            contains: [{ match: /\?>/, scope: 'meta', endsParent: !0 }],
          },
        },
        S,
        { scope: 'variable.language', match: /\$this\b/ },
        x,
        dt,
        ze,
        { match: [/const/, /\s/, g], scope: { 1: 'keyword', 3: 'variable.constant' } },
        we,
        {
          scope: 'function',
          relevance: 0,
          beginKeywords: 'fn function',
          end: /[;{]/,
          excludeEnd: !0,
          illegal: '[$%\\[]',
          contains: [
            { beginKeywords: 'use' },
            l.UNDERSCORE_TITLE_MODE,
            { begin: '=>', endsParent: !0 },
            {
              scope: 'params',
              begin: '\\(',
              end: '\\)',
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: de,
              contains: ['self', pe, x, ze, l.C_BLOCK_COMMENT_MODE, F, $],
            },
          ],
        },
        {
          scope: 'class',
          variants: [
            { beginKeywords: 'enum', illegal: /[($"]/ },
            { beginKeywords: 'class interface trait', illegal: /[:($"]/ },
          ],
          relevance: 0,
          end: /\{/,
          excludeEnd: !0,
          contains: [{ beginKeywords: 'extends implements' }, l.UNDERSCORE_TITLE_MODE],
        },
        {
          beginKeywords: 'namespace',
          relevance: 0,
          end: ';',
          illegal: /[.']/,
          contains: [l.inherit(l.UNDERSCORE_TITLE_MODE, { scope: 'title.class' })],
        },
        {
          beginKeywords: 'use',
          relevance: 0,
          end: ';',
          contains: [{ match: /\b(as|const|function)\b/, scope: 'keyword' }, l.UNDERSCORE_TITLE_MODE],
        },
        F,
        $,
      ],
    };
  }
  return (Op = d), Op;
}
var Mp, vh;
function Iy() {
  if (vh) return Mp;
  vh = 1;
  function d(l) {
    return {
      name: 'PHP template',
      subLanguage: 'xml',
      contains: [
        {
          begin: /<\?(php|=)?/,
          end: /\?>/,
          subLanguage: 'php',
          contains: [
            { begin: '/\\*', end: '\\*/', skip: !0 },
            { begin: 'b"', end: '"', skip: !0 },
            { begin: "b'", end: "'", skip: !0 },
            l.inherit(l.APOS_STRING_MODE, { illegal: null, className: null, contains: null, skip: !0 }),
            l.inherit(l.QUOTE_STRING_MODE, { illegal: null, className: null, contains: null, skip: !0 }),
          ],
        },
      ],
    };
  }
  return (Mp = d), Mp;
}
var Ip, yh;
function Ly() {
  if (yh) return Ip;
  yh = 1;
  function d(l) {
    return { name: 'Plain text', aliases: ['text', 'txt'], disableAutodetect: !0 };
  }
  return (Ip = d), Ip;
}
var Lp, Eh;
function Dy() {
  if (Eh) return Lp;
  Eh = 1;
  function d(l) {
    const a = l.regex,
      p = new RegExp('[\\p{XID_Start}_]\\p{XID_Continue}*', 'u'),
      g = [
        'and',
        'as',
        'assert',
        'async',
        'await',
        'break',
        'case',
        'class',
        'continue',
        'def',
        'del',
        'elif',
        'else',
        'except',
        'finally',
        'for',
        'from',
        'global',
        'if',
        'import',
        'in',
        'is',
        'lambda',
        'match',
        'nonlocal|10',
        'not',
        'or',
        'pass',
        'raise',
        'return',
        'try',
        'while',
        'with',
        'yield',
      ],
      S = {
        $pattern: /[A-Za-z]\w+|__\w+__/,
        keyword: g,
        built_in: [
          '__import__',
          'abs',
          'all',
          'any',
          'ascii',
          'bin',
          'bool',
          'breakpoint',
          'bytearray',
          'bytes',
          'callable',
          'chr',
          'classmethod',
          'compile',
          'complex',
          'delattr',
          'dict',
          'dir',
          'divmod',
          'enumerate',
          'eval',
          'exec',
          'filter',
          'float',
          'format',
          'frozenset',
          'getattr',
          'globals',
          'hasattr',
          'hash',
          'help',
          'hex',
          'id',
          'input',
          'int',
          'isinstance',
          'issubclass',
          'iter',
          'len',
          'list',
          'locals',
          'map',
          'max',
          'memoryview',
          'min',
          'next',
          'object',
          'oct',
          'open',
          'ord',
          'pow',
          'print',
          'property',
          'range',
          'repr',
          'reversed',
          'round',
          'set',
          'setattr',
          'slice',
          'sorted',
          'staticmethod',
          'str',
          'sum',
          'super',
          'tuple',
          'type',
          'vars',
          'zip',
        ],
        literal: ['__debug__', 'Ellipsis', 'False', 'None', 'NotImplemented', 'True'],
        type: [
          'Any',
          'Callable',
          'Coroutine',
          'Dict',
          'List',
          'Literal',
          'Generic',
          'Optional',
          'Sequence',
          'Set',
          'Tuple',
          'Type',
          'Union',
        ],
      },
      w = { className: 'meta', begin: /^(>>>|\.\.\.) / },
      b = { className: 'subst', begin: /\{/, end: /\}/, keywords: S, illegal: /#/ },
      N = { begin: /\{\{/, relevance: 0 },
      I = {
        className: 'string',
        contains: [l.BACKSLASH_ESCAPE],
        variants: [
          {
            begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
            end: /'''/,
            contains: [l.BACKSLASH_ESCAPE, w],
            relevance: 10,
          },
          {
            begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
            end: /"""/,
            contains: [l.BACKSLASH_ESCAPE, w],
            relevance: 10,
          },
          { begin: /([fF][rR]|[rR][fF]|[fF])'''/, end: /'''/, contains: [l.BACKSLASH_ESCAPE, w, N, b] },
          { begin: /([fF][rR]|[rR][fF]|[fF])"""/, end: /"""/, contains: [l.BACKSLASH_ESCAPE, w, N, b] },
          { begin: /([uU]|[rR])'/, end: /'/, relevance: 10 },
          { begin: /([uU]|[rR])"/, end: /"/, relevance: 10 },
          { begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/ },
          { begin: /([bB]|[bB][rR]|[rR][bB])"/, end: /"/ },
          { begin: /([fF][rR]|[rR][fF]|[fF])'/, end: /'/, contains: [l.BACKSLASH_ESCAPE, N, b] },
          { begin: /([fF][rR]|[rR][fF]|[fF])"/, end: /"/, contains: [l.BACKSLASH_ESCAPE, N, b] },
          l.APOS_STRING_MODE,
          l.QUOTE_STRING_MODE,
        ],
      },
      z = '[0-9](_?[0-9])*',
      G = `(\\b(${z}))?\\.(${z})|\\b(${z})\\.`,
      F = `\\b|${g.join('|')}`,
      $ = {
        className: 'number',
        relevance: 0,
        variants: [
          { begin: `(\\b(${z})|(${G}))[eE][+-]?(${z})[jJ]?(?=${F})` },
          { begin: `(${G})[jJ]?` },
          { begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${F})` },
          { begin: `\\b0[bB](_?[01])+[lL]?(?=${F})` },
          { begin: `\\b0[oO](_?[0-7])+[lL]?(?=${F})` },
          { begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${F})` },
          { begin: `\\b(${z})[jJ](?=${F})` },
        ],
      },
      V = {
        className: 'comment',
        begin: a.lookahead(/# type:/),
        end: /$/,
        keywords: S,
        contains: [{ begin: /# type:/ }, { begin: /#/, end: /\b\B/, endsWithParent: !0 }],
      },
      ue = {
        className: 'params',
        variants: [
          { className: '', begin: /\(\s*\)/, skip: !0 },
          {
            begin: /\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: S,
            contains: ['self', w, $, I, l.HASH_COMMENT_MODE],
          },
        ],
      };
    return (
      (b.contains = [I, $, w]),
      {
        name: 'Python',
        aliases: ['py', 'gyp', 'ipython'],
        unicodeRegex: !0,
        keywords: S,
        illegal: /(<\/|\?)|=>/,
        contains: [
          w,
          $,
          { scope: 'variable.language', match: /\bself\b/ },
          { beginKeywords: 'if', relevance: 0 },
          { match: /\bor\b/, scope: 'keyword' },
          I,
          V,
          l.HASH_COMMENT_MODE,
          { match: [/\bdef/, /\s+/, p], scope: { 1: 'keyword', 3: 'title.function' }, contains: [ue] },
          {
            variants: [{ match: [/\bclass/, /\s+/, p, /\s*/, /\(\s*/, p, /\s*\)/] }, { match: [/\bclass/, /\s+/, p] }],
            scope: { 1: 'keyword', 3: 'title.class', 6: 'title.class.inherited' },
          },
          { className: 'meta', begin: /^[\t ]*@/, end: /(?=#)|$/, contains: [$, ue, I] },
        ],
      }
    );
  }
  return (Lp = d), Lp;
}
var Dp, bh;
function Py() {
  if (bh) return Dp;
  bh = 1;
  function d(l) {
    return {
      aliases: ['pycon'],
      contains: [
        {
          className: 'meta.prompt',
          starts: { end: / |$/, starts: { end: '$', subLanguage: 'python' } },
          variants: [{ begin: /^>>>(?=[ ]|$)/ }, { begin: /^\.\.\.(?=[ ]|$)/ }],
        },
      ],
    };
  }
  return (Dp = d), Dp;
}
var Pp, wh;
function By() {
  if (wh) return Pp;
  wh = 1;
  function d(l) {
    const a = l.regex,
      p = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,
      g = a.either(
        /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
        /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
        /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/
      ),
      m = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,
      v = a.either(/[()]/, /[{}]/, /\[\[/, /[[\]]/, /\\/, /,/);
    return {
      name: 'R',
      keywords: {
        $pattern: p,
        keyword: 'function if in break next repeat else for while',
        literal: 'NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10',
        built_in:
          'LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm',
      },
      contains: [
        l.COMMENT(/#'/, /$/, {
          contains: [
            {
              scope: 'doctag',
              match: /@examples/,
              starts: { end: a.lookahead(a.either(/\n^#'\s*(?=@[a-zA-Z]+)/, /\n^(?!#')/)), endsParent: !0 },
            },
            {
              scope: 'doctag',
              begin: '@param',
              end: /$/,
              contains: [
                { scope: 'variable', variants: [{ match: p }, { match: /`(?:\\.|[^`\\])+`/ }], endsParent: !0 },
              ],
            },
            { scope: 'doctag', match: /@[a-zA-Z]+/ },
            { scope: 'keyword', match: /\\[a-zA-Z]+/ },
          ],
        }),
        l.HASH_COMMENT_MODE,
        {
          scope: 'string',
          contains: [l.BACKSLASH_ESCAPE],
          variants: [
            l.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\(/, end: /\)(-*)"/ }),
            l.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\{/, end: /\}(-*)"/ }),
            l.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\[/, end: /\](-*)"/ }),
            l.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\(/, end: /\)(-*)'/ }),
            l.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\{/, end: /\}(-*)'/ }),
            l.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\[/, end: /\](-*)'/ }),
            { begin: '"', end: '"', relevance: 0 },
            { begin: "'", end: "'", relevance: 0 },
          ],
        },
        {
          relevance: 0,
          variants: [
            { scope: { 1: 'operator', 2: 'number' }, match: [m, g] },
            { scope: { 1: 'operator', 2: 'number' }, match: [/%[^%]*%/, g] },
            { scope: { 1: 'punctuation', 2: 'number' }, match: [v, g] },
            { scope: { 2: 'number' }, match: [/[^a-zA-Z0-9._]|^/, g] },
          ],
        },
        { scope: { 3: 'operator' }, match: [p, /\s+/, /<-/, /\s+/] },
        { scope: 'operator', relevance: 0, variants: [{ match: m }, { match: /%[^%]*%/ }] },
        { scope: 'punctuation', relevance: 0, match: v },
        { begin: '`', end: '`', contains: [{ begin: /\\./ }] },
      ],
    };
  }
  return (Pp = d), Pp;
}
var Bp, xh;
function Uy() {
  if (xh) return Bp;
  xh = 1;
  function d(l) {
    const a = l.regex,
      p = /(r#)?/,
      g = a.concat(p, l.UNDERSCORE_IDENT_RE),
      m = a.concat(p, l.IDENT_RE),
      v = {
        className: 'title.function.invoke',
        relevance: 0,
        begin: a.concat(/\b/, /(?!let|for|while|if|else|match\b)/, m, a.lookahead(/\s*\(/)),
      },
      x = '([ui](8|16|32|64|128|size)|f(32|64))?',
      S = [
        'abstract',
        'as',
        'async',
        'await',
        'become',
        'box',
        'break',
        'const',
        'continue',
        'crate',
        'do',
        'dyn',
        'else',
        'enum',
        'extern',
        'false',
        'final',
        'fn',
        'for',
        'if',
        'impl',
        'in',
        'let',
        'loop',
        'macro',
        'match',
        'mod',
        'move',
        'mut',
        'override',
        'priv',
        'pub',
        'ref',
        'return',
        'self',
        'Self',
        'static',
        'struct',
        'super',
        'trait',
        'true',
        'try',
        'type',
        'typeof',
        'union',
        'unsafe',
        'unsized',
        'use',
        'virtual',
        'where',
        'while',
        'yield',
      ],
      w = ['true', 'false', 'Some', 'None', 'Ok', 'Err'],
      b = [
        'drop ',
        'Copy',
        'Send',
        'Sized',
        'Sync',
        'Drop',
        'Fn',
        'FnMut',
        'FnOnce',
        'ToOwned',
        'Clone',
        'Debug',
        'PartialEq',
        'PartialOrd',
        'Eq',
        'Ord',
        'AsRef',
        'AsMut',
        'Into',
        'From',
        'Default',
        'Iterator',
        'Extend',
        'IntoIterator',
        'DoubleEndedIterator',
        'ExactSizeIterator',
        'SliceConcatExt',
        'ToString',
        'assert!',
        'assert_eq!',
        'bitflags!',
        'bytes!',
        'cfg!',
        'col!',
        'concat!',
        'concat_idents!',
        'debug_assert!',
        'debug_assert_eq!',
        'env!',
        'eprintln!',
        'panic!',
        'file!',
        'format!',
        'format_args!',
        'include_bytes!',
        'include_str!',
        'line!',
        'local_data_key!',
        'module_path!',
        'option_env!',
        'print!',
        'println!',
        'select!',
        'stringify!',
        'try!',
        'unimplemented!',
        'unreachable!',
        'vec!',
        'write!',
        'writeln!',
        'macro_rules!',
        'assert_ne!',
        'debug_assert_ne!',
      ],
      N = [
        'i8',
        'i16',
        'i32',
        'i64',
        'i128',
        'isize',
        'u8',
        'u16',
        'u32',
        'u64',
        'u128',
        'usize',
        'f32',
        'f64',
        'str',
        'char',
        'bool',
        'Box',
        'Option',
        'Result',
        'String',
        'Vec',
      ];
    return {
      name: 'Rust',
      aliases: ['rs'],
      keywords: { $pattern: l.IDENT_RE + '!?', type: N, keyword: S, literal: w, built_in: b },
      illegal: '</',
      contains: [
        l.C_LINE_COMMENT_MODE,
        l.COMMENT('/\\*', '\\*/', { contains: ['self'] }),
        l.inherit(l.QUOTE_STRING_MODE, { begin: /b?"/, illegal: null }),
        { className: 'symbol', begin: /'[a-zA-Z_][a-zA-Z0-9_]*(?!')/ },
        {
          scope: 'string',
          variants: [
            { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
            { begin: /b?'/, end: /'/, contains: [{ scope: 'char.escape', match: /\\('|\w|x\w{2}|u\w{4}|U\w{8})/ }] },
          ],
        },
        {
          className: 'number',
          variants: [
            { begin: '\\b0b([01_]+)' + x },
            { begin: '\\b0o([0-7_]+)' + x },
            { begin: '\\b0x([A-Fa-f0-9_]+)' + x },
            { begin: '\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)' + x },
          ],
          relevance: 0,
        },
        { begin: [/fn/, /\s+/, g], className: { 1: 'keyword', 3: 'title.function' } },
        {
          className: 'meta',
          begin: '#!?\\[',
          end: '\\]',
          contains: [{ className: 'string', begin: /"/, end: /"/, contains: [l.BACKSLASH_ESCAPE] }],
        },
        { begin: [/let/, /\s+/, /(?:mut\s+)?/, g], className: { 1: 'keyword', 3: 'keyword', 4: 'variable' } },
        { begin: [/for/, /\s+/, g, /\s+/, /in/], className: { 1: 'keyword', 3: 'variable', 5: 'keyword' } },
        { begin: [/type/, /\s+/, g], className: { 1: 'keyword', 3: 'title.class' } },
        { begin: [/(?:trait|enum|struct|union|impl|for)/, /\s+/, g], className: { 1: 'keyword', 3: 'title.class' } },
        { begin: l.IDENT_RE + '::', keywords: { keyword: 'Self', built_in: b, type: N } },
        { className: 'punctuation', begin: '->' },
        v,
      ],
    };
  }
  return (Bp = d), Bp;
}
var Up, Sh;
function zy() {
  if (Sh) return Up;
  Sh = 1;
  const d = (w) => ({
      IMPORTANT: { scope: 'meta', begin: '!important' },
      BLOCK_COMMENT: w.C_BLOCK_COMMENT_MODE,
      HEXCOLOR: { scope: 'number', begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/ },
      FUNCTION_DISPATCH: { className: 'built_in', begin: /[\w-]+(?=\()/ },
      ATTRIBUTE_SELECTOR_MODE: {
        scope: 'selector-attr',
        begin: /\[/,
        end: /\]/,
        illegal: '$',
        contains: [w.APOS_STRING_MODE, w.QUOTE_STRING_MODE],
      },
      CSS_NUMBER_MODE: {
        scope: 'number',
        begin:
          w.NUMBER_RE +
          '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
        relevance: 0,
      },
      CSS_VARIABLE: { className: 'attr', begin: /--[A-Za-z_][A-Za-z0-9_-]*/ },
    }),
    l = [
      'a',
      'abbr',
      'address',
      'article',
      'aside',
      'audio',
      'b',
      'blockquote',
      'body',
      'button',
      'canvas',
      'caption',
      'cite',
      'code',
      'dd',
      'del',
      'details',
      'dfn',
      'div',
      'dl',
      'dt',
      'em',
      'fieldset',
      'figcaption',
      'figure',
      'footer',
      'form',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'header',
      'hgroup',
      'html',
      'i',
      'iframe',
      'img',
      'input',
      'ins',
      'kbd',
      'label',
      'legend',
      'li',
      'main',
      'mark',
      'menu',
      'nav',
      'object',
      'ol',
      'optgroup',
      'option',
      'p',
      'picture',
      'q',
      'quote',
      'samp',
      'section',
      'select',
      'source',
      'span',
      'strong',
      'summary',
      'sup',
      'table',
      'tbody',
      'td',
      'textarea',
      'tfoot',
      'th',
      'thead',
      'time',
      'tr',
      'ul',
      'var',
      'video',
    ],
    a = [
      'defs',
      'g',
      'marker',
      'mask',
      'pattern',
      'svg',
      'switch',
      'symbol',
      'feBlend',
      'feColorMatrix',
      'feComponentTransfer',
      'feComposite',
      'feConvolveMatrix',
      'feDiffuseLighting',
      'feDisplacementMap',
      'feFlood',
      'feGaussianBlur',
      'feImage',
      'feMerge',
      'feMorphology',
      'feOffset',
      'feSpecularLighting',
      'feTile',
      'feTurbulence',
      'linearGradient',
      'radialGradient',
      'stop',
      'circle',
      'ellipse',
      'image',
      'line',
      'path',
      'polygon',
      'polyline',
      'rect',
      'text',
      'use',
      'textPath',
      'tspan',
      'foreignObject',
      'clipPath',
    ],
    p = [...l, ...a],
    g = [
      'any-hover',
      'any-pointer',
      'aspect-ratio',
      'color',
      'color-gamut',
      'color-index',
      'device-aspect-ratio',
      'device-height',
      'device-width',
      'display-mode',
      'forced-colors',
      'grid',
      'height',
      'hover',
      'inverted-colors',
      'monochrome',
      'orientation',
      'overflow-block',
      'overflow-inline',
      'pointer',
      'prefers-color-scheme',
      'prefers-contrast',
      'prefers-reduced-motion',
      'prefers-reduced-transparency',
      'resolution',
      'scan',
      'scripting',
      'update',
      'width',
      'min-width',
      'max-width',
      'min-height',
      'max-height',
    ]
      .sort()
      .reverse(),
    m = [
      'active',
      'any-link',
      'blank',
      'checked',
      'current',
      'default',
      'defined',
      'dir',
      'disabled',
      'drop',
      'empty',
      'enabled',
      'first',
      'first-child',
      'first-of-type',
      'fullscreen',
      'future',
      'focus',
      'focus-visible',
      'focus-within',
      'has',
      'host',
      'host-context',
      'hover',
      'indeterminate',
      'in-range',
      'invalid',
      'is',
      'lang',
      'last-child',
      'last-of-type',
      'left',
      'link',
      'local-link',
      'not',
      'nth-child',
      'nth-col',
      'nth-last-child',
      'nth-last-col',
      'nth-last-of-type',
      'nth-of-type',
      'only-child',
      'only-of-type',
      'optional',
      'out-of-range',
      'past',
      'placeholder-shown',
      'read-only',
      'read-write',
      'required',
      'right',
      'root',
      'scope',
      'target',
      'target-within',
      'user-invalid',
      'valid',
      'visited',
      'where',
    ]
      .sort()
      .reverse(),
    v = [
      'after',
      'backdrop',
      'before',
      'cue',
      'cue-region',
      'first-letter',
      'first-line',
      'grammar-error',
      'marker',
      'part',
      'placeholder',
      'selection',
      'slotted',
      'spelling-error',
    ]
      .sort()
      .reverse(),
    x = [
      'accent-color',
      'align-content',
      'align-items',
      'align-self',
      'alignment-baseline',
      'all',
      'anchor-name',
      'animation',
      'animation-composition',
      'animation-delay',
      'animation-direction',
      'animation-duration',
      'animation-fill-mode',
      'animation-iteration-count',
      'animation-name',
      'animation-play-state',
      'animation-range',
      'animation-range-end',
      'animation-range-start',
      'animation-timeline',
      'animation-timing-function',
      'appearance',
      'aspect-ratio',
      'backdrop-filter',
      'backface-visibility',
      'background',
      'background-attachment',
      'background-blend-mode',
      'background-clip',
      'background-color',
      'background-image',
      'background-origin',
      'background-position',
      'background-position-x',
      'background-position-y',
      'background-repeat',
      'background-size',
      'baseline-shift',
      'block-size',
      'border',
      'border-block',
      'border-block-color',
      'border-block-end',
      'border-block-end-color',
      'border-block-end-style',
      'border-block-end-width',
      'border-block-start',
      'border-block-start-color',
      'border-block-start-style',
      'border-block-start-width',
      'border-block-style',
      'border-block-width',
      'border-bottom',
      'border-bottom-color',
      'border-bottom-left-radius',
      'border-bottom-right-radius',
      'border-bottom-style',
      'border-bottom-width',
      'border-collapse',
      'border-color',
      'border-end-end-radius',
      'border-end-start-radius',
      'border-image',
      'border-image-outset',
      'border-image-repeat',
      'border-image-slice',
      'border-image-source',
      'border-image-width',
      'border-inline',
      'border-inline-color',
      'border-inline-end',
      'border-inline-end-color',
      'border-inline-end-style',
      'border-inline-end-width',
      'border-inline-start',
      'border-inline-start-color',
      'border-inline-start-style',
      'border-inline-start-width',
      'border-inline-style',
      'border-inline-width',
      'border-left',
      'border-left-color',
      'border-left-style',
      'border-left-width',
      'border-radius',
      'border-right',
      'border-right-color',
      'border-right-style',
      'border-right-width',
      'border-spacing',
      'border-start-end-radius',
      'border-start-start-radius',
      'border-style',
      'border-top',
      'border-top-color',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-top-style',
      'border-top-width',
      'border-width',
      'bottom',
      'box-align',
      'box-decoration-break',
      'box-direction',
      'box-flex',
      'box-flex-group',
      'box-lines',
      'box-ordinal-group',
      'box-orient',
      'box-pack',
      'box-shadow',
      'box-sizing',
      'break-after',
      'break-before',
      'break-inside',
      'caption-side',
      'caret-color',
      'clear',
      'clip',
      'clip-path',
      'clip-rule',
      'color',
      'color-interpolation',
      'color-interpolation-filters',
      'color-profile',
      'color-rendering',
      'color-scheme',
      'column-count',
      'column-fill',
      'column-gap',
      'column-rule',
      'column-rule-color',
      'column-rule-style',
      'column-rule-width',
      'column-span',
      'column-width',
      'columns',
      'contain',
      'contain-intrinsic-block-size',
      'contain-intrinsic-height',
      'contain-intrinsic-inline-size',
      'contain-intrinsic-size',
      'contain-intrinsic-width',
      'container',
      'container-name',
      'container-type',
      'content',
      'content-visibility',
      'counter-increment',
      'counter-reset',
      'counter-set',
      'cue',
      'cue-after',
      'cue-before',
      'cursor',
      'cx',
      'cy',
      'direction',
      'display',
      'dominant-baseline',
      'empty-cells',
      'enable-background',
      'field-sizing',
      'fill',
      'fill-opacity',
      'fill-rule',
      'filter',
      'flex',
      'flex-basis',
      'flex-direction',
      'flex-flow',
      'flex-grow',
      'flex-shrink',
      'flex-wrap',
      'float',
      'flood-color',
      'flood-opacity',
      'flow',
      'font',
      'font-display',
      'font-family',
      'font-feature-settings',
      'font-kerning',
      'font-language-override',
      'font-optical-sizing',
      'font-palette',
      'font-size',
      'font-size-adjust',
      'font-smooth',
      'font-smoothing',
      'font-stretch',
      'font-style',
      'font-synthesis',
      'font-synthesis-position',
      'font-synthesis-small-caps',
      'font-synthesis-style',
      'font-synthesis-weight',
      'font-variant',
      'font-variant-alternates',
      'font-variant-caps',
      'font-variant-east-asian',
      'font-variant-emoji',
      'font-variant-ligatures',
      'font-variant-numeric',
      'font-variant-position',
      'font-variation-settings',
      'font-weight',
      'forced-color-adjust',
      'gap',
      'glyph-orientation-horizontal',
      'glyph-orientation-vertical',
      'grid',
      'grid-area',
      'grid-auto-columns',
      'grid-auto-flow',
      'grid-auto-rows',
      'grid-column',
      'grid-column-end',
      'grid-column-start',
      'grid-gap',
      'grid-row',
      'grid-row-end',
      'grid-row-start',
      'grid-template',
      'grid-template-areas',
      'grid-template-columns',
      'grid-template-rows',
      'hanging-punctuation',
      'height',
      'hyphenate-character',
      'hyphenate-limit-chars',
      'hyphens',
      'icon',
      'image-orientation',
      'image-rendering',
      'image-resolution',
      'ime-mode',
      'initial-letter',
      'initial-letter-align',
      'inline-size',
      'inset',
      'inset-area',
      'inset-block',
      'inset-block-end',
      'inset-block-start',
      'inset-inline',
      'inset-inline-end',
      'inset-inline-start',
      'isolation',
      'justify-content',
      'justify-items',
      'justify-self',
      'kerning',
      'left',
      'letter-spacing',
      'lighting-color',
      'line-break',
      'line-height',
      'line-height-step',
      'list-style',
      'list-style-image',
      'list-style-position',
      'list-style-type',
      'margin',
      'margin-block',
      'margin-block-end',
      'margin-block-start',
      'margin-bottom',
      'margin-inline',
      'margin-inline-end',
      'margin-inline-start',
      'margin-left',
      'margin-right',
      'margin-top',
      'margin-trim',
      'marker',
      'marker-end',
      'marker-mid',
      'marker-start',
      'marks',
      'mask',
      'mask-border',
      'mask-border-mode',
      'mask-border-outset',
      'mask-border-repeat',
      'mask-border-slice',
      'mask-border-source',
      'mask-border-width',
      'mask-clip',
      'mask-composite',
      'mask-image',
      'mask-mode',
      'mask-origin',
      'mask-position',
      'mask-repeat',
      'mask-size',
      'mask-type',
      'masonry-auto-flow',
      'math-depth',
      'math-shift',
      'math-style',
      'max-block-size',
      'max-height',
      'max-inline-size',
      'max-width',
      'min-block-size',
      'min-height',
      'min-inline-size',
      'min-width',
      'mix-blend-mode',
      'nav-down',
      'nav-index',
      'nav-left',
      'nav-right',
      'nav-up',
      'none',
      'normal',
      'object-fit',
      'object-position',
      'offset',
      'offset-anchor',
      'offset-distance',
      'offset-path',
      'offset-position',
      'offset-rotate',
      'opacity',
      'order',
      'orphans',
      'outline',
      'outline-color',
      'outline-offset',
      'outline-style',
      'outline-width',
      'overflow',
      'overflow-anchor',
      'overflow-block',
      'overflow-clip-margin',
      'overflow-inline',
      'overflow-wrap',
      'overflow-x',
      'overflow-y',
      'overlay',
      'overscroll-behavior',
      'overscroll-behavior-block',
      'overscroll-behavior-inline',
      'overscroll-behavior-x',
      'overscroll-behavior-y',
      'padding',
      'padding-block',
      'padding-block-end',
      'padding-block-start',
      'padding-bottom',
      'padding-inline',
      'padding-inline-end',
      'padding-inline-start',
      'padding-left',
      'padding-right',
      'padding-top',
      'page',
      'page-break-after',
      'page-break-before',
      'page-break-inside',
      'paint-order',
      'pause',
      'pause-after',
      'pause-before',
      'perspective',
      'perspective-origin',
      'place-content',
      'place-items',
      'place-self',
      'pointer-events',
      'position',
      'position-anchor',
      'position-visibility',
      'print-color-adjust',
      'quotes',
      'r',
      'resize',
      'rest',
      'rest-after',
      'rest-before',
      'right',
      'rotate',
      'row-gap',
      'ruby-align',
      'ruby-position',
      'scale',
      'scroll-behavior',
      'scroll-margin',
      'scroll-margin-block',
      'scroll-margin-block-end',
      'scroll-margin-block-start',
      'scroll-margin-bottom',
      'scroll-margin-inline',
      'scroll-margin-inline-end',
      'scroll-margin-inline-start',
      'scroll-margin-left',
      'scroll-margin-right',
      'scroll-margin-top',
      'scroll-padding',
      'scroll-padding-block',
      'scroll-padding-block-end',
      'scroll-padding-block-start',
      'scroll-padding-bottom',
      'scroll-padding-inline',
      'scroll-padding-inline-end',
      'scroll-padding-inline-start',
      'scroll-padding-left',
      'scroll-padding-right',
      'scroll-padding-top',
      'scroll-snap-align',
      'scroll-snap-stop',
      'scroll-snap-type',
      'scroll-timeline',
      'scroll-timeline-axis',
      'scroll-timeline-name',
      'scrollbar-color',
      'scrollbar-gutter',
      'scrollbar-width',
      'shape-image-threshold',
      'shape-margin',
      'shape-outside',
      'shape-rendering',
      'speak',
      'speak-as',
      'src',
      'stop-color',
      'stop-opacity',
      'stroke',
      'stroke-dasharray',
      'stroke-dashoffset',
      'stroke-linecap',
      'stroke-linejoin',
      'stroke-miterlimit',
      'stroke-opacity',
      'stroke-width',
      'tab-size',
      'table-layout',
      'text-align',
      'text-align-all',
      'text-align-last',
      'text-anchor',
      'text-combine-upright',
      'text-decoration',
      'text-decoration-color',
      'text-decoration-line',
      'text-decoration-skip',
      'text-decoration-skip-ink',
      'text-decoration-style',
      'text-decoration-thickness',
      'text-emphasis',
      'text-emphasis-color',
      'text-emphasis-position',
      'text-emphasis-style',
      'text-indent',
      'text-justify',
      'text-orientation',
      'text-overflow',
      'text-rendering',
      'text-shadow',
      'text-size-adjust',
      'text-transform',
      'text-underline-offset',
      'text-underline-position',
      'text-wrap',
      'text-wrap-mode',
      'text-wrap-style',
      'timeline-scope',
      'top',
      'touch-action',
      'transform',
      'transform-box',
      'transform-origin',
      'transform-style',
      'transition',
      'transition-behavior',
      'transition-delay',
      'transition-duration',
      'transition-property',
      'transition-timing-function',
      'translate',
      'unicode-bidi',
      'user-modify',
      'user-select',
      'vector-effect',
      'vertical-align',
      'view-timeline',
      'view-timeline-axis',
      'view-timeline-inset',
      'view-timeline-name',
      'view-transition-name',
      'visibility',
      'voice-balance',
      'voice-duration',
      'voice-family',
      'voice-pitch',
      'voice-range',
      'voice-rate',
      'voice-stress',
      'voice-volume',
      'white-space',
      'white-space-collapse',
      'widows',
      'width',
      'will-change',
      'word-break',
      'word-spacing',
      'word-wrap',
      'writing-mode',
      'x',
      'y',
      'z-index',
      'zoom',
    ]
      .sort()
      .reverse();
  function S(w) {
    const b = d(w),
      N = v,
      I = m,
      z = '@[a-z-]+',
      G = 'and or not only',
      $ = { className: 'variable', begin: '(\\$' + '[a-zA-Z-][a-zA-Z0-9_-]*' + ')\\b', relevance: 0 };
    return {
      name: 'SCSS',
      case_insensitive: !0,
      illegal: "[=/|']",
      contains: [
        w.C_LINE_COMMENT_MODE,
        w.C_BLOCK_COMMENT_MODE,
        b.CSS_NUMBER_MODE,
        { className: 'selector-id', begin: '#[A-Za-z0-9_-]+', relevance: 0 },
        { className: 'selector-class', begin: '\\.[A-Za-z0-9_-]+', relevance: 0 },
        b.ATTRIBUTE_SELECTOR_MODE,
        { className: 'selector-tag', begin: '\\b(' + p.join('|') + ')\\b', relevance: 0 },
        { className: 'selector-pseudo', begin: ':(' + I.join('|') + ')' },
        { className: 'selector-pseudo', begin: ':(:)?(' + N.join('|') + ')' },
        $,
        { begin: /\(/, end: /\)/, contains: [b.CSS_NUMBER_MODE] },
        b.CSS_VARIABLE,
        { className: 'attribute', begin: '\\b(' + x.join('|') + ')\\b' },
        {
          begin:
            '\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b',
        },
        {
          begin: /:/,
          end: /[;}{]/,
          relevance: 0,
          contains: [
            b.BLOCK_COMMENT,
            $,
            b.HEXCOLOR,
            b.CSS_NUMBER_MODE,
            w.QUOTE_STRING_MODE,
            w.APOS_STRING_MODE,
            b.IMPORTANT,
            b.FUNCTION_DISPATCH,
          ],
        },
        { begin: '@(page|font-face)', keywords: { $pattern: z, keyword: '@page @font-face' } },
        {
          begin: '@',
          end: '[{;]',
          returnBegin: !0,
          keywords: { $pattern: /[a-z-]+/, keyword: G, attribute: g.join(' ') },
          contains: [
            { begin: z, className: 'keyword' },
            { begin: /[a-z-]+(?=:)/, className: 'attribute' },
            $,
            w.QUOTE_STRING_MODE,
            w.APOS_STRING_MODE,
            b.HEXCOLOR,
            b.CSS_NUMBER_MODE,
          ],
        },
        b.FUNCTION_DISPATCH,
      ],
    };
  }
  return (Up = S), Up;
}
var zp, kh;
function $y() {
  if (kh) return zp;
  kh = 1;
  function d(l) {
    return {
      name: 'Shell Session',
      aliases: ['console', 'shellsession'],
      contains: [
        {
          className: 'meta.prompt',
          begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
          starts: { end: /[^\\](?=\s*$)/, subLanguage: 'bash' },
        },
      ],
    };
  }
  return (zp = d), zp;
}
var $p, Nh;
function Fy() {
  if (Nh) return $p;
  Nh = 1;
  function d(l) {
    const a = l.regex,
      p = l.COMMENT('--', '$'),
      g = { scope: 'string', variants: [{ begin: /'/, end: /'/, contains: [{ match: /''/ }] }] },
      m = { begin: /"/, end: /"/, contains: [{ match: /""/ }] },
      v = ['true', 'false', 'unknown'],
      x = ['double precision', 'large object', 'with timezone', 'without timezone'],
      S = [
        'bigint',
        'binary',
        'blob',
        'boolean',
        'char',
        'character',
        'clob',
        'date',
        'dec',
        'decfloat',
        'decimal',
        'float',
        'int',
        'integer',
        'interval',
        'nchar',
        'nclob',
        'national',
        'numeric',
        'real',
        'row',
        'smallint',
        'time',
        'timestamp',
        'varchar',
        'varying',
        'varbinary',
      ],
      w = ['add', 'asc', 'collation', 'desc', 'final', 'first', 'last', 'view'],
      b = [
        'abs',
        'acos',
        'all',
        'allocate',
        'alter',
        'and',
        'any',
        'are',
        'array',
        'array_agg',
        'array_max_cardinality',
        'as',
        'asensitive',
        'asin',
        'asymmetric',
        'at',
        'atan',
        'atomic',
        'authorization',
        'avg',
        'begin',
        'begin_frame',
        'begin_partition',
        'between',
        'bigint',
        'binary',
        'blob',
        'boolean',
        'both',
        'by',
        'call',
        'called',
        'cardinality',
        'cascaded',
        'case',
        'cast',
        'ceil',
        'ceiling',
        'char',
        'char_length',
        'character',
        'character_length',
        'check',
        'classifier',
        'clob',
        'close',
        'coalesce',
        'collate',
        'collect',
        'column',
        'commit',
        'condition',
        'connect',
        'constraint',
        'contains',
        'convert',
        'copy',
        'corr',
        'corresponding',
        'cos',
        'cosh',
        'count',
        'covar_pop',
        'covar_samp',
        'create',
        'cross',
        'cube',
        'cume_dist',
        'current',
        'current_catalog',
        'current_date',
        'current_default_transform_group',
        'current_path',
        'current_role',
        'current_row',
        'current_schema',
        'current_time',
        'current_timestamp',
        'current_path',
        'current_role',
        'current_transform_group_for_type',
        'current_user',
        'cursor',
        'cycle',
        'date',
        'day',
        'deallocate',
        'dec',
        'decimal',
        'decfloat',
        'declare',
        'default',
        'define',
        'delete',
        'dense_rank',
        'deref',
        'describe',
        'deterministic',
        'disconnect',
        'distinct',
        'double',
        'drop',
        'dynamic',
        'each',
        'element',
        'else',
        'empty',
        'end',
        'end_frame',
        'end_partition',
        'end-exec',
        'equals',
        'escape',
        'every',
        'except',
        'exec',
        'execute',
        'exists',
        'exp',
        'external',
        'extract',
        'false',
        'fetch',
        'filter',
        'first_value',
        'float',
        'floor',
        'for',
        'foreign',
        'frame_row',
        'free',
        'from',
        'full',
        'function',
        'fusion',
        'get',
        'global',
        'grant',
        'group',
        'grouping',
        'groups',
        'having',
        'hold',
        'hour',
        'identity',
        'in',
        'indicator',
        'initial',
        'inner',
        'inout',
        'insensitive',
        'insert',
        'int',
        'integer',
        'intersect',
        'intersection',
        'interval',
        'into',
        'is',
        'join',
        'json_array',
        'json_arrayagg',
        'json_exists',
        'json_object',
        'json_objectagg',
        'json_query',
        'json_table',
        'json_table_primitive',
        'json_value',
        'lag',
        'language',
        'large',
        'last_value',
        'lateral',
        'lead',
        'leading',
        'left',
        'like',
        'like_regex',
        'listagg',
        'ln',
        'local',
        'localtime',
        'localtimestamp',
        'log',
        'log10',
        'lower',
        'match',
        'match_number',
        'match_recognize',
        'matches',
        'max',
        'member',
        'merge',
        'method',
        'min',
        'minute',
        'mod',
        'modifies',
        'module',
        'month',
        'multiset',
        'national',
        'natural',
        'nchar',
        'nclob',
        'new',
        'no',
        'none',
        'normalize',
        'not',
        'nth_value',
        'ntile',
        'null',
        'nullif',
        'numeric',
        'octet_length',
        'occurrences_regex',
        'of',
        'offset',
        'old',
        'omit',
        'on',
        'one',
        'only',
        'open',
        'or',
        'order',
        'out',
        'outer',
        'over',
        'overlaps',
        'overlay',
        'parameter',
        'partition',
        'pattern',
        'per',
        'percent',
        'percent_rank',
        'percentile_cont',
        'percentile_disc',
        'period',
        'portion',
        'position',
        'position_regex',
        'power',
        'precedes',
        'precision',
        'prepare',
        'primary',
        'procedure',
        'ptf',
        'range',
        'rank',
        'reads',
        'real',
        'recursive',
        'ref',
        'references',
        'referencing',
        'regr_avgx',
        'regr_avgy',
        'regr_count',
        'regr_intercept',
        'regr_r2',
        'regr_slope',
        'regr_sxx',
        'regr_sxy',
        'regr_syy',
        'release',
        'result',
        'return',
        'returns',
        'revoke',
        'right',
        'rollback',
        'rollup',
        'row',
        'row_number',
        'rows',
        'running',
        'savepoint',
        'scope',
        'scroll',
        'search',
        'second',
        'seek',
        'select',
        'sensitive',
        'session_user',
        'set',
        'show',
        'similar',
        'sin',
        'sinh',
        'skip',
        'smallint',
        'some',
        'specific',
        'specifictype',
        'sql',
        'sqlexception',
        'sqlstate',
        'sqlwarning',
        'sqrt',
        'start',
        'static',
        'stddev_pop',
        'stddev_samp',
        'submultiset',
        'subset',
        'substring',
        'substring_regex',
        'succeeds',
        'sum',
        'symmetric',
        'system',
        'system_time',
        'system_user',
        'table',
        'tablesample',
        'tan',
        'tanh',
        'then',
        'time',
        'timestamp',
        'timezone_hour',
        'timezone_minute',
        'to',
        'trailing',
        'translate',
        'translate_regex',
        'translation',
        'treat',
        'trigger',
        'trim',
        'trim_array',
        'true',
        'truncate',
        'uescape',
        'union',
        'unique',
        'unknown',
        'unnest',
        'update',
        'upper',
        'user',
        'using',
        'value',
        'values',
        'value_of',
        'var_pop',
        'var_samp',
        'varbinary',
        'varchar',
        'varying',
        'versioning',
        'when',
        'whenever',
        'where',
        'width_bucket',
        'window',
        'with',
        'within',
        'without',
        'year',
      ],
      N = [
        'abs',
        'acos',
        'array_agg',
        'asin',
        'atan',
        'avg',
        'cast',
        'ceil',
        'ceiling',
        'coalesce',
        'corr',
        'cos',
        'cosh',
        'count',
        'covar_pop',
        'covar_samp',
        'cume_dist',
        'dense_rank',
        'deref',
        'element',
        'exp',
        'extract',
        'first_value',
        'floor',
        'json_array',
        'json_arrayagg',
        'json_exists',
        'json_object',
        'json_objectagg',
        'json_query',
        'json_table',
        'json_table_primitive',
        'json_value',
        'lag',
        'last_value',
        'lead',
        'listagg',
        'ln',
        'log',
        'log10',
        'lower',
        'max',
        'min',
        'mod',
        'nth_value',
        'ntile',
        'nullif',
        'percent_rank',
        'percentile_cont',
        'percentile_disc',
        'position',
        'position_regex',
        'power',
        'rank',
        'regr_avgx',
        'regr_avgy',
        'regr_count',
        'regr_intercept',
        'regr_r2',
        'regr_slope',
        'regr_sxx',
        'regr_sxy',
        'regr_syy',
        'row_number',
        'sin',
        'sinh',
        'sqrt',
        'stddev_pop',
        'stddev_samp',
        'substring',
        'substring_regex',
        'sum',
        'tan',
        'tanh',
        'translate',
        'translate_regex',
        'treat',
        'trim',
        'trim_array',
        'unnest',
        'upper',
        'value_of',
        'var_pop',
        'var_samp',
        'width_bucket',
      ],
      I = [
        'current_catalog',
        'current_date',
        'current_default_transform_group',
        'current_path',
        'current_role',
        'current_schema',
        'current_transform_group_for_type',
        'current_user',
        'session_user',
        'system_time',
        'system_user',
        'current_time',
        'localtime',
        'current_timestamp',
        'localtimestamp',
      ],
      z = [
        'create table',
        'insert into',
        'primary key',
        'foreign key',
        'not null',
        'alter table',
        'add constraint',
        'grouping sets',
        'on overflow',
        'character set',
        'respect nulls',
        'ignore nulls',
        'nulls first',
        'nulls last',
        'depth first',
        'breadth first',
      ],
      G = N,
      F = [...b, ...w].filter((be) => !N.includes(be)),
      $ = { scope: 'variable', match: /@[a-z0-9][a-z0-9_]*/ },
      V = { scope: 'operator', match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/, relevance: 0 },
      ue = { match: a.concat(/\b/, a.either(...G), /\s*\(/), relevance: 0, keywords: { built_in: G } };
    function ae(be) {
      return a.concat(/\b/, a.either(...be.map((we) => we.replace(/\s+/, '\\s+'))), /\b/);
    }
    const Te = { scope: 'keyword', match: ae(z), relevance: 0 };
    function de(be, { exceptions: we, when: ge } = {}) {
      const ze = ge;
      return (we = we || []), be.map((Be) => (Be.match(/\|\d+$/) || we.includes(Be) ? Be : ze(Be) ? `${Be}|0` : Be));
    }
    return {
      name: 'SQL',
      case_insensitive: !0,
      illegal: /[{}]|<\//,
      keywords: {
        $pattern: /\b[\w\.]+/,
        keyword: de(F, { when: (be) => be.length < 3 }),
        literal: v,
        type: S,
        built_in: I,
      },
      contains: [{ scope: 'type', match: ae(x) }, Te, ue, $, g, m, l.C_NUMBER_MODE, l.C_BLOCK_COMMENT_MODE, p, V],
    };
  }
  return ($p = d), $p;
}
var Fp, Th;
function Hy() {
  if (Th) return Fp;
  Th = 1;
  function d(ge) {
    return ge ? (typeof ge == 'string' ? ge : ge.source) : null;
  }
  function l(ge) {
    return a('(?=', ge, ')');
  }
  function a(...ge) {
    return ge.map((Be) => d(Be)).join('');
  }
  function p(ge) {
    const ze = ge[ge.length - 1];
    return typeof ze == 'object' && ze.constructor === Object ? (ge.splice(ge.length - 1, 1), ze) : {};
  }
  function g(...ge) {
    return '(' + (p(ge).capture ? '' : '?:') + ge.map((Ae) => d(Ae)).join('|') + ')';
  }
  const m = (ge) => a(/\b/, ge, /\w$/.test(ge) ? /\b/ : /\B/),
    v = ['Protocol', 'Type'].map(m),
    x = ['init', 'self'].map(m),
    S = ['Any', 'Self'],
    w = [
      'actor',
      'any',
      'associatedtype',
      'async',
      'await',
      /as\?/,
      /as!/,
      'as',
      'borrowing',
      'break',
      'case',
      'catch',
      'class',
      'consume',
      'consuming',
      'continue',
      'convenience',
      'copy',
      'default',
      'defer',
      'deinit',
      'didSet',
      'distributed',
      'do',
      'dynamic',
      'each',
      'else',
      'enum',
      'extension',
      'fallthrough',
      /fileprivate\(set\)/,
      'fileprivate',
      'final',
      'for',
      'func',
      'get',
      'guard',
      'if',
      'import',
      'indirect',
      'infix',
      /init\?/,
      /init!/,
      'inout',
      /internal\(set\)/,
      'internal',
      'in',
      'is',
      'isolated',
      'nonisolated',
      'lazy',
      'let',
      'macro',
      'mutating',
      'nonmutating',
      /open\(set\)/,
      'open',
      'operator',
      'optional',
      'override',
      'package',
      'postfix',
      'precedencegroup',
      'prefix',
      /private\(set\)/,
      'private',
      'protocol',
      /public\(set\)/,
      'public',
      'repeat',
      'required',
      'rethrows',
      'return',
      'set',
      'some',
      'static',
      'struct',
      'subscript',
      'super',
      'switch',
      'throws',
      'throw',
      /try\?/,
      /try!/,
      'try',
      'typealias',
      /unowned\(safe\)/,
      /unowned\(unsafe\)/,
      'unowned',
      'var',
      'weak',
      'where',
      'while',
      'willSet',
    ],
    b = ['false', 'nil', 'true'],
    N = ['assignment', 'associativity', 'higherThan', 'left', 'lowerThan', 'none', 'right'],
    I = [
      '#colorLiteral',
      '#column',
      '#dsohandle',
      '#else',
      '#elseif',
      '#endif',
      '#error',
      '#file',
      '#fileID',
      '#fileLiteral',
      '#filePath',
      '#function',
      '#if',
      '#imageLiteral',
      '#keyPath',
      '#line',
      '#selector',
      '#sourceLocation',
      '#warning',
    ],
    z = [
      'abs',
      'all',
      'any',
      'assert',
      'assertionFailure',
      'debugPrint',
      'dump',
      'fatalError',
      'getVaList',
      'isKnownUniquelyReferenced',
      'max',
      'min',
      'numericCast',
      'pointwiseMax',
      'pointwiseMin',
      'precondition',
      'preconditionFailure',
      'print',
      'readLine',
      'repeatElement',
      'sequence',
      'stride',
      'swap',
      'swift_unboxFromSwiftValueWithType',
      'transcode',
      'type',
      'unsafeBitCast',
      'unsafeDowncast',
      'withExtendedLifetime',
      'withUnsafeMutablePointer',
      'withUnsafePointer',
      'withVaList',
      'withoutActuallyEscaping',
      'zip',
    ],
    G = g(
      /[/=\-+!*%<>&|^~?]/,
      /[\u00A1-\u00A7]/,
      /[\u00A9\u00AB]/,
      /[\u00AC\u00AE]/,
      /[\u00B0\u00B1]/,
      /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
      /[\u2016-\u2017]/,
      /[\u2020-\u2027]/,
      /[\u2030-\u203E]/,
      /[\u2041-\u2053]/,
      /[\u2055-\u205E]/,
      /[\u2190-\u23FF]/,
      /[\u2500-\u2775]/,
      /[\u2794-\u2BFF]/,
      /[\u2E00-\u2E7F]/,
      /[\u3001-\u3003]/,
      /[\u3008-\u3020]/,
      /[\u3030]/
    ),
    F = g(G, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/),
    $ = a(G, F, '*'),
    V = g(
      /[a-zA-Z_]/,
      /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
      /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
      /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
      /[\u1E00-\u1FFF]/,
      /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
      /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
      /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
      /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
      /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
      /[\uFE47-\uFEFE\uFF00-\uFFFD]/
    ),
    ue = g(V, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),
    ae = a(V, ue, '*'),
    Te = a(/[A-Z]/, ue, '*'),
    de = [
      'attached',
      'autoclosure',
      a(/convention\(/, g('swift', 'block', 'c'), /\)/),
      'discardableResult',
      'dynamicCallable',
      'dynamicMemberLookup',
      'escaping',
      'freestanding',
      'frozen',
      'GKInspectable',
      'IBAction',
      'IBDesignable',
      'IBInspectable',
      'IBOutlet',
      'IBSegueAction',
      'inlinable',
      'main',
      'nonobjc',
      'NSApplicationMain',
      'NSCopying',
      'NSManaged',
      a(/objc\(/, ae, /\)/),
      'objc',
      'objcMembers',
      'propertyWrapper',
      'requires_stored_property_inits',
      'resultBuilder',
      'Sendable',
      'testable',
      'UIApplicationMain',
      'unchecked',
      'unknown',
      'usableFromInline',
      'warn_unqualified_access',
    ],
    be = [
      'iOS',
      'iOSApplicationExtension',
      'macOS',
      'macOSApplicationExtension',
      'macCatalyst',
      'macCatalystApplicationExtension',
      'watchOS',
      'watchOSApplicationExtension',
      'tvOS',
      'tvOSApplicationExtension',
      'swift',
    ];
  function we(ge) {
    const ze = { match: /\s+/, relevance: 0 },
      Be = ge.COMMENT('/\\*', '\\*/', { contains: ['self'] }),
      Ae = [ge.C_LINE_COMMENT_MODE, Be],
      dt = { match: [/\./, g(...v, ...x)], className: { 2: 'keyword' } },
      st = { match: a(/\./, g(...w)), relevance: 0 },
      pe = w.filter((pt) => typeof pt == 'string').concat(['_|0']),
      ne = w
        .filter((pt) => typeof pt != 'string')
        .concat(S)
        .map(m),
      j = { variants: [{ className: 'keyword', match: g(...ne, ...x) }] },
      re = { $pattern: g(/\b\w+/, /#\w+/), keyword: pe.concat(I), literal: b },
      B = [dt, st, j],
      ie = { match: a(/\./, g(...z)), relevance: 0 },
      Y = { className: 'built_in', match: a(/\b/, g(...z), /(?=\()/) },
      C = [ie, Y],
      K = { match: /->/, relevance: 0 },
      xe = { className: 'operator', relevance: 0, variants: [{ match: $ }, { match: `\\.(\\.|${F})+` }] },
      Se = [K, xe],
      Me = '([0-9]_*)+',
      $e = '([0-9a-fA-F]_*)+',
      Pe = {
        className: 'number',
        relevance: 0,
        variants: [
          { match: `\\b(${Me})(\\.(${Me}))?([eE][+-]?(${Me}))?\\b` },
          { match: `\\b0x(${$e})(\\.(${$e}))?([pP][+-]?(${Me}))?\\b` },
          { match: /\b0o([0-7]_*)+\b/ },
          { match: /\b0b([01]_*)+\b/ },
        ],
      },
      Ce = (pt = '') => ({
        className: 'subst',
        variants: [{ match: a(/\\/, pt, /[0\\tnr"']/) }, { match: a(/\\/, pt, /u\{[0-9a-fA-F]{1,8}\}/) }],
      }),
      Fe = (pt = '') => ({ className: 'subst', match: a(/\\/, pt, /[\t ]*(?:[\r\n]|\r\n)/) }),
      je = (pt = '') => ({ className: 'subst', label: 'interpol', begin: a(/\\/, pt, /\(/), end: /\)/ }),
      mt = (pt = '') => ({ begin: a(pt, /"""/), end: a(/"""/, pt), contains: [Ce(pt), Fe(pt), je(pt)] }),
      Ot = (pt = '') => ({ begin: a(pt, /"/), end: a(/"/, pt), contains: [Ce(pt), je(pt)] }),
      Gt = { className: 'string', variants: [mt(), mt('#'), mt('##'), mt('###'), Ot(), Ot('#'), Ot('##'), Ot('###')] },
      un = [ge.BACKSLASH_ESCAPE, { begin: /\[/, end: /\]/, relevance: 0, contains: [ge.BACKSLASH_ESCAPE] }],
      Yr = { begin: /\/[^\s](?=[^/\n]*\/)/, end: /\//, contains: un },
      Fi = (pt) => {
        const qn = a(pt, /\//),
          xn = a(/\//, pt);
        return { begin: qn, end: xn, contains: [...un, { scope: 'comment', begin: `#(?!.*${xn})`, end: /$/ }] };
      },
      wn = { scope: 'regexp', variants: [Fi('###'), Fi('##'), Fi('#'), Yr] },
      Hi = { match: a(/`/, ae, /`/) },
      yo = { className: 'variable', match: /\$\d+/ },
      Hn = { className: 'variable', match: `\\$${ue}+` },
      Kt = [Hi, yo, Hn],
      Cr = {
        match: /(@|#(un)?)available/,
        scope: 'keyword',
        starts: { contains: [{ begin: /\(/, end: /\)/, keywords: be, contains: [...Se, Pe, Gt] }] },
      },
      Zr = { scope: 'keyword', match: a(/@/, g(...de), l(g(/\(/, /\s+/))) },
      dr = { scope: 'meta', match: a(/@/, ae) },
      Wn = [Cr, Zr, dr],
      hn = {
        match: l(/\b[A-Z]/),
        relevance: 0,
        contains: [
          { className: 'type', match: a(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, ue, '+') },
          { className: 'type', match: Te, relevance: 0 },
          { match: /[?!]+/, relevance: 0 },
          { match: /\.\.\./, relevance: 0 },
          { match: a(/\s+&\s+/, l(Te)), relevance: 0 },
        ],
      },
      Gn = { begin: /</, end: />/, keywords: re, contains: [...Ae, ...B, ...Wn, K, hn] };
    hn.contains.push(Gn);
    const Kn = { match: a(ae, /\s*:/), keywords: '_|0', relevance: 0 },
      mi = {
        begin: /\(/,
        end: /\)/,
        relevance: 0,
        keywords: re,
        contains: ['self', Kn, ...Ae, wn, ...B, ...C, ...Se, Pe, Gt, ...Kt, ...Wn, hn],
      },
      tr = { begin: /</, end: />/, keywords: 'repeat each', contains: [...Ae, hn] },
      Ar = {
        begin: g(l(a(ae, /\s*:/)), l(a(ae, /\s+/, ae, /\s*:/))),
        end: /:/,
        relevance: 0,
        contains: [
          { className: 'keyword', match: /\b_\b/ },
          { className: 'params', match: ae },
        ],
      },
      Wi = {
        begin: /\(/,
        end: /\)/,
        keywords: re,
        contains: [Ar, ...Ae, ...B, ...Se, Pe, Gt, ...Wn, hn, mi],
        endsParent: !0,
        illegal: /["']/,
      },
      Gi = {
        match: [/(func|macro)/, /\s+/, g(Hi.match, ae, $)],
        className: { 1: 'keyword', 3: 'title.function' },
        contains: [tr, Wi, ze],
        illegal: [/\[/, /%/],
      },
      _i = {
        match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/],
        className: { 1: 'keyword' },
        contains: [tr, Wi, ze],
        illegal: /\[|%/,
      },
      Eo = { match: [/operator/, /\s+/, $], className: { 1: 'keyword', 3: 'title' } },
      vi = {
        begin: [/precedencegroup/, /\s+/, Te],
        className: { 1: 'keyword', 3: 'title' },
        contains: [hn],
        keywords: [...N, ...b],
        end: /}/,
      },
      yi = {
        match: [/class\b/, /\s+/, /func\b/, /\s+/, /\b[A-Za-z_][A-Za-z0-9_]*\b/],
        scope: { 1: 'keyword', 3: 'keyword', 5: 'title.function' },
      },
      Ei = { match: [/class\b/, /\s+/, /var\b/], scope: { 1: 'keyword', 3: 'keyword' } },
      Ki = {
        begin: [/(struct|protocol|class|extension|enum|actor)/, /\s+/, ae, /\s*/],
        beginScope: { 1: 'keyword', 3: 'title.class' },
        keywords: re,
        contains: [
          tr,
          ...B,
          {
            begin: /:/,
            end: /\{/,
            keywords: re,
            contains: [{ scope: 'title.class.inherited', match: Te }, ...B],
            relevance: 0,
          },
        ],
      };
    for (const pt of Gt.variants) {
      const qn = pt.contains.find((Or) => Or.label === 'interpol');
      qn.keywords = re;
      const xn = [...B, ...C, ...Se, Pe, Gt, ...Kt];
      qn.contains = [...xn, { begin: /\(/, end: /\)/, contains: ['self', ...xn] }];
    }
    return {
      name: 'Swift',
      keywords: re,
      contains: [
        ...Ae,
        Gi,
        _i,
        yi,
        Ei,
        Ki,
        Eo,
        vi,
        { beginKeywords: 'import', end: /$/, contains: [...Ae], relevance: 0 },
        wn,
        ...B,
        ...C,
        ...Se,
        Pe,
        Gt,
        ...Kt,
        ...Wn,
        hn,
        mi,
      ],
    };
  }
  return (Fp = we), Fp;
}
var Hp, Rh;
function Wy() {
  if (Rh) return Hp;
  Rh = 1;
  function d(l) {
    const a = 'true false yes no null',
      p = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
      g = {
        className: 'attr',
        variants: [
          { begin: /[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/ },
          { begin: /"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/ },
          { begin: /'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/ },
        ],
      },
      m = {
        className: 'template-variable',
        variants: [
          { begin: /\{\{/, end: /\}\}/ },
          { begin: /%\{/, end: /\}/ },
        ],
      },
      v = {
        className: 'string',
        relevance: 0,
        begin: /'/,
        end: /'/,
        contains: [{ match: /''/, scope: 'char.escape', relevance: 0 }],
      },
      x = {
        className: 'string',
        relevance: 0,
        variants: [{ begin: /"/, end: /"/ }, { begin: /\S+/ }],
        contains: [l.BACKSLASH_ESCAPE, m],
      },
      S = l.inherit(x, {
        variants: [
          { begin: /'/, end: /'/, contains: [{ begin: /''/, relevance: 0 }] },
          { begin: /"/, end: /"/ },
          { begin: /[^\s,{}[\]]+/ },
        ],
      }),
      z = {
        className: 'number',
        begin:
          '\\b' +
          '[0-9]{4}(-[0-9][0-9]){0,2}' +
          '([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?' +
          '(\\.[0-9]*)?' +
          '([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?' +
          '\\b',
      },
      G = { end: ',', endsWithParent: !0, excludeEnd: !0, keywords: a, relevance: 0 },
      F = { begin: /\{/, end: /\}/, contains: [G], illegal: '\\n', relevance: 0 },
      $ = { begin: '\\[', end: '\\]', contains: [G], illegal: '\\n', relevance: 0 },
      V = [
        g,
        { className: 'meta', begin: '^---\\s*$', relevance: 10 },
        { className: 'string', begin: '[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*' },
        { begin: '<%[%=-]?', end: '[%-]?%>', subLanguage: 'ruby', excludeBegin: !0, excludeEnd: !0, relevance: 0 },
        { className: 'type', begin: '!\\w+!' + p },
        { className: 'type', begin: '!<' + p + '>' },
        { className: 'type', begin: '!' + p },
        { className: 'type', begin: '!!' + p },
        { className: 'meta', begin: '&' + l.UNDERSCORE_IDENT_RE + '$' },
        { className: 'meta', begin: '\\*' + l.UNDERSCORE_IDENT_RE + '$' },
        { className: 'bullet', begin: '-(?=[ ]|$)', relevance: 0 },
        l.HASH_COMMENT_MODE,
        { beginKeywords: a, keywords: { literal: a } },
        z,
        { className: 'number', begin: l.C_NUMBER_RE + '\\b', relevance: 0 },
        F,
        $,
        v,
        x,
      ],
      ue = [...V];
    return (
      ue.pop(), ue.push(S), (G.contains = ue), { name: 'YAML', case_insensitive: !0, aliases: ['yml'], contains: V }
    );
  }
  return (Hp = d), Hp;
}
var Wp, Ch;
function Gy() {
  if (Ch) return Wp;
  Ch = 1;
  const d = '[A-Za-z$_][0-9A-Za-z$_]*',
    l = [
      'as',
      'in',
      'of',
      'if',
      'for',
      'while',
      'finally',
      'var',
      'new',
      'function',
      'do',
      'return',
      'void',
      'else',
      'break',
      'catch',
      'instanceof',
      'with',
      'throw',
      'case',
      'default',
      'try',
      'switch',
      'continue',
      'typeof',
      'delete',
      'let',
      'yield',
      'const',
      'class',
      'debugger',
      'async',
      'await',
      'static',
      'import',
      'from',
      'export',
      'extends',
      'using',
    ],
    a = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
    p = [
      'Object',
      'Function',
      'Boolean',
      'Symbol',
      'Math',
      'Date',
      'Number',
      'BigInt',
      'String',
      'RegExp',
      'Array',
      'Float32Array',
      'Float64Array',
      'Int8Array',
      'Uint8Array',
      'Uint8ClampedArray',
      'Int16Array',
      'Int32Array',
      'Uint16Array',
      'Uint32Array',
      'BigInt64Array',
      'BigUint64Array',
      'Set',
      'Map',
      'WeakSet',
      'WeakMap',
      'ArrayBuffer',
      'SharedArrayBuffer',
      'Atomics',
      'DataView',
      'JSON',
      'Promise',
      'Generator',
      'GeneratorFunction',
      'AsyncFunction',
      'Reflect',
      'Proxy',
      'Intl',
      'WebAssembly',
    ],
    g = ['Error', 'EvalError', 'InternalError', 'RangeError', 'ReferenceError', 'SyntaxError', 'TypeError', 'URIError'],
    m = [
      'setInterval',
      'setTimeout',
      'clearInterval',
      'clearTimeout',
      'require',
      'exports',
      'eval',
      'isFinite',
      'isNaN',
      'parseFloat',
      'parseInt',
      'decodeURI',
      'decodeURIComponent',
      'encodeURI',
      'encodeURIComponent',
      'escape',
      'unescape',
    ],
    v = [
      'arguments',
      'this',
      'super',
      'console',
      'window',
      'document',
      'localStorage',
      'sessionStorage',
      'module',
      'global',
    ],
    x = [].concat(m, p, g);
  function S(b) {
    const N = b.regex,
      I = (Ce, { after: Fe }) => {
        const je = '</' + Ce[0].slice(1);
        return Ce.input.indexOf(je, Fe) !== -1;
      },
      z = d,
      G = { begin: '<>', end: '</>' },
      F = /<[A-Za-z0-9\\._:-]+\s*\/>/,
      $ = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        isTrulyOpeningTag: (Ce, Fe) => {
          const je = Ce[0].length + Ce.index,
            mt = Ce.input[je];
          if (mt === '<' || mt === ',') {
            Fe.ignoreMatch();
            return;
          }
          mt === '>' && (I(Ce, { after: je }) || Fe.ignoreMatch());
          let Ot;
          const Gt = Ce.input.substring(je);
          if ((Ot = Gt.match(/^\s*=/))) {
            Fe.ignoreMatch();
            return;
          }
          if ((Ot = Gt.match(/^\s+extends\s+/)) && Ot.index === 0) {
            Fe.ignoreMatch();
            return;
          }
        },
      },
      V = { $pattern: d, keyword: l, literal: a, built_in: x, 'variable.language': v },
      ue = '[0-9](_?[0-9])*',
      ae = `\\.(${ue})`,
      Te = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
      de = {
        className: 'number',
        variants: [
          { begin: `(\\b(${Te})((${ae})|\\.)?|(${ae}))[eE][+-]?(${ue})\\b` },
          { begin: `\\b(${Te})\\b((${ae})\\b|\\.)?|(${ae})\\b` },
          { begin: '\\b(0|[1-9](_?[0-9])*)n\\b' },
          { begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b' },
          { begin: '\\b0[bB][0-1](_?[0-1])*n?\\b' },
          { begin: '\\b0[oO][0-7](_?[0-7])*n?\\b' },
          { begin: '\\b0[0-7]+n?\\b' },
        ],
        relevance: 0,
      },
      be = { className: 'subst', begin: '\\$\\{', end: '\\}', keywords: V, contains: [] },
      we = {
        begin: '.?html`',
        end: '',
        starts: { end: '`', returnEnd: !1, contains: [b.BACKSLASH_ESCAPE, be], subLanguage: 'xml' },
      },
      ge = {
        begin: '.?css`',
        end: '',
        starts: { end: '`', returnEnd: !1, contains: [b.BACKSLASH_ESCAPE, be], subLanguage: 'css' },
      },
      ze = {
        begin: '.?gql`',
        end: '',
        starts: { end: '`', returnEnd: !1, contains: [b.BACKSLASH_ESCAPE, be], subLanguage: 'graphql' },
      },
      Be = { className: 'string', begin: '`', end: '`', contains: [b.BACKSLASH_ESCAPE, be] },
      dt = {
        className: 'comment',
        variants: [
          b.COMMENT(/\/\*\*(?!\/)/, '\\*/', {
            relevance: 0,
            contains: [
              {
                begin: '(?=@[A-Za-z]+)',
                relevance: 0,
                contains: [
                  { className: 'doctag', begin: '@[A-Za-z]+' },
                  { className: 'type', begin: '\\{', end: '\\}', excludeEnd: !0, excludeBegin: !0, relevance: 0 },
                  { className: 'variable', begin: z + '(?=\\s*(-)|$)', endsParent: !0, relevance: 0 },
                  { begin: /(?=[^\n])\s/, relevance: 0 },
                ],
              },
            ],
          }),
          b.C_BLOCK_COMMENT_MODE,
          b.C_LINE_COMMENT_MODE,
        ],
      },
      st = [b.APOS_STRING_MODE, b.QUOTE_STRING_MODE, we, ge, ze, Be, { match: /\$\d+/ }, de];
    be.contains = st.concat({ begin: /\{/, end: /\}/, keywords: V, contains: ['self'].concat(st) });
    const pe = [].concat(dt, be.contains),
      ne = pe.concat([{ begin: /(\s*)\(/, end: /\)/, keywords: V, contains: ['self'].concat(pe) }]),
      j = {
        className: 'params',
        begin: /(\s*)\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: V,
        contains: ne,
      },
      re = {
        variants: [
          {
            match: [/class/, /\s+/, z, /\s+/, /extends/, /\s+/, N.concat(z, '(', N.concat(/\./, z), ')*')],
            scope: { 1: 'keyword', 3: 'title.class', 5: 'keyword', 7: 'title.class.inherited' },
          },
          { match: [/class/, /\s+/, z], scope: { 1: 'keyword', 3: 'title.class' } },
        ],
      },
      B = {
        relevance: 0,
        match: N.either(
          /\bJSON/,
          /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
          /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
          /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        ),
        className: 'title.class',
        keywords: { _: [...p, ...g] },
      },
      ie = { label: 'use_strict', className: 'meta', relevance: 10, begin: /^\s*['"]use (strict|asm)['"]/ },
      Y = {
        variants: [{ match: [/function/, /\s+/, z, /(?=\s*\()/] }, { match: [/function/, /\s*(?=\()/] }],
        className: { 1: 'keyword', 3: 'title.function' },
        label: 'func.def',
        contains: [j],
        illegal: /%/,
      },
      C = { relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: 'variable.constant' };
    function K(Ce) {
      return N.concat('(?!', Ce.join('|'), ')');
    }
    const xe = {
        match: N.concat(/\b/, K([...m, 'super', 'import'].map((Ce) => `${Ce}\\s*\\(`)), z, N.lookahead(/\s*\(/)),
        className: 'title.function',
        relevance: 0,
      },
      Se = {
        begin: N.concat(/\./, N.lookahead(N.concat(z, /(?![0-9A-Za-z$_(])/))),
        end: z,
        excludeBegin: !0,
        keywords: 'prototype',
        className: 'property',
        relevance: 0,
      },
      Me = {
        match: [/get|set/, /\s+/, z, /(?=\()/],
        className: { 1: 'keyword', 3: 'title.function' },
        contains: [{ begin: /\(\)/ }, j],
      },
      $e = '(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' + b.UNDERSCORE_IDENT_RE + ')\\s*=>',
      Pe = {
        match: [/const|var|let/, /\s+/, z, /\s*/, /=\s*/, /(async\s*)?/, N.lookahead($e)],
        keywords: 'async',
        className: { 1: 'keyword', 3: 'title.function' },
        contains: [j],
      };
    return {
      name: 'JavaScript',
      aliases: ['js', 'jsx', 'mjs', 'cjs'],
      keywords: V,
      exports: { PARAMS_CONTAINS: ne, CLASS_REFERENCE: B },
      illegal: /#(?![$_A-z])/,
      contains: [
        b.SHEBANG({ label: 'shebang', binary: 'node', relevance: 5 }),
        ie,
        b.APOS_STRING_MODE,
        b.QUOTE_STRING_MODE,
        we,
        ge,
        ze,
        Be,
        dt,
        { match: /\$\d+/ },
        de,
        B,
        { scope: 'attr', match: z + N.lookahead(':'), relevance: 0 },
        Pe,
        {
          begin: '(' + b.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
          keywords: 'return throw case',
          relevance: 0,
          contains: [
            dt,
            b.REGEXP_MODE,
            {
              className: 'function',
              begin: $e,
              returnBegin: !0,
              end: '\\s*=>',
              contains: [
                {
                  className: 'params',
                  variants: [
                    { begin: b.UNDERSCORE_IDENT_RE, relevance: 0 },
                    { className: null, begin: /\(\s*\)/, skip: !0 },
                    { begin: /(\s*)\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: V, contains: ne },
                  ],
                },
              ],
            },
            { begin: /,/, relevance: 0 },
            { match: /\s+/, relevance: 0 },
            {
              variants: [
                { begin: G.begin, end: G.end },
                { match: F },
                { begin: $.begin, 'on:begin': $.isTrulyOpeningTag, end: $.end },
              ],
              subLanguage: 'xml',
              contains: [{ begin: $.begin, end: $.end, skip: !0, contains: ['self'] }],
            },
          ],
        },
        Y,
        { beginKeywords: 'while if switch catch for' },
        {
          begin:
            '\\b(?!function)' + b.UNDERSCORE_IDENT_RE + '\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
          returnBegin: !0,
          label: 'func.def',
          contains: [j, b.inherit(b.TITLE_MODE, { begin: z, className: 'title.function' })],
        },
        { match: /\.\.\./, relevance: 0 },
        Se,
        { match: '\\$' + z, relevance: 0 },
        { match: [/\bconstructor(?=\s*\()/], className: { 1: 'title.function' }, contains: [j] },
        xe,
        C,
        re,
        Me,
        { match: /\$[(.]/ },
      ],
    };
  }
  function w(b) {
    const N = b.regex,
      I = S(b),
      z = d,
      G = ['any', 'void', 'number', 'boolean', 'string', 'object', 'never', 'symbol', 'bigint', 'unknown'],
      F = { begin: [/namespace/, /\s+/, b.IDENT_RE], beginScope: { 1: 'keyword', 3: 'title.class' } },
      $ = {
        beginKeywords: 'interface',
        end: /\{/,
        excludeEnd: !0,
        keywords: { keyword: 'interface extends', built_in: G },
        contains: [I.exports.CLASS_REFERENCE],
      },
      V = { className: 'meta', relevance: 10, begin: /^\s*['"]use strict['"]/ },
      ue = [
        'type',
        'interface',
        'public',
        'private',
        'protected',
        'implements',
        'declare',
        'abstract',
        'readonly',
        'enum',
        'override',
        'satisfies',
      ],
      ae = { $pattern: d, keyword: l.concat(ue), literal: a, built_in: x.concat(G), 'variable.language': v },
      Te = { className: 'meta', begin: '@' + z },
      de = (ze, Be, Ae) => {
        const dt = ze.contains.findIndex((st) => st.label === Be);
        if (dt === -1) throw new Error('can not find mode to replace');
        ze.contains.splice(dt, 1, Ae);
      };
    Object.assign(I.keywords, ae), I.exports.PARAMS_CONTAINS.push(Te);
    const be = I.contains.find((ze) => ze.scope === 'attr'),
      we = Object.assign({}, be, { match: N.concat(z, N.lookahead(/\s*\?:/)) });
    I.exports.PARAMS_CONTAINS.push([I.exports.CLASS_REFERENCE, be, we]),
      (I.contains = I.contains.concat([Te, F, $, we])),
      de(I, 'shebang', b.SHEBANG()),
      de(I, 'use_strict', V);
    const ge = I.contains.find((ze) => ze.label === 'func.def');
    return (ge.relevance = 0), Object.assign(I, { name: 'TypeScript', aliases: ['ts', 'tsx', 'mts', 'cts'] }), I;
  }
  return (Wp = w), Wp;
}
var Gp, Ah;
function Ky() {
  if (Ah) return Gp;
  Ah = 1;
  function d(l) {
    const a = l.regex,
      p = { className: 'string', begin: /"(""|[^/n])"C\b/ },
      g = { className: 'string', begin: /"/, end: /"/, illegal: /\n/, contains: [{ begin: /""/ }] },
      m = /\d{1,2}\/\d{1,2}\/\d{4}/,
      v = /\d{4}-\d{1,2}-\d{1,2}/,
      x = /(\d|1[012])(:\d+){0,2} *(AM|PM)/,
      S = /\d{1,2}(:\d{1,2}){1,2}/,
      w = {
        className: 'literal',
        variants: [
          { begin: a.concat(/# */, a.either(v, m), / *#/) },
          { begin: a.concat(/# */, S, / *#/) },
          { begin: a.concat(/# */, x, / *#/) },
          { begin: a.concat(/# */, a.either(v, m), / +/, a.either(x, S), / *#/) },
        ],
      },
      b = {
        className: 'number',
        relevance: 0,
        variants: [
          { begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/ },
          { begin: /\b\d[\d_]*((U?[SIL])|[%&])?/ },
          { begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/ },
          { begin: /&O[0-7_]+((U?[SIL])|[%&])?/ },
          { begin: /&B[01_]+((U?[SIL])|[%&])?/ },
        ],
      },
      N = { className: 'label', begin: /^\w+:/ },
      I = l.COMMENT(/'''/, /$/, { contains: [{ className: 'doctag', begin: /<\/?/, end: />/ }] }),
      z = l.COMMENT(null, /$/, { variants: [{ begin: /'/ }, { begin: /([\t ]|^)REM(?=\s)/ }] });
    return {
      name: 'Visual Basic .NET',
      aliases: ['vb'],
      case_insensitive: !0,
      classNameAliases: { label: 'symbol' },
      keywords: {
        keyword:
          'addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield',
        built_in:
          'addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort',
        type: 'boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort',
        literal: 'true false nothing',
      },
      illegal: '//|\\{|\\}|endif|gosub|variant|wend|^\\$ ',
      contains: [
        p,
        g,
        w,
        b,
        N,
        I,
        z,
        {
          className: 'meta',
          begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
          end: /$/,
          keywords: { keyword: 'const disable else elseif enable end externalsource if region then' },
          contains: [z],
        },
      ],
    };
  }
  return (Gp = d), Gp;
}
var Kp, Oh;
function qy() {
  if (Oh) return Kp;
  Oh = 1;
  function d(l) {
    l.regex;
    const a = l.COMMENT(/\(;/, /;\)/);
    a.contains.push('self');
    const p = l.COMMENT(/;;/, /$/),
      g = [
        'anyfunc',
        'block',
        'br',
        'br_if',
        'br_table',
        'call',
        'call_indirect',
        'data',
        'drop',
        'elem',
        'else',
        'end',
        'export',
        'func',
        'global.get',
        'global.set',
        'local.get',
        'local.set',
        'local.tee',
        'get_global',
        'get_local',
        'global',
        'if',
        'import',
        'local',
        'loop',
        'memory',
        'memory.grow',
        'memory.size',
        'module',
        'mut',
        'nop',
        'offset',
        'param',
        'result',
        'return',
        'select',
        'set_global',
        'set_local',
        'start',
        'table',
        'tee_local',
        'then',
        'type',
        'unreachable',
      ],
      m = {
        begin: [/(?:func|call|call_indirect)/, /\s+/, /\$[^\s)]+/],
        className: { 1: 'keyword', 3: 'title.function' },
      },
      v = { className: 'variable', begin: /\$[\w_]+/ },
      x = { match: /(\((?!;)|\))+/, className: 'punctuation', relevance: 0 },
      S = {
        className: 'number',
        relevance: 0,
        match:
          /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
      },
      w = { match: /(i32|i64|f32|f64)(?!\.)/, className: 'type' },
      b = {
        className: 'keyword',
        match:
          /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/,
      };
    return {
      name: 'WebAssembly',
      keywords: { $pattern: /[\w.]+/, keyword: g },
      contains: [
        p,
        a,
        { match: [/(?:offset|align)/, /\s*/, /=/], className: { 1: 'keyword', 3: 'operator' } },
        v,
        x,
        m,
        l.QUOTE_STRING_MODE,
        w,
        b,
        S,
      ],
    };
  }
  return (Kp = d), Kp;
}
var qp, Mh;
function Yy() {
  if (Mh) return qp;
  Mh = 1;
  var d = cy();
  return (
    d.registerLanguage('xml', fy()),
    d.registerLanguage('bash', dy()),
    d.registerLanguage('c', py()),
    d.registerLanguage('cpp', gy()),
    d.registerLanguage('csharp', hy()),
    d.registerLanguage('css', my()),
    d.registerLanguage('markdown', _y()),
    d.registerLanguage('diff', vy()),
    d.registerLanguage('ruby', yy()),
    d.registerLanguage('go', Ey()),
    d.registerLanguage('graphql', by()),
    d.registerLanguage('ini', wy()),
    d.registerLanguage('java', xy()),
    d.registerLanguage('javascript', Sy()),
    d.registerLanguage('json', ky()),
    d.registerLanguage('kotlin', Ny()),
    d.registerLanguage('less', Ty()),
    d.registerLanguage('lua', Ry()),
    d.registerLanguage('makefile', Cy()),
    d.registerLanguage('perl', Ay()),
    d.registerLanguage('objectivec', Oy()),
    d.registerLanguage('php', My()),
    d.registerLanguage('php-template', Iy()),
    d.registerLanguage('plaintext', Ly()),
    d.registerLanguage('python', Dy()),
    d.registerLanguage('python-repl', Py()),
    d.registerLanguage('r', By()),
    d.registerLanguage('rust', Uy()),
    d.registerLanguage('scss', zy()),
    d.registerLanguage('shell', $y()),
    d.registerLanguage('sql', Fy()),
    d.registerLanguage('swift', Hy()),
    d.registerLanguage('yaml', Wy()),
    d.registerLanguage('typescript', Gy()),
    d.registerLanguage('vbnet', Ky()),
    d.registerLanguage('wasm', qy()),
    (d.HighlightJS = d),
    (d.default = d),
    (qp = d),
    qp
  );
}
var Zy = Yy();
const Xp = Jp(Zy);
function rg() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null,
  };
}
let Is = rg();
function im(d) {
  Is = d;
}
const Cc = { exec: () => null };
function Nt(d, l = '') {
  let a = typeof d == 'string' ? d : d.source;
  const p = {
    replace: (g, m) => {
      let v = typeof m == 'string' ? m : m.source;
      return (v = v.replace(fr.caret, '$1')), (a = a.replace(g, v)), p;
    },
    getRegex: () => new RegExp(a, l),
  };
  return p;
}
const fr = {
    codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
    outputLinkReplace: /\\([\[\]])/g,
    indentCodeCompensation: /^(\s+)(?:```)/,
    beginningSpace: /^\s+/,
    endingHash: /#$/,
    startingSpaceChar: /^ /,
    endingSpaceChar: / $/,
    nonSpaceChar: /[^ ]/,
    newLineCharGlobal: /\n/g,
    tabCharGlobal: /\t/g,
    multipleSpaceGlobal: /\s+/g,
    blankLine: /^[ \t]*$/,
    doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
    blockquoteStart: /^ {0,3}>/,
    blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
    blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
    listReplaceTabs: /^\t+/,
    listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
    listIsTask: /^\[[ xX]\] /,
    listReplaceTask: /^\[[ xX]\] +/,
    anyLine: /\n.*\n/,
    hrefBrackets: /^<(.*)>$/,
    tableDelimiter: /[:|]/,
    tableAlignChars: /^\||\| *$/g,
    tableRowBlankLine: /\n[ \t]*$/,
    tableAlignRight: /^ *-+: *$/,
    tableAlignCenter: /^ *:-+: *$/,
    tableAlignLeft: /^ *:-+ *$/,
    startATag: /^<a /i,
    endATag: /^<\/a>/i,
    startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
    endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
    startAngleBracket: /^</,
    endAngleBracket: />$/,
    pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
    unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
    escapeTest: /[&<>"']/,
    escapeReplace: /[&<>"']/g,
    escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
    unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
    caret: /(^|[^\[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: (d) => new RegExp(`^( {0,3}${d})((?:[	 ][^\\n]*)?(?:\\n|$))`),
    nextBulletRegex: (d) => new RegExp(`^ {0,${Math.min(3, d - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
    hrRegex: (d) => new RegExp(`^ {0,${Math.min(3, d - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
    fencesBeginRegex: (d) => new RegExp(`^ {0,${Math.min(3, d - 1)}}(?:\`\`\`|~~~)`),
    headingBeginRegex: (d) => new RegExp(`^ {0,${Math.min(3, d - 1)}}#`),
    htmlBeginRegex: (d) => new RegExp(`^ {0,${Math.min(3, d - 1)}}<(?:[a-z].*>|!--)`, 'i'),
  },
  Vy = /^(?:[ \t]*(?:\n|$))+/,
  Qy = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
  Xy = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  Lc = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  jy = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  ig = /(?:[*+-]|\d{1,9}[.)])/,
  om =
    /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  am = Nt(om)
    .replace(/bull/g, ig)
    .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
    .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
    .replace(/blockquote/g, / {0,3}>/)
    .replace(/heading/g, / {0,3}#{1,6}/)
    .replace(/html/g, / {0,3}<[^\n>]+>\n/)
    .replace(/\|table/g, '')
    .getRegex(),
  Jy = Nt(om)
    .replace(/bull/g, ig)
    .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
    .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
    .replace(/blockquote/g, / {0,3}>/)
    .replace(/heading/g, / {0,3}#{1,6}/)
    .replace(/html/g, / {0,3}<[^\n>]+>\n/)
    .replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/)
    .getRegex(),
  og = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  eE = /^[^\n]+/,
  ag = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
  tE = Nt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/)
    .replace('label', ag)
    .replace('title', /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/)
    .getRegex(),
  nE = Nt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
    .replace(/bull/g, ig)
    .getRegex(),
  ad =
    'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul',
  sg = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
  rE = Nt(
    '^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))',
    'i'
  )
    .replace('comment', sg)
    .replace('tag', ad)
    .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
    .getRegex(),
  sm = Nt(og)
    .replace('hr', Lc)
    .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
    .replace('|lheading', '')
    .replace('|table', '')
    .replace('blockquote', ' {0,3}>')
    .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
    .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
    .replace('tag', ad)
    .getRegex(),
  iE = Nt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
    .replace('paragraph', sm)
    .getRegex(),
  lg = {
    blockquote: iE,
    code: Qy,
    def: tE,
    fences: Xy,
    heading: jy,
    hr: Lc,
    html: rE,
    lheading: am,
    list: nE,
    newline: Vy,
    paragraph: sm,
    table: Cc,
    text: eE,
  },
  Ih = Nt(
    '^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)'
  )
    .replace('hr', Lc)
    .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
    .replace('blockquote', ' {0,3}>')
    .replace('code', '(?: {4}| {0,3}	)[^\\n]')
    .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
    .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
    .replace('tag', ad)
    .getRegex(),
  oE = {
    ...lg,
    lheading: Jy,
    table: Ih,
    paragraph: Nt(og)
      .replace('hr', Lc)
      .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
      .replace('|lheading', '')
      .replace('table', Ih)
      .replace('blockquote', ' {0,3}>')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
      .replace('tag', ad)
      .getRegex(),
  },
  aE = {
    ...lg,
    html: Nt(
      `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
    )
      .replace('comment', sg)
      .replace(
        /tag/g,
        '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
      )
      .getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: Cc,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: Nt(og)
      .replace('hr', Lc)
      .replace(
        'heading',
        ` *#{1,6} *[^
]`
      )
      .replace('lheading', am)
      .replace('|table', '')
      .replace('blockquote', ' {0,3}>')
      .replace('|fences', '')
      .replace('|list', '')
      .replace('|html', '')
      .replace('|tag', '')
      .getRegex(),
  },
  sE = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  lE = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  lm = /^( {2,}|\\)\n(?!\s*$)/,
  uE = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  sd = /[\p{P}\p{S}]/u,
  ug = /[\s\p{P}\p{S}]/u,
  um = /[^\s\p{P}\p{S}]/u,
  cE = Nt(/^((?![*_])punctSpace)/, 'u')
    .replace(/punctSpace/g, ug)
    .getRegex(),
  cm = /(?!~)[\p{P}\p{S}]/u,
  fE = /(?!~)[\s\p{P}\p{S}]/u,
  dE = /(?:[^\s\p{P}\p{S}]|~)/u,
  pE = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,
  fm = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,
  gE = Nt(fm, 'u').replace(/punct/g, sd).getRegex(),
  hE = Nt(fm, 'u').replace(/punct/g, cm).getRegex(),
  dm =
    '^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)',
  mE = Nt(dm, 'gu')
    .replace(/notPunctSpace/g, um)
    .replace(/punctSpace/g, ug)
    .replace(/punct/g, sd)
    .getRegex(),
  _E = Nt(dm, 'gu')
    .replace(/notPunctSpace/g, dE)
    .replace(/punctSpace/g, fE)
    .replace(/punct/g, cm)
    .getRegex(),
  vE = Nt(
    '^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)',
    'gu'
  )
    .replace(/notPunctSpace/g, um)
    .replace(/punctSpace/g, ug)
    .replace(/punct/g, sd)
    .getRegex(),
  yE = Nt(/\\(punct)/, 'gu')
    .replace(/punct/g, sd)
    .getRegex(),
  EE = Nt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
    .replace('scheme', /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
    .replace(
      'email',
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/
    )
    .getRegex(),
  bE = Nt(sg).replace('(?:-->|$)', '-->').getRegex(),
  wE = Nt(
    '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>'
  )
    .replace('comment', bE)
    .replace('attribute', /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/)
    .getRegex(),
  td = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
  xE = Nt(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/)
    .replace('label', td)
    .replace('href', /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/)
    .replace('title', /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/)
    .getRegex(),
  pm = Nt(/^!?\[(label)\]\[(ref)\]/)
    .replace('label', td)
    .replace('ref', ag)
    .getRegex(),
  gm = Nt(/^!?\[(ref)\](?:\[\])?/)
    .replace('ref', ag)
    .getRegex(),
  SE = Nt('reflink|nolink(?!\\()', 'g').replace('reflink', pm).replace('nolink', gm).getRegex(),
  cg = {
    _backpedal: Cc,
    anyPunctuation: yE,
    autolink: EE,
    blockSkip: pE,
    br: lm,
    code: lE,
    del: Cc,
    emStrongLDelim: gE,
    emStrongRDelimAst: mE,
    emStrongRDelimUnd: vE,
    escape: sE,
    link: xE,
    nolink: gm,
    punctuation: cE,
    reflink: pm,
    reflinkSearch: SE,
    tag: wE,
    text: uE,
    url: Cc,
  },
  kE = {
    ...cg,
    link: Nt(/^!?\[(label)\]\((.*?)\)/)
      .replace('label', td)
      .getRegex(),
    reflink: Nt(/^!?\[(label)\]\s*\[([^\]]*)\]/)
      .replace('label', td)
      .getRegex(),
  },
  jp = {
    ...cg,
    emStrongRDelimAst: _E,
    emStrongLDelim: hE,
    url: Nt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, 'i')
      .replace('email', /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/)
      .getRegex(),
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
  },
  NE = {
    ...jp,
    br: Nt(lm).replace('{2,}', '*').getRegex(),
    text: Nt(jp.text)
      .replace('\\b_', '\\b_| {2,}\\n')
      .replace(/\{2,\}/g, '*')
      .getRegex(),
  },
  jf = { normal: lg, gfm: oE, pedantic: aE },
  Nc = { normal: cg, gfm: jp, breaks: NE, pedantic: kE },
  TE = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
  Lh = (d) => TE[d];
function vo(d, l) {
  if (l) {
    if (fr.escapeTest.test(d)) return d.replace(fr.escapeReplace, Lh);
  } else if (fr.escapeTestNoEncode.test(d)) return d.replace(fr.escapeReplaceNoEncode, Lh);
  return d;
}
function Dh(d) {
  try {
    d = encodeURI(d).replace(fr.percentDecode, '%');
  } catch {
    return null;
  }
  return d;
}
function Ph(d, l) {
  var m;
  const a = d.replace(fr.findPipe, (v, x, S) => {
      let w = !1,
        b = x;
      for (; --b >= 0 && S[b] === '\\'; ) w = !w;
      return w ? '|' : ' |';
    }),
    p = a.split(fr.splitPipe);
  let g = 0;
  if ((p[0].trim() || p.shift(), p.length > 0 && !((m = p.at(-1)) != null && m.trim()) && p.pop(), l))
    if (p.length > l) p.splice(l);
    else for (; p.length < l; ) p.push('');
  for (; g < p.length; g++) p[g] = p[g].trim().replace(fr.slashPipe, '|');
  return p;
}
function Tc(d, l, a) {
  const p = d.length;
  if (p === 0) return '';
  let g = 0;
  for (; g < p && d.charAt(p - g - 1) === l; ) g++;
  return d.slice(0, p - g);
}
function RE(d, l) {
  if (d.indexOf(l[1]) === -1) return -1;
  let a = 0;
  for (let p = 0; p < d.length; p++)
    if (d[p] === '\\') p++;
    else if (d[p] === l[0]) a++;
    else if (d[p] === l[1] && (a--, a < 0)) return p;
  return -1;
}
function Bh(d, l, a, p, g) {
  const m = l.href,
    v = l.title || null,
    x = d[1].replace(g.other.outputLinkReplace, '$1');
  if (d[0].charAt(0) !== '!') {
    p.state.inLink = !0;
    const S = { type: 'link', raw: a, href: m, title: v, text: x, tokens: p.inlineTokens(x) };
    return (p.state.inLink = !1), S;
  }
  return { type: 'image', raw: a, href: m, title: v, text: x };
}
function CE(d, l, a) {
  const p = d.match(a.other.indentCodeCompensation);
  if (p === null) return l;
  const g = p[1];
  return l
    .split(
      `
`
    )
    .map((m) => {
      const v = m.match(a.other.beginningSpace);
      if (v === null) return m;
      const [x] = v;
      return x.length >= g.length ? m.slice(g.length) : m;
    }).join(`
`);
}
class nd {
  constructor(l) {
    Pt(this, 'options');
    Pt(this, 'rules');
    Pt(this, 'lexer');
    this.options = l || Is;
  }
  space(l) {
    const a = this.rules.block.newline.exec(l);
    if (a && a[0].length > 0) return { type: 'space', raw: a[0] };
  }
  code(l) {
    const a = this.rules.block.code.exec(l);
    if (a) {
      const p = a[0].replace(this.rules.other.codeRemoveIndent, '');
      return {
        type: 'code',
        raw: a[0],
        codeBlockStyle: 'indented',
        text: this.options.pedantic
          ? p
          : Tc(
              p,
              `
`
            ),
      };
    }
  }
  fences(l) {
    const a = this.rules.block.fences.exec(l);
    if (a) {
      const p = a[0],
        g = CE(p, a[3] || '', this.rules);
      return {
        type: 'code',
        raw: p,
        lang: a[2] ? a[2].trim().replace(this.rules.inline.anyPunctuation, '$1') : a[2],
        text: g,
      };
    }
  }
  heading(l) {
    const a = this.rules.block.heading.exec(l);
    if (a) {
      let p = a[2].trim();
      if (this.rules.other.endingHash.test(p)) {
        const g = Tc(p, '#');
        (this.options.pedantic || !g || this.rules.other.endingSpaceChar.test(g)) && (p = g.trim());
      }
      return { type: 'heading', raw: a[0], depth: a[1].length, text: p, tokens: this.lexer.inline(p) };
    }
  }
  hr(l) {
    const a = this.rules.block.hr.exec(l);
    if (a)
      return {
        type: 'hr',
        raw: Tc(
          a[0],
          `
`
        ),
      };
  }
  blockquote(l) {
    const a = this.rules.block.blockquote.exec(l);
    if (a) {
      let p = Tc(
          a[0],
          `
`
        ).split(`
`),
        g = '',
        m = '';
      const v = [];
      for (; p.length > 0; ) {
        let x = !1;
        const S = [];
        let w;
        for (w = 0; w < p.length; w++)
          if (this.rules.other.blockquoteStart.test(p[w])) S.push(p[w]), (x = !0);
          else if (!x) S.push(p[w]);
          else break;
        p = p.slice(w);
        const b = S.join(`
`),
          N = b
            .replace(
              this.rules.other.blockquoteSetextReplace,
              `
    $1`
            )
            .replace(this.rules.other.blockquoteSetextReplace2, '');
        (g = g
          ? `${g}
${b}`
          : b),
          (m = m
            ? `${m}
${N}`
            : N);
        const I = this.lexer.state.top;
        if (((this.lexer.state.top = !0), this.lexer.blockTokens(N, v, !0), (this.lexer.state.top = I), p.length === 0))
          break;
        const z = v.at(-1);
        if ((z == null ? void 0 : z.type) === 'code') break;
        if ((z == null ? void 0 : z.type) === 'blockquote') {
          const G = z,
            F =
              G.raw +
              `
` +
              p.join(`
`),
            $ = this.blockquote(F);
          (v[v.length - 1] = $),
            (g = g.substring(0, g.length - G.raw.length) + $.raw),
            (m = m.substring(0, m.length - G.text.length) + $.text);
          break;
        } else if ((z == null ? void 0 : z.type) === 'list') {
          const G = z,
            F =
              G.raw +
              `
` +
              p.join(`
`),
            $ = this.list(F);
          (v[v.length - 1] = $),
            (g = g.substring(0, g.length - z.raw.length) + $.raw),
            (m = m.substring(0, m.length - G.raw.length) + $.raw),
            (p = F.substring(v.at(-1).raw.length).split(`
`));
          continue;
        }
      }
      return { type: 'blockquote', raw: g, tokens: v, text: m };
    }
  }
  list(l) {
    let a = this.rules.block.list.exec(l);
    if (a) {
      let p = a[1].trim();
      const g = p.length > 1,
        m = { type: 'list', raw: '', ordered: g, start: g ? +p.slice(0, -1) : '', loose: !1, items: [] };
      (p = g ? `\\d{1,9}\\${p.slice(-1)}` : `\\${p}`), this.options.pedantic && (p = g ? p : '[*+-]');
      const v = this.rules.other.listItemRegex(p);
      let x = !1;
      for (; l; ) {
        let w = !1,
          b = '',
          N = '';
        if (!(a = v.exec(l)) || this.rules.block.hr.test(l)) break;
        (b = a[0]), (l = l.substring(b.length));
        let I = a[2]
            .split(
              `
`,
              1
            )[0]
            .replace(this.rules.other.listReplaceTabs, (ue) => ' '.repeat(3 * ue.length)),
          z = l.split(
            `
`,
            1
          )[0],
          G = !I.trim(),
          F = 0;
        if (
          (this.options.pedantic
            ? ((F = 2), (N = I.trimStart()))
            : G
              ? (F = a[1].length + 1)
              : ((F = a[2].search(this.rules.other.nonSpaceChar)),
                (F = F > 4 ? 1 : F),
                (N = I.slice(F)),
                (F += a[1].length)),
          G &&
            this.rules.other.blankLine.test(z) &&
            ((b +=
              z +
              `
`),
            (l = l.substring(z.length + 1)),
            (w = !0)),
          !w)
        ) {
          const ue = this.rules.other.nextBulletRegex(F),
            ae = this.rules.other.hrRegex(F),
            Te = this.rules.other.fencesBeginRegex(F),
            de = this.rules.other.headingBeginRegex(F),
            be = this.rules.other.htmlBeginRegex(F);
          for (; l; ) {
            const we = l.split(
              `
`,
              1
            )[0];
            let ge;
            if (
              ((z = we),
              this.options.pedantic
                ? ((z = z.replace(this.rules.other.listReplaceNesting, '  ')), (ge = z))
                : (ge = z.replace(this.rules.other.tabCharGlobal, '    ')),
              Te.test(z) || de.test(z) || be.test(z) || ue.test(z) || ae.test(z))
            )
              break;
            if (ge.search(this.rules.other.nonSpaceChar) >= F || !z.trim())
              N +=
                `
` + ge.slice(F);
            else {
              if (
                G ||
                I.replace(this.rules.other.tabCharGlobal, '    ').search(this.rules.other.nonSpaceChar) >= 4 ||
                Te.test(I) ||
                de.test(I) ||
                ae.test(I)
              )
                break;
              N +=
                `
` + z;
            }
            !G && !z.trim() && (G = !0),
              (b +=
                we +
                `
`),
              (l = l.substring(we.length + 1)),
              (I = ge.slice(F));
          }
        }
        m.loose || (x ? (m.loose = !0) : this.rules.other.doubleBlankLine.test(b) && (x = !0));
        let $ = null,
          V;
        this.options.gfm &&
          (($ = this.rules.other.listIsTask.exec(N)),
          $ && ((V = $[0] !== '[ ] '), (N = N.replace(this.rules.other.listReplaceTask, '')))),
          m.items.push({ type: 'list_item', raw: b, task: !!$, checked: V, loose: !1, text: N, tokens: [] }),
          (m.raw += b);
      }
      const S = m.items.at(-1);
      if (S) (S.raw = S.raw.trimEnd()), (S.text = S.text.trimEnd());
      else return;
      m.raw = m.raw.trimEnd();
      for (let w = 0; w < m.items.length; w++)
        if (
          ((this.lexer.state.top = !1), (m.items[w].tokens = this.lexer.blockTokens(m.items[w].text, [])), !m.loose)
        ) {
          const b = m.items[w].tokens.filter((I) => I.type === 'space'),
            N = b.length > 0 && b.some((I) => this.rules.other.anyLine.test(I.raw));
          m.loose = N;
        }
      if (m.loose) for (let w = 0; w < m.items.length; w++) m.items[w].loose = !0;
      return m;
    }
  }
  html(l) {
    const a = this.rules.block.html.exec(l);
    if (a)
      return {
        type: 'html',
        block: !0,
        raw: a[0],
        pre: a[1] === 'pre' || a[1] === 'script' || a[1] === 'style',
        text: a[0],
      };
  }
  def(l) {
    const a = this.rules.block.def.exec(l);
    if (a) {
      const p = a[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, ' '),
        g = a[2]
          ? a[2].replace(this.rules.other.hrefBrackets, '$1').replace(this.rules.inline.anyPunctuation, '$1')
          : '',
        m = a[3] ? a[3].substring(1, a[3].length - 1).replace(this.rules.inline.anyPunctuation, '$1') : a[3];
      return { type: 'def', tag: p, raw: a[0], href: g, title: m };
    }
  }
  table(l) {
    var x;
    const a = this.rules.block.table.exec(l);
    if (!a || !this.rules.other.tableDelimiter.test(a[2])) return;
    const p = Ph(a[1]),
      g = a[2].replace(this.rules.other.tableAlignChars, '').split('|'),
      m =
        (x = a[3]) != null && x.trim()
          ? a[3].replace(this.rules.other.tableRowBlankLine, '').split(`
`)
          : [],
      v = { type: 'table', raw: a[0], header: [], align: [], rows: [] };
    if (p.length === g.length) {
      for (const S of g)
        this.rules.other.tableAlignRight.test(S)
          ? v.align.push('right')
          : this.rules.other.tableAlignCenter.test(S)
            ? v.align.push('center')
            : this.rules.other.tableAlignLeft.test(S)
              ? v.align.push('left')
              : v.align.push(null);
      for (let S = 0; S < p.length; S++)
        v.header.push({ text: p[S], tokens: this.lexer.inline(p[S]), header: !0, align: v.align[S] });
      for (const S of m)
        v.rows.push(
          Ph(S, v.header.length).map((w, b) => ({
            text: w,
            tokens: this.lexer.inline(w),
            header: !1,
            align: v.align[b],
          }))
        );
      return v;
    }
  }
  lheading(l) {
    const a = this.rules.block.lheading.exec(l);
    if (a)
      return {
        type: 'heading',
        raw: a[0],
        depth: a[2].charAt(0) === '=' ? 1 : 2,
        text: a[1],
        tokens: this.lexer.inline(a[1]),
      };
  }
  paragraph(l) {
    const a = this.rules.block.paragraph.exec(l);
    if (a) {
      const p =
        a[1].charAt(a[1].length - 1) ===
        `
`
          ? a[1].slice(0, -1)
          : a[1];
      return { type: 'paragraph', raw: a[0], text: p, tokens: this.lexer.inline(p) };
    }
  }
  text(l) {
    const a = this.rules.block.text.exec(l);
    if (a) return { type: 'text', raw: a[0], text: a[0], tokens: this.lexer.inline(a[0]) };
  }
  escape(l) {
    const a = this.rules.inline.escape.exec(l);
    if (a) return { type: 'escape', raw: a[0], text: a[1] };
  }
  tag(l) {
    const a = this.rules.inline.tag.exec(l);
    if (a)
      return (
        !this.lexer.state.inLink && this.rules.other.startATag.test(a[0])
          ? (this.lexer.state.inLink = !0)
          : this.lexer.state.inLink && this.rules.other.endATag.test(a[0]) && (this.lexer.state.inLink = !1),
        !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(a[0])
          ? (this.lexer.state.inRawBlock = !0)
          : this.lexer.state.inRawBlock &&
            this.rules.other.endPreScriptTag.test(a[0]) &&
            (this.lexer.state.inRawBlock = !1),
        {
          type: 'html',
          raw: a[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          block: !1,
          text: a[0],
        }
      );
  }
  link(l) {
    const a = this.rules.inline.link.exec(l);
    if (a) {
      const p = a[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(p)) {
        if (!this.rules.other.endAngleBracket.test(p)) return;
        const v = Tc(p.slice(0, -1), '\\');
        if ((p.length - v.length) % 2 === 0) return;
      } else {
        const v = RE(a[2], '()');
        if (v > -1) {
          const S = (a[0].indexOf('!') === 0 ? 5 : 4) + a[1].length + v;
          (a[2] = a[2].substring(0, v)), (a[0] = a[0].substring(0, S).trim()), (a[3] = '');
        }
      }
      let g = a[2],
        m = '';
      if (this.options.pedantic) {
        const v = this.rules.other.pedanticHrefTitle.exec(g);
        v && ((g = v[1]), (m = v[3]));
      } else m = a[3] ? a[3].slice(1, -1) : '';
      return (
        (g = g.trim()),
        this.rules.other.startAngleBracket.test(g) &&
          (this.options.pedantic && !this.rules.other.endAngleBracket.test(p)
            ? (g = g.slice(1))
            : (g = g.slice(1, -1))),
        Bh(
          a,
          {
            href: g && g.replace(this.rules.inline.anyPunctuation, '$1'),
            title: m && m.replace(this.rules.inline.anyPunctuation, '$1'),
          },
          a[0],
          this.lexer,
          this.rules
        )
      );
    }
  }
  reflink(l, a) {
    let p;
    if ((p = this.rules.inline.reflink.exec(l)) || (p = this.rules.inline.nolink.exec(l))) {
      const g = (p[2] || p[1]).replace(this.rules.other.multipleSpaceGlobal, ' '),
        m = a[g.toLowerCase()];
      if (!m) {
        const v = p[0].charAt(0);
        return { type: 'text', raw: v, text: v };
      }
      return Bh(p, m, p[0], this.lexer, this.rules);
    }
  }
  emStrong(l, a, p = '') {
    let g = this.rules.inline.emStrongLDelim.exec(l);
    if (!g || (g[3] && p.match(this.rules.other.unicodeAlphaNumeric))) return;
    if (!(g[1] || g[2] || '') || !p || this.rules.inline.punctuation.exec(p)) {
      const v = [...g[0]].length - 1;
      let x,
        S,
        w = v,
        b = 0;
      const N = g[0][0] === '*' ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (N.lastIndex = 0, a = a.slice(-1 * l.length + v); (g = N.exec(a)) != null; ) {
        if (((x = g[1] || g[2] || g[3] || g[4] || g[5] || g[6]), !x)) continue;
        if (((S = [...x].length), g[3] || g[4])) {
          w += S;
          continue;
        } else if ((g[5] || g[6]) && v % 3 && !((v + S) % 3)) {
          b += S;
          continue;
        }
        if (((w -= S), w > 0)) continue;
        S = Math.min(S, S + w + b);
        const I = [...g[0]][0].length,
          z = l.slice(0, v + g.index + I + S);
        if (Math.min(v, S) % 2) {
          const F = z.slice(1, -1);
          return { type: 'em', raw: z, text: F, tokens: this.lexer.inlineTokens(F) };
        }
        const G = z.slice(2, -2);
        return { type: 'strong', raw: z, text: G, tokens: this.lexer.inlineTokens(G) };
      }
    }
  }
  codespan(l) {
    const a = this.rules.inline.code.exec(l);
    if (a) {
      let p = a[2].replace(this.rules.other.newLineCharGlobal, ' ');
      const g = this.rules.other.nonSpaceChar.test(p),
        m = this.rules.other.startingSpaceChar.test(p) && this.rules.other.endingSpaceChar.test(p);
      return g && m && (p = p.substring(1, p.length - 1)), { type: 'codespan', raw: a[0], text: p };
    }
  }
  br(l) {
    const a = this.rules.inline.br.exec(l);
    if (a) return { type: 'br', raw: a[0] };
  }
  del(l) {
    const a = this.rules.inline.del.exec(l);
    if (a) return { type: 'del', raw: a[0], text: a[2], tokens: this.lexer.inlineTokens(a[2]) };
  }
  autolink(l) {
    const a = this.rules.inline.autolink.exec(l);
    if (a) {
      let p, g;
      return (
        a[2] === '@' ? ((p = a[1]), (g = 'mailto:' + p)) : ((p = a[1]), (g = p)),
        { type: 'link', raw: a[0], text: p, href: g, tokens: [{ type: 'text', raw: p, text: p }] }
      );
    }
  }
  url(l) {
    var p;
    let a;
    if ((a = this.rules.inline.url.exec(l))) {
      let g, m;
      if (a[2] === '@') (g = a[0]), (m = 'mailto:' + g);
      else {
        let v;
        do (v = a[0]), (a[0] = ((p = this.rules.inline._backpedal.exec(a[0])) == null ? void 0 : p[0]) ?? '');
        while (v !== a[0]);
        (g = a[0]), a[1] === 'www.' ? (m = 'http://' + a[0]) : (m = a[0]);
      }
      return { type: 'link', raw: a[0], text: g, href: m, tokens: [{ type: 'text', raw: g, text: g }] };
    }
  }
  inlineText(l) {
    const a = this.rules.inline.text.exec(l);
    if (a) {
      const p = this.lexer.state.inRawBlock;
      return { type: 'text', raw: a[0], text: a[0], escaped: p };
    }
  }
}
class gi {
  constructor(l) {
    Pt(this, 'tokens');
    Pt(this, 'options');
    Pt(this, 'state');
    Pt(this, 'tokenizer');
    Pt(this, 'inlineQueue');
    (this.tokens = []),
      (this.tokens.links = Object.create(null)),
      (this.options = l || Is),
      (this.options.tokenizer = this.options.tokenizer || new nd()),
      (this.tokenizer = this.options.tokenizer),
      (this.tokenizer.options = this.options),
      (this.tokenizer.lexer = this),
      (this.inlineQueue = []),
      (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
    const a = { other: fr, block: jf.normal, inline: Nc.normal };
    this.options.pedantic
      ? ((a.block = jf.pedantic), (a.inline = Nc.pedantic))
      : this.options.gfm && ((a.block = jf.gfm), this.options.breaks ? (a.inline = Nc.breaks) : (a.inline = Nc.gfm)),
      (this.tokenizer.rules = a);
  }
  static get rules() {
    return { block: jf, inline: Nc };
  }
  static lex(l, a) {
    return new gi(a).lex(l);
  }
  static lexInline(l, a) {
    return new gi(a).inlineTokens(l);
  }
  lex(l) {
    (l = l.replace(
      fr.carriageReturn,
      `
`
    )),
      this.blockTokens(l, this.tokens);
    for (let a = 0; a < this.inlineQueue.length; a++) {
      const p = this.inlineQueue[a];
      this.inlineTokens(p.src, p.tokens);
    }
    return (this.inlineQueue = []), this.tokens;
  }
  blockTokens(l, a = [], p = !1) {
    var g, m, v;
    for (this.options.pedantic && (l = l.replace(fr.tabCharGlobal, '    ').replace(fr.spaceLine, '')); l; ) {
      let x;
      if (
        (m = (g = this.options.extensions) == null ? void 0 : g.block) != null &&
        m.some((w) => ((x = w.call({ lexer: this }, l, a)) ? ((l = l.substring(x.raw.length)), a.push(x), !0) : !1))
      )
        continue;
      if ((x = this.tokenizer.space(l))) {
        l = l.substring(x.raw.length);
        const w = a.at(-1);
        x.raw.length === 1 && w !== void 0
          ? (w.raw += `
`)
          : a.push(x);
        continue;
      }
      if ((x = this.tokenizer.code(l))) {
        l = l.substring(x.raw.length);
        const w = a.at(-1);
        (w == null ? void 0 : w.type) === 'paragraph' || (w == null ? void 0 : w.type) === 'text'
          ? ((w.raw +=
              `
` + x.raw),
            (w.text +=
              `
` + x.text),
            (this.inlineQueue.at(-1).src = w.text))
          : a.push(x);
        continue;
      }
      if ((x = this.tokenizer.fences(l))) {
        (l = l.substring(x.raw.length)), a.push(x);
        continue;
      }
      if ((x = this.tokenizer.heading(l))) {
        (l = l.substring(x.raw.length)), a.push(x);
        continue;
      }
      if ((x = this.tokenizer.hr(l))) {
        (l = l.substring(x.raw.length)), a.push(x);
        continue;
      }
      if ((x = this.tokenizer.blockquote(l))) {
        (l = l.substring(x.raw.length)), a.push(x);
        continue;
      }
      if ((x = this.tokenizer.list(l))) {
        (l = l.substring(x.raw.length)), a.push(x);
        continue;
      }
      if ((x = this.tokenizer.html(l))) {
        (l = l.substring(x.raw.length)), a.push(x);
        continue;
      }
      if ((x = this.tokenizer.def(l))) {
        l = l.substring(x.raw.length);
        const w = a.at(-1);
        (w == null ? void 0 : w.type) === 'paragraph' || (w == null ? void 0 : w.type) === 'text'
          ? ((w.raw +=
              `
` + x.raw),
            (w.text +=
              `
` + x.raw),
            (this.inlineQueue.at(-1).src = w.text))
          : this.tokens.links[x.tag] || (this.tokens.links[x.tag] = { href: x.href, title: x.title });
        continue;
      }
      if ((x = this.tokenizer.table(l))) {
        (l = l.substring(x.raw.length)), a.push(x);
        continue;
      }
      if ((x = this.tokenizer.lheading(l))) {
        (l = l.substring(x.raw.length)), a.push(x);
        continue;
      }
      let S = l;
      if ((v = this.options.extensions) != null && v.startBlock) {
        let w = 1 / 0;
        const b = l.slice(1);
        let N;
        this.options.extensions.startBlock.forEach((I) => {
          (N = I.call({ lexer: this }, b)), typeof N == 'number' && N >= 0 && (w = Math.min(w, N));
        }),
          w < 1 / 0 && w >= 0 && (S = l.substring(0, w + 1));
      }
      if (this.state.top && (x = this.tokenizer.paragraph(S))) {
        const w = a.at(-1);
        p && (w == null ? void 0 : w.type) === 'paragraph'
          ? ((w.raw +=
              `
` + x.raw),
            (w.text +=
              `
` + x.text),
            this.inlineQueue.pop(),
            (this.inlineQueue.at(-1).src = w.text))
          : a.push(x),
          (p = S.length !== l.length),
          (l = l.substring(x.raw.length));
        continue;
      }
      if ((x = this.tokenizer.text(l))) {
        l = l.substring(x.raw.length);
        const w = a.at(-1);
        (w == null ? void 0 : w.type) === 'text'
          ? ((w.raw +=
              `
` + x.raw),
            (w.text +=
              `
` + x.text),
            this.inlineQueue.pop(),
            (this.inlineQueue.at(-1).src = w.text))
          : a.push(x);
        continue;
      }
      if (l) {
        const w = 'Infinite loop on byte: ' + l.charCodeAt(0);
        if (this.options.silent) {
          console.error(w);
          break;
        } else throw new Error(w);
      }
    }
    return (this.state.top = !0), a;
  }
  inline(l, a = []) {
    return this.inlineQueue.push({ src: l, tokens: a }), a;
  }
  inlineTokens(l, a = []) {
    var x, S, w;
    let p = l,
      g = null;
    if (this.tokens.links) {
      const b = Object.keys(this.tokens.links);
      if (b.length > 0)
        for (; (g = this.tokenizer.rules.inline.reflinkSearch.exec(p)) != null; )
          b.includes(g[0].slice(g[0].lastIndexOf('[') + 1, -1)) &&
            (p =
              p.slice(0, g.index) +
              '[' +
              'a'.repeat(g[0].length - 2) +
              ']' +
              p.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (g = this.tokenizer.rules.inline.blockSkip.exec(p)) != null; )
      p =
        p.slice(0, g.index) +
        '[' +
        'a'.repeat(g[0].length - 2) +
        ']' +
        p.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (g = this.tokenizer.rules.inline.anyPunctuation.exec(p)) != null; )
      p = p.slice(0, g.index) + '++' + p.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let m = !1,
      v = '';
    for (; l; ) {
      m || (v = ''), (m = !1);
      let b;
      if (
        (S = (x = this.options.extensions) == null ? void 0 : x.inline) != null &&
        S.some((I) => ((b = I.call({ lexer: this }, l, a)) ? ((l = l.substring(b.raw.length)), a.push(b), !0) : !1))
      )
        continue;
      if ((b = this.tokenizer.escape(l))) {
        (l = l.substring(b.raw.length)), a.push(b);
        continue;
      }
      if ((b = this.tokenizer.tag(l))) {
        (l = l.substring(b.raw.length)), a.push(b);
        continue;
      }
      if ((b = this.tokenizer.link(l))) {
        (l = l.substring(b.raw.length)), a.push(b);
        continue;
      }
      if ((b = this.tokenizer.reflink(l, this.tokens.links))) {
        l = l.substring(b.raw.length);
        const I = a.at(-1);
        b.type === 'text' && (I == null ? void 0 : I.type) === 'text'
          ? ((I.raw += b.raw), (I.text += b.text))
          : a.push(b);
        continue;
      }
      if ((b = this.tokenizer.emStrong(l, p, v))) {
        (l = l.substring(b.raw.length)), a.push(b);
        continue;
      }
      if ((b = this.tokenizer.codespan(l))) {
        (l = l.substring(b.raw.length)), a.push(b);
        continue;
      }
      if ((b = this.tokenizer.br(l))) {
        (l = l.substring(b.raw.length)), a.push(b);
        continue;
      }
      if ((b = this.tokenizer.del(l))) {
        (l = l.substring(b.raw.length)), a.push(b);
        continue;
      }
      if ((b = this.tokenizer.autolink(l))) {
        (l = l.substring(b.raw.length)), a.push(b);
        continue;
      }
      if (!this.state.inLink && (b = this.tokenizer.url(l))) {
        (l = l.substring(b.raw.length)), a.push(b);
        continue;
      }
      let N = l;
      if ((w = this.options.extensions) != null && w.startInline) {
        let I = 1 / 0;
        const z = l.slice(1);
        let G;
        this.options.extensions.startInline.forEach((F) => {
          (G = F.call({ lexer: this }, z)), typeof G == 'number' && G >= 0 && (I = Math.min(I, G));
        }),
          I < 1 / 0 && I >= 0 && (N = l.substring(0, I + 1));
      }
      if ((b = this.tokenizer.inlineText(N))) {
        (l = l.substring(b.raw.length)), b.raw.slice(-1) !== '_' && (v = b.raw.slice(-1)), (m = !0);
        const I = a.at(-1);
        (I == null ? void 0 : I.type) === 'text' ? ((I.raw += b.raw), (I.text += b.text)) : a.push(b);
        continue;
      }
      if (l) {
        const I = 'Infinite loop on byte: ' + l.charCodeAt(0);
        if (this.options.silent) {
          console.error(I);
          break;
        } else throw new Error(I);
      }
    }
    return a;
  }
}
class rd {
  constructor(l) {
    Pt(this, 'options');
    Pt(this, 'parser');
    this.options = l || Is;
  }
  space(l) {
    return '';
  }
  code({ text: l, lang: a, escaped: p }) {
    var v;
    const g = (v = (a || '').match(fr.notSpaceStart)) == null ? void 0 : v[0],
      m =
        l.replace(fr.endingNewline, '') +
        `
`;
    return g
      ? '<pre><code class="language-' +
          vo(g) +
          '">' +
          (p ? m : vo(m, !0)) +
          `</code></pre>
`
      : '<pre><code>' +
          (p ? m : vo(m, !0)) +
          `</code></pre>
`;
  }
  blockquote({ tokens: l }) {
    return `<blockquote>
${this.parser.parse(l)}</blockquote>
`;
  }
  html({ text: l }) {
    return l;
  }
  heading({ tokens: l, depth: a }) {
    return `<h${a}>${this.parser.parseInline(l)}</h${a}>
`;
  }
  hr(l) {
    return `<hr>
`;
  }
  list(l) {
    const a = l.ordered,
      p = l.start;
    let g = '';
    for (let x = 0; x < l.items.length; x++) {
      const S = l.items[x];
      g += this.listitem(S);
    }
    const m = a ? 'ol' : 'ul',
      v = a && p !== 1 ? ' start="' + p + '"' : '';
    return (
      '<' +
      m +
      v +
      `>
` +
      g +
      '</' +
      m +
      `>
`
    );
  }
  listitem(l) {
    var p;
    let a = '';
    if (l.task) {
      const g = this.checkbox({ checked: !!l.checked });
      l.loose
        ? ((p = l.tokens[0]) == null ? void 0 : p.type) === 'paragraph'
          ? ((l.tokens[0].text = g + ' ' + l.tokens[0].text),
            l.tokens[0].tokens &&
              l.tokens[0].tokens.length > 0 &&
              l.tokens[0].tokens[0].type === 'text' &&
              ((l.tokens[0].tokens[0].text = g + ' ' + vo(l.tokens[0].tokens[0].text)),
              (l.tokens[0].tokens[0].escaped = !0)))
          : l.tokens.unshift({ type: 'text', raw: g + ' ', text: g + ' ', escaped: !0 })
        : (a += g + ' ');
    }
    return (
      (a += this.parser.parse(l.tokens, !!l.loose)),
      `<li>${a}</li>
`
    );
  }
  checkbox({ checked: l }) {
    return '<input ' + (l ? 'checked="" ' : '') + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: l }) {
    return `<p>${this.parser.parseInline(l)}</p>
`;
  }
  table(l) {
    let a = '',
      p = '';
    for (let m = 0; m < l.header.length; m++) p += this.tablecell(l.header[m]);
    a += this.tablerow({ text: p });
    let g = '';
    for (let m = 0; m < l.rows.length; m++) {
      const v = l.rows[m];
      p = '';
      for (let x = 0; x < v.length; x++) p += this.tablecell(v[x]);
      g += this.tablerow({ text: p });
    }
    return (
      g && (g = `<tbody>${g}</tbody>`),
      `<table>
<thead>
` +
        a +
        `</thead>
` +
        g +
        `</table>
`
    );
  }
  tablerow({ text: l }) {
    return `<tr>
${l}</tr>
`;
  }
  tablecell(l) {
    const a = this.parser.parseInline(l.tokens),
      p = l.header ? 'th' : 'td';
    return (
      (l.align ? `<${p} align="${l.align}">` : `<${p}>`) +
      a +
      `</${p}>
`
    );
  }
  strong({ tokens: l }) {
    return `<strong>${this.parser.parseInline(l)}</strong>`;
  }
  em({ tokens: l }) {
    return `<em>${this.parser.parseInline(l)}</em>`;
  }
  codespan({ text: l }) {
    return `<code>${vo(l, !0)}</code>`;
  }
  br(l) {
    return '<br>';
  }
  del({ tokens: l }) {
    return `<del>${this.parser.parseInline(l)}</del>`;
  }
  link({ href: l, title: a, tokens: p }) {
    const g = this.parser.parseInline(p),
      m = Dh(l);
    if (m === null) return g;
    l = m;
    let v = '<a href="' + l + '"';
    return a && (v += ' title="' + vo(a) + '"'), (v += '>' + g + '</a>'), v;
  }
  image({ href: l, title: a, text: p }) {
    const g = Dh(l);
    if (g === null) return vo(p);
    l = g;
    let m = `<img src="${l}" alt="${p}"`;
    return a && (m += ` title="${vo(a)}"`), (m += '>'), m;
  }
  text(l) {
    return 'tokens' in l && l.tokens
      ? this.parser.parseInline(l.tokens)
      : 'escaped' in l && l.escaped
        ? l.text
        : vo(l.text);
  }
}
class fg {
  strong({ text: l }) {
    return l;
  }
  em({ text: l }) {
    return l;
  }
  codespan({ text: l }) {
    return l;
  }
  del({ text: l }) {
    return l;
  }
  html({ text: l }) {
    return l;
  }
  text({ text: l }) {
    return l;
  }
  link({ text: l }) {
    return '' + l;
  }
  image({ text: l }) {
    return '' + l;
  }
  br() {
    return '';
  }
}
class hi {
  constructor(l) {
    Pt(this, 'options');
    Pt(this, 'renderer');
    Pt(this, 'textRenderer');
    (this.options = l || Is),
      (this.options.renderer = this.options.renderer || new rd()),
      (this.renderer = this.options.renderer),
      (this.renderer.options = this.options),
      (this.renderer.parser = this),
      (this.textRenderer = new fg());
  }
  static parse(l, a) {
    return new hi(a).parse(l);
  }
  static parseInline(l, a) {
    return new hi(a).parseInline(l);
  }
  parse(l, a = !0) {
    var g, m;
    let p = '';
    for (let v = 0; v < l.length; v++) {
      const x = l[v];
      if ((m = (g = this.options.extensions) == null ? void 0 : g.renderers) != null && m[x.type]) {
        const w = x,
          b = this.options.extensions.renderers[w.type].call({ parser: this }, w);
        if (
          b !== !1 ||
          !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(
            w.type
          )
        ) {
          p += b || '';
          continue;
        }
      }
      const S = x;
      switch (S.type) {
        case 'space': {
          p += this.renderer.space(S);
          continue;
        }
        case 'hr': {
          p += this.renderer.hr(S);
          continue;
        }
        case 'heading': {
          p += this.renderer.heading(S);
          continue;
        }
        case 'code': {
          p += this.renderer.code(S);
          continue;
        }
        case 'table': {
          p += this.renderer.table(S);
          continue;
        }
        case 'blockquote': {
          p += this.renderer.blockquote(S);
          continue;
        }
        case 'list': {
          p += this.renderer.list(S);
          continue;
        }
        case 'html': {
          p += this.renderer.html(S);
          continue;
        }
        case 'paragraph': {
          p += this.renderer.paragraph(S);
          continue;
        }
        case 'text': {
          let w = S,
            b = this.renderer.text(w);
          for (; v + 1 < l.length && l[v + 1].type === 'text'; )
            (w = l[++v]),
              (b +=
                `
` + this.renderer.text(w));
          a
            ? (p += this.renderer.paragraph({
                type: 'paragraph',
                raw: b,
                text: b,
                tokens: [{ type: 'text', raw: b, text: b, escaped: !0 }],
              }))
            : (p += b);
          continue;
        }
        default: {
          const w = 'Token with "' + S.type + '" type was not found.';
          if (this.options.silent) return console.error(w), '';
          throw new Error(w);
        }
      }
    }
    return p;
  }
  parseInline(l, a = this.renderer) {
    var g, m;
    let p = '';
    for (let v = 0; v < l.length; v++) {
      const x = l[v];
      if ((m = (g = this.options.extensions) == null ? void 0 : g.renderers) != null && m[x.type]) {
        const w = this.options.extensions.renderers[x.type].call({ parser: this }, x);
        if (
          w !== !1 ||
          !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(x.type)
        ) {
          p += w || '';
          continue;
        }
      }
      const S = x;
      switch (S.type) {
        case 'escape': {
          p += a.text(S);
          break;
        }
        case 'html': {
          p += a.html(S);
          break;
        }
        case 'link': {
          p += a.link(S);
          break;
        }
        case 'image': {
          p += a.image(S);
          break;
        }
        case 'strong': {
          p += a.strong(S);
          break;
        }
        case 'em': {
          p += a.em(S);
          break;
        }
        case 'codespan': {
          p += a.codespan(S);
          break;
        }
        case 'br': {
          p += a.br(S);
          break;
        }
        case 'del': {
          p += a.del(S);
          break;
        }
        case 'text': {
          p += a.text(S);
          break;
        }
        default: {
          const w = 'Token with "' + S.type + '" type was not found.';
          if (this.options.silent) return console.error(w), '';
          throw new Error(w);
        }
      }
    }
    return p;
  }
}
class Ac {
  constructor(l) {
    Pt(this, 'options');
    Pt(this, 'block');
    this.options = l || Is;
  }
  preprocess(l) {
    return l;
  }
  postprocess(l) {
    return l;
  }
  processAllTokens(l) {
    return l;
  }
  provideLexer() {
    return this.block ? gi.lex : gi.lexInline;
  }
  provideParser() {
    return this.block ? hi.parse : hi.parseInline;
  }
}
Pt(Ac, 'passThroughHooks', new Set(['preprocess', 'postprocess', 'processAllTokens']));
class AE {
  constructor(...l) {
    Pt(this, 'defaults', rg());
    Pt(this, 'options', this.setOptions);
    Pt(this, 'parse', this.parseMarkdown(!0));
    Pt(this, 'parseInline', this.parseMarkdown(!1));
    Pt(this, 'Parser', hi);
    Pt(this, 'Renderer', rd);
    Pt(this, 'TextRenderer', fg);
    Pt(this, 'Lexer', gi);
    Pt(this, 'Tokenizer', nd);
    Pt(this, 'Hooks', Ac);
    this.use(...l);
  }
  walkTokens(l, a) {
    var g, m;
    let p = [];
    for (const v of l)
      switch (((p = p.concat(a.call(this, v))), v.type)) {
        case 'table': {
          const x = v;
          for (const S of x.header) p = p.concat(this.walkTokens(S.tokens, a));
          for (const S of x.rows) for (const w of S) p = p.concat(this.walkTokens(w.tokens, a));
          break;
        }
        case 'list': {
          const x = v;
          p = p.concat(this.walkTokens(x.items, a));
          break;
        }
        default: {
          const x = v;
          (m = (g = this.defaults.extensions) == null ? void 0 : g.childTokens) != null && m[x.type]
            ? this.defaults.extensions.childTokens[x.type].forEach((S) => {
                const w = x[S].flat(1 / 0);
                p = p.concat(this.walkTokens(w, a));
              })
            : x.tokens && (p = p.concat(this.walkTokens(x.tokens, a)));
        }
      }
    return p;
  }
  use(...l) {
    const a = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return (
      l.forEach((p) => {
        const g = { ...p };
        if (
          ((g.async = this.defaults.async || g.async || !1),
          p.extensions &&
            (p.extensions.forEach((m) => {
              if (!m.name) throw new Error('extension name required');
              if ('renderer' in m) {
                const v = a.renderers[m.name];
                v
                  ? (a.renderers[m.name] = function (...x) {
                      let S = m.renderer.apply(this, x);
                      return S === !1 && (S = v.apply(this, x)), S;
                    })
                  : (a.renderers[m.name] = m.renderer);
              }
              if ('tokenizer' in m) {
                if (!m.level || (m.level !== 'block' && m.level !== 'inline'))
                  throw new Error("extension level must be 'block' or 'inline'");
                const v = a[m.level];
                v ? v.unshift(m.tokenizer) : (a[m.level] = [m.tokenizer]),
                  m.start &&
                    (m.level === 'block'
                      ? a.startBlock
                        ? a.startBlock.push(m.start)
                        : (a.startBlock = [m.start])
                      : m.level === 'inline' &&
                        (a.startInline ? a.startInline.push(m.start) : (a.startInline = [m.start])));
              }
              'childTokens' in m && m.childTokens && (a.childTokens[m.name] = m.childTokens);
            }),
            (g.extensions = a)),
          p.renderer)
        ) {
          const m = this.defaults.renderer || new rd(this.defaults);
          for (const v in p.renderer) {
            if (!(v in m)) throw new Error(`renderer '${v}' does not exist`);
            if (['options', 'parser'].includes(v)) continue;
            const x = v,
              S = p.renderer[x],
              w = m[x];
            m[x] = (...b) => {
              let N = S.apply(m, b);
              return N === !1 && (N = w.apply(m, b)), N || '';
            };
          }
          g.renderer = m;
        }
        if (p.tokenizer) {
          const m = this.defaults.tokenizer || new nd(this.defaults);
          for (const v in p.tokenizer) {
            if (!(v in m)) throw new Error(`tokenizer '${v}' does not exist`);
            if (['options', 'rules', 'lexer'].includes(v)) continue;
            const x = v,
              S = p.tokenizer[x],
              w = m[x];
            m[x] = (...b) => {
              let N = S.apply(m, b);
              return N === !1 && (N = w.apply(m, b)), N;
            };
          }
          g.tokenizer = m;
        }
        if (p.hooks) {
          const m = this.defaults.hooks || new Ac();
          for (const v in p.hooks) {
            if (!(v in m)) throw new Error(`hook '${v}' does not exist`);
            if (['options', 'block'].includes(v)) continue;
            const x = v,
              S = p.hooks[x],
              w = m[x];
            Ac.passThroughHooks.has(v)
              ? (m[x] = (b) => {
                  if (this.defaults.async) return Promise.resolve(S.call(m, b)).then((I) => w.call(m, I));
                  const N = S.call(m, b);
                  return w.call(m, N);
                })
              : (m[x] = (...b) => {
                  let N = S.apply(m, b);
                  return N === !1 && (N = w.apply(m, b)), N;
                });
          }
          g.hooks = m;
        }
        if (p.walkTokens) {
          const m = this.defaults.walkTokens,
            v = p.walkTokens;
          g.walkTokens = function (x) {
            let S = [];
            return S.push(v.call(this, x)), m && (S = S.concat(m.call(this, x))), S;
          };
        }
        this.defaults = { ...this.defaults, ...g };
      }),
      this
    );
  }
  setOptions(l) {
    return (this.defaults = { ...this.defaults, ...l }), this;
  }
  lexer(l, a) {
    return gi.lex(l, a ?? this.defaults);
  }
  parser(l, a) {
    return hi.parse(l, a ?? this.defaults);
  }
  parseMarkdown(l) {
    return (p, g) => {
      const m = { ...g },
        v = { ...this.defaults, ...m },
        x = this.onError(!!v.silent, !!v.async);
      if (this.defaults.async === !0 && m.async === !1)
        return x(
          new Error(
            'marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.'
          )
        );
      if (typeof p > 'u' || p === null) return x(new Error('marked(): input parameter is undefined or null'));
      if (typeof p != 'string')
        return x(
          new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(p) + ', string expected')
        );
      v.hooks && ((v.hooks.options = v), (v.hooks.block = l));
      const S = v.hooks ? v.hooks.provideLexer() : l ? gi.lex : gi.lexInline,
        w = v.hooks ? v.hooks.provideParser() : l ? hi.parse : hi.parseInline;
      if (v.async)
        return Promise.resolve(v.hooks ? v.hooks.preprocess(p) : p)
          .then((b) => S(b, v))
          .then((b) => (v.hooks ? v.hooks.processAllTokens(b) : b))
          .then((b) => (v.walkTokens ? Promise.all(this.walkTokens(b, v.walkTokens)).then(() => b) : b))
          .then((b) => w(b, v))
          .then((b) => (v.hooks ? v.hooks.postprocess(b) : b))
          .catch(x);
      try {
        v.hooks && (p = v.hooks.preprocess(p));
        let b = S(p, v);
        v.hooks && (b = v.hooks.processAllTokens(b)), v.walkTokens && this.walkTokens(b, v.walkTokens);
        let N = w(b, v);
        return v.hooks && (N = v.hooks.postprocess(N)), N;
      } catch (b) {
        return x(b);
      }
    };
  }
  onError(l, a) {
    return (p) => {
      if (
        ((p.message += `
Please report this to https://github.com/markedjs/marked.`),
        l)
      ) {
        const g = '<p>An error occurred:</p><pre>' + vo(p.message + '', !0) + '</pre>';
        return a ? Promise.resolve(g) : g;
      }
      if (a) return Promise.reject(p);
      throw p;
    };
  }
}
const Os = new AE();
function xt(d, l) {
  return Os.parse(d, l);
}
xt.options = xt.setOptions = function (d) {
  return Os.setOptions(d), (xt.defaults = Os.defaults), im(xt.defaults), xt;
};
xt.getDefaults = rg;
xt.defaults = Is;
xt.use = function (...d) {
  return Os.use(...d), (xt.defaults = Os.defaults), im(xt.defaults), xt;
};
xt.walkTokens = function (d, l) {
  return Os.walkTokens(d, l);
};
xt.parseInline = Os.parseInline;
xt.Parser = hi;
xt.parser = hi.parse;
xt.Renderer = rd;
xt.TextRenderer = fg;
xt.Lexer = gi;
xt.lexer = gi.lex;
xt.Tokenizer = nd;
xt.Hooks = Ac;
xt.parse = xt;
xt.options;
xt.setOptions;
xt.use;
xt.walkTokens;
xt.parseInline;
hi.parse;
gi.lex;
function OE(d) {
  if ((typeof d == 'function' && (d = { highlight: d }), !d || typeof d.highlight != 'function'))
    throw new Error('Must provide highlight function');
  return (
    typeof d.langPrefix != 'string' && (d.langPrefix = 'language-'),
    typeof d.emptyLangClass != 'string' && (d.emptyLangClass = ''),
    {
      async: !!d.async,
      walkTokens(l) {
        if (l.type !== 'code') return;
        const a = Uh(l.lang);
        if (d.async) return Promise.resolve(d.highlight(l.text, a, l.lang || '')).then(zh(l));
        const p = d.highlight(l.text, a, l.lang || '');
        if (p instanceof Promise)
          throw new Error(
            'markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.'
          );
        zh(l)(p);
      },
      useNewRenderer: !0,
      renderer: {
        code(l, a, p) {
          typeof l == 'object' && ((p = l.escaped), (a = l.lang), (l = l.text));
          const g = Uh(a),
            m = g ? d.langPrefix + Fh(g) : d.emptyLangClass,
            v = m ? ` class="${m}"` : '';
          return (
            (l = l.replace(/\n$/, '')),
            `<pre><code${v}>${p ? l : Fh(l, !0)}
</code></pre>`
          );
        },
      },
    }
  );
}
function Uh(d) {
  return (d || '').match(/\S*/)[0];
}
function zh(d) {
  return (l) => {
    typeof l == 'string' && l !== d.text && ((d.escaped = !0), (d.text = l));
  };
}
const hm = /[&<>"']/,
  ME = new RegExp(hm.source, 'g'),
  mm = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  IE = new RegExp(mm.source, 'g'),
  LE = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
  $h = (d) => LE[d];
function Fh(d, l) {
  if (l) {
    if (hm.test(d)) return d.replace(ME, $h);
  } else if (mm.test(d)) return d.replace(IE, $h);
  return d;
}
xt.use(
  OE({
    langPrefix: 'hljs language-',
    highlight(d, l) {
      const a = Xp.getLanguage(l) ? l : 'plaintext';
      return Xp.highlight(d, { language: a }).value;
    },
  })
);
xt.use({
  gfm: !0,
  breaks: !0,
  renderer: {
    code(d, l) {
      return `
        <div class="relative group">
          <button
            class="hover:cursor-pointer
            absolute right-2 top-2 opacity-0
            group-hover:opacity-100 transition-opacity
            duration-200 px-2 py-1 rounded text-sm
            bg-white/10 hover:bg-white/20 text-gray-400
            hover:text-gray-300"
            onclick="(function(btn){
              const code = btn.parentElement.querySelector('code').textContent;
              if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(code).then(() => {
                  btn.textContent = '复制成功！';
                  setTimeout(() => btn.textContent = '复制', 1000);
                });
              } else {
                const textArea = document.createElement('textarea');
                textArea.value = code;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                document.body.appendChild(textArea);
                textArea.select();
                try {
                  document.execCommand('copy');
                  btn.textContent = '复制成功！';
                  setTimeout(() => btn.textContent = '复制', 1000);
                } catch (error) {
                  console.error('Copy failed', error);
                  btn.textContent = '复制失败！';
                  setTimeout(() => btn.textContent = '复制', 1000);
                } finally {
                  textArea.remove();
                }
              }
            })(this)">
            复制
          </button><pre><code class="hljs language-${Xp.getLanguage(l || '') ? l : 'plaintext'}">${d.text}</code></pre>
        </div>`;
    },
    codespan(d) {
      return `<code class="inline-code">${d.text}</code>`;
    },
  },
});
const DE = () => {
    const d = Xh(),
      [l, a] = ye.useState();
    return (
      console.log('params', d, l == null ? void 0 : l.content),
      ye.useEffect(() => {
        const p = iu.find((g) => g.id === d.id);
        a(p);
      }, [d]),
      l
        ? qe.jsxs('div', {
            className: 'mt-10',
            children: [
              qe.jsx('h1', { className: 'my-6 text-3xl font-bold', children: l.title }),
              qe.jsx('div', {
                className: 'mb-4 text-sm text-stone-400',
                children: `发布于 ${Qp(l.date).format('YYYY.MM.DD')}`,
              }),
              qe.jsx('article', {
                className:
                  'prose prose-stone lg:prose-lg dark:prose-invert prose-headings:font-bold /* 只对标题使用粗体 */ prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-a:text-blue-600 max-w-none !font-normal [&_pre]:!m-0 [&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre_code]:!font-mono [&_pre_code]:!text-sm',
                dangerouslySetInnerHTML: { __html: xt.parse(l.content) },
              }),
              qe.jsx('footer', {}),
            ],
          })
        : qe.jsx('div', { children: '404' })
    );
  },
  PE = () => {
    const [d, l] = ye.useState([]);
    return (
      ye.useEffect(() => {
        const a = iu.reduce(
            (g, m) => (
              m.tags.forEach((v) => {
                g[v] = (g[v] || 0) + 1;
              }),
              g
            ),
            {}
          ),
          p = Object.entries(a).map(([g, m]) => ({ name: g, count: m }));
        l(p);
      }, [iu]),
      qe.jsx('div', {
        className: 'mt-10 text-center',
        children: qe.jsx('ul', {
          className: 'm-0 flex flex-wrap justify-center p-0',
          children: d.map((a) =>
            qe.jsxs(
              'li',
              {
                className: 'm-2 ml-0 flex flex-[46%] items-center text-left',
                children: [
                  qe.jsx(ny, {}),
                  qe.jsx(nm, {
                    to: `/tags/${a.name}`,
                    children: qe.jsx('span', {
                      className: 'hover:text-emerald-300 active:text-emerald-300',
                      children: a.name,
                    }),
                  }),
                  qe.jsx('span', {
                    className: 'relative left-[4px] top-[-6px] text-xs text-[#999]',
                    children: a.count,
                  }),
                ],
              },
              a.name
            )
          ),
        }),
      })
    );
  },
  BE = () => {
    const { tag: d } = Xh(),
      l = iu.filter((a) => a.tags.includes(d || ''));
    return console.log('filteredArticles', iu, l), qe.jsx(rm, { articles: l });
  },
  UE = () =>
    qe.jsxs('div', {
      className: 'relative mt-10',
      children: [
        qe.jsx('h1', { className: 'text-2xl font-bold', children: "👋 Hi, I'm PercyKuang 👨‍💻‍" }),
        qe.jsx('p', {
          className: 'mt-4 text-base leading-10',
          children:
            '一个专注于前端开发的工程师，喜欢研究技术，喜欢分享，喜欢学习，喜欢思考。大学毕业后在字节跳动的飞书部门工作了三年，对 B 端产品有深入的了解，对用户体验有深入的思考，享受将一个个想法落地成现实的过程。具体到技术方面，对工程化、组件化、 框架原理、性能优化、代码规范等都有深入的了解和实践，我也喜欢将这些技术以及思考记录下来，如果你对我研究的东西感兴趣，可以关注我的博客内容。',
        }),
        qe.jsx('p', {
          className: 'mt-1 text-base leading-10',
          children: '工作之外，我喜欢看电影、听音乐、打游戏，如果假期时间比较长，我也会出去旅游，看看外面的世界。',
        }),
      ],
    }),
  zE = () =>
    qe.jsxs('div', {
      className: 'max-w-192 mx-auto mb-0 mt-10 pb-20',
      children: [
        qe.jsx(ty, {}),
        qe.jsx('div', {
          className: 'max-md:mx-4 max-md:my-0',
          children: qe.jsx(X0, {
            children: qe.jsxs(G0, {
              children: [
                qe.jsx(ru, { path: '/', element: qe.jsx(uy, {}) }),
                qe.jsx(ru, { path: '/tags', element: qe.jsx(PE, {}) }),
                qe.jsx(ru, { path: '/tags/:tag', element: qe.jsx(BE, {}) }),
                qe.jsx(ru, { path: '/articles/:id', element: qe.jsx(DE, {}) }),
                qe.jsx(ru, { path: '/about-me', element: qe.jsx(UE, {}) }),
              ],
            }),
          }),
        }),
      ],
    });
jv.createRoot(document.getElementById('root')).render(qe.jsx(ye.StrictMode, { children: qe.jsx(zE, {}) }));
