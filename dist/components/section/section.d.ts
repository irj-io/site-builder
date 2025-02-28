import React from 'react';
import type { SectionProps } from './config';
export declare const getSectionProps: (sectionProps?: SectionProps, overrides?: Partial<SectionProps>) => {
    className: string | undefined;
};
export declare function Section({ className, children }: SectionProps & {
    children: React.ReactNode;
}): React.JSX.Element;
