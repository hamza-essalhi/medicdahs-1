import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Imported Icons
import { BiLogOut, BiSolidDashboard } from "react-icons/bi";
import { FaCalendarAlt, FaHospitalUser, FaMoneyBill, FaUser, FaUserNurse } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";


export default function PhoneSideNav({openSideNav}) {
  const [activeLink, setActiveLink] = useState('/');

  /**
   * Handles the click event on a navigation link.
   * @param {string} to - The target URL for the navigation link.
   */
  const handleNavLinkClick = (to) => {
    setActiveLink(to);
  };

  return (
    <nav className={`side-nav ${openSideNav ? 'side-nav-active' : ''} flex flex-col items-center m-5 p-2`}>
        <span className='text-3xl text-white font-extrabold bg-blue-700 p-2 rounded-lg mb-12 logo'>MD</span>
        <NavLink
          className={`side-nav-icon ${activeLink === '/' ? 'active-link' : ''}`}
          to={'/'}
          onClick={() => handleNavLinkClick('/')}
        >
          <BiSolidDashboard />
        </NavLink>
        <NavLink
          className={`side-nav-icon ${activeLink === '/nurse' ? 'active-link' : ''}`}
          to={'/nurse'}
          onClick={() => handleNavLinkClick('/nurse')}
        >
          <FaUserNurse />
        </NavLink>
        <NavLink
          className={`side-nav-icon ${activeLink === '/profile' ? 'active-link' : ''}`}
          to={'/profile'}
          onClick={() => handleNavLinkClick('/profile')}
        >
          <FaUser />
        </NavLink>
        <NavLink
          className={`side-nav-icon ${activeLink === '/patient' ? 'active-link' : ''}`}
          to={'/patient'}
          onClick={() => handleNavLinkClick('/patient')}
        >
          <FaHospitalUser />
        </NavLink>
        <NavLink
          className={`side-nav-icon ${activeLink === '/consultations' ? 'active-link' : ''}`}
          to={'/consultations'}
          onClick={() => handleNavLinkClick('/consultations')}
        >
          <FaUserDoctor />
        </NavLink>
        <NavLink
          className={`side-nav-icon ${activeLink === '/document' ? 'active-link' : ''}`}
          to={'/document'}
          onClick={() => handleNavLinkClick('/document')}
        >
          <IoDocumentText />
        </NavLink>
        <NavLink
          className={`side-nav-icon ${activeLink === '/appointments' ? 'active-link' : ''}`}
          to={'/appointments'}
          onClick={() => handleNavLinkClick('/appointments')}
        >
          <FaCalendarAlt />
        </NavLink>
        <NavLink
          className={`side-nav-icon ${activeLink === '/money' ? 'active-link' : ''}`}
          to={'/money'}
          onClick={() => handleNavLinkClick('/money')}
        >
          <FaMoneyBill />
        </NavLink>
        <NavLink
          className={`side-nav-icon ${activeLink === '/logout' ? 'active-link' : ''}`}
          to={'/logout'}
          onClick={() => handleNavLinkClick('/logout')}
        >
          <BiLogOut />
        </NavLink>
      </nav>
  );
}
