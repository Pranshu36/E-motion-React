import { Link } from 'react-router-dom';

import poster from '../../../assets/homePoster.gif';
import posterlight from '../../../assets/homePosterlight.gif';
import map from '../../../assets/map.gif';
import { useTheme } from '../../../context/ThemeProvider';

export default function Poster() {
  const { isDark } = useTheme();

  return (
    <div>
      <div className='relative my-7 mx-10 flex '>
        <div className='hidden absolute opacity-20 top-0 md:flex w-full max-h-[75vh] '>
          <img
            src={map}
            alt=''
            className='max-h-[100vh] w-full object-cover rounded-xl'
          />
        </div>
        <div
          className={`shadow-3xl ${
            isDark ? 'bg-[#222222]' : 'bg-[#FAF9F6]'
          } md:z-10 rounded-xl p-5 flex flex-col w-[100vw] h-fit mt-[5vh] md:ml-5 gap-10`}
        >
          <div className='flex flex-col gap-2'>
            <h1
              className={`${
                isDark ? 'text-white' : 'text-black'
              } font-montserrat  font-bold text-3xl`}
            >
              Welcome To E-Motion
            </h1>
            <p className='text-slate-400 font-montserrat font-medium text-lg'>
              In an effort to combat the growing issue of electronic waste
              (e-waste), our project is dedicated to responsible recycling and
              disposal. We provide convenient drop-off locations for old
              electronics, ensuring they are recycled or refurbished, reducing
              environmental impact and promoting a sustainable future.
            </p>
          </div>
          <div className='flex flex-row gap-5'>
            <Link
              to='/explore'
              className={`${
                isDark ? 'text-white' : 'text-black'
              } font-montserrat font-semibold p-4 shadow-3xl rounded-lg hover:bg-[#01796f] hover:scale-105 transition-transform`}
            >
              Start Recycling
            </Link>
            <Link
              to='/nearby'
              className={`${
                isDark ? 'text-white' : 'text-black'
              } font-montserrat font-semibold p-4 shadow-3xl rounded-lg hover:bg-[#01796f] hover:scale-105 transition-transform`}
            >
              Locate Facility
            </Link>
          </div>
        </div>
        <div className='flex md:w-full justify-center'>
          <img
            className='h-[75vh] bg-cover bg-center hidden md:block'
            src={isDark ? poster : posterlight}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}
