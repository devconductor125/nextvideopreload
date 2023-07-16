import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function valuetext(value: number) {
	return `$ ${value}`;
}

export default function PriceSlider() {
	const [value, setValue] = React.useState<number[]>([4, 100]);

	const handleChange = (event: Event, newValue: number | number[]) => {
		setValue(newValue as number[]);
	};

	return (
		<>
			<PopupState variant="popover" popupId="dropdown-menu">
				{(popupState) => (
					<>
						<Button
							className="mx-2 inline-flex items-center rounded-lg bg-primary-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-300"
							{...bindTrigger(popupState)}
							endIcon={<KeyboardArrowDownIcon />}
						>
							Price
						</Button>
						<Menu {...bindMenu(popupState)} className="px-2 py-6">
							<Box sx={{ width: 250, margin: '30px 15px 0px 15px' }}>
								<Slider
									getAriaLabel={() => 'Price range'}
									value={value}
									onChange={handleChange}
									valueLabelDisplay="auto"
									getAriaValueText={valuetext}
								/>
							</Box>
							<p className="text-lg font-bold text-center">
								<span>$ {value[0]}</span> - <span>$ {value[1]}</span>
							</p>
						</Menu>
					</>
				)}
			</PopupState>
		</>
	);
}
