import { getSectionProps, Section } from '../../components/section/section'
import { SectionHeader } from '../../components/section/section-header'
import { getCollection } from '../../utils/collections'
import type { BlockProps } from '../block-types'
import { Content } from '../content/content-block'
import type { CollectionStackProps } from './config'

export async function CollectionStackBlock(props: BlockProps<CollectionStackProps>) {
	const { title, subtitle, collectionId, section } = props
	const collection = await getCollection(collectionId)

	return (
		<Section {...getSectionProps(section, { className: 'py-16' })}>
			<SectionHeader title={title} subtitle={subtitle} />

			{collection ? (
				<div className={'mt-8 flex-1 grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'}>
					{collection.items.map((item) => (
						<div
							key={item.id}
							className="aspect-square w-full flex items-center justify-center border"
						>
							{item.content ? <Content content={item.content} /> : null}
						</div>
					))}
				</div>
			) : null}
		</Section>
	)
}
