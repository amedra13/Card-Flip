import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import StorageIcon from '@material-ui/icons/Storage';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const SideOption = ({ option }) => {
	let optionIcon = null;

	switch (option) {
		case 'Dashboard':
			optionIcon = <HomeIcon fontSize="medium" />;
			break;
		case 'Inventory':
			optionIcon = <StorageIcon fontSize="medium" />;
			break;
		case 'Submissions':
			optionIcon = <MarkunreadMailboxIcon fontSize="medium" />;
			break;
		case 'Sales':
			optionIcon = <TrendingUpIcon fontSize="medium" />;
			break;
		case 'Settings':
			optionIcon = <SettingsIcon fontSize="medium" />;
			break;
		case 'Logout':
			optionIcon = <ExitToAppIcon fontSize="medium" />;
			break;
		default:
			break;
	}

	return (
		<NavLink
			to={`/${option}`}
			className="sideOption"
			activeClassName="selected"
		>
			{optionIcon}
			<h2>{option}</h2>
		</NavLink>
	);
};

export default SideOption;
