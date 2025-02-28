import Link from 'next/link';
import { getAllArticles } from '../utils/articles';
import { cn } from '../utils/cn';
export async function ArticlesMenu({ title = '', slug = ['help'], }) {
    const articles = await getAllArticles('help');
    return (<div className="flex flex-col gap-2 mb-6">
			{title ? <p className="text-4xl font-bold mb-4">{title}</p> : null}
			<ul className="flex flex-col gap-2">
				{articles.map((article, index) => (<li key={`article-menu-${index}`} className={cn('pl-4', {
                ['border-l-2 border-primary -ml-[2px]']: article.slug.at(-1) === slug.at(-1),
            })}>
						<Link className="hover:text-primary" href={article.href}>
							{article.data.title}
						</Link>
					</li>))}
			</ul>
		</div>);
}
//# sourceMappingURL=articles-menu.jsx.map