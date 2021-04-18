import React from 'react';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import userStyles from './User.module.css';
import globalStyles from '../../Styles.module.css';

export default function UserPanel() {
	const username = useSelector((state: RootState) => state.user.username);
	const credits = useSelector((state: RootState) => state.user.credits);

	return (
		<div className={[globalStyles.container, userStyles.infoPanel].join(' ')}>
			<div className={globalStyles.row}>
				<div className={userStyles.username}>{username}</div>
				<div className={userStyles.userData} aria-label="Credits">
					Credits {credits}
				</div>
			</div>
		</div>
	);
}
