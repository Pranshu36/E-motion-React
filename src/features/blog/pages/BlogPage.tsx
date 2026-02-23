import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import Loader from '../../../components/Loader';
import { useTheme } from '../../../context/ThemeProvider';
import { getNewsArticals } from '../api/blog.api';
import BlogCard from '../components/BlogCard';
import BlogPoster from '../components/BlogPoster';
import Recentblog from '../components/RecentBlog';
import { DEFAULT_NEWS_SEARCH } from '../constants/blog.constant';
import { NEWS_QUERY_KEY } from '../constants/queryKeys';
import type { ArticalType } from '../schemas/news.schema';

export default function BlogPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const { isDark } = useTheme();
  const { data, isLoading } = useQuery({
    queryKey: [NEWS_QUERY_KEY.ALL, search, page],
    queryFn: () =>
      getNewsArticals({
        search: search === '' ? DEFAULT_NEWS_SEARCH : search,
        page,
      }),
  });
  const articles: ArticalType[] = data?.articles;

  return (
    <>
      <BlogPoster />
      <div className='my-7 px-10 grid grid-cols-1 gap-y-16 lg:gap-7 lg:grid-cols-10'>
        <div className=' w-full flex flex-col col-span-7 gap-5'>
          {isLoading && <Loader isPartial />}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
            {articles?.map((element) => {
              return (
                <BlogCard
                  key={element.url}
                  url={element.url}
                  author={element.author}
                  source={element.source.name}
                  title={element.title}
                  description={element.description}
                  publishedAt={element.publishedAt}
                  image={element.urlToImage}
                />
              );
            })}
          </div>
          <div className='flex justify-between px-5 text-lg'>
            <button
              onClick={() => {
                if (page > 1) setPage(page - 1);
              }}
              disabled={page === 1}
              className={`font-semibold ${
                page === 1 ? 'text-[#69957690]' : 'text-[#699576]'
              }`}
            >
              &larr; Previous
            </button>
            <button
              onClick={() => {
                setPage(page + 1);
              }}
              className={`mr-2 text-[#699576] font-semibold `}
            >
              Next &rarr;
            </button>
          </div>
        </div>
        <div className='w-full flex flex-col col-span-3 gap-5'>
          <div className='shadow-3xl w-full px-8 rounded-md flex flex-col gap-3 py-7 bg-[#699576]'>
            <div className='flex flex-col gap-1'>
              <h1 className='text-white font-montserrat font-medium'>SEARCH</h1>
              <p className='border-solid rounded-sm border-2 border-white'></p>
            </div>
            <form className='bg-white py-3 flex items-center mt-2 rounded-md font-montserrat'>
              <input
                className='outline-none pl-3 placeholder:text-black bg-transparent w-full'
                type='text'
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder='Search Here...'
              />
            </form>
          </div>
          <div className='shadow-3xl rounded-md flex flex-col gap-1 w-full px-8 py-7'>
            <h1
              className={`${
                isDark ? 'text-white' : 'text-black'
              } font-montserrat font-medium`}
            >
              RECENT POSTS
            </h1>
            <Recentblog />
          </div>
        </div>
      </div>
    </>
  );
}
