import 'pdfjs-dist/web/pdf_viewer.css';
import type { AnnotationEventPayload } from './types';
declare function reload(): void;
declare function cancel(): void;
declare function getAnnotationStorage(): {
    onSetModified: any;
    onResetModified: any;
    onAnnotationEditor: any;
    getValue: (key: string, defaultValue: Object) => Object;
    getRawValue: (key: string) => Object;
    remove: (key: string) => void;
    setValue: (key: string, value: Object) => void;
    has: (key: string) => boolean;
    getAll: () => Object | null;
    setAll: (obj: Object) => void;
    readonly size: number;
    resetModified: () => void;
    readonly print: {
        readonly serializable: null;
        onSetModified: any;
        onResetModified: any;
        onAnnotationEditor: any;
        getValue: (key: string, defaultValue: Object) => Object;
        getRawValue: (key: string) => Object;
        remove: (key: string) => void;
        setValue: (key: string, value: Object) => void;
        has: (key: string) => boolean;
        getAll: () => Object | null;
        setAll: (obj: Object) => void;
        readonly size: number;
        resetModified: () => void;
        readonly print: any;
    };
    readonly serializable: Map<any, any> | null;
} | undefined;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    pdf?: import("pdfjs-dist/types/src/display/api").PDFDocumentLoadingTask | undefined;
    page?: number | undefined;
    scale?: number | undefined;
    rotation?: number | undefined;
    fitParent?: boolean | undefined;
    textLayer?: boolean | undefined;
    imageResourcesPath?: string | undefined;
    hideForms?: boolean | undefined;
    annotationLayer?: boolean | undefined;
    annotationsFilter?: string[] | undefined;
    annotationsMap?: object | undefined;
    watermarkText?: string | undefined;
}>, {
    page: number;
    scale: number;
}>, {
    reload: typeof reload;
    cancel: typeof cancel;
    getAnnotationStorage: typeof getAnnotationStorage;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    annotation: (payload: AnnotationEventPayload) => void;
    loaded: (payload: import("pdfjs-dist/types/src/display/display_utils").PageViewport) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    pdf?: import("pdfjs-dist/types/src/display/api").PDFDocumentLoadingTask | undefined;
    page?: number | undefined;
    scale?: number | undefined;
    rotation?: number | undefined;
    fitParent?: boolean | undefined;
    textLayer?: boolean | undefined;
    imageResourcesPath?: string | undefined;
    hideForms?: boolean | undefined;
    annotationLayer?: boolean | undefined;
    annotationsFilter?: string[] | undefined;
    annotationsMap?: object | undefined;
    watermarkText?: string | undefined;
}>, {
    page: number;
    scale: number;
}>>> & {
    onAnnotation?: ((payload: AnnotationEventPayload) => any) | undefined;
    onLoaded?: ((payload: import("pdfjs-dist/types/src/display/display_utils").PageViewport) => any) | undefined;
}, {
    scale: number;
    page: number;
}>, {
    default?(_: {}): any;
}>;
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
