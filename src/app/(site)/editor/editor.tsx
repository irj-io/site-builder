'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

interface EditorProps {
	onSaveAction: (value: string) => void
	initialValue: string
}

export function Editor({ onSaveAction, initialValue }: EditorProps) {
	const [value, setValue] = useState(initialValue)

	useEffect(() => {
		setValue(initialValue)
	}, [initialValue])

	const handleSave = () => {
		onSaveAction(value)
	}

	return (
		<div className="h-full flex flex-col items-start gap-6 pb-4">
			<pre className="w-full h-full flex-1">
				<textarea
					className="w-full h-full"
					onChange={(event) => setValue(event.currentTarget.value)}
					value={value}
				/>
			</pre>
			<Button onClick={handleSave}>Save</Button>
		</div>
	)
}
