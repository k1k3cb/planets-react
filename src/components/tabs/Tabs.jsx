import { useState } from 'react';

import { TABBUTTONS } from '../../constants/tabButtons';
import TabButton from '../tab-button/TabButton';

const Tabs = ({ backgroundColor }) => {
	const [tabActive, setTabActive] = useState(0);

    //  const TABBUTTONS = [
    //     { id: v4(), number: '01', text: 'Overview' },
    //     { id: v4(), number: '02', text: 'Internal Structure' },
    //     { id: v4(), number: '03', text: 'Surface Geology' }
    // ];

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
						onClick={() => handleTabActive(index, setTabActive)}
						$active={index === tabActive}
					/>
				);
			})}
		</div>
	);
};

const handleTabActive = (tabIndex, setTabActive) => {
	setTabActive(tabIndex);
	console.log('valor index: ' + tabIndex);
};

export default Tabs;
