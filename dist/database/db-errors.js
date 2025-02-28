export class EnvVarError extends Error {
    constructor(envVar, options) {
        const message = `Environment variable not defined: ${envVar}`;
        super(message, options);
    }
}
export class UnsupportedFileError extends Error {
    constructor(filePath, options) {
        const message = `Invalid or unsupported file type: ${filePath}`;
        super(message, options);
    }
}
//# sourceMappingURL=db-errors.js.map