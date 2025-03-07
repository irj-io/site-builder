import { expect, test } from 'vitest'

import { parseMarkdownPage } from './markdown'

test('rewrites image paths in frontmatter correctly', async () => {
	const fileContents = `---
image: "./images/my-image.png"
---
# Sample Page

Some content here.
`
	const slug = ['slug', 'to', 'page']
	const result = await parseMarkdownPage(fileContents, slug)

	// Expect the image path to be rewritten using the provided slug.
	expect(result.matter.data.image).toBe(`/assets/images/${slug.join('/')}/my-image.png`)
})
