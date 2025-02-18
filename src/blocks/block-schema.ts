import { z } from 'zod'

import { CallToActionPropsSchema } from './call-to-action/config'
import { CollapsibleContentPropsSchema } from './collapsible-content/config'
import { CollectionStackPropsSchema } from './collection-stack/config'
import { ContactFormPropsSchema } from './contact-form/config'
import { ContentPropsSchema } from './content/config'
import { FaqPropsSchema } from './faq/config'
import { FeatureBoxPropsSchema } from './feature-box/config'
import { FeatureGridPropsSchema } from './feature-grid/config'
import { FeatureListPropsSchema } from './feature-list/config'
import { HeroBasePropsSchema } from './hero/config'
import { LogoMarqueePropsSchema } from './marquee/config'
import { PricingPropsSchema } from './pricing/config'
import { StatsPropsSchema } from './stats/config'

export type Blocks = z.infer<typeof BlocksSchema>
export const BlocksSchema = z.discriminatedUnion('type', [
	HeroBasePropsSchema,
	FeatureBoxPropsSchema,
	FeatureGridPropsSchema,
	FeatureListPropsSchema,
	CollapsibleContentPropsSchema,
	ContactFormPropsSchema,
	ContentPropsSchema,
	LogoMarqueePropsSchema,
	CallToActionPropsSchema,
	StatsPropsSchema,
	FaqPropsSchema,
	PricingPropsSchema,
	CollectionStackPropsSchema,
])
