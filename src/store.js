import { localStore } from '/src/localStore';
import LZString from 'lz-string';

export const theme = localStore(
	'theme',
	'light',
	[JSON.stringify, LZString.compress],
	[LZString.decompress, JSON.parse]
);
