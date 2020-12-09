import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './styles/main.scss';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Dashboard from './components/main/Dashboard/Dashboard';
import Inventory from './components/main//Inventory/Inventory';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as actions from './store/actions/actions';
import db from './database';
const App = (props) => {
	useEffect(() => {
		let data = [];

		db.collection('inventory').onSnapshot((inventory) => {
			inventory.docChanges().forEach((item) => {
				let card = { ...item.doc.data() };

				switch (item.type) {
					case 'added':
						data.push(card);
						break;
					case 'modified':
						const index = data.findIndex((item) => item.id === card.id);
						data[index] = card;
						break;
					default:
						break;
				}
			});

			props.onSetInventory(data);
		});
	}, [props]);
	return (
		<BrowserRouter>
			<div className="App">
				<Sidebar />
				<Header />
				<Switch>
					<Route path="/Dashboard">
						<Dashboard />
					</Route>
					<Route path="/Inventory">
						<Inventory />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSetInventory: (data) => dispatch(actions.setInventory(data)),
	};
};

export default connect(null, mapDispatchToProps)(App);
