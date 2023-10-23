import Zainul from '../../../public/assets/zainul.png';
import Bloop from '../../../public/assets/yellow-bg.png';
import Image from 'next/image';
import { BiLogoLinkedin } from 'react-icons/bi';
import { GrProjects } from 'react-icons/gr';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="w-full flex flex-col h-full gap-y-2 mt-12 px-4 lg:flex-row items-center lg:px-24 lg:h-full overflow-hidden">
      <div className="flex flex-col gap-y-4 text-white lg:w-1/2">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-Poppins lg:text-4xl lg:leading-relaxed">
            Hello All, I'm <br />{' '}
            <span className="font-semibold text-5xl text-secondary lg:text-7xl">Thoba Zainul</span>
          </h1>
          <h2 className="font-light lg:text-2xl">
            Teacher & <span className="font-semibold">Web Developer</span>
          </h2>
        </div>
        <p className="w-4/5 font-thin text-sm leading-relaxed lg:w-4/5 lg:text-base lg:leading-loose">
          I am an active student at an Information Technology University. I really like learning,
          that's why i am interested in the world of Technology, especially in application
          development, because in that case i will learn new things
        </p>
        <div className="flex items-center gap-x-6 mt-2 lg:mt-6 lg:gap-x-8">
          <button className="px-6 py-2 bg-secondary rounded-lg text-black hover:shadow-xl flex items-center gap-x-2 lg:px-8 lg:py-4 lg:hover:shadow-2xl">
            <GrProjects />
            <Link href={'/projects'}> Projects</Link>
          </button>
          <button className="px-6 py-2 border border-secondary rounded-lg hover:shadow-xl flex items-center gap-x-2 lg:px-8 lg:py-4 lg:hover:shadow-2xl">
            <BiLogoLinkedin />
            <Link href={'https://www.linkedin.com/in/thobazb/'} target='_blank'>LinkedIn</Link>
          </button>
        </div>
      </div>
      {/* Image Laptop*/}
      <div className="hidden lg:flex flex-col items-center relative mt-8 lg:mt-0 lg:w-1/2">
        <Image src={Zainul} alt="Zainul" width={607} className="z-[3] mr-10 " />
        <div className="absolute -top-[10px] right-20 w-full">
          <svg width={700} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FFC637"
              d="M33.9,-59.8C45.7,-51.8,58.5,-46.5,69.7,-37C80.9,-27.5,90.4,-13.7,87.5,-1.7C84.7,10.4,69.4,20.8,60.4,34.1C51.4,47.4,48.7,63.5,39.7,66.4C30.7,69.3,15.3,58.9,3,53.6C-9.3,48.4,-18.5,48.3,-29.4,46.4C-40.2,44.6,-52.6,41.1,-55.5,33C-58.5,25,-52,12.5,-47.3,2.7C-42.7,-7.2,-39.9,-14.3,-40.6,-28.6C-41.2,-42.8,-45.3,-64.1,-39.1,-75.4C-32.9,-86.7,-16.4,-88,-2.7,-83.2C11,-78.5,22,-67.8,33.9,-59.8Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>

      {/* Image HandPhone*/}
      <div className="flex flex-col items-center relative mt-8 lg:mt-0 lg:w-1/2 lg:hidden">
        <Image src={Zainul} alt="Zainul" width={300} className="z-[3] mr-10 " />
        <div className="absolute top-10 left-3">
          <Image src={Bloop} alt="Zainul" width={320} className="rotate-180" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
