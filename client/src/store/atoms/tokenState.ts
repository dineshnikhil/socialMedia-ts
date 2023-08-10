import { atom } from 'recoil';

const tokenState = atom({
	key: 'tokenState',
	default: {
		token: '',
	},
});

export default tokenState;
