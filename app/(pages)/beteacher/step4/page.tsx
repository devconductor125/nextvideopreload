'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { show, setStep } from '~/slices/btStepSlice';
import { useAppDispatch } from '~/store/store';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const Page = () => {
	const dispatch = useAppDispatch();
	const showStepper = React.useCallback(() => {
		dispatch(show());
	}, [dispatch]);
	const setCurStep = React.useCallback(() => {
		dispatch(setStep(3));
	}, [dispatch]);
	useEffect(() => {
		showStepper();
		setCurStep();
	}, [showStepper, setCurStep]);

	return (
		<>
			<div className="mx-auto w-full md:w-8/12 lg:w-6/12">
				<div className="m-4 mt-6 rounded-lg border border-gray-100 px-4 py-6 shadow-lg md:px-16 md:py-10 md:shadow-2xl lg:mt-8">
					<h5 className="text-center text-lg font-semibold text-gray-600">Application Status</h5>
					<p className="text-sm">Application Date: June 19, 2023</p>
					<p className="text-sm">
						Your application is under review and its status will be updated here within 10 business days.
					</p>
					<div className="mx-auto mt-8 flex w-4/5 items-center justify-between rounded-lg bg-orange-300 px-4 py-2 md:w-fit">
						<HourglassBottomIcon color="inherit" />
						<p>Your application is pending at the moment.</p>
					</div>
				</div>

				<Link
					href="/"
					className="mx-auto my-10 block w-fit rounded-md bg-primary-700 px-6 py-2 text-lg text-white hover:bg-primary-600"
				>
					Go Back to Home
				</Link>
			</div>
		</>
	);
};

export default Page;
