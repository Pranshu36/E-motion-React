import { useTheme } from '../../../context/ThemeProvider';

interface RecentBlogCardProps {
  title: string;
  image: string;
  date: string;
  url: string;
}

export default function RecentBlogCard({
  title,
  date,
  image,
  url,
}: RecentBlogCardProps) {
  const { isDark } = useTheme();

  return (
    <div className=''>
      <p className='border-solid border-b-2'></p>
      <a href={url} target='blank'>
        <div className='flex flex-row items-center justify-between py-5 gap-2 hover:scale-105 transition-transform'>
          <div className='flex flex-col w-[80vw] gap-1'>
            <p className={`text-slate-400 font-normal font-montserrat`}>
              {new Date(date).toLocaleDateString('en-GB', {
                weekday: 'short',
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
            </p>
            <h1
              className={`${
                isDark ? 'text-white' : 'text-black'
              } font-montserrat text-sm leading-6`}
            >
              {title.length > 69 ? title.slice(0, 69) + '...' : title}
            </h1>
          </div>
          <div className='lg:w-[25vw]'>
            <img
              className='h-[70px] w-[70px] object-cover rounded-md'
              src={image}
              alt=''
            />
          </div>
        </div>
      </a>
    </div>
  );
}
