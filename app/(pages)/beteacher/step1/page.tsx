'use client';

import Link from 'next/link';
import { FormControl, TextField, InputLabel, Select, MenuItem, SelectChangeEvent, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { nextStep, show, setStep } from '~/slices/btStepSlice';
import { useAppDispatch } from '~/store/store';
import AvatarUpload from '~/components/widgets/AvatarUpload';
import Image from 'next/image';
import styled from '@emotion/styled';

import BlankAvatar from '../../../../src/assets/images/blank_avatar.jpg';

const Step1 = () => {
	const [imService, setImService] = useState('');
	const [startDate, setStartDate] = useState(new Date());
	const [gender, setGender] = useState('');

	const dispatch = useAppDispatch();
	const showStepper = React.useCallback(() => {
		dispatch(show());
	}, [dispatch]);
	const setCurStep = React.useCallback(() => {
		dispatch(setStep(0));
	}, [dispatch]);
	useEffect(() => {
		showStepper();
		setCurStep();
	}, [showStepper, setCurStep]);

	const [uploadedFile, setUploadedFile] = useState<File | null>(null);

	const handleFileUpload = (file: File) => {
		setUploadedFile(file);
	};

	return (
		<>
			<div className="mx-auto w-full md:w-8/12 lg:w-6/12">
				<div className="m-4 mt-6 rounded-lg border border-gray-100 px-4 py-6 shadow-lg md:px-16 md:py-10 md:shadow-2xl lg:mt-8">
					<h5 className="text-center text-lg font-semibold text-gray-600">1.1 Basic Information</h5>
					<TextField id="dName" size="small" label="Display Name" variant="outlined" className="mt-8 w-full" />
					<div className="block md:flex">
						<FormControl className="my-6 w-full md:mr-2 md:w-1/2" size="small">
							<InputLabel id="pic-label">Preferred IM/Chat</InputLabel>
							<Select
								labelId="pic-label"
								id="pic"
								value={imService}
								onChange={(e: SelectChangeEvent) => setImService(e.target.value)}
								defaultValue="skype"
								label="Preferred IM/Chat"
							>
								<MenuItem value="skype">Skype</MenuItem>
								<MenuItem value="zoom">Slack</MenuItem>
							</Select>
						</FormControl>
						<TextField
							id="picId"
							size="small"
							label="User ID or Invitation Link"
							variant="outlined"
							className="mt-0 w-full md:my-6 md:ml-2 md:w-1/2"
						/>
					</div>
				</div>
				<div className="m-4 mt-6 rounded-lg border border-gray-100 px-4 py-6 shadow-lg md:px-16 md:py-10 md:shadow-2xl lg:mt-10">
					<h5 className="text-center text-lg font-semibold text-gray-600">1.2 Private Information</h5>
					<div className="block md:flex">
						<TextField
							id="fName"
							size="small"
							label="First Name"
							variant="outlined"
							className="mt-4 w-full md:mr-2 md:mt-8 md:w-1/2"
							required
						/>
						<TextField
							id="lName"
							size="small"
							label="Last Name"
							variant="outlined"
							className="mt-4 w-full md:ml-2 md:mt-8 md:w-1/2"
							required
						/>
					</div>
					<div className="block md:flex">
						<div className="mt-4 w-full md:mt-8 md:w-1/2">
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker label="Birthday" sx={{ width: '100%' }} slotProps={{ textField: { size: 'small' } }} />
							</LocalizationProvider>
						</div>
						<FormControl className="mt-4 w-full md:ml-4 md:mt-8 md:w-1/2" size="small">
							<InputLabel id="pic-label">Gender</InputLabel>
							<Select
								labelId="pic-label"
								id="pic"
								size="small"
								defaultValue="nogender"
								value={gender}
								onChange={(e: SelectChangeEvent<string>) => setGender(e.target.value)}
								label="Gender"
							>
								<MenuItem value="nogender">Not given</MenuItem>
								<MenuItem value="male">Male</MenuItem>
								<MenuItem value="female">Female</MenuItem>
							</Select>
						</FormControl>
					</div>
					<TextField
						id="address"
						size="small"
						label="Address"
						variant="outlined"
						className="mt-4 w-full md:mt-8"
						required
						error={false}
					/>
				</div>
				<div className="m-4 mt-6 rounded-lg border border-gray-100 px-4 py-6 shadow-lg md:px-16 md:py-10 md:shadow-2xl lg:mt-14">
					<h5 className="text-center text-lg font-semibold text-gray-600">1.3 My Teacher Profile Photo</h5>
					<div className="my-8 block items-center md:flex">
						<div className="w-full md:w-1/2">
							{uploadedFile ? (
								<Image
									src={URL.createObjectURL(uploadedFile)}
									style={{ borderRadius: '50%', margin: 'auto', objectFit: 'cover', height: '150px !important' }}
									alt="Uploaded file"
									width={200}
									height={200}
									className='shadow-lg'
								/>
							) : (
								<Image
									src={BlankAvatar}
									style={{ borderRadius: '50%', margin: 'auto' }}
									alt="Blank Avatar"
									width={200}
									height={200}
									className="shadow-lg"
								/>
							)}
						</div>
						<div className="w-full md:w-1/2">
							<AvatarUpload onFileUpload={handleFileUpload} accept=".jpg,.png,.gif" maxSize={5242880} />
						</div>
					</div>
				</div>
				<Link
					href="/beteacher/step2"
					className="mx-auto my-10 block w-fit rounded-md bg-primary-700 px-6 py-2 text-lg text-white hover:bg-primary-600"
					onClick={() => dispatch(nextStep())}
				>
					Next
				</Link>
			</div>
		</>
	);
};

export default Step1;
