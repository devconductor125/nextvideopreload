'use client';
import Link from 'next/link';
import { Divider, Checkbox, FormControlLabel, TextField, FormGroup } from '@mui/material';
import React, { useEffect } from 'react';
import { show, setStep } from '~/slices/btStepSlice';
import { useAppDispatch } from '~/store/store';

const Page = () => {
	const dispatch = useAppDispatch();
	const showStepper = React.useCallback(() => {
		dispatch(show());
	}, [dispatch]);
	const setCurStep = React.useCallback(() => {
		dispatch(setStep(2));
	}, [dispatch]);
	useEffect(() => {
		showStepper();
		setCurStep();
	}, [showStepper, setCurStep]);

	return (
		<>
			<div className="mx-auto w-full md:w-8/12 lg:w-6/12">
				<div className="m-4 mt-6 rounded-lg border border-gray-100 px-4 py-6 shadow-lg md:px-16 md:py-10 md:shadow-2xl lg:mt-8">
					<h5 className="text-center text-lg font-semibold text-gray-600">Formal agreement</h5>
					<Divider className="mt-4" />
					<p className="my-4 text-center text-sm font-semibold">
						In general, we want to acknowledge that you are working as a freelance contractor. As a Professional Teacher
						or Community Tutor on COACHING, you are providing services to COACHING users on your own behalf.
					</p>
					<Divider />
					<h1 className="my-8">Terms of service Section</h1>
					<Divider />
					<p className="mt-6 text-center text-sm">By writing my name here, I agree to conditions above.</p>
					<TextField
						id="confirm_name"
						size="small"
						label="Your Name"
						variant="outlined"
						className="mt-4 w-full md:ml-2 md:mt-8 md:w-1/2"
						required
					/>
				</div>

				<Link
					href="/beteacher/step4"
					className="mx-auto my-10 block w-fit rounded-md bg-primary-700 px-6 py-2 text-lg text-white hover:bg-primary-600"
				>
					Next
				</Link>
			</div>
		</>
	);
};

export default Page;
