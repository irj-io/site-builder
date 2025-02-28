import { promises as fs } from 'fs';
import path from 'path';
import { listPages } from '../database/db-adapter';
import { parseMarkdownPage } from '../utils/markdown';
import { getIsDirectory } from './content-parsing';
import { env } from './env';
import { captureError } from './error';
/**
 * Get all markdown files in a subdirectory of `content/`
 */
export const getAllArticles = async (collection) => {
    const matterData = [];
    const [pages, listPagesError] = await listPages(collection);
    if (listPagesError) {
        captureError(listPagesError);
        return [];
    }
    for (const filePath of pages) {
        if (!/\.md$/.test(filePath)) {
            continue;
        }
        const article = await readArticle(filePath);
        matterData.push(article);
    }
    matterData.sort((a, b) => {
        let aOrder = 1000;
        let bOrder = 1000;
        if ('order' in a.data && !isNaN(Number(a.data.order))) {
            aOrder = Number(a.data.order);
        }
        if ('order' in b.data && !isNaN(Number(b.data.order))) {
            bOrder = Number(b.data.order);
        }
        return aOrder - bOrder;
    });
    return matterData;
};
const filePathFromSlug = async (slug) => {
    const dbPath = env('DB_PATH');
    let filePath = path.join(dbPath, ...slug);
    const isDirectory = await getIsDirectory(filePath);
    if (isDirectory) {
        filePath += '/index';
    }
    try {
        const exists = await fs.access(`${filePath}.md`).then(() => true);
        if (exists) {
            return `${filePath}.md`;
        }
    }
    catch (_a) { }
    try {
        const exists = await fs.access(`${filePath}.yaml`).then(() => true);
        if (exists) {
            return `${filePath}.yaml`;
        }
    }
    catch (_b) { }
    return '';
};
const readArticle = async (filePath) => {
    const dbPath = env('DB_PATH');
    const hrefFragment = filePath.replace(dbPath, '').replace(/(\/index)?\.md$/, '');
    const slug = `${hrefFragment}`.split(RegExp(path.sep));
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { matter, file } = await parseMarkdownPage(fileContents, slug);
    return {
        data: matter.data,
        href: `/${hrefFragment}`,
        slug,
        toc: file.data.toc,
    };
};
export const getArticleData = async (slug) => {
    const filePath = await filePathFromSlug(slug);
    return readArticle(filePath);
};
//# sourceMappingURL=articles.js.map