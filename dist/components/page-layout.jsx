import { notFound } from 'next/navigation';
import { AnnouncementBar } from '../components/announcement-bar/announcement-bar';
import { AnnouncementBarSchema } from '../components/announcement-bar/announcement-bar-schema';
import { Footer } from '../components/footers/footer';
import { FooterSchema } from '../components/footers/footer-schema';
import { Header } from '../components/headers/header';
import { HeaderSchema } from '../components/headers/header-schema';
import { loadGlobalData } from '../database/db-adapter';
import { captureError } from '../utils/error';
export default async function PageLayout({ announcementProps = {}, headerProps = {}, children, }) {
    const [globalData, error] = await loadGlobalData();
    if (error) {
        captureError(error);
        return notFound();
    }
    const announcementData = AnnouncementBarSchema.parse(Object.assign(Object.assign({}, (globalData.announcementBar || {})), announcementProps));
    const headerData = HeaderSchema.parse(Object.assign(Object.assign({}, (globalData.header || {})), headerProps));
    const footerData = FooterSchema.parse(globalData.footer || {});
    return (<>
			<AnnouncementBar {...announcementData}/>
			<div className="grid grid-rows-[0fr_1fr_0fr] min-h-screen">
				<Header {...headerData}/>
				<main className="items-center sm:items-start">{children}</main>
				<Footer {...footerData}/>
			</div>
		</>);
}
//# sourceMappingURL=page-layout.jsx.map