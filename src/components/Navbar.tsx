// Will need the commented code in future once authentication api is done
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../assets/dark-t.png';
import { DarkModeIcon } from '../assets/Icons/DarkModeIcon';
import LightModeIcon from '../assets/Icons/LightModeIcon';
import { THEME_MODE } from '../constants/app.constant';
import { NAVLINKS } from '../constants/navlink';
import { useTheme } from '../context/ThemeProvider';
import { useAuth } from '../features/auth/context/AuthProvider';

export default function Navbar() {
  const [dropdownlogo, setDropdownlogo] = useState(false);
  const [dropdownnotify, setDropdownnotify] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { isDark, updateTheme } = useTheme();

  const togglemode = () => {
    updateTheme(isDark ? THEME_MODE.LIGHT : THEME_MODE.DARK);
  };

  return (
    <div
      className={`flex justify-between shadow-3xl ${
        isDark ? 'bg-[#222222]' : 'bg-[#FAF9F6]'
      } items-center h-[15vh] px-10 font-montserrat`}
    >
      <div
        onClick={() => {
          navigate('/');
        }}
        className='flex cursor-pointer'
      >
        <img src={logo} alt='logo' className='h-9 w-40' />
      </div>
      <div
        className={`${
          isDark ? 'text-white' : 'text-black'
        } flex relative justify-between items-center md:gap-10 gap-5`}
      >
        <nav className='md:flex hidden'>
          <ul className='hidden md:flex gap-10 justify-center items-center '>
            {NAVLINKS.map((navlink, index) => {
              return (
                <li
                  key={`${navlink.label}${index}`}
                  className='font-semibold font-montserrat hover:text-[#01796f] cursor-pointer'
                >
                  <button className='cursor-pointer'>{navlink.label}</button>
                </li>
              );
            })}
          </ul>
        </nav>
        <button onClick={togglemode} className='cursor-pointer'>
          {isDark ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
        <button className='md:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={`size-6 ${isDark ? 'text-white' : 'text-black'}`}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </button>
      </div>
      <div className='hidden md:flex justify-between gap-5 items-center'>
        <div className='text-[#739e7b] font-montserrat flex flex-row font-bold gap-1 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-5'
          >
            <path
              fillRule='evenodd'
              d='m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
              clipRule='evenodd'
            />
          </svg>

          <h1 className='text-lg'>{'Location'}</h1>
        </div>
        {isAuthenticated ? (
          <div className='relative'>
            <button
              onClick={() => {
                setDropdownlogo(!dropdownlogo);
              }}
              className={`shadow-3xl rounded-full`}
            >
              {/* Will need this code in future */}
              {/* <img
                className='w-11 h-11 rounded-full'
                src={profile?.image ? profile?.image : defaultimage}
                onError={(e) => {
                  e.target.src = defaultimage;
                }}
                alt=''
              /> */}
            </button>
            {dropdownlogo && (
              <div
                className={`absolute right-0 mt-2 w-48 z-10 rounded-md shadow-lg ${
                  isDark ? 'bg-[#333]' : 'bg-white'
                }`}
              >
                <Link
                  to='/orderhistory'
                  onClick={() => {
                    setDropdownlogo(false);
                  }}
                  className={`block px-4 py-2 text-sm ${
                    isDark ? 'text-white' : 'text-black'
                  } hover:bg-[#01796f]`}
                >
                  <span className='w-2'>Order history</span>
                </Link>
                <Link
                  to='/profile'
                  onClick={() => {
                    setDropdownlogo(false);
                  }}
                  className={`block px-4 py-2 text-sm ${
                    isDark ? 'text-white' : 'text-black'
                  } hover:bg-[#01796f]`}
                >
                  <span className='w-2'>Profile</span>
                </Link>
                <button
                  // onClick={handlelogout}
                  className={`w-full text-left block px-4 py-2 text-sm ${
                    isDark ? 'text-white' : 'text-black'
                  } hover:bg-[#01796f]`}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to='/login'
            className={`${
              isDark ? 'text-white' : 'text-black'
            } font-medium  border-solid ${
              isDark ? 'border-white' : 'border-black'
            }  border-[1.5px] rounded-md px-4 py-2 hover:bg-[#01796f] transition-transform`}
          >
            Login
          </Link>
        )}
        {isAuthenticated && (
          <div className='relative'>
            <button
              onClick={() => {
                setDropdownnotify(!dropdownnotify);
              }}
              className={`bg-transparent rounded-full flex items-center`}
            >
              <span
              // className={`absolute ${
              //   // !dot ? 'hidden' : ''
              // } bg-red-600 w-[0.35rem] h-[0.35rem] rounded-full top-0 right-0`}
              ></span>
              <svg
                className={`${isDark ? 'fill-white' : 'fill-black'}`}
                xmlns='http://www.w3.org/2000/svg'
                enableBackground='new 0 0 24 24'
                height='24'
                viewBox='0 0 24 24'
                width='24'
                focusable='false'
              >
                <path d='M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z'></path>
              </svg>
            </button>
            {/* {dropdownnotify && <Notification />} */}
          </div>
        )}
      </div>
    </div>
  );
}
