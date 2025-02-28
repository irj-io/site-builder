import { cn } from '../../utils/cn';
export function TypographyH1({ className, children }) {
    return (<h1 className={cn('scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl', className)}>
			{children}
		</h1>);
}
export function TypographyH2({ className, children }) {
    return <h2 className={cn('scroll-m-20 text-4xl font-bold first:mt-0', className)}>{children}</h2>;
}
export function TypographyH3({ className, children }) {
    return <h3 className={cn('scroll-m-20 text-3xl font-semibold', className)}>{children}</h3>;
}
export function TypographyH4({ className, children }) {
    return <h4 className={cn('scroll-m-20 text-2xl font-semibold', className)}>{children}</h4>;
}
export function TypographyP({ className, children }) {
    return <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>{children}</p>;
}
export function TypographyBlockquote({ className, children }) {
    return (<blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)}>{children}</blockquote>);
}
export function TypographyInlineCode({ className, children }) {
    return (<code className={cn('relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold', className)}>
			{children}
		</code>);
}
export function TypographyLead({ className, children }) {
    return <p className={cn('text-2xl text-muted-foreground', className)}>{children}</p>;
}
export function TypographyLarge({ className, children }) {
    return <div className={cn('text-lg font-semibold', className)}>{children}</div>;
}
export function TypographySmall({ className, children }) {
    return <small className={cn('text-sm font-medium leading-none', className)}>{children}</small>;
}
export function TypographyMuted({ className, children }) {
    return <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>;
}
//# sourceMappingURL=typography.jsx.map