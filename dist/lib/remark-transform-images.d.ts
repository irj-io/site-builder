import type { Node } from 'unist';
interface PluginOptions {
    slug: string[];
}
export declare function remarkTransformImages(options: PluginOptions): () => (tree: Node) => void;
export {};
