import * as React from 'react'
import Image from 'next/image';
import LogoImg from '~/assets/images/logo.png';

interface LogoProps {
	width: number;
	height: number;
	className: string;
}

const Logo:React.FC<LogoProps> = ({width, height, className}) => (
	// <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
	//   Coach
	// </span>
	<>
		<Image src={LogoImg} className={className} alt='Coach' width={width} height={height}/>
	</>
);

export default Logo;
