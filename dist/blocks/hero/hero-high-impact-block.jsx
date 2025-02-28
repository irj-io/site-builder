import { Action } from '../../components/actions/action';
import { MdContent } from '../../components/md-content';
import { Media } from '../../components/media/media';
import { parseComponents } from '../../utils/parse-components';
export async function HeroHighImpactBlock(props) {
    const { media, title, subtitle, actions = [] } = props;
    return (<div className="relative -mt-20 flex items-end text-white">
			<div className="container mx-auto mb-8 z-10 relative px-16">
				<div className="max-w-[60vw] pb-16">
					{title ? (<div className="mb-8 max-w-none mx-auto">
							<h1 className="text-8xl leading-tight font-extrabold">{parseComponents(title)}</h1>
						</div>) : null}
					{subtitle ? (<div className="mb-16 max-w-none mx-auto">
							<h2 className="text-xl">
								<MdContent markdown={subtitle}/>
							</h2>
						</div>) : null}
					{Array.isArray(actions) && actions.length > 0 ? (<ul className="flex gap-4">
							{actions.map((action, i) => {
                return (<li key={i}>
										<Action {...action}/>
									</li>);
            })}
						</ul>) : null}
				</div>
			</div>
			<div className="min-h-[80vh] select-none">
				{media ? (<>
						<Media media={media} imageClassName="-z-10 object-cover" fill quality={90} priority/>
						<div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-inverse-surface to-transparent"/>
					</>) : null}
			</div>
		</div>);
}
//# sourceMappingURL=hero-high-impact-block.jsx.map