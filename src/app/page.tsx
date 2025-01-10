import { FeatureBoxBlock } from '@/blocks/feature-box/feature-box-block'
import { FeatureGridBlock } from '@/blocks/feature-grid/feature-grid-block'
import { FeatureListBlock } from '@/blocks/feature-list/feature-list-block'
import { HeroHighImpactBlock } from '@/blocks/hero/hero-high-impact-block'
import { TestimonialVertical } from '@/blocks/testimonial/testimonial-vertical'

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<header className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></header>
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<HeroHighImpactBlock />
				<FeatureBoxBlock />
				<FeatureGridBlock />
				<FeatureListBlock />

				<TestimonialVertical />
				<TestimonialVertical />
				<TestimonialVertical />
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
		</div>
	)
}
