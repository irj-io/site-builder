/**
 * Get all markdown files in a subdirectory of `content/`
 */
export declare const getAllArticles: (collection: string) => Promise<{
    data: {
        [key: string]: any;
    };
    href: string;
    slug: string[];
    toc: import("../utils/markdown").TocItem[];
}[]>;
export declare const getArticleData: (slug: string[]) => Promise<{
    data: {
        [key: string]: any;
    };
    href: string;
    slug: string[];
    toc: import("../utils/markdown").TocItem[];
}>;
