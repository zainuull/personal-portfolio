import { useState } from 'react';
import { BsFillPersonFill, BsKey } from 'react-icons/bs';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const LoginLayout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { push, query } = useRouter();
  const callbackURL: any = query.callbackUrl || '/';

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackURL,
      });

      if (!res?.error) {
        setIsLoading(false);
        push('/');
      } else {
        setIsLoading(false);
        setError('Email or Password is incorrect');
      }
    } catch (error) {
      setIsLoading(false);
      setError('Email or Password is incorrect');
    }
  };
  return (
    <div className="w-full flex justify-center items-center mt-10">
      <div className="shadow-xl p-10 rounded-lg flex flex-col w-full bg-white/10 text-white pb-12 lg:w-1/3 h-[500px]">
        <h1 className="text-center text-3xl font-semibold">Sign In</h1>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <form className="flex flex-col gap-y-6 mt-8 lg:gap-y-10" onSubmit={handleSubmit}>
          <div className="rounded-lg w-full flex items-center gap-x-2 bg-black/30 h-14 px-4 text-sm hover:border-white transition">
            <BsFillPersonFill size={20} className="text-[#E8FF00]" />
            <input
              id="email"
              type="mail"
              className="bg-transparent w-full outline-none"
              placeholder="Email"
            />
          </div>
          <div className="rounded-lg w-full flex items-center gap-x-2 bg-black/30 h-14 px-4 text-sm hover:border-white transition">
            <BsKey size={20} className="text-[#E8FF00]" />
            <input
              id="password"
              type="password"
              className="bg-transparent w-full outline-none"
              placeholder="Password"
            />
          </div>
          <div className="mt-2 w-full flex flex-col gap-y-2">
            <button
              className="bg-[#808658] h-12 rounded-lg hover:bg-[#6C7248] transition cursor-pointer w-full mt-4 lg:mt-0"
              disabled={isLoading}>
              {isLoading ? 'Loading....' : 'Login'}
            </button>
            <p className="text-white mt-4 text-xs cursor-pointer hover:text-gray-200 transition lg:text-sm">
              Don't have an account ?{' '}
              <Link href={'/auth/register'} className="font-semibold">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginLayout;
