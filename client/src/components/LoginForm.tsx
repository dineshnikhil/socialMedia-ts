import React from 'react';

const LoginForm: React.FC<{
	username: React.RefObject<HTMLInputElement>;
	password: React.RefObject<HTMLInputElement>;
	onLoginHandler: (event: React.FormEvent) => void;
}> = ({ username, password, onLoginHandler }) => {
	return (
		<form>
			<label htmlFor="username">Username</label>
			<input type="text" id="username" ref={username} />
			<label htmlFor="password">Password</label>
			<input type="password" id="password" ref={password} />
			<button type="submit" onClick={onLoginHandler}>
				login
			</button>
		</form>
	);
};

export default LoginForm;
