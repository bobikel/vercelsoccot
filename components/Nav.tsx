"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
const Nav = () => {

  const [active, setActive] = useState(false);
  const [stickyClass, setStickyClass] = useState('relative');
  const [stickyClassIcon, setStickyClassIcon] = useState('text-white');
  const [windowHeightH, setWindowHeightH] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    setWindowHeightH(window.scrollY)
    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);


  const handleClick = () => {
    setActive(!active);
  };
  const stickNavbar = () => {
    if (window !== undefined) {

      let windowHeight = window.scrollY;
      if (windowHeight > 90) {
        setStickyClass('fixed top-0 left-0 z-20 shadow-lg w-full text-[#262f5a] py-3')
        setStickyClassIcon('text-primary')
      } else {
        setStickyClass('relative text-white');
        setStickyClassIcon('text-white')
      }

      setWindowHeightH(windowHeight)
    }
  };

  return (
    <nav className={`flex justify-center px-6 lg:px-16 md:px-10 z-50 bg-[#066A52] min-h-[70px]  items-center ${stickyClass}`}>


      {/* Desktop Navigation */}
      <div className=" justify-between items-center md:flex hidden text-white ">
        <ul className="nav  navbar  flex text-[15px] font-[400px] uppercase">
          <li className="px-[15px] py-[35] " ><Link href="/">Acceuil</Link></li>
          <li className="px-[15px] py-[35] "><Link href="/#about" >À propos</Link>

          </li>
          <li className="px-[15px] py-[35] "><Link href="/#calender">Calendrier</Link>

          </li>
          <li className="px-[15px] py-[35]"><Link href="/#participant">Participant</Link></li>
          <li className="px-[15px] py-[35]"><Link href="/galerie">Galerie</Link></li>

          <li className="px-[15px] py-[35]"><Link href="/#contact">Contact</Link></li>
        </ul>
      </div>


      {/* Mobile Navigation */}
      <div className='md:hidden flex relative'>
        <button
          className={`inline-flex p-3 hover:bg-primary rounded lg:hidden ml-auto hover:text-white outline-none ${stickyClassIcon}`}
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div className='flex'>


          {active && (
            <div className='dropdown text-primary'>
              <ul className="grid gap-3 text-[15px] font-semibold ">
                <li className="px-[15px] py-[35] " ><Link href="/">Acceuil</Link></li>
                <li className="px-[15px] py-[35] "><Link href="/#about" >À propos</Link>

                </li>
                <li className="px-[15px] py-[35] "><Link href="/#calender">Calendrier</Link>

                </li>
                <li className="px-[15px] py-[35]"><Link href="/#participant">Participant</Link></li>
                <li className="px-[15px] py-[35]"><Link href="/galerie">Galerie</Link></li>

                <li className="px-[15px] py-[35]"><Link href="/#contact">Contact</Link></li>
              </ul>
            </div>
          )}
        </div>

      </div>

    </nav>
  );
};

export default Nav;
