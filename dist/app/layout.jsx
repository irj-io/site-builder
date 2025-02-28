import './globals.css';
import './globalicons.css';
import { ThemeProvider } from '../components/theme-provider';
export const metadata = {
    title: 'Tyto | Remote Work Done Fun',
    description: 'Tyto is the all-in-one place to hang out with your team, combining chat, tasks, projects and video.',
};
export default function RootLayout({ children }) {
    return (<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>);
}
//# sourceMappingURL=layout.jsx.map