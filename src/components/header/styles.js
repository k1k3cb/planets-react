import styled from 'styled-components';
import { FONTS } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';
import { StyledH2 } from '../../styles/GlobalStyles';

export const StyledHeader = styled.header`
	padding-inline: 40px;
	display: flex;
	border-bottom: solid 0.5px ${COLORS.textColorTitle};
`;

export const StyledLogo = styled(StyledH2)`
	width: 50%;
`;

export const StyledNavDiv = styled.div`
	width: 50%;
	align-items: center;
	display: flex;
	justify-content: flex-end;
`;

export const StyledNav = styled.nav`
	color: white;
`;

export const StyledNavUl = styled.ul`
	display: flex;
	width: 100%;
	justify-content: space-around;
`;

export const StyledNavItem = styled.li`
	color: ${COLORS.textColorTitle};
	font-family: ${FONTS.bodyFont};
	font-size: 11px;
	font-weight: 700;
	line-height: 25px;
	letter-spacing: 1px;
	text-transform: uppercase;
	cursor: pointer;
	/* loteria */
	padding: 50px 30px;

	&:hover {
		border-top: 4px solid ${({ $borderColor }) => $borderColor};
	}
`;
