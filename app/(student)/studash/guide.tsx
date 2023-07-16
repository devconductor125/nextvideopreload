import Grid from '@mui/material/Unstable_Grid2';
import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import findCoachImage from '~/assets/images/choose_lesson.svg';
import bookingImage from '~/assets/images/book_lesson.svg';
import journeyImage from '~/assets/images/start_journey.svg';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Guide = () => {
	return (
		<>
			<Box>
				<Container className="py-8 lg:pt-12 lg:pb-4">
					<Typography variant="h4" className="mb-6 font-bold">
						Your Coaching Journey starts now!
					</Typography>
					<Grid container sx={{ flexGrow: 1 }} spacing={2}>
						<Grid xs={12} md={4} className="my-2 p-2" container>
							<Grid xs={3}>
								<Image src={findCoachImage} width={80} height={80} alt="findCoachImage" />
							</Grid>
							<Grid xs={9} className="pl-2 lg:pl-0">
								<Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
									Step 1: Choose your coach
								</Typography>
								<Typography variant="body2" className="font-semibold text-slate-600">
									Watch coach introduction videos and read reviews from the others.
								</Typography>
							</Grid>
						</Grid>
						<Grid xs={12} md={4} className="my-2 p-2" container>
							<Grid xs={3}>
								<Image src={bookingImage} width={80} height={80} alt="findCoachImage" />
							</Grid>
							<Grid xs={9} className="pl-2 lg:pl-0">
								<Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
									Step 2: Book your lesson
								</Typography>
								<Typography variant="body2" className="font-semibold text-slate-600">
									Schedule your lesson for a time and date that suit you.
								</Typography>
							</Grid>
						</Grid>
						<Grid xs={12} md={4} className="my-2 p-2" container>
							<Grid xs={3}>
								<Image src={journeyImage} width={80} height={80} alt="findCoachImage" />
							</Grid>
							<Grid xs={9} className="pl-2 lg:pl-0">
								<Typography variant="subtitle1" sx={{ fontWeight: '600' }}>
									Step 3: Start your journey
								</Typography>
								<Typography variant="body2" className="font-semibold text-slate-600">
									Connect with your teacher via a video call, and start learning!
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Box className="text-center">
						<Button
							startIcon={<KeyboardArrowUpIcon />}
							className="mx-auto rounded-xl mt-4 font-extrabold text-primary-900"
							size="small"
						>
							Got it
						</Button>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Guide;
