import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterData } from '~/shared/types';

type filterState = Array<FilterData>;

const initialState: filterState = [];

const filterSlice = createSlice({
	name: 'filterSlice',
	initialState,
	reducers: {
		setFilterData(state, action: PayloadAction<FilterData>) {
			// state = [...state.filter, action.payload];
			state.push(action.payload);
			return state;
		},
		removeFilterData(state, action: PayloadAction<FilterData>) {
			const keyToRemove = action.payload.key;
			state = state.filter((item) => item.key !== keyToRemove);
			return state;
		},
		removeSpd(state) {
			state = state.filter((item) => item.type !== 'spd');
			state = state.filter((item) => item.type !== 'dow');
			return state;
		},
	},
});

export const { setFilterData, removeFilterData, removeSpd } = filterSlice.actions;

export default filterSlice.reducer;
