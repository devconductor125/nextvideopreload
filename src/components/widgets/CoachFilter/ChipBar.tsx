import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { FilterData } from '~/shared/types';

import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '~/store/store';
import { setFilterData, removeFilterData } from '~/slices/filterSlice';

const ListItem = styled('li')(({ theme }) => ({
	margin: theme.spacing(0.5),
}));

export default function ChipBar() {
	const filterData = useSelector((state: RootState) => state.filterData);
	const dispatch = useDispatch<AppDispatch>();

	const handleDelete = (chipToDelete: FilterData) => () => {
		dispatch(removeFilterData(chipToDelete))
	};

	return (
		<Paper
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexWrap: 'wrap',
				listStyle: 'none',
				p: 0.5,
				m: 0,
			}}
			component="ul"
		>
			{filterData.map((data, index) => {
				return (
					<ListItem key={index}>
						<Chip label={data.label} onDelete={handleDelete(data)} />
					</ListItem>
				);
			})}
		</Paper>
	);
}
