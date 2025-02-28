import * as motion from 'motion/react-client';
import React from 'react';
import { omit } from 'remeda';
import { cn } from '@/utils/cn';
export const getSectionProps = (sectionProps = {}, overrides) => {
    const newSectionProps = sectionProps ? omit(sectionProps, ['className']) : null;
    const sectionClassName = sectionProps === null || sectionProps === void 0 ? void 0 : sectionProps.className;
    let newClassName = sectionProps === null || sectionProps === void 0 ? void 0 : sectionProps.className;
    if (overrides === null || overrides === void 0 ? void 0 : overrides.className) {
        newClassName = cn(overrides.className, sectionClassName);
    }
    return Object.assign(Object.assign(Object.assign({}, newSectionProps), overrides), { className: newClassName });
};
export function Section({ className, children }) {
    return (<section className={className}>
			<motion.div initial={{ opacity: 0, y: 60 }} whileInView={{
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                visualDuration: 0.6,
                bounce: 0.1,
            },
        }} viewport={{ once: true }}>
				{children}
			</motion.div>
		</section>);
}
//# sourceMappingURL=section.jsx.map