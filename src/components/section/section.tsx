import React from 'react'
import { omit } from 'remeda'

import { cn } from '@/utils/cn'
import type { Section } from './section-schema'

export interface SectionProps extends Section {
	className?: string
}

export const getSectionProps = (sectionProps: Section = {}, overrides?: Partial<SectionProps>) => {
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
	return <section className={className}>{children}</section>
}
