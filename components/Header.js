import { useState } from 'react';
import Logo from './Logo';
import headerNavLinks from '@/data/headerNavLinks';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  const [navShow, setNavShow] = useState(false);
  const styles = {
    navClass:
      'flex-col md:flex md:flex-row items-center justify-center flex-grow px-5 md:pb-0 '
  };
  const onToggleNav = () => {
    setNavShow((open) => {
      return (open = !open);
    });
  };

  return (
    <div className="w-full text-yellow-400 backdrop-filter backdrop-blur-3xl">
      <div className="flex flex-col w-full px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-32">
        <div className="flex flex-row items-center justify-between p-4">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <button
            className="md:hidden focus:outline-none"
            onClick={onToggleNav}
            aria-label="hidden"
          >
            <svg fill="#ffffff" viewBox="0 0 20 20" className="w-12 h-12">
              {navShow ? (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>

        <nav className={`${styles.navClass} ${!navShow ? 'flex' : 'hidden'}`}>
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <a className="px-4 py-2 mt-2 font-semibold text-yellow-400 uppercase transition duration-500 ease-in-out transform bg-transparent rounded-lg text-md md:mt-0 md:ml-auto hover:text-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ">
                {link.title}
              </a>
            </Link>
          ))}
        </nav>
        <ThemeSwitch />
      </div>
    </div>
  );
}
