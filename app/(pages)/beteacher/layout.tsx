'use client';

import React, { ReactNode } from 'react';
import Header2 from '~/components/widgets/Header2';
import MyStepper from './MyStepper';
import Footer from '~/components/widgets/Footer';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '~/store/store';

interface BeTeacherLayoutProps {
  children: ReactNode;
}

const BeTeacherLayout = ({ children }: BeTeacherLayoutProps) => {
  const curStep = useSelector((state: RootState) => state.btStep.curStep);
  const visiable = useSelector((state: RootState) => state.btStep.visiable);

  // const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <Header2 />
      <MyStepper visiable={visiable} curStep={curStep} />
      {children}
      <Footer />
    </>
  );
};

export default BeTeacherLayout;
