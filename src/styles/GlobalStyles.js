import styled, { createGlobalStyle } from 'styled-components';
import { FONTS } from './fonts';
import { COLORS } from './colors';
// import backgroundImage from '/public/assets/background-stars.svg';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    margin: 0;    
    font-family: ${FONTS.bodyFont};
    font-weight: 500;
    font-size: 14px;
	  line-height: 25px;   
    background-color: black;
    background-image: url('/assets/background-stars.svg') ;
   
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }

  
`;

export const StyledH1 = styled.h1`
	font-family: ${FONTS.h1Font};
	font-size: 80px;
	line-height: 103px;
	color: ${COLORS.textColor};
`;

export const StyledH2 = styled.h2`
	font-family: ${FONTS.h2Font};
	font-size: 40px;
	line-height: 52px;
	letter-spacing: -1.5px;
	color: ${COLORS.textColor};
`;

export const StyledH3 = styled.h3`
	font-family: ${FONTS.h3Font};
	font-weight: bold;
	font-size: 12px;
	line-height: 25px;
	letter-spacing: 2.6px;
	color: ${COLORS.textColor};
`;

export const StyledH4 = styled.h4`
	font-family: ${FONTS.h4Font};
	font-weight: bold;
	font-size: 11px;
	line-height: 25px;
	letter-spacing: 1px;
	color: ${COLORS.textColor};
`;
