import { useEffect, useState } from 'react';
/**
 * This hook helps provide a way to detect when a component has entered the screen
 *
 * usage:
 * ```
 *	const ref = useRef<HTMLDivElement>(null)
 *	const isVisible = useIsVisible(ref)
 *
 *	return (
 *		<div
 *			className={`transition-opacity ease-in duration-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
 *			ref={ref}
 *		>...</div>
 *	)
 *	```
 */
export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        if (!ref.current) {
            return;
        }
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry) {
                return;
            }
            setIntersecting(entry.isIntersecting);
        });
        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref]);
    return isIntersecting;
}
//# sourceMappingURL=use-is-visible.js.map