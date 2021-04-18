import { performRequest } from './api';

export enum Manufacturer {
	Electrum = 'Electrum',
	Gravager = 'Gravager',
	Jackshaw = 'Jackshaw',
	Zetra = 'Zetra'
}

export interface Ship {
	type: string;
	class: string;
	maxCargo: number;
	speed: number;
	manufacturer: Manufacturer;
	plating: number;
	weapons: number;
	purchaseLocations: { location: string; price: number }[];
}

export interface Ships {
	ships: Ship[];
}

export const availableShips = async (token: string) => {
	const response = await performRequest('GET', `game/ships/`, { Authorization: `Bearer ${token}` });

	return response;
};
