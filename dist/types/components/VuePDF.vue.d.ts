import 'pdfjs-dist/web/pdf_viewer.css';
import type { PDFDocumentLoadingTask } from 'pdfjs-dist/types/src/display/api';
import type { PageViewport } from 'pdfjs-dist/types/src/display/display_utils';
import type { AnnotationEventPayload } from './types';
declare function reload(): void;
declare function cancel(): void;
declare function getAnnotationStorage(): import("pdfjs-dist/types/src/display/annotation_storage").AnnotationStorage | undefined;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    page: {
        type: import("vue").PropType<number>;
        default: number;
    };
    imageResourcesPath: {
        type: import("vue").PropType<string>;
    };
    hideForms: {
        type: import("vue").PropType<boolean>;
    };
    annotationLayer: {
        type: import("vue").PropType<boolean>;
    };
    textLayer: {
        type: import("vue").PropType<boolean>;
    };
    pdf: {
        type: import("vue").PropType<PDFDocumentLoadingTask>;
    };
    scale: {
        type: import("vue").PropType<number>;
        default: number;
    };
    rotation: {
        type: import("vue").PropType<number>;
    };
    fitParent: {
        type: import("vue").PropType<boolean>;
    };
    annotationsFilter: {
        type: import("vue").PropType<string[]>;
    };
    annotationsMap: {
        type: import("vue").PropType<object>;
    };
    watermarkText: {
        type: import("vue").PropType<string>;
    };
}, {
    reload: typeof reload;
    cancel: typeof cancel;
    getAnnotationStorage: typeof getAnnotationStorage;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    annotation: (payload: AnnotationEventPayload) => void;
    loaded: (payload: PageViewport) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    page: {
        type: import("vue").PropType<number>;
        default: number;
    };
    imageResourcesPath: {
        type: import("vue").PropType<string>;
    };
    hideForms: {
        type: import("vue").PropType<boolean>;
    };
    annotationLayer: {
        type: import("vue").PropType<boolean>;
    };
    textLayer: {
        type: import("vue").PropType<boolean>;
    };
    pdf: {
        type: import("vue").PropType<PDFDocumentLoadingTask>;
    };
    scale: {
        type: import("vue").PropType<number>;
        default: number;
    };
    rotation: {
        type: import("vue").PropType<number>;
    };
    fitParent: {
        type: import("vue").PropType<boolean>;
    };
    annotationsFilter: {
        type: import("vue").PropType<string[]>;
    };
    annotationsMap: {
        type: import("vue").PropType<object>;
    };
    watermarkText: {
        type: import("vue").PropType<string>;
    };
}>> & {
    onAnnotation?: ((payload: AnnotationEventPayload) => any) | undefined;
    onLoaded?: ((payload: PageViewport) => any) | undefined;
}, {
    page: number;
    scale: number;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
