import { promises as fs } from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'

import { listCollections, listPages, loadFile, loadPage, parseFile, saveFile } from './db-adapter'

vi.mock('../utils/markdown', () => ({
	parseMarkdownPage: async (
		content: string
	): Promise<{
		file: { value: string; result: string }
		matter: { data: { authorEmail: string; title: string } }
	}> => {
		return {
			file: { value: `parsed: ${content}`, result: `node: ${content}` },
			matter: { data: { authorEmail: 'dummy@example.com', title: 'Dummy Title' } },
		}
	},
}))

let tempDir: string

beforeAll(async () => {
	// Create a temporary directory for our test DB content.
	tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'db-adapter-test-'))
	// Point DB_PATH to the temporary directory.
	process.env.DB_PATH = tempDir
})

afterAll(async () => {
	// Cleanup the temporary directory after tests complete.
	await fs.rm(tempDir, { recursive: true, force: true })
	process.env.DB_PATH = ''
})

describe('loadPage', () => {
	it('should load a markdown file when given a slug for a file', async () => {
		// Write a dummy file "hello.md" in tempDir.
		const fileName = 'hello.md'
		const filePath = path.join(tempDir, fileName)
		const content = '# Hello\nThis is a test.'
		await fs.writeFile(filePath, content, 'utf8')

		const [result, error] = await loadPage(['hello'])
		expect(error).toBeNull()
		expect(result).not.toBeNull()
		if (result) {
			expect(result.type).toBe('md')
			if (result.type === 'md') {
				// Our markdown mock prefixes content with "parsed: "
				expect(result.data.frontMatter._contentHtml).toBe(`parsed: ${content}`)
			}
		}
	})

	it('should load a markdown file when given a slug for a directory with index.md', async () => {
		// Create a directory "dir" and write "index.md" inside it.
		const dirPath = path.join(tempDir, 'dir')
		await fs.mkdir(dirPath)
		const indexPath = path.join(dirPath, 'index.md')
		const content = '# Index\nDirectory index file.'
		await fs.writeFile(indexPath, content, 'utf8')

		const [result, error] = await loadPage(['dir'])
		expect(error).toBeNull()
		expect(result).not.toBeNull()
		if (result) {
			expect(result.type).toBe('md')
			if (result.type === 'md') {
				expect(result.data.frontMatter._contentHtml).toBe(`parsed: ${content}`)
			}
		}
	})

	it('should throw an error when file does not exist', async () => {
		await expect(loadPage(['nonexistent'])).rejects.toThrow()
	})
})

describe('listCollections', () => {
	it('should list collection YAML files', async () => {
		// Create a dummy collection file: "test.collection.yaml"
		const fileName = 'test.collection.yaml'
		const filePath = path.join(tempDir, fileName)
		await fs.writeFile(filePath, 'dummy: data', 'utf8')

		const [files, error] = await listCollections()
		expect(error).toBeNull()
		expect(files).toContain(filePath)
	})
})

describe('listPages', () => {
	it('should list page files excluding images, global, and collection YAMLs', async () => {
		// Create a dummy page file "page.md"
		const pageFile = 'page.md'
		const pageFilePath = path.join(tempDir, pageFile)
		await fs.writeFile(pageFilePath, '# Page', 'utf8')

		// Create a dummy global YAML file "global.yaml"
		const globalFile = 'global.yaml'
		const globalFilePath = path.join(tempDir, globalFile)
		await fs.writeFile(globalFilePath, 'global: true', 'utf8')

		// Create an image file inside "images"
		const imageDir = path.join(tempDir, 'images')
		await fs.mkdir(imageDir, { recursive: true })
		const imageFile = 'pic.jpg'
		await fs.writeFile(path.join(imageDir, imageFile), 'binarydata', 'utf8')

		const [files, error] = await listPages()
		expect(error).toBeNull()
		expect(files).not.toBeNull()

		if (files) {
			expect(files).toContain(expect.objectContaining({ filePath: pageFilePath }))
			expect(files).not.toContain(expect.objectContaining({ filePath: globalFilePath }))
			expect(files.some((file) => file.filePath.includes('images'))).toBe(false)
		}
	})
})

describe('loadFile', () => {
	it('should load file content if file exists', async () => {
		const fileName = 'loadtest.md'
		const filePath = path.join(tempDir, fileName)
		const content = 'File content for load test'
		await fs.writeFile(filePath, content, 'utf8')

		const [result, error] = await loadFile(filePath)
		expect(error).toBeNull()
		expect(result).toBe(content)
	})

	it('should return an error if file does not exist', async () => {
		const filePath = path.join(tempDir, 'nonexistent.md')
		const [result, error] = await loadFile(filePath)
		expect(result).toBeNull()
		expect(error).not.toBeNull()
	})

	it('should return an error for an empty filePath', async () => {
		const [result, error] = await loadFile('')
		expect(result).toBeNull()
		expect(error).not.toBeNull()
	})
})

describe('saveFile', () => {
	it('should save file content to disk', async () => {
		const fileName = 'save.md'
		const filePath = path.join(tempDir, fileName)
		const content = 'Saved content'
		const [result, error] = await saveFile(filePath, content)
		expect(error).toBeNull()
		expect(result).toBe(true)

		const savedContent = await fs.readFile(filePath, 'utf8')
		expect(savedContent).toBe(content)
	})
})

describe('parseFile', () => {
	it('should parse a markdown file', async () => {
		const fileName = 'parse.md'
		const filePath = path.join(tempDir, fileName)
		const content = '# Markdown'
		const [result, error] = await parseFile(filePath, content)
		expect(error).toBeNull()
		expect(result).not.toBeNull()
		if (result) {
			expect(result.type).toBe('md')
			if (result.type === 'md') {
				expect(result.data.frontMatter._contentHtml).toBe(`parsed: ${content}`)
			}
		}
	})

	it('should parse a yaml file', async () => {
		const fileName = 'parse.yaml'
		const filePath = path.join(tempDir, fileName)
		const content = 'key: value'
		const [result, error] = await parseFile(filePath, content)
		expect(error).toBeNull()
		expect(result).not.toBeNull()
		if (result && result.type === 'yaml') {
			expect(result.data.content).toEqual(expect.objectContaining({ key: 'value' }))
		}
	})

	it('should return an error for unsupported file extensions', async () => {
		const fileName = 'parse.txt'
		const filePath = path.join(tempDir, fileName)
		const [result, error] = await parseFile(filePath, 'data')
		expect(result).toBeNull()
		expect(error).not.toBeNull()
	})
})
