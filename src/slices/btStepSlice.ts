import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface btStepState {
	curStep: number;
	visiable: boolean;
}

const initialState: btStepState = {
	curStep: 0,
	visiable: false,
};

const btStepSlice = createSlice({
	name: 'btStepSlice',
	initialState,
	reducers: {
		show(state) {
			state.visiable = true;
		},
		hide(state) {
			state.visiable = false;
		},
		nextStep(state) {
			state.curStep++;
		},
		prevStep(state) {
			state.curStep--;
		},
		setStep(state, action: PayloadAction<number>) {
			state.curStep = action.payload;
		},
	},
});

export const { show, hide, nextStep, prevStep, setStep } = btStepSlice.actions;

export default btStepSlice.reducer;
