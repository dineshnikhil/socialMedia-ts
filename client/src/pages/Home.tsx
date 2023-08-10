import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { tweetType } from '../../../common/src';
import tokenState from '../store/atoms/tokenState';

const Home: React.FC = () => {
	const navigate = useNavigate();
	const [tweets, setTweets] = useState([]);
	const setTokenAtom = useSetRecoilState(tokenState);

	useEffect(() => {
		const token = window.localStorage.getItem('token');
		async function getTweets() {
			try {
				const response = await axios.get('http://localhost:3000/api/v1/tweet', {
					headers: {
						Authorization: token,
					},
				});
				setTweets(response.data.tweets);
			} catch (error) {
				window.localStorage.removeItem('token');
				window.location.reload();
			}
		}

		if (!token) {
			navigate('/login');
		} else {
			setTokenAtom({
				token: token,
			});
			getTweets();
		}
	}, []);

	return (
		<div>
			{tweets.map((tweet: tweetType) => {
				return <h1 key={Math.random()}>{tweet.content}</h1>;
			})}
		</div>
	);
};

export default Home;
