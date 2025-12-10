import { useTheme } from '../../../context/ThemeProvider';
import { GALLERY_IMAGES } from '../constants/gallery';

export default function GallerySection() {
  const { isDark } = useTheme();

  return (
    <div className='flex flex-col px-14 py-10 gap-10'>
      <div className='flex flex-col text-center gap-7'>
        <h1
          className={`${isDark ? 'text-white' : 'text-black'} font-bold text-4xl font-montserrat`}
        >
          Explore Our E-waste Management Journey
        </h1>
        <p className='text-slate-400 font-montserrat font-medium'>
          Take a look at some snapshots of our work in action
        </p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {GALLERY_IMAGES.map((image, index) => {
          return (
            <img
              key={`${image} ${index}`}
              className='h-[45vh] w-full rounded-lg shadow-3xl'
              src={image}
              alt={`gallery image ${index}`}
            />
          );
        })}
      </div>
    </div>
  );
}
