import { getSectionProps, Section } from '@/components/section/section'
import { SectionHeader } from '@/components/section/section-header'
import { cn } from '@/utils/cn'
import { BlockProps } from '../block-types'
import { CollectionStackProps } from './config'

interface Collection {
	items: { id: string; content: string }[]
}

const collections: Record<string, Collection> = {
	testCollection: {
		// 25 items
		items: [
			{ id: '1', content: 'Test 1' },
			{ id: '2', content: 'Test 2' },
			{ id: '3', content: 'Test 3' },
			{ id: '4', content: 'Test 4' },
			{ id: '5', content: 'Test 5' },
			{ id: '6', content: 'Test 6' },
			{ id: '7', content: 'Test 7' },
			{ id: '8', content: 'Test 8' },
			{ id: '9', content: 'Test 9' },
			{ id: '10', content: 'Test 10' },
			{ id: '11', content: 'Test 11' },
			{ id: '12', content: 'Test 12' },
			{ id: '13', content: 'Test 13' },
			{ id: '14', content: 'Test 14' },
			{ id: '15', content: 'Test 15' },
			{ id: '16', content: 'Test 16' },
			{ id: '17', content: 'Test 17' },
			{ id: '18', content: 'Test 18' },
			{ id: '19', content: 'Test 19' },
			{ id: '20', content: 'Test 20' },
			{ id: '21', content: 'Test 21' },
			{ id: '22', content: 'Test 22' },
			{ id: '23', content: 'Test 23' },
			{ id: '24', content: 'Test 24' },
			{ id: '25', content: 'Test 25' },
		],
	},
}

export function CollectionStackBlock(props: BlockProps<CollectionStackProps>) {
	const { title, subtitle, collectionId, section } = props

	const collection = collections[collectionId]

	return (
		<Section {...getSectionProps(section, { className: 'py-16' })}>
			<SectionHeader title={title} subtitle={subtitle} />

			{collection ? (
				<div className={'grid grid-cols-5'}>
					{collection.items.map((item) => (
						<div
							key={item.id}
							className="aspect-square w-full flex items-center justify-center border"
						>
							{item.content}
						</div>
					))}
				</div>
			) : null}
		</Section>
	)
}
