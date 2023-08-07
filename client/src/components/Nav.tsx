import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
	return (
		<nav>
			<div>
				<Link to="/">Logo</Link>
			</div>
			<div>
				<Link to="/login">login</Link>
				<Link to="/signup">signIn</Link>
			</div>
		</nav>
	);
};

export default Nav;
