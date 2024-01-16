import { v4 } from 'uuid';
import { COLORS } from '../styles/colors';

export const MENU = [
	{ id: v4(), text: 'MERCURY', menuPath: '/', color: COLORS.mercury },
	{ id: v4(), text: 'VENUS', menuPath: '/venus', color: COLORS.venus },
	{ id: v4(), text: 'EARTH', menuPath: '/earth', color: COLORS.earth },
	{ id: v4(), text: 'MARS', menuPath: '/mars', color: COLORS.mars },
	{ id: v4(), text: 'JUPITER', menuPath: '/jupiter', color: COLORS.jupiter },
	{ id: v4(), text: 'SATURN', menuPath: '/saturn', color: COLORS.saturn },
	{ id: v4(), text: 'URANUS', menuPath: '/uranus', color: COLORS.uranus },
	{ id: v4(), text: 'NEPTUNE', menuPath: '/neptune', color: COLORS.neptune }
];
