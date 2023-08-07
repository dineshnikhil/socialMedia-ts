import { Route, Routes } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {
	return (
		<>
			<Nav />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
