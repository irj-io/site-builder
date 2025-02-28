export function Link(props) {
    const { href, label } = props;
    return (<a className="text-foreground hover:underline" href={href}>
			{label}
		</a>);
}
//# sourceMappingURL=link.jsx.map