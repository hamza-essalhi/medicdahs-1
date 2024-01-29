import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoChatbox, IoNotifications } from 'react-icons/io5';
import userImg from '../images/pexels-karolina-grabowska-5207087.jpg';
import { MdOutlineMenu } from 'react-icons/md';

// Function to format the date
const formatDate = (date) => {
  const options = { day: 'numeric', month: 'short' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  return formattedDate;
};

// Function to format the time
const formatTime = (date) => {
  const options = { hour: '2-digit', minute: '2-digit', hour12: true };
  const formattedTime = new Intl.DateTimeFormat('en-US', options).format(date);
  return formattedTime;
};

/**
 * TopNav component for the top navigation bar.
 * @param {function} handellOpenSideNav - Function to handle the opening of the side navigation.
 */
export default function TopNav({ handellOpenSideNav }) {
  const [openSideNav, setOpenSideNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function to handle opening/closing of the side navigation
  const handleOpenSideNav = () => {
    setOpenSideNav(!openSideNav);
    handellOpenSideNav(openSideNav);
  };

  // Update the current date and time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Format the date and time
  const formattedDate = formatDate(currentDate);
  const formattedTime = formatTime(currentDate);

  return (
    <nav className={openSearch ? 'top-nav flex items-center m-5 p-4 flex-col' : 'top-nav flex items-center m-5 p-4'}>
      <div className="flex items-center w-full ">
        <MdOutlineMenu className='menu-visible-icon' onClick={handleOpenSideNav} />
        <div className="nav-container flex items-center justify-between w-full">

          <form action="" className='flex justify-center items-center w-4/12 sm:w-2/3 md:w-4/3 max-sm:order-2 '>
            <input className='w-full max-sm:hidden' type="search" placeholder='Search ...' />
            <button className='flex justify-center items-center search-btn max-sm:hidden' type='button'>
              <FaSearch className='input-icon' />
            </button>
            <button className='w-8 h-8 text-xl hidden justify-center items-center search-btn max-sm:flex' type='button' onClick={() => setOpenSearch(!openSearch)}>
              <FaSearch className='input-icon ' />
            </button>

          </form>

          <div className='right-top-nav w-36 flex items-center justify-between md:justify-end sm:justify-end max-sm:order-3'>
            <div className='md:mr-4 w-8 h-8 text-xl '>
              <IoNotifications className='right-top-nav-icon ' />

            </div>
            <div className='md:mr-4 w-8 h-8 text-xl'>

              <IoChatbox className='right-top-nav-icon' />
            </div>
            <img src={userImg} alt="" className='w-8 h-8' />
          </div>
        </div>
        
      </div>
      <input className={openSearch ? ' fixedSearech hiddenSearch ' : "hidden"} type="search" placeholder='Search ...' />
    </nav>
  );
}
