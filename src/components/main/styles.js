import styled from 'styled-components';
import { StyledH1 } from '../../styles/GlobalStyles';
import { COLORS } from '../../styles/colors';

export const StyledMainContainer = styled.main`
	max-width: 1040px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 50px;
`;

export const StyledContainerFlex = styled.div`
	display: flex;
	align-items: center;
`;
export const StyledImgDiv = styled.div`
	flex: 60%;
	display: flex;
	justify-content: center;
`;

export const StyledContentDiv = styled.div`
	flex: 40%;
`;

export const StyledPlanetName = styled(StyledH1)`
	margin-bottom: 25px;
`;

export const StyledText = styled.p`
	color: ${COLORS.textColor};

	font-family: Spartan;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 25px;
`;

export const StyledSourceDiv = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 39px;
`;

export const StyledSourceText = styled.p`
	color: ${COLORS.textColor};

	font-family: Spartan;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 25px;
	margin-right: 10px;
`;

export const StyledSourceSpan = styled.span`
	opacity: 0.5;
	margin-right: 5px;
`;
