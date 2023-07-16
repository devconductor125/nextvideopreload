'use client';

import React, { useState } from 'react';
import { Avatar, Tooltip, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import ReactCountryFlag from 'react-country-flag';

const SmallAvatar = styled(Avatar)(({ theme }) => ({
	width: 22,
	height: 22,
	border: `2px solid ${theme.palette.background.paper}`,
}));

const Coach = () => (
	<section className="" id="coach">
		<div className="mx-auto max-w-6xl px-4 py-2 lg:py-4">
			<div className="mb-0 grid grid-cols-1 items-start gap-4 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
				{/* Start */}
				<div className="m-auto w-full transform overflow-hidden rounded-lg shadow-lg transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
					<div className="max-h-40 w-full">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						{/* <img
							alt="blog photo"
							src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
							className="max-h-40 w-full object-cover"
						/> */}
						<video src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"></video>
					</div>
					<div className="w-full p-3">
						<div className="flex items-center">
							<Tooltip title="Austria">
								<Badge
									overlap="circular"
									anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
									badgeContent={
										<ReactCountryFlag
											countryCode="at"
											svg
											style={{
												width: '20px',
												height: '20px',
												border: '1px solid white',
												borderRadius: '20px',
												objectFit: 'cover',
												boxShadow: '1px 1px #ccc',
											}}
										/>
									}
								>
									<Avatar
										alt="Travis Howard"
										src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
									/>
								</Badge>
							</Tooltip>
							<div className="ml-3">
								<div className="text-large font-bold">Jean Marc</div>
								<div className="text-sm text-gray-600">CTO of Supercars</div>
							</div>
						</div>
						<div className="my-2 flex justify-between">
							<div className="flex items-center">
								<p className="font-base font-bold">USD &nbsp;</p>
								<p className="price font-base font-bold">30</p>
								<p className="text-sm text-slate-400"> / trial</p>
							</div>
							<div className="flex items-center">
								<Rating value={4} size="small" />
								<p className="text-sm font-bold text-gray-900 dark:text-white">4.95</p>
							</div>
						</div>
						<div className="w-full bg-white">
							<div className="justify-starts flex flex-wrap items-center text-xs font-medium text-white">
								<span className="mr-1 cursor-default rounded bg-primary-500 px-2 py-1">Life style</span>
								<span className="mr-1 cursor-default rounded bg-primary-500 px-2 py-1">English</span>
							</div>
						</div>
						<div className="my-3 w-full">
							<p className="line-clamp-3 text-sm break-words">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam blanditiis quas facere laudantium
								doloribus dignissimos fugit voluptatem odio itaque reiciendis. Id laudantium omnis, sed a distinctio
								assumenda voluptatem minima? Eos.
							</p>
						</div>
						<div className="w-full">
							<button
								type="button"
								className="w-full rounded-lg bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800"
							>
								Book Trial
							</button>
						</div>
					</div>
				</div>
				{/* End */}
				{/* Start */}
				<div className="m-auto my-4 w-full transform overflow-hidden rounded-lg shadow-lg transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
					<div className="max-h-40 w-full">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							alt="blog photo"
							src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
							className="max-h-40 w-full object-cover"
						/>
					</div>
					<div className="mt-2 flex items-center pl-3">
						<Badge
							overlap="circular"
							anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
							badgeContent={
								<ReactCountryFlag
									countryCode="US"
									svg
									style={{
										width: '20px',
										height: '20px',
										border: '1px solid white',
										borderRadius: '20px',
										objectFit: 'cover',
										boxShadow: '1px 1px #ccc',
									}}
								/>
							}
						>
							<Avatar
								alt="Travis Howard"
								src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
							/>
						</Badge>
						<div className="pl-3">
							<div className="text-large font-bold">Jean Marc</div>
							<div className="text-sm text-gray-600">CTO of Supercars</div>
						</div>
					</div>
					<div className="mt-2 flex justify-between px-3">
						<div className="flex">
							<p className="font-base font-bold">USD &nbsp;&nbsp; </p>
							<p className="price font-base pr-2 font-bold">30</p>
						</div>
						<div className="flex items-center">
							<svg
								aria-hidden="true"
								className="h-5 w-5 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Rating star</title>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
						</div>
					</div>

					<div className="w-full bg-white p-2">
						<div className="justify-starts flex flex-wrap items-center text-xs font-medium text-white">
							<span className="m-1 cursor-default rounded bg-primary-500 px-2 py-1">Life style</span>
							<span className="m-1 cursor-default rounded bg-primary-500 px-2 py-1">English</span>
						</div>
					</div>
					<div className="w-full p-3">
						<button
							type="button"
							className="mb-2 mr-2 w-full rounded-lg bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800"
						>
							Book Trial
						</button>
					</div>
				</div>
				{/* End */}
			</div>
		</div>
	</section>
);

export default Coach;
