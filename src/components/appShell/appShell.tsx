import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../navbar/navbar'));

interface IAppShell {
  children?: React.ReactNode;
}

const enableNavbar = ['/projects', '/contact', '/about', '/'];

const AppShell = ({ children }: IAppShell) => {
  const { pathname } = useRouter();

  return (
    <main>
      {enableNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
