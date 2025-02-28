import { ReactNode } from 'react';
import { ArticleData, MarkdownData } from '@/utils/post-schema';
import { YamlGlobal, YamlPage } from '@/utils/yaml-schema';
type ResultOrError<T, U = Error> = [T, null] | [null, U];
interface MarkdownFileData {
    type: 'md';
    data: {
        frontMatter: ArticleData | MarkdownData;
        nodes: ReactNode;
    };
}
interface YamlFileData {
    type: 'yaml';
    data: {
        content: YamlPage;
        nodes: ReactNode;
    };
}
type FileData = MarkdownFileData | YamlFileData;
export declare const loadGlobalData: () => Promise<ResultOrError<YamlGlobal>>;
export declare const loadPage: (slug: string[] | undefined) => Promise<ResultOrError<FileData>>;
export declare const listCollections: () => Promise<ResultOrError<string[]>>;
export declare const listPages: (directory?: string) => Promise<ResultOrError<string[]>>;
export declare const loadFile: (filePath: string) => Promise<ResultOrError<string>>;
export declare const saveFile: (filePath: string, contents: string) => Promise<ResultOrError<boolean>>;
export declare const parseFile: (filePath: string, contents: string) => Promise<ResultOrError<FileData>>;
export {};
