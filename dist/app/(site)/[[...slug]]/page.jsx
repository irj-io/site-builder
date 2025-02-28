import { DefaultPage } from '@/components/default-page';
import { getStaticParamsFromFiles } from '@/utils/get-static-params-from-files';
export const dynamicParams = false;
export async function generateStaticParams() {
    return getStaticParamsFromFiles();
}
export default DefaultPage;
//# sourceMappingURL=page.jsx.map