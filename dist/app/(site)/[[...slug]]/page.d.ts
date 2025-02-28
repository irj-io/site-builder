import { DefaultPage } from '@/components/default-page';
export declare const dynamicParams = false;
export declare function generateStaticParams(): Promise<{
    slug: string[];
}[] | undefined>;
export default DefaultPage;
