import { MdContent } from '../../components/md-content';
export function FeatureGridItem(props) {
    const { icon, title, content } = props;
    return (<div className="flex flex-col items-center px-12 py-16">
			{icon ? <span className="icon-symbols text-5xl">{icon}</span> : null}
			{title ? <div className="text-center text-2xl mt-5">{title}</div> : null}
			{content ? (<div className="text-center mt-2">
					<MdContent className="text-lg text-foreground/50" markdown={content}/>
				</div>) : null}
		</div>);
}
//# sourceMappingURL=feature-grid-item.jsx.map