import { configureStore } from '@reduxjs/toolkit';

import counterSlice from '~/slices/counterSlice';
import btStepSlice from '~/slices/btStepSlice';
import filterSlice from '~/slices/filterSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
	reducer: {
		counter: counterSlice,
		btStep: btStepSlice,
		filterData: filterSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
