import { EnvironmentVariables } from '../utils/env';
export declare class EnvVarError extends Error {
    constructor(envVar: EnvironmentVariables, options?: ErrorOptions);
}
export declare class UnsupportedFileError extends Error {
    constructor(filePath: string, options?: ErrorOptions);
}
