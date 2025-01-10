import React from 'react'

interface SectionProps extends React.ComponentProps {
	color: string
}

export function Section({ children, color }: SectionProps) {
	return <section>{children}</section>
}
