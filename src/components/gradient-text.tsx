interface GradientTextProps {
	text: string
}

export function GradientText({ text }: GradientTextProps) {
	return <span className="gradient-text">{text}</span>
}
