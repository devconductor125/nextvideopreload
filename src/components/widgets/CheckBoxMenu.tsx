'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FormControlLabel, Checkbox } from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CheckSelectorProps } from '~/shared/types';

const CheckBoxMenu: React.FC<CheckSelectorProps> = ({ title, options }) => {
	const [checkedItems, setCheckedItems] = React.useState(new Set());
	const [filterValue, setFilterValue] = React.useState('');

	const handleToggle = (value: string) => {
		const newCheckedItems = new Set(checkedItems);
		if (checkedItems.has(value)) {
			newCheckedItems.delete(value);
		} else {
			newCheckedItems.add(value);
		}
		setCheckedItems(newCheckedItems);
	};

	const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(filterValue.toLowerCase()));

	return (
		<PopupState variant="popover" popupId="demo-popup-menu">
			{(popupState) => (
				<>
					<Button {...bindTrigger(popupState)} endIcon={<KeyboardArrowDownIcon />}>
						{title}
					</Button>

					<Menu {...bindMenu(popupState)}>
						<div style={{ marginTop: '10px' }}>
							<input
								type="text"
								placeholder="Filter"
								value={filterValue}
								onChange={(e) => setFilterValue(e.target.value)}
							/>
						</div>
						{filteredOptions.map((option) => (
							<MenuItem key={option.value}>
								<FormControlLabel
									control={
										<Checkbox checked={checkedItems.has(option.value)} onChange={() => handleToggle(option.value)} />
									}
									label={option.label}
								/>
							</MenuItem>
						))}
					</Menu>
				</>
			)}
		</PopupState>
	);
};

export default CheckBoxMenu;
