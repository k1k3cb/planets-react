import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import {
	StyledContainerFlex,
	StyledContentDiv,
	StyledImgAbsolute,
	StyledImgContainer,
	StyledImgDiv,
	StyledImgRelative,
	StyledMainContainer,
	StyledPlanetName,
	StyledSourceDiv,
	StyledSourceSpan,
	StyledSourceText,
	StyledText
} from './styles';
import Tabs from '../tabs/Tabs';
import { PLANETS } from '../../constants/planets';
import { useState } from 'react';

const Main = ({ planet }) => {
	const [activeTab, setActiveTab] = useState(0);
	// console.log(PLANETS[planet]);

	return (
		<StyledMainContainer>
			<StyledContainerFlex>
				<StyledImgDiv>
					{activeTab === 2 && (
						<StyledImgContainer>
							<StyledImgRelative
								src={PLANETS[planet].images[1]}
								alt={`${PLANETS[planet].name} - Image 2`}
							/>
							<StyledImgAbsolute
								src={PLANETS[planet].images[activeTab]}
								alt={`${PLANETS[planet].name} - Image 3`}
							/>
						</StyledImgContainer>
					)}

					{activeTab !== 2 && (
						<img
							src={PLANETS[planet].images[activeTab]}
							alt={`${PLANETS[planet].name} - Image ${activeTab}`}
						/>
					)}
				</StyledImgDiv>

				<StyledContentDiv>
					<StyledPlanetName>{PLANETS[planet].name}</StyledPlanetName>
					<StyledText>{}</StyledText>
					<StyledSourceDiv>
						<StyledSourceText>
							<StyledSourceSpan>Source: </StyledSourceSpan> Wikipedia
						</StyledSourceText>
						<Link to={PLANETS[planet].wikipedia}>
							<img src='assets/icon-source.svg' alt='' />
						</Link>
					</StyledSourceDiv>
					<Tabs
						backgroundColor={PLANETS[planet].color}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
				</StyledContentDiv>
			</StyledContainerFlex>
			<Footer
				rotationTime={PLANETS[planet].rotationTime}
				revolutionTime={PLANETS[planet].revolutionTime}
				radius={PLANETS[planet].radius}
				averageTemp={PLANETS[planet].averageTemp}
			/>
		</StyledMainContainer>
	);
};

export default Main;
