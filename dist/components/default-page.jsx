import { notFound } from 'next/navigation';
import { MarkdownContent } from '@/components/markdown-content';
import PageLayout from '@/components/page-layout';
import { loadPage } from '@/database/db-adapter';
import { captureError } from '@/utils/error';
export async function DefaultPage({ params }) {
    const { slug } = await params;
    const [fileData, error] = await loadPage(slug);
    if (error) {
        captureError(error, { label: '[...slug]/page', slug });
        return notFound();
    }
    switch (fileData.type) {
        case 'md':
            return (<PageLayout>
					<div className="container mx-auto px-6 py-8">
						<div className="max-w-3xl mx-auto">
							<MarkdownContent data={fileData.data.frontMatter} Markdown={fileData.data.nodes}/>
						</div>
					</div>
				</PageLayout>);
        case 'yaml':
            const yaml = fileData.data.content;
            return (<PageLayout announcementProps={yaml === null || yaml === void 0 ? void 0 : yaml.announcementBar} headerProps={yaml === null || yaml === void 0 ? void 0 : yaml.header}>
					{fileData.data.nodes}
				</PageLayout>);
    }
}
//# sourceMappingURL=default-page.jsx.map