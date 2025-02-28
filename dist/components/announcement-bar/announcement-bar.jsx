import { getSectionProps, Section } from '../../components/section/section';
export function AnnouncementBar(props) {
    const { announcements = [], section } = props;
    const now = new Date();
    const activeAnnouncements = announcements.filter(({ startDate, endDate }) => {
        // If startDate/endDate are missing, treat them as always active
        const start = startDate !== null && startDate !== void 0 ? startDate : new Date(0);
        const end = endDate !== null && endDate !== void 0 ? endDate : new Date(8640000000000000); // Reasonably far into the future
        return now >= start && now <= end;
    });
    if (activeAnnouncements.length === 0) {
        return null;
    }
    return (<Section {...getSectionProps(section, {
        className: 'bg-primary text-primary-foreground px-8 py-2 text-center',
    })}>
			{activeAnnouncements.map((announcement, index) => (<div key={`announcement-${index}`}>{announcement.content}</div>))}
		</Section>);
}
//# sourceMappingURL=announcement-bar.jsx.map