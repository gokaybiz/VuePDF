import type { AnnotationEventPayload } from '../types';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    page: import("pdfjs-dist/types/src/display/api").PDFPageProxy | null;
    viewport: import("pdfjs-dist/types/src/display/display_utils").PageViewport | null;
    document: import("pdfjs-dist/types/src/display/api").PDFDocumentProxy | null;
    filter?: string[] | undefined;
    map?: object | undefined;
    imageResourcesPath?: string | undefined;
    hideForms?: boolean | undefined;
    enableScripting?: boolean | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    annotation: (payload: AnnotationEventPayload) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    page: import("pdfjs-dist/types/src/display/api").PDFPageProxy | null;
    viewport: import("pdfjs-dist/types/src/display/display_utils").PageViewport | null;
    document: import("pdfjs-dist/types/src/display/api").PDFDocumentProxy | null;
    filter?: string[] | undefined;
    map?: object | undefined;
    imageResourcesPath?: string | undefined;
    hideForms?: boolean | undefined;
    enableScripting?: boolean | undefined;
}>>> & {
    onAnnotation?: ((payload: AnnotationEventPayload) => any) | undefined;
}, {}>;
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
