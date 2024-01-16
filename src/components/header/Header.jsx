
import {
	StyledHeader,
	StyledLink,
	StyledLogo,
	StyledNav,
	StyledNavDiv,
	StyledNavItem,
	StyledNavUl
} from './styles';
import { MENU } from '../../constants/menu';

const Header = () => {
	return (
		<StyledHeader>
			<StyledLogo>THE PLANETS</StyledLogo>
			<StyledNavDiv>
				<StyledNav>
					<StyledNavUl>
						{MENU.map(menuItem => {
							return (
								<StyledNavItem key={menuItem.id} $borderColor={menuItem.color}>
									<StyledLink to={menuItem.menuPath}>
										{menuItem.text}
									</StyledLink>
								</StyledNavItem>
							);
						})}
					</StyledNavUl>
				</StyledNav>
			</StyledNavDiv>
		</StyledHeader>
	);
};

export default Header;
