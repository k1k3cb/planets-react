import { TABBUTTONS } from '../../constants/tabButtons';
import TabButton from '../tab-button/TabButton';

const Tabs = ({ backgroundColor, activeTab, setActiveTab }) => {
	// console.log('tabActive ' + activeTab);
	
	return (
		<div>
			{TABBUTTONS.map((button, index) => {
				// console.log(button, index);
				return (
					<TabButton
						key={button.id}
						number={button.number}
						text={button.text}
						$backgroundColor={backgroundColor}
						onClick={() => handleTabActive(index, setActiveTab)}
						$active={index === activeTab}
					/>
				);
			})}
		</div>
	);
};

const handleTabActive = (tabIndex, setTabActive) => {
	setTabActive(tabIndex);
	// console.log('valor index: ' + tabIndex);
};

export default Tabs;
