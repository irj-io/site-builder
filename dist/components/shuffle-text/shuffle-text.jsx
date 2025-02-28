import { ShuffleTextClient } from './shuffle-text.client';
export function ShuffleText({ list }) {
    var _a;
    const initial = (_a = list[0]) !== null && _a !== void 0 ? _a : '';
    return (<span>
			<ShuffleTextClient initial={initial} list={list}/>
		</span>);
}
//# sourceMappingURL=shuffle-text.jsx.map