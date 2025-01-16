import { cn } from '@/utils/cn'
import { Content } from '@/utils/page-schema'
import { BlockProps } from '../block-types'

export function ContentBlock(props: BlockProps<Content>) {
	const { columns } = props

	const colsSpanClasses = {
		full: '12',
		half: '6',
		oneThird: '4',
		twoThirds: '8',
	}

	return (
		<div className="container mx-auto my-16">
			<div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16">
				{columns && columns.length > 0
					? columns.map((col, index) => {
							const { content, size } = col
							return (
								<div
									className={cn(`col-span-4 lg:col-span-${colsSpanClasses[size!]}`, {
										'md:col-span-2': size !== 'full',
									})}
									key={index}
								>
									{content ? <div className="text-center">{content}</div> : null}
								</div>
							)
						})
					: null}
			</div>
		</div>
	)
}
