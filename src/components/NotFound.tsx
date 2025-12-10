import { Link } from 'react-router-dom';

import notFoundLogo from '../assets/404.svg';
import { ROUTE } from '../routes/route';

export default function NotFound() {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center text-center px-4'>
      <img
        className='w-[70%] max-w-[450px]'
        src={notFoundLogo}
        alt='Not found image'
      />

      <h2 className='text-3xl font-bold text-gray-800 mt-6'>Page Not Found</h2>

      <p className='text-gray-500 max-w-md mt-2'>
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to={ROUTE.HOME}
        className='mt-6 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800'
      >
        Back to Home
      </Link>
    </div>
  );
}
