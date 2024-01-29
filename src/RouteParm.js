import React, { useState, useEffect } from 'react';
import SideNav from './Components/SideNav';
import { Outlet, useNavigate } from 'react-router-dom';
import TopNav from './Components/TopNav';
import PhoneSideNav from './Components/PhoneSideNav';

export default function RouteParm() {
  const isAuth = true;
  const [openSideNav, setOpenSideNav] = useState(false);
  const navigate = useNavigate();

  const handellOpenSideNav = () => {
    setOpenSideNav(!openSideNav);
  };

  // Use useEffect to handle the redirect when the component mounts
  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth, navigate]);

  // Return null to avoid rendering anything else after the redirect
  

  return (
    <div className='main flex backdrop-blur-sm bg-white/30'>
      <div className='main-container flex backdrop-blur-md bg-white/30 w-full h-screen '>
        <SideNav  />
        {openSideNav && <PhoneSideNav  openSideNav={openSideNav}/>}
        <div className={!openSideNav ? 'main-continer flex flex-col w-90% max-sm:w-full ' : 'w-90%'}>
          <TopNav handellOpenSideNav={handellOpenSideNav} />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
