import { TypographyH2 } from '../components/typography/typography'
import { EditorPageClient } from './editor-page.client'

export default async function EditorPage() {
	return (
		<div className="h-[80vh]">
			<TypographyH2 className="text-center">Editor</TypographyH2>
			<EditorPageClient />
		</div>
	)
}
