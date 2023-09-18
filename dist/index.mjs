var cl = Object.defineProperty;
var Wl = (d, b, Z) => b in d ? cl(d, b, { enumerable: !0, configurable: !0, writable: !0, value: Z }) : d[b] = Z;
var e = (d, b, Z) => (Wl(d, typeof b != "symbol" ? b + "" : b, Z), Z);
import { defineComponent as K, ref as I, watch as F, onMounted as o, openBlock as Q, createElementBlock as E, toRaw as J, withDirectives as H, createVNode as P, vShow as B, createElementVNode as _, renderSlot as Gl, shallowRef as n } from "vue";
import * as w from "pdfjs-dist";
const A = "internal-link", ml = "link", Nl = "file-attachment", Yl = "form-text", Ml = "form-select", Xl = "form-checkbox", Vl = "form-radio", Tl = "form-button", f = ["click", "dblclick", "mouseover", "input", "change"];
function U(d, b, Z) {
  const l = [];
  if (Z)
    for (const W of Z)
      W[d] === b && l.push(W);
  return l;
}
function p(d, b) {
  return { type: d, data: b };
}
function x(d, b) {
  switch (d.type) {
    case "textarea":
    case "text":
      return p(Yl, {
        fieldName: d.name,
        value: d.value
      });
    case "select-one":
    case "select-multiple":
      const Z = [];
      for (const W of d.options)
        Z.push({
          value: W.value,
          label: W.label
        });
      const l = [];
      for (const W of d.selectedOptions)
        l.push({
          value: W.value,
          label: W.label
        });
      return p(Ml, {
        fieldName: d.name,
        value: l,
        options: Z
      });
    case "checkbox":
      return p(Xl, {
        fieldName: d.name,
        checked: d.checked
      });
    case "radio":
      return p(Vl, {
        fieldName: d.name,
        ...b
      });
    case "button":
      return p(Tl, {
        fieldName: d.name,
        ...b
      });
  }
}
function Ll(d) {
  return p(Nl, d.file);
}
async function yl(d, b) {
  if (d.dest) {
    if (typeof d.dest == "string")
      return p(A, {
        referencedPage: Number(d.dest.substring(1, d.dest.length)),
        offset: null
      });
    {
      const Z = await b.getPageIndex(d.dest[0]);
      return p(A, {
        referencedPage: Z + 1,
        offset: {
          left: d.dest[2],
          bottom: d.dest[3]
        }
      });
    }
  } else if (d.url)
    return p(ml, {
      url: d.url,
      unsafeUrl: d.unsafeUrl
    });
}
function r(d) {
  for (const b of d.getElementsByTagName("span")) {
    let Z = b.textContent;
    const l = JSON.parse(b.dataset.l10nArgs ?? "{}");
    if (Z)
      for (const W in l)
        Z = Z.replace(`{{${W}}}`, l[W]);
    b.textContent = Z;
  }
}
function ul(d, b, Z) {
  var W;
  let l = d.target.parentNode;
  if (l.tagName === "DIV" && (l = l.firstChild), l.className === "linkAnnotation" && d.type === "click") {
    const G = (W = l.dataset) == null ? void 0 : W.annotationId;
    if (G)
      return yl(U("id", G, Z)[0], b);
  } else if (l.className.includes("popupAnnotation") || l.className.includes("textAnnotation"))
    r(l);
  else if (l.className.includes("fileAttachmentAnnotation")) {
    r(l);
    const G = l.dataset.annotationId;
    if (G && d.type === "dblclick")
      return Ll(U("id", G, Z)[0]);
  } else if (l.className.includes("textWidgetAnnotation") && d.type === "input") {
    let G = l.getElementsByTagName("input")[0];
    return G || (G = l.getElementsByTagName("textarea")[0]), x(G);
  } else {
    if (l.className.includes("choiceWidgetAnnotation") && d.type === "input")
      return x(l.getElementsByTagName("select")[0]);
    if (l.className.includes("buttonWidgetAnnotation checkBox") && d.type === "change")
      return x(l.getElementsByTagName("input")[0]);
    if (l.className.includes("buttonWidgetAnnotation radioButton") && d.type === "change") {
      const G = l.dataset.annotationId;
      if (G) {
        const M = U("id", G, Z)[0], m = [];
        for (const X of U("fieldName", M.fieldName, Z))
          X.buttonValue && m.push(X.buttonValue);
        return x(l.getElementsByTagName("input")[0], {
          value: M.buttonValue,
          defaultValue: M.fieldValue,
          options: m
        });
      }
    } else if (l.className.includes("buttonWidgetAnnotation pushButton") && d.type === "click") {
      const G = l.dataset.annotationId;
      if (G) {
        const M = U("id", G, Z)[0];
        return M.resetForm ? x(
          { name: M.fieldName, type: "button" },
          { actions: M.actions, reset: !0 }
        ) : x(
          { name: M.fieldName, type: "button" },
          { actions: M.actions, reset: !1 }
        );
      }
    }
  }
}
class $ {
  constructor() {
    e(this, "externalLinkEnabled");
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
  set page(b) {
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
  set rotation(b) {
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
  async goToDestination(b) {
  }
  /**
     * @param {number|string} _val - The page number, or page label.
     */
  goToPage(b) {
  }
  /**
     * @param {HTMLAnchorElement} link
     * @param {string} url
     * @param {boolean} [_newWindow]
     */
  addLinkAttributes(b, Z, l = !1) {
  }
  /**
     * @param _dest - The PDF destination object.
     * @returns {string} The hyperlink to the PDF object.
     */
  getDestinationHash(b) {
    return "#";
  }
  /**
     * @param _hash - The PDF parameters/hash.
     * @returns {string} The hyperlink to the PDF object.
     */
  getAnchorUrl(b) {
    return "#";
  }
  /**
     * @param {string} _hash
     */
  setHash(b) {
  }
  /**
     * @param {string} _action
     */
  executeNamedAction(b) {
  }
  /**
     * @param {Object} _action
     */
  executeSetOCGState(b) {
  }
  /**
     * @param {number} _pageNum - page number.
     * @param {Object} _pageRef - reference to the page.
     */
  cachePageRef(b, Z) {
  }
}
const hl = /* @__PURE__ */ K({
  __name: "AnnotationLayer",
  props: {
    page: {},
    viewport: {},
    document: {},
    filter: {},
    map: {},
    imageResourcesPath: {},
    hideForms: { type: Boolean },
    enableScripting: { type: Boolean }
  },
  emits: ["annotation"],
  setup(d, { emit: b }) {
    const Z = d, l = I(), W = I();
    function G(Y) {
      const V = ul(
        Y,
        Z.document,
        W.value
      );
      Promise.resolve(V).then((L) => {
        L && b("annotation", L);
      });
    }
    async function M() {
      var V;
      return await ((V = J(Z.document)) == null ? void 0 : V.getFieldObjects());
    }
    async function m() {
      var V;
      return await ((V = J(Z.document)) == null ? void 0 : V.hasJSActions());
    }
    async function X() {
      const Y = Z.page;
      let V = await (Y == null ? void 0 : Y.getAnnotations());
      if (Z.filter) {
        const L = Z.filter;
        V = V.filter((z) => {
          const s = z.subtype, a = z.fieldType ? `${s}.${z.fieldType}` : null;
          return (L == null ? void 0 : L.includes(s)) || a !== null && (L == null ? void 0 : L.includes(a));
        });
      }
      return V;
    }
    async function h() {
      var j, O;
      (O = (j = l.value).replaceChildren) == null || O.call(j);
      for (const y of f)
        l.value.removeEventListener(y, G);
      const Y = J(Z.document), V = Z.page, L = Z.viewport;
      W.value = await X();
      const z = /* @__PURE__ */ new Map([]);
      for (const y of W.value)
        if (y.subtype === "Widget" && y.fieldType === "Btn" && y.pushButton) {
          const S = y.rect[2] - y.rect[0], t = y.rect[3] - y.rect[1], k = document.createElement("canvas");
          k.setAttribute(
            "width",
            (S * L.scale).toString()
          ), k.setAttribute(
            "height",
            (t * L.scale).toString()
          ), z.set(y.id, k);
        }
      const s = Y.annotationStorage;
      if (Z.map)
        for (const [y, S] of Object.entries(Z.map))
          s.setValue(y, S);
      await new w.AnnotationLayer({
        div: l.value,
        annotationCanvasMap: z,
        page: V,
        viewport: L.clone({ dontFlip: !0 }),
        accessibilityManager: null,
        l10n: null
      }).render({
        annotations: W.value,
        linkService: new $(),
        annotationStorage: s,
        renderForms: !Z.hideForms,
        enableScripting: !1,
        hasJSActions: await m(),
        fieldObjects: await M(),
        downloadManager: null,
        imageResourcesPath: Z.imageResourcesPath,
        viewport: L.clone({ dontFlip: !0 }),
        div: l.value,
        page: V
      });
      for (const y of f)
        l.value.addEventListener(y, G);
    }
    return F(
      () => Z.viewport,
      () => {
        Z.page && Z.viewport && l.value && h();
      }
    ), o(() => {
      Z.page && Z.viewport && l.value && h();
    }), (Y, V) => (Q(), E("div", {
      ref_key: "layer",
      ref: l,
      class: "annotationLayer",
      style: { display: "block" }
    }, null, 512));
  }
});
const zl = /* @__PURE__ */ K({
  __name: "TextLayer",
  props: {
    page: {},
    viewport: {}
  },
  setup(d) {
    const b = d, Z = I(), l = I();
    function W() {
      var L, z;
      (z = (L = Z.value).replaceChildren) == null || z.call(L);
      const m = b.page, X = b.viewport, Y = {
        textContentSource: m == null ? void 0 : m.streamTextContent({ includeMarkedContent: !0, disableNormalization: !0 }),
        viewport: X,
        container: Z.value,
        isOffscreenCanvasSupported: !0,
        textDivs: [],
        textDivProperties: /* @__PURE__ */ new WeakMap()
      };
      w.renderTextLayer(Y).promise.then(() => {
        var a;
        const s = document.createElement("div");
        s.className = "endOfContent", (a = Z.value) == null || a.appendChild(s), l.value = s;
      });
    }
    function G() {
      l.value && l.value.classList.add("active");
    }
    function M() {
      l.value && l.value.classList.remove("active");
    }
    return F(() => b.viewport, (m) => {
      b.page && b.viewport && Z.value && W();
    }), o(() => {
      b.page && b.viewport && Z.value && W();
    }), (m, X) => (Q(), E("div", {
      ref_key: "layer",
      ref: Z,
      class: "textLayer",
      style: { display: "block" },
      onMousedown: G,
      onMouseup: M
    }, null, 544));
  }
}), sl = /* @__PURE__ */ K({
  __name: "XFALayer",
  props: {
    page: {},
    document: {},
    viewport: {}
  },
  setup(d) {
    const b = d, Z = I();
    async function l() {
      var m, X;
      (X = (m = Z.value).replaceChildren) == null || X.call(m);
      const W = J(b.document), G = b.page, M = b.viewport;
      if (W.isPureXfa) {
        const h = await G.getXfa(), Y = {
          div: Z.value,
          viewport: M.clone({ dontFlip: !0 }),
          linkService: new $(),
          annotationStorage: W == null ? void 0 : W.annotationStorage,
          xfaHtml: h
        };
        w.XfaLayer.render(Y);
      }
    }
    return F(() => b.viewport, (W) => {
      b.page && b.viewport && Z.value && l();
    }), o(() => {
      b.page && b.viewport && Z.value && l();
    }), (W, G) => (Q(), E("div", {
      ref_key: "layer",
      ref: Z,
      style: { display: "block" }
    }, null, 512));
  }
});
const Il = /* @__PURE__ */ _("canvas", {
  dir: "ltr",
  style: { display: "block" },
  role: "main"
}, null, -1), q = /* @__PURE__ */ K({
  __name: "VuePDF",
  props: {
    pdf: {},
    page: { default: 1 },
    scale: { default: 1 },
    rotation: {},
    fitParent: { type: Boolean },
    textLayer: { type: Boolean },
    imageResourcesPath: {},
    hideForms: { type: Boolean },
    annotationLayer: { type: Boolean },
    annotationsFilter: {},
    annotationsMap: {},
    watermarkText: {}
  },
  emits: ["annotation", "loaded"],
  setup(d, { expose: b, emit: Z }) {
    const l = d, W = I(), G = I(), M = I(!1);
    let m;
    const X = I(), h = I(), Y = I();
    function V(c) {
      Z("loaded", c);
    }
    function L(c) {
      Z("annotation", c);
    }
    function z(c) {
      if (!(typeof c == "number" && c % 90 === 0))
        return 0;
      const N = c / 90;
      return N > 4 ? z(c - 360) : N < 0 ? z(c + 360) : c;
    }
    function s(c) {
      let N = l.scale;
      if (l.fitParent) {
        const T = W.value.parentNode.clientWidth, u = c.getViewport({ scale: 1 }).width;
        N = T / u;
      }
      return N;
    }
    function a(c, N = 18, T = 1) {
      if (!l.watermarkText)
        return;
      const u = c.getContext("2d");
      if (!u)
        return;
      u.font = `${N * T}px Trebuchet MS`, u.fillStyle = "rgba(211, 210, 211, 0.3)";
      const D = 50;
      for (let R = 0; R < D; R++) {
        const C = R % 5 * (c.width / 5) + c.width / 10, i = Math.floor(R / 5) * (c.height / 5) + c.height / 10;
        u.save(), u.translate(C, i), u.rotate(-(Math.PI / 4)), u.fillText(l.watermarkText, 0, 0), u.restore();
      }
    }
    function j() {
      var N;
      let c = null;
      return (N = W.value) == null || N.childNodes.forEach((T) => {
        T.tagName === "CANVAS" && (c = T);
      }), c;
    }
    function O(c) {
      var D;
      let N;
      const T = j();
      T && (T == null ? void 0 : T.getAttribute("role")) === "main" ? N = T : (N = document.createElement("canvas"), N.style.display = "block", N.setAttribute("dir", "ltr"));
      const u = window.devicePixelRatio || 1;
      return N.width = Math.floor(c.width * u), N.height = Math.floor(c.height * u), N.style.width = `${Math.floor(c.width)}px`, N.style.height = `${Math.floor(c.height)}px`, (D = W.value) == null || D.style.setProperty("--scale-factor", `${c.scale}`), G.value.style.width = `${Math.floor(c.width)}px`, G.value.style.height = `${Math.floor(c.height)}px`, G.value.style.top = "0", G.value.style.left = "0", M.value = !0, N;
    }
    function y() {
      m && m.cancel();
    }
    function S(c) {
      var N;
      (N = J(X.value)) == null || N.getPage(c).then((T) => {
        var v;
        y();
        const u = T.getViewport(), D = {
          scale: s(T),
          rotation: z((l.rotation || 0) + u.rotation)
        }, R = T.getViewport(D), C = j(), i = O(R), g = window.devicePixelRatio || 1, bl = g !== 1 ? [g, 0, 0, g, 0, 0] : void 0, dl = {
          canvasContext: i.getContext("2d"),
          viewport: R,
          annotationMode: l.hideForms ? w.AnnotationMode.ENABLE : w.AnnotationMode.ENABLE_FORMS,
          transform: bl
        };
        (i == null ? void 0 : i.getAttribute("role")) !== "main" ? C && ((v = W.value) == null || v.replaceChild(i, C)) : i.removeAttribute("role"), h.value = T, Y.value = R, m = T.render(dl), m.promise.then(() => {
          a(i, 18, R.scale), M.value = !1, V(Y.value);
        }).catch(() => {
        });
      });
    }
    function t(c) {
      c.promise.then(async (N) => {
        X.value = N, S(l.page);
      });
    }
    F(() => l.pdf, (c) => {
      c !== void 0 && t(c);
    }), F(() => [l.scale, l.rotation, l.page, l.hideForms, l.watermarkText], () => {
      S(l.page);
    }), o(() => {
      l.pdf !== void 0 && t(l.pdf);
    });
    function k() {
      S(l.page);
    }
    function ll() {
      y();
    }
    function Zl() {
      const c = J(X.value);
      return c == null ? void 0 : c.annotationStorage;
    }
    return b({
      reload: k,
      cancel: ll,
      getAnnotationStorage: Zl
    }), (c, N) => (Q(), E("div", {
      ref_key: "container",
      ref: W,
      style: { position: "relative", display: "block", overflow: "hidden" }
    }, [
      Il,
      H(P(hl, {
        filter: c.annotationsFilter,
        map: c.annotationsMap,
        viewport: Y.value,
        "image-resources-path": c.imageResourcesPath,
        "hide-forms": c.hideForms,
        page: h.value,
        document: X.value,
        onAnnotation: N[0] || (N[0] = (T) => L(T))
      }, null, 8, ["filter", "map", "viewport", "image-resources-path", "hide-forms", "page", "document"]), [
        [B, c.annotationLayer]
      ]),
      H(P(zl, {
        page: h.value,
        viewport: Y.value
      }, null, 8, ["page", "viewport"]), [
        [B, c.textLayer]
      ]),
      P(sl, {
        page: h.value,
        viewport: Y.value,
        document: X.value
      }, null, 8, ["page", "viewport", "document"]),
      H(_("div", {
        ref_key: "loadingLayer",
        ref: G,
        style: { position: "absolute" }
      }, [
        Gl(c.$slots, "default")
      ], 512), [
        [B, M.value]
      ])
    ], 512));
  }
function il(d) {
  w.GlobalWorkerOptions.workerSrc = d;
}
function wl(d, b = {
  onProgress: void 0,
  onPassword: void 0,
  onError: void 0,
  password: ""
}) {
  var M;
  (M = w.GlobalWorkerOptions) != null && M.workerSrc || il(Rl);
  const Z = n(), l = n(0), W = n({}), G = w.getDocument(d);
  if (b.onProgress && (G.onProgress = b.onProgress), b.onPassword)
    G.onPassword = b.onPassword;
  else if (b.password) {
    const m = (X, h) => {
      X(b.password ?? "");
    };
    G.onPassword = m;
  }
  return G.promise.then(async (m) => {
    Z.value = m.loadingTask, l.value = m.numPages;
    const X = await m.getMetadata(), h = await m.getAttachments(), Y = n(await m.getJSActions());
    Y.value && (Y.value = Object.values(Y.value).flatMap((V) => V)), W.value = {
      metadata: X,
      attachments: h,
      javascript: Y.value
    };
  }, (m) => {
    typeof b.onError == "function" && b.onError(m);
  }), {
    pdf: Z,
    pages: l,
    info: W
  };
}
const Sl = {
  install(d) {
    d.component(q.name, q);
  }
};
export {
  q as VuePDF,
  Sl as VuePDFPlugin,
  Sl as default,
  wl as usePDF
};