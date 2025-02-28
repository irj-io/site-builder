// Create guaranteed error from javascript catch result
export const createError = (err, { fallbackMessage } = { fallbackMessage: 'Unknown error' }) => {
    if (err instanceof Error) {
        return err;
    }
    else if (typeof err === 'string') {
        return new Error(err);
    }
    else {
        return new Error(fallbackMessage, { cause: err });
    }
};
export const captureError = (err, context) => {
    const error = createError(err);
    console.error(error);
    if (context) {
        console.table(context);
    }
};
//# sourceMappingURL=error.js.map