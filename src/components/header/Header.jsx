import { PLANETS } from '../../constants/planets';
import {
	StyledHeader,
	StyledLogo,
	StyledNav,
	StyledNavDiv,
	StyledNavItem,
	StyledNavUl
} from './styles';

const Header = ({ setPlanet }) => {
	return (
		<StyledHeader>
			<StyledLogo>THE PLANETS</StyledLogo>
			<StyledNavDiv>
				<StyledNav>
					<StyledNavUl>
						{PLANETS.map(planet => (
							<StyledNavItem
								key={planet.id}
								$borderColor={planet.color}
								onClick={() => handlePlanetClick(planet, setPlanet)}
							>
								{planet.name}{' '}
							</StyledNavItem>
						))}
					</StyledNavUl>
				</StyledNav>
			</StyledNavDiv>
		</StyledHeader>
	);
};

const handlePlanetClick = (planet, setPlanet) => {
	setPlanet(planet);
};

export default Header;
