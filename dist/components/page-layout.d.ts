import type { AnnouncementBar as AnnouncementBarProps } from '@/components/announcement-bar/announcement-bar-schema';
import type { Header as HeaderType } from '@/components/headers/header-schema';
interface HeaderProps {
    theme: HeaderType['theme'];
}
export default function PageLayout({ announcementProps, headerProps, children, }: Readonly<{
    announcementProps?: Partial<AnnouncementBarProps>;
    headerProps?: Partial<HeaderProps>;
    children: React.ReactNode;
}>): Promise<import("react").JSX.Element>;
export {};
