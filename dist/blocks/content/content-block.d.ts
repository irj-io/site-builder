import { ContentBoxProps } from '../../components/content-box/config';
import { ImageProps } from '../../components/media/config';
import { TestimonialProps } from '../../components/testimonial/config';
import { BlockProps } from '../block-types';
import { ContentProps } from './config';
type ContentBlockProps = ContentBoxProps | TestimonialProps | ImageProps;
export declare function Content({ content }: {
    content: ContentBlockProps;
}): import("react").JSX.Element | null;
export declare function ContentBlock(props: BlockProps<ContentProps>): import("react").JSX.Element;
export {};
