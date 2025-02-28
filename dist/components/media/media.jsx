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
import Image from 'next/image';
import { omit } from 'remeda';
import { cn } from '../../utils/cn';
import { HeroSvg } from '../hero-svg';
export function Media(props) {
    const { className, media, imageClassName } = props, imageProps = __rest(props, ["className", "media", "imageClassName"]);
    switch (media.type) {
        case 'customSvg':
            const customSvgs = {
                heroSvg: <HeroSvg {...imageProps}/>,
            };
            return customSvgs[media.id];
        case 'image':
            const mediaProps = omit(media, ['style', 'src', 'alt', 'type']);
            switch (media.style) {
                case 'screenshot':
                    return (<div className={cn('media-style-screenshot', className)}>
							<Image className={imageClassName} src={media.src} alt={media.alt} {...imageProps} {...mediaProps}/>
						</div>);
                default:
                    return (<div className={className}>
							<Image className={imageClassName} src={media.src} alt={media.alt} {...imageProps} {...mediaProps}/>
						</div>);
            }
    }
}
//# sourceMappingURL=media.jsx.map