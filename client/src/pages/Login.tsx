import React from 'react';
import { useRef } from 'react';
import { signInUser } from '../../../common/src/index';

const Login: React.FC = () => {
	const username = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);

	const loginSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const pasedInput = signInUser.safeParse({
			username: username.current?.value,
			password: password.current?.value,
		});

		if (pasedInput.success) {
		} else {
			window.alert('wrong input..!');
		}
	};

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={loginSubmitHandler}>
				<label htmlFor="username">Username</label>
				<input type="text" id="username" ref={username} />
				<label htmlFor="password">Password</label>
				<input type="password" id="password" ref={password} />
				<button type="submit">login</button>
			</form>
		</div>
	);
};

export default Login;
