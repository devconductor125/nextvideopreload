'use client';

import React, { useEffect } from 'react';
import BeTeacherLayout from './layout';
import NextLogo from '~/assets/images/nextjs-logo.png';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { show, hide, nextStep, prevStep } from '~/slices/btStepSlice';

const BeTeacher = () => {
	const dispatch = useDispatch();

	const hideStepper = React.useCallback(() => {
		dispatch(hide());
	}, [dispatch]);
	useEffect(() => {
		hideStepper();
	}, [hideStepper]);
	const startApplicatoin = () => {
		dispatch(show());
	};

	return (
		<>
			<div className="title-box mx-auto  w-11/12 text-center md:w-6/12">
				<h2 className="mb-5 mt-10 text-4xl font-bold text-primary-800">Before Starting</h2>
				<p className="my-4 text-base">
					Check the following information. We recommend that you read everything in detail. <br /> Once you have gone
					through them in detail, you can start your application.
				</p>
			</div>
			<div className="mx-auto mt-12 w-11/12 md:w-3/5">
				<h2 className="mt-8 text-2xl font-semibold text-primary-700">Terms 1</h2>
				<p className="mt-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat dignissimos nobis possimus consectetur
					voluptatum earum dolore numquam, odit repellendus error, laudantium ullam placeat, voluptatem dolor dolores
					quis? Blanditiis, quia? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nihil, cumque ab,
					veniam necessitatibus numquam, consectetur reprehenderit accusantium adipisci quas fugiat perspiciatis
					asperiores nemo minus eaque fugit qui? Officiis, vitae?
				</p>
				<h2 className="mt-8 text-2xl font-semibold text-primary-700">Terms 2</h2>
				<p className="mt-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat dignissimos nobis possimus consectetur
					voluptatum earum dolore numquam, odit repellendus error, laudantium ullam placeat, voluptatem dolor dolores
					quis? Blanditiis, quia? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nihil, cumque ab,
					veniam necessitatibus numquam, consectetur reprehenderit accusantium adipisci quas fugiat perspiciatis
					asperiores nemo minus eaque fugit qui? Officiis, vitae?
				</p>
				<h2 className="mt-8 text-2xl font-semibold text-primary-700">Terms 3</h2>
				<p className="mt-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat dignissimos nobis possimus consectetur
					voluptatum earum dolore numquam, odit repellendus error, laudantium ullam placeat, voluptatem dolor dolores
					quis? Blanditiis, quia? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nihil, cumque ab,
					veniam necessitatibus numquam, consectetur reprehenderit accusantium adipisci quas fugiat perspiciatis
					asperiores nemo minus eaque fugit qui? Officiis, vitae?
				</p>
			</div>
			<div className="w-full">
				<Link
					href={'/beteacher/step1'}
					className="mx-auto my-10 block w-fit rounded-md bg-primary-700 px-6 py-2 text-lg text-white hover:bg-primary-600"
					onClick={startApplicatoin}
				>
					Start Application
				</Link>
			</div>
		</>
	);
};

BeTeacher.layout = BeTeacherLayout;

export default BeTeacher;
