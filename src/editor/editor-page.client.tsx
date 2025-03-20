'use client'

import { useEffect, useState } from 'react'

import { listPages, loadFile, saveFile, type PageDetails } from '../database/db-adapter'
import { captureError } from '../utils/error'
import { Editor } from './editor'

function ErrorMessage({ message }: { message: string }) {
	return <p className="text-destructive">{message}</p>
}

const formatFile = (file: PageDetails) => {
	const match = file.filePath.match(/(?:([^/]+)\/)?([^/]+)(\.[A-Za-z0-9]+)$/)
	let name = file.filePath
	if (match && typeof match[1] === 'string' && typeof match[2] === 'string') {
		if (match[2] === 'index') {
			name = match[1] + (match[3] || '')
		} else {
			name = match[2] + (match[3] || '')
		}
	}
	return name
}

export function EditorPageClient() {
	const [error, setError] = useState('')
	const [fileList, setFileList] = useState<PageDetails[]>([])
	const [file, setFile] = useState<PageDetails | null>(null)
	const [fileContents, setFileContents] = useState('')

	useEffect(() => {
		let ignore = false
		listPages().then(([fileList, error]) => {
			if (error) {
				captureError(error)
				setError(error.message)
				return
			}
			if (!ignore) {
				setFileList(fileList)
			}
		})
		return () => {
			ignore = true
		}
	}, [])

	useEffect(() => {
		if (!file) {
			return
		}

		let ignore = false
		loadFile(file.filePath).then(([contents, error]) => {
			if (error) {
				captureError(error)
				setError(error.message)
				return
			}
			if (!ignore) {
				setFileContents(contents)
			}
		})
		return () => {
			ignore = true
		}
	}, [file])

	const handleSelectFile = (file: PageDetails) => () => {
		setFile(file)
	}

	const handleSave = async (value: string) => {
		if (!file) {
			setError('No file selected')
			return
		}
		saveFile(file.filePath, value)
	}

	return (
		<div className="h-full flex flex-col">
			<ErrorMessage message={error} />
			<div className="grid grid-cols-12 gap-6 flex-1">
				<div className="col-span-3 h-full">
					<ul>
						{fileList.map((file) => (
							<li key={file.filePath} onClick={handleSelectFile(file)}>
								{formatFile(file)}
							</li>
						))}
					</ul>
				</div>
				<div className="col-span-9 h-full">
					<Editor initialValue={fileContents} onSaveAction={handleSave} />
				</div>
			</div>
		</div>
	)
}
