import React from 'react';

const Login: React.FC = () => {
	return (
		<div>
			<form>
				<label htmlFor="username">Username</label>
				<input type="text" id="username" />
				<label htmlFor="password">Password</label>
				<input type="password" id="password" />
				<button type="submit">login</button>
			</form>
		</div>
	);
};

export default Login;
