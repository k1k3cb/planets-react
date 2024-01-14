import { StyledButton, StyledSpan } from './styles';

const TabButton = ({ number, text, $backgroundColor, $active, onClick }) => {
	return (
		<StyledButton
			$backgroundColor={$backgroundColor}
			$active={$active}
			onClick={onClick}
		>
			<StyledSpan>{number}</StyledSpan>
			{text.toUpperCase()}
		</StyledButton>
	);
};

export default TabButton;
