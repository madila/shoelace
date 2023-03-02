import {
  popup_styles_default
} from "./chunk.L7HHPR7P.js";
import {
  o
} from "./chunk.KGFCQ6E5.js";
import {
  ShoelaceElement,
  e,
  e2,
  i
} from "./chunk.2TGDKYZZ.js";
import {
  y
} from "./chunk.CBCVEM3I.js";
import {
  __decorateClass,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk.LKA3TPUC.js";

// node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs
function t(t2) {
  return t2.split("-")[1];
}
function e3(t2) {
  return "y" === t2 ? "height" : "width";
}
function n(t2) {
  return t2.split("-")[0];
}
function o2(t2) {
  return ["top", "bottom"].includes(n(t2)) ? "x" : "y";
}
function i2(i4, r3, a3) {
  let { reference: l3, floating: s3 } = i4;
  const c3 = l3.x + l3.width / 2 - s3.width / 2, f3 = l3.y + l3.height / 2 - s3.height / 2, m3 = o2(r3), u3 = e3(m3), g3 = l3[u3] / 2 - s3[u3] / 2, d3 = "x" === m3;
  let p3;
  switch (n(r3)) {
    case "top":
      p3 = { x: c3, y: l3.y - s3.height };
      break;
    case "bottom":
      p3 = { x: c3, y: l3.y + l3.height };
      break;
    case "right":
      p3 = { x: l3.x + l3.width, y: f3 };
      break;
    case "left":
      p3 = { x: l3.x - s3.width, y: f3 };
      break;
    default:
      p3 = { x: l3.x, y: l3.y };
  }
  switch (t(r3)) {
    case "start":
      p3[m3] -= g3 * (a3 && d3 ? -1 : 1);
      break;
    case "end":
      p3[m3] += g3 * (a3 && d3 ? -1 : 1);
  }
  return p3;
}
var r = async (t2, e4, n3) => {
  const { placement: o4 = "bottom", strategy: r3 = "absolute", middleware: a3 = [], platform: l3 } = n3, s3 = a3.filter(Boolean), c3 = await (null == l3.isRTL ? void 0 : l3.isRTL(e4));
  let f3 = await l3.getElementRects({ reference: t2, floating: e4, strategy: r3 }), { x: m3, y: u3 } = i2(f3, o4, c3), g3 = o4, d3 = {}, p3 = 0;
  for (let n4 = 0; n4 < s3.length; n4++) {
    const { name: a4, fn: h3 } = s3[n4], { x: y4, y: x3, data: w3, reset: v3 } = await h3({ x: m3, y: u3, initialPlacement: o4, placement: g3, strategy: r3, middlewareData: d3, rects: f3, platform: l3, elements: { reference: t2, floating: e4 } });
    m3 = null != y4 ? y4 : m3, u3 = null != x3 ? x3 : u3, d3 = __spreadProps(__spreadValues({}, d3), { [a4]: __spreadValues(__spreadValues({}, d3[a4]), w3) }), v3 && p3 <= 50 && (p3++, "object" == typeof v3 && (v3.placement && (g3 = v3.placement), v3.rects && (f3 = true === v3.rects ? await l3.getElementRects({ reference: t2, floating: e4, strategy: r3 }) : v3.rects), { x: m3, y: u3 } = i2(f3, g3, c3)), n4 = -1);
  }
  return { x: m3, y: u3, placement: g3, strategy: r3, middlewareData: d3 };
};
function a(t2) {
  return "number" != typeof t2 ? function(t3) {
    return __spreadValues({ top: 0, right: 0, bottom: 0, left: 0 }, t3);
  }(t2) : { top: t2, right: t2, bottom: t2, left: t2 };
}
function l(t2) {
  return __spreadProps(__spreadValues({}, t2), { top: t2.y, left: t2.x, right: t2.x + t2.width, bottom: t2.y + t2.height });
}
async function s(t2, e4) {
  var n3;
  void 0 === e4 && (e4 = {});
  const { x: o4, y: i4, platform: r3, rects: s3, elements: c3, strategy: f3 } = t2, { boundary: m3 = "clippingAncestors", rootBoundary: u3 = "viewport", elementContext: g3 = "floating", altBoundary: d3 = false, padding: p3 = 0 } = e4, h3 = a(p3), y4 = c3[d3 ? "floating" === g3 ? "reference" : "floating" : g3], x3 = l(await r3.getClippingRect({ element: null == (n3 = await (null == r3.isElement ? void 0 : r3.isElement(y4))) || n3 ? y4 : y4.contextElement || await (null == r3.getDocumentElement ? void 0 : r3.getDocumentElement(c3.floating)), boundary: m3, rootBoundary: u3, strategy: f3 })), w3 = "floating" === g3 ? __spreadProps(__spreadValues({}, s3.floating), { x: o4, y: i4 }) : s3.reference, v3 = await (null == r3.getOffsetParent ? void 0 : r3.getOffsetParent(c3.floating)), b3 = await (null == r3.isElement ? void 0 : r3.isElement(v3)) && await (null == r3.getScale ? void 0 : r3.getScale(v3)) || { x: 1, y: 1 }, R2 = l(r3.convertOffsetParentRelativeRectToViewportRelativeRect ? await r3.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w3, offsetParent: v3, strategy: f3 }) : w3);
  return { top: (x3.top - R2.top + h3.top) / b3.y, bottom: (R2.bottom - x3.bottom + h3.bottom) / b3.y, left: (x3.left - R2.left + h3.left) / b3.x, right: (R2.right - x3.right + h3.right) / b3.x };
}
var c = Math.min;
var f = Math.max;
function m(t2, e4, n3) {
  return f(t2, c(e4, n3));
}
var u = (n3) => ({ name: "arrow", options: n3, async fn(i4) {
  const { element: r3, padding: l3 = 0 } = n3 || {}, { x: s3, y: c3, placement: f3, rects: u3, platform: g3, elements: d3 } = i4;
  if (null == r3)
    return {};
  const p3 = a(l3), h3 = { x: s3, y: c3 }, y4 = o2(f3), x3 = e3(y4), w3 = await g3.getDimensions(r3), v3 = "y" === y4, b3 = v3 ? "top" : "left", R2 = v3 ? "bottom" : "right", A2 = v3 ? "clientHeight" : "clientWidth", P3 = u3.reference[x3] + u3.reference[y4] - h3[y4] - u3.floating[x3], T3 = h3[y4] - u3.reference[y4], O3 = await (null == g3.getOffsetParent ? void 0 : g3.getOffsetParent(r3));
  let E3 = O3 ? O3[A2] : 0;
  E3 && await (null == g3.isElement ? void 0 : g3.isElement(O3)) || (E3 = d3.floating[A2] || u3.floating[x3]);
  const D3 = P3 / 2 - T3 / 2, L3 = p3[b3], k2 = E3 - w3[x3] - p3[R2], B = E3 / 2 - w3[x3] / 2 + D3, C2 = m(L3, B, k2), H2 = null != t(f3) && B != C2 && u3.reference[x3] / 2 - (B < L3 ? p3[b3] : p3[R2]) - w3[x3] / 2 < 0;
  return { [y4]: h3[y4] - (H2 ? B < L3 ? L3 - B : k2 - B : 0), data: { [y4]: C2, centerOffset: B - C2 } };
} });
var g = ["top", "right", "bottom", "left"];
var d = g.reduce((t2, e4) => t2.concat(e4, e4 + "-start", e4 + "-end"), []);
var p = { left: "right", right: "left", bottom: "top", top: "bottom" };
function h(t2) {
  return t2.replace(/left|right|bottom|top/g, (t3) => p[t3]);
}
function y2(n3, i4, r3) {
  void 0 === r3 && (r3 = false);
  const a3 = t(n3), l3 = o2(n3), s3 = e3(l3);
  let c3 = "x" === l3 ? a3 === (r3 ? "end" : "start") ? "right" : "left" : "start" === a3 ? "bottom" : "top";
  return i4.reference[s3] > i4.floating[s3] && (c3 = h(c3)), { main: c3, cross: h(c3) };
}
var x = { start: "end", end: "start" };
function w(t2) {
  return t2.replace(/start|end/g, (t3) => x[t3]);
}
var b = function(e4) {
  return void 0 === e4 && (e4 = {}), { name: "flip", options: e4, async fn(o4) {
    var i4;
    const { placement: r3, middlewareData: a3, rects: l3, initialPlacement: c3, platform: f3, elements: m3 } = o4, _a = e4, { mainAxis: u3 = true, crossAxis: g3 = true, fallbackPlacements: d3, fallbackStrategy: p3 = "bestFit", fallbackAxisSideDirection: x3 = "none", flipAlignment: v3 = true } = _a, b3 = __objRest(_a, ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment"]), R2 = n(r3), A2 = n(c3) === c3, P3 = await (null == f3.isRTL ? void 0 : f3.isRTL(m3.floating)), T3 = d3 || (A2 || !v3 ? [h(c3)] : function(t2) {
      const e5 = h(t2);
      return [w(t2), e5, w(e5)];
    }(c3));
    d3 || "none" === x3 || T3.push(...function(e5, o5, i5, r4) {
      const a4 = t(e5);
      let l4 = function(t2, e6, n3) {
        const o6 = ["left", "right"], i6 = ["right", "left"], r5 = ["top", "bottom"], a5 = ["bottom", "top"];
        switch (t2) {
          case "top":
          case "bottom":
            return n3 ? e6 ? i6 : o6 : e6 ? o6 : i6;
          case "left":
          case "right":
            return e6 ? r5 : a5;
          default:
            return [];
        }
      }(n(e5), "start" === i5, r4);
      return a4 && (l4 = l4.map((t2) => t2 + "-" + a4), o5 && (l4 = l4.concat(l4.map(w)))), l4;
    }(c3, v3, x3, P3));
    const O3 = [c3, ...T3], E3 = await s(o4, b3), D3 = [];
    let L3 = (null == (i4 = a3.flip) ? void 0 : i4.overflows) || [];
    if (u3 && D3.push(E3[R2]), g3) {
      const { main: t2, cross: e5 } = y2(r3, l3, P3);
      D3.push(E3[t2], E3[e5]);
    }
    if (L3 = [...L3, { placement: r3, overflows: D3 }], !D3.every((t2) => t2 <= 0)) {
      var k2, B;
      const t2 = ((null == (k2 = a3.flip) ? void 0 : k2.index) || 0) + 1, e5 = O3[t2];
      if (e5)
        return { data: { index: t2, overflows: L3 }, reset: { placement: e5 } };
      let n3 = null == (B = L3.filter((t3) => t3.overflows[0] <= 0).sort((t3, e6) => t3.overflows[1] - e6.overflows[1])[0]) ? void 0 : B.placement;
      if (!n3)
        switch (p3) {
          case "bestFit": {
            var C2;
            const t3 = null == (C2 = L3.map((t4) => [t4.placement, t4.overflows.filter((t5) => t5 > 0).reduce((t5, e6) => t5 + e6, 0)]).sort((t4, e6) => t4[1] - e6[1])[0]) ? void 0 : C2[0];
            t3 && (n3 = t3);
            break;
          }
          case "initialPlacement":
            n3 = c3;
        }
      if (r3 !== n3)
        return { reset: { placement: n3 } };
    }
    return {};
  } };
};
var O = function(e4) {
  return void 0 === e4 && (e4 = 0), { name: "offset", options: e4, async fn(i4) {
    const { x: r3, y: a3 } = i4, l3 = await async function(e5, i5) {
      const { placement: r4, platform: a4, elements: l4 } = e5, s3 = await (null == a4.isRTL ? void 0 : a4.isRTL(l4.floating)), c3 = n(r4), f3 = t(r4), m3 = "x" === o2(r4), u3 = ["left", "top"].includes(c3) ? -1 : 1, g3 = s3 && m3 ? -1 : 1, d3 = "function" == typeof i5 ? i5(e5) : i5;
      let { mainAxis: p3, crossAxis: h3, alignmentAxis: y4 } = "number" == typeof d3 ? { mainAxis: d3, crossAxis: 0, alignmentAxis: null } : __spreadValues({ mainAxis: 0, crossAxis: 0, alignmentAxis: null }, d3);
      return f3 && "number" == typeof y4 && (h3 = "end" === f3 ? -1 * y4 : y4), m3 ? { x: h3 * g3, y: p3 * u3 } : { x: p3 * u3, y: h3 * g3 };
    }(i4, e4);
    return { x: r3 + l3.x, y: a3 + l3.y, data: l3 };
  } };
};
function E(t2) {
  return "x" === t2 ? "y" : "x";
}
var D = function(t2) {
  return void 0 === t2 && (t2 = {}), { name: "shift", options: t2, async fn(e4) {
    const { x: i4, y: r3, placement: a3 } = e4, _a = t2, { mainAxis: l3 = true, crossAxis: c3 = false, limiter: f3 = { fn: (t3) => {
      let { x: e5, y: n3 } = t3;
      return { x: e5, y: n3 };
    } } } = _a, u3 = __objRest(_a, ["mainAxis", "crossAxis", "limiter"]), g3 = { x: i4, y: r3 }, d3 = await s(e4, u3), p3 = o2(n(a3)), h3 = E(p3);
    let y4 = g3[p3], x3 = g3[h3];
    if (l3) {
      const t3 = "y" === p3 ? "bottom" : "right";
      y4 = m(y4 + d3["y" === p3 ? "top" : "left"], y4, y4 - d3[t3]);
    }
    if (c3) {
      const t3 = "y" === h3 ? "bottom" : "right";
      x3 = m(x3 + d3["y" === h3 ? "top" : "left"], x3, x3 - d3[t3]);
    }
    const w3 = f3.fn(__spreadProps(__spreadValues({}, e4), { [p3]: y4, [h3]: x3 }));
    return __spreadProps(__spreadValues({}, w3), { data: { x: w3.x - i4, y: w3.y - r3 } });
  } };
};
var k = function(e4) {
  return void 0 === e4 && (e4 = {}), { name: "size", options: e4, async fn(i4) {
    const { placement: r3, rects: a3, platform: l3, elements: m3 } = i4, _a = e4, { apply: u3 = () => {
    } } = _a, g3 = __objRest(_a, ["apply"]), d3 = await s(i4, g3), p3 = n(r3), h3 = t(r3), y4 = "x" === o2(r3), { width: x3, height: w3 } = a3.floating;
    let v3, b3;
    "top" === p3 || "bottom" === p3 ? (v3 = p3, b3 = h3 === (await (null == l3.isRTL ? void 0 : l3.isRTL(m3.floating)) ? "start" : "end") ? "left" : "right") : (b3 = p3, v3 = "end" === h3 ? "top" : "bottom");
    const R2 = w3 - d3[v3], A2 = x3 - d3[b3];
    let P3 = R2, T3 = A2;
    if (y4 ? T3 = c(x3 - d3.right - d3.left, A2) : P3 = c(w3 - d3.bottom - d3.top, R2), !i4.middlewareData.shift && !h3) {
      const t2 = f(d3.left, 0), e5 = f(d3.right, 0), n3 = f(d3.top, 0), o4 = f(d3.bottom, 0);
      y4 ? T3 = x3 - 2 * (0 !== t2 || 0 !== e5 ? t2 + e5 : f(d3.left, d3.right)) : P3 = w3 - 2 * (0 !== n3 || 0 !== o4 ? n3 + o4 : f(d3.top, d3.bottom));
    }
    await u3(__spreadProps(__spreadValues({}, i4), { availableWidth: T3, availableHeight: P3 }));
    const O3 = await l3.getDimensions(m3.floating);
    return x3 !== O3.width || w3 !== O3.height ? { reset: { rects: true } } : {};
  } };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
function n2(t2) {
  var e4;
  return (null == (e4 = t2.ownerDocument) ? void 0 : e4.defaultView) || window;
}
function o3(t2) {
  return n2(t2).getComputedStyle(t2);
}
var i3 = Math.min;
var r2 = Math.max;
var l2 = Math.round;
function c2(t2) {
  const e4 = o3(t2);
  let n3 = parseFloat(e4.width), i4 = parseFloat(e4.height);
  const r3 = t2.offsetWidth, c3 = t2.offsetHeight, s3 = l2(n3) !== r3 || l2(i4) !== c3;
  return s3 && (n3 = r3, i4 = c3), { width: n3, height: i4, fallback: s3 };
}
function s2(t2) {
  return h2(t2) ? (t2.nodeName || "").toLowerCase() : "";
}
var f2;
function u2() {
  if (f2)
    return f2;
  const t2 = navigator.userAgentData;
  return t2 && Array.isArray(t2.brands) ? (f2 = t2.brands.map((t3) => t3.brand + "/" + t3.version).join(" "), f2) : navigator.userAgent;
}
function a2(t2) {
  return t2 instanceof n2(t2).HTMLElement;
}
function d2(t2) {
  return t2 instanceof n2(t2).Element;
}
function h2(t2) {
  return t2 instanceof n2(t2).Node;
}
function p2(t2) {
  if ("undefined" == typeof ShadowRoot)
    return false;
  return t2 instanceof n2(t2).ShadowRoot || t2 instanceof ShadowRoot;
}
function g2(t2) {
  const { overflow: e4, overflowX: n3, overflowY: i4, display: r3 } = o3(t2);
  return /auto|scroll|overlay|hidden|clip/.test(e4 + i4 + n3) && !["inline", "contents"].includes(r3);
}
function m2(t2) {
  return ["table", "td", "th"].includes(s2(t2));
}
function y3(t2) {
  const e4 = /firefox/i.test(u2()), n3 = o3(t2), i4 = n3.backdropFilter || n3.WebkitBackdropFilter;
  return "none" !== n3.transform || "none" !== n3.perspective || !!i4 && "none" !== i4 || e4 && "filter" === n3.willChange || e4 && !!n3.filter && "none" !== n3.filter || ["transform", "perspective"].some((t3) => n3.willChange.includes(t3)) || ["paint", "layout", "strict", "content"].some((t3) => {
    const e5 = n3.contain;
    return null != e5 && e5.includes(t3);
  });
}
function x2() {
  return /^((?!chrome|android).)*safari/i.test(u2());
}
function w2(t2) {
  return ["html", "body", "#document"].includes(s2(t2));
}
function v2(t2) {
  return d2(t2) ? t2 : t2.contextElement;
}
var b2 = { x: 1, y: 1 };
function L2(t2) {
  const e4 = v2(t2);
  if (!a2(e4))
    return b2;
  const n3 = e4.getBoundingClientRect(), { width: o4, height: i4, fallback: r3 } = c2(e4);
  let s3 = (r3 ? l2(n3.width) : n3.width) / o4, f3 = (r3 ? l2(n3.height) : n3.height) / i4;
  return s3 && Number.isFinite(s3) || (s3 = 1), f3 && Number.isFinite(f3) || (f3 = 1), { x: s3, y: f3 };
}
function E2(e4, o4, i4, r3) {
  var l3, c3;
  void 0 === o4 && (o4 = false), void 0 === i4 && (i4 = false);
  const s3 = e4.getBoundingClientRect(), f3 = v2(e4);
  let u3 = b2;
  o4 && (r3 ? d2(r3) && (u3 = L2(r3)) : u3 = L2(e4));
  const a3 = f3 ? n2(f3) : window, h3 = x2() && i4;
  let p3 = (s3.left + (h3 && (null == (l3 = a3.visualViewport) ? void 0 : l3.offsetLeft) || 0)) / u3.x, g3 = (s3.top + (h3 && (null == (c3 = a3.visualViewport) ? void 0 : c3.offsetTop) || 0)) / u3.y, m3 = s3.width / u3.x, y4 = s3.height / u3.y;
  if (f3) {
    const t2 = n2(f3), e5 = r3 && d2(r3) ? n2(r3) : r3;
    let o5 = t2.frameElement;
    for (; o5 && r3 && e5 !== t2; ) {
      const t3 = L2(o5), e6 = o5.getBoundingClientRect(), i5 = getComputedStyle(o5);
      e6.x += (o5.clientLeft + parseFloat(i5.paddingLeft)) * t3.x, e6.y += (o5.clientTop + parseFloat(i5.paddingTop)) * t3.y, p3 *= t3.x, g3 *= t3.y, m3 *= t3.x, y4 *= t3.y, p3 += e6.x, g3 += e6.y, o5 = n2(o5).frameElement;
    }
  }
  return l({ width: m3, height: y4, x: p3, y: g3 });
}
function R(t2) {
  return ((h2(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
}
function T2(t2) {
  return d2(t2) ? { scrollLeft: t2.scrollLeft, scrollTop: t2.scrollTop } : { scrollLeft: t2.pageXOffset, scrollTop: t2.pageYOffset };
}
function C(t2) {
  return E2(R(t2)).left + T2(t2).scrollLeft;
}
function F(t2) {
  if ("html" === s2(t2))
    return t2;
  const e4 = t2.assignedSlot || t2.parentNode || p2(t2) && t2.host || R(t2);
  return p2(e4) ? e4.host : e4;
}
function W(t2) {
  const e4 = F(t2);
  return w2(e4) ? e4.ownerDocument.body : a2(e4) && g2(e4) ? e4 : W(e4);
}
function D2(t2, e4) {
  var o4;
  void 0 === e4 && (e4 = []);
  const i4 = W(t2), r3 = i4 === (null == (o4 = t2.ownerDocument) ? void 0 : o4.body), l3 = n2(i4);
  return r3 ? e4.concat(l3, l3.visualViewport || [], g2(i4) ? i4 : []) : e4.concat(i4, D2(i4));
}
function S(e4, i4, l3) {
  let c3;
  if ("viewport" === i4)
    c3 = function(t2, e5) {
      const o4 = n2(t2), i5 = R(t2), r3 = o4.visualViewport;
      let l4 = i5.clientWidth, c4 = i5.clientHeight, s4 = 0, f4 = 0;
      if (r3) {
        l4 = r3.width, c4 = r3.height;
        const t3 = x2();
        (!t3 || t3 && "fixed" === e5) && (s4 = r3.offsetLeft, f4 = r3.offsetTop);
      }
      return { width: l4, height: c4, x: s4, y: f4 };
    }(e4, l3);
  else if ("document" === i4)
    c3 = function(t2) {
      const e5 = R(t2), n3 = T2(t2), i5 = t2.ownerDocument.body, l4 = r2(e5.scrollWidth, e5.clientWidth, i5.scrollWidth, i5.clientWidth), c4 = r2(e5.scrollHeight, e5.clientHeight, i5.scrollHeight, i5.clientHeight);
      let s4 = -n3.scrollLeft + C(t2);
      const f4 = -n3.scrollTop;
      return "rtl" === o3(i5).direction && (s4 += r2(e5.clientWidth, i5.clientWidth) - l4), { width: l4, height: c4, x: s4, y: f4 };
    }(R(e4));
  else if (d2(i4))
    c3 = function(t2, e5) {
      const n3 = E2(t2, true, "fixed" === e5), o4 = n3.top + t2.clientTop, i5 = n3.left + t2.clientLeft, r3 = a2(t2) ? L2(t2) : { x: 1, y: 1 };
      return { width: t2.clientWidth * r3.x, height: t2.clientHeight * r3.y, x: i5 * r3.x, y: o4 * r3.y };
    }(i4, l3);
  else {
    const t2 = __spreadValues({}, i4);
    if (x2()) {
      var s3, f3;
      const o4 = n2(e4);
      t2.x -= (null == (s3 = o4.visualViewport) ? void 0 : s3.offsetLeft) || 0, t2.y -= (null == (f3 = o4.visualViewport) ? void 0 : f3.offsetTop) || 0;
    }
    c3 = t2;
  }
  return l(c3);
}
function A(t2, e4) {
  return a2(t2) && "fixed" !== o3(t2).position ? e4 ? e4(t2) : t2.offsetParent : null;
}
function H(t2, e4) {
  const i4 = n2(t2);
  if (!a2(t2))
    return i4;
  let r3 = A(t2, e4);
  for (; r3 && m2(r3) && "static" === o3(r3).position; )
    r3 = A(r3, e4);
  return r3 && ("html" === s2(r3) || "body" === s2(r3) && "static" === o3(r3).position && !y3(r3)) ? i4 : r3 || function(t3) {
    let e5 = F(t3);
    for (; a2(e5) && !w2(e5); ) {
      if (y3(e5))
        return e5;
      e5 = F(e5);
    }
    return null;
  }(t2) || i4;
}
function V(t2, e4, n3) {
  const o4 = a2(e4), i4 = R(e4), r3 = E2(t2, true, "fixed" === n3, e4);
  let l3 = { scrollLeft: 0, scrollTop: 0 };
  const c3 = { x: 0, y: 0 };
  if (o4 || !o4 && "fixed" !== n3)
    if (("body" !== s2(e4) || g2(i4)) && (l3 = T2(e4)), a2(e4)) {
      const t3 = E2(e4, true);
      c3.x = t3.x + e4.clientLeft, c3.y = t3.y + e4.clientTop;
    } else
      i4 && (c3.x = C(i4));
  return { x: r3.left + l3.scrollLeft - c3.x, y: r3.top + l3.scrollTop - c3.y, width: r3.width, height: r3.height };
}
var O2 = { getClippingRect: function(t2) {
  let { element: e4, boundary: n3, rootBoundary: l3, strategy: c3 } = t2;
  const f3 = "clippingAncestors" === n3 ? function(t3, e5) {
    const n4 = e5.get(t3);
    if (n4)
      return n4;
    let i4 = D2(t3).filter((t4) => d2(t4) && "body" !== s2(t4)), r3 = null;
    const l4 = "fixed" === o3(t3).position;
    let c4 = l4 ? F(t3) : t3;
    for (; d2(c4) && !w2(c4); ) {
      const t4 = o3(c4), e6 = y3(c4);
      "fixed" === t4.position ? r3 = null : (l4 ? e6 || r3 : e6 || "static" !== t4.position || !r3 || !["absolute", "fixed"].includes(r3.position)) ? r3 = t4 : i4 = i4.filter((t5) => t5 !== c4), c4 = F(c4);
    }
    return e5.set(t3, i4), i4;
  }(e4, this._c) : [].concat(n3), u3 = [...f3, l3], a3 = u3[0], h3 = u3.reduce((t3, n4) => {
    const o4 = S(e4, n4, c3);
    return t3.top = r2(o4.top, t3.top), t3.right = i3(o4.right, t3.right), t3.bottom = i3(o4.bottom, t3.bottom), t3.left = r2(o4.left, t3.left), t3;
  }, S(e4, a3, c3));
  return { width: h3.right - h3.left, height: h3.bottom - h3.top, x: h3.left, y: h3.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t2) {
  let { rect: e4, offsetParent: n3, strategy: o4 } = t2;
  const i4 = a2(n3), r3 = R(n3);
  if (n3 === r3)
    return e4;
  let l3 = { scrollLeft: 0, scrollTop: 0 }, c3 = { x: 1, y: 1 };
  const f3 = { x: 0, y: 0 };
  if ((i4 || !i4 && "fixed" !== o4) && (("body" !== s2(n3) || g2(r3)) && (l3 = T2(n3)), a2(n3))) {
    const t3 = E2(n3);
    c3 = L2(n3), f3.x = t3.x + n3.clientLeft, f3.y = t3.y + n3.clientTop;
  }
  return { width: e4.width * c3.x, height: e4.height * c3.y, x: e4.x * c3.x - l3.scrollLeft * c3.x + f3.x, y: e4.y * c3.y - l3.scrollTop * c3.y + f3.y };
}, isElement: d2, getDimensions: function(t2) {
  return a2(t2) ? c2(t2) : t2.getBoundingClientRect();
}, getOffsetParent: H, getDocumentElement: R, getScale: L2, async getElementRects(t2) {
  let { reference: e4, floating: n3, strategy: o4 } = t2;
  const i4 = this.getOffsetParent || H, r3 = this.getDimensions;
  return { reference: V(e4, await i4(n3), o4), floating: __spreadValues({ x: 0, y: 0 }, await r3(n3)) };
}, getClientRects: (t2) => Array.from(t2.getClientRects()), isRTL: (t2) => "rtl" === o3(t2).direction };
function P2(t2, e4, n3, o4) {
  void 0 === o4 && (o4 = {});
  const { ancestorScroll: i4 = true, ancestorResize: r3 = true, elementResize: l3 = true, animationFrame: c3 = false } = o4, s3 = i4 && !c3, f3 = s3 || r3 ? [...d2(t2) ? D2(t2) : t2.contextElement ? D2(t2.contextElement) : [], ...D2(e4)] : [];
  f3.forEach((t3) => {
    s3 && t3.addEventListener("scroll", n3, { passive: true }), r3 && t3.addEventListener("resize", n3);
  });
  let u3, a3 = null;
  if (l3) {
    let o5 = true;
    a3 = new ResizeObserver(() => {
      o5 || n3(), o5 = false;
    }), d2(t2) && !c3 && a3.observe(t2), d2(t2) || !t2.contextElement || c3 || a3.observe(t2.contextElement), a3.observe(e4);
  }
  let h3 = c3 ? E2(t2) : null;
  return c3 && function e5() {
    const o5 = E2(t2);
    !h3 || o5.x === h3.x && o5.y === h3.y && o5.width === h3.width && o5.height === h3.height || n3();
    h3 = o5, u3 = requestAnimationFrame(e5);
  }(), n3(), () => {
    var t3;
    f3.forEach((t4) => {
      s3 && t4.removeEventListener("scroll", n3), r3 && t4.removeEventListener("resize", n3);
    }), null == (t3 = a3) || t3.disconnect(), a3 = null, c3 && cancelAnimationFrame(u3);
  };
}
var z = (t2, n3, o4) => {
  const i4 = /* @__PURE__ */ new Map(), r3 = __spreadValues({ platform: O2 }, o4), l3 = __spreadProps(__spreadValues({}, r3.platform), { _c: i4 });
  return r(t2, n3, __spreadProps(__spreadValues({}, r3), { platform: l3 }));
};

// src/components/popup/popup.ts
var SlPopup = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.placement = "top";
    this.strategy = "absolute";
    this.distance = 0;
    this.skidding = 0;
    this.arrow = false;
    this.arrowPlacement = "anchor";
    this.arrowPadding = 10;
    this.flip = false;
    this.flipFallbackPlacements = "";
    this.flipFallbackStrategy = "best-fit";
    this.flipPadding = 0;
    this.shift = false;
    this.shiftPadding = 0;
    this.autoSizePadding = 0;
  }
  async connectedCallback() {
    super.connectedCallback();
    await this.updateComplete;
    this.start();
  }
  disconnectedCallback() {
    this.stop();
  }
  async updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has("active")) {
      if (this.active) {
        this.start();
      } else {
        this.stop();
      }
    }
    if (changedProps.has("anchor")) {
      this.handleAnchorChange();
    }
    if (this.active) {
      await this.updateComplete;
      this.reposition();
    }
  }
  async handleAnchorChange() {
    await this.stop();
    if (this.anchor && typeof this.anchor === "string") {
      const root = this.getRootNode();
      this.anchorEl = root.getElementById(this.anchor);
    } else if (this.anchor instanceof HTMLElement) {
      this.anchorEl = this.anchor;
    } else {
      this.anchorEl = this.querySelector('[slot="anchor"]');
    }
    if (this.anchorEl instanceof HTMLSlotElement) {
      this.anchorEl = this.anchorEl.assignedElements({ flatten: true })[0];
    }
    if (!this.anchorEl) {
      throw new Error(
        "Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute."
      );
    }
    this.start();
  }
  start() {
    if (!this.anchorEl) {
      return;
    }
    this.cleanup = P2(this.anchorEl, this.popup, () => {
      this.reposition();
    });
  }
  async stop() {
    return new Promise((resolve) => {
      if (this.cleanup) {
        this.cleanup();
        this.cleanup = void 0;
        this.removeAttribute("data-current-placement");
        this.style.removeProperty("--auto-size-available-width");
        this.style.removeProperty("--auto-size-available-height");
        requestAnimationFrame(() => resolve());
      } else {
        resolve();
      }
    });
  }
  /** Forces the popup to recalculate and reposition itself. */
  reposition() {
    if (!this.active || !this.anchorEl) {
      return;
    }
    const middleware = [
      // The offset middleware goes first
      O({ mainAxis: this.distance, crossAxis: this.skidding })
    ];
    if (this.sync) {
      middleware.push(
        k({
          apply: ({ rects }) => {
            const syncWidth = this.sync === "width" || this.sync === "both";
            const syncHeight = this.sync === "height" || this.sync === "both";
            this.popup.style.width = syncWidth ? `${rects.reference.width}px` : "";
            this.popup.style.height = syncHeight ? `${rects.reference.height}px` : "";
          }
        })
      );
    } else {
      this.popup.style.width = "";
      this.popup.style.height = "";
    }
    if (this.flip) {
      middleware.push(
        b({
          boundary: this.flipBoundary,
          // @ts-expect-error - We're converting a string attribute to an array here
          fallbackPlacements: this.flipFallbackPlacements,
          fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
          padding: this.flipPadding
        })
      );
    }
    if (this.shift) {
      middleware.push(
        D({
          boundary: this.shiftBoundary,
          padding: this.shiftPadding
        })
      );
    }
    if (this.autoSize) {
      middleware.push(
        k({
          boundary: this.autoSizeBoundary,
          padding: this.autoSizePadding,
          apply: ({ availableWidth, availableHeight }) => {
            if (this.autoSize === "vertical" || this.autoSize === "both") {
              this.style.setProperty("--auto-size-available-height", `${availableHeight}px`);
            } else {
              this.style.removeProperty("--auto-size-available-height");
            }
            if (this.autoSize === "horizontal" || this.autoSize === "both") {
              this.style.setProperty("--auto-size-available-width", `${availableWidth}px`);
            } else {
              this.style.removeProperty("--auto-size-available-width");
            }
          }
        })
      );
    } else {
      this.style.removeProperty("--auto-size-available-width");
      this.style.removeProperty("--auto-size-available-height");
    }
    if (this.arrow) {
      middleware.push(
        u({
          element: this.arrowEl,
          padding: this.arrowPadding
        })
      );
    }
    z(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware,
      strategy: this.strategy
    }).then(({ x: x3, y: y4, middlewareData, placement }) => {
      const isRtl = getComputedStyle(this).direction === "rtl";
      const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[placement.split("-")[0]];
      this.setAttribute("data-current-placement", placement);
      Object.assign(this.popup.style, {
        left: `${x3}px`,
        top: `${y4}px`
      });
      if (this.arrow) {
        const arrowX = middlewareData.arrow.x;
        const arrowY = middlewareData.arrow.y;
        let top = "";
        let right = "";
        let bottom = "";
        let left = "";
        if (this.arrowPlacement === "start") {
          const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          top = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          right = isRtl ? value : "";
          left = isRtl ? "" : value;
        } else if (this.arrowPlacement === "end") {
          const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          right = isRtl ? "" : value;
          left = isRtl ? value : "";
          bottom = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
        } else if (this.arrowPlacement === "center") {
          left = typeof arrowX === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
          top = typeof arrowY === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
        } else {
          left = typeof arrowX === "number" ? `${arrowX}px` : "";
          top = typeof arrowY === "number" ? `${arrowY}px` : "";
        }
        Object.assign(this.arrowEl.style, {
          top,
          right,
          bottom,
          left,
          [staticSide]: "calc(var(--arrow-size-diagonal) * -1)"
        });
      }
    });
    this.emit("sl-reposition");
  }
  render() {
    return y`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${o({
      popup: true,
      "popup--active": this.active,
      "popup--fixed": this.strategy === "fixed",
      "popup--has-arrow": this.arrow
    })}
      >
        <slot></slot>
        ${this.arrow ? y`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
  }
};
SlPopup.styles = popup_styles_default;
__decorateClass([
  i(".popup")
], SlPopup.prototype, "popup", 2);
__decorateClass([
  i(".popup__arrow")
], SlPopup.prototype, "arrowEl", 2);
__decorateClass([
  e2()
], SlPopup.prototype, "anchor", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlPopup.prototype, "active", 2);
__decorateClass([
  e2({ reflect: true })
], SlPopup.prototype, "placement", 2);
__decorateClass([
  e2({ reflect: true })
], SlPopup.prototype, "strategy", 2);
__decorateClass([
  e2({ type: Number })
], SlPopup.prototype, "distance", 2);
__decorateClass([
  e2({ type: Number })
], SlPopup.prototype, "skidding", 2);
__decorateClass([
  e2({ type: Boolean })
], SlPopup.prototype, "arrow", 2);
__decorateClass([
  e2({ attribute: "arrow-placement" })
], SlPopup.prototype, "arrowPlacement", 2);
__decorateClass([
  e2({ attribute: "arrow-padding", type: Number })
], SlPopup.prototype, "arrowPadding", 2);
__decorateClass([
  e2({ type: Boolean })
], SlPopup.prototype, "flip", 2);
__decorateClass([
  e2({
    attribute: "flip-fallback-placements",
    converter: {
      fromAttribute: (value) => {
        return value.split(" ").map((p3) => p3.trim()).filter((p3) => p3 !== "");
      },
      toAttribute: (value) => {
        return value.join(" ");
      }
    }
  })
], SlPopup.prototype, "flipFallbackPlacements", 2);
__decorateClass([
  e2({ attribute: "flip-fallback-strategy" })
], SlPopup.prototype, "flipFallbackStrategy", 2);
__decorateClass([
  e2({ type: Object })
], SlPopup.prototype, "flipBoundary", 2);
__decorateClass([
  e2({ attribute: "flip-padding", type: Number })
], SlPopup.prototype, "flipPadding", 2);
__decorateClass([
  e2({ type: Boolean })
], SlPopup.prototype, "shift", 2);
__decorateClass([
  e2({ type: Object })
], SlPopup.prototype, "shiftBoundary", 2);
__decorateClass([
  e2({ attribute: "shift-padding", type: Number })
], SlPopup.prototype, "shiftPadding", 2);
__decorateClass([
  e2({ attribute: "auto-size" })
], SlPopup.prototype, "autoSize", 2);
__decorateClass([
  e2()
], SlPopup.prototype, "sync", 2);
__decorateClass([
  e2({ type: Object })
], SlPopup.prototype, "autoSizeBoundary", 2);
__decorateClass([
  e2({ attribute: "auto-size-padding", type: Number })
], SlPopup.prototype, "autoSizePadding", 2);
SlPopup = __decorateClass([
  e("sl-popup")
], SlPopup);

export {
  SlPopup
};
