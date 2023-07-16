'use client';

import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import classNames from 'classnames';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';

import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '~/store/store';
import { FilterData } from '~/shared/types';
import { useSelector } from 'react-redux';
import { setFilterData, removeFilterData, removeSpd } from '~/slices/filterSlice';

const daysOfWeek = [
	{ key: nanoid(), label: 'Mo', value: 'mo', type: 'dow' },
	{ key: nanoid(), label: 'Tu', value: 'tu', type: 'dow' },
	{ key: nanoid(), label: 'We', value: 'we', type: 'dow' },
	{ key: nanoid(), label: 'Th', value: 'th', type: 'dow' },
	{ key: nanoid(), label: 'Fr', value: 'fr', type: 'dow' },
	{ key: nanoid(), label: 'St', value: 'st', type: 'dow' },
	{ key: nanoid(), label: 'Su', value: 'su', type: 'dow' },
];

const timesOfDay = [
	{ key: nanoid(), label: '00:00 - 04:00', value: '0', type: 'tod' },
	{ key: nanoid(), label: '04:00 - 08:00', value: '1', type: 'tod' },
	{ key: nanoid(), label: '08:00 - 12:00', value: '2', type: 'tod' },
	{ key: nanoid(), label: '12:00 - 16:00', value: '3', type: 'tod' },
	{ key: nanoid(), label: '16:00 - 20:00', value: '4', type: 'tod' },
	{ key: nanoid(), label: '20:00 - 24:00', value: '5', type: 'tod' },
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const TimePicker: React.FC = ({}) => {
	const [date, setDate] = React.useState<Dayjs | null>(dayjs(new Date()));
	const dispatch = useDispatch<AppDispatch>();
	const filterData = useSelector((state: RootState) => state.filterData);

	function checkFilterData(data: FilterData): boolean {
		return filterData.some((item) => item.key === data.key);
	}

	const handleDate = (pickedDate: any) => {
		setDate(pickedDate);
		const date: FilterData = {
			key: nanoid(),
			label: months[pickedDate.$M] + ' ' + pickedDate.$D,
			value: JSON.stringify(pickedDate),
			type: 'spd',
		};
		dispatch(removeSpd());
		dispatch(setFilterData(date));
	};

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
						Lesson Time
					</Button>
					<Menu {...bindMenu(popupState)}>
						<div className="px-4 py-2">
							<p className="mt-2 text-sm font-semibold text-slate-500">Days of the Week</p>
							<div className="my-2 flex justify-around">
								{daysOfWeek.map((item, index) => (
									<span key={index}>
										<label
											htmlFor={item.label}
											// className="mx-1 cursor-pointer rounded-full p-2 bg-primary-600 text-white"
											className={classNames(
												'mx-1 flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-full text-sm',
												{
													'bg-primary-800 text-white': checkFilterData(item),
													'border border-primary-800 text-primary-800': !checkFilterData(item),
												},
											)}
										>
											<input
												type="checkbox"
												id={item.label}
												className="hidden"
												checked={checkFilterData(item)}
												onChange={handleItemClick(item)}
											/>
											{item.label}
										</label>
									</span>
								))}
							</div>
							<p className="mt-4 text-sm font-semibold text-slate-500">Time of the Day</p>
							<div className="my-2 flex max-w-xs flex-wrap justify-around">
								{timesOfDay.map((item, index) => (
									<div key={index} className="w-1/3">
										<label
											htmlFor={item.label}
											// className="mx-1 cursor-pointer rounded-full p-2 bg-primary-600 text-white"
											className={classNames(
												'm-1 box-border flex cursor-pointer select-none items-center justify-center rounded py-1 text-sm',
												{
													'border bg-primary-800 text-white': checkFilterData(item),
													'border border-primary-800 text-primary-800': !checkFilterData(item),
												},
											)}
										>
											<input
												type="checkbox"
												id={item.label}
												className="hidden"
												checked={checkFilterData(item)}
												onChange={handleItemClick(item)}
											/>
											{item.label}
										</label>
									</div>
								))}
							</div>
							<p className="mt-4 text-sm font-semibold text-slate-500">Choose a specific Date</p>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DateCalendar value={date} onChange={(newDate) => handleDate(newDate)} />
							</LocalizationProvider>
						</div>
					</Menu>
				</React.Fragment>
			)}
		</PopupState>
	);
};

export default TimePicker;
