import { promises as fs } from 'fs';
import path from 'path';
const fileExists = async (filepath) => {
    try {
        await fs.access(filepath);
        return true;
    }
    catch (_a) {
        return false;
    }
};
export const getExtension = async (basePath) => {
    try {
        if (await fileExists(`${basePath}.yaml`))
            return 'yaml';
        if (await fileExists(`${basePath}.yml`))
            return 'yml';
        if (await fileExists(`${basePath}.md`))
            return 'md';
        return path.extname(basePath).toLowerCase().slice(1) || 'unknown';
    }
    catch (_a) {
        return 'unknown';
    }
};
export const getSlugFromFilePath = (filePath) => {
    return filePath
        .replace(/\.[A-Za-z0-9]+?$/, '')
        .split(path.sep)
        .filter((segment) => segment !== 'index');
};
//# sourceMappingURL=file-utils.js.map