import FooterBtn from '../footer-btn/FooterBtn';
import { StyledContainer } from './styles';

const Footer = ({ rotationTime, revolutionTime, radius, averageTemp }) => {
	return (
		<StyledContainer>
			<FooterBtn text='ROTATION TIME' data={rotationTime} />
			<FooterBtn text='REVOLUTION TIME' data={revolutionTime} />
			<FooterBtn text='RADIUS' data={radius} />
			<FooterBtn text='AVERAGE TEMP.' data={averageTemp} />
		</StyledContainer>
	);
};

export default Footer;
