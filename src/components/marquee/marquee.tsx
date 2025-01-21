'use client'

import { Fragment, useCallback, useEffect, useRef, useState } from 'react'

interface MarqueeProps {
	children: React.ReactNode
}

export function Marquee({ children }: MarqueeProps) {
	const [isMounted, setIsMounted] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)
	const marqueeRef = useRef<HTMLDivElement>(null)
	const [multiplier, setMultiplier] = useState(1)

	const calculateMultiplier = useCallback(() => {
		if (!containerRef.current || !marqueeRef.current) {
			return
		}

		const containerRect = containerRef.current.getBoundingClientRect()
		const marqueeRect = marqueeRef.current.getBoundingClientRect()

		const containerWidth = containerRect.width
		const marqueeWidth = marqueeRect.width

		if (marqueeWidth < containerWidth) {
			setMultiplier(Math.ceil(containerWidth / marqueeWidth))
		} else {
			setMultiplier(1)
		}
	}, [])

	useEffect(() => {
		setIsMounted(true)
	}, [])

	useEffect(() => {
		if (!isMounted) return
		calculateMultiplier()
		if (marqueeRef.current && containerRef.current) {
			const resizeObserver = new ResizeObserver(calculateMultiplier)
			resizeObserver.observe(marqueeRef.current)
			resizeObserver.observe(containerRef.current)
			return () => {
				resizeObserver.disconnect()
			}
		}
	}, [calculateMultiplier, isMounted])

	const multiplyChildren = useCallback(
		(multiplier: number) => {
			const arraySize = multiplier >= 0 ? multiplier : 0
			return Array.from({ length: arraySize }).map((_, i) => (
				<Fragment key={i}>{children}</Fragment>
			))
		},
		[children]
	)

	if (!isMounted) {
		return null
	}

	return (
		<div
			className="flex flex-shrink-0 flex-grow-0 basis-auto overflow-x-hidden w-full"
			ref={containerRef}
		>
			<div className="animate-marquee flex flex-shrink-0 flex-grow-0 basis-auto min-w-min">
				<div className="flex flex-shrink-0 flex-grow-0 basis-auto" ref={marqueeRef}>
					{children}
				</div>
				{multiplyChildren(multiplier - 1)}
			</div>
			<div className="animate-marquee flex flex-shrink-0 flex-grow-0 basis-auto min-w-min">
				{multiplyChildren(multiplier)}
			</div>
		</div>
	)
}
