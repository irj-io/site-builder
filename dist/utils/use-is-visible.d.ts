import { RefObject } from 'react';
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
export declare function useIsVisible(ref: RefObject<HTMLElement | null>): boolean;
