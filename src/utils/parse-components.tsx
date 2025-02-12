import { Fragment, ReactNode } from 'react'

import { ShuffleText } from '@/components/shuffle-text/shuffle-text'

interface YamlContext {
	collections: Record<string, (string | number | boolean)[]>
}

const TEMPLATE = /({{.*?}})/g
const RENDER = /render\(([^)]*)\)/

const handleRender = (template: string, context: YamlContext): ReactNode => {
	const match = template.match(RENDER)
	if (!match) {
		return template
	}

	const index = match[1].indexOf(',')
	const args = [match[1].substring(0, index), match[1].substring(index + 1)]

	console.log('func', args)
	switch (args[0]) {
		case 'ShuffleText':
			//const list = context?.collections[args[1].split('.')[1]].map(String) ?? []
			const list = args[1]
				.trim()
				.replace(/^\[/, '')
				.replace(/\]$/, '')
				.split(',')
				.map((text) => text.trim().replace(/^'/, '').replace(/'$/, ''))
			console.log('list', list)
			return <ShuffleText list={list} />
	}
}

export const parseComponents = (content: string, context: YamlContext): ReactNode => {
	const segments = content.split(TEMPLATE)

	const nodes = segments.map((segment) => {
		const match = segment.match(TEMPLATE)

		if (match) {
			console.log('match', match)

			return handleRender(match[0], context)
		}

		return segment
	}) as (string | ReactNode)[]

	console.log('segments', nodes)

	return (
		<>
			{nodes.map((node, i) => (
				<Fragment key={i}>{node}</Fragment>
			))}
		</>
	)
}
