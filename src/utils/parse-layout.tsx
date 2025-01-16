import { notFound } from 'next/navigation'
import { JSX } from 'react'
import { toCamelCase } from 'remeda'

import { BlockProps } from '@/blocks/block-types'
import { CollapsibleContentBlock } from '@/blocks/collapsible-content/collapsible-content-block'
import { ContactFormBlock } from '@/blocks/contact-form/contact-form-block'
import { ContentBlock } from '@/blocks/content/content-block'
import { FeatureBoxBlock } from '@/blocks/feature-box/feature-box-block'
import { FeatureGridBlock } from '@/blocks/feature-grid/feature-grid-block'
import { FeatureListBlock } from '@/blocks/feature-list/feature-list-block'
import { HeroHighImpactBlock } from '@/blocks/hero/hero-high-impact-block'
import { HeroProductScreenshotBlock } from '@/blocks/hero/hero-product-screenshot'
import { TestimonialVertical } from '@/blocks/testimonial/testimonial-vertical'
import { PageSchema } from './page-schema'

const componentMap = {
	hero: {
		highImpact: HeroHighImpactBlock,
		productScreenshot: HeroProductScreenshotBlock,
	},
	featureBox: FeatureBoxBlock,
	featureGrid: FeatureGridBlock,
	featureList: FeatureListBlock,
	testimonial: TestimonialVertical,
	contactForm: ContactFormBlock,
	collapsibleContent: CollapsibleContentBlock,
	content: ContentBlock,
}

export async function parseLayout(yaml: string) {
	try {
		//const filePath = path.join(process.cwd(), 'src/content', `${slug.join('/')}.yaml`)
		//const filePath = `@/content/${slug.join('/')}.json`
		//const { default: fileContents } = await import(filePath)
		const fileData = yaml

		const { success, data, error } = PageSchema.safeParse(fileData)

		if (!success) {
			console.error('Page validation error', error)
			return
		}

		return data.layout.map(
			(item: { type: keyof typeof componentMap; variant?: string }, index: number) => {
				let Component:
					| Record<string, (props: BlockProps<any>) => JSX.Element>
					| ((props: BlockProps<any>) => JSX.Element) = componentMap[toCamelCase(item.type)]

				if (typeof Component !== 'function' && item.variant) {
					Component = Component[toCamelCase(item.variant)]
				}

				if (!Component) {
					let componentName = item.type
					if (item.variant) {
						componentName += ` with variant ${item.variant}`
					}
					console.warn(`Component ${componentName} not found`)
					return null
				}
				return <Component key={`${item.type}-${index}`} {...item} />
			}
		)
	} catch (error) {
		if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
			return notFound()
		}
		throw error
	}
}
