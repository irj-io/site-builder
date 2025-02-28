interface ErrorContext {
    label?: string;
    [key: string]: unknown;
}
export declare const createError: (err: unknown, { fallbackMessage }?: {
    fallbackMessage: string;
}) => Error;
export declare const captureError: (err: unknown, context?: ErrorContext) => void;
export {};
