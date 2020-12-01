import './styles/main.scss';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Dashboard from './components/main/Dashboard';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Sidebar />
				<Header />
				<Switch>
					<Route path="/Dashboard">
						<Dashboard />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
