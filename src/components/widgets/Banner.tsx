import React from 'react';

interface Props {
  title: string;
  desc: string;
}

const Banner: React.FC<Props> = ({ title, desc }) => {
  return (
    <>
      <h2 className="my-10 mx-5 md:mr-5 md:mx-10 text-4xl font-bold">{title}</h2>
      <p className="w-full m-2 font-semibold md:w-3/5 md:m-10">{desc}</p>
    </>
  );
};

export default Banner;
