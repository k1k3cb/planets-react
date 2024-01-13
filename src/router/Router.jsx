import { Route, Routes } from 'react-router-dom';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<p>elemento raiz</p>} />
		</Routes>
	);
};

export default Router;
