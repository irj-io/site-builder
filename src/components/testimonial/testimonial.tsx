import type { TestimonialProps } from './config'
import { TestimonialHorizontal } from './testimonial-horizontal'
import { TestimonialVertical } from './testimonial-vertical'

export function Testimonial(props: TestimonialProps) {
	const { variant } = props

	switch (variant) {
		case 'horizontal':
			return <TestimonialHorizontal {...props} />

		default:
		case 'vertical':
			return <TestimonialVertical {...props} />
	}
}
