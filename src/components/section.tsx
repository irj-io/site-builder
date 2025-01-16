import React from 'react'

import { cn } from '@/utils/cn'
import type { Section } from '@/utils/page-schema'

export interface SectionProps extends Section {
	className?: string
}

export function Section({ className, children }: SectionProps & { children: React.ReactNode }) {
	return <section className={className}>{children}</section>
}
