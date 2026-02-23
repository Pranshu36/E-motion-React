import { useTheme } from '../../../context/ThemeProvider';

interface BlogCardProps {
  url: string;
  author: string | null;
  source: string;
  title: string;
  description: string;
  publishedAt: string;
  image: string;
}

export default function BlogCard({
  author,
  description,
  image,
  publishedAt,
  source,
  title,
  url,
}: BlogCardProps) {
  const { isDark } = useTheme();
  return (
    <div
      className={`text-white shadow-3xl  flex flex-col items-center rounded-xl `}
    >
      <img
        className='h-[40vh] object-cover w-full rounded-t-xl'
        src={image}
        alt=''
      />
      <div className='flex flex-col grow justify-between gap-3 px-3 py-3'>
        <h1 className='text-white bg-red-600 text-center self-start px-2 rounded-md font-montserrat font-semibold'>
          {source}
        </h1>
        <h1
          className={`font-bold font-montserrat ${isDark ? 'text-[#a6e22e]' : 'text-[#739e7b]'} `}
        >
          {title}
        </h1>
        <p
          className={`font-montserrat ${isDark ? 'text-white' : 'text-black'}`}
        >
          {description.length > 85
            ? description.slice(0, 85) + '....'
            : description}
        </p>
        <p className={`font-montserrat text-sm font-medium text-slate-400`}>
          By{' '}
          {author === null
            ? 'Unknown'
            : author.length > 30
              ? author.slice(0, 30)
              : author}{' '}
          on{' '}
          {new Date(publishedAt).toLocaleDateString('en-GB', {
            weekday: 'short',
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}
        </p>
        <a
          className={`font-montserrat text-center text-sm self-start py-2 px-4 rounded-md bg-[#0d6efd] text-white`}
          href={url}
          target='blank'
        >
          Read More{' '}
        </a>
      </div>
    </div>
  );
}
