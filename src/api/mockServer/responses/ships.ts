import { Ship, Ships, Manufacturer } from '../../ships';

export const availableShipsSuccessBody: Ships = {
	ships: [
		{
			type: 'EM-MK-III',
			class: 'MK-III',
			maxCargo: 100,
			speed: 3,
			manufacturer: Manufacturer.Electrum,
			plating: 10,
			weapons: 15,
			purchaseLocations: [
				{
					location: 'OE-A1',
					price: 40000
				}
			]
		},
		{
			type: 'EM-MK-II',
			class: 'MK-II',
			maxCargo: 100,
			speed: 2,
			manufacturer: Manufacturer.Electrum,
			plating: 10,
			weapons: 10,
			purchaseLocations: [
				{
					location: 'OE-A1',
					price: 16000
				}
			]
		},
		{
			type: 'ZA-MK-II',
			class: 'MK-II',
			maxCargo: 300,
			speed: 2,
			manufacturer: Manufacturer.Zetra,
			plating: 5,
			weapons: 5,
			purchaseLocations: [
				{
					location: 'OE-A1',
					price: 12800
				},
				{
					location: 'OE-A1-M1',
					price: 12800
				}
			]
		},
		{
			type: 'GR-MK-I',
			class: 'MK-I',
			maxCargo: 300,
			speed: 1,
			manufacturer: Manufacturer.Gravager,
			plating: 10,
			weapons: 5,
			purchaseLocations: [
				{
					location: 'OE-A1-M1',
					price: 2900
				},
				{
					location: 'OE-D2',
					price: 2900
				}
			]
		},
		{
			type: 'ZA-MK-III',
			class: 'MK-III',
			maxCargo: 300,
			speed: 2,
			manufacturer: Manufacturer.Zetra,
			plating: 10,
			weapons: 10,
			purchaseLocations: [
				{
					location: 'OE-A1-M1',
					price: 33000
				}
			]
		},
		{
			type: 'JW-MK-II',
			class: 'MK-II',
			maxCargo: 100,
			speed: 2,
			manufacturer: Manufacturer.Jackshaw,
			plating: 10,
			weapons: 10,
			purchaseLocations: [
				{
					location: 'OE-G4',
					price: 8000
				}
			]
		},
		{
			type: 'JW-MK-I',
			class: 'MK-I',
			maxCargo: 100,
			speed: 2,
			manufacturer: Manufacturer.Jackshaw,
			plating: 5,
			weapons: 5,
			purchaseLocations: [
				{
					location: 'OE-G4',
					price: 1700
				},
				{
					location: 'OE-D2',
					price: 1700
				}
			]
		},
		{
			type: 'GR-MK-III',
			class: 'MK-III',
			maxCargo: 5000,
			speed: 1,
			manufacturer: Manufacturer.Gravager,
			plating: 10,
			weapons: 10,
			purchaseLocations: [
				{
					location: 'OE-D2',
					price: 24000
				}
			]
		},
		{
			type: 'GR-MK-II',
			class: 'MK-II',
			maxCargo: 1000,
			speed: 1,
			manufacturer: Manufacturer.Gravager,
			plating: 10,
			weapons: 5,
			purchaseLocations: [
				{
					location: 'OE-D2',
					price: 10100
				}
			]
		}
	]
};
