'use server'

import { promises as fs } from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import type { ReactNode } from 'react'
import { parse } from 'yaml'

import { isJsonComposite, type Json } from '../json-type'
import { getIsDirectory } from '../utils/content-parsing'
import { env } from '../utils/env'
import { captureError, createError } from '../utils/error'
import { getExtension, getFileType, getSlugFromFilePath } from '../utils/file-utils'
import { getAvatarImageUrl } from '../utils/gravatar'
import { parseMarkdownPage } from '../utils/markdown'
import { parseLayout } from '../utils/parse-layout'
import {
	ArticleDataSchema,
	MarkdownDataSchema,
	type ArticleData,
	type MarkdownData,
} from '../utils/post-schema'
import { YamlGlobalSchema, type YamlGlobal, type YamlPage } from '../utils/yaml-schema'
import { EnvVarError, UnsupportedFileError } from './db-errors'

type ResultOrError<T, U = Error> = [T, null] | [null, U]

export interface PageDetails {
	filePath: string
	slug: string[]
	published: boolean
}

interface MarkdownFileData {
	type: 'md'
	data: {
		frontMatter: ArticleData | MarkdownData
		nodes: ReactNode
	}
}

interface YamlFileData {
	type: 'yaml'
	data: {
		content: YamlPage
		nodes: ReactNode
	}
}

type FileData = MarkdownFileData | YamlFileData

const IMAGE_DIR = /images(\/.+)?$/
const GLOBAL_YAML = /global\.ya?ml$/
const COLLECTION_YAML = /\.collection\.ya?ml$/

const getPageDetails = async (filePath: string): Promise<ResultOrError<PageDetails>> => {
	const [content, loadError] = await loadFile(filePath)
	if (loadError) {
		return [null, loadError]
	}

	const pageDetails: PageDetails = {
		filePath,
		slug: getSlugFromFilePath(filePath),
		published: true,
	}

	const fileType = await getFileType(filePath)

	let result: object = {}
	switch (fileType) {
		case 'markdown': {
			const { data } = matter(content)
			result = data
			break
		}

		case 'yaml': {
			const yaml: Json = parse(content, { merge: true })
			if (isJsonComposite(yaml)) {
				result = yaml
			}
			break
		}
	}

	if ('published' in result && result.published === false) {
		pageDetails.published = false
	}
	return [pageDetails, null]
}

const parseMarkdown = async (
	content: string,
	slug: string[]
): Promise<MarkdownFileData['data']> => {
	const { file, matter } = await parseMarkdownPage(content, slug)
	let frontMatter: ArticleData | MarkdownData
	// TODO: move this out of the database adapter
	if (slug[0] === 'help') {
		frontMatter = ArticleDataSchema.parse({
			_contentHtml: file.value,
			slug,
			authorAvatarUrl: getAvatarImageUrl(matter.data.authorEmail),
			...matter.data,
		})
	} else {
		frontMatter = MarkdownDataSchema.parse({
			_contentHtml: file.value,
			slug,
			authorAvatarUrl: getAvatarImageUrl(matter.data.authorEmail),
			...matter.data,
		})
	}
	return {
		frontMatter,
		nodes: file.result,
	}
}

