import Image from 'next/image';
import Link from 'next/link';
import { omit } from 'remeda';
import { cn } from '@/utils/cn';
const sharedClasses = '';
export const MdH1 = (props) => (<h1 className={cn(sharedClasses, 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', 'my-[10px] [&:not(:first-child)]:mt-6')} {...props}/>);
export const MdH2 = (props) => (<h2 className={cn(sharedClasses, 'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0', 'my-[10px] [&:not(:first-child)]:mt-6')} {...props}/>);
export const MdH3 = (props) => (<h3 className={cn(sharedClasses, 'scroll-m-20 text-2xl font-semibold tracking-tight', 'my-[10px] [&:not(:first-child)]:mt-6')} {...props}/>);
export const MdH4 = (props) => (<h4 className={cn(sharedClasses, 'scroll-m-20 text-xl font-semibold tracking-tight', 'my-[10px] [&:not(:first-child)]:mt-6')} {...props}/>);
export const MdH5 = (props) => (<h5 className={cn(sharedClasses, 'scroll-m-20 text-xl font-semibold tracking-tight', 'my-[10px] [&:not(:first-child)]:mt-6')} {...props}/>);
export const MdH6 = (props) => (<h6 className={cn(sharedClasses, 'scroll-m-20 text-xl font-semibold tracking-tight', 'my-[10px] [&:not(:first-child)]:mt-6')} {...props}/>);
export const MdParagraph = (props) => (<p className={cn(sharedClasses, 'leading-7 [&:not(:first-child)]:mt-5', 'mb-6')} {...props}/>);
export const MdBlockquote = (props) => (<blockquote className={cn(sharedClasses, 'mt-6 border-l-2 pl-6 italic')} {...props}/>);
export const MdUl = (props) => (<ul className={cn(sharedClasses, 'my-6 ml-6 list-disc [&>li]:mt-2')} {...props}/>);
export const MdOl = (props) => (<ol className={cn(sharedClasses, 'my-6 ml-6 [&>li]:mt-2')} {...props}/>);
export const MdCode = (props) => (<code className={cn(sharedClasses, 'relative block rounded-xl bg-muted px-[1.5rem] py-[1.5rem] font-mono text-base whitespace-pre-wrap')} {...props}/>);
export const MdLink = (props) => (<Link className={cn(sharedClasses, 'text-blue-500 hover:text-blue-600 hover:underline leading-[30px]')} {...props}/>);
export const MdImg = (props) => typeof props.src === 'string' ? (<Image style={{ width: '100%', height: 'auto' }} alt={props.alt || ''} height={800} width={1280} {...omit(props, ['alt'])}/>) : null;
//# sourceMappingURL=markdown-components.jsx.map