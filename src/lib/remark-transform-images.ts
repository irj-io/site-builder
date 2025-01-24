import path from 'node:path'
import type { Node } from 'unist'
import { visit } from 'unist-util-visit'

interface PluginOptions {
	slug: string[]
}

export function remarkTransformImages(options: PluginOptions) {
	const { slug } = options
	return () => {
		return (tree: Node) => {
			visit(tree, 'image', (node: { url: string }) => {
				const url: string = node.url
				// If URL starts with "./images/", rewrite it
				if (url.startsWith('./images/')) {
					const fileName = path.basename(url)
					node.url = `/assets/images/${path.join(...slug)}/${fileName}`
				}
			})
		}
	}
}
