import Banner from '@/components/banner/banner';
import Navbar from '@/components/navbar/navbar';

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-primary">
      <div className="w-full flex flex-col">
        <Navbar />
        <Banner/>
      </div>
    </div>
  );
};

export default AboutPage;
