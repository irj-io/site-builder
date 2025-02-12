import { notFound } from 'next/navigation'
import { isPlainObject } from 'remeda'

import { Blocks } from '@/blocks/block-schema'
import { CallToActionBlock } from '@/blocks/call-to-action/call-to-action-block'
import { CollapsibleContentBlock } from '@/blocks/collapsible-content/collapsible-content-block'
import { ContactFormBlock } from '@/blocks/contact-form/contact-form-block'
import { ContentBlock } from '@/blocks/content/content-block'
import { FaqBlock } from '@/blocks/faq/faq-block'
import { FeatureBoxBlock } from '@/blocks/feature-box/feature-box-block'
import { FeatureGridBlock } from '@/blocks/feature-grid/feature-grid-block'
import { FeatureListBlock } from '@/blocks/feature-list/feature-list-block'
import { HeroHighImpactBlock } from '@/blocks/hero/hero-high-impact-block'
import { HeroMediumImpactBlock } from '@/blocks/hero/hero-medium-impact-block'
import { HeroProductScreenshotBlock } from '@/blocks/hero/hero-product-screenshot'
import { LogoMarqueeBlock } from '@/blocks/marquee/logo-marquee-block'
import { PricingCardsBlock } from '@/blocks/pricing/pricing-cards-block'
import { StatsBlock } from '@/blocks/stats/stats-block'
import { MediaProps } from '@/components/component-schema'
import { Page, PageSchema } from './page-schema'

const PLACEHOLDER_ARGS = /^placeholder:?(.*)?$/

const setPlaceholderUrl = (media: MediaProps) => {
	const match = media.src.match(PLACEHOLDER_ARGS)
	if (match) {
		const args = match[1] ? match[1] : '100?text=placeholder'
		media.src = `https://placehold.co/${args}`
	}
	return media
}

/**
 * Iterate through an object and convert all media types that have the keyword,
 * `placeholder` to load a placeholder image instead.
 * This function is mutable.
 */
const mapPlaceholderMedia = (data: Page): Page => {
	const stack: object[] = [data]

	while (stack.length > 0) {
		const obj = stack.pop()

		if (Array.isArray(obj)) {
			// Add array items to stack to be reprocessed
			obj.forEach((item) => {
				if (item && typeof item === 'object') {
					stack.push(item)
				}
			})
		} else if (isPlainObject(obj)) {
			// Check for media key
			if ('media' in obj) {
				setPlaceholderUrl(obj.media as MediaProps)
			}

			// Add object properties to stack to be reprocessed
			for (const key in obj) {
				const value = obj[key]
				if (value && typeof value === 'object') {
					stack.push(value)
				}
			}
		}
	}

	return data
}

export async function parseLayout(yaml: string) {
	try {
		const fileData = yaml

		const result = PageSchema.safeParse(fileData)

		if (!result.success) {
			console.error('Page validation error', result.error)
			return
		}

		const data = mapPlaceholderMedia(result.data)

		return data.layout.map((item: Blocks, index: number) => {
			const key = `${item.type}-${index}`
			const type = item.type
			switch (item.type) {
				case 'callToAction':
					return <CallToActionBlock key={key} {...item} />
				case 'collapsibleContent':
					return <CollapsibleContentBlock key={key} {...item} />
				case 'contactForm':
					return <ContactFormBlock key={key} {...item} />
				case 'content':
					return <ContentBlock key={key} {...item} />
				case 'faq':
					return <FaqBlock key={key} {...item} />
				case 'featureBox':
					return <FeatureBoxBlock key={key} {...item} />
				case 'featureGrid':
					return <FeatureGridBlock key={key} {...item} />
				case 'featureList':
					return <FeatureListBlock key={key} {...item} />
				case 'hero':
					switch (item.variant) {
						case 'highImpact':
							return <HeroHighImpactBlock key={key} {...item} />
						case 'mediumImpact':
							return <HeroMediumImpactBlock key={key} {...item} />
						case 'productScreenshot':
							return <HeroProductScreenshotBlock key={key} {...item} />
						default:
							console.warn(`Unknown hero variant: ${item.variant}`)
							return null
					}
				case 'logoMarquee':
					return <LogoMarqueeBlock key={key} {...item} />
				case 'pricing':
					return <PricingCardsBlock key={key} {...item} />
				case 'stats':
					return <StatsBlock key={key} {...item} />
				default:
					console.warn(`Unknown component type: ${type}`)
					return null
			}
		})
	} catch (error) {
		if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
			return notFound()
		}
		throw error
	}
}
