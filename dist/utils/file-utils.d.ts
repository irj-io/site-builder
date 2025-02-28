export type FileType = 'yaml' | 'markdown' | 'unknown';
export declare const getExtension: (basePath: string) => Promise<string>;
export declare const getSlugFromFilePath: (filePath: string) => string[];
