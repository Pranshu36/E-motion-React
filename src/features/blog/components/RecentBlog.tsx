import { useQuery } from '@tanstack/react-query';

import Loader from '../../../components/Loader';
import { getNewsArticals } from '../api/blog.api';
import { NEWS_QUERY_KEY } from '../constants/queryKeys';
import type { ArticalType } from '../schemas/news.schema';

import RecentBlogCard from './RecentBlogCard';

export default function Recentblog() {
  const { data, isLoading } = useQuery({
    queryKey: [NEWS_QUERY_KEY.ALL],
    queryFn: () =>
      getNewsArticals({
        page: 1,
        pageSize: 10,
        sortBy: 'publishedAt',
      }),
  });
  const articles: ArticalType[] = data?.articles;

  return (
    <>
      {isLoading && <Loader />}
      <div>
        {articles?.slice(0, 6).map((element) => {
          return (
            <RecentBlogCard
              title={element.title}
              image={element.urlToImage}
              date={element.publishedAt}
              url={element.url}
            />
          );
        })}
      </div>
    </>
  );
}
