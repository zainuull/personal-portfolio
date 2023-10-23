import { useState } from 'react';
import { BiMenuAltRight, BiExit } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { RiReactjsLine } from 'react-icons/ri';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import logo from '../../../public/assets/Rectangle 3824.png';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const data: any = useSession();
  const user = data.data?.user;

  const handleNavbar = () => {
    setMenu(!menu);
  };

  return (
    <nav className="w-full flex flex-col items-center relative">
      <div className="w-full h-20 flex items-center justify-between text-white px-4 bg-menuPrimary">
        <div className='flex items-center gap-x-4'>
          <RiReactjsLine className="text-6xl" />
          <Link href={'/'} className="text-3xl font-semibold font-Poppins">
            Budak Program
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-x-12 text-xl font-thin px-24">
          <Link href="/about" className="hover:text-black transition cursor-pointer">
            About
          </Link>
          <Link href="/projects" className="hover:text-black transition cursor-pointer">
            Project
          </Link>
          <Link href="/contact" className="hover:text-black transition cursor-pointer">
            Contact
          </Link>
          {user && (
            <button
              onClick={() => signOut()}
              className="hover:text-black transition cursor-pointer">
              Logout
            </button>
          )}
        </div>
        {/* SmartPhone */}
        <BiMenuAltRight
          onClick={handleNavbar}
          size={35}
          className="hover:shadow-xl transition cursor-pointer lg:hidden z-10"
        />
      </div>

      <div
        className={`${
          menu
            ? 'opacity-100 transition-all duration-700 z-20'
            : 'opacity-0 transition-all duration-700'
        } w-1/2 absolute bg-menuSecondary flex flex-col gap-x-6 items-center gap-y-4 right-0 h-screen text-white lg:hidden`}>
        <AiOutlineClose
          onClick={handleNavbar}
          className="absolute left-5 top-5 text-red-300 font-semibold text-2xl hover:text-red-600 transition cursor-pointer"
        />
        <div className="w-full h-full flex flex-col justify-between items-center">
          <div className="flex flex-col items-center gap-y-20 mt-24 text-xl font-thin">
            <Link href="/about" className="hover:text-black transition cursor-pointer">
              About
            </Link>
            <Link href="/projects" className="hover:text-black transition cursor-pointer">
              Project
            </Link>
            <Link href="/contact" className="hover:text-black transition cursor-pointer">
              Contact
            </Link>
          </div>
          <div
            onClick={() => signOut()}
            className="w-full flex items-center justify-center gap-x-4 bg-menuPrimary h-12 rounded-lg hover:bg-primary cursor-pointer">
            <BiExit size={30} />
            <h1 className="font-semibold">Log Out</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
