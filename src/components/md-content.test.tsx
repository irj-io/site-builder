import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { MdContent } from './md-content'

test('renders a markdown heading', async () => {
	const markdown = '# Hello World'
	const element = await MdContent({ markdown })
	render(element)

	const heading = screen.getByRole('heading', { level: 1 })
	expect(heading).toHaveTextContent('Hello World')
})

test('sanitizes dangerous HTML', async () => {
	const markdown = 'Hello<script>alert("xss")</script>World'
	const element = await MdContent({ markdown })
	render(element)

	// The script tag should be removed so the text renders without it.
	expect(screen.getByText('HelloWorld')).toBeInTheDocument()
	expect(screen.queryByText('alert("xss")')).not.toBeInTheDocument()
})

test('renders a code block', async () => {
	const markdown = "```js\nconsole.log('hello');\n```"
	const element = await MdContent({ markdown })
	render(element)

	// Find the code element and ensure it's within a <pre> block.
	const codeElement = screen.getByText("console.log('hello');")
	expect(codeElement.tagName.toLowerCase()).toBe('code')
	expect(codeElement.closest('pre')).toBeInTheDocument()
})

test('renders an unordered list', async () => {
	const markdown = `
- Item 1
- Item 2
  - Nested Item
`
	const element = await MdContent({ markdown })
	render(element)

	// Verify that all list items appear.
	expect(screen.getByText('Item 1')).toBeInTheDocument()
	expect(screen.getByText('Item 2')).toBeInTheDocument()
	expect(screen.getByText('Nested Item')).toBeInTheDocument()

	// Get all list elements.
	const lists = screen.getAllByRole('list')

	// The outer list should not be nested in any <li>.
	const outerList = lists.find((list) => list.closest('li') === null)
	expect(outerList).toBeDefined()

	// Check that the outer list contains a nested list.
	const nestedList = outerList!.querySelector('ul')
	expect(nestedList).toBeInTheDocument()

	// Verify that the nested list contains exactly one list item.
	const nestedItems = nestedList ? nestedList.querySelectorAll('li') : []
	expect(nestedItems.length).toBe(1)
})

test('renders autolink headings with anchor links', async () => {
	const markdown = '# Autolink Heading'
	const element = await MdContent({ markdown })
	render(element)

	// Use the accessible name to get the correct heading.
	const heading = screen.getByRole('heading', { level: 1, name: 'Autolink Heading' })
	expect(heading).toBeInTheDocument()

	const anchor = heading.querySelector('a')
	expect(anchor).toBeInTheDocument()
	expect(anchor).toHaveAttribute('href', '#autolink-heading')
})

test('renders inline code correctly', async () => {
	const markdown = 'This is inline code: `const x = 10;`'
	const element = await MdContent({ markdown })
	render(element)

	// Find the inline code element and assert it's rendered within a <code> tag.
	const codeElement = screen.getByText('const x = 10;')
	expect(codeElement.tagName.toLowerCase()).toBe('code')
})

test('renders a markdown link correctly', async () => {
	const markdown = '[My Link](https://example.com)'
	const element = await MdContent({ markdown })
	render(element)

	const link = screen.getByRole('link', { name: /My Link/i })
	expect(link).toHaveAttribute('href', 'https://example.com')
})

test('renders a markdown image correctly', async () => {
	const markdown = '![Sample Image](https://example.com/sample.png)'
	const element = await MdContent({ markdown })
	render(element)

	const image = screen.getByRole('img', { name: /Sample Image/i })
	expect(image).toHaveAttribute(
		'src',
		`/_next/image?url=${encodeURIComponent('https://example.com/sample.png')}&w=3840&q=75`
	)
})

test('renders a markdown blockquote correctly', async () => {
	const markdown = '> This is a blockquote'
	const element = await MdContent({ markdown })
	render(element)

	const blockquoteText = screen.getByText('This is a blockquote')
	expect(blockquoteText.closest('blockquote')).toBeInTheDocument()
})

test('forwards additional props to the wrapping element', async () => {
	const markdown = 'Hello World'
	const element = await MdContent({
		markdown,
		'data-testid': 'wrapper',
		className: 'test-class',
	})
	render(element)

	const wrapper = screen.getByTestId('wrapper')
	expect(wrapper).toHaveClass('test-class')
	expect(wrapper).toHaveTextContent('Hello World')
})

test('renders multiple paragraphs correctly', async () => {
	const markdown = `Paragraph one.

Paragraph two.`
	const element = await MdContent({ markdown })
	render(element)

	expect(screen.getByText('Paragraph one.')).toBeInTheDocument()
	expect(screen.getByText('Paragraph two.')).toBeInTheDocument()
})
