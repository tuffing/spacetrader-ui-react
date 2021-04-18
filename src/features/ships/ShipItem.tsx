import React from 'react';
import { Ship } from '../../api/ships';
import globalStyles from '../../Styles.module.css';
import shipStyles from './Ships.module.css';

type Props = {
	ship: Ship;
};

export default function ShipItem({ ship }: Props) {
	return (
		<div data-testid="ShipItem" className={globalStyles.row}>
			<span className={shipStyles.label}>Type:</span> {ship.type}
			<span className={shipStyles.label}>Class:</span> {ship.class}
			<span className={shipStyles.label}>Manufacturer:</span> {ship.manufacturer}
			<span className={shipStyles.label}>Max Cargo:</span> {ship.maxCargo}
		</div>
	);
}
