import { StyledDiv, StyledP, StyledTitle } from './styles';

const FooterBtn = ({ text, data }) => {
	return (
		<StyledDiv>
			<StyledTitle>{text}</StyledTitle>
			<StyledP>{data}</StyledP>
		</StyledDiv>
	);
};

export default FooterBtn;
