import type { Metadata } from 'next';
import './globals.css';
import './globalicons.css';
type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>;
export declare const metadata: Metadata;
export default function RootLayout({ children }: RootLayoutProps): import("react").JSX.Element;
export {};
