import { Outlet } from 'react-router-dom';

import darkposter from '../../../assets/postergif.gif';
import lightposter from '../../../assets/posterlightgif.gif';
import { useTheme } from '../../../context/ThemeProvider';

export default function AuthLayout() {
  const { isDark } = useTheme();
  return (
    <div className='flex gap-10 justify-center my-2 px-[10vw] items-center'>
      <img
        className='hidden md:flex h-full max-h-[500px] w-[80%] max-w-[400px] object-cover'
        src={isDark ? darkposter : lightposter}
        alt='e-waste responsibility poster'
      />
      <Outlet />
    </div>
  );
}
