'use client';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react'; // Removed scrollY from imports

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [theme, setTheme] = useState('light');
  const sideMenuRef = useRef();

  const applyTheme = (nextTheme) => {
    setTheme(nextTheme);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    }
    try {
      localStorage.setItem('theme', nextTheme);
    } catch {
      // ignore
    }
  };

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(0)';
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') {
        setTheme(saved);
      } else if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        setTheme('dark');
      }
    } catch {
      // ignore
    }
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Use window.scrollY instead of scrollY
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme/60'
            : ''
        }`}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            alt="Wadud Shuvro - brand logo"
            className="w-28 cursor-pointer mr-14 dark:hidden"
          />
          <Image
            src={assets.logo_dark2}
            alt="Wadud Shuvro - brand logo dark"
            className="w-28 cursor-pointer mr-14 hidden dark:block"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? '' : 'bg-white shadow-sm bg-opacity-50 dark:bg-darkTheme/60'
          }`}
        >
          <li>
            <a
              href="#top"
              className="hover:text-blue-500 transition duration-300 dark:hover:text-purple-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-500 transition duration-300 dark:hover:text-purple-200"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-blue-500 transition duration-300 dark:hover:text-purple-200"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="hover:text-blue-500 transition duration-300 dark:hover:text-purple-200"
            >
              My Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-500 transition duration-300 dark:hover:text-purple-200"
            >
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => applyTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-1 rounded-full hover:bg-lightHover dark:hover:bg-darkHover transition"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <Image
              src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 dark:border-white/50 rounded-full ml-4 font-Ovo"
          >
            Contact
            <Image
              src={theme === 'dark' ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="w-3"
            />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={theme === 'dark' ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        {/*--------Mobile menu----------*/}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-darkTheme transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={theme === 'dark' ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
