'use client'

import { useEffect, useRef, useState } from 'react'

interface ShuffleTextProps {
	initial: string
	list: string[]
}

const createTextCycler = (list: string[], startIndex: number = 0) => {
	let index = startIndex
	return () => {
		const next = list[index]
		index = (index + 1) % list.length
		return next
	}
}

export function ShuffleTextClient({ initial, list }: ShuffleTextProps) {
	const [currentText, setCurrentText] = useState(initial)
	const [displayedText, setDisplayedText] = useState('')
	const [isDeleting, setIsDeleting] = useState(false)
	const getNextText = useRef(createTextCycler(list, 1)).current

	const typingSpeed = 150 - Math.random() * 20 // ms per character while typing
	const deletingSpeed = 50 - Math.random() * 10 // ms per character while deleting
	const pauseTime = 2000 // pause at end of word

	const longestText = list.reduce((a, b) => (a.length > b.length ? a : b))

	useEffect(() => {
		let timer: ReturnType<typeof setTimeout>

		// When still typing out the text
		if (!isDeleting && displayedText !== currentText) {
			timer = setTimeout(() => {
				setDisplayedText(currentText.substring(0, displayedText.length + 1))
			}, typingSpeed)
		}
		// When deleting text
		else if (isDeleting && displayedText !== '') {
			timer = setTimeout(() => {
				setDisplayedText(currentText.substring(0, displayedText.length - 1))
			}, deletingSpeed)
		}
		// When finished typing and ready to pause before deleting
		else if (!isDeleting && displayedText === currentText) {
			timer = setTimeout(() => {
				setIsDeleting(true)
			}, pauseTime)
		}
		// When finished deleting, pick a new text
		else if (isDeleting && displayedText === '') {
			const nextText = getNextText()
			if (nextText) {
				setCurrentText(nextText)
				setIsDeleting(false)
			}
		}

		return () => clearTimeout(timer)
	}, [currentText, deletingSpeed, displayedText, getNextText, isDeleting, typingSpeed])

	return (
		<span className="relative inline-block">
			{/* Invisible placeholder to set container width */}
			<span className="opacity-0 select-none">{longestText}</span>
			<span className="absolute top-0 left-0">
				{displayedText}
				{/* The blinking cursor */}
				<span className="absolute w-2 bg-white ml-2 h-[80%] animate-blink top-1/2 -translate-y-1/2"></span>
			</span>
		</span>
	)
}
