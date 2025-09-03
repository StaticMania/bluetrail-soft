'use client';

import logo from '@/public/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 600);
    });
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 400) {
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, []);

  return (
    <header>
      <nav
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 max-w-[1290px] w-full mx-auto rounded-full bg-white/10 px-[15px] py-3.5 backdrop-blur-[15px] transition duration-300 ease-linear will-change-transform  ${isScrolled ? '!bg-black/50' : 'bg-white/10'}  ${isVisible ? 'translate-y-0' : '-translate-y-[100px]'}`}>
        <div className=" flex items-center justify-between">
          <figure className="size-12">
            <Image src={logo} alt="logo" />
          </figure>
          <div>
            <ul className="flex items-center gap-8">
              <li className="text-white/50 hover:text-white font-ibmPlexMono text-sm font-normal leading-[21.7px] transition-colors duration-300">
                <Link href="#">Services</Link>
              </li>
              <li className="text-white/50 hover:text-white font-ibmPlexMono text-sm font-normal leading-[21.7px] transition-colors duration-300">
                <Link href="#">Case Studies</Link>
              </li>
              <li className="text-white/50 hover:text-white font-ibmPlexMono text-sm font-normal leading-[21.7px] transition-colors duration-300">
                <Link href="#">About</Link>
              </li>
              <li className="text-white/50 hover:text-white font-ibmPlexMono text-sm font-normal leading-[21.7px] transition-colors duration-300">
                <Link href="#">Careers</Link>
              </li>
              <li className="text-white/50 hover:text-white font-ibmPlexMono text-sm font-normal leading-[21.7px] transition-colors duration-300">
                <Link href="#">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link href="/" className="btn-nav">
              <span>Learn more</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
