import Image from 'next/image';
import bg from '../../../../public/assets/bg.png';
import logo from '../../../../public/assets/Logo.png';
import LoginLayout from '@/components/auth/login/login.layout';

const LoginPage = () => {
  return (
    <div className="w-full min-h-screen relative">
      <Image src={bg} alt="background" className="object-cover w-full min-h-screen" />
      <div className="absolute top-0 w-full flex flex-col px-6 lg:px-14">
        <div className="flex items-center mt-6 gap-x-4 lg:gap-x-6">
          <Image src={logo} alt="logo" className="w-[70px] lg:w-[100px]" />
          <h1 className="text-white/80 text-2xl font-semibold">Login</h1>
        </div>
        <LoginLayout />
      </div>
    </div>
  );
};

export default LoginPage;
