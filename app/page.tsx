import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero2';
import Coach from '~/components/widgets/Coach';
import Offer from '~/components/widgets/Offer';
import Testimonial from '~/components/widgets/Testimonial';
import FAQs2 from '~/components/widgets/FAQs3';
import CallToAction2 from '~/components/widgets/CallToAction2';
import { callToActionData, faqsData2, featuresData, heroData } from '~/shared/data';

import Header from '~/components/widgets/Header';
import Footer from '~/components/widgets/Footer';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Header />
      <Hero data={heroData} />
      <Coach {...featuresData} />
      <Offer />
      <Testimonial />
      <FAQs2 {...faqsData2} />
      <CallToAction2 {...callToActionData} />
      <Footer />
    </>
  );
}
