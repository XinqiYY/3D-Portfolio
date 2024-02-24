import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { resume, xyLogo, linkedIn, menu, close } from '../assets';

const Navbar = () => {
  // this func will track where we are on the page
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center
                    py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={xyLogo} alt='logo' className='w-9 h-9 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Xinqi &nbsp;<span className='sm:block hidden'>| Portfolio</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-8'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`flex item-center ${active === link.title ? "text-white" : "text-secondary"}
                          hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              {/* Add other links */}
              {link.id !== "downloadCV" && link.id !== "linkedin" && (
                <a href={`#${link.id}`} className='mt-2'>{link.title}</a>
              )}

              {link.id === "downloadCV" && 
                <button className="py-2 px-3 text-[18px] font-medium cursor-pointer bg-primary border 
                rounded-md transform transition-transform hover:translate-y-[-3px]">
                  <a href={resume} download="Xinqi_Yang_resume.pdf">{link.title}</a>
                </button>
              }

              {link.id === "linkedin" &&
                <a href='https://www.linkedin.com/in/xinqi-yang/' target="_blank">
                  <img src={linkedIn} alt="LinkedIn" className='mt-2 w-7 h-7 object-contain'/>
                </a>
              }
            </li>
          ))}
        </ul>

        {/* mobile version */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu} 
            alt='menu' 
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient
                          absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"}
                            font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  {/* Add other links */}
                  {link.id !== "downloadCV" && link.id !== "linkedin" && (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}

                  {link.id === "downloadCV" && 
                    <button className="text-[18px] font-medium cursor-pointer
                    rounded-md">
                      <a href={resume} download="Xinqi_Yang_resume.pdf">{link.title}</a>
                    </button>
                  }
                  
                  {link.id === "linkedin" &&
                    <a href='https://www.linkedin.com/in/xinqi-yang/' target="_blank">
                      LinkedIn
                    </a>
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar