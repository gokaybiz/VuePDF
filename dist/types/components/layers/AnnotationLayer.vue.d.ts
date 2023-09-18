import type { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist/types/src/display/api';
import type { PageViewport } from 'pdfjs-dist/types/src/display/display_utils';
import type { AnnotationEventPayload } from '../types';
declare const _default: import("vue").DefineComponent<{
    page: {
        type: import("vue").PropType<PDFPageProxy>;
    };
    viewport: {
        type: import("vue").PropType<PageViewport>;
    };
    document: {
        type: import("vue").PropType<PDFDocumentProxy>;
    };
    filter: {
        type: import("vue").PropType<string[]>;
    };
    map: {
        type: import("vue").PropType<object>;
    };
    imageResourcesPath: {
        type: import("vue").PropType<string>;
    };
    hideForms: {
        type: import("vue").PropType<boolean>;
    };
    enableScripting: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    annotation: (payload: AnnotationEventPayload) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    page: {
        type: import("vue").PropType<PDFPageProxy>;
    };
    viewport: {
        type: import("vue").PropType<PageViewport>;
    };
    document: {
        type: import("vue").PropType<PDFDocumentProxy>;
    };
    filter: {
        type: import("vue").PropType<string[]>;
    };
    map: {
        type: import("vue").PropType<object>;
    };
    imageResourcesPath: {
        type: import("vue").PropType<string>;
    };
    hideForms: {
        type: import("vue").PropType<boolean>;
    };
    enableScripting: {
        type: import("vue").PropType<boolean>;
    };
}>> & {
    onAnnotation?: ((payload: AnnotationEventPayload) => any) | undefined;
}, {}, {}>;
export default _default;
