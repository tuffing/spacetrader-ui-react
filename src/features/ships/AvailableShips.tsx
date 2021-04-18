import React from 'react';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import ShipItem from './ShipItem';
import globalStyles from '../../Styles.module.css';

export default function AvailableShips() {
	const availableShips = useSelector((state: RootState) => state.ships.availableShips);

	const renderedListItems = availableShips.map((ship) => {
		return <ShipItem key={ship.type} ship={ship} />;
	});

	return (
		<div className={globalStyles.container}>
			<div className={globalStyles.header}>Available Ships</div>

			<div aria-label="Ships available to buy">{renderedListItems}</div>
		</div>
	);
}
