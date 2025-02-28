import Image from 'next/image';
export function AuthorHeader({ author, date }) {
    return (<div className="flex items-center gap-2">
			<Image src={author.avatarUrl} alt={author.name} className="rounded-full h-12 w-12 object-cover" height={64} width={64}/>
			<p className="text-lg">{author.name}</p>
			<p className="text-lg">{date}</p>
		</div>);
}
//# sourceMappingURL=author-header.jsx.map