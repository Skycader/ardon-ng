// @ts-nocheck
export const panzoom = (t, e = {}) => {
  const o = !1 !== e.pan,
    n = !1 !== e.zoom,
    r = ['inner', 'outer', 'none'].includes(e.bound) ? e.bound : 'inner',
    a = e.wheel_step > 0.01 && e.wheel_step < 4 ? e.wheel_step : 0.2,
    i = e.scale_min > 0.01 && e.scale_min < 20 ? e.scale_min : 0.01,
    f =
      e.scale_max > 0.01 && e.scale_max < 20
        ? e.scale_max > i
          ? e.scale_max
          : i
        : 10;
  let s,
    h,
    g,
    c,
    u,
    p,
    d,
    l,
    m,
    x,
    W,
    H,
    M = !1,
    v = !1;
  function y(t, e, o) {
    (s += e),
      (h += o),
      'none' !== r &&
        ((s = Math.min(Math.max(g, s), u)), (h = Math.min(Math.max(c, h), p))),
      (t.style.left = s + 'px'),
      (t.style.top = h + 'px');
  }
  function w(t, e, o, n) {
    const a = new WebKitCSSMatrix(
        getComputedStyle(t).getPropertyValue('transform'),
      ),
      { a: s, b: h, c: g, d: c, e: u, f: p } = a,
      { x: d, y: l, width: m, height: x } = t.getBoundingClientRect(),
      {
        x: W,
        y: H,
        width: M,
        height: v,
      } = t.parentNode.getBoundingClientRect();
    let y,
      w,
      N,
      P,
      T,
      C,
      X,
      Y,
      b,
      _,
      L,
      E,
      S = s + (e *= s);
    if ('inner' == r)
      (N = M / t.offsetWidth),
        (P = v / t.offsetHeight),
        S > (T = Math.min(N, P, f)) && (e = 0),
        (S = Math.min(Math.max(i, S), T));
    else if ('outer' == r) {
      if (
        ((C = M / t.offsetWidth),
        (X = v / t.offsetHeight),
        S < (Y = Math.max(C, X, i)) || S > f)
      )
        return;
    } else
      'none' == r &&
        ((S < i || S > f) && (e = 0), (S = Math.min(Math.max(i, S), f)));
    (y = t.offsetLeft + e * (t.offsetWidth / 2 - o)),
      (w = t.offsetTop + e * (t.offsetHeight / 2 - n)),
      'inner' == r
        ? ((b = (t.offsetWidth / 2) * (S - 1) - u),
          (_ = (t.offsetHeight / 2) * (S - 1) - p),
          (L =
            t.parentNode.offsetWidth -
            t.offsetWidth -
            (t.offsetWidth / 2) * (S - 1) -
            u),
          (E =
            t.parentNode.offsetHeight -
            t.offsetHeight -
            (t.offsetHeight / 2) * (S - 1) -
            p),
          (y = Math.min(Math.max(b, y), L)),
          (w = Math.min(Math.max(_, w), E)))
        : 'outer' == r &&
          ((L = (t.offsetWidth / 2) * (S - 1) - u),
          (E = (t.offsetHeight / 2) * (S - 1) - p),
          (b =
            t.parentNode.offsetWidth -
            t.offsetWidth -
            (t.offsetWidth / 2) * (S - 1) -
            u),
          (_ =
            t.parentNode.offsetHeight -
            t.offsetHeight -
            (t.offsetHeight / 2) * (S - 1) -
            p),
          (y = Math.min(Math.max(b, y), L)),
          (w = Math.min(Math.max(_, w), E)));
    const D = `matrix(${S}, ${h}, ${g}, ${S}, ${u}, ${p})`;
    (t.style.transform = D),
      (t.style.left = y + 'px'),
      (t.style.top = w + 'px');
  }
  function N(t) {
    if (t.target !== t.currentTarget) return;
    t.preventDefault(),
      t.stopPropagation(),
      (l = window.visualViewport.scale),
      (m = window.devicePixelRatio),
      (s = t.target.offsetLeft),
      (h = t.target.offsetTop);
    const e = new WebKitCSSMatrix(
        getComputedStyle(t.target).getPropertyValue('transform'),
      ),
      { a: o, b: n, c: a, d: i, e: f, f: x } = e,
      W = o;
    'inner' == r
      ? ((g = (t.target.offsetWidth / 2) * (W - 1) - f),
        (c = (t.target.offsetHeight / 2) * (W - 1) - x),
        (u =
          t.target.parentNode.offsetWidth -
          t.target.offsetWidth -
          (t.target.offsetWidth / 2) * (W - 1) -
          f),
        (p =
          t.target.parentNode.offsetHeight -
          t.target.offsetHeight -
          (t.target.offsetHeight / 2) * (W - 1) -
          x))
      : 'outer' == r &&
        ((u = (t.target.offsetWidth / 2) * (W - 1) - f),
        (p = (t.target.offsetHeight / 2) * (W - 1) - x),
        (g =
          t.target.parentNode.offsetWidth -
          t.target.offsetWidth -
          (t.target.offsetWidth / 2) * (W - 1) -
          f),
        (c =
          t.target.parentNode.offsetHeight -
          t.target.offsetHeight -
          (t.target.offsetHeight / 2) * (W - 1) -
          x));
    const {
        x: H,
        y: M,
        width: v,
        height: y,
      } = t.target.parentNode.getBoundingClientRect(),
      w = t.target.parentNode.offsetWidth;
    (d = v / w), t.target.setPointerCapture(t.pointerId);
  }
  function P(t) {
    if (t.target !== t.currentTarget) return;
    if (v) return;
    if (!t.target.hasPointerCapture(t.pointerId)) return;
    t.preventDefault(), t.stopPropagation();
    const e = t.movementX / d / m,
      o = t.movementY / d / m;
    y(t.target, e, o);
  }
  function T(t) {
    t.preventDefault(),
      t.stopPropagation(),
      t.target.releasePointerCapture(t.pointerId);
  }
  function C(t) {
    t.target === t.currentTarget &&
      (t.preventDefault(),
      t.stopPropagation(),
      (v = !0),
      2 == t.targetTouches.length &&
        ((M = !0),
        (H = Math.hypot(
          t.touches[0].pageX - t.touches[1].pageX,
          t.touches[0].pageY - t.touches[1].pageY,
        ))),
      (x = t.touches[0].pageX),
      (W = t.touches[0].pageY));
  }
  function X(t) {
    if (t.target === t.currentTarget)
      if (2 == t.targetTouches.length && 2 == t.changedTouches.length) {
        const e = t.touches[0].pageX - t.touches[1].pageX,
          o = t.touches[0].pageY - t.touches[1].pageY,
          n = Math.hypot(e, o),
          r = (n - H) / 50;
        H = n;
        const {
            x: a,
            y: i,
            width: f,
            height: s,
          } = t.target.getBoundingClientRect(),
          h = ((t.touches[0].clientX - a) / f) * t.target.offsetWidth,
          g = ((t.touches[0].clientY - i) / s) * t.target.offsetHeight,
          c =
            h +
            (((t.touches[1].clientX - a) / f) * t.target.offsetWidth - h) / 2,
          u =
            g +
            (((t.touches[1].clientY - i) / s) * t.target.offsetHeight - g) / 2;
        w(t.target, r, c, u);
      } else if (1 == t.targetTouches.length && !M) {
        const e = (t.touches[0].pageX - x) / d,
          o = (t.touches[0].pageY - W) / d;
        (x = t.touches[0].pageX), (W = t.touches[0].pageY), y(t.target, e, o);
      }
  }
  function Y(t) {
    0 == t.targetTouches.length && ((v = !1), (M = !1));
  }
  function b(t) {
    if ((t.preventDefault(), t.stopPropagation(), t.target !== t.currentTarget))
      return;
    const e = (t.wheelDelta * a) / 120;
    w(t.target, e, t.offsetX, t.offsetY);
  }
  return (
    document.querySelectorAll(':scope ' + t).forEach((t) => {
      (function (t) {
        const e = t.offsetWidth,
          o = t.parentNode.offsetWidth,
          n = t.offsetHeight,
          a = t.parentNode.offsetHeight;
        if (e > o) {
          if ('inner' == r && (e > o || n > a))
            return (
              console.error(
                "panzoom() error: In the 'inner' mode, with or height must be smaller than its container (parent)",
              ),
              !1
            );
          if ('outer' == r && (e < o || n < a))
            return (
              console.error(
                "panzoom() error: In the 'outer' mode, with or height must be larger than its container (parent)",
              ),
              !1
            );
        }
        return (
          (t.style.position = 'absolute'),
          t.style.removeProperty('margin'),
          (t.style.backgroundSize = 'cover'),
          !0
        );
      })(t) &&
        (n && t.addEventListener('wheel', b, { passive: !1 }),
        o &&
          (t.addEventListener('touchstart', C),
          t.addEventListener('touchmove', X),
          t.addEventListener('touchend', Y),
          t.addEventListener('pointerdown', N),
          t.addEventListener('pointerup', T),
          t.addEventListener('pointermove', P)));
    }),
    !0
  );
};