const rewriteImagePaths = (yaml: string, slug: string[]) => {
	const replacement =
		slug.length > 0 ? `$1/assets/images/${path.join(...slug)}/` : `$1/assets/images/`
	return yaml.replace(/(src:\s)\.\/images\//g, replacement)
}

const parseYaml = async (content: string): Promise<YamlFileData['data']> => {
	const yaml = parse(content, { merge: true })
	const layoutComponents = await parseLayout(yaml)
	return {
		content: yaml,
		nodes: layoutComponents,
	}
}

const createMarkdownData = (data: MarkdownFileData['data']): MarkdownFileData => ({
	type: 'md',
	data,
})

const createYamlData = (data: YamlFileData['data']): YamlFileData => ({
	type: 'yaml',
	data,
})

export const loadGlobalData = async (): Promise<ResultOrError<YamlGlobal>> => {
	const dbPath = env('DB_PATH')
	if (!dbPath) {
		return [null, new EnvVarError('DB_PATH')]
	}

	const filePath = path.join(dbPath, 'global.yaml')

	const [content, loadError] = await loadFile(filePath)
	if (loadError) {
		return [null, loadError]
	}

	try {
		const yaml = parse(content, { merge: true })
		const result = YamlGlobalSchema.safeParse(yaml)
		if (result.success) {
			return [result.data, null]
		} else {
			return [null, result.error]
		}
	} catch (err) {
		const error = createError(err)
		return [null, error]
	}
}

export const loadPage = async (slug: string[] | undefined): Promise<ResultOrError<FileData>> => {
	const dbPath = env('DB_PATH')
	if (!dbPath) {
		return [null, new EnvVarError('DB_PATH')]
	}

	const filePath = slug ? path.join(dbPath, ...slug) : path.join(dbPath, 'index')
	let fullPath = filePath

	const isDirectory = await getIsDirectory(filePath)
	let ext: string
	if (isDirectory) {
		ext = await getExtension(path.join(filePath, 'index'))
		fullPath = path.join(filePath, `index.${ext}`)
	} else {
		ext = await getExtension(filePath)
		fullPath = `${filePath}.${ext}`
	}

	if (ext === 'unknown') {
		return [null, new UnsupportedFileError(fullPath)]
	}

	const [content, loadError] = await loadFile(fullPath)
	if (loadError) {
		return [null, loadError]
	}

	return parseFile(fullPath, content)
}

export const listCollections = async (): Promise<ResultOrError<string[]>> => {
	const dbPath = env('DB_PATH')
	if (!dbPath) {
		return [null, new EnvVarError('DB_PATH')]
	}

	try {
		const files = []
		let fileList = await fs.readdir(dbPath, { recursive: true })
		fileList = fileList.filter((filePath) => COLLECTION_YAML.test(filePath))

		for (const filePath of fileList) {
			const stats = await fs.lstat(path.join(dbPath, filePath))
			if (!stats.isDirectory()) {
				files.push(path.join(dbPath, filePath))
			}
		}

		return [files, null]
	} catch (err) {
		const error = createError(err)
		return [null, error]
	}
}

export const listPages = async (directory?: string): Promise<ResultOrError<PageDetails[]>> => {
	const dbPath = env('DB_PATH')
	if (!dbPath) {
		return [null, new EnvVarError('DB_PATH')]
	}

	try {
		const files = []
		const dirPath = directory ? path.resolve(dbPath, directory) : dbPath
		let fileList = await fs.readdir(dirPath, { recursive: true })
		fileList = fileList
			.filter((filePath) => !IMAGE_DIR.test(filePath))
			.filter((filePath) => !GLOBAL_YAML.test(filePath))
			.filter((filePath) => !COLLECTION_YAML.test(filePath))

		for (const filePath of fileList) {
			const stats = await fs.lstat(path.join(dirPath, filePath))
			if (stats.isDirectory()) {
				continue
			}

			const fullPath = path.join(dirPath, filePath)
			const [file, loadError] = await getPageDetails(fullPath)
			if (loadError) {
				captureError(loadError)
				continue
			}

			files.push(file)
		}

		return [files, null]
	} catch (err) {
		const error = createError(err)
		return [null, error]
	}
}

export const loadFile = async (filePath: string): Promise<ResultOrError<string>> => {
	const dbPath = env('DB_PATH')
	if (!dbPath) {
		return [null, new EnvVarError('DB_PATH')]
	}

	if (!filePath) {
		return [null, new Error(`An empty filePath was provided`)]
	}

	try {
		const contents = await fs.readFile(filePath, 'utf8')
		return [contents, null]
	} catch (err) {
		const error = createError(err)
		return [null, error]
	}
}

export const saveFile = async (
	filePath: string,
	contents: string
): Promise<ResultOrError<boolean>> => {
	const dbPath = env('DB_PATH')
	if (!dbPath) {
		return [null, new EnvVarError('DB_PATH')]
	}

	const ext = await getExtension(path.join(dbPath, filePath))
	if (!ext) {
		return [null, new UnsupportedFileError(filePath)]
	}

	try {
		await fs.writeFile(filePath, contents, 'utf8')
		return [true, null]
	} catch (err) {
		const error = createError(err)
		return [null, error]
	}
}

export const parseFile = async (
	filePath: string,
	contents: string
): Promise<ResultOrError<FileData>> => {
	const dbPath = env('DB_PATH')
	if (!dbPath) {
		return [null, new EnvVarError('DB_PATH')]
	}
	const ext = await getExtension(filePath)
	const relativeFilePath = filePath.substring(dbPath.length)
	switch (ext) {
		case 'md':
			try {
				const markdown = await parseMarkdown(contents, getSlugFromFilePath(relativeFilePath))
				return [createMarkdownData(markdown), null]
			} catch (err) {
				const error = createError(err)
				return [null, error]
			}
		case 'yaml':
		case 'yml':
			try {
				const yaml = await parseYaml(
					rewriteImagePaths(contents, getSlugFromFilePath(relativeFilePath))
				)
				return [createYamlData(yaml), null]
			} catch (err) {
				const error = createError(err)
				return [null, error]
			}
		default:
			return [null, new UnsupportedFileError(filePath)]
	}
}
