import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Link from 'next/link';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '~/store/store';

import { show, hide, nextStep, prevStep } from '~/slices/btStepSlice';

const steps = ['1', '2', '3', '4'];
const titles = [
  '1. Personal Information',
  '2. Teaching Profile',
  '3. Teacher Terms of Service',
  '4. Application Status',
];

interface StepperProps {
  visiable: boolean;
  curStep: number;
}

const MyStepper: React.FC<StepperProps> = ({ visiable = false, curStep = 0 }) => {

  // const curStep = useSelector((state: RootState) => state.btStep.curStep);
  // const visiable = useSelector((state: RootState) => state.btStep.visiable);

  const dispatch = useDispatch<AppDispatch>();

  const showStepper = () => {
    dispatch(show());
  };
  const hideStepper = React.useCallback(() => {
    dispatch(hide())
  }, [dispatch])
  const nxStep = () => {
    dispatch(nextStep());
  };
  const preStep = () => {
    dispatch(prevStep());
  };

  React.useEffect(() => {
    if(curStep < 0) hideStepper()
  }, [curStep, hideStepper])

  return (
    <div className={visiable ? 'block py-4' : 'hidden'}>
      <div className="mb-2 w-full">
        {curStep == 0 ? null : (
          <Link href={'step' + curStep} className="text-lg bg-slate-200 px-5 py-3 rounded-md ml-3 hover:bg-slate-300" onClick={preStep}>
            Go Back
          </Link>
        )}
        <h5 className="text-center text-xl font-semibold mb-5">{titles[curStep]}</h5>
      </div>
      <Box sx={{ width: '60%', margin: 'auto' }}>
        <Stepper activeStep={curStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
};

export default MyStepper;
