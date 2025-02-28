import PageLayout from '../../../components/page-layout';
import { Section } from '../../../components/section/section';
export default async function EditorLayout({ children }) {
    return (<PageLayout>
			<Section>
				<div className="container mx-auto px-6 py-16">{children}</div>
			</Section>
		</PageLayout>);
}
//# sourceMappingURL=layout.jsx.map