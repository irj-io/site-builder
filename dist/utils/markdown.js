import path from 'path';
import matter from 'gray-matter';
import { createElement } from 'react';
import jsxRuntime from 'react/jsx-runtime';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeRaw from 'rehype-raw';
import rehypeReact from 'rehype-react';
import rehypeSanitize from 'rehype-sanitize';
import rehypeSlug from 'rehype-slug';
import remarkFlexibleToc from 'remark-flexible-toc';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { MdBlockquote, MdCode, MdH1, MdH2, MdH3, MdH4, MdH5, MdH6, MdImg, MdLink, MdOl, MdParagraph, MdUl, } from '../components/markdown-components';
import { remarkTransformImages } from '../lib/remark-transform-images';
const pageComponents = {
    h1: MdH1,
    h2: MdH2,
    h3: MdH3,
    h4: MdH4,
    h5: MdH5,
    h6: MdH6,
    p: MdParagraph,
    blockquote: MdBlockquote,
    ul: MdUl,
    ol: MdOl,
    code: MdCode,
    a: MdLink,
    img: MdImg,
};
const contentComponents = {
    h1: MdH1,
    h2: MdH2,
    h3: MdH3,
    h4: MdH4,
    h5: MdH5,
    h6: MdH6,
    p: MdParagraph,
    blockquote: MdBlockquote,
    ul: MdUl,
    ol: MdOl,
    code: MdCode,
    a: MdLink,
    img: MdImg,
};
const rewriteImagePaths = (matter, slug) => {
    for (const key in matter.data) {
        const value = matter.data[key];
        if (typeof value === 'string' && value.startsWith('./images/')) {
            const fileName = path.basename(value);
            matter.data[key] = `/assets/images/${path.join(...slug)}/${fileName}`;
        }
        else if (typeof value === 'object' && 'src' in value && value.src.startsWith('./images/')) {
            const fileName = path.basename(value.src);
            matter.data[key].src = `/assets/images/${path.join(...slug)}/${fileName}`;
        }
    }
    return matter;
};
export const parseMarkdownContent = async (content) => {
    const file = await unified()
        .use(remarkParse, { fragment: true })
        .use(remarkGfm)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeSanitize)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings)
        .use(rehypeReact, {
        Fragment: jsxRuntime.Fragment,
        jsx: jsxRuntime.jsx,
        jsxs: jsxRuntime.jsxs,
        createElement,
        components: contentComponents,
    })
        .process(content);
    return file.result;
};
export const parseMarkdownPage = async (fileContents, slug) => {
    // Use gray-matter to parse the post metadata section
    const matterResult = rewriteImagePaths(matter(fileContents), slug);
    const file = await unified()
        .use(remarkParse, { fragment: true })
        .use(remarkGfm)
        .use(remarkFlexibleToc)
        .use(remarkTransformImages({ slug }))
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeSanitize)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings)
        .use(rehypeReact, {
        Fragment: jsxRuntime.Fragment,
        jsx: jsxRuntime.jsx,
        jsxs: jsxRuntime.jsxs,
        createElement,
        components: pageComponents,
    })
        .process(matterResult.content);
    return {
        file,
        matter: matterResult,
    };
};
//# sourceMappingURL=markdown.js.map