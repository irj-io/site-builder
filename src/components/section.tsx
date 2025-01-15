import React from 'react'

export interface SectionProps {
	className: string
	color: string
}

export function Section({
	className,
	children,
	color,
}: SectionProps & { children: React.ReactNode }) {
	return <section className={className}>{children}</section>
}
