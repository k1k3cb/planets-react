import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import {
	StyledContainerFlex,
	StyledContentDiv,
	StyledImgDiv,
	StyledMainContainer,
	StyledPlanetName,
	StyledSourceDiv,
	StyledSourceSpan,
	StyledSourceText,
	StyledText
} from './styles';
import Tabs from '../tabs/Tabs';

const Main = ({ planet }) => {
	// console.log(planet);
	return (
		<StyledMainContainer>
			<StyledContainerFlex>
				<StyledImgDiv>
					<img src={planet.planetImg} alt={planet.name} />
				</StyledImgDiv>

				<StyledContentDiv>
					<StyledPlanetName>{planet.name}</StyledPlanetName>
					<StyledText>{planet.overview}</StyledText>
					<StyledSourceDiv>
						<StyledSourceText>
							<StyledSourceSpan>Source: </StyledSourceSpan> Wikipedia{' '}
						</StyledSourceText>
						<Link to={planet.wikipedia}>
							<img src='assets/icon-source.svg' alt='' />
						</Link>
					</StyledSourceDiv>
					<Tabs backgroundColor={planet.color} />
				</StyledContentDiv>
			</StyledContainerFlex>
			<Footer />
		</StyledMainContainer>
	);
};

export default Main;
