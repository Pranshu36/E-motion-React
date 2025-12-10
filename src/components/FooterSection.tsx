import { Fragment } from 'react/jsx-runtime';
import { Link } from 'react-router-dom';

import logo from '../assets/dark-t.png';
import { FOOTER_ICONS, NAVLINKS } from '../constants/navlink';
import { useTheme } from '../context/ThemeProvider';

export default function FooterSection() {
  const { isDark } = useTheme();
  return (
    <footer
      className={`shadow-t-3xl ${
        isDark ? 'text-white' : 'text-black'
      } pt-12 mt-10`}
    >
      <div className='container mx-auto px-6 md:px-12 lg:px-10'>
        <div className='flex flex-wrap justify-center md:justify-between items-center'>
          <div className='w-full md:w-[25vw] mb-8 md:mb-0 text-center md:text-left'>
            <h2 className='text-xl font-bold font-montserrat'>You can help</h2>
            <h2
              className={`text-xl font-bold ${
                isDark ? 'text-green-600' : 'text-[#739e7b]'
              } font-montserrat`}
            >
              Shape the Future
            </h2>
            <p className='mt-4 text-gray-400 font-montserrat'>
              Join our mission to manage e-waste responsibly. Together, we can
              make a difference.
            </p>
          </div>
          <div className='w-full md:w-1/3 flex justify-center md:justify-center mb-8 md:mb-0'>
            <img src={logo} alt='logo' className='w-40 h-10' />
          </div>
          <div className=' flex-col md:items-end'>
            <div className='w-fit flex flex-col gap-7'>
              <div className=''>
                <ul className='flex justify-center space-x-2'>
                  {NAVLINKS.map((navlink, index) => {
                    return (
                      <Fragment key={`${navlink.label}${index}`}>
                        <li>
                          <Link
                            to={navlink.path}
                            className='font-semibold font-montserrat hover:text-green-600 transition-colors'
                          >
                            {navlink.label}
                          </Link>
                        </li>
                        {index !== NAVLINKS.length - 1 && <li>|</li>}
                      </Fragment>
                    );
                  })}
                </ul>
              </div>
              <div className=''>
                <form className=''>
                  <input
                    type='email'
                    placeholder='Subscribe to our newsletter'
                    className={`px-4 py-2 rounded-l-lg bg-transparent ${isDark ? 'text-white' : 'text-black'} border border-gray-700 focus:outline-none`}
                  />
                  <button
                    type='submit'
                    className={`px-4 py-2 ${
                      isDark ? 'bg-green-700' : 'bg-[#739e7b]'
                    } border border-gray-700 text-white rounded-r-lg hover:bg-green-600 focus:outline-none`}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              <div className='flex justify-center space-x-9'>
                {FOOTER_ICONS.map((item, index) => {
                  return (
                    <Link
                      key={`${item.link}${index}`}
                      to={item.link}
                      target='_blank'
                      className='hover:scale-105 transition-transform'
                    >
                      {<item.icon className='w-6 h-6' />}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center border-t border-gray-700 mt-8 py-6'>
          <div className='w-full text-center'>
            <p className='font-montserrat text-xl font-semibold'>
              Created by{' '}
              <span
                className={`${
                  isDark ? 'text-green-600' : 'text-[#739e7b]'
                } font-bold text-xl`}
              >
                E-Motion
              </span>{' '}
              team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
