import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { StyledH4 } from '../../styles/GlobalStyles';

export const StyledDiv = styled.div`
	width: 255px;
	height: 128px;
	flex-shrink: 0;
	border: 1px solid ${COLORS.textColor};

	padding: 20px 25px;
	margin-right: 30px;
`;

export const StyledTitle = styled(StyledH4)`
	margin: 0;
	opacity: 0.6;
`;

export const StyledP = styled.p`
	color: ${COLORS.textColor};
	font-family: Antonio;
	font-size: 40px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: -1.5px;
	text-transform: uppercase;
	margin: 0;
`;
