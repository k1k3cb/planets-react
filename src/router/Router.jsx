import { Route, Routes } from 'react-router-dom';
import Planet from '../pages/Planet';
import { MENU } from '../constants/menu';

const Router = () => {
	return (
		<Routes>
			{MENU.map(itemNav => (
				<Route
					key={itemNav.id}
					path={itemNav.menuPath}
					element={<Planet planetName={itemNav.text} />}
				/>
			))}
		</Routes>
	);
};

export default Router;
