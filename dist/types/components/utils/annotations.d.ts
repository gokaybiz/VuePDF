import type { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';
import type { AnnotationEventPayload } from '../types';
declare const EVENTS_TO_HANDLER: string[];
declare function annotationEventsHandler(evt: Event, PDFDoc: PDFDocumentProxy, Annotations: Object[]): AnnotationEventPayload | Promise<AnnotationEventPayload | undefined> | undefined;
export { EVENTS_TO_HANDLER, annotationEventsHandler, };
