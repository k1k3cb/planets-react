import { useState } from 'react';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import { PLANETS } from '../constants/planets';

const Planet = () => {
	const [planet, setPlanet] = useState(PLANETS[0]);

	return (
		<>
			<Header setPlanet={setPlanet} />
			<Main planet={planet} />
		</>
	);
};

export default Planet;
