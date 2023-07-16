'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { DropdownMenuProps, FilterData } from '~/shared/types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '~/store/store';
import { setFilterData, removeFilterData } from '~/slices/filterSlice';

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
	'& .MuiListItemIcon-root, & .MuiListItemText-primary': {
		color: theme.palette.text.primary,
	},
}));


const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items }) => {
	const [filter, setFilter] = React.useState('');
	const dispatch = useDispatch<AppDispatch>();

	const filterData = useSelector((state: RootState) => state.filterData);
	const filteredItems = items.filter((item) => item.label.toLowerCase().includes(filter.toLowerCase()));

	const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFilter(event.target.value);
	};

	function checkFilterData(data: FilterData): boolean {
		return filterData.some((item) => item.key === data.key);
	}

	const handleItemClick = (item: FilterData) => () => {
		if (checkFilterData(item)) {
			dispatch(removeFilterData(item));
		} else {
			dispatch(setFilterData(item));
		}
	};

	return (
		<PopupState variant="popover" popupId="dropdown-menu">
			{(popupState) => (
				<React.Fragment>
					<Button
						className="mx-2 inline-flex items-center rounded-lg bg-primary-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-300"
						{...bindTrigger(popupState)}
						endIcon={<KeyboardArrowDownIcon />}
					>
						{title}
					</Button>
					<Menu {...bindMenu(popupState)}>
						<FormControl sx={{ m: 1 }}>
							<FormGroup>
								{/* <FormControlLabel
									control={
										<Checkbox
											checked={selectedItems.length === items.length}
											onChange={() =>
												setSelectedItems(selectedItems.length === items.length ? [] : items.map((item) => item.value))
											}
										/>
									}
									label="Select all"
								/> */}
								<TextField
									placeholder="Search"
									value={filter}
									type="search"
									size="small"
									onChange={handleFilterChange}
									sx={{ width: '150px', marginBottom: '5px', ' & .MuiInputBase-input': { padding: '3.5px' } }}
								/>
								{filteredItems.map((item) => (
									<StyledMenuItem key={item.key}>
										<FormControlLabel
											className="w-full"
											control={
												<Checkbox
													checked={checkFilterData(item)}
													onChange={handleItemClick(item)}
													sx={{ '& .MuiSvgIcon-root': { fontSize: 18 }, padding: '2px', marginRight: '10px' }}
												/>
											}
											label={item.label}
										/>
									</StyledMenuItem>
								))}
							</FormGroup>
						</FormControl>
					</Menu>
				</React.Fragment>
			)}
		</PopupState>
	);
};

export default DropdownMenu;
