import type { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist/types/src/display/api';
import type { PageViewport } from 'pdfjs-dist/types/src/display/display_utils';
declare const _default: import("vue").DefineComponent<{
    page: {
        type: import("vue").PropType<PDFPageProxy>;
    };
    document: {
        type: import("vue").PropType<PDFDocumentProxy>;
    };
    viewport: {
        type: import("vue").PropType<PageViewport>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    page: {
        type: import("vue").PropType<PDFPageProxy>;
    };
    document: {
        type: import("vue").PropType<PDFDocumentProxy>;
    };
    viewport: {
        type: import("vue").PropType<PageViewport>;
    };
}>>, {}, {}>;
export default _default;
