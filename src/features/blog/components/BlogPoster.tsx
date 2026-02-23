import poster from '../../../assets/blog/poster.jpg';
import { useTheme } from '../../../context/ThemeProvider';

export default function BlogPoster() {
  const { isDark } = useTheme();
  return (
    <div>
      <div className='relative my-7 mx-10 flex h-[75vh] shadow-3xl rounded-xl'>
        <div
          className={`absolute ${isDark ? 'opacity-20' : 'opacity-30'} top-0 w-full flex h-full`}
        >
          <img
            src={poster}
            alt='background blog poster'
            className='h-full w-full object-cover rounded-xl'
          />
        </div>
        <div className='opacity-100 absolute h-full flex w-full justify-center items-center'>
          <h1
            className={`${isDark ? 'text-white' : 'text-black'} text-6xl md:text-8xl lg:text-9xl w-[50vw] text-center font-dance font-bold`}
          >
            E-Motion Blogs
          </h1>
        </div>
      </div>
    </div>
  );
}
