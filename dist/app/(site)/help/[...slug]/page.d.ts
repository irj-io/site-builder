export declare const dynamicParams = false;
export declare function generateStaticParams(): Promise<{
    slug: string[];
}[] | undefined>;
export default function HelpPage({ params }: {
    params: Promise<{
        slug: string[];
    }>;
}): Promise<import("react").JSX.Element>;
