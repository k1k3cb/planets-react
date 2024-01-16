import Header from '../components/header/Header';
import Main from '../components/main/Main';

const Planet = ({ planetName }) => {
	return (
		<>
			<Header />
			<Main planet={planetName} />
		</>
	);
};

export default Planet;
