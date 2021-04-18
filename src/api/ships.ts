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

/**
 * Fetches a list of available ships - which includes their stats, and where and how much to buy them.
 * @param {string} token          A valid auth token
 * @returns {Ships}
 */
export const availableShips = async (token: string) => {
	const response = await performRequest('GET', `game/ships/`, { Authorization: `Bearer ${token}` });

	return response;
};
