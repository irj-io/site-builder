import { promises as fs } from 'fs';
export const getIsDirectory = async (filePath) => {
    try {
        const stats = await fs.lstat(filePath);
        // If is directory
        if (stats.isDirectory()) {
            return true;
        }
    }
    catch (_a) { }
    return false;
};
//# sourceMappingURL=content-parsing.js.map