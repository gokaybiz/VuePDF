declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    page: import("pdfjs-dist/types/src/display/api.js").PDFPageProxy | null;
    viewport: import("pdfjs-dist/types/src/display/display_utils.js").PageViewport | null;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    page: import("pdfjs-dist/types/src/display/api.js").PDFPageProxy | null;
    viewport: import("pdfjs-dist/types/src/display/display_utils.js").PageViewport | null;
}>>>, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
