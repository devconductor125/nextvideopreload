import Image from 'next/image';
import Link from 'next/link';
import { IconCheck } from '@tabler/icons-react';

import { ContentProps } from '~/shared/types';
import HeaderWidget from '../common/HeaderWidget';
import offer1 from '~/assets/images/offers_01.png';
import offer2 from "~/assets/images/offers_04.png";
import offer3 from '~/assets/images/offers_02.png';

const Offer = () => (
  <section className="bg-primary-50 text-center dark:bg-slate-800">
    <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-20">
      <div>
        <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
          content
        </p>
        <h2 className="font-heading mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
          What we offer here on Coach
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="text-center">
          <Image src={offer1} alt="1-on-1 Lesson" />
          <h4 className="my-5 text-3xl font-bold">1-on-1 Lessons</h4>
          <p className='mb-5'>Find coaches from all over the world sharing their skills, knowledge, and cultures</p>
          <Link href="#" className="mt-5 text-xl font-semibold text-primary-950 hover:text-primary-800">
            Find my coach
          </Link>
        </div>
        <div className="text-center">
          <Image src={offer2} alt="1-on-1 Lesson" />
          <h4 className="my-5 text-3xl font-bold">Group Class</h4>
          <p className='mb-5'>Fun and engaging online group classes designed and let by expert coaches.</p>
          <Link href="#" className="mt-5 text-xl font-semibold text-primary-950 hover:text-primary-800">
            View all classes  
          </Link>
        </div>
        <div className="text-center">
          <Image src={offer3} alt="1-on-1 Lesson" />
          <h4 className="my-5 text-3xl font-bold">Chat communication</h4>
          <p className='mb-5'>Conversations and chats between individuals is possible through provided fields.</p>
          <Link href="#" className="mt-5 text-xl font-semibold text-primary-950 hover:text-primary-800">
            Make connection
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Offer;
