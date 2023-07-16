'use client';

import React from 'react';
import DropdownMenu from './DropdownMenu';
import { DropdownMenuProps } from '~/shared/types';
import TimePicker from './TimePicker';
import PriceSlider from './PriceSlider';
import ChipBar from './ChipBar';
import { nanoid } from '@reduxjs/toolkit';

const Language: DropdownMenuProps = {
	title: 'Language',
	items: [
		{ key: nanoid(), label: 'English', value: 'eng', type: 'lang' },
		{ key: nanoid(), label: 'Germany', value: 'ger', type: 'lang' },
		{ key: nanoid(), label: 'Japanese', value: 'jpn', type: 'lang' },
		{ key: nanoid(), label: 'Dutch', value: 'dt', type: 'lang' },
	],
};

const Category: DropdownMenuProps = {
	title: 'Category',
	items: [
		{ key: nanoid(), label: 'Wellness', value: 'wel', type: 'category' },
		{ key: nanoid(), label: 'Fitness', value: 'fit', type: 'category' },
		{ key: nanoid(), label: 'Business', value: 'bis', type: 'category' },
		{ key: nanoid(), label: 'Sports', value: 'spo', type: 'category' },
		{ key: nanoid(), label: 'Cooking', value: 'cook', type: 'category' },
		{ key: nanoid(), label: 'Marketing', value: 'mar', type: 'category' },
	],
};

const TeacherFrom: DropdownMenuProps = {
	title: 'Teacher is from',
	items: [
		{ key: nanoid(), label: 'Austria', value: 'au', type: 'teacher' },
		{ key: nanoid(), label: 'Japan', value: 'jp', type: 'teacher' },
		{ key: nanoid(), label: 'China', value: 'cn', type: 'teacher' },
		{ key: nanoid(), label: 'Canada', value: 'ca', type: 'teacher' },
	],
};

const Currency: DropdownMenuProps = {
	title: 'Currency',
	items: [
		{ key: nanoid(), label: 'USD', value: 'usd', type: 'cur' },
		{ key: nanoid(), label: 'JPY', value: 'jpy', type: 'cur' },
		{ key: nanoid(), label: 'EURO', value: 'euro', type: 'cur' },
	],
};

const GroupFilter = () => {
	return (
		<>
			<div className="flex items-center justify-center p-4">
				<DropdownMenu title={Language.title} items={Language.items} />
				<DropdownMenu title={Category.title} items={Category.items} />
				<TimePicker />
				<DropdownMenu title={TeacherFrom.title} items={TeacherFrom.items} />
				<DropdownMenu title={Currency.title} items={Currency.items} />
				<PriceSlider />
			</div>
			<ChipBar />
		</>
	);
};

export default GroupFilter;
