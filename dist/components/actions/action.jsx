var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import Link from 'next/link';
import { Button } from '@/components/ui/button';
export function Action(props) {
    switch (props.type) {
        case 'link': {
            const { label, href } = props;
            return (<Link href={href} className="hover:underline hover:text-foreground/90">
					{label}
				</Link>);
        }
        default:
        case 'button': {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { label, href, startIcon, type } = props, rest = __rest(props, ["label", "href", "startIcon", "type"]);
            const content = startIcon ? (<>
					<span className="icon-symbols">{startIcon}</span> {label}
				</>) : (label);
            return (<Button {...rest} asChild={'href' in props}>
					{typeof href === 'string' ? <Link href={href}>{content}</Link> : content}
				</Button>);
        }
    }
}
//# sourceMappingURL=action.jsx.map