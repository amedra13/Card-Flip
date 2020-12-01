import React from 'react';

import Dora from '../../images/DoraDaDestroya.jpg';
import Avatar from '@material-ui/core/Avatar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';

import '../../styles/header.scss';

const Header = () => {
	return (
		<div className="header">
			<div className="header__input">
				<input type="text" id="searchInv" placeholder="Search Your Inventory" />
			</div>
			<div className="header__icons">
				<Avatar alt="Dora" src={Dora} />
				<Avatar>
					<NotificationsIcon />
				</Avatar>
				<Avatar>
					<SettingsIcon />
				</Avatar>
			</div>
		</div>
	);
};

export default Header;
