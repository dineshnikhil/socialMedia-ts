import React from 'react';
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import tokenState from '../store/atoms/tokenState';

const Nav: React.FC = () => {
	const tokenAtom = useRecoilValue(tokenState);
	console.log(tokenAtom);
	return (
		<nav>
			<div>
				<Link to="/">Logo</Link>
			</div>
			{tokenAtom.token === '' ? (
				<div>
					<Link to="/login">login</Link>
					<Link to="/signup">signIn</Link>
				</div>
			) : (
				<div>
					<button>logout</button>
				</div>
			)}
		</nav>
	);
};

export default Nav;
