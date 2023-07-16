'use client';
import Link from 'next/link';
import { Divider, Checkbox, FormControlLabel, TextField, FormGroup } from '@mui/material';
import React, { useEffect } from 'react';
import TextArea from '~/components/widgets/Textarea';
import { show, setStep } from '~/slices/btStepSlice';
import { useAppDispatch } from '~/store/store';

const Page = () => {
	const dispatch = useAppDispatch();
	const showStepper = React.useCallback(() => {
		dispatch(show());
	}, [dispatch]);
	const setCurStep = React.useCallback(() => {
		dispatch(setStep(1));
	}, [dispatch]);
	useEffect(() => {
		showStepper();
		setCurStep();
	}, [showStepper, setCurStep]);

	const teaching_materials = [
		'PDF file',
		'Audio files',
		'Flashcards',
		'Test templates and examples',
		'Text Documents',
		'Image files',
		'Articles and news',
		'Graph and charts',
		'Presentation slides/PPT',
		'Video files',
		'Quizzes',
		'Homework Assignments',
	];

	return (
		<>
			<div className="mx-auto w-full md:w-8/12 lg:w-6/12">
				<div className="m-4 mt-6 rounded-lg border border-gray-100 px-4 py-6 shadow-lg md:px-16 md:py-10 md:shadow-2xl lg:mt-8">
					<h5 className="text-center text-lg font-semibold text-gray-600">2.1 Video Introduction</h5>
					<ul className="mt-6 list-disc">
						<li>
							<p className="mb-2 text-sm">
								By submitting your video to coaching, you acknowledge that you agee to coaching&apos;s Terms of Service.
								Please be sure not to violate other&apos;s copyright or privacy rights.
							</p>
						</li>
						<li>
							<p className="mb-2 text-sm">File size may not exceed 500MB</p>
						</li>
						<li>
							<p className="mb-2 text-sm">For the best result, the video aspect ratio should be 16:9</p>
						</li>
					</ul>
					<p className="mt-4 text-center text-sm font-bold text-gray-500">
						Mandatory: It&apos;s mandatory for every teacher to upload a video introduction
					</p>
					<Divider className="my-4" />
					<Divider />
					<p className="my-4 text-sm font-bold">Your video has to respect the following characteristics.</p>
					<ul className="list-disc">
						<li className="mb-2 text-sm">It shows me fluently speaking:</li>
						<li className="mb-2 text-sm">It is filmed horizontally</li>
						<li className="mb-2 text-sm">Its time length is approximately 1 to 4 minutes.</li>
						<li className="mb-2 text-sm">
							It has good lighting and clear sound. It does NOT include personal contact information or external
							advertisement.
						</li>
					</ul>
					<FormControlLabel
						control={<Checkbox size="small" />}
						className="my-2 text-sm font-bold"
						sx={{ '& .MuiTypography-root': { fontSize: 14 } }}
						label="I have a webcam and I can offer video-based lessons."
					/>
				</div>
				<div className="m-4 mt-6 rounded-lg border border-gray-100 px-4 py-6 shadow-lg md:px-16 md:py-10 md:shadow-2xl lg:mt-10">
					<h5 className="text-center text-lg font-semibold text-gray-600">2.2 Teacher Introduction</h5>
					<p className="mt-2 text-center text-sm font-bold text-gray-500">
						Note: You can&apos;t add external links or use language that violates our terms of service.
					</p>
					<label htmlFor="about_me" className="mb-2 mt-4 block text-sm font-bold text-gray-600">
						About Me
					</label>
					<textarea
						name="text"
						id="about_me"
						className="w-full rounded-md border border-gray-400 p-3"
						rows={5}
					></textarea>
					<label htmlFor="me_tutor" className="mb-2 mt-4 block text-sm font-bold text-gray-600">
						Me as a Tutor
					</label>
					<textarea
						name="text"
						id="me_tutor"
						className="w-full rounded-md border border-gray-400 p-3"
						rows={5}
					></textarea>
					<label htmlFor="lesson_style" className="mb-2 mt-4 block text-sm font-bold text-gray-600">
						My lessons and teaching style
					</label>
					<textarea
						name="text"
						id="lesson_style"
						className="w-full rounded-md border border-gray-400 p-3"
						rows={5}
					></textarea>

					<div className="my-8">
						<h5 className="text-sm font-bold text-gray-600">My teaching material (Optional)</h5>
						<FormGroup className="my-3 flex-row">
							{teaching_materials.map((item, index) => (
								<div key={index} className="sm:basis-1/2 md:basis-1/3">
									<FormControlLabel
										control={<Checkbox size="small" />}
										label={item}
										sx={{ '& .MuiTypography-root': { fontSize: 14 } }}
									/>
								</div>
							))}
						</FormGroup>
					</div>
				</div>

				<Link
					href="/beteacher/step3"
					className="mx-auto my-10 block w-fit rounded-md bg-primary-700 px-6 py-2 text-lg text-white hover:bg-primary-600"
				>
					Next
				</Link>
			</div>
		</>
	);
};

export default Page;
