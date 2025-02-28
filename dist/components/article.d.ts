import { ReactNode } from 'react';
import { ArticleData } from '../utils/post-schema';
interface ArticleProps {
    data: ArticleData;
    Markdown: ReactNode;
}
export declare function Article({ data, Markdown }: ArticleProps): Promise<import("react").JSX.Element>;
export {};
