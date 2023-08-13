import React from 'react';
import { useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';
import { signInUser } from '../../../common/src/index';
import { useNavigate } from 'react-router-dom';
import tokenState from '../store/atoms/tokenState';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
	const navigate = useNavigate();
	const username = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);
	const setTokenAtom = useSetRecoilState(tokenState);

	const loginSubmitHandler = async (event: React.FormEvent) => {
		event.preventDefault();
		const pasedInput = signInUser.safeParse({
			username: username.current?.value,
			password: password.current?.value,
		});

		if (pasedInput.success) {
			const response = await axios.post(
				'http://localhost:3000/api/v1/signin',
				pasedInput.data
			);
			if (response.data.token) {
				setTokenAtom({
					token: response.data.token,
				});
				window.localStorage.setItem('token', response.data.token);
				navigate('/');
			} else {
				window.alert('wrong input..!');
			}
		} else {
			window.alert('wrong input..!');
		}
	};

	return (
		<div>
			<h2>Login</h2>
			<LoginForm
				username={username}
				password={password}
				onLoginHandler={loginSubmitHandler}
			/>
		</div>
	);
};

export default Login;
