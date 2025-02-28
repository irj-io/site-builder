import { basename, join } from 'node:path';
import { visit } from 'unist-util-visit';
export function remarkTransformImages(options) {
    const { slug } = options;
    return () => {
        return (tree) => {
            visit(tree, 'image', (node) => {
                const url = node.url;
                // If URL starts with "./images/", rewrite it
                if (url.startsWith('./images/')) {
                    const fileName = basename(url);
                    node.url = `/assets/images/${join(...slug)}/${fileName}`;
                }
            });
        };
    };
}
//# sourceMappingURL=remark-transform-images.js.map