import { Fragment, type ReactNode } from 'react'

import { GradientText } from '../components/gradient-text'
import { ShuffleText } from '../components/shuffle-text/shuffle-text'

const TEMPLATE = /({{.*?}})/g
const RENDER = /render\(([^)]*)\)/

const handleRender = (template: string): ReactNode => {
	const match = template.match(RENDER)
	if (!match) {
		return template
	}

	if (!match[1]) {
		return
	}

	const index = match[1].indexOf(',')
	const args = [match[1].substring(0, index), match[1].substring(index + 1)] as const

	switch (args[0]) {
		case 'ShuffleText': {
			const list = args[1]
				.trim()
				.replace(/^\[/, '')
				.replace(/\]$/, '')
				.split(',')
				.map((text) => text.trim().replace(/^'/, '').replace(/'$/, ''))
			return <ShuffleText list={list} />
		}

		case 'GradientText': {
			const text = args[1].trim().replace(/^'/, '').replace(/'$/, '')
			return <GradientText text={text} />
		}

		default:
			return null
	}
}

export const parseComponents = (content: string): ReactNode => {
	const segments = content.split(TEMPLATE)

	const nodes = segments.map((segment) => {
		const match = segment.match(TEMPLATE)

		if (match) {
			return handleRender(match[0])
		}

		return segment
	}) as (string | ReactNode)[]

	return (
		<>
			{nodes.map((node, i) => (
				<Fragment key={i}>{node}</Fragment>
			))}
		</>
	)
}
