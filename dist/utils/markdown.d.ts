import { GrayMatterFile } from 'gray-matter';
import { ReactNode } from 'react';
export interface TocItem {
    depth: number;
    href: string;
    numbering: [number, number];
    parent: string;
    value: string;
}
export interface MarkdownFile {
    data: {
        toc: TocItem[];
    };
    value: string;
    result: ReactNode;
}
interface ParseMarkdownResult {
    file: MarkdownFile;
    matter: GrayMatterFile<string>;
}
export declare const parseMarkdownContent: (content: string) => Promise<ReactNode>;
export declare const parseMarkdownPage: (fileContents: string, slug: string[]) => Promise<ParseMarkdownResult>;
export {};
