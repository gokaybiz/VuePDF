var gI = Object.defineProperty;
var CI = (g, A, C) => A in g ? gI(g, A, { enumerable: !0, configurable: !0, writable: !0, value: C }) : g[A] = C;
var E = (g, A, C) => (CI(g, typeof A != "symbol" ? A + "" : A, C), C);
import { defineComponent as j, ref as R, watch as L, onMounted as O, openBlock as U, createElementBlock as x, toRaw as F, withDirectives as n, createVNode as e, vShow as T, createElementVNode as q, renderSlot as AI, shallowRef as Q } from "vue";
import * as o from "pdfjs-dist";
const P = "internal-link", ZI = "link", GI = "file-attachment", lI = "form-text", bI = "form-select", dI = "form-checkbox", cI = "form-radio", mI = "form-button", t = ["click", "dblclick", "mouseover", "input", "change"];
function u(g, A, C) {
  const I = [];
  if (C)
    for (const G of C)
      G[g] === A && I.push(G);
  return I;
}
function h(g, A) {
  return { type: g, data: A };
}
function K(g, A) {
  switch (g.type) {
    case "textarea":
    case "text":
      return h(lI, {
        fieldName: g.name,
        value: g.value
      });
    case "select-one":
    case "select-multiple":
      const C = [];
      for (const G of g.options)
        C.push({
          value: G.value,
          label: G.label
        });
      const I = [];
      for (const G of g.selectedOptions)
        I.push({
          value: G.value,
          label: G.label
        });
      return h(bI, {
        fieldName: g.name,
        value: I,
        options: C
      });
    case "checkbox":
      return h(dI, {
        fieldName: g.name,
        checked: g.checked
      });
    case "radio":
      return h(cI, {
        fieldName: g.name,
        ...A
      });
    case "button":
      return h(mI, {
        fieldName: g.name,
        ...A
      });
  }
}
function WI(g) {
  return h(GI, g.file);
}
async function BI(g, A) {
  if (g.dest) {
    if (typeof g.dest == "string")
      return h(P, {
        referencedPage: Number(g.dest.substring(1, g.dest.length)),
        offset: null
      });
    {
      const C = await A.getPageIndex(g.dest[0]);
      return h(P, {
        referencedPage: C + 1,
        offset: {
          left: g.dest[2],
          bottom: g.dest[3]
        }
      });
    }
  } else if (g.url)
    return h(ZI, {
      url: g.url,
      unsafeUrl: g.unsafeUrl
    });
}
function f(g) {
  for (const A of g.getElementsByTagName("span")) {
    let C = A.textContent;
    const I = JSON.parse(A.dataset.l10nArgs ?? "{}");
    if (C)
      for (const G in I)
        C = C.replace(`{{${G}}}`, I[G]);
    A.textContent = C;
  }
}
function wI(g, A, C) {
  var G;
  let I = g.target.parentNode;
  if (I.tagName === "DIV" && (I = I.firstChild), I.className === "linkAnnotation" && g.type === "click") {
    const l = (G = I.dataset) == null ? void 0 : G.annotationId;
    if (l)
      return BI(u("id", l, C)[0], A);
  } else if (I.className.includes("popupAnnotation") || I.className.includes("textAnnotation"))
    f(I);
  else if (I.className.includes("fileAttachmentAnnotation")) {
    f(I);
    const l = I.dataset.annotationId;
    if (l && g.type === "dblclick")
      return WI(u("id", l, C)[0]);
  } else if (I.className.includes("textWidgetAnnotation") && g.type === "input") {
    let l = I.getElementsByTagName("input")[0];
    return l || (l = I.getElementsByTagName("textarea")[0]), K(l);
  } else {
    if (I.className.includes("choiceWidgetAnnotation") && g.type === "input")
      return K(I.getElementsByTagName("select")[0]);
    if (I.className.includes("buttonWidgetAnnotation checkBox") && g.type === "change")
      return K(I.getElementsByTagName("input")[0]);
    if (I.className.includes("buttonWidgetAnnotation radioButton") && g.type === "change") {
      const l = I.dataset.annotationId;
      if (l) {
        const c = u("id", l, C)[0], d = [];
        for (const i of u("fieldName", c.fieldName, C))
          i.buttonValue && d.push(i.buttonValue);
        return K(I.getElementsByTagName("input")[0], {
          value: c.buttonValue,
          defaultValue: c.fieldValue,
          options: d
        });
      }
    } else if (I.className.includes("buttonWidgetAnnotation pushButton") && g.type === "click") {
      const l = I.dataset.annotationId;
      if (l) {
        const c = u("id", l, C)[0];
        return c.resetForm ? K(
          { name: c.fieldName, type: "button" },
          { actions: c.actions, reset: !0 }
        ) : K(
          { name: c.fieldName, type: "button" },
          { actions: c.actions, reset: !1 }
        );
      }
    }
  }
}
class YI {
  constructor() {
    E(this, "externalLinkEnabled");
    this.externalLinkEnabled = !0;
  }
  /**
     * @type {number}
     */
  get pagesCount() {
    return 0;
  }
  /**
     * @type {number}
     */
  get page() {
    return 0;
  }
  /**
     * @param {number} _value
     */
  set page(A) {
  }
  /**
     * @type {number}
     */
  get rotation() {
    return 0;
  }
  /**
     * @param {number} _value
     */
  set rotation(A) {
  }
  /**
     * @type {boolean}
     */
  get isInPresentationMode() {
    return !1;
  }
  /**
     * @param {string|Array} _dest - The named, or explicit, PDF destination.
     */
  async goToDestination(A) {
  }
  /**
     * @param {number|string} _val - The page number, or page label.
     */
  goToPage(A) {
  }
  /**
     * @param {HTMLAnchorElement} link
     * @param {string} url
     * @param {boolean} [_newWindow]
     */
  addLinkAttributes(A, C, I = !1) {
  }
  /**
     * @param _dest - The PDF destination object.
     * @returns {string} The hyperlink to the PDF object.
     */
  getDestinationHash(A) {
    return "#";
  }
  /**
     * @param _hash - The PDF parameters/hash.
     * @returns {string} The hyperlink to the PDF object.
     */
  getAnchorUrl(A) {
    return "#";
  }
  /**
     * @param {string} _hash
     */
  setHash(A) {
  }
  /**
     * @param {string} _action
     */
  executeNamedAction(A) {
  }
  /**
     * @param {Object} _action
     */
  executeSetOCGState(A) {
  }
  /**
     * @param {number} _pageNum - page number.
     * @param {Object} _pageRef - reference to the page.
     */
  cachePageRef(A, C) {
  }
}
const iI = /* @__PURE__ */ j({
  __name: "AnnotationLayer",
  props: {
    page: null,
    viewport: null,
    document: null,
    filter: null,
    map: null,
    imageResourcesPath: null,
    hideForms: { type: Boolean },
    enableScripting: { type: Boolean }
  },
  emits: ["annotation"],
  setup(g, { emit: A }) {
    const C = g, I = R(), G = R();
    function l(B) {
      const w = wI(B, C.document, G.value);
      Promise.resolve(w).then((m) => {
        m && A("annotation", m);
      });
    }
    async function c() {
      var w;
      return await ((w = F(C.document)) == null ? void 0 : w.getFieldObjects());
    }
    async function d() {
      var w;
      return await ((w = F(C.document)) == null ? void 0 : w.hasJSActions());
    }
    async function i() {
      const B = C.page;
      let w = await (B == null ? void 0 : B.getAnnotations());
      if (C.filter) {
        const m = C.filter;
        w = w.filter((X) => {
          const N = X.subtype, H = X.fieldType ? `${N}.${X.fieldType}` : null;
          return (m == null ? void 0 : m.includes(N)) || H !== null && (m == null ? void 0 : m.includes(H));
        });
      }
      return w;
    }
    async function s() {
      var a, J;
      (J = (a = I.value).replaceChildren) == null || J.call(a);
      for (const Y of t)
        I.value.removeEventListener(Y, l);
      const B = F(C.document), w = C.page, m = C.viewport;
      G.value = await i();
      const X = /* @__PURE__ */ new Map([]);
      for (const Y of G.value)
        if (Y.subtype === "Widget" && Y.fieldType === "Btn" && Y.pushButton) {
          const D = Y.rect[2] - Y.rect[0], p = Y.rect[3] - Y.rect[1], S = document.createElement("canvas");
          S.setAttribute("width", (D * m.scale).toString()), S.setAttribute("height", (p * m.scale).toString()), X.set(Y.id, S);
        }
      const N = B.annotationStorage;
      if (C.map)
        for (const [Y, D] of Object.entries(C.map))
          N.setValue(Y, D);
      const H = {
        annotations: G.value,
        viewport: m == null ? void 0 : m.clone({ dontFlip: !0 }),
        linkService: new YI(),
        annotationCanvasMap: X,
        div: I.value,
        annotationStorage: N,
        renderForms: !C.hideForms,
        page: w,
        enableScripting: !1,
        hasJSActions: await d(),
        fieldObjects: await c(),
        downloadManager: null,
        imageResourcesPath: C.imageResourcesPath
      };
      o.AnnotationLayer.render(H);
      for (const Y of t)
        I.value.addEventListener(Y, l);
    }
    return L(() => C.viewport, () => {
      C.page && C.viewport && I.value && s();
    }), O(() => {
      C.page && C.viewport && I.value && s();
    }), (B, w) => (U(), x("div", {
      ref_key: "layer",
      ref: I,
      class: "annotationLayer",
      style: { display: "block" }
    }, null, 512));
  }
});
const VI = /* @__PURE__ */ j({
  __name: "TextLayer",
  props: {
    page: null,
    viewport: null
  },
  setup(g) {
    const A = g, C = R(), I = R();
    function G() {
      var m, X;
      (X = (m = C.value).replaceChildren) == null || X.call(m);
      const d = A.page, i = A.viewport, B = {
        textContentSource: d == null ? void 0 : d.streamTextContent({ includeMarkedContent: !0, disableNormalization: !0 }),
        viewport: i,
        container: C.value,
        isOffscreenCanvasSupported: !0,
        textDivs: [],
        textDivProperties: /* @__PURE__ */ new WeakMap()
      };
      o.renderTextLayer(B).promise.then(() => {
        var H;
        const N = document.createElement("div");
        N.className = "endOfContent", (H = C.value) == null || H.appendChild(N), I.value = N;
      });
    }
    function l() {
      I.value && I.value.classList.add("active");
    }
    function c() {
      I.value && I.value.classList.remove("active");
    }
    return L(() => A.viewport, (d) => {
      A.page && A.viewport && C.value && G();
    }), O(() => {
      A.page && A.viewport && C.value && G();
    }), (d, i) => (U(), x("div", {
      ref_key: "layer",
      ref: C,
      class: "textLayer",
      style: { display: "block" },
      onMousedown: l,
      onMouseup: c
    }, null, 544));
  }
}), XI = /* @__PURE__ */ q("canvas", {
  dir: "ltr",
  style: { display: "block" },
  role: "main"
}, null, -1), r = /* @__PURE__ */ j({
  __name: "VuePDF",
  props: {
    pdf: null,
    page: { default: 1 },
    scale: { default: 1 },
    rotation: null,
    fitParent: { type: Boolean },
    textLayer: { type: Boolean },
    imageResourcesPath: null,
    hideForms: { type: Boolean },
    annotationLayer: { type: Boolean },
    annotationsFilter: null,
    annotationsMap: null,
    watermarkText: null
  },
  emits: ["annotation", "loaded"],
  setup(g, { expose: A, emit: C }) {
    const I = g, G = R(), l = R(), c = R(!1);
    let d;
    const i = R(null), s = R(null), B = R(null);
    function w(Z) {
      C("loaded", Z);
    }
    function m(Z) {
      C("annotation", Z);
    }
    function X(Z) {
      if (!(typeof Z == "number" && Z % 90 === 0))
        return 0;
      const b = Z / 90;
      return b > 4 ? X(Z - 360) : b < 0 ? X(Z + 360) : Z;
    }
    function N(Z) {
      let b = I.scale;
      if (I.fitParent) {
        const W = G.value.parentNode.clientWidth, V = Z.getViewport({ scale: 1 }).width;
        b = W / V;
      }
      return b;
    }
    function H(Z, b = 18, W = 1) {
      if (!I.watermarkText)
        return;
      const V = Z.getContext("2d");
      if (!V)
        return;
      V.font = `${b * W}px Trebuchet MS`, V.fillStyle = "rgba(211, 210, 211, 0.3)";
      const k = 50;
      for (let M = 0; M < k; M++) {
        const z = M % 5 * (Z.width / 5) + Z.width / 10, y = Math.floor(M / 5) * (Z.height / 5) + Z.height / 10;
        V.save(), V.translate(z, y), V.rotate(-(Math.PI / 4)), V.fillText(I.watermarkText, 0, 0), V.restore();
      }
    }
    function a() {
      var b;
      let Z = null;
      return (b = G.value) == null || b.childNodes.forEach((W) => {
        W.tagName === "CANVAS" && (Z = W);
      }), Z;
    }
    function J(Z) {
      var V;
      let b;
      const W = a();
      return W && (W == null ? void 0 : W.getAttribute("role")) === "main" ? b = W : (b = document.createElement("canvas"), b.style.display = "block", b.setAttribute("dir", "ltr")), b.width = Z.width, b.height = Z.height, b.style.width = `${Z.width}px`, b.style.height = `${Z.height}px`, (V = G.value) == null || V.style.setProperty("--scale-factor", `${Z.scale}`), l.value.style.width = `${Z.width}px`, l.value.style.height = `${Z.height}px`, c.value = !0, b;
    }
    function Y() {
      d && d.cancel();
    }
    function D(Z) {
      var b;
      (b = F(i.value)) == null || b.getPage(Z).then((W) => {
        var v;
        Y();
        const V = W.getViewport(), k = {
          scale: N(W),
          rotation: X((I.rotation || 0) + V.rotation)
        }, M = W.getViewport(k), z = a(), y = J(M), II = {
          canvasContext: y.getContext("2d"),
          viewport: M,
          annotationMode: I.hideForms ? o.AnnotationMode.ENABLE : o.AnnotationMode.ENABLE_FORMS
        };
        (y == null ? void 0 : y.getAttribute("role")) !== "main" ? z && ((v = G.value) == null || v.replaceChild(y, z)) : y.removeAttribute("role"), s.value = W, B.value = M, d = W.render(II), d.promise.then(() => {
          H(y, 18, M.scale), c.value = !1, w(B.value);
        }).catch(() => {
        });
      });
    }
    function p(Z) {
      Z.promise.then(async (b) => {
        i.value = b, D(I.page);
      });
    }
    L(() => I.pdf, (Z) => {
      Z !== void 0 && p(Z);
    }), L(() => [I.scale, I.rotation, I.page, I.hideForms], () => {
      D(I.page);
    }), O(() => {
      I.pdf !== void 0 && p(I.pdf);
    });
    function S() {
      D(I.page);
    }
    function _() {
      Y();
    }
    function $() {
      const Z = F(i.value);
      return Z == null ? void 0 : Z.annotationStorage;
    }
    return A({
      reload: S,
      cancel: _,
      getAnnotationStorage: $
    }), (Z, b) => (U(), x("div", {
      ref_key: "container",
      ref: G,
      style: { position: "relative", display: "block", overflow: "hidden" }
    }, [
      XI,
      n(e(VI, {
        page: s.value,
        viewport: B.value
      }, null, 8, ["page", "viewport"]), [
        [T, g.textLayer]
      ]),
      n(e(iI, {
        filter: g.annotationsFilter,
        map: g.annotationsMap,
        viewport: B.value,
        "image-resources-path": g.imageResourcesPath,
        "hide-forms": g.hideForms,
        page: s.value,
        document: i.value,
        onAnnotation: b[0] || (b[0] = (W) => m(W))
      }, null, 8, ["filter", "map", "viewport", "image-resources-path", "hide-forms", "page", "document"]), [
        [T, g.annotationLayer]
      ]),
      n(q("div", {
        ref_key: "loadingLayer",
        ref: l,
        style: { display: "block", position: "absolute" }
      }, [
        AI(Z.$slots, "default")
      ], 512), [
        [T, c.value]
      ])
    ], 512));
  }
function sI(g) {
  o.GlobalWorkerOptions.workerSrc = g;
}
function MI(g, A = {
  onProgress: void 0,
  onPassword: void 0,
  onError: void 0,
  password: ""
}) {
  var c;
  (c = o.GlobalWorkerOptions) != null && c.workerSrc || sI(NI);
  const C = Q(), I = Q(0), G = Q({}), l = o.getDocument(g);
  if (A.onProgress && (l.onProgress = A.onProgress), A.onPassword)
    l.onPassword = A.onPassword;
  else if (A.password) {
    const d = (i, s) => {
      i(A.password ?? "");
    };
    l.onPassword = d;
  }
  return l.promise.then(async (d) => {
    C.value = d.loadingTask, I.value = d.numPages;
    const i = await d.getMetadata(), s = await d.getAttachments(), B = await d.getJavaScript();
    G.value = {
      metadata: i,
      attachments: s,
      javascript: B
    };
  }, (d) => {
    typeof A.onError == "function" && A.onError(d);
  }), {
    pdf: C,
    pages: I,
    info: G
  };
}
const yI = {
  install(g) {
    g.component(r.name, r);
  }
};
export {
  r as VuePDF,
  yI as VuePDFPlugin,
  yI as default,
  MI as usePDF
};