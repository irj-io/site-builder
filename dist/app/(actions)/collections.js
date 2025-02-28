import { listCollections, loadFile, parseFile } from '@/database/db-adapter';
import { captureError } from '@/utils/error';
import { YamlCollectionSchema } from '@/utils/yaml-schema';
export async function getCollection(collectionId) {
    const [files, listError] = await listCollections();
    // TODO: handle this better than throwing
    if (listError) {
        captureError(listError);
        return null;
    }
    const validationErrors = [];
    for (const file of files) {
        const [content, loadFileError] = await loadFile(file);
        if (loadFileError) {
            captureError(loadFileError, { label: 'getCollection:loadFile' });
            continue;
        }
        const [result, parseFileError] = await parseFile(file, content);
        if (parseFileError) {
            captureError(parseFileError, { label: 'getCollection:parseFile' });
            continue;
        }
        if (result.type === 'yaml') {
            const parseResult = YamlCollectionSchema.safeParse(result.data.content);
            if (parseResult.success) {
                const collections = parseResult.data.collections;
                if (collections[collectionId]) {
                    return collections[collectionId];
                }
            }
            else {
                validationErrors.push(parseResult.error);
            }
        }
    }
    console.groupCollapsed('schema debugging');
    console.debug(validationErrors);
    console.groupEnd();
    const error = new Error(`Failed to find collection for id:${collectionId}`);
    captureError(error);
    return null;
}
//# sourceMappingURL=collections.js.map