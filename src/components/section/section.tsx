import * as motion from 'motion/react-client'
import React from 'react'
import { omit } from 'remeda'

import { cn } from '../../utils/cn'
import type { SectionProps } from './config'

export const getSectionProps = (
	sectionProps: SectionProps = {},
	overrides?: Partial<SectionProps>
) => {
	const newSectionProps = sectionProps ? omit(sectionProps, ['className']) : null
	const sectionClassName = sectionProps?.className

	let newClassName = sectionProps?.className
	if (overrides?.className) {
		newClassName = cn(overrides.className, sectionClassName)
	}

	return {
		...newSectionProps,
		...overrides,
		className: newClassName,
	}
}

export function Section({ className, children }: SectionProps & { children: React.ReactNode }) {
	return (
		<section className={className}>
			<motion.div
				initial={{ opacity: 0, y: 60 }}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: {
						type: 'spring',
						visualDuration: 0.6,
						bounce: 0.1,
					},
				}}
				viewport={{ once: true }}
			>
				{children}
			</motion.div>
		</section>
	)
}
