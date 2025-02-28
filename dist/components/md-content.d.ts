import { HTMLAttributes } from 'react';
interface DataAttributes {
    [key: `data-${string}`]: string | number | boolean | undefined;
}
interface MdContentProps extends HTMLAttributes<HTMLSpanElement>, DataAttributes {
    markdown: string;
}
export declare function MdContent({ markdown, ...props }: MdContentProps): Promise<import("react").JSX.Element>;
export {};
