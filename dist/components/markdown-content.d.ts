import { ReactNode } from 'react';
import { MarkdownData } from '../utils/post-schema';
interface MarkdownContentProps {
    data: MarkdownData;
    Markdown: ReactNode;
}
export declare function MarkdownContent({ data, Markdown }: MarkdownContentProps): Promise<import("react").JSX.Element>;
export {};
