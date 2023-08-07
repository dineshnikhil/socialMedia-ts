import React from 'react';

const SignUp: React.FC = () => {
	return (
		<div>
			<form>
				<label htmlFor="username">Username</label>
				<input type="text" id="username" />
				<label htmlFor="email">Email</label>
				<input type="text" id="email" />
				<label htmlFor="password">Password</label>
				<input type="password" id="password" />
				<button type="submit">create account</button>
			</form>
		</div>
	);
};

export default SignUp;
