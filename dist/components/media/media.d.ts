import { ImageProps } from 'next/image';
import { MediaProps } from './config';
interface MediaWithImageProps extends Omit<ImageProps, 'src' | 'alt'> {
    media: MediaProps;
    imageClassName?: string;
}
export declare function Media(props: MediaWithImageProps): import("react").JSX.Element;
export {};
