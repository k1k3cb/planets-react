import styled from 'styled-components';
import { FONTS } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

export const StyledButton = styled.button`
	width: 100%;
	height: 48px;
	text-align: start;
	padding-left: 28px;
	font-family: ${FONTS.h3Font};
	font-weight: bold;
	font-size: 12px;
	line-height: 25px;
	letter-spacing: 2.6px;
	color: ${COLORS.textColor};
	border: 1px solid ${COLORS.textColorTitle};
	background-color: ${({ $active, $backgroundColor }) =>
		$active ? { $backgroundColor } : 'transparent'};
	margin-bottom: 18px;
	cursor: pointer;
	&:hover {
		background-color: ${COLORS.hover};
		opacity: 0.2;
	}
`;

export const StyledSpan = styled.span`
	opacity: 0.5;
	margin-right: 28px;
`;
