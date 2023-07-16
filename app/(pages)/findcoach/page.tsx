import Banner from '~/components/widgets/Banner';
import CoachFilter from '~/components/widgets/CoachFilter';
import CoachBoard from '~/components/widgets/CoachBoard';
import Header from '~/components/widgets/Header';
import Footer from '~/components/widgets/Footer';

export default function FindCoach() {
  const title = 'Start your training now with one of the top coaches.';
  const desc =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus in quaerat et similique non ab neque aliquid cupiditate sequi culpa amet iste debitis fuga tenetur, repellat reiciendis distinctio eos! Fugiat!';
  return (
    <>
      <Header />
      <Banner title={title} desc={desc} />
      <CoachFilter/>
      <CoachBoard />
      <Footer />
    </>
  );
}
