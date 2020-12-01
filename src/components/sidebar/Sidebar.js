import React from 'react';
import SideOption from './SideOption';
import DashboardIcon from '@material-ui/icons/Dashboard';

import '../../styles/sidebar.scss';

const Sidebar = () => {
	const menuOptions = ['Dashboard', 'Inventory', 'Submissions', 'Sales'];
	const accountOptions = ['Settings', 'Logout'];

	return (
		<div className="sidebar">
			<DashboardIcon className="sidebar__icon" />
			<h3>Menu</h3>
			{menuOptions.map((option) => (
				<SideOption key={option} option={option} />
			))}
			<h3>Account</h3>
			{accountOptions.map((option) => (
				<SideOption key={option} option={option} />
			))}
		</div>
	);
};

export default Sidebar;
