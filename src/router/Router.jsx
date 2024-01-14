import { Navigate, Route, Routes } from 'react-router-dom';
import Planet from '../pages/Planet';

const Router = () => {
	return (
		<Routes>
			<Route path='/:planetName' element={<Planet />} />
			<Route path='/*' element={<Navigate to='/mercury' />} />
		</Routes>
	);
};

export default Router;
